import React from 'react';

interface SearchBarProps {
  searchText: string;
  setSearchText: (text: string) => void;
  onSearch?: (searchText: string) => void; // Optional search handler
  placeholder?: string;
}

const SearchBar = ({ 
  searchText, 
  setSearchText, 
  onSearch,
  placeholder = "Search..." 
}: SearchBarProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Trigger search when form is submitted (Enter key pressed)
    if (onSearch && searchText.trim()) {
      onSearch(searchText.trim());
    }
  };

  const handleReset = () => {
    setSearchText('');
    // Optionally trigger search with empty string to show all results
    if (onSearch) {
      onSearch('');
    }
  };

  const handleSearchClick = () => {
    // Trigger search when search icon is clicked
    if (onSearch && searchText.trim()) {
      onSearch(searchText.trim());
    }
  };

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <button 
        type="button" 
        className="absolute left-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
        onClick={handleSearchClick}
        aria-label="Search"
      >
        <svg 
          width={17} 
          height={16} 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-5 h-5 text-gray-700"
        >
          <path 
            d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" 
            stroke="currentColor" 
            strokeWidth="1.333" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </button>
      
      <input 
        className="w-full rounded-full px-8 py-3 border-2 border-gray-200 focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md bg-white" 
        placeholder={placeholder}
        type="text" 
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      
      {searchText && (
        <button 
          type="button" 
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
          onClick={handleReset}
          aria-label="Clear search"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-5 h-5 text-gray-700" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      )}
    </form>
  );
}

export default SearchBar;