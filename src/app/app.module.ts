import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  DevTools,
  NgxTolgeeModule,
  Tolgee,
  TOLGEE_INSTANCE,
  FormatSimple,
} from '@tolgee/ngx';
import { environment } from 'src/environments/environment.local';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';

@NgModule({
  declarations: [AppComponent, LanguageSelectorComponent],
  imports: [BrowserModule, AppRoutingModule, NgxTolgeeModule],
  providers: [
    {
      provide: TOLGEE_INSTANCE,
      useFactory: () => {
        return Tolgee().use(DevTools()).use(FormatSimple()).init({
          language: 'en',
          apiUrl: environment.tolgeeApiUrl,
          apiKey: environment.tolgeeApiKey,
        });
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
