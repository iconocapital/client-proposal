import type { ProspectConfig } from '@/types/prospect';

/**
 * Tracy Alinger — Engagement Proposal Config
 *
 * This is the reference example of a fully populated ProspectConfig.
 * Use this as the model when generating configs for new prospects.
 */
export const alingerConfig: ProspectConfig = {
  prospect: {
    fullName: 'Tracy Alinger',
    preparedDate: 'February 20, 2026',
  },

  situation: {
    facts: [
      { label: 'Age / Retirement', value: '69 (turning 70 Sept 2026); retired 11 years' },
      { label: 'Career', value: 'Former IT Director for a nonprofit association' },
      { label: 'Total Investable Assets', value: '$1,345,876 across TIAA CREF, Precious Metals IRA & Rollover IRA' },
      { label: 'Net Worth', value: '$1,649,868' },
      { label: 'Annual Spending', value: '~$120,000–$140,000 (housing, travel & lifestyle)' },
      { label: 'Social Security', value: 'Starting Sept 2026 — $4,875/mo ($58,500/yr)' },
      { label: 'Pension', value: '$13,140/yr beginning at age 72 (2028); no COLA' },
      { label: 'Housing', value: 'Joint ownership with partner; $120K mortgage at 2.5%' },
      { label: 'Family Longevity', value: 'Mother is 92; grandmother lived to 98; planning to age 100' },
    ],
    primaryGoal: {
      quote: "I'm not worried about leaving a legacy for my kids. Want more to enjoy it while I'm here.",
    },
    riskProfile: {
      description:
        'Self-describes as "too risk tolerant" — seeking confirmation on whether current allocation is too aggressive.',
    },
    footerNote: 'Referred by brother Mike (client since 2021)',
  },

  allocation: {
    categories: [
      { label: 'U.S. Equities', current: 49.6, target: 38.6 },
      { label: 'International Equities', current: 1.7, target: 14.5 },
      { label: 'Emerging Markets', current: 0.2, target: 4.5 },
      { label: 'Real Estate', current: 0.2, target: 2.5 },
      { label: 'U.S. Bonds', current: 2.0, target: 29.1 },
      { label: "Int'l Bonds", current: 0.5, target: 4.8 },
      { label: 'Cash', current: 17.0, target: 6.0 },
      { label: 'Other (TIAA Trad.)', current: 28.8, target: 0.0 },
    ],
    currentReturn: '8.7%',
    targetReturn: '8.0%',
    riskScore: 54,
    targetLabel: 'Moderate',
    keyShiftsSummary:
      'Dramatically increase international & bond exposure, eliminate "Other" (TIAA Traditional wind-down), reduce cash drag from 17% → 6%, and cut U.S. equity concentration.',
  },

  findings: [
    {
      // Findings Slide 1: Portfolio Concentration + Precious Metals
      cards: [
        {
          icon: 'PieChart',
          iconColor: 'teal',
          title: 'Portfolio Concentration',
          narrative:
            '**81% equity / 19% fixed income** — heavily weighted toward U.S. large-cap growth (Microsoft, Nvidia, Apple). International exposure only **1.7%** vs. 14.5% target.',
          contentBlocks: [
            {
              type: 'key-values',
              heading: 'Account Breakdown:',
              items: [
                { label: 'DC Retirement Plan @ TIAA [1]', value: '$426,323' },
                { label: 'TDA Retirement Plan @ TIAA [1]', value: '$322,091' },
                { label: 'Precious Metals IRA @ Accuplan', value: '$231,691' },
                { label: 'DC Retirement Plan @ TIAA [2]', value: '$167,776' },
                { label: 'TDA Retirement Plan @ TIAA [2]', value: '$144,337' },
                { label: 'Rollover IRA @ TIAA', value: '$53,555' },
              ],
            },
          ],
          recommendation: 'Shift to 60/40 allocation with international diversification',
        },
        {
          icon: 'AlertTriangle',
          iconColor: 'warning',
          title: 'Precious Metals Overweight',
          narrative:
            'Gold alone represents **~13%** of portfolio ($231,691 at Accuplan). Silver dropped 30%+ in a single day — highlighting downside risk.',
          contentBlocks: [
            {
              type: 'callout',
              text: 'Tracy expressed **dissatisfaction with Accuplan\'s** reporting and transparency. Wants advice on whether to move to a different custodian or liquidate entirely.',
            },
          ],
          recommendation: 'Trim precious metals by 50–66%, reallocate into diversified bonds & international equity',
        },
      ],
    },
    {
      // Findings Slide 2: TIAA CREF + Roth Conversion
      cards: [
        {
          icon: 'Building2',
          iconColor: 'teal',
          title: 'TIAA CREF Complexity & Cost',
          narrative:
            'Tracy feels **"locked in"** and frustrated by TIAA\'s lack of flexibility and reporting. Has not withdrawn from TIAA Traditional due to strict 10%-per-year rule.',
          contentBlocks: [
            {
              type: 'metrics',
              showArrows: true,
              items: [
                { value: '0.30%', label: 'TIAA S&P 500', color: 'neutral' },
                { value: '0.05%', label: 'Vanguard Equiv.', color: 'teal' },
                { value: '6x', label: 'Cost reduction', color: 'success' },
              ],
            },
          ],
          recommendation:
            'Roll TIAA assets to Vanguard IRA for lower costs, full fund access & flexibility. Wind down TIAA Traditional via 10%/year schedule.',
        },
        {
          icon: 'TrendingUp',
          iconColor: 'success',
          title: 'Roth Conversion Opportunity',
          narrative:
            '**$0 in Roth assets** — 100% of $1.35M is tax-deferred. Critical conversion window before RMDs at 73.',
          contentBlocks: [
            {
              type: 'schedule',
              rows: [
                { period: '2026', amount: '$190', note: 'Before SS starts (Sept)' },
                { period: '2027', amount: '$94,378', note: 'Largest conversion year' },
                { period: '2028', amount: '$32,886', note: 'Pension begins' },
                { period: '2029+', amount: '$11,438/yr', note: 'RMDs begin; smaller conversions through age 90' },
              ],
            },
            {
              type: 'metrics',
              items: [
                { value: '+$243,652', label: 'More tax-adjusted wealth', color: 'success' },
                { value: '−$458,191', label: 'Less lifetime federal taxes', color: 'success' },
              ],
            },
          ],
          recommendation: 'Execute annual Roth conversions through age 73 targeting optimal tax brackets',
        },
      ],
    },
    {
      // Findings Slide 3: Retirement Sustainability + Insurance
      cards: [
        {
          icon: 'ShieldCheck',
          iconColor: 'teal',
          title: 'Retirement Sustainability',
          narrative: '',
          contentBlocks: [
            {
              type: 'metrics',
              showArrows: true,
              size: 'large',
              items: [
                { value: '85%', label: 'Current plan', color: 'neutral' },
                { value: '89%', label: 'Proposed plan', color: 'success' },
              ],
            },
            {
              type: 'progress-bars',
              heading: 'Stress Test Results (Monte Carlo, 1,000 simulations):',
              items: [
                { label: 'Baseline', value: 89 },
                { label: 'Market drop −20%', value: 82 },
                { label: 'Higher taxes +20%', value: 85 },
                { label: 'Reduced SS −20%', value: 77 },
                { label: 'Live 5 yrs longer', value: 87 },
                { label: 'Higher inflation +1%', value: 81 },
                { label: 'Higher healthcare +20%', value: 87 },
                { label: 'Lower returns −1%', value: 80 },
              ],
            },
          ],
          recommendation: '$638,446 less in total retirement spending through better tax efficiency',
        },
        {
          icon: 'Heart',
          iconColor: 'warning',
          title: 'No Life or LTC Insurance',
          narrative:
            'No life or long-term care insurance currently in place. Given family longevity (mother 92, grandmother 98, planning to 100) this is a key risk.',
          contentBlocks: [
            {
              type: 'metrics',
              size: 'large',
              items: [
                { value: '$75,504/year', label: 'Estimated extended care costs if needed', color: 'neutral' },
              ],
            },
            {
              type: 'text',
              content:
                'Current healthcare: Medicare + employer-subsidized supplement ($200/mo credit from former employer). No anticipated costs for mother\'s care — brother Mike covers.',
            },
            {
              type: 'callout',
              text: "**$100K loan to son's company** — developed a fishing line with real-time data/camera (patented). 50/50 chance of repayment this year.",
            },
          ],
          recommendation: 'Evaluate hybrid LTC policy or self-insurance strategy',
        },
      ],
    },
  ],

  services: [
    {
      icon: 'ArrowRightLeft',
      title: 'TIAA CREF Rollover Strategy',
      description:
        'Map which accounts and funds to move, in what order. Target Vanguard allocation with specific ETF recommendations.',
      estimatedValue: '~$3K/yr savings',
    },
    {
      icon: 'Coins',
      title: 'Precious Metals Liquidation Plan',
      description:
        'How much to trim, timing considerations, and how to move to a better custodian or liquidate entirely.',
    },
    {
      icon: 'BarChart3',
      title: 'Roth Conversion Roadmap',
      description:
        'Year-by-year conversion schedule targeting optimal tax brackets through age 73, calibrated to avoid IRMAA surcharges.',
      estimatedValue: '~$458K tax savings',
    },
    {
      icon: 'Wallet',
      title: 'Retirement Income Distribution',
      description:
        'Bucket-style withdrawal strategy coordinating Social Security (Sept 2026), pension (2028), and portfolio withdrawals to age 100.',
    },
    {
      icon: 'PieChart',
      title: 'Asset Allocation & Rebalancing',
      description:
        'Transition from 81/19 to diversified 60/40 with proper international exposure and lower expense ratios.',
    },
    {
      icon: 'Receipt',
      title: 'Tax Projection & Coordination',
      description:
        'Annual tax estimates incorporating Roth conversions, RMDs, and Social Security taxation. Coordinate with your tax preparer.',
      estimatedValue: '~$638K lifetime',
    },
    {
      icon: 'ShieldCheck',
      title: 'Insurance & Risk Assessment',
      description:
        "Evaluate long-term care exposure given family longevity (planning to 100). Review homeowner's coverage.",
    },
    {
      icon: 'Monitor',
      title: 'RightCapital Dashboard Access',
      description:
        'Full access to your interactive financial plan to run scenarios, track progress, and view live projections.',
    },
  ],

  pricing: {
    investableAssets: 1_345_876,
    projectFee: 4_500,
    gwmTier: 'essentials',
    recommendedOption: 'gwm',
    recommendedReason:
      'hands-off execution during the critical Roth window, plus we manage the TIAA & metals transitions so you don\'t have to.',
    gwmFeatures: [
      'Everything in the project scope, plus ongoing updates',
      'Proactive Roth conversion execution each year through age 73',
      'We handle the TIAA rollover & precious metals liquidation for you',
      'Annual tax planning and coordination with your CPA',
      'Quarterly check-in calls and unlimited email access',
      'Continuous portfolio monitoring and rebalancing',
      'Insurance and estate planning reviews as needed',
      'Option to add asset management at 0.90% AUM',
    ],
    projectFooter:
      'You would handle TIAA rollovers, precious metals liquidation, and Roth conversions yourself.',
  },

  comparison: {
    rows: [
      { label: 'Financial Plan & Recommendations', project: true, gwm: true },
      { label: 'Roth Conversion Roadmap', project: true, gwm: true },
      { label: 'TIAA Rollover Strategy', project: true, gwm: true },
      { label: 'Precious Metals Plan', project: true, gwm: true },
      { label: 'Retirement Income Plan', project: true, gwm: true },
      { label: 'Tax Projections', project: true, gwm: true },
      { label: 'Insurance Assessment', project: true, gwm: true },
      { label: 'RightCapital Access', project: '12 months', gwm: 'Ongoing' },
      { label: 'Implementation Support', project: '90-day window', gwm: 'Year-round' },
      { label: 'We Execute TIAA Rollover & Metals Liquidation', project: false, gwm: true },
      { label: 'Annual Roth Conversion Execution', project: false, gwm: true },
      { label: 'Ongoing Tax Planning w/ CPA Coordination', project: false, gwm: true },
      { label: 'Quarterly Review Calls', project: false, gwm: true },
      { label: 'Portfolio Monitoring & Rebalancing', project: false, gwm: true },
      { label: 'Social Security & Pension Integration', project: false, gwm: true },
      { label: 'Unlimited Email Access', project: 'During engagement', gwm: 'Year-round' },
    ],
  },

  nextSteps: {
    closingQuote:
      "We're excited about the opportunity to work with you, Tracy. You've done a great job getting to this point — and there's real upside in optimizing what you've built.",
  },
};
