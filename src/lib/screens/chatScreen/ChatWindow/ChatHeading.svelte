<script lang="ts">
  import { defaultWhatsappProfileImage } from "../../../../util/Constants";
  // Represents the user heading, where the HeaderAvatarIcon is
  // the name and the status (online or not)
  // ---------------------- COMPONENTS ----------------------
  import AvatarIcon from "../../../components/icons/AvatarIcon.svelte";
  import Icon from "../../../components/icons/Icon.svelte";
  // ---------------------- COMPONENTS ----------------------

  // ---------------------- STATE ----------------------
  import {
    chatScreenDataStore,
    generalApplicationStore,
  } from "../../../../stores";
  // ---------------------- STATE ----------------------

  // ---------------------- UTILITIES ----------------------

  // ---------------------- UTILITIES ----------------------

  // ---------------------- TYPES ----------------------

  // ---------------------- TYPES ----------------------
  const { isMobile } = generalApplicationStore;
  const { currentChatUserWAID, allContacts } = chatScreenDataStore;

  export let userIsOnline: boolean = true;
  $: whatsappProfileImage =
    $allContacts[$currentChatUserWAID]?.whatsappProfileImage ||
    defaultWhatsappProfileImage;

  //   Should take an user as input...
</script>

<div class="row heading">
  <!-- Only display the avatar of the currentChatUser if there is one  -->
  {#if $currentChatUserWAID !== ""}
    <div class="col-sm-2 col-md-1 col-xs-3 heading-avatar">
      <AvatarIcon src={whatsappProfileImage} size="small" />
    </div>
    <div class="col-sm-8 col-xs-7 heading-name">
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="heading-name-meta"
        >{$allContacts[$currentChatUserWAID]?.name}
      </a>
      {#if userIsOnline}
        <span class="heading-online">Online</span>
      {/if}
    </div>
    <Icon
      columnWidth={1}
      pullRight={true}
      ariaHidden={true}
      iconType={$isMobile ? "back-icon" : `dot-icon`}
      iconSize="default"
      onIconClick={$isMobile ? () => ($currentChatUserWAID = "") : () => {}}
    />
  {/if}
</div>

<style>
  .heading {
    padding: 10px 16px 10px 15px;
    margin: 0;
    height: 60px;
    width: 100%;
    background-color: #eee;
    z-index: 1000;
  }

  .heading-avatar {
    padding: 0;
    cursor: pointer;
  }

  .heading-name {
    padding: 0 !important;
    cursor: pointer;
  }

  .heading-name-meta {
    font-weight: 700;
    font-size: 100%;
    padding: 5px;
    padding-bottom: 0;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #000;
    display: block;
  }
  .heading-online {
    /* Uncomment in order to show that he is online. */
    padding: 0 5px;
    font-size: 12px;
    color: #93918f;
  }

  @media screen and (max-width: 700px) {
    .heading {
      height: 70px;
      background-color: #009688;
    }
    .heading-avatar {
      padding: 0 !important;
    }

    .heading-online {
      /* Uncomment in order to show that he is online. */
      padding: 0 5px;
      font-size: 12px;
      color: #fff;
    }
  }
</style>
