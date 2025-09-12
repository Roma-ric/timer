'use client';

import { useEffect, useState } from "react";
import DateTimePicker from "../components/date-time-picker";
import { CaseSensitive, Palette, X } from "lucide-react";
import Timer from "@/components/nexus-ui/Timer";

export default function Home() {
    const [isRunning, setIsRunning] = useState<boolean | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [style, setStyle] = useState<'marque' | 'normal'>('marque');
    const [font, setFont] = useState<'normal' | 'aria' | 'arial'>('aria');

    useEffect(() => {
        const isRunningStored = localStorage.getItem("is_running") === 'true';
        const storedDate = localStorage.getItem("selected_date");
        const storedStyle = localStorage.getItem("timer_style") as 'marque' | 'normal';
        const storedFont = localStorage.getItem("timer_font") as 'normal' | 'aria' | 'arial';

        if (storedStyle && (storedStyle === 'marque' || storedStyle === 'normal')) {
            setStyle(storedStyle);
        }

        if (storedFont && ['normal', 'aria', 'arial'].includes(storedFont)) {
            setFont(storedFont);
        }

        if (isRunningStored && storedDate) {
            setSelectedDate(new Date(storedDate));
            setIsRunning(true);
        } else {
            setIsRunning(false);
        }
    }, []);

    const handleSelectDate = () => {
        const selected_date = localStorage.getItem("selected_date");
        if (!selected_date) return;

        const date = new Date(selected_date);
        setSelectedDate(date);
        localStorage.setItem("is_running", 'true');
        setIsRunning(true);
    };

    const handleReset = () => {
        setIsRunning(false);
        setSelectedDate(null);
        localStorage.setItem("is_running", 'false');
        localStorage.removeItem("selected_date");
    };

    const handleStyleChange = () => {
        const newStyle = style === 'normal' ? 'marque' : 'normal';
        setStyle(newStyle);
        localStorage.setItem("timer_style", newStyle);
    };

    const handleFontChange = () => {
        const fonts: ('normal' | 'aria' | 'arial')[] = ['normal', 'aria', 'arial'];
        const currentIndex = fonts.indexOf(font);
        const newFont = fonts[(currentIndex + 1) % fonts.length];
        setFont(newFont);
        localStorage.setItem("timer_font", newFont);
    };

    if (isRunning === null) {
        return null;
    }

    return (
        <div className={`relative flex flex-col items-center justify-center min-h-screen bg-black`}
        >
            {!isRunning ? (
                <div className="text-2xl font-mono font-bold w-full max-w-sm scr_4:px-7">
                    <DateTimePicker onSelectDate={handleSelectDate} />
                </div>
            ) : (
                <div className="flex flex-col w-[80%] items-center justify-center">
                    <Timer
                        targetDate={selectedDate!}
                        separator='label'
                        style={style}
                        font={font}
                    />
                </div>
            )}

            {isRunning &&
                <div className="absolute right-4 top-3 flex flex-col space-y-3 justify-center items-center mt-4">
                    <button
                        className="w-12 h-12 rounded-full flex justify-center items-center bg-white text-black"
                        onClick={handleReset}
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <button
                        className="w-12 h-12 rounded-full flex justify-center items-center bg-white text-black"
                        onClick={handleStyleChange}
                    >
                        <Palette className="w-6 h-6" />
                    </button>

                    <button
                        className="w-12 h-12 rounded-full flex justify-center items-center bg-white text-black"
                        onClick={handleFontChange}
                    >
                        <CaseSensitive className="w-7 h-7" />
                    </button>
                    
                </div>
            }
        </div>
    );
}