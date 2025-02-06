import Image from 'next/image' 

export default function Feedbackk() {
    return (
        <div className="w-52 bg-slate-100 p-2 rounded-md">
            <div className="card-image">
                <Image 
                    src='/fundo_verde.png'
                    alt=""
                    width={200}
                    height={130}
                    className="bg-slate-200 hover:bg-sky-400"
                />
            </div>
            <div className="cursor-pointer text-sky-600"> Illustration </div>
            <div className="font-semibold text-gray-700 p-2 hover:cursor-pointer"> A heading that must span over two lines
                <div className="text-gray-800 font-normal text-base pt-5"> By <span className="font-semibold">Abi</span> 4 days ago</div>
            </div>
        </div>
    )
}