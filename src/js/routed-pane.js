
const template = document.createElement('template');
template.innerHTML = '<slot name="rpanel"></slot>';

class RoutedPane extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
		this.shadowRoot.appendChild(template.content.cloneNode(true));


		this._slot = this.shadowRoot.querySelector('slot[name=rpanel]');
	}

	connectedCallback() {
		//todo

		// alert(window.location.pathname);
		// alert(window.location.search);
		//end todo

		const all_wd_count = this.querySelectorAll('word-count');
		all_wd_count.forEach(el => {

			// if (!(window.location.pathname === '/webfolio-webui/dist/index.html')) {
			// 	el.hidden = true;
			// }

			this.shadowRoot.appendChild(el);
		});

		// Promise.all([
		// 	customElements.whenDefined('howto-tab'),
		// 	customElements.whenDefined('howto-panel'),
		// ]).then(_ => this._linkPanels());
	}
}

export default RoutedPane;
