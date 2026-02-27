import type { ProspectConfig } from '@/types/prospect';
import { alingerConfig } from './alinger';
import { gaylordConfig } from './gaylord';

/**
 * Prospect registry — add new prospects here.
 * Keys are used as URL slugs (?prospect=gaylord).
 */
export const prospects: Record<string, ProspectConfig> = {
  alinger: alingerConfig,
  gaylord: gaylordConfig,
};

export const DEFAULT_PROSPECT = 'gaylord';

export function getProspect(key?: string | null): ProspectConfig {
  return prospects[key ?? ''] ?? prospects[DEFAULT_PROSPECT];
}
