<script lang="ts">
  // Receive a text object, and determine whether the current user
  // was the sender or receiver.
  export let isReceiver: boolean = false;
  export let text: string = "";
  import { fade } from "svelte/transition";
  // a mathematical function that describes the rate at which a numerical value change
  import { backIn } from "svelte/easing";
  export let weekday: string = "Mon";
</script>

<div class="row message-body" in:fade={{ duration: 700, delay: 100 }}>
  <div class={`col-sm-12 message-main-${isReceiver ? "receiver" : "sender"}`}>
    <div class={`${isReceiver ? "receiver" : "sender"}`}>
      <div class="message-text">{text}</div>
      <span class="message-time pull-right"> {weekday} </span>
    </div>
  </div>
</div>

<!-- TODO: remove unused styling -->

<style>
  .message-body {
    margin: 0 !important;
    padding: 0 !important;
    width: auto;
    height: auto;
  }

  .message-main-receiver {
    /*padding: 10px 20px;*/
    max-width: 60%;
  }

  .message-main-sender {
    padding: 3px 20px !important;
    margin-left: 40% !important;
    max-width: 60%;
  }

  /*  */
  .message-text {
    margin: 0 !important;
    padding: 5px !important;
    word-wrap: break-word;
    font-weight: 200;
    font-size: 14px;
    padding-bottom: 0 !important;
  }

  /*  */
  .message-time {
    margin: 0 !important;
    margin-left: 50px !important;
    font-size: 12px;
    text-align: right;
    color: #9a9a9a;
  }

  /*  */
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

  /*  */
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
  }

  @media screen and (max-width: 700px) {
    .message {
      height: calc(100% - 140px);
    }
  }
</style>
