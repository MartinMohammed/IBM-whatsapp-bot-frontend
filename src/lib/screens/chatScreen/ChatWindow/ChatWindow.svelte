<script lang="ts">
  // ---------------------- COMPONENTS ----------------------
  import TextArea from "../../../components/TextArea.svelte";
  import Icon from "../../../components/icons/Icon.svelte";
  import ChatHeading from "./ChatHeading.svelte";
  import ChatMessageItem from "./ChatMessageItem.svelte";
  // ---------------------- COMPONENTS ----------------------

  // ---------------------- STATE ----------------------
  import { chatScreenDataStore } from "../../../stores";
  // ---------------------- STATE ----------------------

  // ---------------------- UTILITIES ----------------------
  import getUnixTimestamp from "../../../../util/getUnixTimestamp";
  // ---------------------- UTILITIES ----------------------

  // ---------------------- TYPES ----------------------
  import type { IClientStoredMessage } from "chat-app-server";
  // ---------------------- TYPES ----------------------

  const {
    currentChatUserWAID,
    messageInputValue,
    clientSocket,
    allMessagesOfCurrentChatUser,
  } = chatScreenDataStore;

  function onInputSubmit(e: Event) {
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
      allMessagesOfCurrentChatUser.update((prevMessages) => {
        prevMessages.push(newWhatsappMessage);
        return prevMessages;
      });

      // Emit the message to the server
      $clientSocket.emit("message", newWhatsappMessage, (wamid) => {
        if (!wamid) console.error("WAMID was not provided.");
        else {
          // Receive the WAMID from the server and set it in the corresponding message
          allMessagesOfCurrentChatUser.update((prevMessages) => {
            prevMessages[messagesCount]["wam_id"] = wamid;
            return prevMessages;
          });
        }
      });

      // Clear the text area field
      $messageInputValue = "";
    } else {
      console.error("Cannot log if no current user is selected.");
    }
  }
</script>

<div class="col-sm-8 conversation">
  <ChatHeading userIsOnline={true} />

  <div class="row message" id="conversation">
    <div class="row message-previous">
      <div class="col-sm-12 previous">
        <!-- TODO: Add an event listener to show messages from the last three days when clicked -->
        <!-- svelte-ignore a11y-missing-attribute -->
        <a> Show Previous Messages! </a>
      </div>
    </div>

    <!-- List of messages -->
    {#each $allMessagesOfCurrentChatUser as message}
      <ChatMessageItem
        text={message.text}
        weekday="Sunday"
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
    <TextArea on:inputSubmit />

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
