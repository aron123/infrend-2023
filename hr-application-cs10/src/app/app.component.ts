import { Component } from '@angular/core';
import { Applicant, applicants } from './applicants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  applicants: Applicant[] = applicants;

  isSuspicious(applicant: Applicant): boolean {
    return applicant.experience == '0-5' && applicant.desiredSalary > 700000
      || applicant.experience == '10+' && applicant.desiredSalary < 500000;
  }

  removeApplicant(applicant: Applicant) {
    const index = this.applicants.indexOf(applicant);
    if (index > -1) {
      this.applicants.splice(index, 1);
    }
  }
}
