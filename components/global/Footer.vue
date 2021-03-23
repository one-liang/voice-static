<template>
  <footer class="bg-black">
    <div class="flex flex-col justify-between px-4 py-8 lg:flex-row lg:px-6">
      <div class="flex justify-center mb-6 lg:mb-0">
        <NuxtLink to="/" class="hidden w-16 mr-8 lg:block">
          <img
            class="object-cover w-16 text-white"
            src="/images/voice_logo_white_v.svg"
            alt="鏡好聽"
          >
        </NuxtLink>
        <div
          class="grid items-center grid-cols-3 grid-rows-2 gap-x-6 gap-y-4 lg:gap-y-0"
        >
          <NuxtLink
            :to="{ name: 'about' }"
            class="text-sm font-medium text-white"
          >
            關於鏡好聽
          </NuxtLink>
          <a
            class="text-sm font-medium text-white"
            href="mailto:voiceservice@mirrormedia.mg"
          >客服信箱</a>
          <NuxtLink
            :to="{ name: 'service-rule' }"
            class="text-sm font-medium text-white"
          >
            會員條款
          </NuxtLink>
          <NuxtLink
            :to="{ name: 'privacy-policy' }"
            class="text-sm font-medium text-white"
          >
            隱私政策
          </NuxtLink>
          <NuxtLink
            :to="{ name: 'payment-terms' }"
            class="text-sm font-medium text-white"
          >
            付費條款
          </NuxtLink>
          <NuxtLink
            :to="{ name: 'copyright-policy' }"
            class="text-sm font-medium text-white"
          >
            版權政策
          </NuxtLink>
        </div>
      </div>
      <div class="flex flex-col items-center lg:items-end">
        <div class="flex items-center mb-6 space-x-4 lg:mb-4">
          <a
            href="https://www.facebook.com/mirrorvoice2019"
            class="flex items-center justify-center w-6 h-6 text-white transition duration-150 ease-in-out border rounded-full hover:bg-white hover:text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook-f"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/mirror_voice"
            class="flex items-center justify-center w-6 h-6 text-white transition duration-150 ease-in-out border rounded-full hover:bg-white hover:text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="instagram"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </a>
          <!-- <a
            href="https://apps.apple.com/tw/app/%E9%8F%A1%E5%A5%BD%E8%81%BD/id1457065131"
            class="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img class="w-32 h-10 object-cotain" src="/images/app_store.svg" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.mirror_audio&hl=zh_TW"
            class="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              class="w-32 h-10 object-cotain"
              src="/images/google_play.svg"
            />
          </a> -->
        </div>
        <small class="text-sm font-medium text-center text-white lg:text-sm">
          Copyright © 2021 鏡文學股份有限公司 All Rights Reserved.
        </small>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
