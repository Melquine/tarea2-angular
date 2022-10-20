import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {
    path:'home', component:HomeComponent
  },
  {
    path:'about', component:AboutComponent
  },
  {
    path:'informacion', component:InfoComponent
  },
  {
    path:'contact', component:ContactComponent
  },
  {
    path:'', component:HomeComponent
  },
  {
    path:'**', component:NotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
