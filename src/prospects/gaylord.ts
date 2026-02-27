import type { ProspectConfig } from '@/types/prospect';

export const gaylordConfig: ProspectConfig = {
  prospect: {
    fullName: 'Jim & Robin Gaylord',
    preparedDate: 'February 26, 2026',
  },
  situation: {
    facts: [
      {
        label: 'Age / Retirement',
        value: 'Both age 55, turning 56 in spring 2026. Robin retiring in 2026; Jim targeting 2028.',
      },
      {
        label: 'Career',
        value: 'Both long-tenured Wegmans employees — Jim (38 years) and Robin (33 years).',
      },
      {
        label: 'Total Investable Assets',
        value: '$2,723,728 across six accounts — heavily concentrated in Wegmans 401(k)s.',
      },
      {
        label: 'Net Worth',
        value: '$3,115,834 including primary home ($667,665) and $277,559 in liabilities.',
      },
      {
        label: 'Annual Spending',
        value: '$132,000/yr ($11,000/mo) in retirement — current lifestyle maintenance goal.',
      },
      {
        label: 'Income (Pre-Retirement)',
        value: 'Jim: $201,000/yr. Robin: $113,573/yr. Combined: $314,573/yr.',
      },
      {
        label: 'Social Security',
        value: 'Jim: ~$64,800/yr. Robin: ~$24,000/yr. Claiming age TBD — not factored in early years.',
      },
      {
        label: 'Housing',
        value: 'Primary home in Walworth, NY. Mortgage balance: $268,715 at 6.625%.',
      },
      {
        label: 'Healthcare (Pre-Medicare)',
        value:
          'Significant gap: both retire before Medicare eligibility at 65. Private coverage costs modeled at $3,572/person/yr (likely conservative).',
      },
      {
        label: 'Tax Allocation',
        value:
          '95.6% of assets in tax-deferred accounts ($2.6M). Only $76K taxable, $42K tax-free — major Roth conversion opportunity.',
      },
    ],
    primaryGoal: {
      quote:
        "We don't want to die with $5 million in the bank — what's the point? But we also don't want to be eating ramen noodles in our late 70s. How do we balance it so we don't have to worry about money, but we can actually enjoy it?",
    },
    riskProfile: {
      description:
        'The Gaylords expressed comfort with market volatility and a long-term growth orientation, consistent with a moderate-to-moderately-aggressive risk profile. Their current portfolio is 60% equity / 40% fixed income — but 30.5% of the portfolio sits in cash, significantly muting returns and creating drag. The proposed Iconoclastic 70/30 target allocation aligns better with their long retirement horizon and growth needs.',
    },
  },
  allocation: {
    categories: [
      { label: 'U.S. Equities', current: 51.0, target: 57.0 },
      { label: 'International Equities', current: 6.2, target: 14.4 },
      { label: 'Emerging Markets', current: 1.5, target: 3.4 },
      { label: 'Real Estate', current: 1.0, target: 1.7 },
      { label: 'U.S. Bonds', current: 7.6, target: 13.7 },
      { label: 'International Bonds', current: 1.6, target: 5.5 },
      { label: 'Cash', current: 30.5, target: 4.2 },
      { label: 'Other', current: 0.6, target: 0.1 },
    ],
    currentReturn: '7.2%',
    targetReturn: '8.9%',
    riskScore: 60,
    targetLabel: 'Moderately Aggressive',
    keyShiftsSummary:
      'The biggest changes are deploying the excess 26% cash position into equities and bonds, nearly tripling international exposure from 6.2% to 14.4%, and increasing U.S. bonds from 7.6% to 13.7% — adding return without adding meaningful volatility.',
  },
  findings: [
    {
      cards: [
        {
          icon: 'Wallet',
          iconColor: 'warning',
          title: 'Excess Cash Is Costing You Returns',
          narrative:
            "Your current portfolio holds **$830,238 in cash** — roughly **30.5% of investable assets**. At a projected return of only **1.59%**, this idle capital is a significant drag. Deploying it toward the target allocation is projected to lift your portfolio's expected annual return from **7.2% to 8.9%** — a 170 basis point improvement that compounds dramatically over a 30+ year retirement.",
          contentBlocks: [
            {
              type: 'metrics',
              showArrows: true,
              items: [
                { label: 'Current Expected Return', value: '7.2%' },
                { label: 'Target Expected Return', value: '8.9%' },
              ],
            },
            {
              type: 'metrics',
              showArrows: true,
              items: [
                { label: 'Median Ending Portfolio (Current)', value: '$14,764,990' },
                { label: 'Median Ending Portfolio (Proposed)', value: '$17,077,904' },
              ],
            },
            {
              type: 'callout',
              text: "That's a **$2.3M improvement** in projected median lifetime wealth — generated primarily by putting your existing cash to work.",
            },
          ],
          recommendation:
            'Redeploy approximately $716,340 from cash into the target allocation — buying into U.S. equities, international, bonds, and emerging markets per the Icono 70/30 model.',
        },
        {
          icon: 'PieChart',
          iconColor: 'warning',
          title: 'Portfolio Is Dangerously Under-Diversified Internationally',
          narrative:
            'International equities represent only **6.2%** of the current portfolio against a target of **14.4%** — and emerging markets sit at **1.5%** vs. a 3.4% target. This home-country bias leaves the portfolio overly dependent on U.S. market performance during what could be a highly volatile sequence-of-returns window as both of you transition into retirement.',
          contentBlocks: [
            {
              type: 'key-values',
              items: [
                { label: 'International Equities — Current', value: '6.2%' },
                { label: 'International Equities — Target', value: '14.4%' },
                { label: 'Emerging Markets — Current', value: '1.5%' },
                { label: 'Emerging Markets — Target', value: '3.4%' },
                { label: 'Amount to Buy (International)', value: '$223,346' },
                { label: 'Amount to Buy (Emerging Markets)', value: '$51,751' },
              ],
            },
            {
              type: 'callout',
              text: "Jim mentioned awareness of sequence-of-returns risk — diversifying globally is one of the most effective tools to mitigate concentration risk in the critical early retirement years.",
            },
          ],
          recommendation:
            'Shift approximately $275,000 from cash into international developed and emerging market funds to achieve the target global diversification.',
        },
      ],
    },
    {
      cards: [
        {
          icon: 'AlertTriangle',
          iconColor: 'warning',
          title: 'A Roth Conversion Gap That Will Cost You Later',
          narrative:
            "**95.6% of your $2.7M in investable assets sits in tax-deferred accounts** ($2.6M), with only $42,489 in tax-free accounts and $76,355 taxable. When RMDs kick in at age 73, forced withdrawals will push you into higher brackets — potentially triggering IRMAA Medicare surcharges and a steeper tax bill for your heirs. The window from Robin's retirement in 2026 through Social Security claiming is your **best conversion opportunity**, with income dropping significantly.",
          contentBlocks: [
            {
              type: 'key-values',
              items: [
                { label: 'Tax-Deferred Assets', value: '$2,604,884 (95.6%)' },
                { label: 'Tax-Free Assets (Roth)', value: '$42,489 (1.6%)' },
                { label: 'Taxable Assets', value: '$76,355 (2.8%)' },
              ],
            },
            {
              type: 'schedule',
              rows: [
                { period: '2026', amount: '22–24%', note: 'Robin retires — income drops' },
                { period: '2027', amount: '22%', note: 'Jim still working — partial opportunity' },
                { period: '2028', amount: '22%', note: 'Jim retires — both on portfolio withdrawals' },
                { period: '2029–35', amount: '22%', note: 'Pre-SS window — optimal conversion years' },
                { period: '2036+', amount: '12%', note: 'Social Security begins — income rises' },
              ],
            },
            {
              type: 'callout',
              text: "Robin said it directly: 'It's the taxes and the Roth conversions — making sure our money is in the right place at the right time.' The plan as modeled shows **zero Roth conversions** — this is a significant missed opportunity.",
            },
          ],
          recommendation:
            "Design a multi-year Roth conversion ladder beginning in 2026, filling up the 22% bracket annually during the pre-Social Security window. Gene's tax analysis will quantify the lifetime tax savings.",
        },
        {
          icon: 'Heart',
          iconColor: 'warning',
          title: 'Healthcare: The Biggest Wildcard Before Medicare',
          narrative:
            "Robin retires at **56**, Jim at **58** — both face **7–9 years without employer-sponsored health coverage** before Medicare eligibility at 65. The Right Capital model uses **$3,572/person/year** for retirement healthcare costs, which likely understates ACA marketplace premiums significantly. A realistic budget for two adults in their late 50s on the open market could run **$20,000–$30,000/yr** depending on coverage level and income-based subsidy eligibility.",
          contentBlocks: [
            {
              type: 'metrics',
              showArrows: false,
              items: [
                { label: 'RC Model (per person/yr)', value: '$3,572' },
                { label: 'Realistic ACA Estimate (couple)', value: '$20K–$30K/yr' },
              ],
            },
            {
              type: 'callout',
              text: "Key nuance: ACA subsidies are income-based via MAGI. Strategic management of taxable income during the pre-Medicare years — including Roth conversions — could **qualify the Gaylords for significant premium tax credits**, dramatically reducing out-of-pocket healthcare costs.",
            },
            {
              type: 'key-values',
              items: [
                { label: 'Robin — Medicare Gap', value: '9 years (age 56–65)' },
                { label: 'Jim — Medicare Gap', value: '7 years (age 58–65)' },
                { label: 'LTC Modeled', value: '$75,504/yr for 2 years each' },
              ],
            },
          ],
          recommendation:
            'Model ACA subsidy scenarios based on projected retirement income. Coordinate healthcare coverage planning with the Roth conversion strategy to maximize subsidy eligibility and reduce lifetime premium costs.',
        },
      ],
    },
    {
      cards: [
        {
          icon: 'Clock',
          iconColor: 'teal',
          title: 'Social Security Timing Strategy',
          narrative:
            "Jim's estimated Social Security benefit is **$64,800/yr** and Robin's is **$24,000/yr** — together **$88,800/yr** in inflation-adjusted income. The timing of when to claim is one of the highest-leverage decisions in retirement. Claiming early at 62 locks in a permanent reduction; waiting to 70 maximizes the lifetime benefit. For a couple with family longevity and a **100% Monte Carlo success rate**, delayed claiming is likely optimal — but the pre-SS withdrawal sequencing must be planned carefully.",
          contentBlocks: [
            {
              type: 'key-values',
              items: [
                { label: "Jim's SS Benefit (full retirement age)", value: '$64,800/yr' },
                { label: "Robin's SS Benefit (full retirement age)", value: '$24,000/yr' },
                { label: 'Combined at FRA', value: '$88,800/yr' },
                { label: 'Break-even vs. early claim (est.)', value: 'Age 78–80' },
              ],
            },
            {
              type: 'callout',
              text: "With a projected **100% plan success rate** and a median ending portfolio of **$17M**, the Gaylords have exceptional flexibility. The question isn't whether they can afford to wait — it's which claiming strategy optimizes lifetime income, survivor benefits, and tax efficiency.",
            },
          ],
          recommendation:
            'Model multiple Social Security claiming scenarios (age 62, FRA, and 70 for Jim; coordinated strategy for Robin) and select the option that best balances income timing, IRMAA exposure, and survivor benefit protection.',
        },
        {
          icon: 'Scale',
          iconColor: 'teal',
          title: 'Plan Sustainability: The Numbers Are Strong',
          narrative:
            "The Gaylord plan achieves a **100% Monte Carlo success rate** under both the current and proposed scenarios — meaning across all 1,000 simulated market conditions tested, they never run out of money. The proposed allocation improves the **median ending portfolio value by $2.3M** ($14.76M → $17.08M). The challenge now shifts from 'will we have enough?' to 'how do we optimize what we have — spending, taxes, legacy, and lifestyle?'",
          contentBlocks: [
            {
              type: 'progress-bars',
              items: [
                { label: 'Monte Carlo Success — Current Plan', value: 100 },
                { label: 'Monte Carlo Success — Proposed Plan', value: 100 },
              ],
            },
            {
              type: 'metrics',
              size: 'large',
              items: [
                { label: 'Median Ending Value (Current)', value: '$14.8M' },
                { label: 'Median Ending Value (Proposed)', value: '$17.1M' },
              ],
            },
            {
              type: 'callout',
              text: "Jim said it perfectly: 'I don't want to die with $5 million in the bank.' The data suggests they're on track to leave far more than that — which makes spending optimization and 'Die With Zero' planning as important as portfolio construction.",
            },
          ],
          recommendation:
            "Given the strength of the plan, shift focus toward optimizing the retirement experience: confirming a sustainable spending rate, building a year-by-year drawdown sequence, and stress-testing against worst-case scenarios (Great Recession, prolonged inflation) to give Jim and Robin the confidence to actually spend.",
        },
      ],
    },
    {
      cards: [
        {
          icon: 'Landmark',
          iconColor: 'teal',
          title: 'Mortgage Decision: Pay Off or Invest?',
          narrative:
            "The Gaylords carry a **$268,715 mortgage at 6.625%** — a meaningful fixed cost in retirement. With $11,000/month in planned spending, mortgage payments (~$2,994/mo) represent roughly **27% of the monthly budget**. At 6.625%, paying off the mortgage delivers a guaranteed after-tax return that's competitive with bonds. However, given a 100% plan success rate and strong portfolio returns, the math may favor maintaining the mortgage and keeping capital invested.",
          contentBlocks: [
            {
              type: 'key-values',
              items: [
                { label: 'Mortgage Balance', value: '$268,715' },
                { label: 'Interest Rate', value: '6.625%' },
                { label: 'Monthly Payment', value: '$2,994' },
                { label: '% of Retirement Budget', value: '~27%' },
                { label: 'Current Credit Card Balance', value: '$8,844 at 0%' },
              ],
            },
            {
              type: 'callout',
              text: 'The credit card balance ($8,844) appears to be carried on a 0% promotional rate. This should be cleared before the promotional period expires — it presents no cost-of-carry concern as modeled.',
            },
          ],
          recommendation:
            'Model the payoff scenario vs. investing the equivalent lump sum, accounting for the tax deductibility of mortgage interest and the opportunity cost of capital. Provide a clear recommendation before Robin retires.',
        },
        {
          icon: 'Shield',
          iconColor: 'warning',
          title: 'Insurance Review: Life & Long-Term Care',
          narrative:
            "Jim carries **$850,000 in total life coverage** ($600K group + $250K term) and Robin carries **$590,000** ($340K group + $250K term). Group life coverage will end at retirement, reducing Jim to $250K and Robin to $250K. With a net worth of $3.1M and no dependents mentioned, life insurance needs shift post-retirement — but **long-term care risk** is significant. LTC is modeled at $75,504/yr for 2 years each; actual costs in Western NY may be higher, and duration risk is meaningful.",
          contentBlocks: [
            {
              type: 'key-values',
              items: [
                { label: "Jim's Current Life Coverage", value: '$850,000 (group + term)' },
                { label: "Robin's Current Life Coverage", value: '$590,000 (group + term)' },
                { label: 'Coverage at Retirement (Jim)', value: '$250,000 (term only)' },
                { label: 'Coverage at Retirement (Robin)', value: '$250,000 (term only)' },
                { label: 'LTC Modeled (each)', value: '$75,504/yr × 2 years' },
              ],
            },
            {
              type: 'callout',
              text: 'With a robust portfolio, self-insuring for LTC is viable — but requires explicit planning. A hybrid LTC/life policy or a dedicated self-insurance reserve should be evaluated before retirement.',
            },
          ],
          recommendation:
            "Review term life coverage adequacy post-retirement given changed income needs, and model three LTC scenarios: self-insure, hybrid policy, and traditional LTC insurance. Decide before Robin's retirement date.",
        },
      ],
    },
  ],
  services: [
    {
      icon: 'Target',
      title: 'Early Retirement Readiness Analysis',
      description:
        "Full scenario modeling of Robin's 2026 retirement and Jim's 2028 retirement — confirming the plan works, stress-testing against sequence-of-returns risk, and building a year-by-year income roadmap.",
    },
    {
      icon: 'RefreshCw',
      title: 'Roth Conversion Strategy',
      description:
        'Design and implement a multi-year Roth conversion ladder using the pre-Social Security income gap. Includes annual bracket optimization and coordination with ACA subsidy thresholds.',
      estimatedValue: '~$100K+ lifetime tax savings',
    },
    {
      icon: 'Receipt',
      title: 'Healthcare Coverage Planning',
      description:
        'Model ACA marketplace options, subsidy eligibility based on projected MAGI, and coordinate healthcare cost planning through age 65 for both Robin and Jim.',
    },
    {
      icon: 'LineChart',
      title: 'Portfolio Reallocation & Management',
      description:
        'Redeploy $716K+ in excess cash into the Icono 70/30 target allocation — increasing expected returns from 7.2% to 8.9% and improving international diversification.',
      estimatedValue: '~$2.3M projected wealth improvement',
    },
    {
      icon: 'Clock',
      title: 'Social Security Optimization',
      description:
        "Model multiple claiming scenarios for Jim ($64,800/yr) and Robin ($24,000/yr), optimizing for lifetime income, survivor benefits, and IRMAA impact.",
    },
    {
      icon: 'DollarSign',
      title: 'Retirement Drawdown Sequencing',
      description:
        'Build a tax-efficient withdrawal sequence — coordinating taxable, tax-deferred, and tax-free accounts to minimize lifetime tax burden and IRMAA exposure through RMD age.',
    },
    {
      icon: 'Shield',
      title: 'Insurance & Long-Term Care Review',
      description:
        'Evaluate post-retirement life insurance needs, model LTC self-insurance vs. hybrid policy options, and confirm umbrella coverage is appropriate for net worth level.',
    },
    {
      icon: 'Scale',
      title: 'Spending Confidence & "Die With Zero" Planning',
      description:
        'With a 100% Monte Carlo success rate, shift focus to building spending confidence — aligning financial capacity with lifestyle goals and legacy intentions so Jim and Robin can actually enjoy their retirement.',
    },
  ],
  pricing: {
    investableAssets: 2_723_728,
    projectFee: 8_500,
    gwmTier: 'essentials',
    recommendedOption: 'gwm',
    recommendedReason:
      "Jim and Robin need more than a one-time plan — they need ongoing implementation support through a multi-year Roth conversion strategy, annual tax optimization, and two staggered retirement dates. GWM Essentials gives them a dedicated team in their corner as Robin transitions this year and Jim follows in 2028, with the flexibility to step back once they're confident in their footing.",
    projectFooter:
      'Ideal if you want a one-time professional second opinion with implementation support through 2026.',
    gwmFooter:
      'Recommended: covers both retirement transitions, ongoing Roth strategy, and annual plan reviews.',
  },
  comparison: {
    rows: [
      { label: 'Comprehensive Financial Plan', project: true, gwm: true },
      { label: 'Right Capital Plan Build & Analysis', project: true, gwm: true },
      { label: 'Early Retirement Scenario Modeling', project: true, gwm: true },
      { label: 'Asset Allocation Recommendation', project: true, gwm: true },
      { label: 'Roth Conversion Analysis', project: true, gwm: true },
      { label: 'Social Security Optimization', project: true, gwm: true },
      { label: 'Healthcare Coverage Planning (Pre-Medicare)', project: true, gwm: true },
      { label: 'Insurance & LTC Review', project: true, gwm: true },
      { label: 'Written Recommendations Report', project: true, gwm: true },
      { label: 'Implementation Support', project: '90 days', gwm: 'Ongoing' },
      { label: 'Plan Review Meetings', project: '1–2 included', gwm: 'Quarterly' },
      { label: 'Engagement Duration', project: 'One-time', gwm: 'Ongoing (no lock-in)' },
      { label: 'Annual Roth Conversion Execution', project: false, gwm: true },
      { label: 'Year-by-Year Tax Bracket Management', project: false, gwm: true },
      { label: "Jim's Retirement Transition (2028)", project: false, gwm: true },
      { label: 'Ongoing Portfolio Monitoring & Rebalancing', project: false, gwm: true },
      { label: 'Ad Hoc Questions & Decision Support', project: false, gwm: true },
      { label: 'Annual Plan Updates as Life Changes', project: false, gwm: true },
    ],
  },
  nextSteps: {
    closingQuote:
      "Jim and Robin, you've done everything right — 38 years of disciplined saving and smart accumulation at Wegmans, a portfolio that's in genuinely strong shape, and enough self-awareness to know when it's time to bring in an expert for the handoff. The work ahead isn't about fixing problems — it's about optimizing what you've built. The Roth conversion window opening this year as Robin retires is one of the most valuable planning opportunities you'll ever have, and we want to make sure you capture it fully. Let's build the plan together and get you to the point where you can actually enjoy spending what you've worked your whole life to save.",
  },
};
