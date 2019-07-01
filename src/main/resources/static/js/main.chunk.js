(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/App.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/css/main.scss");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/js/index.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/_react-redux@6.0.1@react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/_redux@4.0.1@redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/_redux-thunk@2.3.0@redux-thunk/es/index.js");
/* harmony import */ var _js_actions_rootReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/js/actions/rootReducer.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/_react@16.8.6@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/_react-dom@16.8.6@react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var velocity_animate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/_velocity-animate@1.5.2@velocity-animate/velocity.js");
/* harmony import */ var velocity_animate__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(velocity_animate__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var velocity_animate_velocity_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/_velocity-animate@1.5.2@velocity-animate/velocity.ui.js");
/* harmony import */ var velocity_animate_velocity_ui__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(velocity_animate_velocity_ui__WEBPACK_IMPORTED_MODULE_9__);




//import {logger} from "redux-logger" ;






const middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]];
let store;
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    store = Object(redux__WEBPACK_IMPORTED_MODULE_3__[/* createStore */ "e"])(_js_actions_rootReducer__WEBPACK_IMPORTED_MODULE_5__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_3__[/* compose */ "d"])(Object(redux__WEBPACK_IMPORTED_MODULE_3__[/* applyMiddleware */ "a"])(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__()));
}
else {
    store = Object(redux__WEBPACK_IMPORTED_MODULE_3__[/* createStore */ "e"])(_js_actions_rootReducer__WEBPACK_IMPORTED_MODULE_5__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_3__[/* applyMiddleware */ "a"])(...middleware));
}
/*const store  = createStore(rootRecuders,compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));*/
const domApp = document.getElementById("app");
react_dom__WEBPACK_IMPORTED_MODULE_7__["render"]((react__WEBPACK_IMPORTED_MODULE_6__["createElement"](react_redux__WEBPACK_IMPORTED_MODULE_2__[/* Provider */ "a"], { store: store },
    react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_js_index__WEBPACK_IMPORTED_MODULE_1__["default"], null))), domApp);
if (true) {
    // 热替换react
    module.hot.accept("./src/js/index.tsx", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _js_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/js/index.tsx");
(() => {
        Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "./src/js/index.tsx")).then((module) => {
            const AppCom = module.default;
            react_dom__WEBPACK_IMPORTED_MODULE_7__["render"]((react__WEBPACK_IMPORTED_MODULE_6__["createElement"](react_redux__WEBPACK_IMPORTED_MODULE_2__[/* Provider */ "a"], { store: store },
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](AppCom, null))), domApp);
        });
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
    //热替换redux
    module.hot.accept("./src/js/actions/rootReducer.tsx", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _js_actions_rootReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/js/actions/rootReducer.tsx");
(() => {
        Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "./src/js/actions/rootReducer.tsx")).then((module) => {
            const nextRootReducers = module.default;
            store.replaceReducer(nextRootReducers);
        });
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
}


/***/ }),

/***/ "./src/css/Calendar.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/alertInfo.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/combobox.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/main.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/menu.scss":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/actions/appAction.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/js/actions/createReucer.tsx
function createReducer(initState, actionHandle) {
    return function (state = initState, action) {
        if (actionHandle.hasOwnProperty(action.type)) {
            return actionHandle[action.type](state, action);
        }
        else {
            return state;
        }
    };
}
;

// EXTERNAL MODULE: ./src/js/common/ImmutableMap.tsx
var ImmutableMap = __webpack_require__("./src/js/common/ImmutableMap.tsx");

// CONCATENATED MODULE: ./src/js/actions/appAction.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return userInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return changeRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return changeMenuUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return changeFilterType; });


const defaultApp = Object.assign({ menuUrl: "0,0", filterType: "0" }, window.getSession("getUser"));
const defaultLoginState = Object(ImmutableMap["a" /* createTypedMap */])(defaultApp);
const CHANGE_ROLE = "CHANGE_ROLE";
const CHANGE_MENUURL = "CHANGE_MENUURL";
const CHANGE_FILTER = "CHANGE_FILTER";
const changeRole = (roleId) => {
    return {
        type: CHANGE_ROLE,
        roleId,
    };
};
const changeMenuUrl = (menuUrl) => {
    return {
        type: CHANGE_MENUURL,
        menuUrl,
    };
};
const changeFilterType = (fitler) => {
    return {
        type: CHANGE_FILTER,
        fitler,
    };
};
const userInfo = createReducer(defaultLoginState, {
    [CHANGE_ROLE]: function (state, action) {
        return state.set("role_index", action.roleId).set("menuUrl", "0,0").set("filterType", "0");
    },
    [CHANGE_MENUURL]: function (state, action) {
        return state.set("menuUrl", action.menuUrl);
    },
    [CHANGE_FILTER]: function (state, action) {
        return state.set("filterType", action.fitler).set("menuUrl", "0,0");
    }
});



/***/ }),

/***/ "./src/js/actions/rootReducer.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_redux@4.0.1@redux/es/redux.js");
/* harmony import */ var _appAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/js/actions/appAction.tsx");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[/* combineReducers */ "c"])({
    app: _appAction__WEBPACK_IMPORTED_MODULE_1__[/* userInfo */ "d"],
}));


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



/***/ }),

/***/ "./src/js/common/ImmutableMap.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createTypedMap; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/_immutable@4.0.0-rc.12@immutable/dist/immutable.es.js");

const createTypedMap = (data) => immutable__WEBPACK_IMPORTED_MODULE_0__[/* Map */ "b"](data);



/***/ }),

/***/ "./src/js/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/_react@16.8.6@react/index.js
var _react_16_8_6_react = __webpack_require__("./node_modules/_react@16.8.6@react/index.js");

// EXTERNAL MODULE: ./node_modules/_react-router@5.0.0@react-router/esm/react-router.js
var react_router = __webpack_require__("./node_modules/_react-router@5.0.0@react-router/esm/react-router.js");

// EXTERNAL MODULE: ./node_modules/_react-router-dom@5.0.0@react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__("./node_modules/_react-router-dom@5.0.0@react-router-dom/esm/react-router-dom.js");

// EXTERNAL MODULE: ./src/css/menu.scss
var menu = __webpack_require__("./src/css/menu.scss");

// EXTERNAL MODULE: ./node_modules/_immutable@4.0.0-rc.12@immutable/dist/immutable.es.js
var immutable_es = __webpack_require__("./node_modules/_immutable@4.0.0-rc.12@immutable/dist/immutable.es.js");

// EXTERNAL MODULE: ./node_modules/_velocity-react@1.4.3@velocity-react/index.js
var _velocity_react_1_4_3_velocity_react = __webpack_require__("./node_modules/_velocity-react@1.4.3@velocity-react/index.js");

// EXTERNAL MODULE: ./src/js/common/Button.tsx
var Button = __webpack_require__("./src/js/common/Button.tsx");

// CONCATENATED MODULE: ./src/js/common/NavMenu.tsx






class NavMenu_ParMenu extends _react_16_8_6_react["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            drop: true,
        };
        this.toggle = () => {
            this.setState((prevState) => ({ drop: !prevState.drop }));
        };
    }
    render() {
        const { obj, textField, idField, iconField, pathField, slectItem, sub, index } = this.props;
        //	const path = obj.get(pathField);
        const text = obj.get(textField);
        const icon = obj.get(iconField);
        const activeName = obj.get("active") ? "active" : "";
        const hObj = this.props.expand ? { display: "block" } : {};
        return (_react_16_8_6_react["createElement"]("li", { className: "li-par" },
            _react_16_8_6_react["createElement"]("div", { className: "menu-item menu-par " + activeName },
                _react_16_8_6_react["createElement"]("span", { className: "par-icon" },
                    _react_16_8_6_react["createElement"](Button["c" /* SvgIcon */], { styleType: icon })),
                _react_16_8_6_react["createElement"]("span", { className: "j-nav" }, text),
                _react_16_8_6_react["createElement"]("span", { className: "j-slide_menu", onClick: this.toggle },
                    _react_16_8_6_react["createElement"]("i", { className: "fa fa-chevron-" + (!this.state.drop ? "down" : "up") }))),
            _react_16_8_6_react["createElement"](_velocity_react_1_4_3_velocity_react["VelocityComponent"], { animation: this.state.drop ? "slideDown" : "slideUp", duration: 300 },
                _react_16_8_6_react["createElement"]("ul", { className: "child-ul ", style: hObj }, sub.map((node, childIndex) => {
                    const nodeId = node.get(idField);
                    return _react_16_8_6_react["createElement"](NavMenu_SubMenu, { obj: node, key: nodeId, slectItem: slectItem, idField: idField, textField: textField, iconField: iconField, pathField: pathField, parIndex: index, index: childIndex });
                })))));
    }
}
class NavMenu_SubMenu extends _react_16_8_6_react["PureComponent"] {
    render() {
        const { obj, idField, textField, pathField, slectItem, parIndex, index } = this.props;
        const path = obj.get(pathField);
        const text = obj.get(textField);
        const id = obj.get(idField);
        const pathObj = {
            pathname: path,
            state: {
                id,
                text
            },
        };
        const activeName = obj.get("active") ? "active" : "";
        return (_react_16_8_6_react["createElement"]("li", { className: "li-child" },
            _react_16_8_6_react["createElement"]("div", { className: "menu-item menu-child " + activeName },
                _react_16_8_6_react["createElement"]("span", { className: "j-nav", onClick: () => slectItem(index, parIndex) },
                    _react_16_8_6_react["createElement"](react_router_dom["b" /* NavLink */], { to: pathObj }, text)))));
    }
}
class NavMenu_NavMenu extends _react_16_8_6_react["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            data: immutable_es["c" /* fromJS */](this.addFieldToData(this.props.data, this.props.menuUrl.split(","))),
            preIndex: this.props.menuUrl.split(","),
        };
        this.slectItem = (index, parIndex) => {
            const { childrenField } = this.props;
            const curPath = parIndex ? (parIndex + "" + index) : (index + "");
            if (curPath === this.state.preIndex.join("")) {
                return;
            }
            this.setState(pre => {
                let preIndex;
                let data = this.restPreSel(pre);
                data = data.updateIn([(parIndex !== undefined ? parIndex : index)], (node) => {
                    return node.set("active", true);
                });
                if (parIndex !== undefined) { //  子节点
                    data = data.updateIn([parIndex, childrenField, index], (node) => {
                        return node.set("active", true);
                    });
                    preIndex = [parIndex, index];
                }
                else {
                    preIndex = [index];
                }
                return { data, preIndex };
            }, () => {
                this.props.clickBack && this.props.clickBack();
            });
        };
    }
    addFieldToData(data, preIndex) {
        return data.map((val, index) => {
            const is_firstPar = index == preIndex[0];
            val.active = is_firstPar;
            const child = val.children.map((node, oIndex) => {
                node.active = (is_firstPar && oIndex == preIndex[1]) || false;
                return node;
            });
            val.children = child;
            return val;
        });
    }
    componentWillReceiveProps(nextProp) {
        if (nextProp.data !== this.props.data || nextProp.menuUrl !== this.props.menuUrl) {
            this.setState({
                data: immutable_es["c" /* fromJS */](this.addFieldToData(nextProp.data, nextProp.menuUrl.split(","))),
                preIndex: [0, 0],
            });
        }
    }
    restPreSel(pre) {
        const { preIndex, data } = pre;
        const { childrenField } = this.props;
        if (preIndex.length === 0) {
            return data;
        }
        let newSata;
        newSata = data.updateIn([preIndex[0]], (node) => {
            return node.set("active", false);
        });
        if (preIndex.length > 1) {
            newSata = newSata.updateIn([preIndex[0], childrenField, preIndex[1]], (node) => {
                return node.set("active", false);
            });
        }
        return newSata;
    }
    render() {
        const { textField, childrenField, idField, iconField, expand, pathField } = this.props;
        const { data } = this.state;
        return _react_16_8_6_react["createElement"]("ul", { className: "g-menu" }, data.map((item, oIndex) => {
            const val = item;
            const child = val.get(childrenField);
            const id = val.get("id");
            if (child && child.size) {
                return _react_16_8_6_react["createElement"](NavMenu_ParMenu, { expand: expand, index: oIndex, sub: child, obj: val, key: id, slectItem: this.slectItem, idField: idField, textField: textField, pathField: pathField, iconField: iconField });
            }
            else {
                return _react_16_8_6_react["createElement"](NavMenu_SubMenu, { obj: val, key: id, slectItem: this.slectItem, index: oIndex, idField: idField, textField: textField, pathField: pathField, iconField: iconField });
            }
        }));
    }
}
NavMenu_NavMenu.defaultProps = {
    textField: "text",
    childrenField: "children",
    pathField: "url",
    iconField: "icon",
    idField: "id",
    defaultNav: [],
    menuUrl: "0,0"
};
/* harmony default export */ var common_NavMenu = (NavMenu_NavMenu);

// CONCATENATED MODULE: ./src/js/common/ErrorBoundary.tsx

class ErrorBoundary_ErrorBoundary extends _react_16_8_6_react["Component"] {
    constructor() {
        super(...arguments);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        console.log(error);
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        console.log(error, info);
    }
    render() {
        if (this.state.hasError) {
            return _react_16_8_6_react["createElement"]("div", null, "\u7EC4\u4EF6\u51FA\u9519\uFF01");
        }
        else {
            return this.props.children;
        }
    }
}

// EXTERNAL MODULE: ./node_modules/_react-redux@6.0.1@react-redux/es/index.js + 15 modules
var es = __webpack_require__("./node_modules/_react-redux@6.0.1@react-redux/es/index.js");

// EXTERNAL MODULE: ./src/js/common/AxiosInstance.tsx
var AxiosInstance = __webpack_require__("./src/js/common/AxiosInstance.tsx");

// EXTERNAL MODULE: ./node_modules/_qs@6.7.0@qs/lib/index.js
var lib = __webpack_require__("./node_modules/_qs@6.7.0@qs/lib/index.js");

// CONCATENATED MODULE: ./src/api/main.tsx


/* harmony default export */ var main = ({
    getMenu: function (data) {
        return AxiosInstance["a" /* default */].get("summary/getMenu", {
            params: data
        });
    },
    checkPwd: function (user_id, password) {
        return AxiosInstance["a" /* default */].post("summary/checkPwd", lib["stringify"]({ user_id, password }));
    },
    updatePwd: function (user_id, password) {
        return AxiosInstance["a" /* default */].post("summary/updatePwd", lib["stringify"]({ user_id, password }));
    },
    logOut: function () {
        return AxiosInstance["a" /* default */].get("login/logOut");
    }
});

// EXTERNAL MODULE: ./src/js/actions/appAction.tsx + 1 modules
var appAction = __webpack_require__("./src/js/actions/appAction.tsx");

// CONCATENATED MODULE: ./src/js/containers/SlideMenu.tsx









class SlideMenu_SlideMenu extends _react_16_8_6_react["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            expand: true,
            data: [],
        };
        this.expandHandle = () => {
            this.setState((prevState) => {
                return {
                    expand: !prevState.expand,
                };
            });
        };
        this.restFilter = () => {
            this.props.dispatchChangeFilter("0");
        };
    }
    getMenu(role_id) {
        main.getMenu({ role_id }).then(res => {
            this.setState(() => ({
                data: res.data,
            }), () => {
                this.firstNav();
            });
        });
    }
    firstNav() {
        const { history } = this.props;
        const { data } = this.state;
        const firstNode = data[0].children[0];
        history.push({
            pathname: firstNode.url,
            state: {
                text: firstNode.name,
            }
        });
    }
    componentDidMount() {
        this.getMenu(this.props.roleId);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.roleId != this.props.roleId) {
            this.getMenu(nextProps.roleId);
        }
    }
    render() {
        const { expand, data } = this.state;
        const { menuUrl } = this.props;
        return (_react_16_8_6_react["createElement"](_velocity_react_1_4_3_velocity_react["VelocityComponent"], { duration: 300, animation: { width: this.state.expand ? 250 : 50 } },
            _react_16_8_6_react["createElement"]("div", { className: "g-slideMenu " + (!expand ? "expand" : "") },
                _react_16_8_6_react["createElement"]("div", { className: "g-logo" },
                    _react_16_8_6_react["createElement"]("span", { className: "m-logo" }),
                    _react_16_8_6_react["createElement"]("span", { className: "j-slideBar", onClick: this.expandHandle },
                        _react_16_8_6_react["createElement"](Button["c" /* SvgIcon */], { styleType: expand ? "menu-expand" : "menu-shrink", size: "size2" }))),
                _react_16_8_6_react["createElement"](ErrorBoundary_ErrorBoundary, null, data.length ?
                    _react_16_8_6_react["createElement"](common_NavMenu, { data: data, expand: expand, textField: "name", iconField: "sysParam", menuUrl: menuUrl, clickBack: this.restFilter }) : null))));
    }
}
const mapStateToProp = ({ app }) => {
    const roleId = app.get("role_ids")[app.get("role_index")];
    const menuUrl = app.get("menuUrl");
    return {
        roleId,
        menuUrl
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchChangeFilter: function (filter) {
            dispatch(Object(appAction["a" /* changeFilterType */])(filter));
        }
    };
};
/* harmony default export */ var containers_SlideMenu = (Object(react_router["f" /* withRouter */])(Object(es["b" /* connect */])(mapStateToProp, mapDispatchToProps)(SlideMenu_SlideMenu)));

// EXTERNAL MODULE: ./node_modules/_react-dom@16.8.6@react-dom/index.js
var _react_dom_16_8_6_react_dom = __webpack_require__("./node_modules/_react-dom@16.8.6@react-dom/index.js");

// CONCATENATED MODULE: ./src/js/common/Modal.tsx




