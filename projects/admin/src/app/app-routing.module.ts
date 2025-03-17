import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './admission/admission.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NotificationComponent } from './notification/notification.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { AuthGuard } from './service/auth.guard';
import { TeachersInfoComponent } from './teachers-info/teachers-info.component';
import { VideoComponent } from './video/video.component';
import { TopperComponent } from './topper/topper.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path: '',redirectTo:'login',pathMatch:"full" },
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard] },
  { path: 'photo', component: PhotoGalleryComponent ,canActivate:[AuthGuard]},
  { path: 'video', component: VideoComponent ,canActivate:[AuthGuard]},
  { path: 'admission', component: AdmissionComponent,canActivate:[AuthGuard] },
  { path: 'notification', component: NotificationComponent,canActivate:[AuthGuard] },
  { path: 'teachers-info', component: TeachersInfoComponent,canActivate:[AuthGuard] },
  { path: 'topper', component: TopperComponent,canActivate:[AuthGuard] },
  { path: 'news', component: NewsComponent,canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
