<script lang="ts">
  import { onMount } from "svelte";

  // Side One
  import SideOne from "./ContactPanel/RecentContacts/RecentContactsSide.svelte";

  // Side Two
  import SideTwo from "./ContactPanel/ComposeSide/ComposeSide.svelte";

  // Right pane
  import ChatWindow from "./ChatWindow/ChatWindow.svelte";

  /** When the component gets mounted, add the event listeners. */
  onMount(() => {
    /** Open the contact list, and go away from the recent chats*/
    const sideTwoDivElement: HTMLDivElement =
      document.querySelector(".side-two");

    // TODO: Switch to event modifiers
    const openCompose = () => {
      sideTwoDivElement.style.setProperty("left", "0");
    };

    /** Close the contact list, and go back to the recent chats */
    const closeCompose = () => {
      sideTwoDivElement.style.setProperty("left", "-100%");
    };

    const commentIcon = document.querySelector(
      'div[data-js-selector="compose-open"]'
    );
    const newMessageBack = document.querySelector(
      'div[data-js-selector="compose-close"]'
    );

    commentIcon.addEventListener("click", openCompose);
    newMessageBack.addEventListener("click", closeCompose);

    return () => {
      commentIcon.removeEventListener("click", openCompose);
      newMessageBack.removeEventListener("click", closeCompose);
    };
  });
</script>

<div class="container app">
  <div class="row app-one">
    <!-- Left hand panel -->
    <div class="col-sm-4 side">
      <SideOne />
      <SideTwo />
    </div>

    <!-- Right hand panel -->
    <ChatWindow />
  </div>
</div>

<style>
  .app {
    position: relative;
    overflow: hidden;
    top: 19px;
    height: calc(100% - 38px);
    margin: auto;
    padding: 0;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  }

  .app-one {
    background-color: #f7f7f7;
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  }

  .side {
    padding: 0;
    margin: 0;
    height: 100%;
  }

  @media screen and (max-width: 700px) {
    .app {
      top: 0;
      height: 100%;
    }
  }
</style>
