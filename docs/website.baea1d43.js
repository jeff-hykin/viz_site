// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/.pnpm/parcel-bundler@1.12.5/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/.pnpm/parcel-bundler@1.12.5/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/.pnpm/parcel-bundler@1.12.5/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../main/globals.sass":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/.pnpm/parcel-bundler@1.12.5/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/css-baseline/css/2.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../node_modules/.pnpm/parcel-bundler@1.12.5/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/animejs/lib/anime.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * anime.js v3.2.1
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */
// Defaults
var defaultInstanceSettings = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: 'normal',
  autoplay: true,
  timelineOffset: 0
};
var defaultTweenSettings = {
  duration: 1000,
  delay: 0,
  endDelay: 0,
  easing: 'easeOutElastic(1, .5)',
  round: 0
};
var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective', 'matrix', 'matrix3d']; // Caching

var cache = {
  CSS: {},
  springs: {}
}; // Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

function applyArguments(func, args) {
  return func.apply(null, args);
}

var is = {
  arr: function (a) {
    return Array.isArray(a);
  },
  obj: function (a) {
    return stringContains(Object.prototype.toString.call(a), 'Object');
  },
  pth: function (a) {
    return is.obj(a) && a.hasOwnProperty('totalLength');
  },
  svg: function (a) {
    return a instanceof SVGElement;
  },
  inp: function (a) {
    return a instanceof HTMLInputElement;
  },
  dom: function (a) {
    return a.nodeType || is.svg(a);
  },
  str: function (a) {
    return typeof a === 'string';
  },
  fnc: function (a) {
    return typeof a === 'function';
  },
  und: function (a) {
    return typeof a === 'undefined';
  },
  nil: function (a) {
    return is.und(a) || a === null;
  },
  hex: function (a) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
  },
  rgb: function (a) {
    return /^rgb/.test(a);
  },
  hsl: function (a) {
    return /^hsl/.test(a);
  },
  col: function (a) {
    return is.hex(a) || is.rgb(a) || is.hsl(a);
  },
  key: function (a) {
    return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes';
  }
}; // Easings

function parseEasingParameters(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(',').map(function (p) {
    return parseFloat(p);
  }) : [];
} // Spring solver inspired by Webkit Copyright ?? 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js


function spring(string, duration) {
  var params = parseEasingParameters(string);
  var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
  var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
  var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
  var velocity = minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
  var w0 = Math.sqrt(stiffness / mass);
  var zeta = damping / (2 * Math.sqrt(stiffness * mass));
  var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
  var a = 1;
  var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;

  function solver(t) {
    var progress = duration ? duration * t / 1000 : t;

    if (zeta < 1) {
      progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
    } else {
      progress = (a + b * progress) * Math.exp(-progress * w0);
    }

    if (t === 0 || t === 1) {
      return t;
    }

    return 1 - progress;
  }

  function getDuration() {
    var cached = cache.springs[string];

    if (cached) {
      return cached;
    }

    var frame = 1 / 6;
    var elapsed = 0;
    var rest = 0;

    while (true) {
      elapsed += frame;

      if (solver(elapsed) === 1) {
        rest++;

        if (rest >= 16) {
          break;
        }
      } else {
        rest = 0;
      }
    }

    var duration = elapsed * frame * 1000;
    cache.springs[string] = duration;
    return duration;
  }

  return duration ? solver : getDuration;
} // Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function


function steps(steps) {
  if (steps === void 0) steps = 10;
  return function (t) {
    return Math.ceil(minMax(t, 0.000001, 1) * steps) * (1 / steps);
  };
} // BezierEasing https://github.com/gre/bezier-easing


var bezier = function () {
  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  function A(aA1, aA2) {
    return 1.0 - 3.0 * aA2 + 3.0 * aA1;
  }

  function B(aA1, aA2) {
    return 3.0 * aA2 - 6.0 * aA1;
  }

  function C(aA1) {
    return 3.0 * aA1;
  }

  function calcBezier(aT, aA1, aA2) {
    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
  }

  function getSlope(aT, aA1, aA2) {
    return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
  }

  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX,
        currentT,
        i = 0;

    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;

      if (currentX > 0.0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > 0.0000001 && ++i < 10);

    return currentT;
  }

  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < 4; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);

      if (currentSlope === 0.0) {
        return aGuessT;
      }

      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }

    return aGuessT;
  }

  function bezier(mX1, mY1, mX2, mY2) {
    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
      return;
    }

    var sampleValues = new Float32Array(kSplineTableSize);

    if (mX1 !== mY1 || mX2 !== mY2) {
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }

    function getTForX(aX) {
      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }

      --currentSample;
      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);

      if (initialSlope >= 0.001) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0.0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }
    }

    return function (x) {
      if (mX1 === mY1 && mX2 === mY2) {
        return x;
      }

      if (x === 0 || x === 1) {
        return x;
      }

      return calcBezier(getTForX(x), mY1, mY2);
    };
  }

  return bezier;
}();

var penner = function () {
  // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)
  var eases = {
    linear: function () {
      return function (t) {
        return t;
      };
    }
  };
  var functionEasings = {
    Sine: function () {
      return function (t) {
        return 1 - Math.cos(t * Math.PI / 2);
      };
    },
    Circ: function () {
      return function (t) {
        return 1 - Math.sqrt(1 - t * t);
      };
    },
    Back: function () {
      return function (t) {
        return t * t * (3 * t - 2);
      };
    },
    Bounce: function () {
      return function (t) {
        var pow2,
            b = 4;

        while (t < ((pow2 = Math.pow(2, --b)) - 1) / 11) {}

        return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - t, 2);
      };
    },
    Elastic: function (amplitude, period) {
      if (amplitude === void 0) amplitude = 1;
      if (period === void 0) period = .5;
      var a = minMax(amplitude, 1, 10);
      var p = minMax(period, .1, 2);
      return function (t) {
        return t === 0 || t === 1 ? t : -a * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - p / (Math.PI * 2) * Math.asin(1 / a)) * (Math.PI * 2) / p);
      };
    }
  };
  var baseEasings = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];
  baseEasings.forEach(function (name, i) {
    functionEasings[name] = function () {
      return function (t) {
        return Math.pow(t, i + 2);
      };
    };
  });
  Object.keys(functionEasings).forEach(function (name) {
    var easeIn = functionEasings[name];
    eases['easeIn' + name] = easeIn;

    eases['easeOut' + name] = function (a, b) {
      return function (t) {
        return 1 - easeIn(a, b)(1 - t);
      };
    };

    eases['easeInOut' + name] = function (a, b) {
      return function (t) {
        return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 1 - easeIn(a, b)(t * -2 + 2) / 2;
      };
    };

    eases['easeOutIn' + name] = function (a, b) {
      return function (t) {
        return t < 0.5 ? (1 - easeIn(a, b)(1 - t * 2)) / 2 : (easeIn(a, b)(t * 2 - 1) + 1) / 2;
      };
    };
  });
  return eases;
}();

function parseEasings(easing, duration) {
  if (is.fnc(easing)) {
    return easing;
  }

  var name = easing.split('(')[0];
  var ease = penner[name];
  var args = parseEasingParameters(easing);

  switch (name) {
    case 'spring':
      return spring(easing, duration);

    case 'cubicBezier':
      return applyArguments(bezier, args);

    case 'steps':
      return applyArguments(steps, args);

    default:
      return applyArguments(ease, args);
  }
} // Strings


function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch (e) {
    return;
  }
} // Arrays


function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];

  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];

      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }

  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) {
    return a.concat(is.arr(b) ? flattenArray(b) : b);
  }, []);
}

function toArray(o) {
  if (is.arr(o)) {
    return o;
  }

  if (is.str(o)) {
    o = selectString(o) || o;
  }

  if (o instanceof NodeList || o instanceof HTMLCollection) {
    return [].slice.call(o);
  }

  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) {
    return a === val;
  });
} // Objects


function cloneObject(o) {
  var clone = {};

  for (var p in o) {
    clone[p] = o[p];
  }

  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o1) {
    o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
  }

  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o2) {
    o[p] = is.und(o1[p]) ? o2[p] : o1[p];
  }

  return o;
} // Colors


function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return "rgba(" + r + "," + g + "," + b + ",1)";
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;

  function hue2rgb(p, q, t) {
    if (t < 0) {
      t += 1;
    }

    if (t > 1) {
      t -= 1;
    }

    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }

    if (t < 1 / 2) {
      return q;
    }

    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }

    return p;
  }

  var r, g, b;

  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
}

function colorToRgb(val) {
  if (is.rgb(val)) {
    return rgbToRgba(val);
  }

  if (is.hex(val)) {
    return hexToRgba(val);
  }

  if (is.hsl(val)) {
    return hslToRgba(val);
  }
} // Units


function getUnit(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);

  if (split) {
    return split[1];
  }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') {
    return 'px';
  }

  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) {
    return 'deg';
  }
} // Values


function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) {
    return val;
  }

  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);

  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) {
    return value;
  }

  var cached = cache.CSS[value + unit];

  if (!is.und(cached)) {
    return cached;
  }

  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (!is.nil(getAttribute(el, prop)) || is.svg(el) && el[prop])) {
    return 'attribute';
  }

  if (is.dom(el) && arrayContains(validTransforms, prop)) {
    return 'transform';
  }

  if (is.dom(el) && prop !== 'transform' && getCSSValue(el, prop)) {
    return 'css';
  }

  if (el[prop] != null) {
    return 'object';
  }
}

function getElementTransforms(el) {
  if (!is.dom(el)) {
    return;
  }

  var str = el.style.transform || '';
  var reg = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m;

  while (m = reg.exec(str)) {
    transforms.set(m[1], m[2]);
  }

  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;

  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }

  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform':
      return getTransformValue(target, propName, animatable, unit);

    case 'css':
      return getCSSValue(target, propName, unit);

    case 'attribute':
      return getAttribute(target, propName);

    default:
      return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);

  if (!operator) {
    return to;
  }

  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));

  switch (operator[0][0]) {
    case '+':
      return x + y + u;

    case '-':
      return x - y + u;

    case '*':
      return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) {
    return colorToRgb(val);
  }

  if (/\s/g.test(val)) {
    return val;
  }

  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;

  if (unit) {
    return unitLess + unit;
  }

  return unitLess;
} // getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744


function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, 'r');
}

function getRectLength(el) {
  return getAttribute(el, 'width') * 2 + getAttribute(el, 'height') * 2;
}

function getLineLength(el) {
  return getDistance({
    x: getAttribute(el, 'x1'),
    y: getAttribute(el, 'y1')
  }, {
    x: getAttribute(el, 'x2'),
    y: getAttribute(el, 'y2')
  });
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;

  for (var i = 0; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);

    if (i > 0) {
      totalLength += getDistance(previousPos, currentPos);
    }

    previousPos = currentPos;
  }

  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
} // Path animation


function getTotalLength(el) {
  if (el.getTotalLength) {
    return el.getTotalLength();
  }

  switch (el.tagName.toLowerCase()) {
    case 'circle':
      return getCircleLength(el);

    case 'rect':
      return getRectLength(el);

    case 'line':
      return getLineLength(el);

    case 'polyline':
      return getPolylineLength(el);

    case 'polygon':
      return getPolygonLength(el);
  }
}

function setDashoffset(el) {
  var pathLength = getTotalLength(el);
  el.setAttribute('stroke-dasharray', pathLength);
  return pathLength;
} // Motion path


