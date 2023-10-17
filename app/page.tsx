import { UserButton } from "@clerk/nextjs"
import { Metadata } from "next"
import {Sidebar} from "@/components/Sidebar"

export const metadata: Metadata = {
    title: "Music App",
    description: "Example music app built with Next.js, Prisma, and Clerk",
  }

export default function HomePage() {
  return (
    <div className="h-full">
      <div className="grid grid-cols-10 h-full">
        <div className="col-span-3 h-full">
          <Sidebar/>
        </div>
        <div className="col-span-5 border-1">
          <div className="h-full py-6 px-8">
            Content
          </div>
        </div>
      </div>
    </div>
  )
}
