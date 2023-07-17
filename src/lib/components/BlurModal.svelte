<script lang="ts">
  // When props changes, than component does re-render.
  export let customClass: string;
</script>

<div class={`wrapper ${customClass ? customClass : ""}`}>
  <slot />
</div>

<style lang="scss">
  .wrapper {
    position: relative;
    width: 400px;
    height: 440px;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;

    /* Blur effect */
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px); /* Safari specific */
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
    /* Center the login form  */
    display: flex;
    justify-content: center;
    align-items: center;

    /** Only display login modal if click on login popup button **/
    transform: scale(0);
    /* Let the modal that is current not used disappear. */
    overflow: hidden;
    transition: transform 0.5s ease, height 0.2s ease;

    /* Click on login modal in header and display modal */
    &.active-popup {
      transform: scale(1);
    }

    &.active {
      /* Makes the form larger for the registration */
      height: 520px;
    }
  }
</style>
