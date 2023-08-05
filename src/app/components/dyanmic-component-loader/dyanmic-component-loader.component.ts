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
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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

	private componentRef!: any;

	ngOnInit(): void {
		this.localizationService.region$
			.pipe(takeUntilDestroyed())
			.subscribe((region: Region) => this.loadComponent(region));
	}

	ngOnDestroy(): void {
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

		Object.keys(this.inputs).forEach((key: string) => {
			this.componentRef.instance[key] = this.inputs[key];
		});
	}
}
