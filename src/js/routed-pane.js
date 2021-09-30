
const template = document.createElement('template');
template.innerHTML = '<slot name="rpanel"></slot>';
template.innerHTML = '';

class RoutedPane extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
		// this.shadowRoot.appendChild(template.content.cloneNode(true));
		// this._slot = this.shadowRoot.querySelector('slot[name=rpanel]');
	}

	connectedCallback() {
		// todo

		// alert(window.location.pathname);
		// alert(window.location.search);
		// end todo

		const paths = {};
		while (this.children.length > 0) {
			const path = this.children[0].getAttribute('path');
			paths[path] = this.children[0];
			// So I guess "appendChild" sets the .parent property of
			// the appending child (makes sense). Thus, if you do not do a
			// "child.cloneNode(true)", the child will be removed from
			// this.children when appending in to the shadowRoot. Hence why
			// looping till there are no children left works!
			this.shadowRoot.appendChild(this.children[0]);
		}
		/* for (let i = 0; i < this.children.length; i++) {
			const path = this.children[i].getAttribute('path');
			paths[path] = this.children[i];
			this.shadowRoot.appendChild(this.children[i]);// .cloneNode(true));
		} */
		// const all_wd_count = this.querySelectorAll('word-count');
		// all_wd_count.forEach((el) => {
		// 	this.shadowRoot.appendChild(el);
		// });

		// Promise.all([
		// 	customElements.whenDefined('howto-tab'),
		// 	customElements.whenDefined('howto-panel'),
		// ]).then(_ => this._linkPanels());
	}
}

export default RoutedPane;