function getParentSvgEl(el) {
  var parentEl = el.parentNode;

  while (is.svg(parentEl)) {
    if (!is.svg(parentEl.parentNode)) {
      break;
    }

    parentEl = parentEl.parentNode;
  }

  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width,
    h: height,
    vW: viewBox[2],
    vH: viewBox[3]
  };
}

function getPath(path, percent) {
  var pathEl = is.str(path) ? selectString(path)[0] : path;
  var p = percent || 100;
  return function (property) {
    return {
      property: property,
      el: pathEl,
      svg: getParentSvg(pathEl),
      totalLength: getTotalLength(pathEl) * (p / 100)
    };
  };
}

function getPathProgress(path, progress, isPathTargetInsideSVG) {
  function point(offset) {
    if (offset === void 0) offset = 0;
    var l = progress + offset >= 1 ? progress + offset : 0;
    return path.el.getPointAtLength(l);
  }

  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(+1);
  var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
  var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;

  switch (path.property) {
    case 'x':
      return (p.x - svg.x) * scaleX;

    case 'y':
      return (p.y - svg.y) * scaleY;

    case 'angle':
      return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
  }
} // Decompose value


function decomposeValue(val, unit) {
  // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
  // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation

  var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: is.str(val) || unit ? value.split(rgx) : []
  };
} // Animatables


function parseTargets(targets) {
  var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
  return filterArray(targetsArray, function (item, pos, self) {
    return self.indexOf(item) === pos;
  });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {
      target: t,
      id: i,
      total: parsed.length,
      transforms: {
        list: getElementTransforms(t)
      }
    };
  });
} // Properties


function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings); // Override duration if easing is a spring

  if (/^spring/.test(settings.easing)) {
    settings.duration = spring(settings.easing);
  }

  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = l === 2 && !is.obj(prop[0]);

    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) {
        settings.duration = tweenSettings.duration / l;
      }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {
        value: prop
      };
    }
  }

  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = is.obj(v) && !is.pth(v) ? v : {
      value: v
    }; // Default delay value should only be applied to the first tween

    if (is.und(obj.delay)) {
      obj.delay = !i ? tweenSettings.delay : 0;
    } // Default endDelay value should only be applied to the last tween


    if (is.und(obj.endDelay)) {
      obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0;
    }

    return obj;
  }).map(function (k) {
    return mergeObjects(k, settings);
  });
}

function flattenKeyframes(keyframes) {
  var propertyNames = filterArray(flattenArray(keyframes.map(function (key) {
    return Object.keys(key);
  })), function (p) {
    return is.key(p);
  }).reduce(function (a, b) {
    if (a.indexOf(b) < 0) {
      a.push(b);
    }

    return a;
  }, []);
  var properties = {};

  var loop = function (i) {
    var propName = propertyNames[i];
    properties[propName] = keyframes.map(function (key) {
      var newKey = {};

      for (var p in key) {
        if (is.key(p)) {
          if (p == propName) {
            newKey.value = key[p];
          }
        } else {
          newKey[p] = key[p];
        }
      }

      return newKey;
    });
  };

  for (var i = 0; i < propertyNames.length; i++) loop(i);

  return properties;
}

function getProperties(tweenSettings, params) {
  var properties = [];
  var keyframes = params.keyframes;

  if (keyframes) {
    params = mergeObjects(flattenKeyframes(keyframes), params);
  }

  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }

  return properties;
} // Tweens


function normalizeTweenValues(tween, animatable) {
  var t = {};

  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);

    if (is.arr(value)) {
      value = value.map(function (v) {
        return getFunctionValue(v, animatable);
      });

      if (value.length === 1) {
        value = value[0];
      }
    }

    t[p] = value;
  }

  t.duration = parseFloat(t.duration);
  t.delay = parseFloat(t.delay);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;

    if (is.und(to)) {
      to = previousValue;
    }

    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
    tween.easing = parseEasings(tween.easing, tween.duration);
    tween.isPath = is.pth(tweenValue);
    tween.isPathTargetInsideSVG = tween.isPath && is.svg(animatable.target);
    tween.isColor = is.col(tween.from.original);

    if (tween.isColor) {
      tween.round = 1;
    }

    previousTween = tween;
    return tween;
  });
} // Tween progress


var setProgressValue = {
  css: function (t, p, v) {
    return t.style[p] = v;
  },
  attribute: function (t, p, v) {
    return t.setAttribute(p, v);
  },
  object: function (t, p, v) {
    return t[p] = v;
  },
  transform: function (t, p, v, transforms, manual) {
    transforms.list.set(p, v);

    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) {
        str += prop + "(" + value + ") ";
      });
      t.style.transform = str;
    }
  }
}; // Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
} // Animations


function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);

  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end,
      delay: tweens[0].delay,
      endDelay: lastTween.endDelay
    };
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) {
    return !is.und(a);
  });
} // Create Instance


function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;

  var getTlOffset = function (anim) {
    return anim.timelineOffset ? anim.timelineOffset : 0;
  };

  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.duration;
  })) : tweenSettings.duration;
  timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.delay;
  })) : tweenSettings.delay;
  timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.duration - anim.endDelay;
  })) : tweenSettings.endDelay;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration,
    delay: timings.delay,
    endDelay: timings.endDelay
  });
} // Core


var activeInstances = [];

var engine = function () {
  var raf;

  function play() {
    if (!raf && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > 0) {
      raf = requestAnimationFrame(step);
    }
  }

  function step(t) {
    // memo on algorithm issue:
    // dangerous iteration over mutable `activeInstances`
    // (that collection may be updated from within callbacks of `tick`-ed animation instances)
    var activeInstancesLength = activeInstances.length;
    var i = 0;

    while (i < activeInstancesLength) {
      var activeInstance = activeInstances[i];

      if (!activeInstance.paused) {
        activeInstance.tick(t);
        i++;
      } else {
        activeInstances.splice(i, 1);
        activeInstancesLength--;
      }
    }

    raf = i > 0 ? requestAnimationFrame(step) : undefined;
  }

  function handleVisibilityChange() {
    if (!anime.suspendWhenDocumentHidden) {
      return;
    }

    if (isDocumentHidden()) {
      // suspend ticks
      raf = cancelAnimationFrame(raf);
    } else {
      // is back to active tab
      // first adjust animations to consider the time that ticks were suspended
      activeInstances.forEach(function (instance) {
        return instance._onDocumentVisibility();
      });
      engine();
    }
  }

  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', handleVisibilityChange);
  }

  return play;
}();

function isDocumentHidden() {
  return !!document && document.hidden;
} // Public Instance


