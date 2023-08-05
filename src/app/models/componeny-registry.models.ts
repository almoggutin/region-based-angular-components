import { Type } from '@angular/core';

import { Region } from './localization.models';

export type ComponentSelector = `app${string}`;

export type ComponentRegistry = Map<ComponentSelector, ComponentRegionMap>;

export type ComponentRegionMap = Map<Region, Type<any>>;
