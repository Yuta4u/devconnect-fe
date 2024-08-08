import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { TJob } from "@/types/types"
import { convertMoney } from "@/utils/utils"
import { Building, Laptop, MapPinned } from "lucide-react"

export default function Card({ data }: { data: TJob }) {
  return (
    <div className="w-full min-h-[300px] border-[1px] rounded-xl p-10 hover:border-s-gray-900 cursor-pointer flex flex-col gap-3 relative">
      <div className="text-3xl font-bolder">{`${data?.level || ""} ${
        data?.position
      }`}</div>

      <div className="h-3 flex gap-1 items-center text-[#646f77] text-sm ">
        <Building color="#646f77" className="h-full w-fit" />
        PT. Nomura Indo Jaya
      </div>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="h-3 flex gap-1 items-center text-[#646f77] text-sm w-fit">
              <MapPinned color="#646f77" className="h-full w-fit" />
              {data?.location}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Penempatan Kerja</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div className="h-3 flex gap-1 items-center text-[#646f77] text-sm">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="h-3 flex gap-1 items-center text-[#646f77] text-sm">
                <Laptop color="#646f77" className="h-full w-fit" />
                {data?.job_type}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Tipe Kerja</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* content */}
      <div className="h-30 w-fit absolute bottom-5 right-5">
        <div className="text-xs h-1/5 text-center ">SALARY</div>
        <div className="text-5xl  h-4/5 flex items-center ">
          {convertMoney(data?.salary)}
          <span className="text-xs ml-[0.10rem] font-medium">jt/bln</span>
        </div>
      </div>
    </div>
  )
}
