(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");







var routes = [
    {
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        pathMatch: 'full'
    },
    {
        path: '**',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                        useHash: true
                    })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CovidTrajectories';
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_sidebar_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/sidebar.directive */ "./src/app/dashboard/sidebar.directive.ts");
/* harmony import */ var _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.service */ "./src/app/dashboard/dashboard.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"]], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
        _dashboard_sidebar_directive__WEBPACK_IMPORTED_MODULE_6__["SidebarDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                    _dashboard_sidebar_directive__WEBPACK_IMPORTED_MODULE_6__["SidebarDirective"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
                    ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
                ],
                providers: [_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_7__["DashboardService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.service */ "./src/app/dashboard/dashboard.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.es5.js");







var _c0 = ["plotContainer"];
function DashboardComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DashboardComponent_div_31_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onItemSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var state_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", state_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", state_r2.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", state_r2.name, " ");
} }
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dashboardSerive) {
        var _this = this;
        this.dashboardSerive = dashboardSerive;
        this.footerDate = new Date();
        this.visibleStates = [];
        this.statesKeys = {};
        this.covidDates = [];
        this.layout = {};
        this.selectedStates = ['Maharashtra'];
        this.visibleStates = this.dashboardSerive.getVisibleStates();
        this.visibleStates.forEach(function (states) {
            _this.statesKeys[states.key] = states.name;
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardSerive.getCovidData().subscribe(function (res) {
            _this.rawData = res;
            _this.processData();
            _this.setConfiguration();
        });
    };
    // Process graph data
    DashboardComponent.prototype.processData = function () {
        var _this = this;
        this.data = [];
        var confirmedCases = [];
        var lastWeekConfirmedCases = [];
        this.rawData.forEach(function (d) { if (d.status === 'Confirmed') {
            _this.covidDates.push(d.date);
        } });
        Object.keys(this.statesKeys).forEach(function (key) {
            _this.rawData.forEach(function (d) {
                if (d.status === 'Confirmed') {
                    confirmedCases.push(d[key]);
                }
            });
            confirmedCases = confirmedCases.map(Number);
            confirmedCases = confirmedCases.reduce(function (r, a) { r.push((r.length && r[r.length - 1] || 0) + a); return r; }, []);
            lastWeekConfirmedCases = confirmedCases.map(function (e, i, a) { return e - a[i - 7]; });
            _this.data.push({ state: _this.statesKeys[key], date: _this.covidDates, cases: confirmedCases.map(function (e) { return e >= 5 ? e : NaN; }),
                m: lastWeekConfirmedCases.map(function (e, i) { return confirmedCases[i] >= 5 ? e : NaN; }) });
            confirmedCases = [];
            lastWeekConfirmedCases = [];
        });
    };
    DashboardComponent.prototype.formatDataForPlotting = function (states) {
        var _this = this;
        var graphData = [];
        var graphDate = [];
        this.data.forEach(function (d) {
            _this.covidDates.forEach(function (dt) {
                graphDate.push(d.state + '<br>' + dt);
            });
            if (states.includes(d.state)) {
                graphData.push({ x: d.cases, y: d.m, name: d.state,
                    text: _this.covidDates.map(function (date) { return d.state + '<br>' + date; }),
                    mode: 'lines+markers', type: 'scatter',
                    textposition: 'center right',
                    marker: { size: 2, color: 'rgba(254, 52, 110, 1)' },
                    line: { color: '#721b65', simplify: false },
                    transforms: [{
                            type: 'filter',
                            operation: '<=',
                            target: _this.covidDates,
                            value: _this.covidDates
                        }]
                });
                graphDate = [];
            }
        });
        return graphData;
    };
    DashboardComponent.prototype.updateGraph = function () {
        var e_1, _a;
        var selectedState = [];
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.visibleStates), _c = _b.next(); !_c.done; _c = _b.next()) {
                var state = _c.value;
                if (state.checked === true) {
                    selectedState.push(state.name);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var dataFrame = this.formatDataForPlotting(selectedState);
        Plotly.react(this.plotContainer.nativeElement, dataFrame, this.layout);
    };
    DashboardComponent.prototype.onResize = function () {
        Plotly.Plots.resize(this.plotContainer.nativeElement);
    };
    DashboardComponent.prototype.setConfiguration = function () {
        var e_2, _a, e_3, _b;
        var dataFrame = this.formatDataForPlotting(this.selectedStates);
        var dateframes = [];
        var _loop_1 = function (date) {
            dateframes.push({
                name: date,
                data: this_1.data.map(function (d) { return ({
                    'transforms[0].value': date
                }); })
            });
        };
        var this_1 = this;
        try {
            for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.covidDates), _d = _c.next(); !_d.done; _d = _c.next()) {
                var date = _d.value;
                _loop_1(date);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        console.log(dateframes);
        var graphDiv = this.plotContainer.nativeElement;
        var sliderSteps = [];
        try {
            for (var _e = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.covidDates), _f = _e.next(); !_f.done; _f = _e.next()) {
                var date = _f.value;
                sliderSteps.push({
                    method: 'animate',
                    label: date,
                    args: [[date], { mode: 'immediate', transition: { duration: 200 }, frame: { duration: 200, redraw: false }
                        }]
                });
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.layout = {
            height: 700,
            plot_bgcolor: 'black',
            paper_bgcolor: 'black',
            title: { text: 'Trajectory of Indian States COVID-19 Confirmed Cases (' + this.covidDates[this.covidDates.length - 1] + ')',
                font: { size: 24, color: 'white' } },
            showlegend: false,
            autorange: false,
            xaxis: { title: 'Total Confirmed Cases', type: 'log', range: [1, 6], color: 'white', titlefont: { size: 24, color: 'rgba(242, 59, 118,1)' } },
            yaxis: { title: 'New Confirmed Cases Last Week', type: 'log', range: [0, 5], color: 'white', titlefont: { size: 24, color: 'rgba(242, 59, 118,1)' } },
            hovermode: 'closest',
            font: { family: 'Open Sans, sans-serif', color: 'black', size: 14 },
            updatemenus: [{ x: 0, y: 0, yanchor: 'top', xanchor: 'left', showactive: false, direction: 'left', type: 'buttons', pad: { t: 90, r: 10 },
                    buttons: [{ method: 'animate', fill: 'white', args: [null, {
                                    mode: 'immediate',
                                    fromcurrent: true,
                                    transition: { duration: 100 },
                                    frame: { duration: 100, redraw: false }
                                }], label: 'Play'
                        }, { method: 'animate', args: [[null], {
                                    mode: 'immediate',
                                    transition: { duration: 0 },
                                    frame: { duration: 0, redraw: false }
                                },
                            ], label: 'Pause' }] }],
            sliders: [{ tickcolor: 'transparent', font: { color: 'transparent' },
                    bordercolor: 'black', pad: { l: 130, t: 60 }, currentvalue: {
                        visible: true,
                        prefix: 'Date:',
                        xanchor: 'right',
                        font: { size: 20, color: 'white' }
                    },
                    steps: sliderSteps }
            ]
        };
        Plotly.plot(graphDiv, {
            data: dataFrame,
            layout: this.layout,
            frames: dateframes,
            config: { responsive: true }
        });
        // .then(() => {
        //   Plotly.animate(graphDiv);
        // });
    };
    // Sidebar related functions
    DashboardComponent.prototype.onItemSelect = function (item) {
        var e_4, _a;
        var selectedState = item.target.defaultValue;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.visibleStates), _c = _b.next(); !_c.done; _c = _b.next()) {
                var state = _c.value;
                if (state.name === selectedState) {
                    state.checked = true;
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        this.updateGraph();
    };
    DashboardComponent.prototype.onSelectAll = function (items) {
        var e_5, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.visibleStates), _c = _b.next(); !_c.done; _c = _b.next()) {
                var state = _c.value;
                state.checked = true;
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        this.updateGraph();
    };
    DashboardComponent.prototype.onDeSelectAll = function (items) {
        var e_6, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.visibleStates), _c = _b.next(); !_c.done; _c = _b.next()) {
                var state = _c.value;
                state.checked = false;
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        this.updateGraph();
    };
    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"])); };
    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.plotContainer = _t.first);
        } }, decls: 54, vars: 9, consts: [[1, "col-lg-2", "text-center", 2, "position", "fixed", "top", "3.2vw", "background", "black", "height", "100vw", "padding", "0.2vw"], [1, "logo"], ["href", "/", 1, "simple-text", "logo-mini"], [1, "logo-img"], ["src", "./assets/img/covid.png"], ["href", "/", 1, "simple-text", "logo-normal"], ["for", "selectedScale"], ["id", "selectedScale"], ["type", "text", "placeholder", "Search For A Location", "autocomplete", "off", 1, "form-control", "search", 2, "background-color", "white", "color", "black", 3, "ngModel", "ngModelChange"], [1, "buttonswrapper"], ["aria-Label", "Deselect All Regions", 2, "margin-right", "0.1vw", 3, "click"], ["aria-Label", "Select All Regions", 3, "click"], [1, "states"], [4, "ngFor", "ngForOf"], [1, "heading"], ["href", "https://api.covid19india.org/", "target", "_blank"], ["href", "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public", "target", "_blank"], [1, "col-lg-10", "col-xs-offset-2", 2, "height", "100%"], [1, "chart-area"], ["id", "embeddingsPlotID", 3, "resize"], ["plotContainer", ""], [1, "copyright", 2, "float", "right"], ["href", "https://www.linkedin.com/in/maarif1430/", "target", "_blank"], [2, "float", "left", "font-size", "1vw", "color", "white", "font-style", "italic"], ["href", "https://github.com/Aarif1430/India-Covid-19-Trajectories"], [1, "checkbox", 2, "font-size", "0.9vw"], ["type", "checkbox", 3, "value", "checked", "change"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Covid India@2020");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Select Parameter");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "select", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Confirmed Cases");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Reported Deaths");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Select Scale");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "select", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Logarithimic");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "option");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Linear");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Indian States");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_24_listener($event) { return ctx.searchText = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_26_listener($event) { return ctx.onDeSelectAll($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Deselect All");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_28_listener($event) { return ctx.onSelectAll($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Select All");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ul", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, DashboardComponent_div_31_Template, 4, 3, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "filter");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " The chart shows trajectory of Indian States Covid-19 Cases. By comparing the trajectories of 36 states we are able to see a clearer picture of how quickly the virus is spreading within various states. Data provided by ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Covid19India");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " A volunteer-driven, crowdsourced database for COVID-19. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "#StaySafe");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 19, 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function DashboardComponent_Template_div_resize_43_listener() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " Arif Malik ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " Hover over graph to see total confirmed cases and cases in past week. Source code available on ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "GitHub.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchText);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](32, 3, ctx.visibleStates, ctx.searchText));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u00A9 ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](47, 6, ctx.footerDate, "yyyy"), " ");
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["body[_ngcontent-%COMP%] {\n  font-size: 1vw;\n  line-height: 1.5;\n  font-weight: 400;\n  color: #444;\n  text-rendering: optimizeLegibility;\n}\n\n.chart-area[_ngcontent-%COMP%] {\n  width: 82vw;\n  position: relative;\n  overflow: hidden;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  font-size: 1vw;\n  color: white;\n}\n\n.buttonswrapper[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  margin-top: 1vw;\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 0.2vw;\n  font-size: 1vw;\n  text-align: center;\n  width: 7vw;\n  text-decoration: none;\n  -webkit-transition-duration: 0.4s;\n          transition-duration: 0.4s;\n  background-color: #403326;\n  color: lightgoldenrodyellow;\n  border-radius: 0.39vw;\n}\n\na[_ngcontent-%COMP%] {\n  color: 65;\n  text-decoration: underline;\n}\n\n.heading[_ngcontent-%COMP%] {\n  background: -webkit-gradient(linear, left top, left bottom, from(#000066), to(#006666));\n  background: linear-gradient(to bottom, #000066 0%, #006666 100%);\n  width: 100%;\n  color: white;\n  font-style: italic;\n  font-size: 1.1vw;\n}\n\n.search[_ngcontent-%COMP%] {\n  width: 12vw;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  height: 2.5vw;\n  font-size: 1vw;\n  margin-left: 1.2vw;\n}\n\n.search[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex: 1;\n  font-size: 0.75vw;\n  padding: 0.5vw;\n  margin-top: 0.5vw;\n  width: 9vw;\n}\n\n.states[_ngcontent-%COMP%] {\n  height: 25vw;\n  overflow-y: scroll;\n  text-align: justify;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.6vw;\n  font-size: 1.1vw;\n  color: darkgrey;\n}\n\n#selectedScale[_ngcontent-%COMP%] {\n  min-width: 12vw;\n  font-size: 1.2vw;\n  margin-right: 2vw;\n  margin-bottom: 1vw;\n}\n\ntext.updatemenu-item-text.user-select-none[_ngcontent-%COMP%] {\n  fill: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJpZi9EZXNrdG9wL1dJUC9Bbmd1bGFyMlRyYWluaW5nL0NvdmlkRGFzaC9Db3ZpZC1JbmRpYS1UcmFqZWN0b3JpZXMvc3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7VUFBQSw2QkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURFQTtFQUNJLHVGQUFBO0VBQUEsZ0VBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFFQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURJQTtFQUNJLHNCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgZm9udC1zaXplOiAxdnc7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbi5jaGFydC1hcmVhIHtcbiAgICB3aWR0aDogODJ2dztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvcHlyaWdodCB7XG4gICAgZm9udC1zaXplOiAxdnc7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnV0dG9uc3dyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgbWFyZ2luLXRvcDogMXZ3O1xufVxuXG5idXR0b24ge1xuICAgIHBhZGRpbmc6IDAuMnZ3O1xuICAgIGZvbnQtc2l6ZTogMXZ3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogN3Z3O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDMzMjY7XG4gICAgY29sb3I6IGxpZ2h0Z29sZGVucm9keWVsbG93O1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzl2dztcbn1cblxuYSB7XG4gICAgY29sb3I6IGJsdWUoJGNvbG9yOiByZ2IoMSwgMSwgNjUpKTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmhlYWRpbmcge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMDAwNjYgMCUsICMwMDY2NjYgMTAwJSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXNpemU6IDEuMXZ3O1xufVxuXG4uc2VhcmNoIHtcbiAgICB3aWR0aDogMTJ2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgLy8gbWluLXdpZHRoOiAzdnc7XG4gICAgaGVpZ2h0OiAyLjV2dztcbiAgICBmb250LXNpemU6IDF2dztcbiAgICBtYXJnaW4tbGVmdDogMS4ydnc7XG59XG5cbi5zZWFyY2g+aW5wdXQge1xuICAgIGZsZXg6IDE7XG4gICAgZm9udC1zaXplOiAwLjc1dnc7XG4gICAgcGFkZGluZzogMC41dnc7XG4gICAgbWFyZ2luLXRvcDogMC41dnc7XG4gICAgd2lkdGg6IDl2dztcbn1cblxuLnN0YXRlcyB7XG4gICAgaGVpZ2h0OiAyNXZ3O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG5sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMC42dnc7XG4gICAgZm9udC1zaXplOiAxLjF2dztcbiAgICBjb2xvcjogZGFya2dyZXk7XG59XG5cbiNzZWxlY3RlZFNjYWxlIHtcbiAgICBtaW4td2lkdGg6IDEydnc7XG4gICAgZm9udC1zaXplOiAxLjJ2dztcbiAgICAvLyBwYWRkaW5nOiAwLjV2dztcbiAgICBtYXJnaW4tcmlnaHQ6IDJ2dztcbiAgICBtYXJnaW4tYm90dG9tOiAxdnc7XG59XG5cbnRleHQudXBkYXRlbWVudS1pdGVtLXRleHQudXNlci1zZWxlY3Qtbm9uZSB7XG4gICAgZmlsbDogd2hpdGUgIWltcG9ydGFudDtcbn0iLCJib2R5IHtcbiAgZm9udC1zaXplOiAxdnc7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNDQ0O1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG4uY2hhcnQtYXJlYSB7XG4gIHdpZHRoOiA4MnZ3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb3B5cmlnaHQge1xuICBmb250LXNpemU6IDF2dztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnV0dG9uc3dyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgbWFyZ2luLXRvcDogMXZ3O1xufVxuXG5idXR0b24ge1xuICBwYWRkaW5nOiAwLjJ2dztcbiAgZm9udC1zaXplOiAxdnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDd2dztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDAzMzI2O1xuICBjb2xvcjogbGlnaHRnb2xkZW5yb2R5ZWxsb3c7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzl2dztcbn1cblxuYSB7XG4gIGNvbG9yOiA2NTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5oZWFkaW5nIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAwMDA2NiAwJSwgIzAwNjY2NiAxMDAlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDEuMXZ3O1xufVxuXG4uc2VhcmNoIHtcbiAgd2lkdGg6IDEydnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMi41dnc7XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBtYXJnaW4tbGVmdDogMS4ydnc7XG59XG5cbi5zZWFyY2ggPiBpbnB1dCB7XG4gIGZsZXg6IDE7XG4gIGZvbnQtc2l6ZTogMC43NXZ3O1xuICBwYWRkaW5nOiAwLjV2dztcbiAgbWFyZ2luLXRvcDogMC41dnc7XG4gIHdpZHRoOiA5dnc7XG59XG5cbi5zdGF0ZXMge1xuICBoZWlnaHQ6IDI1dnc7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMC42dnc7XG4gIGZvbnQtc2l6ZTogMS4xdnc7XG4gIGNvbG9yOiBkYXJrZ3JleTtcbn1cblxuI3NlbGVjdGVkU2NhbGUge1xuICBtaW4td2lkdGg6IDEydnc7XG4gIGZvbnQtc2l6ZTogMS4ydnc7XG4gIG1hcmdpbi1yaWdodDogMnZ3O1xuICBtYXJnaW4tYm90dG9tOiAxdnc7XG59XG5cbnRleHQudXBkYXRlbWVudS1pdGVtLXRleHQudXNlci1zZWxlY3Qtbm9uZSB7XG4gIGZpbGw6IHdoaXRlICFpbXBvcnRhbnQ7XG59Il19 */"] });
    return DashboardComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return [{ type: _dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] }]; }, { plotContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['plotContainer']
        }] }); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.service.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.service.ts ***!
  \************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm5/http.js");




