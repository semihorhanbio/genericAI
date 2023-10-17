import { Metadata } from "next"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import {Sidebar} from "@/components/Sidebar"

export const metadata: Metadata = {
  title: "Music App",
  description: "Example music app using the components.",
}

const HomePage = () => {  
  const {getUser} = getKindeServerSession()
  const user = getUser()

  return (
    <div className="h-full">
      <div className="grid grid-cols-10 h-full">
        <div className="col-span-3 h-full">
          <Sidebar />
        </div>
        <div className="col-span-5 border-1">
          <div className="h-full py-6 px-8">
            Logged in as: {user.given_name}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage