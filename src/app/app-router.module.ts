import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// component
import { RecordsComponent } from './records/records.component';
import { Mp3recordsComponent } from './mp3records/mp3records.component';
import { AyLessonsComponent } from './ay-lessons/ay-lessons.component';
import { NewRecordComponent } from './new-record/new-record.component';
import { DeleteRecordComponent } from './delete-record/delete-record.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'records', component: RecordsComponent },
	{ path: 'mp3records', component: Mp3recordsComponent },
	{ path: 'new-record', component: NewRecordComponent },
	{ path: 'lessons', component: AyLessonsComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'delete-record/:id', component: DeleteRecordComponent }
];

// RouterModule.forRoot(routes, { enableTracing: false, useHash: false });

@NgModule({
	imports: [ RouterModule.forRoot(routes, { enableTracing: false, useHash: false }) ],
	exports: [ RouterModule ]
})
export class AppRouterModule {}

//export const appRouting = RouterModule.forRoot(routes);
