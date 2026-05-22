export const allFacilitiesData = async (searchQuery = '', type = '') => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URI}/facilities?search=${searchQuery}&type=${type}`
    );

    return res.json();
};