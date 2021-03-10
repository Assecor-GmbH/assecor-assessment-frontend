import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {HeaderComponent} from './main/layout/header/header.component';
import {MenuComponent} from './main/layout/header/menu/menu.component';
import {FooterComponent} from './main/layout/footer/footer.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpInterceptorService} from './shared/services/http-interceptor.service';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
  ],
  exports: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
