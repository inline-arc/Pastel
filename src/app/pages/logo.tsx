import { Sparkles } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FFE5B4] transition-all duration-300 hover:bg-[#FFE5B4]/80">
        <Sparkles className="h-4 w-4 text-[#FF7F6F]" />
      </div>
      <span className="font-serif text-lg font-medium text-[#1F2937]">Pastel</span>
    </div>
  )
}

