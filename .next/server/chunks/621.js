exports.id = 621;
exports.ids = [621];
exports.modules = {

/***/ 621:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_Layout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(120);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(749);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./public/Lotto.jpeg
/* harmony default export */ var Lotto = ({"src":"/_next/static/image/public/Lotto.7bf2fa49372fdfa99c25fca6c8d2e07b.jpeg","height":131,"width":385,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAH/9oACAEBAAAAAFz/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAECEAAAAH//xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAH//xAAbEAACAQUAAAAAAAAAAAAAAAABAgASISJBQv/aAAgBAQABPwALQ+LOLno7M//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z"});
;// CONCATENATED MODULE: ./components/Layout.js






const useStyles = (0,makeStyles/* default */.Z)({
  layoutBlock: {
    position: "relative",
    border: "1px solid white",
    backgroundColor: "white",
    borderRadius: "16px",
    width: "300px",
    height: "400px",
    boxShadow: "0 0 8px 0 rgba(0, 0 ,0, 0.04)",
    marginTop: "96px",
    marginLeft: "32%",
    marginRight: "32%",
    marginBottom: "32px",
    display: "flex",
    flexDirection: "column"
  },
  imgStyle: {
    marginTop: "23px"
  }
});

const Layout = ({
  children
}) => {
  const classes = useStyles();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
    container: true,
    item: true,
    xs: 12,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid/* default */.Z, {
      className: classes.layoutBlock,
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        width: 385,
        height: 131,
        src: Lotto,
        alt: "Picture of Lotto"
      }), children]
    }), ";"]
  });
};

/* harmony default export */ var components_Layout = (Layout);

/***/ })

};
;