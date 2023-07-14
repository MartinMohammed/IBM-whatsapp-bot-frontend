<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { io } from "socket.io-client";
  const SOCKET_TARGET_URL = "http://192.168.2.38:3000";

  // Side One
  import RecentContactsSide from "./ContactPanel/RecentContacts/RecentContactsSide.svelte";

  // Side Two
  import ComposeSide from "./ContactPanel/ComposeSide/ComposeSide.svelte";

  // Right pane
  import ChatWindow from "./ChatWindow/ChatWindow.svelte";

  import { chatScreenDataStore } from "../../stores";
  import fetchMessagesOfUser from "../../../util/fetchMessagesOfUser";
  import { fetchUsers } from "../../../util/fetchUsers";
  const {
    currentChatUserWAID,
    clientSocket,
    allContacts,
    allMessagesOfCurrentChatUser,
  } = chatScreenDataStore;
  /**
   * Set up event listeners and socket connection when the component is mounted.
   */
  onMount(() => {
    const sideTwoDivElement: HTMLDivElement =
      document.querySelector(".side-two")!;
    const commentIcon = document.querySelector(
      'div[data-js-selector="compose-open"]'
    );
    const newMessageBack = document.querySelector(
      'div[data-js-selector="compose-close"]'
    );

    const openCompose = () => {
      sideTwoDivElement.style.setProperty("left", "0");
    };

    const closeCompose = () => {
      sideTwoDivElement.style.setProperty("left", "-100%");
    };

    commentIcon?.addEventListener("click", openCompose);
    newMessageBack?.addEventListener("click", closeCompose);

    // Establish socket connection to the chatView namespace
    $clientSocket = io(`${SOCKET_TARGET_URL}/chatView`);

    /** Fetch all contacts: */
    fetchUsers(["name", "wa_id"])
      .then((fetchedContacts) => {
        if (fetchedContacts !== undefined && fetchedContacts.length > 0) {
          fetchedContacts.forEach((fetchedContact) => {
            allContacts.update((prevAllContacts) => {
              prevAllContacts[fetchedContact.wa_id] = fetchedContact;
              return prevAllContacts;
            });
          });
          // After fetching set the currentChatUser to the first Item of the allContacts
          $currentChatUserWAID = fetchedContacts[0].wa_id;
        }
      })
      .catch((error) => {
        console.error(`Failed to fetch all contact items ${error}.`);
      });

    // Clean up event listeners and disconnect socket on component teardown
    return () => {
      commentIcon?.removeEventListener("click", openCompose);
      newMessageBack?.removeEventListener("click", closeCompose);
      $clientSocket.disconnect();
    };
  });

  // Subscribe to changes in currentChatUserWAID - changes initially when 'onMount'
  currentChatUserWAID.subscribe((newCurrentChatUserWAID) => {
    if (newCurrentChatUserWAID !== undefined) {
      // Tell server that we've switched chat.
      $clientSocket.emit("chatSwitch", newCurrentChatUserWAID);

      // Fetch messages of the current chat user
      fetchMessagesOfUser(newCurrentChatUserWAID)
        .then((clientStoredMessages) => {
          if (clientStoredMessages !== null) {
            allMessagesOfCurrentChatUser.set(clientStoredMessages);
          }
        })
        .catch((error) => {
          console.error(
            `Failed to fetch all messages of the current user: ${error}`
          );
        });
    }
  });

  clientSocket.subscribe((currentClientSocket) => {
    if (currentClientSocket !== undefined) {
      console.log("change of socket.");
      // Event listener for "message" event
      currentClientSocket.on("message", (msg) => {
        console.log("received a new message");
        // Set the currentChatUserWAID if there are no users stored yet
        currentChatUserWAID.set(msg.wa_id);
        allMessagesOfCurrentChatUser.update((prevMessages) => [
          ...prevMessages,
          msg,
        ]);
      });

      // Event listener for "contact" event
      currentClientSocket.on("contact", (contact) => {
        // Set the currentChatUserWAID to the newly added contact if there are no users stored yet

        /** Check if this contact is already stored locally */
        if (!(contact.wa_id in $allContacts)) {
          allContacts.update((prevContacts) => {
            prevContacts[contact.wa_id] = contact;
            return prevContacts;
          });
          $currentChatUserWAID = contact.wa_id;
        }
      });
    }
  });
</script>

<div class="container app">
  <div class="row app-one">
    <!-- Left hand panel -->
    <div class="col-sm-4 side">
      <RecentContactsSide />
      <ComposeSide />
    </div>

    <!-- Right hand panel -->
    <ChatWindow />
  </div>
</div>

<style>
  .app {
    position: relative;
    overflow: hidden;
    top: 19px;
    height: calc(100% - 38px);
    margin: auto;
    padding: 0;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  }

  .app-one {
    background-color: #f7f7f7;
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  }

  .side {
    padding: 0;
    margin: 0;
    height: 100%;
  }

  @media screen and (max-width: 700px) {
    .app {
      top: 0;
      height: 100%;
    }
  }
</style>
