// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import toolPagesShow from './tool_pages/show.js';

const functionList = {
	"tool_pages#show": toolPagesShow,
}

window.addEventListener('turbolinks:load', () => {
	const body = document.getElementsByTagName('body')[0];
	const func = functionList[`${body.dataset.controller}#${body.dataset.action}`];
	if (!!func) {
		func();
	}
})

window.addEventListener('DOMContentLoaded', () => {
	const body = document.getElementsByTagName('body')[0];
	const func = functionList[`${body.dataset.controller}#${body.dataset.action}`];
	if (!!func) {
		func();
	}
})

