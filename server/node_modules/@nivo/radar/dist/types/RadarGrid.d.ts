/// <reference types="react" />
import { GridLabelComponent, RadarCommonProps } from './types';
interface RadarGridProps<D extends Record<string, unknown>> {
    indices: string[];
    shape: RadarCommonProps<D>['gridShape'];
    radius: number;
    levels: number;
    rotation: number;
    angleStep: number;
    label: GridLabelComponent;
    labelOffset: number;
}
export declare const RadarGrid: <D extends Record<string, unknown>>({ indices, levels, shape, radius, rotation, angleStep, label, labelOffset, }: RadarGridProps<D>) => JSX.Element;
export {};
//# sourceMappingURL=RadarGrid.d.ts.map