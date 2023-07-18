import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full border md:border-0 border-slate-600"
    >
      <input
        type="text"
        name="query"
        value={query}
        onChange={handleChange}
        placeholder="Tìm kiếm"
        className="pl-4 pr-12 py-2 max-w-xs w-full bg-transparent focus:outline-none border-0 md:border border-gray-300 rounded-md  text-slate-600 focus:bg-slate-100 focus:border-green-200 h-12"
      />
      <button
        type="submit"
        className="absolute right-0 top-0 mt-1.5 mr-1.5 rounded-full p-2 hover:bg-slate-300"
      >
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
      </button>
    </form>
  );
};

export default SearchInput;
