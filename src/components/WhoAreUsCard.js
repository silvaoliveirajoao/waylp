const WhoAreUsCard = ({ n = '', title = '', content = '', svg }) => {  
    return (
            <div className="w-64 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden">
                <div className="w-24 h-24 bg-cyan-400 rounded-full absolute -right-5 -top-7">
                    <p className="absolute bottom-6 left-7 text-white text-2xl">{ n }</p>
                </div>
                <div className="fill-cyan-400 w-12">
                    {svg}
                </div>
                <h1 className="font-bold text-xl text-gray-700">
                    { title }
                </h1>
                <p className="text-sm text-zinc-500 leading-6">
                    { content }
                </p>
            </div>
    )
}

export default WhoAreUsCard;