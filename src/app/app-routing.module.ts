import { AddarticleComponent } from './components/addarticle/addarticle.component';
import { ListComponent } from './components/list/list.component';
import { ChatComponent } from './components/chat/chat.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'chat', component : ChatComponent},
  {path : 'liste', component : ListComponent},
  {path : 'add', component : AddarticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
