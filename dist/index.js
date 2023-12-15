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
  useContractRead: () => useContractRead,
  useContractWrite: () => useContractWrite,
  useSendTransaction: () => useSendTransaction,
  useSignMessage: () => useSignMessage,
  useTriaTransaction: () => useTriaTransaction
});
module.exports = __toCommonJS(src_exports);
var import_react6 = require("react");

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

// src/hooks/useContractWrite.tsx
var import_react2 = require("react");

// src/utils/shared.ts
var createEncodedData = (data) => {
  const encodedParams = btoa(
    JSON.stringify(data)
  );
  return encodedParams;
};
var createIframe = (iframeUrl, hookName) => {
  const iframeContainer = document.createElement("div");
  iframeContainer.id = hookName;
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

// src/hooks/useContractWrite.tsx
var authUrl = "https://auth.tria.so";
var useContractWrite = (calldata) => {
  const [data, setData] = (0, import_react2.useState)("");
  const [isLoading, setIsLoading] = (0, import_react2.useState)(false);
  const [isError, setIsError] = (0, import_react2.useState)(false);
  const write = () => {
    setIsLoading(true);
    const iframeEncodedData = createEncodedData(calldata);
    const signIframeUrl = `${authUrl}/mint/${iframeEncodedData}`;
    createIframe(signIframeUrl, "sdkMint");
    setIsLoading(false);
    return signIframeUrl;
  };
  (0, import_react2.useEffect)(() => {
    const detect = (event) => {
      var _a;
      console.log("event---------------->", event);
      if (event.origin !== authUrl)
        return;
      let eventData;
      try {
        eventData = JSON.parse(event.data);
      } catch (err) {
        eventData = event.data;
      }
      if ((eventData == null ? void 0 : eventData.type) === "closeIframe" && (eventData == null ? void 0 : eventData.callFrom) == "mint") {
        setData(eventData == null ? void 0 : eventData.data);
        setIsLoading(false);
        (_a = document.getElementById("sdkMint")) == null ? void 0 : _a.remove();
      }
    };
    window.addEventListener("message", detect);
    return () => {
      window.removeEventListener("message", detect);
    };
  }, []);
  return { data, isLoading, isError, isSuccess: !!data, write };
};

// src/hooks/useSendTransaction.tsx
var import_react3 = require("react");
var authUrl2 = "https://auth.tria.so";
var useSendTransaction = (calldata) => {
  const [data, setData] = (0, import_react3.useState)("");
  const [isLoading, setIsLoading] = (0, import_react3.useState)(false);
  const [isError, setIsError] = (0, import_react3.useState)(false);
  const sendTransaction = () => {
    setIsLoading(true);
    const iframeEncodedData = createEncodedData(calldata);
    const signIframeUrl = `${authUrl2}/send/${iframeEncodedData}`;
    const iframe = createIframe(signIframeUrl, "sdkSend");
    setIsLoading(false);
    return signIframeUrl;
  };
  (0, import_react3.useEffect)(() => {
    const detect = (event) => {
      var _a;
      if (event.origin !== authUrl2)
        return;
      let eventData;
      try {
        eventData = JSON.parse(event.data);
      } catch (err) {
        eventData = event.data;
      }
      if ((eventData == null ? void 0 : eventData.type) === "closeIframe" && (eventData == null ? void 0 : eventData.callFrom) == "send") {
        setData(eventData == null ? void 0 : eventData.data);
        setIsLoading(false);
        (_a = document.getElementById("sdkSend")) == null ? void 0 : _a.remove();
      }
    };
    window.addEventListener("message", detect);
    return () => {
      window.removeEventListener("message", detect);
    };
  }, []);
  return { data, isLoading, isError, isSuccess: !!data, sendTransaction };
};

// src/hooks/useSignMessage.tsx
var import_react4 = require("react");
var authUrl3 = "https://auth.tria.so";
var useSignMessage = (calldata) => {
  const [data, setData] = (0, import_react4.useState)("");
  const [isLoading, setIsLoading] = (0, import_react4.useState)(false);
  const [isError, setIsError] = (0, import_react4.useState)(false);
  const signMessage = () => {
    setIsLoading(true);
    const iframeEncodedData = createEncodedData(calldata);
    const signIframeUrl = `${authUrl3}/signMessage/${iframeEncodedData}`;
    createIframe(signIframeUrl, "sdkSign");
    setIsLoading(false);
    return signIframeUrl;
  };
  (0, import_react4.useEffect)(() => {
    const detect = (event) => {
      var _a;
      if (event.origin !== authUrl3)
        return;
      let eventData;
      try {
        eventData = JSON.parse(event.data);
      } catch (err) {
        eventData = event.data;
      }
      if ((eventData == null ? void 0 : eventData.type) === "closeIframe" && (eventData == null ? void 0 : eventData.callFrom) == "sign") {
        console.log("event", eventData);
        setData(eventData == null ? void 0 : eventData.data);
        setIsLoading(false);
        (_a = document.getElementById("sdkSign")) == null ? void 0 : _a.remove();
      }
    };
    window.addEventListener("message", detect);
    return () => {
      window.removeEventListener("message", detect);
    };
  }, []);
  return { data, isLoading, isError, isSuccess: !!data, signMessage };
};

// src/hooks/useContractRead.tsx
var import_react5 = require("react");
var import_ethers = require("ethers");
var import_web = require("@tria-sdk/web");
var useContractRead = (params) => {
  const [data, setData] = (0, import_react5.useState)("");
  const [isLoading, setIsLoading] = (0, import_react5.useState)(false);
  const [isError, setIsError] = (0, import_react5.useState)(false);
  const read = () => __async(void 0, null, function* () {
    try {
      setIsLoading(true);
      const { contractDetails, baseUrl = "https://prod.tria.so" } = params;
      const walletType = { embedded: true };
      const wallet = new import_web.WalletController({
        baseUrl,
        walletType
      });
      const res = yield wallet == null ? void 0 : wallet.readContract(contractDetails);
      const value = import_ethers.ethers.utils.formatEther(res.data);
      console.log("getItemsNativePrice", res.data.toString(), "->", value);
      setData(value);
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
    }
  });
  return { data, isLoading, isError, isSuccess: !!data, read };
};

// src/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
window.Buffer = window.Buffer || require("buffer").Buffer;
var authUrl4 = "https://auth.tria.so";
var authController = new import_core.AuthController("https://staging.tria.so");
var createEncodedData2 = (data) => {
  const encodedParams = btoa(
    JSON.stringify(data)
  );
  return encodedParams;
};
var useTriaTransaction = () => {
  const createIframe2 = (iframeUrl) => {
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
    const iframeEncodedData = createEncodedData2(sendDataFromDapp);
    const sendIframeUrl = `${authUrl4}/send/${iframeEncodedData}`;
    const iframe = createIframe2(sendIframeUrl);
    return sendIframeUrl;
  });
  const signMessage = (message) => __async(void 0, null, function* () {
    const iframeEncodedData = createEncodedData2(message);
    const signIframeUrl = `${authUrl4}/signMessage/${iframeEncodedData}`;
    const iframe = createIframe2(signIframeUrl);
    return signIframeUrl;
  });
  const callContract = (data) => __async(void 0, null, function* () {
    const iframeEncodedData = createEncodedData2(data);
    const signIframeUrl = `${authUrl4}/mint/${iframeEncodedData}`;
    const iframe = createIframe2(signIframeUrl);
    return signIframeUrl;
  });
  return {
    sendTransaction,
    signMessage,
    callContract
  };
};
var TriaConnectProvider = ({ triaStaging = false }) => {
  const [renderAuthIframe, setRenderAuthIframe] = (0, import_react6.useState)(false);
  const [authIframeSrc, setAuthIframeSrc] = (0, import_react6.useState)("");
  (0, import_react6.useEffect)(() => {
    const getQueryParam = (param) => {
      return new URLSearchParams(window.location.search).get(param);
    };
    const isVerified = getQueryParam("verified") === "true";
    setRenderAuthIframe(isVerified);
    {
      triaStaging ? setAuthIframeSrc("https://auth-tria.vercel.app/verified") : setAuthIframeSrc("https://auth.tria.so/verified");
    }
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: renderAuthIframe && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "iframe",
    {
      src: authIframeSrc,
      title: "Auth Verification",
      style: { display: "none" }
    }
  ) });
};
var initialChains = ["POLYGON", "ARBITRUM", "FUSE", "AVALANCHE", "BINANCE", "ETH", "FANTOM", "OPTIMISM"];
var Application = ({ dappName, dappDomain, uiType, logo, primaryColor = "#A855F7", supportedChains = initialChains, defaultChain = "POLYGON", darkMode = true, triaStaging = false, buttonPosition = { x: 100, y: 100 } }) => {
  const [view, setView] = (0, import_react6.useState)("Home");
  const [triaName, setTriaName] = (0, import_react6.useState)();
  const [userAddress, setUserAddress] = (0, import_react6.useState)(null);
  const [email, setEmail] = (0, import_react6.useState)("");
  const [showWallet, setShowWallet] = (0, import_react6.useState)(false);
  const [isDarkMode, setIsDarkMode] = (0, import_react6.useState)(true);
  const [showOnboarding, setShowOnboarding] = (0, import_react6.useState)(false);
  const [appDomain, setAppDomain] = (0, import_react6.useState)();
  const [iframeURL, setIframeURL] = (0, import_react6.useState)();
  const [accessToken, setAccessToken] = (0, import_react6.useState)();
  const [authIFrameUrl, setAuthIFrameUrl] = (0, import_react6.useState)("");
  const { account } = (0, import_connect.useAccount)();
  const [stackui, setStackUi] = (0, import_react6.useState)(false);
  const [wasOpen, setWasOpen] = (0, import_react6.useState)(false);
  const [coords, setCoords] = (0, import_react6.useState)({ x: 0, y: 0 });
  const [walletVisible, setWalletVisible] = (0, import_react6.useState)(false);
  const [posX, setPosX] = (0, import_react6.useState)();
  const [posY, setPosY] = (0, import_react6.useState)();
  const [buttonPosX, setButtonPosX] = (0, import_react6.useState)(window.innerWidth - ((buttonPosition == null ? void 0 : buttonPosition.x) || 100));
  const [buttonPosY, setButtonPosY] = (0, import_react6.useState)(window.innerHeight - ((buttonPosition == null ? void 0 : buttonPosition.y) || 100));
  const [currentTime, setCurrentTime] = (0, import_react6.useState)();
  (0, import_react6.useEffect)(() => {
    const handleWindowMouseMove = (e) => {
      setCoords({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);
    return () => {
      window.removeEventListener(
        "mousemove",
        handleWindowMouseMove
      );
    };
  }, []);
  (0, import_react6.useEffect)(() => {
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
    setButtonPosX(coords.x);
    setButtonPosY(coords.y);
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
    if (currentTime && now.getTime() - currentTime < 200) {
      handleWalletButtonClick();
    }
  };
  (0, import_react6.useEffect)(() => {
    if (!account && triaName) {
      console.log("Account is null, reloading the page");
      localStorage.setItem("hasReloaded", "true");
      window.location.reload();
    }
  }, [account, triaName]);
  (0, import_react6.useEffect)(() => {
    setInterval(() => {
      var _a, _b, _c;
      if (localStorage.getItem("tria.wallet.store") !== null) {
        setShowOnboarding(false);
        setTriaName((_a = JSON.parse(localStorage.getItem("tria.wallet.store") || "")) == null ? void 0 : _a.triaName);
        setUserAddress((_c = (_b = JSON.parse(localStorage.getItem("tria.wallet.store") || "")) == null ? void 0 : _b.evm) == null ? void 0 : _c.address);
      } else if (localStorage.getItem("wagmi.connected") === "true") {
        setShowOnboarding(false);
        const wallet = localStorage.getItem("wagmi.connected");
        console.log(wallet);
      } else {
        setShowOnboarding(true);
      }
    }, 500);
  }, []);
  (0, import_react6.useEffect)(() => {
    setInterval(() => {
      setShowOnboarding(true);
    }, 1e3);
  }, []);
  (0, import_react6.useEffect)(() => {
    const item = localStorage.getItem("access_token");
    setAccessToken(item || "");
    setAppDomain(window.parent.origin);
  }, [triaName]);
  const fromDapp = true;
  (0, import_react6.useEffect)(() => {
    const encodedParams = btoa(JSON.stringify({ triaName, userAddress, appDomain, darkMode, logo, accessToken, primaryColor, fromDapp, dappName, defaultChain, supportedChains }));
    console.log(encodedParams, userAddress, triaName, accessToken, logo, appDomain, darkMode, primaryColor, fromDapp, dappName, defaultChain, supportedChains);
    {
      triaStaging ? setIframeURL(`https://staging-tria-wallet.vercel.app/${encodedParams}`) : setIframeURL(`https://wallet.tria.so/${encodedParams}`);
    }
    ;
  }, [triaName, userAddress]);
  (0, import_react6.useEffect)(() => {
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
  (0, import_react6.useEffect)(() => {
    console.log("log from sdk ----->", dappName, logo);
    if (dappName && (dappName == null ? void 0 : dappName.length) > 0 && logo && (logo == null ? void 0 : logo.length) > 0) {
      {
        triaStaging ? setAuthIFrameUrl(`https://auth-tria.vercel.app/?dappName=${dappName}&dappLogo=${logo}&stackui=${uiType}&dappDomain=${dappDomain}`) : setAuthIFrameUrl(`https://auth.tria.so/?dappName=${dappName}&dappLogo=${logo}&stackui=${uiType}&dappDomain=${dappDomain}`);
      }
      ;
    }
  }, [dappName, logo]);
  (0, import_react6.useEffect)(() => {
    if (uiType === "yes") {
      setStackUi(true);
    }
  }, [uiType]);
  (0, import_react6.useEffect)(() => {
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
  (0, import_react6.useEffect)(() => {
    if (primaryColor) {
      document.documentElement.style.setProperty("--primary-color", primaryColor);
    }
  }, [primaryColor]);
  const handleWalletButtonClick = () => {
    if (showWallet) {
      setWalletVisible(true);
    } else {
      setShowWallet(true);
      setWalletVisible(true);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { position: "fixed", zIndex: 0, height: "100vh", width: "100vw", top: 0, left: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(NavContext_default.Provider, { value: nav_context_object, children: [
    !triaName && showOnboarding && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: {
      borderRadius: "20px",
      overflow: "hidden",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("iframe", { width: "314", height: "586", src: authIFrameUrl, allow: "publickey-credentials-get" }) }),
    showWallet && triaName && userAddress && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          "div",
          {
            style: {
              marginBottom: "4px",
              marginRight: "2px",
              position: "relative",
              borderRadius: "20px"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
                  children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { onClick: () => {
                    setWalletVisible(false);
                  }, style: { cursor: "pointer" }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(WalletCloseButton_default, {}) })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "div",
                {
                  style: {
                    height: "586px",
                    width: "312px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    backgroundColor: "#101010"
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
    triaName && !walletVisible && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { height: "100vh", width: "100vw" }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_react_draggable.default,
      {
        defaultPosition: { x: buttonPosX, y: buttonPosY },
        onStart: handleStartDragging,
        onStop: handleStopDragging,
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
              zIndex: "9999"
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(TriaWalletButton, { bgColor: primaryColor || "#A855F7", stackui })
          }
        )
      }
    ) })
  ] }) });
};
var src_default = Application;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TriaConnectProvider,
  useContractRead,
  useContractWrite,
  useSendTransaction,
  useSignMessage,
  useTriaTransaction
});
//# sourceMappingURL=index.js.map