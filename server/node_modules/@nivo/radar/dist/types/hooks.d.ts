import { RadarColorMapping, RadarCommonProps, RadarDataProps, RadarCustomLayerProps, RadarSvgProps, BoundLegendProps } from './types';
export declare const useRadar: <D extends Record<string, unknown>>({ data, keys, indexBy, rotationDegrees, maxValue, valueFormat, curve, width, height, colors, legends, defs, fill, }: {
    data: D[];
    keys: string[];
    indexBy: import("@nivo/core").PropertyAccessor<D, string>;
    rotationDegrees: number;
    maxValue: number | "auto";
    valueFormat?: import("@nivo/core").ValueFormat<number, string> | undefined;
    curve: import("@nivo/core").ClosedCurveFactoryId;
    width: number;
    height: number;
    colors: import("@nivo/colors").OrdinalColorScaleConfig<{
        key: string;
        index: number;
    }>;
    legends: import("@nivo/legends").LegendProps[];
    defs: {
        [key: string]: any;
        id: string;
    }[] | undefined;
    fill: {
        id: string;
        match: Record<string, unknown> | "*" | import("@nivo/core").SvgFillMatcher<import("./types").RadarSvgFillMatcherDatum<D>>;
    }[] | undefined;
}) => {
    getIndex: (datum: D) => string;
    indices: string[];
    formatValue: (value: number, context: string) => string;
    colorByKey: RadarColorMapping;
    fillByKey: Record<string, string | null>;
    boundDefs: any;
    rotation: number;
    radius: number;
    radiusScale: import("d3-scale").ScaleLinear<number, number, never>;
    centerX: number;
    centerY: number;
    angleStep: number;
    curveFactory: import("d3-shape").CurveFactory;
    legendData: {
        id: string;
        label: string;
        color: string;
    }[];
    boundLegends: BoundLegendProps[];
    customLayerProps: RadarCustomLayerProps<D>;
};
//# sourceMappingURL=hooks.d.ts.map