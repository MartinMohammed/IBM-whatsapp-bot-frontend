<script lang="ts">
  import { chatScreenDataStore } from "../../stores";
  export let onInputSubmit: () => void = () => undefined;

  const { messageInputValue } = chatScreenDataStore;
  let isShiftKeyDown = false;
  let isMetaDown = false;

  /** If he stops pressing on Shift, emit the event on next Enter*/
  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "Shift") isShiftKeyDown = true;
    else if (e.key === "Meta") isMetaDown = true;
    else if (e.key === "Enter") {
      if (!isShiftKeyDown && isMetaDown) {
        onInputSubmit();
      }
    }
  }

  /** Aslong holding Shift, a new line should be appended. */
  function onKeyUp(e: KeyboardEvent) {
    console.log("keyup");
    if (e.key === "Shift") isShiftKeyDown = false;
    else if (e.key === "Meta") isMetaDown = false;
  }
</script>

<div class="col-sm-9 col-xs-9 textarea-field">
  <textarea
    class="form-control"
    rows="1"
    id="comment"
    on:keyup={onKeyUp}
    on:keydown={onKeyDown}
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