class Modal_Modal extends _react_16_8_6_react["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            pointX: 0,
            pointY: 0,
        };
        this.ModalDom = _react_16_8_6_react["createRef"]();
        this.headMouseDown = (e) => {
            const modalDom = (this.ModalDom.current);
            const { pointY, pointX } = this.state;
            //主义要减去上一次移动留下的位置
            const diffPointX = e.clientX - pointX;
            const diffPointY = e.clientY - pointY;
            modalDom.onmousemove = (originE) => {
                this.setState({
                    pointX: (originE.clientX - diffPointX),
                    pointY: (originE.clientY - diffPointY),
                });
            };
        };
        this.headMouseUp = () => {
            (this.ModalDom.current).onmousemove = null;
        };
        this.sureHandle = () => {
            const { onSure } = this.props;
            onSure();
        };
    }
    render() {
        const { children, container, tit, confirmName, cancelName, onCancel, show, className, type, width } = this.props;
        let flag = container;
        const { pointX, pointY } = this.state;
        return _react_dom_16_8_6_react_dom["createPortal"]((_react_16_8_6_react["createElement"](_velocity_react_1_4_3_velocity_react["VelocityComponent"], { runOnMount: true, animation: show ? "transition.bounceDownIn" : "transition.bounceDownOut" },
            _react_16_8_6_react["createElement"]("div", { className: "g-modal " + className, ref: this.ModalDom, onMouseUp: this.headMouseUp },
                _react_16_8_6_react["createElement"]("div", { className: "m-Mwrap" },
                    _react_16_8_6_react["createElement"]("div", { className: "m-Mask" }),
                    _react_16_8_6_react["createElement"]("div", { className: "m-Modal", style: { transform: `translate(${pointX}px , ${pointY}px)`, width } },
                        _react_16_8_6_react["createElement"]("div", { className: "m-Mtit", onMouseDown: this.headMouseDown },
                            _react_16_8_6_react["createElement"]("span", { className: "tit-name" },
                                type ? _react_16_8_6_react["createElement"](Button["b" /* Icon */], { styleType: type == "tip" ? "fa-exclamation-circle fa-lg" : "fa-question-circle fa-lg" }) : null,
                                tit),
                            _react_16_8_6_react["createElement"]("span", { className: "m-Mclose", onClick: onCancel },
                                _react_16_8_6_react["createElement"]("i", { className: "fa fa-times fa-2x" }))),
                        _react_16_8_6_react["createElement"]("div", { className: "m-Mbody" }, children),
                        _react_16_8_6_react["createElement"]("div", { className: "m-Mfooter" },
                            _react_16_8_6_react["createElement"]("button", { className: "s-btn line-btn green", onClick: onCancel }, cancelName),
                            _react_16_8_6_react["createElement"]("button", { className: "s-btn normal-btn primary", onClick: this.sureHandle }, confirmName))))))), flag);
    }
}
Modal_Modal.defaultProps = {
    ableMove: true,
    shadeTransparent: false,
    confirmName: "确定",
    cancelName: "关闭",
};

// CONCATENATED MODULE: ./src/js/common/InputBtn.tsx

class InputBtn_Radio extends _react_16_8_6_react["PureComponent"] {
    render() {
        const { data, nameFiled } = this.props;
        return (_react_16_8_6_react["createElement"]("span", { className: "m-radio" }, data.map(({ value, tit }) => {
            return _react_16_8_6_react["createElement"](InputBtn_Radio.Item, { key: value, value: value, tit: tit, nameFiled: nameFiled });
        })));
    }
}
InputBtn_Radio.Item = ({ value, tit, nameFiled }) => {
    return (_react_16_8_6_react["createElement"]("label", { className: "m-label m-lab-radio", key: value },
        _react_16_8_6_react["createElement"]("span", { className: "lab-tit" }, tit),
        _react_16_8_6_react["createElement"]("input", { type: "radio", name: nameFiled, value: value })));
};
class InputBtn_Checkbox extends _react_16_8_6_react["PureComponent"] {
    render() {
        const { data, nameFiled, changeHandle } = this.props;
        return (_react_16_8_6_react["createElement"]("span", { className: "m-checkbox" }, data.map(({ value, tit, checked }) => {
            return _react_16_8_6_react["createElement"](InputBtn_Checkbox.Item, { checked: checked, key: value, tit: tit, nameFiled: nameFiled, changeHandle: changeHandle });
        })));
    }
}
InputBtn_Checkbox.Item = ({ tit, nameFiled, changeHandle, checked, hasChecked }) => {
    return (_react_16_8_6_react["createElement"]("label", { className: "m-label m-lab-checkbox" },
        _react_16_8_6_react["createElement"]("input", { type: "checkbox", className: hasChecked ? "has-check" : "", name: nameFiled, checked: checked, onChange: changeHandle }),
        tit ? (_react_16_8_6_react["createElement"]("span", { className: "lab-tit" }, tit)) : null));
};
class InputBtn_ComboInp extends _react_16_8_6_react["PureComponent"] {
    render() {
        const { multiply, toggleDrop, value, drop, hasSlideIcon, placeholder } = this.props;
        return (_react_16_8_6_react["createElement"]("div", { className: "m-combo-inp", onClick: toggleDrop },
            _react_16_8_6_react["createElement"]("span", null, !multiply ? _react_16_8_6_react["createElement"]("input", { type: "text", className: "m-inp", readOnly: true, value: value, placeholder: placeholder ? placeholder : "单选" }) : (_react_16_8_6_react["createElement"]("textarea", { value: value, className: "m-inp", readOnly: true, placeholder: placeholder ? placeholder : "多选" }))),
            hasSlideIcon ? (_react_16_8_6_react["createElement"]("span", { className: "j-slide" },
                _react_16_8_6_react["createElement"]("i", { className: "fa " + (drop ? "fa-chevron-up" : "fa-chevron-down") }))) : null));
    }
}
class InputBtn_InpBox extends _react_16_8_6_react["PureComponent"] {
    constructor() {
        super(...arguments);
        this.changeHandle = (e) => {
            const { changeHandle, field } = this.props;
            const value = e.target.value.trim();
            changeHandle(field, value);
        };
    }
    render() {
        const { type, title, styleType, value, placeholder } = this.props;
        const fillStatus = value ? "" : " no-fill ";
        return (_react_16_8_6_react["createElement"]("div", { className: "item-inp" },
            _react_16_8_6_react["createElement"]("span", { className: "m-inp-tit" },
                title,
                " "),
            _react_16_8_6_react["createElement"]("input", { type: type, className: "s-inp " + fillStatus + styleType, value: value, onChange: this.changeHandle, placeholder: placeholder })));
    }
}


// EXTERNAL MODULE: ./src/css/alertInfo.scss
var alertInfo = __webpack_require__("./src/css/alertInfo.scss");

// CONCATENATED MODULE: ./src/js/common/toast/index.tsx




class toast_Notification extends _react_16_8_6_react["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            notices: []
        };
        this.closeHandle = (e) => {
            const key = e.currentTarget.dataset.key;
            this.removeNotice(key);
        };
        this.removeNotice = (key) => {
            this.setState(pre => {
                return {
                    notices: pre.notices.filter(val => val.sigin !== key)
                };
            });
        };
    }
    addNotice(tit, type, time = 1400) {
        this.setState(pre => {
            const notice = pre.notices;
            const sigin = this.getKey(notice.length);
            return {
                notices: pre.notices.concat({ tit, type, sigin, time })
            };
        });
    }
    getKey(index) {
        return new Date().getTime() + "-" + index;
    }
    render() {
        const { notices } = this.state;
        const dom = document.getElementById("s-modal");
        return dom ? Object(_react_dom_16_8_6_react_dom["createPortal"])((_react_16_8_6_react["createElement"]("div", { className: "g-notification" }, notices.map((node) => {
            const { tit, type, sigin, time } = node;
            return _react_16_8_6_react["createElement"](toast_Notice, { del: this.removeNotice, tit: tit, type: type, time: time, key: sigin, closeHandle: this.closeHandle, sigin: sigin });
        }))), dom) : null;
    }
}
;
class toast_Notice extends _react_16_8_6_react["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            timeId: undefined
        };
    }
    componentDidMount() {
        const { time, del, sigin } = this.props;
        if (time > 0) {
            const timeId = window.setTimeout(function () {
                del(sigin);
            }, time);
            this.setState({
                timeId,
            });
        }
    }
    componentWillUnmount() {
        const timeId = this.state.timeId;
        if (timeId) {
            window.clearTimeout(timeId);
        }
    }
    render() {
        const { type, tit, closeHandle, sigin } = this.props;
        return (_react_16_8_6_react["createElement"](_velocity_react_1_4_3_velocity_react["VelocityComponent"], { animation: "transition.bounceRightIn", runOnMount: true },
            _react_16_8_6_react["createElement"]("div", null,
                _react_16_8_6_react["createElement"]("span", { className: "g-alertInfo" },
                    _react_16_8_6_react["createElement"]("span", null,
                        _react_16_8_6_react["createElement"]("span", { className: type, style: { paddingRight: 8, fontSize: 24 } },
                            _react_16_8_6_react["createElement"]("i", { className: "fa " + (type == "success" ? "fa-check-circle" : type == "warn" ? "fa-exclamation-triangle" : "fa-times-circle-o ") })),
                        _react_16_8_6_react["createElement"]("span", { className: "txt" }, tit)),
                    _react_16_8_6_react["createElement"]("span", { className: "m-alert-close", "data-key": sigin, onClick: closeHandle },
                        _react_16_8_6_react["createElement"]("i", { className: "fa fa-times fa-lg" }))))));
    }
}


// CONCATENATED MODULE: ./src/js/containers/Socket.tsx

const Url = "ws://" + window.location.host + window.getSession("getPath") + "WebSocket";
class Socket_SoketNews extends _react_16_8_6_react["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            data: []
        };
        this.viewType = (e) => {
            const str = e.currentTarget.innerHTML;
            const { filterDispatch } = this.props;
            let type = "0";
            if (str.includes("审核")) {
                type = "3";
            }
            else if (str.includes("报错")) {
                type = "6";
            }
            else if (str.includes("驳回")) {
                type = "4";
            }
            else if (str.includes("翻译")) {
                type = "1";
            }
            filterDispatch(type);
        };
    }
    initSocket(props) {
        const { user_id, role_id } = props;
        const webSocket = new WebSocket(Url + "/" + user_id + "/" + role_id);
        const _self = this;
        webSocket.onmessage = function (msg) {
            const result = msg.data;
            if (result == "&") {
            }
            else if (result) {
                const data = JSON.parse(msg.data);
                const arr = data.data;
                _self.setState({
                    data: arr,
                });
            }
        };
        // 异常
        webSocket.onerror = function () {
            Socket_SoketNews.heartflag = false;
            console.log(" 异常 ");
        };
        // 建立连接
        webSocket.onopen = function () {
            Socket_SoketNews.heartflag = true;
            _self.heart();
            console.log("建立连接成功");
            Socket_SoketNews.tryTime = 0;
        };
        // 断线重连
        webSocket.onclose = function () {
            Socket_SoketNews.heartflag = false;
            // 重试10次，每次之间间隔10秒
            if (Socket_SoketNews.tryTime < 10) {
                setTimeout(function () {
                    _self.webSocket = null;
                    Socket_SoketNews.tryTime++;
                    _self.webSocket = _self.initSocket(_self.props);
                    console.log("  第" + Socket_SoketNews.tryTime + "次重连");
                }, 3 * 1000);
            }
            else {
                //alert("重连失败.");
            }
        };
        return webSocket;
    }
    componentWillReceiveProps(nextProps) {
        const { role_id, user_id } = this.props;
        if (nextProps.role_id !== role_id || nextProps.user_id !== user_id) {
            this.webSocket.close();
            this.webSocket = this.initSocket(nextProps);
        }
    }
    componentDidMount() {
        this.webSocket = this.initSocket(this.props);
    }
    componentWillUnmount() {
        if (this.webSocket) {
            this.webSocket.close();
        }
    }
    heart() {
        if (Socket_SoketNews.heartflag) {
            this.webSocket.send("&");
            console.log("  心跳 <br/>");
        }
    }
    send(message) {
        this.webSocket.send(message);
    }
    render() {
        const { data } = this.state;
        return (_react_16_8_6_react["createElement"](_react_16_8_6_react["Fragment"], null,
            _react_16_8_6_react["createElement"]("div", { style: { padding: "20px 0" } },
                _react_16_8_6_react["createElement"]("i", { className: "fa fa-envelope-o fa-lg" }),
                data.length ? _react_16_8_6_react["createElement"]("i", { className: "fa fa-circle" }) : null),
            _react_16_8_6_react["createElement"]("ul", { className: "m-soket-drop m-sysOpt" }, data.length ? data.map((val, index) => {
                return (_react_16_8_6_react["createElement"]("li", { key: index, onClick: this.viewType }, val));
            }) : _react_16_8_6_react["createElement"]("li", null, "\u6CA1\u6709\u6D88\u606F!"))));
    }
}
Socket_SoketNews.tryTime = 0;
Socket_SoketNews.heartflag = false;
/* harmony default export */ var Socket = (Socket_SoketNews);

// CONCATENATED MODULE: ./src/js/containers/Head.tsx
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











const LoginUrl = window.getSession("getPath") + "login";
class Head_Head extends _react_16_8_6_react["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            initPasswordModal: false,
            showPasswordModal: false,
            password: "",
            newPassword: "",
            warnText: ""
        };
        this.logOut = () => {
            main.logOut();
        };
        this.notifitionRef = _react_16_8_6_react["createRef"]();
        this.submit = () => {
            const { newPassword, password } = this.state;
            if (!newPassword || !password) {
                this.setState({
                    warnText: "填写完整！"
                });
                return;
            }
            this.submitPassword();
        };
        this.togglePassword = () => {
            this.setState(pre => ({
                initPasswordModal: true,
                showPasswordModal: !pre.showPasswordModal,
                warnText: "",
                password: "",
                newPassword: "",
            }));
        };
        this.changePassword = (file, pwd) => {
            this.setState({
                [file]: pwd,
            });
        };
        this.changeRole = (e) => {
            const roleIndex = +(e.currentTarget.dataset.id);
            this.props.dispatchChangeRole(roleIndex);
        };
        this.changeFilterAndJump = (filter) => {
            if (this.props.location.pathname == "/summary") {
                this.props.dispatchChangeFilter(filter);
            }
            else {
                const _self = this;
                this.props.dispatchChangeMenu("1,0");
                setTimeout(function () {
                    _self.props.dispatchChangeFilter(filter);
                }, 0);
            }
            this.props.history.push({
                pathname: "/summary",
                state: {
                    text: "病例清单"
                }
            });
        };
    }
    componentDidMount() {
    }
    componentWillMount() {
    }
    submitPassword() {
        return __awaiter(this, void 0, void 0, function* () {
            const { newPassword, password } = this.state;
            const { user_id } = this.props;
            const result = yield main.checkPwd(user_id, password);
            if (result.code === 200) {
                main.updatePwd(user_id, newPassword).then(() => {
                    this.togglePassword();
                    window.location.href = LoginUrl;
                });
            }
            else {
                this.setState({
                    warnText: result.message
                });
            }
        });
    }
    render() {
        const { user_name, role_arr, role_index, role_ids, user_id, org_name } = this.props;
        const { initPasswordModal, showPasswordModal, password, newPassword, warnText } = this.state;
        const role_id = role_ids[role_index];
        const rootModalDom = document.getElementById("modal_root");
        return (_react_16_8_6_react["createElement"]("div", { className: "g-head" },
            _react_16_8_6_react["createElement"](toast_Notification, { ref: this.notifitionRef }),
            initPasswordModal ? (_react_16_8_6_react["createElement"](Modal_Modal, { show: showPasswordModal, container: rootModalDom, tit: "修改密码", onCancel: this.togglePassword, onSure: this.submit, className: "pwd-M" },
                _react_16_8_6_react["createElement"]("p", { className: "item-inp" },
                    _react_16_8_6_react["createElement"]("span", { className: "m-inp-tit" }, "\u7528\u6237\u540D"),
                    user_name),
                _react_16_8_6_react["createElement"](InputBtn_InpBox, { type: "password", styleType: "normal", field: "password", title: "\u65E7\u5BC6\u7801", value: password, changeHandle: this.changePassword }),
                _react_16_8_6_react["createElement"](InputBtn_InpBox, { type: "password", styleType: "normal", field: "newPassword", title: "\u65B0\u5BC6\u7801", value: newPassword, changeHandle: this.changePassword }),
                warnText ? _react_16_8_6_react["createElement"]("div", null,
                    _react_16_8_6_react["createElement"]("p", { className: "m-warn" },
                        _react_16_8_6_react["createElement"](Button["b" /* Icon */], { styleType: "fa-exclamation-triangle" }),
                        warnText)) : null)) : null,
            _react_16_8_6_react["createElement"]("span", { className: "m-theme" }, "\u51FA\u9662\u5C0F\u7ED3\u7BA1\u7406"),
            _react_16_8_6_react["createElement"]("div", { className: "g-sys_set" },
                _react_16_8_6_react["createElement"]("div", { className: "g-role-sys" },
                    _react_16_8_6_react["createElement"]("div", { style: { padding: "20px 10px" } },
                        _react_16_8_6_react["createElement"]("span", null,
                            role_arr[role_index],
                            "\u00A0\u00A0\u00A0"),
                        role_ids.length ? _react_16_8_6_react["createElement"]("span", { className: "fa fa-arrows-v " }, "\u00A0\u5207\u6362\u89D2\u8272") : null),
                    role_ids.length ? _react_16_8_6_react["createElement"]("ul", { className: "m-sysOpt" }, role_ids.map((val, index) => {
                        return (_react_16_8_6_react["createElement"]("li", { onClick: this.changeRole, key: val, "data-id": index, className: role_index == index ? "active" : "" },
                            _react_16_8_6_react["createElement"]("span", null, role_arr[index])));
                    })) : null),
                _react_16_8_6_react["createElement"]("div", { className: "m-mail" },
                    _react_16_8_6_react["createElement"](Socket, { user_id: user_id, role_id: role_id, filterDispatch: this.changeFilterAndJump })),
                _react_16_8_6_react["createElement"]("div", null,
                    _react_16_8_6_react["createElement"]("span", null, org_name)),
                _react_16_8_6_react["createElement"]("div", { className: "g-user-opt" },
                    _react_16_8_6_react["createElement"]("div", { style: { padding: "20px 10px" } },
                        _react_16_8_6_react["createElement"](Button["c" /* SvgIcon */], { styleType: "user", size: "size1" }),
                        _react_16_8_6_react["createElement"]("span", { style: { verticalAlign: 4 } }, user_name)),
                    _react_16_8_6_react["createElement"]("ul", { className: "m-sysOpt" },
                        _react_16_8_6_react["createElement"]("li", { onClick: this.logOut },
                            _react_16_8_6_react["createElement"]("span", { className: "fa fa-power-off " }, "\u00A0\u00A0"),
                            _react_16_8_6_react["createElement"]("span", null, "\u9000\u51FA\u7CFB\u7EDF")),
                        _react_16_8_6_react["createElement"]("li", { onClick: this.togglePassword },
                            _react_16_8_6_react["createElement"]("span", { className: "fa fa-key " }, "\u00A0\u00A0"),
                            _react_16_8_6_react["createElement"]("span", null, "\u4FEE\u6539\u5BC6\u7801")))))));
    }
}
;
const mapStateToProps = ({ app }) => {
    return {
        user_name: app.get("user_name"),
        role_arr: app.get("role_names"),
        role_ids: app.get("role_ids"),
        role_index: app.get("role_index"),
        user_id: app.get("user_id"),
        org_name: app.get("org_names")[0]
    };
};
const Head_mapDispatchToProps = (dispatch) => {
    return {
        dispatchChangeRole: function (roleIndex) {
            dispatch(Object(appAction["c" /* changeRole */])(roleIndex));
        },
        dispatchChangeFilter: function (filter) {
            dispatch(Object(appAction["a" /* changeFilterType */])(filter));
        },
        dispatchChangeMenu: function (url) {
            dispatch(Object(appAction["b" /* changeMenuUrl */])(url));
        },
    };
};
/* harmony default export */ var containers_Head = (Object(react_router["f" /* withRouter */])(Object(es["b" /* connect */])(mapStateToProps, Head_mapDispatchToProps)(Head_Head)));

