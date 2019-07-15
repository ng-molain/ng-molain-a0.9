import { I18nAgent } from './i18n-agent';
import { NgI18nAgent } from './ng-i18n-agent';
import { ZorroI18nAgent } from './zorro-i18n-agent';

const I18N_AGENTS = [
    new NgI18nAgent(),
    new ZorroI18nAgent()
];

export class I18nAgentHandler implements NgI18nAgent {
    agents: I18nAgent[] = I18N_AGENTS;

    private get hasAgents(): boolean {
        return this.agents && Array.isArray(this.agents) && this.agents.length > 0;
    }

    registerLocaleData(localeId: string, localeData: any): void {
        if (!this.hasAgents) {
            return;
        }

        this.agents.forEach(it => it.registerLocaleData(localeId, localeData));
    }

    setDefaultLocale(localeId: string): void {
        if (!this.hasAgents) {
            return;
        }

        this.agents.forEach(it => it.setDefaultLocale(localeId));
    }

    changeLocale(localeId: string): void {
        if (!this.hasAgents) {
            return;
        }

        this.agents.forEach(it => it.changeLocale(localeId));
    }


}