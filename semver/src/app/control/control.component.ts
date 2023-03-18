import { Component, EventEmitter, Output } from '@angular/core';
import { VersionType } from '../models/change';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent {
  @Output()
  versionChanged = new EventEmitter<VersionType>();

  incremented(versionType: VersionType) {
    this.versionChanged.emit(versionType);
  }
}
