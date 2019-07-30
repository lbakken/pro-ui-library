import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'pro-ui-library',
  bundles: [
    { components: ['pro-grid', 'pro-row', 'pro-col'] },
    { components: ['pro-header', 'pro-content', 'pro-footer'] },
    { components: ['pro-button', 'pro-list', 'pro-radio-group', 'pro-radio', 'pro-checkbox', 'pro-input'] },
    { components: ['pro-card', 'pro-modal', 'pro-label', 'pro-image'] }
  ],
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ],
  globalStyle: 'src/css/global.scss'
};
