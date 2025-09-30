import type { Preview } from '@storybook/angular';

import '../../ui-tokens/src/styles/base/reset.css';
import '../../ui-tokens/src/styles/base/icons.css';
import '../../ui-tokens/src/styles/themes/emerald.css';
import '../../ui-tokens/src/styles/themes/yellow.css';

const preview: Preview = {
  parameters: {
    controls: { expanded: true }
  },
  decorators: [
    (story) => {
      const g: any = typeof globalThis !== 'undefined' ? (globalThis as any) : undefined;
      if (g?.document?.body) {
        g.document.body.classList.add('theme-emerald');
      }
      return story();
    }
  ]
};

export default preview;
