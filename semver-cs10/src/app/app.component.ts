import { Component } from '@angular/core';
import { Version } from './models/version';
import { VersionType } from './models/version-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  version: Version = {
    major: 0,
    minor: 0,
    patch: 1
  };

  handleVersionChange(versionType: VersionType) {
    console.log(versionType);
  }
}
