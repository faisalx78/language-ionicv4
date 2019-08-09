import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsPageModule' },
  { path: 'my-order', loadChildren: './my-order/my-order.module#MyOrderPageModule' },
  { path: 'order-info', loadChildren: './order-info/order-info.module#OrderInfoPageModule' },
  { path: 'new-order', loadChildren: './new-order/new-order.module#NewOrderPageModule' },
  { path: 'data-edit', loadChildren: './data-edit/data-edit.module#DataEditPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'language-popover', loadChildren: './pages/language-popover/language-popover.module#LanguagePopoverPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
