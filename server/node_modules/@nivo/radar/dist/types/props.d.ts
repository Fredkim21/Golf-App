/// <reference types="react" />
import { RadarLayerId } from './types';
export declare const svgDefaultProps: {
    layers: RadarLayerId[];
    maxValue: "auto";
    rotation: number;
    curve: "linearClosed";
    borderWidth: number;
    borderColor: {
        from: string;
    };
    gridLevels: number;
    gridShape: "circular";
    gridLabelOffset: number;
    gridLabel: ({ id, anchor, animated: animatedProps }: import("./types").GridLabelProps) => JSX.Element;
    enableDots: boolean;
    dotSize: number;
    dotColor: {
        from: string;
    };
    dotBorderWidth: number;
    dotBorderColor: {
        from: string;
    };
    enableDotLabel: boolean;
    dotLabel: string;
    dotLabelYOffset: number;
    colors: {
        scheme: "nivo";
    };
    fillOpacity: number;
    blendMode: "normal";
    isInteractive: boolean;
    sliceTooltip: ({ index, data }: import("./types").RadarSliceTooltipProps) => JSX.Element;
    legends: never[];
    role: string;
    animate: boolean;
    motionConfig: "gentle";
    defs: never[];
    fill: never[];
};
//# sourceMappingURL=props.d.ts.map