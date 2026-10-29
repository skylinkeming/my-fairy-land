import React from "react";
import { icons } from "./markup.js";

export function Icon({ name, className = "" }) {
  // Only static application paths go into this SVG; never user-provided markup.
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: icons[name] || icons.leaf }}
    />
  );
}
