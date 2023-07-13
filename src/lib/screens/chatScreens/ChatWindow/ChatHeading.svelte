<script lang="ts">
  // Represents the user heading, where the HeaderAvatarIcon is
  // the name and the status (online or not)
  import AvatarIcon from "../../../components/icons/AvatarIcon.svelte";
  import Icon from "../../../components/icons/Icon.svelte";
  export let chatUsername: string = "";
  export let userIsOnline: boolean = true;

  //   Should take an user as input...
</script>

<div class="row heading">
  <div class="col-sm-2 col-md-1 col-xs-3 heading-avatar">
    <AvatarIcon
      src="https://bootdey.com/img/Content/avatar/avatar6.png"
      size="small"
    />
    <!-- <div class="heading-avatar-icon">
          <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
        </div> -->
  </div>
  <div class="col-sm-8 col-xs-7 heading-name">
    <a class="heading-name-meta">{chatUsername} </a>
    {#if userIsOnline}
      <span class="heading-online">Online</span>
    {/if}
  </div>
  <Icon
    columnWidth={1}
    pullRight={true}
    ariaHidden={true}
    iconType="dot-icon"
    iconSize="default"
  />
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
  /* 
  .heading-dot {
    padding: 0;
    margin-left: 10px;
  }

  .heading-dot i {
    text-align: right;
    padding: 5px;
    color: #93918f;
    cursor: pointer;
  } */

  @media screen and (max-width: 700px) {
    .heading {
      height: 70px;
      background-color: #009688;
    }
    /* .fa-2x {
      font-size: 2.3em !important;
    } */
    .heading-avatar {
      padding: 0 !important;
    }

    /* .heading-dot {
      padding: 5px !important;
      margin-left: 10px !important;
    }
    .heading-dot i {
      color: #fff;
      cursor: pointer;
    } */
  }
</style>
