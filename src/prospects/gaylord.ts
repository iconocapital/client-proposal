import type { ProspectConfig } from '@/types/prospect';

export const gaylordConfig: ProspectConfig = {
  prospect: {
    fullName: 'Jim & Robin Gaylord',
    preparedDate: 'February 27, 2026',
  },
  situation: {
    facts: [
      {
        label: 'Age / Retirement',
        value:
          'Both turning 56 in spring 2026. Robin retiring in 2026; Jim targeting 2028.',
      },
      {
        label: 'Career',
        value:
          'Both long-tenured Wegmans employees — Jim (38 years) and Robin (33 years). Assets dominated by Wegmans 401(k)s.',
      },
      {
        label: 'Total Investable Assets',
        value:
          '$2,723,728 across six accounts — James 401(k) $1,892,245 · Robin 401(k) $674,073 · IRAs $45,307 · HSAs $35,749 · TOD accounts $76,355.',
      },
      {
        label: 'Net Worth',
        value:
          '$3,115,834 including primary home in Walworth, NY ($667,665) and $277,559 in liabilities.',
      },
      {
        label: 'Annual Income (Pre-Retirement)',
        value:
          'Jim: $201,000/yr · Robin: $113,573/yr · Combined: $314,573/yr. Savings rate: 18.9% ($37,890/yr).',
      },
      {
        label: 'Annual Spending',
        value:
          '$132,000/yr ($11,000/mo) used as a conservative baseline. Robin noted this is "worst case" — actual spending likely lower.',
      },
      {
        label: 'Social Security',
        value:
          'Jim: ~$64,800/yr · Robin: ~$24,000/yr. Optimal claiming strategy (delay to age 70) is the single largest plan improvement lever.',
      },
      {
        label: 'Tax Allocation',
        value:
          '95.6% tax-deferred ($2.6M), 2.8% taxable ($76K), 1.6% tax-free ($42K). Roth conversion is the highest-value optimization available.',
      },
      {
        label: 'Housing / Debt',
        value:
          'Mortgage: $268,715 at 6.625%. Proposed refinance to 15-yr at 5.375% included in plan. Credit card: $9,294 at 0%.',
      },
      {
        label: 'Healthcare (Pre-Medicare)',
        value:
          'Robin faces 9-year coverage gap (56–65); Jim 7 years (58–65). ACA subsidy eligibility can be optimized through MAGI management.',
      },
    ],
    primaryGoal: {
      quote:
        "We don't want to die with $5 million in the bank — what's the point? But we also don't want to be eating ramen noodles in our late 70s. How do we balance it so we don't have to worry about money, but we can actually enjoy it?",
    },
    riskProfile: {
      description:
        "The Gaylords expressed a long-term growth orientation and comfort with market cycles — Jim stated he's 'not trying to beat the market, just hang with it.' Their current allocation is technically 60/40, but 30.4% sits in cash and stable value, dramatically muting returns. The proposed Icono Growth 70/30 target better matches their 40+ year retirement horizon and the return assumptions needed to sustain their income plan.",
    },
  },
  allocation: {
    categories: [
      { label: 'U.S. Equities', current: 51.1, target: 43.0 },
      { label: 'International Equities', current: 6.2, target: 17.9 },
      { label: 'Emerging Markets', current: 1.5, target: 6.0 },
      { label: 'Real Estate', current: 1.0, target: 3.0 },
      { label: 'U.S. Bonds', current: 7.6, target: 23.6 },
      { label: 'International Bonds', current: 1.6, target: 4.5 },
      { label: 'Cash', current: 30.4, target: 2.0 },
      { label: 'Other', current: 0.6, target: 0.0 },
    ],
    currentReturn: '7.2%',
    targetReturn: '8.6%',
    riskScore: 60,
    targetLabel: 'Growth',
    keyShiftsSummary:
      'The biggest moves are deploying 28% of the portfolio out of cash/stable value, nearly tripling international equity exposure from 6.2% to 17.9%, and building a proper bond allocation from 7.6% to 23.6% — creating a diversified, sequence-of-returns-resilient structure.',
  },
  findings: [
    {
      cards: [
        {
          icon: 'BarChart3',
          iconColor: 'warning',
          title: "The Current Plan Has a 42% Success Rate — Here's How We Fix It",
          narrative:
            "Run as-is — retiring at 56 and 58, spending $11,000/month, current portfolio, no adjustments — the Gaylord plan succeeds in only **42 out of 100 simulated retirements**. That's a coin flip against a 40-year retirement. The proposed plan, applying five targeted strategies, lifts success to **93%** — a 51-point improvement driven by levers we can implement together.",
          contentBlocks: [
            {
              type: 'progress-bars',
              items: [
                { label: 'Current Plan — Probability of Success', value: 42, color: 'warning' },
                { label: 'Proposed Plan — Probability of Success', value: 93, color: 'success' },
              ],
            },
            {
              type: 'schedule',
              title: 'The Five Levers — How Each One Moves the Needle',
              rows: [
                { year: 'Lever 1', label: 'Portfolio reallocation (deploy cash → Growth 70/30)', value: '+6% → 48%' },
                { year: 'Lever 2', label: 'Social Security optimal claiming strategy', value: '+16% → 64%' },
                { year: 'Lever 3', label: 'Mortgage refinance (15-yr at 5.375%)', value: '+13% → 77%' },
                { year: 'Lever 4', label: 'Roth conversion tax strategy', value: '+10% → 87%' },
                { year: 'Lever 5', label: 'Retirement spending guardrails', value: '+6% → 93%' },
              ],
            },
            {
              type: 'callout',
              text: "None of these require Robin and Jim to work longer, spend less, or take on more risk than they're comfortable with. They require the right strategy — executed in the right sequence.",
            },
          ],
          recommendation:
            'Implement all five levers in a coordinated sequence: rebalance the portfolio immediately, execute the refinance before Robin retires, begin Roth conversions at Jim\'s retirement in 2028, and optimize Social Security timing alongside the drawdown plan.',
        },
        {
          icon: 'Receipt',
          iconColor: 'teal',
          title: 'Roth Conversion Strategy: $1.26M in Tax Savings',
          narrative:
            "With **95.6% of $2.7M in tax-deferred accounts**, the Gaylords face escalating RMDs, rising IRMAA Medicare surcharges, and a concentrated future tax liability. The proposed Roth conversion strategy — filling the 22% bracket beginning at Jim's retirement in 2028 — generates **$1,264,801 less in lifetime federal taxes** and produces **$1,111,311 more in tax-adjusted ending wealth**. By 2050, the tax-deferred account is fully depleted; everything flows from Roth after that.",
          contentBlocks: [
            {
              type: 'metrics',
              showArrows: true,
              size: 'large',
              items: [
                { label: 'Lifetime Tax Savings (Proposed vs. Reference)', value: '$1,264,801' },
                { label: 'Additional Tax-Adjusted Ending Wealth', value: '$1,111,311' },
              ],
            },
            {
              type: 'metrics',
              showArrows: true,
              items: [
                { label: 'Ending Portfolio — Tax-Free % (Reference)', value: '62%' },
                { label: 'Ending Portfolio — Tax-Free % (Proposed)', value: '100%' },
              ],
            },
            {
              type: 'schedule',
              title: 'Roth Conversion Plan (Starting 2028 at Jim\'s Retirement)',
              rows: [
                { year: '2028–2030', label: 'Conversions begin — early years, fill 22% bracket', value: '$6K–$25K/yr' },
                { year: '2031–2039', label: 'Accelerating conversions through pre-SS window', value: '$26K–$74K/yr' },
                { year: '2040–2049', label: 'Large conversions as SS income arrives', value: '$78K–$140K/yr' },
                { year: '2050+', label: 'Tax-deferred fully depleted — 100% Roth withdrawals', value: '$0 deferred' },
              ],
            },
          ],
          recommendation:
            'Begin Roth conversions at Jim\'s retirement in 2028, filling the 22% bracket annually. Coordinate with ACA subsidy eligibility and IRMAA thresholds during the pre-Medicare years to avoid costly cliff effects.',
        },
      ],
    },
    {
      cards: [
        {
          icon: 'Clock',
          iconColor: 'teal',
          title: 'Social Security: The Biggest Single Lever in the Plan',
          narrative:
            "Switching from current-strategy Social Security claiming to **optimal timing (age 70 for both)** is the highest-impact single move in the plan — adding **16 percentage points** of success probability. Jim's estimated **$64,800/yr** benefit grows roughly 8%/year beyond full retirement age; Robin's **$24,000/yr** similarly scales. Together, $88,800/yr in inflation-adjusted, guaranteed income anchors the later decades of retirement and reduces portfolio dependence when sequence-of-returns risk is highest.",
          contentBlocks: [
            {
              type: 'key-values',
              items: [
                { label: "Jim's SS — Full Retirement Age (67)", value: '~$64,800/yr' },
                { label: "Jim's SS — Delayed to Age 70 (est.)", value: '~$81,100/yr' },
                { label: "Robin's SS — Full Retirement Age (67)", value: '~$24,000/yr' },
                { label: "Robin's SS — Delayed to Age 70 (est.)", value: '~$30,000/yr' },
                { label: 'Plan probability improvement', value: '+16 percentage points' },
              ],
            },
            {
              type: 'callout',
              text: "The 9-year window between Robin's retirement (2026) and Jim's SS claim at 70 (2035) is the highest-leverage planning period in the entire retirement — it's when the Roth conversion, portfolio drawdown, ACA subsidy management, and SS delay strategy all have to work together.",
            },
          ],
          recommendation:
            'Model both claiming at FRA and age-70 delayed strategies for Jim and Robin. Select the option that optimizes lifetime income, survivor benefit protection, and IRMAA exposure. Integrate with the Roth conversion schedule.',
        },
        {
          icon: 'Home',
          iconColor: 'teal',
          title: 'Mortgage Refinance: Lock In Before Robin Retires',
          narrative:
            "The current mortgage of **$268,715 at 6.625%** carries significant interest cost through retirement. Refinancing to a **15-year loan at 5.375%** — with ~$5,000 in closing costs — cuts the interest rate by 125 basis points, reduces the monthly payment from $2,994 to **$2,218**, and adds **13 percentage points to plan success**. The mortgage pays off around age 71 — right as RMDs begin — eliminating the largest fixed expense at the exact right moment.",
          contentBlocks: [
            {
              type: 'metrics',
              showArrows: true,
              items: [
                { label: 'Current Rate', value: '6.625% — 30-yr' },
                { label: 'Proposed Rate', value: '5.375% — 15-yr' },
              ],
            },
            {
              type: 'key-values',
              items: [
                { label: 'Current Monthly Payment', value: '$2,994' },
                { label: 'Proposed Monthly Payment', value: '$2,218' },
                { label: 'Monthly Savings', value: '$776/mo' },
                { label: 'Closing Costs (estimated)', value: '$5,000' },
                { label: 'Plan probability improvement', value: '+13 percentage points' },
              ],
            },
            {
              type: 'callout',
              text: 'Refinancing with two salaries still on record — before Robin leaves — makes qualification easier. A recent Iconoclastic client secured this rate with closing costs already baked in.',
            },
          ],
          recommendation:
            'Begin the refinance process immediately, before Robin\'s retirement. Lock in the rate while both incomes are still qualifying. Target a 15-year at 5.375% or better.',
        },
      ],
    },
    {
      cards: [
        {
          icon: 'Wallet',
          iconColor: 'warning',
          title: 'Cash Drag: $828K Sitting on the Sidelines',
          narrative:
            "The current portfolio shows **30.4% in cash and stable value** — approximately **$828,174 earning ~1.59%/year**. Jack identified this as likely a stable-value bond fund misclassified by the system, but the economic reality is the same: nearly a third of the portfolio is dramatically underperforming. Redeploying into the Icono Growth 70/30 target raises the expected annual return from **7.2% to 8.6%** and drives the first 6 points of plan probability improvement.",
          contentBlocks: [
            {
              type: 'metrics',
              showArrows: true,
              items: [
                { label: 'Current Expected Portfolio Return', value: '7.2%' },
                { label: 'Target Expected Portfolio Return', value: '8.6%' },
              ],
            },
            {
              type: 'key-values',
              items: [
                { label: 'Cash / Stable Value to Redeploy', value: '$777,447 — Sell' },
                { label: 'International Equities', value: '$320,286 — Buy' },
                { label: 'U.S. Bonds', value: '$437,999 — Buy' },
                { label: 'Emerging Markets', value: '$123,187 — Buy' },
                { label: 'Real Estate', value: '$54,750 — Buy' },
                { label: 'U.S. Equities (rebalance)', value: '$221,737 — Sell' },
              ],
            },
            {
              type: 'callout',
              text: "Jack noted: international equities sit at ~10% when a healthy 2:1 US-to-international ratio implies they should be close to double that. With Western Europe entering its own bull cycle, now is the time to rebalance.",
            },
          ],
          recommendation:
            'Execute the full rebalance to Icono Growth 70/30 — deploying cash into international equities, bonds, and alternatives while coordinating with tax-efficient asset location across taxable, tax-deferred, and Roth accounts.',
        },
        {
          icon: 'Heart',
          iconColor: 'warning',
          title: 'Healthcare: 7–9 Years Without Employer Coverage',
          narrative:
            "Robin retires at **56**, Jim at **58** — both face years without employer-sponsored health insurance before Medicare at 65. The Right Capital model uses **$3,572/person/year** for healthcare costs, which likely understates ACA marketplace premiums significantly. However, by managing MAGI strategically through the Roth conversion plan, the Gaylords may qualify for meaningful **ACA premium tax credits** — turning the healthcare gap into a planning opportunity rather than just a cost.",
          contentBlocks: [
            {
              type: 'key-values',
              items: [
                { label: 'Robin — Medicare Gap', value: '9 years (age 56–65)' },
                { label: 'Jim — Medicare Gap', value: '7 years (age 58–65)' },
                { label: 'RC Modeled Healthcare (per person/yr)', value: '$3,572 — likely conservative' },
                { label: 'Realistic ACA Estimate (couple)', value: '$20,000–$30,000/yr' },
                { label: 'IRMAA Cliff (Medicare surcharge kicks in)', value: 'MAGI over $218K/yr' },
                { label: 'LTC Modeled (each)', value: '$75,504/yr for 2 years' },
              ],
            },
            {
              type: 'callout',
              text: 'Gene highlighted the IRMAA cliff: if MAGI exceeds $218,000 by even $1, Medicare premiums jump $74/month per person. Coordinating Roth conversions with distribution amounts to stay under these thresholds is a critical ongoing task.',
            },
          ],
          recommendation:
            'Model realistic ACA scenarios based on projected retirement MAGI. Optimize healthcare cost planning through strategic income management during the pre-Medicare years — and set explicit IRMAA guardrails once Medicare begins at 65.',
        },
      ],
    },
  ],
  services: [
    {
      icon: 'Target',
      title: 'Early Retirement Readiness Analysis',
      description:
        "Full scenario modeling of Robin's 2026 retirement and Jim's 2028 retirement — confirming the plan works, stress-testing against sequence-of-returns risk, and building a year-by-year income roadmap showing exactly where money comes from at every stage.",
    },
    {
      icon: 'RefreshCw',
      title: 'Roth Conversion Strategy & Execution',
      description:
        'Design and annually execute a multi-year Roth conversion ladder beginning at Jim\'s retirement — filling the 22% bracket each year and systematically converting the $2.6M tax-deferred portfolio to 100% tax-free over 20+ years.',
      estimatedValue: '$1,264,801 in lifetime federal tax savings',
    },
    {
      icon: 'Clock',
      title: 'Social Security Optimization',
      description:
        "Model and select the optimal claiming strategy for Jim ($64,800/yr) and Robin ($24,000/yr) — the single largest plan lever, contributing 16 percentage points of success probability improvement.",
    },
    {
      icon: 'LineChart',
      title: 'Portfolio Reallocation & Ongoing Management',
      description:
        'Redeploy $777K+ in excess cash into the Icono Growth 70/30 target — raising expected returns from 7.2% to 8.6%, adding international diversification, and maintaining the allocation through annual rebalancing.',
    },
    {
      icon: 'Receipt',
      title: 'Healthcare & ACA Coverage Planning',
      description:
        'Model ACA marketplace options, subsidy eligibility based on projected MAGI, and coordinate healthcare cost planning through age 65 — including IRMAA cliff management once Medicare begins.',
    },
    {
      icon: 'DollarSign',
      title: 'Retirement Drawdown Sequencing & Spending Guardrails',
      description:
        'Build a tax-efficient withdrawal sequence across all account types and implement the Icono spending guardrails framework — giving Jim and Robin clear signals to flex spending and the confidence to actually spend in retirement.',
    },
    {
      icon: 'Home',
      title: 'Mortgage Refinance Analysis & Coordination',
      description:
        'Evaluate and coordinate a refinance to 15-year at 5.375% before Robin retires — leveraging both incomes for qualification while reducing the monthly payment by $776 and eliminating the mortgage by age 71.',
    },
    {
      icon: 'Shield',
      title: 'Insurance & Long-Term Care Review',
      description:
        'Full pre-retirement insurance audit: confirm term life coverage adequacy post-group-life loss, identify premium savings opportunities, and model LTC self-insurance vs. hybrid policy options.',
    },
  ],
  pricing: {
    investableAssets: 2_723_728,
    projectFee: 5_000,
    gwmTier: 'essentials',
    recommendedOption: 'project',
    recommendedReason:
      'The Financial Planning Project delivers the complete analytical framework — retirement modeling, Roth conversion schedule, Social Security optimization, reallocation plan, and written recommendations — at a focused one-time cost. Jim and Robin can execute the plan themselves and return for ongoing support later if needed.',
    projectFooter:
      'Recommended: delivers the full plan, written recommendations, and 90 days of implementation support.',
    gwmFooter:
      'Best fit if you want ongoing hands-on support through both retirement transitions and annual Roth conversion execution.',
  },
  comparison: {
    rows: [
      { label: 'Comprehensive Financial Plan (Right Capital)', project: true, gwm: true },
      { label: 'Early Retirement Scenario Modeling', project: true, gwm: true },
      { label: 'Portfolio Reallocation Recommendation', project: true, gwm: true },
      { label: 'Roth Conversion Strategy & Schedule', project: true, gwm: true },
      { label: 'Social Security Optimization Analysis', project: true, gwm: true },
      { label: 'Healthcare / ACA Coverage Planning', project: true, gwm: true },
      { label: 'Mortgage Refinance Analysis', project: true, gwm: true },
      { label: 'Insurance & LTC Review', project: true, gwm: true },
      { label: 'Written Recommendations Report', project: true, gwm: true },
      { label: 'Monarch Money Budgeting Subscription', project: true, gwm: true },
      { label: 'Implementation Support', project: '90 days', gwm: 'Ongoing' },
      { label: 'Review Meetings', project: '2 included', gwm: 'Quarterly' },
      { label: 'Engagement Duration', project: 'One-time', gwm: 'Ongoing (no lock-in)' },
      { label: 'Annual Roth Conversion Execution', project: false, gwm: true },
      { label: 'Year-by-Year Tax Bracket Management', project: false, gwm: true },
      { label: "Jim's 2028 Retirement Transition", project: false, gwm: true },
      { label: 'Ongoing Portfolio Monitoring & Rebalancing', project: false, gwm: true },
      { label: 'Retirement Spending Guardrails — Annual Review', project: false, gwm: true },
      { label: 'IRMAA & Medicare Premium Management', project: false, gwm: true },
      { label: 'Ad Hoc Questions & Decision Support', project: false, gwm: true },
    ],
  },
  nextSteps: {
    closingQuote:
      "Jim and Robin, 38 and 33 years at Wegmans — you've done the hard part. You showed up, saved consistently, and built a portfolio that gives you real options. What today showed us is that the plan as it stands has a 42% chance of success, but with five targeted moves we can get you to 93% — without working longer, spending less, or taking on more risk than you're comfortable with. Robin, you asked if you can retire this year. It's looking good. Let's build the plan and make it happen.",
  },
};
