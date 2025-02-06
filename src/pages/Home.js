import Image from "next/image";

export default function Home() {
    return (
        <main className="container mx-auto h-[90vh] flex flex-col items-center justify-center gap-2">
            <div className="">
                <Image 
                    src="/logo_sem_escrita.png"
                    alt="Way Turismo Logo"
                    width={152}
                    height={152}
                />
            </div>
            <div className="text-center">
                <span className="font-bold text-3xl text">
                    Construindo momentos, sensações e experiências inesquecíveis.
                </span>
            </div>
            <div className="mt-10">
                <button className="w-36 h-12 rounded-[30em] text-[15px] font-inherit border-none relative overflow-hidden z-10 shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] hover:before:w-36 before:content-[''] before:w-0 before:h-12 before:rounded-[30em] before:absolute before:top-0 before:left-0 before:bg-gradient-to-r before:from-[#66c6c9] before:to-[#02838a] before:transition-all before:duration-500 before:ease-in-out before:block before:z-[-1]"><a href="#aboutus">Iniciar</a></button>
            </div>
        </main>
    )
}