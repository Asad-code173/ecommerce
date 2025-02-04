import React from 'react';
import { FaFolderPlus, FaTrash, FaPencil } from 'react-icons/fa6'; // Import a more relevant icon

const Categories = () => {
    return (
        <>
            <div className='flex justify-between items-center mt-6 mx-4'>
                <h1 className='-ml-[15%] sm:ml-0 text-2xl font-bold'>Categories</h1>
                <div className='cursor-pointer text-2xl'>
                    <FaFolderPlus title="Add Category" />
                </div>
            </div>
            <table className='-ml-[10%] sm:ml-0 md:ml-4 w-3/4 mt-6 ml-4 bg-white border border-gray-300 rounded-lg shadow-md'>
                <thead className='bg-gray-200'>
                    <tr>
                        <th className='py-3 px-4 text-left text-sm font-semibold text-gray-700'>Name</th>
                        <th className='py-3 text-sm font-semibold text-gray-700'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='hover:bg-gray-100'>
                        <td className='py-2 px-4 border-b border-gray-300'>Asad</td>
                        <td className='border-b border-gray-300 text-end pr-[16%]'> {/* Add padding right */}
                            <div className='flex justify-end space-x-2'>
                                <button className='text-black hover:underline'>
                                    <FaPencil title="Edit" />
                                </button>
                                <button className='text-black hover:underline hover:text-red-600'>
                                    <FaTrash title="Delete" />
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Categories;
