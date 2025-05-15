import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CrudComponent } from './crud/crud.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'crud',
    component: CrudComponent,
  },
];
