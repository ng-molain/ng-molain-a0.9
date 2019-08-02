
export abstract class I18nAgent {
    abstract registerLocaleData(localeId: string, localeData: any);
    
    abstract setDefaultLocale(localeId: string);

    abstract changeLocale(localeId: string);
}
