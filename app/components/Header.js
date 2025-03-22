import React from 'react';
import {
    GradientText
} from './HelperComponents';
import {
    Linkedin,
    Github,
} from 'lucide-react';
import { metaData } from '../data';
import Link from 'next/link';

export const Header = () => (
    <header className="py-6 md:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-4">
                <GradientText className="text-2xl sm:text-3xl font-bold">
                  <Link href="/">{metaData.title}</Link>
                </GradientText>
                <span className="text-gray-400 hidden sm:inline">| {metaData.description}</span>
            </div>
            <nav className="hidden md:block">
                <ul className="flex space-x-6">
                    <li>
                        <a
                            href="#about"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#experience"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Experience
                        </a>
                    </li>
                    <li>
                        <a
                            href="#education"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Education
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Contact
                        </a>
                    </li>
                    <Link href="/blog">
                        Blog
                    </Link>
                </ul>
            </nav>
            <div className="flex gap-4">
                <a
                    href="https://www.linkedin.com/in/paras-rawat-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label="LinkedIn Profile"
                >
                    <Linkedin className="w-6 h-6" />
                </a>
                <a
                    href="https://github.com/parasrawat26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-100 transition-colors"
                    aria-label="GitHub Profile"
                >
                    <Github className="w-6 h-6" />
                </a>
            </div>
        </div>
    </header>

);