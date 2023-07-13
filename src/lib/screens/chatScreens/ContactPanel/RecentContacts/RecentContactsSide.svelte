<script>
  import RecentContactsHeading from "./RecentContactsHeading.svelte";
  import SearchBox from "../../../../components/SearchBox.svelte";
  import ContactItem from "../ContactItem.svelte";

  import dataStore from "../../../../stores";
  // TODO: filter only those contacts that has property 'isRecent' to true;
  const recentContactsStore = dataStore.allContacts;
</script>

<div class="side-one">
  <RecentContactsHeading />
  <!-- <div class="row heading">
      <div class="col-sm-3 col-xs-3 heading-avatar">
        <div class="heading-avatar-icon">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar1.png"
            alt=""
          />
        </div>
      </div>
      <HeadingDot /> -->
  <!-- <div class="col-sm-1 col-xs-1 heading-dot pull-right">
        <i class="fa fa-ellipsis-v fa-2x pull-right" aria-hidden="true" />
      </div> -->
  <!-- on:click={onHeadingCompose} -->
  <!-- <HeadingCompose /> -->
  <!-- <div class="col-sm-2 col-xs-2 heading-compose pull-right">
        <i class="fa fa-comments fa-2x pull-right" aria-hidden="true" />
      </div> -->
  <!-- </div> -->

  <SearchBox placeholderText="Search" hasIcon={true} />

  <!-- <div class="row searchBox">
      <div class="col-sm-12 searchBox-inner">
        <div class="form-group has-feedback">
          <input
            id="searchText"
            type="text"
            class="form-control"
            name="searchText"
            placeholder="Search"
          />
          <span class="glyphicon glyphicon-search form-control-feedback" />
        </div>
      </div>
    </div> -->

  <div class="row sideBar">
    {#each $recentContactsStore as contact (contact)}
      <ContactItem name="John Doe" time="18:18" avatarIcon={contact} />
    {/each}

    <!-- <div class="row sideBar-body">
        <div class="col-sm-3 col-xs-3 sideBar-avatar">
          <div class="avatar-icon">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar1.png"
              alt=""
            />
          </div>
        </div>
        <div class="col-sm-9 col-xs-9 sideBar-main">
          <div class="row">
            <div class="col-sm-8 col-xs-8 sideBar-name">
              <span class="name-meta">Ulrich </span>
            </div>
            <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
              <span class="time-meta pull-right">18:18 </span>
            </div>
          </div>
        </div>
      </div>

      <div class="row sideBar-body">
        <div class="col-sm-3 col-xs-3 sideBar-avatar">
          <div class="avatar-icon">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar2.png"
              alt=""
            />
          </div>
        </div>

        <div class="col-sm-9 col-xs-9 sideBar-main">
          <div class="row">
            <div class="col-sm-8 col-xs-8 sideBar-name">
              <span class="name-meta">Martin Mohammed </span>
            </div>
            <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
              <span class="time-meta pull-right">18:18 </span>
            </div>
          </div>
        </div>
      </div>

      <div class="row sideBar-body">
        <div class="col-sm-3 col-xs-3 sideBar-avatar">
          <div class="avatar-icon">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar3.png"
              alt=""
            />
          </div>
        </div>
        <div class="col-sm-9 col-xs-9 sideBar-main">
          <div class="row">
            <div class="col-sm-8 col-xs-8 sideBar-name">
              <span class="name-meta">Vanessa </span>
            </div>
            <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
              <span class="time-meta pull-right">18:18 </span>
            </div>
          </div>
        </div>
      </div>
      <div class="row sideBar-body">
        <div class="col-sm-3 col-xs-3 sideBar-avatar">
          <div class="avatar-icon">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar4.png"
              alt=""
            />
          </div>
        </div>
        <div class="col-sm-9 col-xs-9 sideBar-main">
          <div class="row">
            <div class="col-sm-8 col-xs-8 sideBar-name">
              <span class="name-meta">John Doe </span>
            </div>
            <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
              <span class="time-meta pull-right">18:18 </span>
            </div>
          </div>
        </div>
      </div>
      <div class="row sideBar-body">
        <div class="col-sm-3 col-xs-3 sideBar-avatar">
          <div class="avatar-icon">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar5.png"
              alt=""
            />
          </div>
        </div>
        <div class="col-sm-9 col-xs-9 sideBar-main">
          <div class="row">
            <div class="col-sm-8 col-xs-8 sideBar-name">
              <span class="name-meta">John Doe </span>
            </div>
            <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
              <span class="time-meta pull-right">18:18 </span>
            </div>
          </div>
        </div>
      </div>
      <div class="row sideBar-body">
        <div class="col-sm-3 col-xs-3 sideBar-avatar">
          <div class="avatar-icon">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar6.png"
              alt=""
            />
          </div>
        </div>
        <div class="col-sm-9 col-xs-9 sideBar-main">
          <div class="row">
            <div class="col-sm-8 col-xs-8 sideBar-name">
              <span class="name-meta">John Doe </span>
            </div>
            <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
              <span class="time-meta pull-right">18:18 </span>
            </div>
          </div>
        </div>
      </div>
      <div class="row sideBar-body">
        <div class="col-sm-3 col-xs-3 sideBar-avatar">
          <div class="avatar-icon">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar1.png"
              alt=""
            />
          </div>
        </div>
        <div class="col-sm-9 col-xs-9 sideBar-main">
          <div class="row">
            <div class="col-sm-8 col-xs-8 sideBar-name">
              <span class="name-meta">John Doe </span>
            </div>
            <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
              <span class="time-meta pull-right">18:18 </span>
            </div>
          </div>
        </div>
      </div>
      <div class="row sideBar-body">
        <div class="col-sm-3 col-xs-3 sideBar-avatar">
          <div class="avatar-icon">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar2.png"
              alt=""
            />
          </div>
        </div>
        <div class="col-sm-9 col-xs-9 sideBar-main">
          <div class="row">
            <div class="col-sm-8 col-xs-8 sideBar-name">
              <span class="name-meta">John Doe </span>
            </div>
            <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
              <span class="time-meta pull-right">18:18 </span>
            </div>
          </div>
        </div>
      </div>
      <div class="row sideBar-body">
        <div class="col-sm-3 col-xs-3 sideBar-avatar">
          <div class="avatar-icon">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar3.png"
              alt=""
            />
          </div>
        </div>
        <div class="col-sm-9 col-xs-9 sideBar-main">
          <div class="row">
            <div class="col-sm-8 col-xs-8 sideBar-name">
              <span class="name-meta">John Doe </span>
            </div>
            <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
              <span class="time-meta pull-right">18:18 </span>
            </div>
          </div>
        </div>
      </div>
      <div class="row sideBar-body">
        <div class="col-sm-3 col-xs-3 sideBar-avatar">
          <div class="avatar-icon">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar4.png"
              alt=""
            />
          </div>
        </div>
        <div class="col-sm-9 col-xs-9 sideBar-main">
          <div class="row">
            <div class="col-sm-8 col-xs-8 sideBar-name">
              <span class="name-meta">John Doe </span>
            </div>
            <div class="col-sm-4 col-xs-4 pull-right sideBar-time">
              <span class="time-meta pull-right">18:18 </span>
            </div>
          </div>
        </div>
      </div> -->
  </div>
</div>

<style>
  .side-one {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    position: relative;
    display: block;
    top: 0;
  }

  .sideBar {
    padding: 0 !important;
    margin: 0 !important;
    background-color: #fff;
    overflow-y: auto;
    border: 1px solid #f7f7f7;
    height: calc(100% - 120px);
  }

  @media screen and (max-width: 700px) {
    .sideBar {
      height: calc(100% - 130px);
    }
  }
</style>
