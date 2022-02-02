import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegexValidators } from 'src/app/_shared/consts/regex.consts';
import { PageBaseComponent } from '../pages-base.component';

@Component({
  selector: 'contact-us-page',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent extends PageBaseComponent {
  contactForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    protected override router: Router) {
      super(router);
    }

    ngOnInit(): void {
      this.contactForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [
          Validators.required,
          Validators.pattern(RegexValidators.Email)
        ],
      ],
        subject: [''],
        message: [''],
      });
  }

  get controlName() {
    return this.contactForm.controls['name'];
  }

  get controlEmail() {
    return this.contactForm.controls['email'];
  }
  
  onSubmit(): void {
    this.toastr.success('You have successfully submitted contact and inquiry.');
    this.clearForm();
  }

  clearForm(): void {
    this.contactForm.reset();
  }
}