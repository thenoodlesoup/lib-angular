import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { css } from 'emotion';

// Services
import { ThemeService } from '../services/theme.service';

// Styles
import UtilsStyles from '@fabula/core/theme/utils';

@Directive({
    selector: '[alItems], [flex], [flow], [justContent]'
})
export class FlexDirective implements AfterViewInit {
    @Input() alItems: string;
    @Input() flex: any;
    @Input() flow: string;
    @Input() justContent: string;

    constructor(
        private elRef: ElementRef
    ) { }

    ngAfterViewInit() {
        const element = this.elRef.nativeElement;
        const props = {
            alItems: this.alItems,
            flex: element.hasAttribute('flex'),
            flow: this.flow,
            justContent: this.justContent
        };

        element.classList.add(css(UtilsStyles({ framework: 'angular', props })));
    }
}
