import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DevgadComponent } from './product/page/devgad/devgad.component';
import { AboutComponent } from './about/about.component';
import { GoaMankuradComponent } from './product/page/goa-mankurad/goa-mankurad.component';
import { KesarMangoComponent } from './product/page/kesar-mango/kesar-mango.component';
import { LangraMangoComponent } from './product/page/langra-mango/langra-mango.component';
import { RatnaAlphonsoComponent } from './product/page/ratna-alphonso/ratna-alphonso.component';
import { PayariMangoesComponent } from './product/page/payari-mangoes/payari-mangoes.component';
import { BlogComponent } from './blog/blog.component';
import { PageComponent } from './blog/page/page.component';
import { RatnagiriAlphonsoComponent } from './product/page/ratnagiri-alphonso/ratnagiri-alphonso.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [{ path: "", component: HomeComponent },
{ path: "home", component: HomeComponent },
{ path: "products", component: ProductComponent },
{ path: "contact", component: ContactUsComponent },
{ path: "cart", component: CartComponent },
{ path: "login", component: LoginComponent },
{ path: "signup", component: SignupComponent },
{ path: "about", component: AboutComponent },
{ path: "blog", component: BlogComponent },

// product details page
{ path: "devgad", component: DevgadComponent },
{ path: "goa", component: GoaMankuradComponent },
{ path: "kesar", component: KesarMangoComponent },
{ path: "langra", component: LangraMangoComponent },
{ path: "ratnagiri", component: RatnagiriAlphonsoComponent },
{ path: "payari", component: PayariMangoesComponent },
{ path: "ratna", component: RatnaAlphonsoComponent },

// blog page
{ path: "blog/:id", component: PageComponent }
];