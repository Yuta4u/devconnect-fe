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
import { RegisterRecruiter } from "@/api/recruiter-api"
import { useToast } from "../ui/use-toast"
import { useState } from "react"

const formSchema = z.object({
  companyName: z.string().min(1, {
    message: "company name is required",
  }),
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

export function FormRegisterRecruiter() {
  const { toast } = useToast()
  const [emailValidation, setEmailValidation] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)
    const res = await RegisterRecruiter(values)
    if (res.status === 201) {
      setEmailValidation(null)
      toast({
        description: res.msg,
      })
    } else {
      setEmailValidation(values.email)
      toast({
        variant: "destructive",
        description: res.msg,
      })
    }
    setLoading(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input placeholder="Company Name" {...field} />
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
