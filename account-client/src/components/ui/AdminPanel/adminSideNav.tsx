import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import { Users, Settings } from "lucide-react"
export function AdminSideNav() {
  return (
    <div className={cn("pb-12 bg-primary rounded-xl w-[22rem] min-h-[42rem] max-h-[48rem]")}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Link  to="/admin/panel" type="sumbit" className="transition ease-in-out duration-300 uppercase flex w-full lg:w-auto justify-center rounded-md bg-primary px-3 py-1.5 text-xl leading-6 text-white shadow-sm ">
              Admin panel
            </Link>
            <div className="pt-10">
            <Link to="users" type="sumbit" className="mb-2 gap-5 items-center rounded-md transition ease-in-out duration-300 uppercase flex w-full lg:w-auto justify-center roundd-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secondary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <Users className=""/>
              <span className="">Users</span>
            </Link>
            <Link to="users" type="sumbit" className="mb-2 gap-5 items-center rounded-md transition ease-in-out duration-300 uppercase flex w-full lg:w-auto justify-center roundd-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secondary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <Settings className=""/>
              <span className="">Settings</span>
            </Link>
            </div>
          </div>
        </div>
       
        </div>
      </div>
  )
}