import { extraDocsOfLibs } from './site/gen-docs';
import { genGuides } from './site/gen-guides';

export function build() {
    genGuides();
    
    extraDocsOfLibs();
}

build();