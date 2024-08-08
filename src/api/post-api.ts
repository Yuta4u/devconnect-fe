import { API_URL } from "@/config"

export default async function getPost() {
  try {
    const response = await fetch(`${API_URL}api/post`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
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
