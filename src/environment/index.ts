import {
  Rule,
  apply,
  url,
  template,
  mergeWith,
  move,
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

export interface EnvironmentOptions {
  path: string;
}

export function environment(options: EnvironmentOptions): Rule {
  return () => {
    const path = options.path;

    console.log('parsedPath', path);

    const templateSource = apply(url('./files'), [
      template({ ...strings, ...options }),
      move(path),
    ]);

    return mergeWith(templateSource);
  };
}
