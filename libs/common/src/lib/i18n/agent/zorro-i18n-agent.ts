import { I18nAgent } from './i18n-agent';

export class ZorroI18nAgent extends I18nAgent {
    
    registerLocaleData(localeId: string, localeData: any) {
        throw new Error("Method not implemented.");
    }
    
    setDefaultLocale(localeId: string) {
        throw new Error("Method not implemented.");
    }

    changeLocale(localeId: string) {
        throw new Error("Method not implemented.");
    }

    
}