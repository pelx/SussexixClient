// modules
import { AppRouterModule } from './app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material design
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatSortModule, MatPaginatorModule, MatIconModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RecordsComponent } from './records/records.component';
import { NewRecordComponent } from './new-record/new-record.component';
import { AyLessonsComponent } from './ay-lessons/ay-lessons.component';

// services
import { RecordService } from './record.service';
import { AyLessonsService } from './ay-lessons.service';

// forms
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations:
		[ AppComponent, FooterComponent, HeaderComponent, RecordsComponent, NewRecordComponent, AyLessonsComponent ],
	imports:
		[
			BrowserModule,
			AppRouterModule,
			HttpClientModule,
			ReactiveFormsModule,
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
			MatIconModule
		],
	providers: [ RecordService, AyLessonsService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
