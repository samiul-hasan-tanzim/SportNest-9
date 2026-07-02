import { authClient } from "../auth-client"

export const bookingData = async (userEmail) => {
    const { data: tokenData } = await authClient.token()

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/bookings/${userEmail}`, {
        headers: {
            authorization: `Bearer ${tokenData?.token}`
        }
    })
    return res.json()
}