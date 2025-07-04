import { LitElement, html, css, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('obi-ais-chevron')
export class ObiAisChevron extends LitElement {
  @property({ type: Boolean }) useCssColor = false;

  private icon = svg`
<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 0L17.3 12L24 24L12 18.6L0 24L6.7 12L12 0Z" />
</svg>
  `;

  private iconCss = svg`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 0L17.3 12L24 24L12 18.6L0 24L6.7 12L12 0Z" style="fill: var(--element-active-color)"/>
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
    'obi-ais-chevron': ObiAisChevron;
  }
}
