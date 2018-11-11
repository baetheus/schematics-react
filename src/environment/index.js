"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
function environment(options) {
    return () => {
        const path = options.path;
        console.log('parsedPath', path);
        const templateSource = schematics_1.apply(schematics_1.url('./files'), [
            schematics_1.template(Object.assign({}, core_1.strings, options)),
            schematics_1.move(path),
        ]);
        return schematics_1.mergeWith(templateSource);
    };
}
exports.environment = environment;
//# sourceMappingURL=index.js.map