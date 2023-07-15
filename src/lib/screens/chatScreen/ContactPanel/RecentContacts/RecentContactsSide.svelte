<script lang="ts">
  import RecentContactsHeading from "./RecentContactsHeading.svelte";
  import SearchBox from "../../../../components/SearchBox.svelte";
  import ContactItem from "../ContactItem.svelte";
  import { chatScreenDataStore } from "../../../../stores";
  import { writable } from "svelte/store";
  import type { IClientStoredContact } from "chat-app-server";

  const { allContacts } = chatScreenDataStore;

  /**
   * Store to hold the filtered contacts based on the search term.
   */
  const filteredContacts = writable<IClientStoredContact[]>(
    Object.values(allContacts)
  );

  /**
   * Flag to track the initial mount of ContactItem components.
   */
  $: initialMountOfContactItem = true;

  // Subscribe to changes in allContacts and update filteredContacts accordingly
  allContacts.subscribe((newContacts) => {
    filteredContacts.set(Object.values(newContacts));
  });

  /**
   * Store to hold the search term entered by the user.
   */
  const searchTermStore = writable<string>("");

  // Subscribe to changes in searchTerm and update filteredContacts accordingly
  searchTermStore.subscribe((newSearchTerm) => {
    filteredContacts.update((prevContacts) => {
      // No search term was applied
      if (newSearchTerm === "") return Object.values($allContacts);
      else {
        // Filtering means the ContactItems were displayed at least once.
        if (initialMountOfContactItem) initialMountOfContactItem = false;
        return prevContacts.filter((prevContact) =>
          prevContact.name.toLowerCase().includes(newSearchTerm.toLowerCase())
        );
      }
    });
  });
</script>

<div class="side-one">
  <RecentContactsHeading />

  <SearchBox
    placeholderText="Search"
    hasIcon={true}
    inputValue={searchTermStore}
  />

  <div class="row sideBar">
    {#each $filteredContacts as contactItem, index (contactItem.wa_id)}
      <ContactItem
        animationDelay={initialMountOfContactItem ? index * 0.25 : 0}
        {contactItem}
        animated={true}
        time="18:18"
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
