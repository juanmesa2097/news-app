import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-page-header-wrapper',
  templateUrl: './page-header-wrapper.component.html',
  styleUrls: ['./page-header-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderWrapperComponent implements OnInit {
  @Input() imgSrc!: string;

  constructor() {}

  ngOnInit(): void {}
}
