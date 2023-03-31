import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { UserGuardService } from './user-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
    canActivate: [ () => inject(UserGuardService).refuseGuest()  ]
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [ () => inject(UserGuardService).refuseUser()  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
