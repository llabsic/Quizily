"use client";

import React from "react";
import { createComponent } from "@lit/react";
import { MdCheckbox } from "@material/web/checkbox/checkbox.js";

/* ------------------------------------------------------------------ */
/* Base checkbox component                                            */
/* ------------------------------------------------------------------ */

const Checkbox = createComponent({
  tagName: "md-checkbox",
  elementClass: MdCheckbox,
  react: React,
  events: {
    onChange: "change",
    onInput: "input",
  },
});

/**
 * MaterialCheckbox
 *
 * IMPORTANT:
 * - md-checkbox is NOT auto-labeled
 * - aria-label is REQUIRED if no visible label is present
 *
 * @param {Object} props
 * @param {boolean} [props.checked]
 * @param {boolean} [props.indeterminate]
 * @param {boolean} [props.disabled]
 * @param {boolean} [props.required]
 * @param {string} [props.name]
 * @param {string} [props.value]
 * @param {string} [props.ariaLabel]
 * @param {"wrapper"|"none"} [props.touchTarget="wrapper"]
 * @param {Function} [props.onChange]
 * @param {Function} [props.onInput]
 * @param {string} [props.className]
 * @param {string} [props.label]
 */

export function MaterialCheckbox({
  label,
  id,
  ariaLabel,
  touchTarget = "wrapper",
  className = "md-checkbox",
  ...props
}) {
  const checkbox = (
    <Checkbox
      id={id}
      className={className}
      aria-label={ariaLabel || label}
      touch-target={touchTarget}
      label=""
      {...props}
    />
  );

  // ✅ If label prop is provided → wrap
  if (label) {
    return (
      <label className="flex items-center gap-2 cursor-pointer h-6 w-fit">
        {checkbox}
        {label}
      </label>
    );
  }

  // ✅ No label → checkbox only
  return checkbox;
}
