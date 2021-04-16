import * as fs from "fs";
import * as path from "path";
import { JSONData } from "../types/interfaces";

function c(contents: any) {
  let res = fs.readFileSync(contents, "utf8");
  let processed: JSONData = JSON.parse(res);
  return processed;
}

const contentDir: string = path.join(process.cwd(), "contents");

let oa: any = {};

const fsr = fs.readdirSync(contentDir);
for (let category of fsr) {
  const readDir = fs.readdirSync(path.resolve(contentDir, category));
  oa[category] = {};

  for (let file of readDir) {
    let parse: JSONData = c(contentDir + "/" + category + "/" + file);
    oa[category][parse.name] = {
      description: parse.description,
      platforms: parse.platforms,
      url: parse.url,
      id: file.split(".")[0],
    };
  }
}

export default oa;
