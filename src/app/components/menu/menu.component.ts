import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PathName } from 'src/app/core/enums/path-name.enum';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  pathName = PathName;

  constructor() {}

  ngOnInit(): void {}
}
