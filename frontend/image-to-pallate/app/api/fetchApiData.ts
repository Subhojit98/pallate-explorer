"use server"
import axios from 'axios'

export const getImages = async () => {

    try{
        const res = await axios.get(`${process.env.BACKEND_URL}/all-images`)
    const data = res.data
    return data
    }catch(err){
        throw new Error(`Failed to fetch all images... ${err}`)
    }
}