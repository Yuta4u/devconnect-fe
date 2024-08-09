import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui"
import GuestProfile from "@/assets/guest-profile.jpeg"

export function Profile({
  sidebarWidth,
  data,
}: {
  sidebarWidth: number
  data: any
}) {
  const toggleHidden = sidebarWidth < 10 ? "hidden" : "flex"
  const toggleBtnCenter =
    sidebarWidth < 10 && " justify-center px-0 items-center"
  return (
    <>
      {data?.username ? (
        <div className={`py-5 px-6 flex ${toggleBtnCenter}`}>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>PF</AvatarFallback>
          </Avatar>
          <div className={`flex-col ml-2 flex ${toggleHidden}`}>
            <span className="font-bold text-lg">{data.username}</span>
            <span className="text-xs text-slate-500">{data.role}</span>
          </div>
        </div>
      ) : (
        <div className={`py-5 px-6 flex ${toggleBtnCenter}`}>
          <Avatar>
            <AvatarImage src={GuestProfile} alt="@shadcn" />
            <AvatarFallback>GS</AvatarFallback>
          </Avatar>
          <div className={`flex-col ml-2 flex ${toggleHidden}`}>
            <span className="font-bold text-lg">Guest</span>
            <span className="text-xs text-slate-500">Guest</span>
          </div>
        </div>
      )}
    </>
  )
}
