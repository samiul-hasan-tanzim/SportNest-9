"use client";
import { authClient } from "@/lib/auth-client";
import { FloppyDisk, Plus, Xmark } from "@gravity-ui/icons";
import { Button, Fieldset, FieldGroup, Form, Input, Label, TextArea, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddFacilityPage = () => {
    const { data: session, isPending, } = authClient.useSession()
    const user = session?.user
    // console.log(user)

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
            userId: user?.id,
            userEmail: user?.email
        };
        // console.log(newFacilityData)


        const { data: tokenData } = await authClient.token()
        // console.log(tokenData)
        const req = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/facilities`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(newFacilityData)
        });
        const res = await req.json();
        // console.log(res)
        if (res.insertedId) {
            // router.refresh()
            router.push('/manage-facilities')
        }
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-emerald-50 py-16 px-4 sm:px-6">

            <div className="max-w-7xl mx-auto">
                <div className="mb-12 text-center">

                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-5">
                        Sports Facility Management
                    </div>

                    <h1 className="text-5xl font-black tracking-tight bg-linear-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                        Add New Facility
                    </h1>

                    <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
                        Create a sports facility that users can book from the platform
                    </p>

                </div>
                <div className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/80 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
                    <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl" />

                    <div className="relative p-6 md:p-10 lg:p-14">

                        <Form onSubmit={onSubmit}>

                            <Fieldset>

                                <FieldGroup className="grid md:grid-cols-2 gap-7">
                                    <TextField isRequired name="name">

                                        <Label className="mb-2 text-sm font-semibold text-gray-700">
                                            Facility Name
                                            <span className="text-emerald-500 ml-1">*</span>
                                        </Label>

                                        <Input
                                            placeholder="Greenfield Football Turf"
                                            className="border border-gray-200 bg-white/70 backdrop-blur-sm rounded-2xl h-12 px-4 shadow-sm hover:border-emerald-300 focus-within:border-emerald-500 transition-all duration-300"
                                        />

                                    </TextField>
                                    <TextField name="email">

                                        <Label className="mb-2 text-sm font-semibold text-gray-700">
                                            Your Email
                                            <span className="text-emerald-500 ml-1">*</span>
                                        </Label>

                                        <Input
                                            value={user?.email}
                                            placeholder="example@gmail.com"
                                            className="border border-gray-200 bg-gray-100/80 backdrop-blur-sm rounded-2xl h-12 px-4 shadow-sm"
                                        />

                                    </TextField>
                                    <TextField isRequired name="facility_type">

                                        <Label className="mb-2 text-sm font-semibold text-gray-700">
                                            Facility Type
                                            <span className="text-emerald-500 ml-1">*</span>
                                        </Label>

                                        <Input
                                            placeholder="Football / Tennis / Badminton"
                                            className="border border-gray-200 bg-white/70 backdrop-blur-sm rounded-2xl h-12 px-4 shadow-sm hover:border-emerald-300 focus-within:border-emerald-500 transition-all duration-300"
                                        />

                                    </TextField>
                                    <TextField isRequired name="location">

                                        <Label className="mb-2 text-sm font-semibold text-gray-700">
                                            Location
                                            <span className="text-emerald-500 ml-1">*</span>
                                        </Label>

                                        <Input
                                            placeholder="Dhaka, Bangladesh"
                                            className="border border-gray-200 bg-white/70 backdrop-blur-sm rounded-2xl h-12 px-4 shadow-sm hover:border-emerald-300 focus-within:border-emerald-500 transition-all duration-300"
                                        />

                                    </TextField>
                                    <TextField name="contact_number">

                                        <Label className="mb-2 text-sm font-semibold text-gray-700">
                                            Contact Number
                                        </Label>

                                        <Input
                                            placeholder="+8801712345678"
                                            className="border border-gray-200 bg-white/70 backdrop-blur-sm rounded-2xl h-12 px-4 shadow-sm hover:border-emerald-300 focus-within:border-emerald-500 transition-all duration-300"
                                        />

                                    </TextField>
                                    <TextField name="price_per_hour" type="number">

                                        <Label className="mb-2 text-sm font-semibold text-gray-700">
                                            Price Per Hour
                                        </Label>

                                        <Input
                                            placeholder="500"
                                            className="border border-gray-200 bg-white/70 backdrop-blur-sm rounded-2xl h-12 px-4 shadow-sm hover:border-emerald-300 focus-within:border-emerald-500 transition-all duration-300"
                                        />

                                    </TextField>
                                    <TextField name="capacity" type="number">

                                        <Label className="mb-2 text-sm font-semibold text-gray-700">
                                            Audience Capacity
                                        </Label>

                                        <Input
                                            placeholder="50"
                                            className="border border-gray-200 bg-white/70 backdrop-blur-sm rounded-2xl h-12 px-4 shadow-sm hover:border-emerald-300 focus-within:border-emerald-500 transition-all duration-300"
                                        />

                                    </TextField>
                                    <TextField name="maximum_player" type="number">

                                        <Label className="mb-2 text-sm font-semibold text-gray-700">
                                            Maximum Player
                                        </Label>

                                        <Input
                                            placeholder="22"
                                            className="border border-gray-200 bg-white/70 backdrop-blur-sm rounded-2xl h-12 px-4 shadow-sm hover:border-emerald-300 focus-within:border-emerald-500 transition-all duration-300"
                                        />

                                    </TextField>
                                    <TextField name="availability">

                                        <Label className="mb-2 text-sm font-semibold text-gray-700">
                                            Availability
                                        </Label>

                                        <Input
                                            placeholder="Available / Unavailable"
                                            className="border border-gray-200 bg-white/70 backdrop-blur-sm rounded-2xl h-12 px-4 shadow-sm hover:border-emerald-300 focus-within:border-emerald-500 transition-all duration-300"
                                        />

                                    </TextField>
                                    <TextField name="opening_time">

                                        <Label className="mb-2 text-sm font-semibold text-gray-700">
                                            Opening Time
                                        </Label>

                                        <Input
                                            placeholder="8:00 AM"
                                            className="border border-gray-200 bg-white/70 backdrop-blur-sm rounded-2xl h-12 px-4 shadow-sm hover:border-emerald-300 focus-within:border-emerald-500 transition-all duration-300"
                                        />

                                    </TextField>
                                    <TextField name="closing_time">

                                        <Label className="mb-2 text-sm font-semibold text-gray-700">
                                            Closing Time
                                        </Label>

                                        <Input
                                            placeholder="11:00 PM"
                                            className="border border-gray-200 bg-white/70 backdrop-blur-sm rounded-2xl h-12 px-4 shadow-sm hover:border-emerald-300 focus-within:border-emerald-500 transition-all duration-300"
                                        />

                                    </TextField>
                                    <TextField name="rating">

                                        <Label className="mb-2 text-sm font-semibold text-gray-700">
                                            Rating
                                        </Label>

                                        <Input
                                            placeholder="4.5"
                                            className="border border-gray-200 bg-white/70 backdrop-blur-sm rounded-2xl h-12 px-4 shadow-sm hover:border-emerald-300 focus-within:border-emerald-500 transition-all duration-300"
                                        />

                                    </TextField>
                                    <TextField name="total_reviews">

                                        <Label className="mb-2 text-sm font-semibold text-gray-700">
                                            Total Reviews
                                        </Label>

                                        <Input
                                            placeholder="120"
                                            className="border border-gray-200 bg-white/70 backdrop-blur-sm rounded-2xl h-12 px-4 shadow-sm hover:border-emerald-300 focus-within:border-emerald-500 transition-all duration-300"
                                        />

                                    </TextField>
                                    <TextField name="image">

                                        <Label className="mb-2 text-sm font-semibold text-gray-700">
                                            Image URL
                                        </Label>

                                        <Input
                                            placeholder="https://image-url.com"
                                            className="border border-gray-200 bg-white/70 backdrop-blur-sm rounded-2xl h-12 px-4 shadow-sm hover:border-emerald-300 focus-within:border-emerald-500 transition-all duration-300"
                                        />

                                    </TextField>
                                    <div className="space-y-4 max-w-md">

                                        <div>

                                            <label className="text-sm font-semibold text-gray-700">
                                                Amenities
                                            </label>

                                            <p className="text-xs text-gray-400 mt-1">
                                                Add facility features & services
                                            </p>

                                        </div>

                                        <div className="flex gap-3">

                                            <input
                                                type="text"
                                                placeholder="Add amenity..."
                                                value={input}
                                                onChange={(e) => setInput(e.target.value)}
                                                className="flex-1 h-12 rounded-2xl border border-gray-200 bg-white px-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all"
                                            />

                                            <button
                                                type="button"
                                                onClick={addAmenity}
                                                className="h-12 w-12 rounded-2xl bg-linear-to-r from-emerald-500 to-teal-500 text-white flex items-center justify-center shadow-md hover:scale-105 transition-all duration-300"
                                            >
                                                <Plus size={18} />
                                            </button>

                                        </div>

                                        <div className="flex flex-wrap gap-2 pt-2">

                                            {amenities.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="group flex items-center gap-2 bg-linear-to-r from-emerald-50 to-teal-50 text-emerald-700 border border-emerald-200 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                                                >
                                                    {item}

                                                    <button
                                                        type="button"
                                                        onClick={() => removeAmenity(item)}
                                                        className="opacity-70 hover:opacity-100 hover:text-red-500 transition"
                                                    >
                                                        <Xmark size={14} />
                                                    </button>

                                                </div>
                                            ))}

                                        </div>

                                    </div>
                                    <div className="space-y-4 max-w-md">

                                        <div>

                                            <label className="text-sm font-semibold text-gray-700">
                                                Select Slot
                                            </label>

                                            <p className="text-xs text-gray-400 mt-1">
                                                Choose available booking schedule
                                            </p>

                                        </div>

                                        <select
                                            value=""
                                            onChange={(e) => {
                                                const value = e.target.value;

                                                if (value && !timeSlot.includes(value)) {
                                                    setTimeSlot([...timeSlot, value]);
                                                }
                                            }}
                                            className="w-full h-12 rounded-2xl border border-gray-200 bg-white px-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all"
                                        >
                                            <option value="">Choose a slot...</option>
                                            <option value="8:00 AM - 9:00 AM">8:00 AM - 9:00 AM</option>
                                            <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
                                            <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                                            <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                                        </select>

                                        <div className="flex flex-wrap gap-2 pt-2">

                                            {timeSlot.map((slot) => (
                                                <div
                                                    key={slot}
                                                    className="group flex items-center gap-2 bg-linear-to-r from-emerald-50 to-teal-50 text-emerald-700 border border-emerald-200 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                                                >
                                                    {slot}

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setTimeSlot(
                                                                timeSlot.filter((s) => s !== slot)
                                                            )
                                                        }
                                                        className="opacity-70 hover:opacity-100 hover:text-red-500 transition"
                                                    >
                                                        <Xmark size={14} />
                                                    </button>

                                                </div>
                                            ))}

                                        </div>

                                    </div>
                                    <TextField
                                        name="description"
                                        className="md:col-span-2"
                                    >

                                        <Label className="mb-2 text-sm font-semibold text-gray-700">
                                            Description
                                        </Label>

                                        <TextArea
                                            placeholder="Write facility description..."
                                            className="border border-gray-200 bg-white/70 rounded-3xl p-4 shadow-sm min-h-35 focus-within:border-emerald-500 transition-all"
                                        />

                                    </TextField>

                                </FieldGroup>
                                <div className="flex gap-4 mt-14">

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="h-14 px-8 rounded-2xl bg-linear-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-lg hover:shadow-emerald-200 hover:scale-[1.02] transition-all duration-300"
                                    >
                                        <FloppyDisk />
                                        Add Facility
                                    </Button>

                                    <Button
                                        variant="secondary"
                                        size="lg"
                                        type="reset"
                                        className="h-14 px-8 rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 font-semibold transition-all"
                                    >
                                        Reset
                                    </Button>

                                </div>

                            </Fieldset>

                        </Form>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default AddFacilityPage;