import { ComponentRegistry, Region } from '../models';

import { TitleIlComponent } from '../pages/home/title/title-il/title-il.component';
import { TitleUsComponent } from '../pages/home/title/title-us/title-us.component';

export const COMPONENT_REGISTRY: ComponentRegistry = new Map([
	[
		'appTitle',
		new Map([
			[Region.IL, TitleIlComponent],
			[Region.US, TitleUsComponent],
		]),
	],
]);
