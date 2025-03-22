import React from "react";
import { motion } from 'framer-motion';
import {
    Linkedin,
    Github,
    Mail,
    Phone,
    MapPin,
    ChevronRight
} from 'lucide-react';
import { Code, Briefcase, BookOpen, Zap, Star } from 'react-feather';

import {
    GradientText,
    SectionTitle,
    AnimatedCard,
    SkillBar,
    ExperienceCard,
    EducationCard,
    ProjectCard,
    Button,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    Badge,
    Progress,
    cn
} from './components/HelperComponents';

import { projects, skills, experience, education } from './data';

import ProfilePic from './assets/akhand.jpg'
import Image from "next/image";


export const Home = () => (
    <main className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            {/* About Section */}
            <section id="about" className="py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <SectionTitle>
                            About <GradientText>Me</GradientText>
                        </SectionTitle>
                        <p className="text-gray-300 text-lg mb-6">
                            Hello! I&apos;m Akhand Pratap Singh, a passionate full-stack developer based in Lucknow, India.
                            With over 3+ years of experience, I specialize in creating robust and scalable web
                            applications. My expertise spans across PHP, Laravel, React, and more. I am
                            dedicated to delivering high-quality solutions and continuously improving my
                            skills.
                        </p>
                        <p className="text-gray-300 text-lg">
                            When I&apos;m not coding, you can find me exploring new technologies,
                            traveling, or enjoying my free time.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src={ProfilePic.src} 
                            alt="Akhand Pratap Singh"
                            className="rounded-full w-100 h-100 border-4 border-purple-500/30 shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-16">
                <SectionTitle>
                    My <GradientText>Skills</GradientText>
                </SectionTitle>
                <div className="grid md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <AnimatedCard key={index} delay={index * 0.1}>
                            <SkillBar skill={skill.skill} level={skill.level} />
                        </AnimatedCard>
                    ))}
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-16">
                <SectionTitle>
                    My <GradientText>Experience</GradientText>
                </SectionTitle>
                {experience.map((exp, index) => (
                    <AnimatedCard key={index} delay={index * 0.2}>
                        <ExperienceCard experience={exp} />
                    </AnimatedCard>
                ))}
            </section>

            {/* Education Section */}
            <section id="education" className="py-16">
                <SectionTitle>
                    My <GradientText>Education</GradientText>
                </SectionTitle>
                {education.map((edu, index) => (
                    <AnimatedCard key={index} delay={index * 0.2}>
                        <EducationCard education={edu} />
                    </AnimatedCard>
                ))}
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-16">
                <SectionTitle>
                    My <GradientText>Projects</GradientText>
                </SectionTitle>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <AnimatedCard key={index} delay={index * 0.15}>
                            <ProjectCard project={project} />
                        </AnimatedCard>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16">
                <SectionTitle>
                    Contact <GradientText>Me</GradientText>
                </SectionTitle>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <p className="text-gray-300 text-lg mb-4">
                            Feel free to reach out to me for any questions or opportunities.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-gray-400">
                                <Mail className="w-5 h-5" />
                                <span className="text-gray-300">
                                    <a href="mailto:contact@apsinghdev.in" className="hover:text-white transition-colors">
                                        contact@apsinghdev.in
                                    </a>
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <Phone className="w-5 h-5" />
                                <span className="text-gray-300">+91 9453915397</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <MapPin className="w-5 h-5" />
                                <span className="text-gray-300">Lucknow, India</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-gray-300 block">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-gray-300 block">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-gray-300 block">Message</label>
                                <textarea
                                    id="message"
                                    placeholder="Your Message"
                                    rows={4}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/50 resize-none"
                                ></textarea>
                            </div>
                            <Button
                                type="submit"
                                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-md hover:from-purple-600 hover:to-pink-600 transition-colors"
                            >
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    </main>
);