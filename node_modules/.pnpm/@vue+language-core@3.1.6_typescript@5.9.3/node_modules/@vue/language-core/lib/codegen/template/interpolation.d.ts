import type { Code, SfcBlock, VueCodeInformation } from '../../types';
import type { StyleCodegenOptions } from '../style';
import type { TemplateCodegenContext } from './context';
import type { TemplateCodegenOptions } from './index';
export declare function generateInterpolation(options: Pick<TemplateCodegenOptions | StyleCodegenOptions, 'ts' | 'setupRefs'>, ctx: TemplateCodegenContext, block: SfcBlock, data: VueCodeInformation, code: string, start: number, prefix?: string, suffix?: string): Generator<Code>;
