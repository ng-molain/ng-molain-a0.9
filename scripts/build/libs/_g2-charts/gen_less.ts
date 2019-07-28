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

const projectSrcPath = `${workspaceRoot}/libs/g2-charts/src`;
const projectDistPath = `${workspaceRoot}/dist/libs/g2-charts`;

const projectDistRootPath = `${workspaceRoot}/dist/libs/g2-charts`;

export function genLess() {
  copyLess();
  compileLess();
}

function copyLess() {
  copySync(projectSrcPath, projectDistPath, {
    filter: (src: string, dest: string) => {
      return statSync(src).isDirectory() || path.extname(src) === '.less';
    }
  });
  copySync(
    path.join(projectSrcPath, 'index.less'),
    path.join(projectDistPath, 'g2-charts.less')
  );
}

function compileLess() {
  const rootDir = projectDistPath;
  const content = `
    @import "${path.join(rootDir, 'index.less')}";
  `;

  const options = { 
    plugins: [new NpmImportPlugin({prefix: '~'})],
    javascriptEnabled: true,
};

less.render.call(less, content, options).then(result => {
    // console.log("less compiled css result: ", result)
    const { css } = result;
    writeFileSync(path.join(rootDir, 'g2-charts.css'), css);
})
.catch(err => console.warn(err));
}
