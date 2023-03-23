import { Component, EventEmitter, Output } from '@angular/core';
import { VersionType } from '../models/version-type';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent {
  @Output() versionChanged = new EventEmitter<VersionType>();
}
