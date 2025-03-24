"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, Search, FileText, Wallet, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

const carouselItems = [
  {
    id: 1,
    title: "Transaction Overview",
    name: "Solana Mainnet",
    content: "View detailed transaction information and status on the Solana blockchain.",
    icon: Search,
  },
  {
    id: 2,
    title: "Token Details",
    name: "SPL Token",
    content: "Explore token metadata, supply, and distribution information.",
    icon: FileText,
  },
  {
    id: 3,
    title: "Account Activity",
    name: "Wallet History",
    content: "Review recent transactions and account activity for this wallet address.",
    icon: Wallet,
  },
]

export function ContentCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((current) => (current === carouselItems.length - 1 ? 0 : current + 1))
  }

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? carouselItems.length - 1 : current - 1))
  }

  return (
    <div className="flex h-full flex-col">
      <Tabs defaultValue="solscan" className="mb-4">
        <TabsList className="grid w-full grid-cols-3 rounded-full p-1">
          <TabsTrigger value="solscan" className="rounded-full">
            Solscan
          </TabsTrigger>
          <TabsTrigger value="view" className="rounded-full">
            View
          </TabsTrigger>
          <TabsTrigger value="contract" className="rounded-full">
            Track
          </TabsTrigger>
        </TabsList>
        <TabsContent value="solscan" className="mt-2">
          <div className="text-sm text-slate-500">View transaction details on Solana Explorer</div>
        </TabsContent>
        <TabsContent value="view" className="mt-2">
          <div className="text-sm text-slate-500">View transaction in your wallet</div>
        </TabsContent>
        <TabsContent value="contract" className="mt-2">
          <div className="text-sm text-slate-500">View Track & Claims details</div>
        </TabsContent>
      </Tabs>

      <div className="relative flex-1 overflow-hidden rounded-[2rem] border border-[#E6E6FF] bg-gradient-to-b from-white to-[#E6E6FF]/20">
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {carouselItems.map((item) => (
            <div
              key={item.id}
              className="flex h-full w-full shrink-0 flex-col items-center justify-center p-6 text-center"
            >
              <div className="mb-6 rounded-2xl bg-[#FF7F6F]/10 p-6 transition-transform duration-300 hover:scale-105">
                <item.icon className="h-8 w-8 text-[#FF7F6F]" />
              </div>
              <h3 className="mb-3 font-serif text-2xl font-medium text-[#1F2937]">{item.title}</h3>
              <p className="mb-4 text-[#6B7280]">{item.content}</p>
              <div className="mt-auto text-sm font-medium text-[#98D8B6]">{item.name}</div>
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className={cn(
            "absolute left-4 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full border-[#E6E6FF] bg-white/80 backdrop-blur-sm transition-all hover:scale-105 hover:bg-white hover:shadow-md",
            activeIndex === 0 ? "opacity-50" : "opacity-100",
          )}
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className={cn(
            "absolute right-4 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full border-[#E6E6FF] bg-white/80 backdrop-blur-sm transition-all hover:scale-105 hover:bg-white hover:shadow-md",
            activeIndex === carouselItems.length - 1 ? "opacity-50" : "opacity-100",
          )}
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next slide</span>
        </Button>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                activeIndex === index ? "w-8 bg-[#FF7F6F]" : "w-2 bg-[#E6E6FF]",
              )}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-between gap-4">
        <Button
          variant="outline"
          className="flex-1 gap-2 rounded-full border-[#E6E6FF] transition-all duration-300 hover:scale-105 hover:bg-[#E6E6FF]/50"
        >
          <Copy className="h-4 w-4" />
          Copy Link
        </Button>
        <Button className="flex-1 rounded-full bg-[#98D8B6] text-[#1F2937] transition-all duration-300 hover:scale-105 hover:bg-[#98D8B6]/90 hover:shadow-md">
          Share GiftCard
        </Button>
      </div>
    </div>
  )
}

