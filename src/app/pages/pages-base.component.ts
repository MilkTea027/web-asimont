import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({ template: '' })   
export abstract class PageBaseComponent {
    constructor(protected router: Router) { }

    goTo(sectionName: string): void {
        const section = document.getElementById(sectionName);

        if (!!section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
              });
        }
    }
}