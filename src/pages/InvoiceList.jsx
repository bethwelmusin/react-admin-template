/* eslint-disable camelcase */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const InvoiceList = () => (
  <div className="mt-4 mx-4">
    <form className="flex items-center pb-3">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-400">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          required
        />
      </div>
      <button
        type="submit"
        className="p-2.5 ml-2 text-sm font-medium text-white bg-sky-500 rounded-lg border hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </form>
    <table className="min-w-full border-collapse block md:table">
      <thead className="block md:table-header-group">
        <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Name
          </th>
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            User Name
          </th>
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Email Address
          </th>
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Mobile
          </th>
          <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="block md:table-row-group">
        <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">Name</span>
            Jamal Rios
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">
              User Name
            </span>
            jrios1
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">
              Email Address
            </span>
            jrios@icloud.com
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>
            582-3X2-6233
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">
              Actions
            </span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
              Edit
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
              Delete
            </button>
          </td>
        </tr>
        <tr className="bg-white border border-grey-500 md:border-none block md:table-row">
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">Name</span>
            Erwin Campbell
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">
              User Name
            </span>
            ecampbell088
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">
              Email Address
            </span>
            ecampbell088@hotmail.com
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>
            318-685-X414
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">
              Actions
            </span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
              Edit
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
              Delete
            </button>
          </td>
        </tr>
        <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">Name</span>
            Lillie Clark
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">
              User Name
            </span>
            lillie
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">
              Email Address
            </span>
            lillie.clark@gmail.com
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>
            505-644-84X4
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">
              Actions
            </span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
              Edit
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
              Delete
            </button>
          </td>
        </tr>
        <tr className="bg-white border border-grey-500 md:border-none block md:table-row">
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">Name</span>
            Maribel Koch
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">
              User Name
            </span>
            maribelkoch
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">
              Email Address
            </span>
            mkoch@yahoo.com
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>
            582-400-3X36
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">
              Actions
            </span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
              Edit
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
              Delete
            </button>
          </td>
        </tr>
        <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">Name</span>
            Jamal Rios
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">
              User Name
            </span>
            jrios1
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">
              Email Address
            </span>
            jrios@icloud.com
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>
            582-3X2-6233
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">
              Actions
            </span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
              Edit
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
              Delete
            </button>
          </td>
        </tr>
        <tr className="bg-white border border-grey-500 md:border-none block md:table-row">
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">Name</span>
            Erwin Campbell
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">
              User Name
            </span>
            ecampbell088
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">
              Email Address
            </span>
            ecampbell088@hotmail.com
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>
            318-685-X414
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">
              Actions
            </span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
              Edit
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
              Delete
            </button>
          </td>
        </tr>
        <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">Name</span>
            Lillie Clark
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">
              User Name
            </span>
            lillie
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">
              Email Address
            </span>
            lillie.clark@gmail.com
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>
            505-644-84X4
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">
              Actions
            </span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
              Edit
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
              Delete
            </button>
          </td>
        </tr>
        <tr className="bg-white border border-grey-500 md:border-none block md:table-row">
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">Name</span>
            Maribel Koch
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">
              User Name
            </span>
            maribelkoch
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">
              Email Address
            </span>
            mkoch@yahoo.com
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>
            582-400-3X36
          </td>
          <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
            <span className="inline-block w-1/3 md:hidden font-bold">
              Actions
            </span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">
              Edit
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

);

export default InvoiceList;
