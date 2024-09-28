import React from 'react';
import { useTheme } from "next-themes";
import Image from 'next/image';
import { Instagram, Linkedin } from 'lucide-react';
import { MagicCard } from "@/components/magicui/magic-card";
import BlurFade from "@/components/magicui/blur-fade";

const teamMembers = [
    { name: "Ojusav Agarwal", image: "/test1.jpg", role: "Advisory" },
    { name: "Prashasti Rai", image: "/test1.jpg", role: "Chairperson" },
    { name: "Pratyush Dube", image: "/test2.jpg", role: "Vice Chairperson" },
    { name: "Priyanshu Choudhary", image: "/test3.jpg", role: "General Secretary" },
    { name: "Shrivatsa Trivedi", image: "/test4.jpg", role: "Managing Director" },
    { name: "Aiyan Shamsed", image: "/test1.jpg", role: "Treasurer" },
    { name: "Jaskaran Singh Taneja", image: "/test2.jpg", role: "Technical Secretary" },
    { name: "Akash Mukherjee", image: "/test3.jpg", role: "Human Resources Head" },
];

const TeamMember = ({ member, theme }) => (
    <MagicCard
        className="cursor-pointer relative overflow-hidden group transition-all duration-300 ease-in-out transform hover:scale-105"
        gradientColor={theme === "dark" ? "#343434" : "#D9D9D955"}
        style={{ width: '250px', height: '350px' }}
    >
        <Image
            src={member.image}
            alt={member.name}
            width={250}
            height={350}
            className="object-cover w-full h-full" // Make image cover the entire card area
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
            <h3 className="text-white text-xl font-bold mb-2">{member.name}</h3>
            <p className="text-gray-300 text-lg mb-4">{member.role}</p>
            <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                    <Instagram size={24} />
                </a>
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                    <Linkedin size={24} />
                </a>
            </div>
        </div>
    </MagicCard>
);

export default function TeamSection() {
    const { theme } = useTheme();

    return (
        <section id="team" className="py-16 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-12 bg-clip-text">Our Amazing Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
                    {teamMembers.map((member, index) => (
                            <TeamMember key={index} member={member} theme={theme} />
                    ))}
                </div>
            </div>
        </section>
    );
}
