<script>
  import HeadingSideTwo from "./ComposeHeading.svelte";
  import SearchBox from "../../../../components/SearchBox.svelte";
  import ContactItem from "../ContactItem.svelte";
  import dataStore from "../../../../stores";

  const allContacts = dataStore.allContacts;
</script>

<div class="side-two">
  <HeadingSideTwo />

  <!-- Search box for the compose view -->
  <SearchBox placeholderText={"Search People"} hasIcon={true} />

  <div class="row compose-sideBar">
    {#each $allContacts as contact (contact)}
      <ContactItem name="John Doe" time="18:18" avatarIcon={contact} />
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
