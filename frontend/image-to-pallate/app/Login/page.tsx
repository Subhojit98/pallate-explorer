"use client"
import Image from "next/image"
import loginBackgroundImage from '@/app/assets/images/backiee-276788-landscape.jpg'
import PageIcon from "@/app/assets/icons/doughnut-svgrepo-com.svg"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import ErrorAlert from "../components/ErrorAlert"
import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

const Login = () => {

    const logInSchema = z.object({
        email: z.string().email("Enter the Valid Email !!"),
        password: z.string().min(6, "Password must be at least 6 characters long"),
    })

    const router = useRouter()

    type LoginSchema = z.infer<typeof logInSchema>

    const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({ resolver: zodResolver(logInSchema), mode: "onSubmit" })
    const [error, setError] = useState<boolean>(false)
    const [loginError, setLoginError] = useState<string>("")
    const onSubmit = async (data: LoginSchema) => {
        try {

            const res = await axios.post("http://localhost:8001/api/v1/users/login", data, {
                headers: {
                    "content-type": "application/json"
                }
            })

            if (res.data?.statusCode === 201) {
                console.log(res.data?.message);
                router.push("/")

                setError(false)
            } else {
                setError(true)
                setLoginError(res.data?.message || "Something went wrong while logging in... Please try again.");
            }


        } catch (err) {
            setError(true);
            if (axios.isAxiosError(err)) {
                setLoginError(err.response?.data?.message || "An error occurred. Please try again.");
            } else {
                setLoginError("An unexpected error occurred. Please try again.");
            }
        }
    }

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 2000);
        }
    }, [errors]);

    return (
        <>
            <div className="w-full min-h-screen relative flex justify-center items-center">
                {error && <ErrorAlert error={loginError} />}
                <Image src={loginBackgroundImage} alt="loginBackgroundImage" className="w-full h-full fixed object-center object-cover" />
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-[85%] sm:w-[75%] md:w-[65%] lg:w-1/2 xl:w-[35%] h-[60%] z-30 flex flex-col items-center p-5 md:p-8 relative">
                    <div className="absolute w-full h-full bg-neutral-900 -z-10 opacity-95 rounded-lg"></div>
                    <Image src={PageIcon} alt="Icon" className="w-16 h-16 p-1 mt-4" />
                    <h1 className="text-3xl sm:text-4xl text-neutral-100 mt-2">Welcome Back</h1>
                    <p className="mt-4 text-sm sm:text-base text-white">
                        Don&apos;t have an account yet? <span className="text-blue-600 font-semibold cursor-pointer">Sign Up</span>
                    </p>

                    <input type="email" className="w-full md:w-11/12 xl:w-[75%] p-3 md:p-4 rounded-lg mb-5 mt-8 outline-none" placeholder="✉️ Email Address" {...register("email")} />
                    {errors?.email && error && <ErrorAlert error={errors.email?.message} />}
                    <input type="password" className="w-full md:w-11/12 xl:w-[75%] p-3 md:p-4 rounded-lg outline-none mt-2" placeholder="🔑 Password" {...register("password")} />
                    {errors?.password && error && <ErrorAlert error={errors.password?.message} />}

                    <button type="submit" className="relative inline-flex items-center justify-center px-16 sm:px-20 xl:px-28 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group mt-16">
                        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                        <span className="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Login</span>
                    </button>
                </form>
            </div>


        </>
    )
}

export default Login
