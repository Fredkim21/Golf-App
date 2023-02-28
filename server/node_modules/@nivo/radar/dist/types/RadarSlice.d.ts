/// <reference types="react" />
import { Arc } from 'd3-shape';
import { RadarCommonProps, RadarDataProps } from './types';
interface RadarSliceProps<D extends Record<string, unknown>> {
    datum: D;
    keys: RadarDataProps<D>['keys'];
    index: string | number;
    formatValue: (value: number, context: string) => string;
    colorByKey: Record<string, string>;
    startAngle: number;
    endAngle: number;
    radius: number;
    arcGenerator: Arc<void, {
        startAngle: number;
        endAngle: number;
    }>;
    tooltip: RadarCommonProps<D>['sliceTooltip'];
}
export declare const RadarSlice: <D extends Record<string, unknown>>({ datum, keys, index, formatValue, colorByKey, radius, startAngle, endAngle, arcGenerator, tooltip, }: RadarSliceProps<D>) => JSX.Element;
export {};
//# sourceMappingURL=RadarSlice.d.ts.map