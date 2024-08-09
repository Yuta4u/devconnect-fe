import { Button, toast } from "@/components/ui"
import { logout } from "@/state/counter/userSlice"
import { Inbox, LogOut, MailCheck } from "lucide-react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

export function SidebarEnd({ sidebarWidth }: { sidebarWidth: number }) {
  const dispatch = useDispatch()
  const sidebarFlag = sidebarWidth < 10
  const toggleBtnCenter =
    sidebarWidth < 10 && " justify-center px-0 items-center"

  const handleBtnLogout = () => {
    dispatch(logout())
    toast({
      description: "anda behasil logout",
    })
  }

  return (
    <div className={`py-2 px-7 flex flex-col gap-2 ${toggleBtnCenter}`}>
      {sidebarFlag ? (
        <Button variant={"ghost"} size="icon" className="w-10 h-10 ">
          <LogOut color="#d74a49" className="h-6 w-10" />
        </Button>
      ) : (
        <Button
          className="flex justify-start px-0"
          variant={"ghost"}
          onClick={handleBtnLogout}
        >
          <LogOut color="#d74a49" className="mr-2 h-10 w-6" /> Logout
        </Button>
      )}
    </div>
  )
}
