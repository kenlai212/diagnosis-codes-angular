import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagnosisCodeDetailsPageComponent } from './diagnosis-code-details-page/diagnosis-code-details-page.component';
import { SearchDiagnosisCodesPageComponent } from './search-diagnosis-codes-page/search-diagnosis-codes-page.component';

const routes: Routes = [
  { path: '', redirectTo: "/search-diagnosis-codes", pathMatch: 'full' },
  { path: 'search-diagnosis-codes', component: SearchDiagnosisCodesPageComponent },
  { path: 'diagnosis-code-details/:id', component: DiagnosisCodeDetailsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
