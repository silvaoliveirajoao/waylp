import Image from "next/image"

const ServicesCard = ({img = '', title = '', content = '', bgColor, textColor }) => {
    return (
        <div className="w-48 h-96 flex flex-col items-center">
            <div className="w-48 h-52 relative">
                <Image 
                    src={img}
                    className="border-solid rounded-3xl"
                    fill
                    alt="teste"
                />
            </div>
            <div className={`w-4/5 ${bgColor} border-solid border-[1px] flex flex-col items-center gap-2 border-gray-400 rounded-xl shadow-xl relative bottom-20 p-2`}>
                <div className={`${textColor} text-base font-bold border-gray-400 border-b-[1px]`}>
                    { title }
                </div>
                <div className={`${textColor} text-sm font-light border-gray-400 border-b-[1px]`}>
                    { content }
                </div>
                <button className="btn btn-ghost">Quero saber mais</button>
            </div>
        </div>
    )
}

export default ServicesCard