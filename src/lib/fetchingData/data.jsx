import { headers } from "next/headers"
import { auth } from "../auth"

export const allFacilitiesData = async (searchQuery = '', type = '') => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/facilities?search=${searchQuery}&type=${type}`)
    return res.json()
}





export const singleFacilitiesData = async (id) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/facilities/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    return res.json()
}



export const allBookingData = async () => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/bookings`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    return res.json()
}



export const bookingData = async (userEmail) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/bookings/${userEmail}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    return res.json()
}





export const addedFacilitiesData = async (id) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/facilities/user/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    return res.json()
}