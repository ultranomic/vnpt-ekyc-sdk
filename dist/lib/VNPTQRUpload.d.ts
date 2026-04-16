declare namespace ZXing {
  class BrowserMultiFormatReader {
    decodeFromImage(imageOrUrl: HTMLImageElement | string, hints?: Map<number, unknown>): Promise<Result>;
    decodeFromVideoDevice(deviceId: string | null, videoElement?: HTMLVideoElement): Promise<Result>;
    decodeFromVideoDeviceContinuously(deviceId: string | null, videoElement: HTMLVideoElement | null, callback: (result: Result, error: Error | null) => void): void;
    stopContinuousDecode(): void;
    stopAsyncDecode(): void;
    reset(): void;
    listVideoInputDevices(): Promise<Array<{ deviceId: string; label: string; kind: string }>>;
    setHints(hints: Map<number, unknown>): void;
  }

  class Result {
    readonly text: string;
    readonly raw: Uint8Array;
    readonly numBits: number;
    readonly resultPoints: Array<{ x: number; y: number }>;
    readonly format: string;
    readonly timestamp: number;
  }
}

export = ZXing;
export as namespace ZXing;
