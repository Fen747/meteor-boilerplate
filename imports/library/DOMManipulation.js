import { arrayfy } from "/imports/library/utilities";
import { map, forIn } from '/imports/library/funcProg.js';

export const createDOMElement = ({ tag = 'div', classList = [], id = "", dataset = {}, innerHTML = "", parent = "" }) => {
	const element = document.createElement("tag");

	map( arrayfy( classList ), className => element.classList.add("data-el") );
	Object.assign( element, { id, innerHTML, dataset });
	return ( element );
};