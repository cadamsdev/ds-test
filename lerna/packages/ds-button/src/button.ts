import { html, css, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './button.styles';

@customElement('ds-button')
export class DSButton extends LitElement {
  static override styles = styles;

  override render(): TemplateResult {
    return html`<button><slot></slot></button>`;
  }
}
