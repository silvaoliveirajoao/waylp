import Image from "next/image"
import WhoAreUsCard from "@/components/WhoAreUsCard.js"
import { GiSelfLove } from "react-icons/gi";
import { RiRouteLine } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";
import { MdOutlineLoyalty } from "react-icons/md";

export default function WhoAreUs() {
    return (
        <div id="aboutUs" className="container mx-auto w-4/5 space-y-5 pt-10">
            <div className="w-full text-center space-y-5 pt-10">
                <h2 className="text-2xl font-bold text-gray-700">
                    Quem somos nós?
                </h2>
                <span className="text-xl text-gray-700">
                    Com mais de <span className="text-2xl text-cyan-400 font-medium">12 anos</span> de história, te convidamos a descobrir o mundo com a nossa<br></br> agência. Transformamos sonhos em realidade, uma viagem de cada vez.
                </span>
            </div>
            <h3 className="w-full text-bold text-center text-xl text-gray-700">
                Elevando sua aventura com a nossa agência.
            </h3>
            <div className="md:flex md:justify-center md:min-h-[700px] lg:justify-center lg:gap-2">
                <div className="w-full flex flex-col justify-center items-center gap-4 md:w-4/5 md:flex-row md:flex-wrap lg:flex-row lg:w-[52%]">
                        <WhoAreUsCard
                            n="01"
                            title="Somos apaixonadas por criar momentos inesquecíveis."
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit"
                            svg={
                            <GiSelfLove 
                                size={32}
                                color="#374151"
                            />
                            } 
                        /> 
                        <WhoAreUsCard
                            n="02"
                            title="Infinitos destinos, jeito único de transformar a sua experiência."
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit"
                            svg={
                                <RiRouteLine 
                                    size={32}
                                    color="#374151"  
                               />
                            }
                        /> 
                        <WhoAreUsCard
                            n="03"
                            title="Viaje com a tranquilidade de que nós estaremos sempre aqui."
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit"
                            svg={
                                <MdSecurity
                                    size={32}
                                    color="#374151"
                                />
                            }
                        /> 
                        <WhoAreUsCard
                            n="04"
                            title="Nós cuidamos de cada detalhe, especialmente para você."
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga adipisicing elit"
                            svg={
                                <MdOutlineLoyalty 
                                    size={32}
                                    color="#374151"   
                                />
                            }
                        /> 
                </div>
                <div className="hidden justify-center md:hidden lg:relative lg:block w-2/5">
                    <Image 
                        className="hidden md:hidden lg:block xl:block"
                        src="/who_are_us.jpg"
                        alt="Way turismo"
                        fill
                    />
                </div>
            </div>
        </div>
    )
}