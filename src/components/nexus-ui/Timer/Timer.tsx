"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const arial = localFont({
  src: "../../../../public/fonts/Arial-BoldMT.woff2",
  display: "swap",
});

const aria = localFont({
  src: "../../../../public/fonts/AriaPro-Regular.woff2",
  display: "swap",
});

interface TimerProps {
  targetDate?: string | Date | number;
  separator?: ":" | "•" | "label";
  className?: string;
  style?: "marque" | "normal";
  font?: "normal" | "aria" | "arial";
}

const Timer: React.FC<TimerProps> = ({
  targetDate,
  className,
  font = "aria",
  style = "marque",
  separator = ":",
}) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: string;
    minutes: string;
    seconds: string;
    milliseconds: string;
    status: string;
  }>({
    days: 0,
    hours: "00",
    minutes: "00",
    seconds: "00",
    milliseconds: "000",
    status: "",
  });

  useEffect(() => {
    if (!targetDate) {
      setTimeLeft((prev) => ({ ...prev, status: "Date non définie" }));
      return;
    }

    const dateB = new Date(targetDate);

    if (isNaN(dateB.getTime())) {
      setTimeLeft((prev) => ({ ...prev, status: "Date invalide" }));
      return;
    }

    const interval = setInterval(() => {
      const now = new Date();
      const diffInMs = Math.max(0, dateB.getTime() - now.getTime());

      if (diffInMs <= 0) {
        setTimeLeft((prev) => ({ ...prev, status: "Terminé!" }));
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);
      const milliseconds = Math.floor(diffInMs % 1000);

      setTimeLeft({
        days,
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
        milliseconds: milliseconds.toString().padStart(3, "0"),
        status: "",
      });
    }, 10);

    return () => clearInterval(interval);
  }, [targetDate]);

  const Separator = () => {
    if (separator !== "label") {
      return (
        <span className="text-7xl scr_2_0:text-[5rem] scr_3:text-[3rem] scr_4:text-[2rem]">
          {separator}
        </span>
      );
    }
  };

  const timeDisplay = {
    days: {
      value: timeLeft.days,
      show: timeLeft.days > 0,
    },
    hours: {
      value: Number(timeLeft.hours),
      show: timeLeft.days > 0 || Number(timeLeft.hours) > 0,
    },
    minutes: {
      value: Number(timeLeft.minutes),
      show:
        timeLeft.days > 0 ||
        Number(timeLeft.hours) > 0 ||
        Number(timeLeft.minutes) > 0,
    },
    seconds: {
      value: Number(timeLeft.seconds),
      show:
        timeLeft.days > 0 ||
        Number(timeLeft.hours) > 0 ||
        Number(timeLeft.minutes) > 0 ||
        Number(timeLeft.seconds) > 0,
    },
  };

  return (
    <div
      className={cn(
        " text-white flex flex-col justify-center items-center scr_2_:items-start text-[7.5rem] scr_0:text-[6.5rem] scr_2:text-[5rem] scr_4:text-[5rem] scr_5:text-[4rem] scr_5_1:text-[3.5rem] select-none leading-loose",
        className
      )}
      style={{
        fontFamily: `${font === "aria" ? aria.style.fontFamily : font === "arial" && arial.style.fontFamily}`,
        fontWeight: `${font === "aria" ? aria.style.fontWeight : font === "arial" && arial.style.fontWeight}`,
        fontStyle: `${font === "aria" ? aria.style.fontStyle : font === "arial" && arial.style.fontStyle}`,
      }}
    >
      {timeLeft.status ? (
        timeLeft.status
      ) : (
        <>
          {timeDisplay.days.show && (
            <>
              <div className="pr-10 scr_2_:pr-0 flex items-center scr_2:mb-10 scr_2_:mb-5 px-2">
                <div className="min-w-[11rem] scr_2:min-w-[9rem] scr_5:min-w-[7rem] scr_5:max-h-[7rem] scr_5_1:min-w-[6rem] scr_5_1:max-h-[6rem] bg-white text-black rounded px-2 mr-2 max-h-[10rem] flex justify-center items-center">
                  <span>{timeLeft.days}</span>
                </div>
                J
              </div>
            </>
          )}
          <div className="flex justify-center items-center px-2 py-0.5 rounded-md text-center scr_2_:flex-col scr_2_:gap-5  scr_2_:items-start scr_2_:space-x-0 space-x-2 ">
            {timeDisplay.hours.show && (
              <>
                {style === "normal" ? (
                  <>
                    <div
                      className={`inline-block min-w-[2ch] ${separator === "label" ? "pr-10 scr_2_:pr-0" : ""}`}
                    >
                      {timeLeft.hours}
                      {separator === "label" && "h"}{" "}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="pr-10 scr_2_:pr-0 flex items-center">
                      <div className="w-full min-w-[11rem] scr_2:min-w-[9rem] scr_5:min-w-[7rem] scr_5:max-h-[7rem] scr_5_1:min-w-[6rem] scr_5_1:max-h-[6rem] bg-white text-black rounded px-2 mr-2 max-h-[10rem] flex justify-center items-center">
                        <span>{timeLeft.hours}</span>
                      </div>
                      {separator === "label" && "h"}
                    </div>
                  </>
                )}
                <Separator />
              </>
            )}
            {timeDisplay.minutes.show && (
              <>
                {style === "normal" ? (
                  <>
                    <span
                      className={`inline-block min-w-[2ch] ${separator === "label" ? "pr-10 scr_2_:pr-0" : ""}`}
                    >
                      {timeLeft.minutes}
                      {separator === "label" && "min"}
                    </span>
                  </>
                ) : (
                  <>
                    <div className="pr-10 scr_2_:pr-0 flex items-center">
                      <div className="w-full min-w-[11rem] scr_2:min-w-[9rem] scr_5:min-w-[7rem] scr_5:max-h-[7rem] scr_5_1:min-w-[6rem] scr_5_1:max-h-[6rem] bg-white text-black rounded px-2 mr-2 max-h-[10rem] flex justify-center items-center">
                        <span>{timeLeft.minutes}</span>
                      </div>
                      {separator === "label" && "min"}
                    </div>
                  </>
                )}
                <Separator />
              </>
            )}
            {timeDisplay.seconds.show && (
              <>
                {style === "normal" ? (
                  <>
                    <span
                      className={`inline-block min-w-[2ch] ${separator === "label" ? "pr-10 scr_2_:pr-0" : ""}`}
                    >
                      {timeLeft.seconds}
                      {separator === "label" && "sec"}
                    </span>
                  </>
                ) : (
                  <>
                    <div className="pr-10 scr_2_:pr-0 flex items-center">
                      <div className="w-full min-w-[11rem] scr_2:min-w-[9rem] scr_5:min-w-[7rem] scr_5:max-h-[7rem] scr_5_1:min-w-[6rem] scr_5_1:max-h-[6rem] bg-white text-black rounded px-2 mr-2 max-h-[10rem] flex justify-center items-center">
                        <span>{timeLeft.seconds}</span>
                      </div>
                      {separator === "label" && "sec"}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Timer;
