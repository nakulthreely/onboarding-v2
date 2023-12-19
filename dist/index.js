"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  TriaConnectProvider: () => TriaConnectProvider,
  default: () => src_default,
  useTriaTransaction: () => useTriaTransaction
});
module.exports = __toCommonJS(src_exports);
var import_react2 = require("react");

// src/NavContext.tsx
var import_react = require("react");
var NavContext = (0, import_react.createContext)();
var NavContext_default = NavContext;

// src/index.tsx
var import_core = require("@tria-sdk/core");

// src/Components/TriaWalletButton.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var TriaWalletButton = ({ bgColor, stackui }) => {
  const hexToRGB = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  };
  const rgbColor = hexToRGB(bgColor);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    !stackui && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { width: "134", height: "134", viewBox: "0 0 134 134", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("filter", { id: "dynamic-shadow", x: "0", y: "0", width: "180", height: "180", filterUnits: "userSpaceOnUse", "color-interpolation-filters": "sRGB", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feDropShadow", { dx: "0", dy: "4", stdDeviation: "15", floodColor: `rgb(${rgbColor.r},${rgbColor.g},${rgbColor.b})`, floodOpacity: "0.5" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { filter: "url(#dynamic-shadow)", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "35", y: "35", width: "64", height: "64", rx: "32", fill: "#101010" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { filter: "url(#dynamic-shadow)", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "37.5098", y: "37.5098", width: "58.9804", height: "58.9804", rx: "29.4902", fill: "url(#paint1_linear_1316_13027)", "shape-rendering": "crispEdges" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { "clip-path": "url(#clip0_1316_13027)", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M81 53H53V81H81V53ZM67.8533 61.2654V64.9058L73.8652 62.5352V65.2285C73.8652 65.8062 73.5281 66.3228 73.0206 66.5229L67.8533 68.5606V65.8728C67.8498 65.2986 67.5136 64.7863 67.0087 64.5872L62.686 62.8826C62.1784 62.6824 61.8414 62.1658 61.8414 61.5881V58.8948L67.8533 61.2654ZM67.8533 68.5767V69.2782H67.8618V76.8857H65.3848V71.2581L62.686 70.1938C62.1784 69.9937 61.8414 69.4771 61.8414 68.8993V66.206L67.8533 68.5767Z", fill: "#101010" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "37.7598", y: "37.7598", width: "58.4804", height: "58.4804", rx: "29.2402", stroke: bgColor, "stroke-width": "0.5", "shape-rendering": "crispEdges" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", { id: "filter0_d_1316_13027", x: "0", y: "0", width: "134", height: "134", filterUnits: "userSpaceOnUse", "color-interpolation-filters": "sRGB", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feOffset", {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", { stdDeviation: "17.5" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.567674 0 0 0 0 0.48 0 0 0 0 1 0 0 0 0.35 0" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_1316_13027" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_1316_13027", result: "shape" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", { id: "filter1_d_1316_13027", x: "6.50977", y: "6.50977", width: "120.98", height: "120.98", filterUnits: "userSpaceOnUse", "color-interpolation-filters": "sRGB", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feOffset", {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", { stdDeviation: "15.5" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.567674 0 0 0 0 0.48 0 0 0 0 1 0 0 0 0.68 0" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_1316_13027" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_1316_13027", result: "shape" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", { id: "paint0_linear_1316_13027", x1: "35", y1: "35", x2: "112.218", y2: "65.1631", gradientUnits: "userSpaceOnUse", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { "stop-color": "#101010" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "1", "stop-color": bgColor })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", { id: "paint1_linear_1316_13027", x1: "37.5098", y1: "37.5098", x2: "108.671", y2: "65.3071", gradientUnits: "userSpaceOnUse", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { "stop-color": bgColor }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "1", "stop-color": bgColor })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", { id: "clip0_1316_13027", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "53", y: "53", width: "28", height: "28", rx: "6", fill: "#101010" }) })
      ] })
    ] }) }),
    stackui && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { width: "134", height: "134", viewBox: "0 0 134 134", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { filter: "", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "35", y: "35", width: "64", height: "64", rx: "32", fill: "#101010" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { filter: "", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "37.5098", y: "37.5098", width: "58.9804", height: "58.9804", rx: "29.4902", fill: "#AAFF00", "shape-rendering": "crispEdges" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { "clip-path": "url(#clip0_1316_13027)", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M81 53H53V81H81V53ZM67.8533 61.2654V64.9058L73.8652 62.5352V65.2285C73.8652 65.8062 73.5281 66.3228 73.0206 66.5229L67.8533 68.5606V65.8728C67.8498 65.2986 67.5136 64.7863 67.0087 64.5872L62.686 62.8826C62.1784 62.6824 61.8414 62.1658 61.8414 61.5881V58.8948L67.8533 61.2654ZM67.8533 68.5767V69.2782H67.8618V76.8857H65.3848V71.2581L62.686 70.1938C62.1784 69.9937 61.8414 69.4771 61.8414 68.8993V66.206L67.8533 68.5767Z", fill: "#101010" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "37.7598", y: "37.7598", width: "58.4804", height: "58.4804", rx: "29.2402", stroke: bgColor, "stroke-width": "0.5", "shape-rendering": "crispEdges" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", { id: "filter0_d_1316_13027", x: "0", y: "0", width: "134", height: "134", filterUnits: "userSpaceOnUse", "color-interpolation-filters": "sRGB", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feOffset", {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", { stdDeviation: "17.5" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.567674 0 0 0 0 0.48 0 0 0 0 1 0 0 0 0.35 0" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_1316_13027" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_1316_13027", result: "shape" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", { id: "filter1_d_1316_13027", x: "6.50977", y: "6.50977", width: "120.98", height: "120.98", filterUnits: "userSpaceOnUse", "color-interpolation-filters": "sRGB", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feOffset", {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", { stdDeviation: "15.5" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.567674 0 0 0 0 0.48 0 0 0 0 1 0 0 0 0.68 0" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_1316_13027" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_1316_13027", result: "shape" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", { id: "paint0_linear_1316_13027", x1: "35", y1: "35", x2: "112.218", y2: "65.1631", gradientUnits: "userSpaceOnUse", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { "stop-color": "#101010" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "1", "stop-color": bgColor })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", { id: "paint1_linear_1316_13027", x1: "37.5098", y1: "37.5098", x2: "108.671", y2: "65.3071", gradientUnits: "userSpaceOnUse", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { "stop-color": bgColor }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "1", "stop-color": bgColor })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", { id: "clip0_1316_13027", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "53", y: "53", width: "28", height: "28", rx: "6", fill: "#101010" }) })
      ] })
    ] }) })
  ] });
};

