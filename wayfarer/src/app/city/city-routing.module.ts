import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PostDetailsComponent } from '../post-details/post-details.component';
import { PostComponent } from '../post/post.component';
import { CityComponent } from './city.component';

const aboutRoutes: Routes = [
  {
    
        path:'cities/:id',
        component: CityComponent,
        children: [
          {
          path:"posts/",
          component:PostComponent
        },
        {
          path:"posts/id",
          component:PostDetailsComponent 
        }
          
        ]
      
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(aboutRoutes)
  ],
  exports: [RouterModule]
})
export class CityRoutingModule {}