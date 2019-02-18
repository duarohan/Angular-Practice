import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardSpaceComponent} from './card-space/card-space.component';
import {DataBindingComponent} from './data-binding/data-binding.component';
import {DirectivesComponent} from './directives/directives.component';
import {InputButtonComponent} from './input-button/input-button.component';
import {GameControllerComponent} from './game-controller/game-controller.component'
import { UserModuleComponent } from './user-module/user-module.component';
import {UserComponent} from './user-module/user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {path : 'cards', component: CardSpaceComponent },
  {path : 'directive', component: DirectivesComponent },
  {path : 'dataBind', component: DataBindingComponent },
  {path : 'ipBtn', component: InputButtonComponent},
  //{path : '' , component: MainPageComponent },
  {path : '' , redirectTo:'/dataBind', pathMatch:'full'},
  {path : 'theGame', component : GameControllerComponent},
  {path : 'users', component : UserModuleComponent, children : [
    {path : ':id/:name', component : UserComponent}]},
  {path : 'forms', component: FormsComponent },  
  {path : '**',component : PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [CardSpaceComponent,DataBindingComponent,DirectivesComponent,InputButtonComponent,GameControllerComponent,UserModuleComponent,UserComponent,PageNotFoundComponent,FormsComponent]

