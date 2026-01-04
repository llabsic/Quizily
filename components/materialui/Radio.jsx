"use client";

import React from "react";
import { createComponent } from "@lit/react";

import { MdRadio } from "@material/web/radio/radio.js";

/* ------------------------------------------------------------------ */
/* MaterialRadio                                                      */
/* ------------------------------------------------------------------ */

/**
 * MaterialRadio
 *
 * @param {string} name - Radio group name
 * @param {string} value - Radio value
 * @param {boolean} checked - Whether selected
 * @param {boolean} disabled - Disabled state
 * @param {React.ReactNode} children - Label content
 * @param {string} className - Custom class name
 * @param {(e: Event) => void} onChange - Change handler
 */
export const MaterialRadioBase = createComponent({
    tagName: "md-radio",
    elementClass: MdRadio,
    react: React,
    events: { onChange: "change" },
});

export function MaterialRadio({
    name,
    value,
    checked,
    disabled,
    children,
    className = "md-radio",
    onChange,
    ...props
}) {
    return (
        <label className="flex items-center gap-2 cursor-pointer h-6 w-fit">
            <MaterialRadioBase
                name={name}
                value={value}
                checked={checked}
                disabled={disabled}
                className={className}
                onChange={onChange}
                {...props}
            />
            {children}
        </label>
    );
}
