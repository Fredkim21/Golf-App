/// <reference types="react" />
import { CurveFactory } from 'd3-shape';
import { ScaleLinear } from 'd3-scale';
import { RadarCommonProps } from './types';
interface RadarLayerProps<D extends Record<string, unknown>> {
    data: D[];
    item: string;
    colorByKey: Record<string | number, string>;
    fillByKey: Record<string, string | null>;
    radiusScale: ScaleLinear<number, number>;
    rotation: number;
    angleStep: number;
    curveFactory: CurveFactory;
    borderWidth: RadarCommonProps<D>['borderWidth'];
    borderColor: RadarCommonProps<D>['borderColor'];
    fillOpacity: RadarCommonProps<D>['fillOpacity'];
    blendMode: RadarCommonProps<D>['blendMode'];
}
export declare const RadarLayer: <D extends Record<string, unknown>>({ data, item: key, colorByKey, fillByKey, radiusScale, rotation, angleStep, curveFactory, borderWidth, borderColor, fillOpacity, blendMode, }: RadarLayerProps<D>) => JSX.Element;
export {};
//# sourceMappingURL=RadarLayer.d.ts.map