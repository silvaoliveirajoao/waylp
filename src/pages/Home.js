import Header from "./Header";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";
const mensagem = encodeURIComponent("Olá, estava no site da Way e queria saber mais sobre os serviços oferecidos.");
const backGround = "//home_xl.jpg"

export default function Home() {
    return (
        <main className="container h-[100vh] flex flex-col items-center gap-2 relative lg:w-screen lg:max-h-screen xl:w-screen">
            <Header />
            <Image 
                className="absolute top-0 left-0 z-0 lg:hidden"
                src="/home.jpg"
                alt="home"
                fill
            />
            <div className="hidden overflow-x-hidden bg-sky-800 lg:block lg:absolute lg:w-screen lg:h-screen z-0">
                <div className="relative w-full h-full">
                    <Image 
                        src="/home_xl.jpg"
                        alt=""
                        fill
                    />
                </div>
            </div>
            <div className="w-full flex items-start p-4 z-10 lg:justify-end lg:items-end lg:w-full">
                <p className="font-normal text-4xl text-white sm:text-5xl mt-4 lg:mt-48 lg:text-right">
                    Construímos momentos,<br></br> sensações e experiências inesquecíveis.
                </p>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-end gap-4 p-4 z-10">    
                <div className="bg-gray-300 h-px w-full"></div>
                <div>
                    <p className="text-white font-normal text-xs sm:text-base lg:text-xl lg:text-center">
                        Bem vindo a Way Turismo, aqui você encontra os melhores pacotes e soluções para curtir a sua viagem.<br></br> Nós te oferecemos uma experiência única e inesquecível, com uma equipe altamente qualificada e comprometida em garantir que sua viagem seja perfeita.
                    </p>
                    <div className="w-full flex justify-center items-center gap-2 mt-4">
                        <a href="#aboutUs">
                            <button className="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-lg border-none text-white font-normal cursor-pointer lg:text-xl">Quero saber mais! <GoArrowUpRight size={16} /></button>
                        </a>
                        <a 
                            href={`https://wa.me/5547991480037?text=${mensagem}`}
                            target="_blank"
                            rel="noopener noreferrer">
                            <button 
                                className="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-lg border-none text-white font-normal cursor-pointer lg:text-xl">
                                Entrar em contato <GoArrowUpRight size={16} />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}