import React from 'react'

const Pagination = ({ moveToPrev, totalPages, paginate, moveToNext, currentPage }) => {
  return (
    <div className="nav-links flex-wrap gap-4  md:p-5 my-5 md:justify-center items-center m-auto text-center">
      <button
        onClick={moveToPrev}
        className={`py-1 px-2 min-[200px]:m-1 min-[200px]:text-sm text-white font-semibold rounded-md font-sans cursor-pointer bg-black`}
      >
        Prev
      </button>
      {
        Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index)}
            className={`py-1 px-2 min-[200px]:m-[1px] min-[200px]:text-sm text-lg text-white font-semibold rounded-lg font-sans cursor-pointer ${currentPage === index + 1 ? 'bg-gray-800' : 'bg-gray-700'}`}
          >
            {index + 1}
          </button>
        ))
      }
      <button
        onClick={moveToNext}
        className={`py-1 px-2 min-[200px]:m-1  min-[200px]:text-sm text-white font-semibold rounded-md font-sans cursor-pointer ease-in bg-black`}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
