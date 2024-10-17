import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { PdfJsViewerComponent } from './ngx-pdfjs.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PdfJsViewerComponent],
  exports: [PdfJsViewerComponent],
})
export class PdfJsViewerModule {
  static forRoot(): ModuleWithProviders<PdfJsViewerModule> {
    return {
      ngModule: PdfJsViewerModule,
    };
  }
}
