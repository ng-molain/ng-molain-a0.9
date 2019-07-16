import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import { TranslateLoader } from '../translate.loader';

export class HttpTranslateLoader implements TranslateLoader {
  constructor(private http: HttpClient, public prefix: string = "/assets/i18n/", public suffix: string = ".json") {}

  /**
   * Gets the translations from the server
   */
  public getTranslation(lang: string): Observable<Object> {
    return this.http.get(`${this.prefix}${lang}${this.suffix}`);
  }
}