import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [ButtonModule],
  template: `<nav class="shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <span class="text-xl font-bold">CRUD - DevRex</span>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a href="#" class="px-3 py-2 rounded-md text-sm font-medium"
                >Inicio</a
              >
              <a href="#crud" class="px-3 py-2 rounded-md text-sm font-medium"
                >CRUD</a
              >
            </div>
          </div>
        </div>
        <p-button
          label="Tema"
          (onClick)="toggleDarkMode()"
          severity="secondary"
        />
      </div>
    </div>
  </nav> `,
})
export class HeaderComponent {
  toggleDarkMode() {
    const element = document.querySelector('html');
    if (element) {
      element.classList.toggle('my-app-dark');
    }
  }
}