// CONCATENATED MODULE: ./src/js/common/SearchCom.tsx


class SearchCom_SearchCom extends _react_16_8_6_react["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            searching: false,
        };
        this.inpDom = _react_16_8_6_react["createRef"]();
        this.toggleSearch = () => {
            const keyWord = this.inpDom.current.value.trim();
            if (!keyWord) {
                return;
            }
            const { field } = this.props;
            this.setState({
                searching: true,
            });
            this.props.searchHandle(keyWord, field);
        };
        this.closeSearch = () => {
            this.setState({
                searching: false,
            });
            this.inpDom.current.value = "";
            const { closeHandle, field } = this.props;
            closeHandle && closeHandle(field);
        };
        this.keyPress = (e) => {
            if (e.key === "Enter") {
                this.toggleSearch();
            }
        };
    }
    render() {
        const { searching } = this.state;
        const { tip, width, hasBtn } = this.props;
        return (_react_16_8_6_react["createElement"]("div", { className: "m-search" },
            _react_16_8_6_react["createElement"]("span", { className: "m-inp-val", style: { width } },
                _react_16_8_6_react["createElement"]("input", { type: "text", ref: this.inpDom, className: "s-inp", placeholder: tip, onKeyDown: this.keyPress, style: !hasBtn ? { paddingRight: 26 } : undefined }),
                !hasBtn && !searching ? _react_16_8_6_react["createElement"]("span", { className: "search-icon", onClick: this.toggleSearch },
                    _react_16_8_6_react["createElement"]("i", { className: "fa fa-search fa-lg" })) : null,
                _react_16_8_6_react["createElement"](_velocity_react_1_4_3_velocity_react["VelocityComponent"], { animation: searching ? "fadeIn" : "fadeOut" },
                    _react_16_8_6_react["createElement"]("span", { className: "m-search-close", onClick: this.closeSearch },
                        _react_16_8_6_react["createElement"]("i", { className: "fa fa-times fa-lg" })))),
            hasBtn ? (_react_16_8_6_react["createElement"]("button", { className: "s-btn normal-btn", onClick: this.toggleSearch },
                _react_16_8_6_react["createElement"]("span", { className: "fa fa-search" }))) : null));
    }
}
SearchCom_SearchCom.defaultProps = {
    tip: "查询搜索结果...",
    width: 200,
    hasBtn: true,
};

// EXTERNAL MODULE: ./src/css/Calendar.scss
var css_Calendar = __webpack_require__("./src/css/Calendar.scss");

// CONCATENATED MODULE: ./src/js/common/calendar/CalendarDayView.tsx

class CalendarDayView_CalendarDayView extends _react_16_8_6_react["PureComponent"] {
    getMonDays(year, mon) {
        const day = new Date(year, mon, 0);
        return day.getDate();
    }
    render() {
        const { showTimeObj, curTime, selTimeObj, clickSelHandle, time, changeTime, viewIndex } = this.props;
        const year = showTimeObj.get("year"), month = showTimeObj.get("month");
        const days = this.getMonDays(year, month);
        const MonFirstDayToWeek = (new Date(year, month - 1, 1)).getDay(); //看当前这个月的第一天是星期几
        const dayArrleg = Math.ceil((days + MonFirstDayToWeek) / 7); // 一共包含几个星期再内
        const daysArr = new Array(dayArrleg).fill("1").map((...args) => {
            const [, index] = args;
            switch (index) {
                case 0: { // 日历的第一行，有可能包含上个月的
                    const preMonDays = this.getMonDays(year, month - 1); //上一个月的
                    const preMonDayArr = Array.from({ length: MonFirstDayToWeek }, (...args) => args[1] + 1).map(val => {
                        const day = preMonDays - MonFirstDayToWeek + val;
                        return _react_16_8_6_react["createElement"](CalendarDayView_CalendarDayView.DayComponent, { key: day, dayNum: day, disabled: true, curTime: curTime, selTimeObj: selTimeObj, showTimeObj: showTimeObj, clickSelHandle: undefined });
                    });
                    const firstArr = Array.from({ length: 7 - MonFirstDayToWeek }, (...args) => args[1] + 1).map(val => {
                        return _react_16_8_6_react["createElement"](CalendarDayView_CalendarDayView.DayComponent, { dayNum: val, key: val, disabled: false, curTime: curTime, selTimeObj: selTimeObj, showTimeObj: showTimeObj, clickSelHandle: clickSelHandle });
                    });
                    return (_react_16_8_6_react["createElement"]("ul", { className: "data-group", key: index }, preMonDayArr.concat(firstArr)));
                }
                case dayArrleg - 1: { //最后一排，可能包含下个月的日期
                    const startDayNum = 7 * index - MonFirstDayToWeek;
                    const count = (days + MonFirstDayToWeek) % 7 || 7;
                    const lastArr = Array.from({ length: count }, (...args) => args[1] + 1).map(val => {
                        const day = val + startDayNum;
                        return _react_16_8_6_react["createElement"](CalendarDayView_CalendarDayView.DayComponent, { dayNum: day, disabled: false, curTime: curTime, selTimeObj: selTimeObj, showTimeObj: showTimeObj, key: day, clickSelHandle: clickSelHandle });
                    });
                    const lastMonDays = Array.from({ length: 7 - count }, (...args) => args[1] + 1).map((val) => {
                        return _react_16_8_6_react["createElement"](CalendarDayView_CalendarDayView.DayComponent, { dayNum: val, disabled: true, curTime: curTime, selTimeObj: selTimeObj, showTimeObj: showTimeObj, key: val, clickSelHandle: undefined });
                    });
                    return (_react_16_8_6_react["createElement"]("ul", { className: "data-group", key: index }, lastArr.concat(lastMonDays)));
                }
                default: {
                    const startDayNum = 7 * index - MonFirstDayToWeek;
                    const MonDayArr = Array.from({ length: 7 }, (...args) => args[1] + 1).map((val) => {
                        const day = val + startDayNum;
                        return _react_16_8_6_react["createElement"](CalendarDayView_CalendarDayView.DayComponent, { dayNum: day, key: day, disabled: false, curTime: curTime, selTimeObj: selTimeObj, showTimeObj: showTimeObj, clickSelHandle: clickSelHandle });
                    });
                    return (_react_16_8_6_react["createElement"]("ul", { className: "data-group", key: index }, MonDayArr));
                }
            }
        });
        //	this.time && daysArr.push(this.renderTimeBox()) ;	
        return (_react_16_8_6_react["createElement"]("div", { className: "m-dayView item-calendar-view" },
            _react_16_8_6_react["createElement"]("ul", { className: "week-group" },
                _react_16_8_6_react["createElement"]("li", null, "\u65E5"),
                _react_16_8_6_react["createElement"]("li", null, "\u4E00"),
                _react_16_8_6_react["createElement"]("li", null, "\u4E8C"),
                _react_16_8_6_react["createElement"]("li", null, "\u4E09"),
                _react_16_8_6_react["createElement"]("li", null, "\u56DB"),
                _react_16_8_6_react["createElement"]("li", null, "\u4E94"),
                _react_16_8_6_react["createElement"]("li", null, "\u516D")),
            daysArr,
            time ? _react_16_8_6_react["createElement"](CalendarDayView_CalendarDayView.TimePick, { selTimeObj: selTimeObj, changeTime: changeTime, viewIndex: viewIndex }) : null));
    }
}
CalendarDayView_CalendarDayView.DayComponent = ({ dayNum, disabled, showTimeObj, selTimeObj, curTime, clickSelHandle }) => {
    const year = showTimeObj.get("year"), month = showTimeObj.get("month");
    const sel_year = selTimeObj.get("year"), sel_mon = selTimeObj.get("month"), sel_day = selTimeObj.get("day");
    const is_able = !disabled ? " view-item " : "day-disabled";
    const is_Today = (!disabled && year === curTime.year && month === curTime.month && curTime.day === dayNum) && "calendar-today" || "";
    const is_sel = (!disabled && year === sel_year && month === sel_mon && dayNum === sel_day) && "calendar-sel" || "";
    return (_react_16_8_6_react["createElement"]("li", { className: is_able + " " + is_Today + " " + is_sel, "data-sign": "day", "data-num": dayNum, onClick: clickSelHandle },
        _react_16_8_6_react["createElement"]("span", { className: "day-span" }, dayNum)));
};
CalendarDayView_CalendarDayView.TimePick = ({ selTimeObj, changeTime, viewIndex }) => {
    const hour = selTimeObj.get("hour"), minute = selTimeObj.get("minute");
    return (_react_16_8_6_react["createElement"]("div", { className: "m-time" },
        _react_16_8_6_react["createElement"]("div", null,
            _react_16_8_6_react["createElement"]("b", null, "\u65F6\u95F4\uFF1A\u00A0"),
            _react_16_8_6_react["createElement"]("input", { type: "number", className: "wacth-time", "data-viewindex": viewIndex, max: "24", min: "0", value: hour, name: "hour", onChange: changeTime })),
        _react_16_8_6_react["createElement"]("div", null,
            _react_16_8_6_react["createElement"]("b", null, "\u00A0\u00A0:\u00A0"),
            _react_16_8_6_react["createElement"]("input", { type: "number", className: "wacth-time", max: "60", "data-viewindex": viewIndex, min: "0", name: "minute", value: minute, onChange: changeTime }))));
};
;

// CONCATENATED MODULE: ./src/js/common/calendar/CalendarYearView.tsx

class CalendarYearView_CalendarYearView extends _react_16_8_6_react["PureComponent"] {
    render() {
        const { curTime: { year }, selTimeObj, clickSelHandle, lastYear } = this.props;
        const selYear = selTimeObj.get("year");
        let startTime = lastYear - 10;
        const yearToday = year === lastYear && "calendar-today" || "";
        const yearsel = selYear === lastYear && "calendar-sel" || "";
        return (_react_16_8_6_react["createElement"]("div", { className: "m-yearView item-calendar-view" },
            Array.from({ length: 3 }, (...args) => (args[1] + 1)).map(row => {
                return (_react_16_8_6_react["createElement"]("ul", { className: "year-group", key: row }, Array.from({ length: 3 }, (...args) => (args[1] + 1)).map(() => {
                    const num = ++startTime;
                    const yearToday = year === num && "calendar-today" || "";
                    const yearsel = selYear === num && "calendar-sel" || "";
                    return (_react_16_8_6_react["createElement"]("li", { "data-num": num, key: num, "data-sign": "year", className: "view-item " + yearToday + " " + yearsel, onClick: clickSelHandle },
                        _react_16_8_6_react["createElement"]("span", { className: "year-span" }, num)));
                })));
            }),
            _react_16_8_6_react["createElement"]("div", { "data-num": lastYear, "data-sign": "year", onClick: clickSelHandle, className: "last-year view-item " + yearToday + yearsel },
                _react_16_8_6_react["createElement"]("span", { className: "year-span" }, lastYear))));
    }
}

// CONCATENATED MODULE: ./src/js/common/calendar/CalendarMonthView.tsx

class CalendarMonthView_CalendarMonthView extends _react_16_8_6_react["PureComponent"] {
    render() {
        const { curTime: { year, month }, selTimeObj, clickSelHandle, showTimeObj } = this.props;
        const selYear = selTimeObj.get("year");
        const selMonth = selTimeObj.get("month");
        const showYear = showTimeObj.get("year");
        let startMon = 0;
        const mon_today = year === showYear;
        const mon_sel = selYear === showYear;
        return (_react_16_8_6_react["createElement"]("div", { className: "m-monthView item-calendar-view" }, Array.from({ length: 4 }, (...args) => (args[1] + 1)).map(row => {
            return (_react_16_8_6_react["createElement"]("ul", { className: "mon-group", key: row }, Array.from({ length: 3 }, (...args) => (args[1] + 1)).map(() => {
                const num = ++startMon;
                const monToday = mon_today && month === num && "calendar-today" || "";
                const monSel = mon_sel && selMonth === num && "calendar-sel" || "";
                return (_react_16_8_6_react["createElement"]("li", { "data-num": num, key: num, "data-sign": "month", className: "view-item " + monToday + " " + monSel, onClick: clickSelHandle },
                    _react_16_8_6_react["createElement"]("span", { className: "mon-span" }, CalendarMonthView_CalendarMonthView.monFormatter[num])));
            })));
        })));
    }
}
CalendarMonthView_CalendarMonthView.monFormatter = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"];

// CONCATENATED MODULE: ./src/js/common/calendar/CalendarSearsonView.tsx

class CalendarSearsonView_CalendarSearsonView extends _react_16_8_6_react["PureComponent"] {
    render() {
        const { curTime: { year, month }, selTimeObj, clickSelHandle, showTimeObj } = this.props;
        const selYear = selTimeObj.get("year");
        const selSearson = selTimeObj.get("searson");
        const showYear = showTimeObj.get("year");
        let startSearson = 0;
        const searson_today = year === showYear;
        const searson_sel = selYear === year;
        return (_react_16_8_6_react["createElement"]("div", { className: "m-searsonView item-calendar-view" }, Array.from({ length: 2 }, (...args) => (args[1] + 1)).map(row => {
            return (_react_16_8_6_react["createElement"]("ul", { className: "searson-group", key: row }, Array.from({ length: 2 }, (...args) => (args[1] + 1)).map(() => {
                const num = ++startSearson;
                const searsonToday = searson_today && month === num && "calendar-today" || "";
                const searsonSel = searson_sel && selSearson === num && "calendar-sel" || "";
                return (_react_16_8_6_react["createElement"]("li", { "data-num": num, key: num, "data-sign": "searson", className: "view-item " + searsonToday + " " + searsonSel, onClick: clickSelHandle },
                    _react_16_8_6_react["createElement"]("span", { className: "searson-span" }, CalendarSearsonView_CalendarSearsonView.searsonFormatter[num])));
            })));
        })));
    }
}
CalendarSearsonView_CalendarSearsonView.searsonFormatter = ["", "一季度", "二季度", "三季度", "四季度"];

// CONCATENATED MODULE: ./src/js/common/calendar/CalendarView.tsx







var calendarType;
(function (calendarType) {
    calendarType[calendarType["year"] = 1] = "year";
    calendarType[calendarType["searson"] = 2] = "searson";
    calendarType[calendarType["month"] = 3] = "month";
    calendarType[calendarType["day"] = 4] = "day";
})(calendarType || (calendarType = {}));
class CalendarView_CalendarView extends _react_16_8_6_react["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            showTimeObj: this.props.showTimeObj,
            dropRatate: false,
            showViewArr: (function (rotate) {
                let animationArr = new Array(5).fill("fadeOut");
                animationArr[rotate] = "fadeIn";
                return immutable_es["a" /* List */](animationArr);
            })(this.props.rotate),
            lastYear: (function (year) {
                let viewIndex = year % 10;
                viewIndex = viewIndex === 0 ? 10 : viewIndex;
                const startTime = year - viewIndex + 1;
                return startTime + 9;
            })(this.props.showTimeObj.get("year"))
        };
        this.clickSelHandle = (e) => {
            const dataset = e.currentTarget.dataset;
            const type = dataset.sign;
            const num = ~~(dataset.num);
            const { viewIndex, changeSelTimeItme, rotate } = this.props;
            const flag = { [type]: num };
            this.setState(pre => {
                return {
                    showTimeObj: pre.showTimeObj.set(type, num)
                };
            });
            const _showTimeobj = Object.assign({}, this.state.showTimeObj.toJS(), flag);
            changeSelTimeItme(viewIndex, _showTimeobj);
            const { showViewArr } = this.state;
            const curShowIndex = showViewArr.findIndex(val => val === "fadeIn");
            if (curShowIndex === calendarType.year || curShowIndex === calendarType.month) {
                this.setState({
                    showViewArr: showViewArr.set(curShowIndex, "fadeOut").set(rotate, "fadeIn")
                });
            }
        };
        this.changeView = (e) => {
            const type = e.currentTarget.dataset.sign;
            this.setState(pre => {
                const preIndex = pre.showViewArr.findIndex(val => val === "fadeIn");
                const showViewArr = pre.showViewArr.set(preIndex, "fadeOut").set(calendarType[type], "fadeIn");
                return {
                    showViewArr,
                };
            });
        };
        this.toggleRotate = () => {
            this.setState(pre => ({
                dropRatate: !pre.dropRatate
            }));
        };
        this.changeRotate = (e) => {
            const id = +(e.currentTarget.dataset.id);
            this.props.changeRotate(id);
            this.setState({
                dropRatate: false
            });
        };
        this.controlBtnHandle = (e) => {
            const dataset = e.currentTarget.dataset;
            const type = (dataset.sign);
            const curViewIndex = +dataset.curviewindex;
            curViewIndex === calendarType.day ? this.updateDaysView(type) : this.updateYears(type);
        };
    }
    updateYears(movePre) {
        this.setState(pre => {
            let lastYear = movePre === "back" ? pre.lastYear - 10 : pre.lastYear + 1;
            let index = lastYear % 10;
            index = index === 0 ? 10 : index;
            lastYear = lastYear - index + 10;
            return {
                lastYear,
            };
        });
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.rotate !== this.props.rotate) {
            let animationArr = new Array(5).fill("fadeOut");
            animationArr[nextProps.rotate] = "fadeIn";
            this.setState({
                showViewArr: immutable_es["a" /* List */](animationArr)
            });
        }
    }
    updateDaysView(movePre) {
        const { showTimeObj } = this.state;
        const year = showTimeObj.get("year"), month = showTimeObj.get("month");
        let updata_mon = 1, updata_year = 1;
        switch (movePre) {
            case "back":
                updata_mon = month - 1 == 0 ? 12 : month - 1;
                updata_year = month - 1 == 0 ? year - 1 : year;
                break;
            case "next":
                updata_mon = month + 1 == 13 ? 1 : month + 1;
                updata_year = month + 1 == 13 ? year + 1 : year;
                break;
        }
        this.setState({
            showTimeObj: showTimeObj.withMutations(map => map.set("year", updata_year).set("month", updata_mon).set("searson", Math.ceil(month / 3))),
        });
    }
    render() {
        const { curTime, selTimeObj, rotate, time, changeTime, viewIndex } = this.props;
        const { showTimeObj, showViewArr, lastYear, dropRatate } = this.state;
        const curViewInde = showViewArr.findIndex(val => val === "fadeIn");
        const showMoveBtn = (curViewInde === calendarType.day || curViewInde === calendarType.year);
        let duration = new Array(5).fill(0);
        duration[curViewInde] = 300;
        const arr = ["年", "季", "月", "日"];
        return (_react_16_8_6_react["createElement"]("div", { className: "g-calendar-view" },
            _react_16_8_6_react["createElement"]("div", { className: "m-viewOpt" },
                _react_16_8_6_react["createElement"]("div", { className: "m-timeSel" }, rotate === calendarType.day ? (_react_16_8_6_react["createElement"]("div", null,
                    _react_16_8_6_react["createElement"]("i", { className: "fa fa-calendar" }),
                    "\u00A0",
                    _react_16_8_6_react["createElement"]("span", { "data-sign": "year", onClick: this.changeView },
                        showTimeObj.get("year"),
                        "\u5E74 / "),
                    _react_16_8_6_react["createElement"]("span", { "data-sign": "month", onClick: this.changeView },
                        (showTimeObj.get("month") + "").padStart(2, "0"),
                        "\u6708"))) : rotate !== calendarType.year ? _react_16_8_6_react["createElement"]("div", null,
                    _react_16_8_6_react["createElement"]("i", { className: "fa fa-calendar" }),
                    "\u00A0",
                    _react_16_8_6_react["createElement"]("span", { "data-sign": "year", onClick: this.changeView },
                        showTimeObj.get("year"),
                        "\u5E74")) : null),
                _react_16_8_6_react["createElement"]("div", { style: { position: "relative" } },
                    _react_16_8_6_react["createElement"]("span", { className: "curViewType", onClick: this.toggleRotate }, arr[curViewInde - 1]),
                    _react_16_8_6_react["createElement"](_velocity_react_1_4_3_velocity_react["VelocityComponent"], { animation: dropRatate ? "slideDown" : "slideUp" },
                        _react_16_8_6_react["createElement"]("ul", { className: "m-rotate-drop" }, arr.map((val, index) => {
                            return _react_16_8_6_react["createElement"]("li", { className: index === rotate - 1 && "active" || "", "data-id": index + 1 + "", onClick: this.changeRotate, key: index }, val);
                        })))),
                _react_16_8_6_react["createElement"]("div", { className: "m-moveBtns " + (showMoveBtn ? "" : "hideMoveBtn") },
                    _react_16_8_6_react["createElement"]("button", { className: "s-btn", onClick: this.controlBtnHandle, "data-sign": "back", "data-curviewindex": curViewInde },
                        _react_16_8_6_react["createElement"]("i", { className: "fa fa-backward" })),
                    _react_16_8_6_react["createElement"]("button", { className: "s-btn", onClick: this.controlBtnHandle, "data-sign": "next", "data-curviewindex": curViewInde },
                        _react_16_8_6_react["createElement"]("i", { className: "fa fa-forward" })))),
            _react_16_8_6_react["createElement"]("div", { className: "m-calendar-view" },
                _react_16_8_6_react["createElement"](_velocity_react_1_4_3_velocity_react["VelocityComponent"], { animation: showViewArr.get(calendarType.day), duration: duration[calendarType.day] },
                    _react_16_8_6_react["createElement"](CalendarDayView_CalendarDayView, { curTime: curTime, selTimeObj: selTimeObj, showTimeObj: showTimeObj, clickSelHandle: this.clickSelHandle, time: time, changeTime: changeTime, viewIndex: viewIndex })),
                _react_16_8_6_react["createElement"](_velocity_react_1_4_3_velocity_react["VelocityComponent"], { animation: showViewArr.get(calendarType.year), duration: duration[calendarType.year] },
                    _react_16_8_6_react["createElement"](CalendarYearView_CalendarYearView, { curTime: curTime, selTimeObj: selTimeObj, showTimeObj: showTimeObj, clickSelHandle: this.clickSelHandle, rotate: rotate, lastYear: lastYear })),
                _react_16_8_6_react["createElement"](_velocity_react_1_4_3_velocity_react["VelocityComponent"], { animation: showViewArr.get(calendarType.month), duration: duration[calendarType.month] },
                    _react_16_8_6_react["createElement"](CalendarMonthView_CalendarMonthView, { curTime: curTime, selTimeObj: selTimeObj, showTimeObj: showTimeObj, clickSelHandle: this.clickSelHandle, rotate: rotate })),
                _react_16_8_6_react["createElement"](_velocity_react_1_4_3_velocity_react["VelocityComponent"], { animation: showViewArr.get(calendarType.searson), duration: duration[calendarType.searson] },
                    _react_16_8_6_react["createElement"](CalendarSearsonView_CalendarSearsonView, { curTime: curTime, selTimeObj: selTimeObj, showTimeObj: showTimeObj, clickSelHandle: this.clickSelHandle })))));
    }
}

