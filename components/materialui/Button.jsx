"use client";

import React from "react";
import { createComponent } from "@lit/react";

import { MdFilledButton } from "@material/web/button/filled-button.js";
import { MdElevatedButton } from "@material/web/button/elevated-button.js";
import { MdFilledTonalButton } from "@material/web/button/filled-tonal-button.js";
import { MdOutlinedButton } from "@material/web/button/outlined-button.js";
import { MdTextButton } from "@material/web/button/text-button.js";
import { cn } from "@/lib/utils";

const Filled = createComponent({
  tagName: "md-filled-button",
  elementClass: MdFilledButton,
  react: React,
});

const Elevated = createComponent({
  tagName: "md-elevated-button",
  elementClass: MdElevatedButton,
  react: React,
});

const Tonal = createComponent({
  tagName: "md-filled-tonal-button",
  elementClass: MdFilledTonalButton,
  react: React,
});

const Outlined = createComponent({
  tagName: "md-outlined-button",
  elementClass: MdOutlinedButton,
  react: React,
});

const Text = createComponent({
  tagName: "md-text-button",
  elementClass: MdTextButton,
  react: React,
});

const variantMap = {
  filled: Filled,
  elevated: Elevated,
  tonal: Tonal,
  outlined: Outlined,
  text: Text,
};

/**
 * MaterialButton
 *
 * @param {Object} props
 * @param {"filled"|"elevated"|"tonal"|"outlined"|"text"} [props.variant="filled"]
 * @param {boolean} [props.disabled]
 * @param {boolean} [props.softDisabled]
 * @param {string} [props.href]
 * @param {""|"_blank"|"_self"|"_parent"|"_top"} [props.target]
 * @param {"button"|"submit"|"reset"} [props.type]
 * @param {boolean} [props.hasIcon]
 * @param {boolean} [props.trailingIcon]
 * @param {Function} [props.onClick]
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */

export function MaterialButton({
  variant = "filled",
  children,
  className = "",
  ...props
}) {
  const Component = variantMap[variant] || Filled;
  const mergedCLassName = cn("px-6", className);

  return <Component className={mergedCLassName} {...props}>{children}</Component>;
}
