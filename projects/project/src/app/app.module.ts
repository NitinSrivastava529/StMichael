import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FacultyComponent } from './faculty/faculty.component';
import { CourseFeeComponent } from './course-fee/course-fee.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { VisionMissionComponent } from './vision-mission/vision-mission.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdmissionComponent } from './admission/admission.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToppersComponent } from './toppers/toppers.component';
import { VideoComponent } from './video/video.component';
import { FacilityComponent } from './facility/facility.component';
import { HistoryComponent } from './history/history.component';
import { ManagementComponent } from './management/management.component';
import { ChairmanMessageComponent } from './chairman-message/chairman-message.component';
import { PrincipalDeskComponent } from './principal-desk/principal-desk.component';
import { OfflineAddmissionComponent } from './offline-addmission/offline-addmission.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FacultyComponent,
    CourseFeeComponent,
    PhotoGalleryComponent,
    VisionMissionComponent,
    ContactUsComponent,
    AdmissionComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    ToppersComponent,
    VideoComponent,
    FacilityComponent,
    HistoryComponent,
    ManagementComponent,
    ChairmanMessageComponent,
    PrincipalDeskComponent,
    OfflineAddmissionComponent
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
