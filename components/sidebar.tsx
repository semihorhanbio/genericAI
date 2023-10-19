import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const poppins = Montserrat({weight: '600', subsets: ['latin']})

const Sidebar = () => {
  
  const routes = [
    {
        label: 'Home',
        icon: '/home.png',
        active: true,
        href: '/',
    },
    {
        label: 'Chat',
        icon: '/chat.png',
        active: false,
        href: '/',
    },
    {
        label: 'Image Generator',
        icon: '/image.png',
        active: false,
        href: '/image',
        premium: true,
    },
    {
        label: 'Blog Writer',
        icon: '/blog.png',
        active: false,
        href: '/blog',
        premium: true,
    },
    {
        label: 'Email Writer',
        icon: '/mail.png',
        active: false,
        href: '/email',
        premium: true,
    }
  ]
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#112827] text-white">
        <div className="px-3 py-2 flex-1">
            <div className="flex items-center pl-3 mb-14">
                <div className="relative h-7 w-7 mr-4">
                    <Image fill alt="logo" src="/nira.png" />
                </div>
                <h1 className={cn("text-xl font-bold", poppins.className)}>Generic AI</h1>
            </div>
            <div className="space-y-1">
                {routes.map(route => (
                    <div
                        key={route.label}
                        className={cn("text-sm group flex p-3 w-full justify-start font-semibold cursor-pointer hover:text-white transition", route.active ? "text-white" : "text-zinc-400")}
                    >
                        <div className="flex items-center flex-1">
                            <div className="relative h-8 w-8 mr-4 group-hover:scale-125 transition duration-150">
                                <Image alt="lcon" src={route.icon} fill/>
                            </div>
                            {route.label}
                        </div>
                        {route.premium && (
                            <Badge variant="premium" className="font-bold uppercasep-2">
                                pro
                            </Badge>
                        )}
                    </div>
                ))}
            </div>
        </div>
        <div className="px-3 py-2">
            <Button variant="premium" className="w-full">
                Upgrade
                <Zap className="w-4 h-4 ml-2" />
            </Button>
        </div>
    </div>
  )
}

export default Sidebar