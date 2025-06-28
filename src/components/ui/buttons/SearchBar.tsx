import React from 'react';

interface SearchBarProps {
  searchText: string;
  setSearchText: (text: string) => void;
}

const SearchBar = ({ searchText, setSearchText }: SearchBarProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
  };

  const handleReset = () => {
    setSearchText(''); 
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form className="form relative" onSubmit={handleSubmit}>
        <button type="button" className="absolute left-3 top-1/2 -translate-y-1/2 p-1 z-10">
          <svg width={17} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search" className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700">
            <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <input 
          className="input w-full rounded-full pl-10 pr-12 py-3 text-sm sm:text-base border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md" 
          placeholder="Search Pokémon..." 
          type="text" 
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {searchText && (
          <button 
            type="button" 
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 z-10"
            onClick={handleReset}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 hover:text-gray-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </form>
    </div>
  );
}

export default SearchBar;