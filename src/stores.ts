import { writable } from "svelte/store";
import type {
  IClientStoredContact,
  ClientToServerEventsMessagesType,
  ServerToClientEventsMessagesType,
  SocketDataMessagesType,
  IClientStoredMessage,
  IUser,
} from "chat-app-server";
import { Socket } from "socket.io-client";

/** Represents all contacts that have at least one message with the user */
const allContacts = writable<{
  [key: IUser["wa_id"]]: IClientStoredContact;
}>({});

const allMessagesOfCurrentChatUser = writable<IClientStoredMessage[]>([]);

/** Tracks the page count for the messages shown in the ChatWindow.
 *  It increments when 'ShowPreviousMessages' is triggered.
 */
const pageCountOfCurrentChatUser = writable<number>(1);

/**
 * Writable store for storing the WhatsApp ID of the current chat user.
 * Represents the user with whom the WhatsApp dashboard is currently engaging in a chat or conversation.
 */
const currentChatUserWAID = writable<IUser["wa_id"]>("");

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
  pageCountOfCurrentChatUser,
  allMessagesOfCurrentChatUser,
  allContacts,
  clientSocket,
  currentChatUserWAID,
  messageInputValue,
};

const isMobile = writable<boolean>(
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
);

export const generalApplicationStore = {
  isMobile,
};

/** Whether the inital Login Modal/ Form Control should be displayed */
const showLoginModal = writable<boolean>(false);

/** Whether the Registration Form Control should be displayed after Login Form Control */
const showRegistrationFormControl = writable<boolean>(false);

/**
 * Store for managing the application data.
 */
export const homepageStore = {
  showLoginModal,
  showRegistrationFormControl,
};
