"use client"

import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Skeleton } from "@/components/ui/skeleton"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { toast } from "sonner"

const currencies = [
  { label: "Solana", value: "sol" },
  { label: "USDC", value: "usdc" },
] as const

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  title: z.string().min(2, { message: "Title must be at least 2 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  currency: z.string().min(1, { message: "Please select a currency." }),
  amount: z.string().min(1, { message: "Please enter an amount." }),
  date: z.date().optional(), // Allows `undefined`
})

export function UserForm() {
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      title: "",
      message: "",
      currency: "sol",
      amount: "",
      date: undefined, // Prevents hydration errors
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Transaction Submitted", {
      description: "Your transaction has been successfully submitted.",
    })
    console.log(values)
  }

  const quickAmounts = ["10", "20", "100"]

  return (
    <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
      {loading ? (
        <div className="space-y-4">
          <Skeleton className="h-8 w-[200px]" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <div className="grid grid-cols-2 gap-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      ) : (
        <>
          <h2 className="mb-6 text-2xl font-medium text-slate-800">Transaction Details</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100">
                      <div className="mb-4 text-center">
                        <Input
                          type="number"
                          value={field.value}
                          onChange={(e) => form.setValue("amount", e.target.value)}
                          className="w-full text-center text-4xl font-medium"
                          placeholder="0"
                        />
                        <div className="mt-1 text-sm text-slate-500">{form.watch("currency").toUpperCase()}</div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {quickAmounts.map((amount) => (
                          <Button
                            key={amount}
                            type="button"
                            variant="outline"
                            onClick={() => form.setValue("amount", amount)}
                          >
                            ${amount}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="currency"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-between">
                          {currencies.find((currency) => currency.value === field.value)?.label || "Select currency..."}
                          <ChevronsUpDown className="ml-2 h-4 w-4" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0">
                        <Command>
                          <CommandInput placeholder="Search currency..." />
                          <CommandList>
                            <CommandEmpty>No currency found.</CommandEmpty>
                            <CommandGroup>
                              {currencies.map((currency) => (
                                <CommandItem
                                  key={currency.value}
                                  value={currency.value}
                                  onSelect={() => {
                                    form.setValue("currency", currency.value)
                                    setOpen(false)
                                  }}
                                >
                                  <Check className={cn("mr-2 h-4 w-4", field.value === currency.value && "opacity-100")} />
                                  {currency.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />

              <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <Input placeholder="Enter your name" {...field} />
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="title" render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <Input placeholder="Transaction title" {...field} />
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="date" render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? format(field.value, "PPP") : "Select a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <Calendar mode="single" selected={field.value} onSelect={field.onChange} />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )} />

              <Button type="submit">Submit Transaction</Button>
            </form>
          </Form>
        </>
      )}
    </div>
  )
}
