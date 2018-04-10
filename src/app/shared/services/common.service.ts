import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class CommonService {

	constructor() { }

	getAllCategory() {
		return [
			{
				"id": "19d0463b-666e-4ec1-e885-08d59bf642dc",
				"productCategory": "Mens"
			},
			{
				"id": "a8248c9f-d112-4d20-e886-08d59bf642dc",
				"productCategory": "WoMens"
			},
			{
				"id": "687d4213-99c0-4eca-c0a2-08d59c5dad70",
				"productCategory": "Childrens"
			}
		]
	}
}
