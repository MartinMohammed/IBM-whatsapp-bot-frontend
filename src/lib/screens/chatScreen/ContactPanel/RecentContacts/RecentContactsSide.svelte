<script>
  import RecentContactsHeading from "./RecentContactsHeading.svelte";
  import SearchBox from "../../../../components/SearchBox.svelte";
  import ContactItem from "../ContactItem.svelte";

  import { chatScreenDataStore } from "../../../../stores";
  // TODO: filter only those contacts that has property 'isRecent' to true;

  const { allContacts } = chatScreenDataStore;
</script>

<div class="side-one">
  <RecentContactsHeading />

  <SearchBox placeholderText="Search" hasIcon={true} />

  <div class="row sideBar">
    {#each Object.values($allContacts) as contact, index (contact.wa_id)}
      <ContactItem
        name={contact.name}
        wa_id={contact.wa_id}
        time="18:18"
        avatarIcon={(index + 1) % 6}
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
