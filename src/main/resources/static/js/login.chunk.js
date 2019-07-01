(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login"],{

/***/ "./src/Login.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_login_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/css/login.scss");
/* harmony import */ var _css_login_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_login_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/_react@16.8.6@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_react-dom@16.8.6@react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_common_AxiosInstance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/js/common/AxiosInstance.tsx");
/* harmony import */ var _js_common_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/js/common/Button.tsx");





class Login extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
    constructor() {
        super(...arguments);
        this.userDom = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        this.psdDom = react__WEBPACK_IMPORTED_MODULE_1__["createRef"]();
        this.state = {
            isFetching: false,
            warnTxt: ""
        };
        this.loginHandle = () => {
            const name = (this.userDom.current).value;
            const pwd = (this.psdDom.current).value;
            if (!name || !pwd) {
                this.setState({
                    warnTxt: "填写用户名和密码！"
                });
                return;
            }
            this.setState({
                isFetching: true
            });
            Object(_js_common_AxiosInstance__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({
                url: "login/logVal",
                method: "post",
                data: { name, pwd: window.hex_md5(window.hex_md5(pwd)) },
                headers: {
                    "Content-Type": "application/json",
                }
            }).then((res) => {
                let txt = "";
                switch (res.code) {
                    case 200: {
                        window.location.href = window.getSession("getPath") + "index";
                        break;
                    }
                    default:
                        txt = res.message;
                        break;
                }
                ;
                this.setState({
                    isFetching: false,
                    warnTxt: txt
                });
            });
        };
    }
    render() {
        const { isFetching, warnTxt } = this.state;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "g-login" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "m-login" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "login-title" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("svg", { style: { width: "100%", height: "100%" } },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("polygon", { points: "20,0 280,0 300,40 280,80 20,80 0,40", fill: "#00a0e9" }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("text", { x: "150", y: "50", fill: "white", textAnchor: "middle" }, "\u51FA\u9662\u5C0F\u7ED3\u7BA1\u7406\u7CFB\u7EDF"))),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "login-content" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { style: { color: "#00a0e9" } }, "\u8D26\u53F7\u767B\u5F55"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "login-inpBox" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "login-inp" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", ref: this.userDom, className: "s-inp", placeholder: "\u7528\u6237\u540D" })),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "login-inp" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "password", ref: this.psdDom, className: "s-inp", placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801" }))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "submit-btn" },
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_js_common_Button__WEBPACK_IMPORTED_MODULE_4__[/* Button */ "a"], { handle: this.loginHandle, otherName: "login-btn" },
                            isFetching ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { style: { paddingRight: 20 } },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("i", { className: "fa fa-spinner fa-pulse fa-lg fa-fw" })) : null,
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("b", null, "\u767B \u5F55")),
                        warnTxt ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "m-warn" },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_js_common_Button__WEBPACK_IMPORTED_MODULE_4__[/* Icon */ "b"], { styleType: "fa-exclamation-triangle" }),
                            warnTxt) : null)),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "login-footer" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, "\u957F\u57CE\u7F51\u79D1\u667A\u6167\u533B\u7597"),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, "v1.0.0"))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { className: "copyright" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, "Copyright@ 2017 \u6DF1\u5733\u5E02\u957F\u57CE\u7F51\u4FE1\u606F\u79D1\u6280\u80A1\u4EFD\u6709\u9650\u516C\u53F8 \u7248\u6743\u6240\u6709 "))));
    }
}
;
Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["render"])(react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Login, null), document.getElementById("app"));


/***/ }),

/***/ "./src/css/login.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/common/AxiosInstance.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_axios@0.18.0@axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
    baseURL: window.getSession("getPath"),
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest',
        'X-Custom-Header': 'foobar'
    },
});
instance.interceptors.response.use(function (response) {
    if (response.headers["content-type"].includes("text/html")) {
        window.location.href = window.getSession("getPath") + "login";
        return Promise.reject();
    }
    if (response.data.code == 200 || response.data.code == 4000) {
        return response.data;
    }
    else { // session过期，重新登录
        return Promise.reject(response.data);
    }
}, function (error) {
    return Promise.reject(error);
});
/* harmony default export */ __webpack_exports__["a"] = (instance);


/***/ }),

/***/ "./src/js/common/Button.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SvgIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_react@16.8.6@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

class Button extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            timeId: undefined
        };
        this.keyUp = (e) => {
            const target = e.currentTarget;
            const { timeId } = this.state;
            if (timeId != undefined) {
                window.clearTimeout(timeId);
            }
            target.classList.add("btn-clicked");
            const newTimeid = window.setTimeout(function () {
                target.classList.remove("btn-clicked");
            }, 400);
            this.setState({
                timeId: newTimeid
            });
        };
    }
    componentWillUnmount() {
        const timeId = this.state.timeId;
        if (timeId) {
            clearTimeout(timeId);
        }
    }
    render() {
        const { children, handle, styleType, type, field, otherName } = this.props;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { onClick: handle, name: field, className: `s-btn ${styleType} ${type} ${otherName}`, onMouseUp: this.keyUp }, children));
    }
}
Button.defaultProps = {
    styleType: "normal-btn",
    type: "primary",
    otherName: ""
};
class Icon extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        const { children, styleType } = this.props;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", { className: `fa ${styleType}` },
            children,
            "\u00A0"));
    }
}
class SvgIcon extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
    render() {
        const { styleType, size } = this.props;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { className: `icon ${size}`, "aria-hidden": "true" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", { xlinkHref: `#icon-${styleType}` })),
            "\u00A0"));
    }
}
SvgIcon.defaultProps = {
    size: ""
};



/***/ })

},[["./src/Login.tsx","manifest","vendor"]]]);
//# sourceMappingURL=login.chunk.js.map