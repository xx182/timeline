import { Ratio } from "./constants";
export declare type Multiplier = .25 | .5 | 1 | 2 | 4 | 8 | 16;
export declare class Animator {
    private readonly goToDuration;
    private readonly elapsedTimeThreshold;
    private readonly interval;
    readonly multipliers: Multiplier[];
    private marker;
    private multiplier;
    private direction;
    private prevTimestamp;
    private elapsedTimeTotal;
    private animate;
    private centerChangeDone();
    accelerate(): number;
    decelerate(): number;
    goTo(nextCenter: Ratio): void;
    speed(multiplier: string): void;
    isPlaying(): boolean;
    isPlayingForward(): boolean;
    isPlayingBackward(): boolean;
    play(): void;
    playForward(): void;
    playBackward(): void;
    stop(): void;
    toggle(): void;
}
declare const _default: Animator;
export default _default;
