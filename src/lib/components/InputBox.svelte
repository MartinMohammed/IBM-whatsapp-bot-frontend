<script lang="ts">
  type HTMLInputTypeAttribute =
    | "number"
    | "search"
    | "button"
    | "time"
    | "image"
    | "text"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "month"
    | "password"
    | "radio"
    | "range";

  type IconType = "envelope" | "user" | "remove" | "lock";

  export let type: HTMLInputTypeAttribute = "text";
  export let required: boolean = true;
  export let labelText: string;
  export let icon: IconType;
</script>

<div class="input-box">
  <i aria-hidden={true} class={`glyphicon glyphicon-${icon} icon`} />
  <input {type} {required} />
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label>{labelText}</label>
</div>

<style lang="scss">
  .input-box {
    position: relative;
    width: 100%;
    height: 50px;
    border-bottom: 2px solid #162938;
    margin: 30px 0;

    .icon {
      position: absolute;
      right: 8px;
      font-size: 1.2em;
      color: #162938;
      line-height: 57px;
    }

    label {
      position: absolute;
      top: 50%;
      left: 5px;
      transform: translateY(-50%);
      font-size: 1em;
      color: #162938;
      font-weight: 500;
      pointer-events: none;
      transition: 0.5s;
    }

    input {
      width: 100%;
      height: 100%;
      background: transparent;
      border: none;

      /* Remove outline when on focus */
      outline: none;
      font-size: 1em;
      color: #162938;
      font-weight: 600;
      padding: 0 35px 0 5px;
    }
  }

  /* Selects every label element that is preceded by the left hand side (siblings before)*/
  .input-box input:focus ~ label,
  .input-box input:valid ~ label {
    /* Let the labels move when you click inside input field */
    top: -5px;
  }
</style>
