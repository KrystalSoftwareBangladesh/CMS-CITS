"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forEachElementNode = forEachElementNode;
exports.forEachInterpolationNode = forEachInterpolationNode;
const CompilerDOM = require("@vue/compiler-dom");
function* forEachElementNode(node) {
    if (node.type === CompilerDOM.NodeTypes.ROOT) {
        for (const child of node.children) {
            yield* forEachElementNode(child);
        }
    }
    else if (node.type === CompilerDOM.NodeTypes.ELEMENT) {
        yield node;
        for (const child of node.children) {
            yield* forEachElementNode(child);
        }
    }
    else if (node.type === CompilerDOM.NodeTypes.IF) {
        for (const branch of node.branches) {
            for (const childNode of branch.children) {
                yield* forEachElementNode(childNode);
            }
        }
    }
    else if (node.type === CompilerDOM.NodeTypes.FOR) {
        for (const child of node.children) {
            yield* forEachElementNode(child);
        }
    }
}
function* forEachInterpolationNode(node) {
    if (node.type === CompilerDOM.NodeTypes.ROOT) {
        for (const child of node.children) {
            yield* forEachInterpolationNode(child);
        }
    }
    else if (node.type === CompilerDOM.NodeTypes.ELEMENT) {
        for (const child of node.children) {
            yield* forEachInterpolationNode(child);
        }
    }
    else if (node.type === CompilerDOM.NodeTypes.TEXT_CALL) {
        yield* forEachInterpolationNode(node.content);
    }
    else if (node.type === CompilerDOM.NodeTypes.COMPOUND_EXPRESSION) {
        for (const child of node.children) {
            if (typeof child === 'object') {
                yield* forEachInterpolationNode(child);
            }
        }
    }
    else if (node.type === CompilerDOM.NodeTypes.INTERPOLATION) {
        yield node;
    }
    else if (node.type === CompilerDOM.NodeTypes.IF) {
        for (const branch of node.branches) {
            for (const childNode of branch.children) {
                yield* forEachInterpolationNode(childNode);
            }
        }
    }
    else if (node.type === CompilerDOM.NodeTypes.FOR) {
        for (const child of node.children) {
            yield* forEachInterpolationNode(child);
        }
    }
}
//# sourceMappingURL=forEachTemplateNode.js.map