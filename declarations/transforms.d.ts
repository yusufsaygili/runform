/// <reference types="node" />
/**
 * ToDo: Definitions will be added.
 */
declare module "runtime" {
    /**
     * 
     * @param inputReal 
     * @param inputImag 
     */
    export function fft(inputReal: number[], inputImag?: number[]): number[][]
    /**
     * 
     * @param realCoeff 
     * @param imagCoeff 
     */
    export function ifft(realCoeff: number[], imagCoeff: number[]): number[][]

}
