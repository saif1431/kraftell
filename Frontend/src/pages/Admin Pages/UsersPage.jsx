import React from 'react'

import UserTable from '../../components/Admin Components/UserComponents/UserTable'
import { Menu } from 'lucide-react'
import AdminHeader from '../../components/Reuseable Component/AdminHeader'


function UsersPage() {
  return (
      <div className="lg:px-6 py-12">
     <AdminHeader title="User Management"/>

      <div className="bg-white overflow-y-auto rounded-lg shadow-sm border border-gray-200">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-lg font-medium">User Management</h2>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
            Add User
          </button>
        </div>

        <UserTable />
      </div>
    </div>
  )
}

export default UsersPage
