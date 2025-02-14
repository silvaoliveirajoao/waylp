import { FiUserCheck } from "react-icons/fi";
import Image from "next/image";

const Team = () => {
    return (
        <div id="team" className="container mx-auto items-center w-full">
            <div className="flex flex-col w-full items-center my-6">
                <FiUserCheck
                    size={32}
                    color="#374151"
                />
                <h2 className="font-semibold text-2xl text-cyan-400">
                    O nosso time
                </h2>
                <h3 className="font-semibold text-2xl text-gray-700">
                    Conheça as nossas agentes
                </h3>
            </div>
            <div className="flex items-center justify-center flex-col gap-6 my-6 md:flex-row md:flex-wrap">
                <div className="card bg-white w-64 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-teal-700">Nome do colaborador</h2>
                        <p className="text-gray-700">Aqui iremos descrever as atividades do colaborador.</p>
                    </div>
                    <figure className="w-64 h-44 relative">
                        <Image
                        src="/colaborador_1.jpg"
                        alt="Colaborador"
                        fill
                        />
                    </figure>
                </div>
                <div className="card bg-white w-64 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-teal-700">Nome do colaborador</h2>
                        <p className="text-gray-700">Aqui iremos descrever as atividades do colaborador.</p>
                    </div>
                    <figure className="w-64 h-44 relative">
                        <Image
                        src="/colaborador_2.jpg"
                        alt="Colaborador"
                        fill
                        />
                    </figure>
                </div>
                <div className="card bg-white w-64 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-teal-700">Nome do colaborador</h2>
                        <p className="text-gray-700">Aqui iremos descrever as atividades do colaborador.</p>
                    </div>
                    <figure className="w-64 h-44 relative">
                        <Image
                        src="/colaborador_3.jpg"
                        alt="Colaborador"
                        fill
                        />
                    </figure>
                </div>
                <div className="card bg-white w-64 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-teal-700">Nome do colaborador</h2>
                        <p className="text-gray-700">Aqui iremos descrever as atividades do colaborador.</p>
                    </div>
                    <figure className="w-64 h-44 relative">
                        <Image
                        src="/colaborador_4.jpg"
                        alt="Colaborador"
                        fill
                        />
                    </figure>
                </div>
                <div className="card bg-white w-64 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-teal-700">Nome do colaborador</h2>
                        <p className="text-gray-700">Aqui iremos descrever as atividades do colaborador.</p>
                    </div>
                    <figure className="w-64 h-44 relative">
                        <Image
                        src="/colaborador_5.jpg"
                        alt="Colaborador"
                        fill
                        />
                    </figure>
                </div>
            </div>
            </div>
    )    
}

export default Team;