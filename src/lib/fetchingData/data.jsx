export const allFacilitiesData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/facilities`)
    return res.json()
}

export const singleFacilitiesData = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/facilities/${id}`)
    return res.json()
}


export const bookingData = async (userEmail) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/bookings/${userEmail}`)
    return res.json()
}


export const addedFacilitiesData = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/facilities/user/${id}`)
    return res.json()
}