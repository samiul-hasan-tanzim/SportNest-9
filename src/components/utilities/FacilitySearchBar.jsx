'use client'
import { SearchField } from '@heroui/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const FacilitySearchBar = () => {
    const [search, setSearch] = useState()
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

    return (
        <div className="mb-15 flex justify-center">
            <form className="relative w-full max-w-xl">

                <SearchField className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />

                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    name="search"
                    placeholder="Search facilities (football, badminton, location...)"
                    className="w-full pl-11 pr-28 py-3 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                />

                <button
                    onClick={handelSearch}
                    type="submit"
                    className="absolute right-1 top-1/2 -translate-y-1/2 px-5 py-2 rounded-full bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default FacilitySearchBar;