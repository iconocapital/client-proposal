// ============================================================
// Prospect Configuration Schema
// ============================================================
// This file defines the complete data structure for generating
// an Iconoclastic Capital engagement proposal for any prospect.
//
// An LLM (or human) populates a ProspectConfig object from
// Right Capital reports, meeting transcripts, and advisor notes.
// The template slide system then renders the full deck.
// ============================================================

export interface ProspectConfig {
  /** Title slide — prospect name and date */
  prospect: {
    fullName: string;
    preparedDate: string; // e.g., "February 20, 2026"
  };

  /** "Your Situation" slide — client profile, goals, risk */
  situation: {
    /** Key facts displayed in the table (label → value) */
    facts: Array<{ label: string; value: string }>;
    /** Client's primary goal in their own words */
    primaryGoal: { quote: string };
    /** Risk tolerance description */
    riskProfile: { description: string };
    /** Optional footer note (e.g., referral source) */
    footerNote?: string;
  };

  /** "Asset Allocation" slide — current vs. target comparison */
  allocation: {
    categories: Array<{
      label: string;
      current: number; // percentage
      target: number;  // percentage
    }>;
    currentReturn: string; // e.g., "8.7%"
    targetReturn: string;  // e.g., "8.0%"
    riskScore: number;     // out of 100
    /** Label for the target (e.g., "Moderate", "Conservative") */
    targetLabel?: string;
    /** One-line summary of the major shifts */
    keyShiftsSummary: string;
  };

  /** "Key Findings" slides — 1 to N slides, each with 2 finding cards */
  findings: FindingsSlide[];

  /** "How We Can Help" slide — services with optional estimated value */
  services: ServiceItem[];

  /** Pricing configuration */
  pricing: {
    /** Total investable assets (for context/display) */
    investableAssets: number;
    /**
     * Assets actually under Iconoclastic management.
     * THIS drives the fee waiver and AUM tier rules:
     *   - managedAUM ≥ $1M → Year 1 planning fee waived
     *   - managedAUM ≥ $2M → AUM fee drops to 0.65%
     * If omitted, defaults to investableAssets (full consolidation).
     */
    managedAUM?: number;
    /** Accounts being consolidated to Iconoclastic management */
    managedAccounts?: ManagedAccount[];
    /** Narrative about future AUM growth potential (e.g., 401k rollovers at retirement) */
    aumGrowthNote?: string;
    /** One-time project fee ($5,000–$10,000 based on scope) */
    projectFee: number;
    /** Which GWM tier to present alongside the project option */
    gwmTier: 'essentials' | 'premier';
    /** Which option to recommend */
    recommendedOption: 'project' | 'gwm';
    /** Personalized reason for the recommendation */
    recommendedReason: string;
    /** Override default project feature bullets */
    projectFeatures?: string[];
    /** Override default GWM feature bullets */
    gwmFeatures?: string[];
    /** Custom footer text for project option card */
    projectFooter?: string;
    /** Custom footer text for GWM option card */
    gwmFooter?: string;
  };

  /** "Side-by-Side Comparison" slide */
  comparison: {
    rows: ComparisonRow[];
  };

  /** "Next Steps" slide */
  nextSteps: {
    /** Personalized closing quote from the CEO */
    closingQuote: string;
  };
}

// ============================================================
// Supporting types
// ============================================================

export interface FindingsSlide {
  /** Each findings slide displays exactly 2 cards side by side */
  cards: [FindingCard, FindingCard];
}

export interface FindingCard {
  /** Lucide icon name (e.g., "PieChart", "AlertTriangle") */
  icon: string;
  /** Icon background color theme */
  iconColor: 'teal' | 'warning' | 'success';
  /** Card title */
  title: string;
  /**
   * Main narrative paragraph. Supports **bold** syntax for emphasis.
   * Example: "Portfolio is **81% equity / 19% fixed income** — heavily weighted..."
   */
  narrative: string;
  /** Ordered list of visual content blocks below the narrative */
  contentBlocks: ContentBlock[];
  /** Recommendation callout at the bottom of the card (prefixed with ✦) */
  recommendation: string;
}

export type ContentBlock =
  | {
      type: 'key-values';
      heading?: string;
      items: Array<{ label: string; value: string }>;
    }
  | {
      type: 'callout';
      text: string;
    }
  | {
      type: 'metrics';
      items: Array<{
        value: string;
        label: string;
        color?: 'teal' | 'success' | 'warning' | 'neutral';
      }>;
      showArrows?: boolean;
      size?: 'default' | 'large';
    }
  | {
      type: 'schedule';
      rows: Array<{
        period: string;
        amount: string;
        note: string;
      }>;
    }
  | {
      type: 'progress-bars';
      heading?: string;
      items: Array<{ label: string; value: number }>;
    }
  | {
      type: 'text';
      content: string;
    };

export interface ServiceItem {
  /** Lucide icon name */
  icon: string;
  title: string;
  description: string;
  /** Estimated dollar value this service delivers (e.g., "$243K tax savings") */
  estimatedValue?: string;
}

export interface ManagedAccount {
  /** Account owner name */
  owner: string;
  /** Account type/name */
  account: string;
  /** Current value */
  value: number;
  /** Optional note (e.g., "with $50K/yr contributions") */
  note?: string;
}

export interface ComparisonRow {
  label: string;
  /** true = checkmark, false = dash, string = custom text */
  project: boolean | string;
  /** true = checkmark, false = dash, string = custom text */
  gwm: boolean | string;
}
