import Image from "next/image";
const Oceano = "/Oceano_Vertical.jpg"
import { BsFillBookmarkHeartFill } from "react-icons/bs";

const Roadmaps = () => {
    return (
        <div id="roadmaps" className="container w-full mx-auto flex flex-col items-center">
            <div className="my-6 flex flex-col w-full items-center">
                <BsFillBookmarkHeartFill 
                    size={32}
                    color="#374151"
                />
                <h2 className="text-2xl font-bold tracking-tight text-cyan-400">
                    Roteiros
                </h2>
                <h3 className="text-2xl font-bold tracking-tight text-gray-700">
                    As nossas especialidades
                </h3>
            </div>
            <div className="w-full items-center justify-center flex flex-row flex-wrap gap-8 mt-5 px-6">   
                <a href="" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100">
                    <Image 
                        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                        src={Oceano}
                        alt="Oceano"
                        width={200}
                        height={160}
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-stone-700 ">Nome do destino especialidade</h5>
                        <p className="mb-3 font-normal text-gray-600 dark:text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales magna nisi, id lacinia ante volutpat ut. Curabitur aliquam fringilla.</p>
                    </div>
                </a>
                <a href="" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100">
                    <Image 
                        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                        src={Oceano}
                        alt="Oceano"
                        width={200}
                        height={160}
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-stone-700 ">Nome do destino especialidade</h5>
                        <p className="mb-3 font-normal text-gray-600 dark:text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales magna nisi, id lacinia ante volutpat ut. Curabitur aliquam fringilla.</p>
                    </div>
                </a>
                <a href="" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100">
                    <Image 
                        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                        src={Oceano}
                        alt="Oceano"
                        width={200}
                        height={160}
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-stone-700 ">Nome do destino especialidade</h5>
                        <p className="mb-3 font-normal text-gray-600 dark:text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales magna nisi, id lacinia ante volutpat ut. Curabitur aliquam fringilla.</p>
                    </div>
                </a>
                <a href="" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100">
                    <Image 
                        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                        src={Oceano}
                        alt="Oceano"
                        width={200}
                        height={160}
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-stone-700 ">Nome do destino especialidade</h5>
                        <p className="mb-3 font-normal text-gray-600 dark:text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales magna nisi, id lacinia ante volutpat ut. Curabitur aliquam fringilla.</p>
                    </div>
                </a>
            </div>
            <div className="w-4/5 flex flex-col items-end mt-2 sm:mr-10 lg:mr-60 xl:items-end xl:mr-0 xl:ml-36">
                    <span className="text-gray-700">
                        e <span className="text-xl text-teal-700">
                            99+
                        </span>
                    </span>
                    <span className="text-gray-700">destinos</span>
            </div>
        </div>
    )
}

export default Roadmaps;