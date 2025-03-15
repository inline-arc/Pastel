"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { Send } from "lucide-react"

export function WaitlistForm() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      toast.success("Thanks for joining!", {
        description: "We'll keep you updated on our progress."
      })
      setEmail("")
      setIsExpanded(false)
    }
  }

  return (
    <div className="mx-auto max-w-md">
      {!isExpanded ? (
        <Button
          onClick={() => setIsExpanded(true)}
          className="w-full rounded-full bg-[#98D8B6] text-[#1F2937] transition-all duration-500 hover:scale-105 hover:bg-[#98D8B6]/90 hover:shadow-lg"
        >
          Join Waitlist
        </Button>
      ) : (
        <form onSubmit={handleSubmit} className="relative">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full border-[#E6E6FF] py-6 pl-6 pr-12 transition-all duration-300 focus:border-[#98D8B6] focus:ring-[#98D8B6]"
            autoFocus
          />
          <Button
            type="submit"
            size="icon"
            className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-[#98D8B6] transition-all duration-300 hover:scale-105 hover:bg-[#98D8B6]/90"
          >
            <Send className="h-4 w-4 text-[#1F2937]" />
          </Button>
        </form>
      )}
    </div>
  )
}
