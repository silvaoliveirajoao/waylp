import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { FaQuoteRight } from "react-icons/fa";

const Report = ({ alt, text = '', name = '', destiny = '', className = ''}) =>  {
    return (
        <div className={`bg-white gap-4 rounded-3xl flex flex-col p-4 w-4/5 relative sm:p-8${className}`}>
            <div className="absolute left-56 sm:left-[30rem] top-[-20] lg:left-[15rem] xl:left-[18rem] 2xl:left-[24rem]">
                <FaQuoteRight 
                    className="size-6 sm:size-10"
                    color="#0F766E"
                />
            </div>
            <div className="flex">
                <IoIosStar color="#fdee2f" className="sm:size-6" />
                <IoIosStar color="#fdee2f" className="sm:size-6" />
                <IoIosStar color="#fdee2f" className="sm:size-6" />
                <IoIosStar color="#fdee2f" className="sm:size-6" />
                <IoIosStar color="#fdee2f" className="sm:size-6" />
            </div>
            <div className="">
                <p className="text-xs italic font-medium text-gray-700 sm:text-lg">
                    {text}
                </p>
            </div>
            <div className="flex items-center justify-start flex-row gap-2">
            <div className="avatar">
                <div className="w-10 rounded-xl">
                    <Image 
                        src="/fundo_verde.png"
                        width={32}
                        height={32}
                        alt="Nome do cliente"
                    />
                </div>
            </div>
                <div className="flex flex-col">
                    <span className="text-xs font-semibold sm:text-base">
                        {name}
                    </span>
                    <span className="text-xs font-normal text-gray-700 italic sm:text-base">
                        {destiny}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Report;