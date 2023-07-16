<script lang="ts">
  // Import statements
  import RecentContactsHeading from "./RecentContactsHeading.svelte";
  import SearchBox from "../../../../components/SearchBox.svelte";
  import ContactItem from "../ContactItem.svelte";
  import { chatScreenDataStore } from "../../../../../stores";
  import { writable } from "svelte/store";
  import type { IUser } from "chat-app-server";
  import { convertUnixTimestamp } from "../../../../../util/date";

  // Access allContacts from chatScreenDataStore
  const { allContacts, allMessagesOfCurrentChatUser, currentChatUserWAID } =
    chatScreenDataStore;

  /**
   * Flag to track the initial mount of ContactItem components.
   */
  $: initialMountOfContactItem = true;

  // Subscribe to changes in allContacts and update filteredContacts accordingly
  // allContacts.subscribe((newContacts) => {
  //   filteredContacts.set(Object.values(newContacts));
  // });

  /**
   * Store to hold the search term entered by the user.
   */
  const searchTerm = writable<string>("");

  /** Recomputed every time if one of the dependencies changes. */
  $: filteredContacts = Object.values($allContacts).filter(({ name }) => {
    // Search term was provided
    if ($searchTerm !== "") initialMountOfContactItem = false;

    /** User tried to filter */
    return name.toLocaleLowerCase().includes($searchTerm.toLowerCase());
  });

  /** Takes the wa_id of the current user and returns the last message in the chat of the user */
  function getTimeOfLastMessage(wa_id: IUser["wa_id"]) {
    // // TODO: should work for all users and not only the current one
    // const lastMessage =
    //   $allMessagesOfCurrentChatUser[$allMessagesOfCurrentChatUser.length - 1];

    // console.log($allMessagesOfCurrentChatUser[0]);
    // let dateToFormat;
    // console.log(wa_id == $currentChatUserWAID);
    // if (lastMessage !== undefined && wa_id === $currentChatUserWAID) {
    //   dateToFormat = convertUnixTimestamp(lastMessage.timestamp);
    // } else {
    //   dateToFormat = new Date(); // current date.
    // }
    const dateToFormat = new Date();
    const formattedTime = dateToFormat.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return formattedTime;
  }
</script>

<div class="side-one">
  <RecentContactsHeading />

  <SearchBox placeholderText="Search" hasIcon={true} inputValue={searchTerm} />

  <div class="row sideBar">
    {#each filteredContacts as contactItem, index (contactItem.wa_id)}
      <ContactItem
        animationDelay={initialMountOfContactItem ? index * 0.25 : 0}
        {contactItem}
        animated={true}
        time={getTimeOfLastMessage(contactItem["wa_id"])}
      />
    {/each}
  </div>
</div>

<style>
  .side-one {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    position: relative;
    display: block;
    top: 0;
  }

  .sideBar {
    user-select: none;
    padding: 0 !important;
    margin: 0 !important;
    background-color: #fff;
    overflow-y: auto;
    border: 1px solid #f7f7f7;
    height: calc(100% - 120px);
  }

  @media screen and (max-width: 700px) {
    .sideBar {
      height: calc(100% - 130px);
    }
  }
</style>
