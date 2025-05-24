'use client'
import React from 'react';
import { useState } from 'react';
import {
    GradientText
} from './HelperComponents';
import {
    Linkedin,
    Github,
} from 'lucide-react';
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { metaData } from '../data';
import Link from 'next/link';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <header className="sticky top-0 z-10  py-6 md:py-8 px-4 sm:px-6 lg:px-8 shadow-lg bg-gradient-to-br from-gray-900 via-purple-900 to-black rounded-b-xl" >
            <div className="max-w-7xl  mx-auto flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <GradientText className="text-2xl sm:text-3xl font-bold">
                        <Link href="/">{metaData.title}</Link>
                    </GradientText>
                    <span className="text-gray-400 hidden font-bold sm:inline">| {metaData.description}</span>
                </div>
                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
                        <li className='rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-1 hover:border shadow-md shadow-amber-50 hover:shadow-lg hover:bg-pink-600 '>
                            <a
                                href="#about"
                                className="text-gray-300 hover:text-white font-bold transition-colors block px-2 py-1"
                            >
                                About
                            </a>
                        </li>
                        <li className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-1 hover:border shadow-md shadow-amber-50 hover:shadow-lg hover:bg-pink-600">
                            <a
                                href="#skills"
                                className="text-gray-300 hover:text-white font-bold transition-colors block px-2 py-1"
                            >
                                Skills
                            </a>
                        </li>
                        <li className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-1 hover:border shadow-md shadow-amber-50 hover:shadow-lg hover:bg-pink-600">
                            <a
                                href="#experience"
                                className="text-gray-300 hover:text-white font-bold transition-colors block px-2 py-1"
                            >
                                Experience
                            </a>
                        </li>
                        <li className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-1 hover:border shadow-md shadow-amber-50 hover:shadow-lg hover:bg-pink-600">
                            <a
                                href="#education"
                                className="text-gray-300 hover:text-white font-bold transition-colors block px-2 py-1"
                            >
                                Education
                            </a>
                        </li>
                        <li className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-1 hover:border shadow-md shadow-amber-50 hover:shadow-lg hover:bg-pink-600">
                            <a
                                href="#projects"
                                className="text-gray-300 hover:text-white font-bold transition-colors block px-2 py-1"
                            >
                                Projects
                            </a>
                        </li>
                        <li className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-1 hover:border shadow-md shadow-amber-50 hover:shadow-lg hover:bg-pink-600">
                            <a
                                href="#contact"
                                className="text-gray-300 hover:text-white font-bold transition-colors block px-2 py-1"
                            >
                                Contact
                            </a>
                        </li>
                        {/* <Link href="/blog">
                            Blog
                        </Link> */}
                    </ul>
                </nav>
                <div className="flex gap-4">
                    <a
                        href={metaData.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors rounded-md shadow hover:shadow-xl hover:bg-pink-600 p-1"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                        href={metaData.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-100 transition-colors rounded-md shadow hover:shadow-xl hover:bg-pink-600 p-1"
                        aria-label="GitHub Profile"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 shadow hover:shadow-xl hover:bg-pink-600 transition-all duration-200"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
            </div>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10  overflow-y-auto bg-gradient-to-br from-gray-900 via-purple-900 to-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-2xl">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 text-2xl sm:text-3xl font-bold">{metaData.title}</span>
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="rounded-md text-gray-700 shadow hover:shadow-xl hover:bg-pink-600 transition-all duration-200"
                        >
                            <span className="sr-only text-white">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6 text-white font-bold" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href="#about"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-pink-600 shadow hover:shadow-xl transition-all duration-200"
                                    onClick={closeMobileMenu}
                                >
                                    About
                                </a>
                                <a
                                    href="#skills"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-pink-600 shadow hover:shadow-xl transition-all duration-200"
                                    onClick={closeMobileMenu}
                                >
                                    Skills
                                </a>
                                <a
                                    href="#experience"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-pink-600 shadow hover:shadow-xl transition-all duration-200"
                                    onClick={closeMobileMenu}
                                >
                                    Experience
                                </a>
                                <a
                                    href="#education"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-pink-600 shadow hover:shadow-xl transition-all duration-200"
                                    onClick={closeMobileMenu}
                                >
                                    Education
                                </a>
                                <a
                                    href="#projects"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-pink-600 shadow hover:shadow-xl transition-all duration-200"
                                    onClick={closeMobileMenu}
                                >
                                    Projects
                                </a>
                                <a
                                    href="#contact"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-pink-600 shadow hover:shadow-xl transition-all duration-200"
                                    onClick={closeMobileMenu}
                                >
                                    Contact
                                </a>
                            </div>
                            <div className="py-6">
                                <Link
                                    href="/blog"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-pink-600 shadow hover:shadow-xl transition-all duration-200"
                                    onClick={closeMobileMenu}
                                >
                                    Blog
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header >
    )
}

