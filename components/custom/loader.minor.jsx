"use client";

import React from "react";

export default function TopStrip({ show = true }) {
  if (!show) return null;

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full overflow-hidden bg-transparent">
      <div className="h-full w-full bg-background">
        <div className="topstrip-bar h-full w-1/3 bg-accent" />
      </div>
    </div>
  );
}
