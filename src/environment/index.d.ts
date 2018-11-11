import { Rule } from '@angular-devkit/schematics';
export interface EnvironmentOptions {
    path: string;
}
export declare function environment(options: EnvironmentOptions): Rule;
