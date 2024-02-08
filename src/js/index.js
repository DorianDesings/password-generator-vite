import { buttonElement, optionsElement, rangeElement } from './dom';
import {
	changeLengthText,
	generatePassword,
	getCheckedOptions,
	updatePasswordLength
} from './password-functions';

changeLengthText();

// Eventos
rangeElement.addEventListener('input', updatePasswordLength);
buttonElement.addEventListener('click', generatePassword);
optionsElement.addEventListener('change', getCheckedOptions);
