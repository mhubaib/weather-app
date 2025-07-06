import { useState } from 'react'
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        onSearch(searchTerm)
    }

    return (
        <form onSubmit={handleSearch}>
            <div className='bg-slate-800 flex items-center justify-center gap-4 px-7 rounded-3xl shadow-2xl'>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search city"
                className="min-w-full p-3 outline-none border-r-2 border-white font-semibold text-white"
            />
            <button type="submit" className="text-white"><FaSearch /></button>
            </div>
        </form>
    )
}

export default SearchBar;