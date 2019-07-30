System.register(['./chunk-1b41fb25.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            var ProList = /** @class */ (function () {
                function ProList(hostRef) {
                    registerInstance(this, hostRef);
                }
                ProList.prototype.render = function () {
                    return h("slot", null);
                };
                Object.defineProperty(ProList, "style", {
                    get: function () { return ""; },
                    enumerable: true,
                    configurable: true
                });
                return ProList;
            }());
            exports('pro_list', ProList);
        }
    };
});