function anime(params) {
  if (params === void 0) params = {};
  var startTime = 0,
      lastTime = 0,
      now = 0;
  var children,
      childrenLength = 0;
  var resolve = null;

  function makePromise(instance) {
    var promise = window.Promise && new Promise(function (_resolve) {
      return resolve = _resolve;
    });
    instance.finished = promise;
    return promise;
  }

  var instance = createNewInstance(params);
  var promise = makePromise(instance);

  function toggleInstanceDirection() {
    var direction = instance.direction;

    if (direction !== 'alternate') {
      instance.direction = direction !== 'normal' ? 'normal' : 'reverse';
    }

    instance.reversed = !instance.reversed;
    children.forEach(function (child) {
      return child.reversed = instance.reversed;
    });
  }

  function adjustTime(time) {
    return instance.reversed ? instance.duration - time : time;
  }

  function resetTime() {
    startTime = 0;
    lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
  }

  function seekChild(time, child) {
    if (child) {
      child.seek(time - child.timelineOffset);
    }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) {
        seekChild(time, children[i]);
      }
    } else {
      for (var i$1 = childrenLength; i$1--;) {
        seekChild(time, children[i$1]);
      }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;

    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength]; // Only check for keyframes if there is more than one tween

      if (tweenLength) {
        tween = filterArray(tweens, function (t) {
          return insTime < t.end;
        })[0] || tween;
      }

      var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
      var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = void 0;

      for (var n = 0; n < toNumbersLength; n++) {
        var value = void 0;
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;

        if (!tween.isPath) {
          value = fromNumber + eased * (toNumber - fromNumber);
        } else {
          value = getPathProgress(tween.value, eased * toNumber, tween.isPathTargetInsideSVG);
        }

        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }

        numbers.push(value);
      } // Manual Array.reduce for better performances


      var stringsLength = strings.length;

      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];

        for (var s = 0; s < stringsLength; s++) {
          var a = strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];

          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }

      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setCallback(cb) {
    if (instance[cb] && !instance.passThrough) {
      instance[cb](instance);
    }
  }

  function countIteration() {
    if (instance.remaining && instance.remaining !== true) {
      instance.remaining--;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insDelay = instance.delay;
    var insEndDelay = insDuration - instance.endDelay;
    var insTime = adjustTime(engineTime);
    instance.progress = minMax(insTime / insDuration * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;

    if (children) {
      syncInstanceChildren(insTime);
    }

    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
      setCallback('begin');
    }

    if (!instance.loopBegan && instance.currentTime > 0) {
      instance.loopBegan = true;
      setCallback('loopBegin');
    }

    if (insTime <= insDelay && instance.currentTime !== 0) {
      setAnimationsProgress(0);
    }

    if (insTime >= insEndDelay && instance.currentTime !== insDuration || !insDuration) {
      setAnimationsProgress(insDuration);
    }

    if (insTime > insDelay && insTime < insEndDelay) {
      if (!instance.changeBegan) {
        instance.changeBegan = true;
        instance.changeCompleted = false;
        setCallback('changeBegin');
      }

      setCallback('change');
      setAnimationsProgress(insTime);
    } else {
      if (instance.changeBegan) {
        instance.changeCompleted = true;
        instance.changeBegan = false;
        setCallback('changeComplete');
      }
    }

    instance.currentTime = minMax(insTime, 0, insDuration);

    if (instance.began) {
      setCallback('update');
    }

    if (engineTime >= insDuration) {
      lastTime = 0;
      countIteration();

      if (!instance.remaining) {
        instance.paused = true;

        if (!instance.completed) {
          instance.completed = true;
          setCallback('loopComplete');
          setCallback('complete');

          if (!instance.passThrough && 'Promise' in window) {
            resolve();
            promise = makePromise(instance);
          }
        }
      } else {
        startTime = now;
        setCallback('loopComplete');
        instance.loopBegan = false;

        if (instance.direction === 'alternate') {
          toggleInstanceDirection();
        }
      }
    }
  }

  instance.reset = function () {
    var direction = instance.direction;
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.loopBegan = false;
    instance.changeBegan = false;
    instance.completed = false;
    instance.changeCompleted = false;
    instance.reversePlayback = false;
    instance.reversed = direction === 'reverse';
    instance.remaining = instance.loop;
    children = instance.children;
    childrenLength = children.length;

    for (var i = childrenLength; i--;) {
      instance.children[i].reset();
    }

    if (instance.reversed && instance.loop !== true || direction === 'alternate' && instance.loop === 1) {
      instance.remaining++;
    }

    setAnimationsProgress(instance.reversed ? instance.duration : 0);
  }; // internal method (for engine) to adjust animation timings before restoring engine ticks (rAF)


  instance._onDocumentVisibility = resetTime; // Set Value helper

  instance.set = function (targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.tick = function (t) {
    now = t;

    if (!startTime) {
      startTime = now;
    }

    setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
  };

  instance.seek = function (time) {
    setInstanceProgress(adjustTime(time));
  };

  instance.pause = function () {
    instance.paused = true;
    resetTime();
  };

  instance.play = function () {
    if (!instance.paused) {
      return;
    }

    if (instance.completed) {
      instance.reset();
    }

    instance.paused = false;
    activeInstances.push(instance);
    resetTime();
    engine();
  };

  instance.reverse = function () {
    toggleInstanceDirection();
    instance.completed = instance.reversed ? false : true;
    resetTime();
  };

  instance.restart = function () {
    instance.reset();
    instance.play();
  };

  instance.remove = function (targets) {
    var targetsArray = parseTargets(targets);
    removeTargetsFromInstance(targetsArray, instance);
  };

  instance.reset();

  if (instance.autoplay) {
    instance.play();
  }

  return instance;
} // Remove targets from animation


function removeTargetsFromAnimations(targetsArray, animations) {
  for (var a = animations.length; a--;) {
    if (arrayContains(targetsArray, animations[a].animatable.target)) {
      animations.splice(a, 1);
    }
  }
}

function removeTargetsFromInstance(targetsArray, instance) {
  var animations = instance.animations;
  var children = instance.children;
  removeTargetsFromAnimations(targetsArray, animations);

  for (var c = children.length; c--;) {
    var child = children[c];
    var childAnimations = child.animations;
    removeTargetsFromAnimations(targetsArray, childAnimations);

    if (!childAnimations.length && !child.children.length) {
      children.splice(c, 1);
    }
  }

  if (!animations.length && !children.length) {
    instance.pause();
  }
}

function removeTargetsFromActiveInstances(targets) {
  var targetsArray = parseTargets(targets);

  for (var i = activeInstances.length; i--;) {
    var instance = activeInstances[i];
    removeTargetsFromInstance(targetsArray, instance);
  }
} // Stagger helpers


function stagger(val, params) {
  if (params === void 0) params = {};
  var direction = params.direction || 'normal';
  var easing = params.easing ? parseEasings(params.easing) : null;
  var grid = params.grid;
  var axis = params.axis;
  var fromIndex = params.from || 0;
  var fromFirst = fromIndex === 'first';
  var fromCenter = fromIndex === 'center';
  var fromLast = fromIndex === 'last';
  var isRange = is.arr(val);
  var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
  var val2 = isRange ? parseFloat(val[1]) : 0;
  var unit = getUnit(isRange ? val[1] : val) || 0;
  var start = params.start || 0 + (isRange ? val1 : 0);
  var values = [];
  var maxValue = 0;
  return function (el, i, t) {
    if (fromFirst) {
      fromIndex = 0;
    }

    if (fromCenter) {
      fromIndex = (t - 1) / 2;
    }

    if (fromLast) {
      fromIndex = t - 1;
    }

    if (!values.length) {
      for (var index = 0; index < t; index++) {
        if (!grid) {
          values.push(Math.abs(fromIndex - index));
        } else {
          var fromX = !fromCenter ? fromIndex % grid[0] : (grid[0] - 1) / 2;
          var fromY = !fromCenter ? Math.floor(fromIndex / grid[0]) : (grid[1] - 1) / 2;
          var toX = index % grid[0];
          var toY = Math.floor(index / grid[0]);
          var distanceX = fromX - toX;
          var distanceY = fromY - toY;
          var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

          if (axis === 'x') {
            value = -distanceX;
          }

          if (axis === 'y') {
            value = -distanceY;
          }

          values.push(value);
        }

        maxValue = Math.max.apply(Math, values);
      }

      if (easing) {
        values = values.map(function (val) {
          return easing(val / maxValue) * maxValue;
        });
      }

      if (direction === 'reverse') {
        values = values.map(function (val) {
          return axis ? val < 0 ? val * -1 : -val : Math.abs(maxValue - val);
        });
      }
    }

    var spacing = isRange ? (val2 - val1) / maxValue : val1;
    return start + spacing * (Math.round(values[i] * 100) / 100) + unit;
  };
} // Timeline


function timeline(params) {
  if (params === void 0) params = {};
  var tl = anime(params);
  tl.duration = 0;

  tl.add = function (instanceParams, timelineOffset) {
    var tlIndex = activeInstances.indexOf(tl);
    var children = tl.children;

    if (tlIndex > -1) {
      activeInstances.splice(tlIndex, 1);
    }

    function passThrough(ins) {
      ins.passThrough = true;
    }

    for (var i = 0; i < children.length; i++) {
      passThrough(children[i]);
    }

    var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
    insParams.targets = insParams.targets || params.targets;
    var tlDuration = tl.duration;
    insParams.autoplay = false;
    insParams.direction = tl.direction;
    insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
    passThrough(tl);
    tl.seek(insParams.timelineOffset);
    var ins = anime(insParams);
    passThrough(ins);
    children.push(ins);
    var timings = getInstanceTimings(children, params);
    tl.delay = timings.delay;
    tl.endDelay = timings.endDelay;
    tl.duration = timings.duration;
    tl.seek(0);
    tl.reset();

    if (tl.autoplay) {
      tl.play();
    }

    return tl;
  };

  return tl;
}

anime.version = '3.2.1';
anime.speed = 1; // TODO:#review: naming, documentation

anime.suspendWhenDocumentHidden = true;
anime.running = activeInstances;
anime.remove = removeTargetsFromActiveInstances;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;

anime.random = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var _default = anime;
exports.default = _default;
},{}],"../main/stars.jsx":[function(require,module,exports) {
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Twinkling Night Sky by Sharna converted to regular JS by Jeff Hykin
var anime = require("animejs").default; // const Letterize = require("letterizejs").default


var numberOfStars = 60;
var starScalingFactor = 115; // its based off the width of the parent container 
// 
// 
// regular stars
// 
// 
// TODO: check to make sure it works okay with rectangle-shaped containers

var regularStarContainer = /*#__PURE__*/React.createElement("svg", {
  height: "100%",
  width: "100%",
  viewBox: "0 0 100 100",
  preserveAspectRatio: "xMidYMin slice",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
}, _toConsumableArray(Array(numberOfStars)).map(function (x, y) {
  return /*#__PURE__*/React.createElement("circle", {
    cx: Math.random() * 100,
    cy: Math.random() * 100,
    randomRadiusSize: Math.random(),
    stroke: "none",
    strokeWidth: "0",
    fill: "white",
    key: y,
    class: "star",
    style: "opacity: 1;"
  });
})); // 
// animate the regular stars
// 

anime({
  targets: regularStarContainer.children,
  opacity: [{
    duration: 700,
    value: "0"
  }, {
    duration: 700,
    value: "1"
  }],
  easing: "linear",
  loop: true,
  delay: function delay(el, i) {
    return 50 * i;
  }
}); // 
// update radius when element size changes
// 

var computeRadius = function computeRadius(randomRadiusSize) {
  var clientWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  return (randomRadiusSize * 0.7 + 0.6) / (clientWidth / starScalingFactor);
};

var previousRegularStarContainerWidth = null;
setInterval(function () {
  // if the width of the parent changed pixel value
  if (regularStarContainer.clientWidth && regularStarContainer.clientWidth != previousRegularStarContainerWidth) {
    previousRegularStarContainerWidth = regularStarContainer.clientWidth; // update the radius

    var _iterator = _createForOfIteratorHelper(regularStarContainer.children),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var each = _step.value;
        each.setAttribute("r", computeRadius(each.randomRadiusSize, regularStarContainer.clientWidth));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
}, 250); // 
// 
// shooting stars
// 
// 

var shootingStarContainer = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("style", null, "\n            .wish {\n                height: 2px;\n                top: 300px;\n                width: 100px;\n                margin: 0;\n                opacity: 0;\n                padding: 0;\n                background-color: white;\n                position: absolute;\n                background: linear-gradient(-45deg, white, rgba(0, 0, 255, 0));\n                filter: drop-shadow(0 0 6px white);\n                overflow: hidden;\n            }\n        "), _toConsumableArray(Array(numberOfStars)).map(function (x, y) {
  return /*#__PURE__*/React.createElement("div", {
    key: y,
    class: "wish",
    randomYPosition: Math.random(),
    randomXPosition: Math.random()
  });
}));
shootingStarContainer.style = "\n    margin: 0px;\n    padding: 0px;\n    width: 200%;\n    height: 200%;\n    position: absolute;\n    overflow: hidden;\n    transform: scale(-1, 1) rotate(60deg) translateY(-0%) translateX(-50%);\n    top: 0;\n    left: 0;\n    transform-box: fill-box;\n    transform-origin: top left;\n"; // 
// update location when width of container changes
// 

var previousShootingStarContainerWidth = null;
setInterval(function () {
  if (shootingStarContainer.clientWidth && shootingStarContainer.clientWidth != previousShootingStarContainerWidth) {
    previousShootingStarContainerWidth = shootingStarContainer.clientWidth;

    var _iterator2 = _createForOfIteratorHelper(shootingStarContainer.children),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var each = _step2.value;
        each.style.left = each.randomXPosition * shootingStarContainer.clientWidth;
        each.style.top = each.randomYPosition * shootingStarContainer.clientHeight;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
}, 250); // 
// animate the shooting stars
// 

anime({
  targets: shootingStarContainer.children,
  easing: "linear",
  loop: true,
  delay: function delay(el, i) {
    return 1000 * i;
  },
  opacity: [{
    duration: 700,
    value: "1"
  }],
  width: [{
    value: "150px"
  }, {
    value: "0px"
  }],
  translateX: 350
}); // 
// 
// sky
// 
// 

var sky = module.exports = /*#__PURE__*/React.createElement("div", null, regularStarContainer, shootingStarContainer);
sky.style = "\n    background: rgb(0,61,126);\n    background: radial-gradient(circle at 100%, rgba(0,61,126,1) 0%, rgba(2,0,36,1) 100%);\n    width: 100%;\n    height: 100%;\n    position: relative;\n";
},{"animejs":"../node_modules/animejs/lib/anime.es.js"}],"../main/campfire.jsx":[function(require,module,exports) {
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var anime = require("animejs").default; // const Letterize = require("letterizejs").default


var fireNodes1, fireNodes2, fireNodes3, baseFire;
var campfireContainer = module.exports = /*#__PURE__*/React.createElement("div", {
  class: "cf-container"
}, /*#__PURE__*/React.createElement("style", null, "\n                .cf-container .cf-flame-container {\n                    width: 100px;\n                    height: 100px;\n                    bottom: 0px;\n                    position: absolute;\n                }\n                .cf-container .cf-log-container {\n                    width: 60%;\n                    height: 100px;\n                    position: absolute;\n                    bottom: 0px;\n                    left: 50px;\n                }\n                .cf-container .cf-flame-container#base-fire .cf-flame:nth-child(1) {\n                    background: #c63509;\n                    opacity: 0.95;\n                }\n                .cf-container .cf-flame-container#base-fire .cf-flame:nth-child(2) {\n                    background: #cd4015;\n                    width: 100px;\n                    height: 100px;\n                    opacity: 0.85;\n                    left: 75px;\n                }\n                .cf-container .cf-flame-container#base-fire .cf-flame:nth-child(3) {\n                    background: #d73e0f;\n                    width: 60px;\n                    height: 60px;\n                    opacity: 0.85;\n                    left: 130px;\n                }\n                .cf-container .cf-flame-container:nth-child(2) {\n                    width: 150px;\n                    height: 150px;\n                    bottom: 0px;\n                    position: absolute;\n                    transform: rotate(180deg) translate(-60%,-55%);\n                }\n                .cf-container .cf-flame-container:nth-child(2) .cf-flame {\n                    width: 75px;\n                    height: 75px;\n                    left: 75px;\n                }\n                .cf-log {\n                    background: #723830;\n                    width: 20px;\n                    height: 30px;\n                    transform-origin: center;\n                    position: absolute;\n                    bottom: 0px;\n                    border-radius: 0.5rem;\n                    box-shadow: 0 3px 10px #372113;\n                    width: 100%;\n                }\n                .cf-log:nth-child(1) {\n                    transform: rotate(15deg);\n                }\n                .cf-log:nth-child(2) {\n                    transform: rotate(-15deg);\n                }\n                .cf-flame:nth-child(1) {\n                    background: #f5ed8f;\n                }\n                .cf-flame:nth-child(2) {\n                    background: #fde239;\n                }\n                .cf-flame:nth-child(3) {\n                    background: #ffdc01;\n                }\n                .cf-flame:nth-child(4) {\n                    background: #fdac01;\n                }\n                .cf-flame:nth-child(5) {\n                    background: #d73e0f;\n                }\n                .cf-flame:nth-child(6) {\n                    background: #cd4015;\n                }\n                .cf-flame:nth-child(7) {\n                    background: #c63509;\n                }\n                .cf-flame:last-child {\n                    background: #c63509;\n                }\n                .cf-flame {\n                    background: #cd4015;\n                    width: 100px;\n                    height: 100px;\n                    border-radius: 1rem;\n                    position: absolute;\n                    bottom: 0px;\n                    left: 100px;\n                }\n                #fireNodes2 .cf-flame {\n                    animation: flameColor 1.5s ease-out infinite;\n                }\n                @keyframes flameColor {\n                    0% {\n                        background: #c63509;\n                    }\n                    20% {\n                        background: #cd4015;\n                    }\n                    30% {\n                        background: #fdac01;\n                    }\n                    50% {\n                        background: #ffb401;\n                    }\n                    60% {\n                        background: #fdac01;\n                    }\n                    70% {\n                        background: #ffdc01;\n                    }\n                    80% {\n                        background: #fde239;\n                    }\n                    100% {\n                        background: #f5ed8f;\n                    }\n                }\n            "), fireNodes1 = /*#__PURE__*/React.createElement("div", {
  class: "cf-flame-container",
  id: "fireNodes1"
}, /*#__PURE__*/React.createElement("div", {
  class: "cf-flame"
}), /*#__PURE__*/React.createElement("div", {
  class: "cf-flame"
}), /*#__PURE__*/React.createElement("div", {
  class: "cf-flame"
}), /*#__PURE__*/React.createElement("div", {
  class: "cf-flame"
}), /*#__PURE__*/React.createElement("div", {
  class: "cf-flame"
}), /*#__PURE__*/React.createElement("div", {
  class: "cf-flame"
}), /*#__PURE__*/React.createElement("div", {
  class: "cf-flame"
})), fireNodes2 = /*#__PURE__*/React.createElement("div", {
  class: "cf-flame-container",
  id: "fireNodes2"
}, /*#__PURE__*/React.createElement("div", {
  class: "cf-flame"
}), /*#__PURE__*/React.createElement("div", {
  class: "cf-flame"
}), /*#__PURE__*/React.createElement("div", {
  class: "cf-flame"
}), /*#__PURE__*/React.createElement("div", {
  class: "cf-flame"
}), /*#__PURE__*/React.createElement("div", {
  class: "cf-flame"
}), /*#__PURE__*/React.createElement("div", {
  class: "cf-flame"
}), /*#__PURE__*/React.createElement("div", {
  class: "cf-flame"
})), baseFire = /*#__PURE__*/React.createElement("div", {
  class: "cf-flame-container",
  id: "base-fire"
}, /*#__PURE__*/React.createElement("div", {
  class: "cf-flame"
}), /*#__PURE__*/React.createElement("div", {
  class: "cf-flame"
}), /*#__PURE__*/React.createElement("div", {
  class: "cf-flame"
})), /*#__PURE__*/React.createElement("div", {
  class: "cf-log-container"
}, /*#__PURE__*/React.createElement("div", {
  class: "cf-log"
}), /*#__PURE__*/React.createElement("div", {
  class: "cf-log"
})));
campfireContainer.style = "\n    box-sizing: content-box;\n    width: 300px;\n    height: 300px;\n    position:relative;\n    transform: translate(0,-10%);\n";
fireNodes1 = fireNodes1.children;
fireNodes2 = fireNodes2.children;
fireNodes3 = fireNodes1.children;
baseFire = baseFire.children;

function animateBaseFire() {
  anime({
    targets: baseFire,
    delay: anime.stagger(300),
    translateY: function translateY() {
      return anime.random(0, -10);
    },
    keyframes: [{
      scale: 0.8
    }, {
      scale: 0.825
    }, {
      scale: 0.9
    }, {
      scale: 0.925
    }, {
      scale: 1
    }],
    duration: 300,
    easing: "easeInOutSine",
    loop: true
  });
}

function animateFlame1() {
  anime({
    targets: fireNodes1,
    delay: anime.stagger(100),
    translateY: function translateY() {
      return anime.random(0, 300);
    },
    rotate: 30,
    opacity: function opacity() {
      return anime.random(0.5, 1);
    },
    translateX: function translateX() {
      return anime.random(0, -60);
    },
    scale: 0,
    skew: function skew() {
      return anime.random(0, 10);
    },
    loop: true,
    easing: "easeInOutSine"
  });
}

function animateFlame2() {
  var _anime;

  anime((_anime = {
    targets: fireNodes2,
    delay: anime.stagger(400),
    translateX: function translateX() {
      return anime.random(-30, 0);
    },
    translateY: function translateY() {
      return anime.random(0, -260);
    }
  }, _defineProperty(_anime, "translateY", function translateY() {
    return anime.random(-260, -160);
  }), _defineProperty(_anime, "translateX", function translateX() {
    return anime.random(0, -30);
  }), _defineProperty(_anime, "scale", 0), _defineProperty(_anime, "rotate", function rotate() {
    return anime.random(0, 60);
  }), _defineProperty(_anime, "skew", function skew() {
    return anime.random(0, 30);
  }), _defineProperty(_anime, "loop", true), _defineProperty(_anime, "easing", "easeInOutSine"), _anime));
}

function animateFlame3() {
  anime({
    targets: fireNodes3,
    delay: anime.stagger(500),
    translateY: function translateY() {
      return anime.random(-300, -200);
    },
    opacity: function opacity() {
      return anime.random(0, 1);
    },
    translateX: function translateX() {
      return anime.random(-50, 50);
    },
    scale: 0,
    rotate: function rotate() {
      return anime.random(0, -30);
    },
    skew: function skew() {
      return anime.random(0, 20);
    },
    loop: true,
    easing: "easeInOutSine"
  });
}

animateFlame1();
animateFlame2();
animateFlame3();
animateBaseFire();
},{"animejs":"../node_modules/animejs/lib/anime.es.js"}],"../main/styles.js":[function(require,module,exports) {
module.exports = {
  columnObj: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  rowObj: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyItems: "center"
  },
  column: "\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n    ",
  shadow: "\n        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);\n    ",
  shadow3: "\n        box-shadow: 0 8px 17px 2px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.2);\n    "
};
},{}],"../main/card.jsx":[function(require,module,exports) {
var _excluded = ["children", "width", "style"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _require = require("./styles"),
    column = _require.column,
    shadow = _require.shadow;

module.exports = function (_ref) {
  var children = _ref.children,
      width = _ref.width,
      style = _ref.style,
      properties = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", _extends({
    style: "\n        ".concat(!width ? "" : "width: ".concat(width, ";"), "\n        background: white;\n        background-color: #fff;\n        -webkit-transition: -webkit-box-shadow .25s;\n        transition: -webkit-box-shadow .25s;\n        transition: box-shadow .25s;\n        transition: box-shadow .25s, -webkit-box-shadow .25s;\n        border-radius: 3px;\n        overflow: hidden;\n        height: max-content;\n        flex-shrink: 0;\n        ").concat(shadow, "\n        ").concat(column, "\n        ").concat(style, "\n    ")
  }, properties), children);
};
},{"./styles":"../main/styles.js"}],"../main/spacer.jsx":[function(require,module,exports) {
var _excluded = ["size", "width", "height", "children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _require = require("./styles"),
    column = _require.column,
    shadow = _require.shadow;

module.exports = function (_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? "1rem" : _ref$size,
      width = _ref.width,
      height = _ref.height,
      children = _ref.children,
      properties = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", _extends({
    style: "\n        min-width: ".concat(width || size, ";\n        ").concat(column, "\n        min-height: ").concat(height || size, ";\n    ")
  }, properties), children);
};
},{"./styles":"../main/styles.js"}],"../main/howdy.jsx":[function(require,module,exports) {
var anime = require("animejs").default; // const Letterize = require("letterizejs").default


var color = "white";
var howdy = module.exports = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  width: "216",
  height: "72"
}, /*#__PURE__*/React.createElement("path", {
  style: "transform: translate(50%,82%);",
  "stroke-width": "3",
  stroke: color,
  fill: "none",
  d: "M-103.61-3.66L-103.61-54.07L-97.84-54.07L-97.84-32.63L-82.16-32.63L-82.16-54.07L-76.39-54.07L-76.39-3.66L-82.16-3.66L-82.16-27.14L-97.84-27.14L-97.84-3.66L-103.61-3.66ZM-53.93-39.23L-53.93-39.23Q-47.32-39.23-43.56-33.40L-43.56-33.40Q-40.32-28.55-40.32-20.74L-40.32-20.74Q-40.32-14.87-42.26-10.44L-42.26-10.44Q-45.84-2.21-54.07-2.21L-54.07-2.21Q-60.43-2.21-64.23-7.63L-64.23-7.63Q-67.68-12.59-67.68-20.74L-67.68-20.74Q-67.68-29.53-63.70-34.56L-63.70-34.56Q-59.91-39.23-53.93-39.23ZM-54.07-34.21L-54.07-34.21Q-57.94-34.21-60.12-30.16L-60.12-30.16Q-62.05-26.61-62.05-20.74L-62.05-20.74Q-62.05-15.33-60.47-11.92L-60.47-11.92Q-58.29-7.24-54-7.24L-54-7.24Q-50.06-7.24-47.88-11.29L-47.88-11.29Q-45.95-14.84-45.95-20.67L-45.95-20.67Q-45.95-26.75-47.95-30.23L-47.95-30.23Q-50.10-34.21-54.07-34.21ZM-28.76-3.66L-33.86-37.86L-28.83-37.86L-25.80-11.67L-20.74-37.86L-15.29-37.86L-10.23-11.67L-7.21-37.86L-2.18-37.86L-7.28-3.66L-12.83-3.66L-18-30.30L-23.20-3.66L-28.76-3.66ZM25.31-34.00L25.31-54.07L30.66-54.07L30.66-3.66L26.75-3.66L25.38-8.12Q21.73-2.21 15.82-2.21L15.82-2.21Q10.37-2.21 7.03-7.49L7.03-7.49Q3.66-12.62 3.66-21.16L3.66-21.16Q3.66-28.16 6.19-32.98L6.19-32.98Q9.53-39.23 15.75-39.23L15.75-39.23Q20.92-39.23 25.31-34.00L25.31-34.00ZM17.05-34.14L17.05-34.14Q13.32-34.14 11.14-30.09L11.14-30.09Q9.28-26.44 9.28-21.09L9.28-21.09Q9.28-15.29 11.00-11.71L11.00-11.71Q13.04-7.31 17.05-7.31L17.05-7.31Q20.67-7.31 23.06-10.93L23.06-10.93Q25.52-14.55 25.52-21.09L25.52-21.09Q25.52-26.40 23.66-29.81L23.66-29.81Q21.38-34.14 17.05-34.14ZM52.35-6.68L40.25-37.86L46.44-37.86L55.02-13.54L62.58-37.86L68.84-37.86L54.70 1.65Q53.54 5.10 50.70 6.19L50.70 6.19Q49.36 6.71 42.19 6.71L42.19 6.71L42.19 1.51L45.28 1.51Q46.37 1.51 46.86 1.51L46.86 1.51Q49.29 1.51 50.03-0.42L50.03-0.42L52.35-6.68ZM87.12-13.82L85.82-57.16L94.18-57.16L92.88-13.82L87.12-13.82ZM85.82 1.09L85.82-7.28L94.18-7.28L94.18 1.09L85.82 1.09Z"
})); // animate it

