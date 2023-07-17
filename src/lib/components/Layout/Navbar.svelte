<!-- Act as container for NavItems. -->
<script lang="ts">
  export let logoText: string;
</script>

<header class="nav-bar">
  <h2 class="logo">{logoText}</h2>
  <nav class="navigation">
    <slot />
  </nav>
</header>

<style>
  /* HEADER SECTION */
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 100px;
    /* background: red;  */
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99;
  }

  .logo {
    font-size: 2em;
    color: #fff;
    user-select: none;
  }
</style>
