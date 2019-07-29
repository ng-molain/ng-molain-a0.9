import * as _ from 'lodash';
import * as globby from 'globby';
import { resolve, relative, join, parse } from 'path';
import * as Asciidoctor from 'asciidoctor';
import { writeJsonSync, readJsonSync, statSync, pathExistsSync } from 'fs-extra';
import * as path from 'path';


export interface DocOutline {
    id: string;
    title: string;
    children?: DocOutline[];
}

export const DOC_CATEGORIES = [];

export function genGuides() {
    const workspaceRoot = resolve(__dirname, "../../../");
    const guidesDir = join(workspaceRoot, 'docs/guides');

    // read categories of guide
    const categoryFile = path.join(guidesDir, 'categories.json');
    if (pathExistsSync(categoryFile) && statSync(categoryFile).isFile()) {
        try {
            const guideCategories = readJsonSync(categoryFile);
            DOC_CATEGORIES.push(guideCategories);
        } catch (e) {
            console.error('Failed to read category meta file of guides.');
        }
    }

    genOutline(guidesDir);
}

// 在传入的目录中根据（adoc）文档信息，生成目录和文档信息索引。
// 要求（slogan即id）必须唯一，否则基于警告提示
export function genOutline(sourceDir: string) {
    globby([`${sourceDir}/**/*.adoc`]).then(paths => {
        const items = paths.map(sourceFile => {
            const relativeTarget = relative(sourceDir, sourceFile);
            const fileName = parse(sourceFile).name;

            const asciidoctor = Asciidoctor();
            const doc = asciidoctor.loadFile(sourceFile);
            const attrs = {
                id: fileName,
                title: doc.getDocumentTitle(),
                category: doc.getAttribute('category'),
                orderNum: doc.getAttribute('ordernum'),
                tags: doc.getAttribute('tags'),
                icon: doc.getAttribute('icon'),
                link: doc.getAttribute('link'),
                sourceUrl: `/assets/docs/guides/${relativeTarget}`,
            };

            // console.log(attrs);
            return attrs;
        });
        
        return items;
    }).then((items) => {
        
        _.sortBy(items, ['orderNum']).forEach(item => {
            const cate = getCategory(item.category);
            if (cate) {
                if (!cate.children) {
                    cate.children = [];
                }
                cate.children.push(item);
            }
        });

        // console.log(DOC_CATEGORIES)
        writeJsonSync(path.join(sourceDir, 'outline.json'), DOC_CATEGORIES);
        writeJsonSync(path.join(sourceDir, 'items.json'), items);
    });
}

function getCategory(idPath: string | string[]) {
    if(_.isEmpty(idPath)) {
        return ;
    }

    if ("string" === typeof idPath) {
        const ids = idPath.split(/,\s*/g);
        return getCategory(ids);
    }

    if (_.isArray(idPath)) {
        let result = null;
        idPath.forEach(value => {
            if (!result) {
                result = DOC_CATEGORIES.find(it => it.id === value);
            } else if (!_.isEmpty(result.children)) {
                result = result.children.find(it => it.id === value);
            }
        });

        return result;
    }
}