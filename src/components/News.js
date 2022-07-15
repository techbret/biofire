/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const posts = [
    {
      title: 'Biofire raises $17M and emerges from stealth',
      href: 'https://biofire.io/news-biofire-raises-17m-and-emerges-from-stealth',
      description:
        'Biofire is the first to build a smart handgun from the ground up with fully integrated, instantly unlocking, state-of-the-art biometrics. Our Smart Gun instantly unlocks for users authorized by its owner, but remains locked for all others, including children.',
      date: 'Mar 11, 2022',
      datetime: '2020-03-16',
    },
    {
      title: 'Biofire aims to reduce tragic accidents with a gun only its owner can use',
      href: 'https://techcrunch.com/2022/05/11/biofire-aims-to-reduce-tragic-accidents-with-a-gun-only-its-owner-can-use/',
      description: 'The last thing we need in this world is more guns. But we’re getting them whether we like it or not, so wouldn’t it be nice if those guns had safety mechanisms like our phones...',
      date: 'Mar 11, 2020',
      datetime: '2020-03-10',
    },
    {
      title: 'Biofire Technologies Raises $17m for Smart Gun to Redefine the Future of Firearm Safety',
      href: 'https://www.prnewswire.com/news-releases/biofire-technologies-raises-17m-for-smart-gun-to-redefine-the-future-of-firearm-safety-301545284.html',
      description:
        'Biofire has attracted the largest private investment in a firearm technology startup in history to bring their instantly unlocking, biometrically-authenticated handgun to market.',
      date: 'Mar 11, 2020',
      datetime: '2020-02-12',
    },
    {
      title: 'Designing a fingerprint-access 9MM Pistol from the Ground Up',
      href: 'https://smarttechfoundation.org/smart-firearms-technology/biofire/',
      description:
        'Biofire Technologies is a startup building the next generation of firearms. By incorporating advanced biometric safety technology into a handgun, founder Kai Kloepfer hopes to help save thousands of lives a year and disrupt an industry that has lost its drive to innovate.',
      date: 'Jan 29, 2020',
      datetime: '2020-01-29',
    },
  ]
  
  export default function News() {
    return (
      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Press</h2>
            <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
              <p className="text-xl text-gray-500">Get weekly updates in your inbox as we prepare for launch.</p>
              <form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email-address"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 lg:max-w-xs"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
                  <button
                    type="button"
                    className="w-full bg-gray-800 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:inline-flex"
                  >
                    Notify me
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <div key={post.title}>
                <p className="text-sm text-gray-500">
                  <time dateTime={post.datetime}>{post.date}</time>
                </p>
                <a href="#" className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                  <p className="mt-3 text-base text-gray-500">{post.description}</p>
                </a>
                <div className="mt-3">
                  <a href={post.href} className="text-base font-semibold text-cyan-400 hover:text-indigo-500">
                    Read full story
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  