// CONCATENATED MODULE: ./src/js/common/calendar/index.tsx





var calendar_calendarType;
(function (calendarType) {
    calendarType[calendarType["year"] = 1] = "year";
    calendarType[calendarType["searson"] = 2] = "searson";
    calendarType[calendarType["month"] = 3] = "month";
    calendarType[calendarType["day"] = 4] = "day";
})(calendar_calendarType || (calendar_calendarType = {}));
class calendar_CalendarInp extends _react_16_8_6_react["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {};
        this.clearValue = (e) => {
            e.stopPropagation();
            this.props.clearTime();
        };
    }
    render() {
        const { selTimeVal, dropHandle, placeholder, ableClear } = this.props;
        return (_react_16_8_6_react["createElement"]("div", { className: "m-clalendar-inpBox", onClick: dropHandle },
            _react_16_8_6_react["createElement"]("span", { className: "calendar-inp-icon" },
                _react_16_8_6_react["createElement"]("i", { className: "fa fa-calendar" }, "\u00A0")),
            _react_16_8_6_react["createElement"]("input", { className: "s-inp calendar-inpTxt", value: selTimeVal, placeholder: placeholder, readOnly: true, type: "text" }),
            ableClear ? _react_16_8_6_react["createElement"](_velocity_react_1_4_3_velocity_react["VelocityComponent"], { animation: selTimeVal ? "fadeIn" : "fadeOut" },
                _react_16_8_6_react["createElement"]("span", { className: "m-search-close", onClick: this.clearValue },
                    _react_16_8_6_react["createElement"]("i", { className: "fa fa-times fa-lg" }))) : null));
    }
}
class calendar_Calendar extends _react_16_8_6_react["PureComponent"] {
    constructor(props) {
        super(props);
        this.curTime = this.getCurTime();
        this.wrapDomRef = _react_16_8_6_react["createRef"]();
        this.documentClickFn = (e) => {
            const target = e.target;
            const wrap = this.wrapDomRef.current;
            if (target == wrap || wrap.contains(target)) {
            }
            else {
                this.setState({
                    expand: false
                });
            }
        };
        //改变时间日期
        this.changeSelTimeItme = (viewIndex, showTimeObj) => {
            const { year, month, day, searson } = showTimeObj;
            const { rotate } = this.state;
            this.setState(pre => {
                let selTimeArr = pre.selTimeArr;
                if (!selTimeArr.size) {
                    selTimeArr = immutable_es["c" /* fromJS */]([{ year: "" }]);
                }
                switch (rotate) {
                    case calendar_calendarType.day:
                        selTimeArr = selTimeArr.update(viewIndex, map => {
                            return map.withMutations(node => node.set("year", year).set("month", month).set("day", day).set("searson", Math.ceil(month / 3)));
                        });
                        break;
                    case calendar_calendarType.searson: {
                        selTimeArr = selTimeArr.update(viewIndex, map => {
                            return map.withMutations(node => node.set("year", year).set("month", searson * 3 - 2).set("day", day).set("searson", searson));
                        });
                        break;
                    }
                    case calendar_calendarType.year: {
                        selTimeArr = selTimeArr.update(viewIndex, map => {
                            return map.withMutations(node => node.set("year", year));
                        });
                        break;
                    }
                    case calendar_calendarType.month: {
                        selTimeArr = selTimeArr.update(viewIndex, map => {
                            return map.withMutations(node => node.set("year", year).set("month", month).set("searson", Math.ceil(month / 3)));
                        });
                        break;
                    }
                    default:
                        selTimeArr = selTimeArr;
                        break;
                }
                return {
                    selTimeArr,
                };
            }, () => {
                this.getSelTimeVal();
            });
        };
        //清除所选的时间
        this.clearSelTime = () => {
            this.setState({
                selTimeArr: immutable_es["c" /* fromJS */](this.timeValToTimeObj(true)),
                expand: false
            }, () => {
                this.getSelTimeVal();
            });
        };
        this.changeRotate = (rotate) => {
            this.setState({
                rotate: rotate
            }, () => {
                this.getSelTimeVal();
            });
        };
        // 改变时间点
        this.changeTime = (e) => {
            const value = +e.currentTarget.value, field = e.currentTarget.name, viewIndex = +e.currentTarget.dataset.viewindex;
            this.setState(pre => {
                const selTimeArr = pre.selTimeArr.setIn([viewIndex, field], value);
                return {
                    selTimeArr,
                };
            }, () => {
                this.getSelTimeVal();
            });
        };
        this.dropHandle = () => {
            this.setState(pre => ({ expand: !pre.expand }));
        };
        const { time, rotate, clickBack, field, selTimeValArr, ableClear } = this.props;
        const selTimeArr = immutable_es["c" /* fromJS */](this.timeValToTimeObj(ableClear));
        const timeVal = this.getTimeStrArr(selTimeArr, rotate, time);
        this.state = {
            expand: false,
            selTimeArr,
            rotate: rotate,
            calendarVal: timeVal.join(" 至 ")
        };
        !selTimeValArr && !ableClear && clickBack && clickBack(timeVal.toJS(), field);
    }
    componentDidMount() {
        document.addEventListener("click", this.documentClickFn);
    }
    componentWillUnmount() {
        document.removeEventListener("click", this.documentClickFn);
    }
    getCurTime() {
        const time = new Date();
        const year = time.getFullYear();
        const month = time.getMonth() + 1;
        const day = time.getDate();
        const searson = Math.ceil(month / 3);
        const hour = time.getHours();
        const minute = time.getMinutes();
        return { year, searson, month, day, hour, minute };
    }
    timeValToTimeObj(is_init) {
        if (is_init) {
            return Array.from({ length: this.props.style }).map(() => {
                return {
                    year: "",
                    month: "",
                    searson: "",
                    day: "",
                    hour: "",
                    minute: "",
                };
            });
        }
        const { style, selTimeValArr, rotate, time, } = this.props;
        if (selTimeValArr && !selTimeValArr.includes("-")) {
            throw new Error("日历的时间设置格式不对，用-连接");
        }
        const defaultTimeArr = selTimeValArr.split(",");
        const curTimeArr = Array.from({ length: style }, () => Object.assign({}, this.curTime));
        const has_defaultTime = !!selTimeValArr;
        const hour = this.curTime.hour;
        const minute = this.curTime.minute;
        const setTime = (item) => {
            const arr = !time ? item.split("-") : item.split(" ")[0].split("-");
            const year = ~~arr[0];
            switch (rotate) {
                case calendar_calendarType.day: {
                    const month = ~~arr[1];
                    const timeArr = time ? item.split(" ")[1].split(":") : null;
                    return {
                        year,
                        month,
                        searson: Math.ceil(month / 3),
                        day: ~~arr[2],
                        hour: timeArr ? timeArr[0] : hour,
                        minute: timeArr ? timeArr[1] : minute,
                    };
                }
                case calendar_calendarType.month: {
                    const month = ~~arr[1];
                    return {
                        year,
                        month,
                        searson: Math.ceil(month / 3),
                        day: 1,
                        hour,
                        minute,
                    };
                }
                case calendar_calendarType.searson: {
                    const searson = ~~(arr[1].substr(1));
                    return {
                        year,
                        month: searson * 3 - 2,
                        searson,
                        day: 1,
                        hour,
                        minute,
                    };
                }
                case calendar_calendarType.year: {
                    return {
                        year,
                        month: 1,
                        searson: 1,
                        day: 1,
                        hour,
                        minute,
                    };
                }
            }
        };
        const selTimeArr = curTimeArr.map((val, index) => {
            return !has_defaultTime ? val : setTime(defaultTimeArr[index]);
        });
        return selTimeArr;
    }
    getTimeStrArr(selTimeArr, rotate, time) {
        const getStr = (val, rotate, time) => {
            const year = val.get("year");
            if (!year) {
                return "";
            }
            const month = (val.get("month") + "").padStart(2, "0"), day = (val.get("day") + "").padStart(2, "0"), searson = val.get("searson");
            switch (rotate) {
                case calendar_calendarType.day:
                    const timeStr = time ? +" " + (val.get("hour") + "").padStart(2, "0") + ":" + (val.get("minute") + "").padStart(2, "0") + ":00" : "";
                    return year + "-" + month + "-" + day + timeStr;
                case calendar_calendarType.searson:
                    return year + "-S" + searson;
                case calendar_calendarType.year:
                    return year + "";
                case calendar_calendarType.month:
                    return year + "-" + month;
            }
        };
        return selTimeArr.map(val => {
            return getStr(val, rotate, time);
        });
    }
    getSelTimeVal() {
        const { selTimeArr, rotate } = this.state;
        const { time, clickBack, field } = this.props;
        const strArr = this.getTimeStrArr(selTimeArr, rotate, time);
        clickBack && clickBack(strArr.toJS(), field);
        const str = strArr.join(" 至 ");
        this.setState({
            calendarVal: str
        });
        return str;
    }
    render() {
        const { hasInp, time, width, placeholder, ableClear } = this.props;
        const { expand, selTimeArr, rotate, calendarVal } = this.state;
        const flagSelTimeArr = selTimeArr.getIn([0, "year"]) ? selTimeArr : immutable_es["c" /* fromJS */](this.timeValToTimeObj(false));
        return (_react_16_8_6_react["createElement"]("div", { className: "g-calendar", style: { width }, ref: this.wrapDomRef },
            hasInp ? _react_16_8_6_react["createElement"](calendar_CalendarInp, { selTimeVal: calendarVal, dropHandle: this.dropHandle, placeholder: placeholder, ableClear: ableClear, clearTime: this.clearSelTime }) : null,
            _react_16_8_6_react["createElement"](_velocity_react_1_4_3_velocity_react["VelocityComponent"], { animation: expand ? "slideDown" : "slideUp", interruptBehavior: "queue" },
                _react_16_8_6_react["createElement"]("div", { className: "g-calendar-box" },
                    _react_16_8_6_react["createElement"](CalendarView_CalendarView, { rotate: rotate, selTimeObj: selTimeArr.get(0), showTimeObj: flagSelTimeArr.get(0), curTime: this.curTime, changeSelTimeItme: this.changeSelTimeItme, viewIndex: 0, time: time, changeTime: this.changeTime, changeRotate: this.changeRotate }),
                    selTimeArr.size == 2 ? _react_16_8_6_react["createElement"](CalendarView_CalendarView, { rotate: rotate, selTimeObj: selTimeArr.get(1), showTimeObj: flagSelTimeArr.get(1), curTime: this.curTime, changeSelTimeItme: this.changeSelTimeItme, viewIndex: 1, time: time, changeTime: this.changeTime, changeRotate: this.changeRotate }) : null))));
    }
}
calendar_Calendar.defaultProps = {
    rotate: calendar_calendarType.day,
    style: 1,
    time: false,
    hasInp: true,
    selTimeValArr: "",
    width: 240,
    placeholder: "",
    ableClear: false,
};
/* harmony default export */ var calendar = (calendar_Calendar);

// EXTERNAL MODULE: ./src/css/combobox.scss
var combobox = __webpack_require__("./src/css/combobox.scss");

// CONCATENATED MODULE: ./src/js/common/combobox/Drop.tsx

class Drop_ItemCombo extends _react_16_8_6_react["PureComponent"] {
    render() {
        const { node, getPropFieldVal, clickFn, index } = this.props;
        const active = node.get("active");
        const icon = getPropFieldVal("icon");
        const textField = getPropFieldVal("textField");
        const text = node.get(textField);
        return (_react_16_8_6_react["createElement"]("li", { onClick: clickFn, "data-index": index, className: "m-combo-item " + (active ? "active" : "") },
            icon ? _react_16_8_6_react["createElement"]("span", { className: icon }) : "",
            _react_16_8_6_react["createElement"]("span", null, text)));
    }
}
class Drop_DropCom extends _react_16_8_6_react["PureComponent"] {
    render() {
        const { data, clickHande, getPropFieldVal } = this.props;
        const idField = getPropFieldVal("idField");
        return (_react_16_8_6_react["createElement"](_react_16_8_6_react["Fragment"], null, data.map((val, index) => {
            const id = val.get(idField);
            return _react_16_8_6_react["createElement"](Drop_ItemCombo, { node: val, index: index, getPropFieldVal: getPropFieldVal, clickFn: clickHande, key: id });
        })));
    }
}
Drop_DropCom.ItemCombo = ({ getPropFieldVal, clickFn, node, index }) => {
    const active = node.get("active");
    const icon = getPropFieldVal("icon");
    const textField = getPropFieldVal("textField");
    const text = node.get(textField);
    return (_react_16_8_6_react["createElement"]("li", { onClick: clickFn, "data-index": index, className: "m-combo-item " + (active ? "active" : "") },
        icon ? _react_16_8_6_react["createElement"]("span", { className: icon }) : "",
        _react_16_8_6_react["createElement"]("span", null, text)));
};

// CONCATENATED MODULE: ./src/js/common/combobox/index.tsx






