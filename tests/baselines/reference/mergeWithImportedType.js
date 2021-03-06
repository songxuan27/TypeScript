//// [tests/cases/compiler/mergeWithImportedType.ts] ////

//// [f1.ts]
export enum E {X}

//// [f2.ts]
import {E} from "./f1";
export type E = E;

//// [f1.js]
"use strict";
exports.__esModule = true;
var E;
(function (E) {
    E[E["X"] = 0] = "X";
})(E = exports.E || (exports.E = {}));
//// [f2.js]
"use strict";
exports.__esModule = true;
