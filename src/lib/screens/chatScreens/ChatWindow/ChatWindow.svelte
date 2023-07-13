<script lang="ts">
  import TextArea from "../../../components/TextArea.svelte";
  import Icon from "../../../components/icons/Icon.svelte";
  // import ReplySendIcon from "../../../icons/SendIcon.svelte";
  import ChatHeading from "./ChatHeading.svelte";
  import ChatMessageItem from "./ChatMessageItem.svelte";
</script>

<div class="col-sm-8 conversation">
  <ChatHeading userIsOnline={true} chatUsername="Jon Doe" />

  <div class="row message" id="conversation">
    <div class="row message-previous">
      <div class="col-sm-12 previous">
        <!-- TODO ADD EVENT LISTENER - onClick messages from the last three days. -->
        <!-- svelte-ignore a11y-missing-attribute -->
        <a> Show Previous Message! </a>
      </div>
    </div>

    <ChatMessageItem
      text="Hi, what are you doing?!"
      weekday="Sun"
      isReceiver={true}
    />

    <ChatMessageItem
      text="I am doing nothing man!"
      weekday="Sun"
      isReceiver={false}
    />
  </div>

  <div class="row reply">
    <Icon
      iconType="emoji-icon"
      iconSize="default"
      pullRight={false}
      columnWidth={1}
    />

    <TextArea />

    <Icon
      columnWidth={1}
      iconType="send-icon"
      iconSize="default"
      ariaHidden={true}
      pullRight={false}
    />

    <Icon
      columnWidth={1}
      pullRight={false}
      ariaHidden={true}
      iconSize={"default"}
      iconType="options-icon"
    />
  </div>
</div>

<style>
  /*Conversation*/

  .conversation {
    padding: 0 !important;
    margin: 0 !important;
    height: 100%;
    /* ! UNCOMMENT WIDTH IN ORDER TO LET THE CHAT DISAPPEAR (MOBILE) */
    /* width: 100%; */
    /* overflow-y: auto; */
    border-left: 1px solid rgba(0, 0, 0, 0.08);
  }

  .message {
    padding: 0 !important;
    margin: 0 !important;

    background-size: cover;
    overflow-y: auto;
    border: 1px solid #f7f7f7;
    height: calc(100% - 120px);
  }
  .message-previous {
    margin: 0 !important;
    padding: 0 !important;
    height: auto;
    width: 100%;
  }
  .previous {
    font-size: 15px;
    text-align: center;
    padding: 10px !important;
    cursor: pointer;
  }

  .previous a {
    text-decoration: none;
    font-weight: 700;
  }

  /*Reply*/

  .reply {
    height: 60px;
    width: 100%;
    background-color: #f5f1ee;
    padding: 10px 5px 10px 5px !important;
    margin: 0 !important;
    z-index: 1000;
  }

  @media screen and (max-width: 700px) {
    /*Conversation*/
    .conversation {
      padding: 0 !important;
      margin: 0 !important;
      height: 100%;
      /*width: 100%;*/
      border-left: 1px solid rgba(0, 0, 0, 0.08);
      /*overflow-y: auto;*/
    }
    .message {
      height: calc(100% - 140px);
    }
    .reply {
      height: 70px;
    }
  }
</style>
