#!/usr/bin/env ts-node

// const path = require('path');
// require('ts-node').register({
//     project: path.join(__dirname, 'tsconfig.json')
// });


import * as globby from 'globby';
import * as path from 'path';
import { copySync, writeFileSync, statSync, stat, mkdirpSync, pathExistsSync } from 'fs-extra';
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
    const bundles = []; // Promise.resolve();
    // let x = 0;
    paths.forEach(it => {
        const file = path.relative(projectSrcPath, it);
        // console.log(path.join(projectDistPath, file))
        // copySync(it, path.join(projectDistPath, file));
        bundles.push(new Bundler().Bundle(it, [
                // path.join(projectSrcPath, '_functions.scss'),
                // path.join(projectSrcPath, '_variables.scss'),
                // path.join(projectSrcPath, '_mixins.scss'),
                path.join(projectSrcPath, 'theming.scss'),
            ]).then(result => {
                const outputFile = path.join(projectDistPath, file);
                existsOrCreateDir(outputFile);
                writeFileSync(outputFile, result.bundledContent);
                // console.log("+++>>>", x++);
            })
        );
    });

    Promise.all(bundles).then(() =>　afterBundle(paths));
});

function afterBundle(paths: string[]) {
    const imports = paths.map(it => {
        const file = path.relative(projectSrcPath, it);
        return `@import './style/${file}';`;
    });

    const importsFileContent = imports.join('\n');
    // existsOrCreateDir(path.join(projectDistRootPath, '_common.scss'));
    writeFileSync(path.join(projectDistRootPath, '_common.scss'), importsFileContent);

    new Bundler().Bundle(path.join(projectDistRootPath, 'style/index.scss')).then(result => {
        // console.log(">>>", result)
        writeFileSync(path.join(projectDistRootPath, 'common.scss'), result.bundledContent);

        // compileSass();

        return 0;
    }).catch(error => {
        console.error('Sass bundling failed');
        console.dir(error);
        return 1;
    });
}

const NodeModulesImporter: SyncImporter = (url: string, prev: string): ImporterReturnType => {
    // console.log("importer:", url, prev);
    if (url.startsWith('~')) {
        const targetUrl = path.relative(path.dirname(prev), path.join(workspaceRoot, 'node_modules', url.slice(1)));

        // console.log(targetUrl)

        return {
            file: targetUrl
        }
    }

    return { file: url };
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

function existsOrCreateDir(filePath: string) {
    const dirname = path.dirname(filePath);
    // console.log(path.dirname(outputFile))
    if (!pathExistsSync(dirname)) {
        try {
            mkdirpSync(dirname);
        } catch (e) {
            // 创建目录失败
        }
    }
}