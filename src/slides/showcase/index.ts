import { buildDeck } from '@/slides/template';
import { alingerConfig } from '@/prospects/alinger';

// Build the Alinger deck from the template system.
// To create a new prospect deck, create a new config file in src/prospects/
// and swap it in here (or add route-based switching).
export const showcaseSlides = buildDeck(alingerConfig);
