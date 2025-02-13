"use client"
import Image from "next/image"
import { getImages } from '@/app/api/fetchApiData'
import React, { useEffect, useState } from "react"
import { Copy } from "lucide-react"
const CardsContainer = () => {

    const [allimages, setAllImages] = useState<[]>([])
    const [isError, setIsError] = useState<boolean>(false)
    const [pageCount, setPageCount] = useState<number>(10)
    const [hoverIngColor, setHoverIngColor] = useState<string>("")
    const [selectedColor, setSelectedColor] = useState<string>("")
    const fetchImages = async () => {
        try {
            const res = await getImages()
            setAllImages(res.data)
            setIsError(false)
        } catch (error) {
            setIsError(true)
            console.log(error)
        }
    }


    useEffect(() => {
        fetchImages()
    }, [])

    useEffect(() => {
        console.log(selectedColor)
    }, [selectedColor])

    return (
        <>

            <ul className="w-full lg:w-11/12 2xl:w-[85%] m-auto h-full grid gap-x-11 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-y-4 px-4 md:px-0 mt-32 md:mt-10">

                {allimages?.slice(0, pageCount).map((details, i) => {

                    const { imageUrl, colorPallets } = details

                    return <li key={i} className="w-72 sm:w-64 md:w-56 xl:w-64 h-[48vh] md:h-[42vh] xl:h-[50vh] group border border-transparent hover:cursor-pointer hover:border-white rounded-lg flex flex-col items-center justify-around relative gap-y-4 p-8 sm:p-6 duration-300">
                        <button className="text-white absolute opacity-0 top-5 group-hover:opacity-100">+ Add</button>
                        <div className="w-full relative group">
                            <Image src={imageUrl || ""} alt="images" className="w-full object-contain mx-auto" width={1000} height={1000}
                            />
                            {hoverIngColor && <span className={`w-28 h-12 bg-slate-800/20 text-white inline-flex items-center justify-center backdrop-blur-md shadow-lg top-1/2 left-0 right-0 m-auto opacity-0 group-hover:opacity-100 uppercase absolute duration-300 ease-out`}>

                                <span className="inline-flex items-center justify-center gap-x-2">
                                    <Copy width={16} />
                                    {hoverIngColor}
                                </span>
                            </span>}
                        </div>
                        <div className="flex gap-2 items-center absolute bottom-4">
                            <span className={`w-12 h-8 bg-slate-200 cursor-pointer hover:shadow-[-1px_9px_10px_0px_var(--tw-shadow-color)] duration-200 ease-out`} style={{ backgroundColor: colorPallets[0], "--tw-shadow-color": `${colorPallets[0]}` } as React.CSSProperties}
                                onMouseEnter={() => setHoverIngColor(colorPallets[0])}
                                onMouseLeave={() => setHoverIngColor("")}
                                onClick={() => setSelectedColor(colorPallets[0])}
                            >
                            </span>
                            <span className={`w-8 h-8 bg-slate-200 cursor-pointer hover:shadow-[-1px_5px_10px_0px_var(--tw-shadow-color-2)] duration-200 ease-out`} style={{ backgroundColor: colorPallets[1], "--tw-shadow-color-2": `${colorPallets[1]}` } as React.CSSProperties}
                                onMouseEnter={() => setHoverIngColor(colorPallets[1])}
                                onMouseLeave={() => setHoverIngColor("")}
                                onClick={() => setSelectedColor(colorPallets[1])}
                            ></span>
                            <span className={`w-4 h-8 bg-slate-200 cursor-pointer hover:shadow-[-1px_3px_10px_0px_var(--tw-shadow-color-3)] duration-200 ease-out`} style={{ backgroundColor: colorPallets[2], "--tw-shadow-color-3": `${colorPallets[2]}` } as React.CSSProperties}
                                onMouseEnter={() => setHoverIngColor(colorPallets[2])}
                                onMouseLeave={() => setHoverIngColor("")}
                                onClick={() => setSelectedColor(colorPallets[2])}
                            ></span>
                        </div>

                    </li>
                })}
            </ul>
            <div className="w-full flex justify-center">
                <button className="bg-white p-3 sm:p-4 md:p-5 px-8 sm:px-10 mt-10" onClick={() => setPageCount(pageCount + 12)}>Show More</button>

            </div>
        </>
    )
}

export default CardsContainer