class combobox_Combobox extends _react_16_8_6_react["PureComponent"] {
    constructor(props) {
        super(props);
        this.wrapDomRef = _react_16_8_6_react["createRef"]();
        this.toggleDrop = () => {
            this.setState(preState => {
                return {
                    drop: !preState.drop
                };
            });
        };
        this.getPropFieldVal = (field) => {
            return this.props[field];
        };
        this.clickFn = (e) => {
            const index = +e.currentTarget.dataset.index;
            const { multiply, textField, idField, clickCallback, field, inpShowField } = this.props;
            const { data, slected } = this.state;
            const flagText = inpShowField || textField;
            const node = data.get(index);
            const id = node.get(idField);
            const text = node.get(flagText);
            const slecteIndex = slected.findIndex(val => val.id == id);
            const is_has = slecteIndex > -1;
            if (multiply) {
                this.setState({
                    data: data.set(index, node.set("active", !is_has)),
                    slected: !is_has ? slected.push({ id, text }) : slected.remove(slecteIndex),
                });
            }
            else {
                if (is_has) {
                    return;
                }
                ;
                const preSlected = slected.get(0);
                let $data = data.set(index, node.set("active", !is_has));
                if (preSlected) {
                    const preIndex = data.findIndex(val => val.get("id") == preSlected.id);
                    $data = $data.update(preIndex, node => node.set("active", false));
                }
                clickCallback && clickCallback([{ id, text }], field, node.toJS());
                this.setState({
                    data: $data,
                    slected: slected.clear().push({ id, text }),
                    drop: false
                });
            }
            ;
        };
        this.documentClickFn = (e) => {
            const target = e.target;
            const wrap = this.wrapDomRef.current;
            if (target == wrap || wrap.contains(target)) {
            }
            else {
                this.setState({
                    drop: false
                });
            }
        };
        const { defaultVal, data, idField, textField } = props;
        const _defaultVal = defaultVal + "";
        let defaultNode;
        if (!_defaultVal) {
            defaultNode = [];
        }
        else {
            const _defaultNode = _defaultVal.split(",").map(val => {
                const node = data.find(node => (node[idField] == val));
                return node ? {
                    id: val,
                    text: node[textField]
                } : null;
            });
            defaultNode = _defaultNode.filter(val => !!val);
        }
        const slected = immutable_es["a" /* List */](defaultNode);
        this.state = {
            drop: false,
            slected,
            data: immutable_es["c" /* fromJS */](this.addField(data, slected)),
        };
    }
    componentWillReceiveProps(nextProp) {
        //父组件
        if (nextProp.data != this.props.data || nextProp.defaultVal != this.props.defaultVal) {
            const _defaultVal = nextProp.defaultVal + "";
            const _defaultNode = _defaultVal.split(",").map(val => {
                const node = nextProp.data.find(node => (node[nextProp.idField] == val));
                return node ? {
                    id: val,
                    text: node[nextProp.textField]
                } : null;
            });
            const slected = immutable_es["a" /* List */](_defaultNode.filter(val => !!val));
            this.setState({
                data: immutable_es["c" /* fromJS */](this.addField(nextProp.data, slected)),
                slected,
            });
            nextProp.renderClick && nextProp.clickCallback && nextProp.clickCallback([{ id: nextProp.defaultVal, text: "" }], nextProp.field);
        }
    }
    addField(data, slecteArr) {
        const { idField } = this.props;
        return JSON.parse(JSON.stringify(data), function (...args) {
            const [, val] = args;
            if (Object.prototype.toString.call(val) === "[object Object]") {
                val.active = (slecteArr.findIndex(node => node.id == val[idField]) > -1);
            }
            return val;
        });
    }
    getValue() {
        const { slected } = this.state;
        const arr = slected.map(node => {
            return node.text;
        });
        return arr.join(",");
    }
    componentDidMount() {
        document.addEventListener("click", this.documentClickFn);
    }
    componentWillUnmount() {
        document.removeEventListener("click", this.documentClickFn);
    }
    render() {
        const { drop, data } = this.state;
        const { multiply, width, maxHeight, hasSlideIcon, pannelWidth, require, placeholder, dirctionUp } = this.props;
        const value = this.getValue();
        return (_react_16_8_6_react["createElement"]("div", { ref: this.wrapDomRef, className: "combobox " + (drop ? "active " : "") + ((!value && require) ? "no-fill" : ""), style: { width } },
            _react_16_8_6_react["createElement"](InputBtn_ComboInp, { placeholder: placeholder, multiply: multiply, toggleDrop: this.toggleDrop, value: value, drop: drop, hasSlideIcon: hasSlideIcon }),
            _react_16_8_6_react["createElement"](_velocity_react_1_4_3_velocity_react["VelocityComponent"], { duration: 300, animation: drop ? "slideDown" : "slideUp", interruptBehavior: "queue" },
                _react_16_8_6_react["createElement"]("ul", { style: { maxHeight, width: (pannelWidth ? pannelWidth : "100%") }, className: "m-drop " + (dirctionUp && "direction-up" || "direction-down") },
                    _react_16_8_6_react["createElement"](Drop_DropCom, { data: data, getPropFieldVal: this.getPropFieldVal, clickHande: this.clickFn })))));
    }
}
combobox_Combobox.defaultProps = {
    idField: "id",
    textField: "text",
    icon: "",
    multiply: false,
    defaultVal: "",
    width: 240,
    maxHeight: 300,
    hasSlideIcon: true,
    require: true,
    placeholder: "",
};

// CONCATENATED MODULE: ./src/js/containers/summary/ConditionHead.tsx







const sexArr = [
    {
        id: "1",
        text: "男"
    },
    {
        id: "2",
        text: "女"
    },
    {
        id: "0",
        text: "所有"
    }
];
const translateArr = [
    {
        id: "1",
        text: "未翻译",
        text2: ""
    },
    //  {
    // 	id: "2",
    // 	text: "已翻译"
    // },
    {
        id: "4",
        text: "驳回"
    },
    {
        id: "6",
        text: "报错",
    },
    {
        id: "3",
        text: "未审核",
    },
    {
        id: "0",
        text: "所有"
    }
];
const translateArr2 = [
    {
        id: "1",
        text: "未翻译",
        text2: ""
    },
    // , {
    // 	id: "2",
    // 	text: "已翻译"
    // }, 
    {
        id: "4",
        text: "驳回"
    },
    {
        id: "0",
        text: "所有"
    }
];
class ConditionHead_HeadOpt extends _react_16_8_6_react["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {};
        this.optHandle = (e) => {
            const type = e.currentTarget.name;
            switch (type) {
                case "refresh":
                    break;
                case "del":
                    this.props.showModal();
                    break;
                case "patchDao":
                    this.props.daoPatch();
                    break;
                default:
                    break;
            }
        };
        this.changeTime = (timeArr, field) => {
            const value = timeArr[0];
            this.props.changeHandle(field, value);
        };
        this.inputChange = (key, field) => {
            this.props.changeHandle(field, key);
        };
        this.closeInput = (field) => {
            this.props.changeHandle(field, "");
        };
        this.comboboxCallback = (slectedArr, field) => {
            this.props.changeHandle(field, slectedArr[0].id);
        };
    }
    render() {
        const { type, roleId, showUpfileHandle, filterType } = this.props;
        return (_react_16_8_6_react["createElement"](_react_16_8_6_react["Fragment"], null,
            _react_16_8_6_react["createElement"]("div", null,
                _react_16_8_6_react["createElement"]("div", { style: { display: "flex", justifyContent: "space-between" } },
                    _react_16_8_6_react["createElement"]("div", { className: "m-filter-box" },
                        _react_16_8_6_react["createElement"](SearchCom_SearchCom, { width: 170, searchHandle: this.inputChange, field: "fdept", hasBtn: false, tip: "\u79D1\u5BA4\u641C\u7D22...", closeHandle: this.closeInput }),
                        _react_16_8_6_react["createElement"](combobox_Combobox, { data: sexArr, field: "fsex", width: 100, placeholder: "\u6027\u522B...", defaultVal: "0", clickCallback: this.comboboxCallback }),
                        _react_16_8_6_react["createElement"](SearchCom_SearchCom, { searchHandle: this.inputChange, field: "fage", hasBtn: false, width: 120, tip: "\u5E74\u9F84\u641C\u7D22...", closeHandle: this.closeInput }),
                        _react_16_8_6_react["createElement"](calendar, { ableClear: true, field: "lrdata", width: 140, placeholder: "\u5F55\u5165\u65F6\u95F4", clickBack: this.changeTime }),
                        type == "/gdsummary" ? _react_16_8_6_react["createElement"](calendar, { ableClear: true, field: "gddata", width: 140, placeholder: "\u5F52\u6863\u65F6\u95F4", clickBack: this.changeTime }) : null,
                        type !== "/gdsummary" ? _react_16_8_6_react["createElement"](combobox_Combobox, { data: roleId == "3202" ? translateArr2 : translateArr, field: "status", clickCallback: this.comboboxCallback, renderClick: true, width: 100, defaultVal: filterType }) : null),
                    _react_16_8_6_react["createElement"]("div", { className: "m-optBtn" },
                        type === "/gdsummary" ? (_react_16_8_6_react["createElement"](Button["a" /* Button */], { field: "patchDao", handle: this.optHandle },
                            " ",
                            _react_16_8_6_react["createElement"](Button["b" /* Icon */], { styleType: "fa-external-link" }),
                            "\u6279\u91CF\u5BFC\u51FA")) : _react_16_8_6_react["createElement"](_react_16_8_6_react["Fragment"], null,
                            _react_16_8_6_react["createElement"](Button["a" /* Button */], { field: "upfile", handle: showUpfileHandle },
                                " ",
                                _react_16_8_6_react["createElement"](Button["b" /* Icon */], { styleType: "fa-external-link" }),
                                "\u75C5\u4F8B\u5BFC\u5165"),
                            _react_16_8_6_react["createElement"](react_router_dom["a" /* Link */], { to: "/addCaseModal" },
                                _react_16_8_6_react["createElement"](Button["a" /* Button */], { field: "" },
                                    _react_16_8_6_react["createElement"](Button["b" /* Icon */], { styleType: "fa-plus" }),
                                    "\u6DFB\u52A0\u75C5\u5386")),
                            " "),
                        roleId != "3202" ? _react_16_8_6_react["createElement"](Button["a" /* Button */], { handle: this.optHandle, field: "del", styleType: "line-btn", type: "danger" },
                            _react_16_8_6_react["createElement"](Button["b" /* Icon */], { styleType: "fa-trash" }),
                            "\u6279\u91CF\u5220\u9664") : "")))));
    }
}
const ConditionHead_mapStateToProps = ({ app }) => {
    return {
        filterType: app.get("filterType")
    };
};
/* harmony default export */ var ConditionHead = (Object(es["b" /* connect */])(ConditionHead_mapStateToProps)(ConditionHead_HeadOpt));

// CONCATENATED MODULE: ./src/js/common/table/index.tsx


const pageSizeArr = [
    {
        id: "10",
        text: "10"
    },
    {
        id: "15",
        text: "15"
    }, {
        id: "20",
        text: "20"
    }, {
        id: "30",
        text: "30"
    }, {
        id: "50",
        text: "50"
    },
];
class table_Table extends _react_16_8_6_react["PureComponent"] {
    constructor() {
        super(...arguments);
        this.TableContainer = _react_16_8_6_react["createRef"]();
        this.TableBody = _react_16_8_6_react["createRef"]();
        this.state = {
            tableH: 0,
            checkArr: [],
        };
        this.jumpPage = (e) => {
            let num = +e.currentTarget.value;
            const { total, pageSize, changeHandle, pageNum } = this.props;
            const maxPage = Math.ceil(total / pageSize);
            if (num > maxPage) {
                num = maxPage;
            }
            else if (num < 1) {
                num = 1;
            }
            e.currentTarget.value = num + "";
            if (pageNum == num) {
                return;
            }
            changeHandle("pageNum", num + "");
        };
        this.checkAll = (e) => {
            const target = e.currentTarget;
            const status = target.checked;
            const { list, idField } = this.props;
            const total = list.map(val => val[idField] + "");
            this.setState(pre => {
                let checkAll;
                if (status) {
                    const setArr = new Set(pre.checkArr.concat(total));
                    checkAll = [...setArr];
                }
                else {
                    checkAll = pre.checkArr.filter(val => !total.includes(val));
                }
                this.props.changeHandle("checkArr", checkAll.join(","));
                return {
                    checkArr: checkAll,
                };
            });
        };
        this.changePageSize = (seleteArr, field) => {
            this.props.changeHandle(field, seleteArr[0].id);
        };
        this.checkItem = (e) => {
            const target = e.currentTarget;
            const status = target.checked;
            const id = target.name;
            this.setState(pre => {
                let checkAll;
                if (status) {
                    checkAll = pre.checkArr.concat(id);
                }
                else {
                    checkAll = pre.checkArr.filter(val => val !== id);
                }
                this.props.changeHandle("checkArr", checkAll.join(","));
                return {
                    checkArr: checkAll,
                };
            });
        };
        this.controlMoveBtn = (e) => {
            const type = e.currentTarget.dataset.name;
            const { pages, pageNum, changeHandle } = this.props;
            const totalPage = pages;
            let newPageNum = 0;
            switch (type) {
                case "next":
                    newPageNum = +pageNum + 1;
                    newPageNum = newPageNum > totalPage ? 1 : newPageNum;
                    break;
                default:
                    newPageNum = +pageNum - 1;
                    newPageNum = newPageNum < 1 ? totalPage : newPageNum;
                    break;
            }
            ;
            if (newPageNum == pageNum) {
                return;
            }
            changeHandle("pageNum", newPageNum + "");
        };
        this.pageCodeHandle = (e) => {
            const target = e.currentTarget;
            if (target.classList.contains("active")) {
                return;
            }
            const num = target.dataset.num;
            this.props.changeHandle("pageNum", num);
        };
    }
    componentDidMount() {
        const tableH = this.TableContainer.current.clientHeight;
        this.setState({
            tableH,
        });
    }
    countTotalStatus(checkAll, list) {
        const { idField } = this.props;
        const total = list.map(val => val[idField] + "");
        const hasAll = total.length ? total.every(val => checkAll.includes(val)) : false;
        let hasCheck = false;
        if (!hasAll) {
            hasCheck = checkAll.some(val => total.includes(val));
        }
        return { hasAll, hasCheck };
    }
    getColgroupCom(column, checkbox) {
        return (_react_16_8_6_react["createElement"]("colgroup", null,
            checkbox ? _react_16_8_6_react["createElement"]("col", { style: { width: "40px" } }) : null,
            column.map(({ width, field }) => {
                const wObj = width ? { width: width + "px" } : {};
                return _react_16_8_6_react["createElement"]("col", { key: field, style: wObj });
            })));
    }
    firstPage() {
        const { pages, pageNum } = this.props;
        const arr = Array.from({ length: 5 }, (...args) => (args[1] + 1));
        return (_react_16_8_6_react["createElement"](_react_16_8_6_react["Fragment"], null,
            arr.map(val => (_react_16_8_6_react["createElement"]("span", { className: "m-page-num " + (val == pageNum ? "active" : ""), key: val, "data-num": val, onClick: this.pageCodeHandle }, val))),
            _react_16_8_6_react["createElement"]("span", null, "..."),
            _react_16_8_6_react["createElement"]("span", { className: "m-page-num " + (pages == pageNum ? "active" : ""), "data-num": pages, onClick: this.pageCodeHandle }, pages)));
    }
    lastPage() {
        const { pages, pageNum } = this.props;
        const arr = Array.from({ length: 5 }, (...args) => (args[1] + 1));
        return (_react_16_8_6_react["createElement"](_react_16_8_6_react["Fragment"], null,
            _react_16_8_6_react["createElement"]("span", { className: "m-page-num " + (1 == pageNum ? "active" : ""), "data-num": 1, onClick: this.pageCodeHandle }, 1),
            _react_16_8_6_react["createElement"]("span", null, "..."),
            arr.map(val => (_react_16_8_6_react["createElement"]("span", { className: "m-page-num " + (pages - 5 + val == pageNum ? "active" : ""), "data-num": pages - 5 + val, key: pages - 5 + val, onClick: this.pageCodeHandle }, pages - 5 + val)))));
    }
    centerPage() {
        const { pageNum, pages } = this.props;
        const arr = Array.from({ length: 5 }, (...args) => (args[1] + 1));
        return (_react_16_8_6_react["createElement"](_react_16_8_6_react["Fragment"], null,
            _react_16_8_6_react["createElement"]("span", { className: "m-page-num " + (1 == pageNum ? "active" : ""), "data-num": 1, onClick: this.pageCodeHandle }, 1),
            _react_16_8_6_react["createElement"]("span", null, "..."),
            arr.map(val => (_react_16_8_6_react["createElement"]("span", { "data-num": pageNum - 3 + val, onClick: this.pageCodeHandle, className: "m-page-num " + (pageNum - 3 + val == pageNum ? "active" : ""), key: pageNum - 3 + val }, pageNum - 3 + val))),
            _react_16_8_6_react["createElement"]("span", null, "..."),
            _react_16_8_6_react["createElement"]("span", { className: "m-page-num " + (pages == pageNum ? "active" : ""), "data-num": pages, onClick: this.pageCodeHandle }, pages)));
    }
    normalPage() {
        const { pageNum, pages } = this.props;
        const arr = Array.from({ length: pages }, (...args) => (args[1] + 1));
        return arr.map(val => {
            return (_react_16_8_6_react["createElement"]("span", { className: "m-page-num " + (val == pageNum ? "active" : ""), "data-num": val, key: val, onClick: this.pageCodeHandle }, val));
        });
    }
    render() {
        const { list, column, idField, total, pageNum, pages, checkbox } = this.props;
        const { tableH, checkArr } = this.state;
        let tabOver = "";
        let h;
        if (tableH > 0) {
            h = (+tableH - 120); // 表头 高40 ，离底部还要有距离
            tabOver = list.length * 43 > h ? "tab-over" : "";
            h += "px";
        }
        ;
        const colgroupCom = this.getColgroupCom(column, checkbox);
        const checkStatus = this.countTotalStatus(checkArr, list);
        let navigatepageCom;
        if (pages < 11) {
            navigatepageCom = this.normalPage();
        }
        else if (pageNum - 1 < 4) {
            navigatepageCom = this.firstPage();
        }
        else if (pages - pageNum < 4) {
            navigatepageCom = this.lastPage();
        }
        else {
            navigatepageCom = this.centerPage();
        }
        return (_react_16_8_6_react["createElement"]("div", { className: "g-table", ref: this.TableContainer },
            _react_16_8_6_react["createElement"]("div", { className: "m-fixTabHead " + tabOver },
                _react_16_8_6_react["createElement"]("table", null,
                    colgroupCom,
                    _react_16_8_6_react["createElement"]("thead", null,
                        _react_16_8_6_react["createElement"]("tr", null,
                            checkbox ? _react_16_8_6_react["createElement"]("th", null,
                                _react_16_8_6_react["createElement"]("label", { className: "m-label m-lab-checkbox" },
                                    _react_16_8_6_react["createElement"]("input", { type: "checkbox", name: "all", className: checkStatus.hasCheck && "has-check" || "", checked: checkStatus.hasAll, onChange: this.checkAll }))) : null,
                            column.map(({ text, field }) => {
                                return _react_16_8_6_react["createElement"]("th", { key: field }, text);
                            }))))),
            _react_16_8_6_react["createElement"]("div", { className: "m-fixTabBody", style: { "height": h }, ref: this.TableBody },
                _react_16_8_6_react["createElement"]("table", null,
                    colgroupCom,
                    _react_16_8_6_react["createElement"]("tbody", null, list.map(dataItem => {
                        const id = dataItem[idField] + "";
                        const checkStaus = checkArr.includes(id);
                        return (_react_16_8_6_react["createElement"]("tr", { key: id },
                            checkbox ? _react_16_8_6_react["createElement"]("td", { style: { width: "60px" } },
                                _react_16_8_6_react["createElement"]("label", { className: "m-label m-lab-checkbox" },
                                    _react_16_8_6_react["createElement"]("input", { type: "checkbox", name: id, checked: checkStaus, onChange: this.checkItem }))) : null,
                            column.map((node) => {
                                const { field, formatter } = node;
                                const text = formatter ? formatter(dataItem) : dataItem[field];
                                return _react_16_8_6_react["createElement"]("td", { key: field }, text);
                            })));
                    })))),
            _react_16_8_6_react["createElement"]("div", { className: "g-pageCode" },
                _react_16_8_6_react["createElement"]("div", { className: "m-page-total" },
                    _react_16_8_6_react["createElement"]("span", null,
                        "\u5171 ",
                        total,
                        " \u6761\u8BB0\u5F55"),
                    _react_16_8_6_react["createElement"]("span", null, "\u6BCF\u9875\u663E\u793A"),
                    _react_16_8_6_react["createElement"](combobox_Combobox, { field: "pageSize", clickCallback: this.changePageSize, data: pageSizeArr, width: 80, defaultVal: "10", dirctionUp: true }),
                    _react_16_8_6_react["createElement"]("span", null, "\u6761")),
                _react_16_8_6_react["createElement"]("div", { style: { display: "flex" } },
                    _react_16_8_6_react["createElement"]("div", { className: "m-code-number" },
                        _react_16_8_6_react["createElement"]("span", { className: "m-page-num", "data-name": "pre", onClick: this.controlMoveBtn },
                            _react_16_8_6_react["createElement"]("i", { className: "fa fa-chevron-left " })),
                        _react_16_8_6_react["createElement"]("span", null, navigatepageCom),
                        _react_16_8_6_react["createElement"]("span", { className: "m-page-num", "data-name": "next", onClick: this.controlMoveBtn },
                            _react_16_8_6_react["createElement"]("i", { className: "fa fa-chevron-right " }))),
                    _react_16_8_6_react["createElement"]("span", { style: { marginLeft: "20px" } },
                        _react_16_8_6_react["createElement"]("span", null, "\u8DF3\u8F6C\u5230"),
                        _react_16_8_6_react["createElement"]("input", { className: "j-jump-page", type: "number", min: 1, onChange: this.jumpPage }),
                        "\u9875")))));
    }
}
table_Table.defaultProps = {
    hasPageNums: true,
    idField: "id",
    hasOrder: true,
    checkbox: false,
    perNums: 10,
    tableH: "auto",
};

