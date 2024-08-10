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
  const imgUrl = data?.company_name
    ? "https://i.pinimg.com/564x/be/61/38/be6138527adcaf0bc42d6bd0339b25b0.jpg"
    : data?.username
    ? "https://i.pinimg.com/564x/56/c7/5d/56c75d13636b5830b34385f6df90ca43.jpg"
    : "https://github.com/shadcn.png"
  return (
    <>
      {data?.username || data?.company_name ? (
        <div className={`py-5 px-6 flex ${toggleBtnCenter} items-center`}>
          <Avatar className="bg-green-500">
            <AvatarImage src={imgUrl} alt="@shadcn" />
            <AvatarFallback>PF</AvatarFallback>
          </Avatar>
          <div className={`flex-col ml-2 flex ${toggleHidden}`}>
            <span className="font-bold text-lg ">
              {data?.username || data?.company_name}
            </span>
            <span className="text-xs text-slate-500">
              {data?.role || "Recruiter"}
            </span>
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
