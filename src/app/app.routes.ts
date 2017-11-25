import { ChatComponent } from './chat/chat.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: '', component: ChatComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: ChatComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
