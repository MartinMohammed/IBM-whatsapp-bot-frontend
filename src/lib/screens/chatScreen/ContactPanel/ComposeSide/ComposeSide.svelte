<script lang="ts">
  import ComposeHeading from "./ComposeHeading.svelte";
  import SearchBox from "../../../../components/SearchBox.svelte";
  import ContactItem from "../ContactItem.svelte";
  import { chatScreenDataStore } from "../../../../stores";
  import { writable } from "svelte/store";
  const { allContacts } = chatScreenDataStore;

  const SearchTerm = writable<string>("");
</script>

<div class="side-two">
  <ComposeHeading />

  <!-- Search box for the compose view -->
  <SearchBox
    placeholderText={"Search People"}
    hasIcon={true}
    inputValue={SearchTerm}
  />

  <div class="row compose-sideBar">
    <!-- Unique key ensures, element is only rendered once -- keyed reconciliation -->
    {#each Object.values($allContacts) as contactItem (contactItem.wa_id)}
      <ContactItem {contactItem} animated={false} time="18:18" />
    {/each}
  </div>
</div>

<style>
  .side-two {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
    position: relative;
    top: -100%;
    left: -100%;
    -webkit-transition: left 0.3s ease;
    transition: left 0.3s ease;
  }

  .compose-sideBar {
    padding: 0 !important;
    margin: 0 !important;
    background-color: #fff;
    overflow-y: auto;
    border: 1px solid #f7f7f7;
    height: calc(100% - 160px);
  }
</style>
