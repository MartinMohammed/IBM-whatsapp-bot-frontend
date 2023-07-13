<script lang="ts">
  export let placeholderText: string = "";
  export let hasIcon: boolean = false;
</script>

<div class="row searchBox">
  <div class="col-sm-12 searchBox-inner">
    <div class="form-group has-feedback">
      <input
        id="searchText"
        type="text"
        class="form-control"
        name="searchText"
        placeholder={`${placeholderText}`}
      />
      {#if hasIcon}
        <span class="glyphicon glyphicon-search form-control-feedback" />
      {/if}
    </div>
  </div>
</div>

<style>
  .searchBox {
    padding: 0 !important;
    margin: 0 !important;
    height: 60px;
    width: 100%;
  }

  .searchBox-inner {
    height: 100%;
    width: 100%;
    padding: 10px !important;
    background-color: #fbfbfb;
  }

  .searchBox-inner input:focus {
    outline: none;
    border: none;
    box-shadow: none;
  }
</style>