// CONCATENATED MODULE: ./src/js/containers/summary/CaseTable.tsx




class CaseTable_ResultSearch extends _react_16_8_6_react["PureComponent"] {
    constructor() {
        super(...arguments);
        this.column = [
            {
                text: "姓名",
                field: "fname",
                width: 180,
            },
            {
                text: "性别",
                field: "fsex",
            },
            {
                text: "年龄",
                field: "fage",
            },
            {
                text: "科室",
                field: "fdept",
            },
            {
                text: "床号",
                field: "fdeb",
            },
            {
                text: "病案号",
                field: "fprn",
            },
            {
                text: "录入时间",
                field: "lrdata",
            },
            {
                text: "归档时间",
                field: "gddata",
            },
            {
                text: "状态",
                field: "status_name",
                formatter: function (node) {
                    // 主任角色可选筛选值 3：5：；6： 医生角色可选筛选值：1:，2：，4：
                    const status = node.status;
                    const obj = {
                        "1": "m-translate-warn",
                        "2": "m-translate-warn",
                        "3": "m-translate-green",
                        "4": "m-translate-error",
                        "5": "",
                        "6": "m-translate-error",
                    };
                    const name = obj[status];
                    return _react_16_8_6_react["createElement"]("span", { className: name }, node.status_name);
                }
            },
            {
                text: "操作",
                field: "opt",
                width: 140,
                formatter: (node) => {
                    const { type, roleId } = this.props;
                    const pathObj = {
                        pathname: "/translate",
                        state: {
                            id: node.id,
                            type,
                        }
                    };
                    const name = this.props.roleId == "3202" ? "翻译" : "查看";
                    return (_react_16_8_6_react["createElement"](_react_16_8_6_react["Fragment"], null,
                        _react_16_8_6_react["createElement"](react_router_dom["b" /* NavLink */], { to: pathObj },
                            _react_16_8_6_react["createElement"]("button", { className: "s-btn normal-btn primary" }, name)),
                        "\u00A0",
                        roleId != "3202" ? _react_16_8_6_react["createElement"](Button["a" /* Button */], { type: "danger", field: node.id, handle: this.delItemCase }, "\u5220\u9664") : null));
                }
            }
        ];
        this.state = {};
        this.delItemCase = (e) => {
            const id = e.currentTarget.name;
            this.props.delItem(id);
        };
    }
    componentDidMount() {
        if (this.props.type == "/summary") {
            this.column.splice(7, 1);
        }
    }
    render() {
        const { data, roleId } = this.props;
        if (!data) {
            return "";
        }
        const { list, pageNum, pageSize, total, pages } = data;
        const { changeHandle } = this.props;
        return _react_16_8_6_react["createElement"](table_Table, { list: list, column: this.column, pageNum: pageNum, pageSize: pageSize, total: total, pages: pages, changeHandle: changeHandle, checkbox: roleId != "3202" });
    }
}
/* harmony default export */ var CaseTable = (CaseTable_ResultSearch);

// CONCATENATED MODULE: ./src/api/summary.tsx


/* harmony default export */ var summary = ({
    getAllSummaryCaseByStatus: function (data) {
        return AxiosInstance["a" /* default */].post("summary/getAllSummaryCaseByStatus", lib["stringify"](data));
    },
    addChSummaryCase: function (obj) {
        return AxiosInstance["a" /* default */].post("summary/addChSummaryCase", obj, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    },
    getSummaryCaseByUserid: function (user_id) {
        return AxiosInstance["a" /* default */].get("summary/getSummaryCaseByUserid?user_id=" + user_id);
    },
    saveChSummaryCase: function (data) {
        return AxiosInstance["a" /* default */].post("summary/saveChSummaryCase", data, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    },
    delSummaryCaseById: function (id) {
        return AxiosInstance["a" /* default */].post("summary/delSummaryCaseById", lib["stringify"]({ id }));
    },
    getAllOrg() {
        return AxiosInstance["a" /* default */].get("/summary/getAllOrg");
    },
    upCaseFile(url, enPk) {
        return AxiosInstance["a" /* default */].post("/summary/upCaseFile", lib["stringify"]({ url, enPk }));
    }
});

// CONCATENATED MODULE: ./src/js/common/Loading.tsx


class Loading_Loading extends _react_16_8_6_react["PureComponent"] {
    render() {
        const { container } = this.props;
        return Object(_react_dom_16_8_6_react_dom["createPortal"])(_react_16_8_6_react["createElement"](Loading_Loading.LoadingCom, null), container);
    }
}
Loading_Loading.LoadingCom = () => {
    return (_react_16_8_6_react["createElement"]("div", { className: "g-loading" },
        _react_16_8_6_react["createElement"]("div", { className: "m-loading" },
            _react_16_8_6_react["createElement"]("b", { className: "loading-text" }, "loading..."))));
};
/* harmony default export */ var common_Loading = (Loading_Loading);

// CONCATENATED MODULE: ./src/js/containers/summary/index.tsx









class summary_CaseManage extends _react_16_8_6_react["PureComponent"] {
    constructor() {
        super(...arguments);
        this.params = {
            pageNum: "1",
            pageSize: "10",
            status: "0",
            fsex: "0",
            fage: "",
            lrdata: "",
            fdept: "",
            gddata: "",
        };
        this.state = {
            checkArr: "",
            data: null,
            initDelModal: false,
            showModal: false,
            delId: "",
            fetching: false,
            initUpfileModal: false,
            showUpfileModal: false,
            url: "http://10.100.1.38:8080/iemr/webservice/IEMRWebService?wsdl",
            enPk: ""
        };
        this.notificationRef = _react_16_8_6_react["createRef"]();
        this.toggleShowDelModal = () => {
            this.setState(pre => {
                return {
                    showModal: !pre.showModal,
                    initDelModal: true
                };
            });
        };
        this.webServerHandle = (field, value) => {
            this.setState({
                [field]: value
            });
        };
        this.refreshData = () => {
            this.getTableData(this.props.roleId);
        };
        this.delCase = () => {
            const flag = this.state.delId;
            const notification = this.notificationRef.current;
            summary.delSummaryCaseById(flag).then((res) => {
                this.toggleShowDelModal();
                notification.addNotice(res.message, "success");
                this.getTableData(this.props.roleId);
            });
        };
        this.delitem = (id) => {
            this.setState({
                delId: id
            });
            this.toggleShowDelModal();
        };
        this.delMultiply = () => {
            if (!this.state.checkArr) {
                this.notificationRef.current.addNotice("请选择病历！", "warn");
                return;
            }
            this.setState(pre => {
                return {
                    delId: pre.checkArr
                };
            });
            this.toggleShowDelModal();
        };
        this.changeState = (filed, value) => {
            if (filed === "checkArr") {
                this.setState({
                    checkArr: value
                });
            }
            else {
                this.params[filed] = value;
                this.getTableData(this.props.roleId);
            }
        };
        this.upfileHandle = () => {
            const { enPk, url } = this.state;
            if (!enPk || !url) {
                this.notificationRef.current.addNotice("填写完整！", "warn");
                return;
            }
            summary.upCaseFile(url, enPk).then((res) => {
                if (res.code == 200) {
                    this.getTableData(this.props.roleId);
                    this.toggleShowUpfileModal();
                }
                this.notificationRef.current.addNotice(res.message, (res.code == 200 ? "success" : "warn"));
            });
        };
        this.toggleShowUpfileModal = () => {
            this.setState(pre => {
                return {
                    showUpfileModal: !pre.showUpfileModal,
                    initUpfileModal: true
                };
            });
        };
        this.daoPatch = () => {
            const { checkArr } = this.state;
            if (!checkArr) {
                this.notificationRef.current.addNotice("选择病例!", "warn");
                return;
            }
            const a = document.createElement("a");
            a.href = window.getSession("getPath") + "summary/wordExport?ids=" + checkArr;
            document.body.appendChild(a);
            a.download = "文件下载";
            a.click();
            document.body.removeChild(a);
        };
    }
    componentDidMount() {
        this.getTableData(this.props.roleId);
    }
    componentWillReceiveProps(nextProp) {
        if (nextProp.roleId !== this.props.roleId) {
            this.getTableData(nextProp.roleId);
        }
    }
    getTableData(role_id) {
        const flag = this.props.location.pathname === "/summary" ? "0" : "1";
        this.setState({
            fetching: true,
        });
        summary.getAllSummaryCaseByStatus(Object.assign({ role_id, flag }, this.params)).then(res => {
            this.setState({
                data: res.data,
                fetching: false
            });
        });
    }
    render() {
        const { location: { state: { text }, pathname }, roleId } = this.props;
        const { data, initDelModal, showModal, fetching, initUpfileModal, showUpfileModal, url, enPk } = this.state;
        const modalDom = document.getElementById("s-modal");
        return (_react_16_8_6_react["createElement"]("div", { className: "g-padding g-summary" },
            fetching ? _react_16_8_6_react["createElement"](common_Loading, { container: modalDom }) : null,
            _react_16_8_6_react["createElement"](toast_Notification, { ref: this.notificationRef }),
            initDelModal ? (_react_16_8_6_react["createElement"](Modal_Modal, { className: "m-del-modal", tit: "\u63D0\u793A", type: "question", container: modalDom, onSure: this.delCase, onCancel: this.toggleShowDelModal, show: showModal },
                _react_16_8_6_react["createElement"]("p", { style: { padding: "20px 10px" } }, "\u786E\u5B9A\u5220\u53BB\u5417\uFF1F"))) : null,
            initUpfileModal ? (_react_16_8_6_react["createElement"](Modal_Modal, { className: "pwd-M", tit: "\u5BFC\u5165\u75C5\u4F8B", container: modalDom, onSure: this.upfileHandle, onCancel: this.toggleShowUpfileModal, show: showUpfileModal },
                _react_16_8_6_react["createElement"]("div", { className: "m-file-box" },
                    _react_16_8_6_react["createElement"]("p", { className: "item-inp", style: { color: "#535be9", padding: "0 10px" } },
                        _react_16_8_6_react["createElement"]("span", { className: "m-inp-tit" }, "url\u63D0\u793A"),
                        "http://10.100.1.38:8080/iemr/webservice/IEMRWebService?wsdl"),
                    _react_16_8_6_react["createElement"](InputBtn_InpBox, { type: "text", styleType: "normal", field: "url", title: "URL", value: url, changeHandle: this.webServerHandle }),
                    _react_16_8_6_react["createElement"](InputBtn_InpBox, { type: "text", styleType: "normal", field: "enPk", title: "\u5C31\u8BCA\u6D41\u6C34\u53F7", value: enPk, changeHandle: this.webServerHandle })))) : null,
            _react_16_8_6_react["createElement"]("p", { style: { paddingBottom: 16 } }, text),
            _react_16_8_6_react["createElement"](ConditionHead, { changeHandle: this.changeState, type: pathname, showModal: this.delMultiply, daoPatch: this.daoPatch, roleId: roleId, showUpfileHandle: this.toggleShowUpfileModal }),
            data ? _react_16_8_6_react["createElement"](CaseTable, { data: data, changeHandle: this.changeState, type: pathname, delItem: this.delitem, roleId: roleId }) : null));
    }
}
const summary_mapStateToProp = ({ app }) => {
    const roleId = app.get("role_ids")[app.get("role_index")];
    return {
        roleId,
    };
};
/* harmony default export */ var containers_summary = (Object(es["b" /* connect */])(summary_mapStateToProp)(summary_CaseManage));

// CONCATENATED MODULE: ./src/js/containers/summary/language.tsx
const languageConfig = {
    en: {
        title: "Shenzhen Samii Medical Center",
        fname: "Name",
        fsex: "Gender",
        fage: "Age",
        fdept: "Administrative office",
        fdeb: "Bed Number",
        fprn: "Medical record number",
        fsurvey: "due to ",
        fryqk: "Admission situation",
        fryzd: "",
        fzljg: "Medical treatment",
        fcyzd: "Discharge diagnosis",
        fcyqk: "Discharge situation",
        fcyyz: "Discharge Instructions ",
        frydata: "admitted to hospital at ",
        fcydata: "discharged at ",
        fsumd: "hospitalized for ",
        fsumd1: " days",
        patient: "Patient"
    },
    ch: {
        title: "深圳市萨米医疗中心",
        fname: "姓名",
        fsex: "性别",
        fage: "年龄",
        fdept: "科室",
        fdeb: "床号",
        fprn: "病案号",
        fsurvey: "因 ",
        fryqk: "入院情况",
        fryzd: "",
        fzljg: "诊疗经过",
        fcyzd: "出院诊断",
        fcyqk: "出院情况",
        fcyyz: "出院医嘱",
        frydata: " 入院",
        fcydata: " 出院",
        fsumd: "共住院 ",
        fsumd1: " 天",
        patient: "患者"
    }
};
//Zhang Si, male, 20, due to "patient Zhang Sanyin.", admitted to hospital at 20190605, discharged at 20190506, hospitalized for 3 days.


// CONCATENATED MODULE: ./src/js/containers/summary/CaseModalInp.tsx




const CaseModalInp_sexArr = [{
        id: "1",
        textCh: "男",
        textEn: "Man"
    },
    {
        id: "2",
        textCh: "女",
        textEn: "Woman"
    }];
class CaseModalInp_CaseModal extends _react_16_8_6_react["PureComponent"] {
    constructor() {
        super(...arguments);
        this.changeHandle = (e) => {
            const tagert = e.currentTarget;
            const field = tagert.name;
            const value = tagert.value.trim();
            this.props.changeState(field, value);
        };
        this.setSex = (seletArr) => {
            const node = CaseModalInp_sexArr[seletArr[0].id - 1];
            const value = this.props.type == "ch" ? node.textCh : node.textEn;
            this.props.changeState("fsex", value);
        };
        this.setCalendar = (timeArr, field) => {
            const value = timeArr[0];
            this.props.changeState(field, value);
        };
    }
    render() {
        const { type, data, children, ableEdit } = this.props;
        const { fname, fage, fsex, fdeb, fdept, fprn, fryqk, fzljg, fcyyz, fcyqk, fcyzd, fsurvey, fcydata, frydata, fsumd } = data.toJS();
        const config = languageConfig[type];
        const is_en = type === "en";
        return (_react_16_8_6_react["createElement"]("div", { className: "m-translate " + (!is_en && "g-translate-ch" || "g-translate-en") + (!ableEdit ? " onlyRead" : "") },
            _react_16_8_6_react["createElement"]("p", { className: "m-tit" }, config.title),
            _react_16_8_6_react["createElement"]("div", { className: "g-translate-header" },
                _react_16_8_6_react["createElement"]("div", { className: "m-add-item" },
                    _react_16_8_6_react["createElement"]("div", null,
                        config.fname,
                        "\uFF1A",
                        _react_16_8_6_react["createElement"]("br", null),
                        _react_16_8_6_react["createElement"](CaseModalInp_CaseModal.ItemInp, { is_en: is_en, field: "fname", value: fname, handle: this.changeHandle })),
                    _react_16_8_6_react["createElement"]("div", { className: "g-org" },
                        config.fdept,
                        "\uFF1A",
                        _react_16_8_6_react["createElement"]("br", null),
                        _react_16_8_6_react["createElement"]("input", { readOnly: !ableEdit, type: "text", name: "fdept", autoComplete: "off", className: "s-inp normal " + (!fdept ? "no-fill" : ""), value: fdept, onChange: this.changeHandle }),
                        children)),
                _react_16_8_6_react["createElement"]("div", { className: "m-add-item" },
                    _react_16_8_6_react["createElement"]("div", null,
                        config.fsex,
                        "\uFF1A",
                        _react_16_8_6_react["createElement"]("br", null),
                        !is_en ? _react_16_8_6_react["createElement"](combobox_Combobox, { field: "fsex", defaultVal: (fsex == "男") && "1" || "2", data: CaseModalInp_sexArr, textField: (type == "ch" && "textCh" || "textEn"), hasSlideIcon: false, clickCallback: this.setSex, width: "auto" })
                            : _react_16_8_6_react["createElement"]("input", { type: "text", readOnly: true, className: "s-inp normal", defaultValue: fsex })),
                    _react_16_8_6_react["createElement"]("div", null,
                        config.fdeb,
                        "\uFF1A",
                        _react_16_8_6_react["createElement"]("br", null),
                        _react_16_8_6_react["createElement"](CaseModalInp_CaseModal.ItemInp, { is_en: is_en, field: "fdeb", value: fdeb, handle: this.changeHandle }))),
                _react_16_8_6_react["createElement"]("div", { className: "m-add-item" },
                    _react_16_8_6_react["createElement"]("div", null,
                        config.fage,
                        "\uFF1A",
                        _react_16_8_6_react["createElement"]("br", null),
                        _react_16_8_6_react["createElement"](CaseModalInp_CaseModal.ItemInp, { is_en: is_en, field: "fage", type: "number", value: fage, handle: this.changeHandle })),
                    _react_16_8_6_react["createElement"]("div", null,
                        config.fprn,
                        "\uFF1A",
                        _react_16_8_6_react["createElement"]("br", null),
                        _react_16_8_6_react["createElement"](CaseModalInp_CaseModal.ItemInp, { is_en: is_en, field: "fprn", value: fprn, handle: this.changeHandle })))),
            _react_16_8_6_react["createElement"]("div", { className: " g-tanslate-content" },
                _react_16_8_6_react["createElement"]("div", { className: "paitent-info" },
                    _react_16_8_6_react["createElement"]("span", null,
                        config.patient,
                        "\uFF1A"),
                    _react_16_8_6_react["createElement"]("span", null,
                        fname,
                        "\uFF0C",
                        fsex,
                        "\uFF0C",
                        fage,
                        "\uFF0C",
                        config.fsurvey,
                        _react_16_8_6_react["createElement"]("input", { readOnly: !ableEdit, className: "s-inp normal m-survey " + (!fsurvey ? "no-fill" : ""), value: fsurvey, onChange: this.changeHandle, type: "text", name: "fsurvey" }),
                        "\uFF0C",
                        !is_en ? (_react_16_8_6_react["createElement"](_react_16_8_6_react["Fragment"], null,
                            "\u4E8E",
                            _react_16_8_6_react["createElement"](calendar, { width: 120, field: "frydata", clickBack: this.setCalendar, selTimeValArr: frydata }),
                            config.frydata)) : (config.frydata + frydata),
                        "\uFF0C",
                        !is_en ? _react_16_8_6_react["createElement"](_react_16_8_6_react["Fragment"], null,
                            "\u4E8E",
                            _react_16_8_6_react["createElement"](calendar, { width: 120, field: "fcydata", clickBack: this.setCalendar, selTimeValArr: fcydata }),
                            config.fcydata) : config.fcydata + fcydata,
                        "\uFF0C",
                        _react_16_8_6_react["createElement"](_react_16_8_6_react["Fragment"], null,
                            config.fsumd,
                            "\u00A0",
                            !is_en ? _react_16_8_6_react["createElement"]("input", { className: "s-inp normal " + (!fsumd && "no-fill" || ""), style: { width: 60 }, name: "fsumd", onChange: this.changeHandle, value: fsumd }) : fsumd,
                            "\u00A0",
                            config.fsumd1),
                        "\u3002")),
                _react_16_8_6_react["createElement"]("p", { className: "translate-item" },
                    _react_16_8_6_react["createElement"]("span", { className: "m-right-tit m-article-tit" },
                        config.fryqk,
                        "\uFF1A"),
                    _react_16_8_6_react["createElement"]("textarea", { readOnly: !ableEdit, name: "fryqk", className: "m-article " + (!fryqk ? "no-fill" : ""), rows: 3, value: fryqk, onChange: this.changeHandle })),
                _react_16_8_6_react["createElement"]("p", { className: "translate-item" },
                    _react_16_8_6_react["createElement"]("span", { className: "m-right-tit m-article-tit" },
                        config.fzljg,
                        "\uFF1A"),
                    _react_16_8_6_react["createElement"]("textarea", { readOnly: !ableEdit, name: "fzljg", className: "m-article " + (!fzljg ? "no-fill" : ""), value: fzljg, rows: 3, onChange: this.changeHandle })),
                _react_16_8_6_react["createElement"]("p", { className: "translate-item" },
                    _react_16_8_6_react["createElement"]("span", { className: "m-right-tit m-article-tit" },
                        config.fcyzd,
                        "\uFF1A"),
                    _react_16_8_6_react["createElement"]("textarea", { readOnly: !ableEdit, name: "fcyzd", className: "m-article " + (!fcyzd ? "no-fill" : ""), value: fcyzd, rows: 3, onChange: this.changeHandle })),
                _react_16_8_6_react["createElement"]("p", { className: "translate-item" },
                    _react_16_8_6_react["createElement"]("span", { className: "m-right-tit m-article-tit" },
                        config.fcyqk,
                        "\uFF1A"),
                    _react_16_8_6_react["createElement"]("textarea", { readOnly: !ableEdit, name: "fcyqk", className: "m-article " + (!fcyqk ? "no-fill" : ""), value: fcyqk, rows: 3, onChange: this.changeHandle })),
                _react_16_8_6_react["createElement"]("p", { className: "translate-item" },
                    _react_16_8_6_react["createElement"]("span", { className: "m-right-tit m-article-tit" },
                        config.fcyyz,
                        "\uFF1A"),
                    _react_16_8_6_react["createElement"]("textarea", { readOnly: !ableEdit, name: "fcyyz", className: "m-article " + (!fcyyz ? "no-fill" : ""), value: fcyyz, rows: 3, onChange: this.changeHandle })))));
    }
}
CaseModalInp_CaseModal.defaultProps = {
    ableEdit: true,
};
CaseModalInp_CaseModal.ItemInp = ({ is_en, field, value, handle, type = "text" }) => {
    return !is_en ? _react_16_8_6_react["createElement"]("input", { type: type, name: field, className: "s-inp normal " + (!value ? "no-fill" : ""), value: value, onChange: handle }) :
        _react_16_8_6_react["createElement"]("input", { type: "text", readOnly: true, className: "s-inp normal", defaultValue: value });
};
/* harmony default export */ var CaseModalInp = (CaseModalInp_CaseModal);

// EXTERNAL MODULE: ./src/js/common/ImmutableMap.tsx
var ImmutableMap = __webpack_require__("./src/js/common/ImmutableMap.tsx");

// CONCATENATED MODULE: ./src/js/containers/summary/AddCaseModal.tsx









class AddCaseModal_AddCaseModal extends _react_16_8_6_react["PureComponent"] {
    constructor() {
        super(...arguments);
        this.timeSave = 10000;
        this.id = "";
        this.state = {
            data: Object(ImmutableMap["a" /* createTypedMap */])(this.props.data),
            timeId: null,
            isChange: false
        };
        this.notificationRef = _react_16_8_6_react["createRef"]();
        this.submit = (e) => {
            const { user_id } = this.props;
            const type = e.currentTarget.name;
            const { data } = this.state;
            const obj = Object.assign({ user_id }, data.toJS());
            const notifacation = this.notificationRef.current;
            if (type == "save") {
                summary.addChSummaryCase(obj).then((res) => {
                    notifacation.addNotice("保存成功！", "success");
                    this.setState(pre => ({
                        isChange: false,
                        data: pre.data.set("id", res.data.id)
                    }));
                });
            }
            else { //提交
                if (document.querySelectorAll("#g-gdsummary .no-fill").length) {
                    notifacation.addNotice("请填写完整，然后提交！", "warn");
                    return;
                }
                summary.saveChSummaryCase(obj).then(() => {
                    const obj = {
                        pathname: "/summary",
                        state: {
                            text: "病历清单"
                        }
                    };
                    this.props.pathTo(obj);
                });
            }
        };
        this.changeState = (field, value) => {
            const val = field == "fage" ? value.substr(0, 3) : value;
            this.setState(pre => ({
                data: pre.data.set(field, val),
                isChange: value != "",
            }));
        };
        this.orgItemHandle = (e) => {
            const text = e.currentTarget.dataset.name;
            this.setState(pre => ({
                data: pre.data.set("fdept", text),
                isChange: true
            }));
        };
    }
    componentDidMount() {
        // 添加自动保存的定时器
        const _self = this;
        let oldData = this.state.data;
        const timeId = window.setInterval(function () {
            const newData = _self.state.data;
            if (oldData !== newData) {
                const obj = Object.assign({ user_id: _self.props.user_id }, newData.toJS());
                summary.addChSummaryCase(obj).then((res) => {
                    oldData = newData;
                    _self.setState(pre => ({
                        isChange: false,
                        data: pre.data.set("id", res.data.id),
                    }));
                });
            }
        }, this.timeSave);
        this.setState({
            timeId,
        });
        if (this.props.hasSave) {
            this.notificationRef.current.addNotice("有上次保存未提交的，请填写完整，然后提交！", "warn", 0);
        }
    }
    filterOrg() {
        const { orgData } = this.props;
        const fdept = this.state.data.get("fdept");
        return orgData.filter(val => {
            return val.name.includes(fdept);
        });
    }
    componentWillUnmount() {
        const { timeId } = this.state;
        timeId && window.clearInterval(timeId);
    }
    render() {
        const { data, isChange } = this.state;
        const orgData = this.filterOrg();
        const saveAlert = isChange ? { color: "black" } : undefined;
        return (_react_16_8_6_react["createElement"]("div", { className: "g-padding g-gdsummary", id: "g-gdsummary" },
            _react_16_8_6_react["createElement"](toast_Notification, { ref: this.notificationRef }),
            _react_16_8_6_react["createElement"]("div", { className: "g-translate-box", style: { width: "50%", marginLeft: 10 } },
                _react_16_8_6_react["createElement"]("div", { className: "g-translate g-add-modal" },
                    _react_16_8_6_react["createElement"](CaseModalInp, { data: data, type: "ch", changeState: this.changeState },
                        _react_16_8_6_react["createElement"]("ul", { className: "m-org-drop" }, orgData.map(val => {
                            return (_react_16_8_6_react["createElement"]("li", { onClick: this.orgItemHandle, "data-name": val.name, key: val.id }, val.name));
                        }))))),
            _react_16_8_6_react["createElement"]("div", { className: "add-opt-box" },
                _react_16_8_6_react["createElement"](Button["a" /* Button */], { type: "green", handle: this.submit, field: "save" },
                    _react_16_8_6_react["createElement"](Button["b" /* Icon */], { styleType: "fa fa-floppy-o" }),
                    _react_16_8_6_react["createElement"]("span", { style: saveAlert }, "\u4FDD\u5B58")),
                _react_16_8_6_react["createElement"]("button", { className: "s-btn normal-btn primary ", name: "submit", onClick: this.submit },
                    _react_16_8_6_react["createElement"](Button["c" /* SvgIcon */], { styleType: "submit" }),
                    "\u63D0\u4EA4"),
                _react_16_8_6_react["createElement"](react_router_dom["a" /* Link */], { to: { pathname: "/summary", state: { text: "病历清单" } } },
                    _react_16_8_6_react["createElement"]("button", { className: "s-btn line-btn primary" },
                        _react_16_8_6_react["createElement"]("i", { className: "fa fa-undo" }, "\u00A0"),
                        "\u53D6\u6D88")))));
    }
}
class AddCaseModal_Container extends _react_16_8_6_react["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            data: null,
            hasSave: false,
            orgData: null
        };
        this.pathTo = (path) => {
            this.props.history.push(path);
        };
    }
    componentDidMount() {
        const { user_id } = this.props;
        const time = new Date();
        const year = time.getFullYear();
        const month = time.getMonth() + 1;
        const day = time.getDate();
        const timeStr = "" + year + "-" + month + "-" + day;
        const obj = {
            fname: "",
            fsex: "男",
            fage: "",
            fdept: "",
            fdeb: "",
            fprn: "",
            fsurvey: "",
            fryqk: "",
            fryzd: "",
            fzljg: "",
            fcyzd: "",
            fcyqk: "",
            fcyyz: "",
            frydata: timeStr,
            fcydata: timeStr,
            fsumd: "",
            id: "",
        };
        //看看上次有没有写了一部分保存后没有提交的
        const hasData = summary.getSummaryCaseByUserid(user_id);
        const Org = summary.getAllOrg();
        Promise.all([hasData, Org]).then((res) => {
            const [caseData, orgData] = res;
            const hasSave = caseData.code == 4000;
            if (hasSave) {
                for (const iterator in obj) {
                    const key = iterator;
                    caseData.data[0][key] && (obj[key] = caseData.data[0][key]);
                }
            }
            this.setState({
                data: obj,
                hasSave,
                orgData: orgData.data
            });
        });
    }
    render() {
        const { data, hasSave, orgData } = this.state;
        const user_id = this.props.user_id;
        return data ? _react_16_8_6_react["createElement"](AddCaseModal_AddCaseModal, { orgData: orgData, hasSave: hasSave, data: data, user_id: user_id, pathTo: this.pathTo }) : null;
    }
}
const AddCaseModal_mapStateToProps = ({ app }) => {
    const user_id = app.get("user_id");
    return {
        user_id,
    };
};
/* harmony default export */ var summary_AddCaseModal = (Object(react_router["f" /* withRouter */])(Object(es["b" /* connect */])(AddCaseModal_mapStateToProps)(AddCaseModal_Container)));

