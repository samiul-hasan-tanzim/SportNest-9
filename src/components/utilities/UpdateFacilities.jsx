"use client";
import { authClient } from "@/lib/auth-client";
import { FloppyDisk, Pencil, Plus, Xmark } from "@gravity-ui/icons";
import { Button, FieldGroup, Fieldset, Form, Input, Label, Modal, Surface, TextArea, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { BiEdit } from "react-icons/bi";

const UpdateFacilities = ({ facility }) => {
    const { name, facility_type, location, contact_number, price_per_hour, capacity, maximum_player, availability, opening_time, closing_time, rating, total_reviews, image, description, slots, addAmenity, userId } = facility;
    // console.log(userId)
    const router = useRouter()
    const [timeSlot, setTimeSlot] = useState([]);
    const [input, setInput] = useState("");
    const [amenities, setAmenities] = useState([]);

    const handelAddAmenity = () => {
        if (!input.trim()) return;
        setAmenities([...amenities, input]);
        setInput("");
    };
    const removeAmenity = (item) => {
        setAmenities(amenities.filter((a) => a !== item));
    };


    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        // console.log(data)

        const newFacilityData = {
            ...data,
            slots: timeSlot,
            amenities,
        };
        // console.log(newFacilityData)
        const { data: tokenData } = await authClient.token()
        const req = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/facilities/user/${userId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(newFacilityData)
        });
        const res = await req.json();
        router.refresh('/manage-facilities')
        toast.success('Your Facility Updated Successfully!!')
    };



    return (
        <Modal>
            <Button
                variant="solid"
                className="flex-1 h-12 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-1.5 text-sm"
            >
                <Pencil className="w-4 h-4" />
                Update
            </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-xl lg:max-w-fit">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <BiEdit className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Edit Your Facilitie</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <Form onSubmit={onSubmit}>
                                    <Fieldset>
                                        <FieldGroup className="grid md:grid-cols-2 gap-7">

                                            <TextField defaultValue={name} isRequired name="name">
                                                <Label className="text-gray-700">
                                                    Facility Name
                                                    <span className="text-emerald-500 ml-1">*</span>
                                                </Label>
                                                <Input className={'border border-gray-300/30'} placeholder="Greenfield Football Turf" />
                                            </TextField>

                                            <TextField defaultValue={facility_type} isRequired name="facility_type">
                                                <Label className="text-gray-700">
                                                    Facility Type
                                                    <span className="text-emerald-500 ml-1">*</span>
                                                </Label>
                                                <Input className={'border border-gray-300/30'} placeholder="Football / Tennis / Badminton" />
                                            </TextField>

                                            <TextField defaultValue={location} isRequired name="location">
                                                <Label className="text-gray-700">
                                                    Location
                                                    <span className="text-emerald-500 ml-1">*</span>
                                                </Label>
                                                <Input className={'border border-gray-300/30'} placeholder="Dhaka, Bangladesh" />
                                            </TextField>

                                            <TextField defaultValue={contact_number} name="contact_number">
                                                <Label>Contact Number</Label>
                                                <Input className={'border border-gray-300/30'} placeholder="+8801712345678" />
                                            </TextField>

                                            <TextField defaultValue={price_per_hour} name="price_per_hour" type="number">
                                                <Label>Price Per Hour</Label>
                                                <Input className={'border border-gray-300/30'} placeholder="500" />
                                            </TextField>

                                            <TextField defaultValue={capacity} name="capacity" type="number">
                                                <Label>Audience Capacity</Label>
                                                <Input className={'border border-gray-300/30'} placeholder="50" />
                                            </TextField>

                                            <TextField defaultValue={maximum_player} name="maximum_player" type="number">
                                                <Label>Maximum Player</Label>
                                                <Input className={'border border-gray-300/30'} placeholder="22" />
                                            </TextField>

                                            <TextField defaultValue={availability} name="availability">
                                                <Label>Availability</Label>
                                                <Input className={'border border-gray-300/30'} placeholder="Available / Unavailable" />
                                            </TextField>

                                            <TextField defaultValue={opening_time} name="opening_time">
                                                <Label>Opening Time</Label>
                                                <Input className={'border border-gray-300/30'} placeholder="8:00 AM" />
                                            </TextField>

                                            <TextField defaultValue={closing_time} name="closing_time">
                                                <Label>Closing Time</Label>
                                                <Input className={'border border-gray-300/30'} placeholder="11:00 PM" />
                                            </TextField>

                                            <TextField defaultValue={rating} name="rating">
                                                <Label>Rating</Label>
                                                <Input className={'border border-gray-300/30'} placeholder="4.5" />
                                            </TextField>

                                            <TextField defaultValue={total_reviews} name="total_reviews">
                                                <Label>Total Reviews</Label>
                                                <Input className={'border border-gray-300/30'} placeholder="120" />
                                            </TextField>

                                            <TextField defaultValue={image} name="image">
                                                <Label>Image URL</Label>
                                                <Input className={'border border-gray-300/30'} placeholder="https://image-url.com" />
                                            </TextField>

                                            <div className="space-y-3 max-w-md">

                                                <label className="font-semibold text-gray-700">
                                                    Amenities
                                                </label>

                                                <div className="flex gap-2">

                                                    <input
                                                        type="text"
                                                        placeholder="Add amenity..."
                                                        value={input}
                                                        onChange={(e) => setInput(e.target.value)}
                                                        className="flex-1 border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                                    />

                                                    <button
                                                        type="button"
                                                        onClick={handelAddAmenity}
                                                        className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 rounded-xl flex items-center justify-center shadow-sm"
                                                    >
                                                        <Plus size={18} />
                                                    </button>

                                                </div>

                                                <div className="flex flex-wrap gap-2">

                                                    {amenities.map((item, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-sm border border-emerald-200"
                                                        >
                                                            {item}

                                                            <button
                                                                type="button"
                                                                onClick={() => removeAmenity(item)}
                                                                className="hover:text-red-500"
                                                            >
                                                                <Xmark size={14} />
                                                            </button>

                                                        </div>
                                                    ))}

                                                </div>

                                            </div>

                                            <div className="space-y-3 max-w-md">
                                                <label className="font-semibold text-gray-700">Select Slot</label>

                                                {/* Dropdown for adding slots */}
                                                <select
                                                    value=""
                                                    onChange={(e) => {
                                                        const value = e.target.value;
                                                        if (value && !timeSlot.includes(value)) {
                                                            setTimeSlot([...timeSlot, value]);
                                                        }
                                                    }}
                                                    className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                                >
                                                    <option value="">Choose a slot...</option>
                                                    <option value="8:00 AM - 9:00 AM">8:00 AM - 9:00 AM</option>
                                                    <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
                                                    <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                                                    <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                                                </select>

                                                {/* Display selected slots as tags */}
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {timeSlot.map((slot) => (
                                                        <div
                                                            key={slot}
                                                            className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-sm border border-emerald-200"
                                                        >
                                                            {slot}
                                                            <button
                                                                type="button"
                                                                onClick={() => setTimeSlot(timeSlot.filter((s) => s !== slot))}
                                                                className="hover:text-red-500"
                                                            >
                                                                <Xmark size={14} />
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <TextField defaultValue={description} name="description" className="md:col-span-2">
                                                <Label>Description</Label>
                                                <TextArea placeholder="Write facility description..." />
                                            </TextField>

                                        </FieldGroup>

                                        <div className="flex justify-end gap-4 mt-10">

                                            <Button
                                                slot="close"
                                                type="submit"
                                                size="lg"
                                                className="bg-emerald-500 hover:bg-emerald-600 text-white"
                                            >
                                                <FloppyDisk />
                                                Update Facility
                                            </Button>
                                        </div>
                                    </Fieldset>
                                </Form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default UpdateFacilities;