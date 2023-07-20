<script lang="ts">
  import HomepageLayout from "../../layout/homepage.layout.svelte";
  import NavItem from "../../components/Layout/NavItem.svelte";
  import Navbar from "../../components/Layout/Navbar.svelte";
  import Button from "../../components/Button.svelte";
  import CheckboxLabel from "../../components/CheckboxLabel.svelte";
  import { blur } from "svelte/transition";

  import { generalApplicationStore, homepageStore } from "../../../stores";
  import InputBox from "../../components/InputBox.svelte";

  const { showRegistrationFormControl, showLoginModal } = homepageStore;
  const { userIsLoggedIn } = generalApplicationStore;
</script>

<HomepageLayout>
  <!-- Header Section -->
  <Navbar logoText="Body Culture">
    <NavItem text="Home" />
    <NavItem text="Dashboard" />
    <Button
      text="Login"
      onClickHandler={() => {
        if ($showRegistrationFormControl === true) {
          $showRegistrationFormControl = false;
        } else {
          $showLoginModal = true;
        }
      }}
      type="transparent"
    />
    <!-- </nav> -->
    <!-- </header> -->
  </Navbar>

  <!-- Wrapper Section -->
  <div
    class={`wrapper`}
    class:active-popup={$showLoginModal}
    class:active={$showRegistrationFormControl}
  >
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <span
      class="icon-close"
      on:click={() => (
        ($showLoginModal = false), ($showRegistrationFormControl = false)
      )}
    >
      <i aria-hidden={true} class="glyphicon glyphicon-remove" />
    </span>

    <!-- Login Form -->
    {#if !$showRegistrationFormControl}
      <div class="form-box login">
        <h2>Login</h2>
        <form action="#">
          <InputBox
            labelText="Email"
            type="email"
            required={true}
            icon="envelope"
          />

          <InputBox
            labelText="Passwort"
            type="password"
            required={true}
            icon="lock"
          />

          <!-- Remember and Forgot Password -->
          <div class="remember-forgot">
            <CheckboxLabel text="Eingeloggt bleiben" />
            <!-- svelte-ignore a11y-missing-attribute -->
            <a>Passwort vergessen?</a>
          </div>

          <!-- Login Button -->
          <!-- <button type="submit" class="btn">Login</button> -->
          <Button
            type="default"
            text="Login"
            onClickHandler={() => ($userIsLoggedIn = true)}
          />

          <!-- Login and Registration Links -->
          <div class="login-register">
            <p>
              <!-- svelte-ignore a11y-missing-attribute -->
              Noch keinen Account?
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <a
                class="register-link"
                on:click={() => ($showRegistrationFormControl = true)}
                >Registrieren</a
              >
            </p>
          </div>
        </form>
      </div>
    {:else}
      <!-- Registration Form -->
      <div class="form-box register">
        <h2>Registrierung</h2>
        <form action="#">
          <InputBox
            labelText="Benutzername"
            type="text"
            required={true}
            icon="user"
          />

          <InputBox
            labelText="Email"
            type="email"
            required={true}
            icon="envelope"
          />

          <InputBox
            labelText="Passwort"
            type="password"
            required={true}
            icon="lock"
          />

          <!-- Agree to Terms -->
          <div class="remember-forgot">
            <CheckboxLabel text="Ich stimme den AGB's" />
          </div>

          <!-- Registration Button -->
          <Button type="default" text="Registrieren" />

          <!-- Login and Registration Links -->
          <div class="login-register">
            <p>
              Hast du bereits einen Account?
              <!-- svelte-ignore a11y-missing-attribute -->
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <a
                class="login-link"
                on:click={() => ($showRegistrationFormControl = false)}>Login</a
              >
            </p>
          </div>
        </form>
      </div>
    {/if}
  </div>
</HomepageLayout>

<style>
  /* WRAPPER SECTION */

  /* Login Modal  */
  /* Login Modal  */
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
  }

  /* Click on login modal in header and display modal */
  .wrapper.active-popup {
    transform: scale(1);
  }

  .wrapper.active {
    /* Makes the form larger for the registration */
    height: 520px;
  }

  /* form section */
  .wrapper .form-box {
    width: 100%;
    padding: 40px;
  }

  /* For the login modal specific */
  /** Transition when getting the login modal back (left to right) **/
  .wrapper .form-box.login {
    transition: transform 0.18s ease;
    transform: translateX(0);
  }

  .wrapper.active .form-box.login {
    transition: none;
    /* Let it disappear to the left side */
    transform: translateX(-400px);
  }

  .wrapper .form-box.register {
    position: absolute;
    /* Move to the right */
    transition: none;
    transform: translateX(400px);
  }

  /* For the login modal specific */
  /** Transition when getting the login modal back (right to left) **/
  /* When clicking on register it will make the register active and thus animating the registration form back to the modal center.  */
  .wrapper.active .form-box.register {
    transition: transform 0.18s ease;
    transform: translateX(0);
  }

  .wrapper .icon-close {
    position: absolute;
    top: 0;
    right: 0;
    width: 45px;
    height: 45px;
    background: #162938;
    font-size: 2em;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    /** Make round corners **/
    overflow: hidden;
    border-bottom-left-radius: 20px;
    cursor: pointer;
    z-index: 1;
  }

  .form-box h2 {
    font-size: 2em;
    color: #162938;
    text-align: center;
  }

  .input-box {
    position: relative;
    width: 100%;
    height: 50px;
    border-bottom: 2px solid #162938;
    margin: 30px 0;
  }

  /* Remember forgot section */
  .remember-forgot {
    font-size: 0.9em;
    color: #162938;
    font-weight: 500;
    margin: -15px 0 15px;
    display: flex;
    /* Move remember me to left and fogot password to right side of flex box */
    justify-content: space-between;
  }

  .remember-forgot a {
    cursor: pointer;
    color: #162938;
    text-decoration: none;
  }

  .remember-forgot a:hover {
    text-decoration: underline;
  }

  /* LOGIN BUTTON */
  .btn {
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

  /* login register */
  .login-register {
    font-size: 0.9em;
    color: #162938;
    text-align: center;
    font-weight: 500;
    margin: 25px 0 10px;
  }

  /* login register */
  .login-register p a {
    cursor: pointer;
    color: #162938;
    text-decoration: none;
    font-weight: 600;
  }

  /* login register */
  .login-register p a:hover {
    text-decoration: underline;
  }
</style>
