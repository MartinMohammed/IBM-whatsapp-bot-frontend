<script lang="ts">
  import ChatScreen from "./lib/screens/chatScreen/ChatScreen.svelte";
  import Home from "./lib/screens/Home/Home.svelte";
  import { generalApplicationStore } from "./stores";
  const { userIsLoggedIn } = generalApplicationStore;
</script>

<svelte:head>
  <!-- Latest compiled and minified CSS -->
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
    integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
    crossorigin="anonymous"
  />

  <!-- Optional theme -->
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
    integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
    crossorigin="anonymous"
  />

  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
</svelte:head>

<!-- Something like a router or co.  -->

{#if $userIsLoggedIn}
  <ChatScreen />
{:else}
  <Home />
{/if}
