import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateForm } from '@app/core/utils/validator.utils';
import { Program } from '@app/store/programs/programs.model';
import { User } from '@app/store/user/user.model';
import { TuiCountryIsoCode } from '@taiga-ui/kit/components/input-phone-international';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent implements OnInit {
  @Input() programs!: Program[];

  @Output() register = new EventEmitter<User>();

  s = [
    { id: 2020, name: 'Ingeniería de sistemas' },
    { id: 2050, name: 'Ingeniería electrónica' },
    { id: 2075, name: 'Ingeniería Industrial' },
    { id: 2075, name: 'Ingeniería Industrial' },
    { id: 2075, name: 'Ingeniería Industrial' },
    { id: 2090, name: 'Psicología' },
    { id: 2025, name: 'Comunicaciones' },
    { id: 2025, name: 'Comunicaciones' },
    { id: 2090, name: 'Psicología' },
  ];

  formData!: FormGroup;

  readonly countries: ReadonlyArray<TuiCountryIsoCode> = [TuiCountryIsoCode.CO];

  countryIsoCode = TuiCountryIsoCode.CO;

  constructor(private fb: FormBuilder) {
    this.formData = this.fb.group({
      name: [null, [Validators.required]],
      familyName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      phone: [
        null,
        [
          Validators.required,
          Validators.minLength(13),
          Validators.maxLength(13),
        ],
      ],
      program: [null, Validators.required],
      comment: [null],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const { valid, value } = this.formData;

    validateForm(this.formData);

    if (valid) {
      this.register.emit({ ...value, program: value.program.toString() });
    }
  }
}
