import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

import TDropdown from 'vue-tailwind/dist/t-dropdown'
import TModal from 'vue-tailwind/dist/t-modal'
import TPagination from 'vue-tailwind/dist/t-pagination'
import TInput from 'vue-tailwind/dist/t-input'
import TCheckbox from 'vue-tailwind/dist/t-checkbox'
import TRadio from 'vue-tailwind/dist/t-radio'
import TDatepicker from 'vue-tailwind/dist/t-datepicker'
// eslint-disable-next-line import/no-named-as-default
import Mandarin from 'vue-tailwind/dist/l10n/zh'

const settings = {
  TDropdown: {
    component: TDropdown,
    props: {
      classes: {
        button:
          'px-4 py-2 flex items-center border rounded hover:text-gray-700',
        wrapper: 'inline-flex flex-col',
        dropdownWrapper: 'relative z-10',
        dropdown:
          'origin-top-left absolute left-0 w-40 shadow-lg bg-white mt-2',
        enterClass: '',
        enterActiveClass:
          'transition ease-out duration-100 transform opacity-0 scale-95',
        enterToClass: 'transform opacity-100 scale-100',
        leaveClass: 'transition ease-in transform opacity-100 scale-100',
        leaveActiveClass: '',
        leaveToClass: 'transform opacity-0 scale-95 duration-75'
      },
      variants: {
        right: {
          dropdown:
            'origin-top-right absolute right-0 w-32 shadow-lg bg-white rounded mt-1'
        },
        user: {
          dropdown: 'origin-top-right absolute right-0 w-56 bg-gray-200 mt-3'
        },
        playerbtn: {
          dropdown:
            'origin-bottom bottom-0 left-50 absolute flex flex-col-reverse items-center w-16 bg-black mb-12 py-4 rounded-lg transform -translate-x-1/2 space-y-4 space-y-reverse'
        },
        playlist: {
          wrapper: 'inline-flex flex-col w-full lg:w-auto',
          dropdown:
            'origin-top left-0 right-auto top-0 bottom-auto lg:origin-bottom lg:left-auto lg:right-0 lg:top-auto lg:bottom-0 absolute bg-gray-200 lg:bg-black mt-2 lg:mt-0 lg:mb-12 p-4 rounded-lg w-full lg:w-auto'
        },
        share: {
          dropdown:
            'origin-top top-0 bottom-auto lg:origin-bottom left-auto right-0 lg:top-auto lg:bottom-0 absolute bg-gray-200 lg:bg-black mt-2 lg:mt-0 lg:mb-12 p-2 rounded-lg w-auto'
        }
      }
    }
  },
  TModal: {
    component: TModal,
    props: {
      fixedClasses: {
        overlay:
          'p-2 z-50 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-opacity-50 bg-black',
        wrapper: 'z-50 relative mx-auto',
        modal:
          'bg-white shadow overflow-hidden relative border-4 border-secondary rounded',
        body: '',
        header: 'p-4 text-sm font-semibold uppercase text-gray-700',
        footer: 'p-4 text-sm font-semibold uppercase text-gray-700',
        close: 'absolute right-0 top-0 m-3 focus:outline-none',
        closeIcon: 'h-5 w-5 fill-current'
      },
      classes: {
        overlay: '',
        wrapper: 'max-w-lg my-12',
        modal: '',
        body: 'px-6 py-4',
        header: 'text-gray-700 border-b',
        footer: 'border-t ',
        close: '',
        closeIcon: 'text-secondary'
      },
      variants: {
        wide: {
          body: 'p-4 lg:p-8'
        },
        ads: {
          overlay: 'flex items-center justify-center',
          wrapper: 'max-w-full',
          body: '',
          modal: 'border-none',
          close: 'z-10 bg-white p-1 rounded-full'
        }
      }
    }
  },
  TPagination: {
    component: TPagination,
    props: {
      classes: {
        wrapper: 'flex justify-center',
        element: 'w-8 h-8 mx-1',
        activeElement: 'w-8 h-8 mx-1',
        disabledElement: 'w-8 h-8 mx-1',
        ellipsisElement: 'w-8 h-8 mx-1',
        activeButton:
          'bg-secondary w-full h-full rounded-full  text-white focus:outline-none',
        disabledButton:
          'opacity-25 w-full h-full cursor-not-allowed focus:outline-none',
        button:
          'hover:bg-secondary w-full h-full rounded-full hover:text-white focus:outline-none',
        ellipsis: ''
      },
      variants: {
        white: {
          wrapper: 'flex justify-center',
          element: 'w-8 h-8 mx-1',
          activeElement: 'w-8 h-8 mx-1',
          disabledElement: 'w-8 h-8 mx-1',
          ellipsisElement: 'w-8 h-8 mx-1',
          activeButton:
            'bg-black w-full h-full rounded-full  text-white focus:outline-none',
          disabledButton:
            'opacity-25 w-full h-full cursor-not-allowed focus:outline-none',
          button:
            'hover:bg-black w-full h-full rounded-full text-white focus:outline-none',
          ellipsis: 'text-white'
        }
      }
    }
  },
  TInput: {
    component: TInput,
    props: {
      classes:
        'bg-white focus:outline-none focus:border-black border border-gray-400 rounded py-2 px-2 block leading-normal lg:text-base text-xs',
      variants: {
        error:
          'text-red bg-red-light focus:outline-none focus:shadow-outline border border-secondary rounded py-2 px-4 block w-full leading-normal placeholder-secondary',
        success:
          'text-green-600 bg-green-100 focus:outline-none focus:shadow-outline border border-green-300 rounded py-2 px-4 block w-full leading-normal placeholder-green-300'
      }
    }
  },
  TCheckbox: {
    component: TCheckbox,
    props: {
      fixedClasses: 'w-4 h-4',
      classes: '',
      variants: {
        error: 'text-secondary ',
        success: 'text-green-500 '
      }
    }
  },
  TRadio: {
    component: TRadio,
    props: {
      fixedClasses: 'w-4 h-4',
      classes: '',
      variants: {
        error: 'text-secondary ',
        success: 'text-green-500 '
      }
    }
  },
  TDatepicker: {
    component: TDatepicker,
    props: {
      fixedClasses: {
        navigator: 'flex',
        navigatorViewButton: 'flex items-center',
        navigatorViewButtonIcon: 'flex-shrink-0 h-5 w-5',
        navigatorViewButtonBackIcon: 'flex-shrink-0 h-5 w-5',
        navigatorLabel: 'flex items-center py-1',
        navigatorPrevButtonIcon: 'h-6 w-6 inline-flex',
        navigatorNextButtonIcon: 'h-6 w-6 inline-flex',

        inputWrapper: 'relative',
        viewGroup: 'inline-flex',
        view: 'w-64',
        calendarDaysWrapper: 'grid grid-cols-7',
        calendarHeaderWrapper: 'grid grid-cols-7',
        monthWrapper: 'grid grid-cols-4',
        yearWrapper: 'grid grid-cols-4',

        clearButton:
          'flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-6 w-6',
        clearButtonIcon: 'fill-current h-3 w-3'
      },
      classes: {
        // Dropdown related classes
        wrapper: 'inline-flex flex-col',
        dropdownWrapper: 'relative z-10',
        dropdown: 'origin-top-left absolute rounded-md shadow-lg',
        enterClass: '',
        enterActiveClass:
          'transition ease-out duration-100 transform opacity-0 scale-95',
        enterToClass: 'transform opacity-100 scale-100',
        leaveClass: 'transition ease-in transform opacity-100 scale-100',
        leaveActiveClass: '',
        leaveToClass: 'transform opacity-0 scale-95 duration-75',

        // Wrapper for inline calendar
        inlineWrapper: '',

        // Text input related classes
        inputWrapper: '',
        input: 'form-input w-full',
        clearButton: 'hover:bg-gray-200 text-gray-500 rounded',
        clearButtonIcon: '',

        // Picker views
        viewGroup: 'bg-white border',
        view: '',

        // Navigator
        navigator: 'pt-2 px-2',
        navigatorViewButton:
          'transition ease-in-out duration-100 inline-flex cursor-pointer rounded-full px-2 py-1 -ml-1 hover:bg-gray-200',
        navigatorViewButtonIcon: 'fill-current text-gray-500',
        navigatorViewButtonBackIcon: 'fill-current text-gray-500',
        navigatorViewButtonMonth: 'text-gray-700 font-semibold',
        navigatorViewButtonYear: 'text-gray-600 ml-1',
        navigatorViewButtonYearRange: 'text-gray-600 ml-1',
        navigatorLabel: 'py-1',
        navigatorLabelMonth: 'text-gray-700 font-semibold',
        navigatorLabelYear: 'text-gray-600 ml-1',
        navigatorPrevButton:
          'transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 rounded-full p-1 ml-2 ml-auto disabled:opacity-25 disabled:cursor-not-allowed',
        navigatorNextButton:
          'transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 rounded-full p-1 -mr-1 disabled:opacity-25 disabled:cursor-not-allowed',
        navigatorPrevButtonIcon: 'text-gray-500',
        navigatorNextButtonIcon: 'text-gray-500',

        // Calendar View
        calendarWrapper: 'p-2',
        calendarHeaderWrapper: '',
        calendarHeaderWeekDay:
          'uppercase text-xs text-gray-600 w-8 h-8 flex items-center justify-center',
        calendarDaysWrapper: '',
        calendarDaysDayWrapper: 'w-full h-8 flex flex-shrink-0 items-center',

        // Day item
        otherMonthDay:
          'text-sm rounded-full w-8 h-8 mx-auto hover:bg-secondary-light text-gray-400 disabled:opacity-25 disabled:cursor-not-allowed',
        emptyDay: '',
        inRangeFirstDay:
          'text-sm bg-secondary text-white w-full h-8 rounded-l-full',
        inRangeLastDay:
          'text-sm bg-secondary text-white w-full h-8 rounded-r-full',
        inRangeDay:
          'text-sm bg-secondary-light w-full h-8 disabled:opacity-25 disabled:cursor-not-allowed',
        selectedDay:
          'text-sm rounded-full w-8 h-8 mx-auto bg-secondary text-white disabled:opacity-25 disabled:cursor-not-allowed',
        activeDay:
          'text-sm rounded-full bg-secondary-light w-8 h-8 mx-auto disabled:opacity-25 disabled:cursor-not-allowed',
        highlightedDay:
          'text-sm rounded-full bg-secondary-light w-8 h-8 mx-auto disabled:opacity-25 disabled:cursor-not-allowed',
        day:
          'text-sm rounded-full w-8 h-8 mx-auto hover:bg-secondary-light disabled:opacity-25 disabled:cursor-not-allowed',
        today:
          'text-sm rounded-full w-8 h-8 mx-auto hover:bg-secondary-light disabled:opacity-25 disabled:cursor-not-allowed border border-secondary',

        // Months View
        monthWrapper: 'p-2',
        selectedMonth:
          'text-sm rounded w-full h-12 mx-auto bg-secondary text-white',
        activeMonth: 'text-sm rounded w-full h-12 mx-auto bg-secondary-light',
        month: 'text-sm rounded w-full h-12 mx-auto hover:bg-secondary-light',

        // Years View
        yearWrapper: 'p-2',
        year: 'text-sm rounded w-full h-12 mx-auto hover:bg-secondary-light',
        selectedYear:
          'text-sm rounded w-full h-12 mx-auto bg-secondary text-white',
        activeYear: 'text-sm rounded w-full h-12 mx-auto bg-secondary-light'
      },
      locales: {
        zh: Mandarin
      },
      lang: 'zh'
    }
  }
}

Vue.use(VueTailwind, settings)
