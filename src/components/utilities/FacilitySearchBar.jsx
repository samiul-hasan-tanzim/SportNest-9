'use client'
import { SearchField } from '@heroui/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const FacilitySearchBar = () => {
    const [search, setSearch] = useState()
    const [type, setType] = useState("")
    // console.log(type)
    const router = useRouter()
    const searchQuery = useSearchParams()


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
        setSearch('')
    }


    const handleFilter = (e) => {
        const params = new URLSearchParams(searchQuery?.toString() || '')

        if (e.target.value) {
            params.set("type", e.target.value)
        }
        else {
            params.delete("type")
        }

        router.push(`/facilities?${params.toString()}`)
    }


    return (
        <div className="mb-10 flex justify-center px-4">
            <form className="w-full max-w-3xl flex items-center gap-3">
                <select
                    value={type}
                    onChange={handleFilter}
                    className="h-12 rounded-full border border-gray-300 bg-white/90 backdrop-blur-sm px-4 text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-200"
                >
                    <option value="">All Sports</option>
                    <option value="Football">Football</option>
                    <option value="Badminton">Badminton</option>
                    <option value="Cricket">Cricket</option>
                    <option value="Tennis">Tennis</option>
                </select>


                <div className="relative flex-1">
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        name="search"
                        placeholder="Search facilities (football, badminton, location...)"
                        className="w-full pl-12 pr-32 py-3 rounded-full border border-gray-300 bg-white/90 backdrop-blur-sm shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-200"
                    />
                    <button
                        onClick={handelSearch}
                        type="submit"
                        className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 rounded-full bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition duration-200 shadow-md"
                    >
                        Search
                    </button>
                </div>

            </form>
        </div>
    );
};

export default FacilitySearchBar;