import type { Block } from "@/components/GuideBody";
import type { Source } from "@/components/Sources";

/**
 * Comparison pages.
 * ------------------------------------------------------------------
 * These exist for a specific, evidence-backed reason. Across every
 * vendor analysis of AI citations, comparison content is cited at a
 * markedly higher rate than ordinary articles, and tables outperform
 * prose for comparison intent. The mechanism is obvious once stated:
 * a retrieval system answering "X or Y?" wants a structured, factual
 * side-by-side, and most of the web offers a thousand-word ramble
 * that never commits to an answer.
 *
 * So the format here is deliberate:
 *   verdict   stated up front, before the evidence. If we will not
 *             commit to a recommendation, the page should not exist.
 *   table     the substance, in a form that survives extraction.
 *   bestFor   explicit "choose this if you are that person" mapping,
 *             which is what a person actually came for.
 *
 * Rules, same as guides: no em dashes, every number sourced, all
 * pricing labelled as published market data rather than our own, and
 * where a fact is time-sensitive the page says when it was checked.
 * We compare competitors' products honestly, including where they
 * beat what we would build.
 */

export type Comparison = {
  slug: string;
  name: string;
  category: "Platforms" | "Payments" | "Buying";
  metaTitle: string;
  metaDescription: string;
  h1: string;
  standfirst: string;
  published: string;
  updated: string;
  readingTime: number;
  /** The answer, stated before the evidence. */
  verdict: string;
  /** Explicit mapping of option to the person it suits. */
  bestFor: { option: string; who: string }[];
  /** The head-to-head table. This is the most extractable part. */
  table: {
    caption?: string;
    headers: string[];
    rows: string[][];
  };
  blocks: Block[];
  faqs: { q: string; a: string }[];
  sources: Source[];
  related: string[];
};

