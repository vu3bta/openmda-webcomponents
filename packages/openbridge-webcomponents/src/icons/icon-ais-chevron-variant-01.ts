import { LitElement, html, css, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('obi-ais-chevron-variant-01')
export class ObiAisChevronVariant01 extends LitElement {
  @property({ type: Boolean }) useCssColor = false;

  private icon = svg`
<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 17L12 2L21 17H15V22H9V17H3Z" />
</svg>
  `;

  private iconCss = svg`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 17L12 2L21 17H15V22H9V17H3Z" style="fill: var(--element-active-color)"/>
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
    'obi-ais-chevron-variant-01': ObiAisChevronVariant01;
  }
}
