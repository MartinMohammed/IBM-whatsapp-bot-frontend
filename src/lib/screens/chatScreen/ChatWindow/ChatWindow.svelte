<script lang="ts">
  // ---------------------- COMPONENTS ----------------------
  import TextArea from "../../../components/TextArea.svelte";
  import Icon from "../../../components/icons/Icon.svelte";
  import ChatHeading from "./ChatHeading.svelte";
  import ChatMessageItem from "./ChatMessageItem.svelte";
  // ---------------------- COMPONENTS ----------------------

  // ---------------------- STATE ----------------------
  import { chatScreenDataStore } from "../../../../stores";
  // ---------------------- STATE ----------------------

  // ---------------------- UTILITIES ----------------------
  import getUnixTimestamp from "../../../../util/getUnixTimestamp";
  import { WeekDayMap, convertUnixTimestamp } from "../../../../util/date";
  // ---------------------- UTILITIES ----------------------

  // ---------------------- TYPES ----------------------
  import type { IClientStoredMessage } from "chat-app-server";
  import fetchMessagesOfUser from "../../../../util/fetchMessagesOfUser";

  // ---------------------- TYPES ----------------------

  const {
    currentChatUserWAID,
    messageInputValue,
    clientSocket,
    allMessagesOfCurrentChatUser,
    pageCountOfCurrentChatUser,
  } = chatScreenDataStore;

  function onInputSubmit() {
    if ($currentChatUserWAID && $messageInputValue !== "") {
      // Perform client-side validation before sending the message to the server

      // Count the number of messages before adding the new one; it will also represent the index of the new message
      const messagesCount = $allMessagesOfCurrentChatUser.length;

      const newWhatsappMessage: IClientStoredMessage = {
        text: $messageInputValue,
        timestamp: getUnixTimestamp(),
        wa_id: $currentChatUserWAID,
        sentByClient: false,
        wam_id: undefined,
      };

      // Add the new message to the array of messages
      allMessagesOfCurrentChatUser.update((prevMessages) => [
        ...prevMessages,
        newWhatsappMessage,
      ]);

      // Emit the message to the server
      $clientSocket.emit("message", newWhatsappMessage, (wamid) => {
        if (!wamid) console.error("WAMID was not provided.");
        else {
          // Receive the WAMID from the server and set it in the corresponding message
          // WE dont want to re-render that's why we access the store and change the value
          $allMessagesOfCurrentChatUser[messagesCount]["wam_id"] = wamid;
        }
      });
      $messageInputValue = "";
    } else {
      console.error("Cannot log if no current user is selected.");
    }
  }

  function showPreviousMessages(e: Event) {
    // Increment the page count only if there are more messages available to fetch.
    // The sentinel value of -1 indicates that no more messages are left to fetch.
    if ($pageCountOfCurrentChatUser !== -1) {
      pageCountOfCurrentChatUser.update((prevValue) => prevValue + 1);
    }

    pageCountOfCurrentChatUser.subscribe(async (currentPageCount) => {
      const newPrevMessages = await fetchMessagesOfUser(
        $currentChatUserWAID,
        -currentPageCount
      );
      if (newPrevMessages === null || newPrevMessages.length !== 10) {
        $pageCountOfCurrentChatUser = -1; // No more messages are left.
      } else {
        // Update the store.
        allMessagesOfCurrentChatUser.update((prevAllMessages) => {
          console.log(newPrevMessages);
          return newPrevMessages.concat(prevAllMessages);
        });
      }
    });
  }
</script>

<div class="col-sm-8 conversation">
  <ChatHeading userIsOnline={true} />
  <div
    class="row message"
    id="conversation"
    style={`${
      $pageCountOfCurrentChatUser === -1 ? "padding-top: 10px !important;" : ""
    }`}
  >
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    {#if $pageCountOfCurrentChatUser !== -1}
      <div class="row message-previous" on:click={showPreviousMessages}>
        <div class="col-sm-12 previous">
          <!-- svelte-ignore a11y-missing-attribute -->
          <a> Show Previous Messages! </a>
        </div>
      </div>
    {/if}

    <!-- List of messages -->
    {#each $allMessagesOfCurrentChatUser as message, index (index)}
      <ChatMessageItem
        text={message.text}
        weekday={WeekDayMap[convertUnixTimestamp(message.timestamp).getDay()]}
        isReceiver={message.sentByClient}
      />
    {/each}
  </div>

  <div class="row reply">
    <Icon
      iconType="emoji-icon"
      iconSize="default"
      pullRight={false}
      columnWidth={1}
    />

    <!-- Allow the event to bubble up -->
    <TextArea {onInputSubmit} />

    <Icon
      columnWidth={1}
      iconType="send-icon"
      iconSize="default"
      ariaHidden={true}
      pullRight={false}
      onIconClick={onInputSubmit}
    />

    <Icon
      columnWidth={1}
      pullRight={false}
      ariaHidden={true}
      iconSize={"default"}
      iconType="options-icon"
    />
  </div>
</div>

<style>
  /* Conversation */

  .conversation {
    padding: 0 !important;
    margin: 0 !important;
    height: 100%;
    /* Uncomment the width in order to let the chat disappear (mobile) */
    /* width: 100%; */
    /* overflow-y: auto; */
    border-left: 1px solid rgba(0, 0, 0, 0.08);
  }

  .message {
    padding: 0 !important;
    margin: 0 !important;
    background-size: cover;
    overflow-y: auto;
    border: 1px solid #f7f7f7;
    height: calc(100% - 120px);
  }

  .message-previous {
    margin: 0 !important;
    padding: 0 !important;
    height: auto;
    width: 100%;
  }

  .previous {
    font-size: 15px;
    text-align: center;
    padding: 10px !important;
    cursor: pointer;
  }

  .previous a {
    text-decoration: none;
    font-weight: 700;
  }

  /* Reply */

  .reply {
    height: 60px;
    width: 100%;
    background-color: #f5f1ee;
    padding: 10px 5px 10px 5px !important;
    margin: 0 !important;
    z-index: 1000;
  }

  @media screen and (max-width: 700px) {
    /* Conversation */
    .conversation {
      padding: 0 !important;
      margin: 0 !important;
      height: 100%;
      /* width: 100%; */
      border-left: 1px solid rgba(0, 0, 0, 0.08);
      /* overflow-y: auto; */
    }
    .message {
      height: calc(100% - 140px);
    }
    .reply {
      height: 70px;
    }
  }
</style>
