// Legacy barrel — slide decks are now built dynamically via buildDeck(getProspect(key)).
// This file is kept for backwards compatibility but is no longer the primary entry point.
export { buildDeck } from '@/slides/template';
export { getProspect, prospects, DEFAULT_PROSPECT } from '@/prospects';
