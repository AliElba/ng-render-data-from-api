import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemeListItemComponent } from './meme-list-item/meme-list-item.component';
import { memeListComponent } from './meme-list/meme-list.component';
import { MemeService } from './services/meme.service';


@NgModule({
  declarations: [
    AppComponent,
    memeListComponent,
    MemeListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
