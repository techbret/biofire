/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          sky: colors.sky,
          teal: colors.teal,
          rose: colors.rose,
        },
      },
    },
  }
  ```
*/
import {
    CalendarIcon,
    CashIcon,
    ChipIcon,
    CurrencyDollarIcon,
    PhoneIcon,
    PresentationChartLineIcon,
    ReceiptRefundIcon,
  } from '@heroicons/react/outline'
  
  const actions = [
    {
      title: 'Engineering',
      href: '#',
      icon: ChipIcon,
      iconForeground: 'text-teal-700',
      iconBackground: 'bg-teal-50',
    },
    {
      title: 'Customer Service',
      href: '#',
      icon: PhoneIcon,
      iconForeground: 'text-purple-700',
      iconBackground: 'bg-purple-50',
    },
    {
      title: 'Operations',
      href: '#',
      icon: CalendarIcon,
      iconForeground: 'text-sky-700',
      iconBackground: 'bg-sky-50',
    },
    { title: 'Finance', href: '#', icon: CashIcon, iconForeground: 'text-yellow-700', iconBackground: 'bg-yellow-50' },
    {
      title: 'Sales',
      href: '#',
      icon: CurrencyDollarIcon,
      iconForeground: 'text-rose-700',
      iconBackground: 'bg-rose-50',
    },
    {
      title: 'Training',
      href: '#',
      icon: PresentationChartLineIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Careers() {
    return (
        <div>
        <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">We're Hiring</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Brave enough to be different.
          </p>
          <p className=" mt-5 mx-auto text-xl text-gray-500">
          Team members enjoy autonomy and flexibility from day one, so expect to be immediately tasked with solving challenging problems and building new systems that work. 
          </p>
        </div>
      </div>
    </div>
       <div className='max-w-7xl mx-auto py-12 px-4 text-center'>
      <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}
            className={classNames(
              actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
              actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
              actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
              actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
              'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  'rounded-lg inline-flex p-3 ring-4 ring-white'
                )}
              >
                <action.icon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium">
                <a href={action.href} className="focus:outline-none">
                  {/* Extend touch target to entire panel */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  {action.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et
                quo et molestiae.
              </p>
            </div>
            <span
              className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
              aria-hidden="true"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>
        ))}
      </div>
      </div>
      </div>
    )
  }
  