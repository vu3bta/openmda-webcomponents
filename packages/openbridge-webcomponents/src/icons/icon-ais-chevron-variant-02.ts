import { LitElement, html, css, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('obi-ais-chevron-variant-02')
export class ObiAisChevronVariant02 extends LitElement {
  @property({ type: Boolean }) useCssColor = false;

  private icon = svg`
<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 18L12 3L22 18H17L12 12L7 18H2Z" />
</svg>
  `;

  private iconCss = svg`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 18L12 3L22 18H17L12 12L7 18H2Z" style="fill: var(--element-active-color)"/>
</svg>
  `;

  override render() {
    return html`
      <div class="wrapper">${this.useCssColor ? this.iconCss : this.icon}</div>
    `;
  }

  static override styles = css`
    .wrapper {
      height: 100%;
      width: 100%;
      line-height: 0;
    }
    .wrapper > * {
      height: 100%;
      width: 100%;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'obi-ais-chevron-variant-02': ObiAisChevronVariant02;
  }
}