// src/Components/WalletCloseButton.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var WalletCloseButton = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "110", height: "38", viewBox: "0 0 110 38", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 35H2.34523C11.1426 35 19.6355 31.7787 26.22 25.9443L30.9961 21.7123C44.8891 9.4021 65.8643 9.67334 79.4343 22.3387L82.6264 25.318C89.2925 31.5397 98.0714 35 107.19 35H110V37.5H0V35Z", fill: "#101010" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M60.9401 22.2125L56.0501 27.1025C55.4726 27.68 54.5276 27.68 53.9501 27.1025L49.0601 22.2125", stroke: "#FAFAFA", strokeOpacity: "0.8", strokeWidth: "1.5", strokeMiterlimit: "10", strokeLinecap: "round", strokeLinejoin: "round" })
  ] });
};
var WalletCloseButton_default = WalletCloseButton;

// src/index.tsx
var import_connect = require("@tria-sdk/connect");
var import_react_draggable = __toESM(require("react-draggable"));

// src/Components/ExternalWallets.tsx
var import_wagmi = require("wagmi");
var import_jsx_runtime3 = require("react/jsx-runtime");
function Wallets() {
  const { connect, connectors } = (0, import_wagmi.useConnect)();
  console.log("Wallet page");
  const clickMetamask = () => {
    console.log("Clicked");
    connect({ connector: connectors[2] });
  };
  const clickWc = () => {
    console.log("Clicked");
    connect({ connector: connectors[1] });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "self-stretch justify-center items-center inline-flex", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { className: "", onClick: () => clickMetamask(), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "grow shrink basis-0 h-16 px-1 py-3 justify-center cursor-pointer items-center gap-2 flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-10 h-10 p-[3.33px] bg-white rounded-[28.33px] shadow justify-center items-center gap-[3.33px] flex", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-7 h-7 relative", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-7 h-7 left-0 top-0 absolute bg-white rounded-md", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "w-7 h-7 left-0 top-0 absolute", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { width: "28", height: "28", viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { width: "28", height: "28", rx: "6", fill: "white" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M24.0892 3.12012L15.3447 9.61478L16.9618 5.78302L24.0892 3.12012Z", fill: "#E2761B", stroke: "#E2761B", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M3.9021 3.12012L12.5763 9.6763L11.0383 5.78302L3.9021 3.12012Z", fill: "#E4761B", stroke: "#E4761B", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M20.943 18.1748L18.614 21.7429L23.5971 23.1139L25.0296 18.2539L20.943 18.1748Z", fill: "#E4761B", stroke: "#E4761B", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M2.97925 18.2539L4.40298 23.1139L9.38603 21.7429L7.05709 18.1748L2.97925 18.2539Z", fill: "#E4761B", stroke: "#E4761B", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M9.10488 12.1458L7.71631 14.2462L12.6642 14.4659L12.4884 9.14893L9.10488 12.1458Z", fill: "#E4761B", stroke: "#E4761B", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M18.8862 12.1458L15.4587 9.0874L15.3445 14.4659L20.2836 14.2462L18.8862 12.1458Z", fill: "#E4761B", stroke: "#E4761B", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M9.38599 21.7429L12.3565 20.2928L9.79025 18.2891L9.38599 21.7429Z", fill: "#E4761B", stroke: "#E4761B", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M15.6345 20.2928L18.6138 21.7429L18.2007 18.2891L15.6345 20.2928Z", fill: "#E4761B", stroke: "#E4761B", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M18.6138 21.7426L15.6345 20.2925L15.8718 22.2347L15.8454 23.0521L18.6138 21.7426Z", fill: "#D7C1B3", stroke: "#D7C1B3", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M9.38599 21.7426L12.1543 23.0521L12.1368 22.2347L12.3565 20.2925L9.38599 21.7426Z", fill: "#D7C1B3", stroke: "#D7C1B3", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M12.1983 17.0058L9.71997 16.2763L11.4689 15.4766L12.1983 17.0058Z", fill: "#233447", stroke: "#233447", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M15.7927 17.0058L16.5222 15.4766L18.2799 16.2763L15.7927 17.0058Z", fill: "#233447", stroke: "#233447", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M9.38607 21.7424L9.80791 18.1743L7.05713 18.2534L9.38607 21.7424Z", fill: "#CD6116", stroke: "#CD6116", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M18.1921 18.1743L18.614 21.7424L20.9429 18.2534L18.1921 18.1743Z", fill: "#CD6116", stroke: "#CD6116", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M20.2838 14.2461L15.3447 14.4658L15.8017 17.0057L16.5312 15.4765L18.2889 16.2762L20.2838 14.2461Z", fill: "#CD6116", stroke: "#CD6116", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M9.72007 16.2762L11.4778 15.4765L12.1984 17.0057L12.6642 14.4658L7.71631 14.2461L9.72007 16.2762Z", fill: "#CD6116", stroke: "#CD6116", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M7.71631 14.2461L9.79038 18.2888L9.72007 16.2762L7.71631 14.2461Z", fill: "#E4751F", stroke: "#E4751F", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M18.2888 16.2762L18.2009 18.2888L20.2838 14.2461L18.2888 16.2762Z", fill: "#E4751F", stroke: "#E4751F", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M12.6643 14.4658L12.1985 17.0057L12.7785 20.0025L12.9103 16.0565L12.6643 14.4658Z", fill: "#E4751F", stroke: "#E4751F", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M15.3447 14.4658L15.1074 16.0477L15.2129 20.0025L15.8017 17.0057L15.3447 14.4658Z", fill: "#E4751F", stroke: "#E4751F", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M15.8017 17.0058L15.2129 20.0027L15.6347 20.2927L18.201 18.2889L18.2888 16.2764L15.8017 17.0058Z", fill: "#F6851B", stroke: "#F6851B", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M9.71997 16.2764L9.79028 18.2889L12.3565 20.2927L12.7784 20.0027L12.1983 17.0058L9.71997 16.2764Z", fill: "#F6851B", stroke: "#F6851B", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M15.8455 23.0522L15.8719 22.2348L15.6522 22.0415H12.3389L12.1368 22.2348L12.1543 23.0522L9.38599 21.7427L10.3527 22.5336L12.3125 23.8958H15.6785L17.6471 22.5336L18.6139 21.7427L15.8455 23.0522Z", fill: "#C0AD9E", stroke: "#C0AD9E", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M15.6348 20.2925L15.2129 20.0024H12.7785L12.3567 20.2925L12.137 22.2347L12.3391 22.0414H15.6523L15.8721 22.2347L15.6348 20.2925Z", fill: "#161616", stroke: "#161616", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M24.4581 10.0366L25.2051 6.45094L24.089 3.12012L15.6345 9.39507L18.8862 12.1459L23.4826 13.4905L24.5021 12.304L24.0626 11.9877L24.7657 11.3461L24.2208 10.9243L24.9239 10.3882L24.4581 10.0366Z", fill: "#763D16", stroke: "#763D16", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M2.79468 6.45094L3.5417 10.0366L3.06712 10.3882L3.7702 10.9243L3.2341 11.3461L3.93718 11.9877L3.49775 12.304L4.50843 13.4905L9.10478 12.1459L12.3565 9.39507L3.90202 3.12012L2.79468 6.45094Z", fill: "#763D16", stroke: "#763D16", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M23.4828 13.4901L18.8864 12.1455L20.2838 14.2459L18.2009 18.2886L20.9429 18.2535H25.0296L23.4828 13.4901Z", fill: "#F6851B", stroke: "#F6851B", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M9.1048 12.1455L4.50844 13.4901L2.97925 18.2535H7.05709L9.7903 18.2886L7.71622 14.2459L9.1048 12.1455Z", fill: "#F6851B", stroke: "#F6851B", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M15.3447 14.4657L15.6347 9.39477L16.9705 5.78271H11.0383L12.3566 9.39477L12.6642 14.4657L12.7697 16.0652L12.7784 20.0024H15.2128L15.2304 16.0652L15.3447 14.4657Z", fill: "#F6851B", stroke: "#F6851B", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-[22.05px] h-5 left-[2.98px] top-[3.12px] absolute" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-[9.23px] h-[2.76px] left-[9.39px] top-[20.29px] absolute" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-[13.89px] h-[7.50px] left-[7.06px] top-[14.25px] absolute" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-[12.57px] h-[5.76px] left-[7.72px] top-[14.25px] absolute" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-[22.41px] h-[10.37px] left-[2.79px] top-[3.12px] absolute" })
      ] }) }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "grow shrink basis-0 h-10 px-2 py-3 rounded-[20px] justify-start items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "justify-start items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-center text-white text-opacity-80 text-base font-medium font-['Montserrat'] leading-tight", children: "Metamask" }) }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { onClick: () => clickWc(), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "grow shrink basis-0 h-16 px-1 py-3 cursor-pointer justify-center items-center gap-2 flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-10 h-10 p-[3.33px] bg-blue-500 rounded-[28.33px] shadow justify-center items-center gap-[3.33px] flex", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "w-7 h-7 relative", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "w-7 h-7 left-0 top-0 absolute  " }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { width: "28", height: "28", viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { width: "28", height: "28", rx: "6", fill: "#3B99FC" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M8.38969 10.3737C11.4882 7.27518 16.5118 7.27518 19.6103 10.3737L19.9832 10.7466C20.1382 10.9015 20.1382 11.1527 19.9832 11.3076L18.7076 12.5833C18.6301 12.6607 18.5045 12.6607 18.4271 12.5833L17.9139 12.0701C15.7523 9.90851 12.2477 9.90851 10.0861 12.0701L9.53655 12.6197C9.45909 12.6971 9.3335 12.6971 9.25604 12.6197L7.98039 11.344C7.82547 11.1891 7.82547 10.9379 7.98039 10.783L8.38969 10.3737ZM22.2485 13.0118L23.3838 14.1472C23.5387 14.3021 23.5387 14.5533 23.3838 14.7082L18.2645 19.8275C18.1096 19.9825 17.8584 19.9825 17.7035 19.8276C17.7035 19.8276 17.7035 19.8276 17.7035 19.8276L14.0702 16.1942C14.0314 16.1555 13.9686 16.1555 13.9299 16.1942C13.9299 16.1942 13.9299 16.1942 13.9299 16.1942L10.2966 19.8275C10.1417 19.9825 9.89053 19.9825 9.73561 19.8276C9.7356 19.8276 9.7356 19.8276 9.7356 19.8276L4.61619 14.7081C4.46127 14.5532 4.46127 14.302 4.61619 14.1471L5.75152 13.0118C5.90645 12.8569 6.15763 12.8569 6.31255 13.0118L9.94595 16.6452C9.98468 16.6839 10.0475 16.6839 10.0862 16.6452C10.0862 16.6452 10.0862 16.6452 10.0862 16.6452L13.7194 13.0118C13.8743 12.8568 14.1255 12.8568 14.2805 13.0118C14.2805 13.0118 14.2805 13.0118 14.2805 13.0118L17.9139 16.6452C17.9526 16.6839 18.0154 16.6839 18.0541 16.6452L21.6874 13.0118C21.8424 12.8569 22.0936 12.8569 22.2485 13.0118Z", fill: "white" })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "grow shrink basis-0 h-10 px-2 py-3 rounded-[20px] justify-start items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "justify-start items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "text-center text-white text-opacity-80 text-base font-medium font-['Montserrat'] leading-tight", children: "Wallet connect" }) }) })
    ] }) })
  ] });
}

