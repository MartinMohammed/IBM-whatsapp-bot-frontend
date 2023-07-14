<script lang="ts">
  import { onMount } from "svelte";
  import { io } from "socket.io-client";
  const SOCKET_TARGET_URL = "http://localhost:3000";

  // Side One
  import SideOne from "./ContactPanel/RecentContacts/RecentContactsSide.svelte";

  // Side Two
  import SideTwo from "./ContactPanel/ComposeSide/ComposeSide.svelte";

  // Right pane
  import ChatWindow from "./ChatWindow/ChatWindow.svelte";
  import type { IUser } from "chat-app-server";

  import { chatScreenDataStore } from "../../stores";
  import fetchMessagesOfUser from "../../../util/fetchMessagesOfUser";
  const { users, currentChatUserWAID, clientSocket } = chatScreenDataStore;

  /** When the component gets mounted, add the event listeners. */
  onMount(() => {
    /** Open the contact list, and go away from the recent chats*/
    const sideTwoDivElement: HTMLDivElement =
      document.querySelector(".side-two")!;

    // TODO: Switch to event modifiers
    const openCompose = () => {
      sideTwoDivElement.style.setProperty("left", "0");
    };

    /** Close the contact list, and go back to the recent chats */
    const closeCompose = () => {
      sideTwoDivElement.style.setProperty("left", "-100%");
    };

    const commentIcon = document.querySelector(
      'div[data-js-selector="compose-open"]'
    );
    const newMessageBack = document.querySelector(
      'div[data-js-selector="compose-close"]'
    );
    /**
     * Listen for changes in the currentChatUserWAID - if changed, it means the chat has switched.
     */
    currentChatUserWAID.subscribe(async (newCurrentChatUserWAID) => {
      if (newCurrentChatUserWAID !== undefined) {
        const clientStoredMessages = await fetchMessagesOfUser(
          newCurrentChatUserWAID
        );
        if (clientStoredMessages !== null) {
          users.update((prevUsers) => {
            const currentUser = prevUsers[$currentChatUserWAID];
            if (currentUser) {
              currentUser.whatsapp_messages = [...clientStoredMessages]; // Use spread syntax with an iterable
              prevUsers[$currentChatUserWAID] = currentUser;
            }

            return prevUsers;
          });
        }
      }
    });

    /** Fetch all contacts from the backend */

    commentIcon?.addEventListener("click", openCompose);
    newMessageBack?.addEventListener("click", closeCompose);

    /** Establish socket connection to messages namespace */
    clientSocket.set(io(`${SOCKET_TARGET_URL}/chatView`));

    $clientSocket.on("message", (msg) => {
      console.log($clientSocket?.data?.currentChatUser, "data");
      // No user currently saved?
      if (Object.keys($users).length === 0) {
        currentChatUserWAID.set(msg.wa_id);
      }
      // Add new message to the whatsapp messages of the user and update the users store.
      users.update((prevUsers) => {
        const user = prevUsers[msg["wa_id"]];

        // TODOonMount, fetch all users from rest api, if now a user comes after fetching from REST API,
        // just create a new one on the frontend when a message is received from a yet unknown user.
        if (!user) {
          const newUser: IUser = {
            name: "",
            wa_id: msg["wa_id"],
            whatsapp_messages: [],
          };
          // Add him into the users list.
          prevUsers[msg["wa_id"]] = newUser;
        }
        prevUsers[msg["wa_id"]].whatsapp_messages.push(msg);
        return prevUsers;
      });
    });

    $clientSocket.on("contact", (contact) => {
      console.log($currentChatUserWAID);

      console.log("received contact");
      // We're only interested in if this is a new contact or if no users are currently locally stored.
      if (!(contact.wa_id in $users)) {
        // Our only user, will be our default chat.
        if (Object.keys($users).length === 0) {
          $currentChatUserWAID = contact.wa_id;

          // Update the clientSocket data with the currentChatUser
          clientSocket.update((prevClientSocket) => {
            // If data property does not exist, initialize it as an empty object
            if (prevClientSocket.data === undefined) {
              prevClientSocket.data = { currentChatUser: "" };
            }
            // Add the socket data to previous clientSocket
            // prevClientSocket.data = {
            //   ...$clientSocket.data,
            //   currentChatUser: contact.wa_id,
            // };
            // New version.
            return prevClientSocket;
          });
        }

        // Create a new user who has no messages yet.
        const newContact: IUser = {
          name: contact.name,
          wa_id: contact.wa_id,
          whatsapp_messages: [],
        };

        // Update the users state with the new contact
        users.update((prevUsers) => {
          prevUsers[contact.wa_id] = newContact;
          return prevUsers;
        });
      }
    });

    // Cleanup / teardown
    return () => {
      commentIcon?.removeEventListener("click", openCompose);
      newMessageBack?.removeEventListener("click", closeCompose);
      // Disconnects the socket manually. In that case, the socket will not try to reconnect.
      $clientSocket.disconnect();
    };
  });
</script>

<div class="container app">
  <div class="row app-one">
    <!-- Left hand panel -->
    <div class="col-sm-4 side">
      <SideOne />
      <SideTwo />
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
