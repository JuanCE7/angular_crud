import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../common.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-crud',
  imports: [
    TableModule,
    CommonModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    FloatLabelModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
  ],
  providers: [MessageService],
  template: `<div class="p-4">
    <p-toast />
    <h1 class="text-2xl font-bold mb-4 text-center">Users</h1>
    <p-card class="mb-4">
      <form [formGroup]="UserForm">
        <div class="grid grid-cols-2 gap-8">
          <div class="flex flex-col gap-8">
            <p-floatlabel>
              <input
                pInputText
                formControlName="name"
                id="name"
                class="w-full"
                autocomplete="off"
              />
              <label for="name">User Name</label>
            </p-floatlabel>

            <p-floatlabel>
              <input
                pInputText
                formControlName="email"
                id="email"
                class="w-full"
                autocomplete="off"
              />
              <label for="email">UserEmail</label>
            </p-floatlabel>
          </div>
          <div class="flex flex-col gap-8">
            <p-floatlabel>
              <input
                pInputText
                formControlName="mobile"
                id="mobile"
                class="w-full"
                autocomplete="off"
              />
              <label for="mobile">User Mobile</label>
            </p-floatlabel>

            <p-floatlabel>
              <input
                pInputText
                formControlName="age"
                id="age"
                class="w-full"
                autocomplete="off"
              />
              <label for="age">User Age</label>
            </p-floatlabel>
          </div>
        </div>
        <div>
          <p-button
            [label]="this.UserForm.value.id ? 'Update' : 'Add'"
            class="w-full"
            severity="contrast"
            styleClass="w-full mt-4"
            icon="pi pi-save"
            iconPos="right"
            (onClick)="submitData()"
          ></p-button>
        </div>
      </form>
    </p-card>
    <div class="card">
      <p-table [value]="users" [tableStyle]="{ 'min-width': '50rem' }">
        <ng-template #header>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </ng-template>
        <ng-template #body let-user>
          <tr>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.mobile }}</td>
            <td class="flex gap-2">
              <p-button
                label="Edit"
                severity="primary"
                (onClick)="onEdit(user.id)"
                icon="pi pi-pencil"
                iconPos="right"
              ></p-button>
              <p-button
                label="Delete"
                severity="danger"
                (onClick)="onDelete(user.id)"
                icon="pi pi-trash"
                iconPos="right"
              ></p-button>
            </td>
          </tr>
        </ng-template>
      </p-table>
    </div>
  </div>`,
})
export class CrudComponent {
  UserForm: any;
  users: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private messageService: MessageService
  ) {
    this.UserForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', Validators.required],
      age: ['', Validators.required],
      mobile: ['', Validators.required],
    });

    this.getData();
  }

  show(severity: string, type: string, message: string) {
    this.messageService.add({
      severity: severity,
      summary: type,
      detail: message,
      life: 3000,
    });
  }
  async getData() {
    var data = await this.commonService.getUsers().toPromise();
    if (data) {
      this.users = data;
    }
  }

  submitData() {
    var type = this.UserForm.value.id ? 'update' : 'add';
    this.onSubmit(type);
  }

  private generateUniqueId(): string {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    return `${timestamp}-${random}`;
  }

  async onSubmit(type: any) {
    if (type == 'add') {
      const formData = { ...this.UserForm.value, id: this.generateUniqueId() };
      var data = await this.commonService.addUser(formData).toPromise();
      this.show('success', 'Add', 'User added successfully');
    } else {
      var data = await this.commonService
        .updateUser(this.UserForm.value)
        .toPromise();
      this.show('success', 'Update', 'User updated successfully');
    }
    this.getData();
    this.UserForm.reset();
  }

  async onEdit(id: string) {
    var data = await this.commonService.getUserById(id).toPromise();
    if (data) {
      this.UserForm.patchValue({
        id: data.id,
        name: data.name,
        email: data.email,
        age: data.age,
        mobile: data.mobile,
      });
    }
  }

  onDelete(id: string) {
    this.commonService.deleteUser(id).subscribe(() => {
      this.UserForm.reset();
      this.getData();
      this.show('warn', 'Delete', 'User deleted successfully');
    });
  }
}
