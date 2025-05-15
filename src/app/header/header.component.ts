import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `<nav class="shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <span class="text-xl font-bold">CRUD - DevRex</span>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a
                (click)="navigate([''])"
                class="px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                >Home</a
              >
              <a
                (click)="navigate(['crud'])"
                class="px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                >CRUD</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav> `,
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigate(path: string[]) {
    this.router.navigate(path);
  }
}