// CONCATENATED MODULE: ./src/js/containers/summary/CaseModalText.tsx


const CaseModalText_sexArr = {
    en: {
        "1": "Man",
        "2": "Woman",
    },
    ch: {
        "1": "男",
        "2": "女",
    }
};
CaseModalText_sexArr;
class CaseModalText_CaseModal extends _react_16_8_6_react["PureComponent"] {
    render() {
        const { type, params: { fname, fage, fsex, fdeb, fdept, fprn, fryqk, fzljg, fcyyz, fcyqk, fcyzd, fsurvey, fcydata, frydata, fsumd } } = this.props;
        const config = languageConfig[type];
        const is_en = type === "en" ? _react_16_8_6_react["createElement"]("br", null) : null;
        return (_react_16_8_6_react["createElement"]("div", { className: "m-translate " + (type === "ch" && "g-translate-ch" || "g-translate-en") },
            _react_16_8_6_react["createElement"]("p", { className: "m-tit" }, config.title),
            _react_16_8_6_react["createElement"]("div", { className: "g-translate-header" },
                _react_16_8_6_react["createElement"]("div", { className: "m-add-item" },
                    _react_16_8_6_react["createElement"]("p", null,
                        _react_16_8_6_react["createElement"]("span", { className: "m-right-tit m-head-tit" },
                            config.fname,
                            "\uFF1A"),
                        is_en,
                        _react_16_8_6_react["createElement"]("span", { className: "head-txt" }, fname)),
                    _react_16_8_6_react["createElement"]("p", null,
                        _react_16_8_6_react["createElement"]("span", { className: "m-right-tit m-head-tit" },
                            config.fdept,
                            "\uFF1A"),
                        is_en,
                        _react_16_8_6_react["createElement"]("span", { className: "head-txt" }, fdept))),
                _react_16_8_6_react["createElement"]("div", { className: "m-add-item" },
                    _react_16_8_6_react["createElement"]("p", null,
                        _react_16_8_6_react["createElement"]("span", { className: "m-right-tit m-head-tit" },
                            config.fsex,
                            "\uFF1A"),
                        is_en,
                        _react_16_8_6_react["createElement"]("span", { className: "head-txt" }, fsex),
                        " "),
                    _react_16_8_6_react["createElement"]("p", null,
                        _react_16_8_6_react["createElement"]("span", { className: "m-right-tit m-head-tit" },
                            config.fdeb,
                            "\uFF1A"),
                        is_en,
                        _react_16_8_6_react["createElement"]("span", { className: "head-txt" }, fdeb))),
                _react_16_8_6_react["createElement"]("div", { className: "m-add-item" },
                    _react_16_8_6_react["createElement"]("p", null,
                        _react_16_8_6_react["createElement"]("span", { className: "m-right-tit m-head-tit" },
                            config.fage,
                            "\uFF1A"),
                        is_en,
                        _react_16_8_6_react["createElement"]("span", { className: "head-txt" }, fage)),
                    _react_16_8_6_react["createElement"]("p", null,
                        _react_16_8_6_react["createElement"]("span", { className: "m-right-tit m-head-tit" },
                            config.fprn,
                            "\uFF1A"),
                        is_en,
                        _react_16_8_6_react["createElement"]("span", { className: "head-txt" }, fprn)))),
            _react_16_8_6_react["createElement"]("div", { className: " g-tanslate-content" },
                _react_16_8_6_react["createElement"]("p", { className: "paitent-info" },
                    _react_16_8_6_react["createElement"]("span", null,
                        config.patient,
                        "\uFF1A"),
                    _react_16_8_6_react["createElement"]("span", null,
                        fname,
                        "\uFF0C",
                        fsex,
                        "\uFF0C",
                        fage,
                        "\uFF0C",
                        config.fsurvey,
                        "\u201C",
                        fsurvey,
                        "\u201D\uFF0C",
                        is_en ? config.frydata + frydata : "于" + frydata + config.frydata,
                        "\uFF0C",
                        is_en ? config.fcydata + fcydata : "于" + fcydata + config.fcydata,
                        "\uFF0C",
                        config.fsumd + fsumd + config.fsumd1,
                        "\u3002")),
                _react_16_8_6_react["createElement"]("p", { className: "translate-item" },
                    _react_16_8_6_react["createElement"]("span", { className: "m-right-tit m-article-tit" },
                        config.fryqk,
                        "\uFF1A"),
                    _react_16_8_6_react["createElement"]("span", { className: "m-article" }, fryqk)),
                _react_16_8_6_react["createElement"]("p", { className: "translate-item" },
                    _react_16_8_6_react["createElement"]("span", { className: "m-right-tit m-article-tit" },
                        config.fzljg,
                        "\uFF1A"),
                    _react_16_8_6_react["createElement"]("span", { className: "m-article" }, fzljg)),
                _react_16_8_6_react["createElement"]("p", { className: "translate-item" },
                    _react_16_8_6_react["createElement"]("span", { className: "m-right-tit m-article-tit" },
                        config.fcyzd,
                        "\uFF1A"),
                    _react_16_8_6_react["createElement"]("span", { className: "m-article" }, fcyzd)),
                _react_16_8_6_react["createElement"]("p", { className: "translate-item" },
                    _react_16_8_6_react["createElement"]("span", { className: "m-right-tit m-article-tit" },
                        config.fcyqk,
                        "\uFF1A"),
                    _react_16_8_6_react["createElement"]("span", { className: "m-article" }, fcyqk)),
                _react_16_8_6_react["createElement"]("p", { className: "translate-item" },
                    _react_16_8_6_react["createElement"]("span", { className: "m-right-tit m-article-tit" },
                        config.fcyyz,
                        "\uFF1A"),
                    _react_16_8_6_react["createElement"]("span", { className: "m-article" }, fcyyz)))));
    }
}
/* harmony default export */ var CaseModalText = (CaseModalText_CaseModal);

// CONCATENATED MODULE: ./src/api/gdsummary.tsx


