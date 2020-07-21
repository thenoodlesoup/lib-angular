import {
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { SegmentComponent } from '../components/segment/segment.component';
import { SegmentContentComponent } from '../components/segment-content/segment-content.component';
import { SegmentsComponent } from '../components/segments/segments.component';
import { SelectorComponent } from '../components/selector/selector.component';

// Directives
import { SegmentsDirective } from '../directives/segments.directive';

@NgModule({
    declarations: [
        SegmentComponent,
        SegmentContentComponent,
        SegmentsComponent,
        SegmentsDirective,
        SelectorComponent
    ],
    entryComponents: [
        SelectorComponent
    ],
    imports: [CommonModule],
    exports: [
        SegmentComponent,
        SegmentContentComponent,
        SegmentsComponent,
        SegmentsDirective
    ]
})
export class SegmentsModule { }
