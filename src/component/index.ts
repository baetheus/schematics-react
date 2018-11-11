import {
  Rule,
  apply,
  url,
  template,
  mergeWith,
  move
} from "@angular-devkit/schematics";
import { strings } from "@angular-devkit/core";

export interface ComponentOptions {
  path: string;
  name: string;
}

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function component(options: ComponentOptions): Rule {
  return () => {
    const path = `${options.path}/${strings.classify(options.name)}`;

    const templateSource = apply(url("./files"), [
      template({ ...strings, ...options }),
      move(path)
    ]);

    return mergeWith(templateSource);
  };
}
