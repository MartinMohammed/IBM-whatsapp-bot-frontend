<script lang="ts">
  import { chatScreenDataStore } from "../stores";
  const { messageInputValue } = chatScreenDataStore;

  // Keep track of the input field value
  let messageInput: string = "";
</script>

<div class="col-sm-9 col-xs-9 textarea-field">
  <textarea
    class="form-control"
    rows="1"
    id="comment"
    bind:value={$messageInputValue}
  />
</div>

<style>
  .textarea-field {
    padding: 2px 5px !important;
  }

  .textarea-field textarea {
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

  .textarea-field textarea:focus {
    outline: none;
    border: none;
    text-indent: 5px;
    box-shadow: none;
  }

  @media screen and (max-width: 700px) {
    .textarea-field {
      padding: 2px 8px !important;
    }
    .textarea-field textarea {
      padding: 8px !important;
      font-size: 18px;
    }
  }
</style>
