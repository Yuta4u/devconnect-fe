// ui
import { Box, Container, Flex, Heading } from "@radix-ui/themes"

// components
import { FormDevRegister, FormRegisterRecruiter } from "@/components/register"
import { Button, Switch } from "@/components/ui"

// assets
import Img3 from "@/assets/img-login-3.jpg"
import DevconnectLogo from "@/assets/devconnect-logo.png"

// others
import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

export function Register() {
  const [isChecked, setIsChecked] = useState(true)
  const nav = useNavigate()

  return (
    <Container className="bg-base-2 w-full h-[100vh] justify-center flex align-middle items-center">
      <Flex className="bg-base-1 text-base-4 h-[100vh] sm:h-[75vh] rounded-2xl p-4 shadow-2xl shadow-base-2 drop-shadow-2xl sm:w-2/3  md:w-1/2 lg:w-full mx-auto">
        <div
          className="relative w-1/2 hidden lg:block"
          onClick={() => nav("/")}
        >
          <img src={Img3} className=" w-full h-full object-cover rounded-xl" />
          <Button
            id="btn-kembali"
            size={"sm"}
            className="bg-base-b-homepage py-2 absolute top-2 right-2 text-xs"
          >
            <ArrowLeft className="mr-2" width={"14px"} />
            homepage
          </Button>
        </div>
        <Box className="w-full  lg:w-1/2 h-full rounded-r-2xl px-5 sm:px-5 lg:px-24 py-10">
          <Heading className="w-fit mx-auto mt-3 ">Create account</Heading>
          <div className="flex w-fit mx-auto gap-2 font-bold mb-5 text-sm  text-gray-400">
            <span>as dev</span>
            <Switch
              className="h-[20px]"
              checked={isChecked}
              onCheckedChange={(e) => setIsChecked(e)}
            />
            <span>as recruiter</span>
          </div>

          {isChecked ? <FormRegisterRecruiter /> : <FormDevRegister />}
          <div className=" mx-auto w-32">
            <img src={DevconnectLogo} alt="dev-connect-logo" className="" />
          </div>
        </Box>
      </Flex>
    </Container>
  )
}
