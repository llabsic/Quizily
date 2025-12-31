"use client";

import React from "react";
import { createComponent } from "@lit/react";

import { MdChipSet } from "@material/web/chips/chip-set.js";
import { MdAssistChip } from "@material/web/chips/assist-chip.js";
import { MdFilterChip } from "@material/web/chips/filter-chip.js";
import { MdInputChip } from "@material/web/chips/input-chip.js";
import { MdSuggestionChip } from "@material/web/chips/suggestion-chip.js";
import "@material/web/icon/icon.js";



/* ------------------------------------------------------------------ */
/* Chip set                                                           */
/* ------------------------------------------------------------------ */

const ChipSetBase = createComponent({
  tagName: "md-chip-set",
  elementClass: MdChipSet,
  react: React,
});

export function MaterialChipSet({ children, className, ...props }) {
  return (
    <ChipSetBase className={className} {...props}>
      {children}
    </ChipSetBase>
  );
}



const AssistChip = createComponent({
  tagName: "md-assist-chip",
  elementClass: MdAssistChip,
  react: React,
  events: { onUpdateFocus: "update-focus" },
});

const FilterChip = createComponent({
  tagName: "md-filter-chip",
  elementClass: MdFilterChip,
  react: React,
  events: {
    onRemove: "remove",
    onUpdateFocus: "update-focus",
  },
});

const InputChip = createComponent({
  tagName: "md-input-chip",
  elementClass: MdInputChip,
  react: React,
  events: {
    onRemove: "remove",
    onUpdateFocus: "update-focus",
  },
});

const SuggestionChip = createComponent({
  tagName: "md-suggestion-chip",
  elementClass: MdSuggestionChip,
  react: React,
  events: { onUpdateFocus: "update-focus" },
});

const CHIP_MAP = {
  assist: AssistChip,
  filter: FilterChip,
  input: InputChip,
  suggestion: SuggestionChip,
};

/* ------------------------------------------------------------------ */
/* MaterialChip                                                       */
/* ------------------------------------------------------------------ */

/**
 * MaterialChip
 *
 * @param {"assist"|"filter"|"input"|"suggestion"} type
 * @param {string} label
 * @param {ReactNode} icon - Rendered into slot="icon"
 * @param {boolean} avatar - Only for input chips
 */
export function MaterialChip({
  type = "assist",
  label,
  icon,
  avatar,
  className = "md-chip",
  children,
  ...props
}) {
  const Chip = CHIP_MAP[type] || AssistChip;

  return (
    <Chip
      className={className}
      label={label}
      has-icon={!!icon}
      avatar={avatar}
      {...props}
    >
      {/* Custom icon / svg / image */}
      {icon && <span slot="icon" className="flex items-center justify-center mr-2">{icon}</span>}

      {/* Optional custom content */}
      {children}
    </Chip>
  );
}
