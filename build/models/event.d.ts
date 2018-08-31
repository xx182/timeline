import { Milliseconds, Pixels } from '../constants';
import { Granularity } from '../utils/dates';
export declare enum ImageFileType {
    NONE = "none",
    JPG = "jpg",
    SVG = "svg",
    GIF = "gif",
    PNG = "png"
}
export declare class RawEv3nt {
    date: Milliseconds;
    date_granularity?: Granularity;
    date_min?: Milliseconds;
    date_min_granularity?: Granularity;
    description?: string;
    end_date?: Milliseconds;
    end_date_granularity?: Granularity;
    end_date_max?: Milliseconds;
    end_date_max_granularity?: Granularity;
    id?: string;
    label?: string;
    row?: number;
    wikidata_identifier?: string;
    from: Milliseconds;
    to: Milliseconds;
    imageFrom: Milliseconds;
    imageTo: Milliseconds;
    tags: string[];
    locations: any[];
    time?: Milliseconds;
    space?: Milliseconds;
    left?: Pixels;
    padding?: Pixels;
    top?: Pixels;
    width?: Pixels;
    width_uncertain_from?: Pixels;
    width_uncertain_to?: Pixels;
    color?: string;
    has_image?: ImageFileType;
    image_url?: string;
}
