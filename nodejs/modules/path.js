import path from "path";
import url from "url";

const filepath="folder1/folder2/folder3/file.jpg";
console.log(path.dirname(filepath));
console.log(path.basename(filepath));
console.log(path.extname(filepath));

const __filename= url.fileURLToPath(import.meta.url);
const __dirname= path.dirname(__filename);

console.log(__filename);
console.log(__dirname);
