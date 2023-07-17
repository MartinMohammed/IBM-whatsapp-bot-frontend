<!-- Animated Nav Item -->
<script lang="ts">
  export let text: string;
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a class="nav-item">{text}</a>

<style lang="scss">
  .nav-item {
    position: relative;
    cursor: pointer;
    font-size: 1.1em;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    margin-left: 40px;

    /* Underscore item below the anchor element - animation  */
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      background: #fff;
      border-radius: 5px;
      left: 0;
      bottom: -6px;
      /* The underscore should come animated from the right side of the href */
      transform-origin: right;
      /* Makes it invisible initially before hovering */
      transform: scaleX(0);
      transition: 0.5s;
    }
    &:hover::after {
      transform-origin: left;
      transform: scaleX(1);
    }
  }
</style>