anime({
  targets: howdy.children[0],
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInExpo',
  duration: 3500,
  delay: function delay(el, i) {
    return i * 250;
  },
  direction: 'alternate',
  loop: false
});
},{"animejs":"../node_modules/animejs/lib/anime.es.js"}],"../main/campsite.jsx":[function(require,module,exports) {
module.exports = /*#__PURE__*/React.createElement("svg", {
  "xmlns:dc": "http://purl.org/dc/elements/1.1/",
  "xmlns:cc": "http://creativecommons.org/ns#",
  "xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
  "xmlns:svg": "http://www.w3.org/2000/svg",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:sodipodi": "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",
  "xmlns:inkscape": "http://www.inkscape.org/namespaces/inkscape",
  width: "1052.3622",
  height: "744.09448",
  version: "1.1",
  "inkscape:version": "0.91 r13725",
  "sodipodi:docname": "mountain.svg",
  "inkscape:export-filename": "D:\\ink\\mountain.png",
  "inkscape:export-xdpi": "90",
  "inkscape:export-ydpi": "90",
  style: "transform: scale(1.8)"
}, /*#__PURE__*/React.createElement("rect", {
  id: "backgroundrect",
  width: "100%",
  height: "100%",
  x: "0",
  y: "0",
  fill: "none",
  stroke: "none"
}), /*#__PURE__*/React.createElement("defs", {
  id: "defs4"
}), /*#__PURE__*/React.createElement("sodipodi:namedview", {
  id: "base",
  pagecolor: "#ffffff",
  bordercolor: "#666666",
  borderopacity: "1.0",
  "inkscape:pageopacity": "0.0",
  "inkscape:pageshadow": "2",
  "inkscape:zoom": "0.49497475",
  "inkscape:cx": "468.63738",
  "inkscape:cy": "357.80148",
  "inkscape:document-units": "px",
  "inkscape:current-layer": "layer1",
  showgrid: "false",
  "inkscape:window-width": "1366",
  "inkscape:window-height": "715",
  "inkscape:window-x": "-8",
  "inkscape:window-y": "22",
  "inkscape:window-maximized": "1"
}), /*#__PURE__*/React.createElement("metadata", {
  id: "metadata7"
}, /*#__PURE__*/React.createElement("rdf:RDF", null, /*#__PURE__*/React.createElement("cc:Work", {
  "rdf:about": ""
}, /*#__PURE__*/React.createElement("dc:format", null, "image/svg+xml"), /*#__PURE__*/React.createElement("dc:type", {
  "rdf:resource": "http://purl.org/dc/dcmitype/StillImage"
}), /*#__PURE__*/React.createElement("dc:title", null)))), /*#__PURE__*/React.createElement("g", {
  class: "currentLayer",
  style: ""
}, /*#__PURE__*/React.createElement("title", null, "Layer 1"), /*#__PURE__*/React.createElement("ellipse", {
  ry: "123.10624975954825",
  rx: "123.96497957214173",
  style: "opacity:0.05100002;fill:#e9ddaf;fill-opacity:1;stroke:none;stroke-opacity:1",
  id: "ellipse5722",
  cx: "512.9146732804254",
  cy: "362.92005406819715",
  class: ""
}), /*#__PURE__*/React.createElement("ellipse", {
  cy: "362.92005406819715",
  cx: "512.9146732804254",
  id: "circle4556",
  style: "opacity:0.05100002;fill:#decd87;fill-opacity:1;stroke:none;stroke-opacity:1",
  rx: "110.83483614024577",
  ry: "107.90292361095776",
  class: ""
}), /*#__PURE__*/React.createElement("circle", {
  style: "opacity:1;fill:#decd87;fill-opacity:1;stroke:none;stroke-opacity:1",
  id: "path4508",
  cx: "512.9146732804254",
  cy: "362.92005406819715",
  r: "92.26594543457031",
  class: ""
}), /*#__PURE__*/React.createElement("path", {
  style: "fill:#d3bc5f;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
  d: "m539.4164886474609,299.31556701660156 a5.300387859344482,5.300387859344482 0 0 0 -5.300260066986084,5.300256252288818 a5.300387859344482,5.300387859344482 0 0 0 5.300260066986084,5.300256252288818 a5.300387859344482,5.300387859344482 0 0 0 5.300630569458008,-5.300256252288818 a5.300387859344482,5.300387859344482 0 0 0 -5.300630569458008,-5.300256252288818 zm-86.96533966064453,16.882705688476562 a2.748349666595459,2.748349666595459 0 0 0 -2.748436689376831,2.7480578422546387 a2.748349666595459,2.748349666595459 0 0 0 2.748436689376831,2.7484323978424072 a2.748349666595459,2.748349666595459 0 0 0 2.7480578422546387,-2.7484323978424072 a2.748349666595459,2.748349666595459 0 0 0 -2.7480578422546387,-2.7480578422546387 zm27.67983055114746,2.3555850982666016 a4.122524261474609,4.515145778656006 0 0 0 -4.122847080230713,4.514931678771973 a4.122524261474609,4.515145778656006 0 0 0 4.122847080230713,4.515311241149902 a4.122524261474609,4.515145778656006 0 0 0 4.122463226318359,-4.515311241149902 a4.122524261474609,4.515145778656006 0 0 0 -4.122463226318359,-4.514931678771973 zm47.70343780517578,9.42271900177002 a3.1409707069396973,3.1409707069396973 0 0 0 -3.141284227371216,3.141284227371216 a3.1409707069396973,3.1409707069396973 0 0 0 3.141284227371216,3.140909433364868 a3.1409707069396973,3.1409707069396973 0 0 0 3.140909433364868,-3.140909433364868 a3.1409707069396973,3.1409707069396973 0 0 0 -3.140909433364868,-3.141284227371216 zm70.5540542602539,0.3442649245262146 c-6.596904754638672,22.542476654052734 -21.213539123535156,61.379417419433594 -48.174861907958984,84.06964111328125 c-24.433961868286133,20.563228607177734 -66.89801788330078,22.939098358154297 -95.90145874023438,21.734691619873047 A92.26602172851562,92.26602172851562 0 0 0 512.9148406982422,455.18614196777344 A92.26602172851562,92.26602172851562 0 0 0 605.1808013916016,362.92015075683594 A92.26602172851562,92.26602172851562 0 0 0 598.3884735107422,328.3208465576172 zM448.13206481933594,338.5774688720703 a7.852426052093506,7.852426052093506 0 0 0 -7.852458953857422,7.852458953857422 a7.852426052093506,7.852426052093506 0 0 0 7.852458953857422,7.852454662322998 a7.852426052093506,7.852426052093506 0 0 0 7.852454662322998,-7.852454662322998 a7.852426052093506,7.852426052093506 0 0 0 -7.852454662322998,-7.852458953857422 zm69.49392700195312,24.34269142150879 a3.5335919857025146,3.729902744293213 0 0 0 -3.5333776473999023,3.72961163520813 a3.5335919857025146,3.729902744293213 0 0 0 3.5333776473999023,3.7299952507019043 a3.5335919857025146,3.729902744293213 0 0 0 3.533756971359253,-3.7299952507019043 a3.5335919857025146,3.729902744293213 0 0 0 -3.533756971359253,-3.72961163520813 zm-63.80082321166992,27.87606430053711 a2.944659948348999,2.748349666595459 0 0 0 -2.944671154022217,2.7484323978424072 a2.944659948348999,2.748349666595459 0 0 0 2.944671154022217,2.7480578422546387 a2.944659948348999,2.748349666595459 0 0 0 2.944671154022217,-2.7480578422546387 a2.944659948348999,2.748349666595459 0 0 0 -2.944671154022217,-2.7484323978424072 zm54.5743408203125,10.208040237426758 a5.300387859344482,5.693008899688721 0 0 0 -5.300251483917236,5.693108081817627 a5.300387859344482,5.693008899688721 0 0 0 5.300251483917236,5.693108081817627 a5.300387859344482,5.693008899688721 0 0 0 5.300256252288818,-5.693108081817627 a5.300387859344482,5.693008899688721 0 0 0 -5.300256252288818,-5.693108081817627 z",
  id: "path4510",
  "inkscape:connector-curvature": "0",
  class: ""
}), /*#__PURE__*/React.createElement("g", {
  id: "g4408",
  class: ""
}, /*#__PURE__*/React.createElement("g", {
  id: "g4186",
  "stroke-width": "0"
}, /*#__PURE__*/React.createElement("path", {
  "sodipodi:nodetypes": "cccc",
  "inkscape:connector-curvature": "0",
  id: "path4176",
  d: "M439.550724029541,529.0165405273438 L501.82458877563477,412.63360595703125 L568.207706451416,528.454833984375 z",
  style: "fill:#455a57;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  id: "path4178",
  d: "m501.5087013244629,413.22393798828125 l-61.95779037475586,115.79137420654297 l61.95779037475586,-0.2706800699234009 l0,-115.52069854736328 z",
  style: "fill:#384845;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
  "inkscape:connector-curvature": "0",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  "sodipodi:nodetypes": "cccc",
  "inkscape:connector-curvature": "0",
  id: "path4168",
  d: "M460.48682022094727,582.6151123046875 L572.4099769592285,373.4437255859375 L691.7187538146973,581.6045532226562 z",
  style: "fill:#6f918a;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  id: "path4180",
  d: "m501.82483291625977,412.63360595703125 l-18.87869644165039,35.28192138671875 l8.762750625610352,12.788825035095215 l5.690257549285889,-9.558053970336914 l6.954212665557861,14.336813926696777 l3.161118507385254,-12.650227546691895 l5.0576653480529785,8.433481216430664 l9.260268211364746,-13.7247953414917 l-20.007577896118164,-34.9079704284668 z",
  style: "fill:#dbe3de;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
  "inkscape:connector-curvature": "0",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  id: "path4170",
  d: "m571.8421669006348,374.5059814453125 l-111.35511779785156,208.10882568359375 l111.35511779785156,-0.48648801445961 l0,-207.62232971191406 z",
  style: "fill:#536c67;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
  "inkscape:connector-curvature": "0",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  id: "path4182",
  d: "m501.5087013244629,413.22393798828125 l-18.562705993652344,34.691646575927734 l8.762750625610352,12.788825035095215 l5.690257549285889,-9.558053970336914 l4.109696865081787,8.472615242004395 l0,-46.3950309753418 z",
  style: "fill:#b7c8be;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
  "inkscape:connector-curvature": "0",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  id: "path4172",
  d: "m572.4102210998535,373.4437255859375 l-33.93019485473633,63.41128921508789 l15.749063491821289,22.985023498535156 l10.22695541381836,-17.178443908691406 l12.498628616333008,25.767181396484375 l5.681398391723633,-22.735919952392578 l9.090009689331055,15.15727710723877 l16.64323616027832,-24.667219161987305 l-35.95909881591797,-62.73918533325195 z",
  style: "fill:#dbe3de;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
  "inkscape:connector-curvature": "0",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  style: "fill:#6f918a;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
  d: "M351.999698638916,583.1788330078125 L440.3755226135254,418.015380859375 L534.5830116271973,582.3802490234375 z",
  id: "path4138",
  "inkscape:connector-curvature": "0",
  "sodipodi:nodetypes": "cccc",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  "inkscape:connector-curvature": "0",
  style: "fill:#536c67;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
  d: "m439.92724990844727,418.8541259765625 l-87.92726135253906,164.32505798339844 l87.92726135253906,-0.38413676619529724 l0,-163.94093322753906 z",
  id: "path4150",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  id: "path4174",
  d: "m571.8421669006348,374.5059814453125 l-33.36227035522461,62.35038757324219 l15.749063491821289,22.985023498535156 l10.22695541381836,-17.178443908691406 l7.386250019073486,15.22761344909668 l0,-83.38459014892578 z",
  style: "fill:#b7c8be;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
  "inkscape:connector-curvature": "0",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  "inkscape:connector-curvature": "0",
  style: "fill:#dbe3de;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
  d: "m440.3757667541504,418.015380859375 l-26.791658401489258,50.07026290893555 l12.435637474060059,18.14923667907715 l8.075319290161133,-13.564294815063477 l9.869056701660156,20.346057891845703 l4.486096382141113,-17.952539443969727 l7.177572250366211,11.96835708618164 l13.141687393188477,-19.47751235961914 l-28.393705368041992,-49.53956985473633 z",
  id: "path4140",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  "inkscape:connector-curvature": "0",
  style: "fill:#b7c8be;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
  d: "m439.92724990844727,418.8541259765625 l-26.34322166442871,49.23257064819336 l12.435637474060059,18.14923667907715 l8.075319290161133,-13.564294815063477 l5.8322672843933105,12.023898124694824 l0,-65.8414077758789 z",
  id: "path4152",
  "stroke-width": "0"
})), /*#__PURE__*/React.createElement("rect", {
  ry: "30.33986473083496",
  y: "-334.43114471435524",
  x: "1835.7710399627686",
  height: "83.0354232788086",
  width: "669.0738525390625",
  id: "rect4200",
  style: "opacity:1;fill:#88aa00;fill-opacity:1;stroke:none;stroke-opacity:1",
  transform: "matrix(0.561871, 0, 0, 0.499668, -701, 741.506)",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  "sodipodi:nodetypes": "cscscc",
  "inkscape:connector-curvature": "0",
  id: "path4215",
  d: "m321.10397720336914,610.015380859375 c0,0 37.72563552856445,42.82870101928711 80.26730346679688,59.24637222290039 c42.541664123535156,16.41766929626465 107.55818176269531,62.815433502197266 107.55818176269531,62.815433502197266 c0,0 93.11005401611328,-55.67731857299805 120.40094757080078,-62.8154411315918 c45.45944595336914,-11.89023494720459 84.28067016601562,-63.52924728393555 84.28067016601562,-63.52924728393555 z",
  style: "fill:#5a351c;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  style: "opacity:1;fill:#3e2311;fill-opacity:1;stroke:none;stroke-opacity:1",
  d: "m508.903018951416,607.9673461914062 l-187.79885864257812,2.0484447479248047 c0,0 37.72578811645508,42.82913589477539 80.26744842529297,59.246795654296875 c42.49297332763672,16.39887809753418 107.3828353881836,62.690208435058594 107.53137969970703,62.796199798583984 l0,-124.09144592285156 z",
  id: "rect4368",
  "inkscape:connector-curvature": "0",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("rect", {
  ry: "17.219924926757812",
  y: "-312.0754928588865",
  x: "1803.8343486785889",
  height: "67.06707000732422",
  width: "731.3504638671875",
  id: "rect4202",
  style: "opacity:1;fill:#668000;fill-opacity:1;stroke:none;stroke-opacity:1",
  transform: "matrix(0.561871, 0, 0, 0.499668, -701, 741.506)",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("rect", {
  y: "-366.16625213623024",
  x: "2491.74822807312",
  height: "77.78174591064453",
  width: "13.131982803344727",
  id: "rect4245",
  style: "opacity:1;fill:#784421;fill-opacity:1;stroke:none;stroke-opacity:1",
  transform: "matrix(0.561871, 0, 0, 0.499668, -701, 741.506)",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  id: "path4247",
  d: "m702.1624794006348,493.43365478515625 a29.230138778686523,24.732315063476562 0 0 0 -29.229368209838867,24.73260498046875 a29.230138778686523,24.732315063476562 0 0 0 0.1569305956363678,2.338292121887207 a29.230138778686523,24.732315063476562 0 0 0 -16.9011287689209,22.39333724975586 a29.230138778686523,24.732315063476562 0 0 0 29.230470657348633,24.732601165771484 a29.230138778686523,24.732315063476562 0 0 0 16.659696578979492,-4.445288181304932 a29.230138778686523,24.732315063476562 0 0 0 16.260242462158203,4.19350528717041 a29.230138778686523,24.732315063476562 0 0 0 29.229368209838867,-24.73260498046875 a29.230138778686523,24.732315063476562 0 0 0 -16.312915802001953,-22.15228843688965 a29.230138778686523,24.732315063476562 0 0 0 0.13717518746852875,-2.32755446434021 a29.230138778686523,24.732315063476562 0 0 0 -29.230470657348633,-24.73260498046875 z",
  style: "opacity:1;fill:#88aa00;fill-opacity:1;stroke:none;stroke-opacity:1",
  "inkscape:connector-curvature": "0",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  id: "rect4271",
  d: "m702.1624794006348,493.43365478515625 a29.230138778686523,24.732315063476562 0 0 0 -29.229368209838867,24.73260498046875 a29.230138778686523,24.732315063476562 0 0 0 0.1569305956363678,2.338292121887207 a29.230138778686523,24.732315063476562 0 0 0 -16.9011287689209,22.39333724975586 a29.230138778686523,24.732315063476562 0 0 0 29.230470657348633,24.732601165771484 a29.230138778686523,24.732315063476562 0 0 0 16.659696578979492,-4.445288181304932 a29.230138778686523,24.732315063476562 0 0 0 0.9349871277809143,0.4752694368362427 l0,-70.20143127441406 a29.230138778686523,24.732315063476562 0 0 0 -0.8515886664390564,-0.025383148342370987 z",
  style: "opacity:1;fill:#668000;fill-opacity:1;stroke:none;stroke-opacity:1",
  "inkscape:connector-curvature": "0",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("rect", {
  y: "-381.014579772949",
  x: "1841.2505474090576",
  height: "78.57142639160156",
  width: "14.285714149475098",
  id: "rect4276",
  style: "opacity:1;fill:#a05a2c;fill-opacity:1;stroke:none;stroke-opacity:1",
  transform: "matrix(0.561871, 0, 0, 0.499668, -701, 741.506)",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  "sodipodi:nodetypes": "cccc",
  "inkscape:connector-curvature": "0",
  id: "path4278",
  d: "m317.0906105041504,570.7548828125 l40.53499221801758,0 l-20.46816635131836,-28.195560455322266 z",
  style: "fill:#89a02c;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  "inkscape:connector-curvature": "0",
  id: "rect4280",
  d: "m337.15695571899414,542.5599975585938 l-20.0660400390625,28.196125030517578 l20.46769142150879,0 l0,-27.642780303955078 l-0.40165355801582336,-0.5533425211906433 z",
  style: "opacity:1;fill:#677821;fill-opacity:1;stroke:none;stroke-opacity:1",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  style: "fill:#89a02c;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
  d: "m317.0906105041504,570.7548828125 l40.53499221801758,0 l-20.46816635131836,-28.195560455322266 z",
  id: "path4295",
  "inkscape:connector-curvature": "0",
  "sodipodi:nodetypes": "cccc",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  style: "opacity:1;fill:#677821;fill-opacity:1;stroke:none;stroke-opacity:1",
  d: "m337.15695571899414,542.5599975585938 l-20.0660400390625,28.196125030517578 l20.46769142150879,0 l0,-27.642780303955078 l-0.40165355801582336,-0.5533425211906433 z",
  id: "path4297",
  "inkscape:connector-curvature": "0",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  "sodipodi:nodetypes": "cccc",
  "inkscape:connector-curvature": "0",
  id: "path4303",
  d: "m317.0906105041504,563.9134521484375 l40.53499221801758,0 l-20.46816635131836,-28.195560455322266 z",
  style: "fill:#abc837;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  "inkscape:connector-curvature": "0",
  id: "path4305",
  d: "m337.15695571899414,535.716552734375 l-20.0660400390625,28.196125030517578 l20.46769142150879,0 l0,-27.642780303955078 l-0.40165355801582336,-0.5533425211906433 z",
  style: "opacity:1;fill:#7c9128;fill-opacity:1;stroke:none;stroke-opacity:1",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  style: "fill:#afc941;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
  d: "m317.0906105041504,553.745849609375 l40.53499221801758,0 l-20.46816635131836,-28.195560455322266 z",
  id: "path4307",
  "inkscape:connector-curvature": "0",
  "sodipodi:nodetypes": "cccc",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  style: "opacity:1;fill:#92aa2f;fill-opacity:1;stroke:none;stroke-opacity:1",
  d: "m337.15695571899414,525.5509033203125 l-20.0660400390625,28.196125030517578 l20.46769142150879,0 l0,-27.642780303955078 l-0.40165355801582336,-0.5533425211906433 z",
  id: "path4309",
  "inkscape:connector-curvature": "0",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  "sodipodi:nodetypes": "cccc",
  "inkscape:connector-curvature": "0",
  id: "path4319",
  d: "m317.0906105041504,544.4093017578125 l40.53499221801758,0 l-20.46816635131836,-28.195560455322266 z",
  style: "fill:#b6d04f;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  "inkscape:connector-curvature": "0",
  id: "path4321",
  d: "m337.15695571899414,516.2124633789062 l-20.0660400390625,28.196125030517578 l20.46769142150879,0 l0,-27.642780303955078 l-0.40165355801582336,-0.5533425211906433 z",
  style: "opacity:1;fill:#a5c134;fill-opacity:1;stroke:none;stroke-opacity:1",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("rect", {
  y: "-383.68798065185524",
  x: "1949.6516704559326",
  height: "54.367774963378906",
  width: "9.885050773620605",
  id: "rect4276-0",
  style: "opacity:1;fill:#a05a2c;fill-opacity:1;stroke:none;stroke-opacity:1",
  transform: "matrix(0.561871, 0, 0, 0.499668, -701, 741.506)",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  "sodipodi:nodetypes": "cccc",
  "inkscape:connector-curvature": "0",
  id: "path4278-5",
  d: "m383.0668067932129,563.3727416992188 l28.048328399658203,0 l-14.163017272949219,-19.510021209716797 z",
  style: "fill:#89a02c;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  "inkscape:connector-curvature": "0",
  id: "rect4280-8",
  d: "m396.95178604125977,543.8629150390625 l-13.884767532348633,19.51041030883789 l14.162691116333008,0 l0,-19.127519607543945 l-0.27792391180992126,-0.3828907608985901 z",
  style: "opacity:1;fill:#677821;fill-opacity:1;stroke:none;stroke-opacity:1",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  style: "fill:#89a02c;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
  d: "m383.0668067932129,563.3727416992188 l28.048328399658203,0 l-14.163017272949219,-19.510021209716797 z",
  id: "path4295-2",
  "inkscape:connector-curvature": "0",
  "sodipodi:nodetypes": "cccc",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  style: "opacity:1;fill:#677821;fill-opacity:1;stroke:none;stroke-opacity:1",
  d: "m396.95178604125977,543.8629150390625 l-13.884767532348633,19.51041030883789 l14.162691116333008,0 l0,-19.127519607543945 l-0.27792391180992126,-0.3828907608985901 z",
  id: "path4297-6",
  "inkscape:connector-curvature": "0",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  "sodipodi:nodetypes": "cccc",
  "inkscape:connector-curvature": "0",
  id: "path4303-8",
  d: "m383.0668067932129,558.6385498046875 l28.048328399658203,0 l-14.163017272949219,-19.510021209716797 z",
  style: "fill:#abc837;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  "inkscape:connector-curvature": "0",
  id: "path4305-6",
  d: "m396.95178604125977,539.1267700195312 l-13.884767532348633,19.510404586791992 l14.162691116333008,0 l0,-19.127519607543945 l-0.27792391180992126,-0.38288575410842896 z",
  style: "opacity:1;fill:#7c9128;fill-opacity:1;stroke:none;stroke-opacity:1",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  style: "fill:#afc941;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
  d: "m383.0668067932129,551.6022338867188 l28.048328399658203,0 l-14.163017272949219,-19.510021209716797 z",
  id: "path4307-5",
  "inkscape:connector-curvature": "0",
  "sodipodi:nodetypes": "cccc",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  style: "opacity:1;fill:#92aa2f;fill-opacity:1;stroke:none;stroke-opacity:1",
  d: "m396.95178604125977,532.0924682617188 l-13.884767532348633,19.51041030883789 l14.162691116333008,0 l0,-19.127519607543945 l-0.27792391180992126,-0.3828907608985901 z",
  id: "path4309-2",
  "inkscape:connector-curvature": "0",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  "sodipodi:nodetypes": "cccc",
  "inkscape:connector-curvature": "0",
  id: "path4319-9",
  d: "m383.0668067932129,545.1410522460938 l28.048328399658203,0 l-14.163017272949219,-19.510019302368164 z",
  style: "fill:#b6d04f;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  "inkscape:connector-curvature": "0",
  id: "path4321-3",
  d: "m396.95178604125977,525.6311645507812 l-13.884767532348633,19.510404586791992 l14.162691116333008,0 l0,-19.127519607543945 l-0.27792391180992126,-0.38288575410842896 z",
  style: "opacity:1;fill:#a5c134;fill-opacity:1;stroke:none;stroke-opacity:1",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  id: "path4390",
  d: "m699.5636024475098,522.2152099609375 a21.27083396911621,17.981889724731445 0 0 0 -21.269887924194336,17.98219871520996 a21.27083396911621,17.981889724731445 0 0 0 21.269887924194336,17.98219871520996 a21.27083396911621,17.981889724731445 0 0 0 21.27099609375,-17.98219871520996 a21.27083396911621,17.981889724731445 0 0 0 -21.27099609375,-17.98219871520996 z",
  style: "opacity:1;fill:#88aa00;fill-opacity:1;stroke:none;stroke-opacity:1",
  "inkscape:connector-curvature": "0",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("rect", {
  y: "-402.236503601074",
  x: "2206.8574810028076",
  height: "84.79337310791016",
  width: "7.708488464355469",
  id: "rect4399",
  style: "opacity:1;fill:#784421;fill-opacity:1;stroke:none;stroke-opacity:1",
  transform: "matrix(0.561871, 0, 0, 0.499668, -701, 741.506)",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("ellipse", {
  ry: "43.761871337890625",
  rx: "46.407936096191406",
  cy: "-419.05236053466774",
  cx: "2208.371030807495",
  id: "path4401",
  style: "opacity:1;fill:#aad400;fill-opacity:1;stroke:none;stroke-opacity:1",
  transform: "matrix(0.561871, 0, 0, 0.499668, -701, 741.506)",
  "stroke-width": "0"
}), /*#__PURE__*/React.createElement("path", {
  "inkscape:connector-curvature": "0",
  id: "rect4403",
  d: "m539.8194007873535,510.253662109375 a26.075275421142578,21.866413116455078 0 0 0 -26.075023651123047,21.866104125976562 a26.075275421142578,21.866413116455078 0 0 0 26.075023651123047,21.866886138916016 a26.075275421142578,21.866413116455078 0 0 0 0.6863762140274048,-0.020436430349946022 l0,-43.683441162109375 a26.075275421142578,21.866413116455078 0 0 0 -0.6863762140274048,-0.02913065440952778 z",
  style: "opacity:1;fill:#88aa00;fill-opacity:1;stroke:none;stroke-opacity:1",
  "stroke-width": "0"
})), /*#__PURE__*/React.createElement("path", {
  "sodipodi:nodetypes": "ccscscc",
  "inkscape:connector-curvature": "0",
  id: "path4469",
  d: "m393.1651611328125,322.6317596435547 l53.78911590576172,0 c0,0 -0.8710747361183167,-10.8884859085083 -12.195104598999023,-13.501727104187012 c-11.32402515411377,-2.6132330894470215 -15.897184371948242,5.226475238800049 -15.897184371948242,5.226475238800049 c0,0 -5.226475238800049,-3.266545057296753 -11.10626220703125,0.6533116698265076 c-5.8797783851623535,3.919856548309326 -4.79093074798584,5.662010192871094 -4.79093074798584,5.662010192871094 z",
  style: "fill:#b7c4c8;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
  class: ""
}), /*#__PURE__*/React.createElement("path", {
  "inkscape:connector-curvature": "0",
  style: "opacity:1;fill:#93a7ac;fill-opacity:1;stroke:none;stroke-opacity:1",
  d: "m426.9194641113281,308.96275329589844 c-5.64824914932251,1.2665892839431763 -8.057548522949219,5.393733978271484 -8.057548522949219,5.393733978271484 c0,0 -5.226434707641602,-3.266580820083618 -11.10621166229248,0.6532710790634155 c-5.879782676696777,3.9198520183563232 -4.790998935699463,5.662159442901611 -4.790998935699463,5.662159442901611 l-9.79946231842041,1.9598084688186646 l33.75421905517578,0 l0,-13.668972969055176 z",
  id: "rect4476",
  class: ""
}), /*#__PURE__*/React.createElement("path", {
  style: "fill:#dbe3de;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
  d: "m575.4722137451172,342.65003967285156 c0.8337307572364807,0 41.26947021484375,0 41.26947021484375,0 c0,0 1.4590232372283936,-8.33726692199707 -3.5433433055877686,-10.421582221984863 c-5.00234842300415,-2.084320068359375 -8.545687675476074,1.4590187072753906 -8.545687675476074,1.4590187072753906 c0,0 -3.5433433055877686,-6.461385250091553 -11.463747024536133,-6.461385250091553 c-7.920403003692627,0 -8.96255874633789,6.87824821472168 -8.96255874633789,6.87824821472168 c0,0 -2.7096123695373535,-6.669814586639404 -12.297468185424805,-3.75177264213562 c-9.587851524353027,2.918046474456787 -7.71196985244751,12.297472953796387 -7.71196985244751,12.297472953796387 z",
  id: "path4495",
  "inkscape:connector-curvature": "0",
  class: ""
}), /*#__PURE__*/React.createElement("path", {
  "inkscape:connector-curvature": "0",
  style: "opacity:1;fill:#b7c8be;fill-opacity:1;stroke:none;stroke-opacity:1",
  d: "m593.1889801025391,327.2259979248047 c-7.920403003692627,0 -8.962550163269043,6.8784284591674805 -8.962550163269043,6.8784379959106445 c0,0 -2.7097434997558594,-6.669994354248047 -12.297595977783203,-3.751943826675415 c-9.58785629272461,2.918032646179199 -7.71183443069458,12.297591209411621 -7.71183443069458,12.297591209411621 l11.255228042602539,0 l19.592525482177734,0 l0,-15.297743797302246 c-0.5958198308944702,-0.0811285600066185 -1.2205075025558472,-0.126339390873909 -1.875773549079895,-0.126339390873909 z",
  id: "rect4497",
  class: ""
})));
},{}],"../website.jsx":[function(require,module,exports) {
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

require("./main/globals.sass");

require("css-baseline/css/2");

var anime = require("animejs").default;

var starContainer = require("./main/stars");

var campfire = require("./main/campfire");

var Card = require("./main/card");

var Spacer = require("./main/spacer");

var howdy = require("./main/howdy");

var campsite = require("./main/campsite");

var _require = require("./main/styles"),
    columnObj = _require.columnObj,
    rowObj = _require.rowObj;

var ContentCard = function ContentCard(_ref) {
  var title = _ref.title,
      titleColor = _ref.titleColor,
      titleStyle = _ref.titleStyle,
      content = _ref.content;
  return [/*#__PURE__*/React.createElement(Spacer, {
    size: "1.5rem"
  }), /*#__PURE__*/React.createElement(Card, {
    width: "50vw"
  }, /*#__PURE__*/React.createElement("h3", {
    style: _objectSpread({
      backgroundColor: titleColor,
      color: "white",
      display: "flex",
      padding: "1.9rem 2rem 1.35rem",
      width: "100%"
    }, titleStyle)
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "2rem",
      boxSizing: "border-box",
      width: "100%",
      fontSize: "15pt",
      lineHeight: "19pt",
      color: "var(--charcoal)"
    }
  }, content))];
};

var normalProfileContent = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: _objectSpread(_objectSpread({
    backgroundColor: "var(--teal)",
    width: "100%"
  }, columnObj), {}, {
    margin: "0",
    borderRadius: "3px"
  })
}, /*#__PURE__*/React.createElement(Spacer, null), howdy, /*#__PURE__*/React.createElement(Spacer, null)), /*#__PURE__*/React.createElement("div", {
  style: {
    width: "100%",
    height: "0.2rem",
    background: "white"
  }
}), /*#__PURE__*/React.createElement("img", {
  style: "width: 100%; height: 488px;",
  src: "https://user-images.githubusercontent.com/17692058/132935289-ede56d87-d623-46a2-86b1-22925edcb9bb.jpg"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    width: "100%",
    height: "0.2rem",
    background: "white"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    background: "white",
    width: "100%",
    padding: "2rem",
    fontSize: "12.5pt",
    boxSizing: "border-box",
    color: "hsl(180, 0%, 21%)",
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem"
  }
}, /*#__PURE__*/React.createElement("h3", null, "Jeff Hykin"), /*#__PURE__*/React.createElement(Spacer, {
  size: "0.2rem"
}), /*#__PURE__*/React.createElement("div", {
  style: {
    width: "100%",
    borderTop: "3px solid var(--charcoal)"
  }
}), /*#__PURE__*/React.createElement(Spacer, {
  size: "0.7rem"
}), /*#__PURE__*/React.createElement("span", {
  style: {
    lineHeight: "15.5pt"
  }
}, "I've been interested in visualization as long as I've been a programmer. I'm always looking ways to improve my illustrations, and this class seemed like a great opportunity to systematically approach the topic. I'm particularly interested in high dimension datasets and I love graph-theory visualizations.")));
var flippedProfileContent = /*#__PURE__*/React.createElement("div", {
  style: "transform: scaleX(-1);"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "2rem",
    fontSize: "14pt",
    color: "var(--charcoal)",
    lineHeight: "22pt"
  }
}, "This website was not created by a website-builder, a template, or a copy-paste codebase.", /*#__PURE__*/React.createElement(Spacer, null), /*#__PURE__*/React.createElement(Spacer, null), "Everything was hand coded, from the angle of the shooting stars in the background to the color pallet of the cards. This site does not even use a JavaScript framework (e.g. React, Vue, or Angular). The images in the background are all SVG's ready to be animated into action. Anime.js is the only major runtime library. Quik Stack (which uses Parcel.js and Express.js) was used for debugging/compiling the code."));
var profileCard, floatingLandscape, contentCards;
document.body = /*#__PURE__*/React.createElement("body", null, /*#__PURE__*/React.createElement("style", null, "\n        h3 {\n            font-size: 27pt;\n        }\n    "), /*#__PURE__*/React.createElement("div", {
  style: "width: 100vw; height: 100vh; position: fixed; top: 0; left: 0; z-index: -1; background: whitesmoke;"
}, starContainer), floatingLandscape = /*#__PURE__*/React.createElement("div", {
  style: {
    position: "fixed",
    top: "0",
    left: "600px",
    opacity: 0,
    transition: "all 0.3s ease-in-out 0s"
  }
}, campsite, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    top: "34.3rem",
    left: "18.5rem",
    transform: "scale(0.35)"
  }
}, campfire)), /*#__PURE__*/React.createElement("div", {
  id: "profile"
}, /*#__PURE__*/React.createElement("style", null, "\n            #profile {\n                position: fixed;\n                left: 5rem;\n                top: 6rem;\n                width: 500px;\n                overflow: visible;\n            }\n        "), profileCard = /*#__PURE__*/React.createElement(Card, {
  style: "\n                min-height: 50rem;\n            ",
  onmouseenter: function onmouseenter(eventObj) {
    console.log("mouseenter");
    profileCard.hasMouse = true;
    console.log("profileCard.hasMouse is:", profileCard.hasMouse);
    checkCardFlip(eventObj);
  },
  onmouseleave: function onmouseleave(eventObj) {
    console.log("mouseleave");
    profileCard.hasMouse = false;
    checkCardFlip(eventObj);
  }
}, normalProfileContent), contentCards = /*#__PURE__*/React.createElement("div", {
  style: _objectSpread(_objectSpread({
    position: "fixed",
    left: "680px",
    top: "0"
  }, columnObj), {}, {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    overflow: "scroll",
    maxHeight: "100vh",
    scrollbarWidth: "none",
    padding: "1rem",
    transition: "all 0.3s ease-in-out 0s"
  })
}, /*#__PURE__*/React.createElement(Spacer, {
  size: "4.5rem"
}), /*#__PURE__*/React.createElement(ContentCard, {
  title: "Great Visualizations",
  titleColor: "var(--green)",
  content: /*#__PURE__*/React.createElement("span", null, "While there are many visualizations I like, I would have to say my favorite is a tool called ", /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/FredrikNoren/ungit"
  }, "Ungit"), /*#__PURE__*/React.createElement(Spacer, null), /*#__PURE__*/React.createElement("div", {
    style: _objectSpread(_objectSpread({}, rowObj), {}, {
      minHeight: "210px"
    })
  }, /*#__PURE__*/React.createElement("img", {
    style: "width: 30%;",
    src: "https://user-images.githubusercontent.com/17692058/132936366-0b92c052-b350-420e-be97-b9532d0d7d98.png",
    alt: "",
    srcset: ""
  }), /*#__PURE__*/React.createElement("img", {
    style: "object-fit: cover; width: 70%",
    src: "https://user-images.githubusercontent.com/17692058/132936393-ce33424c-6410-4d22-8a4f-8bca703db9a7.png",
    alt: "",
    srcset: ""
  })), /*#__PURE__*/React.createElement(Spacer, null), "(A picture of the Ungit UI is on the right)", /*#__PURE__*/React.createElement(Spacer, null), "What makes it so great is that it allows for infinite 2D panning and highly interactive exploration of the commit-tree (graph) created by Git. Git has always had this elegant model of code, but without a tool like ungit it is completely stuck in our imaginations, and hidden behind a wall of text in the terminal. ", /*#__PURE__*/React.createElement("br", null))
}), /*#__PURE__*/React.createElement(ContentCard, {
  title: "Terrible Visualizations",
  titleColor: "var(--red)",
  content: /*#__PURE__*/React.createElement("span", null, "Similarly, while there are many I find horrifying, there is one that immediately comes to mind. Allow me to introduce my bank, Wells Fargo.", /*#__PURE__*/React.createElement(Spacer, null), "Sometimes the worst visualization is simply no visualization:", /*#__PURE__*/React.createElement(Spacer, null), /*#__PURE__*/React.createElement("img", {
    style: "object-fit: cover; width: 100%; max-width: 70rem;height: 482.5px;",
    src: "https://user-images.githubusercontent.com/17692058/132937010-11dd9cb7-0b7a-4041-9dde-c4efa464da53.png",
    alt: "",
    srcset: ""
  }), /*#__PURE__*/React.createElement(Spacer, null), "Whats income? Whats an expense? Are their any trends? Any clusters? We can't tell.", /*#__PURE__*/React.createElement(Spacer, null), "Make no mistake, this is a GUI application, not a file or a PDF or a terminal window. The data is being graphically displayed. Not only is there no average, no future projections, no indication of up/downward trends, but there is not so much as a 1% change in hue between a 1\xA2 charge and a $6,000 charge. There isn't even a color distinction between cashflow out and cashflow in. ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Spacer, null), "This format conveys the absolute rock-bottom minimum amount of insight. No format could provide less understanding without quite literally obfuscating the data itself.")
}), /*#__PURE__*/React.createElement(ContentCard, {
  title: "Project: Better C++ Syntax",
  titleColor: "var(--blue)",
  content: /*#__PURE__*/React.createElement("span", null, "As a programmer that likes design, natually I want my code to look good.", /*#__PURE__*/React.createElement(Spacer, null), "Right out of the box C++ is pretty ugly and confusing, but it is even worse without syntax highlighting. The highlighting in VS Code was pretty bad though, so I wrote ", /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/jeff-hykin/better-cpp-syntax"
  }, "a library"), " and fixed it.", /*#__PURE__*/React.createElement(Spacer, null), /*#__PURE__*/React.createElement("img", {
    style: "min-height: 479px; object-fit: cover; width: 100%; max-width: 70rem;",
    src: "https://user-images.githubusercontent.com/17692058/132951075-2159af24-5f6a-47cc-9655-923830a30eb0.png",
    alt: "",
    srcset: ""
  }))
}), /*#__PURE__*/React.createElement(ContentCard, {
  title: "Project: Silver Spectacle",
  titleColor: "var(--blue)",
  content: /*#__PURE__*/React.createElement("span", null, "MatplotLib is the go-to library for graphs and charts in Python. And the default design it has is absolutely hideous, both the code and the resulting graph.", /*#__PURE__*/React.createElement(Spacer, null), "I wanted something easy, beautiful, and customizable. Something that could leverage the power of tools like D3.js, and plotly. So I created a visualization library for Python called ", /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/jeff-hykin/silver_spectacle"
  }, "Silver Spectacle"), " that seemlessly takes advantage of the Web's powerful UI tools.", /*#__PURE__*/React.createElement(Spacer, null), "Here's part of the readme.md:", /*#__PURE__*/React.createElement(Spacer, null), /*#__PURE__*/React.createElement("img", {
    style: "object-fit: cover; width: 100%; max-width: 70rem;",
    src: "https://user-images.githubusercontent.com/17692058/132971482-cb32f8ab-9f6c-4756-9587-13802a41dd2e.png",
    alt: "",
    srcset: ""
  }), /*#__PURE__*/React.createElement("img", {
    style: "object-fit: cover; width: 100%; max-width: 70rem;",
    src: "https://user-images.githubusercontent.com/17692058/132971514-e940b90a-18d5-4811-837a-fc759e459671.png",
    alt: "",
    srcset: ""
  }))
}), /*#__PURE__*/React.createElement(Spacer, {
  size: "6.5rem"
}))));

