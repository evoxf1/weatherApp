import React, { useState } from "react";

interface SearchInputProps {
  onSearch: (city: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSumit = (event: React.FormEvent) => {
    event.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };  

  return (
    <div className="flex justify-center items-center flex-col mt-32">
      <h1 className="text-center text-2xl mb-4"> Find Weather</h1>
      <form onSubmit={handleSumit} className="w-full max-w-md mt-10 ">
        <div className="flex items-center border-b border-gray-300 py-2">
          <input
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={handleInputChange}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          />
          <button
            className="bg-purple-500 hover:blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
      SearchInput
    </div>
  );
};

export default SearchInput;
