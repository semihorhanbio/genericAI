import { UserNavigation } from "@/components/user-navigation"

import React from 'react'

const Navbar = () => {
  return (
    <div className="flex items-center p-4 justify-end">
        <UserNavigation/>
    </div>
  )
}

export default Navbar