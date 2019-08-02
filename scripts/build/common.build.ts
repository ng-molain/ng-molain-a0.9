#!/usr/bin/env ts-node

import { genScss } from './libs/_common/gen-sass';
import { genLess } from './libs/_common/gen-less';

export function build() {
    genScss();

    genLess();
}

build();