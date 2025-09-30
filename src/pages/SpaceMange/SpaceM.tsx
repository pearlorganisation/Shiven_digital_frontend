import React from 'react'
import {
  PencilSquareIcon,
  TrashIcon,
  InformationCircleIcon,
  PlusIcon,
} from '@heroicons/react/24/outline'
import { HardDrive } from 'lucide-react'

type Addon = {
  title: string
  storage: string
  price: string
  validity: string
  status: 'Active' | 'Inactive'
}

const addons: Addon[] = [
  {
    title: '121121',
    storage: '100 MB',
    price: '₹100.00 (+18% GST)',
    validity: '30 days',
    status: 'Active',
  },
  {
    title: 'Second Addon',
    storage: '10 MB',
    price: '₹120.00 (+18% GST)',
    validity: '90 days',
    status: 'Active',
  },
  {
    title: 'sdfsdf',
    storage: '110 MB',
    price: '₹1101.00 (+18% GST)',
    validity: '1 day',
    status: 'Active',
  },
  {
    title: 'First Addon',
    storage: '10 MB',
    price: '₹110.00 (+18% GST)',
    validity: '1 day',
    status: 'Inactive',
  },
]

const SpaceManager: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
          Addons Management
        </h1>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-sm font-medium shadow">
          <PlusIcon className="w-5 h-5" />
          Create New Addon
        </button>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {addons.map((addon, index) => {
          const isActive = addon.status === 'Active'
          return (
            <div
              key={index}
              className={`group border rounded-xl p-6 transition-all duration-300 shadow-sm hover:shadow-md ${
                isActive
                  ? 'bg-white border-gray-200'
                  : 'bg-gray-100 border-red-200'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {addon.title}
                  </h2>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                    <HardDrive className="w-4 h-4 text-gray-400" />
                    {addon.storage}
                  </p>
                </div>
              </div>

              <div className="text-sm text-gray-700 space-y-1 mb-5">
                <p>
                  <span className="font-medium">Price:</span> {addon.price}
                </p>
                <p>
                  <span className="font-medium">Validity:</span> {addon.validity}
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium">Status:</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      isActive
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {addon.status}
                  </span>
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition">
                  <InformationCircleIcon className="w-4 h-4" />
                  Details
                </button>

                <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-yellow-700 bg-yellow-100 hover:bg-yellow-200 rounded-md transition">
                  <PencilSquareIcon className="w-4 h-4" />
                  Edit
                </button>

                {isActive ? (
                  <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-red-700 bg-red-100 hover:bg-red-200 rounded-md transition">
                    <TrashIcon className="w-4 h-4" />
                    Deactivate
                  </button>
                ) : (
                  <span className="text-sm italic text-gray-400 mt-1">
                    Inactive
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SpaceManager
