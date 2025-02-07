import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
    const getStoredTime = () => {
        const storedTime = localStorage.getItem("countdownTime");
        if (storedTime) {
            try {
                return JSON.parse(storedTime);
            } catch (e) {
                console.error("Error parsing stored countdownTime:", e);
            }
        }
        return { days: 1, hours: 10, minutes: 24, seconds: 59 };
    };

    const [time, setTime] = useState(getStoredTime);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevTime) => {
                let { days, hours, minutes, seconds } = prevTime;

                if (seconds > 0) {
                    seconds -= 1;
                } else {
                    seconds = 59;
                    if (minutes > 0) {
                        minutes -= 1;
                    } else {
                        minutes = 59;
                        if (hours > 0) {
                            hours -= 1;
                        } else {
                            hours = 23;
                            if (days > 0) days -= 1;
                        }
                    }
                }

                const newTime = { days, hours, minutes, seconds };
                localStorage.setItem("countdownTime", JSON.stringify(newTime));
                return newTime;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex justify-center items-center mt-10 px-4">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 md:gap-8 text-center auto-cols-max text-white">
                {["days", "hours", "minutes", "seconds"].map((unit, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-3 sm:p-4 md:p-5 bg-neutral rounded-lg shadow-lg text-neutral-content"
                    >
                        <span className="countdown font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                            <span style={{ "--value": time[unit] }}></span>
                        </span>
                        <div className="text-base sm:text-lg md:text-xl capitalize">{unit}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CountdownTimer;
