/* Polyfill service v3.111.0
 * Disable minification (remove `.min` from URL path) for more info */

(function (self, undefined) {
  if (
    !("Date" in self && "now" in self.Date && "getTime" in self.Date.prototype)
  ) {
    Date.now = function e() {
      return new Date().getTime();
    };
  }
  if (
    !(
      "defineProperty" in Object &&
      (function () {
        try {
          var e = {};
          return Object.defineProperty(e, "test", { value: 42 }), !0;
        } catch (t) {
          return !1;
        }
      })()
    )
  ) {
    !(function (e) {
      var t = Object.prototype.hasOwnProperty.call(
          Object.prototype,
          "__defineGetter__"
        ),
        r =
          "A property cannot both have accessors and be writable or have a value";
      Object.defineProperty = function n(o, i, f) {
        if (
          e &&
          (o === window ||
            o === document ||
            o === Element.prototype ||
            o instanceof Element)
        )
          return e(o, i, f);
        if (null === o || !(o instanceof Object || "object" == typeof o))
          throw new TypeError("Object.defineProperty called on non-object");
        if (!(f instanceof Object))
          throw new TypeError("Property description must be an object");
        var c = String(i),
          a = "value" in f || "writable" in f,
          p = "get" in f && typeof f.get,
          s = "set" in f && typeof f.set;
        if (p) {
          if (p === undefined) return o;
          if ("function" !== p)
            throw new TypeError("Getter must be a function");
          if (!t)
            throw new TypeError(
              "Getters & setters cannot be defined on this javascript engine"
            );
          if (a) throw new TypeError(r);
          Object.__defineGetter__.call(o, c, f.get);
        } else o[c] = f.value;
        if (s) {
          if (s === undefined) return o;
          if ("function" !== s)
            throw new TypeError("Setter must be a function");
          if (!t)
            throw new TypeError(
              "Getters & setters cannot be defined on this javascript engine"
            );
          if (a) throw new TypeError(r);
          Object.__defineSetter__.call(o, c, f.set);
        }
        return "value" in f && (o[c] = f.value), o;
      };
    })(Object.defineProperty);
  }
  if (!("Window" in self)) {
    "undefined" == typeof WorkerGlobalScope &&
      "function" != typeof importScripts &&
      (function (o) {
        o.constructor
          ? (o.Window = o.constructor)
          : ((o.Window = o.constructor =
              new Function("return function Window() {}")()).prototype = self);
      })(self);
  }
  function ArrayCreate(r) {
    if ((1 / r == -Infinity && (r = 0), r > Math.pow(2, 32) - 1))
      throw new RangeError("Invalid array length");
    var n = [];
    return (n.length = r), n;
  }
  function Call(t, l) {
    var n = arguments.length > 2 ? arguments[2] : [];
    if (!1 === IsCallable(t))
      throw new TypeError(
        Object.prototype.toString.call(t) + "is not a function."
      );
    return t.apply(l, n);
  }
  function CreateDataProperty(e, r, t) {
    var a = { value: t, writable: !0, enumerable: !0, configurable: !0 };
    try {
      return Object.defineProperty(e, r, a), !0;
    } catch (n) {
      return !1;
    }
  }
  function CreateDataPropertyOrThrow(t, r, o) {
    var e = CreateDataProperty(t, r, o);
    if (!e)
      throw new TypeError(
        "Cannot assign value `" +
          Object.prototype.toString.call(o) +
          "` to property `" +
          Object.prototype.toString.call(r) +
          "` on object `" +
          Object.prototype.toString.call(t) +
          "`"
      );
    return e;
  }
  function CreateMethodProperty(e, r, t) {
    var a = { value: t, writable: !0, enumerable: !1, configurable: !0 };
    Object.defineProperty(e, r, a);
  }
  if (!("getPrototypeOf" in Object)) {
    CreateMethodProperty(Object, "getPrototypeOf", function t(o) {
      if (o !== Object(o))
        throw new TypeError("Object.getPrototypeOf called on non-object");
      var e = o.__proto__;
      return e || null === e
        ? e
        : "function" == typeof o.constructor && o instanceof o.constructor
        ? o.constructor.prototype
        : o instanceof Object
        ? Object.prototype
        : null;
    });
  }
  if (
    !(
      "keys" in Object &&
      (function () {
        return 2 === Object.keys(arguments).length;
      })(1, 2) &&
      (function () {
        try {
          return Object.keys(""), !0;
        } catch (t) {
          return !1;
        }
      })()
    )
  ) {
    CreateMethodProperty(
      Object,
      "keys",
      (function () {
        "use strict";
        function t() {
          var t;
          try {
            t = Object.create({});
          } catch (r) {
            return !0;
          }
          return o.call(t, "__proto__");
        }
        function r(t) {
          var r = n.call(t),
            e = "[object Arguments]" === r;
          return (
            e ||
              (e =
                "[object Array]" !== r &&
                null !== t &&
                "object" == typeof t &&
                "number" == typeof t.length &&
                t.length >= 0 &&
                "[object Function]" === n.call(t.callee)),
            e
          );
        }
        var e = Object.prototype.hasOwnProperty,
          n = Object.prototype.toString,
          o = Object.prototype.propertyIsEnumerable,
          c = !o.call({ toString: null }, "toString"),
          l = o.call(function () {}, "prototype"),
          i = [
            "toString",
            "toLocaleString",
            "valueOf",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "constructor",
          ],
          u = function (t) {
            var r = t.constructor;
            return r && r.prototype === t;
          },
          a = {
            $console: !0,
            $external: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $innerHeight: !0,
            $innerWidth: !0,
            $outerHeight: !0,
            $outerWidth: !0,
            $pageXOffset: !0,
            $pageYOffset: !0,
            $parent: !0,
            $scrollLeft: !0,
            $scrollTop: !0,
            $scrollX: !0,
            $scrollY: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0,
          },
          f = (function () {
            if ("undefined" == typeof window) return !1;
            for (var t in window)
              try {
                if (
                  !a["$" + t] &&
                  e.call(window, t) &&
                  null !== window[t] &&
                  "object" == typeof window[t]
                )
                  try {
                    u(window[t]);
                  } catch (r) {
                    return !0;
                  }
              } catch (r) {
                return !0;
              }
            return !1;
          })(),
          p = function (t) {
            if ("undefined" == typeof window || !f) return u(t);
            try {
              return u(t);
            } catch (r) {
              return !1;
            }
          };
        return function s(o) {
          var u = "[object Function]" === n.call(o),
            a = r(o),
            f = "[object String]" === n.call(o),
            s = [];
          if (o === undefined || null === o)
            throw new TypeError("Cannot convert undefined or null to object");
          var y = l && u;
          if (f && o.length > 0 && !e.call(o, 0))
            for (var h = 0; h < o.length; ++h) s.push(String(h));
          if (a && o.length > 0)
            for (var g = 0; g < o.length; ++g) s.push(String(g));
          else
            for (var w in o)
              (t() && "__proto__" === w) ||
                (y && "prototype" === w) ||
                !e.call(o, w) ||
                s.push(String(w));
          if (c)
            for (var d = p(o), $ = 0; $ < i.length; ++$)
              (d && "constructor" === i[$]) || !e.call(o, i[$]) || s.push(i[$]);
          return s;
        };
      })()
    );
  }
  function Get(n, t) {
    return n[t];
  }
  function HasOwnProperty(r, t) {
    return Object.prototype.hasOwnProperty.call(r, t);
  }
  function HasProperty(n, r) {
    return r in n;
  }
  function IsArray(r) {
    return "[object Array]" === Object.prototype.toString.call(r);
  }
  if (!("isArray" in Array)) {
    CreateMethodProperty(Array, "isArray", function r(e) {
      return IsArray(e);
    });
  }
  function IsCallable(n) {
    return "function" == typeof n;
  }
  if (!("bind" in Function.prototype)) {
    CreateMethodProperty(Function.prototype, "bind", function t(n) {
      var r = Array,
        o = Object,
        e = r.prototype,
        l = function g() {},
        p = e.slice,
        a = e.concat,
        i = e.push,
        c = Math.max,
        u = this;
      if (!IsCallable(u))
        throw new TypeError(
          "Function.prototype.bind called on incompatible " + u
        );
      for (
        var y,
          h = p.call(arguments, 1),
          s = function () {
            if (this instanceof y) {
              var t = u.apply(this, a.call(h, p.call(arguments)));
              return o(t) === t ? t : this;
            }
            return u.apply(n, a.call(h, p.call(arguments)));
          },
          f = c(0, u.length - h.length),
          b = [],
          d = 0;
        d < f;
        d++
      )
        i.call(b, "$" + d);
      return (
        (y = Function(
          "binder",
          "return function (" +
            b.join(",") +
            "){ return binder.apply(this, arguments); }"
        )(s)),
        u.prototype &&
          ((l.prototype = u.prototype),
          (y.prototype = new l()),
          (l.prototype = null)),
        y
      );
    });
  }
  function SameValueNonNumber(e, n) {
    return e === n;
  }
  function ToBoolean(o) {
    return Boolean(o);
  }
  function ToObject(e) {
    if (null === e || e === undefined) throw TypeError();
    return Object(e);
  }
  function GetV(t, e) {
    return ToObject(t)[e];
  }
  function GetMethod(e, n) {
    var r = GetV(e, n);
    if (null === r || r === undefined) return undefined;
    if (!1 === IsCallable(r)) throw new TypeError("Method not callable: " + n);
    return r;
  }
  function Type(e) {
    switch (typeof e) {
      case "undefined":
        return "undefined";
      case "boolean":
        return "boolean";
      case "number":
        return "number";
      case "string":
        return "string";
      case "symbol":
        return "symbol";
      default:
        return null === e
          ? "null"
          : "Symbol" in self &&
            (e instanceof self.Symbol || e.constructor === self.Symbol)
          ? "symbol"
          : "object";
    }
  }
  function GetPrototypeFromConstructor(t, o) {
    var r = Get(t, "prototype");
    return "object" !== Type(r) && (r = o), r;
  }
  function IsConstructor(t) {
    return "object" === Type(t) && "function" == typeof t && !!t.prototype;
  }
  function OrdinaryToPrimitive(r, t) {
    if ("string" === t) var e = ["toString", "valueOf"];
    else e = ["valueOf", "toString"];
    for (var i = 0; i < e.length; ++i) {
      var n = e[i],
        a = Get(r, n);
      if (IsCallable(a)) {
        var o = Call(a, r);
        if ("object" !== Type(o)) return o;
      }
    }
    throw new TypeError("Cannot convert to primitive.");
  }
  function SameValueZero(n, e) {
    return (
      Type(n) === Type(e) &&
      ("number" === Type(n)
        ? !(!isNaN(n) || !isNaN(e)) ||
          (1 / n === Infinity && 1 / e == -Infinity) ||
          (1 / n == -Infinity && 1 / e === Infinity) ||
          n === e
        : SameValueNonNumber(n, e))
    );
  }
  function ToInteger(n) {
    if ("symbol" === Type(n))
      throw new TypeError("Cannot convert a Symbol value to a number");
    var t = Number(n);
    return isNaN(t)
      ? 0
      : 1 / t === Infinity ||
        1 / t == -Infinity ||
        t === Infinity ||
        t === -Infinity
      ? t
      : (t < 0 ? -1 : 1) * Math.floor(Math.abs(t));
  }
  function ToLength(n) {
    var t = ToInteger(n);
    return t <= 0 ? 0 : Math.min(t, Math.pow(2, 53) - 1);
  }
  function ToPrimitive(e) {
    var t = arguments.length > 1 ? arguments[1] : undefined;
    if ("object" === Type(e)) {
      if (arguments.length < 2) var i = "default";
      else t === String ? (i = "string") : t === Number && (i = "number");
      var r =
        "function" == typeof self.Symbol &&
        "symbol" == typeof self.Symbol.toPrimitive
          ? GetMethod(e, self.Symbol.toPrimitive)
          : undefined;
      if (r !== undefined) {
        var n = Call(r, e, [i]);
        if ("object" !== Type(n)) return n;
        throw new TypeError("Cannot convert exotic object to primitive.");
      }
      return "default" === i && (i = "number"), OrdinaryToPrimitive(e, i);
    }
    return e;
  }
  function ToString(t) {
    switch (Type(t)) {
      case "symbol":
        throw new TypeError("Cannot convert a Symbol value to a string");
      case "object":
        return ToString(ToPrimitive(t, String));
      default:
        return String(t);
    }
  }
  if (!("forEach" in Array.prototype)) {
    CreateMethodProperty(Array.prototype, "forEach", function r(t) {
      var e = ToObject(this),
        n = e instanceof String ? e.split("") : e,
        o = ToLength(Get(e, "length"));
      if (!1 === IsCallable(t)) throw new TypeError(t + " is not a function");
      for (
        var a = arguments.length > 1 ? arguments[1] : undefined, i = 0;
        i < o;

      ) {
        var f = ToString(i);
        if (HasProperty(n, f)) {
          var l = Get(n, f);
          Call(t, a, [l, i, e]);
        }
        i += 1;
      }
      return undefined;
    });
  }
  if (!("includes" in Array.prototype)) {
    CreateMethodProperty(Array.prototype, "includes", function e(r) {
      "use strict";
      var t = ToObject(this),
        o = ToLength(Get(t, "length"));
      if (0 === o) return !1;
      var n = ToInteger(arguments[1]);
      if (n >= 0) var a = n;
      else (a = o + n) < 0 && (a = 0);
      for (; a < o; ) {
        var i = Get(t, ToString(a));
        if (SameValueZero(r, i)) return !0;
        a += 1;
      }
      return !1;
    });
  }
  if (!("indexOf" in Array.prototype)) {
    CreateMethodProperty(Array.prototype, "indexOf", function r(t) {
      var e = ToObject(this),
        n = ToLength(Get(e, "length"));
      if (0 === n) return -1;
      var i = ToInteger(arguments[1]);
      if (i >= n) return -1;
      if (i >= 0) var o = 1 / i == -Infinity ? 0 : i;
      else (o = n + i) < 0 && (o = 0);
      for (; o < n; ) {
        if (HasProperty(e, ToString(o))) {
          if (t === Get(e, ToString(o))) return o;
        }
        o += 1;
      }
      return -1;
    });
  }
  if (!("some" in Array.prototype)) {
    CreateMethodProperty(Array.prototype, "some", function r(e) {
      var t = ToObject(this),
        o = ToLength(Get(t, "length"));
      if (!1 === IsCallable(e)) throw new TypeError(e + " is not a function");
      for (
        var n = arguments.length > 1 ? arguments[1] : undefined, a = 0;
        a < o;

      ) {
        var i = ToString(a);
        if (HasProperty(t, i)) {
          var l = Get(t, i);
          if (ToBoolean(Call(e, n, [l, a, t]))) return !0;
        }
        a += 1;
      }
      return !1;
    });
  }
  function ToPropertyKey(r) {
    var i = ToPrimitive(r, String);
    return "symbol" === Type(i) ? i : ToString(i);
  }
  if (
    !(
      "getOwnPropertyDescriptor" in Object &&
      "function" == typeof Object.getOwnPropertyDescriptor &&
      (function () {
        try {
          return "3" === Object.getOwnPropertyDescriptor("13.7", 1).value;
        } catch (t) {
          return !1;
        }
      })()
    )
  ) {
    !(function () {
      var e = Object.getOwnPropertyDescriptor,
        t = function () {
          try {
            return (
              1 ===
              Object.defineProperty(document.createElement("div"), "one", {
                get: function () {
                  return 1;
                },
              }).one
            );
          } catch (e) {
            return !1;
          }
        },
        r = {}.toString,
        n = "".split;
      CreateMethodProperty(
        Object,
        "getOwnPropertyDescriptor",
        function c(o, i) {
          var a = ToObject(o);
          a =
            ("string" === Type(a) || a instanceof String) &&
            "[object String]" == r.call(o)
              ? n.call(o, "")
              : Object(o);
          var u = ToPropertyKey(i);
          if (t)
            try {
              return e(a, u);
            } catch (l) {}
          if (HasOwnProperty(a, u))
            return {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: a[u],
            };
        }
      );
    })();
  }
  if (!("defineProperties" in Object)) {
    CreateMethodProperty(Object, "defineProperties", function e(r, t) {
      if ("object" !== Type(r))
        throw new TypeError("Object.defineProperties called on non-object");
      for (
        var o = ToObject(t), n = Object.keys(o), c = [], i = 0;
        i < n.length;
        i++
      ) {
        var b = n[i],
          f = Object.getOwnPropertyDescriptor(o, b);
        if (f !== undefined && f.enumerable) {
          var p = Get(o, b),
            a = p;
          c.push([b, a]);
        }
      }
      for (var j = 0; j < c.length; j++) {
        var d = c[j][0];
        (a = c[j][1]), Object.defineProperty(r, d, a);
      }
      return r;
    });
  }
  if (!("create" in Object)) {
    !(function () {
      function e() {}
      if ({ __proto__: null } instanceof Object)
        t = function () {
          var e = document.createElement("iframe");
          e.style.display = "none";
          var o = document.body || document.documentElement;
          o.appendChild(e), (e.src = "javascript:");
          var n = e.contentWindow.Object.prototype;
          o.removeChild(e),
            (e = null),
            delete n.constructor,
            delete n.hasOwnProperty,
            delete n.propertyIsEnumerable,
            delete n.isPrototypeOf,
            delete n.toLocaleString,
            delete n.toString,
            delete n.valueOf;
          var r = function l() {};
          return (
            (r.prototype = n),
            (t = function () {
              return new r();
            }),
            new r()
          );
        };
      else
        var t = function () {
          return { __proto__: null };
        };
      CreateMethodProperty(Object, "create", function o(n, r) {
        if ("object" !== Type(n) && "null" !== Type(n))
          throw new TypeError("Object prototype may only be an Object or null");
        if ("null" === Type(n)) var l = t();
        else
          (e.prototype = n),
            (l = new e()),
            (l.__proto__ = n),
            (l.constructor.prototype = n),
            (l.__proto__ = n);
        return 1 in arguments ? Object.defineProperties(l, r) : l;
      });
    })();
  }
  function OrdinaryCreateFromConstructor(r, e) {
    var t = arguments[2] || {},
      o = GetPrototypeFromConstructor(r, e),
      a = Object.create(o);
    for (var n in t)
      Object.prototype.hasOwnProperty.call(t, n) &&
        Object.defineProperty(a, n, {
          configurable: !0,
          enumerable: !1,
          writable: !0,
          value: t[n],
        });
    return a;
  }
  function Construct(r) {
    var t = arguments.length > 2 ? arguments[2] : r,
      o = arguments.length > 1 ? arguments[1] : [];
    if (!IsConstructor(r)) throw new TypeError("F must be a constructor.");
    if (!IsConstructor(t))
      throw new TypeError("newTarget must be a constructor.");
    if (t === r)
      return new (Function.prototype.bind.apply(r, [null].concat(o)))();
    var n = OrdinaryCreateFromConstructor(t, Object.prototype);
    return Call(r, n, o);
  }
  function ArraySpeciesCreate(e, r) {
    if ((0 === r && 1 / r == -Infinity && (r = 0), !1 === IsArray(e)))
      return ArrayCreate(r);
    var n = Get(e, "constructor");
    if (
      ("object" === Type(n) &&
        null ===
          (n =
            "Symbol" in self && "species" in self.Symbol
              ? Get(n, self.Symbol.species)
              : undefined) &&
        (n = undefined),
      n === undefined)
    )
      return ArrayCreate(r);
    if (!IsConstructor(n)) throw new TypeError("C must be a constructor");
    return Construct(n, [r]);
  }
  if (!("filter" in Array.prototype)) {
    CreateMethodProperty(Array.prototype, "filter", function r(e) {
      var t = ToObject(this),
        o = ToLength(Get(t, "length"));
      if (!1 === IsCallable(e)) throw new TypeError(e + " is not a function");
      for (
        var a = arguments.length > 1 ? arguments[1] : undefined,
          n = ArraySpeciesCreate(t, 0),
          i = 0,
          l = 0;
        i < o;

      ) {
        var f = ToString(i);
        if (HasProperty(t, f)) {
          var h = Get(t, f);
          ToBoolean(Call(e, a, [h, i, t])) &&
            (CreateDataPropertyOrThrow(n, ToString(l), h), (l += 1));
        }
        i += 1;
      }
      return n;
    });
  }
  if (!("map" in Array.prototype)) {
    CreateMethodProperty(Array.prototype, "map", function r(e) {
      var t = ToObject(this),
        a = ToLength(Get(t, "length"));
      if (!1 === IsCallable(e)) throw new TypeError(e + " is not a function");
      for (
        var o = arguments.length > 1 ? arguments[1] : undefined,
          n = ArraySpeciesCreate(t, a),
          i = 0;
        i < a;

      ) {
        var p = ToString(i);
        if (HasProperty(t, p)) {
          var h = Get(t, p),
            l = Call(e, o, [h, i, t]);
          CreateDataPropertyOrThrow(n, p, l);
        }
        i += 1;
      }
      return n;
    });
  }
  if (!("document" in self && "Document" in self)) {
    "undefined" == typeof WorkerGlobalScope &&
      "function" != typeof importScripts &&
      (self.HTMLDocument
        ? (self.Document = self.HTMLDocument)
        : ((self.Document =
            self.HTMLDocument =
            document.constructor =
              new Function("return function Document() {}")()),
          (self.Document.prototype = document)));
  }
  if (!("Element" in self && "HTMLElement" in self)) {
    !(function () {
      function e() {
        return (
          l-- || clearTimeout(t),
          !(
            !document.body ||
            document.body.prototype ||
            !/(complete|interactive)/.test(document.readyState)
          ) &&
            (m(document, !0),
            t && document.body.prototype && clearTimeout(t),
            !!document.body.prototype)
        );
      }
      if (!("Element" in self && "HTMLElement" in self)) {
        if (window.Element && !window.HTMLElement)
          return void (window.HTMLElement = window.Element);
        window.Element = window.HTMLElement = new Function(
          "return function Element() {}"
        )();
        var t,
          n = document.appendChild(document.createElement("body")),
          o = n.appendChild(document.createElement("iframe")),
          r = o.contentWindow.document,
          c = (Element.prototype = r.appendChild(r.createElement("*"))),
          d = {},
          m = function (e, t) {
            var n,
              o,
              r,
              c = e.childNodes || [],
              u = -1;
            if (1 === e.nodeType && e.constructor !== Element) {
              e.constructor = Element;
              for (n in d) (o = d[n]), (e[n] = o);
            }
            for (; (r = t && c[++u]); ) m(r, t);
            return e;
          },
          u = document.getElementsByTagName("*"),
          i = document.createElement,
          l = 100;
        c.attachEvent("onpropertychange", function (e) {
          for (
            var t,
              n = e.propertyName,
              o = !Object.prototype.hasOwnProperty.call(d, n),
              r = c[n],
              m = d[n],
              i = -1;
            (t = u[++i]);

          )
            1 === t.nodeType && (o || t[n] === m) && (t[n] = r);
          d[n] = r;
        }),
          (c.constructor = Element),
          c.hasAttribute ||
            (c.hasAttribute = function a(e) {
              return null !== this.getAttribute(e);
            }),
          e() || ((document.onreadystatechange = e), (t = setInterval(e, 25))),
          (document.createElement = function p(e) {
            var t = i(String(e).toLowerCase());
            return m(t);
          }),
          document.removeChild(n);
      }
    })();
  }
  if (
    !(function (n) {
      if (!("Event" in n)) return !1;
      try {
        return new Event("click"), !0;
      } catch (t) {
        return !1;
      }
    })(self)
  ) {
    !(function () {
      function e(e, t) {
        if (!e) throw new Error("Not enough arguments");
        var n;
        if ("createEvent" in document) {
          n = document.createEvent("Event");
          var o = !(!t || t.bubbles === undefined) && t.bubbles,
            i = !(!t || t.cancelable === undefined) && t.cancelable;
          return n.initEvent(e, o, i), n;
        }
        return (
          (n = document.createEventObject()),
          (n.type = e),
          (n.bubbles = !(!t || t.bubbles === undefined) && t.bubbles),
          (n.cancelable = !(!t || t.cancelable === undefined) && t.cancelable),
          n
        );
      }
      var t = {
        click: 1,
        dblclick: 1,
        keyup: 1,
        keypress: 1,
        keydown: 1,
        mousedown: 1,
        mouseup: 1,
        mousemove: 1,
        mouseover: 1,
        mouseenter: 1,
        mouseleave: 1,
        mouseout: 1,
        storage: 1,
        storagecommit: 1,
        textinput: 1,
      };
      if ("undefined" != typeof document && "undefined" != typeof window) {
        var n = (window.Event && window.Event.prototype) || null;
        (e.NONE = 0),
          (e.CAPTURING_PHASE = 1),
          (e.AT_TARGET = 2),
          (e.BUBBLING_PHASE = 3),
          (window.Event = Window.prototype.Event = e),
          n &&
            Object.defineProperty(window.Event, "prototype", {
              configurable: !1,
              enumerable: !1,
              writable: !0,
              value: n,
            }),
          "createEvent" in document ||
            ((window.addEventListener =
              Window.prototype.addEventListener =
              Document.prototype.addEventListener =
              Element.prototype.addEventListener =
                function o() {
                  var e = this,
                    n = arguments[0],
                    o = arguments[1];
                  if (e === window && n in t)
                    throw new Error(
                      "In IE8 the event: " +
                        n +
                        " is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information."
                    );
                  e._events || (e._events = {}),
                    e._events[n] ||
                      ((e._events[n] = function (t) {
                        var n,
                          o = e._events[t.type].list,
                          i = o.slice(),
                          r = -1,
                          c = i.length;
                        for (
                          t.preventDefault = function a() {
                            !1 !== t.cancelable && (t.returnValue = !1);
                          },
                            t.stopPropagation = function l() {
                              t.cancelBubble = !0;
                            },
                            t.stopImmediatePropagation = function s() {
                              (t.cancelBubble = !0), (t.cancelImmediate = !0);
                            },
                            t.currentTarget = e,
                            t.relatedTarget = t.fromElement || null,
                            t.target = t.target || t.srcElement || e,
                            t.timeStamp = new Date().getTime(),
                            t.clientX &&
                              ((t.pageX =
                                t.clientX +
                                document.documentElement.scrollLeft),
                              (t.pageY =
                                t.clientY +
                                document.documentElement.scrollTop));
                          ++r < c && !t.cancelImmediate;

                        )
                          r in i &&
                            ((n = i[r]),
                            o.includes(n) &&
                              "function" == typeof n &&
                              n.call(e, t));
                      }),
                      (e._events[n].list = []),
                      e.attachEvent && e.attachEvent("on" + n, e._events[n])),
                    e._events[n].list.push(o);
                }),
            (window.removeEventListener =
              Window.prototype.removeEventListener =
              Document.prototype.removeEventListener =
              Element.prototype.removeEventListener =
                function i() {
                  var e,
                    t = this,
                    n = arguments[0],
                    o = arguments[1];
                  t._events &&
                    t._events[n] &&
                    t._events[n].list &&
                    -1 !== (e = t._events[n].list.indexOf(o)) &&
                    (t._events[n].list.splice(e, 1),
                    t._events[n].list.length ||
                      (t.detachEvent && t.detachEvent("on" + n, t._events[n]),
                      delete t._events[n]));
                }),
            (window.dispatchEvent =
              Window.prototype.dispatchEvent =
              Document.prototype.dispatchEvent =
              Element.prototype.dispatchEvent =
                function r(e) {
                  if (!arguments.length)
                    throw new Error("Not enough arguments");
                  if (!e || "string" != typeof e.type)
                    throw new Error("DOM Events Exception 0");
                  var t = this,
                    n = e.type;
                  try {
                    if (!e.bubbles) {
                      e.cancelBubble = !0;
                      var o = function (e) {
                        (e.cancelBubble = !0),
                          (t || window).detachEvent("on" + n, o);
                      };
                      this.attachEvent("on" + n, o);
                    }
                    this.fireEvent("on" + n, e);
                  } catch (i) {
                    e.target = t;
                    do {
                      (e.currentTarget = t),
                        "_events" in t &&
                          "function" == typeof t._events[n] &&
                          t._events[n].call(t, e),
                        "function" == typeof t["on" + n] &&
                          t["on" + n].call(t, e),
                        (t = 9 === t.nodeType ? t.parentWindow : t.parentNode);
                    } while (t && !e.cancelBubble);
                  }
                  return !0;
                }),
            document.attachEvent("onreadystatechange", function () {
              "complete" === document.readyState &&
                document.dispatchEvent(
                  new e("DOMContentLoaded", { bubbles: !0 })
                );
            }));
      }
    })();
  }
  if (!("getComputedStyle" in self)) {
    !(function (t) {
      function e(t, o, r) {
        var n,
          i = (t.document &&
            t.currentStyle[o].match(/([\d.]+)(%|cm|em|in|mm|pc|pt|)/)) || [
            0,
            0,
            "",
          ],
          l = i[1],
          u = i[2];
        return (
          (r = r
            ? /%|em/.test(u) && t.parentElement
              ? e(t.parentElement, "fontSize", null)
              : 16
            : r),
          (n =
            "fontSize" == o
              ? r
              : /width/i.test(o)
              ? t.clientWidth
              : t.clientHeight),
          "%" == u
            ? (l / 100) * n
            : "cm" == u
            ? 0.3937 * l * 96
            : "em" == u
            ? l * r
            : "in" == u
            ? 96 * l
            : "mm" == u
            ? (0.3937 * l * 96) / 10
            : "pc" == u
            ? (12 * l * 96) / 72
            : "pt" == u
            ? (96 * l) / 72
            : l
        );
      }
      function o(t, e) {
        var o = "border" == e ? "Width" : "",
          r = e + "Top" + o,
          n = e + "Right" + o,
          i = e + "Bottom" + o,
          l = e + "Left" + o;
        t[e] = (
          t[r] == t[n] && t[r] == t[i] && t[r] == t[l]
            ? [t[r]]
            : t[r] == t[i] && t[l] == t[n]
            ? [t[r], t[n]]
            : t[l] == t[n]
            ? [t[r], t[n], t[i]]
            : [t[r], t[n], t[i], t[l]]
        ).join(" ");
      }
      function r(t) {
        var r,
          n = this,
          i = t.currentStyle,
          l = e(t, "fontSize"),
          u = function (t) {
            return "-" + t.toLowerCase();
          };
        for (r in i)
          if (
            (Array.prototype.push.call(
              n,
              "styleFloat" == r ? "float" : r.replace(/[A-Z]/, u)
            ),
            "width" == r)
          )
            n[r] = t.offsetWidth + "px";
          else if ("height" == r) n[r] = t.offsetHeight + "px";
          else if ("styleFloat" == r) n["float"] = i[r];
          else if (/margin.|padding.|border.+W/.test(r) && "auto" != n[r])
            n[r] = Math.round(e(t, r, l)) + "px";
          else if (/^outline/.test(r))
            try {
              n[r] = i[r];
            } catch (c) {
              (n.outlineColor = i.color),
                (n.outlineStyle = n.outlineStyle || "none"),
                (n.outlineWidth = n.outlineWidth || "0px"),
                (n.outline = [
                  n.outlineColor,
                  n.outlineWidth,
                  n.outlineStyle,
                ].join(" "));
            }
          else n[r] = i[r];
        o(n, "margin"),
          o(n, "padding"),
          o(n, "border"),
          (n.fontSize = Math.round(l) + "px");
      }
      (r.prototype = {
        constructor: r,
        getPropertyPriority: function () {
          throw new Error("NotSupportedError: DOM Exception 9");
        },
        getPropertyValue: function (t) {
          return this[
            t.replace(/-\w/g, function (t) {
              return t[1].toUpperCase();
            })
          ];
        },
        item: function (t) {
          return this[t];
        },
        removeProperty: function () {
          throw new Error("NoModificationAllowedError: DOM Exception 7");
        },
        setProperty: function () {
          throw new Error("NoModificationAllowedError: DOM Exception 7");
        },
        getPropertyCSSValue: function () {
          throw new Error("NotSupportedError: DOM Exception 9");
        },
      }),
        (t.getComputedStyle = function n(t) {
          return new r(t);
        });
    })(self);
  }
  if (!("performance" in self && "now" in self.performance)) {
    !(function (n) {
      var e = Date.now();
      n.performance || (n.performance = {}),
        (n.performance.now = function () {
          return Date.now() - e;
        });
    })(self);
  }
  if (
    !(
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
    )
  ) {
    !(function (t, e) {
      "use strict";
      function n(t) {
        (this.time = t.time),
          (this.target = t.target),
          (this.rootBounds = t.rootBounds),
          (this.boundingClientRect = t.boundingClientRect),
          (this.intersectionRect = t.intersectionRect || u());
        try {
          this.isIntersecting = !!t.intersectionRect;
        } catch (r) {}
        var e = this.boundingClientRect,
          n = e.width * e.height,
          o = this.intersectionRect,
          i = o.width * o.height;
        this.intersectionRatio = n
          ? Number((i / n).toFixed(4))
          : this.isIntersecting
          ? 1
          : 0;
      }
      function o(t, e) {
        var n = e || {};
        if ("function" != typeof t)
          throw new Error("callback must be a function");
        if (n.root && 1 != n.root.nodeType)
          throw new Error("root must be an Element");
        (this._checkForIntersections = r(
          this._checkForIntersections.bind(this),
          this.THROTTLE_TIMEOUT
        )),
          (this._callback = t),
          (this._observationTargets = []),
          (this._queuedEntries = []),
          (this._rootMarginValues = this._parseRootMargin(n.rootMargin)),
          (this.thresholds = this._initThresholds(n.threshold)),
          (this.root = n.root || null),
          (this.rootMargin = this._rootMarginValues
            .map(function (t) {
              return t.value + t.unit;
            })
            .join(" "));
      }
      function i() {
        return t.performance && performance.now && performance.now();
      }
      function r(t, e) {
        var n = null;
        return function () {
          n ||
            (n = setTimeout(function () {
              t(), (n = null);
            }, e));
        };
      }
      function s(t, e, n, o) {
        "function" == typeof t.addEventListener
          ? t.addEventListener(e, n, o || !1)
          : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n);
      }
      function h(t, e, n, o) {
        "function" == typeof t.removeEventListener
          ? t.removeEventListener(e, n, o || !1)
          : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n);
      }
      function c(t, e) {
        var n = Math.max(t.top, e.top),
          o = Math.min(t.bottom, e.bottom),
          i = Math.max(t.left, e.left),
          r = Math.min(t.right, e.right),
          s = r - i,
          h = o - n;
        return (
          s >= 0 &&
          h >= 0 && {
            top: n,
            bottom: o,
            left: i,
            right: r,
            width: s,
            height: h,
          }
        );
      }
      function a(t) {
        var e;
        try {
          e = t.getBoundingClientRect();
        } catch (n) {}
        return e
          ? ((e.width && e.height) ||
              (e = {
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                width: e.right - e.left,
                height: e.bottom - e.top,
              }),
            e)
          : u();
      }
      function u() {
        return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
      }
      function l(t, e) {
        for (var n = e; n; ) {
          if (n == t) return !0;
          n = p(n);
        }
        return !1;
      }
      function p(t) {
        var e = t.parentNode;
        return e && 11 == e.nodeType && e.host
          ? e.host
          : e && e.assignedSlot
          ? e.assignedSlot.parentNode
          : e;
      }
      if (
        !(
          "IntersectionObserver" in t &&
          "IntersectionObserverEntry" in t &&
          "intersectionRatio" in t.IntersectionObserverEntry.prototype
        )
      ) {
        var f = [];
        (o.prototype.THROTTLE_TIMEOUT = 100),
          (o.prototype.POLL_INTERVAL = null),
          (o.prototype.USE_MUTATION_OBSERVER = !0),
          (o.prototype.observe = function (t) {
            if (
              !this._observationTargets.some(function (e) {
                return e.element == t;
              })
            ) {
              if (!t || 1 != t.nodeType)
                throw new Error("target must be an Element");
              this._registerInstance(),
                this._observationTargets.push({ element: t, entry: null }),
                this._monitorIntersections(),
                this._checkForIntersections();
            }
          }),
          (o.prototype.unobserve = function (t) {
            (this._observationTargets = this._observationTargets.filter(
              function (e) {
                return e.element != t;
              }
            )),
              this._observationTargets.length ||
                (this._unmonitorIntersections(), this._unregisterInstance());
          }),
          (o.prototype.disconnect = function () {
            (this._observationTargets = []),
              this._unmonitorIntersections(),
              this._unregisterInstance();
          }),
          (o.prototype.takeRecords = function () {
            var t = this._queuedEntries.slice();
            return (this._queuedEntries = []), t;
          }),
          (o.prototype._initThresholds = function (t) {
            var e = t || [0];
            return (
              Array.isArray(e) || (e = [e]),
              e.sort().filter(function (t, e, n) {
                if ("number" != typeof t || isNaN(t) || t < 0 || t > 1)
                  throw new Error(
                    "threshold must be a number between 0 and 1 inclusively"
                  );
                return t !== n[e - 1];
              })
            );
          }),
          (o.prototype._parseRootMargin = function (t) {
            var e = t || "0px",
              n = e.split(/\s+/).map(function (t) {
                var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                if (!e)
                  throw new Error(
                    "rootMargin must be specified in pixels or percent"
                  );
                return { value: parseFloat(e[1]), unit: e[2] };
              });
            return (
              (n[1] = n[1] || n[0]),
              (n[2] = n[2] || n[0]),
              (n[3] = n[3] || n[1]),
              n
            );
          }),
          (o.prototype._monitorIntersections = function () {
            this._monitoringIntersections ||
              ((this._monitoringIntersections = !0),
              this.POLL_INTERVAL
                ? (this._monitoringInterval = setInterval(
                    this._checkForIntersections,
                    this.POLL_INTERVAL
                  ))
                : (s(t, "resize", this._checkForIntersections, !0),
                  s(e, "scroll", this._checkForIntersections, !0),
                  this.USE_MUTATION_OBSERVER &&
                    "MutationObserver" in t &&
                    ((this._domObserver = new MutationObserver(
                      this._checkForIntersections
                    )),
                    this._domObserver.observe(e, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                    }))));
          }),
          (o.prototype._unmonitorIntersections = function () {
            this._monitoringIntersections &&
              ((this._monitoringIntersections = !1),
              clearInterval(this._monitoringInterval),
              (this._monitoringInterval = null),
              h(t, "resize", this._checkForIntersections, !0),
              h(e, "scroll", this._checkForIntersections, !0),
              this._domObserver &&
                (this._domObserver.disconnect(), (this._domObserver = null)));
          }),
          (o.prototype._checkForIntersections = function () {
            var t = this._rootIsInDom(),
              e = t ? this._getRootRect() : u();
            this._observationTargets.forEach(function (o) {
              var r = o.element,
                s = a(r),
                h = this._rootContainsTarget(r),
                c = o.entry,
                u = t && h && this._computeTargetAndRootIntersection(r, e),
                l = (o.entry = new n({
                  time: i(),
                  target: r,
                  boundingClientRect: s,
                  rootBounds: e,
                  intersectionRect: u,
                }));
              c
                ? t && h
                  ? this._hasCrossedThreshold(c, l) &&
                    this._queuedEntries.push(l)
                  : c && c.isIntersecting && this._queuedEntries.push(l)
                : this._queuedEntries.push(l);
            }, this),
              this._queuedEntries.length &&
                this._callback(this.takeRecords(), this);
          }),
          (o.prototype._computeTargetAndRootIntersection = function (n, o) {
            if ("none" != t.getComputedStyle(n).display) {
              for (var i = a(n), r = i, s = p(n), h = !1; !h; ) {
                var u = null,
                  l = 1 == s.nodeType ? t.getComputedStyle(s) : {};
                if ("none" == l.display) return;
                if (
                  (s == this.root || s == e
                    ? ((h = !0), (u = o))
                    : s != e.body &&
                      s != e.documentElement &&
                      "visible" != l.overflow &&
                      (u = a(s)),
                  u && !(r = c(u, r)))
                )
                  break;
                s = p(s);
              }
              return r;
            }
          }),
          (o.prototype._getRootRect = function () {
            var t;
            if (this.root) t = a(this.root);
            else {
              var n = e.documentElement,
                o = e.body;
              t = {
                top: 0,
                left: 0,
                right: n.clientWidth || o.clientWidth,
                width: n.clientWidth || o.clientWidth,
                bottom: n.clientHeight || o.clientHeight,
                height: n.clientHeight || o.clientHeight,
              };
            }
            return this._expandRectByRootMargin(t);
          }),
          (o.prototype._expandRectByRootMargin = function (t) {
            var e = this._rootMarginValues.map(function (e, n) {
                return "px" == e.unit
                  ? e.value
                  : (e.value * (n % 2 ? t.width : t.height)) / 100;
              }),
              n = {
                top: t.top - e[0],
                right: t.right + e[1],
                bottom: t.bottom + e[2],
                left: t.left - e[3],
              };
            return (
              (n.width = n.right - n.left), (n.height = n.bottom - n.top), n
            );
          }),
          (o.prototype._hasCrossedThreshold = function (t, e) {
            var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
              o = e.isIntersecting ? e.intersectionRatio || 0 : -1;
            if (n !== o)
              for (var i = 0; i < this.thresholds.length; i++) {
                var r = this.thresholds[i];
                if (r == n || r == o || r < n != r < o) return !0;
              }
          }),
          (o.prototype._rootIsInDom = function () {
            return !this.root || l(e, this.root);
          }),
          (o.prototype._rootContainsTarget = function (t) {
            return l(this.root || e, t);
          }),
          (o.prototype._registerInstance = function () {
            f.indexOf(this) < 0 && f.push(this);
          }),
          (o.prototype._unregisterInstance = function () {
            var t = f.indexOf(this);
            -1 != t && f.splice(t, 1);
          }),
          (t.IntersectionObserver = o),
          (t.IntersectionObserverEntry = n);
      }
    })(window, document);
  }
})(
  ("object" === typeof window && window) ||
    ("object" === typeof self && self) ||
    ("object" === typeof global && global) ||
    {}
);
