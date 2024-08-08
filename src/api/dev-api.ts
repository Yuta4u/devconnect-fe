import { DEV_CONNECT_API_URL } from "@/config"
import { TDevRegister } from "@/types/apiType"

export async function RegisterDev(data: TDevRegister) {
  const dataApi = {
    username: data.username,
    email: data.email,
    password: data.password,
  }

  try {
    const response = await fetch(`${DEV_CONNECT_API_URL}api/dev`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(dataApi),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const res = await response.json()
    return res
  } catch (error) {
    console.error("Error during registration:", error)
    return { error: (error as Error).message }
  }
}
