import { TranslateLoader } from '../translate.loader';
import { Observable } from 'rxjs';

import * as fs from 'fs';

/**
 * Cannot use in web apps.
 */
export class TRanslateUniversallLoader implements TranslateLoader {
    constructor(private prefix: string = 'i18n', private suffix: string = '.json') {}

    /**
     * Gets the translations from the server
     * @param lang
     * @returns {any}
     */
    public getTranslation(lang: string): Observable<any> {
        return Observable.create(observer => {
            observer.next(JSON.parse(fs.readFileSync(`${this.prefix}/${lang}${this.suffix}`, 'utf8')));
            observer.complete();
        });
    }
}