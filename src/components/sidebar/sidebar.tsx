import { useSelector } from "react-redux"
import {
  Profile,
  SidebarContent,
  SidebarEnd,
  SidebarProfile,
  Sidebarcontent2,
} from "./(etc)"
import { RootState } from "@/state/store"
import { convertMoney } from "@/utils/utils"
import { useEffect } from "react"

export default function Sidebar({ sidebarWidth }: any) {
  const user = useSelector((state: RootState) => state.counter.userSlice.user)
  console.log(user, "ini user cuy")

  return (
    <div className="w-full min-h-[100%] justify-between flex flex-col ">
      <div>
        <Profile sidebarWidth={sidebarWidth} data={user} />
        <hr />
        {/* <SidebarContent sidebarWidth={sidebarWidth} />
        <hr /> */}
        <SidebarProfile sidebarWidth={sidebarWidth} />
        <hr />
        <Sidebarcontent2 sidebarWidth={sidebarWidth} />
      </div>
      <div className="mb-3">
        <SidebarEnd sidebarWidth={sidebarWidth} />
      </div>
    </div>
  )
}
