"use client"

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { Toaster } from "@/components/ui/sonner"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Github } from "lucide-react"
import { Logo } from "./pages/logo"
import Wallet from "./pages/wallet"
import { UserForm } from "./pages/userform"
import { ContentCarousel } from "./pages/content-carousel"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFE5B4]/20 to-white">
      <Toaster />
      <header className="fixed left-0 right-0 top-4 z-50">
        <div className="mx-auto max-w-5xl">
          <div className="mx-4 flex h-14 items-center justify-between rounded-2xl bg-white/80 px-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white hover:shadow-md">
            <div className="flex items-center gap-4">
              <Logo />
              <Badge variant="secondary" className="bg-[#E6E6FF] text-[#6B7280] hover:bg-[#E6E6FF]/80">
                Powered by Solana
              </Badge>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="gap-2 text-[#6B7280] transition-all duration-300 hover:bg-[#E6E6FF]"
              >
                <Github className="h-4 w-4" />
                <Star className="h-4 w-4" />
                <span>2.1k</span>
              </Button>
              <Wallet />
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 pt-24">
        <ResizablePanelGroup
          direction="horizontal"
          className="min-h-[800px] overflow-hidden rounded-2xl border border-[#E6E6FF] bg-white shadow-sm transition-all duration-300 hover:shadow-md"
        >
          <ResizablePanel defaultSize={50}>
            <div className="p-4">
              <UserForm />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle className="bg-[#E6E6FF] transition-colors hover:bg-[#E6E6FF]/80" />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full flex-col p-4">
              <ContentCarousel />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </div>
  )
}

