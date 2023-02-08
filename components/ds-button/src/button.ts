import { html, css, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './button.styles';
import '@chadalen/ds-icon';

@customElement('ds-button')
export class DSButton extends LitElement {
  static override styles = styles;

  @property({ type: Boolean, attribute: 'has-icon' })
  hasIcon?: boolean;

  iconTemplate(): TemplateResult {
    if (!this.hasIcon) {
      return html``;
    }

    return html`<ds-icon></ds-icon>`;
  }

  override render(): TemplateResult {
    return html`
      <button>
        ${this.iconTemplate()}
        <slot></slot>
      </button>
    `;
  }
}
