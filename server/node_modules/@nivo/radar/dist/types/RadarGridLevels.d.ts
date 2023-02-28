/// <reference types="react" />
import { RadarCommonProps } from './types';
interface RadarGridLevelsProps<D extends Record<string, unknown>> {
    shape: RadarCommonProps<D>['gridShape'];
    radius: number;
    rotation: number;
    angleStep: number;
    dataLength: number;
}
export declare const RadarGridLevels: <D extends Record<string, unknown>>({ shape, ...props }: RadarGridLevelsProps<D>) => JSX.Element;
export {};
//# sourceMappingURL=RadarGridLevels.d.ts.map