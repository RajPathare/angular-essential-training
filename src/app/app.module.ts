
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// letting angular know that this is a angular module (component)
@NgModule({

    imports: [
        BrowserModule
    ], // for importing other angular components
    declarations: [
        AppComponent
    ], // used to make components, dir, pipes available to your module that don't come from another module
    bootstrap: [
        AppComponent
    ] // starting point of your bootstrap process (entrypoint for your app)

})

export class AppModule {}