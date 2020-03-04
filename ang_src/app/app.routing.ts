import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/index';
import { HomeComponent } from './home/index';
import { LoginComponent, LogoutComponent, RegisterComponent, ProfileComponent } from './auth/index';
import { WalletComponent } from './wallet/index';
import { ExchangeComponent } from './exchange/index';
import { PortfolioComponent } from './portfolio/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'wallet', component: WalletComponent, canActivate: [AuthGuard] },
    { path: 'exchange', component: ExchangeComponent, canActivate: [AuthGuard] },
    { path: 'portfolio', component: PortfolioComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);