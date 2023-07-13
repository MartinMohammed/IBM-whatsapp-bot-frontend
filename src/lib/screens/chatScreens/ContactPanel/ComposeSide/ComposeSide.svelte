<script>
  import HeadingSideTwo from "./ComposeHeading.svelte";
  import SearchBox from "../../../../components/SearchBox.svelte";
  import ContactItem from "../ContactItem.svelte";
  import dataStore from "../../../../stores";

  const allContacts = dataStore.allContacts;
</script>

<div class="side-two">
  <HeadingSideTwo />
  <!-- <div class="row newMessage-heading">
      <div class="row newMessage-main">
        <NewMessageBack />
        <div class="col-sm-10 col-xs-10 newMessage-title">New Chat</div>
      </div>
    </div> -->

  <!-- Search box for the compose view -->
  <SearchBox placeholderText={"Search People"} hasIcon={true} />
  <!-- <div class="row composeBox">
      <div class="col-sm-12 composeBox-inner">
        <div class="form-group has-feedback">
          <input
            id="composeText"
            type="text"
            class="form-control"
            name="searchText"
            placeholder="Search People"
          />
          <span class="glyphicon glyphicon-search form-control-feedback" />
        </div>
      </div>
    </div> -->

  <div class="row compose-sideBar">
    {#each $allContacts as contact (contact)}
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
              <span class="name-meta">abc </span>
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
  .side-two {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
    position: relative;
    top: -100%;
    left: -100%;
    -webkit-transition: left 0.3s ease;
    transition: left 0.3s ease;
  }

  .compose-sideBar {
    padding: 0 !important;
    margin: 0 !important;
    background-color: #fff;
    overflow-y: auto;
    border: 1px solid #f7f7f7;
    height: calc(100% - 160px);
  }
</style>
