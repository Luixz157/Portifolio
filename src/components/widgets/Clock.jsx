'use client'; // Marcar como client component

import { useEffect, useState } from "react";

export function Clock() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const formattedTime = now.toLocaleTimeString("en-GB", {
                timeZone: "America/Sao_Paulo",
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            });
            setTime(formattedTime + " GMT-3");
        };

        updateTime(); // Atualiza imediatamente
        const interval = setInterval(updateTime, 1000); // Atualiza a cada 1s

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar
    }, []);

    return <span className="text-white" >{time}</span>;
}