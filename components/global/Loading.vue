<template>
  <div class="flex items-center justify-center h-full py-20">
    <svg
      class="w-10 h-10 text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="
        margin: auto;
        background: none;
        display: block;
        shape-rendering: auto;
      "
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
        r="35"
        stroke-dasharray="164.93361431346415 56.97787143782138"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        />
      </circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>
