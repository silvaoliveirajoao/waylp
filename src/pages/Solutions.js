import { PiHandshake } from "react-icons/pi";
import Image from "next/image";

export default function Solutions() {
    return (
        <div id="solutions" className="container flex flex-col items-center justify-center my-6 px-4 gap-6">
                <div className="flex flex-col items-center justify-center">
                    <PiHandshake
                        size={32}
                        color="#374151"
                    />
                    <h2 className="font-semibold text-2xl text-cyan-400">Os nossos serviços</h2>
                    <h3 className="font-semibold text-2xl text-gray-700 text-center">Algumas outras coisas que resolvemos para você</h3>
                </div>
                <div className="hidden relative select-none scrollbar-hide w-[500px]">
                    <span className="absolute top-20 left-16 text-9xl font-bold text-gray-300 text-center leading-3 z-0">
                        WAY
                    </span>
                    <span className="absolute top-44 text-9xl font-bold text-gray-300 text-center leading-3 z-0">
                        TURISMO
                    </span>
                </div>
                <div className="flex flex-col justify-center gap-6 md:flex-row flex-wrap lg:gap-10">
                {/* primeiro: */}
                    <div className="card card-compact bg-gray-100 w-80 shadow-xl lg:card-normal items-center">
                        <figure className="px-10 pt-10">
                            <Image
                            src="/assessoramento_vistos.jpg"
                            alt="Assessoramento de vistos"
                            className="rounded-xl"
                            width={248}
                            height={248}
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Assessoramento de vistos</h2>
                            <p>Te auxiliamos do início ao fim no processo de aquisição de vistos para o seu destino. iada iada iada iada iada iada iada iada</p>
                            <div className="card-actions">
                                <button className="btn btn-ghost">Quero saber mais!</button>
                            </div>
                        </div>
                    </div>
                    {/* segundo: */}
                    <div className="card card-compact bg-gray-100 w-80 shadow-xl lg:card-normal">
                        <figure className="px-10 pt-10">
                            <Image
                            src="/ingressos_show_eventos.jpg"
                            alt="Ingressos para shows/eventos"
                            className="rounded-xl"
                            width={284}
                            height={284}
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Ingressos para shows/eventos</h2>
                            <p>Aqui teremos o texto de conteúdo sobre a região do card. Podemos especificar roteiros e fazer outros tipos de recomendações</p>
                            <div className="card-actions">
                                <button className="btn btn-ghost">Quero saber mais!</button>
                            </div>
                        </div>
                    </div>
                    {/* terceiro: */}
                    <div className="card card-compact bg-gray-100 w-80 shadow-xl lg:card-normal">
                        <figure className="px-10 pt-10">
                            <Image
                            src="/concierge.jpg"
                            alt="Serviço de concierge"
                            className="rounded-xl"
                            width={284}
                            height={284}
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Serviço de concierge</h2>
                            <p>Aqui teremos o texto de conteúdo sobre a região do card. Podemos especificar roteiros e fazer outros tipos de recomendações</p>
                            <div className="card-actions">
                                <button className="btn btn-ghost">Quero saber mais!</button>
                            </div>
                        </div>
                    </div>
                    {/* quarto: */}
                    <div className="card card-compact bg-gray-100 w-80 shadow-xl lg:card-normal">
                        <figure className="px-10 pt-10">
                            <Image
                            src="/documentacao_tramites.jpg"
                            alt="Documentações e trâmites"
                            className="rounded-xl"
                            width={284}
                            height={284}
                            />
                        </figure>
                        <div className="card-body  items-center text-center">
                            <h2 className="card-title">Documentações e trâmites</h2>
                            <p>Aqui teremos o texto de conteúdo sobre a região do card. Podemos especificar roteiros e fazer outros tipos de recomendações</p>
                            <div className="card-actions">
                                <button className="btn btn-ghost">Quero saber mais!</button>
                            </div>
                        </div>
                    </div>
                    {/* quinto: */}
                    <div className="card card-compact bg-gray-100 w-80 shadow-xl lg:card-normal">
                        <figure className="px-10 pt-10">
                            <Image
                            src="/pacotes_internacionas.jpg"
                            alt="Pacotes internacionais"
                            className="rounded-xl"
                            width={284}
                            height={284}
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Pacotes internacionais e nacionais</h2>
                            <p>Aqui teremos o texto de conteúdo sobre a região do card. Podemos especificar roteiros e fazer outros tipos de recomendações</p>
                            <div className="card-actions">
                                <button className="btn btn-ghost">Quero saber mais!</button>
                            </div>
                        </div>
                    </div>
                    {/* sexto: */}
                    <div className="card card-compact bg-gray-100 w-80 shadow-xl lg:card-normal">
                        <figure className="px-10 pt-10">
                            <Image
                            src="/locacao_veiculos.jpg"
                            alt="Locação de veículos"
                            className="rounded-xl"
                            width={284}
                            height={284}
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Locação de veículos</h2>
                            <p>Aqui teremos o texto de conteúdo sobre a região do card. Podemos especificar roteiros e fazer outros tipos de recomendações</p>
                            <div className="card-actions">
                                <button className="btn btn-ghost">Quero saber mais!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )

}