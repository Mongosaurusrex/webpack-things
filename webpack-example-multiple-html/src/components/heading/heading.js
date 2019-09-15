import './heading.scss';

class Heading {
	render(pageName) {
		const h1 = document.createElement('h1');
		const body = document.querySelector('body');
		h1.innerHTML = `Webpack begins to make sense, and this page is called '${ pageName }'`;
		body.appendChild(h1);
	}
}

export default Heading;
