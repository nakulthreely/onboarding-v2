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
  default: () => src_default,
  getDefaultWallets: () => getDefaultWallets
});
module.exports = __toCommonJS(src_exports);
var import_react_router_dom5 = require("react-router-dom");

// src/Pages/Home/index.tsx
var import_react4 = require("react");

// src/Components/Nav.tsx
var import_react2 = require("react");

// src/NavContext.ts
var import_react = require("react");
var NavContext = (0, import_react.createContext)();
var NavContext_default = NavContext;

// src/Components/Nav.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Nav() {
  const { dappName, logo } = (0, import_react2.useContext)(NavContext_default);
  return (
    // <div style={{ fontFamily: 'Montserrat' }}>
    //   <div className="w-[416px] justify-between items-start inline-flex">
    //     <div className="p-2 mix-blend-difference rounded-[39px] flex-col justify-center items-center gap-2 inline-flex">
    //       <div className=" relative" >
    //         <button onClick={() => { navigate("/") }}>
    //           <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    //             <g>
    //               <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5296 14.4697C17.8225 14.7626 17.8225 15.2374 17.5296 15.5303L13.8099 19.25L27.9993 19.25C28.4135 19.25 28.7493 19.5858 28.7493 20C28.7493 20.4142 28.4135 20.75 27.9993 20.75L13.8099 20.75L17.5296 24.4697C17.8225 24.7626 17.8225 25.2374 17.5296 25.5303C17.2367 25.8232 16.7618 25.8232 16.4689 25.5303L11.4689 20.5303C11.3283 20.3897 11.2493 20.1989 11.2493 20C11.2493 19.8011 11.3283 19.6103 11.4689 19.4697L16.4689 14.4697C16.7618 14.1768 17.2367 14.1768 17.5296 14.4697Z" fill="white" fill-opacity="0.8" />
    //             </g>
    //           </svg> </button>
    //       </div>
    //     </div>
    //     <div className="p-3  rounded-[39px] flex-col justify-center items-center gap-2 inline-flex" >
    //       <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <path fill-rule="evenodd" clip-rule="evenodd" d="M0.719671 0.21967C1.01256 -0.0732233 1.48744 -0.0732233 1.78033 0.21967L15.7803 14.2197C16.0732 14.5126 16.0732 14.9874 15.7803 15.2803C15.4874 15.5732 15.0126 15.5732 14.7197 15.2803L0.719671 1.28033C0.426777 0.987437 0.426777 0.512563 0.719671 0.21967Z" fill="#101010" fill-opacity="0.8" />
    //         <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7803 0.21967C15.4874 -0.0732233 15.0126 -0.0732233 14.7197 0.21967L0.71967 14.2197C0.426777 14.5126 0.426777 14.9874 0.71967 15.2803C1.01256 15.5732 1.48744 15.5732 1.78033 15.2803L15.7803 1.28033C16.0732 0.987437 16.0732 0.512563 15.7803 0.21967Z" fill="#101010" fill-opacity="0.8" />
    //       </svg>
    //     </div>
    //   </div>
    //   <div className="h-[221px] px-5 py-6 flex-col justify-center  gap-4 flex">
    //     <div className="self-stretch py-2  justify-center  gap-2 inline-flex">
    //       <div className=" flex-col justify-center  gap-2 inline-flex">
    //         <img className="w-[95px] h-[95px]" src={logo} />
    //       </div>
    //     </div>
    //     <div className="self-stretch h-[46px] py-3 flex-col justify-center items-start gap-4 flex">
    //       <div className="self-stretch justify-center  gap-2 inline-flex">
    //         <div className="text-center text-stone-950 text-opacity-80 text-lg font-medium leading-snug">Login to {dappName}</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dark:bg-fontLightColor", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "w-[416px] justify-between   items-start inline-flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "p-2 mix-blend-difference rounded-[39px] flex-col justify-center items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: " relative", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M17.5296 14.4697C17.8225 14.7626 17.8225 15.2374 17.5296 15.5303L13.8099 19.25L27.9993 19.25C28.4135 19.25 28.7493 19.5858 28.7493 20C28.7493 20.4142 28.4135 20.75 27.9993 20.75L13.8099 20.75L17.5296 24.4697C17.8225 24.7626 17.8225 25.2374 17.5296 25.5303C17.2367 25.8232 16.7618 25.8232 16.4689 25.5303L11.4689 20.5303C11.3283 20.3897 11.2493 20.1989 11.2493 20C11.2493 19.8011 11.3283 19.6103 11.4689 19.4697L16.4689 14.4697C16.7618 14.1768 17.2367 14.1768 17.5296 14.4697Z", fill: "white", "fill-opacity": "0.8" }) }) }) }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "p-3  rounded-[39px] flex-col justify-center  items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M0.719671 0.21967C1.01256 -0.0732233 1.48744 -0.0732233 1.78033 0.21967L15.7803 14.2197C16.0732 14.5126 16.0732 14.9874 15.7803 15.2803C15.4874 15.5732 15.0126 15.5732 14.7197 15.2803L0.719671 1.28033C0.426777 0.987437 0.426777 0.512563 0.719671 0.21967Z", fill: "white", "fill-opacity": "0.8" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M15.7803 0.21967C15.4874 -0.0732233 15.0126 -0.0732233 14.7197 0.21967L0.71967 14.2197C0.426777 14.5126 0.426777 14.9874 0.71967 15.2803C1.01256 15.5732 1.48744 15.5732 1.78033 15.2803L15.7803 1.28033C16.0732 0.987437 16.0732 0.512563 15.7803 0.21967Z", fill: "white", "fill-opacity": "0.8" })
        ] }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "h-[221px] px-5 py-6 flex-col justify-center  gap-4 flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "self-stretch py-2  justify-center  gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: " flex-col justify-center  gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { className: "w-[95px] h-[95px]", src: logo }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "self-stretch h-[46px] py-3 flex-col justify-center items-start gap-4 flex", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "self-stretch justify-center  gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "text-center text-stone-950 dark:text-white text-opacity-80 text-lg font-medium font-Montserrat leading-snug", children: [
          "Login to ",
          dappName
        ] }) }) })
      ] })
    ] })
  );
}

// src/socialLogins/socialLoginConnectors.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function googleIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M22.5595 12.25C22.5595 11.47 22.4895 10.72 22.3595 10H11.9995V14.255H17.9195C17.6645 15.63 16.8895 16.795 15.7245 17.575V20.335H19.2795C21.3595 18.42 22.5595 15.6 22.5595 12.25Z", fill: "#4285F4" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M11.9984 22.9998C14.9684 22.9998 17.4584 22.0148 19.2784 20.3348L15.7234 17.5748C14.7384 18.2348 13.4784 18.6248 11.9984 18.6248C9.13345 18.6248 6.70845 16.6898 5.84345 14.0898H2.16846V16.9398C3.97845 20.5348 7.69845 22.9998 11.9984 22.9998Z", fill: "#34A853" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M5.84475 14.0901C5.62475 13.4301 5.49975 12.7251 5.49975 12.0001C5.49975 11.2751 5.62475 10.5701 5.84475 9.91006V7.06006H2.16976C1.39976 8.59292 0.999077 10.2847 0.999757 12.0001C0.999757 13.7751 1.42476 15.4551 2.16976 16.94L5.84475 14.0901Z", fill: "#FBBC05" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M11.9984 5.375C13.6134 5.375 15.0634 5.92999 16.2034 7.01999L19.3584 3.865C17.4534 2.09 14.9634 1 11.9984 1C7.69845 1 3.97845 3.465 2.16846 7.05999L5.84345 9.90999C6.70845 7.30999 9.13345 5.375 11.9984 5.375Z", fill: "#EA4335" })
  ] });
}
function instaIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M18.375 0H5.625C2.5184 0 0 2.5184 0 5.625V18.375C0 21.4816 2.5184 24 5.625 24H18.375C21.4816 24 24 21.4816 24 18.375V5.625C24 2.5184 21.4816 0 18.375 0Z", fill: "url(#paint0_radial_1628_57)" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M18.375 0H5.625C2.5184 0 0 2.5184 0 5.625V18.375C0 21.4816 2.5184 24 5.625 24H18.375C21.4816 24 24 21.4816 24 18.375V5.625C24 2.5184 21.4816 0 18.375 0Z", fill: "url(#paint1_radial_1628_57)" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M12.0008 2.625C9.45478 2.625 9.13519 2.63616 8.13525 2.68163C7.13719 2.72738 6.45591 2.88534 5.85984 3.11719C5.24316 3.35662 4.72013 3.67697 4.19906 4.19822C3.67753 4.71937 3.35719 5.24241 3.117 5.85881C2.8845 6.45506 2.72634 7.13662 2.68144 8.13422C2.63672 9.13425 2.625 9.45394 2.625 12.0001C2.625 14.5463 2.63625 14.8648 2.68163 15.8647C2.72756 16.8628 2.88553 17.5441 3.11719 18.1402C3.35681 18.7568 3.67716 19.2799 4.19841 19.8009C4.71938 20.3225 5.24241 20.6436 5.85863 20.883C6.45516 21.1148 7.13653 21.2728 8.13441 21.3186C9.13444 21.364 9.45375 21.3752 11.9997 21.3752C14.5461 21.3752 14.8646 21.364 15.8646 21.3186C16.8626 21.2728 17.5447 21.1148 18.1412 20.883C18.7576 20.6436 19.2799 20.3225 19.8007 19.8009C20.3223 19.2799 20.6425 18.7568 20.8828 18.1404C21.1132 17.5441 21.2715 16.8626 21.3184 15.8649C21.3633 14.865 21.375 14.5463 21.375 12.0001C21.375 9.45394 21.3633 9.13444 21.3184 8.13441C21.2715 7.13634 21.1132 6.45516 20.8828 5.85909C20.6425 5.24241 20.3223 4.71937 19.8007 4.19822C19.2793 3.67678 18.7578 3.35644 18.1406 3.11728C17.543 2.88534 16.8613 2.72728 15.8632 2.68163C14.8632 2.63616 14.5448 2.625 11.9979 2.625H12.0008ZM11.1598 4.31447C11.4095 4.31409 11.688 4.31447 12.0008 4.31447C14.5041 4.31447 14.8007 4.32347 15.7892 4.36838C16.7032 4.41019 17.1994 4.56291 17.5298 4.69125C17.9674 4.86113 18.2793 5.06428 18.6072 5.3925C18.9353 5.72063 19.1384 6.03309 19.3088 6.47062C19.4371 6.80062 19.59 7.29675 19.6316 8.21081C19.6765 9.19913 19.6863 9.49594 19.6863 11.9979C19.6863 14.4999 19.6765 14.7968 19.6316 15.7851C19.5898 16.6991 19.4371 17.1952 19.3088 17.5253C19.1389 17.9629 18.9353 18.2744 18.6072 18.6023C18.2791 18.9305 17.9676 19.1335 17.5298 19.3035C17.1998 19.4324 16.7032 19.5848 15.7892 19.6266C14.8009 19.6715 14.5041 19.6812 12.0008 19.6812C9.49753 19.6812 9.20081 19.6715 8.21259 19.6266C7.29853 19.5844 6.80241 19.4317 6.47166 19.3033C6.03422 19.1333 5.72166 18.9303 5.39353 18.6022C5.06541 18.274 4.86234 17.9623 4.692 17.5246C4.56366 17.1945 4.41075 16.6984 4.36913 15.7843C4.32422 14.796 4.31522 14.4992 4.31522 11.9956C4.31522 9.49209 4.32422 9.19678 4.36913 8.20847C4.41094 7.29441 4.56366 6.79828 4.692 6.46781C4.86197 6.03028 5.06541 5.71781 5.39363 5.38969C5.72175 5.06156 6.03422 4.85841 6.47175 4.68816C6.80222 4.55925 7.29853 4.40691 8.21259 4.36491C9.07744 4.32581 9.41259 4.31409 11.1598 4.31212V4.31447ZM17.0052 5.87109C16.3841 5.87109 15.8802 6.37453 15.8802 6.99572C15.8802 7.61681 16.3841 8.12072 17.0052 8.12072C17.6263 8.12072 18.1302 7.61681 18.1302 6.99572C18.1302 6.37463 17.6263 5.87072 17.0052 5.87072V5.87109ZM12.0008 7.18556C9.34209 7.18556 7.18641 9.34125 7.18641 12.0001C7.18641 14.6589 9.34209 16.8136 12.0008 16.8136C14.6597 16.8136 16.8146 14.6589 16.8146 12.0001C16.8146 9.34134 14.6595 7.18556 12.0007 7.18556H12.0008ZM12.0008 8.87503C13.7267 8.87503 15.1259 10.2741 15.1259 12.0001C15.1259 13.7259 13.7267 15.1252 12.0008 15.1252C10.2749 15.1252 8.87588 13.7259 8.87588 12.0001C8.87588 10.2741 10.2749 8.87503 12.0008 8.87503Z", fill: "white" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("defs", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("radialGradient", { id: "paint0_radial_1628_57", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(6.375 25.8485) rotate(-90) scale(23.7858 22.1227)", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("stop", { "stop-color": "#FFDD55" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("stop", { offset: "0.1", "stop-color": "#FFDD55" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("stop", { offset: "0.5", "stop-color": "#FF543E" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("stop", { offset: "1", "stop-color": "#C837AB" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("radialGradient", { id: "paint1_radial_1628_57", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(-4.02009 1.72884) rotate(78.681) scale(10.6324 43.827)", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("stop", { "stop-color": "#3771C8" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("stop", { offset: "0.128", "stop-color": "#3771C8" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("stop", { offset: "1", "stop-color": "#6600FF", "stop-opacity": "0" })
      ] })
    ] })
  ] });
}
function xIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", { "clip-path": "url(#clip0_935_452)", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M15.7425 0.963867H18.7947L12.128 8.63456L19.9995 19.0362H13.8148L8.99549 12.7309L3.45332 19.0362H0.401118L7.5497 10.8434L-0.000488281 0.963867H6.34489L10.7224 6.74701L15.7425 0.963867ZM14.6581 17.1888H16.3449L5.42119 2.69078H3.5738L14.6581 17.1888Z", fill: "black" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_935_452", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "24", height: "20.0723", fill: "white", transform: "translate(0 0.963867)" }) }) })
  ] });
}
function discordIcon() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "24", height: "20", viewBox: "0 0 24 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { "clip-path": "url(#clip0_935_456)", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("mask", { id: "mask0_935_456", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "24", height: "20", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M23.667 0.962402H0.33374V19.0375H23.667V0.962402Z", fill: "white" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", { mask: "url(#mask0_935_456)", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M20.0864 2.57195C18.5992 1.88956 17.0044 1.38681 15.337 1.09886C15.3066 1.09331 15.2763 1.10719 15.2606 1.13497C15.0555 1.49976 14.8283 1.97566 14.6692 2.34972C12.8758 2.08122 11.0915 2.08122 9.33488 2.34972C9.17575 1.96735 8.94031 1.49976 8.73429 1.13497C8.71865 1.10812 8.68831 1.09423 8.65795 1.09886C6.99142 1.38589 5.39664 1.88864 3.90853 2.57195C3.89565 2.5775 3.88461 2.58677 3.87728 2.5988C0.852315 7.11803 0.02365 11.5262 0.430165 15.8797C0.432005 15.901 0.443961 15.9214 0.460516 15.9343C2.4563 17.4 4.38956 18.2898 6.28692 18.8795C6.31729 18.8888 6.34946 18.8777 6.36879 18.8527C6.81761 18.2398 7.21769 17.5935 7.56072 16.9139C7.58097 16.8741 7.56164 16.8269 7.52027 16.8111C6.88567 16.5704 6.2814 16.2769 5.70014 15.9436C5.65416 15.9167 5.65048 15.851 5.69278 15.8195C5.8151 15.7278 5.93745 15.6325 6.05425 15.5362C6.07538 15.5186 6.10482 15.5149 6.12967 15.526C9.94831 17.2694 14.0824 17.2694 17.856 15.526C17.8809 15.514 17.9103 15.5177 17.9324 15.5352C18.0492 15.6315 18.1715 15.7278 18.2948 15.8195C18.3371 15.851 18.3343 15.9167 18.2883 15.9436C17.7071 16.2834 17.1028 16.5704 16.4673 16.8102C16.4259 16.8259 16.4075 16.8741 16.4277 16.9139C16.7781 17.5926 17.1782 18.2388 17.6188 18.8518C17.6372 18.8777 17.6703 18.8888 17.7006 18.8795C19.6072 18.2898 21.5404 17.4 23.5362 15.9343C23.5537 15.9214 23.5647 15.9019 23.5666 15.8806C24.0531 10.8475 22.7517 6.47548 20.1167 2.59972C20.1103 2.58677 20.0993 2.5775 20.0864 2.57195ZM8.13098 13.2289C6.9813 13.2289 6.034 12.1734 6.034 10.8771C6.034 9.58088 6.96293 8.52539 8.13098 8.52539C9.30819 8.52539 10.2463 9.59015 10.2279 10.8771C10.2279 12.1734 9.29899 13.2289 8.13098 13.2289ZM15.8842 13.2289C14.7345 13.2289 13.7872 12.1734 13.7872 10.8771C13.7872 9.58088 14.7161 8.52539 15.8842 8.52539C17.0614 8.52539 17.9995 9.59015 17.9811 10.8771C17.9811 12.1734 17.0614 13.2289 15.8842 13.2289Z", fill: "#5865F2" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("clipPath", { id: "clip0_935_456", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { width: "23.3333", height: "18.0751", fill: "white", transform: "translate(0.333252 0.962402)" }) }) })
  ] });
}
function useSocialLoginConnectors() {
  const google = {
    iconUrl: googleIcon(),
    id: "1",
    type: "google" /* Google */
  };
  const instagram = {
    iconUrl: instaIcon(),
    id: "2",
    type: "instagram" /* Instagram */
  };
  const twitter = {
    iconUrl: xIcon(),
    id: "3",
    type: "X" /* X */
  };
  const discord = {
    iconUrl: discordIcon(),
    id: "4",
    type: "Discord" /* Discord */
  };
  return [google, twitter, discord, instagram];
}

// src/Components/EmailAndSocial.tsx
var import_react3 = require("react");

// src/Components/Iframe.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Iframe = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("iframe", { className: "hidden", src: "https://auth-7rin.vercel.app" });
};
var Iframe_default = Iframe;

// src/Components/EmailAndSocial.tsx
var import_wagmi = require("wagmi");
var import_jsx_runtime4 = require("react/jsx-runtime");
function EmailAndSocial(props) {
  const { setView, authController: authController2, email, setEmail } = (0, import_react3.useContext)(NavContext_default);
  const socialLogins = useSocialLoginConnectors();
  const [authenticated, setAuthenticated] = (0, import_react3.useState)(false);
  const [openIframe, setOpenFrame] = (0, import_react3.useState)(false);
  const { connect, connectors: connectors2 } = (0, import_wagmi.useConnect)();
  const baseUrl = "https://staging.tria.so";
  const socialLoginClicked = (socialLoginIndex) => __async(this, null, function* () {
    const top = window.screenY + window.outerHeight / 2.5;
    const socialNetwork = socialLogins[socialLoginIndex].type;
    localStorage.setItem("socialNetwork", socialNetwork);
    try {
      setOpenFrame(true);
      window.open(`${baseUrl}/api/v1/auth/oauth/${socialNetwork}`, "SSO", `width=${500},height=${600},left=${0},top=${top}`);
    } catch (err) {
      console.log(err);
    }
  });
  (0, import_react3.useEffect)(() => {
    if (authenticated) {
      setTimeout(() => {
        setAuthenticated(false);
      }, 4e3);
    }
  }, [authenticated]);
  const checkEmailExists = () => __async(this, null, function* () {
  });
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
    openIframe === true ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Iframe_default, {}) : null,
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "w-[416px] h-[260px] px-5 py-4 rounded-2xl border border-violet-400 border-opacity-30 flex-col justify-center items-center gap-2 inline-flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "w-[376px] h-[54px] py-3 justify-center items-center gap-4 inline-flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "grow shrink basis-0 h-[22px] justify-start items-center gap-2 flex", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { onClick: props.toggleState2, className: "text-center text-white text-opacity-80 text-lg font-medium font-['Montserrat'] leading-snug", children: "Continue with email" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "justify-start items-start flex", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "px-3 py-1.5 bg-stone-950 bg-opacity-20 rounded-tl-[20px] rounded-bl-[20px] justify-center items-center gap-2 flex", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "w-[18px] h-[18px] justify-center items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "w-[18px] h-[18px] relative" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "px-3 py-1.5 bg-stone-950 bg-opacity-5 rounded-tr-[20px] rounded-br-[20px] justify-center items-center gap-2 flex", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "w-[18px] h-[18px] justify-center items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "w-[18px] h-[18px] relative" }) }) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "self-stretch py-3 justify-center items-center gap-2 inline-flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("input", { className: "grow shrink basis-0 h-10 px-5 py-3 font-Montserrat bg-white bg-opacity-5 rounded-[20px] justify-start items-center flex", type: "email", placeholder: "your@email.com", value: email, onChange: (e) => setEmail(e.target.value) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { onClick: () => setView("Sign In Password"), className: "w-[99px] h-10 px-5 py-3 bg-white rounded-[20px] justify-center items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "justify-center items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "text-center text-black text-base font-semibold font-Montserrat leading-tight", onClick: checkEmailExists, children: "Next" }) }) }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "self-stretch py-3 justify-center items-center gap-2 inline-flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "grow shrink basis-0 h-[0px] border-2 border-white border-opacity-25" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "px-2 justify-center items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "text-center text-white text-opacity-25 text-xs font-semibold font-Montserrat uppercase leading-[14.40px]", children: "OR" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "grow shrink basis-0 h-[0px] border-2 border-white border-opacity-25" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "", children: authenticated === false ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "self-stretch px-5 py-2 justify-center items-center gap-5 inline-flex", children: [
        socialLogins == null ? void 0 : socialLogins.map((social, index3) => {
          return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "w-10 h-10 bg-neutral-50 rounded-[28.33px] shadow flex justify-center items-center ", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { onClick: () => socialLoginClicked(index3), className: "w-6 h-6", children: social == null ? void 0 : social.iconUrl }) }, index3);
        }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "w-10 h-10 bg-neutral-50 rounded-[28.33px] shadow flex justify-center items-center ", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { onClick: () => {
          connect({ connector: connectors2[2] });
        }, className: "w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { width: "28", height: "28", viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { width: "28", height: "28", fill: "#1E1E1E" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { id: "Email - sign up", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M-338 -827C-338 -828.105 -337.105 -829 -336 -829H2281C2282.1 -829 2283 -828.105 2283 -827V228C2283 229.105 2282.1 230 2281 230H-336C-337.105 230 -338 229.105 -338 228V-827Z", fill: "#404040" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { id: "Card", filter: "url(#filter0_ddd_1_2)", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { "clip-path": "url(#clip0_1_2)", children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { x: "-270", y: "-711", width: "448", height: "840", rx: "20", fill: "#101010" }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("g", { id: "Frame 45", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("g", { id: "Modal Content - initial - Black bg", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { id: "Frame 1800", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("g", { id: "div.relative", "clip-path": "url(#clip1_1_2)", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { id: "Frame 1801", filter: "url(#filter1_dd_1_2)", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { x: "-6", y: "-6", width: "40", height: "40", rx: "20", fill: "white", "shape-rendering": "crispEdges" }),
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("g", { id: "Frame 1000003111", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { id: "Wallet", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { width: "28", height: "28", rx: "6", fill: "white" }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { id: "metamask-fox 1", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "Vector", d: "M24.0892 3.12012L15.3447 9.61478L16.9618 5.78302L24.0892 3.12012Z", fill: "#E2761B", stroke: "#E2761B", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { id: "Group", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "Vector_2", d: "M3.9021 3.12012L12.5763 9.6763L11.0383 5.78302L3.9021 3.12012Z", fill: "#E4761B", stroke: "#E4761B", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "Vector_3", d: "M20.943 18.1748L18.614 21.7429L23.5971 23.1139L25.0296 18.2539L20.943 18.1748Z", fill: "#E4761B", stroke: "#E4761B", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "Vector_4", d: "M2.97925 18.2539L4.40298 23.1139L9.38603 21.7429L7.05709 18.1748L2.97925 18.2539Z", fill: "#E4761B", stroke: "#E4761B", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "Vector_5", d: "M9.10488 12.1458L7.71631 14.2462L12.6642 14.4659L12.4884 9.14893L9.10488 12.1458Z", fill: "#E4761B", stroke: "#E4761B", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "Vector_6", d: "M18.8862 12.1458L15.4587 9.0874L15.3445 14.4659L20.2836 14.2462L18.8862 12.1458Z", fill: "#E4761B", stroke: "#E4761B", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "Vector_7", d: "M9.38599 21.7429L12.3565 20.2928L9.79025 18.2891L9.38599 21.7429Z", fill: "#E4761B", stroke: "#E4761B", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "Vector_8", d: "M15.6345 20.2928L18.6138 21.7429L18.2007 18.2891L15.6345 20.2928Z", fill: "#E4761B", stroke: "#E4761B", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" })
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { id: "Group_2", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "Vector_9", d: "M18.6138 21.7426L15.6345 20.2925L15.8718 22.2347L15.8454 23.0521L18.6138 21.7426Z", fill: "#D7C1B3", stroke: "#D7C1B3", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "Vector_10", d: "M9.38599 21.7426L12.1543 23.0521L12.1368 22.2347L12.3565 20.2925L9.38599 21.7426Z", fill: "#D7C1B3", stroke: "#D7C1B3", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" })
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "Vector_11", d: "M12.1983 17.0058L9.71997 16.2763L11.4689 15.4766L12.1983 17.0058Z", fill: "#233447", stroke: "#233447", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "Vector_12", d: "M15.7927 17.0058L16.5222 15.4766L18.2799 16.2763L15.7927 17.0058Z", fill: "#233447", stroke: "#233447", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { id: "Group_3", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "Vector_13", d: "M9.38607 21.7424L9.80791 18.1743L7.05713 18.2534L9.38607 21.7424Z", fill: "#CD6116", stroke: "#CD6116", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "Vector_14", d: "M18.1921 18.1743L18.614 21.7424L20.9429 18.2534L18.1921 18.1743Z", fill: "#CD6116", stroke: "#CD6116", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "Vector_15", d: "M20.2838 14.2461L15.3447 14.4658L15.8017 17.0057L16.5312 15.4765L18.2889 16.2762L20.2838 14.2461Z", fill: "#CD6116", stroke: "#CD6116", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "Vector_16", d: "M9.72007 16.2762L11.4778 15.4765L12.1984 17.0057L12.6642 14.4658L7.71631 14.2461L9.72007 16.2762Z", fill: "#CD6116", stroke: "#CD6116", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" })
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { id: "Group_4", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "Vector_17", d: "M7.71631 14.2461L9.79038 18.2888L9.72007 16.2762L7.71631 14.2461Z", fill: "#E4751F", stroke: "#E4751F", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "Vector_18", d: "M18.2888 16.2762L18.2009 18.2888L20.2838 14.2461L18.2888 16.2762Z", fill: "#E4751F", stroke: "#E4751F", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "Vector_19", d: "M12.6643 14.4658L12.1985 17.0057L12.7785 20.0025L12.9103 16.0565L12.6643 14.4658Z", fill: "#E4751F", stroke: "#E4751F", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "Vector_20", d: "M15.3447 14.4658L15.1074 16.0477L15.2129 20.0025L15.8017 17.0057L15.3447 14.4658Z", fill: "#E4751F", stroke: "#E4751F", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" })
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "Vector_21", d: "M15.8017 17.0058L15.2129 20.0027L15.6347 20.2927L18.201 18.2889L18.2888 16.2764L15.8017 17.0058Z", fill: "#F6851B", stroke: "#F6851B", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "Vector_22", d: "M9.71997 16.2764L9.79028 18.2889L12.3565 20.2927L12.7784 20.0027L12.1983 17.0058L9.71997 16.2764Z", fill: "#F6851B", stroke: "#F6851B", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "Vector_23", d: "M15.8455 23.0522L15.8719 22.2348L15.6522 22.0415H12.3389L12.1368 22.2348L12.1543 23.0522L9.38599 21.7427L10.3527 22.5336L12.3125 23.8958H15.6785L17.6471 22.5336L18.6139 21.7427L15.8455 23.0522Z", fill: "#C0AD9E", stroke: "#C0AD9E", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "Vector_24", d: "M15.6348 20.2925L15.2129 20.0024H12.7785L12.3567 20.2925L12.137 22.2347L12.3391 22.0414H15.6523L15.8721 22.2347L15.6348 20.2925Z", fill: "#161616", stroke: "#161616", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { id: "Group_5", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "Vector_25", d: "M24.4581 10.0366L25.2051 6.45094L24.089 3.12012L15.6345 9.39507L18.8862 12.1459L23.4826 13.4905L24.5021 12.304L24.0626 11.9877L24.7657 11.3461L24.2208 10.9243L24.9239 10.3882L24.4581 10.0366Z", fill: "#763D16", stroke: "#763D16", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "Vector_26", d: "M2.79468 6.45094L3.5417 10.0366L3.06712 10.3882L3.7702 10.9243L3.2341 11.3461L3.93718 11.9877L3.49775 12.304L4.50843 13.4905L9.10478 12.1459L12.3565 9.39507L3.90202 3.12012L2.79468 6.45094Z", fill: "#763D16", stroke: "#763D16", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" })
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "Vector_27", d: "M23.4828 13.4901L18.8864 12.1455L20.2838 14.2459L18.2009 18.2886L20.9429 18.2535H25.0296L23.4828 13.4901Z", fill: "#F6851B", stroke: "#F6851B", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "Vector_28", d: "M9.1048 12.1455L4.50844 13.4901L2.97925 18.2535H7.05709L9.7903 18.2886L7.71622 14.2459L9.1048 12.1455Z", fill: "#F6851B", stroke: "#F6851B", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "Vector_29", d: "M15.3447 14.4657L15.6347 9.39477L16.9705 5.78271H11.0383L12.3566 9.39477L12.6642 14.4657L12.7697 16.0652L12.7784 20.0024H15.2128L15.2304 16.0652L15.3447 14.4657Z", fill: "#F6851B", stroke: "#F6851B", "stroke-width": "0.0878845", "stroke-linecap": "round", "stroke-linejoin": "round" })
                      ] })
                    ] }) })
                  ] }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { x: "-253.25", y: "-201.25", width: "414.5", height: "258.5", rx: "15.25", stroke: "url(#paint0_linear_1_2)", "stroke-opacity": "0.3", "stroke-width": "1.5" })
                ] }) }) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { x: "-269", y: "-710", width: "446", height: "838", rx: "19", stroke: "url(#paint1_linear_1_2)", "stroke-width": "2" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M-336 -828H2281V-830H-336V-828ZM2282 -827V228H2284V-827H2282ZM2281 229H-336V231H2281V229ZM-337 228V-827H-339V228H-337ZM-336 229C-336.552 229 -337 228.552 -337 228H-339C-339 229.657 -337.657 231 -336 231V229ZM2282 228C2282 228.552 2281.55 229 2281 229V231C2282.66 231 2284 229.657 2284 228H2282ZM2281 -828C2281.55 -828 2282 -827.552 2282 -827H2284C2284 -828.657 2282.66 -830 2281 -830V-828ZM-336 -830C-337.657 -830 -339 -828.657 -339 -827H-337C-337 -827.552 -336.552 -828 -336 -828V-830Z", fill: "white", "fill-opacity": "0.1" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("defs", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("filter", { id: "filter0_ddd_1_2", x: "-300", y: "-739", width: "508", height: "900", filterUnits: "userSpaceOnUse", "color-interpolation-filters": "sRGB", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feOffset", {}),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feGaussianBlur", { stdDeviation: "0.5" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0.2 0" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_1_2" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feOffset", { dy: "2" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feGaussianBlur", { stdDeviation: "15" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0.08 0" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feBlend", { mode: "normal", in2: "effect1_dropShadow_1_2", result: "effect2_dropShadow_1_2" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feOffset", {}),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feGaussianBlur", { stdDeviation: "7.5" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0 0.501961 0 0 0 0.03 0" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feBlend", { mode: "normal", in2: "effect2_dropShadow_1_2", result: "effect3_dropShadow_1_2" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect3_dropShadow_1_2", result: "shape" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("filter", { id: "filter1_dd_1_2", x: "-11", y: "-11", width: "50", height: "55", filterUnits: "userSpaceOnUse", "color-interpolation-filters": "sRGB", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feOffset", { dy: "4.99999" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feGaussianBlur", { stdDeviation: "2.5" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.0627451 0 0 0 0 0.0627451 0 0 0 0 0.0627451 0 0 0 0.05 0" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_1_2" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feOffset", {}),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feGaussianBlur", { stdDeviation: "2.5" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.0627451 0 0 0 0 0.0627451 0 0 0 0 0.0627451 0 0 0 0.1 0" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feBlend", { mode: "normal", in2: "effect1_dropShadow_1_2", result: "effect2_dropShadow_1_2" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect2_dropShadow_1_2", result: "shape" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("linearGradient", { id: "paint0_linear_1_2", x1: "-254", y1: "-202", x2: "162", y2: "58", gradientUnits: "userSpaceOnUse", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { "stop-color": "#9F8BFF" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "1", "stop-color": "#7053FF" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("linearGradient", { id: "paint1_linear_1_2", x1: "-270", y1: "-711", x2: "388.451", y2: "-485.496", gradientUnits: "userSpaceOnUse", children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { "stop-color": "#808080", "stop-opacity": "0.05" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "0.523776", "stop-color": "#808080", "stop-opacity": "0" }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("stop", { offset: "1", "stop-color": "#808080", "stop-opacity": "0.15" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("clipPath", { id: "clip0_1_2", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { x: "-270", y: "-711", width: "448", height: "840", rx: "20", fill: "white" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("clipPath", { id: "clip1_1_2", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("rect", { width: "376", height: "56", fill: "white", transform: "translate(-234 -14)" }) })
          ] })
        ] }) }) })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "px-8 py-2 bg-green-400 text-green-700 font-bold font-Montserrat rounded-md", children: "Authenticated" }) })
    ] }) })
  ] });
}

// src/Components/HomeBackgroundVector.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function HomeBackgroundVector() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "svg",
    {
      width: "272",
      height: "250",
      viewBox: "0 0 272 327",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("mask", { id: "path-1-inside-1_178_3818", fill: "white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M0 0L27.768 0L27.768 27.8298L0 27.8298L0 0Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M27.1369 0L54.9049 0L54.9049 27.8298L27.1369 27.8298L27.1369 0Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M54.2738 0L82.0418 0V27.8298L54.2738 27.8298L54.2738 0Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M81.4107 0L109.179 0V27.8298L81.4107 27.8298V0Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M108.548 0L136.316 0V27.8298L108.548 27.8298V0Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M135.684 0L163.452 0V27.8298L135.684 27.8298V0Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M162.821 0L190.589 0V27.8298L162.821 27.8298V0Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M189.958 0L217.726 0V27.8298L189.958 27.8298V0Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M217.095 0L244.863 0V27.8298L217.095 27.8298V0Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M244.232 0L272 0V27.8298L244.232 27.8298V0Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M0 27.1973L27.768 27.1973L27.768 55.0271L0 55.0271L0 27.1973Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M27.1369 27.1973L54.9049 27.1973V55.0271H27.1369L27.1369 27.1973Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M54.2738 27.1973L82.0418 27.1973L82.0418 55.0271L54.2738 55.0271V27.1973Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M81.4107 27.1973L109.179 27.1973L109.179 55.0271H81.4107L81.4107 27.1973Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M108.548 27.1973L136.316 27.1973V55.0271L108.548 55.0271L108.548 27.1973Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M135.684 27.1973L163.452 27.1973V55.0271L135.684 55.0271V27.1973Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M162.821 27.1973L190.589 27.1973V55.0271H162.821V27.1973Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M189.958 27.1973L217.726 27.1973V55.0271L189.958 55.0271V27.1973Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M217.095 27.1973L244.863 27.1973V55.0271L217.095 55.0271V27.1973Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M244.232 27.1973L272 27.1973V55.0271H244.232V27.1973Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M0 54.3946L27.768 54.3946L27.768 82.2244H0L0 54.3946Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M27.1369 54.3946H54.9049L54.9049 82.2244L27.1369 82.2244L27.1369 54.3946Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M54.2738 54.3946L82.0418 54.3946V82.2244H54.2738L54.2738 54.3946Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M81.4107 54.3946H109.179V82.2244H81.4107V54.3946Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M108.548 54.3946L136.316 54.3946V82.2244L108.548 82.2244V54.3946Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M135.684 54.3946L163.452 54.3946V82.2244H135.684V54.3946Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M162.821 54.3946H190.589V82.2244H162.821V54.3946Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M189.958 54.3946L217.726 54.3946V82.2244H189.958V54.3946Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M217.095 54.3946L244.863 54.3946V82.2244L217.095 82.2244V54.3946Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M244.232 54.3946H272V82.2244H244.232V54.3946Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M0 81.5919H27.768L27.768 109.422H0L0 81.5919Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M27.1369 81.5919L54.9049 81.5919V109.422L27.1369 109.422L27.1369 81.5919Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M54.2738 81.5919H82.0418V109.422H54.2738V81.5919Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M81.4107 81.5919H109.179V109.422H81.4107V81.5919Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M108.548 81.5919L136.316 81.5919L136.316 109.422L108.548 109.422V81.5919Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M135.684 81.5919H163.452L163.452 109.422H135.684L135.684 81.5919Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M162.821 81.5919H190.589L190.589 109.422H162.821L162.821 81.5919Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M189.958 81.5919H217.726L217.726 109.422H189.958L189.958 81.5919Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M217.095 81.5919L244.863 81.5919L244.863 109.422L217.095 109.422L217.095 81.5919Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M244.232 81.5919H272V109.422H244.232L244.232 81.5919Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M0 108.789H27.768L27.768 136.619H0L0 108.789Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M27.1369 108.789L54.9049 108.789L54.9049 136.619H27.1369L27.1369 108.789Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M54.2738 108.789H82.0418L82.0418 136.619H54.2738L54.2738 108.789Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M81.4107 108.789H109.179L109.179 136.619L81.4107 136.619L81.4107 108.789Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M108.548 108.789L136.316 108.789V136.619H108.548L108.548 108.789Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M135.684 108.789H163.452V136.619H135.684V108.789Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M162.821 108.789H190.589V136.619H162.821V108.789Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M189.958 108.789H217.726V136.619H189.958V108.789Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M217.095 108.789L244.863 108.789V136.619H217.095V108.789Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M244.232 108.789H272V136.619L244.232 136.619V108.789Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M0 135.986H27.768L27.768 163.816H0L0 135.986Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M27.1369 135.986H54.9049L54.9049 163.816H27.1369L27.1369 135.986Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M54.2738 135.986H82.0418V163.816H54.2738L54.2738 135.986Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M81.4107 135.986L109.179 135.986V163.816L81.4107 163.816V135.986Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M108.548 135.986H136.316V163.816H108.548V135.986Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M135.684 135.986H163.452V163.816H135.684V135.986Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M162.821 135.986H190.589V163.816H162.821V135.986Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M189.958 135.986H217.726V163.816H189.958V135.986Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M217.095 135.986H244.863V163.816H217.095V135.986Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M244.232 135.986L272 135.986V163.816L244.232 163.816V135.986Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M0 163.184H27.768L27.768 191.014H0L0 163.184Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M27.1369 163.184H54.9049V191.014H27.1369L27.1369 163.184Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M54.2738 163.184H82.0418V191.014H54.2738V163.184Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M81.4107 163.184L109.179 163.184V191.014L81.4107 191.014V163.184Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M108.548 163.184H136.316V191.014H108.548V163.184Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M135.684 163.184H163.452V191.014H135.684V163.184Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M162.821 163.184H190.589V191.014H162.821V163.184Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M189.958 163.184H217.726V191.014H189.958V163.184Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M217.095 163.184H244.863V191.014H217.095V163.184Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M244.232 163.184L272 163.184L272 191.014L244.232 191.014V163.184Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M0 190.381H27.768L27.768 218.211H0L0 190.381Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M27.1369 190.381H54.9049L54.9049 218.211H27.1369L27.1369 190.381Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M54.2738 190.381H82.0418V218.211H54.2738L54.2738 190.381Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M81.4107 190.381L109.179 190.381V218.211L81.4107 218.211V190.381Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M108.548 190.381H136.316V218.211H108.548V190.381Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M135.684 190.381H163.452V218.211H135.684V190.381Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M162.821 190.381H190.589V218.211H162.821V190.381Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M189.958 190.381H217.726V218.211H189.958V190.381Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M217.095 190.381H244.863V218.211H217.095V190.381Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M244.232 190.381L272 190.381V218.211L244.232 218.211V190.381Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M0 217.578H27.768L27.768 245.408H0L0 217.578Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M27.1369 217.578H54.9049L54.9049 245.408H27.1369L27.1369 217.578Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M54.2738 217.578H82.0418L82.0418 245.408H54.2738L54.2738 217.578Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M81.4107 217.578L109.179 217.578L109.179 245.408L81.4107 245.408L81.4107 217.578Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M108.548 217.578H136.316V245.408H108.548L108.548 217.578Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M135.684 217.578H163.452V245.408H135.684V217.578Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M162.821 217.578H190.589V245.408H162.821V217.578Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M189.958 217.578H217.726V245.408H189.958V217.578Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M217.095 217.578H244.863V245.408H217.095V217.578Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M244.232 217.578L272 217.578V245.408L244.232 245.408V217.578Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M0 244.776H27.768L27.768 272.605H0L0 244.776Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M27.1369 244.776H54.9049V272.605H27.1369L27.1369 244.776Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M54.2738 244.776H82.0418V272.605H54.2738V244.776Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M81.4107 244.776L109.179 244.776V272.605H81.4107V244.776Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M108.548 244.776H136.316L136.316 272.605H108.548V244.776Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M135.684 244.776H163.452L163.452 272.605H135.684L135.684 244.776Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M162.821 244.776H190.589L190.589 272.605L162.821 272.605L162.821 244.776Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M189.958 244.776H217.726L217.726 272.605H189.958L189.958 244.776Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M217.095 244.776H244.863L244.863 272.605H217.095L217.095 244.776Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M244.232 244.776L272 244.776V272.605H244.232L244.232 244.776Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M0 271.973H27.768L27.768 299.803H0L0 271.973Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M27.1369 271.973H54.9049L54.9049 299.803H27.1369L27.1369 271.973Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M54.2738 271.973H82.0418V299.803H54.2738L54.2738 271.973Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M81.4107 271.973H109.179V299.803H81.4107V271.973Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M108.548 271.973H136.316V299.803H108.548V271.973Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M135.684 271.973H163.452V299.803H135.684V271.973Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M162.821 271.973L190.589 271.973V299.803L162.821 299.803V271.973Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M189.958 271.973H217.726V299.803H189.958V271.973Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M217.095 271.973H244.863V299.803H217.095V271.973Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M244.232 271.973H272V299.803H244.232V271.973Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M0 299.17H27.768L27.768 327H0L0 299.17Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M27.1369 299.17H54.9049V327H27.1369L27.1369 299.17Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M54.2738 299.17H82.0418L82.0418 327H54.2738V299.17Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M81.4107 299.17H109.179L109.179 327H81.4107L81.4107 299.17Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M108.548 299.17H136.316V327H108.548L108.548 299.17Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M135.684 299.17H163.452V327H135.684V299.17Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M162.821 299.17L190.589 299.17V327L162.821 327V299.17Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M189.958 299.17H217.726V327H189.958V299.17Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M217.095 299.17H244.863V327H217.095V299.17Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M244.232 299.17H272V327H244.232V299.17Z" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "path",
          {
            d: "M271.521 27.8298V0L271.217 0V27.8298H271.521ZM271.521 55.0271V27.1973H271.217V55.0271H271.521ZM271.521 82.2244V54.3946H271.217V82.2244H271.521ZM271.521 109.422V81.5919H271.217V109.422H271.521ZM271.521 136.619V108.789H271.217V136.619H271.521ZM271.521 163.816V135.986H271.217V163.816H271.521ZM271.521 191.014L271.521 163.184H271.217L271.217 191.014H271.521ZM271.521 218.211V190.381H271.217V218.211H271.521ZM271.521 245.408V217.578H271.217V245.408H271.521ZM271.521 272.605V244.776H271.217V272.605H271.521ZM271.521 299.803V271.973H271.217V299.803H271.521ZM271.521 327V299.17H271.217V327H271.521ZM0 0L0 -0.303242L-0.303242 -0.303242L-0.303242 0L0 0ZM27.768 0L28.0712 0V-0.303242L27.768 -0.303242V0ZM27.768 27.8298V28.133H28.0712V27.8298H27.768ZM0 27.8298H-0.303242V28.133H0L0 27.8298ZM27.1369 0V-0.303242L26.8336 -0.303242V0L27.1369 0ZM54.9049 0L55.2081 0V-0.303242L54.9049 -0.303242V0ZM54.9049 27.8298V28.133H55.2081V27.8298H54.9049ZM27.1369 27.8298H26.8336V28.133H27.1369V27.8298ZM54.2738 0V-0.303242L53.9705 -0.303242V0L54.2738 0ZM82.0418 0L82.345 0V-0.303242L82.0418 -0.303242V0ZM82.0418 27.8298V28.133H82.345V27.8298H82.0418ZM54.2738 27.8298H53.9705V28.133H54.2738V27.8298ZM81.4107 0V-0.303242L81.1074 -0.303242V0L81.4107 0ZM109.179 0L109.482 0V-0.303242L109.179 -0.303242V0ZM109.179 27.8298V28.133H109.482V27.8298H109.179ZM81.4107 27.8298H81.1074V28.133H81.4107V27.8298ZM108.548 0V-0.303242H108.244V0L108.548 0ZM136.316 0L136.619 0V-0.303242L136.316 -0.303242V0ZM136.316 27.8298V28.133H136.619V27.8298H136.316ZM108.548 27.8298H108.244V28.133H108.548V27.8298ZM135.684 0V-0.303242L135.381 -0.303242V0L135.684 0ZM163.452 0L163.756 0V-0.303242H163.452V0ZM163.452 27.8298V28.133H163.756V27.8298H163.452ZM135.684 27.8298H135.381V28.133H135.684V27.8298ZM162.821 0V-0.303242L162.518 -0.303242V0L162.821 0ZM190.589 0L190.893 0V-0.303242L190.589 -0.303242V0ZM190.589 27.8298V28.133H190.893V27.8298H190.589ZM162.821 27.8298H162.518V28.133H162.821V27.8298ZM189.958 0V-0.303242L189.655 -0.303242V0L189.958 0ZM217.726 0L218.029 0V-0.303242L217.726 -0.303242V0ZM217.726 27.8298V28.133H218.029V27.8298H217.726ZM189.958 27.8298H189.655V28.133H189.958V27.8298ZM217.095 0V-0.303242L216.792 -0.303242V0L217.095 0ZM244.863 0L245.166 0V-0.303242L244.863 -0.303242V0ZM244.863 27.8298V28.133H245.166V27.8298H244.863ZM217.095 27.8298H216.792V28.133H217.095V27.8298ZM244.232 0V-0.303242L243.929 -0.303242V0L244.232 0ZM272 0L272.303 0V-0.303242L272 -0.303242V0ZM272 27.8298V28.133H272.303V27.8298H272ZM244.232 27.8298H243.929V28.133H244.232V27.8298ZM0 27.1973L0 26.8941H-0.303242L-0.303242 27.1973H0ZM27.768 27.1973H28.0712V26.8941H27.768V27.1973ZM27.768 55.0271L27.768 55.3303H28.0712L28.0712 55.0271H27.768ZM0 55.0271H-0.303242L-0.303242 55.3303H0L0 55.0271ZM27.1369 27.1973V26.8941H26.8336V27.1973H27.1369ZM54.9049 27.1973H55.2081V26.8941H54.9049V27.1973ZM54.9049 55.0271V55.3303H55.2081V55.0271H54.9049ZM27.1369 55.0271H26.8336L26.8336 55.3303H27.1369L27.1369 55.0271ZM54.2738 27.1973V26.8941H53.9705V27.1973H54.2738ZM82.0418 27.1973H82.345V26.8941H82.0418V27.1973ZM82.0418 55.0271V55.3303H82.345V55.0271H82.0418ZM54.2738 55.0271H53.9705V55.3303H54.2738V55.0271ZM81.4107 27.1973V26.8941H81.1074V27.1973H81.4107ZM109.179 27.1973H109.482V26.8941H109.179V27.1973ZM109.179 55.0271V55.3303H109.482V55.0271H109.179ZM81.4107 55.0271H81.1074V55.3303H81.4107V55.0271ZM108.548 27.1973V26.8941H108.244V27.1973H108.548ZM136.316 27.1973H136.619V26.8941H136.316V27.1973ZM136.316 55.0271V55.3303H136.619V55.0271H136.316ZM108.548 55.0271H108.244V55.3303H108.548V55.0271ZM135.684 27.1973V26.8941H135.381V27.1973H135.684ZM163.452 27.1973H163.756V26.8941H163.452V27.1973ZM163.452 55.0271V55.3303H163.756V55.0271H163.452ZM135.684 55.0271H135.381V55.3303H135.684V55.0271ZM162.821 27.1973V26.8941H162.518V27.1973H162.821ZM190.589 27.1973H190.893V26.8941H190.589V27.1973ZM190.589 55.0271V55.3303H190.893V55.0271H190.589ZM162.821 55.0271H162.518V55.3303H162.821V55.0271ZM189.958 27.1973V26.8941H189.655V27.1973H189.958ZM217.726 27.1973H218.029V26.8941H217.726V27.1973ZM217.726 55.0271V55.3303H218.029V55.0271H217.726ZM189.958 55.0271H189.655V55.3303H189.958V55.0271ZM217.095 27.1973V26.8941H216.792V27.1973H217.095ZM244.863 27.1973H245.166V26.8941H244.863V27.1973ZM244.863 55.0271V55.3303H245.166V55.0271H244.863ZM217.095 55.0271H216.792V55.3303H217.095V55.0271ZM244.232 27.1973V26.8941H243.929V27.1973H244.232ZM272 27.1973H272.303V26.8941H272V27.1973ZM272 55.0271V55.3303H272.303V55.0271H272ZM244.232 55.0271H243.929V55.3303H244.232V55.0271ZM0 54.3946L0 54.0913H-0.303242L-0.303242 54.3946H0ZM27.768 54.3946H28.0712V54.0913H27.768V54.3946ZM27.768 82.2244V82.5276H28.0712V82.2244H27.768ZM0 82.2244H-0.303242L-0.303242 82.5276H0L0 82.2244ZM27.1369 54.3946V54.0913H26.8336V54.3946H27.1369ZM54.9049 54.3946H55.2081V54.0913H54.9049V54.3946ZM54.9049 82.2244V82.5276H55.2081V82.2244H54.9049ZM27.1369 82.2244H26.8336V82.5276H27.1369V82.2244ZM54.2738 54.3946V54.0913H53.9705V54.3946H54.2738ZM82.0418 54.3946H82.345V54.0913H82.0418V54.3946ZM82.0418 82.2244V82.5276H82.345V82.2244H82.0418ZM54.2738 82.2244H53.9705V82.5276H54.2738V82.2244ZM81.4107 54.3946V54.0913H81.1074V54.3946H81.4107ZM109.179 54.3946H109.482V54.0913H109.179V54.3946ZM109.179 82.2244V82.5276H109.482V82.2244H109.179ZM81.4107 82.2244H81.1074V82.5276H81.4107V82.2244ZM108.548 54.3946V54.0913H108.244V54.3946H108.548ZM136.316 54.3946H136.619V54.0913H136.316V54.3946ZM136.316 82.2244V82.5276H136.619V82.2244H136.316ZM108.548 82.2244H108.244V82.5276H108.548V82.2244ZM135.684 54.3946V54.0913H135.381V54.3946H135.684ZM163.452 54.3946H163.756V54.0913H163.452V54.3946ZM163.452 82.2244V82.5276H163.756V82.2244H163.452ZM135.684 82.2244H135.381V82.5276H135.684V82.2244ZM162.821 54.3946V54.0913H162.518V54.3946H162.821ZM190.589 54.3946H190.893V54.0913H190.589V54.3946ZM190.589 82.2244V82.5276H190.893V82.2244H190.589ZM162.821 82.2244H162.518V82.5276H162.821V82.2244ZM189.958 54.3946V54.0913H189.655V54.3946H189.958ZM217.726 54.3946H218.029V54.0913H217.726V54.3946ZM217.726 82.2244V82.5276H218.029V82.2244H217.726ZM189.958 82.2244H189.655V82.5276H189.958V82.2244ZM217.095 54.3946V54.0913H216.792V54.3946H217.095ZM244.863 54.3946H245.166V54.0913H244.863V54.3946ZM244.863 82.2244V82.5276H245.166V82.2244H244.863ZM217.095 82.2244H216.792V82.5276H217.095V82.2244ZM244.232 54.3946V54.0913H243.929V54.3946H244.232ZM272 54.3946H272.303V54.0913H272V54.3946ZM272 82.2244V82.5276H272.303V82.2244H272ZM244.232 82.2244H243.929V82.5276H244.232V82.2244ZM0 81.5919L0 81.2886H-0.303242L-0.303242 81.5919H0ZM27.768 81.5919H28.0712V81.2886H27.768V81.5919ZM27.768 109.422V109.725H28.0712V109.422H27.768ZM0 109.422H-0.303242L-0.303242 109.725H0L0 109.422ZM27.1369 81.5919V81.2886H26.8336V81.5919H27.1369ZM54.9049 81.5919H55.2081V81.2886H54.9049V81.5919ZM54.9049 109.422V109.725H55.2081V109.422H54.9049ZM27.1369 109.422H26.8336V109.725H27.1369V109.422ZM54.2738 81.5919V81.2886H53.9705V81.5919H54.2738ZM82.0418 81.5919H82.345V81.2886H82.0418V81.5919ZM82.0418 109.422V109.725H82.345V109.422H82.0418ZM54.2738 109.422H53.9705V109.725H54.2738V109.422ZM81.4107 81.5919V81.2886H81.1074V81.5919H81.4107ZM109.179 81.5919H109.482V81.2886H109.179V81.5919ZM109.179 109.422V109.725H109.482V109.422H109.179ZM81.4107 109.422H81.1074V109.725H81.4107V109.422ZM108.548 81.5919V81.2886H108.244V81.5919H108.548ZM136.316 81.5919H136.619V81.2886H136.316V81.5919ZM136.316 109.422V109.725H136.619V109.422H136.316ZM108.548 109.422H108.244V109.725H108.548V109.422ZM135.684 81.5919V81.2886H135.381V81.5919H135.684ZM163.452 81.5919H163.756V81.2886H163.452V81.5919ZM163.452 109.422V109.725H163.756V109.422H163.452ZM135.684 109.422H135.381V109.725H135.684V109.422ZM162.821 81.5919V81.2886H162.518V81.5919H162.821ZM190.589 81.5919H190.893V81.2886H190.589V81.5919ZM190.589 109.422V109.725H190.893V109.422H190.589ZM162.821 109.422H162.518V109.725H162.821V109.422ZM189.958 81.5919V81.2886H189.655V81.5919H189.958ZM217.726 81.5919H218.029V81.2886H217.726V81.5919ZM217.726 109.422V109.725H218.029V109.422H217.726ZM189.958 109.422H189.655V109.725H189.958V109.422ZM217.095 81.5919V81.2886H216.792V81.5919H217.095ZM244.863 81.5919H245.166V81.2886H244.863V81.5919ZM244.863 109.422V109.725H245.166V109.422H244.863ZM217.095 109.422H216.792V109.725H217.095V109.422ZM244.232 81.5919V81.2886H243.929V81.5919H244.232ZM272 81.5919H272.303V81.2886H272V81.5919ZM272 109.422V109.725H272.303V109.422H272ZM244.232 109.422H243.929V109.725H244.232V109.422ZM0 108.789L0 108.486H-0.303242L-0.303242 108.789H0ZM27.768 108.789H28.0712V108.486H27.768V108.789ZM27.768 136.619V136.922H28.0712V136.619H27.768ZM0 136.619H-0.303242L-0.303242 136.922H0L0 136.619ZM27.1369 108.789V108.486H26.8336V108.789H27.1369ZM54.9049 108.789H55.2081V108.486H54.9049V108.789ZM54.9049 136.619V136.922H55.2081V136.619H54.9049ZM27.1369 136.619H26.8336V136.922H27.1369V136.619ZM54.2738 108.789V108.486H53.9705V108.789H54.2738ZM82.0418 108.789H82.345V108.486H82.0418V108.789ZM82.0418 136.619V136.922H82.345V136.619H82.0418ZM54.2738 136.619H53.9705V136.922H54.2738V136.619ZM81.4107 108.789V108.486H81.1074V108.789H81.4107ZM109.179 108.789H109.482V108.486H109.179V108.789ZM109.179 136.619V136.922H109.482V136.619H109.179ZM81.4107 136.619H81.1074V136.922H81.4107V136.619ZM108.548 108.789V108.486H108.244V108.789H108.548ZM136.316 108.789H136.619V108.486H136.316V108.789ZM136.316 136.619V136.922H136.619V136.619H136.316ZM108.548 136.619H108.244V136.922H108.548V136.619ZM135.684 108.789V108.486H135.381V108.789H135.684ZM163.452 108.789H163.756V108.486H163.452V108.789ZM163.452 136.619V136.922H163.756V136.619H163.452ZM135.684 136.619H135.381V136.922H135.684V136.619ZM162.821 108.789V108.486H162.518V108.789H162.821ZM190.589 108.789H190.893V108.486H190.589V108.789ZM190.589 136.619V136.922H190.893V136.619H190.589ZM162.821 136.619H162.518V136.922H162.821V136.619ZM189.958 108.789V108.486H189.655V108.789H189.958ZM217.726 108.789H218.029V108.486H217.726V108.789ZM217.726 136.619V136.922H218.029V136.619H217.726ZM189.958 136.619H189.655V136.922H189.958V136.619ZM217.095 108.789V108.486H216.792V108.789H217.095ZM244.863 108.789H245.166V108.486H244.863V108.789ZM244.863 136.619V136.922H245.166V136.619H244.863ZM217.095 136.619H216.792V136.922H217.095V136.619ZM244.232 108.789V108.486H243.929V108.789H244.232ZM272 108.789H272.303V108.486H272V108.789ZM272 136.619V136.922H272.303V136.619H272ZM244.232 136.619H243.929V136.922H244.232V136.619ZM0 135.986L0 135.683H-0.303242L-0.303242 135.986H0ZM27.768 135.986H28.0712V135.683H27.768V135.986ZM27.768 163.816V164.119H28.0712V163.816H27.768ZM0 163.816H-0.303242V164.119H0L0 163.816ZM27.1369 135.986V135.683H26.8336V135.986H27.1369ZM54.9049 135.986H55.2081V135.683H54.9049V135.986ZM54.9049 163.816V164.119H55.2081V163.816H54.9049ZM27.1369 163.816H26.8336V164.119H27.1369V163.816ZM54.2738 135.986V135.683H53.9705V135.986H54.2738ZM82.0418 135.986H82.345V135.683H82.0418V135.986ZM82.0418 163.816V164.119H82.345V163.816H82.0418ZM54.2738 163.816H53.9705V164.119H54.2738V163.816ZM81.4107 135.986V135.683H81.1074V135.986H81.4107ZM109.179 135.986H109.482V135.683H109.179V135.986ZM109.179 163.816V164.119H109.482V163.816H109.179ZM81.4107 163.816H81.1074V164.119H81.4107V163.816ZM108.548 135.986V135.683H108.244V135.986H108.548ZM136.316 135.986H136.619V135.683H136.316V135.986ZM136.316 163.816V164.119H136.619V163.816H136.316ZM108.548 163.816H108.244V164.119H108.548V163.816ZM135.684 135.986V135.683H135.381V135.986H135.684ZM163.452 135.986H163.756V135.683H163.452V135.986ZM163.452 163.816V164.119H163.756V163.816H163.452ZM135.684 163.816H135.381V164.119H135.684V163.816ZM162.821 135.986V135.683H162.518V135.986H162.821ZM190.589 135.986H190.893V135.683H190.589V135.986ZM190.589 163.816V164.119H190.893V163.816H190.589ZM162.821 163.816H162.518V164.119H162.821V163.816ZM189.958 135.986V135.683H189.655V135.986H189.958ZM217.726 135.986H218.029V135.683H217.726V135.986ZM217.726 163.816V164.119H218.029V163.816H217.726ZM189.958 163.816H189.655V164.119H189.958V163.816ZM217.095 135.986V135.683H216.792V135.986H217.095ZM244.863 135.986H245.166V135.683H244.863V135.986ZM244.863 163.816V164.119H245.166V163.816H244.863ZM217.095 163.816H216.792V164.119H217.095V163.816ZM244.232 135.986V135.683H243.929V135.986H244.232ZM272 135.986H272.303V135.683H272V135.986ZM272 163.816V164.119H272.303V163.816H272ZM244.232 163.816H243.929V164.119H244.232V163.816ZM0 163.184L0 162.881H-0.303242L-0.303242 163.184H0ZM27.768 163.184H28.0712V162.881H27.768V163.184ZM27.768 191.014V191.317H28.0712V191.014H27.768ZM0 191.014H-0.303242L-0.303242 191.317H0L0 191.014ZM27.1369 163.184V162.881H26.8336V163.184H27.1369ZM54.9049 163.184H55.2081V162.881H54.9049V163.184ZM54.9049 191.014V191.317H55.2081V191.014H54.9049ZM27.1369 191.014H26.8336V191.317H27.1369V191.014ZM54.2738 163.184V162.881H53.9705V163.184H54.2738ZM82.0418 163.184H82.345V162.881H82.0418V163.184ZM82.0418 191.014V191.317H82.345V191.014H82.0418ZM54.2738 191.014H53.9705V191.317H54.2738V191.014ZM81.4107 163.184V162.881H81.1074V163.184H81.4107ZM109.179 163.184H109.482V162.881H109.179V163.184ZM109.179 191.014V191.317H109.482V191.014H109.179ZM81.4107 191.014H81.1074V191.317H81.4107V191.014ZM108.548 163.184V162.881H108.244V163.184H108.548ZM136.316 163.184H136.619V162.881H136.316V163.184ZM136.316 191.014V191.317H136.619V191.014H136.316ZM108.548 191.014H108.244V191.317H108.548V191.014ZM135.684 163.184V162.881H135.381V163.184H135.684ZM163.452 163.184H163.756V162.881H163.452V163.184ZM163.452 191.014V191.317H163.756V191.014H163.452ZM135.684 191.014H135.381V191.317H135.684V191.014ZM162.821 163.184V162.881H162.518V163.184H162.821ZM190.589 163.184H190.893V162.881H190.589V163.184ZM190.589 191.014V191.317H190.893V191.014H190.589ZM162.821 191.014H162.518V191.317H162.821V191.014ZM189.958 163.184V162.881H189.655V163.184H189.958ZM217.726 163.184H218.029V162.881H217.726V163.184ZM217.726 191.014V191.317H218.029V191.014H217.726ZM189.958 191.014H189.655V191.317H189.958V191.014ZM217.095 163.184V162.881H216.792V163.184H217.095ZM244.863 163.184H245.166V162.881H244.863V163.184ZM244.863 191.014V191.317H245.166V191.014H244.863ZM217.095 191.014H216.792V191.317H217.095V191.014ZM244.232 163.184V162.881H243.929V163.184H244.232ZM272 163.184H272.303V162.881H272V163.184ZM272 191.014V191.317H272.303V191.014H272ZM244.232 191.014H243.929V191.317H244.232V191.014ZM0 190.381L0 190.078H-0.303242L-0.303242 190.381H0ZM27.768 190.381H28.0712V190.078H27.768V190.381ZM27.768 218.211V218.514H28.0712V218.211H27.768ZM0 218.211H-0.303242L-0.303242 218.514H0L0 218.211ZM27.1369 190.381V190.078H26.8336V190.381H27.1369ZM54.9049 190.381H55.2081V190.078H54.9049V190.381ZM54.9049 218.211V218.514H55.2081V218.211H54.9049ZM27.1369 218.211H26.8336V218.514H27.1369V218.211ZM54.2738 190.381V190.078H53.9705V190.381H54.2738ZM82.0418 190.381H82.345V190.078H82.0418V190.381ZM82.0418 218.211V218.514H82.345V218.211H82.0418ZM54.2738 218.211H53.9705V218.514H54.2738V218.211ZM81.4107 190.381V190.078H81.1074V190.381H81.4107ZM109.179 190.381H109.482V190.078H109.179V190.381ZM109.179 218.211V218.514H109.482V218.211H109.179ZM81.4107 218.211H81.1074V218.514H81.4107V218.211ZM108.548 190.381V190.078H108.244V190.381H108.548ZM136.316 190.381H136.619V190.078H136.316V190.381ZM136.316 218.211V218.514H136.619V218.211H136.316ZM108.548 218.211H108.244V218.514H108.548V218.211ZM135.684 190.381V190.078H135.381V190.381H135.684ZM163.452 190.381H163.756V190.078H163.452V190.381ZM163.452 218.211V218.514H163.756V218.211H163.452ZM135.684 218.211H135.381V218.514H135.684V218.211ZM162.821 190.381V190.078H162.518V190.381H162.821ZM190.589 190.381H190.893V190.078H190.589V190.381ZM190.589 218.211V218.514H190.893V218.211H190.589ZM162.821 218.211H162.518V218.514H162.821V218.211ZM189.958 190.381V190.078H189.655V190.381H189.958ZM217.726 190.381H218.029V190.078H217.726V190.381ZM217.726 218.211V218.514H218.029V218.211H217.726ZM189.958 218.211H189.655V218.514H189.958V218.211ZM217.095 190.381V190.078H216.792V190.381H217.095ZM244.863 190.381H245.166V190.078H244.863V190.381ZM244.863 218.211V218.514H245.166V218.211H244.863ZM217.095 218.211H216.792V218.514H217.095V218.211ZM244.232 190.381V190.078H243.929V190.381H244.232ZM272 190.381H272.303V190.078H272V190.381ZM272 218.211V218.514H272.303V218.211H272ZM244.232 218.211H243.929V218.514H244.232V218.211ZM0 217.578L0 217.275H-0.303242L-0.303242 217.578H0ZM27.768 217.578H28.0712V217.275H27.768V217.578ZM27.768 245.408V245.711H28.0712V245.408H27.768ZM0 245.408H-0.303242L-0.303242 245.711H0L0 245.408ZM27.1369 217.578V217.275H26.8336V217.578H27.1369ZM54.9049 217.578H55.2081V217.275H54.9049V217.578ZM54.9049 245.408V245.711H55.2081V245.408H54.9049ZM27.1369 245.408H26.8336V245.711H27.1369V245.408ZM54.2738 217.578V217.275H53.9705V217.578H54.2738ZM82.0418 217.578H82.345V217.275H82.0418V217.578ZM82.0418 245.408V245.711H82.345V245.408H82.0418ZM54.2738 245.408H53.9705V245.711H54.2738V245.408ZM81.4107 217.578V217.275H81.1074V217.578H81.4107ZM109.179 217.578H109.482V217.275H109.179V217.578ZM109.179 245.408V245.711H109.482V245.408H109.179ZM81.4107 245.408H81.1074V245.711H81.4107V245.408ZM108.548 217.578V217.275H108.244V217.578H108.548ZM136.316 217.578H136.619V217.275H136.316V217.578ZM136.316 245.408V245.711H136.619V245.408H136.316ZM108.548 245.408H108.244V245.711H108.548V245.408ZM135.684 217.578V217.275H135.381V217.578H135.684ZM163.452 217.578H163.756V217.275H163.452V217.578ZM163.452 245.408V245.711H163.756V245.408H163.452ZM135.684 245.408H135.381V245.711H135.684V245.408ZM162.821 217.578V217.275H162.518V217.578H162.821ZM190.589 217.578H190.893V217.275H190.589V217.578ZM190.589 245.408V245.711H190.893V245.408H190.589ZM162.821 245.408H162.518V245.711H162.821V245.408ZM189.958 217.578V217.275H189.655V217.578H189.958ZM217.726 217.578H218.029V217.275H217.726V217.578ZM217.726 245.408V245.711H218.029V245.408H217.726ZM189.958 245.408H189.655V245.711H189.958V245.408ZM217.095 217.578V217.275H216.792V217.578H217.095ZM244.863 217.578H245.166V217.275H244.863V217.578ZM244.863 245.408V245.711H245.166V245.408H244.863ZM217.095 245.408H216.792V245.711H217.095V245.408ZM244.232 217.578V217.275H243.929V217.578H244.232ZM272 217.578H272.303V217.275H272V217.578ZM272 245.408V245.711H272.303V245.408H272ZM244.232 245.408H243.929V245.711H244.232V245.408ZM0 244.776L0 244.472H-0.303242L-0.303242 244.776H0ZM27.768 244.776H28.0712V244.472H27.768V244.776ZM27.768 272.605V272.909H28.0712V272.605H27.768ZM0 272.605H-0.303242L-0.303242 272.909H0L0 272.605ZM27.1369 244.776V244.472H26.8336V244.776H27.1369ZM54.9049 244.776H55.2081V244.472H54.9049V244.776ZM54.9049 272.605V272.909H55.2081V272.605H54.9049ZM27.1369 272.605H26.8336V272.909H27.1369V272.605ZM54.2738 244.776V244.472H53.9705V244.776H54.2738ZM82.0418 244.776H82.345V244.472H82.0418V244.776ZM82.0418 272.605V272.909H82.345V272.605H82.0418ZM54.2738 272.605H53.9705V272.909H54.2738V272.605ZM81.4107 244.776V244.472H81.1074V244.776H81.4107ZM109.179 244.776H109.482V244.472H109.179V244.776ZM109.179 272.605V272.909H109.482V272.605H109.179ZM81.4107 272.605H81.1074V272.909H81.4107V272.605ZM108.548 244.776V244.472H108.244V244.776H108.548ZM136.316 244.776H136.619V244.472H136.316V244.776ZM136.316 272.605V272.909H136.619V272.605H136.316ZM108.548 272.605H108.244V272.909H108.548V272.605ZM135.684 244.776V244.472H135.381V244.776H135.684ZM163.452 244.776H163.756V244.472H163.452V244.776ZM163.452 272.605V272.909H163.756V272.605H163.452ZM135.684 272.605H135.381V272.909H135.684V272.605ZM162.821 244.776V244.472H162.518V244.776H162.821ZM190.589 244.776H190.893V244.472H190.589V244.776ZM190.589 272.605V272.909H190.893V272.605H190.589ZM162.821 272.605H162.518V272.909H162.821V272.605ZM189.958 244.776V244.472H189.655V244.776H189.958ZM217.726 244.776H218.029V244.472H217.726V244.776ZM217.726 272.605V272.909H218.029V272.605H217.726ZM189.958 272.605H189.655V272.909H189.958V272.605ZM217.095 244.776V244.472H216.792V244.776H217.095ZM244.863 244.776H245.166V244.472H244.863V244.776ZM244.863 272.605V272.909H245.166V272.605H244.863ZM217.095 272.605H216.792V272.909H217.095V272.605ZM244.232 244.776V244.472H243.929V244.776H244.232ZM272 244.776H272.303V244.472H272V244.776ZM272 272.605V272.909H272.303V272.605H272ZM244.232 272.605H243.929V272.909H244.232V272.605ZM0 271.973L0 271.67H-0.303242L-0.303242 271.973H0ZM27.768 271.973H28.0712V271.67H27.768V271.973ZM27.768 299.803V300.106H28.0712V299.803H27.768ZM0 299.803H-0.303242V300.106H0L0 299.803ZM27.1369 271.973V271.67H26.8336V271.973H27.1369ZM54.9049 271.973H55.2081V271.67H54.9049V271.973ZM54.9049 299.803V300.106H55.2081V299.803H54.9049ZM27.1369 299.803H26.8336V300.106H27.1369V299.803ZM54.2738 271.973V271.67H53.9705V271.973H54.2738ZM82.0418 271.973H82.345V271.67H82.0418V271.973ZM82.0418 299.803V300.106H82.345V299.803H82.0418ZM54.2738 299.803H53.9705V300.106H54.2738V299.803ZM81.4107 271.973V271.67H81.1074V271.973H81.4107ZM109.179 271.973H109.482V271.67H109.179V271.973ZM109.179 299.803V300.106H109.482V299.803H109.179ZM81.4107 299.803H81.1074V300.106H81.4107V299.803ZM108.548 271.973V271.67H108.244V271.973H108.548ZM136.316 271.973H136.619V271.67H136.316V271.973ZM136.316 299.803V300.106H136.619V299.803H136.316ZM108.548 299.803H108.244V300.106H108.548V299.803ZM135.684 271.973V271.67H135.381V271.973H135.684ZM163.452 271.973H163.756V271.67H163.452V271.973ZM163.452 299.803V300.106H163.756V299.803H163.452ZM135.684 299.803H135.381V300.106H135.684V299.803ZM162.821 271.973V271.67H162.518V271.973H162.821ZM190.589 271.973H190.893V271.67H190.589V271.973ZM190.589 299.803V300.106H190.893V299.803H190.589ZM162.821 299.803H162.518V300.106H162.821V299.803ZM189.958 271.973V271.67H189.655V271.973H189.958ZM217.726 271.973H218.029V271.67H217.726V271.973ZM217.726 299.803V300.106H218.029V299.803H217.726ZM189.958 299.803H189.655V300.106H189.958V299.803ZM217.095 271.973V271.67H216.792V271.973H217.095ZM244.863 271.973H245.166V271.67H244.863V271.973ZM244.863 299.803V300.106H245.166V299.803H244.863ZM217.095 299.803H216.792V300.106H217.095V299.803ZM244.232 271.973V271.67H243.929V271.973H244.232ZM272 271.973H272.303V271.67H272V271.973ZM272 299.803V300.106H272.303V299.803H272ZM244.232 299.803H243.929V300.106H244.232V299.803ZM0 299.17L0 298.867H-0.303242L-0.303242 299.17H0ZM27.768 299.17H28.0712V298.867H27.768V299.17ZM27.768 327V327.303H28.0712V327H27.768ZM0 327H-0.303242L-0.303242 327.303H0L0 327ZM27.1369 299.17V298.867H26.8336V299.17H27.1369ZM54.9049 299.17H55.2081V298.867H54.9049V299.17ZM54.9049 327V327.303H55.2081V327H54.9049ZM27.1369 327H26.8336V327.303H27.1369V327ZM54.2738 299.17V298.867H53.9705V299.17H54.2738ZM82.0418 299.17H82.345V298.867H82.0418V299.17ZM82.0418 327V327.303H82.345V327H82.0418ZM54.2738 327H53.9705V327.303H54.2738V327ZM81.4107 299.17V298.867H81.1074V299.17H81.4107ZM109.179 299.17H109.482V298.867H109.179V299.17ZM109.179 327V327.303H109.482V327H109.179ZM81.4107 327H81.1074V327.303H81.4107V327ZM108.548 299.17V298.867H108.244V299.17H108.548ZM136.316 299.17H136.619V298.867H136.316V299.17ZM136.316 327V327.303H136.619V327H136.316ZM108.548 327H108.244V327.303H108.548V327ZM135.684 299.17V298.867H135.381V299.17H135.684ZM163.452 299.17H163.756V298.867H163.452V299.17ZM163.452 327V327.303H163.756V327H163.452ZM135.684 327H135.381V327.303H135.684V327ZM162.821 299.17V298.867H162.518V299.17H162.821ZM190.589 299.17H190.893V298.867H190.589V299.17ZM190.589 327V327.303H190.893V327H190.589ZM162.821 327H162.518V327.303H162.821V327ZM189.958 299.17V298.867H189.655V299.17H189.958ZM217.726 299.17H218.029V298.867H217.726V299.17ZM217.726 327V327.303H218.029V327H217.726ZM189.958 327H189.655V327.303H189.958V327ZM217.095 299.17V298.867H216.792V299.17H217.095ZM244.863 299.17H245.166V298.867H244.863V299.17ZM244.863 327V327.303H245.166V327H244.863ZM217.095 327H216.792V327.303H217.095V327ZM244.232 299.17V298.867H243.929V299.17H244.232ZM272 299.17H272.303V298.867H272V299.17ZM272 327V327.303H272.303V327H272ZM244.232 327H243.929V327.303H244.232V327ZM0 0.303242L27.768 0.303242V-0.303242L0 -0.303242L0 0.303242ZM27.4647 0L27.4647 27.8298H28.0712L28.0712 0L27.4647 0ZM27.768 27.5265L0 27.5265L0 28.133L27.768 28.133V27.5265ZM0.303242 27.8298L0.303242 0L-0.303242 0L-0.303242 27.8298H0.303242ZM27.1369 0.303242L54.9049 0.303242V-0.303242L27.1369 -0.303242V0.303242ZM54.6016 0L54.6016 27.8298H55.2081L55.2081 0L54.6016 0ZM54.9049 27.5265L27.1369 27.5265V28.133L54.9049 28.133V27.5265ZM27.4401 27.8298L27.4401 0L26.8336 0L26.8336 27.8298H27.4401ZM54.2738 0.303242L82.0418 0.303242V-0.303242L54.2738 -0.303242V0.303242ZM81.7385 0V27.8298H82.345V0L81.7385 0ZM82.0418 27.5265L54.2738 27.5265V28.133L82.0418 28.133V27.5265ZM54.577 27.8298L54.577 0L53.9705 0L53.9705 27.8298H54.577ZM81.4107 0.303242L109.179 0.303242V-0.303242L81.4107 -0.303242V0.303242ZM108.875 0V27.8298H109.482V0L108.875 0ZM109.179 27.5265L81.4107 27.5265V28.133L109.179 28.133V27.5265ZM81.7139 27.8298V0L81.1074 0V27.8298H81.7139ZM108.548 0.303242L136.316 0.303242V-0.303242L108.548 -0.303242V0.303242ZM136.012 0V27.8298H136.619V0L136.012 0ZM136.316 27.5265L108.548 27.5265V28.133L136.316 28.133V27.5265ZM108.851 27.8298V0L108.244 0V27.8298H108.851ZM135.684 0.303242L163.452 0.303242V-0.303242L135.684 -0.303242V0.303242ZM163.149 0V27.8298H163.756V0L163.149 0ZM163.452 27.5265L135.684 27.5265V28.133L163.452 28.133V27.5265ZM135.988 27.8298V0L135.381 0V27.8298H135.988ZM162.821 0.303242L190.589 0.303242V-0.303242L162.821 -0.303242V0.303242ZM190.286 0V27.8298H190.893V0L190.286 0ZM190.589 27.5265L162.821 27.5265V28.133L190.589 28.133V27.5265ZM163.125 27.8298V0L162.518 0V27.8298H163.125ZM189.958 0.303242L217.726 0.303242V-0.303242L189.958 -0.303242V0.303242ZM217.423 0V27.8298H218.029V0L217.423 0ZM217.726 27.5265L189.958 27.5265V28.133L217.726 28.133V27.5265ZM190.261 27.8298V0L189.655 0V27.8298H190.261ZM217.095 0.303242L244.863 0.303242V-0.303242L217.095 -0.303242V0.303242ZM244.56 0V27.8298H245.166V0L244.56 0ZM244.863 27.5265L217.095 27.5265V28.133L244.863 28.133V27.5265ZM217.398 27.8298V0L216.792 0V27.8298H217.398ZM244.232 0.303242L272 0.303242V-0.303242L244.232 -0.303242V0.303242ZM271.697 0V27.8298H272.303V0L271.697 0ZM272 27.5265L244.232 27.5265V28.133L272 28.133V27.5265ZM244.535 27.8298V0L243.929 0V27.8298H244.535ZM0 27.5005L27.768 27.5005V26.8941L0 26.8941L0 27.5005ZM27.4647 27.1973L27.4647 55.0271H28.0712L28.0712 27.1973H27.4647ZM27.768 54.7238L0 54.7238L0 55.3303L27.768 55.3303L27.768 54.7238ZM0.303242 55.0271L0.303242 27.1973H-0.303242L-0.303242 55.0271H0.303242ZM27.1369 27.5005L54.9049 27.5005V26.8941L27.1369 26.8941V27.5005ZM54.6016 27.1973V55.0271H55.2081V27.1973H54.6016ZM54.9049 54.7238H27.1369L27.1369 55.3303H54.9049V54.7238ZM27.4401 55.0271L27.4401 27.1973H26.8336L26.8336 55.0271H27.4401ZM54.2738 27.5005L82.0418 27.5005V26.8941L54.2738 26.8941V27.5005ZM81.7385 27.1973L81.7385 55.0271H82.345L82.345 27.1973H81.7385ZM82.0418 54.7238L54.2738 54.7238V55.3303L82.0418 55.3303V54.7238ZM54.577 55.0271V27.1973H53.9705V55.0271H54.577ZM81.4107 27.5005L109.179 27.5005V26.8941L81.4107 26.8941V27.5005ZM108.875 27.1973L108.875 55.0271H109.482L109.482 27.1973H108.875ZM109.179 54.7238H81.4107V55.3303H109.179V54.7238ZM81.7139 55.0271L81.7139 27.1973H81.1074L81.1074 55.0271H81.7139ZM108.548 27.5005L136.316 27.5005V26.8941L108.548 26.8941V27.5005ZM136.012 27.1973V55.0271H136.619V27.1973H136.012ZM136.316 54.7238L108.548 54.7238V55.3303L136.316 55.3303V54.7238ZM108.851 55.0271L108.851 27.1973H108.244L108.244 55.0271H108.851ZM135.684 27.5005L163.452 27.5005V26.8941L135.684 26.8941V27.5005ZM163.149 27.1973V55.0271H163.756V27.1973H163.149ZM163.452 54.7238L135.684 54.7238V55.3303L163.452 55.3303V54.7238ZM135.988 55.0271V27.1973H135.381V55.0271H135.988ZM162.821 27.5005L190.589 27.5005V26.8941L162.821 26.8941V27.5005ZM190.286 27.1973V55.0271H190.893V27.1973H190.286ZM190.589 54.7238H162.821V55.3303H190.589V54.7238ZM163.125 55.0271V27.1973H162.518V55.0271H163.125ZM189.958 27.5005L217.726 27.5005V26.8941L189.958 26.8941V27.5005ZM217.423 27.1973V55.0271H218.029V27.1973H217.423ZM217.726 54.7238L189.958 54.7238V55.3303L217.726 55.3303V54.7238ZM190.261 55.0271V27.1973H189.655V55.0271H190.261ZM217.095 27.5005L244.863 27.5005V26.8941L217.095 26.8941V27.5005ZM244.56 27.1973V55.0271H245.166V27.1973H244.56ZM244.863 54.7238L217.095 54.7238V55.3303L244.863 55.3303V54.7238ZM217.398 55.0271V27.1973H216.792V55.0271H217.398ZM244.232 27.5005L272 27.5005V26.8941L244.232 26.8941V27.5005ZM271.697 27.1973V55.0271H272.303V27.1973H271.697ZM272 54.7238H244.232V55.3303H272V54.7238ZM244.535 55.0271V27.1973H243.929V55.0271H244.535ZM0 54.6978L27.768 54.6978V54.0913L0 54.0913L0 54.6978ZM27.4647 54.3946L27.4647 82.2244H28.0712L28.0712 54.3946H27.4647ZM27.768 81.9211H0L0 82.5276H27.768V81.9211ZM0.303242 82.2244L0.303242 54.3946H-0.303242L-0.303242 82.2244H0.303242ZM27.1369 54.6978H54.9049V54.0913H27.1369V54.6978ZM54.6016 54.3946L54.6016 82.2244H55.2081L55.2081 54.3946H54.6016ZM54.9049 81.9211L27.1369 81.9211V82.5276L54.9049 82.5276V81.9211ZM27.4401 82.2244L27.4401 54.3946H26.8336L26.8336 82.2244H27.4401ZM54.2738 54.6978L82.0418 54.6978V54.0913L54.2738 54.0913V54.6978ZM81.7385 54.3946V82.2244H82.345V54.3946H81.7385ZM82.0418 81.9211H54.2738V82.5276H82.0418V81.9211ZM54.577 82.2244L54.577 54.3946H53.9705L53.9705 82.2244H54.577ZM81.4107 54.6978H109.179V54.0913H81.4107V54.6978ZM108.875 54.3946V82.2244H109.482V54.3946H108.875ZM109.179 81.9211H81.4107V82.5276H109.179V81.9211ZM81.7139 82.2244V54.3946H81.1074V82.2244H81.7139ZM108.548 54.6978L136.316 54.6978V54.0913L108.548 54.0913V54.6978ZM136.012 54.3946V82.2244H136.619V54.3946H136.012ZM136.316 81.9211L108.548 81.9211V82.5276L136.316 82.5276V81.9211ZM108.851 82.2244V54.3946H108.244V82.2244H108.851ZM135.684 54.6978L163.452 54.6978V54.0913L135.684 54.0913V54.6978ZM163.149 54.3946V82.2244H163.756V54.3946H163.149ZM163.452 81.9211H135.684V82.5276H163.452V81.9211ZM135.988 82.2244V54.3946H135.381V82.2244H135.988ZM162.821 54.6978H190.589V54.0913H162.821V54.6978ZM190.286 54.3946V82.2244H190.893V54.3946H190.286ZM190.589 81.9211H162.821V82.5276H190.589V81.9211ZM163.125 82.2244V54.3946H162.518V82.2244H163.125ZM189.958 54.6978L217.726 54.6978V54.0913L189.958 54.0913V54.6978ZM217.423 54.3946V82.2244H218.029V54.3946H217.423ZM217.726 81.9211H189.958V82.5276H217.726V81.9211ZM190.261 82.2244V54.3946H189.655V82.2244H190.261ZM217.095 54.6978L244.863 54.6978V54.0913L217.095 54.0913V54.6978ZM244.56 54.3946V82.2244H245.166V54.3946H244.56ZM244.863 81.9211L217.095 81.9211V82.5276L244.863 82.5276V81.9211ZM217.398 82.2244V54.3946H216.792V82.2244H217.398ZM244.232 54.6978H272V54.0913H244.232V54.6978ZM271.697 54.3946V82.2244H272.303V54.3946H271.697ZM272 81.9211H244.232V82.5276H272V81.9211ZM244.535 82.2244V54.3946H243.929V82.2244H244.535ZM0 81.8951H27.768V81.2886H0L0 81.8951ZM27.4647 81.5919L27.4647 109.422H28.0712L28.0712 81.5919H27.4647ZM27.768 109.118H0L0 109.725H27.768V109.118ZM0.303242 109.422L0.303242 81.5919H-0.303242L-0.303242 109.422H0.303242ZM27.1369 81.8951L54.9049 81.8951V81.2886L27.1369 81.2886V81.8951ZM54.6016 81.5919V109.422H55.2081V81.5919H54.6016ZM54.9049 109.118L27.1369 109.118V109.725L54.9049 109.725V109.118ZM27.4401 109.422L27.4401 81.5919H26.8336L26.8336 109.422H27.4401ZM54.2738 81.8951H82.0418V81.2886H54.2738V81.8951ZM81.7385 81.5919V109.422H82.345V81.5919H81.7385ZM82.0418 109.118H54.2738V109.725H82.0418V109.118ZM54.577 109.422V81.5919H53.9705V109.422H54.577ZM81.4107 81.8951H109.179V81.2886H81.4107V81.8951ZM108.875 81.5919V109.422H109.482V81.5919H108.875ZM109.179 109.118H81.4107V109.725H109.179V109.118ZM81.7139 109.422V81.5919H81.1074V109.422H81.7139ZM108.548 81.8951L136.316 81.8951V81.2886L108.548 81.2886V81.8951ZM136.012 81.5919L136.012 109.422H136.619L136.619 81.5919H136.012ZM136.316 109.118L108.548 109.118V109.725L136.316 109.725V109.118ZM108.851 109.422V81.5919H108.244V109.422H108.851ZM135.684 81.8951H163.452V81.2886H135.684V81.8951ZM163.149 81.5919L163.149 109.422H163.756L163.756 81.5919H163.149ZM163.452 109.118H135.684V109.725H163.452V109.118ZM135.988 109.422L135.988 81.5919H135.381L135.381 109.422H135.988ZM162.821 81.8951H190.589V81.2886H162.821V81.8951ZM190.286 81.5919L190.286 109.422H190.893L190.893 81.5919H190.286ZM190.589 109.118H162.821V109.725H190.589V109.118ZM163.125 109.422L163.125 81.5919H162.518L162.518 109.422H163.125ZM189.958 81.8951H217.726V81.2886H189.958V81.8951ZM217.423 81.5919L217.423 109.422H218.029L218.029 81.5919H217.423ZM217.726 109.118H189.958V109.725H217.726V109.118ZM190.261 109.422L190.261 81.5919H189.655L189.655 109.422H190.261ZM217.095 81.8951L244.863 81.8951V81.2886L217.095 81.2886V81.8951ZM244.56 81.5919L244.56 109.422H245.166L245.166 81.5919H244.56ZM244.863 109.118L217.095 109.118V109.725L244.863 109.725V109.118ZM217.398 109.422L217.398 81.5919H216.792L216.792 109.422H217.398ZM244.232 81.8951H272V81.2886H244.232V81.8951ZM271.697 81.5919V109.422H272.303V81.5919H271.697ZM272 109.118H244.232V109.725H272V109.118ZM244.535 109.422L244.535 81.5919H243.929L243.929 109.422H244.535ZM0 109.092H27.768V108.486H0L0 109.092ZM27.4647 108.789L27.4647 136.619H28.0712L28.0712 108.789H27.4647ZM27.768 136.316H0L0 136.922H27.768V136.316ZM0.303242 136.619L0.303242 108.789H-0.303242L-0.303242 136.619H0.303242ZM27.1369 109.092L54.9049 109.092V108.486L27.1369 108.486V109.092ZM54.6016 108.789L54.6016 136.619H55.2081L55.2081 108.789H54.6016ZM54.9049 136.316H27.1369V136.922H54.9049V136.316ZM27.4401 136.619L27.4401 108.789H26.8336L26.8336 136.619H27.4401ZM54.2738 109.092H82.0418V108.486H54.2738V109.092ZM81.7385 108.789L81.7385 136.619H82.345L82.345 108.789H81.7385ZM82.0418 136.316H54.2738V136.922H82.0418V136.316ZM54.577 136.619L54.577 108.789H53.9705L53.9705 136.619H54.577ZM81.4107 109.092H109.179V108.486H81.4107V109.092ZM108.875 108.789L108.875 136.619H109.482L109.482 108.789H108.875ZM109.179 136.316L81.4107 136.316V136.922L109.179 136.922V136.316ZM81.7139 136.619L81.7139 108.789H81.1074L81.1074 136.619H81.7139ZM108.548 109.092L136.316 109.092V108.486L108.548 108.486V109.092ZM136.012 108.789V136.619H136.619V108.789H136.012ZM136.316 136.316H108.548V136.922H136.316V136.316ZM108.851 136.619L108.851 108.789H108.244L108.244 136.619H108.851ZM135.684 109.092H163.452V108.486H135.684V109.092ZM163.149 108.789V136.619H163.756V108.789H163.149ZM163.452 136.316H135.684V136.922H163.452V136.316ZM135.988 136.619V108.789H135.381V136.619H135.988ZM162.821 109.092H190.589V108.486H162.821V109.092ZM190.286 108.789V136.619H190.893V108.789H190.286ZM190.589 136.316H162.821V136.922H190.589V136.316ZM163.125 136.619V108.789H162.518V136.619H163.125ZM189.958 109.092H217.726V108.486H189.958V109.092ZM217.423 108.789V136.619H218.029V108.789H217.423ZM217.726 136.316H189.958V136.922H217.726V136.316ZM190.261 136.619V108.789H189.655V136.619H190.261ZM217.095 109.092L244.863 109.092V108.486L217.095 108.486V109.092ZM244.56 108.789V136.619H245.166V108.789H244.56ZM244.863 136.316H217.095V136.922H244.863V136.316ZM217.398 136.619V108.789H216.792V136.619H217.398ZM244.232 109.092H272V108.486H244.232V109.092ZM271.697 108.789V136.619H272.303V108.789H271.697ZM272 136.316L244.232 136.316V136.922L272 136.922V136.316ZM244.535 136.619V108.789H243.929V136.619H244.535ZM0 136.29H27.768V135.683H0L0 136.29ZM27.4647 135.986L27.4647 163.816H28.0712L28.0712 135.986H27.4647ZM27.768 163.513H0L0 164.119H27.768V163.513ZM0.303242 163.816L0.303242 135.986H-0.303242L-0.303242 163.816H0.303242ZM27.1369 136.29H54.9049V135.683H27.1369V136.29ZM54.6016 135.986L54.6016 163.816H55.2081L55.2081 135.986H54.6016ZM54.9049 163.513H27.1369V164.119H54.9049V163.513ZM27.4401 163.816L27.4401 135.986H26.8336L26.8336 163.816H27.4401ZM54.2738 136.29H82.0418V135.683H54.2738V136.29ZM81.7385 135.986V163.816H82.345V135.986H81.7385ZM82.0418 163.513H54.2738V164.119H82.0418V163.513ZM54.577 163.816L54.577 135.986H53.9705L53.9705 163.816H54.577ZM81.4107 136.29L109.179 136.29V135.683L81.4107 135.683V136.29ZM108.875 135.986V163.816H109.482V135.986H108.875ZM109.179 163.513L81.4107 163.513V164.119L109.179 164.119V163.513ZM81.7139 163.816V135.986H81.1074V163.816H81.7139ZM108.548 136.29H136.316V135.683H108.548V136.29ZM136.012 135.986V163.816H136.619V135.986H136.012ZM136.316 163.513H108.548V164.119H136.316V163.513ZM108.851 163.816V135.986H108.244V163.816H108.851ZM135.684 136.29H163.452V135.683H135.684V136.29ZM163.149 135.986V163.816H163.756V135.986H163.149ZM163.452 163.513H135.684V164.119H163.452V163.513ZM135.988 163.816V135.986H135.381V163.816H135.988ZM162.821 136.29H190.589V135.683H162.821V136.29ZM190.286 135.986V163.816H190.893V135.986H190.286ZM190.589 163.513H162.821V164.119H190.589V163.513ZM163.125 163.816V135.986H162.518V163.816H163.125ZM189.958 136.29H217.726V135.683H189.958V136.29ZM217.423 135.986V163.816H218.029V135.986H217.423ZM217.726 163.513H189.958V164.119H217.726V163.513ZM190.261 163.816V135.986H189.655V163.816H190.261ZM217.095 136.29H244.863V135.683H217.095V136.29ZM244.56 135.986V163.816H245.166V135.986H244.56ZM244.863 163.513H217.095V164.119H244.863V163.513ZM217.398 163.816V135.986H216.792V163.816H217.398ZM244.232 136.29L272 136.29V135.683L244.232 135.683V136.29ZM271.697 135.986V163.816H272.303V135.986H271.697ZM272 163.513L244.232 163.513V164.119L272 164.119V163.513ZM244.535 163.816V135.986H243.929V163.816H244.535ZM0 163.487H27.768V162.881H0L0 163.487ZM27.4647 163.184L27.4647 191.014H28.0712L28.0712 163.184H27.4647ZM27.768 190.71H0L0 191.317H27.768V190.71ZM0.303242 191.014L0.303242 163.184H-0.303242L-0.303242 191.014H0.303242ZM27.1369 163.487H54.9049V162.881H27.1369V163.487ZM54.6016 163.184V191.014H55.2081V163.184H54.6016ZM54.9049 190.71H27.1369V191.317H54.9049V190.71ZM27.4401 191.014L27.4401 163.184H26.8336L26.8336 191.014H27.4401ZM54.2738 163.487H82.0418V162.881H54.2738V163.487ZM81.7385 163.184V191.014H82.345V163.184H81.7385ZM82.0418 190.71H54.2738V191.317H82.0418V190.71ZM54.577 191.014V163.184H53.9705V191.014H54.577ZM81.4107 163.487L109.179 163.487V162.881L81.4107 162.881V163.487ZM108.875 163.184V191.014H109.482V163.184H108.875ZM109.179 190.71L81.4107 190.71V191.317L109.179 191.317V190.71ZM81.7139 191.014V163.184H81.1074V191.014H81.7139ZM108.548 163.487H136.316V162.881H108.548V163.487ZM136.012 163.184V191.014H136.619V163.184H136.012ZM136.316 190.71H108.548V191.317H136.316V190.71ZM108.851 191.014V163.184H108.244V191.014H108.851ZM135.684 163.487H163.452V162.881H135.684V163.487ZM163.149 163.184V191.014H163.756V163.184H163.149ZM163.452 190.71H135.684V191.317H163.452V190.71ZM135.988 191.014V163.184H135.381V191.014H135.988ZM162.821 163.487H190.589V162.881H162.821V163.487ZM190.286 163.184V191.014H190.893V163.184H190.286ZM190.589 190.71H162.821V191.317H190.589V190.71ZM163.125 191.014V163.184H162.518V191.014H163.125ZM189.958 163.487H217.726V162.881H189.958V163.487ZM217.423 163.184V191.014H218.029V163.184H217.423ZM217.726 190.71H189.958V191.317H217.726V190.71ZM190.261 191.014V163.184H189.655V191.014H190.261ZM217.095 163.487H244.863V162.881H217.095V163.487ZM244.56 163.184V191.014H245.166V163.184H244.56ZM244.863 190.71H217.095V191.317H244.863V190.71ZM217.398 191.014V163.184H216.792V191.014H217.398ZM244.232 163.487L272 163.487V162.881L244.232 162.881V163.487ZM271.697 163.184L271.697 191.014H272.303L272.303 163.184H271.697ZM272 190.71L244.232 190.71V191.317L272 191.317V190.71ZM244.535 191.014V163.184H243.929V191.014H244.535ZM0 190.684H27.768V190.078H0L0 190.684ZM27.4647 190.381L27.4647 218.211H28.0712L28.0712 190.381H27.4647ZM27.768 217.908H0L0 218.514H27.768V217.908ZM0.303242 218.211L0.303242 190.381H-0.303242L-0.303242 218.211H0.303242ZM27.1369 190.684H54.9049V190.078H27.1369V190.684ZM54.6016 190.381L54.6016 218.211H55.2081L55.2081 190.381H54.6016ZM54.9049 217.908H27.1369V218.514H54.9049V217.908ZM27.4401 218.211L27.4401 190.381H26.8336L26.8336 218.211H27.4401ZM54.2738 190.684H82.0418V190.078H54.2738V190.684ZM81.7385 190.381V218.211H82.345V190.381H81.7385ZM82.0418 217.908H54.2738V218.514H82.0418V217.908ZM54.577 218.211L54.577 190.381H53.9705L53.9705 218.211H54.577ZM81.4107 190.684L109.179 190.684V190.078L81.4107 190.078V190.684ZM108.875 190.381V218.211H109.482V190.381H108.875ZM109.179 217.908L81.4107 217.908V218.514L109.179 218.514V217.908ZM81.7139 218.211V190.381H81.1074V218.211H81.7139ZM108.548 190.684H136.316V190.078H108.548V190.684ZM136.012 190.381V218.211H136.619V190.381H136.012ZM136.316 217.908H108.548V218.514H136.316V217.908ZM108.851 218.211V190.381H108.244V218.211H108.851ZM135.684 190.684H163.452V190.078H135.684V190.684ZM163.149 190.381V218.211H163.756V190.381H163.149ZM163.452 217.908H135.684V218.514H163.452V217.908ZM135.988 218.211V190.381H135.381V218.211H135.988ZM162.821 190.684H190.589V190.078H162.821V190.684ZM190.286 190.381V218.211H190.893V190.381H190.286ZM190.589 217.908H162.821V218.514H190.589V217.908ZM163.125 218.211V190.381H162.518V218.211H163.125ZM189.958 190.684H217.726V190.078H189.958V190.684ZM217.423 190.381V218.211H218.029V190.381H217.423ZM217.726 217.908H189.958V218.514H217.726V217.908ZM190.261 218.211V190.381H189.655V218.211H190.261ZM217.095 190.684H244.863V190.078H217.095V190.684ZM244.56 190.381V218.211H245.166V190.381H244.56ZM244.863 217.908H217.095V218.514H244.863V217.908ZM217.398 218.211V190.381H216.792V218.211H217.398ZM244.232 190.684L272 190.684V190.078L244.232 190.078V190.684ZM271.697 190.381V218.211H272.303V190.381H271.697ZM272 217.908L244.232 217.908V218.514L272 218.514V217.908ZM244.535 218.211V190.381H243.929V218.211H244.535ZM0 217.882H27.768V217.275H0L0 217.882ZM27.4647 217.578L27.4647 245.408H28.0712L28.0712 217.578H27.4647ZM27.768 245.105H0L0 245.711H27.768V245.105ZM0.303242 245.408L0.303242 217.578H-0.303242L-0.303242 245.408H0.303242ZM27.1369 217.882H54.9049V217.275H27.1369V217.882ZM54.6016 217.578L54.6016 245.408H55.2081L55.2081 217.578H54.6016ZM54.9049 245.105H27.1369V245.711H54.9049V245.105ZM27.4401 245.408L27.4401 217.578H26.8336L26.8336 245.408H27.4401ZM54.2738 217.882H82.0418V217.275H54.2738V217.882ZM81.7385 217.578L81.7385 245.408H82.345L82.345 217.578H81.7385ZM82.0418 245.105H54.2738V245.711H82.0418V245.105ZM54.577 245.408L54.577 217.578H53.9705L53.9705 245.408H54.577ZM81.4107 217.882L109.179 217.882V217.275L81.4107 217.275V217.882ZM108.875 217.578L108.875 245.408H109.482L109.482 217.578H108.875ZM109.179 245.105L81.4107 245.105V245.711L109.179 245.711V245.105ZM81.7139 245.408L81.7139 217.578H81.1074L81.1074 245.408H81.7139ZM108.548 217.882H136.316V217.275H108.548V217.882ZM136.012 217.578V245.408H136.619V217.578H136.012ZM136.316 245.105H108.548V245.711H136.316V245.105ZM108.851 245.408L108.851 217.578H108.244L108.244 245.408H108.851ZM135.684 217.882H163.452V217.275H135.684V217.882ZM163.149 217.578V245.408H163.756V217.578H163.149ZM163.452 245.105H135.684V245.711H163.452V245.105ZM135.988 245.408V217.578H135.381V245.408H135.988ZM162.821 217.882H190.589V217.275H162.821V217.882ZM190.286 217.578V245.408H190.893V217.578H190.286ZM190.589 245.105H162.821V245.711H190.589V245.105ZM163.125 245.408V217.578H162.518V245.408H163.125ZM189.958 217.882H217.726V217.275H189.958V217.882ZM217.423 217.578V245.408H218.029V217.578H217.423ZM217.726 245.105H189.958V245.711H217.726V245.105ZM190.261 245.408V217.578H189.655V245.408H190.261ZM217.095 217.882H244.863V217.275H217.095V217.882ZM244.56 217.578V245.408H245.166V217.578H244.56ZM244.863 245.105H217.095V245.711H244.863V245.105ZM217.398 245.408V217.578H216.792V245.408H217.398ZM244.232 217.882L272 217.882V217.275L244.232 217.275V217.882ZM271.697 217.578V245.408H272.303V217.578H271.697ZM272 245.105L244.232 245.105V245.711L272 245.711V245.105ZM244.535 245.408V217.578H243.929V245.408H244.535ZM0 245.079H27.768V244.472H0L0 245.079ZM27.4647 244.776L27.4647 272.605H28.0712L28.0712 244.776H27.4647ZM27.768 272.302H0L0 272.909H27.768V272.302ZM0.303242 272.605L0.303242 244.776H-0.303242L-0.303242 272.605H0.303242ZM27.1369 245.079H54.9049V244.472H27.1369V245.079ZM54.6016 244.776V272.605H55.2081V244.776H54.6016ZM54.9049 272.302H27.1369V272.909H54.9049V272.302ZM27.4401 272.605L27.4401 244.776H26.8336L26.8336 272.605H27.4401ZM54.2738 245.079H82.0418V244.472H54.2738V245.079ZM81.7385 244.776V272.605H82.345V244.776H81.7385ZM82.0418 272.302H54.2738V272.909H82.0418V272.302ZM54.577 272.605V244.776H53.9705V272.605H54.577ZM81.4107 245.079L109.179 245.079V244.472L81.4107 244.472V245.079ZM108.875 244.776V272.605H109.482V244.776H108.875ZM109.179 272.302H81.4107V272.909H109.179V272.302ZM81.7139 272.605V244.776H81.1074V272.605H81.7139ZM108.548 245.079H136.316V244.472H108.548V245.079ZM136.012 244.776L136.012 272.605H136.619L136.619 244.776H136.012ZM136.316 272.302H108.548V272.909H136.316V272.302ZM108.851 272.605V244.776H108.244V272.605H108.851ZM135.684 245.079H163.452V244.472H135.684V245.079ZM163.149 244.776L163.149 272.605H163.756L163.756 244.776H163.149ZM163.452 272.302H135.684V272.909H163.452V272.302ZM135.988 272.605L135.988 244.776H135.381L135.381 272.605H135.988ZM162.821 245.079H190.589V244.472H162.821V245.079ZM190.286 244.776L190.286 272.605H190.893L190.893 244.776H190.286ZM190.589 272.302L162.821 272.302V272.909L190.589 272.909V272.302ZM163.125 272.605L163.125 244.776H162.518L162.518 272.605H163.125ZM189.958 245.079H217.726V244.472H189.958V245.079ZM217.423 244.776L217.423 272.605H218.029L218.029 244.776H217.423ZM217.726 272.302H189.958V272.909H217.726V272.302ZM190.261 272.605L190.261 244.776H189.655L189.655 272.605H190.261ZM217.095 245.079H244.863V244.472H217.095V245.079ZM244.56 244.776L244.56 272.605H245.166L245.166 244.776H244.56ZM244.863 272.302H217.095V272.909H244.863V272.302ZM217.398 272.605L217.398 244.776H216.792L216.792 272.605H217.398ZM244.232 245.079L272 245.079V244.472L244.232 244.472V245.079ZM271.697 244.776V272.605H272.303V244.776H271.697ZM272 272.302H244.232V272.909H272V272.302ZM244.535 272.605L244.535 244.776H243.929L243.929 272.605H244.535ZM0 272.276H27.768V271.67H0L0 272.276ZM27.4647 271.973L27.4647 299.803H28.0712L28.0712 271.973H27.4647ZM27.768 299.499H0L0 300.106H27.768V299.499ZM0.303242 299.803L0.303242 271.973H-0.303242L-0.303242 299.803H0.303242ZM27.1369 272.276H54.9049V271.67H27.1369V272.276ZM54.6016 271.973L54.6016 299.803H55.2081L55.2081 271.973H54.6016ZM54.9049 299.499H27.1369V300.106H54.9049V299.499ZM27.4401 299.803L27.4401 271.973H26.8336L26.8336 299.803H27.4401ZM54.2738 272.276H82.0418V271.67H54.2738V272.276ZM81.7385 271.973V299.803H82.345V271.973H81.7385ZM82.0418 299.499H54.2738V300.106H82.0418V299.499ZM54.577 299.803L54.577 271.973H53.9705L53.9705 299.803H54.577ZM81.4107 272.276H109.179V271.67H81.4107V272.276ZM108.875 271.973V299.803H109.482V271.973H108.875ZM109.179 299.499H81.4107V300.106H109.179V299.499ZM81.7139 299.803V271.973H81.1074V299.803H81.7139ZM108.548 272.276H136.316V271.67H108.548V272.276ZM136.012 271.973V299.803H136.619V271.973H136.012ZM136.316 299.499H108.548V300.106H136.316V299.499ZM108.851 299.803V271.973H108.244V299.803H108.851ZM135.684 272.276H163.452V271.67H135.684V272.276ZM163.149 271.973V299.803H163.756V271.973H163.149ZM163.452 299.499H135.684V300.106H163.452V299.499ZM135.988 299.803V271.973H135.381V299.803H135.988ZM162.821 272.276L190.589 272.276V271.67L162.821 271.67V272.276ZM190.286 271.973V299.803H190.893V271.973H190.286ZM190.589 299.499L162.821 299.499V300.106L190.589 300.106V299.499ZM163.125 299.803V271.973H162.518V299.803H163.125ZM189.958 272.276H217.726V271.67H189.958V272.276ZM217.423 271.973V299.803H218.029V271.973H217.423ZM217.726 299.499H189.958V300.106H217.726V299.499ZM190.261 299.803V271.973H189.655V299.803H190.261ZM217.095 272.276H244.863V271.67H217.095V272.276ZM244.56 271.973V299.803H245.166V271.973H244.56ZM244.863 299.499H217.095V300.106H244.863V299.499ZM217.398 299.803V271.973H216.792V299.803H217.398ZM244.232 272.276H272V271.67H244.232V272.276ZM271.697 271.973V299.803H272.303V271.973H271.697ZM272 299.499H244.232V300.106H272V299.499ZM244.535 299.803V271.973H243.929V299.803H244.535ZM0 299.473H27.768V298.867H0L0 299.473ZM27.4647 299.17L27.4647 327H28.0712L28.0712 299.17H27.4647ZM27.768 326.697H0L0 327.303H27.768V326.697ZM0.303242 327L0.303242 299.17H-0.303242L-0.303242 327H0.303242ZM27.1369 299.473H54.9049V298.867H27.1369V299.473ZM54.6016 299.17V327H55.2081V299.17H54.6016ZM54.9049 326.697H27.1369V327.303H54.9049V326.697ZM27.4401 327L27.4401 299.17H26.8336L26.8336 327H27.4401ZM54.2738 299.473H82.0418V298.867H54.2738V299.473ZM81.7385 299.17L81.7385 327H82.345L82.345 299.17H81.7385ZM82.0418 326.697H54.2738V327.303H82.0418V326.697ZM54.577 327V299.17H53.9705V327H54.577ZM81.4107 299.473H109.179V298.867H81.4107V299.473ZM108.875 299.17L108.875 327H109.482L109.482 299.17H108.875ZM109.179 326.697H81.4107V327.303H109.179V326.697ZM81.7139 327L81.7139 299.17H81.1074L81.1074 327H81.7139ZM108.548 299.473H136.316V298.867H108.548V299.473ZM136.012 299.17V327H136.619V299.17H136.012ZM136.316 326.697H108.548V327.303H136.316V326.697ZM108.851 327L108.851 299.17H108.244L108.244 327H108.851ZM135.684 299.473H163.452V298.867H135.684V299.473ZM163.149 299.17V327H163.756V299.17H163.149ZM163.452 326.697H135.684V327.303H163.452V326.697ZM135.988 327V299.17H135.381V327H135.988ZM162.821 299.473L190.589 299.473V298.867L162.821 298.867V299.473ZM190.286 299.17V327H190.893V299.17H190.286ZM190.589 326.697L162.821 326.697V327.303L190.589 327.303V326.697ZM163.125 327V299.17H162.518V327H163.125ZM189.958 299.473H217.726V298.867H189.958V299.473ZM217.423 299.17V327H218.029V299.17H217.423ZM217.726 326.697H189.958V327.303H217.726V326.697ZM190.261 327V299.17H189.655V327H190.261ZM217.095 299.473H244.863V298.867H217.095V299.473ZM244.56 299.17V327H245.166V299.17H244.56ZM244.863 326.697H217.095V327.303H244.863V326.697ZM217.398 327V299.17H216.792V327H217.398ZM244.232 299.473H272V298.867H244.232V299.473ZM271.697 299.17V327H272.303V299.17H271.697ZM272 326.697H244.232V327.303H272V326.697ZM244.535 327V299.17H243.929V327H244.535Z",
            fill: "url(#paint0_linear_178_3818)",
            mask: "url(#path-1-inside-1_178_3818)"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
          "linearGradient",
          {
            id: "paint0_linear_178_3818",
            x1: "12.3602",
            y1: "20.4375",
            x2: "326.139",
            y2: "244.306",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("stop", { "stop-color": "#101010", "stop-opacity": "0.08" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("stop", { offset: "0.234954", "stop-color": "#101010", "stop-opacity": "0.02" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("stop", { offset: "0.500579", "stop-color": "#101010", "stop-opacity": "0" })
            ]
          }
        ) })
      ]
    }
  );
}

// src/Components/Footer.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "w-[416px] h-[43px] py-3 rounded-[44px] justify-start items-start inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "grow shrink basis-0 h-[19px] justify-center items-center gap-2 flex", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "w-[19px] h-[19px] relative rounded-[5px]" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", { width: "19", height: "19", viewBox: "0 0 19 19", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("g", { "clip-path": "url(#clip0_240_3997)", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M19 0H0V19H19V0ZM10.079 5.60869V8.07896L14.1585 6.47031V8.29788C14.1585 8.68991 13.9298 9.04048 13.5854 9.17628L10.079 10.559V8.73509C10.0767 8.34551 9.84853 7.99783 9.5059 7.86274L6.57263 6.70603C6.22823 6.57021 5.99951 6.21964 5.99951 5.82761V4.00003L10.079 5.60869ZM10.079 10.5699V11.0459H10.0848V16.2081H8.404V12.3894L6.57263 11.6672C6.22823 11.5314 5.99951 11.1809 5.99951 10.7888V8.96124L10.079 10.5699Z", fill: "#808080", "fill-opacity": "0.4" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("clipPath", { id: "clip0_240_3997", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("rect", { width: "19", height: "19", rx: "5", fill: "white" }) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "text-center text-zinc-500 text-opacity-40 text-sm font-semibold font-['Montserrat'] leading-[16.80px]", children: "Powered by Tria" })
  ] }) }) });
}

// src/Pages/Home/index.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function Home() {
  const [continueWithTria, setContinueWithTria] = (0, import_react4.useState)(true);
  const [emailAndSocial, setEmailAndSocial] = (0, import_react4.useState)(false);
  const [connectWallet, setConnectWallet] = (0, import_react4.useState)(false);
  const toggleState = () => {
    setContinueWithTria(!continueWithTria);
    setEmailAndSocial(false);
    setConnectWallet(false);
  };
  const toggleState2 = () => {
    setContinueWithTria(false);
    setEmailAndSocial(!emailAndSocial);
    setConnectWallet(false);
  };
  const toggleState3 = () => {
    setContinueWithTria(false);
    setEmailAndSocial(false);
    setConnectWallet(!connectWallet);
  };
  return (
    // <div style={{ fontFamily: 'Montserrat' }} className="w-[448px] bg-white rounded-2xl h-[840px] p-4 flex-col justify-between inline-flex">
    //   <div style={{ marginLeft: '-150px' }} className="absolute top-0 ">
    //     {' '}
    //     <HomeBackgroundVector />
    //   </div>
    //   <div className="flex-col justify-start gap-2 flex">
    //     <Nav />
    //   </div>
    //   {!continueWithTria && <div className='cursor-pointer' onClick={toggleState}>
    //     <div className="w-[416px] h-[78px] px-5 py-4 rounded-2xl border border-stone-950 border-opacity-5 flex-col justify-center items-center gap-2 inline-flex">
    //       <div className="self-stretch h-[46px] py-3 flex-col justify-center items-start gap-4 flex">
    //         <div className="self-stretch justify-start items-center gap-2 inline-flex">
    //           <div className="text-center text-stone-950 text-opacity-80 text-lg font-medium leading-snug">Continue with Tria</div>
    //           <div className="px-2 py-1 bg-indigo-500 bg-opacity-10 rounded-[22px] justify-center items-center gap-2 flex">
    //             <div className="text-center text-indigo-500 text-opacity-90 text-xs font-medium leading-[14.40px]">private</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>}
    //   {continueWithTria && (
    //     <div >
    //       <ContinueWithTria toggleState={toggleState} />
    //     </div>
    //   )}
    //   {!emailAndSocial && <div className='cursor-pointer' onClick={toggleState2} >
    //     <div className="w-[416px] h-[78px] px-5 py-4 rounded-2xl border border-stone-950 border-opacity-5 flex-col justify-center items-center gap-2 inline-flex">
    //       <div className="self-stretch h-[46px] py-3 flex-col justify-center items-center gap-4 flex">
    //         <div className="self-stretch justify-start items-center gap-2 inline-flex">
    //           <div className="text-center text-stone-950 text-opacity-80 text-lg font-medium leading-snug">Email & Social</div>
    //           <div className="h-[22px] px-2 py-1 bg-pink-500 bg-opacity-10 rounded-[22px] justify-center items-center gap-2 flex">
    //             <div className="text-center text-pink-500 text-opacity-90 text-xs font-medium leading-[14.40px]">fast</div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>}
    //   {emailAndSocial && (
    //     <div >
    //       <EmailAndSocial toggleState2={toggleState2} />
    //     </div>
    //   )}
    //   {!connectWallet && <div className='cursor-pointer' onClick={toggleState3}>
    //     <div className="w-[416px] h-[78px] px-5 py-4 rounded-2xl border border-stone-950 border-opacity-5 flex-col justify-center items-center gap-2 inline-flex">
    //       <div className="self-stretch h-[46px] py-3 flex-col justify-start items-center gap-4 flex">
    //         <div className="self-stretch h-[22px] flex-col justify-center items-start gap-2 flex">
    //           <div className="text-center text-stone-950 text-opacity-80 text-lg font-medium leading-snug">Connect a Wallet</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>}
    //   {connectWallet && (
    //     <div>
    //       <ConnectWallet toggleState3={toggleState3} />
    //     </div>
    //   )}
    //   <div className="self-stretch h-[43px] py-3 rounded-[44px] flex-col justify-start items-start gap-3 flex">
    //     <div className="self-stretch justify-center gap-2 inline-flex">
    //       <div className="w-[19px] h-[19px] relative rounded-[5px]" />
    //       {/* Tria Logo */}
    //       <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <g clip-path="url(#clip0_240_3997)">
    //           <path fill-rule="evenodd" clip-rule="evenodd" d="M19 0H0V19H19V0ZM10.079 5.60869V8.07896L14.1585 6.47031V8.29788C14.1585 8.68991 13.9298 9.04048 13.5854 9.17628L10.079 10.559V8.73509C10.0767 8.34551 9.84853 7.99783 9.5059 7.86274L6.57263 6.70603C6.22823 6.57021 5.99951 6.21964 5.99951 5.82761V4.00003L10.079 5.60869ZM10.079 10.5699V11.0459H10.0848V16.2081H8.404V12.3894L6.57263 11.6672C6.22823 11.5314 5.99951 11.1809 5.99951 10.7888V8.96124L10.079 10.5699Z" fill="#808080" fill-opacity="0.4" />
    //         </g>
    //         <defs>
    //           <clipPath id="clip0_240_3997">
    //             <rect width="19" height="19" rx="5" fill="white" />
    //           </clipPath>
    //         </defs>
    //       </svg>
    //       <div style={{ fontFamily: 'Montserrat' }} className="text-center text-zinc-500 text-opacity-40 text-sm font-semibold leading-[16.80px]">
    //         Powered by Tria
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // </div>
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "w-[448px] rounded-2xl dark:bg-fontLightColor h-[840px] p-4 flex-col  justify-between inline-flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { style: { marginLeft: "-150px" }, className: "absolute top-0 ", children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(HomeBackgroundVector, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "flex-col justify-start gap-2  dark:bg-primaryDarkColor flex", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Nav, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(EmailAndSocial, {}),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Footer, {})
    ] })
  );
}

// src/index.tsx
var import_react8 = require("react");

// src/Pages/ConfirmEmail/index.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function index() {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "w-[448px] h-[840px] bg-white rounded-2xl p-4 flex-col justify-between items-center inline-flex", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { style: { marginLeft: "-150px" }, className: "absolute top-0 ", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(HomeBackgroundVector, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "flex-col justify-start items-center gap-2 flex", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Nav, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "h-[289px] flex-col  items-center gap-3 flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "h-[234px] flex-col justify-center items-center gap-3 flex", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "self-stretch h-[234px] px-5 py-4 rounded-2xl border border-violet-400 border-opacity-30 flex-col justify-center items-center gap-2 flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "self-stretch h-[46px] py-3 flex-col justify-center items-start gap-4 flex", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "self-stretch justify-start items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "mix-blend-difference text-center text-white text-opacity-80 text-lg font-medium font-['Montserrat'] leading-snug", children: "Confirm your email" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "w-[376px] px-2 justify-start items-center inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "grow shrink basis-0 mix-blend-difference text-white text-opacity-50 text-sm font-normal font-['Montserrat']", children: "This is a mandatory step of security that helps you onboard. You will need this to authorize the account integrity." }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "self-stretch h-16 flex-col justify-center items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "self-stretch py-3 justify-center items-center gap-4 inline-flex", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "grow shrink basis-0 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px]" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "grow shrink basis-0 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px]" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "grow shrink basis-0 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px]" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "grow shrink basis-0 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px]" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "grow shrink basis-0 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px]" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "grow shrink basis-0 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px]" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "w-[376px] px-2 justify-start items-center inline-flex", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "grow shrink basis-0 mix-blend-difference text-white text-opacity-50 text-sm font-normal font-['Montserrat']", children: "Didn\u2019t get an email?" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "mix-blend-difference text-white text-opacity-80 text-sm font-medium font-['Montserrat']", children: "Resend code" })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Footer, {})
    ] })
  ] }) });
}

// src/Components/SignUp/Nav.tsx
var import_react_router_dom = require("react-router-dom");
var import_jsx_runtime9 = require("react/jsx-runtime");
function Nav2() {
  const navigate = (0, import_react_router_dom.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "w-[416px] justify-between items-start inline-flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "p-2 mix-blend-difference rounded-[39px] flex-col justify-center items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: " relative", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("button", { onClick: () => {
        navigate("/");
      }, children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("img", { src: "/icons/close.svg" }),
        " "
      ] }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "p-3  rounded-[39px] flex-col justify-center items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("img", { src: "/icons/Shape.svg" }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "h-[221px] px-5 py-6 flex-col justify-center items-center gap-4 flex", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "self-stretch py-2  justify-center items-center inline-flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "w-[95px] h-[95px] relative rounded-[127px] ", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "w-[95px] h-[95px] left-0 top-0 absolute", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("img", { className: "w-[95px] h-[95px] left-[28px]  absolute", src: "/icons/img.svg" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: " flex-col justify-center items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("img", { className: "w-[95px] h-[95px]", src: "/icons/sea.svg" }) })
    ] }) })
  ] });
}

// src/Pages/SignUp/EmailPage.tsx
var import_react_router_dom2 = require("react-router-dom");
var import_jsx_runtime10 = require("react/jsx-runtime");
function SignUp() {
  const navigate = (0, import_react_router_dom2.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "w-[448px] h-[840px] p-4 bg-white rounded-2xl flex-col justify-between items-center inline-flex", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex-col justify-start items-center gap-2 flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Nav2, {}),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "w-[376px] h-[46px] py-3 flex-col justify-center items-start gap-4 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "self-stretch justify-center items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "text-center text-stone-950 text-opacity-80 text-lg font-medium font-['Montserrat'] leading-snug", children: "Creating your Tria account" }) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "self-stretch h-[243px] flex-col justify-center items-center gap-2 flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "self-stretch h-48 flex-col justify-center items-center gap-3 flex", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "w-[416px] h-48 px-5 py-4 rounded-2xl border border-violet-400 border-opacity-30 flex-col justify-center items-center gap-2 inline-flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "self-stretch h-[46px] py-3 flex-col justify-center items-start gap-4 flex", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "self-stretch justify-start items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "mix-blend-difference text-center text-white text-opacity-80 text-lg font-medium font-Montserrat leading-snug", children: "Create your tria name" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "w-[376px] px-2 justify-start items-center inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "grow shrink basis-0 mix-blend-difference", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { style: { color: "white", opacity: 0.5, fontSize: "0.875rem", fontWeight: "normal" }, children: "Your " }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { style: { color: "white", opacity: 0.9, fontSize: "0.875rem", fontWeight: "bold" }, children: "@tria" }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { style: { color: "white", opacity: 0.5, fontSize: "0.875rem", fontWeight: "normal" }, children: " is like Gmail, for Web3. Pay, receive and log-in to apps on any device, and blockchain." })
        ] }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "self-stretch h-16 flex-col justify-center items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "self-stretch py-3 justify-center items-center gap-2 inline-flex", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "grow shrink basis-0 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px] justify-start items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "justify-start items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "mix-blend-difference text-center inline-flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "justify-start", style: { color: "white", opacity: 0.8, fontSize: "1rem", fontWeight: "bold" }, children: "kunaaal" }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "justify-start", style: { color: "white", opacity: 0.4, fontSize: "1rem", fontWeight: "normal" }, children: "@tria" })
          ] }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "w-[99px] h-10 px-5 py-3 mix-blend-difference bg-white bg-opacity-90 rounded-[20px] justify-center items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "justify-center items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("button", { onClick: () => {
            navigate("/signUpPassword");
          }, children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "text-center text-stone-950 text-base font-semibold font-Montserrat leading-tight", children: "Next" })
          ] }) }) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Footer, {})
    ] })
  ] }) });
}

// src/Pages/SignIn/SignInPassword.tsx
var import_react5 = require("react");
var import_jsx_runtime11 = require("react/jsx-runtime");
function SignInPassword() {
  const { triaName, setView, setShowOnboarding, setTriaName, email, setEmail } = (0, import_react5.useContext)(NavContext_default);
  const [password, setPassword] = (0, import_react5.useState)("");
  const [loader, setLoader] = (0, import_react5.useState)(false);
  (0, import_react5.useEffect)(() => {
    if (loader === true) {
      setTimeout(() => {
        setTriaName("random");
        setShowOnboarding(false);
      }, 3e3);
    }
  }, [loader]);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "w-[448px] bg-black rounded-2xl h-[840px] p-4 flex-col justify-between inline-flex", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { style: { marginLeft: "-150px" }, className: "absolute top-0 ", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(HomeBackgroundVector, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "flex-col justify-start gap-2 flex", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Nav, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "w-[416px] h-[255px] flex-col justify-center items-center gap-3 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "self-stretch h-[255px] px-5 py-4 rounded-2xl border border-violet-400 border-opacity-30 flex-col justify-center items-center gap-2 flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "self-stretch h-[46px] py-3 flex-col justify-center items-start gap-4 flex", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "self-stretch justify-start items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "mix-blend-difference text-center text-white text-opacity-80 text-lg font-medium font-Montserrat leading-snug", children: "Login with email" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "self-stretch h-32 flex-col justify-center items-center flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "self-stretch py-3 justify-center items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("input", { className: "grow shrink basis-0 h-10 px-5 py-3 font-Montserrat bg-white bg-opacity-5 rounded-[20px] justify-start items-center flex", type: "email", placeholder: "your@email.com", value: email, onChange: (e) => setEmail(e.target.value) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "self-stretch py-3 justify-center items-center gap-2 inline-flex", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("input", { className: "grow shrink basis-0 h-10 px-5 py-3 bg-white bg-opacity-5 rounded-[20px] justify-start items-center flex font-Montserrat", type: "password", placeholder: "Password" }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { onClick: () => setLoader(true), className: "w-[99px] h-10 px-5 py-3 mix-blend-difference bg-white  rounded-[20px] justify-center items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "justify-center items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("button", { children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "text-center text-black text-base font-semibold font-Montserrat leading-tight", children: loader === false ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: "Log in" }) : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "ml-2", role: "status", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("svg", { "aria-hidden": "true", className: "w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "currentColor" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentFill" })
            ] }) }) }),
            " "
          ] }) }) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "self-stretch py-2 rounded-[44px] justify-start items-start inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "grow shrink basis-0 h-[17px] justify-start items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "mix-blend-difference text-center text-white text-opacity-80 text-sm font-normal font-Montserrat leading-[16.80px]", children: "Forgot Password?" }) }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Footer, {})
  ] }) });
}