var flipAnimation = function flipAnimation() {
  profileCard.isFlipping = true;
  anime({
    targets: profileCard,
    // opacity: [{value:1}, {value:0},{value:1, delay: 450} ],
    scale: [{
      value: 1
    }, {
      value: 1.05
    }, {
      value: 1,
      delay: 250
    }],
    rotateY: {
      value: "+=180",
      delay: 200
    },
    easing: "easeInOutSine",
    duration: 400,
    complete: function complete(anim) {
      profileCard.isFlipping = false;

      if (profileCard.hasMouse) {
        profileCard.children = [flippedProfileContent];
      } else {
        profileCard.children = [normalProfileContent];
      }
    }
  });
};

function checkCardFlip(eventObj) {
  // debounce
  if (profileCard.isFlipping) {
    return;
  }

  console.log("profileCard.hasMouse is:", profileCard.hasMouse);
  console.log("!checkCardFlip.isFlipped is:", !checkCardFlip.isFlipped);

  if (profileCard.hasMouse && !checkCardFlip.isFlipped) {
    checkCardFlip.isFlipped = true; // fade in

    anime({
      targets: flippedProfileContent,
      opacity: [{
        value: 0
      }, {
        value: 0
      }, {
        value: 1,
        delay: 450
      }],
      easing: "easeInOutSine",
      duration: 400
    }); // fade out

    anime({
      targets: normalProfileContent,
      opacity: [{
        value: 1
      }, {
        value: 0
      }],
      easing: "easeInOutSine",
      duration: 400
    }); // fade in

    floatingLandscape.style.opacity = 1; // fade out

    contentCards.style.opacity = 0; // start the flip animation

    flipAnimation();
  } else if (!profileCard.hasMouse && !!checkCardFlip.isFlipped) {
    checkCardFlip.isFlipped = false;
    anime({
      targets: normalProfileContent,
      opacity: [{
        value: 0
      }, {
        value: 0
      }, {
        value: 1,
        delay: 450
      }],
      easing: "easeInOutSine",
      duration: 400
    });
    anime({
      targets: flippedProfileContent,
      opacity: [{
        value: 1
      }, {
        value: 0
      }],
      easing: "easeInOutSine",
      duration: 400
    }); // fade in

    floatingLandscape.style.opacity = 0; // fade out

    contentCards.style.opacity = 1;
    flipAnimation();
  }
}

setInterval(checkCardFlip, 400);
document.body.style = "\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    font-size: 30pt; \n    font-family: sans-serif;\n";
},{"./main/globals.sass":"../main/globals.sass","css-baseline/css/2":"../node_modules/css-baseline/css/2.css","animejs":"../node_modules/animejs/lib/anime.es.js","./main/stars":"../main/stars.jsx","./main/campfire":"../main/campfire.jsx","./main/card":"../main/card.jsx","./main/spacer":"../main/spacer.jsx","./main/howdy":"../main/howdy.jsx","./main/campsite":"../main/campsite.jsx","./main/styles":"../main/styles.js"}],"../node_modules/.pnpm/parcel-bundler@1.12.5/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61899" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/.pnpm/parcel-bundler@1.12.5/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../website.jsx"], null)
//# sourceMappingURL=/website.baea1d43.js.map