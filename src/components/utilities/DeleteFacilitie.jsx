'use client'
import { authClient } from "@/lib/auth-client";
import { TrashBin } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import { useRouter } from "next/navigation";
import { TbTrash } from "react-icons/tb";

const DeleteFacilitie = ({ facility }) => {
    // console.log(facility)
    const router = useRouter()

    const handelDelete = async (userId) => {

        const { data: tokenData } = await authClient.token()
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/facilities/${userId}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${tokenData?.token}`
            }
        })
        const data = await res.json()
        if (data.deletedCount > 0) {
            router.refresh()
        }
    }


    return (
        <div className="flex flex-wrap gap-4">
            <Modal key={'blur'}>
                <Button
                    variant="flat"
                    className="h-12 w-12 min-w-12 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-colors flex items-center justify-center border border-red-500/30"
                >
                    <TrashBin className="w-5 h-5" />
                </Button>
                <Modal.Backdrop variant={'blur'}>
                    <Modal.Container>
                        <Modal.Dialog className="sm:max-w-90">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Icon className="bg-default text-foreground">
                                    <TbTrash className="size-5" />
                                </Modal.Icon>
                                <Modal.Heading>
                                    Want to delete {facility.name} Facility?
                                </Modal.Heading>
                            </Modal.Header>
                            <Modal.Body>
                                <p>
                                    {facility.description}
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    onClick={() => handelDelete(facility.userId)}
                                    variant="danger-soft" className="w-full" slot="close">
                                    Confirm Delete
                                </Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default DeleteFacilitie;