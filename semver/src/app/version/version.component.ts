import { Component, Input } from '@angular/core';
import { Version } from '../models/version';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent {
  @Input() version!: Version;
}
