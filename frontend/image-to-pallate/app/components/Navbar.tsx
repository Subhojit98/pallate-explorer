import Image from "next/image"
import logoIcon from '@/app/assets/icons/doughnut-svgrepo-com.svg'
import { Star, Upload } from "lucide-react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const Navbar = () => {
    return (
        <>
            <nav className="w-full h-16 relative px-2 md:flex md:justify-between md:items-center md:gap-3 pt-10 xl:px-32">
                <Image src={logoIcon} alt="logo" className="w-14 h-14 hidden absolute md:relative md:block top-0 md:-top-0 z-10 " />

                <div className="w-[95%] md:w-full h-14 absolute md:relative flex items-center gap-3 top-28 md:-top-0 overflow-x-auto px-3 text-white">
                    <button className="py-2 px-8 sm:px-6 sm:py-1 rounded-full border-white border-[0.5px] hover:-translate-y-[1px] duration-100 ease-linear">CTA</button>
                    <button className="py-2 px-8 sm:px-6 sm:py-1 rounded-full border-white border-[0.5px] hover:-translate-y-[1px] duration-100 ease-linear">CTA</button>
                    <button className="py-2 px-8 sm:px-6 sm:py-1 rounded-full border-white border-[0.5px] hover:-translate-y-[1px] duration-100 ease-linear">CTA</button>
                    <button className="py-2 px-8 sm:px-6 sm:py-1 rounded-full border-white border-[0.5px] hover:-translate-y-[1px] duration-100 ease-linear">CTA</button>
                </div>

                <div className="flex items-center gap-x-3">
                    <button className="py-3 flex justify-center items-center bg-neutral-700 gap-x-2 px-5 md:px-12 absolute md:relative md:flex top-2 md:-top-0 md:-right-0 right-1">
                        <Star color="#ffffff" />
                        <span className="text-sm sm:text-base text-white whitespace-nowrap">Favorites (0)</span>
                    </button>
                    <button className="py-3 flex justify-center items-center bg-neutral-700 gap-x-2 px-9 md:px-12 absolute md:relative md:flex top-16 right-1 md:-top-0">
                        <Upload color="#ffffff" />
                        <span className="text-sm sm:text-base text-white whitespace-nowrap">Upload</span>
                    </button>
                </div>
                <Popover>
                    <PopoverTrigger className="w-8 h-8 p-6 rounded-full text-lg bg-white font-bold flex justify-center items-center absolute top-2 left-3 md:relative md:top-0 md:left-0">SC</PopoverTrigger>
                    <PopoverContent className="w-40 text-center p-2 bg-white">
                        <button className="">Logout</button>
                    </PopoverContent>
                </Popover>

            </nav>
        </>
    )
}

export default Navbar
