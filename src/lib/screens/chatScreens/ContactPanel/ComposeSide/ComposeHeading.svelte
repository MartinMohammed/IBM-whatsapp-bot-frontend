<script>
  import Icon from "../../../../components/icons/Icon.svelte";
</script>

<div class="row newMessage-heading">
  <div class="row newMessage-main">
    <Icon
      iconType="back-icon"
      pullRight={false}
      jsSelector="compose-close"
      columnWidth={2}
      iconSize="small"
      ariaHidden={true}
    />
    <div class="col-sm-10 col-xs-10 newMessage-title">New Chat</div>
  </div>
</div>

<style>
  .newMessage-heading {
    padding: 10px 16px 10px 15px !important;
    margin: 0 !important;
    height: 100px;
    width: 100%;
    background-color: #00bfa5;
    z-index: 1001;
  }

  .newMessage-main {
    padding: 10px 16px 0 15px !important;
    margin: 0 !important;
    height: 60px;
    margin-top: 30px !important;
    width: 100%;
    z-index: 1001;
    color: #fff;
  }

  .newMessage-title {
    font-size: 18px;
    font-weight: 700;
    padding: 10px 5px !important;
  }
</style>
