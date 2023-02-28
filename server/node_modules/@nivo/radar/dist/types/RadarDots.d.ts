/// <reference types="react" />
import { ScaleLinear } from 'd3-scale';
import { RadarCommonProps, RadarDataProps, RadarColorMapping } from './types';
interface RadarDotsProps<D extends Record<string, unknown>> {
    data: RadarDataProps<D>['data'];
    keys: RadarDataProps<D>['keys'];
    radiusScale: ScaleLinear<number, number>;
    getIndex: (d: D) => string;
    colorByKey: RadarColorMapping;
    rotation: number;
    angleStep: number;
    symbol?: RadarCommonProps<D>['dotSymbol'];
    size: number;
    color: RadarCommonProps<D>['dotColor'];
    borderWidth: number;
    borderColor: RadarCommonProps<D>['dotBorderColor'];
    enableLabel: boolean;
    label: RadarCommonProps<D>['dotLabel'];
    formatValue: (value: number, context: string) => string;
    labelYOffset: number;
}
export declare const RadarDots: <D extends Record<string, unknown>>({ data, keys, getIndex, colorByKey, radiusScale, rotation, angleStep, symbol, size, color, borderWidth, borderColor, enableLabel, label, formatValue, labelYOffset, }: RadarDotsProps<D>) => JSX.Element;
export {};
//# sourceMappingURL=RadarDots.d.ts.map