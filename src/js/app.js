import RoutedPane from './routed-pane';

class WordCount extends HTMLParagraphElement {
	constructor() {
		super();

		// so I guess attachShadow disables innerHTML and innerText.
		// const shadowRoot = this.attachShadow({ mode: 'open' });

		// this.render = this.render.bind(this);

		// this.render();
	}

	// connectedCallback() {
		// this.innerText = 'Hi there';
	// }

	// render() {
	// 	let text = document.createElement('p');
	// 	text.innerText = 'hello';
	// 	this.shadowRoot.appendChild(text);
	// }
}

customElements.define('word-count', WordCount, { extends: 'p' });
customElements.define('routed-pane', RoutedPane);

