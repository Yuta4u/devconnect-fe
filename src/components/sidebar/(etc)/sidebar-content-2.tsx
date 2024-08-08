import { Button } from "@/components/ui"
import { Settings } from "lucide-react"
import { useNavigate } from "react-router-dom"

export function Sidebarcontent2({ sidebarWidth }: { sidebarWidth: number }) {
  const nav = useNavigate()
  const sidebarFlag = sidebarWidth < 10
  const toggleBtnCenter =
    sidebarWidth < 10 && " justify-center px-0 items-center"

  return (
    <div className={`px-3 py-3 flex flex-col gap-2 ${toggleBtnCenter}`}>
      {sidebarFlag ? (
        <Button variant={"ghost"} size="icon" className="w-10 h-10 ">
          <Settings className="h-6 w-10" />
        </Button>
      ) : (
        <Button
          className="flex justify-start"
          variant={"ghost"}
          onClick={() => nav("/profile")}
        >
          <Settings className="mr-2 h-10 w-6" /> Setting Profile
        </Button>
      )}
    </div>
  )
}
