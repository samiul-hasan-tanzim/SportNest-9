"use client";
import { authClient } from "@/lib/auth-client";
import { FloppyDisk, Plus, Xmark } from "@gravity-ui/icons";
import { Button, Fieldset, FieldGroup, Form, Input, Label, TextArea, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddFacilityPage = () => {
    const { data: session, isPending, } = authClient.useSession()
    const user = session?.user

    const router = useRouter()
    const [timeSlot, setTimeSlot] = useState([]);
    const [input, setInput] = useState("");
    const [amenities, setAmenities] = useState([]);

    const toggleSlot = (slot) => {
        if (timeSlot.includes(slot)) {
            setTimeSlot(timeSlot.filter(s => s !== timeSlot));
        } else {
            setTimeSlot([...timeSlot, timeSlot]);
        }
    };

    const addAmenity = () => {
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

        const newFacilityData = {
            ...data,
            slots: timeSlot,
            amenities,
            userId: user?.id
        };
        console.log(newFacilityData)
        const req = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/facilities`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFacilityData)
        });
        const res = await req.json();
        console.log(res)
        if (res.insertedId) {
            // router.refresh()
            router.push('/manage-facilities')
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="mb-10">
                <h1 className="text-4xl font-bold bg-linear-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                    Add New Facility
                </h1>

                <p className="text-gray-500 mt-2 text-lg">
                    Create a sports facility that users can book from the platform
                </p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-lg p-10">
                <Form onSubmit={onSubmit}>
                    <Fieldset>
                        <FieldGroup className="grid md:grid-cols-2 gap-7">

                            <TextField isRequired name="name">
                                <Label className="text-gray-700">
                                    Facility Name
                                    <span className="text-emerald-500 ml-1">*</span>
                                </Label>
                                <Input className={'border border-gray-300/30'} placeholder="Greenfield Football Turf" />
                            </TextField>

                            <TextField isRequired name="facility_type">
                                <Label className="text-gray-700">
                                    Facility Type
                                    <span className="text-emerald-500 ml-1">*</span>
                                </Label>
                                <Input className={'border border-gray-300/30'} placeholder="Football / Tennis / Badminton" />
                            </TextField>

                            <TextField isRequired name="location">
                                <Label className="text-gray-700">
                                    Location
                                    <span className="text-emerald-500 ml-1">*</span>
                                </Label>
                                <Input className={'border border-gray-300/30'} placeholder="Dhaka, Bangladesh" />
                            </TextField>

                            <TextField name="contact_number">
                                <Label>Contact Number</Label>
                                <Input className={'border border-gray-300/30'} placeholder="+8801712345678" />
                            </TextField>

                            <TextField name="price_per_hour" type="number">
                                <Label>Price Per Hour</Label>
                                <Input className={'border border-gray-300/30'} placeholder="500" />
                            </TextField>

                            <TextField name="capacity" type="number">
                                <Label>Audience Capacity</Label>
                                <Input className={'border border-gray-300/30'} placeholder="50" />
                            </TextField>

                            <TextField name="maximum_player" type="number">
                                <Label>Maximum Player</Label>
                                <Input className={'border border-gray-300/30'} placeholder="22" />
                            </TextField>

                            <TextField name="availability">
                                <Label>Availability</Label>
                                <Input className={'border border-gray-300/30'} placeholder="Available / Unavailable" />
                            </TextField>

                            <TextField name="opening_time">
                                <Label>Opening Time</Label>
                                <Input className={'border border-gray-300/30'} placeholder="8:00 AM" />
                            </TextField>

                            <TextField name="closing_time">
                                <Label>Closing Time</Label>
                                <Input className={'border border-gray-300/30'} placeholder="11:00 PM" />
                            </TextField>

                            <TextField name="rating">
                                <Label>Rating</Label>
                                <Input className={'border border-gray-300/30'} placeholder="4.5" />
                            </TextField>

                            <TextField name="total_reviews">
                                <Label>Total Reviews</Label>
                                <Input className={'border border-gray-300/30'} placeholder="120" />
                            </TextField>

                            <TextField name="image">
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
                                        onClick={addAmenity}
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

                            <TextField name="description" className="md:col-span-2">
                                <Label>Description</Label>
                                <TextArea placeholder="Write facility description..." />
                            </TextField>

                        </FieldGroup>

                        <div className="flex gap-4 mt-10">

                            <Button
                                type="submit"
                                size="lg"
                                className="bg-emerald-500 hover:bg-emerald-600 text-white"
                            >
                                <FloppyDisk />
                                Add Facility
                            </Button>

                            <Button
                                variant="secondary"
                                size="lg"
                                type="reset"
                            >
                                Reset
                            </Button>

                        </div>

                    </Fieldset>

                </Form>

            </div>

        </div>
    );
};

export default AddFacilityPage;