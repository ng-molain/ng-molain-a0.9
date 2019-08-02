#!/usr/bin/env ts-node

import * as globby from 'globby';
import * as path from 'path';
import { copySync, writeFileSync, statSync, stat, mkdirpSync, pathExistsSync } from 'fs-extra';
import { Bundler } from 'scss-bundle';
import { render, SyncContext, ImporterReturnType, SyncImporter, } from 'node-sass';
import { log } from '../../../utils';
import * as less from 'less';
import * as NpmImportPlugin from 'less-plugin-npm-import';
// import * as LessPluginCleanCSS from 'less-plugin-clean-css';

const workspaceRoot = path.resolve(__dirname, '../../../../');
console.log("Working less bundle in workspace: ", workspaceRoot)

const projectSrcPath = `${workspaceRoot}/libs/common/src/style`;
const projectDistPath = `${workspaceRoot}/dist/libs/common/style`;

const projectDistRootPath = `${workspaceRoot}/dist/libs/common`;

export function genLess() {
    copyLess();
    compileLess();
}

function copyLess() {
    const srcPath = path.join(projectSrcPath, 'ng-zorro-antd');
    const destPath = path.join(projectDistPath, 'ng-zorro-antd');
    
    copySync(srcPath, destPath);
}

function compileLess() {
    const rootDir = path.join(projectDistPath, 'ng-zorro-antd');
    const content = `
        @import "${path.join(rootDir, 'ng-zorro-antd.less')}";
    `;

    // console.log('less', typeof less)
    const options = { 
        plugins: [new NpmImportPlugin({prefix: '~'})],
        javascriptEnabled: true,
    };

    less.render.call(less, content, options).then(result => {
        // console.log("less compiled css result: ", result)
        const { css } = result;
        writeFileSync(path.join(rootDir, 'ng-zorro-antd.css'), css);
    })
    .catch(err => console.warn(err));
}