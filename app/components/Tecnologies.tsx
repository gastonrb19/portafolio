'use client';

import Tecnology from "./Tecnology"
import { useState } from "react";

interface tecnologies {
    id: number;
    name: string;
}

interface tecnologiesProps {
    tecnologies: tecnologies[];
    selected: number;
    setSelected: (id: number) => void;
}

export default function Tecnologies({ tecnologies, selected, setSelected }: tecnologiesProps) {
    return (
        <ul className="text-center">
            <li className="font-bold text-center">Tecnologías</li>
            {
                tecnologies.map((tec) => <Tecnology name={tec.name} id={tec.id} key={tec.id} selected={selected} setSelected={setSelected} />)
            }
        </ul>

    )
}
