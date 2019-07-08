#!/usr/bin/env ts-node

import * as globby from 'globby';
import * as path from 'path';
import { copySync } from 'fs-extra';

const workspaceRoot = path.resolve(__dirname, '../../');
console.log("Working sass bundle in workspace: ", workspaceRoot)

const projectSrcPath = `${workspaceRoot}/libs/components/src/lib`;
const projectDistPath = `${workspaceRoot}/dist/libs/components/lib`;


globby([`${projectSrcPath}/**/*.scss`, '!index.html', '!js/lib.js']).then(paths => {
    // console.log(paths);
    paths.forEach(it => {
        const file = path.relative(projectSrcPath, it);
        console.log(path.join(projectDistPath, file))
        copySync(it, path.join(projectDistPath, file));
    })
});