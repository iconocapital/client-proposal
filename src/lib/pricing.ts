// ============================================================
// Pricing Calculator — Iconoclastic Capital
// ============================================================
// Standardized pricing rules:
//
// PROJECT (one-time):  $5,000–$10,000 based on scope
//
// GWM ESSENTIALS:      $6,000 Year 1  /  $4,500 Year 2+
// GWM PREMIER:         $9,000 Year 1  /  $7,000 Year 2+
//
// AUM Fee:             0.90% under $2M  /  0.65% at $2M+
// Fee Waiver:          Managed AUM ≥ $1M → Year 1 planning fee waived
//                      (only the one-time onboarding fee applies)
//
// IMPORTANT: Fee rules are based on MANAGED AUM (assets Iconoclastic
// actually manages), NOT total investable assets. A prospect may have
// $2.7M total but only consolidate $60K initially.
// ============================================================

export interface PricingResult {
  // Project
  projectFee: number;
  projectFeeFormatted: string;

  // GWM
  gwmTier: 'essentials' | 'premier';
  gwmTierLabel: string;
  gwmYear1Fee: number;
  gwmYear2Fee: number;
  gwmYear1Waived: boolean;
  gwmYear1FeeFormatted: string;
  gwmYear2FeeFormatted: string;

  // AUM
  aumFeePercent: number;
  aumFeeNote: string;
  managedAUM: number;
  managedAUMFormatted: string;

  // Investable assets (total)
  investableAssets: number;
  investableAssetsFormatted: string;
}

const TIER_CONFIG = {
  essentials: { year1: 6_000, year2: 4_500, label: 'GWM Essentials' },
  premier: { year1: 9_000, year2: 7_000, label: 'GWM Premier' },
} as const;

export function formatCurrency(amount: number): string {
  return `$${amount.toLocaleString('en-US')}`;
}

export function calculatePricing(
  investableAssets: number,
  projectFee: number,
  gwmTier: 'essentials' | 'premier',
  /** Assets Iconoclastic actually manages. Defaults to investableAssets if omitted. */
  managedAUM?: number,
): PricingResult {
  const aum = managedAUM ?? investableAssets;
  const isOver1M = aum >= 1_000_000;
  const isOver2M = aum >= 2_000_000;
  const tier = TIER_CONFIG[gwmTier];
  const aumFee = isOver2M ? 0.65 : 0.90;

  return {
    projectFee,
    projectFeeFormatted: formatCurrency(projectFee),

    gwmTier,
    gwmTierLabel: tier.label,
    gwmYear1Fee: tier.year1,
    gwmYear2Fee: tier.year2,
    gwmYear1Waived: isOver1M,
    gwmYear1FeeFormatted: formatCurrency(tier.year1),
    gwmYear2FeeFormatted: formatCurrency(tier.year2),

    aumFeePercent: aumFee,
    aumFeeNote: isOver2M
      ? `${aumFee}% AUM (reduced rate for $2M+)`
      : `${aumFee}% AUM`,

    managedAUM: aum,
    managedAUMFormatted: formatCurrency(aum),

    investableAssets,
    investableAssetsFormatted: formatCurrency(investableAssets),
  };
}
