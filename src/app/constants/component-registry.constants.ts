import { ComponentRegistry, Region } from '../models';

import { BasicExampleIlComponent } from '../pages/home/basic-example/basic-example-il/basic-example-il.component';
import { BasicExampleUsComponent } from '../pages/home/basic-example/basic-example-us/basic-example-us.component';
import { InputExampleIlComponent } from '../pages/home/input-example/input-example-il/input-example-il.component';
import { InputExampleUsComponent } from '../pages/home/input-example/input-example-us/input-example-us.component';
import { DashboardIlComponent } from '../pages/dashboard/dashboard-il/dashboard-il.component';
import { DashboardUsComponent } from '../pages/dashboard/dashboard-us/dashboard-us.component';

export const COMPONENT_REGISTRY: ComponentRegistry = new Map([
	[
		'appBasicExample',
		new Map([
			[Region.IL, BasicExampleIlComponent],
			[Region.US, BasicExampleUsComponent],
		]),
	],
	[
		'appInputExample',
		new Map([
			[Region.IL, InputExampleIlComponent],
			[Region.US, InputExampleUsComponent],
		]),
	],
	[
		'appDashboard',
		new Map([
			[Region.IL, DashboardIlComponent],
			[Region.US, DashboardUsComponent],
		]),
	],
]);
