"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Send } from "lucide-react";

export function WaitlistForm() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const DataPush = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter a valid email.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success("You have been added to the waitlist!");
        setEmail(""); // Reset input
        setIsExpanded(false); // Hide form after submission
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Something went wrong.");
      }
    } catch (error) {
      toast.error("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md">
      {!isExpanded ? (
        <Button
          onClick={() => setIsExpanded(true)}
          className="w-1/3 rounded-full bg-[#98d8b6] text-[#1F2937] transition-all duration-500 hover:scale-105 hover:bg-[#98D8B6]/90 hover:shadow-lg"
        >
          Join Waitlist
        </Button>
      ) : (
        <form onSubmit={DataPush} className="relative">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full border-[#E6E6FF] py-6 pl-6 pr-12 transition-all duration-300 focus:border-[#98D8B6] focus:ring-[#98D8B6]"
            autoFocus
            disabled={loading}
          />
          <Button
            type="submit"
            size="icon"
            className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-[#98D8B6] transition-all duration-300 hover:scale-105 hover:bg-[#98D8B6]/90"
            disabled={loading}
          >
            {loading ? (
              <span className="animate-spin">⏳</span>
            ) : (
              <Send className="h-4 w-4 text-[#1F2937]" />
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
