import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [ButtonModule, FloatLabelModule, InputTextModule, FormsModule],
  template: `<div class="min-h-screen">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-8">Welcome to DevRex CRUD</h1>
        <p class="text-xl mb-12">
          A modern application to manage your users efficiently
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div class="overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <i class="pi pi-database text-4xl"></i>
              </div>
              <div class="ml-5">
                <h3 class="text-lg font-medium">Data Management</h3>
                <p class="mt-2 text-sm">
                  Create, read, update, and delete users intuitively.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <i class="pi pi-user text-4xl"></i>
              </div>
              <div class="ml-5">
                <h3 class="text-lg font-medium">User Experience</h3>
                <p class="mt-2 text-sm">Modern and beautiful interface.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <p-button
          label="Go to CRUD"
          icon="pi pi-arrow-right"
          severity="primary"
          [style]="{ 'margin-right': '.5em' }"
          (click)="navigate(['/crud'])"
        ></p-button>
      </div>
    </div>
  </div> `,
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigate(path: string[]) {
    this.router.navigate(path);
  }
}
