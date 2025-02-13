"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import sideBackGroundImage from '@/app/assets/images/aviv-ben-or-EEkVpXOKwuE-unsplash.jpg'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import ErrorAlert from '../components/ErrorAlert'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Register = () => {

    const router = useRouter()
    // hook-form ->
    const registerSchema = z.object({
        firstName: z.string().min(3).max(30),
        lastName: z.string().min(3).max(30),
        email: z.string().email("Enter the Valid Email !!"),
        password: z.string().min(6, "Password must be at least 6 characters long"),
        confirmPassword: z.string().min(6, "Password must be at least 6 characters long"),
        acceptConditions: z.literal(true, {
            errorMap: () => ({ message: "You must accept the terms and conditions to proceed." }),
        }),
    }).refine(data => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Passwords do not match",
    })

    type RegisterSchema = z.infer<typeof registerSchema>

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterSchema>({ resolver: zodResolver(registerSchema), mode: "onSubmit" })

    const [error, setError] = useState<boolean>(false)
    const [isRegisterSuccess, setIsRegisterSuccess] = useState<boolean | null>(null)
    const onSubmit = async (data: RegisterSchema) => {

        const fromData = JSON.stringify(data)
        try {
            const res = await axios.post("http://localhost:8001/api/v1/users/register", fromData, {
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (res.status === 201) {
                setIsRegisterSuccess(true)
                router.push("/")
            }

            else {
                setIsRegisterSuccess(false)
            }
        } catch (error) {

            setIsRegisterSuccess(false)
            console.log(error)
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
            <div className="w-full h-screen bg-[#7ccde3] flex justify-center items-center">

                <div className="w-11/12 h-[85%] xl:w-[85%] flex items-center justify-center rounded-lg bg-[#202a2e] text-white">
                    <div className="w-full h-full hidden lg:flex justify-center items-center">
                        <div className="w-[95%] h-[95%]">
                            <Image src={sideBackGroundImage} alt="background" className='w-full h-full object-contain xl:object-cover rounded-lg' />
                        </div>
                    </div>
                    {!isRegisterSuccess && <ErrorAlert error="Registration Failed" />}
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-11/12 sm:w-[85%] h-[60%] sm:h-[70%] md:h-[75%] xl:h-[85%] rounded-lg p-2 sm:p-5 xl:p-10 flex flex-col gap-y-5 xl:justify-between">
                        <h1 className='text-3xl text-center mt-4 sm:text-4xl xl:text-5xl xl:mt-0'>Create an account</h1>
                        <p className='text-sm text-center sm:text-base'>already have an account ? <span className='text-blue-600 cursor-pointer underline'>Login</span></p>

                        <div className="flex gap-2 mt-5 xl:mt-0">
                            <input type="text" className='w-full rounded-sm p-4 sm:rounded-lg outline-none text-[#202a2e]' placeholder='First Name' {...register("firstName")} />
                            {errors?.firstName && error && <ErrorAlert error={errors.firstName?.message} />}
                            <input type="text" className='w-full rounded-sm p-4 sm:rounded-lg outline-none text-[#202a2e]' placeholder='Last Name' {...register("lastName")} />
                            {errors?.lastName && error && <ErrorAlert error={errors.lastName?.message} />}
                        </div>
                        <input type="text" className='mt-3 xl:mt-0 w-full p-4 sm:rounded-lg rounded-sm outline-none text-[#202a2e]' placeholder='Email' {...register("email")} />
                        {errors?.email && error && <ErrorAlert error={errors.email?.message} />}

                        <input type="password" className='mt-3 xl:mt-0 w-full p-4 sm:rounded-lg rounded-sm outline-none text-[#202a2e]' placeholder='Enter Your Password' {...register("password")} />
                        {errors?.password && error && <ErrorAlert error={errors.password?.message} />}

                        <input type="password" className='mt-3 xl:mt-0 w-full p-4 sm:rounded-lg rounded-sm outline-none text-[#202a2e]' placeholder='Confirm Password' {...register("confirmPassword")} />
                        {errors?.confirmPassword && error && <ErrorAlert error={errors.confirmPassword?.message} />}

                        <div className="flex items-center space-x-2 mt-3 ml-2">
                            <input type="checkbox" className='rounded-sm w-5 h-5 cursor-pointer' {...register("acceptConditions")} />
                            {errors?.acceptConditions && error && <ErrorAlert error={errors.acceptConditions?.message} />}
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                I Accept the <span className='underline text-blue-600 cursor-pointer'>terms and conditions</span>
                            </label>
                        </div>

                        <button
                            type='submit'
                            className="relative inline-flex items-center w-full justify-center py-3 text-lg font-medium tracking-tighter bg-gray-800 rounded-md group mt-10">
                            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-[#3d7888] rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-[#7ccde3] rounded-md "></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-[#3d7888] rounded-md opacity-0 group-hover:opacity-100 "></span>
                            <span className="relative transition-colors duration-200 ease-in-out delay-100 text-[#1d292d] group-hover:text-white">Register</span>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register
