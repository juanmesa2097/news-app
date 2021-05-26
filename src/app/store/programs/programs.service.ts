import { Injectable } from '@angular/core';
import { NgxGenericRestService } from 'ngx-grs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProgramsService extends NgxGenericRestService {
  constructor() {
    super({
      baseUrl: environment.apiUrl,
      resourceName: 'programas',
    });
  }
}
