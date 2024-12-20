// Next
import Image from "next/image";

// Componentes
import { Heading } from "@/components/typrography/Heading";

export function ListMenu({ image, children }) {
    return (
        <div className="w-full group cursor-pointer">
            <div className="relative w-full py-2 border-b border-white/20 group-hover:border-white transition-all duration-300 ease">
                <Heading as="h3" size="menu" color="white" className="group-hover:translate-x-16 transition-transform duration-300 ease">
                    {children}
                </Heading>
                <div className="absolute bottom-5 right-16 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out animate-wiggle">
                    <Image src={`${image}`} width={200} height={150} alt="Icon"/>
                </div>
            </div>
        </div>
    );
}
