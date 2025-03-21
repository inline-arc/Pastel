import { CreditCard, Wallet, RefreshCcw, DollarSign } from "lucide-react"

const features = [
  {
    icon: CreditCard,
    title: "40+ Payment Options",
    description: "Accept payments via cards, bank transfers, Apple Pay, Google Pay, PayPal and more.",
  },
  {
    icon: Wallet,
    title: "Secure Down Payments",
    description: "Collect customizable down payments and earn tips for going the extra mile.",
  },
  {
    icon: RefreshCcw,
    title: "Recurring Payments",
    description: "Set up subscriptions for retainers and productized services with ease.",
  },
  {
    icon: DollarSign,
    title: "Flexible Payments",
    description: "Offer buy now, pay later options through Klarna, Afterpay, or Affirm.",
  },
]

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Security", "Pricing", "API"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Press"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Help Center", "Contact", "Status"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "Cookies"],
  },
]

export function Footer() {
  return (
    <footer className="mt-52">
      {/* Footer Links */}
      <div className="border-t border-[#E6E6FF]">
        <div className="container py-12 space-y-8 ml-32">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {footerLinks.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-medium text-[#1F2937]">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-sm text-[#6B7280] transition-colors hover:text-[#1F2937]">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#E6E6FF] pt-8 text-sm text-[#6B7280] md:flex-row">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-[#FFE5B4]" />
              <span>© 2024 Pastel. All rights reserved.</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#1F2937]">
                Twitter
              </a>
              <a href="#" className="hover:text-[#1F2937]">
                GitHub
              </a>
              <a href="#" className="hover:text-[#1F2937]">
                Discord
              </a>
              <a href="#" className="hover:text-[#1F2937]">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

