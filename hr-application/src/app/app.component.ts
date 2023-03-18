import { Component, OnInit } from '@angular/core';
import { Applicant, applicants } from './applicants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  applicants: Applicant[] = [];

  newApplicant: Applicant = this.defaultApplicantData();

  formVisible = false;

  ngOnInit(): void {
    this.applicants = applicants;
  }

  defaultApplicantData(): Applicant {
    return {
      id: 0,
      name: '',
      role: '',
      experience: '0-5',
      desiredSalary: 0
    }
  }

  isSuspicious(applicant: Applicant): boolean {
    return applicant.experience == '0-5' && applicant.desiredSalary > 700000
      || applicant.experience == '10+' && applicant.desiredSalary < 500000;
  }

  deleteApplicant(applicant: Applicant): void {
    const index = this.applicants.indexOf(applicant);
    if (index > -1) {
      this.applicants.splice(index, 1);
    }
  }

  createApplicant(): void {
    this.applicants.push({...this.newApplicant});
    this.newApplicant = this.defaultApplicantData();
    this.hideForm();
  }

  showForm() {
    this.formVisible = true;
  }

  hideForm() {
    this.formVisible = false;
  }

}
