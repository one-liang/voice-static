/* eslint-disable camelcase */

import Vue from 'vue'
import zhTW from 'vee-validate/dist/locale/zh_TW'

import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize
} from 'vee-validate'

import {
  confirmed,
  email,
  ext,
  max,
  max_value,
  mimes,
  min,
  min_value,
  numeric,
  required,
  size
} from 'vee-validate/dist/rules'

extend('confirmed', confirmed)
extend('email', email)
extend('ext', ext)
extend('max', max)
extend('max_value', max_value)
extend('mimes', mimes)
extend('min', min)
extend('min_value', min_value)
extend('numeric', numeric)
extend('required', required)
extend('size', size)

extend('password', {
  validate: (value) => {
    return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}/.test(value)
  },
  message: '長度8-30個字，含數字、大小寫字母的混合字串'
})

extend('passwordnotthesame', {
  params: ['target'],
  validate (value, { target }) {
    if (value === target) {
      return false
    } else {
      return true
    }
  },
  message: '新密碼不能跟舊密碼相同'
})

extend('code39', {
  validate: (value) => {
    return /^\/{1}[0-9A-Z.+-]{7}$/.test(value)
  },
  message: '載具號碼格式錯誤'
})

extend('CitizenDigitalCertificate', {
  validate: (value) => {
    return /^[a-zA-Z]{2}[0-9]{14}$/.test(value)
  },
  message: '自然人憑證號碼格式錯誤'
})

extend('TaxIdNumber', {
  validate: (value) => {
    return /^[0-9]{8}$/.test(value)
  },
  message: '統一編號格式錯誤'
})

localize('zh_TW', zhTW)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
