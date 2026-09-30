import { Reveal } from "@/components/marketing/reveal"

const STEPS = [
  {
    n: "01",
    title: "The seller shares their link.",
    body: "One PayProof link in the chat. Transfer, USSD, card, any bank, it all works, and you never change your account number again.",
    image: "/images/step-seller.webp",
    alt: "Shop owner checking his phone beside an open laptop in an electronics store",
  },
  {
    n: "02",
    title: "The buyer pays.",
    body: "They pay however they already pay. The money lands in the reserved account, and PayProof gets the confirmation directly.",
    image: "/images/step-buyer.webp",
    alt: "Young man at a desk checking a shopping app on his phone beside a laptop",
  },
  {
    n: "03",
    title: "The money waits for the doorbell.",
    body: "Product price and dispatch fee stay locked until the buyer confirms delivery. Then the seller gets paid, the rider gets paid.",
    image: "/images/step-rider.webp",
    alt: "Woman receiving a parcel from a delivery rider at her front door",
  },
] as const;

export function HowItWorks() {
  return (
    <Reveal as="section" id="how" className="border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="display-xl">Three steps. Zero screenshots.</h2>
          <p className="mx-auto mt-4 max-w-[52ch] leading-relaxed text-muted-foreground text-pretty">
            From account number to split payout, PayProof runs the whole sale
            while you stay in the chat.
          </p>
        </div>

        <div className="mt-14 border-t border-border/60">
          <ol className="grid gap-10 md:grid-cols-3 md:gap-12">
            {STEPS.map((step) => (
              <li key={step.n} className="pt-8">
                <div className="aspect-[3/2] overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={step.image}
                    alt={step.alt}
                    loading="lazy"
                    draggable={false}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-primary">
                  {step.n}
                </div>
                <h3 className="mt-4 font-heading text-xl font-extrabold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground text-pretty">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Reveal>
  );
}
