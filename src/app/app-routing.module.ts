import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { memeListComponent } from './meme-list/meme-list.component';

const routes: Routes = [
  {path: '', component: memeListComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
