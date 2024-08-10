import { Button, toast } from "@/components/ui"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { logout } from "@/state/counter/userSlice"
import { RootState } from "@/state/store"
import { LogIn, LogOut } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function BtnLogin({ sidebarFlag }: { sidebarFlag: boolean }) {
  const nav = useNavigate()
  const handleBtnLogin = () => {
    nav("/login")
  }

  return sidebarFlag ? (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={"ghost"}
            size="icon"
            className="w-10 h-10 "
            onClick={handleBtnLogin}
          >
            <LogIn color="#2ecc71" className="h-6 w-10" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Login</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ) : (
    <Button
      className="flex justify-start px-0"
      variant={"ghost"}
      onClick={handleBtnLogin}
    >
      <LogIn color="#2ecc71" className="mr-2 h-10 w-6" /> Login
    </Button>
  )
}

function BtnLogout({ sidebarFlag }: { sidebarFlag: boolean }) {
  const dispatch = useDispatch()
  const handleBtnLogout = () => {
    dispatch(logout())
    toast({
      description: "anda behasil logout",
    })
  }
  return sidebarFlag ? (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={"ghost"}
            size="icon"
            className="w-10 h-10"
            onClick={handleBtnLogout}
          >
            <LogOut color="#d74a49" className="h-6 w-10" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Login</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ) : (
    <Button
      className="flex justify-start px-0"
      variant={"ghost"}
      onClick={handleBtnLogout}
    >
      <LogOut color="#d74a49" className="mr-2 h-10 w-6" /> Logout
    </Button>
  )
}

export function SidebarEnd({ sidebarWidth }: { sidebarWidth: number }) {
  const user: any = useSelector(
    (state: RootState) => state.counter.userSlice.user
  )
  const sidebarFlag = sidebarWidth < 10
  const toggleBtnCenter =
    sidebarWidth < 10 && " justify-center px-0 items-center"

  return (
    <div className={`py-2 px-7 flex flex-col gap-2 ${toggleBtnCenter}`}>
      {user?.email ? (
        <BtnLogout sidebarFlag={sidebarFlag} />
      ) : (
        <BtnLogin sidebarFlag={sidebarFlag} />
      )}
    </div>
  )
}
