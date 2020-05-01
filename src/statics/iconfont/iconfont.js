import { createGlobalStyle } from "styled-components";

const IconfontStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1587974778289'); /* IE9 */
  src: url('./iconfont.eot?t=1587974778289#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAT8AAsAAAAACaAAAASuAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDSAqGDIUWATYCJAMYCw4ABCAFhG0HXxtTCMgOJQXBwAAAAERAPDytxd6fmd1TaYhJ82SaTBLZpJKgBbqWRjIr4YbYZqcsMLZm+29WHehHGYdisUfcR8l3pvHR7cLhtPOwwO4sy+XdS+HFKI4DCuj8BxJwiQVGubegZ1CBF7fVBNqWisY7WlrdDFCF0ykQ9yiVDKAlrdJDCk1F3TKyiDeg0kyv+BcBr+PPx3+wM1CSKnPWOnO3RAnyf6EvJyJmhxlczhx4uZ4Z0jgyNgMK8bTVeh+SRjdDtI1vcHIM0NWUlF/oc/Hz1OfPXk50OICS0HGGrvuXR5GESiZqKO0y9kSs4hfqqxVDJka1hLJUVAuUPUMGFX8myly6sl4xYwr4BsS6utWcGYqkaErN5kzkJxaX8Lh4o1ZsCfYQXhI3C7Wirt1mdxIubNNFdkA0AWhH+71w/GUeJ5Vy8Z2yiZ1rwct1ogkneLwnvpIjdp7NJrFYmq1WYoI9j/Almgba7dISu/5qNtsgy9Nm6zPC/kJqe96jT3eFUmjetG/CgS28xYfHHxzgKfDq7+HavyHity/lEdm50prmPh6gf2P1Ye7IhEPmg5JBwtWW5pVbO8zeLxwfvje7h8WCYQfDo2fOw2aJJvjPOZEnWhVmfSK13+nkz61XWx5KZvptHJ6zYPZqX5mVvrTdnjXHf5cVE82xR9nt2KybR8mya+HF16C7Q15k0+TWEfxCOZVrd/qTa2RPpcfxnA/F0hESyq2nqCo/82kvKXuhLfanXcinkE4g/svaexAujmGL+NOOH5+OuKxQhUwTOfksRWzsTQjvbttKpEz7mLhNGzmEWezmc/zhxI5YWAMsz+ZbTjjudMtlhexAyCk61eSdOyf7twoIqMEKk8OTCzGwvnA92P/e7AW8Nt84OK7/uMgDxYHFUzjHunWOTiDy8H5REzeueFzRvK1kJsyAmWSHIpD9yYzUfw+h0rO80y/hvh3li7ZuzxiYPcf9SJpPbXbf8iSTEnV7zGtuzz99tdo5hDlzYP0ukghz8buHVRzZ5UsVOD+cVtB46BBdDb23+I7QVe7dWdiATs4YnsqsW185eqtfUi8bf7PLXCdl8vvAZd271gMdgIUDOYoAFqH5CJIfa8zIH0b0H9VOiImJjd4+uant7ZH9DRUV8PnijoEoHCf1T5EZzftLqQvoQfwTmgJHVxe9kD9i8V+gdhbKt1FruyX8kZxj99eSzXbihvamWQ5JwxLImlYjC3YzVDp2i2uSH0Bo26RsfMcEAxGlhY1GAYShLZD0vYNs6BKyYO9BZe4d1IaBQNul8JmxY21QwiIGylioxOUDcEpBG0jPwAqT9EaoMulkTFEQkyWQMVIBPCE2vpoogwbIrNHH2KpKZFkSJxlaj5fCelCno/EWhtZABRurZtmWzLg4su1JsQpaD4SOYEAyLEgJJzcAjqJAMyDD8ixh7f2NIBUTHRmmp6DBLAExjKjqcQlixY9AlkkNowqe5RyjViqJWCwSjsSg6eFKwQzp3CgN19LeTANSYMVSzwi3yBRHxcix0tj95fq7XAFtzg51pMhRooo6GtIhmZCUGVRKmYYKicKBaoLMsDg0iI1q2qSh+lOygTLKdYBJL6PlFAAAAA==') format('woff2'),
  url('./iconfont.woff?t=1587974778289') format('woff'),
  url('./iconfont.ttf?t=1587974778289') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1587974778289#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconAa:before {
  content: "\e636";
}

.iconfangdajing:before {
  content: "\e60c";
}

.iconzhinanzhen:before {
  content: "\e88c";
}

.iconshoujixiazai:before {
  content: "\e608";
}

.iconyumaobi:before {
  content: "\e6e5";
}
`
export default IconfontStyle;