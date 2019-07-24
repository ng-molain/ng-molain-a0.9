import * as path from 'path';
import * as globby from 'globby';
import { copySync, writeFileSync, statSync, writeJsonSync, writeJSONSync } from 'fs-extra';
import { log } from '../../utils/log';


// TODO: 将 docs 目录中的 Adoc 编译到 site assets 目录中

// TODO: 将 libs 中的 Adoc 按照一定的约定（规则）组织到 site assets 目录中，并生成索引

// TODO: 从代码库中提取 API 文档并编译

// 提取 components 库中的文档，并编译
export function extraDocsOfLibs() {
    const libs = ['components'];
    libs.forEach(it =>　extraDocs(it));
}

function extraDocs(libName) {
    const workspaceRoot = path.resolve(__dirname, "../../../");
    const projectRoot = path.join(workspaceRoot, `libs/${libName}`);
    const projectLibPath = path.join(projectRoot, 'src/lib');
    const destPath = path.join(workspaceRoot, `dist/apps/site/assets/docs/libs/${libName}`);

    globby([`${projectLibPath}/**/*.adoc`]).then(paths => {
        // paths.forEach(it => console.log(it));
        log.info(`
            Copying all resolved adoc to site assets.
            From: ${projectLibPath}
            To: ${destPath}
        `);
        
        paths.forEach(sourceFile => {
            const relativeTarget = path.relative(projectLibPath, sourceFile);
            const destFile = path.join(destPath, relativeTarget);
            try {
                copySync(sourceFile, destFile);
                log.success(`Copied '${sourceFile}'`);
            } catch (e) {
                log.error(`Copy Failed, '${sourceFile}'`);
            }
        });

        const outlines = paths.map(sourceFile => {
            const relativeTarget = path.relative(projectLibPath, sourceFile);
            // return `/assets/docs/libs/${relativeTarget}`;
            const name = path.parse(sourceFile).name;
            return {
                id: name,
                title: name,
                sourceUrl: path.normalize(`/assets/docs/libs/${relativeTarget}`)
            };
        });

        // writeFileSync(path.join(destPath, "outline.json"), JSON.stringify(outlines));
        writeJSONSync(path.join(destPath, "outline.json"), [{
            id: 'components',
            title: '组件',
            children: outlines
        }]);
    });
}

// function copyFileSync()
