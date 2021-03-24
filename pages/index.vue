<template>
  <div>
    <!-- 主視覺輪播 -->
    <section v-if="true" class="relative bg-primary">
      <client-only>
        <SwiperMain />
      </client-only>
      <div
        class="absolute left-0 z-10 flex-col hidden ml-8 space-y-2 transform -translate-y-1/2 lg:flex top-50"
      >
        <a
          href="https://www.facebook.com/mirrorvoice2019"
          class="flex items-center justify-center w-8 h-8 text-white transition duration-150 ease-in-out border rounded-full hover:bg-white hover:text-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            class="w-4 h-4"
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
          class="flex items-center justify-center w-8 h-8 text-white transition duration-150 ease-in-out border rounded-full hover:bg-white hover:text-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            class="w-4 h-4"
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
      </div>
    </section>

    <!-- discover 發現 -->
    <section v-if="false" class="pb-8 pl-4 bg-primary xl:px-20 lg:px-6 lg:pb-20">
      <div class="container relative mx-auto">
        <div class="relative z-10 mr-4 transform -translate-y-4">
          <MainTitle theme-color="white" class="mb-6">
            <template slot="titleEN">
              discover
            </template>
            <template slot="titleTW">
              發現
            </template>
          </MainTitle>
          <NuxtLink
            :to="{ name: 'discover' }"
            class="absolute bottom-0 right-0 flex items-center px-4 py-1 text-sm btn btn-outline-white lg:px-8 lg:text-lg"
          >
            看全部
            <svg
              class="w-3 h-3 ml-2"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="arrow-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
              />
            </svg>
          </NuxtLink>
        </div>
        <client-only>
          <SwiperDiscover />
        </client-only>
      </div>
    </section>

    <!-- ranking 排行榜 -->
    <section
      v-if="false"
      style="background-image: url('/cover/ranking.jpg')"
      class="bg-mask bg-mask-black"
    >
      <div class="container relative z-20 mx-auto">
        <MainTitle theme-color="white" class="mb-6 transform -translate-y-4">
          <template slot="titleEN">
            ranking
          </template>
          <template slot="titleTW">
            排行榜
          </template>
        </MainTitle>
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div class="shadow-md">
            <div
              class="px-4 py-3 lg:py-5 bg-blue-dark border-secondary border-b-3"
            >
              <SubTitle class="lg:justify-center">
                <template slot="subTitleTW">
                  節目
                </template>
                <template slot="subTitleEN">
                  podcasts
                </template>
              </SubTitle>
            </div>
            <client-only>
              <PodcastRanking />
            </client-only>
          </div>
          <div class="shadow-md">
            <div
              class="px-4 py-3 lg:py-5 bg-blue-light border-secondary border-b-3"
            >
              <SubTitle class="lg:justify-center">
                <template slot="subTitleTW">
                  有聲書
                </template>
                <template slot="subTitleEN">
                  audiobooks
                </template>
              </SubTitle>
            </div>
            <client-only>
              <AudiobookRanking />
            </client-only>
          </div>
        </div>
      </div>
    </section>

    <!-- podcasts 聽節目 -->
    <section v-if="false" class="pb-8 pl-4 bg-gradient-blue xl:px-20 lg:px-6 lg:pb-20">
      <div class="container mx-auto">
        <MainTitle
          theme-color="secondary"
          class="mb-6 transform -translate-y-4"
        >
          <template slot="titleEN">
            podcasts
          </template>
          <template slot="titleTW">
            節目
          </template>
        </MainTitle>
      </div>
      <div class="container relative mx-auto">
        <SubTitle class="mb-4">
          <template slot="subTitleTW">
            最新
          </template>
          <template slot="subTitleEN">
            latest
          </template>
        </SubTitle>
        <client-only>
          <SwiperPodcastLatest />
        </client-only>
      </div>
      <div class="container relative mx-auto">
        <SubTitle class="mb-4">
          <template slot="subTitleTW">
            推薦
          </template>
          <template slot="subTitleEN">
            recommended
          </template>
        </SubTitle>
        <client-only>
          <SwiperPodcastRecommended />
        </client-only>
      </div>
    </section>

    <!-- audiobooks 有聲書 -->
    <section v-if="false" class="pb-8 pl-4 bg-gradient-gray xl:px-20 lg:px-6 lg:pb-20">
      <div class="container mx-auto">
        <MainTitle theme-color="black" class="mb-6 transform -translate-y-4">
          <template slot="titleEN">
            audiobooks
          </template>
          <template slot="titleTW">
            有聲書
          </template>
        </MainTitle>
      </div>
      <div class="container relative mx-auto">
        <SubTitle class="mb-4">
          <template slot="subTitleTW">
            最新
          </template>
          <template slot="subTitleEN">
            latest
          </template>
        </SubTitle>
        <client-only>
          <SwiperAudiobookLatest />
        </client-only>
      </div>
      <div class="container relative mx-auto">
        <SubTitle class="mb-4">
          <template slot="subTitleTW">
            推薦
          </template>
          <template slot="subTitleEN">
            recommended
          </template>
        </SubTitle>
        <client-only>
          <SwiperAudiobookRecommended />
        </client-only>
      </div>
    </section>
    <!-- courses 聽課程 -->
    <section v-if="false" class="pb-8 pl-4 bg-gradient-teal xl:px-20 lg:px-6 lg:pb-20">
      <div class="container mx-auto">
        <MainTitle
          theme-color="primary-light"
          class="mb-6 transform -translate-y-4"
        >
          <template slot="titleEN">
            courses
          </template>
          <template slot="titleTW">
            聽課程
          </template>
        </MainTitle>
      </div>
      <div class="container relative mx-auto">
        <SubTitle class="mb-4">
          <template slot="subTitleTW">
            最新
          </template>
          <template slot="subTitleEN">
            latest
          </template>
        </SubTitle>
        <client-only>
          <SwiperCourseLatest />
        </client-only>
      </div>
      <div class="container relative mx-auto">
        <SubTitle class="mb-4">
          <template slot="subTitleTW">
            推薦
          </template>
          <template slot="subTitleEN">
            recommended
          </template>
        </SubTitle>
        <client-only>
          <SwiperCourseRecommended />
        </client-only>
      </div>
    </section>

    <!-- publishers 出版社專區 -->
    <section v-if="false" class="relative pb-8 pl-4 bg-primary xl:px-20 lg:px-6 lg:pb-20">
      <div class="container relative z-10 mx-auto">
        <div class="relative mr-4 transform -translate-y-4">
          <MainTitle theme-color="white" class="mb-6">
            <template slot="titleEN">
              publishers
            </template>
            <template slot="titleTW">
              出版社專區
            </template>
          </MainTitle>
          <NuxtLink
            :to="{ name: 'publisher' }"
            class="absolute bottom-0 right-0 items-center hidden px-4 py-1 text-sm btn btn-outline-white lg:flex lg:px-8 lg:text-lg"
          >
            看全部
            <svg
              class="w-3 h-3 ml-2"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="arrow-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
              />
            </svg>
          </NuxtLink>
        </div>
        <client-only>
          <SwiperPublisher />
        </client-only>
        <NuxtLink
          :to="{ name: 'publisher' }"
          class="flex items-center justify-center w-32 px-4 py-1 mx-auto mb-12 text-sm text-white bg-transparent border border-white rounded-full lg:hidden btn lg:px-8 lg:text-lg hover:bg-white hover:text-primary"
        >
          看全部
          <svg
            class="w-3 h-3 ml-2"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
            />
          </svg>
        </NuxtLink>
      </div>
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
        <BackgroundTextMirror class="absolute top-25" />
        <BackgroundTextVoice class="absolute" />
      </div>
    </section>

    <!-- voices 節目主持人/有聲書主播 -->
    <section v-if="false" class="pb-8 pl-4 bg-white xl:px-20 lg:px-6 lg:pb-20">
      <div class="container relative mx-auto">
        <div class="relative mr-4 transform -translate-y-4">
          <MainTitle theme-color="black" class="mb-6">
            <template slot="titleEN">
              voices
            </template>
            <template slot="titleTW">
              節目主持人/有聲書主播
            </template>
          </MainTitle>
          <NuxtLink
            :to="{ name: 'voices' }"
            class="absolute right-0 bottom-auto flex items-center px-4 py-1 text-sm top-25 lg:top-auto lg:bottom-0 btn btn-outline-black lg:px-8 lg:text-lg"
          >
            看全部
            <svg
              class="w-3 h-3 ml-2"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="arrow-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
              />
            </svg>
          </NuxtLink>
        </div>
        <client-only>
          <SwiperPresenter class="mb-12" />
          <SwiperAnchor />
        </client-only>
      </div>
    </section>

    <!-- 網站廣告BANNER -->
    <Banner />

    <!-- plan-1 聽方案 -->
    <!-- <PlanInfo /> -->

    <!-- plan-2 聽方案 -->
    <section
      v-if="false"
      v-lazy:background-image="'/cover/plan-2.jpg'"
      class="bg-mask bg-mask-yellow"
    >
      <div class="container relative z-20 mx-auto">
        <MainTitle theme-color="white" class="mb-6 transform -translate-y-4">
          <template slot="titleEN">
            mirrorvoice plus
          </template>
          <template slot="titleTW">
            鏡好聽+
          </template>
        </MainTitle>
        <p class="mb-8 text-xl text-black">
          鏡好聽提供訂閱服務與單購服務，選擇適合自己的收聽方式，愛怎麼聽就怎麼聽！
        </p>
        <div class="grid grid-cols-2 gap-2 lg:gap-6">
          <!-- 訂閱 subscribe -->
          <article
            class="bg-black bg-opacity-75 bg-gradient-diagonal bg-gradient-diagonal-left-bottom"
          >
            <header
              class="px-2 py-3 bg-gray-700 lg:px-4 lg:py-5 border-secondary border-b-3"
            >
              <SubTitle class="justify-center">
                <template slot="subTitleTW">
                  訂閱服務
                </template>
                <template slot="subTitleEN">
                  <span class="hidden sm:inline-block">subscribe</span>
                </template>
              </SubTitle>
            </header>
            <section
              v-if="false"
              class="grid px-4 pt-6 pb-8 lg:pb-20 lg:pt-8 lg:gap-4 lg:px-8"
            >
              <p class="mb-1 font-medium text-white lg:text-xl lg:mb-0">
                鏡好聽+
              </p>
              <ul class="mb-6 space-y-1 lg:mb-0">
                <li class="text-sm text-gray-500 lg:text-base">
                  ✓暢聽有聲書（少數必須單購有聲書除外）
                </li>
                <li class="text-sm text-gray-500 lg:text-base">
                  ✓暢聽鏡好聽製作節目
                </li>
                <li class="text-sm text-gray-500 lg:text-base">
                  ✓有聲課程專屬優惠
                </li>
                <li class="text-sm text-gray-500 lg:text-base">
                  ✓收藏、追蹤／編輯自己的清單
                </li>
                <li class="text-sm text-gray-500 lg:text-base">
                  ✓不限次數／隨點隨聽
                </li>
              </ul>
              <p class="mb-6 text-sm text-gray-500 lg:text-base lg:mb-0">
                定期扣款，隨時可停止！
              </p>
            </section>
            <footer
              class="absolute bottom-0 -mb-6 transform -translate-x-1/2 left-50"
            >
              <NuxtLink
                class="flex items-center justify-center w-32 py-2 mx-auto text-sm tracking-widest lg:w-40 lg:text-lg lg:w-48 lg:py-4 btn btn-secondary"
                :to="{ name: 'mirrorvoice-plus' }"
              >
                訂閱鏡好聽+
                <svg
                  class="w-3 h-3 ml-1 lg:w-4 lg:h-4"
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
            </footer>
          </article>

          <!-- 單購 purchase -->
          <article
            class="relative bg-black bg-opacity-75 bg-gradient-diagonal bg-gradient-diagonal-right-bottom"
          >
            <header
              class="px-2 py-3 bg-gray-700 lg:px-4 lg:py-5 border-secondary border-b-3"
            >
              <SubTitle class="justify-center">
                <template slot="subTitleTW">
                  單獨購買
                </template>
                <template slot="subTitleEN">
                  <span class="hidden sm:inline-block">purchase</span>
                </template>
              </SubTitle>
            </header>
            <section
              class="grid px-4 pt-6 pb-8 lg:pb-20 lg:pt-8 lg:gap-4 lg:px-8"
            >
              <p class="mb-1 font-medium text-white lg:text-xl lg:mb-0">
                單獨購買節目/有聲書/課程
              </p>
              <ul class="mb-6 space-y-1 lg:mb-0">
                <li class="text-sm text-gray-500 lg:text-base">
                  ✓以專輯為單位購買有聲內容, 輕鬆擁有完整內容
                </li>
                <li class="text-sm text-gray-500 lg:text-base">
                  ✓購買後不限次數、不限時間自由播放聆聽
                </li>
                <li class="text-sm text-gray-500 lg:text-base">
                  ✓產品擁有權跟隨會員帳號，網頁、APP登入隨時聽
                </li>
              </ul>
              <p class="mb-6 text-sm text-gray-500 lg:text-base lg:mb-0">
                訂閱鏡好聽+，還能享有不定時推出的單獨購買優惠價！
              </p>
            </section>
            <footer
              class="absolute bottom-0 -mb-6 transform -translate-x-1/2 left-50"
            >
              <NuxtLink
                class="flex items-center justify-center w-32 py-2 mx-auto text-sm tracking-widest lg:w-40 lg:text-lg lg:w-48 lg:py-4 btn btn-secondary"
                :to="{ name: 'audiobooks' }"
              >
                更多有聲內容
                <svg
                  class="w-3 h-3 ml-1 lg:w-4 lg:h-4"
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
            </footer>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Index',
  mounted () {
    this.$scrollTo('body', 0)
  }
}
</script>

