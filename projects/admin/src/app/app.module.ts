import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationComponent } from './notification/notification.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TeachersInfoComponent } from './teachers-info/teachers-info.component';
import { AdmissionComponent } from './admission/admission.component';
import { VideoComponent } from './video/video.component';
import { TopperComponent } from './topper/topper.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AppComponent,
    NotificationComponent,
    PhotoGalleryComponent, 
    LoginComponent,
    HeaderComponent,
    AdmissionComponent,
    TeachersInfoComponent,
    VideoComponent,
    TopperComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
