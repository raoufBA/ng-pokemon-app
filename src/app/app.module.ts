import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { ListPokementComponent } from './list-pokement/list-pokement.component';
import { DetailPokementComponent } from './detail-pokement/detail-pokement.component';

@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokementComponent,
    DetailPokementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
