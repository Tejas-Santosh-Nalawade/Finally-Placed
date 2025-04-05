import { RegisterForm } from "@/components/register-form";

export default function RegisterPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 text-white bg-black">
      <div className="w-full max-w-sm">
        <RegisterForm />
      </div>
    </div>
  )
}