/* harmony default export */ var gdsummary = ({
    getSummaryCaseById: function (id) {
        return AxiosInstance["a" /* default */].get("summary/getSummaryCaseById?id=" + id);
    },
    updataEnSummaryCase: function (data) {
        return AxiosInstance["a" /* default */].post("summary/updataEnSummaryCase", data, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    },
    commitEnSummaryCase: function (data) {
        return AxiosInstance["a" /* default */].post("summary/commitEnSummaryCase", data, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    },
    saveChSummaryCase: function (data) {
        return AxiosInstance["a" /* default */].post("summary/saveChSummaryCase", data, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    },
    upSummaryCaseError: function (id, errMessages) {
        return AxiosInstance["a" /* default */].post("/summary/upSummaryCaseError", lib["stringify"]({ id, errMessages }));
    },
    passEnSummaryCase: function (id) {
        return AxiosInstance["a" /* default */].post("summary/passEnSummaryCase", { id }, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    },
    returnSummaryCase: function (id, descr) {
        return AxiosInstance["a" /* default */].post("/summary/returnSummaryCase", lib["stringify"]({ id, descr }));
    },
    getAllOrg() {
        return AxiosInstance["a" /* default */].get("/summary/getAllOrg");
    },
});

// EXTERNAL MODULE: ./node_modules/_html2canvas@1.0.0-rc.3@html2canvas/dist/html2canvas.js
var html2canvas = __webpack_require__("./node_modules/_html2canvas@1.0.0-rc.3@html2canvas/dist/html2canvas.js");
var html2canvas_default = /*#__PURE__*/__webpack_require__.n(html2canvas);

// CONCATENATED MODULE: ./src/js/containers/gdsummary/index.tsx












var caseStatus;
(function (caseStatus) {
    caseStatus[caseStatus["noTranslate"] = 1] = "noTranslate";
    caseStatus[caseStatus["translate"] = 2] = "translate";
    caseStatus[caseStatus["submitCase"] = 3] = "submitCase";
    caseStatus[caseStatus["returnCase"] = 4] = "returnCase";
    caseStatus[caseStatus["checkedCase"] = 5] = "checkedCase";
    caseStatus[caseStatus["errorCase"] = 6] = "errorCase";
})(caseStatus || (caseStatus = {}));
;
var roleEnum;
(function (roleEnum) {
    roleEnum["doctor"] = "3202";
    roleEnum["director"] = "3201";
})(roleEnum || (roleEnum = {}));
;
class gdsummary_TranslateManage extends _react_16_8_6_react["PureComponent"] {
    constructor() {
        super(...arguments);
        this.timeSave = 10000;
        this.state = {
            initModal: false,
            showModal: false,
            reasonTxt: "",
            obj: this.initState(this.props.data, this.props.roleId),
            timeId: null,
            isChange: false,
        };
        this.notificationRef = _react_16_8_6_react["createRef"]();
        this.changeState = (field, value) => {
            this.setState(pre => {
                return {
                    obj: pre.obj.setIn(["en", field], value),
                    isChange: true,
                };
            });
        };
        this.changeStateCh = (field, value) => {
            this.setState(pre => {
                return {
                    obj: pre.obj.setIn(["ch", field], value)
                };
            });
        };
        this.submit = (e) => {
            const type = e.currentTarget.name;
            const { id, pathTo, changeMenu } = this.props;
            const notification = this.notificationRef.current;
            switch (type) {
                case "error":
                    this.toggleModal();
                    break;
                case "submit":
                    {
                        const status = this.props.data.china.status;
                        const oindex = status == 6 ? 0 : 1;
                        if (document.querySelectorAll("#gTranslate .m-translate")[oindex].querySelectorAll(".no-fill").length) {
                            notification.addNotice("填写完整，然后提交！", "warn");
                            return;
                        }
                        const { obj: paramsObj } = this.state;
                        const paramsData = paramsObj.toJS();
                        if (status == "6") { // 报错，修改中文；
                            const obj = Object.assign({ id }, paramsData.ch);
                            gdsummary.saveChSummaryCase(obj).then(() => {
                                pathTo("summary");
                            });
                        }
                        else {
                            const obj = Object.assign({ id }, paramsData.en);
                            gdsummary.commitEnSummaryCase(obj).then(() => {
                                pathTo("summary");
                            });
                        }
                    }
                    break;
                case "save":
                    {
                        const { obj: paramsObj } = this.state;
                        const paramsData = paramsObj.toJS();
                        const obj = Object.assign({ id }, paramsData.en);
                        gdsummary.updataEnSummaryCase(obj).then(() => {
                            notification.addNotice("保存成功", "success");
                            this.setState({
                                isChange: false
                            });
                        });
                    }
                    break;
                case "pass":
                    gdsummary.passEnSummaryCase(id).then(() => {
                        pathTo("gdsummary");
                        changeMenu("1,0");
                    });
                    break;
                case "reject":
                    this.toggleModal();
                    break;
                default:
                    break;
            }
        };
        this.modalSureHanlde = () => {
            const { id, roleId } = this.props;
            const { reasonTxt } = this.state;
            const notification = this.notificationRef.current;
            if (!reasonTxt) {
                notification.addNotice("不能为空！", "warn");
                return;
            }
            if (roleId == "3202") {
                gdsummary.upSummaryCaseError(id, reasonTxt).then((res) => {
                    this.toggleModal();
                    notification.addNotice(res.message, "success");
                    res.code == 200 && this.props.pathTo("summary");
                });
            }
            else {
                gdsummary.returnSummaryCase(id, reasonTxt).then((res) => {
                    this.toggleModal();
                    notification.addNotice(res.message, "success");
                    res.code == 200 && this.props.pathTo("summary");
                });
            }
        };
        this.daoHandle = (e) => {
            const type = e.currentTarget.dataset.name;
            const { id } = this.props;
            const baseUrl = window.getSession("getPath");
            switch (type) {
                case "word":
                    this.downFile(baseUrl + "summary/wordExport?ids=" + id);
                    break;
                case "pdf":
                    this.downFile(baseUrl + "summary/pdfExport?ids=" + id);
                    break;
                case "images":
                    this.downImag();
                    break;
                default:
                    break;
            }
        };
        this.toggleModal = () => {
            this.setState(pre => ({
                initModal: true,
                showModal: !pre.showModal
            }));
        };
        this.changeReason = (e) => {
            this.setState({
                reasonTxt: e.currentTarget.value
            });
        };
        this.orgItemHandle = (e) => {
            const text = e.currentTarget.dataset.name;
            this.setState(pre => ({
                obj: pre.obj.setIn(["ch", "fdept"], text),
                isChange: true
            }));
        };
    }
    initState(data, roleId) {
        const obj = {
            fname: "",
            fsex: "",
            fage: "",
            fdept: "",
            fdeb: "",
            fprn: "",
            fsurvey: "",
            fryqk: "",
            fzljg: "",
            fcyzd: "",
            fcyqk: "",
            fcyyz: "",
            frydata: "",
            fcydata: "",
            fsumd: "",
        };
        if (data.english) {
            if (roleId == roleEnum.doctor || (roleId == roleEnum.director && data.china.status !== caseStatus.translate && data.china.status !== caseStatus.noTranslate)) {
                for (const iterator in obj) {
                    const key = iterator;
                    data.english[key] && (obj[key] = data.english[key]);
                }
            }
        }
        ;
        return Object(ImmutableMap["a" /* createTypedMap */])({
            en: Object(ImmutableMap["a" /* createTypedMap */])(obj),
            ch: Object(ImmutableMap["a" /* createTypedMap */])(data.china)
        });
    }
    componentDidMount() {
        const chinaData = this.props.data.china;
        const hasModal = chinaData.status == caseStatus.errorCase ? chinaData.errmessages : chinaData.status == caseStatus.returnCase ? chinaData.descr : false;
        hasModal && this.notificationRef.current.addNotice((caseStatus.returnCase == chinaData.status && "驳回：" || "报错：") + hasModal, "warn", 0);
        // 添加自动保存的定时器
        if (this.props.roleId != "3202") { //医生
            return;
        }
        const _self = this;
        let oldData = this.state.obj;
        const timeId = window.setInterval(function () {
            const newData = _self.state.obj;
            if (oldData !== newData) {
                const obj = Object.assign({ id: _self.props.id }, newData.toJS().en);
                gdsummary.updataEnSummaryCase(obj).then(() => {
                    oldData = newData;
                    _self.setState({
                        isChange: false
                    });
                });
            }
        }, this.timeSave);
        this.setState({
            timeId,
        });
    }
    componentWillUnmount() {
        const { timeId } = this.state;
        timeId && window.clearInterval(timeId);
    }
    downImag() {
        const dom = document.getElementById("gTranslate");
        html2canvas_default()(dom, {
            width: dom.clientWidth,
            height: dom.clientHeight,
        }).then((canvas) => {
            this.downFile(canvas.toDataURL(), 'img-snapshoot.jpg');
        });
    }
    downFile(url, fileName = "文件下载") {
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    getDao() {
        return (_react_16_8_6_react["createElement"]("div", { className: "j-dao" },
            _react_16_8_6_react["createElement"](react_router_dom["a" /* Link */], { to: gdsummary_TranslateManage.pathObj },
                _react_16_8_6_react["createElement"]("button", { className: "s-btn line-btn green " }, "\u8FD4\u56DE")),
            _react_16_8_6_react["createElement"]("div", null,
                _react_16_8_6_react["createElement"]("span", null,
                    _react_16_8_6_react["createElement"]("button", { className: "s-btn normal-btn primary" }, "\u5BFC\u51FA")),
                _react_16_8_6_react["createElement"]("ul", { className: "m-dao-drop" },
                    _react_16_8_6_react["createElement"]("li", { "data-name": "images", onClick: this.daoHandle },
                        _react_16_8_6_react["createElement"]("i", { className: "fa fa-file-image-o" }, "\u00A0"),
                        _react_16_8_6_react["createElement"]("span", null, "\u5BFC\u51FA\u56FE\u7247")),
                    _react_16_8_6_react["createElement"]("li", { "data-name": "pdf", onClick: this.daoHandle },
                        _react_16_8_6_react["createElement"]("i", { className: "fa fa-file-pdf-o" }, "\u00A0"),
                        _react_16_8_6_react["createElement"]("span", null, "\u5BFC\u51FApdf")),
                    _react_16_8_6_react["createElement"]("li", { "data-name": "word", onClick: this.daoHandle },
                        _react_16_8_6_react["createElement"]("i", { className: "fa fa-file-word-o" }),
                        "\u00A0",
                        _react_16_8_6_react["createElement"]("span", null, "\u5BFC\u51FA\u6587\u6863"))))));
    }
    getCheckOpt() {
        return (_react_16_8_6_react["createElement"]("div", { className: "m-check-opt" },
            _react_16_8_6_react["createElement"](react_router_dom["a" /* Link */], { to: gdsummary_TranslateManage.pathObj },
                _react_16_8_6_react["createElement"]("button", { className: "s-btn line-btn green " }, "\u8FD4\u56DE")),
            _react_16_8_6_react["createElement"]("button", { className: "s-btn normal-btn danger", name: "reject", onClick: this.submit }, "\u9A73\u56DE"),
            _react_16_8_6_react["createElement"]("button", { className: "s-btn normal-btn green", name: "pass", onClick: this.submit }, "\u901A\u8FC7")));
    }
    filterOrg() {
        const { orgData } = this.props;
        const fdept = this.state.obj.getIn(["ch", "fdept"]);
        return orgData.filter(val => {
            return val.name.includes(fdept);
        });
    }
    render() {
        const { data, type, roleId } = this.props;
        const { initModal, showModal, reasonTxt, obj, isChange } = this.state;
        const status = data.china.status;
        const is_gdsummary = type == "/gdsummary";
        const text = is_gdsummary && "归档文案" || "病例清单";
        let orgData = [];
        status == "6" && (orgData = this.filterOrg());
        const saveAlert = isChange ? { color: "black" } : undefined;
        return (_react_16_8_6_react["createElement"]("div", { className: "g-padding g-gdsummary", id: "g-gdsummary" },
            initModal ? (_react_16_8_6_react["createElement"](Modal_Modal, { show: showModal, tit: roleId != "3202" ? "驳回" : "报错", type: "tip", onSure: this.modalSureHanlde, onCancel: this.toggleModal, className: "m-translate-modal", container: document.getElementById("s-modal") },
                _react_16_8_6_react["createElement"]("div", null,
                    _react_16_8_6_react["createElement"]("p", { style: { padding: "6px 0" } },
                        _react_16_8_6_react["createElement"]("span", null,
                            roleId != "3202" ? "驳回" : "报错",
                            "\u539F\u56E0\uFF1A")),
                    _react_16_8_6_react["createElement"]("div", null,
                        _react_16_8_6_react["createElement"]("textarea", { value: reasonTxt, onChange: this.changeReason, className: "s-txt", style: { width: "100%" }, rows: 6 }))))) : null,
            _react_16_8_6_react["createElement"](toast_Notification, { ref: this.notificationRef }),
            _react_16_8_6_react["createElement"]("p", { style: { paddingBottom: 16 } },
                text,
                " / \u67E5\u770B\u8BE6\u60C5"),
            _react_16_8_6_react["createElement"]("div", { className: "g-translate-box" },
                status == "5" ? this.getDao() : null,
                _react_16_8_6_react["createElement"]("div", { className: "g-translate", id: "gTranslate" },
                    status != "6" ? _react_16_8_6_react["createElement"](CaseModalText, { type: "ch", params: data.china }) :
                        _react_16_8_6_react["createElement"](CaseModalInp, { data: obj.get("ch"), type: "ch", changeState: this.changeStateCh },
                            _react_16_8_6_react["createElement"]("ul", { className: "m-org-drop" }, orgData.map(val => {
                                return (_react_16_8_6_react["createElement"]("li", { onClick: this.orgItemHandle, "data-name": val.name, key: val.id }, val.name));
                            }))),
                    !is_gdsummary ? _react_16_8_6_react["createElement"](CaseModalInp, { data: obj.get("en"), type: "en", ableEdit: roleId == "3202", changeState: this.changeState }) : _react_16_8_6_react["createElement"](CaseModalText, { params: data.english, type: "en" })),
                !is_gdsummary ? (_react_16_8_6_react["createElement"]("div", { className: "translate-footer-opt" },
                    roleId == roleEnum.doctor ?
                        _react_16_8_6_react["createElement"](_react_16_8_6_react["Fragment"], null,
                            _react_16_8_6_react["createElement"](Button["a" /* Button */], { field: "error", handle: this.submit, styleType: "line-btn", type: "danger" },
                                _react_16_8_6_react["createElement"](Button["b" /* Icon */], { styleType: "" }),
                                "\u62A5\u9519"),
                            _react_16_8_6_react["createElement"](Button["a" /* Button */], { field: "save", handle: this.submit, type: "green" },
                                _react_16_8_6_react["createElement"](Button["b" /* Icon */], { styleType: "fa-floppy-o" }),
                                _react_16_8_6_react["createElement"]("span", { style: saveAlert }, "\u4FDD\u5B58")),
                            _react_16_8_6_react["createElement"]("button", { className: "s-btn normal-btn primary", name: "submit", onClick: this.submit },
                                _react_16_8_6_react["createElement"](Button["c" /* SvgIcon */], { styleType: "submit" }),
                                "\u63D0\u4EA4"))
                        : _react_16_8_6_react["createElement"](_react_16_8_6_react["Fragment"], null,
                            status == caseStatus.submitCase ? _react_16_8_6_react["createElement"]("button", { className: "s-btn normal-btn primary", name: "pass", onClick: this.submit },
                                _react_16_8_6_react["createElement"](Button["c" /* SvgIcon */], { styleType: "submit" }),
                                "\u901A\u8FC7") : null,
                            status == caseStatus.errorCase ? _react_16_8_6_react["createElement"]("button", { className: "s-btn normal-btn primary", name: "submit", onClick: this.submit },
                                _react_16_8_6_react["createElement"](Button["c" /* SvgIcon */], { styleType: "submit" }),
                                "\u63D0\u4EA4") : null,
                            status == caseStatus.submitCase ? _react_16_8_6_react["createElement"]("button", { className: "s-btn normal-btn danger", name: "reject", onClick: this.submit }, "\u9A73\u56DE") : null),
                    _react_16_8_6_react["createElement"](react_router_dom["a" /* Link */], { to: { pathname: "/summary", state: { text: "病历清单" } } },
                        _react_16_8_6_react["createElement"]("button", { className: "s-btn line-btn green" },
                            _react_16_8_6_react["createElement"]("i", { className: "fa fa-undo" }, "\u00A0"),
                            "\u8FD4\u56DE")))) : null)));
    }
}
gdsummary_TranslateManage.pathObj = { pathname: "/gdsummary", state: { text: "归档文案" } };
class gdsummary_Container extends _react_16_8_6_react["PureComponent"] {
    constructor() {
        super(...arguments);
        this.state = {
            data: null,
            orgData: [],
        };
        this.back = (path) => {
            this.props.history.push({ pathname: "/" + path, state: { text: "病历清单" } });
        };
    }
    componentDidMount() {
        const { id } = this.props.location.state;
        const translateData = gdsummary.getSummaryCaseById(id);
        const Org = gdsummary.getAllOrg();
        Promise.all([translateData, Org]).then((res) => {
            const [data, orgData] = res;
            this.setState({
                data: data.data,
                orgData: orgData.data
            });
        });
    }
    render() {
        const { data, orgData } = this.state;
        const { location: { state: { id, type } }, roleId, changeMenu } = this.props;
        return data ? _react_16_8_6_react["createElement"](gdsummary_TranslateManage, { changeMenu: changeMenu, orgData: orgData, roleId: roleId, data: data, id: id, type: type, pathTo: this.back }) : null;
    }
}
const gdsummary_mapStateToProp = ({ app }) => {
    const roleId = app.get("role_ids")[app.get("role_index")];
    return {
        roleId,
    };
};
const mapDisPatchToProp = (dispatch) => {
    return {
        changeMenu: function (menuUrl) {
            dispatch(Object(appAction["b" /* changeMenuUrl */])(menuUrl));
        },
    };
};
/* harmony default export */ var containers_gdsummary = (Object(es["b" /* connect */])(gdsummary_mapStateToProp, mapDisPatchToProp)(gdsummary_Container));

// CONCATENATED MODULE: ./src/js/Router.tsx





const Main = () => {
    return (_react_16_8_6_react["createElement"](_react_16_8_6_react["Fragment"], null,
        _react_16_8_6_react["createElement"](react_router["b" /* Route */], { path: "/summary", component: containers_summary }),
        _react_16_8_6_react["createElement"](react_router["b" /* Route */], { path: "/gdsummary", component: containers_summary }),
        _react_16_8_6_react["createElement"](react_router["b" /* Route */], { path: "/translate", component: containers_gdsummary }),
        _react_16_8_6_react["createElement"](react_router["b" /* Route */], { path: "/addCaseModal", component: summary_AddCaseModal }),
        _react_16_8_6_react["createElement"]("div", { id: "s-modal" })));
};
/* harmony default export */ var Router = (Main);

// CONCATENATED MODULE: ./src/js/index.tsx






class js_IndexCom extends _react_16_8_6_react["PureComponent"] {
    render() {
        return (_react_16_8_6_react["createElement"](_react_16_8_6_react["Fragment"], null,
            _react_16_8_6_react["createElement"](containers_SlideMenu, null),
            _react_16_8_6_react["createElement"]("div", { className: "g-content" },
                _react_16_8_6_react["createElement"](containers_Head, null),
                _react_16_8_6_react["createElement"]("div", { className: "g-main" },
                    _react_16_8_6_react["createElement"](react_router["d" /* Switch */], null,
                        _react_16_8_6_react["createElement"](Router, null))))));
    }
}
class js_App extends _react_16_8_6_react["PureComponent"] {
    render() {
        return (_react_16_8_6_react["createElement"](react_router["a" /* MemoryRouter */], null,
            _react_16_8_6_react["createElement"](react_router["d" /* Switch */], null,
                _react_16_8_6_react["createElement"](react_router["b" /* Route */], { path: "/", component: js_IndexCom }))));
    }
}
/* harmony default export */ var js = __webpack_exports__["default"] = (js_App);


/***/ })

},[["./src/App.tsx","manifest","vendor"]]]);
//# sourceMappingURL=main.chunk.js.map