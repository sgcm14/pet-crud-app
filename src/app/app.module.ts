import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

//----------------------------Modulos----------------------------
import { AppRoutingModule } from 'src/app/app-routing.module';

import { environment } from 'src/environments/environment';

//----------------------------Componentes----------------------------
import { AppComponent } from 'src/app/app.component';
import { ReportComponent } from 'src/app/components/report/report.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { BarComponent } from './shared/bar/bar.component';


@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    HomeComponent,
    RegisterComponent,
    BarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
