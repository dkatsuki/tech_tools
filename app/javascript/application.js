// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import toolPagesShow from './tool_pages/show.js';

const functionList = {
	"tool_pages#show": toolPagesShow,
}

const onLoadFunction = () => {
	const container = document.getElementById('root');
	const func = functionList[`${container.dataset.controller}#${container.dataset.action}`];
	if (!!func) {
		func();
	}
}

window.addEventListener('turbo:load', onLoadFunction)