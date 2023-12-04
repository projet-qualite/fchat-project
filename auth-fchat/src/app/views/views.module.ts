import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ViewsComponent } from "./views.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from "@library_v2/ui-module";
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";

const routes: Routes = [
    {
        path: '',
        canActivate: [
            //AuthGuard
        ],
        component: ViewsComponent,
        children: [
            {
                path: '',
                redirectTo: '/welcome-page',
                pathMatch: 'full'
            },
            {
                path: 'welcome-page',
                component: WelcomePageComponent
            },
        ],
    }
]

@NgModule({
    declarations: [
        ViewsComponent,
        WelcomePageComponent
    ],
    imports: [
        UiModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        RouterModule.forChild(routes),
    ],
    providers: [
    ]
})
export class ViewsModule { }