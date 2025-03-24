import { Button } from "@/components/ui/button"
import { WalletIcon } from "lucide-react"

export function Wallet() {
  return (
    <Button
      size="sm"
      className="rounded-lg bg-[#98D8B6] text-[#1F2937] transition-all duration-300 hover:bg-[#98D8B6]/90 hover:shadow-md"
    >
      <WalletIcon className="mr-2 h-4 w-4" />
      Connect Wallet
    </Button>
  )
}

