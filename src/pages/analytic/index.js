var uy = Object.defineProperty;
var ly = (e, t, r) => t in e ? uy(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var Sn = (e, t, r) => (ly(e, typeof t != "symbol" ? t + "" : t, r), r);
import "../../../assets/js/modulepreload-polyfill.0c213636.js";
import {
    r as R,
    R as ve,
    j as C,
    a as yp,
    b as te,
    F as sn,
    c as ir,
    g as cy,
    d as fy
} from "../../../assets/js/jsx-runtime.099d0a10.js";
import {
    c as kr,
    l as mt,
    G as nt,
    F as hy,
    a as dy,
    h as Or,
    b as py,
    d as bp,
    e as xp,
    f as my,
    g as vy
} from "../../../assets/js/tailwind.db43586d.js";
const za = typeof window > "u" || typeof document > "u";
let St = za ? R.exports.useEffect : R.exports.useLayoutEffect;

function Gt(e) {
    let t = R.exports.useRef(e);
    return St(() => {
        t.current = e
    }, [e]), t
}

function Ua(e) {
    typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch(t => setTimeout(() => {
        throw t
    }))
}

function Jn() {
    let e = [],
        t = [],
        r = {
            enqueue(n) {
                t.push(n)
            },
            addEventListener(n, i, a, o) {
                return n.addEventListener(i, a, o), r.add(() => n.removeEventListener(i, a, o))
            },
            requestAnimationFrame(...n) {
                let i = requestAnimationFrame(...n);
                return r.add(() => cancelAnimationFrame(i))
            },
            nextFrame(...n) {
                return r.requestAnimationFrame(() => r.requestAnimationFrame(...n))
            },
            setTimeout(...n) {
                let i = setTimeout(...n);
                return r.add(() => clearTimeout(i))
            },
            microTask(...n) {
                let i = {
                    current: !0
                };
                return Ua(() => {
                    i.current && n[0]()
                }), r.add(() => {
                    i.current = !1
                })
            },
            add(n) {
                return e.push(n), () => {
                    let i = e.indexOf(n);
                    if (i >= 0) {
                        let [a] = e.splice(i, 1);
                        a()
                    }
                }
            },
            dispose() {
                for (let n of e.splice(0)) n()
            },
            async workQueue() {
                for (let n of t.splice(0)) await n()
            }
        };
    return r
}

function _p() {
    let [e] = R.exports.useState(Jn);
    return R.exports.useEffect(() => () => e.dispose(), [e]), e
}
let Oe = function(e) {
        let t = Gt(e);
        return ve.useCallback((...r) => t.current(...r), [t])
    },
    jo = {
        serverHandoffComplete: !1
    };

function un() {
    let [e, t] = R.exports.useState(jo.serverHandoffComplete);
    return R.exports.useEffect(() => {
        e !== !0 && t(!0)
    }, [e]), R.exports.useEffect(() => {
        jo.serverHandoffComplete === !1 && (jo.serverHandoffComplete = !0)
    }, []), e
}
var Sc;
let gy = 0;

function Oc() {
    return ++gy
}
let yt = (Sc = ve.useId) != null ? Sc : function() {
    let e = un(),
        [t, r] = ve.useState(e ? Oc : null);
    return St(() => {
        t === null && r(Oc())
    }, [t]), t != null ? "" + t : void 0
};

function Re(e, t, ...r) {
    if (e in t) {
        let i = t[e];
        return typeof i == "function" ? i(...r) : i
    }
    let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(i=>`"${i}"`).join(", ")}.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Re), n
}

function Ha(e) {
    return za ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
}
let Ts = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",");
var Et = (e => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Et || {}),
    wp = (e => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(wp || {}),
    yy = (e => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(yy || {});

function il(e = document.body) {
    return e == null ? [] : Array.from(e.querySelectorAll(Ts))
}
var al = (e => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(al || {});

function Sp(e, t = 0) {
    var r;
    return e === ((r = Ha(e)) == null ? void 0 : r.body) ? !1 : Re(t, {
        [0]() {
            return e.matches(Ts)
        },
        [1]() {
            let n = e;
            for (; n !== null;) {
                if (n.matches(Ts)) return !0;
                n = n.parentElement
            }
            return !1
        }
    })
}

function Hr(e) {
    e == null || e.focus({
        preventScroll: !0
    })
}
let by = ["textarea", "input"].join(",");

function xy(e) {
    var t, r;
    return (r = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, by)) != null ? r : !1
}

function _y(e, t = r => r) {
    return e.slice().sort((r, n) => {
        let i = t(r),
            a = t(n);
        if (i === null || a === null) return 0;
        let o = i.compareDocumentPosition(a);
        return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
    })
}

function Ft(e, t, r = !0, n = null) {
    let i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
        a = Array.isArray(e) ? r ? _y(e) : e : il(e);
    n = n != null ? n : i.activeElement;
    let o = (() => {
            if (t & 5) return 1;
            if (t & 10) return -1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
        })(),
        s = (() => {
            if (t & 1) return 0;
            if (t & 2) return Math.max(0, a.indexOf(n)) - 1;
            if (t & 4) return Math.max(0, a.indexOf(n)) + 1;
            if (t & 8) return a.length - 1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
        })(),
        u = t & 32 ? {
            preventScroll: !0
        } : {},
        l = 0,
        c = a.length,
        f;
    do {
        if (l >= c || l + c <= 0) return 0;
        let d = s + l;
        if (t & 16) d = (d + c) % c;
        else {
            if (d < 0) return 3;
            if (d >= c) return 1
        }
        f = a[d], f == null || f.focus(u), l += o
    } while (f !== i.activeElement);
    return t & 6 && xy(f) && f.select(), f.hasAttribute("tabindex") || f.setAttribute("tabindex", "0"), 2
}

function Fo(e, t, r) {
    let n = Gt(t);
    R.exports.useEffect(() => {
        function i(a) {
            n.current(a)
        }
        return document.addEventListener(e, i, r), () => document.removeEventListener(e, i, r)
    }, [e, r])
}

function Op(e, t, r = !0) {
    let n = R.exports.useRef(!1);
    R.exports.useEffect(() => {
        requestAnimationFrame(() => {
            n.current = r
        })
    }, [r]);

    function i(o, s) {
        if (!n.current || o.defaultPrevented) return;
        let u = function c(f) {
                return typeof f == "function" ? c(f()) : Array.isArray(f) || f instanceof Set ? f : [f]
            }(e),
            l = s(o);
        if (l !== null && !!l.getRootNode().contains(l)) {
            for (let c of u) {
                if (c === null) continue;
                let f = c instanceof HTMLElement ? c : c.current;
                if (f != null && f.contains(l)) return
            }
            return !Sp(l, al.Loose) && l.tabIndex !== -1 && o.preventDefault(), t(o, l)
        }
    }
    let a = R.exports.useRef(null);
    Fo("mousedown", o => {
        var s, u;
        n.current && (a.current = ((u = (s = o.composedPath) == null ? void 0 : s.call(o)) == null ? void 0 : u[0]) || o.target)
    }, !0), Fo("click", o => {
        !a.current || (i(o, () => a.current), a.current = null)
    }, !0), Fo("blur", o => i(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
}

function Ac(e) {
    var t;
    if (e.type) return e.type;
    let r = (t = e.as) != null ? t : "button";
    if (typeof r == "string" && r.toLowerCase() === "button") return "button"
}

function wy(e, t) {
    let [r, n] = R.exports.useState(() => Ac(e));
    return St(() => {
        n(Ac(e))
    }, [e.type, e.as]), St(() => {
        r || !t.current || t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && n("button")
    }, [r, t]), r
}
let Ap = Symbol();

function kp(e, t = !0) {
    return Object.assign(e, {
        [Ap]: t
    })
}

function Ze(...e) {
    let t = R.exports.useRef(e);
    R.exports.useEffect(() => {
        t.current = e
    }, [e]);
    let r = Oe(n => {
        for (let i of t.current) i != null && (typeof i == "function" ? i(n) : i.current = n)
    });
    return e.every(n => n == null || (n == null ? void 0 : n[Ap])) ? void 0 : r
}
var lr = (e => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(lr || {}),
    Bt = (e => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Bt || {});

function Je({
    ourProps: e,
    theirProps: t,
    slot: r,
    defaultTag: n,
    features: i,
    visible: a = !0,
    name: o
}) {
    let s = Ep(t, e);
    if (a) return vi(s, r, n, o);
    let u = i != null ? i : 0;
    if (u & 2) {
        let {
            static: l = !1,
            ...c
        } = s;
        if (l) return vi(c, r, n, o)
    }
    if (u & 1) {
        let {
            unmount: l = !0,
            ...c
        } = s;
        return Re(l ? 0 : 1, {
            [0]() {
                return null
            },
            [1]() {
                return vi({
                    ...c,
                    hidden: !0,
                    style: {
                        display: "none"
                    }
                }, r, n, o)
            }
        })
    }
    return vi(s, r, n, o)
}

function vi(e, t = {}, r, n) {
    let {
        as: i = r,
        children: a,
        refName: o = "ref",
        ...s
    } = Bo(e, ["unmount", "static"]), u = e.ref !== void 0 ? {
        [o]: e.ref
    } : {}, l = typeof a == "function" ? a(t) : a;
    s.className && typeof s.className == "function" && (s.className = s.className(t));
    let c = {};
    if (t) {
        let f = !1,
            d = [];
        for (let [m, p] of Object.entries(t)) typeof p == "boolean" && (f = !0), p === !0 && d.push(m);
        f && (c["data-headlessui-state"] = d.join(" "))
    }
    if (i === R.exports.Fragment && Object.keys(kc(s)).length > 0) {
        if (!R.exports.isValidElement(l) || Array.isArray(l) && l.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(s).map(f => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(f => `  - ${f}`).join(`
`)].join(`
`));
        return R.exports.cloneElement(l, Object.assign({}, Ep(l.props, kc(Bo(s, ["ref"]))), c, u, Sy(l.ref, u.ref)))
    }
    return R.exports.createElement(i, Object.assign({}, Bo(s, ["ref"]), i !== R.exports.Fragment && u, i !== R.exports.Fragment && c), l)
}

function Sy(...e) {
    return {
        ref: e.every(t => t == null) ? void 0 : t => {
            for (let r of e) r != null && (typeof r == "function" ? r(t) : r.current = t)
        }
    }
}

function Ep(...e) {
    if (e.length === 0) return {};
    if (e.length === 1) return e[0];
    let t = {},
        r = {};
    for (let n of e)
        for (let i in n) i.startsWith("on") && typeof n[i] == "function" ? (r[i] != null || (r[i] = []), r[i].push(n[i])) : t[i] = n[i];
    if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(r).map(n => [n, void 0])));
    for (let n in r) Object.assign(t, {
        [n](i, ...a) {
            let o = r[n];
            for (let s of o) {
                if ((i instanceof Event || (i == null ? void 0 : i.nativeEvent) instanceof Event) && i.defaultPrevented) return;
                s(i, ...a)
            }
        }
    });
    return t
}

function We(e) {
    var t;
    return Object.assign(R.exports.forwardRef(e), {
        displayName: (t = e.displayName) != null ? t : e.name
    })
}

function kc(e) {
    let t = Object.assign({}, e);
    for (let r in t) t[r] === void 0 && delete t[r];
    return t
}

function Bo(e, t = []) {
    let r = Object.assign({}, e);
    for (let n of t) n in r && delete r[n];
    return r
}

function ol(e) {
    let t = e.parentElement,
        r = null;
    for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (r = t), t = t.parentElement;
    let n = (t == null ? void 0 : t.getAttribute("disabled")) === "";
    return n && Oy(r) ? !1 : n
}

function Oy(e) {
    if (!e) return !1;
    let t = e.previousElementSibling;
    for (; t !== null;) {
        if (t instanceof HTMLLegendElement) return !1;
        t = t.previousElementSibling
    }
    return !0
}
let Ay = "div";
var Er = (e => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Er || {});
let Kr = We(function(e, t) {
        let {
            features: r = 1,
            ...n
        } = e, i = {
            ref: t,
            "aria-hidden": (r & 2) === 2 ? !0 : void 0,
            style: {
                position: "fixed",
                top: 1,
                left: 1,
                width: 1,
                height: 0,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                borderWidth: "0",
                ...(r & 4) === 4 && (r & 2) !== 2 && {
                    display: "none"
                }
            }
        };
        return Je({
            ourProps: i,
            theirProps: n,
            slot: {},
            defaultTag: Ay,
            name: "Hidden"
        })
    }),
    sl = R.exports.createContext(null);
sl.displayName = "OpenClosedContext";
var Ot = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ot || {});

function Qn() {
    return R.exports.useContext(sl)
}

function Tp({
    value: e,
    children: t
}) {
    return ve.createElement(sl.Provider, {
        value: e
    }, t)
}
var jt = (e => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(jt || {});

function Cp(e, t) {
    let r = R.exports.useRef([]),
        n = Oe(e);
    R.exports.useEffect(() => {
        let i = [...r.current];
        for (let [a, o] of t.entries())
            if (r.current[a] !== o) {
                let s = n(t, i);
                return r.current = t, s
            }
    }, [n, ...t])
}

function ky(e, t, r) {
    let n = Gt(t);
    R.exports.useEffect(() => {
        function i(a) {
            n.current(a)
        }
        return window.addEventListener(e, i, r), () => window.removeEventListener(e, i, r)
    }, [e, r])
}
var zt = (e => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(zt || {});

function ul() {
    let e = R.exports.useRef(0);
    return ky("keydown", t => {
        t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0)
    }, !0), e
}

function Wa() {
    let e = R.exports.useRef(!1);
    return St(() => (e.current = !0, () => {
        e.current = !1
    }), []), e
}

function Mr(...e) {
    return R.exports.useMemo(() => Ha(...e), [...e])
}

function Ga(e, t, r, n) {
    let i = Gt(r);
    R.exports.useEffect(() => {
        e = e != null ? e : window;

        function a(o) {
            i.current(o)
        }
        return e.addEventListener(t, a, n), () => e.removeEventListener(t, a, n)
    }, [e, t, n])
}
let Ey = "div";
var Pp = (e => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Pp || {});
let On = Object.assign(We(function(e, t) {
    let r = R.exports.useRef(null),
        n = Ze(r, t),
        {
            initialFocus: i,
            containers: a,
            features: o = 30,
            ...s
        } = e;
    un() || (o = 1);
    let u = Mr(r);
    Ty({
        ownerDocument: u
    }, Boolean(o & 16));
    let l = Cy({
        ownerDocument: u,
        container: r,
        initialFocus: i
    }, Boolean(o & 2));
    Py({
        ownerDocument: u,
        container: r,
        containers: a,
        previousActiveElement: l
    }, Boolean(o & 8));
    let c = ul(),
        f = Oe(() => {
            let m = r.current;
            !m || Re(c.current, {
                [zt.Forwards]: () => Ft(m, Et.First),
                [zt.Backwards]: () => Ft(m, Et.Last)
            })
        }),
        d = {
            ref: n
        };
    return ve.createElement(ve.Fragment, null, Boolean(o & 4) && C(Kr, {
        as: "button",
        type: "button",
        onFocus: f,
        features: Er.Focusable
    }), Je({
        ourProps: d,
        theirProps: s,
        defaultTag: Ey,
        name: "FocusTrap"
    }), Boolean(o & 4) && C(Kr, {
        as: "button",
        type: "button",
        onFocus: f,
        features: Er.Focusable
    }))
}), {
    features: Pp
});

function Ty({
    ownerDocument: e
}, t) {
    let r = R.exports.useRef(null);
    Ga(e == null ? void 0 : e.defaultView, "focusout", i => {
        !t || r.current || (r.current = i.target)
    }, !0), Cp(() => {
        t || ((e == null ? void 0 : e.activeElement) === (e == null ? void 0 : e.body) && Hr(r.current), r.current = null)
    }, [t]);
    let n = R.exports.useRef(!1);
    R.exports.useEffect(() => (n.current = !1, () => {
        n.current = !0, Ua(() => {
            !n.current || (Hr(r.current), r.current = null)
        })
    }), [])
}

function Cy({
    ownerDocument: e,
    container: t,
    initialFocus: r
}, n) {
    let i = R.exports.useRef(null),
        a = Wa();
    return Cp(() => {
        if (!n) return;
        let o = t.current;
        !o || Ua(() => {
            if (!a.current) return;
            let s = e == null ? void 0 : e.activeElement;
            if (r != null && r.current) {
                if ((r == null ? void 0 : r.current) === s) {
                    i.current = s;
                    return
                }
            } else if (o.contains(s)) {
                i.current = s;
                return
            }
            r != null && r.current ? Hr(r.current) : Ft(o, Et.First) === wp.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.current = e == null ? void 0 : e.activeElement
        })
    }, [n]), i
}

function Py({
    ownerDocument: e,
    container: t,
    containers: r,
    previousActiveElement: n
}, i) {
    let a = Wa();
    Ga(e == null ? void 0 : e.defaultView, "focus", o => {
        if (!i || !a.current) return;
        let s = new Set(r == null ? void 0 : r.current);
        s.add(t);
        let u = n.current;
        if (!u) return;
        let l = o.target;
        l && l instanceof HTMLElement ? $y(s, l) ? (n.current = l, Hr(l)) : (o.preventDefault(), o.stopPropagation(), Hr(u)) : Hr(n.current)
    }, !0)
}

function $y(e, t) {
    var r;
    for (let n of e)
        if ((r = n.current) != null && r.contains(t)) return !0;
    return !1
}
let Dr = new Set,
    Qt = new Map;

function Ec(e) {
    e.setAttribute("aria-hidden", "true"), e.inert = !0
}

function Tc(e) {
    let t = Qt.get(e);
    !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert)
}

function My(e, t = !0) {
    St(() => {
        if (!t || !e.current) return;
        let r = e.current,
            n = Ha(r);
        if (n) {
            Dr.add(r);
            for (let i of Qt.keys()) i.contains(r) && (Tc(i), Qt.delete(i));
            return n.querySelectorAll("body > *").forEach(i => {
                if (i instanceof HTMLElement) {
                    for (let a of Dr)
                        if (i.contains(a)) return;
                    Dr.size === 1 && (Qt.set(i, {
                        "aria-hidden": i.getAttribute("aria-hidden"),
                        inert: i.inert
                    }), Ec(i))
                }
            }), () => {
                if (Dr.delete(r), Dr.size > 0) n.querySelectorAll("body > *").forEach(i => {
                    if (i instanceof HTMLElement && !Qt.has(i)) {
                        for (let a of Dr)
                            if (i.contains(a)) return;
                        Qt.set(i, {
                            "aria-hidden": i.getAttribute("aria-hidden"),
                            inert: i.inert
                        }), Ec(i)
                    }
                });
                else
                    for (let i of Qt.keys()) Tc(i), Qt.delete(i)
            }
        }
    }, [t])
}
let $p = R.exports.createContext(!1);

function Iy() {
    return R.exports.useContext($p)
}

function Cs(e) {
    return ve.createElement($p.Provider, {
        value: e.force
    }, e.children)
}

function Ny(e) {
    let t = Iy(),
        r = R.exports.useContext(Mp),
        n = Mr(e),
        [i, a] = R.exports.useState(() => {
            if (!t && r !== null || za) return null;
            let o = n == null ? void 0 : n.getElementById("headlessui-portal-root");
            if (o) return o;
            if (n === null) return null;
            let s = n.createElement("div");
            return s.setAttribute("id", "headlessui-portal-root"), n.body.appendChild(s)
        });
    return R.exports.useEffect(() => {
        i !== null && (n != null && n.body.contains(i) || n == null || n.body.appendChild(i))
    }, [i, n]), R.exports.useEffect(() => {
        t || r !== null && a(r.current)
    }, [r, a, t]), i
}
let Ry = R.exports.Fragment,
    Dy = We(function(e, t) {
        let r = e,
            n = R.exports.useRef(null),
            i = Ze(kp(c => {
                n.current = c
            }), t),
            a = Mr(n),
            o = Ny(n),
            [s] = R.exports.useState(() => {
                var c;
                return za ? null : (c = a == null ? void 0 : a.createElement("div")) != null ? c : null
            }),
            u = un(),
            l = R.exports.useRef(!1);
        return St(() => {
            if (l.current = !1, !(!o || !s)) return o.contains(s) || (s.setAttribute("data-headlessui-portal", ""), o.appendChild(s)), () => {
                l.current = !0, Ua(() => {
                    var c;
                    !l.current || !o || !s || (o.removeChild(s), o.childNodes.length <= 0 && ((c = o.parentElement) == null || c.removeChild(o)))
                })
            }
        }, [o, s]), u ? !o || !s ? null : yp.exports.createPortal(Je({
            ourProps: {
                ref: i
            },
            theirProps: r,
            defaultTag: Ry,
            name: "Portal"
        }), s) : null
    }),
    Ly = R.exports.Fragment,
    Mp = R.exports.createContext(null),
    jy = We(function(e, t) {
        let {
            target: r,
            ...n
        } = e, i = {
            ref: Ze(t)
        };
        return C(Mp.Provider, {
            value: r,
            children: Je({
                ourProps: i,
                theirProps: n,
                defaultTag: Ly,
                name: "Popover.Group"
            })
        })
    }),
    Ps = Object.assign(Dy, {
        Group: jy
    }),
    Ip = R.exports.createContext(null);

function Np() {
    let e = R.exports.useContext(Ip);
    if (e === null) {
        let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
        throw Error.captureStackTrace && Error.captureStackTrace(t, Np), t
    }
    return e
}

function Fy() {
    let [e, t] = R.exports.useState([]);
    return [e.length > 0 ? e.join(" ") : void 0, R.exports.useMemo(() => function(r) {
        let n = Oe(a => (t(o => [...o, a]), () => t(o => {
                let s = o.slice(),
                    u = s.indexOf(a);
                return u !== -1 && s.splice(u, 1), s
            }))),
            i = R.exports.useMemo(() => ({
                register: n,
                slot: r.slot,
                name: r.name,
                props: r.props
            }), [n, r.slot, r.name, r.props]);
        return ve.createElement(Ip.Provider, {
            value: i
        }, r.children)
    }, [t])]
}
let By = "p",
    zy = We(function(e, t) {
        let r = Np(),
            n = `headlessui-description-${yt()}`,
            i = Ze(t);
        St(() => r.register(n), [n, r.register]);
        let a = e,
            o = {
                ref: i,
                ...r.props,
                id: n
            };
        return Je({
            ourProps: o,
            theirProps: a,
            slot: r.slot || {},
            defaultTag: By,
            name: r.name || "Description"
        })
    }),
    ll = R.exports.createContext(() => {});
ll.displayName = "StackContext";
var $s = (e => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))($s || {});

function Uy() {
    return R.exports.useContext(ll)
}

function Hy({
    children: e,
    onUpdate: t,
    type: r,
    element: n,
    enabled: i
}) {
    let a = Uy(),
        o = Oe((...s) => {
            t == null || t(...s), a(...s)
        });
    return St(() => {
        let s = i === void 0 || i === !0;
        return s && o(0, r, n), () => {
            s && o(1, r, n)
        }
    }, [o, r, n, i]), ve.createElement(ll.Provider, {
        value: o
    }, e)
}

function Wy() {
    return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
}
var Gy = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Gy || {}),
    qy = (e => (e[e.SetTitleId = 0] = "SetTitleId", e))(qy || {});
let Vy = {
        [0](e, t) {
            return e.titleId === t.id ? e : {
                ...e,
                titleId: t.id
            }
        }
    },
    Yi = R.exports.createContext(null);
Yi.displayName = "DialogContext";

function ei(e) {
    let t = R.exports.useContext(Yi);
    if (t === null) {
        let r = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(r, ei), r
    }
    return t
}

function Yy(e, t) {
    R.exports.useEffect(() => {
        var r;
        if (!t || !e) return;
        let n = Jn();

        function i(s, u, l) {
            let c = s.style.getPropertyValue(u);
            return Object.assign(s.style, {
                [u]: l
            }), n.add(() => {
                Object.assign(s.style, {
                    [u]: c
                })
            })
        }
        let a = e.documentElement,
            o = ((r = e.defaultView) != null ? r : window).innerWidth - a.clientWidth;
        if (i(a, "overflow", "hidden"), o > 0) {
            let s = a.clientWidth - a.offsetWidth,
                u = o - s;
            i(a, "paddingRight", `${u}px`)
        }
        if (Wy()) {
            let s = window.pageYOffset;
            i(a, "position", "fixed"), i(a, "marginTop", `-${s}px`), i(a, "width", "100%"), n.add(() => window.scrollTo(0, s))
        }
        return n.dispose
    }, [e, t])
}

function Xy(e, t) {
    return Re(t.type, Vy, e, t)
}
let Ky = "div",
    Zy = lr.RenderStrategy | lr.Static,
    Jy = We(function(e, t) {
        let {
            open: r,
            onClose: n,
            initialFocus: i,
            __demoMode: a = !1,
            ...o
        } = e, [s, u] = R.exports.useState(0), l = Qn();
        r === void 0 && l !== null && (r = Re(l, {
            [Ot.Open]: !0,
            [Ot.Closed]: !1
        }));
        let c = R.exports.useRef(new Set),
            f = R.exports.useRef(null),
            d = Ze(f, t),
            m = R.exports.useRef(null),
            p = Mr(f),
            h = e.hasOwnProperty("open") || l !== null,
            v = e.hasOwnProperty("onClose");
        if (!h && !v) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
        if (!h) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
        if (!v) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
        if (typeof r != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${r}`);
        if (typeof n != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${n}`);
        let g = r ? 0 : 1,
            [x, y] = R.exports.useReducer(Xy, {
                titleId: null,
                descriptionId: null,
                panelRef: R.exports.createRef()
            }),
            b = Oe(() => n(!1)),
            _ = Oe(z => y({
                type: 0,
                id: z
            })),
            w = un() ? a ? !1 : g === 0 : !1,
            A = s > 1,
            E = R.exports.useContext(Yi) !== null,
            k = A ? "parent" : "leaf";
        My(f, A ? w : !1), Op(() => {
            var z, B;
            return [...Array.from((z = p == null ? void 0 : p.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? z : []).filter(q => !(!(q instanceof HTMLElement) || q.contains(m.current) || x.panelRef.current && q.contains(x.panelRef.current))), (B = x.panelRef.current) != null ? B : f.current]
        }, b, w && !A), Ga(p == null ? void 0 : p.defaultView, "keydown", z => {
            z.defaultPrevented || z.key === jt.Escape && g === 0 && (A || (z.preventDefault(), z.stopPropagation(), b()))
        }), Yy(p, g === 0 && !E), R.exports.useEffect(() => {
            if (g !== 0 || !f.current) return;
            let z = new IntersectionObserver(B => {
                for (let q of B) q.boundingClientRect.x === 0 && q.boundingClientRect.y === 0 && q.boundingClientRect.width === 0 && q.boundingClientRect.height === 0 && b()
            });
            return z.observe(f.current), () => z.disconnect()
        }, [g, f, b]);
        let [N, I] = Fy(), T = `headlessui-dialog-${yt()}`, M = R.exports.useMemo(() => [{
            dialogState: g,
            close: b,
            setTitleId: _
        }, x], [g, x, b, _]), S = R.exports.useMemo(() => ({
            open: g === 0
        }), [g]), D = {
            ref: d,
            id: T,
            role: "dialog",
            "aria-modal": g === 0 ? !0 : void 0,
            "aria-labelledby": x.titleId,
            "aria-describedby": N
        };
        return ve.createElement(Hy, {
            type: "Dialog",
            enabled: g === 0,
            element: f,
            onUpdate: Oe((z, B, q) => {
                B === "Dialog" && Re(z, {
                    [$s.Add]() {
                        c.current.add(q), u(H => H + 1)
                    },
                    [$s.Remove]() {
                        c.current.add(q), u(H => H - 1)
                    }
                })
            })
        }, C(Cs, {
            force: !0,
            children: C(Ps, {
                children: C(Yi.Provider, {
                    value: M,
                    children: C(Ps.Group, {
                        target: f,
                        children: C(Cs, {
                            force: !1,
                            children: C(I, {
                                slot: S,
                                name: "Dialog.Description",
                                children: C(On, {
                                    initialFocus: i,
                                    containers: c,
                                    features: w ? Re(k, {
                                        parent: On.features.RestoreFocus,
                                        leaf: On.features.All & ~On.features.FocusLock
                                    }) : On.features.None,
                                    children: Je({
                                        ourProps: D,
                                        theirProps: o,
                                        slot: S,
                                        defaultTag: Ky,
                                        features: Zy,
                                        visible: g === 0,
                                        name: "Dialog"
                                    })
                                })
                            })
                        })
                    })
                })
            })
        }), C(Kr, {
            features: Er.Hidden,
            ref: m
        }))
    }),
    Qy = "div",
    e0 = We(function(e, t) {
        let [{
            dialogState: r,
            close: n
        }] = ei("Dialog.Overlay"), i = Ze(t), a = `headlessui-dialog-overlay-${yt()}`, o = Oe(u => {
            if (u.target === u.currentTarget) {
                if (ol(u.currentTarget)) return u.preventDefault();
                u.preventDefault(), u.stopPropagation(), n()
            }
        }), s = R.exports.useMemo(() => ({
            open: r === 0
        }), [r]);
        return Je({
            ourProps: {
                ref: i,
                id: a,
                "aria-hidden": !0,
                onClick: o
            },
            theirProps: e,
            slot: s,
            defaultTag: Qy,
            name: "Dialog.Overlay"
        })
    }),
    t0 = "div",
    r0 = We(function(e, t) {
        let [{
            dialogState: r
        }, n] = ei("Dialog.Backdrop"), i = Ze(t), a = `headlessui-dialog-backdrop-${yt()}`;
        R.exports.useEffect(() => {
            if (n.panelRef.current === null) throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
        }, [n.panelRef]);
        let o = R.exports.useMemo(() => ({
            open: r === 0
        }), [r]);
        return C(Cs, {
            force: !0,
            children: C(Ps, {
                children: Je({
                    ourProps: {
                        ref: i,
                        id: a,
                        "aria-hidden": !0
                    },
                    theirProps: e,
                    slot: o,
                    defaultTag: t0,
                    name: "Dialog.Backdrop"
                })
            })
        })
    }),
    n0 = "div",
    i0 = We(function(e, t) {
        let [{
            dialogState: r
        }, n] = ei("Dialog.Panel"), i = Ze(t, n.panelRef), a = `headlessui-dialog-panel-${yt()}`, o = R.exports.useMemo(() => ({
            open: r === 0
        }), [r]), s = Oe(u => {
            u.stopPropagation()
        });
        return Je({
            ourProps: {
                ref: i,
                id: a,
                onClick: s
            },
            theirProps: e,
            slot: o,
            defaultTag: n0,
            name: "Dialog.Panel"
        })
    }),
    a0 = "h2",
    o0 = We(function(e, t) {
        let [{
            dialogState: r,
            setTitleId: n
        }] = ei("Dialog.Title"), i = `headlessui-dialog-title-${yt()}`, a = Ze(t);
        R.exports.useEffect(() => (n(i), () => n(null)), [i, n]);
        let o = R.exports.useMemo(() => ({
            open: r === 0
        }), [r]);
        return Je({
            ourProps: {
                ref: a,
                id: i
            },
            theirProps: e,
            slot: o,
            defaultTag: a0,
            name: "Dialog.Title"
        })
    }),
    Cc = Object.assign(Jy, {
        Backdrop: r0,
        Panel: i0,
        Overlay: e0,
        Title: o0,
        Description: zy
    });
var s0 = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(s0 || {}),
    u0 = (e => (e[e.TogglePopover = 0] = "TogglePopover", e[e.ClosePopover = 1] = "ClosePopover", e[e.SetButton = 2] = "SetButton", e[e.SetButtonId = 3] = "SetButtonId", e[e.SetPanel = 4] = "SetPanel", e[e.SetPanelId = 5] = "SetPanelId", e))(u0 || {});
let l0 = {
        [0]: e => ({
            ...e,
            popoverState: Re(e.popoverState, {
                [0]: 1,
                [1]: 0
            })
        }),
        [1](e) {
            return e.popoverState === 1 ? e : {
                ...e,
                popoverState: 1
            }
        },
        [2](e, t) {
            return e.button === t.button ? e : {
                ...e,
                button: t.button
            }
        },
        [3](e, t) {
            return e.buttonId === t.buttonId ? e : {
                ...e,
                buttonId: t.buttonId
            }
        },
        [4](e, t) {
            return e.panel === t.panel ? e : {
                ...e,
                panel: t.panel
            }
        },
        [5](e, t) {
            return e.panelId === t.panelId ? e : {
                ...e,
                panelId: t.panelId
            }
        }
    },
    cl = R.exports.createContext(null);
cl.displayName = "PopoverContext";

function qa(e) {
    let t = R.exports.useContext(cl);
    if (t === null) {
        let r = new Error(`<${e} /> is missing a parent <Popover /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(r, qa), r
    }
    return t
}
let fl = R.exports.createContext(null);
fl.displayName = "PopoverAPIContext";

function hl(e) {
    let t = R.exports.useContext(fl);
    if (t === null) {
        let r = new Error(`<${e} /> is missing a parent <Popover /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(r, hl), r
    }
    return t
}
let dl = R.exports.createContext(null);
dl.displayName = "PopoverGroupContext";

function Rp() {
    return R.exports.useContext(dl)
}
let pl = R.exports.createContext(null);
pl.displayName = "PopoverPanelContext";

function c0() {
    return R.exports.useContext(pl)
}

function f0(e, t) {
    return Re(t.type, l0, e, t)
}
let h0 = "div",
    d0 = We(function(e, t) {
        var r;
        let n = `headlessui-popover-button-${yt()}`,
            i = `headlessui-popover-panel-${yt()}`,
            a = R.exports.useRef(null),
            o = Ze(t, kp(k => {
                a.current = k
            })),
            s = R.exports.useReducer(f0, {
                popoverState: 1,
                button: null,
                buttonId: n,
                panel: null,
                panelId: i,
                beforePanelSentinel: R.exports.createRef(),
                afterPanelSentinel: R.exports.createRef()
            }),
            [{
                popoverState: u,
                button: l,
                panel: c,
                beforePanelSentinel: f,
                afterPanelSentinel: d
            }, m] = s,
            p = Mr((r = a.current) != null ? r : l);
        R.exports.useEffect(() => m({
            type: 3,
            buttonId: n
        }), [n, m]), R.exports.useEffect(() => m({
            type: 5,
            panelId: i
        }), [i, m]);
        let h = R.exports.useMemo(() => {
                if (!l || !c) return !1;
                for (let D of document.querySelectorAll("body > *"))
                    if (Number(D == null ? void 0 : D.contains(l)) ^ Number(D == null ? void 0 : D.contains(c))) return !0;
                let k = il(),
                    N = k.indexOf(l),
                    I = (N + k.length - 1) % k.length,
                    T = (N + 1) % k.length,
                    M = k[I],
                    S = k[T];
                return !c.contains(M) && !c.contains(S)
            }, [l, c]),
            v = R.exports.useMemo(() => ({
                buttonId: n,
                panelId: i,
                close: () => m({
                    type: 1
                })
            }), [n, i, m]),
            g = Rp(),
            x = g == null ? void 0 : g.registerPopover,
            y = Oe(() => {
                var k;
                return (k = g == null ? void 0 : g.isFocusWithinPopoverGroup()) != null ? k : (p == null ? void 0 : p.activeElement) && ((l == null ? void 0 : l.contains(p.activeElement)) || (c == null ? void 0 : c.contains(p.activeElement)))
            });
        R.exports.useEffect(() => x == null ? void 0 : x(v), [x, v]), Ga(p == null ? void 0 : p.defaultView, "focus", k => {
            var N, I, T, M;
            u === 0 && (y() || !l || !c || (I = (N = f.current) == null ? void 0 : N.contains) != null && I.call(N, k.target) || (M = (T = d.current) == null ? void 0 : T.contains) != null && M.call(T, k.target) || m({
                type: 1
            }))
        }, !0), Op([l, c], (k, N) => {
            m({
                type: 1
            }), Sp(N, al.Loose) || (k.preventDefault(), l == null || l.focus())
        }, u === 0);
        let b = Oe(k => {
                m({
                    type: 1
                });
                let N = (() => k ? k instanceof HTMLElement ? k : "current" in k && k.current instanceof HTMLElement ? k.current : l : l)();
                N == null || N.focus()
            }),
            _ = R.exports.useMemo(() => ({
                close: b,
                isPortalled: h
            }), [b, h]),
            w = R.exports.useMemo(() => ({
                open: u === 0,
                close: b
            }), [u, b]),
            A = e,
            E = {
                ref: o
            };
        return ve.createElement(cl.Provider, {
            value: s
        }, ve.createElement(fl.Provider, {
            value: _
        }, ve.createElement(Tp, {
            value: Re(u, {
                [0]: Ot.Open,
                [1]: Ot.Closed
            })
        }, Je({
            ourProps: E,
            theirProps: A,
            slot: w,
            defaultTag: h0,
            name: "Popover"
        }))))
    }),
    p0 = "button",
    m0 = We(function(e, t) {
        let [r, n] = qa("Popover.Button"), {
            isPortalled: i
        } = hl("Popover.Button"), a = R.exports.useRef(null), o = `headlessui-focus-sentinel-${yt()}`, s = Rp(), u = s == null ? void 0 : s.closeOthers, l = c0(), c = l === null ? !1 : l === r.panelId, f = Ze(a, t, c ? null : k => k && n({
            type: 2,
            button: k
        })), d = Ze(a, t), m = Mr(a), p = Oe(k => {
            var N, I, T;
            if (c) {
                if (r.popoverState === 1) return;
                switch (k.key) {
                    case jt.Space:
                    case jt.Enter:
                        k.preventDefault(), (I = (N = k.target).click) == null || I.call(N), n({
                            type: 1
                        }), (T = r.button) == null || T.focus();
                        break
                }
            } else switch (k.key) {
                case jt.Space:
                case jt.Enter:
                    k.preventDefault(), k.stopPropagation(), r.popoverState === 1 && (u == null || u(r.buttonId)), n({
                        type: 0
                    });
                    break;
                case jt.Escape:
                    if (r.popoverState !== 0) return u == null ? void 0 : u(r.buttonId);
                    if (!a.current || (m == null ? void 0 : m.activeElement) && !a.current.contains(m.activeElement)) return;
                    k.preventDefault(), k.stopPropagation(), n({
                        type: 1
                    });
                    break
            }
        }), h = Oe(k => {
            c || k.key === jt.Space && k.preventDefault()
        }), v = Oe(k => {
            var N, I;
            ol(k.currentTarget) || e.disabled || (c ? (n({
                type: 1
            }), (N = r.button) == null || N.focus()) : (k.preventDefault(), k.stopPropagation(), r.popoverState === 1 && (u == null || u(r.buttonId)), n({
                type: 0
            }), (I = r.button) == null || I.focus()))
        }), g = Oe(k => {
            k.preventDefault(), k.stopPropagation()
        }), x = r.popoverState === 0, y = R.exports.useMemo(() => ({
            open: x
        }), [x]), b = wy(e, a), _ = e, w = c ? {
            ref: d,
            type: b,
            onKeyDown: p,
            onClick: v
        } : {
            ref: f,
            id: r.buttonId,
            type: b,
            "aria-expanded": e.disabled ? void 0 : r.popoverState === 0,
            "aria-controls": r.panel ? r.panelId : void 0,
            onKeyDown: p,
            onKeyUp: h,
            onClick: v,
            onMouseDown: g
        }, A = ul(), E = Oe(() => {
            let k = r.panel;
            if (!k) return;

            function N() {
                Re(A.current, {
                    [zt.Forwards]: () => Ft(k, Et.First),
                    [zt.Backwards]: () => Ft(k, Et.Last)
                })
            }
            N()
        });
        return te(sn, {
            children: [Je({
                ourProps: w,
                theirProps: _,
                slot: y,
                defaultTag: p0,
                name: "Popover.Button"
            }), x && !c && i && C(Kr, {
                id: o,
                features: Er.Focusable,
                as: "button",
                type: "button",
                onFocus: E
            })]
        })
    }),
    v0 = "div",
    g0 = lr.RenderStrategy | lr.Static,
    y0 = We(function(e, t) {
        let [{
            popoverState: r
        }, n] = qa("Popover.Overlay"), i = Ze(t), a = `headlessui-popover-overlay-${yt()}`, o = Qn(), s = (() => o !== null ? o === Ot.Open : r === 0)(), u = Oe(c => {
            if (ol(c.currentTarget)) return c.preventDefault();
            n({
                type: 1
            })
        }), l = R.exports.useMemo(() => ({
            open: r === 0
        }), [r]);
        return Je({
            ourProps: {
                ref: i,
                id: a,
                "aria-hidden": !0,
                onClick: u
            },
            theirProps: e,
            slot: l,
            defaultTag: v0,
            features: g0,
            visible: s,
            name: "Popover.Overlay"
        })
    }),
    b0 = "div",
    x0 = lr.RenderStrategy | lr.Static,
    _0 = We(function(e, t) {
        let {
            focus: r = !1,
            ...n
        } = e, [i, a] = qa("Popover.Panel"), {
            close: o,
            isPortalled: s
        } = hl("Popover.Panel"), u = `headlessui-focus-sentinel-before-${yt()}`, l = `headlessui-focus-sentinel-after-${yt()}`, c = R.exports.useRef(null), f = Ze(c, t, _ => {
            a({
                type: 4,
                panel: _
            })
        }), d = Mr(c), m = Qn(), p = (() => m !== null ? m === Ot.Open : i.popoverState === 0)(), h = Oe(_ => {
            var w;
            switch (_.key) {
                case jt.Escape:
                    if (i.popoverState !== 0 || !c.current || (d == null ? void 0 : d.activeElement) && !c.current.contains(d.activeElement)) return;
                    _.preventDefault(), _.stopPropagation(), a({
                        type: 1
                    }), (w = i.button) == null || w.focus();
                    break
            }
        });
        R.exports.useEffect(() => {
            var _;
            e.static || i.popoverState === 1 && ((_ = e.unmount) != null ? _ : !0) && a({
                type: 4,
                panel: null
            })
        }, [i.popoverState, e.unmount, e.static, a]), R.exports.useEffect(() => {
            if (!r || i.popoverState !== 0 || !c.current) return;
            let _ = d == null ? void 0 : d.activeElement;
            c.current.contains(_) || Ft(c.current, Et.First)
        }, [r, c, i.popoverState]);
        let v = R.exports.useMemo(() => ({
                open: i.popoverState === 0,
                close: o
            }), [i, o]),
            g = {
                ref: f,
                id: i.panelId,
                onKeyDown: h,
                onBlur: r && i.popoverState === 0 ? _ => {
                    var w, A, E, k, N;
                    let I = _.relatedTarget;
                    !I || !c.current || (w = c.current) != null && w.contains(I) || (a({
                        type: 1
                    }), (((E = (A = i.beforePanelSentinel.current) == null ? void 0 : A.contains) == null ? void 0 : E.call(A, I)) || ((N = (k = i.afterPanelSentinel.current) == null ? void 0 : k.contains) == null ? void 0 : N.call(k, I))) && I.focus({
                        preventScroll: !0
                    }))
                } : void 0,
                tabIndex: -1
            },
            x = ul(),
            y = Oe(() => {
                let _ = c.current;
                if (!_) return;

                function w() {
                    Re(x.current, {
                        [zt.Forwards]: () => {
                            Ft(_, Et.First)
                        },
                        [zt.Backwards]: () => {
                            var A;
                            (A = i.button) == null || A.focus({
                                preventScroll: !0
                            })
                        }
                    })
                }
                w()
            }),
            b = Oe(() => {
                let _ = c.current;
                if (!_) return;

                function w() {
                    Re(x.current, {
                        [zt.Forwards]: () => {
                            var A, E, k;
                            if (!i.button) return;
                            let N = il(),
                                I = N.indexOf(i.button),
                                T = N.slice(0, I + 1),
                                M = [...N.slice(I + 1), ...T];
                            for (let S of M.slice())
                                if (((E = (A = S == null ? void 0 : S.id) == null ? void 0 : A.startsWith) == null ? void 0 : E.call(A, "headlessui-focus-sentinel-")) || ((k = i.panel) == null ? void 0 : k.contains(S))) {
                                    let D = M.indexOf(S);
                                    D !== -1 && M.splice(D, 1)
                                } Ft(M, Et.First, !1)
                        },
                        [zt.Backwards]: () => Ft(_, Et.Last)
                    })
                }
                w()
            });
        return ve.createElement(pl.Provider, {
            value: i.panelId
        }, p && s && C(Kr, {
            id: u,
            ref: i.beforePanelSentinel,
            features: Er.Focusable,
            as: "button",
            type: "button",
            onFocus: y
        }), Je({
            ourProps: g,
            theirProps: n,
            slot: v,
            defaultTag: b0,
            features: x0,
            visible: p,
            name: "Popover.Panel"
        }), p && s && C(Kr, {
            id: l,
            ref: i.afterPanelSentinel,
            features: Er.Focusable,
            as: "button",
            type: "button",
            onFocus: b
        }))
    }),
    w0 = "div",
    S0 = We(function(e, t) {
        let r = R.exports.useRef(null),
            n = Ze(r, t),
            [i, a] = R.exports.useState([]),
            o = Oe(p => {
                a(h => {
                    let v = h.indexOf(p);
                    if (v !== -1) {
                        let g = h.slice();
                        return g.splice(v, 1), g
                    }
                    return h
                })
            }),
            s = Oe(p => (a(h => [...h, p]), () => o(p))),
            u = Oe(() => {
                var p;
                let h = Ha(r);
                if (!h) return !1;
                let v = h.activeElement;
                return (p = r.current) != null && p.contains(v) ? !0 : i.some(g => {
                    var x, y;
                    return ((x = h.getElementById(g.buttonId)) == null ? void 0 : x.contains(v)) || ((y = h.getElementById(g.panelId)) == null ? void 0 : y.contains(v))
                })
            }),
            l = Oe(p => {
                for (let h of i) h.buttonId !== p && h.close()
            }),
            c = R.exports.useMemo(() => ({
                registerPopover: s,
                unregisterPopover: o,
                isFocusWithinPopoverGroup: u,
                closeOthers: l
            }), [s, o, u, l]),
            f = R.exports.useMemo(() => ({}), []),
            d = e,
            m = {
                ref: n
            };
        return ve.createElement(dl.Provider, {
            value: c
        }, Je({
            ourProps: m,
            theirProps: d,
            slot: f,
            defaultTag: w0,
            name: "Popover.Group"
        }))
    }),
    Dn = Object.assign(d0, {
        Button: m0,
        Overlay: y0,
        Panel: _0,
        Group: S0
    });

function O0(e) {
    let t = {
        called: !1
    };
    return (...r) => {
        if (!t.called) return t.called = !0, e(...r)
    }
}

function zo(e, ...t) {
    e && t.length > 0 && e.classList.add(...t)
}

function Uo(e, ...t) {
    e && t.length > 0 && e.classList.remove(...t)
}
var Ms = (e => (e.Ended = "ended", e.Cancelled = "cancelled", e))(Ms || {});

function A0(e, t) {
    let r = Jn();
    if (!e) return r.dispose;
    let {
        transitionDuration: n,
        transitionDelay: i
    } = getComputedStyle(e), [a, o] = [n, i].map(s => {
        let [u = 0] = s.split(",").filter(Boolean).map(l => l.includes("ms") ? parseFloat(l) : parseFloat(l) * 1e3).sort((l, c) => c - l);
        return u
    });
    if (a + o !== 0) {
        let s = [];
        s.push(r.addEventListener(e, "transitionrun", u => {
            u.target === u.currentTarget && (s.splice(0).forEach(l => l()), s.push(r.addEventListener(e, "transitionend", l => {
                l.target === l.currentTarget && (t("ended"), s.splice(0).forEach(c => c()))
            }), r.addEventListener(e, "transitioncancel", l => {
                l.target === l.currentTarget && (t("cancelled"), s.splice(0).forEach(c => c()))
            })))
        }))
    } else t("ended");
    return r.add(() => t("cancelled")), r.dispose
}

function k0(e, t, r, n) {
    let i = r ? "enter" : "leave",
        a = Jn(),
        o = n !== void 0 ? O0(n) : () => {};
    i === "enter" && (e.removeAttribute("hidden"), e.style.display = "");
    let s = Re(i, {
            enter: () => t.enter,
            leave: () => t.leave
        }),
        u = Re(i, {
            enter: () => t.enterTo,
            leave: () => t.leaveTo
        }),
        l = Re(i, {
            enter: () => t.enterFrom,
            leave: () => t.leaveFrom
        });
    return Uo(e, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), zo(e, ...s, ...l), a.nextFrame(() => {
        Uo(e, ...l), zo(e, ...u), A0(e, c => (c === "ended" && (Uo(e, ...s), zo(e, ...t.entered)), o(c)))
    }), a.dispose
}

function E0({
    container: e,
    direction: t,
    classes: r,
    onStart: n,
    onStop: i
}) {
    let a = Wa(),
        o = _p(),
        s = Gt(t);
    St(() => {
        let u = Jn();
        o.add(u.dispose);
        let l = e.current;
        if (!!l && s.current !== "idle" && !!a.current) return u.dispose(), n.current(s.current), u.add(k0(l, r.current, s.current === "enter", c => {
            u.dispose(), Re(c, {
                [Ms.Ended]() {
                    i.current(s.current)
                },
                [Ms.Cancelled]: () => {}
            })
        })), u.dispose
    }, [t])
}

function gr(e = "") {
    return e.split(" ").filter(t => t.trim().length > 1)
}
let Va = R.exports.createContext(null);
Va.displayName = "TransitionContext";
var T0 = (e => (e.Visible = "visible", e.Hidden = "hidden", e))(T0 || {});

function C0() {
    let e = R.exports.useContext(Va);
    if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e
}

function P0() {
    let e = R.exports.useContext(Ya);
    if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e
}
let Ya = R.exports.createContext(null);
Ya.displayName = "NestingContext";

function Xa(e) {
    return "children" in e ? Xa(e.children) : e.current.filter(({
        el: t
    }) => t.current !== null).filter(({
        state: t
    }) => t === "visible").length > 0
}

function Dp(e, t) {
    let r = Gt(e),
        n = R.exports.useRef([]),
        i = Wa(),
        a = _p(),
        o = Oe((m, p = Bt.Hidden) => {
            let h = n.current.findIndex(({
                el: v
            }) => v === m);
            h !== -1 && (Re(p, {
                [Bt.Unmount]() {
                    n.current.splice(h, 1)
                },
                [Bt.Hidden]() {
                    n.current[h].state = "hidden"
                }
            }), a.microTask(() => {
                var v;
                !Xa(n) && i.current && ((v = r.current) == null || v.call(r))
            }))
        }),
        s = Oe(m => {
            let p = n.current.find(({
                el: h
            }) => h === m);
            return p ? p.state !== "visible" && (p.state = "visible") : n.current.push({
                el: m,
                state: "visible"
            }), () => o(m, Bt.Unmount)
        }),
        u = R.exports.useRef([]),
        l = R.exports.useRef(Promise.resolve()),
        c = R.exports.useRef({
            enter: [],
            leave: [],
            idle: []
        }),
        f = Oe((m, p, h) => {
            u.current.splice(0), t && (t.chains.current[p] = t.chains.current[p].filter(([v]) => v !== m)), t == null || t.chains.current[p].push([m, new Promise(v => {
                u.current.push(v)
            })]), t == null || t.chains.current[p].push([m, new Promise(v => {
                Promise.all(c.current[p].map(([g, x]) => x)).then(() => v())
            })]), p === "enter" ? l.current = l.current.then(() => t == null ? void 0 : t.wait.current).then(() => h(p)) : h(p)
        }),
        d = Oe((m, p, h) => {
            Promise.all(c.current[p].splice(0).map(([v, g]) => g)).then(() => {
                var v;
                (v = u.current.shift()) == null || v()
            }).then(() => h(p))
        });
    return R.exports.useMemo(() => ({
        children: n,
        register: s,
        unregister: o,
        onStart: f,
        onStop: d,
        wait: l,
        chains: c
    }), [s, o, n, f, d, c, l])
}

function $0() {}
let M0 = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

function Pc(e) {
    var t;
    let r = {};
    for (let n of M0) r[n] = (t = e[n]) != null ? t : $0;
    return r
}

function I0(e) {
    let t = R.exports.useRef(Pc(e));
    return R.exports.useEffect(() => {
        t.current = Pc(e)
    }, [e]), t
}
let N0 = "div",
    Lp = lr.RenderStrategy,
    jp = We(function(e, t) {
        let {
            beforeEnter: r,
            afterEnter: n,
            beforeLeave: i,
            afterLeave: a,
            enter: o,
            enterFrom: s,
            enterTo: u,
            entered: l,
            leave: c,
            leaveFrom: f,
            leaveTo: d,
            ...m
        } = e, p = R.exports.useRef(null), h = Ze(p, t), v = m.unmount ? Bt.Unmount : Bt.Hidden, {
            show: g,
            appear: x,
            initial: y
        } = C0(), [b, _] = R.exports.useState(g ? "visible" : "hidden"), w = P0(), {
            register: A,
            unregister: E
        } = w, k = R.exports.useRef(null);
        R.exports.useEffect(() => A(p), [A, p]), R.exports.useEffect(() => {
            if (v === Bt.Hidden && !!p.current) {
                if (g && b !== "visible") {
                    _("visible");
                    return
                }
                return Re(b, {
                    hidden: () => E(p),
                    visible: () => A(p)
                })
            }
        }, [b, p, A, E, g, v]);
        let N = Gt({
                enter: gr(o),
                enterFrom: gr(s),
                enterTo: gr(u),
                entered: gr(l),
                leave: gr(c),
                leaveFrom: gr(f),
                leaveTo: gr(d)
            }),
            I = I0({
                beforeEnter: r,
                afterEnter: n,
                beforeLeave: i,
                afterLeave: a
            }),
            T = un();
        R.exports.useEffect(() => {
            if (T && b === "visible" && p.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
        }, [p, b, T]);
        let M = y && !x,
            S = (() => !T || M || k.current === g ? "idle" : g ? "enter" : "leave")(),
            D = Oe(Q => Re(Q, {
                enter: () => I.current.beforeEnter(),
                leave: () => I.current.beforeLeave(),
                idle: () => {}
            })),
            z = Oe(Q => Re(Q, {
                enter: () => I.current.afterEnter(),
                leave: () => I.current.afterLeave(),
                idle: () => {}
            })),
            B = Dp(() => {
                _("hidden"), E(p)
            }, w);
        E0({
            container: p,
            classes: N,
            direction: S,
            onStart: Gt(Q => {
                B.onStart(p, Q, D)
            }),
            onStop: Gt(Q => {
                B.onStop(p, Q, z), Q === "leave" && !Xa(B) && (_("hidden"), E(p))
            })
        }), R.exports.useEffect(() => {
            !M || (v === Bt.Hidden ? k.current = null : k.current = g)
        }, [g, M, b]);
        let q = m,
            H = {
                ref: h
            };
        return C(Ya.Provider, {
            value: B,
            children: C(Tp, {
                value: Re(b, {
                    visible: Ot.Open,
                    hidden: Ot.Closed
                }),
                children: Je({
                    ourProps: H,
                    theirProps: q,
                    defaultTag: N0,
                    features: Lp,
                    visible: b === "visible",
                    name: "Transition.Child"
                })
            })
        })
    }),
    Is = We(function(e, t) {
        let {
            show: r,
            appear: n = !1,
            unmount: i,
            ...a
        } = e, o = R.exports.useRef(null), s = Ze(o, t);
        un();
        let u = Qn();
        if (r === void 0 && u !== null && (r = Re(u, {
                [Ot.Open]: !0,
                [Ot.Closed]: !1
            })), ![!0, !1].includes(r)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
        let [l, c] = R.exports.useState(r ? "visible" : "hidden"), f = Dp(() => {
            c("hidden")
        }), [d, m] = R.exports.useState(!0), p = R.exports.useRef([r]);
        St(() => {
            d !== !1 && p.current[p.current.length - 1] !== r && (p.current.push(r), m(!1))
        }, [p, r]);
        let h = R.exports.useMemo(() => ({
            show: r,
            appear: n,
            initial: d
        }), [r, n, d]);
        R.exports.useEffect(() => {
            if (r) c("visible");
            else if (!Xa(f)) c("hidden");
            else {
                let g = o.current;
                if (!g) return;
                let x = g.getBoundingClientRect();
                x.x === 0 && x.y === 0 && x.width === 0 && x.height === 0 && c("hidden")
            }
        }, [r, f]);
        let v = {
            unmount: i
        };
        return C(Ya.Provider, {
            value: f,
            children: C(Va.Provider, {
                value: h,
                children: Je({
                    ourProps: {
                        ...v,
                        as: R.exports.Fragment,
                        children: ve.createElement(jp, {
                            ref: s,
                            ...v,
                            ...a
                        })
                    },
                    theirProps: {},
                    defaultTag: R.exports.Fragment,
                    features: Lp,
                    visible: l === "visible",
                    name: "Transition"
                })
            })
        })
    }),
    R0 = We(function(e, t) {
        let r = R.exports.useContext(Va) !== null,
            n = Qn() !== null;
        return C(sn, {
            children: !r && n ? ve.createElement(Is, {
                ref: t,
                ...e
            }) : ve.createElement(jp, {
                ref: t,
                ...e
            })
        })
    }),
    Wr = Object.assign(Is, {
        Child: R0,
        Root: Is
    });
const D0 = () => /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
    Fp = e => Array.isArray(e) && e.every(t => typeof t == "object" && !(t instanceof Array)),
    L0 = e => Array.isArray(e) && e.every(t => Array.isArray(t)),
    j0 = e => Array.from(e.map(t => Object.keys(t)).reduce((t, r) => new Set([...t, ...r]), [])),
    F0 = (e, t) => {
        t = t || j0(e);
        let r = t,
            n = t;
        Fp(t) && (r = t.map(a => a.label), n = t.map(a => a.key));
        const i = e.map(a => n.map(o => B0(o, a)));
        return [r, ...i]
    },
    B0 = (e, t) => {
        const r = e.replace(/\[([^\]]+)]/g, ".$1").split(".").reduce(function(n, i, a, o) {
            const s = n[i];
            if (s == null) o.splice(1);
            else return s
        }, t);
        return r === void 0 ? e in t ? t[e] : "" : r
    },
    z0 = e => typeof e > "u" || e === null ? "" : e,
    Bp = (e, t = ",", r = '"') => e.filter(n => n).map(n => n.map(i => z0(i)).map(i => `${r}${i}${r}`).join(t)).join(`
`),
    U0 = (e, t, r, n) => Bp(t ? [t, ...e] : e, r, n),
    H0 = (e, t, r, n) => Bp(F0(e, t), r, n),
    W0 = (e, t, r, n) => t ? `${t.join(r)}
${e}` : e.replace(/"/g, '""'),
    zp = (e, t, r, n) => {
        if (Fp(e)) return H0(e, t, r, n);
        if (L0(e)) return U0(e, t, r, n);
        if (typeof e == "string") return W0(e, t, r);
        throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')
    },
    Up = (e, t, r, n, i) => {
        const a = zp(e, r, n, i),
            o = D0() ? "application/csv" : "text/csv",
            s = new Blob([t ? "\uFEFF" : "", a], {
                type: o
            }),
            u = `data:${o};charset=utf-8,${t?"\uFEFF":""}${a}`,
            l = window.URL || window.webkitURL;
        return typeof l.createObjectURL > "u" ? u : l.createObjectURL(s)
    };
var de = {
        exports: {}
    },
    G0 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    q0 = G0,
    V0 = q0;

function Hp() {}

function Wp() {}
Wp.resetWarningCache = Hp;
var Y0 = function() {
    function e(n, i, a, o, s, u) {
        if (u !== V0) {
            var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw l.name = "Invariant Violation", l
        }
    }
    e.isRequired = e;

    function t() {
        return e
    }
    var r = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: Wp,
        resetWarningCache: Hp
    };
    return r.PropTypes = r, r
};
de.exports = Y0();
const Gp = {
        data: de.exports.oneOfType([de.exports.string, de.exports.array, de.exports.func]).isRequired,
        headers: de.exports.array,
        target: de.exports.string,
        separator: de.exports.string,
        filename: de.exports.string,
        uFEFF: de.exports.bool,
        onClick: de.exports.func,
        asyncOnClick: de.exports.bool,
        enclosingCharacter: de.exports.string
    },
    qp = {
        separator: ",",
        filename: "generatedBy_react-csv.csv",
        uFEFF: !0,
        asyncOnClick: !1,
        enclosingCharacter: '"'
    },
    X0 = {
        target: "_blank"
    };
class $c extends ve.Component {
    constructor(t) {
        super(t), this.state = {}
    }
    buildURI() {
        return Up(...arguments)
    }
    componentDidMount() {
        const {
            data: t,
            headers: r,
            separator: n,
            enclosingCharacter: i,
            uFEFF: a,
            target: o,
            specs: s,
            replace: u
        } = this.props;
        this.state.page = window.open(this.buildURI(t, a, r, n, i), o, s, u)
    }
    getWindow() {
        return this.state.page
    }
    render() {
        return null
    }
}
Sn($c, "defaultProps", Object.assign(qp, X0)), Sn($c, "propTypes", Gp);
class Ns extends ve.Component {
    constructor(t) {
        super(t), this.buildURI = this.buildURI.bind(this)
    }
    buildURI() {
        return Up(...arguments)
    }
    handleLegacy(t, r = !1) {
        if (window.navigator.msSaveOrOpenBlob) {
            t.preventDefault();
            const {
                data: n,
                headers: i,
                separator: a,
                filename: o,
                enclosingCharacter: s,
                uFEFF: u
            } = this.props, l = r && typeof n == "function" ? n() : n;
            let c = new Blob([u ? "\uFEFF" : "", zp(l, i, a, s)]);
            return window.navigator.msSaveBlob(c, o), !1
        }
    }
    handleAsyncClick(t) {
        const r = n => {
            if (n === !1) {
                t.preventDefault();
                return
            }
            this.handleLegacy(t, !0)
        };
        this.props.onClick(t, r)
    }
    handleSyncClick(t) {
        if (this.props.onClick(t) === !1) {
            t.preventDefault();
            return
        }
        this.handleLegacy(t)
    }
    handleClick() {
        return t => {
            if (typeof this.props.onClick == "function") return this.props.asyncOnClick ? this.handleAsyncClick(t) : this.handleSyncClick(t);
            this.handleLegacy(t)
        }
    }
    render() {
        const {
            data: t,
            headers: r,
            separator: n,
            filename: i,
            uFEFF: a,
            children: o,
            onClick: s,
            asyncOnClick: u,
            enclosingCharacter: l,
            ...c
        } = this.props, d = typeof window > "u" ? "" : this.buildURI(t, a, r, n, l);
        return C("a", {
            download: i,
            ...c,
            ref: m => this.link = m,
            target: "_self",
            href: d,
            onClick: this.handleClick(),
            children: o
        })
    }
}
Sn(Ns, "defaultProps", qp), Sn(Ns, "propTypes", Gp);
const K0 = Ns,
    Z0 = {
        solid: "ease-in duration-100 group inline-flex items-center justify-center rounded-lg py-3 px-6 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
        outline: "ease-in duration-100 group inline-flex ring-1 items-center justify-center rounded-lg py-3 px-6 text-sm focus:outline-none"
    },
    J0 = {
        solid: {
            slate: "bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900",
            orange: "bg-orange-main text-black hover:bg-amber-500",
            white: "bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white"
        },
        outline: {
            slate: "ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300",
            orange: "ring-orange-main text-orange-main hover:text-amber-500",
            white: "ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white"
        }
    };

function Rs({
    variant: e = "solid",
    color: t = "slate",
    onClick: r,
    className: n,
    ...i
}) {
    return n = kr(Z0[e], J0[e][t], n), C("button", {
        onClick: r,
        className: n,
        ...i
    })
}

function Vp({
    className: e,
    ...t
}) {
    return C("div", {
        className: kr("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", e),
        ...t
    })
}

function Yp(e) {
    return te("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "33.924",
        height: "30.171",
        viewBox: "0 0 33.924 30.171",
        ...e,
        children: [C("defs", {
            children: C("clipPath", {
                id: "clip-path",
                children: C("rect", {
                    id: "Rectangle_10",
                    "data-name": "Rectangle 10",
                    width: "33.924",
                    height: "30.171",
                    transform: "translate(0 0)",
                    fill: "#fefefe"
                })
            })
        }), C("g", {
            id: "Group_3",
            "data-name": "Group 3",
            transform: "translate(0 -0.001)",
            children: C("g", {
                id: "Group_1",
                "data-name": "Group 1",
                transform: "translate(0 0.001)",
                children: C("path", {
                    id: "Path_1",
                    "data-name": "Path 1",
                    d: "M30.932,0H2.991A2.987,2.987,0,0,0,.4,4.482l13.971,24.2a2.986,2.986,0,0,0,5.173,0l13.971-24.2A2.987,2.987,0,0,0,30.932,0M23.674,7.924,17.607,18.431a.745.745,0,0,1-1.291,0L10.25,7.924A.746.746,0,0,1,10.9,6.806H23.028a.746.746,0,0,1,.646,1.118",
                    transform: "translate(0 -0.001)",
                    fill: "#fefefe"
                })
            })
        })]
    })
}

function Mc({
    onClick: e,
    children: t,
    active: r
}) {
    return C("span", {
        onClick: e,
        className: kr("hover:hover-white mx-2 inline-block cursor-pointer py-2 text-base font-medium hover:border-b", r && "border-b"),
        children: t
    })
}

function Ic({
    onClick: e,
    children: t
}) {
    return C(Dn.Button, {
        as: Rs,
        onClick: e,
        className: "block w-full bg-transparent p-2",
        children: t
    })
}

function Q0({
    open: e
}) {
    return te("svg", {
        "aria-hidden": "true",
        className: "h-3.5 w-3.5 overflow-visible stroke-white",
        fill: "none",
        strokeWidth: 2,
        strokeLinecap: "round",
        children: [C("path", {
            d: "M0 1H14M0 7H14M0 13H14",
            className: kr("origin-center transition", e && "scale-90 opacity-0")
        }), C("path", {
            d: "M2 2L12 12M12 2L2 12",
            className: kr("origin-center transition", !e && "scale-90 opacity-0")
        })]
    })
}

function e1({
    onChangeTab: e
}) {
    return te(Dn, {
        children: [C(Dn.Button, {
            className: "relative z-10 flex h-8 w-8 items-center justify-center focus:border-none focus:outline-none",
            "aria-label": "Toggle Navigation",
            children: ({
                open: t
            }) => C(Q0, {
                open: t
            })
        }), te(Wr.Root, {
            children: [C(Wr.Child, {
                as: R.exports.Fragment,
                enter: "duration-150 ease-out",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "duration-150 ease-in",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: C(Dn.Overlay, {
                    className: "fixed inset-0 bg-slate-300/50"
                })
            }), C(Wr.Child, {
                as: R.exports.Fragment,
                enter: "duration-150 ease-out",
                enterFrom: "opacity-0 scale-95",
                enterTo: "opacity-100 scale-100",
                leave: "duration-100 ease-in",
                leaveFrom: "opacity-100 scale-100",
                leaveTo: "opacity-0 scale-95",
                children: te(Dn.Panel, {
                    as: "div",
                    className: "absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-black-200 p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5",
                    children: [C(Ic, {
                        onClick: () => e(0),
                        children: "Metainfo"
                    }), C(Ic, {
                        onClick: () => e(1),
                        children: "Post Lists"
                    })]
                })
            })]
        })]
    })
}
const t1 = [{
    label: "Date",
    key: "time"
}, {
    label: "Post Type",
    key: "postType"
}, {
    label: "Content",
    key: "content"
}, {
    label: "Video Thumbnail",
    key: "video"
}, {
    label: "Image",
    key: "image"
}, {
    label: "Like",
    key: "like"
}, {
    label: "Retweet",
    key: "retweet"
}, {
    label: "Reply",
    key: "reply"
}];

function r1({
    tab: e,
    onChangeTab: t,
    onExport: r,
    post: n,
    profile: i
}) {
    const a = () => {
            localStorage.clear(), chrome.tabs.query({
                active: !0,
                currentWindow: !0
            }, function(s) {
                chrome.tabs.remove(s[0].id)
            })
        },
        o = n.map(s => ({
            video: s.video.join(", "),
            image: s.image.join(", "),
            retweet: s.retweet !== "" ? s.retweet : "0",
            like: s.like !== "" ? s.like : "0",
            reply: s.reply !== "" ? s.reply : "0",
            ...s
        }));
    return C("header", {
        className: "py-10",
        children: C(Vp, {
            children: te("nav", {
                className: "relative z-50 flex justify-between text-white",
                children: [te("div", {
                    className: "flex items-center md:gap-x-12",
                    children: [te("span", {
                        className: "flex flex-row items-center duration-300 ease-in hover:opacity-75",
                        children: [C(Yp, {
                            className: "mr-2 h-6 w-auto"
                        }), C("a", {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: "https://nighthustle.co",
                            className: "text-[25px] font-semibold",
                            children: "X Twitter Recap"
                        })]
                    }), te("div", {
                        className: "hidden md:flex md:gap-x-6",
                        children: [C(Mc, {
                            onClick: () => t(0),
                            active: e === 0,
                            children: "Metainfo"
                        }), C(Mc, {
                            onClick: () => t(1),
                            active: e === 1,
                            children: "Post Lists"
                        })]
                    })]
                }), te("div", {
                    className: "flex items-center gap-x-4 md:gap-x-4",
                    children: [C(Rs, {
                            variant: "outline",
                            color: "orange",
                            onClick: () => a(),
                            children: C("span", {
                                children: "Clear Storage"
                            })
                        }), C(K0, {
                            data: o,
                            headers: t1,
                            filename: `${mt.exports.get(i,"author.additionalName","export")}.csv`,
                            children: C(Rs, {
                                color: "orange",
                                onClick: () => r(),
                                children: C("span", {
                                    children: "Export CSV"
                                })
                            })
                        }),
                        // C("span", {
                        //     className: "rounded-md bg-white py-[2px] px-2 transition hover:opacity-80",
                        //     children: C("a", {
                        //         href: "https://www.buymeacoffee.com/samsek",
                        //         target: "_blank",
                        //         rel: "noreferrer",
                        //         children: C("img", {
                        //             src: "https://cdn.buymeacoffee.com/buttons/default-white.png",
                        //             alt: "Buy Me A Coffee",
                        //             height: "41",
                        //             width: "174",
                        //             className: "rounded-md"
                        //         })
                        //     })
                        // }), 
                        // C("div", {
                        //     className: "-mr-1 md:hidden",
                        //     children: C(e1, {
                        //         onChangeTab: t
                        //     })
                        // })
                    ]
                })]
            })
        })
    })
}

function n1(e) {
    return nt({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"
            },
            child: []
        }]
    })(e)
}

function Xi(e) {
    return nt({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
            },
            child: []
        }]
    })(e)
}

function i1(e) {
    return nt({
        tag: "svg",
        attr: {
            viewBox: "0 0 640 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M608 0H160a32 32 0 0 0-32 32v96h160V64h192v320h128a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zM232 103a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm352 208a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm-168 57H32a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32zM96 224a32 32 0 1 1-32 32 32 32 0 0 1 32-32zm288 224H64v-32l64-64 32 32 128-128 96 96z"
            },
            child: []
        }]
    })(e)
}

function Ki(e) {
    return nt({
        tag: "svg",
        attr: {
            viewBox: "0 0 640 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M629.657 343.598L528.971 444.284c-9.373 9.372-24.568 9.372-33.941 0L394.343 343.598c-9.373-9.373-9.373-24.569 0-33.941l10.823-10.823c9.562-9.562 25.133-9.34 34.419.492L480 342.118V160H292.451a24.005 24.005 0 0 1-16.971-7.029l-16-16C244.361 121.851 255.069 96 276.451 96H520c13.255 0 24 10.745 24 24v222.118l40.416-42.792c9.285-9.831 24.856-10.054 34.419-.492l10.823 10.823c9.372 9.372 9.372 24.569-.001 33.941zm-265.138 15.431A23.999 23.999 0 0 0 347.548 352H160V169.881l40.416 42.792c9.286 9.831 24.856 10.054 34.419.491l10.822-10.822c9.373-9.373 9.373-24.569 0-33.941L144.971 67.716c-9.373-9.373-24.569-9.373-33.941 0L10.343 168.402c-9.373 9.373-9.373 24.569 0 33.941l10.822 10.822c9.562 9.562 25.133 9.34 34.419-.491L96 169.881V392c0 13.255 10.745 24 24 24h243.549c21.382 0 32.09-25.851 16.971-40.971l-16.001-16z"
            },
            child: []
        }]
    })(e)
}

function a1(e) {
    return nt({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            },
            child: []
        }]
    })(e)
}

function o1(e) {
    return nt({
        tag: "svg",
        attr: {
            viewBox: "0 0 320 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"
            },
            child: []
        }]
    })(e)
}

function s1(e) {
    return nt({
        tag: "svg",
        attr: {
            viewBox: "0 0 320 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"
            },
            child: []
        }]
    })(e)
}

function u1(e) {
    return nt({
        tag: "svg",
        attr: {
            viewBox: "0 0 320 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
            },
            child: []
        }]
    })(e)
}

function l1(e) {
    return nt({
        tag: "svg",
        attr: {
            viewBox: "0 0 640 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"
            },
            child: []
        }]
    })(e)
}

// function c1({
//     profile: e
// }) {
//     return C("div", {
//         children: C("div", {
//             className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
//             children: te("div", {
//                 className: "md:py-18 rounded-lg bg-[url('/assets/img/bg.jpg')] bg-cover px-8 py-8 md:flex md:items-center",
//                 children: [C("div", {
//                     className: "m-0 md:mr-12",
//                     children: te("div", {
//                         className: "relative mx-auto w-32",
//                         children: [C("img", {
//                             className: "relative z-10 h-32 w-32 rounded-full",
//                             src: mt.exports.get(e, "author.image.contentUrl", ""),
//                             alt: "profile image"
//                         }), C("div", {
//                             className: "absolute top-0 left-0 h-full w-full rounded-full bg-white outline outline-[3px] outline-[#333333]"
//                         })]
//                     })
//                 }), te("h2", {
//                     className: "mt-8 text-center tracking-tight text-white md:mt-0 md:flex-1 md:text-left",
//                     children: [C("p", {
//                         className: "mb-2 block text-3xl font-medium",
//                         children: `${mt.exports.get(e,"author.givenName","")} (@${mt.exports.get(e,"author.additionalName","")})`
//                     }), C("p", {
//                         className: "font-regular block whitespace-normal text-base",
//                         children: mt.exports.get(e, "author.description", "")
//                     }), te("div", {
//                         className: "font-regular text-base",
//                         children: [te("div", {
//                             className: "w-full",
//                             children: [mt.exports.get(e, "author.homeLocation.name", "") && te("div", {
//                                 className: "mr-4 inline-block",
//                                 children: [C(hy, {
//                                     className: "-mt-1 mr-2 inline-block align-middle"
//                                 }), C("div", {
//                                     className: "inline-block align-middle",
//                                     children: mt.exports.get(e, "author.homeLocation.name", "")
//                                 })]
//                             }), mt.exports.get(e, "dateCreated", "") && te("div", {
//                                 className: "mr-4 inline-block",
//                                 children: [C(dy, {
//                                     className: "-mt-1 mr-2 inline-block align-middle"
//                                 }), C("div", {
//                                     className: "inline-block align-middle",
//                                     children: Or(mt.exports.get(e, "dateCreated", "")).format("DD-MM-YYYY")
//                                 })]
//                             })]
//                         }), te("div", {
//                             className: "w-full",
//                             children: [te("div", {
//                                 className: "mr-4 inline-block",
//                                 children: [C(py, {
//                                     className: "mr-2 inline-block align-middle"
//                                 }), te("div", {
//                                     className: "inline-block align-middle",
//                                     children: [mt.exports.get(e, "author.interactionStatistic[0].userInteractionCount", 0), " ", "Follows"]
//                                 })]
//                             }), te("div", {
//                                 className: "mr-4 inline-block",
//                                 children: [C(l1, {
//                                     className: "mr-2 inline-block align-middle"
//                                 }), te("div", {
//                                     className: "inline-block align-middle",
//                                     children: [mt.exports.get(e, "author.interactionStatistic[1].userInteractionCount", 0), " ", "Friends"]
//                                 })]
//                             }), te("div", {
//                                 className: "mr-4 inline-block",
//                                 children: [C(bp, {
//                                     className: "mr-2 inline-block align-middle"
//                                 }), te("div", {
//                                     className: "inline-block align-middle",
//                                     children: [mt.exports.get(e, "author.interactionStatistic[2].userInteractionCount", 0), " ", "Tweets"]
//                                 })]
//                             })]
//                         })]
//                     })]
//                 })]
//             })
//         })
//     })
// }

var Xp = {
    exports: {}
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
    (function() {
        var t = {}.hasOwnProperty;

        function r() {
            for (var n = [], i = 0; i < arguments.length; i++) {
                var a = arguments[i];
                if (!!a) {
                    var o = typeof a;
                    if (o === "string" || o === "number") n.push(a);
                    else if (Array.isArray(a)) {
                        if (a.length) {
                            var s = r.apply(null, a);
                            s && n.push(s)
                        }
                    } else if (o === "object") {
                        if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]")) {
                            n.push(a.toString());
                            continue
                        }
                        for (var u in a) t.call(a, u) && a[u] && n.push(u)
                    }
                }
            }
            return n.join(" ")
        }
        e.exports ? (r.default = r, e.exports = r) : window.classNames = r
    })()
})(Xp);
const Ne = Xp.exports;

function f1(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function")
}
var lt = f1;

function Ei(e) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ei = function(r) {
        return typeof r
    } : Ei = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
    }, Ei(e)
}
var h1 = ["viewBox", "children"],
    d1 = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "type", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "begin", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "points", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"],
    ml = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"],
    Ae = function(t, r, n) {
        if (!t || typeof t == "function" || typeof t == "boolean") return null;
        var i = t;
        if (R.exports.isValidElement(t) && (i = t.props), !lt(i)) return null;
        var a = {};
        return Object.keys(i).forEach(function(o) {
            (d1.includes(o) || n && h1.includes(o) || r && ml.includes(o)) && (a[o] = i[o])
        }), a
    },
    Zi = function(t, r) {
        if (!t || typeof t == "function" || typeof t == "boolean") return null;
        var n = t;
        if (R.exports.isValidElement(t) && (n = t.props), !lt(n)) return null;
        var i = {};
        return Object.keys(n).forEach(function(a) {
            ml.includes(a) && (i[a] = r || function(o) {
                return n[a](n, o)
            })
        }), i
    },
    p1 = function(t, r, n) {
        return function(i) {
            return t(r, n, i), null
        }
    },
    Kp = function(t, r, n) {
        if (!lt(t) || Ei(t) !== "object") return null;
        var i = null;
        return Object.keys(t).forEach(function(a) {
            var o = t[a];
            ml.includes(a) && typeof o == "function" && (i || (i = {}), i[a] = p1(o, r, n))
        }), i
    };

function m1(e, t) {
    if (e == null) return {};
    var r = v1(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]))
    }
    return r
}

function v1(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i, a;
    for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r
}

function Ds(e) {
    var t = e.children,
        r = e.width,
        n = e.height,
        i = e.viewBox,
        a = e.className,
        o = e.style,
        s = m1(e, ["children", "width", "height", "viewBox", "className", "style"]),
        u = i || {
            width: r,
            height: n,
            x: 0,
            y: 0
        },
        l = Ne("recharts-surface", a);
    return te("svg", {
        ...Ae(s, !0, !0),
        className: l,
        width: r,
        height: n,
        style: o,
        viewBox: "".concat(u.x, " ").concat(u.y, " ").concat(u.width, " ").concat(u.height),
        version: "1.1",
        children: [C("title", {
            children: e.title
        }), C("desc", {
            children: e.desc
        }), t]
    })
}

function g1(e, t) {
    if (e == null) return {};
    var r = y1(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]))
    }
    return r
}

function y1(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i, a;
    for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r
}
var tt = ve.forwardRef(function(e, t) {
        var r = e.children,
            n = e.className,
            i = g1(e, ["children", "className"]),
            a = Ne("recharts-layer", n);
        return C("g", {
            className: a,
            ...Ae(i, !0),
            ref: t,
            children: r
        })
    }),
    b1 = typeof ir == "object" && ir && ir.Object === Object && ir,
    Zp = b1,
    x1 = Zp,
    _1 = typeof self == "object" && self && self.Object === Object && self,
    w1 = x1 || _1 || Function("return this")(),
    Nt = w1,
    S1 = Nt,
    O1 = S1.Symbol,
    ti = O1,
    Nc = ti,
    Jp = Object.prototype,
    A1 = Jp.hasOwnProperty,
    k1 = Jp.toString,
    An = Nc ? Nc.toStringTag : void 0;

function E1(e) {
    var t = A1.call(e, An),
        r = e[An];
    try {
        e[An] = void 0;
        var n = !0
    } catch {}
    var i = k1.call(e);
    return n && (t ? e[An] = r : delete e[An]), i
}
var T1 = E1,
    C1 = Object.prototype,
    P1 = C1.toString;

function $1(e) {
    return P1.call(e)
}
var M1 = $1,
    Rc = ti,
    I1 = T1,
    N1 = M1,
    R1 = "[object Null]",
    D1 = "[object Undefined]",
    Dc = Rc ? Rc.toStringTag : void 0;

function L1(e) {
    return e == null ? e === void 0 ? D1 : R1 : Dc && Dc in Object(e) ? I1(e) : N1(e)
}
var hr = L1,
    j1 = hr,
    F1 = lt,
    B1 = "[object AsyncFunction]",
    z1 = "[object Function]",
    U1 = "[object GeneratorFunction]",
    H1 = "[object Proxy]";

function W1(e) {
    if (!F1(e)) return !1;
    var t = j1(e);
    return t == z1 || t == U1 || t == B1 || t == H1
}
var me = W1;

function G1() {
    this.__data__ = [], this.size = 0
}
var q1 = G1;

function V1(e, t) {
    return e === t || e !== e && t !== t
}
var vl = V1,
    Y1 = vl;

function X1(e, t) {
    for (var r = e.length; r--;)
        if (Y1(e[r][0], t)) return r;
    return -1
}
var Ka = X1,
    K1 = Ka,
    Z1 = Array.prototype,
    J1 = Z1.splice;

function Q1(e) {
    var t = this.__data__,
        r = K1(t, e);
    if (r < 0) return !1;
    var n = t.length - 1;
    return r == n ? t.pop() : J1.call(t, r, 1), --this.size, !0
}
var eb = Q1,
    tb = Ka;

function rb(e) {
    var t = this.__data__,
        r = tb(t, e);
    return r < 0 ? void 0 : t[r][1]
}
var nb = rb,
    ib = Ka;

function ab(e) {
    return ib(this.__data__, e) > -1
}
var ob = ab,
    sb = Ka;

function ub(e, t) {
    var r = this.__data__,
        n = sb(r, e);
    return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
}
var lb = ub,
    cb = q1,
    fb = eb,
    hb = nb,
    db = ob,
    pb = lb;

function ln(e) {
    var t = -1,
        r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1])
    }
}
ln.prototype.clear = cb;
ln.prototype.delete = fb;
ln.prototype.get = hb;
ln.prototype.has = db;
ln.prototype.set = pb;
var Za = ln,
    mb = Za;

function vb() {
    this.__data__ = new mb, this.size = 0
}
var gb = vb;

function yb(e) {
    var t = this.__data__,
        r = t.delete(e);
    return this.size = t.size, r
}
var bb = yb;

function xb(e) {
    return this.__data__.get(e)
}
var _b = xb;

function wb(e) {
    return this.__data__.has(e)
}
var Sb = wb,
    Ob = Nt,
    Ab = Ob["__core-js_shared__"],
    kb = Ab,
    Ho = kb,
    Lc = function() {
        var e = /[^.]+$/.exec(Ho && Ho.keys && Ho.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : ""
    }();

function Eb(e) {
    return !!Lc && Lc in e
}
var Tb = Eb,
    Cb = Function.prototype,
    Pb = Cb.toString;

function $b(e) {
    if (e != null) {
        try {
            return Pb.call(e)
        } catch {}
        try {
            return e + ""
        } catch {}
    }
    return ""
}
var Qp = $b,
    Mb = me,
    Ib = Tb,
    Nb = lt,
    Rb = Qp,
    Db = /[\\^$.*+?()[\]{}|]/g,
    Lb = /^\[object .+?Constructor\]$/,
    jb = Function.prototype,
    Fb = Object.prototype,
    Bb = jb.toString,
    zb = Fb.hasOwnProperty,
    Ub = RegExp("^" + Bb.call(zb).replace(Db, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function Hb(e) {
    if (!Nb(e) || Ib(e)) return !1;
    var t = Mb(e) ? Ub : Lb;
    return t.test(Rb(e))
}
var Wb = Hb;

function Gb(e, t) {
    return e == null ? void 0 : e[t]
}
var qb = Gb,
    Vb = Wb,
    Yb = qb;

function Xb(e, t) {
    var r = Yb(e, t);
    return Vb(r) ? r : void 0
}
var Ir = Xb,
    Kb = Ir,
    Zb = Nt,
    Jb = Kb(Zb, "Map"),
    gl = Jb,
    Qb = Ir,
    ex = Qb(Object, "create"),
    Ja = ex,
    jc = Ja;

function tx() {
    this.__data__ = jc ? jc(null) : {}, this.size = 0
}
var rx = tx;

function nx(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t
}
var ix = nx,
    ax = Ja,
    ox = "__lodash_hash_undefined__",
    sx = Object.prototype,
    ux = sx.hasOwnProperty;

function lx(e) {
    var t = this.__data__;
    if (ax) {
        var r = t[e];
        return r === ox ? void 0 : r
    }
    return ux.call(t, e) ? t[e] : void 0
}
var cx = lx,
    fx = Ja,
    hx = Object.prototype,
    dx = hx.hasOwnProperty;

function px(e) {
    var t = this.__data__;
    return fx ? t[e] !== void 0 : dx.call(t, e)
}
var mx = px,
    vx = Ja,
    gx = "__lodash_hash_undefined__";

function yx(e, t) {
    var r = this.__data__;
    return this.size += this.has(e) ? 0 : 1, r[e] = vx && t === void 0 ? gx : t, this
}
var bx = yx,
    xx = rx,
    _x = ix,
    wx = cx,
    Sx = mx,
    Ox = bx;

function cn(e) {
    var t = -1,
        r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1])
    }
}
cn.prototype.clear = xx;
cn.prototype.delete = _x;
cn.prototype.get = wx;
cn.prototype.has = Sx;
cn.prototype.set = Ox;
var Ax = cn,
    Fc = Ax,
    kx = Za,
    Ex = gl;

function Tx() {
    this.size = 0, this.__data__ = {
        hash: new Fc,
        map: new(Ex || kx),
        string: new Fc
    }
}
var Cx = Tx;

function Px(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
}
var $x = Px,
    Mx = $x;

function Ix(e, t) {
    var r = e.__data__;
    return Mx(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
}
var Qa = Ix,
    Nx = Qa;

function Rx(e) {
    var t = Nx(this, e).delete(e);
    return this.size -= t ? 1 : 0, t
}
var Dx = Rx,
    Lx = Qa;

function jx(e) {
    return Lx(this, e).get(e)
}
var Fx = jx,
    Bx = Qa;

function zx(e) {
    return Bx(this, e).has(e)
}
var Ux = zx,
    Hx = Qa;

function Wx(e, t) {
    var r = Hx(this, e),
        n = r.size;
    return r.set(e, t), this.size += r.size == n ? 0 : 1, this
}
var Gx = Wx,
    qx = Cx,
    Vx = Dx,
    Yx = Fx,
    Xx = Ux,
    Kx = Gx;

function fn(e) {
    var t = -1,
        r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1])
    }
}
fn.prototype.clear = qx;
fn.prototype.delete = Vx;
fn.prototype.get = Yx;
fn.prototype.has = Xx;
fn.prototype.set = Kx;
var yl = fn,
    Zx = Za,
    Jx = gl,
    Qx = yl,
    e_ = 200;

function t_(e, t) {
    var r = this.__data__;
    if (r instanceof Zx) {
        var n = r.__data__;
        if (!Jx || n.length < e_ - 1) return n.push([e, t]), this.size = ++r.size, this;
        r = this.__data__ = new Qx(n)
    }
    return r.set(e, t), this.size = r.size, this
}
var r_ = t_,
    n_ = Za,
    i_ = gb,
    a_ = bb,
    o_ = _b,
    s_ = Sb,
    u_ = r_;

function hn(e) {
    var t = this.__data__ = new n_(e);
    this.size = t.size
}
hn.prototype.clear = i_;
hn.prototype.delete = a_;
hn.prototype.get = o_;
hn.prototype.has = s_;
hn.prototype.set = u_;
var em = hn,
    l_ = "__lodash_hash_undefined__";

function c_(e) {
    return this.__data__.set(e, l_), this
}
var f_ = c_;

function h_(e) {
    return this.__data__.has(e)
}
var d_ = h_,
    p_ = yl,
    m_ = f_,
    v_ = d_;

function Ji(e) {
    var t = -1,
        r = e == null ? 0 : e.length;
    for (this.__data__ = new p_; ++t < r;) this.add(e[t])
}
Ji.prototype.add = Ji.prototype.push = m_;
Ji.prototype.has = v_;
var tm = Ji;

function g_(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
        if (t(e[r], r, e)) return !0;
    return !1
}
var rm = g_;

function y_(e, t) {
    return e.has(t)
}
var nm = y_,
    b_ = tm,
    x_ = rm,
    __ = nm,
    w_ = 1,
    S_ = 2;

function O_(e, t, r, n, i, a) {
    var o = r & w_,
        s = e.length,
        u = t.length;
    if (s != u && !(o && u > s)) return !1;
    var l = a.get(e),
        c = a.get(t);
    if (l && c) return l == t && c == e;
    var f = -1,
        d = !0,
        m = r & S_ ? new b_ : void 0;
    for (a.set(e, t), a.set(t, e); ++f < s;) {
        var p = e[f],
            h = t[f];
        if (n) var v = o ? n(h, p, f, t, e, a) : n(p, h, f, e, t, a);
        if (v !== void 0) {
            if (v) continue;
            d = !1;
            break
        }
        if (m) {
            if (!x_(t, function(g, x) {
                    if (!__(m, x) && (p === g || i(p, g, r, n, a))) return m.push(x)
                })) {
                d = !1;
                break
            }
        } else if (!(p === h || i(p, h, r, n, a))) {
            d = !1;
            break
        }
    }
    return a.delete(e), a.delete(t), d
}
var im = O_,
    A_ = Nt,
    k_ = A_.Uint8Array,
    E_ = k_;

function T_(e) {
    var t = -1,
        r = Array(e.size);
    return e.forEach(function(n, i) {
        r[++t] = [i, n]
    }), r
}
var C_ = T_;

function P_(e) {
    var t = -1,
        r = Array(e.size);
    return e.forEach(function(n) {
        r[++t] = n
    }), r
}
var bl = P_,
    Bc = ti,
    zc = E_,
    $_ = vl,
    M_ = im,
    I_ = C_,
    N_ = bl,
    R_ = 1,
    D_ = 2,
    L_ = "[object Boolean]",
    j_ = "[object Date]",
    F_ = "[object Error]",
    B_ = "[object Map]",
    z_ = "[object Number]",
    U_ = "[object RegExp]",
    H_ = "[object Set]",
    W_ = "[object String]",
    G_ = "[object Symbol]",
    q_ = "[object ArrayBuffer]",
    V_ = "[object DataView]",
    Uc = Bc ? Bc.prototype : void 0,
    Wo = Uc ? Uc.valueOf : void 0;

function Y_(e, t, r, n, i, a, o) {
    switch (r) {
        case V_:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
            e = e.buffer, t = t.buffer;
        case q_:
            return !(e.byteLength != t.byteLength || !a(new zc(e), new zc(t)));
        case L_:
        case j_:
        case z_:
            return $_(+e, +t);
        case F_:
            return e.name == t.name && e.message == t.message;
        case U_:
        case W_:
            return e == t + "";
        case B_:
            var s = I_;
        case H_:
            var u = n & R_;
            if (s || (s = N_), e.size != t.size && !u) return !1;
            var l = o.get(e);
            if (l) return l == t;
            n |= D_, o.set(e, t);
            var c = M_(s(e), s(t), n, i, a, o);
            return o.delete(e), c;
        case G_:
            if (Wo) return Wo.call(e) == Wo.call(t)
    }
    return !1
}
var X_ = Y_;

function K_(e, t) {
    for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
    return e
}
var am = K_,
    Z_ = Array.isArray,
    _e = Z_,
    J_ = am,
    Q_ = _e;

function ew(e, t, r) {
    var n = t(e);
    return Q_(e) ? n : J_(n, r(e))
}
var tw = ew;

function rw(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n;) {
        var o = e[r];
        t(o, r, e) && (a[i++] = o)
    }
    return a
}
var nw = rw;

function iw() {
    return []
}
var aw = iw,
    ow = nw,
    sw = aw,
    uw = Object.prototype,
    lw = uw.propertyIsEnumerable,
    Hc = Object.getOwnPropertySymbols,
    cw = Hc ? function(e) {
        return e == null ? [] : (e = Object(e), ow(Hc(e), function(t) {
            return lw.call(e, t)
        }))
    } : sw,
    fw = cw;

function hw(e, t) {
    for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
    return n
}
var dw = hw;

function pw(e) {
    return e != null && typeof e == "object"
}
var dr = pw,
    mw = hr,
    vw = dr,
    gw = "[object Arguments]";

function yw(e) {
    return vw(e) && mw(e) == gw
}
var bw = yw,
    Wc = bw,
    xw = dr,
    om = Object.prototype,
    _w = om.hasOwnProperty,
    ww = om.propertyIsEnumerable,
    Sw = Wc(function() {
        return arguments
    }()) ? Wc : function(e) {
        return xw(e) && _w.call(e, "callee") && !ww.call(e, "callee")
    },
    xl = Sw,
    Qi = {
        exports: {}
    };

function Ow() {
    return !1
}
var Aw = Ow;
(function(e, t) {
    var r = Nt,
        n = Aw,
        i = t && !t.nodeType && t,
        a = i && !0 && e && !e.nodeType && e,
        o = a && a.exports === i,
        s = o ? r.Buffer : void 0,
        u = s ? s.isBuffer : void 0,
        l = u || n;
    e.exports = l
})(Qi, Qi.exports);
var kw = 9007199254740991,
    Ew = /^(?:0|[1-9]\d*)$/;

function Tw(e, t) {
    var r = typeof e;
    return t = t == null ? kw : t, !!t && (r == "number" || r != "symbol" && Ew.test(e)) && e > -1 && e % 1 == 0 && e < t
}
var _l = Tw,
    Cw = 9007199254740991;

function Pw(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Cw
}
var wl = Pw,
    $w = hr,
    Mw = wl,
    Iw = dr,
    Nw = "[object Arguments]",
    Rw = "[object Array]",
    Dw = "[object Boolean]",
    Lw = "[object Date]",
    jw = "[object Error]",
    Fw = "[object Function]",
    Bw = "[object Map]",
    zw = "[object Number]",
    Uw = "[object Object]",
    Hw = "[object RegExp]",
    Ww = "[object Set]",
    Gw = "[object String]",
    qw = "[object WeakMap]",
    Vw = "[object ArrayBuffer]",
    Yw = "[object DataView]",
    Xw = "[object Float32Array]",
    Kw = "[object Float64Array]",
    Zw = "[object Int8Array]",
    Jw = "[object Int16Array]",
    Qw = "[object Int32Array]",
    e2 = "[object Uint8Array]",
    t2 = "[object Uint8ClampedArray]",
    r2 = "[object Uint16Array]",
    n2 = "[object Uint32Array]",
    Me = {};
Me[Xw] = Me[Kw] = Me[Zw] = Me[Jw] = Me[Qw] = Me[e2] = Me[t2] = Me[r2] = Me[n2] = !0;
Me[Nw] = Me[Rw] = Me[Vw] = Me[Dw] = Me[Yw] = Me[Lw] = Me[jw] = Me[Fw] = Me[Bw] = Me[zw] = Me[Uw] = Me[Hw] = Me[Ww] = Me[Gw] = Me[qw] = !1;

function i2(e) {
    return Iw(e) && Mw(e.length) && !!Me[$w(e)]
}
var a2 = i2;

function o2(e) {
    return function(t) {
        return e(t)
    }
}
var sm = o2,
    Ls = {
        exports: {}
    };
(function(e, t) {
    var r = Zp,
        n = t && !t.nodeType && t,
        i = n && !0 && e && !e.nodeType && e,
        a = i && i.exports === n,
        o = a && r.process,
        s = function() {
            try {
                var u = i && i.require && i.require("util").types;
                return u || o && o.binding && o.binding("util")
            } catch {}
        }();
    e.exports = s
})(Ls, Ls.exports);
var s2 = a2,
    u2 = sm,
    Gc = Ls.exports,
    qc = Gc && Gc.isTypedArray,
    l2 = qc ? u2(qc) : s2,
    um = l2,
    c2 = dw,
    f2 = xl,
    h2 = _e,
    d2 = Qi.exports,
    p2 = _l,
    m2 = um,
    v2 = Object.prototype,
    g2 = v2.hasOwnProperty;

function y2(e, t) {
    var r = h2(e),
        n = !r && f2(e),
        i = !r && !n && d2(e),
        a = !r && !n && !i && m2(e),
        o = r || n || i || a,
        s = o ? c2(e.length, String) : [],
        u = s.length;
    for (var l in e)(t || g2.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || p2(l, u))) && s.push(l);
    return s
}
var b2 = y2,
    x2 = Object.prototype;

function _2(e) {
    var t = e && e.constructor,
        r = typeof t == "function" && t.prototype || x2;
    return e === r
}
var w2 = _2;

function S2(e, t) {
    return function(r) {
        return e(t(r))
    }
}
var O2 = S2,
    A2 = O2,
    k2 = A2(Object.keys, Object),
    E2 = k2,
    T2 = w2,
    C2 = E2,
    P2 = Object.prototype,
    $2 = P2.hasOwnProperty;

function M2(e) {
    if (!T2(e)) return C2(e);
    var t = [];
    for (var r in Object(e)) $2.call(e, r) && r != "constructor" && t.push(r);
    return t
}
var I2 = M2,
    N2 = me,
    R2 = wl;

function D2(e) {
    return e != null && R2(e.length) && !N2(e)
}
var ri = D2,
    L2 = b2,
    j2 = I2,
    F2 = ri;

function B2(e) {
    return F2(e) ? L2(e) : j2(e)
}
var eo = B2,
    z2 = tw,
    U2 = fw,
    H2 = eo;

function W2(e) {
    return z2(e, H2, U2)
}
var G2 = W2,
    Vc = G2,
    q2 = 1,
    V2 = Object.prototype,
    Y2 = V2.hasOwnProperty;

function X2(e, t, r, n, i, a) {
    var o = r & q2,
        s = Vc(e),
        u = s.length,
        l = Vc(t),
        c = l.length;
    if (u != c && !o) return !1;
    for (var f = u; f--;) {
        var d = s[f];
        if (!(o ? d in t : Y2.call(t, d))) return !1
    }
    var m = a.get(e),
        p = a.get(t);
    if (m && p) return m == t && p == e;
    var h = !0;
    a.set(e, t), a.set(t, e);
    for (var v = o; ++f < u;) {
        d = s[f];
        var g = e[d],
            x = t[d];
        if (n) var y = o ? n(x, g, d, t, e, a) : n(g, x, d, e, t, a);
        if (!(y === void 0 ? g === x || i(g, x, r, n, a) : y)) {
            h = !1;
            break
        }
        v || (v = d == "constructor")
    }
    if (h && !v) {
        var b = e.constructor,
            _ = t.constructor;
        b != _ && "constructor" in e && "constructor" in t && !(typeof b == "function" && b instanceof b && typeof _ == "function" && _ instanceof _) && (h = !1)
    }
    return a.delete(e), a.delete(t), h
}
var K2 = X2,
    Z2 = Ir,
    J2 = Nt,
    Q2 = Z2(J2, "DataView"),
    eS = Q2,
    tS = Ir,
    rS = Nt,
    nS = tS(rS, "Promise"),
    iS = nS,
    aS = Ir,
    oS = Nt,
    sS = aS(oS, "Set"),
    lm = sS,
    uS = Ir,
    lS = Nt,
    cS = uS(lS, "WeakMap"),
    fS = cS,
    js = eS,
    Fs = gl,
    Bs = iS,
    zs = lm,
    Us = fS,
    cm = hr,
    dn = Qp,
    Yc = "[object Map]",
    hS = "[object Object]",
    Xc = "[object Promise]",
    Kc = "[object Set]",
    Zc = "[object WeakMap]",
    Jc = "[object DataView]",
    dS = dn(js),
    pS = dn(Fs),
    mS = dn(Bs),
    vS = dn(zs),
    gS = dn(Us),
    yr = cm;
(js && yr(new js(new ArrayBuffer(1))) != Jc || Fs && yr(new Fs) != Yc || Bs && yr(Bs.resolve()) != Xc || zs && yr(new zs) != Kc || Us && yr(new Us) != Zc) && (yr = function(e) {
    var t = cm(e),
        r = t == hS ? e.constructor : void 0,
        n = r ? dn(r) : "";
    if (n) switch (n) {
        case dS:
            return Jc;
        case pS:
            return Yc;
        case mS:
            return Xc;
        case vS:
            return Kc;
        case gS:
            return Zc
    }
    return t
});
var yS = yr,
    Go = em,
    bS = im,
    xS = X_,
    _S = K2,
    Qc = yS,
    ef = _e,
    tf = Qi.exports,
    wS = um,
    SS = 1,
    rf = "[object Arguments]",
    nf = "[object Array]",
    gi = "[object Object]",
    OS = Object.prototype,
    af = OS.hasOwnProperty;

function AS(e, t, r, n, i, a) {
    var o = ef(e),
        s = ef(t),
        u = o ? nf : Qc(e),
        l = s ? nf : Qc(t);
    u = u == rf ? gi : u, l = l == rf ? gi : l;
    var c = u == gi,
        f = l == gi,
        d = u == l;
    if (d && tf(e)) {
        if (!tf(t)) return !1;
        o = !0, c = !1
    }
    if (d && !c) return a || (a = new Go), o || wS(e) ? bS(e, t, r, n, i, a) : xS(e, t, u, r, n, i, a);
    if (!(r & SS)) {
        var m = c && af.call(e, "__wrapped__"),
            p = f && af.call(t, "__wrapped__");
        if (m || p) {
            var h = m ? e.value() : e,
                v = p ? t.value() : t;
            return a || (a = new Go), i(h, v, r, n, a)
        }
    }
    return d ? (a || (a = new Go), _S(e, t, r, n, i, a)) : !1
}
var kS = AS,
    ES = kS,
    of = dr;

function fm(e, t, r, n, i) {
    return e === t ? !0 : e == null || t == null || !of(e) && !of(t) ? e !== e && t !== t : ES(e, t, r, n, fm, i)
}
var Sl = fm,
    TS = em,
    CS = Sl,
    PS = 1,
    $S = 2;

function MS(e, t, r, n) {
    var i = r.length,
        a = i,
        o = !n;
    if (e == null) return !a;
    for (e = Object(e); i--;) {
        var s = r[i];
        if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
    }
    for (; ++i < a;) {
        s = r[i];
        var u = s[0],
            l = e[u],
            c = s[1];
        if (o && s[2]) {
            if (l === void 0 && !(u in e)) return !1
        } else {
            var f = new TS;
            if (n) var d = n(l, c, u, e, t, f);
            if (!(d === void 0 ? CS(c, l, PS | $S, n, f) : d)) return !1
        }
    }
    return !0
}
var IS = MS,
    NS = lt;

function RS(e) {
    return e === e && !NS(e)
}
var hm = RS,
    DS = hm,
    LS = eo;

function jS(e) {
    for (var t = LS(e), r = t.length; r--;) {
        var n = t[r],
            i = e[n];
        t[r] = [n, i, DS(i)]
    }
    return t
}
var FS = jS;

function BS(e, t) {
    return function(r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
    }
}
var dm = BS,
    zS = IS,
    US = FS,
    HS = dm;

function WS(e) {
    var t = US(e);
    return t.length == 1 && t[0][2] ? HS(t[0][0], t[0][1]) : function(r) {
        return r === e || zS(r, e, t)
    }
}
var GS = WS,
    qS = hr,
    VS = dr,
    YS = "[object Symbol]";

function XS(e) {
    return typeof e == "symbol" || VS(e) && qS(e) == YS
}
var pn = XS,
    KS = _e,
    ZS = pn,
    JS = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    QS = /^\w*$/;

function eO(e, t) {
    if (KS(e)) return !1;
    var r = typeof e;
    return r == "number" || r == "symbol" || r == "boolean" || e == null || ZS(e) ? !0 : QS.test(e) || !JS.test(e) || t != null && e in Object(t)
}
var Ol = eO,
    pm = yl,
    tO = "Expected a function";

function Al(e, t) {
    if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(tO);
    var r = function() {
        var n = arguments,
            i = t ? t.apply(this, n) : n[0],
            a = r.cache;
        if (a.has(i)) return a.get(i);
        var o = e.apply(this, n);
        return r.cache = a.set(i, o) || a, o
    };
    return r.cache = new(Al.Cache || pm), r
}
Al.Cache = pm;
var rO = Al,
    nO = rO,
    iO = 500;

function aO(e) {
    var t = nO(e, function(n) {
            return r.size === iO && r.clear(), n
        }),
        r = t.cache;
    return t
}
var oO = aO,
    sO = oO,
    uO = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    lO = /\\(\\)?/g,
    cO = sO(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(uO, function(r, n, i, a) {
            t.push(i ? a.replace(lO, "$1") : n || r)
        }), t
    }),
    fO = cO;

function hO(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
    return i
}
var kl = hO,
    sf = ti,
    dO = kl,
    pO = _e,
    mO = pn,
    vO = 1 / 0,
    uf = sf ? sf.prototype : void 0,
    lf = uf ? uf.toString : void 0;

function mm(e) {
    if (typeof e == "string") return e;
    if (pO(e)) return dO(e, mm) + "";
    if (mO(e)) return lf ? lf.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -vO ? "-0" : t
}
var gO = mm,
    yO = gO;

function bO(e) {
    return e == null ? "" : yO(e)
}
var vm = bO,
    xO = _e,
    _O = Ol,
    wO = fO,
    SO = vm;

function OO(e, t) {
    return xO(e) ? e : _O(e, t) ? [e] : wO(SO(e))
}
var gm = OO,
    AO = pn,
    kO = 1 / 0;

function EO(e) {
    if (typeof e == "string" || AO(e)) return e;
    var t = e + "";
    return t == "0" && 1 / e == -kO ? "-0" : t
}
var to = EO,
    TO = gm,
    CO = to;

function PO(e, t) {
    t = TO(t, e);
    for (var r = 0, n = t.length; e != null && r < n;) e = e[CO(t[r++])];
    return r && r == n ? e : void 0
}
var El = PO,
    $O = El;

function MO(e, t, r) {
    var n = e == null ? void 0 : $O(e, t);
    return n === void 0 ? r : n
}
var He = MO;

function IO(e, t) {
    return e != null && t in Object(e)
}
var NO = IO,
    RO = gm,
    DO = xl,
    LO = _e,
    jO = _l,
    FO = wl,
    BO = to;

function zO(e, t, r) {
    t = RO(t, e);
    for (var n = -1, i = t.length, a = !1; ++n < i;) {
        var o = BO(t[n]);
        if (!(a = e != null && r(e, o))) break;
        e = e[o]
    }
    return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && FO(i) && jO(o, i) && (LO(e) || DO(e)))
}
var UO = zO,
    HO = NO,
    WO = UO;

function GO(e, t) {
    return e != null && WO(e, t, HO)
}
var qO = GO,
    VO = Sl,
    YO = He,
    XO = qO,
    KO = Ol,
    ZO = hm,
    JO = dm,
    QO = to,
    eA = 1,
    tA = 2;

function rA(e, t) {
    return KO(e) && ZO(t) ? JO(QO(e), t) : function(r) {
        var n = YO(r, e);
        return n === void 0 && n === t ? XO(r, e) : VO(t, n, eA | tA)
    }
}
var nA = rA;

function iA(e) {
    return e
}
var mn = iA;

function aA(e) {
    return function(t) {
        return t == null ? void 0 : t[e]
    }
}
var oA = aA,
    sA = El;

function uA(e) {
    return function(t) {
        return sA(t, e)
    }
}
var lA = uA,
    cA = oA,
    fA = lA,
    hA = Ol,
    dA = to;

function pA(e) {
    return hA(e) ? cA(dA(e)) : fA(e)
}
var mA = pA,
    vA = GS,
    gA = nA,
    yA = mn,
    bA = _e,
    xA = mA;

function _A(e) {
    return typeof e == "function" ? e : e == null ? yA : typeof e == "object" ? bA(e) ? gA(e[0], e[1]) : vA(e) : xA(e)
}
var pr = _A;

function wA(e, t, r, n) {
    for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i;)
        if (t(e[a], a, e)) return a;
    return -1
}
var ym = wA;

function SA(e) {
    return e !== e
}
var OA = SA;

function AA(e, t, r) {
    for (var n = r - 1, i = e.length; ++n < i;)
        if (e[n] === t) return n;
    return -1
}
var kA = AA,
    EA = ym,
    TA = OA,
    CA = kA;

function PA(e, t, r) {
    return t === t ? CA(e, t, r) : EA(e, TA, r)
}
var $A = PA,
    MA = $A;

function IA(e, t) {
    var r = e == null ? 0 : e.length;
    return !!r && MA(e, t, 0) > -1
}
var NA = IA;

function RA(e, t, r) {
    for (var n = -1, i = e == null ? 0 : e.length; ++n < i;)
        if (r(t, e[n])) return !0;
    return !1
}
var DA = RA;

function LA() {}
var jA = LA,
    qo = lm,
    FA = jA,
    BA = bl,
    zA = 1 / 0,
    UA = qo && 1 / BA(new qo([, -0]))[1] == zA ? function(e) {
        return new qo(e)
    } : FA,
    HA = UA,
    WA = tm,
    GA = NA,
    qA = DA,
    VA = nm,
    YA = HA,
    XA = bl,
    KA = 200;

function ZA(e, t, r) {
    var n = -1,
        i = GA,
        a = e.length,
        o = !0,
        s = [],
        u = s;
    if (r) o = !1, i = qA;
    else if (a >= KA) {
        var l = t ? null : YA(e);
        if (l) return XA(l);
        o = !1, i = VA, u = new WA
    } else u = t ? [] : s;
    e: for (; ++n < a;) {
        var c = e[n],
            f = t ? t(c) : c;
        if (c = r || c !== 0 ? c : 0, o && f === f) {
            for (var d = u.length; d--;)
                if (u[d] === f) continue e;
            t && u.push(f), s.push(c)
        } else i(u, f, r) || (u !== s && u.push(f), s.push(c))
    }
    return s
}
var JA = ZA,
    QA = pr,
    ek = JA;

function tk(e, t) {
    return e && e.length ? ek(e, QA(t)) : []
}
var ea = tk;

function rk(e, t, r) {
    var n = -1,
        i = e.length;
    t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
    for (var a = Array(i); ++n < i;) a[n] = e[n + t];
    return a
}
var nk = rk,
    ik = nk;

function ak(e, t, r) {
    var n = e.length;
    return r = r === void 0 ? n : r, !t && r >= n ? e : ik(e, t, r)
}
var ok = ak,
    sk = "\\ud800-\\udfff",
    uk = "\\u0300-\\u036f",
    lk = "\\ufe20-\\ufe2f",
    ck = "\\u20d0-\\u20ff",
    fk = uk + lk + ck,
    hk = "\\ufe0e\\ufe0f",
    dk = "\\u200d",
    pk = RegExp("[" + dk + sk + fk + hk + "]");

function mk(e) {
    return pk.test(e)
}
var bm = mk;

function vk(e) {
    return e.split("")
}
var gk = vk,
    xm = "\\ud800-\\udfff",
    yk = "\\u0300-\\u036f",
    bk = "\\ufe20-\\ufe2f",
    xk = "\\u20d0-\\u20ff",
    _k = yk + bk + xk,
    wk = "\\ufe0e\\ufe0f",
    Sk = "[" + xm + "]",
    Hs = "[" + _k + "]",
    Ws = "\\ud83c[\\udffb-\\udfff]",
    Ok = "(?:" + Hs + "|" + Ws + ")",
    _m = "[^" + xm + "]",
    wm = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    Sm = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    Ak = "\\u200d",
    Om = Ok + "?",
    Am = "[" + wk + "]?",
    kk = "(?:" + Ak + "(?:" + [_m, wm, Sm].join("|") + ")" + Am + Om + ")*",
    Ek = Am + Om + kk,
    Tk = "(?:" + [_m + Hs + "?", Hs, wm, Sm, Sk].join("|") + ")",
    Ck = RegExp(Ws + "(?=" + Ws + ")|" + Tk + Ek, "g");

function Pk(e) {
    return e.match(Ck) || []
}
var $k = Pk,
    Mk = gk,
    Ik = bm,
    Nk = $k;

function Rk(e) {
    return Ik(e) ? Nk(e) : Mk(e)
}
var Dk = Rk,
    Lk = ok,
    jk = bm,
    Fk = Dk,
    Bk = vm;

function zk(e) {
    return function(t) {
        t = Bk(t);
        var r = jk(t) ? Fk(t) : void 0,
            n = r ? r[0] : t.charAt(0),
            i = r ? Lk(r, 1).join("") : t.slice(1);
        return n[e]() + i
    }
}
var Uk = zk,
    Hk = Uk,
    Wk = Hk("toUpperCase"),
    ro = Wk;
const Gs = Math.PI,
    qs = 2 * Gs,
    br = 1e-6,
    Gk = qs - br;

function Vs() {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
}

function no() {
    return new Vs
}
Vs.prototype = no.prototype = {
    constructor: Vs,
    moveTo: function(e, t) {
        this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t)
    },
    closePath: function() {
        this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
    },
    lineTo: function(e, t) {
        this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t)
    },
    quadraticCurveTo: function(e, t, r, n) {
        this._ += "Q" + +e + "," + +t + "," + (this._x1 = +r) + "," + (this._y1 = +n)
    },
    bezierCurveTo: function(e, t, r, n, i, a) {
        this._ += "C" + +e + "," + +t + "," + +r + "," + +n + "," + (this._x1 = +i) + "," + (this._y1 = +a)
    },
    arcTo: function(e, t, r, n, i) {
        e = +e, t = +t, r = +r, n = +n, i = +i;
        var a = this._x1,
            o = this._y1,
            s = r - e,
            u = n - t,
            l = a - e,
            c = o - t,
            f = l * l + c * c;
        if (i < 0) throw new Error("negative radius: " + i);
        if (this._x1 === null) this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
        else if (f > br)
            if (!(Math.abs(c * s - u * l) > br) || !i) this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
            else {
                var d = r - a,
                    m = n - o,
                    p = s * s + u * u,
                    h = d * d + m * m,
                    v = Math.sqrt(p),
                    g = Math.sqrt(f),
                    x = i * Math.tan((Gs - Math.acos((p + f - h) / (2 * v * g))) / 2),
                    y = x / g,
                    b = x / v;
                Math.abs(y - 1) > br && (this._ += "L" + (e + y * l) + "," + (t + y * c)), this._ += "A" + i + "," + i + ",0,0," + +(c * d > l * m) + "," + (this._x1 = e + b * s) + "," + (this._y1 = t + b * u)
            }
    },
    arc: function(e, t, r, n, i, a) {
        e = +e, t = +t, r = +r, a = !!a;
        var o = r * Math.cos(n),
            s = r * Math.sin(n),
            u = e + o,
            l = t + s,
            c = 1 ^ a,
            f = a ? n - i : i - n;
        if (r < 0) throw new Error("negative radius: " + r);
        this._x1 === null ? this._ += "M" + u + "," + l : (Math.abs(this._x1 - u) > br || Math.abs(this._y1 - l) > br) && (this._ += "L" + u + "," + l), r && (f < 0 && (f = f % qs + qs), f > Gk ? this._ += "A" + r + "," + r + ",0,1," + c + "," + (e - o) + "," + (t - s) + "A" + r + "," + r + ",0,1," + c + "," + (this._x1 = u) + "," + (this._y1 = l) : f > br && (this._ += "A" + r + "," + r + ",0," + +(f >= Gs) + "," + c + "," + (this._x1 = e + r * Math.cos(i)) + "," + (this._y1 = t + r * Math.sin(i))))
    },
    rect: function(e, t, r, n) {
        this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +r + "v" + +n + "h" + -r + "Z"
    },
    toString: function() {
        return this._
    }
};

function Pe(e) {
    return function() {
        return e
    }
}
var ta = Math.PI,
    io = 2 * ta;

function Tl(e) {
    return typeof e == "object" && "length" in e ? e : Array.from(e)
}

function km(e) {
    this._context = e
}
km.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._point = 0
    },
    lineEnd: function() {
        (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line
    },
    point: function(e, t) {
        switch (e = +e, t = +t, this._point) {
            case 0:
                this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
                break;
            case 1:
                this._point = 2;
            default:
                this._context.lineTo(e, t);
                break
        }
    }
};

function ao(e) {
    return new km(e)
}

function Em(e) {
    return e[0]
}

function Tm(e) {
    return e[1]
}

function Cm(e, t) {
    var r = Pe(!0),
        n = null,
        i = ao,
        a = null;
    e = typeof e == "function" ? e : e === void 0 ? Em : Pe(e), t = typeof t == "function" ? t : t === void 0 ? Tm : Pe(t);

    function o(s) {
        var u, l = (s = Tl(s)).length,
            c, f = !1,
            d;
        for (n == null && (a = i(d = no())), u = 0; u <= l; ++u) !(u < l && r(c = s[u], u, s)) === f && ((f = !f) ? a.lineStart() : a.lineEnd()), f && a.point(+e(c, u, s), +t(c, u, s));
        if (d) return a = null, d + "" || null
    }
    return o.x = function(s) {
        return arguments.length ? (e = typeof s == "function" ? s : Pe(+s), o) : e
    }, o.y = function(s) {
        return arguments.length ? (t = typeof s == "function" ? s : Pe(+s), o) : t
    }, o.defined = function(s) {
        return arguments.length ? (r = typeof s == "function" ? s : Pe(!!s), o) : r
    }, o.curve = function(s) {
        return arguments.length ? (i = s, n != null && (a = i(n)), o) : i
    }, o.context = function(s) {
        return arguments.length ? (s == null ? n = a = null : a = i(n = s), o) : n
    }, o
}

function yi(e, t, r) {
    var n = null,
        i = Pe(!0),
        a = null,
        o = ao,
        s = null;
    e = typeof e == "function" ? e : e === void 0 ? Em : Pe(+e), t = typeof t == "function" ? t : Pe(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? Tm : Pe(+r);

    function u(c) {
        var f, d, m, p = (c = Tl(c)).length,
            h, v = !1,
            g, x = new Array(p),
            y = new Array(p);
        for (a == null && (s = o(g = no())), f = 0; f <= p; ++f) {
            if (!(f < p && i(h = c[f], f, c)) === v)
                if (v = !v) d = f, s.areaStart(), s.lineStart();
                else {
                    for (s.lineEnd(), s.lineStart(), m = f - 1; m >= d; --m) s.point(x[m], y[m]);
                    s.lineEnd(), s.areaEnd()
                } v && (x[f] = +e(h, f, c), y[f] = +t(h, f, c), s.point(n ? +n(h, f, c) : x[f], r ? +r(h, f, c) : y[f]))
        }
        if (g) return s = null, g + "" || null
    }

    function l() {
        return Cm().defined(i).curve(o).context(a)
    }
    return u.x = function(c) {
        return arguments.length ? (e = typeof c == "function" ? c : Pe(+c), n = null, u) : e
    }, u.x0 = function(c) {
        return arguments.length ? (e = typeof c == "function" ? c : Pe(+c), u) : e
    }, u.x1 = function(c) {
        return arguments.length ? (n = c == null ? null : typeof c == "function" ? c : Pe(+c), u) : n
    }, u.y = function(c) {
        return arguments.length ? (t = typeof c == "function" ? c : Pe(+c), r = null, u) : t
    }, u.y0 = function(c) {
        return arguments.length ? (t = typeof c == "function" ? c : Pe(+c), u) : t
    }, u.y1 = function(c) {
        return arguments.length ? (r = c == null ? null : typeof c == "function" ? c : Pe(+c), u) : r
    }, u.lineX0 = u.lineY0 = function() {
        return l().x(e).y(t)
    }, u.lineY1 = function() {
        return l().x(e).y(r)
    }, u.lineX1 = function() {
        return l().x(n).y(t)
    }, u.defined = function(c) {
        return arguments.length ? (i = typeof c == "function" ? c : Pe(!!c), u) : i
    }, u.curve = function(c) {
        return arguments.length ? (o = c, a != null && (s = o(a)), u) : o
    }, u.context = function(c) {
        return arguments.length ? (c == null ? a = s = null : s = o(a = c), u) : a
    }, u
}
const Cl = {
        draw: function(e, t) {
            var r = Math.sqrt(t / ta);
            e.moveTo(r, 0), e.arc(0, 0, r, 0, io)
        }
    },
    qk = {
        draw: function(e, t) {
            var r = Math.sqrt(t / 5) / 2;
            e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath()
        }
    };
var Pm = Math.sqrt(1 / 3),
    Vk = Pm * 2;
const Yk = {
    draw: function(e, t) {
        var r = Math.sqrt(t / Vk),
            n = r * Pm;
        e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath()
    }
};
var Xk = .8908130915292852,
    $m = Math.sin(ta / 10) / Math.sin(7 * ta / 10),
    Kk = Math.sin(io / 10) * $m,
    Zk = -Math.cos(io / 10) * $m;
const Jk = {
        draw: function(e, t) {
            var r = Math.sqrt(t * Xk),
                n = Kk * r,
                i = Zk * r;
            e.moveTo(0, -r), e.lineTo(n, i);
            for (var a = 1; a < 5; ++a) {
                var o = io * a / 5,
                    s = Math.cos(o),
                    u = Math.sin(o);
                e.lineTo(u * r, -s * r), e.lineTo(s * n - u * i, u * n + s * i)
            }
            e.closePath()
        }
    },
    Qk = {
        draw: function(e, t) {
            var r = Math.sqrt(t),
                n = -r / 2;
            e.rect(n, n, r, r)
        }
    };
var Vo = Math.sqrt(3);
const eE = {
    draw: function(e, t) {
        var r = -Math.sqrt(t / (Vo * 3));
        e.moveTo(0, r * 2), e.lineTo(-Vo * r, -r), e.lineTo(Vo * r, -r), e.closePath()
    }
};
var ht = -.5,
    dt = Math.sqrt(3) / 2,
    Ys = 1 / Math.sqrt(12),
    tE = (Ys / 2 + 1) * 3;
const rE = {
    draw: function(e, t) {
        var r = Math.sqrt(t / tE),
            n = r / 2,
            i = r * Ys,
            a = n,
            o = r * Ys + r,
            s = -a,
            u = o;
        e.moveTo(n, i), e.lineTo(a, o), e.lineTo(s, u), e.lineTo(ht * n - dt * i, dt * n + ht * i), e.lineTo(ht * a - dt * o, dt * a + ht * o), e.lineTo(ht * s - dt * u, dt * s + ht * u), e.lineTo(ht * n + dt * i, ht * i - dt * n), e.lineTo(ht * a + dt * o, ht * o - dt * a), e.lineTo(ht * s + dt * u, ht * u - dt * s), e.closePath()
    }
};

function nE(e, t) {
    var r = null;
    e = typeof e == "function" ? e : Pe(e || Cl), t = typeof t == "function" ? t : Pe(t === void 0 ? 64 : +t);

    function n() {
        var i;
        if (r || (r = i = no()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), i) return r = null, i + "" || null
    }
    return n.type = function(i) {
        return arguments.length ? (e = typeof i == "function" ? i : Pe(i), n) : e
    }, n.size = function(i) {
        return arguments.length ? (t = typeof i == "function" ? i : Pe(+i), n) : t
    }, n.context = function(i) {
        return arguments.length ? (r = i == null ? null : i, n) : r
    }, n
}

function ra() {}

function na(e, t, r) {
    e._context.bezierCurveTo((2 * e._x0 + e._x1) / 3, (2 * e._y0 + e._y1) / 3, (e._x0 + 2 * e._x1) / 3, (e._y0 + 2 * e._y1) / 3, (e._x0 + 4 * e._x1 + t) / 6, (e._y0 + 4 * e._y1 + r) / 6)
}

function Mm(e) {
    this._context = e
}
Mm.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
    },
    lineEnd: function() {
        switch (this._point) {
            case 3:
                na(this, this._x1, this._y1);
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break
        }(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line
    },
    point: function(e, t) {
        switch (e = +e, t = +t, this._point) {
            case 0:
                this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
            default:
                na(this, e, t);
                break
        }
        this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t
    }
};

function iE(e) {
    return new Mm(e)
}

function Im(e) {
    this._context = e
}
Im.prototype = {
    areaStart: ra,
    areaEnd: ra,
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
    },
    lineEnd: function() {
        switch (this._point) {
            case 1: {
                this._context.moveTo(this._x2, this._y2), this._context.closePath();
                break
            }
            case 2: {
                this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                break
            }
            case 3: {
                this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
                break
            }
        }
    },
    point: function(e, t) {
        switch (e = +e, t = +t, this._point) {
            case 0:
                this._point = 1, this._x2 = e, this._y2 = t;
                break;
            case 1:
                this._point = 2, this._x3 = e, this._y3 = t;
                break;
            case 2:
                this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
                break;
            default:
                na(this, e, t);
                break
        }
        this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t
    }
};

function aE(e) {
    return new Im(e)
}

function Nm(e) {
    this._context = e
}
Nm.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
    },
    lineEnd: function() {
        (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line
    },
    point: function(e, t) {
        switch (e = +e, t = +t, this._point) {
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                var r = (this._x0 + 4 * this._x1 + e) / 6,
                    n = (this._y0 + 4 * this._y1 + t) / 6;
                this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
                break;
            case 3:
                this._point = 4;
            default:
                na(this, e, t);
                break
        }
        this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t
    }
};

function oE(e) {
    return new Nm(e)
}

function Rm(e) {
    this._context = e
}
Rm.prototype = {
    areaStart: ra,
    areaEnd: ra,
    lineStart: function() {
        this._point = 0
    },
    lineEnd: function() {
        this._point && this._context.closePath()
    },
    point: function(e, t) {
        e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t))
    }
};

function sE(e) {
    return new Rm(e)
}

function cf(e) {
    return e < 0 ? -1 : 1
}

function ff(e, t, r) {
    var n = e._x1 - e._x0,
        i = t - e._x1,
        a = (e._y1 - e._y0) / (n || i < 0 && -0),
        o = (r - e._y1) / (i || n < 0 && -0),
        s = (a * i + o * n) / (n + i);
    return (cf(a) + cf(o)) * Math.min(Math.abs(a), Math.abs(o), .5 * Math.abs(s)) || 0
}

function hf(e, t) {
    var r = e._x1 - e._x0;
    return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t
}

function Yo(e, t, r) {
    var n = e._x0,
        i = e._y0,
        a = e._x1,
        o = e._y1,
        s = (a - n) / 3;
    e._context.bezierCurveTo(n + s, i + s * t, a - s, o - s * r, a, o)
}

function ia(e) {
    this._context = e
}
ia.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
    },
    lineEnd: function() {
        switch (this._point) {
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
            case 3:
                Yo(this, this._t0, hf(this, this._t0));
                break
        }(this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line
    },
    point: function(e, t) {
        var r = NaN;
        if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
            switch (this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, Yo(this, hf(this, r = ff(this, e, t)), r);
                    break;
                default:
                    Yo(this, this._t0, r = ff(this, e, t));
                    break
            }
            this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r
        }
    }
};

function Dm(e) {
    this._context = new Lm(e)
}(Dm.prototype = Object.create(ia.prototype)).point = function(e, t) {
    ia.prototype.point.call(this, t, e)
};

function Lm(e) {
    this._context = e
}
Lm.prototype = {
    moveTo: function(e, t) {
        this._context.moveTo(t, e)
    },
    closePath: function() {
        this._context.closePath()
    },
    lineTo: function(e, t) {
        this._context.lineTo(t, e)
    },
    bezierCurveTo: function(e, t, r, n, i, a) {
        this._context.bezierCurveTo(t, e, n, r, a, i)
    }
};

function uE(e) {
    return new ia(e)
}

function lE(e) {
    return new Dm(e)
}

function jm(e) {
    this._context = e
}
jm.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x = [], this._y = []
    },
    lineEnd: function() {
        var e = this._x,
            t = this._y,
            r = e.length;
        if (r)
            if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2) this._context.lineTo(e[1], t[1]);
            else
                for (var n = df(e), i = df(t), a = 0, o = 1; o < r; ++a, ++o) this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o]);
        (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
    },
    point: function(e, t) {
        this._x.push(+e), this._y.push(+t)
    }
};

function df(e) {
    var t, r = e.length - 1,
        n, i = new Array(r),
        a = new Array(r),
        o = new Array(r);
    for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
    for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
    for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
    for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
    return [i, a]
}

function cE(e) {
    return new jm(e)
}

function oo(e, t) {
    this._context = e, this._t = t
}
oo.prototype = {
    areaStart: function() {
        this._line = 0
    },
    areaEnd: function() {
        this._line = NaN
    },
    lineStart: function() {
        this._x = this._y = NaN, this._point = 0
    },
    lineEnd: function() {
        0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
    },
    point: function(e, t) {
        switch (e = +e, t = +t, this._point) {
            case 0:
                this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
                break;
            case 1:
                this._point = 2;
            default: {
                if (this._t <= 0) this._context.lineTo(this._x, t), this._context.lineTo(e, t);
                else {
                    var r = this._x * (1 - this._t) + e * this._t;
                    this._context.lineTo(r, this._y), this._context.lineTo(r, t)
                }
                break
            }
        }
        this._x = e, this._y = t
    }
};

function fE(e) {
    return new oo(e, .5)
}

function hE(e) {
    return new oo(e, 0)
}

function dE(e) {
    return new oo(e, 1)
}

function Zr(e, t) {
    if ((o = e.length) > 1)
        for (var r = 1, n, i, a = e[t[0]], o, s = a.length; r < o; ++r)
            for (i = a, a = e[t[r]], n = 0; n < s; ++n) a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1]
}

function Xs(e) {
    for (var t = e.length, r = new Array(t); --t >= 0;) r[t] = t;
    return r
}

function pE(e, t) {
    return e[t]
}

function mE(e) {
    const t = [];
    return t.key = e, t
}

function vE() {
    var e = Pe([]),
        t = Xs,
        r = Zr,
        n = pE;

    function i(a) {
        var o = Array.from(e.apply(this, arguments), mE),
            s, u = o.length,
            l = -1,
            c;
        for (const f of a)
            for (s = 0, ++l; s < u; ++s)(o[s][l] = [0, +n(f, o[s].key, l, a)]).data = f;
        for (s = 0, c = Tl(t(o)); s < u; ++s) o[c[s]].index = s;
        return r(o, c), o
    }
    return i.keys = function(a) {
        return arguments.length ? (e = typeof a == "function" ? a : Pe(Array.from(a)), i) : e
    }, i.value = function(a) {
        return arguments.length ? (n = typeof a == "function" ? a : Pe(+a), i) : n
    }, i.order = function(a) {
        return arguments.length ? (t = a == null ? Xs : typeof a == "function" ? a : Pe(Array.from(a)), i) : t
    }, i.offset = function(a) {
        return arguments.length ? (r = a == null ? Zr : a, i) : r
    }, i
}

function gE(e, t) {
    if ((n = e.length) > 0) {
        for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
            for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
            if (o)
                for (r = 0; r < n; ++r) e[r][i][1] /= o
        }
        Zr(e, t)
    }
}

function yE(e, t) {
    if ((i = e.length) > 0) {
        for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
            for (var o = 0, s = 0; o < i; ++o) s += e[o][r][1] || 0;
            n[r][1] += n[r][0] = -s / 2
        }
        Zr(e, t)
    }
}

function bE(e, t) {
    if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
        for (var r = 0, n = 1, i, a, o; n < a; ++n) {
            for (var s = 0, u = 0, l = 0; s < o; ++s) {
                for (var c = e[t[s]], f = c[n][1] || 0, d = c[n - 1][1] || 0, m = (f - d) / 2, p = 0; p < s; ++p) {
                    var h = e[t[p]],
                        v = h[n][1] || 0,
                        g = h[n - 1][1] || 0;
                    m += v - g
                }
                u += f, l += m * f
            }
            i[n - 1][1] += i[n - 1][0] = r, u && (r -= l / u)
        }
        i[n - 1][1] += i[n - 1][0] = r, Zr(e, t)
    }
}

function Ti(e) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ti = function(r) {
        return typeof r
    } : Ti = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
    }, Ti(e)
}

function xE(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function pf(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function _E(e, t, r) {
    return t && pf(e.prototype, t), r && pf(e, r), e
}

function wE(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && Ks(e, t)
}

function Ks(e, t) {
    return Ks = Object.setPrototypeOf || function(n, i) {
        return n.__proto__ = i, n
    }, Ks(e, t)
}

function SE(e) {
    var t = kE();
    return function() {
        var n = aa(e),
            i;
        if (t) {
            var a = aa(this).constructor;
            i = Reflect.construct(n, arguments, a)
        } else i = n.apply(this, arguments);
        return OE(this, i)
    }
}

function OE(e, t) {
    return t && (Ti(t) === "object" || typeof t == "function") ? t : AE(e)
}

function AE(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function kE() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function aa(e) {
    return aa = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, aa(e)
}
var Fm = {
        symbolCircle: Cl,
        symbolCross: qk,
        symbolDiamond: Yk,
        symbolSquare: Qk,
        symbolStar: Jk,
        symbolTriangle: eE,
        symbolWye: rE
    },
    EE = Math.PI / 180,
    TE = function(t) {
        var r = "symbol".concat(ro(t));
        return Fm[r] || Cl
    },
    CE = function(t, r, n) {
        if (r === "area") return t;
        switch (n) {
            case "cross":
                return 5 * t * t / 9;
            case "diamond":
                return .5 * t * t / Math.sqrt(3);
            case "square":
                return t * t;
            case "star": {
                var i = 18 * EE;
                return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2))
            }
            case "triangle":
                return Math.sqrt(3) * t * t / 4;
            case "wye":
                return (21 - 10 * Math.sqrt(3)) * t * t / 8;
            default:
                return Math.PI * t * t / 4
        }
    },
    Pl = function(e) {
        wE(r, e);
        var t = SE(r);

        function r() {
            return xE(this, r), t.apply(this, arguments)
        }
        return _E(r, [{
            key: "getPath",
            value: function() {
                var i = this.props,
                    a = i.size,
                    o = i.sizeType,
                    s = i.type,
                    u = TE(s),
                    l = nE().type(u).size(CE(a, o, s));
                return l()
            }
        }, {
            key: "render",
            value: function() {
                var i = this.props,
                    a = i.className,
                    o = i.cx,
                    s = i.cy,
                    u = i.size;
                return o === +o && s === +s && u === +u ? C("path", {
                    ...Ae(this.props, !0),
                    className: Ne("recharts-symbols", a),
                    transform: "translate(".concat(o, ", ").concat(s, ")"),
                    d: this.getPath()
                }) : null
            }
        }]), r
    }(R.exports.PureComponent);
Pl.defaultProps = {
    type: "circle",
    size: 64,
    sizeType: "area"
};
Pl.registerSymbol = function(e, t) {
    Fm["symbol".concat(ro(e))] = t
};

function Ci(e) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ci = function(r) {
        return typeof r
    } : Ci = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
    }, Ci(e)
}

function mf(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function PE(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? mf(Object(r), !0).forEach(function(n) {
            Zs(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mf(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function Zs(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function $E(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function vf(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function ME(e, t, r) {
    return t && vf(e.prototype, t), r && vf(e, r), e
}

function IE(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && Js(e, t)
}

function Js(e, t) {
    return Js = Object.setPrototypeOf || function(n, i) {
        return n.__proto__ = i, n
    }, Js(e, t)
}

function NE(e) {
    var t = LE();
    return function() {
        var n = oa(e),
            i;
        if (t) {
            var a = oa(this).constructor;
            i = Reflect.construct(n, arguments, a)
        } else i = n.apply(this, arguments);
        return RE(this, i)
    }
}

function RE(e, t) {
    return t && (Ci(t) === "object" || typeof t == "function") ? t : DE(e)
}

function DE(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function LE() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function oa(e) {
    return oa = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, oa(e)
}
var pt = 32,
    $l = function(e) {
        IE(r, e);
        var t = NE(r);

        function r() {
            return $E(this, r), t.apply(this, arguments)
        }
        return ME(r, [{
            key: "renderIcon",
            value: function(i) {
                var a = this.props.inactiveColor,
                    o = pt / 2,
                    s = pt / 6,
                    u = pt / 3,
                    l = i.inactive ? a : i.color;
                if (i.type === "plainline") return C("line", {
                    strokeWidth: 4,
                    fill: "none",
                    stroke: l,
                    strokeDasharray: i.payload.strokeDasharray,
                    x1: 0,
                    y1: o,
                    x2: pt,
                    y2: o,
                    className: "recharts-legend-icon"
                });
                if (i.type === "line") return C("path", {
                    strokeWidth: 4,
                    fill: "none",
                    stroke: l,
                    d: "M0,".concat(o, "h").concat(u, `
            A`).concat(s, ",").concat(s, ",0,1,1,").concat(2 * u, ",").concat(o, `
            H`).concat(pt, "M").concat(2 * u, ",").concat(o, `
            A`).concat(s, ",").concat(s, ",0,1,1,").concat(u, ",").concat(o),
                    className: "recharts-legend-icon"
                });
                if (i.type === "rect") return C("path", {
                    stroke: "none",
                    fill: l,
                    d: "M0,".concat(pt / 8, "h").concat(pt, "v").concat(pt * 3 / 4, "h").concat(-pt, "z"),
                    className: "recharts-legend-icon"
                });
                if (ve.isValidElement(i.legendIcon)) {
                    var c = PE({}, i);
                    return delete c.legendIcon, ve.cloneElement(i.legendIcon, c)
                }
                return C(Pl, {
                    fill: l,
                    cx: o,
                    cy: o,
                    size: pt,
                    sizeType: "diameter",
                    type: i.type
                })
            }
        }, {
            key: "renderItems",
            value: function() {
                var i = this,
                    a = this.props,
                    o = a.payload,
                    s = a.iconSize,
                    u = a.layout,
                    l = a.formatter,
                    c = a.inactiveColor,
                    f = {
                        x: 0,
                        y: 0,
                        width: pt,
                        height: pt
                    },
                    d = {
                        display: u === "horizontal" ? "inline-block" : "block",
                        marginRight: 10
                    },
                    m = {
                        display: "inline-block",
                        verticalAlign: "middle",
                        marginRight: 4
                    };
                return o.map(function(p, h) {
                    var v, g = p.formatter || l,
                        x = Ne((v = {
                            "recharts-legend-item": !0
                        }, Zs(v, "legend-item-".concat(h), !0), Zs(v, "inactive", p.inactive), v));
                    if (p.type === "none") return null;
                    var y = p.inactive ? c : p.color;
                    return te("li", {
                        className: x,
                        style: d,
                        ...Kp(i.props, p, h),
                        children: [C(Ds, {
                            width: s,
                            height: s,
                            viewBox: f,
                            style: m,
                            children: i.renderIcon(p)
                        }), C("span", {
                            className: "recharts-legend-item-text",
                            style: {
                                color: y
                            },
                            children: g ? g(p.value, p, h) : p.value
                        })]
                    }, "legend-item-".concat(h))
                })
            }
        }, {
            key: "render",
            value: function() {
                var i = this.props,
                    a = i.payload,
                    o = i.layout,
                    s = i.align;
                if (!a || !a.length) return null;
                var u = {
                    padding: 0,
                    margin: 0,
                    textAlign: o === "horizontal" ? s : "left"
                };
                return C("ul", {
                    className: "recharts-default-legend",
                    style: u,
                    children: this.renderItems()
                })
            }
        }]), r
    }(R.exports.PureComponent);
$l.displayName = "Legend";
$l.defaultProps = {
    iconSize: 14,
    layout: "horizontal",
    align: "center",
    verticalAlign: "middle",
    inactiveColor: "#ccc"
};
var jE = hr,
    FE = dr,
    BE = "[object Number]";

function zE(e) {
    return typeof e == "number" || FE(e) && jE(e) == BE
}
var Bm = zE,
    UE = Bm;

function HE(e) {
    return UE(e) && e != +e
}
var ni = HE,
    WE = hr,
    GE = _e,
    qE = dr,
    VE = "[object String]";

function YE(e) {
    return typeof e == "string" || !GE(e) && qE(e) && WE(e) == VE
}
var ii = YE,
    Tt = function(t) {
        return t === 0 ? 0 : t > 0 ? 1 : -1
    },
    Sr = function(t) {
        return ii(t) && t.indexOf("%") === t.length - 1
    },
    oe = function(t) {
        return Bm(t) && !ni(t)
    },
    Be = function(t) {
        return oe(t) || ii(t)
    },
    XE = 0,
    so = function(t) {
        var r = ++XE;
        return "".concat(t || "").concat(r)
    },
    Jr = function(t, r) {
        var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
            i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
        if (!oe(t) && !ii(t)) return n;
        var a;
        if (Sr(t)) {
            var o = t.indexOf("%");
            a = r * parseFloat(t.slice(0, o)) / 100
        } else a = +t;
        return ni(a) && (a = n), i && a > r && (a = r), a
    },
    er = function(t) {
        if (!t) return null;
        var r = Object.keys(t);
        return r && r.length ? t[r[0]] : null
    },
    KE = function(t) {
        if (!_e(t)) return !1;
        for (var r = t.length, n = {}, i = 0; i < r; i++)
            if (!n[t[i]]) n[t[i]] = !0;
            else return !0;
        return !1
    },
    Lr = function(t, r) {
        return oe(t) && oe(r) ? function(n) {
            return t + n * (r - t)
        } : function() {
            return r
        }
    };

function sa(e, t, r) {
    return !e || !e.length ? null : e.find(function(n) {
        return n && (typeof t == "function" ? t(n) : He(n, t)) === r
    })
}

function Pi(e) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Pi = function(r) {
        return typeof r
    } : Pi = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
    }, Pi(e)
}

function gf(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function jr(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? gf(Object(r), !0).forEach(function(n) {
            ZE(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gf(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function ZE(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function JE(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function yf(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function QE(e, t, r) {
    return t && yf(e.prototype, t), r && yf(e, r), e
}

function eT(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && Qs(e, t)
}

function Qs(e, t) {
    return Qs = Object.setPrototypeOf || function(n, i) {
        return n.__proto__ = i, n
    }, Qs(e, t)
}

function tT(e) {
    var t = iT();
    return function() {
        var n = ua(e),
            i;
        if (t) {
            var a = ua(this).constructor;
            i = Reflect.construct(n, arguments, a)
        } else i = n.apply(this, arguments);
        return rT(this, i)
    }
}

function rT(e, t) {
    return t && (Pi(t) === "object" || typeof t == "function") ? t : nT(e)
}

function nT(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function iT() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function ua(e) {
    return ua = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, ua(e)
}

function aT(e, t) {
    if (e == null) return {};
    var r = oT(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]))
    }
    return r
}

function oT(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i, a;
    for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r
}

function sT(e) {
    return e.value
}

function uT(e, t) {
    return e === !0 ? ea(t, sT) : me(e) ? ea(t, e) : t
}

function lT(e, t) {
    if (ve.isValidElement(e)) return ve.cloneElement(e, t);
    if (me(e)) return ve.createElement(e, t);
    t.ref;
    var r = aT(t, ["ref"]);
    return C($l, {
        ...r
    })
}
var bf = 1,
    Un = function(e) {
        eT(r, e);
        var t = tT(r);

        function r() {
            var n;
            JE(this, r);
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
            return n = t.call.apply(t, [this].concat(a)), n.wrapperNode = void 0, n.state = {
                boxWidth: -1,
                boxHeight: -1
            }, n
        }
        return QE(r, [{
            key: "componentDidMount",
            value: function() {
                this.updateBBox()
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.updateBBox()
            }
        }, {
            key: "getBBox",
            value: function() {
                return this.wrapperNode && this.wrapperNode.getBoundingClientRect ? this.wrapperNode.getBoundingClientRect() : null
            }
        }, {
            key: "getBBoxSnapshot",
            value: function() {
                var i = this.state,
                    a = i.boxWidth,
                    o = i.boxHeight;
                return a >= 0 && o >= 0 ? {
                    width: a,
                    height: o
                } : null
            }
        }, {
            key: "getDefaultPosition",
            value: function(i) {
                var a = this.props,
                    o = a.layout,
                    s = a.align,
                    u = a.verticalAlign,
                    l = a.margin,
                    c = a.chartWidth,
                    f = a.chartHeight,
                    d, m;
                if (!i || (i.left === void 0 || i.left === null) && (i.right === void 0 || i.right === null))
                    if (s === "center" && o === "vertical") {
                        var p = this.getBBoxSnapshot() || {
                            width: 0
                        };
                        d = {
                            left: ((c || 0) - p.width) / 2
                        }
                    } else d = s === "right" ? {
                        right: l && l.right || 0
                    } : {
                        left: l && l.left || 0
                    };
                if (!i || (i.top === void 0 || i.top === null) && (i.bottom === void 0 || i.bottom === null))
                    if (u === "middle") {
                        var h = this.getBBoxSnapshot() || {
                            height: 0
                        };
                        m = {
                            top: ((f || 0) - h.height) / 2
                        }
                    } else m = u === "bottom" ? {
                        bottom: l && l.bottom || 0
                    } : {
                        top: l && l.top || 0
                    };
                return jr(jr({}, d), m)
            }
        }, {
            key: "updateBBox",
            value: function() {
                var i = this.state,
                    a = i.boxWidth,
                    o = i.boxHeight,
                    s = this.props.onBBoxUpdate;
                if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                    var u = this.wrapperNode.getBoundingClientRect();
                    (Math.abs(u.width - a) > bf || Math.abs(u.height - o) > bf) && this.setState({
                        boxWidth: u.width,
                        boxHeight: u.height
                    }, function() {
                        s && s(u)
                    })
                } else(a !== -1 || o !== -1) && this.setState({
                    boxWidth: -1,
                    boxHeight: -1
                }, function() {
                    s && s(null)
                })
            }
        }, {
            key: "render",
            value: function() {
                var i = this,
                    a = this.props,
                    o = a.content,
                    s = a.width,
                    u = a.height,
                    l = a.wrapperStyle,
                    c = a.payloadUniqBy,
                    f = a.payload,
                    d = jr(jr({
                        position: "absolute",
                        width: s || "auto",
                        height: u || "auto"
                    }, this.getDefaultPosition(l)), l);
                return C("div", {
                    className: "recharts-legend-wrapper",
                    style: d,
                    ref: function(p) {
                        i.wrapperNode = p
                    },
                    children: lT(o, jr(jr({}, this.props), {}, {
                        payload: uT(c, f)
                    }))
                })
            }
        }], [{
            key: "getWithHeight",
            value: function(i, a) {
                var o = i.props.layout;
                return o === "vertical" && oe(i.props.height) ? {
                    height: i.props.height
                } : o === "horizontal" ? {
                    width: i.props.width || a
                } : null
            }
        }]), r
    }(R.exports.PureComponent);
Un.displayName = "Legend";
Un.defaultProps = {
    iconSize: 14,
    layout: "horizontal",
    align: "center",
    verticalAlign: "bottom"
};

function cT(e) {
    return e == null
}
var pe = cT,
    fT = typeof WeakSet == "function",
    xf = Object.keys;

function Ml(e, t) {
    return e === t || e !== e && t !== t
}

function _f(e) {
    return e.constructor === Object || e.constructor == null
}

function wf(e) {
    return !!e && typeof e.then == "function"
}

function Sf(e) {
    return !!(e && e.$$typeof)
}

function hT() {
    var e = [];
    return {
        add: function(t) {
            e.push(t)
        },
        has: function(t) {
            return e.indexOf(t) !== -1
        }
    }
}
var dT = function(e) {
    return e ? function() {
        return new WeakSet
    } : hT
}(fT);

function zm(e) {
    return function(r) {
        var n = e || r;
        return function(a, o, s) {
            s === void 0 && (s = dT());
            var u = !!a && typeof a == "object",
                l = !!o && typeof o == "object";
            if (u || l) {
                var c = u && s.has(a),
                    f = l && s.has(o);
                if (c || f) return c && f;
                u && s.add(a), l && s.add(o)
            }
            return n(a, o, s)
        }
    }
}

function pT(e, t, r, n) {
    var i = e.length;
    if (t.length !== i) return !1;
    for (; i-- > 0;)
        if (!r(e[i], t[i], n)) return !1;
    return !0
}

function mT(e, t, r, n) {
    var i = e.size === t.size;
    if (i && e.size) {
        var a = {};
        e.forEach(function(o, s) {
            if (i) {
                var u = !1,
                    l = 0;
                t.forEach(function(c, f) {
                    !u && !a[l] && (u = r(s, f, n) && r(o, c, n), u && (a[l] = !0)), l++
                }), i = u
            }
        })
    }
    return i
}
var vT = "_owner",
    gT = Function.prototype.bind.call(Function.prototype.call, Object.prototype.hasOwnProperty);

function Of(e, t, r, n) {
    var i = xf(e),
        a = i.length;
    if (xf(t).length !== a) return !1;
    if (a)
        for (var o = void 0; a-- > 0;) {
            if (o = i[a], o === vT) {
                var s = Sf(e),
                    u = Sf(t);
                if ((s || u) && s !== u) return !1
            }
            if (!gT(t, o) || !r(e[o], t[o], n)) return !1
        }
    return !0
}

function yT(e, t) {
    return e.source === t.source && e.global === t.global && e.ignoreCase === t.ignoreCase && e.multiline === t.multiline && e.unicode === t.unicode && e.sticky === t.sticky && e.lastIndex === t.lastIndex
}

function bT(e, t, r, n) {
    var i = e.size === t.size;
    if (i && e.size) {
        var a = {};
        e.forEach(function(o) {
            if (i) {
                var s = !1,
                    u = 0;
                t.forEach(function(l) {
                    !s && !a[u] && (s = r(o, l, n), s && (a[u] = !0)), u++
                }), i = s
            }
        })
    }
    return i
}
var xT = typeof Map == "function",
    _T = typeof Set == "function";

function uo(e) {
    var t = typeof e == "function" ? e(r) : r;

    function r(n, i, a) {
        if (n === i) return !0;
        if (n && i && typeof n == "object" && typeof i == "object") {
            if (_f(n) && _f(i)) return Of(n, i, t, a);
            var o = Array.isArray(n),
                s = Array.isArray(i);
            return o || s ? o === s && pT(n, i, t, a) : (o = n instanceof Date, s = i instanceof Date, o || s ? o === s && Ml(n.getTime(), i.getTime()) : (o = n instanceof RegExp, s = i instanceof RegExp, o || s ? o === s && yT(n, i) : wf(n) || wf(i) ? n === i : xT && (o = n instanceof Map, s = i instanceof Map, o || s) ? o === s && mT(n, i, t, a) : _T && (o = n instanceof Set, s = i instanceof Set, o || s) ? o === s && bT(n, i, t, a) : Of(n, i, t, a)))
        }
        return n !== n && i !== i
    }
    return r
}
var wT = uo();
uo(function() {
    return Ml
});
uo(zm());
uo(zm(Ml));

function Af(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        r = -1,
        n = function i(a) {
            r < 0 && (r = a), a - r > t ? (e(a), r = -1) : requestAnimationFrame(i)
        };
    requestAnimationFrame(n)
}

function $i(e) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? $i = function(r) {
        return typeof r
    } : $i = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
    }, $i(e)
}

function ST(e) {
    return ET(e) || kT(e) || AT(e) || OT()
}

function OT() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function AT(e, t) {
    if (!!e) {
        if (typeof e == "string") return kf(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return kf(e, t)
    }
}

function kf(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function kT(e) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e)
}

function ET(e) {
    if (Array.isArray(e)) return e
}

function TT() {
    var e = {},
        t = function() {
            return null
        },
        r = !1,
        n = function i(a) {
            if (!r) {
                if (Array.isArray(a)) {
                    if (!a.length) return;
                    var o = a,
                        s = ST(o),
                        u = s[0],
                        l = s.slice(1);
                    if (typeof u == "number") {
                        Af(i.bind(null, l), u);
                        return
                    }
                    i(u), Af(i.bind(null, l));
                    return
                }
                $i(a) === "object" && (e = a, t(e)), typeof a == "function" && a()
            }
        };
    return {
        stop: function() {
            r = !0
        },
        start: function(a) {
            r = !1, n(a)
        },
        subscribe: function(a) {
            return t = a,
                function() {
                    t = function() {
                        return null
                    }
                }
        }
    }
}

function Ef(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Qr(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Ef(Object(r), !0).forEach(function(n) {
            la(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ef(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function la(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}
var CT = ["Webkit", "Moz", "O", "ms"],
    PT = ["-webkit-", "-moz-", "-o-", "-ms-"],
    $T = ["transform", "transformOrigin", "transition"],
    MT = function(t, r) {
        return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
            return n.filter(function(a) {
                return i.includes(a)
            })
        })
    },
    IT = function(t) {
        return t
    },
    NT = function(t) {
        return t.replace(/([A-Z])/g, function(r) {
            return "-".concat(r.toLowerCase())
        })
    },
    RT = function(t, r) {
        if ($T.indexOf(t) === -1) return la({}, t, r);
        var n = t === "transition",
            i = t.replace(/(\w)/, function(o) {
                return o.toUpperCase()
            }),
            a = r;
        return CT.reduce(function(o, s, u) {
            return n && (a = r.replace(/(transform|transform-origin)/gim, "".concat(PT[u], "$1"))), Qr(Qr({}, o), {}, la({}, s + i, a))
        }, {})
    },
    Bn = function(t, r) {
        return Object.keys(r).reduce(function(n, i) {
            return Qr(Qr({}, n), {}, la({}, i, t(i, r[i])))
        }, {})
    },
    eu = function(t) {
        return Object.keys(t).reduce(function(r, n) {
            return Qr(Qr({}, r), RT(n, r[n]))
        }, t)
    },
    Tf = function(t, r, n) {
        return t.map(function(i) {
            return "".concat(NT(i), " ").concat(r, "ms ").concat(n)
        }).join(",")
    };

function DT(e, t) {
    return FT(e) || jT(e, t) || Um(e, t) || LT()
}

function LT() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function jT(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
        var r = [],
            n = !0,
            i = !1,
            a = void 0;
        try {
            for (var o = e[Symbol.iterator](), s; !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t)); n = !0);
        } catch (u) {
            i = !0, a = u
        } finally {
            try {
                !n && o.return != null && o.return()
            } finally {
                if (i) throw a
            }
        }
        return r
    }
}

function FT(e) {
    if (Array.isArray(e)) return e
}

function BT(e) {
    return HT(e) || UT(e) || Um(e) || zT()
}

function zT() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function Um(e, t) {
    if (!!e) {
        if (typeof e == "string") return tu(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return tu(e, t)
    }
}

function UT(e) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e)
}

function HT(e) {
    if (Array.isArray(e)) return tu(e)
}

function tu(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}
var ca = 1e-4,
    Hm = function(t, r) {
        return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1]
    },
    Wm = function(t, r) {
        return t.map(function(n, i) {
            return n * Math.pow(r, i)
        }).reduce(function(n, i) {
            return n + i
        })
    },
    Cf = function(t, r) {
        return function(n) {
            var i = Hm(t, r);
            return Wm(i, n)
        }
    },
    WT = function(t, r) {
        return function(n) {
            var i = Hm(t, r),
                a = [].concat(BT(i.map(function(o, s) {
                    return o * s
                }).slice(1)), [0]);
            return Wm(a, n)
        }
    },
    Pf = function() {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
        var i = r[0],
            a = r[1],
            o = r[2],
            s = r[3];
        if (r.length === 1) switch (r[0]) {
            case "linear":
                i = 0, a = 0, o = 1, s = 1;
                break;
            case "ease":
                i = .25, a = .1, o = .25, s = 1;
                break;
            case "ease-in":
                i = .42, a = 0, o = 1, s = 1;
                break;
            case "ease-out":
                i = .42, a = 0, o = .58, s = 1;
                break;
            case "ease-in-out":
                i = 0, a = 0, o = .58, s = 1;
                break;
            default: {
                var u = r[0].split("(");
                if (u[0] === "cubic-bezier" && u[1].split(")")[0].split(",").length === 4) {
                    var l = u[1].split(")")[0].split(",").map(function(v) {
                            return parseFloat(v)
                        }),
                        c = DT(l, 4);
                    i = c[0], a = c[1], o = c[2], s = c[3]
                }
            }
        }
        var f = Cf(i, o),
            d = Cf(a, s),
            m = WT(i, o),
            p = function(g) {
                return g > 1 ? 1 : g < 0 ? 0 : g
            },
            h = function(g) {
                for (var x = g > 1 ? 1 : g, y = x, b = 0; b < 8; ++b) {
                    var _ = f(y) - x,
                        w = m(y);
                    if (Math.abs(_ - x) < ca || w < ca) return d(y);
                    y = p(y - _ / w)
                }
                return d(y)
            };
        return h.isStepper = !1, h
    },
    GT = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            r = t.stiff,
            n = r === void 0 ? 100 : r,
            i = t.damping,
            a = i === void 0 ? 8 : i,
            o = t.dt,
            s = o === void 0 ? 17 : o,
            u = function(c, f, d) {
                var m = -(c - f) * n,
                    p = d * a,
                    h = d + (m - p) * s / 1e3,
                    v = d * s / 1e3 + c;
                return Math.abs(v - f) < ca && Math.abs(h) < ca ? [f, 0] : [v, h]
            };
        return u.isStepper = !0, u.dt = s, u
    },
    qT = function() {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
        var i = r[0];
        if (typeof i == "string") switch (i) {
            case "ease":
            case "ease-in-out":
            case "ease-out":
            case "ease-in":
            case "linear":
                return Pf(i);
            case "spring":
                return GT();
            default:
                if (i.split("(")[0] === "cubic-bezier") return Pf(i)
        }
        return typeof i == "function" ? i : null
    };

function $f(e) {
    return XT(e) || YT(e) || Gm(e) || VT()
}

function VT() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function YT(e) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e)
}

function XT(e) {
    if (Array.isArray(e)) return nu(e)
}

function Mf(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Ye(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Mf(Object(r), !0).forEach(function(n) {
            ru(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mf(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function ru(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function KT(e, t) {
    return QT(e) || JT(e, t) || Gm(e, t) || ZT()
}

function ZT() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function Gm(e, t) {
    if (!!e) {
        if (typeof e == "string") return nu(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return nu(e, t)
    }
}

function nu(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function JT(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
        var r = [],
            n = !0,
            i = !1,
            a = void 0;
        try {
            for (var o = e[Symbol.iterator](), s; !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t)); n = !0);
        } catch (u) {
            i = !0, a = u
        } finally {
            try {
                !n && o.return != null && o.return()
            } finally {
                if (i) throw a
            }
        }
        return r
    }
}

function QT(e) {
    if (Array.isArray(e)) return e
}
var fa = function(t, r, n) {
        return t + (r - t) * n
    },
    iu = function(t) {
        var r = t.from,
            n = t.to;
        return r !== n
    },
    eC = function e(t, r, n) {
        var i = Bn(function(a, o) {
            if (iu(o)) {
                var s = t(o.from, o.to, o.velocity),
                    u = KT(s, 2),
                    l = u[0],
                    c = u[1];
                return Ye(Ye({}, o), {}, {
                    from: l,
                    velocity: c
                })
            }
            return o
        }, r);
        return n < 1 ? Bn(function(a, o) {
            return iu(o) ? Ye(Ye({}, o), {}, {
                velocity: fa(o.velocity, i[a].velocity, n),
                from: fa(o.from, i[a].from, n)
            }) : o
        }, r) : e(t, i, n - 1)
    };
const tC = function(e, t, r, n, i) {
    var a = MT(e, t),
        o = a.reduce(function(v, g) {
            return Ye(Ye({}, v), {}, ru({}, g, [e[g], t[g]]))
        }, {}),
        s = a.reduce(function(v, g) {
            return Ye(Ye({}, v), {}, ru({}, g, {
                from: e[g],
                velocity: 0,
                to: t[g]
            }))
        }, {}),
        u = -1,
        l, c, f = function() {
            return null
        },
        d = function() {
            return Bn(function(g, x) {
                return x.from
            }, s)
        },
        m = function() {
            return !Object.values(s).filter(iu).length
        },
        p = function(g) {
            l || (l = g);
            var x = g - l,
                y = x / r.dt;
            s = eC(r, s, y), i(Ye(Ye(Ye({}, e), t), d())), l = g, m() || (u = requestAnimationFrame(f))
        },
        h = function(g) {
            c || (c = g);
            var x = (g - c) / n,
                y = Bn(function(_, w) {
                    return fa.apply(void 0, $f(w).concat([r(x)]))
                }, o);
            if (i(Ye(Ye(Ye({}, e), t), y)), x < 1) u = requestAnimationFrame(f);
            else {
                var b = Bn(function(_, w) {
                    return fa.apply(void 0, $f(w).concat([r(1)]))
                }, o);
                i(Ye(Ye(Ye({}, e), t), b))
            }
        };
    return f = r.isStepper ? p : h,
        function() {
            return requestAnimationFrame(f),
                function() {
                    cancelAnimationFrame(u)
                }
        }
};

function Mi(e) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Mi = function(r) {
        return typeof r
    } : Mi = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
    }, Mi(e)
}

function rC(e, t) {
    if (e == null) return {};
    var r = nC(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]))
    }
    return r
}

function nC(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i, a;
    for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r
}

function Xo(e) {
    return sC(e) || oC(e) || aC(e) || iC()
}

function iC() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function aC(e, t) {
    if (!!e) {
        if (typeof e == "string") return au(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return au(e, t)
    }
}

function oC(e) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e)
}

function sC(e) {
    if (Array.isArray(e)) return au(e)
}

function au(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function If(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function _t(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? If(Object(r), !0).forEach(function(n) {
            Ln(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : If(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function Ln(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function uC(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Nf(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function lC(e, t, r) {
    return t && Nf(e.prototype, t), r && Nf(e, r), e
}

function cC(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && ou(e, t)
}

function ou(e, t) {
    return ou = Object.setPrototypeOf || function(n, i) {
        return n.__proto__ = i, n
    }, ou(e, t)
}

function fC(e) {
    var t = hC();
    return function() {
        var n = ha(e),
            i;
        if (t) {
            var a = ha(this).constructor;
            i = Reflect.construct(n, arguments, a)
        } else i = n.apply(this, arguments);
        return su(this, i)
    }
}

function su(e, t) {
    return t && (Mi(t) === "object" || typeof t == "function") ? t : uu(e)
}

function uu(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function hC() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function ha(e) {
    return ha = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, ha(e)
}
var en = function(e) {
    cC(r, e);
    var t = fC(r);

    function r(n, i) {
        var a;
        uC(this, r), a = t.call(this, n, i);
        var o = a.props,
            s = o.isActive,
            u = o.attributeName,
            l = o.from,
            c = o.to,
            f = o.steps,
            d = o.children;
        if (a.handleStyleChange = a.handleStyleChange.bind(uu(a)), a.changeStyle = a.changeStyle.bind(uu(a)), !s) return a.state = {
            style: {}
        }, typeof d == "function" && (a.state = {
            style: c
        }), su(a);
        if (f && f.length) a.state = {
            style: f[0].style
        };
        else if (l) {
            if (typeof d == "function") return a.state = {
                style: l
            }, su(a);
            a.state = {
                style: u ? Ln({}, u, l) : l
            }
        } else a.state = {
            style: {}
        };
        return a
    }
    return lC(r, [{
        key: "componentDidMount",
        value: function() {
            var i = this.props,
                a = i.isActive,
                o = i.canBegin;
            this.mounted = !0, !(!a || !o) && this.runAnimation(this.props)
        }
    }, {
        key: "componentDidUpdate",
        value: function(i) {
            var a = this.props,
                o = a.isActive,
                s = a.canBegin,
                u = a.attributeName,
                l = a.shouldReAnimate;
            if (!!s) {
                if (!o) {
                    var c = {
                        style: u ? Ln({}, u, this.props.to) : this.props.to
                    };
                    this.state && this.state.style && (u && this.state.style[u] !== this.props.to || !u && this.state.style !== this.props.to) && this.setState(c);
                    return
                }
                if (!(wT(i.to, this.props.to) && i.canBegin && i.isActive)) {
                    var f = !i.canBegin || !i.isActive;
                    this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                    var d = f || l ? this.props.from : i.to;
                    if (this.state && this.state.style) {
                        var m = {
                            style: u ? Ln({}, u, d) : d
                        };
                        (u && this.state.style[u] !== d || !u && this.state.style !== d) && this.setState(m)
                    }
                    this.runAnimation(_t(_t({}, this.props), {}, {
                        from: d,
                        begin: 0
                    }))
                }
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function() {
            this.mounted = !1, this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation()
        }
    }, {
        key: "runJSAnimation",
        value: function(i) {
            var a = this,
                o = i.from,
                s = i.to,
                u = i.duration,
                l = i.easing,
                c = i.begin,
                f = i.onAnimationEnd,
                d = i.onAnimationStart,
                m = tC(o, s, qT(l), u, this.changeStyle),
                p = function() {
                    a.stopJSAnimation = m()
                };
            this.manager.start([d, c, p, u, f])
        }
    }, {
        key: "runStepAnimation",
        value: function(i) {
            var a = this,
                o = i.steps,
                s = i.begin,
                u = i.onAnimationStart,
                l = o[0],
                c = l.style,
                f = l.duration,
                d = f === void 0 ? 0 : f,
                m = function(h, v, g) {
                    if (g === 0) return h;
                    var x = v.duration,
                        y = v.easing,
                        b = y === void 0 ? "ease" : y,
                        _ = v.style,
                        w = v.properties,
                        A = v.onAnimationEnd,
                        E = g > 0 ? o[g - 1] : v,
                        k = w || Object.keys(_);
                    if (typeof b == "function" || b === "spring") return [].concat(Xo(h), [a.runJSAnimation.bind(a, {
                        from: E.style,
                        to: _,
                        duration: x,
                        easing: b
                    }), x]);
                    var N = Tf(k, x, b),
                        I = _t(_t(_t({}, E.style), _), {}, {
                            transition: N
                        });
                    return [].concat(Xo(h), [I, x, A]).filter(IT)
                };
            return this.manager.start([u].concat(Xo(o.reduce(m, [c, Math.max(d, s)])), [i.onAnimationEnd]))
        }
    }, {
        key: "runAnimation",
        value: function(i) {
            this.manager || (this.manager = TT());
            var a = i.begin,
                o = i.duration,
                s = i.attributeName,
                u = i.to,
                l = i.easing,
                c = i.onAnimationStart,
                f = i.onAnimationEnd,
                d = i.steps,
                m = i.children,
                p = this.manager;
            if (this.unSubscribe = p.subscribe(this.handleStyleChange), typeof l == "function" || typeof m == "function" || l === "spring") {
                this.runJSAnimation(i);
                return
            }
            if (d.length > 1) {
                this.runStepAnimation(i);
                return
            }
            var h = s ? Ln({}, s, u) : u,
                v = Tf(Object.keys(h), o, l);
            p.start([c, a, _t(_t({}, h), {}, {
                transition: v
            }), o, f])
        }
    }, {
        key: "handleStyleChange",
        value: function(i) {
            this.changeStyle(i)
        }
    }, {
        key: "changeStyle",
        value: function(i) {
            this.mounted && this.setState({
                style: i
            })
        }
    }, {
        key: "render",
        value: function() {
            var i = this.props,
                a = i.children;
            i.begin, i.duration, i.attributeName, i.easing;
            var o = i.isActive;
            i.steps, i.from, i.to, i.canBegin, i.onAnimationEnd, i.shouldReAnimate, i.onAnimationReStart;
            var s = rC(i, ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"]),
                u = R.exports.Children.count(a),
                l = eu(this.state.style);
            if (typeof a == "function") return a(l);
            if (!o || u === 0) return a;
            var c = function(d) {
                var m = d.props,
                    p = m.style,
                    h = p === void 0 ? {} : p,
                    v = m.className,
                    g = R.exports.cloneElement(d, _t(_t({}, s), {}, {
                        style: _t(_t({}, h), l),
                        className: v
                    }));
                return g
            };
            return u === 1 ? c(R.exports.Children.only(a)) : C("div", {
                children: R.exports.Children.map(a, function(f) {
                    return c(f)
                })
            })
        }
    }]), r
}(R.exports.PureComponent);
en.displayName = "Animate";
en.propTypes = {
    from: de.exports.oneOfType([de.exports.object, de.exports.string]),
    to: de.exports.oneOfType([de.exports.object, de.exports.string]),
    attributeName: de.exports.string,
    duration: de.exports.number,
    begin: de.exports.number,
    easing: de.exports.oneOfType([de.exports.string, de.exports.func]),
    steps: de.exports.arrayOf(de.exports.shape({
        duration: de.exports.number.isRequired,
        style: de.exports.object.isRequired,
        easing: de.exports.oneOfType([de.exports.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), de.exports.func]),
        properties: de.exports.arrayOf("string"),
        onAnimationEnd: de.exports.func
    })),
    children: de.exports.oneOfType([de.exports.node, de.exports.func]),
    isActive: de.exports.bool,
    canBegin: de.exports.bool,
    onAnimationEnd: de.exports.func,
    shouldReAnimate: de.exports.bool,
    onAnimationStart: de.exports.func,
    onAnimationReStart: de.exports.func
};
en.defaultProps = {
    begin: 0,
    duration: 1e3,
    from: "",
    to: "",
    attributeName: "",
    easing: "ease",
    isActive: !0,
    canBegin: !0,
    steps: [],
    onAnimationEnd: function() {},
    onAnimationStart: function() {}
};
Number.isFinite === void 0 && (Number.isFinite = function(e) {
    return typeof e == "number" && isFinite(e)
});
de.exports.object, de.exports.object, de.exports.object, de.exports.element;
de.exports.object, de.exports.object, de.exports.object, de.exports.oneOfType([de.exports.array, de.exports.element]), de.exports.any;
var Rf = ti,
    dC = xl,
    pC = _e,
    Df = Rf ? Rf.isConcatSpreadable : void 0;

function mC(e) {
    return pC(e) || dC(e) || !!(Df && e && e[Df])
}
var vC = mC,
    gC = am,
    yC = vC;

function qm(e, t, r, n, i) {
    var a = -1,
        o = e.length;
    for (r || (r = yC), i || (i = []); ++a < o;) {
        var s = e[a];
        t > 0 && r(s) ? t > 1 ? qm(s, t - 1, r, n, i) : gC(i, s) : n || (i[i.length] = s)
    }
    return i
}
var Vm = qm;

function bC(e) {
    return function(t, r, n) {
        for (var i = -1, a = Object(t), o = n(t), s = o.length; s--;) {
            var u = o[e ? s : ++i];
            if (r(a[u], u, a) === !1) break
        }
        return t
    }
}
var xC = bC,
    _C = xC,
    wC = _C(),
    SC = wC,
    OC = SC,
    AC = eo;

function kC(e, t) {
    return e && OC(e, t, AC)
}
var Ym = kC,
    EC = ri;

function TC(e, t) {
    return function(r, n) {
        if (r == null) return r;
        if (!EC(r)) return e(r, n);
        for (var i = r.length, a = t ? i : -1, o = Object(r);
            (t ? a-- : ++a < i) && n(o[a], a, o) !== !1;);
        return r
    }
}
var CC = TC,
    PC = Ym,
    $C = CC,
    MC = $C(PC),
    Il = MC,
    IC = Il,
    NC = ri;

function RC(e, t) {
    var r = -1,
        n = NC(e) ? Array(e.length) : [];
    return IC(e, function(i, a, o) {
        n[++r] = t(i, a, o)
    }), n
}
var Xm = RC;

function DC(e, t) {
    var r = e.length;
    for (e.sort(t); r--;) e[r] = e[r].value;
    return e
}
var LC = DC,
    Lf = pn;

function jC(e, t) {
    if (e !== t) {
        var r = e !== void 0,
            n = e === null,
            i = e === e,
            a = Lf(e),
            o = t !== void 0,
            s = t === null,
            u = t === t,
            l = Lf(t);
        if (!s && !l && !a && e > t || a && o && u && !s && !l || n && o && u || !r && u || !i) return 1;
        if (!n && !a && !l && e < t || l && r && i && !n && !a || s && r && i || !o && i || !u) return -1
    }
    return 0
}
var FC = jC,
    BC = FC;

function zC(e, t, r) {
    for (var n = -1, i = e.criteria, a = t.criteria, o = i.length, s = r.length; ++n < o;) {
        var u = BC(i[n], a[n]);
        if (u) {
            if (n >= s) return u;
            var l = r[n];
            return u * (l == "desc" ? -1 : 1)
        }
    }
    return e.index - t.index
}
var UC = zC,
    Ko = kl,
    HC = El,
    WC = pr,
    GC = Xm,
    qC = LC,
    VC = sm,
    YC = UC,
    XC = mn,
    KC = _e;

function ZC(e, t, r) {
    t.length ? t = Ko(t, function(a) {
        return KC(a) ? function(o) {
            return HC(o, a.length === 1 ? a[0] : a)
        } : a
    }) : t = [XC];
    var n = -1;
    t = Ko(t, VC(WC));
    var i = GC(e, function(a, o, s) {
        var u = Ko(t, function(l) {
            return l(a)
        });
        return {
            criteria: u,
            index: ++n,
            value: a
        }
    });
    return qC(i, function(a, o) {
        return YC(a, o, r)
    })
}
var JC = ZC;

function QC(e, t, r) {
    switch (r.length) {
        case 0:
            return e.call(t);
        case 1:
            return e.call(t, r[0]);
        case 2:
            return e.call(t, r[0], r[1]);
        case 3:
            return e.call(t, r[0], r[1], r[2])
    }
    return e.apply(t, r)
}
var eP = QC,
    tP = eP,
    jf = Math.max;

function rP(e, t, r) {
    return t = jf(t === void 0 ? e.length - 1 : t, 0),
        function() {
            for (var n = arguments, i = -1, a = jf(n.length - t, 0), o = Array(a); ++i < a;) o[i] = n[t + i];
            i = -1;
            for (var s = Array(t + 1); ++i < t;) s[i] = n[i];
            return s[t] = r(o), tP(e, this, s)
        }
}
var nP = rP;

function iP(e) {
    return function() {
        return e
    }
}
var aP = iP,
    oP = Ir,
    sP = function() {
        try {
            var e = oP(Object, "defineProperty");
            return e({}, "", {}), e
        } catch {}
    }(),
    Km = sP,
    uP = aP,
    Ff = Km,
    lP = mn,
    cP = Ff ? function(e, t) {
        return Ff(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: uP(t),
            writable: !0
        })
    } : lP,
    fP = cP,
    hP = 800,
    dP = 16,
    pP = Date.now;

function mP(e) {
    var t = 0,
        r = 0;
    return function() {
        var n = pP(),
            i = dP - (n - r);
        if (r = n, i > 0) {
            if (++t >= hP) return arguments[0]
        } else t = 0;
        return e.apply(void 0, arguments)
    }
}
var vP = mP,
    gP = fP,
    yP = vP,
    bP = yP(gP),
    xP = bP,
    _P = mn,
    wP = nP,
    SP = xP;

function OP(e, t) {
    return SP(wP(e, t, _P), e + "")
}
var AP = OP,
    kP = vl,
    EP = ri,
    TP = _l,
    CP = lt;

function PP(e, t, r) {
    if (!CP(r)) return !1;
    var n = typeof t;
    return (n == "number" ? EP(r) && TP(t, r.length) : n == "string" && t in r) ? kP(r[t], e) : !1
}
var lo = PP,
    $P = Vm,
    MP = JC,
    IP = AP,
    Bf = lo,
    NP = IP(function(e, t) {
        if (e == null) return [];
        var r = t.length;
        return r > 1 && Bf(e, t[0], t[1]) ? t = [] : r > 2 && Bf(t[0], t[1], t[2]) && (t = [t[0]]), MP(e, $P(t, 1), [])
    }),
    Nl = NP;

function Ii(e) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ii = function(r) {
        return typeof r
    } : Ii = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
    }, Ii(e)
}

function RP(e, t) {
    return FP(e) || jP(e, t) || LP(e, t) || DP()
}

function DP() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function LP(e, t) {
    if (!!e) {
        if (typeof e == "string") return zf(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return zf(e, t)
    }
}

function zf(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function jP(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
        var r = [],
            n = !0,
            i = !1,
            a = void 0;
        try {
            for (var o = e[Symbol.iterator](), s; !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t)); n = !0);
        } catch (u) {
            i = !0, a = u
        } finally {
            try {
                !n && o.return != null && o.return()
            } finally {
                if (i) throw a
            }
        }
        return r
    }
}

function FP(e) {
    if (Array.isArray(e)) return e
}

function Uf(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Zo(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Uf(Object(r), !0).forEach(function(n) {
            BP(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uf(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function BP(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function zP(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Hf(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function UP(e, t, r) {
    return t && Hf(e.prototype, t), r && Hf(e, r), e
}

function HP(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && lu(e, t)
}

function lu(e, t) {
    return lu = Object.setPrototypeOf || function(n, i) {
        return n.__proto__ = i, n
    }, lu(e, t)
}

function WP(e) {
    var t = VP();
    return function() {
        var n = da(e),
            i;
        if (t) {
            var a = da(this).constructor;
            i = Reflect.construct(n, arguments, a)
        } else i = n.apply(this, arguments);
        return GP(this, i)
    }
}

function GP(e, t) {
    return t && (Ii(t) === "object" || typeof t == "function") ? t : qP(e)
}

function qP(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function VP() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function da(e) {
    return da = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, da(e)
}

function YP(e) {
    return _e(e) && Be(e[0]) && Be(e[1]) ? e.join(" ~ ") : e
}
var Rl = function(e) {
    HP(r, e);
    var t = WP(r);

    function r() {
        return zP(this, r), t.apply(this, arguments)
    }
    return UP(r, [{
        key: "renderContent",
        value: function() {
            var i = this.props,
                a = i.payload,
                o = i.separator,
                s = i.formatter,
                u = i.itemStyle,
                l = i.itemSorter;
            if (a && a.length) {
                var c = {
                        padding: 0,
                        margin: 0
                    },
                    f = (l ? Nl(a, l) : a).map(function(d, m) {
                        if (d.type === "none") return null;
                        var p = Zo({
                                display: "block",
                                paddingTop: 4,
                                paddingBottom: 4,
                                color: d.color || "#000"
                            }, u),
                            h = d.formatter || s || YP,
                            v = d.value,
                            g = d.name;
                        if (h && v != null && g != null) {
                            var x = h(v, g, d, m, a);
                            if (Array.isArray(x)) {
                                var y = x,
                                    b = RP(y, 2);
                                v = b[0], g = b[1]
                            } else v = x
                        }
                        return te("li", {
                            className: "recharts-tooltip-item",
                            style: p,
                            children: [Be(g) ? C("span", {
                                className: "recharts-tooltip-item-name",
                                children: g
                            }) : null, Be(g) ? C("span", {
                                className: "recharts-tooltip-item-separator",
                                children: o
                            }) : null, C("span", {
                                className: "recharts-tooltip-item-value",
                                children: v
                            }), C("span", {
                                className: "recharts-tooltip-item-unit",
                                children: d.unit || ""
                            })]
                        }, "tooltip-item-".concat(m))
                    });
                return C("ul", {
                    className: "recharts-tooltip-item-list",
                    style: c,
                    children: f
                })
            }
            return null
        }
    }, {
        key: "render",
        value: function() {
            var i = this.props,
                a = i.wrapperClassName,
                o = i.contentStyle,
                s = i.labelClassName,
                u = i.labelStyle,
                l = i.label,
                c = i.labelFormatter,
                f = i.payload,
                d = Zo({
                    margin: 0,
                    padding: 10,
                    backgroundColor: "#fff",
                    border: "1px solid #ccc",
                    whiteSpace: "nowrap"
                }, o),
                m = Zo({
                    margin: 0
                }, u),
                p = !pe(l),
                h = p ? l : "",
                v = Ne("recharts-default-tooltip", a),
                g = Ne("recharts-tooltip-label", s);
            return p && c && f !== void 0 && f !== null && (h = c(l, f)), te("div", {
                className: v,
                style: d,
                children: [C("p", {
                    className: g,
                    style: m,
                    children: ve.isValidElement(h) ? h : "".concat(h)
                }), this.renderContent()]
            })
        }
    }]), r
}(R.exports.PureComponent);
Rl.displayName = "DefaultTooltipContent";
Rl.defaultProps = {
    separator: " : ",
    contentStyle: {},
    itemStyle: {},
    labelStyle: {}
};
var XP = function() {
        return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout)
    },
    or = {
        isSsr: XP(),
        get: function(t) {
            return or[t]
        },
        set: function(t, r) {
            if (typeof t == "string") or[t] = r;
            else {
                var n = Object.keys(t);
                n && n.length && n.forEach(function(i) {
                    or[i] = t[i]
                })
            }
        }
    };

function Ni(e) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ni = function(r) {
        return typeof r
    } : Ni = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
    }, Ni(e)
}

function Wf(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Lt(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Wf(Object(r), !0).forEach(function(n) {
            jn(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wf(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function jn(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function KP(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Gf(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function ZP(e, t, r) {
    return t && Gf(e.prototype, t), r && Gf(e, r), e
}

function JP(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && cu(e, t)
}

function cu(e, t) {
    return cu = Object.setPrototypeOf || function(n, i) {
        return n.__proto__ = i, n
    }, cu(e, t)
}

function QP(e) {
    var t = r$();
    return function() {
        var n = pa(e),
            i;
        if (t) {
            var a = pa(this).constructor;
            i = Reflect.construct(n, arguments, a)
        } else i = n.apply(this, arguments);
        return e$(this, i)
    }
}

function e$(e, t) {
    return t && (Ni(t) === "object" || typeof t == "function") ? t : t$(e)
}

function t$(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function r$() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function pa(e) {
    return pa = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, pa(e)
}
var kn = "recharts-tooltip-wrapper",
    qf = 1;

function n$(e) {
    return e.dataKey
}

function i$(e, t) {
    return e === !0 ? ea(t, n$) : me(e) ? ea(t, e) : t
}

function a$(e, t) {
    return ve.isValidElement(e) ? ve.cloneElement(e, t) : me(e) ? ve.createElement(e, t) : C(Rl, {
        ...t
    })
}
var zr = function(e) {
    JP(r, e);
    var t = QP(r);

    function r() {
        var n;
        KP(this, r);
        for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
        return n = t.call.apply(t, [this].concat(a)), n.state = {
            boxWidth: -1,
            boxHeight: -1,
            dismissed: !1,
            dismissedAtCoordinate: {
                x: 0,
                y: 0
            }
        }, n.wrapperNode = void 0, n.getTranslate = function(s) {
            var u = s.key,
                l = s.tooltipDimension,
                c = s.viewBoxDimension,
                f = n.props,
                d = f.allowEscapeViewBox,
                m = f.coordinate,
                p = f.offset,
                h = f.position,
                v = f.viewBox;
            if (h && oe(h[u])) return h[u];
            var g = m[u] - l - p,
                x = m[u] + p;
            if (d[u]) return x;
            var y = m[u] + l + p,
                b = v[u] + c;
            return y > b ? Math.max(g, v[u]) : Math.max(x, v[u])
        }, n
    }
    return ZP(r, [{
        key: "componentDidMount",
        value: function() {
            this.updateBBox()
        }
    }, {
        key: "componentDidUpdate",
        value: function() {
            this.updateBBox()
        }
    }, {
        key: "updateBBox",
        value: function() {
            var i = this.state,
                a = i.boxWidth,
                o = i.boxHeight,
                s = i.dismissed;
            if (s ? (this.wrapperNode.blur(), (this.props.coordinate.x !== this.state.dismissedAtCoordinate.x || this.props.coordinate.y !== this.state.dismissedAtCoordinate.y) && this.setState({
                    dismissed: !1
                })) : this.wrapperNode.focus({
                    preventScroll: !0
                }), this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                var u = this.wrapperNode.getBoundingClientRect();
                (Math.abs(u.width - a) > qf || Math.abs(u.height - o) > qf) && this.setState({
                    boxWidth: u.width,
                    boxHeight: u.height
                })
            } else(a !== -1 || o !== -1) && this.setState({
                boxWidth: -1,
                boxHeight: -1
            })
        }
    }, {
        key: "render",
        value: function() {
            var i, a = this,
                o = this.props,
                s = o.payload,
                u = o.isAnimationActive,
                l = o.animationDuration,
                c = o.animationEasing,
                f = o.filterNull,
                d = o.payloadUniqBy,
                m = i$(d, f && s && s.length ? s.filter(function(M) {
                    return !pe(M.value)
                }) : s),
                p = m && m.length,
                h = this.props,
                v = h.content,
                g = h.viewBox,
                x = h.coordinate,
                y = h.position,
                b = h.active,
                _ = h.wrapperStyle,
                w = Lt({
                    pointerEvents: "none",
                    visibility: !this.state.dismissed && b && p ? "visible" : "hidden",
                    position: "absolute",
                    top: 0,
                    left: 0
                }, _),
                A, E;
            if (y && oe(y.x) && oe(y.y)) A = y.x, E = y.y;
            else {
                var k = this.state,
                    N = k.boxWidth,
                    I = k.boxHeight;
                N > 0 && I > 0 && x ? (A = this.getTranslate({
                    key: "x",
                    tooltipDimension: N,
                    viewBoxDimension: g.width
                }), E = this.getTranslate({
                    key: "y",
                    tooltipDimension: I,
                    viewBoxDimension: g.height
                })) : w.visibility = "hidden"
            }
            w = Lt(Lt({}, eu({
                transform: this.props.useTranslate3d ? "translate3d(".concat(A, "px, ").concat(E, "px, 0)") : "translate(".concat(A, "px, ").concat(E, "px)")
            })), w), u && b && (w = Lt(Lt({}, eu({
                transition: "transform ".concat(l, "ms ").concat(c)
            })), w));
            var T = Ne(kn, (i = {}, jn(i, "".concat(kn, "-right"), oe(A) && x && oe(x.x) && A >= x.x), jn(i, "".concat(kn, "-left"), oe(A) && x && oe(x.x) && A < x.x), jn(i, "".concat(kn, "-bottom"), oe(E) && x && oe(x.y) && E >= x.y), jn(i, "".concat(kn, "-top"), oe(E) && x && oe(x.y) && E < x.y), i));
            return C("div", {
                tabIndex: -1,
                role: "dialog",
                onKeyDown: function(S) {
                    S.key === "Escape" && a.setState({
                        dismissed: !0,
                        dismissedAtCoordinate: Lt(Lt({}, a.state.dismissedAtCoordinate), {}, {
                            x: a.props.coordinate.x,
                            y: a.props.coordinate.y
                        })
                    })
                },
                className: T,
                style: w,
                ref: function(S) {
                    a.wrapperNode = S
                },
                children: a$(v, Lt(Lt({}, this.props), {}, {
                    payload: m
                }))
            })
        }
    }]), r
}(R.exports.PureComponent);
zr.displayName = "Tooltip";
zr.defaultProps = {
    active: !1,
    allowEscapeViewBox: {
        x: !1,
        y: !1
    },
    offset: 10,
    viewBox: {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0
    },
    coordinate: {
        x: 0,
        y: 0
    },
    cursorStyle: {},
    separator: " : ",
    wrapperStyle: {},
    contentStyle: {},
    itemStyle: {},
    labelStyle: {},
    cursor: !0,
    trigger: "hover",
    isAnimationActive: !or.isSsr,
    animationEasing: "ease",
    animationDuration: 400,
    filterNull: !0,
    useTranslate3d: !1
};
var o$ = Nt,
    s$ = function() {
        return o$.Date.now()
    },
    u$ = s$,
    l$ = /\s/;

function c$(e) {
    for (var t = e.length; t-- && l$.test(e.charAt(t)););
    return t
}
var f$ = c$,
    h$ = f$,
    d$ = /^\s+/;

function p$(e) {
    return e && e.slice(0, h$(e) + 1).replace(d$, "")
}
var m$ = p$,
    v$ = m$,
    Vf = lt,
    g$ = pn,
    Yf = 0 / 0,
    y$ = /^[-+]0x[0-9a-f]+$/i,
    b$ = /^0b[01]+$/i,
    x$ = /^0o[0-7]+$/i,
    _$ = parseInt;

function w$(e) {
    if (typeof e == "number") return e;
    if (g$(e)) return Yf;
    if (Vf(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Vf(t) ? t + "" : t
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = v$(e);
    var r = b$.test(e);
    return r || x$.test(e) ? _$(e.slice(2), r ? 2 : 8) : y$.test(e) ? Yf : +e
}
var Zm = w$,
    S$ = lt,
    Jo = u$,
    Xf = Zm,
    O$ = "Expected a function",
    A$ = Math.max,
    k$ = Math.min;

function E$(e, t, r) {
    var n, i, a, o, s, u, l = 0,
        c = !1,
        f = !1,
        d = !0;
    if (typeof e != "function") throw new TypeError(O$);
    t = Xf(t) || 0, S$(r) && (c = !!r.leading, f = "maxWait" in r, a = f ? A$(Xf(r.maxWait) || 0, t) : a, d = "trailing" in r ? !!r.trailing : d);

    function m(w) {
        var A = n,
            E = i;
        return n = i = void 0, l = w, o = e.apply(E, A), o
    }

    function p(w) {
        return l = w, s = setTimeout(g, t), c ? m(w) : o
    }

    function h(w) {
        var A = w - u,
            E = w - l,
            k = t - A;
        return f ? k$(k, a - E) : k
    }

    function v(w) {
        var A = w - u,
            E = w - l;
        return u === void 0 || A >= t || A < 0 || f && E >= a
    }

    function g() {
        var w = Jo();
        if (v(w)) return x(w);
        s = setTimeout(g, h(w))
    }

    function x(w) {
        return s = void 0, d && n ? m(w) : (n = i = void 0, o)
    }

    function y() {
        s !== void 0 && clearTimeout(s), l = 0, n = u = i = s = void 0
    }

    function b() {
        return s === void 0 ? o : x(Jo())
    }

    function _() {
        var w = Jo(),
            A = v(w);
        if (n = arguments, i = this, u = w, A) {
            if (s === void 0) return p(u);
            if (f) return clearTimeout(s), s = setTimeout(g, t), m(u)
        }
        return s === void 0 && (s = setTimeout(g, t)), o
    }
    return _.cancel = y, _.flush = b, _
}
var Jm = E$,
    fu = function(e, t) {
        return fu = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(r, n) {
            r.__proto__ = n
        } || function(r, n) {
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i])
        }, fu(e, t)
    };

function T$(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    fu(e, t);

    function r() {
        this.constructor = e
    }
    e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}

function C$(e, t) {
    var r = {};
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
    return r
}
var bi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function P$(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function")
}
var Dl = P$,
    $$ = typeof bi == "object" && bi && bi.Object === Object && bi,
    M$ = $$,
    I$ = M$,
    N$ = typeof self == "object" && self && self.Object === Object && self,
    R$ = I$ || N$ || Function("return this")(),
    Qm = R$,
    D$ = Qm,
    L$ = function() {
        return D$.Date.now()
    },
    j$ = L$,
    F$ = /\s/;

function B$(e) {
    for (var t = e.length; t-- && F$.test(e.charAt(t)););
    return t
}
var z$ = B$,
    U$ = z$,
    H$ = /^\s+/;

function W$(e) {
    return e && e.slice(0, U$(e) + 1).replace(H$, "")
}
var G$ = W$,
    q$ = Qm,
    V$ = q$.Symbol,
    ev = V$,
    Kf = ev,
    tv = Object.prototype,
    Y$ = tv.hasOwnProperty,
    X$ = tv.toString,
    En = Kf ? Kf.toStringTag : void 0;

function K$(e) {
    var t = Y$.call(e, En),
        r = e[En];
    try {
        e[En] = void 0;
        var n = !0
    } catch {}
    var i = X$.call(e);
    return n && (t ? e[En] = r : delete e[En]), i
}
var Z$ = K$,
    J$ = Object.prototype,
    Q$ = J$.toString;

function e3(e) {
    return Q$.call(e)
}
var t3 = e3,
    Zf = ev,
    r3 = Z$,
    n3 = t3,
    i3 = "[object Null]",
    a3 = "[object Undefined]",
    Jf = Zf ? Zf.toStringTag : void 0;

function o3(e) {
    return e == null ? e === void 0 ? a3 : i3 : Jf && Jf in Object(e) ? r3(e) : n3(e)
}
var s3 = o3;

function u3(e) {
    return e != null && typeof e == "object"
}
var l3 = u3,
    c3 = s3,
    f3 = l3,
    h3 = "[object Symbol]";

function d3(e) {
    return typeof e == "symbol" || f3(e) && c3(e) == h3
}
var p3 = d3,
    m3 = G$,
    Qf = Dl,
    v3 = p3,
    eh = 0 / 0,
    g3 = /^[-+]0x[0-9a-f]+$/i,
    y3 = /^0b[01]+$/i,
    b3 = /^0o[0-7]+$/i,
    x3 = parseInt;

function _3(e) {
    if (typeof e == "number") return e;
    if (v3(e)) return eh;
    if (Qf(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Qf(t) ? t + "" : t
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = m3(e);
    var r = y3.test(e);
    return r || b3.test(e) ? x3(e.slice(2), r ? 2 : 8) : g3.test(e) ? eh : +e
}
var w3 = _3,
    S3 = Dl,
    Qo = j$,
    th = w3,
    O3 = "Expected a function",
    A3 = Math.max,
    k3 = Math.min;

function E3(e, t, r) {
    var n, i, a, o, s, u, l = 0,
        c = !1,
        f = !1,
        d = !0;
    if (typeof e != "function") throw new TypeError(O3);
    t = th(t) || 0, S3(r) && (c = !!r.leading, f = "maxWait" in r, a = f ? A3(th(r.maxWait) || 0, t) : a, d = "trailing" in r ? !!r.trailing : d);

    function m(w) {
        var A = n,
            E = i;
        return n = i = void 0, l = w, o = e.apply(E, A), o
    }

    function p(w) {
        return l = w, s = setTimeout(g, t), c ? m(w) : o
    }

    function h(w) {
        var A = w - u,
            E = w - l,
            k = t - A;
        return f ? k3(k, a - E) : k
    }

    function v(w) {
        var A = w - u,
            E = w - l;
        return u === void 0 || A >= t || A < 0 || f && E >= a
    }

    function g() {
        var w = Qo();
        if (v(w)) return x(w);
        s = setTimeout(g, h(w))
    }

    function x(w) {
        return s = void 0, d && n ? m(w) : (n = i = void 0, o)
    }

    function y() {
        s !== void 0 && clearTimeout(s), l = 0, n = u = i = s = void 0
    }

    function b() {
        return s === void 0 ? o : x(Qo())
    }

    function _() {
        var w = Qo(),
            A = v(w);
        if (n = arguments, i = this, u = w, A) {
            if (s === void 0) return p(u);
            if (f) return clearTimeout(s), s = setTimeout(g, t), m(u)
        }
        return s === void 0 && (s = setTimeout(g, t)), o
    }
    return _.cancel = y, _.flush = b, _
}
var rv = E3,
    T3 = rv,
    C3 = Dl,
    P3 = "Expected a function";

function $3(e, t, r) {
    var n = !0,
        i = !0;
    if (typeof e != "function") throw new TypeError(P3);
    return C3(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), T3(e, t, {
        leading: n,
        maxWait: t,
        trailing: i
    })
}
var M3 = $3,
    I3 = function(e, t, r, n) {
        switch (t) {
            case "debounce":
                return rv(e, r, n);
            case "throttle":
                return M3(e, r, n);
            default:
                return e
        }
    },
    hu = function(e) {
        return typeof e == "function"
    },
    Tn = function() {
        return typeof window > "u"
    },
    rh = function(e) {
        return e instanceof Element || e instanceof HTMLDocument
    },
    N3 = function(e, t, r, n) {
        return function(i) {
            var a = i.width,
                o = i.height;
            t(function(s) {
                return s.width === a && s.height === o || s.width === a && !n || s.height === o && !r ? s : (e && hu(e) && e(a, o), {
                    width: a,
                    height: o
                })
            })
        }
    },
    R3 = function(e) {
        T$(t, e);

        function t(r) {
            var n = e.call(this, r) || this;
            n.cancelHandler = function() {
                n.resizeHandler && n.resizeHandler.cancel && (n.resizeHandler.cancel(), n.resizeHandler = null)
            }, n.attachObserver = function() {
                var l = n.props,
                    c = l.targetRef,
                    f = l.observerOptions;
                if (!Tn()) {
                    c && c.current && (n.targetRef.current = c.current);
                    var d = n.getElement();
                    !d || n.observableElement && n.observableElement === d || (n.observableElement = d, n.resizeObserver.observe(d, f))
                }
            }, n.getElement = function() {
                var l = n.props,
                    c = l.querySelector,
                    f = l.targetDomEl;
                if (Tn()) return null;
                if (c) return document.querySelector(c);
                if (f && rh(f)) return f;
                if (n.targetRef && rh(n.targetRef.current)) return n.targetRef.current;
                var d = yp.exports.findDOMNode(n);
                if (!d) return null;
                var m = n.getRenderType();
                switch (m) {
                    case "renderProp":
                        return d;
                    case "childFunction":
                        return d;
                    case "child":
                        return d;
                    case "childArray":
                        return d;
                    default:
                        return d.parentElement
                }
            }, n.createResizeHandler = function(l) {
                var c = n.props,
                    f = c.handleWidth,
                    d = f === void 0 ? !0 : f,
                    m = c.handleHeight,
                    p = m === void 0 ? !0 : m,
                    h = c.onResize;
                if (!(!d && !p)) {
                    var v = N3(h, n.setState.bind(n), d, p);
                    l.forEach(function(g) {
                        var x = g && g.contentRect || {},
                            y = x.width,
                            b = x.height,
                            _ = !n.skipOnMount && !Tn();
                        _ && v({
                            width: y,
                            height: b
                        }), n.skipOnMount = !1
                    })
                }
            }, n.getRenderType = function() {
                var l = n.props,
                    c = l.render,
                    f = l.children;
                return hu(c) ? "renderProp" : hu(f) ? "childFunction" : R.exports.isValidElement(f) ? "child" : Array.isArray(f) ? "childArray" : "parent"
            };
            var i = r.skipOnMount,
                a = r.refreshMode,
                o = r.refreshRate,
                s = o === void 0 ? 1e3 : o,
                u = r.refreshOptions;
            return n.state = {
                width: void 0,
                height: void 0
            }, n.skipOnMount = i, n.targetRef = R.exports.createRef(), n.observableElement = null, Tn() || (n.resizeHandler = I3(n.createResizeHandler, a, s, u), n.resizeObserver = new window.ResizeObserver(n.resizeHandler)), n
        }
        return t.prototype.componentDidMount = function() {
            this.attachObserver()
        }, t.prototype.componentDidUpdate = function() {
            this.attachObserver()
        }, t.prototype.componentWillUnmount = function() {
            Tn() || (this.observableElement = null, this.resizeObserver.disconnect(), this.cancelHandler())
        }, t.prototype.render = function() {
            var r = this.props,
                n = r.render,
                i = r.children,
                a = r.nodeType,
                o = a === void 0 ? "div" : a,
                s = this.state,
                u = s.width,
                l = s.height,
                c = {
                    width: u,
                    height: l,
                    targetRef: this.targetRef
                },
                f = this.getRenderType(),
                d;
            switch (f) {
                case "renderProp":
                    return n && n(c);
                case "childFunction":
                    return d = i, d(c);
                case "child":
                    if (d = i, d.type && typeof d.type == "string") {
                        c.targetRef;
                        var m = C$(c, ["targetRef"]);
                        return R.exports.cloneElement(d, m)
                    }
                    return R.exports.cloneElement(d, c);
                case "childArray":
                    return d = i, d.map(function(p) {
                        return !!p && R.exports.cloneElement(p, c)
                    });
                default:
                    return R.exports.createElement(o, null)
            }
        }, t
    }(R.exports.PureComponent),
    Gr = function(t, r) {
        for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) i[a - 2] = arguments[a]
    };

function nh(e, t) {
    return F3(e) || j3(e, t) || L3(e, t) || D3()
}

function D3() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function L3(e, t) {
    if (!!e) {
        if (typeof e == "string") return ih(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ih(e, t)
    }
}

function ih(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function j3(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
        var r = [],
            n = !0,
            i = !1,
            a = void 0;
        try {
            for (var o = e[Symbol.iterator](), s; !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t)); n = !0);
        } catch (u) {
            i = !0, a = u
        } finally {
            try {
                !n && o.return != null && o.return()
            } finally {
                if (i) throw a
            }
        }
        return r
    }
}

function F3(e) {
    if (Array.isArray(e)) return e
}
var B3 = R.exports.forwardRef(function(e, t) {
        var r = e.aspect,
            n = e.width,
            i = n === void 0 ? "100%" : n,
            a = e.height,
            o = a === void 0 ? "100%" : a,
            s = e.minWidth,
            u = e.minHeight,
            l = e.maxHeight,
            c = e.children,
            f = e.debounce,
            d = f === void 0 ? 0 : f,
            m = e.id,
            p = e.className,
            h = R.exports.useState({
                containerWidth: -1,
                containerHeight: -1
            }),
            v = nh(h, 2),
            g = v[0],
            x = v[1],
            y = R.exports.useRef(null);
        R.exports.useImperativeHandle(t, function() {
            return y
        }, [y]);
        var b = R.exports.useState(!1),
            _ = nh(b, 2),
            w = _[0],
            A = _[1],
            E = function() {
                return y.current ? {
                    containerWidth: y.current.clientWidth,
                    containerHeight: y.current.clientHeight
                } : null
            },
            k = function() {
                if (!!w) {
                    var S = E();
                    if (S) {
                        var D = g.containerWidth,
                            z = g.containerHeight,
                            B = S.containerWidth,
                            q = S.containerHeight;
                        (B !== D || q !== z) && x({
                            containerWidth: B,
                            containerHeight: q
                        })
                    }
                }
            },
            N = d > 0 ? Jm(k, d) : k,
            I = function() {
                var S = g.containerWidth,
                    D = g.containerHeight;
                if (S < 0 || D < 0) return null;
                Gr(Sr(i) || Sr(o), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, i, o), Gr(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
                var z = Sr(i) ? S : i,
                    B = Sr(o) ? D : o;
                return r && r > 0 && (z ? B = z / r : B && (z = B * r), l && B > l && (B = l)), Gr(z > 0 || B > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, z, B, i, o, s, u, r), R.exports.cloneElement(c, {
                    width: z,
                    height: B
                })
            };
        R.exports.useEffect(function() {
            if (w) {
                var M = E();
                M && x(M)
            }
        }, [w]), R.exports.useEffect(function() {
            A(!0)
        }, []);
        var T = {
            width: i,
            height: o,
            minWidth: s,
            minHeight: u,
            maxHeight: l
        };
        return C(R3, {
            handleWidth: !0,
            handleHeight: !0,
            onResize: N,
            targetRef: y,
            children: C("div", {
                ...m != null ? {
                    id: "".concat(m)
                } : {},
                className: Ne("recharts-responsive-container", p),
                style: T,
                ref: y,
                children: I()
            })
        })
    }),
    du = {
        exports: {}
    },
    es = "(".charCodeAt(0),
    ts = ")".charCodeAt(0),
    xi = "'".charCodeAt(0),
    rs = '"'.charCodeAt(0),
    ns = "\\".charCodeAt(0),
    _i = "/".charCodeAt(0),
    is = ",".charCodeAt(0),
    as = ":".charCodeAt(0),
    ah = "*".charCodeAt(0),
    z3 = function(e) {
        for (var t = [], r = e, n, i, a, o, s, u, l, c = 0, f = r.charCodeAt(c), d = r.length, m = [{
                nodes: t
            }], p = 0, h, v = "", g = "", x = ""; c < d;)
            if (f <= 32) {
                n = c;
                do n += 1, f = r.charCodeAt(n); while (f <= 32);
                o = r.slice(c, n), a = t[t.length - 1], f === ts && p ? x = o : a && a.type === "div" ? a.after = o : f === is || f === as || f === _i && r.charCodeAt(n + 1) !== ah ? g = o : t.push({
                    type: "space",
                    sourceIndex: c,
                    value: o
                }), c = n
            } else if (f === xi || f === rs) {
            n = c, i = f === xi ? "'" : '"', o = {
                type: "string",
                sourceIndex: c,
                quote: i
            };
            do
                if (s = !1, n = r.indexOf(i, n + 1), ~n)
                    for (u = n; r.charCodeAt(u - 1) === ns;) u -= 1, s = !s;
                else r += i, n = r.length - 1, o.unclosed = !0; while (s);
            o.value = r.slice(c + 1, n), t.push(o), c = n + 1, f = r.charCodeAt(c)
        } else if (f === _i && r.charCodeAt(c + 1) === ah) o = {
            type: "comment",
            sourceIndex: c
        }, n = r.indexOf("*/", c), n === -1 && (o.unclosed = !0, n = r.length), o.value = r.slice(c + 2, n), t.push(o), c = n + 2, f = r.charCodeAt(c);
        else if (f === _i || f === is || f === as) o = r[c], t.push({
            type: "div",
            sourceIndex: c - g.length,
            value: o,
            before: g,
            after: ""
        }), g = "", c += 1, f = r.charCodeAt(c);
        else if (es === f) {
            n = c;
            do n += 1, f = r.charCodeAt(n); while (f <= 32);
            if (o = {
                    type: "function",
                    sourceIndex: c - v.length,
                    value: v,
                    before: r.slice(c + 1, n)
                }, c = n, v === "url" && f !== xi && f !== rs) {
                n -= 1;
                do
                    if (s = !1, n = r.indexOf(")", n + 1), ~n)
                        for (u = n; r.charCodeAt(u - 1) === ns;) u -= 1, s = !s;
                    else r += ")", n = r.length - 1, o.unclosed = !0; while (s);
                l = n;
                do l -= 1, f = r.charCodeAt(l); while (f <= 32);
                c !== l + 1 ? o.nodes = [{
                    type: "word",
                    sourceIndex: c,
                    value: r.slice(c, l + 1)
                }] : o.nodes = [], o.unclosed && l + 1 !== n ? (o.after = "", o.nodes.push({
                    type: "space",
                    sourceIndex: l + 1,
                    value: r.slice(l + 1, n)
                })) : o.after = r.slice(l + 1, n), c = n + 1, f = r.charCodeAt(c), t.push(o)
            } else p += 1, o.after = "", t.push(o), m.push(o), t = o.nodes = [], h = o;
            v = ""
        } else if (ts === f && p) c += 1, f = r.charCodeAt(c), h.after = x, x = "", p -= 1, m.pop(), h = m[p], t = h.nodes;
        else {
            n = c;
            do f === ns && (n += 1), n += 1, f = r.charCodeAt(n); while (n < d && !(f <= 32 || f === xi || f === rs || f === is || f === as || f === _i || f === es || f === ts && p));
            o = r.slice(c, n), es === f ? v = o : t.push({
                type: "word",
                sourceIndex: c,
                value: o
            }), c = n
        }
        for (c = m.length - 1; c; c -= 1) m[c].unclosed = !0;
        return m[0].nodes
    },
    U3 = function e(t, r, n) {
        var i, a, o, s;
        for (i = 0, a = t.length; i < a; i += 1) o = t[i], n || (s = r(o, i, t)), s !== !1 && o.type === "function" && Array.isArray(o.nodes) && e(o.nodes, r, n), n && r(o, i, t)
    };

function oh(e, t) {
    var r = e.type,
        n = e.value,
        i, a;
    return t && (a = t(e)) !== void 0 ? a : r === "word" || r === "space" ? n : r === "string" ? (i = e.quote || "", i + n + (e.unclosed ? "" : i)) : r === "comment" ? "/*" + n + (e.unclosed ? "" : "*/") : r === "div" ? (e.before || "") + n + (e.after || "") : Array.isArray(e.nodes) ? (i = nv(e.nodes), r !== "function" ? i : n + "(" + (e.before || "") + i + (e.after || "") + (e.unclosed ? "" : ")")) : n
}

function nv(e, t) {
    var r, n;
    if (Array.isArray(e)) {
        for (r = "", n = e.length - 1; ~n; n -= 1) r = oh(e[n], t) + r;
        return r
    }
    return oh(e, t)
}
var H3 = nv,
    os, sh;

function W3() {
    if (sh) return os;
    sh = 1;
    var e = "-".charCodeAt(0),
        t = "+".charCodeAt(0),
        r = ".".charCodeAt(0),
        n = "e".charCodeAt(0),
        i = "E".charCodeAt(0);
    return os = function(a) {
        for (var o = 0, s = a.length, u = !1, l = -1, c = !1, f; o < s;) {
            if (f = a.charCodeAt(o), f >= 48 && f <= 57) c = !0;
            else if (f === n || f === i) {
                if (l > -1) break;
                l = o
            } else if (f === r) {
                if (u) break;
                u = !0
            } else if (f === t || f === e) {
                if (o !== 0) break
            } else break;
            o += 1
        }
        return l + 1 === o && o--, c ? {
            number: a.slice(0, o),
            unit: a.slice(o)
        } : !1
    }, os
}
var G3 = z3,
    iv = U3,
    av = H3;

function cr(e) {
    return this instanceof cr ? (this.nodes = G3(e), this) : new cr(e)
}
cr.prototype.toString = function() {
    return Array.isArray(this.nodes) ? av(this.nodes) : ""
};
cr.prototype.walk = function(e, t) {
    return iv(this.nodes, e, t), this
};
cr.unit = W3();
cr.walk = iv;
cr.stringify = av;
var q3 = cr;

function Fn(e) {
    throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var ov = {};
(function(e) {
    var t = function() {
        function r(d, m) {
            Object.defineProperty(this, "name", {
                enumerable: !1,
                writable: !1,
                value: "JisonParserError"
            }), d == null && (d = "???"), Object.defineProperty(this, "message", {
                enumerable: !1,
                writable: !0,
                value: d
            }), this.hash = m;
            var p;
            if (m && m.exception instanceof Error) {
                var h = m.exception;
                this.message = h.message || d, p = h.stack
            }
            p || (Error.hasOwnProperty("captureStackTrace") ? Error.captureStackTrace(this, this.constructor) : p = new Error(d).stack), p && Object.defineProperty(this, "stack", {
                enumerable: !1,
                writable: !1,
                value: p
            })
        }
        typeof Object.setPrototypeOf == "function" ? Object.setPrototypeOf(r.prototype, Error.prototype) : r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r.prototype.name = "JisonParserError";

        function n(d) {
            for (var m = [], p = d.pop, h = d.rule, v = 0, g = p.length; v < g; v++) m.push([p[v], h[v]]);
            return m
        }

        function i(d) {
            for (var m = {}, p = d.idx, h = d.goto, v = 0, g = p.length; v < g; v++) {
                var x = p[v];
                m[x] = h[v]
            }
            return m
        }

        function a(d) {
            for (var m = [], p = d.len, h = d.symbol, v = d.type, g = d.state, x = d.mode, y = d.goto, b = 0, _ = p.length; b < _; b++) {
                for (var w = p[b], A = {}, E = 0; E < w; E++) {
                    var k = h.shift();
                    switch (v.shift()) {
                        case 2:
                            A[k] = [x.shift(), y.shift()];
                            break;
                        case 0:
                            A[k] = g.shift();
                            break;
                        default:
                            A[k] = [3]
                    }
                }
                m.push(A)
            }
            return m
        }

        function o(d, m, p) {
            p = p || 0;
            for (var h = 0; h < m; h++) this.push(d), d += p
        }

        function s(d, m) {
            for (d = this.length - d, m += d; d < m; d++) this.push(this[d])
        }

        function u(d) {
            for (var m = [], p = 0, h = d.length; p < h; p++) {
                var v = d[p];
                typeof v == "function" ? (p++, v.apply(m, d[p])) : m.push(v)
            }
            return m
        }
        var l = {
            trace: function() {},
            JisonParserError: r,
            yy: {},
            options: {
                type: "lalr",
                hasPartialLrUpgradeOnConflict: !0,
                errorRecoveryTokenDiscardCount: 3
            },
            symbols_: {
                $accept: 0,
                $end: 1,
                ADD: 3,
                ANGLE: 16,
                CHS: 22,
                COMMA: 14,
                CSS_CPROP: 13,
                CSS_VAR: 12,
                DIV: 6,
                EMS: 20,
                EOF: 1,
                EXS: 21,
                FREQ: 18,
                LENGTH: 15,
                LPAREN: 7,
                MUL: 5,
                NESTED_CALC: 9,
                NUMBER: 11,
                PERCENTAGE: 28,
                PREFIX: 10,
                REMS: 23,
                RES: 19,
                RPAREN: 8,
                SUB: 4,
                TIME: 17,
                VHS: 24,
                VMAXS: 27,
                VMINS: 26,
                VWS: 25,
                css_value: 33,
                css_variable: 32,
                error: 2,
                expression: 29,
                math_expression: 30,
                value: 31
            },
            terminals_: {
                1: "EOF",
                2: "error",
                3: "ADD",
                4: "SUB",
                5: "MUL",
                6: "DIV",
                7: "LPAREN",
                8: "RPAREN",
                9: "NESTED_CALC",
                10: "PREFIX",
                11: "NUMBER",
                12: "CSS_VAR",
                13: "CSS_CPROP",
                14: "COMMA",
                15: "LENGTH",
                16: "ANGLE",
                17: "TIME",
                18: "FREQ",
                19: "RES",
                20: "EMS",
                21: "EXS",
                22: "CHS",
                23: "REMS",
                24: "VHS",
                25: "VWS",
                26: "VMINS",
                27: "VMAXS",
                28: "PERCENTAGE"
            },
            TERROR: 2,
            EOF: 1,
            originalQuoteName: null,
            originalParseError: null,
            cleanupAfterParse: null,
            constructParseErrorInfo: null,
            yyMergeLocationInfo: null,
            __reentrant_call_depth: 0,
            __error_infos: [],
            __error_recovery_infos: [],
            quoteName: function(m) {
                return '"' + m + '"'
            },
            getSymbolName: function(m) {
                if (this.terminals_[m]) return this.terminals_[m];
                var p = this.symbols_;
                for (var h in p)
                    if (p[h] === m) return h;
                return null
            },
            describeSymbol: function(m) {
                if (m !== this.EOF && this.terminal_descriptions_ && this.terminal_descriptions_[m]) return this.terminal_descriptions_[m];
                if (m === this.EOF) return "end of input";
                var p = this.getSymbolName(m);
                return p ? this.quoteName(p) : null
            },
            collect_expected_token_set: function(m, p) {
                var h = this.TERROR,
                    v = [],
                    g = {};
                if (!p && this.state_descriptions_ && this.state_descriptions_[m]) return [this.state_descriptions_[m]];
                for (var x in this.table[m])
                    if (x = +x, x !== h) {
                        var y = p ? x : this.describeSymbol(x);
                        y && !g[y] && (v.push(y), g[y] = !0)
                    } return v
            },
            productions_: n({
                pop: u([29, o, [30, 10], 31, 31, 32, 32, o, [33, 15]]),
                rule: u([2, o, [3, 5], 4, 7, o, [1, 4], 2, 4, 6, o, [1, 14], 2])
            }),
            performAction: function(m, p, h) {
                var v = this.yy;
                switch (v.parser, v.lexer, m) {
                    case 0:
                        this.$ = h[p - 1];
                        break;
                    case 1:
                        return this.$ = h[p - 1], h[p - 1];
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        this.$ = {
                            type: "MathExpression",
                            operator: h[p - 1],
                            left: h[p - 2],
                            right: h[p]
                        };
                        break;
                    case 6:
                        this.$ = h[p - 1];
                        break;
                    case 7:
                        this.$ = {
                            type: "Calc",
                            value: h[p - 1]
                        };
                        break;
                    case 8:
                        this.$ = {
                            type: "Calc",
                            value: h[p - 1],
                            prefix: h[p - 5]
                        };
                        break;
                    case 9:
                    case 10:
                    case 11:
                        this.$ = h[p];
                        break;
                    case 12:
                        this.$ = {
                            type: "Value",
                            value: parseFloat(h[p])
                        };
                        break;
                    case 13:
                        this.$ = {
                            type: "Value",
                            value: parseFloat(h[p]) * -1
                        };
                        break;
                    case 14:
                        this.$ = {
                            type: "CssVariable",
                            value: h[p - 1]
                        };
                        break;
                    case 15:
                        this.$ = {
                            type: "CssVariable",
                            value: h[p - 3],
                            fallback: h[p - 1]
                        };
                        break;
                    case 16:
                        this.$ = {
                            type: "LengthValue",
                            value: parseFloat(h[p]),
                            unit: /[a-z]+/.exec(h[p])[0]
                        };
                        break;
                    case 17:
                        this.$ = {
                            type: "AngleValue",
                            value: parseFloat(h[p]),
                            unit: /[a-z]+/.exec(h[p])[0]
                        };
                        break;
                    case 18:
                        this.$ = {
                            type: "TimeValue",
                            value: parseFloat(h[p]),
                            unit: /[a-z]+/.exec(h[p])[0]
                        };
                        break;
                    case 19:
                        this.$ = {
                            type: "FrequencyValue",
                            value: parseFloat(h[p]),
                            unit: /[a-z]+/.exec(h[p])[0]
                        };
                        break;
                    case 20:
                        this.$ = {
                            type: "ResolutionValue",
                            value: parseFloat(h[p]),
                            unit: /[a-z]+/.exec(h[p])[0]
                        };
                        break;
                    case 21:
                        this.$ = {
                            type: "EmValue",
                            value: parseFloat(h[p]),
                            unit: "em"
                        };
                        break;
                    case 22:
                        this.$ = {
                            type: "ExValue",
                            value: parseFloat(h[p]),
                            unit: "ex"
                        };
                        break;
                    case 23:
                        this.$ = {
                            type: "ChValue",
                            value: parseFloat(h[p]),
                            unit: "ch"
                        };
                        break;
                    case 24:
                        this.$ = {
                            type: "RemValue",
                            value: parseFloat(h[p]),
                            unit: "rem"
                        };
                        break;
                    case 25:
                        this.$ = {
                            type: "VhValue",
                            value: parseFloat(h[p]),
                            unit: "vh"
                        };
                        break;
                    case 26:
                        this.$ = {
                            type: "VwValue",
                            value: parseFloat(h[p]),
                            unit: "vw"
                        };
                        break;
                    case 27:
                        this.$ = {
                            type: "VminValue",
                            value: parseFloat(h[p]),
                            unit: "vmin"
                        };
                        break;
                    case 28:
                        this.$ = {
                            type: "VmaxValue",
                            value: parseFloat(h[p]),
                            unit: "vmax"
                        };
                        break;
                    case 29:
                        this.$ = {
                            type: "PercentageValue",
                            value: parseFloat(h[p]),
                            unit: "%"
                        };
                        break;
                    case 30:
                        var g = h[p];
                        g.value *= -1, this.$ = g;
                        break
                }
            },
            table: a({
                len: u([24, 1, 5, 23, 1, 18, o, [0, 3], 1, o, [0, 16], o, [23, 4], s, [28, 3], 0, 0, 16, 1, 6, 6, o, [0, 3], 5, 1, 2, s, [37, 3], s, [20, 3], 5, 0, 0]),
                symbol: u([4, 7, 9, 11, 12, o, [15, 19, 1], 1, 1, o, [3, 4, 1], s, [30, 19], s, [29, 4], 7, 4, 10, 11, s, [22, 14], s, [19, 3], s, [43, 22], s, [23, 69], s, [139, 4], 8, s, [51, 24], 4, s, [138, 15], 13, s, [186, 5], 8, s, [6, 6], s, [5, 5], 9, 8, 14, s, [159, 47], s, [60, 10]]),
                type: u([o, [2, 19], o, [0, 5], 1, o, [2, 24], o, [0, 4], s, [22, 19], s, [43, 42], s, [23, 70], s, [28, 25], s, [45, 25], s, [113, 54]]),
                state: u([1, 2, 8, 6, 7, 30, s, [4, 3], 33, 37, s, [5, 3], 38, s, [4, 3], 39, s, [4, 3], 40, s, [4, 3], 42, s, [21, 4], 50, s, [5, 3], 51, s, [4, 3]]),
                mode: u([o, [1, 179], o, [2, 3], s, [5, 5], s, [6, 4], o, [1, 57]]),
                goto: u([5, 3, 4, 24, o, [9, 15, 1], o, [25, 5, 1], s, [24, 19], 31, 35, 32, 34, s, [18, 14], 36, s, [38, 19], s, [19, 57], s, [118, 4], 41, s, [24, 19], 43, 35, s, [16, 14], 44, o, [2, 3], 28, 29, 2, o, [3, 3], 28, 29, 3, s, [53, 4], o, [45, 5, 1], s, [100, 42], 52, s, [5, 4], 53])
            }),
            defaultActions: i({
                idx: u([6, 7, 8, o, [10, 16, 1], 33, 34, 39, 40, 41, 45, 47, 52, 53]),
                goto: u([9, 10, 11, o, [16, 14, 1], 12, 1, 30, 13, o, [4, 4, 1], 14, 15, 8])
            }),
            parseError: function(m, p, h) {
                if (p.recoverable) typeof this.trace == "function" && this.trace(m), p.destroy();
                else throw typeof this.trace == "function" && this.trace(m), h || (h = this.JisonParserError), new h(m, p)
            },
            parse: function(m) {
                var p = this,
                    h = new Array(128),
                    v = new Array(128),
                    g = new Array(128),
                    x = this.table,
                    y = 0,
                    b = 0;
                this.TERROR;
                var _ = this.EOF;
                this.options.errorRecoveryTokenDiscardCount | 0;
                var w = [0, 54],
                    A;
                this.__lexer__ ? A = this.__lexer__ : A = this.__lexer__ = Object.create(this.lexer);
                var E = {
                    parseError: void 0,
                    quoteName: void 0,
                    lexer: void 0,
                    parser: void 0,
                    pre_parse: void 0,
                    post_parse: void 0,
                    pre_lex: void 0,
                    post_lex: void 0
                };
                typeof assert != "function" || assert, this.yyGetSharedState = function() {
                    return E
                };

                function k(se, V) {
                    for (var ue in V) typeof se[ue] > "u" && Object.prototype.hasOwnProperty.call(V, ue) && (se[ue] = V[ue])
                }
                k(E, this.yy), E.lexer = A, E.parser = this, typeof E.parseError == "function" ? this.parseError = function(V, ue, ce) {
                    return ce || (ce = this.JisonParserError), E.parseError.call(this, V, ue, ce)
                } : this.parseError = this.originalParseError, typeof E.quoteName == "function" ? this.quoteName = function(V) {
                    return E.quoteName.call(this, V)
                } : this.quoteName = this.originalQuoteName, this.cleanupAfterParse = function(V, ue, ce) {
                    var X;
                    if (ue) {
                        var ge;
                        (E.post_parse || this.post_parse) && (ge = this.constructParseErrorInfo(null, null, null, !1)), E.post_parse && (X = E.post_parse.call(this, E, V, ge), typeof X < "u" && (V = X)), this.post_parse && (X = this.post_parse.call(this, E, V, ge), typeof X < "u" && (V = X)), ge && ge.destroy && ge.destroy()
                    }
                    if (this.__reentrant_call_depth > 1) return V;
                    if (A.cleanupAfterLex && A.cleanupAfterLex(ce), E && (E.lexer = void 0, E.parser = void 0, A.yy === E && (A.yy = void 0)), E = void 0, this.parseError = this.originalParseError, this.quoteName = this.originalQuoteName, h.length = 0, v.length = 0, g.length = 0, y = 0, !ce) {
                        for (var O = this.__error_infos.length - 1; O >= 0; O--) {
                            var G = this.__error_infos[O];
                            G && typeof G.destroy == "function" && G.destroy()
                        }
                        this.__error_infos.length = 0
                    }
                    return V
                }, this.constructParseErrorInfo = function(V, ue, ce, X) {
                    var ge = {
                        errStr: V,
                        exception: ue,
                        text: A.match,
                        value: A.yytext,
                        token: this.describeSymbol(b) || b,
                        token_id: b,
                        line: A.yylineno,
                        expected: ce,
                        recoverable: X,
                        state: M,
                        action: S,
                        new_state: F,
                        symbol_stack: h,
                        state_stack: v,
                        value_stack: g,
                        stack_pointer: y,
                        yy: E,
                        lexer: A,
                        parser: this,
                        destroy: function() {
                            var G = !!this.recoverable;
                            for (var W in this) this.hasOwnProperty(W) && typeof W == "object" && (this[W] = void 0);
                            this.recoverable = G
                        }
                    };
                    return this.__error_infos.push(ge), ge
                };

                function N() {
                    var se = A.lex();
                    return typeof se != "number" && (se = p.symbols_[se] || se), se || _
                }

                function I() {
                    var se = A.fastLex();
                    return typeof se != "number" && (se = p.symbols_[se] || se), se || _
                }
                var T = N,
                    M, S, D, z, B = {
                        $: !0,
                        _$: void 0,
                        yy: E
                    },
                    q, H, Q, F, L = !1;
                try {
                    if (this.__reentrant_call_depth++, A.setInput(m, E), typeof A.canIUse == "function") {
                        var ae = A.canIUse();
                        ae.fastLex && typeof I == "function" && (T = I)
                    }
                    for (g[y] = null, v[y] = 0, h[y] = 0, ++y, this.pre_parse && this.pre_parse.call(this, E), E.pre_parse && E.pre_parse.call(this, E), F = v[y - 1];;) {
                        if (M = F, this.defaultActions[M]) S = 2, F = this.defaultActions[M];
                        else if (b || (b = T()), z = x[M] && x[M][b] || w, F = z[1], S = z[0], !S) {
                            var re, ee = this.describeSymbol(b) || b,
                                ye = this.collect_expected_token_set(M);
                            typeof A.yylineno == "number" ? re = "Parse error on line " + (A.yylineno + 1) + ": " : re = "Parse error: ", typeof A.showPosition == "function" && (re += `
` + A.showPosition(79 - 10, 10) + `
`), ye.length ? re += "Expecting " + ye.join(", ") + ", got unexpected " + ee : re += "Unexpected " + ee, q = this.constructParseErrorInfo(re, null, ye, !1), D = this.parseError(q.errStr, q, this.JisonParserError), typeof D < "u" && (L = D);
                            break
                        }
                        switch (S) {
                            default:
                                if (S instanceof Array) {
                                    q = this.constructParseErrorInfo("Parse Error: multiple actions possible at state: " + M + ", token: " + b, null, null, !1), D = this.parseError(q.errStr, q, this.JisonParserError), typeof D < "u" && (L = D);
                                    break
                                }
                                q = this.constructParseErrorInfo("Parsing halted. No viable error recovery approach available due to internal system failure.", null, null, !1), D = this.parseError(q.errStr, q, this.JisonParserError), typeof D < "u" && (L = D);
                                break;
                            case 1:
                                h[y] = b, g[y] = A.yytext, v[y] = F, ++y, b = 0;
                                continue;
                            case 2:
                                if (Q = this.productions_[F - 1], H = Q[1], D = this.performAction.call(B, F, y - 1, g), typeof D < "u") {
                                    L = D;
                                    break
                                }
                                y -= H;
                                var $e = Q[0];
                                h[y] = $e, g[y] = B.$, F = x[v[y - 1]][$e], v[y] = F, ++y;
                                continue;
                            case 3:
                                y !== -2 && (L = !0, y--, typeof g[y] < "u" && (L = g[y]));
                                break
                        }
                        break
                    }
                } catch (se) {
                    if (se instanceof this.JisonParserError) throw se;
                    if (A && typeof A.JisonLexerError == "function" && se instanceof A.JisonLexerError) throw se;
                    q = this.constructParseErrorInfo("Parsing aborted due to exception.", se, null, !1), L = !1, D = this.parseError(q.errStr, q, this.JisonParserError), typeof D < "u" && (L = D)
                } finally {
                    L = this.cleanupAfterParse(L, !0, !0), this.__reentrant_call_depth--
                }
                return L
            }
        };
        l.originalParseError = l.parseError, l.originalQuoteName = l.quoteName;
        var c = function() {
            function d(p, h) {
                Object.defineProperty(this, "name", {
                    enumerable: !1,
                    writable: !1,
                    value: "JisonLexerError"
                }), p == null && (p = "???"), Object.defineProperty(this, "message", {
                    enumerable: !1,
                    writable: !0,
                    value: p
                }), this.hash = h;
                var v;
                if (h && h.exception instanceof Error) {
                    var g = h.exception;
                    this.message = g.message || p, v = g.stack
                }
                v || (Error.hasOwnProperty("captureStackTrace") ? Error.captureStackTrace(this, this.constructor) : v = new Error(p).stack), v && Object.defineProperty(this, "stack", {
                    enumerable: !1,
                    writable: !1,
                    value: v
                })
            }
            typeof Object.setPrototypeOf == "function" ? Object.setPrototypeOf(d.prototype, Error.prototype) : d.prototype = Object.create(Error.prototype), d.prototype.constructor = d, d.prototype.name = "JisonLexerError";
            var m = {
                EOF: 1,
                ERROR: 2,
                __currentRuleSet__: null,
                __error_infos: [],
                __decompressed: !1,
                done: !1,
                _backtrack: !1,
                _input: "",
                _more: !1,
                _signaled_error_token: !1,
                conditionStack: [],
                match: "",
                matched: "",
                matches: !1,
                yytext: "",
                offset: 0,
                yyleng: 0,
                yylineno: 0,
                yylloc: null,
                constructLexErrorInfo: function(h, v, g) {
                    if (h = "" + h, g == null && (g = !(h.indexOf(`
`) > 0 && h.indexOf("^") > 0)), this.yylloc && g) {
                        if (typeof this.prettyPrintRange == "function") this.prettyPrintRange(this.yylloc), /\n\s*$/.test(h) || (h += `
`), h += `
  Erroneous area:
` + this.prettyPrintRange(this.yylloc);
                        else if (typeof this.showPosition == "function") {
                            var x = this.showPosition();
                            x && (h.length && h[h.length - 1] !== `
` && x[0] !== `
` ? h += `
` + x : h += x)
                        }
                    }
                    var y = {
                        errStr: h,
                        recoverable: !!v,
                        text: this.match,
                        token: null,
                        line: this.yylineno,
                        loc: this.yylloc,
                        yy: this.yy,
                        lexer: this,
                        destroy: function() {
                            var _ = !!this.recoverable;
                            for (var w in this) this.hasOwnProperty(w) && typeof w == "object" && (this[w] = void 0);
                            this.recoverable = _
                        }
                    };
                    return this.__error_infos.push(y), y
                },
                parseError: function(h, v, g) {
                    if (g || (g = this.JisonLexerError), this.yy) {
                        if (this.yy.parser && typeof this.yy.parser.parseError == "function") return this.yy.parser.parseError.call(this, h, v, g) || this.ERROR;
                        if (typeof this.yy.parseError == "function") return this.yy.parseError.call(this, h, v, g) || this.ERROR
                    }
                    throw new g(h, v)
                },
                yyerror: function(h) {
                    var v = "";
                    this.yylloc && (v = " on line " + (this.yylineno + 1));
                    var g = this.constructLexErrorInfo("Lexical error" + v + ": " + h, this.options.lexerErrorsAreRecoverable),
                        x = Array.prototype.slice.call(arguments, 1);
                    return x.length && (g.extra_error_attributes = x), this.parseError(g.errStr, g, this.JisonLexerError) || this.ERROR
                },
                cleanupAfterLex: function(h) {
                    if (this.setInput("", {}), !h) {
                        for (var v = this.__error_infos.length - 1; v >= 0; v--) {
                            var g = this.__error_infos[v];
                            g && typeof g.destroy == "function" && g.destroy()
                        }
                        this.__error_infos.length = 0
                    }
                    return this
                },
                clear: function() {
                    this.yytext = "", this.yyleng = 0, this.match = "", this.matches = !1, this._more = !1, this._backtrack = !1;
                    var h = this.yylloc ? this.yylloc.last_column : 0;
                    this.yylloc = {
                        first_line: this.yylineno + 1,
                        first_column: h,
                        last_line: this.yylineno + 1,
                        last_column: h,
                        range: [this.offset, this.offset]
                    }
                },
                setInput: function(h, v) {
                    if (this.yy = v || this.yy || {}, !this.__decompressed) {
                        for (var g = this.rules, x = 0, y = g.length; x < y; x++) {
                            var b = g[x];
                            typeof b == "number" && (g[x] = g[b])
                        }
                        var _ = this.conditions;
                        for (var w in _) {
                            for (var A = _[w], E = A.rules, y = E.length, k = new Array(y + 1), N = new Array(y + 1), x = 0; x < y; x++) {
                                var I = E[x],
                                    b = g[I];
                                k[x + 1] = b, N[x + 1] = I
                            }
                            A.rules = N, A.__rule_regexes = k, A.__rule_count = y
                        }
                        this.__decompressed = !0
                    }
                    return this._input = h || "", this.clear(), this._signaled_error_token = !1, this.done = !1, this.yylineno = 0, this.matched = "", this.conditionStack = ["INITIAL"], this.__currentRuleSet__ = null, this.yylloc = {
                        first_line: 1,
                        first_column: 0,
                        last_line: 1,
                        last_column: 0,
                        range: [0, 0]
                    }, this.offset = 0, this
                },
                editRemainingInput: function(h, v) {
                    var g = h.call(this, this._input, v);
                    return typeof g != "string" ? g && (this._input = "" + g) : this._input = g, this
                },
                input: function() {
                    if (!this._input) return null;
                    var h = this._input[0];
                    this.yytext += h, this.yyleng++, this.offset++, this.match += h, this.matched += h;
                    var v = 1,
                        g = !1;
                    if (h === `
`) g = !0;
                    else if (h === "\r") {
                        g = !0;
                        var x = this._input[1];
                        x === `
` && (v++, h += x, this.yytext += x, this.yyleng++, this.offset++, this.match += x, this.matched += x, this.yylloc.range[1]++)
                    }
                    return g ? (this.yylineno++, this.yylloc.last_line++, this.yylloc.last_column = 0) : this.yylloc.last_column++, this.yylloc.range[1]++, this._input = this._input.slice(v), h
                },
                unput: function(h) {
                    var v = h.length,
                        g = h.split(/(?:\r\n?|\n)/g);
                    if (this._input = h + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - v), this.yyleng = this.yytext.length, this.offset -= v, this.match = this.match.substr(0, this.match.length - v), this.matched = this.matched.substr(0, this.matched.length - v), g.length > 1) {
                        this.yylineno -= g.length - 1, this.yylloc.last_line = this.yylineno + 1;
                        var x = this.match,
                            y = x.split(/(?:\r\n?|\n)/g);
                        y.length === 1 && (x = this.matched, y = x.split(/(?:\r\n?|\n)/g)), this.yylloc.last_column = y[y.length - 1].length
                    } else this.yylloc.last_column -= v;
                    return this.yylloc.range[1] = this.yylloc.range[0] + this.yyleng, this.done = !1, this
                },
                more: function() {
                    return this._more = !0, this
                },
                reject: function() {
                    if (this.options.backtrack_lexer) this._backtrack = !0;
                    else {
                        var h = "";
                        this.yylloc && (h = " on line " + (this.yylineno + 1));
                        var v = this.constructLexErrorInfo("Lexical error" + h + ": You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).", !1);
                        this._signaled_error_token = this.parseError(v.errStr, v, this.JisonLexerError) || this.ERROR
                    }
                    return this
                },
                less: function(h) {
                    return this.unput(this.match.slice(h))
                },
                pastInput: function(h, v) {
                    var g = this.matched.substring(0, this.matched.length - this.match.length);
                    h < 0 ? h = g.length : h || (h = 20), v < 0 ? v = g.length : v || (v = 1), g = g.substr(-h * 2 - 2);
                    var x = g.replace(/\r\n|\r/g, `
`).split(`
`);
                    return x = x.slice(-v), g = x.join(`
`), g.length > h && (g = "..." + g.substr(-h)), g
                },
                upcomingInput: function(h, v) {
                    var g = this.match;
                    h < 0 ? h = g.length + this._input.length : h || (h = 20), v < 0 ? v = h : v || (v = 1), g.length < h * 2 + 2 && (g += this._input.substring(0, h * 2 + 2));
                    var x = g.replace(/\r\n|\r/g, `
`).split(`
`);
                    return x = x.slice(0, v), g = x.join(`
`), g.length > h && (g = g.substring(0, h) + "..."), g
                },
                showPosition: function(h, v) {
                    var g = this.pastInput(h).replace(/\s/g, " "),
                        x = new Array(g.length + 1).join("-");
                    return g + this.upcomingInput(v).replace(/\s/g, " ") + `
` + x + "^"
                },
                deriveLocationInfo: function(h, v, g, x) {
                    var y = {
                        first_line: 1,
                        first_column: 0,
                        last_line: 1,
                        last_column: 0,
                        range: [0, 0]
                    };
                    return h && (y.first_line = h.first_line | 0, y.last_line = h.last_line | 0, y.first_column = h.first_column | 0, y.last_column = h.last_column | 0, h.range && (y.range[0] = h.range[0] | 0, y.range[1] = h.range[1] | 0)), (y.first_line <= 0 || y.last_line < y.first_line) && (y.first_line <= 0 && v && (y.first_line = v.last_line | 0, y.first_column = v.last_column | 0, v.range && (y.range[0] = h.range[1] | 0)), (y.last_line <= 0 || y.last_line < y.first_line) && g && (y.last_line = g.first_line | 0, y.last_column = g.first_column | 0, g.range && (y.range[1] = h.range[0] | 0)), y.first_line <= 0 && x && (y.last_line <= 0 || x.last_line <= y.last_line) && (y.first_line = x.first_line | 0, y.first_column = x.first_column | 0, x.range && (y.range[0] = x.range[0] | 0)), y.last_line <= 0 && x && (y.first_line <= 0 || x.first_line >= y.first_line) && (y.last_line = x.last_line | 0, y.last_column = x.last_column | 0, x.range && (y.range[1] = x.range[1] | 0))), y.last_line <= 0 && (y.first_line <= 0 ? (y.first_line = this.yylloc.first_line, y.last_line = this.yylloc.last_line, y.first_column = this.yylloc.first_column, y.last_column = this.yylloc.last_column, y.range[0] = this.yylloc.range[0], y.range[1] = this.yylloc.range[1]) : (y.last_line = this.yylloc.last_line, y.last_column = this.yylloc.last_column, y.range[1] = this.yylloc.range[1])), y.first_line <= 0 && (y.first_line = y.last_line, y.first_column = 0, y.range[1] = y.range[0]), y.first_column < 0 && (y.first_column = 0), y.last_column < 0 && (y.last_column = y.first_column > 0 ? y.first_column : 80), y
                },
                prettyPrintRange: function(h, v, g) {
                    h = this.deriveLocationInfo(h, v, g);
                    const x = 3,
                        y = 1,
                        b = 2;
                    var _ = this.matched + this._input,
                        w = _.split(`
`),
                        A = Math.max(1, v ? v.first_line : h.first_line - x),
                        E = Math.max(1, g ? g.last_line : h.last_line + y),
                        k = 1 + Math.log10(E | 1) | 0,
                        N = new Array(k).join(" "),
                        I = [],
                        T = w.slice(A - 1, E + 1).map(function(B, q) {
                            var H = q + A,
                                Q = (N + H).substr(-k),
                                F = Q + ": " + B,
                                L = new Array(k + 1).join("^"),
                                ae = 2 + 1,
                                re = 0;
                            if (H === h.first_line ? (ae += h.first_column, re = Math.max(2, (H === h.last_line ? h.last_column : B.length) - h.first_column + 1)) : H === h.last_line ? re = Math.max(2, h.last_column + 1) : H > h.first_line && H < h.last_line && (re = Math.max(2, B.length + 1)), re) {
                                var ee = new Array(ae).join("."),
                                    ye = new Array(re).join("^");
                                F += `
` + L + ee + ye, B.trim().length > 0 && I.push(q)
                            }
                            return F = F.replace(/\t/g, " "), F
                        });
                    if (I.length > 2 * b) {
                        var M = I[b - 1] + 1,
                            S = I[I.length - b] - 1,
                            D = new Array(k + 1).join(" ") + "  (...continued...)";
                        D += `
` + new Array(k + 1).join("-") + "  (---------------)", T.splice(M, S - M + 1, D)
                    }
                    return T.join(`
`)
                },
                describeYYLLOC: function(h, v) {
                    var g = h.first_line,
                        x = h.last_line,
                        y = h.first_column,
                        b = h.last_column,
                        _ = x - g,
                        w = b - y,
                        A;
                    if (_ === 0 ? (A = "line " + g + ", ", w <= 1 ? A += "column " + y : A += "columns " + y + " .. " + b) : A = "lines " + g + "(column " + y + ") .. " + x + "(column " + b + ")", h.range && v) {
                        var E = h.range[0],
                            k = h.range[1] - 1;
                        k <= E ? A += " {String Offset: " + E + "}" : A += " {String Offset range: " + E + " .. " + k + "}"
                    }
                    return A
                },
                test_match: function(h, v) {
                    var g, x, y, b, _;
                    if (this.options.backtrack_lexer && (y = {
                            yylineno: this.yylineno,
                            yylloc: {
                                first_line: this.yylloc.first_line,
                                last_line: this.yylloc.last_line,
                                first_column: this.yylloc.first_column,
                                last_column: this.yylloc.last_column,
                                range: this.yylloc.range.slice(0)
                            },
                            yytext: this.yytext,
                            match: this.match,
                            matches: this.matches,
                            matched: this.matched,
                            yyleng: this.yyleng,
                            offset: this.offset,
                            _more: this._more,
                            _input: this._input,
                            yy: this.yy,
                            conditionStack: this.conditionStack.slice(0),
                            done: this.done
                        }), b = h[0], _ = b.length, x = b.split(/(?:\r\n?|\n)/g), x.length > 1 ? (this.yylineno += x.length - 1, this.yylloc.last_line = this.yylineno + 1, this.yylloc.last_column = x[x.length - 1].length) : this.yylloc.last_column += _, this.yytext += b, this.match += b, this.matched += b, this.matches = h, this.yyleng = this.yytext.length, this.yylloc.range[1] += _, this.offset += _, this._more = !1, this._backtrack = !1, this._input = this._input.slice(_), g = this.performAction.call(this, this.yy, v, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), g) return g;
                    if (this._backtrack) {
                        for (var w in y) this[w] = y[w];
                        return this.__currentRuleSet__ = null, !1
                    } else if (this._signaled_error_token) return g = this._signaled_error_token, this._signaled_error_token = !1, g;
                    return !1
                },
                next: function() {
                    if (this.done) return this.clear(), this.EOF;
                    this._input || (this.done = !0);
                    var h, v, g, x;
                    this._more || this.clear();
                    var y = this.__currentRuleSet__;
                    if (!y && (y = this.__currentRuleSet__ = this._currentRules(), !y || !y.rules)) {
                        var b = "";
                        this.options.trackPosition && (b = " on line " + (this.yylineno + 1));
                        var _ = this.constructLexErrorInfo("Internal lexer engine error" + b + ': The lex grammar programmer pushed a non-existing condition name "' + this.topState() + '"; this is a fatal error and should be reported to the application programmer team!', !1);
                        return this.parseError(_.errStr, _, this.JisonLexerError) || this.ERROR
                    }
                    for (var w = y.rules, A = y.__rule_regexes, E = y.__rule_count, k = 1; k <= E; k++)
                        if (g = this._input.match(A[k]), g && (!v || g[0].length > v[0].length)) {
                            if (v = g, x = k, this.options.backtrack_lexer) {
                                if (h = this.test_match(g, w[k]), h !== !1) return h;
                                if (this._backtrack) {
                                    v = void 0;
                                    continue
                                } else return !1
                            } else if (!this.options.flex) break
                        } if (v) return h = this.test_match(v, w[x]), h !== !1 ? h : !1;
                    if (this._input) {
                        var b = "";
                        this.options.trackPosition && (b = " on line " + (this.yylineno + 1));
                        var _ = this.constructLexErrorInfo("Lexical error" + b + ": Unrecognized text.", this.options.lexerErrorsAreRecoverable),
                            N = this._input,
                            I = this.topState(),
                            T = this.conditionStack.length;
                        return h = this.parseError(_.errStr, _, this.JisonLexerError) || this.ERROR, h === this.ERROR && !this.matches && N === this._input && I === this.topState() && T === this.conditionStack.length && this.input(), h
                    } else return this.done = !0, this.clear(), this.EOF
                },
                lex: function() {
                    var h;
                    for (typeof this.pre_lex == "function" && (h = this.pre_lex.call(this, 0)), typeof this.options.pre_lex == "function" && (h = this.options.pre_lex.call(this, h) || h), this.yy && typeof this.yy.pre_lex == "function" && (h = this.yy.pre_lex.call(this, h) || h); !h;) h = this.next();
                    return this.yy && typeof this.yy.post_lex == "function" && (h = this.yy.post_lex.call(this, h) || h), typeof this.options.post_lex == "function" && (h = this.options.post_lex.call(this, h) || h), typeof this.post_lex == "function" && (h = this.post_lex.call(this, h) || h), h
                },
                fastLex: function() {
                    for (var h; !h;) h = this.next();
                    return h
                },
                canIUse: function() {
                    var h = {
                        fastLex: !(typeof this.pre_lex == "function" || typeof this.options.pre_lex == "function" || this.yy && typeof this.yy.pre_lex == "function" || this.yy && typeof this.yy.post_lex == "function" || typeof this.options.post_lex == "function" || typeof this.post_lex == "function") && typeof this.fastLex == "function"
                    };
                    return h
                },
                begin: function(h) {
                    return this.pushState(h)
                },
                pushState: function(h) {
                    return this.conditionStack.push(h), this.__currentRuleSet__ = null, this
                },
                popState: function() {
                    var h = this.conditionStack.length - 1;
                    return h > 0 ? (this.__currentRuleSet__ = null, this.conditionStack.pop()) : this.conditionStack[0]
                },
                topState: function(h) {
                    return h = this.conditionStack.length - 1 - Math.abs(h || 0), h >= 0 ? this.conditionStack[h] : "INITIAL"
                },
                _currentRules: function() {
                    return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]] : this.conditions.INITIAL
                },
                stateStackSize: function() {
                    return this.conditionStack.length
                },
                options: {
                    trackPosition: !0
                },
                JisonLexerError: d,
                performAction: function(h, v, g) {
                    switch (v) {
                        case 1:
                            break;
                        default:
                            return this.simpleCaseActionClusters[v]
                    }
                },
                simpleCaseActionClusters: {
                    0: 13,
                    2: 5,
                    3: 6,
                    4: 3,
                    5: 4,
                    6: 15,
                    7: 15,
                    8: 15,
                    9: 15,
                    10: 15,
                    11: 15,
                    12: 16,
                    13: 16,
                    14: 16,
                    15: 16,
                    16: 17,
                    17: 17,
                    18: 18,
                    19: 18,
                    20: 19,
                    21: 19,
                    22: 19,
                    23: 20,
                    24: 21,
                    25: 22,
                    26: 23,
                    27: 25,
                    28: 24,
                    29: 26,
                    30: 27,
                    31: 28,
                    32: 11,
                    33: 9,
                    34: 12,
                    35: 10,
                    36: 7,
                    37: 8,
                    38: 14,
                    39: 1
                },
                rules: [/^(?:(--[\d\-A-Za-z]*))/, /^(?:\s+)/, /^(?:\*)/, /^(?:\/)/, /^(?:\+)/, /^(?:-)/, /^(?:(\d+(\.\d*)?|\.\d+)px\b)/, /^(?:(\d+(\.\d*)?|\.\d+)cm\b)/, /^(?:(\d+(\.\d*)?|\.\d+)mm\b)/, /^(?:(\d+(\.\d*)?|\.\d+)in\b)/, /^(?:(\d+(\.\d*)?|\.\d+)pt\b)/, /^(?:(\d+(\.\d*)?|\.\d+)pc\b)/, /^(?:(\d+(\.\d*)?|\.\d+)deg\b)/, /^(?:(\d+(\.\d*)?|\.\d+)grad\b)/, /^(?:(\d+(\.\d*)?|\.\d+)rad\b)/, /^(?:(\d+(\.\d*)?|\.\d+)turn\b)/, /^(?:(\d+(\.\d*)?|\.\d+)s\b)/, /^(?:(\d+(\.\d*)?|\.\d+)ms\b)/, /^(?:(\d+(\.\d*)?|\.\d+)Hz\b)/, /^(?:(\d+(\.\d*)?|\.\d+)kHz\b)/, /^(?:(\d+(\.\d*)?|\.\d+)dpi\b)/, /^(?:(\d+(\.\d*)?|\.\d+)dpcm\b)/, /^(?:(\d+(\.\d*)?|\.\d+)dppx\b)/, /^(?:(\d+(\.\d*)?|\.\d+)em\b)/, /^(?:(\d+(\.\d*)?|\.\d+)ex\b)/, /^(?:(\d+(\.\d*)?|\.\d+)ch\b)/, /^(?:(\d+(\.\d*)?|\.\d+)rem\b)/, /^(?:(\d+(\.\d*)?|\.\d+)vw\b)/, /^(?:(\d+(\.\d*)?|\.\d+)vh\b)/, /^(?:(\d+(\.\d*)?|\.\d+)vmin\b)/, /^(?:(\d+(\.\d*)?|\.\d+)vmax\b)/, /^(?:(\d+(\.\d*)?|\.\d+)%)/, /^(?:(\d+(\.\d*)?|\.\d+)\b)/, /^(?:(calc))/, /^(?:(var))/, /^(?:([a-z]+))/, /^(?:\()/, /^(?:\))/, /^(?:,)/, /^(?:$)/],
                conditions: {
                    INITIAL: {
                        rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
                        inclusive: !0
                    }
                }
            };
            return m
        }();
        l.lexer = c;

        function f() {
            this.yy = {}
        }
        return f.prototype = l, l.Parser = f, new f
    }();
    typeof Fn < "u" && (e.parser = t, e.Parser = t.Parser, e.parse = function() {
        return t.parse.apply(t, arguments)
    })
})(ov);
var ai = {},
    pu = {
        exports: {}
    },
    ss = {
        px: {
            px: 1,
            cm: 96 / 2.54,
            mm: 96 / 25.4,
            in: 96,
            pt: 96 / 72,
            pc: 16
        },
        cm: {
            px: 2.54 / 96,
            cm: 1,
            mm: .1,
            in: 2.54,
            pt: 2.54 / 72,
            pc: 2.54 / 6
        },
        mm: {
            px: 25.4 / 96,
            cm: 10,
            mm: 1,
            in: 25.4,
            pt: 25.4 / 72,
            pc: 25.4 / 6
        },
        in: {
            px: 1 / 96,
            cm: 1 / 2.54,
            mm: 1 / 25.4,
            in: 1,
            pt: 1 / 72,
            pc: 1 / 6
        },
        pt: {
            px: .75,
            cm: 72 / 2.54,
            mm: 72 / 25.4,
            in: 72,
            pt: 1,
            pc: 12
        },
        pc: {
            px: 6 / 96,
            cm: 6 / 2.54,
            mm: 6 / 25.4,
            in: 6,
            pt: 6 / 72,
            pc: 1
        },
        deg: {
            deg: 1,
            grad: .9,
            rad: 180 / Math.PI,
            turn: 360
        },
        grad: {
            deg: 400 / 360,
            grad: 1,
            rad: 200 / Math.PI,
            turn: 400
        },
        rad: {
            deg: Math.PI / 180,
            grad: Math.PI / 200,
            rad: 1,
            turn: Math.PI * 2
        },
        turn: {
            deg: 1 / 360,
            grad: 1 / 400,
            rad: .5 / Math.PI,
            turn: 1
        },
        s: {
            s: 1,
            ms: 1 / 1e3
        },
        ms: {
            s: 1e3,
            ms: 1
        },
        Hz: {
            Hz: 1,
            kHz: 1e3
        },
        kHz: {
            Hz: 1 / 1e3,
            kHz: 1
        },
        dpi: {
            dpi: 1,
            dpcm: 1 / 2.54,
            dppx: 1 / 96
        },
        dpcm: {
            dpi: 2.54,
            dpcm: 1,
            dppx: 2.54 / 96
        },
        dppx: {
            dpi: 96,
            dpcm: 96 / 2.54,
            dppx: 1
        }
    },
    V3 = function(e, t, r, n) {
        if (!ss.hasOwnProperty(r)) throw new Error("Cannot convert to " + r);
        if (!ss[r].hasOwnProperty(t)) throw new Error("Cannot convert from " + t + " to " + r);
        var i = ss[r][t] * e;
        return n !== !1 ? (n = Math.pow(10, parseInt(n) || 5), Math.round(i * n) / n) : i
    };
(function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = V3,
        n = i(r);

    function i(s) {
        return s && s.__esModule ? s : {
            default: s
        }
    }

    function a(s, u, l) {
        switch (s.type) {
            case "LengthValue":
            case "AngleValue":
            case "TimeValue":
            case "FrequencyValue":
            case "ResolutionValue":
                return o(s, u, l);
            default:
                return {
                    left: s, right: u
                }
        }
    }

    function o(s, u, l) {
        return u.type === s.type && (u = {
            type: s.type,
            value: (0, n.default)(u.value, u.unit, s.unit, l),
            unit: s.unit
        }), {
            left: s,
            right: u
        }
    }
    t.default = a, e.exports = t.default
})(pu, pu.exports);
Object.defineProperty(ai, "__esModule", {
    value: !0
});
ai.flip = mu;
var Y3 = pu.exports,
    us = X3(Y3);

function X3(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function Qe(e, t) {
    return e.type === "MathExpression" ? eM(e, t) : e.type === "Calc" ? Qe(e.value, t) : e
}

function uh(e, t) {
    return e.type === t.type && e.value === t.value
}

function it(e) {
    switch (e) {
        case "LengthValue":
        case "AngleValue":
        case "TimeValue":
        case "FrequencyValue":
        case "ResolutionValue":
        case "EmValue":
        case "ExValue":
        case "ChValue":
        case "RemValue":
        case "VhValue":
        case "VwValue":
        case "VminValue":
        case "VmaxValue":
        case "PercentageValue":
        case "Value":
            return !0
    }
    return !1
}

function K3(e, t) {
    var r = (0, us.default)(e.left, e.right, t),
        n = Qe(r.left, t),
        i = Qe(r.right, t);
    return n.type === "MathExpression" && i.type === "MathExpression" && (n.operator === "/" && i.operator === "*" || n.operator === "-" && i.operator === "+" || n.operator === "*" && i.operator === "/" || n.operator === "+" && i.operator === "-") && (uh(n.right, i.right) ? r = (0, us.default)(n.left, i.left, t) : uh(n.right, i.left) && (r = (0, us.default)(n.left, i.right, t)), n = Qe(r.left, t), i = Qe(r.right, t)), e.left = n, e.right = i, e
}

function mu(e) {
    return e === "+" ? "-" : "+"
}

function vu(e) {
    return it(e.type) ? e.value = -e.value : e.type == "MathExpression" && (e.left = vu(e.left), e.right = vu(e.right)), e
}

function Z3(e, t) {
    var r = e,
        n = r.left,
        i = r.right,
        a = r.operator;
    if (n.type === "CssVariable" || i.type === "CssVariable") return e;
    if (i.value === 0) return n;
    if (n.value === 0 && a === "+") return i;
    if (n.value === 0 && a === "-") return vu(i);
    if (n.type === i.type && it(n.type) && (e = Object.assign({}, n), a === "+" ? e.value = n.value + i.value : e.value = n.value - i.value), it(n.type) && (i.operator === "+" || i.operator === "-") && i.type === "MathExpression") {
        if (n.type === i.left.type) return e = Object.assign({}, e), e.left = Qe({
            type: "MathExpression",
            operator: a,
            left: n,
            right: i.left
        }, t), e.right = i.right, e.operator = a === "-" ? mu(i.operator) : i.operator, Qe(e, t);
        if (n.type === i.right.type) return e = Object.assign({}, e), e.left = Qe({
            type: "MathExpression",
            operator: a === "-" ? mu(i.operator) : i.operator,
            left: n,
            right: i.right
        }, t), e.right = i.left, Qe(e, t)
    }
    if (n.type === "MathExpression" && (n.operator === "+" || n.operator === "-") && it(i.type)) {
        if (i.type === n.left.type) return e = Object.assign({}, n), e.left = Qe({
            type: "MathExpression",
            operator: a,
            left: n.left,
            right: i
        }, t), Qe(e, t);
        if (i.type === n.right.type) return e = Object.assign({}, n), n.operator === "-" ? (e.right = Qe({
            type: "MathExpression",
            operator: a === "-" ? "+" : "-",
            left: i,
            right: n.right
        }, t), e.operator = a === "-" ? "-" : "+") : e.right = Qe({
            type: "MathExpression",
            operator: a,
            left: n.right,
            right: i
        }, t), e.right.value < 0 && (e.right.value *= -1, e.operator = e.operator === "-" ? "+" : "-"), Qe(e, t)
    }
    return e
}

function J3(e, t) {
    if (!it(e.right.type)) return e;
    if (e.right.type !== "Value") throw new Error('Cannot divide by "' + e.right.unit + '", number expected');
    if (e.right.value === 0) throw new Error("Cannot divide by zero");
    return e.left.type === "MathExpression" ? it(e.left.left.type) && it(e.left.right.type) ? (e.left.left.value /= e.right.value, e.left.right.value /= e.right.value, Qe(e.left, t)) : e : it(e.left.type) ? (e.left.value /= e.right.value, e.left) : e
}

function Q3(e) {
    if (e.left.type === "MathExpression" && e.right.type === "Value") {
        if (it(e.left.left.type) && it(e.left.right.type)) return e.left.left.value *= e.right.value, e.left.right.value *= e.right.value, e.left
    } else {
        if (it(e.left.type) && e.right.type === "Value") return e.left.value *= e.right.value, e.left;
        if (e.left.type === "Value" && e.right.type === "MathExpression") {
            if (it(e.right.left.type) && it(e.right.right.type)) return e.right.left.value *= e.left.value, e.right.right.value *= e.left.value, e.right
        } else if (e.left.type === "Value" && it(e.right.type)) return e.right.value *= e.left.value, e.right
    }
    return e
}

function eM(e, t) {
    switch (e = K3(e, t), e.operator) {
        case "+":
        case "-":
            return Z3(e, t);
        case "/":
            return J3(e, t);
        case "*":
            return Q3(e)
    }
    return e
}
ai.default = Qe;
var gu = {
    exports: {}
};
(function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(o, s, u) {
        var l = a(s, u);
        return s.type === "MathExpression" && (l = o + "(" + l + ")"), l
    };
    var r = ai,
        n = {
            "*": 0,
            "/": 0,
            "+": 1,
            "-": 1
        };

    function i(o, s) {
        if (s !== !1) {
            var u = Math.pow(10, s);
            return Math.round(o * u) / u
        }
        return o
    }

    function a(o, s) {
        switch (o.type) {
            case "MathExpression": {
                var u = o.left,
                    l = o.right,
                    c = o.operator,
                    f = "";
                return u.type === "MathExpression" && n[c] < n[u.operator] ? f += "(" + a(u, s) + ")" : f += a(u, s), f += " " + o.operator + " ", l.type === "MathExpression" && n[c] < n[l.operator] ? f += "(" + a(l, s) + ")" : (l.type === "MathExpression" && c === "-" && ["+", "-"].includes(l.operator) && (l.operator = (0, r.flip)(l.operator)), f += a(l, s)), f
            }
            case "Value":
                return i(o.value, s);
            case "CssVariable":
                return o.fallback ? "var(" + o.value + ", " + a(o.fallback, s) + ")" : "var(" + o.value + ")";
            case "Calc":
                return o.prefix ? "-" + o.prefix + "-calc(" + a(o.value, s) + ")" : "calc(" + a(o.value, s) + ")";
            default:
                return i(o.value, s) + o.unit
        }
    }
    e.exports = t.default
})(gu, gu.exports);
(function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = q3,
        n = l(r),
        i = ov,
        a = ai,
        o = l(a),
        s = gu.exports,
        u = l(s);

    function l(f) {
        return f && f.__esModule ? f : {
            default: f
        }
    }
    var c = /((?:\-[a-z]+\-)?calc)/;
    t.default = function(f) {
        var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5;
        return (0, n.default)(f).walk(function(m) {
            if (!(m.type !== "function" || !c.test(m.value))) {
                var p = n.default.stringify(m.nodes);
                if (!(p.indexOf("constant") >= 0 || p.indexOf("env") >= 0)) {
                    var h = i.parser.parse(p),
                        v = (0, o.default)(h, d);
                    m.type = "word", m.value = (0, u.default)(m.value, v, d)
                }
            }
        }, !0).toString()
    }, e.exports = t.default
})(du, du.exports);
const ls = cy(du.exports);

function lh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function ch(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? lh(Object(r), !0).forEach(function(n) {
            tM(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lh(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function tM(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function fh(e) {
    return aM(e) || iM(e) || nM(e) || rM()
}

function rM() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function nM(e, t) {
    if (!!e) {
        if (typeof e == "string") return yu(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return yu(e, t)
    }
}

function iM(e) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e)
}

function aM(e) {
    if (Array.isArray(e)) return yu(e)
}

function yu(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}
var Fr = {
        widthCache: {},
        cacheCount: 0
    },
    oM = 2e3,
    sM = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre"
    },
    uM = ["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height", "top", "left", "fontSize", "lineHeight", "padding", "margin", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom"],
    hh = "recharts_measurement_span";

function lM(e, t) {
    return uM.indexOf(e) >= 0 && t === +t ? "".concat(t, "px") : t
}

function cM(e) {
    var t = e.split(""),
        r = t.reduce(function(n, i) {
            return i === i.toUpperCase() ? [].concat(fh(n), ["-", i.toLowerCase()]) : [].concat(fh(n), [i])
        }, []);
    return r.join("")
}
var fM = function(t) {
        return Object.keys(t).reduce(function(r, n) {
            return "".concat(r).concat(cM(n), ":").concat(lM(n, t[n]), ";")
        }, "")
    },
    _r = function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (t == null || or.isSsr) return {
            width: 0,
            height: 0
        };
        var n = "".concat(t),
            i = fM(r),
            a = "".concat(n, "-").concat(i);
        if (Fr.widthCache[a]) return Fr.widthCache[a];
        try {
            var o = document.getElementById(hh);
            o || (o = document.createElement("span"), o.setAttribute("id", hh), o.setAttribute("aria-hidden", "true"), document.body.appendChild(o));
            var s = ch(ch({}, sM), r);
            Object.keys(s).map(function(c) {
                return o.style[c] = s[c], c
            }), o.textContent = n;
            var u = o.getBoundingClientRect(),
                l = {
                    width: u.width,
                    height: u.height
                };
            return Fr.widthCache[a] = l, ++Fr.cacheCount > oM && (Fr.cacheCount = 0, Fr.widthCache = {}), l
        } catch {
            return {
                width: 0,
                height: 0
            }
        }
    },
    hM = function(t) {
        var r = t.ownerDocument.documentElement,
            n = {
                top: 0,
                left: 0
            };
        return typeof t.getBoundingClientRect < "u" && (n = t.getBoundingClientRect()), {
            top: n.top + window.pageYOffset - r.clientTop,
            left: n.left + window.pageXOffset - r.clientLeft
        }
    },
    dM = function(t, r) {
        return {
            chartX: Math.round(t.pageX - r.left),
            chartY: Math.round(t.pageY - r.top)
        }
    };

function Ri(e) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ri = function(r) {
        return typeof r
    } : Ri = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
    }, Ri(e)
}

function pM(e, t) {
    if (e == null) return {};
    var r = mM(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]))
    }
    return r
}

function mM(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i, a;
    for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r
}

function vM(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function dh(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function gM(e, t, r) {
    return t && dh(e.prototype, t), r && dh(e, r), e
}

function yM(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && bu(e, t)
}

function bu(e, t) {
    return bu = Object.setPrototypeOf || function(n, i) {
        return n.__proto__ = i, n
    }, bu(e, t)
}

function bM(e) {
    var t = wM();
    return function() {
        var n = ma(e),
            i;
        if (t) {
            var a = ma(this).constructor;
            i = Reflect.construct(n, arguments, a)
        } else i = n.apply(this, arguments);
        return xM(this, i)
    }
}

function xM(e, t) {
    return t && (Ri(t) === "object" || typeof t == "function") ? t : _M(e)
}

function _M(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function wM() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function ma(e) {
    return ma = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, ma(e)
}

function ph(e, t) {
    return kM(e) || AM(e, t) || OM(e, t) || SM()
}

function SM() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function OM(e, t) {
    if (!!e) {
        if (typeof e == "string") return mh(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return mh(e, t)
    }
}

function mh(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function AM(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
        var r = [],
            n = !0,
            i = !1,
            a = void 0;
        try {
            for (var o = e[Symbol.iterator](), s; !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t)); n = !0);
        } catch (u) {
            i = !0, a = u
        } finally {
            try {
                !n && o.return != null && o.return()
            } finally {
                if (i) throw a
            }
        }
        return r
    }
}

function kM(e) {
    if (Array.isArray(e)) return e
}

function vh(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function gh(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? vh(Object(r), !0).forEach(function(n) {
            EM(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vh(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function EM(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}
var sv = /[ \f\n\r\t\v\u2028\u2029]+/,
    uv = function(t) {
        try {
            var r = [];
            pe(t.children) || (t.breakAll ? r = t.children.toString().split("") : r = t.children.toString().split(sv));
            var n = r.map(function(a) {
                    return {
                        word: a,
                        width: _r(a, t.style).width
                    }
                }),
                i = t.breakAll ? 0 : _r("\xA0", t.style).width;
            return {
                wordsWithComputedWidth: n,
                spaceWidth: i
            }
        } catch {
            return null
        }
    },
    TM = function(t, r, n, i, a) {
        var o = oe(t.maxLines),
            s = t.children,
            u = function() {
                var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                return I.reduce(function(T, M) {
                    var S = M.word,
                        D = M.width,
                        z = T[T.length - 1];
                    if (z && (i == null || a || z.width + D + n < i)) z.words.push(S), z.width += D + n;
                    else {
                        var B = {
                            words: [S],
                            width: D
                        };
                        T.push(B)
                    }
                    return T
                }, [])
            },
            l = u(r),
            c = function(I) {
                return I.reduce(function(T, M) {
                    return T.width > M.width ? T : M
                })
            };
        if (!o) return l;
        for (var f = "\u2026", d = function(I) {
                var T = s.slice(0, I),
                    M = uv(gh(gh({}, t), {}, {
                        children: T + f
                    })).wordsWithComputedWidth,
                    S = u(M),
                    D = S.length > t.maxLines || c(S).width > i;
                return [D, S]
            }, m = 0, p = s.length - 1, h = 0, v; m <= p && h <= s.length - 1;) {
            var g = Math.floor((m + p) / 2),
                x = g - 1,
                y = d(x),
                b = ph(y, 2),
                _ = b[0],
                w = b[1],
                A = d(g),
                E = ph(A, 1),
                k = E[0];
            if (!_ && !k && (m = g + 1), _ && k && (p = g - 1), !_ && k) {
                v = w;
                break
            }
            h++
        }
        return v || l
    },
    yh = function(t) {
        var r = pe(t) ? [] : t.toString().split(sv);
        return [{
            words: r
        }]
    },
    CM = function(t, r) {
        if ((t.width || t.scaleToFit) && !or.isSsr) {
            var n, i;
            if (r) {
                var a = uv(t);
                if (a) {
                    var o = a.wordsWithComputedWidth,
                        s = a.spaceWidth;
                    n = o, i = s
                } else return yh(t.children);
                return TM(t, n, i, t.width, t.scaleToFit)
            }
        }
        return yh(t.children)
    },
    Hn = function(e) {
        yM(r, e);
        var t = bM(r);

        function r() {
            var n;
            vM(this, r);
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
            return n = t.call.apply(t, [this].concat(a)), n.state = {}, n
        }
        return gM(r, [{
            key: "render",
            value: function() {
                var i = this.props,
                    a = i.dx,
                    o = i.dy,
                    s = i.textAnchor,
                    u = i.verticalAnchor,
                    l = i.scaleToFit,
                    c = i.angle,
                    f = i.lineHeight,
                    d = i.capHeight,
                    m = i.className,
                    p = i.breakAll,
                    h = pM(i, ["dx", "dy", "textAnchor", "verticalAnchor", "scaleToFit", "angle", "lineHeight", "capHeight", "className", "breakAll"]),
                    v = this.state.wordsByLines;
                if (!Be(h.x) || !Be(h.y)) return null;
                var g = h.x + (oe(a) ? a : 0),
                    x = h.y + (oe(o) ? o : 0),
                    y;
                switch (u) {
                    case "start":
                        y = ls("calc(".concat(d, ")"));
                        break;
                    case "middle":
                        y = ls("calc(".concat((v.length - 1) / 2, " * -").concat(f, " + (").concat(d, " / 2))"));
                        break;
                    default:
                        y = ls("calc(".concat(v.length - 1, " * -").concat(f, ")"));
                        break
                }
                var b = [];
                if (l) {
                    var _ = v[0].width,
                        w = this.props.width;
                    b.push("scale(".concat((oe(w) ? w / _ : 1) / _, ")"))
                }
                return c && b.push("rotate(".concat(c, ", ").concat(g, ", ").concat(x, ")")), b.length && (h.transform = b.join(" ")), C("text", {
                    ...Ae(h, !0),
                    x: g,
                    y: x,
                    className: Ne("recharts-text", m),
                    textAnchor: s,
                    children: v.map(function(A, E) {
                        return C("tspan", {
                            x: g,
                            dy: E === 0 ? y : f,
                            children: A.words.join(p ? "" : " ")
                        }, E)
                    })
                })
            }
        }], [{
            key: "getDerivedStateFromProps",
            value: function(i, a) {
                if (i.width !== a.prevWidth || i.scaleToFit !== a.prevScaleToFit || i.children !== a.prevChildren || i.style !== a.prevStyle || i.breakAll !== a.prevBreakAll) {
                    var o = i.children !== a.prevChildren || i.style !== a.prevStyle || i.breakAll !== a.prevBreakAll;
                    return {
                        prevWidth: i.width,
                        prevScaleToFit: i.scaleToFit,
                        prevChildren: i.children,
                        prevStyle: i.style,
                        wordsByLines: CM(i, o)
                    }
                }
                return null
            }
        }]), r
    }(R.exports.Component);
Hn.defaultProps = {
    x: 0,
    y: 0,
    lineHeight: "1em",
    capHeight: "0.71em",
    scaleToFit: !1,
    textAnchor: "start",
    verticalAnchor: "end"
};
var lv = {
        exports: {}
    },
    ke = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ge = typeof Symbol == "function" && Symbol.for,
    Ll = Ge ? Symbol.for("react.element") : 60103,
    jl = Ge ? Symbol.for("react.portal") : 60106,
    co = Ge ? Symbol.for("react.fragment") : 60107,
    fo = Ge ? Symbol.for("react.strict_mode") : 60108,
    ho = Ge ? Symbol.for("react.profiler") : 60114,
    po = Ge ? Symbol.for("react.provider") : 60109,
    mo = Ge ? Symbol.for("react.context") : 60110,
    Fl = Ge ? Symbol.for("react.async_mode") : 60111,
    vo = Ge ? Symbol.for("react.concurrent_mode") : 60111,
    go = Ge ? Symbol.for("react.forward_ref") : 60112,
    yo = Ge ? Symbol.for("react.suspense") : 60113,
    PM = Ge ? Symbol.for("react.suspense_list") : 60120,
    bo = Ge ? Symbol.for("react.memo") : 60115,
    xo = Ge ? Symbol.for("react.lazy") : 60116,
    $M = Ge ? Symbol.for("react.block") : 60121,
    MM = Ge ? Symbol.for("react.fundamental") : 60117,
    IM = Ge ? Symbol.for("react.responder") : 60118,
    NM = Ge ? Symbol.for("react.scope") : 60119;

function ct(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
            case Ll:
                switch (e = e.type, e) {
                    case Fl:
                    case vo:
                    case co:
                    case ho:
                    case fo:
                    case yo:
                        return e;
                    default:
                        switch (e = e && e.$$typeof, e) {
                            case mo:
                            case go:
                            case xo:
                            case bo:
                            case po:
                                return e;
                            default:
                                return t
                        }
                }
            case jl:
                return t
        }
    }
}

function cv(e) {
    return ct(e) === vo
}
ke.AsyncMode = Fl;
ke.ConcurrentMode = vo;
ke.ContextConsumer = mo;
ke.ContextProvider = po;
ke.Element = Ll;
ke.ForwardRef = go;
ke.Fragment = co;
ke.Lazy = xo;
ke.Memo = bo;
ke.Portal = jl;
ke.Profiler = ho;
ke.StrictMode = fo;
ke.Suspense = yo;
ke.isAsyncMode = function(e) {
    return cv(e) || ct(e) === Fl
};
ke.isConcurrentMode = cv;
ke.isContextConsumer = function(e) {
    return ct(e) === mo
};
ke.isContextProvider = function(e) {
    return ct(e) === po
};
ke.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ll
};
ke.isForwardRef = function(e) {
    return ct(e) === go
};
ke.isFragment = function(e) {
    return ct(e) === co
};
ke.isLazy = function(e) {
    return ct(e) === xo
};
ke.isMemo = function(e) {
    return ct(e) === bo
};
ke.isPortal = function(e) {
    return ct(e) === jl
};
ke.isProfiler = function(e) {
    return ct(e) === ho
};
ke.isStrictMode = function(e) {
    return ct(e) === fo
};
ke.isSuspense = function(e) {
    return ct(e) === yo
};
ke.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === co || e === vo || e === ho || e === fo || e === yo || e === PM || typeof e == "object" && e !== null && (e.$$typeof === xo || e.$$typeof === bo || e.$$typeof === po || e.$$typeof === mo || e.$$typeof === go || e.$$typeof === MM || e.$$typeof === IM || e.$$typeof === NM || e.$$typeof === $M)
};
ke.typeOf = ct;
(function(e) {
    e.exports = ke
})(lv);

function qr(e, t) {
    for (var r in e)
        if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r])) return !1;
    for (var n in t)
        if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n)) return !1;
    return !0
}

function bh(e, t) {
    if (e == null) return {};
    var r = RM(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]))
    }
    return r
}

function RM(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i, a;
    for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r
}
var xh = {
        click: "onClick",
        mousedown: "onMouseDown",
        mouseup: "onMouseUp",
        mouseover: "onMouseOver",
        mousemove: "onMouseMove",
        mouseout: "onMouseOut",
        mouseenter: "onMouseEnter",
        mouseleave: "onMouseLeave",
        touchcancel: "onTouchCancel",
        touchend: "onTouchEnd",
        touchmove: "onTouchMove",
        touchstart: "onTouchStart"
    },
    sr = function(t) {
        return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : ""
    },
    _h = null,
    cs = null,
    Bl = function e(t) {
        if (t === _h && _e(cs)) return cs;
        var r = [];
        return R.exports.Children.forEach(t, function(n) {
            pe(n) || (lv.exports.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n))
        }), cs = r, _h = t, r
    },
    qt = function(t, r) {
        var n = [],
            i = [];
        return _e(r) ? i = r.map(function(a) {
            return sr(a)
        }) : i = [sr(r)], Bl(t).forEach(function(a) {
            var o = He(a, "type.displayName") || He(a, "type.name");
            i.indexOf(o) !== -1 && n.push(a)
        }), n
    },
    Ut = function(t, r) {
        var n = qt(t, r);
        return n && n[0]
    },
    wh = function(t) {
        if (!t || !t.props) return !1;
        var r = t.props,
            n = r.width,
            i = r.height;
        return !(!oe(n) || n <= 0 || !oe(i) || i <= 0)
    },
    DM = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
    LM = function(t) {
        return t && t.type && ii(t.type) && DM.indexOf(t.type) >= 0
    },
    fv = function e(t, r) {
        if (t === r) return !0;
        var n = R.exports.Children.count(t);
        if (n !== R.exports.Children.count(r)) return !1;
        if (n === 0) return !0;
        if (n === 1) return Sh(_e(t) ? t[0] : t, _e(r) ? r[0] : r);
        for (var i = 0; i < n; i++) {
            var a = t[i],
                o = r[i];
            if (_e(a) || _e(o)) {
                if (!e(a, o)) return !1
            } else if (!Sh(a, o)) return !1
        }
        return !0
    },
    Sh = function(t, r) {
        if (pe(t) && pe(r)) return !0;
        if (!pe(t) && !pe(r)) {
            var n = t.props || {},
                i = n.children,
                a = bh(n, ["children"]),
                o = r.props || {},
                s = o.children,
                u = bh(o, ["children"]);
            return i && s ? qr(a, u) && fv(i, s) : !i && !s ? qr(a, u) : !1
        }
        return !1
    },
    Oh = function(t, r) {
        var n = [],
            i = {};
        return Bl(t).forEach(function(a, o) {
            if (LM(a)) n.push(a);
            else if (a) {
                var s = sr(a.type),
                    u = r[s] || {},
                    l = u.handler,
                    c = u.once;
                if (l && (!c || !i[s])) {
                    var f = l(a, s, o);
                    n.push(f), i[s] = !0
                }
            }
        }), n
    },
    jM = function(t) {
        var r = t && t.type;
        return r && xh[r] ? xh[r] : null
    },
    FM = function(t, r) {
        return Bl(r).indexOf(t)
    },
    BM = Sl;

function zM(e, t) {
    return BM(e, t)
}
var xu = zM,
    UM = pn;

function HM(e, t, r) {
    for (var n = -1, i = e.length; ++n < i;) {
        var a = e[n],
            o = t(a);
        if (o != null && (s === void 0 ? o === o && !UM(o) : r(o, s))) var s = o,
            u = a
    }
    return u
}
var hv = HM;

function WM(e, t) {
    return e > t
}
var GM = WM,
    qM = hv,
    VM = GM,
    YM = mn;

function XM(e) {
    return e && e.length ? qM(e, YM, VM) : void 0
}
var ar = XM;

function KM(e, t) {
    return e < t
}
var ZM = KM,
    JM = hv,
    QM = ZM,
    eI = mn;

function tI(e) {
    return e && e.length ? JM(e, eI, QM) : void 0
}
var _o = tI,
    rI = kl,
    nI = pr,
    iI = Xm,
    aI = _e;

function oI(e, t) {
    var r = aI(e) ? rI : iI;
    return r(e, nI(t))
}
var sI = oI,
    uI = Vm,
    lI = sI;

function cI(e, t) {
    return uI(lI(e, t), 1)
}
var fI = cI,
    vn = 1e9,
    hI = {
        precision: 20,
        rounding: 4,
        toExpNeg: -7,
        toExpPos: 21,
        LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    },
    Ul, De = !0,
    bt = "[DecimalError] ",
    Ar = bt + "Invalid argument: ",
    zl = bt + "Exponent out of range: ",
    gn = Math.floor,
    xr = Math.pow,
    dI = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    st, Ue = 1e7,
    Ie = 7,
    dv = 9007199254740991,
    va = gn(dv / Ie),
    fe = {};
fe.absoluteValue = fe.abs = function() {
    var e = new this.constructor(this);
    return e.s && (e.s = 1), e
};
fe.comparedTo = fe.cmp = function(e) {
    var t, r, n, i, a = this;
    if (e = new a.constructor(e), a.s !== e.s) return a.s || -e.s;
    if (a.e !== e.e) return a.e > e.e ^ a.s < 0 ? 1 : -1;
    for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
        if (a.d[t] !== e.d[t]) return a.d[t] > e.d[t] ^ a.s < 0 ? 1 : -1;
    return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1
};
fe.decimalPlaces = fe.dp = function() {
    var e = this,
        t = e.d.length - 1,
        r = (t - e.e) * Ie;
    if (t = e.d[t], t)
        for (; t % 10 == 0; t /= 10) r--;
    return r < 0 ? 0 : r
};
fe.dividedBy = fe.div = function(e) {
    return Vt(this, new this.constructor(e))
};
fe.dividedToIntegerBy = fe.idiv = function(e) {
    var t = this,
        r = t.constructor;
    return Te(Vt(t, new r(e), 0, 1), r.precision)
};
fe.equals = fe.eq = function(e) {
    return !this.cmp(e)
};
fe.exponent = function() {
    return je(this)
};
fe.greaterThan = fe.gt = function(e) {
    return this.cmp(e) > 0
};
fe.greaterThanOrEqualTo = fe.gte = function(e) {
    return this.cmp(e) >= 0
};
fe.isInteger = fe.isint = function() {
    return this.e > this.d.length - 2
};
fe.isNegative = fe.isneg = function() {
    return this.s < 0
};
fe.isPositive = fe.ispos = function() {
    return this.s > 0
};
fe.isZero = function() {
    return this.s === 0
};
fe.lessThan = fe.lt = function(e) {
    return this.cmp(e) < 0
};
fe.lessThanOrEqualTo = fe.lte = function(e) {
    return this.cmp(e) < 1
};
fe.logarithm = fe.log = function(e) {
    var t, r = this,
        n = r.constructor,
        i = n.precision,
        a = i + 5;
    if (e === void 0) e = new n(10);
    else if (e = new n(e), e.s < 1 || e.eq(st)) throw Error(bt + "NaN");
    if (r.s < 1) throw Error(bt + (r.s ? "NaN" : "-Infinity"));
    return r.eq(st) ? new n(0) : (De = !1, t = Vt(Wn(r, a), Wn(e, a), a), De = !0, Te(t, i))
};
fe.minus = fe.sub = function(e) {
    var t = this;
    return e = new t.constructor(e), t.s == e.s ? vv(t, e) : pv(t, (e.s = -e.s, e))
};
fe.modulo = fe.mod = function(e) {
    var t, r = this,
        n = r.constructor,
        i = n.precision;
    if (e = new n(e), !e.s) throw Error(bt + "NaN");
    return r.s ? (De = !1, t = Vt(r, e, 0, 1).times(e), De = !0, r.minus(t)) : Te(new n(r), i)
};
fe.naturalExponential = fe.exp = function() {
    return mv(this)
};
fe.naturalLogarithm = fe.ln = function() {
    return Wn(this)
};
fe.negated = fe.neg = function() {
    var e = new this.constructor(this);
    return e.s = -e.s || 0, e
};
fe.plus = fe.add = function(e) {
    var t = this;
    return e = new t.constructor(e), t.s == e.s ? pv(t, e) : vv(t, (e.s = -e.s, e))
};
fe.precision = fe.sd = function(e) {
    var t, r, n, i = this;
    if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Ar + e);
    if (t = je(i) + 1, n = i.d.length - 1, r = n * Ie + 1, n = i.d[n], n) {
        for (; n % 10 == 0; n /= 10) r--;
        for (n = i.d[0]; n >= 10; n /= 10) r++
    }
    return e && t > r ? t : r
};
fe.squareRoot = fe.sqrt = function() {
    var e, t, r, n, i, a, o, s = this,
        u = s.constructor;
    if (s.s < 1) {
        if (!s.s) return new u(0);
        throw Error(bt + "NaN")
    }
    for (e = je(s), De = !1, i = Math.sqrt(+s), i == 0 || i == 1 / 0 ? (t = Ct(s.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = gn((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new u(t)) : n = new u(i.toString()), r = u.precision, i = o = r + 3;;)
        if (a = n, n = a.plus(Vt(s, a, o + 2)).times(.5), Ct(a.d).slice(0, o) === (t = Ct(n.d)).slice(0, o)) {
            if (t = t.slice(o - 3, o + 1), i == o && t == "4999") {
                if (Te(a, r + 1, 0), a.times(a).eq(s)) {
                    n = a;
                    break
                }
            } else if (t != "9999") break;
            o += 4
        } return De = !0, Te(n, r)
};
fe.times = fe.mul = function(e) {
    var t, r, n, i, a, o, s, u, l, c = this,
        f = c.constructor,
        d = c.d,
        m = (e = new f(e)).d;
    if (!c.s || !e.s) return new f(0);
    for (e.s *= c.s, r = c.e + e.e, u = d.length, l = m.length, u < l && (a = d, d = m, m = a, o = u, u = l, l = o), a = [], o = u + l, n = o; n--;) a.push(0);
    for (n = l; --n >= 0;) {
        for (t = 0, i = u + n; i > n;) s = a[i] + m[n] * d[i - n - 1] + t, a[i--] = s % Ue | 0, t = s / Ue | 0;
        a[i] = (a[i] + t) % Ue | 0
    }
    for (; !a[--o];) a.pop();
    return t ? ++r : a.shift(), e.d = a, e.e = r, De ? Te(e, f.precision) : e
};
fe.toDecimalPlaces = fe.todp = function(e, t) {
    var r = this,
        n = r.constructor;
    return r = new n(r), e === void 0 ? r : (It(e, 0, vn), t === void 0 ? t = n.rounding : It(t, 0, 8), Te(r, e + je(r) + 1, t))
};
fe.toExponential = function(e, t) {
    var r, n = this,
        i = n.constructor;
    return e === void 0 ? r = Tr(n, !0) : (It(e, 0, vn), t === void 0 ? t = i.rounding : It(t, 0, 8), n = Te(new i(n), e + 1, t), r = Tr(n, !0, e + 1)), r
};
fe.toFixed = function(e, t) {
    var r, n, i = this,
        a = i.constructor;
    return e === void 0 ? Tr(i) : (It(e, 0, vn), t === void 0 ? t = a.rounding : It(t, 0, 8), n = Te(new a(i), e + je(i) + 1, t), r = Tr(n.abs(), !1, e + je(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r)
};
fe.toInteger = fe.toint = function() {
    var e = this,
        t = e.constructor;
    return Te(new t(e), je(e) + 1, t.rounding)
};
fe.toNumber = function() {
    return +this
};
fe.toPower = fe.pow = function(e) {
    var t, r, n, i, a, o, s = this,
        u = s.constructor,
        l = 12,
        c = +(e = new u(e));
    if (!e.s) return new u(st);
    if (s = new u(s), !s.s) {
        if (e.s < 1) throw Error(bt + "Infinity");
        return s
    }
    if (s.eq(st)) return s;
    if (n = u.precision, e.eq(st)) return Te(s, n);
    if (t = e.e, r = e.d.length - 1, o = t >= r, a = s.s, o) {
        if ((r = c < 0 ? -c : c) <= dv) {
            for (i = new u(st), t = Math.ceil(n / Ie + 4), De = !1; r % 2 && (i = i.times(s), kh(i.d, t)), r = gn(r / 2), r !== 0;) s = s.times(s), kh(s.d, t);
            return De = !0, e.s < 0 ? new u(st).div(i) : Te(i, n)
        }
    } else if (a < 0) throw Error(bt + "NaN");
    return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, s.s = 1, De = !1, i = e.times(Wn(s, n + l)), De = !0, i = mv(i), i.s = a, i
};
fe.toPrecision = function(e, t) {
    var r, n, i = this,
        a = i.constructor;
    return e === void 0 ? (r = je(i), n = Tr(i, r <= a.toExpNeg || r >= a.toExpPos)) : (It(e, 1, vn), t === void 0 ? t = a.rounding : It(t, 0, 8), i = Te(new a(i), e, t), r = je(i), n = Tr(i, e <= r || r <= a.toExpNeg, e)), n
};
fe.toSignificantDigits = fe.tosd = function(e, t) {
    var r = this,
        n = r.constructor;
    return e === void 0 ? (e = n.precision, t = n.rounding) : (It(e, 1, vn), t === void 0 ? t = n.rounding : It(t, 0, 8)), Te(new n(r), e, t)
};
fe.toString = fe.valueOf = fe.val = fe.toJSON = fe[Symbol.for("nodejs.util.inspect.custom")] = function() {
    var e = this,
        t = je(e),
        r = e.constructor;
    return Tr(e, t <= r.toExpNeg || t >= r.toExpPos)
};

function pv(e, t) {
    var r, n, i, a, o, s, u, l, c = e.constructor,
        f = c.precision;
    if (!e.s || !t.s) return t.s || (t = new c(e)), De ? Te(t, f) : t;
    if (u = e.d, l = t.d, o = e.e, i = t.e, u = u.slice(), a = o - i, a) {
        for (a < 0 ? (n = u, a = -a, s = l.length) : (n = l, i = o, s = u.length), o = Math.ceil(f / Ie), s = o > s ? o + 1 : s + 1, a > s && (a = s, n.length = 1), n.reverse(); a--;) n.push(0);
        n.reverse()
    }
    for (s = u.length, a = l.length, s - a < 0 && (a = s, n = l, l = u, u = n), r = 0; a;) r = (u[--a] = u[a] + l[a] + r) / Ue | 0, u[a] %= Ue;
    for (r && (u.unshift(r), ++i), s = u.length; u[--s] == 0;) u.pop();
    return t.d = u, t.e = i, De ? Te(t, f) : t
}

function It(e, t, r) {
    if (e !== ~~e || e < t || e > r) throw Error(Ar + e)
}

function Ct(e) {
    var t, r, n, i = e.length - 1,
        a = "",
        o = e[0];
    if (i > 0) {
        for (a += o, t = 1; t < i; t++) n = e[t] + "", r = Ie - n.length, r && (a += nr(r)), a += n;
        o = e[t], n = o + "", r = Ie - n.length, r && (a += nr(r))
    } else if (o === 0) return "0";
    for (; o % 10 === 0;) o /= 10;
    return a + o
}
var Vt = function() {
    function e(n, i) {
        var a, o = 0,
            s = n.length;
        for (n = n.slice(); s--;) a = n[s] * i + o, n[s] = a % Ue | 0, o = a / Ue | 0;
        return o && n.unshift(o), n
    }

    function t(n, i, a, o) {
        var s, u;
        if (a != o) u = a > o ? 1 : -1;
        else
            for (s = u = 0; s < a; s++)
                if (n[s] != i[s]) {
                    u = n[s] > i[s] ? 1 : -1;
                    break
                } return u
    }

    function r(n, i, a) {
        for (var o = 0; a--;) n[a] -= o, o = n[a] < i[a] ? 1 : 0, n[a] = o * Ue + n[a] - i[a];
        for (; !n[0] && n.length > 1;) n.shift()
    }
    return function(n, i, a, o) {
        var s, u, l, c, f, d, m, p, h, v, g, x, y, b, _, w, A, E, k = n.constructor,
            N = n.s == i.s ? 1 : -1,
            I = n.d,
            T = i.d;
        if (!n.s) return new k(n);
        if (!i.s) throw Error(bt + "Division by zero");
        for (u = n.e - i.e, A = T.length, _ = I.length, m = new k(N), p = m.d = [], l = 0; T[l] == (I[l] || 0);) ++l;
        if (T[l] > (I[l] || 0) && --u, a == null ? x = a = k.precision : o ? x = a + (je(n) - je(i)) + 1 : x = a, x < 0) return new k(0);
        if (x = x / Ie + 2 | 0, l = 0, A == 1)
            for (c = 0, T = T[0], x++;
                (l < _ || c) && x--; l++) y = c * Ue + (I[l] || 0), p[l] = y / T | 0, c = y % T | 0;
        else {
            for (c = Ue / (T[0] + 1) | 0, c > 1 && (T = e(T, c), I = e(I, c), A = T.length, _ = I.length), b = A, h = I.slice(0, A), v = h.length; v < A;) h[v++] = 0;
            E = T.slice(), E.unshift(0), w = T[0], T[1] >= Ue / 2 && ++w;
            do c = 0, s = t(T, h, A, v), s < 0 ? (g = h[0], A != v && (g = g * Ue + (h[1] || 0)), c = g / w | 0, c > 1 ? (c >= Ue && (c = Ue - 1), f = e(T, c), d = f.length, v = h.length, s = t(f, h, d, v), s == 1 && (c--, r(f, A < d ? E : T, d))) : (c == 0 && (s = c = 1), f = T.slice()), d = f.length, d < v && f.unshift(0), r(h, f, v), s == -1 && (v = h.length, s = t(T, h, A, v), s < 1 && (c++, r(h, A < v ? E : T, v))), v = h.length) : s === 0 && (c++, h = [0]), p[l++] = c, s && h[0] ? h[v++] = I[b] || 0 : (h = [I[b]], v = 1); while ((b++ < _ || h[0] !== void 0) && x--)
        }
        return p[0] || p.shift(), m.e = u, Te(m, o ? a + je(m) + 1 : a)
    }
}();

function mv(e, t) {
    var r, n, i, a, o, s, u = 0,
        l = 0,
        c = e.constructor,
        f = c.precision;
    if (je(e) > 16) throw Error(zl + je(e));
    if (!e.s) return new c(st);
    for (t == null ? (De = !1, s = f) : s = t, o = new c(.03125); e.abs().gte(.1);) e = e.times(o), l += 5;
    for (n = Math.log(xr(2, l)) / Math.LN10 * 2 + 5 | 0, s += n, r = i = a = new c(st), c.precision = s;;) {
        if (i = Te(i.times(e), s), r = r.times(++u), o = a.plus(Vt(i, r, s)), Ct(o.d).slice(0, s) === Ct(a.d).slice(0, s)) {
            for (; l--;) a = Te(a.times(a), s);
            return c.precision = f, t == null ? (De = !0, Te(a, f)) : a
        }
        a = o
    }
}

function je(e) {
    for (var t = e.e * Ie, r = e.d[0]; r >= 10; r /= 10) t++;
    return t
}

function fs(e, t, r) {
    if (t > e.LN10.sd()) throw De = !0, r && (e.precision = r), Error(bt + "LN10 precision limit exceeded");
    return Te(new e(e.LN10), t)
}

function nr(e) {
    for (var t = ""; e--;) t += "0";
    return t
}

function Wn(e, t) {
    var r, n, i, a, o, s, u, l, c, f = 1,
        d = 10,
        m = e,
        p = m.d,
        h = m.constructor,
        v = h.precision;
    if (m.s < 1) throw Error(bt + (m.s ? "NaN" : "-Infinity"));
    if (m.eq(st)) return new h(0);
    if (t == null ? (De = !1, l = v) : l = t, m.eq(10)) return t == null && (De = !0), fs(h, l);
    if (l += d, h.precision = l, r = Ct(p), n = r.charAt(0), a = je(m), Math.abs(a) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3;) m = m.times(e), r = Ct(m.d), n = r.charAt(0), f++;
        a = je(m), n > 1 ? (m = new h("0." + r), a++) : m = new h(n + "." + r.slice(1))
    } else return u = fs(h, l + 2, v).times(a + ""), m = Wn(new h(n + "." + r.slice(1)), l - d).plus(u), h.precision = v, t == null ? (De = !0, Te(m, v)) : m;
    for (s = o = m = Vt(m.minus(st), m.plus(st), l), c = Te(m.times(m), l), i = 3;;) {
        if (o = Te(o.times(c), l), u = s.plus(Vt(o, new h(i), l)), Ct(u.d).slice(0, l) === Ct(s.d).slice(0, l)) return s = s.times(2), a !== 0 && (s = s.plus(fs(h, l + 2, v).times(a + ""))), s = Vt(s, new h(f), l), h.precision = v, t == null ? (De = !0, Te(s, v)) : s;
        s = u, i += 2
    }
}

function Ah(e, t) {
    var r, n, i;
    for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48;) ++n;
    for (i = t.length; t.charCodeAt(i - 1) === 48;) --i;
    if (t = t.slice(n, i), t) {
        if (i -= n, r = r - n - 1, e.e = gn(r / Ie), e.d = [], n = (r + 1) % Ie, r < 0 && (n += Ie), n < i) {
            for (n && e.d.push(+t.slice(0, n)), i -= Ie; n < i;) e.d.push(+t.slice(n, n += Ie));
            t = t.slice(n), n = Ie - t.length
        } else n -= i;
        for (; n--;) t += "0";
        if (e.d.push(+t), De && (e.e > va || e.e < -va)) throw Error(zl + r)
    } else e.s = 0, e.e = 0, e.d = [0];
    return e
}

function Te(e, t, r) {
    var n, i, a, o, s, u, l, c, f = e.d;
    for (o = 1, a = f[0]; a >= 10; a /= 10) o++;
    if (n = t - o, n < 0) n += Ie, i = t, l = f[c = 0];
    else {
        if (c = Math.ceil((n + 1) / Ie), a = f.length, c >= a) return e;
        for (l = a = f[c], o = 1; a >= 10; a /= 10) o++;
        n %= Ie, i = n - Ie + o
    }
    if (r !== void 0 && (a = xr(10, o - i - 1), s = l / a % 10 | 0, u = t < 0 || f[c + 1] !== void 0 || l % a, u = r < 4 ? (s || u) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || u || r == 6 && (n > 0 ? i > 0 ? l / xr(10, o - i) : 0 : f[c - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !f[0]) return u ? (a = je(e), f.length = 1, t = t - a - 1, f[0] = xr(10, (Ie - t % Ie) % Ie), e.e = gn(-t / Ie) || 0) : (f.length = 1, f[0] = e.e = e.s = 0), e;
    if (n == 0 ? (f.length = c, a = 1, c--) : (f.length = c + 1, a = xr(10, Ie - n), f[c] = i > 0 ? (l / xr(10, o - i) % xr(10, i) | 0) * a : 0), u)
        for (;;)
            if (c == 0) {
                (f[0] += a) == Ue && (f[0] = 1, ++e.e);
                break
            } else {
                if (f[c] += a, f[c] != Ue) break;
                f[c--] = 0, a = 1
            } for (n = f.length; f[--n] === 0;) f.pop();
    if (De && (e.e > va || e.e < -va)) throw Error(zl + je(e));
    return e
}

function vv(e, t) {
    var r, n, i, a, o, s, u, l, c, f, d = e.constructor,
        m = d.precision;
    if (!e.s || !t.s) return t.s ? t.s = -t.s : t = new d(e), De ? Te(t, m) : t;
    if (u = e.d, f = t.d, n = t.e, l = e.e, u = u.slice(), o = l - n, o) {
        for (c = o < 0, c ? (r = u, o = -o, s = f.length) : (r = f, n = l, s = u.length), i = Math.max(Math.ceil(m / Ie), s) + 2, o > i && (o = i, r.length = 1), r.reverse(), i = o; i--;) r.push(0);
        r.reverse()
    } else {
        for (i = u.length, s = f.length, c = i < s, c && (s = i), i = 0; i < s; i++)
            if (u[i] != f[i]) {
                c = u[i] < f[i];
                break
            } o = 0
    }
    for (c && (r = u, u = f, f = r, t.s = -t.s), s = u.length, i = f.length - s; i > 0; --i) u[s++] = 0;
    for (i = f.length; i > o;) {
        if (u[--i] < f[i]) {
            for (a = i; a && u[--a] === 0;) u[a] = Ue - 1;
            --u[a], u[i] += Ue
        }
        u[i] -= f[i]
    }
    for (; u[--s] === 0;) u.pop();
    for (; u[0] === 0; u.shift()) --n;
    return u[0] ? (t.d = u, t.e = n, De ? Te(t, m) : t) : new d(0)
}

function Tr(e, t, r) {
    var n, i = je(e),
        a = Ct(e.d),
        o = a.length;
    return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + nr(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + nr(-i - 1) + a, r && (n = r - o) > 0 && (a += nr(n))) : i >= o ? (a += nr(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + nr(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += nr(n))), e.s < 0 ? "-" + a : a
}

function kh(e, t) {
    if (e.length > t) return e.length = t, !0
}

function gv(e) {
    var t, r, n;

    function i(a) {
        var o = this;
        if (!(o instanceof i)) return new i(a);
        if (o.constructor = i, a instanceof i) {
            o.s = a.s, o.e = a.e, o.d = (a = a.d) ? a.slice() : a;
            return
        }
        if (typeof a == "number") {
            if (a * 0 !== 0) throw Error(Ar + a);
            if (a > 0) o.s = 1;
            else if (a < 0) a = -a, o.s = -1;
            else {
                o.s = 0, o.e = 0, o.d = [0];
                return
            }
            if (a === ~~a && a < 1e7) {
                o.e = 0, o.d = [a];
                return
            }
            return Ah(o, a.toString())
        } else if (typeof a != "string") throw Error(Ar + a);
        if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, dI.test(a)) Ah(o, a);
        else throw Error(Ar + a)
    }
    if (i.prototype = fe, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = gv, i.config = i.set = pI, e === void 0 && (e = {}), e)
        for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length;) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
    return i.config(e), i
}

function pI(e) {
    if (!e || typeof e != "object") throw Error(bt + "Object expected");
    var t, r, n, i = ["precision", 1, vn, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
    for (t = 0; t < i.length; t += 3)
        if ((n = e[r = i[t]]) !== void 0)
            if (gn(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
            else throw Error(Ar + r + ": " + n);
    if ((n = e[r = "LN10"]) !== void 0)
        if (n == Math.LN10) this[r] = new this(n);
        else throw Error(Ar + r + ": " + n);
    return this
}
var Ul = gv(hI);
st = new Ul(1);
const Ee = Ul;

function mI(e) {
    return bI(e) || yI(e) || gI(e) || vI()
}

function vI() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function gI(e, t) {
    if (!!e) {
        if (typeof e == "string") return _u(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _u(e, t)
    }
}

function yI(e) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e)
}

function bI(e) {
    if (Array.isArray(e)) return _u(e)
}

function _u(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}
var xI = function(t) {
        return t
    },
    yv = {
        "@@functional/placeholder": !0
    },
    bv = function(t) {
        return t === yv
    },
    Eh = function(t) {
        return function r() {
            return arguments.length === 0 || arguments.length === 1 && bv(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments)
        }
    },
    _I = function e(t, r) {
        return t === 1 ? r : Eh(function() {
            for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
            var o = i.filter(function(s) {
                return s !== yv
            }).length;
            return o >= t ? r.apply(void 0, i) : e(t - o, Eh(function() {
                for (var s = arguments.length, u = new Array(s), l = 0; l < s; l++) u[l] = arguments[l];
                var c = i.map(function(f) {
                    return bv(f) ? u.shift() : f
                });
                return r.apply(void 0, mI(c).concat(u))
            }))
        })
    },
    wo = function(t) {
        return _I(t.length, t)
    },
    wu = function(t, r) {
        for (var n = [], i = t; i < r; ++i) n[i - t] = i;
        return n
    },
    wI = wo(function(e, t) {
        return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
            return t[r]
        }).map(e)
    }),
    SI = function() {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
        if (!r.length) return xI;
        var i = r.reverse(),
            a = i[0],
            o = i.slice(1);
        return function() {
            return o.reduce(function(s, u) {
                return u(s)
            }, a.apply(void 0, arguments))
        }
    },
    Su = function(t) {
        return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("")
    },
    xv = function(t) {
        var r = null,
            n = null;
        return function() {
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
            return r && a.every(function(s, u) {
                return s === r[u]
            }) || (r = a, n = t.apply(void 0, a)), n
        }
    };

function OI(e) {
    var t;
    return e === 0 ? t = 1 : t = Math.floor(new Ee(e).abs().log(10).toNumber()) + 1, t
}

function AI(e, t, r) {
    for (var n = new Ee(e), i = 0, a = []; n.lt(t) && i < 1e5;) a.push(n.toNumber()), n = n.add(r), i++;
    return a
}
var kI = wo(function(e, t, r) {
        var n = +e,
            i = +t;
        return n + r * (i - n)
    }),
    EI = wo(function(e, t, r) {
        var n = t - +e;
        return n = n || 1 / 0, (r - e) / n
    }),
    TI = wo(function(e, t, r) {
        var n = t - +e;
        return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n))
    });
const So = {
    rangeStep: AI,
    getDigitCount: OI,
    interpolateNumber: kI,
    uninterpolateNumber: EI,
    uninterpolateTruncation: TI
};

function Ou(e) {
    return $I(e) || PI(e) || _v(e) || CI()
}

function CI() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function PI(e) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e)
}

function $I(e) {
    if (Array.isArray(e)) return Au(e)
}

function Gn(e, t) {
    return NI(e) || II(e, t) || _v(e, t) || MI()
}

function MI() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function _v(e, t) {
    if (!!e) {
        if (typeof e == "string") return Au(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Au(e, t)
    }
}

function Au(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function II(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
        var r = [],
            n = !0,
            i = !1,
            a = void 0;
        try {
            for (var o = e[Symbol.iterator](), s; !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t)); n = !0);
        } catch (u) {
            i = !0, a = u
        } finally {
            try {
                !n && o.return != null && o.return()
            } finally {
                if (i) throw a
            }
        }
        return r
    }
}

function NI(e) {
    if (Array.isArray(e)) return e
}

function wv(e) {
    var t = Gn(e, 2),
        r = t[0],
        n = t[1],
        i = r,
        a = n;
    return r > n && (i = n, a = r), [i, a]
}

function Sv(e, t, r) {
    if (e.lte(0)) return new Ee(0);
    var n = So.getDigitCount(e.toNumber()),
        i = new Ee(10).pow(n),
        a = e.div(i),
        o = n !== 1 ? .05 : .1,
        s = new Ee(Math.ceil(a.div(o).toNumber())).add(r).mul(o),
        u = s.mul(i);
    return t ? u : new Ee(Math.ceil(u))
}

function RI(e, t, r) {
    var n = 1,
        i = new Ee(e);
    if (!i.isint() && r) {
        var a = Math.abs(e);
        a < 1 ? (n = new Ee(10).pow(So.getDigitCount(e) - 1), i = new Ee(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new Ee(Math.floor(e)))
    } else e === 0 ? i = new Ee(Math.floor((t - 1) / 2)) : r || (i = new Ee(Math.floor(e)));
    var o = Math.floor((t - 1) / 2),
        s = SI(wI(function(u) {
            return i.add(new Ee(u - o).mul(n)).toNumber()
        }), wu);
    return s(0, t)
}

function Ov(e, t, r, n) {
    var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    if (!Number.isFinite((t - e) / (r - 1))) return {
        step: new Ee(0),
        tickMin: new Ee(0),
        tickMax: new Ee(0)
    };
    var a = Sv(new Ee(t).sub(e).div(r - 1), n, i),
        o;
    e <= 0 && t >= 0 ? o = new Ee(0) : (o = new Ee(e).add(t).div(2), o = o.sub(new Ee(o).mod(a)));
    var s = Math.ceil(o.sub(e).div(a).toNumber()),
        u = Math.ceil(new Ee(t).sub(o).div(a).toNumber()),
        l = s + u + 1;
    return l > r ? Ov(e, t, r, n, i + 1) : (l < r && (u = t > 0 ? u + (r - l) : u, s = t > 0 ? s : s + (r - l)), {
        step: a,
        tickMin: o.sub(new Ee(s).mul(a)),
        tickMax: o.add(new Ee(u).mul(a))
    })
}

function DI(e) {
    var t = Gn(e, 2),
        r = t[0],
        n = t[1],
        i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
        a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
        o = Math.max(i, 2),
        s = wv([r, n]),
        u = Gn(s, 2),
        l = u[0],
        c = u[1];
    if (l === -1 / 0 || c === 1 / 0) {
        var f = c === 1 / 0 ? [l].concat(Ou(wu(0, i - 1).map(function() {
            return 1 / 0
        }))) : [].concat(Ou(wu(0, i - 1).map(function() {
            return -1 / 0
        })), [c]);
        return r > n ? Su(f) : f
    }
    if (l === c) return RI(l, i, a);
    var d = Ov(l, c, o, a),
        m = d.step,
        p = d.tickMin,
        h = d.tickMax,
        v = So.rangeStep(p, h.add(new Ee(.1).mul(m)), m);
    return r > n ? Su(v) : v
}

function LI(e, t) {
    var r = Gn(e, 2),
        n = r[0],
        i = r[1],
        a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
        o = wv([n, i]),
        s = Gn(o, 2),
        u = s[0],
        l = s[1];
    if (u === -1 / 0 || l === 1 / 0) return [n, i];
    if (u === l) return [u];
    var c = Math.max(t, 2),
        f = Sv(new Ee(l).sub(u).div(c - 1), a, 0),
        d = [].concat(Ou(So.rangeStep(new Ee(u), new Ee(l).sub(new Ee(.99).mul(f)), f)), [l]);
    return n > i ? Su(d) : d
}
var jI = xv(DI),
    FI = xv(LI);

function oi(e, t) {
    return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
}

function Hl(e) {
    let t = e,
        r = e;
    e.length === 1 && (t = (o, s) => e(o) - s, r = BI(e));

    function n(o, s, u, l) {
        for (u == null && (u = 0), l == null && (l = o.length); u < l;) {
            const c = u + l >>> 1;
            r(o[c], s) < 0 ? u = c + 1 : l = c
        }
        return u
    }

    function i(o, s, u, l) {
        for (u == null && (u = 0), l == null && (l = o.length); u < l;) {
            const c = u + l >>> 1;
            r(o[c], s) > 0 ? l = c : u = c + 1
        }
        return u
    }

    function a(o, s, u, l) {
        u == null && (u = 0), l == null && (l = o.length);
        const c = n(o, s, u, l - 1);
        return c > u && t(o[c - 1], s) > -t(o[c], s) ? c - 1 : c
    }
    return {
        left: n,
        center: a,
        right: i
    }
}

function BI(e) {
    return (t, r) => oi(e(t), r)
}

function Av(e) {
    return e === null ? NaN : +e
}

function* zI(e, t) {
    if (t === void 0)
        for (let r of e) r != null && (r = +r) >= r && (yield r);
    else {
        let r = -1;
        for (let n of e)(n = t(n, ++r, e)) != null && (n = +n) >= n && (yield n)
    }
}
const UI = Hl(oi),
    HI = UI.right;
Hl(Av).center;
const si = HI;
var ku = Math.sqrt(50),
    Eu = Math.sqrt(10),
    Tu = Math.sqrt(2);

function Cu(e, t, r) {
    var n, i = -1,
        a, o, s;
    if (t = +t, e = +e, r = +r, e === t && r > 0) return [e];
    if ((n = t < e) && (a = e, e = t, t = a), (s = kv(e, t, r)) === 0 || !isFinite(s)) return [];
    if (s > 0) {
        let u = Math.round(e / s),
            l = Math.round(t / s);
        for (u * s < e && ++u, l * s > t && --l, o = new Array(a = l - u + 1); ++i < a;) o[i] = (u + i) * s
    } else {
        s = -s;
        let u = Math.round(e * s),
            l = Math.round(t * s);
        for (u / s < e && ++u, l / s > t && --l, o = new Array(a = l - u + 1); ++i < a;) o[i] = (u + i) / s
    }
    return n && o.reverse(), o
}

function kv(e, t, r) {
    var n = (t - e) / Math.max(0, r),
        i = Math.floor(Math.log(n) / Math.LN10),
        a = n / Math.pow(10, i);
    return i >= 0 ? (a >= ku ? 10 : a >= Eu ? 5 : a >= Tu ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (a >= ku ? 10 : a >= Eu ? 5 : a >= Tu ? 2 : 1)
}

function Pu(e, t, r) {
    var n = Math.abs(t - e) / Math.max(0, r),
        i = Math.pow(10, Math.floor(Math.log(n) / Math.LN10)),
        a = n / i;
    return a >= ku ? i *= 10 : a >= Eu ? i *= 5 : a >= Tu && (i *= 2), t < e ? -i : i
}

function Th(e, t) {
    let r;
    if (t === void 0)
        for (const n of e) n != null && (r < n || r === void 0 && n >= n) && (r = n);
    else {
        let n = -1;
        for (let i of e)(i = t(i, ++n, e)) != null && (r < i || r === void 0 && i >= i) && (r = i)
    }
    return r
}

function Ch(e, t) {
    let r;
    if (t === void 0)
        for (const n of e) n != null && (r > n || r === void 0 && n >= n) && (r = n);
    else {
        let n = -1;
        for (let i of e)(i = t(i, ++n, e)) != null && (r > i || r === void 0 && i >= i) && (r = i)
    }
    return r
}

function Ev(e, t, r = 0, n = e.length - 1, i = oi) {
    for (; n > r;) {
        if (n - r > 600) {
            const u = n - r + 1,
                l = t - r + 1,
                c = Math.log(u),
                f = .5 * Math.exp(2 * c / 3),
                d = .5 * Math.sqrt(c * f * (u - f) / u) * (l - u / 2 < 0 ? -1 : 1),
                m = Math.max(r, Math.floor(t - l * f / u + d)),
                p = Math.min(n, Math.floor(t + (u - l) * f / u + d));
            Ev(e, t, m, p, i)
        }
        const a = e[t];
        let o = r,
            s = n;
        for (Cn(e, r, t), i(e[n], a) > 0 && Cn(e, r, n); o < s;) {
            for (Cn(e, o, s), ++o, --s; i(e[o], a) < 0;) ++o;
            for (; i(e[s], a) > 0;) --s
        }
        i(e[r], a) === 0 ? Cn(e, r, s) : (++s, Cn(e, s, n)), s <= t && (r = s + 1), t <= s && (n = s - 1)
    }
    return e
}

function Cn(e, t, r) {
    const n = e[t];
    e[t] = e[r], e[r] = n
}

function WI(e, t, r) {
    if (e = Float64Array.from(zI(e, r)), !!(n = e.length)) {
        if ((t = +t) <= 0 || n < 2) return Ch(e);
        if (t >= 1) return Th(e);
        var n, i = (n - 1) * t,
            a = Math.floor(i),
            o = Th(Ev(e, a).subarray(0, a + 1)),
            s = Ch(e.subarray(a + 1));
        return o + (s - o) * (i - a)
    }
}

function GI(e, t, r = Av) {
    if (!!(n = e.length)) {
        if ((t = +t) <= 0 || n < 2) return +r(e[0], 0, e);
        if (t >= 1) return +r(e[n - 1], n - 1, e);
        var n, i = (n - 1) * t,
            a = Math.floor(i),
            o = +r(e[a], a, e),
            s = +r(e[a + 1], a + 1, e);
        return o + (s - o) * (i - a)
    }
}

function qI(e, t, r) {
    e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
    for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i;) a[n] = e + n * r;
    return a
}

function xt(e, t) {
    switch (arguments.length) {
        case 0:
            break;
        case 1:
            this.range(e);
            break;
        default:
            this.range(t).domain(e);
            break
    }
    return this
}

function Kt(e, t) {
    switch (arguments.length) {
        case 0:
            break;
        case 1: {
            typeof e == "function" ? this.interpolator(e) : this.range(e);
            break
        }
        default: {
            this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
            break
        }
    }
    return this
}
const $u = Symbol("implicit");

function Wl() {
    var e = new Map,
        t = [],
        r = [],
        n = $u;

    function i(a) {
        var o = a + "",
            s = e.get(o);
        if (!s) {
            if (n !== $u) return n;
            e.set(o, s = t.push(a))
        }
        return r[(s - 1) % r.length]
    }
    return i.domain = function(a) {
        if (!arguments.length) return t.slice();
        t = [], e = new Map;
        for (const o of a) {
            const s = o + "";
            e.has(s) || e.set(s, t.push(o))
        }
        return i
    }, i.range = function(a) {
        return arguments.length ? (r = Array.from(a), i) : r.slice()
    }, i.unknown = function(a) {
        return arguments.length ? (n = a, i) : n
    }, i.copy = function() {
        return Wl(t, r).unknown(n)
    }, xt.apply(i, arguments), i
}

function qn() {
    var e = Wl().unknown(void 0),
        t = e.domain,
        r = e.range,
        n = 0,
        i = 1,
        a, o, s = !1,
        u = 0,
        l = 0,
        c = .5;
    delete e.unknown;

    function f() {
        var d = t().length,
            m = i < n,
            p = m ? i : n,
            h = m ? n : i;
        a = (h - p) / Math.max(1, d - u + l * 2), s && (a = Math.floor(a)), p += (h - p - a * (d - u)) * c, o = a * (1 - u), s && (p = Math.round(p), o = Math.round(o));
        var v = qI(d).map(function(g) {
            return p + a * g
        });
        return r(m ? v.reverse() : v)
    }
    return e.domain = function(d) {
        return arguments.length ? (t(d), f()) : t()
    }, e.range = function(d) {
        return arguments.length ? ([n, i] = d, n = +n, i = +i, f()) : [n, i]
    }, e.rangeRound = function(d) {
        return [n, i] = d, n = +n, i = +i, s = !0, f()
    }, e.bandwidth = function() {
        return o
    }, e.step = function() {
        return a
    }, e.round = function(d) {
        return arguments.length ? (s = !!d, f()) : s
    }, e.padding = function(d) {
        return arguments.length ? (u = Math.min(1, l = +d), f()) : u
    }, e.paddingInner = function(d) {
        return arguments.length ? (u = Math.min(1, d), f()) : u
    }, e.paddingOuter = function(d) {
        return arguments.length ? (l = +d, f()) : l
    }, e.align = function(d) {
        return arguments.length ? (c = Math.max(0, Math.min(1, d)), f()) : c
    }, e.copy = function() {
        return qn(t(), [n, i]).round(s).paddingInner(u).paddingOuter(l).align(c)
    }, xt.apply(f(), arguments)
}

function Tv(e) {
    var t = e.copy;
    return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
        return Tv(t())
    }, e
}

function zn() {
    return Tv(qn.apply(null, arguments).paddingInner(1))
}

function Gl(e, t, r) {
    e.prototype = t.prototype = r, r.constructor = e
}

function Cv(e, t) {
    var r = Object.create(e.prototype);
    for (var n in t) r[n] = t[n];
    return r
}

function ui() {}
var Vn = .7,
    ga = 1 / Vn,
    Vr = "\\s*([+-]?\\d+)\\s*",
    Yn = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    $t = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    VI = /^#([0-9a-f]{3,8})$/,
    YI = new RegExp("^rgb\\(" + [Vr, Vr, Vr] + "\\)$"),
    XI = new RegExp("^rgb\\(" + [$t, $t, $t] + "\\)$"),
    KI = new RegExp("^rgba\\(" + [Vr, Vr, Vr, Yn] + "\\)$"),
    ZI = new RegExp("^rgba\\(" + [$t, $t, $t, Yn] + "\\)$"),
    JI = new RegExp("^hsl\\(" + [Yn, $t, $t] + "\\)$"),
    QI = new RegExp("^hsla\\(" + [Yn, $t, $t, Yn] + "\\)$"),
    Ph = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
Gl(ui, Xn, {
    copy: function(e) {
        return Object.assign(new this.constructor, this, e)
    },
    displayable: function() {
        return this.rgb().displayable()
    },
    hex: $h,
    formatHex: $h,
    formatHsl: eN,
    formatRgb: Mh,
    toString: Mh
});

function $h() {
    return this.rgb().formatHex()
}

function eN() {
    return Pv(this).formatHsl()
}

function Mh() {
    return this.rgb().formatRgb()
}

function Xn(e) {
    var t, r;
    return e = (e + "").trim().toLowerCase(), (t = VI.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Ih(t) : r === 3 ? new ut(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? wi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? wi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = YI.exec(e)) ? new ut(t[1], t[2], t[3], 1) : (t = XI.exec(e)) ? new ut(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = KI.exec(e)) ? wi(t[1], t[2], t[3], t[4]) : (t = ZI.exec(e)) ? wi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = JI.exec(e)) ? Dh(t[1], t[2] / 100, t[3] / 100, 1) : (t = QI.exec(e)) ? Dh(t[1], t[2] / 100, t[3] / 100, t[4]) : Ph.hasOwnProperty(e) ? Ih(Ph[e]) : e === "transparent" ? new ut(NaN, NaN, NaN, 0) : null
}

function Ih(e) {
    return new ut(e >> 16 & 255, e >> 8 & 255, e & 255, 1)
}

function wi(e, t, r, n) {
    return n <= 0 && (e = t = r = NaN), new ut(e, t, r, n)
}

function tN(e) {
    return e instanceof ui || (e = Xn(e)), e ? (e = e.rgb(), new ut(e.r, e.g, e.b, e.opacity)) : new ut
}

function Mu(e, t, r, n) {
    return arguments.length === 1 ? tN(e) : new ut(e, t, r, n == null ? 1 : n)
}

function ut(e, t, r, n) {
    this.r = +e, this.g = +t, this.b = +r, this.opacity = +n
}
Gl(ut, Mu, Cv(ui, {
    brighter: function(e) {
        return e = e == null ? ga : Math.pow(ga, e), new ut(this.r * e, this.g * e, this.b * e, this.opacity)
    },
    darker: function(e) {
        return e = e == null ? Vn : Math.pow(Vn, e), new ut(this.r * e, this.g * e, this.b * e, this.opacity)
    },
    rgb: function() {
        return this
    },
    displayable: function() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
    },
    hex: Nh,
    formatHex: Nh,
    formatRgb: Rh,
    toString: Rh
}));

function Nh() {
    return "#" + hs(this.r) + hs(this.g) + hs(this.b)
}

function Rh() {
    var e = this.opacity;
    return e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e)), (e === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (e === 1 ? ")" : ", " + e + ")")
}

function hs(e) {
    return e = Math.max(0, Math.min(255, Math.round(e) || 0)), (e < 16 ? "0" : "") + e.toString(16)
}

function Dh(e, t, r, n) {
    return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new kt(e, t, r, n)
}

function Pv(e) {
    if (e instanceof kt) return new kt(e.h, e.s, e.l, e.opacity);
    if (e instanceof ui || (e = Xn(e)), !e) return new kt;
    if (e instanceof kt) return e;
    e = e.rgb();
    var t = e.r / 255,
        r = e.g / 255,
        n = e.b / 255,
        i = Math.min(t, r, n),
        a = Math.max(t, r, n),
        o = NaN,
        s = a - i,
        u = (a + i) / 2;
    return s ? (t === a ? o = (r - n) / s + (r < n) * 6 : r === a ? o = (n - t) / s + 2 : o = (t - r) / s + 4, s /= u < .5 ? a + i : 2 - a - i, o *= 60) : s = u > 0 && u < 1 ? 0 : o, new kt(o, s, u, e.opacity)
}

function rN(e, t, r, n) {
    return arguments.length === 1 ? Pv(e) : new kt(e, t, r, n == null ? 1 : n)
}

function kt(e, t, r, n) {
    this.h = +e, this.s = +t, this.l = +r, this.opacity = +n
}
Gl(kt, rN, Cv(ui, {
    brighter: function(e) {
        return e = e == null ? ga : Math.pow(ga, e), new kt(this.h, this.s, this.l * e, this.opacity)
    },
    darker: function(e) {
        return e = e == null ? Vn : Math.pow(Vn, e), new kt(this.h, this.s, this.l * e, this.opacity)
    },
    rgb: function() {
        var e = this.h % 360 + (this.h < 0) * 360,
            t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
            r = this.l,
            n = r + (r < .5 ? r : 1 - r) * t,
            i = 2 * r - n;
        return new ut(ds(e >= 240 ? e - 240 : e + 120, i, n), ds(e, i, n), ds(e < 120 ? e + 240 : e - 120, i, n), this.opacity)
    },
    displayable: function() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
    },
    formatHsl: function() {
        var e = this.opacity;
        return e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e)), (e === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (e === 1 ? ")" : ", " + e + ")")
    }
}));

function ds(e, t, r) {
    return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255
}
const ql = e => () => e;

function nN(e, t) {
    return function(r) {
        return e + r * t
    }
}

function iN(e, t, r) {
    return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r,
        function(n) {
            return Math.pow(e + n * t, r)
        }
}

function aN(e) {
    return (e = +e) == 1 ? $v : function(t, r) {
        return r - t ? iN(t, r, e) : ql(isNaN(t) ? r : t)
    }
}

function $v(e, t) {
    var r = t - e;
    return r ? nN(e, r) : ql(isNaN(e) ? t : e)
}
const Lh = function e(t) {
    var r = aN(t);

    function n(i, a) {
        var o = r((i = Mu(i)).r, (a = Mu(a)).r),
            s = r(i.g, a.g),
            u = r(i.b, a.b),
            l = $v(i.opacity, a.opacity);
        return function(c) {
            return i.r = o(c), i.g = s(c), i.b = u(c), i.opacity = l(c), i + ""
        }
    }
    return n.gamma = e, n
}(1);

function oN(e, t) {
    t || (t = []);
    var r = e ? Math.min(t.length, e.length) : 0,
        n = t.slice(),
        i;
    return function(a) {
        for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
        return n
    }
}

function sN(e) {
    return ArrayBuffer.isView(e) && !(e instanceof DataView)
}

function uN(e, t) {
    var r = t ? t.length : 0,
        n = e ? Math.min(r, e.length) : 0,
        i = new Array(n),
        a = new Array(r),
        o;
    for (o = 0; o < n; ++o) i[o] = yn(e[o], t[o]);
    for (; o < r; ++o) a[o] = t[o];
    return function(s) {
        for (o = 0; o < n; ++o) a[o] = i[o](s);
        return a
    }
}

function lN(e, t) {
    var r = new Date;
    return e = +e, t = +t,
        function(n) {
            return r.setTime(e * (1 - n) + t * n), r
        }
}

function ya(e, t) {
    return e = +e, t = +t,
        function(r) {
            return e * (1 - r) + t * r
        }
}

function cN(e, t) {
    var r = {},
        n = {},
        i;
    (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
    for (i in t) i in e ? r[i] = yn(e[i], t[i]) : n[i] = t[i];
    return function(a) {
        for (i in r) n[i] = r[i](a);
        return n
    }
}
var Iu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    ps = new RegExp(Iu.source, "g");

function fN(e) {
    return function() {
        return e
    }
}

function hN(e) {
    return function(t) {
        return e(t) + ""
    }
}

function dN(e, t) {
    var r = Iu.lastIndex = ps.lastIndex = 0,
        n, i, a, o = -1,
        s = [],
        u = [];
    for (e = e + "", t = t + "";
        (n = Iu.exec(e)) && (i = ps.exec(t));)(a = i.index) > r && (a = t.slice(r, a), s[o] ? s[o] += a : s[++o] = a), (n = n[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, u.push({
        i: o,
        x: ya(n, i)
    })), r = ps.lastIndex;
    return r < t.length && (a = t.slice(r), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? u[0] ? hN(u[0].x) : fN(t) : (t = u.length, function(l) {
        for (var c = 0, f; c < t; ++c) s[(f = u[c]).i] = f.x(l);
        return s.join("")
    })
}

function yn(e, t) {
    var r = typeof t,
        n;
    return t == null || r === "boolean" ? ql(t) : (r === "number" ? ya : r === "string" ? (n = Xn(t)) ? (t = n, Lh) : dN : t instanceof Xn ? Lh : t instanceof Date ? lN : sN(t) ? oN : Array.isArray(t) ? uN : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? cN : ya)(e, t)
}

function Vl(e, t) {
    return e = +e, t = +t,
        function(r) {
            return Math.round(e * (1 - r) + t * r)
        }
}

function pN(e, t) {
    t === void 0 && (t = e, e = yn);
    for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n;) a[r] = e(i, i = t[++r]);
    return function(o) {
        var s = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
        return a[s](o - s)
    }
}

function mN(e) {
    return function() {
        return e
    }
}

function ba(e) {
    return +e
}
var jh = [0, 1];

function rt(e) {
    return e
}

function Nu(e, t) {
    return (t -= e = +e) ? function(r) {
        return (r - e) / t
    } : mN(isNaN(t) ? NaN : .5)
}

function vN(e, t) {
    var r;
    return e > t && (r = e, e = t, t = r),
        function(n) {
            return Math.max(e, Math.min(t, n))
        }
}

function gN(e, t, r) {
    var n = e[0],
        i = e[1],
        a = t[0],
        o = t[1];
    return i < n ? (n = Nu(i, n), a = r(o, a)) : (n = Nu(n, i), a = r(a, o)),
        function(s) {
            return a(n(s))
        }
}

function yN(e, t, r) {
    var n = Math.min(e.length, t.length) - 1,
        i = new Array(n),
        a = new Array(n),
        o = -1;
    for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n;) i[o] = Nu(e[o], e[o + 1]), a[o] = r(t[o], t[o + 1]);
    return function(s) {
        var u = si(e, s, 1, n) - 1;
        return a[u](i[u](s))
    }
}

function li(e, t) {
    return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())
}

function Oo() {
    var e = jh,
        t = jh,
        r = yn,
        n, i, a, o = rt,
        s, u, l;

    function c() {
        var d = Math.min(e.length, t.length);
        return o !== rt && (o = vN(e[0], e[d - 1])), s = d > 2 ? yN : gN, u = l = null, f
    }

    function f(d) {
        return d == null || isNaN(d = +d) ? a : (u || (u = s(e.map(n), t, r)))(n(o(d)))
    }
    return f.invert = function(d) {
            return o(i((l || (l = s(t, e.map(n), ya)))(d)))
        }, f.domain = function(d) {
            return arguments.length ? (e = Array.from(d, ba), c()) : e.slice()
        }, f.range = function(d) {
            return arguments.length ? (t = Array.from(d), c()) : t.slice()
        }, f.rangeRound = function(d) {
            return t = Array.from(d), r = Vl, c()
        }, f.clamp = function(d) {
            return arguments.length ? (o = d ? !0 : rt, c()) : o !== rt
        }, f.interpolate = function(d) {
            return arguments.length ? (r = d, c()) : r
        }, f.unknown = function(d) {
            return arguments.length ? (a = d, f) : a
        },
        function(d, m) {
            return n = d, i = m, c()
        }
}

function Yl() {
    return Oo()(rt, rt)
}

function bN(e) {
    return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10)
}

function xa(e, t) {
    if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
    var r, n = e.slice(0, r);
    return [n.length > 1 ? n[0] + n.slice(2) : n, +e.slice(r + 1)]
}

function tn(e) {
    return e = xa(Math.abs(e)), e ? e[1] : NaN
}

function xN(e, t) {
    return function(r, n) {
        for (var i = r.length, a = [], o = 0, s = e[0], u = 0; i > 0 && s > 0 && (u + s + 1 > n && (s = Math.max(1, n - u)), a.push(r.substring(i -= s, i + s)), !((u += s + 1) > n));) s = e[o = (o + 1) % e.length];
        return a.reverse().join(t)
    }
}

function _N(e) {
    return function(t) {
        return t.replace(/[0-9]/g, function(r) {
            return e[+r]
        })
    }
}
var wN = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function _a(e) {
    if (!(t = wN.exec(e))) throw new Error("invalid format: " + e);
    var t;
    return new Xl({
        fill: t[1],
        align: t[2],
        sign: t[3],
        symbol: t[4],
        zero: t[5],
        width: t[6],
        comma: t[7],
        precision: t[8] && t[8].slice(1),
        trim: t[9],
        type: t[10]
    })
}
_a.prototype = Xl.prototype;

function Xl(e) {
    this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + ""
}
Xl.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type
};

function SN(e) {
    e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r) switch (e[r]) {
        case ".":
            n = i = r;
            break;
        case "0":
            n === 0 && (n = r), i = r;
            break;
        default:
            if (!+e[r]) break e;
            n > 0 && (n = 0);
            break
    }
    return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e
}
var Mv;

function ON(e, t) {
    var r = xa(e, t);
    if (!r) return e + "";
    var n = r[0],
        i = r[1],
        a = i - (Mv = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
        o = n.length;
    return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + xa(e, Math.max(0, t + a - 1))[0]
}

function Fh(e, t) {
    var r = xa(e, t);
    if (!r) return e + "";
    var n = r[0],
        i = r[1];
    return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0")
}
const Bh = {
    "%": (e, t) => (e * 100).toFixed(t),
    b: e => Math.round(e).toString(2),
    c: e => e + "",
    d: bN,
    e: (e, t) => e.toExponential(t),
    f: (e, t) => e.toFixed(t),
    g: (e, t) => e.toPrecision(t),
    o: e => Math.round(e).toString(8),
    p: (e, t) => Fh(e * 100, t),
    r: Fh,
    s: ON,
    X: e => Math.round(e).toString(16).toUpperCase(),
    x: e => Math.round(e).toString(16)
};

function zh(e) {
    return e
}
var Uh = Array.prototype.map,
    Hh = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

function AN(e) {
    var t = e.grouping === void 0 || e.thousands === void 0 ? zh : xN(Uh.call(e.grouping, Number), e.thousands + ""),
        r = e.currency === void 0 ? "" : e.currency[0] + "",
        n = e.currency === void 0 ? "" : e.currency[1] + "",
        i = e.decimal === void 0 ? "." : e.decimal + "",
        a = e.numerals === void 0 ? zh : _N(Uh.call(e.numerals, String)),
        o = e.percent === void 0 ? "%" : e.percent + "",
        s = e.minus === void 0 ? "\u2212" : e.minus + "",
        u = e.nan === void 0 ? "NaN" : e.nan + "";

    function l(f) {
        f = _a(f);
        var d = f.fill,
            m = f.align,
            p = f.sign,
            h = f.symbol,
            v = f.zero,
            g = f.width,
            x = f.comma,
            y = f.precision,
            b = f.trim,
            _ = f.type;
        _ === "n" ? (x = !0, _ = "g") : Bh[_] || (y === void 0 && (y = 12), b = !0, _ = "g"), (v || d === "0" && m === "=") && (v = !0, d = "0", m = "=");
        var w = h === "$" ? r : h === "#" && /[boxX]/.test(_) ? "0" + _.toLowerCase() : "",
            A = h === "$" ? n : /[%p]/.test(_) ? o : "",
            E = Bh[_],
            k = /[defgprs%]/.test(_);
        y = y === void 0 ? 6 : /[gprs]/.test(_) ? Math.max(1, Math.min(21, y)) : Math.max(0, Math.min(20, y));

        function N(I) {
            var T = w,
                M = A,
                S, D, z;
            if (_ === "c") M = E(I) + M, I = "";
            else {
                I = +I;
                var B = I < 0 || 1 / I < 0;
                if (I = isNaN(I) ? u : E(Math.abs(I), y), b && (I = SN(I)), B && +I == 0 && p !== "+" && (B = !1), T = (B ? p === "(" ? p : s : p === "-" || p === "(" ? "" : p) + T, M = (_ === "s" ? Hh[8 + Mv / 3] : "") + M + (B && p === "(" ? ")" : ""), k) {
                    for (S = -1, D = I.length; ++S < D;)
                        if (z = I.charCodeAt(S), 48 > z || z > 57) {
                            M = (z === 46 ? i + I.slice(S + 1) : I.slice(S)) + M, I = I.slice(0, S);
                            break
                        }
                }
            }
            x && !v && (I = t(I, 1 / 0));
            var q = T.length + I.length + M.length,
                H = q < g ? new Array(g - q + 1).join(d) : "";
            switch (x && v && (I = t(H + I, H.length ? g - M.length : 1 / 0), H = ""), m) {
                case "<":
                    I = T + I + M + H;
                    break;
                case "=":
                    I = T + H + I + M;
                    break;
                case "^":
                    I = H.slice(0, q = H.length >> 1) + T + I + M + H.slice(q);
                    break;
                default:
                    I = H + T + I + M;
                    break
            }
            return a(I)
        }
        return N.toString = function() {
            return f + ""
        }, N
    }

    function c(f, d) {
        var m = l((f = _a(f), f.type = "f", f)),
            p = Math.max(-8, Math.min(8, Math.floor(tn(d) / 3))) * 3,
            h = Math.pow(10, -p),
            v = Hh[8 + p / 3];
        return function(g) {
            return m(h * g) + v
        }
    }
    return {
        format: l,
        formatPrefix: c
    }
}
var Si, Kl, Iv;
kN({
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
});

function kN(e) {
    return Si = AN(e), Kl = Si.format, Iv = Si.formatPrefix, Si
}

function EN(e) {
    return Math.max(0, -tn(Math.abs(e)))
}

function TN(e, t) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(tn(t) / 3))) * 3 - tn(Math.abs(e)))
}

function CN(e, t) {
    return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, tn(t) - tn(e)) + 1
}

function Nv(e, t, r, n) {
    var i = Pu(e, t, r),
        a;
    switch (n = _a(n == null ? ",f" : n), n.type) {
        case "s": {
            var o = Math.max(Math.abs(e), Math.abs(t));
            return n.precision == null && !isNaN(a = TN(i, o)) && (n.precision = a), Iv(n, o)
        }
        case "":
        case "e":
        case "g":
        case "p":
        case "r": {
            n.precision == null && !isNaN(a = CN(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
            break
        }
        case "f":
        case "%": {
            n.precision == null && !isNaN(a = EN(i)) && (n.precision = a - (n.type === "%") * 2);
            break
        }
    }
    return Kl(n)
}

function mr(e) {
    var t = e.domain;
    return e.ticks = function(r) {
        var n = t();
        return Cu(n[0], n[n.length - 1], r == null ? 10 : r)
    }, e.tickFormat = function(r, n) {
        var i = t();
        return Nv(i[0], i[i.length - 1], r == null ? 10 : r, n)
    }, e.nice = function(r) {
        r == null && (r = 10);
        var n = t(),
            i = 0,
            a = n.length - 1,
            o = n[i],
            s = n[a],
            u, l, c = 10;
        for (s < o && (l = o, o = s, s = l, l = i, i = a, a = l); c-- > 0;) {
            if (l = kv(o, s, r), l === u) return n[i] = o, n[a] = s, t(n);
            if (l > 0) o = Math.floor(o / l) * l, s = Math.ceil(s / l) * l;
            else if (l < 0) o = Math.ceil(o * l) / l, s = Math.floor(s * l) / l;
            else break;
            u = l
        }
        return e
    }, e
}

function wa() {
    var e = Yl();
    return e.copy = function() {
        return li(e, wa())
    }, xt.apply(e, arguments), mr(e)
}

function Rv(e) {
    var t;

    function r(n) {
        return n == null || isNaN(n = +n) ? t : n
    }
    return r.invert = r, r.domain = r.range = function(n) {
        return arguments.length ? (e = Array.from(n, ba), r) : e.slice()
    }, r.unknown = function(n) {
        return arguments.length ? (t = n, r) : t
    }, r.copy = function() {
        return Rv(e).unknown(t)
    }, e = arguments.length ? Array.from(e, ba) : [0, 1], mr(r)
}

function Dv(e, t) {
    e = e.slice();
    var r = 0,
        n = e.length - 1,
        i = e[r],
        a = e[n],
        o;
    return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e[r] = t.floor(i), e[n] = t.ceil(a), e
}

function Wh(e) {
    return Math.log(e)
}

function Gh(e) {
    return Math.exp(e)
}

function PN(e) {
    return -Math.log(-e)
}

function $N(e) {
    return -Math.exp(-e)
}

function MN(e) {
    return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e
}

function IN(e) {
    return e === 10 ? MN : e === Math.E ? Math.exp : function(t) {
        return Math.pow(e, t)
    }
}

function NN(e) {
    return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), function(t) {
        return Math.log(t) / e
    })
}

function qh(e) {
    return function(t) {
        return -e(-t)
    }
}

function Zl(e) {
    var t = e(Wh, Gh),
        r = t.domain,
        n = 10,
        i, a;

    function o() {
        return i = NN(n), a = IN(n), r()[0] < 0 ? (i = qh(i), a = qh(a), e(PN, $N)) : e(Wh, Gh), t
    }
    return t.base = function(s) {
        return arguments.length ? (n = +s, o()) : n
    }, t.domain = function(s) {
        return arguments.length ? (r(s), o()) : r()
    }, t.ticks = function(s) {
        var u = r(),
            l = u[0],
            c = u[u.length - 1],
            f;
        (f = c < l) && (d = l, l = c, c = d);
        var d = i(l),
            m = i(c),
            p, h, v, g = s == null ? 10 : +s,
            x = [];
        if (!(n % 1) && m - d < g) {
            if (d = Math.floor(d), m = Math.ceil(m), l > 0) {
                for (; d <= m; ++d)
                    for (h = 1, p = a(d); h < n; ++h)
                        if (v = p * h, !(v < l)) {
                            if (v > c) break;
                            x.push(v)
                        }
            } else
                for (; d <= m; ++d)
                    for (h = n - 1, p = a(d); h >= 1; --h)
                        if (v = p * h, !(v < l)) {
                            if (v > c) break;
                            x.push(v)
                        } x.length * 2 < g && (x = Cu(l, c, g))
        } else x = Cu(d, m, Math.min(m - d, g)).map(a);
        return f ? x.reverse() : x
    }, t.tickFormat = function(s, u) {
        if (u == null && (u = n === 10 ? ".0e" : ","), typeof u != "function" && (u = Kl(u)), s === 1 / 0) return u;
        s == null && (s = 10);
        var l = Math.max(1, n * s / t.ticks().length);
        return function(c) {
            var f = c / a(Math.round(i(c)));
            return f * n < n - .5 && (f *= n), f <= l ? u(c) : ""
        }
    }, t.nice = function() {
        return r(Dv(r(), {
            floor: function(s) {
                return a(Math.floor(i(s)))
            },
            ceil: function(s) {
                return a(Math.ceil(i(s)))
            }
        }))
    }, t
}

function Lv() {
    var e = Zl(Oo()).domain([1, 10]);
    return e.copy = function() {
        return li(e, Lv()).base(e.base())
    }, xt.apply(e, arguments), e
}

function Vh(e) {
    return function(t) {
        return Math.sign(t) * Math.log1p(Math.abs(t / e))
    }
}

function Yh(e) {
    return function(t) {
        return Math.sign(t) * Math.expm1(Math.abs(t)) * e
    }
}

function Jl(e) {
    var t = 1,
        r = e(Vh(t), Yh(t));
    return r.constant = function(n) {
        return arguments.length ? e(Vh(t = +n), Yh(t)) : t
    }, mr(r)
}

function jv() {
    var e = Jl(Oo());
    return e.copy = function() {
        return li(e, jv()).constant(e.constant())
    }, xt.apply(e, arguments)
}

function Xh(e) {
    return function(t) {
        return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e)
    }
}

function RN(e) {
    return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e)
}

function DN(e) {
    return e < 0 ? -e * e : e * e
}

function Ql(e) {
    var t = e(rt, rt),
        r = 1;

    function n() {
        return r === 1 ? e(rt, rt) : r === .5 ? e(RN, DN) : e(Xh(r), Xh(1 / r))
    }
    return t.exponent = function(i) {
        return arguments.length ? (r = +i, n()) : r
    }, mr(t)
}

function ec() {
    var e = Ql(Oo());
    return e.copy = function() {
        return li(e, ec()).exponent(e.exponent())
    }, xt.apply(e, arguments), e
}

function LN() {
    return ec.apply(null, arguments).exponent(.5)
}

function Kh(e) {
    return Math.sign(e) * e * e
}

function jN(e) {
    return Math.sign(e) * Math.sqrt(Math.abs(e))
}

function Fv() {
    var e = Yl(),
        t = [0, 1],
        r = !1,
        n;

    function i(a) {
        var o = jN(e(a));
        return isNaN(o) ? n : r ? Math.round(o) : o
    }
    return i.invert = function(a) {
        return e.invert(Kh(a))
    }, i.domain = function(a) {
        return arguments.length ? (e.domain(a), i) : e.domain()
    }, i.range = function(a) {
        return arguments.length ? (e.range((t = Array.from(a, ba)).map(Kh)), i) : t.slice()
    }, i.rangeRound = function(a) {
        return i.range(a).round(!0)
    }, i.round = function(a) {
        return arguments.length ? (r = !!a, i) : r
    }, i.clamp = function(a) {
        return arguments.length ? (e.clamp(a), i) : e.clamp()
    }, i.unknown = function(a) {
        return arguments.length ? (n = a, i) : n
    }, i.copy = function() {
        return Fv(e.domain(), t).round(r).clamp(e.clamp()).unknown(n)
    }, xt.apply(i, arguments), mr(i)
}

function Bv() {
    var e = [],
        t = [],
        r = [],
        n;

    function i() {
        var o = 0,
            s = Math.max(1, t.length);
        for (r = new Array(s - 1); ++o < s;) r[o - 1] = GI(e, o / s);
        return a
    }

    function a(o) {
        return o == null || isNaN(o = +o) ? n : t[si(r, o)]
    }
    return a.invertExtent = function(o) {
        var s = t.indexOf(o);
        return s < 0 ? [NaN, NaN] : [s > 0 ? r[s - 1] : e[0], s < r.length ? r[s] : e[e.length - 1]]
    }, a.domain = function(o) {
        if (!arguments.length) return e.slice();
        e = [];
        for (let s of o) s != null && !isNaN(s = +s) && e.push(s);
        return e.sort(oi), i()
    }, a.range = function(o) {
        return arguments.length ? (t = Array.from(o), i()) : t.slice()
    }, a.unknown = function(o) {
        return arguments.length ? (n = o, a) : n
    }, a.quantiles = function() {
        return r.slice()
    }, a.copy = function() {
        return Bv().domain(e).range(t).unknown(n)
    }, xt.apply(a, arguments)
}

function zv() {
    var e = 0,
        t = 1,
        r = 1,
        n = [.5],
        i = [0, 1],
        a;

    function o(u) {
        return u != null && u <= u ? i[si(n, u, 0, r)] : a
    }

    function s() {
        var u = -1;
        for (n = new Array(r); ++u < r;) n[u] = ((u + 1) * t - (u - r) * e) / (r + 1);
        return o
    }
    return o.domain = function(u) {
        return arguments.length ? ([e, t] = u, e = +e, t = +t, s()) : [e, t]
    }, o.range = function(u) {
        return arguments.length ? (r = (i = Array.from(u)).length - 1, s()) : i.slice()
    }, o.invertExtent = function(u) {
        var l = i.indexOf(u);
        return l < 0 ? [NaN, NaN] : l < 1 ? [e, n[0]] : l >= r ? [n[r - 1], t] : [n[l - 1], n[l]]
    }, o.unknown = function(u) {
        return arguments.length && (a = u), o
    }, o.thresholds = function() {
        return n.slice()
    }, o.copy = function() {
        return zv().domain([e, t]).range(i).unknown(a)
    }, xt.apply(mr(o), arguments)
}

function Uv() {
    var e = [.5],
        t = [0, 1],
        r, n = 1;

    function i(a) {
        return a != null && a <= a ? t[si(e, a, 0, n)] : r
    }
    return i.domain = function(a) {
        return arguments.length ? (e = Array.from(a), n = Math.min(e.length, t.length - 1), i) : e.slice()
    }, i.range = function(a) {
        return arguments.length ? (t = Array.from(a), n = Math.min(e.length, t.length - 1), i) : t.slice()
    }, i.invertExtent = function(a) {
        var o = t.indexOf(a);
        return [e[o - 1], e[o]]
    }, i.unknown = function(a) {
        return arguments.length ? (r = a, i) : r
    }, i.copy = function() {
        return Uv().domain(e).range(t).unknown(r)
    }, xt.apply(i, arguments)
}
var ms = new Date,
    vs = new Date;

function qe(e, t, r, n) {
    function i(a) {
        return e(a = arguments.length === 0 ? new Date : new Date(+a)), a
    }
    return i.floor = function(a) {
        return e(a = new Date(+a)), a
    }, i.ceil = function(a) {
        return e(a = new Date(a - 1)), t(a, 1), e(a), a
    }, i.round = function(a) {
        var o = i(a),
            s = i.ceil(a);
        return a - o < s - a ? o : s
    }, i.offset = function(a, o) {
        return t(a = new Date(+a), o == null ? 1 : Math.floor(o)), a
    }, i.range = function(a, o, s) {
        var u = [],
            l;
        if (a = i.ceil(a), s = s == null ? 1 : Math.floor(s), !(a < o) || !(s > 0)) return u;
        do u.push(l = new Date(+a)), t(a, s), e(a); while (l < a && a < o);
        return u
    }, i.filter = function(a) {
        return qe(function(o) {
            if (o >= o)
                for (; e(o), !a(o);) o.setTime(o - 1)
        }, function(o, s) {
            if (o >= o)
                if (s < 0)
                    for (; ++s <= 0;)
                        for (; t(o, -1), !a(o););
                else
                    for (; --s >= 0;)
                        for (; t(o, 1), !a(o););
        })
    }, r && (i.count = function(a, o) {
        return ms.setTime(+a), vs.setTime(+o), e(ms), e(vs), Math.floor(r(ms, vs))
    }, i.every = function(a) {
        return a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? function(o) {
            return n(o) % a === 0
        } : function(o) {
            return i.count(0, o) % a === 0
        }) : i
    }), i
}
var Sa = qe(function() {}, function(e, t) {
    e.setTime(+e + t)
}, function(e, t) {
    return t - e
});
Sa.every = function(e) {
    return e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? qe(function(t) {
        t.setTime(Math.floor(t / e) * e)
    }, function(t, r) {
        t.setTime(+t + r * e)
    }, function(t, r) {
        return (r - t) / e
    }) : Sa
};
const FN = Sa;
Sa.range;
const Ht = 1e3,
    vt = Ht * 60,
    Wt = vt * 60,
    Cr = Wt * 24,
    tc = Cr * 7,
    Zh = Cr * 30,
    gs = Cr * 365;
var Hv = qe(function(e) {
    e.setTime(e - e.getMilliseconds())
}, function(e, t) {
    e.setTime(+e + t * Ht)
}, function(e, t) {
    return (t - e) / Ht
}, function(e) {
    return e.getUTCSeconds()
});
const Ur = Hv;
Hv.range;
var Wv = qe(function(e) {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ht)
}, function(e, t) {
    e.setTime(+e + t * vt)
}, function(e, t) {
    return (t - e) / vt
}, function(e) {
    return e.getMinutes()
});
const Gv = Wv;
Wv.range;
var qv = qe(function(e) {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ht - e.getMinutes() * vt)
}, function(e, t) {
    e.setTime(+e + t * Wt)
}, function(e, t) {
    return (t - e) / Wt
}, function(e) {
    return e.getHours()
});
const Vv = qv;
qv.range;
var Yv = qe(e => e.setHours(0, 0, 0, 0), (e, t) => e.setDate(e.getDate() + t), (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * vt) / Cr, e => e.getDate() - 1);
const Ao = Yv;
Yv.range;

function Nr(e) {
    return qe(function(t) {
        t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0)
    }, function(t, r) {
        t.setDate(t.getDate() + r * 7)
    }, function(t, r) {
        return (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * vt) / tc
    })
}
var ko = Nr(0),
    Oa = Nr(1),
    BN = Nr(2),
    zN = Nr(3),
    rn = Nr(4),
    UN = Nr(5),
    HN = Nr(6);
ko.range;
Oa.range;
BN.range;
zN.range;
rn.range;
UN.range;
HN.range;
var Xv = qe(function(e) {
    e.setDate(1), e.setHours(0, 0, 0, 0)
}, function(e, t) {
    e.setMonth(e.getMonth() + t)
}, function(e, t) {
    return t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12
}, function(e) {
    return e.getMonth()
});
const Kv = Xv;
Xv.range;
var rc = qe(function(e) {
    e.setMonth(0, 1), e.setHours(0, 0, 0, 0)
}, function(e, t) {
    e.setFullYear(e.getFullYear() + t)
}, function(e, t) {
    return t.getFullYear() - e.getFullYear()
}, function(e) {
    return e.getFullYear()
});
rc.every = function(e) {
    return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : qe(function(t) {
        t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
    }, function(t, r) {
        t.setFullYear(t.getFullYear() + r * e)
    })
};
const Pr = rc;
rc.range;
var Zv = qe(function(e) {
    e.setUTCSeconds(0, 0)
}, function(e, t) {
    e.setTime(+e + t * vt)
}, function(e, t) {
    return (t - e) / vt
}, function(e) {
    return e.getUTCMinutes()
});
const Jv = Zv;
Zv.range;
var Qv = qe(function(e) {
    e.setUTCMinutes(0, 0, 0)
}, function(e, t) {
    e.setTime(+e + t * Wt)
}, function(e, t) {
    return (t - e) / Wt
}, function(e) {
    return e.getUTCHours()
});
const eg = Qv;
Qv.range;
var tg = qe(function(e) {
    e.setUTCHours(0, 0, 0, 0)
}, function(e, t) {
    e.setUTCDate(e.getUTCDate() + t)
}, function(e, t) {
    return (t - e) / Cr
}, function(e) {
    return e.getUTCDate() - 1
});
const Eo = tg;
tg.range;

function Rr(e) {
    return qe(function(t) {
        t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0)
    }, function(t, r) {
        t.setUTCDate(t.getUTCDate() + r * 7)
    }, function(t, r) {
        return (r - t) / tc
    })
}
var To = Rr(0),
    Aa = Rr(1),
    WN = Rr(2),
    GN = Rr(3),
    nn = Rr(4),
    qN = Rr(5),
    VN = Rr(6);
To.range;
Aa.range;
WN.range;
GN.range;
nn.range;
qN.range;
VN.range;
var rg = qe(function(e) {
    e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0)
}, function(e, t) {
    e.setUTCMonth(e.getUTCMonth() + t)
}, function(e, t) {
    return t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12
}, function(e) {
    return e.getUTCMonth()
});
const ng = rg;
rg.range;
var nc = qe(function(e) {
    e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0)
}, function(e, t) {
    e.setUTCFullYear(e.getUTCFullYear() + t)
}, function(e, t) {
    return t.getUTCFullYear() - e.getUTCFullYear()
}, function(e) {
    return e.getUTCFullYear()
});
nc.every = function(e) {
    return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : qe(function(t) {
        t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
    }, function(t, r) {
        t.setUTCFullYear(t.getUTCFullYear() + r * e)
    })
};
const $r = nc;
nc.range;

function ig(e, t, r, n, i, a) {
    const o = [
        [Ur, 1, Ht],
        [Ur, 5, 5 * Ht],
        [Ur, 15, 15 * Ht],
        [Ur, 30, 30 * Ht],
        [a, 1, vt],
        [a, 5, 5 * vt],
        [a, 15, 15 * vt],
        [a, 30, 30 * vt],
        [i, 1, Wt],
        [i, 3, 3 * Wt],
        [i, 6, 6 * Wt],
        [i, 12, 12 * Wt],
        [n, 1, Cr],
        [n, 2, 2 * Cr],
        [r, 1, tc],
        [t, 1, Zh],
        [t, 3, 3 * Zh],
        [e, 1, gs]
    ];

    function s(l, c, f) {
        const d = c < l;
        d && ([l, c] = [c, l]);
        const m = f && typeof f.range == "function" ? f : u(l, c, f),
            p = m ? m.range(l, +c + 1) : [];
        return d ? p.reverse() : p
    }

    function u(l, c, f) {
        const d = Math.abs(c - l) / f,
            m = Hl(([, , v]) => v).right(o, d);
        if (m === o.length) return e.every(Pu(l / gs, c / gs, f));
        if (m === 0) return FN.every(Math.max(Pu(l, c, f), 1));
        const [p, h] = o[d / o[m - 1][2] < o[m][2] / d ? m - 1 : m];
        return p.every(h)
    }
    return [s, u]
}
const [YN, XN] = ig($r, ng, To, Eo, eg, Jv), [KN, ZN] = ig(Pr, Kv, ko, Ao, Vv, Gv);

function ys(e) {
    if (0 <= e.y && e.y < 100) {
        var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
        return t.setFullYear(e.y), t
    }
    return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L)
}

function bs(e) {
    if (0 <= e.y && e.y < 100) {
        var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
        return t.setUTCFullYear(e.y), t
    }
    return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L))
}

function Pn(e, t, r) {
    return {
        y: e,
        m: t,
        d: r,
        H: 0,
        M: 0,
        S: 0,
        L: 0
    }
}

function JN(e) {
    var t = e.dateTime,
        r = e.date,
        n = e.time,
        i = e.periods,
        a = e.days,
        o = e.shortDays,
        s = e.months,
        u = e.shortMonths,
        l = $n(i),
        c = Mn(i),
        f = $n(a),
        d = Mn(a),
        m = $n(o),
        p = Mn(o),
        h = $n(s),
        v = Mn(s),
        g = $n(u),
        x = Mn(u),
        y = {
            a: B,
            A: q,
            b: H,
            B: Q,
            c: null,
            d: nd,
            e: nd,
            f: _R,
            g: $R,
            G: IR,
            H: yR,
            I: bR,
            j: xR,
            L: ag,
            m: wR,
            M: SR,
            p: F,
            q: L,
            Q: od,
            s: sd,
            S: OR,
            u: AR,
            U: kR,
            V: ER,
            w: TR,
            W: CR,
            x: null,
            X: null,
            y: PR,
            Y: MR,
            Z: NR,
            "%": ad
        },
        b = {
            a: ae,
            A: re,
            b: ee,
            B: ye,
            c: null,
            d: id,
            e: id,
            f: jR,
            g: YR,
            G: KR,
            H: RR,
            I: DR,
            j: LR,
            L: sg,
            m: FR,
            M: BR,
            p: $e,
            q: se,
            Q: od,
            s: sd,
            S: zR,
            u: UR,
            U: HR,
            V: WR,
            w: GR,
            W: qR,
            x: null,
            X: null,
            y: VR,
            Y: XR,
            Z: ZR,
            "%": ad
        },
        _ = {
            a: N,
            A: I,
            b: T,
            B: M,
            c: S,
            d: td,
            e: td,
            f: pR,
            g: ed,
            G: Qh,
            H: rd,
            I: rd,
            j: cR,
            L: dR,
            m: lR,
            M: fR,
            p: k,
            q: uR,
            Q: vR,
            s: gR,
            S: hR,
            u: nR,
            U: iR,
            V: aR,
            w: rR,
            W: oR,
            x: D,
            X: z,
            y: ed,
            Y: Qh,
            Z: sR,
            "%": mR
        };
    y.x = w(r, y), y.X = w(n, y), y.c = w(t, y), b.x = w(r, b), b.X = w(n, b), b.c = w(t, b);

    function w(V, ue) {
        return function(ce) {
            var X = [],
                ge = -1,
                O = 0,
                G = V.length,
                W, $, P;
            for (ce instanceof Date || (ce = new Date(+ce)); ++ge < G;) V.charCodeAt(ge) === 37 && (X.push(V.slice(O, ge)), ($ = Jh[W = V.charAt(++ge)]) != null ? W = V.charAt(++ge) : $ = W === "e" ? " " : "0", (P = ue[W]) && (W = P(ce, $)), X.push(W), O = ge + 1);
            return X.push(V.slice(O, ge)), X.join("")
        }
    }

    function A(V, ue) {
        return function(ce) {
            var X = Pn(1900, void 0, 1),
                ge = E(X, V, ce += "", 0),
                O, G;
            if (ge != ce.length) return null;
            if ("Q" in X) return new Date(X.Q);
            if ("s" in X) return new Date(X.s * 1e3 + ("L" in X ? X.L : 0));
            if (ue && !("Z" in X) && (X.Z = 0), "p" in X && (X.H = X.H % 12 + X.p * 12), X.m === void 0 && (X.m = "q" in X ? X.q : 0), "V" in X) {
                if (X.V < 1 || X.V > 53) return null;
                "w" in X || (X.w = 1), "Z" in X ? (O = bs(Pn(X.y, 0, 1)), G = O.getUTCDay(), O = G > 4 || G === 0 ? Aa.ceil(O) : Aa(O), O = Eo.offset(O, (X.V - 1) * 7), X.y = O.getUTCFullYear(), X.m = O.getUTCMonth(), X.d = O.getUTCDate() + (X.w + 6) % 7) : (O = ys(Pn(X.y, 0, 1)), G = O.getDay(), O = G > 4 || G === 0 ? Oa.ceil(O) : Oa(O), O = Ao.offset(O, (X.V - 1) * 7), X.y = O.getFullYear(), X.m = O.getMonth(), X.d = O.getDate() + (X.w + 6) % 7)
            } else("W" in X || "U" in X) && ("w" in X || (X.w = "u" in X ? X.u % 7 : "W" in X ? 1 : 0), G = "Z" in X ? bs(Pn(X.y, 0, 1)).getUTCDay() : ys(Pn(X.y, 0, 1)).getDay(), X.m = 0, X.d = "W" in X ? (X.w + 6) % 7 + X.W * 7 - (G + 5) % 7 : X.w + X.U * 7 - (G + 6) % 7);
            return "Z" in X ? (X.H += X.Z / 100 | 0, X.M += X.Z % 100, bs(X)) : ys(X)
        }
    }

    function E(V, ue, ce, X) {
        for (var ge = 0, O = ue.length, G = ce.length, W, $; ge < O;) {
            if (X >= G) return -1;
            if (W = ue.charCodeAt(ge++), W === 37) {
                if (W = ue.charAt(ge++), $ = _[W in Jh ? ue.charAt(ge++) : W], !$ || (X = $(V, ce, X)) < 0) return -1
            } else if (W != ce.charCodeAt(X++)) return -1
        }
        return X
    }

    function k(V, ue, ce) {
        var X = l.exec(ue.slice(ce));
        return X ? (V.p = c.get(X[0].toLowerCase()), ce + X[0].length) : -1
    }

    function N(V, ue, ce) {
        var X = m.exec(ue.slice(ce));
        return X ? (V.w = p.get(X[0].toLowerCase()), ce + X[0].length) : -1
    }

    function I(V, ue, ce) {
        var X = f.exec(ue.slice(ce));
        return X ? (V.w = d.get(X[0].toLowerCase()), ce + X[0].length) : -1
    }

    function T(V, ue, ce) {
        var X = g.exec(ue.slice(ce));
        return X ? (V.m = x.get(X[0].toLowerCase()), ce + X[0].length) : -1
    }

    function M(V, ue, ce) {
        var X = h.exec(ue.slice(ce));
        return X ? (V.m = v.get(X[0].toLowerCase()), ce + X[0].length) : -1
    }

    function S(V, ue, ce) {
        return E(V, t, ue, ce)
    }

    function D(V, ue, ce) {
        return E(V, r, ue, ce)
    }

    function z(V, ue, ce) {
        return E(V, n, ue, ce)
    }

    function B(V) {
        return o[V.getDay()]
    }

    function q(V) {
        return a[V.getDay()]
    }

    function H(V) {
        return u[V.getMonth()]
    }

    function Q(V) {
        return s[V.getMonth()]
    }

    function F(V) {
        return i[+(V.getHours() >= 12)]
    }

    function L(V) {
        return 1 + ~~(V.getMonth() / 3)
    }

    function ae(V) {
        return o[V.getUTCDay()]
    }

    function re(V) {
        return a[V.getUTCDay()]
    }

    function ee(V) {
        return u[V.getUTCMonth()]
    }

    function ye(V) {
        return s[V.getUTCMonth()]
    }

    function $e(V) {
        return i[+(V.getUTCHours() >= 12)]
    }

    function se(V) {
        return 1 + ~~(V.getUTCMonth() / 3)
    }
    return {
        format: function(V) {
            var ue = w(V += "", y);
            return ue.toString = function() {
                return V
            }, ue
        },
        parse: function(V) {
            var ue = A(V += "", !1);
            return ue.toString = function() {
                return V
            }, ue
        },
        utcFormat: function(V) {
            var ue = w(V += "", b);
            return ue.toString = function() {
                return V
            }, ue
        },
        utcParse: function(V) {
            var ue = A(V += "", !0);
            return ue.toString = function() {
                return V
            }, ue
        }
    }
}
var Jh = {
        "-": "",
        _: " ",
        0: "0"
    },
    Ve = /^\s*\d+/,
    QN = /^%/,
    eR = /[\\^$*+?|[\]().{}]/g;

function we(e, t, r) {
    var n = e < 0 ? "-" : "",
        i = (n ? -e : e) + "",
        a = i.length;
    return n + (a < r ? new Array(r - a + 1).join(t) + i : i)
}

function tR(e) {
    return e.replace(eR, "\\$&")
}

function $n(e) {
    return new RegExp("^(?:" + e.map(tR).join("|") + ")", "i")
}

function Mn(e) {
    return new Map(e.map((t, r) => [t.toLowerCase(), r]))
}

function rR(e, t, r) {
    var n = Ve.exec(t.slice(r, r + 1));
    return n ? (e.w = +n[0], r + n[0].length) : -1
}

function nR(e, t, r) {
    var n = Ve.exec(t.slice(r, r + 1));
    return n ? (e.u = +n[0], r + n[0].length) : -1
}

function iR(e, t, r) {
    var n = Ve.exec(t.slice(r, r + 2));
    return n ? (e.U = +n[0], r + n[0].length) : -1
}

function aR(e, t, r) {
    var n = Ve.exec(t.slice(r, r + 2));
    return n ? (e.V = +n[0], r + n[0].length) : -1
}

function oR(e, t, r) {
    var n = Ve.exec(t.slice(r, r + 2));
    return n ? (e.W = +n[0], r + n[0].length) : -1
}

function Qh(e, t, r) {
    var n = Ve.exec(t.slice(r, r + 4));
    return n ? (e.y = +n[0], r + n[0].length) : -1
}

function ed(e, t, r) {
    var n = Ve.exec(t.slice(r, r + 2));
    return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1
}

function sR(e, t, r) {
    var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
    return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1
}

function uR(e, t, r) {
    var n = Ve.exec(t.slice(r, r + 1));
    return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1
}

function lR(e, t, r) {
    var n = Ve.exec(t.slice(r, r + 2));
    return n ? (e.m = n[0] - 1, r + n[0].length) : -1
}

function td(e, t, r) {
    var n = Ve.exec(t.slice(r, r + 2));
    return n ? (e.d = +n[0], r + n[0].length) : -1
}

function cR(e, t, r) {
    var n = Ve.exec(t.slice(r, r + 3));
    return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1
}

function rd(e, t, r) {
    var n = Ve.exec(t.slice(r, r + 2));
    return n ? (e.H = +n[0], r + n[0].length) : -1
}

function fR(e, t, r) {
    var n = Ve.exec(t.slice(r, r + 2));
    return n ? (e.M = +n[0], r + n[0].length) : -1
}

function hR(e, t, r) {
    var n = Ve.exec(t.slice(r, r + 2));
    return n ? (e.S = +n[0], r + n[0].length) : -1
}

function dR(e, t, r) {
    var n = Ve.exec(t.slice(r, r + 3));
    return n ? (e.L = +n[0], r + n[0].length) : -1
}

function pR(e, t, r) {
    var n = Ve.exec(t.slice(r, r + 6));
    return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1
}

function mR(e, t, r) {
    var n = QN.exec(t.slice(r, r + 1));
    return n ? r + n[0].length : -1
}

function vR(e, t, r) {
    var n = Ve.exec(t.slice(r));
    return n ? (e.Q = +n[0], r + n[0].length) : -1
}

function gR(e, t, r) {
    var n = Ve.exec(t.slice(r));
    return n ? (e.s = +n[0], r + n[0].length) : -1
}

function nd(e, t) {
    return we(e.getDate(), t, 2)
}

function yR(e, t) {
    return we(e.getHours(), t, 2)
}

function bR(e, t) {
    return we(e.getHours() % 12 || 12, t, 2)
}

function xR(e, t) {
    return we(1 + Ao.count(Pr(e), e), t, 3)
}

function ag(e, t) {
    return we(e.getMilliseconds(), t, 3)
}

function _R(e, t) {
    return ag(e, t) + "000"
}

function wR(e, t) {
    return we(e.getMonth() + 1, t, 2)
}

function SR(e, t) {
    return we(e.getMinutes(), t, 2)
}

function OR(e, t) {
    return we(e.getSeconds(), t, 2)
}

function AR(e) {
    var t = e.getDay();
    return t === 0 ? 7 : t
}

function kR(e, t) {
    return we(ko.count(Pr(e) - 1, e), t, 2)
}

function og(e) {
    var t = e.getDay();
    return t >= 4 || t === 0 ? rn(e) : rn.ceil(e)
}

function ER(e, t) {
    return e = og(e), we(rn.count(Pr(e), e) + (Pr(e).getDay() === 4), t, 2)
}

function TR(e) {
    return e.getDay()
}

function CR(e, t) {
    return we(Oa.count(Pr(e) - 1, e), t, 2)
}

function PR(e, t) {
    return we(e.getFullYear() % 100, t, 2)
}

function $R(e, t) {
    return e = og(e), we(e.getFullYear() % 100, t, 2)
}

function MR(e, t) {
    return we(e.getFullYear() % 1e4, t, 4)
}

function IR(e, t) {
    var r = e.getDay();
    return e = r >= 4 || r === 0 ? rn(e) : rn.ceil(e), we(e.getFullYear() % 1e4, t, 4)
}

function NR(e) {
    var t = e.getTimezoneOffset();
    return (t > 0 ? "-" : (t *= -1, "+")) + we(t / 60 | 0, "0", 2) + we(t % 60, "0", 2)
}

function id(e, t) {
    return we(e.getUTCDate(), t, 2)
}

function RR(e, t) {
    return we(e.getUTCHours(), t, 2)
}

function DR(e, t) {
    return we(e.getUTCHours() % 12 || 12, t, 2)
}

function LR(e, t) {
    return we(1 + Eo.count($r(e), e), t, 3)
}

function sg(e, t) {
    return we(e.getUTCMilliseconds(), t, 3)
}

function jR(e, t) {
    return sg(e, t) + "000"
}

function FR(e, t) {
    return we(e.getUTCMonth() + 1, t, 2)
}

function BR(e, t) {
    return we(e.getUTCMinutes(), t, 2)
}

function zR(e, t) {
    return we(e.getUTCSeconds(), t, 2)
}

function UR(e) {
    var t = e.getUTCDay();
    return t === 0 ? 7 : t
}

function HR(e, t) {
    return we(To.count($r(e) - 1, e), t, 2)
}

function ug(e) {
    var t = e.getUTCDay();
    return t >= 4 || t === 0 ? nn(e) : nn.ceil(e)
}

function WR(e, t) {
    return e = ug(e), we(nn.count($r(e), e) + ($r(e).getUTCDay() === 4), t, 2)
}

function GR(e) {
    return e.getUTCDay()
}

function qR(e, t) {
    return we(Aa.count($r(e) - 1, e), t, 2)
}

function VR(e, t) {
    return we(e.getUTCFullYear() % 100, t, 2)
}

function YR(e, t) {
    return e = ug(e), we(e.getUTCFullYear() % 100, t, 2)
}

function XR(e, t) {
    return we(e.getUTCFullYear() % 1e4, t, 4)
}

function KR(e, t) {
    var r = e.getUTCDay();
    return e = r >= 4 || r === 0 ? nn(e) : nn.ceil(e), we(e.getUTCFullYear() % 1e4, t, 4)
}

function ZR() {
    return "+0000"
}

function ad() {
    return "%"
}

function od(e) {
    return +e
}

function sd(e) {
    return Math.floor(+e / 1e3)
}
var Br, lg, cg;
JR({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: ["AM", "PM"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function JR(e) {
    return Br = JN(e), lg = Br.format, Br.parse, cg = Br.utcFormat, Br.utcParse, Br
}

function QR(e) {
    return new Date(e)
}

function e5(e) {
    return e instanceof Date ? +e : +new Date(+e)
}

function ic(e, t, r, n, i, a, o, s, u, l) {
    var c = Yl(),
        f = c.invert,
        d = c.domain,
        m = l(".%L"),
        p = l(":%S"),
        h = l("%I:%M"),
        v = l("%I %p"),
        g = l("%a %d"),
        x = l("%b %d"),
        y = l("%B"),
        b = l("%Y");

    function _(w) {
        return (u(w) < w ? m : s(w) < w ? p : o(w) < w ? h : a(w) < w ? v : n(w) < w ? i(w) < w ? g : x : r(w) < w ? y : b)(w)
    }
    return c.invert = function(w) {
        return new Date(f(w))
    }, c.domain = function(w) {
        return arguments.length ? d(Array.from(w, e5)) : d().map(QR)
    }, c.ticks = function(w) {
        var A = d();
        return e(A[0], A[A.length - 1], w == null ? 10 : w)
    }, c.tickFormat = function(w, A) {
        return A == null ? _ : l(A)
    }, c.nice = function(w) {
        var A = d();
        return (!w || typeof w.range != "function") && (w = t(A[0], A[A.length - 1], w == null ? 10 : w)), w ? d(Dv(A, w)) : c
    }, c.copy = function() {
        return li(c, ic(e, t, r, n, i, a, o, s, u, l))
    }, c
}

function t5() {
    return xt.apply(ic(KN, ZN, Pr, Kv, ko, Ao, Vv, Gv, Ur, lg).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments)
}

function r5() {
    return xt.apply(ic(YN, XN, $r, ng, To, Eo, eg, Jv, Ur, cg).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments)
}

function Co() {
    var e = 0,
        t = 1,
        r, n, i, a, o = rt,
        s = !1,
        u;

    function l(f) {
        return f == null || isNaN(f = +f) ? u : o(i === 0 ? .5 : (f = (a(f) - r) * i, s ? Math.max(0, Math.min(1, f)) : f))
    }
    l.domain = function(f) {
        return arguments.length ? ([e, t] = f, r = a(e = +e), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), l) : [e, t]
    }, l.clamp = function(f) {
        return arguments.length ? (s = !!f, l) : s
    }, l.interpolator = function(f) {
        return arguments.length ? (o = f, l) : o
    };

    function c(f) {
        return function(d) {
            var m, p;
            return arguments.length ? ([m, p] = d, o = f(m, p), l) : [o(0), o(1)]
        }
    }
    return l.range = c(yn), l.rangeRound = c(Vl), l.unknown = function(f) {
            return arguments.length ? (u = f, l) : u
        },
        function(f) {
            return a = f, r = f(e), n = f(t), i = r === n ? 0 : 1 / (n - r), l
        }
}

function vr(e, t) {
    return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())
}

function fg() {
    var e = mr(Co()(rt));
    return e.copy = function() {
        return vr(e, fg())
    }, Kt.apply(e, arguments)
}

function hg() {
    var e = Zl(Co()).domain([1, 10]);
    return e.copy = function() {
        return vr(e, hg()).base(e.base())
    }, Kt.apply(e, arguments)
}

function dg() {
    var e = Jl(Co());
    return e.copy = function() {
        return vr(e, dg()).constant(e.constant())
    }, Kt.apply(e, arguments)
}

function ac() {
    var e = Ql(Co());
    return e.copy = function() {
        return vr(e, ac()).exponent(e.exponent())
    }, Kt.apply(e, arguments)
}

function n5() {
    return ac.apply(null, arguments).exponent(.5)
}

function pg() {
    var e = [],
        t = rt;

    function r(n) {
        if (n != null && !isNaN(n = +n)) return t((si(e, n, 1) - 1) / (e.length - 1))
    }
    return r.domain = function(n) {
        if (!arguments.length) return e.slice();
        e = [];
        for (let i of n) i != null && !isNaN(i = +i) && e.push(i);
        return e.sort(oi), r
    }, r.interpolator = function(n) {
        return arguments.length ? (t = n, r) : t
    }, r.range = function() {
        return e.map((n, i) => t(i / (e.length - 1)))
    }, r.quantiles = function(n) {
        return Array.from({
            length: n + 1
        }, (i, a) => WI(e, a / n))
    }, r.copy = function() {
        return pg(t).domain(e)
    }, Kt.apply(r, arguments)
}

function Po() {
    var e = 0,
        t = .5,
        r = 1,
        n = 1,
        i, a, o, s, u, l = rt,
        c, f = !1,
        d;

    function m(h) {
        return isNaN(h = +h) ? d : (h = .5 + ((h = +c(h)) - a) * (n * h < n * a ? s : u), l(f ? Math.max(0, Math.min(1, h)) : h))
    }
    m.domain = function(h) {
        return arguments.length ? ([e, t, r] = h, i = c(e = +e), a = c(t = +t), o = c(r = +r), s = i === a ? 0 : .5 / (a - i), u = a === o ? 0 : .5 / (o - a), n = a < i ? -1 : 1, m) : [e, t, r]
    }, m.clamp = function(h) {
        return arguments.length ? (f = !!h, m) : f
    }, m.interpolator = function(h) {
        return arguments.length ? (l = h, m) : l
    };

    function p(h) {
        return function(v) {
            var g, x, y;
            return arguments.length ? ([g, x, y] = v, l = pN(h, [g, x, y]), m) : [l(0), l(.5), l(1)]
        }
    }
    return m.range = p(yn), m.rangeRound = p(Vl), m.unknown = function(h) {
            return arguments.length ? (d = h, m) : d
        },
        function(h) {
            return c = h, i = h(e), a = h(t), o = h(r), s = i === a ? 0 : .5 / (a - i), u = a === o ? 0 : .5 / (o - a), n = a < i ? -1 : 1, m
        }
}

function mg() {
    var e = mr(Po()(rt));
    return e.copy = function() {
        return vr(e, mg())
    }, Kt.apply(e, arguments)
}

function vg() {
    var e = Zl(Po()).domain([.1, 1, 10]);
    return e.copy = function() {
        return vr(e, vg()).base(e.base())
    }, Kt.apply(e, arguments)
}

function gg() {
    var e = Jl(Po());
    return e.copy = function() {
        return vr(e, gg()).constant(e.constant())
    }, Kt.apply(e, arguments)
}

function oc() {
    var e = Ql(Po());
    return e.copy = function() {
        return vr(e, oc()).exponent(e.exponent())
    }, Kt.apply(e, arguments)
}

function i5() {
    return oc.apply(null, arguments).exponent(.5)
}
const ud = Object.freeze(Object.defineProperty({
    __proto__: null,
    scaleBand: qn,
    scalePoint: zn,
    scaleIdentity: Rv,
    scaleLinear: wa,
    scaleLog: Lv,
    scaleSymlog: jv,
    scaleOrdinal: Wl,
    scaleImplicit: $u,
    scalePow: ec,
    scaleSqrt: LN,
    scaleRadial: Fv,
    scaleQuantile: Bv,
    scaleQuantize: zv,
    scaleThreshold: Uv,
    scaleTime: t5,
    scaleUtc: r5,
    scaleSequential: fg,
    scaleSequentialLog: hg,
    scaleSequentialPow: ac,
    scaleSequentialSqrt: n5,
    scaleSequentialSymlog: dg,
    scaleSequentialQuantile: pg,
    scaleDiverging: mg,
    scaleDivergingLog: vg,
    scaleDivergingPow: oc,
    scaleDivergingSqrt: i5,
    scaleDivergingSymlog: gg,
    tickFormat: Nv
}, Symbol.toStringTag, {
    value: "Module"
}));

function ld(e) {
    return u5(e) || s5(e) || o5(e) || a5()
}

function a5() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function o5(e, t) {
    if (!!e) {
        if (typeof e == "string") return Ru(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ru(e, t)
    }
}

function s5(e) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e)
}

function u5(e) {
    if (Array.isArray(e)) return Ru(e)
}

function Ru(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function cd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function et(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? cd(Object(r), !0).forEach(function(n) {
            Yr(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cd(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function Yr(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function Xt(e, t, r) {
    return pe(e) || pe(t) ? r : Be(t) ? He(e, t, r) : me(t) ? t(e) : r
}

function ka(e, t, r, n) {
    var i = fI(e, function(s) {
        return Xt(s, t)
    });
    if (r === "number") {
        var a = i.filter(function(s) {
            return oe(s) || parseFloat(s)
        });
        return a.length ? [_o(a), ar(a)] : [1 / 0, -1 / 0]
    }
    var o = n ? i.filter(function(s) {
        return !pe(s)
    }) : i;
    return o.map(function(s) {
        return Be(s) || s instanceof Date ? s : ""
    })
}
var l5 = function(t) {
        var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
            i = arguments.length > 2 ? arguments[2] : void 0,
            a = arguments.length > 3 ? arguments[3] : void 0,
            o = -1,
            s = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
        if (s > 1) {
            if (a && a.axisType === "angleAxis" && Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6)
                for (var u = a.range, l = 0; l < s; l++) {
                    var c = l > 0 ? i[l - 1].coordinate : i[s - 1].coordinate,
                        f = i[l].coordinate,
                        d = l >= s - 1 ? i[0].coordinate : i[l + 1].coordinate,
                        m = void 0;
                    if (Tt(f - c) !== Tt(d - f)) {
                        var p = [];
                        if (Tt(d - f) === Tt(u[1] - u[0])) {
                            m = d;
                            var h = f + u[1] - u[0];
                            p[0] = Math.min(h, (h + c) / 2), p[1] = Math.max(h, (h + c) / 2)
                        } else {
                            m = c;
                            var v = d + u[1] - u[0];
                            p[0] = Math.min(f, (v + f) / 2), p[1] = Math.max(f, (v + f) / 2)
                        }
                        var g = [Math.min(f, (m + f) / 2), Math.max(f, (m + f) / 2)];
                        if (t > g[0] && t <= g[1] || t >= p[0] && t <= p[1]) {
                            o = i[l].index;
                            break
                        }
                    } else {
                        var x = Math.min(c, d),
                            y = Math.max(c, d);
                        if (t > (x + f) / 2 && t <= (y + f) / 2) {
                            o = i[l].index;
                            break
                        }
                    }
                } else
                    for (var b = 0; b < s; b++)
                        if (b === 0 && t <= (n[b].coordinate + n[b + 1].coordinate) / 2 || b > 0 && b < s - 1 && t > (n[b].coordinate + n[b - 1].coordinate) / 2 && t <= (n[b].coordinate + n[b + 1].coordinate) / 2 || b === s - 1 && t > (n[b].coordinate + n[b - 1].coordinate) / 2) {
                            o = n[b].index;
                            break
                        }
        } else o = 0;
        return o
    },
    sc = function(t) {
        var r = t,
            n = r.type.displayName,
            i = t.props,
            a = i.stroke,
            o = i.fill,
            s;
        switch (n) {
            case "Line":
                s = a;
                break;
            case "Area":
            case "Radar":
                s = a && a !== "none" ? a : o;
                break;
            default:
                s = o;
                break
        }
        return s
    },
    yg = function(t) {
        var r = t.children,
            n = t.formattedGraphicalItems,
            i = t.legendWidth,
            a = t.legendContent,
            o = Ut(r, Un.displayName);
        if (!o) return null;
        var s;
        return o.props && o.props.payload ? s = o.props && o.props.payload : a === "children" ? s = (n || []).reduce(function(u, l) {
            var c = l.item,
                f = l.props,
                d = f.sectors || f.data || [];
            return u.concat(d.map(function(m) {
                return {
                    type: o.props.iconType || c.props.legendType,
                    value: m.name,
                    color: m.fill,
                    payload: m
                }
            }))
        }, []) : s = (n || []).map(function(u) {
            var l = u.item,
                c = l.props,
                f = c.dataKey,
                d = c.name,
                m = c.legendType,
                p = c.hide;
            return {
                inactive: p,
                dataKey: f,
                type: o.props.iconType || m || "square",
                color: sc(l),
                value: d || f,
                payload: l.props
            }
        }), et(et(et({}, o.props), Un.getWithHeight(o, i)), {}, {
            payload: s,
            item: o
        })
    },
    c5 = function(t) {
        var r = t.barSize,
            n = t.stackGroups,
            i = n === void 0 ? {} : n;
        if (!i) return {};
        for (var a = {}, o = Object.keys(i), s = 0, u = o.length; s < u; s++)
            for (var l = i[o[s]].stackGroups, c = Object.keys(l), f = 0, d = c.length; f < d; f++) {
                var m = l[c[f]],
                    p = m.items,
                    h = m.cateAxisId,
                    v = p.filter(function(y) {
                        return sr(y.type).indexOf("Bar") >= 0
                    });
                if (v && v.length) {
                    var g = v[0].props.barSize,
                        x = v[0].props[h];
                    a[x] || (a[x] = []), a[x].push({
                        item: v[0],
                        stackList: v.slice(1),
                        barSize: pe(g) ? r : g
                    })
                }
            }
        return a
    },
    f5 = function(t) {
        var r = t.barGap,
            n = t.barCategoryGap,
            i = t.bandSize,
            a = t.sizeList,
            o = a === void 0 ? [] : a,
            s = t.maxBarSize,
            u = o.length;
        if (u < 1) return null;
        var l = Jr(r, i, 0, !0),
            c;
        if (o[0].barSize === +o[0].barSize) {
            var f = !1,
                d = i / u,
                m = o.reduce(function(y, b) {
                    return y + b.barSize || 0
                }, 0);
            m += (u - 1) * l, m >= i && (m -= (u - 1) * l, l = 0), m >= i && d > 0 && (f = !0, d *= .9, m = u * d);
            var p = (i - m) / 2 >> 0,
                h = {
                    offset: p - l,
                    size: 0
                };
            c = o.reduce(function(y, b) {
                var _ = [].concat(ld(y), [{
                    item: b.item,
                    position: {
                        offset: h.offset + h.size + l,
                        size: f ? d : b.barSize
                    }
                }]);
                return h = _[_.length - 1].position, b.stackList && b.stackList.length && b.stackList.forEach(function(w) {
                    _.push({
                        item: w,
                        position: h
                    })
                }), _
            }, [])
        } else {
            var v = Jr(n, i, 0, !0);
            i - 2 * v - (u - 1) * l <= 0 && (l = 0);
            var g = (i - 2 * v - (u - 1) * l) / u;
            g > 1 && (g >>= 0);
            var x = s === +s ? Math.min(g, s) : g;
            c = o.reduce(function(y, b, _) {
                var w = [].concat(ld(y), [{
                    item: b.item,
                    position: {
                        offset: v + (g + l) * _ + (g - x) / 2,
                        size: x
                    }
                }]);
                return b.stackList && b.stackList.length && b.stackList.forEach(function(A) {
                    w.push({
                        item: A,
                        position: w[w.length - 1].position
                    })
                }), w
            }, [])
        }
        return c
    },
    h5 = function(t, r, n, i) {
        var a = n.children,
            o = n.width,
            s = n.margin,
            u = o - (s.left || 0) - (s.right || 0),
            l = yg({
                children: a,
                legendWidth: u
            }),
            c = t;
        if (l) {
            var f = i || {},
                d = l.align,
                m = l.verticalAlign,
                p = l.layout;
            (p === "vertical" || p === "horizontal" && m === "center") && oe(t[d]) && (c = et(et({}, t), {}, Yr({}, d, c[d] + (f.width || 0)))), (p === "horizontal" || p === "vertical" && d === "center") && oe(t[m]) && (c = et(et({}, t), {}, Yr({}, m, c[m] + (f.height || 0))))
        }
        return c
    },
    d5 = function(t, r, n) {
        return pe(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0
    },
    bg = function(t, r, n, i, a) {
        var o = r.props.children,
            s = qt(o, "ErrorBar").filter(function(l) {
                return d5(i, a, l.props.direction)
            });
        if (s && s.length) {
            var u = s.map(function(l) {
                return l.props.dataKey
            });
            return t.reduce(function(l, c) {
                var f = Xt(c, n, 0),
                    d = _e(f) ? [_o(f), ar(f)] : [f, f],
                    m = u.reduce(function(p, h) {
                        var v = Xt(c, h, 0),
                            g = d[0] - Math.abs(_e(v) ? v[0] : v),
                            x = d[1] + Math.abs(_e(v) ? v[1] : v);
                        return [Math.min(g, p[0]), Math.max(x, p[1])]
                    }, [1 / 0, -1 / 0]);
                return [Math.min(m[0], l[0]), Math.max(m[1], l[1])]
            }, [1 / 0, -1 / 0])
        }
        return null
    },
    p5 = function(t, r, n, i, a) {
        var o = r.map(function(s) {
            return bg(t, s, n, a, i)
        }).filter(function(s) {
            return !pe(s)
        });
        return o && o.length ? o.reduce(function(s, u) {
            return [Math.min(s[0], u[0]), Math.max(s[1], u[1])]
        }, [1 / 0, -1 / 0]) : null
    },
    xg = function(t, r, n, i, a) {
        var o = r.map(function(u) {
            var l = u.props.dataKey;
            return n === "number" && l && bg(t, u, l, i) || ka(t, l, n, a)
        });
        if (n === "number") return o.reduce(function(u, l) {
            return [Math.min(u[0], l[0]), Math.max(u[1], l[1])]
        }, [1 / 0, -1 / 0]);
        var s = {};
        return o.reduce(function(u, l) {
            for (var c = 0, f = l.length; c < f; c++) s[l[c]] || (s[l[c]] = !0, u.push(l[c]));
            return u
        }, [])
    },
    _g = function(t, r) {
        return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis"
    },
    fd = function(t, r, n) {
        var i, a, o = t.map(function(s) {
            return s.coordinate === r && (i = !0), s.coordinate === n && (a = !0), s.coordinate
        });
        return i || o.push(r), a || o.push(n), o
    },
    tr = function(t, r, n) {
        if (!t) return null;
        var i = t.scale,
            a = t.duplicateDomain,
            o = t.type,
            s = t.range,
            u = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2,
            l = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / u : 0;
        return l = t.axisType === "angleAxis" ? Tt(s[0] - s[1]) * 2 * l : l, r && (t.ticks || t.niceTicks) ? (t.ticks || t.niceTicks).map(function(c) {
            var f = a ? a.indexOf(c) : c;
            return {
                coordinate: i(f) + l,
                value: c,
                offset: l
            }
        }) : t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(c, f) {
            return {
                coordinate: i(c) + l,
                value: c,
                index: f,
                offset: l
            }
        }) : i.ticks && !n ? i.ticks(t.tickCount).map(function(c) {
            return {
                coordinate: i(c) + l,
                value: c,
                offset: l
            }
        }) : i.domain().map(function(c, f) {
            return {
                coordinate: i(c) + l,
                value: a ? a[c] : c,
                index: f,
                offset: l
            }
        })
    },
    Oi = function(t, r, n) {
        var i;
        return me(n) ? i = n : me(r) && (i = r), me(t) || i ? function(a, o, s, u) {
            me(t) && t(a, o, s, u), me(i) && i(a, o, s, u)
        } : null
    },
    m5 = function(t, r, n) {
        var i = t.scale,
            a = t.type,
            o = t.layout,
            s = t.axisType;
        if (i === "auto") return o === "radial" && s === "radiusAxis" ? {
            scale: qn(),
            realScaleType: "band"
        } : o === "radial" && s === "angleAxis" ? {
            scale: wa(),
            realScaleType: "linear"
        } : a === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
            scale: zn(),
            realScaleType: "point"
        } : a === "category" ? {
            scale: qn(),
            realScaleType: "band"
        } : {
            scale: wa(),
            realScaleType: "linear"
        };
        if (ii(i)) {
            var u = "scale".concat(ro(i));
            return {
                scale: (ud[u] || zn)(),
                realScaleType: ud[u] ? u : "point"
            }
        }
        return me(i) ? {
            scale: i
        } : {
            scale: zn(),
            realScaleType: "point"
        }
    },
    hd = 1e-4,
    v5 = function(t) {
        var r = t.domain();
        if (!(!r || r.length <= 2)) {
            var n = r.length,
                i = t.range(),
                a = Math.min(i[0], i[1]) - hd,
                o = Math.max(i[0], i[1]) + hd,
                s = t(r[0]),
                u = t(r[n - 1]);
            (s < a || s > o || u < a || u > o) && t.domain([r[0], r[n - 1]])
        }
    },
    g5 = function(t) {
        var r = t.length;
        if (!(r <= 0))
            for (var n = 0, i = t[0].length; n < i; ++n)
                for (var a = 0, o = 0, s = 0; s < r; ++s) {
                    var u = ni(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
                    u >= 0 ? (t[s][n][0] = a, t[s][n][1] = a + u, a = t[s][n][1]) : (t[s][n][0] = o, t[s][n][1] = o + u, o = t[s][n][1])
                }
    },
    y5 = function(t) {
        var r = t.length;
        if (!(r <= 0))
            for (var n = 0, i = t[0].length; n < i; ++n)
                for (var a = 0, o = 0; o < r; ++o) {
                    var s = ni(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
                    s >= 0 ? (t[o][n][0] = a, t[o][n][1] = a + s, a = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0)
                }
    },
    b5 = {
        sign: g5,
        expand: gE,
        none: Zr,
        silhouette: yE,
        wiggle: bE,
        positive: y5
    },
    x5 = function(t, r, n) {
        var i = r.map(function(o) {
                return o.props.dataKey
            }),
            a = vE().keys(i).value(function(o, s) {
                return +Xt(o, s, 0)
            }).order(Xs).offset(b5[n]);
        return a(t)
    },
    _5 = function(t, r, n, i, a, o) {
        if (!t) return null;
        var s = o ? r.reverse() : r,
            u = s.reduce(function(l, c) {
                var f = c.props,
                    d = f.stackId,
                    m = f.hide;
                if (m) return l;
                var p = c.props[n],
                    h = l[p] || {
                        hasStack: !1,
                        stackGroups: {}
                    };
                if (Be(d)) {
                    var v = h.stackGroups[d] || {
                        numericAxisId: n,
                        cateAxisId: i,
                        items: []
                    };
                    v.items.push(c), h.hasStack = !0, h.stackGroups[d] = v
                } else h.stackGroups[so("_stackId_")] = {
                    numericAxisId: n,
                    cateAxisId: i,
                    items: [c]
                };
                return et(et({}, l), {}, Yr({}, p, h))
            }, {});
        return Object.keys(u).reduce(function(l, c) {
            var f = u[c];
            return f.hasStack && (f.stackGroups = Object.keys(f.stackGroups).reduce(function(d, m) {
                var p = f.stackGroups[m];
                return et(et({}, d), {}, Yr({}, m, {
                    numericAxisId: n,
                    cateAxisId: i,
                    items: p.items,
                    stackedData: x5(t, p.items, a)
                }))
            }, {})), et(et({}, l), {}, Yr({}, c, f))
        }, {})
    },
    w5 = function(t, r) {
        return r === "number" ? [_o(t), ar(t)] : t
    },
    S5 = function(t, r) {
        var n = r.realScaleType,
            i = r.type,
            a = r.tickCount,
            o = r.originalDomain,
            s = r.allowDecimals,
            u = n || r.scale;
        if (u !== "auto" && u !== "linear") return null;
        if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
            var l = t.domain();
            if (!l.length) return null;
            var c = jI(l, a, s);
            return t.domain(w5(c, i)), {
                niceTicks: c
            }
        }
        if (a && i === "number") {
            var f = t.domain(),
                d = FI(f, a, s);
            return {
                niceTicks: d
            }
        }
        return null
    },
    dd = function(t) {
        var r = t.axis,
            n = t.ticks,
            i = t.bandSize,
            a = t.entry,
            o = t.index,
            s = t.dataKey;
        if (r.type === "category") {
            if (!r.allowDuplicatedCategory && r.dataKey && !pe(a[r.dataKey])) {
                var u = sa(n, "value", a[r.dataKey]);
                if (u) return u.coordinate + i / 2
            }
            return n[o] ? n[o].coordinate + i / 2 : null
        }
        var l = Xt(a, pe(s) ? r.dataKey : s);
        return pe(l) ? null : r.scale(l)
    },
    O5 = function(t, r) {
        var n = t.props.stackId;
        if (Be(n)) {
            var i = r[n];
            if (i && i.items.length) {
                for (var a = -1, o = 0, s = i.items.length; o < s; o++)
                    if (i.items[o] === t) {
                        a = o;
                        break
                    } return a >= 0 ? i.stackedData[a] : null
            }
        }
        return null
    },
    A5 = function(t) {
        return t.reduce(function(r, n) {
            return [_o(n.concat([r[0]]).filter(oe)), ar(n.concat([r[1]]).filter(oe))]
        }, [1 / 0, -1 / 0])
    },
    wg = function(t, r, n) {
        return Object.keys(t).reduce(function(i, a) {
            var o = t[a],
                s = o.stackedData,
                u = s.reduce(function(l, c) {
                    var f = A5(c.slice(r, n + 1));
                    return [Math.min(l[0], f[0]), Math.max(l[1], f[1])]
                }, [1 / 0, -1 / 0]);
            return [Math.min(u[0], i[0]), Math.max(u[1], i[1])]
        }, [1 / 0, -1 / 0]).map(function(i) {
            return i === 1 / 0 || i === -1 / 0 ? 0 : i
        })
    },
    pd = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
    md = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
    Sg = function(t, r, n) {
        if (me(t)) return t(r, n);
        if (!_e(t)) return r;
        var i = [];
        if (oe(t[0])) i[0] = n ? t[0] : Math.min(t[0], r[0]);
        else if (pd.test(t[0])) {
            var a = +pd.exec(t[0])[1];
            i[0] = r[0] - a
        } else me(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
        if (oe(t[1])) i[1] = n ? t[1] : Math.max(t[1], r[1]);
        else if (md.test(t[1])) {
            var o = +md.exec(t[1])[1];
            i[1] = r[1] + o
        } else me(t[1]) ? i[1] = t[1](r[1]) : i[1] = r[1];
        return i
    },
    Ea = function(t, r, n) {
        if (t && t.scale && t.scale.bandwidth) {
            var i = t.scale.bandwidth();
            if (!n || i > 0) return i
        }
        if (t && r && r.length >= 2) {
            for (var a = Nl(r, function(f) {
                    return f.coordinate
                }), o = 1 / 0, s = 1, u = a.length; s < u; s++) {
                var l = a[s],
                    c = a[s - 1];
                o = Math.min((l.coordinate || 0) - (c.coordinate || 0), o)
            }
            return o === 1 / 0 ? 0 : o
        }
        return n ? void 0 : 0
    },
    vd = function(t, r, n) {
        return !t || !t.length || xu(t, He(n, "type.defaultProps.domain")) ? r : t
    },
    k5 = function(t, r) {
        var n = t.props,
            i = n.dataKey,
            a = n.name,
            o = n.unit,
            s = n.formatter,
            u = n.tooltipType,
            l = n.chartType;
        return et(et({}, Ae(t)), {}, {
            dataKey: i,
            unit: o,
            formatter: s,
            name: a || i,
            color: sc(t),
            value: Xt(r, i),
            type: u,
            payload: r,
            chartType: l
        })
    };

function gd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function yd(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? gd(Object(r), !0).forEach(function(n) {
            E5(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gd(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function E5(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}
var Ta = Math.PI / 180,
    T5 = function(t) {
        return t * 180 / Math.PI
    },
    Ke = function(t, r, n, i) {
        return {
            x: t + Math.cos(-Ta * i) * n,
            y: r + Math.sin(-Ta * i) * n
        }
    },
    C5 = function(t, r) {
        var n = t.x,
            i = t.y,
            a = r.x,
            o = r.y;
        return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2))
    },
    P5 = function(t, r) {
        var n = t.x,
            i = t.y,
            a = r.cx,
            o = r.cy,
            s = C5({
                x: n,
                y: i
            }, {
                x: a,
                y: o
            });
        if (s <= 0) return {
            radius: s
        };
        var u = (n - a) / s,
            l = Math.acos(u);
        return i > o && (l = 2 * Math.PI - l), {
            radius: s,
            angle: T5(l),
            angleInRadian: l
        }
    },
    $5 = function(t) {
        var r = t.startAngle,
            n = t.endAngle,
            i = Math.floor(r / 360),
            a = Math.floor(n / 360),
            o = Math.min(i, a);
        return {
            startAngle: r - o * 360,
            endAngle: n - o * 360
        }
    },
    M5 = function(t, r) {
        var n = r.startAngle,
            i = r.endAngle,
            a = Math.floor(n / 360),
            o = Math.floor(i / 360),
            s = Math.min(a, o);
        return t + s * 360
    },
    bd = function(t, r) {
        var n = t.x,
            i = t.y,
            a = P5({
                x: n,
                y: i
            }, r),
            o = a.radius,
            s = a.angle,
            u = r.innerRadius,
            l = r.outerRadius;
        if (o < u || o > l) return !1;
        if (o === 0) return !0;
        var c = $5(r),
            f = c.startAngle,
            d = c.endAngle,
            m = s,
            p;
        if (f <= d) {
            for (; m > d;) m -= 360;
            for (; m < f;) m += 360;
            p = m >= f && m <= d
        } else {
            for (; m > f;) m -= 360;
            for (; m < d;) m += 360;
            p = m >= d && m <= f
        }
        return p ? yd(yd({}, r), {}, {
            radius: o,
            angle: M5(m, r)
        }) : null
    };

function I5(e) {
    return L5(e) || D5(e) || R5(e) || N5()
}

function N5() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function R5(e, t) {
    if (!!e) {
        if (typeof e == "string") return Du(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Du(e, t)
    }
}

function D5(e) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e)
}

function L5(e) {
    if (Array.isArray(e)) return Du(e)
}

function Du(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function xd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function ze(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? xd(Object(r), !0).forEach(function(n) {
            j5(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xd(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function j5(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}
var F5 = function(t) {
        var r = t.value,
            n = t.formatter,
            i = pe(t.children) ? r : t.children;
        return me(n) ? n(i) : i
    },
    B5 = function(t, r) {
        var n = Tt(r - t),
            i = Math.min(Math.abs(r - t), 360);
        return n * i
    },
    z5 = function(t, r, n) {
        var i = t.position,
            a = t.viewBox,
            o = t.offset,
            s = t.className,
            u = a,
            l = u.cx,
            c = u.cy,
            f = u.innerRadius,
            d = u.outerRadius,
            m = u.startAngle,
            p = u.endAngle,
            h = u.clockWise,
            v = (f + d) / 2,
            g = B5(m, p),
            x = g >= 0 ? 1 : -1,
            y, b;
        i === "insideStart" ? (y = m + x * o, b = h) : i === "insideEnd" ? (y = p - x * o, b = !h) : i === "end" && (y = p + x * o, b = h), b = g <= 0 ? b : !b;
        var _ = Ke(l, c, v, y),
            w = Ke(l, c, v, y + (b ? 1 : -1) * 359),
            A = "M".concat(_.x, ",").concat(_.y, `
    A`).concat(v, ",").concat(v, ",0,1,").concat(b ? 0 : 1, `,
    `).concat(w.x, ",").concat(w.y),
            E = pe(t.id) ? so("recharts-radial-line-") : t.id;
        return te("text", {
            ...n,
            dominantBaseline: "central",
            className: Ne("recharts-radial-bar-label", s),
            children: [C("defs", {
                children: C("path", {
                    id: E,
                    d: A
                })
            }), C("textPath", {
                xlinkHref: "#".concat(E),
                children: r
            })]
        })
    },
    U5 = function(t) {
        var r = t.viewBox,
            n = t.offset,
            i = t.position,
            a = r,
            o = a.cx,
            s = a.cy,
            u = a.innerRadius,
            l = a.outerRadius,
            c = a.startAngle,
            f = a.endAngle,
            d = (c + f) / 2;
        if (i === "outside") {
            var m = Ke(o, s, l + n, d),
                p = m.x,
                h = m.y;
            return {
                x: p,
                y: h,
                textAnchor: p >= o ? "start" : "end",
                verticalAnchor: "middle"
            }
        }
        if (i === "center") return {
            x: o,
            y: s,
            textAnchor: "middle",
            verticalAnchor: "middle"
        };
        if (i === "centerTop") return {
            x: o,
            y: s,
            textAnchor: "middle",
            verticalAnchor: "start"
        };
        if (i === "centerBottom") return {
            x: o,
            y: s,
            textAnchor: "middle",
            verticalAnchor: "end"
        };
        var v = (u + l) / 2,
            g = Ke(o, s, v, d),
            x = g.x,
            y = g.y;
        return {
            x,
            y,
            textAnchor: "middle",
            verticalAnchor: "middle"
        }
    },
    H5 = function(t) {
        var r = t.viewBox,
            n = t.parentViewBox,
            i = t.offset,
            a = t.position,
            o = r,
            s = o.x,
            u = o.y,
            l = o.width,
            c = o.height,
            f = c >= 0 ? 1 : -1,
            d = f * i,
            m = f > 0 ? "end" : "start",
            p = f > 0 ? "start" : "end",
            h = l >= 0 ? 1 : -1,
            v = h * i,
            g = h > 0 ? "end" : "start",
            x = h > 0 ? "start" : "end";
        if (a === "top") {
            var y = {
                x: s + l / 2,
                y: u - f * i,
                textAnchor: "middle",
                verticalAnchor: m
            };
            return ze(ze({}, y), n ? {
                height: Math.max(u - n.y, 0),
                width: l
            } : {})
        }
        if (a === "bottom") {
            var b = {
                x: s + l / 2,
                y: u + c + d,
                textAnchor: "middle",
                verticalAnchor: p
            };
            return ze(ze({}, b), n ? {
                height: Math.max(n.y + n.height - (u + c), 0),
                width: l
            } : {})
        }
        if (a === "left") {
            var _ = {
                x: s - v,
                y: u + c / 2,
                textAnchor: g,
                verticalAnchor: "middle"
            };
            return ze(ze({}, _), n ? {
                width: Math.max(_.x - n.x, 0),
                height: c
            } : {})
        }
        if (a === "right") {
            var w = {
                x: s + l + v,
                y: u + c / 2,
                textAnchor: x,
                verticalAnchor: "middle"
            };
            return ze(ze({}, w), n ? {
                width: Math.max(n.x + n.width - w.x, 0),
                height: c
            } : {})
        }
        var A = n ? {
            width: l,
            height: c
        } : {};
        return a === "insideLeft" ? ze({
            x: s + v,
            y: u + c / 2,
            textAnchor: x,
            verticalAnchor: "middle"
        }, A) : a === "insideRight" ? ze({
            x: s + l - v,
            y: u + c / 2,
            textAnchor: g,
            verticalAnchor: "middle"
        }, A) : a === "insideTop" ? ze({
            x: s + l / 2,
            y: u + d,
            textAnchor: "middle",
            verticalAnchor: p
        }, A) : a === "insideBottom" ? ze({
            x: s + l / 2,
            y: u + c - d,
            textAnchor: "middle",
            verticalAnchor: m
        }, A) : a === "insideTopLeft" ? ze({
            x: s + v,
            y: u + d,
            textAnchor: x,
            verticalAnchor: p
        }, A) : a === "insideTopRight" ? ze({
            x: s + l - v,
            y: u + d,
            textAnchor: g,
            verticalAnchor: p
        }, A) : a === "insideBottomLeft" ? ze({
            x: s + v,
            y: u + c - d,
            textAnchor: x,
            verticalAnchor: m
        }, A) : a === "insideBottomRight" ? ze({
            x: s + l - v,
            y: u + c - d,
            textAnchor: g,
            verticalAnchor: m
        }, A) : lt(a) && (oe(a.x) || Sr(a.x)) && (oe(a.y) || Sr(a.y)) ? ze({
            x: s + Jr(a.x, l),
            y: u + Jr(a.y, c),
            textAnchor: "end",
            verticalAnchor: "end"
        }, A) : ze({
            x: s + l / 2,
            y: u + c / 2,
            textAnchor: "middle",
            verticalAnchor: "middle"
        }, A)
    },
    W5 = function(t) {
        return oe(t.cx)
    };

function Xe(e) {
    var t = e.viewBox,
        r = e.position,
        n = e.value,
        i = e.children,
        a = e.content,
        o = e.className,
        s = o === void 0 ? "" : o,
        u = e.textBreakAll;
    if (!t || pe(n) && pe(i) && !R.exports.isValidElement(a) && !me(a)) return null;
    if (R.exports.isValidElement(a)) return R.exports.cloneElement(a, e);
    var l;
    if (me(a)) {
        if (l = R.exports.createElement(a, e), R.exports.isValidElement(l)) return l
    } else l = F5(e);
    var c = W5(t),
        f = Ae(e, !0);
    if (c && (r === "insideStart" || r === "insideEnd" || r === "end")) return z5(e, l, f);
    var d = c ? U5(e) : H5(e);
    return C(Hn, {
        className: Ne("recharts-label", s),
        ...f,
        ...d,
        breakAll: u,
        children: l
    })
}
Xe.displayName = "Label";
Xe.defaultProps = {
    offset: 5
};
var Og = function(t) {
        var r = t.cx,
            n = t.cy,
            i = t.angle,
            a = t.startAngle,
            o = t.endAngle,
            s = t.r,
            u = t.radius,
            l = t.innerRadius,
            c = t.outerRadius,
            f = t.x,
            d = t.y,
            m = t.top,
            p = t.left,
            h = t.width,
            v = t.height,
            g = t.clockWise,
            x = t.labelViewBox;
        if (x) return x;
        if (oe(h) && oe(v)) {
            if (oe(f) && oe(d)) return {
                x: f,
                y: d,
                width: h,
                height: v
            };
            if (oe(m) && oe(p)) return {
                x: m,
                y: p,
                width: h,
                height: v
            }
        }
        return oe(f) && oe(d) ? {
            x: f,
            y: d,
            width: 0,
            height: 0
        } : oe(r) && oe(n) ? {
            cx: r,
            cy: n,
            startAngle: a || i || 0,
            endAngle: o || i || 0,
            innerRadius: l || 0,
            outerRadius: c || u || s || 0,
            clockWise: g
        } : t.viewBox ? t.viewBox : {}
    },
    G5 = function(t, r) {
        return t ? t === !0 ? C(Xe, {
            viewBox: r
        }, "label-implicit") : Be(t) ? C(Xe, {
            viewBox: r,
            value: t
        }, "label-implicit") : R.exports.isValidElement(t) ? t.type === Xe ? R.exports.cloneElement(t, {
            key: "label-implicit",
            viewBox: r
        }) : C(Xe, {
            content: t,
            viewBox: r
        }, "label-implicit") : me(t) ? C(Xe, {
            content: t,
            viewBox: r
        }, "label-implicit") : lt(t) ? R.exports.createElement(Xe, {
            viewBox: r,
            ...t,
            key: "label-implicit"
        }) : null : null
    },
    q5 = function(t, r) {
        var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
        if (!t || !t.children && n && !t.label) return null;
        var i = t.children,
            a = Og(t),
            o = qt(i, Xe.displayName).map(function(u, l) {
                return R.exports.cloneElement(u, {
                    viewBox: r || a,
                    key: "label-".concat(l)
                })
            });
        if (!n) return o;
        var s = G5(t.label, r || a);
        return [s].concat(I5(o))
    };
Xe.parseViewBox = Og;
Xe.renderCallByParent = q5;

function V5(e) {
    var t = e == null ? 0 : e.length;
    return t ? e[t - 1] : void 0
}
var Y5 = V5;

function X5(e) {
    return Q5(e) || J5(e) || Z5(e) || K5()
}

function K5() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function Z5(e, t) {
    if (!!e) {
        if (typeof e == "string") return Lu(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Lu(e, t)
    }
}

function J5(e) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e)
}

function Q5(e) {
    if (Array.isArray(e)) return Lu(e)
}

function Lu(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function _d(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function wd(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? _d(Object(r), !0).forEach(function(n) {
            e4(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _d(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function e4(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function t4(e, t) {
    if (e == null) return {};
    var r = r4(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]))
    }
    return r
}

function r4(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i, a;
    for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r
}
var n4 = {
    valueAccessor: function(t) {
        return _e(t.value) ? Y5(t.value) : t.value
    }
};

function ur(e) {
    var t = e.data,
        r = e.valueAccessor,
        n = e.dataKey,
        i = e.clockWise,
        a = e.id,
        o = e.textBreakAll,
        s = t4(e, ["data", "valueAccessor", "dataKey", "clockWise", "id", "textBreakAll"]);
    return !t || !t.length ? null : C(tt, {
        className: "recharts-label-list",
        children: t.map(function(u, l) {
            var c = pe(n) ? r(u, l) : Xt(u && u.payload, n),
                f = pe(a) ? {} : {
                    id: "".concat(a, "-").concat(l)
                };
            return R.exports.createElement(Xe, {
                ...Ae(u, !0),
                ...s,
                ...f,
                parentViewBox: u.parentViewBox,
                index: l,
                value: c,
                textBreakAll: o,
                viewBox: Xe.parseViewBox(pe(i) ? u : wd(wd({}, u), {}, {
                    clockWise: i
                })),
                key: "label-".concat(l)
            })
        })
    })
}
ur.displayName = "LabelList";

function i4(e, t) {
    return e ? e === !0 ? C(ur, {
        data: t
    }, "labelList-implicit") : ve.isValidElement(e) || me(e) ? C(ur, {
        data: t,
        content: e
    }, "labelList-implicit") : lt(e) ? R.exports.createElement(ur, {
        data: t,
        ...e,
        key: "labelList-implicit"
    }) : null : null
}

function a4(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    if (!e || !e.children && r && !e.label) return null;
    var n = e.children,
        i = qt(n, ur.displayName).map(function(o, s) {
            return R.exports.cloneElement(o, {
                data: t,
                key: "labelList-".concat(s)
            })
        });
    if (!r) return i;
    var a = i4(e.label, t);
    return [a].concat(X5(i))
}
ur.renderCallByParent = a4;
ur.defaultProps = n4;

function Di(e) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Di = function(r) {
        return typeof r
    } : Di = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
    }, Di(e)
}

function o4(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Sd(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function s4(e, t, r) {
    return t && Sd(e.prototype, t), r && Sd(e, r), e
}

function u4(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && ju(e, t)
}

function ju(e, t) {
    return ju = Object.setPrototypeOf || function(n, i) {
        return n.__proto__ = i, n
    }, ju(e, t)
}

function l4(e) {
    var t = h4();
    return function() {
        var n = Ca(e),
            i;
        if (t) {
            var a = Ca(this).constructor;
            i = Reflect.construct(n, arguments, a)
        } else i = n.apply(this, arguments);
        return c4(this, i)
    }
}

function c4(e, t) {
    return t && (Di(t) === "object" || typeof t == "function") ? t : f4(e)
}

function f4(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function h4() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Ca(e) {
    return Ca = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, Ca(e)
}
var d4 = function(t, r) {
        var n = Tt(r - t),
            i = Math.min(Math.abs(r - t), 359.999);
        return n * i
    },
    Ai = function(t) {
        var r = t.cx,
            n = t.cy,
            i = t.radius,
            a = t.angle,
            o = t.sign,
            s = t.isExternal,
            u = t.cornerRadius,
            l = t.cornerIsExternal,
            c = u * (s ? 1 : -1) + i,
            f = Math.asin(u / c) / Ta,
            d = l ? a : a + o * f,
            m = Ke(r, n, c, d),
            p = Ke(r, n, i, d),
            h = l ? a - o * f : a,
            v = Ke(r, n, c * Math.cos(f * Ta), h);
        return {
            center: m,
            circleTangency: p,
            lineTangency: v,
            theta: f
        }
    },
    Ag = function(t) {
        var r = t.cx,
            n = t.cy,
            i = t.innerRadius,
            a = t.outerRadius,
            o = t.startAngle,
            s = t.endAngle,
            u = d4(o, s),
            l = o + u,
            c = Ke(r, n, a, o),
            f = Ke(r, n, a, l),
            d = "M ".concat(c.x, ",").concat(c.y, `
    A `).concat(a, ",").concat(a, `,0,
    `).concat(+(Math.abs(u) > 180), ",").concat(+(o > l), `,
    `).concat(f.x, ",").concat(f.y, `
  `);
        if (i > 0) {
            var m = Ke(r, n, i, o),
                p = Ke(r, n, i, l);
            d += "L ".concat(p.x, ",").concat(p.y, `
            A `).concat(i, ",").concat(i, `,0,
            `).concat(+(Math.abs(u) > 180), ",").concat(+(o <= l), `,
            `).concat(m.x, ",").concat(m.y, " Z")
        } else d += "L ".concat(r, ",").concat(n, " Z");
        return d
    },
    p4 = function(t) {
        var r = t.cx,
            n = t.cy,
            i = t.innerRadius,
            a = t.outerRadius,
            o = t.cornerRadius,
            s = t.forceCornerRadius,
            u = t.cornerIsExternal,
            l = t.startAngle,
            c = t.endAngle,
            f = Tt(c - l),
            d = Ai({
                cx: r,
                cy: n,
                radius: a,
                angle: l,
                sign: f,
                cornerRadius: o,
                cornerIsExternal: u
            }),
            m = d.circleTangency,
            p = d.lineTangency,
            h = d.theta,
            v = Ai({
                cx: r,
                cy: n,
                radius: a,
                angle: c,
                sign: -f,
                cornerRadius: o,
                cornerIsExternal: u
            }),
            g = v.circleTangency,
            x = v.lineTangency,
            y = v.theta,
            b = u ? Math.abs(l - c) : Math.abs(l - c) - h - y;
        if (b < 0) return s ? "M ".concat(p.x, ",").concat(p.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : Ag({
            cx: r,
            cy: n,
            innerRadius: i,
            outerRadius: a,
            startAngle: l,
            endAngle: c
        });
        var _ = "M ".concat(p.x, ",").concat(p.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(m.x, ",").concat(m.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(b > 180), ",").concat(+(f < 0), ",").concat(g.x, ",").concat(g.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(x.x, ",").concat(x.y, `
  `);
        if (i > 0) {
            var w = Ai({
                    cx: r,
                    cy: n,
                    radius: i,
                    angle: l,
                    sign: f,
                    isExternal: !0,
                    cornerRadius: o,
                    cornerIsExternal: u
                }),
                A = w.circleTangency,
                E = w.lineTangency,
                k = w.theta,
                N = Ai({
                    cx: r,
                    cy: n,
                    radius: i,
                    angle: c,
                    sign: -f,
                    isExternal: !0,
                    cornerRadius: o,
                    cornerIsExternal: u
                }),
                I = N.circleTangency,
                T = N.lineTangency,
                M = N.theta,
                S = u ? Math.abs(l - c) : Math.abs(l - c) - k - M;
            if (S < 0 && o === 0) return "".concat(_, "L").concat(r, ",").concat(n, "Z");
            _ += "L".concat(T.x, ",").concat(T.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(I.x, ",").concat(I.y, `
      A`).concat(i, ",").concat(i, ",0,").concat(+(S > 180), ",").concat(+(f > 0), ",").concat(A.x, ",").concat(A.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(E.x, ",").concat(E.y, "Z")
        } else _ += "L".concat(r, ",").concat(n, "Z");
        return _
    },
    kg = function(e) {
        u4(r, e);
        var t = l4(r);

        function r() {
            return o4(this, r), t.apply(this, arguments)
        }
        return s4(r, [{
            key: "render",
            value: function() {
                var i = this.props,
                    a = i.cx,
                    o = i.cy,
                    s = i.innerRadius,
                    u = i.outerRadius,
                    l = i.cornerRadius,
                    c = i.forceCornerRadius,
                    f = i.cornerIsExternal,
                    d = i.startAngle,
                    m = i.endAngle,
                    p = i.className;
                if (u < s || d === m) return null;
                var h = Ne("recharts-sector", p),
                    v = u - s,
                    g = Jr(l, v, 0, !0),
                    x;
                return g > 0 && Math.abs(d - m) < 360 ? x = p4({
                    cx: a,
                    cy: o,
                    innerRadius: s,
                    outerRadius: u,
                    cornerRadius: Math.min(g, v / 2),
                    forceCornerRadius: c,
                    cornerIsExternal: f,
                    startAngle: d,
                    endAngle: m
                }) : x = Ag({
                    cx: a,
                    cy: o,
                    innerRadius: s,
                    outerRadius: u,
                    startAngle: d,
                    endAngle: m
                }), C("path", {
                    ...Ae(this.props, !0),
                    className: h,
                    d: x
                })
            }
        }]), r
    }(R.exports.PureComponent);
kg.defaultProps = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: !1,
    cornerIsExternal: !1
};

function Li(e) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Li = function(r) {
        return typeof r
    } : Li = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
    }, Li(e)
}

function Od(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Ad(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Od(Object(r), !0).forEach(function(n) {
            m4(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Od(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function m4(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function v4(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function kd(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function g4(e, t, r) {
    return t && kd(e.prototype, t), r && kd(e, r), e
}

function y4(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && Fu(e, t)
}

function Fu(e, t) {
    return Fu = Object.setPrototypeOf || function(n, i) {
        return n.__proto__ = i, n
    }, Fu(e, t)
}

function b4(e) {
    var t = w4();
    return function() {
        var n = Pa(e),
            i;
        if (t) {
            var a = Pa(this).constructor;
            i = Reflect.construct(n, arguments, a)
        } else i = n.apply(this, arguments);
        return x4(this, i)
    }
}

function x4(e, t) {
    return t && (Li(t) === "object" || typeof t == "function") ? t : _4(e)
}

function _4(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function w4() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Pa(e) {
    return Pa = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, Pa(e)
}
var Ed = {
        curveBasisClosed: aE,
        curveBasisOpen: oE,
        curveBasis: iE,
        curveLinearClosed: sE,
        curveLinear: ao,
        curveMonotoneX: uE,
        curveMonotoneY: lE,
        curveNatural: cE,
        curveStep: fE,
        curveStepAfter: dE,
        curveStepBefore: hE
    },
    ki = function(t) {
        return t.x === +t.x && t.y === +t.y
    },
    In = function(t) {
        return t.x
    },
    Nn = function(t) {
        return t.y
    },
    S4 = function(t, r) {
        if (me(t)) return t;
        var n = "curve".concat(ro(t));
        return n === "curveMonotone" && r ? Ed["".concat(n).concat(r === "vertical" ? "Y" : "X")] : Ed[n] || ao
    },
    Xr = function(e) {
        y4(r, e);
        var t = b4(r);

        function r() {
            return v4(this, r), t.apply(this, arguments)
        }
        return g4(r, [{
            key: "getPath",
            value: function() {
                var i = this.props,
                    a = i.type,
                    o = i.points,
                    s = i.baseLine,
                    u = i.layout,
                    l = i.connectNulls,
                    c = S4(a, u),
                    f = l ? o.filter(function(h) {
                        return ki(h)
                    }) : o,
                    d;
                if (_e(s)) {
                    var m = l ? s.filter(function(h) {
                            return ki(h)
                        }) : s,
                        p = f.map(function(h, v) {
                            return Ad(Ad({}, h), {}, {
                                base: m[v]
                            })
                        });
                    return u === "vertical" ? d = yi().y(Nn).x1(In).x0(function(h) {
                        return h.base.x
                    }) : d = yi().x(In).y1(Nn).y0(function(h) {
                        return h.base.y
                    }), d.defined(ki).curve(c), d(p)
                }
                return u === "vertical" && oe(s) ? d = yi().y(Nn).x1(In).x0(s) : oe(s) ? d = yi().x(In).y1(Nn).y0(s) : d = Cm().x(In).y(Nn), d.defined(ki).curve(c), d(f)
            }
        }, {
            key: "render",
            value: function() {
                var i = this.props,
                    a = i.className,
                    o = i.points,
                    s = i.path,
                    u = i.pathRef;
                if ((!o || !o.length) && !s) return null;
                var l = o && o.length ? this.getPath() : s;
                return C("path", {
                    ...Ae(this.props),
                    ...Zi(this.props),
                    className: Ne("recharts-curve", a),
                    d: l,
                    ref: u
                })
            }
        }]), r
    }(R.exports.PureComponent);
Xr.defaultProps = {
    type: "linear",
    points: [],
    connectNulls: !1
};

function ji(e) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ji = function(r) {
        return typeof r
    } : ji = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
    }, ji(e)
}

function O4(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Td(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function A4(e, t, r) {
    return t && Td(e.prototype, t), r && Td(e, r), e
}

function k4(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && Bu(e, t)
}

function Bu(e, t) {
    return Bu = Object.setPrototypeOf || function(n, i) {
        return n.__proto__ = i, n
    }, Bu(e, t)
}

function E4(e) {
    var t = P4();
    return function() {
        var n = $a(e),
            i;
        if (t) {
            var a = $a(this).constructor;
            i = Reflect.construct(n, arguments, a)
        } else i = n.apply(this, arguments);
        return T4(this, i)
    }
}

function T4(e, t) {
    return t && (ji(t) === "object" || typeof t == "function") ? t : C4(e)
}

function C4(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function P4() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function $a(e) {
    return $a = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, $a(e)
}
var Cd = function(t, r, n, i, a) {
        var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2),
            s = i >= 0 ? 1 : -1,
            u = n >= 0 ? 1 : -1,
            l = i >= 0 && n >= 0 || i < 0 && n < 0 ? 1 : 0,
            c;
        if (o > 0 && a instanceof Array) {
            for (var f = [0, 0, 0, 0], d = 0, m = 4; d < m; d++) f[d] = a[d] > o ? o : a[d];
            c = "M".concat(t, ",").concat(r + s * f[0]), f[0] > 0 && (c += "A ".concat(f[0], ",").concat(f[0], ",0,0,").concat(l, ",").concat(t + u * f[0], ",").concat(r)), c += "L ".concat(t + n - u * f[1], ",").concat(r), f[1] > 0 && (c += "A ".concat(f[1], ",").concat(f[1], ",0,0,").concat(l, `,
        `).concat(t + n, ",").concat(r + s * f[1])), c += "L ".concat(t + n, ",").concat(r + i - s * f[2]), f[2] > 0 && (c += "A ".concat(f[2], ",").concat(f[2], ",0,0,").concat(l, `,
        `).concat(t + n - u * f[2], ",").concat(r + i)), c += "L ".concat(t + u * f[3], ",").concat(r + i), f[3] > 0 && (c += "A ".concat(f[3], ",").concat(f[3], ",0,0,").concat(l, `,
        `).concat(t, ",").concat(r + i - s * f[3])), c += "Z"
        } else if (o > 0 && a === +a && a > 0) {
            var p = Math.min(o, a);
            c = "M ".concat(t, ",").concat(r + s * p, `
            A `).concat(p, ",").concat(p, ",0,0,").concat(l, ",").concat(t + u * p, ",").concat(r, `
            L `).concat(t + n - u * p, ",").concat(r, `
            A `).concat(p, ",").concat(p, ",0,0,").concat(l, ",").concat(t + n, ",").concat(r + s * p, `
            L `).concat(t + n, ",").concat(r + i - s * p, `
            A `).concat(p, ",").concat(p, ",0,0,").concat(l, ",").concat(t + n - u * p, ",").concat(r + i, `
            L `).concat(t + u * p, ",").concat(r + i, `
            A `).concat(p, ",").concat(p, ",0,0,").concat(l, ",").concat(t, ",").concat(r + i - s * p, " Z")
        } else c = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(i, " h ").concat(-n, " Z");
        return c
    },
    $4 = function(t, r) {
        if (!t || !r) return !1;
        var n = t.x,
            i = t.y,
            a = r.x,
            o = r.y,
            s = r.width,
            u = r.height;
        if (Math.abs(s) > 0 && Math.abs(u) > 0) {
            var l = Math.min(a, a + s),
                c = Math.max(a, a + s),
                f = Math.min(o, o + u),
                d = Math.max(o, o + u);
            return n >= l && n <= c && i >= f && i <= d
        }
        return !1
    },
    uc = function(e) {
        k4(r, e);
        var t = E4(r);

        function r() {
            var n;
            O4(this, r);
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
            return n = t.call.apply(t, [this].concat(a)), n.state = {
                totalLength: -1
            }, n.node = void 0, n
        }
        return A4(r, [{
            key: "componentDidMount",
            value: function() {
                if (this.node && this.node.getTotalLength) try {
                    var i = this.node.getTotalLength();
                    i && this.setState({
                        totalLength: i
                    })
                } catch {}
            }
        }, {
            key: "render",
            value: function() {
                var i = this,
                    a = this.props,
                    o = a.x,
                    s = a.y,
                    u = a.width,
                    l = a.height,
                    c = a.radius,
                    f = a.className,
                    d = this.state.totalLength,
                    m = this.props,
                    p = m.animationEasing,
                    h = m.animationDuration,
                    v = m.animationBegin,
                    g = m.isAnimationActive,
                    x = m.isUpdateAnimationActive;
                if (o !== +o || s !== +s || u !== +u || l !== +l || u === 0 || l === 0) return null;
                var y = Ne("recharts-rectangle", f);
                return x ? C(en, {
                    canBegin: d > 0,
                    from: {
                        width: u,
                        height: l,
                        x: o,
                        y: s
                    },
                    to: {
                        width: u,
                        height: l,
                        x: o,
                        y: s
                    },
                    duration: h,
                    animationEasing: p,
                    isActive: x,
                    children: function(b) {
                        var _ = b.width,
                            w = b.height,
                            A = b.x,
                            E = b.y;
                        return C(en, {
                            canBegin: d > 0,
                            from: "0px ".concat(d === -1 ? 1 : d, "px"),
                            to: "".concat(d, "px 0px"),
                            attributeName: "strokeDasharray",
                            begin: v,
                            duration: h,
                            isActive: g,
                            easing: p,
                            children: C("path", {
                                ...Ae(i.props, !0),
                                className: y,
                                d: Cd(A, E, _, w, c),
                                ref: function(N) {
                                    i.node = N
                                }
                            })
                        })
                    }
                }) : C("path", {
                    ...Ae(this.props, !0),
                    className: y,
                    d: Cd(o, s, u, l, c)
                })
            }
        }]), r
    }(R.exports.PureComponent);
uc.defaultProps = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    radius: 0,
    isAnimationActive: !1,
    isUpdateAnimationActive: !1,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease"
};

function Fi(e) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Fi = function(r) {
        return typeof r
    } : Fi = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
    }, Fi(e)
}

function M4(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Pd(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function I4(e, t, r) {
    return t && Pd(e.prototype, t), r && Pd(e, r), e
}

function N4(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && zu(e, t)
}

function zu(e, t) {
    return zu = Object.setPrototypeOf || function(n, i) {
        return n.__proto__ = i, n
    }, zu(e, t)
}

function R4(e) {
    var t = j4();
    return function() {
        var n = Ma(e),
            i;
        if (t) {
            var a = Ma(this).constructor;
            i = Reflect.construct(n, arguments, a)
        } else i = n.apply(this, arguments);
        return D4(this, i)
    }
}

function D4(e, t) {
    return t && (Fi(t) === "object" || typeof t == "function") ? t : L4(e)
}

function L4(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function j4() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Ma(e) {
    return Ma = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, Ma(e)
}
var lc = function(e) {
    N4(r, e);
    var t = R4(r);

    function r() {
        return M4(this, r), t.apply(this, arguments)
    }
    return I4(r, [{
        key: "render",
        value: function() {
            var i = this.props,
                a = i.cx,
                o = i.cy,
                s = i.r,
                u = i.className,
                l = Ne("recharts-dot", u);
            return a === +a && o === +o && s === +s ? C("circle", {
                ...Ae(this.props),
                ...Zi(this.props),
                className: l,
                cx: a,
                cy: o,
                r: s
            }) : null
        }
    }]), r
}(R.exports.PureComponent);

function Bi(e) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Bi = function(r) {
        return typeof r
    } : Bi = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
    }, Bi(e)
}

function F4(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function $d(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function B4(e, t, r) {
    return t && $d(e.prototype, t), r && $d(e, r), e
}

function z4(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && Uu(e, t)
}

function Uu(e, t) {
    return Uu = Object.setPrototypeOf || function(n, i) {
        return n.__proto__ = i, n
    }, Uu(e, t)
}

function U4(e) {
    var t = G4();
    return function() {
        var n = Ia(e),
            i;
        if (t) {
            var a = Ia(this).constructor;
            i = Reflect.construct(n, arguments, a)
        } else i = n.apply(this, arguments);
        return H4(this, i)
    }
}

function H4(e, t) {
    return t && (Bi(t) === "object" || typeof t == "function") ? t : W4(e)
}

function W4(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function G4() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Ia(e) {
    return Ia = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, Ia(e)
}
var Eg = function(e) {
    z4(r, e);
    var t = U4(r);

    function r() {
        return F4(this, r), t.apply(this, arguments)
    }
    return B4(r, [{
        key: "render",
        value: function() {
            var i = this.props,
                a = i.x,
                o = i.y,
                s = i.width,
                u = i.height,
                l = i.top,
                c = i.left,
                f = i.className;
            return !oe(a) || !oe(o) || !oe(s) || !oe(u) || !oe(l) || !oe(c) ? null : C("path", {
                ...Ae(this.props, !0),
                className: Ne("recharts-cross", f),
                d: r.getPath(a, o, s, u, l, c)
            })
        }
    }], [{
        key: "getPath",
        value: function(i, a, o, s, u, l) {
            return "M".concat(i, ",").concat(u, "v").concat(s, "M").concat(l, ",").concat(a, "h").concat(o)
        }
    }]), r
}(R.exports.PureComponent);
Eg.defaultProps = {
    x: 0,
    y: 0,
    top: 0,
    left: 0,
    width: 0,
    height: 0
};
var q4 = Math.ceil,
    V4 = Math.max;

function Y4(e, t, r, n) {
    for (var i = -1, a = V4(q4((t - e) / (r || 1)), 0), o = Array(a); a--;) o[n ? a : ++i] = e, e += r;
    return o
}
var X4 = Y4,
    K4 = Zm,
    Md = 1 / 0,
    Z4 = 17976931348623157e292;

function J4(e) {
    if (!e) return e === 0 ? e : 0;
    if (e = K4(e), e === Md || e === -Md) {
        var t = e < 0 ? -1 : 1;
        return t * Z4
    }
    return e === e ? e : 0
}
var Tg = J4,
    Q4 = X4,
    e6 = lo,
    xs = Tg;

function t6(e) {
    return function(t, r, n) {
        return n && typeof n != "number" && e6(t, r, n) && (r = n = void 0), t = xs(t), r === void 0 ? (r = t, t = 0) : r = xs(r), n = n === void 0 ? t < r ? 1 : -1 : xs(n), Q4(t, r, n, e)
    }
}
var r6 = t6,
    n6 = r6,
    i6 = n6(),
    Na = i6;

function Id(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Nd(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Id(Object(r), !0).forEach(function(n) {
            Cg(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Id(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function Cg(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}
var a6 = ["Webkit", "Moz", "O", "ms"],
    o6 = function(t, r) {
        if (!t) return null;
        var n = t.replace(/(\w)/, function(a) {
                return a.toUpperCase()
            }),
            i = a6.reduce(function(a, o) {
                return Nd(Nd({}, a), {}, Cg({}, o + n, r))
            }, {});
        return i[t] = r, i
    };

function zi(e) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? zi = function(r) {
        return typeof r
    } : zi = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
    }, zi(e)
}

function Rd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function _s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Rd(Object(r), !0).forEach(function(n) {
            Hu(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rd(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function Hu(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function s6(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Dd(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function u6(e, t, r) {
    return t && Dd(e.prototype, t), r && Dd(e, r), e
}

function l6(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && Wu(e, t)
}

function Wu(e, t) {
    return Wu = Object.setPrototypeOf || function(n, i) {
        return n.__proto__ = i, n
    }, Wu(e, t)
}

function c6(e) {
    var t = h6();
    return function() {
        var n = Ra(e),
            i;
        if (t) {
            var a = Ra(this).constructor;
            i = Reflect.construct(n, arguments, a)
        } else i = n.apply(this, arguments);
        return f6(this, i)
    }
}

function f6(e, t) {
    return t && (zi(t) === "object" || typeof t == "function") ? t : Gu(e)
}

function Gu(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function h6() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Ra(e) {
    return Ra = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, Ra(e)
}
var d6 = function(t) {
        var r = t.data,
            n = t.startIndex,
            i = t.endIndex,
            a = t.x,
            o = t.width,
            s = t.travellerWidth;
        if (!r || !r.length) return {};
        var u = r.length,
            l = zn().domain(Na(0, u)).range([a, a + o - s]),
            c = l.domain().map(function(f) {
                return l(f)
            });
        return {
            isTextActive: !1,
            isSlideMoving: !1,
            isTravellerMoving: !1,
            startX: l(n),
            endX: l(i),
            scale: l,
            scaleValues: c
        }
    },
    Ld = function(t) {
        return t.changedTouches && !!t.changedTouches.length
    },
    Kn = function(e) {
        l6(r, e);
        var t = c6(r);

        function r(n) {
            var i;
            return s6(this, r), i = t.call(this, n), i.leaveTimer = void 0, i.travellerDragStartHandlers = void 0, i.handleDrag = function(a) {
                i.leaveTimer && (clearTimeout(i.leaveTimer), i.leaveTimer = null), i.state.isTravellerMoving ? i.handleTravellerMove(a) : i.state.isSlideMoving && i.handleSlideDrag(a)
            }, i.handleTouchMove = function(a) {
                a.changedTouches != null && a.changedTouches.length > 0 && i.handleDrag(a.changedTouches[0])
            }, i.handleDragEnd = function() {
                i.setState({
                    isTravellerMoving: !1,
                    isSlideMoving: !1
                }), i.detachDragEndListener()
            }, i.handleLeaveWrapper = function() {
                (i.state.isTravellerMoving || i.state.isSlideMoving) && (i.leaveTimer = window.setTimeout(i.handleDragEnd, i.props.leaveTimeOut))
            }, i.handleEnterSlideOrTraveller = function() {
                i.setState({
                    isTextActive: !0
                })
            }, i.handleLeaveSlideOrTraveller = function() {
                i.setState({
                    isTextActive: !1
                })
            }, i.handleSlideDragStart = function(a) {
                var o = Ld(a) ? a.changedTouches[0] : a;
                i.setState({
                    isTravellerMoving: !1,
                    isSlideMoving: !0,
                    slideMoveStartX: o.pageX
                }), i.attachDragEndListener()
            }, i.travellerDragStartHandlers = {
                startX: i.handleTravellerDragStart.bind(Gu(i), "startX"),
                endX: i.handleTravellerDragStart.bind(Gu(i), "endX")
            }, i.state = {}, i
        }
        return u6(r, [{
            key: "componentWillUnmount",
            value: function() {
                this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener()
            }
        }, {
            key: "getIndex",
            value: function(i) {
                var a = i.startX,
                    o = i.endX,
                    s = this.state.scaleValues,
                    u = this.props,
                    l = u.gap,
                    c = u.data,
                    f = c.length - 1,
                    d = Math.min(a, o),
                    m = Math.max(a, o),
                    p = r.getIndexInRange(s, d),
                    h = r.getIndexInRange(s, m);
                return {
                    startIndex: p - p % l,
                    endIndex: h === f ? f : h - h % l
                }
            }
        }, {
            key: "getTextOfTick",
            value: function(i) {
                var a = this.props,
                    o = a.data,
                    s = a.tickFormatter,
                    u = a.dataKey,
                    l = Xt(o[i], u, i);
                return me(s) ? s(l, i) : l
            }
        }, {
            key: "attachDragEndListener",
            value: function() {
                window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0)
            }
        }, {
            key: "detachDragEndListener",
            value: function() {
                window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0)
            }
        }, {
            key: "handleSlideDrag",
            value: function(i) {
                var a = this.state,
                    o = a.slideMoveStartX,
                    s = a.startX,
                    u = a.endX,
                    l = this.props,
                    c = l.x,
                    f = l.width,
                    d = l.travellerWidth,
                    m = l.startIndex,
                    p = l.endIndex,
                    h = l.onChange,
                    v = i.pageX - o;
                v > 0 ? v = Math.min(v, c + f - d - u, c + f - d - s) : v < 0 && (v = Math.max(v, c - s, c - u));
                var g = this.getIndex({
                    startX: s + v,
                    endX: u + v
                });
                (g.startIndex !== m || g.endIndex !== p) && h && h(g), this.setState({
                    startX: s + v,
                    endX: u + v,
                    slideMoveStartX: i.pageX
                })
            }
        }, {
            key: "handleTravellerDragStart",
            value: function(i, a) {
                var o = Ld(a) ? a.changedTouches[0] : a;
                this.setState({
                    isSlideMoving: !1,
                    isTravellerMoving: !0,
                    movingTravellerId: i,
                    brushMoveStartX: o.pageX
                }), this.attachDragEndListener()
            }
        }, {
            key: "handleTravellerMove",
            value: function(i) {
                var a, o = this.state,
                    s = o.brushMoveStartX,
                    u = o.movingTravellerId,
                    l = o.endX,
                    c = o.startX,
                    f = this.state[u],
                    d = this.props,
                    m = d.x,
                    p = d.width,
                    h = d.travellerWidth,
                    v = d.onChange,
                    g = d.gap,
                    x = d.data,
                    y = {
                        startX: this.state.startX,
                        endX: this.state.endX
                    },
                    b = i.pageX - s;
                b > 0 ? b = Math.min(b, m + p - h - f) : b < 0 && (b = Math.max(b, m - f)), y[u] = f + b;
                var _ = this.getIndex(y),
                    w = _.startIndex,
                    A = _.endIndex,
                    E = function() {
                        var N = x.length - 1;
                        return u === "startX" && (l > c ? w % g === 0 : A % g === 0) || l < c && A === N || u === "endX" && (l > c ? A % g === 0 : w % g === 0) || l > c && A === N
                    };
                this.setState((a = {}, Hu(a, u, f + b), Hu(a, "brushMoveStartX", i.pageX), a), function() {
                    v && E() && v(_)
                })
            }
        }, {
            key: "renderBackground",
            value: function() {
                var i = this.props,
                    a = i.x,
                    o = i.y,
                    s = i.width,
                    u = i.height,
                    l = i.fill,
                    c = i.stroke;
                return C("rect", {
                    stroke: c,
                    fill: l,
                    x: a,
                    y: o,
                    width: s,
                    height: u
                })
            }
        }, {
            key: "renderPanorama",
            value: function() {
                var i = this.props,
                    a = i.x,
                    o = i.y,
                    s = i.width,
                    u = i.height,
                    l = i.data,
                    c = i.children,
                    f = i.padding,
                    d = R.exports.Children.only(c);
                return d ? ve.cloneElement(d, {
                    x: a,
                    y: o,
                    width: s,
                    height: u,
                    margin: f,
                    compact: !0,
                    data: l
                }) : null
            }
        }, {
            key: "renderTravellerLayer",
            value: function(i, a) {
                var o = this.props,
                    s = o.y,
                    u = o.travellerWidth,
                    l = o.height,
                    c = o.traveller,
                    f = Math.max(i, this.props.x),
                    d = _s(_s({}, Ae(this.props)), {}, {
                        x: f,
                        y: s,
                        width: u,
                        height: l
                    });
                return C(tt, {
                    className: "recharts-brush-traveller",
                    onMouseEnter: this.handleEnterSlideOrTraveller,
                    onMouseLeave: this.handleLeaveSlideOrTraveller,
                    onMouseDown: this.travellerDragStartHandlers[a],
                    onTouchStart: this.travellerDragStartHandlers[a],
                    style: {
                        cursor: "col-resize"
                    },
                    children: r.renderTraveller(c, d)
                })
            }
        }, {
            key: "renderSlide",
            value: function(i, a) {
                var o = this.props,
                    s = o.y,
                    u = o.height,
                    l = o.stroke,
                    c = o.travellerWidth,
                    f = Math.min(i, a) + c,
                    d = Math.max(Math.abs(a - i) - c, 0);
                return C("rect", {
                    className: "recharts-brush-slide",
                    onMouseEnter: this.handleEnterSlideOrTraveller,
                    onMouseLeave: this.handleLeaveSlideOrTraveller,
                    onMouseDown: this.handleSlideDragStart,
                    onTouchStart: this.handleSlideDragStart,
                    style: {
                        cursor: "move"
                    },
                    stroke: "none",
                    fill: l,
                    fillOpacity: .2,
                    x: f,
                    y: s,
                    width: d,
                    height: u
                })
            }
        }, {
            key: "renderText",
            value: function() {
                var i = this.props,
                    a = i.startIndex,
                    o = i.endIndex,
                    s = i.y,
                    u = i.height,
                    l = i.travellerWidth,
                    c = i.stroke,
                    f = this.state,
                    d = f.startX,
                    m = f.endX,
                    p = 5,
                    h = {
                        pointerEvents: "none",
                        fill: c
                    };
                return te(tt, {
                    className: "recharts-brush-texts",
                    children: [C(Hn, {
                        textAnchor: "end",
                        verticalAnchor: "middle",
                        x: Math.min(d, m) - p,
                        y: s + u / 2,
                        ...h,
                        children: this.getTextOfTick(a)
                    }), C(Hn, {
                        textAnchor: "start",
                        verticalAnchor: "middle",
                        x: Math.max(d, m) + l + p,
                        y: s + u / 2,
                        ...h,
                        children: this.getTextOfTick(o)
                    })]
                })
            }
        }, {
            key: "render",
            value: function() {
                var i = this.props,
                    a = i.data,
                    o = i.className,
                    s = i.children,
                    u = i.x,
                    l = i.y,
                    c = i.width,
                    f = i.height,
                    d = i.alwaysShowText,
                    m = this.state,
                    p = m.startX,
                    h = m.endX,
                    v = m.isTextActive,
                    g = m.isSlideMoving,
                    x = m.isTravellerMoving;
                if (!a || !a.length || !oe(u) || !oe(l) || !oe(c) || !oe(f) || c <= 0 || f <= 0) return null;
                var y = Ne("recharts-brush", o),
                    b = ve.Children.count(s) === 1,
                    _ = o6("userSelect", "none");
                return te(tt, {
                    className: y,
                    onMouseMove: this.handleDrag,
                    onMouseLeave: this.handleLeaveWrapper,
                    onTouchMove: this.handleTouchMove,
                    style: _,
                    children: [this.renderBackground(), b && this.renderPanorama(), this.renderSlide(p, h), this.renderTravellerLayer(p, "startX"), this.renderTravellerLayer(h, "endX"), (v || g || x || d) && this.renderText()]
                })
            }
        }], [{
            key: "renderDefaultTraveller",
            value: function(i) {
                var a = i.x,
                    o = i.y,
                    s = i.width,
                    u = i.height,
                    l = i.stroke,
                    c = Math.floor(o + u / 2) - 1;
                return te(sn, {
                    children: [C("rect", {
                        x: a,
                        y: o,
                        width: s,
                        height: u,
                        fill: l,
                        stroke: "none"
                    }), C("line", {
                        x1: a + 1,
                        y1: c,
                        x2: a + s - 1,
                        y2: c,
                        fill: "none",
                        stroke: "#fff"
                    }), C("line", {
                        x1: a + 1,
                        y1: c + 2,
                        x2: a + s - 1,
                        y2: c + 2,
                        fill: "none",
                        stroke: "#fff"
                    })]
                })
            }
        }, {
            key: "renderTraveller",
            value: function(i, a) {
                var o;
                return ve.isValidElement(i) ? o = ve.cloneElement(i, a) : me(i) ? o = i(a) : o = r.renderDefaultTraveller(a), o
            }
        }, {
            key: "getDerivedStateFromProps",
            value: function(i, a) {
                var o = i.data,
                    s = i.width,
                    u = i.x,
                    l = i.travellerWidth,
                    c = i.updateId,
                    f = i.startIndex,
                    d = i.endIndex;
                if (o !== a.prevData || c !== a.prevUpdateId) return _s({
                    prevData: o,
                    prevTravellerWidth: l,
                    prevUpdateId: c,
                    prevX: u,
                    prevWidth: s
                }, o && o.length ? d6({
                    data: o,
                    width: s,
                    x: u,
                    travellerWidth: l,
                    startIndex: f,
                    endIndex: d
                }) : {
                    scale: null,
                    scaleValues: null
                });
                if (a.scale && (s !== a.prevWidth || u !== a.prevX || l !== a.prevTravellerWidth)) {
                    a.scale.range([u, u + s - l]);
                    var m = a.scale.domain().map(function(p) {
                        return a.scale(p)
                    });
                    return {
                        prevData: o,
                        prevTravellerWidth: l,
                        prevUpdateId: c,
                        prevX: u,
                        prevWidth: s,
                        startX: a.scale(i.startIndex),
                        endX: a.scale(i.endIndex),
                        scaleValues: m
                    }
                }
                return null
            }
        }, {
            key: "getIndexInRange",
            value: function(i, a) {
                for (var o = i.length, s = 0, u = o - 1; u - s > 1;) {
                    var l = Math.floor((s + u) / 2);
                    i[l] > a ? u = l : s = l
                }
                return a >= i[u] ? u : s
            }
        }]), r
    }(R.exports.PureComponent);
Kn.displayName = "Brush";
Kn.defaultProps = {
    height: 40,
    travellerWidth: 5,
    gap: 1,
    fill: "#fff",
    stroke: "#666",
    padding: {
        top: 1,
        right: 1,
        bottom: 1,
        left: 1
    },
    leaveTimeOut: 1e3,
    alwaysShowText: !1
};
var p6 = Il;

function m6(e, t) {
    var r;
    return p6(e, function(n, i, a) {
        return r = t(n, i, a), !r
    }), !!r
}
var v6 = m6,
    g6 = rm,
    y6 = pr,
    b6 = v6,
    x6 = _e,
    _6 = lo;

function w6(e, t, r) {
    var n = x6(e) ? g6 : b6;
    return r && _6(e, t, r) && (t = void 0), n(e, y6(t))
}
var S6 = w6,
    Mt = function(t, r) {
        var n = t.alwaysShow,
            i = t.ifOverflow;
        return n && (i = "extendDomain"), i === r
    };

function O6(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
        if (!t(e[r], r, e)) return !1;
    return !0
}
var A6 = O6,
    k6 = Il;

function E6(e, t) {
    var r = !0;
    return k6(e, function(n, i, a) {
        return r = !!t(n, i, a), r
    }), r
}
var T6 = E6,
    C6 = A6,
    P6 = T6,
    $6 = pr,
    M6 = _e,
    I6 = lo;

function N6(e, t, r) {
    var n = M6(e) ? C6 : P6;
    return r && I6(e, t, r) && (t = void 0), n(e, $6(t))
}
var Pg = N6,
    jd = Km;

function R6(e, t, r) {
    t == "__proto__" && jd ? jd(e, t, {
        configurable: !0,
        enumerable: !0,
        value: r,
        writable: !0
    }) : e[t] = r
}
var D6 = R6,
    L6 = D6,
    j6 = Ym,
    F6 = pr;

function B6(e, t) {
    var r = {};
    return t = F6(t), j6(e, function(n, i, a) {
        L6(r, i, t(n, i, a))
    }), r
}
var z6 = B6;

function U6(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Fd(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function H6(e, t, r) {
    return t && Fd(e.prototype, t), r && Fd(e, r), e
}

function Bd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function wt(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Bd(Object(r), !0).forEach(function(n) {
            cc(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bd(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function cc(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}
var W6 = function(t, r, n, i, a) {
        var o = t.width,
            s = t.height,
            u = t.layout,
            l = t.children,
            c = Object.keys(r),
            f = {
                left: n.left,
                leftMirror: n.left,
                right: o - n.right,
                rightMirror: o - n.right,
                top: n.top,
                topMirror: n.top,
                bottom: s - n.bottom,
                bottomMirror: s - n.bottom
            },
            d = !!Ut(l, "Bar");
        return c.reduce(function(m, p) {
            var h = r[p],
                v = h.orientation,
                g = h.domain,
                x = h.padding,
                y = x === void 0 ? {} : x,
                b = h.mirror,
                _ = h.reversed,
                w = "".concat(v).concat(b ? "Mirror" : ""),
                A, E, k, N, I;
            if (h.type === "number" && (h.padding === "gap" || h.padding === "no-gap")) {
                var T = g[1] - g[0],
                    M = 1 / 0,
                    S = h.categoricalDomain.sort();
                S.forEach(function(re, ee) {
                    ee > 0 && (M = Math.min((re || 0) - (S[ee - 1] || 0), M))
                });
                var D = M / T,
                    z = h.layout === "vertical" ? n.height : n.width;
                if (h.padding === "gap" && (A = D * z / 2), h.padding === "no-gap") {
                    var B = Jr(t.barCategoryGap, D * z),
                        q = D * z / 2;
                    A = q - B - (q - B) / z * B
                }
            }
            i === "xAxis" ? E = [n.left + (y.left || 0) + (A || 0), n.left + n.width - (y.right || 0) - (A || 0)] : i === "yAxis" ? E = u === "horizontal" ? [n.top + n.height - (y.bottom || 0), n.top + (y.top || 0)] : [n.top + (y.top || 0) + (A || 0), n.top + n.height - (y.bottom || 0) - (A || 0)] : E = h.range, _ && (E = [E[1], E[0]]);
            var H = m5(h, a, d),
                Q = H.scale,
                F = H.realScaleType;
            Q.domain(g).range(E), v5(Q);
            var L = S5(Q, wt(wt({}, h), {}, {
                realScaleType: F
            }));
            i === "xAxis" ? (I = v === "top" && !b || v === "bottom" && b, k = n.left, N = f[w] - I * h.height) : i === "yAxis" && (I = v === "left" && !b || v === "right" && b, k = f[w] - I * h.width, N = n.top);
            var ae = wt(wt(wt({}, h), L), {}, {
                realScaleType: F,
                x: k,
                y: N,
                scale: Q,
                width: i === "xAxis" ? n.width : h.width,
                height: i === "yAxis" ? n.height : h.height
            });
            return ae.bandSize = Ea(ae, L), !h.hide && i === "xAxis" ? f[w] += (I ? -1 : 1) * ae.height : h.hide || (f[w] += (I ? -1 : 1) * ae.width), wt(wt({}, m), {}, cc({}, p, ae))
        }, {})
    },
    $g = function(t, r) {
        var n = t.x,
            i = t.y,
            a = r.x,
            o = r.y;
        return {
            x: Math.min(n, a),
            y: Math.min(i, o),
            width: Math.abs(a - n),
            height: Math.abs(o - i)
        }
    },
    G6 = function(t) {
        var r = t.x1,
            n = t.y1,
            i = t.x2,
            a = t.y2;
        return $g({
            x: r,
            y: n
        }, {
            x: i,
            y: a
        })
    },
    Mg = function() {
        function e(t) {
            U6(this, e), this.scale = void 0, this.scale = t
        }
        return H6(e, [{
            key: "domain",
            get: function() {
                return this.scale.domain
            }
        }, {
            key: "range",
            get: function() {
                return this.scale.range
            }
        }, {
            key: "rangeMin",
            get: function() {
                return this.range()[0]
            }
        }, {
            key: "rangeMax",
            get: function() {
                return this.range()[1]
            }
        }, {
            key: "bandwidth",
            get: function() {
                return this.scale.bandwidth
            }
        }, {
            key: "apply",
            value: function(r) {
                var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                    i = n.bandAware,
                    a = n.position;
                if (r !== void 0) {
                    if (a) switch (a) {
                        case "start":
                            return this.scale(r);
                        case "middle": {
                            var o = this.bandwidth ? this.bandwidth() / 2 : 0;
                            return this.scale(r) + o
                        }
                        case "end": {
                            var s = this.bandwidth ? this.bandwidth() : 0;
                            return this.scale(r) + s
                        }
                        default:
                            return this.scale(r)
                    }
                    if (i) {
                        var u = this.bandwidth ? this.bandwidth() / 2 : 0;
                        return this.scale(r) + u
                    }
                    return this.scale(r)
                }
            }
        }, {
            key: "isInRange",
            value: function(r) {
                var n = this.range(),
                    i = n[0],
                    a = n[n.length - 1];
                return i <= a ? r >= i && r <= a : r >= a && r <= i
            }
        }], [{
            key: "create",
            value: function(r) {
                return new e(r)
            }
        }]), e
    }();
Mg.EPS = 1e-4;
var fc = function(t) {
    var r = Object.keys(t).reduce(function(n, i) {
        return wt(wt({}, n), {}, cc({}, i, Mg.create(t[i])))
    }, {});
    return wt(wt({}, r), {}, {
        apply: function(i) {
            var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                o = a.bandAware,
                s = a.position;
            return z6(i, function(u, l) {
                return r[l].apply(u, {
                    bandAware: o,
                    position: s
                })
            })
        },
        isInRange: function(i) {
            return Pg(i, function(a, o) {
                return r[o].isInRange(a)
            })
        }
    })
};

function zd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Ud(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? zd(Object(r), !0).forEach(function(n) {
            q6(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zd(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function q6(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function V6(e, t) {
    return Z6(e) || K6(e, t) || X6(e, t) || Y6()
}

function Y6() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function X6(e, t) {
    if (!!e) {
        if (typeof e == "string") return Hd(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Hd(e, t)
    }
}

function Hd(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function K6(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
        var r = [],
            n = !0,
            i = !1,
            a = void 0;
        try {
            for (var o = e[Symbol.iterator](), s; !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t)); n = !0);
        } catch (u) {
            i = !0, a = u
        } finally {
            try {
                !n && o.return != null && o.return()
            } finally {
                if (i) throw a
            }
        }
        return r
    }
}

function Z6(e) {
    if (Array.isArray(e)) return e
}
var J6 = function(t, r) {
        var n;
        return ve.isValidElement(t) ? n = ve.cloneElement(t, r) : me(t) ? n = t(r) : n = C("line", {
            ...r,
            className: "recharts-reference-line-line"
        }), n
    },
    Q6 = function(t, r, n, i, a) {
        var o = a.viewBox,
            s = o.x,
            u = o.y,
            l = o.width,
            c = o.height,
            f = a.position;
        if (n) {
            var d = a.y,
                m = a.yAxis.orientation,
                p = t.y.apply(d, {
                    position: f
                });
            if (Mt(a, "discard") && !t.y.isInRange(p)) return null;
            var h = [{
                x: s + l,
                y: p
            }, {
                x: s,
                y: p
            }];
            return m === "left" ? h.reverse() : h
        }
        if (r) {
            var v = a.x,
                g = a.xAxis.orientation,
                x = t.x.apply(v, {
                    position: f
                });
            if (Mt(a, "discard") && !t.x.isInRange(x)) return null;
            var y = [{
                x,
                y: u + c
            }, {
                x,
                y: u
            }];
            return g === "top" ? y.reverse() : y
        }
        if (i) {
            var b = a.segment,
                _ = b.map(function(w) {
                    return t.apply(w, {
                        position: f
                    })
                });
            return Mt(a, "discard") && S6(_, function(w) {
                return !t.isInRange(w)
            }) ? null : _
        }
        return null
    };

function hc(e) {
    var t = e.x,
        r = e.y,
        n = e.segment,
        i = e.xAxis,
        a = e.yAxis,
        o = e.shape,
        s = e.className,
        u = e.alwaysShow,
        l = e.clipPathId;
    Gr(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
    var c = fc({
            x: i.scale,
            y: a.scale
        }),
        f = Be(t),
        d = Be(r),
        m = n && n.length === 2,
        p = Q6(c, f, d, m, e);
    if (!p) return null;
    var h = V6(p, 2),
        v = h[0],
        g = v.x,
        x = v.y,
        y = h[1],
        b = y.x,
        _ = y.y,
        w = Mt(e, "hidden") ? "url(#".concat(l, ")") : void 0,
        A = Ud(Ud({
            clipPath: w
        }, Ae(e, !0)), {}, {
            x1: g,
            y1: x,
            x2: b,
            y2: _
        });
    return te(tt, {
        className: Ne("recharts-reference-line", s),
        children: [J6(o, A), Xe.renderCallByParent(e, G6({
            x1: g,
            y1: x,
            x2: b,
            y2: _
        }))]
    })
}
hc.displayName = "ReferenceLine";
hc.defaultProps = {
    isFront: !1,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    fill: "none",
    stroke: "#ccc",
    fillOpacity: 1,
    strokeWidth: 1,
    position: "middle"
};

function Wd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Gd(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Wd(Object(r), !0).forEach(function(n) {
            eD(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wd(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function eD(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}
var tD = function(t) {
    var r = t.x,
        n = t.y,
        i = t.xAxis,
        a = t.yAxis,
        o = fc({
            x: i.scale,
            y: a.scale
        }),
        s = o.apply({
            x: r,
            y: n
        }, {
            bandAware: !0
        });
    return Mt(t, "discard") && !o.isInRange(s) ? null : s
};

function ci(e) {
    var t = e.x,
        r = e.y,
        n = e.r,
        i = e.alwaysShow,
        a = e.clipPathId,
        o = Be(t),
        s = Be(r);
    if (Gr(i === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !o || !s) return null;
    var u = tD(e);
    if (!u) return null;
    var l = u.x,
        c = u.y,
        f = e.shape,
        d = e.className,
        m = Mt(e, "hidden") ? "url(#".concat(a, ")") : void 0,
        p = Gd(Gd({
            clipPath: m
        }, Ae(e, !0)), {}, {
            cx: l,
            cy: c
        });
    return te(tt, {
        className: Ne("recharts-reference-dot", d),
        children: [ci.renderDot(f, p), Xe.renderCallByParent(e, {
            x: l - n,
            y: c - n,
            width: 2 * n,
            height: 2 * n
        })]
    })
}
ci.displayName = "ReferenceDot";
ci.defaultProps = {
    isFront: !1,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: "#fff",
    stroke: "#ccc",
    fillOpacity: 1,
    strokeWidth: 1
};
ci.renderDot = function(e, t) {
    var r;
    return ve.isValidElement(e) ? r = ve.cloneElement(e, t) : me(e) ? r = e(t) : r = C(lc, {
        ...t,
        cx: t.cx,
        cy: t.cy,
        className: "recharts-reference-dot-dot"
    }), r
};

function qd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Vd(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? qd(Object(r), !0).forEach(function(n) {
            rD(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qd(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function rD(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}
var nD = function(t, r, n, i, a) {
    var o = a.x1,
        s = a.x2,
        u = a.y1,
        l = a.y2,
        c = a.xAxis,
        f = a.yAxis;
    if (!c || !f) return null;
    var d = fc({
            x: c.scale,
            y: f.scale
        }),
        m = {
            x: t ? d.x.apply(o, {
                position: "start"
            }) : d.x.rangeMin,
            y: n ? d.y.apply(u, {
                position: "start"
            }) : d.y.rangeMin
        },
        p = {
            x: r ? d.x.apply(s, {
                position: "end"
            }) : d.x.rangeMax,
            y: i ? d.y.apply(l, {
                position: "end"
            }) : d.y.rangeMax
        };
    return Mt(a, "discard") && (!d.isInRange(m) || !d.isInRange(p)) ? null : $g(m, p)
};

function fi(e) {
    var t = e.x1,
        r = e.x2,
        n = e.y1,
        i = e.y2,
        a = e.className,
        o = e.alwaysShow,
        s = e.clipPathId;
    Gr(o === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
    var u = Be(t),
        l = Be(r),
        c = Be(n),
        f = Be(i),
        d = e.shape;
    if (!u && !l && !c && !f && !d) return null;
    var m = nD(u, l, c, f, e);
    if (!m && !d) return null;
    var p = Mt(e, "hidden") ? "url(#".concat(s, ")") : void 0;
    return te(tt, {
        className: Ne("recharts-reference-area", a),
        children: [fi.renderRect(d, Vd(Vd({
            clipPath: p
        }, Ae(e, !0)), m)), Xe.renderCallByParent(e, m)]
    })
}
fi.displayName = "ReferenceArea";
fi.defaultProps = {
    isFront: !1,
    ifOverflow: "discard",
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: "#ccc",
    fillOpacity: .5,
    stroke: "none",
    strokeWidth: 1
};
fi.renderRect = function(e, t) {
    var r;
    return ve.isValidElement(e) ? r = ve.cloneElement(e, t) : me(e) ? r = e(t) : r = C(uc, {
        ...t,
        className: "recharts-reference-area-rect"
    }), r
};

function Ui(e) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ui = function(r) {
        return typeof r
    } : Ui = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
    }, Ui(e)
}

function Yd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Se(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Yd(Object(r), !0).forEach(function(n) {
            iD(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yd(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function iD(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function ws(e, t) {
    if (e == null) return {};
    var r = aD(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]))
    }
    return r
}

function aD(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i, a;
    for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r
}

function oD(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Xd(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function sD(e, t, r) {
    return t && Xd(e.prototype, t), r && Xd(e, r), e
}

function uD(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && qu(e, t)
}

function qu(e, t) {
    return qu = Object.setPrototypeOf || function(n, i) {
        return n.__proto__ = i, n
    }, qu(e, t)
}

function lD(e) {
    var t = hD();
    return function() {
        var n = Da(e),
            i;
        if (t) {
            var a = Da(this).constructor;
            i = Reflect.construct(n, arguments, a)
        } else i = n.apply(this, arguments);
        return cD(this, i)
    }
}

function cD(e, t) {
    return t && (Ui(t) === "object" || typeof t == "function") ? t : fD(e)
}

function fD(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function hD() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function Da(e) {
    return Da = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, Da(e)
}
var wr = function(e) {
    uD(r, e);
    var t = lD(r);

    function r(n) {
        var i;
        return oD(this, r), i = t.call(this, n), i.layerReference = void 0, i.state = {
            fontSize: "",
            letterSpacing: ""
        }, i
    }
    return sD(r, [{
        key: "shouldComponentUpdate",
        value: function(i, a) {
            var o = i.viewBox,
                s = ws(i, ["viewBox"]),
                u = this.props,
                l = u.viewBox,
                c = ws(u, ["viewBox"]);
            return !qr(o, l) || !qr(s, c) || !qr(a, this.state)
        }
    }, {
        key: "componentDidMount",
        value: function() {
            var i = this.layerReference;
            if (!!i) {
                var a = i.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
                a && this.setState({
                    fontSize: window.getComputedStyle(a).fontSize,
                    letterSpacing: window.getComputedStyle(a).letterSpacing
                })
            }
        }
    }, {
        key: "getTickLineCoord",
        value: function(i) {
            var a = this.props,
                o = a.x,
                s = a.y,
                u = a.width,
                l = a.height,
                c = a.orientation,
                f = a.tickSize,
                d = a.mirror,
                m = a.tickMargin,
                p, h, v, g, x, y, b = d ? -1 : 1,
                _ = i.tickSize || f,
                w = oe(i.tickCoord) ? i.tickCoord : i.coordinate;
            switch (c) {
                case "top":
                    p = h = i.coordinate, g = s + +!d * l, v = g - b * _, y = v - b * m, x = w;
                    break;
                case "left":
                    v = g = i.coordinate, h = o + +!d * u, p = h - b * _, x = p - b * m, y = w;
                    break;
                case "right":
                    v = g = i.coordinate, h = o + +d * u, p = h + b * _, x = p + b * m, y = w;
                    break;
                default:
                    p = h = i.coordinate, g = s + +d * l, v = g + b * _, y = v + b * m, x = w;
                    break
            }
            return {
                line: {
                    x1: p,
                    y1: v,
                    x2: h,
                    y2: g
                },
                tick: {
                    x,
                    y
                }
            }
        }
    }, {
        key: "getTickTextAnchor",
        value: function() {
            var i = this.props,
                a = i.orientation,
                o = i.mirror,
                s;
            switch (a) {
                case "left":
                    s = o ? "start" : "end";
                    break;
                case "right":
                    s = o ? "end" : "start";
                    break;
                default:
                    s = "middle";
                    break
            }
            return s
        }
    }, {
        key: "getTickVerticalAnchor",
        value: function() {
            var i = this.props,
                a = i.orientation,
                o = i.mirror,
                s = "end";
            switch (a) {
                case "left":
                case "right":
                    s = "middle";
                    break;
                case "top":
                    s = o ? "start" : "end";
                    break;
                default:
                    s = o ? "end" : "start";
                    break
            }
            return s
        }
    }, {
        key: "renderAxisLine",
        value: function() {
            var i = this.props,
                a = i.x,
                o = i.y,
                s = i.width,
                u = i.height,
                l = i.orientation,
                c = i.mirror,
                f = i.axisLine,
                d = Se(Se(Se({}, Ae(this.props)), Ae(f)), {}, {
                    fill: "none"
                });
            if (l === "top" || l === "bottom") {
                var m = +(l === "top" && !c || l === "bottom" && c);
                d = Se(Se({}, d), {}, {
                    x1: a,
                    y1: o + m * u,
                    x2: a + s,
                    y2: o + m * u
                })
            } else {
                var p = +(l === "left" && !c || l === "right" && c);
                d = Se(Se({}, d), {}, {
                    x1: a + p * s,
                    y1: o,
                    x2: a + p * s,
                    y2: o + u
                })
            }
            return C("line", {
                ...d,
                className: Ne("recharts-cartesian-axis-line", He(f, "className"))
            })
        }
    }, {
        key: "renderTicks",
        value: function(i, a, o) {
            var s = this,
                u = this.props,
                l = u.tickLine,
                c = u.stroke,
                f = u.tick,
                d = u.tickFormatter,
                m = u.unit,
                p = r.getTicks(Se(Se({}, this.props), {}, {
                    ticks: i
                }), a, o),
                h = this.getTickTextAnchor(),
                v = this.getTickVerticalAnchor(),
                g = Ae(this.props),
                x = Ae(f),
                y = Se(Se({}, g), {}, {
                    fill: "none"
                }, Ae(l)),
                b = p.map(function(_, w) {
                    var A = s.getTickLineCoord(_),
                        E = A.line,
                        k = A.tick,
                        N = Se(Se(Se(Se({
                            textAnchor: h,
                            verticalAnchor: v
                        }, g), {}, {
                            stroke: "none",
                            fill: c
                        }, x), k), {}, {
                            index: w,
                            payload: _,
                            visibleTicksCount: p.length,
                            tickFormatter: d
                        });
                    return te(tt, {
                        className: "recharts-cartesian-axis-tick",
                        ...Kp(s.props, _, w),
                        children: [l && C("line", {
                            ...y,
                            ...E,
                            className: Ne("recharts-cartesian-axis-tick-line", He(l, "className"))
                        }), f && r.renderTickItem(f, N, "".concat(me(d) ? d(_.value, w) : _.value).concat(m || ""))]
                    }, "tick-".concat(w))
                });
            return C("g", {
                className: "recharts-cartesian-axis-ticks",
                children: b
            })
        }
    }, {
        key: "render",
        value: function() {
            var i = this,
                a = this.props,
                o = a.axisLine,
                s = a.width,
                u = a.height,
                l = a.ticksGenerator,
                c = a.className,
                f = a.hide;
            if (f) return null;
            var d = this.props,
                m = d.ticks,
                p = ws(d, ["ticks"]),
                h = m;
            return me(l) && (h = m && m.length > 0 ? l(this.props) : l(p)), s <= 0 || u <= 0 || !h || !h.length ? null : te(tt, {
                className: Ne("recharts-cartesian-axis", c),
                ref: function(g) {
                    i.layerReference = g
                },
                children: [o && this.renderAxisLine(), this.renderTicks(h, this.state.fontSize, this.state.letterSpacing), Xe.renderCallByParent(this.props)]
            })
        }
    }], [{
        key: "getTicks",
        value: function(i, a, o) {
            var s = i.tick,
                u = i.ticks,
                l = i.viewBox,
                c = i.minTickGap,
                f = i.orientation,
                d = i.interval,
                m = i.tickFormatter,
                p = i.unit;
            return !u || !u.length || !s ? [] : oe(d) || or.isSsr ? r.getNumberIntervalTicks(u, typeof d == "number" && oe(d) ? d : 0) : d === "preserveStartEnd" ? r.getTicksStart({
                ticks: u,
                tickFormatter: m,
                viewBox: l,
                orientation: f,
                minTickGap: c,
                unit: p,
                fontSize: a,
                letterSpacing: o
            }, !0) : d === "preserveStart" ? r.getTicksStart({
                ticks: u,
                tickFormatter: m,
                viewBox: l,
                orientation: f,
                minTickGap: c,
                unit: p,
                fontSize: a,
                letterSpacing: o
            }) : r.getTicksEnd({
                ticks: u,
                tickFormatter: m,
                viewBox: l,
                orientation: f,
                minTickGap: c,
                unit: p,
                fontSize: a,
                letterSpacing: o
            })
        }
    }, {
        key: "getNumberIntervalTicks",
        value: function(i, a) {
            return i.filter(function(o, s) {
                return s % (a + 1) === 0
            })
        }
    }, {
        key: "getTicksStart",
        value: function(i, a) {
            var o = i.ticks,
                s = i.tickFormatter,
                u = i.viewBox,
                l = i.orientation,
                c = i.minTickGap,
                f = i.unit,
                d = i.fontSize,
                m = i.letterSpacing,
                p = u.x,
                h = u.y,
                v = u.width,
                g = u.height,
                x = l === "top" || l === "bottom" ? "width" : "height",
                y = (o || []).slice(),
                b = f && x === "width" ? _r(f, {
                    fontSize: d,
                    letterSpacing: m
                })[x] : 0,
                _ = y.length,
                w = _ >= 2 ? Tt(y[1].coordinate - y[0].coordinate) : 1,
                A, E;
            if (w === 1 ? (A = x === "width" ? p : h, E = x === "width" ? p + v : h + g) : (A = x === "width" ? p + v : h + g, E = x === "width" ? p : h), a) {
                var k = o[_ - 1],
                    N = me(s) ? s(k.value, _ - 1) : k.value,
                    I = _r(N, {
                        fontSize: d,
                        letterSpacing: m
                    })[x] + b,
                    T = w * (k.coordinate + w * I / 2 - E);
                y[_ - 1] = k = Se(Se({}, k), {}, {
                    tickCoord: T > 0 ? k.coordinate - T * w : k.coordinate
                });
                var M = w * (k.tickCoord - w * I / 2 - A) >= 0 && w * (k.tickCoord + w * I / 2 - E) <= 0;
                M && (E = k.tickCoord - w * (I / 2 + c), y[_ - 1] = Se(Se({}, k), {}, {
                    isShow: !0
                }))
            }
            for (var S = a ? _ - 1 : _, D = 0; D < S; D++) {
                var z = y[D],
                    B = me(s) ? s(z.value, D) : z.value,
                    q = _r(B, {
                        fontSize: d,
                        letterSpacing: m
                    })[x] + b;
                if (D === 0) {
                    var H = w * (z.coordinate - w * q / 2 - A);
                    y[D] = z = Se(Se({}, z), {}, {
                        tickCoord: H < 0 ? z.coordinate - H * w : z.coordinate
                    })
                } else y[D] = z = Se(Se({}, z), {}, {
                    tickCoord: z.coordinate
                });
                var Q = w * (z.tickCoord - w * q / 2 - A) >= 0 && w * (z.tickCoord + w * q / 2 - E) <= 0;
                Q && (A = z.tickCoord + w * (q / 2 + c), y[D] = Se(Se({}, z), {}, {
                    isShow: !0
                }))
            }
            return y.filter(function(F) {
                return F.isShow
            })
        }
    }, {
        key: "getTicksEnd",
        value: function(i) {
            var a = i.ticks,
                o = i.tickFormatter,
                s = i.viewBox,
                u = i.orientation,
                l = i.minTickGap,
                c = i.unit,
                f = i.fontSize,
                d = i.letterSpacing,
                m = s.x,
                p = s.y,
                h = s.width,
                v = s.height,
                g = u === "top" || u === "bottom" ? "width" : "height",
                x = c && g === "width" ? _r(c, {
                    fontSize: f,
                    letterSpacing: d
                })[g] : 0,
                y = (a || []).slice(),
                b = y.length,
                _ = b >= 2 ? Tt(y[1].coordinate - y[0].coordinate) : 1,
                w, A;
            _ === 1 ? (w = g === "width" ? m : p, A = g === "width" ? m + h : p + v) : (w = g === "width" ? m + h : p + v, A = g === "width" ? m : p);
            for (var E = b - 1; E >= 0; E--) {
                var k = y[E],
                    N = me(o) ? o(k.value, b - E - 1) : k.value,
                    I = _r(N, {
                        fontSize: f,
                        letterSpacing: d
                    })[g] + x;
                if (E === b - 1) {
                    var T = _ * (k.coordinate + _ * I / 2 - A);
                    y[E] = k = Se(Se({}, k), {}, {
                        tickCoord: T > 0 ? k.coordinate - T * _ : k.coordinate
                    })
                } else y[E] = k = Se(Se({}, k), {}, {
                    tickCoord: k.coordinate
                });
                var M = _ * (k.tickCoord - _ * I / 2 - w) >= 0 && _ * (k.tickCoord + _ * I / 2 - A) <= 0;
                M && (A = k.tickCoord - _ * (I / 2 + l), y[E] = Se(Se({}, k), {}, {
                    isShow: !0
                }))
            }
            return y.filter(function(S) {
                return S.isShow
            })
        }
    }, {
        key: "renderTickItem",
        value: function(i, a, o) {
            var s;
            return ve.isValidElement(i) ? s = ve.cloneElement(i, a) : me(i) ? s = i(a) : s = C(Hn, {
                ...a,
                className: "recharts-cartesian-axis-tick-value",
                children: o
            }), s
        }
    }]), r
}(R.exports.Component);
wr.displayName = "CartesianAxis";
wr.defaultProps = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    viewBox: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    },
    orientation: "bottom",
    ticks: [],
    stroke: "#666",
    tickLine: !0,
    axisLine: !0,
    tick: !0,
    mirror: !1,
    minTickGap: 5,
    tickSize: 6,
    tickMargin: 2,
    interval: "preserveEnd"
};

function Hi(e) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Hi = function(r) {
        return typeof r
    } : Hi = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
    }, Hi(e)
}

function dD(e, t) {
    if (e == null) return {};
    var r = pD(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]))
    }
    return r
}

function pD(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i, a;
    for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r
}

function Kd(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function rr(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Kd(Object(r), !0).forEach(function(n) {
            mD(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kd(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function mD(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function vD(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Zd(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function gD(e, t, r) {
    return t && Zd(e.prototype, t), r && Zd(e, r), e
}

function yD(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && Vu(e, t)
}

function Vu(e, t) {
    return Vu = Object.setPrototypeOf || function(n, i) {
        return n.__proto__ = i, n
    }, Vu(e, t)
}

function bD(e) {
    var t = wD();
    return function() {
        var n = La(e),
            i;
        if (t) {
            var a = La(this).constructor;
            i = Reflect.construct(n, arguments, a)
        } else i = n.apply(this, arguments);
        return xD(this, i)
    }
}

function xD(e, t) {
    return t && (Hi(t) === "object" || typeof t == "function") ? t : _D(e)
}

function _D(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function wD() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function La(e) {
    return La = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, La(e)
}
var fr = function(e) {
    yD(r, e);
    var t = bD(r);

    function r() {
        var n;
        vD(this, r);
        for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
        return n = t.call.apply(t, [this].concat(a)), n.state = {
            isAnimationFinished: !0
        }, n.id = so("recharts-area-"), n.handleAnimationEnd = function() {
            var s = n.props.onAnimationEnd;
            n.setState({
                isAnimationFinished: !0
            }), me(s) && s()
        }, n.handleAnimationStart = function() {
            var s = n.props.onAnimationStart;
            n.setState({
                isAnimationFinished: !1
            }), me(s) && s()
        }, n
    }
    return gD(r, [{
        key: "renderDots",
        value: function(i, a) {
            var o = this.props.isAnimationActive,
                s = this.state.isAnimationFinished;
            if (o && !s) return null;
            var u = this.props,
                l = u.dot,
                c = u.points,
                f = u.dataKey,
                d = Ae(this.props),
                m = Ae(l, !0),
                p = c.map(function(v, g) {
                    var x = rr(rr(rr({
                        key: "dot-".concat(g),
                        r: 3
                    }, d), m), {}, {
                        dataKey: f,
                        cx: v.x,
                        cy: v.y,
                        index: g,
                        value: v.value,
                        payload: v.payload
                    });
                    return r.renderDotItem(l, x)
                }),
                h = {
                    clipPath: i ? "url(#clipPath-".concat(a, ")") : null
                };
            return C(tt, {
                className: "recharts-area-dots",
                ...h,
                children: p
            })
        }
    }, {
        key: "renderHorizontalRect",
        value: function(i) {
            var a = this.props,
                o = a.baseLine,
                s = a.points,
                u = a.strokeWidth,
                l = s[0].x,
                c = s[s.length - 1].x,
                f = i * Math.abs(l - c),
                d = ar(s.map(function(m) {
                    return m.y || 0
                }));
            return oe(o) && typeof o == "number" ? d = Math.max(o, d) : o && _e(o) && o.length && (d = Math.max(ar(o.map(function(m) {
                return m.y || 0
            })), d)), oe(d) ? C("rect", {
                x: l < c ? l : l - f,
                y: 0,
                width: f,
                height: Math.floor(d + (u ? parseInt("".concat(u), 10) : 1))
            }) : null
        }
    }, {
        key: "renderVerticalRect",
        value: function(i) {
            var a = this.props,
                o = a.baseLine,
                s = a.points,
                u = a.strokeWidth,
                l = s[0].y,
                c = s[s.length - 1].y,
                f = i * Math.abs(l - c),
                d = ar(s.map(function(m) {
                    return m.x || 0
                }));
            return oe(o) && typeof o == "number" ? d = Math.max(o, d) : o && _e(o) && o.length && (d = Math.max(ar(o.map(function(m) {
                return m.x || 0
            })), d)), oe(d) ? C("rect", {
                x: 0,
                y: l < c ? l : l - f,
                width: d + (u ? parseInt("".concat(u), 10) : 1),
                height: Math.floor(f)
            }) : null
        }
    }, {
        key: "renderClipRect",
        value: function(i) {
            var a = this.props.layout;
            return a === "vertical" ? this.renderVerticalRect(i) : this.renderHorizontalRect(i)
        }
    }, {
        key: "renderAreaStatically",
        value: function(i, a, o, s) {
            var u = this.props,
                l = u.layout,
                c = u.type,
                f = u.stroke,
                d = u.connectNulls,
                m = u.isRange;
            u.ref;
            var p = dD(u, ["layout", "type", "stroke", "connectNulls", "isRange", "ref"]);
            return te(tt, {
                clipPath: o ? "url(#clipPath-".concat(s, ")") : null,
                children: [C(Xr, {
                    ...Ae(p, !0),
                    points: i,
                    connectNulls: d,
                    type: c,
                    baseLine: a,
                    layout: l,
                    stroke: "none",
                    className: "recharts-area-area"
                }), f !== "none" && C(Xr, {
                    ...Ae(this.props),
                    className: "recharts-area-curve",
                    layout: l,
                    type: c,
                    connectNulls: d,
                    fill: "none",
                    points: i
                }), f !== "none" && m && C(Xr, {
                    ...Ae(this.props),
                    className: "recharts-area-curve",
                    layout: l,
                    type: c,
                    connectNulls: d,
                    fill: "none",
                    points: a
                })]
            })
        }
    }, {
        key: "renderAreaWithAnimation",
        value: function(i, a) {
            var o = this,
                s = this.props,
                u = s.points,
                l = s.baseLine,
                c = s.isAnimationActive,
                f = s.animationBegin,
                d = s.animationDuration,
                m = s.animationEasing,
                p = s.animationId,
                h = this.state,
                v = h.prevPoints,
                g = h.prevBaseLine;
            return C(en, {
                begin: f,
                duration: d,
                isActive: c,
                easing: m,
                from: {
                    t: 0
                },
                to: {
                    t: 1
                },
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
                children: function(x) {
                    var y = x.t;
                    if (v) {
                        var b = v.length / u.length,
                            _ = u.map(function(k, N) {
                                var I = Math.floor(N * b);
                                if (v[I]) {
                                    var T = v[I],
                                        M = Lr(T.x, k.x),
                                        S = Lr(T.y, k.y);
                                    return rr(rr({}, k), {}, {
                                        x: M(y),
                                        y: S(y)
                                    })
                                }
                                return k
                            }),
                            w;
                        if (oe(l) && typeof l == "number") {
                            var A = Lr(g, l);
                            w = A(y)
                        } else if (pe(l) || ni(l)) {
                            var E = Lr(g, 0);
                            w = E(y)
                        } else w = l.map(function(k, N) {
                            var I = Math.floor(N * b);
                            if (g[I]) {
                                var T = g[I],
                                    M = Lr(T.x, k.x),
                                    S = Lr(T.y, k.y);
                                return rr(rr({}, k), {}, {
                                    x: M(y),
                                    y: S(y)
                                })
                            }
                            return k
                        });
                        return o.renderAreaStatically(_, w, i, a)
                    }
                    return te(tt, {
                        children: [C("defs", {
                            children: C("clipPath", {
                                id: "animationClipPath-".concat(a),
                                children: o.renderClipRect(y)
                            })
                        }), C(tt, {
                            clipPath: "url(#animationClipPath-".concat(a, ")"),
                            children: o.renderAreaStatically(u, l, i, a)
                        })]
                    })
                }
            }, "area-".concat(p))
        }
    }, {
        key: "renderArea",
        value: function(i, a) {
            var o = this.props,
                s = o.points,
                u = o.baseLine,
                l = o.isAnimationActive,
                c = this.state,
                f = c.prevPoints,
                d = c.prevBaseLine,
                m = c.totalLength;
            return l && s && s.length && (!f && m > 0 || !xu(f, s) || !xu(d, u)) ? this.renderAreaWithAnimation(i, a) : this.renderAreaStatically(s, u, i, a)
        }
    }, {
        key: "render",
        value: function() {
            var i = this.props,
                a = i.hide,
                o = i.dot,
                s = i.points,
                u = i.className,
                l = i.top,
                c = i.left,
                f = i.xAxis,
                d = i.yAxis,
                m = i.width,
                p = i.height,
                h = i.isAnimationActive,
                v = i.id;
            if (a || !s || !s.length) return null;
            var g = this.state.isAnimationFinished,
                x = s.length === 1,
                y = Ne("recharts-area", u),
                b = f && f.allowDataOverflow || d && d.allowDataOverflow,
                _ = pe(v) ? this.id : v;
            return te(tt, {
                className: y,
                children: [b ? C("defs", {
                    children: C("clipPath", {
                        id: "clipPath-".concat(_),
                        children: C("rect", {
                            x: c,
                            y: l,
                            width: m,
                            height: Math.floor(p)
                        })
                    })
                }) : null, x ? null : this.renderArea(b, _), (o || x) && this.renderDots(b, _), (!h || g) && ur.renderCallByParent(this.props, s)]
            })
        }
    }], [{
        key: "getDerivedStateFromProps",
        value: function(i, a) {
            return i.animationId !== a.prevAnimationId ? {
                prevAnimationId: i.animationId,
                curPoints: i.points,
                curBaseLine: i.baseLine,
                prevPoints: a.curPoints,
                prevBaseLine: a.curBaseLine
            } : i.points !== a.curPoints || i.baseLine !== a.curBaseLine ? {
                curPoints: i.points,
                curBaseLine: i.baseLine
            } : null
        }
    }]), r
}(R.exports.PureComponent);
fr.displayName = "Area";
fr.defaultProps = {
    stroke: "#3182bd",
    fill: "#3182bd",
    fillOpacity: .6,
    xAxisId: 0,
    yAxisId: 0,
    legendType: "line",
    connectNulls: !1,
    points: [],
    dot: !1,
    activeDot: !0,
    hide: !1,
    isAnimationActive: !or.isSsr,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: "ease"
};
fr.getBaseValue = function(e, t, r, n) {
    var i = e.layout,
        a = t.props.baseValue;
    if (oe(a) && typeof a == "number") return a;
    var o = i === "horizontal" ? n : r,
        s = o.scale.domain();
    if (o.type === "number") {
        var u = Math.max(s[0], s[1]),
            l = Math.min(s[0], s[1]);
        return a === "dataMin" ? l : a === "dataMax" || u < 0 ? u : Math.max(Math.min(s[0], s[1]), 0)
    }
    return a === "dataMin" ? s[0] : a === "dataMax" ? s[1] : s[0]
};
fr.getComposedData = function(e) {
    var t = e.props,
        r = e.item,
        n = e.xAxis,
        i = e.yAxis,
        a = e.xAxisTicks,
        o = e.yAxisTicks,
        s = e.bandSize,
        u = e.dataKey,
        l = e.stackedData,
        c = e.dataStartIndex,
        f = e.displayedData,
        d = e.offset,
        m = t.layout,
        p = l && l.length,
        h = fr.getBaseValue(t, r, n, i),
        v = !1,
        g = f.map(function(y, b) {
            var _ = Xt(y, u),
                w;
            p ? w = l[c + b] : (w = _, _e(w) ? v = !0 : w = [h, w]);
            var A = pe(w[1]) || p && pe(_);
            return m === "horizontal" ? {
                x: dd({
                    axis: n,
                    ticks: a,
                    bandSize: s,
                    entry: y,
                    index: b
                }),
                y: A ? null : i.scale(w[1]),
                value: w,
                payload: y
            } : {
                x: A ? null : n.scale(w[1]),
                y: dd({
                    axis: i,
                    ticks: o,
                    bandSize: s,
                    entry: y,
                    index: b
                }),
                value: w,
                payload: y
            }
        }),
        x;
    return p || v ? x = g.map(function(y) {
        return m === "horizontal" ? {
            x: y.x,
            y: !pe(He(y, "value[0]")) && !pe(He(y, "y")) ? i.scale(He(y, "value[0]")) : null
        } : {
            x: pe(He(y, "value[0]")) ? null : n.scale(He(y, "value[0]")),
            y: y.y
        }
    }) : m === "horizontal" ? x = i.scale(h) : x = n.scale(h), rr({
        points: g,
        baseLine: x,
        layout: m,
        isRange: v
    }, d)
};
fr.renderDotItem = function(e, t) {
    var r;
    return ve.isValidElement(e) ? r = ve.cloneElement(e, t) : me(e) ? r = e(t) : r = C(lc, {
        ...t,
        className: "recharts-area-dot"
    }), r
};
var dc = function() {
    return null
};
dc.displayName = "XAxis";
dc.defaultProps = {
    allowDecimals: !0,
    hide: !1,
    orientation: "bottom",
    width: 0,
    height: 30,
    mirror: !1,
    xAxisId: 0,
    tickCount: 5,
    type: "category",
    domain: [0, "auto"],
    padding: {
        left: 0,
        right: 0
    },
    allowDataOverflow: !1,
    scale: "auto",
    reversed: !1,
    allowDuplicatedCategory: !0
};
var pc = function() {
    return null
};
pc.displayName = "YAxis";
pc.defaultProps = {
    allowDuplicatedCategory: !0,
    allowDecimals: !0,
    hide: !1,
    orientation: "left",
    width: 60,
    height: 0,
    mirror: !1,
    yAxisId: 0,
    tickCount: 5,
    type: "number",
    domain: [0, "auto"],
    padding: {
        top: 0,
        bottom: 0
    },
    allowDataOverflow: !1,
    scale: "auto",
    reversed: !1
};
var SD = pr,
    OD = ri,
    AD = eo;

function kD(e) {
    return function(t, r, n) {
        var i = Object(t);
        if (!OD(t)) {
            var a = SD(r);
            t = AD(t), r = function(s) {
                return a(i[s], s, i)
            }
        }
        var o = e(t, r, n);
        return o > -1 ? i[a ? t[o] : o] : void 0
    }
}
var ED = kD,
    TD = Tg;

function CD(e) {
    var t = TD(e),
        r = t % 1;
    return t === t ? r ? t - r : t : 0
}
var PD = CD,
    $D = ym,
    MD = pr,
    ID = PD,
    ND = Math.max;

function RD(e, t, r) {
    var n = e == null ? 0 : e.length;
    if (!n) return -1;
    var i = r == null ? 0 : ID(r);
    return i < 0 && (i = ND(n + i, 0)), $D(e, MD(t), i)
}
var DD = RD,
    LD = ED,
    jD = DD,
    FD = LD(jD),
    BD = FD,
    zD = Jm,
    UD = lt,
    HD = "Expected a function";

function WD(e, t, r) {
    var n = !0,
        i = !0;
    if (typeof e != "function") throw new TypeError(HD);
    return UD(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), zD(e, t, {
        leading: n,
        maxWait: t,
        trailing: i
    })
}
var GD = WD,
    qD = hr,
    VD = dr,
    YD = "[object Boolean]";

function XD(e) {
    return e === !0 || e === !1 || VD(e) && qD(e) == YD
}
var KD = XD,
    Yu = function(t, r, n, i, a) {
        var o = qt(t, hc.displayName),
            s = qt(t, ci.displayName),
            u = o.concat(s),
            l = qt(t, fi.displayName),
            c = "".concat(i, "Id"),
            f = i[0],
            d = r;
        if (u.length && (d = u.reduce(function(h, v) {
                if (v.props[c] === n && Mt(v.props, "extendDomain") && oe(v.props[f])) {
                    var g = v.props[f];
                    return [Math.min(h[0], g), Math.max(h[1], g)]
                }
                return h
            }, d)), l.length) {
            var m = "".concat(f, "1"),
                p = "".concat(f, "2");
            d = l.reduce(function(h, v) {
                if (v.props[c] === n && Mt(v.props, "extendDomain") && oe(v.props[m]) && oe(v.props[p])) {
                    var g = v.props[m],
                        x = v.props[p];
                    return [Math.min(h[0], g, x), Math.max(h[1], g, x)]
                }
                return h
            }, d)
        }
        return a && a.length && (d = a.reduce(function(h, v) {
            return oe(v) ? [Math.min(h[0], v), Math.max(h[1], v)] : h
        }, d)), d
    },
    Ig = {
        exports: {}
    };
(function(e) {
    var t = Object.prototype.hasOwnProperty,
        r = "~";

    function n() {}
    Object.create && (n.prototype = Object.create(null), new n().__proto__ || (r = !1));

    function i(u, l, c) {
        this.fn = u, this.context = l, this.once = c || !1
    }

    function a(u, l, c, f, d) {
        if (typeof c != "function") throw new TypeError("The listener must be a function");
        var m = new i(c, f || u, d),
            p = r ? r + l : l;
        return u._events[p] ? u._events[p].fn ? u._events[p] = [u._events[p], m] : u._events[p].push(m) : (u._events[p] = m, u._eventsCount++), u
    }

    function o(u, l) {
        --u._eventsCount === 0 ? u._events = new n : delete u._events[l]
    }

    function s() {
        this._events = new n, this._eventsCount = 0
    }
    s.prototype.eventNames = function() {
        var l = [],
            c, f;
        if (this._eventsCount === 0) return l;
        for (f in c = this._events) t.call(c, f) && l.push(r ? f.slice(1) : f);
        return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(c)) : l
    }, s.prototype.listeners = function(l) {
        var c = r ? r + l : l,
            f = this._events[c];
        if (!f) return [];
        if (f.fn) return [f.fn];
        for (var d = 0, m = f.length, p = new Array(m); d < m; d++) p[d] = f[d].fn;
        return p
    }, s.prototype.listenerCount = function(l) {
        var c = r ? r + l : l,
            f = this._events[c];
        return f ? f.fn ? 1 : f.length : 0
    }, s.prototype.emit = function(l, c, f, d, m, p) {
        var h = r ? r + l : l;
        if (!this._events[h]) return !1;
        var v = this._events[h],
            g = arguments.length,
            x, y;
        if (v.fn) {
            switch (v.once && this.removeListener(l, v.fn, void 0, !0), g) {
                case 1:
                    return v.fn.call(v.context), !0;
                case 2:
                    return v.fn.call(v.context, c), !0;
                case 3:
                    return v.fn.call(v.context, c, f), !0;
                case 4:
                    return v.fn.call(v.context, c, f, d), !0;
                case 5:
                    return v.fn.call(v.context, c, f, d, m), !0;
                case 6:
                    return v.fn.call(v.context, c, f, d, m, p), !0
            }
            for (y = 1, x = new Array(g - 1); y < g; y++) x[y - 1] = arguments[y];
            v.fn.apply(v.context, x)
        } else {
            var b = v.length,
                _;
            for (y = 0; y < b; y++) switch (v[y].once && this.removeListener(l, v[y].fn, void 0, !0), g) {
                case 1:
                    v[y].fn.call(v[y].context);
                    break;
                case 2:
                    v[y].fn.call(v[y].context, c);
                    break;
                case 3:
                    v[y].fn.call(v[y].context, c, f);
                    break;
                case 4:
                    v[y].fn.call(v[y].context, c, f, d);
                    break;
                default:
                    if (!x)
                        for (_ = 1, x = new Array(g - 1); _ < g; _++) x[_ - 1] = arguments[_];
                    v[y].fn.apply(v[y].context, x)
            }
        }
        return !0
    }, s.prototype.on = function(l, c, f) {
        return a(this, l, c, f, !1)
    }, s.prototype.once = function(l, c, f) {
        return a(this, l, c, f, !0)
    }, s.prototype.removeListener = function(l, c, f, d) {
        var m = r ? r + l : l;
        if (!this._events[m]) return this;
        if (!c) return o(this, m), this;
        var p = this._events[m];
        if (p.fn) p.fn === c && (!d || p.once) && (!f || p.context === f) && o(this, m);
        else {
            for (var h = 0, v = [], g = p.length; h < g; h++)(p[h].fn !== c || d && !p[h].once || f && p[h].context !== f) && v.push(p[h]);
            v.length ? this._events[m] = v.length === 1 ? v[0] : v : o(this, m)
        }
        return this
    }, s.prototype.removeAllListeners = function(l) {
        var c;
        return l ? (c = r ? r + l : l, this._events[c] && o(this, c)) : (this._events = new n, this._eventsCount = 0), this
    }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = r, s.EventEmitter = s, e.exports = s
})(Ig);
const ZD = Ig.exports;
var at = new ZD;
at.setMaxListeners && at.setMaxListeners(10);
var Ss = "recharts.syncMouseEvents";

function Wi(e) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Wi = function(r) {
        return typeof r
    } : Wi = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
    }, Wi(e)
}

function Jd(e, t) {
    return e8(e) || QD(e, t) || Ng(e, t) || JD()
}

function JD() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function QD(e, t) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
        var r = [],
            n = !0,
            i = !1,
            a = void 0;
        try {
            for (var o = e[Symbol.iterator](), s; !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t)); n = !0);
        } catch (u) {
            i = !0, a = u
        } finally {
            try {
                !n && o.return != null && o.return()
            } finally {
                if (i) throw a
            }
        }
        return r
    }
}

function e8(e) {
    if (Array.isArray(e)) return e
}

function Qd(e, t) {
    if (e == null) return {};
    var r = t8(e, t),
        n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]))
    }
    return r
}

function t8(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        i, a;
    for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
    return r
}

function r8(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function ep(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function n8(e, t, r) {
    return t && ep(e.prototype, t), r && ep(e, r), e
}

function i8(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && Xu(e, t)
}

function Xu(e, t) {
    return Xu = Object.setPrototypeOf || function(n, i) {
        return n.__proto__ = i, n
    }, Xu(e, t)
}

function a8(e) {
    var t = s8();
    return function() {
        var n = ja(e),
            i;
        if (t) {
            var a = ja(this).constructor;
            i = Reflect.construct(n, arguments, a)
        } else i = n.apply(this, arguments);
        return o8(this, i)
    }
}

function o8(e, t) {
    return t && (Wi(t) === "object" || typeof t == "function") ? t : Ku(e)
}

function Ku(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function s8() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function ja(e) {
    return ja = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, ja(e)
}

function an(e) {
    return c8(e) || l8(e) || Ng(e) || u8()
}

function u8() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function Ng(e, t) {
    if (!!e) {
        if (typeof e == "string") return Zu(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Zu(e, t)
    }
}

function l8(e) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e)
}

function c8(e) {
    if (Array.isArray(e)) return Zu(e)
}

function Zu(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function tp(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function K(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? tp(Object(r), !0).forEach(function(n) {
            ot(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tp(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function ot(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}
var f8 = {
        xAxis: ["bottom", "top"],
        yAxis: ["left", "right"]
    },
    Rg = {
        x: 0,
        y: 0
    },
    h8 = Number.isFinite ? Number.isFinite : isFinite,
    rp = typeof requestAnimationFrame == "function" ? requestAnimationFrame : typeof setImmediate == "function" ? setImmediate : setTimeout,
    np = typeof cancelAnimationFrame == "function" ? cancelAnimationFrame : typeof clearImmediate == "function" ? clearImmediate : clearTimeout,
    d8 = function(t, r) {
        return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius
    },
    p8 = function(t, r, n, i) {
        var a = r.find(function(c) {
            return c && c.index === n
        });
        if (a) {
            if (t === "horizontal") return {
                x: a.coordinate,
                y: i.y
            };
            if (t === "vertical") return {
                x: i.x,
                y: a.coordinate
            };
            if (t === "centric") {
                var o = a.coordinate,
                    s = i.radius;
                return K(K(K({}, i), Ke(i.cx, i.cy, s, o)), {}, {
                    angle: o,
                    radius: s
                })
            }
            var u = a.coordinate,
                l = i.angle;
            return K(K(K({}, i), Ke(i.cx, i.cy, u, l)), {}, {
                angle: l,
                radius: u
            })
        }
        return Rg
    },
    $o = function(t, r, n) {
        var i = r.graphicalItems,
            a = r.dataStartIndex,
            o = r.dataEndIndex,
            s = (i || []).reduce(function(u, l) {
                var c = l.props.data;
                return c && c.length ? [].concat(an(u), an(c)) : u
            }, []);
        return s && s.length > 0 ? s : n && n.props && n.props.data && n.props.data.length > 0 ? n.props.data : t && t.length && oe(a) && oe(o) ? t.slice(a, o + 1) : []
    },
    Dg = function(t, r, n, i) {
        var a = t.graphicalItems,
            o = t.tooltipAxis,
            s = $o(r, t);
        return n < 0 || !a || !a.length || n >= s.length ? null : a.reduce(function(u, l) {
            var c = l.props.hide;
            if (c) return u;
            var f = l.props.data,
                d;
            if (o.dataKey && !o.allowDuplicatedCategory) {
                var m = f === void 0 ? s : f;
                d = sa(m, o.dataKey, i)
            } else d = f && f[n] || s[n];
            return d ? [].concat(an(u), [k5(l, d)]) : u
        }, [])
    },
    ip = function(t, r, n, i) {
        var a = i || {
                x: t.chartX,
                y: t.chartY
            },
            o = d8(a, n),
            s = t.orderedTooltipTicks,
            u = t.tooltipAxis,
            l = t.tooltipTicks,
            c = l5(o, s, l, u);
        if (c >= 0 && l) {
            var f = l[c] && l[c].value,
                d = Dg(t, r, c, f),
                m = p8(n, s, c, a);
            return {
                activeTooltipIndex: c,
                activeLabel: f,
                activePayload: d,
                activeCoordinate: m
            }
        }
        return null
    },
    m8 = function(t, r) {
        var n = r.axes,
            i = r.graphicalItems,
            a = r.axisType,
            o = r.axisIdKey,
            s = r.stackGroups,
            u = r.dataStartIndex,
            l = r.dataEndIndex,
            c = t.layout,
            f = t.children,
            d = t.stackOffset,
            m = _g(c, a),
            p = n.reduce(function(h, v) {
                var g = v.props,
                    x = g.type,
                    y = g.dataKey,
                    b = g.allowDataOverflow,
                    _ = g.allowDuplicatedCategory,
                    w = g.scale,
                    A = g.ticks,
                    E = v.props[o],
                    k = $o(t.data, {
                        graphicalItems: i.filter(function(q) {
                            return q.props[o] === E
                        }),
                        dataStartIndex: u,
                        dataEndIndex: l
                    }),
                    N = k.length;
                if (!h[E]) {
                    var I, T, M;
                    if (y) {
                        if (I = ka(k, y, x), x === "category" && m) {
                            var S = KE(I);
                            _ && S ? (T = I, I = Na(0, N)) : _ || (I = vd(v.props.domain, I, v).reduce(function(q, H) {
                                return q.indexOf(H) >= 0 ? q : [].concat(an(q), [H])
                            }, []))
                        } else if (x === "category") _ ? I = I.filter(function(q) {
                            return q !== "" && !pe(q)
                        }) : I = vd(v.props.domain, I, v).reduce(function(q, H) {
                            return q.indexOf(H) >= 0 || H === "" || pe(H) ? q : [].concat(an(q), [H])
                        }, []);
                        else if (x === "number") {
                            var D = p5(k, i.filter(function(q) {
                                return q.props[o] === E && !q.props.hide
                            }), y, a, c);
                            D && (I = D)
                        }
                        m && (x === "number" || w !== "auto") && (M = ka(k, y, "category"))
                    } else m ? I = Na(0, N) : s && s[E] && s[E].hasStack && x === "number" ? I = d === "expand" ? [0, 1] : wg(s[E].stackGroups, u, l) : I = xg(k, i.filter(function(q) {
                        return q.props[o] === E && !q.props.hide
                    }), x, c, !0);
                    if (x === "number") I = Yu(f, I, E, a, A), v.props.domain && (I = Sg(v.props.domain, I, b));
                    else if (x === "category" && v.props.domain) {
                        var z = v.props.domain,
                            B = I.every(function(q) {
                                return z.indexOf(q) >= 0
                            });
                        B && (I = z)
                    }
                    return K(K({}, h), {}, ot({}, E, K(K({}, v.props), {}, {
                        axisType: a,
                        domain: I,
                        categoricalDomain: M,
                        duplicateDomain: T,
                        originalDomain: v.props.domain,
                        isCategorical: m,
                        layout: c
                    })))
                }
                return h
            }, {});
        return p
    },
    v8 = function(t, r) {
        var n = r.graphicalItems,
            i = r.Axis,
            a = r.axisType,
            o = r.axisIdKey,
            s = r.stackGroups,
            u = r.dataStartIndex,
            l = r.dataEndIndex,
            c = t.layout,
            f = t.children,
            d = $o(t.data, {
                graphicalItems: n,
                dataStartIndex: u,
                dataEndIndex: l
            }),
            m = d.length,
            p = _g(c, a),
            h = -1,
            v = n.reduce(function(g, x) {
                var y = x.props[o];
                if (!g[y]) {
                    h++;
                    var b;
                    return p ? b = Na(0, m) : s && s[y] && s[y].hasStack ? (b = wg(s[y].stackGroups, u, l), b = Yu(f, b, y, a)) : (b = Sg(i.defaultProps.domain, xg(d, n.filter(function(_) {
                        return _.props[o] === y && !_.props.hide
                    }), "number", c), i.defaultProps.allowDataOverflow), b = Yu(f, b, y, a)), K(K({}, g), {}, ot({}, y, K(K({
                        axisType: a
                    }, i.defaultProps), {}, {
                        hide: !0,
                        orientation: He(f8, "".concat(a, ".").concat(h % 2), null),
                        domain: b,
                        originalDomain: i.defaultProps.domain,
                        isCategorical: p,
                        layout: c
                    })))
                }
                return g
            }, {});
        return v
    },
    g8 = function(t, r) {
        var n = r.axisType,
            i = n === void 0 ? "xAxis" : n,
            a = r.AxisComp,
            o = r.graphicalItems,
            s = r.stackGroups,
            u = r.dataStartIndex,
            l = r.dataEndIndex,
            c = t.children,
            f = "".concat(i, "Id"),
            d = qt(c, a),
            m = {};
        return d && d.length ? m = m8(t, {
            axes: d,
            graphicalItems: o,
            axisType: i,
            axisIdKey: f,
            stackGroups: s,
            dataStartIndex: u,
            dataEndIndex: l
        }) : o && o.length && (m = v8(t, {
            Axis: a,
            graphicalItems: o,
            axisType: i,
            axisIdKey: f,
            stackGroups: s,
            dataStartIndex: u,
            dataEndIndex: l
        })), m
    },
    y8 = function(t) {
        var r = er(t),
            n = tr(r, !1, !0);
        return {
            tooltipTicks: n,
            orderedTooltipTicks: Nl(n, function(i) {
                return i.coordinate
            }),
            tooltipAxis: r,
            tooltipAxisBandSize: Ea(r, n)
        }
    },
    ap = function(t) {
        var r = t.children,
            n = t.defaultShowTooltip,
            i = Ut(r, Kn.displayName),
            a = i && i.props && i.props.startIndex || 0,
            o = i && i.props && i.props.endIndex || t.data && t.data.length - 1 || 0;
        return {
            chartX: 0,
            chartY: 0,
            dataStartIndex: a,
            dataEndIndex: o,
            activeTooltipIndex: -1,
            isTooltipActive: pe(n) ? !1 : n
        }
    },
    b8 = function(t) {
        return !t || !t.length ? !1 : t.some(function(r) {
            var n = sr(r && r.type);
            return n && n.indexOf("Bar") >= 0
        })
    },
    op = function(t) {
        return t === "horizontal" ? {
            numericAxisName: "yAxis",
            cateAxisName: "xAxis"
        } : t === "vertical" ? {
            numericAxisName: "xAxis",
            cateAxisName: "yAxis"
        } : t === "centric" ? {
            numericAxisName: "radiusAxis",
            cateAxisName: "angleAxis"
        } : {
            numericAxisName: "angleAxis",
            cateAxisName: "radiusAxis"
        }
    },
    x8 = function(t, r) {
        var n = t.props,
            i = t.graphicalItems,
            a = t.xAxisMap,
            o = a === void 0 ? {} : a,
            s = t.yAxisMap,
            u = s === void 0 ? {} : s,
            l = n.width,
            c = n.height,
            f = n.children,
            d = n.margin || {},
            m = Ut(f, Kn.displayName),
            p = Ut(f, Un.displayName),
            h = Object.keys(u).reduce(function(y, b) {
                var _ = u[b],
                    w = _.orientation;
                return !_.mirror && !_.hide ? K(K({}, y), {}, ot({}, w, y[w] + _.width)) : y
            }, {
                left: d.left || 0,
                right: d.right || 0
            }),
            v = Object.keys(o).reduce(function(y, b) {
                var _ = o[b],
                    w = _.orientation;
                return !_.mirror && !_.hide ? K(K({}, y), {}, ot({}, w, He(y, "".concat(w)) + _.height)) : y
            }, {
                top: d.top || 0,
                bottom: d.bottom || 0
            }),
            g = K(K({}, v), h),
            x = g.bottom;
        return m && (g.bottom += m.props.height || Kn.defaultProps.height), p && r && (g = h5(g, i, n, r)), K(K({
            brushBottom: x
        }, g), {}, {
            width: l - g.left - g.right,
            height: c - g.top - g.bottom
        })
    },
    _8 = function(t) {
        var r, n, i = t.chartName,
            a = t.GraphicalChild,
            o = t.defaultTooltipEventType,
            s = o === void 0 ? "axis" : o,
            u = t.validateTooltipEventTypes,
            l = u === void 0 ? ["axis"] : u,
            c = t.axisComponents,
            f = t.legendContent,
            d = t.formatAxisMap,
            m = t.defaultProps,
            p = function(g, x) {
                var y = x.graphicalItems,
                    b = x.stackGroups,
                    _ = x.offset,
                    w = x.updateId,
                    A = x.dataStartIndex,
                    E = x.dataEndIndex,
                    k = g.barSize,
                    N = g.layout,
                    I = g.barGap,
                    T = g.barCategoryGap,
                    M = g.maxBarSize,
                    S = op(N),
                    D = S.numericAxisName,
                    z = S.cateAxisName,
                    B = b8(y),
                    q = B && c5({
                        barSize: k,
                        stackGroups: b
                    }),
                    H = [];
                return y.forEach(function(Q, F) {
                    var L = $o(g.data, {
                            dataStartIndex: A,
                            dataEndIndex: E
                        }, Q),
                        ae = Q.props,
                        re = ae.dataKey,
                        ee = ae.maxBarSize,
                        ye = Q.props["".concat(D, "Id")],
                        $e = Q.props["".concat(z, "Id")],
                        se = c.reduce(function(J, U) {
                            var ne, le = x["".concat(U.axisType, "Map")],
                                ie = Q.props["".concat(U.axisType, "Id")],
                                he = le && le[ie];
                            return K(K({}, J), {}, (ne = {}, ot(ne, U.axisType, he), ot(ne, "".concat(U.axisType, "Ticks"), tr(he)), ne))
                        }, {}),
                        V = se[z],
                        ue = se["".concat(z, "Ticks")],
                        ce = b && b[ye] && b[ye].hasStack && O5(Q, b[ye].stackGroups),
                        X = sr(Q.type).indexOf("Bar") >= 0,
                        ge = Ea(V, ue),
                        O = [];
                    if (X) {
                        var G, W, $ = pe(ee) ? M : ee,
                            P = (G = (W = Ea(V, ue, !0)) !== null && W !== void 0 ? W : $) !== null && G !== void 0 ? G : 0;
                        O = f5({
                            barGap: I,
                            barCategoryGap: T,
                            bandSize: P !== ge ? P : ge,
                            sizeList: q[$e],
                            maxBarSize: $
                        }), P !== ge && (O = O.map(function(J) {
                            return K(K({}, J), {}, {
                                position: K(K({}, J.position), {}, {
                                    offset: J.position.offset - P / 2
                                })
                            })
                        }))
                    }
                    var j = Q && Q.type && Q.type.getComposedData;
                    if (j) {
                        var Z;
                        H.push({
                            props: K(K({}, j(K(K({}, se), {}, {
                                displayedData: L,
                                props: g,
                                dataKey: re,
                                item: Q,
                                bandSize: ge,
                                barPosition: O,
                                offset: _,
                                stackedData: ce,
                                layout: N,
                                dataStartIndex: A,
                                dataEndIndex: E
                            }))), {}, (Z = {
                                key: Q.key || "item-".concat(F)
                            }, ot(Z, D, se[D]), ot(Z, z, se[z]), ot(Z, "animationId", w), Z)),
                            childIndex: FM(Q, g.children),
                            item: Q
                        })
                    }
                }), H
            },
            h = function(g, x) {
                var y = g.props,
                    b = g.dataStartIndex,
                    _ = g.dataEndIndex,
                    w = g.updateId;
                if (!wh({
                        props: y
                    })) return null;
                var A = y.children,
                    E = y.layout,
                    k = y.stackOffset,
                    N = y.data,
                    I = y.reverseStackOrder,
                    T = op(E),
                    M = T.numericAxisName,
                    S = T.cateAxisName,
                    D = qt(A, a),
                    z = _5(N, D, "".concat(M, "Id"), "".concat(S, "Id"), k, I),
                    B = c.reduce(function(L, ae) {
                        var re = "".concat(ae.axisType, "Map");
                        return K(K({}, L), {}, ot({}, re, g8(y, K(K({}, ae), {}, {
                            graphicalItems: D,
                            stackGroups: ae.axisType === M && z,
                            dataStartIndex: b,
                            dataEndIndex: _
                        }))))
                    }, {}),
                    q = x8(K(K({}, B), {}, {
                        props: y,
                        graphicalItems: D
                    }), x == null ? void 0 : x.legendBBox);
                Object.keys(B).forEach(function(L) {
                    B[L] = d(y, B[L], q, L.replace("Map", ""), i)
                });
                var H = B["".concat(S, "Map")],
                    Q = y8(H),
                    F = p(y, K(K({}, B), {}, {
                        dataStartIndex: b,
                        dataEndIndex: _,
                        updateId: w,
                        graphicalItems: D,
                        stackGroups: z,
                        offset: q
                    }));
                return K(K({
                    formattedGraphicalItems: F,
                    graphicalItems: D,
                    offset: q,
                    stackGroups: z
                }, Q), B)
            };
        return n = r = function(v) {
            i8(x, v);
            var g = a8(x);

            function x(y) {
                var b;
                return r8(this, x), b = g.call(this, y), b.uniqueChartId = void 0, b.clipPathId = void 0, b.legendInstance = void 0, b.deferId = void 0, b.container = void 0, b.clearDeferId = function() {
                    !pe(b.deferId) && np && np(b.deferId), b.deferId = null
                }, b.handleLegendBBoxUpdate = function(_) {
                    if (_) {
                        var w = b.state,
                            A = w.dataStartIndex,
                            E = w.dataEndIndex,
                            k = w.updateId;
                        b.setState(K({
                            legendBBox: _
                        }, h({
                            props: b.props,
                            dataStartIndex: A,
                            dataEndIndex: E,
                            updateId: k
                        }, K(K({}, b.state), {}, {
                            legendBBox: _
                        }))))
                    }
                }, b.handleReceiveSyncEvent = function(_, w, A) {
                    var E = b.props.syncId;
                    E === _ && w !== b.uniqueChartId && (b.clearDeferId(), b.deferId = rp && rp(b.applySyncEvent.bind(Ku(b), A)))
                }, b.handleBrushChange = function(_) {
                    var w = _.startIndex,
                        A = _.endIndex;
                    if (w !== b.state.dataStartIndex || A !== b.state.dataEndIndex) {
                        var E = b.state.updateId;
                        b.setState(function() {
                            return K({
                                dataStartIndex: w,
                                dataEndIndex: A
                            }, h({
                                props: b.props,
                                dataStartIndex: w,
                                dataEndIndex: A,
                                updateId: E
                            }, b.state))
                        }), b.triggerSyncEvent({
                            dataStartIndex: w,
                            dataEndIndex: A
                        })
                    }
                }, b.handleMouseEnter = function(_) {
                    var w = b.props.onMouseEnter,
                        A = b.getMouseInfo(_);
                    if (A) {
                        var E = K(K({}, A), {}, {
                            isTooltipActive: !0
                        });
                        b.setState(E), b.triggerSyncEvent(E), me(w) && w(E, _)
                    }
                }, b.triggeredAfterMouseMove = function(_) {
                    var w = b.props.onMouseMove,
                        A = b.getMouseInfo(_),
                        E = A ? K(K({}, A), {}, {
                            isTooltipActive: !0
                        }) : {
                            isTooltipActive: !1
                        };
                    b.setState(E), b.triggerSyncEvent(E), me(w) && w(E, _)
                }, b.handleItemMouseEnter = function(_) {
                    b.setState(function() {
                        return {
                            isTooltipActive: !0,
                            activeItem: _,
                            activePayload: _.tooltipPayload,
                            activeCoordinate: _.tooltipPosition || {
                                x: _.cx,
                                y: _.cy
                            }
                        }
                    })
                }, b.handleItemMouseLeave = function() {
                    b.setState(function() {
                        return {
                            isTooltipActive: !1
                        }
                    })
                }, b.handleMouseMove = function(_) {
                    _ && me(_.persist) && _.persist(), b.triggeredAfterMouseMove(_)
                }, b.handleMouseLeave = function(_) {
                    var w = b.props.onMouseLeave,
                        A = {
                            isTooltipActive: !1
                        };
                    b.setState(A), b.triggerSyncEvent(A), me(w) && w(A, _), b.cancelThrottledTriggerAfterMouseMove()
                }, b.handleOuterEvent = function(_) {
                    var w = jM(_),
                        A = He(b.props, "".concat(w));
                    if (w && me(A)) {
                        var E;
                        /.*touch.*/i.test(w) ? E = b.getMouseInfo(_.changedTouches[0]) : E = b.getMouseInfo(_);
                        var k = A;
                        k(E, _)
                    }
                }, b.handleClick = function(_) {
                    var w = b.props.onClick,
                        A = b.getMouseInfo(_);
                    if (A) {
                        var E = K(K({}, A), {}, {
                            isTooltipActive: !0
                        });
                        b.setState(E), b.triggerSyncEvent(E), me(w) && w(E, _)
                    }
                }, b.handleMouseDown = function(_) {
                    var w = b.props.onMouseDown;
                    if (me(w)) {
                        var A = b.getMouseInfo(_);
                        w(A, _)
                    }
                }, b.handleMouseUp = function(_) {
                    var w = b.props.onMouseUp;
                    if (me(w)) {
                        var A = b.getMouseInfo(_);
                        w(A, _)
                    }
                }, b.handleTouchMove = function(_) {
                    _.changedTouches != null && _.changedTouches.length > 0 && b.handleMouseMove(_.changedTouches[0])
                }, b.handleTouchStart = function(_) {
                    _.changedTouches != null && _.changedTouches.length > 0 && b.handleMouseDown(_.changedTouches[0])
                }, b.handleTouchEnd = function(_) {
                    _.changedTouches != null && _.changedTouches.length > 0 && b.handleMouseUp(_.changedTouches[0])
                }, b.verticalCoordinatesGenerator = function(_) {
                    var w = _.xAxis,
                        A = _.width,
                        E = _.height,
                        k = _.offset;
                    return fd(wr.getTicks(K(K(K({}, wr.defaultProps), w), {}, {
                        ticks: tr(w, !0),
                        viewBox: {
                            x: 0,
                            y: 0,
                            width: A,
                            height: E
                        }
                    })), k.left, k.left + k.width)
                }, b.horizontalCoordinatesGenerator = function(_) {
                    var w = _.yAxis,
                        A = _.width,
                        E = _.height,
                        k = _.offset;
                    return fd(wr.getTicks(K(K(K({}, wr.defaultProps), w), {}, {
                        ticks: tr(w, !0),
                        viewBox: {
                            x: 0,
                            y: 0,
                            width: A,
                            height: E
                        }
                    })), k.top, k.top + k.height)
                }, b.axesTicksGenerator = function(_) {
                    return tr(_, !0)
                }, b.renderCursor = function(_) {
                    var w = b.state,
                        A = w.isTooltipActive,
                        E = w.activeCoordinate,
                        k = w.activePayload,
                        N = w.offset,
                        I = w.activeTooltipIndex,
                        T = b.getTooltipEventType();
                    if (!_ || !_.props.cursor || !A || !E || i !== "ScatterChart" && T !== "axis") return null;
                    var M = b.props.layout,
                        S, D = Xr;
                    if (i === "ScatterChart") S = E, D = Eg;
                    else if (i === "BarChart") S = b.getCursorRectangle(), D = uc;
                    else if (M === "radial") {
                        var z = b.getCursorPoints(),
                            B = z.cx,
                            q = z.cy,
                            H = z.radius,
                            Q = z.startAngle,
                            F = z.endAngle;
                        S = {
                            cx: B,
                            cy: q,
                            startAngle: Q,
                            endAngle: F,
                            innerRadius: H,
                            outerRadius: H
                        }, D = kg
                    } else S = {
                        points: b.getCursorPoints()
                    }, D = Xr;
                    var L = _.key || "_recharts-cursor",
                        ae = K(K(K(K({
                            stroke: "#ccc",
                            pointerEvents: "none"
                        }, N), S), Ae(_.props.cursor)), {}, {
                            payload: k,
                            payloadIndex: I,
                            key: L,
                            className: "recharts-tooltip-cursor"
                        });
                    return R.exports.isValidElement(_.props.cursor) ? R.exports.cloneElement(_.props.cursor, ae) : R.exports.createElement(D, ae)
                }, b.renderPolarAxis = function(_, w, A) {
                    var E = He(_, "type.axisType"),
                        k = He(b.state, "".concat(E, "Map")),
                        N = k[_.props["".concat(E, "Id")]];
                    return R.exports.cloneElement(_, K(K({}, N), {}, {
                        className: E,
                        key: _.key || "".concat(w, "-").concat(A),
                        ticks: tr(N, !0)
                    }))
                }, b.renderXAxis = function(_, w, A) {
                    var E = b.state.xAxisMap,
                        k = E[_.props.xAxisId];
                    return b.renderAxis(k, _, w, A)
                }, b.renderYAxis = function(_, w, A) {
                    var E = b.state.yAxisMap,
                        k = E[_.props.yAxisId];
                    return b.renderAxis(k, _, w, A)
                }, b.renderGrid = function(_) {
                    var w = b.state,
                        A = w.xAxisMap,
                        E = w.yAxisMap,
                        k = w.offset,
                        N = b.props,
                        I = N.width,
                        T = N.height,
                        M = er(A),
                        S = BD(E, function(B) {
                            return Pg(B.domain, h8)
                        }),
                        D = S || er(E),
                        z = _.props || {};
                    return R.exports.cloneElement(_, {
                        key: _.key || "grid",
                        x: oe(z.x) ? z.x : k.left,
                        y: oe(z.y) ? z.y : k.top,
                        width: oe(z.width) ? z.width : k.width,
                        height: oe(z.height) ? z.height : k.height,
                        xAxis: M,
                        yAxis: D,
                        offset: k,
                        chartWidth: I,
                        chartHeight: T,
                        verticalCoordinatesGenerator: z.verticalCoordinatesGenerator || b.verticalCoordinatesGenerator,
                        horizontalCoordinatesGenerator: z.horizontalCoordinatesGenerator || b.horizontalCoordinatesGenerator
                    })
                }, b.renderPolarGrid = function(_) {
                    var w = _.props,
                        A = w.radialLines,
                        E = w.polarAngles,
                        k = w.polarRadius,
                        N = b.state,
                        I = N.radiusAxisMap,
                        T = N.angleAxisMap,
                        M = er(I),
                        S = er(T),
                        D = S.cx,
                        z = S.cy,
                        B = S.innerRadius,
                        q = S.outerRadius;
                    return R.exports.cloneElement(_, {
                        polarAngles: _e(E) ? E : tr(S, !0).map(function(H) {
                            return H.coordinate
                        }),
                        polarRadius: _e(k) ? k : tr(M, !0).map(function(H) {
                            return H.coordinate
                        }),
                        cx: D,
                        cy: z,
                        innerRadius: B,
                        outerRadius: q,
                        key: _.key || "polar-grid",
                        radialLines: A
                    })
                }, b.renderLegend = function() {
                    var _ = b.state.formattedGraphicalItems,
                        w = b.props,
                        A = w.children,
                        E = w.width,
                        k = w.height,
                        N = b.props.margin || {},
                        I = E - (N.left || 0) - (N.right || 0),
                        T = yg({
                            children: A,
                            formattedGraphicalItems: _,
                            legendWidth: I,
                            legendContent: f
                        });
                    if (!T) return null;
                    var M = T.item,
                        S = Qd(T, ["item"]);
                    return R.exports.cloneElement(M, K(K({}, S), {}, {
                        chartWidth: E,
                        chartHeight: k,
                        margin: N,
                        ref: function(z) {
                            b.legendInstance = z
                        },
                        onBBoxUpdate: b.handleLegendBBoxUpdate
                    }))
                }, b.renderTooltip = function() {
                    var _ = b.props.children,
                        w = Ut(_, zr.displayName);
                    if (!w) return null;
                    var A = b.state,
                        E = A.isTooltipActive,
                        k = A.activeCoordinate,
                        N = A.activePayload,
                        I = A.activeLabel,
                        T = A.offset;
                    return R.exports.cloneElement(w, {
                        viewBox: K(K({}, T), {}, {
                            x: T.left,
                            y: T.top
                        }),
                        active: E,
                        label: I,
                        payload: E ? N : [],
                        coordinate: k
                    })
                }, b.renderBrush = function(_) {
                    var w = b.props,
                        A = w.margin,
                        E = w.data,
                        k = b.state,
                        N = k.offset,
                        I = k.dataStartIndex,
                        T = k.dataEndIndex,
                        M = k.updateId;
                    return R.exports.cloneElement(_, {
                        key: _.key || "_recharts-brush",
                        onChange: Oi(b.handleBrushChange, null, _.props.onChange),
                        data: E,
                        x: oe(_.props.x) ? _.props.x : N.left,
                        y: oe(_.props.y) ? _.props.y : N.top + N.height + N.brushBottom - (A.bottom || 0),
                        width: oe(_.props.width) ? _.props.width : N.width,
                        startIndex: I,
                        endIndex: T,
                        updateId: "brush-".concat(M)
                    })
                }, b.renderReferenceElement = function(_, w, A) {
                    if (!_) return null;
                    var E = Ku(b),
                        k = E.clipPathId,
                        N = b.state,
                        I = N.xAxisMap,
                        T = N.yAxisMap,
                        M = N.offset,
                        S = _.props,
                        D = S.xAxisId,
                        z = S.yAxisId;
                    return R.exports.cloneElement(_, {
                        key: _.key || "".concat(w, "-").concat(A),
                        xAxis: I[D],
                        yAxis: T[z],
                        viewBox: {
                            x: M.left,
                            y: M.top,
                            width: M.width,
                            height: M.height
                        },
                        clipPathId: k
                    })
                }, b.renderActivePoints = function(_) {
                    var w = _.item,
                        A = _.activePoint,
                        E = _.basePoint,
                        k = _.childIndex,
                        N = _.isRange,
                        I = [],
                        T = w.props.key,
                        M = w.item.props,
                        S = M.activeDot,
                        D = M.dataKey,
                        z = K(K({
                            index: k,
                            dataKey: D,
                            cx: A.x,
                            cy: A.y,
                            r: 4,
                            fill: sc(w.item),
                            strokeWidth: 2,
                            stroke: "#fff",
                            payload: A.payload,
                            value: A.value,
                            key: "".concat(T, "-activePoint-").concat(k)
                        }, Ae(S)), Zi(S));
                    return I.push(x.renderActiveDot(S, z)), E ? I.push(x.renderActiveDot(S, K(K({}, z), {}, {
                        cx: E.x,
                        cy: E.y,
                        key: "".concat(T, "-basePoint-").concat(k)
                    }))) : N && I.push(null), I
                }, b.renderGraphicChild = function(_, w, A) {
                    var E = b.filterFormatItem(_, w, A);
                    if (!E) return null;
                    var k = b.getTooltipEventType(),
                        N = b.state,
                        I = N.isTooltipActive,
                        T = N.tooltipAxis,
                        M = N.activeTooltipIndex,
                        S = N.activeLabel,
                        D = b.props.children,
                        z = Ut(D, zr.displayName),
                        B = E.props,
                        q = B.points,
                        H = B.isRange,
                        Q = B.baseLine,
                        F = E.item.props,
                        L = F.activeDot,
                        ae = F.hide,
                        re = !ae && I && z && L && M >= 0,
                        ee = {};
                    k !== "axis" && z && z.props.trigger === "click" ? ee = {
                        onClick: Oi(b.handleItemMouseEnter, null, _.props.onCLick)
                    } : k !== "axis" && (ee = {
                        onMouseLeave: Oi(b.handleItemMouseLeave, null, _.props.onMouseLeave),
                        onMouseEnter: Oi(b.handleItemMouseEnter, null, _.props.onMouseEnter)
                    });
                    var ye = R.exports.cloneElement(_, K(K({}, E.props), ee));

                    function $e(ce) {
                        return typeof T.dataKey == "function" ? T.dataKey(ce.payload) : null
                    }
                    if (re) {
                        var se, V;
                        if (T.dataKey && !T.allowDuplicatedCategory) {
                            var ue = typeof T.dataKey == "function" ? $e : "payload.".concat(T.dataKey.toString());
                            se = sa(q, ue, S), V = H && Q && sa(Q, ue, S)
                        } else se = q[M], V = H && Q && Q[M];
                        if (!pe(se)) return [ye].concat(an(b.renderActivePoints({
                            item: E,
                            activePoint: se,
                            basePoint: V,
                            childIndex: M,
                            isRange: H
                        })))
                    }
                    return H ? [ye, null, null] : [ye, null]
                }, b.renderCustomized = function(_, w, A) {
                    return R.exports.cloneElement(_, K(K({
                        key: "recharts-customized-".concat(A)
                    }, b.props), b.state))
                }, b.uniqueChartId = pe(y.id) ? so("recharts") : y.id, b.clipPathId = "".concat(b.uniqueChartId, "-clip"), y.throttleDelay && (b.triggeredAfterMouseMove = GD(b.triggeredAfterMouseMove, y.throttleDelay)), b.state = {}, b
            }
            return n8(x, [{
                key: "componentDidMount",
                value: function() {
                    pe(this.props.syncId) || this.addListener()
                }
            }, {
                key: "componentDidUpdate",
                value: function(b) {
                    pe(b.syncId) && !pe(this.props.syncId) && this.addListener(), !pe(b.syncId) && pe(this.props.syncId) && this.removeListener()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.clearDeferId(), pe(this.props.syncId) || this.removeListener(), this.cancelThrottledTriggerAfterMouseMove()
                }
            }, {
                key: "cancelThrottledTriggerAfterMouseMove",
                value: function() {
                    typeof this.triggeredAfterMouseMove.cancel == "function" && this.triggeredAfterMouseMove.cancel()
                }
            }, {
                key: "getTooltipEventType",
                value: function() {
                    var b = Ut(this.props.children, zr.displayName);
                    if (b && KD(b.props.shared)) {
                        var _ = b.props.shared ? "axis" : "item";
                        return l.indexOf(_) >= 0 ? _ : s
                    }
                    return s
                }
            }, {
                key: "getMouseInfo",
                value: function(b) {
                    if (!this.container) return null;
                    var _ = hM(this.container),
                        w = dM(b, _),
                        A = this.inRange(w.chartX, w.chartY);
                    if (!A) return null;
                    var E = this.state,
                        k = E.xAxisMap,
                        N = E.yAxisMap,
                        I = this.getTooltipEventType();
                    if (I !== "axis" && k && N) {
                        var T = er(k).scale,
                            M = er(N).scale,
                            S = T && T.invert ? T.invert(w.chartX) : null,
                            D = M && M.invert ? M.invert(w.chartY) : null;
                        return K(K({}, w), {}, {
                            xValue: S,
                            yValue: D
                        })
                    }
                    var z = ip(this.state, this.props.data, this.props.layout, A);
                    return z ? K(K({}, w), z) : null
                }
            }, {
                key: "getCursorRectangle",
                value: function() {
                    var b = this.props.layout,
                        _ = this.state,
                        w = _.activeCoordinate,
                        A = _.offset,
                        E = _.tooltipAxisBandSize,
                        k = E / 2;
                    return {
                        stroke: "none",
                        fill: "#ccc",
                        x: b === "horizontal" ? w.x - k : A.left + .5,
                        y: b === "horizontal" ? A.top + .5 : w.y - k,
                        width: b === "horizontal" ? E : A.width - 1,
                        height: b === "horizontal" ? A.height - 1 : E
                    }
                }
            }, {
                key: "getCursorPoints",
                value: function() {
                    var b = this.props.layout,
                        _ = this.state,
                        w = _.activeCoordinate,
                        A = _.offset,
                        E, k, N, I;
                    if (b === "horizontal") E = w.x, N = E, k = A.top, I = A.top + A.height;
                    else if (b === "vertical") k = w.y, I = k, E = A.left, N = A.left + A.width;
                    else if (!pe(w.cx) || !pe(w.cy))
                        if (b === "centric") {
                            var T = w.cx,
                                M = w.cy,
                                S = w.innerRadius,
                                D = w.outerRadius,
                                z = w.angle,
                                B = Ke(T, M, S, z),
                                q = Ke(T, M, D, z);
                            E = B.x, k = B.y, N = q.x, I = q.y
                        } else {
                            var H = w.cx,
                                Q = w.cy,
                                F = w.radius,
                                L = w.startAngle,
                                ae = w.endAngle,
                                re = Ke(H, Q, F, L),
                                ee = Ke(H, Q, F, ae);
                            return {
                                points: [re, ee],
                                cx: H,
                                cy: Q,
                                radius: F,
                                startAngle: L,
                                endAngle: ae
                            }
                        } return [{
                        x: E,
                        y: k
                    }, {
                        x: N,
                        y: I
                    }]
                }
            }, {
                key: "inRange",
                value: function(b, _) {
                    var w = this.props.layout;
                    if (w === "horizontal" || w === "vertical") {
                        var A = this.state.offset,
                            E = b >= A.left && b <= A.left + A.width && _ >= A.top && _ <= A.top + A.height;
                        return E ? {
                            x: b,
                            y: _
                        } : null
                    }
                    var k = this.state,
                        N = k.angleAxisMap,
                        I = k.radiusAxisMap;
                    if (N && I) {
                        var T = er(N);
                        return bd({
                            x: b,
                            y: _
                        }, T)
                    }
                    return null
                }
            }, {
                key: "parseEventsOfWrapper",
                value: function() {
                    var b = this.props.children,
                        _ = this.getTooltipEventType(),
                        w = Ut(b, zr.displayName),
                        A = {};
                    w && _ === "axis" && (w.props.trigger === "click" ? A = {
                        onClick: this.handleClick
                    } : A = {
                        onMouseEnter: this.handleMouseEnter,
                        onMouseMove: this.handleMouseMove,
                        onMouseLeave: this.handleMouseLeave,
                        onTouchMove: this.handleTouchMove,
                        onTouchStart: this.handleTouchStart,
                        onTouchEnd: this.handleTouchEnd
                    });
                    var E = Zi(this.props, this.handleOuterEvent);
                    return K(K({}, E), A)
                }
            }, {
                key: "addListener",
                value: function() {
                    at.on(Ss, this.handleReceiveSyncEvent), at.setMaxListeners && at._maxListeners && at.setMaxListeners(at._maxListeners + 1)
                }
            }, {
                key: "removeListener",
                value: function() {
                    at.removeListener(Ss, this.handleReceiveSyncEvent), at.setMaxListeners && at._maxListeners && at.setMaxListeners(at._maxListeners - 1)
                }
            }, {
                key: "triggerSyncEvent",
                value: function(b) {
                    var _ = this.props.syncId;
                    pe(_) || at.emit(Ss, _, this.uniqueChartId, b)
                }
            }, {
                key: "applySyncEvent",
                value: function(b) {
                    var _ = this.props,
                        w = _.layout,
                        A = _.syncMethod,
                        E = this.state.updateId,
                        k = b.dataStartIndex,
                        N = b.dataEndIndex;
                    if (!pe(b.dataStartIndex) || !pe(b.dataEndIndex)) this.setState(K({
                        dataStartIndex: k,
                        dataEndIndex: N
                    }, h({
                        props: this.props,
                        dataStartIndex: k,
                        dataEndIndex: N,
                        updateId: E
                    }, this.state)));
                    else if (pe(b.activeTooltipIndex)) this.setState(b);
                    else {
                        var I = b.chartX,
                            T = b.chartY,
                            M = b.activeTooltipIndex,
                            S = this.state,
                            D = S.offset,
                            z = S.tooltipTicks;
                        if (!D) return;
                        if (typeof A == "function") M = A(z, b);
                        else if (A === "value") {
                            M = -1;
                            for (var B = 0; B < z.length; B++)
                                if (z[B].value === b.activeLabel) {
                                    M = B;
                                    break
                                }
                        }
                        var q = K(K({}, D), {}, {
                                x: D.left,
                                y: D.top
                            }),
                            H = Math.min(I, q.x + q.width),
                            Q = Math.min(T, q.y + q.height),
                            F = z[M] && z[M].value,
                            L = Dg(this.state, this.props.data, M),
                            ae = z[M] ? {
                                x: w === "horizontal" ? z[M].coordinate : H,
                                y: w === "horizontal" ? Q : z[M].coordinate
                            } : Rg;
                        this.setState(K(K({}, b), {}, {
                            activeLabel: F,
                            activeCoordinate: ae,
                            activePayload: L,
                            activeTooltipIndex: M
                        }))
                    }
                }
            }, {
                key: "filterFormatItem",
                value: function(b, _, w) {
                    for (var A = this.state.formattedGraphicalItems, E = 0, k = A.length; E < k; E++) {
                        var N = A[E];
                        if (N.item === b || N.props.key === b.key || _ === sr(N.item.type) && w === N.childIndex) return N
                    }
                    return null
                }
            }, {
                key: "renderAxis",
                value: function(b, _, w, A) {
                    var E = this.props,
                        k = E.width,
                        N = E.height;
                    return R.exports.createElement(wr, {
                        ...b,
                        className: "recharts-".concat(b.axisType, " ").concat(b.axisType),
                        key: _.key || "".concat(w, "-").concat(A),
                        viewBox: {
                            x: 0,
                            y: 0,
                            width: k,
                            height: N
                        },
                        ticksGenerator: this.axesTicksGenerator
                    })
                }
            }, {
                key: "renderClipPath",
                value: function() {
                    var b = this.clipPathId,
                        _ = this.state.offset,
                        w = _.left,
                        A = _.top,
                        E = _.height,
                        k = _.width;
                    return C("defs", {
                        children: C("clipPath", {
                            id: b,
                            children: C("rect", {
                                x: w,
                                y: A,
                                height: E,
                                width: k
                            })
                        })
                    })
                }
            }, {
                key: "getXScales",
                value: function() {
                    var b = this.state.xAxisMap;
                    return b ? Object.entries(b).reduce(function(_, w) {
                        var A = Jd(w, 2),
                            E = A[0],
                            k = A[1];
                        return K(K({}, _), {}, ot({}, E, k.scale))
                    }, {}) : null
                }
            }, {
                key: "getYScales",
                value: function() {
                    var b = this.state.yAxisMap;
                    return b ? Object.entries(b).reduce(function(_, w) {
                        var A = Jd(w, 2),
                            E = A[0],
                            k = A[1];
                        return K(K({}, _), {}, ot({}, E, k.scale))
                    }, {}) : null
                }
            }, {
                key: "getXScaleByAxisId",
                value: function(b) {
                    var _, w;
                    return (_ = this.state.xAxisMap) === null || _ === void 0 || (w = _[b]) === null || w === void 0 ? void 0 : w.scale
                }
            }, {
                key: "getYScaleByAxisId",
                value: function(b) {
                    var _, w;
                    return (_ = this.state.yAxisMap) === null || _ === void 0 || (w = _[b]) === null || w === void 0 ? void 0 : w.scale
                }
            }, {
                key: "getItemByXY",
                value: function(b) {
                    var _ = this.state.formattedGraphicalItems;
                    if (_ && _.length)
                        for (var w = 0, A = _.length; w < A; w++) {
                            var E = _[w],
                                k = E.props,
                                N = E.item,
                                I = sr(N.type);
                            if (I === "Bar") {
                                var T = (k.data || []).find(function(S) {
                                    return $4(b, S)
                                });
                                if (T) return {
                                    graphicalItem: E,
                                    payload: T
                                }
                            } else if (I === "RadialBar") {
                                var M = (k.data || []).find(function(S) {
                                    return bd(b, S)
                                });
                                if (M) return {
                                    graphicalItem: E,
                                    payload: M
                                }
                            }
                        }
                    return null
                }
            }, {
                key: "render",
                value: function() {
                    var b = this;
                    if (!wh(this)) return null;
                    var _ = this.props,
                        w = _.children,
                        A = _.className,
                        E = _.width,
                        k = _.height,
                        N = _.style,
                        I = _.compact,
                        T = _.title,
                        M = _.desc,
                        S = Qd(_, ["children", "className", "width", "height", "style", "compact", "title", "desc"]),
                        D = Ae(S),
                        z = {
                            CartesianGrid: {
                                handler: this.renderGrid,
                                once: !0
                            },
                            ReferenceArea: {
                                handler: this.renderReferenceElement
                            },
                            ReferenceLine: {
                                handler: this.renderReferenceElement
                            },
                            ReferenceDot: {
                                handler: this.renderReferenceElement
                            },
                            XAxis: {
                                handler: this.renderXAxis
                            },
                            YAxis: {
                                handler: this.renderYAxis
                            },
                            Brush: {
                                handler: this.renderBrush,
                                once: !0
                            },
                            Bar: {
                                handler: this.renderGraphicChild
                            },
                            Line: {
                                handler: this.renderGraphicChild
                            },
                            Area: {
                                handler: this.renderGraphicChild
                            },
                            Radar: {
                                handler: this.renderGraphicChild
                            },
                            RadialBar: {
                                handler: this.renderGraphicChild
                            },
                            Scatter: {
                                handler: this.renderGraphicChild
                            },
                            Pie: {
                                handler: this.renderGraphicChild
                            },
                            Funnel: {
                                handler: this.renderGraphicChild
                            },
                            Tooltip: {
                                handler: this.renderCursor,
                                once: !0
                            },
                            PolarGrid: {
                                handler: this.renderPolarGrid,
                                once: !0
                            },
                            PolarAngleAxis: {
                                handler: this.renderPolarAxis
                            },
                            PolarRadiusAxis: {
                                handler: this.renderPolarAxis
                            },
                            Customized: {
                                handler: this.renderCustomized
                            }
                        };
                    if (I) return te(Ds, {
                        ...D,
                        width: E,
                        height: k,
                        title: T,
                        desc: M,
                        children: [this.renderClipPath(), Oh(w, z)]
                    });
                    var B = this.parseEventsOfWrapper();
                    return te("div", {
                        className: Ne("recharts-wrapper", A),
                        style: K({
                            position: "relative",
                            cursor: "default",
                            width: E,
                            height: k
                        }, N),
                        ...B,
                        ref: function(H) {
                            b.container = H
                        },
                        children: [te(Ds, {
                            ...D,
                            width: E,
                            height: k,
                            title: T,
                            desc: M,
                            children: [this.renderClipPath(), Oh(w, z)]
                        }), this.renderLegend(), this.renderTooltip()]
                    })
                }
            }]), x
        }(R.exports.Component), r.displayName = i, r.defaultProps = K({
            layout: "horizontal",
            stackOffset: "none",
            barCategoryGap: "10%",
            barGap: 4,
            margin: {
                top: 5,
                right: 5,
                bottom: 5,
                left: 5
            },
            reverseStackOrder: !1,
            syncMethod: "index"
        }, m), r.getDerivedStateFromProps = function(v, g) {
            var x = v.data,
                y = v.children,
                b = v.width,
                _ = v.height,
                w = v.layout,
                A = v.stackOffset,
                E = v.margin;
            if (pe(g.updateId)) {
                var k = ap(v);
                return K(K(K({}, k), {}, {
                    updateId: 0
                }, h(K(K({
                    props: v
                }, k), {}, {
                    updateId: 0
                }), g)), {}, {
                    prevData: x,
                    prevWidth: b,
                    prevHeight: _,
                    prevLayout: w,
                    prevStackOffset: A,
                    prevMargin: E,
                    prevChildren: y
                })
            }
            if (x !== g.prevData || b !== g.prevWidth || _ !== g.prevHeight || w !== g.prevLayout || A !== g.prevStackOffset || !qr(E, g.prevMargin)) {
                var N = ap(v),
                    I = {
                        chartX: g.chartX,
                        chartY: g.chartY,
                        isTooltipActive: g.isTooltipActive
                    },
                    T = K(K({}, ip(g, x, w)), {}, {
                        updateId: g.updateId + 1
                    }),
                    M = K(K(K({}, N), I), T);
                return K(K(K({}, M), h(K({
                    props: v
                }, M), g)), {}, {
                    prevData: x,
                    prevWidth: b,
                    prevHeight: _,
                    prevLayout: w,
                    prevStackOffset: A,
                    prevMargin: E,
                    prevChildren: y
                })
            }
            if (!fv(y, g.prevChildren)) {
                var S = !pe(x),
                    D = S ? g.updateId : g.updateId + 1;
                return K(K({
                    updateId: D
                }, h(K(K({
                    props: v
                }, g), {}, {
                    updateId: D
                }), g)), {}, {
                    prevChildren: y
                })
            }
            return null
        }, r.renderActiveDot = function(v, g) {
            var x;
            return R.exports.isValidElement(v) ? x = R.exports.cloneElement(v, g) : me(v) ? x = v(g) : x = C(lc, {
                ...g
            }), C(tt, {
                className: "recharts-active-dot",
                children: x
            }, g.key)
        }, n
    },
    w8 = _8({
        chartName: "AreaChart",
        GraphicalChild: fr,
        axisComponents: [{
            axisType: "xAxis",
            AxisComp: dc
        }, {
            axisType: "yAxis",
            AxisComp: pc
        }],
        formatAxisMap: W6
    });

function Ju(e) {
    return nt({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M20 7h-4V4c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H4c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9c0-1.103-.897-2-2-2zM4 11h4v8H4v-8zm6-1V4h4v15h-4v-9zm10 9h-4V9h4v10z"
            },
            child: []
        }]
    })(e)
}

function Fa(e) {
    return nt({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M7 7h10v2H7zm0 4h7v2H7z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"
            },
            child: []
        }]
    })(e)
}

function S8(e) {
    return nt({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "circle",
            attr: {
                cx: "7.499",
                cy: "9.5",
                r: "1.5"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "m10.499 14-1.5-2-3 4h12l-4.5-6z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-16 14V6h16l.002 12H3.999z"
            },
            child: []
        }]
    })(e)
}

function O8(e) {
    return nt({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M18 7c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-3.333L22 17V7l-4 3.333V7zm-1.998 10H4V7h12l.001 4.999L16 12l.001.001.001 4.999z"
            },
            child: []
        }]
    })(e)
}


// function GetRecapImage({
//     profile: r,
//     post: e
// }) {
//     // Initial render with loading state
//     const loadingView = te("div", {
//         className: "mx-auto max-w-7xl px-4 md:px-6 lg:px-8",
//         children: [
//             C("h3", {
//                 className: "text-left text-xl font-medium leading-6 text-white mb-6",
//                 children: "Summary Images"
//             }),
//             C("div", {
//                 className: "flex items-center justify-center h-64",
//                 children: C("p", {
//                     className: "text-white",
//                     children: "Loading images..."
//                 })
//             })
//         ]
//     });

//     const downloadJSON = (data, filename) => {
//         const blob = new Blob([JSON.stringify(data, null, 2)], {
//             type: 'application/json'
//         });
//         const url = URL.createObjectURL(blob);
//         const a = document.createElement('a');
//         a.href = url;
//         a.download = filename;
//         document.body.appendChild(a);
//         a.click();
//         document.body.removeChild(a);
//         URL.revokeObjectURL(url);
//     }

//     downloadJSON({
//         profile: r,
//         posts: e
//     }, 'source.json');

//     let imageUrls = []; // Define imageUrls as a global or higher-scoped variable


//     console.log("reach here 1");

//     // Make API call
//     fetch('http://107.173.2.166/generate_recap', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             mode: 'cors',
//             body: JSON.stringify({
//                 profile: r,
//                 posts: e,
//             }),
//         })
//         .then(response => response.json())
//         .then(data => {
//             // Ensure the response is an object with the expected structure
//             if (!data || typeof data !== 'object' || !Array.isArray(data.summary)) {
//                 console.error('Unexpected response format:', data);
//                 throw new TypeError('Server did not return a valid "summary" array');
//             }

//             // Extract the array of base64 images
//             const base64Images = data.summary;

//             // Convert base64 strings to data URLs
//             imageUrls = base64Images.map(base64String =>
//                 `data:image/png;base64,${base64String}`
//             );

//             console.log("reach here 2");
//             // console.log('Image URLs:', imageUrls);
//             return imageUrls;
//         })
//         .catch(error => {
//             console.error('Error fetching images:', error);
//             imageUrls = ['/assets/img/error.jpg'];
//             // Return a fallback array of placeholder images
//             return imageUrls;
//         });

//     console.log("reach here 3");
//     // imageUrls = ['/assets/img/error.jpg'];
//     imageUrls.forEach((imageUrl) => {
//         console.log(imageUrl);
//     });
    
//     // Return the initial loading view
//     return te("div", {
//         className: "mx-auto max-w-7xl px-4 md:px-6 lg:px-8",
//         children: [
//             te("div", {
//                 className: "flex justify-between items-center mb-6",
//                 children: [
//                     C("h3", {
//                         className: "text-left text-xl font-medium leading-6 text-white",
//                         children: "Summary Images"
//                     }),
//                     te("button", {
//                         onClick: () => {
//                             const tweetText = encodeURIComponent("Check out my Twitter analytics summary!");
//                             const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
//                             window.open(twitterUrl, '_blank', 'width=550,height=420');
//                         },
//                         className: "inline-flex items-center px-4 py-2 rounded-md bg-[#1DA1F2] hover:bg-[#1a8cd8] transition-colors text-white font-medium text-sm",
//                         children: [
//                             C("svg", {
//                                 className: "w-5 h-5 mr-2",
//                                 fill: "currentColor",
//                                 viewBox: "0 0 24 24",
//                                 children: C("path", {
//                                     d: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
//                                 })
//                             }),
//                             "Share on Twitter"
//                         ]
//                     })
//                 ]
//             }),
//             C("div", {
//                 className: "grid grid-cols-2 md:grid-cols-3 gap-4",
//                 children: imageUrls.map((imageUrl, index) =>
//                     C("div", {
//                         key: index,
//                         className: "relative aspect-square rounded-lg overflow-hidden bg-black-200",
//                         children: C("img", {
//                             src: imageUrl,
//                             alt: `Summary ${index + 1}`,
//                             className: "w-full h-full object-cover"
//                         })
//                     })
//                 )
//             })
//         ]
//     });
// }


function GetRecapImage({ profile: r, post: e }) {
    // Initial render with loading state
    const loadingView = te("div", {
        className: "mx-auto max-w-7xl px-4 md:px-6 lg:px-8",
        children: [
            C("h3", {
                className: "text-left text-xl font-medium leading-6 text-white mb-6",
                children: "Summary Images"
            }),
            C("div", {
                className: "flex items-center justify-center h-64",
                children: C("p", {
                    className: "text-white",
                    children: "Loading images..."
                })
            })
        ]
    });

    const downloadJSON = (data, filename) => {
        const blob = new Blob([JSON.stringify(data, null, 2)], {
            type: 'application/json'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    downloadJSON({ profile: r, posts: e }, 'source.json');

    console.log("reach here 1");

    let imageUrls = [];

    // Handle the asynchronous `fetch` using an immediately invoked function expression (IIFE)
    (async () => {
        try {
            // Fetch data
            const response = await fetch('http://107.173.2.166/generate_recap', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'cors',
                body: JSON.stringify({ profile: r, posts: e }),
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }

            const data = await response.json();

            // Validate response format
            if (!data || typeof data !== 'object' || !Array.isArray(data.summary)) {
                console.error('Unexpected response format:', data);
                throw new TypeError('Server did not return a valid "summary" array');
            }

            // Populate imageUrls
            imageUrls = data.summary.map(base64String =>
                `data:image/png;base64,${base64String}`
            );

            console.log("reach here 2");
        } catch (error) {
            console.error('Error fetching images:', error);
            imageUrls = ['/assets/img/error.jpg'];
        }

        // Trigger a re-render or update state if necessary
        // Here, you would update the state in a React component, for example.
    })();

    console.log("reach here 3");

    imageUrls.forEach(imageUrl => console.log(imageUrl));
    // Return the initial loading view
    return te("div", {
        className: "mx-auto max-w-7xl px-4 md:px-6 lg:px-8",
        children: [
            te("div", {
                className: "flex justify-between items-center mb-6",
                children: [
                    C("h3", {
                        className: "text-left text-xl font-medium leading-6 text-white",
                        children: "Summary Images"
                    }),
                ]
            }),
            C("div", {
                className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                children: imageUrls.map((imageUrl, index) =>
                    C("div", {
                        key: index,
                        className: "relative aspect-square rounded-lg overflow-hidden bg-black-200",
                        children: C("img", {
                            src: imageUrl,
                            alt: `Summary ${index + 1}`,
                            className: "w-full h-full object-cover"
                        })
                    })
                )
            })
        ]
    });
}


function A8({
    post: e
}) {
    let t = 0,
        r = 0,
        n = 0;
    e.forEach(l => {
        const {
            like: c,
            reply: f,
            retweet: d
        } = l;
        t += c ? parseInt(c) : 0, r += d ? parseInt(d) : 0, n += f ? parseInt(f) : 0
    });
    const i = e.length > 0 ? e.length : 1,
        a = e.map(l => ({
            name: Or(l.time).format("DD-MM-YYYY"),
            uv: l.like ? parseInt(l.like) : 0
        })),
        o = e.map(l => ({
            name: Or(l.time).format("DD-MM-YYYY"),
            uv: l.retweet ? parseInt(l.retweet) : 0
        })),
        s = e.map(l => ({
            name: Or(l.time).format("DD-MM-YYYY"),
            uv: l.reply ? parseInt(l.reply) : 0
        })),
        u = [{
            name: "Average Likes",
            icon: C(Xi, {
                className: "mr-2 -mt-1 inline-block h-5 align-middle"
            }),
            stat: `${Math.round(t/i*10)/10} Likes`,
            color: "colorLike",
            borderColor: "#CB41FD",
            change: "+20/Years",
            data: a
        }, {
            name: "Average Retweets",
            icon: C(Ki, {
                className: "mr-2 -mt-1 inline-block h-5 align-middle"
            }),
            stat: `${Math.round(r/i*10)/10} Retweets`,
            color: "colorRetweet",
            borderColor: "#C48353",
            change: "+20/Years",
            data: o
        }, {
            name: "Average Replies",
            icon: C(Fa, {
                className: "mr-2 -mt-1 inline-block h-5 align-middle"
            }),
            stat: `${Math.round(n/i*10)/10} Replies`,
            color: "colorComment",
            borderColor: "#8CF25F",
            change: "+20/Years",
            data: s
        }];
    return te("div", {
        className: "mx-auto max-w-7xl px-4 md:px-6 lg:px-8",
        children: [C("h3", {
            className: "my-10 text-left text-xl font-medium leading-6 text-white",
            children: "Account Data"
        }), C("dl", {
            className: "mt-5 grid grid-cols-1 gap-5 md:grid-cols-3",
            children: u.map(l => te("div", {
                className: "flex h-52 flex-col overflow-hidden rounded-lg bg-black-200 text-left text-white shadow",
                children: [te("div", {
                    className: "px-4 pt-5 md:p-6 md:pb-0",
                    children: [te("div", {
                        className: "grid grid-cols-2",
                        children: [C("dt", {
                            className: "truncate text-sm font-medium",
                            children: l.name
                        }), C("dt", {
                            className: "truncate text-right text-sm font-medium text-positve-green"
                        })]
                    }), C("div", {
                        className: "mt-1 text-2xl font-semibold tracking-tight",
                        children: te(sn, {
                            children: [l.icon, " ", l.stat]
                        })
                    })]
                }), C("div", {
                    className: "flex-grow",
                    children: C(B3, {
                        children: te(w8, {
                            data: l.data,
                            margin: {
                                top: 0,
                                right: 0,
                                left: 0,
                                bottom: 0
                            },
                            children: [te("defs", {
                                children: [te("linearGradient", {
                                    id: "colorLike",
                                    x1: "0",
                                    y1: "0",
                                    x2: "1",
                                    y2: "0",
                                    children: [C("stop", {
                                        offset: "5%",
                                        stopColor: "#CB41FD",
                                        stopOpacity: 1
                                    }), C("stop", {
                                        offset: "95%",
                                        stopColor: "#3BBAE0",
                                        stopOpacity: 1
                                    })]
                                }), te("linearGradient", {
                                    id: "colorRetweet",
                                    x1: "0",
                                    y1: "0",
                                    x2: "1",
                                    y2: "0",
                                    children: [C("stop", {
                                        offset: "5%",
                                        stopColor: "#FFA72F",
                                        stopOpacity: 1
                                    }), C("stop", {
                                        offset: "95%",
                                        stopColor: "#DD1C1C",
                                        stopOpacity: 1
                                    })]
                                }), te("linearGradient", {
                                    id: "colorComment",
                                    x1: "0",
                                    y1: "0",
                                    x2: "1",
                                    y2: "0",
                                    children: [C("stop", {
                                        offset: "5%",
                                        stopColor: "#8CF25F",
                                        stopOpacity: 1
                                    }), C("stop", {
                                        offset: "95%",
                                        stopColor: "#1DFFB1",
                                        stopOpacity: 1
                                    })]
                                })]
                            }), C(fr, {
                                type: "monotone",
                                dataKey: "uv",
                                stroke: l.borderColor,
                                fill: `url(#${l.color})`,
                                strokeWidth: 0,
                                fillOpacity: "1"
                            })]
                        })
                    })
                })]
            }, l.name))
        })]
    })
}

function k8({
    post: e
}) {
    const t = R.exports.useMemo(() => {
        let r = e.map(n => {
            const i = n.like !== "" ? n.like : "0",
                a = n.reply !== "" ? n.reply : "0",
                o = n.retweet !== "" ? n.retweet : "0",
                s = n.spread !== "" ? n.spread : "0";
            return {
                like: i,
                reply: a,
                retweet: o,
                spread: s,
                time: n.time,
                content: n.content
            }
        });
        return r = r.sort((n, i) => {
            const a = parseInt(n.like) + parseInt(n.reply) * 1.5 + parseInt(n.retweet) * 2,
                o = parseInt(i.like) + parseInt(i.reply) * 1.5 + parseInt(i.retweet) * 2;
            return a > o ? -1 : 1
        }), r.slice(0, 5)
    }, [e]);
    return te("div", {
        className: "",
        children: [C("h3", {
            className: "my-10 text-left text-xl font-medium leading-6 text-white",
            children: "Top Score Tweets"
        }), C("div", {
            className: "mt-8 flex h-72 flex-col rounded-lg bg-black-200",
            children: C("div", {
                className: "overflow-x-auto",
                children: C("div", {
                    className: "inline-block w-full py-2 align-middle",
                    children: C("div", {
                        className: "overflow-hidden px-8 shadow-sm ring-1 ring-black ring-opacity-5",
                        children: te("table", {
                            className: "w-full  divide-y divide-blue-200 text-white",
                            children: [C("thead", {
                                children: te("tr", {
                                    children: [C("th", {
                                        scope: "col",
                                        className: "w-1/5 py-3.5 text-left text-sm font-medium",
                                        children: "Post Date"
                                    }), C("th", {
                                        scope: "col",
                                        className: "w-3/6 py-3.5 text-left text-sm font-medium",
                                        children: "Post Content"
                                    }), C("th", {
                                        scope: "col",
                                        className: "w-2/6 py-3.5 text-right text-sm font-medium",
                                        children: "Interaction"
                                    })]
                                })
                            }), C("tbody", {
                                className: "divide-y divide-blue-200",
                                children: t.map(r => te("tr", {
                                    children: [C("td", {
                                        className: "w-1/6 whitespace-normal py-4 text-left text-sm font-medium",
                                        children: Or(r.time).format("DD-MM-YYYY")
                                    }), C("td", {
                                        className: "w-3/6 whitespace-normal py-4 text-left text-sm",
                                        children: r.content
                                    }), te("td", {
                                        className: "w-2/6 whitespace-normal py-4 text-right text-sm",
                                        children: [te("span", {
                                            className: "text-heart-red",
                                            children: [C(Xi, {
                                                className: "mr-1 -mt-1 inline-block h-3 align-middle"
                                            }), " ", r.like ? r.like : 0, " "]
                                        }), te("span", {
                                            className: "text-retweet-blue",
                                            children: [C(Ki, {
                                                className: "mx-1 -mt-1 inline-block h-3 align-middle"
                                            }), " ", r.retweet ? r.retweet : 0, " "]
                                        }), te("span", {
                                            className: "text-comment-green",
                                            children: [C(Fa, {
                                                className: "mx-1 -mt-1 inline-block h-3 align-middle"
                                            }), " ", r.reply ? r.reply : 0]
                                        }), te("span", {
                                            className: "text-purple-700",
                                            children: [C(Ju, {
                                                className: "mx-1 -mt-1 inline-block h-3 align-middle"
                                            }), " ", r.spread ? r.spread : 0]
                                        })]
                                    })]
                                }, r.content))
                            })]
                        })
                    })
                })
            })
        })]
    })
}

function E8(e) {
    return nt({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"
            },
            child: []
        }]
    })(e)
}

function T8(e) {
    return nt({
        tag: "svg",
        attr: {
            version: "1.2",
            baseProfile: "tiny",
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M8.586 5.586c-.781.781-.781 2.047 0 2.828l3.585 3.586-3.585 3.586c-.781.781-.781 2.047 0 2.828.39.391.902.586 1.414.586s1.024-.195 1.414-.586l6.415-6.414-6.415-6.414c-.78-.781-2.048-.781-2.828 0z"
            },
            child: []
        }]
    })(e)
}

function C8({
    post: e,
    onSelectTab: t
}) {
    let r = 0,
        n = 0,
        i = 0;
    e.forEach(o => {
        o.postType === "text" && r++, o.postType === "image" && n++, o.postType === "video" && i++
    });
    const a = [{
        name: "Text Content",
        handle: `${r} Tweets`,
        postType: "text",
        icon: C(E8, {
            className: "absolute top-1/2 left-1/2 h-2/5 w-2/5 -translate-y-1/2 -translate-x-1/2 text-white"
        }),
        bgColor: "bg-gradient-to-r from-amber-400 to-amber-700"
    }, {
        name: "Image Content",
        handle: `${n} Tweets`,
        postType: "image",
        icon: C(S8, {
            className: "absolute top-1/2 left-1/2 h-2/5 w-2/5 -translate-y-1/2 -translate-x-1/2 text-white"
        }),
        bgColor: "bg-gradient-to-r from-lime-400 to-green-500"
    }, {
        name: "Video Content",
        handle: `${i} Tweets`,
        postType: "video",
        icon: C(O8, {
            className: "absolute top-1/2 left-1/2 h-2/5 w-2/5 -translate-y-1/2 -translate-x-1/2 text-white"
        }),
        bgColor: "bg-gradient-to-r from-cyan-500 to-blue-500"
    }];
    return te("div", {
        className: "",
        children: [C("h3", {
            className: "my-10 text-left text-xl font-medium leading-6 text-white",
            children: "Tweets Type"
        }), C("div", {
            className: "mt-8 flex h-72 flex-col rounded-lg bg-black-200 p-6",
            children: C("div", {
                className: "flow-root",
                children: C("ul", {
                    role: "list",
                    className: "-my-5 divide-y divide-blue-200",
                    children: a.map(o => C("li", {
                        onClick: () => t(o.postType),
                        className: "cursor-pointer py-6",
                        children: te("div", {
                            className: "flex items-center space-x-4",
                            children: [C("div", {
                                className: "flex-shrink-0",
                                children: C("div", {
                                    className: kr("relative h-12 w-12 rounded-lg", o.bgColor),
                                    children: o.icon
                                })
                            }), te("div", {
                                className: "min-w-0 flex-1",
                                children: [C("p", {
                                    className: "truncate text-left text-sm font-medium text-white",
                                    children: o.name
                                }), C("p", {
                                    className: "truncate text-left text-sm text-white",
                                    children: o.handle
                                })]
                            }), C("div", {
                                children: C("a", {
                                    href: "#",
                                    className: "inline-flex items-center px-2.5 py-0.5 text-sm text-white",
                                    children: C(T8, {})
                                })
                            })]
                        })
                    }, o.name))
                })
            })
        })]
    })
}

function P8({
    onChangeValue: e,
    value: t,
    onChangeFilter: r,
    filter: n,
    onChangeDate: i,
    filterDate: a
}) {
    const o = s => {
        (s === "content" || s === "postType") && r(s)
    };
    return C("div", {
        className: "rounded-lg bg-black-200",
        children: te("div", {
            className: "mx-auto flex max-w-7xl justify-between py-4 px-4 sm:px-6 lg:px-8",
            children: [te("div", {
                className: "flex max-w-xl flex-row items-center",
                children: [C("h2", {
                    className: "mr-8 text-xl font-bold tracking-tight text-white",
                    children: "Search"
                }), C("div", {
                    className: "flex-grow",
                    children: te("div", {
                        className: "relative mt-1 rounded-lg shadow-sm",
                        children: [C("div", {
                            className: "pointer-events-none absolute inset-y-0 left-0 mr-4 flex items-center px-4",
                            children: C("span", {
                                className: "text-white sm:text-sm",
                                children: C(a1, {})
                            })
                        }), C("input", {
                            type: "text",
                            className: "block w-full rounded-lg bg-black-300 py-2 pl-12 pr-12 text-sm text-white focus:border-none focus:outline-none",
                            placeholder: "Search",
                            onChange: s => e(s.target.value),
                            value: t
                        }), te("div", {
                            className: "absolute inset-y-0 right-0 flex items-center",
                            children: [C("label", {
                                htmlFor: "currency",
                                className: "sr-only",
                                children: "Filter Type"
                            }), te("select", {
                                onChange: s => o(s.target.value),
                                value: n,
                                className: "focus:ring-none mr-4 h-full rounded-md border-transparent bg-transparent py-0 pl-2 text-white focus:border-none focus:outline-0 sm:text-sm",
                                children: [C("option", {
                                    value: "postType",
                                    children: "Type"
                                }), C("option", {
                                    value: "content",
                                    children: "Content"
                                })]
                            })]
                        })]
                    })
                })]
            }), te("div", {
                className: "flex w-full max-w-xs flex-row items-center",
                children: [C(n1, {
                    className: "mx-4 h-4 w-4 text-white"
                }), C("input", {
                    type: "date",
                    onChange: s => i(s.target.value),
                    value: a,
                    className: "block w-full rounded-lg bg-black-300 py-2 px-2 text-sm text-white focus:border-none focus:outline-none"
                })]
            })]
        })
    })
}
var Lg = {
    exports: {}
};
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
(function(e, t) {
    (function(r) {
        e.exports = r()
    })(function() {
        return function r(n, i, a) {
            function o(l, c) {
                if (!i[l]) {
                    if (!n[l]) {
                        var f = typeof Fn == "function" && Fn;
                        if (!c && f) return f(l, !0);
                        if (s) return s(l, !0);
                        var d = new Error("Cannot find module '" + l + "'");
                        throw d.code = "MODULE_NOT_FOUND", d
                    }
                    var m = i[l] = {
                        exports: {}
                    };
                    n[l][0].call(m.exports, function(p) {
                        var h = n[l][1][p];
                        return o(h || p)
                    }, m, m.exports, r, n, i, a)
                }
                return i[l].exports
            }
            for (var s = typeof Fn == "function" && Fn, u = 0; u < a.length; u++) o(a[u]);
            return o
        }({
            1: [function(r, n, i) {
                var a = r("./utils"),
                    o = r("./support"),
                    s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                i.encode = function(u) {
                    for (var l, c, f, d, m, p, h, v = [], g = 0, x = u.length, y = x, b = a.getTypeOf(u) !== "string"; g < u.length;) y = x - g, f = b ? (l = u[g++], c = g < x ? u[g++] : 0, g < x ? u[g++] : 0) : (l = u.charCodeAt(g++), c = g < x ? u.charCodeAt(g++) : 0, g < x ? u.charCodeAt(g++) : 0), d = l >> 2, m = (3 & l) << 4 | c >> 4, p = 1 < y ? (15 & c) << 2 | f >> 6 : 64, h = 2 < y ? 63 & f : 64, v.push(s.charAt(d) + s.charAt(m) + s.charAt(p) + s.charAt(h));
                    return v.join("")
                }, i.decode = function(u) {
                    var l, c, f, d, m, p, h = 0,
                        v = 0,
                        g = "data:";
                    if (u.substr(0, g.length) === g) throw new Error("Invalid base64 input, it looks like a data url.");
                    var x, y = 3 * (u = u.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
                    if (u.charAt(u.length - 1) === s.charAt(64) && y--, u.charAt(u.length - 2) === s.charAt(64) && y--, y % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
                    for (x = o.uint8array ? new Uint8Array(0 | y) : new Array(0 | y); h < u.length;) l = s.indexOf(u.charAt(h++)) << 2 | (d = s.indexOf(u.charAt(h++))) >> 4, c = (15 & d) << 4 | (m = s.indexOf(u.charAt(h++))) >> 2, f = (3 & m) << 6 | (p = s.indexOf(u.charAt(h++))), x[v++] = l, m !== 64 && (x[v++] = c), p !== 64 && (x[v++] = f);
                    return x
                }
            }, {
                "./support": 30,
                "./utils": 32
            }],
            2: [function(r, n, i) {
                var a = r("./external"),
                    o = r("./stream/DataWorker"),
                    s = r("./stream/Crc32Probe"),
                    u = r("./stream/DataLengthProbe");

                function l(c, f, d, m, p) {
                    this.compressedSize = c, this.uncompressedSize = f, this.crc32 = d, this.compression = m, this.compressedContent = p
                }
                l.prototype = {
                    getContentWorker: function() {
                        var c = new o(a.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new u("data_length")),
                            f = this;
                        return c.on("end", function() {
                            if (this.streamInfo.data_length !== f.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch")
                        }), c
                    },
                    getCompressedWorker: function() {
                        return new o(a.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression)
                    }
                }, l.createWorkerFrom = function(c, f, d) {
                    return c.pipe(new s).pipe(new u("uncompressedSize")).pipe(f.compressWorker(d)).pipe(new u("compressedSize")).withStreamInfo("compression", f)
                }, n.exports = l
            }, {
                "./external": 6,
                "./stream/Crc32Probe": 25,
                "./stream/DataLengthProbe": 26,
                "./stream/DataWorker": 27
            }],
            3: [function(r, n, i) {
                var a = r("./stream/GenericWorker");
                i.STORE = {
                    magic: "\0\0",
                    compressWorker: function() {
                        return new a("STORE compression")
                    },
                    uncompressWorker: function() {
                        return new a("STORE decompression")
                    }
                }, i.DEFLATE = r("./flate")
            }, {
                "./flate": 7,
                "./stream/GenericWorker": 28
            }],
            4: [function(r, n, i) {
                var a = r("./utils"),
                    o = function() {
                        for (var s, u = [], l = 0; l < 256; l++) {
                            s = l;
                            for (var c = 0; c < 8; c++) s = 1 & s ? 3988292384 ^ s >>> 1 : s >>> 1;
                            u[l] = s
                        }
                        return u
                    }();
                n.exports = function(s, u) {
                    return s !== void 0 && s.length ? a.getTypeOf(s) !== "string" ? function(l, c, f, d) {
                        var m = o,
                            p = d + f;
                        l ^= -1;
                        for (var h = d; h < p; h++) l = l >>> 8 ^ m[255 & (l ^ c[h])];
                        return -1 ^ l
                    }(0 | u, s, s.length, 0) : function(l, c, f, d) {
                        var m = o,
                            p = d + f;
                        l ^= -1;
                        for (var h = d; h < p; h++) l = l >>> 8 ^ m[255 & (l ^ c.charCodeAt(h))];
                        return -1 ^ l
                    }(0 | u, s, s.length, 0) : 0
                }
            }, {
                "./utils": 32
            }],
            5: [function(r, n, i) {
                i.base64 = !1, i.binary = !1, i.dir = !1, i.createFolders = !0, i.date = null, i.compression = null, i.compressionOptions = null, i.comment = null, i.unixPermissions = null, i.dosPermissions = null
            }, {}],
            6: [function(r, n, i) {
                var a = null;
                a = typeof Promise < "u" ? Promise : r("lie"), n.exports = {
                    Promise: a
                }
            }, {
                lie: 37
            }],
            7: [function(r, n, i) {
                var a = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u",
                    o = r("pako"),
                    s = r("./utils"),
                    u = r("./stream/GenericWorker"),
                    l = a ? "uint8array" : "array";

                function c(f, d) {
                    u.call(this, "FlateWorker/" + f), this._pako = null, this._pakoAction = f, this._pakoOptions = d, this.meta = {}
                }
                i.magic = "\b\0", s.inherits(c, u), c.prototype.processChunk = function(f) {
                    this.meta = f.meta, this._pako === null && this._createPako(), this._pako.push(s.transformTo(l, f.data), !1)
                }, c.prototype.flush = function() {
                    u.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0)
                }, c.prototype.cleanUp = function() {
                    u.prototype.cleanUp.call(this), this._pako = null
                }, c.prototype._createPako = function() {
                    this._pako = new o[this._pakoAction]({
                        raw: !0,
                        level: this._pakoOptions.level || -1
                    });
                    var f = this;
                    this._pako.onData = function(d) {
                        f.push({
                            data: d,
                            meta: f.meta
                        })
                    }
                }, i.compressWorker = function(f) {
                    return new c("Deflate", f)
                }, i.uncompressWorker = function() {
                    return new c("Inflate", {})
                }
            }, {
                "./stream/GenericWorker": 28,
                "./utils": 32,
                pako: 38
            }],
            8: [function(r, n, i) {
                function a(m, p) {
                    var h, v = "";
                    for (h = 0; h < p; h++) v += String.fromCharCode(255 & m), m >>>= 8;
                    return v
                }

                function o(m, p, h, v, g, x) {
                    var y, b, _ = m.file,
                        w = m.compression,
                        A = x !== l.utf8encode,
                        E = s.transformTo("string", x(_.name)),
                        k = s.transformTo("string", l.utf8encode(_.name)),
                        N = _.comment,
                        I = s.transformTo("string", x(N)),
                        T = s.transformTo("string", l.utf8encode(N)),
                        M = k.length !== _.name.length,
                        S = T.length !== N.length,
                        D = "",
                        z = "",
                        B = "",
                        q = _.dir,
                        H = _.date,
                        Q = {
                            crc32: 0,
                            compressedSize: 0,
                            uncompressedSize: 0
                        };
                    p && !h || (Q.crc32 = m.crc32, Q.compressedSize = m.compressedSize, Q.uncompressedSize = m.uncompressedSize);
                    var F = 0;
                    p && (F |= 8), A || !M && !S || (F |= 2048);
                    var L = 0,
                        ae = 0;
                    q && (L |= 16), g === "UNIX" ? (ae = 798, L |= function(ee, ye) {
                        var $e = ee;
                        return ee || ($e = ye ? 16893 : 33204), (65535 & $e) << 16
                    }(_.unixPermissions, q)) : (ae = 20, L |= function(ee) {
                        return 63 & (ee || 0)
                    }(_.dosPermissions)), y = H.getUTCHours(), y <<= 6, y |= H.getUTCMinutes(), y <<= 5, y |= H.getUTCSeconds() / 2, b = H.getUTCFullYear() - 1980, b <<= 4, b |= H.getUTCMonth() + 1, b <<= 5, b |= H.getUTCDate(), M && (z = a(1, 1) + a(c(E), 4) + k, D += "up" + a(z.length, 2) + z), S && (B = a(1, 1) + a(c(I), 4) + T, D += "uc" + a(B.length, 2) + B);
                    var re = "";
                    return re += `
\0`, re += a(F, 2), re += w.magic, re += a(y, 2), re += a(b, 2), re += a(Q.crc32, 4), re += a(Q.compressedSize, 4), re += a(Q.uncompressedSize, 4), re += a(E.length, 2), re += a(D.length, 2), {
                        fileRecord: f.LOCAL_FILE_HEADER + re + E + D,
                        dirRecord: f.CENTRAL_FILE_HEADER + a(ae, 2) + re + a(I.length, 2) + "\0\0\0\0" + a(L, 4) + a(v, 4) + E + D + I
                    }
                }
                var s = r("../utils"),
                    u = r("../stream/GenericWorker"),
                    l = r("../utf8"),
                    c = r("../crc32"),
                    f = r("../signature");

                function d(m, p, h, v) {
                    u.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = p, this.zipPlatform = h, this.encodeFileName = v, this.streamFiles = m, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = []
                }
                s.inherits(d, u), d.prototype.push = function(m) {
                    var p = m.meta.percent || 0,
                        h = this.entriesCount,
                        v = this._sources.length;
                    this.accumulate ? this.contentBuffer.push(m) : (this.bytesWritten += m.data.length, u.prototype.push.call(this, {
                        data: m.data,
                        meta: {
                            currentFile: this.currentFile,
                            percent: h ? (p + 100 * (h - v - 1)) / h : 100
                        }
                    }))
                }, d.prototype.openedSource = function(m) {
                    this.currentSourceOffset = this.bytesWritten, this.currentFile = m.file.name;
                    var p = this.streamFiles && !m.file.dir;
                    if (p) {
                        var h = o(m, p, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                        this.push({
                            data: h.fileRecord,
                            meta: {
                                percent: 0
                            }
                        })
                    } else this.accumulate = !0
                }, d.prototype.closedSource = function(m) {
                    this.accumulate = !1;
                    var p = this.streamFiles && !m.file.dir,
                        h = o(m, p, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                    if (this.dirRecords.push(h.dirRecord), p) this.push({
                        data: function(v) {
                            return f.DATA_DESCRIPTOR + a(v.crc32, 4) + a(v.compressedSize, 4) + a(v.uncompressedSize, 4)
                        }(m),
                        meta: {
                            percent: 100
                        }
                    });
                    else
                        for (this.push({
                                data: h.fileRecord,
                                meta: {
                                    percent: 0
                                }
                            }); this.contentBuffer.length;) this.push(this.contentBuffer.shift());
                    this.currentFile = null
                }, d.prototype.flush = function() {
                    for (var m = this.bytesWritten, p = 0; p < this.dirRecords.length; p++) this.push({
                        data: this.dirRecords[p],
                        meta: {
                            percent: 100
                        }
                    });
                    var h = this.bytesWritten - m,
                        v = function(g, x, y, b, _) {
                            var w = s.transformTo("string", _(b));
                            return f.CENTRAL_DIRECTORY_END + "\0\0\0\0" + a(g, 2) + a(g, 2) + a(x, 4) + a(y, 4) + a(w.length, 2) + w
                        }(this.dirRecords.length, h, m, this.zipComment, this.encodeFileName);
                    this.push({
                        data: v,
                        meta: {
                            percent: 100
                        }
                    })
                }, d.prototype.prepareNextSource = function() {
                    this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume()
                }, d.prototype.registerPrevious = function(m) {
                    this._sources.push(m);
                    var p = this;
                    return m.on("data", function(h) {
                        p.processChunk(h)
                    }), m.on("end", function() {
                        p.closedSource(p.previous.streamInfo), p._sources.length ? p.prepareNextSource() : p.end()
                    }), m.on("error", function(h) {
                        p.error(h)
                    }), this
                }, d.prototype.resume = function() {
                    return !!u.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0))
                }, d.prototype.error = function(m) {
                    var p = this._sources;
                    if (!u.prototype.error.call(this, m)) return !1;
                    for (var h = 0; h < p.length; h++) try {
                        p[h].error(m)
                    } catch {}
                    return !0
                }, d.prototype.lock = function() {
                    u.prototype.lock.call(this);
                    for (var m = this._sources, p = 0; p < m.length; p++) m[p].lock()
                }, n.exports = d
            }, {
                "../crc32": 4,
                "../signature": 23,
                "../stream/GenericWorker": 28,
                "../utf8": 31,
                "../utils": 32
            }],
            9: [function(r, n, i) {
                var a = r("../compressions"),
                    o = r("./ZipFileWorker");
                i.generateWorker = function(s, u, l) {
                    var c = new o(u.streamFiles, l, u.platform, u.encodeFileName),
                        f = 0;
                    try {
                        s.forEach(function(d, m) {
                            f++;
                            var p = function(x, y) {
                                    var b = x || y,
                                        _ = a[b];
                                    if (!_) throw new Error(b + " is not a valid compression method !");
                                    return _
                                }(m.options.compression, u.compression),
                                h = m.options.compressionOptions || u.compressionOptions || {},
                                v = m.dir,
                                g = m.date;
                            m._compressWorker(p, h).withStreamInfo("file", {
                                name: d,
                                dir: v,
                                date: g,
                                comment: m.comment || "",
                                unixPermissions: m.unixPermissions,
                                dosPermissions: m.dosPermissions
                            }).pipe(c)
                        }), c.entriesCount = f
                    } catch (d) {
                        c.error(d)
                    }
                    return c
                }
            }, {
                "../compressions": 3,
                "./ZipFileWorker": 8
            }],
            10: [function(r, n, i) {
                function a() {
                    if (!(this instanceof a)) return new a;
                    if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
                    this.files = Object.create(null), this.comment = null, this.root = "", this.clone = function() {
                        var o = new a;
                        for (var s in this) typeof this[s] != "function" && (o[s] = this[s]);
                        return o
                    }
                }(a.prototype = r("./object")).loadAsync = r("./load"), a.support = r("./support"), a.defaults = r("./defaults"), a.version = "3.10.1", a.loadAsync = function(o, s) {
                    return new a().loadAsync(o, s)
                }, a.external = r("./external"), n.exports = a
            }, {
                "./defaults": 5,
                "./external": 6,
                "./load": 11,
                "./object": 15,
                "./support": 30
            }],
            11: [function(r, n, i) {
                var a = r("./utils"),
                    o = r("./external"),
                    s = r("./utf8"),
                    u = r("./zipEntries"),
                    l = r("./stream/Crc32Probe"),
                    c = r("./nodejsUtils");

                function f(d) {
                    return new o.Promise(function(m, p) {
                        var h = d.decompressed.getContentWorker().pipe(new l);
                        h.on("error", function(v) {
                            p(v)
                        }).on("end", function() {
                            h.streamInfo.crc32 !== d.decompressed.crc32 ? p(new Error("Corrupted zip : CRC32 mismatch")) : m()
                        }).resume()
                    })
                }
                n.exports = function(d, m) {
                    var p = this;
                    return m = a.extend(m || {}, {
                        base64: !1,
                        checkCRC32: !1,
                        optimizedBinaryString: !1,
                        createFolders: !1,
                        decodeFileName: s.utf8decode
                    }), c.isNode && c.isStream(d) ? o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : a.prepareContent("the loaded zip file", d, !0, m.optimizedBinaryString, m.base64).then(function(h) {
                        var v = new u(m);
                        return v.load(h), v
                    }).then(function(h) {
                        var v = [o.Promise.resolve(h)],
                            g = h.files;
                        if (m.checkCRC32)
                            for (var x = 0; x < g.length; x++) v.push(f(g[x]));
                        return o.Promise.all(v)
                    }).then(function(h) {
                        for (var v = h.shift(), g = v.files, x = 0; x < g.length; x++) {
                            var y = g[x],
                                b = y.fileNameStr,
                                _ = a.resolve(y.fileNameStr);
                            p.file(_, y.decompressed, {
                                binary: !0,
                                optimizedBinaryString: !0,
                                date: y.date,
                                dir: y.dir,
                                comment: y.fileCommentStr.length ? y.fileCommentStr : null,
                                unixPermissions: y.unixPermissions,
                                dosPermissions: y.dosPermissions,
                                createFolders: m.createFolders
                            }), y.dir || (p.file(_).unsafeOriginalName = b)
                        }
                        return v.zipComment.length && (p.comment = v.zipComment), p
                    })
                }
            }, {
                "./external": 6,
                "./nodejsUtils": 14,
                "./stream/Crc32Probe": 25,
                "./utf8": 31,
                "./utils": 32,
                "./zipEntries": 33
            }],
            12: [function(r, n, i) {
                var a = r("../utils"),
                    o = r("../stream/GenericWorker");

                function s(u, l) {
                    o.call(this, "Nodejs stream input adapter for " + u), this._upstreamEnded = !1, this._bindStream(l)
                }
                a.inherits(s, o), s.prototype._bindStream = function(u) {
                    var l = this;
                    (this._stream = u).pause(), u.on("data", function(c) {
                        l.push({
                            data: c,
                            meta: {
                                percent: 0
                            }
                        })
                    }).on("error", function(c) {
                        l.isPaused ? this.generatedError = c : l.error(c)
                    }).on("end", function() {
                        l.isPaused ? l._upstreamEnded = !0 : l.end()
                    })
                }, s.prototype.pause = function() {
                    return !!o.prototype.pause.call(this) && (this._stream.pause(), !0)
                }, s.prototype.resume = function() {
                    return !!o.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0)
                }, n.exports = s
            }, {
                "../stream/GenericWorker": 28,
                "../utils": 32
            }],
            13: [function(r, n, i) {
                var a = r("readable-stream").Readable;

                function o(s, u, l) {
                    a.call(this, u), this._helper = s;
                    var c = this;
                    s.on("data", function(f, d) {
                        c.push(f) || c._helper.pause(), l && l(d)
                    }).on("error", function(f) {
                        c.emit("error", f)
                    }).on("end", function() {
                        c.push(null)
                    })
                }
                r("../utils").inherits(o, a), o.prototype._read = function() {
                    this._helper.resume()
                }, n.exports = o
            }, {
                "../utils": 32,
                "readable-stream": 16
            }],
            14: [function(r, n, i) {
                n.exports = {
                    isNode: typeof Buffer < "u",
                    newBufferFrom: function(a, o) {
                        if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(a, o);
                        if (typeof a == "number") throw new Error('The "data" argument must not be a number');
                        return new Buffer(a, o)
                    },
                    allocBuffer: function(a) {
                        if (Buffer.alloc) return Buffer.alloc(a);
                        var o = new Buffer(a);
                        return o.fill(0), o
                    },
                    isBuffer: function(a) {
                        return Buffer.isBuffer(a)
                    },
                    isStream: function(a) {
                        return a && typeof a.on == "function" && typeof a.pause == "function" && typeof a.resume == "function"
                    }
                }
            }, {}],
            15: [function(r, n, i) {
                function a(_, w, A) {
                    var E, k = s.getTypeOf(w),
                        N = s.extend(A || {}, c);
                    N.date = N.date || new Date, N.compression !== null && (N.compression = N.compression.toUpperCase()), typeof N.unixPermissions == "string" && (N.unixPermissions = parseInt(N.unixPermissions, 8)), N.unixPermissions && 16384 & N.unixPermissions && (N.dir = !0), N.dosPermissions && 16 & N.dosPermissions && (N.dir = !0), N.dir && (_ = g(_)), N.createFolders && (E = v(_)) && x.call(this, E, !0);
                    var I = k === "string" && N.binary === !1 && N.base64 === !1;
                    A && A.binary !== void 0 || (N.binary = !I), (w instanceof f && w.uncompressedSize === 0 || N.dir || !w || w.length === 0) && (N.base64 = !1, N.binary = !0, w = "", N.compression = "STORE", k = "string");
                    var T = null;
                    T = w instanceof f || w instanceof u ? w : p.isNode && p.isStream(w) ? new h(_, w) : s.prepareContent(_, w, N.binary, N.optimizedBinaryString, N.base64);
                    var M = new d(_, T, N);
                    this.files[_] = M
                }
                var o = r("./utf8"),
                    s = r("./utils"),
                    u = r("./stream/GenericWorker"),
                    l = r("./stream/StreamHelper"),
                    c = r("./defaults"),
                    f = r("./compressedObject"),
                    d = r("./zipObject"),
                    m = r("./generate"),
                    p = r("./nodejsUtils"),
                    h = r("./nodejs/NodejsStreamInputAdapter"),
                    v = function(_) {
                        _.slice(-1) === "/" && (_ = _.substring(0, _.length - 1));
                        var w = _.lastIndexOf("/");
                        return 0 < w ? _.substring(0, w) : ""
                    },
                    g = function(_) {
                        return _.slice(-1) !== "/" && (_ += "/"), _
                    },
                    x = function(_, w) {
                        return w = w !== void 0 ? w : c.createFolders, _ = g(_), this.files[_] || a.call(this, _, null, {
                            dir: !0,
                            createFolders: w
                        }), this.files[_]
                    };

                function y(_) {
                    return Object.prototype.toString.call(_) === "[object RegExp]"
                }
                var b = {
                    load: function() {
                        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")
                    },
                    forEach: function(_) {
                        var w, A, E;
                        for (w in this.files) E = this.files[w], (A = w.slice(this.root.length, w.length)) && w.slice(0, this.root.length) === this.root && _(A, E)
                    },
                    filter: function(_) {
                        var w = [];
                        return this.forEach(function(A, E) {
                            _(A, E) && w.push(E)
                        }), w
                    },
                    file: function(_, w, A) {
                        if (arguments.length !== 1) return _ = this.root + _, a.call(this, _, w, A), this;
                        if (y(_)) {
                            var E = _;
                            return this.filter(function(N, I) {
                                return !I.dir && E.test(N)
                            })
                        }
                        var k = this.files[this.root + _];
                        return k && !k.dir ? k : null
                    },
                    folder: function(_) {
                        if (!_) return this;
                        if (y(_)) return this.filter(function(k, N) {
                            return N.dir && _.test(k)
                        });
                        var w = this.root + _,
                            A = x.call(this, w),
                            E = this.clone();
                        return E.root = A.name, E
                    },
                    remove: function(_) {
                        _ = this.root + _;
                        var w = this.files[_];
                        if (w || (_.slice(-1) !== "/" && (_ += "/"), w = this.files[_]), w && !w.dir) delete this.files[_];
                        else
                            for (var A = this.filter(function(k, N) {
                                    return N.name.slice(0, _.length) === _
                                }), E = 0; E < A.length; E++) delete this.files[A[E].name];
                        return this
                    },
                    generate: function() {
                        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")
                    },
                    generateInternalStream: function(_) {
                        var w, A = {};
                        try {
                            if ((A = s.extend(_ || {}, {
                                    streamFiles: !1,
                                    compression: "STORE",
                                    compressionOptions: null,
                                    type: "",
                                    platform: "DOS",
                                    comment: null,
                                    mimeType: "application/zip",
                                    encodeFileName: o.utf8encode
                                })).type = A.type.toLowerCase(), A.compression = A.compression.toUpperCase(), A.type === "binarystring" && (A.type = "string"), !A.type) throw new Error("No output type specified.");
                            s.checkSupport(A.type), A.platform !== "darwin" && A.platform !== "freebsd" && A.platform !== "linux" && A.platform !== "sunos" || (A.platform = "UNIX"), A.platform === "win32" && (A.platform = "DOS");
                            var E = A.comment || this.comment || "";
                            w = m.generateWorker(this, A, E)
                        } catch (k) {
                            (w = new u("error")).error(k)
                        }
                        return new l(w, A.type || "string", A.mimeType)
                    },
                    generateAsync: function(_, w) {
                        return this.generateInternalStream(_).accumulate(w)
                    },
                    generateNodeStream: function(_, w) {
                        return (_ = _ || {}).type || (_.type = "nodebuffer"), this.generateInternalStream(_).toNodejsStream(w)
                    }
                };
                n.exports = b
            }, {
                "./compressedObject": 2,
                "./defaults": 5,
                "./generate": 9,
                "./nodejs/NodejsStreamInputAdapter": 12,
                "./nodejsUtils": 14,
                "./stream/GenericWorker": 28,
                "./stream/StreamHelper": 29,
                "./utf8": 31,
                "./utils": 32,
                "./zipObject": 35
            }],
            16: [function(r, n, i) {
                n.exports = r("stream")
            }, {
                stream: void 0
            }],
            17: [function(r, n, i) {
                var a = r("./DataReader");

                function o(s) {
                    a.call(this, s);
                    for (var u = 0; u < this.data.length; u++) s[u] = 255 & s[u]
                }
                r("../utils").inherits(o, a), o.prototype.byteAt = function(s) {
                    return this.data[this.zero + s]
                }, o.prototype.lastIndexOfSignature = function(s) {
                    for (var u = s.charCodeAt(0), l = s.charCodeAt(1), c = s.charCodeAt(2), f = s.charCodeAt(3), d = this.length - 4; 0 <= d; --d)
                        if (this.data[d] === u && this.data[d + 1] === l && this.data[d + 2] === c && this.data[d + 3] === f) return d - this.zero;
                    return -1
                }, o.prototype.readAndCheckSignature = function(s) {
                    var u = s.charCodeAt(0),
                        l = s.charCodeAt(1),
                        c = s.charCodeAt(2),
                        f = s.charCodeAt(3),
                        d = this.readData(4);
                    return u === d[0] && l === d[1] && c === d[2] && f === d[3]
                }, o.prototype.readData = function(s) {
                    if (this.checkOffset(s), s === 0) return [];
                    var u = this.data.slice(this.zero + this.index, this.zero + this.index + s);
                    return this.index += s, u
                }, n.exports = o
            }, {
                "../utils": 32,
                "./DataReader": 18
            }],
            18: [function(r, n, i) {
                var a = r("../utils");

                function o(s) {
                    this.data = s, this.length = s.length, this.index = 0, this.zero = 0
                }
                o.prototype = {
                    checkOffset: function(s) {
                        this.checkIndex(this.index + s)
                    },
                    checkIndex: function(s) {
                        if (this.length < this.zero + s || s < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + s + "). Corrupted zip ?")
                    },
                    setIndex: function(s) {
                        this.checkIndex(s), this.index = s
                    },
                    skip: function(s) {
                        this.setIndex(this.index + s)
                    },
                    byteAt: function() {},
                    readInt: function(s) {
                        var u, l = 0;
                        for (this.checkOffset(s), u = this.index + s - 1; u >= this.index; u--) l = (l << 8) + this.byteAt(u);
                        return this.index += s, l
                    },
                    readString: function(s) {
                        return a.transformTo("string", this.readData(s))
                    },
                    readData: function() {},
                    lastIndexOfSignature: function() {},
                    readAndCheckSignature: function() {},
                    readDate: function() {
                        var s = this.readInt(4);
                        return new Date(Date.UTC(1980 + (s >> 25 & 127), (s >> 21 & 15) - 1, s >> 16 & 31, s >> 11 & 31, s >> 5 & 63, (31 & s) << 1))
                    }
                }, n.exports = o
            }, {
                "../utils": 32
            }],
            19: [function(r, n, i) {
                var a = r("./Uint8ArrayReader");

                function o(s) {
                    a.call(this, s)
                }
                r("../utils").inherits(o, a), o.prototype.readData = function(s) {
                    this.checkOffset(s);
                    var u = this.data.slice(this.zero + this.index, this.zero + this.index + s);
                    return this.index += s, u
                }, n.exports = o
            }, {
                "../utils": 32,
                "./Uint8ArrayReader": 21
            }],
            20: [function(r, n, i) {
                var a = r("./DataReader");

                function o(s) {
                    a.call(this, s)
                }
                r("../utils").inherits(o, a), o.prototype.byteAt = function(s) {
                    return this.data.charCodeAt(this.zero + s)
                }, o.prototype.lastIndexOfSignature = function(s) {
                    return this.data.lastIndexOf(s) - this.zero
                }, o.prototype.readAndCheckSignature = function(s) {
                    return s === this.readData(4)
                }, o.prototype.readData = function(s) {
                    this.checkOffset(s);
                    var u = this.data.slice(this.zero + this.index, this.zero + this.index + s);
                    return this.index += s, u
                }, n.exports = o
            }, {
                "../utils": 32,
                "./DataReader": 18
            }],
            21: [function(r, n, i) {
                var a = r("./ArrayReader");

                function o(s) {
                    a.call(this, s)
                }
                r("../utils").inherits(o, a), o.prototype.readData = function(s) {
                    if (this.checkOffset(s), s === 0) return new Uint8Array(0);
                    var u = this.data.subarray(this.zero + this.index, this.zero + this.index + s);
                    return this.index += s, u
                }, n.exports = o
            }, {
                "../utils": 32,
                "./ArrayReader": 17
            }],
            22: [function(r, n, i) {
                var a = r("../utils"),
                    o = r("../support"),
                    s = r("./ArrayReader"),
                    u = r("./StringReader"),
                    l = r("./NodeBufferReader"),
                    c = r("./Uint8ArrayReader");
                n.exports = function(f) {
                    var d = a.getTypeOf(f);
                    return a.checkSupport(d), d !== "string" || o.uint8array ? d === "nodebuffer" ? new l(f) : o.uint8array ? new c(a.transformTo("uint8array", f)) : new s(a.transformTo("array", f)) : new u(f)
                }
            }, {
                "../support": 30,
                "../utils": 32,
                "./ArrayReader": 17,
                "./NodeBufferReader": 19,
                "./StringReader": 20,
                "./Uint8ArrayReader": 21
            }],
            23: [function(r, n, i) {
                i.LOCAL_FILE_HEADER = "PK", i.CENTRAL_FILE_HEADER = "PK", i.CENTRAL_DIRECTORY_END = "PK", i.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", i.ZIP64_CENTRAL_DIRECTORY_END = "PK", i.DATA_DESCRIPTOR = "PK\x07\b"
            }, {}],
            24: [function(r, n, i) {
                var a = r("./GenericWorker"),
                    o = r("../utils");

                function s(u) {
                    a.call(this, "ConvertWorker to " + u), this.destType = u
                }
                o.inherits(s, a), s.prototype.processChunk = function(u) {
                    this.push({
                        data: o.transformTo(this.destType, u.data),
                        meta: u.meta
                    })
                }, n.exports = s
            }, {
                "../utils": 32,
                "./GenericWorker": 28
            }],
            25: [function(r, n, i) {
                var a = r("./GenericWorker"),
                    o = r("../crc32");

                function s() {
                    a.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0)
                }
                r("../utils").inherits(s, a), s.prototype.processChunk = function(u) {
                    this.streamInfo.crc32 = o(u.data, this.streamInfo.crc32 || 0), this.push(u)
                }, n.exports = s
            }, {
                "../crc32": 4,
                "../utils": 32,
                "./GenericWorker": 28
            }],
            26: [function(r, n, i) {
                var a = r("../utils"),
                    o = r("./GenericWorker");

                function s(u) {
                    o.call(this, "DataLengthProbe for " + u), this.propName = u, this.withStreamInfo(u, 0)
                }
                a.inherits(s, o), s.prototype.processChunk = function(u) {
                    if (u) {
                        var l = this.streamInfo[this.propName] || 0;
                        this.streamInfo[this.propName] = l + u.data.length
                    }
                    o.prototype.processChunk.call(this, u)
                }, n.exports = s
            }, {
                "../utils": 32,
                "./GenericWorker": 28
            }],
            27: [function(r, n, i) {
                var a = r("../utils"),
                    o = r("./GenericWorker");

                function s(u) {
                    o.call(this, "DataWorker");
                    var l = this;
                    this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, u.then(function(c) {
                        l.dataIsReady = !0, l.data = c, l.max = c && c.length || 0, l.type = a.getTypeOf(c), l.isPaused || l._tickAndRepeat()
                    }, function(c) {
                        l.error(c)
                    })
                }
                a.inherits(s, o), s.prototype.cleanUp = function() {
                    o.prototype.cleanUp.call(this), this.data = null
                }, s.prototype.resume = function() {
                    return !!o.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, a.delay(this._tickAndRepeat, [], this)), !0)
                }, s.prototype._tickAndRepeat = function() {
                    this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (a.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0))
                }, s.prototype._tick = function() {
                    if (this.isPaused || this.isFinished) return !1;
                    var u = null,
                        l = Math.min(this.max, this.index + 16384);
                    if (this.index >= this.max) return this.end();
                    switch (this.type) {
                        case "string":
                            u = this.data.substring(this.index, l);
                            break;
                        case "uint8array":
                            u = this.data.subarray(this.index, l);
                            break;
                        case "array":
                        case "nodebuffer":
                            u = this.data.slice(this.index, l)
                    }
                    return this.index = l, this.push({
                        data: u,
                        meta: {
                            percent: this.max ? this.index / this.max * 100 : 0
                        }
                    })
                }, n.exports = s
            }, {
                "../utils": 32,
                "./GenericWorker": 28
            }],
            28: [function(r, n, i) {
                function a(o) {
                    this.name = o || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = {
                        data: [],
                        end: [],
                        error: []
                    }, this.previous = null
                }
                a.prototype = {
                    push: function(o) {
                        this.emit("data", o)
                    },
                    end: function() {
                        if (this.isFinished) return !1;
                        this.flush();
                        try {
                            this.emit("end"), this.cleanUp(), this.isFinished = !0
                        } catch (o) {
                            this.emit("error", o)
                        }
                        return !0
                    },
                    error: function(o) {
                        return !this.isFinished && (this.isPaused ? this.generatedError = o : (this.isFinished = !0, this.emit("error", o), this.previous && this.previous.error(o), this.cleanUp()), !0)
                    },
                    on: function(o, s) {
                        return this._listeners[o].push(s), this
                    },
                    cleanUp: function() {
                        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = []
                    },
                    emit: function(o, s) {
                        if (this._listeners[o])
                            for (var u = 0; u < this._listeners[o].length; u++) this._listeners[o][u].call(this, s)
                    },
                    pipe: function(o) {
                        return o.registerPrevious(this)
                    },
                    registerPrevious: function(o) {
                        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
                        this.streamInfo = o.streamInfo, this.mergeStreamInfo(), this.previous = o;
                        var s = this;
                        return o.on("data", function(u) {
                            s.processChunk(u)
                        }), o.on("end", function() {
                            s.end()
                        }), o.on("error", function(u) {
                            s.error(u)
                        }), this
                    },
                    pause: function() {
                        return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0)
                    },
                    resume: function() {
                        if (!this.isPaused || this.isFinished) return !1;
                        var o = this.isPaused = !1;
                        return this.generatedError && (this.error(this.generatedError), o = !0), this.previous && this.previous.resume(), !o
                    },
                    flush: function() {},
                    processChunk: function(o) {
                        this.push(o)
                    },
                    withStreamInfo: function(o, s) {
                        return this.extraStreamInfo[o] = s, this.mergeStreamInfo(), this
                    },
                    mergeStreamInfo: function() {
                        for (var o in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, o) && (this.streamInfo[o] = this.extraStreamInfo[o])
                    },
                    lock: function() {
                        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
                        this.isLocked = !0, this.previous && this.previous.lock()
                    },
                    toString: function() {
                        var o = "Worker " + this.name;
                        return this.previous ? this.previous + " -> " + o : o
                    }
                }, n.exports = a
            }, {}],
            29: [function(r, n, i) {
                var a = r("../utils"),
                    o = r("./ConvertWorker"),
                    s = r("./GenericWorker"),
                    u = r("../base64"),
                    l = r("../support"),
                    c = r("../external"),
                    f = null;
                if (l.nodestream) try {
                    f = r("../nodejs/NodejsStreamOutputAdapter")
                } catch {}

                function d(p, h) {
                    return new c.Promise(function(v, g) {
                        var x = [],
                            y = p._internalType,
                            b = p._outputType,
                            _ = p._mimeType;
                        p.on("data", function(w, A) {
                            x.push(w), h && h(A)
                        }).on("error", function(w) {
                            x = [], g(w)
                        }).on("end", function() {
                            try {
                                var w = function(A, E, k) {
                                    switch (A) {
                                        case "blob":
                                            return a.newBlob(a.transformTo("arraybuffer", E), k);
                                        case "base64":
                                            return u.encode(E);
                                        default:
                                            return a.transformTo(A, E)
                                    }
                                }(b, function(A, E) {
                                    var k, N = 0,
                                        I = null,
                                        T = 0;
                                    for (k = 0; k < E.length; k++) T += E[k].length;
                                    switch (A) {
                                        case "string":
                                            return E.join("");
                                        case "array":
                                            return Array.prototype.concat.apply([], E);
                                        case "uint8array":
                                            for (I = new Uint8Array(T), k = 0; k < E.length; k++) I.set(E[k], N), N += E[k].length;
                                            return I;
                                        case "nodebuffer":
                                            return Buffer.concat(E);
                                        default:
                                            throw new Error("concat : unsupported type '" + A + "'")
                                    }
                                }(y, x), _);
                                v(w)
                            } catch (A) {
                                g(A)
                            }
                            x = []
                        }).resume()
                    })
                }

                function m(p, h, v) {
                    var g = h;
                    switch (h) {
                        case "blob":
                        case "arraybuffer":
                            g = "uint8array";
                            break;
                        case "base64":
                            g = "string"
                    }
                    try {
                        this._internalType = g, this._outputType = h, this._mimeType = v, a.checkSupport(g), this._worker = p.pipe(new o(g)), p.lock()
                    } catch (x) {
                        this._worker = new s("error"), this._worker.error(x)
                    }
                }
                m.prototype = {
                    accumulate: function(p) {
                        return d(this, p)
                    },
                    on: function(p, h) {
                        var v = this;
                        return p === "data" ? this._worker.on(p, function(g) {
                            h.call(v, g.data, g.meta)
                        }) : this._worker.on(p, function() {
                            a.delay(h, arguments, v)
                        }), this
                    },
                    resume: function() {
                        return a.delay(this._worker.resume, [], this._worker), this
                    },
                    pause: function() {
                        return this._worker.pause(), this
                    },
                    toNodejsStream: function(p) {
                        if (a.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw new Error(this._outputType + " is not supported by this method");
                        return new f(this, {
                            objectMode: this._outputType !== "nodebuffer"
                        }, p)
                    }
                }, n.exports = m
            }, {
                "../base64": 1,
                "../external": 6,
                "../nodejs/NodejsStreamOutputAdapter": 13,
                "../support": 30,
                "../utils": 32,
                "./ConvertWorker": 24,
                "./GenericWorker": 28
            }],
            30: [function(r, n, i) {
                if (i.base64 = !0, i.array = !0, i.string = !0, i.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", i.nodebuffer = typeof Buffer < "u", i.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u") i.blob = !1;
                else {
                    var a = new ArrayBuffer(0);
                    try {
                        i.blob = new Blob([a], {
                            type: "application/zip"
                        }).size === 0
                    } catch {
                        try {
                            var o = new(self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder);
                            o.append(a), i.blob = o.getBlob("application/zip").size === 0
                        } catch {
                            i.blob = !1
                        }
                    }
                }
                try {
                    i.nodestream = !!r("readable-stream").Readable
                } catch {
                    i.nodestream = !1
                }
            }, {
                "readable-stream": 16
            }],
            31: [function(r, n, i) {
                for (var a = r("./utils"), o = r("./support"), s = r("./nodejsUtils"), u = r("./stream/GenericWorker"), l = new Array(256), c = 0; c < 256; c++) l[c] = 252 <= c ? 6 : 248 <= c ? 5 : 240 <= c ? 4 : 224 <= c ? 3 : 192 <= c ? 2 : 1;
                l[254] = l[254] = 1;

                function f() {
                    u.call(this, "utf-8 decode"), this.leftOver = null
                }

                function d() {
                    u.call(this, "utf-8 encode")
                }
                i.utf8encode = function(m) {
                    return o.nodebuffer ? s.newBufferFrom(m, "utf-8") : function(p) {
                        var h, v, g, x, y, b = p.length,
                            _ = 0;
                        for (x = 0; x < b; x++)(64512 & (v = p.charCodeAt(x))) == 55296 && x + 1 < b && (64512 & (g = p.charCodeAt(x + 1))) == 56320 && (v = 65536 + (v - 55296 << 10) + (g - 56320), x++), _ += v < 128 ? 1 : v < 2048 ? 2 : v < 65536 ? 3 : 4;
                        for (h = o.uint8array ? new Uint8Array(_) : new Array(_), x = y = 0; y < _; x++)(64512 & (v = p.charCodeAt(x))) == 55296 && x + 1 < b && (64512 & (g = p.charCodeAt(x + 1))) == 56320 && (v = 65536 + (v - 55296 << 10) + (g - 56320), x++), v < 128 ? h[y++] = v : (v < 2048 ? h[y++] = 192 | v >>> 6 : (v < 65536 ? h[y++] = 224 | v >>> 12 : (h[y++] = 240 | v >>> 18, h[y++] = 128 | v >>> 12 & 63), h[y++] = 128 | v >>> 6 & 63), h[y++] = 128 | 63 & v);
                        return h
                    }(m)
                }, i.utf8decode = function(m) {
                    return o.nodebuffer ? a.transformTo("nodebuffer", m).toString("utf-8") : function(p) {
                        var h, v, g, x, y = p.length,
                            b = new Array(2 * y);
                        for (h = v = 0; h < y;)
                            if ((g = p[h++]) < 128) b[v++] = g;
                            else if (4 < (x = l[g])) b[v++] = 65533, h += x - 1;
                        else {
                            for (g &= x === 2 ? 31 : x === 3 ? 15 : 7; 1 < x && h < y;) g = g << 6 | 63 & p[h++], x--;
                            1 < x ? b[v++] = 65533 : g < 65536 ? b[v++] = g : (g -= 65536, b[v++] = 55296 | g >> 10 & 1023, b[v++] = 56320 | 1023 & g)
                        }
                        return b.length !== v && (b.subarray ? b = b.subarray(0, v) : b.length = v), a.applyFromCharCode(b)
                    }(m = a.transformTo(o.uint8array ? "uint8array" : "array", m))
                }, a.inherits(f, u), f.prototype.processChunk = function(m) {
                    var p = a.transformTo(o.uint8array ? "uint8array" : "array", m.data);
                    if (this.leftOver && this.leftOver.length) {
                        if (o.uint8array) {
                            var h = p;
                            (p = new Uint8Array(h.length + this.leftOver.length)).set(this.leftOver, 0), p.set(h, this.leftOver.length)
                        } else p = this.leftOver.concat(p);
                        this.leftOver = null
                    }
                    var v = function(x, y) {
                            var b;
                            for ((y = y || x.length) > x.length && (y = x.length), b = y - 1; 0 <= b && (192 & x[b]) == 128;) b--;
                            return b < 0 || b === 0 ? y : b + l[x[b]] > y ? b : y
                        }(p),
                        g = p;
                    v !== p.length && (o.uint8array ? (g = p.subarray(0, v), this.leftOver = p.subarray(v, p.length)) : (g = p.slice(0, v), this.leftOver = p.slice(v, p.length))), this.push({
                        data: i.utf8decode(g),
                        meta: m.meta
                    })
                }, f.prototype.flush = function() {
                    this.leftOver && this.leftOver.length && (this.push({
                        data: i.utf8decode(this.leftOver),
                        meta: {}
                    }), this.leftOver = null)
                }, i.Utf8DecodeWorker = f, a.inherits(d, u), d.prototype.processChunk = function(m) {
                    this.push({
                        data: i.utf8encode(m.data),
                        meta: m.meta
                    })
                }, i.Utf8EncodeWorker = d
            }, {
                "./nodejsUtils": 14,
                "./stream/GenericWorker": 28,
                "./support": 30,
                "./utils": 32
            }],
            32: [function(r, n, i) {
                var a = r("./support"),
                    o = r("./base64"),
                    s = r("./nodejsUtils"),
                    u = r("./external");

                function l(h) {
                    return h
                }

                function c(h, v) {
                    for (var g = 0; g < h.length; ++g) v[g] = 255 & h.charCodeAt(g);
                    return v
                }
                r("setimmediate"), i.newBlob = function(h, v) {
                    i.checkSupport("blob");
                    try {
                        return new Blob([h], {
                            type: v
                        })
                    } catch {
                        try {
                            var g = new(self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder);
                            return g.append(h), g.getBlob(v)
                        } catch {
                            throw new Error("Bug : can't construct the Blob.")
                        }
                    }
                };
                var f = {
                    stringifyByChunk: function(h, v, g) {
                        var x = [],
                            y = 0,
                            b = h.length;
                        if (b <= g) return String.fromCharCode.apply(null, h);
                        for (; y < b;) v === "array" || v === "nodebuffer" ? x.push(String.fromCharCode.apply(null, h.slice(y, Math.min(y + g, b)))) : x.push(String.fromCharCode.apply(null, h.subarray(y, Math.min(y + g, b)))), y += g;
                        return x.join("")
                    },
                    stringifyByChar: function(h) {
                        for (var v = "", g = 0; g < h.length; g++) v += String.fromCharCode(h[g]);
                        return v
                    },
                    applyCanBeUsed: {
                        uint8array: function() {
                            try {
                                return a.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1
                            } catch {
                                return !1
                            }
                        }(),
                        nodebuffer: function() {
                            try {
                                return a.nodebuffer && String.fromCharCode.apply(null, s.allocBuffer(1)).length === 1
                            } catch {
                                return !1
                            }
                        }()
                    }
                };

                function d(h) {
                    var v = 65536,
                        g = i.getTypeOf(h),
                        x = !0;
                    if (g === "uint8array" ? x = f.applyCanBeUsed.uint8array : g === "nodebuffer" && (x = f.applyCanBeUsed.nodebuffer), x)
                        for (; 1 < v;) try {
                            return f.stringifyByChunk(h, g, v)
                        } catch {
                            v = Math.floor(v / 2)
                        }
                    return f.stringifyByChar(h)
                }

                function m(h, v) {
                    for (var g = 0; g < h.length; g++) v[g] = h[g];
                    return v
                }
                i.applyFromCharCode = d;
                var p = {};
                p.string = {
                    string: l,
                    array: function(h) {
                        return c(h, new Array(h.length))
                    },
                    arraybuffer: function(h) {
                        return p.string.uint8array(h).buffer
                    },
                    uint8array: function(h) {
                        return c(h, new Uint8Array(h.length))
                    },
                    nodebuffer: function(h) {
                        return c(h, s.allocBuffer(h.length))
                    }
                }, p.array = {
                    string: d,
                    array: l,
                    arraybuffer: function(h) {
                        return new Uint8Array(h).buffer
                    },
                    uint8array: function(h) {
                        return new Uint8Array(h)
                    },
                    nodebuffer: function(h) {
                        return s.newBufferFrom(h)
                    }
                }, p.arraybuffer = {
                    string: function(h) {
                        return d(new Uint8Array(h))
                    },
                    array: function(h) {
                        return m(new Uint8Array(h), new Array(h.byteLength))
                    },
                    arraybuffer: l,
                    uint8array: function(h) {
                        return new Uint8Array(h)
                    },
                    nodebuffer: function(h) {
                        return s.newBufferFrom(new Uint8Array(h))
                    }
                }, p.uint8array = {
                    string: d,
                    array: function(h) {
                        return m(h, new Array(h.length))
                    },
                    arraybuffer: function(h) {
                        return h.buffer
                    },
                    uint8array: l,
                    nodebuffer: function(h) {
                        return s.newBufferFrom(h)
                    }
                }, p.nodebuffer = {
                    string: d,
                    array: function(h) {
                        return m(h, new Array(h.length))
                    },
                    arraybuffer: function(h) {
                        return p.nodebuffer.uint8array(h).buffer
                    },
                    uint8array: function(h) {
                        return m(h, new Uint8Array(h.length))
                    },
                    nodebuffer: l
                }, i.transformTo = function(h, v) {
                    if (v = v || "", !h) return v;
                    i.checkSupport(h);
                    var g = i.getTypeOf(v);
                    return p[g][h](v)
                }, i.resolve = function(h) {
                    for (var v = h.split("/"), g = [], x = 0; x < v.length; x++) {
                        var y = v[x];
                        y === "." || y === "" && x !== 0 && x !== v.length - 1 || (y === ".." ? g.pop() : g.push(y))
                    }
                    return g.join("/")
                }, i.getTypeOf = function(h) {
                    return typeof h == "string" ? "string" : Object.prototype.toString.call(h) === "[object Array]" ? "array" : a.nodebuffer && s.isBuffer(h) ? "nodebuffer" : a.uint8array && h instanceof Uint8Array ? "uint8array" : a.arraybuffer && h instanceof ArrayBuffer ? "arraybuffer" : void 0
                }, i.checkSupport = function(h) {
                    if (!a[h.toLowerCase()]) throw new Error(h + " is not supported by this platform")
                }, i.MAX_VALUE_16BITS = 65535, i.MAX_VALUE_32BITS = -1, i.pretty = function(h) {
                    var v, g, x = "";
                    for (g = 0; g < (h || "").length; g++) x += "\\x" + ((v = h.charCodeAt(g)) < 16 ? "0" : "") + v.toString(16).toUpperCase();
                    return x
                }, i.delay = function(h, v, g) {
                    setImmediate(function() {
                        h.apply(g || null, v || [])
                    })
                }, i.inherits = function(h, v) {
                    function g() {}
                    g.prototype = v.prototype, h.prototype = new g
                }, i.extend = function() {
                    var h, v, g = {};
                    for (h = 0; h < arguments.length; h++)
                        for (v in arguments[h]) Object.prototype.hasOwnProperty.call(arguments[h], v) && g[v] === void 0 && (g[v] = arguments[h][v]);
                    return g
                }, i.prepareContent = function(h, v, g, x, y) {
                    return u.Promise.resolve(v).then(function(b) {
                        return a.blob && (b instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(b)) !== -1) && typeof FileReader < "u" ? new u.Promise(function(_, w) {
                            var A = new FileReader;
                            A.onload = function(E) {
                                _(E.target.result)
                            }, A.onerror = function(E) {
                                w(E.target.error)
                            }, A.readAsArrayBuffer(b)
                        }) : b
                    }).then(function(b) {
                        var _ = i.getTypeOf(b);
                        return _ ? (_ === "arraybuffer" ? b = i.transformTo("uint8array", b) : _ === "string" && (y ? b = o.decode(b) : g && x !== !0 && (b = function(w) {
                            return c(w, a.uint8array ? new Uint8Array(w.length) : new Array(w.length))
                        }(b))), b) : u.Promise.reject(new Error("Can't read the data of '" + h + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))
                    })
                }
            }, {
                "./base64": 1,
                "./external": 6,
                "./nodejsUtils": 14,
                "./support": 30,
                setimmediate: 54
            }],
            33: [function(r, n, i) {
                var a = r("./reader/readerFor"),
                    o = r("./utils"),
                    s = r("./signature"),
                    u = r("./zipEntry"),
                    l = r("./support");

                function c(f) {
                    this.files = [], this.loadOptions = f
                }
                c.prototype = {
                    checkSignature: function(f) {
                        if (!this.reader.readAndCheckSignature(f)) {
                            this.reader.index -= 4;
                            var d = this.reader.readString(4);
                            throw new Error("Corrupted zip or bug: unexpected signature (" + o.pretty(d) + ", expected " + o.pretty(f) + ")")
                        }
                    },
                    isSignature: function(f, d) {
                        var m = this.reader.index;
                        this.reader.setIndex(f);
                        var p = this.reader.readString(4) === d;
                        return this.reader.setIndex(m), p
                    },
                    readBlockEndOfCentral: function() {
                        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
                        var f = this.reader.readData(this.zipCommentLength),
                            d = l.uint8array ? "uint8array" : "array",
                            m = o.transformTo(d, f);
                        this.zipComment = this.loadOptions.decodeFileName(m)
                    },
                    readBlockZip64EndOfCentral: function() {
                        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
                        for (var f, d, m, p = this.zip64EndOfCentralSize - 44; 0 < p;) f = this.reader.readInt(2), d = this.reader.readInt(4), m = this.reader.readData(d), this.zip64ExtensibleData[f] = {
                            id: f,
                            length: d,
                            value: m
                        }
                    },
                    readBlockZip64EndOfCentralLocator: function() {
                        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported")
                    },
                    readLocalFiles: function() {
                        var f, d;
                        for (f = 0; f < this.files.length; f++) d = this.files[f], this.reader.setIndex(d.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), d.readLocalPart(this.reader), d.handleUTF8(), d.processAttributes()
                    },
                    readCentralDir: function() {
                        var f;
                        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(f = new u({
                            zip64: this.zip64
                        }, this.loadOptions)).readCentralPart(this.reader), this.files.push(f);
                        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length)
                    },
                    readEndOfCentral: function() {
                        var f = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
                        if (f < 0) throw this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
                        this.reader.setIndex(f);
                        var d = f;
                        if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === o.MAX_VALUE_16BITS || this.diskWithCentralDirStart === o.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === o.MAX_VALUE_16BITS || this.centralDirRecords === o.MAX_VALUE_16BITS || this.centralDirSize === o.MAX_VALUE_32BITS || this.centralDirOffset === o.MAX_VALUE_32BITS) {
                            if (this.zip64 = !0, (f = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
                            if (this.reader.setIndex(f), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
                            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral()
                        }
                        var m = this.centralDirOffset + this.centralDirSize;
                        this.zip64 && (m += 20, m += 12 + this.zip64EndOfCentralSize);
                        var p = d - m;
                        if (0 < p) this.isSignature(d, s.CENTRAL_FILE_HEADER) || (this.reader.zero = p);
                        else if (p < 0) throw new Error("Corrupted zip: missing " + Math.abs(p) + " bytes.")
                    },
                    prepareReader: function(f) {
                        this.reader = a(f)
                    },
                    load: function(f) {
                        this.prepareReader(f), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles()
                    }
                }, n.exports = c
            }, {
                "./reader/readerFor": 22,
                "./signature": 23,
                "./support": 30,
                "./utils": 32,
                "./zipEntry": 34
            }],
            34: [function(r, n, i) {
                var a = r("./reader/readerFor"),
                    o = r("./utils"),
                    s = r("./compressedObject"),
                    u = r("./crc32"),
                    l = r("./utf8"),
                    c = r("./compressions"),
                    f = r("./support");

                function d(m, p) {
                    this.options = m, this.loadOptions = p
                }
                d.prototype = {
                    isEncrypted: function() {
                        return (1 & this.bitFlag) == 1
                    },
                    useUTF8: function() {
                        return (2048 & this.bitFlag) == 2048
                    },
                    readLocalPart: function(m) {
                        var p, h;
                        if (m.skip(22), this.fileNameLength = m.readInt(2), h = m.readInt(2), this.fileName = m.readData(this.fileNameLength), m.skip(h), this.compressedSize === -1 || this.uncompressedSize === -1) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
                        if ((p = function(v) {
                                for (var g in c)
                                    if (Object.prototype.hasOwnProperty.call(c, g) && c[g].magic === v) return c[g];
                                return null
                            }(this.compressionMethod)) === null) throw new Error("Corrupted zip : compression " + o.pretty(this.compressionMethod) + " unknown (inner file : " + o.transformTo("string", this.fileName) + ")");
                        this.decompressed = new s(this.compressedSize, this.uncompressedSize, this.crc32, p, m.readData(this.compressedSize))
                    },
                    readCentralPart: function(m) {
                        this.versionMadeBy = m.readInt(2), m.skip(2), this.bitFlag = m.readInt(2), this.compressionMethod = m.readString(2), this.date = m.readDate(), this.crc32 = m.readInt(4), this.compressedSize = m.readInt(4), this.uncompressedSize = m.readInt(4);
                        var p = m.readInt(2);
                        if (this.extraFieldsLength = m.readInt(2), this.fileCommentLength = m.readInt(2), this.diskNumberStart = m.readInt(2), this.internalFileAttributes = m.readInt(2), this.externalFileAttributes = m.readInt(4), this.localHeaderOffset = m.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
                        m.skip(p), this.readExtraFields(m), this.parseZIP64ExtraField(m), this.fileComment = m.readData(this.fileCommentLength)
                    },
                    processAttributes: function() {
                        this.unixPermissions = null, this.dosPermissions = null;
                        var m = this.versionMadeBy >> 8;
                        this.dir = !!(16 & this.externalFileAttributes), m == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), m == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0)
                    },
                    parseZIP64ExtraField: function() {
                        if (this.extraFields[1]) {
                            var m = a(this.extraFields[1].value);
                            this.uncompressedSize === o.MAX_VALUE_32BITS && (this.uncompressedSize = m.readInt(8)), this.compressedSize === o.MAX_VALUE_32BITS && (this.compressedSize = m.readInt(8)), this.localHeaderOffset === o.MAX_VALUE_32BITS && (this.localHeaderOffset = m.readInt(8)), this.diskNumberStart === o.MAX_VALUE_32BITS && (this.diskNumberStart = m.readInt(4))
                        }
                    },
                    readExtraFields: function(m) {
                        var p, h, v, g = m.index + this.extraFieldsLength;
                        for (this.extraFields || (this.extraFields = {}); m.index + 4 < g;) p = m.readInt(2), h = m.readInt(2), v = m.readData(h), this.extraFields[p] = {
                            id: p,
                            length: h,
                            value: v
                        };
                        m.setIndex(g)
                    },
                    handleUTF8: function() {
                        var m = f.uint8array ? "uint8array" : "array";
                        if (this.useUTF8()) this.fileNameStr = l.utf8decode(this.fileName), this.fileCommentStr = l.utf8decode(this.fileComment);
                        else {
                            var p = this.findExtraFieldUnicodePath();
                            if (p !== null) this.fileNameStr = p;
                            else {
                                var h = o.transformTo(m, this.fileName);
                                this.fileNameStr = this.loadOptions.decodeFileName(h)
                            }
                            var v = this.findExtraFieldUnicodeComment();
                            if (v !== null) this.fileCommentStr = v;
                            else {
                                var g = o.transformTo(m, this.fileComment);
                                this.fileCommentStr = this.loadOptions.decodeFileName(g)
                            }
                        }
                    },
                    findExtraFieldUnicodePath: function() {
                        var m = this.extraFields[28789];
                        if (m) {
                            var p = a(m.value);
                            return p.readInt(1) !== 1 || u(this.fileName) !== p.readInt(4) ? null : l.utf8decode(p.readData(m.length - 5))
                        }
                        return null
                    },
                    findExtraFieldUnicodeComment: function() {
                        var m = this.extraFields[25461];
                        if (m) {
                            var p = a(m.value);
                            return p.readInt(1) !== 1 || u(this.fileComment) !== p.readInt(4) ? null : l.utf8decode(p.readData(m.length - 5))
                        }
                        return null
                    }
                }, n.exports = d
            }, {
                "./compressedObject": 2,
                "./compressions": 3,
                "./crc32": 4,
                "./reader/readerFor": 22,
                "./support": 30,
                "./utf8": 31,
                "./utils": 32
            }],
            35: [function(r, n, i) {
                function a(p, h, v) {
                    this.name = p, this.dir = v.dir, this.date = v.date, this.comment = v.comment, this.unixPermissions = v.unixPermissions, this.dosPermissions = v.dosPermissions, this._data = h, this._dataBinary = v.binary, this.options = {
                        compression: v.compression,
                        compressionOptions: v.compressionOptions
                    }
                }
                var o = r("./stream/StreamHelper"),
                    s = r("./stream/DataWorker"),
                    u = r("./utf8"),
                    l = r("./compressedObject"),
                    c = r("./stream/GenericWorker");
                a.prototype = {
                    internalStream: function(p) {
                        var h = null,
                            v = "string";
                        try {
                            if (!p) throw new Error("No output type specified.");
                            var g = (v = p.toLowerCase()) === "string" || v === "text";
                            v !== "binarystring" && v !== "text" || (v = "string"), h = this._decompressWorker();
                            var x = !this._dataBinary;
                            x && !g && (h = h.pipe(new u.Utf8EncodeWorker)), !x && g && (h = h.pipe(new u.Utf8DecodeWorker))
                        } catch (y) {
                            (h = new c("error")).error(y)
                        }
                        return new o(h, v, "")
                    },
                    async: function(p, h) {
                        return this.internalStream(p).accumulate(h)
                    },
                    nodeStream: function(p, h) {
                        return this.internalStream(p || "nodebuffer").toNodejsStream(h)
                    },
                    _compressWorker: function(p, h) {
                        if (this._data instanceof l && this._data.compression.magic === p.magic) return this._data.getCompressedWorker();
                        var v = this._decompressWorker();
                        return this._dataBinary || (v = v.pipe(new u.Utf8EncodeWorker)), l.createWorkerFrom(v, p, h)
                    },
                    _decompressWorker: function() {
                        return this._data instanceof l ? this._data.getContentWorker() : this._data instanceof c ? this._data : new s(this._data)
                    }
                };
                for (var f = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], d = function() {
                        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")
                    }, m = 0; m < f.length; m++) a.prototype[f[m]] = d;
                n.exports = a
            }, {
                "./compressedObject": 2,
                "./stream/DataWorker": 27,
                "./stream/GenericWorker": 28,
                "./stream/StreamHelper": 29,
                "./utf8": 31
            }],
            36: [function(r, n, i) {
                (function(a) {
                    var o, s, u = a.MutationObserver || a.WebKitMutationObserver;
                    if (u) {
                        var l = 0,
                            c = new u(p),
                            f = a.document.createTextNode("");
                        c.observe(f, {
                            characterData: !0
                        }), o = function() {
                            f.data = l = ++l % 2
                        }
                    } else if (a.setImmediate || a.MessageChannel === void 0) o = "document" in a && "onreadystatechange" in a.document.createElement("script") ? function() {
                        var h = a.document.createElement("script");
                        h.onreadystatechange = function() {
                            p(), h.onreadystatechange = null, h.parentNode.removeChild(h), h = null
                        }, a.document.documentElement.appendChild(h)
                    } : function() {
                        setTimeout(p, 0)
                    };
                    else {
                        var d = new a.MessageChannel;
                        d.port1.onmessage = p, o = function() {
                            d.port2.postMessage(0)
                        }
                    }
                    var m = [];

                    function p() {
                        var h, v;
                        s = !0;
                        for (var g = m.length; g;) {
                            for (v = m, m = [], h = -1; ++h < g;) v[h]();
                            g = m.length
                        }
                        s = !1
                    }
                    n.exports = function(h) {
                        m.push(h) !== 1 || s || o()
                    }
                }).call(this, typeof ir < "u" ? ir : typeof self < "u" ? self : typeof window < "u" ? window : {})
            }, {}],
            37: [function(r, n, i) {
                var a = r("immediate");

                function o() {}
                var s = {},
                    u = ["REJECTED"],
                    l = ["FULFILLED"],
                    c = ["PENDING"];

                function f(g) {
                    if (typeof g != "function") throw new TypeError("resolver must be a function");
                    this.state = c, this.queue = [], this.outcome = void 0, g !== o && h(this, g)
                }

                function d(g, x, y) {
                    this.promise = g, typeof x == "function" && (this.onFulfilled = x, this.callFulfilled = this.otherCallFulfilled), typeof y == "function" && (this.onRejected = y, this.callRejected = this.otherCallRejected)
                }

                function m(g, x, y) {
                    a(function() {
                        var b;
                        try {
                            b = x(y)
                        } catch (_) {
                            return s.reject(g, _)
                        }
                        b === g ? s.reject(g, new TypeError("Cannot resolve promise with itself")) : s.resolve(g, b)
                    })
                }

                function p(g) {
                    var x = g && g.then;
                    if (g && (typeof g == "object" || typeof g == "function") && typeof x == "function") return function() {
                        x.apply(g, arguments)
                    }
                }

                function h(g, x) {
                    var y = !1;

                    function b(A) {
                        y || (y = !0, s.reject(g, A))
                    }

                    function _(A) {
                        y || (y = !0, s.resolve(g, A))
                    }
                    var w = v(function() {
                        x(_, b)
                    });
                    w.status === "error" && b(w.value)
                }

                function v(g, x) {
                    var y = {};
                    try {
                        y.value = g(x), y.status = "success"
                    } catch (b) {
                        y.status = "error", y.value = b
                    }
                    return y
                }(n.exports = f).prototype.finally = function(g) {
                    if (typeof g != "function") return this;
                    var x = this.constructor;
                    return this.then(function(y) {
                        return x.resolve(g()).then(function() {
                            return y
                        })
                    }, function(y) {
                        return x.resolve(g()).then(function() {
                            throw y
                        })
                    })
                }, f.prototype.catch = function(g) {
                    return this.then(null, g)
                }, f.prototype.then = function(g, x) {
                    if (typeof g != "function" && this.state === l || typeof x != "function" && this.state === u) return this;
                    var y = new this.constructor(o);
                    return this.state !== c ? m(y, this.state === l ? g : x, this.outcome) : this.queue.push(new d(y, g, x)), y
                }, d.prototype.callFulfilled = function(g) {
                    s.resolve(this.promise, g)
                }, d.prototype.otherCallFulfilled = function(g) {
                    m(this.promise, this.onFulfilled, g)
                }, d.prototype.callRejected = function(g) {
                    s.reject(this.promise, g)
                }, d.prototype.otherCallRejected = function(g) {
                    m(this.promise, this.onRejected, g)
                }, s.resolve = function(g, x) {
                    var y = v(p, x);
                    if (y.status === "error") return s.reject(g, y.value);
                    var b = y.value;
                    if (b) h(g, b);
                    else {
                        g.state = l, g.outcome = x;
                        for (var _ = -1, w = g.queue.length; ++_ < w;) g.queue[_].callFulfilled(x)
                    }
                    return g
                }, s.reject = function(g, x) {
                    g.state = u, g.outcome = x;
                    for (var y = -1, b = g.queue.length; ++y < b;) g.queue[y].callRejected(x);
                    return g
                }, f.resolve = function(g) {
                    return g instanceof this ? g : s.resolve(new this(o), g)
                }, f.reject = function(g) {
                    var x = new this(o);
                    return s.reject(x, g)
                }, f.all = function(g) {
                    var x = this;
                    if (Object.prototype.toString.call(g) !== "[object Array]") return this.reject(new TypeError("must be an array"));
                    var y = g.length,
                        b = !1;
                    if (!y) return this.resolve([]);
                    for (var _ = new Array(y), w = 0, A = -1, E = new this(o); ++A < y;) k(g[A], A);
                    return E;

                    function k(N, I) {
                        x.resolve(N).then(function(T) {
                            _[I] = T, ++w !== y || b || (b = !0, s.resolve(E, _))
                        }, function(T) {
                            b || (b = !0, s.reject(E, T))
                        })
                    }
                }, f.race = function(g) {
                    var x = this;
                    if (Object.prototype.toString.call(g) !== "[object Array]") return this.reject(new TypeError("must be an array"));
                    var y = g.length,
                        b = !1;
                    if (!y) return this.resolve([]);
                    for (var _ = -1, w = new this(o); ++_ < y;) A = g[_], x.resolve(A).then(function(E) {
                        b || (b = !0, s.resolve(w, E))
                    }, function(E) {
                        b || (b = !0, s.reject(w, E))
                    });
                    var A;
                    return w
                }
            }, {
                immediate: 36
            }],
            38: [function(r, n, i) {
                var a = {};
                (0, r("./lib/utils/common").assign)(a, r("./lib/deflate"), r("./lib/inflate"), r("./lib/zlib/constants")), n.exports = a
            }, {
                "./lib/deflate": 39,
                "./lib/inflate": 40,
                "./lib/utils/common": 41,
                "./lib/zlib/constants": 44
            }],
            39: [function(r, n, i) {
                var a = r("./zlib/deflate"),
                    o = r("./utils/common"),
                    s = r("./utils/strings"),
                    u = r("./zlib/messages"),
                    l = r("./zlib/zstream"),
                    c = Object.prototype.toString,
                    f = 0,
                    d = -1,
                    m = 0,
                    p = 8;

                function h(g) {
                    if (!(this instanceof h)) return new h(g);
                    this.options = o.assign({
                        level: d,
                        method: p,
                        chunkSize: 16384,
                        windowBits: 15,
                        memLevel: 8,
                        strategy: m,
                        to: ""
                    }, g || {});
                    var x = this.options;
                    x.raw && 0 < x.windowBits ? x.windowBits = -x.windowBits : x.gzip && 0 < x.windowBits && x.windowBits < 16 && (x.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new l, this.strm.avail_out = 0;
                    var y = a.deflateInit2(this.strm, x.level, x.method, x.windowBits, x.memLevel, x.strategy);
                    if (y !== f) throw new Error(u[y]);
                    if (x.header && a.deflateSetHeader(this.strm, x.header), x.dictionary) {
                        var b;
                        if (b = typeof x.dictionary == "string" ? s.string2buf(x.dictionary) : c.call(x.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(x.dictionary) : x.dictionary, (y = a.deflateSetDictionary(this.strm, b)) !== f) throw new Error(u[y]);
                        this._dict_set = !0
                    }
                }

                function v(g, x) {
                    var y = new h(x);
                    if (y.push(g, !0), y.err) throw y.msg || u[y.err];
                    return y.result
                }
                h.prototype.push = function(g, x) {
                    var y, b, _ = this.strm,
                        w = this.options.chunkSize;
                    if (this.ended) return !1;
                    b = x === ~~x ? x : x === !0 ? 4 : 0, typeof g == "string" ? _.input = s.string2buf(g) : c.call(g) === "[object ArrayBuffer]" ? _.input = new Uint8Array(g) : _.input = g, _.next_in = 0, _.avail_in = _.input.length;
                    do {
                        if (_.avail_out === 0 && (_.output = new o.Buf8(w), _.next_out = 0, _.avail_out = w), (y = a.deflate(_, b)) !== 1 && y !== f) return this.onEnd(y), !(this.ended = !0);
                        _.avail_out !== 0 && (_.avail_in !== 0 || b !== 4 && b !== 2) || (this.options.to === "string" ? this.onData(s.buf2binstring(o.shrinkBuf(_.output, _.next_out))) : this.onData(o.shrinkBuf(_.output, _.next_out)))
                    } while ((0 < _.avail_in || _.avail_out === 0) && y !== 1);
                    return b === 4 ? (y = a.deflateEnd(this.strm), this.onEnd(y), this.ended = !0, y === f) : b !== 2 || (this.onEnd(f), !(_.avail_out = 0))
                }, h.prototype.onData = function(g) {
                    this.chunks.push(g)
                }, h.prototype.onEnd = function(g) {
                    g === f && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = g, this.msg = this.strm.msg
                }, i.Deflate = h, i.deflate = v, i.deflateRaw = function(g, x) {
                    return (x = x || {}).raw = !0, v(g, x)
                }, i.gzip = function(g, x) {
                    return (x = x || {}).gzip = !0, v(g, x)
                }
            }, {
                "./utils/common": 41,
                "./utils/strings": 42,
                "./zlib/deflate": 46,
                "./zlib/messages": 51,
                "./zlib/zstream": 53
            }],
            40: [function(r, n, i) {
                var a = r("./zlib/inflate"),
                    o = r("./utils/common"),
                    s = r("./utils/strings"),
                    u = r("./zlib/constants"),
                    l = r("./zlib/messages"),
                    c = r("./zlib/zstream"),
                    f = r("./zlib/gzheader"),
                    d = Object.prototype.toString;

                function m(h) {
                    if (!(this instanceof m)) return new m(h);
                    this.options = o.assign({
                        chunkSize: 16384,
                        windowBits: 0,
                        to: ""
                    }, h || {});
                    var v = this.options;
                    v.raw && 0 <= v.windowBits && v.windowBits < 16 && (v.windowBits = -v.windowBits, v.windowBits === 0 && (v.windowBits = -15)), !(0 <= v.windowBits && v.windowBits < 16) || h && h.windowBits || (v.windowBits += 32), 15 < v.windowBits && v.windowBits < 48 && (15 & v.windowBits) == 0 && (v.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new c, this.strm.avail_out = 0;
                    var g = a.inflateInit2(this.strm, v.windowBits);
                    if (g !== u.Z_OK) throw new Error(l[g]);
                    this.header = new f, a.inflateGetHeader(this.strm, this.header)
                }

                function p(h, v) {
                    var g = new m(v);
                    if (g.push(h, !0), g.err) throw g.msg || l[g.err];
                    return g.result
                }
                m.prototype.push = function(h, v) {
                    var g, x, y, b, _, w, A = this.strm,
                        E = this.options.chunkSize,
                        k = this.options.dictionary,
                        N = !1;
                    if (this.ended) return !1;
                    x = v === ~~v ? v : v === !0 ? u.Z_FINISH : u.Z_NO_FLUSH, typeof h == "string" ? A.input = s.binstring2buf(h) : d.call(h) === "[object ArrayBuffer]" ? A.input = new Uint8Array(h) : A.input = h, A.next_in = 0, A.avail_in = A.input.length;
                    do {
                        if (A.avail_out === 0 && (A.output = new o.Buf8(E), A.next_out = 0, A.avail_out = E), (g = a.inflate(A, u.Z_NO_FLUSH)) === u.Z_NEED_DICT && k && (w = typeof k == "string" ? s.string2buf(k) : d.call(k) === "[object ArrayBuffer]" ? new Uint8Array(k) : k, g = a.inflateSetDictionary(this.strm, w)), g === u.Z_BUF_ERROR && N === !0 && (g = u.Z_OK, N = !1), g !== u.Z_STREAM_END && g !== u.Z_OK) return this.onEnd(g), !(this.ended = !0);
                        A.next_out && (A.avail_out !== 0 && g !== u.Z_STREAM_END && (A.avail_in !== 0 || x !== u.Z_FINISH && x !== u.Z_SYNC_FLUSH) || (this.options.to === "string" ? (y = s.utf8border(A.output, A.next_out), b = A.next_out - y, _ = s.buf2string(A.output, y), A.next_out = b, A.avail_out = E - b, b && o.arraySet(A.output, A.output, y, b, 0), this.onData(_)) : this.onData(o.shrinkBuf(A.output, A.next_out)))), A.avail_in === 0 && A.avail_out === 0 && (N = !0)
                    } while ((0 < A.avail_in || A.avail_out === 0) && g !== u.Z_STREAM_END);
                    return g === u.Z_STREAM_END && (x = u.Z_FINISH), x === u.Z_FINISH ? (g = a.inflateEnd(this.strm), this.onEnd(g), this.ended = !0, g === u.Z_OK) : x !== u.Z_SYNC_FLUSH || (this.onEnd(u.Z_OK), !(A.avail_out = 0))
                }, m.prototype.onData = function(h) {
                    this.chunks.push(h)
                }, m.prototype.onEnd = function(h) {
                    h === u.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = h, this.msg = this.strm.msg
                }, i.Inflate = m, i.inflate = p, i.inflateRaw = function(h, v) {
                    return (v = v || {}).raw = !0, p(h, v)
                }, i.ungzip = p
            }, {
                "./utils/common": 41,
                "./utils/strings": 42,
                "./zlib/constants": 44,
                "./zlib/gzheader": 47,
                "./zlib/inflate": 49,
                "./zlib/messages": 51,
                "./zlib/zstream": 53
            }],
            41: [function(r, n, i) {
                var a = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
                i.assign = function(u) {
                    for (var l = Array.prototype.slice.call(arguments, 1); l.length;) {
                        var c = l.shift();
                        if (c) {
                            if (typeof c != "object") throw new TypeError(c + "must be non-object");
                            for (var f in c) c.hasOwnProperty(f) && (u[f] = c[f])
                        }
                    }
                    return u
                }, i.shrinkBuf = function(u, l) {
                    return u.length === l ? u : u.subarray ? u.subarray(0, l) : (u.length = l, u)
                };
                var o = {
                        arraySet: function(u, l, c, f, d) {
                            if (l.subarray && u.subarray) u.set(l.subarray(c, c + f), d);
                            else
                                for (var m = 0; m < f; m++) u[d + m] = l[c + m]
                        },
                        flattenChunks: function(u) {
                            var l, c, f, d, m, p;
                            for (l = f = 0, c = u.length; l < c; l++) f += u[l].length;
                            for (p = new Uint8Array(f), l = d = 0, c = u.length; l < c; l++) m = u[l], p.set(m, d), d += m.length;
                            return p
                        }
                    },
                    s = {
                        arraySet: function(u, l, c, f, d) {
                            for (var m = 0; m < f; m++) u[d + m] = l[c + m]
                        },
                        flattenChunks: function(u) {
                            return [].concat.apply([], u)
                        }
                    };
                i.setTyped = function(u) {
                    u ? (i.Buf8 = Uint8Array, i.Buf16 = Uint16Array, i.Buf32 = Int32Array, i.assign(i, o)) : (i.Buf8 = Array, i.Buf16 = Array, i.Buf32 = Array, i.assign(i, s))
                }, i.setTyped(a)
            }, {}],
            42: [function(r, n, i) {
                var a = r("./common"),
                    o = !0,
                    s = !0;
                try {
                    String.fromCharCode.apply(null, [0])
                } catch {
                    o = !1
                }
                try {
                    String.fromCharCode.apply(null, new Uint8Array(1))
                } catch {
                    s = !1
                }
                for (var u = new a.Buf8(256), l = 0; l < 256; l++) u[l] = 252 <= l ? 6 : 248 <= l ? 5 : 240 <= l ? 4 : 224 <= l ? 3 : 192 <= l ? 2 : 1;

                function c(f, d) {
                    if (d < 65537 && (f.subarray && s || !f.subarray && o)) return String.fromCharCode.apply(null, a.shrinkBuf(f, d));
                    for (var m = "", p = 0; p < d; p++) m += String.fromCharCode(f[p]);
                    return m
                }
                u[254] = u[254] = 1, i.string2buf = function(f) {
                    var d, m, p, h, v, g = f.length,
                        x = 0;
                    for (h = 0; h < g; h++)(64512 & (m = f.charCodeAt(h))) == 55296 && h + 1 < g && (64512 & (p = f.charCodeAt(h + 1))) == 56320 && (m = 65536 + (m - 55296 << 10) + (p - 56320), h++), x += m < 128 ? 1 : m < 2048 ? 2 : m < 65536 ? 3 : 4;
                    for (d = new a.Buf8(x), h = v = 0; v < x; h++)(64512 & (m = f.charCodeAt(h))) == 55296 && h + 1 < g && (64512 & (p = f.charCodeAt(h + 1))) == 56320 && (m = 65536 + (m - 55296 << 10) + (p - 56320), h++), m < 128 ? d[v++] = m : (m < 2048 ? d[v++] = 192 | m >>> 6 : (m < 65536 ? d[v++] = 224 | m >>> 12 : (d[v++] = 240 | m >>> 18, d[v++] = 128 | m >>> 12 & 63), d[v++] = 128 | m >>> 6 & 63), d[v++] = 128 | 63 & m);
                    return d
                }, i.buf2binstring = function(f) {
                    return c(f, f.length)
                }, i.binstring2buf = function(f) {
                    for (var d = new a.Buf8(f.length), m = 0, p = d.length; m < p; m++) d[m] = f.charCodeAt(m);
                    return d
                }, i.buf2string = function(f, d) {
                    var m, p, h, v, g = d || f.length,
                        x = new Array(2 * g);
                    for (m = p = 0; m < g;)
                        if ((h = f[m++]) < 128) x[p++] = h;
                        else if (4 < (v = u[h])) x[p++] = 65533, m += v - 1;
                    else {
                        for (h &= v === 2 ? 31 : v === 3 ? 15 : 7; 1 < v && m < g;) h = h << 6 | 63 & f[m++], v--;
                        1 < v ? x[p++] = 65533 : h < 65536 ? x[p++] = h : (h -= 65536, x[p++] = 55296 | h >> 10 & 1023, x[p++] = 56320 | 1023 & h)
                    }
                    return c(x, p)
                }, i.utf8border = function(f, d) {
                    var m;
                    for ((d = d || f.length) > f.length && (d = f.length), m = d - 1; 0 <= m && (192 & f[m]) == 128;) m--;
                    return m < 0 || m === 0 ? d : m + u[f[m]] > d ? m : d
                }
            }, {
                "./common": 41
            }],
            43: [function(r, n, i) {
                n.exports = function(a, o, s, u) {
                    for (var l = 65535 & a | 0, c = a >>> 16 & 65535 | 0, f = 0; s !== 0;) {
                        for (s -= f = 2e3 < s ? 2e3 : s; c = c + (l = l + o[u++] | 0) | 0, --f;);
                        l %= 65521, c %= 65521
                    }
                    return l | c << 16 | 0
                }
            }, {}],
            44: [function(r, n, i) {
                n.exports = {
                    Z_NO_FLUSH: 0,
                    Z_PARTIAL_FLUSH: 1,
                    Z_SYNC_FLUSH: 2,
                    Z_FULL_FLUSH: 3,
                    Z_FINISH: 4,
                    Z_BLOCK: 5,
                    Z_TREES: 6,
                    Z_OK: 0,
                    Z_STREAM_END: 1,
                    Z_NEED_DICT: 2,
                    Z_ERRNO: -1,
                    Z_STREAM_ERROR: -2,
                    Z_DATA_ERROR: -3,
                    Z_BUF_ERROR: -5,
                    Z_NO_COMPRESSION: 0,
                    Z_BEST_SPEED: 1,
                    Z_BEST_COMPRESSION: 9,
                    Z_DEFAULT_COMPRESSION: -1,
                    Z_FILTERED: 1,
                    Z_HUFFMAN_ONLY: 2,
                    Z_RLE: 3,
                    Z_FIXED: 4,
                    Z_DEFAULT_STRATEGY: 0,
                    Z_BINARY: 0,
                    Z_TEXT: 1,
                    Z_UNKNOWN: 2,
                    Z_DEFLATED: 8
                }
            }, {}],
            45: [function(r, n, i) {
                var a = function() {
                    for (var o, s = [], u = 0; u < 256; u++) {
                        o = u;
                        for (var l = 0; l < 8; l++) o = 1 & o ? 3988292384 ^ o >>> 1 : o >>> 1;
                        s[u] = o
                    }
                    return s
                }();
                n.exports = function(o, s, u, l) {
                    var c = a,
                        f = l + u;
                    o ^= -1;
                    for (var d = l; d < f; d++) o = o >>> 8 ^ c[255 & (o ^ s[d])];
                    return -1 ^ o
                }
            }, {}],
            46: [function(r, n, i) {
                var a, o = r("../utils/common"),
                    s = r("./trees"),
                    u = r("./adler32"),
                    l = r("./crc32"),
                    c = r("./messages"),
                    f = 0,
                    d = 4,
                    m = 0,
                    p = -2,
                    h = -1,
                    v = 4,
                    g = 2,
                    x = 8,
                    y = 9,
                    b = 286,
                    _ = 30,
                    w = 19,
                    A = 2 * b + 1,
                    E = 15,
                    k = 3,
                    N = 258,
                    I = N + k + 1,
                    T = 42,
                    M = 113,
                    S = 1,
                    D = 2,
                    z = 3,
                    B = 4;

                function q(O, G) {
                    return O.msg = c[G], G
                }

                function H(O) {
                    return (O << 1) - (4 < O ? 9 : 0)
                }

                function Q(O) {
                    for (var G = O.length; 0 <= --G;) O[G] = 0
                }

                function F(O) {
                    var G = O.state,
                        W = G.pending;
                    W > O.avail_out && (W = O.avail_out), W !== 0 && (o.arraySet(O.output, G.pending_buf, G.pending_out, W, O.next_out), O.next_out += W, G.pending_out += W, O.total_out += W, O.avail_out -= W, G.pending -= W, G.pending === 0 && (G.pending_out = 0))
                }

                function L(O, G) {
                    s._tr_flush_block(O, 0 <= O.block_start ? O.block_start : -1, O.strstart - O.block_start, G), O.block_start = O.strstart, F(O.strm)
                }

                function ae(O, G) {
                    O.pending_buf[O.pending++] = G
                }

                function re(O, G) {
                    O.pending_buf[O.pending++] = G >>> 8 & 255, O.pending_buf[O.pending++] = 255 & G
                }

                function ee(O, G) {
                    var W, $, P = O.max_chain_length,
                        j = O.strstart,
                        Z = O.prev_length,
                        J = O.nice_match,
                        U = O.strstart > O.w_size - I ? O.strstart - (O.w_size - I) : 0,
                        ne = O.window,
                        le = O.w_mask,
                        ie = O.prev,
                        he = O.strstart + N,
                        Ce = ne[j + Z - 1],
                        be = ne[j + Z];
                    O.prev_length >= O.good_match && (P >>= 2), J > O.lookahead && (J = O.lookahead);
                    do
                        if (ne[(W = G) + Z] === be && ne[W + Z - 1] === Ce && ne[W] === ne[j] && ne[++W] === ne[j + 1]) {
                            j += 2, W++;
                            do; while (ne[++j] === ne[++W] && ne[++j] === ne[++W] && ne[++j] === ne[++W] && ne[++j] === ne[++W] && ne[++j] === ne[++W] && ne[++j] === ne[++W] && ne[++j] === ne[++W] && ne[++j] === ne[++W] && j < he);
                            if ($ = N - (he - j), j = he - N, Z < $) {
                                if (O.match_start = G, J <= (Z = $)) break;
                                Ce = ne[j + Z - 1], be = ne[j + Z]
                            }
                        } while ((G = ie[G & le]) > U && --P != 0);
                    return Z <= O.lookahead ? Z : O.lookahead
                }

                function ye(O) {
                    var G, W, $, P, j, Z, J, U, ne, le, ie = O.w_size;
                    do {
                        if (P = O.window_size - O.lookahead - O.strstart, O.strstart >= ie + (ie - I)) {
                            for (o.arraySet(O.window, O.window, ie, ie, 0), O.match_start -= ie, O.strstart -= ie, O.block_start -= ie, G = W = O.hash_size; $ = O.head[--G], O.head[G] = ie <= $ ? $ - ie : 0, --W;);
                            for (G = W = ie; $ = O.prev[--G], O.prev[G] = ie <= $ ? $ - ie : 0, --W;);
                            P += ie
                        }
                        if (O.strm.avail_in === 0) break;
                        if (Z = O.strm, J = O.window, U = O.strstart + O.lookahead, ne = P, le = void 0, le = Z.avail_in, ne < le && (le = ne), W = le === 0 ? 0 : (Z.avail_in -= le, o.arraySet(J, Z.input, Z.next_in, le, U), Z.state.wrap === 1 ? Z.adler = u(Z.adler, J, le, U) : Z.state.wrap === 2 && (Z.adler = l(Z.adler, J, le, U)), Z.next_in += le, Z.total_in += le, le), O.lookahead += W, O.lookahead + O.insert >= k)
                            for (j = O.strstart - O.insert, O.ins_h = O.window[j], O.ins_h = (O.ins_h << O.hash_shift ^ O.window[j + 1]) & O.hash_mask; O.insert && (O.ins_h = (O.ins_h << O.hash_shift ^ O.window[j + k - 1]) & O.hash_mask, O.prev[j & O.w_mask] = O.head[O.ins_h], O.head[O.ins_h] = j, j++, O.insert--, !(O.lookahead + O.insert < k)););
                    } while (O.lookahead < I && O.strm.avail_in !== 0)
                }

                function $e(O, G) {
                    for (var W, $;;) {
                        if (O.lookahead < I) {
                            if (ye(O), O.lookahead < I && G === f) return S;
                            if (O.lookahead === 0) break
                        }
                        if (W = 0, O.lookahead >= k && (O.ins_h = (O.ins_h << O.hash_shift ^ O.window[O.strstart + k - 1]) & O.hash_mask, W = O.prev[O.strstart & O.w_mask] = O.head[O.ins_h], O.head[O.ins_h] = O.strstart), W !== 0 && O.strstart - W <= O.w_size - I && (O.match_length = ee(O, W)), O.match_length >= k)
                            if ($ = s._tr_tally(O, O.strstart - O.match_start, O.match_length - k), O.lookahead -= O.match_length, O.match_length <= O.max_lazy_match && O.lookahead >= k) {
                                for (O.match_length--; O.strstart++, O.ins_h = (O.ins_h << O.hash_shift ^ O.window[O.strstart + k - 1]) & O.hash_mask, W = O.prev[O.strstart & O.w_mask] = O.head[O.ins_h], O.head[O.ins_h] = O.strstart, --O.match_length != 0;);
                                O.strstart++
                            } else O.strstart += O.match_length, O.match_length = 0, O.ins_h = O.window[O.strstart], O.ins_h = (O.ins_h << O.hash_shift ^ O.window[O.strstart + 1]) & O.hash_mask;
                        else $ = s._tr_tally(O, 0, O.window[O.strstart]), O.lookahead--, O.strstart++;
                        if ($ && (L(O, !1), O.strm.avail_out === 0)) return S
                    }
                    return O.insert = O.strstart < k - 1 ? O.strstart : k - 1, G === d ? (L(O, !0), O.strm.avail_out === 0 ? z : B) : O.last_lit && (L(O, !1), O.strm.avail_out === 0) ? S : D
                }

                function se(O, G) {
                    for (var W, $, P;;) {
                        if (O.lookahead < I) {
                            if (ye(O), O.lookahead < I && G === f) return S;
                            if (O.lookahead === 0) break
                        }
                        if (W = 0, O.lookahead >= k && (O.ins_h = (O.ins_h << O.hash_shift ^ O.window[O.strstart + k - 1]) & O.hash_mask, W = O.prev[O.strstart & O.w_mask] = O.head[O.ins_h], O.head[O.ins_h] = O.strstart), O.prev_length = O.match_length, O.prev_match = O.match_start, O.match_length = k - 1, W !== 0 && O.prev_length < O.max_lazy_match && O.strstart - W <= O.w_size - I && (O.match_length = ee(O, W), O.match_length <= 5 && (O.strategy === 1 || O.match_length === k && 4096 < O.strstart - O.match_start) && (O.match_length = k - 1)), O.prev_length >= k && O.match_length <= O.prev_length) {
                            for (P = O.strstart + O.lookahead - k, $ = s._tr_tally(O, O.strstart - 1 - O.prev_match, O.prev_length - k), O.lookahead -= O.prev_length - 1, O.prev_length -= 2; ++O.strstart <= P && (O.ins_h = (O.ins_h << O.hash_shift ^ O.window[O.strstart + k - 1]) & O.hash_mask, W = O.prev[O.strstart & O.w_mask] = O.head[O.ins_h], O.head[O.ins_h] = O.strstart), --O.prev_length != 0;);
                            if (O.match_available = 0, O.match_length = k - 1, O.strstart++, $ && (L(O, !1), O.strm.avail_out === 0)) return S
                        } else if (O.match_available) {
                            if (($ = s._tr_tally(O, 0, O.window[O.strstart - 1])) && L(O, !1), O.strstart++, O.lookahead--, O.strm.avail_out === 0) return S
                        } else O.match_available = 1, O.strstart++, O.lookahead--
                    }
                    return O.match_available && ($ = s._tr_tally(O, 0, O.window[O.strstart - 1]), O.match_available = 0), O.insert = O.strstart < k - 1 ? O.strstart : k - 1, G === d ? (L(O, !0), O.strm.avail_out === 0 ? z : B) : O.last_lit && (L(O, !1), O.strm.avail_out === 0) ? S : D
                }

                function V(O, G, W, $, P) {
                    this.good_length = O, this.max_lazy = G, this.nice_length = W, this.max_chain = $, this.func = P
                }

                function ue() {
                    this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = x, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new o.Buf16(2 * A), this.dyn_dtree = new o.Buf16(2 * (2 * _ + 1)), this.bl_tree = new o.Buf16(2 * (2 * w + 1)), Q(this.dyn_ltree), Q(this.dyn_dtree), Q(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new o.Buf16(E + 1), this.heap = new o.Buf16(2 * b + 1), Q(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new o.Buf16(2 * b + 1), Q(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
                }

                function ce(O) {
                    var G;
                    return O && O.state ? (O.total_in = O.total_out = 0, O.data_type = g, (G = O.state).pending = 0, G.pending_out = 0, G.wrap < 0 && (G.wrap = -G.wrap), G.status = G.wrap ? T : M, O.adler = G.wrap === 2 ? 0 : 1, G.last_flush = f, s._tr_init(G), m) : q(O, p)
                }

                function X(O) {
                    var G = ce(O);
                    return G === m && function(W) {
                        W.window_size = 2 * W.w_size, Q(W.head), W.max_lazy_match = a[W.level].max_lazy, W.good_match = a[W.level].good_length, W.nice_match = a[W.level].nice_length, W.max_chain_length = a[W.level].max_chain, W.strstart = 0, W.block_start = 0, W.lookahead = 0, W.insert = 0, W.match_length = W.prev_length = k - 1, W.match_available = 0, W.ins_h = 0
                    }(O.state), G
                }

                function ge(O, G, W, $, P, j) {
                    if (!O) return p;
                    var Z = 1;
                    if (G === h && (G = 6), $ < 0 ? (Z = 0, $ = -$) : 15 < $ && (Z = 2, $ -= 16), P < 1 || y < P || W !== x || $ < 8 || 15 < $ || G < 0 || 9 < G || j < 0 || v < j) return q(O, p);
                    $ === 8 && ($ = 9);
                    var J = new ue;
                    return (O.state = J).strm = O, J.wrap = Z, J.gzhead = null, J.w_bits = $, J.w_size = 1 << J.w_bits, J.w_mask = J.w_size - 1, J.hash_bits = P + 7, J.hash_size = 1 << J.hash_bits, J.hash_mask = J.hash_size - 1, J.hash_shift = ~~((J.hash_bits + k - 1) / k), J.window = new o.Buf8(2 * J.w_size), J.head = new o.Buf16(J.hash_size), J.prev = new o.Buf16(J.w_size), J.lit_bufsize = 1 << P + 6, J.pending_buf_size = 4 * J.lit_bufsize, J.pending_buf = new o.Buf8(J.pending_buf_size), J.d_buf = 1 * J.lit_bufsize, J.l_buf = 3 * J.lit_bufsize, J.level = G, J.strategy = j, J.method = W, X(O)
                }
                a = [new V(0, 0, 0, 0, function(O, G) {
                    var W = 65535;
                    for (W > O.pending_buf_size - 5 && (W = O.pending_buf_size - 5);;) {
                        if (O.lookahead <= 1) {
                            if (ye(O), O.lookahead === 0 && G === f) return S;
                            if (O.lookahead === 0) break
                        }
                        O.strstart += O.lookahead, O.lookahead = 0;
                        var $ = O.block_start + W;
                        if ((O.strstart === 0 || O.strstart >= $) && (O.lookahead = O.strstart - $, O.strstart = $, L(O, !1), O.strm.avail_out === 0) || O.strstart - O.block_start >= O.w_size - I && (L(O, !1), O.strm.avail_out === 0)) return S
                    }
                    return O.insert = 0, G === d ? (L(O, !0), O.strm.avail_out === 0 ? z : B) : (O.strstart > O.block_start && (L(O, !1), O.strm.avail_out), S)
                }), new V(4, 4, 8, 4, $e), new V(4, 5, 16, 8, $e), new V(4, 6, 32, 32, $e), new V(4, 4, 16, 16, se), new V(8, 16, 32, 32, se), new V(8, 16, 128, 128, se), new V(8, 32, 128, 256, se), new V(32, 128, 258, 1024, se), new V(32, 258, 258, 4096, se)], i.deflateInit = function(O, G) {
                    return ge(O, G, x, 15, 8, 0)
                }, i.deflateInit2 = ge, i.deflateReset = X, i.deflateResetKeep = ce, i.deflateSetHeader = function(O, G) {
                    return O && O.state ? O.state.wrap !== 2 ? p : (O.state.gzhead = G, m) : p
                }, i.deflate = function(O, G) {
                    var W, $, P, j;
                    if (!O || !O.state || 5 < G || G < 0) return O ? q(O, p) : p;
                    if ($ = O.state, !O.output || !O.input && O.avail_in !== 0 || $.status === 666 && G !== d) return q(O, O.avail_out === 0 ? -5 : p);
                    if ($.strm = O, W = $.last_flush, $.last_flush = G, $.status === T)
                        if ($.wrap === 2) O.adler = 0, ae($, 31), ae($, 139), ae($, 8), $.gzhead ? (ae($, ($.gzhead.text ? 1 : 0) + ($.gzhead.hcrc ? 2 : 0) + ($.gzhead.extra ? 4 : 0) + ($.gzhead.name ? 8 : 0) + ($.gzhead.comment ? 16 : 0)), ae($, 255 & $.gzhead.time), ae($, $.gzhead.time >> 8 & 255), ae($, $.gzhead.time >> 16 & 255), ae($, $.gzhead.time >> 24 & 255), ae($, $.level === 9 ? 2 : 2 <= $.strategy || $.level < 2 ? 4 : 0), ae($, 255 & $.gzhead.os), $.gzhead.extra && $.gzhead.extra.length && (ae($, 255 & $.gzhead.extra.length), ae($, $.gzhead.extra.length >> 8 & 255)), $.gzhead.hcrc && (O.adler = l(O.adler, $.pending_buf, $.pending, 0)), $.gzindex = 0, $.status = 69) : (ae($, 0), ae($, 0), ae($, 0), ae($, 0), ae($, 0), ae($, $.level === 9 ? 2 : 2 <= $.strategy || $.level < 2 ? 4 : 0), ae($, 3), $.status = M);
                        else {
                            var Z = x + ($.w_bits - 8 << 4) << 8;
                            Z |= (2 <= $.strategy || $.level < 2 ? 0 : $.level < 6 ? 1 : $.level === 6 ? 2 : 3) << 6, $.strstart !== 0 && (Z |= 32), Z += 31 - Z % 31, $.status = M, re($, Z), $.strstart !== 0 && (re($, O.adler >>> 16), re($, 65535 & O.adler)), O.adler = 1
                        } if ($.status === 69)
                        if ($.gzhead.extra) {
                            for (P = $.pending; $.gzindex < (65535 & $.gzhead.extra.length) && ($.pending !== $.pending_buf_size || ($.gzhead.hcrc && $.pending > P && (O.adler = l(O.adler, $.pending_buf, $.pending - P, P)), F(O), P = $.pending, $.pending !== $.pending_buf_size));) ae($, 255 & $.gzhead.extra[$.gzindex]), $.gzindex++;
                            $.gzhead.hcrc && $.pending > P && (O.adler = l(O.adler, $.pending_buf, $.pending - P, P)), $.gzindex === $.gzhead.extra.length && ($.gzindex = 0, $.status = 73)
                        } else $.status = 73;
                    if ($.status === 73)
                        if ($.gzhead.name) {
                            P = $.pending;
                            do {
                                if ($.pending === $.pending_buf_size && ($.gzhead.hcrc && $.pending > P && (O.adler = l(O.adler, $.pending_buf, $.pending - P, P)), F(O), P = $.pending, $.pending === $.pending_buf_size)) {
                                    j = 1;
                                    break
                                }
                                j = $.gzindex < $.gzhead.name.length ? 255 & $.gzhead.name.charCodeAt($.gzindex++) : 0, ae($, j)
                            } while (j !== 0);
                            $.gzhead.hcrc && $.pending > P && (O.adler = l(O.adler, $.pending_buf, $.pending - P, P)), j === 0 && ($.gzindex = 0, $.status = 91)
                        } else $.status = 91;
                    if ($.status === 91)
                        if ($.gzhead.comment) {
                            P = $.pending;
                            do {
                                if ($.pending === $.pending_buf_size && ($.gzhead.hcrc && $.pending > P && (O.adler = l(O.adler, $.pending_buf, $.pending - P, P)), F(O), P = $.pending, $.pending === $.pending_buf_size)) {
                                    j = 1;
                                    break
                                }
                                j = $.gzindex < $.gzhead.comment.length ? 255 & $.gzhead.comment.charCodeAt($.gzindex++) : 0, ae($, j)
                            } while (j !== 0);
                            $.gzhead.hcrc && $.pending > P && (O.adler = l(O.adler, $.pending_buf, $.pending - P, P)), j === 0 && ($.status = 103)
                        } else $.status = 103;
                    if ($.status === 103 && ($.gzhead.hcrc ? ($.pending + 2 > $.pending_buf_size && F(O), $.pending + 2 <= $.pending_buf_size && (ae($, 255 & O.adler), ae($, O.adler >> 8 & 255), O.adler = 0, $.status = M)) : $.status = M), $.pending !== 0) {
                        if (F(O), O.avail_out === 0) return $.last_flush = -1, m
                    } else if (O.avail_in === 0 && H(G) <= H(W) && G !== d) return q(O, -5);
                    if ($.status === 666 && O.avail_in !== 0) return q(O, -5);
                    if (O.avail_in !== 0 || $.lookahead !== 0 || G !== f && $.status !== 666) {
                        var J = $.strategy === 2 ? function(U, ne) {
                            for (var le;;) {
                                if (U.lookahead === 0 && (ye(U), U.lookahead === 0)) {
                                    if (ne === f) return S;
                                    break
                                }
                                if (U.match_length = 0, le = s._tr_tally(U, 0, U.window[U.strstart]), U.lookahead--, U.strstart++, le && (L(U, !1), U.strm.avail_out === 0)) return S
                            }
                            return U.insert = 0, ne === d ? (L(U, !0), U.strm.avail_out === 0 ? z : B) : U.last_lit && (L(U, !1), U.strm.avail_out === 0) ? S : D
                        }($, G) : $.strategy === 3 ? function(U, ne) {
                            for (var le, ie, he, Ce, be = U.window;;) {
                                if (U.lookahead <= N) {
                                    if (ye(U), U.lookahead <= N && ne === f) return S;
                                    if (U.lookahead === 0) break
                                }
                                if (U.match_length = 0, U.lookahead >= k && 0 < U.strstart && (ie = be[he = U.strstart - 1]) === be[++he] && ie === be[++he] && ie === be[++he]) {
                                    Ce = U.strstart + N;
                                    do; while (ie === be[++he] && ie === be[++he] && ie === be[++he] && ie === be[++he] && ie === be[++he] && ie === be[++he] && ie === be[++he] && ie === be[++he] && he < Ce);
                                    U.match_length = N - (Ce - he), U.match_length > U.lookahead && (U.match_length = U.lookahead)
                                }
                                if (U.match_length >= k ? (le = s._tr_tally(U, 1, U.match_length - k), U.lookahead -= U.match_length, U.strstart += U.match_length, U.match_length = 0) : (le = s._tr_tally(U, 0, U.window[U.strstart]), U.lookahead--, U.strstart++), le && (L(U, !1), U.strm.avail_out === 0)) return S
                            }
                            return U.insert = 0, ne === d ? (L(U, !0), U.strm.avail_out === 0 ? z : B) : U.last_lit && (L(U, !1), U.strm.avail_out === 0) ? S : D
                        }($, G) : a[$.level].func($, G);
                        if (J !== z && J !== B || ($.status = 666), J === S || J === z) return O.avail_out === 0 && ($.last_flush = -1), m;
                        if (J === D && (G === 1 ? s._tr_align($) : G !== 5 && (s._tr_stored_block($, 0, 0, !1), G === 3 && (Q($.head), $.lookahead === 0 && ($.strstart = 0, $.block_start = 0, $.insert = 0))), F(O), O.avail_out === 0)) return $.last_flush = -1, m
                    }
                    return G !== d ? m : $.wrap <= 0 ? 1 : ($.wrap === 2 ? (ae($, 255 & O.adler), ae($, O.adler >> 8 & 255), ae($, O.adler >> 16 & 255), ae($, O.adler >> 24 & 255), ae($, 255 & O.total_in), ae($, O.total_in >> 8 & 255), ae($, O.total_in >> 16 & 255), ae($, O.total_in >> 24 & 255)) : (re($, O.adler >>> 16), re($, 65535 & O.adler)), F(O), 0 < $.wrap && ($.wrap = -$.wrap), $.pending !== 0 ? m : 1)
                }, i.deflateEnd = function(O) {
                    var G;
                    return O && O.state ? (G = O.state.status) !== T && G !== 69 && G !== 73 && G !== 91 && G !== 103 && G !== M && G !== 666 ? q(O, p) : (O.state = null, G === M ? q(O, -3) : m) : p
                }, i.deflateSetDictionary = function(O, G) {
                    var W, $, P, j, Z, J, U, ne, le = G.length;
                    if (!O || !O.state || (j = (W = O.state).wrap) === 2 || j === 1 && W.status !== T || W.lookahead) return p;
                    for (j === 1 && (O.adler = u(O.adler, G, le, 0)), W.wrap = 0, le >= W.w_size && (j === 0 && (Q(W.head), W.strstart = 0, W.block_start = 0, W.insert = 0), ne = new o.Buf8(W.w_size), o.arraySet(ne, G, le - W.w_size, W.w_size, 0), G = ne, le = W.w_size), Z = O.avail_in, J = O.next_in, U = O.input, O.avail_in = le, O.next_in = 0, O.input = G, ye(W); W.lookahead >= k;) {
                        for ($ = W.strstart, P = W.lookahead - (k - 1); W.ins_h = (W.ins_h << W.hash_shift ^ W.window[$ + k - 1]) & W.hash_mask, W.prev[$ & W.w_mask] = W.head[W.ins_h], W.head[W.ins_h] = $, $++, --P;);
                        W.strstart = $, W.lookahead = k - 1, ye(W)
                    }
                    return W.strstart += W.lookahead, W.block_start = W.strstart, W.insert = W.lookahead, W.lookahead = 0, W.match_length = W.prev_length = k - 1, W.match_available = 0, O.next_in = J, O.input = U, O.avail_in = Z, W.wrap = j, m
                }, i.deflateInfo = "pako deflate (from Nodeca project)"
            }, {
                "../utils/common": 41,
                "./adler32": 43,
                "./crc32": 45,
                "./messages": 51,
                "./trees": 52
            }],
            47: [function(r, n, i) {
                n.exports = function() {
                    this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
                }
            }, {}],
            48: [function(r, n, i) {
                n.exports = function(a, o) {
                    var s, u, l, c, f, d, m, p, h, v, g, x, y, b, _, w, A, E, k, N, I, T, M, S, D;
                    s = a.state, u = a.next_in, S = a.input, l = u + (a.avail_in - 5), c = a.next_out, D = a.output, f = c - (o - a.avail_out), d = c + (a.avail_out - 257), m = s.dmax, p = s.wsize, h = s.whave, v = s.wnext, g = s.window, x = s.hold, y = s.bits, b = s.lencode, _ = s.distcode, w = (1 << s.lenbits) - 1, A = (1 << s.distbits) - 1;
                    e: do {
                        y < 15 && (x += S[u++] << y, y += 8, x += S[u++] << y, y += 8), E = b[x & w];
                        t: for (;;) {
                            if (x >>>= k = E >>> 24, y -= k, (k = E >>> 16 & 255) === 0) D[c++] = 65535 & E;
                            else {
                                if (!(16 & k)) {
                                    if ((64 & k) == 0) {
                                        E = b[(65535 & E) + (x & (1 << k) - 1)];
                                        continue t
                                    }
                                    if (32 & k) {
                                        s.mode = 12;
                                        break e
                                    }
                                    a.msg = "invalid literal/length code", s.mode = 30;
                                    break e
                                }
                                N = 65535 & E, (k &= 15) && (y < k && (x += S[u++] << y, y += 8), N += x & (1 << k) - 1, x >>>= k, y -= k), y < 15 && (x += S[u++] << y, y += 8, x += S[u++] << y, y += 8), E = _[x & A];
                                r: for (;;) {
                                    if (x >>>= k = E >>> 24, y -= k, !(16 & (k = E >>> 16 & 255))) {
                                        if ((64 & k) == 0) {
                                            E = _[(65535 & E) + (x & (1 << k) - 1)];
                                            continue r
                                        }
                                        a.msg = "invalid distance code", s.mode = 30;
                                        break e
                                    }
                                    if (I = 65535 & E, y < (k &= 15) && (x += S[u++] << y, (y += 8) < k && (x += S[u++] << y, y += 8)), m < (I += x & (1 << k) - 1)) {
                                        a.msg = "invalid distance too far back", s.mode = 30;
                                        break e
                                    }
                                    if (x >>>= k, y -= k, (k = c - f) < I) {
                                        if (h < (k = I - k) && s.sane) {
                                            a.msg = "invalid distance too far back", s.mode = 30;
                                            break e
                                        }
                                        if (M = g, (T = 0) === v) {
                                            if (T += p - k, k < N) {
                                                for (N -= k; D[c++] = g[T++], --k;);
                                                T = c - I, M = D
                                            }
                                        } else if (v < k) {
                                            if (T += p + v - k, (k -= v) < N) {
                                                for (N -= k; D[c++] = g[T++], --k;);
                                                if (T = 0, v < N) {
                                                    for (N -= k = v; D[c++] = g[T++], --k;);
                                                    T = c - I, M = D
                                                }
                                            }
                                        } else if (T += v - k, k < N) {
                                            for (N -= k; D[c++] = g[T++], --k;);
                                            T = c - I, M = D
                                        }
                                        for (; 2 < N;) D[c++] = M[T++], D[c++] = M[T++], D[c++] = M[T++], N -= 3;
                                        N && (D[c++] = M[T++], 1 < N && (D[c++] = M[T++]))
                                    } else {
                                        for (T = c - I; D[c++] = D[T++], D[c++] = D[T++], D[c++] = D[T++], 2 < (N -= 3););
                                        N && (D[c++] = D[T++], 1 < N && (D[c++] = D[T++]))
                                    }
                                    break
                                }
                            }
                            break
                        }
                    } while (u < l && c < d);
                    u -= N = y >> 3, x &= (1 << (y -= N << 3)) - 1, a.next_in = u, a.next_out = c, a.avail_in = u < l ? l - u + 5 : 5 - (u - l), a.avail_out = c < d ? d - c + 257 : 257 - (c - d), s.hold = x, s.bits = y
                }
            }, {}],
            49: [function(r, n, i) {
                var a = r("../utils/common"),
                    o = r("./adler32"),
                    s = r("./crc32"),
                    u = r("./inffast"),
                    l = r("./inftrees"),
                    c = 1,
                    f = 2,
                    d = 0,
                    m = -2,
                    p = 1,
                    h = 852,
                    v = 592;

                function g(T) {
                    return (T >>> 24 & 255) + (T >>> 8 & 65280) + ((65280 & T) << 8) + ((255 & T) << 24)
                }

                function x() {
                    this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new a.Buf16(320), this.work = new a.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
                }

                function y(T) {
                    var M;
                    return T && T.state ? (M = T.state, T.total_in = T.total_out = M.total = 0, T.msg = "", M.wrap && (T.adler = 1 & M.wrap), M.mode = p, M.last = 0, M.havedict = 0, M.dmax = 32768, M.head = null, M.hold = 0, M.bits = 0, M.lencode = M.lendyn = new a.Buf32(h), M.distcode = M.distdyn = new a.Buf32(v), M.sane = 1, M.back = -1, d) : m
                }

                function b(T) {
                    var M;
                    return T && T.state ? ((M = T.state).wsize = 0, M.whave = 0, M.wnext = 0, y(T)) : m
                }

                function _(T, M) {
                    var S, D;
                    return T && T.state ? (D = T.state, M < 0 ? (S = 0, M = -M) : (S = 1 + (M >> 4), M < 48 && (M &= 15)), M && (M < 8 || 15 < M) ? m : (D.window !== null && D.wbits !== M && (D.window = null), D.wrap = S, D.wbits = M, b(T))) : m
                }

                function w(T, M) {
                    var S, D;
                    return T ? (D = new x, (T.state = D).window = null, (S = _(T, M)) !== d && (T.state = null), S) : m
                }
                var A, E, k = !0;

                function N(T) {
                    if (k) {
                        var M;
                        for (A = new a.Buf32(512), E = new a.Buf32(32), M = 0; M < 144;) T.lens[M++] = 8;
                        for (; M < 256;) T.lens[M++] = 9;
                        for (; M < 280;) T.lens[M++] = 7;
                        for (; M < 288;) T.lens[M++] = 8;
                        for (l(c, T.lens, 0, 288, A, 0, T.work, {
                                bits: 9
                            }), M = 0; M < 32;) T.lens[M++] = 5;
                        l(f, T.lens, 0, 32, E, 0, T.work, {
                            bits: 5
                        }), k = !1
                    }
                    T.lencode = A, T.lenbits = 9, T.distcode = E, T.distbits = 5
                }

                function I(T, M, S, D) {
                    var z, B = T.state;
                    return B.window === null && (B.wsize = 1 << B.wbits, B.wnext = 0, B.whave = 0, B.window = new a.Buf8(B.wsize)), D >= B.wsize ? (a.arraySet(B.window, M, S - B.wsize, B.wsize, 0), B.wnext = 0, B.whave = B.wsize) : (D < (z = B.wsize - B.wnext) && (z = D), a.arraySet(B.window, M, S - D, z, B.wnext), (D -= z) ? (a.arraySet(B.window, M, S - D, D, 0), B.wnext = D, B.whave = B.wsize) : (B.wnext += z, B.wnext === B.wsize && (B.wnext = 0), B.whave < B.wsize && (B.whave += z))), 0
                }
                i.inflateReset = b, i.inflateReset2 = _, i.inflateResetKeep = y, i.inflateInit = function(T) {
                    return w(T, 15)
                }, i.inflateInit2 = w, i.inflate = function(T, M) {
                    var S, D, z, B, q, H, Q, F, L, ae, re, ee, ye, $e, se, V, ue, ce, X, ge, O, G, W, $, P = 0,
                        j = new a.Buf8(4),
                        Z = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                    if (!T || !T.state || !T.output || !T.input && T.avail_in !== 0) return m;
                    (S = T.state).mode === 12 && (S.mode = 13), q = T.next_out, z = T.output, Q = T.avail_out, B = T.next_in, D = T.input, H = T.avail_in, F = S.hold, L = S.bits, ae = H, re = Q, G = d;
                    e: for (;;) switch (S.mode) {
                        case p:
                            if (S.wrap === 0) {
                                S.mode = 13;
                                break
                            }
                            for (; L < 16;) {
                                if (H === 0) break e;
                                H--, F += D[B++] << L, L += 8
                            }
                            if (2 & S.wrap && F === 35615) {
                                j[S.check = 0] = 255 & F, j[1] = F >>> 8 & 255, S.check = s(S.check, j, 2, 0), L = F = 0, S.mode = 2;
                                break
                            }
                            if (S.flags = 0, S.head && (S.head.done = !1), !(1 & S.wrap) || (((255 & F) << 8) + (F >> 8)) % 31) {
                                T.msg = "incorrect header check", S.mode = 30;
                                break
                            }
                            if ((15 & F) != 8) {
                                T.msg = "unknown compression method", S.mode = 30;
                                break
                            }
                            if (L -= 4, O = 8 + (15 & (F >>>= 4)), S.wbits === 0) S.wbits = O;
                            else if (O > S.wbits) {
                                T.msg = "invalid window size", S.mode = 30;
                                break
                            }
                            S.dmax = 1 << O, T.adler = S.check = 1, S.mode = 512 & F ? 10 : 12, L = F = 0;
                            break;
                        case 2:
                            for (; L < 16;) {
                                if (H === 0) break e;
                                H--, F += D[B++] << L, L += 8
                            }
                            if (S.flags = F, (255 & S.flags) != 8) {
                                T.msg = "unknown compression method", S.mode = 30;
                                break
                            }
                            if (57344 & S.flags) {
                                T.msg = "unknown header flags set", S.mode = 30;
                                break
                            }
                            S.head && (S.head.text = F >> 8 & 1), 512 & S.flags && (j[0] = 255 & F, j[1] = F >>> 8 & 255, S.check = s(S.check, j, 2, 0)), L = F = 0, S.mode = 3;
                        case 3:
                            for (; L < 32;) {
                                if (H === 0) break e;
                                H--, F += D[B++] << L, L += 8
                            }
                            S.head && (S.head.time = F), 512 & S.flags && (j[0] = 255 & F, j[1] = F >>> 8 & 255, j[2] = F >>> 16 & 255, j[3] = F >>> 24 & 255, S.check = s(S.check, j, 4, 0)), L = F = 0, S.mode = 4;
                        case 4:
                            for (; L < 16;) {
                                if (H === 0) break e;
                                H--, F += D[B++] << L, L += 8
                            }
                            S.head && (S.head.xflags = 255 & F, S.head.os = F >> 8), 512 & S.flags && (j[0] = 255 & F, j[1] = F >>> 8 & 255, S.check = s(S.check, j, 2, 0)), L = F = 0, S.mode = 5;
                        case 5:
                            if (1024 & S.flags) {
                                for (; L < 16;) {
                                    if (H === 0) break e;
                                    H--, F += D[B++] << L, L += 8
                                }
                                S.length = F, S.head && (S.head.extra_len = F), 512 & S.flags && (j[0] = 255 & F, j[1] = F >>> 8 & 255, S.check = s(S.check, j, 2, 0)), L = F = 0
                            } else S.head && (S.head.extra = null);
                            S.mode = 6;
                        case 6:
                            if (1024 & S.flags && (H < (ee = S.length) && (ee = H), ee && (S.head && (O = S.head.extra_len - S.length, S.head.extra || (S.head.extra = new Array(S.head.extra_len)), a.arraySet(S.head.extra, D, B, ee, O)), 512 & S.flags && (S.check = s(S.check, D, ee, B)), H -= ee, B += ee, S.length -= ee), S.length)) break e;
                            S.length = 0, S.mode = 7;
                        case 7:
                            if (2048 & S.flags) {
                                if (H === 0) break e;
                                for (ee = 0; O = D[B + ee++], S.head && O && S.length < 65536 && (S.head.name += String.fromCharCode(O)), O && ee < H;);
                                if (512 & S.flags && (S.check = s(S.check, D, ee, B)), H -= ee, B += ee, O) break e
                            } else S.head && (S.head.name = null);
                            S.length = 0, S.mode = 8;
                        case 8:
                            if (4096 & S.flags) {
                                if (H === 0) break e;
                                for (ee = 0; O = D[B + ee++], S.head && O && S.length < 65536 && (S.head.comment += String.fromCharCode(O)), O && ee < H;);
                                if (512 & S.flags && (S.check = s(S.check, D, ee, B)), H -= ee, B += ee, O) break e
                            } else S.head && (S.head.comment = null);
                            S.mode = 9;
                        case 9:
                            if (512 & S.flags) {
                                for (; L < 16;) {
                                    if (H === 0) break e;
                                    H--, F += D[B++] << L, L += 8
                                }
                                if (F !== (65535 & S.check)) {
                                    T.msg = "header crc mismatch", S.mode = 30;
                                    break
                                }
                                L = F = 0
                            }
                            S.head && (S.head.hcrc = S.flags >> 9 & 1, S.head.done = !0), T.adler = S.check = 0, S.mode = 12;
                            break;
                        case 10:
                            for (; L < 32;) {
                                if (H === 0) break e;
                                H--, F += D[B++] << L, L += 8
                            }
                            T.adler = S.check = g(F), L = F = 0, S.mode = 11;
                        case 11:
                            if (S.havedict === 0) return T.next_out = q, T.avail_out = Q, T.next_in = B, T.avail_in = H, S.hold = F, S.bits = L, 2;
                            T.adler = S.check = 1, S.mode = 12;
                        case 12:
                            if (M === 5 || M === 6) break e;
                        case 13:
                            if (S.last) {
                                F >>>= 7 & L, L -= 7 & L, S.mode = 27;
                                break
                            }
                            for (; L < 3;) {
                                if (H === 0) break e;
                                H--, F += D[B++] << L, L += 8
                            }
                            switch (S.last = 1 & F, L -= 1, 3 & (F >>>= 1)) {
                                case 0:
                                    S.mode = 14;
                                    break;
                                case 1:
                                    if (N(S), S.mode = 20, M !== 6) break;
                                    F >>>= 2, L -= 2;
                                    break e;
                                case 2:
                                    S.mode = 17;
                                    break;
                                case 3:
                                    T.msg = "invalid block type", S.mode = 30
                            }
                            F >>>= 2, L -= 2;
                            break;
                        case 14:
                            for (F >>>= 7 & L, L -= 7 & L; L < 32;) {
                                if (H === 0) break e;
                                H--, F += D[B++] << L, L += 8
                            }
                            if ((65535 & F) != (F >>> 16 ^ 65535)) {
                                T.msg = "invalid stored block lengths", S.mode = 30;
                                break
                            }
                            if (S.length = 65535 & F, L = F = 0, S.mode = 15, M === 6) break e;
                        case 15:
                            S.mode = 16;
                        case 16:
                            if (ee = S.length) {
                                if (H < ee && (ee = H), Q < ee && (ee = Q), ee === 0) break e;
                                a.arraySet(z, D, B, ee, q), H -= ee, B += ee, Q -= ee, q += ee, S.length -= ee;
                                break
                            }
                            S.mode = 12;
                            break;
                        case 17:
                            for (; L < 14;) {
                                if (H === 0) break e;
                                H--, F += D[B++] << L, L += 8
                            }
                            if (S.nlen = 257 + (31 & F), F >>>= 5, L -= 5, S.ndist = 1 + (31 & F), F >>>= 5, L -= 5, S.ncode = 4 + (15 & F), F >>>= 4, L -= 4, 286 < S.nlen || 30 < S.ndist) {
                                T.msg = "too many length or distance symbols", S.mode = 30;
                                break
                            }
                            S.have = 0, S.mode = 18;
                        case 18:
                            for (; S.have < S.ncode;) {
                                for (; L < 3;) {
                                    if (H === 0) break e;
                                    H--, F += D[B++] << L, L += 8
                                }
                                S.lens[Z[S.have++]] = 7 & F, F >>>= 3, L -= 3
                            }
                            for (; S.have < 19;) S.lens[Z[S.have++]] = 0;
                            if (S.lencode = S.lendyn, S.lenbits = 7, W = {
                                    bits: S.lenbits
                                }, G = l(0, S.lens, 0, 19, S.lencode, 0, S.work, W), S.lenbits = W.bits, G) {
                                T.msg = "invalid code lengths set", S.mode = 30;
                                break
                            }
                            S.have = 0, S.mode = 19;
                        case 19:
                            for (; S.have < S.nlen + S.ndist;) {
                                for (; V = (P = S.lencode[F & (1 << S.lenbits) - 1]) >>> 16 & 255, ue = 65535 & P, !((se = P >>> 24) <= L);) {
                                    if (H === 0) break e;
                                    H--, F += D[B++] << L, L += 8
                                }
                                if (ue < 16) F >>>= se, L -= se, S.lens[S.have++] = ue;
                                else {
                                    if (ue === 16) {
                                        for ($ = se + 2; L < $;) {
                                            if (H === 0) break e;
                                            H--, F += D[B++] << L, L += 8
                                        }
                                        if (F >>>= se, L -= se, S.have === 0) {
                                            T.msg = "invalid bit length repeat", S.mode = 30;
                                            break
                                        }
                                        O = S.lens[S.have - 1], ee = 3 + (3 & F), F >>>= 2, L -= 2
                                    } else if (ue === 17) {
                                        for ($ = se + 3; L < $;) {
                                            if (H === 0) break e;
                                            H--, F += D[B++] << L, L += 8
                                        }
                                        L -= se, O = 0, ee = 3 + (7 & (F >>>= se)), F >>>= 3, L -= 3
                                    } else {
                                        for ($ = se + 7; L < $;) {
                                            if (H === 0) break e;
                                            H--, F += D[B++] << L, L += 8
                                        }
                                        L -= se, O = 0, ee = 11 + (127 & (F >>>= se)), F >>>= 7, L -= 7
                                    }
                                    if (S.have + ee > S.nlen + S.ndist) {
                                        T.msg = "invalid bit length repeat", S.mode = 30;
                                        break
                                    }
                                    for (; ee--;) S.lens[S.have++] = O
                                }
                            }
                            if (S.mode === 30) break;
                            if (S.lens[256] === 0) {
                                T.msg = "invalid code -- missing end-of-block", S.mode = 30;
                                break
                            }
                            if (S.lenbits = 9, W = {
                                    bits: S.lenbits
                                }, G = l(c, S.lens, 0, S.nlen, S.lencode, 0, S.work, W), S.lenbits = W.bits, G) {
                                T.msg = "invalid literal/lengths set", S.mode = 30;
                                break
                            }
                            if (S.distbits = 6, S.distcode = S.distdyn, W = {
                                    bits: S.distbits
                                }, G = l(f, S.lens, S.nlen, S.ndist, S.distcode, 0, S.work, W), S.distbits = W.bits, G) {
                                T.msg = "invalid distances set", S.mode = 30;
                                break
                            }
                            if (S.mode = 20, M === 6) break e;
                        case 20:
                            S.mode = 21;
                        case 21:
                            if (6 <= H && 258 <= Q) {
                                T.next_out = q, T.avail_out = Q, T.next_in = B, T.avail_in = H, S.hold = F, S.bits = L, u(T, re), q = T.next_out, z = T.output, Q = T.avail_out, B = T.next_in, D = T.input, H = T.avail_in, F = S.hold, L = S.bits, S.mode === 12 && (S.back = -1);
                                break
                            }
                            for (S.back = 0; V = (P = S.lencode[F & (1 << S.lenbits) - 1]) >>> 16 & 255, ue = 65535 & P, !((se = P >>> 24) <= L);) {
                                if (H === 0) break e;
                                H--, F += D[B++] << L, L += 8
                            }
                            if (V && (240 & V) == 0) {
                                for (ce = se, X = V, ge = ue; V = (P = S.lencode[ge + ((F & (1 << ce + X) - 1) >> ce)]) >>> 16 & 255, ue = 65535 & P, !(ce + (se = P >>> 24) <= L);) {
                                    if (H === 0) break e;
                                    H--, F += D[B++] << L, L += 8
                                }
                                F >>>= ce, L -= ce, S.back += ce
                            }
                            if (F >>>= se, L -= se, S.back += se, S.length = ue, V === 0) {
                                S.mode = 26;
                                break
                            }
                            if (32 & V) {
                                S.back = -1, S.mode = 12;
                                break
                            }
                            if (64 & V) {
                                T.msg = "invalid literal/length code", S.mode = 30;
                                break
                            }
                            S.extra = 15 & V, S.mode = 22;
                        case 22:
                            if (S.extra) {
                                for ($ = S.extra; L < $;) {
                                    if (H === 0) break e;
                                    H--, F += D[B++] << L, L += 8
                                }
                                S.length += F & (1 << S.extra) - 1, F >>>= S.extra, L -= S.extra, S.back += S.extra
                            }
                            S.was = S.length, S.mode = 23;
                        case 23:
                            for (; V = (P = S.distcode[F & (1 << S.distbits) - 1]) >>> 16 & 255, ue = 65535 & P, !((se = P >>> 24) <= L);) {
                                if (H === 0) break e;
                                H--, F += D[B++] << L, L += 8
                            }
                            if ((240 & V) == 0) {
                                for (ce = se, X = V, ge = ue; V = (P = S.distcode[ge + ((F & (1 << ce + X) - 1) >> ce)]) >>> 16 & 255, ue = 65535 & P, !(ce + (se = P >>> 24) <= L);) {
                                    if (H === 0) break e;
                                    H--, F += D[B++] << L, L += 8
                                }
                                F >>>= ce, L -= ce, S.back += ce
                            }
                            if (F >>>= se, L -= se, S.back += se, 64 & V) {
                                T.msg = "invalid distance code", S.mode = 30;
                                break
                            }
                            S.offset = ue, S.extra = 15 & V, S.mode = 24;
                        case 24:
                            if (S.extra) {
                                for ($ = S.extra; L < $;) {
                                    if (H === 0) break e;
                                    H--, F += D[B++] << L, L += 8
                                }
                                S.offset += F & (1 << S.extra) - 1, F >>>= S.extra, L -= S.extra, S.back += S.extra
                            }
                            if (S.offset > S.dmax) {
                                T.msg = "invalid distance too far back", S.mode = 30;
                                break
                            }
                            S.mode = 25;
                        case 25:
                            if (Q === 0) break e;
                            if (ee = re - Q, S.offset > ee) {
                                if ((ee = S.offset - ee) > S.whave && S.sane) {
                                    T.msg = "invalid distance too far back", S.mode = 30;
                                    break
                                }
                                ye = ee > S.wnext ? (ee -= S.wnext, S.wsize - ee) : S.wnext - ee, ee > S.length && (ee = S.length), $e = S.window
                            } else $e = z, ye = q - S.offset, ee = S.length;
                            for (Q < ee && (ee = Q), Q -= ee, S.length -= ee; z[q++] = $e[ye++], --ee;);
                            S.length === 0 && (S.mode = 21);
                            break;
                        case 26:
                            if (Q === 0) break e;
                            z[q++] = S.length, Q--, S.mode = 21;
                            break;
                        case 27:
                            if (S.wrap) {
                                for (; L < 32;) {
                                    if (H === 0) break e;
                                    H--, F |= D[B++] << L, L += 8
                                }
                                if (re -= Q, T.total_out += re, S.total += re, re && (T.adler = S.check = S.flags ? s(S.check, z, re, q - re) : o(S.check, z, re, q - re)), re = Q, (S.flags ? F : g(F)) !== S.check) {
                                    T.msg = "incorrect data check", S.mode = 30;
                                    break
                                }
                                L = F = 0
                            }
                            S.mode = 28;
                        case 28:
                            if (S.wrap && S.flags) {
                                for (; L < 32;) {
                                    if (H === 0) break e;
                                    H--, F += D[B++] << L, L += 8
                                }
                                if (F !== (4294967295 & S.total)) {
                                    T.msg = "incorrect length check", S.mode = 30;
                                    break
                                }
                                L = F = 0
                            }
                            S.mode = 29;
                        case 29:
                            G = 1;
                            break e;
                        case 30:
                            G = -3;
                            break e;
                        case 31:
                            return -4;
                        case 32:
                        default:
                            return m
                    }
                    return T.next_out = q, T.avail_out = Q, T.next_in = B, T.avail_in = H, S.hold = F, S.bits = L, (S.wsize || re !== T.avail_out && S.mode < 30 && (S.mode < 27 || M !== 4)) && I(T, T.output, T.next_out, re - T.avail_out) ? (S.mode = 31, -4) : (ae -= T.avail_in, re -= T.avail_out, T.total_in += ae, T.total_out += re, S.total += re, S.wrap && re && (T.adler = S.check = S.flags ? s(S.check, z, re, T.next_out - re) : o(S.check, z, re, T.next_out - re)), T.data_type = S.bits + (S.last ? 64 : 0) + (S.mode === 12 ? 128 : 0) + (S.mode === 20 || S.mode === 15 ? 256 : 0), (ae == 0 && re === 0 || M === 4) && G === d && (G = -5), G)
                }, i.inflateEnd = function(T) {
                    if (!T || !T.state) return m;
                    var M = T.state;
                    return M.window && (M.window = null), T.state = null, d
                }, i.inflateGetHeader = function(T, M) {
                    var S;
                    return T && T.state ? (2 & (S = T.state).wrap) == 0 ? m : ((S.head = M).done = !1, d) : m
                }, i.inflateSetDictionary = function(T, M) {
                    var S, D = M.length;
                    return T && T.state ? (S = T.state).wrap !== 0 && S.mode !== 11 ? m : S.mode === 11 && o(1, M, D, 0) !== S.check ? -3 : I(T, M, D, D) ? (S.mode = 31, -4) : (S.havedict = 1, d) : m
                }, i.inflateInfo = "pako inflate (from Nodeca project)"
            }, {
                "../utils/common": 41,
                "./adler32": 43,
                "./crc32": 45,
                "./inffast": 48,
                "./inftrees": 50
            }],
            50: [function(r, n, i) {
                var a = r("../utils/common"),
                    o = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
                    s = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
                    u = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
                    l = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
                n.exports = function(c, f, d, m, p, h, v, g) {
                    var x, y, b, _, w, A, E, k, N, I = g.bits,
                        T = 0,
                        M = 0,
                        S = 0,
                        D = 0,
                        z = 0,
                        B = 0,
                        q = 0,
                        H = 0,
                        Q = 0,
                        F = 0,
                        L = null,
                        ae = 0,
                        re = new a.Buf16(16),
                        ee = new a.Buf16(16),
                        ye = null,
                        $e = 0;
                    for (T = 0; T <= 15; T++) re[T] = 0;
                    for (M = 0; M < m; M++) re[f[d + M]]++;
                    for (z = I, D = 15; 1 <= D && re[D] === 0; D--);
                    if (D < z && (z = D), D === 0) return p[h++] = 20971520, p[h++] = 20971520, g.bits = 1, 0;
                    for (S = 1; S < D && re[S] === 0; S++);
                    for (z < S && (z = S), T = H = 1; T <= 15; T++)
                        if (H <<= 1, (H -= re[T]) < 0) return -1;
                    if (0 < H && (c === 0 || D !== 1)) return -1;
                    for (ee[1] = 0, T = 1; T < 15; T++) ee[T + 1] = ee[T] + re[T];
                    for (M = 0; M < m; M++) f[d + M] !== 0 && (v[ee[f[d + M]]++] = M);
                    if (A = c === 0 ? (L = ye = v, 19) : c === 1 ? (L = o, ae -= 257, ye = s, $e -= 257, 256) : (L = u, ye = l, -1), T = S, w = h, q = M = F = 0, b = -1, _ = (Q = 1 << (B = z)) - 1, c === 1 && 852 < Q || c === 2 && 592 < Q) return 1;
                    for (;;) {
                        for (E = T - q, N = v[M] < A ? (k = 0, v[M]) : v[M] > A ? (k = ye[$e + v[M]], L[ae + v[M]]) : (k = 96, 0), x = 1 << T - q, S = y = 1 << B; p[w + (F >> q) + (y -= x)] = E << 24 | k << 16 | N | 0, y !== 0;);
                        for (x = 1 << T - 1; F & x;) x >>= 1;
                        if (x !== 0 ? (F &= x - 1, F += x) : F = 0, M++, --re[T] == 0) {
                            if (T === D) break;
                            T = f[d + v[M]]
                        }
                        if (z < T && (F & _) !== b) {
                            for (q === 0 && (q = z), w += S, H = 1 << (B = T - q); B + q < D && !((H -= re[B + q]) <= 0);) B++, H <<= 1;
                            if (Q += 1 << B, c === 1 && 852 < Q || c === 2 && 592 < Q) return 1;
                            p[b = F & _] = z << 24 | B << 16 | w - h | 0
                        }
                    }
                    return F !== 0 && (p[w + F] = T - q << 24 | 64 << 16 | 0), g.bits = z, 0
                }
            }, {
                "../utils/common": 41
            }],
            51: [function(r, n, i) {
                n.exports = {
                    2: "need dictionary",
                    1: "stream end",
                    0: "",
                    "-1": "file error",
                    "-2": "stream error",
                    "-3": "data error",
                    "-4": "insufficient memory",
                    "-5": "buffer error",
                    "-6": "incompatible version"
                }
            }, {}],
            52: [function(r, n, i) {
                var a = r("../utils/common"),
                    o = 0,
                    s = 1;

                function u(P) {
                    for (var j = P.length; 0 <= --j;) P[j] = 0
                }
                var l = 0,
                    c = 29,
                    f = 256,
                    d = f + 1 + c,
                    m = 30,
                    p = 19,
                    h = 2 * d + 1,
                    v = 15,
                    g = 16,
                    x = 7,
                    y = 256,
                    b = 16,
                    _ = 17,
                    w = 18,
                    A = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
                    E = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
                    k = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                    N = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                    I = new Array(2 * (d + 2));
                u(I);
                var T = new Array(2 * m);
                u(T);
                var M = new Array(512);
                u(M);
                var S = new Array(256);
                u(S);
                var D = new Array(c);
                u(D);
                var z, B, q, H = new Array(m);

                function Q(P, j, Z, J, U) {
                    this.static_tree = P, this.extra_bits = j, this.extra_base = Z, this.elems = J, this.max_length = U, this.has_stree = P && P.length
                }

                function F(P, j) {
                    this.dyn_tree = P, this.max_code = 0, this.stat_desc = j
                }

                function L(P) {
                    return P < 256 ? M[P] : M[256 + (P >>> 7)]
                }

                function ae(P, j) {
                    P.pending_buf[P.pending++] = 255 & j, P.pending_buf[P.pending++] = j >>> 8 & 255
                }

                function re(P, j, Z) {
                    P.bi_valid > g - Z ? (P.bi_buf |= j << P.bi_valid & 65535, ae(P, P.bi_buf), P.bi_buf = j >> g - P.bi_valid, P.bi_valid += Z - g) : (P.bi_buf |= j << P.bi_valid & 65535, P.bi_valid += Z)
                }

                function ee(P, j, Z) {
                    re(P, Z[2 * j], Z[2 * j + 1])
                }

                function ye(P, j) {
                    for (var Z = 0; Z |= 1 & P, P >>>= 1, Z <<= 1, 0 < --j;);
                    return Z >>> 1
                }

                function $e(P, j, Z) {
                    var J, U, ne = new Array(v + 1),
                        le = 0;
                    for (J = 1; J <= v; J++) ne[J] = le = le + Z[J - 1] << 1;
                    for (U = 0; U <= j; U++) {
                        var ie = P[2 * U + 1];
                        ie !== 0 && (P[2 * U] = ye(ne[ie]++, ie))
                    }
                }

                function se(P) {
                    var j;
                    for (j = 0; j < d; j++) P.dyn_ltree[2 * j] = 0;
                    for (j = 0; j < m; j++) P.dyn_dtree[2 * j] = 0;
                    for (j = 0; j < p; j++) P.bl_tree[2 * j] = 0;
                    P.dyn_ltree[2 * y] = 1, P.opt_len = P.static_len = 0, P.last_lit = P.matches = 0
                }

                function V(P) {
                    8 < P.bi_valid ? ae(P, P.bi_buf) : 0 < P.bi_valid && (P.pending_buf[P.pending++] = P.bi_buf), P.bi_buf = 0, P.bi_valid = 0
                }

                function ue(P, j, Z, J) {
                    var U = 2 * j,
                        ne = 2 * Z;
                    return P[U] < P[ne] || P[U] === P[ne] && J[j] <= J[Z]
                }

                function ce(P, j, Z) {
                    for (var J = P.heap[Z], U = Z << 1; U <= P.heap_len && (U < P.heap_len && ue(j, P.heap[U + 1], P.heap[U], P.depth) && U++, !ue(j, J, P.heap[U], P.depth));) P.heap[Z] = P.heap[U], Z = U, U <<= 1;
                    P.heap[Z] = J
                }

                function X(P, j, Z) {
                    var J, U, ne, le, ie = 0;
                    if (P.last_lit !== 0)
                        for (; J = P.pending_buf[P.d_buf + 2 * ie] << 8 | P.pending_buf[P.d_buf + 2 * ie + 1], U = P.pending_buf[P.l_buf + ie], ie++, J === 0 ? ee(P, U, j) : (ee(P, (ne = S[U]) + f + 1, j), (le = A[ne]) !== 0 && re(P, U -= D[ne], le), ee(P, ne = L(--J), Z), (le = E[ne]) !== 0 && re(P, J -= H[ne], le)), ie < P.last_lit;);
                    ee(P, y, j)
                }

                function ge(P, j) {
                    var Z, J, U, ne = j.dyn_tree,
                        le = j.stat_desc.static_tree,
                        ie = j.stat_desc.has_stree,
                        he = j.stat_desc.elems,
                        Ce = -1;
                    for (P.heap_len = 0, P.heap_max = h, Z = 0; Z < he; Z++) ne[2 * Z] !== 0 ? (P.heap[++P.heap_len] = Ce = Z, P.depth[Z] = 0) : ne[2 * Z + 1] = 0;
                    for (; P.heap_len < 2;) ne[2 * (U = P.heap[++P.heap_len] = Ce < 2 ? ++Ce : 0)] = 1, P.depth[U] = 0, P.opt_len--, ie && (P.static_len -= le[2 * U + 1]);
                    for (j.max_code = Ce, Z = P.heap_len >> 1; 1 <= Z; Z--) ce(P, ne, Z);
                    for (U = he; Z = P.heap[1], P.heap[1] = P.heap[P.heap_len--], ce(P, ne, 1), J = P.heap[1], P.heap[--P.heap_max] = Z, P.heap[--P.heap_max] = J, ne[2 * U] = ne[2 * Z] + ne[2 * J], P.depth[U] = (P.depth[Z] >= P.depth[J] ? P.depth[Z] : P.depth[J]) + 1, ne[2 * Z + 1] = ne[2 * J + 1] = U, P.heap[1] = U++, ce(P, ne, 1), 2 <= P.heap_len;);
                    P.heap[--P.heap_max] = P.heap[1],
                        function(be, ft) {
                            var xn, At, _n, Le, pi, Lo, Dt = ft.dyn_tree,
                                _c = ft.max_code,
                                ay = ft.stat_desc.static_tree,
                                oy = ft.stat_desc.has_stree,
                                sy = ft.stat_desc.extra_bits,
                                wc = ft.stat_desc.extra_base,
                                wn = ft.stat_desc.max_length,
                                mi = 0;
                            for (Le = 0; Le <= v; Le++) be.bl_count[Le] = 0;
                            for (Dt[2 * be.heap[be.heap_max] + 1] = 0, xn = be.heap_max + 1; xn < h; xn++) wn < (Le = Dt[2 * Dt[2 * (At = be.heap[xn]) + 1] + 1] + 1) && (Le = wn, mi++), Dt[2 * At + 1] = Le, _c < At || (be.bl_count[Le]++, pi = 0, wc <= At && (pi = sy[At - wc]), Lo = Dt[2 * At], be.opt_len += Lo * (Le + pi), oy && (be.static_len += Lo * (ay[2 * At + 1] + pi)));
                            if (mi !== 0) {
                                do {
                                    for (Le = wn - 1; be.bl_count[Le] === 0;) Le--;
                                    be.bl_count[Le]--, be.bl_count[Le + 1] += 2, be.bl_count[wn]--, mi -= 2
                                } while (0 < mi);
                                for (Le = wn; Le !== 0; Le--)
                                    for (At = be.bl_count[Le]; At !== 0;) _c < (_n = be.heap[--xn]) || (Dt[2 * _n + 1] !== Le && (be.opt_len += (Le - Dt[2 * _n + 1]) * Dt[2 * _n], Dt[2 * _n + 1] = Le), At--)
                            }
                        }(P, j), $e(ne, Ce, P.bl_count)
                }

                function O(P, j, Z) {
                    var J, U, ne = -1,
                        le = j[1],
                        ie = 0,
                        he = 7,
                        Ce = 4;
                    for (le === 0 && (he = 138, Ce = 3), j[2 * (Z + 1) + 1] = 65535, J = 0; J <= Z; J++) U = le, le = j[2 * (J + 1) + 1], ++ie < he && U === le || (ie < Ce ? P.bl_tree[2 * U] += ie : U !== 0 ? (U !== ne && P.bl_tree[2 * U]++, P.bl_tree[2 * b]++) : ie <= 10 ? P.bl_tree[2 * _]++ : P.bl_tree[2 * w]++, ne = U, Ce = (ie = 0) === le ? (he = 138, 3) : U === le ? (he = 6, 3) : (he = 7, 4))
                }

                function G(P, j, Z) {
                    var J, U, ne = -1,
                        le = j[1],
                        ie = 0,
                        he = 7,
                        Ce = 4;
                    for (le === 0 && (he = 138, Ce = 3), J = 0; J <= Z; J++)
                        if (U = le, le = j[2 * (J + 1) + 1], !(++ie < he && U === le)) {
                            if (ie < Ce)
                                for (; ee(P, U, P.bl_tree), --ie != 0;);
                            else U !== 0 ? (U !== ne && (ee(P, U, P.bl_tree), ie--), ee(P, b, P.bl_tree), re(P, ie - 3, 2)) : ie <= 10 ? (ee(P, _, P.bl_tree), re(P, ie - 3, 3)) : (ee(P, w, P.bl_tree), re(P, ie - 11, 7));
                            ne = U, Ce = (ie = 0) === le ? (he = 138, 3) : U === le ? (he = 6, 3) : (he = 7, 4)
                        }
                }
                u(H);
                var W = !1;

                function $(P, j, Z, J) {
                    re(P, (l << 1) + (J ? 1 : 0), 3),
                        function(U, ne, le, ie) {
                            V(U), ie && (ae(U, le), ae(U, ~le)), a.arraySet(U.pending_buf, U.window, ne, le, U.pending), U.pending += le
                        }(P, j, Z, !0)
                }
                i._tr_init = function(P) {
                    W || (function() {
                        var j, Z, J, U, ne, le = new Array(v + 1);
                        for (U = J = 0; U < c - 1; U++)
                            for (D[U] = J, j = 0; j < 1 << A[U]; j++) S[J++] = U;
                        for (S[J - 1] = U, U = ne = 0; U < 16; U++)
                            for (H[U] = ne, j = 0; j < 1 << E[U]; j++) M[ne++] = U;
                        for (ne >>= 7; U < m; U++)
                            for (H[U] = ne << 7, j = 0; j < 1 << E[U] - 7; j++) M[256 + ne++] = U;
                        for (Z = 0; Z <= v; Z++) le[Z] = 0;
                        for (j = 0; j <= 143;) I[2 * j + 1] = 8, j++, le[8]++;
                        for (; j <= 255;) I[2 * j + 1] = 9, j++, le[9]++;
                        for (; j <= 279;) I[2 * j + 1] = 7, j++, le[7]++;
                        for (; j <= 287;) I[2 * j + 1] = 8, j++, le[8]++;
                        for ($e(I, d + 1, le), j = 0; j < m; j++) T[2 * j + 1] = 5, T[2 * j] = ye(j, 5);
                        z = new Q(I, A, f + 1, d, v), B = new Q(T, E, 0, m, v), q = new Q(new Array(0), k, 0, p, x)
                    }(), W = !0), P.l_desc = new F(P.dyn_ltree, z), P.d_desc = new F(P.dyn_dtree, B), P.bl_desc = new F(P.bl_tree, q), P.bi_buf = 0, P.bi_valid = 0, se(P)
                }, i._tr_stored_block = $, i._tr_flush_block = function(P, j, Z, J) {
                    var U, ne, le = 0;
                    0 < P.level ? (P.strm.data_type === 2 && (P.strm.data_type = function(ie) {
                        var he, Ce = 4093624447;
                        for (he = 0; he <= 31; he++, Ce >>>= 1)
                            if (1 & Ce && ie.dyn_ltree[2 * he] !== 0) return o;
                        if (ie.dyn_ltree[18] !== 0 || ie.dyn_ltree[20] !== 0 || ie.dyn_ltree[26] !== 0) return s;
                        for (he = 32; he < f; he++)
                            if (ie.dyn_ltree[2 * he] !== 0) return s;
                        return o
                    }(P)), ge(P, P.l_desc), ge(P, P.d_desc), le = function(ie) {
                        var he;
                        for (O(ie, ie.dyn_ltree, ie.l_desc.max_code), O(ie, ie.dyn_dtree, ie.d_desc.max_code), ge(ie, ie.bl_desc), he = p - 1; 3 <= he && ie.bl_tree[2 * N[he] + 1] === 0; he--);
                        return ie.opt_len += 3 * (he + 1) + 5 + 5 + 4, he
                    }(P), U = P.opt_len + 3 + 7 >>> 3, (ne = P.static_len + 3 + 7 >>> 3) <= U && (U = ne)) : U = ne = Z + 5, Z + 4 <= U && j !== -1 ? $(P, j, Z, J) : P.strategy === 4 || ne === U ? (re(P, 2 + (J ? 1 : 0), 3), X(P, I, T)) : (re(P, 4 + (J ? 1 : 0), 3), function(ie, he, Ce, be) {
                        var ft;
                        for (re(ie, he - 257, 5), re(ie, Ce - 1, 5), re(ie, be - 4, 4), ft = 0; ft < be; ft++) re(ie, ie.bl_tree[2 * N[ft] + 1], 3);
                        G(ie, ie.dyn_ltree, he - 1), G(ie, ie.dyn_dtree, Ce - 1)
                    }(P, P.l_desc.max_code + 1, P.d_desc.max_code + 1, le + 1), X(P, P.dyn_ltree, P.dyn_dtree)), se(P), J && V(P)
                }, i._tr_tally = function(P, j, Z) {
                    return P.pending_buf[P.d_buf + 2 * P.last_lit] = j >>> 8 & 255, P.pending_buf[P.d_buf + 2 * P.last_lit + 1] = 255 & j, P.pending_buf[P.l_buf + P.last_lit] = 255 & Z, P.last_lit++, j === 0 ? P.dyn_ltree[2 * Z]++ : (P.matches++, j--, P.dyn_ltree[2 * (S[Z] + f + 1)]++, P.dyn_dtree[2 * L(j)]++), P.last_lit === P.lit_bufsize - 1
                }, i._tr_align = function(P) {
                    re(P, 2, 3), ee(P, y, I),
                        function(j) {
                            j.bi_valid === 16 ? (ae(j, j.bi_buf), j.bi_buf = 0, j.bi_valid = 0) : 8 <= j.bi_valid && (j.pending_buf[j.pending++] = 255 & j.bi_buf, j.bi_buf >>= 8, j.bi_valid -= 8)
                        }(P)
                }
            }, {
                "../utils/common": 41
            }],
            53: [function(r, n, i) {
                n.exports = function() {
                    this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
                }
            }, {}],
            54: [function(r, n, i) {
                (function(a) {
                    (function(o, s) {
                        if (!o.setImmediate) {
                            var u, l, c, f, d = 1,
                                m = {},
                                p = !1,
                                h = o.document,
                                v = Object.getPrototypeOf && Object.getPrototypeOf(o);
                            v = v && v.setTimeout ? v : o, u = {}.toString.call(o.process) === "[object process]" ? function(b) {
                                process.nextTick(function() {
                                    x(b)
                                })
                            } : function() {
                                if (o.postMessage && !o.importScripts) {
                                    var b = !0,
                                        _ = o.onmessage;
                                    return o.onmessage = function() {
                                        b = !1
                                    }, o.postMessage("", "*"), o.onmessage = _, b
                                }
                            }() ? (f = "setImmediate$" + Math.random() + "$", o.addEventListener ? o.addEventListener("message", y, !1) : o.attachEvent("onmessage", y), function(b) {
                                o.postMessage(f + b, "*")
                            }) : o.MessageChannel ? ((c = new MessageChannel).port1.onmessage = function(b) {
                                x(b.data)
                            }, function(b) {
                                c.port2.postMessage(b)
                            }) : h && "onreadystatechange" in h.createElement("script") ? (l = h.documentElement, function(b) {
                                var _ = h.createElement("script");
                                _.onreadystatechange = function() {
                                    x(b), _.onreadystatechange = null, l.removeChild(_), _ = null
                                }, l.appendChild(_)
                            }) : function(b) {
                                setTimeout(x, 0, b)
                            }, v.setImmediate = function(b) {
                                typeof b != "function" && (b = new Function("" + b));
                                for (var _ = new Array(arguments.length - 1), w = 0; w < _.length; w++) _[w] = arguments[w + 1];
                                var A = {
                                    callback: b,
                                    args: _
                                };
                                return m[d] = A, u(d), d++
                            }, v.clearImmediate = g
                        }

                        function g(b) {
                            delete m[b]
                        }

                        function x(b) {
                            if (p) setTimeout(x, 0, b);
                            else {
                                var _ = m[b];
                                if (_) {
                                    p = !0;
                                    try {
                                        (function(w) {
                                            var A = w.callback,
                                                E = w.args;
                                            switch (E.length) {
                                                case 0:
                                                    A();
                                                    break;
                                                case 1:
                                                    A(E[0]);
                                                    break;
                                                case 2:
                                                    A(E[0], E[1]);
                                                    break;
                                                case 3:
                                                    A(E[0], E[1], E[2]);
                                                    break;
                                                default:
                                                    A.apply(s, E)
                                            }
                                        })(_)
                                    } finally {
                                        g(b), p = !1
                                    }
                                }
                            }
                        }

                        function y(b) {
                            b.source === o && typeof b.data == "string" && b.data.indexOf(f) === 0 && x(+b.data.slice(f.length))
                        }
                    })(typeof self > "u" ? a === void 0 ? this : a : self)
                }).call(this, typeof ir < "u" ? ir : typeof self < "u" ? self : typeof window < "u" ? window : {})
            }, {}]
        }, {}, [10])(10)
    })
})(Lg);
const $8 = Lg.exports;

function jg(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {
    toString: M8
} = Object.prototype, {
    getPrototypeOf: mc
} = Object, Mo = (e => t => {
    const r = M8.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase())
})(Object.create(null)), Rt = e => (e = e.toLowerCase(), t => Mo(t) === e), Io = e => t => typeof t === e, {
    isArray: bn
} = Array, Zn = Io("undefined");

function I8(e) {
    return e !== null && !Zn(e) && e.constructor !== null && !Zn(e.constructor) && gt(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const Fg = Rt("ArrayBuffer");

function N8(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Fg(e.buffer), t
}
const R8 = Io("string"),
    gt = Io("function"),
    Bg = Io("number"),
    No = e => e !== null && typeof e == "object",
    D8 = e => e === !0 || e === !1,
    Gi = e => {
        if (Mo(e) !== "object") return !1;
        const t = mc(e);
        return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
    },
    L8 = Rt("Date"),
    j8 = Rt("File"),
    F8 = Rt("Blob"),
    B8 = Rt("FileList"),
    z8 = e => No(e) && gt(e.pipe),
    U8 = e => {
        let t;
        return e && (typeof FormData == "function" && e instanceof FormData || gt(e.append) && ((t = Mo(e)) === "formdata" || t === "object" && gt(e.toString) && e.toString() === "[object FormData]"))
    },
    H8 = Rt("URLSearchParams"),
    W8 = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function hi(e, t, {
    allOwnKeys: r = !1
} = {}) {
    if (e === null || typeof e > "u") return;
    let n, i;
    if (typeof e != "object" && (e = [e]), bn(e))
        for (n = 0, i = e.length; n < i; n++) t.call(null, e[n], n, e);
    else {
        const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
            o = a.length;
        let s;
        for (n = 0; n < o; n++) s = a[n], t.call(null, e[s], s, e)
    }
}

function zg(e, t) {
    t = t.toLowerCase();
    const r = Object.keys(e);
    let n = r.length,
        i;
    for (; n-- > 0;)
        if (i = r[n], t === i.toLowerCase()) return i;
    return null
}
const Ug = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(),
    Hg = e => !Zn(e) && e !== Ug;

function Qu() {
    const {
        caseless: e
    } = Hg(this) && this || {}, t = {}, r = (n, i) => {
        const a = e && zg(t, i) || i;
        Gi(t[a]) && Gi(n) ? t[a] = Qu(t[a], n) : Gi(n) ? t[a] = Qu({}, n) : bn(n) ? t[a] = n.slice() : t[a] = n
    };
    for (let n = 0, i = arguments.length; n < i; n++) arguments[n] && hi(arguments[n], r);
    return t
}
const G8 = (e, t, r, {
        allOwnKeys: n
    } = {}) => (hi(t, (i, a) => {
        r && gt(i) ? e[a] = jg(i, r) : e[a] = i
    }, {
        allOwnKeys: n
    }), e),
    q8 = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    V8 = (e, t, r, n) => {
        e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
            value: t.prototype
        }), r && Object.assign(e.prototype, r)
    },
    Y8 = (e, t, r, n) => {
        let i, a, o;
        const s = {};
        if (t = t || {}, e == null) return t;
        do {
            for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0;) o = i[a], (!n || n(o, e, t)) && !s[o] && (t[o] = e[o], s[o] = !0);
            e = r !== !1 && mc(e)
        } while (e && (!r || r(e, t)) && e !== Object.prototype);
        return t
    },
    X8 = (e, t, r) => {
        e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
        const n = e.indexOf(t, r);
        return n !== -1 && n === r
    },
    K8 = e => {
        if (!e) return null;
        if (bn(e)) return e;
        let t = e.length;
        if (!Bg(t)) return null;
        const r = new Array(t);
        for (; t-- > 0;) r[t] = e[t];
        return r
    },
    Z8 = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && mc(Uint8Array)),
    J8 = (e, t) => {
        const n = (e && e[Symbol.iterator]).call(e);
        let i;
        for (;
            (i = n.next()) && !i.done;) {
            const a = i.value;
            t.call(e, a[0], a[1])
        }
    },
    Q8 = (e, t) => {
        let r;
        const n = [];
        for (;
            (r = e.exec(t)) !== null;) n.push(r);
        return n
    },
    eL = Rt("HTMLFormElement"),
    tL = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, n, i) {
        return n.toUpperCase() + i
    }),
    sp = (({
        hasOwnProperty: e
    }) => (t, r) => e.call(t, r))(Object.prototype),
    rL = Rt("RegExp"),
    Wg = (e, t) => {
        const r = Object.getOwnPropertyDescriptors(e),
            n = {};
        hi(r, (i, a) => {
            let o;
            (o = t(i, a, e)) !== !1 && (n[a] = o || i)
        }), Object.defineProperties(e, n)
    },
    nL = e => {
        Wg(e, (t, r) => {
            if (gt(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1) return !1;
            const n = e[r];
            if (!!gt(n)) {
                if (t.enumerable = !1, "writable" in t) {
                    t.writable = !1;
                    return
                }
                t.set || (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + r + "'")
                })
            }
        })
    },
    iL = (e, t) => {
        const r = {},
            n = i => {
                i.forEach(a => {
                    r[a] = !0
                })
            };
        return bn(e) ? n(e) : n(String(e).split(t)), r
    },
    aL = () => {},
    oL = (e, t) => (e = +e, Number.isFinite(e) ? e : t),
    Os = "abcdefghijklmnopqrstuvwxyz",
    up = "0123456789",
    Gg = {
        DIGIT: up,
        ALPHA: Os,
        ALPHA_DIGIT: Os + Os.toUpperCase() + up
    },
    sL = (e = 16, t = Gg.ALPHA_DIGIT) => {
        let r = "";
        const {
            length: n
        } = t;
        for (; e--;) r += t[Math.random() * n | 0];
        return r
    };

function uL(e) {
    return !!(e && gt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const lL = e => {
        const t = new Array(10),
            r = (n, i) => {
                if (No(n)) {
                    if (t.indexOf(n) >= 0) return;
                    if (!("toJSON" in n)) {
                        t[i] = n;
                        const a = bn(n) ? [] : {};
                        return hi(n, (o, s) => {
                            const u = r(o, i + 1);
                            !Zn(u) && (a[s] = u)
                        }), t[i] = void 0, a
                    }
                }
                return n
            };
        return r(e, 0)
    },
    cL = Rt("AsyncFunction"),
    fL = e => e && (No(e) || gt(e)) && gt(e.then) && gt(e.catch),
    Y = {
        isArray: bn,
        isArrayBuffer: Fg,
        isBuffer: I8,
        isFormData: U8,
        isArrayBufferView: N8,
        isString: R8,
        isNumber: Bg,
        isBoolean: D8,
        isObject: No,
        isPlainObject: Gi,
        isUndefined: Zn,
        isDate: L8,
        isFile: j8,
        isBlob: F8,
        isRegExp: rL,
        isFunction: gt,
        isStream: z8,
        isURLSearchParams: H8,
        isTypedArray: Z8,
        isFileList: B8,
        forEach: hi,
        merge: Qu,
        extend: G8,
        trim: W8,
        stripBOM: q8,
        inherits: V8,
        toFlatObject: Y8,
        kindOf: Mo,
        kindOfTest: Rt,
        endsWith: X8,
        toArray: K8,
        forEachEntry: J8,
        matchAll: Q8,
        isHTMLForm: eL,
        hasOwnProperty: sp,
        hasOwnProp: sp,
        reduceDescriptors: Wg,
        freezeMethods: nL,
        toObjectSet: iL,
        toCamelCase: tL,
        noop: aL,
        toFiniteNumber: oL,
        findKey: zg,
        global: Ug,
        isContextDefined: Hg,
        ALPHABET: Gg,
        generateString: sL,
        isSpecCompliantForm: uL,
        toJSONObject: lL,
        isAsyncFn: cL,
        isThenable: fL
    };

function xe(e, t, r, n, i) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), i && (this.response = i)
}
Y.inherits(xe, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: Y.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const qg = xe.prototype,
    Vg = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    Vg[e] = {
        value: e
    }
});
Object.defineProperties(xe, Vg);
Object.defineProperty(qg, "isAxiosError", {
    value: !0
});
xe.from = (e, t, r, n, i, a) => {
    const o = Object.create(qg);
    return Y.toFlatObject(e, o, function(u) {
        return u !== Error.prototype
    }, s => s !== "isAxiosError"), xe.call(o, e.message, t, r, n, i), o.cause = e, o.name = e.name, a && Object.assign(o, a), o
};
const hL = null;

function el(e) {
    return Y.isPlainObject(e) || Y.isArray(e)
}

function Yg(e) {
    return Y.endsWith(e, "[]") ? e.slice(0, -2) : e
}

function lp(e, t, r) {
    return e ? e.concat(t).map(function(i, a) {
        return i = Yg(i), !r && a ? "[" + i + "]" : i
    }).join(r ? "." : "") : t
}

function dL(e) {
    return Y.isArray(e) && !e.some(el)
}
const pL = Y.toFlatObject(Y, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});

function Ro(e, t, r) {
    if (!Y.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData, r = Y.toFlatObject(r, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(h, v) {
        return !Y.isUndefined(v[h])
    });
    const n = r.metaTokens,
        i = r.visitor || c,
        a = r.dots,
        o = r.indexes,
        u = (r.Blob || typeof Blob < "u" && Blob) && Y.isSpecCompliantForm(t);
    if (!Y.isFunction(i)) throw new TypeError("visitor must be a function");

    function l(p) {
        if (p === null) return "";
        if (Y.isDate(p)) return p.toISOString();
        if (!u && Y.isBlob(p)) throw new xe("Blob is not supported. Use a Buffer instead.");
        return Y.isArrayBuffer(p) || Y.isTypedArray(p) ? u && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p
    }

    function c(p, h, v) {
        let g = p;
        if (p && !v && typeof p == "object") {
            if (Y.endsWith(h, "{}")) h = n ? h : h.slice(0, -2), p = JSON.stringify(p);
            else if (Y.isArray(p) && dL(p) || (Y.isFileList(p) || Y.endsWith(h, "[]")) && (g = Y.toArray(p))) return h = Yg(h), g.forEach(function(y, b) {
                !(Y.isUndefined(y) || y === null) && t.append(o === !0 ? lp([h], b, a) : o === null ? h : h + "[]", l(y))
            }), !1
        }
        return el(p) ? !0 : (t.append(lp(v, h, a), l(p)), !1)
    }
    const f = [],
        d = Object.assign(pL, {
            defaultVisitor: c,
            convertValue: l,
            isVisitable: el
        });

    function m(p, h) {
        if (!Y.isUndefined(p)) {
            if (f.indexOf(p) !== -1) throw Error("Circular reference detected in " + h.join("."));
            f.push(p), Y.forEach(p, function(g, x) {
                (!(Y.isUndefined(g) || g === null) && i.call(t, g, Y.isString(x) ? x.trim() : x, h, d)) === !0 && m(g, h ? h.concat(x) : [x])
            }), f.pop()
        }
    }
    if (!Y.isObject(e)) throw new TypeError("data must be an object");
    return m(e), t
}

function cp(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
        return t[n]
    })
}

function vc(e, t) {
    this._pairs = [], e && Ro(e, this, t)
}
const Xg = vc.prototype;
Xg.append = function(t, r) {
    this._pairs.push([t, r])
};
Xg.toString = function(t) {
    const r = t ? function(n) {
        return t.call(this, n, cp)
    } : cp;
    return this._pairs.map(function(i) {
        return r(i[0]) + "=" + r(i[1])
    }, "").join("&")
};

function mL(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function Kg(e, t, r) {
    if (!t) return e;
    const n = r && r.encode || mL,
        i = r && r.serialize;
    let a;
    if (i ? a = i(t, r) : a = Y.isURLSearchParams(t) ? t.toString() : new vc(t, r).toString(n), a) {
        const o = e.indexOf("#");
        o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + a
    }
    return e
}
class vL {
    constructor() {
        this.handlers = []
    }
    use(t, r, n) {
        return this.handlers.push({
            fulfilled: t,
            rejected: r,
            synchronous: n ? n.synchronous : !1,
            runWhen: n ? n.runWhen : null
        }), this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        Y.forEach(this.handlers, function(n) {
            n !== null && t(n)
        })
    }
}
const fp = vL,
    Zg = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    },
    gL = typeof URLSearchParams < "u" ? URLSearchParams : vc,
    yL = typeof FormData < "u" ? FormData : null,
    bL = typeof Blob < "u" ? Blob : null,
    xL = {
        isBrowser: !0,
        classes: {
            URLSearchParams: gL,
            FormData: yL,
            Blob: bL
        },
        protocols: ["http", "https", "file", "blob", "url", "data"]
    },
    Jg = typeof window < "u" && typeof document < "u",
    _L = (e => Jg && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product),
    wL = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(),
    SL = Object.freeze(Object.defineProperty({
        __proto__: null,
        hasBrowserEnv: Jg,
        hasStandardBrowserWebWorkerEnv: wL,
        hasStandardBrowserEnv: _L
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Pt = {
        ...SL,
        ...xL
    };

function OL(e, t) {
    return Ro(e, new Pt.classes.URLSearchParams, Object.assign({
        visitor: function(r, n, i, a) {
            return Pt.isNode && Y.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments)
        }
    }, t))
}

function AL(e) {
    return Y.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}

function kL(e) {
    const t = {},
        r = Object.keys(e);
    let n;
    const i = r.length;
    let a;
    for (n = 0; n < i; n++) a = r[n], t[a] = e[a];
    return t
}

function Qg(e) {
    function t(r, n, i, a) {
        let o = r[a++];
        const s = Number.isFinite(+o),
            u = a >= r.length;
        return o = !o && Y.isArray(i) ? i.length : o, u ? (Y.hasOwnProp(i, o) ? i[o] = [i[o], n] : i[o] = n, !s) : ((!i[o] || !Y.isObject(i[o])) && (i[o] = []), t(r, n, i[o], a) && Y.isArray(i[o]) && (i[o] = kL(i[o])), !s)
    }
    if (Y.isFormData(e) && Y.isFunction(e.entries)) {
        const r = {};
        return Y.forEachEntry(e, (n, i) => {
            t(AL(n), i, r, 0)
        }), r
    }
    return null
}

function EL(e, t, r) {
    if (Y.isString(e)) try {
        return (t || JSON.parse)(e), Y.trim(e)
    } catch (n) {
        if (n.name !== "SyntaxError") throw n
    }
    return (r || JSON.stringify)(e)
}
const gc = {
    transitional: Zg,
    adapter: ["xhr", "http"],
    transformRequest: [function(t, r) {
        const n = r.getContentType() || "",
            i = n.indexOf("application/json") > -1,
            a = Y.isObject(t);
        if (a && Y.isHTMLForm(t) && (t = new FormData(t)), Y.isFormData(t)) return i && i ? JSON.stringify(Qg(t)) : t;
        if (Y.isArrayBuffer(t) || Y.isBuffer(t) || Y.isStream(t) || Y.isFile(t) || Y.isBlob(t)) return t;
        if (Y.isArrayBufferView(t)) return t.buffer;
        if (Y.isURLSearchParams(t)) return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
        let s;
        if (a) {
            if (n.indexOf("application/x-www-form-urlencoded") > -1) return OL(t, this.formSerializer).toString();
            if ((s = Y.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
                const u = this.env && this.env.FormData;
                return Ro(s ? {
                    "files[]": t
                } : t, u && new u, this.formSerializer)
            }
        }
        return a || i ? (r.setContentType("application/json", !1), EL(t)) : t
    }],
    transformResponse: [function(t) {
        const r = this.transitional || gc.transitional,
            n = r && r.forcedJSONParsing,
            i = this.responseType === "json";
        if (t && Y.isString(t) && (n && !this.responseType || i)) {
            const o = !(r && r.silentJSONParsing) && i;
            try {
                return JSON.parse(t)
            } catch (s) {
                if (o) throw s.name === "SyntaxError" ? xe.from(s, xe.ERR_BAD_RESPONSE, this, null, this.response) : s
            }
        }
        return t
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: Pt.classes.FormData,
        Blob: Pt.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
Y.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    gc.headers[e] = {}
});
const yc = gc,
    TL = Y.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    CL = e => {
        const t = {};
        let r, n, i;
        return e && e.split(`
`).forEach(function(o) {
            i = o.indexOf(":"), r = o.substring(0, i).trim().toLowerCase(), n = o.substring(i + 1).trim(), !(!r || t[r] && TL[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n)
        }), t
    },
    hp = Symbol("internals");

function Rn(e) {
    return e && String(e).trim().toLowerCase()
}

function qi(e) {
    return e === !1 || e == null ? e : Y.isArray(e) ? e.map(qi) : String(e)
}

function PL(e) {
    const t = Object.create(null),
        r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let n;
    for (; n = r.exec(e);) t[n[1]] = n[2];
    return t
}
const $L = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

function As(e, t, r, n, i) {
    if (Y.isFunction(n)) return n.call(this, t, r);
    if (i && (t = r), !!Y.isString(t)) {
        if (Y.isString(n)) return t.indexOf(n) !== -1;
        if (Y.isRegExp(n)) return n.test(t)
    }
}

function ML(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n)
}

function IL(e, t) {
    const r = Y.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(n => {
        Object.defineProperty(e, n + r, {
            value: function(i, a, o) {
                return this[n].call(this, t, i, a, o)
            },
            configurable: !0
        })
    })
}
class Do {
    constructor(t) {
        t && this.set(t)
    }
    set(t, r, n) {
        const i = this;

        function a(s, u, l) {
            const c = Rn(u);
            if (!c) throw new Error("header name must be a non-empty string");
            const f = Y.findKey(i, c);
            (!f || i[f] === void 0 || l === !0 || l === void 0 && i[f] !== !1) && (i[f || u] = qi(s))
        }
        const o = (s, u) => Y.forEach(s, (l, c) => a(l, c, u));
        return Y.isPlainObject(t) || t instanceof this.constructor ? o(t, r) : Y.isString(t) && (t = t.trim()) && !$L(t) ? o(CL(t), r) : t != null && a(r, t, n), this
    }
    get(t, r) {
        if (t = Rn(t), t) {
            const n = Y.findKey(this, t);
            if (n) {
                const i = this[n];
                if (!r) return i;
                if (r === !0) return PL(i);
                if (Y.isFunction(r)) return r.call(this, i, n);
                if (Y.isRegExp(r)) return r.exec(i);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, r) {
        if (t = Rn(t), t) {
            const n = Y.findKey(this, t);
            return !!(n && this[n] !== void 0 && (!r || As(this, this[n], n, r)))
        }
        return !1
    }
    delete(t, r) {
        const n = this;
        let i = !1;

        function a(o) {
            if (o = Rn(o), o) {
                const s = Y.findKey(n, o);
                s && (!r || As(n, n[s], s, r)) && (delete n[s], i = !0)
            }
        }
        return Y.isArray(t) ? t.forEach(a) : a(t), i
    }
    clear(t) {
        const r = Object.keys(this);
        let n = r.length,
            i = !1;
        for (; n--;) {
            const a = r[n];
            (!t || As(this, this[a], a, t, !0)) && (delete this[a], i = !0)
        }
        return i
    }
    normalize(t) {
        const r = this,
            n = {};
        return Y.forEach(this, (i, a) => {
            const o = Y.findKey(n, a);
            if (o) {
                r[o] = qi(i), delete r[a];
                return
            }
            const s = t ? ML(a) : String(a).trim();
            s !== a && delete r[a], r[s] = qi(i), n[s] = !0
        }), this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const r = Object.create(null);
        return Y.forEach(this, (n, i) => {
            n != null && n !== !1 && (r[i] = t && Y.isArray(n) ? n.join(", ") : n)
        }), r
    } [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...r) {
        const n = new this(t);
        return r.forEach(i => n.set(i)), n
    }
    static accessor(t) {
        const n = (this[hp] = this[hp] = {
                accessors: {}
            }).accessors,
            i = this.prototype;

        function a(o) {
            const s = Rn(o);
            n[s] || (IL(i, o), n[s] = !0)
        }
        return Y.isArray(t) ? t.forEach(a) : a(t), this
    }
}
Do.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
Y.reduceDescriptors(Do.prototype, ({
    value: e
}, t) => {
    let r = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(n) {
            this[r] = n
        }
    }
});
Y.freezeMethods(Do);
const Yt = Do;

function ks(e, t) {
    const r = this || yc,
        n = t || r,
        i = Yt.from(n.headers);
    let a = n.data;
    return Y.forEach(e, function(s) {
        a = s.call(r, a, i.normalize(), t ? t.status : void 0)
    }), i.normalize(), a
}

function ey(e) {
    return !!(e && e.__CANCEL__)
}

function di(e, t, r) {
    xe.call(this, e == null ? "canceled" : e, xe.ERR_CANCELED, t, r), this.name = "CanceledError"
}
Y.inherits(di, xe, {
    __CANCEL__: !0
});

function NL(e, t, r) {
    const n = r.config.validateStatus;
    !r.status || !n || n(r.status) ? e(r) : t(new xe("Request failed with status code " + r.status, [xe.ERR_BAD_REQUEST, xe.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r))
}
const RL = Pt.hasStandardBrowserEnv ? {
    write(e, t, r, n, i, a) {
        const o = [e + "=" + encodeURIComponent(t)];
        Y.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()), Y.isString(n) && o.push("path=" + n), Y.isString(i) && o.push("domain=" + i), a === !0 && o.push("secure"), document.cookie = o.join("; ")
    },
    read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    },
    remove(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};

function DL(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}

function LL(e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
}

function ty(e, t) {
    return e && !DL(t) ? LL(e, t) : t
}
const jL = Pt.hasStandardBrowserEnv ? function() {
    const t = /(msie|trident)/i.test(navigator.userAgent),
        r = document.createElement("a");
    let n;

    function i(a) {
        let o = a;
        return t && (r.setAttribute("href", o), o = r.href), r.setAttribute("href", o), {
            href: r.href,
            protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
            host: r.host,
            search: r.search ? r.search.replace(/^\?/, "") : "",
            hash: r.hash ? r.hash.replace(/^#/, "") : "",
            hostname: r.hostname,
            port: r.port,
            pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
        }
    }
    return n = i(window.location.href),
        function(o) {
            const s = Y.isString(o) ? i(o) : o;
            return s.protocol === n.protocol && s.host === n.host
        }
}() : function() {
    return function() {
        return !0
    }
}();

function FL(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}

function BL(e, t) {
    e = e || 10;
    const r = new Array(e),
        n = new Array(e);
    let i = 0,
        a = 0,
        o;
    return t = t !== void 0 ? t : 1e3,
        function(u) {
            const l = Date.now(),
                c = n[a];
            o || (o = l), r[i] = u, n[i] = l;
            let f = a,
                d = 0;
            for (; f !== i;) d += r[f++], f = f % e;
            if (i = (i + 1) % e, i === a && (a = (a + 1) % e), l - o < t) return;
            const m = c && l - c;
            return m ? Math.round(d * 1e3 / m) : void 0
        }
}

function dp(e, t) {
    let r = 0;
    const n = BL(50, 250);
    return i => {
        const a = i.loaded,
            o = i.lengthComputable ? i.total : void 0,
            s = a - r,
            u = n(s),
            l = a <= o;
        r = a;
        const c = {
            loaded: a,
            total: o,
            progress: o ? a / o : void 0,
            bytes: s,
            rate: u || void 0,
            estimated: u && o && l ? (o - a) / u : void 0,
            event: i
        };
        c[t ? "download" : "upload"] = !0, e(c)
    }
}
const zL = typeof XMLHttpRequest < "u",
    UL = zL && function(e) {
        return new Promise(function(r, n) {
            let i = e.data;
            const a = Yt.from(e.headers).normalize();
            let {
                responseType: o,
                withXSRFToken: s
            } = e, u;

            function l() {
                e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u)
            }
            let c;
            if (Y.isFormData(i)) {
                if (Pt.hasStandardBrowserEnv || Pt.hasStandardBrowserWebWorkerEnv) a.setContentType(!1);
                else if ((c = a.getContentType()) !== !1) {
                    const [h, ...v] = c ? c.split(";").map(g => g.trim()).filter(Boolean) : [];
                    a.setContentType([h || "multipart/form-data", ...v].join("; "))
                }
            }
            let f = new XMLHttpRequest;
            if (e.auth) {
                const h = e.auth.username || "",
                    v = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                a.set("Authorization", "Basic " + btoa(h + ":" + v))
            }
            const d = ty(e.baseURL, e.url);
            f.open(e.method.toUpperCase(), Kg(d, e.params, e.paramsSerializer), !0), f.timeout = e.timeout;

            function m() {
                if (!f) return;
                const h = Yt.from("getAllResponseHeaders" in f && f.getAllResponseHeaders()),
                    g = {
                        data: !o || o === "text" || o === "json" ? f.responseText : f.response,
                        status: f.status,
                        statusText: f.statusText,
                        headers: h,
                        config: e,
                        request: f
                    };
                NL(function(y) {
                    r(y), l()
                }, function(y) {
                    n(y), l()
                }, g), f = null
            }
            if ("onloadend" in f ? f.onloadend = m : f.onreadystatechange = function() {
                    !f || f.readyState !== 4 || f.status === 0 && !(f.responseURL && f.responseURL.indexOf("file:") === 0) || setTimeout(m)
                }, f.onabort = function() {
                    !f || (n(new xe("Request aborted", xe.ECONNABORTED, e, f)), f = null)
                }, f.onerror = function() {
                    n(new xe("Network Error", xe.ERR_NETWORK, e, f)), f = null
                }, f.ontimeout = function() {
                    let v = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
                    const g = e.transitional || Zg;
                    e.timeoutErrorMessage && (v = e.timeoutErrorMessage), n(new xe(v, g.clarifyTimeoutError ? xe.ETIMEDOUT : xe.ECONNABORTED, e, f)), f = null
                }, Pt.hasStandardBrowserEnv && (s && Y.isFunction(s) && (s = s(e)), s || s !== !1 && jL(d))) {
                const h = e.xsrfHeaderName && e.xsrfCookieName && RL.read(e.xsrfCookieName);
                h && a.set(e.xsrfHeaderName, h)
            }
            i === void 0 && a.setContentType(null), "setRequestHeader" in f && Y.forEach(a.toJSON(), function(v, g) {
                f.setRequestHeader(g, v)
            }), Y.isUndefined(e.withCredentials) || (f.withCredentials = !!e.withCredentials), o && o !== "json" && (f.responseType = e.responseType), typeof e.onDownloadProgress == "function" && f.addEventListener("progress", dp(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && f.upload && f.upload.addEventListener("progress", dp(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = h => {
                !f || (n(!h || h.type ? new di(null, e, f) : h), f.abort(), f = null)
            }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
            const p = FL(d);
            if (p && Pt.protocols.indexOf(p) === -1) {
                n(new xe("Unsupported protocol " + p + ":", xe.ERR_BAD_REQUEST, e));
                return
            }
            f.send(i || null)
        })
    },
    tl = {
        http: hL,
        xhr: UL
    };
Y.forEach(tl, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
});
const pp = e => `- ${e}`,
    HL = e => Y.isFunction(e) || e === null || e === !1,
    ry = {
        getAdapter: e => {
            e = Y.isArray(e) ? e : [e];
            const {
                length: t
            } = e;
            let r, n;
            const i = {};
            for (let a = 0; a < t; a++) {
                r = e[a];
                let o;
                if (n = r, !HL(r) && (n = tl[(o = String(r)).toLowerCase()], n === void 0)) throw new xe(`Unknown adapter '${o}'`);
                if (n) break;
                i[o || "#" + a] = n
            }
            if (!n) {
                const a = Object.entries(i).map(([s, u]) => `adapter ${s} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build"));
                let o = t ? a.length > 1 ? `since :
` + a.map(pp).join(`
`) : " " + pp(a[0]) : "as no adapter specified";
                throw new xe("There is no suitable adapter to dispatch the request " + o, "ERR_NOT_SUPPORT")
            }
            return n
        },
        adapters: tl
    };

function Es(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new di(null, e)
}

function mp(e) {
    return Es(e), e.headers = Yt.from(e.headers), e.data = ks.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ry.getAdapter(e.adapter || yc.adapter)(e).then(function(n) {
        return Es(e), n.data = ks.call(e, e.transformResponse, n), n.headers = Yt.from(n.headers), n
    }, function(n) {
        return ey(n) || (Es(e), n && n.response && (n.response.data = ks.call(e, e.transformResponse, n.response), n.response.headers = Yt.from(n.response.headers))), Promise.reject(n)
    })
}
const vp = e => e instanceof Yt ? e.toJSON() : e;

function on(e, t) {
    t = t || {};
    const r = {};

    function n(l, c, f) {
        return Y.isPlainObject(l) && Y.isPlainObject(c) ? Y.merge.call({
            caseless: f
        }, l, c) : Y.isPlainObject(c) ? Y.merge({}, c) : Y.isArray(c) ? c.slice() : c
    }

    function i(l, c, f) {
        if (Y.isUndefined(c)) {
            if (!Y.isUndefined(l)) return n(void 0, l, f)
        } else return n(l, c, f)
    }

    function a(l, c) {
        if (!Y.isUndefined(c)) return n(void 0, c)
    }

    function o(l, c) {
        if (Y.isUndefined(c)) {
            if (!Y.isUndefined(l)) return n(void 0, l)
        } else return n(void 0, c)
    }

    function s(l, c, f) {
        if (f in t) return n(l, c);
        if (f in e) return n(void 0, l)
    }
    const u = {
        url: a,
        method: a,
        data: a,
        baseURL: o,
        transformRequest: o,
        transformResponse: o,
        paramsSerializer: o,
        timeout: o,
        timeoutMessage: o,
        withCredentials: o,
        withXSRFToken: o,
        adapter: o,
        responseType: o,
        xsrfCookieName: o,
        xsrfHeaderName: o,
        onUploadProgress: o,
        onDownloadProgress: o,
        decompress: o,
        maxContentLength: o,
        maxBodyLength: o,
        beforeRedirect: o,
        transport: o,
        httpAgent: o,
        httpsAgent: o,
        cancelToken: o,
        socketPath: o,
        responseEncoding: o,
        validateStatus: s,
        headers: (l, c) => i(vp(l), vp(c), !0)
    };
    return Y.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
        const f = u[c] || i,
            d = f(e[c], t[c], c);
        Y.isUndefined(d) && f !== s || (r[c] = d)
    }), r
}
const ny = "1.6.2",
    bc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
    bc[e] = function(n) {
        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
    }
});
const gp = {};
bc.transitional = function(t, r, n) {
    function i(a, o) {
        return "[Axios v" + ny + "] Transitional option '" + a + "'" + o + (n ? ". " + n : "")
    }
    return (a, o, s) => {
        if (t === !1) throw new xe(i(o, " has been removed" + (r ? " in " + r : "")), xe.ERR_DEPRECATED);
        return r && !gp[o] && (gp[o] = !0, console.warn(i(o, " has been deprecated since v" + r + " and will be removed in the near future"))), t ? t(a, o, s) : !0
    }
};

function WL(e, t, r) {
    if (typeof e != "object") throw new xe("options must be an object", xe.ERR_BAD_OPTION_VALUE);
    const n = Object.keys(e);
    let i = n.length;
    for (; i-- > 0;) {
        const a = n[i],
            o = t[a];
        if (o) {
            const s = e[a],
                u = s === void 0 || o(s, a, e);
            if (u !== !0) throw new xe("option " + a + " must be " + u, xe.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (r !== !0) throw new xe("Unknown option " + a, xe.ERR_BAD_OPTION)
    }
}
const rl = {
        assertOptions: WL,
        validators: bc
    },
    Zt = rl.validators;
class Ba {
    constructor(t) {
        this.defaults = t, this.interceptors = {
            request: new fp,
            response: new fp
        }
    }
    request(t, r) {
        typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = on(this.defaults, r);
        const {
            transitional: n,
            paramsSerializer: i,
            headers: a
        } = r;
        n !== void 0 && rl.assertOptions(n, {
            silentJSONParsing: Zt.transitional(Zt.boolean),
            forcedJSONParsing: Zt.transitional(Zt.boolean),
            clarifyTimeoutError: Zt.transitional(Zt.boolean)
        }, !1), i != null && (Y.isFunction(i) ? r.paramsSerializer = {
            serialize: i
        } : rl.assertOptions(i, {
            encode: Zt.function,
            serialize: Zt.function
        }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
        let o = a && Y.merge(a.common, a[r.method]);
        a && Y.forEach(["delete", "get", "head", "post", "put", "patch", "common"], p => {
            delete a[p]
        }), r.headers = Yt.concat(o, a);
        const s = [];
        let u = !0;
        this.interceptors.request.forEach(function(h) {
            typeof h.runWhen == "function" && h.runWhen(r) === !1 || (u = u && h.synchronous, s.unshift(h.fulfilled, h.rejected))
        });
        const l = [];
        this.interceptors.response.forEach(function(h) {
            l.push(h.fulfilled, h.rejected)
        });
        let c, f = 0,
            d;
        if (!u) {
            const p = [mp.bind(this), void 0];
            for (p.unshift.apply(p, s), p.push.apply(p, l), d = p.length, c = Promise.resolve(r); f < d;) c = c.then(p[f++], p[f++]);
            return c
        }
        d = s.length;
        let m = r;
        for (f = 0; f < d;) {
            const p = s[f++],
                h = s[f++];
            try {
                m = p(m)
            } catch (v) {
                h.call(this, v);
                break
            }
        }
        try {
            c = mp.call(this, m)
        } catch (p) {
            return Promise.reject(p)
        }
        for (f = 0, d = l.length; f < d;) c = c.then(l[f++], l[f++]);
        return c
    }
    getUri(t) {
        t = on(this.defaults, t);
        const r = ty(t.baseURL, t.url);
        return Kg(r, t.params, t.paramsSerializer)
    }
}
Y.forEach(["delete", "get", "head", "options"], function(t) {
    Ba.prototype[t] = function(r, n) {
        return this.request(on(n || {}, {
            method: t,
            url: r,
            data: (n || {}).data
        }))
    }
});
Y.forEach(["post", "put", "patch"], function(t) {
    function r(n) {
        return function(a, o, s) {
            return this.request(on(s || {}, {
                method: t,
                headers: n ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: a,
                data: o
            }))
        }
    }
    Ba.prototype[t] = r(), Ba.prototype[t + "Form"] = r(!0)
});
const Vi = Ba;
class xc {
    constructor(t) {
        if (typeof t != "function") throw new TypeError("executor must be a function.");
        let r;
        this.promise = new Promise(function(a) {
            r = a
        });
        const n = this;
        this.promise.then(i => {
            if (!n._listeners) return;
            let a = n._listeners.length;
            for (; a-- > 0;) n._listeners[a](i);
            n._listeners = null
        }), this.promise.then = i => {
            let a;
            const o = new Promise(s => {
                n.subscribe(s), a = s
            }).then(i);
            return o.cancel = function() {
                n.unsubscribe(a)
            }, o
        }, t(function(a, o, s) {
            n.reason || (n.reason = new di(a, o, s), r(n.reason))
        })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners) return;
        const r = this._listeners.indexOf(t);
        r !== -1 && this._listeners.splice(r, 1)
    }
    static source() {
        let t;
        return {
            token: new xc(function(i) {
                t = i
            }),
            cancel: t
        }
    }
}
const GL = xc;

function qL(e) {
    return function(r) {
        return e.apply(null, r)
    }
}

function VL(e) {
    return Y.isObject(e) && e.isAxiosError === !0
}
const nl = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(nl).forEach(([e, t]) => {
    nl[t] = e
});
const YL = nl;

function iy(e) {
    const t = new Vi(e),
        r = jg(Vi.prototype.request, t);
    return Y.extend(r, Vi.prototype, t, {
        allOwnKeys: !0
    }), Y.extend(r, t, null, {
        allOwnKeys: !0
    }), r.create = function(i) {
        return iy(on(e, i))
    }, r
}
const Fe = iy(yc);
Fe.Axios = Vi;
Fe.CanceledError = di;
Fe.CancelToken = GL;
Fe.isCancel = ey;
Fe.VERSION = ny;
Fe.toFormData = Ro;
Fe.AxiosError = xe;
Fe.Cancel = Fe.CanceledError;
Fe.all = function(t) {
    return Promise.all(t)
};
Fe.spread = qL;
Fe.isAxiosError = VL;
Fe.mergeConfig = on;
Fe.AxiosHeaders = Yt;
Fe.formToJSON = e => Qg(Y.isHTMLForm(e) ? new FormData(e) : e);
Fe.getAdapter = ry.getAdapter;
Fe.HttpStatusCode = YL;
Fe.default = Fe;
const XL = Fe;

function KL(e) {
    return te("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "33.924",
        height: "30.171",
        viewBox: "0 0 33.924 30.171",
        ...e,
        children: [C("defs", {
            children: C("clipPath", {
                id: "clip-path",
                children: C("rect", {
                    id: "Rectangle_10",
                    "data-name": "Rectangle 10",
                    width: "33.924",
                    height: "30.171",
                    transform: "translate(0 0)",
                    fill: "#FFB225"
                })
            })
        }), C("g", {
            id: "Group_3",
            "data-name": "Group 3",
            transform: "translate(0 -0.001)",
            children: C("g", {
                id: "Group_1",
                "data-name": "Group 1",
                transform: "translate(0 0.001)",
                children: C("path", {
                    id: "Path_1",
                    "data-name": "Path 1",
                    d: "M30.932,0H2.991A2.987,2.987,0,0,0,.4,4.482l13.971,24.2a2.986,2.986,0,0,0,5.173,0l13.971-24.2A2.987,2.987,0,0,0,30.932,0M23.674,7.924,17.607,18.431a.745.745,0,0,1-1.291,0L10.25,7.924A.746.746,0,0,1,10.9,6.806H23.028a.746.746,0,0,1,.646,1.118",
                    transform: "translate(0 -0.001)",
                    fill: "#FFB225"
                })
            })
        })]
    })
}

function ZL({
    open: e,
    setOpen: t,
    imageList: r,
    imageIndex: n,
    setIndex: i
}) {
    const a = R.exports.useRef(null);
    return C(Wr.Root, {
        show: e,
        as: R.exports.Fragment,
        children: te(Cc, {
            as: "div",
            className: "relative z-10",
            initialFocus: a,
            onClose: t,
            children: [C(Wr.Child, {
                as: R.exports.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: C("div", {
                    className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                })
            }), C("div", {
                className: "fixed inset-0 z-50 overflow-y-auto",
                children: C("div", {
                    className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",
                    children: C(Wr.Child, {
                        as: R.exports.Fragment,
                        enter: "ease-out duration-300",
                        enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                        enterTo: "opacity-100 translate-y-0 sm:scale-100",
                        leave: "ease-in duration-200",
                        leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                        leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                        children: te(Cc.Panel, {
                            className: "relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:p-6",
                            children: [C("div", {
                                className: "w-full",
                                children: C("img", {
                                    src: r[n],
                                    className: "w-full"
                                })
                            }), te("div", {
                                className: "mt-5 sm:mt-4 sm:flex sm:flex-row-reverse",
                                children: [n > 0 && C("button", {
                                    type: "button",
                                    className: "inline-flex w-full justify-center rounded-md border border-transparent bg-orange-main px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none sm:ml-3 sm:w-auto sm:text-sm",
                                    onClick: () => i(n - 1),
                                    children: "Prev"
                                }), n < r.length - 1 && C("button", {
                                    type: "button",
                                    className: "mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm",
                                    onClick: () => i(n + 1),
                                    children: "Next"
                                })]
                            })]
                        })
                    })
                })
            })]
        })
    })
}
const Jt = ({
    name: e,
    sort: t,
    onSort: r,
    className: n,
    type: i
}) => te("th", {
    scope: "col",
    className: kr("cursor-pointer py-3.5 text-left text-sm font-medium", n),
    onClick: () => r(i, t === "asc" ? "desc" : t === "desc" ? "" : "asc"),
    children: [e, " ", t === "asc" && C(o1, {
        className: "inline-block"
    }), t === "desc" && C(s1, {
        className: "inline-block"
    }), t === "" && C(u1, {
        className: "inline-block"
    })]
});

function JL({
    post: e,
    filter: t,
    filterDate: r,
    filterValue: n
}) {
    const [i, a] = R.exports.useState(""), [o, s] = R.exports.useState(""), [u, l] = R.exports.useState(!1), [c, f] = R.exports.useState([]), [d, m] = R.exports.useState(0), p = R.exports.useMemo(() => {
        let x = e.map((y, b) => {
            let {
                like: _,
                reply: w,
                retweet: A
            } = y;
            _ = _ || "0", w = w || "0", A = A || "0";
            const E = parseInt(_) + parseInt(w) * 1.5 + parseInt(A) * 2;
            return {
                id: b + 1,
                time: Or(y.time).format("DD-MM-YYYY"),
                content: y.content,
                like: y.like ? parseInt(y.like) : "0",
                retweet: y.retweet ? parseInt(y.retweet) : "0",
                comment: y.reply ? parseInt(y.reply) : "0",
                spread: y.spread ? parseInt(y.spread) : "0",
                score: E,
                postType: xp(y.postType),
                image: y.image || y.video || []
            }
        });
        if (n) {
            const y = n.toLowerCase();
            x = x.filter(b => {
                const _ = b[t].toLowerCase();
                return console.log(_, y, _.includes(y)), _.includes(y)
            })
        }
        return r && (x = x.filter(y => {
            const b = Or(r).format("DD-MM-YYYY");
            return y.time === b
        })), o && i && (x.sort((y, b) => y[o] > b[o] ? 1 : y[o] < b[o] ? -1 : 0), i === "asc" && x.reverse()), x
    }, [e, t, r, n, o, i]), h = (x, y) => {
        s(x), a(y)
    }, v = (x, y) => {
        f(x), m(y), l(!0)
    }, g = async () => {
        const x = new $8,
            y = [];
        p.forEach(_ => {
            _.image.forEach(w => {
                y.push(w)
            })
        });
        const b = y.map(async (_, w) => {
            try {
                const A = await XL.get(_, {
                    responseType: "arraybuffer"
                });
                x.file(`image_${w+1}.jpg`, A.data, {
                    binary: !0
                })
            } catch (A) {
                console.error("Error fetching image:", A)
            }
        });
        await Promise.all(b), x.generateAsync({
            type: "blob"
        }).then(_ => {
            const w = document.createElement("a");
            w.href = URL.createObjectURL(_), w.download = "images.zip", w.click()
        })
    };
    return te("div", {
        className: "",
        children: [C(ZL, {
            open: u,
            setOpen: l,
            imageList: c,
            imageIndex: d,
            setIndex: m
        }), te("div", {
            className: "my-10 grid grid-cols-2 gap-4",
            children: [C("h3", {
                className: "pt-2 text-left text-xl font-medium leading-6 text-white",
                children: "Top Score Tweets"
            }), C("div", {
                className: "w-full text-right",
                children: te("button", {
                    onClick: () => g(),
                    className: "group inline-flex items-center justify-center rounded-lg bg-orange-main py-3 px-6 text-sm font-semibold text-black duration-100 ease-in hover:bg-amber-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
                    children: [C(i1, {
                        className: "mr-2 h-4 w-4 text-black"
                    }), " Download All Media"]
                })
            })]
        }), C("div", {
            className: "mt-8 flex flex-col rounded-lg bg-black-200",
            children: C("div", {
                className: "overflow-x-auto",
                children: C("div", {
                    className: "inline-block w-full py-2 align-middle",
                    children: C("div", {
                        className: "overflow-hidden px-8 shadow-sm ring-1 ring-black ring-opacity-5",
                        children: te("table", {
                            className: "w-full  divide-y divide-blue-200 text-white",
                            children: [C("thead", {
                                children: te("tr", {
                                    children: [C(Jt, {
                                        name: "Date",
                                        sort: o === "time" ? i : "",
                                        onSort: h,
                                        className: "w-2/12",
                                        type: "time"
                                    }), C(Jt, {
                                        name: "Content",
                                        sort: o === "content" ? i : "",
                                        onSort: h,
                                        className: "w-2/12",
                                        type: "content"
                                    }), C(Jt, {
                                        name: "Type",
                                        sort: o === "postType" ? i : "",
                                        onSort: h,
                                        className: "w-1/12",
                                        type: "postType"
                                    }), C("th", {
                                        scope: "col",
                                        className: "w-2/12 py-3.5 pr-4 text-left text-sm font-medium",
                                        children: "Image"
                                    }), C(Jt, {
                                        name: C(Xi, {
                                            className: "inline-block h-3 align-middle"
                                        }),
                                        sort: o === "like" ? i : "",
                                        onSort: h,
                                        className: "w-1/12 text-right",
                                        type: "like"
                                    }), C(Jt, {
                                        name: C(Ki, {
                                            className: "inline-block h-3 align-middle"
                                        }),
                                        sort: o === "retweet" ? i : "",
                                        onSort: h,
                                        className: "w-1/12 text-right",
                                        type: "retweet"
                                    }), C(Jt, {
                                        name: C(Ju, {
                                            className: "inline-block h-3 align-middle"
                                        }),
                                        sort: o === "spread" ? i : "",
                                        onSort: h,
                                        className: "w-1/12 text-right",
                                        type: "spread"
                                    }), C(Jt, {
                                        name: C(Fa, {
                                            className: "inline-block h-3 align-middle"
                                        }),
                                        sort: o === "reply" ? i : "",
                                        onSort: h,
                                        className: "w-1/12 text-right",
                                        type: "reply"
                                    }), C(Jt, {
                                        name: C(Yp, {
                                            className: "-mr-2 inline-block h-2"
                                        }),
                                        sort: o === "score" ? i : "",
                                        onSort: h,
                                        className: "w-1/12 text-right",
                                        type: "score"
                                    })]
                                })
                            }), C("tbody", {
                                className: "divide-y divide-blue-200",
                                children: p.map(x => te("tr", {
                                    children: [C("td", {
                                        className: "w-2/12 whitespace-normal py-4 pr-4 text-left text-sm font-medium",
                                        children: x.time
                                    }), C("td", {
                                        className: "w-2/12 whitespace-normal py-4 pr-4 text-left text-sm",
                                        children: x.content
                                    }), C("td", {
                                        className: "w-1/12 whitespace-normal py-4 pr-4 text-left text-sm",
                                        children: x.postType
                                    }), C("td", {
                                        className: "w-2/12 whitespace-normal py-4 pr-4 text-left text-sm",
                                        children: x.image.map((y, b) => C("div", {
                                            style: {
                                                backgroundImage: `url(${y})`
                                            },
                                            onClick: () => v(x.image, b),
                                            className: "mb-2 aspect-video w-full cursor-pointer rounded-lg bg-cover bg-center"
                                        }, y))
                                    }), C("td", {
                                        className: "w-1/12 whitespace-normal py-4 text-right text-sm",
                                        children: te("span", {
                                            className: "text-heart-red",
                                            children: [C(Xi, {
                                                className: "mr-1 -mt-1 inline-block h-3 align-middle"
                                            }), " ", x.like, " "]
                                        })
                                    }), C("td", {
                                        className: "w-1/12 whitespace-normal py-4 text-right text-sm",
                                        children: te("span", {
                                            className: "text-retweet-blue",
                                            children: [C(Ki, {
                                                className: "mr-1 -mt-1 inline-block h-3 align-middle"
                                            }), " ", x.retweet, " "]
                                        })
                                    }), C("td", {
                                        className: "w-1/12 whitespace-normal py-4 text-right text-sm",
                                        children: te("span", {
                                            className: "text-comment-green",
                                            children: [C(Fa, {
                                                className: "mr-1 -mt-1 inline-block h-3 align-middle"
                                            }), " ", x.comment]
                                        })
                                    }), C("td", {
                                        className: "w-1/12 whitespace-normal py-4 text-right text-sm",
                                        children: te("span", {
                                            className: "text-purple-700",
                                            children: [C(Ju, {
                                                className: "mr-1 -mt-1 inline-block h-3 align-middle"
                                            }), " ", x.spread]
                                        })
                                    }), C("td", {
                                        className: "w-1/12 whitespace-normal py-4 text-right text-sm",
                                        children: te("span", {
                                            className: "text-orange-main",
                                            children: [C(KL, {
                                                className: "-mr-2 -mt-1 inline-block h-2"
                                            }), " ", x.score]
                                        })
                                    })]
                                }, x.id))
                            })]
                        })
                    })
                })
            })
        })]
    })
}

function QL() {
    return C("footer", {
        className: "bg-black-100",
        children: C(Vp, {
            children: C(sn, {
                children: te("div", {
                    className: "flex flex-col items-center border-t border-black-200 py-10 sm:flex-row-reverse sm:justify-between",
                    children: [te("div", {
                        className: "flex gap-x-6",
                        children: [C("a", {
                            href: "https://x.com/MingfeiGuo",
                            className: "group",
                            target: "_blank",
                            rel: "noreferrer",
                            "aria-label": "Rearrange on X",
                            children: C(bp, {
                                className: "h-6 w-6 text-white hover:text-gray-200"
                            })
                        }), C("a", {
                            href: "https://github.com/guoriyue",
                            className: "group",
                            target: "_blank",
                            rel: "noreferrer",
                            "aria-label": "Rearrange on Github",
                            children: C(my, {
                                className: "h-6 w-6 text-white hover:text-gray-200"
                            })
                        })]
                    }), te("p", {
                        className: "mt-6 text-sm text-white sm:mt-0",
                        children: ["Copyright \xA9 ", new Date().getFullYear(), " Nighthustle. All rights reserved."]
                    })]
                })
            })
        })
    })
}
const ej = () => {
    const [e, t] = R.exports.useState(0), [r, n] = R.exports.useState({}), [i, a] = R.exports.useState([]), [o, s] = R.exports.useState("content"), [u, l] = R.exports.useState(""), [c, f] = R.exports.useState("");
    R.exports.useEffect(() => {
        const p = localStorage.profileData;
        n(JSON.parse(p));
        const h = localStorage.postData;
        a(JSON.parse(h))
    }, []);
    const d = () => {
        console.log("Export CSV")
    };
    return te("div", {
        className: "App",
        children: [C(r1, {
            onExport: () => d(),
            tab: e,
            profile: r,
            onChangeTab: p => t(p),
            post: i
        }), e === 0 ? te(sn, {
            children: [
                C(GetRecapImage, {
                    profile: r,
                    post: i
                }), 
                C(A8, {
                    post: i
                }), C("div", {
                    className: "mx-auto mb-24 max-w-7xl px-4 sm:px-6 lg:px-8",
                    children: te("div", {
                        className: "grid grid-cols-1 gap-4 lg:grid-cols-5",
                        children: [C("div", {
                            className: "col-span-3",
                            children: C(k8, {
                                post: i
                            })
                        }), C("div", {
                            className: "col-span-2",
                            children: C(C8, {
                                onSelectTab: async p => {
                                    s("postType"), l(xp(p)), await t(1), window.scrollTo(0, 0)
                                },
                                post: i
                            })
                        })]
                    })
                })
            ]
        }) : te("div", {
            className: "mx-auto mb-24 max-w-7xl px-4 sm:px-6 lg:px-8",
            children: [C("h3", {
                className: "my-10 text-left text-xl font-medium leading-6 text-white",
                children: "Post List"
            }), C(P8, {
                onChangeValue: p => l(p),
                value: u,
                onChangeFilter: p => s(p),
                filter: o,
                onChangeDate: p => f(p),
                filterDate: c
            }), C("div", {
                className: "mt-10 w-full"
            }), C(JL, {
                post: i,
                filter: o,
                filterValue: u,
                filterDate: c
            })]
        }), C(QL, {})]
    })
};

function tj() {
    const e = document.querySelector("#app-container");
    if (!e) throw new Error("Can not find AppContainer");
    fy(e).render(C(ej, {}))
}
tj();