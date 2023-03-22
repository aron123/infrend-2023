import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatGuard } from './chat.guard';
import { ChatComponent } from './chat/chat.component';
import { WelcomeGuard } from './welcome.guard';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [ WelcomeGuard ]
  },
  {
    path: '',
    component: ChatComponent,
    canActivate: [ ChatGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

