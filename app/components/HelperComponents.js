import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, BookOpen, Zap, ChevronRight } from 'react-feather';

export const GradientText = ({ children, className }) => (
    <span className={`bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 ${className}`}>
        {children}
    </span>
);

export const SectionTitle = ({ children, className }) => (
    <h2 className={`text-4xl font-bold text-white mb-8 relative ${className}`}>
        {children}
        <div className="absolute bottom-[-10px] left-0 w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full" />
    </h2>
);

// This component is used to animate the card on scroll
export const AnimatedCard = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
    >
        {children}
    </motion.div>
);
//  This component is used to animate the card on scroll
export const SkillBar = ({ skill, level }) => (
    <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <Code className="w-4 h-4" /> {skill}
            </span>
            <span className="text-sm font-medium text-gray-300">{level}%</span>
        </div>
        <Progress value={level} className="h-2 rounded-full" />
    </div>
);

export const ExperienceCard = ({ experience }) => (
    <Card className="mb-6 p-6">
        <CardHeader>
            <CardTitle className="flex items-center gap-2"><Briefcase className="w-6 h-6" />{experience.title}</CardTitle>
            <CardDescription>
                {experience.company} | {experience.dates}
            </CardDescription>
        </CardHeader>
        <CardContent>
            <ul className="list-disc list-inside space-y-2 mt-4">
                {experience.description.map((desc, index) => (
                    <li key={index} className="text-gray-300">{desc}</li>
                ))}
            </ul>
        </CardContent>
    </Card>
);

export const EducationCard = ({ education }) => (
    <Card className="mb-6 p-6">
        <CardHeader>
            <CardTitle className="flex items-center gap-2"><BookOpen className="w-6 h-6" />{education.degree}</CardTitle>
            <CardDescription>
                {education.institution} | {education.dates}
            </CardDescription>
        </CardHeader>
    </Card>
);

export const ProjectCard = ({ project }) => (
    <Card className="mb-8 p-6 hover:shadow-lg transition-shadow duration-300">
        {project.imageUrl && (
            <div className="relative overflow-hidden mb-4 rounded-md">
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-auto transition-transform duration-500 hover:scale-105 rounded-md"
                />
            </div>
        )}
        <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="mb-4">
                <span className="text-sm font-medium text-gray-300 flex items-center gap-1"><Zap className="w-4 h-4"/>Technologies Used:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
            >
                View Project <ChevronRight className="w-4 h-4" />
            </a>
        </CardContent>
    </Card>
);

export const Button = ({ children, className, type, ...props }) => {
    const baseClasses = "inline-flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600";
    const classes = `${baseClasses} ${className}`;
    return (
        <button type={type || 'button'} className={classes} {...props}>
            {children}
        </button>
    );
};

export const Card = ({ children, className, ...props }) => {
    const classes = `rounded-xl bg-white/5 border border-white/10 backdrop-blur-md ${className}`;
    return <div className={classes} {...props}>{children}</div>;
};

export const CardHeader = ({ children, className, ...props }) => {
    const classes = `${className}`;
    return <div className={classes} {...props}>{children}</div>;
};

export const CardTitle = ({ children, className, ...props }) => {
    const classes = `text-xl font-semibold text-white ${className}`;
    return <div className={classes} {...props}>{children}</div>;
};

export const CardDescription = ({ children, className, ...props }) => {
    const classes = `text-sm text-gray-400 mt-1 ${className}`;
    return <div className={classes} {...props}>{children}</div>;
};

export const CardContent = ({ children, className, ...props }) => {
    const classes = `mt-4 ${className}`;
    return <div className={classes} {...props}>{children}</div>;
};

export const Badge = ({ children, className, variant, ...props }) => {
    let baseClasses = "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold";
    if (variant === "secondary") {
        baseClasses += " bg-gray-100 text-gray-800";
    } else {
        baseClasses += " bg-gray-800 text-gray-100";
    }
    const classes = `${baseClasses} ${className}`;
    return <span className={classes} {...props}>{children}</span>;
};

export const Progress = ({ value, className, ...props }) => {
    const classes = `w-full bg-gray-700 rounded-full h-2.5 ${className}`;
    const valueClasses = "bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full";
    return (
        <div className={classes} {...props}>
            <div className={valueClasses} style={{ width: `${value}%` }}></div>
        </div>
    );
};

export const cn = (...classes) => classes.filter(Boolean).join(' ');

