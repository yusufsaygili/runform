# runform

FFT and IFFT

## Install

```bash
npm install runform
```
## Usage


```node
//Import fft and ifft
const { fft } = require('runform');
const { ifft } = require('runform');

//Sampling rate
let fs = 1000;

//Sampling period
let T = 1 / fs;

//Length of signal
let L = 1500;

//Time array
let t = Array.from({ length: L }, (x, i) => i * T);

//A signal containing a 30 Hz sinusoid of amplitude 0.5 and a 100 Hz sinusoid of amplitude 1.
let s = Array.from(t, (x, i) => 0.5 * Math.sin(2 * Math.PI * 30 * x) + Math.sin(2 * Math.PI * 100 * x));

//Compute the Fourier transform of the signal.
let [realFFTCoeffcients, imaginaryFFTCoeffcients] = fft(s);

//Compute the inverse Fourier transform of the signal.
let [realArray,imaginaryArray] = ifft(realFFTCoeffcients,imaginaryFFTCoeffcients)
```
Note: `runform` module can be both imported as commonJS or ES module.

## License
[MIT](https://choosealicense.com/licenses/mit/)