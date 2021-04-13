import * as fs from "fs";
import * as path from "path";
import JSONData from "../types/json";

const contentDir: string = path.join(process.cwd(), "contents");

export default function sortedData() {
  let fl: any = [];

  const fsr = fs.readdirSync(contentDir);

  fsr.forEach((category) => {
    let unsterilized = fs.readdirSync(path.resolve(contentDir, category));

    unsterilized.forEach(async (file) => {
      let contents = await fs.readFileSync(
        contentDir + "/" + category + "/" + file,
        "utf8"
      );
      let parse: JSONData = JSON.parse(contents);
      console.log(parse.name);
    });

    let resolved = [];

    let element;

    for (element of unsterilized) resolved.push(element.split(".")[0]);

    fl.push({
      [category]: resolved,
    });
  });
}

sortedData();
