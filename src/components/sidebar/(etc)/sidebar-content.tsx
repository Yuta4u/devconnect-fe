import { Button } from "@/components/ui"
import { Inbox, MailCheck } from "lucide-react"

export function SidebarContent({ sidebarWidth }: { sidebarWidth: number }) {
  const sidebarFlag = sidebarWidth < 10
  const toggleBtnCenter =
    sidebarWidth < 10 && " justify-center px-0 items-center"

  return (
    <div className={`px-3 py-3 flex flex-col gap-2 ${toggleBtnCenter}`}>
      {sidebarFlag ? (
        <Button variant={"ghost"} size="icon" className="w-10 h-10 ">
          <Inbox className="h-6 w-10" />
        </Button>
      ) : (
        <Button className="flex justify-start" variant={"ghost"}>
          <Inbox className="mr-2 h-10 w-6" /> Kotak Masuk
        </Button>
      )}
      {sidebarFlag ? (
        <Button variant={"ghost"} size="icon" className="w-10 h-10 ">
          <MailCheck color="#1b4552" className="h-6 w-10" />
        </Button>
      ) : (
        <Button className="flex justify-start" variant={"ghost"}>
          <MailCheck className="mr-2 h-10 w-6" /> CV Terkirim
        </Button>
      )}
    </div>
  )
}
