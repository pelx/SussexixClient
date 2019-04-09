// modules
import { AppRouterModule } from './app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// material design
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
	MatNativeDateModule,
	MatSortModule,
	MatPaginatorModule,
	MatIconModule,
	MatToolbarModule,
	MatDialogModule,
	MatListModule
} from '@angular/material';

// components
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RecordsComponent } from './records/records.component';
import { NewRecordComponent } from './new-record/new-record.component';
import { AyLessonsComponent } from './ay-lessons/ay-lessons.component';
import { RegisterComponent } from './register/register.component';
import { RecordComponent } from './record/record.component';
import { UpdateRecordComponent } from './update-record/update-record.component';
import { DeleteRecordComponent } from './delete-record/delete-record.component';
import { LoginComponent } from './login/login.component';

// services
import { RecordService } from './record.service';
import { Mp3recordService } from './mp3record.service';
import { AyLessonsService } from './ay-lessons.service';
import { AuthService } from './auth.service';

// forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { Mp3recordsComponent } from './mp3records/mp3records.component';

@NgModule({
	declarations:
		[
			AppComponent,
			FooterComponent,
			HeaderComponent,
			RecordsComponent,
			NewRecordComponent,
			AyLessonsComponent,
			RecordComponent,
			UpdateRecordComponent,
			DeleteRecordComponent,
			RegisterComponent,
			LoginComponent,
			HomeComponent,
			Mp3recordsComponent
		],
	imports:
		[
			BrowserModule,
			AppRouterModule,
			HttpClientModule,
			ReactiveFormsModule,
			FormsModule,
			// material design
			BrowserAnimationsModule,
			MatButtonModule,
			MatTableModule,
			MatInputModule,
			MatCardModule,
			MatSelectModule,
			MatSortModule,
			MatDatepickerModule,
			MatNativeDateModule,
			MatPaginatorModule,
			MatIconModule,
			MatToolbarModule,
			MatDialogModule,
			MatListModule,
			MatSortModule,
			MatPaginatorModule,
			MatIconModule
		],
	entryComponents: [ UpdateRecordComponent ],
	providers: [ RecordService, AyLessonsService, AuthService, Mp3recordService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
