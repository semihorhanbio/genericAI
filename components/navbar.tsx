import UserNavigation from "@/components/user-navigation"
import { MobileSidebar } from "@/components/mobile-sidebar"

import React from 'react'

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserNavigation/>
      </div>
    </div>
  )
}

export default Navbar