import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ComponentRef,
	DestroyRef,
	Input,
	OnDestroy,
	OnInit,
	ViewChild,
	ViewContainerRef,
	inject,
} from '@angular/core';
import { takeUntil, Subject } from 'rxjs';
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
	private readonly cdr = inject(ChangeDetectorRef);

	@ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

	@Input({ required: true }) componentSelector!: ComponentSelector;
	@Input() inputs!: Record<string, unknown>;
	@Input() outputs!: Record<string, (value: any) => void>;

	private destroy$: Subject<boolean> = new Subject<boolean>();

	private componentRef!: ComponentRef<any>;
	private componentRefDestroyRef!: DestroyRef;

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
		if (!componentRegionMap) throw new Error('DyanmicComponentLoader Error: Component selector does not exist!');

		const component = componentRegionMap.get(region);
		if (!component) {
			this.cdr.detectChanges();
			return;
		}

		this.componentRef = this.container.createComponent(component);
		this.componentRefDestroyRef = this.componentRef.injector.get(DestroyRef);

		if (this.inputs) {
			Object.keys(this.inputs).forEach((key: string) => {
				this.componentRef.setInput(key, this.inputs[key]);
			});
		}

		if (this.outputs) {
			Object.keys(this.outputs).forEach((key: string) => {
				const output = this.componentRef.instance[key];
				if (!output) return;

				this.componentRef.instance[key]
					.pipe(takeUntilDestroyed(this.componentRefDestroyRef))
					.subscribe(this.outputs[key]);
			});
		}

		this.cdr.detectChanges();
	}
}
