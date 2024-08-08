import { Button } from "@/components/ui"
import { useNavigate } from "react-router-dom"

export function Profile() {
  const nav = useNavigate()
  return (
    <div className="">
      Ini Profile
      <Button onClick={() => nav("/")}>balik ke home</Button>
    </div>
  )
}
