import { Component } from '@angular/core';
import { VersionType } from './models/version-type';
import { ChangelogEntry } from './models/changelog-entry';
import { Version } from './models/version';

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

  changes: ChangelogEntry[] = [];

  handleVersionChange(versionType: VersionType) {
    if (versionType === 'major') {
      this.version.major++;
      this.version.minor = 0;
      this.version.patch = 0;
      this.changes.unshift({
        versionType: versionType,
        oldValue: this.version.major - 1,
        newValue: this.version.major
      });
    }
    else if (versionType === 'minor') {
      this.version.minor++;
      this.version.patch = 0;
      this.changes.unshift({
        versionType: versionType,
        oldValue: this.version.minor - 1,
        newValue: this.version.minor
      });
    }
    else if (versionType === 'patch') {
      this.version.patch++;
      this.changes.unshift({
        versionType: versionType,
        oldValue: this.version.patch - 1,
        newValue: this.version.patch
      });
    }

  }
}
