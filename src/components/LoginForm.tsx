import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LoginFormSchema } from "@/lib/definitions"
import { Loader2 } from "lucide-react"
import { MouseEventHandler, useEffect, useState } from "react"

export default function LoginForm(
  { onSubmit, loading = false, error_message = undefined }: {
    onSubmit: (email: string, password: string) => void,
    loading?: boolean
    error_message?: string
  }
) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessages, setErrorMessages] = useState<string[]>([])
  useEffect(() => {
    if (error_message) setErrorMessages([error_message])
  }, [error_message])

  const onClick = () => {
    const result = LoginFormSchema.safeParse({ email, password })
    if (result.success) { onSubmit(email, password); setErrorMessages([]) }
    else
      setErrorMessages(result.error.errors.map(v => v.message))
  }
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
      </CardContent>
      <CardFooter className="flex-col">
        <Button className="w-full" disabled={loading} onClick={onClick}>
          {
            loading
              ? <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </>
              : <span>Sign in</span>
          }
        </Button>

        {
          errorMessages.map(m =>
            <p key={m} className="text-red-400">{m}</p>
          )
        }
      </CardFooter>

    </Card >
  )
}