export const comparisons: Comparison[] = [
  // =================================================================
  {
    slug: "windcave-vs-stripe-nz",
    name: "Windcave vs Stripe",
    category: "Payments",
    metaTitle: "Windcave vs Stripe in New Zealand: An Honest Comparison",
    metaDescription:
      "How Windcave and Stripe actually differ for New Zealand merchants: fee structure, bank merchant facilities, integration effort, and which suits which business.",
    h1: "Windcave vs Stripe for New Zealand merchants",
    standfirst:
      "The real difference is structural, not a rate comparison. Stripe is its own acquirer with published flat pricing. Windcave is a gateway that sits in front of a merchant facility you obtain separately from your bank, with rates negotiated per merchant and never published.",
    published: "2026-07-30",
    updated: "2026-07-30",
    readingTime: 8,
    verdict:
      "For most New Zealand businesses under moderate volume, Stripe is the pragmatic choice: published pricing, no separate bank facility, and the better developer experience. Windcave becomes genuinely compelling at higher volume, where interchange-plus billing passes regulated interchange savings through to you instead of burying them in a blended rate, and for businesses that also need in-person terminals on the same platform.",
    bestFor: [
      {
        option: "Stripe",
        who: "Lower to moderate volume, online only, want predictable published costs and fast setup without a separate bank application.",
      },
      {
        option: "Windcave",
        who: "Higher volume where interchange-plus billing materially beats a blended rate, businesses wanting in-store and online on one platform, and those who prefer a New Zealand founded provider.",
      },
      {
        option: "Bank transfer, POLi or Account2Account",
        who: "High average order values, where a capped fee of about $3 beats a percentage that keeps climbing.",
      },
    ],
    table: {
      caption:
        "Checked 30 July 2026. Stripe's figures are published; Windcave's are not, which is itself a meaningful difference.",
      headers: ["", "Stripe", "Windcave"],
      rows: [
        ["Origin", "United States, operates a full NZ market presence", "Founded in Auckland in 1999, formerly Payment Express"],
        ["Role", "Gateway and acquirer in one", "Gateway only, requires a separate bank merchant facility"],
        ["Domestic card rate", "2.65% + NZ$0.30, published", "Not published, negotiated per merchant"],
        ["International cards", "3.5% + NZ$0.30, plus 2% if currency conversion applies", "Not published"],
        ["Billing models", "Flat blended rate", "Interchange+, Interchange++, or blended"],
        ["Bank direct debit", "NZ BECS at 1% + NZ$0.40, capped NZ$4.00", "Account2Account, a Windcave product"],
        ["Monthly fee", "None on standard pricing", "Typically yes, plus setup"],
        ["Payout timing to NZ bank", "4 business days initial settlement", "Depends on your acquiring bank"],
        ["Setup effort", "Self-service, live the same day", "Bank merchant application first, typically days"],
        ["In-person terminals", "Stripe Terminal", "Yes, including Tap to Pay on iPhone"],
      ],
    },
    blocks: [
      {
        type: "h2",
        text: "The structural difference that actually matters",
      },
      {
        type: "p",
        text: "Most comparisons of these two put percentages side by side, which misses the point. Stripe acts as both gateway and acquirer, so one published rate covers everything and you can be taking payments the same afternoon. Windcave is a gateway: it transmits the transaction, but the merchant facility that actually accepts the money comes from your bank, negotiated separately, at a rate neither party publishes. That means a Windcave quote is not comparable to Stripe's headline number until you also have your bank's merchant service fee, and many merchants never assemble the full picture.",
      },
      {
        type: "h2",
        text: "Where interchange-plus becomes worth the complexity",
      },
      {
        type: "p",
        text: "This is the strongest argument for Windcave and it is rarely explained properly. Windcave's merchant documentation describes three billing models: interchange-plus, interchange-plus-plus, and blended. Under interchange-plus you pay the actual interchange fee set by the card schemes plus a defined margin, so when regulators cap interchange the saving reaches you. The Commerce Commission's interchange decision took effect from 1 December 2025 for domestic cards and 1 May 2026 for foreign-issued cards. Under a blended rate, those savings are absorbed by the provider. At low volume the difference is noise. At high volume it is the whole conversation.",
      },
      {
        type: "h2",
        text: "Bank requirements differ by bank, and two are restrictive",
      },
      {
        type: "p",
        text: "If you go the gateway route, your bank shapes your options more than you might expect. ASB and Westpac New Zealand both mandate 3D Secure and require a hosted payment page, meaning the customer is taken to a payment page you do not fully control. ANZ, BNZ, and Kiwibank do not mandate a specific solution, leaving more freedom over checkout design. BNZ additionally requires two separate merchant numbers if you need multi-currency. None of this applies with Stripe, because there is no separate bank facility in the path.",
      },
      {
        type: "callout",
        title: "Cards are not the cheapest option in New Zealand",
        body: "For higher order values, bank transfer methods win clearly because their fees are capped rather than proportional. POLi charges 1.00% capped at $3.00. Account2Account, which is a Windcave product, is commonly cited at around 1.2% capped at $3. Stripe's NZ BECS Direct Debit is 1% plus $0.40 capped at $4.00. On a $2,000 order, a capped $3 fee against 2.65% plus 30 cents is the difference between $3 and roughly $53.",
      },
      {
        type: "h2",
        text: "What we would actually recommend",
      },
      {
        type: "p",
        text: "Start with Stripe unless you have a specific reason not to, because published pricing and self-service setup remove two weeks of friction and the rate is competitive at the volumes most businesses operate at. Revisit the decision when card volume becomes a material cost line, at which point get an interchange-plus quote and compare properly. Offer a bank transfer option alongside cards if your average order value is high, because that single addition often saves more than any gateway negotiation will. And keep in mind that Windcave not publishing rates is not sinister, it is normal for that market structure, but it does mean you have to do the work to compare.",
      },
    ],
    faqs: [
      {
        q: "Is Stripe cheaper than Windcave in New Zealand?",
        a: "At low to moderate volume, usually yes on a total-cost basis, because Stripe's published 2.65% plus 30 cents includes acquiring, whereas a Windcave quote sits on top of a separately negotiated bank merchant service fee. At higher volume the answer can reverse, because Windcave offers interchange-plus billing that passes regulated interchange reductions through to the merchant while a blended rate does not.",
      },
      {
        q: "Do I need a bank merchant account to use Stripe in New Zealand?",
        a: "No. Stripe acts as its own acquirer, so you only need a New Zealand bank account to be paid into. Local gateways such as Windcave require you to obtain a merchant facility from ANZ, ASB, BNZ, Kiwibank, or Westpac separately, which is the main reason their setup takes longer.",
      },
      {
        q: "How long does Stripe take to pay out in New Zealand?",
        a: "Stripe's documentation gives New Zealand an initial settlement timing of four business days, with no faster default available for this market. After the initial period you can set manual, daily, weekly, or monthly payout schedules.",
      },
      {
        q: "Is Windcave a New Zealand company?",
        a: "It was founded in Auckland in 1999 and traded as Payment Express until the name legally changed to Windcave on 1 July 2019. It now operates in more than forty countries with offices across New Zealand, Australia, the United Kingdom, the United States, and Lithuania.",
      },
      {
        q: "What is the cheapest way to take online payments in New Zealand?",
        a: "For higher order values, bank transfer methods are cheapest because their fees are capped rather than proportional: POLi is 1.00% capped at $3.00, and Stripe's NZ BECS Direct Debit is 1% plus $0.40 capped at $4.00. For small transactions the caps never bite and card rates are competitive. The practical answer for most stores is to offer both.",
      },
    ],
    sources: [
      {
        title: "Stripe New Zealand pricing",
        publisher: "Stripe",
        href: "https://stripe.com/nz/pricing",
      },
      {
        title: "Payouts documentation",
        publisher: "Stripe",
        href: "https://docs.stripe.com/payouts",
      },
      {
        title: "Merchant Operating Guide",
        publisher: "Windcave",
        href: "https://www.windcave.com/document/Windcave-Merchant-Operating-Guide.pdf",
      },
      {
        title: "About Windcave",
        publisher: "Windcave",
        href: "https://www.windcave.com/about",
      },
      {
        title: "POLi merchant pricing",
        publisher: "POLi Payments New Zealand",
        href: "https://www.polipay.co.nz/pricing",
      },
      {
        title: "Retail payment system regulation",
        publisher: "Ministry of Business, Innovation and Employment",
        href: "https://www.mbie.govt.nz/business-and-employment/business/competition-regulation-and-policy/retail-payment-systems",
      },
    ],
    related: ["nz-bnpl-options", "shopify-vs-woocommerce-nz"],
  },

  // =================================================================
  {
    slug: "nz-bnpl-options",
    name: "Buy now pay later in NZ",
    category: "Payments",
    metaTitle: "Buy Now Pay Later in New Zealand: What Is Left in 2026",
    metaDescription:
      "The NZ buy now pay later market has contracted sharply. Laybuy collapsed, Zip is winding down, and what remains is a much shorter list than most sites still show.",
    h1: "Buy now pay later in New Zealand",
    standfirst:
      "This market has contracted faster than most retailers have noticed. Laybuy went into receivership in 2024 and its brand now belongs to Klarna. Zip announced its New Zealand exit on 17 July 2026. If your checkout still shows Laybuy or Zip badges, they are wrong.",
    published: "2026-07-30",
    updated: "2026-07-30",
    readingTime: 6,
    verdict:
      "Afterpay and Klarna are the two options with a stable New Zealand presence as at 30 July 2026. Before adding any buy now pay later option, be clear that the merchant fee is several times a card fee, so it has to earn its place through genuinely incremental sales rather than by moving customers who would have paid by card anyway.",
    bestFor: [
      {
        option: "Afterpay",
        who: "Retail with average order values roughly between $50 and $600, and a younger customer base that recognises the brand.",
      },
      {
        option: "Klarna",
        who: "Retailers who want the pay-in-four model and, in New Zealand, whatever recognition the acquired Laybuy brand still carries.",
      },
      {
        option: "No buy now pay later at all",
        who: "Business to business, high value considered purchases, or thin margins where a merchant fee of several times card cost cannot be absorbed.",
      },
    ],
    table: {
      caption:
        "New Zealand status checked 30 July 2026. This market is moving quickly, so verify before building any of it into a checkout.",
      headers: ["Provider", "NZ status", "Owner", "Notes"],
      rows: [
        ["Afterpay", "Available", "Block, Inc.", "Operated through the Australian entity. Merchant fees are not published for NZ."],
        ["Klarna", "Available", "Klarna", "Acquired the Laybuy platform and relaunched the brand in April 2025."],
        ["Laybuy", "Gone as an independent business", "Brand now Klarna", "Receivership 17 June 2024. laybuy.com/nz redirects to Klarna."],
        ["Zip", "Winding down", "Zip Co Limited", "Exit announced 17 July 2026. Spend limits to zero on 16 August 2026, no new purchases from 17 August 2026."],
      ],
    },
    blocks: [
      {
        type: "h2",
        text: "Two exits in two years, and what that says",
      },
      {
        type: "p",
        text: "Laybuy, a New Zealand founded and listed business, went into receivership on 17 June 2024 after failing to find a buyer, having struggled in both New Zealand and the United Kingdom. Klarna subsequently acquired its platform and brand and relaunched it in April 2025, with Laybuy's founder now leading Klarna's Australia and New Zealand operations. Zip then announced on 17 July 2026 that it would wind down its New Zealand operations following a strategic review, refocusing on Australia and the United States. Two departures in two years from a market this size is a signal about the economics rather than a coincidence.",
      },
      {
        type: "callout",
        title: "If you take Zip today, check your dates",
        body: "Zip customer spend limits reduce to zero on 16 August 2026, and from 17 August 2026 customers cannot make new purchases. Existing repayment schedules are unaffected. If Zip is live in your checkout, it needs removing before that date rather than after customers start failing at payment.",
      },
      {
        type: "h2",
        text: "The merchant cost nobody publishes",
      },
      {
        type: "p",
        text: "Afterpay's own New Zealand merchant page states only that merchants are charged a fixed fee plus a percentage, that it can differ between online and in-store, and that exact rates are set in individual merchant agreements. It does not publish a figure. Comparable published figures from other markets sit well above card processing, which is the important point for a retailer deciding whether to offer it. Treat any specific New Zealand percentage you see quoted online as unverified, because the provider itself declines to state one.",
      },
      {
        type: "h2",
        text: "Settlement timing differs between online and in-store",
      },
      {
        type: "p",
        text: "Afterpay's published New Zealand terms describe two different flows. For online sales the remaining balance is paid to the merchant's nominated account typically up to five business days after the purchase date. For in-store sales Afterpay direct debits the amount from the merchant's nominated account, typically on the second day following the invoice date. That second arrangement is worth understanding before you agree to it, because the cash movement runs the opposite direction from what most retailers assume.",
      },
      {
        type: "h2",
        text: "How to decide",
      },
      {
        type: "ol",
        items: [
          "Work out your average order value. Buy now pay later earns its fee mainly in the range where a purchase is discretionary but not trivial, roughly $50 to $600 in retail.",
          "Ask whether it will generate incremental sales or simply move existing customers off a cheaper payment method. If it is the latter, you are paying several times card cost for nothing.",
          "Get the merchant agreement rate in writing before committing, because it is not published anywhere.",
          "Check settlement direction and timing, particularly for any in-store component.",
          "Audit your checkout and marketing for dead brands. Laybuy badges are now simply wrong, and Zip badges will be within weeks.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Zip still available in New Zealand?",
        a: "Not for much longer. Zip announced on 17 July 2026 that it is winding down its New Zealand operations. Customer spend limits reduce to zero on 16 August 2026 and no new purchases can be made from 17 August 2026. Existing repayment schedules continue unaffected.",
      },
      {
        q: "What happened to Laybuy?",
        a: "Laybuy Holdings and Laybuy Group Holdings went into receivership on 17 June 2024 after an unsuccessful search for a buyer. Klarna acquired the platform and brand, and relaunched Laybuy in New Zealand in April 2025 with a pay-in-four product. Laybuy no longer exists as an independent company, and its New Zealand web address now redirects to Klarna.",
      },
      {
        q: "What buy now pay later options are still available in New Zealand?",
        a: "As at 30 July 2026, Afterpay, owned by Block, and Klarna, which now owns the Laybuy brand. That is a considerably shorter list than most retailer websites and comparison articles still show.",
      },
      {
        q: "How much does Afterpay cost a merchant in New Zealand?",
        a: "Afterpay does not publish New Zealand merchant rates. Its own page states merchants pay a fixed fee plus a percentage, that this can differ between online and in-store, and that specific rates are set in individual merchant agreements. Figures circulating online for New Zealand should be treated as unverified.",
      },
    ],
    sources: [
      {
        title: "Afterpay merchant fees, New Zealand",
        publisher: "Afterpay",
        href: "https://www.afterpay.com/en-NZ/business/afterpay-merchant-fees",
      },
      {
        title: "Zip exits New Zealand buy now pay later market",
        publisher: "RNZ",
        href: "https://www.rnz.co.nz/news/business/733589/zip-exits-nz-buy-now-pay-later-market",
        date: "17 July 2026",
      },
      {
        title: "Laybuy receivership notice",
        publisher: "New Zealand Gazette",
        href: "https://gazette.govt.nz/notice/id/2024-ar2918",
        date: "17 June 2024",
      },
      {
        title: "Laybuy receivership information",
        publisher: "Deloitte New Zealand",
        href: "https://www.deloitte.com/nz/en/services/consulting-financial/perspectives/laybuy-receivership-information.html",
      },
    ],
    related: ["windcave-vs-stripe-nz", "shopify-vs-woocommerce-nz"],
  },

  // =================================================================
  {
    slug: "shopify-vs-woocommerce-nz",
    name: "Shopify vs WooCommerce",
    category: "Platforms",
    metaTitle: "Shopify vs WooCommerce for New Zealand Stores",
    metaDescription:
      "A practical comparison for New Zealand retailers: total cost of ownership, payment options, maintenance burden, and which platform suits which business.",
    h1: "Shopify vs WooCommerce in New Zealand",
    standfirst:
      "The honest comparison is not about features, because both do the basics well. It is about who carries the maintenance burden, and what happens when something breaks at 9pm on a Friday during a sale.",
    published: "2026-07-30",
    updated: "2026-07-30",
    readingTime: 8,
    verdict:
      "For most New Zealand retailers, Shopify is the better default. Payments, security, PCI scope, hosting, and uptime become someone else's problem, which is worth more than the subscription costs. WooCommerce wins where you need unusual functionality, already run a content-heavy WordPress site, or genuinely have the technical capacity to own the maintenance.",
    bestFor: [
      {
        option: "Shopify",
        who: "Retailers who want to sell rather than administer infrastructure, teams without a developer on hand, and anyone whose catalogue and fulfilment fit conventional patterns.",
      },
      {
        option: "WooCommerce",
        who: "Content-led businesses already on WordPress, stores needing unusual logic that Shopify's model constrains, and teams with real technical capacity or a retained developer.",
      },
      {
        option: "Custom storefront on a commerce API",
        who: "Brands where the buying experience itself is a differentiator, and performance and design control justify the additional build cost.",
      },
    ],
    table: {
      caption:
        "The comparison that matters is total cost of ownership including your own time, not subscription price.",
      headers: ["", "Shopify", "WooCommerce"],
      rows: [
        ["Model", "Hosted software as a service", "Open-source plugin for WordPress"],
        ["Licence cost", "Monthly subscription", "Free, but hosting and extensions are not"],
        ["Hosting", "Included and managed", "You arrange and pay for it"],
        ["Security patching", "Handled by Shopify", "Yours: WordPress core, plugins, and themes"],
        ["PCI compliance scope", "Substantially reduced by the hosted checkout", "Depends on your gateway integration"],
        ["Payment options in NZ", "Shopify Payments, Stripe, Windcave app, POLi via apps", "Any gateway with a WooCommerce plugin"],
        ["Customisation ceiling", "High but bounded by the platform's model", "Effectively unbounded"],
        ["Failure mode", "Rare, and Shopify's problem", "Plugin conflicts and update breakage, and yours"],
        ["Content and blogging", "Adequate", "Strong, it is WordPress"],
        ["Realistic ongoing effort", "Low", "Moderate to high"],
      ],
    },
    blocks: [
      {
        type: "h2",
        text: "Free is the most misleading word in this comparison",
      },
      {
        type: "p",
        text: "WooCommerce is free to download, and this is where a lot of New Zealand retailers get caught. The plugin costs nothing; hosting, an SSL certificate, a decent theme, and the extensions needed for shipping rules, subscriptions, or bookings all cost something, often on separate annual renewals. Added to that is the cost that never appears on an invoice: someone has to apply updates, resolve plugin conflicts, and respond when something breaks. If that person is you at 9pm during a sale, the subscription you avoided was not the expensive part.",
      },
      {
        type: "h2",
        text: "What you are actually buying with Shopify",
      },
      {
        type: "p",
        text: "The subscription buys transferred responsibility. Shopify handles hosting, uptime, security patching, and the compliance burden around card data, since a hosted checkout keeps card details away from your infrastructure entirely. For a retailer whose competitive advantage is their product rather than their web infrastructure, that is a good trade. The cost is that you operate within Shopify's model, and where your requirements sit outside it you will feel the walls rather than being able to build past them.",
      },
      {
        type: "h2",
        text: "New Zealand specifics that affect the choice",
      },
      {
        type: "ul",
        items: [
          "Rural delivery. New Zealand parcels to rural addresses attract a surcharge, currently $6.00 with NZ Post, and rural status is not reliably visible from the address text. Both platforms need an address lookup with a rural flag at checkout. Neither does this out of the box.",
          "GST display. Consumer prices should be shown inclusive of GST. Both platforms handle tax-inclusive display, but the setting is easy to get wrong on a store originally configured for a market that displays tax exclusive.",
          "Low-value imported goods. If you sell into New Zealand from offshore, GST applies at checkout on consignments of NZ$1,000 or less, and at the border above that. This logic has to live in the cart.",
          "Local payment methods. Bank transfer options such as POLi and Account2Account are meaningfully cheaper than cards on high-value orders because their fees are capped, and both platforms can support them through apps or plugins.",
        ],
      },
      {
        type: "callout",
        title: "The question that settles it",
        body: "Who applies the security update, and how quickly? If the honest answer is nobody in particular, choose Shopify. An unmaintained WooCommerce store is not a cheaper store, it is a liability accruing quietly until something exploits it.",
      },
      {
        type: "h2",
        text: "The third option most comparisons omit",
      },
      {
        type: "p",
        text: "You can keep a proven commerce engine and build the storefront yourself. In this arrangement Shopify continues to handle products, payments, tax, and orders, while the customer-facing experience is built from scratch and served as pre-rendered pages from an edge network. You get a genuinely distinctive, very fast storefront without taking on responsibility for payment security. It costs more to build than a stock theme, so it is worth it when the buying experience is part of what makes the brand, and not otherwise.",
      },
    ],
    faqs: [
      {
        q: "Is Shopify or WooCommerce better for a New Zealand business?",
        a: "For most New Zealand retailers, Shopify, because it removes hosting, security patching, uptime, and most PCI compliance scope in exchange for a predictable subscription. WooCommerce is the better fit for content-led businesses already running WordPress, for stores needing unusual functionality, and for teams with genuine technical capacity to maintain it.",
      },
      {
        q: "Is WooCommerce actually cheaper than Shopify?",
        a: "Rarely, once total cost of ownership is counted. The plugin is free, but hosting, premium extensions, a theme, and maintenance are not, and the largest cost is usually the time or retainer spent keeping it patched and working. WooCommerce is cheaper on the invoice and frequently not cheaper in reality.",
      },
      {
        q: "Can I move from WooCommerce to Shopify without losing search rankings?",
        a: "Yes, if the migration is handled properly. Products, customers, and orders migrate between major platforms. The part that determines whether rankings survive is URL mapping: every existing product and category URL needs a permanent redirect to its new equivalent, planned before launch. Migrations that skip this routinely lose a large share of organic traffic.",
      },
      {
        q: "Which platform is faster?",
        a: "Shopify is faster by default, because it is managed infrastructure with a content delivery network included. WooCommerce can be made very fast with good hosting and disciplined plugin use, and is commonly slow in practice because neither of those holds. A custom storefront on a commerce API is faster than either, at higher build cost.",
      },
    ],
    sources: [
      {
        title: "Rural charge for tracked services",
        publisher: "NZ Post",
        href: "https://www.nzpost.co.nz/tools/rate-finder/sending-nz/rural-charge-for-tracked-services",
      },
      {
        title: "GST on low value imported goods",
        publisher: "Inland Revenue",
        href: "https://www.ird.govt.nz/gst/gst-for-overseas-businesses/gst-on-low-value-imported-goods",
      },
      {
        title: "Selling online: your obligations",
        publisher: "New Zealand Commerce Commission",
        href: "https://www.comcom.govt.nz/business/dealing-with-typical-situations/selling-goods-and-services/selling-online/",
      },
    ],
    related: ["wordpress-vs-custom", "windcave-vs-stripe-nz"],
  },

  // =================================================================
  {
    slug: "wordpress-vs-custom",
    name: "WordPress vs custom build",
    category: "Platforms",
    metaTitle: "WordPress vs a Custom Built Website: Which and Why",
    metaDescription:
      "An honest comparison from a studio that builds custom, including the cases where WordPress is genuinely the better answer for your business.",
    h1: "WordPress vs a custom build",
    standfirst:
      "We build custom sites, so read this with that in mind. It is also why the cases where WordPress wins are stated plainly below rather than glossed over: a studio that claims its own approach suits every business is not being straight with you.",
    published: "2026-07-30",
    updated: "2026-07-30",
    readingTime: 8,
    verdict:
      "WordPress is the right answer when you publish a lot of content, need a large ecosystem of ready-made functionality, or have a budget that does not support custom work. A custom build is the right answer when speed, security, distinctiveness, and low ongoing maintenance matter more than plugin availability, and when the site is a commercial asset rather than a brochure.",
    bestFor: [
      {
        option: "WordPress",
        who: "Content-heavy publishers, organisations needing many third-party integrations that already exist as plugins, and budgets where custom design is genuinely out of reach.",
      },
      {
        option: "Custom build",
        who: "Businesses competing on quality where the site must not look like anyone else's, sites where speed and security matter commercially, and teams tired of the maintenance treadmill.",
      },
      {
        option: "A website builder",
        who: "Very early stage businesses that need something credible online this week and will revisit it later. This is a legitimate answer, not a failure.",
      },
    ],
    table: {
      caption:
        "Both approaches are legitimate. The differences below are structural rather than matters of quality.",
      headers: ["", "WordPress", "Custom build"],
      rows: [
        ["Share of the web", "Very large, roughly two in five sites", "Small by comparison"],
        ["Upfront cost", "Lower", "Higher"],
        ["Ongoing maintenance", "Regular, core plus plugins plus themes", "Minimal on a static build"],
        ["Security surface", "Database, admin login, plugin ecosystem", "No database or admin panel on a static build"],
        ["Speed", "Needs active work to be fast", "Fast by default"],
        ["Design ceiling", "Bounded by theme and page builder", "Whatever was designed"],
        ["Functionality", "Enormous plugin ecosystem", "Built to requirement"],
        ["Who can maintain it", "Very many developers", "Fewer, but any competent framework developer"],
        ["Content editing", "Strong and familiar", "Via a headless editor, equally usable"],
      ],
    },
    blocks: [
      {
        type: "h2",
        text: "Where WordPress genuinely wins",
      },
      {
        type: "p",
        text: "It runs a very large share of the web for real reasons. If you publish frequently, the editorial experience is mature and your team probably already knows it. If you need functionality that exists as a plugin, buying it is faster and cheaper than building it. The talent pool is enormous, so you are never dependent on one agency. And the entry cost is genuinely lower, which matters when a custom build is simply out of reach. Any studio that dismisses all of that is arguing for its own commercial interest rather than yours.",
      },
      {
        type: "h2",
        text: "Where it costs you, and the cost is ongoing",
      },
      {
        type: "p",
        text: "The flexibility that makes WordPress powerful is also its liability. Every plugin is code from a third party running on your site, and most compromises exploit an out-of-date component rather than anything sophisticated. Plugins conflict, updates break things, and performance degrades as more are added. None of this is fatal, and a well-maintained WordPress site is fine. But the words well-maintained are carrying the weight, and someone has to do the maintaining month after month, which is the cost that never appears in the original quote.",
      },
      {
        type: "h2",
        text: "What a custom build actually changes",
      },
      {
        type: "p",
        text: "A statically generated custom site has no database to inject, no admin panel exposed to the internet, and no plugin ecosystem to keep patched. Pages are pre-built files served from an edge network, so they load in a fraction of the time and stay fast without ongoing tuning. Content is still editable through a headless editor that your team uses exactly like a CMS. The trade-offs are real and worth stating: structural changes need a developer, functionality has to be built rather than installed, and the upfront cost is higher.",
      },
      {
        type: "callout",
        title: "The question to ask yourself",
        body: "Is your website a cost to be minimised or an asset that generates business? If it is genuinely a brochure that needs to exist, WordPress or even a builder is a sensible, unsentimental answer. If it is how customers decide whether to trust you with real money, the calculation changes, and so does what you should be willing to spend.",
      },
      {
        type: "h2",
        text: "Market cost, so you can judge a quote",
      },
      {
        type: "p",
        text: "New Zealand market ranges in 2026 put template-based sites at roughly $1,000 to $4,000, custom-designed business websites at roughly $2,500 to $10,000, and larger custom builds higher again. Maintenance commonly runs from about $50 to $150 a month for basic hosting and updates, and from about $200 to $800 for fuller care. Those are published market figures rather than our prices, and every project is scoped individually. What they are useful for is recognising a quote that sits far outside the market in either direction and asking why.",
      },
    ],
    faqs: [
      {
        q: "Is WordPress bad for SEO?",
        a: "No. WordPress can rank extremely well and has strong SEO tooling available. The common problems are indirect: slow loading from plugin accumulation, bloated markup from page builders, and duplicate URLs from archive and taxonomy pages. All are fixable, but they need attention rather than happening correctly by default.",
      },
      {
        q: "Is a custom website more secure than WordPress?",
        a: "A statically generated custom site removes the categories of risk that cause most real-world compromises: there is no database to inject, no admin login exposed to the internet, and no plugin ecosystem requiring constant patching. It is not immune to everything, and a diligently maintained WordPress site can be perfectly secure. The difference is how much ongoing discipline each demands to stay that way.",
      },
      {
        q: "Can I edit a custom-built website myself?",
        a: "Yes, for the parts designed to change. A headless content editor gives you the same kind of interface as a CMS for pages, posts, products, and team members, while structural and design changes go back to a developer. That boundary is deliberate: it is what stops a considered design drifting apart over a year of edits.",
      },
      {
        q: "How much more does a custom website cost?",
        a: "In current New Zealand market terms, template-based sites run from about $1,000 to $4,000 while custom-designed business websites run from about $2,500 to $10,000, with larger builds higher. Those are market ranges rather than our prices. The gap narrows over several years once maintenance, plugin licences, and performance work are counted.",
      },
      {
        q: "Should I move off WordPress?",
        a: "Not automatically. If your site is fast, maintained, secure, and doing its commercial job, moving is an expense with no return. The genuine reasons to move are that maintenance has become a burden nobody owns, performance is hurting you, the design has hit the ceiling of what your theme allows, or security has already been a problem.",
      },
    ],
    sources: [
      {
        title: "Core Web Vitals",
        publisher: "web.dev, Google",
        href: "https://web.dev/articles/vitals",
      },
      {
        title: "Introduction to structured data markup",
        publisher: "Google Search Central",
        href: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
      },
    ],
    related: ["shopify-vs-woocommerce-nz", "freelancer-vs-agency"],
  },

  // =================================================================
  {
    slug: "freelancer-vs-agency",
    name: "Freelancer vs agency vs builder",
    category: "Buying",
    metaTitle: "Freelancer vs Agency vs Website Builder in New Zealand",
    metaDescription:
      "The three ways to get a website built in New Zealand, what each actually costs, and the failure mode of each one that nobody warns you about.",
    h1: "Freelancer, agency, or do it yourself",
    standfirst:
      "Three routes, three genuinely different risk profiles. The useful comparison is not price, it is what happens when the person who built your site becomes unavailable, and each option fails differently.",
    published: "2026-07-30",
    updated: "2026-07-30",
    readingTime: 7,
    verdict:
      "A website builder is right when you need something credible online quickly and cheaply and can accept looking like other businesses. A good freelancer is often the best value for a straightforward custom site. A studio or agency is worth the premium when the site is commercially important, when continuity matters, or when the work spans design, engineering, content, and search.",
    bestFor: [
      {
        option: "Website builder",
        who: "Pre-revenue or very early businesses, side projects, and anyone who needs a credible presence this week rather than a considered one next month.",
      },
      {
        option: "Freelancer",
        who: "Straightforward custom sites with a clear brief, where direct access to the person doing the work is worth more than institutional backup.",
      },
      {
        option: "Studio or agency",
        who: "Businesses where the website drives real revenue, projects spanning several disciplines, and organisations that need someone to still be there in three years.",
      },
    ],
    table: {
      caption:
        "Ranges are published New Zealand market figures for 2026, not any one provider's prices.",
      headers: ["", "Builder", "Freelancer", "Studio or agency"],
      rows: [
        ["Typical NZ market cost", "$0 to $50 a month", "$1,000 to $6,000", "$2,500 to $40,000"],
        ["Time to live", "Days", "2 to 6 weeks", "4 to 8 weeks"],
        ["Design distinctiveness", "Low, template based", "Varies widely", "High"],
        ["Range of disciplines", "You are all of them", "Usually one or two", "Design, engineering, content, search"],
        ["Continuity risk", "Low, platform persists", "High, single point of failure", "Low to moderate"],
        ["Direct access to the maker", "n/a", "Complete", "Varies, ask directly"],
        ["Ongoing support", "Platform support only", "Depends on their availability", "Usually contracted"],
        ["Main failure mode", "You outgrow it", "They become unavailable", "You pay for overhead you did not need"],
      ],
    },
    blocks: [
      {
        type: "h2",
        text: "Website builders, and the honest case for them",
      },
      {
        type: "p",
        text: "Squarespace, Wix, Shopify, and New Zealand's own Rocketspark are genuinely good products, and a business with no budget and no site is better served by a competent template today than by an ideal custom site it cannot afford. The trade-offs are that your site shares its structure with many thousands of others, customisation stops at a hard ceiling, performance is bounded by the platform, and you are renting rather than owning. Outgrowing a builder is a good problem, and migrating away is a normal, solvable project.",
      },
      {
        type: "h2",
        text: "Freelancers, where the value usually is",
      },
      {
        type: "p",
        text: "For a straightforward custom site, a good freelancer is frequently the best value available, and you get something an agency structurally cannot offer: direct, unmediated access to the person actually doing the work, with no account layer translating between you. The risk is concentration. Illness, a busy period, a change of career, or simply losing interest leaves you with a site nobody knows. Mitigate it in the contract rather than in hope: insist the code and accounts are in your name, get documentation, and ask what happens if they are unavailable for a month.",
      },
      {
        type: "h2",
        text: "Studios and agencies, and what the premium buys",
      },
      {
        type: "p",
        text: "The premium buys range and continuity. A project needing positioning, design, engineering, content, and search visibility involves skills one person rarely holds at depth, and a team means work continues when someone is away. The premium also buys overhead you may not need, and it introduces the industry's most common gap between expectation and reality: the senior person who wins the project is often not the person who does it. Ask directly who will design and build your site, whether they are employees or contractors, and whether you will speak to them.",
      },
      {
        type: "callout",
        title: "The one question that applies to all three",
        body: "Who owns the domain, the code, the design files, and the hosting account when this is over? The answer should be you, in writing, in every case. Some providers register clients' domains in their own name, which turns an ordinary parting of ways into a hostage situation. This is the single most important term in the arrangement and the one least often checked.",
      },
      {
        type: "h2",
        text: "How to choose without agonising",
      },
      {
        type: "ol",
        items: [
          "Ask what the site has to achieve commercially. If the honest answer is that it needs to exist and look respectable, a builder or a freelancer is sufficient.",
          "Ask how much revenue depends on it. As that number rises, so does the case for paying for continuity and range.",
          "Ask how many disciplines the project genuinely needs. One discipline suits a freelancer; four suits a team.",
          "Ask what happens if your provider disappears next month, and choose the option whose answer you can live with.",
          "Whatever you choose, get ownership of the domain, code, and accounts in writing before any money changes hands.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I hire a freelancer or an agency for my website?",
        a: "A good freelancer is often better value for a straightforward site and gives direct access to the person doing the work. An agency or studio costs more and adds coordination overhead but provides continuity and a wider range of skills. The deciding factor is usually how commercially important the site is and how many disciplines the project genuinely requires.",
      },
      {
        q: "Are website builders good enough for a real business?",
        a: "For many businesses, yes, particularly early on. Modern builders produce respectable, functional sites quickly and cheaply. The limits are that your site shares its structure with many others, customisation and performance hit a ceiling, and you are renting the platform rather than owning the site. Outgrowing one is a normal progression rather than a mistake.",
      },
      {
        q: "How much does a website cost in New Zealand?",
        a: "Published New Zealand market ranges for 2026 run from about $1,000 for a template-based small business site to $10,000 or more for custom design, with e-commerce commonly from around $5,000 and larger platform builds higher. Those are market figures rather than any one provider's prices, and scope drives the number far more than provider type does.",
      },
      {
        q: "What happens if my web designer disappears?",
        a: "It depends entirely on what you own. If the domain is registered in your name, the hosting account is yours, and you hold the code and design files, it is an inconvenience and another developer can pick it up. If any of those sit with the departed provider, it can become expensive and occasionally unrecoverable. Settle this in writing before work starts.",
      },
    ],
    sources: [
      {
        title: "Companies Register search",
        publisher: "New Zealand Companies Office",
        href: "https://companies-register.companiesoffice.govt.nz/",
      },
      {
        title: "Obligations under the Fair Trading Act",
        publisher: "Consumer Protection, MBIE",
        href: "https://www.consumerprotection.govt.nz/guidance-for-businesses/complying-with-consumer-laws/obligations-under-the-fair-trading-act",
      },
    ],
    related: ["wordpress-vs-custom", "shopify-vs-woocommerce-nz"],
  },
];

export const getComparison = (slug: string) =>
  comparisons.find((c) => c.slug === slug);
