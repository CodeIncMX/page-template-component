import './images/tech-image@2x.png';
import './images/tech-image-md@2x.png';
import './style.scss';

import WebpSupportPlugin from '@codeinc.mx/background-manager/js/plugins/WebpSupportPlugin.js'
import PageTemplate from '../js/PageTemplate.js';

new PageTemplate({
  document,
  plugins: [
    new WebpSupportPlugin({
      noWebpSupportedClassName: 'webp--disabled'
    })
  ]
});