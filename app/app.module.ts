import { NgModule }      from '@angular/core';

import { Test, Modules } from './app-imports';

@NgModule({
  imports: [
    Test.TestModule, // Error
	Modules.TestModule // Ok
  ],
  declarations: [
  ],
  providers: [ ],
  bootstrap: [ ]
})
export class AppModule { }