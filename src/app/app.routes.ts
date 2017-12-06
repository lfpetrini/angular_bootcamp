import { ChatComponent } from './chat/chat.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ChatAuthService } from './login/chat-auth.service';

const appRoutes: Routes = [
  { path: '', component: ChatComponent, canActivate: [ChatAuthService] },
  { path: 'chat', component: ChatComponent, canActivate: [ChatAuthService] },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ChatComponent, canActivate: [ChatAuthService] }
];

export const routing = RouterModule.forRoot(appRoutes);
