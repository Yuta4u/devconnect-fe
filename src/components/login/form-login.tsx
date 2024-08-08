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
import { useDispatch, useSelector } from "react-redux"
import { userLogin } from "@/state/counter/userSlice"
import { useNavigate } from "react-router-dom"
import { toast } from "../ui"
import { RootState } from "@/state/store"

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "email is required" })
    .email("ths is not a valid email"),
  //   .refine(async (e) => {
  //     const emails = await fetchEmails();
  //     return emails.includes(e);
  //   }, "Thi
  password: z
    .string()
    .min(1, { message: "password is required" })
    .refine(
      (value) =>
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(value ?? ""),
      {
        message: "password its not valid",
      }
    ),
})

export function FormLogin() {
  const dispatch = useDispatch()
  const loading = useSelector(
    (state: RootState) => state.counter.userSlice.loading
  )
  const nav = useNavigate()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await dispatch(userLogin(values))
    if (res.payload.status === 204) {
      toast({
        variant: "destructive",
        description: res.payload.message,
      })
      return
    }
    nav("/")
    toast({
      description: res.payload.message,
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
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
          disabled={loading}
          variant={"default"}
          type="submit"
          className="bg-base-4 text-base-1 w-full hover:bg-neutral-700"
        >
          {loading ? "Loading..." : "Submit"}
        </Button>
        <FormDescription>
          Dont have account?{" "}
          <a
            href="/register"
            className="text-blue-900 underline cursor-pointer"
          >
            Register here
          </a>
        </FormDescription>
      </form>
    </Form>
  )
}
