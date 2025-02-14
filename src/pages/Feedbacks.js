import Report from "@/components/Report"
import { VscFeedback } from "react-icons/vsc";
import VideoLoop from "@/components/VideoLoop";
const mensagem = encodeURIComponent("Olá, estava no site da Way e queria saber mais sobre os serviços oferecidos.");

const Feedbacks = () => {
    return (
        <div id="feedbacks" className="container mx-auto my-6 px-4">
            <div className="flex flex-col w-full h-auto items-center">
                <VscFeedback 
                    size={32}
                    color="#374151"
                />
                <h2 className="font-semibold text-2xl text-cyan-400">
                    Feedbacks
                </h2>
                <h3 className="font-semibold text-2xl text-center text-gray-700">
                    O que os nossos passageiros falam
                </h3> 
            </div>
            <div className="flex w-full h-full gap-5 pt-5 justify-center">
                <div className="hidden lg:flex lg:justify-center lg:w-auto lg:auto">
                    <video 
                        className="hidden lg:block lg:h-[100vh] rounded-[32px]"  
                        autoPlay
                        loop 
                        muted 
                        playsInline
                    >
                        <source src="feedbacks_video.mp4" type="video/mp4" />
                        Seu navegador não suporta vídeos HTML5.
                    </video>
                </div>
                <div className="w-full max-h-screen gap-4 gap-y-8 flex flex-col items-center bg-slate-200 rounded-[32px] overflow-y-auto py-14 scrollbar-hide lg:h-[120vh] lg:w-2/5">
                        <div className="bg-branco w-full rounded-3xl flex justify-center">
                            <Report 
                                text="Achei toda a experiência maravilhosa, muito obrigado por terem feito parte de tudo... Cuidaram de cada detalhe, superaram todas as expectivativas!!! <3"
                                src="/fundo_verde"
                                name="Nome do Cliente"
                                destiny="Destino do cliente - Ano da viagem"
                                alt={'Nome do cliente'}
                            />
                        </div>
                        <div className="bg-branco w-full rounded-3xl flex justify-center">
                            <Report 
                                text="Achei toda a experiência maravilhosa, muito obrigado por terem feito parte de tudo... Cuidaram de cada detalhe, superaram todas as expectivativas!!! <3"
                                src="/fundo_verde.png"
                                name="Nome do Cliente"
                                destiny="Destino do cliente - Ano da viagem"
                                alt={'Nome do cliente'}
                            />  
                        </div>
                        <div className="bg-branco w-full rounded-3xl flex justify-center">
                            <Report 
                                text="Achei toda a experiência maravilhosa, muito obrigado por terem feito parte de tudo... Cuidaram de cada detalhe, superaram todas as expectivativas!!! <3"
                                name="Nome do Cliente"
                                destiny="Destino do cliente - Ano da viagem"
                                alt={'Nome do cliente'}
                            />  
                        </div>
                        <div className="bg-branco w-full rounded-3xl flex justify-center">
                            <Report 
                                text="Achei toda a experiência maravilhosa, muito obrigado por terem feito parte de tudo... Cuidaram de cada detalhe, superaram todas as expectivativas!!! <3"
                                name="Nome do Cliente"
                                destiny="Destino do cliente - Ano da viagem"
                                alt={'Nome do cliente'}
                            />  
                        </div>
                        <div className="bg-branco w-full rounded-3xl flex justify-center">
                            <Report 
                                text="Achei toda a experiência maravilhosa, muito obrigado por terem feito parte de tudo... Cuidaram de cada detalhe, superaram todas as expectivativas!!! <3"
                                name="Nome do Cliente"
                                destiny="Destino do cliente - Ano da viagem"
                                alt={'Nome do cliente'}
                            />  
                        </div>
                        <div className="bg-branco w-full rounded-3xl flex justify-center">
                            <Report 
                                text="Achei toda a experiência maravilhosa, muito obrigado por terem feito parte de tudo... Cuidaram de cada detalhe, superaram todas as expectivativas!!! <3"
                                name="Nome do Cliente"
                                destiny="Destino do cliente - Ano da viagem"
                                alt={'Nome do cliente'}
                            />  
                        </div>
                        <div className="bg-branco w-full rounded-3xl flex justify-center">
                            <Report 
                                text="Achei toda a experiência maravilhosa, muito obrigado por terem feito parte de tudo... Cuidaram de cada detalhe, superaram todas as expectivativas!!! <3"
                                name="Nome do Cliente"
                                destiny="Destino do cliente - Ano da viagem"
                                alt={'Nome do cliente'}
                            />  
                        </div>
                </div>
            </div>
            <div className="w-full flex justify-center pt-6">
                <div className="mt-4 w-full h-12 items-center flex justify-between bg-cyan-400 rounded-3xl lg:w-[69%]">
                    <span className="font-semibold text-white text-sm ml-4 sm:text-lg">
                        Seja você o proximo:
                    </span>
                    <div className="mr-4">
                    <a
                        href={`https://wa.me/5547991480037?text=${mensagem}`}
                        target="_blank"
                        rel="noopener noreferrer">
                        <button className="btn btn-ghost cursor-pointer text-white sm:text-lg">Entrar em contato</button>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedbacks;