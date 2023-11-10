"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
  useTriaSendTransaction: () => useTriaSendTransaction
});
module.exports = __toCommonJS(src_exports);

// src/NavContext.tsx
var import_react = require("react");
var NavContext = (0, import_react.createContext)();
var NavContext_default = NavContext;

// src/connect/utils/constants.ts
var eventTypes = {
  logIn: "Log in",
  triaSignUp: "Tria Sign up",
  socialSignUp: "Social Sign up",
  signMessage: "Sign Message",
  send: "Send",
  disconnect: "Disconnect",
  switchChain: "Switch chain"
};

// src/connect/controllers/iframe.controller.ts
var IframeController = class {
  constructor({ parentUrl, walletUrl }) {
    this.parentUrl = parentUrl;
    this.walletUrl = walletUrl;
  }
  getVault({
    triaName,
    password,
    userId
  }) {
    const encodedParams = btoa(
      JSON.stringify({
        op: "getVault",
        triaName,
        password,
        userId
      })
    );
    const iframeUrl = `${this.walletUrl}/login?params=${encodedParams}`;
    const eventType = eventTypes.logIn;
    return { iframeUrl, eventType };
  }
  createAccount({ triaName, password }) {
    const encodedParams = btoa(
      JSON.stringify({
        op: "createAccount",
        triaName,
        password
      })
    );
    const iframeUrl = `${this.walletUrl}/login?params=${encodedParams}`;
    const eventType = eventTypes.triaSignUp;
    return { iframeUrl, eventType };
  }
  socialogin({
    triaName,
    password,
    platform,
    userId,
    isPasswordLess
  }) {
    const encodedParams = btoa(
      JSON.stringify({
        op: "socialogin",
        triaName,
        password,
        userId,
        platform,
        isPasswordLess
      })
    );
    const iframeUrl = `${this.walletUrl}/login?params=${encodedParams}`;
    const eventType = eventTypes.socialSignUp;
    return { iframeUrl, eventType };
  }
  signMessage(chainName, message, loginType, triaName, socialName, userId, input, appDomain, appLogo) {
    return __async(this, null, function* () {
      const encodedParams = btoa(
        JSON.stringify({
          chainName,
          message,
          loginType,
          triaName,
          socialName,
          userId,
          input,
          appDomain,
          appLogo
        })
      );
      const iframeUrl = `${this.walletUrl}/sign?params=${encodedParams}`;
      const signWindow = window.open(iframeUrl, "_blank", `popup,width=400,height=500`);
      const eventType = eventTypes.signMessage;
      return { iframeUrl, eventType };
    });
  }
  send(chainName, payload) {
    return __async(this, null, function* () {
      const encodedParams = btoa(
        JSON.stringify({
          chainName,
          payload
        })
      );
      const iframeUrl = `${this.walletUrl}/send?params=${encodedParams}`;
      const sendWindow = window.open(iframeUrl, "_blank", `popup,width=400,height=500`);
      const eventType = eventTypes.send;
      return { iframeUrl, eventType };
    });
  }
  approve(triaName, chainName, tokenAddress, amount) {
    const encodedParams = btoa(
      JSON.stringify({
        chainName,
        triaName,
        tokenAddress,
        amount
      })
    );
    const iframeUrl = `${this.walletUrl}/approve?params=${encodedParams}`;
    const approveWindow = window.open(iframeUrl, "_blank", `popup,width=400,height=500`);
    const eventType = "Approve";
    return { iframeUrl, eventType };
  }
};

// src/index.tsx
var import_core = require("@tria-sdk/core");
var import_react2 = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
window.Buffer = window.Buffer || require("buffer").Buffer;
var iframe = new IframeController(
  "https://opensea.com",
  "https://wallet.tria.so"
);
console.log("iframe", iframe);
var authController = new import_core.AuthController("https://staging.tria.so");
var createEncodedData = (data) => {
  const encodedParams = btoa(
    JSON.stringify(data)
  );
  return encodedParams;
};
var useTriaSendTransaction = () => {
  const [iframe2, setIframe] = (0, import_react2.useState)("");
  const sendTransaction = (sendDataFromDapp) => __async(void 0, null, function* () {
    const iframeEncodedData = createEncodedData(sendDataFromDapp);
    const sendIframeUrl = `https://auth-7rin.vercel.app/send/${iframeEncodedData}`;
    setIframe(sendIframeUrl);
    return iframe2;
  });
  const signMessage = (message) => __async(void 0, null, function* () {
    const iframeEncodedData = createEncodedData(message);
    const signIframeUrl = `https://auth-7rin.vercel.app/signMessage/${iframeEncodedData}`;
    setIframe(signIframeUrl);
    return iframe2;
  });
  return {
    sendTransaction,
    signMessage
  };
};
var TriaConnectProvider = () => {
  const [renderAuthIframe, setRenderAuthIframe] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    const getQueryParam = (param) => {
      return new URLSearchParams(window.location.search).get(param);
    };
    const isVerified = getQueryParam("verified") === "true";
    setRenderAuthIframe(isVerified);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: renderAuthIframe && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "iframe",
    {
      src: "https://auth.tria.so/verified",
      title: "Auth Verification",
      style: { display: "none" }
    }
  ) });
};
var Application = ({ dappName, logo }) => {
  const [view, setView] = (0, import_react2.useState)("Home");
  const [triaName, setTriaName] = (0, import_react2.useState)(null);
  const [email, setEmail] = (0, import_react2.useState)("");
  const [showWallet, setShowWallet] = (0, import_react2.useState)(false);
  const [isDarkMode, setIsDarkMode] = (0, import_react2.useState)(true);
  const [showOnboarding, setShowOnboarding] = (0, import_react2.useState)(false);
  const [appDomain, setAppDomain] = (0, import_react2.useState)();
  const [iframeURL, setIframeURL] = (0, import_react2.useState)();
  const WALLET_BASE_URL = "https://reliable-semifreddo-e8e93e.netlify.app/";
  const [accessToken, setAccessToken] = (0, import_react2.useState)();
  const darkMode = true;
  (0, import_react2.useEffect)(() => {
    setInterval(() => {
      var _a;
      if (localStorage.getItem("tria.wallet.store") !== null) {
        setShowOnboarding(false);
        setTriaName((_a = JSON.parse(localStorage.getItem("tria.wallet.store"))) == null ? void 0 : _a.triaName);
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
    setAccessToken(item);
    setAppDomain(window.parent.origin);
  }, [triaName]);
  (0, import_react2.useEffect)(() => {
    const encodedParams = btoa(JSON.stringify({ triaName, appDomain, darkMode, logo, accessToken }));
    console.log(encodedParams, triaName, accessToken, logo, appDomain, darkMode);
    setIframeURL(`https://reliable-semifreddo-e8e93e.netlify.app/${encodedParams}`);
  }, [triaName]);
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(NavContext_default.Provider, { value: nav_context_object, children: [
    !triaName && showOnboarding && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-[100vw] h-[100vh] flex items-center justify-center bg-black", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "fixed rounded-[20px] overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", { width: "314", height: "586", src: "https://auth-7rin.vercel.app/" }) }) }),
    showWallet && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg flex  justify-between bg-black", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mb-4 mr-2 fixed right-2 rounded-[20px] bottom-[130px] overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", { width: "312", height: "586", src: iframeURL }) }) }),
    triaName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        className: "wallet_icon fixed w-[80px] bottom-4 right-8 cursor-pointer",
        onClick: () => {
          setShowWallet(!showWallet);
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "relative ", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "left-[15.49px] top-[15.49px]", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { width: "134", height: "134", viewBox: "0 0 134 134", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { filter: "url(#filter0_d_1316_13027)", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "35", y: "35", width: "64", height: "64", rx: "32", fill: "url(#paint0_linear_1316_13027)" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { filter: "url(#filter1_d_1316_13027)", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "37.5098", y: "37.5098", width: "58.9804", height: "58.9804", rx: "29.4902", fill: "url(#paint1_linear_1316_13027)", "shape-rendering": "crispEdges" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { "clip-path": "url(#clip0_1316_13027)", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M81 53H53V81H81V53ZM67.8533 61.2654V64.9058L73.8652 62.5352V65.2285C73.8652 65.8062 73.5281 66.3228 73.0206 66.5229L67.8533 68.5606V65.8728C67.8498 65.2986 67.5136 64.7863 67.0087 64.5872L62.686 62.8826C62.1784 62.6824 61.8414 62.1658 61.8414 61.5881V58.8948L67.8533 61.2654ZM67.8533 68.5767V69.2782H67.8618V76.8857H65.3848V71.2581L62.686 70.1938C62.1784 69.9937 61.8414 69.4771 61.8414 68.8993V66.206L67.8533 68.5767Z", fill: "white" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "37.7598", y: "37.7598", width: "58.4804", height: "58.4804", rx: "29.2402", stroke: "#9A87FF", "stroke-width": "0.5", "shape-rendering": "crispEdges" })
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
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { "stop-color": "white" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "1", "stop-color": "#D2CAF8" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", { id: "paint1_linear_1316_13027", x1: "37.5098", y1: "37.5098", x2: "108.671", y2: "65.3071", gradientUnits: "userSpaceOnUse", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { "stop-color": "#9F8BFF" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "1", "stop-color": "#7053FF" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", { id: "clip0_1316_13027", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", { x: "53", y: "53", width: "28", height: "28", rx: "6", fill: "white" }) })
          ] })
        ] }) }) })
      }
    )
  ] }) });
};
var src_default = Application;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TriaConnectProvider,
  useTriaSendTransaction
});
//# sourceMappingURL=index.js.map