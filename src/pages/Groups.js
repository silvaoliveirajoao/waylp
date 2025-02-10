"use client"
import Image from "next/image"
import { HiUserGroup } from "react-icons/hi2";

export default function Groups() {
    return (
        <div id="groups" className="container w-[23rem] bg-white rounded-3xl flex flex-col justify-center items-center shadow-lg shadow-gray-300 p-6 gap-6 sm:w-[23rem] md:w-4/5 md:flex-row md:flex-wrap xl:flex-row">
            <div id="header" className="flex flex-col items-center lg:w-[480px] xl:w-[1200px]">
                <HiUserGroup 
                    size={32}
                    color="#374151" 
                />
                <h2 className="font-bold text-xl text-cyan-400 md:text-2xl">Roteiros em grupos</h2><br/>
                <h3 className="font-semibold text-xl text-gray-700 text-center md:text-2xl">Momentos únicos em boas companhias.</h3>
            </div>
            <div id="carousel" className="carousel carousel-center bg-white rounded-box w-72 h-96 max-w-md space-x-4">
                <div className="carousel-item">
                    <Image 
                        src="/slide1.png"
                        alt="Slide 1" 
                        width={288}
                        height={384}
                        className="rounded-box"
                    />
                </div>
                <div className="carousel-item">
                    <Image 
                        src="/slide2.png"
                        alt="Slide 2" 
                        width={288}
                        height={384}
                        className="rounded-box"
                    />
                </div>
                <div className="carousel-item">
                    <Image 
                        src="/slide3.png"
                        alt="Slide 3"
                        width={288}
                        height={384} 
                        className="rounded-box"
                    />
                </div>
                <div className="carousel-item">
                    <Image 
                        src="/slide4.png"
                        alt="Slide 4"
                        width={288}
                        height={384} 
                        className="rounded-box"
                    />
                </div>
            </div>
            <div id="dropdowns" className="flex flex-col gap-3 md:w-[412px] lg:hidden">
                <div tabIndex={0} className="collapse collapse-arrow bg-teal-700 border">
                    <div className="collapse-title text-base font-medium text-white">Como funcionam os grupos da Way?</div>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non tristique ante. Duis commodo scelerisque scelerisque. Sed venenatis quis urna eget fringilla. Suspendisse interdum tortor nulla, ac fringilla risus finibus ac. Sed dignissim pharetra neque, non pharetra mi laoreet convallis</p>
                    </div>
                </div>
                <div tabIndex={1} className="collapse collapse-arrow bg-teal-700 border text-white">
                    <div className="collapse-title text-base font-medium">Quais são os diferenciais da Way?</div>
                    <div className="collapse-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non tristique ante. Duis commodo scelerisque scelerisque. Sed venenatis quis urna eget fringilla. Suspendisse interdum tortor nulla, ac fringilla risus finibus ac. Sed dignissim pharetra neque, non pharetra mi laoreet convallis. In in viverra sem. Suspendisse euismod gravida ex, non volutpat lacus laoreet at.</p>
                    </div>
                </div>
            </div>
            <div id="hiddenOnSM" className="hidden lg:flex lg:flex-col lg:w-64 lg:gap-2 lg:items-start xl:w-96">
                <div>
                    <h3 className="font-bold text-gray-700 xl:text-xl">Como funcionam os grupos da Way?</h3>
                    <p className="text-sm xl:text-base text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non tristique ante. Duis commodo scelerisque scelerisque. Sed venenatis quis urna eget fringilla. Suspendisse interdum tortor nulla, ac fringilla risus finibus ac. Sed dignissim pharetra neque, non pharetra mi laoreet convallis.</p>
                </div>
                <div>
                    <h3 className="font-bold text-gray-700 xl:text-xl">Quais são os diferenciais da Way?</h3>
                    <p className="text-sm xl:text-base text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non tristique ante. Duis commodo scelerisque scelerisque. Sed venenatis quis urna eget fringilla. Suspendisse interdum tortor nulla, ac fringilla risus finibus ac. Sed dignissim pharetra neque, non pharetra mi laoreet convallis.</p>
                </div>
            </div>
            <div id="buttons" className="hidden lg:flex lg:gap-8 xl:w-[1200px] xl:justify-center">
                <button className="btn btn-active btn-wide bg-teal-700 text-white border-teal-600">Quais são os próximos grupos</button>
                <button className="btn btn-active btn-wide bg-teal-700 text-white border-teal-600">Tenho interesse em participar dos grupos.</button>
            </div>
        </div>
    )
}