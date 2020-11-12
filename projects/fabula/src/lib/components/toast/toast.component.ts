import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  Input,
  ViewChild
} from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Services
import { ToastService } from '../../services/toast.service';

// Styles
import ToastStyles from '@fabula/core/styles/components/toast/toast';
import { InnerIconComponent } from '../inner-icon/inner-icon.component';

@Component({
  selector: 'fab-toast',
  styleUrls: ['./toast.component.scss'],
  templateUrl: './toast.component.html'
})
export class ToastComponent extends CommonComponent implements AfterContentInit, AfterViewInit {
  @Input() button: any;
  @Input() clear: boolean;
  @Input() color: string;
  @Input() faded: boolean;
  @Input() glow: boolean;
  @Input() hideButton: any;
  @Input() hiding = false;
  @Input() icon: any;
  @Input() index: any;
  @Input() message: string;
  @Input() outline: boolean;
  @Input() stack: string;
  @Input() stacked = false;

  @ContentChild(InnerIconComponent) iconComponent: InnerIconComponent;
  @ViewChild('toast') toastEl: ElementRef;

  height;

  constructor(
    public cdRef: ChangeDetectorRef,
    public elRef: ElementRef,
    public toastService: ToastService
  ) {
    super(elRef);
  }

  ngAfterContentInit() {
    this.styles = ToastStyles;
    this.initStyles();
    this.props = this;
  }

  ngAfterViewInit() {
    const host = this.elRef.nativeElement;
    let height;

    if (this.stacked) {
      this.stacked = false;
      height = host.querySelector('.fab-toast-wrapper').offsetHeight;
    }

    this.stacked = true;

    this.additionalProps = { height };
    this.height = height;
    this.cdRef.detectChanges();
  }

  // Methods
  hideToast() {
    const stack = this.toastService.stacks[this.stack];
    this.toastService.hideToast({
      index: this.index,
      stack
    });
  }
}
