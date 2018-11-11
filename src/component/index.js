"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
function component(options) {
    return () => {
        const path = `${options.path}/${core_1.strings.classify(options.name)}`;
        const templateSource = schematics_1.apply(schematics_1.url("./files"), [
            schematics_1.template(Object.assign({}, core_1.strings, options)),
            schematics_1.move(path)
        ]);
        return schematics_1.mergeWith(templateSource);
    };
}
exports.component = component;
//# sourceMappingURL=index.js.map