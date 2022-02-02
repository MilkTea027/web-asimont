import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [ ],
    imports: [
      NgbModule,
      FormsModule,
      CommonModule,
      HttpClientModule,
      ReactiveFormsModule,
      ToastrModule.forRoot({
        closeButton: true,
        newestOnTop: false,
      }),
    ],
    exports: [
      NgbModule,
      FormsModule,
      CommonModule,
      HttpClientModule,
      ReactiveFormsModule,
    ],
  })
  export class SharedModule {
    static forRoot(): any {
      return {
        ngModule: SharedModule,
        providers: [ NgbActiveModal],
      };
    }
  }
  