// src/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
window.Buffer = window.Buffer || require("buffer").Buffer;
var authUrl = "https://auth.tria.so";
var authController = new import_core.AuthController("https://staging.tria.so");
var createEncodedData = (data) => {
  const encodedParams = btoa(JSON.stringify(data));
  return encodedParams;
};
var useTriaTransaction = () => {
  const createIframe = (iframeUrl) => {
    const iframeContainer = document.createElement("div");
    iframeContainer.id = "triaWallet";
    iframeContainer.className = "bg flex justify-between bg-transparent absolute bottom-4 right-2";
    iframeContainer.style.position = "absolute";
    iframeContainer.style.bottom = "4px";
    iframeContainer.style.right = "2px";
    const innerContainer = document.createElement("div");
    innerContainer.className = "mb-4 mr-2 relative rounded-[20px]";
    const iframeWrapper = document.createElement("div");
    iframeWrapper.className = "h-[586px] w-[312px] rounded-[20px] overflow-hidden";
    const iframe = document.createElement("iframe");
    iframe.width = "312";
    iframe.height = "586";
    iframe.src = iframeUrl;
    iframe.allow = "publickey-credentials-get";
    iframe.style.border = "none";
    iframeWrapper.appendChild(iframe);
    innerContainer.appendChild(iframeWrapper);
    iframeContainer.appendChild(innerContainer);
    document.body.appendChild(iframeContainer);
  };
  const sendTransaction = (sendDataFromDapp) => __async(void 0, null, function* () {
    const iframeEncodedData = createEncodedData(sendDataFromDapp);
    const sendIframeUrl = `${authUrl}/send/${iframeEncodedData}`;
    const iframe = createIframe(sendIframeUrl);
    return sendIframeUrl;
  });
  const signMessage = (message) => __async(void 0, null, function* () {
    const iframeEncodedData = createEncodedData(message);
    const signIframeUrl = `${authUrl}/signMessage/${iframeEncodedData}`;
    const iframe = createIframe(signIframeUrl);
    return signIframeUrl;
  });
  const callContract = (data) => __async(void 0, null, function* () {
    const iframeEncodedData = createEncodedData(data);
    const signIframeUrl = `${authUrl}/mint/${iframeEncodedData}`;
    const iframe = createIframe(signIframeUrl);
    return signIframeUrl;
  });
  return {
    sendTransaction,
    signMessage,
    callContract
  };
};
var TriaConnectProvider = ({ triaStaging = false }) => {
  const [renderAuthIframe, setRenderAuthIframe] = (0, import_react2.useState)(false);
  const [authIframeSrc, setAuthIframeSrc] = (0, import_react2.useState)("");
  (0, import_react2.useEffect)(() => {
    const getQueryParam = (param) => {
      return new URLSearchParams(window.location.search).get(param);
    };
    const isVerified = getQueryParam("verified") === "true";
    setRenderAuthIframe(isVerified);
    {
      triaStaging ? setAuthIframeSrc("https://auth-tria.vercel.app/verified") : setAuthIframeSrc("https://auth.tria.so/verified");
    }
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: renderAuthIframe && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "iframe",
    {
      src: authIframeSrc,
      title: "Auth Verification",
      style: { display: "none" }
    }
  ) });
};
var initialChains = [
  "POLYGON",
  "ARBITRUM",
  "FUSE",
  "AVALANCHE",
  "BINANCE",
  "ETH",
  "FANTOM",
  "OPTIMISM"
];
var Application = ({
  dappName,
  dappDomain,
  uiType,
  logo,
  primaryColor = "#A855F7",
  supportedChains = initialChains,
  defaultChain = "POLYGON",
  darkMode = true,
  triaStaging = false,
  buttonPosition = { x: 100, y: 100 }
}) => {
  const [view, setView] = (0, import_react2.useState)("Home");
  const [triaName, setTriaName] = (0, import_react2.useState)();
  const [userAddress, setUserAddress] = (0, import_react2.useState)(null);
  const [email, setEmail] = (0, import_react2.useState)("");
  const [showWallet, setShowWallet] = (0, import_react2.useState)(false);
  const [showOnboarding, setShowOnboarding] = (0, import_react2.useState)(false);
  const [appDomain, setAppDomain] = (0, import_react2.useState)();
  const [iframeURL, setIframeURL] = (0, import_react2.useState)();
  const [accessToken, setAccessToken] = (0, import_react2.useState)();
  const [authIFrameUrl, setAuthIFrameUrl] = (0, import_react2.useState)("");
  const { account } = (0, import_connect.useAccount)();
  const [stackui, setStackUi] = (0, import_react2.useState)(false);
  const [wasOpen, setWasOpen] = (0, import_react2.useState)(false);
  const [externalWallet, setExternalWallet] = (0, import_react2.useState)(false);
  const [coords, setCoords] = (0, import_react2.useState)({ x: 0, y: 0 });
  const [walletVisible, setWalletVisible] = (0, import_react2.useState)(false);
  const [posX, setPosX] = (0, import_react2.useState)();
  const [posY, setPosY] = (0, import_react2.useState)();
  const [buttonPosX, setButtonPosX] = (0, import_react2.useState)(
    window.innerWidth - ((buttonPosition == null ? void 0 : buttonPosition.x) || 100)
  );
  const [buttonPosY, setButtonPosY] = (0, import_react2.useState)(
    window.innerHeight - ((buttonPosition == null ? void 0 : buttonPosition.y) || 100)
  );
  const [currentTime, setCurrentTime] = (0, import_react2.useState)();
  const buttonBoundRight = window.innerWidth - 134;
  const buttonBoundBottom = window.innerHeight - 134;
  (0, import_react2.useEffect)(() => {
    const handleWindowMouseMove = (e) => {
      setCoords({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);
  (0, import_react2.useEffect)(() => {
    console.log(buttonPosX, buttonPosY);
  }, [buttonPosX, buttonPosY]);
  const handleStartDragging = () => {
    var now = /* @__PURE__ */ new Date();
    setCurrentTime(now.getTime());
  };
  const handleStopDragging = () => {
    var now = /* @__PURE__ */ new Date();
    console.log(coords);
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    if (window.innerWidth - coords.x < 312 && window.innerHeight - coords.y < 586) {
      setPosX(window.innerWidth - 312);
      setPosY(window.innerHeight - 586);
    } else if (window.innerWidth - coords.x < 312) {
      setPosX(window.innerWidth - 312);
      setPosY(coords.y);
    } else if (window.innerHeight - coords.y < 586) {
      setPosX(coords.x);
      setPosY(window.innerHeight - 586);
    } else {
      setPosX(coords.x);
      setPosY(coords.y);
    }
    if (now.getTime() - (currentTime || 0) < 200) {
      handleWalletButtonClick();
      setButtonPosX(coords.x - (coords.x - buttonPosX));
      setButtonPosY(coords.y - (coords.y - buttonPosY));
    } else {
      if (window.innerWidth - coords.x < 100 && window.innerHeight - coords.y < 100) {
        setButtonPosX(coords.x - 100);
        setButtonPosY(coords.y - 100);
      } else if (window.innerWidth - coords.x < 100) {
        setButtonPosX(coords.x - 100);
        setButtonPosY(coords.y);
      } else if (window.innerHeight - coords.y < 100) {
        setButtonPosY(coords.y - 100);
        setButtonPosX(coords.x);
      } else if (coords.x < 100) {
        setButtonPosY(coords.y);
        setButtonPosX(coords.x + 100);
      } else if (coords.y < 100) {
        setButtonPosY(coords.y + 100);
        setButtonPosX(coords.x);
      } else if (coords.x < 100 && coords.y < 100) {
        setButtonPosX(coords.x + 100);
        setButtonPosY(coords.y + 100);
      } else {
        setButtonPosX(coords.x);
        setButtonPosY(coords.y);
      }
    }
  };
  (0, import_react2.useEffect)(() => {
    if (!account && triaName) {
      console.log("Account is null, reloading the page");
      localStorage.setItem("hasReloaded", "true");
      window.location.reload();
    }
  }, [account, triaName]);
  (0, import_react2.useEffect)(() => {
    setInterval(() => {
      var _a, _b, _c;
      if (localStorage.getItem("tria.wallet.store") !== null) {
        setShowOnboarding(false);
        setTriaName(
          (_a = JSON.parse(localStorage.getItem("tria.wallet.store") || "")) == null ? void 0 : _a.triaName
        );
        setUserAddress(
          (_c = (_b = JSON.parse(localStorage.getItem("tria.wallet.store") || "")) == null ? void 0 : _b.evm) == null ? void 0 : _c.address
        );
      } else if (localStorage.getItem("wagmi.connected") === "true") {
        setShowOnboarding(false);
        setExternalWallet(true);
      } else {
        setShowOnboarding(true);
      }
    }, 500);
  }, []);
  (0, import_react2.useEffect)(() => {
    setInterval(() => {
      setShowOnboarding(true);
    }, 1e3);
  }, []);
  (0, import_react2.useEffect)(() => {
    const item = localStorage.getItem("access_token");
    setAccessToken(item || "");
    setAppDomain(window.parent.origin);
  }, [triaName]);
  const fromDapp = true;
  (0, import_react2.useEffect)(() => {
    const encodedParams = btoa(
      JSON.stringify({
        triaName,
        userAddress,
        appDomain,
        darkMode,
        logo,
        accessToken,
        primaryColor,
        fromDapp,
        dappName,
        defaultChain,
        supportedChains
      })
    );
    console.log(
      encodedParams,
      userAddress,
      triaName,
      accessToken,
      logo,
      appDomain,
      darkMode,
      primaryColor,
      fromDapp,
      dappName,
      defaultChain,
      supportedChains
    );
    {
      triaStaging ? setIframeURL(
        `https://staging-tria-wallet.vercel.app/${encodedParams}`
      ) : setIframeURL(`https://wallet.tria.so/${encodedParams}`);
    }
  }, [triaName, userAddress]);
  (0, import_react2.useEffect)(() => {
    console.log("WALLET URL ---->", iframeURL);
  }, [iframeURL]);
  const nav_context_object = {
    view,
    setView,
    triaName,
    setTriaName,
    dappName,
    logo,
    authController,
    setShowWallet,
    setShowOnboarding,
    showOnboarding,
    email,
    setEmail
  };
  (0, import_react2.useEffect)(() => {
    console.log("log from sdk ----->", dappName, logo);
    if (dappName && (dappName == null ? void 0 : dappName.length) > 0 && logo && (logo == null ? void 0 : logo.length) > 0) {
      {
        triaStaging ? setAuthIFrameUrl(
          `https://auth-tria.vercel.app/?dappName=${dappName}&dappLogo=${logo}&stackui=${uiType}&dappDomain=${dappDomain}`
        ) : setAuthIFrameUrl(
          `https://auth.tria.so/?dappName=${dappName}&dappLogo=${logo}&stackui=${uiType}&dappDomain=${dappDomain}`
        );
      }
    }
  }, [dappName, logo]);
  (0, import_react2.useEffect)(() => {
    if (uiType === "yes") {
      setStackUi(true);
    }
  }, [uiType]);
  (0, import_react2.useEffect)(() => {
    const handleClickOutside = (event) => {
      const iframeElement = document.getElementById("triaWallet");
      if (iframeElement && !iframeElement.contains(event.target)) {
        setWalletVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  (0, import_react2.useEffect)(() => {
    const walletPosition = { posX, posY };
    localStorage.setItem("wallet.position", JSON.stringify(walletPosition));
  }, [posX, posY]);
  (0, import_react2.useEffect)(() => {
    if (primaryColor) {
      document.documentElement.style.setProperty(
        "--primary-color",
        primaryColor
      );
    }
  }, [primaryColor]);
  const { eventData } = (0, import_connect.useListenerCO)(
    triaStaging ? "https://auth-tria.vercel.app" : "https://auth.tria.so"
  );
  const [openNewFrame, setOpenNewFrame] = (0, import_react2.useState)(false);
  const [frameUrl, setFrameUrl] = (0, import_react2.useState)("");
  (0, import_react2.useEffect)(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    console.log("sdk event data --> ", eventData);
    var url = "";
    if (((_a = eventData == null ? void 0 : eventData.message) == null ? void 0 : _a.accountExists) === false) {
      if (!triaStaging) {
        url = `https://auth.tria.so/signUpUserNameIframe/${(_b = eventData == null ? void 0 : eventData.message) == null ? void 0 : _b.social}/${(_c = eventData == null ? void 0 : eventData.message) == null ? void 0 : _c.userId}/${(_d = eventData == null ? void 0 : eventData.message) == null ? void 0 : _d.username}/${(_e = eventData == null ? void 0 : eventData.message) == null ? void 0 : _e.token}`;
      } else {
        url = `https://auth-tria.vercel.app/signUpUserNameIframe/${(_f = eventData == null ? void 0 : eventData.message) == null ? void 0 : _f.social}/${(_g = eventData == null ? void 0 : eventData.message) == null ? void 0 : _g.userId}/${(_h = eventData == null ? void 0 : eventData.message) == null ? void 0 : _h.username}/${(_i = eventData == null ? void 0 : eventData.message) == null ? void 0 : _i.token}`;
      }
      setOpenNewFrame(true);
      setFrameUrl(url);
    }
  }, [eventData]);
  (0, import_react2.useEffect)(() => {
    var _a;
    console.log("sdk otp event data --> ", eventData, logo, dappName);
    let url = "";
    if (((_a = eventData == null ? void 0 : eventData.message) == null ? void 0 : _a.type) == "otpLogin") {
      const encodedParams = btoa(JSON.stringify({ logo, dappName }));
      if (!triaStaging) {
        url = `https://auth.tria.so/phoneEmailOtp/?dappName=${dappName}&dappLogo=${logo}`;
      } else {
        url = `https://auth-tria.vercel.app/phoneEmailOtp/?dappName=${dappName}&dappLogo=${logo}`;
      }
      console.log("url---------->", url);
      setOpenNewFrame(true);
      setFrameUrl(url);
    }
  }, [eventData]);
  const handleWalletButtonClick = () => {
    if (showWallet) {
      setWalletVisible(true);
    } else {
      setShowWallet(true);
      setWalletVisible(true);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(NavContext_default.Provider, { value: nav_context_object, children: [
    !triaName && showOnboarding && !externalWallet && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: uiType !== "yes" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "div",
      {
        style: {
          borderRadius: "20px",
          overflow: "hidden",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "iframe",
          {
            width: "314",
            height: "586",
            src: authIFrameUrl,
            allow: "publickey-credentials-get"
          }
        )
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "rounded-[20px] overflow-hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2", children: openNewFrame === false ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "w-[448px] rounded-2xl drop bg-[#101010] h-[840px] p-4 flex-col justify-between inline-flex scale-[0.7]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "div",
        {
          style: { marginLeft: "-150px" },
          className: "absolute top-0 ",
          children: " "
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex-col justify-start gap-2 flex", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "w-[416px] h-[39.50px] justify-end items-start inline-flex" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "w-[416px]  px-5 py-6 flex-col justify-center items-center gap-4 inline-flex", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "w-[95px]  relative bg-stone-950 rounded-[67.31px] shadow", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: logo }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "w-[14.66px]  left-[40.17px] top-[40.17px] absolute bg-lime-400 rounded-full blur-[40.71px]" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "self-stretch  py-3 flex-col justify-center items-start gap-4 flex", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "self-stretch justify-center items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "text-center text-white text-opacity-80 text-lg font-medium font-['Montserrat'] leading-snug", children: [
            "Log in with ",
            dappName
          ] }) }) })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "mt-auto", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "w-[416px] h-[375px] px-5 py-4 rounded-2xl border border-violet-400 border-opacity-30 flex-col justify-center items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "iframe",
          {
            src: !triaStaging ? `https://auth.tria.so/SocialLoginIframe/?dappName=${dappName}&dappLogo=${logo}` : `https://auth-tria.vercel.app/SocialLoginIframe/?dappName=${dappName}&dappLogo=${logo}`,
            height: "205px",
            width: "100%"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "w-[376px]  py-3 justify-center items-center gap-2 inline-flex", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "grow shrink basis-0 border-2 border-white border-opacity-10" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "px-2 justify-center items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "text-center text-white text-opacity-40 text-xs font-semibold font-['Montserrat'] uppercase leading-[14.40px]", children: "or" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "grow shrink basis-0  border-2 border-white border-opacity-10" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Wallets, {})
      ] }) }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "w-[416px] h-[43px] py-3 rounded-[44px] justify-start items-start inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "grow shrink basis-0 h-[19px] justify-center items-center gap-2 flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "w-[19px] h-[19px] relative rounded-[5px]" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          "svg",
          {
            width: "19",
            height: "19",
            viewBox: "0 0 19 19",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("g", { "clip-path": "url(#clip0_240_3997)", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "path",
                {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M19 0H0V19H19V0ZM10.079 5.60869V8.07896L14.1585 6.47031V8.29788C14.1585 8.68991 13.9298 9.04048 13.5854 9.17628L10.079 10.559V8.73509C10.0767 8.34551 9.84853 7.99783 9.5059 7.86274L6.57263 6.70603C6.22823 6.57021 5.99951 6.21964 5.99951 5.82761V4.00003L10.079 5.60869ZM10.079 10.5699V11.0459H10.0848V16.2081H8.404V12.3894L6.57263 11.6672C6.22823 11.5314 5.99951 11.1809 5.99951 10.7888V8.96124L10.079 10.5699Z",
                  fill: "#808080",
                  "fill-opacity": "0.4"
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("clipPath", { id: "clip0_240_3997", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "rect",
                {
                  width: "19",
                  height: "19",
                  rx: "5",
                  fill: "white"
                }
              ) }) })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "text-center text-zinc-500 text-opacity-40 text-sm font-semibold font-['Montserrat'] leading-[16.80px]", children: "Powered by Tria" })
      ] }) }) })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "iframe",
      {
        width: "314",
        height: "586",
        src: frameUrl,
        allow: "publickey-credentials-get"
      }
    ) }) }),
    showWallet && triaName && userAddress && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "div",
      {
        id: "triaWallet",
        style: {
          display: walletVisible ? "block" : "none",
          justifyItems: "space-between",
          backgroundColor: "transparent",
          position: "fixed",
          top: posY,
          left: posX,
          zIndex: 9999
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          "div",
          {
            style: {
              marginBottom: "4px",
              marginRight: "2px",
              position: "relative",
              borderRadius: "20px"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "div",
                {
                  style: {
                    position: "absolute",
                    width: "312px",
                    height: "40px",
                    borderRadius: "20px",
                    top: "-38px",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center"
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                    "div",
                    {
                      onClick: () => {
                        setWalletVisible(false);
                      },
                      style: { cursor: "pointer" },
                      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(WalletCloseButton_default, {})
                    }
                  )
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "div",
                {
                  style: {
                    height: "586px",
                    width: "312px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    backgroundColor: "#101010"
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                    "iframe",
                    {
                      width: "312",
                      height: "586",
                      src: iframeURL,
                      allow: "clipboard-read; clipboard-write; publickey-credentials-get",
                      style: {
                        backgroundColor: "#101010"
                      }
                    }
                  )
                }
              )
            ]
          }
        )
      }
    ),
    triaName && !walletVisible && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      import_react_draggable.default,
      {
        defaultPosition: { x: buttonPosX, y: buttonPosY },
        onStart: handleStartDragging,
        onStop: handleStopDragging,
        bounds: {
          top: 0,
          left: 0,
          right: buttonBoundRight,
          bottom: buttonBoundBottom
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "div",
          {
            style: {
              // display: 'flex',
              // position: 'fixed',
              // cursor:'move',
              // flexDirection: 'row',
              // justifyContent: 'center',
              // alignItems: 'center',
              // height: '60px',
              // width: '60px',
              // borderRadius: '100%',
              // background: '#FFFFFF',
              //  boxShadow: isPressed ? '0 0 10px 0 rgba(0,0,0,0.2)' : '0 0 20px 0 rgba(0,0,0,0.25)',
              // transform: isPressed ? 'scale(0.80)' : 'scale(1)',
              // transition: 'all 0.1s ease',
              cursor: "pointer",
              zIndex: 9999
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              TriaWalletButton,
              {
                bgColor: primaryColor || "#A855F7",
                stackui
              }
            )
          }
        )
      }
    )
  ] }) });
};
var src_default = Application;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TriaConnectProvider,
  useTriaTransaction
});
//# sourceMappingURL=index.js.map