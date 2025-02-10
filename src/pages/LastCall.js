import Image from "next/image";

const LastCall = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="relative w-full z-0 items-center">
                <Image 
                    src="/last_call.jpg"
                    className="w-screen h-[90vh] rounded-[32px]"
                    alt="Background"
                    width={1200}
                    height={700}
                />
                <div className="flex flex-col gap-4 items-center absolute top-1/4">
                    <div>
                        <Image 
                            src="/logo.png"
                            width={180}
                            height={180}
                            alt="Way Turismo"
                        />
                    </div>
                    <div className="w-3/5">
                        <h3 className="flex text-center text-lg font-bold text-white md:text-xl lg:text-2xl xl:text-3xl">
                            Pronto para embarcar na sua próxima aventura? Entre em contato com a Way Turismo ainda hoje para iniciar o planejamento da sua viagem do sonhos.
                        </h3>
                    </div>
                    <div>
                        <button className="btn btn-ghost text-white text-lg md:text-3xl lg:text-3xl">Planeje agora mesmo!</button>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default LastCall;