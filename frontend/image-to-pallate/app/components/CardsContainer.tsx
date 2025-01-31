import Image from "next/image"
import imgage from '@/app/assets/images/aviv-ben-or-EEkVpXOKwuE-unsplash.jpg'
import imgage2 from '@/app/assets/images/photo-felipe-labate-unsplash_FX1wtP48n2.jpg'
const CardsContainer = () => {
    return (
        <>

            <div className="w-full lg:w-11/12 2xl:w-[85%] m-auto h-full grid gap-x-11 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-y-4 px-4 md:px-0 mt-32 md:mt-10">

                <div className="w-72 sm:w-64 md:w-56 xl:w-64 h-[48vh] md:h-[42vh] xl:h-[50vh] group border border-transparent hover:cursor-pointer hover:border-white rounded-lg flex flex-col items-center justify-around relative gap-y-4 p-8 sm:p-6 duration-300 ease-out">
                    <button className="text-white absolute opacity-0 top-5 group-hover:opacity-100">+ Add</button>
                    <div className="w-full relative">
                        <Image src={imgage} alt="" className="w-full object-contain bg-black mx-auto" />
                        <span className="w-24 h-12 bg-slate-800 absolute top-1/2 left-0 right-0 m-auto"></span>
                    </div>
                    <div className="flex gap-2 items-center absolute bottom-4">
                        <span className="w-12 h-8 bg-slate-200 cursor-pointer hover:shadow-[rgba(8,_0,_110,_0.8)_0px_8px_15px_3px]"></span>
                        <span className="w-8 h-8 bg-slate-200 cursor-pointer"></span>
                        <span className="w-4 h-8 bg-slate-200 cursor-pointer"></span>
                    </div>

                </div>

                <div className="w-72 sm:w-64 md:w-56 xl:w-[17rem] h-[48vh] md:h-[42vh] xl:h-[50vh] group border border-transparent hover:cursor-pointer hover:border-white rounded-lg flex flex-col items-center justify-around gap-y-4 p-8 sm:p-6 relative duration-300 ease-out">
                    <button className="text-white absolute opacity-0 top-5 group-hover:opacity-100">+ Add</button>
                    <div className="w-full relative">
                        <Image src={imgage2} alt="" className="w-full object-contain bg-black mx-auto" />
                        <span className="w-24 h-12 bg-slate-800 absolute top-1/2 left-0 right-0 m-auto"></span>
                    </div>
                    <div className="flex gap-2 items-center absolute bottom-4">
                        <span className="w-12 h-8 bg-slate-200 cursor-pointer"></span>
                        <span className="w-8 h-8 bg-slate-200 cursor-pointer"></span>
                        <span className="w-4 h-8 bg-slate-200 cursor-pointer"></span>
                    </div>

                </div>
                <div className="w-72 sm:w-64 md:w-56 xl:w-[17rem] h-[48vh] md:h-[42vh] xl:h-[50vh] group border border-transparent hover:cursor-pointer hover:border-white rounded-lg flex flex-col items-center justify-around gap-y-4 p-8 sm:p-6 relative duration-300 ease-out">
                    <button className="text-white absolute opacity-0 top-5 group-hover:opacity-100">+ Add</button>
                    <div className="w-full relative">
                        <Image src={imgage2} alt="" className="w-full object-contain bg-black mx-auto" />
                        <span className="w-24 h-12 bg-slate-800 absolute top-1/2 left-0 right-0 m-auto"></span>
                    </div>
                    <div className="flex gap-2 items-center absolute bottom-4">
                        <span className="w-12 h-8 bg-slate-200 cursor-pointer"></span>
                        <span className="w-8 h-8 bg-slate-200 cursor-pointer"></span>
                        <span className="w-4 h-8 bg-slate-200 cursor-pointer"></span>
                    </div>

                </div>
                <div className="w-72 sm:w-64 md:w-56 xl:w-[17rem] h-[48vh] md:h-[42vh] xl:h-[50vh] group border border-transparent hover:cursor-pointer hover:border-white rounded-lg flex flex-col items-center justify-around gap-y-4 p-8 sm:p-6 relative duration-300 ease-out">
                    <button className="text-white absolute opacity-0 top-5 group-hover:opacity-100">+ Add</button>
                    <div className="w-full relative">
                        <Image src={imgage2} alt="" className="w-full object-contain bg-black mx-auto" />
                        <span className="w-24 h-12 bg-slate-800 absolute top-1/2 left-0 right-0 m-auto"></span>
                    </div>
                    <div className="flex gap-2 items-center absolute bottom-4">
                        <span className="w-12 h-8 bg-slate-200 cursor-pointer"></span>
                        <span className="w-8 h-8 bg-slate-200 cursor-pointer"></span>
                        <span className="w-4 h-8 bg-slate-200 cursor-pointer"></span>
                    </div>

                </div>
                <div className="w-72 sm:w-64 md:w-56 xl:w-[17rem] h-[48vh] md:h-[42vh] xl:h-[50vh] group border border-transparent hover:cursor-pointer hover:border-white rounded-lg flex flex-col items-center justify-around gap-y-4 p-8 sm:p-6 relative duration-300 ease-out">
                    <button className="text-white absolute opacity-0 top-5 group-hover:opacity-100">+ Add</button>
                    <div className="w-full relative">
                        <Image src={imgage2} alt="" className="w-full object-contain bg-black mx-auto" />
                        <span className="w-24 h-12 bg-slate-800 absolute top-1/2 left-0 right-0 m-auto"></span>
                    </div>
                    <div className="flex gap-2 items-center absolute bottom-4">
                        <span className="w-12 h-8 bg-slate-200 cursor-pointer"></span>
                        <span className="w-8 h-8 bg-slate-200 cursor-pointer"></span>
                        <span className="w-4 h-8 bg-slate-200 cursor-pointer"></span>
                    </div>

                </div>
                <div className="w-72 sm:w-64 md:w-56 xl:w-[17rem] h-[48vh] md:h-[42vh] xl:h-[50vh] group border border-transparent hover:cursor-pointer hover:border-white rounded-lg flex flex-col items-center justify-around gap-y-4 p-8 sm:p-6 relative duration-300 ease-out">
                    <button className="text-white absolute opacity-0 top-5 group-hover:opacity-100">+ Add</button>
                    <div className="w-full relative">
                        <Image src={imgage2} alt="" className="w-full object-contain bg-black mx-auto" />
                        <span className="w-24 h-12 bg-slate-800 absolute top-1/2 left-0 right-0 m-auto"></span>
                    </div>
                    <div className="flex gap-2 items-center absolute bottom-4">
                        <span className="w-12 h-8 bg-slate-200 cursor-pointer"></span>
                        <span className="w-8 h-8 bg-slate-200 cursor-pointer"></span>
                        <span className="w-4 h-8 bg-slate-200 cursor-pointer"></span>
                    </div>

                </div>
                <div className="w-72 sm:w-64 md:w-56 xl:w-[17rem] h-[48vh] md:h-[42vh] xl:h-[50vh] group border border-transparent hover:cursor-pointer hover:border-white rounded-lg flex flex-col items-center justify-around gap-y-4 p-8 sm:p-6 relative duration-300 ease-out">
                    <button className="text-white absolute opacity-0 top-5 group-hover:opacity-100">+ Add</button>
                    <div className="w-full relative">
                        <Image src={imgage2} alt="" className="w-full object-contain bg-black mx-auto" />
                        <span className="w-24 h-12 bg-slate-800 absolute top-1/2 left-0 right-0 m-auto"></span>
                    </div>
                    <div className="flex gap-2 items-center absolute bottom-4">
                        <span className="w-12 h-8 bg-slate-200 cursor-pointer"></span>
                        <span className="w-8 h-8 bg-slate-200 cursor-pointer"></span>
                        <span className="w-4 h-8 bg-slate-200 cursor-pointer"></span>
                    </div>

                </div>
                <div className="w-72 sm:w-64 md:w-56 xl:w-[17rem] h-[48vh] md:h-[42vh] xl:h-[50vh] group border border-transparent hover:cursor-pointer hover:border-white rounded-lg flex flex-col items-center justify-around gap-y-4 p-8 sm:p-6 relative duration-300 ease-out">
                    <button className="text-white absolute opacity-0 top-5 group-hover:opacity-100">+ Add</button>
                    <div className="w-full relative">
                        <Image src={imgage2} alt="" className="w-full object-contain bg-black mx-auto" />
                        <span className="w-24 h-12 bg-slate-800 absolute top-1/2 left-0 right-0 m-auto"></span>
                    </div>
                    <div className="flex gap-2 items-center absolute bottom-4">
                        <span className="w-12 h-8 bg-slate-200 cursor-pointer"></span>
                        <span className="w-8 h-8 bg-slate-200 cursor-pointer"></span>
                        <span className="w-4 h-8 bg-slate-200 cursor-pointer"></span>
                    </div>

                </div>
                <div className="w-72 sm:w-64 md:w-56 xl:w-[17rem] h-[48vh] md:h-[42vh] xl:h-[50vh] group border border-transparent hover:cursor-pointer hover:border-white rounded-lg flex flex-col items-center justify-around gap-y-4 p-8 sm:p-6 relative duration-300 ease-out">
                    <button className="text-white absolute opacity-0 top-5 group-hover:opacity-100">+ Add</button>
                    <div className="w-full relative">
                        <Image src={imgage2} alt="" className="w-full object-contain bg-black mx-auto" />
                        <span className="w-24 h-12 bg-slate-800 absolute top-1/2 left-0 right-0 m-auto"></span>
                    </div>
                    <div className="flex gap-2 items-center absolute bottom-4">
                        <span className="w-12 h-8 bg-slate-200 cursor-pointer"></span>
                        <span className="w-8 h-8 bg-slate-200 cursor-pointer"></span>
                        <span className="w-4 h-8 bg-slate-200 cursor-pointer"></span>
                    </div>

                </div>
                <div className="w-72 sm:w-64 md:w-56 xl:w-[17rem] h-[48vh] md:h-[42vh] xl:h-[50vh] group border border-transparent hover:cursor-pointer hover:border-white rounded-lg flex flex-col items-center justify-around gap-y-4 p-8 sm:p-6 relative duration-300 ease-out">
                    <button className="text-white absolute opacity-0 top-5 group-hover:opacity-100">+ Add</button>
                    <div className="w-full relative">
                        <Image src={imgage2} alt="" className="w-full object-contain bg-black mx-auto" />
                        <span className="w-24 h-12 bg-slate-800 absolute top-1/2 left-0 right-0 m-auto"></span>
                    </div>
                    <div className="flex gap-2 items-center absolute bottom-4">
                        <span className="w-12 h-8 bg-slate-200 cursor-pointer"></span>
                        <span className="w-8 h-8 bg-slate-200 cursor-pointer"></span>
                        <span className="w-4 h-8 bg-slate-200 cursor-pointer"></span>
                    </div>

                </div>
            </div>
            <div className="w-full flex justify-center">
                <button className="bg-white p-3 sm:p-4 md:p-5 px-8 sm:px-10 mt-10 ">Show More</button>

            </div>
        </>
    )
}

export default CardsContainer
