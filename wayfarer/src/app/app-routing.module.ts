import { PostDetailsComponent } from './post-details/post-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {
    
    path: '',
    component: HomepageComponent,
    
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const ArrayOfComponents = [PostDetailsComponent, PostComponent];