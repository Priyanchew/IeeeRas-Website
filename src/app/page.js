"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import AboutSection from "@/components/aboutSection";
import ServicesSection from "@/components/servicesSection";
import ProjectsSection from "@/components/projectsSection";
import TeamSection from "@/components/teamSection";
import FAQSection from "@/components/faqSection";
import Testimonies from "@/components/testimony";
import BottomDock from "@/components/bottomDock";
import FloatDock from "@/components/floatDock";
import BlurFade from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";

export default function HomePage() {
    return (
        <div className="relative flex flex-col min-h-screen overflow-hidden bg-gradient-to-br">
            {/* Gradient Spots */}
            <div className="absolute inset-0 z-0 bg-no-repeat bg-cover pointer-events-none" style={{ backgroundImage: generateGradientSpots() }} />
            <div className="relative z-10 flex flex-col min-h-screen">
                <Header />
                <main className="flex-1">
                    <BlurFade key={1} delay={0.25 + 0.05} inView>
                        <HeroSection />
                    </BlurFade>
                    <FloatDock />
                    <BlurFade key={2} delay={0.25 + 0.25} inView>
                    <AboutSection />
                    </BlurFade>
                    <BlurFade key={3} delay={0.25 + 0.05} inView>
                    <ServicesSection />
                    </BlurFade>
                    <BlurFade key={4} delay={0.25 + 0.05} inView>
                    <ProjectsSection />
                    </BlurFade>
                    <BlurFade key={5} delay={0.25 + 0.05} inView>
                    <TeamSection />
                    </BlurFade>
                    <BlurFade key={6} delay={0.25 + 0.05} inView>
                    <Testimonies />
                    </BlurFade>
                    <BlurFade key={7} delay={0.25 + 0.05} inView>
                    <FAQSection />
                    </BlurFade>
                    <BlurFade key={8} delay={0.15 + 0.05} inView>
                    <BottomDock />
                    </BlurFade>
                </main>
                <Footer />
            </div>
        </div>
    );
}

// Function to generate random gradient spots
function generateGradientSpots() {
    const colors = [
        "#5F2167",
        "#862633"
    ];

    // Create a dispersed set of gradient spots
    const spots = Array.from({ length: 20 }, () => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 450 + 250; // Random size between 150px and 450px
        const posX = Math.random() * 100; // Random position percentage for x
        const posY = Math.random() * 100; // Random position percentage for y
        return `radial-gradient(circle at ${posX}% ${posY}%, ${color}, transparent ${size}px)`;
    });

    // Join all spots into a single CSS background-image property
    return spots.join(", ");
}
