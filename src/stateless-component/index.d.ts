import { Rule } from "@angular-devkit/schematics";
export interface StatelessComponentOptions {
    path: string;
    name: string;
}
export declare function statelessComponent(options: StatelessComponentOptions): Rule;
