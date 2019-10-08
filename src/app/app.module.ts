import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DateCloserPipe } from "./pipes/date-closer-format.pipe";
import { AppComponent } from "./app.component";
import { BannerComponent } from "./banner/banner.component";
import { RowContainerComponent } from "./row-container/row-container.component";

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    RowContainerComponent,
    DateCloserPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
