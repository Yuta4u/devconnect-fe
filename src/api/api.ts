import { DEV_CONNECT_API_URL } from "@/config"

export async function Login(data: any) {
  const dataApi = {
    email: data.email,
    password: data.password,
  }

  try {
    const response = await fetch(`${DEV_CONNECT_API_URL}api/login`, {
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
    console.error("Error during login:", error)
    return { error: (error as Error).message }
  }
}
