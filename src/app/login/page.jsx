import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
 function LoginForm() {
  return (
    <Card className="w-full max-w-sm mx-auto my-10 dark:bg-[#1F2937] ">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription className="dark:text-white" >
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password  "  >Password</Label>
          <Input id="password"  type="password" required />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Sign in</Button>
      </CardFooter>
     
        <div className="mb-5 text-center text-sm">
        Create a new account?{" "}
          <Link href="./singup" className="underline">
            Sign up
          </Link>
        </div>
    </Card>
  )
}

export default LoginForm