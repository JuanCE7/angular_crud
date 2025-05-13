import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  imports: [ButtonModule, FloatLabelModule, InputTextModule, FormsModule],
  template: `<div class="min-h-screen">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-8">Bienvenido a DevRex CRUD</h1>
        <p class="text-xl mb-12">
          Una aplicación moderna para gestionar tus datos de forma eficiente
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
                <h3 class="text-lg font-medium">Gestión de Datos</h3>
                <p class="mt-2 text-sm">
                  Crear, leer, actualizar y eliminar registros de forma
                  intuitiva.
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
                <h3 class="text-lg font-medium">Experiencia de Usuario</h3>
                <p class="mt-2 text-sm">
                  Interfaz moderna y responsive con modo oscuro incluido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <p-button
          label="Ir al CRUD"
          icon="pi pi-arrow-right"
          severity="primary"
          [style]="{ 'margin-right': '.5em' }"
        ></p-button>
      </div>
    </div>
  </div> `,
})
export class HomeComponent {}
