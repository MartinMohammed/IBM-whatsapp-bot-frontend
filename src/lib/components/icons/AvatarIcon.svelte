<script lang="ts">
  /** The URL of the avatar image. */
  export let src: string = "";
  /** The alternative text for the avatar image. */
  export let alt: string = "";
  /** The size of the avatar icon. */
  export let size: "small" | "default" = "default";
</script>

<div class={`avatar-icon ${size}`}>
  <img {src} {alt} />
</div>

<style lang="scss">
  .avatar-icon {
    img {
      border-radius: 50%;
    }
    &.small {
      img {
        height: 40px;
        width: 40px;
      }
    }

    &.default {
      img {
        height: 49px;
        width: 49px;
      }
    }
  }

  @media screen and (max-width: 700px) {
    .avatar-icon {
      &.small {
        img {
          height: 50px;
          width: 50px;
        }
      }

      &.default {
        img {
          height: 55px;
          width: 55px;
        }
      }
    }
  }
</style>
