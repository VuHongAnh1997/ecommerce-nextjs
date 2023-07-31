import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex items-center justify-center space-x-2 p-3 my-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage + 1 === 1}
      >
        <ChevronLeftIcon className="h-6 w-6 text-green-500" />
      </button>

      <div className="bg-green-500 w-8 h-8 flex items-center justify-center">
        <div>{currentPage + 1}</div>
      </div>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage + 1 === totalPages}
      >
        <ChevronRightIcon className="h-6 w-6 text-green-500 " />
      </button>
    </div>
  );
};

export default Pagination;
