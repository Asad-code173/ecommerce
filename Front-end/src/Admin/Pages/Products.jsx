import React from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { FaPlusSquare } from 'react-icons/fa';


const Products = () => {
  return (
    <>
      <div className='mt-8 mx-4 flex justify-between'>
        <h1 className='text-2xl font-bold -ml-[26%] sm:-ml-[0%]'>Products</h1>
    <div>
      <FaPlusSquare className='w-8 h-8 text-2xl cursor-pointer' title='Add Product'/>
    </div>
      </div>
      <div className='-ml-[26%] sm:ml-4 mt-6 mx-4 bg-white border border-gray-300 rounded-lg shadow-md'>
        <table className='w-full divide-y divide-gray-200'>
          <thead className='bg-gray-200'>
            <tr>
              <th className='py-3 px-2 text-left text-xs font-medium text-gray-700'>Name</th>
              <th className='py-3 px-2 text-left text-xs font-medium text-gray-700'>Image</th>
              <th className='py-3 px-2 text-left text-xs font-medium text-gray-700'>Description</th>
              <th className='py-3 px-2 text-left text-xs font-medium text-gray-700'>Price</th>
              <th className='py-3 px-2 text-left text-xs font-medium text-gray-700'>Stock</th>
              <th className='py-3 px-2 text-left text-xs font-medium text-gray-700'>Category</th>
              <th className='py-3 px-2 text-left text-xs font-medium text-gray-700'>Action</th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            <tr className='hover:bg-gray-100'>
              <td className='py-2 px-2 text-sm text-gray-700'>Asad Ali</td>
              <td className='py-2 px-2 text-sm text-gray-700 truncate'>asadfarzand711@example.com</td>
              <td className='py-2 px-2 text-sm text-gray-700'>lorem</td>
              <td className='py-2 px-2 text-sm text-gray-700 truncate'>Interested in the new collection</td>
              <td className='py-2 px-2 text-sm text-gray-700'>Pending</td>
              <td className='py-2 px-2 text-sm text-gray-700'>Men</td>
              <td className='py-2 px-2 text-sm text-gray-700 flex space-x-2'>
                <FaPencilAlt className="text-blue-500 cursor-pointer" />
                <FaTrash className="text-red-500 cursor-pointer" />
              </td>
            </tr>
            <tr className='hover:bg-gray-100'>
              <td className='py-2 px-2 text-sm text-gray-700'>Sara Ali</td>
              <td className='py-2 px-2 text-sm text-gray-700 truncate'>saraadam124asad@example.com</td>
              <td className='py-2 px-2 text-sm text-gray-700'>+0987654321</td>
              <td className='py-2 px-2 text-sm text-gray-700 truncate'>Looking for new arrivals</td>
              <td className='py-2 px-2 text-sm text-gray-700'>Completed</td>
              <td className='py-2 px-2 text-sm text-gray-700'>Men</td>
              <td className='py-2 px-2 text-sm text-gray-700 flex space-x-2'>
                <FaPencilAlt className="text-blue-500 cursor-pointer" />
                <FaTrash className="text-red-500 cursor-pointer" />
              </td>
            </tr>
            {/* Repeat for other rows */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Products;