<style lang="postcss" scoped>
.bg-mask {
  @apply relative px-4 pb-24 bg-center bg-no-repeat bg-cover overflow-hidden;

  &::after {
    @apply absolute inset-x-0 top-0 w-full h-full;

    content: '';
    backdrop-filter: blur(2px);
  }
}

.bg-mask-black::after {
  background-color: rgba(30, 30, 30, 0.4);
}

.bg-mask-yellow::after {
  background-color: rgba(255, 176, 28, 0.8);
}

.bg-gradient-blue {
  background-color: #36568d;
}

.bg-gradient-teal {
  background-color: #107893;
}

.bg-gradient-gray {
  background-color: #798fa7;
}

.bg-gradient-diagonal {
  @apply relative w-full h-full;

  &::after {
    @apply absolute right-0 bottom-0 w-full h-full opacity-50 -z-10;

    content: none;
    background: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 3px,
      rgba(255, 217, 67, 1) 0,
      rgba(255, 217, 67, 1) 6px
    );
  }
}

.bg-gradient-diagonal-left-bottom::after {
  @apply transform -translate-x-8 translate-y-12;
}

.bg-gradient-diagonal-right-bottom::after {
  @apply transform translate-x-8 translate-y-12;
}

@screen lg {
  .bg-mask {
    @apply px-6 bg-fixed;
  }

  .bg-gradient-blue {
    background: linear-gradient(
      to right,
      #36568d 0%,
      #36568d 75%,
      #f0f0f0 75%,
      #f0f0f0 100%
    );
  }

  .bg-gradient-teal {
    background: linear-gradient(
      to right,
      #107893 0%,
      #107893 75%,
      #f0f0f0 75%,
      #f0f0f0 100%
    );
  }

  .bg-gradient-gray {
    background: linear-gradient(
      to right,
      #798fa7 0%,
      #798fa7 75%,
      #faf9f5 75%,
      #faf9f5 100%
    );
  }

  .bg-gradient-diagonal::after {
    content: '';
  }
}

@screen xl {
  .bg-mask {
    @apply px-20;
  }
}
</style>
