"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateStyleModules = generateStyleModules;
const codeFeatures_1 = require("../codeFeatures");
const names = require("../names");
const utils_1 = require("../utils");
const common_1 = require("./common");
function* generateStyleModules({ styles, vueCompilerOptions }, ctx) {
    const styleModules = styles.filter(style => style.module);
    if (!styleModules.length) {
        return;
    }
    ctx.generatedTypes.add(names.StyleModules);
    yield `type ${names.StyleModules} = {${utils_1.newLine}`;
    for (const style of styleModules) {
        if (style.module === true) {
            yield `$style`;
        }
        else {
            const { text, offset } = style.module;
            yield [
                text,
                'main',
                offset,
                codeFeatures_1.codeFeatures.navigation,
            ];
        }
        yield `: `;
        if (!vueCompilerOptions.strictCssModules) {
            yield `Record<string, string> & `;
        }
        yield `__VLS_PrettifyGlobal<{}`;
        if (vueCompilerOptions.resolveStyleImports) {
            yield* (0, common_1.generateStyleImports)(style);
        }
        for (const className of style.classNames) {
            yield* (0, common_1.generateClassProperty)(style.name, className.text, className.offset, 'string');
        }
        yield `>${utils_1.endOfLine}`;
    }
    yield `}${utils_1.endOfLine}`;
}
//# sourceMappingURL=modules.js.map