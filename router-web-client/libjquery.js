/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function (a, b) {
    function cy(a) {
        return f.isWindow(a)
            ? a
            : a.nodeType === 9
            ? a.defaultView || a.parentWindow
            : !1;
    }
    function cu(a) {
        if (!cj[a]) {
            var b = c.body,
                d = f("<" + a + ">").appendTo(b),
                e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                ck ||
                    ((ck = c.createElement("iframe")),
                    (ck.frameBorder = ck.width = ck.height = 0)),
                    b.appendChild(ck);
                if (!cl || !ck.createElement)
                    (cl = (ck.contentWindow || ck.contentDocument).document),
                        cl.write(
                            (f.support.boxModel ? "<!doctype html>" : "") +
                                "<html><body>"
                        ),
                        cl.close();
                (d = cl.createElement(a)),
                    cl.body.appendChild(d),
                    (e = f.css(d, "display")),
                    b.removeChild(ck);
            }
            cj[a] = e;
        }
        return cj[a];
    }
    function ct(a, b) {
        var c = {};
        f.each(cp.concat.apply([], cp.slice(0, b)), function () {
            c[this] = a;
        });
        return c;
    }
    function cs() {
        cq = b;
    }
    function cr() {
        setTimeout(cs, 0);
        return (cq = f.now());
    }
    function ci() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP");
        } catch (b) {}
    }
    function ch() {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {}
    }
    function cb(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes,
            e = {},
            g,
            h,
            i = d.length,
            j,
            k = d[0],
            l,
            m,
            n,
            o,
            p;
        for (g = 1; g < i; g++) {
            if (g === 1)
                for (h in a.converters)
                    typeof h == "string" &&
                        (e[h.toLowerCase()] = a.converters[h]);
            (l = k), (k = d[g]);
            if (k === "*") k = l;
            else if (l !== "*" && l !== k) {
                (m = l + " " + k), (n = e[m] || e["* " + k]);
                if (!n) {
                    p = b;
                    for (o in e) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = e[j[1] + " " + k];
                            if (p) {
                                (o = e[o]),
                                    o === !0 ? (n = p) : p === !0 && (n = o);
                                break;
                            }
                        }
                    }
                }
                !n &&
                    !p &&
                    f.error("No conversion from " + m.replace(" ", " to ")),
                    n !== !0 && (c = n ? n(c) : p(o(c)));
            }
        }
        return c;
    }
    function ca(a, c, d) {
        var e = a.contents,
            f = a.dataTypes,
            g = a.responseFields,
            h,
            i,
            j,
            k;
        for (i in g) i in d && (c[g[i]] = d[i]);
        while (f[0] === "*")
            f.shift(),
                h === b &&
                    (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h)
            for (i in e)
                if (e[i] && e[i].test(h)) {
                    f.unshift(i);
                    break;
                }
        if (f[0] in d) j = f[0];
        else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break;
                }
                k || (k = i);
            }
            j = j || k;
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j];
        }
    }
    function b_(a, b, c, d) {
        if (f.isArray(b))
            f.each(b, function (b, e) {
                c || bD.test(a)
                    ? d(a, e)
                    : b_(
                          a + "[" + (typeof e == "object" ? b : "") + "]",
                          e,
                          c,
                          d
                      );
            });
        else if (!c && f.type(b) === "object")
            for (var e in b) b_(a + "[" + e + "]", b[e], c, d);
        else d(a, b);
    }
    function b$(a, c) {
        var d,
            e,
            g = f.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e);
    }
    function bZ(a, c, d, e, f, g) {
        (f = f || c.dataTypes[0]), (g = g || {}), (g[f] = !0);
        var h = a[f],
            i = 0,
            j = h ? h.length : 0,
            k = a === bS,
            l;
        for (; i < j && (k || !l); i++)
            (l = h[i](c, d, e)),
                typeof l == "string" &&
                    (!k || g[l]
                        ? (l = b)
                        : (c.dataTypes.unshift(l), (l = bZ(a, c, d, e, l, g))));
        (k || !l) && !g["*"] && (l = bZ(a, c, d, e, "*", g));
        return l;
    }
    function bY(a) {
        return function (b, c) {
            typeof b != "string" && ((c = b), (b = "*"));
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bO),
                    e = 0,
                    g = d.length,
                    h,
                    i,
                    j;
                for (; e < g; e++)
                    (h = d[e]),
                        (j = /^\+/.test(h)),
                        j && (h = h.substr(1) || "*"),
                        (i = a[h] = a[h] || []),
                        i[j ? "unshift" : "push"](c);
            }
        };
    }
    function bB(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight,
            e = b === "width" ? 1 : 0,
            g = 4;
        if (d > 0) {
            if (c !== "border")
                for (; e < g; e += 2)
                    c || (d -= parseFloat(f.css(a, "padding" + bx[e])) || 0),
                        c === "margin"
                            ? (d += parseFloat(f.css(a, c + bx[e])) || 0)
                            : (d -=
                                  parseFloat(
                                      f.css(a, "border" + bx[e] + "Width")
                                  ) || 0);
            return d + "px";
        }
        d = by(a, b);
        if (d < 0 || d == null) d = a.style[b];
        if (bt.test(d)) return d;
        d = parseFloat(d) || 0;
        if (c)
            for (; e < g; e += 2)
                (d += parseFloat(f.css(a, "padding" + bx[e])) || 0),
                    c !== "padding" &&
                        (d +=
                            parseFloat(f.css(a, "border" + bx[e] + "Width")) ||
                            0),
                    c === "margin" &&
                        (d += parseFloat(f.css(a, c + bx[e])) || 0);
        return d + "px";
    }
    function bo(a) {
        var b = c.createElement("div");
        bh.appendChild(b), (b.innerHTML = a.outerHTML);
        return b.firstChild;
    }
    function bn(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input"
            ? bm(a)
            : b !== "script" &&
              typeof a.getElementsByTagName != "undefined" &&
              f.grep(a.getElementsByTagName("input"), bm);
    }
    function bm(a) {
        if (a.type === "checkbox" || a.type === "radio")
            a.defaultChecked = a.checked;
    }
    function bl(a) {
        return typeof a.getElementsByTagName != "undefined"
            ? a.getElementsByTagName("*")
            : typeof a.querySelectorAll != "undefined"
            ? a.querySelectorAll("*")
            : [];
    }
    function bk(a, b) {
        var c;
        b.nodeType === 1 &&
            (b.clearAttributes && b.clearAttributes(),
            b.mergeAttributes && b.mergeAttributes(a),
            (c = b.nodeName.toLowerCase()),
            c === "object"
                ? (b.outerHTML = a.outerHTML)
                : c !== "input" || (a.type !== "checkbox" && a.type !== "radio")
                ? c === "option"
                    ? (b.selected = a.defaultSelected)
                    : c === "input" || c === "textarea"
                    ? (b.defaultValue = a.defaultValue)
                    : c === "script" && b.text !== a.text && (b.text = a.text)
                : (a.checked && (b.defaultChecked = b.checked = a.checked),
                  b.value !== a.value && (b.value = a.value)),
            b.removeAttribute(f.expando),
            b.removeAttribute("_submit_attached"),
            b.removeAttribute("_change_attached"));
    }
    function bj(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c,
                d,
                e,
                g = f._data(a),
                h = f._data(b, g),
                i = g.events;
            if (i) {
                delete h.handle, (h.events = {});
                for (c in i)
                    for (d = 0, e = i[c].length; d < e; d++)
                        f.event.add(b, c, i[c][d]);
            }
            h.data && (h.data = f.extend({}, h.data));
        }
    }
    function bi(a, b) {
        return f.nodeName(a, "table")
            ? a.getElementsByTagName("tbody")[0] ||
                  a.appendChild(a.ownerDocument.createElement("tbody"))
            : a;
    }
    function U(a) {
        var b = V.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement) while (b.length) c.createElement(b.pop());
        return c;
    }
    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b))
            return f.grep(a, function (a, d) {
                var e = !!b.call(a, d, a);
                return e === c;
            });
        if (b.nodeType)
            return f.grep(a, function (a, d) {
                return (a === b) === c;
            });
        if (typeof b == "string") {
            var d = f.grep(a, function (a) {
                return a.nodeType === 1;
            });
            if (O.test(b)) return f.filter(b, d, !c);
            b = f.filter(b, d);
        }
        return f.grep(a, function (a, d) {
            return f.inArray(a, b) >= 0 === c;
        });
    }
    function S(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11;
    }
    function K() {
        return !0;
    }
    function J() {
        return !1;
    }
    function n(a, b, c) {
        var d = b + "defer",
            e = b + "queue",
            g = b + "mark",
            h = f._data(a, d);
        h &&
            (c === "queue" || !f._data(a, e)) &&
            (c === "mark" || !f._data(a, g)) &&
            setTimeout(function () {
                !f._data(a, e) &&
                    !f._data(a, g) &&
                    (f.removeData(a, d, !0), h.fire());
            }, 0);
    }
    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b])) continue;
            if (b !== "toJSON") return !1;
        }
        return !0;
    }
    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d =
                        d === "true"
                            ? !0
                            : d === "false"
                            ? !1
                            : d === "null"
                            ? null
                            : f.isNumeric(d)
                            ? +d
                            : j.test(d)
                            ? f.parseJSON(d)
                            : d;
                } catch (g) {}
                f.data(a, c, d);
            } else d = b;
        }
        return d;
    }
    function h(a) {
        var b = (g[a] = {}),
            c,
            d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++) b[a[c]] = !0;
        return b;
    }
    var c = a.document,
        d = a.navigator,
        e = a.location,
        f = (function () {
            function J() {
                if (!e.isReady) {
                    try {
                        c.documentElement.doScroll("left");
                    } catch (a) {
                        setTimeout(J, 1);
                        return;
                    }
                    e.ready();
                }
            }
            var e = function (a, b) {
                    return new e.fn.init(a, b, h);
                },
                f = a.jQuery,
                g = a.$,
                h,
                i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                j = /\S/,
                k = /^\s+/,
                l = /\s+$/,
                m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                n = /^[\],:{}\s]*$/,
                o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                p =
                    /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                q = /(?:^|:|,)(?:\s*\[)+/g,
                r = /(webkit)[ \/]([\w.]+)/,
                s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                t = /(msie) ([\w.]+)/,
                u = /(mozilla)(?:.*? rv:([\w.]+))?/,
                v = /-([a-z]|[0-9])/gi,
                w = /^-ms-/,
                x = function (a, b) {
                    return (b + "").toUpperCase();
                },
                y = d.userAgent,
                z,
                A,
                B,
                C = Object.prototype.toString,
                D = Object.prototype.hasOwnProperty,
                E = Array.prototype.push,
                F = Array.prototype.slice,
                G = String.prototype.trim,
                H = Array.prototype.indexOf,
                I = {};
            (e.fn = e.prototype =
                {
                    constructor: e,
                    init: function (a, d, f) {
                        var g, h, j, k;
                        if (!a) return this;
                        if (a.nodeType) {
                            (this.context = this[0] = a), (this.length = 1);
                            return this;
                        }
                        if (a === "body" && !d && c.body) {
                            (this.context = c),
                                (this[0] = c.body),
                                (this.selector = a),
                                (this.length = 1);
                            return this;
                        }
                        if (typeof a == "string") {
                            a.charAt(0) !== "<" ||
                            a.charAt(a.length - 1) !== ">" ||
                            a.length < 3
                                ? (g = i.exec(a))
                                : (g = [null, a, null]);
                            if (g && (g[1] || !d)) {
                                if (g[1]) {
                                    (d = d instanceof e ? d[0] : d),
                                        (k = d ? d.ownerDocument || d : c),
                                        (j = m.exec(a)),
                                        j
                                            ? e.isPlainObject(d)
                                                ? ((a = [
                                                      c.createElement(j[1]),
                                                  ]),
                                                  e.fn.attr.call(a, d, !0))
                                                : (a = [k.createElement(j[1])])
                                            : ((j = e.buildFragment(
                                                  [g[1]],
                                                  [k]
                                              )),
                                              (a = (
                                                  j.cacheable
                                                      ? e.clone(j.fragment)
                                                      : j.fragment
                                              ).childNodes));
                                    return e.merge(this, a);
                                }
                                h = c.getElementById(g[2]);
                                if (h && h.parentNode) {
                                    if (h.id !== g[2]) return f.find(a);
                                    (this.length = 1), (this[0] = h);
                                }
                                (this.context = c), (this.selector = a);
                                return this;
                            }
                            return !d || d.jquery
                                ? (d || f).find(a)
                                : this.constructor(d).find(a);
                        }
                        if (e.isFunction(a)) return f.ready(a);
                        a.selector !== b &&
                            ((this.selector = a.selector),
                            (this.context = a.context));
                        return e.makeArray(a, this);
                    },
                    selector: "",
                    jquery: "1.7.2",
                    length: 0,
                    size: function () {
                        return this.length;
                    },
                    toArray: function () {
                        return F.call(this, 0);
                    },
                    get: function (a) {
                        return a == null
                            ? this.toArray()
                            : a < 0
                            ? this[this.length + a]
                            : this[a];
                    },
                    pushStack: function (a, b, c) {
                        var d = this.constructor();
                        e.isArray(a) ? E.apply(d, a) : e.merge(d, a),
                            (d.prevObject = this),
                            (d.context = this.context),
                            b === "find"
                                ? (d.selector =
                                      this.selector +
                                      (this.selector ? " " : "") +
                                      c)
                                : b &&
                                  (d.selector =
                                      this.selector + "." + b + "(" + c + ")");
                        return d;
                    },
                    each: function (a, b) {
                        return e.each(this, a, b);
                    },
                    ready: function (a) {
                        e.bindReady(), A.add(a);
                        return this;
                    },
                    eq: function (a) {
                        a = +a;
                        return a === -1 ? this.slice(a) : this.slice(a, a + 1);
                    },
                    first: function () {
                        return this.eq(0);
                    },
                    last: function () {
                        return this.eq(-1);
                    },
                    slice: function () {
                        return this.pushStack(
                            F.apply(this, arguments),
                            "slice",
                            F.call(arguments).join(",")
                        );
                    },
                    map: function (a) {
                        return this.pushStack(
                            e.map(this, function (b, c) {
                                return a.call(b, c, b);
                            })
                        );
                    },
                    end: function () {
                        return this.prevObject || this.constructor(null);
                    },
                    push: E,
                    sort: [].sort,
                    splice: [].splice,
                }),
                (e.fn.init.prototype = e.fn),
                (e.extend = e.fn.extend =
                    function () {
                        var a,
                            c,
                            d,
                            f,
                            g,
                            h,
                            i = arguments[0] || {},
                            j = 1,
                            k = arguments.length,
                            l = !1;
                        typeof i == "boolean" &&
                            ((l = i), (i = arguments[1] || {}), (j = 2)),
                            typeof i != "object" &&
                                !e.isFunction(i) &&
                                (i = {}),
                            k === j && ((i = this), --j);
                        for (; j < k; j++)
                            if ((a = arguments[j]) != null)
                                for (c in a) {
                                    (d = i[c]), (f = a[c]);
                                    if (i === f) continue;
                                    l &&
                                    f &&
                                    (e.isPlainObject(f) || (g = e.isArray(f)))
                                        ? (g
                                              ? ((g = !1),
                                                (h =
                                                    d && e.isArray(d) ? d : []))
                                              : (h =
                                                    d && e.isPlainObject(d)
                                                        ? d
                                                        : {}),
                                          (i[c] = e.extend(l, h, f)))
                                        : f !== b && (i[c] = f);
                                }
                        return i;
                    }),
                e.extend({
                    noConflict: function (b) {
                        a.$ === e && (a.$ = g),
                            b && a.jQuery === e && (a.jQuery = f);
                        return e;
                    },
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function (a) {
                        a ? e.readyWait++ : e.ready(!0);
                    },
                    ready: function (a) {
                        if (
                            (a === !0 && !--e.readyWait) ||
                            (a !== !0 && !e.isReady)
                        ) {
                            if (!c.body) return setTimeout(e.ready, 1);
                            e.isReady = !0;
                            if (a !== !0 && --e.readyWait > 0) return;
                            A.fireWith(c, [e]),
                                e.fn.trigger &&
                                    e(c).trigger("ready").off("ready");
                        }
                    },
                    bindReady: function () {
                        if (!A) {
                            A = e.Callbacks("once memory");
                            if (c.readyState === "complete")
                                return setTimeout(e.ready, 1);
                            if (c.addEventListener)
                                c.addEventListener("DOMContentLoaded", B, !1),
                                    a.addEventListener("load", e.ready, !1);
                            else if (c.attachEvent) {
                                c.attachEvent("onreadystatechange", B),
                                    a.attachEvent("onload", e.ready);
                                var b = !1;
                                try {
                                    b = a.frameElement == null;
                                } catch (d) {}
                                c.documentElement.doScroll && b && J();
                            }
                        }
                    },
                    isFunction: function (a) {
                        return e.type(a) === "function";
                    },
                    isArray:
                        Array.isArray ||
                        function (a) {
                            return e.type(a) === "array";
                        },
                    isWindow: function (a) {
                        return a != null && a == a.window;
                    },
                    isNumeric: function (a) {
                        return !isNaN(parseFloat(a)) && isFinite(a);
                    },
                    type: function (a) {
                        return a == null ? String(a) : I[C.call(a)] || "object";
                    },
                    isPlainObject: function (a) {
                        if (
                            !a ||
                            e.type(a) !== "object" ||
                            a.nodeType ||
                            e.isWindow(a)
                        )
                            return !1;
                        try {
                            if (
                                a.constructor &&
                                !D.call(a, "constructor") &&
                                !D.call(
                                    a.constructor.prototype,
                                    "isPrototypeOf"
                                )
                            )
                                return !1;
                        } catch (c) {
                            return !1;
                        }
                        var d;
                        for (d in a);
                        return d === b || D.call(a, d);
                    },
                    isEmptyObject: function (a) {
                        for (var b in a) return !1;
                        return !0;
                    },
                    error: function (a) {
                        throw new Error(a);
                    },
                    parseJSON: function (b) {
                        if (typeof b != "string" || !b) return null;
                        b = e.trim(b);
                        if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
                        if (
                            n.test(
                                b.replace(o, "@").replace(p, "]").replace(q, "")
                            )
                        )
                            return new Function("return " + b)();
                        e.error("Invalid JSON: " + b);
                    },
                    parseXML: function (c) {
                        if (typeof c != "string" || !c) return null;
                        var d, f;
                        try {
                            a.DOMParser
                                ? ((f = new DOMParser()),
                                  (d = f.parseFromString(c, "text/xml")))
                                : ((d = new ActiveXObject("Microsoft.XMLDOM")),
                                  (d.async = "false"),
                                  d.loadXML(c));
                        } catch (g) {
                            d = b;
                        }
                        (!d ||
                            !d.documentElement ||
                            d.getElementsByTagName("parsererror").length) &&
                            e.error("Invalid XML: " + c);
                        return d;
                    },
                    noop: function () {},
                    globalEval: function (b) {
                        b &&
                            j.test(b) &&
                            (
                                a.execScript ||
                                function (b) {
                                    a.eval.call(a, b);
                                }
                            )(b);
                    },
                    camelCase: function (a) {
                        return a.replace(w, "ms-").replace(v, x);
                    },
                    nodeName: function (a, b) {
                        return (
                            a.nodeName &&
                            a.nodeName.toUpperCase() === b.toUpperCase()
                        );
                    },
                    each: function (a, c, d) {
                        var f,
                            g = 0,
                            h = a.length,
                            i = h === b || e.isFunction(a);
                        if (d) {
                            if (i) {
                                for (f in a) if (c.apply(a[f], d) === !1) break;
                            } else
                                for (; g < h; )
                                    if (c.apply(a[g++], d) === !1) break;
                        } else if (i) {
                            for (f in a)
                                if (c.call(a[f], f, a[f]) === !1) break;
                        } else
                            for (; g < h; )
                                if (c.call(a[g], g, a[g++]) === !1) break;
                        return a;
                    },
                    trim: G
                        ? function (a) {
                              return a == null ? "" : G.call(a);
                          }
                        : function (a) {
                              return a == null
                                  ? ""
                                  : (a + "").replace(k, "").replace(l, "");
                          },
                    makeArray: function (a, b) {
                        var c = b || [];
                        if (a != null) {
                            var d = e.type(a);
                            a.length == null ||
                            d === "string" ||
                            d === "function" ||
                            d === "regexp" ||
                            e.isWindow(a)
                                ? E.call(c, a)
                                : e.merge(c, a);
                        }
                        return c;
                    },
                    inArray: function (a, b, c) {
                        var d;
                        if (b) {
                            if (H) return H.call(b, a, c);
                            (d = b.length),
                                (c = c ? (c < 0 ? Math.max(0, d + c) : c) : 0);
                            for (; c < d; c++)
                                if (c in b && b[c] === a) return c;
                        }
                        return -1;
                    },
                    merge: function (a, c) {
                        var d = a.length,
                            e = 0;
                        if (typeof c.length == "number")
                            for (var f = c.length; e < f; e++) a[d++] = c[e];
                        else while (c[e] !== b) a[d++] = c[e++];
                        a.length = d;
                        return a;
                    },
                    grep: function (a, b, c) {
                        var d = [],
                            e;
                        c = !!c;
                        for (var f = 0, g = a.length; f < g; f++)
                            (e = !!b(a[f], f)), c !== e && d.push(a[f]);
                        return d;
                    },
                    map: function (a, c, d) {
                        var f,
                            g,
                            h = [],
                            i = 0,
                            j = a.length,
                            k =
                                a instanceof e ||
                                (j !== b &&
                                    typeof j == "number" &&
                                    ((j > 0 && a[0] && a[j - 1]) ||
                                        j === 0 ||
                                        e.isArray(a)));
                        if (k)
                            for (; i < j; i++)
                                (f = c(a[i], i, d)),
                                    f != null && (h[h.length] = f);
                        else
                            for (g in a)
                                (f = c(a[g], g, d)),
                                    f != null && (h[h.length] = f);
                        return h.concat.apply([], h);
                    },
                    guid: 1,
                    proxy: function (a, c) {
                        if (typeof c == "string") {
                            var d = a[c];
                            (c = a), (a = d);
                        }
                        if (!e.isFunction(a)) return b;
                        var f = F.call(arguments, 2),
                            g = function () {
                                return a.apply(c, f.concat(F.call(arguments)));
                            };
                        g.guid = a.guid = a.guid || g.guid || e.guid++;
                        return g;
                    },
                    access: function (a, c, d, f, g, h, i) {
                        var j,
                            k = d == null,
                            l = 0,
                            m = a.length;
                        if (d && typeof d == "object") {
                            for (l in d) e.access(a, c, l, d[l], 1, h, f);
                            g = 1;
                        } else if (f !== b) {
                            (j = i === b && e.isFunction(f)),
                                k &&
                                    (j
                                        ? ((j = c),
                                          (c = function (a, b, c) {
                                              return j.call(e(a), c);
                                          }))
                                        : (c.call(a, f), (c = null)));
                            if (c)
                                for (; l < m; l++)
                                    c(
                                        a[l],
                                        d,
                                        j ? f.call(a[l], l, c(a[l], d)) : f,
                                        i
                                    );
                            g = 1;
                        }
                        return g ? a : k ? c.call(a) : m ? c(a[0], d) : h;
                    },
                    now: function () {
                        return new Date().getTime();
                    },
                    uaMatch: function (a) {
                        a = a.toLowerCase();
                        var b =
                            r.exec(a) ||
                            s.exec(a) ||
                            t.exec(a) ||
                            (a.indexOf("compatible") < 0 && u.exec(a)) ||
                            [];
                        return { browser: b[1] || "", version: b[2] || "0" };
                    },
                    sub: function () {
                        function a(b, c) {
                            return new a.fn.init(b, c);
                        }
                        e.extend(!0, a, this),
                            (a.superclass = this),
                            (a.fn = a.prototype = this()),
                            (a.fn.constructor = a),
                            (a.sub = this.sub),
                            (a.fn.init = function (d, f) {
                                f &&
                                    f instanceof e &&
                                    !(f instanceof a) &&
                                    (f = a(f));
                                return e.fn.init.call(this, d, f, b);
                            }),
                            (a.fn.init.prototype = a.fn);
                        var b = a(c);
                        return a;
                    },
                    browser: {},
                }),
                e.each(
                    "Boolean Number String Function Array Date RegExp Object".split(
                        " "
                    ),
                    function (a, b) {
                        I["[object " + b + "]"] = b.toLowerCase();
                    }
                ),
                (z = e.uaMatch(y)),
                z.browser &&
                    ((e.browser[z.browser] = !0),
                    (e.browser.version = z.version)),
                e.browser.webkit && (e.browser.safari = !0),
                j.test(" ") && ((k = /^[\s\xA0]+/), (l = /[\s\xA0]+$/)),
                (h = e(c)),
                c.addEventListener
                    ? (B = function () {
                          c.removeEventListener("DOMContentLoaded", B, !1),
                              e.ready();
                      })
                    : c.attachEvent &&
                      (B = function () {
                          c.readyState === "complete" &&
                              (c.detachEvent("onreadystatechange", B),
                              e.ready());
                      });
            return e;
        })(),
        g = {};
    f.Callbacks = function (a) {
        a = a ? g[a] || h(a) : {};
        var c = [],
            d = [],
            e,
            i,
            j,
            k,
            l,
            m,
            n = function (b) {
                var d, e, g, h, i;
                for (d = 0, e = b.length; d < e; d++)
                    (g = b[d]),
                        (h = f.type(g)),
                        h === "array"
                            ? n(g)
                            : h === "function" &&
                              (!a.unique || !p.has(g)) &&
                              c.push(g);
            },
            o = function (b, f) {
                (f = f || []),
                    (e = !a.memory || [b, f]),
                    (i = !0),
                    (j = !0),
                    (m = k || 0),
                    (k = 0),
                    (l = c.length);
                for (; c && m < l; m++)
                    if (c[m].apply(b, f) === !1 && a.stopOnFalse) {
                        e = !0;
                        break;
                    }
                (j = !1),
                    c &&
                        (a.once
                            ? e === !0
                                ? p.disable()
                                : (c = [])
                            : d &&
                              d.length &&
                              ((e = d.shift()), p.fireWith(e[0], e[1])));
            },
            p = {
                add: function () {
                    if (c) {
                        var a = c.length;
                        n(arguments),
                            j
                                ? (l = c.length)
                                : e && e !== !0 && ((k = a), o(e[0], e[1]));
                    }
                    return this;
                },
                remove: function () {
                    if (c) {
                        var b = arguments,
                            d = 0,
                            e = b.length;
                        for (; d < e; d++)
                            for (var f = 0; f < c.length; f++)
                                if (b[d] === c[f]) {
                                    j && f <= l && (l--, f <= m && m--),
                                        c.splice(f--, 1);
                                    if (a.unique) break;
                                }
                    }
                    return this;
                },
                has: function (a) {
                    if (c) {
                        var b = 0,
                            d = c.length;
                        for (; b < d; b++) if (a === c[b]) return !0;
                    }
                    return !1;
                },
                empty: function () {
                    c = [];
                    return this;
                },
                disable: function () {
                    c = d = e = b;
                    return this;
                },
                disabled: function () {
                    return !c;
                },
                lock: function () {
                    (d = b), (!e || e === !0) && p.disable();
                    return this;
                },
                locked: function () {
                    return !d;
                },
                fireWith: function (b, c) {
                    d &&
                        (j
                            ? a.once || d.push([b, c])
                            : (!a.once || !e) && o(b, c));
                    return this;
                },
                fire: function () {
                    p.fireWith(this, arguments);
                    return this;
                },
                fired: function () {
                    return !!i;
                },
            };
        return p;
    };
    var i = [].slice;
    f.extend({
        Deferred: function (a) {
            var b = f.Callbacks("once memory"),
                c = f.Callbacks("once memory"),
                d = f.Callbacks("memory"),
                e = "pending",
                g = { resolve: b, reject: c, notify: d },
                h = {
                    done: b.add,
                    fail: c.add,
                    progress: d.add,
                    state: function () {
                        return e;
                    },
                    isResolved: b.fired,
                    isRejected: c.fired,
                    then: function (a, b, c) {
                        i.done(a).fail(b).progress(c);
                        return this;
                    },
                    always: function () {
                        i.done.apply(i, arguments).fail.apply(i, arguments);
                        return this;
                    },
                    pipe: function (a, b, c) {
                        return f
                            .Deferred(function (d) {
                                f.each(
                                    {
                                        done: [a, "resolve"],
                                        fail: [b, "reject"],
                                        progress: [c, "notify"],
                                    },
                                    function (a, b) {
                                        var c = b[0],
                                            e = b[1],
                                            g;
                                        f.isFunction(c)
                                            ? i[a](function () {
                                                  (g = c.apply(
                                                      this,
                                                      arguments
                                                  )),
                                                      g &&
                                                      f.isFunction(g.promise)
                                                          ? g
                                                                .promise()
                                                                .then(
                                                                    d.resolve,
                                                                    d.reject,
                                                                    d.notify
                                                                )
                                                          : d[e + "With"](
                                                                this === i
                                                                    ? d
                                                                    : this,
                                                                [g]
                                                            );
                                              })
                                            : i[a](d[e]);
                                    }
                                );
                            })
                            .promise();
                    },
                    promise: function (a) {
                        if (a == null) a = h;
                        else for (var b in h) a[b] = h[b];
                        return a;
                    },
                },
                i = h.promise({}),
                j;
            for (j in g) (i[j] = g[j].fire), (i[j + "With"] = g[j].fireWith);
            i
                .done(
                    function () {
                        e = "resolved";
                    },
                    c.disable,
                    d.lock
                )
                .fail(
                    function () {
                        e = "rejected";
                    },
                    b.disable,
                    d.lock
                ),
                a && a.call(i, i);
            return i;
        },
        when: function (a) {
            function m(a) {
                return function (b) {
                    (e[a] = arguments.length > 1 ? i.call(arguments, 0) : b),
                        j.notifyWith(k, e);
                };
            }
            function l(a) {
                return function (c) {
                    (b[a] = arguments.length > 1 ? i.call(arguments, 0) : c),
                        --g || j.resolveWith(j, b);
                };
            }
            var b = i.call(arguments, 0),
                c = 0,
                d = b.length,
                e = Array(d),
                g = d,
                h = d,
                j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(),
                k = j.promise();
            if (d > 1) {
                for (; c < d; c++)
                    b[c] && b[c].promise && f.isFunction(b[c].promise)
                        ? b[c].promise().then(l(c), j.reject, m(c))
                        : --g;
                g || j.resolveWith(j, b);
            } else j !== a && j.resolveWith(j, d ? [a] : []);
            return k;
        },
    }),
        (f.support = (function () {
            var b,
                d,
                e,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p = c.createElement("div"),
                q = c.documentElement;
            p.setAttribute("className", "t"),
                (p.innerHTML =
                    "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>"),
                (d = p.getElementsByTagName("*")),
                (e = p.getElementsByTagName("a")[0]);
            if (!d || !d.length || !e) return {};
            (g = c.createElement("select")),
                (h = g.appendChild(c.createElement("option"))),
                (i = p.getElementsByTagName("input")[0]),
                (b = {
                    leadingWhitespace: p.firstChild.nodeType === 3,
                    tbody: !p.getElementsByTagName("tbody").length,
                    htmlSerialize: !!p.getElementsByTagName("link").length,
                    style: /top/.test(e.getAttribute("style")),
                    hrefNormalized: e.getAttribute("href") === "/a",
                    opacity: /^0.55/.test(e.style.opacity),
                    cssFloat: !!e.style.cssFloat,
                    checkOn: i.value === "on",
                    optSelected: h.selected,
                    getSetAttribute: p.className !== "t",
                    enctype: !!c.createElement("form").enctype,
                    html5Clone:
                        c.createElement("nav").cloneNode(!0).outerHTML !==
                        "<:nav></:nav>",
                    submitBubbles: !0,
                    changeBubbles: !0,
                    focusinBubbles: !1,
                    deleteExpando: !0,
                    noCloneEvent: !0,
                    inlineBlockNeedsLayout: !1,
                    shrinkWrapBlocks: !1,
                    reliableMarginRight: !0,
                    pixelMargin: !0,
                }),
                (f.boxModel = b.boxModel = c.compatMode === "CSS1Compat"),
                (i.checked = !0),
                (b.noCloneChecked = i.cloneNode(!0).checked),
                (g.disabled = !0),
                (b.optDisabled = !h.disabled);
            try {
                delete p.test;
            } catch (r) {
                b.deleteExpando = !1;
            }
            !p.addEventListener &&
                p.attachEvent &&
                p.fireEvent &&
                (p.attachEvent("onclick", function () {
                    b.noCloneEvent = !1;
                }),
                p.cloneNode(!0).fireEvent("onclick")),
                (i = c.createElement("input")),
                (i.value = "t"),
                i.setAttribute("type", "radio"),
                (b.radioValue = i.value === "t"),
                i.setAttribute("checked", "checked"),
                i.setAttribute("name", "t"),
                p.appendChild(i),
                (j = c.createDocumentFragment()),
                j.appendChild(p.lastChild),
                (b.checkClone = j
                    .cloneNode(!0)
                    .cloneNode(!0).lastChild.checked),
                (b.appendChecked = i.checked),
                j.removeChild(i),
                j.appendChild(p);
            if (p.attachEvent)
                for (n in { submit: 1, change: 1, focusin: 1 })
                    (m = "on" + n),
                        (o = m in p),
                        o ||
                            (p.setAttribute(m, "return;"),
                            (o = typeof p[m] == "function")),
                        (b[n + "Bubbles"] = o);
            j.removeChild(p),
                (j = g = h = p = i = null),
                f(function () {
                    var d,
                        e,
                        g,
                        h,
                        i,
                        j,
                        l,
                        m,
                        n,
                        q,
                        r,
                        s,
                        t,
                        u = c.getElementsByTagName("body")[0];
                    !u ||
                        ((m = 1),
                        (t = "padding:0;margin:0;border:"),
                        (r =
                            "position:absolute;top:0;left:0;width:1px;height:1px;"),
                        (s = t + "0;visibility:hidden;"),
                        (n = "style='" + r + t + "5px solid #000;"),
                        (q =
                            "<div " +
                            n +
                            "display:block;'><div style='" +
                            t +
                            "0;display:block;overflow:hidden;'></div></div>" +
                            "<table " +
                            n +
                            "' cellpadding='0' cellspacing='0'>" +
                            "<tr><td></td></tr></table>"),
                        (d = c.createElement("div")),
                        (d.style.cssText =
                            s +
                            "width:0;height:0;position:static;top:0;margin-top:" +
                            m +
                            "px"),
                        u.insertBefore(d, u.firstChild),
                        (p = c.createElement("div")),
                        d.appendChild(p),
                        (p.innerHTML =
                            "<table><tr><td style='" +
                            t +
                            "0;display:none'></td><td>t</td></tr></table>"),
                        (k = p.getElementsByTagName("td")),
                        (o = k[0].offsetHeight === 0),
                        (k[0].style.display = ""),
                        (k[1].style.display = "none"),
                        (b.reliableHiddenOffsets =
                            o && k[0].offsetHeight === 0),
                        a.getComputedStyle &&
                            ((p.innerHTML = ""),
                            (l = c.createElement("div")),
                            (l.style.width = "0"),
                            (l.style.marginRight = "0"),
                            (p.style.width = "2px"),
                            p.appendChild(l),
                            (b.reliableMarginRight =
                                (parseInt(
                                    (
                                        a.getComputedStyle(l, null) || {
                                            marginRight: 0,
                                        }
                                    ).marginRight,
                                    10
                                ) || 0) === 0)),
                        typeof p.style.zoom != "undefined" &&
                            ((p.innerHTML = ""),
                            (p.style.width = p.style.padding = "1px"),
                            (p.style.border = 0),
                            (p.style.overflow = "hidden"),
                            (p.style.display = "inline"),
                            (p.style.zoom = 1),
                            (b.inlineBlockNeedsLayout = p.offsetWidth === 3),
                            (p.style.display = "block"),
                            (p.style.overflow = "visible"),
                            (p.innerHTML = "<div style='width:5px;'></div>"),
                            (b.shrinkWrapBlocks = p.offsetWidth !== 3)),
                        (p.style.cssText = r + s),
                        (p.innerHTML = q),
                        (e = p.firstChild),
                        (g = e.firstChild),
                        (i = e.nextSibling.firstChild.firstChild),
                        (j = {
                            doesNotAddBorder: g.offsetTop !== 5,
                            doesAddBorderForTableAndCells: i.offsetTop === 5,
                        }),
                        (g.style.position = "fixed"),
                        (g.style.top = "20px"),
                        (j.fixedPosition =
                            g.offsetTop === 20 || g.offsetTop === 15),
                        (g.style.position = g.style.top = ""),
                        (e.style.overflow = "hidden"),
                        (e.style.position = "relative"),
                        (j.subtractsBorderForOverflowNotVisible =
                            g.offsetTop === -5),
                        (j.doesNotIncludeMarginInBodyOffset =
                            u.offsetTop !== m),
                        a.getComputedStyle &&
                            ((p.style.marginTop = "1%"),
                            (b.pixelMargin =
                                (
                                    a.getComputedStyle(p, null) || {
                                        marginTop: 0,
                                    }
                                ).marginTop !== "1%")),
                        typeof d.style.zoom != "undefined" &&
                            (d.style.zoom = 1),
                        u.removeChild(d),
                        (l = p = d = null),
                        f.extend(b, j));
                });
            return b;
        })());
    var j = /^(?:\{.*\}|\[.*\])$/,
        k = /([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0,
        },
        hasData: function (a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !m(a);
        },
        data: function (a, c, d, e) {
            if (!!f.acceptData(a)) {
                var g,
                    h,
                    i,
                    j = f.expando,
                    k = typeof c == "string",
                    l = a.nodeType,
                    m = l ? f.cache : a,
                    n = l ? a[j] : a[j] && j,
                    o = c === "events";
                if ((!n || !m[n] || (!o && !e && !m[n].data)) && k && d === b)
                    return;
                n || (l ? (a[j] = n = ++f.uuid) : (n = j)),
                    m[n] || ((m[n] = {}), l || (m[n].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function")
                    e
                        ? (m[n] = f.extend(m[n], c))
                        : (m[n].data = f.extend(m[n].data, c));
                (g = h = m[n]),
                    e || (h.data || (h.data = {}), (h = h.data)),
                    d !== b && (h[f.camelCase(c)] = d);
                if (o && !h[c]) return g.events;
                k
                    ? ((i = h[c]), i == null && (i = h[f.camelCase(c)]))
                    : (i = h);
                return i;
            }
        },
        removeData: function (a, b, c) {
            if (!!f.acceptData(a)) {
                var d,
                    e,
                    g,
                    h = f.expando,
                    i = a.nodeType,
                    j = i ? f.cache : a,
                    k = i ? a[h] : h;
                if (!j[k]) return;
                if (b) {
                    d = c ? j[k] : j[k].data;
                    if (d) {
                        f.isArray(b) ||
                            (b in d
                                ? (b = [b])
                                : ((b = f.camelCase(b)),
                                  b in d ? (b = [b]) : (b = b.split(" "))));
                        for (e = 0, g = b.length; e < g; e++) delete d[b[e]];
                        if (!(c ? m : f.isEmptyObject)(d)) return;
                    }
                }
                if (!c) {
                    delete j[k].data;
                    if (!m(j[k])) return;
                }
                f.support.deleteExpando || !j.setInterval
                    ? delete j[k]
                    : (j[k] = null),
                    i &&
                        (f.support.deleteExpando
                            ? delete a[h]
                            : a.removeAttribute
                            ? a.removeAttribute(h)
                            : (a[h] = null));
            }
        },
        _data: function (a, b, c) {
            return f.data(a, b, c, !0);
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) return b !== !0 && a.getAttribute("classid") === b;
            }
            return !0;
        },
    }),
        f.fn.extend({
            data: function (a, c) {
                var d,
                    e,
                    g,
                    h,
                    i,
                    j = this[0],
                    k = 0,
                    m = null;
                if (a === b) {
                    if (this.length) {
                        m = f.data(j);
                        if (j.nodeType === 1 && !f._data(j, "parsedAttrs")) {
                            g = j.attributes;
                            for (i = g.length; k < i; k++)
                                (h = g[k].name),
                                    h.indexOf("data-") === 0 &&
                                        ((h = f.camelCase(h.substring(5))),
                                        l(j, h, m[h]));
                            f._data(j, "parsedAttrs", !0);
                        }
                    }
                    return m;
                }
                if (typeof a == "object")
                    return this.each(function () {
                        f.data(this, a);
                    });
                (d = a.split(".", 2)),
                    (d[1] = d[1] ? "." + d[1] : ""),
                    (e = d[1] + "!");
                return f.access(
                    this,
                    function (c) {
                        if (c === b) {
                            (m = this.triggerHandler("getData" + e, [d[0]])),
                                m === b &&
                                    j &&
                                    ((m = f.data(j, a)), (m = l(j, a, m)));
                            return m === b && d[1] ? this.data(d[0]) : m;
                        }
                        (d[1] = c),
                            this.each(function () {
                                var b = f(this);
                                b.triggerHandler("setData" + e, d),
                                    f.data(this, a, c),
                                    b.triggerHandler("changeData" + e, d);
                            });
                    },
                    null,
                    c,
                    arguments.length > 1,
                    null,
                    !1
                );
            },
            removeData: function (a) {
                return this.each(function () {
                    f.removeData(this, a);
                });
            },
        }),
        f.extend({
            _mark: function (a, b) {
                a &&
                    ((b = (b || "fx") + "mark"),
                    f._data(a, b, (f._data(a, b) || 0) + 1));
            },
            _unmark: function (a, b, c) {
                a !== !0 && ((c = b), (b = a), (a = !1));
                if (b) {
                    c = c || "fx";
                    var d = c + "mark",
                        e = a ? 0 : (f._data(b, d) || 1) - 1;
                    e
                        ? f._data(b, d, e)
                        : (f.removeData(b, d, !0), n(b, c, "mark"));
                }
            },
            queue: function (a, b, c) {
                var d;
                if (a) {
                    (b = (b || "fx") + "queue"),
                        (d = f._data(a, b)),
                        c &&
                            (!d || f.isArray(c)
                                ? (d = f._data(a, b, f.makeArray(c)))
                                : d.push(c));
                    return d || [];
                }
            },
            dequeue: function (a, b) {
                b = b || "fx";
                var c = f.queue(a, b),
                    d = c.shift(),
                    e = {};
                d === "inprogress" && (d = c.shift()),
                    d &&
                        (b === "fx" && c.unshift("inprogress"),
                        f._data(a, b + ".run", e),
                        d.call(
                            a,
                            function () {
                                f.dequeue(a, b);
                            },
                            e
                        )),
                    c.length ||
                        (f.removeData(a, b + "queue " + b + ".run", !0),
                        n(a, b, "queue"));
            },
        }),
        f.fn.extend({
            queue: function (a, c) {
                var d = 2;
                typeof a != "string" && ((c = a), (a = "fx"), d--);
                if (arguments.length < d) return f.queue(this[0], a);
                return c === b
                    ? this
                    : this.each(function () {
                          var b = f.queue(this, a, c);
                          a === "fx" &&
                              b[0] !== "inprogress" &&
                              f.dequeue(this, a);
                      });
            },
            dequeue: function (a) {
                return this.each(function () {
                    f.dequeue(this, a);
                });
            },
            delay: function (a, b) {
                (a = f.fx ? f.fx.speeds[a] || a : a), (b = b || "fx");
                return this.queue(b, function (b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function () {
                        clearTimeout(d);
                    };
                });
            },
            clearQueue: function (a) {
                return this.queue(a || "fx", []);
            },
            promise: function (a, c) {
                function m() {
                    --h || d.resolveWith(e, [e]);
                }
                typeof a != "string" && ((c = a), (a = b)), (a = a || "fx");
                var d = f.Deferred(),
                    e = this,
                    g = e.length,
                    h = 1,
                    i = a + "defer",
                    j = a + "queue",
                    k = a + "mark",
                    l;
                while (g--)
                    if (
                        (l =
                            f.data(e[g], i, b, !0) ||
                            ((f.data(e[g], j, b, !0) ||
                                f.data(e[g], k, b, !0)) &&
                                f.data(
                                    e[g],
                                    i,
                                    f.Callbacks("once memory"),
                                    !0
                                )))
                    )
                        h++, l.add(m);
                m();
                return d.promise(c);
            },
        });
    var o = /[\n\t\r]/g,
        p = /\s+/,
        q = /\r/g,
        r = /^(?:button|input)$/i,
        s = /^(?:button|input|object|select|textarea)$/i,
        t = /^a(?:rea)?$/i,
        u =
            /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        v = f.support.getSetAttribute,
        w,
        x,
        y;
    f.fn.extend({
        attr: function (a, b) {
            return f.access(this, f.attr, a, b, arguments.length > 1);
        },
        removeAttr: function (a) {
            return this.each(function () {
                f.removeAttr(this, a);
            });
        },
        prop: function (a, b) {
            return f.access(this, f.prop, a, b, arguments.length > 1);
        },
        removeProp: function (a) {
            a = f.propFix[a] || a;
            return this.each(function () {
                try {
                    (this[a] = b), delete this[a];
                } catch (c) {}
            });
        },
        addClass: function (a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a))
                return this.each(function (b) {
                    f(this).addClass(a.call(this, b, this.className));
                });
            if (a && typeof a == "string") {
                b = a.split(p);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1)
                        if (!e.className && b.length === 1) e.className = a;
                        else {
                            g = " " + e.className + " ";
                            for (h = 0, i = b.length; h < i; h++)
                                ~g.indexOf(" " + b[h] + " ") ||
                                    (g += b[h] + " ");
                            e.className = f.trim(g);
                        }
                }
            }
            return this;
        },
        removeClass: function (a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a))
                return this.each(function (b) {
                    f(this).removeClass(a.call(this, b, this.className));
                });
            if ((a && typeof a == "string") || a === b) {
                c = (a || "").split(p);
                for (d = 0, e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className)
                        if (a) {
                            h = (" " + g.className + " ").replace(o, " ");
                            for (i = 0, j = c.length; i < j; i++)
                                h = h.replace(" " + c[i] + " ", " ");
                            g.className = f.trim(h);
                        } else g.className = "";
                }
            }
            return this;
        },
        toggleClass: function (a, b) {
            var c = typeof a,
                d = typeof b == "boolean";
            if (f.isFunction(a))
                return this.each(function (c) {
                    f(this).toggleClass(a.call(this, c, this.className, b), b);
                });
            return this.each(function () {
                if (c === "string") {
                    var e,
                        g = 0,
                        h = f(this),
                        i = b,
                        j = a.split(p);
                    while ((e = j[g++]))
                        (i = d ? i : !h.hasClass(e)),
                            h[i ? "addClass" : "removeClass"](e);
                } else if (c === "undefined" || c === "boolean") this.className && f._data(this, "__className__", this.className), (this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || "");
            });
        },
        hasClass: function (a) {
            var b = " " + a + " ",
                c = 0,
                d = this.length;
            for (; c < d; c++)
                if (
                    this[c].nodeType === 1 &&
                    (" " + this[c].className + " ").replace(o, " ").indexOf(b) >
                        -1
                )
                    return !0;
            return !1;
        },
        val: function (a) {
            var c,
                d,
                e,
                g = this[0];
            {
                if (!!arguments.length) {
                    e = f.isFunction(a);
                    return this.each(function (d) {
                        var g = f(this),
                            h;
                        if (this.nodeType === 1) {
                            e ? (h = a.call(this, d, g.val())) : (h = a),
                                h == null
                                    ? (h = "")
                                    : typeof h == "number"
                                    ? (h += "")
                                    : f.isArray(h) &&
                                      (h = f.map(h, function (a) {
                                          return a == null ? "" : a + "";
                                      })),
                                (c =
                                    f.valHooks[this.type] ||
                                    f.valHooks[this.nodeName.toLowerCase()]);
                            if (
                                !c ||
                                !("set" in c) ||
                                c.set(this, h, "value") === b
                            )
                                this.value = h;
                        }
                    });
                }
                if (g) {
                    c =
                        f.valHooks[g.type] ||
                        f.valHooks[g.nodeName.toLowerCase()];
                    if (c && "get" in c && (d = c.get(g, "value")) !== b)
                        return d;
                    d = g.value;
                    return typeof d == "string"
                        ? d.replace(q, "")
                        : d == null
                        ? ""
                        : d;
                }
            }
        },
    }),
        f.extend({
            valHooks: {
                option: {
                    get: function (a) {
                        var b = a.attributes.value;
                        return !b || b.specified ? a.value : a.text;
                    },
                },
                select: {
                    get: function (a) {
                        var b,
                            c,
                            d,
                            e,
                            g = a.selectedIndex,
                            h = [],
                            i = a.options,
                            j = a.type === "select-one";
                        if (g < 0) return null;
                        (c = j ? g : 0), (d = j ? g + 1 : i.length);
                        for (; c < d; c++) {
                            e = i[c];
                            if (
                                e.selected &&
                                (f.support.optDisabled
                                    ? !e.disabled
                                    : e.getAttribute("disabled") === null) &&
                                (!e.parentNode.disabled ||
                                    !f.nodeName(e.parentNode, "optgroup"))
                            ) {
                                b = f(e).val();
                                if (j) return b;
                                h.push(b);
                            }
                        }
                        if (j && !h.length && i.length) return f(i[g]).val();
                        return h;
                    },
                    set: function (a, b) {
                        var c = f.makeArray(b);
                        f(a)
                            .find("option")
                            .each(function () {
                                this.selected =
                                    f.inArray(f(this).val(), c) >= 0;
                            }),
                            c.length || (a.selectedIndex = -1);
                        return c;
                    },
                },
            },
            attrFn: {
                val: !0,
                css: !0,
                html: !0,
                text: !0,
                data: !0,
                width: !0,
                height: !0,
                offset: !0,
            },
            attr: function (a, c, d, e) {
                var g,
                    h,
                    i,
                    j = a.nodeType;
                if (!!a && j !== 3 && j !== 8 && j !== 2) {
                    if (e && c in f.attrFn) return f(a)[c](d);
                    if (typeof a.getAttribute == "undefined")
                        return f.prop(a, c, d);
                    (i = j !== 1 || !f.isXMLDoc(a)),
                        i &&
                            ((c = c.toLowerCase()),
                            (h = f.attrHooks[c] || (u.test(c) ? x : w)));
                    if (d !== b) {
                        if (d === null) {
                            f.removeAttr(a, c);
                            return;
                        }
                        if (h && "set" in h && i && (g = h.set(a, d, c)) !== b)
                            return g;
                        a.setAttribute(c, "" + d);
                        return d;
                    }
                    if (h && "get" in h && i && (g = h.get(a, c)) !== null)
                        return g;
                    g = a.getAttribute(c);
                    return g === null ? b : g;
                }
            },
            removeAttr: function (a, b) {
                var c,
                    d,
                    e,
                    g,
                    h,
                    i = 0;
                if (b && a.nodeType === 1) {
                    (d = b.toLowerCase().split(p)), (g = d.length);
                    for (; i < g; i++)
                        (e = d[i]),
                            e &&
                                ((c = f.propFix[e] || e),
                                (h = u.test(e)),
                                h || f.attr(a, e, ""),
                                a.removeAttribute(v ? e : c),
                                h && c in a && (a[c] = !1));
                }
            },
            attrHooks: {
                type: {
                    set: function (a, b) {
                        if (r.test(a.nodeName) && a.parentNode)
                            f.error("type property can't be changed");
                        else if (
                            !f.support.radioValue &&
                            b === "radio" &&
                            f.nodeName(a, "input")
                        ) {
                            var c = a.value;
                            a.setAttribute("type", b), c && (a.value = c);
                            return b;
                        }
                    },
                },
                value: {
                    get: function (a, b) {
                        if (w && f.nodeName(a, "button")) return w.get(a, b);
                        return b in a ? a.value : null;
                    },
                    set: function (a, b, c) {
                        if (w && f.nodeName(a, "button")) return w.set(a, b, c);
                        a.value = b;
                    },
                },
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                for: "htmlFor",
                class: "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable",
            },
            prop: function (a, c, d) {
                var e,
                    g,
                    h,
                    i = a.nodeType;
                if (!!a && i !== 3 && i !== 8 && i !== 2) {
                    (h = i !== 1 || !f.isXMLDoc(a)),
                        h && ((c = f.propFix[c] || c), (g = f.propHooks[c]));
                    return d !== b
                        ? g && "set" in g && (e = g.set(a, d, c)) !== b
                            ? e
                            : (a[c] = d)
                        : g && "get" in g && (e = g.get(a, c)) !== null
                        ? e
                        : a[c];
                }
            },
            propHooks: {
                tabIndex: {
                    get: function (a) {
                        var c = a.getAttributeNode("tabindex");
                        return c && c.specified
                            ? parseInt(c.value, 10)
                            : s.test(a.nodeName) ||
                              (t.test(a.nodeName) && a.href)
                            ? 0
                            : b;
                    },
                },
            },
        }),
        (f.attrHooks.tabindex = f.propHooks.tabIndex),
        (x = {
            get: function (a, c) {
                var d,
                    e = f.prop(a, c);
                return e === !0 ||
                    (typeof e != "boolean" &&
                        (d = a.getAttributeNode(c)) &&
                        d.nodeValue !== !1)
                    ? c.toLowerCase()
                    : b;
            },
            set: function (a, b, c) {
                var d;
                b === !1
                    ? f.removeAttr(a, c)
                    : ((d = f.propFix[c] || c),
                      d in a && (a[d] = !0),
                      a.setAttribute(c, c.toLowerCase()));
                return c;
            },
        }),
        v ||
            ((y = { name: !0, id: !0, coords: !0 }),
            (w = f.valHooks.button =
                {
                    get: function (a, c) {
                        var d;
                        d = a.getAttributeNode(c);
                        return d && (y[c] ? d.nodeValue !== "" : d.specified)
                            ? d.nodeValue
                            : b;
                    },
                    set: function (a, b, d) {
                        var e = a.getAttributeNode(d);
                        e ||
                            ((e = c.createAttribute(d)), a.setAttributeNode(e));
                        return (e.nodeValue = b + "");
                    },
                }),
            (f.attrHooks.tabindex.set = w.set),
            f.each(["width", "height"], function (a, b) {
                f.attrHooks[b] = f.extend(f.attrHooks[b], {
                    set: function (a, c) {
                        if (c === "") {
                            a.setAttribute(b, "auto");
                            return c;
                        }
                    },
                });
            }),
            (f.attrHooks.contenteditable = {
                get: w.get,
                set: function (a, b, c) {
                    b === "" && (b = "false"), w.set(a, b, c);
                },
            })),
        f.support.hrefNormalized ||
            f.each(["href", "src", "width", "height"], function (a, c) {
                f.attrHooks[c] = f.extend(f.attrHooks[c], {
                    get: function (a) {
                        var d = a.getAttribute(c, 2);
                        return d === null ? b : d;
                    },
                });
            }),
        f.support.style ||
            (f.attrHooks.style = {
                get: function (a) {
                    return a.style.cssText.toLowerCase() || b;
                },
                set: function (a, b) {
                    return (a.style.cssText = "" + b);
                },
            }),
        f.support.optSelected ||
            (f.propHooks.selected = f.extend(f.propHooks.selected, {
                get: function (a) {
                    var b = a.parentNode;
                    b &&
                        (b.selectedIndex,
                        b.parentNode && b.parentNode.selectedIndex);
                    return null;
                },
            })),
        f.support.enctype || (f.propFix.enctype = "encoding"),
        f.support.checkOn ||
            f.each(["radio", "checkbox"], function () {
                f.valHooks[this] = {
                    get: function (a) {
                        return a.getAttribute("value") === null
                            ? "on"
                            : a.value;
                    },
                };
            }),
        f.each(["radio", "checkbox"], function () {
            f.valHooks[this] = f.extend(f.valHooks[this], {
                set: function (a, b) {
                    if (f.isArray(b))
                        return (a.checked = f.inArray(f(a).val(), b) >= 0);
                },
            });
        });
    var z = /^(?:textarea|input|select)$/i,
        A = /^([^\.]*)?(?:\.(.+))?$/,
        B = /(?:^|\s)hover(\.\S+)?\b/,
        C = /^key/,
        D = /^(?:mouse|contextmenu)|click/,
        E = /^(?:focusinfocus|focusoutblur)$/,
        F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        G = function (a) {
            var b = F.exec(a);
            b &&
                ((b[1] = (b[1] || "").toLowerCase()),
                (b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)")));
            return b;
        },
        H = function (a, b) {
            var c = a.attributes || {};
            return (
                (!b[1] || a.nodeName.toLowerCase() === b[1]) &&
                (!b[2] || (c.id || {}).value === b[2]) &&
                (!b[3] || b[3].test((c["class"] || {}).value))
            );
        },
        I = function (a) {
            return f.event.special.hover
                ? a
                : a.replace(B, "mouseenter$1 mouseleave$1");
        };
    (f.event = {
        add: function (a, c, d, e, g) {
            var h, i, j, k, l, m, n, o, p, q, r, s;
            if (
                !(
                    a.nodeType === 3 ||
                    a.nodeType === 8 ||
                    !c ||
                    !d ||
                    !(h = f._data(a))
                )
            ) {
                d.handler && ((p = d), (d = p.handler), (g = p.selector)),
                    d.guid || (d.guid = f.guid++),
                    (j = h.events),
                    j || (h.events = j = {}),
                    (i = h.handle),
                    i ||
                        ((h.handle = i =
                            function (a) {
                                return typeof f != "undefined" &&
                                    (!a || f.event.triggered !== a.type)
                                    ? f.event.dispatch.apply(i.elem, arguments)
                                    : b;
                            }),
                        (i.elem = a)),
                    (c = f.trim(I(c)).split(" "));
                for (k = 0; k < c.length; k++) {
                    (l = A.exec(c[k]) || []),
                        (m = l[1]),
                        (n = (l[2] || "").split(".").sort()),
                        (s = f.event.special[m] || {}),
                        (m = (g ? s.delegateType : s.bindType) || m),
                        (s = f.event.special[m] || {}),
                        (o = f.extend(
                            {
                                type: m,
                                origType: l[1],
                                data: e,
                                handler: d,
                                guid: d.guid,
                                selector: g,
                                quick: g && G(g),
                                namespace: n.join("."),
                            },
                            p
                        )),
                        (r = j[m]);
                    if (!r) {
                        (r = j[m] = []), (r.delegateCount = 0);
                        if (!s.setup || s.setup.call(a, e, n, i) === !1)
                            a.addEventListener
                                ? a.addEventListener(m, i, !1)
                                : a.attachEvent && a.attachEvent("on" + m, i);
                    }
                    s.add &&
                        (s.add.call(a, o),
                        o.handler.guid || (o.handler.guid = d.guid)),
                        g ? r.splice(r.delegateCount++, 0, o) : r.push(o),
                        (f.event.global[m] = !0);
                }
                a = null;
            }
        },
        global: {},
        remove: function (a, b, c, d, e) {
            var g = f.hasData(a) && f._data(a),
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q,
                r,
                s;
            if (!!g && !!(o = g.events)) {
                b = f.trim(I(b || "")).split(" ");
                for (h = 0; h < b.length; h++) {
                    (i = A.exec(b[h]) || []), (j = k = i[1]), (l = i[2]);
                    if (!j) {
                        for (j in o) f.event.remove(a, j + b[h], c, d, !0);
                        continue;
                    }
                    (p = f.event.special[j] || {}),
                        (j = (d ? p.delegateType : p.bindType) || j),
                        (r = o[j] || []),
                        (m = r.length),
                        (l = l
                            ? new RegExp(
                                  "(^|\\.)" +
                                      l
                                          .split(".")
                                          .sort()
                                          .join("\\.(?:.*\\.)?") +
                                      "(\\.|$)"
                              )
                            : null);
                    for (n = 0; n < r.length; n++)
                        (s = r[n]),
                            (e || k === s.origType) &&
                                (!c || c.guid === s.guid) &&
                                (!l || l.test(s.namespace)) &&
                                (!d ||
                                    d === s.selector ||
                                    (d === "**" && s.selector)) &&
                                (r.splice(n--, 1),
                                s.selector && r.delegateCount--,
                                p.remove && p.remove.call(a, s));
                    r.length === 0 &&
                        m !== r.length &&
                        ((!p.teardown || p.teardown.call(a, l) === !1) &&
                            f.removeEvent(a, j, g.handle),
                        delete o[j]);
                }
                f.isEmptyObject(o) &&
                    ((q = g.handle),
                    q && (q.elem = null),
                    f.removeData(a, ["events", "handle"], !0));
            }
        },
        customEvent: { getData: !0, setData: !0, changeData: !0 },
        trigger: function (c, d, e, g) {
            if (!e || (e.nodeType !== 3 && e.nodeType !== 8)) {
                var h = c.type || c,
                    i = [],
                    j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p,
                    q,
                    r,
                    s;
                if (E.test(h + f.event.triggered)) return;
                h.indexOf("!") >= 0 && ((h = h.slice(0, -1)), (k = !0)),
                    h.indexOf(".") >= 0 &&
                        ((i = h.split(".")), (h = i.shift()), i.sort());
                if ((!e || f.event.customEvent[h]) && !f.event.global[h])
                    return;
                (c =
                    typeof c == "object"
                        ? c[f.expando]
                            ? c
                            : new f.Event(h, c)
                        : new f.Event(h)),
                    (c.type = h),
                    (c.isTrigger = !0),
                    (c.exclusive = k),
                    (c.namespace = i.join(".")),
                    (c.namespace_re = c.namespace
                        ? new RegExp(
                              "(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)"
                          )
                        : null),
                    (o = h.indexOf(":") < 0 ? "on" + h : "");
                if (!e) {
                    j = f.cache;
                    for (l in j)
                        j[l].events &&
                            j[l].events[h] &&
                            f.event.trigger(c, d, j[l].handle.elem, !0);
                    return;
                }
                (c.result = b),
                    c.target || (c.target = e),
                    (d = d != null ? f.makeArray(d) : []),
                    d.unshift(c),
                    (p = f.event.special[h] || {});
                if (p.trigger && p.trigger.apply(e, d) === !1) return;
                r = [[e, p.bindType || h]];
                if (!g && !p.noBubble && !f.isWindow(e)) {
                    (s = p.delegateType || h),
                        (m = E.test(s + h) ? e : e.parentNode),
                        (n = null);
                    for (; m; m = m.parentNode) r.push([m, s]), (n = m);
                    n &&
                        n === e.ownerDocument &&
                        r.push([n.defaultView || n.parentWindow || a, s]);
                }
                for (l = 0; l < r.length && !c.isPropagationStopped(); l++)
                    (m = r[l][0]),
                        (c.type = r[l][1]),
                        (q =
                            (f._data(m, "events") || {})[c.type] &&
                            f._data(m, "handle")),
                        q && q.apply(m, d),
                        (q = o && m[o]),
                        q &&
                            f.acceptData(m) &&
                            q.apply(m, d) === !1 &&
                            c.preventDefault();
                (c.type = h),
                    !g &&
                        !c.isDefaultPrevented() &&
                        (!p._default ||
                            p._default.apply(e.ownerDocument, d) === !1) &&
                        (h !== "click" || !f.nodeName(e, "a")) &&
                        f.acceptData(e) &&
                        o &&
                        e[h] &&
                        ((h !== "focus" && h !== "blur") ||
                            c.target.offsetWidth !== 0) &&
                        !f.isWindow(e) &&
                        ((n = e[o]),
                        n && (e[o] = null),
                        (f.event.triggered = h),
                        e[h](),
                        (f.event.triggered = b),
                        n && (e[o] = n));
                return c.result;
            }
        },
        dispatch: function (c) {
            c = f.event.fix(c || a.event);
            var d = (f._data(this, "events") || {})[c.type] || [],
                e = d.delegateCount,
                g = [].slice.call(arguments, 0),
                h = !c.exclusive && !c.namespace,
                i = f.event.special[c.type] || {},
                j = [],
                k,
                l,
                m,
                n,
                o,
                p,
                q,
                r,
                s,
                t,
                u;
            (g[0] = c), (c.delegateTarget = this);
            if (!i.preDispatch || i.preDispatch.call(this, c) !== !1) {
                if (e && (!c.button || c.type !== "click")) {
                    (n = f(this)), (n.context = this.ownerDocument || this);
                    for (m = c.target; m != this; m = m.parentNode || this)
                        if (m.disabled !== !0) {
                            (p = {}), (r = []), (n[0] = m);
                            for (k = 0; k < e; k++)
                                (s = d[k]),
                                    (t = s.selector),
                                    p[t] === b &&
                                        (p[t] = s.quick
                                            ? H(m, s.quick)
                                            : n.is(t)),
                                    p[t] && r.push(s);
                            r.length && j.push({ elem: m, matches: r });
                        }
                }
                d.length > e && j.push({ elem: this, matches: d.slice(e) });
                for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
                    (q = j[k]), (c.currentTarget = q.elem);
                    for (
                        l = 0;
                        l < q.matches.length &&
                        !c.isImmediatePropagationStopped();
                        l++
                    ) {
                        s = q.matches[l];
                        if (
                            h ||
                            (!c.namespace && !s.namespace) ||
                            (c.namespace_re && c.namespace_re.test(s.namespace))
                        )
                            (c.data = s.data),
                                (c.handleObj = s),
                                (o = (
                                    (f.event.special[s.origType] || {})
                                        .handle || s.handler
                                ).apply(q.elem, g)),
                                o !== b &&
                                    ((c.result = o),
                                    o === !1 &&
                                        (c.preventDefault(),
                                        c.stopPropagation()));
                    }
                }
                i.postDispatch && i.postDispatch.call(this, c);
                return c.result;
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
            " "
        ),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                a.which == null &&
                    (a.which = b.charCode != null ? b.charCode : b.keyCode);
                return a;
            },
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
                " "
            ),
            filter: function (a, d) {
                var e,
                    f,
                    g,
                    h = d.button,
                    i = d.fromElement;
                a.pageX == null &&
                    d.clientX != null &&
                    ((e = a.target.ownerDocument || c),
                    (f = e.documentElement),
                    (g = e.body),
                    (a.pageX =
                        d.clientX +
                        ((f && f.scrollLeft) || (g && g.scrollLeft) || 0) -
                        ((f && f.clientLeft) || (g && g.clientLeft) || 0)),
                    (a.pageY =
                        d.clientY +
                        ((f && f.scrollTop) || (g && g.scrollTop) || 0) -
                        ((f && f.clientTop) || (g && g.clientTop) || 0))),
                    !a.relatedTarget &&
                        i &&
                        (a.relatedTarget = i === a.target ? d.toElement : i),
                    !a.which &&
                        h !== b &&
                        (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
                return a;
            },
        },
        fix: function (a) {
            if (a[f.expando]) return a;
            var d,
                e,
                g = a,
                h = f.event.fixHooks[a.type] || {},
                i = h.props ? this.props.concat(h.props) : this.props;
            a = f.Event(g);
            for (d = i.length; d; ) (e = i[--d]), (a[e] = g[e]);
            a.target || (a.target = g.srcElement || c),
                a.target.nodeType === 3 && (a.target = a.target.parentNode),
                a.metaKey === b && (a.metaKey = a.ctrlKey);
            return h.filter ? h.filter(a, g) : a;
        },
        special: {
            ready: { setup: f.bindReady },
            load: { noBubble: !0 },
            focus: { delegateType: "focusin" },
            blur: { delegateType: "focusout" },
            beforeunload: {
                setup: function (a, b, c) {
                    f.isWindow(this) && (this.onbeforeunload = c);
                },
                teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null);
                },
            },
        },
        simulate: function (a, b, c, d) {
            var e = f.extend(new f.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {},
            });
            d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e),
                e.isDefaultPrevented() && c.preventDefault();
        },
    }),
        (f.event.handle = f.event.dispatch),
        (f.removeEvent = c.removeEventListener
            ? function (a, b, c) {
                  a.removeEventListener && a.removeEventListener(b, c, !1);
              }
            : function (a, b, c) {
                  a.detachEvent && a.detachEvent("on" + b, c);
              }),
        (f.Event = function (a, b) {
            if (!(this instanceof f.Event)) return new f.Event(a, b);
            a && a.type
                ? ((this.originalEvent = a),
                  (this.type = a.type),
                  (this.isDefaultPrevented =
                      a.defaultPrevented ||
                      a.returnValue === !1 ||
                      (a.getPreventDefault && a.getPreventDefault())
                          ? K
                          : J))
                : (this.type = a),
                b && f.extend(this, b),
                (this.timeStamp = (a && a.timeStamp) || f.now()),
                (this[f.expando] = !0);
        }),
        (f.Event.prototype = {
            preventDefault: function () {
                this.isDefaultPrevented = K;
                var a = this.originalEvent;
                !a ||
                    (a.preventDefault
                        ? a.preventDefault()
                        : (a.returnValue = !1));
            },
            stopPropagation: function () {
                this.isPropagationStopped = K;
                var a = this.originalEvent;
                !a ||
                    (a.stopPropagation && a.stopPropagation(),
                    (a.cancelBubble = !0));
            },
            stopImmediatePropagation: function () {
                (this.isImmediatePropagationStopped = K),
                    this.stopPropagation();
            },
            isDefaultPrevented: J,
            isPropagationStopped: J,
            isImmediatePropagationStopped: J,
        }),
        f.each(
            { mouseenter: "mouseover", mouseleave: "mouseout" },
            function (a, b) {
                f.event.special[a] = {
                    delegateType: b,
                    bindType: b,
                    handle: function (a) {
                        var c = this,
                            d = a.relatedTarget,
                            e = a.handleObj,
                            g = e.selector,
                            h;
                        if (!d || (d !== c && !f.contains(c, d)))
                            (a.type = e.origType),
                                (h = e.handler.apply(this, arguments)),
                                (a.type = b);
                        return h;
                    },
                };
            }
        ),
        f.support.submitBubbles ||
            (f.event.special.submit = {
                setup: function () {
                    if (f.nodeName(this, "form")) return !1;
                    f.event.add(
                        this,
                        "click._submit keypress._submit",
                        function (a) {
                            var c = a.target,
                                d =
                                    f.nodeName(c, "input") ||
                                    f.nodeName(c, "button")
                                        ? c.form
                                        : b;
                            d &&
                                !d._submit_attached &&
                                (f.event.add(d, "submit._submit", function (a) {
                                    a._submit_bubble = !0;
                                }),
                                (d._submit_attached = !0));
                        }
                    );
                },
                postDispatch: function (a) {
                    a._submit_bubble &&
                        (delete a._submit_bubble,
                        this.parentNode &&
                            !a.isTrigger &&
                            f.event.simulate("submit", this.parentNode, a, !0));
                },
                teardown: function () {
                    if (f.nodeName(this, "form")) return !1;
                    f.event.remove(this, "._submit");
                },
            }),
        f.support.changeBubbles ||
            (f.event.special.change = {
                setup: function () {
                    if (z.test(this.nodeName)) {
                        if (this.type === "checkbox" || this.type === "radio")
                            f.event.add(
                                this,
                                "propertychange._change",
                                function (a) {
                                    a.originalEvent.propertyName ===
                                        "checked" && (this._just_changed = !0);
                                }
                            ),
                                f.event.add(
                                    this,
                                    "click._change",
                                    function (a) {
                                        this._just_changed &&
                                            !a.isTrigger &&
                                            ((this._just_changed = !1),
                                            f.event.simulate(
                                                "change",
                                                this,
                                                a,
                                                !0
                                            ));
                                    }
                                );
                        return !1;
                    }
                    f.event.add(this, "beforeactivate._change", function (a) {
                        var b = a.target;
                        z.test(b.nodeName) &&
                            !b._change_attached &&
                            (f.event.add(b, "change._change", function (a) {
                                this.parentNode &&
                                    !a.isSimulated &&
                                    !a.isTrigger &&
                                    f.event.simulate(
                                        "change",
                                        this.parentNode,
                                        a,
                                        !0
                                    );
                            }),
                            (b._change_attached = !0));
                    });
                },
                handle: function (a) {
                    var b = a.target;
                    if (
                        this !== b ||
                        a.isSimulated ||
                        a.isTrigger ||
                        (b.type !== "radio" && b.type !== "checkbox")
                    )
                        return a.handleObj.handler.apply(this, arguments);
                },
                teardown: function () {
                    f.event.remove(this, "._change");
                    return z.test(this.nodeName);
                },
            }),
        f.support.focusinBubbles ||
            f.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
                var d = 0,
                    e = function (a) {
                        f.event.simulate(b, a.target, f.event.fix(a), !0);
                    };
                f.event.special[b] = {
                    setup: function () {
                        d++ === 0 && c.addEventListener(a, e, !0);
                    },
                    teardown: function () {
                        --d === 0 && c.removeEventListener(a, e, !0);
                    },
                };
            }),
        f.fn.extend({
            on: function (a, c, d, e, g) {
                var h, i;
                if (typeof a == "object") {
                    typeof c != "string" && ((d = d || c), (c = b));
                    for (i in a) this.on(i, c, d, a[i], g);
                    return this;
                }
                d == null && e == null
                    ? ((e = c), (d = c = b))
                    : e == null &&
                      (typeof c == "string"
                          ? ((e = d), (d = b))
                          : ((e = d), (d = c), (c = b)));
                if (e === !1) e = J;
                else if (!e) return this;
                g === 1 &&
                    ((h = e),
                    (e = function (a) {
                        f().off(a);
                        return h.apply(this, arguments);
                    }),
                    (e.guid = h.guid || (h.guid = f.guid++)));
                return this.each(function () {
                    f.event.add(this, a, e, d, c);
                });
            },
            one: function (a, b, c, d) {
                return this.on(a, b, c, d, 1);
            },
            off: function (a, c, d) {
                if (a && a.preventDefault && a.handleObj) {
                    var e = a.handleObj;
                    f(a.delegateTarget).off(
                        e.namespace
                            ? e.origType + "." + e.namespace
                            : e.origType,
                        e.selector,
                        e.handler
                    );
                    return this;
                }
                if (typeof a == "object") {
                    for (var g in a) this.off(g, c, a[g]);
                    return this;
                }
                if (c === !1 || typeof c == "function") (d = c), (c = b);
                d === !1 && (d = J);
                return this.each(function () {
                    f.event.remove(this, a, d, c);
                });
            },
            bind: function (a, b, c) {
                return this.on(a, null, b, c);
            },
            unbind: function (a, b) {
                return this.off(a, null, b);
            },
            live: function (a, b, c) {
                f(this.context).on(a, this.selector, b, c);
                return this;
            },
            die: function (a, b) {
                f(this.context).off(a, this.selector || "**", b);
                return this;
            },
            delegate: function (a, b, c, d) {
                return this.on(b, a, c, d);
            },
            undelegate: function (a, b, c) {
                return arguments.length == 1
                    ? this.off(a, "**")
                    : this.off(b, a, c);
            },
            trigger: function (a, b) {
                return this.each(function () {
                    f.event.trigger(a, b, this);
                });
            },
            triggerHandler: function (a, b) {
                if (this[0]) return f.event.trigger(a, b, this[0], !0);
            },
            toggle: function (a) {
                var b = arguments,
                    c = a.guid || f.guid++,
                    d = 0,
                    e = function (c) {
                        var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                        f._data(this, "lastToggle" + a.guid, e + 1),
                            c.preventDefault();
                        return b[e].apply(this, arguments) || !1;
                    };
                e.guid = c;
                while (d < b.length) b[d++].guid = c;
                return this.click(e);
            },
            hover: function (a, b) {
                return this.mouseenter(a).mouseleave(b || a);
            },
        }),
        f.each(
            "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
                " "
            ),
            function (a, b) {
                (f.fn[b] = function (a, c) {
                    c == null && ((c = a), (a = null));
                    return arguments.length > 0
                        ? this.on(b, null, a, c)
                        : this.trigger(b);
                }),
                    f.attrFn && (f.attrFn[b] = !0),
                    C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks),
                    D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks);
            }
        ),
        (function () {
            function x(a, b, c, e, f, g) {
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = e[h];
                    if (j) {
                        var k = !1;
                        j = j[a];
                        while (j) {
                            if (j[d] === c) {
                                k = e[j.sizset];
                                break;
                            }
                            if (j.nodeType === 1) {
                                g || ((j[d] = c), (j.sizset = h));
                                if (typeof b != "string") {
                                    if (j === b) {
                                        k = !0;
                                        break;
                                    }
                                } else if (m.filter(b, [j]).length > 0) {
                                    k = j;
                                    break;
                                }
                            }
                            j = j[a];
                        }
                        e[h] = k;
                    }
                }
            }
            function w(a, b, c, e, f, g) {
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = e[h];
                    if (j) {
                        var k = !1;
                        j = j[a];
                        while (j) {
                            if (j[d] === c) {
                                k = e[j.sizset];
                                break;
                            }
                            j.nodeType === 1 &&
                                !g &&
                                ((j[d] = c), (j.sizset = h));
                            if (j.nodeName.toLowerCase() === b) {
                                k = j;
                                break;
                            }
                            j = j[a];
                        }
                        e[h] = k;
                    }
                }
            }
            var a =
                    /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                d = "sizcache" + (Math.random() + "").replace(".", ""),
                e = 0,
                g = Object.prototype.toString,
                h = !1,
                i = !0,
                j = /\\/g,
                k = /\r\n/g,
                l = /\W/;
            [0, 0].sort(function () {
                i = !1;
                return 0;
            });
            var m = function (b, d, e, f) {
                (e = e || []), (d = d || c);
                var h = d;
                if (d.nodeType !== 1 && d.nodeType !== 9) return [];
                if (!b || typeof b != "string") return e;
                var i,
                    j,
                    k,
                    l,
                    n,
                    q,
                    r,
                    t,
                    u = !0,
                    v = m.isXML(d),
                    w = [],
                    x = b;
                do {
                    a.exec(""), (i = a.exec(x));
                    if (i) {
                        (x = i[3]), w.push(i[1]);
                        if (i[2]) {
                            l = i[3];
                            break;
                        }
                    }
                } while (i);
                if (w.length > 1 && p.exec(b))
                    if (w.length === 2 && o.relative[w[0]])
                        j = y(w[0] + w[1], d, f);
                    else {
                        j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                        while (w.length)
                            (b = w.shift()),
                                o.relative[b] && (b += w.shift()),
                                (j = y(b, j, f));
                    }
                else {
                    !f &&
                        w.length > 1 &&
                        d.nodeType === 9 &&
                        !v &&
                        o.match.ID.test(w[0]) &&
                        !o.match.ID.test(w[w.length - 1]) &&
                        ((n = m.find(w.shift(), d, v)),
                        (d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]));
                    if (d) {
                        (n = f
                            ? { expr: w.pop(), set: s(f) }
                            : m.find(
                                  w.pop(),
                                  w.length === 1 &&
                                      (w[0] === "~" || w[0] === "+") &&
                                      d.parentNode
                                      ? d.parentNode
                                      : d,
                                  v
                              )),
                            (j = n.expr ? m.filter(n.expr, n.set) : n.set),
                            w.length > 0 ? (k = s(j)) : (u = !1);
                        while (w.length)
                            (q = w.pop()),
                                (r = q),
                                o.relative[q] ? (r = w.pop()) : (q = ""),
                                r == null && (r = d),
                                o.relative[q](k, r, v);
                    } else k = w = [];
                }
                k || (k = j), k || m.error(q || b);
                if (g.call(k) === "[object Array]")
                    if (!u) e.push.apply(e, k);
                    else if (d && d.nodeType === 1)
                        for (t = 0; k[t] != null; t++)
                            k[t] &&
                                (k[t] === !0 ||
                                    (k[t].nodeType === 1 &&
                                        m.contains(d, k[t]))) &&
                                e.push(j[t]);
                    else
                        for (t = 0; k[t] != null; t++)
                            k[t] && k[t].nodeType === 1 && e.push(j[t]);
                else s(k, e);
                l && (m(l, h, e, f), m.uniqueSort(e));
                return e;
            };
            (m.uniqueSort = function (a) {
                if (u) {
                    (h = i), a.sort(u);
                    if (h)
                        for (var b = 1; b < a.length; b++)
                            a[b] === a[b - 1] && a.splice(b--, 1);
                }
                return a;
            }),
                (m.matches = function (a, b) {
                    return m(a, null, null, b);
                }),
                (m.matchesSelector = function (a, b) {
                    return m(b, null, null, [a]).length > 0;
                }),
                (m.find = function (a, b, c) {
                    var d, e, f, g, h, i;
                    if (!a) return [];
                    for (e = 0, f = o.order.length; e < f; e++) {
                        h = o.order[e];
                        if ((g = o.leftMatch[h].exec(a))) {
                            (i = g[1]), g.splice(1, 1);
                            if (i.substr(i.length - 1) !== "\\") {
                                (g[1] = (g[1] || "").replace(j, "")),
                                    (d = o.find[h](g, b, c));
                                if (d != null) {
                                    a = a.replace(o.match[h], "");
                                    break;
                                }
                            }
                        }
                    }
                    d ||
                        (d =
                            typeof b.getElementsByTagName != "undefined"
                                ? b.getElementsByTagName("*")
                                : []);
                    return { set: d, expr: a };
                }),
                (m.filter = function (a, c, d, e) {
                    var f,
                        g,
                        h,
                        i,
                        j,
                        k,
                        l,
                        n,
                        p,
                        q = a,
                        r = [],
                        s = c,
                        t = c && c[0] && m.isXML(c[0]);
                    while (a && c.length) {
                        for (h in o.filter)
                            if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                                (k = o.filter[h]),
                                    (l = f[1]),
                                    (g = !1),
                                    f.splice(1, 1);
                                if (l.substr(l.length - 1) === "\\") continue;
                                s === r && (r = []);
                                if (o.preFilter[h]) {
                                    f = o.preFilter[h](f, s, d, r, e, t);
                                    if (!f) g = i = !0;
                                    else if (f === !0) continue;
                                }
                                if (f)
                                    for (n = 0; (j = s[n]) != null; n++)
                                        j &&
                                            ((i = k(j, f, n, s)),
                                            (p = e ^ i),
                                            d && i != null
                                                ? p
                                                    ? (g = !0)
                                                    : (s[n] = !1)
                                                : p && (r.push(j), (g = !0)));
                                if (i !== b) {
                                    d || (s = r),
                                        (a = a.replace(o.match[h], ""));
                                    if (!g) return [];
                                    break;
                                }
                            }
                        if (a === q)
                            if (g == null) m.error(a);
                            else break;
                        q = a;
                    }
                    return s;
                }),
                (m.error = function (a) {
                    throw new Error(
                        "Syntax error, unrecognized expression: " + a
                    );
                });
            var n = (m.getText = function (a) {
                    var b,
                        c,
                        d = a.nodeType,
                        e = "";
                    if (d) {
                        if (d === 1 || d === 9 || d === 11) {
                            if (typeof a.textContent == "string")
                                return a.textContent;
                            if (typeof a.innerText == "string")
                                return a.innerText.replace(k, "");
                            for (a = a.firstChild; a; a = a.nextSibling)
                                e += n(a);
                        } else if (d === 3 || d === 4) return a.nodeValue;
                    } else
                        for (b = 0; (c = a[b]); b++)
                            c.nodeType !== 8 && (e += n(c));
                    return e;
                }),
                o = (m.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/,
                    },
                    leftMatch: {},
                    attrMap: { class: "className", for: "htmlFor" },
                    attrHandle: {
                        href: function (a) {
                            return a.getAttribute("href");
                        },
                        type: function (a) {
                            return a.getAttribute("type");
                        },
                    },
                    relative: {
                        "+": function (a, b) {
                            var c = typeof b == "string",
                                d = c && !l.test(b),
                                e = c && !d;
                            d && (b = b.toLowerCase());
                            for (var f = 0, g = a.length, h; f < g; f++)
                                if ((h = a[f])) {
                                    while (
                                        (h = h.previousSibling) &&
                                        h.nodeType !== 1
                                    );
                                    a[f] =
                                        e ||
                                        (h && h.nodeName.toLowerCase() === b)
                                            ? h || !1
                                            : h === b;
                                }
                            e && m.filter(b, a, !0);
                        },
                        ">": function (a, b) {
                            var c,
                                d = typeof b == "string",
                                e = 0,
                                f = a.length;
                            if (d && !l.test(b)) {
                                b = b.toLowerCase();
                                for (; e < f; e++) {
                                    c = a[e];
                                    if (c) {
                                        var g = c.parentNode;
                                        a[e] =
                                            g.nodeName.toLowerCase() === b
                                                ? g
                                                : !1;
                                    }
                                }
                            } else {
                                for (; e < f; e++)
                                    (c = a[e]),
                                        c &&
                                            (a[e] = d
                                                ? c.parentNode
                                                : c.parentNode === b);
                                d && m.filter(b, a, !0);
                            }
                        },
                        "": function (a, b, c) {
                            var d,
                                f = e++,
                                g = x;
                            typeof b == "string" &&
                                !l.test(b) &&
                                ((b = b.toLowerCase()), (d = b), (g = w)),
                                g("parentNode", b, f, a, d, c);
                        },
                        "~": function (a, b, c) {
                            var d,
                                f = e++,
                                g = x;
                            typeof b == "string" &&
                                !l.test(b) &&
                                ((b = b.toLowerCase()), (d = b), (g = w)),
                                g("previousSibling", b, f, a, d, c);
                        },
                    },
                    find: {
                        ID: function (a, b, c) {
                            if (typeof b.getElementById != "undefined" && !c) {
                                var d = b.getElementById(a[1]);
                                return d && d.parentNode ? [d] : [];
                            }
                        },
                        NAME: function (a, b) {
                            if (typeof b.getElementsByName != "undefined") {
                                var c = [],
                                    d = b.getElementsByName(a[1]);
                                for (var e = 0, f = d.length; e < f; e++)
                                    d[e].getAttribute("name") === a[1] &&
                                        c.push(d[e]);
                                return c.length === 0 ? null : c;
                            }
                        },
                        TAG: function (a, b) {
                            if (typeof b.getElementsByTagName != "undefined")
                                return b.getElementsByTagName(a[1]);
                        },
                    },
                    preFilter: {
                        CLASS: function (a, b, c, d, e, f) {
                            a = " " + a[1].replace(j, "") + " ";
                            if (f) return a;
                            for (var g = 0, h; (h = b[g]) != null; g++)
                                h &&
                                    (e ^
                                    (h.className &&
                                        (" " + h.className + " ")
                                            .replace(/[\t\n\r]/g, " ")
                                            .indexOf(a) >= 0)
                                        ? c || d.push(h)
                                        : c && (b[g] = !1));
                            return !1;
                        },
                        ID: function (a) {
                            return a[1].replace(j, "");
                        },
                        TAG: function (a, b) {
                            return a[1].replace(j, "").toLowerCase();
                        },
                        CHILD: function (a) {
                            if (a[1] === "nth") {
                                a[2] || m.error(a[0]),
                                    (a[2] = a[2].replace(/^\+|\s*/g, ""));
                                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(
                                    (a[2] === "even" && "2n") ||
                                        (a[2] === "odd" && "2n+1") ||
                                        (!/\D/.test(a[2]) && "0n+" + a[2]) ||
                                        a[2]
                                );
                                (a[2] = b[1] + (b[2] || 1) - 0),
                                    (a[3] = b[3] - 0);
                            } else a[2] && m.error(a[0]);
                            a[0] = e++;
                            return a;
                        },
                        ATTR: function (a, b, c, d, e, f) {
                            var g = (a[1] = a[1].replace(j, ""));
                            !f && o.attrMap[g] && (a[1] = o.attrMap[g]),
                                (a[4] = (a[4] || a[5] || "").replace(j, "")),
                                a[2] === "~=" && (a[4] = " " + a[4] + " ");
                            return a;
                        },
                        PSEUDO: function (b, c, d, e, f) {
                            if (b[1] === "not")
                                if (
                                    (a.exec(b[3]) || "").length > 1 ||
                                    /^\w/.test(b[3])
                                )
                                    b[3] = m(b[3], null, null, c);
                                else {
                                    var g = m.filter(b[3], c, d, !0 ^ f);
                                    d || e.push.apply(e, g);
                                    return !1;
                                }
                            else if (
                                o.match.POS.test(b[0]) ||
                                o.match.CHILD.test(b[0])
                            )
                                return !0;
                            return b;
                        },
                        POS: function (a) {
                            a.unshift(!0);
                            return a;
                        },
                    },
                    filters: {
                        enabled: function (a) {
                            return a.disabled === !1 && a.type !== "hidden";
                        },
                        disabled: function (a) {
                            return a.disabled === !0;
                        },
                        checked: function (a) {
                            return a.checked === !0;
                        },
                        selected: function (a) {
                            a.parentNode && a.parentNode.selectedIndex;
                            return a.selected === !0;
                        },
                        parent: function (a) {
                            return !!a.firstChild;
                        },
                        empty: function (a) {
                            return !a.firstChild;
                        },
                        has: function (a, b, c) {
                            return !!m(c[3], a).length;
                        },
                        header: function (a) {
                            return /h\d/i.test(a.nodeName);
                        },
                        text: function (a) {
                            var b = a.getAttribute("type"),
                                c = a.type;
                            return (
                                a.nodeName.toLowerCase() === "input" &&
                                "text" === c &&
                                (b === c || b === null)
                            );
                        },
                        radio: function (a) {
                            return (
                                a.nodeName.toLowerCase() === "input" &&
                                "radio" === a.type
                            );
                        },
                        checkbox: function (a) {
                            return (
                                a.nodeName.toLowerCase() === "input" &&
                                "checkbox" === a.type
                            );
                        },
                        file: function (a) {
                            return (
                                a.nodeName.toLowerCase() === "input" &&
                                "file" === a.type
                            );
                        },
                        password: function (a) {
                            return (
                                a.nodeName.toLowerCase() === "input" &&
                                "password" === a.type
                            );
                        },
                        submit: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return (
                                (b === "input" || b === "button") &&
                                "submit" === a.type
                            );
                        },
                        image: function (a) {
                            return (
                                a.nodeName.toLowerCase() === "input" &&
                                "image" === a.type
                            );
                        },
                        reset: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return (
                                (b === "input" || b === "button") &&
                                "reset" === a.type
                            );
                        },
                        button: function (a) {
                            var b = a.nodeName.toLowerCase();
                            return (
                                (b === "input" && "button" === a.type) ||
                                b === "button"
                            );
                        },
                        input: function (a) {
                            return /input|select|textarea|button/i.test(
                                a.nodeName
                            );
                        },
                        focus: function (a) {
                            return a === a.ownerDocument.activeElement;
                        },
                    },
                    setFilters: {
                        first: function (a, b) {
                            return b === 0;
                        },
                        last: function (a, b, c, d) {
                            return b === d.length - 1;
                        },
                        even: function (a, b) {
                            return b % 2 === 0;
                        },
                        odd: function (a, b) {
                            return b % 2 === 1;
                        },
                        lt: function (a, b, c) {
                            return b < c[3] - 0;
                        },
                        gt: function (a, b, c) {
                            return b > c[3] - 0;
                        },
                        nth: function (a, b, c) {
                            return c[3] - 0 === b;
                        },
                        eq: function (a, b, c) {
                            return c[3] - 0 === b;
                        },
                    },
                    filter: {
                        PSEUDO: function (a, b, c, d) {
                            var e = b[1],
                                f = o.filters[e];
                            if (f) return f(a, c, b, d);
                            if (e === "contains")
                                return (
                                    (
                                        a.textContent ||
                                        a.innerText ||
                                        n([a]) ||
                                        ""
                                    ).indexOf(b[3]) >= 0
                                );
                            if (e === "not") {
                                var g = b[3];
                                for (var h = 0, i = g.length; h < i; h++)
                                    if (g[h] === a) return !1;
                                return !0;
                            }
                            m.error(e);
                        },
                        CHILD: function (a, b) {
                            var c,
                                e,
                                f,
                                g,
                                h,
                                i,
                                j,
                                k = b[1],
                                l = a;
                            switch (k) {
                                case "only":
                                case "first":
                                    while ((l = l.previousSibling))
                                        if (l.nodeType === 1) return !1;
                                    if (k === "first") return !0;
                                    l = a;
                                case "last":
                                    while ((l = l.nextSibling))
                                        if (l.nodeType === 1) return !1;
                                    return !0;
                                case "nth":
                                    (c = b[2]), (e = b[3]);
                                    if (c === 1 && e === 0) return !0;
                                    (f = b[0]), (g = a.parentNode);
                                    if (g && (g[d] !== f || !a.nodeIndex)) {
                                        i = 0;
                                        for (
                                            l = g.firstChild;
                                            l;
                                            l = l.nextSibling
                                        )
                                            l.nodeType === 1 &&
                                                (l.nodeIndex = ++i);
                                        g[d] = f;
                                    }
                                    j = a.nodeIndex - e;
                                    return c === 0
                                        ? j === 0
                                        : j % c === 0 && j / c >= 0;
                            }
                        },
                        ID: function (a, b) {
                            return (
                                a.nodeType === 1 && a.getAttribute("id") === b
                            );
                        },
                        TAG: function (a, b) {
                            return (
                                (b === "*" && a.nodeType === 1) ||
                                (!!a.nodeName && a.nodeName.toLowerCase() === b)
                            );
                        },
                        CLASS: function (a, b) {
                            return (
                                (
                                    " " +
                                    (a.className || a.getAttribute("class")) +
                                    " "
                                ).indexOf(b) > -1
                            );
                        },
                        ATTR: function (a, b) {
                            var c = b[1],
                                d = m.attr
                                    ? m.attr(a, c)
                                    : o.attrHandle[c]
                                    ? o.attrHandle[c](a)
                                    : a[c] != null
                                    ? a[c]
                                    : a.getAttribute(c),
                                e = d + "",
                                f = b[2],
                                g = b[4];
                            return d == null
                                ? f === "!="
                                : !f && m.attr
                                ? d != null
                                : f === "="
                                ? e === g
                                : f === "*="
                                ? e.indexOf(g) >= 0
                                : f === "~="
                                ? (" " + e + " ").indexOf(g) >= 0
                                : g
                                ? f === "!="
                                    ? e !== g
                                    : f === "^="
                                    ? e.indexOf(g) === 0
                                    : f === "$="
                                    ? e.substr(e.length - g.length) === g
                                    : f === "|="
                                    ? e === g ||
                                      e.substr(0, g.length + 1) === g + "-"
                                    : !1
                                : e && d !== !1;
                        },
                        POS: function (a, b, c, d) {
                            var e = b[2],
                                f = o.setFilters[e];
                            if (f) return f(a, c, b, d);
                        },
                    },
                }),
                p = o.match.POS,
                q = function (a, b) {
                    return "\\" + (b - 0 + 1);
                };
            for (var r in o.match)
                (o.match[r] = new RegExp(
                    o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source
                )),
                    (o.leftMatch[r] = new RegExp(
                        /(^(?:.|\r|\n)*?)/.source +
                            o.match[r].source.replace(/\\(\d+)/g, q)
                    ));
            o.match.globalPOS = p;
            var s = function (a, b) {
                a = Array.prototype.slice.call(a, 0);
                if (b) {
                    b.push.apply(b, a);
                    return b;
                }
                return a;
            };
            try {
                Array.prototype.slice.call(c.documentElement.childNodes, 0)[0]
                    .nodeType;
            } catch (t) {
                s = function (a, b) {
                    var c = 0,
                        d = b || [];
                    if (g.call(a) === "[object Array]")
                        Array.prototype.push.apply(d, a);
                    else if (typeof a.length == "number")
                        for (var e = a.length; c < e; c++) d.push(a[c]);
                    else for (; a[c]; c++) d.push(a[c]);
                    return d;
                };
            }
            var u, v;
            c.documentElement.compareDocumentPosition
                ? (u = function (a, b) {
                      if (a === b) {
                          h = !0;
                          return 0;
                      }
                      if (
                          !a.compareDocumentPosition ||
                          !b.compareDocumentPosition
                      )
                          return a.compareDocumentPosition ? -1 : 1;
                      return a.compareDocumentPosition(b) & 4 ? -1 : 1;
                  })
                : ((u = function (a, b) {
                      if (a === b) {
                          h = !0;
                          return 0;
                      }
                      if (a.sourceIndex && b.sourceIndex)
                          return a.sourceIndex - b.sourceIndex;
                      var c,
                          d,
                          e = [],
                          f = [],
                          g = a.parentNode,
                          i = b.parentNode,
                          j = g;
                      if (g === i) return v(a, b);
                      if (!g) return -1;
                      if (!i) return 1;
                      while (j) e.unshift(j), (j = j.parentNode);
                      j = i;
                      while (j) f.unshift(j), (j = j.parentNode);
                      (c = e.length), (d = f.length);
                      for (var k = 0; k < c && k < d; k++)
                          if (e[k] !== f[k]) return v(e[k], f[k]);
                      return k === c ? v(a, f[k], -1) : v(e[k], b, 1);
                  }),
                  (v = function (a, b, c) {
                      if (a === b) return c;
                      var d = a.nextSibling;
                      while (d) {
                          if (d === b) return -1;
                          d = d.nextSibling;
                      }
                      return 1;
                  })),
                (function () {
                    var a = c.createElement("div"),
                        d = "script" + new Date().getTime(),
                        e = c.documentElement;
                    (a.innerHTML = "<a name='" + d + "'/>"),
                        e.insertBefore(a, e.firstChild),
                        c.getElementById(d) &&
                            ((o.find.ID = function (a, c, d) {
                                if (
                                    typeof c.getElementById != "undefined" &&
                                    !d
                                ) {
                                    var e = c.getElementById(a[1]);
                                    return e
                                        ? e.id === a[1] ||
                                          (typeof e.getAttributeNode !=
                                              "undefined" &&
                                              e.getAttributeNode("id")
                                                  .nodeValue === a[1])
                                            ? [e]
                                            : b
                                        : [];
                                }
                            }),
                            (o.filter.ID = function (a, b) {
                                var c =
                                    typeof a.getAttributeNode != "undefined" &&
                                    a.getAttributeNode("id");
                                return (
                                    a.nodeType === 1 && c && c.nodeValue === b
                                );
                            })),
                        e.removeChild(a),
                        (e = a = null);
                })(),
                (function () {
                    var a = c.createElement("div");
                    a.appendChild(c.createComment("")),
                        a.getElementsByTagName("*").length > 0 &&
                            (o.find.TAG = function (a, b) {
                                var c = b.getElementsByTagName(a[1]);
                                if (a[1] === "*") {
                                    var d = [];
                                    for (var e = 0; c[e]; e++)
                                        c[e].nodeType === 1 && d.push(c[e]);
                                    c = d;
                                }
                                return c;
                            }),
                        (a.innerHTML = "<a href='#'></a>"),
                        a.firstChild &&
                            typeof a.firstChild.getAttribute != "undefined" &&
                            a.firstChild.getAttribute("href") !== "#" &&
                            (o.attrHandle.href = function (a) {
                                return a.getAttribute("href", 2);
                            }),
                        (a = null);
                })(),
                c.querySelectorAll &&
                    (function () {
                        var a = m,
                            b = c.createElement("div"),
                            d = "__sizzle__";
                        b.innerHTML = "<p class='TEST'></p>";
                        if (
                            !b.querySelectorAll ||
                            b.querySelectorAll(".TEST").length !== 0
                        ) {
                            m = function (b, e, f, g) {
                                e = e || c;
                                if (!g && !m.isXML(e)) {
                                    var h =
                                        /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(
                                            b
                                        );
                                    if (
                                        h &&
                                        (e.nodeType === 1 || e.nodeType === 9)
                                    ) {
                                        if (h[1])
                                            return s(
                                                e.getElementsByTagName(b),
                                                f
                                            );
                                        if (
                                            h[2] &&
                                            o.find.CLASS &&
                                            e.getElementsByClassName
                                        )
                                            return s(
                                                e.getElementsByClassName(h[2]),
                                                f
                                            );
                                    }
                                    if (e.nodeType === 9) {
                                        if (b === "body" && e.body)
                                            return s([e.body], f);
                                        if (h && h[3]) {
                                            var i = e.getElementById(h[3]);
                                            if (!i || !i.parentNode)
                                                return s([], f);
                                            if (i.id === h[3]) return s([i], f);
                                        }
                                        try {
                                            return s(e.querySelectorAll(b), f);
                                        } catch (j) {}
                                    } else if (
                                        e.nodeType === 1 &&
                                        e.nodeName.toLowerCase() !== "object"
                                    ) {
                                        var k = e,
                                            l = e.getAttribute("id"),
                                            n = l || d,
                                            p = e.parentNode,
                                            q = /^\s*[+~]/.test(b);
                                        l
                                            ? (n = n.replace(/'/g, "\\$&"))
                                            : e.setAttribute("id", n),
                                            q && p && (e = e.parentNode);
                                        try {
                                            if (!q || p)
                                                return s(
                                                    e.querySelectorAll(
                                                        "[id='" + n + "'] " + b
                                                    ),
                                                    f
                                                );
                                        } catch (r) {
                                        } finally {
                                            l || k.removeAttribute("id");
                                        }
                                    }
                                }
                                return a(b, e, f, g);
                            };
                            for (var e in a) m[e] = a[e];
                            b = null;
                        }
                    })(),
                (function () {
                    var a = c.documentElement,
                        b =
                            a.matchesSelector ||
                            a.mozMatchesSelector ||
                            a.webkitMatchesSelector ||
                            a.msMatchesSelector;
                    if (b) {
                        var d = !b.call(c.createElement("div"), "div"),
                            e = !1;
                        try {
                            b.call(c.documentElement, "[test!='']:sizzle");
                        } catch (f) {
                            e = !0;
                        }
                        m.matchesSelector = function (a, c) {
                            c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                            if (!m.isXML(a))
                                try {
                                    if (
                                        e ||
                                        (!o.match.PSEUDO.test(c) &&
                                            !/!=/.test(c))
                                    ) {
                                        var f = b.call(a, c);
                                        if (
                                            f ||
                                            !d ||
                                            (a.document &&
                                                a.document.nodeType !== 11)
                                        )
                                            return f;
                                    }
                                } catch (g) {}
                            return m(c, null, null, [a]).length > 0;
                        };
                    }
                })(),
                (function () {
                    var a = c.createElement("div");
                    a.innerHTML =
                        "<div class='test e'></div><div class='test'></div>";
                    if (
                        !!a.getElementsByClassName &&
                        a.getElementsByClassName("e").length !== 0
                    ) {
                        a.lastChild.className = "e";
                        if (a.getElementsByClassName("e").length === 1) return;
                        o.order.splice(1, 0, "CLASS"),
                            (o.find.CLASS = function (a, b, c) {
                                if (
                                    typeof b.getElementsByClassName !=
                                        "undefined" &&
                                    !c
                                )
                                    return b.getElementsByClassName(a[1]);
                            }),
                            (a = null);
                    }
                })(),
                c.documentElement.contains
                    ? (m.contains = function (a, b) {
                          return a !== b && (a.contains ? a.contains(b) : !0);
                      })
                    : c.documentElement.compareDocumentPosition
                    ? (m.contains = function (a, b) {
                          return !!(a.compareDocumentPosition(b) & 16);
                      })
                    : (m.contains = function () {
                          return !1;
                      }),
                (m.isXML = function (a) {
                    var b = (a ? a.ownerDocument || a : 0).documentElement;
                    return b ? b.nodeName !== "HTML" : !1;
                });
            var y = function (a, b, c) {
                var d,
                    e = [],
                    f = "",
                    g = b.nodeType ? [b] : b;
                while ((d = o.match.PSEUDO.exec(a)))
                    (f += d[0]), (a = a.replace(o.match.PSEUDO, ""));
                a = o.relative[a] ? a + "*" : a;
                for (var h = 0, i = g.length; h < i; h++) m(a, g[h], e, c);
                return m.filter(f, e);
            };
            (m.attr = f.attr),
                (m.selectors.attrMap = {}),
                (f.find = m),
                (f.expr = m.selectors),
                (f.expr[":"] = f.expr.filters),
                (f.unique = m.uniqueSort),
                (f.text = m.getText),
                (f.isXMLDoc = m.isXML),
                (f.contains = m.contains);
        })();
    var L = /Until$/,
        M = /^(?:parents|prevUntil|prevAll)/,
        N = /,/,
        O = /^.[^:#\[\.,]*$/,
        P = Array.prototype.slice,
        Q = f.expr.match.globalPOS,
        R = { children: !0, contents: !0, next: !0, prev: !0 };
    f.fn.extend({
        find: function (a) {
            var b = this,
                c,
                d;
            if (typeof a != "string")
                return f(a).filter(function () {
                    for (c = 0, d = b.length; c < d; c++)
                        if (f.contains(b[c], this)) return !0;
                });
            var e = this.pushStack("", "find", a),
                g,
                h,
                i;
            for (c = 0, d = this.length; c < d; c++) {
                (g = e.length), f.find(a, this[c], e);
                if (c > 0)
                    for (h = g; h < e.length; h++)
                        for (i = 0; i < g; i++)
                            if (e[i] === e[h]) {
                                e.splice(h--, 1);
                                break;
                            }
            }
            return e;
        },
        has: function (a) {
            var b = f(a);
            return this.filter(function () {
                for (var a = 0, c = b.length; a < c; a++)
                    if (f.contains(this, b[a])) return !0;
            });
        },
        not: function (a) {
            return this.pushStack(T(this, a, !1), "not", a);
        },
        filter: function (a) {
            return this.pushStack(T(this, a, !0), "filter", a);
        },
        is: function (a) {
            return (
                !!a &&
                (typeof a == "string"
                    ? Q.test(a)
                        ? f(a, this.context).index(this[0]) >= 0
                        : f.filter(a, this).length > 0
                    : this.filter(a).length > 0)
            );
        },
        closest: function (a, b) {
            var c = [],
                d,
                e,
                g = this[0];
            if (f.isArray(a)) {
                var h = 1;
                while (g && g.ownerDocument && g !== b) {
                    for (d = 0; d < a.length; d++)
                        f(g).is(a[d]) &&
                            c.push({ selector: a[d], elem: g, level: h });
                    (g = g.parentNode), h++;
                }
                return c;
            }
            var i =
                Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break;
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11)
                        break;
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a);
        },
        index: function (a) {
            if (!a)
                return this[0] && this[0].parentNode
                    ? this.prevAll().length
                    : -1;
            if (typeof a == "string") return f.inArray(this[0], f(a));
            return f.inArray(a.jquery ? a[0] : a, this);
        },
        add: function (a, b) {
            var c =
                    typeof a == "string"
                        ? f(a, b)
                        : f.makeArray(a && a.nodeType ? [a] : a),
                d = f.merge(this.get(), c);
            return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d));
        },
        andSelf: function () {
            return this.add(this.prevObject);
        },
    }),
        f.each(
            {
                parent: function (a) {
                    var b = a.parentNode;
                    return b && b.nodeType !== 11 ? b : null;
                },
                parents: function (a) {
                    return f.dir(a, "parentNode");
                },
                parentsUntil: function (a, b, c) {
                    return f.dir(a, "parentNode", c);
                },
                next: function (a) {
                    return f.nth(a, 2, "nextSibling");
                },
                prev: function (a) {
                    return f.nth(a, 2, "previousSibling");
                },
                nextAll: function (a) {
                    return f.dir(a, "nextSibling");
                },
                prevAll: function (a) {
                    return f.dir(a, "previousSibling");
                },
                nextUntil: function (a, b, c) {
                    return f.dir(a, "nextSibling", c);
                },
                prevUntil: function (a, b, c) {
                    return f.dir(a, "previousSibling", c);
                },
                siblings: function (a) {
                    return f.sibling((a.parentNode || {}).firstChild, a);
                },
                children: function (a) {
                    return f.sibling(a.firstChild);
                },
                contents: function (a) {
                    return f.nodeName(a, "iframe")
                        ? a.contentDocument || a.contentWindow.document
                        : f.makeArray(a.childNodes);
                },
            },
            function (a, b) {
                f.fn[a] = function (c, d) {
                    var e = f.map(this, b, c);
                    L.test(a) || (d = c),
                        d && typeof d == "string" && (e = f.filter(d, e)),
                        (e = this.length > 1 && !R[a] ? f.unique(e) : e),
                        (this.length > 1 || N.test(d)) &&
                            M.test(a) &&
                            (e = e.reverse());
                    return this.pushStack(e, a, P.call(arguments).join(","));
                };
            }
        ),
        f.extend({
            filter: function (a, b, c) {
                c && (a = ":not(" + a + ")");
                return b.length === 1
                    ? f.find.matchesSelector(b[0], a)
                        ? [b[0]]
                        : []
                    : f.find.matches(a, b);
            },
            dir: function (a, c, d) {
                var e = [],
                    g = a[c];
                while (
                    g &&
                    g.nodeType !== 9 &&
                    (d === b || g.nodeType !== 1 || !f(g).is(d))
                )
                    g.nodeType === 1 && e.push(g), (g = g[c]);
                return e;
            },
            nth: function (a, b, c, d) {
                b = b || 1;
                var e = 0;
                for (; a; a = a[c]) if (a.nodeType === 1 && ++e === b) break;
                return a;
            },
            sibling: function (a, b) {
                var c = [];
                for (; a; a = a.nextSibling)
                    a.nodeType === 1 && a !== b && c.push(a);
                return c;
            },
        });
    var V =
            "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        W = / jQuery\d+="(?:\d+|null)"/g,
        X = /^\s+/,
        Y =
            /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Z = /<([\w:]+)/,
        $ = /<tbody/i,
        _ = /<|&#?\w+;/,
        ba = /<(?:script|style)/i,
        bb = /<(?:script|object|embed|option|style)/i,
        bc = new RegExp("<(?:" + V + ")[\\s/>]", "i"),
        bd = /checked\s*(?:[^=]|=\s*.checked.)/i,
        be = /\/(java|ecma)script/i,
        bf = /^\s*<!(?:\[CDATA\[|\-\-)/,
        bg = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""],
        },
        bh = U(c);
    (bg.optgroup = bg.option),
        (bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead),
        (bg.th = bg.td),
        f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]),
        f.fn.extend({
            text: function (a) {
                return f.access(
                    this,
                    function (a) {
                        return a === b
                            ? f.text(this)
                            : this.empty().append(
                                  (
                                      (this[0] && this[0].ownerDocument) ||
                                      c
                                  ).createTextNode(a)
                              );
                    },
                    null,
                    a,
                    arguments.length
                );
            },
            wrapAll: function (a) {
                if (f.isFunction(a))
                    return this.each(function (b) {
                        f(this).wrapAll(a.call(this, b));
                    });
                if (this[0]) {
                    var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]),
                        b
                            .map(function () {
                                var a = this;
                                while (
                                    a.firstChild &&
                                    a.firstChild.nodeType === 1
                                )
                                    a = a.firstChild;
                                return a;
                            })
                            .append(this);
                }
                return this;
            },
            wrapInner: function (a) {
                if (f.isFunction(a))
                    return this.each(function (b) {
                        f(this).wrapInner(a.call(this, b));
                    });
                return this.each(function () {
                    var b = f(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a);
                });
            },
            wrap: function (a) {
                var b = f.isFunction(a);
                return this.each(function (c) {
                    f(this).wrapAll(b ? a.call(this, c) : a);
                });
            },
            unwrap: function () {
                return this.parent()
                    .each(function () {
                        f.nodeName(this, "body") ||
                            f(this).replaceWith(this.childNodes);
                    })
                    .end();
            },
            append: function () {
                return this.domManip(arguments, !0, function (a) {
                    this.nodeType === 1 && this.appendChild(a);
                });
            },
            prepend: function () {
                return this.domManip(arguments, !0, function (a) {
                    this.nodeType === 1 &&
                        this.insertBefore(a, this.firstChild);
                });
            },
            before: function () {
                if (this[0] && this[0].parentNode)
                    return this.domManip(arguments, !1, function (a) {
                        this.parentNode.insertBefore(a, this);
                    });
                if (arguments.length) {
                    var a = f.clean(arguments);
                    a.push.apply(a, this.toArray());
                    return this.pushStack(a, "before", arguments);
                }
            },
            after: function () {
                if (this[0] && this[0].parentNode)
                    return this.domManip(arguments, !1, function (a) {
                        this.parentNode.insertBefore(a, this.nextSibling);
                    });
                if (arguments.length) {
                    var a = this.pushStack(this, "after", arguments);
                    a.push.apply(a, f.clean(arguments));
                    return a;
                }
            },
            remove: function (a, b) {
                for (var c = 0, d; (d = this[c]) != null; c++)
                    if (!a || f.filter(a, [d]).length)
                        !b &&
                            d.nodeType === 1 &&
                            (f.cleanData(d.getElementsByTagName("*")),
                            f.cleanData([d])),
                            d.parentNode && d.parentNode.removeChild(d);
                return this;
            },
            empty: function () {
                for (var a = 0, b; (b = this[a]) != null; a++) {
                    b.nodeType === 1 &&
                        f.cleanData(b.getElementsByTagName("*"));
                    while (b.firstChild) b.removeChild(b.firstChild);
                }
                return this;
            },
            clone: function (a, b) {
                (a = a == null ? !1 : a), (b = b == null ? a : b);
                return this.map(function () {
                    return f.clone(this, a, b);
                });
            },
            html: function (a) {
                return f.access(
                    this,
                    function (a) {
                        var c = this[0] || {},
                            d = 0,
                            e = this.length;
                        if (a === b)
                            return c.nodeType === 1
                                ? c.innerHTML.replace(W, "")
                                : null;
                        if (
                            typeof a == "string" &&
                            !ba.test(a) &&
                            (f.support.leadingWhitespace || !X.test(a)) &&
                            !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]
                        ) {
                            a = a.replace(Y, "<$1></$2>");
                            try {
                                for (; d < e; d++)
                                    (c = this[d] || {}),
                                        c.nodeType === 1 &&
                                            (f.cleanData(
                                                c.getElementsByTagName("*")
                                            ),
                                            (c.innerHTML = a));
                                c = 0;
                            } catch (g) {}
                        }
                        c && this.empty().append(a);
                    },
                    null,
                    a,
                    arguments.length
                );
            },
            replaceWith: function (a) {
                if (this[0] && this[0].parentNode) {
                    if (f.isFunction(a))
                        return this.each(function (b) {
                            var c = f(this),
                                d = c.html();
                            c.replaceWith(a.call(this, b, d));
                        });
                    typeof a != "string" && (a = f(a).detach());
                    return this.each(function () {
                        var b = this.nextSibling,
                            c = this.parentNode;
                        f(this).remove(), b ? f(b).before(a) : f(c).append(a);
                    });
                }
                return this.length
                    ? this.pushStack(
                          f(f.isFunction(a) ? a() : a),
                          "replaceWith",
                          a
                      )
                    : this;
            },
            detach: function (a) {
                return this.remove(a, !0);
            },
            domManip: function (a, c, d) {
                var e,
                    g,
                    h,
                    i,
                    j = a[0],
                    k = [];
                if (
                    !f.support.checkClone &&
                    arguments.length === 3 &&
                    typeof j == "string" &&
                    bd.test(j)
                )
                    return this.each(function () {
                        f(this).domManip(a, c, d, !0);
                    });
                if (f.isFunction(j))
                    return this.each(function (e) {
                        var g = f(this);
                        (a[0] = j.call(this, e, c ? g.html() : b)),
                            g.domManip(a, c, d);
                    });
                if (this[0]) {
                    (i = j && j.parentNode),
                        f.support.parentNode &&
                        i &&
                        i.nodeType === 11 &&
                        i.childNodes.length === this.length
                            ? (e = { fragment: i })
                            : (e = f.buildFragment(a, this, k)),
                        (h = e.fragment),
                        h.childNodes.length === 1
                            ? (g = h = h.firstChild)
                            : (g = h.firstChild);
                    if (g) {
                        c = c && f.nodeName(g, "tr");
                        for (var l = 0, m = this.length, n = m - 1; l < m; l++)
                            d.call(
                                c ? bi(this[l], g) : this[l],
                                e.cacheable || (m > 1 && l < n)
                                    ? f.clone(h, !0, !0)
                                    : h
                            );
                    }
                    k.length &&
                        f.each(k, function (a, b) {
                            b.src
                                ? f.ajax({
                                      type: "GET",
                                      global: !1,
                                      url: b.src,
                                      async: !1,
                                      dataType: "script",
                                  })
                                : f.globalEval(
                                      (
                                          b.text ||
                                          b.textContent ||
                                          b.innerHTML ||
                                          ""
                                      ).replace(bf, "/*$0*/")
                                  ),
                                b.parentNode && b.parentNode.removeChild(b);
                        });
                }
                return this;
            },
        }),
        (f.buildFragment = function (a, b, d) {
            var e,
                g,
                h,
                i,
                j = a[0];
            b && b[0] && (i = b[0].ownerDocument || b[0]),
                i.createDocumentFragment || (i = c),
                a.length === 1 &&
                    typeof j == "string" &&
                    j.length < 512 &&
                    i === c &&
                    j.charAt(0) === "<" &&
                    !bb.test(j) &&
                    (f.support.checkClone || !bd.test(j)) &&
                    (f.support.html5Clone || !bc.test(j)) &&
                    ((g = !0), (h = f.fragments[j]), h && h !== 1 && (e = h)),
                e || ((e = i.createDocumentFragment()), f.clean(a, i, e, d)),
                g && (f.fragments[j] = h ? e : 1);
            return { fragment: e, cacheable: g };
        }),
        (f.fragments = {}),
        f.each(
            {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
            },
            function (a, b) {
                f.fn[a] = function (c) {
                    var d = [],
                        e = f(c),
                        g = this.length === 1 && this[0].parentNode;
                    if (
                        g &&
                        g.nodeType === 11 &&
                        g.childNodes.length === 1 &&
                        e.length === 1
                    ) {
                        e[b](this[0]);
                        return this;
                    }
                    for (var h = 0, i = e.length; h < i; h++) {
                        var j = (h > 0 ? this.clone(!0) : this).get();
                        f(e[h])[b](j), (d = d.concat(j));
                    }
                    return this.pushStack(d, a, e.selector);
                };
            }
        ),
        f.extend({
            clone: function (a, b, c) {
                var d,
                    e,
                    g,
                    h =
                        f.support.html5Clone ||
                        f.isXMLDoc(a) ||
                        !bc.test("<" + a.nodeName + ">")
                            ? a.cloneNode(!0)
                            : bo(a);
                if (
                    (!f.support.noCloneEvent || !f.support.noCloneChecked) &&
                    (a.nodeType === 1 || a.nodeType === 11) &&
                    !f.isXMLDoc(a)
                ) {
                    bk(a, h), (d = bl(a)), (e = bl(h));
                    for (g = 0; d[g]; ++g) e[g] && bk(d[g], e[g]);
                }
                if (b) {
                    bj(a, h);
                    if (c) {
                        (d = bl(a)), (e = bl(h));
                        for (g = 0; d[g]; ++g) bj(d[g], e[g]);
                    }
                }
                d = e = null;
                return h;
            },
            clean: function (a, b, d, e) {
                var g,
                    h,
                    i,
                    j = [];
                (b = b || c),
                    typeof b.createElement == "undefined" &&
                        (b =
                            b.ownerDocument ||
                            (b[0] && b[0].ownerDocument) ||
                            c);
                for (var k = 0, l; (l = a[k]) != null; k++) {
                    typeof l == "number" && (l += "");
                    if (!l) continue;
                    if (typeof l == "string")
                        if (!_.test(l)) l = b.createTextNode(l);
                        else {
                            l = l.replace(Y, "<$1></$2>");
                            var m = (Z.exec(l) || ["", ""])[1].toLowerCase(),
                                n = bg[m] || bg._default,
                                o = n[0],
                                p = b.createElement("div"),
                                q = bh.childNodes,
                                r;
                            b === c ? bh.appendChild(p) : U(b).appendChild(p),
                                (p.innerHTML = n[1] + l + n[2]);
                            while (o--) p = p.lastChild;
                            if (!f.support.tbody) {
                                var s = $.test(l),
                                    t =
                                        m === "table" && !s
                                            ? p.firstChild &&
                                              p.firstChild.childNodes
                                            : n[1] === "<table>" && !s
                                            ? p.childNodes
                                            : [];
                                for (i = t.length - 1; i >= 0; --i)
                                    f.nodeName(t[i], "tbody") &&
                                        !t[i].childNodes.length &&
                                        t[i].parentNode.removeChild(t[i]);
                            }
                            !f.support.leadingWhitespace &&
                                X.test(l) &&
                                p.insertBefore(
                                    b.createTextNode(X.exec(l)[0]),
                                    p.firstChild
                                ),
                                (l = p.childNodes),
                                p &&
                                    (p.parentNode.removeChild(p),
                                    q.length > 0 &&
                                        ((r = q[q.length - 1]),
                                        r &&
                                            r.parentNode &&
                                            r.parentNode.removeChild(r)));
                        }
                    var u;
                    if (!f.support.appendChecked)
                        if (l[0] && typeof (u = l.length) == "number")
                            for (i = 0; i < u; i++) bn(l[i]);
                        else bn(l);
                    l.nodeType ? j.push(l) : (j = f.merge(j, l));
                }
                if (d) {
                    g = function (a) {
                        return !a.type || be.test(a.type);
                    };
                    for (k = 0; j[k]; k++) {
                        h = j[k];
                        if (
                            e &&
                            f.nodeName(h, "script") &&
                            (!h.type || be.test(h.type))
                        )
                            e.push(
                                h.parentNode ? h.parentNode.removeChild(h) : h
                            );
                        else {
                            if (h.nodeType === 1) {
                                var v = f.grep(
                                    h.getElementsByTagName("script"),
                                    g
                                );
                                j.splice.apply(j, [k + 1, 0].concat(v));
                            }
                            d.appendChild(h);
                        }
                    }
                }
                return j;
            },
            cleanData: function (a) {
                var b,
                    c,
                    d = f.cache,
                    e = f.event.special,
                    g = f.support.deleteExpando;
                for (var h = 0, i; (i = a[h]) != null; h++) {
                    if (i.nodeName && f.noData[i.nodeName.toLowerCase()])
                        continue;
                    c = i[f.expando];
                    if (c) {
                        b = d[c];
                        if (b && b.events) {
                            for (var j in b.events)
                                e[j]
                                    ? f.event.remove(i, j)
                                    : f.removeEvent(i, j, b.handle);
                            b.handle && (b.handle.elem = null);
                        }
                        g
                            ? delete i[f.expando]
                            : i.removeAttribute && i.removeAttribute(f.expando),
                            delete d[c];
                    }
                }
            },
        });
    var bp = /alpha\([^)]*\)/i,
        bq = /opacity=([^)]*)/,
        br = /([A-Z]|^ms)/g,
        bs = /^[\-+]?(?:\d*\.)?\d+$/i,
        bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
        bu = /^([\-+])=([\-+.\de]+)/,
        bv = /^margin/,
        bw = { position: "absolute", visibility: "hidden", display: "block" },
        bx = ["Top", "Right", "Bottom", "Left"],
        by,
        bz,
        bA;
    (f.fn.css = function (a, c) {
        return f.access(
            this,
            function (a, c, d) {
                return d !== b ? f.style(a, c, d) : f.css(a, c);
            },
            a,
            c,
            arguments.length > 1
        );
    }),
        f.extend({
            cssHooks: {
                opacity: {
                    get: function (a, b) {
                        if (b) {
                            var c = by(a, "opacity");
                            return c === "" ? "1" : c;
                        }
                        return a.style.opacity;
                    },
                },
            },
            cssNumber: {
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
            },
            cssProps: { float: f.support.cssFloat ? "cssFloat" : "styleFloat" },
            style: function (a, c, d, e) {
                if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
                    var g,
                        h,
                        i = f.camelCase(c),
                        j = a.style,
                        k = f.cssHooks[i];
                    c = f.cssProps[i] || i;
                    if (d === b) {
                        if (k && "get" in k && (g = k.get(a, !1, e)) !== b)
                            return g;
                        return j[c];
                    }
                    (h = typeof d),
                        h === "string" &&
                            (g = bu.exec(d)) &&
                            ((d =
                                +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c))),
                            (h = "number"));
                    if (d == null || (h === "number" && isNaN(d))) return;
                    h === "number" && !f.cssNumber[i] && (d += "px");
                    if (!k || !("set" in k) || (d = k.set(a, d)) !== b)
                        try {
                            j[c] = d;
                        } catch (l) {}
                }
            },
            css: function (a, c, d) {
                var e, g;
                (c = f.camelCase(c)),
                    (g = f.cssHooks[c]),
                    (c = f.cssProps[c] || c),
                    c === "cssFloat" && (c = "float");
                if (g && "get" in g && (e = g.get(a, !0, d)) !== b) return e;
                if (by) return by(a, c);
            },
            swap: function (a, b, c) {
                var d = {},
                    e,
                    f;
                for (f in b) (d[f] = a.style[f]), (a.style[f] = b[f]);
                e = c.call(a);
                for (f in b) a.style[f] = d[f];
                return e;
            },
        }),
        (f.curCSS = f.css),
        c.defaultView &&
            c.defaultView.getComputedStyle &&
            (bz = function (a, b) {
                var c,
                    d,
                    e,
                    g,
                    h = a.style;
                (b = b.replace(br, "-$1").toLowerCase()),
                    (d = a.ownerDocument.defaultView) &&
                        (e = d.getComputedStyle(a, null)) &&
                        ((c = e.getPropertyValue(b)),
                        c === "" &&
                            !f.contains(a.ownerDocument.documentElement, a) &&
                            (c = f.style(a, b))),
                    !f.support.pixelMargin &&
                        e &&
                        bv.test(b) &&
                        bt.test(c) &&
                        ((g = h.width),
                        (h.width = c),
                        (c = e.width),
                        (h.width = g));
                return c;
            }),
        c.documentElement.currentStyle &&
            (bA = function (a, b) {
                var c,
                    d,
                    e,
                    f = a.currentStyle && a.currentStyle[b],
                    g = a.style;
                f == null && g && (e = g[b]) && (f = e),
                    bt.test(f) &&
                        ((c = g.left),
                        (d = a.runtimeStyle && a.runtimeStyle.left),
                        d && (a.runtimeStyle.left = a.currentStyle.left),
                        (g.left = b === "fontSize" ? "1em" : f),
                        (f = g.pixelLeft + "px"),
                        (g.left = c),
                        d && (a.runtimeStyle.left = d));
                return f === "" ? "auto" : f;
            }),
        (by = bz || bA),
        f.each(["height", "width"], function (a, b) {
            f.cssHooks[b] = {
                get: function (a, c, d) {
                    if (c)
                        return a.offsetWidth !== 0
                            ? bB(a, b, d)
                            : f.swap(a, bw, function () {
                                  return bB(a, b, d);
                              });
                },
                set: function (a, b) {
                    return bs.test(b) ? b + "px" : b;
                },
            };
        }),
        f.support.opacity ||
            (f.cssHooks.opacity = {
                get: function (a, b) {
                    return bq.test(
                        (b && a.currentStyle
                            ? a.currentStyle.filter
                            : a.style.filter) || ""
                    )
                        ? parseFloat(RegExp.$1) / 100 + ""
                        : b
                        ? "1"
                        : "";
                },
                set: function (a, b) {
                    var c = a.style,
                        d = a.currentStyle,
                        e = f.isNumeric(b)
                            ? "alpha(opacity=" + b * 100 + ")"
                            : "",
                        g = (d && d.filter) || c.filter || "";
                    c.zoom = 1;
                    if (b >= 1 && f.trim(g.replace(bp, "")) === "") {
                        c.removeAttribute("filter");
                        if (d && !d.filter) return;
                    }
                    c.filter = bp.test(g) ? g.replace(bp, e) : g + " " + e;
                },
            }),
        f(function () {
            f.support.reliableMarginRight ||
                (f.cssHooks.marginRight = {
                    get: function (a, b) {
                        return f.swap(
                            a,
                            { display: "inline-block" },
                            function () {
                                return b
                                    ? by(a, "margin-right")
                                    : a.style.marginRight;
                            }
                        );
                    },
                });
        }),
        f.expr &&
            f.expr.filters &&
            ((f.expr.filters.hidden = function (a) {
                var b = a.offsetWidth,
                    c = a.offsetHeight;
                return (
                    (b === 0 && c === 0) ||
                    (!f.support.reliableHiddenOffsets &&
                        ((a.style && a.style.display) ||
                            f.css(a, "display")) === "none")
                );
            }),
            (f.expr.filters.visible = function (a) {
                return !f.expr.filters.hidden(a);
            })),
        f.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
            f.cssHooks[a + b] = {
                expand: function (c) {
                    var d,
                        e = typeof c == "string" ? c.split(" ") : [c],
                        f = {};
                    for (d = 0; d < 4; d++)
                        f[a + bx[d] + b] = e[d] || e[d - 2] || e[0];
                    return f;
                },
            };
        });
    var bC = /%20/g,
        bD = /\[\]$/,
        bE = /\r?\n/g,
        bF = /#.*$/,
        bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        bH =
            /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        bJ = /^(?:GET|HEAD)$/,
        bK = /^\/\//,
        bL = /\?/,
        bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bN = /^(?:select|textarea)/i,
        bO = /\s+/,
        bP = /([?&])_=[^&]*/,
        bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        bR = f.fn.load,
        bS = {},
        bT = {},
        bU,
        bV,
        bW = ["*/"] + ["*"];
    try {
        bU = e.href;
    } catch (bX) {
        (bU = c.createElement("a")), (bU.href = ""), (bU = bU.href);
    }
    (bV = bQ.exec(bU.toLowerCase()) || []),
        f.fn.extend({
            load: function (a, c, d) {
                if (typeof a != "string" && bR)
                    return bR.apply(this, arguments);
                if (!this.length) return this;
                var e = a.indexOf(" ");
                if (e >= 0) {
                    var g = a.slice(e, a.length);
                    a = a.slice(0, e);
                }
                var h = "GET";
                c &&
                    (f.isFunction(c)
                        ? ((d = c), (c = b))
                        : typeof c == "object" &&
                          ((c = f.param(c, f.ajaxSettings.traditional)),
                          (h = "POST")));
                var i = this;
                f.ajax({
                    url: a,
                    type: h,
                    dataType: "html",
                    data: c,
                    complete: function (a, b, c) {
                        (c = a.responseText),
                            a.isResolved() &&
                                (a.done(function (a) {
                                    c = a;
                                }),
                                i.html(
                                    g
                                        ? f("<div>")
                                              .append(c.replace(bM, ""))
                                              .find(g)
                                        : c
                                )),
                            d && i.each(d, [c, b, a]);
                    },
                });
                return this;
            },
            serialize: function () {
                return f.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    return this.elements ? f.makeArray(this.elements) : this;
                })
                    .filter(function () {
                        return (
                            this.name &&
                            !this.disabled &&
                            (this.checked ||
                                bN.test(this.nodeName) ||
                                bH.test(this.type))
                        );
                    })
                    .map(function (a, b) {
                        var c = f(this).val();
                        return c == null
                            ? null
                            : f.isArray(c)
                            ? f.map(c, function (a, c) {
                                  return {
                                      name: b.name,
                                      value: a.replace(bE, "\r\n"),
                                  };
                              })
                            : { name: b.name, value: c.replace(bE, "\r\n") };
                    })
                    .get();
            },
        }),
        f.each(
            "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(
                " "
            ),
            function (a, b) {
                f.fn[b] = function (a) {
                    return this.on(b, a);
                };
            }
        ),
        f.each(["get", "post"], function (a, c) {
            f[c] = function (a, d, e, g) {
                f.isFunction(d) && ((g = g || e), (e = d), (d = b));
                return f.ajax({
                    type: c,
                    url: a,
                    data: d,
                    success: e,
                    dataType: g,
                });
            };
        }),
        f.extend({
            getScript: function (a, c) {
                return f.get(a, b, c, "script");
            },
            getJSON: function (a, b, c) {
                return f.get(a, b, c, "json");
            },
            ajaxSetup: function (a, b) {
                b ? b$(a, f.ajaxSettings) : ((b = a), (a = f.ajaxSettings)),
                    b$(a, b);
                return a;
            },
            ajaxSettings: {
                url: bU,
                isLocal: bI.test(bV[1]),
                global: !0,
                type: "GET",
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                processData: !0,
                async: !0,
                accepts: {
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    "*": bW,
                },
                contents: { xml: /xml/, html: /html/, json: /json/ },
                responseFields: { xml: "responseXML", text: "responseText" },
                converters: {
                    "* text": a.String,
                    "text html": !0,
                    "text json": f.parseJSON,
                    "text xml": f.parseXML,
                },
                flatOptions: { context: !0, url: !0 },
            },
            ajaxPrefilter: bY(bS),
            ajaxTransport: bY(bT),
            ajax: function (a, c) {
                function w(a, c, l, m) {
                    if (s !== 2) {
                        (s = 2),
                            q && clearTimeout(q),
                            (p = b),
                            (n = m || ""),
                            (v.readyState = a > 0 ? 4 : 0);
                        var o,
                            r,
                            u,
                            w = c,
                            x = l ? ca(d, v, l) : b,
                            y,
                            z;
                        if ((a >= 200 && a < 300) || a === 304) {
                            if (d.ifModified) {
                                if ((y = v.getResponseHeader("Last-Modified")))
                                    f.lastModified[k] = y;
                                if ((z = v.getResponseHeader("Etag")))
                                    f.etag[k] = z;
                            }
                            if (a === 304) (w = "notmodified"), (o = !0);
                            else
                                try {
                                    (r = cb(d, x)), (w = "success"), (o = !0);
                                } catch (A) {
                                    (w = "parsererror"), (u = A);
                                }
                        } else {
                            u = w;
                            if (!w || a) (w = "error"), a < 0 && (a = 0);
                        }
                        (v.status = a),
                            (v.statusText = "" + (c || w)),
                            o
                                ? h.resolveWith(e, [r, w, v])
                                : h.rejectWith(e, [v, w, u]),
                            v.statusCode(j),
                            (j = b),
                            t &&
                                g.trigger("ajax" + (o ? "Success" : "Error"), [
                                    v,
                                    d,
                                    o ? r : u,
                                ]),
                            i.fireWith(e, [v, w]),
                            t &&
                                (g.trigger("ajaxComplete", [v, d]),
                                --f.active || f.event.trigger("ajaxStop"));
                    }
                }
                typeof a == "object" && ((c = a), (a = b)), (c = c || {});
                var d = f.ajaxSetup({}, c),
                    e = d.context || d,
                    g =
                        e !== d && (e.nodeType || e instanceof f)
                            ? f(e)
                            : f.event,
                    h = f.Deferred(),
                    i = f.Callbacks("once memory"),
                    j = d.statusCode || {},
                    k,
                    l = {},
                    m = {},
                    n,
                    o,
                    p,
                    q,
                    r,
                    s = 0,
                    t,
                    u,
                    v = {
                        readyState: 0,
                        setRequestHeader: function (a, b) {
                            if (!s) {
                                var c = a.toLowerCase();
                                (a = m[c] = m[c] || a), (l[a] = b);
                            }
                            return this;
                        },
                        getAllResponseHeaders: function () {
                            return s === 2 ? n : null;
                        },
                        getResponseHeader: function (a) {
                            var c;
                            if (s === 2) {
                                if (!o) {
                                    o = {};
                                    while ((c = bG.exec(n)))
                                        o[c[1].toLowerCase()] = c[2];
                                }
                                c = o[a.toLowerCase()];
                            }
                            return c === b ? null : c;
                        },
                        overrideMimeType: function (a) {
                            s || (d.mimeType = a);
                            return this;
                        },
                        abort: function (a) {
                            (a = a || "abort"), p && p.abort(a), w(0, a);
                            return this;
                        },
                    };
                h.promise(v),
                    (v.success = v.done),
                    (v.error = v.fail),
                    (v.complete = i.add),
                    (v.statusCode = function (a) {
                        if (a) {
                            var b;
                            if (s < 2) for (b in a) j[b] = [j[b], a[b]];
                            else (b = a[v.status]), v.then(b, b);
                        }
                        return this;
                    }),
                    (d.url = ((a || d.url) + "")
                        .replace(bF, "")
                        .replace(bK, bV[1] + "//")),
                    (d.dataTypes = f
                        .trim(d.dataType || "*")
                        .toLowerCase()
                        .split(bO)),
                    d.crossDomain == null &&
                        ((r = bQ.exec(d.url.toLowerCase())),
                        (d.crossDomain = !(
                            !r ||
                            (r[1] == bV[1] &&
                                r[2] == bV[2] &&
                                (r[3] || (r[1] === "http:" ? 80 : 443)) ==
                                    (bV[3] || (bV[1] === "http:" ? 80 : 443)))
                        ))),
                    d.data &&
                        d.processData &&
                        typeof d.data != "string" &&
                        (d.data = f.param(d.data, d.traditional)),
                    bZ(bS, d, c, v);
                if (s === 2) return !1;
                (t = d.global),
                    (d.type = d.type.toUpperCase()),
                    (d.hasContent = !bJ.test(d.type)),
                    t && f.active++ === 0 && f.event.trigger("ajaxStart");
                if (!d.hasContent) {
                    d.data &&
                        ((d.url += (bL.test(d.url) ? "&" : "?") + d.data),
                        delete d.data),
                        (k = d.url);
                    if (d.cache === !1) {
                        var x = f.now(),
                            y = d.url.replace(bP, "$1_=" + x);
                        d.url =
                            y +
                            (y === d.url
                                ? (bL.test(d.url) ? "&" : "?") + "_=" + x
                                : "");
                    }
                }
                ((d.data && d.hasContent && d.contentType !== !1) ||
                    c.contentType) &&
                    v.setRequestHeader("Content-Type", d.contentType),
                    d.ifModified &&
                        ((k = k || d.url),
                        f.lastModified[k] &&
                            v.setRequestHeader(
                                "If-Modified-Since",
                                f.lastModified[k]
                            ),
                        f.etag[k] &&
                            v.setRequestHeader("If-None-Match", f.etag[k])),
                    v.setRequestHeader(
                        "Accept",
                        d.dataTypes[0] && d.accepts[d.dataTypes[0]]
                            ? d.accepts[d.dataTypes[0]] +
                                  (d.dataTypes[0] !== "*"
                                      ? ", " + bW + "; q=0.01"
                                      : "")
                            : d.accepts["*"]
                    );
                for (u in d.headers) v.setRequestHeader(u, d.headers[u]);
                if (
                    d.beforeSend &&
                    (d.beforeSend.call(e, v, d) === !1 || s === 2)
                ) {
                    v.abort();
                    return !1;
                }
                for (u in { success: 1, error: 1, complete: 1 }) v[u](d[u]);
                p = bZ(bT, d, c, v);
                if (!p) w(-1, "No Transport");
                else {
                    (v.readyState = 1),
                        t && g.trigger("ajaxSend", [v, d]),
                        d.async &&
                            d.timeout > 0 &&
                            (q = setTimeout(function () {
                                v.abort("timeout");
                            }, d.timeout));
                    try {
                        (s = 1), p.send(l, w);
                    } catch (z) {
                        if (s < 2) w(-1, z);
                        else throw z;
                    }
                }
                return v;
            },
            param: function (a, c) {
                var d = [],
                    e = function (a, b) {
                        (b = f.isFunction(b) ? b() : b),
                            (d[d.length] =
                                encodeURIComponent(a) +
                                "=" +
                                encodeURIComponent(b));
                    };
                c === b && (c = f.ajaxSettings.traditional);
                if (f.isArray(a) || (a.jquery && !f.isPlainObject(a)))
                    f.each(a, function () {
                        e(this.name, this.value);
                    });
                else for (var g in a) b_(g, a[g], c, e);
                return d.join("&").replace(bC, "+");
            },
        }),
        f.extend({ active: 0, lastModified: {}, etag: {} });
    var cc = f.now(),
        cd = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return f.expando + "_" + cc++;
        },
    }),
        f.ajaxPrefilter("json jsonp", function (b, c, d) {
            var e =
                typeof b.data == "string" &&
                /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
            if (
                b.dataTypes[0] === "jsonp" ||
                (b.jsonp !== !1 && (cd.test(b.url) || (e && cd.test(b.data))))
            ) {
                var g,
                    h = (b.jsonpCallback = f.isFunction(b.jsonpCallback)
                        ? b.jsonpCallback()
                        : b.jsonpCallback),
                    i = a[h],
                    j = b.url,
                    k = b.data,
                    l = "$1" + h + "$2";
                b.jsonp !== !1 &&
                    ((j = j.replace(cd, l)),
                    b.url === j &&
                        (e && (k = k.replace(cd, l)),
                        b.data === k &&
                            (j +=
                                (/\?/.test(j) ? "&" : "?") +
                                b.jsonp +
                                "=" +
                                h))),
                    (b.url = j),
                    (b.data = k),
                    (a[h] = function (a) {
                        g = [a];
                    }),
                    d.always(function () {
                        (a[h] = i), g && f.isFunction(i) && a[h](g[0]);
                    }),
                    (b.converters["script json"] = function () {
                        g || f.error(h + " was not called");
                        return g[0];
                    }),
                    (b.dataTypes[0] = "json");
                return "script";
            }
        }),
        f.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /javascript|ecmascript/ },
            converters: {
                "text script": function (a) {
                    f.globalEval(a);
                    return a;
                },
            },
        }),
        f.ajaxPrefilter("script", function (a) {
            a.cache === b && (a.cache = !1),
                a.crossDomain && ((a.type = "GET"), (a.global = !1));
        }),
        f.ajaxTransport("script", function (a) {
            if (a.crossDomain) {
                var d,
                    e =
                        c.head ||
                        c.getElementsByTagName("head")[0] ||
                        c.documentElement;
                return {
                    send: function (f, g) {
                        (d = c.createElement("script")),
                            (d.async = "async"),
                            a.scriptCharset && (d.charset = a.scriptCharset),
                            (d.src = a.url),
                            (d.onload = d.onreadystatechange =
                                function (a, c) {
                                    if (
                                        c ||
                                        !d.readyState ||
                                        /loaded|complete/.test(d.readyState)
                                    )
                                        (d.onload = d.onreadystatechange =
                                            null),
                                            e &&
                                                d.parentNode &&
                                                e.removeChild(d),
                                            (d = b),
                                            c || g(200, "success");
                                }),
                            e.insertBefore(d, e.firstChild);
                    },
                    abort: function () {
                        d && d.onload(0, 1);
                    },
                };
            }
        });
    var ce = a.ActiveXObject
            ? function () {
                  for (var a in cg) cg[a](0, 1);
              }
            : !1,
        cf = 0,
        cg;
    (f.ajaxSettings.xhr = a.ActiveXObject
        ? function () {
              return (!this.isLocal && ch()) || ci();
          }
        : ch),
        (function (a) {
            f.extend(f.support, {
                ajax: !!a,
                cors: !!a && "withCredentials" in a,
            });
        })(f.ajaxSettings.xhr()),
        f.support.ajax &&
            f.ajaxTransport(function (c) {
                if (!c.crossDomain || f.support.cors) {
                    var d;
                    return {
                        send: function (e, g) {
                            var h = c.xhr(),
                                i,
                                j;
                            c.username
                                ? h.open(
                                      c.type,
                                      c.url,
                                      c.async,
                                      c.username,
                                      c.password
                                  )
                                : h.open(c.type, c.url, c.async);
                            if (c.xhrFields)
                                for (j in c.xhrFields) h[j] = c.xhrFields[j];
                            c.mimeType &&
                                h.overrideMimeType &&
                                h.overrideMimeType(c.mimeType),
                                !c.crossDomain &&
                                    !e["X-Requested-With"] &&
                                    (e["X-Requested-With"] = "XMLHttpRequest");
                            try {
                                for (j in e) h.setRequestHeader(j, e[j]);
                            } catch (k) {}
                            h.send((c.hasContent && c.data) || null),
                                (d = function (a, e) {
                                    var j, k, l, m, n;
                                    try {
                                        if (d && (e || h.readyState === 4)) {
                                            (d = b),
                                                i &&
                                                    ((h.onreadystatechange =
                                                        f.noop),
                                                    ce && delete cg[i]);
                                            if (e)
                                                h.readyState !== 4 && h.abort();
                                            else {
                                                (j = h.status),
                                                    (l =
                                                        h.getAllResponseHeaders()),
                                                    (m = {}),
                                                    (n = h.responseXML),
                                                    n &&
                                                        n.documentElement &&
                                                        (m.xml = n);
                                                try {
                                                    m.text = h.responseText;
                                                } catch (a) {}
                                                try {
                                                    k = h.statusText;
                                                } catch (o) {
                                                    k = "";
                                                }
                                                !j &&
                                                c.isLocal &&
                                                !c.crossDomain
                                                    ? (j = m.text ? 200 : 404)
                                                    : j === 1223 && (j = 204);
                                            }
                                        }
                                    } catch (p) {
                                        e || g(-1, p);
                                    }
                                    m && g(j, k, m, l);
                                }),
                                !c.async || h.readyState === 4
                                    ? d()
                                    : ((i = ++cf),
                                      ce &&
                                          (cg || ((cg = {}), f(a).unload(ce)),
                                          (cg[i] = d)),
                                      (h.onreadystatechange = d));
                        },
                        abort: function () {
                            d && d(0, 1);
                        },
                    };
                }
            });
    var cj = {},
        ck,
        cl,
        cm = /^(?:toggle|show|hide)$/,
        cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        co,
        cp = [
            [
                "height",
                "marginTop",
                "marginBottom",
                "paddingTop",
                "paddingBottom",
            ],
            [
                "width",
                "marginLeft",
                "marginRight",
                "paddingLeft",
                "paddingRight",
            ],
            ["opacity"],
        ],
        cq;
    f.fn.extend({
        show: function (a, b, c) {
            var d, e;
            if (a || a === 0) return this.animate(ct("show", 3), a, b, c);
            for (var g = 0, h = this.length; g < h; g++)
                (d = this[g]),
                    d.style &&
                        ((e = d.style.display),
                        !f._data(d, "olddisplay") &&
                            e === "none" &&
                            (e = d.style.display = ""),
                        ((e === "" && f.css(d, "display") === "none") ||
                            !f.contains(d.ownerDocument.documentElement, d)) &&
                            f._data(d, "olddisplay", cu(d.nodeName)));
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none")
                        d.style.display = f._data(d, "olddisplay") || "";
                }
            }
            return this;
        },
        hide: function (a, b, c) {
            if (a || a === 0) return this.animate(ct("hide", 3), a, b, c);
            var d,
                e,
                g = 0,
                h = this.length;
            for (; g < h; g++)
                (d = this[g]),
                    d.style &&
                        ((e = f.css(d, "display")),
                        e !== "none" &&
                            !f._data(d, "olddisplay") &&
                            f._data(d, "olddisplay", e));
            for (g = 0; g < h; g++)
                this[g].style && (this[g].style.display = "none");
            return this;
        },
        _toggle: f.fn.toggle,
        toggle: function (a, b, c) {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b)
                ? this._toggle.apply(this, arguments)
                : a == null || d
                ? this.each(function () {
                      var b = d ? a : f(this).is(":hidden");
                      f(this)[b ? "show" : "hide"]();
                  })
                : this.animate(ct("toggle", 3), a, b, c);
            return this;
        },
        fadeTo: function (a, b, c, d) {
            return this.filter(":hidden")
                .css("opacity", 0)
                .show()
                .end()
                .animate({ opacity: b }, a, c, d);
        },
        animate: function (a, b, c, d) {
            function g() {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e),
                    c = this.nodeType === 1,
                    d = c && f(this).is(":hidden"),
                    g,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p,
                    q;
                b.animatedProperties = {};
                for (i in a) {
                    (g = f.camelCase(i)),
                        i !== g && ((a[g] = a[i]), delete a[i]);
                    if ((k = f.cssHooks[g]) && "expand" in k) {
                        (l = k.expand(a[g])), delete a[g];
                        for (i in l) i in a || (a[i] = l[i]);
                    }
                }
                for (g in a) {
                    (h = a[g]),
                        f.isArray(h)
                            ? ((b.animatedProperties[g] = h[1]),
                              (h = a[g] = h[0]))
                            : (b.animatedProperties[g] =
                                  (b.specialEasing && b.specialEasing[g]) ||
                                  b.easing ||
                                  "swing");
                    if ((h === "hide" && d) || (h === "show" && !d))
                        return b.complete.call(this);
                    c &&
                        (g === "height" || g === "width") &&
                        ((b.overflow = [
                            this.style.overflow,
                            this.style.overflowX,
                            this.style.overflowY,
                        ]),
                        f.css(this, "display") === "inline" &&
                            f.css(this, "float") === "none" &&
                            (!f.support.inlineBlockNeedsLayout ||
                            cu(this.nodeName) === "inline"
                                ? (this.style.display = "inline-block")
                                : (this.style.zoom = 1)));
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a)
                    (j = new f.fx(this, b, i)),
                        (h = a[i]),
                        cm.test(h)
                            ? ((q =
                                  f._data(this, "toggle" + i) ||
                                  (h === "toggle" ? (d ? "show" : "hide") : 0)),
                              q
                                  ? (f._data(
                                        this,
                                        "toggle" + i,
                                        q === "show" ? "hide" : "show"
                                    ),
                                    j[q]())
                                  : j[h]())
                            : ((m = cn.exec(h)),
                              (n = j.cur()),
                              m
                                  ? ((o = parseFloat(m[2])),
                                    (p = m[3] || (f.cssNumber[i] ? "" : "px")),
                                    p !== "px" &&
                                        (f.style(this, i, (o || 1) + p),
                                        (n = ((o || 1) / j.cur()) * n),
                                        f.style(this, i, n + p)),
                                    m[1] &&
                                        (o = (m[1] === "-=" ? -1 : 1) * o + n),
                                    j.custom(n, o, p))
                                  : j.custom(n, h, ""));
                return !0;
            }
            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a)) return this.each(e.complete, [!1]);
            a = f.extend({}, a);
            return e.queue === !1 ? this.each(g) : this.queue(e.queue, g);
        },
        stop: function (a, c, d) {
            typeof a != "string" && ((d = c), (c = a), (a = b)),
                c && a !== !1 && this.queue(a || "fx", []);
            return this.each(function () {
                function h(a, b, c) {
                    var e = b[c];
                    f.removeData(a, c, !0), e.stop(d);
                }
                var b,
                    c = !1,
                    e = f.timers,
                    g = f._data(this);
                d || f._unmark(!0, this);
                if (a == null)
                    for (b in g)
                        g[b] &&
                            g[b].stop &&
                            b.indexOf(".run") === b.length - 4 &&
                            h(this, g, b);
                else g[(b = a + ".run")] && g[b].stop && h(this, g, b);
                for (b = e.length; b--; )
                    e[b].elem === this &&
                        (a == null || e[b].queue === a) &&
                        (d ? e[b](!0) : e[b].saveState(),
                        (c = !0),
                        e.splice(b, 1));
                (!d || !c) && f.dequeue(this, a);
            });
        },
    }),
        f.each(
            {
                slideDown: ct("show", 1),
                slideUp: ct("hide", 1),
                slideToggle: ct("toggle", 1),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
            },
            function (a, b) {
                f.fn[a] = function (a, c, d) {
                    return this.animate(b, a, c, d);
                };
            }
        ),
        f.extend({
            speed: function (a, b, c) {
                var d =
                    a && typeof a == "object"
                        ? f.extend({}, a)
                        : {
                              complete:
                                  c || (!c && b) || (f.isFunction(a) && a),
                              duration: a,
                              easing: (c && b) || (b && !f.isFunction(b) && b),
                          };
                d.duration = f.fx.off
                    ? 0
                    : typeof d.duration == "number"
                    ? d.duration
                    : d.duration in f.fx.speeds
                    ? f.fx.speeds[d.duration]
                    : f.fx.speeds._default;
                if (d.queue == null || d.queue === !0) d.queue = "fx";
                (d.old = d.complete),
                    (d.complete = function (a) {
                        f.isFunction(d.old) && d.old.call(this),
                            d.queue
                                ? f.dequeue(this, d.queue)
                                : a !== !1 && f._unmark(this);
                    });
                return d;
            },
            easing: {
                linear: function (a) {
                    return a;
                },
                swing: function (a) {
                    return -Math.cos(a * Math.PI) / 2 + 0.5;
                },
            },
            timers: [],
            fx: function (a, b, c) {
                (this.options = b),
                    (this.elem = a),
                    (this.prop = c),
                    (b.orig = b.orig || {});
            },
        }),
        (f.fx.prototype = {
            update: function () {
                this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                    (f.fx.step[this.prop] || f.fx.step._default)(this);
            },
            cur: function () {
                if (
                    this.elem[this.prop] != null &&
                    (!this.elem.style || this.elem.style[this.prop] == null)
                )
                    return this.elem[this.prop];
                var a,
                    b = f.css(this.elem, this.prop);
                return isNaN((a = parseFloat(b)))
                    ? !b || b === "auto"
                        ? 0
                        : b
                    : a;
            },
            custom: function (a, c, d) {
                function h(a) {
                    return e.step(a);
                }
                var e = this,
                    g = f.fx;
                (this.startTime = cq || cr()),
                    (this.end = c),
                    (this.now = this.start = a),
                    (this.pos = this.state = 0),
                    (this.unit =
                        d || this.unit || (f.cssNumber[this.prop] ? "" : "px")),
                    (h.queue = this.options.queue),
                    (h.elem = this.elem),
                    (h.saveState = function () {
                        f._data(e.elem, "fxshow" + e.prop) === b &&
                            (e.options.hide
                                ? f._data(e.elem, "fxshow" + e.prop, e.start)
                                : e.options.show &&
                                  f._data(e.elem, "fxshow" + e.prop, e.end));
                    }),
                    h() &&
                        f.timers.push(h) &&
                        !co &&
                        (co = setInterval(g.tick, g.interval));
            },
            show: function () {
                var a = f._data(this.elem, "fxshow" + this.prop);
                (this.options.orig[this.prop] =
                    a || f.style(this.elem, this.prop)),
                    (this.options.show = !0),
                    a !== b
                        ? this.custom(this.cur(), a)
                        : this.custom(
                              this.prop === "width" || this.prop === "height"
                                  ? 1
                                  : 0,
                              this.cur()
                          ),
                    f(this.elem).show();
            },
            hide: function () {
                (this.options.orig[this.prop] =
                    f._data(this.elem, "fxshow" + this.prop) ||
                    f.style(this.elem, this.prop)),
                    (this.options.hide = !0),
                    this.custom(this.cur(), 0);
            },
            step: function (a) {
                var b,
                    c,
                    d,
                    e = cq || cr(),
                    g = !0,
                    h = this.elem,
                    i = this.options;
                if (a || e >= i.duration + this.startTime) {
                    (this.now = this.end),
                        (this.pos = this.state = 1),
                        this.update(),
                        (i.animatedProperties[this.prop] = !0);
                    for (b in i.animatedProperties)
                        i.animatedProperties[b] !== !0 && (g = !1);
                    if (g) {
                        i.overflow != null &&
                            !f.support.shrinkWrapBlocks &&
                            f.each(["", "X", "Y"], function (a, b) {
                                h.style["overflow" + b] = i.overflow[a];
                            }),
                            i.hide && f(h).hide();
                        if (i.hide || i.show)
                            for (b in i.animatedProperties)
                                f.style(h, b, i.orig[b]),
                                    f.removeData(h, "fxshow" + b, !0),
                                    f.removeData(h, "toggle" + b, !0);
                        (d = i.complete), d && ((i.complete = !1), d.call(h));
                    }
                    return !1;
                }
                i.duration == Infinity
                    ? (this.now = e)
                    : ((c = e - this.startTime),
                      (this.state = c / i.duration),
                      (this.pos = f.easing[i.animatedProperties[this.prop]](
                          this.state,
                          c,
                          0,
                          1,
                          i.duration
                      )),
                      (this.now =
                          this.start + (this.end - this.start) * this.pos)),
                    this.update();
                return !0;
            },
        }),
        f.extend(f.fx, {
            tick: function () {
                var a,
                    b = f.timers,
                    c = 0;
                for (; c < b.length; c++)
                    (a = b[c]), !a() && b[c] === a && b.splice(c--, 1);
                b.length || f.fx.stop();
            },
            interval: 13,
            stop: function () {
                clearInterval(co), (co = null);
            },
            speeds: { slow: 600, fast: 200, _default: 400 },
            step: {
                opacity: function (a) {
                    f.style(a.elem, "opacity", a.now);
                },
                _default: function (a) {
                    a.elem.style && a.elem.style[a.prop] != null
                        ? (a.elem.style[a.prop] = a.now + a.unit)
                        : (a.elem[a.prop] = a.now);
                },
            },
        }),
        f.each(cp.concat.apply([], cp), function (a, b) {
            b.indexOf("margin") &&
                (f.fx.step[b] = function (a) {
                    f.style(a.elem, b, Math.max(0, a.now) + a.unit);
                });
        }),
        f.expr &&
            f.expr.filters &&
            (f.expr.filters.animated = function (a) {
                return f.grep(f.timers, function (b) {
                    return a === b.elem;
                }).length;
            });
    var cv,
        cw = /^t(?:able|d|h)$/i,
        cx = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement
        ? (cv = function (a, b, c, d) {
              try {
                  d = a.getBoundingClientRect();
              } catch (e) {}
              if (!d || !f.contains(c, a))
                  return d ? { top: d.top, left: d.left } : { top: 0, left: 0 };
              var g = b.body,
                  h = cy(b),
                  i = c.clientTop || g.clientTop || 0,
                  j = c.clientLeft || g.clientLeft || 0,
                  k =
                      h.pageYOffset ||
                      (f.support.boxModel && c.scrollTop) ||
                      g.scrollTop,
                  l =
                      h.pageXOffset ||
                      (f.support.boxModel && c.scrollLeft) ||
                      g.scrollLeft,
                  m = d.top + k - i,
                  n = d.left + l - j;
              return { top: m, left: n };
          })
        : (cv = function (a, b, c) {
              var d,
                  e = a.offsetParent,
                  g = a,
                  h = b.body,
                  i = b.defaultView,
                  j = i ? i.getComputedStyle(a, null) : a.currentStyle,
                  k = a.offsetTop,
                  l = a.offsetLeft;
              while ((a = a.parentNode) && a !== h && a !== c) {
                  if (f.support.fixedPosition && j.position === "fixed") break;
                  (d = i ? i.getComputedStyle(a, null) : a.currentStyle),
                      (k -= a.scrollTop),
                      (l -= a.scrollLeft),
                      a === e &&
                          ((k += a.offsetTop),
                          (l += a.offsetLeft),
                          f.support.doesNotAddBorder &&
                              (!f.support.doesAddBorderForTableAndCells ||
                                  !cw.test(a.nodeName)) &&
                              ((k += parseFloat(d.borderTopWidth) || 0),
                              (l += parseFloat(d.borderLeftWidth) || 0)),
                          (g = e),
                          (e = a.offsetParent)),
                      f.support.subtractsBorderForOverflowNotVisible &&
                          d.overflow !== "visible" &&
                          ((k += parseFloat(d.borderTopWidth) || 0),
                          (l += parseFloat(d.borderLeftWidth) || 0)),
                      (j = d);
              }
              if (j.position === "relative" || j.position === "static")
                  (k += h.offsetTop), (l += h.offsetLeft);
              f.support.fixedPosition &&
                  j.position === "fixed" &&
                  ((k += Math.max(c.scrollTop, h.scrollTop)),
                  (l += Math.max(c.scrollLeft, h.scrollLeft)));
              return { top: k, left: l };
          }),
        (f.fn.offset = function (a) {
            if (arguments.length)
                return a === b
                    ? this
                    : this.each(function (b) {
                          f.offset.setOffset(this, a, b);
                      });
            var c = this[0],
                d = c && c.ownerDocument;
            if (!d) return null;
            if (c === d.body) return f.offset.bodyOffset(c);
            return cv(c, d, d.documentElement);
        }),
        (f.offset = {
            bodyOffset: function (a) {
                var b = a.offsetTop,
                    c = a.offsetLeft;
                f.support.doesNotIncludeMarginInBodyOffset &&
                    ((b += parseFloat(f.css(a, "marginTop")) || 0),
                    (c += parseFloat(f.css(a, "marginLeft")) || 0));
                return { top: b, left: c };
            },
            setOffset: function (a, b, c) {
                var d = f.css(a, "position");
                d === "static" && (a.style.position = "relative");
                var e = f(a),
                    g = e.offset(),
                    h = f.css(a, "top"),
                    i = f.css(a, "left"),
                    j =
                        (d === "absolute" || d === "fixed") &&
                        f.inArray("auto", [h, i]) > -1,
                    k = {},
                    l = {},
                    m,
                    n;
                j
                    ? ((l = e.position()), (m = l.top), (n = l.left))
                    : ((m = parseFloat(h) || 0), (n = parseFloat(i) || 0)),
                    f.isFunction(b) && (b = b.call(a, c, g)),
                    b.top != null && (k.top = b.top - g.top + m),
                    b.left != null && (k.left = b.left - g.left + n),
                    "using" in b ? b.using.call(a, k) : e.css(k);
            },
        }),
        f.fn.extend({
            position: function () {
                if (!this[0]) return null;
                var a = this[0],
                    b = this.offsetParent(),
                    c = this.offset(),
                    d = cx.test(b[0].nodeName)
                        ? { top: 0, left: 0 }
                        : b.offset();
                (c.top -= parseFloat(f.css(a, "marginTop")) || 0),
                    (c.left -= parseFloat(f.css(a, "marginLeft")) || 0),
                    (d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0),
                    (d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0);
                return { top: c.top - d.top, left: c.left - d.left };
            },
            offsetParent: function () {
                return this.map(function () {
                    var a = this.offsetParent || c.body;
                    while (
                        a &&
                        !cx.test(a.nodeName) &&
                        f.css(a, "position") === "static"
                    )
                        a = a.offsetParent;
                    return a;
                });
            },
        }),
        f.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (a, c) {
                var d = /Y/.test(c);
                f.fn[a] = function (e) {
                    return f.access(
                        this,
                        function (a, e, g) {
                            var h = cy(a);
                            if (g === b)
                                return h
                                    ? c in h
                                        ? h[c]
                                        : (f.support.boxModel &&
                                              h.document.documentElement[e]) ||
                                          h.document.body[e]
                                    : a[e];
                            h
                                ? h.scrollTo(
                                      d ? f(h).scrollLeft() : g,
                                      d ? g : f(h).scrollTop()
                                  )
                                : (a[e] = g);
                        },
                        a,
                        e,
                        arguments.length,
                        null
                    );
                };
            }
        ),
        f.each({ Height: "height", Width: "width" }, function (a, c) {
            var d = "client" + a,
                e = "scroll" + a,
                g = "offset" + a;
            (f.fn["inner" + a] = function () {
                var a = this[0];
                return a
                    ? a.style
                        ? parseFloat(f.css(a, c, "padding"))
                        : this[c]()
                    : null;
            }),
                (f.fn["outer" + a] = function (a) {
                    var b = this[0];
                    return b
                        ? b.style
                            ? parseFloat(f.css(b, c, a ? "margin" : "border"))
                            : this[c]()
                        : null;
                }),
                (f.fn[c] = function (a) {
                    return f.access(
                        this,
                        function (a, c, h) {
                            var i, j, k, l;
                            if (f.isWindow(a)) {
                                (i = a.document), (j = i.documentElement[d]);
                                return (
                                    (f.support.boxModel && j) ||
                                    (i.body && i.body[d]) ||
                                    j
                                );
                            }
                            if (a.nodeType === 9) {
                                i = a.documentElement;
                                if (i[d] >= i[e]) return i[d];
                                return Math.max(
                                    a.body[e],
                                    i[e],
                                    a.body[g],
                                    i[g]
                                );
                            }
                            if (h === b) {
                                (k = f.css(a, c)), (l = parseFloat(k));
                                return f.isNumeric(l) ? l : k;
                            }
                            f(a).css(c, h);
                        },
                        c,
                        a,
                        arguments.length,
                        null
                    );
                });
        }),
        (a.jQuery = a.$ = f),
        typeof define == "function" &&
            define.amd &&
            define.amd.jQuery &&
            define("jquery", [], function () {
                return f;
            });
})(window);
/*
 * qTip2 - Pretty powerful tooltips - v2.2.1
 * http://qtip2.com
 *
 * Copyright (c) 2014
 * Released under the MIT licenses
 * http://jquery.org/license
 *
 * Date: Sat Sep 6 2014 08:34 EDT-0400
 * Plugins: tips modal viewport svg imagemap ie6
 * Styles: core basic css3
 */
/*global window: false, jQuery: false, console: false, define: false */

/* Cache window, document, undefined */
(function (window, document, undefined) {
    // Uses AMD or browser globals to create a jQuery plugin.
    (function (factory) {
        "use strict";
        if (typeof define === "function" && define.amd) {
            define(["jquery"], factory);
        } else if (jQuery && !jQuery.fn.qtip) {
            factory(jQuery);
        }
    })(function ($) {
        "use strict"; // Enable ECMAScript "strict" operation for this function. See more: http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/ // Munge the primitives - Paul Irish tip
        var TRUE = true,
            FALSE = false,
            NULL = null,
            // Common variables
            X = "x",
            Y = "y",
            WIDTH = "width",
            HEIGHT = "height",
            // Positioning sides
            TOP = "top",
            LEFT = "left",
            BOTTOM = "bottom",
            RIGHT = "right",
            CENTER = "center",
            // Position adjustment types
            FLIP = "flip",
            FLIPINVERT = "flipinvert",
            SHIFT = "shift",
            // Shortcut vars
            QTIP,
            PROTOTYPE,
            CORNER,
            CHECKS,
            PLUGINS = {},
            NAMESPACE = "qtip",
            ATTR_HAS = "data-hasqtip",
            ATTR_ID = "data-qtip-id",
            WIDGET = ["ui-widget", "ui-tooltip"],
            SELECTOR = "." + NAMESPACE,
            INACTIVE_EVENTS =
                "click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(
                    " "
                ),
            CLASS_FIXED = NAMESPACE + "-fixed",
            CLASS_DEFAULT = NAMESPACE + "-default",
            CLASS_FOCUS = NAMESPACE + "-focus",
            CLASS_HOVER = NAMESPACE + "-hover",
            CLASS_DISABLED = NAMESPACE + "-disabled",
            replaceSuffix = "_replacedByqTip",
            oldtitle = "oldtitle",
            trackingBound,
            // Browser detection
            BROWSER = {
                /*
                 * IE version detection
                 *
                 * Adapted from: http://ajaxian.com/archives/attack-of-the-ie-conditional-comment
                 * Credit to James Padolsey for the original implemntation!
                 */
                ie: (function () {
                    for (
                        var v = 4, i = document.createElement("div");
                        (i.innerHTML =
                            "<!--[if gt IE " + v + "]><i></i><![endif]-->") &&
                        i.getElementsByTagName("i")[0];
                        v += 1
                    ) {}
                    return v > 4 ? v : NaN;
                })(),

                /*
                 * iOS version detection
                 */
                iOS:
                    parseFloat(
                        (
                            "" +
                            (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(
                                navigator.userAgent
                            ) || [0, ""])[1]
                        )
                            .replace("undefined", "3_2")
                            .replace("_", ".")
                            .replace("_", "")
                    ) || FALSE,
            };
        function QTip(target, options, id, attr) {
            // Elements and ID
            this.id = id;
            this.target = target;
            this.tooltip = NULL;
            this.elements = { target: target };

            // Internal constructs
            this._id = NAMESPACE + "-" + id;
            this.timers = { img: {} };
            this.options = options;
            this.plugins = {};

            // Cache object
            this.cache = {
                event: {},
                target: $(),
                disabled: FALSE,
                attr: attr,
                onTooltip: FALSE,
                lastClass: "",
            };

            // Set the initial flags
            this.rendered =
                this.destroyed =
                this.disabled =
                this.waiting =
                this.hiddenDuringWait =
                this.positioning =
                this.triggering =
                    FALSE;
        }
        PROTOTYPE = QTip.prototype;

        PROTOTYPE._when = function (deferreds) {
            return $.when.apply($, deferreds);
        };

        PROTOTYPE.render = function (show) {
            if (this.rendered || this.destroyed) {
                return this;
            } // If tooltip has already been rendered, exit

            var self = this,
                options = this.options,
                cache = this.cache,
                elements = this.elements,
                text = options.content.text,
                title = options.content.title,
                button = options.content.button,
                posOptions = options.position,
                namespace = "." + this._id + " ",
                deferreds = [],
                tooltip;

            // Add ARIA attributes to target
            $.attr(this.target[0], "aria-describedby", this._id);

            // Create public position object that tracks current position corners
            cache.posClass = this._createPosClass(
                (this.position = { my: posOptions.my, at: posOptions.at }).my
            );

            // Create tooltip element
            this.tooltip =
                elements.tooltip =
                tooltip =
                    $("<div/>", {
                        id: this._id,
                        class: [
                            NAMESPACE,
                            CLASS_DEFAULT,
                            options.style.classes,
                            cache.posClass,
                        ].join(" "),
                        width: options.style.width || "",
                        height: options.style.height || "",
                        tracking:
                            posOptions.target === "mouse" &&
                            posOptions.adjust.mouse,

                        /* ARIA specific attributes */
                        role: "alert",
                        "aria-live": "polite",
                        "aria-atomic": FALSE,
                        "aria-describedby": this._id + "-content",
                        "aria-hidden": TRUE,
                    })
                        .toggleClass(CLASS_DISABLED, this.disabled)
                        .attr(ATTR_ID, this.id)
                        .data(NAMESPACE, this)
                        .appendTo(posOptions.container)
                        .append(
                            // Create content element
                            (elements.content = $("<div />", {
                                class: NAMESPACE + "-content",
                                id: this._id + "-content",
                                "aria-atomic": TRUE,
                            }))
                        );

            // Set rendered flag and prevent redundant reposition calls for now
            this.rendered = -1;
            this.positioning = TRUE;

            // Create title...
            if (title) {
                this._createTitle();

                // Update title only if its not a callback (called in toggle if so)
                if (!$.isFunction(title)) {
                    deferreds.push(this._updateTitle(title, FALSE));
                }
            }

            // Create button
            if (button) {
                this._createButton();
            }

            // Set proper rendered flag and update content if not a callback function (called in toggle)
            if (!$.isFunction(text)) {
                deferreds.push(this._updateContent(text, FALSE));
            }
            this.rendered = TRUE;

            // Setup widget classes
            this._setWidget();

            // Initialize 'render' plugins
            $.each(PLUGINS, function (name) {
                var instance;
                if (this.initialize === "render" && (instance = this(self))) {
                    self.plugins[name] = instance;
                }
            });

            // Unassign initial events and assign proper events
            this._unassignEvents();
            this._assignEvents();

            // When deferreds have completed
            this._when(deferreds).then(function () {
                // tooltiprender event
                self._trigger("render");

                // Reset flags
                self.positioning = FALSE;

                // Show tooltip if not hidden during wait period
                if (!self.hiddenDuringWait && (options.show.ready || show)) {
                    self.toggle(TRUE, cache.event, FALSE);
                }
                self.hiddenDuringWait = FALSE;
            });

            // Expose API
            QTIP.api[this.id] = this;

            return this;
        };

        PROTOTYPE.destroy = function (immediate) {
            // Set flag the signify destroy is taking place to plugins
            // and ensure it only gets destroyed once!
            if (this.destroyed) {
                return this.target;
            }

            function process() {
                if (this.destroyed) {
                    return;
                }
                this.destroyed = TRUE;

                var target = this.target,
                    title = target.attr(oldtitle),
                    timer;

                // Destroy tooltip if rendered
                if (this.rendered) {
                    this.tooltip.stop(1, 0).find("*").remove().end().remove();
                }

                // Destroy all plugins
                $.each(this.plugins, function (name) {
                    this.destroy && this.destroy();
                });

                // Clear timers
                for (timer in this.timers) {
                    clearTimeout(this.timers[timer]);
                }

                // Remove api object and ARIA attributes
                target
                    .removeData(NAMESPACE)
                    .removeAttr(ATTR_ID)
                    .removeAttr(ATTR_HAS)
                    .removeAttr("aria-describedby");

                // Reset old title attribute if removed
                if (this.options.suppress && title) {
                    target.attr("title", title).removeAttr(oldtitle);
                }

                // Remove qTip events associated with this API
                this._unassignEvents();

                // Remove ID from used id objects, and delete object references
                // for better garbage collection and leak protection
                this.options =
                    this.elements =
                    this.cache =
                    this.timers =
                    this.plugins =
                    this.mouse =
                        NULL;

                // Delete epoxsed API object
                delete QTIP.api[this.id];
            }

            // If an immediate destory is needed
            if (
                (immediate !== TRUE || this.triggering === "hide") &&
                this.rendered
            ) {
                this.tooltip.one("tooltiphidden", $.proxy(process, this));
                !this.triggering && this.hide();
            }

            // If we're not in the process of hiding... process
            else {
                process.call(this);
            }

            return this.target;
        };
        function invalidOpt(a) {
            return a === NULL || $.type(a) !== "object";
        }

        function invalidContent(c) {
            return !(
                $.isFunction(c) ||
                (c && c.attr) ||
                c.length ||
                ($.type(c) === "object" && (c.jquery || c.then))
            );
        }

        // Option object sanitizer
        function sanitizeOptions(opts) {
            var content, text, ajax, once;

            if (invalidOpt(opts)) {
                return FALSE;
            }

            if (invalidOpt(opts.metadata)) {
                opts.metadata = { type: opts.metadata };
            }

            if ("content" in opts) {
                content = opts.content;

                if (invalidOpt(content) || content.jquery || content.done) {
                    content = opts.content = {
                        text: (text = invalidContent(content)
                            ? FALSE
                            : content),
                    };
                } else {
                    text = content.text;
                }

                // DEPRECATED - Old content.ajax plugin functionality
                // Converts it into the proper Deferred syntax
                if ("ajax" in content) {
                    ajax = content.ajax;
                    once = ajax && ajax.once !== FALSE;
                    delete content.ajax;

                    content.text = function (event, api) {
                        var loading =
                                text ||
                                $(this).attr(api.options.content.attr) ||
                                "Loading...",
                            deferred = $.ajax(
                                $.extend({}, ajax, { context: api })
                            )
                                .then(ajax.success, NULL, ajax.error)
                                .then(
                                    function (content) {
                                        if (content && once) {
                                            api.set("content.text", content);
                                        }
                                        return content;
                                    },
                                    function (xhr, status, error) {
                                        if (api.destroyed || xhr.status === 0) {
                                            return;
                                        }
                                        api.set(
                                            "content.text",
                                            status + ": " + error
                                        );
                                    }
                                );

                        return !once
                            ? (api.set("content.text", loading), deferred)
                            : loading;
                    };
                }

                if ("title" in content) {
                    if ($.isPlainObject(content.title)) {
                        content.button = content.title.button;
                        content.title = content.title.text;
                    }

                    if (invalidContent(content.title || FALSE)) {
                        content.title = FALSE;
                    }
                }
            }

            if ("position" in opts && invalidOpt(opts.position)) {
                opts.position = { my: opts.position, at: opts.position };
            }

            if ("show" in opts && invalidOpt(opts.show)) {
                opts.show = opts.show.jquery
                    ? { target: opts.show }
                    : opts.show === TRUE
                    ? { ready: TRUE }
                    : { event: opts.show };
            }

            if ("hide" in opts && invalidOpt(opts.hide)) {
                opts.hide = opts.hide.jquery
                    ? { target: opts.hide }
                    : { event: opts.hide };
            }

            if ("style" in opts && invalidOpt(opts.style)) {
                opts.style = { classes: opts.style };
            }

            // Sanitize plugin options
            $.each(PLUGINS, function () {
                this.sanitize && this.sanitize(opts);
            });

            return opts;
        }

        // Setup builtin .set() option checks
        CHECKS = PROTOTYPE.checks = {
            builtin: {
                // Core checks
                "^id$": function (obj, o, v, prev) {
                    var id = v === TRUE ? QTIP.nextid : v,
                        new_id = NAMESPACE + "-" + id;

                    if (
                        id !== FALSE &&
                        id.length > 0 &&
                        !$("#" + new_id).length
                    ) {
                        this._id = new_id;

                        if (this.rendered) {
                            this.tooltip[0].id = this._id;
                            this.elements.content[0].id = this._id + "-content";
                            this.elements.title[0].id = this._id + "-title";
                        }
                    } else {
                        obj[o] = prev;
                    }
                },
                "^prerender": function (obj, o, v) {
                    v && !this.rendered && this.render(this.options.show.ready);
                },

                // Content checks
                "^content.text$": function (obj, o, v) {
                    this._updateContent(v);
                },
                "^content.attr$": function (obj, o, v, prev) {
                    if (this.options.content.text === this.target.attr(prev)) {
                        this._updateContent(this.target.attr(v));
                    }
                },
                "^content.title$": function (obj, o, v) {
                    // Remove title if content is null
                    if (!v) {
                        return this._removeTitle();
                    }

                    // If title isn't already created, create it now and update
                    v && !this.elements.title && this._createTitle();
                    this._updateTitle(v);
                },
                "^content.button$": function (obj, o, v) {
                    this._updateButton(v);
                },
                "^content.title.(text|button)$": function (obj, o, v) {
                    this.set("content." + o, v); // Backwards title.text/button compat
                },

                // Position checks
                "^position.(my|at)$": function (obj, o, v) {
                    "string" === typeof v &&
                        (this.position[o] = obj[o] = new CORNER(v, o === "at"));
                },
                "^position.container$": function (obj, o, v) {
                    this.rendered && this.tooltip.appendTo(v);
                },

                // Show checks
                "^show.ready$": function (obj, o, v) {
                    v &&
                        ((!this.rendered && this.render(TRUE)) ||
                            this.toggle(TRUE));
                },

                // Style checks
                "^style.classes$": function (obj, o, v, p) {
                    this.rendered && this.tooltip.removeClass(p).addClass(v);
                },
                "^style.(width|height)": function (obj, o, v) {
                    this.rendered && this.tooltip.css(o, v);
                },
                "^style.widget|content.title": function () {
                    this.rendered && this._setWidget();
                },
                "^style.def": function (obj, o, v) {
                    this.rendered &&
                        this.tooltip.toggleClass(CLASS_DEFAULT, !!v);
                },

                // Events check
                "^events.(render|show|move|hide|focus|blur)$": function (
                    obj,
                    o,
                    v
                ) {
                    this.rendered &&
                        this.tooltip[($.isFunction(v) ? "" : "un") + "bind"](
                            "tooltip" + o,
                            v
                        );
                },

                // Properties which require event reassignment
                "^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":
                    function () {
                        if (!this.rendered) {
                            return;
                        }

                        // Set tracking flag
                        var posOptions = this.options.position;
                        this.tooltip.attr(
                            "tracking",
                            posOptions.target === "mouse" &&
                                posOptions.adjust.mouse
                        );

                        // Reassign events
                        this._unassignEvents();
                        this._assignEvents();
                    },
            },
        };

        // Dot notation converter
        function convertNotation(options, notation) {
            var i = 0,
                obj,
                option = options,
                // Split notation into array
                levels = notation.split(".");

            // Loop through
            while ((option = option[levels[i++]])) {
                if (i < levels.length) {
                    obj = option;
                }
            }

            return [obj || options, levels.pop()];
        }

        PROTOTYPE.get = function (notation) {
            if (this.destroyed) {
                return this;
            }

            var o = convertNotation(this.options, notation.toLowerCase()),
                result = o[0][o[1]];

            return result.precedance ? result.string() : result;
        };

        function setCallback(notation, args) {
            var category, rule, match;

            for (category in this.checks) {
                for (rule in this.checks[category]) {
                    if ((match = new RegExp(rule, "i").exec(notation))) {
                        args.push(match);

                        if (category === "builtin" || this.plugins[category]) {
                            this.checks[category][rule].apply(
                                this.plugins[category] || this,
                                args
                            );
                        }
                    }
                }
            }
        }

        var rmove =
                /^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i,
            rrender = /^prerender|show\.ready/i;

        PROTOTYPE.set = function (option, value) {
            if (this.destroyed) {
                return this;
            }

            var rendered = this.rendered,
                reposition = FALSE,
                options = this.options,
                checks = this.checks,
                name;

            // Convert singular option/value pair into object form
            if ("string" === typeof option) {
                name = option;
                option = {};
                option[name] = value;
            } else {
                option = $.extend({}, option);
            }

            // Set all of the defined options to their new values
            $.each(option, function (notation, value) {
                if (rendered && rrender.test(notation)) {
                    delete option[notation];
                    return;
                }

                // Set new obj value
                var obj = convertNotation(options, notation.toLowerCase()),
                    previous;
                previous = obj[0][obj[1]];
                obj[0][obj[1]] = value && value.nodeType ? $(value) : value;

                // Also check if we need to reposition
                reposition = rmove.test(notation) || reposition;

                // Set the new params for the callback
                option[notation] = [obj[0], obj[1], value, previous];
            });

            // Re-sanitize options
            sanitizeOptions(options);

            /*
             * Execute any valid callbacks for the set options
             * Also set positioning flag so we don't get loads of redundant repositioning calls.
             */
            this.positioning = TRUE;
            $.each(option, $.proxy(setCallback, this));
            this.positioning = FALSE;

            // Update position if needed
            if (
                this.rendered &&
                this.tooltip[0].offsetWidth > 0 &&
                reposition
            ) {
                this.reposition(
                    options.position.target === "mouse"
                        ? NULL
                        : this.cache.event
                );
            }

            return this;
        };
        PROTOTYPE._update = function (content, element, reposition) {
            var self = this,
                cache = this.cache;

            // Make sure tooltip is rendered and content is defined. If not return
            if (!this.rendered || !content) {
                return FALSE;
            }

            // Use function to parse content
            if ($.isFunction(content)) {
                content =
                    content.call(this.elements.target, cache.event, this) || "";
            }

            // Handle deferred content
            if ($.isFunction(content.then)) {
                cache.waiting = TRUE;
                return content.then(
                    function (c) {
                        cache.waiting = FALSE;
                        return self._update(c, element);
                    },
                    NULL,
                    function (e) {
                        return self._update(e, element);
                    }
                );
            }

            // If content is null... return false
            if (content === FALSE || (!content && content !== "")) {
                return FALSE;
            }

            // Append new content if its a DOM array and show it if hidden
            if (content.jquery && content.length > 0) {
                element
                    .empty()
                    .append(
                        content.css({ display: "block", visibility: "visible" })
                    );
            }

            // Content is a regular string, insert the new content
            else {
                element.html(content);
            }

            // Wait for content to be loaded, and reposition
            return this._waitForContent(element).then(function (images) {
                if (self.rendered && self.tooltip[0].offsetWidth > 0) {
                    self.reposition(cache.event, !images.length);
                }
            });
        };

        PROTOTYPE._waitForContent = function (element) {
            var cache = this.cache;

            // Set flag
            cache.waiting = TRUE;

            // If imagesLoaded is included, ensure images have loaded and return promise
            return (
                $.fn.imagesLoaded
                    ? element.imagesLoaded()
                    : $.Deferred().resolve([])
            )
                .done(function () {
                    cache.waiting = FALSE;
                })
                .promise();
        };

        PROTOTYPE._updateContent = function (content, reposition) {
            this._update(content, this.elements.content, reposition);
        };

        PROTOTYPE._updateTitle = function (content, reposition) {
            if (
                this._update(content, this.elements.title, reposition) === FALSE
            ) {
                this._removeTitle(FALSE);
            }
        };

        PROTOTYPE._createTitle = function () {
            var elements = this.elements,
                id = this._id + "-title";

            // Destroy previous title element, if present
            if (elements.titlebar) {
                this._removeTitle();
            }

            // Create title bar and title elements
            elements.titlebar = $("<div />", {
                class:
                    NAMESPACE +
                    "-titlebar " +
                    (this.options.style.widget
                        ? createWidgetClass("header")
                        : ""),
            })
                .append(
                    (elements.title = $("<div />", {
                        id: id,
                        class: NAMESPACE + "-title",
                        "aria-atomic": TRUE,
                    }))
                )
                .insertBefore(elements.content)

                // Button-specific events
                .delegate(
                    ".qtip-close",
                    "mousedown keydown mouseup keyup mouseout",
                    function (event) {
                        $(this).toggleClass(
                            "ui-state-active ui-state-focus",
                            event.type.substr(-4) === "down"
                        );
                    }
                )
                .delegate(
                    ".qtip-close",
                    "mouseover mouseout",
                    function (event) {
                        $(this).toggleClass(
                            "ui-state-hover",
                            event.type === "mouseover"
                        );
                    }
                );

            // Create button if enabled
            if (this.options.content.button) {
                this._createButton();
            }
        };

        PROTOTYPE._removeTitle = function (reposition) {
            var elements = this.elements;

            if (elements.title) {
                elements.titlebar.remove();
                elements.titlebar = elements.title = elements.button = NULL;

                // Reposition if enabled
                if (reposition !== FALSE) {
                    this.reposition();
                }
            }
        };
        PROTOTYPE._createPosClass = function (my) {
            return (
                NAMESPACE + "-pos-" + (my || this.options.position.my).abbrev()
            );
        };

        PROTOTYPE.reposition = function (event, effect) {
            if (!this.rendered || this.positioning || this.destroyed) {
                return this;
            }

            // Set positioning flag
            this.positioning = TRUE;

            var cache = this.cache,
                tooltip = this.tooltip,
                posOptions = this.options.position,
                target = posOptions.target,
                my = posOptions.my,
                at = posOptions.at,
                viewport = posOptions.viewport,
                container = posOptions.container,
                adjust = posOptions.adjust,
                method = adjust.method.split(" "),
                tooltipWidth = tooltip.outerWidth(FALSE),
                tooltipHeight = tooltip.outerHeight(FALSE),
                targetWidth = 0,
                targetHeight = 0,
                type = tooltip.css("position"),
                position = { left: 0, top: 0 },
                visible = tooltip[0].offsetWidth > 0,
                isScroll = event && event.type === "scroll",
                win = $(window),
                doc = container[0].ownerDocument,
                mouse = this.mouse,
                pluginCalculations,
                offset,
                adjusted,
                newClass;

            // Check if absolute position was passed
            if ($.isArray(target) && target.length === 2) {
                // Force left top and set position
                at = { x: LEFT, y: TOP };
                position = { left: target[0], top: target[1] };
            }

            // Check if mouse was the target
            else if (target === "mouse") {
                // Force left top to allow flipping
                at = { x: LEFT, y: TOP };

                // Use the mouse origin that caused the show event, if distance hiding is enabled
                if (
                    (!adjust.mouse || this.options.hide.distance) &&
                    cache.origin &&
                    cache.origin.pageX
                ) {
                    event = cache.origin;
                }

                // Use cached event for resize/scroll events
                else if (
                    !event ||
                    (event &&
                        (event.type === "resize" || event.type === "scroll"))
                ) {
                    event = cache.event;
                }

                // Otherwise, use the cached mouse coordinates if available
                else if (mouse && mouse.pageX) {
                    event = mouse;
                }

                // Calculate body and container offset and take them into account below
                if (type !== "static") {
                    position = container.offset();
                }
                if (
                    doc.body.offsetWidth !==
                    (window.innerWidth || doc.documentElement.clientWidth)
                ) {
                    offset = $(document.body).offset();
                }

                // Use event coordinates for position
                position = {
                    left:
                        event.pageX -
                        position.left +
                        ((offset && offset.left) || 0),
                    top:
                        event.pageY -
                        position.top +
                        ((offset && offset.top) || 0),
                };

                // Scroll events are a pain, some browsers
                if (adjust.mouse && isScroll && mouse) {
                    position.left -= (mouse.scrollX || 0) - win.scrollLeft();
                    position.top -= (mouse.scrollY || 0) - win.scrollTop();
                }
            }

            // Target wasn't mouse or absolute...
            else {
                // Check if event targetting is being used
                if (target === "event") {
                    if (
                        event &&
                        event.target &&
                        event.type !== "scroll" &&
                        event.type !== "resize"
                    ) {
                        cache.target = $(event.target);
                    } else if (!event.target) {
                        cache.target = this.elements.target;
                    }
                } else if (target !== "event") {
                    cache.target = $(
                        target.jquery ? target : this.elements.target
                    );
                }
                target = cache.target;

                // Parse the target into a jQuery object and make sure there's an element present
                target = $(target).eq(0);
                if (target.length === 0) {
                    return this;
                }

                // Check if window or document is the target
                else if (target[0] === document || target[0] === window) {
                    targetWidth = BROWSER.iOS
                        ? window.innerWidth
                        : target.width();
                    targetHeight = BROWSER.iOS
                        ? window.innerHeight
                        : target.height();

                    if (target[0] === window) {
                        position = {
                            top: (viewport || target).scrollTop(),
                            left: (viewport || target).scrollLeft(),
                        };
                    }
                }

                // Check if the target is an <AREA> element
                else if (PLUGINS.imagemap && target.is("area")) {
                    pluginCalculations = PLUGINS.imagemap(
                        this,
                        target,
                        at,
                        PLUGINS.viewport ? method : FALSE
                    );
                }

                // Check if the target is an SVG element
                else if (PLUGINS.svg && target && target[0].ownerSVGElement) {
                    pluginCalculations = PLUGINS.svg(
                        this,
                        target,
                        at,
                        PLUGINS.viewport ? method : FALSE
                    );
                }

                // Otherwise use regular jQuery methods
                else {
                    targetWidth = target.outerWidth(FALSE);
                    targetHeight = target.outerHeight(FALSE);
                    position = target.offset();
                }

                // Parse returned plugin values into proper variables
                if (pluginCalculations) {
                    targetWidth = pluginCalculations.width;
                    targetHeight = pluginCalculations.height;
                    offset = pluginCalculations.offset;
                    position = pluginCalculations.position;
                }

                // Adjust position to take into account offset parents
                position = this.reposition.offset(target, position, container);

                // Adjust for position.fixed tooltips (and also iOS scroll bug in v3.2-4.0 & v4.3-4.3.2)
                if (
                    (BROWSER.iOS > 3.1 && BROWSER.iOS < 4.1) ||
                    (BROWSER.iOS >= 4.3 && BROWSER.iOS < 4.33) ||
                    (!BROWSER.iOS && type === "fixed")
                ) {
                    position.left -= win.scrollLeft();
                    position.top -= win.scrollTop();
                }

                // Adjust position relative to target
                if (
                    !pluginCalculations ||
                    (pluginCalculations &&
                        pluginCalculations.adjustable !== FALSE)
                ) {
                    position.left +=
                        at.x === RIGHT
                            ? targetWidth
                            : at.x === CENTER
                            ? targetWidth / 2
                            : 0;
                    position.top +=
                        at.y === BOTTOM
                            ? targetHeight
                            : at.y === CENTER
                            ? targetHeight / 2
                            : 0;
                }
            }

            // Adjust position relative to tooltip
            position.left +=
                adjust.x +
                (my.x === RIGHT
                    ? -tooltipWidth
                    : my.x === CENTER
                    ? -tooltipWidth / 2
                    : 0);
            position.top +=
                adjust.y +
                (my.y === BOTTOM
                    ? -tooltipHeight
                    : my.y === CENTER
                    ? -tooltipHeight / 2
                    : 0);

            // Use viewport adjustment plugin if enabled
            if (PLUGINS.viewport) {
                adjusted = position.adjusted = PLUGINS.viewport(
                    this,
                    position,
                    posOptions,
                    targetWidth,
                    targetHeight,
                    tooltipWidth,
                    tooltipHeight
                );

                // Apply offsets supplied by positioning plugin (if used)
                if (offset && adjusted.left) {
                    position.left += offset.left;
                }
                if (offset && adjusted.top) {
                    position.top += offset.top;
                }

                // Apply any new 'my' position
                if (adjusted.my) {
                    this.position.my = adjusted.my;
                }
            }

            // Viewport adjustment is disabled, set values to zero
            else {
                position.adjusted = { left: 0, top: 0 };
            }

            // Set tooltip position class if it's changed
            if (
                cache.posClass !==
                (newClass = this._createPosClass(this.position.my))
            ) {
                tooltip
                    .removeClass(cache.posClass)
                    .addClass((cache.posClass = newClass));
            }

            // tooltipmove event
            if (
                !this._trigger(
                    "move",
                    [position, viewport.elem || viewport],
                    event
                )
            ) {
                return this;
            }
            delete position.adjusted;

            // If effect is disabled, target it mouse, no animation is defined or positioning gives NaN out, set CSS directly
            if (
                effect === FALSE ||
                !visible ||
                isNaN(position.left) ||
                isNaN(position.top) ||
                target === "mouse" ||
                !$.isFunction(posOptions.effect)
            ) {
                tooltip.css(position);
            }

            // Use custom function if provided
            else if ($.isFunction(posOptions.effect)) {
                posOptions.effect.call(tooltip, this, $.extend({}, position));
                tooltip.queue(function (next) {
                    // Reset attributes to avoid cross-browser rendering bugs
                    $(this).css({ opacity: "", height: "" });
                    if (BROWSER.ie) {
                        this.style.removeAttribute("filter");
                    }

                    next();
                });
            }

            // Set positioning flag
            this.positioning = FALSE;

            return this;
        };

        // Custom (more correct for qTip!) offset calculator
        PROTOTYPE.reposition.offset = function (elem, pos, container) {
            if (!container[0]) {
                return pos;
            }

            var ownerDocument = $(elem[0].ownerDocument),
                quirks = !!BROWSER.ie && document.compatMode !== "CSS1Compat",
                parent = container[0],
                scrolled,
                position,
                parentOffset,
                overflow;

            function scroll(e, i) {
                pos.left += i * e.scrollLeft();
                pos.top += i * e.scrollTop();
            }

            // Compensate for non-static containers offset
            do {
                if ((position = $.css(parent, "position")) !== "static") {
                    if (position === "fixed") {
                        parentOffset = parent.getBoundingClientRect();
                        scroll(ownerDocument, -1);
                    } else {
                        parentOffset = $(parent).position();
                        parentOffset.left +=
                            parseFloat($.css(parent, "borderLeftWidth")) || 0;
                        parentOffset.top +=
                            parseFloat($.css(parent, "borderTopWidth")) || 0;
                    }

                    pos.left -=
                        parentOffset.left +
                        (parseFloat($.css(parent, "marginLeft")) || 0);
                    pos.top -=
                        parentOffset.top +
                        (parseFloat($.css(parent, "marginTop")) || 0);

                    // If this is the first parent element with an overflow of "scroll" or "auto", store it
                    if (
                        !scrolled &&
                        (overflow = $.css(parent, "overflow")) !== "hidden" &&
                        overflow !== "visible"
                    ) {
                        scrolled = $(parent);
                    }
                }
            } while ((parent = parent.offsetParent));

            // Compensate for containers scroll if it also has an offsetParent (or in IE quirks mode)
            if (scrolled && (scrolled[0] !== ownerDocument[0] || quirks)) {
                scroll(scrolled, 1);
            }

            return pos;
        };

        // Corner class
        var C = (CORNER = PROTOTYPE.reposition.Corner =
            function (corner, forceY) {
                corner = ("" + corner)
                    .replace(/([A-Z])/, " $1")
                    .replace(/middle/gi, CENTER)
                    .toLowerCase();
                this.x = (corner.match(/left|right/i) ||
                    corner.match(/center/) || ["inherit"])[0].toLowerCase();
                this.y = (corner.match(/top|bottom|center/i) || [
                    "inherit",
                ])[0].toLowerCase();
                this.forceY = !!forceY;

                var f = corner.charAt(0);
                this.precedance = f === "t" || f === "b" ? Y : X;
            }).prototype;

        C.invert = function (z, center) {
            this[z] =
                this[z] === LEFT
                    ? RIGHT
                    : this[z] === RIGHT
                    ? LEFT
                    : center || this[z];
        };

        C.string = function (join) {
            var x = this.x,
                y = this.y;

            var result =
                x !== y
                    ? x === "center" ||
                      (y !== "center" && (this.precedance === Y || this.forceY))
                        ? [y, x]
                        : [x, y]
                    : [x];

            return join !== false ? result.join(" ") : result;
        };

        C.abbrev = function () {
            var result = this.string(false);
            return (
                result[0].charAt(0) + ((result[1] && result[1].charAt(0)) || "")
            );
        };

        C.clone = function () {
            return new CORNER(this.string(), this.forceY);
        };

        PROTOTYPE.toggle = function (state, event) {
            var cache = this.cache,
                options = this.options,
                tooltip = this.tooltip;

            // Try to prevent flickering when tooltip overlaps show element
            if (event) {
                if (
                    /over|enter/.test(event.type) &&
                    cache.event &&
                    /out|leave/.test(cache.event.type) &&
                    options.show.target.add(event.target).length ===
                        options.show.target.length &&
                    tooltip.has(event.relatedTarget).length
                ) {
                    return this;
                }

                // Cache event
                cache.event = $.event.fix(event);
            }

            // If we're currently waiting and we've just hidden... stop it
            this.waiting && !state && (this.hiddenDuringWait = TRUE);

            // Render the tooltip if showing and it isn't already
            if (!this.rendered) {
                return state ? this.render(1) : this;
            } else if (this.destroyed || this.disabled) {
                return this;
            }

            var type = state ? "show" : "hide",
                opts = this.options[type],
                otherOpts = this.options[!state ? "show" : "hide"],
                posOptions = this.options.position,
                contentOptions = this.options.content,
                width = this.tooltip.css("width"),
                visible = this.tooltip.is(":visible"),
                animate = state || opts.target.length === 1,
                sameTarget =
                    !event ||
                    opts.target.length < 2 ||
                    cache.target[0] === event.target,
                identicalState,
                allow,
                showEvent,
                delay,
                after;

            // Detect state if valid one isn't provided
            if ((typeof state).search("boolean|number")) {
                state = !visible;
            }

            // Check if the tooltip is in an identical state to the new would-be state
            identicalState =
                !tooltip.is(":animated") && visible === state && sameTarget;

            // Fire tooltip(show/hide) event and check if destroyed
            allow = !identicalState ? !!this._trigger(type, [90]) : NULL;

            // Check to make sure the tooltip wasn't destroyed in the callback
            if (this.destroyed) {
                return this;
            }

            // If the user didn't stop the method prematurely and we're showing the tooltip, focus it
            if (allow !== FALSE && state) {
                this.focus(event);
            }

            // If the state hasn't changed or the user stopped it, return early
            if (!allow || identicalState) {
                return this;
            }

            // Set ARIA hidden attribute
            $.attr(tooltip[0], "aria-hidden", !!!state);

            // Execute state specific properties
            if (state) {
                // Store show origin coordinates
                this.mouse && (cache.origin = $.event.fix(this.mouse));

                // Update tooltip content & title if it's a dynamic function
                if ($.isFunction(contentOptions.text)) {
                    this._updateContent(contentOptions.text, FALSE);
                }
                if ($.isFunction(contentOptions.title)) {
                    this._updateTitle(contentOptions.title, FALSE);
                }

                // Cache mousemove events for positioning purposes (if not already tracking)
                if (
                    !trackingBound &&
                    posOptions.target === "mouse" &&
                    posOptions.adjust.mouse
                ) {
                    $(document).bind(
                        "mousemove." + NAMESPACE,
                        this._storeMouse
                    );
                    trackingBound = TRUE;
                }

                // Update the tooltip position (set width first to prevent viewport/max-width issues)
                if (!width) {
                    tooltip.css("width", tooltip.outerWidth(FALSE));
                }
                this.reposition(event, arguments[2]);
                if (!width) {
                    tooltip.css("width", "");
                }

                // Hide other tooltips if tooltip is solo
                if (!!opts.solo) {
                    (typeof opts.solo === "string"
                        ? $(opts.solo)
                        : $(SELECTOR, opts.solo)
                    )
                        .not(tooltip)
                        .not(opts.target)
                        .qtip("hide", $.Event("tooltipsolo"));
                }
            } else {
                // Clear show timer if we're hiding
                clearTimeout(this.timers.show);

                // Remove cached origin on hide
                delete cache.origin;

                // Remove mouse tracking event if not needed (all tracking qTips are hidden)
                if (
                    trackingBound &&
                    !$(SELECTOR + '[tracking="true"]:visible', opts.solo).not(
                        tooltip
                    ).length
                ) {
                    $(document).unbind("mousemove." + NAMESPACE);
                    trackingBound = FALSE;
                }

                // Blur the tooltip
                this.blur(event);
            }

            // Define post-animation, state specific properties
            after = $.proxy(function () {
                if (state) {
                    // Prevent antialias from disappearing in IE by removing filter
                    if (BROWSER.ie) {
                        tooltip[0].style.removeAttribute("filter");
                    }

                    // Remove overflow setting to prevent tip bugs
                    tooltip.css("overflow", "");

                    // Autofocus elements if enabled
                    if ("string" === typeof opts.autofocus) {
                        $(this.options.show.autofocus, tooltip).focus();
                    }

                    // If set, hide tooltip when inactive for delay period
                    this.options.show.target.trigger(
                        "qtip-" + this.id + "-inactive"
                    );
                } else {
                    // Reset CSS states
                    tooltip.css({
                        display: "",
                        visibility: "",
                        opacity: "",
                        left: "",
                        top: "",
                    });
                }

                // tooltipvisible/tooltiphidden events
                this._trigger(state ? "visible" : "hidden");
            }, this);

            // If no effect type is supplied, use a simple toggle
            if (opts.effect === FALSE || animate === FALSE) {
                tooltip[type]();
                after();
            }

            // Use custom function if provided
            else if ($.isFunction(opts.effect)) {
                tooltip.stop(1, 1);
                opts.effect.call(tooltip, this);
                tooltip.queue("fx", function (n) {
                    after();
                    n();
                });
            }

            // Use basic fade function by default
            else {
                tooltip.fadeTo(90, state ? 1 : 0, after);
            }

            // If inactive hide method is set, active it
            if (state) {
                opts.target.trigger("qtip-" + this.id + "-inactive");
            }

            return this;
        };

        PROTOTYPE.show = function (event) {
            return this.toggle(TRUE, event);
        };

        PROTOTYPE.hide = function (event) {
            return this.toggle(FALSE, event);
        };
        PROTOTYPE.focus = function (event) {
            if (!this.rendered || this.destroyed) {
                return this;
            }

            var qtips = $(SELECTOR),
                tooltip = this.tooltip,
                curIndex = parseInt(tooltip[0].style.zIndex, 10),
                newIndex = QTIP.zindex + qtips.length,
                focusedElem;

            // Only update the z-index if it has changed and tooltip is not already focused
            if (!tooltip.hasClass(CLASS_FOCUS)) {
                // tooltipfocus event
                if (this._trigger("focus", [newIndex], event)) {
                    // Only update z-index's if they've changed
                    if (curIndex !== newIndex) {
                        // Reduce our z-index's and keep them properly ordered
                        qtips.each(function () {
                            if (this.style.zIndex > curIndex) {
                                this.style.zIndex = this.style.zIndex - 1;
                            }
                        });

                        // Fire blur event for focused tooltip
                        qtips.filter("." + CLASS_FOCUS).qtip("blur", event);
                    }

                    // Set the new z-index
                    tooltip.addClass(CLASS_FOCUS)[0].style.zIndex = newIndex;
                }
            }

            return this;
        };

        PROTOTYPE.blur = function (event) {
            if (!this.rendered || this.destroyed) {
                return this;
            }

            // Set focused status to FALSE
            this.tooltip.removeClass(CLASS_FOCUS);

            // tooltipblur event
            this._trigger("blur", [this.tooltip.css("zIndex")], event);

            return this;
        };
        PROTOTYPE.disable = function (state) {
            if (this.destroyed) {
                return this;
            }

            // If 'toggle' is passed, toggle the current state
            if (state === "toggle") {
                state = !(this.rendered
                    ? this.tooltip.hasClass(CLASS_DISABLED)
                    : this.disabled);
            }

            // Disable if no state passed
            else if ("boolean" !== typeof state) {
                state = TRUE;
            }

            if (this.rendered) {
                this.tooltip
                    .toggleClass(CLASS_DISABLED, state)
                    .attr("aria-disabled", state);
            }

            this.disabled = !!state;

            return this;
        };

        PROTOTYPE.enable = function () {
            return this.disable(FALSE);
        };
        PROTOTYPE._createButton = function () {
            var self = this,
                elements = this.elements,
                tooltip = elements.tooltip,
                button = this.options.content.button,
                isString = typeof button === "string",
                close = isString ? button : "Close tooltip";

            if (elements.button) {
                elements.button.remove();
            }

            // Use custom button if one was supplied by user, else use default
            if (button.jquery) {
                elements.button = button;
            } else {
                elements.button = $("<a />", {
                    class:
                        "qtip-close " +
                        (this.options.style.widget ? "" : NAMESPACE + "-icon"),
                    title: close,
                    "aria-label": close,
                }).prepend(
                    $("<span />", {
                        class: "ui-icon ui-icon-close",
                        html: "&times;",
                    })
                );
            }

            // Create button and setup attributes
            elements.button
                .appendTo(elements.titlebar || tooltip)
                .attr("role", "button")
                .click(function (event) {
                    if (!tooltip.hasClass(CLASS_DISABLED)) {
                        self.hide(event);
                    }
                    return FALSE;
                });
        };

        PROTOTYPE._updateButton = function (button) {
            // Make sure tooltip is rendered and if not, return
            if (!this.rendered) {
                return FALSE;
            }

            var elem = this.elements.button;
            if (button) {
                this._createButton();
            } else {
                elem.remove();
            }
        }; // Widget class creator
        function createWidgetClass(cls) {
            return WIDGET.concat("").join(cls ? "-" + cls + " " : " ");
        }

        // Widget class setter method
        PROTOTYPE._setWidget = function () {
            var on = this.options.style.widget,
                elements = this.elements,
                tooltip = elements.tooltip,
                disabled = tooltip.hasClass(CLASS_DISABLED);

            tooltip.removeClass(CLASS_DISABLED);
            CLASS_DISABLED = on ? "ui-state-disabled" : "qtip-disabled";
            tooltip.toggleClass(CLASS_DISABLED, disabled);

            tooltip
                .toggleClass("ui-helper-reset " + createWidgetClass(), on)
                .toggleClass(CLASS_DEFAULT, this.options.style.def && !on);

            if (elements.content) {
                elements.content.toggleClass(createWidgetClass("content"), on);
            }
            if (elements.titlebar) {
                elements.titlebar.toggleClass(createWidgetClass("header"), on);
            }
            if (elements.button) {
                elements.button.toggleClass(NAMESPACE + "-icon", !on);
            }
        };
        function delay(callback, duration) {
            // If tooltip has displayed, start hide timer
            if (duration > 0) {
                return setTimeout($.proxy(callback, this), duration);
            } else {
                callback.call(this);
            }
        }

        function showMethod(event) {
            if (this.tooltip.hasClass(CLASS_DISABLED)) {
                return;
            }

            // Clear hide timers
            clearTimeout(this.timers.show);
            clearTimeout(this.timers.hide);

            // Start show timer
            this.timers.show = delay.call(
                this,
                function () {
                    this.toggle(TRUE, event);
                },
                this.options.show.delay
            );
        }

        function hideMethod(event) {
            if (this.tooltip.hasClass(CLASS_DISABLED) || this.destroyed) {
                return;
            }

            // Check if new target was actually the tooltip element
            var relatedTarget = $(event.relatedTarget),
                ontoTooltip =
                    relatedTarget.closest(SELECTOR)[0] === this.tooltip[0],
                ontoTarget = relatedTarget[0] === this.options.show.target[0];

            // Clear timers and stop animation queue
            clearTimeout(this.timers.show);
            clearTimeout(this.timers.hide);

            // Prevent hiding if tooltip is fixed and event target is the tooltip.
            // Or if mouse positioning is enabled and cursor momentarily overlaps
            if (
                (this !== relatedTarget[0] &&
                    this.options.position.target === "mouse" &&
                    ontoTooltip) ||
                (this.options.hide.fixed &&
                    /mouse(out|leave|move)/.test(event.type) &&
                    (ontoTooltip || ontoTarget))
            ) {
                try {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                } catch (e) {}

                return;
            }

            // If tooltip has displayed, start hide timer
            this.timers.hide = delay.call(
                this,
                function () {
                    this.toggle(FALSE, event);
                },
                this.options.hide.delay,
                this
            );
        }

        function inactiveMethod(event) {
            if (
                this.tooltip.hasClass(CLASS_DISABLED) ||
                !this.options.hide.inactive
            ) {
                return;
            }

            // Clear timer
            clearTimeout(this.timers.inactive);

            this.timers.inactive = delay.call(
                this,
                function () {
                    this.hide(event);
                },
                this.options.hide.inactive
            );
        }

        function repositionMethod(event) {
            if (this.rendered && this.tooltip[0].offsetWidth > 0) {
                this.reposition(event);
            }
        }

        // Store mouse coordinates
        PROTOTYPE._storeMouse = function (event) {
            (this.mouse = $.event.fix(event)).type = "mousemove";
            return this;
        };

        // Bind events
        PROTOTYPE._bind = function (targets, events, method, suffix, context) {
            if (!targets || !method || !events.length) {
                return;
            }
            var ns = "." + this._id + (suffix ? "-" + suffix : "");
            $(targets).bind(
                (events.split ? events : events.join(ns + " ")) + ns,
                $.proxy(method, context || this)
            );
            return this;
        };
        PROTOTYPE._unbind = function (targets, suffix) {
            targets &&
                $(targets).unbind(
                    "." + this._id + (suffix ? "-" + suffix : "")
                );
            return this;
        };

        // Global delegation helper
        function delegate(selector, events, method) {
            $(document.body).delegate(
                selector,
                (events.split ? events : events.join("." + NAMESPACE + " ")) +
                    "." +
                    NAMESPACE,
                function () {
                    var api = QTIP.api[$.attr(this, ATTR_ID)];
                    api && !api.disabled && method.apply(api, arguments);
                }
            );
        }
        // Event trigger
        PROTOTYPE._trigger = function (type, args, event) {
            var callback = $.Event("tooltip" + type);
            callback.originalEvent =
                (event && $.extend({}, event)) || this.cache.event || NULL;

            this.triggering = type;
            this.tooltip.trigger(callback, [this].concat(args || []));
            this.triggering = FALSE;

            return !callback.isDefaultPrevented();
        };

        PROTOTYPE._bindEvents = function (
            showEvents,
            hideEvents,
            showTargets,
            hideTargets,
            showMethod,
            hideMethod
        ) {
            // Get tasrgets that lye within both
            var similarTargets = showTargets
                    .filter(hideTargets)
                    .add(hideTargets.filter(showTargets)),
                toggleEvents = [];

            // If hide and show targets are the same...
            if (similarTargets.length) {
                // Filter identical show/hide events
                $.each(hideEvents, function (i, type) {
                    var showIndex = $.inArray(type, showEvents);

                    // Both events are identical, remove from both hide and show events
                    // and append to toggleEvents
                    showIndex > -1 &&
                        toggleEvents.push(showEvents.splice(showIndex, 1)[0]);
                });

                // Toggle events are special case of identical show/hide events, which happen in sequence
                if (toggleEvents.length) {
                    // Bind toggle events to the similar targets
                    this._bind(similarTargets, toggleEvents, function (event) {
                        var state = this.rendered
                            ? this.tooltip[0].offsetWidth > 0
                            : false;
                        (state ? hideMethod : showMethod).call(this, event);
                    });

                    // Remove the similar targets from the regular show/hide bindings
                    showTargets = showTargets.not(similarTargets);
                    hideTargets = hideTargets.not(similarTargets);
                }
            }

            // Apply show/hide/toggle events
            this._bind(showTargets, showEvents, showMethod);
            this._bind(hideTargets, hideEvents, hideMethod);
        };

        PROTOTYPE._assignInitialEvents = function (event) {
            var options = this.options,
                showTarget = options.show.target,
                hideTarget = options.hide.target,
                showEvents = options.show.event
                    ? $.trim("" + options.show.event).split(" ")
                    : [],
                hideEvents = options.hide.event
                    ? $.trim("" + options.hide.event).split(" ")
                    : [];

            // Catch remove/removeqtip events on target element to destroy redundant tooltips
            this._bind(
                this.elements.target,
                ["remove", "removeqtip"],
                function (event) {
                    this.destroy(true);
                },
                "destroy"
            );

            /*
             * Make sure hoverIntent functions properly by using mouseleave as a hide event if
             * mouseenter/mouseout is used for show.event, even if it isn't in the users options.
             */
            if (
                /mouse(over|enter)/i.test(options.show.event) &&
                !/mouse(out|leave)/i.test(options.hide.event)
            ) {
                hideEvents.push("mouseleave");
            }

            /*
             * Also make sure initial mouse targetting works correctly by caching mousemove coords
             * on show targets before the tooltip has rendered. Also set onTarget when triggered to
             * keep mouse tracking working.
             */
            this._bind(showTarget, "mousemove", function (event) {
                this._storeMouse(event);
                this.cache.onTarget = TRUE;
            });

            // Define hoverIntent function
            function hoverIntent(event) {
                // Only continue if tooltip isn't disabled
                if (this.disabled || this.destroyed) {
                    return FALSE;
                }

                // Cache the event data
                this.cache.event = event && $.event.fix(event);
                this.cache.target = event && $(event.target);

                // Start the event sequence
                clearTimeout(this.timers.show);
                this.timers.show = delay.call(
                    this,
                    function () {
                        this.render(
                            typeof event === "object" || options.show.ready
                        );
                    },
                    options.prerender ? 0 : options.show.delay
                );
            }

            // Filter and bind events
            this._bindEvents(
                showEvents,
                hideEvents,
                showTarget,
                hideTarget,
                hoverIntent,
                function () {
                    if (!this.timers) {
                        return FALSE;
                    }
                    clearTimeout(this.timers.show);
                }
            );

            // Prerendering is enabled, create tooltip now
            if (options.show.ready || options.prerender) {
                hoverIntent.call(this, event);
            }
        };

        // Event assignment method
        PROTOTYPE._assignEvents = function () {
            var self = this,
                options = this.options,
                posOptions = options.position,
                tooltip = this.tooltip,
                showTarget = options.show.target,
                hideTarget = options.hide.target,
                containerTarget = posOptions.container,
                viewportTarget = posOptions.viewport,
                documentTarget = $(document),
                bodyTarget = $(document.body),
                windowTarget = $(window),
                showEvents = options.show.event
                    ? $.trim("" + options.show.event).split(" ")
                    : [],
                hideEvents = options.hide.event
                    ? $.trim("" + options.hide.event).split(" ")
                    : [];

            // Assign passed event callbacks
            $.each(options.events, function (name, callback) {
                self._bind(
                    tooltip,
                    name === "toggle"
                        ? ["tooltipshow", "tooltiphide"]
                        : ["tooltip" + name],
                    callback,
                    null,
                    tooltip
                );
            });

            // Hide tooltips when leaving current window/frame (but not select/option elements)
            if (
                /mouse(out|leave)/i.test(options.hide.event) &&
                options.hide.leave === "window"
            ) {
                this._bind(
                    documentTarget,
                    ["mouseout", "blur"],
                    function (event) {
                        if (
                            !/select|option/.test(event.target.nodeName) &&
                            !event.relatedTarget
                        ) {
                            this.hide(event);
                        }
                    }
                );
            }

            // Enable hide.fixed by adding appropriate class
            if (options.hide.fixed) {
                hideTarget = hideTarget.add(tooltip.addClass(CLASS_FIXED));
            } else if (/mouse(over|enter)/i.test(options.show.event)) {

            /*
             * Make sure hoverIntent functions properly by using mouseleave to clear show timer if
             * mouseenter/mouseout is used for show.event, even if it isn't in the users options.
             */
                this._bind(hideTarget, "mouseleave", function () {
                    clearTimeout(this.timers.show);
                });
            }

            // Hide tooltip on document mousedown if unfocus events are enabled
            if (("" + options.hide.event).indexOf("unfocus") > -1) {
                this._bind(
                    containerTarget.closest("html"),
                    ["mousedown", "touchstart"],
                    function (event) {
                        var elem = $(event.target),
                            enabled =
                                this.rendered &&
                                !this.tooltip.hasClass(CLASS_DISABLED) &&
                                this.tooltip[0].offsetWidth > 0,
                            isAncestor =
                                elem.parents(SELECTOR).filter(this.tooltip[0])
                                    .length > 0;

                        if (
                            elem[0] !== this.target[0] &&
                            elem[0] !== this.tooltip[0] &&
                            !isAncestor &&
                            !this.target.has(elem[0]).length &&
                            enabled
                        ) {
                            this.hide(event);
                        }
                    }
                );
            }

            // Check if the tooltip hides when inactive
            if ("number" === typeof options.hide.inactive) {
                // Bind inactive method to show target(s) as a custom event
                this._bind(
                    showTarget,
                    "qtip-" + this.id + "-inactive",
                    inactiveMethod,
                    "inactive"
                );

                // Define events which reset the 'inactive' event handler
                this._bind(
                    hideTarget.add(tooltip),
                    QTIP.inactiveEvents,
                    inactiveMethod
                );
            }

            // Filter and bind events
            this._bindEvents(
                showEvents,
                hideEvents,
                showTarget,
                hideTarget,
                showMethod,
                hideMethod
            );

            // Mouse movement bindings
            this._bind(showTarget.add(tooltip), "mousemove", function (event) {
                // Check if the tooltip hides when mouse is moved a certain distance
                if ("number" === typeof options.hide.distance) {
                    var origin = this.cache.origin || {},
                        limit = this.options.hide.distance,
                        abs = Math.abs;

                    // Check if the movement has gone beyond the limit, and hide it if so
                    if (
                        abs(event.pageX - origin.pageX) >= limit ||
                        abs(event.pageY - origin.pageY) >= limit
                    ) {
                        this.hide(event);
                    }
                }

                // Cache mousemove coords on show targets
                this._storeMouse(event);
            });

            // Mouse positioning events
            if (posOptions.target === "mouse") {
                // If mouse adjustment is on...
                if (posOptions.adjust.mouse) {
                    // Apply a mouseleave event so we don't get problems with overlapping
                    if (options.hide.event) {
                        // Track if we're on the target or not
                        this._bind(
                            showTarget,
                            ["mouseenter", "mouseleave"],
                            function (event) {
                                if (!this.cache) {
                                    return FALSE;
                                }
                                this.cache.onTarget =
                                    event.type === "mouseenter";
                            }
                        );
                    }

                    // Update tooltip position on mousemove
                    this._bind(documentTarget, "mousemove", function (event) {
                        // Update the tooltip position only if the tooltip is visible and adjustment is enabled
                        if (
                            this.rendered &&
                            this.cache.onTarget &&
                            !this.tooltip.hasClass(CLASS_DISABLED) &&
                            this.tooltip[0].offsetWidth > 0
                        ) {
                            this.reposition(event);
                        }
                    });
                }
            }

            // Adjust positions of the tooltip on window resize if enabled
            if (posOptions.adjust.resize || viewportTarget.length) {
                this._bind(
                    $.event.special.resize ? viewportTarget : windowTarget,
                    "resize",
                    repositionMethod
                );
            }

            // Adjust tooltip position on scroll of the window or viewport element if present
            if (posOptions.adjust.scroll) {
                this._bind(
                    windowTarget.add(posOptions.container),
                    "scroll",
                    repositionMethod
                );
            }
        };

        // Un-assignment method
        PROTOTYPE._unassignEvents = function () {
            var options = this.options,
                showTargets = options.show.target,
                hideTargets = options.hide.target,
                targets = $.grep(
                    [
                        this.elements.target[0],
                        this.rendered && this.tooltip[0],
                        options.position.container[0],
                        options.position.viewport[0],
                        options.position.container.closest("html")[0], // unfocus
                        window,
                        document,
                    ],
                    function (i) {
                        return typeof i === "object";
                    }
                );

            // Add show and hide targets if they're valid
            if (showTargets && showTargets.toArray) {
                targets = targets.concat(showTargets.toArray());
            }
            if (hideTargets && hideTargets.toArray) {
                targets = targets.concat(hideTargets.toArray());
            }

            // Unbind the events
            this._unbind(targets)
                ._unbind(targets, "destroy")
                ._unbind(targets, "inactive");
        };

        // Apply common event handlers using delegate (avoids excessive .bind calls!)
        $(function () {
            delegate(SELECTOR, ["mouseenter", "mouseleave"], function (event) {
                var state = event.type === "mouseenter",
                    tooltip = $(event.currentTarget),
                    target = $(event.relatedTarget || event.target),
                    options = this.options;

                // On mouseenter...
                if (state) {
                    // Focus the tooltip on mouseenter (z-index stacking)
                    this.focus(event);

                    // Clear hide timer on tooltip hover to prevent it from closing
                    tooltip.hasClass(CLASS_FIXED) &&
                        !tooltip.hasClass(CLASS_DISABLED) &&
                        clearTimeout(this.timers.hide);
                }

                // On mouseleave...
                else {
                    // When mouse tracking is enabled, hide when we leave the tooltip and not onto the show target (if a hide event is set)
                    if (
                        options.position.target === "mouse" &&
                        options.position.adjust.mouse &&
                        options.hide.event &&
                        options.show.target &&
                        !target.closest(options.show.target[0]).length
                    ) {
                        this.hide(event);
                    }
                }

                // Add hover class
                tooltip.toggleClass(CLASS_HOVER, state);
            });

            // Define events which reset the 'inactive' event handler
            delegate("[" + ATTR_ID + "]", INACTIVE_EVENTS, inactiveMethod);
        }); // Initialization method
        function init(elem, id, opts) {
            var obj,
                posOptions,
                attr,
                config,
                title,
                // Setup element references
                docBody = $(document.body),
                // Use document body instead of document element if needed
                newTarget = elem[0] === document ? docBody : elem,
                // Grab metadata from element if plugin is present
                metadata = elem.metadata ? elem.metadata(opts.metadata) : NULL,
                // If metadata type if HTML5, grab 'name' from the object instead, or use the regular data object otherwise
                metadata5 =
                    opts.metadata.type === "html5" && metadata
                        ? metadata[opts.metadata.name]
                        : NULL,
                // Grab data from metadata.name (or data-qtipopts as fallback) using .data() method,
                html5 = elem.data(opts.metadata.name || "qtipopts");

            // If we don't get an object returned attempt to parse it manualyl without parseJSON
            try {
                html5 = typeof html5 === "string" ? $.parseJSON(html5) : html5;
            } catch (e) {}

            // Merge in and sanitize metadata
            config = $.extend(
                TRUE,
                {},
                QTIP.defaults,
                opts,
                typeof html5 === "object" ? sanitizeOptions(html5) : NULL,
                sanitizeOptions(metadata5 || metadata)
            );

            // Re-grab our positioning options now we've merged our metadata and set id to passed value
            posOptions = config.position;
            config.id = id;

            // Setup missing content if none is detected
            if ("boolean" === typeof config.content.text) {
                attr = elem.attr(config.content.attr);

                // Grab from supplied attribute if available
                if (config.content.attr !== FALSE && attr) {
                    config.content.text = attr;
                }

                // No valid content was found, abort render
                else {
                    return FALSE;
                }
            }

            // Setup target options
            if (!posOptions.container.length) {
                posOptions.container = docBody;
            }
            if (posOptions.target === FALSE) {
                posOptions.target = newTarget;
            }
            if (config.show.target === FALSE) {
                config.show.target = newTarget;
            }
            if (config.show.solo === TRUE) {
                config.show.solo = posOptions.container.closest("body");
            }
            if (config.hide.target === FALSE) {
                config.hide.target = newTarget;
            }
            if (config.position.viewport === TRUE) {
                config.position.viewport = posOptions.container;
            }

            // Ensure we only use a single container
            posOptions.container = posOptions.container.eq(0);

            // Convert position corner values into x and y strings
            posOptions.at = new CORNER(posOptions.corner.at, TRUE);
            posOptions.my = new CORNER(posOptions.corner.my);

            // Destroy previous tooltip if overwrite is enabled, or skip element if not
            if (elem.data(NAMESPACE)) {
                if (config.overwrite) {
                    elem.qtip("destroy", true);
                } else if (config.overwrite === FALSE) {
                    return FALSE;
                }
            }

            // Add has-qtip attribute
            elem.attr(ATTR_HAS, id);

            // Remove title attribute and store it if present
            if (config.suppress && (title = elem.attr("title"))) {
                // Final attr call fixes event delegatiom and IE default tooltip showing problem
                elem.removeAttr("title")
                    .attr(oldtitle, title)
                    .attr("title", "");
            }

            // Initialize the tooltip and add API reference
            obj = new QTip(elem, config, id, !!attr);
            elem.data(NAMESPACE, obj);

            return obj;
        }

        // jQuery $.fn extension method
        QTIP = $.fn.qtip = function (options, notation, newValue) {
            var command = ("" + options).toLowerCase(), // Parse command
                returned = NULL,
                args = $.makeArray(arguments).slice(1),
                event = args[args.length - 1],
                opts = this[0] ? $.data(this[0], NAMESPACE) : NULL;

            // Check for API request
            if ((!arguments.length && opts) || command === "api") {
                return opts;
            }

            // Execute API command if present
            else if ("string" === typeof options) {
                this.each(function () {
                    var api = $.data(this, NAMESPACE);
                    if (!api) {
                        return TRUE;
                    }

                    // Cache the event if possible
                    if (event && event.timeStamp) {
                        api.cache.event = event;
                    }

                    // Check for specific API commands
                    if (
                        notation &&
                        (command === "option" || command === "options")
                    ) {
                        if (
                            newValue !== undefined ||
                            $.isPlainObject(notation)
                        ) {
                            api.set(notation, newValue);
                        } else {
                            returned = api.get(notation);
                            return FALSE;
                        }
                    }

                    // Execute API command
                    else if (api[command]) {
                        api[command].apply(api, args);
                    }
                });

                return returned !== NULL ? returned : this;
            }

            // No API commands. validate provided options and setup qTips
            else if ("object" === typeof options || !arguments.length) {
                // Sanitize options first
                opts = sanitizeOptions($.extend(TRUE, {}, options));

                return this.each(function (i) {
                    var api, id;

                    // Find next available ID, or use custom ID if provided
                    id = $.isArray(opts.id) ? opts.id[i] : opts.id;
                    id =
                        !id || id === FALSE || id.length < 1 || QTIP.api[id]
                            ? QTIP.nextid++
                            : id;

                    // Initialize the qTip and re-grab newly sanitized options
                    api = init($(this), id, opts);
                    if (api === FALSE) {
                        return TRUE;
                    } else {
                        QTIP.api[id] = api;
                    }

                    // Initialize plugins
                    $.each(PLUGINS, function () {
                        if (this.initialize === "initialize") {
                            this(api);
                        }
                    });

                    // Assign initial pre-render events
                    api._assignInitialEvents(event);
                });
            }
        };

        // Expose class
        $.qtip = QTip;

        // Populated in render method
        QTIP.api = {};
        $.each(
            {
                /* Allow other plugins to successfully retrieve the title of an element with a qTip applied */
                attr: function (attr, val) {
                    if (this.length) {
                        var self = this[0],
                            title = "title",
                            api = $.data(self, "qtip");

                        if (
                            attr === title &&
                            api &&
                            "object" === typeof api &&
                            api.options.suppress
                        ) {
                            if (arguments.length < 2) {
                                return $.attr(self, oldtitle);
                            }

                            // If qTip is rendered and title was originally used as content, update it
                            if (
                                api &&
                                api.options.content.attr === title &&
                                api.cache.attr
                            ) {
                                api.set("content.text", val);
                            }

                            // Use the regular attr method to set, then cache the result
                            return this.attr(oldtitle, val);
                        }
                    }

                    return $.fn["attr" + replaceSuffix].apply(this, arguments);
                },

                /* Allow clone to correctly retrieve cached title attributes */
                clone: function (keepData) {
                    var titles = $([]),
                        title = "title",
                        // Clone our element using the real clone method
                        elems = $.fn["clone" + replaceSuffix].apply(
                            this,
                            arguments
                        );

                    // Grab all elements with an oldtitle set, and change it to regular title attribute, if keepData is false
                    if (!keepData) {
                        elems
                            .filter("[" + oldtitle + "]")
                            .attr("title", function () {
                                return $.attr(this, oldtitle);
                            })
                            .removeAttr(oldtitle);
                    }

                    return elems;
                },
            },
            function (name, func) {
                if (!func || $.fn[name + replaceSuffix]) {
                    return TRUE;
                }

                var old = ($.fn[name + replaceSuffix] = $.fn[name]);
                $.fn[name] = function () {
                    return (
                        func.apply(this, arguments) ||
                        old.apply(this, arguments)
                    );
                };
            }
        );

        /* Fire off 'removeqtip' handler in $.cleanData if jQuery UI not present (it already does similar).
         * This snippet is taken directly from jQuery UI source code found here:
         *     http://code.jquery.com/ui/jquery-ui-git.js
         */
        if (!$.ui) {
            $["cleanData" + replaceSuffix] = $.cleanData;
            $.cleanData = function (elems) {
                for (var i = 0, elem; (elem = $(elems[i])).length; i++) {
                    if (elem.attr(ATTR_HAS)) {
                        try {
                            elem.triggerHandler("removeqtip");
                        } catch (e) {}
                    }
                }
                $["cleanData" + replaceSuffix].apply(this, arguments);
            };
        } // qTip version
        QTIP.version = "2.2.1";

        // Base ID for all qTips
        QTIP.nextid = 0;

        // Inactive events array
        QTIP.inactiveEvents = INACTIVE_EVENTS;

        // Base z-index for all qTips
        QTIP.zindex = 15000;

        // Define configuration defaults
        QTIP.defaults = {
            prerender: FALSE,
            id: FALSE,
            overwrite: TRUE,
            suppress: TRUE,
            content: {
                text: TRUE,
                attr: "title",
                title: FALSE,
                button: FALSE,
            },
            position: {
                my: "top left",
                at: "bottom right",
                target: FALSE,
                container: FALSE,
                viewport: FALSE,
                adjust: {
                    x: 0,
                    y: 0,
                    mouse: TRUE,
                    scroll: TRUE,
                    resize: TRUE,
                    method: "flipinvert flipinvert",
                },
                effect: function (api, pos, viewport) {
                    $(this).animate(pos, {
                        duration: 200,
                        queue: FALSE,
                    });
                },
            },
            show: {
                target: FALSE,
                event: "mouseenter",
                effect: TRUE,
                delay: 90,
                solo: FALSE,
                ready: FALSE,
                autofocus: FALSE,
            },
            hide: {
                target: FALSE,
                event: "mouseleave",
                effect: TRUE,
                delay: 0,
                fixed: FALSE,
                inactive: FALSE,
                leave: "window",
                distance: FALSE,
            },
            style: {
                classes: "",
                widget: FALSE,
                width: FALSE,
                height: FALSE,
                def: TRUE,
            },
            events: {
                render: NULL,
                move: NULL,
                show: NULL,
                hide: NULL,
                toggle: NULL,
                visible: NULL,
                hidden: NULL,
                focus: NULL,
                blur: NULL,
            },
        };
        var TIP,
            // .bind()/.on() namespace
            TIPNS = ".qtip-tip",
            // Common CSS strings
            MARGIN = "margin",
            BORDER = "border",
            COLOR = "color",
            BG_COLOR = "background-color",
            TRANSPARENT = "transparent",
            IMPORTANT = " !important",
            // Check if the browser supports <canvas/> elements
            HASCANVAS = !!document.createElement("canvas").getContext,
            // Invalid colour values used in parseColours()
            INVALID = /rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i;

        // Camel-case method, taken from jQuery source
        // http://code.jquery.com/jquery-1.8.0.js
        function camel(s) {
            return s.charAt(0).toUpperCase() + s.slice(1);
        }

        /*
         * Modified from Modernizr's testPropsAll()
         * http://modernizr.com/downloads/modernizr-latest.js
         */
        var cssProps = {},
            cssPrefixes = ["Webkit", "O", "Moz", "ms"];
        function vendorCss(elem, prop) {
            var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
                props = (
                    prop +
                    " " +
                    cssPrefixes.join(ucProp + " ") +
                    ucProp
                ).split(" "),
                cur,
                val,
                i = 0;

            // If the property has already been mapped...
            if (cssProps[prop]) {
                return elem.css(cssProps[prop]);
            }

            while ((cur = props[i++])) {
                if ((val = elem.css(cur)) !== undefined) {
                    return (cssProps[prop] = cur), val;
                }
            }
        }

        // Parse a given elements CSS property into an int
        function intCss(elem, prop) {
            return Math.ceil(parseFloat(vendorCss(elem, prop)));
        }

        // VML creation (for IE only)
        if (!HASCANVAS) {
            var createVML = function (tag, props, style) {
                return (
                    "<qtipvml:" +
                    tag +
                    ' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" ' +
                    (props || "") +
                    ' style="behavior: url(#default#VML); ' +
                    (style || "") +
                    '" />'
                );
            };
        }

        // Canvas only definitions
        else {
            var PIXEL_RATIO = window.devicePixelRatio || 1,
                BACKING_STORE_RATIO = (function () {
                    var context = document
                        .createElement("canvas")
                        .getContext("2d");
                    return (
                        context.backingStorePixelRatio ||
                        context.webkitBackingStorePixelRatio ||
                        context.mozBackingStorePixelRatio ||
                        context.msBackingStorePixelRatio ||
                        context.oBackingStorePixelRatio ||
                        1
                    );
                })(),
                SCALE = PIXEL_RATIO / BACKING_STORE_RATIO;
        }

        function Tip(qtip, options) {
            this._ns = "tip";
            this.options = options;
            this.offset = options.offset;
            this.size = [options.width, options.height];

            // Initialize
            this.init((this.qtip = qtip));
        }

        $.extend(Tip.prototype, {
            init: function (qtip) {
                var context, tip;

                // Create tip element and prepend to the tooltip
                tip =
                    this.element =
                    qtip.elements.tip =
                        $("<div />", { class: NAMESPACE + "-tip" }).prependTo(
                            qtip.tooltip
                        );

                // Create tip drawing element(s)
                if (HASCANVAS) {
                    // save() as soon as we create the canvas element so FF2 doesn't bork on our first restore()!
                    context = $("<canvas />")
                        .appendTo(this.element)[0]
                        .getContext("2d");

                    // Setup constant parameters
                    context.lineJoin = "miter";
                    context.miterLimit = 100000;
                    context.save();
                } else {
                    context = createVML(
                        "shape",
                        'coordorigin="0,0"',
                        "position:absolute;"
                    );
                    this.element.html(context + context);

                    // Prevent mousing down on the tip since it causes problems with .live() handling in IE due to VML
                    qtip._bind(
                        $("*", tip).add(tip),
                        ["click", "mousedown"],
                        function (event) {
                            event.stopPropagation();
                        },
                        this._ns
                    );
                }

                // Bind update events
                qtip._bind(
                    qtip.tooltip,
                    "tooltipmove",
                    this.reposition,
                    this._ns,
                    this
                );

                // Create it
                this.create();
            },

            _swapDimensions: function () {
                this.size[0] = this.options.height;
                this.size[1] = this.options.width;
            },
            _resetDimensions: function () {
                this.size[0] = this.options.width;
                this.size[1] = this.options.height;
            },

            _useTitle: function (corner) {
                var titlebar = this.qtip.elements.titlebar;
                return (
                    titlebar &&
                    (corner.y === TOP ||
                        (corner.y === CENTER &&
                            this.element.position().top +
                                this.size[1] / 2 +
                                this.options.offset <
                                titlebar.outerHeight(TRUE)))
                );
            },

            _parseCorner: function (corner) {
                var my = this.qtip.options.position.my;

                // Detect corner and mimic properties
                if (corner === FALSE || my === FALSE) {
                    corner = FALSE;
                } else if (corner === TRUE) {
                    corner = new CORNER(my.string());
                } else if (!corner.string) {
                    corner = new CORNER(corner);
                    corner.fixed = TRUE;
                }

                return corner;
            },

            _parseWidth: function (corner, side, use) {
                var elements = this.qtip.elements,
                    prop = BORDER + camel(side) + "Width";

                return (
                    (use
                        ? intCss(use, prop)
                        : intCss(elements.content, prop) ||
                          intCss(
                              (this._useTitle(corner) && elements.titlebar) ||
                                  elements.content,
                              prop
                          ) ||
                          intCss(elements.tooltip, prop)) || 0
                );
            },

            _parseRadius: function (corner) {
                var elements = this.qtip.elements,
                    prop =
                        BORDER + camel(corner.y) + camel(corner.x) + "Radius";

                return BROWSER.ie < 9
                    ? 0
                    : intCss(
                          (this._useTitle(corner) && elements.titlebar) ||
                              elements.content,
                          prop
                      ) ||
                          intCss(elements.tooltip, prop) ||
                          0;
            },

            _invalidColour: function (elem, prop, compare) {
                var val = elem.css(prop);
                return !val ||
                    (compare && val === elem.css(compare)) ||
                    INVALID.test(val)
                    ? FALSE
                    : val;
            },

            _parseColours: function (corner) {
                var elements = this.qtip.elements,
                    tip = this.element.css("cssText", ""),
                    borderSide =
                        BORDER +
                        camel(corner[corner.precedance]) +
                        camel(COLOR),
                    colorElem =
                        (this._useTitle(corner) && elements.titlebar) ||
                        elements.content,
                    css = this._invalidColour,
                    color = [];

                // Attempt to detect the background colour from various elements, left-to-right precedance
                color[0] =
                    css(tip, BG_COLOR) ||
                    css(colorElem, BG_COLOR) ||
                    css(elements.content, BG_COLOR) ||
                    css(elements.tooltip, BG_COLOR) ||
                    tip.css(BG_COLOR);

                // Attempt to detect the correct border side colour from various elements, left-to-right precedance
                color[1] =
                    css(tip, borderSide, COLOR) ||
                    css(colorElem, borderSide, COLOR) ||
                    css(elements.content, borderSide, COLOR) ||
                    css(elements.tooltip, borderSide, COLOR) ||
                    elements.tooltip.css(borderSide);

                // Reset background and border colours
                $("*", tip)
                    .add(tip)
                    .css(
                        "cssText",
                        BG_COLOR +
                            ":" +
                            TRANSPARENT +
                            IMPORTANT +
                            ";" +
                            BORDER +
                            ":0" +
                            IMPORTANT +
                            ";"
                    );

                return color;
            },

            _calculateSize: function (corner) {
                var y = corner.precedance === Y,
                    width = this.options["width"],
                    height = this.options["height"],
                    isCenter = corner.abbrev() === "c",
                    base = (y ? width : height) * (isCenter ? 0.5 : 1),
                    pow = Math.pow,
                    round = Math.round,
                    bigHyp,
                    ratio,
                    result,
                    smallHyp = Math.sqrt(pow(base, 2) + pow(height, 2)),
                    hyp = [
                        (this.border / base) * smallHyp,
                        (this.border / height) * smallHyp,
                    ];

                hyp[2] = Math.sqrt(pow(hyp[0], 2) - pow(this.border, 2));
                hyp[3] = Math.sqrt(pow(hyp[1], 2) - pow(this.border, 2));

                bigHyp = smallHyp + hyp[2] + hyp[3] + (isCenter ? 0 : hyp[0]);
                ratio = bigHyp / smallHyp;

                result = [round(ratio * width), round(ratio * height)];
                return y ? result : result.reverse();
            },

            // Tip coordinates calculator
            _calculateTip: function (corner, size, scale) {
                scale = scale || 1;
                size = size || this.size;

                var width = size[0] * scale,
                    height = size[1] * scale,
                    width2 = Math.ceil(width / 2),
                    height2 = Math.ceil(height / 2),
                    // Define tip coordinates in terms of height and width values
                    tips = {
                        br: [0, 0, width, height, width, 0],
                        bl: [0, 0, width, 0, 0, height],
                        tr: [0, height, width, 0, width, height],
                        tl: [0, 0, 0, height, width, height],
                        tc: [0, height, width2, 0, width, height],
                        bc: [0, 0, width, 0, width2, height],
                        rc: [0, 0, width, height2, 0, height],
                        lc: [width, 0, width, height, 0, height2],
                    };

                // Set common side shapes
                tips.lt = tips.br;
                tips.rt = tips.bl;
                tips.lb = tips.tr;
                tips.rb = tips.tl;

                return tips[corner.abbrev()];
            },

            // Tip coordinates drawer (canvas)
            _drawCoords: function (context, coords) {
                context.beginPath();
                context.moveTo(coords[0], coords[1]);
                context.lineTo(coords[2], coords[3]);
                context.lineTo(coords[4], coords[5]);
                context.closePath();
            },

            create: function () {
                // Determine tip corner
                var c = (this.corner =
                    (HASCANVAS || BROWSER.ie) &&
                    this._parseCorner(this.options.corner));

                // If we have a tip corner...
                if (
                    (this.enabled =
                        !!this.corner && this.corner.abbrev() !== "c")
                ) {
                    // Cache it
                    this.qtip.cache.corner = c.clone();

                    // Create it
                    this.update();
                }

                // Toggle tip element
                this.element.toggle(this.enabled);

                return this.corner;
            },

            update: function (corner, position) {
                if (!this.enabled) {
                    return this;
                }

                var elements = this.qtip.elements,
                    tip = this.element,
                    inner = tip.children(),
                    options = this.options,
                    curSize = this.size,
                    mimic = options.mimic,
                    round = Math.round,
                    color,
                    precedance,
                    context,
                    coords,
                    bigCoords,
                    translate,
                    newSize,
                    border,
                    BACKING_STORE_RATIO;

                // Re-determine tip if not already set
                if (!corner) {
                    corner = this.qtip.cache.corner || this.corner;
                }

                // Use corner property if we detect an invalid mimic value
                if (mimic === FALSE) {
                    mimic = corner;
                }

                // Otherwise inherit mimic properties from the corner object as necessary
                else {
                    mimic = new CORNER(mimic);
                    mimic.precedance = corner.precedance;

                    if (mimic.x === "inherit") {
                        mimic.x = corner.x;
                    } else if (mimic.y === "inherit") {
                        mimic.y = corner.y;
                    } else if (mimic.x === mimic.y) {
                        mimic[corner.precedance] = corner[corner.precedance];
                    }
                }
                precedance = mimic.precedance;

                // Ensure the tip width.height are relative to the tip position
                if (corner.precedance === X) {
                    this._swapDimensions();
                } else {
                    this._resetDimensions();
                }

                // Update our colours
                color = this.color = this._parseColours(corner);

                // Detect border width, taking into account colours
                if (color[1] !== TRANSPARENT) {
                    // Grab border width
                    border = this.border = this._parseWidth(
                        corner,
                        corner[corner.precedance]
                    );

                    // If border width isn't zero, use border color as fill if it's not invalid (1.0 style tips)
                    if (
                        options.border &&
                        border < 1 &&
                        !INVALID.test(color[1])
                    ) {
                        color[0] = color[1];
                    }

                    // Set border width (use detected border width if options.border is true)
                    this.border = border =
                        options.border !== TRUE ? options.border : border;
                }

                // Border colour was invalid, set border to zero
                else {
                    this.border = border = 0;
                }

                // Determine tip size
                newSize = this.size = this._calculateSize(corner);
                tip.css({
                    width: newSize[0],
                    height: newSize[1],
                    lineHeight: newSize[1] + "px",
                });

                // Calculate tip translation
                if (corner.precedance === Y) {
                    translate = [
                        round(
                            mimic.x === LEFT
                                ? border
                                : mimic.x === RIGHT
                                ? newSize[0] - curSize[0] - border
                                : (newSize[0] - curSize[0]) / 2
                        ),
                        round(mimic.y === TOP ? newSize[1] - curSize[1] : 0),
                    ];
                } else {
                    translate = [
                        round(mimic.x === LEFT ? newSize[0] - curSize[0] : 0),
                        round(
                            mimic.y === TOP
                                ? border
                                : mimic.y === BOTTOM
                                ? newSize[1] - curSize[1] - border
                                : (newSize[1] - curSize[1]) / 2
                        ),
                    ];
                }

                // Canvas drawing implementation
                if (HASCANVAS) {
                    // Grab canvas context and clear/save it
                    context = inner[0].getContext("2d");
                    context.restore();
                    context.save();
                    context.clearRect(0, 0, 6000, 6000);

                    // Calculate coordinates
                    coords = this._calculateTip(mimic, curSize, SCALE);
                    bigCoords = this._calculateTip(mimic, this.size, SCALE);

                    // Set the canvas size using calculated size
                    inner
                        .attr(WIDTH, newSize[0] * SCALE)
                        .attr(HEIGHT, newSize[1] * SCALE);
                    inner.css(WIDTH, newSize[0]).css(HEIGHT, newSize[1]);

                    // Draw the outer-stroke tip
                    this._drawCoords(context, bigCoords);
                    context.fillStyle = color[1];
                    context.fill();

                    // Draw the actual tip
                    context.translate(
                        translate[0] * SCALE,
                        translate[1] * SCALE
                    );
                    this._drawCoords(context, coords);
                    context.fillStyle = color[0];
                    context.fill();
                }

                // VML (IE Proprietary implementation)
                else {
                    // Calculate coordinates
                    coords = this._calculateTip(mimic);

                    // Setup coordinates string
                    coords =
                        "m" +
                        coords[0] +
                        "," +
                        coords[1] +
                        " l" +
                        coords[2] +
                        "," +
                        coords[3] +
                        " " +
                        coords[4] +
                        "," +
                        coords[5] +
                        " xe";

                    // Setup VML-specific offset for pixel-perfection
                    translate[2] =
                        border && /^(r|b)/i.test(corner.string())
                            ? BROWSER.ie === 8
                                ? 2
                                : 1
                            : 0;

                    // Set initial CSS
                    inner
                        .css({
                            coordsize:
                                newSize[0] +
                                border +
                                " " +
                                (newSize[1] + border),
                            antialias:
                                "" + (mimic.string().indexOf(CENTER) > -1),
                            left:
                                translate[0] -
                                translate[2] * Number(precedance === X),
                            top:
                                translate[1] -
                                translate[2] * Number(precedance === Y),
                            width: newSize[0] + border,
                            height: newSize[1] + border,
                        })
                        .each(function (i) {
                            var $this = $(this);

                            // Set shape specific attributes
                            $this[$this.prop ? "prop" : "attr"]({
                                coordsize:
                                    newSize[0] +
                                    border +
                                    " " +
                                    (newSize[1] + border),
                                path: coords,
                                fillcolor: color[0],
                                filled: !!i,
                                stroked: !i,
                            }).toggle(!!(border || i));

                            // Check if border is enabled and add stroke element
                            !i &&
                                $this.html(
                                    createVML(
                                        "stroke",
                                        'weight="' +
                                            border * 2 +
                                            'px" color="' +
                                            color[1] +
                                            '" miterlimit="1000" joinstyle="miter"'
                                    )
                                );
                        });
                }

                // Opera bug #357 - Incorrect tip position
                // https://github.com/Craga89/qTip2/issues/367
                window.opera &&
                    setTimeout(function () {
                        elements.tip.css({
                            display: "inline-block",
                            visibility: "visible",
                        });
                    }, 1);

                // Position if needed
                if (position !== FALSE) {
                    this.calculate(corner, newSize);
                }
            },

            calculate: function (corner, size) {
                if (!this.enabled) {
                    return FALSE;
                }

                var self = this,
                    elements = this.qtip.elements,
                    tip = this.element,
                    userOffset = this.options.offset,
                    isWidget = elements.tooltip.hasClass("ui-widget"),
                    position = {},
                    precedance,
                    corners;

                // Inherit corner if not provided
                corner = corner || this.corner;
                precedance = corner.precedance;

                // Determine which tip dimension to use for adjustment
                size = size || this._calculateSize(corner);

                // Setup corners and offset array
                corners = [corner.x, corner.y];
                if (precedance === X) {
                    corners.reverse();
                }

                // Calculate tip position
                $.each(corners, function (i, side) {
                    var b, bc, br;

                    if (side === CENTER) {
                        b = precedance === Y ? LEFT : TOP;
                        position[b] = "50%";
                        position[MARGIN + "-" + b] =
                            -Math.round(size[precedance === Y ? 0 : 1] / 2) +
                            userOffset;
                    } else {
                        b = self._parseWidth(corner, side, elements.tooltip);
                        bc = self._parseWidth(corner, side, elements.content);
                        br = self._parseRadius(corner);

                        position[side] = Math.max(
                            -self.border,
                            i ? bc : userOffset + (br > b ? br : -b)
                        );
                    }
                });

                // Adjust for tip size
                position[corner[precedance]] -= size[precedance === X ? 0 : 1];

                // Set and return new position
                tip.css({
                    margin: "",
                    top: "",
                    bottom: "",
                    left: "",
                    right: "",
                }).css(position);
                return position;
            },

            reposition: function (event, api, pos, viewport) {
                if (!this.enabled) {
                    return;
                }

                var cache = api.cache,
                    newCorner = this.corner.clone(),
                    adjust = pos.adjusted,
                    method = api.options.position.adjust.method.split(" "),
                    horizontal = method[0],
                    vertical = method[1] || method[0],
                    shift = { left: FALSE, top: FALSE, x: 0, y: 0 },
                    offset,
                    css = {},
                    props;

                function shiftflip(
                    direction,
                    precedance,
                    popposite,
                    side,
                    opposite
                ) {
                    // Horizontal - Shift or flip method
                    if (
                        direction === SHIFT &&
                        newCorner.precedance === precedance &&
                        adjust[side] &&
                        newCorner[popposite] !== CENTER
                    ) {
                        newCorner.precedance =
                            newCorner.precedance === X ? Y : X;
                    } else if (direction !== SHIFT && adjust[side]) {
                        newCorner[precedance] =
                            newCorner[precedance] === CENTER
                                ? adjust[side] > 0
                                    ? side
                                    : opposite
                                : newCorner[precedance] === side
                                ? opposite
                                : side;
                    }
                }

                function shiftonly(xy, side, opposite) {
                    if (newCorner[xy] === CENTER) {
                        css[MARGIN + "-" + side] = shift[xy] =
                            offset[MARGIN + "-" + side] - adjust[side];
                    } else {
                        props =
                            offset[opposite] !== undefined
                                ? [adjust[side], -offset[side]]
                                : [-adjust[side], offset[side]];

                        if (
                            (shift[xy] = Math.max(props[0], props[1])) >
                            props[0]
                        ) {
                            pos[side] -= adjust[side];
                            shift[side] = FALSE;
                        }

                        css[offset[opposite] !== undefined ? opposite : side] =
                            shift[xy];
                    }
                }

                // If our tip position isn't fixed e.g. doesn't adjust with viewport...
                if (this.corner.fixed !== TRUE) {
                    // Perform shift/flip adjustments
                    shiftflip(horizontal, X, Y, LEFT, RIGHT);
                    shiftflip(vertical, Y, X, TOP, BOTTOM);

                    // Update and redraw the tip if needed (check cached details of last drawn tip)
                    if (
                        newCorner.string() !== cache.corner.string() ||
                        cache.cornerTop !== adjust.top ||
                        cache.cornerLeft !== adjust.left
                    ) {
                        this.update(newCorner, FALSE);
                    }
                }

                // Setup tip offset properties
                offset = this.calculate(newCorner);

                // Readjust offset object to make it left/top
                if (offset.right !== undefined) {
                    offset.left = -offset.right;
                }
                if (offset.bottom !== undefined) {
                    offset.top = -offset.bottom;
                }
                offset.user = this.offset;

                // Perform shift adjustments
                if ((shift.left = horizontal === SHIFT && !!adjust.left)) {
                    shiftonly(X, LEFT, RIGHT);
                }
                if ((shift.top = vertical === SHIFT && !!adjust.top)) {
                    shiftonly(Y, TOP, BOTTOM);
                }

                /*
                 * If the tip is adjusted in both dimensions, or in a
                 * direction that would cause it to be anywhere but the
                 * outer border, hide it!
                 */
                this.element
                    .css(css)
                    .toggle(
                        !(
                            (shift.x && shift.y) ||
                            (newCorner.x === CENTER && shift.y) ||
                            (newCorner.y === CENTER && shift.x)
                        )
                    );

                // Adjust position to accomodate tip dimensions
                pos.left -= offset.left.charAt
                    ? offset.user
                    : horizontal !== SHIFT ||
                      shift.top ||
                      (!shift.left && !shift.top)
                    ? offset.left + this.border
                    : 0;
                pos.top -= offset.top.charAt
                    ? offset.user
                    : vertical !== SHIFT ||
                      shift.left ||
                      (!shift.left && !shift.top)
                    ? offset.top + this.border
                    : 0;

                // Cache details
                cache.cornerLeft = adjust.left;
                cache.cornerTop = adjust.top;
                cache.corner = newCorner.clone();
            },

            destroy: function () {
                // Unbind events
                this.qtip._unbind(this.qtip.tooltip, this._ns);

                // Remove the tip element(s)
                if (this.qtip.elements.tip) {
                    this.qtip.elements.tip.find("*").remove().end().remove();
                }
            },
        });

        TIP = PLUGINS.tip = function (api) {
            return new Tip(api, api.options.style.tip);
        };

        // Initialize tip on render
        TIP.initialize = "render";

        // Setup plugin sanitization options
        TIP.sanitize = function (options) {
            if (options.style && "tip" in options.style) {
                var opts = options.style.tip;
                if (typeof opts !== "object") {
                    opts = options.style.tip = { corner: opts };
                }
                if (!/string|boolean/i.test(typeof opts.corner)) {
                    opts.corner = TRUE;
                }
            }
        };

        // Add new option checks for the plugin
        CHECKS.tip = {
            "^position.my|style.tip.(corner|mimic|border)$": function () {
                // Make sure a tip can be drawn
                this.create();

                // Reposition the tooltip
                this.qtip.reposition();
            },
            "^style.tip.(height|width)$": function (obj) {
                // Re-set dimensions and redraw the tip
                this.size = [obj.width, obj.height];
                this.update();

                // Reposition the tooltip
                this.qtip.reposition();
            },
            "^content.title|style.(classes|widget)$": function () {
                this.update();
            },
        };

        // Extend original qTip defaults
        $.extend(TRUE, QTIP.defaults, {
            style: {
                tip: {
                    corner: TRUE,
                    mimic: FALSE,
                    width: 6,
                    height: 6,
                    border: TRUE,
                    offset: 0,
                },
            },
        });
        var MODAL,
            OVERLAY,
            MODALCLASS = "qtip-modal",
            MODALSELECTOR = "." + MODALCLASS;

        OVERLAY = function () {
            var self = this,
                focusableElems = {},
                current,
                onLast,
                prevState,
                elem;

            // Modified code from jQuery UI 1.10.0 source
            // http://code.jquery.com/ui/1.10.0/jquery-ui.js
            function focusable(element) {
                // Use the defined focusable checker when possible
                if ($.expr[":"].focusable) {
                    return $.expr[":"].focusable;
                }

                var isTabIndexNotNaN = !isNaN($.attr(element, "tabindex")),
                    nodeName =
                        element.nodeName && element.nodeName.toLowerCase(),
                    map,
                    mapName,
                    img;

                if ("area" === nodeName) {
                    map = element.parentNode;
                    mapName = map.name;
                    if (
                        !element.href ||
                        !mapName ||
                        map.nodeName.toLowerCase() !== "map"
                    ) {
                        return false;
                    }
                    img = $("img[usemap=#" + mapName + "]")[0];
                    return !!img && img.is(":visible");
                }
                return /input|select|textarea|button|object/.test(nodeName)
                    ? !element.disabled
                    : "a" === nodeName
                    ? element.href || isTabIndexNotNaN
                    : isTabIndexNotNaN;
            }

            // Focus inputs using cached focusable elements (see update())
            function focusInputs(blurElems) {
                // Blurring body element in IE causes window.open windows to unfocus!
                if (focusableElems.length < 1 && blurElems.length) {
                    blurElems.not("body").blur();
                }

                // Focus the inputs
                else {
                    focusableElems.first().focus();
                }
            }

            // Steal focus from elements outside tooltip
            function stealFocus(event) {
                if (!elem.is(":visible")) {
                    return;
                }

                var target = $(event.target),
                    tooltip = current.tooltip,
                    container = target.closest(SELECTOR),
                    targetOnTop;

                // Determine if input container target is above this
                targetOnTop =
                    container.length < 1
                        ? FALSE
                        : parseInt(container[0].style.zIndex, 10) >
                          parseInt(tooltip[0].style.zIndex, 10);

                // If we're showing a modal, but focus has landed on an input below
                // this modal, divert focus to the first visible input in this modal
                // or if we can't find one... the tooltip itself
                if (
                    !targetOnTop &&
                    target.closest(SELECTOR)[0] !== tooltip[0]
                ) {
                    focusInputs(target);
                }

                // Detect when we leave the last focusable element...
                onLast =
                    event.target === focusableElems[focusableElems.length - 1];
            }

            $.extend(self, {
                init: function () {
                    // Create document overlay
                    elem = self.elem = $("<div />", {
                        id: "qtip-overlay",
                        html: "<div></div>",
                        mousedown: function () {
                            return FALSE;
                        },
                    }).hide();

                    // Make sure we can't focus anything outside the tooltip
                    $(document.body).bind(
                        "focusin" + MODALSELECTOR,
                        stealFocus
                    );

                    // Apply keyboard "Escape key" close handler
                    $(document).bind(
                        "keydown" + MODALSELECTOR,
                        function (event) {
                            if (
                                current &&
                                current.options.show.modal.escape &&
                                event.keyCode === 27
                            ) {
                                current.hide(event);
                            }
                        }
                    );

                    // Apply click handler for blur option
                    elem.bind("click" + MODALSELECTOR, function (event) {
                        if (current && current.options.show.modal.blur) {
                            current.hide(event);
                        }
                    });

                    return self;
                },

                update: function (api) {
                    // Update current API reference
                    current = api;

                    // Update focusable elements if enabled
                    if (api.options.show.modal.stealfocus !== FALSE) {
                        focusableElems = api.tooltip
                            .find("*")
                            .filter(function () {
                                return focusable(this);
                            });
                    } else {
                        focusableElems = [];
                    }
                },

                toggle: function (api, state, duration) {
                    var docBody = $(document.body),
                        tooltip = api.tooltip,
                        options = api.options.show.modal,
                        effect = options.effect,
                        type = state ? "show" : "hide",
                        visible = elem.is(":visible"),
                        visibleModals = $(MODALSELECTOR)
                            .filter(":visible:not(:animated)")
                            .not(tooltip),
                        zindex;

                    // Set active tooltip API reference
                    self.update(api);

                    // If the modal can steal the focus...
                    // Blur the current item and focus anything in the modal we an
                    if (state && options.stealfocus !== FALSE) {
                        focusInputs($(":focus"));
                    }

                    // Toggle backdrop cursor style on show
                    elem.toggleClass("blurs", options.blur);

                    // Append to body on show
                    if (state) {
                        elem.appendTo(document.body);
                    }

                    // Prevent modal from conflicting with show.solo, and don't hide backdrop is other modals are visible
                    if (
                        (elem.is(":animated") &&
                            visible === state &&
                            prevState !== FALSE) ||
                        (!state && visibleModals.length)
                    ) {
                        return self;
                    }

                    // Stop all animations
                    elem.stop(TRUE, FALSE);

                    // Use custom function if provided
                    if ($.isFunction(effect)) {
                        effect.call(elem, state);
                    }

                    // If no effect type is supplied, use a simple toggle
                    else if (effect === FALSE) {
                        elem[type]();
                    }

                    // Use basic fade function
                    else {
                        elem.fadeTo(
                            parseInt(duration, 10) || 90,
                            state ? 1 : 0,
                            function () {
                                if (!state) {
                                    elem.hide();
                                }
                            }
                        );
                    }

                    // Reset position and detach from body on hide
                    if (!state) {
                        elem.queue(function (next) {
                            elem.css({ left: "", top: "" });
                            if (!$(MODALSELECTOR).length) {
                                elem.detach();
                            }
                            next();
                        });
                    }

                    // Cache the state
                    prevState = state;

                    // If the tooltip is destroyed, set reference to null
                    if (current.destroyed) {
                        current = NULL;
                    }

                    return self;
                },
            });

            self.init();
        };
        OVERLAY = new OVERLAY();

        function Modal(api, options) {
            this.options = options;
            this._ns = "-modal";

            this.init((this.qtip = api));
        }

        $.extend(Modal.prototype, {
            init: function (qtip) {
                var tooltip = qtip.tooltip;

                // If modal is disabled... return
                if (!this.options.on) {
                    return this;
                }

                // Set overlay reference
                qtip.elements.overlay = OVERLAY.elem;

                // Add unique attribute so we can grab modal tooltips easily via a SELECTOR, and set z-index
                tooltip
                    .addClass(MODALCLASS)
                    .css(
                        "z-index",
                        QTIP.modal_zindex + $(MODALSELECTOR).length
                    );

                // Apply our show/hide/focus modal events
                qtip._bind(
                    tooltip,
                    ["tooltipshow", "tooltiphide"],
                    function (event, api, duration) {
                        var oEvent = event.originalEvent;

                        // Make sure mouseout doesn't trigger a hide when showing the modal and mousing onto backdrop
                        if (event.target === tooltip[0]) {
                            if (
                                oEvent &&
                                event.type === "tooltiphide" &&
                                /mouse(leave|enter)/.test(oEvent.type) &&
                                $(oEvent.relatedTarget).closest(OVERLAY.elem[0])
                                    .length
                            ) {
                                try {
                                    event.preventDefault();
                                } catch (e) {}
                            } else if (
                                !oEvent ||
                                (oEvent && oEvent.type !== "tooltipsolo")
                            ) {
                                this.toggle(
                                    event,
                                    event.type === "tooltipshow",
                                    duration
                                );
                            }
                        }
                    },
                    this._ns,
                    this
                );

                // Adjust modal z-index on tooltip focus
                qtip._bind(
                    tooltip,
                    "tooltipfocus",
                    function (event, api) {
                        // If focus was cancelled before it reached us, don't do anything
                        if (
                            event.isDefaultPrevented() ||
                            event.target !== tooltip[0]
                        ) {
                            return;
                        }

                        var qtips = $(MODALSELECTOR),
                            // Keep the modal's lower than other, regular qtips
                            newIndex = QTIP.modal_zindex + qtips.length,
                            curIndex = parseInt(tooltip[0].style.zIndex, 10);

                        // Set overlay z-index
                        OVERLAY.elem[0].style.zIndex = newIndex - 1;

                        // Reduce modal z-index's and keep them properly ordered
                        qtips.each(function () {
                            if (this.style.zIndex > curIndex) {
                                this.style.zIndex -= 1;
                            }
                        });

                        // Fire blur event for focused tooltip
                        qtips
                            .filter("." + CLASS_FOCUS)
                            .qtip("blur", event.originalEvent);

                        // Set the new z-index
                        tooltip.addClass(CLASS_FOCUS)[0].style.zIndex =
                            newIndex;

                        // Set current
                        OVERLAY.update(api);

                        // Prevent default handling
                        try {
                            event.preventDefault();
                        } catch (e) {}
                    },
                    this._ns,
                    this
                );

                // Focus any other visible modals when this one hides
                qtip._bind(
                    tooltip,
                    "tooltiphide",
                    function (event) {
                        if (event.target === tooltip[0]) {
                            $(MODALSELECTOR)
                                .filter(":visible")
                                .not(tooltip)
                                .last()
                                .qtip("focus", event);
                        }
                    },
                    this._ns,
                    this
                );
            },

            toggle: function (event, state, duration) {
                // Make sure default event hasn't been prevented
                if (event && event.isDefaultPrevented()) {
                    return this;
                }

                // Toggle it
                OVERLAY.toggle(this.qtip, !!state, duration);
            },

            destroy: function () {
                // Remove modal class
                this.qtip.tooltip.removeClass(MODALCLASS);

                // Remove bound events
                this.qtip._unbind(this.qtip.tooltip, this._ns);

                // Delete element reference
                OVERLAY.toggle(this.qtip, FALSE);
                delete this.qtip.elements.overlay;
            },
        });

        MODAL = PLUGINS.modal = function (api) {
            return new Modal(api, api.options.show.modal);
        };

        // Setup sanitiztion rules
        MODAL.sanitize = function (opts) {
            if (opts.show) {
                if (typeof opts.show.modal !== "object") {
                    opts.show.modal = { on: !!opts.show.modal };
                } else if (typeof opts.show.modal.on === "undefined") {
                    opts.show.modal.on = TRUE;
                }
            }
        };

        // Base z-index for all modal tooltips (use qTip core z-index as a base)
        QTIP.modal_zindex = QTIP.zindex - 200;

        // Plugin needs to be initialized on render
        MODAL.initialize = "render";

        // Setup option set checks
        CHECKS.modal = {
            "^show.modal.(on|blur)$": function () {
                // Initialise
                this.destroy();
                this.init();

                // Show the modal if not visible already and tooltip is visible
                this.qtip.elems.overlay.toggle(
                    this.qtip.tooltip[0].offsetWidth > 0
                );
            },
        };

        // Extend original api defaults
        $.extend(TRUE, QTIP.defaults, {
            show: {
                modal: {
                    on: FALSE,
                    effect: TRUE,
                    blur: TRUE,
                    stealfocus: TRUE,
                    escape: TRUE,
                },
            },
        });
        PLUGINS.viewport = function (
            api,
            position,
            posOptions,
            targetWidth,
            targetHeight,
            elemWidth,
            elemHeight
        ) {
            var target = posOptions.target,
                tooltip = api.elements.tooltip,
                my = posOptions.my,
                at = posOptions.at,
                adjust = posOptions.adjust,
                method = adjust.method.split(" "),
                methodX = method[0],
                methodY = method[1] || method[0],
                viewport = posOptions.viewport,
                container = posOptions.container,
                cache = api.cache,
                adjusted = { left: 0, top: 0 },
                fixed,
                newMy,
                containerOffset,
                containerStatic,
                viewportWidth,
                viewportHeight,
                viewportScroll,
                viewportOffset;

            // If viewport is not a jQuery element, or it's the window/document, or no adjustment method is used... return
            if (
                !viewport.jquery ||
                target[0] === window ||
                target[0] === document.body ||
                adjust.method === "none"
            ) {
                return adjusted;
            }

            // Cach container details
            containerOffset = container.offset() || adjusted;
            containerStatic = container.css("position") === "static";

            // Cache our viewport details
            fixed = tooltip.css("position") === "fixed";
            viewportWidth =
                viewport[0] === window
                    ? viewport.width()
                    : viewport.outerWidth(FALSE);
            viewportHeight =
                viewport[0] === window
                    ? viewport.height()
                    : viewport.outerHeight(FALSE);
            viewportScroll = {
                left: fixed ? 0 : viewport.scrollLeft(),
                top: fixed ? 0 : viewport.scrollTop(),
            };
            viewportOffset = viewport.offset() || adjusted;

            // Generic calculation method
            function calculate(
                side,
                otherSide,
                type,
                adjust,
                side1,
                side2,
                lengthName,
                targetLength,
                elemLength
            ) {
                var initialPos = position[side1],
                    mySide = my[side],
                    atSide = at[side],
                    isShift = type === SHIFT,
                    myLength =
                        mySide === side1
                            ? elemLength
                            : mySide === side2
                            ? -elemLength
                            : -elemLength / 2,
                    atLength =
                        atSide === side1
                            ? targetLength
                            : atSide === side2
                            ? -targetLength
                            : -targetLength / 2,
                    sideOffset =
                        viewportScroll[side1] +
                        viewportOffset[side1] -
                        (containerStatic ? 0 : containerOffset[side1]),
                    overflow1 = sideOffset - initialPos,
                    overflow2 =
                        initialPos +
                        elemLength -
                        (lengthName === WIDTH
                            ? viewportWidth
                            : viewportHeight) -
                        sideOffset,
                    offset =
                        myLength -
                        (my.precedance === side || mySide === my[otherSide]
                            ? atLength
                            : 0) -
                        (atSide === CENTER ? targetLength / 2 : 0);

                // shift
                if (isShift) {
                    offset = (mySide === side1 ? 1 : -1) * myLength;

                    // Adjust position but keep it within viewport dimensions
                    position[side1] +=
                        overflow1 > 0
                            ? overflow1
                            : overflow2 > 0
                            ? -overflow2
                            : 0;
                    position[side1] = Math.max(
                        -containerOffset[side1] + viewportOffset[side1],
                        initialPos - offset,
                        Math.min(
                            Math.max(
                                -containerOffset[side1] +
                                    viewportOffset[side1] +
                                    (lengthName === WIDTH
                                        ? viewportWidth
                                        : viewportHeight),
                                initialPos + offset
                            ),
                            position[side1],

                            // Make sure we don't adjust complete off the element when using 'center'
                            mySide === "center" ? initialPos - myLength : 1e9
                        )
                    );
                }

                // flip/flipinvert
                else {
                    // Update adjustment amount depending on if using flipinvert or flip
                    adjust *= type === FLIPINVERT ? 2 : 0;

                    // Check for overflow on the left/top
                    if (overflow1 > 0 && (mySide !== side1 || overflow2 > 0)) {
                        position[side1] -= offset + adjust;
                        newMy.invert(side, side1);
                    }

                    // Check for overflow on the bottom/right
                    else if (
                        overflow2 > 0 &&
                        (mySide !== side2 || overflow1 > 0)
                    ) {
                        position[side1] -=
                            (mySide === CENTER ? -offset : offset) + adjust;
                        newMy.invert(side, side2);
                    }

                    // Make sure we haven't made things worse with the adjustment and reset if so
                    if (
                        position[side1] < viewportScroll &&
                        -position[side1] > overflow2
                    ) {
                        position[side1] = initialPos;
                        newMy = my.clone();
                    }
                }

                return position[side1] - initialPos;
            }

            // Set newMy if using flip or flipinvert methods
            if (methodX !== "shift" || methodY !== "shift") {
                newMy = my.clone();
            }

            // Adjust position based onviewport and adjustment options
            adjusted = {
                left:
                    methodX !== "none"
                        ? calculate(
                              X,
                              Y,
                              methodX,
                              adjust.x,
                              LEFT,
                              RIGHT,
                              WIDTH,
                              targetWidth,
                              elemWidth
                          )
                        : 0,
                top:
                    methodY !== "none"
                        ? calculate(
                              Y,
                              X,
                              methodY,
                              adjust.y,
                              TOP,
                              BOTTOM,
                              HEIGHT,
                              targetHeight,
                              elemHeight
                          )
                        : 0,
                my: newMy,
            };

            return adjusted;
        };
        PLUGINS.polys = {
            // POLY area coordinate calculator
            //	Special thanks to Ed Cradock for helping out with this.
            //	Uses a binary search algorithm to find suitable coordinates.
            polygon: function (baseCoords, corner) {
                var result = {
                        width: 0,
                        height: 0,
                        position: {
                            top: 1e10,
                            right: 0,
                            bottom: 0,
                            left: 1e10,
                        },
                        adjustable: FALSE,
                    },
                    i = 0,
                    next,
                    coords = [],
                    compareX = 1,
                    compareY = 1,
                    realX = 0,
                    realY = 0,
                    newWidth,
                    newHeight;

                // First pass, sanitize coords and determine outer edges
                i = baseCoords.length;
                while (i--) {
                    next = [
                        parseInt(baseCoords[--i], 10),
                        parseInt(baseCoords[i + 1], 10),
                    ];

                    if (next[0] > result.position.right) {
                        result.position.right = next[0];
                    }
                    if (next[0] < result.position.left) {
                        result.position.left = next[0];
                    }
                    if (next[1] > result.position.bottom) {
                        result.position.bottom = next[1];
                    }
                    if (next[1] < result.position.top) {
                        result.position.top = next[1];
                    }

                    coords.push(next);
                }

                // Calculate height and width from outer edges
                newWidth = result.width = Math.abs(
                    result.position.right - result.position.left
                );
                newHeight = result.height = Math.abs(
                    result.position.bottom - result.position.top
                );

                // If it's the center corner...
                if (corner.abbrev() === "c") {
                    result.position = {
                        left: result.position.left + result.width / 2,
                        top: result.position.top + result.height / 2,
                    };
                } else {
                    // Second pass, use a binary search algorithm to locate most suitable coordinate
                    while (
                        newWidth > 0 &&
                        newHeight > 0 &&
                        compareX > 0 &&
                        compareY > 0
                    ) {
                        newWidth = Math.floor(newWidth / 2);
                        newHeight = Math.floor(newHeight / 2);

                        if (corner.x === LEFT) {
                            compareX = newWidth;
                        } else if (corner.x === RIGHT) {
                            compareX = result.width - newWidth;
                        } else {
                            compareX += Math.floor(newWidth / 2);
                        }

                        if (corner.y === TOP) {
                            compareY = newHeight;
                        } else if (corner.y === BOTTOM) {
                            compareY = result.height - newHeight;
                        } else {
                            compareY += Math.floor(newHeight / 2);
                        }

                        i = coords.length;
                        while (i--) {
                            if (coords.length < 2) {
                                break;
                            }

                            realX = coords[i][0] - result.position.left;
                            realY = coords[i][1] - result.position.top;

                            if (
                                (corner.x === LEFT && realX >= compareX) ||
                                (corner.x === RIGHT && realX <= compareX) ||
                                (corner.x === CENTER &&
                                    (realX < compareX ||
                                        realX > result.width - compareX)) ||
                                (corner.y === TOP && realY >= compareY) ||
                                (corner.y === BOTTOM && realY <= compareY) ||
                                (corner.y === CENTER &&
                                    (realY < compareY ||
                                        realY > result.height - compareY))
                            ) {
                                coords.splice(i, 1);
                            }
                        }
                    }
                    result.position = { left: coords[0][0], top: coords[0][1] };
                }

                return result;
            },

            rect: function (ax, ay, bx, by) {
                return {
                    width: Math.abs(bx - ax),
                    height: Math.abs(by - ay),
                    position: {
                        left: Math.min(ax, bx),
                        top: Math.min(ay, by),
                    },
                };
            },

            _angles: {
                tc: 3 / 2,
                tr: 7 / 4,
                tl: 5 / 4,
                bc: 1 / 2,
                br: 1 / 4,
                bl: 3 / 4,
                rc: 2,
                lc: 1,
                c: 0,
            },
            ellipse: function (cx, cy, rx, ry, corner) {
                var c = PLUGINS.polys._angles[corner.abbrev()],
                    rxc = c === 0 ? 0 : rx * Math.cos(c * Math.PI),
                    rys = ry * Math.sin(c * Math.PI);

                return {
                    width: rx * 2 - Math.abs(rxc),
                    height: ry * 2 - Math.abs(rys),
                    position: {
                        left: cx + rxc,
                        top: cy + rys,
                    },
                    adjustable: FALSE,
                };
            },
            circle: function (cx, cy, r, corner) {
                return PLUGINS.polys.ellipse(cx, cy, r, r, corner);
            },
        };
        PLUGINS.svg = function (api, svg, corner) {
            var doc = $(document),
                elem = svg[0],
                root = $(elem.ownerSVGElement),
                ownerDocument = elem.ownerDocument,
                strokeWidth2 = (parseInt(svg.css("stroke-width"), 10) || 0) / 2,
                frameOffset,
                mtx,
                transformed,
                viewBox,
                len,
                next,
                i,
                points,
                result,
                position,
                dimensions;

            // Ascend the parentNode chain until we find an element with getBBox()
            while (!elem.getBBox) {
                elem = elem.parentNode;
            }
            if (!elem.getBBox || !elem.parentNode) {
                return FALSE;
            }

            // Determine which shape calculation to use
            switch (elem.nodeName) {
                case "ellipse":
                case "circle":
                    result = PLUGINS.polys.ellipse(
                        elem.cx.baseVal.value,
                        elem.cy.baseVal.value,
                        (elem.rx || elem.r).baseVal.value + strokeWidth2,
                        (elem.ry || elem.r).baseVal.value + strokeWidth2,
                        corner
                    );
                    break;

                case "line":
                case "polygon":
                case "polyline":
                    // Determine points object (line has none, so mimic using array)
                    points = elem.points || [
                        { x: elem.x1.baseVal.value, y: elem.y1.baseVal.value },
                        { x: elem.x2.baseVal.value, y: elem.y2.baseVal.value },
                    ];

                    for (
                        result = [],
                            i = -1,
                            len = points.numberOfItems || points.length;
                        ++i < len;

                    ) {
                        next = points.getItem ? points.getItem(i) : points[i];
                        result.push.apply(result, [next.x, next.y]);
                    }

                    result = PLUGINS.polys.polygon(result, corner);
                    break;

                // Unknown shape or rectangle? Use bounding box
                default:
                    result = elem.getBBox();
                    result = {
                        width: result.width,
                        height: result.height,
                        position: {
                            left: result.x,
                            top: result.y,
                        },
                    };
                    break;
            }

            // Shortcut assignments
            position = result.position;
            root = root[0];

            // Convert position into a pixel value
            if (root.createSVGPoint) {
                mtx = elem.getScreenCTM();
                points = root.createSVGPoint();

                points.x = position.left;
                points.y = position.top;
                transformed = points.matrixTransform(mtx);
                position.left = transformed.x;
                position.top = transformed.y;
            }

            // Check the element is not in a child document, and if so, adjust for frame elements offset
            if (ownerDocument !== document && api.position.target !== "mouse") {
                frameOffset = $(
                    (ownerDocument.defaultView || ownerDocument.parentWindow)
                        .frameElement
                ).offset();
                if (frameOffset) {
                    position.left += frameOffset.left;
                    position.top += frameOffset.top;
                }
            }

            // Adjust by scroll offset of owner document
            ownerDocument = $(ownerDocument);
            position.left += ownerDocument.scrollLeft();
            position.top += ownerDocument.scrollTop();

            return result;
        };
        PLUGINS.imagemap = function (api, area, corner, adjustMethod) {
            if (!area.jquery) {
                area = $(area);
            }

            var shape = (area.attr("shape") || "rect")
                    .toLowerCase()
                    .replace("poly", "polygon"),
                image = $(
                    'img[usemap="#' + area.parent("map").attr("name") + '"]'
                ),
                coordsString = $.trim(area.attr("coords")),
                coordsArray = coordsString.replace(/,$/, "").split(","),
                imageOffset,
                coords,
                i,
                next,
                result,
                len;

            // If we can't find the image using the map...
            if (!image.length) {
                return FALSE;
            }

            // Pass coordinates string if polygon
            if (shape === "polygon") {
                result = PLUGINS.polys.polygon(coordsArray, corner);
            }

            // Otherwise parse the coordinates and pass them as arguments
            else if (PLUGINS.polys[shape]) {
                for (
                    i = -1, len = coordsArray.length, coords = [];
                    ++i < len;

                ) {
                    coords.push(parseInt(coordsArray[i], 10));
                }

                result = PLUGINS.polys[shape].apply(
                    this,
                    coords.concat(corner)
                );
            }

            // If no shapre calculation method was found, return false
            else {
                return FALSE;
            }

            // Make sure we account for padding and borders on the image
            imageOffset = image.offset();
            imageOffset.left += Math.ceil(
                (image.outerWidth(FALSE) - image.width()) / 2
            );
            imageOffset.top += Math.ceil(
                (image.outerHeight(FALSE) - image.height()) / 2
            );

            // Add image position to offset coordinates
            result.position.left += imageOffset.left;
            result.position.top += imageOffset.top;

            return result;
        };
        var IE6,
            /*
             * BGIFrame adaption (http://plugins.jquery.com/project/bgiframe)
             * Special thanks to Brandon Aaron
             */
            BGIFRAME =
                '<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';" ' +
                ' style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); ' +
                '-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>';

        function Ie6(api, qtip) {
            this._ns = "ie6";
            this.init((this.qtip = api));
        }

        $.extend(Ie6.prototype, {
            _scroll: function () {
                var overlay = this.qtip.elements.overlay;
                overlay &&
                    (overlay[0].style.top = $(window).scrollTop() + "px");
            },

            init: function (qtip) {
                var tooltip = qtip.tooltip,
                    scroll;

                // Create the BGIFrame element if needed
                if ($("select, object").length < 1) {
                    this.bgiframe = qtip.elements.bgiframe =
                        $(BGIFRAME).appendTo(tooltip);

                    // Update BGIFrame on tooltip move
                    qtip._bind(
                        tooltip,
                        "tooltipmove",
                        this.adjustBGIFrame,
                        this._ns,
                        this
                    );
                }

                // redraw() container for width/height calculations
                this.redrawContainer = $("<div/>", {
                    id: NAMESPACE + "-rcontainer",
                }).appendTo(document.body);

                // Fixup modal plugin if present too
                if (
                    qtip.elements.overlay &&
                    qtip.elements.overlay.addClass("qtipmodal-ie6fix")
                ) {
                    qtip._bind(
                        window,
                        ["scroll", "resize"],
                        this._scroll,
                        this._ns,
                        this
                    );
                    qtip._bind(
                        tooltip,
                        ["tooltipshow"],
                        this._scroll,
                        this._ns,
                        this
                    );
                }

                // Set dimensions
                this.redraw();
            },

            adjustBGIFrame: function () {
                var tooltip = this.qtip.tooltip,
                    dimensions = {
                        height: tooltip.outerHeight(FALSE),
                        width: tooltip.outerWidth(FALSE),
                    },
                    plugin = this.qtip.plugins.tip,
                    tip = this.qtip.elements.tip,
                    tipAdjust,
                    offset;

                // Adjust border offset
                offset = parseInt(tooltip.css("borderLeftWidth"), 10) || 0;
                offset = { left: -offset, top: -offset };

                // Adjust for tips plugin
                if (plugin && tip) {
                    tipAdjust =
                        plugin.corner.precedance === "x"
                            ? [WIDTH, LEFT]
                            : [HEIGHT, TOP];
                    offset[tipAdjust[1]] -= tip[tipAdjust[0]]();
                }

                // Update bgiframe
                this.bgiframe.css(offset).css(dimensions);
            },

            // Max/min width simulator function
            redraw: function () {
                if (this.qtip.rendered < 1 || this.drawing) {
                    return this;
                }

                var tooltip = this.qtip.tooltip,
                    style = this.qtip.options.style,
                    container = this.qtip.options.position.container,
                    perc,
                    width,
                    max,
                    min;

                // Set drawing flag
                this.qtip.drawing = 1;

                // If tooltip has a set height/width, just set it... like a boss!
                if (style.height) {
                    tooltip.css(HEIGHT, style.height);
                }
                if (style.width) {
                    tooltip.css(WIDTH, style.width);
                }

                // Simulate max/min width if not set width present...
                else {
                    // Reset width and add fluid class
                    tooltip.css(WIDTH, "").appendTo(this.redrawContainer);

                    // Grab our tooltip width (add 1 if odd so we don't get wrapping problems.. huzzah!)
                    width = tooltip.width();
                    if (width % 2 < 1) {
                        width += 1;
                    }

                    // Grab our max/min properties
                    max = tooltip.css("maxWidth") || "";
                    min = tooltip.css("minWidth") || "";

                    // Parse into proper pixel values
                    perc =
                        (max + min).indexOf("%") > -1
                            ? container.width() / 100
                            : 0;
                    max =
                        (max.indexOf("%") > -1 ? perc : 1) *
                            parseInt(max, 10) || width;
                    min =
                        (min.indexOf("%") > -1 ? perc : 1) *
                            parseInt(min, 10) || 0;

                    // Determine new dimension size based on max/min/current values
                    width =
                        max + min ? Math.min(Math.max(width, min), max) : width;

                    // Set the newly calculated width and remvoe fluid class
                    tooltip.css(WIDTH, Math.round(width)).appendTo(container);
                }

                // Set drawing flag
                this.drawing = 0;

                return this;
            },

            destroy: function () {
                // Remove iframe
                this.bgiframe && this.bgiframe.remove();

                // Remove bound events
                this.qtip._unbind([window, this.qtip.tooltip], this._ns);
            },
        });

        IE6 = PLUGINS.ie6 = function (api) {
            // Proceed only if the browser is IE6
            return BROWSER.ie === 6 ? new Ie6(api) : FALSE;
        };

        IE6.initialize = "render";

        CHECKS.ie6 = {
            "^content|style$": function () {
                this.redraw();
            },
        };
    });
})(window, document);
/*!
 * jQuery corner plugin: simple corner rounding
 * Examples and documentation at: http://jquery.malsup.com/corner/
 * version 2.13 (19-FEB-2013)
 * Requires jQuery v1.3.2 or later
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Authors: Dave Methvin and Mike Alsup
 */

/**
 *  corner() takes a single string argument:  $('#myDiv').corner("effect corners width")
 *
 *  effect:  name of the effect to apply, such as round, bevel, notch, bite, etc (default is round).
 *  corners: one or more of: top, bottom, tr, tl, br, or bl.  (default is all corners)
 *  width:   width of the effect; in the case of rounded corners this is the radius.
 *           specify this value using the px suffix such as 10px (yes, it must be pixels).
 */
(function ($) {
    var msie = /MSIE/.test(navigator.userAgent);

    var style = document.createElement("div").style,
        moz = style["MozBorderRadius"] !== undefined,
        webkit = style["WebkitBorderRadius"] !== undefined,
        radius =
            style["borderRadius"] !== undefined ||
            style["BorderRadius"] !== undefined,
        mode = document.documentMode || 0,
        noBottomFold = msie && (!mode || mode < 8),
        expr =
            msie &&
            (function () {
                var div = document.createElement("div");
                try {
                    div.style.setExpression("width", "0+0");
                    div.style.removeExpression("width");
                } catch (e) {
                    return false;
                }
                return true;
            })();

    $.support = $.support || {};
    $.support.borderRadius = moz || webkit || radius; // so you can do:  if (!$.support.borderRadius) $('#myDiv').corner();

    function sz(el, p) {
        return parseInt($.css(el, p), 10) || 0;
    }
    function hex2(s) {
        s = parseInt(s, 10).toString(16);
        return s.length < 2 ? "0" + s : s;
    }
    function gpc(node) {
        while (node) {
            var v = $.css(node, "backgroundColor"),
                rgb;
            if (v && v != "transparent" && v != "rgba(0, 0, 0, 0)") {
                if (v.indexOf("rgb") >= 0) {
                    rgb = v.match(/\d+/g);
                    return "#" + hex2(rgb[0]) + hex2(rgb[1]) + hex2(rgb[2]);
                }
                return v;
            }
            if (node.nodeName.toLowerCase() == "html") break;
            node = node.parentNode; // keep walking if transparent
        }
        return "#ffffff";
    }

    function getWidth(fx, i, width) {
        switch (fx) {
            case "round":
                return Math.round(width * (1 - Math.cos(Math.asin(i / width))));
            case "cool":
                return Math.round(width * (1 + Math.cos(Math.asin(i / width))));
            case "sharp":
                return width - i;
            case "bite":
                return Math.round(
                    width * Math.cos(Math.asin((width - i - 1) / width))
                );
            case "slide":
                return Math.round(width * Math.atan2(i, width / i));
            case "jut":
                return Math.round(width * Math.atan2(width, width - i - 1));
            case "curl":
                return Math.round(width * Math.atan(i));
            case "tear":
                return Math.round(width * Math.cos(i));
            case "wicked":
                return Math.round(width * Math.tan(i));
            case "long":
                return Math.round(width * Math.sqrt(i));
            case "sculpt":
                return Math.round(width * Math.log(width - i - 1, width));
            case "dogfold":
            case "dog":
                return i & 1 ? i + 1 : width;
            case "dog2":
                return i & 2 ? i + 1 : width;
            case "dog3":
                return i & 3 ? i + 1 : width;
            case "fray":
                return (i % 2) * width;
            case "notch":
                return width;
            case "bevelfold":
            case "bevel":
                return i + 1;
            case "steep":
                return i / 2 + 1;
            case "invsteep":
                return (width - i) / 2 + 1;
        }
    }

    $.fn.corner = function (options) {
        // in 1.3+ we can fix mistakes with the ready state
        if (this.length === 0) {
            if (!$.isReady && this.selector) {
                var s = this.selector,
                    c = this.context;
                $(function () {
                    $(s, c).corner(options);
                });
            }
            return this;
        }

        return this.each(function (index) {
            var $this = $(this),
                // meta values override options
                o = [
                    $this.attr($.fn.corner.defaults.metaAttr) || "",
                    options || "",
                ]
                    .join(" ")
                    .toLowerCase(),
                keep = /keep/.test(o), // keep borders?
                cc = (o.match(/cc:(#[0-9a-f]+)/) || [])[1], // corner color
                sc = (o.match(/sc:(#[0-9a-f]+)/) || [])[1], // strip color
                width = parseInt((o.match(/(\d+)px/) || [])[1], 10) || 10, // corner width
                re =
                    /round|bevelfold|bevel|notch|bite|cool|sharp|slide|jut|curl|tear|fray|wicked|sculpt|long|dog3|dog2|dogfold|dog|invsteep|steep/,
                fx = (o.match(re) || ["round"])[0],
                fold = /dogfold|bevelfold/.test(o),
                edges = { T: 0, B: 1 },
                opts = {
                    TL: /top|tl|left/.test(o),
                    TR: /top|tr|right/.test(o),
                    BL: /bottom|bl|left/.test(o),
                    BR: /bottom|br|right/.test(o),
                },
                // vars used in func later
                strip,
                pad,
                cssHeight,
                j,
                bot,
                d,
                ds,
                bw,
                i,
                w,
                e,
                c,
                common,
                $horz;

            if (!opts.TL && !opts.TR && !opts.BL && !opts.BR)
                opts = { TL: 1, TR: 1, BL: 1, BR: 1 };

            // support native rounding
            if (
                $.fn.corner.defaults.useNative &&
                fx == "round" &&
                (radius || moz || webkit) &&
                !cc &&
                !sc
            ) {
                if (opts.TL)
                    $this.css(
                        radius
                            ? "border-top-left-radius"
                            : moz
                            ? "-moz-border-radius-topleft"
                            : "-webkit-border-top-left-radius",
                        width + "px"
                    );
                if (opts.TR)
                    $this.css(
                        radius
                            ? "border-top-right-radius"
                            : moz
                            ? "-moz-border-radius-topright"
                            : "-webkit-border-top-right-radius",
                        width + "px"
                    );
                if (opts.BL)
                    $this.css(
                        radius
                            ? "border-bottom-left-radius"
                            : moz
                            ? "-moz-border-radius-bottomleft"
                            : "-webkit-border-bottom-left-radius",
                        width + "px"
                    );
                if (opts.BR)
                    $this.css(
                        radius
                            ? "border-bottom-right-radius"
                            : moz
                            ? "-moz-border-radius-bottomright"
                            : "-webkit-border-bottom-right-radius",
                        width + "px"
                    );
                return;
            }

            strip = document.createElement("div");
            $(strip).css({
                overflow: "hidden",
                height: "1px",
                minHeight: "1px",
                fontSize: "1px",
                backgroundColor: sc || "transparent",
                borderStyle: "solid",
            });

            pad = {
                T: parseInt($.css(this, "paddingTop"), 10) || 0,
                R: parseInt($.css(this, "paddingRight"), 10) || 0,
                B: parseInt($.css(this, "paddingBottom"), 10) || 0,
                L: parseInt($.css(this, "paddingLeft"), 10) || 0,
            };

            if (typeof this.style.zoom !== undefined) this.style.zoom = 1; // force 'hasLayout' in IE
            if (!keep) this.style.border = "none";
            strip.style.borderColor = cc || gpc(this.parentNode);
            cssHeight = $(this).outerHeight();

            for (j in edges) {
                bot = edges[j];
                // only add stips if needed
                if (
                    (bot && (opts.BL || opts.BR)) ||
                    (!bot && (opts.TL || opts.TR))
                ) {
                    strip.style.borderStyle =
                        "none " +
                        (opts[j + "R"] ? "solid" : "none") +
                        " none " +
                        (opts[j + "L"] ? "solid" : "none");
                    d = document.createElement("div");
                    $(d).addClass("jquery-corner");
                    ds = d.style;

                    bot
                        ? this.appendChild(d)
                        : this.insertBefore(d, this.firstChild);

                    if (bot && cssHeight != "auto") {
                        if ($.css(this, "position") == "static")
                            this.style.position = "relative";
                        ds.position = "absolute";
                        ds.bottom = ds.left = ds.padding = ds.margin = "0";
                        if (expr)
                            ds.setExpression(
                                "width",
                                "this.parentNode.offsetWidth"
                            );
                        else ds.width = "100%";
                    } else if (!bot && msie) {
                        if ($.css(this, "position") == "static")
                            this.style.position = "relative";
                        ds.position = "absolute";
                        ds.top =
                            ds.left =
                            ds.right =
                            ds.padding =
                            ds.margin =
                                "0";

                        // fix ie6 problem when blocked element has a border width
                        if (expr) {
                            bw =
                                sz(this, "borderLeftWidth") +
                                sz(this, "borderRightWidth");
                            ds.setExpression(
                                "width",
                                "this.parentNode.offsetWidth - " + bw + '+ "px"'
                            );
                        } else ds.width = "100%";
                    } else {
                        ds.position = "relative";
                        ds.margin = !bot
                            ? "-" +
                              pad.T +
                              "px -" +
                              pad.R +
                              "px " +
                              (pad.T - width) +
                              "px -" +
                              pad.L +
                              "px"
                            : pad.B -
                              width +
                              "px -" +
                              pad.R +
                              "px -" +
                              pad.B +
                              "px -" +
                              pad.L +
                              "px";
                    }

                    for (i = 0; i < width; i++) {
                        w = Math.max(0, getWidth(fx, i, width));
                        e = strip.cloneNode(false);
                        e.style.borderWidth =
                            "0 " +
                            (opts[j + "R"] ? w : 0) +
                            "px 0 " +
                            (opts[j + "L"] ? w : 0) +
                            "px";
                        bot
                            ? d.appendChild(e)
                            : d.insertBefore(e, d.firstChild);
                    }

                    if (fold && $.support.boxModel) {
                        if (bot && noBottomFold) continue;
                        for (c in opts) {
                            if (!opts[c]) continue;
                            if (bot && (c == "TL" || c == "TR")) continue;
                            if (!bot && (c == "BL" || c == "BR")) continue;

                            common = {
                                position: "absolute",
                                border: "none",
                                margin: 0,
                                padding: 0,
                                overflow: "hidden",
                                backgroundColor: strip.style.borderColor,
                            };
                            $horz = $("<div/>")
                                .css(common)
                                .css({ width: width + "px", height: "1px" });
                            switch (c) {
                                case "TL":
                                    $horz.css({ bottom: 0, left: 0 });
                                    break;
                                case "TR":
                                    $horz.css({ bottom: 0, right: 0 });
                                    break;
                                case "BL":
                                    $horz.css({ top: 0, left: 0 });
                                    break;
                                case "BR":
                                    $horz.css({ top: 0, right: 0 });
                                    break;
                            }
                            d.appendChild($horz[0]);

                            var $vert = $("<div/>")
                                .css(common)
                                .css({
                                    top: 0,
                                    bottom: 0,
                                    width: "1px",
                                    height: width + "px",
                                });
                            switch (c) {
                                case "TL":
                                    $vert.css({ left: width });
                                    break;
                                case "TR":
                                    $vert.css({ right: width });
                                    break;
                                case "BL":
                                    $vert.css({ left: width });
                                    break;
                                case "BR":
                                    $vert.css({ right: width });
                                    break;
                            }
                            d.appendChild($vert[0]);
                        }
                    }
                }
            }
        });
    };

    $.fn.uncorner = function () {
        if (radius || moz || webkit)
            this.css(
                radius
                    ? "border-radius"
                    : moz
                    ? "-moz-border-radius"
                    : "-webkit-border-radius",
                0
            );
        $("div.jquery-corner", this).remove();
        return this;
    };

    // expose options
    $.fn.corner.defaults = {
        useNative: true, // true if plugin should attempt to use native browser support for border radius rounding
        metaAttr: "data-corner", // name of meta attribute to use for options
    };
})(jQuery);
/*
 CryptoJS v3.1.9
 code.google.com/p/crypto-js
 (c) 2009-2013 by Jeff Mott. All rights reserved.
 code.google.com/p/crypto-js/wiki/License
 */
var CryptoJS =
    CryptoJS ||
    (function (Math, undefined) {
        var create =
            Object.create ||
            (function () {
                function F() {}
                return function (obj) {
                    var subtype;
                    F.prototype = obj;
                    subtype = new F();
                    F.prototype = null;
                    return subtype;
                };
            })();
        var C = {};

        var C_lib = (C.lib = {});
        var Base = (C_lib.Base = (function () {
            return {
                extend: function (overrides) {
                    var subtype = create(this);
                    if (overrides) {
                        subtype.mixIn(overrides);
                    }
                    if (
                        !subtype.hasOwnProperty("init") ||
                        this.init === subtype.init
                    ) {
                        subtype.init = function () {
                            subtype.$super.init.apply(this, arguments);
                        };
                    }
                    subtype.init.prototype = subtype;
                    subtype.$super = this;

                    return subtype;
                },
                create: function () {
                    var instance = this.extend();
                    instance.init.apply(instance, arguments);

                    return instance;
                },
                init: function () {},
                mixIn: function (properties) {
                    for (var propertyName in properties) {
                        if (properties.hasOwnProperty(propertyName)) {
                            this[propertyName] = properties[propertyName];
                        }
                    }
                    if (properties.hasOwnProperty("toString")) {
                        this.toString = properties.toString;
                    }
                },
                clone: function () {
                    return this.init.prototype.extend(this);
                },
            };
        })());
        var WordArray = (C_lib.WordArray = Base.extend({
            init: function (words, sigBytes) {
                words = this.words = words || [];

                if (sigBytes != undefined) {
                    this.sigBytes = sigBytes;
                } else {
                    this.sigBytes = words.length * 4;
                }
            },
            toString: function (encoder) {
                return (encoder || Hex).stringify(this);
            },
            concat: function (wordArray) {
                // Shortcuts
                var thisWords = this.words;
                var thatWords = wordArray.words;
                var thisSigBytes = this.sigBytes;
                var thatSigBytes = wordArray.sigBytes;
                this.clamp();
                if (thisSigBytes % 4) {
                    for (var i = 0; i < thatSigBytes; i++) {
                        var thatByte =
                            (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                        thisWords[(thisSigBytes + i) >>> 2] |=
                            thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
                    }
                } else {
                    for (var i = 0; i < thatSigBytes; i += 4) {
                        thisWords[(thisSigBytes + i) >>> 2] =
                            thatWords[i >>> 2];
                    }
                }
                this.sigBytes += thatSigBytes;
                return this;
            },
            clamp: function () {
                var words = this.words;
                var sigBytes = this.sigBytes;
                words[sigBytes >>> 2] &=
                    0xffffffff << (32 - (sigBytes % 4) * 8);
                words.length = Math.ceil(sigBytes / 4);
            },

            clone: function () {
                var clone = Base.clone.call(this);
                clone.words = this.words.slice(0);

                return clone;
            },
            random: function (nBytes) {
                var words = [];

                var r = function (m_w) {
                    var m_w = m_w;
                    var m_z = 0x3ade68b1;
                    var mask = 0xffffffff;

                    return function () {
                        m_z = (0x9069 * (m_z & 0xffff) + (m_z >> 0x10)) & mask;
                        m_w = (0x4650 * (m_w & 0xffff) + (m_w >> 0x10)) & mask;
                        var result = ((m_z << 0x10) + m_w) & mask;
                        result /= 0x100000000;
                        result += 0.5;
                        return result * (Math.random() > 0.5 ? 1 : -1);
                    };
                };

                for (var i = 0, rcache; i < nBytes; i += 4) {
                    var _r = r((rcache || Math.random()) * 0x100000000);

                    rcache = _r() * 0x3ade67b7;
                    words.push((_r() * 0x100000000) | 0);
                }

                return new WordArray.init(words, nBytes);
            },
        }));
        var C_enc = (C.enc = {});
        var Hex = (C_enc.Hex = {
            stringify: function (wordArray) {
                // Shortcuts
                var words = wordArray.words;
                var sigBytes = wordArray.sigBytes;

                // Convert
                var hexChars = [];
                for (var i = 0; i < sigBytes; i++) {
                    var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                    hexChars.push((bite >>> 4).toString(16));
                    hexChars.push((bite & 0x0f).toString(16));
                }

                return hexChars.join("");
            },
            parse: function (hexStr) {
                var hexStrLength = hexStr.length;
                var words = [];
                for (var i = 0; i < hexStrLength; i += 2) {
                    words[i >>> 3] |=
                        parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
                }

                return new WordArray.init(words, hexStrLength / 2);
            },
        });
        var Latin1 = (C_enc.Latin1 = {
            stringify: function (wordArray) {
                var words = wordArray.words;
                var sigBytes = wordArray.sigBytes;

                var latin1Chars = [];
                for (var i = 0; i < sigBytes; i++) {
                    var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                    latin1Chars.push(String.fromCharCode(bite));
                }

                return latin1Chars.join("");
            },
            parse: function (latin1Str) {
                var latin1StrLength = latin1Str.length;
                var words = [];
                for (var i = 0; i < latin1StrLength; i++) {
                    words[i >>> 2] |=
                        (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
                }

                return new WordArray.init(words, latin1StrLength);
            },
        });
        var Utf8 = (C_enc.Utf8 = {
            stringify: function (wordArray) {
                try {
                    return decodeURIComponent(
                        escape(Latin1.stringify(wordArray))
                    );
                } catch (e) {
                    throw new Error("Malformed UTF-8 data");
                }
            },
            parse: function (utf8Str) {
                return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
            },
        });
        var BufferedBlockAlgorithm = (C_lib.BufferedBlockAlgorithm =
            Base.extend({
                reset: function () {
                    this._data = new WordArray.init();
                    this._nDataBytes = 0;
                },
                _append: function (data) {
                    if (typeof data == "string") {
                        data = Utf8.parse(data);
                    }
                    this._data.concat(data);
                    this._nDataBytes += data.sigBytes;
                },
                _process: function (doFlush) {
                    var data = this._data;
                    var dataWords = data.words;
                    var dataSigBytes = data.sigBytes;
                    var blockSize = this.blockSize;
                    var blockSizeBytes = blockSize * 4;
                    var nBlocksReady = dataSigBytes / blockSizeBytes;
                    if (doFlush) {
                        nBlocksReady = Math.ceil(nBlocksReady);
                    } else {
                        nBlocksReady = Math.max(
                            (nBlocksReady | 0) - this._minBufferSize,
                            0
                        );
                    }
                    var nWordsReady = nBlocksReady * blockSize;
                    var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);
                    if (nWordsReady) {
                        for (
                            var offset = 0;
                            offset < nWordsReady;
                            offset += blockSize
                        ) {
                            this._doProcessBlock(dataWords, offset);
                        }
                        var processedWords = dataWords.splice(0, nWordsReady);
                        data.sigBytes -= nBytesReady;
                    }
                    return new WordArray.init(processedWords, nBytesReady);
                },
                clone: function () {
                    var clone = Base.clone.call(this);
                    clone._data = this._data.clone();

                    return clone;
                },

                _minBufferSize: 0,
            }));
        var Hasher = (C_lib.Hasher = BufferedBlockAlgorithm.extend({
            cfg: Base.extend(),
            init: function (cfg) {
                this.cfg = this.cfg.extend(cfg);
                this.reset();
            },
            reset: function () {
                BufferedBlockAlgorithm.reset.call(this);
                this._doReset();
            },
            update: function (messageUpdate) {
                this._append(messageUpdate);
                return this;
            },
            finalize: function (messageUpdate) {
                if (messageUpdate) {
                    this._append(messageUpdate);
                }
                var hash = this._doFinalize();

                return hash;
            },

            blockSize: 512 / 32,
            _createHelper: function (hasher) {
                return function (message, cfg) {
                    return new hasher.init(cfg).finalize(message);
                };
            },
            _createHmacHelper: function (hasher) {
                return function (message, key) {
                    return new C_algo.HMAC.init(hasher, key).finalize(message);
                };
            },
        }));
        var C_algo = (C.algo = {});
        return C;
    })(Math);
(function () {
    (function () {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        var Base64 = (C_enc.Base64 = {
            stringify: function (wordArray) {
                var words = wordArray.words;
                var sigBytes = wordArray.sigBytes;
                var map = this._map;

                wordArray.clamp();

                var base64Chars = [];
                for (var i = 0; i < sigBytes; i += 3) {
                    var byte1 = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                    var byte2 =
                        (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) &
                        0xff;
                    var byte3 =
                        (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) &
                        0xff;

                    var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

                    for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
                        base64Chars.push(
                            map.charAt((triplet >>> (6 * (3 - j))) & 0x3f)
                        );
                    }
                }

                var paddingChar = map.charAt(64);
                if (paddingChar) {
                    while (base64Chars.length % 4) {
                        base64Chars.push(paddingChar);
                    }
                }

                return base64Chars.join("");
            },
            parse: function (base64Str) {
                var base64StrLength = base64Str.length;
                var map = this._map;
                var reverseMap = this._reverseMap;

                if (!reverseMap) {
                    reverseMap = this._reverseMap = [];
                    for (var j = 0; j < map.length; j++) {
                        reverseMap[map.charCodeAt(j)] = j;
                    }
                }

                var paddingChar = map.charAt(64);
                if (paddingChar) {
                    var paddingIndex = base64Str.indexOf(paddingChar);
                    if (paddingIndex !== -1) {
                        base64StrLength = paddingIndex;
                    }
                }

                return parseLoop(base64Str, base64StrLength, reverseMap);
            },

            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        });

        function parseLoop(base64Str, base64StrLength, reverseMap) {
            var words = [];
            var nBytes = 0;
            for (var i = 0; i < base64StrLength; i++) {
                if (i % 4) {
                    var bits1 =
                        reverseMap[base64Str.charCodeAt(i - 1)] <<
                        ((i % 4) * 2);
                    var bits2 =
                        reverseMap[base64Str.charCodeAt(i)] >>>
                        (6 - (i % 4) * 2);
                    words[nBytes >>> 2] |=
                        (bits1 | bits2) << (24 - (nBytes % 4) * 8);
                    nBytes++;
                }
            }
            return WordArray.create(words, nBytes);
        }
    })();
    return CryptoJS.enc.Base64;
})();
(function () {
    (function (Math) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;

        var T = [];

        (function () {
            for (var i = 0; i < 64; i++) {
                T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
            }
        })();
        var MD5 = (C_algo.MD5 = Hasher.extend({
            _doReset: function () {
                this._hash = new WordArray.init([
                    0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476,
                ]);
            },

            _doProcessBlock: function (M, offset) {
                for (var i = 0; i < 16; i++) {
                    var offset_i = offset + i;
                    var M_offset_i = M[offset_i];

                    M[offset_i] =
                        (((M_offset_i << 8) | (M_offset_i >>> 24)) &
                            0x00ff00ff) |
                        (((M_offset_i << 24) | (M_offset_i >>> 8)) &
                            0xff00ff00);
                }

                var H = this._hash.words;

                var M_offset_0 = M[offset + 0];
                var M_offset_1 = M[offset + 1];
                var M_offset_2 = M[offset + 2];
                var M_offset_3 = M[offset + 3];
                var M_offset_4 = M[offset + 4];
                var M_offset_5 = M[offset + 5];
                var M_offset_6 = M[offset + 6];
                var M_offset_7 = M[offset + 7];
                var M_offset_8 = M[offset + 8];
                var M_offset_9 = M[offset + 9];
                var M_offset_10 = M[offset + 10];
                var M_offset_11 = M[offset + 11];
                var M_offset_12 = M[offset + 12];
                var M_offset_13 = M[offset + 13];
                var M_offset_14 = M[offset + 14];
                var M_offset_15 = M[offset + 15];

                var a = H[0];
                var b = H[1];
                var c = H[2];
                var d = H[3];

                a = FF(a, b, c, d, M_offset_0, 7, T[0]);
                d = FF(d, a, b, c, M_offset_1, 12, T[1]);
                c = FF(c, d, a, b, M_offset_2, 17, T[2]);
                b = FF(b, c, d, a, M_offset_3, 22, T[3]);
                a = FF(a, b, c, d, M_offset_4, 7, T[4]);
                d = FF(d, a, b, c, M_offset_5, 12, T[5]);
                c = FF(c, d, a, b, M_offset_6, 17, T[6]);
                b = FF(b, c, d, a, M_offset_7, 22, T[7]);
                a = FF(a, b, c, d, M_offset_8, 7, T[8]);
                d = FF(d, a, b, c, M_offset_9, 12, T[9]);
                c = FF(c, d, a, b, M_offset_10, 17, T[10]);
                b = FF(b, c, d, a, M_offset_11, 22, T[11]);
                a = FF(a, b, c, d, M_offset_12, 7, T[12]);
                d = FF(d, a, b, c, M_offset_13, 12, T[13]);
                c = FF(c, d, a, b, M_offset_14, 17, T[14]);
                b = FF(b, c, d, a, M_offset_15, 22, T[15]);

                a = GG(a, b, c, d, M_offset_1, 5, T[16]);
                d = GG(d, a, b, c, M_offset_6, 9, T[17]);
                c = GG(c, d, a, b, M_offset_11, 14, T[18]);
                b = GG(b, c, d, a, M_offset_0, 20, T[19]);
                a = GG(a, b, c, d, M_offset_5, 5, T[20]);
                d = GG(d, a, b, c, M_offset_10, 9, T[21]);
                c = GG(c, d, a, b, M_offset_15, 14, T[22]);
                b = GG(b, c, d, a, M_offset_4, 20, T[23]);
                a = GG(a, b, c, d, M_offset_9, 5, T[24]);
                d = GG(d, a, b, c, M_offset_14, 9, T[25]);
                c = GG(c, d, a, b, M_offset_3, 14, T[26]);
                b = GG(b, c, d, a, M_offset_8, 20, T[27]);
                a = GG(a, b, c, d, M_offset_13, 5, T[28]);
                d = GG(d, a, b, c, M_offset_2, 9, T[29]);
                c = GG(c, d, a, b, M_offset_7, 14, T[30]);
                b = GG(b, c, d, a, M_offset_12, 20, T[31]);

                a = HH(a, b, c, d, M_offset_5, 4, T[32]);
                d = HH(d, a, b, c, M_offset_8, 11, T[33]);
                c = HH(c, d, a, b, M_offset_11, 16, T[34]);
                b = HH(b, c, d, a, M_offset_14, 23, T[35]);
                a = HH(a, b, c, d, M_offset_1, 4, T[36]);
                d = HH(d, a, b, c, M_offset_4, 11, T[37]);
                c = HH(c, d, a, b, M_offset_7, 16, T[38]);
                b = HH(b, c, d, a, M_offset_10, 23, T[39]);
                a = HH(a, b, c, d, M_offset_13, 4, T[40]);
                d = HH(d, a, b, c, M_offset_0, 11, T[41]);
                c = HH(c, d, a, b, M_offset_3, 16, T[42]);
                b = HH(b, c, d, a, M_offset_6, 23, T[43]);
                a = HH(a, b, c, d, M_offset_9, 4, T[44]);
                d = HH(d, a, b, c, M_offset_12, 11, T[45]);
                c = HH(c, d, a, b, M_offset_15, 16, T[46]);
                b = HH(b, c, d, a, M_offset_2, 23, T[47]);

                a = II(a, b, c, d, M_offset_0, 6, T[48]);
                d = II(d, a, b, c, M_offset_7, 10, T[49]);
                c = II(c, d, a, b, M_offset_14, 15, T[50]);
                b = II(b, c, d, a, M_offset_5, 21, T[51]);
                a = II(a, b, c, d, M_offset_12, 6, T[52]);
                d = II(d, a, b, c, M_offset_3, 10, T[53]);
                c = II(c, d, a, b, M_offset_10, 15, T[54]);
                b = II(b, c, d, a, M_offset_1, 21, T[55]);
                a = II(a, b, c, d, M_offset_8, 6, T[56]);
                d = II(d, a, b, c, M_offset_15, 10, T[57]);
                c = II(c, d, a, b, M_offset_6, 15, T[58]);
                b = II(b, c, d, a, M_offset_13, 21, T[59]);
                a = II(a, b, c, d, M_offset_4, 6, T[60]);
                d = II(d, a, b, c, M_offset_11, 10, T[61]);
                c = II(c, d, a, b, M_offset_2, 15, T[62]);
                b = II(b, c, d, a, M_offset_9, 21, T[63]);

                H[0] = (H[0] + a) | 0;
                H[1] = (H[1] + b) | 0;
                H[2] = (H[2] + c) | 0;
                H[3] = (H[3] + d) | 0;
            },

            _doFinalize: function () {
                var data = this._data;
                var dataWords = data.words;

                var nBitsTotal = this._nDataBytes * 8;
                var nBitsLeft = data.sigBytes * 8;

                dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));

                var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
                var nBitsTotalL = nBitsTotal;
                dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] =
                    (((nBitsTotalH << 8) | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
                    (((nBitsTotalH << 24) | (nBitsTotalH >>> 8)) & 0xff00ff00);
                dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] =
                    (((nBitsTotalL << 8) | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
                    (((nBitsTotalL << 24) | (nBitsTotalL >>> 8)) & 0xff00ff00);

                data.sigBytes = (dataWords.length + 1) * 4;

                this._process();

                var hash = this._hash;
                var H = hash.words;

                for (var i = 0; i < 4; i++) {
                    var H_i = H[i];

                    H[i] =
                        (((H_i << 8) | (H_i >>> 24)) & 0x00ff00ff) |
                        (((H_i << 24) | (H_i >>> 8)) & 0xff00ff00);
                }

                return hash;
            },

            clone: function () {
                var clone = Hasher.clone.call(this);
                clone._hash = this._hash.clone();

                return clone;
            },
        }));

        function FF(a, b, c, d, x, s, t) {
            var n = a + ((b & c) | (~b & d)) + x + t;
            return ((n << s) | (n >>> (32 - s))) + b;
        }

        function GG(a, b, c, d, x, s, t) {
            var n = a + ((b & d) | (c & ~d)) + x + t;
            return ((n << s) | (n >>> (32 - s))) + b;
        }

        function HH(a, b, c, d, x, s, t) {
            var n = a + (b ^ c ^ d) + x + t;
            return ((n << s) | (n >>> (32 - s))) + b;
        }

        function II(a, b, c, d, x, s, t) {
            var n = a + (c ^ (b | ~d)) + x + t;
            return ((n << s) | (n >>> (32 - s))) + b;
        }
        C.MD5 = Hasher._createHelper(MD5);
        C.HmacMD5 = Hasher._createHmacHelper(MD5);
    })(Math);
    return CryptoJS.MD5;
})();
(function () {
    (function () {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var C_algo = C.algo;
        var MD5 = C_algo.MD5;
        var EvpKDF = (C_algo.EvpKDF = Base.extend({
            cfg: Base.extend({
                keySize: 128 / 32,
                hasher: MD5,
                iterations: 1,
            }),
            init: function (cfg) {
                this.cfg = this.cfg.extend(cfg);
            },
            compute: function (password, salt) {
                var cfg = this.cfg;

                var hasher = cfg.hasher.create();

                var derivedKey = WordArray.create();

                var derivedKeyWords = derivedKey.words;
                var keySize = cfg.keySize;
                var iterations = cfg.iterations;

                while (derivedKeyWords.length < keySize) {
                    if (block) {
                        hasher.update(block);
                    }
                    var block = hasher.update(password).finalize(salt);
                    hasher.reset();

                    for (var i = 1; i < iterations; i++) {
                        block = hasher.finalize(block);
                        hasher.reset();
                    }

                    derivedKey.concat(block);
                }
                derivedKey.sigBytes = keySize * 4;

                return derivedKey;
            },
        }));
        C.EvpKDF = function (password, salt, cfg) {
            return EvpKDF.create(cfg).compute(password, salt);
        };
    })();
    return CryptoJS.EvpKDF;
})();
(function () {
    CryptoJS.lib.Cipher ||
        (function (undefined) {
            var C = CryptoJS;
            var C_lib = C.lib;
            var Base = C_lib.Base;
            var WordArray = C_lib.WordArray;
            var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
            var C_enc = C.enc;
            var Utf8 = C_enc.Utf8;
            var Base64 = C_enc.Base64;
            var C_algo = C.algo;
            var EvpKDF = C_algo.EvpKDF;
            var Cipher = (C_lib.Cipher = BufferedBlockAlgorithm.extend({
                cfg: Base.extend(),
                createEncryptor: function (key, cfg) {
                    return this.create(this._ENC_XFORM_MODE, key, cfg);
                },
                createDecryptor: function (key, cfg) {
                    return this.create(this._DEC_XFORM_MODE, key, cfg);
                },
                init: function (xformMode, key, cfg) {
                    this.cfg = this.cfg.extend(cfg);

                    this._xformMode = xformMode;
                    this._key = key;

                    this.reset();
                },

                reset: function () {
                    BufferedBlockAlgorithm.reset.call(this);

                    this._doReset();
                },
                process: function (dataUpdate) {
                    this._append(dataUpdate);

                    return this._process();
                },

                finalize: function (dataUpdate) {
                    if (dataUpdate) {
                        this._append(dataUpdate);
                    }

                    var finalProcessedData = this._doFinalize();

                    return finalProcessedData;
                },

                keySize: 128 / 32,

                ivSize: 128 / 32,

                _ENC_XFORM_MODE: 1,

                _DEC_XFORM_MODE: 2,
                _createHelper: (function () {
                    function selectCipherStrategy(key) {
                        if (typeof key == "string") {
                            return PasswordBasedCipher;
                        } else {
                            return SerializableCipher;
                        }
                    }

                    return function (cipher) {
                        return {
                            encrypt: function (message, key, cfg) {
                                return selectCipherStrategy(key).encrypt(
                                    cipher,
                                    message,
                                    key,
                                    cfg
                                );
                            },

                            decrypt: function (ciphertext, key, cfg) {
                                return selectCipherStrategy(key).decrypt(
                                    cipher,
                                    ciphertext,
                                    key,
                                    cfg
                                );
                            },
                        };
                    };
                })(),
            }));
            var StreamCipher = (C_lib.StreamCipher = Cipher.extend({
                _doFinalize: function () {
                    var finalProcessedBlocks = this._process(!!"flush");

                    return finalProcessedBlocks;
                },

                blockSize: 1,
            }));
            var C_mode = (C.mode = {});

            var BlockCipherMode = (C_lib.BlockCipherMode = Base.extend({
                createEncryptor: function (cipher, iv) {
                    return this.Encryptor.create(cipher, iv);
                },

                createDecryptor: function (cipher, iv) {
                    return this.Decryptor.create(cipher, iv);
                },
                init: function (cipher, iv) {
                    this._cipher = cipher;
                    this._iv = iv;
                },
            }));
            var CBC = (C_mode.CBC = (function () {
                var CBC = BlockCipherMode.extend();
                CBC.Encryptor = CBC.extend({
                    processBlock: function (words, offset) {
                        var cipher = this._cipher;
                        var blockSize = cipher.blockSize;

                        xorBlock.call(this, words, offset, blockSize);
                        cipher.encryptBlock(words, offset);

                        this._prevBlock = words.slice(
                            offset,
                            offset + blockSize
                        );
                    },
                });
                CBC.Decryptor = CBC.extend({
                    processBlock: function (words, offset) {
                        var cipher = this._cipher;
                        var blockSize = cipher.blockSize;

                        var thisBlock = words.slice(offset, offset + blockSize);

                        cipher.decryptBlock(words, offset);
                        xorBlock.call(this, words, offset, blockSize);

                        this._prevBlock = thisBlock;
                    },
                });

                function xorBlock(words, offset, blockSize) {
                    var iv = this._iv;

                    if (iv) {
                        var block = iv;

                        this._iv = undefined;
                    } else {
                        var block = this._prevBlock;
                    }

                    for (var i = 0; i < blockSize; i++) {
                        words[offset + i] ^= block[i];
                    }
                }

                return CBC;
            })());
            var C_pad = (C.pad = {});
            var Pkcs7 = (C_pad.Pkcs7 = {
                pad: function (data, blockSize) {
                    var blockSizeBytes = blockSize * 4;

                    var nPaddingBytes =
                        blockSizeBytes - (data.sigBytes % blockSizeBytes);

                    var paddingWord =
                        (nPaddingBytes << 24) |
                        (nPaddingBytes << 16) |
                        (nPaddingBytes << 8) |
                        nPaddingBytes;

                    var paddingWords = [];
                    for (var i = 0; i < nPaddingBytes; i += 4) {
                        paddingWords.push(paddingWord);
                    }
                    var padding = WordArray.create(paddingWords, nPaddingBytes);

                    data.concat(padding);
                },
                unpad: function (data) {
                    var nPaddingBytes =
                        data.words[(data.sigBytes - 1) >>> 2] & 0xff;

                    data.sigBytes -= nPaddingBytes;
                },
            });
            var BlockCipher = (C_lib.BlockCipher = Cipher.extend({
                cfg: Cipher.cfg.extend({
                    mode: CBC,
                    padding: Pkcs7,
                }),

                reset: function () {
                    Cipher.reset.call(this);

                    var cfg = this.cfg;
                    var iv = cfg.iv;
                    var mode = cfg.mode;

                    if (this._xformMode == this._ENC_XFORM_MODE) {
                        var modeCreator = mode.createEncryptor;
                    } else {
                        var modeCreator = mode.createDecryptor;
                        this._minBufferSize = 1;
                    }

                    if (this._mode && this._mode.__creator == modeCreator) {
                        this._mode.init(this, iv && iv.words);
                    } else {
                        this._mode = modeCreator.call(
                            mode,
                            this,
                            iv && iv.words
                        );
                        this._mode.__creator = modeCreator;
                    }
                },

                _doProcessBlock: function (words, offset) {
                    this._mode.processBlock(words, offset);
                },

                _doFinalize: function () {
                    var padding = this.cfg.padding;

                    if (this._xformMode == this._ENC_XFORM_MODE) {
                        padding.pad(this._data, this.blockSize);

                        var finalProcessedBlocks = this._process(!!"flush");
                    } else {
                        var finalProcessedBlocks = this._process(!!"flush");

                        padding.unpad(finalProcessedBlocks);
                    }

                    return finalProcessedBlocks;
                },

                blockSize: 128 / 32,
            }));
            var CipherParams = (C_lib.CipherParams = Base.extend({
                init: function (cipherParams) {
                    this.mixIn(cipherParams);
                },
                toString: function (formatter) {
                    return (formatter || this.formatter).stringify(this);
                },
            }));

            var C_format = (C.format = {});
            var OpenSSLFormatter = (C_format.OpenSSL = {
                stringify: function (cipherParams) {
                    var ciphertext = cipherParams.ciphertext;
                    var salt = cipherParams.salt;

                    if (salt) {
                        var wordArray = WordArray.create([
                            0x53616c74, 0x65645f5f,
                        ])
                            .concat(salt)
                            .concat(ciphertext);
                    } else {
                        var wordArray = ciphertext;
                    }

                    return wordArray.toString(Base64);
                },
                parse: function (openSSLStr) {
                    var ciphertext = Base64.parse(openSSLStr);

                    var ciphertextWords = ciphertext.words;

                    if (
                        ciphertextWords[0] == 0x53616c74 &&
                        ciphertextWords[1] == 0x65645f5f
                    ) {
                        var salt = WordArray.create(
                            ciphertextWords.slice(2, 4)
                        );

                        ciphertextWords.splice(0, 4);
                        ciphertext.sigBytes -= 16;
                    }

                    return CipherParams.create({
                        ciphertext: ciphertext,
                        salt: salt,
                    });
                },
            });
            var SerializableCipher = (C_lib.SerializableCipher = Base.extend({
                cfg: Base.extend({
                    format: OpenSSLFormatter,
                }),
                encrypt: function (cipher, message, key, cfg) {
                    cfg = this.cfg.extend(cfg);

                    var encryptor = cipher.createEncryptor(key, cfg);
                    var ciphertext = encryptor.finalize(message);

                    var cipherCfg = encryptor.cfg;

                    return CipherParams.create({
                        ciphertext: ciphertext,
                        key: key,
                        iv: cipherCfg.iv,
                        algorithm: cipher,
                        mode: cipherCfg.mode,
                        padding: cipherCfg.padding,
                        blockSize: cipher.blockSize,
                        formatter: cfg.format,
                    });
                },
                decrypt: function (cipher, ciphertext, key, cfg) {
                    cfg = this.cfg.extend(cfg);

                    ciphertext = this._parse(ciphertext, cfg.format);

                    var plaintext = cipher
                        .createDecryptor(key, cfg)
                        .finalize(ciphertext.ciphertext);

                    return plaintext;
                },
                _parse: function (ciphertext, format) {
                    if (typeof ciphertext == "string") {
                        return format.parse(ciphertext, this);
                    } else {
                        return ciphertext;
                    }
                },
            }));
            var C_kdf = (C.kdf = {});
            var OpenSSLKdf = (C_kdf.OpenSSL = {
                execute: function (password, keySize, ivSize, salt) {
                    if (!salt) {
                        salt = WordArray.random(64 / 8);
                    }

                    var key = EvpKDF.create({
                        keySize: keySize + ivSize,
                    }).compute(password, salt);

                    var iv = WordArray.create(
                        key.words.slice(keySize),
                        ivSize * 4
                    );
                    key.sigBytes = keySize * 4;

                    return CipherParams.create({
                        key: key,
                        iv: iv,
                        salt: salt,
                    });
                },
            });
            var PasswordBasedCipher = (C_lib.PasswordBasedCipher =
                SerializableCipher.extend({
                    cfg: SerializableCipher.cfg.extend({
                        kdf: OpenSSLKdf,
                    }),
                    encrypt: function (cipher, message, password, cfg) {
                        cfg = this.cfg.extend(cfg);

                        var derivedParams = cfg.kdf.execute(
                            password,
                            cipher.keySize,
                            cipher.ivSize
                        );

                        cfg.iv = derivedParams.iv;

                        var ciphertext = SerializableCipher.encrypt.call(
                            this,
                            cipher,
                            message,
                            derivedParams.key,
                            cfg
                        );

                        ciphertext.mixIn(derivedParams);

                        return ciphertext;
                    },
                    decrypt: function (cipher, ciphertext, password, cfg) {
                        cfg = this.cfg.extend(cfg);

                        ciphertext = this._parse(ciphertext, cfg.format);

                        var derivedParams = cfg.kdf.execute(
                            password,
                            cipher.keySize,
                            cipher.ivSize,
                            ciphertext.salt
                        );

                        cfg.iv = derivedParams.iv;

                        var plaintext = SerializableCipher.decrypt.call(
                            this,
                            cipher,
                            ciphertext,
                            derivedParams.key,
                            cfg
                        );

                        return plaintext;
                    },
                }));
        })();
})();
(function () {
    (function () {
        var C = CryptoJS;
        var C_lib = C.lib;
        var BlockCipher = C_lib.BlockCipher;
        var C_algo = C.algo;
        var SBOX = [];
        var INV_SBOX = [];
        var SUB_MIX_0 = [];
        var SUB_MIX_1 = [];
        var SUB_MIX_2 = [];
        var SUB_MIX_3 = [];
        var INV_SUB_MIX_0 = [];
        var INV_SUB_MIX_1 = [];
        var INV_SUB_MIX_2 = [];
        var INV_SUB_MIX_3 = [];
        (function () {
            var d = [];
            for (var i = 0; i < 256; i++) {
                if (i < 128) {
                    d[i] = i << 1;
                } else {
                    d[i] = (i << 1) ^ 0x11b;
                }
            }
            var x = 0;
            var xi = 0;
            for (var i = 0; i < 256; i++) {
                var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
                sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
                SBOX[x] = sx;
                INV_SBOX[sx] = x;
                var x2 = d[x];
                var x4 = d[x2];
                var x8 = d[x4];
                var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
                SUB_MIX_0[x] = (t << 24) | (t >>> 8);
                SUB_MIX_1[x] = (t << 16) | (t >>> 16);
                SUB_MIX_2[x] = (t << 8) | (t >>> 24);
                SUB_MIX_3[x] = t;
                var t =
                    (x8 * 0x1010101) ^
                    (x4 * 0x10001) ^
                    (x2 * 0x101) ^
                    (x * 0x1010100);
                INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
                INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
                INV_SUB_MIX_2[sx] = (t << 8) | (t >>> 24);
                INV_SUB_MIX_3[sx] = t;
                if (!x) {
                    x = xi = 1;
                } else {
                    x = x2 ^ d[d[d[x8 ^ x2]]];
                    xi ^= d[d[xi]];
                }
            }
        })();
        var RCON = [
            0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36,
        ];
        var AES = (C_algo.AES = BlockCipher.extend({
            _doReset: function () {
                if (this._nRounds && this._keyPriorReset === this._key) {
                    return;
                }
                var key = (this._keyPriorReset = this._key);
                var keyWords = key.words;
                var keySize = key.sigBytes / 4;
                var nRounds = (this._nRounds = keySize + 6);
                var ksRows = (nRounds + 1) * 4;
                var keySchedule = (this._keySchedule = []);
                for (var ksRow = 0; ksRow < ksRows; ksRow++) {
                    if (ksRow < keySize) {
                        keySchedule[ksRow] = keyWords[ksRow];
                    } else {
                        var t = keySchedule[ksRow - 1];

                        if (!(ksRow % keySize)) {
                            t = (t << 8) | (t >>> 24);
                            t =
                                (SBOX[t >>> 24] << 24) |
                                (SBOX[(t >>> 16) & 0xff] << 16) |
                                (SBOX[(t >>> 8) & 0xff] << 8) |
                                SBOX[t & 0xff];
                            t ^= RCON[(ksRow / keySize) | 0] << 24;
                        } else if (keySize > 6 && ksRow % keySize == 4) {
                            t =
                                (SBOX[t >>> 24] << 24) |
                                (SBOX[(t >>> 16) & 0xff] << 16) |
                                (SBOX[(t >>> 8) & 0xff] << 8) |
                                SBOX[t & 0xff];
                        }

                        keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
                    }
                }
                var invKeySchedule = (this._invKeySchedule = []);
                for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
                    var ksRow = ksRows - invKsRow;

                    if (invKsRow % 4) {
                        var t = keySchedule[ksRow];
                    } else {
                        var t = keySchedule[ksRow - 4];
                    }

                    if (invKsRow < 4 || ksRow <= 4) {
                        invKeySchedule[invKsRow] = t;
                    } else {
                        invKeySchedule[invKsRow] =
                            INV_SUB_MIX_0[SBOX[t >>> 24]] ^
                            INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
                            INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^
                            INV_SUB_MIX_3[SBOX[t & 0xff]];
                    }
                }
            },

            encryptBlock: function (M, offset) {
                this._doCryptBlock(
                    M,
                    offset,
                    this._keySchedule,
                    SUB_MIX_0,
                    SUB_MIX_1,
                    SUB_MIX_2,
                    SUB_MIX_3,
                    SBOX
                );
            },

            decryptBlock: function (M, offset) {
                var t = M[offset + 1];
                M[offset + 1] = M[offset + 3];
                M[offset + 3] = t;

                this._doCryptBlock(
                    M,
                    offset,
                    this._invKeySchedule,
                    INV_SUB_MIX_0,
                    INV_SUB_MIX_1,
                    INV_SUB_MIX_2,
                    INV_SUB_MIX_3,
                    INV_SBOX
                );
                var t = M[offset + 1];
                M[offset + 1] = M[offset + 3];
                M[offset + 3] = t;
            },

            _doCryptBlock: function (
                M,
                offset,
                keySchedule,
                SUB_MIX_0,
                SUB_MIX_1,
                SUB_MIX_2,
                SUB_MIX_3,
                SBOX
            ) {
                var nRounds = this._nRounds;
                var s0 = M[offset] ^ keySchedule[0];
                var s1 = M[offset + 1] ^ keySchedule[1];
                var s2 = M[offset + 2] ^ keySchedule[2];
                var s3 = M[offset + 3] ^ keySchedule[3];
                var ksRow = 4;
                for (var round = 1; round < nRounds; round++) {
                    var t0 =
                        SUB_MIX_0[s0 >>> 24] ^
                        SUB_MIX_1[(s1 >>> 16) & 0xff] ^
                        SUB_MIX_2[(s2 >>> 8) & 0xff] ^
                        SUB_MIX_3[s3 & 0xff] ^
                        keySchedule[ksRow++];
                    var t1 =
                        SUB_MIX_0[s1 >>> 24] ^
                        SUB_MIX_1[(s2 >>> 16) & 0xff] ^
                        SUB_MIX_2[(s3 >>> 8) & 0xff] ^
                        SUB_MIX_3[s0 & 0xff] ^
                        keySchedule[ksRow++];
                    var t2 =
                        SUB_MIX_0[s2 >>> 24] ^
                        SUB_MIX_1[(s3 >>> 16) & 0xff] ^
                        SUB_MIX_2[(s0 >>> 8) & 0xff] ^
                        SUB_MIX_3[s1 & 0xff] ^
                        keySchedule[ksRow++];
                    var t3 =
                        SUB_MIX_0[s3 >>> 24] ^
                        SUB_MIX_1[(s0 >>> 16) & 0xff] ^
                        SUB_MIX_2[(s1 >>> 8) & 0xff] ^
                        SUB_MIX_3[s2 & 0xff] ^
                        keySchedule[ksRow++];
                    s0 = t0;
                    s1 = t1;
                    s2 = t2;
                    s3 = t3;
                }
                var t0 =
                    ((SBOX[s0 >>> 24] << 24) |
                        (SBOX[(s1 >>> 16) & 0xff] << 16) |
                        (SBOX[(s2 >>> 8) & 0xff] << 8) |
                        SBOX[s3 & 0xff]) ^
                    keySchedule[ksRow++];
                var t1 =
                    ((SBOX[s1 >>> 24] << 24) |
                        (SBOX[(s2 >>> 16) & 0xff] << 16) |
                        (SBOX[(s3 >>> 8) & 0xff] << 8) |
                        SBOX[s0 & 0xff]) ^
                    keySchedule[ksRow++];
                var t2 =
                    ((SBOX[s2 >>> 24] << 24) |
                        (SBOX[(s3 >>> 16) & 0xff] << 16) |
                        (SBOX[(s0 >>> 8) & 0xff] << 8) |
                        SBOX[s1 & 0xff]) ^
                    keySchedule[ksRow++];
                var t3 =
                    ((SBOX[s3 >>> 24] << 24) |
                        (SBOX[(s0 >>> 16) & 0xff] << 16) |
                        (SBOX[(s1 >>> 8) & 0xff] << 8) |
                        SBOX[s2 & 0xff]) ^
                    keySchedule[ksRow++];
                M[offset] = t0;
                M[offset + 1] = t1;
                M[offset + 2] = t2;
                M[offset + 3] = t3;
            },

            keySize: 256 / 32,
        }));
        C.AES = BlockCipher._createHelper(AES);
    })();
    return CryptoJS.AES;
})(); /*
 CryptoJS v3.1.9
 code.google.com/p/crypto-js
 (c) 2009-2013 by Jeff Mott. All rights reserved.
 code.google.com/p/crypto-js/wiki/License
 */
(function () {
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var C_enc = C.enc;
    var Utf8 = C_enc.Utf8;
    var C_algo = C.algo;

    var HMAC = (C_algo.HMAC = Base.extend({
        init: function (hasher, key) {
            hasher = this._hasher = new hasher.init();

            if (typeof key == "string") {
                key = Utf8.parse(key);
            }

            var hasherBlockSize = hasher.blockSize;
            var hasherBlockSizeBytes = hasherBlockSize * 4;

            if (key.sigBytes > hasherBlockSizeBytes) {
                key = hasher.finalize(key);
            }

            key.clamp();

            var oKey = (this._oKey = key.clone());
            var iKey = (this._iKey = key.clone());

            var oKeyWords = oKey.words;
            var iKeyWords = iKey.words;

            for (var i = 0; i < hasherBlockSize; i++) {
                oKeyWords[i] ^= 0x5c5c5c5c;
                iKeyWords[i] ^= 0x36363636;
            }
            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

            this.reset();
        },
        reset: function () {
            var hasher = this._hasher;

            hasher.reset();
            hasher.update(this._iKey);
        },
        update: function (messageUpdate) {
            this._hasher.update(messageUpdate);

            return this;
        },

        finalize: function (messageUpdate) {
            var hasher = this._hasher;

            var innerHash = hasher.finalize(messageUpdate);
            hasher.reset();
            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

            return hmac;
        },
    }));
})();
(function (Math) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_algo = C.algo;

    // Initialization and round constants tables
    var H = [];
    var K = [];

    // Compute constants
    (function () {
        function isPrime(n) {
            var sqrtN = Math.sqrt(n);
            for (var factor = 2; factor <= sqrtN; factor++) {
                if (!(n % factor)) {
                    return false;
                }
            }

            return true;
        }

        function getFractionalBits(n) {
            return ((n - (n | 0)) * 0x100000000) | 0;
        }

        var n = 2;
        var nPrime = 0;
        while (nPrime < 64) {
            if (isPrime(n)) {
                if (nPrime < 8) {
                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
                }
                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

                nPrime++;
            }

            n++;
        }
    })();

    // Reusable object
    var W = [];

    /**
     * SHA-256 hash algorithm.
     */
    var SHA256 = (C_algo.SHA256 = Hasher.extend({
        _doReset: function () {
            this._hash = new WordArray.init(H.slice(0));
        },

        _doProcessBlock: function (M, offset) {
            // Shortcut
            var H = this._hash.words;

            // Working variables
            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            var e = H[4];
            var f = H[5];
            var g = H[6];
            var h = H[7];

            // Computation
            for (var i = 0; i < 64; i++) {
                if (i < 16) {
                    W[i] = M[offset + i] | 0;
                } else {
                    var gamma0x = W[i - 15];
                    var gamma0 =
                        ((gamma0x << 25) | (gamma0x >>> 7)) ^
                        ((gamma0x << 14) | (gamma0x >>> 18)) ^
                        (gamma0x >>> 3);

                    var gamma1x = W[i - 2];
                    var gamma1 =
                        ((gamma1x << 15) | (gamma1x >>> 17)) ^
                        ((gamma1x << 13) | (gamma1x >>> 19)) ^
                        (gamma1x >>> 10);

                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
                }

                var ch = (e & f) ^ (~e & g);
                var maj = (a & b) ^ (a & c) ^ (b & c);

                var sigma0 =
                    ((a << 30) | (a >>> 2)) ^
                    ((a << 19) | (a >>> 13)) ^
                    ((a << 10) | (a >>> 22));
                var sigma1 =
                    ((e << 26) | (e >>> 6)) ^
                    ((e << 21) | (e >>> 11)) ^
                    ((e << 7) | (e >>> 25));

                var t1 = h + sigma1 + ch + K[i] + W[i];
                var t2 = sigma0 + maj;

                h = g;
                g = f;
                f = e;
                e = (d + t1) | 0;
                d = c;
                c = b;
                b = a;
                a = (t1 + t2) | 0;
            }

            // Intermediate hash value
            H[0] = (H[0] + a) | 0;
            H[1] = (H[1] + b) | 0;
            H[2] = (H[2] + c) | 0;
            H[3] = (H[3] + d) | 0;
            H[4] = (H[4] + e) | 0;
            H[5] = (H[5] + f) | 0;
            H[6] = (H[6] + g) | 0;
            H[7] = (H[7] + h) | 0;
        },

        _doFinalize: function () {
            // Shortcuts
            var data = this._data;
            var dataWords = data.words;

            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;

            // Add padding
            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));
            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(
                nBitsTotal / 0x100000000
            );
            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
            data.sigBytes = dataWords.length * 4;

            // Hash final blocks
            this._process();

            // Return final computed hash
            return this._hash;
        },

        clone: function () {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();

            return clone;
        },
    }));
    C.SHA256 = Hasher._createHelper(SHA256);
    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
})(Math);

(function () {
    return CryptoJS.HmacSHA256;
})(); /*
 CryptoJS v3.1.9
 code.google.com/p/crypto-js
 (c) 2009-2013 by Jeff Mott. All rights reserved.
 code.google.com/p/crypto-js/wiki/License
 */
(function () {
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_algo = C.algo;
    var W = [];
    var SHA1 = (C_algo.SHA1 = Hasher.extend({
        _doReset: function () {
            this._hash = new WordArray.init([
                0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0,
            ]);
        },

        _doProcessBlock: function (M, offset) {
            var H = this._hash.words;
            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            var e = H[4];
            for (var i = 0; i < 80; i++) {
                if (i < 16) {
                    W[i] = M[offset + i] | 0;
                } else {
                    var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
                    W[i] = (n << 1) | (n >>> 31);
                }

                var t = ((a << 5) | (a >>> 27)) + e + W[i];
                if (i < 20) {
                    t += ((b & c) | (~b & d)) + 0x5a827999;
                } else if (i < 40) {
                    t += (b ^ c ^ d) + 0x6ed9eba1;
                } else if (i < 60) {
                    t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
                } /* if (i < 80) */ else {
                    t += (b ^ c ^ d) - 0x359d3e2a;
                }

                e = d;
                d = c;
                c = (b << 30) | (b >>> 2);
                b = a;
                a = t;
            }

            H[0] = (H[0] + a) | 0;
            H[1] = (H[1] + b) | 0;
            H[2] = (H[2] + c) | 0;
            H[3] = (H[3] + d) | 0;
            H[4] = (H[4] + e) | 0;
        },

        _doFinalize: function () {
            var data = this._data;
            var dataWords = data.words;

            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;

            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - (nBitsLeft % 32));
            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(
                nBitsTotal / 0x100000000
            );
            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
            data.sigBytes = dataWords.length * 4;

            this._process();

            return this._hash;
        },

        clone: function () {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();

            return clone;
        },
    }));

    C.SHA1 = Hasher._createHelper(SHA1);
    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
})();
(function () {
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var C_enc = C.enc;
    var Utf8 = C_enc.Utf8;
    var C_algo = C.algo;

    var HMAC = (C_algo.HMAC = Base.extend({
        init: function (hasher, key) {
            hasher = this._hasher = new hasher.init();

            if (typeof key == "string") {
                key = Utf8.parse(key);
            }

            var hasherBlockSize = hasher.blockSize;
            var hasherBlockSizeBytes = hasherBlockSize * 4;

            if (key.sigBytes > hasherBlockSizeBytes) {
                key = hasher.finalize(key);
            }

            key.clamp();

            var oKey = (this._oKey = key.clone());
            var iKey = (this._iKey = key.clone());

            var oKeyWords = oKey.words;
            var iKeyWords = iKey.words;

            for (var i = 0; i < hasherBlockSize; i++) {
                oKeyWords[i] ^= 0x5c5c5c5c;
                iKeyWords[i] ^= 0x36363636;
            }
            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

            this.reset();
        },
        reset: function () {
            var hasher = this._hasher;

            hasher.reset();
            hasher.update(this._iKey);
        },
        update: function (messageUpdate) {
            this._hasher.update(messageUpdate);

            return this;
        },

        finalize: function (messageUpdate) {
            var hasher = this._hasher;

            var innerHash = hasher.finalize(messageUpdate);
            hasher.reset();
            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

            return hmac;
        },
    }));
})();
(function () {
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var WordArray = C_lib.WordArray;
    var C_algo = C.algo;
    var SHA1 = C_algo.SHA1;
    var HMAC = C_algo.HMAC;
    var PBKDF2 = (C_algo.PBKDF2 = Base.extend({
        cfg: Base.extend({
            keySize: 128 / 32,
            hasher: SHA1,
            iterations: 1,
        }),
        init: function (cfg) {
            this.cfg = this.cfg.extend(cfg);
        },
        compute: function (password, salt) {
            var cfg = this.cfg;

            var hmac = HMAC.create(cfg.hasher, password);

            var derivedKey = WordArray.create();
            var blockIndex = WordArray.create([0x00000001]);

            var derivedKeyWords = derivedKey.words;
            var blockIndexWords = blockIndex.words;
            var keySize = cfg.keySize;
            var iterations = cfg.iterations;

            while (derivedKeyWords.length < keySize) {
                var block = hmac.update(salt).finalize(blockIndex);
                hmac.reset();

                var blockWords = block.words;
                var blockWordsLength = blockWords.length;

                var intermediate = block;
                for (var i = 1; i < iterations; i++) {
                    intermediate = hmac.finalize(intermediate);
                    hmac.reset();

                    var intermediateWords = intermediate.words;

                    for (var j = 0; j < blockWordsLength; j++) {
                        blockWords[j] ^= intermediateWords[j];
                    }
                }

                derivedKey.concat(block);
                blockIndexWords[0]++;
            }
            derivedKey.sigBytes = keySize * 4;

            return derivedKey;
        },
    }));
    C.PBKDF2 = function (password, salt, cfg) {
        return PBKDF2.create(cfg).compute(password, salt);
    };
})(); /*
 SCRAMJS v1.0.1
 Copyright © 2016 Huawei Technologies Co., Ltd. All rights reserved.
 */
(function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var C_algo = C.algo;

    var SHA2 = C_algo.SHA256;
    var HmacSHA2 = C.HmacSHA256;
    var Base = C_lib.Base;

    var SCRAM = (C_algo.SCRAM = Base.extend({
        cfg: Base.extend({
            keySize: 8,
            hasher: SHA2,
            hmac: HmacSHA2,
        }),

        init: function (cfg) {
            this.cfg = this.cfg.extend(cfg);
        },
        /**
         *  return client nonce
         */
        nonce: function () {
            lastNonce = WordArray.random(this.cfg.keySize * 4);
            return lastNonce;
        },
        /**
         * pbkdf2
         */
        saltedPassword: function (password, salt, iterations) {
            return CryptoJS.PBKDF2(password, salt, {
                keySize: this.cfg.keySize,
                iterations: iterations,
                hasher: this.cfg.hasher,
            });
        },
        /**
         *   ClientKey = HMAC(saltPwd, "Client Key")
         */
        clientKey: function (saltPwd) {
            return this.cfg.hmac(saltPwd, "Client Key");
        },
        /**
         *   ServerKey = HMAC(saltPwd, "Server Key")
         */
        serverKey: function (saltPwd) {
            return this.cfg.hmac(saltPwd, "Server Key");
        },
        /**
         *   StoredKey = HASH(ClientKey)
         */
        storedKey: function (clientKey) {
            var hasher = this.cfg.hasher.create();
            hasher.update(clientKey);

            return hasher.finalize();
        },
        /**
         *   Signature = HMAC(StoredKey, AuthMessage)
         */
        signature: function (storedKey, authMessage) {
            return this.cfg.hmac(storedKey, authMessage);
        },
        /**
         *   ClientProof = ClientKey ^ ClientSignature
         */
        clientProof: function (password, salt, iterations, authMessage) {
            var spwd = this.saltedPassword(password, salt, iterations);
            var ckey = this.clientKey(spwd);
            var skey = this.storedKey(ckey);
            var csig = this.signature(skey, authMessage);

            for (var i = 0; i < ckey.sigBytes / 4; i += 1) {
                ckey.words[i] = ckey.words[i] ^ csig.words[i];
            }
            return ckey.toString();
        },
        /**
         *   ServerProof = HMAC(ServerKey, AuthMessage)
         */
        serverProof: function (password, salt, iterations, authMessage) {
            var spwd = this.saltedPassword(password, salt, iterations);
            var skey = this.serverKey(spwd);
            var sig = this.signature(skey, authMessage);
            return sig.toString();
        },
    }));

    /**
     *   var scram = CryptoJS.SCRAM();
     */
    C.SCRAM = function (cfg) {
        return SCRAM.create(cfg);
    };
})();
