<script lang="ts">
  // Import statements
  import AvatarIcon from "../../../components/icons/AvatarIcon.svelte";
  import { chatScreenDataStore } from "../../../../stores";
  import { slide, blur } from "svelte/transition";
  import { backIn } from "svelte/easing";
  import type { IClientStoredContact } from "chat-app-server";

  // Exported variables
  export let contactItem: IClientStoredContact;
  export let time: string = "";
  export let animated: boolean = false;
  export let animationDelay: number = 0;

  // Destructure values from contactItem
  const { name, whatsappProfileImage, wa_id } = contactItem;

  // Access currentChatUserWAID from chatScreenDataStore
  const { currentChatUserWAID } = chatScreenDataStore;

  // Reactive statement
  $: shouldAnimateOnClick = false;

  // DOM reference
  let HTMLContactItemDiv: HTMLDivElement;

  function onContactItemClick(e: Event) {
    // Update the currentChatUser --> fetch all messages of the new current Chat user.
    $currentChatUserWAID = wa_id;
    shouldAnimateOnClick = true;
    setTimeout(() => {
      shouldAnimateOnClick = false;
    }, 500);
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="row sideBar-body"
  class:contact-item-clicked={shouldAnimateOnClick}
  bind:this={HTMLContactItemDiv}
  in:slide={{
    axis: "x",
    duration: animated ? 800 : 0,
    easing: backIn,
    delay: animationDelay * 1000,
  }}
  out:blur={{ duration: animated ? 600 : 0 }}
  on:click={onContactItemClick}
>
  <div class="col-sm-3 col-xs-3 sideBar-avatar">
    <AvatarIcon size="default" src={whatsappProfileImage} />
  </div>
  <div class="col-sm-9 col-xs-9 sideBar-main">
    <div class="row">
      <div class="col-sm-8 col-xs-8 sideBar-name">
        <span class="name-meta">{name}</span>
      </div>
      <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
        <span class="time-meta pull-right">{time}</span>
      </div>
    </div>
  </div>
</div>

<style>
  @import "../../../../sass/_animations.scss";

  .sideBar-body {
    position: relative;
    padding: 10px !important;
    border-bottom: 1px solid #f7f7f7;
    height: 72px;
    margin: 0 !important;
    cursor: pointer;
  }

  .sideBar-body:hover {
    background-color: #f2f2f2;
  }

  .sideBar-avatar {
    text-align: center;
    padding: 0 !important;
  }

  .sideBar-main {
    padding: 0 !important;
  }

  .sideBar-main .row {
    padding: 0 !important;
    margin: 0 !important;
  }

  .sideBar-name {
    padding: 10px !important;
  }

  .name-meta {
    font-size: 100%;
    padding: 1% !important;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #000;
  }

  .sideBar-time {
    padding: 10px !important;
  }

  .time-meta {
    text-align: right;
    font-size: 12px;
    padding: 1% !important;
    color: rgba(0, 0, 0, 0.4);
    vertical-align: baseline;
  }

  .contact-item-clicked {
    animation: pulse-animation 0.5s ease;
  }

  @media screen and (max-width: 700px) {
    .sideBar-body {
      height: 80px;
    }
    .sideBar-avatar {
      text-align: left;
      padding: 0 8px !important;
    }

    .sideBar-main {
      padding: 0 !important;
    }
    .sideBar-main .row {
      padding: 0 !important;
      margin: 0 !important;
    }
    .sideBar-name {
      padding: 10px 5px !important;
    }
    .name-meta {
      font-size: 16px;
      padding: 5% !important;
    }
    .sideBar-time {
      padding: 10px !important;
    }
    .time-meta {
      text-align: right;
      font-size: 14px;
      padding: 4% !important;
      color: rgba(0, 0, 0, 0.4);
      vertical-align: baseline;
    }
  }
</style>
