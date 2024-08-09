import { toast } from "@/components/ui"
import { RootState } from "@/state/store"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

export default function ProtectdRoute() {
  const user: any = useSelector(
    (state: RootState) => state.counter.userSlice.user
  )

  if (!user?.email) {
    toast({
      variant: "destructive",
      description: "Lakukan login terlebih dahulu",
    })
  }

  return user?.email ? <Outlet /> : <Navigate to="/" />
}
