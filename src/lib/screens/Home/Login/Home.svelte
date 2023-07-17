<script lang="ts">
  import { onMount } from "svelte";
  import HomepageLayout from "../../../layout/homepage.layout.svelte";
  import NavItem from "../../../components/Layout/NavItem.svelte";
  import Navbar from "../../../components/Layout/Navbar.svelte";
  import Button from "../../../components/Button.svelte";
  import CheckboxLabel from "../../../components/CheckboxLabel.svelte";

  import { homepageStore } from "../../../../stores";
  import InputBox from "../../../components/InputBox.svelte";

  const { showLoginModal, showRegistrationFormControl } = homepageStore;
</script>

<HomepageLayout>
  <!-- Header Section -->
  <Navbar logoText="Body Culture">
    <!-- <header> -->
    <!-- <h2 class="logo">Body Culture</h2> -->
    <!-- <nav class="navigation"> -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <!-- <a>Home</a> -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <!-- <a>About</a> -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <!-- <a>Contact</a> -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <!-- <a>Dashboard</a> -->

    <NavItem text="Home" />
    <NavItem text="Dashboard" />
    <Button
      text="Login"
      onClickHandler={() => ($showLoginModal = true)}
      type="transparent"
    />
    <!-- </nav> -->
    <!-- </header> -->
  </Navbar>

  <!-- Wrapper Section -->
  <div
    class={`wrapper ${$showLoginModal ? "active-popup" : ""} ${
      $showRegistrationFormControl ? "active" : ""
    }`}
  >
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <span class="icon-close" on:click={() => ($showLoginModal = false)}>
      <i aria-hidden={true} class="glyphicon glyphicon-remove" />
    </span>

    <!-- Login Form -->
    <div class="form-box login">
      <h2>Login</h2>
      <form action="#">
        <!-- Email Input -->
        <!-- <div class="input-box"> -->
        <!-- <span class="icon">
          </span> -->
        <!-- <input type="email" required /> -->
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <!-- <label>Email</label> -->
        <!-- </div> -->
        <InputBox
          labelText="Email"
          type="email"
          required={true}
          icon="envelope"
        />

        <!-- Password Input -->
        <!-- <div class="input-box"> -->
        <!-- <span class="icon">
          </span> -->
        <!-- <input type="password" required /> -->
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <!-- <label>Password</label> -->
        <!-- </div> -->
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
        <Button type="default" text="Login" />

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

    <!-- Registration Form -->
    <div class="form-box register">
      <h2>Registrierung</h2>
      <form action="#">
        <!-- Username Input -->
        <!-- <div class="input-box"> -->
        <!-- <span class="icon">
          </span> -->
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <!-- <input type="text" required /> -->
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <!-- <label>Username</label> -->
        <!-- </div> -->
        <InputBox
          labelText="Benutzername"
          type="text"
          required={true}
          icon="user"
        />

        <!-- Email Input -->
        <!-- <div class="input-box"> -->
        <!-- <span class="icon">
          </span> -->
        <!-- <input type="email" required /> -->
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <!-- <label>Email</label> -->
        <!-- </div> -->

        <InputBox
          labelText="Email"
          type="email"
          required={true}
          icon="envelope"
        />

        <!-- Password Input -->
        <!-- <div class="input-box"> -->
        <!-- <span class="icon">
          </span> -->
        <!-- <input type="password" required /> -->
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <!-- <label>Password</label> -->
        <!-- </div> -->
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
  </div>
</HomepageLayout>

<style>
  /* HEADER SECTION */
  /* header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99;
  } */
  /* 
  .logo {
    font-size: 2em;
    color: #fff;
    user-select: none;
  } */

  /* .navigation a {
    position: relative;
    font-size: 1.1em;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    margin-left: 40px;
  } */

  /* Underscore item below the anchor element - animation  */
  /* .navigation a::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background: #fff;
    border-radius: 5px;
    left: 0;
    bottom: -6px; */
  /* The underscore should come animated from the right side of the href */
  /* transform-origin: right; */
  /* Makes it invisible initially before hovering */
  /* transform: scaleX(0);
    transition: 0.5s;
  }
  .navigation a:hover::after {
    transform-origin: left;
    transform: scaleX(1);
  } */
  /* 
  .btnLogin-popup {
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
  }

  .btnLogin-popup:hover {
    background: #fff;
    color: #162938;
  } */

  /* WRAPPER SECTION */

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

  /* .input-box label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    font-size: 1em;
    color: #162938;
    font-weight: 500;
    pointer-events: none;
    transition: 0.5s;
  } */

  /* Selects every label element that is preceded by the left hand side (siblings before)*/
  /* .input-box input:focus ~ label, */
  /* .input-box input:valid ~ label { */
  /* Let the labels move when you click inside input field */
  /* top: -5px; */
  /* } */
  /* 
  .input-box input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none; */

  /* Remove outline when on focus */
  /* outline: none;
    font-size: 1em;
    color: #162938;
    font-weight: 600;
    padding: 0 35px 0 5px;
  } */

  /* .input-box .icon {
    position: absolute;
    right: 8px;
    font-size: 1.2em;
    color: #162938;
    line-height: 57px;
  } */

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
  /* 
  .remember-forgot label input {
    accent-color: #162938;
    margin-right: 3px;
  } */

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
