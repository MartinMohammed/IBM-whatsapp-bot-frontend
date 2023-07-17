<script>
  // Import any required modules or variables
</script>

<svelte:head>
  <style>
    #app {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: url("background.jpg") no-repeat;
      /* Scale in */
      background-size: cover;
      background-position: center;
    }
  </style>
</svelte:head>
<slot />
