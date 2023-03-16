import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InfoNewsComponent } from './pages/info-news/info-news.component';

const routes: Routes = [{ path: '', component: HomeComponent }, { path: ":id", component: InfoNewsComponent,  }, { path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
