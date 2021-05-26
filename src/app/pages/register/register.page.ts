import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { NewsState } from 'src/app/store/state/news.state';

@Component({
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @Select(NewsState.loading) loading$!: Observable<boolean>;

  constructor() {}

  ngOnInit(): void {}
}
