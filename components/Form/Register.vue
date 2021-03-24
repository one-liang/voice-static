<template>
  <div>
    <ValidationObserver ref="registerForm" tag="div">
      <form @submit.prevent="checkFields" @reset.prevent="reset">
        <ValidationProvider
          v-slot="{ errors, classes }"
          vid="email"
          name="帳號(E-mail)"
          tag="div"
          rules="required|email"
          class="mb-4"
        >
          <div
            class="flex flex-col items-center space-y-1 lg:flex-row lg:space-y-0"
          >
            <span class="w-full font-medium lg:w-1/4 required">帳號</span>
            <TInput
              v-model="form.email"
              class="w-full lg:w-3/4"
              type="email"
              name="email"
              placeholder="請以E-mail格式輸入您的帳號"
              :class="classes"
            />
          </div>
          <span class="block w-full ml-auto text-sm lg:w-3/4 text-red">{{
            errors[0]
          }}</span>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors, classes }"
          vid="password"
          name="密碼"
          rules="required|password"
          tag="div"
          class="mb-4"
        >
          <div
            class="flex flex-col items-center space-y-1 lg:flex-row lg:space-y-0"
          >
            <span class="w-full font-medium lg:w-1/4 required">密碼</span>
            <TInput
              v-model="form.password"
              class="w-full lg:w-3/4"
              type="password"
              placeholder="長度8-30個字，含數字、大小寫字母的混合字串"
              :class="classes"
            />
          </div>
          <span class="block w-full ml-auto text-sm lg:w-3/4 text-red">{{
            errors[0]
          }}</span>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors, classes }"
          vid="confirmed"
          name="確認密碼"
          rules="required|confirmed:password"
          tag="div"
          class="mb-4"
        >
          <div
            class="flex flex-col items-center space-y-1 lg:flex-row lg:space-y-0"
          >
            <span class="w-full font-medium lg:w-1/4 required">確認密碼</span>
            <TInput
              v-model="confirmed"
              type="password"
              class="w-full lg:w-3/4"
              placeholder="長度8-30個字，含數字、大小寫字母的混合字串"
              :class="classes"
            />
          </div>
          <span class="block w-full ml-auto text-sm lg:w-3/4 text-red">{{
            errors[0]
          }}</span>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          vid="nickname"
          name="暱稱"
          rules="max:15"
          tag="div"
          class="mb-4"
        >
          <div
            class="flex flex-col items-center space-y-1 lg:flex-row lg:space-y-0"
          >
            <span class="w-full font-medium lg:w-1/4">暱稱</span>
            <TInput
              v-model="form.nickname"
              class="w-full lg:w-3/4"
              type="text"
              placeholder="我們將用此稱呼您"
            />
          </div>
          <span class="block w-full ml-auto text-sm lg:w-3/4 text-red">{{
            errors[0]
          }}</span>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          vid="fullname"
          name="真實姓名"
          rules="max:15"
          tag="div"
          class="mb-4"
        >
          <div
            class="flex flex-col items-center space-y-1 lg:flex-row lg:space-y-0"
          >
            <span class="w-full font-medium lg:w-1/4">真實姓名</span>
            <TInput
              v-model="form.fullname"
              class="w-full lg:w-3/4"
              type="text"
              placeholder="以利行銷活動贈獎用"
            />
          </div>
          <span class="block w-full ml-auto text-sm lg:w-3/4 text-red">{{
            errors[0]
          }}</span>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          vid="gender"
          name="性別"
          tag="div"
          class="mb-4"
        >
          <div
            class="flex flex-col items-center space-y-1 lg:flex-row lg:space-y-0"
          >
            <span class="w-full font-medium lg:w-1/4">性別</span>
            <div class="flex w-full space-x-3 lg:w-3/4">
              <label class="flex items-center space-x-2">
                <TRadio v-model="form.gender" value="male" />
                <span>男</span>
              </label>
              <label class="flex items-center space-x-2">
                <TRadio v-model="form.gender" value="female" />
                <span>女</span>
              </label>
              <label class="flex items-center space-x-2">
                <TRadio v-model="form.gender" value="other" />
                <span>其他</span>
              </label>
            </div>
          </div>
          <span class="block w-full ml-auto text-sm lg:w-3/4 text-red">{{
            errors[0]
          }}</span>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          vid="birthday"
          name="生日"
          tag="div"
          class="mb-4"
        >
          <div
            class="flex flex-col items-center space-y-1 lg:flex-row lg:space-y-0"
          >
            <span class="w-full font-medium lg:w-1/4">生日</span>
            <TDatepicker
              v-model="form.birthday"
              class="w-full lg:w-3/4 datepicker"
              date-format="Y-m-d"
              user-format="Y-m-d"
            />
          </div>
          <span class="block w-full ml-auto text-sm lg:w-3/4 text-red">{{
            errors[0]
          }}</span>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          vid="programCategories"
          name="節目主題"
          tag="div"
          class="mb-4"
        >
          <p class="mb-2 font-medium">
            感興趣之節目主題
            <span class="text-sm text-gray-600">（可複選）</span>
          </p>
          <div class="flex flex-wrap space-y-1">
            <label
              v-for="category in programCategories"
              :key="`programCategory_${category.id}`"
              class="flex items-center mr-5 space-x-2"
            >
              <TCheckbox
                v-model="multi.programCategories"
                :value="category.id"
              />
              <span class="text-gray-600">{{ category.name }}</span>
            </label>
          </div>
          <span class="block text-sm text-red">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          vid="audiobookCategories"
          name="有聲書主題"
          tag="div"
          class="mb-4"
        >
          <p class="mb-2 font-medium">
            感興趣之有聲書主題
            <span class="text-sm text-gray-600">（可複選）</span>
          </p>
          <div class="flex flex-wrap space-y-1">
            <label
              v-for="category in audiobookCategories"
              :key="`audiobookCategory_${category.id}`"
              class="flex items-center mr-5 space-x-2"
            >
              <TCheckbox
                v-model="multi.audiobookCategories"
                :value="category.id"
              />
              <span class="text-gray-600">{{ category.name }}</span>
            </label>
          </div>
          <span class="block text-sm text-red">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          vid="courseCategories"
          name="課程主題"
          tag="div"
          class="mb-4"
        >
          <p class="mb-2 font-medium">
            感興趣之課程主題
            <span class="text-sm text-gray-600">（可複選）</span>
          </p>
          <div class="flex flex-wrap space-y-1">
            <label
              v-for="category in courseCategories"
              :key="`courseCategory_${category.id}`"
              class="flex items-center mr-5 space-x-2"
            >
              <TCheckbox
                v-model="multi.courseCategories"
                :value="category.id"
              />
              <span class="text-gray-600">{{ category.name }}</span>
            </label>
          </div>
          <span class="block text-sm text-red">{{ errors[0] }}</span>
        </ValidationProvider>

        <p class="mt-8 mb-4 text-xs text-center text-gray-500 lg:text-sm">
          註冊即表示您已閱讀並同意
          <NuxtLink
            :to="{ name: 'payment-terms' }"
            class="text-secondary"
          >
            服務條款
          </NuxtLink>
          與
          <NuxtLink
            :to="{ name: 'privacy-policy' }"
            class="text-secondary"
          >
            隱私政策
          </NuxtLink>
        </p>
        <button
          type="submit"
          class="w-full py-2 mb-3 font-medium btn btn-secondary"
          :disabled="sending"
        >
          註冊
        </button>
        <p class="mb-2 text-sm text-center text-gray-500">
          已經是會員？直接
          <button
            class="text-secondary focus:outline-none"
            type="button"
            @click="changeTab()"
          >
            登入
          </button>
        </p>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  props: {
    tab: {
      type: String,
      default: 'register'
    }
  },
  data () {
    return {
      sending: false,
      programCategories: [],
      courseCategories: [],
      audiobookCategories: [],
      multi: {
        programCategories: [],
        courseCategories: [],
        audiobookCategories: []
      },
      form: {
        email: '',
        password: '',
        nickname: '',
        fullname: '',
        gender: '',
        birthday: '',
        programCategories: '',
        courseCategories: '',
        audiobookCategories: ''
      },
      confirmed: ''
    }
  },
  methods: {
    get () {
    },
    onError () {
      console.log('onError')
    },
    onExpired () {
      console.log('Expired')
    },
    checkFields () {
      console.log('checkFields')
    },
    onSubmit () {
      console.log('onSubmit')
    },
    onSuccess () {
      console.log('onSuccess')
    },
    changeTab () {
      this.$scrollTo('body', 0)
      this.$emit('update:tab', 'login')
    }
  }
}
</script>

<style lang="postcss" scoped>
>>> .datepicker .form-input {
  @apply border border-gray-400 rounded py-2 px-4 block leading-normal;

  &:focus {
    @apply outline-none border-black;
  }
}

.required::before {
  @apply text-red;

  content: '*';
}
</style>
