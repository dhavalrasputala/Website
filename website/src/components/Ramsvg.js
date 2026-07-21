import React from 'react';

export function RamSvg({ className = 'ram-bullet-icon' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M2 6h20v12H2V6zm2 2v8h16V8H4zm2 9h2v2H6v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM6 10h2v4H6v-4zm4 0h2v4h-2v-4zm4 0h2v4h-2v-4zm4 0h2v4h-2v-4z" />
    </svg>
  );
}

export default RamSvg;