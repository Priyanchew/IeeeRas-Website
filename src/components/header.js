    import Link from "next/link";
import { RocketIcon } from "lucide-react";

export default function Header() {
    return (
        <header className="px-4 lg:px-6 h-14 mx-1 mt-1 flex items-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <Link className="flex items-center justify-center" href="#">
                <RocketIcon className="h-6 w-6" />
                <span className="sr-only">IEEE RAS</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
                    Services
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#events">
                    Events
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
                    Projects
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#team">
                    Team
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="#faq">
                    FAQ
                </Link>
            </nav>
        </header>
    );
}
