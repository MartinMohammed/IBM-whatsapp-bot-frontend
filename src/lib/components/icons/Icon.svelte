<script lang="ts">
  // Map of icon names to their corresponding FontAwesome class names
  const iconMap = {
    "back-icon": "fa-arrow-left",
    "comment-icon": "fa-comments",
    "emoji-icon": "fa-smile-o",
    "dot-icon": "fa-ellipsis-v",
    "options-icon": "fa-bars",
    "send-icon": "fa-send",
  };

  // Type definition for valid icon sizes
  type IconSizes = "small" | "default";

  // Type definition for valid icon names
  type IconTypes = keyof typeof iconMap;

  // Props
  /** col-sm-x & col-xs-x to define the column width for grid based layouts */
  export let columnWidth: number;

  /** The selector for attaching event listener to a specific icon */
  export let jsSelector: string = "";

  /** The type of the icon */
  export let iconType: IconTypes;

  /** Determines if the icon is hidden for screen readers */
  export let ariaHidden: boolean = true;

  /** The size of the icon */
  export let iconSize: IconSizes = "default";

  /** Determines if the icon is aligned to the right */
  export let pullRight: boolean = false;

  export let onIconClick: (e: Event) => void = (e: Event) => {};
</script>

<div
  class={`col-sm-${columnWidth} col-xs-${columnWidth} ${iconType} ${
    pullRight ? "pull-right" : ""
  }`}
  data-js-selector={jsSelector}
>
  <i
    class={`fa ${iconMap[iconType]} ${iconSize === "default" ? "fa-2x" : ""} ${
      pullRight ? "pull-right" : ""
    }`}
    aria-hidden={ariaHidden}
    on:click={onIconClick}
  />
</div>

<style>
  .fa-2x {
    font-size: 1.5em;
  }

  /* Styles for the specific icon types */

  /* BackIcon */
  .back-icon {
    text-align: center;
    vertical-align: baseline;
    padding: 12px 5px !important;
    display: block;
    cursor: pointer;
  }

  .back-icon i {
    margin: auto !important;
  }

  /* CommentIcon */
  .comment-icon {
    padding: 0;
  }

  .comment-icon i {
    text-align: center;
    padding: 5px;
    color: #93918f;
    cursor: pointer;
  }

  /* EmojiIcon */
  .emoji-icon {
    padding: 5px !important;
  }

  .emoji-icon i {
    text-align: center;
    padding: 5px 5px 5px 5px !important;
    color: #93918f;
    cursor: pointer;
  }

  /* DotIcon */

  .dot-icon {
    padding: 0;
    margin-left: 10px;
  }

  .dot-icon i {
    text-align: right;
    padding: 5px;
    color: #93918f;
    cursor: pointer;
  }

  /* OptionsIcon */

  .options-icon {
    padding: 5px !important;
  }

  .options-icon i {
    text-align: center;
    padding: 5px !important;
    color: #93918f;
    cursor: pointer;
  }

  /** SendIcon*/
  .send-icon {
    padding: 5px !important;
  }

  .send-icon i {
    text-align: center;
    padding: 5px !important;
    color: #93918f;
    cursor: pointer;
  }
  @media screen and (max-width: 700px) {
    .fa-2x {
      font-size: 2.3em !important;
    }

    /* Comment Icon */
    .comment-icon {
      padding: 5px !important;
    }

    .comment-icon i {
      color: #fff;
      cursor: pointer;
    }

    /* EmojiIcon */
    .emoji-icon {
      padding: 5px 0 !important;
    }

    .emoji-icon i {
      padding: 5px 2px !important;
      font-size: 1.8em !important;
    }

    /* DotIcon */
    .dot-icon {
      padding: 5px !important;
      margin-left: 10px !important;
    }
    .dot-icon i {
      color: #fff;
      cursor: pointer;
    }

    /** OptionsIcon*/
    .options-icon {
      padding: 5px 0 !important;
    }
    .options-icon i {
      padding: 5px 0 !important;
      font-size: 1.8em !important;
    }
    /** SendIcon*/
    .send-icon {
      padding: 5px 0 !important;
    }
    .send-icon i {
      padding: 5px 2px 5px 0 !important;
      font-size: 1.8em !important;
    }
  }
</style>
