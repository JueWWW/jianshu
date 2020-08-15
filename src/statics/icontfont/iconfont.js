import { createGlobalStyle } from 'styled-components'

export const IconFontGlobalStyle = createGlobalStyle `
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1597501444814'); /* IE9 */
  src: url('./iconfont.eot?t=1597501444814#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAARMAAsAAAAACKgAAAP/AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqEQIQGATYCJAMUCwwABCAFhG0HThuYB8iO1EZ1kExZvMjn+838O8KWDnWhZqTiSioWGbJshBxCXe1LnyV54h4E4NT0fKpYCSrYHSptH+T7EEf6Du/gmroowTx7m0tkWTdtFICjBBpQRFsRBcgGiHPeMHZxGfuBAIRqGiNt74EjoeK0YQRAJnYkADWmwUuSCRWRlzM3BjkhoYYr6DMA69z3kx+aBypAKRG0sUP7XmF0fZb5chibn5uPzkaB258JALMIYIDGAA5klWuJYb6vMUZI3+O6AgQVRZ9lPm/9hfrlsFwOWbAimdD/8ACK4QiQFJqkCMJ3FfOd45oIUPi8NQIMvlAR4PDlMN65SBQkEyhwCkgG8VXuQlEcretyRVS1bGUU00beSeONN0aSkaNINutfkDHNaNT89DD/3QyfiRn9vSzJZMycjun0qFXZLnLLqlMLZmazMCvjKplMcWEWGSmi2pixW6uJ3RVGB25pq0AE4r5Y+YIs8PsXuJM7jrp8HJsT2qpHhERHmdcHmqiO6NttjzfenS470r8l22Gfz1FdagFZmPSoy4WvZ7ts/TB/5dHK7/xS7/KP/9weM+Y9X6obXXb58jLadZ72VNc7/N9/+Z1xPQ78szBWmqs1Fh3GhYoVm1Df6UI3PXq0ielMm2Wtu/HR4020y6JBulixHZVaVGr10e9s8blzi4GQQTNdTEOWw4S/DGerz6v1e74qi+WCPTIFnYeMot2Dducs/6dzynvS1keUbobTwLSLTtAGdG3/6US/97Ri2X8q1fmpTjV8d6Dk2PqDvlMqHtvFJ4arburkTZ1T61Kf5ec2GgPPjWk8ZnKP87eLkj+UGVjn2/JgGTnW5v63M8jult0HjcXMZtLEYDeb1bl8Umo4exYss2hjtWZvoy0AyD1g91k3F51DA/1S1vaP+Aw+CBrXJxXv+Fc1DgB4Z2JJDnNy8znYBl6rFLW5759bs4jLfE2rxGK+yRGtijYRDahUJQBv3VHK+/3YykJoIlSWC4EqpCowqtpojm8MCk1LyKPqAkIjfRZrSnMxJC4MoKElAIgSzgFVzD1gSniO5vj3QFHOd5CnRMBAMIPSa2rqBrbo4cqAJ8N6cIZuh5yEZeg94SUPl5EpsYAb5btkU7op26k3M5omg31kQrp9TEhNjTT3PEu3XCeu9waHyVjM0ZOuUyBDnpHvecn2Pp+V9yAj5MQh9OCSAjxSmC5oBp0txJFg2ZU9IvX64aSIKWIC3JKCEqNJcqXYreuaMTStge4jSdQqOJfOKVNFNOfxWHiQxeWI0/WGJimm+xy6ZH6vAlKIx5DfwpPUng+Vs+pKjPFl8WvcBCBoZygBJYxwopA88HXSTggrkIiEAwW2PZ12C2hDZSI1Y0o84ARtAAA=') format('woff2'),
  url('./iconfont.woff?t=1597501444814') format('woff'),
  url('./iconfont.ttf?t=1597501444814') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1597501444814#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconspin:before {
  content: "\e851";
}

.iconfangdajing:before {
  content: "\e614";
}

.iconAa:before {
  content: "\e636";
}

.iconPensyumaobi:before {
  content: "\e708";
}

`