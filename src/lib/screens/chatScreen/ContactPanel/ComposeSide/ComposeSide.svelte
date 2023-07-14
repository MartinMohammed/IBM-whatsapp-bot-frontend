<script>
  import HeadingSideTwo from "./ComposeHeading.svelte";
  import SearchBox from "../../../../components/SearchBox.svelte";
  import ContactItem from "../ContactItem.svelte";
  import { chatScreenDataStore } from "../../../../stores";
  const { users } = chatScreenDataStore;
</script>

<div class="side-two">
  <HeadingSideTwo />

  <!-- Search box for the compose view -->
  <SearchBox placeholderText={"Search People"} hasIcon={true} />

  <div class="row compose-sideBar">
    {#each Object.values($users) as user (user.wa_id)}
      <ContactItem name={user.name} time="18:18" avatarIcon={1} />
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
