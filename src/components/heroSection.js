import { Button } from "@/components/ui/button";
import OrbitingCircle from "@/components/orbitingCircles";
import HyperText from "@/components/magicui/hyper-text";
import GradientText from "@/components/ui/GradientText";

export default function HeroSection() {
    return (
        <section className="w-full py-8 md:py-16 lg:py-24 xl:py-32">
            <div className="container px-4 md:px-6 flex flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-center">
                {/* Left side: Text content */}
                <div className="flex flex-col items-center space-y-4 text-center lg:w-1/2">
                    <h1 className="pointer-events-none whitespace-pre-wrap bg-clip-text text-center text-7xl font-semibold leading-none mb-5">
                        Welcome to IEEE RAS MUJ
                    </h1>
                    <p className="text-lg text-secondary-foreground">
                        Robotics and Automation Society of Manipal University Jaipur. The IEEE Robotics and Automation Society (RAS) is a professional society of the IEEE that supports the development and the exchange of scientific knowledge in the fields of robotics and automation, including applied and theoretical issues.
                    </p>
                    <Button href="#about" variant="primary" size="lg">
                        Learn More
                    </Button>
                </div>
            </div>
        </section>
    );
}
