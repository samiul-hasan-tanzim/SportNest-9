"use client"
import { authClient } from "@/lib/auth-client";
import { DateField, Label } from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
import { FaMapMarkerAlt, FaUsers, FaStar, FaClock, FaPhone, FaCheckCircle } from "react-icons/fa";

const FacilitiesDetailsCard = ({ facility }) => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user

    const [date, setDate] = useState(null)
    const [timeSlot, setTimeSlot] = useState(facility.slots[0] || '')
    const [hours, setHours] = useState('1')

    const handelBookingData = async () => {
        const bookingData = {
            facility_id: facility._id,
            user_email: user?.email,
            date: new Date(date),
            timeSlot,
            hours,
            price: facility.price_per_hour,
            status: 'pending'
        }
        console.log(bookingData)
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URI}/bookings`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
        const data = await res.json()
        console.log(data)
    }



    return (
        <div>
            <div className="relative w-full h-100 rounded-2xl overflow-hidden mb-10">
                <Image
                    src={facility.image}
                    alt={facility.name}
                    fill
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/50 flex items-end p-8">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                            {facility.name}
                        </h1>

                        <div className="flex items-center gap-4 text-gray-200 text-sm">

                            <span className="flex items-center gap-2">
                                <FaMapMarkerAlt />
                                {facility.location}
                            </span>

                            <span className="flex items-center gap-2">
                                <FaStar className="text-yellow-400" />
                                {facility.rating} ({facility.total_reviews} reviews)
                            </span>

                            <span className="flex items-center gap-2">
                                <FaUsers />
                                Max {facility.maximum_player} Players
                            </span>

                        </div>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">

                <div className="lg:col-span-2 space-y-8">

                    <div className="bg-white shadow-md rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-3">About Facility</h2>
                        <p className="text-gray-600 leading-relaxed">
                            {facility.description}
                        </p>
                    </div>

                    <div className="bg-white shadow-md rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-5">Facility Information</h2>

                        <div className="grid md:grid-cols-2 gap-4 text-gray-600">

                            <p className="flex items-center gap-2">
                                <FaClock className="text-emerald-500" />
                                Open: {facility.opening_time}
                            </p>

                            <p className="flex items-center gap-2">
                                <FaClock className="text-emerald-500" />
                                Close: {facility.closing_time}
                            </p>

                            <p className="flex items-center gap-2">
                                <FaUsers className="text-emerald-500" />
                                Capacity: {facility.capacity}
                            </p>

                            <p className="flex items-center gap-2">
                                <FaPhone className="text-emerald-500" />
                                {facility.contact_number}
                            </p>

                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-5">Amenities</h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {facility.amenities.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg text-sm"
                                >
                                    <FaCheckCircle className="text-emerald-500" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-xl p-6">
                        <h2 className="text-xl font-semibold mb-5">Available Time Slots</h2>

                        <div className="flex flex-wrap gap-3">
                            {facility.slots.map((slot, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium"
                                >
                                    {slot}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div>

                    <div className="bg-white shadow-xl rounded-xl p-6 sticky top-28">

                        <h3 className="text-xl font-semibold mb-4">
                            Book This Facility
                        </h3>

                        <p className="text-emerald-600 font-bold text-lg mb-4">
                            ৳ {facility.price_per_hour} / hour
                        </p>



                        {/*Booking Data*/}
                        <div className="space-y-4">

                            <div>
                                <DateField className="w-[256px]" name="date" onChange={setDate}>
                                    <Label>Date</Label>
                                    <DateField.Group>
                                        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                                    </DateField.Group>
                                </DateField>
                            </div>

                            <div>
                                <label className="text-sm text-gray-600">Select Time Slot</label>

                                <select className="w-full border rounded-lg px-3 py-2 mt-1" onChange={(e) => setTimeSlot(e.target.value)}>
                                    {facility.slots.map((slot, i) => (
                                        <option key={i}>{slot}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="text-sm text-gray-600">Hours</label>
                                <input
                                    onChange={(e) => setHours(e.target.value)}
                                    type="number"
                                    min="1"
                                    value={hours}
                                    className="w-full border rounded-lg px-3 py-2 mt-1"
                                />
                            </div>

                            <button onClick={handelBookingData} className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition">
                                Confirm Booking
                            </button>

                        </div>

                        <p className="text-xs text-gray-500 mt-3">
                            Status: Pending after booking approval
                        </p>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default FacilitiesDetailsCard;