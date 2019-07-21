import * as path from 'path';
import { pathExistsSync, mkdirpSync } from 'fs-extra';

export function existsOrCreateDir(filePath: string) {
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