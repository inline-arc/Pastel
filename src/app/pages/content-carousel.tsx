"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

const carouselItems = [
  {
    id: 1,
    title: "Transaction Overview",
    name: "Solana Mainnet",
    content: "View detailed transaction information and status on the Solana blockchain.",
  },
  {
    id: 2,
    title: "Token Details",
    name: "SPL Token",
    content: "Explore token metadata, supply, and distribution information.",
  },
  {
    id: 3,
    title: "Account Activity",
    name: "Wallet History",
    content: "Review recent transactions and account activity for this wallet address.",
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
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="solscan">Solscan</TabsTrigger>
          <TabsTrigger value="view">View</TabsTrigger>
        </TabsList>
        <TabsContent value="solscan" className="mt-2">
          <div className="text-sm text-slate-500">View transaction details on Solana Explorer</div>
        </TabsContent>
        <TabsContent value="view" className="mt-2">
          <div className="text-sm text-slate-500">View transaction in your wallet</div>
        </TabsContent>
      </Tabs>

      <div className="relative flex-1 overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {carouselItems.map((item) => (
            <div
              key={item.id}
              className="flex h-full w-full shrink-0 flex-col items-center justify-center p-6 text-center"
            >
              <div className="mb-4 rounded-full bg-violet-100 p-4">
                <Search className="h-6 w-6 text-violet-500" />
              </div>
              <h3 className="mb-2 text-xl font-medium">{item.title}</h3>
              <p className="mb-4 text-slate-500">{item.content}</p>
              <div className="mt-auto text-sm font-medium text-violet-500">{item.name}</div>
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className={cn(
            "absolute left-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-white",
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
            "absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-white",
            activeIndex === carouselItems.length - 1 ? "opacity-50" : "opacity-100",
          )}
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next slide</span>
        </Button>

        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                activeIndex === index ? "bg-violet-500 w-4" : "bg-slate-300",
              )}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-between">
        <Button
          variant="outline"
          className="gap-2 transition-all duration-200 hover:bg-violet-100 hover:text-violet-700"
        >
          <ExternalLink className="h-4 w-4" />
          View on Solscan
        </Button>
        <Button className="bg-violet-500 text-white transition-all duration-300 hover:bg-violet-600 hover:shadow-md">
          View Details
        </Button>
      </div>
    </div>
  )
}

