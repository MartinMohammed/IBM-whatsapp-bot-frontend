<!-- Represents a transparent button -->

<script lang="ts">
  export let type: "default" | "transparent";
  export let onClickHandler: () => void = () => {};
  export let text: string;
</script>

<button class={`btn-${type}`} on:click={onClickHandler}>{text}</button>

<style lang="scss">
  .btn-transparent {
    width: 130px;
    height: 50px;
    background: transparent;
    border: 2px solid #fff;
    outline: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1.1em;
    color: #fff;
    font-weight: 500;
    margin-left: 40px;
    transition: 0.5s;

    &:hover {
      background: #fff;
      color: #162938;
    }
  }

  .btn-default {
    width: 100%;
    height: 45px;
    background: #162938;
    border: none;
    outline: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1em;
    color: #fff;
    font-weight: 500;
  }
</style>
