import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { AuthGuardService } from './services/auth-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [ () => inject(AuthGuardService).refuseRegistered() ]
  },
  {
    path: '',
    component: ChatComponent,
    canActivate: [ () => inject(AuthGuardService).refuseUnregistered() ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
