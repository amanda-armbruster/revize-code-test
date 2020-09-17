import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogFormComponent } from './dog-form/dog-form.component';
import { FreedomFormComponent } from './freedom-form/freedom-form.component';

@NgModule({
  declarations: [AppComponent, DogFormComponent, FreedomFormComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
