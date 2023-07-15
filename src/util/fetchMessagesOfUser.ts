import type { IClientStoredMessage, IUser } from "chat-app-server";
import { SERVER_BASE_URL } from "./Constants";

/**
 * This function is responsible for fetching all WhatsApp messages of a specific user.
 * @param wa_id - The WhatsApp ID of the user.
 * @returns A promise that resolves to an array of client stored messages or null if an error occurs.
 */
async function fetchMessagesOfUser(wa_id: IUser["wa_id"]): Promise<IClientStoredMessage[] | null> {
    const url = `${SERVER_BASE_URL}/api/users/${wa_id}/messages`;
    const response = await fetch(url);
    const data = await response.json(); // Use response.json() to retrieve the response data
    return data;
  }
  

export default fetchMessagesOfUser