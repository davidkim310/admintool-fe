import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
    declarations: [
        NavigationComponent
    ],
    imports: [
        CommonModule,
        NgZorroAntdModule
    ],
    exports: [
        NavigationComponent
    ]
})
export class NavigationModule {}