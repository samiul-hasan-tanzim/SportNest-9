'use client'
import { Button, Dropdown, Label, SearchField } from '@heroui/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const FacilitySearchBar = () => {
    const [search, setSearch] = useState()
    const [type, setType] = useState("")
    // console.log(type)
    const router = useRouter()
    const searchQuery = useSearchParams()

    const sports = ["Football", "Badminton", "Cricket", "Tennis"];


    const handelSearch = (e) => {
        e.preventDefault();
        const params = new URLSearchParams(searchQuery?.toString() || '')

        if (search) {
            params.set("searchQuery", search)
        }
        else {
            params.delete("searchQuery")
        }
        router.push(`/facilities?${params.toString()}`)
        // setSearch('')
    }


    const handleFilter = (e) => {
        const value = e.target.value;
        setType(value);

        const params = new URLSearchParams(searchQuery?.toString() || '');
        if (value) {
            params.set("type", value);
        } else {
            params.delete("type");
        }

        router.push(`/facilities?${params.toString()}`);
    };


    return (
        <div className="mb-10 flex justify-center px-4">
            <form className="w-full max-w-3xl flex flex-col-reverse sm:flex-row items-stretch sm:items-center gap-3">

                <Dropdown>
                    <Button aria-label="Sports" variant="secondary" className="w-full md:w-50 sm:w-auto h-12 rounded-full border border-gray-300 bg-white/90 backdrop-blur-sm px-4 text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-200">
                        {type || "All Sports"}
                    </Button>
                    <Dropdown.Popover className="w-full md:w-fit">
                        <Dropdown.Menu onAction={(key) => handleFilter({ target: { value: key } })}>
                            <Dropdown.Item id="" textValue="">
                                <Label>All Sports</Label>
                            </Dropdown.Item>
                            {sports.map((sport) => (
                                <Dropdown.Item key={sport} id={sport} textValue={sport}>
                                    <Label>{sport}</Label>
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown.Popover>
                </Dropdown>

                <div className="relative flex-1">
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        name="search"
                        placeholder="Search facilities (football, badminton, location...)"
                        className="w-full pl-12 pr-28 sm:pr-32 py-3 rounded-full border border-gray-300 bg-white/90 backdrop-blur-sm shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-200"
                    />

                    <div onClick={handelSearch} className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer">
                        <button type="submit" className="px-4 sm:px-6 py-2 rounded-full bg-emerald-500 text-white text-xs sm:text-sm font-semibold hover:bg-emerald-600 transition duration-200 shadow-md">
                            <span className="hidden sm:inline">Search</span>
                            <FaSearch className="sm:hidden" />
                        </button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default FacilitySearchBar;