var DashboardService = /** @class */ (function () {
    function DashboardService(http) {
        this.http = http;
        this.jsonUrl = 'https://api.covid19india.org/states_daily.json';
    }
    DashboardService.prototype.getCovidData = function () {
        return this.http.get(this.jsonUrl).map(function (res) { return res.json().states_daily; });
    };
    DashboardService.prototype.getVisibleStates = function () {
        return [{ name: 'Andaman and Nicobar', checked: false, key: 'an' },
            { name: 'Andhra Pradesh', checked: false, key: 'ap' },
            { name: 'Arunachal Pradesh', checked: false, key: 'as' },
            { name: 'Assam', checked: false, key: 'as' },
            { name: 'Bihar', checked: false, key: 'br' },
            { name: 'Chandigarh', checked: false, key: 'ch' },
            { name: 'Chhattisgarh', checked: false, key: 'ct' },
            { name: 'Dadra and Nagar Haveli', checked: false, key: 'dn' },
            { name: 'Daman and Diu', checked: false, key: 'dd' },
            { name: 'Delhi', checked: false, key: 'dl' },
            { name: 'Goa', checked: false, key: 'ga' },
            { name: 'Gujarat', checked: false, key: 'gj' },
            { name: 'Haryana', checked: false, key: 'hr' },
            { name: 'Himachal Pradesh', checked: false, key: 'hp' },
            { name: 'Jammu and Kashmir', checked: false, key: 'jk' },
            { name: 'Jharkhand', checked: false, key: 'jh' },
            { name: 'Karnataka', checked: false, key: 'ka' },
            { name: 'Kerala', checked: false, key: 'kl' },
            { name: 'Lakshadweep', checked: false, key: 'ld' },
            { name: 'Madhya Pradesh', checked: false, key: 'mp' },
            { name: 'Maharashtra', checked: true, key: 'mh' },
            { name: 'Manipur', checked: false, key: 'mn' },
            { name: 'Meghalaya', checked: false, key: 'ml' },
            { name: 'Mizoram', checked: false, key: 'mz' },
            { name: 'Nagaland', checked: false, key: 'nl' },
            { name: 'Odisha', checked: false, key: 'or' },
            { name: 'Puducherry', checked: false, key: 'py' },
            { name: 'Punjab', checked: false, key: 'pb' },
            { name: 'Rajasthan', checked: false, key: 'rj' },
            { name: 'Sikkim', checked: false, key: 'sk' },
            { name: 'Tamil Nadu', checked: false, key: 'tn' },
            { name: 'Telangana', checked: false, key: 'tg' },
            { name: 'Tripura', checked: false, key: 'tr' },
            { name: 'Uttar Pradesh', checked: false, key: 'up' },
            { name: 'Uttarakhand', checked: false, key: 'ut' },
            { name: 'West Bengal', checked: false, key: 'wb' }];
    };
    // error handler
    DashboardService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purpose only
        return Promise.reject(error.body || error);
    };
    DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"])); };
    DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac });
    return DashboardService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/sidebar.directive.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/sidebar.directive.ts ***!
  \************************************************/
/*! exports provided: SidebarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarDirective", function() { return SidebarDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var SidebarDirective = /** @class */ (function () {
    function SidebarDirective() {
        this.click = false;
    }
    SidebarDirective.prototype.onClic = function () {
        this.click = !this.click;
    };
    SidebarDirective.ɵfac = function SidebarDirective_Factory(t) { return new (t || SidebarDirective)(); };
    SidebarDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SidebarDirective, selectors: [["", "appSidebar", ""]], hostVars: 2, hostBindings: function SidebarDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarDirective_click_HostBindingHandler() { return ctx.onClic(); });
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-open", ctx.click);
        } }, exportAs: ["appSidebar"] });
    return SidebarDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appSidebar]',
                exportAs: 'appSidebar'
            }]
    }], function () { return []; }, { click: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.is-open']
        }], onClic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aarif/Desktop/WIP/Angular2Training/CovidDash/Covid-India-Trajectories/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map