import {
    EyeIcon,
    CogIcon,
    LockClosedIcon,
    ShieldCheckIcon,
    ChipIcon,
    UserGroupIcon,
} from '@heroicons/react/outline'

import { ChevronRightIcon, ExternalLinkIcon } from '@heroicons/react/solid'
import Gun from '../images/bio-gun.svg'
import CEO from '../images/biofire-gun-demo.png'


const features = [
    {
        name: 'A Vision for a Safer Choice',
        description: 'We believe in our technology’s potential to help reduce firearm accidents, criminal misuse, suicides and other tragic outcomes.',
        icon: EyeIcon,
    },
    {
        name: 'Secured',
        description: 'Our technology is secure, safe, and fast. We are commited to solving a problem with lazer focuse and secure technology',
        icon: LockClosedIcon,
    },
    {
        name: 'Smart Technology',
        description: 'We embrace the challenge in designing a Smart Gun that is ultra-reliable, simple to use, and easy to maintain.',
        icon: ChipIcon,
    },
    {
        name: 'Advanced Security',
        description: 'At Biofire, we are building a home defense weapon that just works when you need it, every single time.',
        icon: ShieldCheckIcon,
    },
    {
        name: 'User Friendly',
        description:
            'We are building a better option for gun owners who want more control over who can access their weapon.',
        icon: CogIcon,
    },
    {
        name: 'Tech Experience',
        description: 'Biofire employees have built satellites, cars, medical devices, rockets, robots, supersonic jets, fire rings, and, of course, firearms.',
        icon: UserGroupIcon,
    },
]


