import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent implements OnInit {
  formData!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formData = this.fb.group({
      name: [null, [Validators.required]],
      familyName: [null, [Validators.required]],
      email: [null, [Validators.email]],
      phone: [null, [Validators.minLength(10), Validators.maxLength(10)]],
      program: [null, Validators.required],
      comment: [null],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    // const { valid, value } = this.credentialsForm;
    // validateForm(this.credentialsForm);
    // if (valid) {
    //   this.signIn.emit(value);
    // }
  }
}
