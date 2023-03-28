"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6270], {
    7399: function(e, t, r) {
        r.d(t, {
            MN: function() {
                return g
            },
            sz: function() {
                return p
            },
            uD: function() {
                return v
            }
        });
        var n = r(95235)
          , i = r(82269)
          , a = r(6277)
          , s = r(2784)
          , l = r(19928)
          , o = r.n(l)
          , c = r(52266)
          , d = r(86544)
          , u = r(52322)
          , m = ["date", "cache", "renderer", "className", "timeOver", "prepend", "append"];
        function h(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function f(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? h(Object(r), !0).forEach(function(t) {
                    (0,
                    n.Z)(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        var p = {
            clock: function(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , n = r.unitsCount
                  , i = void 0 === n ? 2 : n
                  , l = [];
                return ["days", "hours", "minutes", "seconds"].forEach(function(t) {
                    if (l.length !== i) {
                        var r = e[t];
                        (r > 0 || l.length > 0 || 0 === l.length && "minutes" === t) && l.push((0,
                        c.Bu)(r, 2))
                    }
                }),
                (0,
                u.jsx)("span", {
                    className: (0,
                    a.default)(t, "tabular-nums"),
                    children: l.map(function(e, t) {
                        return (0,
                        u.jsxs)(s.Fragment, {
                            children: [0 !== t && (0,
                            u.jsx)("span", {
                                className: "timer-semi",
                                children: ":"
                            }), (0,
                            u.jsx)("span", {
                                children: e
                            })]
                        }, "count-d-".concat(t))
                    })
                })
            },
            verbal: function(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , n = r.unitsCount
                  , i = void 0 === n ? 2 : n
                  , s = r.zeroPads
                  , l = void 0 === s ? 0 : s
                  , d = r.joinWithAnd
                  , m = r.abbreviated
                  , h = void 0 !== m && m
                  , f = r.hideTrailingZero
                  , p = void 0 !== f && f
                  , v = []
                  , g = {
                    days: "d",
                    hours: "h",
                    minutes: "m",
                    seconds: "s"
                };
                return ["days", "hours", "minutes", "seconds"].forEach(function(t, r) {
                    if (v.length !== i) {
                        var n = e[t];
                        (n > 0 || (p ? v.length > 0 && n > 0 : v.length > 0) || 3 === r && 0 === v.length) && void 0 !== n && v.push([(0,
                        c.Bu)(n, l), h ? g[t] : o()(t, n)].join(h ? "" : " "))
                    }
                }),
                (0,
                u.jsx)("span", {
                    className: (0,
                    a.default)("tabular-nums", t || ""),
                    children: v.length ? v.join(void 0 !== d && d ? " and " : " ") : ""
                })
            },
            columns: function(e, t) {
                var r = e.days
                  , n = e.hours
                  , i = e.minutes
                  , s = e.seconds;
                return (0,
                u.jsx)("div", {
                    className: (0,
                    a.default)("grid grid-cols-4 items-center gap-8 tabular-nums  md:gap-14", t),
                    children: [{
                        label: "days",
                        value: r
                    }, {
                        label: "hours",
                        value: n
                    }, {
                        label: "minutes",
                        value: i
                    }, {
                        label: "seconds",
                        value: s
                    }].map(function(e) {
                        var t = e.label
                          , r = e.value;
                        return (0,
                        u.jsxs)("div", {
                            className: "flex flex-col items-center gap-2 py-10 lg:py-0",
                            children: [(0,
                            u.jsx)("div", {
                                className: "counter text-[3rem] font-normal md:text-[7rem] lg:text-[9rem]  xl:text-[11rem]",
                                children: (0,
                                c.Bu)(r, 2)
                            }), (0,
                            u.jsx)("div", {
                                className: "text-base ",
                                children: t
                            })]
                        }, t)
                    })
                })
            }
        };
        t.ZP = function(e) {
            var t = e.date
              , r = e.cache
              , n = e.renderer
              , a = e.className
              , l = e.timeOver
              , o = e.prepend
              , c = e.append
              , d = (0,
            i.Z)(e, m);
            if (!r)
                throw Error("missing key");
            var h = (0,
            s.useContext)(v)
              , f = h.timers
              , g = h.addTimer
              , x = h.removeTimer;
            (0,
            s.useEffect)(function() {
                return g(r, t),
                function() {
                    x(r)
                }
            }, [null == t ? void 0 : t.toString(), r, g, x]);
            var j = f[r];
            if (!j)
                return null;
            var b = j.timeLeft;
            return b <= 0 ? (0,
            u.jsx)("span", {
                className: a,
                children: void 0 === l ? "soon" : l
            }) : (0,
            u.jsxs)(u.Fragment, {
                children: [o || null, p[void 0 === n ? "verbal" : n]({
                    days: Math.floor(b / 864e5),
                    hours: Math.floor(b % 864e5 / 36e5),
                    minutes: Math.floor(b % 36e5 / 6e4),
                    seconds: Math.floor(b % 6e4 / 1e3)
                }, a, d), c || null]
            })
        }
        ;
        var v = (0,
        s.createContext)(null)
          , g = function(e) {
            var t = e.children
              , r = (0,
            s.useState)({})
              , i = r[0]
              , a = r[1]
              , l = (0,
            s.useCallback)(function(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                  , i = Math.max(0, (0,
                d.Z)(t, new Date));
                a(function(a) {
                    var s, l, o = r ? a[e].consumers : (null !== (s = null === (l = a[e]) || void 0 === l ? void 0 : l.consumers) && void 0 !== s ? s : 0) + 1;
                    return f(f({}, a), {}, (0,
                    n.Z)({}, e, {
                        timeLeft: i,
                        date: t,
                        consumers: o
                    }))
                })
            }, [a])
              , o = (0,
            s.useCallback)(function(e) {
                a(function(t) {
                    var r, n = f({}, t);
                    return (null === (r = n[e]) || void 0 === r ? void 0 : r.consumers) > 1 ? (n[e].consumers -= 1,
                    n) : (delete n[e],
                    n)
                })
            }, [a]);
            return (0,
            s.useEffect)(function() {
                var e = setInterval(function() {
                    a(function(e) {
                        var t = f({}, e);
                        for (var r in t) {
                            var n = Math.max(0, (0,
                            d.Z)(t[r].date, new Date));
                            t[r].timeLeft = n
                        }
                        return t
                    })
                }, 1e3);
                return function() {
                    return clearInterval(e)
                }
            }, []),
            (0,
            u.jsx)(v.Provider, {
                value: {
                    timers: i,
                    addTimer: l,
                    removeTimer: o
                },
                children: t
            })
        }
    },
    79569: function(e, t, r) {
        r.d(t, {
            Z: function() {
                return l
            }
        });
        var n = r(97729)
          , i = r.n(n)
          , a = r(5632)
          , s = r(52322);
        function l(e) {
            var t = e.title
              , r = e.description
              , n = void 0 === r ? "Discover, track and mint the most exciting NFT drops." : r
              , l = e.image
              , o = void 0 === l ? "https://res.cloudinary.com/dtxk1z5zc/image/upload/f_auto/v1679506568/shared/opengraph_toagra.png" : l
              , c = e.path
              , d = (0,
            a.useRouter)().asPath
              , u = null != t ? t : "Metadrop";
            return (0,
            s.jsxs)(i(), {
                children: [(0,
                s.jsx)("title", {
                    children: u
                }), (0,
                s.jsx)("meta", {
                    property: "og:url",
                    content: "https://".concat("metadrop-c64axqcwf-asymmetriclabs.vercel.app").concat(c || d)
                }), (0,
                s.jsx)("meta", {
                    property: "og:type",
                    content: "website"
                }), (0,
                s.jsx)("meta", {
                    property: "og:title",
                    content: u
                }), (0,
                s.jsx)("meta", {
                    property: "og:description",
                    content: n
                }), (0,
                s.jsx)("meta", {
                    property: "description",
                    content: n
                }), (0,
                s.jsx)("meta", {
                    property: "og:image",
                    content: o
                }), (0,
                s.jsx)("meta", {
                    property: "twitter:card",
                    content: "summary_large_image"
                }), (0,
                s.jsx)("meta", {
                    property: "twitter:site",
                    content: "@metadropmeta"
                }), (0,
                s.jsx)("meta", {
                    property: "twitter:creator",
                    content: "@metadropmeta"
                }), (0,
                s.jsx)("meta", {
                    property: "twitter:title",
                    content: u
                }), (0,
                s.jsx)("meta", {
                    property: "twitter:description",
                    content: n
                }), (0,
                s.jsx)("meta", {
                    property: "twitter:image",
                    content: o
                })]
            })
        }
    },
    41750: function(e, t, r) {
        r.d(t, {
            Z: function() {
                return f
            }
        });
        var n = r(95235)
          , i = r(82269)
          , a = r(39097)
          , s = r.n(a)
          , l = r(2784)
          , o = r(63557)
          , c = r(6277)
          , d = r(52322)
          , u = ["href", "as", "className", "children", "target"];
        function m(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function h(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? m(Object(r), !0).forEach(function(t) {
                    (0,
                    n.Z)(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        function f(e) {
            var t = e.href
              , r = e.as
              , n = e.className
              , a = e.children
              , m = e.target
              , f = (0,
            i.Z)(e, u)
              , p = (0,
            l.useState)(!1)
              , v = p[0]
              , g = p[1];
            return (0,
            d.jsxs)(s(), h(h({
                href: t,
                as: r,
                onMouseEnter: function() {
                    return g(!0)
                },
                onMouseLeave: function() {
                    return g(!1)
                },
                className: "relative",
                target: m
            }, f), {}, {
                children: [(0,
                d.jsx)(o.E.div, {
                    className: (0,
                    c.default)("absolute top-2 -left-4 h-1.5 w-1.5 scale-0 rounded-full bg-md-themed-dark", n),
                    animate: {
                        scale: v ? 1 : 0
                    },
                    initial: !1,
                    transition: v ? {
                        type: "spring",
                        stiffness: 200,
                        damping: 16
                    } : {
                        type: "easeOut",
                        duration: .15
                    }
                }), a]
            }))
        }
    },
    92490: function(e, t, r) {
        r.d(t, {
            Z: function() {
                return o
            }
        });
        var n = r(31221)
          , i = r(65980)
          , a = r(21515)
          , s = r(6277)
          , l = r(52322);
        function o(e) {
            var t = e.speed
              , r = e.className
              , o = e.children;
            return (0,
            l.jsx)("div", {
                className: (0,
                s.default)("theme-metadrop-light relative mx-auto flex w-full  items-center overflow-hidden   !bg-transparent px-8  pt-4  text-center font-shapiro  font-65 uppercase leading-normal tracking-wide", r, i.CLIENT_STATIC_FILES_RUNTIME),
                children: (0,
                l.jsx)("div", {
                    className: "mx-auto w-full",
                    style: {
                        WebkitTextStroke: "1px #f2f2f2"
                    },
                    children: (0,
                    l.jsx)(n.Z, {
                        size: "7xl",
                        className: "w-full",
                        children: (0,
                        l.jsxs)(a.Z, {
                            gradientColor: [27, 27, 27],
                            speed: void 0 === t ? 100 : t,
                            className: " overflow-hidden",
                            children: [o, (0,
                            l.jsx)("div", {
                                className: "mx-10 text-dark",
                                children: (0,
                                l.jsx)("div", {
                                    className: "h-3 w-3 rounded-full border border-light"
                                })
                            }), o, (0,
                            l.jsx)("div", {
                                className: "mx-10 text-dark",
                                children: (0,
                                l.jsx)("div", {
                                    className: "h-3 w-3 rounded-full border border-light"
                                })
                            }), o, (0,
                            l.jsx)("div", {
                                className: "mx-10 text-dark",
                                children: (0,
                                l.jsx)("div", {
                                    className: "h-3 w-3 rounded-full border border-light"
                                })
                            })]
                        })
                    })
                })
            })
        }
    },
    9586: function(e, t, r) {
        r.d(t, {
            y: function() {
                return m
            }
        });
        var n = r(95235)
          , i = r(82269)
          , a = function(e) {
            var t = e.delay;
            return {
                transition: {
                    duration: .07,
                    type: "tween",
                    delay: void 0 === t ? 0 : t
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    y: -8,
                    opacity: 0
                },
                initial: {
                    opacity: 0,
                    y: 8
                }
            }
        }
          , s = r(65820)
          , l = r(63557)
          , o = r(52322)
          , c = ["children", "motionKey", "className", "delay"];
        function d(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? d(Object(r), !0).forEach(function(t) {
                    (0,
                    n.Z)(e, t, r[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                })
            }
            return e
        }
        var m = function(e) {
            var t = e.children
              , r = e.motionKey
              , n = e.className
              , d = e.delay;
            return (0,
            i.Z)(e, c),
            (0,
            o.jsx)(s.M, {
                mode: "wait",
                initial: !1,
                children: (0,
                o.jsx)(l.E.div, u(u({}, a({
                    delay: d
                })), {}, {
                    className: n,
                    children: t
                }), r || t)
            })
        }
    },
    15741: function(e, t, r) {
        r.d(t, {
            r: function() {
                return d
            }
        });
        var n = r(6277)
          , i = r(2784)
          , a = r(52746)
          , s = function(e, t, r, n) {
            var i = n.padding;
            return window.requestAnimationFrame(function() {
                if (!e || !t)
                    return !1;
                var n = e.getBoundingClientRect()
                  , a = t.getBoundingClientRect();
                r(n.x + n.width + i > a.x)
            })
        }
          , l = function(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , n = r.padding
              , l = void 0 === n ? 20 : n
              , o = r.attachTransitionTo
              , c = void 0 === o ? null : o
              , d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : []
              , u = (0,
            i.useState)(!1)
              , m = u[0]
              , h = u[1];
            return (0,
            i.useEffect)(function() {
                if (e.current && t.current) {
                    var r = !1
                      , n = function n() {
                        s(e.current, t.current, h, {
                            padding: l
                        }),
                        r && window.requestAnimationFrame(n)
                    }
                      , i = function() {
                        r = !0,
                        n()
                    }
                      , a = function() {
                        return r = !1
                    };
                    return (c || e.current).addEventListener("transitionstart", i),
                    (c || e.current).addEventListener("transitionend", a),
                    function() {
                        var t, r;
                        null === (t = c || e.current) || void 0 === t || t.removeEventListener("transitionend", a),
                        null === (r = c || e.current) || void 0 === r || r.removeEventListener("transitionstart", i)
                    }
                }
            }, [l, c, e, t]),
            (0,
            i.useLayoutEffect)(function() {
                var r = function() {
                    return s(e.current, t.current, h, {
                        padding: l
                    })
                };
                return r(),
                window.addEventListener("resize", r),
                function() {
                    return window.removeEventListener("resize", r)
                }
            }, [e, t, l].concat((0,
            a.Z)(d))),
            m
        }
          , o = r(9586)
          , c = r(52322)
          , d = function(e) {
            var t = e.totalSupply
              , r = e.totalMinted
              , a = void 0 === r ? 0 : r
              , s = e.showPercentOnly
              , d = void 0 !== s && s
              , u = e.className
              , m = e.counterPosition
              , h = void 0 === m ? "bottom" : m
              , f = a / t
              , p = (0,
            i.useRef)(null)
              , v = (0,
            i.useRef)(null)
              , g = (0,
            i.useRef)(null)
              , x = (0,
            i.useRef)(null)
              , j = l(g, v, {
                padding: 0,
                attachTransitionTo: v.current
            }, [a])
              , b = l(p, x, {
                padding: 0,
                attachTransitionTo: v.current
            }, [a])
              , y = l(v, x, {
                padding: 0
            }, [a]);
            return (0,
            c.jsxs)("div", {
                className: (0,
                n.default)("drop-progress relative w-full select-none", void 0 === u ? "" : u),
                children: [(0,
                c.jsxs)("div", {
                    className: "relative flex h-4 w-full gap-[2px] text-primary",
                    children: [(0,
                    c.jsx)("div", {
                        className: "bg-striped-horz absolute top-0 left-0 h-4 w-full text-muted transition-all"
                    }), (0,
                    c.jsx)("div", {
                        className: "bg-striped-horz absolute top-0 left-0 h-4 w-full text-secondary transition-all",
                        style: {
                            width: "".concat(100 * f, "%")
                        }
                    })]
                }), (0,
                c.jsx)("div", {
                    ref: v,
                    className: (0,
                    n.default)("absolute flex border-l-2 border-solid pl-2 transition-all", f ? "border-secondary" : "border-muted", "bottom" === h ? "top-0 h-6 items-end" : "bottom-0 h-9 items-start leading-tight", f && !y && "bottom" === h && "md:h-11", (!f || y) && "bottom" === h && "md:h-6"),
                    style: {
                        left: "".concat(100 * f, "%")
                    },
                    children: (0,
                    c.jsx)("span", {
                        ref: p,
                        className: (0,
                        n.default)("hidden md:inline", b && "invisible", 0 === f && !d && "invisible", "bottom" === h ? "translate-y-1" : "-translate-y-1"),
                        children: d ? "".concat((a / t * 100).toFixed(0), "%") : "".concat(null == a ? void 0 : a.toLocaleString(), " minted")
                    })
                }), d ? null : (0,
                c.jsxs)("div", {
                    className: "counters mt-2 flex justify-between",
                    children: [(0,
                    c.jsx)("div", {
                        ref: g,
                        children: (0,
                        c.jsx)(o.y, {
                            motionKey: j && 0 !== a ? "a" : "b",
                            children: j && 0 !== a ? (0,
                            c.jsx)("span", {
                                className: "opacity-0",
                                children: "0"
                            }) : "0"
                        })
                    }), (0,
                    c.jsxs)("div", {
                        ref: x,
                        children: [(0,
                        c.jsx)("span", {
                            className: "inline md:hidden",
                            children: (0,
                            c.jsx)(o.y, {
                                motionKey: b ? "a" : "b",
                                children: a || b ? "".concat(a.toLocaleString(), " of ").concat(t.toLocaleString(), " minted") : "".concat(t.toLocaleString(), " Total Supply")
                            })
                        }), (0,
                        c.jsx)("span", {
                            className: "hidden md:inline",
                            children: (0,
                            c.jsx)(o.y, {
                                motionKey: b ? "a" : "b",
                                children: b ? "".concat(a.toLocaleString(), " of ").concat(t.toLocaleString(), " minted") : "".concat(t.toLocaleString(), " Total Supply")
                            })
                        })]
                    })]
                })]
            })
        }
    },
    97286: function(e, t, r) {
        var n = r(31221)
          , i = r(42167)
          , a = r(89065)
          , s = r(46941)
          , l = r(6277)
          , o = r(41750)
          , c = r(36411)
          , d = r(52322);
        t.Z = function(e) {
            var t = e.className;
            return (0,
            d.jsx)("div", {
                className: (0,
                l.default)(" flex  flex-col items-center justify-center ", t),
                children: (0,
                d.jsxs)("div", {
                    className: "divide-mdth-primary border-mdth-primary w-full gap-10 divide-y-1 divide-dotted border-y border-dotted",
                    children: [(0,
                    d.jsxs)("div", {
                        className: "flex w-full flex-col items-center  justify-between gap-8 py-8 lg:flex-row lg:items-center",
                        children: [(0,
                        d.jsx)("div", {
                            className: "",
                            children: (0,
                            d.jsx)(n.Z, {
                                size: "4xl",
                                children: "Never miss a drop. Join our Discord."
                            })
                        }), (0,
                        d.jsxs)("div", {
                            className: "w-full lg:w-auto",
                            children: [(0,
                            d.jsx)(i.Z, {
                                shape: "pill",
                                className: "hidden lg:flex",
                                size: "md",
                                href: "https://discord.gg/metadrop",
                                target: "_blank",
                                children: "Join Discord"
                            }), (0,
                            d.jsx)(i.Z, {
                                shape: "pill",
                                fullWidth: !0,
                                className: "flex lg:hidden",
                                size: "md",
                                href: "https://discord.gg/metadrop",
                                target: "_blank",
                                children: "Join Discord"
                            })]
                        })]
                    }), (0,
                    d.jsx)("div", {
                        className: "flex w-full items-center justify-start py-8",
                        children: (0,
                        d.jsx)("div", {
                            className: " w-full font-shapiro font-65 uppercase tracking-wider",
                            children: (0,
                            d.jsx)(a.o_, {
                                maxFontSizePx: 140,
                                children: "metadrop"
                            })
                        })
                    }), (0,
                    d.jsxs)("div", {
                        className: "divide-mdth-primary hidden divide-dotted lg:grid lg:grid-cols-2 lg:divide-x-1 ",
                        children: [(0,
                        d.jsxs)("div", {
                            className: "mt-6",
                            children: [(0,
                            d.jsx)(o.Z, {
                                className: "bg-md-themed-light",
                                target: "_blank",
                                href: "https://jobs.metadrop.com/",
                                children: "We're hiring!"
                            }), (0,
                            d.jsx)("div", {
                                className: "pt-28 pr-20 pb-8",
                                children: (0,
                                d.jsx)(s.ZP, {
                                    darkMode: !0,
                                    include: "logoImage",
                                    raw: !0,
                                    className: "max-w-xl"
                                })
                            })]
                        }), (0,
                        d.jsxs)("div", {
                            className: "divide-mdth-primary flex flex-col divide-y-1 divide-dotted",
                            children: [(0,
                            d.jsxs)("div", {
                                className: "grid grow grid-cols-2 p-8",
                                children: [(0,
                                d.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0,
                                    d.jsx)(o.Z, {
                                        className: "bg-md-themed-light",
                                        target: "_blank",
                                        href: c._N,
                                        children: "Terms of Use"
                                    }), (0,
                                    d.jsx)(o.Z, {
                                        className: "bg-md-themed-light",
                                        target: "_blank",
                                        href: c.KF,
                                        children: "Privacy Policy"
                                    }), (0,
                                    d.jsx)(o.Z, {
                                        className: "bg-md-themed-light",
                                        target: "_blank",
                                        href: "mailto:legal@metadrop.com",
                                        children: "Legal"
                                    })]
                                }), (0,
                                d.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0,
                                    d.jsx)(o.Z, {
                                        className: "bg-md-themed-light",
                                        target: "_blank",
                                        href: c.tj,
                                        children: "Drop with us"
                                    }), (0,
                                    d.jsx)(o.Z, {
                                        className: "bg-md-themed-light",
                                        target: "_blank",
                                        href: c.tj,
                                        children: "Contact us"
                                    })]
                                })]
                            }), (0,
                            d.jsx)("div", {
                                className: "p-8",
                                children: (0,
                                d.jsx)(n.Z, {
                                    size: "2xl",
                                    className: " leading-[1.1]",
                                    children: "Discover, track, and mint the most exciting NFT drops."
                                })
                            })]
                        })]
                    }), (0,
                    d.jsx)("div", {
                        className: "divide-mdth-primary flex w-full  divide-dotted lg:hidden",
                        children: (0,
                        d.jsxs)("div", {
                            className: "divide-mdth-primary flex w-full flex-col divide-y-1 divide-dotted",
                            children: [(0,
                            d.jsx)("div", {
                                className: "py-8",
                                children: (0,
                                d.jsx)(s.yA, {
                                    darkMode: !0,
                                    raw: !0,
                                    className: "max-h-36 max-w-md sm:h-auto"
                                })
                            }), (0,
                            d.jsxs)("div", {
                                className: "grid w-full grid-cols-2 items-end justify-start gap-8 py-8",
                                children: [(0,
                                d.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0,
                                    d.jsx)(o.Z, {
                                        className: "bg-md-themed-light",
                                        target: "_blank",
                                        href: c._N,
                                        children: "Terms of Use"
                                    }), (0,
                                    d.jsx)(o.Z, {
                                        className: "bg-md-themed-light",
                                        target: "_blank",
                                        href: c.KF,
                                        children: "Privacy Policy"
                                    }), (0,
                                    d.jsx)(o.Z, {
                                        className: "bg-md-themed-light",
                                        target: "_blank",
                                        href: "mailto:legal@metadrop.com",
                                        children: "Legal"
                                    })]
                                }), (0,
                                d.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [(0,
                                    d.jsx)(o.Z, {
                                        className: "bg-md-themed-light",
                                        target: "_blank",
                                        href: "https://jobs.metadrop.com/",
                                        children: "We're hiring!"
                                    }), (0,
                                    d.jsx)(o.Z, {
                                        className: "bg-md-themed-light",
                                        target: "_blank",
                                        href: c.tj,
                                        children: "Drop with us"
                                    }), (0,
                                    d.jsx)(o.Z, {
                                        className: "bg-md-themed-light",
                                        target: "_blank",
                                        href: c.tj,
                                        children: "Contact us"
                                    })]
                                })]
                            }), (0,
                            d.jsx)("div", {
                                className: "py-8",
                                children: (0,
                                d.jsx)("div", {
                                    className: " leading-[1.1]",
                                    children: "Discover, track, and mint the most exciting NFT drops."
                                })
                            })]
                        })
                    })]
                })
            })
        }
    },
    55010: function(e, t, r) {
        r.d(t, {
            G: function() {
                return s
            },
            m: function() {
                return a
            }
        });
        var n = r(2784)
          , i = r(63063)
          , a = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3
              , t = arguments.length > 1 ? arguments[1] : void 0
              , r = (0,
            n.useState)(new Date)
              , i = r[0]
              , a = r[1];
            return (0,
            n.useEffect)(function() {
                var r = setInterval(function() {
                    var e = new Date;
                    e > t && clearInterval(r),
                    a(e)
                }, e);
                return function() {
                    return clearInterval(r)
                }
            }),
            i
        }
          , s = function(e) {
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            var t = (0,
            n.useState)((0,
            i.Z)(new Date, e))
              , r = t[0]
              , a = t[1];
            return (0,
            n.useEffect)(function() {
                var t = e.getTime() - new Date().getTime()
                  , n = r ? setTimeout(function() {
                    a(!1)
                }, t) : null;
                return function() {
                    return clearTimeout(n)
                }
            }),
            r
        }
    }
}]);