export default function Home() {
    return (
        <div className="bg-white">
            <div className="relative overflow-hidden">
                <main>
                    <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
                        <div className="mx-auto max-w-7xl lg:px-8">
                            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                                    <div className="lg:py-24">
                                        <a
                                            href="/careers"
                                            className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                                        >
                                            <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">
                                                We're hiring
                                            </span>
                                            <span className="ml-4 text-sm">Visit our careers page</span>
                                            <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                                        </a>
                                        <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                            <span className="block">A better way to</span>
                                            <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
                                                to secure your gun
                                            </span>
                                        </h1>
                                        <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                                            Biofire is building a handgun that only fires for you. The world’s first biometric Smart Gun is ready to fire when you pick it up. For anyone else, the gun remains locked and secure.
                                        </p>
                                        <div className="mt-10 sm:mt-12">
                                            <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                                                <div className="sm:flex">
                                                    <div className="min-w-0 flex-1">
                                                        <label htmlFor="email" className="sr-only">
                                                            Email address
                                                        </label>
                                                        <input
                                                            id="email"
                                                            type="email"
                                                            placeholder="Enter your email"
                                                            className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                                                        />
                                                    </div>
                                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                                        <button
                                                            type="submit"
                                                            className="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                                                        >
                                                            Notify Me
                                                        </button>
                                                    </div>
                                                </div>
                                                <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                                                    Join the <a href="/waitlist" className="font-medium text-white">waitlist</a> for the Biofire Smart Gun. You will also receive relevant updates from Biofire about the program you select.


                                                    .
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">

                                        <img
                                            className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                            src={Gun}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature section with screenshot */}
                    <div className="relative bg-gray-50 pt-16 sm:pt-24 lg:pt-32">
                        <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
                            <div>
                                <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">The Vision</h2>
                                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                                    A vision for a safer choice.
                                </p>
                                <p className="mt-5 mx-auto text-xl text-gray-500">
                                    The firearm you choose for home and self-defense serves you best when it's close at hand and ready to use. But an unsecured firearm invites unauthorized use - by children, thieves, or anyone else. Too often, unauthorized use leads to a tragic outcome.
                                </p>
                            </div>
                            <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
                                <img
                                    className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                                    src={CEO}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                    {/* Feature section with grid */}
                    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
                        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                            <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">Mission Driver</h2>
                            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                                Committed to responsible gun ownership.
                            </p>
                            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                                Biofire brings together gun owners, engineers, and parents who are motivated to create new choices for keeping themselves and their loved ones safe.
                            </p>
                            <div className="mt-12">
                                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="pt-6">
                                            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                                                <div className="-mt-6">
                                                    <div>
                                                        <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                                                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                                        </span>
                                                    </div>
                                                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                                                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-900">
                        <div className=" mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                            <h2 className="text-3xl font-extrabold text-teal-200 sm:text-4xl">
                                <span className="block">Committed to responsible gun ownership.</span>
                                <span className="block">Join the Waitlist</span>
                            </h2>
                            <p className="mt-4 text-lg leading-6 text-white">
                                Our mission-driven approach has garnered support from the firearm community, the tech world, and the media.
                            </p>
                            <a
                                href="/waitlist"
                                className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 text-white sm:w-auto"
                            >
                                Join Now
                            </a>
                        </div>
                    </div>



                    <div className="bg-white">
                        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                            <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
                                Led By experience
                            </p>
                            <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8">
                                <div class="grid-col-md-3 grid-col-sm-6 grid-col-6"><img src="https://biofire.io/media/About_us/Frame_40_9_.png" alt="" /></div>
                                <div class="grid-col-md-3 grid-col-sm-6 grid-col-6"><img src="https://biofire.io/media/About_us/Frame_40.png" alt="" /></div>
                                <div class="grid-col-md-3 grid-col-sm-6 grid-col-6"><img src="https://biofire.io/media/About_us/Frame_40_1_.png" alt="" /></div>
                                <div class="grid-col-md-3 grid-col-sm-6 grid-col-6"><img src="https://biofire.io/media/About_us/Frame_40_2_.png" alt="" /></div>
                                <div class="grid-col-md-3 grid-col-sm-6 grid-col-6"><img src="https://biofire.io/media/About_us/Frame_40_4_.png" alt="" /></div>
                                <div class="grid-col-md-3 grid-col-sm-6 grid-col-6"><img src="https://biofire.io/media/About_us/Frame_40_3_.png" alt="" /></div>
                                <div class="grid-col-md-3 grid-col-sm-6 grid-col-6"><img src="https://biofire.io/media/About_us/Frame_435.png" alt="" /></div>
                                <div class="grid-col-md-3 grid-col-sm-6 grid-col-6"><img src="https://biofire.io/media/wysiwyg/AFC_black-text.png" alt="" /></div>
                                <div class="grid-col-md-3 grid-col-sm-6 grid-col-6"><img src="https://biofire.io/media/About_us/Frame_40_6_.png" alt="" /></div>
                                <div class="grid-col-md-3 grid-col-sm-6 grid-col-6"><img src="https://biofire.io/media/About_us/Frame_437.png" alt="" /></div>
                                <div class="grid-col-md-3 grid-col-sm-6 grid-col-6"><img src="https://biofire.io/media/About_us/Frame_40_5_.png" alt="" /></div>
                                <div class="grid-col-md-3 grid-col-sm-6 grid-col-6"><img src="https://biofire.io/media/About_us/Frame.png" alt="" /></div>
                                <div class="grid-col-md-3 grid-col-sm-6 grid-col-6"><img src="https://biofire.io/media/About_us/Frame_40_8_.png" alt="" /></div>
                                <div class="grid-col-md-3 grid-col-sm-6 grid-col-6"><img src="https://biofire.io/media/About_us/Frame_40_7_.png" alt="" /></div>
                                <div class="grid-col-md-3 grid-col-sm-6 grid-col-6"><img src="https://biofire.io/media/About_us/Frame_438.png" alt="" /></div>
                                <div class="grid-col-md-3 grid-col-sm-6 grid-col-6"><img src="https://biofire.io/media/About_us/Frame_439.png" alt="" /></div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="relative bg-gray-900">
                        <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                            <img
                                className="w-full h-full object-cover"
                                src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
                                alt=""
                            />
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"
                            />
                        </div>
                        <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
                            <div className="md:ml-auto md:w-1/2 md:pl-10">
                                <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
                                    BIOFIRE CAREERS
                                </h2>
                                <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">Brave enough to be different.</p>
                                <p className="mt-3 text-lg text-gray-300">
                                    Reducing accidental firearm injuries and deaths requires original thinking and authentic collaboration, so we’re deeply invested in building the team and culture that can achieve our mission together.
                                </p>
                                <div className="mt-8">
                                    <div className="inline-flex rounded-md shadow">
                                        <a
                                            href="/careers"
                                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                                        >
                                            Open Roles
                                            <ExternalLinkIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

            </div>
        </div>
    )
}
