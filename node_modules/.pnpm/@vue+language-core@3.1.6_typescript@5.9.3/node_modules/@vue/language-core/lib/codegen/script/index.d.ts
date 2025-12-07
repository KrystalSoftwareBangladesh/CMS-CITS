import type * as ts from 'typescript';
import type { ScriptRanges } from '../../parsers/scriptRanges';
import type { ScriptSetupRanges } from '../../parsers/scriptSetupRanges';
import type { Code, Sfc, VueCompilerOptions } from '../../types';
import type { TemplateCodegenContext } from '../template/context';
export interface ScriptCodegenOptions {
    ts: typeof ts;
    vueCompilerOptions: VueCompilerOptions;
    script: Sfc['script'];
    scriptSetup: Sfc['scriptSetup'];
    fileName: string;
    scriptRanges: ScriptRanges | undefined;
    scriptSetupRanges: ScriptSetupRanges | undefined;
    templateStartTagOffset: number | undefined;
    templateCodegen: TemplateCodegenContext & {
        codes: Code[];
    } | undefined;
    styleCodegen: TemplateCodegenContext & {
        codes: Code[];
    } | undefined;
    setupExposed: Set<string>;
}
export { generate as generateScript };
declare function generate(options: ScriptCodegenOptions): {
    codes: Code[];
    generatedTypes: Set<string>;
    localTypes: {
        generate: () => Generator<string, void, unknown>;
        readonly PrettifyLocal: string;
        readonly WithDefaults: string;
        readonly WithSlots: string;
        readonly PropsChildren: string;
        readonly TypePropsToOption: string;
        readonly OmitIndexSignature: string;
    };
    inlayHints: import("../inlayHints").InlayHintInfo[];
};
