"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CompilerDOM = require("@vue/compiler-dom");
const forEachTemplateNode_1 = require("../utils/forEachTemplateNode");
const shared_1 = require("../utils/shared");
const shared_2 = require("./shared");
const codeFeatures = {
    ...shared_2.allCodeFeatures,
    format: false,
    structure: false,
};
const plugin = () => {
    return {
        version: 2.2,
        getEmbeddedCodes(_fileName, sfc) {
            if (!sfc.template?.ast) {
                return [];
            }
            return [{ id: 'template_inline_css', lang: 'css' }];
        },
        resolveEmbeddedCode(_fileName, sfc, embeddedFile) {
            if (embeddedFile.id !== 'template_inline_css' || !sfc.template?.ast) {
                return;
            }
            embeddedFile.parentCodeId = sfc.template.lang === 'md' ? 'root_tags' : 'template';
            embeddedFile.content.push(...generate(sfc.template.ast));
        },
    };
};
exports.default = plugin;
function* generate(templateAst) {
    for (const node of (0, forEachTemplateNode_1.forEachElementNode)(templateAst)) {
        for (const prop of node.props) {
            if (prop.type === CompilerDOM.NodeTypes.ATTRIBUTE
                && prop.name === 'style'
                && prop.value) {
                yield `x { `;
                const [content, offset] = (0, shared_1.normalizeAttributeValue)(prop.value);
                yield [content, 'template', offset, codeFeatures];
                yield ` }\n`;
            }
        }
    }
}
//# sourceMappingURL=vue-template-inline-css.js.map