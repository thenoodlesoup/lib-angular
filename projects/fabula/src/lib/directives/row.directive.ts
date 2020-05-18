import { AfterViewInit, Directive, ElementRef, Input, Renderer2, TemplateRef, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

// Services
import { ThemeService } from '../services/theme.service';

import { RowComponent } from '../components/row/row.component';

@Directive({
    selector: '[row]'
})
export class RowDirective implements AfterViewInit {
    @Input() row: any;

    constructor(
        private elRef: ElementRef,
        private renderer: Renderer2,
        private themeService: ThemeService,
    ) { }

    ngAfterViewInit() {
        const element = this.elRef.nativeElement;
        const parent = element.parentNode;
        const wrapper = document.createElement('div');

        wrapper.classList.add('fab-row');

        this.renderer.insertBefore(parent, wrapper, element);
        this.renderer.appendChild(wrapper, element);

        const props = {};

        this.themeService.attachUtils(element, 'row', props);
    }

}
