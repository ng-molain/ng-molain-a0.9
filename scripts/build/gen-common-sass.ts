#!/usr/bin/env ts-node

// const path = require('path');
// require('ts-node').register({
//     project: path.join(__dirname, 'tsconfig.json')
// });


import * as globby from 'globby';
import * as path from 'path';
import { copySync, writeFileSync } from 'fs-extra';
import { Bundler } from 'scss-bundle';
import { render, SyncContext, ImporterReturnType, SyncImporter, } from 'node-sass';
import { log } from '../utils';

const workspaceRoot = path.resolve(__dirname, '../../');
console.log("Working sass bundle in workspace: ", workspaceRoot)

const projectSrcPath = `${workspaceRoot}/libs/common/src/style`;
const projectDistPath = `${workspaceRoot}/dist/libs/common/style`;

const projectDistRootPath = `${workspaceRoot}/dist/libs/common`;


globby([`${projectSrcPath}/*.scss`]).then(paths => {
    // console.log(paths);
    paths.forEach(it => {
        const file = path.relative(projectSrcPath, it);
        // console.log(path.join(projectDistPath, file))
        // copySync(it, path.join(projectDistPath, file));
        new Bundler().Bundle(it, [
            path.join(projectSrcPath, '_functions.scss'),
            path.join(projectSrcPath, '_variables.scss'),
            path.join(projectSrcPath, '_mixins.scss'),
        ]).then(result => {
            writeFileSync(path.join(projectDistPath, file), result.bundledContent);
        })
    });

    const imports = paths.map(it => {
        const file = path.relative(projectSrcPath, it);
        return `@import './style/${file}';`;
    });

    const importsFileContent = imports.join('\n');
    writeFileSync(path.join(projectDistRootPath, '_common.scss'), importsFileContent);

    new Bundler().Bundle(path.join(projectDistRootPath, 'style/index.scss')).then(result => {
        // console.log(result.imports)
        writeFileSync(path.join(projectDistRootPath, 'common.scss'), result.bundledContent);

        compileSass();

        return 0;
    }).catch(error => {
        console.error('Sass bundling failed');
        console.dir(error);
        return 1;
    });


});

const NodeModulesImporter: SyncImporter = (url: string, prev: string): ImporterReturnType => {
    // console.log("importer:", url, prev);
    if (url.startsWith('~')) {
        const targetUrl = path.relative(path.dirname(prev), path.join(workspaceRoot, 'node_modules', url.slice(1)));
        
        // console.log(targetUrl)

        return {
            file: targetUrl
        }
    }

    return {file: url};
}

function compileSass() {
    // compile sass file
    render({
        file: path.join(projectDistRootPath, 'common.scss'),
        outFile: path.join(projectDistRootPath, 'style'),
        importer: NodeModulesImporter,
        outputStyle: 'expanded',
        sourceMap: false,
        sourceMapContents: true,
        precision: 6,
    }, (error, result) => {
        if (error) {
            log.error(error)
            return;
        }

        writeFileSync(path.join(projectDistRootPath, 'common.css'), result.css)
        log.success(`Compiled saas file ${result.stats.entry} in ${result.stats.duration / 1000}s.`)
    });
}