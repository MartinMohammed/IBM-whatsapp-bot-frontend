import { writable } from "svelte/store";

/**
 * Store for managing the application data.
 */
const dataStore = {
  /**
   * Writable store for storing all contacts.
   * TODO: use a 'isRecent' boolean to prevent redudancy and keep track if certain contact is recent. 
   */
  allContacts: writable([...Array(8)].map((_, index) => index + 1)),
};

export default dataStore;