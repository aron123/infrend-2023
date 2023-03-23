import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VersionComponent } from './version/version.component';
import { ControlComponent } from './control/control.component';
import { ChangelogComponent } from './changelog/changelog.component';

@NgModule({
  declarations: [
    AppComponent,
    VersionComponent,
    ControlComponent,
    ChangelogComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
