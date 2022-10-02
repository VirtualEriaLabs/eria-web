import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {WonderlandComponent} from "./wonderland/wonderland.component";

const routes: Routes = [
  { path: 'wonderland', component: WonderlandComponent },
  { path: '',   redirectTo: '/wonderland', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
