<template>
  <div class="inline-block leading-none">
    <NuxtLink
      v-if="false"
      :to="{ name: 'login' }"
      class="text-sm font-medium leading-5 text-black"
    >
      登入 / 註冊
    </NuxtLink>
    <TDropdown
      v-if="true"
      variant="user"
      :show.sync="isOpen"
    >
      <div
        slot="trigger"
        slot-scope="{
          mousedownHandler,
          focusHandler,
          blurHandler,
          keydownHandler,
        }"
        class="leading-none"
      >
        <button
          class="focus:outline-none"
          @mousedown="mousedownHandler"
          @focus="focusHandler"
          @blur="blurHandler"
          @keydown="keydownHandler"
        >
          <Avatar
            size="avatar--30"
          />
        </button>
      </div>

      <template slot-scope="{ blurHandler }">
        <div
          class="flex items-center p-2 border-b border-black"
          @blur="blurHandler"
        >
          <Avatar
            size="avatar--50"
            class="mr-2"
          />
          <div class="flex flex-col flex-1 space-y-2 overflow-hidden">
            <span class="truncate">nickname</span>
            <span
              v-if="true"
              class="text-sm text-gray-600"
            >一般會員</span>
            <span
              v-else
              class="text-sm text-gray-600"
            >訂閱會員</span>
          </div>
        </div>
        <NuxtLink
          class="flex items-center justify-between px-4 py-3 font-medium transition-colors duration-150 hover:bg-secondary"
          :to="{ name: 'member-account' }"
          @click.native="isOpen = false"
        >
          帳號管理
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
            />
          </svg>
        </NuxtLink>
        <NuxtLink
          class="flex items-center justify-between px-4 py-3 font-medium transition-colors duration-150 hover:bg-secondary"
          :to="{ name: 'member-record-purchase' }"
          @click.native="isOpen = false"
        >
          紀錄查詢
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
            />
          </svg>
        </NuxtLink>
        <NuxtLink
          class="flex items-center justify-between px-4 py-3 font-medium transition-colors duration-150 hover:bg-secondary"
          :to="{ name: 'member-voice-purchase' }"
          @click.native="isOpen = false"
        >
          我的聲音庫
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
            />
          </svg>
        </NuxtLink>
        <!-- <NuxtLink
          class="flex items-center justify-between px-4 py-3 font-medium transition-colors duration-150 hover:bg-secondary"
          to="/"
          @click.native="isOpen = false"
        >
          <span class="flex items-center"
            >訊息中心
            <span
              class="flex items-center justify-center w-4 h-4 ml-1 text-xs text-white rounded-full bg-red"
              >99</span
            >
          </span>
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
            ></path>
          </svg>
        </NuxtLink> -->
        <NuxtLink
          v-if="true"
          class="flex items-center justify-between px-4 py-3 font-medium transition-colors duration-150 hover:bg-secondary"
          :to="{ name: 'member-anchor-intro' }"
          @click.native="isOpen = false"
        >
          主播專區
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
            />
          </svg>
        </NuxtLink>
        <NuxtLink
          v-if="true"
          class="flex items-center justify-between px-4 py-3 font-medium transition-colors duration-150 hover:bg-secondary"
          :to="{ name: 'member-presenter-intro' }"
          @click.native="isOpen = false"
        >
          主持人專區
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
            />
          </svg>
        </NuxtLink>
        <NuxtLink
          class="flex items-center justify-between px-4 py-3 font-medium transition-colors duration-150 hover:bg-secondary"
          :to="{ name: 'member-redeem' }"
          @click.native="isOpen = false"
        >
          優惠兌換
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
            />
          </svg>
        </NuxtLink>
        <LoginLogout
          class="flex items-center justify-center w-full py-3 border-t border-black"
          @click.native="isOpen = false"
        >
          <template slot="icon">
            <svg
              class="w-4 h-4 mr-2"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="sign-out-alt"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"
              />
            </svg>
          </template>
        </LoginLogout>
      </template>
    </TDropdown>
  </div>
</template>

<script>
export default {
  name: 'MemberState',
  data () {
    return {
      isOpen: false
    }
  }
}
</script>
