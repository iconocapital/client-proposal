import { buildDeck } from '@/slides/template';
import { gaylordConfig } from '@/prospects/gaylord';

// Build the active prospect deck from the template system.
// To switch prospects, swap the import (e.g., alingerConfig, gaylordConfig).
export const showcaseSlides = buildDeck(gaylordConfig);