// src/Pages/WelcomePage/Welcome.tsx
var import_react6 = require("react");
var import_react_router_dom3 = require("react-router-dom");
var import_jsx_runtime12 = require("react/jsx-runtime");
function Welcome() {
  const navigate = (0, import_react_router_dom3.useNavigate)();
  const { setView } = (0, import_react6.useContext)(NavContext_default);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "w-[448px] h-[840px] p-4 bg-white rounded-2xl flex-col justify-between items-center inline-flex", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex-col justify-start items-center gap-2 flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Nav2, {}),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "w-[376px] h-[79px] py-3 flex-col justify-center items-start gap-1 inline-flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "self-stretch justify-center items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "text-center text-stone-950 text-opacity-90 text-2xl font-normal font-['Montserrat'] leading-[28.80px]", children: "Welcome to Tria" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "self-stretch justify-center items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "text-center text-stone-950 text-opacity-90 text-lg font-semibold font-['Montserrat'] leading-snug", children: "kunaaal@tria" }) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "w-[416px] h-[231px] px-5 py-4 rounded-2xl border border-violet-400 border-opacity-30 flex-col justify-center items-center gap-2 inline-flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "self-stretch h-[127px] flex-col justify-center items-center gap-3 flex", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "self-stretch h-[127px] px-5 py-4 rounded-2xl flex-col justify-center items-center gap-2 flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "self-stretch h-[53px] py-3 flex-col justify-center items-start gap-4 flex", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "self-stretch justify-center items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "mix-blend-difference text-center text-white text-opacity-90 text-2xl font-normal font-Montserrat leading-[28.80px]", children: [
          "Continue to ",
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-2xl font-medium leading-[28.80px]", children: "Opensea!" })
        ] }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "w-[376px] px-2 justify-start items-center inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "grow shrink basis-0 mix-blend-difference", children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-white text-opacity-50 text-sm font-normal font-Montserrat", children: "Your " }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-white text-opacity-90 text-sm font-bold font-Montserrat", children: "@tria" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-white text-opacity-50 text-sm font-normal font-Montserrat", children: " wallet is created and can be used on any device and blockchain." })
        ] }) })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "self-stretch h-16 flex-col justify-center items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "self-stretch py-3 justify-center items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "grow shrink basis-0 h-10 px-5 py-3 bg-gradient-to-r from-violet-400 to-indigo-500 rounded-[20px] justify-center items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "justify-center items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("button", { onClick: () => setView("Onboarding"), children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "text-center text-white text-base font-semibold font-Montserrat leading-tight", children: "Continue" }) }) }) }) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "w-[416px] h-[78px] px-5 py-4 mix-blend-difference rounded-2xl border border-white border-opacity-5 flex-col justify-center items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "self-stretch h-[46px] py-3 flex-col justify-center items-center gap-4 flex", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "self-stretch justify-start items-center gap-3 inline-flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "w-[19px] h-[19px] relative rounded-[5px]" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("img", { src: "/icons/teth2.svg", alt: "logo" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "text-center text-white text-opacity-80 text-lg font-medium font-['Montserrat'] leading-snug", children: "Set up Tria Wallet" })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "w-[416px] h-[43px] py-3 rounded-[44px] justify-start items-start inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "grow shrink basis-0 h-[19px] justify-center items-center gap-2 flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "w-[19px] h-[19px] relative rounded-[5px]" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("img", { src: "/icons/logo.svg", alt: "logo" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "text-center text-zinc-500 text-opacity-40 text-sm font-semibold font-['Montserrat'] leading-[16.80px]", children: "Powered by Tria" })
    ] }) })
  ] }) });
}

// src/Pages/Onboarding/index.tsx
var import_react7 = require("react");
var import_react_router_dom4 = require("react-router-dom");
var import_jsx_runtime13 = require("react/jsx-runtime");
function Onboarding() {
  const navigate = (0, import_react_router_dom4.useNavigate)();
  const { setView } = (0, import_react7.useContext)(NavContext_default);
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
    "  ",
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "w-[448px] bg-white rounded-2xl h-[840px] p-4 flex-col justify-between inline-flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { style: { marginLeft: "-150px" }, className: "absolute top-0 ", children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(HomeBackgroundVector, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex-col justify-start gap-2 flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "w-[416px] h-10 justify-between items-start inline-flex", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "p-2 mix-blend-difference rounded-[39px] flex-col justify-center items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("button", { onClick: () => setView("Welcome"), children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("img", { src: "/icons/close.svg" }),
            " "
          ] }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "p-3  rounded-[39px] flex-col justify-center items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("img", { src: "/icons/Shape.svg" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "w-[416px] h-[254px] px-5 py-6 flex-col justify-center items-center gap-4 inline-flex", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "self-stretch py-2  justify-center items-center inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: " flex-col justify-center items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("img", { className: "w-[95px] h-[95px]", src: "/icons/sea.png" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "self-stretch h-[79px] py-3 flex-col justify-center items-start gap-1 flex", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "self-stretch justify-center items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "text-center text-stone-950 text-opacity-90 text-2xl font-normal font-['Montserrat'] leading-[28.80px]", children: "Welcome to Opensea" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "self-stretch justify-center items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "text-center text-stone-950 text-opacity-90 text-lg font-semibold font-['Montserrat'] leading-snug", children: "kunaaal@tria" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "w-[416px] h-[455px] px-5 py-4 rounded-2xl border  border-violet-400 border-opacity-30 flex-col justify-between items-center inline-flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "self-stretch h-[348px] flex-col justify-start items-center scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-stone-100 overflow-y-scroll gap-4 flex", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "self-stretch h-[92px] py-3 flex-col justify-start items-center gap-4 flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "w-[376px] px-2 justify-start items-center inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "grow shrink basis-0 text-stone-950 text-opacity-80 text-sm font-semibold font-Montserrat", children: [
            "Opensea",
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-zinc-500 text-opacity-80 text-sm font-normal font-Montserrat", children: " " }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-zinc-500 text-opacity-80 text-sm font-medium font-Montserrat", children: "is excited to have you as a member of the community. To continue to the application, please fill the following form so that we could serve you better." })
          ] }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "self-stretch h-[382px] flex-col justify-start items-center  gap-4 flex", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "self-stretch h-[65px] flex-col justify-center items-center gap-2 flex", children: [
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "self-stretch px-2 justify-start items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "text-center text-zinc-500 text-sm font-semibold font-Montserrat leading-[16.80px]", children: "Name" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "self-stretch justify-center items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "grow shrink basis-0 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px] justify-start items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "h-[11px] justify-start items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "text-center text-zinc-500 text-opacity-60 text-base font-semibold font-Montserrat leading-tight", children: "kunaaal" }) }) }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "self-stretch h-[65px] flex-col justify-center items-center gap-2 flex", children: [
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "self-stretch px-2 justify-start items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "text-center text-zinc-500 text-sm font-semibold font-Montserrat leading-[16.80px]", children: "Email" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "self-stretch justify-center items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "grow shrink basis-0 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px] justify-start items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "h-[11px] justify-start items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "text-center text-zinc-500 text-opacity-60 text-base font-semibold font-Montserrat leading-tight", children: [
                "kunaaal",
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-zinc-500 text-opacity-60 text-base font-normal font-Montserrat leading-tight", children: "@gmail.com" })
              ] }) }) }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "self-stretch h-[65px] flex-col justify-center items-center gap-2 flex", children: [
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "self-stretch px-2 justify-start items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "text-center text-zinc-500 text-sm font-semibold font-Montserrat leading-[16.80px]", children: "Gender" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "self-stretch justify-center items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "grow shrink basis-0 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px] justify-between items-center flex", children: [
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "h-[11px] justify-start items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "text-center text-zinc-500 text-opacity-60 text-base font-semibold font-Montserrat leading-tight", children: "Male" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "w-[18px] h-[18px] justify-center items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "w-[18px] h-[18px] relative" }) })
              ] }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "self-stretch h-[65px] flex-col justify-center items-center gap-2 flex", children: [
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "self-stretch px-2 justify-start items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "text-center text-zinc-500 text-sm font-semibold font-Montserrat leading-[16.80px]", children: "DOB" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "self-stretch justify-center items-center gap-2 inline-flex", children: [
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "w-20 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px] justify-start items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "h-[11px] justify-start items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "text-center text-zinc-500 text-opacity-60 text-base font-semibold font-Montserrat leading-tight", children: "DD" }) }) }),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "w-20 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px] justify-start items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "h-[11px] justify-start items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "text-center text-zinc-500 text-opacity-60 text-base font-semibold font-Montserrat leading-tight", children: "MM" }) }) }),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "grow shrink basis-0 h-10 px-5 py-3 bg-zinc-500 bg-opacity-10 rounded-[20px] justify-start items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "h-[11px] justify-start items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "text-center text-zinc-500 text-opacity-60 text-base font-semibold font-Montserrat leading-tight", children: "YYYY" }) }) }),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "w-6 h-6 justify-center items-center flex", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "w-6 h-6 relative" }),
                  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("img", { src: "/icons/calendar.svg" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "self-stretch py-3 justify-center items-center gap-3 inline-flex", children: [
              /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "w-6 h-6 justify-center items-center flex", children: [
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "w-6 h-6 relative" }),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("img", { src: "/icons/no-tick-square.svg" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "grow shrink basis-0 text-zinc-500 text-sm font-medium font-Montserrat", children: "I agree to receive marketing and promotional emails sent from Opensea." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "self-stretch h-16 flex-col justify-center items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "self-stretch py-3 justify-center items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "grow shrink basis-0 h-10 px-5 py-3 bg-gradient-to-r from-violet-400 to-indigo-500 rounded-[20px] justify-center items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "justify-center items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "text-center text-white text-base font-semibold font-Montserrat leading-tight", children: "Continue" }) }) }) }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Footer, {})
    ] })
  ] });
}

// src/Pages/CreateWallet/index.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function index2() {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "w-[448px] h-[840px] bg-white rounded-2xl p-4 flex-col justify-between items-center inline-flex", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { style: { marginLeft: "-150px" }, className: "absolute top-0 ", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(HomeBackgroundVector, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "flex-col justify-start items-center gap-2 flex", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Nav, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "w-[416px] h-[356px] px-5 py-4 rounded-2xl border-2 border-violet-400 border-opacity-30 flex-col justify-center items-center gap-2 inline-flex", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "self-stretch h-[46px] py-3 mix-blend-difference flex-col justify-center items-center gap-4 flex", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "self-stretch h-[22px] flex-col justify-center items-start gap-2 flex", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "text-center text-white text-opacity-80 text-lg font-medium font-montserrat leading-snug", children: "Create a Wallet" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "self-stretch py-3 justify-start items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "px-2 justify-start items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "text-center text-zinc-500 text-sm font-normal font-montserrat leading-[16.80px]", children: "Choose one of the wallet providers to continue..." }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "self-stretch p-3 rounded-2xl justify-center items-center gap-3 inline-flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "w-7 h-7 relative", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("img", { className: "absolute", src: "/icons/teth3.svg", alt: "Tria Wallet Icon" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "grow shrink basis-0 h-[19px] justify-start items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "mix-blend-difference text-center text-white text-opacity-80 text-base font-normal font-montserrat leading-tight", children: "Tria Wallet" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "self-stretch p-3 rounded-2xl justify-center items-center gap-3 inline-flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "w-7 h-7 relative bg-blue-600 rounded-md border", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("img", { className: " absolute", src: "/icons/wallet1.svg", alt: "Coinbase Wallet Icon" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "grow shrink basis-0 h-[19px] justify-start items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "mix-blend-difference text-center text-white text-opacity-80 text-base font-normal font-montserrat leading-tight", children: "Coinbase Wallet" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "self-stretch p-3 rounded-2xl justify-center items-center gap-3 inline-flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "w-7 h-7 bg-white rounded-md justify-center items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "w-7 h-7 relative flex-col justify-start items-start flex", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("img", { className: "  absolute", src: "/icons/wallet2.svg" }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "w-[22.05px] h-5 relative" }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "w-[22.41px] h-[10.37px] relative" }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "w-[13.89px] h-[7.50px] relative" }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "w-[12.57px] h-[5.76px] relative" }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "h-[2.76px] relative" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "grow shrink basis-0 h-[19px] justify-start items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "mix-blend-difference text-center text-white text-opacity-80 text-base font-normal font-montserrat leading-tight", children: "Metamask" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "self-stretch py-3 justify-start items-center gap-2 inline-flex", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "px-2 justify-start items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "text-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "text-zinc-500 text-opacity-70 text-sm font-normal font-montserrat leading-[16.80px]", children: "Not sure? " }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "text-zinc-500 text-opacity-70 text-sm font-normal font-montserrat underline leading-[16.80px]", children: "Read more." })
      ] }) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Footer, {})
  ] }) });
}

// src/index.tsx
var import_wagmi2 = require("wagmi");
var import_chains = require("wagmi/chains");
var import_public = require("wagmi/providers/public");
var import_metaMask = require("wagmi/connectors/metaMask");
var import_walletConnect = require("wagmi/connectors/walletConnect");
var import_coinbaseWallet = require("wagmi/connectors/coinbaseWallet");

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
var import_jsx_runtime15 = require("react/jsx-runtime");
window.Buffer = window.Buffer || require("buffer").Buffer;
var { chains, publicClient, webSocketPublicClient } = (0, import_wagmi2.configureChains)(
  [
    import_chains.mainnet,
    import_chains.polygon,
    import_chains.optimism,
    import_chains.arbitrum,
    import_chains.base,
    import_chains.zora,
    ...process.env.REACT_APP_ENABLE_TESTNETS === "true" ? [import_chains.goerli] : []
  ],
  [(0, import_public.publicProvider)()]
);
var getDefaultWallets = ({ appName, projectId, chains: chains2 }) => {
  const connectors2 = [
    new import_coinbaseWallet.CoinbaseWalletConnector({
      chains: chains2,
      options: {
        appName,
        shimDisconnect: true
      }
    }),
    new import_walletConnect.WalletConnectConnector({
      chains: chains2,
      options: {
        projectId,
        qrcode: true,
        shimDisconnect: true
      }
    }),
    new import_metaMask.MetaMaskConnector({
      chains: chains2,
      options: {
        shimDisconnect: true,
        UNSTABLE_shimOnConnectSelectAccount: true
      }
    })
  ];
  return { connectors: connectors2 };
};
var { connectors } = getDefaultWallets({
  appName: "Customer App powered by Tria",
  projectId: "bd38d3892c8fd8bc9dabf6fced0bd3c6",
  chains
});
var iframe = new IframeController(
  "https://opensea.com",
  "https://wallet.tria.so"
);
console.log("ifrome", iframe);
var authController = new import_core.AuthController("https://staging.tria.so");
var wagmiConfig = (0, import_wagmi2.createConfig)({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient
});
var Application = ({ dappName, logo }) => {
  const [view, setView] = (0, import_react8.useState)("Home");
  const [triaName, setTriaName] = (0, import_react8.useState)("");
  const [email, setEmail] = (0, import_react8.useState)("");
  const [showWallet, setShowWallet] = (0, import_react8.useState)(false);
  const [isDarkMode, setIsDarkMode] = (0, import_react8.useState)(true);
  const [showOnboarding, setShowOnboarding] = (0, import_react8.useState)(true);
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
    email,
    setEmail
  };
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_jsx_runtime15.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_wagmi2.WagmiConfig, { config: wagmiConfig, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(NavContext_default.Provider, { value: nav_context_object, children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_react_router_dom5.BrowserRouter, { children: [
      showWallet && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "bg flex  justify-between bg-black", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "mb-4 mr-2 absolute right-0 bottom-40 bg-black", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("iframe", { width: "450", height: "840", src: "https://reliable-semifreddo-e8e93e.netlify.app/" }) }) }),
      showOnboarding && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: `absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md border border-gray-800 rounded-lg ${isDarkMode ? "dark" : ""}`, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "", children: [
        view === "Home" ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Home, {}) : null,
        view === "Sign Up" ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(SignUp, {}) : null,
        view === "Confirm Email" ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(index, {}) : null,
        view === "Sign In Password" ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(SignInPassword, {}) : null,
        view === "Welcome" ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Welcome, {}) : null,
        view === "Onboarding" ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Onboarding, {}) : null,
        view === "Create A Wallet" ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(index2, {}) : null
      ] }) })
    ] }),
    triaName && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      "div",
      {
        className: "wallet_icon fixed w-[80px] bottom-4 right-8 cursor-pointer",
        onClick: () => {
          setShowWallet(!showWallet);
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "relative ", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "left-[15.49px] top-[15.49px]", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("svg", { width: "134", height: "134", viewBox: "0 0 134 134", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("g", { filter: "url(#filter0_d_1316_13027)", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("rect", { x: "35", y: "35", width: "64", height: "64", rx: "32", fill: "url(#paint0_linear_1316_13027)" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("g", { filter: "url(#filter1_d_1316_13027)", children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("rect", { x: "37.5098", y: "37.5098", width: "58.9804", height: "58.9804", rx: "29.4902", fill: "url(#paint1_linear_1316_13027)", "shape-rendering": "crispEdges" }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("g", { "clip-path": "url(#clip0_1316_13027)", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M81 53H53V81H81V53ZM67.8533 61.2654V64.9058L73.8652 62.5352V65.2285C73.8652 65.8062 73.5281 66.3228 73.0206 66.5229L67.8533 68.5606V65.8728C67.8498 65.2986 67.5136 64.7863 67.0087 64.5872L62.686 62.8826C62.1784 62.6824 61.8414 62.1658 61.8414 61.5881V58.8948L67.8533 61.2654ZM67.8533 68.5767V69.2782H67.8618V76.8857H65.3848V71.2581L62.686 70.1938C62.1784 69.9937 61.8414 69.4771 61.8414 68.8993V66.206L67.8533 68.5767Z", fill: "white" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("rect", { x: "37.7598", y: "37.7598", width: "58.4804", height: "58.4804", rx: "29.2402", stroke: "#9A87FF", "stroke-width": "0.5", "shape-rendering": "crispEdges" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("defs", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("filter", { id: "filter0_d_1316_13027", x: "0", y: "0", width: "134", height: "134", filterUnits: "userSpaceOnUse", "color-interpolation-filters": "sRGB", children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("feOffset", {}),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("feGaussianBlur", { stdDeviation: "17.5" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.567674 0 0 0 0 0.48 0 0 0 0 1 0 0 0 0.35 0" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_1316_13027" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_1316_13027", result: "shape" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("filter", { id: "filter1_d_1316_13027", x: "6.50977", y: "6.50977", width: "120.98", height: "120.98", filterUnits: "userSpaceOnUse", "color-interpolation-filters": "sRGB", children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("feOffset", {}),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("feGaussianBlur", { stdDeviation: "15.5" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("feComposite", { in2: "hardAlpha", operator: "out" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.567674 0 0 0 0 0.48 0 0 0 0 1 0 0 0 0.68 0" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_1316_13027" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_1316_13027", result: "shape" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("linearGradient", { id: "paint0_linear_1316_13027", x1: "35", y1: "35", x2: "112.218", y2: "65.1631", gradientUnits: "userSpaceOnUse", children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("stop", { "stop-color": "white" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("stop", { offset: "1", "stop-color": "#D2CAF8" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("linearGradient", { id: "paint1_linear_1316_13027", x1: "37.5098", y1: "37.5098", x2: "108.671", y2: "65.3071", gradientUnits: "userSpaceOnUse", children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("stop", { "stop-color": "#9F8BFF" }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("stop", { offset: "1", "stop-color": "#7053FF" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("clipPath", { id: "clip0_1316_13027", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("rect", { x: "53", y: "53", width: "28", height: "28", rx: "6", fill: "white" }) })
          ] })
        ] }) }) })
      }
    )
  ] }) }) });
};
var src_default = Application;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getDefaultWallets
});
//# sourceMappingURL=index.js.map