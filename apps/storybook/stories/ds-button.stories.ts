// demo-button.stories.js

import { html } from 'lit-html';

import '@chadalen/ds-button';

export default {
  title: 'Button',
};

export const Primary = () => html`<ds-button>Button</ds-button>`;

export const WithIcon = () => html`<ds-button has-icon>Button</ds-button>`;
