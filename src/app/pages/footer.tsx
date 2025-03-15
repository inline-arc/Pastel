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
    <footer className="mt-24">
      {/* Features Section */}
      <div className="container mb-16">
        <div className="rounded-[2rem] bg-gradient-to-b from-white/80 to-white/40 p-8 shadow-lg backdrop-blur-sm">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-medium text-[#1F2937]">Simple payments, powerful features</h2>
            <p className="mt-4 text-[#6B7280]">Let your clients simply click and pay, easy as that.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-xl bg-white/50 p-6 transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-lg bg-[#98D8B6]/10 p-3 transition-colors group-hover:bg-[#98D8B6]/20">
                  <feature.icon className="h-6 w-6 text-[#98D8B6]" />
                </div>
                <h3 className="mb-2 font-medium text-[#1F2937]">{feature.title}</h3>
                <p className="text-sm text-[#6B7280]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-[#E6E6FF]">
        <div className="container py-12">
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

