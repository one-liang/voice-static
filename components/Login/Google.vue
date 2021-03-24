<template>
  <button
    class="flex flex-col items-center focus:outline-none"
    @click="onLogin"
  >
    <span
      class="flex items-center justify-center w-12 h-12 mb-1 bg-gray-400 rounded-full"
    >
      <svg
        class="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 64 65"
        fill="#fff"
        fill-rule="evenodd"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <use xlink:href="#A" x=".5" y=".5" />
        <symbol id="A" overflow="visible">
          <path
            fill="#ea4335"
            d="M3.276 17.82C8.48 7.24 19.354 0 32 0c8.146 0 15.418 3.055 21.09 8l-9.31 9.31C40.58 14.69 36.51 13.09 32 13.09c-8.393 0-15.478 5.418-17.96 12.96"
            stroke="none"
          />
          <g stroke="none">
            <path
              fill="#fbbc05"
              d="M3.276 17.82C1.177 22.09 0 26.9 0 32s1.177 9.91 3.276 14.18l10.763-8.23A18.99 18.99 0 0 1 13.091 32a18.99 18.99 0 0 1 .948-5.949m0 0L3.276 17.82z"
            />
            <path
              fill="#4285f4"
              d="M52.857 56.03l-10.217-7.9c3.34-2.108 5.665-5.36 6.524-9.574H32V26.182h29.818c.436 1.89.727 3.927.727 5.818 0 10.43-3.816 18.57-9.688 24.03z"
            />
            <path
              fill="#34a853"
              d="M52.857 56.03C47.264 61.23 39.805 64 32 64 19.35 64 8.475 56.757 3.272 46.17l10.758-8.248C16.506 45.478 23.597 50.91 32 50.91c4.112 0 7.755-.968 10.64-2.79z"
            />
          </g>
        </symbol>
      </svg>
    </span>
    <span class="text-sm">Google 登入</span>
  </button>
</template>

<script>
export default {
  name: 'LoginGoogle',
  methods: {
    onLogin () {
      console.log('onLogin')
    }
  }
}
</script>
