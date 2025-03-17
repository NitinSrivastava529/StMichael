import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdmissionComponent } from './admission/admission.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CourseFeeComponent } from './course-fee/course-fee.component';
import { FacultyComponent } from './faculty/faculty.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { ToppersComponent } from './toppers/toppers.component';
import { VideoComponent } from './video/video.component';
import { VisionMissionComponent } from './vision-mission/vision-mission.component';
import { FacilityComponent } from './facility/facility.component';
import { OfflineAddmissionComponent } from './offline-addmission/offline-addmission.component';
import { PrincipalDeskComponent } from './principal-desk/principal-desk.component';
import { ChairmanMessageComponent } from './chairman-message/chairman-message.component';
import { ManagementComponent } from './management/management.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'history',component:HistoryComponent},
  {path:'faculty',component:FacultyComponent},
  {path:'management',component:ManagementComponent},
  {path:'chairman-message',component:ChairmanMessageComponent},
  {path:'principal-desk',component:PrincipalDeskComponent},
  {path:'offline-addmission',component:OfflineAddmissionComponent},
  {path:'facility',component:FacilityComponent},
  {path:'course-fee',component:CourseFeeComponent},
  {path:'admission',component:AdmissionComponent},
  {path:'photo-gallery',component:PhotoGalleryComponent},  
  {path:'video',component:VideoComponent},  
  {path:'toppers',component:ToppersComponent},  
  {path:'contact',component:ContactUsComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
