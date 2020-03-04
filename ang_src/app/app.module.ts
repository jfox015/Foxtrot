import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientXsrfModule } from '@angular/common/http';
//import { HttpModule, JsonpModule }  from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent, ModalComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { TransactionTypePipe, TransactionStatusPipe } from './_pipes/index';
import { AlertService, AuthenticationService, UserService, WalletService, ModalService, ExchangeService,LocStorage,WindowRef } from './_services/index';

// used to create fake backend
//import { JwtInterceptor } from './_helpers/index';
//import { fakeBackendProvider } from './_helpers/index';

import { AboutComponent } from './about/index';
import { HomeComponent } from './home/index';
import { NavbarComponent } from './navbar/index';
import { LoginComponent, RegisterComponent, LogoutComponent, ProfileComponent } from './auth/index';
import { WalletComponent } from './wallet/index';
import { ExchangeComponent } from './exchange/index';
import { PortfolioComponent } from './portfolio/index';;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        //HttpModule, 
        //JsonpModule,
        NgxChartsModule,
        BrowserAnimationsModule,
        routing, 
        NgbModule,
        HttpClientXsrfModule.withOptions({
            cookieName: 'XSRF-TOKEN',
            headerName: 'X-XSRF-TOKEN',
        }),
    ],
    declarations: [
        AboutComponent,
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        ModalComponent,
        NavbarComponent,
        WalletComponent,
        ExchangeComponent,
        PortfolioComponent,
        ProfileComponent,
        TransactionTypePipe,
        TransactionStatusPipe,
        LogoutComponent  
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        ModalService,
        UserService,
        WalletService,
        ExchangeService,
        WindowRef,
        LocStorage
        /*{
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },*/

        // provider used to create fake backend
        //fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }