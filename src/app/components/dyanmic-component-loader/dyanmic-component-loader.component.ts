import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnDestroy,
	OnInit,
	ViewChild,
	ViewContainerRef,
	inject,
} from '@angular/core';
import { takeUntil, Subject } from 'rxjs';

import { LocalizationService } from 'src/app/services';

import { ComponentSelector, Region } from 'src/app/models';

import { COMPONENT_REGISTRY } from 'src/app/constants';

@Component({
	selector: 'app-dyanmic-component-loader',
	standalone: true,
	imports: [],
	templateUrl: './dyanmic-component-loader.component.html',
	styleUrls: ['./dyanmic-component-loader.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DyanmicComponentLoaderComponent implements OnInit, OnDestroy {
	private readonly localizationService = inject(LocalizationService);

	@ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

	@Input({ required: true }) componentSelector!: ComponentSelector;
	@Input() inputs!: Record<string, unknown>;

	private destroy$: Subject<boolean> = new Subject<boolean>();

	private componentRef!: any;

	ngOnInit(): void {
		this.localizationService.region$
			.pipe(takeUntil(this.destroy$))
			.subscribe((region: Region) => this.loadComponent(region));
	}

	ngOnDestroy(): void {
		this.destroy$.next(true);
		this.destroy$.unsubscribe();

		if (!this.componentRef) return;
		this.componentRef.destroy();
	}

	private loadComponent(region: Region): void {
		this.container.clear();

		const componentRegionMap = COMPONENT_REGISTRY.get(this.componentSelector);
		if (!componentRegionMap) throw new Error('DyanmicComponentLoader Error: Component selector was not found!');

		const component = componentRegionMap.get(region);
		if (!component) return;

		this.componentRef = this.container.createComponent(component);

		if (!this.inputs) return;
		Object.keys(this.inputs).forEach((key: string) => {
			this.componentRef.instance[key] = this.inputs[key];
		});
	}
}
