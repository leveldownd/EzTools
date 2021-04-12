import * as fs from "fs";
import * as path from "path";

const contentDir: string = path.join(process.cwd(), "contents");

export default function sortedData() {
  let fl: any = [];

  const fsr = fs.readdirSync(contentDir);

  fsr.forEach((category) => {
    let unsterilized = fs.readdirSync(path.resolve(contentDir, category));

    let resolved = [];

    let element;

    for (element of unsterilized) resolved.push(element.split(".")[0]);

    fl.push({
      [category]: resolved,
    });
  });

  console.log(fl);
}

sortedData();
