"use client"

import RetroGrid from "@/components/magicui/retro-grid";

export default function BottomDock() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <RetroGrid />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-9xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        IEEE RAS
      </span>
        </div>
    );
}
