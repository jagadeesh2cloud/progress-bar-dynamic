import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table'; //ADDED
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //ADDED
import { HttpClientModule } from '@angular/common/http';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StickyheaderComponent } from './stickyheader/stickyheader.component';




@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
  StickyheaderComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
