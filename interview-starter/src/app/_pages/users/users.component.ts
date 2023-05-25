import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { UserService } from '../../_shared/service';
import { User } from '../../_state/users/users-store';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
    imports: [CommonModule,
        MatButtonModule,
        MatExpansionModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
    ],
  templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    users: User[];
    disableButton: boolean = false;
    panelOpenState = false;
    userForm: FormGroup

    constructor(private userService: UserService, private formBuilder: FormBuilder) {
    }

    get documentControl() :FormArray{
        return this.userForm.get('user') as FormArray;
    }

    ngOnInit(): void {

        this.userForm = this.formBuilder.group({
            id:[''],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            maidenName: ['', Validators.required],
            age: [null, [Validators.required, Validators.min(2)]],
            gender: [null, Validators.required],
            email: ['', Validators.required],
            phone: ['', Validators.required],
            birthDate: ['', Validators.required]

        });

        this.userService.getUserDetails().subscribe((data) => {
            this.users = data.users;
            console.log(this.users);

            //uncomment to bind data
            /*this.users.forEach((item) => {
                this.documentControl.push(
                this.userForm.patchValue({
                   
                    id: item.id,
                    firstName: item.firstName,
                    lastName: item.lastName,
                    maidenName: item.maidenName,
                    age: item.age,
                    gender: item.gender,
                    email: item.email,
                    phone: item.phone,
                    birthDate: item.birthDate
                }))
            });*/

            this.users.forEach((item) => {
                this.userForm.patchValue({

                    id: item.id,
                    firstName: item.firstName,
                    lastName: item.lastName,
                    maidenName: item.maidenName,
                    age: item.age,
                    gender: item.gender,
                    email: item.email,
                    phone: item.phone,
                    birthDate: item.birthDate
                })
            });
        });
    }

    saveUserDate(userData:User) {
        this.disableButton = true;

        this.userService.saveUserDetails(userData).subscribe((data) => {
        });

        this.disableButton = false;
    }

}
