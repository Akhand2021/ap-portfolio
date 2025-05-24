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

import { projects, skills, experience, education, metaData } from './data';

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
                        <div className="animate-float">
                            <img
                                src={ProfilePic.src} 
                                alt="Akhand Pratap Singh"
                                className="rounded-full w-60 h-60 sm:w-60 sm:h-60 md:w-80 md:h-80 border-4 border-purple-500/30 shadow-lg hover:scale-105 transition-transform duration-300"
                            />
                        </div>
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
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div>
                        <p className="text-gray-300 text-lg mb-4">
                            Feel free to reach out to me for any questions or opportunities.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-gray-400">
                                <Mail className="w-5 h-5" />
                                <span className="text-gray-300">
                                    <a href={`mailto:${metaData.email}`} className="hover:text-white transition-colors">
                                        {metaData.email}
                                    </a>
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <Phone className="w-5 h-5" />
                                <span className="text-gray-300">{metaData.phone}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <MapPin className="w-5 h-5" />
                                <span className="text-gray-300">{metaData.location}</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 flex justify-center items-center space-x-4">
                        <Button asChild>
                            <a href={metaData.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                GitHub
                                <Github className="w-5 h-5" />
                            </a>
                        </Button>
                        <Button asChild>
                            <a href={metaData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                LinkedIn
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </Button>
                        <Button asChild>
                            <a href={`mailto:${metaData.email}`} className="flex items-center gap-2">
                                Email
                                <Mail className="w-5 h-5" />
                            </a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    </main>
);