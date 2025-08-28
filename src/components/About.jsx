import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Code, Briefcase, User } from "lucide-react";
import developer from "/Update-amico.svg"

const skills = {
    frontend: [
        "React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS",
        "Zustand", "REST APIs", "Responsive Design"
    ],

    tools: [
        "Git", "Vite", "npm/yarn", "Netlify", "Vercel", "GitHub Actions",
        "VS Code", "Chrome DevTools"
    ]
};

const experiences = [
    {
        role: "Junior Frontend Developer",
        company: "Laara Group Limited",
        period: "June 2024 - September 2024",
        description: "Contributed to the development of responsive web pages using React and Tailwind. Collaborated with the front-end team to implement UI components based on design specifications and ensured mobile responsiveness."
    },

    // {
    //     role: "Web Developer",
    //     company: "Startup Hub",
    //     period: "2018 - 2020",
    //     description: "Built interactive web applications with JavaScript and CSS frameworks. Collaborated with designers to implement pixel-perfect interfaces."
    // }
];

const education = [
    {
        degree: "Bachelor of Science in Computer Science",
        institution: "St. Paul's University",
        period: "2019 - 2023",
        description: "Studied core computer science subjects including programming, databases, and software engineering."
    }


];

export const About = () => {
    const [tab, setTab] = useState("skills");

    return (
        <section id="about" className="section-padding">
            <div className="max-w-5xl mx-auto">
                <div className="mb-16 text-center">
                    <span className="text-primary text-sm uppercase tracking-wider font-medium">About Me</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">My Background & Expertise</h2>
                    <div className="h-1 w-20 gradient-bg mx-auto mt-4"></div>
                    <div className="dash mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* About Illustration */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <div className="glass aspect-square rounded-2xl overflow-hidden relative lg:sticky lg:top-24">
                            <img
                                src={developer}
                                alt="Developer Illustration"
                                className="w-full h-full object-contain p-4 bg-background"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        <div data-aos="fade-up" className="mb-10">
                            <p className="text-muted-foreground">
                                I'm a passionate software developer specializing in JavaScript and React. I love transforming complex challenges into elegant, user-friendly solutions. With a collaborative approach and attention to detail,
                                I work closely with clients to deliver innovative, high-quality applications. Always eager to learn and adopt new technologies, I'm ready to bring your ideas to life with exceptional results.
                            </p>
                        </div>

                        <Tabs value={tab} onValueChange={setTab} className="w-full">
                            <TabsList className="grid w-full grid-cols-3 mb-8">
                                <TabsTrigger value="skills" className="data-[state=active]:bg-[#A78BFA] data-[state=active]:text-white transition-colors">
                                    <Code className="w-4 h-4 mr-2" />
                                    <span className="hidden md:inline">Skills</span>
                                </TabsTrigger>
                                <TabsTrigger value="experience" className="data-[state=active]:bg-[#A78BFA] data-[state=active]:text-white transition-colors">
                                    <Briefcase className="w-4 h-4 mr-2" />
                                    <span className="hidden md:inline">Experience</span>
                                </TabsTrigger>
                                <TabsTrigger value="education" className="data-[state=active]:bg-[#A78BFA] data-[state=active]:text-white transition-colors">
                                    <User className="w-4 h-4 mr-2" />
                                    <span className="hidden md:inline">Education</span>
                                </TabsTrigger>
                            </TabsList>
                            
                            {/* Skills Tab */}
                            <TabsContent value="skills" className="mt-0">
                                <div className="mb-6">
                                    <h4 className="font-semibold mb-4 text-lg">Frontend Development</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.frontend.map(skill => (
                                            <Badge key={skill} variant="outline" className="skill-pill px-5 py-2">{skill}</Badge>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-4 text-lg">Tools & Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.tools.map(skill => (
                                            <Badge key={skill} variant="outline" className="skill-pill px-5 py-2">{skill}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>

                            {/* Experience Tab */}
                            <TabsContent value="experience" className="mt-0">
                                <div className="relative pl-8">
                                    <div className="timeline-line"></div>
                                    {experiences.map((exp, index) => (
                                        <div key={index} className="mb-8 relative">
                                            <div className="timeline-dot"></div>
                                            <div>
                                                <h4 className="text-lg font-semibold">{exp.role}</h4>
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-primary text-sm">{exp.company}</span>
                                                    <span className="text-xs text-muted-foreground">{exp.period}</span>
                                                </div>
                                                <p className="text-muted-foreground text-sm">{exp.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>

                            {/* Education Tab */}
                            <TabsContent value="education" className="mt-0">
                                <div className="relative pl-8">
                                    <div className="timeline-line"></div>
                                    {education.map((edu, index) => (
                                        <div key={index} className="mb-8 relative">
                                            <div className="timeline-dot"></div>
                                            <div>
                                                <h4 className="text-lg font-semibold">{edu.degree}</h4>
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-primary text-sm">{edu.institution}</span>
                                                    <span className="text-xs text-muted-foreground">{edu.period}</span>
                                                </div>
                                                <p className="text-muted-foreground text-sm">{edu.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};