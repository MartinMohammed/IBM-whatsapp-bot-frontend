import { writable } from "svelte/store";
import type {
  IClientStoredContact,
  ClientToServerEventsMessagesType,
  IClientStoredUser,
  ServerToClientEventsMessagesType,
  SocketDataMessagesType,
  IClientStoredMessage,
  IUser,
} from "chat-app-server";
import { Socket } from "socket.io-client";

/**


/** Represents all contacts that have at least one message with the user */
const allContacts = writable<{
  [key: IUser["wa_id"]]: IClientStoredContact
}>({})

const allMessagesOfCurrentChatUser = writable<IClientStoredMessage[]>([])

/**
 * Writable store for storing the WhatsApp ID of the current chat user.
 * Represents the user with whom the WhatsApp dashboard is currently engaging in a chat or conversation.
 */
const currentChatUserWAID = writable<IClientStoredUser["wa_id"]>(undefined);

/** Keeps track of the textarea at the bottom of the ChatWindow */
const messageInputValue = writable<string>("");

export type ClientSocketType = Socket<
  ServerToClientEventsMessagesType,
  ClientToServerEventsMessagesType
> & { data?: SocketDataMessagesType };

/** Hold the value of the socket connection to the server for the 'messages' namespace */
const clientSocket = writable<ClientSocketType>(undefined);



/**
 * Store for managing the application data.
 */
export const chatScreenDataStore = {
  /**
   * Writable store for storing all contacts.
   * TODO: Use an 'isRecent' boolean to prevent redundancy and keep track of whether a certain contact is recent.
   */
  allMessagesOfCurrentChatUser, 
  allContacts, 
  clientSocket,
  currentChatUserWAID,
  messageInputValue,
};
