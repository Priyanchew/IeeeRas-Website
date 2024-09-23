import React from 'react';
import ShineBorder from "@/components/magicui/shine-border";
import TextRevealByWord from "@/components/magicui/text-reveal";

export default function AboutSection() {
    return (
        <ShineBorder
            className="relative flex h-auto w-full mb-8 max-w-[90%] xl:max-w-[80%] mx-auto flex-col items-center justify-center overflow-hidden rounded-2xl border bg-background shadow-xl"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            borderRadius={16}
            borderWidth={2}
            duration={10}
        >
            <div className="w-full p-4 space-y-4 mt-3 overflow-hidden">
                {/* Unified About Section */}
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full">
                    {/* Left Side */}
                    <div className="flex flex-col items-center md:items-end text-center md:text-right w-full md:w-1/3">
                        <h2 className="text-4xl font-bold leading-tight">About</h2>
                        <h2 className="text-4xl font-bold leading-tight">IEEE RAS</h2>
                        <h2 className="text-4xl font-bold leading-tight">MUJ</h2>
                    </div>

                    {/* Divider */}
                    <div className="border-l border-white h-24 mx-2 hidden md:block"></div>

                    {/* Right Side */}
                    <div className="text-center md:text-left w-full md:w-2/3">
                        <p className="text-lg">
                            The IEEE Robotics and Automation Society aims to advance the theory and practice of robotics and automation engineering, maintaining high professional standards among its members.
                        </p>
                    </div>
                </div>

                {/* Center Section with Smaller Heading */}
                <div className="text-center">
                    <TextRevealByWord className="text-xl font-bold text-white" text="Advancing Technology for Humanity"/>
                </div>

                {/* Mission Statement Section */}
                <div className="flex flex-col md:flex-row items-center space-y-2 mt-3 md:space-y-0 md:space-x-4 w-full">
                    <div className="flex flex-col items-center md:items-end text-center md:text-right w-full md:w-1/3">
                        <h2 className="text-4xl font-bold leading-tight">Our</h2>
                        <h2 className="text-4xl font-bold leading-tight">Mission</h2>
                    </div>

                    {/* Divider */}
                    <div className="border-l border-white h-24 mx-2 hidden md:block"></div>

                    <div className="text-center md:text-left w-full md:w-2/3">
                        <p className="text-lg">
                            To foster innovation, creativity, and collaboration in robotics and automation. We provide a platform for students to explore cutting-edge technologies and develop practical skills.
                        </p>
                    </div>
                </div>
            </div>
        </ShineBorder>
    );
}