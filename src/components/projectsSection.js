import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Carousel from "../components/Carousel";
export default function ProjectsSection() {
    return (
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Our Projects</h2>
                <Carousel/>
            </div>
        </section>
    );
}
