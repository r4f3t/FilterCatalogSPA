import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [ 
{
  path: '', component: MainLayoutComponent,children:[{path:'search',component:SearchComponent}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
