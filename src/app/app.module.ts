import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LogService } from './log.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtvAula2Component } from './atv-aula2/atv-aula2.component';
import { AtvAula3Component } from './atv-aula3/atv-aula3.component';
import { MyCollectionComponent } from './my-collection/my-collection.component';
import { CollectionItenComponent } from './collection-iten/collection-iten.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { PaginaComponent } from './pagina/pagina.component';
import { AtvAula4Component } from './atv-aula4/atv-aula4.component';


@NgModule({
  declarations: [
    AppComponent,
    AtvAula2Component,
    AtvAula3Component,
    MyCollectionComponent,
    CollectionItenComponent,
    CabecalhoComponent,
    RodapeComponent,
    PaginaComponent,
    AtvAula4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
