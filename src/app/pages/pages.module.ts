import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from './@shared/header/header.component';
import { FooterComponent } from './@shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ],
  declarations: [PagesComponent, HeaderComponent, FooterComponent, HomeComponent, AboutComponent, StudentComponent]
})
export class PagesModule { }
