<script>
  // import CommentIcon from "../../../../icons/CommentIcon.svelte";
  import AvatarIcon from "../../../../components/icons/AvatarIcon.svelte";
  import Icon from "../../../../components/icons/Icon.svelte";
</script>

<div class="row heading">
  <div class="col-sm-3 col-xs-3 heading-avatar">
    <AvatarIcon
      src="https://bootdey.com/img/Content/avatar/avatar1.png"
      size="small"
    />
  </div>
  <Icon
    columnWidth={1}
    pullRight={true}
    ariaHidden={true}
    iconType="dot-icon"
    iconSize="default"
  />
  <!-- <div class="col-sm-1 col-xs-1 heading-dot pull-right">
      <i class="fa fa-ellipsis-v fa-2x pull-right" aria-hidden="true" />
    </div> -->

  <Icon
    jsSelector="compose-open"
    iconSize="default"
    columnWidth={2}
    ariaHidden={true}
    pullRight={true}
    iconType="comment-icon"
  />
  <!-- <div class="col-sm-2 col-xs-2 heading-compose pull-right">
      <i class="fa fa-comments fa-2x pull-right" aria-hidden="true" />
    </div> -->
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

  /* .heading-avatar-icon img {
    border-radius: 50%;
    height: 40px;
    width: 40px;
  } */

  @media screen and (max-width: 700px) {
    .heading {
      height: 70px;
      background-color: #009688;
    }

    .heading-avatar {
      padding: 0 !important;
    }
    /* .heading-avatar-icon img {
      height: 50px;
      width: 50px;
    } */
  }
</style>
