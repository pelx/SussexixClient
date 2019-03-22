import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// component
import { RecordsComponent } from './records/records.component';
import { AyLessonsComponent } from './ay-lessons/ay-lessons.component';
import { NewRecordComponent } from './new-record/new-record.component';

const routes: Routes = [
	{ path: '', component: RecordsComponent },
	{ path: 'records', component: RecordsComponent },
	{ path: 'new-record', component: NewRecordComponent },
	{ path: 'lessons', component: AyLessonsComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRouterModule {}

//export const appRouting = RouterModule.forRoot(routes);
