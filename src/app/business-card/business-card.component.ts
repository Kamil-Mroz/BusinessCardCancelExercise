import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShowDateComponent } from '../show-date/show-date.component';
import { CommonModule } from '@angular/common';
import { ManageInterestsComponent } from '../manage-interests/manage-interests.component';

@Component({
  selector: 'app-business-card',
  standalone: true,
  imports: [
    FormsModule,
    ShowDateComponent,
    CommonModule,
    ManageInterestsComponent,
  ],
  templateUrl: './business-card.component.html',
  styleUrl: './business-card.component.css',
})
export class BusinessCardComponent {
  name: string;
  surname: string;
  dateOfBirth: Date;
  interests: string[];
  selected: number = -1;
  tempInterest: string;

  constructor() {
    this.name = 'Kamil';
    this.surname = 'Mróz';
    this.dateOfBirth = new Date('2000-01-01');
    this.interests = ['video games', 'e-sport', 'music'];
    this.tempInterest = '';
  }

  selectInterest(which: number): void {
    this.selected = which;
    this.tempInterest = this.interests[which];
  }

  save() {
    this.tempInterest = '';
    this.selected = -1;
  }

  cancel() {
    this.interests[this.selected] = this.tempInterest;
    this.selected = -1;
  }
}
