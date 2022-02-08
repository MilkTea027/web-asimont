import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegexValidators } from 'src/app/_shared/consts/regex.consts';
import { EmailRequest } from 'src/app/_shared/models/email.model';
import { EmailService } from 'src/app/_shared/services/email.services';
import { environment } from 'src/environments/environment';
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
    private emailService: EmailService,
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
  
  clearForm(): void {
    this.contactForm.reset();
  }

  onSubmit(): void {
    const emailRequest = this.getEmailMessageRequest();
    this.emailService.sendEmail(emailRequest)
        .subscribe({
          next: () => {
            this.clearForm();
            this.toastr.success('You have successfully submitted contact and inquiry.');
          },
          error: (err) => {
            this.toastr.error('Please contact support', 'Oops! Something went wrong');
            console.log('error details', err);
          }
        });
  }

  getEmailMessageRequest(): EmailRequest {
    const subject = this.getcontrolValue('subject') || 'No Subject';

    const request: EmailRequest = {
      senderEmail: environment.email.from,
      receiverEmail: environment.email.to,
      subject: `Inquiry in Asimont Website: ${subject}`,
      body: this.getEmailBodyContent(),
    };

    return request;
  }

  getEmailBodyContent(): string {
    const email = this.getcontrolValue('email');
    const name = this.getcontrolValue('name');
    const subject = this.getcontrolValue('subject') || 'None';
    const message = this.getcontrolValue('message') || 'None';

    const context = `Name:\n${name}\n\nEmail:\n${email}\n\nSubject:\n${subject}\n\nMessage:\n${message}`
    return context;
  }

  getcontrolValue(name: string): string {
    const value = this.contactForm.controls[name].value || '';
    return String(value).trim();
  }
}