import Rabbit from './rabbit.png';
import './rabbit-image.scss';

class RabbitImage {
	render() {
		const img = document.createElement('img')
		img.src = Rabbit;
		img.alt = 'Rabbit';
		img.classList.add('rabbit-image');

		const bodyDomElement = document.querySelector('body');
		bodyDomElement.appendChild(img);
	}
}

export default RabbitImage;
