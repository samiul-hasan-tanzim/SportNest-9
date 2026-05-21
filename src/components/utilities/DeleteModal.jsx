"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Modal } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FiDelete } from "react-icons/fi";

const DeleteModal = ({ booking }) => {
    const bookingId = booking._id
    const router = useRouter()

    const handelDelete = async (bookingId) => {
        const { data: tokenData } = await authClient.token()

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/bookings/${bookingId}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${tokenData?.token}`
            }
        })
        const data = await res.json()
        // console.log(data)
        if (data.deletedCount > 0) {
            router.refresh()
        }
    }


    return (
        <Modal>
            <Button
                variant="bordered"
                className="w-full border rounded-md border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition duration-300"
            >
                Cancel Booking
            </Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-90">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-default text-foreground">
                                <FiDelete className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Do you want Cancel this Booking?</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Name: {booking.name}</p>
                            <p>Price: ৳ {booking.price} only</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                onClick={() => handelDelete(bookingId)}
                                className="w-full rounded-md bg-red-500 border-red-500" slot="close">
                                Continue
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default DeleteModal;