import Slide01Title from './Slide01Title';
import Slide02Situation from './Slide02Situation';
import Slide03Allocation from './Slide03Allocation';
import Slide04Findings1 from './Slide04Findings1';
import Slide05Findings2 from './Slide05Findings2';
import Slide06Findings3 from './Slide06Findings3';
import Slide07Scope from './Slide07Scope';
import Slide08Options from './Slide08Options';
import Slide09Comparison from './Slide09Comparison';
import Slide10NextSteps from './Slide10NextSteps';

export const showcaseSlides = [
  { component: Slide01Title, name: 'Engagement Proposal', template: 'title' },
  { component: Slide02Situation, name: 'Your Situation', template: 'data-table' },
  { component: Slide03Allocation, name: 'Asset Allocation', template: 'chart-focus' },
  { component: Slide04Findings1, name: 'Portfolio & Metals', template: 'two-column' },
  { component: Slide05Findings2, name: 'TIAA & Roth', template: 'two-column' },
  { component: Slide06Findings3, name: 'Retirement & Insurance', template: 'two-column' },
  { component: Slide07Scope, name: 'How We Can Help', template: 'three-up' },
  { component: Slide08Options, name: 'Engagement Options', template: 'comparison' },
  { component: Slide09Comparison, name: 'Side-by-Side', template: 'comparison' },
  { component: Slide10NextSteps, name: 'Next Steps', template: 'cta' },
];
