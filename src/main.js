import {resolve} from "node:path";
import fs from "node:fs";

function rootPath() {
    const urls = new URL(import.meta.url)
    const __fileName = urls.pathname
    return resolve(__fileName, '../..', 'keys');
}

export const key = () => {
    const path = resolve(rootPath(), 'localhost+1-key.pem');
    return fs.readFileSync(path, 'utf8')
}

export const cert = () => {
    const path = resolve(rootPath(), 'localhost+1.pem');
    return fs.readFileSync(path, 'utf8')
}

