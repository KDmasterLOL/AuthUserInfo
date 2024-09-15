'use client'
import { useTokenStore } from "@/lib/token.store";
import { useRouter } from "next/navigation";

export default function Logout({ className = "" }: { className?: string }) {
  const { clear } = useTokenStore()
  const router = useRouter()

  return <button className={"bg-red-100 rounded-xl text-red-600  px-2 py-1 " + className}
    onClick={() => {
      clear()
      router.push('/login')
    }}
  >Log out</button>
}
