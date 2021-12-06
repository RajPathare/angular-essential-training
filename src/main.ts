
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// required for bootstrapping the application for browsers
platformBrowserDynamic().bootstrapModule(AppModule);