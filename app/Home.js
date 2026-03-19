import React from "react";
import {
    Linkedin,
    Github,
    Mail,
    Phone,
    MapPin,
} from 'lucide-react';

import {
    GradientText,
    SectionTitle,
    AnimatedCard,
    ProjectCard,
    Button,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from './components/HelperComponents';

import { projects, services, whyChooseMe, processSteps, metaData } from './data';

import ProfilePic from './assets/akhand.jpg'
import Image from "next/image";

const EXPERIENCE_START_YEAR = 2022;

export const Home = () => {
    const yearsOfExperience = Math.max(1, new Date().getFullYear() - EXPERIENCE_START_YEAR);
    const whatsappLink = `https://wa.me/${metaData.whatsapp.replace(/\D/g, '')}`;

    return (
        <main className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <section id="about" className="py-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <SectionTitle>
                                Backend Systems That <GradientText>Keep Your Business Moving</GradientText>
                            </SectionTitle>
                            <p className="text-gray-300 text-lg mb-6">
                                I help startup founders and small business teams ship reliable backend systems,
                                APIs, and payment integrations that reduce downtime and speed up delivery.
                            </p>
                            <p className="text-gray-300 text-lg mb-6">
                                Backend Developer with {yearsOfExperience}+ years of production experience using
                                PHP, Laravel, Node.js, React, and AWS across LMS platforms, booking systems,
                                backend dashboards, and business APIs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Button>
                                    <a href="#contact" className="text-white">Hire Me For Backend Work</a>
                                </Button>
                                <Button>
                                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-white">
                                        Discuss Your Project
                                    </a>
                                </Button>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="animate-float">
                                <Image
                                    src={ProfilePic}
                                    alt="Akhand Pratap Singh"
                                    width={320}
                                    height={320}
                                    className="rounded-full w-60 h-60 sm:w-60 sm:h-60 md:w-80 md:h-80 border-4 border-purple-500/30 shadow-lg hover:scale-105 transition-transform duration-300 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-16">
                    <SectionTitle>
                        Services That <GradientText>Solve Real Backend Problems</GradientText>
                    </SectionTitle>
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <AnimatedCard key={index} delay={index * 0.1}>
                                <Card className="p-6 h-full">
                                    <CardHeader>
                                        <CardTitle>{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-300 mb-3">
                                            <span className="font-semibold text-white">Problem:</span> {service.problem}
                                        </p>
                                        <p className="text-gray-300 mb-3">
                                            <span className="font-semibold text-white">Solution:</span> {service.solution}
                                        </p>
                                        <p className="text-gray-300">
                                            <span className="font-semibold text-white">Outcome:</span> {service.result}
                                        </p>
                                    </CardContent>
                                </Card>
                            </AnimatedCard>
                        ))}
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-16">
                    <SectionTitle>
                        Results-Focused <GradientText>Project Work</GradientText>
                    </SectionTitle>
                    <p className="text-gray-300 text-lg mb-8 max-w-3xl">
                        Each project below was built to solve a business bottleneck, improve stability,
                        and make operations faster for real teams.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <AnimatedCard key={index} delay={index * 0.15} className="h-full">
                                <ProjectCard project={project} />
                            </AnimatedCard>
                        ))}
                    </div>
                </section>

                {/* Why Choose Me Section */}
                <section id="why-choose-me" className="py-16">
                    <SectionTitle>
                        Why Clients <GradientText>Choose Me</GradientText>
                    </SectionTitle>
                    <div className="grid md:grid-cols-2 gap-8">
                        {whyChooseMe.map((point, index) => (
                            <AnimatedCard key={index} delay={index * 0.1}>
                                <Card className="p-6 h-full">
                                    <CardHeader>
                                        <CardTitle>{point.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-gray-300">{point.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            </AnimatedCard>
                        ))}
                    </div>
                </section>

                {/* Process Section */}
                <section id="process" className="py-16">
                    <SectionTitle>
                        Simple <GradientText>Execution Process</GradientText>
                    </SectionTitle>
                    <div className="grid md:grid-cols-2 gap-8">
                        {processSteps.map((step, index) => (
                            <AnimatedCard key={index} delay={index * 0.1}>
                                <Card className="p-6 h-full">
                                    <CardHeader>
                                        <CardTitle>{`${index + 1}. ${step.title}`}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-gray-300">{step.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            </AnimatedCard>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section id="cta" className="py-16">
                    <Card className="p-8 text-center">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Need Help With Your Backend? <GradientText>Let&apos;s Fix It Quickly.</GradientText>
                        </h3>
                        <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
                            If your API is failing, payment flow is unstable, or your backend needs cleanup,
                            I can help you resolve it fast and ship confidently.
                        </p>
                        <Button>
                            <a href="#contact" className="text-white">Start A Project Discussion</a>
                        </Button>
                    </Card>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-16">
                    <SectionTitle>
                        Contact <GradientText>Me</GradientText>
                    </SectionTitle>
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        <div>
                            <p className="text-gray-300 text-lg mb-4">
                                Tell me what is blocking your product, and I will reply with a clear next step.
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
                                    <span className="text-gray-300">
                                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                            WhatsApp: {metaData.phone}
                                        </a>
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <MapPin className="w-5 h-5" />
                                    <span className="text-gray-300">{metaData.location}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-3 sm:space-y-0">
                            <Button className="w-full sm:w-auto">
                                <a href={`mailto:${metaData.email}`} className="flex items-center justify-center gap-2 text-white">
                                    Email
                                    <Mail className="w-5 h-5" />
                                </a>
                            </Button>
                            <Button className="w-full sm:w-auto">
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-white">
                                    WhatsApp
                                    <Phone className="w-5 h-5" />
                                </a>
                            </Button>
                            <Button className="w-full sm:w-auto">
                                <a href={metaData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-white">
                                    LinkedIn
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </Button>
                            <Button className="w-full sm:w-auto">
                                <a href={metaData.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-white">
                                    GitHub
                                    <Github className="w-5 h-5" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};