import { Component, HostListener } from '@angular/core';
import { PageBaseComponent } from './pages-base.component';
import { ChangeDetectorRef, AfterContentChecked} from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent extends PageBaseComponent implements AfterContentChecked {

  constructor(
    private changeDetector: ChangeDetectorRef,
    protected override router: Router) {
    super(router)
  }

  ngAfterContentChecked() : void {
    //// PREVENTS ERROR https://angular.io/errors/NG0100
    this.changeDetector.detectChanges();
  }

  get currentYear(): string {
    const date = new Date();
    return date.getFullYear().toString();
  }

  @HostListener("window:scroll", []) onWindowScroll() {
  }

  get onTopPage(): boolean {
    const verticalOffset =
            window.pageYOffset
            || document.documentElement.scrollTop
            || document.body.scrollTop
            || 0;

    return verticalOffset === 0;
  }
}