/// <reference types="node" />
/// <reference types="node" />
import type { FsCallbackApi } from './types';
import type * as misc from './types/misc';
import { TEncodingExtended } from '../encoding';
export declare const isWin: boolean;
export declare function promisify(fs: FsCallbackApi, fn: string, getResult?: (result: any) => any): (...args: any[]) => Promise<any>;
export declare function validateCallback<T>(callback: T): misc.AssertCallback<T>;
export declare function modeToNumber(mode: misc.TMode | undefined, def?: any): number;
export declare function nullCheck(path: any, callback?: any): boolean;
export declare function pathToFilename(path: misc.PathLike): string;
export declare function createError(errorCode: string, func?: string, path?: string, path2?: string, Constructor?: ErrorConstructor): Error;
export declare function genRndStr6(): string;
export declare function flagsToNumber(flags: misc.TFlags | undefined): number;
export declare function isFd(path: any): boolean;
export declare function validateFd(fd: any): void;
export declare function dataToBuffer(data: misc.TData, encoding?: string): Buffer;
export declare const bufToUint8: (buf: Buffer) => Uint8Array;
export declare const getWriteArgs: (fd: number, a?: unknown, b?: unknown, c?: unknown, d?: unknown, e?: unknown) => [fd: number, dataAsStr: boolean, buf: Buffer, offset: number, length: number, position: number | null, callback: (...args: any[]) => void];
export declare const getWriteSyncArgs: (fd: number, a: string | Buffer | ArrayBufferView | DataView, b?: number, c?: number | BufferEncoding, d?: number | null) => [fd: number, buf: Buffer, offset: number, length?: number | undefined, position?: number | null | undefined];
export declare function bufferToEncoding(buffer: Buffer, encoding?: TEncodingExtended): misc.TDataOut;
export declare const unixify: (filepath: string, stripTrailing?: boolean) => string;
