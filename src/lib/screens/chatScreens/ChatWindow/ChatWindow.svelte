<script lang="ts">
  import TextArea from "../../../components/TextArea.svelte";
  import Icon from "../../../components/icons/Icon.svelte";
  // import ReplySendIcon from "../../../icons/SendIcon.svelte";
  import ChatHeading from "./ChatHeading.svelte";
  import ChatMessageItem from "./ChatMessageItem.svelte";
</script>

<div class="col-sm-8 conversation">
  <ChatHeading userIsOnline={true} chatUsername="Jon Doe" />
  <!-- <div class="row heading">
    <div class="col-sm-2 col-md-1 col-xs-3 heading-avatar">
      <HeadingAvatarIcon
        src="https://bootdey.com/img/Content/avatar/avatar6.png"
      /> -->
  <!-- <div class="heading-avatar-icon">
        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
      </div> -->
  <!-- </div>
    <div class="col-sm-8 col-xs-7 heading-name">
      <a class="heading-name-meta">John Doe </a>
      <span class="heading-online">Online</span>
    </div>
    <div class="col-sm-1 col-xs-1 heading-dot pull-right">
      <i class="fa fa-ellipsis-v fa-2x pull-right" aria-hidden="true" />
    </div>
  </div> -->

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
    <!-- <div class="row message-body">
      <div class="col-sm-12 message-main-receiver">
        <div class="receiver">
          <div class="message-text">Hi, what are you doing?!</div>
          <span class="message-time pull-right"> Sun </span>
        </div>
      </div>
    </div> -->

    <ChatMessageItem
      text="I am doing nothing man!"
      weekday="Sun"
      isReceiver={false}
    />
    <!-- <div class="row message-body">
      <div class="col-sm-12 message-main-sender">
        <div class="sender">
          <div class="message-text">I am doing nothing man!</div>
          <span class="message-time pull-right"> Sun </span>
        </div>
      </div>
    </div> -->
  </div>

  <div class="row reply">
    <Icon
      iconType="emoji-icon"
      iconSize="default"
      pullRight={false}
      columnWidth={1}
    />
    <!-- <EmojisIcon /> -->
    <!-- <div class="col-sm-1 col-xs-1 reply-emojis">
      <i class="fa fa-smile-o fa-2x" />
    </div> -->

    <TextArea />
    <!-- <div class="col-sm-9 col-xs-9 reply-main">
      <textarea class="form-control" rows="1" id="comment" />
    </div> -->
    <Icon
      columnWidth={1}
      iconType="send-icon"
      iconSize="default"
      ariaHidden={true}
      pullRight={false}
    />
    <!-- <ReplySendIcon /> -->
    <!-- <div class="col-sm-1 col-xs-1 reply-send">
      <i class="fa fa-send fa-2x" aria-hidden="true" />
    </div> -->
    <Icon
      columnWidth={1}
      pullRight={false}
      ariaHidden={true}
      iconSize={"default"}
      iconType="options-icon"
    />
    <!-- <ReplyOptionsIcon /> -->
    <!-- <div class="col-sm-1 col-xs-1 reply-recording">
      <i class="fa fa-bars fa-2x" aria-hidden="true" />
    </div> -->
  </div>
</div>

<style>
  /* .fa-2x {
    font-size: 1.5em;
  }

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

  .heading-avatar-icon img {
    border-radius: 50%;
    height: 40px;
    width: 40px;
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
    display: none;
    padding: 0 5px;
    font-size: 12px;
    color: #93918f;
  }

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
  /* 
  .message-body {
    margin: 0 !important;
    padding: 0 !important;
    width: auto;
    height: auto;
  }

  .message-main-receiver {
    padding: 10px 20px; COMMENT
    max-width: 60%;
  }

  .message-main-sender {
    padding: 3px 20px !important;
    margin-left: 40% !important;
    max-width: 60%;
  }

  .message-text {
    margin: 0 !important;
    padding: 5px !important;
    word-wrap: break-word;
    font-weight: 200;
    font-size: 14px;
    padding-bottom: 0 !important;
  }

  .message-time {
    margin: 0 !important;
    margin-left: 50px !important;
    font-size: 12px;
    text-align: right;
    color: #9a9a9a;
  }

  .receiver {
    width: auto !important;
    padding: 4px 10px 7px !important;
    border-radius: 10px 10px 10px 0;
    background: #ffffff;
    font-size: 12px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    word-wrap: break-word;
    display: inline-block;
  }

  .sender {
    float: right;
    width: auto !important;
    background: #dcf8c6;
    border-radius: 10px 10px 0 10px;
    padding: 4px 10px 7px !important;
    font-size: 12px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    display: inline-block;
    word-wrap: break-word;
  } */

  /*Reply*/

  .reply {
    height: 60px;
    width: 100%;
    background-color: #f5f1ee;
    padding: 10px 5px 10px 5px !important;
    margin: 0 !important;
    z-index: 1000;
  }

  /* .reply-emojis {
    padding: 5px !important;
  }

  .reply-emojis i {
    text-align: center;
    padding: 5px 5px 5px 5px !important;
    color: #93918f;
    cursor: pointer;
  }

  .reply-recording {
    padding: 5px !important;
  }

  .reply-recording i {
    text-align: center;
    padding: 5px !important;
    color: #93918f;
    cursor: pointer;
  }

  .reply-send {
    padding: 5px !important;
  }

  .reply-send i {
    text-align: center;
    padding: 5px !important;
    color: #93918f;
    cursor: pointer;
  } */

  /* .reply-main {
    padding: 2px 5px !important;
  }

  .reply-main textarea {
    width: 100%;
    resize: none;
    overflow: hidden;
    padding: 5px !important;
    outline: none;
    border: none;
    text-indent: 5px;
    box-shadow: none;
    height: 100%;
    font-size: 16px;
  }

  .reply-main textarea:focus {
    outline: none;
    border: none;
    text-indent: 5px;
    box-shadow: none;
  } */

  @media screen and (max-width: 700px) {
    /* .heading {
      height: 70px;
      background-color: #009688;
    }
    .fa-2x {
      font-size: 2.3em !important;
    }
    .heading-avatar {
      padding: 0 !important;
    }
    .heading-avatar-icon img {
      height: 50px;
      width: 50px;
    }
    .heading-dot {
      padding: 5px !important;
      margin-left: 10px !important;
    }
    .heading-dot i {
      color: #fff;
      cursor: pointer;
    } */

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
    /* .reply-emojis {
      padding: 5px 0 !important;
    }
    .reply-emojis i {
      padding: 5px 2px !important;
      font-size: 1.8em !important;
    } */
    /* .reply-main {
      padding: 2px 8px !important;
    }
    .reply-main textarea {
      padding: 8px !important;
      font-size: 18px;
    } */
    /* .reply-recording {
      padding: 5px 0 !important;
    }
    .reply-recording i {
      padding: 5px 0 !important;
      font-size: 1.8em !important;
    }
    .reply-send {
      padding: 5px 0 !important;
    }
    .reply-send i {
      padding: 5px 2px 5px 0 !important;
      font-size: 1.8em !important;
    } */
  }
</style>
