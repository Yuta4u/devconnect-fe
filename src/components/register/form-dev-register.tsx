import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "../ui/use-toast"
import { useState } from "react"
import { RegisterDev } from "@/api/dev-api"
import { useNavigate } from "react-router-dom"

const formSchema = z.object({
  username: z
    .string()
    .min(1, { message: "username is required" })
    .min(8, { message: "username length must be at least 8" }),
  email: z
    .string()
    .min(1, { message: "email is required" })
    .email("ths is not a valid email"),
  password: z
    .string()
    .min(1, { message: "password is required" })
    .min(8, { message: "passwords length must be at least 8" })
    .refine(
      (value) =>
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(value ?? ""),
      {
        message:
          "password must have at least one uppercase letter and a number",
      }
    ),
})

export function FormDevRegister() {
  const { toast } = useToast()
  const nav = useNavigate()
  const [emailValidation, setEmailValidation] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)
    const res = await RegisterDev(values)
    if (res.status === 201) {
      nav("/login")
      setEmailValidation(null)
      toast({
        description: res.message,
      })
    } else {
      setEmailValidation(values.email)
      toast({
        variant: "destructive",
        description: res.message,
      })
    }
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setLoading(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="username"
          render={({ field }: any) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }: any) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Email"
                  {...field}
                  className={
                    emailValidation === field.value && "border-red-500"
                  }
                />
              </FormControl>
              {emailValidation === field.value && (
                <p className="text-[0.7rem] font-medium text-red-500">
                  email already registered
                </p>
              )}

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant={"default"}
          type="submit"
          className="bg-base-4 text-base-1 w-full"
          style={{ marginTop: "10px" }}
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
        </Button>
        <FormDescription>
          already have an account?{" "}
          <a href="/login" className="text-blue-900 underline">
            login
          </a>
        </FormDescription>
      </form>
    </Form>
  )
}
