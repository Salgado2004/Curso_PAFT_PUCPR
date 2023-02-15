import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LogService } from './log.service';
import { MatChipsModule } from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtvAula2Component } from './atv-aula2/atv-aula2.component';
import { AtvAula3Component } from './atv-aula3/atv-aula3.component';
import { MyCollectionComponent } from './atv-aula3/my-collection/my-collection.component';
import { CollectionItenComponent } from './atv-aula3/collection-iten/collection-iten.component';
import { CabecalhoComponent } from './atv-aula2/cabecalho/cabecalho.component';
import { RodapeComponent } from './atv-aula2/rodape/rodape.component';
import { PaginaComponent } from './atv-aula2/pagina/pagina.component';
import { AtvAula4Component } from './atv-aula4/atv-aula4.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarrinhoComponent } from './atv-aula4/carrinho/carrinho.component';
import { ItensComponent } from './atv-aula4/itens/itens.component';
import { AtvAula5Component } from './atv-aula5/atv-aula5.component';
import { SiteComponent } from './atv-aula5/site/site.component';
import { CategoriesComponent } from './atv-aula5/site/categories/categories.component';
import { MovieInfoComponent } from './atv-aula5/site/movie-info/movie-info.component';


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
    AtvAula4Component,
    CarrinhoComponent,
    ItensComponent,
    AtvAula5Component,
    SiteComponent,
    CategoriesComponent,
    MovieInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
