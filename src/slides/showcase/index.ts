import Slide01Title from './Slide01Title';
import Slide02Situation from './Slide02Situation';
import Slide03Findings1 from './Slide03Findings1';
import Slide04Findings2 from './Slide04Findings2';
import Slide05Findings3 from './Slide05Findings3';
import Slide06Scope from './Slide06Scope';
import Slide07Options from './Slide07Options';
import Slide08Comparison from './Slide08Comparison';
import Slide09NextSteps from './Slide09NextSteps';

export const showcaseSlides = [
  { component: Slide01Title, name: 'Engagement Proposal', template: 'title' },
  { component: Slide02Situation, name: 'Your Situation', template: 'data-table' },
  { component: Slide03Findings1, name: 'Portfolio & Metals', template: 'two-column' },
  { component: Slide04Findings2, name: 'TIAA & Roth', template: 'two-column' },
  { component: Slide05Findings3, name: 'Retirement & Insurance', template: 'two-column' },
  { component: Slide06Scope, name: 'How We Can Help', template: 'three-up' },
  { component: Slide07Options, name: 'Engagement Options', template: 'comparison' },
  { component: Slide08Comparison, name: 'Side-by-Side', template: 'comparison' },
  { component: Slide09NextSteps, name: 'Next Steps', template: 'cta' },
];
