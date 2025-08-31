function Pv(n, r) {
  for (var u = 0; u < r.length; u++) {
    const o = r[u];
    if (typeof o != 'string' && !Array.isArray(o)) {
      for (const c in o)
        if (c !== 'default' && !(c in n)) {
          const f = Object.getOwnPropertyDescriptor(o, c);
          f &&
            Object.defineProperty(
              n,
              c,
              f.get ? f : { enumerable: !0, get: () => o[c] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const r = document.createElement('link').relList;
  if (r && r.supports && r.supports('modulepreload')) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) o(c);
  new MutationObserver(c => {
    for (const f of c)
      if (f.type === 'childList')
        for (const h of f.addedNodes)
          h.tagName === 'LINK' && h.rel === 'modulepreload' && o(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(c) {
    const f = {};
    return (
      c.integrity && (f.integrity = c.integrity),
      c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === 'use-credentials'
        ? (f.credentials = 'include')
        : c.crossOrigin === 'anonymous'
          ? (f.credentials = 'omit')
          : (f.credentials = 'same-origin'),
      f
    );
  }
  function o(c) {
    if (c.ep) return;
    c.ep = !0;
    const f = u(c);
    fetch(c.href, f);
  }
})();
function Ro(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, 'default')
    ? n.default
    : n;
}
var Jc = { exports: {} },
  gi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var A0;
function Fv() {
  if (A0) return gi;
  A0 = 1;
  var n = Symbol.for('react.transitional.element'),
    r = Symbol.for('react.fragment');
  function u(o, c, f) {
    var h = null;
    if (
      (f !== void 0 && (h = '' + f),
      c.key !== void 0 && (h = '' + c.key),
      'key' in c)
    ) {
      f = {};
      for (var p in c) p !== 'key' && (f[p] = c[p]);
    } else f = c;
    return (
      (c = f.ref),
      { $$typeof: n, type: o, key: h, ref: c !== void 0 ? c : null, props: f }
    );
  }
  return ((gi.Fragment = r), (gi.jsx = u), (gi.jsxs = u), gi);
}
var M0;
function Wv() {
  return (M0 || ((M0 = 1), (Jc.exports = Fv())), Jc.exports);
}
var b = Wv(),
  Pc = { exports: {} },
  pi = {},
  Fc = { exports: {} },
  Wc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var O0;
function Iv() {
  return (
    O0 ||
      ((O0 = 1),
      (function (n) {
        function r(L, W) {
          var re = L.length;
          L.push(W);
          e: for (; 0 < re; ) {
            var Me = (re - 1) >>> 1,
              T = L[Me];
            if (0 < c(T, W)) ((L[Me] = W), (L[re] = T), (re = Me));
            else break e;
          }
        }
        function u(L) {
          return L.length === 0 ? null : L[0];
        }
        function o(L) {
          if (L.length === 0) return null;
          var W = L[0],
            re = L.pop();
          if (re !== W) {
            L[0] = re;
            e: for (var Me = 0, T = L.length, Q = T >>> 1; Me < Q; ) {
              var ae = 2 * (Me + 1) - 1,
                ee = L[ae],
                de = ae + 1,
                ze = L[de];
              if (0 > c(ee, re))
                de < T && 0 > c(ze, ee)
                  ? ((L[Me] = ze), (L[de] = re), (Me = de))
                  : ((L[Me] = ee), (L[ae] = re), (Me = ae));
              else if (de < T && 0 > c(ze, re))
                ((L[Me] = ze), (L[de] = re), (Me = de));
              else break e;
            }
          }
          return W;
        }
        function c(L, W) {
          var re = L.sortIndex - W.sortIndex;
          return re !== 0 ? re : L.id - W.id;
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == 'object' &&
            typeof performance.now == 'function')
        ) {
          var f = performance;
          n.unstable_now = function () {
            return f.now();
          };
        } else {
          var h = Date,
            p = h.now();
          n.unstable_now = function () {
            return h.now() - p;
          };
        }
        var g = [],
          m = [],
          v = 1,
          S = null,
          w = 3,
          j = !1,
          _ = !1,
          R = !1,
          q = !1,
          H = typeof setTimeout == 'function' ? setTimeout : null,
          te = typeof clearTimeout == 'function' ? clearTimeout : null,
          X = typeof setImmediate < 'u' ? setImmediate : null;
        function F(L) {
          for (var W = u(m); W !== null; ) {
            if (W.callback === null) o(m);
            else if (W.startTime <= L)
              (o(m), (W.sortIndex = W.expirationTime), r(g, W));
            else break;
            W = u(m);
          }
        }
        function J(L) {
          if (((R = !1), F(L), !_))
            if (u(g) !== null) ((_ = !0), M || ((M = !0), ve()));
            else {
              var W = u(m);
              W !== null && Te(J, W.startTime - L);
            }
        }
        var M = !1,
          I = -1,
          fe = 5,
          le = -1;
        function x() {
          return q ? !0 : !(n.unstable_now() - le < fe);
        }
        function ne() {
          if (((q = !1), M)) {
            var L = n.unstable_now();
            le = L;
            var W = !0;
            try {
              e: {
                ((_ = !1), R && ((R = !1), te(I), (I = -1)), (j = !0));
                var re = w;
                try {
                  t: {
                    for (
                      F(L), S = u(g);
                      S !== null && !(S.expirationTime > L && x());

                    ) {
                      var Me = S.callback;
                      if (typeof Me == 'function') {
                        ((S.callback = null), (w = S.priorityLevel));
                        var T = Me(S.expirationTime <= L);
                        if (((L = n.unstable_now()), typeof T == 'function')) {
                          ((S.callback = T), F(L), (W = !0));
                          break t;
                        }
                        (S === u(g) && o(g), F(L));
                      } else o(g);
                      S = u(g);
                    }
                    if (S !== null) W = !0;
                    else {
                      var Q = u(m);
                      (Q !== null && Te(J, Q.startTime - L), (W = !1));
                    }
                  }
                  break e;
                } finally {
                  ((S = null), (w = re), (j = !1));
                }
                W = void 0;
              }
            } finally {
              W ? ve() : (M = !1);
            }
          }
        }
        var ve;
        if (typeof X == 'function')
          ve = function () {
            X(ne);
          };
        else if (typeof MessageChannel < 'u') {
          var oe = new MessageChannel(),
            je = oe.port2;
          ((oe.port1.onmessage = ne),
            (ve = function () {
              je.postMessage(null);
            }));
        } else
          ve = function () {
            H(ne, 0);
          };
        function Te(L, W) {
          I = H(function () {
            L(n.unstable_now());
          }, W);
        }
        ((n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (L) {
            L.callback = null;
          }),
          (n.unstable_forceFrameRate = function (L) {
            0 > L || 125 < L
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (fe = 0 < L ? Math.floor(1e3 / L) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (n.unstable_next = function (L) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var W = 3;
                break;
              default:
                W = w;
            }
            var re = w;
            w = W;
            try {
              return L();
            } finally {
              w = re;
            }
          }),
          (n.unstable_requestPaint = function () {
            q = !0;
          }),
          (n.unstable_runWithPriority = function (L, W) {
            switch (L) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                L = 3;
            }
            var re = w;
            w = L;
            try {
              return W();
            } finally {
              w = re;
            }
          }),
          (n.unstable_scheduleCallback = function (L, W, re) {
            var Me = n.unstable_now();
            switch (
              (typeof re == 'object' && re !== null
                ? ((re = re.delay),
                  (re = typeof re == 'number' && 0 < re ? Me + re : Me))
                : (re = Me),
              L)
            ) {
              case 1:
                var T = -1;
                break;
              case 2:
                T = 250;
                break;
              case 5:
                T = 1073741823;
                break;
              case 4:
                T = 1e4;
                break;
              default:
                T = 5e3;
            }
            return (
              (T = re + T),
              (L = {
                id: v++,
                callback: W,
                priorityLevel: L,
                startTime: re,
                expirationTime: T,
                sortIndex: -1,
              }),
              re > Me
                ? ((L.sortIndex = re),
                  r(m, L),
                  u(g) === null &&
                    L === u(m) &&
                    (R ? (te(I), (I = -1)) : (R = !0), Te(J, re - Me)))
                : ((L.sortIndex = T),
                  r(g, L),
                  _ || j || ((_ = !0), M || ((M = !0), ve()))),
              L
            );
          }),
          (n.unstable_shouldYield = x),
          (n.unstable_wrapCallback = function (L) {
            var W = w;
            return function () {
              var re = w;
              w = W;
              try {
                return L.apply(this, arguments);
              } finally {
                w = re;
              }
            };
          }));
      })(Wc)),
    Wc
  );
}
var j0;
function e1() {
  return (j0 || ((j0 = 1), (Fc.exports = Iv())), Fc.exports);
}
var Ic = { exports: {} },
  Re = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _0;
function t1() {
  if (_0) return Re;
  _0 = 1;
  var n = Symbol.for('react.transitional.element'),
    r = Symbol.for('react.portal'),
    u = Symbol.for('react.fragment'),
    o = Symbol.for('react.strict_mode'),
    c = Symbol.for('react.profiler'),
    f = Symbol.for('react.consumer'),
    h = Symbol.for('react.context'),
    p = Symbol.for('react.forward_ref'),
    g = Symbol.for('react.suspense'),
    m = Symbol.for('react.memo'),
    v = Symbol.for('react.lazy'),
    S = Symbol.iterator;
  function w(T) {
    return T === null || typeof T != 'object'
      ? null
      : ((T = (S && T[S]) || T['@@iterator']),
        typeof T == 'function' ? T : null);
  }
  var j = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    _ = Object.assign,
    R = {};
  function q(T, Q, ae) {
    ((this.props = T),
      (this.context = Q),
      (this.refs = R),
      (this.updater = ae || j));
  }
  ((q.prototype.isReactComponent = {}),
    (q.prototype.setState = function (T, Q) {
      if (typeof T != 'object' && typeof T != 'function' && T != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, T, Q, 'setState');
    }),
    (q.prototype.forceUpdate = function (T) {
      this.updater.enqueueForceUpdate(this, T, 'forceUpdate');
    }));
  function H() {}
  H.prototype = q.prototype;
  function te(T, Q, ae) {
    ((this.props = T),
      (this.context = Q),
      (this.refs = R),
      (this.updater = ae || j));
  }
  var X = (te.prototype = new H());
  ((X.constructor = te), _(X, q.prototype), (X.isPureReactComponent = !0));
  var F = Array.isArray,
    J = { H: null, A: null, T: null, S: null, V: null },
    M = Object.prototype.hasOwnProperty;
  function I(T, Q, ae, ee, de, ze) {
    return (
      (ae = ze.ref),
      {
        $$typeof: n,
        type: T,
        key: Q,
        ref: ae !== void 0 ? ae : null,
        props: ze,
      }
    );
  }
  function fe(T, Q) {
    return I(T.type, Q, void 0, void 0, void 0, T.props);
  }
  function le(T) {
    return typeof T == 'object' && T !== null && T.$$typeof === n;
  }
  function x(T) {
    var Q = { '=': '=0', ':': '=2' };
    return (
      '$' +
      T.replace(/[=:]/g, function (ae) {
        return Q[ae];
      })
    );
  }
  var ne = /\/+/g;
  function ve(T, Q) {
    return typeof T == 'object' && T !== null && T.key != null
      ? x('' + T.key)
      : Q.toString(36);
  }
  function oe() {}
  function je(T) {
    switch (T.status) {
      case 'fulfilled':
        return T.value;
      case 'rejected':
        throw T.reason;
      default:
        switch (
          (typeof T.status == 'string'
            ? T.then(oe, oe)
            : ((T.status = 'pending'),
              T.then(
                function (Q) {
                  T.status === 'pending' &&
                    ((T.status = 'fulfilled'), (T.value = Q));
                },
                function (Q) {
                  T.status === 'pending' &&
                    ((T.status = 'rejected'), (T.reason = Q));
                }
              )),
          T.status)
        ) {
          case 'fulfilled':
            return T.value;
          case 'rejected':
            throw T.reason;
        }
    }
    throw T;
  }
  function Te(T, Q, ae, ee, de) {
    var ze = typeof T;
    (ze === 'undefined' || ze === 'boolean') && (T = null);
    var Se = !1;
    if (T === null) Se = !0;
    else
      switch (ze) {
        case 'bigint':
        case 'string':
        case 'number':
          Se = !0;
          break;
        case 'object':
          switch (T.$$typeof) {
            case n:
            case r:
              Se = !0;
              break;
            case v:
              return ((Se = T._init), Te(Se(T._payload), Q, ae, ee, de));
          }
      }
    if (Se)
      return (
        (de = de(T)),
        (Se = ee === '' ? '.' + ve(T, 0) : ee),
        F(de)
          ? ((ae = ''),
            Se != null && (ae = Se.replace(ne, '$&/') + '/'),
            Te(de, Q, ae, '', function (Aa) {
              return Aa;
            }))
          : de != null &&
            (le(de) &&
              (de = fe(
                de,
                ae +
                  (de.key == null || (T && T.key === de.key)
                    ? ''
                    : ('' + de.key).replace(ne, '$&/') + '/') +
                  Se
              )),
            Q.push(de)),
        1
      );
    Se = 0;
    var Bt = ee === '' ? '.' : ee + ':';
    if (F(T))
      for (var Ie = 0; Ie < T.length; Ie++)
        ((ee = T[Ie]), (ze = Bt + ve(ee, Ie)), (Se += Te(ee, Q, ae, ze, de)));
    else if (((Ie = w(T)), typeof Ie == 'function'))
      for (T = Ie.call(T), Ie = 0; !(ee = T.next()).done; )
        ((ee = ee.value),
          (ze = Bt + ve(ee, Ie++)),
          (Se += Te(ee, Q, ae, ze, de)));
    else if (ze === 'object') {
      if (typeof T.then == 'function') return Te(je(T), Q, ae, ee, de);
      throw (
        (Q = String(T)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (Q === '[object Object]'
              ? 'object with keys {' + Object.keys(T).join(', ') + '}'
              : Q) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    }
    return Se;
  }
  function L(T, Q, ae) {
    if (T == null) return T;
    var ee = [],
      de = 0;
    return (
      Te(T, ee, '', '', function (ze) {
        return Q.call(ae, ze, de++);
      }),
      ee
    );
  }
  function W(T) {
    if (T._status === -1) {
      var Q = T._result;
      ((Q = Q()),
        Q.then(
          function (ae) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 1), (T._result = ae));
          },
          function (ae) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 2), (T._result = ae));
          }
        ),
        T._status === -1 && ((T._status = 0), (T._result = Q)));
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var re =
    typeof reportError == 'function'
      ? reportError
      : function (T) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var Q = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof T == 'object' &&
                T !== null &&
                typeof T.message == 'string'
                  ? String(T.message)
                  : String(T),
              error: T,
            });
            if (!window.dispatchEvent(Q)) return;
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', T);
            return;
          }
          console.error(T);
        };
  function Me() {}
  return (
    (Re.Children = {
      map: L,
      forEach: function (T, Q, ae) {
        L(
          T,
          function () {
            Q.apply(this, arguments);
          },
          ae
        );
      },
      count: function (T) {
        var Q = 0;
        return (
          L(T, function () {
            Q++;
          }),
          Q
        );
      },
      toArray: function (T) {
        return (
          L(T, function (Q) {
            return Q;
          }) || []
        );
      },
      only: function (T) {
        if (!le(T))
          throw Error(
            'React.Children.only expected to receive a single React element child.'
          );
        return T;
      },
    }),
    (Re.Component = q),
    (Re.Fragment = u),
    (Re.Profiler = c),
    (Re.PureComponent = te),
    (Re.StrictMode = o),
    (Re.Suspense = g),
    (Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J),
    (Re.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (T) {
        return J.H.useMemoCache(T);
      },
    }),
    (Re.cache = function (T) {
      return function () {
        return T.apply(null, arguments);
      };
    }),
    (Re.cloneElement = function (T, Q, ae) {
      if (T == null)
        throw Error(
          'The argument must be a React element, but you passed ' + T + '.'
        );
      var ee = _({}, T.props),
        de = T.key,
        ze = void 0;
      if (Q != null)
        for (Se in (Q.ref !== void 0 && (ze = void 0),
        Q.key !== void 0 && (de = '' + Q.key),
        Q))
          !M.call(Q, Se) ||
            Se === 'key' ||
            Se === '__self' ||
            Se === '__source' ||
            (Se === 'ref' && Q.ref === void 0) ||
            (ee[Se] = Q[Se]);
      var Se = arguments.length - 2;
      if (Se === 1) ee.children = ae;
      else if (1 < Se) {
        for (var Bt = Array(Se), Ie = 0; Ie < Se; Ie++)
          Bt[Ie] = arguments[Ie + 2];
        ee.children = Bt;
      }
      return I(T.type, de, void 0, void 0, ze, ee);
    }),
    (Re.createContext = function (T) {
      return (
        (T = {
          $$typeof: h,
          _currentValue: T,
          _currentValue2: T,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (T.Provider = T),
        (T.Consumer = { $$typeof: f, _context: T }),
        T
      );
    }),
    (Re.createElement = function (T, Q, ae) {
      var ee,
        de = {},
        ze = null;
      if (Q != null)
        for (ee in (Q.key !== void 0 && (ze = '' + Q.key), Q))
          M.call(Q, ee) &&
            ee !== 'key' &&
            ee !== '__self' &&
            ee !== '__source' &&
            (de[ee] = Q[ee]);
      var Se = arguments.length - 2;
      if (Se === 1) de.children = ae;
      else if (1 < Se) {
        for (var Bt = Array(Se), Ie = 0; Ie < Se; Ie++)
          Bt[Ie] = arguments[Ie + 2];
        de.children = Bt;
      }
      if (T && T.defaultProps)
        for (ee in ((Se = T.defaultProps), Se))
          de[ee] === void 0 && (de[ee] = Se[ee]);
      return I(T, ze, void 0, void 0, null, de);
    }),
    (Re.createRef = function () {
      return { current: null };
    }),
    (Re.forwardRef = function (T) {
      return { $$typeof: p, render: T };
    }),
    (Re.isValidElement = le),
    (Re.lazy = function (T) {
      return { $$typeof: v, _payload: { _status: -1, _result: T }, _init: W };
    }),
    (Re.memo = function (T, Q) {
      return { $$typeof: m, type: T, compare: Q === void 0 ? null : Q };
    }),
    (Re.startTransition = function (T) {
      var Q = J.T,
        ae = {};
      J.T = ae;
      try {
        var ee = T(),
          de = J.S;
        (de !== null && de(ae, ee),
          typeof ee == 'object' &&
            ee !== null &&
            typeof ee.then == 'function' &&
            ee.then(Me, re));
      } catch (ze) {
        re(ze);
      } finally {
        J.T = Q;
      }
    }),
    (Re.unstable_useCacheRefresh = function () {
      return J.H.useCacheRefresh();
    }),
    (Re.use = function (T) {
      return J.H.use(T);
    }),
    (Re.useActionState = function (T, Q, ae) {
      return J.H.useActionState(T, Q, ae);
    }),
    (Re.useCallback = function (T, Q) {
      return J.H.useCallback(T, Q);
    }),
    (Re.useContext = function (T) {
      return J.H.useContext(T);
    }),
    (Re.useDebugValue = function () {}),
    (Re.useDeferredValue = function (T, Q) {
      return J.H.useDeferredValue(T, Q);
    }),
    (Re.useEffect = function (T, Q, ae) {
      var ee = J.H;
      if (typeof ae == 'function')
        throw Error(
          'useEffect CRUD overload is not enabled in this build of React.'
        );
      return ee.useEffect(T, Q);
    }),
    (Re.useId = function () {
      return J.H.useId();
    }),
    (Re.useImperativeHandle = function (T, Q, ae) {
      return J.H.useImperativeHandle(T, Q, ae);
    }),
    (Re.useInsertionEffect = function (T, Q) {
      return J.H.useInsertionEffect(T, Q);
    }),
    (Re.useLayoutEffect = function (T, Q) {
      return J.H.useLayoutEffect(T, Q);
    }),
    (Re.useMemo = function (T, Q) {
      return J.H.useMemo(T, Q);
    }),
    (Re.useOptimistic = function (T, Q) {
      return J.H.useOptimistic(T, Q);
    }),
    (Re.useReducer = function (T, Q, ae) {
      return J.H.useReducer(T, Q, ae);
    }),
    (Re.useRef = function (T) {
      return J.H.useRef(T);
    }),
    (Re.useState = function (T) {
      return J.H.useState(T);
    }),
    (Re.useSyncExternalStore = function (T, Q, ae) {
      return J.H.useSyncExternalStore(T, Q, ae);
    }),
    (Re.useTransition = function () {
      return J.H.useTransition();
    }),
    (Re.version = '19.1.1'),
    Re
  );
}
var D0;
function Ao() {
  return (D0 || ((D0 = 1), (Ic.exports = t1())), Ic.exports);
}
var ef = { exports: {} },
  Nt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var z0;
function a1() {
  if (z0) return Nt;
  z0 = 1;
  var n = Ao();
  function r(g) {
    var m = 'https://react.dev/errors/' + g;
    if (1 < arguments.length) {
      m += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        m += '&args[]=' + encodeURIComponent(arguments[v]);
    }
    return (
      'Minified React error #' +
      g +
      '; visit ' +
      m +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function u() {}
  var o = {
      d: {
        f: u,
        r: function () {
          throw Error(r(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for('react.portal');
  function f(g, m, v) {
    var S =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: S == null ? null : '' + S,
      children: g,
      containerInfo: m,
      implementation: v,
    };
  }
  var h = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(g, m) {
    if (g === 'font') return '';
    if (typeof m == 'string') return m === 'use-credentials' ? m : '';
  }
  return (
    (Nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (Nt.createPortal = function (g, m) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(r(299));
      return f(g, m, null, v);
    }),
    (Nt.flushSync = function (g) {
      var m = h.T,
        v = o.p;
      try {
        if (((h.T = null), (o.p = 2), g)) return g();
      } finally {
        ((h.T = m), (o.p = v), o.d.f());
      }
    }),
    (Nt.preconnect = function (g, m) {
      typeof g == 'string' &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == 'string'
                ? m === 'use-credentials'
                  ? m
                  : ''
                : void 0))
          : (m = null),
        o.d.C(g, m));
    }),
    (Nt.prefetchDNS = function (g) {
      typeof g == 'string' && o.d.D(g);
    }),
    (Nt.preinit = function (g, m) {
      if (typeof g == 'string' && m && typeof m.as == 'string') {
        var v = m.as,
          S = p(v, m.crossOrigin),
          w = typeof m.integrity == 'string' ? m.integrity : void 0,
          j = typeof m.fetchPriority == 'string' ? m.fetchPriority : void 0;
        v === 'style'
          ? o.d.S(g, typeof m.precedence == 'string' ? m.precedence : void 0, {
              crossOrigin: S,
              integrity: w,
              fetchPriority: j,
            })
          : v === 'script' &&
            o.d.X(g, {
              crossOrigin: S,
              integrity: w,
              fetchPriority: j,
              nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
            });
      }
    }),
    (Nt.preinitModule = function (g, m) {
      if (typeof g == 'string')
        if (typeof m == 'object' && m !== null) {
          if (m.as == null || m.as === 'script') {
            var v = p(m.as, m.crossOrigin);
            o.d.M(g, {
              crossOrigin: v,
              integrity: typeof m.integrity == 'string' ? m.integrity : void 0,
              nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
            });
          }
        } else m == null && o.d.M(g);
    }),
    (Nt.preload = function (g, m) {
      if (
        typeof g == 'string' &&
        typeof m == 'object' &&
        m !== null &&
        typeof m.as == 'string'
      ) {
        var v = m.as,
          S = p(v, m.crossOrigin);
        o.d.L(g, v, {
          crossOrigin: S,
          integrity: typeof m.integrity == 'string' ? m.integrity : void 0,
          nonce: typeof m.nonce == 'string' ? m.nonce : void 0,
          type: typeof m.type == 'string' ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == 'string' ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == 'string' ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == 'string' ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == 'string' ? m.imageSizes : void 0,
          media: typeof m.media == 'string' ? m.media : void 0,
        });
      }
    }),
    (Nt.preloadModule = function (g, m) {
      if (typeof g == 'string')
        if (m) {
          var v = p(m.as, m.crossOrigin);
          o.d.m(g, {
            as: typeof m.as == 'string' && m.as !== 'script' ? m.as : void 0,
            crossOrigin: v,
            integrity: typeof m.integrity == 'string' ? m.integrity : void 0,
          });
        } else o.d.m(g);
    }),
    (Nt.requestFormReset = function (g) {
      o.d.r(g);
    }),
    (Nt.unstable_batchedUpdates = function (g, m) {
      return g(m);
    }),
    (Nt.useFormState = function (g, m, v) {
      return h.H.useFormState(g, m, v);
    }),
    (Nt.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (Nt.version = '19.1.1'),
    Nt
  );
}
var N0;
function Ug() {
  if (N0) return ef.exports;
  N0 = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return (n(), (ef.exports = a1()), ef.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var U0;
function n1() {
  if (U0) return pi;
  U0 = 1;
  var n = e1(),
    r = Ao(),
    u = Ug();
  function o(e) {
    var t = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += '&args[]=' + encodeURIComponent(arguments[a]);
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function c(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function f(e) {
    var t = e,
      a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (a = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function h(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (f(e) !== e) throw Error(o(188));
  }
  function g(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = f(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var a = e, l = t; ; ) {
      var i = a.return;
      if (i === null) break;
      var s = i.alternate;
      if (s === null) {
        if (((l = i.return), l !== null)) {
          a = l;
          continue;
        }
        break;
      }
      if (i.child === s.child) {
        for (s = i.child; s; ) {
          if (s === a) return (p(i), e);
          if (s === l) return (p(i), t);
          s = s.sibling;
        }
        throw Error(o(188));
      }
      if (a.return !== l.return) ((a = i), (l = s));
      else {
        for (var d = !1, y = i.child; y; ) {
          if (y === a) {
            ((d = !0), (a = i), (l = s));
            break;
          }
          if (y === l) {
            ((d = !0), (l = i), (a = s));
            break;
          }
          y = y.sibling;
        }
        if (!d) {
          for (y = s.child; y; ) {
            if (y === a) {
              ((d = !0), (a = s), (l = i));
              break;
            }
            if (y === l) {
              ((d = !0), (l = s), (a = i));
              break;
            }
            y = y.sibling;
          }
          if (!d) throw Error(o(189));
        }
      }
      if (a.alternate !== l) throw Error(o(190));
    }
    if (a.tag !== 3) throw Error(o(188));
    return a.stateNode.current === a ? e : t;
  }
  function m(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = m(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var v = Object.assign,
    S = Symbol.for('react.element'),
    w = Symbol.for('react.transitional.element'),
    j = Symbol.for('react.portal'),
    _ = Symbol.for('react.fragment'),
    R = Symbol.for('react.strict_mode'),
    q = Symbol.for('react.profiler'),
    H = Symbol.for('react.provider'),
    te = Symbol.for('react.consumer'),
    X = Symbol.for('react.context'),
    F = Symbol.for('react.forward_ref'),
    J = Symbol.for('react.suspense'),
    M = Symbol.for('react.suspense_list'),
    I = Symbol.for('react.memo'),
    fe = Symbol.for('react.lazy'),
    le = Symbol.for('react.activity'),
    x = Symbol.for('react.memo_cache_sentinel'),
    ne = Symbol.iterator;
  function ve(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (ne && e[ne]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var oe = Symbol.for('react.client.reference');
  function je(e) {
    if (e == null) return null;
    if (typeof e == 'function')
      return e.$$typeof === oe ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case _:
        return 'Fragment';
      case q:
        return 'Profiler';
      case R:
        return 'StrictMode';
      case J:
        return 'Suspense';
      case M:
        return 'SuspenseList';
      case le:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case j:
          return 'Portal';
        case X:
          return (e.displayName || 'Context') + '.Provider';
        case te:
          return (e._context.displayName || 'Context') + '.Consumer';
        case F:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case I:
          return (
            (t = e.displayName || null),
            t !== null ? t : je(e.type) || 'Memo'
          );
        case fe:
          ((t = e._payload), (e = e._init));
          try {
            return je(e(t));
          } catch {}
      }
    return null;
  }
  var Te = Array.isArray,
    L = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    W = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    re = { pending: !1, data: null, method: null, action: null },
    Me = [],
    T = -1;
  function Q(e) {
    return { current: e };
  }
  function ae(e) {
    0 > T || ((e.current = Me[T]), (Me[T] = null), T--);
  }
  function ee(e, t) {
    (T++, (Me[T] = e.current), (e.current = t));
  }
  var de = Q(null),
    ze = Q(null),
    Se = Q(null),
    Bt = Q(null);
  function Ie(e, t) {
    switch ((ee(Se, t), ee(ze, e), ee(de, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? t0(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = t0(t)), (e = a0(t, e)));
        else
          switch (e) {
            case 'svg':
              e = 1;
              break;
            case 'math':
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (ae(de), ee(de, e));
  }
  function Aa() {
    (ae(de), ae(ze), ae(Se));
  }
  function gt(e) {
    e.memoizedState !== null && ee(Bt, e);
    var t = de.current,
      a = a0(t, e.type);
    t !== a && (ee(ze, e), ee(de, a));
  }
  function Sa(e) {
    (ze.current === e && (ae(de), ae(ze)),
      Bt.current === e && (ae(Bt), (ci._currentValue = re)));
  }
  var xl = Object.prototype.hasOwnProperty,
    br = n.unstable_scheduleCallback,
    wa = n.unstable_cancelCallback,
    Go = n.unstable_shouldYield,
    Vo = n.unstable_requestPaint,
    Kt = n.unstable_now,
    $o = n.unstable_getCurrentPriorityLevel,
    Vi = n.unstable_ImmediatePriority,
    $i = n.unstable_UserBlockingPriority,
    Sl = n.unstable_NormalPriority,
    Va = n.unstable_LowPriority,
    dn = n.unstable_IdlePriority,
    Xi = n.log,
    xr = n.unstable_setDisableYieldValue,
    qt = null,
    nt = null;
  function Ea(e) {
    if (
      (typeof Xi == 'function' && xr(e),
      nt && typeof nt.setStrictMode == 'function')
    )
      try {
        nt.setStrictMode(qt, e);
      } catch {}
  }
  var Mt = Math.clz32 ? Math.clz32 : Qi,
    Xo = Math.log,
    Ma = Math.LN2;
  function Qi(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Xo(e) / Ma) | 0)) | 0);
  }
  var Xn = 256,
    Qn = 4194304;
  function $a(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Kn(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var i = 0,
      s = e.suspendedLanes,
      d = e.pingedLanes;
    e = e.warmLanes;
    var y = l & 134217727;
    return (
      y !== 0
        ? ((l = y & ~s),
          l !== 0
            ? (i = $a(l))
            : ((d &= y),
              d !== 0
                ? (i = $a(d))
                : a || ((a = y & ~e), a !== 0 && (i = $a(a)))))
        : ((y = l & ~s),
          y !== 0
            ? (i = $a(y))
            : d !== 0
              ? (i = $a(d))
              : a || ((a = l & ~e), a !== 0 && (i = $a(a)))),
      i === 0
        ? 0
        : t !== 0 &&
            t !== i &&
            (t & s) === 0 &&
            ((s = i & -i),
            (a = t & -t),
            s >= a || (s === 32 && (a & 4194048) !== 0))
          ? t
          : i
    );
  }
  function Oa(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Ki(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function wl() {
    var e = Xn;
    return ((Xn <<= 1), (Xn & 4194048) === 0 && (Xn = 256), e);
  }
  function Zi() {
    var e = Qn;
    return ((Qn <<= 1), (Qn & 62914560) === 0 && (Qn = 4194304), e);
  }
  function El(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function Zn(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Ji(e, t, a, l, i, s) {
    var d = e.pendingLanes;
    ((e.pendingLanes = a),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= a),
      (e.entangledLanes &= a),
      (e.errorRecoveryDisabledLanes &= a),
      (e.shellSuspendCounter = 0));
    var y = e.entanglements,
      E = e.expirationTimes,
      N = e.hiddenUpdates;
    for (a = d & ~a; 0 < a; ) {
      var V = 31 - Mt(a),
        K = 1 << V;
      ((y[V] = 0), (E[V] = -1));
      var B = N[V];
      if (B !== null)
        for (N[V] = null, V = 0; V < B.length; V++) {
          var k = B[V];
          k !== null && (k.lane &= -536870913);
        }
      a &= ~K;
    }
    (l !== 0 && Jn(e, l, 0),
      s !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= s & ~(d & ~t)));
  }
  function Jn(e, t, a) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var l = 31 - Mt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (a & 4194090)));
  }
  function Pn(e, t) {
    var a = (e.entangledLanes |= t);
    for (e = e.entanglements; a; ) {
      var l = 31 - Mt(a),
        i = 1 << l;
      ((i & t) | (e[l] & t) && (e[l] |= t), (a &= ~i));
    }
  }
  function Sr(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function wr(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function C() {
    var e = W.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : S0(e.type));
  }
  function D(e, t) {
    var a = W.p;
    try {
      return ((W.p = e), t());
    } finally {
      W.p = a;
    }
  }
  var Y = Math.random().toString(36).slice(2),
    Z = '__reactFiber$' + Y,
    P = '__reactProps$' + Y,
    ue = '__reactContainer$' + Y,
    he = '__reactEvents$' + Y,
    se = '__reactListeners$' + Y,
    ye = '__reactHandles$' + Y,
    be = '__reactResources$' + Y,
    ce = '__reactMarker$' + Y;
  function me(e) {
    (delete e[Z], delete e[P], delete e[he], delete e[se], delete e[ye]);
  }
  function Ae(e) {
    var t = e[Z];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if ((t = a[ue] || a[Z])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (e = i0(e); e !== null; ) {
            if ((a = e[Z])) return a;
            e = i0(e);
          }
        return t;
      }
      ((e = a), (a = e.parentNode));
    }
    return null;
  }
  function Ge(e) {
    if ((e = e[Z] || e[ue])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function it(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function ut(e) {
    var t = e[be];
    return (
      t ||
        (t = e[be] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Ce(e) {
    e[ce] = !0;
  }
  var Xe = new Set(),
    ja = {};
  function Zt(e, t) {
    (Ht(e, t), Ht(e + 'Capture', t));
  }
  function Ht(e, t) {
    for (ja[e] = t, e = 0; e < t.length; e++) Xe.add(t[e]);
  }
  var ia = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    Tl = {},
    hn = {};
  function Xa(e) {
    return xl.call(hn, e)
      ? !0
      : xl.call(Tl, e)
        ? !1
        : ia.test(e)
          ? (hn[e] = !0)
          : ((Tl[e] = !0), !1);
  }
  function Qa(e, t, a) {
    if (Xa(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(t);
            return;
          case 'boolean':
            var l = t.toLowerCase().slice(0, 5);
            if (l !== 'data-' && l !== 'aria-') {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, '' + a);
      }
  }
  function Ka(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, '' + a);
    }
  }
  function _e(e, t, a, l) {
    if (l === null) e.removeAttribute(a);
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, '' + l);
    }
  }
  var pt, Fn;
  function ua(e) {
    if (pt === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((pt = (t && t[1]) || ''),
          (Fn =
            -1 <
            a.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < a.stack.indexOf('@')
                ? '@unknown:0:0'
                : ''));
      }
    return (
      `
` +
      pt +
      e +
      Fn
    );
  }
  var lt = !1;
  function mn(e, t) {
    if (!e || lt) return '';
    lt = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var K = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(K.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(K, []);
                } catch (k) {
                  var B = k;
                }
                Reflect.construct(e, [], K);
              } else {
                try {
                  K.call();
                } catch (k) {
                  B = k;
                }
                e.call(K.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (k) {
                B = k;
              }
              (K = e()) &&
                typeof K.catch == 'function' &&
                K.catch(function () {});
            }
          } catch (k) {
            if (k && B && typeof k.stack == 'string') return [k.stack, B.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var i = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        'name'
      );
      i &&
        i.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var s = l.DetermineComponentFrameRoot(),
        d = s[0],
        y = s[1];
      if (d && y) {
        var E = d.split(`
`),
          N = y.split(`
`);
        for (
          i = l = 0;
          l < E.length && !E[l].includes('DetermineComponentFrameRoot');

        )
          l++;
        for (; i < N.length && !N[i].includes('DetermineComponentFrameRoot'); )
          i++;
        if (l === E.length || i === N.length)
          for (
            l = E.length - 1, i = N.length - 1;
            1 <= l && 0 <= i && E[l] !== N[i];

          )
            i--;
        for (; 1 <= l && 0 <= i; l--, i--)
          if (E[l] !== N[i]) {
            if (l !== 1 || i !== 1)
              do
                if ((l--, i--, 0 > i || E[l] !== N[i])) {
                  var V =
                    `
` + E[l].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      V.includes('<anonymous>') &&
                      (V = V.replace('<anonymous>', e.displayName)),
                    V
                  );
                }
              while (1 <= l && 0 <= i);
            break;
          }
      }
    } finally {
      ((lt = !1), (Error.prepareStackTrace = a));
    }
    return (a = e ? e.displayName || e.name : '') ? ua(a) : '';
  }
  function Pi(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ua(e.type);
      case 16:
        return ua('Lazy');
      case 13:
        return ua('Suspense');
      case 19:
        return ua('SuspenseList');
      case 0:
      case 15:
        return mn(e.type, !1);
      case 11:
        return mn(e.type.render, !1);
      case 1:
        return mn(e.type, !0);
      case 31:
        return ua('Activity');
      default:
        return '';
    }
  }
  function Fi(e) {
    try {
      var t = '';
      do ((t += Pi(e)), (e = e.return));
      while (e);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function oa(e) {
    switch (typeof e) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function Pf(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    );
  }
  function Xp(e) {
    var t = Pf(e) ? 'checked' : 'value',
      a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      l = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof a < 'u' &&
      typeof a.get == 'function' &&
      typeof a.set == 'function'
    ) {
      var i = a.get,
        s = a.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (d) {
            ((l = '' + d), s.call(this, d));
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (d) {
            l = '' + d;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Wi(e) {
    e._valueTracker || (e._valueTracker = Xp(e));
  }
  function Ff(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      l = '';
    return (
      e && (l = Pf(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = l),
      e !== a ? (t.setValue(e), !0) : !1
    );
  }
  function Ii(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Qp = /[\n"\\]/g;
  function sa(e) {
    return e.replace(Qp, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Qo(e, t, a, l, i, s, d, y) {
    ((e.name = ''),
      d != null &&
      typeof d != 'function' &&
      typeof d != 'symbol' &&
      typeof d != 'boolean'
        ? (e.type = d)
        : e.removeAttribute('type'),
      t != null
        ? d === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) &&
            (e.value = '' + oa(t))
          : e.value !== '' + oa(t) && (e.value = '' + oa(t))
        : (d !== 'submit' && d !== 'reset') || e.removeAttribute('value'),
      t != null
        ? Ko(e, d, oa(t))
        : a != null
          ? Ko(e, d, oa(a))
          : l != null && e.removeAttribute('value'),
      i == null && s != null && (e.defaultChecked = !!s),
      i != null &&
        (e.checked = i && typeof i != 'function' && typeof i != 'symbol'),
      y != null &&
      typeof y != 'function' &&
      typeof y != 'symbol' &&
      typeof y != 'boolean'
        ? (e.name = '' + oa(y))
        : e.removeAttribute('name'));
  }
  function Wf(e, t, a, l, i, s, d, y) {
    if (
      (s != null &&
        typeof s != 'function' &&
        typeof s != 'symbol' &&
        typeof s != 'boolean' &&
        (e.type = s),
      t != null || a != null)
    ) {
      if (!((s !== 'submit' && s !== 'reset') || t != null)) return;
      ((a = a != null ? '' + oa(a) : ''),
        (t = t != null ? '' + oa(t) : a),
        y || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((l = l ?? i),
      (l = typeof l != 'function' && typeof l != 'symbol' && !!l),
      (e.checked = y ? e.checked : !!l),
      (e.defaultChecked = !!l),
      d != null &&
        typeof d != 'function' &&
        typeof d != 'symbol' &&
        typeof d != 'boolean' &&
        (e.name = d));
  }
  function Ko(e, t, a) {
    (t === 'number' && Ii(e.ownerDocument) === e) ||
      e.defaultValue === '' + a ||
      (e.defaultValue = '' + a);
  }
  function Cl(e, t, a, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < a.length; i++) t['$' + a[i]] = !0;
      for (a = 0; a < e.length; a++)
        ((i = t.hasOwnProperty('$' + e[a].value)),
          e[a].selected !== i && (e[a].selected = i),
          i && l && (e[a].defaultSelected = !0));
    } else {
      for (a = '' + oa(a), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === a) {
          ((e[i].selected = !0), l && (e[i].defaultSelected = !0));
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function If(e, t, a) {
    if (
      t != null &&
      ((t = '' + oa(t)), t !== e.value && (e.value = t), a == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? '' + oa(a) : '';
  }
  function ed(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(o(92));
        if (Te(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        a = l;
      }
      (a == null && (a = ''), (t = a));
    }
    ((a = oa(t)),
      (e.defaultValue = a),
      (l = e.textContent),
      l === a && l !== '' && l !== null && (e.value = l));
  }
  function Rl(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Kp = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function td(e, t, a) {
    var l = t.indexOf('--') === 0;
    a == null || typeof a == 'boolean' || a === ''
      ? l
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : l
        ? e.setProperty(t, a)
        : typeof a != 'number' || a === 0 || Kp.has(t)
          ? t === 'float'
            ? (e.cssFloat = a)
            : (e[t] = ('' + a).trim())
          : (e[t] = a + 'px');
  }
  function ad(e, t, a) {
    if (t != null && typeof t != 'object') throw Error(o(62));
    if (((e = e.style), a != null)) {
      for (var l in a)
        !a.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf('--') === 0
            ? e.setProperty(l, '')
            : l === 'float'
              ? (e.cssFloat = '')
              : (e[l] = ''));
      for (var i in t)
        ((l = t[i]), t.hasOwnProperty(i) && a[i] !== l && td(e, i, l));
    } else for (var s in t) t.hasOwnProperty(s) && td(e, s, t[s]);
  }
  function Zo(e) {
    if (e.indexOf('-') === -1) return !1;
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var Zp = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    Jp =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function eu(e) {
    return Jp.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Jo = null;
  function Po(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Al = null,
    Ml = null;
  function nd(e) {
    var t = Ge(e);
    if (t && (e = t.stateNode)) {
      var a = e[P] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (Qo(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ),
            (t = a.name),
            a.type === 'radio' && t != null)
          ) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + sa('' + t) + '"][type="radio"]'
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var i = l[P] || null;
                if (!i) throw Error(o(90));
                Qo(
                  l,
                  i.value,
                  i.defaultValue,
                  i.defaultValue,
                  i.checked,
                  i.defaultChecked,
                  i.type,
                  i.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              ((l = a[t]), l.form === e.form && Ff(l));
          }
          break e;
        case 'textarea':
          If(e, a.value, a.defaultValue);
          break e;
        case 'select':
          ((t = a.value), t != null && Cl(e, !!a.multiple, t, !1));
      }
    }
  }
  var Fo = !1;
  function ld(e, t, a) {
    if (Fo) return e(t, a);
    Fo = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((Fo = !1),
        (Al !== null || Ml !== null) &&
          (ku(), Al && ((t = Al), (e = Ml), (Ml = Al = null), nd(t), e)))
      )
        for (t = 0; t < e.length; t++) nd(e[t]);
    }
  }
  function Er(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[P] || null;
    if (l === null) return null;
    a = l[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ((l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !l));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != 'function') throw Error(o(231, t, typeof a));
    return a;
  }
  var Za = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Wo = !1;
  if (Za)
    try {
      var Tr = {};
      (Object.defineProperty(Tr, 'passive', {
        get: function () {
          Wo = !0;
        },
      }),
        window.addEventListener('test', Tr, Tr),
        window.removeEventListener('test', Tr, Tr));
    } catch {
      Wo = !1;
    }
  var gn = null,
    Io = null,
    tu = null;
  function rd() {
    if (tu) return tu;
    var e,
      t = Io,
      a = t.length,
      l,
      i = 'value' in gn ? gn.value : gn.textContent,
      s = i.length;
    for (e = 0; e < a && t[e] === i[e]; e++);
    var d = a - e;
    for (l = 1; l <= d && t[a - l] === i[s - l]; l++);
    return (tu = i.slice(e, 1 < l ? 1 - l : void 0));
  }
  function au(e) {
    var t = e.keyCode;
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function nu() {
    return !0;
  }
  function id() {
    return !1;
  }
  function Yt(e) {
    function t(a, l, i, s, d) {
      ((this._reactName = a),
        (this._targetInst = i),
        (this.type = l),
        (this.nativeEvent = s),
        (this.target = d),
        (this.currentTarget = null));
      for (var y in e)
        e.hasOwnProperty(y) && ((a = e[y]), (this[y] = a ? a(s) : s[y]));
      return (
        (this.isDefaultPrevented = (
          s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
        )
          ? nu
          : id),
        (this.isPropagationStopped = id),
        this
      );
    }
    return (
      v(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != 'unknown' && (a.returnValue = !1),
            (this.isDefaultPrevented = nu));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != 'unknown' && (a.cancelBubble = !0),
            (this.isPropagationStopped = nu));
        },
        persist: function () {},
        isPersistent: nu,
      }),
      t
    );
  }
  var Wn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    lu = Yt(Wn),
    Cr = v({}, Wn, { view: 0, detail: 0 }),
    Pp = Yt(Cr),
    es,
    ts,
    Rr,
    ru = v({}, Cr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ns,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== Rr &&
              (Rr && e.type === 'mousemove'
                ? ((es = e.screenX - Rr.screenX), (ts = e.screenY - Rr.screenY))
                : (ts = es = 0),
              (Rr = e)),
            es);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : ts;
      },
    }),
    ud = Yt(ru),
    Fp = v({}, ru, { dataTransfer: 0 }),
    Wp = Yt(Fp),
    Ip = v({}, Cr, { relatedTarget: 0 }),
    as = Yt(Ip),
    ey = v({}, Wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ty = Yt(ey),
    ay = v({}, Wn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    ny = Yt(ay),
    ly = v({}, Wn, { data: 0 }),
    od = Yt(ly),
    ry = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    iy = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    uy = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function oy(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = uy[e])
        ? !!t[e]
        : !1;
  }
  function ns() {
    return oy;
  }
  var sy = v({}, Cr, {
      key: function (e) {
        if (e.key) {
          var t = ry[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = au(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? iy[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ns,
      charCode: function (e) {
        return e.type === 'keypress' ? au(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? au(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    cy = Yt(sy),
    fy = v({}, ru, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    sd = Yt(fy),
    dy = v({}, Cr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ns,
    }),
    hy = Yt(dy),
    my = v({}, Wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    gy = Yt(my),
    py = v({}, ru, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    yy = Yt(py),
    vy = v({}, Wn, { newState: 0, oldState: 0 }),
    by = Yt(vy),
    xy = [9, 13, 27, 32],
    ls = Za && 'CompositionEvent' in window,
    Ar = null;
  Za && 'documentMode' in document && (Ar = document.documentMode);
  var Sy = Za && 'TextEvent' in window && !Ar,
    cd = Za && (!ls || (Ar && 8 < Ar && 11 >= Ar)),
    fd = ' ',
    dd = !1;
  function hd(e, t) {
    switch (e) {
      case 'keyup':
        return xy.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function md(e) {
    return (
      (e = e.detail),
      typeof e == 'object' && 'data' in e ? e.data : null
    );
  }
  var Ol = !1;
  function wy(e, t) {
    switch (e) {
      case 'compositionend':
        return md(t);
      case 'keypress':
        return t.which !== 32 ? null : ((dd = !0), fd);
      case 'textInput':
        return ((e = t.data), e === fd && dd ? null : e);
      default:
        return null;
    }
  }
  function Ey(e, t) {
    if (Ol)
      return e === 'compositionend' || (!ls && hd(e, t))
        ? ((e = rd()), (tu = Io = gn = null), (Ol = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return cd && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var Ty = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function gd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Ty[e.type] : t === 'textarea';
  }
  function pd(e, t, a, l) {
    (Al ? (Ml ? Ml.push(l) : (Ml = [l])) : (Al = l),
      (t = Xu(t, 'onChange')),
      0 < t.length &&
        ((a = new lu('onChange', 'change', null, a, l)),
        e.push({ event: a, listeners: t })));
  }
  var Mr = null,
    Or = null;
  function Cy(e) {
    Pm(e, 0);
  }
  function iu(e) {
    var t = it(e);
    if (Ff(t)) return e;
  }
  function yd(e, t) {
    if (e === 'change') return t;
  }
  var vd = !1;
  if (Za) {
    var rs;
    if (Za) {
      var is = 'oninput' in document;
      if (!is) {
        var bd = document.createElement('div');
        (bd.setAttribute('oninput', 'return;'),
          (is = typeof bd.oninput == 'function'));
      }
      rs = is;
    } else rs = !1;
    vd = rs && (!document.documentMode || 9 < document.documentMode);
  }
  function xd() {
    Mr && (Mr.detachEvent('onpropertychange', Sd), (Or = Mr = null));
  }
  function Sd(e) {
    if (e.propertyName === 'value' && iu(Or)) {
      var t = [];
      (pd(t, Or, e, Po(e)), ld(Cy, t));
    }
  }
  function Ry(e, t, a) {
    e === 'focusin'
      ? (xd(), (Mr = t), (Or = a), Mr.attachEvent('onpropertychange', Sd))
      : e === 'focusout' && xd();
  }
  function Ay(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return iu(Or);
  }
  function My(e, t) {
    if (e === 'click') return iu(t);
  }
  function Oy(e, t) {
    if (e === 'input' || e === 'change') return iu(t);
  }
  function jy(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Jt = typeof Object.is == 'function' ? Object.is : jy;
  function jr(e, t) {
    if (Jt(e, t)) return !0;
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1;
    var a = Object.keys(e),
      l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var i = a[l];
      if (!xl.call(t, i) || !Jt(e[i], t[i])) return !1;
    }
    return !0;
  }
  function wd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ed(e, t) {
    var a = wd(e);
    e = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (((l = e + a.textContent.length), e <= t && l >= t))
          return { node: a, offset: t - e };
        e = l;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = wd(a);
    }
  }
  function Td(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Td(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Cd(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Ii(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == 'string';
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Ii(e.document);
    }
    return t;
  }
  function us(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  var _y = Za && 'documentMode' in document && 11 >= document.documentMode,
    jl = null,
    os = null,
    _r = null,
    ss = !1;
  function Rd(e, t, a) {
    var l =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    ss ||
      jl == null ||
      jl !== Ii(l) ||
      ((l = jl),
      'selectionStart' in l && us(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (_r && jr(_r, l)) ||
        ((_r = l),
        (l = Xu(os, 'onSelect')),
        0 < l.length &&
          ((t = new lu('onSelect', 'select', null, t, a)),
          e.push({ event: t, listeners: l }),
          (t.target = jl))));
  }
  function In(e, t) {
    var a = {};
    return (
      (a[e.toLowerCase()] = t.toLowerCase()),
      (a['Webkit' + e] = 'webkit' + t),
      (a['Moz' + e] = 'moz' + t),
      a
    );
  }
  var _l = {
      animationend: In('Animation', 'AnimationEnd'),
      animationiteration: In('Animation', 'AnimationIteration'),
      animationstart: In('Animation', 'AnimationStart'),
      transitionrun: In('Transition', 'TransitionRun'),
      transitionstart: In('Transition', 'TransitionStart'),
      transitioncancel: In('Transition', 'TransitionCancel'),
      transitionend: In('Transition', 'TransitionEnd'),
    },
    cs = {},
    Ad = {};
  Za &&
    ((Ad = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete _l.animationend.animation,
      delete _l.animationiteration.animation,
      delete _l.animationstart.animation),
    'TransitionEvent' in window || delete _l.transitionend.transition);
  function el(e) {
    if (cs[e]) return cs[e];
    if (!_l[e]) return e;
    var t = _l[e],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in Ad) return (cs[e] = t[a]);
    return e;
  }
  var Md = el('animationend'),
    Od = el('animationiteration'),
    jd = el('animationstart'),
    Dy = el('transitionrun'),
    zy = el('transitionstart'),
    Ny = el('transitioncancel'),
    _d = el('transitionend'),
    Dd = new Map(),
    fs =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  fs.push('scrollEnd');
  function Ta(e, t) {
    (Dd.set(e, t), Zt(t, [e]));
  }
  var zd = new WeakMap();
  function ca(e, t) {
    if (typeof e == 'object' && e !== null) {
      var a = zd.get(e);
      return a !== void 0
        ? a
        : ((t = { value: e, source: t, stack: Fi(t) }), zd.set(e, t), t);
    }
    return { value: e, source: t, stack: Fi(t) };
  }
  var fa = [],
    Dl = 0,
    ds = 0;
  function uu() {
    for (var e = Dl, t = (ds = Dl = 0); t < e; ) {
      var a = fa[t];
      fa[t++] = null;
      var l = fa[t];
      fa[t++] = null;
      var i = fa[t];
      fa[t++] = null;
      var s = fa[t];
      if (((fa[t++] = null), l !== null && i !== null)) {
        var d = l.pending;
        (d === null ? (i.next = i) : ((i.next = d.next), (d.next = i)),
          (l.pending = i));
      }
      s !== 0 && Nd(a, i, s);
    }
  }
  function ou(e, t, a, l) {
    ((fa[Dl++] = e),
      (fa[Dl++] = t),
      (fa[Dl++] = a),
      (fa[Dl++] = l),
      (ds |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l));
  }
  function hs(e, t, a, l) {
    return (ou(e, t, a, l), su(e));
  }
  function zl(e, t) {
    return (ou(e, null, null, t), su(e));
  }
  function Nd(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var i = !1, s = e.return; s !== null; )
      ((s.childLanes |= a),
        (l = s.alternate),
        l !== null && (l.childLanes |= a),
        s.tag === 22 &&
          ((e = s.stateNode), e === null || e._visibility & 1 || (i = !0)),
        (e = s),
        (s = s.return));
    return e.tag === 3
      ? ((s = e.stateNode),
        i &&
          t !== null &&
          ((i = 31 - Mt(a)),
          (e = s.hiddenUpdates),
          (l = e[i]),
          l === null ? (e[i] = [t]) : l.push(t),
          (t.lane = a | 536870912)),
        s)
      : null;
  }
  function su(e) {
    if (50 < ai) throw ((ai = 0), (bc = null), Error(o(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var Nl = {};
  function Uy(e, t, a, l) {
    ((this.tag = e),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Pt(e, t, a, l) {
    return new Uy(e, t, a, l);
  }
  function ms(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Ja(e, t) {
    var a = e.alternate;
    return (
      a === null
        ? ((a = Pt(e.tag, t, e.key, e.mode)),
          (a.elementType = e.elementType),
          (a.type = e.type),
          (a.stateNode = e.stateNode),
          (a.alternate = e),
          (e.alternate = a))
        : ((a.pendingProps = t),
          (a.type = e.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = e.flags & 65011712),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      (a.refCleanup = e.refCleanup),
      a
    );
  }
  function Ud(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return (
      a === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = a.childLanes),
          (e.lanes = a.lanes),
          (e.child = a.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = a.memoizedProps),
          (e.memoizedState = a.memoizedState),
          (e.updateQueue = a.updateQueue),
          (e.type = a.type),
          (t = a.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function cu(e, t, a, l, i, s) {
    var d = 0;
    if (((l = e), typeof e == 'function')) ms(e) && (d = 1);
    else if (typeof e == 'string')
      d = Bv(e, a, de.current)
        ? 26
        : e === 'html' || e === 'head' || e === 'body'
          ? 27
          : 5;
    else
      e: switch (e) {
        case le:
          return (
            (e = Pt(31, a, t, i)),
            (e.elementType = le),
            (e.lanes = s),
            e
          );
        case _:
          return tl(a.children, i, s, t);
        case R:
          ((d = 8), (i |= 24));
          break;
        case q:
          return (
            (e = Pt(12, a, t, i | 2)),
            (e.elementType = q),
            (e.lanes = s),
            e
          );
        case J:
          return ((e = Pt(13, a, t, i)), (e.elementType = J), (e.lanes = s), e);
        case M:
          return ((e = Pt(19, a, t, i)), (e.elementType = M), (e.lanes = s), e);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case H:
              case X:
                d = 10;
                break e;
              case te:
                d = 9;
                break e;
              case F:
                d = 11;
                break e;
              case I:
                d = 14;
                break e;
              case fe:
                ((d = 16), (l = null));
                break e;
            }
          ((d = 29),
            (a = Error(o(130, e === null ? 'null' : typeof e, ''))),
            (l = null));
      }
    return (
      (t = Pt(d, a, t, i)),
      (t.elementType = e),
      (t.type = l),
      (t.lanes = s),
      t
    );
  }
  function tl(e, t, a, l) {
    return ((e = Pt(7, e, l, t)), (e.lanes = a), e);
  }
  function gs(e, t, a) {
    return ((e = Pt(6, e, null, t)), (e.lanes = a), e);
  }
  function ps(e, t, a) {
    return (
      (t = Pt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Ul = [],
    Ll = 0,
    fu = null,
    du = 0,
    da = [],
    ha = 0,
    al = null,
    Pa = 1,
    Fa = '';
  function nl(e, t) {
    ((Ul[Ll++] = du), (Ul[Ll++] = fu), (fu = e), (du = t));
  }
  function Ld(e, t, a) {
    ((da[ha++] = Pa), (da[ha++] = Fa), (da[ha++] = al), (al = e));
    var l = Pa;
    e = Fa;
    var i = 32 - Mt(l) - 1;
    ((l &= ~(1 << i)), (a += 1));
    var s = 32 - Mt(t) + i;
    if (30 < s) {
      var d = i - (i % 5);
      ((s = (l & ((1 << d) - 1)).toString(32)),
        (l >>= d),
        (i -= d),
        (Pa = (1 << (32 - Mt(t) + i)) | (a << i) | l),
        (Fa = s + e));
    } else ((Pa = (1 << s) | (a << i) | l), (Fa = e));
  }
  function ys(e) {
    e.return !== null && (nl(e, 1), Ld(e, 1, 0));
  }
  function vs(e) {
    for (; e === fu; )
      ((fu = Ul[--Ll]), (Ul[Ll] = null), (du = Ul[--Ll]), (Ul[Ll] = null));
    for (; e === al; )
      ((al = da[--ha]),
        (da[ha] = null),
        (Fa = da[--ha]),
        (da[ha] = null),
        (Pa = da[--ha]),
        (da[ha] = null));
  }
  var kt = null,
    ot = null,
    ke = !1,
    ll = null,
    _a = !1,
    bs = Error(o(519));
  function rl(e) {
    var t = Error(o(418, ''));
    throw (Nr(ca(t, e)), bs);
  }
  function Bd(e) {
    var t = e.stateNode,
      a = e.type,
      l = e.memoizedProps;
    switch (((t[Z] = e), (t[P] = l), a)) {
      case 'dialog':
        (Ue('cancel', t), Ue('close', t));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        Ue('load', t);
        break;
      case 'video':
      case 'audio':
        for (a = 0; a < li.length; a++) Ue(li[a], t);
        break;
      case 'source':
        Ue('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        (Ue('error', t), Ue('load', t));
        break;
      case 'details':
        Ue('toggle', t);
        break;
      case 'input':
        (Ue('invalid', t),
          Wf(
            t,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0
          ),
          Wi(t));
        break;
      case 'select':
        Ue('invalid', t);
        break;
      case 'textarea':
        (Ue('invalid', t), ed(t, l.value, l.defaultValue, l.children), Wi(t));
    }
    ((a = l.children),
      (typeof a != 'string' && typeof a != 'number' && typeof a != 'bigint') ||
      t.textContent === '' + a ||
      l.suppressHydrationWarning === !0 ||
      e0(t.textContent, a)
        ? (l.popover != null && (Ue('beforetoggle', t), Ue('toggle', t)),
          l.onScroll != null && Ue('scroll', t),
          l.onScrollEnd != null && Ue('scrollend', t),
          l.onClick != null && (t.onclick = Qu),
          (t = !0))
        : (t = !1),
      t || rl(e));
  }
  function Hd(e) {
    for (kt = e.return; kt; )
      switch (kt.tag) {
        case 5:
        case 13:
          _a = !1;
          return;
        case 27:
        case 3:
          _a = !0;
          return;
        default:
          kt = kt.return;
      }
  }
  function Dr(e) {
    if (e !== kt) return !1;
    if (!ke) return (Hd(e), (ke = !0), !1);
    var t = e.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = e.type),
          (a =
            !(a !== 'form' && a !== 'button') || Uc(e.type, e.memoizedProps))),
        (a = !a)),
      a && ot && rl(e),
      Hd(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((a = e.data), a === '/$')) {
              if (t === 0) {
                ot = Ra(e.nextSibling);
                break e;
              }
              t--;
            } else (a !== '$' && a !== '$!' && a !== '$?') || t++;
          e = e.nextSibling;
        }
        ot = null;
      }
    } else
      t === 27
        ? ((t = ot), _n(e.type) ? ((e = kc), (kc = null), (ot = e)) : (ot = t))
        : (ot = kt ? Ra(e.stateNode.nextSibling) : null);
    return !0;
  }
  function zr() {
    ((ot = kt = null), (ke = !1));
  }
  function kd() {
    var e = ll;
    return (
      e !== null &&
        ($t === null ? ($t = e) : $t.push.apply($t, e), (ll = null)),
      e
    );
  }
  function Nr(e) {
    ll === null ? (ll = [e]) : ll.push(e);
  }
  var xs = Q(null),
    il = null,
    Wa = null;
  function pn(e, t, a) {
    (ee(xs, t._currentValue), (t._currentValue = a));
  }
  function Ia(e) {
    ((e._currentValue = xs.current), ae(xs));
  }
  function Ss(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === a)
      )
        break;
      e = e.return;
    }
  }
  function ws(e, t, a, l) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var s = i.dependencies;
      if (s !== null) {
        var d = i.child;
        s = s.firstContext;
        e: for (; s !== null; ) {
          var y = s;
          s = i;
          for (var E = 0; E < t.length; E++)
            if (y.context === t[E]) {
              ((s.lanes |= a),
                (y = s.alternate),
                y !== null && (y.lanes |= a),
                Ss(s.return, a, e),
                l || (d = null));
              break e;
            }
          s = y.next;
        }
      } else if (i.tag === 18) {
        if (((d = i.return), d === null)) throw Error(o(341));
        ((d.lanes |= a),
          (s = d.alternate),
          s !== null && (s.lanes |= a),
          Ss(d, a, e),
          (d = null));
      } else d = i.child;
      if (d !== null) d.return = i;
      else
        for (d = i; d !== null; ) {
          if (d === e) {
            d = null;
            break;
          }
          if (((i = d.sibling), i !== null)) {
            ((i.return = d.return), (d = i));
            break;
          }
          d = d.return;
        }
      i = d;
    }
  }
  function Ur(e, t, a, l) {
    e = null;
    for (var i = t, s = !1; i !== null; ) {
      if (!s) {
        if ((i.flags & 524288) !== 0) s = !0;
        else if ((i.flags & 262144) !== 0) break;
      }
      if (i.tag === 10) {
        var d = i.alternate;
        if (d === null) throw Error(o(387));
        if (((d = d.memoizedProps), d !== null)) {
          var y = i.type;
          Jt(i.pendingProps.value, d.value) ||
            (e !== null ? e.push(y) : (e = [y]));
        }
      } else if (i === Bt.current) {
        if (((d = i.alternate), d === null)) throw Error(o(387));
        d.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
          (e !== null ? e.push(ci) : (e = [ci]));
      }
      i = i.return;
    }
    (e !== null && ws(t, e, a, l), (t.flags |= 262144));
  }
  function hu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Jt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function ul(e) {
    ((il = e),
      (Wa = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function zt(e) {
    return qd(il, e);
  }
  function mu(e, t) {
    return (il === null && ul(e), qd(e, t));
  }
  function qd(e, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Wa === null)) {
      if (e === null) throw Error(o(308));
      ((Wa = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else Wa = Wa.next = t;
    return a;
  }
  var Ly =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (a) {
                  return a();
                }));
            };
          },
    By = n.unstable_scheduleCallback,
    Hy = n.unstable_NormalPriority,
    wt = {
      $$typeof: X,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Es() {
    return { controller: new Ly(), data: new Map(), refCount: 0 };
  }
  function Lr(e) {
    (e.refCount--,
      e.refCount === 0 &&
        By(Hy, function () {
          e.controller.abort();
        }));
  }
  var Br = null,
    Ts = 0,
    Bl = 0,
    Hl = null;
  function ky(e, t) {
    if (Br === null) {
      var a = (Br = []);
      ((Ts = 0),
        (Bl = Rc()),
        (Hl = {
          status: 'pending',
          value: void 0,
          then: function (l) {
            a.push(l);
          },
        }));
    }
    return (Ts++, t.then(Yd, Yd), t);
  }
  function Yd() {
    if (--Ts === 0 && Br !== null) {
      Hl !== null && (Hl.status = 'fulfilled');
      var e = Br;
      ((Br = null), (Bl = 0), (Hl = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function qy(e, t) {
    var a = [],
      l = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (i) {
          a.push(i);
        },
      };
    return (
      e.then(
        function () {
          ((l.status = 'fulfilled'), (l.value = t));
          for (var i = 0; i < a.length; i++) (0, a[i])(t);
        },
        function (i) {
          for (l.status = 'rejected', l.reason = i, i = 0; i < a.length; i++)
            (0, a[i])(void 0);
        }
      ),
      l
    );
  }
  var Gd = L.S;
  L.S = function (e, t) {
    (typeof t == 'object' &&
      t !== null &&
      typeof t.then == 'function' &&
      ky(e, t),
      Gd !== null && Gd(e, t));
  };
  var ol = Q(null);
  function Cs() {
    var e = ol.current;
    return e !== null ? e : et.pooledCache;
  }
  function gu(e, t) {
    t === null ? ee(ol, ol.current) : ee(ol, t.pool);
  }
  function Vd() {
    var e = Cs();
    return e === null ? null : { parent: wt._currentValue, pool: e };
  }
  var Hr = Error(o(460)),
    $d = Error(o(474)),
    pu = Error(o(542)),
    Rs = { then: function () {} };
  function Xd(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function yu() {}
  function Qd(e, t, a) {
    switch (
      ((a = e[a]),
      a === void 0 ? e.push(t) : a !== t && (t.then(yu, yu), (t = a)),
      t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), Zd(e), e);
      default:
        if (typeof t.status == 'string') t.then(yu, yu);
        else {
          if (((e = et), e !== null && 100 < e.shellSuspendCounter))
            throw Error(o(482));
          ((e = t),
            (e.status = 'pending'),
            e.then(
              function (l) {
                if (t.status === 'pending') {
                  var i = t;
                  ((i.status = 'fulfilled'), (i.value = l));
                }
              },
              function (l) {
                if (t.status === 'pending') {
                  var i = t;
                  ((i.status = 'rejected'), (i.reason = l));
                }
              }
            ));
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value;
          case 'rejected':
            throw ((e = t.reason), Zd(e), e);
        }
        throw ((kr = t), Hr);
    }
  }
  var kr = null;
  function Kd() {
    if (kr === null) throw Error(o(459));
    var e = kr;
    return ((kr = null), e);
  }
  function Zd(e) {
    if (e === Hr || e === pu) throw Error(o(483));
  }
  var yn = !1;
  function As(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ms(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function vn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function bn(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Ve & 2) !== 0)) {
      var i = l.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (l.pending = t),
        (t = su(e)),
        Nd(e, null, a),
        t
      );
    }
    return (ou(e, l, t, a), su(e));
  }
  function qr(e, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (a |= l), (t.lanes = a), Pn(e, a));
    }
  }
  function Os(e, t) {
    var a = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), a === l)) {
      var i = null,
        s = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var d = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (s === null ? (i = s = d) : (s = s.next = d), (a = a.next));
        } while (a !== null);
        s === null ? (i = s = t) : (s = s.next = t);
      } else i = s = t;
      ((a = {
        baseState: l.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: s,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = a));
      return;
    }
    ((e = a.lastBaseUpdate),
      e === null ? (a.firstBaseUpdate = t) : (e.next = t),
      (a.lastBaseUpdate = t));
  }
  var js = !1;
  function Yr() {
    if (js) {
      var e = Hl;
      if (e !== null) throw e;
    }
  }
  function Gr(e, t, a, l) {
    js = !1;
    var i = e.updateQueue;
    yn = !1;
    var s = i.firstBaseUpdate,
      d = i.lastBaseUpdate,
      y = i.shared.pending;
    if (y !== null) {
      i.shared.pending = null;
      var E = y,
        N = E.next;
      ((E.next = null), d === null ? (s = N) : (d.next = N), (d = E));
      var V = e.alternate;
      V !== null &&
        ((V = V.updateQueue),
        (y = V.lastBaseUpdate),
        y !== d &&
          (y === null ? (V.firstBaseUpdate = N) : (y.next = N),
          (V.lastBaseUpdate = E)));
    }
    if (s !== null) {
      var K = i.baseState;
      ((d = 0), (V = N = E = null), (y = s));
      do {
        var B = y.lane & -536870913,
          k = B !== y.lane;
        if (k ? (Be & B) === B : (l & B) === B) {
          (B !== 0 && B === Bl && (js = !0),
            V !== null &&
              (V = V.next =
                {
                  lane: 0,
                  tag: y.tag,
                  payload: y.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var Ee = e,
              xe = y;
            B = t;
            var Ze = a;
            switch (xe.tag) {
              case 1:
                if (((Ee = xe.payload), typeof Ee == 'function')) {
                  K = Ee.call(Ze, K, B);
                  break e;
                }
                K = Ee;
                break e;
              case 3:
                Ee.flags = (Ee.flags & -65537) | 128;
              case 0:
                if (
                  ((Ee = xe.payload),
                  (B = typeof Ee == 'function' ? Ee.call(Ze, K, B) : Ee),
                  B == null)
                )
                  break e;
                K = v({}, K, B);
                break e;
              case 2:
                yn = !0;
            }
          }
          ((B = y.callback),
            B !== null &&
              ((e.flags |= 64),
              k && (e.flags |= 8192),
              (k = i.callbacks),
              k === null ? (i.callbacks = [B]) : k.push(B)));
        } else
          ((k = {
            lane: B,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null,
          }),
            V === null ? ((N = V = k), (E = K)) : (V = V.next = k),
            (d |= B));
        if (((y = y.next), y === null)) {
          if (((y = i.shared.pending), y === null)) break;
          ((k = y),
            (y = k.next),
            (k.next = null),
            (i.lastBaseUpdate = k),
            (i.shared.pending = null));
        }
      } while (!0);
      (V === null && (E = K),
        (i.baseState = E),
        (i.firstBaseUpdate = N),
        (i.lastBaseUpdate = V),
        s === null && (i.shared.lanes = 0),
        (An |= d),
        (e.lanes = d),
        (e.memoizedState = K));
    }
  }
  function Jd(e, t) {
    if (typeof e != 'function') throw Error(o(191, e));
    e.call(t);
  }
  function Pd(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++) Jd(a[e], t);
  }
  var kl = Q(null),
    vu = Q(0);
  function Fd(e, t) {
    ((e = un), ee(vu, e), ee(kl, t), (un = e | t.baseLanes));
  }
  function _s() {
    (ee(vu, un), ee(kl, kl.current));
  }
  function Ds() {
    ((un = vu.current), ae(kl), ae(vu));
  }
  var xn = 0,
    Oe = null,
    Qe = null,
    yt = null,
    bu = !1,
    ql = !1,
    sl = !1,
    xu = 0,
    Vr = 0,
    Yl = null,
    Yy = 0;
  function dt() {
    throw Error(o(321));
  }
  function zs(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!Jt(e[a], t[a])) return !1;
    return !0;
  }
  function Ns(e, t, a, l, i, s) {
    return (
      (xn = s),
      (Oe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (L.H = e === null || e.memoizedState === null ? Nh : Uh),
      (sl = !1),
      (s = a(l, i)),
      (sl = !1),
      ql && (s = Id(t, a, l, i)),
      Wd(e),
      s
    );
  }
  function Wd(e) {
    L.H = Ru;
    var t = Qe !== null && Qe.next !== null;
    if (((xn = 0), (yt = Qe = Oe = null), (bu = !1), (Vr = 0), (Yl = null), t))
      throw Error(o(300));
    e === null ||
      Tt ||
      ((e = e.dependencies), e !== null && hu(e) && (Tt = !0));
  }
  function Id(e, t, a, l) {
    Oe = e;
    var i = 0;
    do {
      if ((ql && (Yl = null), (Vr = 0), (ql = !1), 25 <= i))
        throw Error(o(301));
      if (((i += 1), (yt = Qe = null), e.updateQueue != null)) {
        var s = e.updateQueue;
        ((s.lastEffect = null),
          (s.events = null),
          (s.stores = null),
          s.memoCache != null && (s.memoCache.index = 0));
      }
      ((L.H = Zy), (s = t(a, l)));
    } while (ql);
    return s;
  }
  function Gy() {
    var e = L.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? $r(t) : t),
      (e = e.useState()[0]),
      (Qe !== null ? Qe.memoizedState : null) !== e && (Oe.flags |= 1024),
      t
    );
  }
  function Us() {
    var e = xu !== 0;
    return ((xu = 0), e);
  }
  function Ls(e, t, a) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a));
  }
  function Bs(e) {
    if (bu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      bu = !1;
    }
    ((xn = 0), (yt = Qe = Oe = null), (ql = !1), (Vr = xu = 0), (Yl = null));
  }
  function Gt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (yt === null ? (Oe.memoizedState = yt = e) : (yt = yt.next = e), yt);
  }
  function vt() {
    if (Qe === null) {
      var e = Oe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Qe.next;
    var t = yt === null ? Oe.memoizedState : yt.next;
    if (t !== null) ((yt = t), (Qe = e));
    else {
      if (e === null)
        throw Oe.alternate === null ? Error(o(467)) : Error(o(310));
      ((Qe = e),
        (e = {
          memoizedState: Qe.memoizedState,
          baseState: Qe.baseState,
          baseQueue: Qe.baseQueue,
          queue: Qe.queue,
          next: null,
        }),
        yt === null ? (Oe.memoizedState = yt = e) : (yt = yt.next = e));
    }
    return yt;
  }
  function Hs() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function $r(e) {
    var t = Vr;
    return (
      (Vr += 1),
      Yl === null && (Yl = []),
      (e = Qd(Yl, e, t)),
      (t = Oe),
      (yt === null ? t.memoizedState : yt.next) === null &&
        ((t = t.alternate),
        (L.H = t === null || t.memoizedState === null ? Nh : Uh)),
      e
    );
  }
  function Su(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return $r(e);
      if (e.$$typeof === X) return zt(e);
    }
    throw Error(o(438, String(e)));
  }
  function ks(e) {
    var t = null,
      a = Oe.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var l = Oe.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (i) {
                return i.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = Hs()), (Oe.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++) a[l] = x;
    return (t.index++, a);
  }
  function en(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function wu(e) {
    var t = vt();
    return qs(t, Qe, e);
  }
  function qs(e, t, a) {
    var l = e.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = a;
    var i = e.baseQueue,
      s = l.pending;
    if (s !== null) {
      if (i !== null) {
        var d = i.next;
        ((i.next = s.next), (s.next = d));
      }
      ((t.baseQueue = i = s), (l.pending = null));
    }
    if (((s = e.baseState), i === null)) e.memoizedState = s;
    else {
      t = i.next;
      var y = (d = null),
        E = null,
        N = t,
        V = !1;
      do {
        var K = N.lane & -536870913;
        if (K !== N.lane ? (Be & K) === K : (xn & K) === K) {
          var B = N.revertLane;
          if (B === 0)
            (E !== null &&
              (E = E.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: N.action,
                  hasEagerState: N.hasEagerState,
                  eagerState: N.eagerState,
                  next: null,
                }),
              K === Bl && (V = !0));
          else if ((xn & B) === B) {
            ((N = N.next), B === Bl && (V = !0));
            continue;
          } else
            ((K = {
              lane: 0,
              revertLane: N.revertLane,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null,
            }),
              E === null ? ((y = E = K), (d = s)) : (E = E.next = K),
              (Oe.lanes |= B),
              (An |= B));
          ((K = N.action),
            sl && a(s, K),
            (s = N.hasEagerState ? N.eagerState : a(s, K)));
        } else
          ((B = {
            lane: K,
            revertLane: N.revertLane,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null,
          }),
            E === null ? ((y = E = B), (d = s)) : (E = E.next = B),
            (Oe.lanes |= K),
            (An |= K));
        N = N.next;
      } while (N !== null && N !== t);
      if (
        (E === null ? (d = s) : (E.next = y),
        !Jt(s, e.memoizedState) && ((Tt = !0), V && ((a = Hl), a !== null)))
      )
        throw a;
      ((e.memoizedState = s),
        (e.baseState = d),
        (e.baseQueue = E),
        (l.lastRenderedState = s));
    }
    return (i === null && (l.lanes = 0), [e.memoizedState, l.dispatch]);
  }
  function Ys(e) {
    var t = vt(),
      a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch,
      i = a.pending,
      s = t.memoizedState;
    if (i !== null) {
      a.pending = null;
      var d = (i = i.next);
      do ((s = e(s, d.action)), (d = d.next));
      while (d !== i);
      (Jt(s, t.memoizedState) || (Tt = !0),
        (t.memoizedState = s),
        t.baseQueue === null && (t.baseState = s),
        (a.lastRenderedState = s));
    }
    return [s, l];
  }
  function eh(e, t, a) {
    var l = Oe,
      i = vt(),
      s = ke;
    if (s) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = t();
    var d = !Jt((Qe || i).memoizedState, a);
    (d && ((i.memoizedState = a), (Tt = !0)), (i = i.queue));
    var y = nh.bind(null, l, i, e);
    if (
      (Xr(2048, 8, y, [e]),
      i.getSnapshot !== t || d || (yt !== null && yt.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        Gl(9, Eu(), ah.bind(null, l, i, a, t), null),
        et === null)
      )
        throw Error(o(349));
      s || (xn & 124) !== 0 || th(l, t, a);
    }
    return a;
  }
  function th(e, t, a) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: a }),
      (t = Oe.updateQueue),
      t === null
        ? ((t = Hs()), (Oe.updateQueue = t), (t.stores = [e]))
        : ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e)));
  }
  function ah(e, t, a, l) {
    ((t.value = a), (t.getSnapshot = l), lh(t) && rh(e));
  }
  function nh(e, t, a) {
    return a(function () {
      lh(t) && rh(e);
    });
  }
  function lh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !Jt(e, a);
    } catch {
      return !0;
    }
  }
  function rh(e) {
    var t = zl(e, 2);
    t !== null && ta(t, e, 2);
  }
  function Gs(e) {
    var t = Gt();
    if (typeof e == 'function') {
      var a = e;
      if (((e = a()), sl)) {
        Ea(!0);
        try {
          a();
        } finally {
          Ea(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: en,
        lastRenderedState: e,
      }),
      t
    );
  }
  function ih(e, t, a, l) {
    return ((e.baseState = a), qs(e, Qe, typeof l == 'function' ? l : en));
  }
  function Vy(e, t, a, l, i) {
    if (Cu(e)) throw Error(o(485));
    if (((e = t.action), e !== null)) {
      var s = {
        payload: i,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (d) {
          s.listeners.push(d);
        },
      };
      (L.T !== null ? a(!0) : (s.isTransition = !1),
        l(s),
        (a = t.pending),
        a === null
          ? ((s.next = t.pending = s), uh(t, s))
          : ((s.next = a.next), (t.pending = a.next = s)));
    }
  }
  function uh(e, t) {
    var a = t.action,
      l = t.payload,
      i = e.state;
    if (t.isTransition) {
      var s = L.T,
        d = {};
      L.T = d;
      try {
        var y = a(i, l),
          E = L.S;
        (E !== null && E(d, y), oh(e, t, y));
      } catch (N) {
        Vs(e, t, N);
      } finally {
        L.T = s;
      }
    } else
      try {
        ((s = a(i, l)), oh(e, t, s));
      } catch (N) {
        Vs(e, t, N);
      }
  }
  function oh(e, t, a) {
    a !== null && typeof a == 'object' && typeof a.then == 'function'
      ? a.then(
          function (l) {
            sh(e, t, l);
          },
          function (l) {
            return Vs(e, t, l);
          }
        )
      : sh(e, t, a);
  }
  function sh(e, t, a) {
    ((t.status = 'fulfilled'),
      (t.value = a),
      ch(t),
      (e.state = a),
      (t = e.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (e.pending = null) : ((a = a.next), (t.next = a), uh(e, a))));
  }
  function Vs(e, t, a) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do ((t.status = 'rejected'), (t.reason = a), ch(t), (t = t.next));
      while (t !== l);
    }
    e.action = null;
  }
  function ch(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function fh(e, t) {
    return t;
  }
  function dh(e, t) {
    if (ke) {
      var a = et.formState;
      if (a !== null) {
        e: {
          var l = Oe;
          if (ke) {
            if (ot) {
              t: {
                for (var i = ot, s = _a; i.nodeType !== 8; ) {
                  if (!s) {
                    i = null;
                    break t;
                  }
                  if (((i = Ra(i.nextSibling)), i === null)) {
                    i = null;
                    break t;
                  }
                }
                ((s = i.data), (i = s === 'F!' || s === 'F' ? i : null));
              }
              if (i) {
                ((ot = Ra(i.nextSibling)), (l = i.data === 'F!'));
                break e;
              }
            }
            rl(l);
          }
          l = !1;
        }
        l && (t = a[0]);
      }
    }
    return (
      (a = Gt()),
      (a.memoizedState = a.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fh,
        lastRenderedState: t,
      }),
      (a.queue = l),
      (a = _h.bind(null, Oe, l)),
      (l.dispatch = a),
      (l = Gs(!1)),
      (s = Zs.bind(null, Oe, !1, l.queue)),
      (l = Gt()),
      (i = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = i),
      (a = Vy.bind(null, Oe, i, s, a)),
      (i.dispatch = a),
      (l.memoizedState = e),
      [t, a, !1]
    );
  }
  function hh(e) {
    var t = vt();
    return mh(t, Qe, e);
  }
  function mh(e, t, a) {
    if (
      ((t = qs(e, t, fh)[0]),
      (e = wu(en)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var l = $r(t);
      } catch (d) {
        throw d === Hr ? pu : d;
      }
    else l = t;
    t = vt();
    var i = t.queue,
      s = i.dispatch;
    return (
      a !== t.memoizedState &&
        ((Oe.flags |= 2048), Gl(9, Eu(), $y.bind(null, i, a), null)),
      [l, s, e]
    );
  }
  function $y(e, t) {
    e.action = t;
  }
  function gh(e) {
    var t = vt(),
      a = Qe;
    if (a !== null) return mh(t, a, e);
    (vt(), (t = t.memoizedState), (a = vt()));
    var l = a.queue.dispatch;
    return ((a.memoizedState = e), [t, l, !1]);
  }
  function Gl(e, t, a, l) {
    return (
      (e = { tag: e, create: a, deps: l, inst: t, next: null }),
      (t = Oe.updateQueue),
      t === null && ((t = Hs()), (Oe.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = e.next = e)
        : ((l = a.next), (a.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function Eu() {
    return { destroy: void 0, resource: void 0 };
  }
  function ph() {
    return vt().memoizedState;
  }
  function Tu(e, t, a, l) {
    var i = Gt();
    ((l = l === void 0 ? null : l),
      (Oe.flags |= e),
      (i.memoizedState = Gl(1 | t, Eu(), a, l)));
  }
  function Xr(e, t, a, l) {
    var i = vt();
    l = l === void 0 ? null : l;
    var s = i.memoizedState.inst;
    Qe !== null && l !== null && zs(l, Qe.memoizedState.deps)
      ? (i.memoizedState = Gl(t, s, a, l))
      : ((Oe.flags |= e), (i.memoizedState = Gl(1 | t, s, a, l)));
  }
  function yh(e, t) {
    Tu(8390656, 8, e, t);
  }
  function vh(e, t) {
    Xr(2048, 8, e, t);
  }
  function bh(e, t) {
    return Xr(4, 2, e, t);
  }
  function xh(e, t) {
    return Xr(4, 4, e, t);
  }
  function Sh(e, t) {
    if (typeof t == 'function') {
      e = e();
      var a = t(e);
      return function () {
        typeof a == 'function' ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function wh(e, t, a) {
    ((a = a != null ? a.concat([e]) : null), Xr(4, 4, Sh.bind(null, t, e), a));
  }
  function $s() {}
  function Eh(e, t) {
    var a = vt();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && zs(t, l[1]) ? l[0] : ((a.memoizedState = [e, t]), e);
  }
  function Th(e, t) {
    var a = vt();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && zs(t, l[1])) return l[0];
    if (((l = e()), sl)) {
      Ea(!0);
      try {
        e();
      } finally {
        Ea(!1);
      }
    }
    return ((a.memoizedState = [l, t]), l);
  }
  function Xs(e, t, a) {
    return a === void 0 || (xn & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = a), (e = Am()), (Oe.lanes |= e), (An |= e), a);
  }
  function Ch(e, t, a, l) {
    return Jt(a, t)
      ? a
      : kl.current !== null
        ? ((e = Xs(e, a, l)), Jt(e, t) || (Tt = !0), e)
        : (xn & 42) === 0
          ? ((Tt = !0), (e.memoizedState = a))
          : ((e = Am()), (Oe.lanes |= e), (An |= e), t);
  }
  function Rh(e, t, a, l, i) {
    var s = W.p;
    W.p = s !== 0 && 8 > s ? s : 8;
    var d = L.T,
      y = {};
    ((L.T = y), Zs(e, !1, t, a));
    try {
      var E = i(),
        N = L.S;
      if (
        (N !== null && N(y, E),
        E !== null && typeof E == 'object' && typeof E.then == 'function')
      ) {
        var V = qy(E, l);
        Qr(e, t, V, ea(e));
      } else Qr(e, t, l, ea(e));
    } catch (K) {
      Qr(e, t, { then: function () {}, status: 'rejected', reason: K }, ea());
    } finally {
      ((W.p = s), (L.T = d));
    }
  }
  function Xy() {}
  function Qs(e, t, a, l) {
    if (e.tag !== 5) throw Error(o(476));
    var i = Ah(e).queue;
    Rh(
      e,
      i,
      t,
      re,
      a === null
        ? Xy
        : function () {
            return (Mh(e), a(l));
          }
    );
  }
  function Ah(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: re,
      baseState: re,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: en,
        lastRenderedState: re,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: en,
          lastRenderedState: a,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Mh(e) {
    var t = Ah(e).next.queue;
    Qr(e, t, {}, ea());
  }
  function Ks() {
    return zt(ci);
  }
  function Oh() {
    return vt().memoizedState;
  }
  function jh() {
    return vt().memoizedState;
  }
  function Qy(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = ea();
          e = vn(a);
          var l = bn(t, e, a);
          (l !== null && (ta(l, t, a), qr(l, t, a)),
            (t = { cache: Es() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Ky(e, t, a) {
    var l = ea();
    ((a = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Cu(e)
        ? Dh(t, a)
        : ((a = hs(e, t, a, l)), a !== null && (ta(a, e, l), zh(a, t, l))));
  }
  function _h(e, t, a) {
    var l = ea();
    Qr(e, t, a, l);
  }
  function Qr(e, t, a, l) {
    var i = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Cu(e)) Dh(t, i);
    else {
      var s = e.alternate;
      if (
        e.lanes === 0 &&
        (s === null || s.lanes === 0) &&
        ((s = t.lastRenderedReducer), s !== null)
      )
        try {
          var d = t.lastRenderedState,
            y = s(d, a);
          if (((i.hasEagerState = !0), (i.eagerState = y), Jt(y, d)))
            return (ou(e, t, i, 0), et === null && uu(), !1);
        } catch {
        } finally {
        }
      if (((a = hs(e, t, i, l)), a !== null))
        return (ta(a, e, l), zh(a, t, l), !0);
    }
    return !1;
  }
  function Zs(e, t, a, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: Rc(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Cu(e))
    ) {
      if (t) throw Error(o(479));
    } else ((t = hs(e, a, l, 2)), t !== null && ta(t, e, 2));
  }
  function Cu(e) {
    var t = e.alternate;
    return e === Oe || (t !== null && t === Oe);
  }
  function Dh(e, t) {
    ql = bu = !0;
    var a = e.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (e.pending = t));
  }
  function zh(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (a |= l), (t.lanes = a), Pn(e, a));
    }
  }
  var Ru = {
      readContext: zt,
      use: Su,
      useCallback: dt,
      useContext: dt,
      useEffect: dt,
      useImperativeHandle: dt,
      useLayoutEffect: dt,
      useInsertionEffect: dt,
      useMemo: dt,
      useReducer: dt,
      useRef: dt,
      useState: dt,
      useDebugValue: dt,
      useDeferredValue: dt,
      useTransition: dt,
      useSyncExternalStore: dt,
      useId: dt,
      useHostTransitionStatus: dt,
      useFormState: dt,
      useActionState: dt,
      useOptimistic: dt,
      useMemoCache: dt,
      useCacheRefresh: dt,
    },
    Nh = {
      readContext: zt,
      use: Su,
      useCallback: function (e, t) {
        return ((Gt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: zt,
      useEffect: yh,
      useImperativeHandle: function (e, t, a) {
        ((a = a != null ? a.concat([e]) : null),
          Tu(4194308, 4, Sh.bind(null, t, e), a));
      },
      useLayoutEffect: function (e, t) {
        return Tu(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Tu(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var a = Gt();
        t = t === void 0 ? null : t;
        var l = e();
        if (sl) {
          Ea(!0);
          try {
            e();
          } finally {
            Ea(!1);
          }
        }
        return ((a.memoizedState = [l, t]), l);
      },
      useReducer: function (e, t, a) {
        var l = Gt();
        if (a !== void 0) {
          var i = a(t);
          if (sl) {
            Ea(!0);
            try {
              a(t);
            } finally {
              Ea(!1);
            }
          }
        } else i = t;
        return (
          (l.memoizedState = l.baseState = i),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: i,
          }),
          (l.queue = e),
          (e = e.dispatch = Ky.bind(null, Oe, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Gt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = Gs(e);
        var t = e.queue,
          a = _h.bind(null, Oe, t);
        return ((t.dispatch = a), [e.memoizedState, a]);
      },
      useDebugValue: $s,
      useDeferredValue: function (e, t) {
        var a = Gt();
        return Xs(a, e, t);
      },
      useTransition: function () {
        var e = Gs(!1);
        return (
          (e = Rh.bind(null, Oe, e.queue, !0, !1)),
          (Gt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, a) {
        var l = Oe,
          i = Gt();
        if (ke) {
          if (a === void 0) throw Error(o(407));
          a = a();
        } else {
          if (((a = t()), et === null)) throw Error(o(349));
          (Be & 124) !== 0 || th(l, t, a);
        }
        i.memoizedState = a;
        var s = { value: a, getSnapshot: t };
        return (
          (i.queue = s),
          yh(nh.bind(null, l, s, e), [e]),
          (l.flags |= 2048),
          Gl(9, Eu(), ah.bind(null, l, s, a, t), null),
          a
        );
      },
      useId: function () {
        var e = Gt(),
          t = et.identifierPrefix;
        if (ke) {
          var a = Fa,
            l = Pa;
          ((a = (l & ~(1 << (32 - Mt(l) - 1))).toString(32) + a),
            (t = '«' + t + 'R' + a),
            (a = xu++),
            0 < a && (t += 'H' + a.toString(32)),
            (t += '»'));
        } else ((a = Yy++), (t = '«' + t + 'r' + a.toString(32) + '»'));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Ks,
      useFormState: dh,
      useActionState: dh,
      useOptimistic: function (e) {
        var t = Gt();
        t.memoizedState = t.baseState = e;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a),
          (t = Zs.bind(null, Oe, !0, a)),
          (a.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: ks,
      useCacheRefresh: function () {
        return (Gt().memoizedState = Qy.bind(null, Oe));
      },
    },
    Uh = {
      readContext: zt,
      use: Su,
      useCallback: Eh,
      useContext: zt,
      useEffect: vh,
      useImperativeHandle: wh,
      useInsertionEffect: bh,
      useLayoutEffect: xh,
      useMemo: Th,
      useReducer: wu,
      useRef: ph,
      useState: function () {
        return wu(en);
      },
      useDebugValue: $s,
      useDeferredValue: function (e, t) {
        var a = vt();
        return Ch(a, Qe.memoizedState, e, t);
      },
      useTransition: function () {
        var e = wu(en)[0],
          t = vt().memoizedState;
        return [typeof e == 'boolean' ? e : $r(e), t];
      },
      useSyncExternalStore: eh,
      useId: Oh,
      useHostTransitionStatus: Ks,
      useFormState: hh,
      useActionState: hh,
      useOptimistic: function (e, t) {
        var a = vt();
        return ih(a, Qe, e, t);
      },
      useMemoCache: ks,
      useCacheRefresh: jh,
    },
    Zy = {
      readContext: zt,
      use: Su,
      useCallback: Eh,
      useContext: zt,
      useEffect: vh,
      useImperativeHandle: wh,
      useInsertionEffect: bh,
      useLayoutEffect: xh,
      useMemo: Th,
      useReducer: Ys,
      useRef: ph,
      useState: function () {
        return Ys(en);
      },
      useDebugValue: $s,
      useDeferredValue: function (e, t) {
        var a = vt();
        return Qe === null ? Xs(a, e, t) : Ch(a, Qe.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Ys(en)[0],
          t = vt().memoizedState;
        return [typeof e == 'boolean' ? e : $r(e), t];
      },
      useSyncExternalStore: eh,
      useId: Oh,
      useHostTransitionStatus: Ks,
      useFormState: gh,
      useActionState: gh,
      useOptimistic: function (e, t) {
        var a = vt();
        return Qe !== null
          ? ih(a, Qe, e, t)
          : ((a.baseState = e), [e, a.queue.dispatch]);
      },
      useMemoCache: ks,
      useCacheRefresh: jh,
    },
    Vl = null,
    Kr = 0;
  function Au(e) {
    var t = Kr;
    return ((Kr += 1), Vl === null && (Vl = []), Qd(Vl, e, t));
  }
  function Zr(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function Mu(e, t) {
    throw t.$$typeof === S
      ? Error(o(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          o(
            31,
            e === '[object Object]'
              ? 'object with keys {' + Object.keys(t).join(', ') + '}'
              : e
          )
        ));
  }
  function Lh(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Bh(e) {
    function t(O, A) {
      if (e) {
        var z = O.deletions;
        z === null ? ((O.deletions = [A]), (O.flags |= 16)) : z.push(A);
      }
    }
    function a(O, A) {
      if (!e) return null;
      for (; A !== null; ) (t(O, A), (A = A.sibling));
      return null;
    }
    function l(O) {
      for (var A = new Map(); O !== null; )
        (O.key !== null ? A.set(O.key, O) : A.set(O.index, O), (O = O.sibling));
      return A;
    }
    function i(O, A) {
      return ((O = Ja(O, A)), (O.index = 0), (O.sibling = null), O);
    }
    function s(O, A, z) {
      return (
        (O.index = z),
        e
          ? ((z = O.alternate),
            z !== null
              ? ((z = z.index), z < A ? ((O.flags |= 67108866), A) : z)
              : ((O.flags |= 67108866), A))
          : ((O.flags |= 1048576), A)
      );
    }
    function d(O) {
      return (e && O.alternate === null && (O.flags |= 67108866), O);
    }
    function y(O, A, z, $) {
      return A === null || A.tag !== 6
        ? ((A = gs(z, O.mode, $)), (A.return = O), A)
        : ((A = i(A, z)), (A.return = O), A);
    }
    function E(O, A, z, $) {
      var ie = z.type;
      return ie === _
        ? V(O, A, z.props.children, $, z.key)
        : A !== null &&
            (A.elementType === ie ||
              (typeof ie == 'object' &&
                ie !== null &&
                ie.$$typeof === fe &&
                Lh(ie) === A.type))
          ? ((A = i(A, z.props)), Zr(A, z), (A.return = O), A)
          : ((A = cu(z.type, z.key, z.props, null, O.mode, $)),
            Zr(A, z),
            (A.return = O),
            A);
    }
    function N(O, A, z, $) {
      return A === null ||
        A.tag !== 4 ||
        A.stateNode.containerInfo !== z.containerInfo ||
        A.stateNode.implementation !== z.implementation
        ? ((A = ps(z, O.mode, $)), (A.return = O), A)
        : ((A = i(A, z.children || [])), (A.return = O), A);
    }
    function V(O, A, z, $, ie) {
      return A === null || A.tag !== 7
        ? ((A = tl(z, O.mode, $, ie)), (A.return = O), A)
        : ((A = i(A, z)), (A.return = O), A);
    }
    function K(O, A, z) {
      if (
        (typeof A == 'string' && A !== '') ||
        typeof A == 'number' ||
        typeof A == 'bigint'
      )
        return ((A = gs('' + A, O.mode, z)), (A.return = O), A);
      if (typeof A == 'object' && A !== null) {
        switch (A.$$typeof) {
          case w:
            return (
              (z = cu(A.type, A.key, A.props, null, O.mode, z)),
              Zr(z, A),
              (z.return = O),
              z
            );
          case j:
            return ((A = ps(A, O.mode, z)), (A.return = O), A);
          case fe:
            var $ = A._init;
            return ((A = $(A._payload)), K(O, A, z));
        }
        if (Te(A) || ve(A))
          return ((A = tl(A, O.mode, z, null)), (A.return = O), A);
        if (typeof A.then == 'function') return K(O, Au(A), z);
        if (A.$$typeof === X) return K(O, mu(O, A), z);
        Mu(O, A);
      }
      return null;
    }
    function B(O, A, z, $) {
      var ie = A !== null ? A.key : null;
      if (
        (typeof z == 'string' && z !== '') ||
        typeof z == 'number' ||
        typeof z == 'bigint'
      )
        return ie !== null ? null : y(O, A, '' + z, $);
      if (typeof z == 'object' && z !== null) {
        switch (z.$$typeof) {
          case w:
            return z.key === ie ? E(O, A, z, $) : null;
          case j:
            return z.key === ie ? N(O, A, z, $) : null;
          case fe:
            return ((ie = z._init), (z = ie(z._payload)), B(O, A, z, $));
        }
        if (Te(z) || ve(z)) return ie !== null ? null : V(O, A, z, $, null);
        if (typeof z.then == 'function') return B(O, A, Au(z), $);
        if (z.$$typeof === X) return B(O, A, mu(O, z), $);
        Mu(O, z);
      }
      return null;
    }
    function k(O, A, z, $, ie) {
      if (
        (typeof $ == 'string' && $ !== '') ||
        typeof $ == 'number' ||
        typeof $ == 'bigint'
      )
        return ((O = O.get(z) || null), y(A, O, '' + $, ie));
      if (typeof $ == 'object' && $ !== null) {
        switch ($.$$typeof) {
          case w:
            return (
              (O = O.get($.key === null ? z : $.key) || null),
              E(A, O, $, ie)
            );
          case j:
            return (
              (O = O.get($.key === null ? z : $.key) || null),
              N(A, O, $, ie)
            );
          case fe:
            var De = $._init;
            return (($ = De($._payload)), k(O, A, z, $, ie));
        }
        if (Te($) || ve($))
          return ((O = O.get(z) || null), V(A, O, $, ie, null));
        if (typeof $.then == 'function') return k(O, A, z, Au($), ie);
        if ($.$$typeof === X) return k(O, A, z, mu(A, $), ie);
        Mu(A, $);
      }
      return null;
    }
    function Ee(O, A, z, $) {
      for (
        var ie = null, De = null, ge = A, we = (A = 0), Rt = null;
        ge !== null && we < z.length;
        we++
      ) {
        ge.index > we ? ((Rt = ge), (ge = null)) : (Rt = ge.sibling);
        var He = B(O, ge, z[we], $);
        if (He === null) {
          ge === null && (ge = Rt);
          break;
        }
        (e && ge && He.alternate === null && t(O, ge),
          (A = s(He, A, we)),
          De === null ? (ie = He) : (De.sibling = He),
          (De = He),
          (ge = Rt));
      }
      if (we === z.length) return (a(O, ge), ke && nl(O, we), ie);
      if (ge === null) {
        for (; we < z.length; we++)
          ((ge = K(O, z[we], $)),
            ge !== null &&
              ((A = s(ge, A, we)),
              De === null ? (ie = ge) : (De.sibling = ge),
              (De = ge)));
        return (ke && nl(O, we), ie);
      }
      for (ge = l(ge); we < z.length; we++)
        ((Rt = k(ge, O, we, z[we], $)),
          Rt !== null &&
            (e &&
              Rt.alternate !== null &&
              ge.delete(Rt.key === null ? we : Rt.key),
            (A = s(Rt, A, we)),
            De === null ? (ie = Rt) : (De.sibling = Rt),
            (De = Rt)));
      return (
        e &&
          ge.forEach(function (Ln) {
            return t(O, Ln);
          }),
        ke && nl(O, we),
        ie
      );
    }
    function xe(O, A, z, $) {
      if (z == null) throw Error(o(151));
      for (
        var ie = null,
          De = null,
          ge = A,
          we = (A = 0),
          Rt = null,
          He = z.next();
        ge !== null && !He.done;
        we++, He = z.next()
      ) {
        ge.index > we ? ((Rt = ge), (ge = null)) : (Rt = ge.sibling);
        var Ln = B(O, ge, He.value, $);
        if (Ln === null) {
          ge === null && (ge = Rt);
          break;
        }
        (e && ge && Ln.alternate === null && t(O, ge),
          (A = s(Ln, A, we)),
          De === null ? (ie = Ln) : (De.sibling = Ln),
          (De = Ln),
          (ge = Rt));
      }
      if (He.done) return (a(O, ge), ke && nl(O, we), ie);
      if (ge === null) {
        for (; !He.done; we++, He = z.next())
          ((He = K(O, He.value, $)),
            He !== null &&
              ((A = s(He, A, we)),
              De === null ? (ie = He) : (De.sibling = He),
              (De = He)));
        return (ke && nl(O, we), ie);
      }
      for (ge = l(ge); !He.done; we++, He = z.next())
        ((He = k(ge, O, we, He.value, $)),
          He !== null &&
            (e &&
              He.alternate !== null &&
              ge.delete(He.key === null ? we : He.key),
            (A = s(He, A, we)),
            De === null ? (ie = He) : (De.sibling = He),
            (De = He)));
      return (
        e &&
          ge.forEach(function (Jv) {
            return t(O, Jv);
          }),
        ke && nl(O, we),
        ie
      );
    }
    function Ze(O, A, z, $) {
      if (
        (typeof z == 'object' &&
          z !== null &&
          z.type === _ &&
          z.key === null &&
          (z = z.props.children),
        typeof z == 'object' && z !== null)
      ) {
        switch (z.$$typeof) {
          case w:
            e: {
              for (var ie = z.key; A !== null; ) {
                if (A.key === ie) {
                  if (((ie = z.type), ie === _)) {
                    if (A.tag === 7) {
                      (a(O, A.sibling),
                        ($ = i(A, z.props.children)),
                        ($.return = O),
                        (O = $));
                      break e;
                    }
                  } else if (
                    A.elementType === ie ||
                    (typeof ie == 'object' &&
                      ie !== null &&
                      ie.$$typeof === fe &&
                      Lh(ie) === A.type)
                  ) {
                    (a(O, A.sibling),
                      ($ = i(A, z.props)),
                      Zr($, z),
                      ($.return = O),
                      (O = $));
                    break e;
                  }
                  a(O, A);
                  break;
                } else t(O, A);
                A = A.sibling;
              }
              z.type === _
                ? (($ = tl(z.props.children, O.mode, $, z.key)),
                  ($.return = O),
                  (O = $))
                : (($ = cu(z.type, z.key, z.props, null, O.mode, $)),
                  Zr($, z),
                  ($.return = O),
                  (O = $));
            }
            return d(O);
          case j:
            e: {
              for (ie = z.key; A !== null; ) {
                if (A.key === ie)
                  if (
                    A.tag === 4 &&
                    A.stateNode.containerInfo === z.containerInfo &&
                    A.stateNode.implementation === z.implementation
                  ) {
                    (a(O, A.sibling),
                      ($ = i(A, z.children || [])),
                      ($.return = O),
                      (O = $));
                    break e;
                  } else {
                    a(O, A);
                    break;
                  }
                else t(O, A);
                A = A.sibling;
              }
              (($ = ps(z, O.mode, $)), ($.return = O), (O = $));
            }
            return d(O);
          case fe:
            return ((ie = z._init), (z = ie(z._payload)), Ze(O, A, z, $));
        }
        if (Te(z)) return Ee(O, A, z, $);
        if (ve(z)) {
          if (((ie = ve(z)), typeof ie != 'function')) throw Error(o(150));
          return ((z = ie.call(z)), xe(O, A, z, $));
        }
        if (typeof z.then == 'function') return Ze(O, A, Au(z), $);
        if (z.$$typeof === X) return Ze(O, A, mu(O, z), $);
        Mu(O, z);
      }
      return (typeof z == 'string' && z !== '') ||
        typeof z == 'number' ||
        typeof z == 'bigint'
        ? ((z = '' + z),
          A !== null && A.tag === 6
            ? (a(O, A.sibling), ($ = i(A, z)), ($.return = O), (O = $))
            : (a(O, A), ($ = gs(z, O.mode, $)), ($.return = O), (O = $)),
          d(O))
        : a(O, A);
    }
    return function (O, A, z, $) {
      try {
        Kr = 0;
        var ie = Ze(O, A, z, $);
        return ((Vl = null), ie);
      } catch (ge) {
        if (ge === Hr || ge === pu) throw ge;
        var De = Pt(29, ge, null, O.mode);
        return ((De.lanes = $), (De.return = O), De);
      } finally {
      }
    };
  }
  var $l = Bh(!0),
    Hh = Bh(!1),
    ma = Q(null),
    Da = null;
  function Sn(e) {
    var t = e.alternate;
    (ee(Et, Et.current & 1),
      ee(ma, e),
      Da === null &&
        (t === null || kl.current !== null || t.memoizedState !== null) &&
        (Da = e));
  }
  function kh(e) {
    if (e.tag === 22) {
      if ((ee(Et, Et.current), ee(ma, e), Da === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (Da = e);
      }
    } else wn();
  }
  function wn() {
    (ee(Et, Et.current), ee(ma, ma.current));
  }
  function tn(e) {
    (ae(ma), Da === e && (Da = null), ae(Et));
  }
  var Et = Q(0);
  function Ou(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === '$?' || Hc(a))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  function Js(e, t, a, l) {
    ((t = e.memoizedState),
      (a = a(l, t)),
      (a = a == null ? t : v({}, t, a)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a));
  }
  var Ps = {
    enqueueSetState: function (e, t, a) {
      e = e._reactInternals;
      var l = ea(),
        i = vn(l);
      ((i.payload = t),
        a != null && (i.callback = a),
        (t = bn(e, i, l)),
        t !== null && (ta(t, e, l), qr(t, e, l)));
    },
    enqueueReplaceState: function (e, t, a) {
      e = e._reactInternals;
      var l = ea(),
        i = vn(l);
      ((i.tag = 1),
        (i.payload = t),
        a != null && (i.callback = a),
        (t = bn(e, i, l)),
        t !== null && (ta(t, e, l), qr(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var a = ea(),
        l = vn(a);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = bn(e, l, a)),
        t !== null && (ta(t, e, a), qr(t, e, a)));
    },
  };
  function qh(e, t, a, l, i, s, d) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(l, s, d)
        : t.prototype && t.prototype.isPureReactComponent
          ? !jr(a, l) || !jr(i, s)
          : !0
    );
  }
  function Yh(e, t, a, l) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(a, l),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(a, l),
      t.state !== e && Ps.enqueueReplaceState(t, t.state, null));
  }
  function cl(e, t) {
    var a = t;
    if ('ref' in t) {
      a = {};
      for (var l in t) l !== 'ref' && (a[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      a === t && (a = v({}, a));
      for (var i in e) a[i] === void 0 && (a[i] = e[i]);
    }
    return a;
  }
  var ju =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var t = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == 'object' &&
                e !== null &&
                typeof e.message == 'string'
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', e);
            return;
          }
          console.error(e);
        };
  function Gh(e) {
    ju(e);
  }
  function Vh(e) {
    console.error(e);
  }
  function $h(e) {
    ju(e);
  }
  function _u(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Xh(e, t, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function Fs(e, t, a) {
    return (
      (a = vn(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        _u(e, t);
      }),
      a
    );
  }
  function Qh(e) {
    return ((e = vn(e)), (e.tag = 3), e);
  }
  function Kh(e, t, a, l) {
    var i = a.type.getDerivedStateFromError;
    if (typeof i == 'function') {
      var s = l.value;
      ((e.payload = function () {
        return i(s);
      }),
        (e.callback = function () {
          Xh(t, a, l);
        }));
    }
    var d = a.stateNode;
    d !== null &&
      typeof d.componentDidCatch == 'function' &&
      (e.callback = function () {
        (Xh(t, a, l),
          typeof i != 'function' &&
            (Mn === null ? (Mn = new Set([this])) : Mn.add(this)));
        var y = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: y !== null ? y : '',
        });
      });
  }
  function Jy(e, t, a, l, i) {
    if (
      ((a.flags |= 32768),
      l !== null && typeof l == 'object' && typeof l.then == 'function')
    ) {
      if (
        ((t = a.alternate),
        t !== null && Ur(t, a, i, !0),
        (a = ma.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              Da === null ? Sc() : a.alternate === null && st === 0 && (st = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = i),
              l === Rs
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([l])) : t.add(l),
                  Ec(e, l, i)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              l === Rs
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([l])) : a.add(l)),
                  Ec(e, l, i)),
              !1
            );
        }
        throw Error(o(435, a.tag));
      }
      return (Ec(e, l, i), Sc(), !1);
    }
    if (ke)
      return (
        (t = ma.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = i),
            l !== bs && ((e = Error(o(422), { cause: l })), Nr(ca(e, a))))
          : (l !== bs && ((t = Error(o(423), { cause: l })), Nr(ca(t, a))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (i &= -i),
            (e.lanes |= i),
            (l = ca(l, a)),
            (i = Fs(e.stateNode, l, i)),
            Os(e, i),
            st !== 4 && (st = 2)),
        !1
      );
    var s = Error(o(520), { cause: l });
    if (
      ((s = ca(s, a)),
      ti === null ? (ti = [s]) : ti.push(s),
      st !== 4 && (st = 2),
      t === null)
    )
      return !0;
    ((l = ca(l, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (e = i & -i),
            (a.lanes |= e),
            (e = Fs(a.stateNode, l, e)),
            Os(a, e),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (s = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (s !== null &&
                  typeof s.componentDidCatch == 'function' &&
                  (Mn === null || !Mn.has(s)))))
          )
            return (
              (a.flags |= 65536),
              (i &= -i),
              (a.lanes |= i),
              (i = Qh(i)),
              Kh(i, e, a, l),
              Os(a, i),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Zh = Error(o(461)),
    Tt = !1;
  function Ot(e, t, a, l) {
    t.child = e === null ? Hh(t, null, a, l) : $l(t, e.child, a, l);
  }
  function Jh(e, t, a, l, i) {
    a = a.render;
    var s = t.ref;
    if ('ref' in l) {
      var d = {};
      for (var y in l) y !== 'ref' && (d[y] = l[y]);
    } else d = l;
    return (
      ul(t),
      (l = Ns(e, t, a, d, s, i)),
      (y = Us()),
      e !== null && !Tt
        ? (Ls(e, t, i), an(e, t, i))
        : (ke && y && ys(t), (t.flags |= 1), Ot(e, t, l, i), t.child)
    );
  }
  function Ph(e, t, a, l, i) {
    if (e === null) {
      var s = a.type;
      return typeof s == 'function' &&
        !ms(s) &&
        s.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = s), Fh(e, t, s, l, i))
        : ((e = cu(a.type, null, l, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((s = e.child), !rc(e, i))) {
      var d = s.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : jr), a(d, l) && e.ref === t.ref)
      )
        return an(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = Ja(s, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Fh(e, t, a, l, i) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (jr(s, l) && e.ref === t.ref)
        if (((Tt = !1), (t.pendingProps = l = s), rc(e, i)))
          (e.flags & 131072) !== 0 && (Tt = !0);
        else return ((t.lanes = e.lanes), an(e, t, i));
    }
    return Ws(e, t, a, l, i);
  }
  function Wh(e, t, a) {
    var l = t.pendingProps,
      i = l.children,
      s = e !== null ? e.memoizedState : null;
    if (l.mode === 'hidden') {
      if ((t.flags & 128) !== 0) {
        if (((l = s !== null ? s.baseLanes | a : a), e !== null)) {
          for (i = t.child = e.child, s = 0; i !== null; )
            ((s = s | i.lanes | i.childLanes), (i = i.sibling));
          t.childLanes = s & ~l;
        } else ((t.childLanes = 0), (t.child = null));
        return Ih(e, t, l, a);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && gu(t, s !== null ? s.cachePool : null),
          s !== null ? Fd(t, s) : _s(),
          kh(t));
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          Ih(e, t, s !== null ? s.baseLanes | a : a, a)
        );
    } else
      s !== null
        ? (gu(t, s.cachePool), Fd(t, s), wn(), (t.memoizedState = null))
        : (e !== null && gu(t, null), _s(), wn());
    return (Ot(e, t, i, a), t.child);
  }
  function Ih(e, t, a, l) {
    var i = Cs();
    return (
      (i = i === null ? null : { parent: wt._currentValue, pool: i }),
      (t.memoizedState = { baseLanes: a, cachePool: i }),
      e !== null && gu(t, null),
      _s(),
      kh(t),
      e !== null && Ur(e, t, l, !0),
      null
    );
  }
  function Du(e, t) {
    var a = t.ref;
    if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != 'function' && typeof a != 'object') throw Error(o(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Ws(e, t, a, l, i) {
    return (
      ul(t),
      (a = Ns(e, t, a, l, void 0, i)),
      (l = Us()),
      e !== null && !Tt
        ? (Ls(e, t, i), an(e, t, i))
        : (ke && l && ys(t), (t.flags |= 1), Ot(e, t, a, i), t.child)
    );
  }
  function em(e, t, a, l, i, s) {
    return (
      ul(t),
      (t.updateQueue = null),
      (a = Id(t, l, a, i)),
      Wd(e),
      (l = Us()),
      e !== null && !Tt
        ? (Ls(e, t, s), an(e, t, s))
        : (ke && l && ys(t), (t.flags |= 1), Ot(e, t, a, s), t.child)
    );
  }
  function tm(e, t, a, l, i) {
    if ((ul(t), t.stateNode === null)) {
      var s = Nl,
        d = a.contextType;
      (typeof d == 'object' && d !== null && (s = zt(d)),
        (s = new a(l, s)),
        (t.memoizedState =
          s.state !== null && s.state !== void 0 ? s.state : null),
        (s.updater = Ps),
        (t.stateNode = s),
        (s._reactInternals = t),
        (s = t.stateNode),
        (s.props = l),
        (s.state = t.memoizedState),
        (s.refs = {}),
        As(t),
        (d = a.contextType),
        (s.context = typeof d == 'object' && d !== null ? zt(d) : Nl),
        (s.state = t.memoizedState),
        (d = a.getDerivedStateFromProps),
        typeof d == 'function' && (Js(t, a, d, l), (s.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == 'function' ||
          typeof s.getSnapshotBeforeUpdate == 'function' ||
          (typeof s.UNSAFE_componentWillMount != 'function' &&
            typeof s.componentWillMount != 'function') ||
          ((d = s.state),
          typeof s.componentWillMount == 'function' && s.componentWillMount(),
          typeof s.UNSAFE_componentWillMount == 'function' &&
            s.UNSAFE_componentWillMount(),
          d !== s.state && Ps.enqueueReplaceState(s, s.state, null),
          Gr(t, l, s, i),
          Yr(),
          (s.state = t.memoizedState)),
        typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
        (l = !0));
    } else if (e === null) {
      s = t.stateNode;
      var y = t.memoizedProps,
        E = cl(a, y);
      s.props = E;
      var N = s.context,
        V = a.contextType;
      ((d = Nl), typeof V == 'object' && V !== null && (d = zt(V)));
      var K = a.getDerivedStateFromProps;
      ((V =
        typeof K == 'function' ||
        typeof s.getSnapshotBeforeUpdate == 'function'),
        (y = t.pendingProps !== y),
        V ||
          (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof s.componentWillReceiveProps != 'function') ||
          ((y || N !== d) && Yh(t, s, l, d)),
        (yn = !1));
      var B = t.memoizedState;
      ((s.state = B),
        Gr(t, l, s, i),
        Yr(),
        (N = t.memoizedState),
        y || B !== N || yn
          ? (typeof K == 'function' && (Js(t, a, K, l), (N = t.memoizedState)),
            (E = yn || qh(t, a, E, l, B, N, d))
              ? (V ||
                  (typeof s.UNSAFE_componentWillMount != 'function' &&
                    typeof s.componentWillMount != 'function') ||
                  (typeof s.componentWillMount == 'function' &&
                    s.componentWillMount(),
                  typeof s.UNSAFE_componentWillMount == 'function' &&
                    s.UNSAFE_componentWillMount()),
                typeof s.componentDidMount == 'function' &&
                  (t.flags |= 4194308))
              : (typeof s.componentDidMount == 'function' &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = N)),
            (s.props = l),
            (s.state = N),
            (s.context = d),
            (l = E))
          : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
            (l = !1)));
    } else {
      ((s = t.stateNode),
        Ms(e, t),
        (d = t.memoizedProps),
        (V = cl(a, d)),
        (s.props = V),
        (K = t.pendingProps),
        (B = s.context),
        (N = a.contextType),
        (E = Nl),
        typeof N == 'object' && N !== null && (E = zt(N)),
        (y = a.getDerivedStateFromProps),
        (N =
          typeof y == 'function' ||
          typeof s.getSnapshotBeforeUpdate == 'function') ||
          (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof s.componentWillReceiveProps != 'function') ||
          ((d !== K || B !== E) && Yh(t, s, l, E)),
        (yn = !1),
        (B = t.memoizedState),
        (s.state = B),
        Gr(t, l, s, i),
        Yr());
      var k = t.memoizedState;
      d !== K ||
      B !== k ||
      yn ||
      (e !== null && e.dependencies !== null && hu(e.dependencies))
        ? (typeof y == 'function' && (Js(t, a, y, l), (k = t.memoizedState)),
          (V =
            yn ||
            qh(t, a, V, l, B, k, E) ||
            (e !== null && e.dependencies !== null && hu(e.dependencies)))
            ? (N ||
                (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                  typeof s.componentWillUpdate != 'function') ||
                (typeof s.componentWillUpdate == 'function' &&
                  s.componentWillUpdate(l, k, E),
                typeof s.UNSAFE_componentWillUpdate == 'function' &&
                  s.UNSAFE_componentWillUpdate(l, k, E)),
              typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate == 'function' &&
                (t.flags |= 1024))
            : (typeof s.componentDidUpdate != 'function' ||
                (d === e.memoizedProps && B === e.memoizedState) ||
                (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != 'function' ||
                (d === e.memoizedProps && B === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = k)),
          (s.props = l),
          (s.state = k),
          (s.context = E),
          (l = V))
        : (typeof s.componentDidUpdate != 'function' ||
            (d === e.memoizedProps && B === e.memoizedState) ||
            (t.flags |= 4),
          typeof s.getSnapshotBeforeUpdate != 'function' ||
            (d === e.memoizedProps && B === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (s = l),
      Du(e, t),
      (l = (t.flags & 128) !== 0),
      s || l
        ? ((s = t.stateNode),
          (a =
            l && typeof a.getDerivedStateFromError != 'function'
              ? null
              : s.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = $l(t, e.child, null, i)),
              (t.child = $l(t, null, a, i)))
            : Ot(e, t, a, i),
          (t.memoizedState = s.state),
          (e = t.child))
        : (e = an(e, t, i)),
      e
    );
  }
  function am(e, t, a, l) {
    return (zr(), (t.flags |= 256), Ot(e, t, a, l), t.child);
  }
  var Is = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function ec(e) {
    return { baseLanes: e, cachePool: Vd() };
  }
  function tc(e, t, a) {
    return ((e = e !== null ? e.childLanes & ~a : 0), t && (e |= ga), e);
  }
  function nm(e, t, a) {
    var l = t.pendingProps,
      i = !1,
      s = (t.flags & 128) !== 0,
      d;
    if (
      ((d = s) ||
        (d =
          e !== null && e.memoizedState === null ? !1 : (Et.current & 2) !== 0),
      d && ((i = !0), (t.flags &= -129)),
      (d = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (ke) {
        if ((i ? Sn(t) : wn(), ke)) {
          var y = ot,
            E;
          if ((E = y)) {
            e: {
              for (E = y, y = _a; E.nodeType !== 8; ) {
                if (!y) {
                  y = null;
                  break e;
                }
                if (((E = Ra(E.nextSibling)), E === null)) {
                  y = null;
                  break e;
                }
              }
              y = E;
            }
            y !== null
              ? ((t.memoizedState = {
                  dehydrated: y,
                  treeContext: al !== null ? { id: Pa, overflow: Fa } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (E = Pt(18, null, null, 0)),
                (E.stateNode = y),
                (E.return = t),
                (t.child = E),
                (kt = t),
                (ot = null),
                (E = !0))
              : (E = !1);
          }
          E || rl(t);
        }
        if (
          ((y = t.memoizedState),
          y !== null && ((y = y.dehydrated), y !== null))
        )
          return (Hc(y) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        tn(t);
      }
      return (
        (y = l.children),
        (l = l.fallback),
        i
          ? (wn(),
            (i = t.mode),
            (y = zu({ mode: 'hidden', children: y }, i)),
            (l = tl(l, i, a, null)),
            (y.return = t),
            (l.return = t),
            (y.sibling = l),
            (t.child = y),
            (i = t.child),
            (i.memoizedState = ec(a)),
            (i.childLanes = tc(e, d, a)),
            (t.memoizedState = Is),
            l)
          : (Sn(t), ac(t, y))
      );
    }
    if (
      ((E = e.memoizedState), E !== null && ((y = E.dehydrated), y !== null))
    ) {
      if (s)
        t.flags & 256
          ? (Sn(t), (t.flags &= -257), (t = nc(e, t, a)))
          : t.memoizedState !== null
            ? (wn(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (wn(),
              (i = l.fallback),
              (y = t.mode),
              (l = zu({ mode: 'visible', children: l.children }, y)),
              (i = tl(i, y, a, null)),
              (i.flags |= 2),
              (l.return = t),
              (i.return = t),
              (l.sibling = i),
              (t.child = l),
              $l(t, e.child, null, a),
              (l = t.child),
              (l.memoizedState = ec(a)),
              (l.childLanes = tc(e, d, a)),
              (t.memoizedState = Is),
              (t = i));
      else if ((Sn(t), Hc(y))) {
        if (((d = y.nextSibling && y.nextSibling.dataset), d)) var N = d.dgst;
        ((d = N),
          (l = Error(o(419))),
          (l.stack = ''),
          (l.digest = d),
          Nr({ value: l, source: null, stack: null }),
          (t = nc(e, t, a)));
      } else if (
        (Tt || Ur(e, t, a, !1), (d = (a & e.childLanes) !== 0), Tt || d)
      ) {
        if (
          ((d = et),
          d !== null &&
            ((l = a & -a),
            (l = (l & 42) !== 0 ? 1 : Sr(l)),
            (l = (l & (d.suspendedLanes | a)) !== 0 ? 0 : l),
            l !== 0 && l !== E.retryLane))
        )
          throw ((E.retryLane = l), zl(e, l), ta(d, e, l), Zh);
        (y.data === '$?' || Sc(), (t = nc(e, t, a)));
      } else
        y.data === '$?'
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = E.treeContext),
            (ot = Ra(y.nextSibling)),
            (kt = t),
            (ke = !0),
            (ll = null),
            (_a = !1),
            e !== null &&
              ((da[ha++] = Pa),
              (da[ha++] = Fa),
              (da[ha++] = al),
              (Pa = e.id),
              (Fa = e.overflow),
              (al = t)),
            (t = ac(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return i
      ? (wn(),
        (i = l.fallback),
        (y = t.mode),
        (E = e.child),
        (N = E.sibling),
        (l = Ja(E, { mode: 'hidden', children: l.children })),
        (l.subtreeFlags = E.subtreeFlags & 65011712),
        N !== null ? (i = Ja(N, i)) : ((i = tl(i, y, a, null)), (i.flags |= 2)),
        (i.return = t),
        (l.return = t),
        (l.sibling = i),
        (t.child = l),
        (l = i),
        (i = t.child),
        (y = e.child.memoizedState),
        y === null
          ? (y = ec(a))
          : ((E = y.cachePool),
            E !== null
              ? ((N = wt._currentValue),
                (E = E.parent !== N ? { parent: N, pool: N } : E))
              : (E = Vd()),
            (y = { baseLanes: y.baseLanes | a, cachePool: E })),
        (i.memoizedState = y),
        (i.childLanes = tc(e, d, a)),
        (t.memoizedState = Is),
        l)
      : (Sn(t),
        (a = e.child),
        (e = a.sibling),
        (a = Ja(a, { mode: 'visible', children: l.children })),
        (a.return = t),
        (a.sibling = null),
        e !== null &&
          ((d = t.deletions),
          d === null ? ((t.deletions = [e]), (t.flags |= 16)) : d.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function ac(e, t) {
    return (
      (t = zu({ mode: 'visible', children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function zu(e, t) {
    return (
      (e = Pt(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function nc(e, t, a) {
    return (
      $l(t, e.child, null, a),
      (e = ac(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function lm(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    (l !== null && (l.lanes |= t), Ss(e.return, t, a));
  }
  function lc(e, t, a, l, i) {
    var s = e.memoizedState;
    s === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: a,
          tailMode: i,
        })
      : ((s.isBackwards = t),
        (s.rendering = null),
        (s.renderingStartTime = 0),
        (s.last = l),
        (s.tail = a),
        (s.tailMode = i));
  }
  function rm(e, t, a) {
    var l = t.pendingProps,
      i = l.revealOrder,
      s = l.tail;
    if ((Ot(e, t, l.children, a), (l = Et.current), (l & 2) !== 0))
      ((l = (l & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && lm(e, a, t);
          else if (e.tag === 19) lm(e, a, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      l &= 1;
    }
    switch ((ee(Et, l), i)) {
      case 'forwards':
        for (a = t.child, i = null; a !== null; )
          ((e = a.alternate),
            e !== null && Ou(e) === null && (i = a),
            (a = a.sibling));
        ((a = i),
          a === null
            ? ((i = t.child), (t.child = null))
            : ((i = a.sibling), (a.sibling = null)),
          lc(t, !1, i, a, s));
        break;
      case 'backwards':
        for (a = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Ou(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = a), (a = i), (i = e));
        }
        lc(t, !0, a, null, s);
        break;
      case 'together':
        lc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function an(e, t, a) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (An |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Ur(e, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        e = t.child, a = Ja(e, e.pendingProps), t.child = a, a.return = t;
        e.sibling !== null;

      )
        ((e = e.sibling),
          (a = a.sibling = Ja(e, e.pendingProps)),
          (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function rc(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && hu(e)));
  }
  function Py(e, t, a) {
    switch (t.tag) {
      case 3:
        (Ie(t, t.stateNode.containerInfo),
          pn(t, wt, e.memoizedState.cache),
          zr());
        break;
      case 27:
      case 5:
        gt(t);
        break;
      case 4:
        Ie(t, t.stateNode.containerInfo);
        break;
      case 10:
        pn(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Sn(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
              ? nm(e, t, a)
              : (Sn(t), (e = an(e, t, a)), e !== null ? e.sibling : null);
        Sn(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (
          ((l = (a & t.childLanes) !== 0),
          l || (Ur(e, t, a, !1), (l = (a & t.childLanes) !== 0)),
          i)
        ) {
          if (l) return rm(e, t, a);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          ee(Et, Et.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Wh(e, t, a));
      case 24:
        pn(t, wt, e.memoizedState.cache);
    }
    return an(e, t, a);
  }
  function im(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Tt = !0;
      else {
        if (!rc(e, a) && (t.flags & 128) === 0) return ((Tt = !1), Py(e, t, a));
        Tt = (e.flags & 131072) !== 0;
      }
    else ((Tt = !1), ke && (t.flags & 1048576) !== 0 && Ld(t, du, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType,
            i = l._init;
          if (((l = i(l._payload)), (t.type = l), typeof l == 'function'))
            ms(l)
              ? ((e = cl(l, e)), (t.tag = 1), (t = tm(null, t, l, e, a)))
              : ((t.tag = 0), (t = Ws(null, t, l, e, a)));
          else {
            if (l != null) {
              if (((i = l.$$typeof), i === F)) {
                ((t.tag = 11), (t = Jh(null, t, l, e, a)));
                break e;
              } else if (i === I) {
                ((t.tag = 14), (t = Ph(null, t, l, e, a)));
                break e;
              }
            }
            throw ((t = je(l) || l), Error(o(306, t, '')));
          }
        }
        return t;
      case 0:
        return Ws(e, t, t.type, t.pendingProps, a);
      case 1:
        return ((l = t.type), (i = cl(l, t.pendingProps)), tm(e, t, l, i, a));
      case 3:
        e: {
          if ((Ie(t, t.stateNode.containerInfo), e === null))
            throw Error(o(387));
          l = t.pendingProps;
          var s = t.memoizedState;
          ((i = s.element), Ms(e, t), Gr(t, l, null, a));
          var d = t.memoizedState;
          if (
            ((l = d.cache),
            pn(t, wt, l),
            l !== s.cache && ws(t, [wt], a, !0),
            Yr(),
            (l = d.element),
            s.isDehydrated)
          )
            if (
              ((s = { element: l, isDehydrated: !1, cache: d.cache }),
              (t.updateQueue.baseState = s),
              (t.memoizedState = s),
              t.flags & 256)
            ) {
              t = am(e, t, l, a);
              break e;
            } else if (l !== i) {
              ((i = ca(Error(o(424)), t)), Nr(i), (t = am(e, t, l, a)));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === 'HTML' ? e.ownerDocument.body : e;
              }
              for (
                ot = Ra(e.firstChild),
                  kt = t,
                  ke = !0,
                  ll = null,
                  _a = !0,
                  a = Hh(t, null, l, a),
                  t.child = a;
                a;

              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
            }
          else {
            if ((zr(), l === i)) {
              t = an(e, t, a);
              break e;
            }
            Ot(e, t, l, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Du(e, t),
          e === null
            ? (a = c0(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : ke ||
                ((a = t.type),
                (e = t.pendingProps),
                (l = Ku(Se.current).createElement(a)),
                (l[Z] = t),
                (l[P] = e),
                _t(l, a, e),
                Ce(l),
                (t.stateNode = l))
            : (t.memoizedState = c0(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          gt(t),
          e === null &&
            ke &&
            ((l = t.stateNode = u0(t.type, t.pendingProps, Se.current)),
            (kt = t),
            (_a = !0),
            (i = ot),
            _n(t.type) ? ((kc = i), (ot = Ra(l.firstChild))) : (ot = i)),
          Ot(e, t, t.pendingProps.children, a),
          Du(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            ke &&
            ((i = l = ot) &&
              ((l = Tv(l, t.type, t.pendingProps, _a)),
              l !== null
                ? ((t.stateNode = l),
                  (kt = t),
                  (ot = Ra(l.firstChild)),
                  (_a = !1),
                  (i = !0))
                : (i = !1)),
            i || rl(t)),
          gt(t),
          (i = t.type),
          (s = t.pendingProps),
          (d = e !== null ? e.memoizedProps : null),
          (l = s.children),
          Uc(i, s) ? (l = null) : d !== null && Uc(i, d) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((i = Ns(e, t, Gy, null, null, a)), (ci._currentValue = i)),
          Du(e, t),
          Ot(e, t, l, a),
          t.child
        );
      case 6:
        return (
          e === null &&
            ke &&
            ((e = a = ot) &&
              ((a = Cv(a, t.pendingProps, _a)),
              a !== null
                ? ((t.stateNode = a), (kt = t), (ot = null), (e = !0))
                : (e = !1)),
            e || rl(t)),
          null
        );
      case 13:
        return nm(e, t, a);
      case 4:
        return (
          Ie(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = $l(t, null, l, a)) : Ot(e, t, l, a),
          t.child
        );
      case 11:
        return Jh(e, t, t.type, t.pendingProps, a);
      case 7:
        return (Ot(e, t, t.pendingProps, a), t.child);
      case 8:
        return (Ot(e, t, t.pendingProps.children, a), t.child);
      case 12:
        return (Ot(e, t, t.pendingProps.children, a), t.child);
      case 10:
        return (
          (l = t.pendingProps),
          pn(t, t.type, l.value),
          Ot(e, t, l.children, a),
          t.child
        );
      case 9:
        return (
          (i = t.type._context),
          (l = t.pendingProps.children),
          ul(t),
          (i = zt(i)),
          (l = l(i)),
          (t.flags |= 1),
          Ot(e, t, l, a),
          t.child
        );
      case 14:
        return Ph(e, t, t.type, t.pendingProps, a);
      case 15:
        return Fh(e, t, t.type, t.pendingProps, a);
      case 19:
        return rm(e, t, a);
      case 31:
        return (
          (l = t.pendingProps),
          (a = t.mode),
          (l = { mode: l.mode, children: l.children }),
          e === null
            ? ((a = zu(l, a)),
              (a.ref = t.ref),
              (t.child = a),
              (a.return = t),
              (t = a))
            : ((a = Ja(e.child, l)),
              (a.ref = t.ref),
              (t.child = a),
              (a.return = t),
              (t = a)),
          t
        );
      case 22:
        return Wh(e, t, a);
      case 24:
        return (
          ul(t),
          (l = zt(wt)),
          e === null
            ? ((i = Cs()),
              i === null &&
                ((i = et),
                (s = Es()),
                (i.pooledCache = s),
                s.refCount++,
                s !== null && (i.pooledCacheLanes |= a),
                (i = s)),
              (t.memoizedState = { parent: l, cache: i }),
              As(t),
              pn(t, wt, i))
            : ((e.lanes & a) !== 0 && (Ms(e, t), Gr(t, null, null, a), Yr()),
              (i = e.memoizedState),
              (s = t.memoizedState),
              i.parent !== l
                ? ((i = { parent: l, cache: l }),
                  (t.memoizedState = i),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = i),
                  pn(t, wt, l))
                : ((l = s.cache),
                  pn(t, wt, l),
                  l !== i.cache && ws(t, [wt], a, !0))),
          Ot(e, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function nn(e) {
    e.flags |= 4;
  }
  function um(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !g0(t))) {
      if (
        ((t = ma.current),
        t !== null &&
          ((Be & 4194048) === Be
            ? Da !== null
            : ((Be & 62914560) !== Be && (Be & 536870912) === 0) || t !== Da))
      )
        throw ((kr = Rs), $d);
      e.flags |= 8192;
    }
  }
  function Nu(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Zi() : 536870912), (e.lanes |= t), (Zl |= t)));
  }
  function Jr(e, t) {
    if (!ke)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var a = null; t !== null; )
            (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (e.tail = null) : (a.sibling = null);
          break;
        case 'collapsed':
          a = e.tail;
          for (var l = null; a !== null; )
            (a.alternate !== null && (l = a), (a = a.sibling));
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function rt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      l = 0;
    if (t)
      for (var i = e.child; i !== null; )
        ((a |= i.lanes | i.childLanes),
          (l |= i.subtreeFlags & 65011712),
          (l |= i.flags & 65011712),
          (i.return = e),
          (i = i.sibling));
    else
      for (i = e.child; i !== null; )
        ((a |= i.lanes | i.childLanes),
          (l |= i.subtreeFlags),
          (l |= i.flags),
          (i.return = e),
          (i = i.sibling));
    return ((e.subtreeFlags |= l), (e.childLanes = a), t);
  }
  function Fy(e, t, a) {
    var l = t.pendingProps;
    switch ((vs(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (rt(t), null);
      case 1:
        return (rt(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Ia(wt),
          Aa(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (Dr(t)
              ? nn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), kd())),
          rt(t),
          null
        );
      case 26:
        return (
          (a = t.memoizedState),
          e === null
            ? (nn(t),
              a !== null ? (rt(t), um(t, a)) : (rt(t), (t.flags &= -16777217)))
            : a
              ? a !== e.memoizedState
                ? (nn(t), rt(t), um(t, a))
                : (rt(t), (t.flags &= -16777217))
              : (e.memoizedProps !== l && nn(t), rt(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        (Sa(t), (a = Se.current));
        var i = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== l && nn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(o(166));
            return (rt(t), null);
          }
          ((e = de.current),
            Dr(t) ? Bd(t) : ((e = u0(i, l, a)), (t.stateNode = e), nn(t)));
        }
        return (rt(t), null);
      case 5:
        if ((Sa(t), (a = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && nn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(o(166));
            return (rt(t), null);
          }
          if (((e = de.current), Dr(t))) Bd(t);
          else {
            switch (((i = Ku(Se.current)), e)) {
              case 1:
                e = i.createElementNS('http://www.w3.org/2000/svg', a);
                break;
              case 2:
                e = i.createElementNS('http://www.w3.org/1998/Math/MathML', a);
                break;
              default:
                switch (a) {
                  case 'svg':
                    e = i.createElementNS('http://www.w3.org/2000/svg', a);
                    break;
                  case 'math':
                    e = i.createElementNS(
                      'http://www.w3.org/1998/Math/MathML',
                      a
                    );
                    break;
                  case 'script':
                    ((e = i.createElement('div')),
                      (e.innerHTML = '<script><\/script>'),
                      (e = e.removeChild(e.firstChild)));
                    break;
                  case 'select':
                    ((e =
                      typeof l.is == 'string'
                        ? i.createElement('select', { is: l.is })
                        : i.createElement('select')),
                      l.multiple
                        ? (e.multiple = !0)
                        : l.size && (e.size = l.size));
                    break;
                  default:
                    e =
                      typeof l.is == 'string'
                        ? i.createElement(a, { is: l.is })
                        : i.createElement(a);
                }
            }
            ((e[Z] = t), (e[P] = l));
            e: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === t) break e;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break e;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            t.stateNode = e;
            e: switch ((_t(e, a, l), a)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                e = !!l.autoFocus;
                break e;
              case 'img':
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && nn(t);
          }
        }
        return (rt(t), (t.flags &= -16777217), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && nn(t);
        else {
          if (typeof l != 'string' && t.stateNode === null) throw Error(o(166));
          if (((e = Se.current), Dr(t))) {
            if (
              ((e = t.stateNode),
              (a = t.memoizedProps),
              (l = null),
              (i = kt),
              i !== null)
            )
              switch (i.tag) {
                case 27:
                case 5:
                  l = i.memoizedProps;
              }
            ((e[Z] = t),
              (e = !!(
                e.nodeValue === a ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                e0(e.nodeValue, a)
              )),
              e || rl(t));
          } else ((e = Ku(e).createTextNode(l)), (e[Z] = t), (t.stateNode = e));
        }
        return (rt(t), null);
      case 13:
        if (
          ((l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((i = Dr(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(o(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(o(317));
              i[Z] = t;
            } else
              (zr(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (rt(t), (i = !1));
          } else
            ((i = kd()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = i),
              (i = !0));
          if (!i) return t.flags & 256 ? (tn(t), t) : (tn(t), null);
        }
        if ((tn(t), (t.flags & 128) !== 0)) return ((t.lanes = a), t);
        if (
          ((a = l !== null), (e = e !== null && e.memoizedState !== null), a)
        ) {
          ((l = t.child),
            (i = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (i = l.alternate.memoizedState.cachePool.pool));
          var s = null;
          (l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (s = l.memoizedState.cachePool.pool),
            s !== i && (l.flags |= 2048));
        }
        return (
          a !== e && a && (t.child.flags |= 8192),
          Nu(t, t.updateQueue),
          rt(t),
          null
        );
      case 4:
        return (Aa(), e === null && jc(t.stateNode.containerInfo), rt(t), null);
      case 10:
        return (Ia(t.type), rt(t), null);
      case 19:
        if ((ae(Et), (i = t.memoizedState), i === null)) return (rt(t), null);
        if (((l = (t.flags & 128) !== 0), (s = i.rendering), s === null))
          if (l) Jr(i, !1);
          else {
            if (st !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((s = Ou(e)), s !== null)) {
                  for (
                    t.flags |= 128,
                      Jr(i, !1),
                      e = s.updateQueue,
                      t.updateQueue = e,
                      Nu(t, e),
                      t.subtreeFlags = 0,
                      e = a,
                      a = t.child;
                    a !== null;

                  )
                    (Ud(a, e), (a = a.sibling));
                  return (ee(Et, (Et.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            i.tail !== null &&
              Kt() > Bu &&
              ((t.flags |= 128), (l = !0), Jr(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = Ou(s)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Nu(t, e),
                Jr(i, !0),
                i.tail === null &&
                  i.tailMode === 'hidden' &&
                  !s.alternate &&
                  !ke)
              )
                return (rt(t), null);
            } else
              2 * Kt() - i.renderingStartTime > Bu &&
                a !== 536870912 &&
                ((t.flags |= 128), (l = !0), Jr(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((s.sibling = t.child), (t.child = s))
            : ((e = i.last),
              e !== null ? (e.sibling = s) : (t.child = s),
              (i.last = s));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = Kt()),
            (t.sibling = null),
            (e = Et.current),
            ee(Et, l ? (e & 1) | 2 : e & 1),
            t)
          : (rt(t), null);
      case 22:
      case 23:
        return (
          tn(t),
          Ds(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (rt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : rt(t),
          (a = t.updateQueue),
          a !== null && Nu(t, a.retryQueue),
          (a = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== a && (t.flags |= 2048),
          e !== null && ae(ol),
          null
        );
      case 24:
        return (
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Ia(wt),
          rt(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Wy(e, t) {
    switch ((vs(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Ia(wt),
          Aa(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Sa(t), null);
      case 13:
        if (
          (tn(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          zr();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (ae(Et), null);
      case 4:
        return (Aa(), null);
      case 10:
        return (Ia(t.type), null);
      case 22:
      case 23:
        return (
          tn(t),
          Ds(),
          e !== null && ae(ol),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Ia(wt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function om(e, t) {
    switch ((vs(t), t.tag)) {
      case 3:
        (Ia(wt), Aa());
        break;
      case 26:
      case 27:
      case 5:
        Sa(t);
        break;
      case 4:
        Aa();
        break;
      case 13:
        tn(t);
        break;
      case 19:
        ae(Et);
        break;
      case 10:
        Ia(t.type);
        break;
      case 22:
      case 23:
        (tn(t), Ds(), e !== null && ae(ol));
        break;
      case 24:
        Ia(wt);
    }
  }
  function Pr(e, t) {
    try {
      var a = t.updateQueue,
        l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var i = l.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var s = a.create,
              d = a.inst;
            ((l = s()), (d.destroy = l));
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (y) {
      Pe(t, t.return, y);
    }
  }
  function En(e, t, a) {
    try {
      var l = t.updateQueue,
        i = l !== null ? l.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        l = s;
        do {
          if ((l.tag & e) === e) {
            var d = l.inst,
              y = d.destroy;
            if (y !== void 0) {
              ((d.destroy = void 0), (i = t));
              var E = a,
                N = y;
              try {
                N();
              } catch (V) {
                Pe(i, E, V);
              }
            }
          }
          l = l.next;
        } while (l !== s);
      }
    } catch (V) {
      Pe(t, t.return, V);
    }
  }
  function sm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        Pd(t, a);
      } catch (l) {
        Pe(e, e.return, l);
      }
    }
  }
  function cm(e, t, a) {
    ((a.props = cl(e.type, e.memoizedProps)), (a.state = e.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (l) {
      Pe(e, t, l);
    }
  }
  function Fr(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof a == 'function' ? (e.refCleanup = a(l)) : (a.current = l);
      }
    } catch (i) {
      Pe(e, t, i);
    }
  }
  function za(e, t) {
    var a = e.ref,
      l = e.refCleanup;
    if (a !== null)
      if (typeof l == 'function')
        try {
          l();
        } catch (i) {
          Pe(e, t, i);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof a == 'function')
        try {
          a(null);
        } catch (i) {
          Pe(e, t, i);
        }
      else a.current = null;
  }
  function fm(e) {
    var t = e.type,
      a = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          a.autoFocus && l.focus();
          break e;
        case 'img':
          a.src ? (l.src = a.src) : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (i) {
      Pe(e, e.return, i);
    }
  }
  function ic(e, t, a) {
    try {
      var l = e.stateNode;
      (bv(l, e.type, a, t), (l[P] = t));
    } catch (i) {
      Pe(e, e.return, i);
    }
  }
  function dm(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && _n(e.type)) ||
      e.tag === 4
    );
  }
  function uc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || dm(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && _n(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function oc(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === 'HTML'
                ? a.ownerDocument.body
                : a
            ).insertBefore(e, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === 'HTML'
                  ? a.ownerDocument.body
                  : a),
            t.appendChild(e),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = Qu)));
    else if (
      l !== 4 &&
      (l === 27 && _n(e.type) && ((a = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (oc(e, t, a), e = e.sibling; e !== null; )
        (oc(e, t, a), (e = e.sibling));
  }
  function Uu(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode), t ? a.insertBefore(e, t) : a.appendChild(e));
    else if (
      l !== 4 &&
      (l === 27 && _n(e.type) && (a = e.stateNode), (e = e.child), e !== null)
    )
      for (Uu(e, t, a), e = e.sibling; e !== null; )
        (Uu(e, t, a), (e = e.sibling));
  }
  function hm(e) {
    var t = e.stateNode,
      a = e.memoizedProps;
    try {
      for (var l = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      (_t(t, l, a), (t[Z] = e), (t[P] = a));
    } catch (s) {
      Pe(e, e.return, s);
    }
  }
  var ln = !1,
    ht = !1,
    sc = !1,
    mm = typeof WeakSet == 'function' ? WeakSet : Set,
    Ct = null;
  function Iy(e, t) {
    if (((e = e.containerInfo), (zc = Iu), (e = Cd(e)), us(e))) {
      if ('selectionStart' in e)
        var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var i = l.anchorOffset,
              s = l.focusNode;
            l = l.focusOffset;
            try {
              (a.nodeType, s.nodeType);
            } catch {
              a = null;
              break e;
            }
            var d = 0,
              y = -1,
              E = -1,
              N = 0,
              V = 0,
              K = e,
              B = null;
            t: for (;;) {
              for (
                var k;
                K !== a || (i !== 0 && K.nodeType !== 3) || (y = d + i),
                  K !== s || (l !== 0 && K.nodeType !== 3) || (E = d + l),
                  K.nodeType === 3 && (d += K.nodeValue.length),
                  (k = K.firstChild) !== null;

              )
                ((B = K), (K = k));
              for (;;) {
                if (K === e) break t;
                if (
                  (B === a && ++N === i && (y = d),
                  B === s && ++V === l && (E = d),
                  (k = K.nextSibling) !== null)
                )
                  break;
                ((K = B), (B = K.parentNode));
              }
              K = k;
            }
            a = y === -1 || E === -1 ? null : { start: y, end: E };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Nc = { focusedElem: e, selectionRange: a }, Iu = !1, Ct = t;
      Ct !== null;

    )
      if (
        ((t = Ct), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
      )
        ((e.return = t), (Ct = e));
      else
        for (; Ct !== null; ) {
          switch (((t = Ct), (s = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && s !== null) {
                ((e = void 0),
                  (a = t),
                  (i = s.memoizedProps),
                  (s = s.memoizedState),
                  (l = a.stateNode));
                try {
                  var Ee = cl(a.type, i, a.elementType === a.type);
                  ((e = l.getSnapshotBeforeUpdate(Ee, s)),
                    (l.__reactInternalSnapshotBeforeUpdate = e));
                } catch (xe) {
                  Pe(a, a.return, xe);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (a = e.nodeType), a === 9)
                )
                  Bc(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Bc(e);
                      break;
                    default:
                      e.textContent = '';
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (Ct = e));
            break;
          }
          Ct = t.return;
        }
  }
  function gm(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (Tn(e, a), l & 4 && Pr(5, a));
        break;
      case 1:
        if ((Tn(e, a), l & 4))
          if (((e = a.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (d) {
              Pe(a, a.return, d);
            }
          else {
            var i = cl(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (d) {
              Pe(a, a.return, d);
            }
          }
        (l & 64 && sm(a), l & 512 && Fr(a, a.return));
        break;
      case 3:
        if ((Tn(e, a), l & 64 && ((e = a.updateQueue), e !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Pd(e, t);
          } catch (d) {
            Pe(a, a.return, d);
          }
        }
        break;
      case 27:
        t === null && l & 4 && hm(a);
      case 26:
      case 5:
        (Tn(e, a), t === null && l & 4 && fm(a), l & 512 && Fr(a, a.return));
        break;
      case 12:
        Tn(e, a);
        break;
      case 13:
        (Tn(e, a),
          l & 4 && vm(e, a),
          l & 64 &&
            ((e = a.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((a = ov.bind(null, a)), Rv(e, a)))));
        break;
      case 22:
        if (((l = a.memoizedState !== null || ln), !l)) {
          ((t = (t !== null && t.memoizedState !== null) || ht), (i = ln));
          var s = ht;
          ((ln = l),
            (ht = t) && !s ? Cn(e, a, (a.subtreeFlags & 8772) !== 0) : Tn(e, a),
            (ln = i),
            (ht = s));
        }
        break;
      case 30:
        break;
      default:
        Tn(e, a);
    }
  }
  function pm(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), pm(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && me(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var tt = null,
    Vt = !1;
  function rn(e, t, a) {
    for (a = a.child; a !== null; ) (ym(e, t, a), (a = a.sibling));
  }
  function ym(e, t, a) {
    if (nt && typeof nt.onCommitFiberUnmount == 'function')
      try {
        nt.onCommitFiberUnmount(qt, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (ht || za(a, t),
          rn(e, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        ht || za(a, t);
        var l = tt,
          i = Vt;
        (_n(a.type) && ((tt = a.stateNode), (Vt = !1)),
          rn(e, t, a),
          ii(a.stateNode),
          (tt = l),
          (Vt = i));
        break;
      case 5:
        ht || za(a, t);
      case 6:
        if (
          ((l = tt),
          (i = Vt),
          (tt = null),
          rn(e, t, a),
          (tt = l),
          (Vt = i),
          tt !== null)
        )
          if (Vt)
            try {
              (tt.nodeType === 9
                ? tt.body
                : tt.nodeName === 'HTML'
                  ? tt.ownerDocument.body
                  : tt
              ).removeChild(a.stateNode);
            } catch (s) {
              Pe(a, t, s);
            }
          else
            try {
              tt.removeChild(a.stateNode);
            } catch (s) {
              Pe(a, t, s);
            }
        break;
      case 18:
        tt !== null &&
          (Vt
            ? ((e = tt),
              r0(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === 'HTML'
                    ? e.ownerDocument.body
                    : e,
                a.stateNode
              ),
              mi(e))
            : r0(tt, a.stateNode));
        break;
      case 4:
        ((l = tt),
          (i = Vt),
          (tt = a.stateNode.containerInfo),
          (Vt = !0),
          rn(e, t, a),
          (tt = l),
          (Vt = i));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (ht || En(2, a, t), ht || En(4, a, t), rn(e, t, a));
        break;
      case 1:
        (ht ||
          (za(a, t),
          (l = a.stateNode),
          typeof l.componentWillUnmount == 'function' && cm(a, t, l)),
          rn(e, t, a));
        break;
      case 21:
        rn(e, t, a);
        break;
      case 22:
        ((ht = (l = ht) || a.memoizedState !== null), rn(e, t, a), (ht = l));
        break;
      default:
        rn(e, t, a);
    }
  }
  function vm(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        mi(e);
      } catch (a) {
        Pe(t, t.return, a);
      }
  }
  function ev(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new mm()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new mm()),
          t
        );
      default:
        throw Error(o(435, e.tag));
    }
  }
  function cc(e, t) {
    var a = ev(e);
    t.forEach(function (l) {
      var i = sv.bind(null, e, l);
      a.has(l) || (a.add(l), l.then(i, i));
    });
  }
  function Ft(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var i = a[l],
          s = e,
          d = t,
          y = d;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (_n(y.type)) {
                ((tt = y.stateNode), (Vt = !1));
                break e;
              }
              break;
            case 5:
              ((tt = y.stateNode), (Vt = !1));
              break e;
            case 3:
            case 4:
              ((tt = y.stateNode.containerInfo), (Vt = !0));
              break e;
          }
          y = y.return;
        }
        if (tt === null) throw Error(o(160));
        (ym(s, d, i),
          (tt = null),
          (Vt = !1),
          (s = i.alternate),
          s !== null && (s.return = null),
          (i.return = null));
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) (bm(t, e), (t = t.sibling));
  }
  var Ca = null;
  function bm(e, t) {
    var a = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Ft(t, e),
          Wt(e),
          l & 4 && (En(3, e, e.return), Pr(3, e), En(5, e, e.return)));
        break;
      case 1:
        (Ft(t, e),
          Wt(e),
          l & 512 && (ht || a === null || za(a, a.return)),
          l & 64 &&
            ln &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((a = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = a === null ? l : a.concat(l))))));
        break;
      case 26:
        var i = Ca;
        if (
          (Ft(t, e),
          Wt(e),
          l & 512 && (ht || a === null || za(a, a.return)),
          l & 4)
        ) {
          var s = a !== null ? a.memoizedState : null;
          if (((l = e.memoizedState), a === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  ((l = e.type),
                    (a = e.memoizedProps),
                    (i = i.ownerDocument || i));
                  t: switch (l) {
                    case 'title':
                      ((s = i.getElementsByTagName('title')[0]),
                        (!s ||
                          s[ce] ||
                          s[Z] ||
                          s.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          s.hasAttribute('itemprop')) &&
                          ((s = i.createElement(l)),
                          i.head.insertBefore(
                            s,
                            i.querySelector('head > title')
                          )),
                        _t(s, l, a),
                        (s[Z] = e),
                        Ce(s),
                        (l = s));
                      break e;
                    case 'link':
                      var d = h0('link', 'href', i).get(l + (a.href || ''));
                      if (d) {
                        for (var y = 0; y < d.length; y++)
                          if (
                            ((s = d[y]),
                            s.getAttribute('href') ===
                              (a.href == null || a.href === ''
                                ? null
                                : a.href) &&
                              s.getAttribute('rel') ===
                                (a.rel == null ? null : a.rel) &&
                              s.getAttribute('title') ===
                                (a.title == null ? null : a.title) &&
                              s.getAttribute('crossorigin') ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            d.splice(y, 1);
                            break t;
                          }
                      }
                      ((s = i.createElement(l)),
                        _t(s, l, a),
                        i.head.appendChild(s));
                      break;
                    case 'meta':
                      if (
                        (d = h0('meta', 'content', i).get(
                          l + (a.content || '')
                        ))
                      ) {
                        for (y = 0; y < d.length; y++)
                          if (
                            ((s = d[y]),
                            s.getAttribute('content') ===
                              (a.content == null ? null : '' + a.content) &&
                              s.getAttribute('name') ===
                                (a.name == null ? null : a.name) &&
                              s.getAttribute('property') ===
                                (a.property == null ? null : a.property) &&
                              s.getAttribute('http-equiv') ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              s.getAttribute('charset') ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            d.splice(y, 1);
                            break t;
                          }
                      }
                      ((s = i.createElement(l)),
                        _t(s, l, a),
                        i.head.appendChild(s));
                      break;
                    default:
                      throw Error(o(468, l));
                  }
                  ((s[Z] = e), Ce(s), (l = s));
                }
                e.stateNode = l;
              } else m0(i, e.type, e.stateNode);
            else e.stateNode = d0(i, l, e.memoizedProps);
          else
            s !== l
              ? (s === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : s.count--,
                l === null
                  ? m0(i, e.type, e.stateNode)
                  : d0(i, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                ic(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (Ft(t, e),
          Wt(e),
          l & 512 && (ht || a === null || za(a, a.return)),
          a !== null && l & 4 && ic(e, e.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          (Ft(t, e),
          Wt(e),
          l & 512 && (ht || a === null || za(a, a.return)),
          e.flags & 32)
        ) {
          i = e.stateNode;
          try {
            Rl(i, '');
          } catch (k) {
            Pe(e, e.return, k);
          }
        }
        (l & 4 &&
          e.stateNode != null &&
          ((i = e.memoizedProps), ic(e, i, a !== null ? a.memoizedProps : i)),
          l & 1024 && (sc = !0));
        break;
      case 6:
        if ((Ft(t, e), Wt(e), l & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          ((l = e.memoizedProps), (a = e.stateNode));
          try {
            a.nodeValue = l;
          } catch (k) {
            Pe(e, e.return, k);
          }
        }
        break;
      case 3:
        if (
          ((Pu = null),
          (i = Ca),
          (Ca = Zu(t.containerInfo)),
          Ft(t, e),
          (Ca = i),
          Wt(e),
          l & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            mi(t.containerInfo);
          } catch (k) {
            Pe(e, e.return, k);
          }
        sc && ((sc = !1), xm(e));
        break;
      case 4:
        ((l = Ca),
          (Ca = Zu(e.stateNode.containerInfo)),
          Ft(t, e),
          Wt(e),
          (Ca = l));
        break;
      case 12:
        (Ft(t, e), Wt(e));
        break;
      case 13:
        (Ft(t, e),
          Wt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (pc = Kt()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), cc(e, l))));
        break;
      case 22:
        i = e.memoizedState !== null;
        var E = a !== null && a.memoizedState !== null,
          N = ln,
          V = ht;
        if (
          ((ln = N || i),
          (ht = V || E),
          Ft(t, e),
          (ht = V),
          (ln = N),
          Wt(e),
          l & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = i ? t._visibility & -2 : t._visibility | 1,
              i && (a === null || E || ln || ht || fl(e)),
              a = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                E = a = t;
                try {
                  if (((s = E.stateNode), i))
                    ((d = s.style),
                      typeof d.setProperty == 'function'
                        ? d.setProperty('display', 'none', 'important')
                        : (d.display = 'none'));
                  else {
                    y = E.stateNode;
                    var K = E.memoizedProps.style,
                      B =
                        K != null && K.hasOwnProperty('display')
                          ? K.display
                          : null;
                    y.style.display =
                      B == null || typeof B == 'boolean' ? '' : ('' + B).trim();
                  }
                } catch (k) {
                  Pe(E, E.return, k);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                E = t;
                try {
                  E.stateNode.nodeValue = i ? '' : E.memoizedProps;
                } catch (k) {
                  Pe(E, E.return, k);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (a === t && (a = null), (t = t.return));
            }
            (a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null &&
            ((a = l.retryQueue),
            a !== null && ((l.retryQueue = null), cc(e, a))));
        break;
      case 19:
        (Ft(t, e),
          Wt(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), cc(e, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Ft(t, e), Wt(e));
    }
  }
  function Wt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (dm(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(o(160));
        switch (a.tag) {
          case 27:
            var i = a.stateNode,
              s = uc(e);
            Uu(e, s, i);
            break;
          case 5:
            var d = a.stateNode;
            a.flags & 32 && (Rl(d, ''), (a.flags &= -33));
            var y = uc(e);
            Uu(e, y, d);
            break;
          case 3:
          case 4:
            var E = a.stateNode.containerInfo,
              N = uc(e);
            oc(e, N, E);
            break;
          default:
            throw Error(o(161));
        }
      } catch (V) {
        Pe(e, e.return, V);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function xm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (xm(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function Tn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (gm(e, t.alternate, t), (t = t.sibling));
  }
  function fl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (En(4, t, t.return), fl(t));
          break;
        case 1:
          za(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == 'function' && cm(t, t.return, a),
            fl(t));
          break;
        case 27:
          ii(t.stateNode);
        case 26:
        case 5:
          (za(t, t.return), fl(t));
          break;
        case 22:
          t.memoizedState === null && fl(t);
          break;
        case 30:
          fl(t);
          break;
        default:
          fl(t);
      }
      e = e.sibling;
    }
  }
  function Cn(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        i = e,
        s = t,
        d = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          (Cn(i, s, a), Pr(4, s));
          break;
        case 1:
          if (
            (Cn(i, s, a),
            (l = s),
            (i = l.stateNode),
            typeof i.componentDidMount == 'function')
          )
            try {
              i.componentDidMount();
            } catch (N) {
              Pe(l, l.return, N);
            }
          if (((l = s), (i = l.updateQueue), i !== null)) {
            var y = l.stateNode;
            try {
              var E = i.shared.hiddenCallbacks;
              if (E !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < E.length; i++)
                  Jd(E[i], y);
            } catch (N) {
              Pe(l, l.return, N);
            }
          }
          (a && d & 64 && sm(s), Fr(s, s.return));
          break;
        case 27:
          hm(s);
        case 26:
        case 5:
          (Cn(i, s, a), a && l === null && d & 4 && fm(s), Fr(s, s.return));
          break;
        case 12:
          Cn(i, s, a);
          break;
        case 13:
          (Cn(i, s, a), a && d & 4 && vm(i, s));
          break;
        case 22:
          (s.memoizedState === null && Cn(i, s, a), Fr(s, s.return));
          break;
        case 30:
          break;
        default:
          Cn(i, s, a);
      }
      t = t.sibling;
    }
  }
  function fc(e, t) {
    var a = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (a = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== a && (e != null && e.refCount++, a != null && Lr(a)));
  }
  function dc(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Lr(e)));
  }
  function Na(e, t, a, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Sm(e, t, a, l), (t = t.sibling));
  }
  function Sm(e, t, a, l) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Na(e, t, a, l), i & 2048 && Pr(9, t));
        break;
      case 1:
        Na(e, t, a, l);
        break;
      case 3:
        (Na(e, t, a, l),
          i & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Lr(e))));
        break;
      case 12:
        if (i & 2048) {
          (Na(e, t, a, l), (e = t.stateNode));
          try {
            var s = t.memoizedProps,
              d = s.id,
              y = s.onPostCommit;
            typeof y == 'function' &&
              y(
                d,
                t.alternate === null ? 'mount' : 'update',
                e.passiveEffectDuration,
                -0
              );
          } catch (E) {
            Pe(t, t.return, E);
          }
        } else Na(e, t, a, l);
        break;
      case 13:
        Na(e, t, a, l);
        break;
      case 23:
        break;
      case 22:
        ((s = t.stateNode),
          (d = t.alternate),
          t.memoizedState !== null
            ? s._visibility & 2
              ? Na(e, t, a, l)
              : Wr(e, t)
            : s._visibility & 2
              ? Na(e, t, a, l)
              : ((s._visibility |= 2),
                Xl(e, t, a, l, (t.subtreeFlags & 10256) !== 0)),
          i & 2048 && fc(d, t));
        break;
      case 24:
        (Na(e, t, a, l), i & 2048 && dc(t.alternate, t));
        break;
      default:
        Na(e, t, a, l);
    }
  }
  function Xl(e, t, a, l, i) {
    for (i = i && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var s = e,
        d = t,
        y = a,
        E = l,
        N = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          (Xl(s, d, y, E, i), Pr(8, d));
          break;
        case 23:
          break;
        case 22:
          var V = d.stateNode;
          (d.memoizedState !== null
            ? V._visibility & 2
              ? Xl(s, d, y, E, i)
              : Wr(s, d)
            : ((V._visibility |= 2), Xl(s, d, y, E, i)),
            i && N & 2048 && fc(d.alternate, d));
          break;
        case 24:
          (Xl(s, d, y, E, i), i && N & 2048 && dc(d.alternate, d));
          break;
        default:
          Xl(s, d, y, E, i);
      }
      t = t.sibling;
    }
  }
  function Wr(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e,
          l = t,
          i = l.flags;
        switch (l.tag) {
          case 22:
            (Wr(a, l), i & 2048 && fc(l.alternate, l));
            break;
          case 24:
            (Wr(a, l), i & 2048 && dc(l.alternate, l));
            break;
          default:
            Wr(a, l);
        }
        t = t.sibling;
      }
  }
  var Ir = 8192;
  function Ql(e) {
    if (e.subtreeFlags & Ir)
      for (e = e.child; e !== null; ) (wm(e), (e = e.sibling));
  }
  function wm(e) {
    switch (e.tag) {
      case 26:
        (Ql(e),
          e.flags & Ir &&
            e.memoizedState !== null &&
            kv(Ca, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Ql(e);
        break;
      case 3:
      case 4:
        var t = Ca;
        ((Ca = Zu(e.stateNode.containerInfo)), Ql(e), (Ca = t));
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = Ir), (Ir = 16777216), Ql(e), (Ir = t))
            : Ql(e));
        break;
      default:
        Ql(e);
    }
  }
  function Em(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function ei(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ((Ct = l), Cm(l, e));
        }
      Em(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Tm(e), (e = e.sibling));
  }
  function Tm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (ei(e), e.flags & 2048 && En(9, e, e.return));
        break;
      case 3:
        ei(e);
        break;
      case 12:
        ei(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Lu(e))
          : ei(e);
        break;
      default:
        ei(e);
    }
  }
  function Lu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ((Ct = l), Cm(l, e));
        }
      Em(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (En(8, t, t.return), Lu(t));
          break;
        case 22:
          ((a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), Lu(t)));
          break;
        default:
          Lu(t);
      }
      e = e.sibling;
    }
  }
  function Cm(e, t) {
    for (; Ct !== null; ) {
      var a = Ct;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          En(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Lr(a.memoizedState.cache);
      }
      if (((l = a.child), l !== null)) ((l.return = a), (Ct = l));
      else
        e: for (a = e; Ct !== null; ) {
          l = Ct;
          var i = l.sibling,
            s = l.return;
          if ((pm(l), l === a)) {
            Ct = null;
            break e;
          }
          if (i !== null) {
            ((i.return = s), (Ct = i));
            break e;
          }
          Ct = s;
        }
    }
  }
  var tv = {
      getCacheForType: function (e) {
        var t = zt(wt),
          a = t.data.get(e);
        return (a === void 0 && ((a = e()), t.data.set(e, a)), a);
      },
    },
    av = typeof WeakMap == 'function' ? WeakMap : Map,
    Ve = 0,
    et = null,
    Ne = null,
    Be = 0,
    $e = 0,
    It = null,
    Rn = !1,
    Kl = !1,
    hc = !1,
    un = 0,
    st = 0,
    An = 0,
    dl = 0,
    mc = 0,
    ga = 0,
    Zl = 0,
    ti = null,
    $t = null,
    gc = !1,
    pc = 0,
    Bu = 1 / 0,
    Hu = null,
    Mn = null,
    jt = 0,
    On = null,
    Jl = null,
    Pl = 0,
    yc = 0,
    vc = null,
    Rm = null,
    ai = 0,
    bc = null;
  function ea() {
    if ((Ve & 2) !== 0 && Be !== 0) return Be & -Be;
    if (L.T !== null) {
      var e = Bl;
      return e !== 0 ? e : Rc();
    }
    return C();
  }
  function Am() {
    ga === 0 && (ga = (Be & 536870912) === 0 || ke ? wl() : 536870912);
    var e = ma.current;
    return (e !== null && (e.flags |= 32), ga);
  }
  function ta(e, t, a) {
    (((e === et && ($e === 2 || $e === 9)) || e.cancelPendingCommit !== null) &&
      (Fl(e, 0), jn(e, Be, ga, !1)),
      Zn(e, a),
      ((Ve & 2) === 0 || e !== et) &&
        (e === et &&
          ((Ve & 2) === 0 && (dl |= a), st === 4 && jn(e, Be, ga, !1)),
        Ua(e)));
  }
  function Mm(e, t, a) {
    if ((Ve & 6) !== 0) throw Error(o(327));
    var l = (!a && (t & 124) === 0 && (t & e.expiredLanes) === 0) || Oa(e, t),
      i = l ? rv(e, t) : wc(e, t, !0),
      s = l;
    do {
      if (i === 0) {
        Kl && !l && jn(e, t, 0, !1);
        break;
      } else {
        if (((a = e.current.alternate), s && !nv(a))) {
          ((i = wc(e, t, !1)), (s = !1));
          continue;
        }
        if (i === 2) {
          if (((s = t), e.errorRecoveryDisabledLanes & s)) var d = 0;
          else
            ((d = e.pendingLanes & -536870913),
              (d = d !== 0 ? d : d & 536870912 ? 536870912 : 0));
          if (d !== 0) {
            t = d;
            e: {
              var y = e;
              i = ti;
              var E = y.current.memoizedState.isDehydrated;
              if ((E && (Fl(y, d).flags |= 256), (d = wc(y, d, !1)), d !== 2)) {
                if (hc && !E) {
                  ((y.errorRecoveryDisabledLanes |= s), (dl |= s), (i = 4));
                  break e;
                }
                ((s = $t),
                  ($t = i),
                  s !== null &&
                    ($t === null ? ($t = s) : $t.push.apply($t, s)));
              }
              i = d;
            }
            if (((s = !1), i !== 2)) continue;
          }
        }
        if (i === 1) {
          (Fl(e, 0), jn(e, t, 0, !0));
          break;
        }
        e: {
          switch (((l = e), (s = i), s)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              jn(l, t, ga, !Rn);
              break e;
            case 2:
              $t = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && ((i = pc + 300 - Kt()), 10 < i)) {
            if ((jn(l, t, ga, !Rn), Kn(l, 0, !0) !== 0)) break e;
            l.timeoutHandle = n0(
              Om.bind(null, l, a, $t, Hu, gc, t, ga, dl, Zl, Rn, s, 2, -0, 0),
              i
            );
            break e;
          }
          Om(l, a, $t, Hu, gc, t, ga, dl, Zl, Rn, s, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Ua(e);
  }
  function Om(e, t, a, l, i, s, d, y, E, N, V, K, B, k) {
    if (
      ((e.timeoutHandle = -1),
      (K = t.subtreeFlags),
      (K & 8192 || (K & 16785408) === 16785408) &&
        ((si = { stylesheets: null, count: 0, unsuspend: Hv }),
        wm(t),
        (K = qv()),
        K !== null))
    ) {
      ((e.cancelPendingCommit = K(
        Lm.bind(null, e, t, s, a, l, i, d, y, E, V, 1, B, k)
      )),
        jn(e, s, d, !N));
      return;
    }
    Lm(e, t, s, a, l, i, d, y, E);
  }
  function nv(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var l = 0; l < a.length; l++) {
          var i = a[l],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Jt(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        ((a.return = t), (t = a));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function jn(e, t, a, l) {
    ((t &= ~mc),
      (t &= ~dl),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes));
    for (var i = t; 0 < i; ) {
      var s = 31 - Mt(i),
        d = 1 << s;
      ((l[s] = -1), (i &= ~d));
    }
    a !== 0 && Jn(e, a, t);
  }
  function ku() {
    return (Ve & 6) === 0 ? (ni(0), !1) : !0;
  }
  function xc() {
    if (Ne !== null) {
      if ($e === 0) var e = Ne.return;
      else ((e = Ne), (Wa = il = null), Bs(e), (Vl = null), (Kr = 0), (e = Ne));
      for (; e !== null; ) (om(e.alternate, e), (e = e.return));
      Ne = null;
    }
  }
  function Fl(e, t) {
    var a = e.timeoutHandle;
    (a !== -1 && ((e.timeoutHandle = -1), Sv(a)),
      (a = e.cancelPendingCommit),
      a !== null && ((e.cancelPendingCommit = null), a()),
      xc(),
      (et = e),
      (Ne = a = Ja(e.current, null)),
      (Be = t),
      ($e = 0),
      (It = null),
      (Rn = !1),
      (Kl = Oa(e, t)),
      (hc = !1),
      (Zl = ga = mc = dl = An = st = 0),
      ($t = ti = null),
      (gc = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var i = 31 - Mt(l),
          s = 1 << i;
        ((t |= e[i]), (l &= ~s));
      }
    return ((un = t), uu(), a);
  }
  function jm(e, t) {
    ((Oe = null),
      (L.H = Ru),
      t === Hr || t === pu
        ? ((t = Kd()), ($e = 3))
        : t === $d
          ? ((t = Kd()), ($e = 4))
          : ($e =
              t === Zh
                ? 8
                : t !== null &&
                    typeof t == 'object' &&
                    typeof t.then == 'function'
                  ? 6
                  : 1),
      (It = t),
      Ne === null && ((st = 1), _u(e, ca(t, e.current))));
  }
  function _m() {
    var e = L.H;
    return ((L.H = Ru), e === null ? Ru : e);
  }
  function Dm() {
    var e = L.A;
    return ((L.A = tv), e);
  }
  function Sc() {
    ((st = 4),
      Rn || ((Be & 4194048) !== Be && ma.current !== null) || (Kl = !0),
      ((An & 134217727) === 0 && (dl & 134217727) === 0) ||
        et === null ||
        jn(et, Be, ga, !1));
  }
  function wc(e, t, a) {
    var l = Ve;
    Ve |= 2;
    var i = _m(),
      s = Dm();
    ((et !== e || Be !== t) && ((Hu = null), Fl(e, t)), (t = !1));
    var d = st;
    e: do
      try {
        if ($e !== 0 && Ne !== null) {
          var y = Ne,
            E = It;
          switch ($e) {
            case 8:
              (xc(), (d = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              ma.current === null && (t = !0);
              var N = $e;
              if ((($e = 0), (It = null), Wl(e, y, E, N), a && Kl)) {
                d = 0;
                break e;
              }
              break;
            default:
              ((N = $e), ($e = 0), (It = null), Wl(e, y, E, N));
          }
        }
        (lv(), (d = st));
        break;
      } catch (V) {
        jm(e, V);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Wa = il = null),
      (Ve = l),
      (L.H = i),
      (L.A = s),
      Ne === null && ((et = null), (Be = 0), uu()),
      d
    );
  }
  function lv() {
    for (; Ne !== null; ) zm(Ne);
  }
  function rv(e, t) {
    var a = Ve;
    Ve |= 2;
    var l = _m(),
      i = Dm();
    et !== e || Be !== t
      ? ((Hu = null), (Bu = Kt() + 500), Fl(e, t))
      : (Kl = Oa(e, t));
    e: do
      try {
        if ($e !== 0 && Ne !== null) {
          t = Ne;
          var s = It;
          t: switch ($e) {
            case 1:
              (($e = 0), (It = null), Wl(e, t, s, 1));
              break;
            case 2:
            case 9:
              if (Xd(s)) {
                (($e = 0), (It = null), Nm(t));
                break;
              }
              ((t = function () {
                (($e !== 2 && $e !== 9) || et !== e || ($e = 7), Ua(e));
              }),
                s.then(t, t));
              break e;
            case 3:
              $e = 7;
              break e;
            case 4:
              $e = 5;
              break e;
            case 7:
              Xd(s)
                ? (($e = 0), (It = null), Nm(t))
                : (($e = 0), (It = null), Wl(e, t, s, 7));
              break;
            case 5:
              var d = null;
              switch (Ne.tag) {
                case 26:
                  d = Ne.memoizedState;
                case 5:
                case 27:
                  var y = Ne;
                  if (!d || g0(d)) {
                    (($e = 0), (It = null));
                    var E = y.sibling;
                    if (E !== null) Ne = E;
                    else {
                      var N = y.return;
                      N !== null ? ((Ne = N), qu(N)) : (Ne = null);
                    }
                    break t;
                  }
              }
              (($e = 0), (It = null), Wl(e, t, s, 5));
              break;
            case 6:
              (($e = 0), (It = null), Wl(e, t, s, 6));
              break;
            case 8:
              (xc(), (st = 6));
              break e;
            default:
              throw Error(o(462));
          }
        }
        iv();
        break;
      } catch (V) {
        jm(e, V);
      }
    while (!0);
    return (
      (Wa = il = null),
      (L.H = l),
      (L.A = i),
      (Ve = a),
      Ne !== null ? 0 : ((et = null), (Be = 0), uu(), st)
    );
  }
  function iv() {
    for (; Ne !== null && !Go(); ) zm(Ne);
  }
  function zm(e) {
    var t = im(e.alternate, e, un);
    ((e.memoizedProps = e.pendingProps), t === null ? qu(e) : (Ne = t));
  }
  function Nm(e) {
    var t = e,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = em(a, t, t.pendingProps, t.type, void 0, Be);
        break;
      case 11:
        t = em(a, t, t.pendingProps, t.type.render, t.ref, Be);
        break;
      case 5:
        Bs(t);
      default:
        (om(a, t), (t = Ne = Ud(t, un)), (t = im(a, t, un)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? qu(e) : (Ne = t));
  }
  function Wl(e, t, a, l) {
    ((Wa = il = null), Bs(t), (Vl = null), (Kr = 0));
    var i = t.return;
    try {
      if (Jy(e, i, t, a, Be)) {
        ((st = 1), _u(e, ca(a, e.current)), (Ne = null));
        return;
      }
    } catch (s) {
      if (i !== null) throw ((Ne = i), s);
      ((st = 1), _u(e, ca(a, e.current)), (Ne = null));
      return;
    }
    t.flags & 32768
      ? (ke || l === 1
          ? (e = !0)
          : Kl || (Be & 536870912) !== 0
            ? (e = !1)
            : ((Rn = e = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = ma.current),
                l !== null && l.tag === 13 && (l.flags |= 16384))),
        Um(t, e))
      : qu(t);
  }
  function qu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Um(t, Rn);
        return;
      }
      e = t.return;
      var a = Fy(t.alternate, t, un);
      if (a !== null) {
        Ne = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ne = t;
        return;
      }
      Ne = t = e;
    } while (t !== null);
    st === 0 && (st = 5);
  }
  function Um(e, t) {
    do {
      var a = Wy(e.alternate, e);
      if (a !== null) {
        ((a.flags &= 32767), (Ne = a));
        return;
      }
      if (
        ((a = e.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Ne = e;
        return;
      }
      Ne = e = a;
    } while (e !== null);
    ((st = 6), (Ne = null));
  }
  function Lm(e, t, a, l, i, s, d, y, E) {
    e.cancelPendingCommit = null;
    do Yu();
    while (jt !== 0);
    if ((Ve & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (
        ((s = t.lanes | t.childLanes),
        (s |= ds),
        Ji(e, a, s, d, y, E),
        e === et && ((Ne = et = null), (Be = 0)),
        (Jl = t),
        (On = e),
        (Pl = a),
        (yc = s),
        (vc = i),
        (Rm = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            cv(Sl, function () {
              return (Ym(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = L.T), (L.T = null), (i = W.p), (W.p = 2), (d = Ve), (Ve |= 4));
        try {
          Iy(e, t, a);
        } finally {
          ((Ve = d), (W.p = i), (L.T = l));
        }
      }
      ((jt = 1), Bm(), Hm(), km());
    }
  }
  function Bm() {
    if (jt === 1) {
      jt = 0;
      var e = On,
        t = Jl,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = L.T), (L.T = null));
        var l = W.p;
        W.p = 2;
        var i = Ve;
        Ve |= 4;
        try {
          bm(t, e);
          var s = Nc,
            d = Cd(e.containerInfo),
            y = s.focusedElem,
            E = s.selectionRange;
          if (
            d !== y &&
            y &&
            y.ownerDocument &&
            Td(y.ownerDocument.documentElement, y)
          ) {
            if (E !== null && us(y)) {
              var N = E.start,
                V = E.end;
              if ((V === void 0 && (V = N), 'selectionStart' in y))
                ((y.selectionStart = N),
                  (y.selectionEnd = Math.min(V, y.value.length)));
              else {
                var K = y.ownerDocument || document,
                  B = (K && K.defaultView) || window;
                if (B.getSelection) {
                  var k = B.getSelection(),
                    Ee = y.textContent.length,
                    xe = Math.min(E.start, Ee),
                    Ze = E.end === void 0 ? xe : Math.min(E.end, Ee);
                  !k.extend && xe > Ze && ((d = Ze), (Ze = xe), (xe = d));
                  var O = Ed(y, xe),
                    A = Ed(y, Ze);
                  if (
                    O &&
                    A &&
                    (k.rangeCount !== 1 ||
                      k.anchorNode !== O.node ||
                      k.anchorOffset !== O.offset ||
                      k.focusNode !== A.node ||
                      k.focusOffset !== A.offset)
                  ) {
                    var z = K.createRange();
                    (z.setStart(O.node, O.offset),
                      k.removeAllRanges(),
                      xe > Ze
                        ? (k.addRange(z), k.extend(A.node, A.offset))
                        : (z.setEnd(A.node, A.offset), k.addRange(z)));
                  }
                }
              }
            }
            for (K = [], k = y; (k = k.parentNode); )
              k.nodeType === 1 &&
                K.push({ element: k, left: k.scrollLeft, top: k.scrollTop });
            for (
              typeof y.focus == 'function' && y.focus(), y = 0;
              y < K.length;
              y++
            ) {
              var $ = K[y];
              (($.element.scrollLeft = $.left), ($.element.scrollTop = $.top));
            }
          }
          ((Iu = !!zc), (Nc = zc = null));
        } finally {
          ((Ve = i), (W.p = l), (L.T = a));
        }
      }
      ((e.current = t), (jt = 2));
    }
  }
  function Hm() {
    if (jt === 2) {
      jt = 0;
      var e = On,
        t = Jl,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = L.T), (L.T = null));
        var l = W.p;
        W.p = 2;
        var i = Ve;
        Ve |= 4;
        try {
          gm(e, t.alternate, t);
        } finally {
          ((Ve = i), (W.p = l), (L.T = a));
        }
      }
      jt = 3;
    }
  }
  function km() {
    if (jt === 4 || jt === 3) {
      ((jt = 0), Vo());
      var e = On,
        t = Jl,
        a = Pl,
        l = Rm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (jt = 5)
        : ((jt = 0), (Jl = On = null), qm(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (
        (i === 0 && (Mn = null),
        wr(a),
        (t = t.stateNode),
        nt && typeof nt.onCommitFiberRoot == 'function')
      )
        try {
          nt.onCommitFiberRoot(qt, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((t = L.T), (i = W.p), (W.p = 2), (L.T = null));
        try {
          for (var s = e.onRecoverableError, d = 0; d < l.length; d++) {
            var y = l[d];
            s(y.value, { componentStack: y.stack });
          }
        } finally {
          ((L.T = t), (W.p = i));
        }
      }
      ((Pl & 3) !== 0 && Yu(),
        Ua(e),
        (i = e.pendingLanes),
        (a & 4194090) !== 0 && (i & 42) !== 0
          ? e === bc
            ? ai++
            : ((ai = 0), (bc = e))
          : (ai = 0),
        ni(0));
    }
  }
  function qm(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Lr(t)));
  }
  function Yu(e) {
    return (Bm(), Hm(), km(), Ym());
  }
  function Ym() {
    if (jt !== 5) return !1;
    var e = On,
      t = yc;
    yc = 0;
    var a = wr(Pl),
      l = L.T,
      i = W.p;
    try {
      ((W.p = 32 > a ? 32 : a), (L.T = null), (a = vc), (vc = null));
      var s = On,
        d = Pl;
      if (((jt = 0), (Jl = On = null), (Pl = 0), (Ve & 6) !== 0))
        throw Error(o(331));
      var y = Ve;
      if (
        ((Ve |= 4),
        Tm(s.current),
        Sm(s, s.current, d, a),
        (Ve = y),
        ni(0, !1),
        nt && typeof nt.onPostCommitFiberRoot == 'function')
      )
        try {
          nt.onPostCommitFiberRoot(qt, s);
        } catch {}
      return !0;
    } finally {
      ((W.p = i), (L.T = l), qm(e, t));
    }
  }
  function Gm(e, t, a) {
    ((t = ca(a, t)),
      (t = Fs(e.stateNode, t, 2)),
      (e = bn(e, t, 2)),
      e !== null && (Zn(e, 2), Ua(e)));
  }
  function Pe(e, t, a) {
    if (e.tag === 3) Gm(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Gm(t, e, a);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof l.componentDidCatch == 'function' &&
              (Mn === null || !Mn.has(l)))
          ) {
            ((e = ca(a, e)),
              (a = Qh(2)),
              (l = bn(t, a, 2)),
              l !== null && (Kh(a, l, t, e), Zn(l, 2), Ua(l)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ec(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new av();
      var i = new Set();
      l.set(t, i);
    } else ((i = l.get(t)), i === void 0 && ((i = new Set()), l.set(t, i)));
    i.has(a) ||
      ((hc = !0), i.add(a), (e = uv.bind(null, e, t, a)), t.then(e, e));
  }
  function uv(e, t, a) {
    var l = e.pingCache;
    (l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & a),
      (e.warmLanes &= ~a),
      et === e &&
        (Be & a) === a &&
        (st === 4 || (st === 3 && (Be & 62914560) === Be && 300 > Kt() - pc)
          ? (Ve & 2) === 0 && Fl(e, 0)
          : (mc |= a),
        Zl === Be && (Zl = 0)),
      Ua(e));
  }
  function Vm(e, t) {
    (t === 0 && (t = Zi()), (e = zl(e, t)), e !== null && (Zn(e, t), Ua(e)));
  }
  function ov(e) {
    var t = e.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), Vm(e, a));
  }
  function sv(e, t) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          i = e.memoizedState;
        i !== null && (a = i.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    (l !== null && l.delete(t), Vm(e, a));
  }
  function cv(e, t) {
    return br(e, t);
  }
  var Gu = null,
    Il = null,
    Tc = !1,
    Vu = !1,
    Cc = !1,
    hl = 0;
  function Ua(e) {
    (e !== Il &&
      e.next === null &&
      (Il === null ? (Gu = Il = e) : (Il = Il.next = e)),
      (Vu = !0),
      Tc || ((Tc = !0), dv()));
  }
  function ni(e, t) {
    if (!Cc && Vu) {
      Cc = !0;
      do
        for (var a = !1, l = Gu; l !== null; ) {
          if (e !== 0) {
            var i = l.pendingLanes;
            if (i === 0) var s = 0;
            else {
              var d = l.suspendedLanes,
                y = l.pingedLanes;
              ((s = (1 << (31 - Mt(42 | e) + 1)) - 1),
                (s &= i & ~(d & ~y)),
                (s = s & 201326741 ? (s & 201326741) | 1 : s ? s | 2 : 0));
            }
            s !== 0 && ((a = !0), Km(l, s));
          } else
            ((s = Be),
              (s = Kn(
                l,
                l === et ? s : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1
              )),
              (s & 3) === 0 || Oa(l, s) || ((a = !0), Km(l, s)));
          l = l.next;
        }
      while (a);
      Cc = !1;
    }
  }
  function fv() {
    $m();
  }
  function $m() {
    Vu = Tc = !1;
    var e = 0;
    hl !== 0 && (xv() && (e = hl), (hl = 0));
    for (var t = Kt(), a = null, l = Gu; l !== null; ) {
      var i = l.next,
        s = Xm(l, t);
      (s === 0
        ? ((l.next = null),
          a === null ? (Gu = i) : (a.next = i),
          i === null && (Il = a))
        : ((a = l), (e !== 0 || (s & 3) !== 0) && (Vu = !0)),
        (l = i));
    }
    ni(e);
  }
  function Xm(e, t) {
    for (
      var a = e.suspendedLanes,
        l = e.pingedLanes,
        i = e.expirationTimes,
        s = e.pendingLanes & -62914561;
      0 < s;

    ) {
      var d = 31 - Mt(s),
        y = 1 << d,
        E = i[d];
      (E === -1
        ? ((y & a) === 0 || (y & l) !== 0) && (i[d] = Ki(y, t))
        : E <= t && (e.expiredLanes |= y),
        (s &= ~y));
    }
    if (
      ((t = et),
      (a = Be),
      (a = Kn(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (l = e.callbackNode),
      a === 0 ||
        (e === t && ($e === 2 || $e === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && wa(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((a & 3) === 0 || Oa(e, a)) {
      if (((t = a & -a), t === e.callbackPriority)) return t;
      switch ((l !== null && wa(l), wr(a))) {
        case 2:
        case 8:
          a = $i;
          break;
        case 32:
          a = Sl;
          break;
        case 268435456:
          a = dn;
          break;
        default:
          a = Sl;
      }
      return (
        (l = Qm.bind(null, e)),
        (a = br(a, l)),
        (e.callbackPriority = t),
        (e.callbackNode = a),
        t
      );
    }
    return (
      l !== null && l !== null && wa(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Qm(e, t) {
    if (jt !== 0 && jt !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var a = e.callbackNode;
    if (Yu() && e.callbackNode !== a) return null;
    var l = Be;
    return (
      (l = Kn(
        e,
        e === et ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      l === 0
        ? null
        : (Mm(e, l, t),
          Xm(e, Kt()),
          e.callbackNode != null && e.callbackNode === a
            ? Qm.bind(null, e)
            : null)
    );
  }
  function Km(e, t) {
    if (Yu()) return null;
    Mm(e, t, !0);
  }
  function dv() {
    wv(function () {
      (Ve & 6) !== 0 ? br(Vi, fv) : $m();
    });
  }
  function Rc() {
    return (hl === 0 && (hl = wl()), hl);
  }
  function Zm(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : eu('' + e);
  }
  function Jm(e, t) {
    var a = t.ownerDocument.createElement('input');
    return (
      (a.name = t.name),
      (a.value = t.value),
      e.id && a.setAttribute('form', e.id),
      t.parentNode.insertBefore(a, t),
      (e = new FormData(e)),
      a.parentNode.removeChild(a),
      e
    );
  }
  function hv(e, t, a, l, i) {
    if (t === 'submit' && a && a.stateNode === i) {
      var s = Zm((i[P] || null).action),
        d = l.submitter;
      d &&
        ((t = (t = d[P] || null)
          ? Zm(t.formAction)
          : d.getAttribute('formAction')),
        t !== null && ((s = t), (d = null)));
      var y = new lu('action', 'action', null, l, i);
      e.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (hl !== 0) {
                  var E = d ? Jm(i, d) : new FormData(i);
                  Qs(
                    a,
                    { pending: !0, data: E, method: i.method, action: s },
                    null,
                    E
                  );
                }
              } else
                typeof s == 'function' &&
                  (y.preventDefault(),
                  (E = d ? Jm(i, d) : new FormData(i)),
                  Qs(
                    a,
                    { pending: !0, data: E, method: i.method, action: s },
                    s,
                    E
                  ));
            },
            currentTarget: i,
          },
        ],
      });
    }
  }
  for (var Ac = 0; Ac < fs.length; Ac++) {
    var Mc = fs[Ac],
      mv = Mc.toLowerCase(),
      gv = Mc[0].toUpperCase() + Mc.slice(1);
    Ta(mv, 'on' + gv);
  }
  (Ta(Md, 'onAnimationEnd'),
    Ta(Od, 'onAnimationIteration'),
    Ta(jd, 'onAnimationStart'),
    Ta('dblclick', 'onDoubleClick'),
    Ta('focusin', 'onFocus'),
    Ta('focusout', 'onBlur'),
    Ta(Dy, 'onTransitionRun'),
    Ta(zy, 'onTransitionStart'),
    Ta(Ny, 'onTransitionCancel'),
    Ta(_d, 'onTransitionEnd'),
    Ht('onMouseEnter', ['mouseout', 'mouseover']),
    Ht('onMouseLeave', ['mouseout', 'mouseover']),
    Ht('onPointerEnter', ['pointerout', 'pointerover']),
    Ht('onPointerLeave', ['pointerout', 'pointerover']),
    Zt(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' '
      )
    ),
    Zt(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    Zt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Zt(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' ')
    ),
    Zt(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    Zt(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var li =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    pv = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'
        .split(' ')
        .concat(li)
    );
  function Pm(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a],
        i = l.event;
      l = l.listeners;
      e: {
        var s = void 0;
        if (t)
          for (var d = l.length - 1; 0 <= d; d--) {
            var y = l[d],
              E = y.instance,
              N = y.currentTarget;
            if (((y = y.listener), E !== s && i.isPropagationStopped()))
              break e;
            ((s = y), (i.currentTarget = N));
            try {
              s(i);
            } catch (V) {
              ju(V);
            }
            ((i.currentTarget = null), (s = E));
          }
        else
          for (d = 0; d < l.length; d++) {
            if (
              ((y = l[d]),
              (E = y.instance),
              (N = y.currentTarget),
              (y = y.listener),
              E !== s && i.isPropagationStopped())
            )
              break e;
            ((s = y), (i.currentTarget = N));
            try {
              s(i);
            } catch (V) {
              ju(V);
            }
            ((i.currentTarget = null), (s = E));
          }
      }
    }
  }
  function Ue(e, t) {
    var a = t[he];
    a === void 0 && (a = t[he] = new Set());
    var l = e + '__bubble';
    a.has(l) || (Fm(t, e, 2, !1), a.add(l));
  }
  function Oc(e, t, a) {
    var l = 0;
    (t && (l |= 4), Fm(a, e, l, t));
  }
  var $u = '_reactListening' + Math.random().toString(36).slice(2);
  function jc(e) {
    if (!e[$u]) {
      ((e[$u] = !0),
        Xe.forEach(function (a) {
          a !== 'selectionchange' && (pv.has(a) || Oc(a, !1, e), Oc(a, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[$u] || ((t[$u] = !0), Oc('selectionchange', !1, t));
    }
  }
  function Fm(e, t, a, l) {
    switch (S0(t)) {
      case 2:
        var i = Vv;
        break;
      case 8:
        i = $v;
        break;
      default:
        i = $c;
    }
    ((a = i.bind(null, t, a, e)),
      (i = void 0),
      !Wo ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (i = !0),
      l
        ? i !== void 0
          ? e.addEventListener(t, a, { capture: !0, passive: i })
          : e.addEventListener(t, a, !0)
        : i !== void 0
          ? e.addEventListener(t, a, { passive: i })
          : e.addEventListener(t, a, !1));
  }
  function _c(e, t, a, l, i) {
    var s = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var d = l.tag;
        if (d === 3 || d === 4) {
          var y = l.stateNode.containerInfo;
          if (y === i) break;
          if (d === 4)
            for (d = l.return; d !== null; ) {
              var E = d.tag;
              if ((E === 3 || E === 4) && d.stateNode.containerInfo === i)
                return;
              d = d.return;
            }
          for (; y !== null; ) {
            if (((d = Ae(y)), d === null)) return;
            if (((E = d.tag), E === 5 || E === 6 || E === 26 || E === 27)) {
              l = s = d;
              continue e;
            }
            y = y.parentNode;
          }
        }
        l = l.return;
      }
    ld(function () {
      var N = s,
        V = Po(a),
        K = [];
      e: {
        var B = Dd.get(e);
        if (B !== void 0) {
          var k = lu,
            Ee = e;
          switch (e) {
            case 'keypress':
              if (au(a) === 0) break e;
            case 'keydown':
            case 'keyup':
              k = cy;
              break;
            case 'focusin':
              ((Ee = 'focus'), (k = as));
              break;
            case 'focusout':
              ((Ee = 'blur'), (k = as));
              break;
            case 'beforeblur':
            case 'afterblur':
              k = as;
              break;
            case 'click':
              if (a.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              k = ud;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              k = Wp;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              k = hy;
              break;
            case Md:
            case Od:
            case jd:
              k = ty;
              break;
            case _d:
              k = gy;
              break;
            case 'scroll':
            case 'scrollend':
              k = Pp;
              break;
            case 'wheel':
              k = yy;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              k = ny;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              k = sd;
              break;
            case 'toggle':
            case 'beforetoggle':
              k = by;
          }
          var xe = (t & 4) !== 0,
            Ze = !xe && (e === 'scroll' || e === 'scrollend'),
            O = xe ? (B !== null ? B + 'Capture' : null) : B;
          xe = [];
          for (var A = N, z; A !== null; ) {
            var $ = A;
            if (
              ((z = $.stateNode),
              ($ = $.tag),
              ($ !== 5 && $ !== 26 && $ !== 27) ||
                z === null ||
                O === null ||
                (($ = Er(A, O)), $ != null && xe.push(ri(A, $, z))),
              Ze)
            )
              break;
            A = A.return;
          }
          0 < xe.length &&
            ((B = new k(B, Ee, null, a, V)),
            K.push({ event: B, listeners: xe }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((B = e === 'mouseover' || e === 'pointerover'),
            (k = e === 'mouseout' || e === 'pointerout'),
            B &&
              a !== Jo &&
              (Ee = a.relatedTarget || a.fromElement) &&
              (Ae(Ee) || Ee[ue]))
          )
            break e;
          if (
            (k || B) &&
            ((B =
              V.window === V
                ? V
                : (B = V.ownerDocument)
                  ? B.defaultView || B.parentWindow
                  : window),
            k
              ? ((Ee = a.relatedTarget || a.toElement),
                (k = N),
                (Ee = Ee ? Ae(Ee) : null),
                Ee !== null &&
                  ((Ze = f(Ee)),
                  (xe = Ee.tag),
                  Ee !== Ze || (xe !== 5 && xe !== 27 && xe !== 6)) &&
                  (Ee = null))
              : ((k = null), (Ee = N)),
            k !== Ee)
          ) {
            if (
              ((xe = ud),
              ($ = 'onMouseLeave'),
              (O = 'onMouseEnter'),
              (A = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((xe = sd),
                ($ = 'onPointerLeave'),
                (O = 'onPointerEnter'),
                (A = 'pointer')),
              (Ze = k == null ? B : it(k)),
              (z = Ee == null ? B : it(Ee)),
              (B = new xe($, A + 'leave', k, a, V)),
              (B.target = Ze),
              (B.relatedTarget = z),
              ($ = null),
              Ae(V) === N &&
                ((xe = new xe(O, A + 'enter', Ee, a, V)),
                (xe.target = z),
                (xe.relatedTarget = Ze),
                ($ = xe)),
              (Ze = $),
              k && Ee)
            )
              t: {
                for (xe = k, O = Ee, A = 0, z = xe; z; z = er(z)) A++;
                for (z = 0, $ = O; $; $ = er($)) z++;
                for (; 0 < A - z; ) ((xe = er(xe)), A--);
                for (; 0 < z - A; ) ((O = er(O)), z--);
                for (; A--; ) {
                  if (xe === O || (O !== null && xe === O.alternate)) break t;
                  ((xe = er(xe)), (O = er(O)));
                }
                xe = null;
              }
            else xe = null;
            (k !== null && Wm(K, B, k, xe, !1),
              Ee !== null && Ze !== null && Wm(K, Ze, Ee, xe, !0));
          }
        }
        e: {
          if (
            ((B = N ? it(N) : window),
            (k = B.nodeName && B.nodeName.toLowerCase()),
            k === 'select' || (k === 'input' && B.type === 'file'))
          )
            var ie = yd;
          else if (gd(B))
            if (vd) ie = Oy;
            else {
              ie = Ay;
              var De = Ry;
            }
          else
            ((k = B.nodeName),
              !k ||
              k.toLowerCase() !== 'input' ||
              (B.type !== 'checkbox' && B.type !== 'radio')
                ? N && Zo(N.elementType) && (ie = yd)
                : (ie = My));
          if (ie && (ie = ie(e, N))) {
            pd(K, ie, a, V);
            break e;
          }
          (De && De(e, B, N),
            e === 'focusout' &&
              N &&
              B.type === 'number' &&
              N.memoizedProps.value != null &&
              Ko(B, 'number', B.value));
        }
        switch (((De = N ? it(N) : window), e)) {
          case 'focusin':
            (gd(De) || De.contentEditable === 'true') &&
              ((jl = De), (os = N), (_r = null));
            break;
          case 'focusout':
            _r = os = jl = null;
            break;
          case 'mousedown':
            ss = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((ss = !1), Rd(K, a, V));
            break;
          case 'selectionchange':
            if (_y) break;
          case 'keydown':
          case 'keyup':
            Rd(K, a, V);
        }
        var ge;
        if (ls)
          e: {
            switch (e) {
              case 'compositionstart':
                var we = 'onCompositionStart';
                break e;
              case 'compositionend':
                we = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                we = 'onCompositionUpdate';
                break e;
            }
            we = void 0;
          }
        else
          Ol
            ? hd(e, a) && (we = 'onCompositionEnd')
            : e === 'keydown' &&
              a.keyCode === 229 &&
              (we = 'onCompositionStart');
        (we &&
          (cd &&
            a.locale !== 'ko' &&
            (Ol || we !== 'onCompositionStart'
              ? we === 'onCompositionEnd' && Ol && (ge = rd())
              : ((gn = V),
                (Io = 'value' in gn ? gn.value : gn.textContent),
                (Ol = !0))),
          (De = Xu(N, we)),
          0 < De.length &&
            ((we = new od(we, e, null, a, V)),
            K.push({ event: we, listeners: De }),
            ge
              ? (we.data = ge)
              : ((ge = md(a)), ge !== null && (we.data = ge)))),
          (ge = Sy ? wy(e, a) : Ey(e, a)) &&
            ((we = Xu(N, 'onBeforeInput')),
            0 < we.length &&
              ((De = new od('onBeforeInput', 'beforeinput', null, a, V)),
              K.push({ event: De, listeners: we }),
              (De.data = ge))),
          hv(K, e, N, a, V));
      }
      Pm(K, t);
    });
  }
  function ri(e, t, a) {
    return { instance: e, listener: t, currentTarget: a };
  }
  function Xu(e, t) {
    for (var a = t + 'Capture', l = []; e !== null; ) {
      var i = e,
        s = i.stateNode;
      if (
        ((i = i.tag),
        (i !== 5 && i !== 26 && i !== 27) ||
          s === null ||
          ((i = Er(e, a)),
          i != null && l.unshift(ri(e, i, s)),
          (i = Er(e, t)),
          i != null && l.push(ri(e, i, s))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function er(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Wm(e, t, a, l, i) {
    for (var s = t._reactName, d = []; a !== null && a !== l; ) {
      var y = a,
        E = y.alternate,
        N = y.stateNode;
      if (((y = y.tag), E !== null && E === l)) break;
      ((y !== 5 && y !== 26 && y !== 27) ||
        N === null ||
        ((E = N),
        i
          ? ((N = Er(a, s)), N != null && d.unshift(ri(a, N, E)))
          : i || ((N = Er(a, s)), N != null && d.push(ri(a, N, E)))),
        (a = a.return));
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var yv = /\r\n?/g,
    vv = /\u0000|\uFFFD/g;
  function Im(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        yv,
        `
`
      )
      .replace(vv, '');
  }
  function e0(e, t) {
    return ((t = Im(t)), Im(e) === t);
  }
  function Qu() {}
  function Ke(e, t, a, l, i, s) {
    switch (a) {
      case 'children':
        typeof l == 'string'
          ? t === 'body' || (t === 'textarea' && l === '') || Rl(e, l)
          : (typeof l == 'number' || typeof l == 'bigint') &&
            t !== 'body' &&
            Rl(e, '' + l);
        break;
      case 'className':
        Ka(e, 'class', l);
        break;
      case 'tabIndex':
        Ka(e, 'tabindex', l);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Ka(e, a, l);
        break;
      case 'style':
        ad(e, l, s);
        break;
      case 'data':
        if (t !== 'object') {
          Ka(e, 'data', l);
          break;
        }
      case 'src':
      case 'href':
        if (l === '' && (t !== 'a' || a !== 'href')) {
          e.removeAttribute(a);
          break;
        }
        if (
          l == null ||
          typeof l == 'function' ||
          typeof l == 'symbol' ||
          typeof l == 'boolean'
        ) {
          e.removeAttribute(a);
          break;
        }
        ((l = eu('' + l)), e.setAttribute(a, l));
        break;
      case 'action':
      case 'formAction':
        if (typeof l == 'function') {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof s == 'function' &&
            (a === 'formAction'
              ? (t !== 'input' && Ke(e, t, 'name', i.name, i, null),
                Ke(e, t, 'formEncType', i.formEncType, i, null),
                Ke(e, t, 'formMethod', i.formMethod, i, null),
                Ke(e, t, 'formTarget', i.formTarget, i, null))
              : (Ke(e, t, 'encType', i.encType, i, null),
                Ke(e, t, 'method', i.method, i, null),
                Ke(e, t, 'target', i.target, i, null)));
        if (l == null || typeof l == 'symbol' || typeof l == 'boolean') {
          e.removeAttribute(a);
          break;
        }
        ((l = eu('' + l)), e.setAttribute(a, l));
        break;
      case 'onClick':
        l != null && (e.onclick = Qu);
        break;
      case 'onScroll':
        l != null && Ue('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && Ue('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l)) throw Error(o(61));
          if (((a = l.__html), a != null)) {
            if (i.children != null) throw Error(o(60));
            e.innerHTML = a;
          }
        }
        break;
      case 'multiple':
        e.multiple = l && typeof l != 'function' && typeof l != 'symbol';
        break;
      case 'muted':
        e.muted = l && typeof l != 'function' && typeof l != 'symbol';
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break;
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (
          l == null ||
          typeof l == 'function' ||
          typeof l == 'boolean' ||
          typeof l == 'symbol'
        ) {
          e.removeAttribute('xlink:href');
          break;
        }
        ((a = eu('' + l)),
          e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', a));
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        l != null && typeof l != 'function' && typeof l != 'symbol'
          ? e.setAttribute(a, '' + l)
          : e.removeAttribute(a);
        break;
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        l && typeof l != 'function' && typeof l != 'symbol'
          ? e.setAttribute(a, '')
          : e.removeAttribute(a);
        break;
      case 'capture':
      case 'download':
        l === !0
          ? e.setAttribute(a, '')
          : l !== !1 &&
              l != null &&
              typeof l != 'function' &&
              typeof l != 'symbol'
            ? e.setAttribute(a, l)
            : e.removeAttribute(a);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        l != null &&
        typeof l != 'function' &&
        typeof l != 'symbol' &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(a, l)
          : e.removeAttribute(a);
        break;
      case 'rowSpan':
      case 'start':
        l == null || typeof l == 'function' || typeof l == 'symbol' || isNaN(l)
          ? e.removeAttribute(a)
          : e.setAttribute(a, l);
        break;
      case 'popover':
        (Ue('beforetoggle', e), Ue('toggle', e), Qa(e, 'popover', l));
        break;
      case 'xlinkActuate':
        _e(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', l);
        break;
      case 'xlinkArcrole':
        _e(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', l);
        break;
      case 'xlinkRole':
        _e(e, 'http://www.w3.org/1999/xlink', 'xlink:role', l);
        break;
      case 'xlinkShow':
        _e(e, 'http://www.w3.org/1999/xlink', 'xlink:show', l);
        break;
      case 'xlinkTitle':
        _e(e, 'http://www.w3.org/1999/xlink', 'xlink:title', l);
        break;
      case 'xlinkType':
        _e(e, 'http://www.w3.org/1999/xlink', 'xlink:type', l);
        break;
      case 'xmlBase':
        _e(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', l);
        break;
      case 'xmlLang':
        _e(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', l);
        break;
      case 'xmlSpace':
        _e(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', l);
        break;
      case 'is':
        Qa(e, 'is', l);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== 'o' && a[0] !== 'O') ||
          (a[1] !== 'n' && a[1] !== 'N')) &&
          ((a = Zp.get(a) || a), Qa(e, a, l));
    }
  }
  function Dc(e, t, a, l, i, s) {
    switch (a) {
      case 'style':
        ad(e, l, s);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l)) throw Error(o(61));
          if (((a = l.__html), a != null)) {
            if (i.children != null) throw Error(o(60));
            e.innerHTML = a;
          }
        }
        break;
      case 'children':
        typeof l == 'string'
          ? Rl(e, l)
          : (typeof l == 'number' || typeof l == 'bigint') && Rl(e, '' + l);
        break;
      case 'onScroll':
        l != null && Ue('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && Ue('scrollend', e);
        break;
      case 'onClick':
        l != null && (e.onclick = Qu);
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        if (!ja.hasOwnProperty(a))
          e: {
            if (
              a[0] === 'o' &&
              a[1] === 'n' &&
              ((i = a.endsWith('Capture')),
              (t = a.slice(2, i ? a.length - 7 : void 0)),
              (s = e[P] || null),
              (s = s != null ? s[a] : null),
              typeof s == 'function' && e.removeEventListener(t, s, i),
              typeof l == 'function')
            ) {
              (typeof s != 'function' &&
                s !== null &&
                (a in e
                  ? (e[a] = null)
                  : e.hasAttribute(a) && e.removeAttribute(a)),
                e.addEventListener(t, l, i));
              break e;
            }
            a in e
              ? (e[a] = l)
              : l === !0
                ? e.setAttribute(a, '')
                : Qa(e, a, l);
          }
    }
  }
  function _t(e, t, a) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        (Ue('error', e), Ue('load', e));
        var l = !1,
          i = !1,
          s;
        for (s in a)
          if (a.hasOwnProperty(s)) {
            var d = a[s];
            if (d != null)
              switch (s) {
                case 'src':
                  l = !0;
                  break;
                case 'srcSet':
                  i = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(o(137, t));
                default:
                  Ke(e, t, s, d, a, null);
              }
          }
        (i && Ke(e, t, 'srcSet', a.srcSet, a, null),
          l && Ke(e, t, 'src', a.src, a, null));
        return;
      case 'input':
        Ue('invalid', e);
        var y = (s = d = i = null),
          E = null,
          N = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var V = a[l];
            if (V != null)
              switch (l) {
                case 'name':
                  i = V;
                  break;
                case 'type':
                  d = V;
                  break;
                case 'checked':
                  E = V;
                  break;
                case 'defaultChecked':
                  N = V;
                  break;
                case 'value':
                  s = V;
                  break;
                case 'defaultValue':
                  y = V;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (V != null) throw Error(o(137, t));
                  break;
                default:
                  Ke(e, t, l, V, a, null);
              }
          }
        (Wf(e, s, y, E, N, d, i, !1), Wi(e));
        return;
      case 'select':
        (Ue('invalid', e), (l = d = s = null));
        for (i in a)
          if (a.hasOwnProperty(i) && ((y = a[i]), y != null))
            switch (i) {
              case 'value':
                s = y;
                break;
              case 'defaultValue':
                d = y;
                break;
              case 'multiple':
                l = y;
              default:
                Ke(e, t, i, y, a, null);
            }
        ((t = s),
          (a = d),
          (e.multiple = !!l),
          t != null ? Cl(e, !!l, t, !1) : a != null && Cl(e, !!l, a, !0));
        return;
      case 'textarea':
        (Ue('invalid', e), (s = i = l = null));
        for (d in a)
          if (a.hasOwnProperty(d) && ((y = a[d]), y != null))
            switch (d) {
              case 'value':
                l = y;
                break;
              case 'defaultValue':
                i = y;
                break;
              case 'children':
                s = y;
                break;
              case 'dangerouslySetInnerHTML':
                if (y != null) throw Error(o(91));
                break;
              default:
                Ke(e, t, d, y, a, null);
            }
        (ed(e, l, i, s), Wi(e));
        return;
      case 'option':
        for (E in a)
          if (a.hasOwnProperty(E) && ((l = a[E]), l != null))
            switch (E) {
              case 'selected':
                e.selected =
                  l && typeof l != 'function' && typeof l != 'symbol';
                break;
              default:
                Ke(e, t, E, l, a, null);
            }
        return;
      case 'dialog':
        (Ue('beforetoggle', e),
          Ue('toggle', e),
          Ue('cancel', e),
          Ue('close', e));
        break;
      case 'iframe':
      case 'object':
        Ue('load', e);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < li.length; l++) Ue(li[l], e);
        break;
      case 'image':
        (Ue('error', e), Ue('load', e));
        break;
      case 'details':
        Ue('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (Ue('error', e), Ue('load', e));
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (N in a)
          if (a.hasOwnProperty(N) && ((l = a[N]), l != null))
            switch (N) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(o(137, t));
              default:
                Ke(e, t, N, l, a, null);
            }
        return;
      default:
        if (Zo(t)) {
          for (V in a)
            a.hasOwnProperty(V) &&
              ((l = a[V]), l !== void 0 && Dc(e, t, V, l, a, void 0));
          return;
        }
    }
    for (y in a)
      a.hasOwnProperty(y) && ((l = a[y]), l != null && Ke(e, t, y, l, a, null));
  }
  function bv(e, t, a, l) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'input':
        var i = null,
          s = null,
          d = null,
          y = null,
          E = null,
          N = null,
          V = null;
        for (k in a) {
          var K = a[k];
          if (a.hasOwnProperty(k) && K != null)
            switch (k) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                E = K;
              default:
                l.hasOwnProperty(k) || Ke(e, t, k, null, l, K);
            }
        }
        for (var B in l) {
          var k = l[B];
          if (((K = a[B]), l.hasOwnProperty(B) && (k != null || K != null)))
            switch (B) {
              case 'type':
                s = k;
                break;
              case 'name':
                i = k;
                break;
              case 'checked':
                N = k;
                break;
              case 'defaultChecked':
                V = k;
                break;
              case 'value':
                d = k;
                break;
              case 'defaultValue':
                y = k;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (k != null) throw Error(o(137, t));
                break;
              default:
                k !== K && Ke(e, t, B, k, l, K);
            }
        }
        Qo(e, d, y, E, N, V, s, i);
        return;
      case 'select':
        k = d = y = B = null;
        for (s in a)
          if (((E = a[s]), a.hasOwnProperty(s) && E != null))
            switch (s) {
              case 'value':
                break;
              case 'multiple':
                k = E;
              default:
                l.hasOwnProperty(s) || Ke(e, t, s, null, l, E);
            }
        for (i in l)
          if (
            ((s = l[i]),
            (E = a[i]),
            l.hasOwnProperty(i) && (s != null || E != null))
          )
            switch (i) {
              case 'value':
                B = s;
                break;
              case 'defaultValue':
                y = s;
                break;
              case 'multiple':
                d = s;
              default:
                s !== E && Ke(e, t, i, s, l, E);
            }
        ((t = y),
          (a = d),
          (l = k),
          B != null
            ? Cl(e, !!a, B, !1)
            : !!l != !!a &&
              (t != null ? Cl(e, !!a, t, !0) : Cl(e, !!a, a ? [] : '', !1)));
        return;
      case 'textarea':
        k = B = null;
        for (y in a)
          if (
            ((i = a[y]),
            a.hasOwnProperty(y) && i != null && !l.hasOwnProperty(y))
          )
            switch (y) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                Ke(e, t, y, null, l, i);
            }
        for (d in l)
          if (
            ((i = l[d]),
            (s = a[d]),
            l.hasOwnProperty(d) && (i != null || s != null))
          )
            switch (d) {
              case 'value':
                B = i;
                break;
              case 'defaultValue':
                k = i;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (i != null) throw Error(o(91));
                break;
              default:
                i !== s && Ke(e, t, d, i, l, s);
            }
        If(e, B, k);
        return;
      case 'option':
        for (var Ee in a)
          if (
            ((B = a[Ee]),
            a.hasOwnProperty(Ee) && B != null && !l.hasOwnProperty(Ee))
          )
            switch (Ee) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                Ke(e, t, Ee, null, l, B);
            }
        for (E in l)
          if (
            ((B = l[E]),
            (k = a[E]),
            l.hasOwnProperty(E) && B !== k && (B != null || k != null))
          )
            switch (E) {
              case 'selected':
                e.selected =
                  B && typeof B != 'function' && typeof B != 'symbol';
                break;
              default:
                Ke(e, t, E, B, l, k);
            }
        return;
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var xe in a)
          ((B = a[xe]),
            a.hasOwnProperty(xe) &&
              B != null &&
              !l.hasOwnProperty(xe) &&
              Ke(e, t, xe, null, l, B));
        for (N in l)
          if (
            ((B = l[N]),
            (k = a[N]),
            l.hasOwnProperty(N) && B !== k && (B != null || k != null))
          )
            switch (N) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (B != null) throw Error(o(137, t));
                break;
              default:
                Ke(e, t, N, B, l, k);
            }
        return;
      default:
        if (Zo(t)) {
          for (var Ze in a)
            ((B = a[Ze]),
              a.hasOwnProperty(Ze) &&
                B !== void 0 &&
                !l.hasOwnProperty(Ze) &&
                Dc(e, t, Ze, void 0, l, B));
          for (V in l)
            ((B = l[V]),
              (k = a[V]),
              !l.hasOwnProperty(V) ||
                B === k ||
                (B === void 0 && k === void 0) ||
                Dc(e, t, V, B, l, k));
          return;
        }
    }
    for (var O in a)
      ((B = a[O]),
        a.hasOwnProperty(O) &&
          B != null &&
          !l.hasOwnProperty(O) &&
          Ke(e, t, O, null, l, B));
    for (K in l)
      ((B = l[K]),
        (k = a[K]),
        !l.hasOwnProperty(K) ||
          B === k ||
          (B == null && k == null) ||
          Ke(e, t, K, B, l, k));
  }
  var zc = null,
    Nc = null;
  function Ku(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function t0(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function a0(e, t) {
    if (e === 0)
      switch (t) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === 'foreignObject' ? 0 : e;
  }
  function Uc(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      typeof t.children == 'bigint' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Lc = null;
  function xv() {
    var e = window.event;
    return e && e.type === 'popstate'
      ? e === Lc
        ? !1
        : ((Lc = e), !0)
      : ((Lc = null), !1);
  }
  var n0 = typeof setTimeout == 'function' ? setTimeout : void 0,
    Sv = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    l0 = typeof Promise == 'function' ? Promise : void 0,
    wv =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof l0 < 'u'
          ? function (e) {
              return l0.resolve(null).then(e).catch(Ev);
            }
          : n0;
  function Ev(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function _n(e) {
    return e === 'head';
  }
  function r0(e, t) {
    var a = t,
      l = 0,
      i = 0;
    do {
      var s = a.nextSibling;
      if ((e.removeChild(a), s && s.nodeType === 8))
        if (((a = s.data), a === '/$')) {
          if (0 < l && 8 > l) {
            a = l;
            var d = e.ownerDocument;
            if ((a & 1 && ii(d.documentElement), a & 2 && ii(d.body), a & 4))
              for (a = d.head, ii(a), d = a.firstChild; d; ) {
                var y = d.nextSibling,
                  E = d.nodeName;
                (d[ce] ||
                  E === 'SCRIPT' ||
                  E === 'STYLE' ||
                  (E === 'LINK' && d.rel.toLowerCase() === 'stylesheet') ||
                  a.removeChild(d),
                  (d = y));
              }
          }
          if (i === 0) {
            (e.removeChild(s), mi(t));
            return;
          }
          i--;
        } else
          a === '$' || a === '$?' || a === '$!'
            ? i++
            : (l = a.charCodeAt(0) - 48);
      else l = 0;
      a = s;
    } while (a);
    mi(t);
  }
  function Bc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (Bc(a), me(a));
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (a.rel.toLowerCase() === 'stylesheet') continue;
      }
      e.removeChild(a);
    }
  }
  function Tv(e, t, a, l) {
    for (; e.nodeType === 1; ) {
      var i = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (l) {
        if (!e[ce])
          switch (t) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break;
              return e;
            case 'link':
              if (
                ((s = e.getAttribute('rel')),
                s === 'stylesheet' && e.hasAttribute('data-precedence'))
              )
                break;
              if (
                s !== i.rel ||
                e.getAttribute('href') !==
                  (i.href == null || i.href === '' ? null : i.href) ||
                e.getAttribute('crossorigin') !==
                  (i.crossOrigin == null ? null : i.crossOrigin) ||
                e.getAttribute('title') !== (i.title == null ? null : i.title)
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((s = e.getAttribute('src')),
                (s !== (i.src == null ? null : i.src) ||
                  e.getAttribute('type') !== (i.type == null ? null : i.type) ||
                  e.getAttribute('crossorigin') !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  s &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === 'input' && e.type === 'hidden') {
        var s = i.name == null ? null : '' + i.name;
        if (i.type === 'hidden' && e.getAttribute('name') === s) return e;
      } else return e;
      if (((e = Ra(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Cv(e, t, a) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
          !a) ||
        ((e = Ra(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Hc(e) {
    return (
      e.data === '$!' ||
      (e.data === '$?' && e.ownerDocument.readyState === 'complete')
    );
  }
  function Rv(e, t) {
    var a = e.ownerDocument;
    if (e.data !== '$?' || a.readyState === 'complete') t();
    else {
      var l = function () {
        (t(), a.removeEventListener('DOMContentLoaded', l));
      };
      (a.addEventListener('DOMContentLoaded', l), (e._reactRetry = l));
    }
  }
  function Ra(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === '$' || t === '$!' || t === '$?' || t === 'F!' || t === 'F')
        )
          break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  var kc = null;
  function i0(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === '$' || a === '$!' || a === '$?') {
          if (t === 0) return e;
          t--;
        } else a === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function u0(e, t, a) {
    switch (((t = Ku(a)), e)) {
      case 'html':
        if (((e = t.documentElement), !e)) throw Error(o(452));
        return e;
      case 'head':
        if (((e = t.head), !e)) throw Error(o(453));
        return e;
      case 'body':
        if (((e = t.body), !e)) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function ii(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    me(e);
  }
  var pa = new Map(),
    o0 = new Set();
  function Zu(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var on = W.d;
  W.d = { f: Av, r: Mv, D: Ov, C: jv, L: _v, m: Dv, X: Nv, S: zv, M: Uv };
  function Av() {
    var e = on.f(),
      t = ku();
    return e || t;
  }
  function Mv(e) {
    var t = Ge(e);
    t !== null && t.tag === 5 && t.type === 'form' ? Mh(t) : on.r(e);
  }
  var tr = typeof document > 'u' ? null : document;
  function s0(e, t, a) {
    var l = tr;
    if (l && typeof t == 'string' && t) {
      var i = sa(t);
      ((i = 'link[rel="' + e + '"][href="' + i + '"]'),
        typeof a == 'string' && (i += '[crossorigin="' + a + '"]'),
        o0.has(i) ||
          (o0.add(i),
          (e = { rel: e, crossOrigin: a, href: t }),
          l.querySelector(i) === null &&
            ((t = l.createElement('link')),
            _t(t, 'link', e),
            Ce(t),
            l.head.appendChild(t))));
    }
  }
  function Ov(e) {
    (on.D(e), s0('dns-prefetch', e, null));
  }
  function jv(e, t) {
    (on.C(e, t), s0('preconnect', e, t));
  }
  function _v(e, t, a) {
    on.L(e, t, a);
    var l = tr;
    if (l && e && t) {
      var i = 'link[rel="preload"][as="' + sa(t) + '"]';
      t === 'image' && a && a.imageSrcSet
        ? ((i += '[imagesrcset="' + sa(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == 'string' &&
            (i += '[imagesizes="' + sa(a.imageSizes) + '"]'))
        : (i += '[href="' + sa(e) + '"]');
      var s = i;
      switch (t) {
        case 'style':
          s = ar(e);
          break;
        case 'script':
          s = nr(e);
      }
      pa.has(s) ||
        ((e = v(
          {
            rel: 'preload',
            href: t === 'image' && a && a.imageSrcSet ? void 0 : e,
            as: t,
          },
          a
        )),
        pa.set(s, e),
        l.querySelector(i) !== null ||
          (t === 'style' && l.querySelector(ui(s))) ||
          (t === 'script' && l.querySelector(oi(s))) ||
          ((t = l.createElement('link')),
          _t(t, 'link', e),
          Ce(t),
          l.head.appendChild(t)));
    }
  }
  function Dv(e, t) {
    on.m(e, t);
    var a = tr;
    if (a && e) {
      var l = t && typeof t.as == 'string' ? t.as : 'script',
        i =
          'link[rel="modulepreload"][as="' + sa(l) + '"][href="' + sa(e) + '"]',
        s = i;
      switch (l) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          s = nr(e);
      }
      if (
        !pa.has(s) &&
        ((e = v({ rel: 'modulepreload', href: e }, t)),
        pa.set(s, e),
        a.querySelector(i) === null)
      ) {
        switch (l) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (a.querySelector(oi(s))) return;
        }
        ((l = a.createElement('link')),
          _t(l, 'link', e),
          Ce(l),
          a.head.appendChild(l));
      }
    }
  }
  function zv(e, t, a) {
    on.S(e, t, a);
    var l = tr;
    if (l && e) {
      var i = ut(l).hoistableStyles,
        s = ar(e);
      t = t || 'default';
      var d = i.get(s);
      if (!d) {
        var y = { loading: 0, preload: null };
        if ((d = l.querySelector(ui(s)))) y.loading = 5;
        else {
          ((e = v({ rel: 'stylesheet', href: e, 'data-precedence': t }, a)),
            (a = pa.get(s)) && qc(e, a));
          var E = (d = l.createElement('link'));
          (Ce(E),
            _t(E, 'link', e),
            (E._p = new Promise(function (N, V) {
              ((E.onload = N), (E.onerror = V));
            })),
            E.addEventListener('load', function () {
              y.loading |= 1;
            }),
            E.addEventListener('error', function () {
              y.loading |= 2;
            }),
            (y.loading |= 4),
            Ju(d, t, l));
        }
        ((d = { type: 'stylesheet', instance: d, count: 1, state: y }),
          i.set(s, d));
      }
    }
  }
  function Nv(e, t) {
    on.X(e, t);
    var a = tr;
    if (a && e) {
      var l = ut(a).hoistableScripts,
        i = nr(e),
        s = l.get(i);
      s ||
        ((s = a.querySelector(oi(i))),
        s ||
          ((e = v({ src: e, async: !0 }, t)),
          (t = pa.get(i)) && Yc(e, t),
          (s = a.createElement('script')),
          Ce(s),
          _t(s, 'link', e),
          a.head.appendChild(s)),
        (s = { type: 'script', instance: s, count: 1, state: null }),
        l.set(i, s));
    }
  }
  function Uv(e, t) {
    on.M(e, t);
    var a = tr;
    if (a && e) {
      var l = ut(a).hoistableScripts,
        i = nr(e),
        s = l.get(i);
      s ||
        ((s = a.querySelector(oi(i))),
        s ||
          ((e = v({ src: e, async: !0, type: 'module' }, t)),
          (t = pa.get(i)) && Yc(e, t),
          (s = a.createElement('script')),
          Ce(s),
          _t(s, 'link', e),
          a.head.appendChild(s)),
        (s = { type: 'script', instance: s, count: 1, state: null }),
        l.set(i, s));
    }
  }
  function c0(e, t, a, l) {
    var i = (i = Se.current) ? Zu(i) : null;
    if (!i) throw Error(o(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof a.precedence == 'string' && typeof a.href == 'string'
          ? ((t = ar(a.href)),
            (a = ut(i).hoistableStyles),
            (l = a.get(t)),
            l ||
              ((l = { type: 'style', instance: null, count: 0, state: null }),
              a.set(t, l)),
            l)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          a.rel === 'stylesheet' &&
          typeof a.href == 'string' &&
          typeof a.precedence == 'string'
        ) {
          e = ar(a.href);
          var s = ut(i).hoistableStyles,
            d = s.get(e);
          if (
            (d ||
              ((i = i.ownerDocument || i),
              (d = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              s.set(e, d),
              (s = i.querySelector(ui(e))) &&
                !s._p &&
                ((d.instance = s), (d.state.loading = 5)),
              pa.has(e) ||
                ((a = {
                  rel: 'preload',
                  as: 'style',
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                pa.set(e, a),
                s || Lv(i, e, a, d.state))),
            t && l === null)
          )
            throw Error(o(528, ''));
          return d;
        }
        if (t && l !== null) throw Error(o(529, ''));
        return null;
      case 'script':
        return (
          (t = a.async),
          (a = a.src),
          typeof a == 'string' &&
          t &&
          typeof t != 'function' &&
          typeof t != 'symbol'
            ? ((t = nr(a)),
              (a = ut(i).hoistableScripts),
              (l = a.get(t)),
              l ||
                ((l = {
                  type: 'script',
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, l)),
              l)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, e));
    }
  }
  function ar(e) {
    return 'href="' + sa(e) + '"';
  }
  function ui(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function f0(e) {
    return v({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function Lv(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + ']')
      ? (l.loading = 1)
      : ((t = e.createElement('link')),
        (l.preload = t),
        t.addEventListener('load', function () {
          return (l.loading |= 1);
        }),
        t.addEventListener('error', function () {
          return (l.loading |= 2);
        }),
        _t(t, 'link', a),
        Ce(t),
        e.head.appendChild(t));
  }
  function nr(e) {
    return '[src="' + sa(e) + '"]';
  }
  function oi(e) {
    return 'script[async]' + e;
  }
  function d0(e, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var l = e.querySelector('style[data-href~="' + sa(a.href) + '"]');
          if (l) return ((t.instance = l), Ce(l), l);
          var i = v({}, a, {
            'data-href': a.href,
            'data-precedence': a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement('style')),
            Ce(l),
            _t(l, 'style', i),
            Ju(l, a.precedence, e),
            (t.instance = l)
          );
        case 'stylesheet':
          i = ar(a.href);
          var s = e.querySelector(ui(i));
          if (s) return ((t.state.loading |= 4), (t.instance = s), Ce(s), s);
          ((l = f0(a)),
            (i = pa.get(i)) && qc(l, i),
            (s = (e.ownerDocument || e).createElement('link')),
            Ce(s));
          var d = s;
          return (
            (d._p = new Promise(function (y, E) {
              ((d.onload = y), (d.onerror = E));
            })),
            _t(s, 'link', l),
            (t.state.loading |= 4),
            Ju(s, a.precedence, e),
            (t.instance = s)
          );
        case 'script':
          return (
            (s = nr(a.src)),
            (i = e.querySelector(oi(s)))
              ? ((t.instance = i), Ce(i), i)
              : ((l = a),
                (i = pa.get(s)) && ((l = v({}, a)), Yc(l, i)),
                (e = e.ownerDocument || e),
                (i = e.createElement('script')),
                Ce(i),
                _t(i, 'link', l),
                e.head.appendChild(i),
                (t.instance = i))
          );
        case 'void':
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((l = t.instance), (t.state.loading |= 4), Ju(l, a.precedence, e));
    return t.instance;
  }
  function Ju(e, t, a) {
    for (
      var l = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        i = l.length ? l[l.length - 1] : null,
        s = i,
        d = 0;
      d < l.length;
      d++
    ) {
      var y = l[d];
      if (y.dataset.precedence === t) s = y;
      else if (s !== i) break;
    }
    s
      ? s.parentNode.insertBefore(e, s.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(e, t.firstChild));
  }
  function qc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Yc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Pu = null;
  function h0(e, t, a) {
    if (Pu === null) {
      var l = new Map(),
        i = (Pu = new Map());
      i.set(a, l);
    } else ((i = Pu), (l = i.get(a)), l || ((l = new Map()), i.set(a, l)));
    if (l.has(e)) return l;
    for (
      l.set(e, null), a = a.getElementsByTagName(e), i = 0;
      i < a.length;
      i++
    ) {
      var s = a[i];
      if (
        !(
          s[ce] ||
          s[Z] ||
          (e === 'link' && s.getAttribute('rel') === 'stylesheet')
        ) &&
        s.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var d = s.getAttribute(t) || '';
        d = e + d;
        var y = l.get(d);
        y ? y.push(s) : l.set(d, [s]);
      }
    }
    return l;
  }
  function m0(e, t, a) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        a,
        t === 'title' ? e.querySelector('head > title') : null
      ));
  }
  function Bv(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (
          typeof t.precedence != 'string' ||
          typeof t.href != 'string' ||
          t.href === ''
        )
          break;
        return !0;
      case 'link':
        if (
          typeof t.rel != 'string' ||
          typeof t.href != 'string' ||
          t.href === '' ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case 'stylesheet':
            return (
              (e = t.disabled),
              typeof t.precedence == 'string' && e == null
            );
          default:
            return !0;
        }
      case 'script':
        if (
          t.async &&
          typeof t.async != 'function' &&
          typeof t.async != 'symbol' &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function g0(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  var si = null;
  function Hv() {}
  function kv(e, t, a) {
    if (si === null) throw Error(o(475));
    var l = si;
    if (
      t.type === 'stylesheet' &&
      (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var i = ar(a.href),
          s = e.querySelector(ui(i));
        if (s) {
          ((e = s._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (l.count++, (l = Fu.bind(l)), e.then(l, l)),
            (t.state.loading |= 4),
            (t.instance = s),
            Ce(s));
          return;
        }
        ((s = e.ownerDocument || e),
          (a = f0(a)),
          (i = pa.get(i)) && qc(a, i),
          (s = s.createElement('link')),
          Ce(s));
        var d = s;
        ((d._p = new Promise(function (y, E) {
          ((d.onload = y), (d.onerror = E));
        })),
          _t(s, 'link', a),
          (t.instance = s));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (l.count++,
          (t = Fu.bind(l)),
          e.addEventListener('load', t),
          e.addEventListener('error', t)));
    }
  }
  function qv() {
    if (si === null) throw Error(o(475));
    var e = si;
    return (
      e.stylesheets && e.count === 0 && Gc(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var a = setTimeout(function () {
              if ((e.stylesheets && Gc(e, e.stylesheets), e.unsuspend)) {
                var l = e.unsuspend;
                ((e.unsuspend = null), l());
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                ((e.unsuspend = null), clearTimeout(a));
              }
            );
          }
        : null
    );
  }
  function Fu() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Gc(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Wu = null;
  function Gc(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Wu = new Map()),
        t.forEach(Yv, e),
        (Wu = null),
        Fu.call(e)));
  }
  function Yv(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Wu.get(e);
      if (a) var l = a.get(null);
      else {
        ((a = new Map()), Wu.set(e, a));
        for (
          var i = e.querySelectorAll(
              'link[data-precedence],style[data-precedence]'
            ),
            s = 0;
          s < i.length;
          s++
        ) {
          var d = i[s];
          (d.nodeName === 'LINK' || d.getAttribute('media') !== 'not all') &&
            (a.set(d.dataset.precedence, d), (l = d));
        }
        l && a.set(null, l);
      }
      ((i = t.instance),
        (d = i.getAttribute('data-precedence')),
        (s = a.get(d) || l),
        s === l && a.set(null, i),
        a.set(d, i),
        this.count++,
        (l = Fu.bind(this)),
        i.addEventListener('load', l),
        i.addEventListener('error', l),
        s
          ? s.parentNode.insertBefore(i, s.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(i, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var ci = {
    $$typeof: X,
    Provider: null,
    Consumer: null,
    _currentValue: re,
    _currentValue2: re,
    _threadCount: 0,
  };
  function Gv(e, t, a, l, i, s, d, y) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = El(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = El(0)),
      (this.hiddenUpdates = El(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = i),
      (this.onCaughtError = s),
      (this.onRecoverableError = d),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = y),
      (this.incompleteTransitions = new Map()));
  }
  function p0(e, t, a, l, i, s, d, y, E, N, V, K) {
    return (
      (e = new Gv(e, t, a, d, y, E, N, K)),
      (t = 1),
      s === !0 && (t |= 24),
      (s = Pt(3, null, null, t)),
      (e.current = s),
      (s.stateNode = e),
      (t = Es()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (s.memoizedState = { element: l, isDehydrated: a, cache: t }),
      As(s),
      e
    );
  }
  function y0(e) {
    return e ? ((e = Nl), e) : Nl;
  }
  function v0(e, t, a, l, i, s) {
    ((i = y0(i)),
      l.context === null ? (l.context = i) : (l.pendingContext = i),
      (l = vn(t)),
      (l.payload = { element: a }),
      (s = s === void 0 ? null : s),
      s !== null && (l.callback = s),
      (a = bn(e, l, t)),
      a !== null && (ta(a, e, t), qr(a, e, t)));
  }
  function b0(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Vc(e, t) {
    (b0(e, t), (e = e.alternate) && b0(e, t));
  }
  function x0(e) {
    if (e.tag === 13) {
      var t = zl(e, 67108864);
      (t !== null && ta(t, e, 67108864), Vc(e, 67108864));
    }
  }
  var Iu = !0;
  function Vv(e, t, a, l) {
    var i = L.T;
    L.T = null;
    var s = W.p;
    try {
      ((W.p = 2), $c(e, t, a, l));
    } finally {
      ((W.p = s), (L.T = i));
    }
  }
  function $v(e, t, a, l) {
    var i = L.T;
    L.T = null;
    var s = W.p;
    try {
      ((W.p = 8), $c(e, t, a, l));
    } finally {
      ((W.p = s), (L.T = i));
    }
  }
  function $c(e, t, a, l) {
    if (Iu) {
      var i = Xc(l);
      if (i === null) (_c(e, t, l, eo, a), w0(e, l));
      else if (Qv(i, e, t, a, l)) l.stopPropagation();
      else if ((w0(e, l), t & 4 && -1 < Xv.indexOf(e))) {
        for (; i !== null; ) {
          var s = Ge(i);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (((s = s.stateNode), s.current.memoizedState.isDehydrated)) {
                  var d = $a(s.pendingLanes);
                  if (d !== 0) {
                    var y = s;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; d; ) {
                      var E = 1 << (31 - Mt(d));
                      ((y.entanglements[1] |= E), (d &= ~E));
                    }
                    (Ua(s), (Ve & 6) === 0 && ((Bu = Kt() + 500), ni(0)));
                  }
                }
                break;
              case 13:
                ((y = zl(s, 2)), y !== null && ta(y, s, 2), ku(), Vc(s, 2));
            }
          if (((s = Xc(l)), s === null && _c(e, t, l, eo, a), s === i)) break;
          i = s;
        }
        i !== null && l.stopPropagation();
      } else _c(e, t, l, null, a);
    }
  }
  function Xc(e) {
    return ((e = Po(e)), Qc(e));
  }
  var eo = null;
  function Qc(e) {
    if (((eo = null), (e = Ae(e)), e !== null)) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((e = h(t)), e !== null)) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((eo = e), null);
  }
  function S0(e) {
    switch (e) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8;
      case 'message':
        switch ($o()) {
          case Vi:
            return 2;
          case $i:
            return 8;
          case Sl:
          case Va:
            return 32;
          case dn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Kc = !1,
    Dn = null,
    zn = null,
    Nn = null,
    fi = new Map(),
    di = new Map(),
    Un = [],
    Xv =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function w0(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Dn = null;
        break;
      case 'dragenter':
      case 'dragleave':
        zn = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Nn = null;
        break;
      case 'pointerover':
      case 'pointerout':
        fi.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        di.delete(t.pointerId);
    }
  }
  function hi(e, t, a, l, i, s) {
    return e === null || e.nativeEvent !== s
      ? ((e = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: l,
          nativeEvent: s,
          targetContainers: [i],
        }),
        t !== null && ((t = Ge(t)), t !== null && x0(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function Qv(e, t, a, l, i) {
    switch (t) {
      case 'focusin':
        return ((Dn = hi(Dn, e, t, a, l, i)), !0);
      case 'dragenter':
        return ((zn = hi(zn, e, t, a, l, i)), !0);
      case 'mouseover':
        return ((Nn = hi(Nn, e, t, a, l, i)), !0);
      case 'pointerover':
        var s = i.pointerId;
        return (fi.set(s, hi(fi.get(s) || null, e, t, a, l, i)), !0);
      case 'gotpointercapture':
        return (
          (s = i.pointerId),
          di.set(s, hi(di.get(s) || null, e, t, a, l, i)),
          !0
        );
    }
    return !1;
  }
  function E0(e) {
    var t = Ae(e.target);
    if (t !== null) {
      var a = f(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = h(a)), t !== null)) {
            ((e.blockedOn = t),
              D(e.priority, function () {
                if (a.tag === 13) {
                  var l = ea();
                  l = Sr(l);
                  var i = zl(a, l);
                  (i !== null && ta(i, a, l), Vc(a, l));
                }
              }));
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function to(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Xc(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(a.type, a);
        ((Jo = l), a.target.dispatchEvent(l), (Jo = null));
      } else return ((t = Ge(a)), t !== null && x0(t), (e.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function T0(e, t, a) {
    to(e) && a.delete(t);
  }
  function Kv() {
    ((Kc = !1),
      Dn !== null && to(Dn) && (Dn = null),
      zn !== null && to(zn) && (zn = null),
      Nn !== null && to(Nn) && (Nn = null),
      fi.forEach(T0),
      di.forEach(T0));
  }
  function ao(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Kc ||
        ((Kc = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, Kv)));
  }
  var no = null;
  function C0(e) {
    no !== e &&
      ((no = e),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        no === e && (no = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t],
            l = e[t + 1],
            i = e[t + 2];
          if (typeof l != 'function') {
            if (Qc(l || a) === null) continue;
            break;
          }
          var s = Ge(a);
          s !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Qs(s, { pending: !0, data: i, method: a.method, action: l }, l, i));
        }
      }));
  }
  function mi(e) {
    function t(E) {
      return ao(E, e);
    }
    (Dn !== null && ao(Dn, e),
      zn !== null && ao(zn, e),
      Nn !== null && ao(Nn, e),
      fi.forEach(t),
      di.forEach(t));
    for (var a = 0; a < Un.length; a++) {
      var l = Un[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Un.length && ((a = Un[0]), a.blockedOn === null); )
      (E0(a), a.blockedOn === null && Un.shift());
    if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
      for (l = 0; l < a.length; l += 3) {
        var i = a[l],
          s = a[l + 1],
          d = i[P] || null;
        if (typeof s == 'function') d || C0(a);
        else if (d) {
          var y = null;
          if (s && s.hasAttribute('formAction')) {
            if (((i = s), (d = s[P] || null))) y = d.formAction;
            else if (Qc(i) !== null) continue;
          } else y = d.action;
          (typeof y == 'function' ? (a[l + 1] = y) : (a.splice(l, 3), (l -= 3)),
            C0(a));
        }
      }
  }
  function Zc(e) {
    this._internalRoot = e;
  }
  ((lo.prototype.render = Zc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      var a = t.current,
        l = ea();
      v0(a, l, e, t, null, null);
    }),
    (lo.prototype.unmount = Zc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (v0(e.current, 2, null, e, null, null), ku(), (t[ue] = null));
        }
      }));
  function lo(e) {
    this._internalRoot = e;
  }
  lo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = C();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < Un.length && t !== 0 && t < Un[a].priority; a++);
      (Un.splice(a, 0, e), a === 0 && E0(e));
    }
  };
  var R0 = r.version;
  if (R0 !== '19.1.1') throw Error(o(527, R0, '19.1.1'));
  W.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(o(188))
        : ((e = Object.keys(e).join(',')), Error(o(268, e)));
    return (
      (e = g(t)),
      (e = e !== null ? m(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Zv = {
    bundleType: 0,
    version: '19.1.1',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: L,
    reconcilerVersion: '19.1.1',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var ro = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ro.isDisabled && ro.supportsFiber)
      try {
        ((qt = ro.inject(Zv)), (nt = ro));
      } catch {}
  }
  return (
    (pi.createRoot = function (e, t) {
      if (!c(e)) throw Error(o(299));
      var a = !1,
        l = '',
        i = Gh,
        s = Vh,
        d = $h,
        y = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
          t.onCaughtError !== void 0 && (s = t.onCaughtError),
          t.onRecoverableError !== void 0 && (d = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (y = t.unstable_transitionCallbacks)),
        (t = p0(e, 1, !1, null, null, a, l, i, s, d, y, null)),
        (e[ue] = t.current),
        jc(e),
        new Zc(t)
      );
    }),
    (pi.hydrateRoot = function (e, t, a) {
      if (!c(e)) throw Error(o(299));
      var l = !1,
        i = '',
        s = Gh,
        d = Vh,
        y = $h,
        E = null,
        N = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (l = !0),
          a.identifierPrefix !== void 0 && (i = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (s = a.onUncaughtError),
          a.onCaughtError !== void 0 && (d = a.onCaughtError),
          a.onRecoverableError !== void 0 && (y = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (E = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (N = a.formState)),
        (t = p0(e, 1, !0, t, a ?? null, l, i, s, d, y, E, N)),
        (t.context = y0(null)),
        (a = t.current),
        (l = ea()),
        (l = Sr(l)),
        (i = vn(l)),
        (i.callback = null),
        bn(a, i, l),
        (a = l),
        (t.current.lanes = a),
        Zn(t, a),
        Ua(t),
        (e[ue] = t.current),
        jc(e),
        new lo(t)
      );
    }),
    (pi.version = '19.1.1'),
    pi
  );
}
var L0;
function l1() {
  if (L0) return Pc.exports;
  L0 = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return (n(), (Pc.exports = n1()), Pc.exports);
}
var r1 = l1();
const i1 = Ro(r1);
var U = Ao();
const u1 = Ro(U),
  B0 = Pv({ __proto__: null, default: u1 }, [U]);
/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Lg = n => {
    throw TypeError(n);
  },
  o1 = (n, r, u) => r.has(n) || Lg('Cannot ' + u),
  tf = (n, r, u) => (
    o1(n, r, 'read from private field'),
    u ? u.call(n) : r.get(n)
  ),
  s1 = (n, r, u) =>
    r.has(n)
      ? Lg('Cannot add the same private member more than once')
      : r instanceof WeakSet
        ? r.add(n)
        : r.set(n, u),
  H0 = 'popstate';
function c1(n = {}) {
  function r(o, c) {
    let { pathname: f, search: h, hash: p } = o.location;
    return Mi(
      '',
      { pathname: f, search: h, hash: p },
      (c.state && c.state.usr) || null,
      (c.state && c.state.key) || 'default'
    );
  }
  function u(o, c) {
    return typeof c == 'string' ? c : Yn(c);
  }
  return d1(r, u, null, n);
}
function Le(n, r) {
  if (n === !1 || n === null || typeof n > 'u') throw new Error(r);
}
function St(n, r) {
  if (!n) {
    typeof console < 'u' && console.warn(r);
    try {
      throw new Error(r);
    } catch {}
  }
}
function f1() {
  return Math.random().toString(36).substring(2, 10);
}
function k0(n, r) {
  return { usr: n.state, key: n.key, idx: r };
}
function Mi(n, r, u = null, o) {
  return {
    pathname: typeof n == 'string' ? n : n.pathname,
    search: '',
    hash: '',
    ...(typeof r == 'string' ? Vn(r) : r),
    state: u,
    key: (r && r.key) || o || f1(),
  };
}
function Yn({ pathname: n = '/', search: r = '', hash: u = '' }) {
  return (
    r && r !== '?' && (n += r.charAt(0) === '?' ? r : '?' + r),
    u && u !== '#' && (n += u.charAt(0) === '#' ? u : '#' + u),
    n
  );
}
function Vn(n) {
  let r = {};
  if (n) {
    let u = n.indexOf('#');
    u >= 0 && ((r.hash = n.substring(u)), (n = n.substring(0, u)));
    let o = n.indexOf('?');
    (o >= 0 && ((r.search = n.substring(o)), (n = n.substring(0, o))),
      n && (r.pathname = n));
  }
  return r;
}
function d1(n, r, u, o = {}) {
  let { window: c = document.defaultView, v5Compat: f = !1 } = o,
    h = c.history,
    p = 'POP',
    g = null,
    m = v();
  m == null && ((m = 0), h.replaceState({ ...h.state, idx: m }, ''));
  function v() {
    return (h.state || { idx: null }).idx;
  }
  function S() {
    p = 'POP';
    let q = v(),
      H = q == null ? null : q - m;
    ((m = q), g && g({ action: p, location: R.location, delta: H }));
  }
  function w(q, H) {
    p = 'PUSH';
    let te = Mi(R.location, q, H);
    m = v() + 1;
    let X = k0(te, m),
      F = R.createHref(te);
    try {
      h.pushState(X, '', F);
    } catch (J) {
      if (J instanceof DOMException && J.name === 'DataCloneError') throw J;
      c.location.assign(F);
    }
    f && g && g({ action: p, location: R.location, delta: 1 });
  }
  function j(q, H) {
    p = 'REPLACE';
    let te = Mi(R.location, q, H);
    m = v();
    let X = k0(te, m),
      F = R.createHref(te);
    (h.replaceState(X, '', F),
      f && g && g({ action: p, location: R.location, delta: 0 }));
  }
  function _(q) {
    return Bg(q);
  }
  let R = {
    get action() {
      return p;
    },
    get location() {
      return n(c, h);
    },
    listen(q) {
      if (g) throw new Error('A history only accepts one active listener');
      return (
        c.addEventListener(H0, S),
        (g = q),
        () => {
          (c.removeEventListener(H0, S), (g = null));
        }
      );
    },
    createHref(q) {
      return r(c, q);
    },
    createURL: _,
    encodeLocation(q) {
      let H = _(q);
      return { pathname: H.pathname, search: H.search, hash: H.hash };
    },
    push: w,
    replace: j,
    go(q) {
      return h.go(q);
    },
  };
  return R;
}
function Bg(n, r = !1) {
  let u = 'http://localhost';
  (typeof window < 'u' &&
    (u =
      window.location.origin !== 'null'
        ? window.location.origin
        : window.location.href),
    Le(u, 'No window.location.(origin|href) available to create URL'));
  let o = typeof n == 'string' ? n : Yn(n);
  return (
    (o = o.replace(/ $/, '%20')),
    !r && o.startsWith('//') && (o = u + o),
    new URL(o, u)
  );
}
var wi,
  q0 = class {
    constructor(n) {
      if ((s1(this, wi, new Map()), n)) for (let [r, u] of n) this.set(r, u);
    }
    get(n) {
      if (tf(this, wi).has(n)) return tf(this, wi).get(n);
      if (n.defaultValue !== void 0) return n.defaultValue;
      throw new Error('No value found for context');
    }
    set(n, r) {
      tf(this, wi).set(n, r);
    }
  };
wi = new WeakMap();
var h1 = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
function m1(n) {
  return h1.has(n);
}
var g1 = new Set([
  'lazy',
  'caseSensitive',
  'path',
  'id',
  'index',
  'unstable_middleware',
  'children',
]);
function p1(n) {
  return g1.has(n);
}
function y1(n) {
  return n.index === !0;
}
function Oi(n, r, u = [], o = {}, c = !1) {
  return n.map((f, h) => {
    let p = [...u, String(h)],
      g = typeof f.id == 'string' ? f.id : p.join('-');
    if (
      (Le(
        f.index !== !0 || !f.children,
        'Cannot specify children on an index route'
      ),
      Le(
        c || !o[g],
        `Found a route id collision on id "${g}".  Route id's must be globally unique within Data Router usages`
      ),
      y1(f))
    ) {
      let m = { ...f, ...r(f), id: g };
      return ((o[g] = m), m);
    } else {
      let m = { ...f, ...r(f), id: g, children: void 0 };
      return (
        (o[g] = m),
        f.children && (m.children = Oi(f.children, r, p, o, c)),
        m
      );
    }
  });
}
function kn(n, r, u = '/') {
  return fo(n, r, u, !1);
}
function fo(n, r, u, o) {
  let c = typeof r == 'string' ? Vn(r) : r,
    f = ba(c.pathname || '/', u);
  if (f == null) return null;
  let h = Hg(n);
  b1(h);
  let p = null;
  for (let g = 0; p == null && g < h.length; ++g) {
    let m = j1(f);
    p = M1(h[g], m, o);
  }
  return p;
}
function v1(n, r) {
  let { route: u, pathname: o, params: c } = n;
  return { id: u.id, pathname: o, params: c, data: r[u.id], handle: u.handle };
}
function Hg(n, r = [], u = [], o = '') {
  let c = (f, h, p) => {
    let g = {
      relativePath: p === void 0 ? f.path || '' : p,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: h,
      route: f,
    };
    g.relativePath.startsWith('/') &&
      (Le(
        g.relativePath.startsWith(o),
        `Absolute route path "${g.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (g.relativePath = g.relativePath.slice(o.length)));
    let m = ka([o, g.relativePath]),
      v = u.concat(g);
    (f.children &&
      f.children.length > 0 &&
      (Le(
        f.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${m}".`
      ),
      Hg(f.children, r, v, m)),
      !(f.path == null && !f.index) &&
        r.push({ path: m, score: R1(m, f.index), routesMeta: v }));
  };
  return (
    n.forEach((f, h) => {
      if (f.path === '' || !f.path?.includes('?')) c(f, h);
      else for (let p of kg(f.path)) c(f, h, p);
    }),
    r
  );
}
function kg(n) {
  let r = n.split('/');
  if (r.length === 0) return [];
  let [u, ...o] = r,
    c = u.endsWith('?'),
    f = u.replace(/\?$/, '');
  if (o.length === 0) return c ? [f, ''] : [f];
  let h = kg(o.join('/')),
    p = [];
  return (
    p.push(...h.map(g => (g === '' ? f : [f, g].join('/')))),
    c && p.push(...h),
    p.map(g => (n.startsWith('/') && g === '' ? '/' : g))
  );
}
function b1(n) {
  n.sort((r, u) =>
    r.score !== u.score
      ? u.score - r.score
      : A1(
          r.routesMeta.map(o => o.childrenIndex),
          u.routesMeta.map(o => o.childrenIndex)
        )
  );
}
var x1 = /^:[\w-]+$/,
  S1 = 3,
  w1 = 2,
  E1 = 1,
  T1 = 10,
  C1 = -2,
  Y0 = n => n === '*';
function R1(n, r) {
  let u = n.split('/'),
    o = u.length;
  return (
    u.some(Y0) && (o += C1),
    r && (o += w1),
    u
      .filter(c => !Y0(c))
      .reduce((c, f) => c + (x1.test(f) ? S1 : f === '' ? E1 : T1), o)
  );
}
function A1(n, r) {
  return n.length === r.length && n.slice(0, -1).every((o, c) => o === r[c])
    ? n[n.length - 1] - r[r.length - 1]
    : 0;
}
function M1(n, r, u = !1) {
  let { routesMeta: o } = n,
    c = {},
    f = '/',
    h = [];
  for (let p = 0; p < o.length; ++p) {
    let g = o[p],
      m = p === o.length - 1,
      v = f === '/' ? r : r.slice(f.length) || '/',
      S = xo(
        { path: g.relativePath, caseSensitive: g.caseSensitive, end: m },
        v
      ),
      w = g.route;
    if (
      (!S &&
        m &&
        u &&
        !o[o.length - 1].route.index &&
        (S = xo(
          { path: g.relativePath, caseSensitive: g.caseSensitive, end: !1 },
          v
        )),
      !S)
    )
      return null;
    (Object.assign(c, S.params),
      h.push({
        params: c,
        pathname: ka([f, S.pathname]),
        pathnameBase: N1(ka([f, S.pathnameBase])),
        route: w,
      }),
      S.pathnameBase !== '/' && (f = ka([f, S.pathnameBase])));
  }
  return h;
}
function xo(n, r) {
  typeof n == 'string' && (n = { path: n, caseSensitive: !1, end: !0 });
  let [u, o] = O1(n.path, n.caseSensitive, n.end),
    c = r.match(u);
  if (!c) return null;
  let f = c[0],
    h = f.replace(/(.)\/+$/, '$1'),
    p = c.slice(1);
  return {
    params: o.reduce((m, { paramName: v, isOptional: S }, w) => {
      if (v === '*') {
        let _ = p[w] || '';
        h = f.slice(0, f.length - _.length).replace(/(.)\/+$/, '$1');
      }
      const j = p[w];
      return (
        S && !j ? (m[v] = void 0) : (m[v] = (j || '').replace(/%2F/g, '/')),
        m
      );
    }, {}),
    pathname: f,
    pathnameBase: h,
    pattern: n,
  };
}
function O1(n, r = !1, u = !0) {
  St(
    n === '*' || !n.endsWith('*') || n.endsWith('/*'),
    `Route path "${n}" will be treated as if it were "${n.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/, '/*')}".`
  );
  let o = [],
    c =
      '^' +
      n
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (h, p, g) => (
            o.push({ paramName: p, isOptional: g != null }),
            g ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    n.endsWith('*')
      ? (o.push({ paramName: '*' }),
        (c += n === '*' || n === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : u
        ? (c += '\\/*$')
        : n !== '' && n !== '/' && (c += '(?:(?=\\/|$))'),
    [new RegExp(c, r ? void 0 : 'i'), o]
  );
}
function j1(n) {
  try {
    return n
      .split('/')
      .map(r => decodeURIComponent(r).replace(/\//g, '%2F'))
      .join('/');
  } catch (r) {
    return (
      St(
        !1,
        `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
      ),
      n
    );
  }
}
function ba(n, r) {
  if (r === '/') return n;
  if (!n.toLowerCase().startsWith(r.toLowerCase())) return null;
  let u = r.endsWith('/') ? r.length - 1 : r.length,
    o = n.charAt(u);
  return o && o !== '/' ? null : n.slice(u) || '/';
}
function _1({ basename: n, pathname: r }) {
  return r === '/' ? n : ka([n, r]);
}
function D1(n, r = '/') {
  let {
    pathname: u,
    search: o = '',
    hash: c = '',
  } = typeof n == 'string' ? Vn(n) : n;
  return {
    pathname: u ? (u.startsWith('/') ? u : z1(u, r)) : r,
    search: U1(o),
    hash: L1(c),
  };
}
function z1(n, r) {
  let u = r.replace(/\/+$/, '').split('/');
  return (
    n.split('/').forEach(c => {
      c === '..' ? u.length > 1 && u.pop() : c !== '.' && u.push(c);
    }),
    u.length > 1 ? u.join('/') : '/'
  );
}
function af(n, r, u, o) {
  return `Cannot include a '${n}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function qg(n) {
  return n.filter(
    (r, u) => u === 0 || (r.route.path && r.route.path.length > 0)
  );
}
function Mf(n) {
  let r = qg(n);
  return r.map((u, o) => (o === r.length - 1 ? u.pathname : u.pathnameBase));
}
function Of(n, r, u, o = !1) {
  let c;
  typeof n == 'string'
    ? (c = Vn(n))
    : ((c = { ...n }),
      Le(
        !c.pathname || !c.pathname.includes('?'),
        af('?', 'pathname', 'search', c)
      ),
      Le(
        !c.pathname || !c.pathname.includes('#'),
        af('#', 'pathname', 'hash', c)
      ),
      Le(!c.search || !c.search.includes('#'), af('#', 'search', 'hash', c)));
  let f = n === '' || c.pathname === '',
    h = f ? '/' : c.pathname,
    p;
  if (h == null) p = u;
  else {
    let S = r.length - 1;
    if (!o && h.startsWith('..')) {
      let w = h.split('/');
      for (; w[0] === '..'; ) (w.shift(), (S -= 1));
      c.pathname = w.join('/');
    }
    p = S >= 0 ? r[S] : '/';
  }
  let g = D1(c, p),
    m = h && h !== '/' && h.endsWith('/'),
    v = (f || h === '.') && u.endsWith('/');
  return (!g.pathname.endsWith('/') && (m || v) && (g.pathname += '/'), g);
}
var ka = n => n.join('/').replace(/\/\/+/g, '/'),
  N1 = n => n.replace(/\/+$/, '').replace(/^\/*/, '/'),
  U1 = n => (!n || n === '?' ? '' : n.startsWith('?') ? n : '?' + n),
  L1 = n => (!n || n === '#' ? '' : n.startsWith('#') ? n : '#' + n),
  So = class {
    constructor(n, r, u, o = !1) {
      ((this.status = n),
        (this.statusText = r || ''),
        (this.internal = o),
        u instanceof Error
          ? ((this.data = u.toString()), (this.error = u))
          : (this.data = u));
    }
  };
function ji(n) {
  return (
    n != null &&
    typeof n.status == 'number' &&
    typeof n.statusText == 'string' &&
    typeof n.internal == 'boolean' &&
    'data' in n
  );
}
var Yg = ['POST', 'PUT', 'PATCH', 'DELETE'],
  B1 = new Set(Yg),
  H1 = ['GET', ...Yg],
  k1 = new Set(H1),
  q1 = new Set([301, 302, 303, 307, 308]),
  Y1 = new Set([307, 308]),
  nf = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  G1 = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  yi = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  V1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  jf = n => V1.test(n),
  $1 = n => ({ hasErrorBoundary: !!n.hasErrorBoundary }),
  Gg = 'remix-router-transitions',
  Vg = Symbol('ResetLoaderData');
function X1(n) {
  const r = n.window ? n.window : typeof window < 'u' ? window : void 0,
    u =
      typeof r < 'u' &&
      typeof r.document < 'u' &&
      typeof r.document.createElement < 'u';
  Le(
    n.routes.length > 0,
    'You must provide a non-empty routes array to createRouter'
  );
  let o = n.hydrationRouteProperties || [],
    c = n.mapRouteProperties || $1,
    f = {},
    h = Oi(n.routes, c, void 0, f),
    p,
    g = n.basename || '/',
    m = n.dataStrategy || P1,
    v = { unstable_middleware: !1, ...n.future },
    S = null,
    w = new Set(),
    j = null,
    _ = null,
    R = null,
    q = n.hydrationData != null,
    H = kn(h, n.history.location, g),
    te = !1,
    X = null,
    F;
  if (H == null && !n.patchRoutesOnNavigation) {
    let C = ya(404, { pathname: n.history.location.pathname }),
      { matches: D, route: Y } = I0(h);
    ((F = !0), (H = D), (X = { [Y.id]: C }));
  } else if (
    (H &&
      !n.hydrationData &&
      Jn(H, h, n.history.location.pathname).active &&
      (H = null),
    H)
  )
    if (H.some(C => C.route.lazy)) F = !1;
    else if (!H.some(C => C.route.loader)) F = !0;
    else {
      let C = n.hydrationData ? n.hydrationData.loaderData : null,
        D = n.hydrationData ? n.hydrationData.errors : null;
      if (D) {
        let Y = H.findIndex(Z => D[Z.route.id] !== void 0);
        F = H.slice(0, Y + 1).every(Z => !pf(Z.route, C, D));
      } else F = H.every(Y => !pf(Y.route, C, D));
    }
  else {
    ((F = !1), (H = []));
    let C = Jn(null, h, n.history.location.pathname);
    C.active && C.matches && ((te = !0), (H = C.matches));
  }
  let J,
    M = {
      historyAction: n.history.action,
      location: n.history.location,
      matches: H,
      initialized: F,
      navigation: nf,
      restoreScrollPosition: n.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (n.hydrationData && n.hydrationData.loaderData) || {},
      actionData: (n.hydrationData && n.hydrationData.actionData) || null,
      errors: (n.hydrationData && n.hydrationData.errors) || X,
      fetchers: new Map(),
      blockers: new Map(),
    },
    I = 'POP',
    fe = !1,
    le,
    x = !1,
    ne = new Map(),
    ve = null,
    oe = !1,
    je = !1,
    Te = new Set(),
    L = new Map(),
    W = 0,
    re = -1,
    Me = new Map(),
    T = new Set(),
    Q = new Map(),
    ae = new Map(),
    ee = new Set(),
    de = new Map(),
    ze,
    Se = null;
  function Bt() {
    if (
      ((S = n.history.listen(({ action: C, location: D, delta: Y }) => {
        if (ze) {
          (ze(), (ze = void 0));
          return;
        }
        St(
          de.size === 0 || Y != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        );
        let Z = Ki({
          currentLocation: M.location,
          nextLocation: D,
          historyAction: C,
        });
        if (Z && Y != null) {
          let P = new Promise(ue => {
            ze = ue;
          });
          (n.history.go(Y * -1),
            Oa(Z, {
              state: 'blocked',
              location: D,
              proceed() {
                (Oa(Z, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: D,
                }),
                  P.then(() => n.history.go(Y)));
              },
              reset() {
                let ue = new Map(M.blockers);
                (ue.set(Z, yi), gt({ blockers: ue }));
              },
            }));
          return;
        }
        return wa(C, D);
      })),
      u)
    ) {
      ub(r, ne);
      let C = () => ob(r, ne);
      (r.addEventListener('pagehide', C),
        (ve = () => r.removeEventListener('pagehide', C)));
    }
    return (
      M.initialized || wa('POP', M.location, { initialHydration: !0 }),
      J
    );
  }
  function Ie() {
    (S && S(),
      ve && ve(),
      w.clear(),
      le && le.abort(),
      M.fetchers.forEach((C, D) => Mt(D)),
      M.blockers.forEach((C, D) => Kn(D)));
  }
  function Aa(C) {
    return (w.add(C), () => w.delete(C));
  }
  function gt(C, D = {}) {
    (C.matches &&
      (C.matches = C.matches.map(P => {
        let ue = f[P.route.id],
          he = P.route;
        return he.element !== ue.element ||
          he.errorElement !== ue.errorElement ||
          he.hydrateFallbackElement !== ue.hydrateFallbackElement
          ? { ...P, route: ue }
          : P;
      })),
      (M = { ...M, ...C }));
    let Y = [],
      Z = [];
    (M.fetchers.forEach((P, ue) => {
      P.state === 'idle' && (ee.has(ue) ? Y.push(ue) : Z.push(ue));
    }),
      ee.forEach(P => {
        !M.fetchers.has(P) && !L.has(P) && Y.push(P);
      }),
      [...w].forEach(P =>
        P(M, {
          deletedFetchers: Y,
          viewTransitionOpts: D.viewTransitionOpts,
          flushSync: D.flushSync === !0,
        })
      ),
      Y.forEach(P => Mt(P)),
      Z.forEach(P => M.fetchers.delete(P)));
  }
  function Sa(C, D, { flushSync: Y } = {}) {
    let Z =
        M.actionData != null &&
        M.navigation.formMethod != null &&
        Xt(M.navigation.formMethod) &&
        M.navigation.state === 'loading' &&
        C.state?._isRedirect !== !0,
      P;
    D.actionData
      ? Object.keys(D.actionData).length > 0
        ? (P = D.actionData)
        : (P = null)
      : Z
        ? (P = M.actionData)
        : (P = null);
    let ue = D.loaderData
        ? F0(M.loaderData, D.loaderData, D.matches || [], D.errors)
        : M.loaderData,
      he = M.blockers;
    he.size > 0 && ((he = new Map(he)), he.forEach((ce, me) => he.set(me, yi)));
    let se = oe ? !1 : Ji(C, D.matches || M.matches),
      ye =
        fe === !0 ||
        (M.navigation.formMethod != null &&
          Xt(M.navigation.formMethod) &&
          C.state?._isRedirect !== !0);
    (p && ((h = p), (p = void 0)),
      oe ||
        I === 'POP' ||
        (I === 'PUSH'
          ? n.history.push(C, C.state)
          : I === 'REPLACE' && n.history.replace(C, C.state)));
    let be;
    if (I === 'POP') {
      let ce = ne.get(M.location.pathname);
      ce && ce.has(C.pathname)
        ? (be = { currentLocation: M.location, nextLocation: C })
        : ne.has(C.pathname) &&
          (be = { currentLocation: C, nextLocation: M.location });
    } else if (x) {
      let ce = ne.get(M.location.pathname);
      (ce
        ? ce.add(C.pathname)
        : ((ce = new Set([C.pathname])), ne.set(M.location.pathname, ce)),
        (be = { currentLocation: M.location, nextLocation: C }));
    }
    (gt(
      {
        ...D,
        actionData: P,
        loaderData: ue,
        historyAction: I,
        location: C,
        initialized: !0,
        navigation: nf,
        revalidation: 'idle',
        restoreScrollPosition: se,
        preventScrollReset: ye,
        blockers: he,
      },
      { viewTransitionOpts: be, flushSync: Y === !0 }
    ),
      (I = 'POP'),
      (fe = !1),
      (x = !1),
      (oe = !1),
      (je = !1),
      Se?.resolve(),
      (Se = null));
  }
  async function xl(C, D) {
    if (typeof C == 'number') {
      n.history.go(C);
      return;
    }
    let Y = gf(M.location, M.matches, g, C, D?.fromRouteId, D?.relative),
      { path: Z, submission: P, error: ue } = G0(!1, Y, D),
      he = M.location,
      se = Mi(M.location, Z, D && D.state);
    se = { ...se, ...n.history.encodeLocation(se) };
    let ye = D && D.replace != null ? D.replace : void 0,
      be = 'PUSH';
    ye === !0
      ? (be = 'REPLACE')
      : ye === !1 ||
        (P != null &&
          Xt(P.formMethod) &&
          P.formAction === M.location.pathname + M.location.search &&
          (be = 'REPLACE'));
    let ce =
        D && 'preventScrollReset' in D ? D.preventScrollReset === !0 : void 0,
      me = (D && D.flushSync) === !0,
      Ae = Ki({ currentLocation: he, nextLocation: se, historyAction: be });
    if (Ae) {
      Oa(Ae, {
        state: 'blocked',
        location: se,
        proceed() {
          (Oa(Ae, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: se,
          }),
            xl(C, D));
        },
        reset() {
          let Ge = new Map(M.blockers);
          (Ge.set(Ae, yi), gt({ blockers: Ge }));
        },
      });
      return;
    }
    await wa(be, se, {
      submission: P,
      pendingError: ue,
      preventScrollReset: ce,
      replace: D && D.replace,
      enableViewTransition: D && D.viewTransition,
      flushSync: me,
    });
  }
  function br() {
    (Se || (Se = sb()), xr(), gt({ revalidation: 'loading' }));
    let C = Se.promise;
    return M.navigation.state === 'submitting'
      ? C
      : M.navigation.state === 'idle'
        ? (wa(M.historyAction, M.location, {
            startUninterruptedRevalidation: !0,
          }),
          C)
        : (wa(I || M.historyAction, M.navigation.location, {
            overrideNavigation: M.navigation,
            enableViewTransition: x === !0,
          }),
          C);
  }
  async function wa(C, D, Y) {
    (le && le.abort(),
      (le = null),
      (I = C),
      (oe = (Y && Y.startUninterruptedRevalidation) === !0),
      Zn(M.location, M.matches),
      (fe = (Y && Y.preventScrollReset) === !0),
      (x = (Y && Y.enableViewTransition) === !0));
    let Z = p || h,
      P = Y && Y.overrideNavigation,
      ue =
        Y?.initialHydration && M.matches && M.matches.length > 0 && !te
          ? M.matches
          : kn(Z, D, g),
      he = (Y && Y.flushSync) === !0;
    if (
      ue &&
      M.initialized &&
      !je &&
      ab(M.location, D) &&
      !(Y && Y.submission && Xt(Y.submission.formMethod))
    ) {
      Sa(D, { matches: ue }, { flushSync: he });
      return;
    }
    let se = Jn(ue, Z, D.pathname);
    if ((se.active && se.matches && (ue = se.matches), !ue)) {
      let { error: ut, notFoundMatches: Ce, route: Xe } = wl(D.pathname);
      Sa(
        D,
        { matches: Ce, loaderData: {}, errors: { [Xe.id]: ut } },
        { flushSync: he }
      );
      return;
    }
    le = new AbortController();
    let ye = cr(n.history, D, le.signal, Y && Y.submission),
      be = new q0(
        n.unstable_getContext ? await n.unstable_getContext() : void 0
      ),
      ce;
    if (Y && Y.pendingError)
      ce = [ml(ue).route.id, { type: 'error', error: Y.pendingError }];
    else if (Y && Y.submission && Xt(Y.submission.formMethod)) {
      let ut = await Go(
        ye,
        D,
        Y.submission,
        ue,
        be,
        se.active,
        Y && Y.initialHydration === !0,
        { replace: Y.replace, flushSync: he }
      );
      if (ut.shortCircuited) return;
      if (ut.pendingActionResult) {
        let [Ce, Xe] = ut.pendingActionResult;
        if (aa(Xe) && ji(Xe.error) && Xe.error.status === 404) {
          ((le = null),
            Sa(D, {
              matches: ut.matches,
              loaderData: {},
              errors: { [Ce]: Xe.error },
            }));
          return;
        }
      }
      ((ue = ut.matches || ue),
        (ce = ut.pendingActionResult),
        (P = lf(D, Y.submission)),
        (he = !1),
        (se.active = !1),
        (ye = cr(n.history, ye.url, ye.signal)));
    }
    let {
      shortCircuited: me,
      matches: Ae,
      loaderData: Ge,
      errors: it,
    } = await Vo(
      ye,
      D,
      ue,
      be,
      se.active,
      P,
      Y && Y.submission,
      Y && Y.fetcherSubmission,
      Y && Y.replace,
      Y && Y.initialHydration === !0,
      he,
      ce
    );
    me ||
      ((le = null),
      Sa(D, { matches: Ae || ue, ...W0(ce), loaderData: Ge, errors: it }));
  }
  async function Go(C, D, Y, Z, P, ue, he, se = {}) {
    xr();
    let ye = rb(D, Y);
    if ((gt({ navigation: ye }, { flushSync: se.flushSync === !0 }), ue)) {
      let me = await Pn(Z, D.pathname, C.signal);
      if (me.type === 'aborted') return { shortCircuited: !0 };
      if (me.type === 'error') {
        let Ae = ml(me.partialMatches).route.id;
        return {
          matches: me.partialMatches,
          pendingActionResult: [Ae, { type: 'error', error: me.error }],
        };
      } else if (me.matches) Z = me.matches;
      else {
        let { notFoundMatches: Ae, error: Ge, route: it } = wl(D.pathname);
        return {
          matches: Ae,
          pendingActionResult: [it.id, { type: 'error', error: Ge }],
        };
      }
    }
    let be,
      ce = ho(Z, D);
    if (!ce.route.action && !ce.route.lazy)
      be = {
        type: 'error',
        error: ya(405, {
          method: C.method,
          pathname: D.pathname,
          routeId: ce.route.id,
        }),
      };
    else {
      let me = fr(c, f, C, Z, ce, he ? [] : o, P),
        Ae = await dn(C, me, P, null);
      if (((be = Ae[ce.route.id]), !be)) {
        for (let Ge of Z)
          if (Ae[Ge.route.id]) {
            be = Ae[Ge.route.id];
            break;
          }
      }
      if (C.signal.aborted) return { shortCircuited: !0 };
    }
    if (gl(be)) {
      let me;
      return (
        se && se.replace != null
          ? (me = se.replace)
          : (me =
              Z0(be.response.headers.get('Location'), new URL(C.url), g) ===
              M.location.pathname + M.location.search),
        await Va(C, be, !0, { submission: Y, replace: me }),
        { shortCircuited: !0 }
      );
    }
    if (aa(be)) {
      let me = ml(Z, ce.route.id);
      return (
        (se && se.replace) !== !0 && (I = 'PUSH'),
        { matches: Z, pendingActionResult: [me.route.id, be, ce.route.id] }
      );
    }
    return { matches: Z, pendingActionResult: [ce.route.id, be] };
  }
  async function Vo(C, D, Y, Z, P, ue, he, se, ye, be, ce, me) {
    let Ae = ue || lf(D, he),
      Ge = he || se || tg(Ae),
      it = !oe && !be;
    if (P) {
      if (it) {
        let pt = Kt(me);
        gt(
          { navigation: Ae, ...(pt !== void 0 ? { actionData: pt } : {}) },
          { flushSync: ce }
        );
      }
      let _e = await Pn(Y, D.pathname, C.signal);
      if (_e.type === 'aborted') return { shortCircuited: !0 };
      if (_e.type === 'error') {
        let pt = ml(_e.partialMatches).route.id;
        return {
          matches: _e.partialMatches,
          loaderData: {},
          errors: { [pt]: _e.error },
        };
      } else if (_e.matches) Y = _e.matches;
      else {
        let { error: pt, notFoundMatches: Fn, route: ua } = wl(D.pathname);
        return { matches: Fn, loaderData: {}, errors: { [ua.id]: pt } };
      }
    }
    let ut = p || h,
      { dsMatches: Ce, revalidatingFetchers: Xe } = V0(
        C,
        Z,
        c,
        f,
        n.history,
        M,
        Y,
        Ge,
        D,
        be ? [] : o,
        be === !0,
        je,
        Te,
        ee,
        Q,
        T,
        ut,
        g,
        n.patchRoutesOnNavigation != null,
        me
      );
    if (
      ((re = ++W),
      !n.dataStrategy && !Ce.some(_e => _e.shouldLoad) && Xe.length === 0)
    ) {
      let _e = Xn();
      return (
        Sa(
          D,
          {
            matches: Y,
            loaderData: {},
            errors: me && aa(me[1]) ? { [me[0]]: me[1].error } : null,
            ...W0(me),
            ...(_e ? { fetchers: new Map(M.fetchers) } : {}),
          },
          { flushSync: ce }
        ),
        { shortCircuited: !0 }
      );
    }
    if (it) {
      let _e = {};
      if (!P) {
        _e.navigation = Ae;
        let pt = Kt(me);
        pt !== void 0 && (_e.actionData = pt);
      }
      (Xe.length > 0 && (_e.fetchers = $o(Xe)), gt(_e, { flushSync: ce }));
    }
    Xe.forEach(_e => {
      (Ma(_e.key), _e.controller && L.set(_e.key, _e.controller));
    });
    let ja = () => Xe.forEach(_e => Ma(_e.key));
    le && le.signal.addEventListener('abort', ja);
    let { loaderResults: Zt, fetcherResults: Ht } = await Xi(Ce, Xe, C, Z);
    if (C.signal.aborted) return { shortCircuited: !0 };
    (le && le.signal.removeEventListener('abort', ja),
      Xe.forEach(_e => L.delete(_e.key)));
    let ia = io(Zt);
    if (ia)
      return (
        await Va(C, ia.result, !0, { replace: ye }),
        { shortCircuited: !0 }
      );
    if (((ia = io(Ht)), ia))
      return (
        T.add(ia.key),
        await Va(C, ia.result, !0, { replace: ye }),
        { shortCircuited: !0 }
      );
    let { loaderData: Tl, errors: hn } = P0(M, Y, Zt, me, Xe, Ht);
    be && M.errors && (hn = { ...M.errors, ...hn });
    let Xa = Xn(),
      Qa = Qn(re),
      Ka = Xa || Qa || Xe.length > 0;
    return {
      matches: Y,
      loaderData: Tl,
      errors: hn,
      ...(Ka ? { fetchers: new Map(M.fetchers) } : {}),
    };
  }
  function Kt(C) {
    if (C && !aa(C[1])) return { [C[0]]: C[1].data };
    if (M.actionData)
      return Object.keys(M.actionData).length === 0 ? null : M.actionData;
  }
  function $o(C) {
    return (
      C.forEach(D => {
        let Y = M.fetchers.get(D.key),
          Z = vi(void 0, Y ? Y.data : void 0);
        M.fetchers.set(D.key, Z);
      }),
      new Map(M.fetchers)
    );
  }
  async function Vi(C, D, Y, Z) {
    Ma(C);
    let P = (Z && Z.flushSync) === !0,
      ue = p || h,
      he = gf(M.location, M.matches, g, Y, D, Z?.relative),
      se = kn(ue, he, g),
      ye = Jn(se, ue, he);
    if ((ye.active && ye.matches && (se = ye.matches), !se)) {
      nt(C, D, ya(404, { pathname: he }), { flushSync: P });
      return;
    }
    let { path: be, submission: ce, error: me } = G0(!0, he, Z);
    if (me) {
      nt(C, D, me, { flushSync: P });
      return;
    }
    let Ae = new q0(
        n.unstable_getContext ? await n.unstable_getContext() : void 0
      ),
      Ge = (Z && Z.preventScrollReset) === !0;
    if (ce && Xt(ce.formMethod)) {
      await $i(C, D, be, se, Ae, ye.active, P, Ge, ce);
      return;
    }
    (Q.set(C, { routeId: D, path: be }),
      await Sl(C, D, be, se, Ae, ye.active, P, Ge, ce));
  }
  async function $i(C, D, Y, Z, P, ue, he, se, ye) {
    (xr(), Q.delete(C));
    let be = M.fetchers.get(C);
    qt(C, ib(ye, be), { flushSync: he });
    let ce = new AbortController(),
      me = cr(n.history, Y, ce.signal, ye);
    if (ue) {
      let lt = await Pn(Z, new URL(me.url).pathname, me.signal, C);
      if (lt.type === 'aborted') return;
      if (lt.type === 'error') {
        nt(C, D, lt.error, { flushSync: he });
        return;
      } else if (lt.matches) Z = lt.matches;
      else {
        nt(C, D, ya(404, { pathname: Y }), { flushSync: he });
        return;
      }
    }
    let Ae = ho(Z, Y);
    if (!Ae.route.action && !Ae.route.lazy) {
      let lt = ya(405, { method: ye.formMethod, pathname: Y, routeId: D });
      nt(C, D, lt, { flushSync: he });
      return;
    }
    L.set(C, ce);
    let Ge = W,
      it = fr(c, f, me, Z, Ae, o, P),
      Ce = (await dn(me, it, P, C))[Ae.route.id];
    if (me.signal.aborted) {
      L.get(C) === ce && L.delete(C);
      return;
    }
    if (ee.has(C)) {
      if (gl(Ce) || aa(Ce)) {
        qt(C, Bn(void 0));
        return;
      }
    } else {
      if (gl(Ce))
        if ((L.delete(C), re > Ge)) {
          qt(C, Bn(void 0));
          return;
        } else
          return (
            T.add(C),
            qt(C, vi(ye)),
            Va(me, Ce, !1, { fetcherSubmission: ye, preventScrollReset: se })
          );
      if (aa(Ce)) {
        nt(C, D, Ce.error);
        return;
      }
    }
    let Xe = M.navigation.location || M.location,
      ja = cr(n.history, Xe, ce.signal),
      Zt = p || h,
      Ht =
        M.navigation.state !== 'idle'
          ? kn(Zt, M.navigation.location, g)
          : M.matches;
    Le(Ht, "Didn't find any matches after fetcher action");
    let ia = ++W;
    Me.set(C, ia);
    let Tl = vi(ye, Ce.data);
    M.fetchers.set(C, Tl);
    let { dsMatches: hn, revalidatingFetchers: Xa } = V0(
      ja,
      P,
      c,
      f,
      n.history,
      M,
      Ht,
      ye,
      Xe,
      o,
      !1,
      je,
      Te,
      ee,
      Q,
      T,
      Zt,
      g,
      n.patchRoutesOnNavigation != null,
      [Ae.route.id, Ce]
    );
    (Xa.filter(lt => lt.key !== C).forEach(lt => {
      let mn = lt.key,
        Pi = M.fetchers.get(mn),
        Fi = vi(void 0, Pi ? Pi.data : void 0);
      (M.fetchers.set(mn, Fi),
        Ma(mn),
        lt.controller && L.set(mn, lt.controller));
    }),
      gt({ fetchers: new Map(M.fetchers) }));
    let Qa = () => Xa.forEach(lt => Ma(lt.key));
    ce.signal.addEventListener('abort', Qa);
    let { loaderResults: Ka, fetcherResults: _e } = await Xi(hn, Xa, ja, P);
    if (ce.signal.aborted) return;
    if (
      (ce.signal.removeEventListener('abort', Qa),
      Me.delete(C),
      L.delete(C),
      Xa.forEach(lt => L.delete(lt.key)),
      M.fetchers.has(C))
    ) {
      let lt = Bn(Ce.data);
      M.fetchers.set(C, lt);
    }
    let pt = io(Ka);
    if (pt) return Va(ja, pt.result, !1, { preventScrollReset: se });
    if (((pt = io(_e)), pt))
      return (T.add(pt.key), Va(ja, pt.result, !1, { preventScrollReset: se }));
    let { loaderData: Fn, errors: ua } = P0(M, Ht, Ka, void 0, Xa, _e);
    (Qn(ia),
      M.navigation.state === 'loading' && ia > re
        ? (Le(I, 'Expected pending action'),
          le && le.abort(),
          Sa(M.navigation.location, {
            matches: Ht,
            loaderData: Fn,
            errors: ua,
            fetchers: new Map(M.fetchers),
          }))
        : (gt({
            errors: ua,
            loaderData: F0(M.loaderData, Fn, Ht, ua),
            fetchers: new Map(M.fetchers),
          }),
          (je = !1)));
  }
  async function Sl(C, D, Y, Z, P, ue, he, se, ye) {
    let be = M.fetchers.get(C);
    qt(C, vi(ye, be ? be.data : void 0), { flushSync: he });
    let ce = new AbortController(),
      me = cr(n.history, Y, ce.signal);
    if (ue) {
      let Xe = await Pn(Z, new URL(me.url).pathname, me.signal, C);
      if (Xe.type === 'aborted') return;
      if (Xe.type === 'error') {
        nt(C, D, Xe.error, { flushSync: he });
        return;
      } else if (Xe.matches) Z = Xe.matches;
      else {
        nt(C, D, ya(404, { pathname: Y }), { flushSync: he });
        return;
      }
    }
    let Ae = ho(Z, Y);
    L.set(C, ce);
    let Ge = W,
      it = fr(c, f, me, Z, Ae, o, P),
      Ce = (await dn(me, it, P, C))[Ae.route.id];
    if ((L.get(C) === ce && L.delete(C), !me.signal.aborted)) {
      if (ee.has(C)) {
        qt(C, Bn(void 0));
        return;
      }
      if (gl(Ce))
        if (re > Ge) {
          qt(C, Bn(void 0));
          return;
        } else {
          (T.add(C), await Va(me, Ce, !1, { preventScrollReset: se }));
          return;
        }
      if (aa(Ce)) {
        nt(C, D, Ce.error);
        return;
      }
      qt(C, Bn(Ce.data));
    }
  }
  async function Va(
    C,
    D,
    Y,
    {
      submission: Z,
      fetcherSubmission: P,
      preventScrollReset: ue,
      replace: he,
    } = {}
  ) {
    D.response.headers.has('X-Remix-Revalidate') && (je = !0);
    let se = D.response.headers.get('Location');
    (Le(se, 'Expected a Location header on the redirect Response'),
      (se = Z0(se, new URL(C.url), g)));
    let ye = Mi(M.location, se, { _isRedirect: !0 });
    if (u) {
      let it = !1;
      if (D.response.headers.has('X-Remix-Reload-Document')) it = !0;
      else if (jf(se)) {
        const ut = Bg(se, !0);
        it = ut.origin !== r.location.origin || ba(ut.pathname, g) == null;
      }
      if (it) {
        he ? r.location.replace(se) : r.location.assign(se);
        return;
      }
    }
    le = null;
    let be =
        he === !0 || D.response.headers.has('X-Remix-Replace')
          ? 'REPLACE'
          : 'PUSH',
      { formMethod: ce, formAction: me, formEncType: Ae } = M.navigation;
    !Z && !P && ce && me && Ae && (Z = tg(M.navigation));
    let Ge = Z || P;
    if (Y1.has(D.response.status) && Ge && Xt(Ge.formMethod))
      await wa(be, ye, {
        submission: { ...Ge, formAction: se },
        preventScrollReset: ue || fe,
        enableViewTransition: Y ? x : void 0,
      });
    else {
      let it = lf(ye, Z);
      await wa(be, ye, {
        overrideNavigation: it,
        fetcherSubmission: P,
        preventScrollReset: ue || fe,
        enableViewTransition: Y ? x : void 0,
      });
    }
  }
  async function dn(C, D, Y, Z) {
    let P,
      ue = {};
    try {
      P = await F1(m, C, D, Z, Y, !1);
    } catch (he) {
      return (
        D.filter(se => se.shouldLoad).forEach(se => {
          ue[se.route.id] = { type: 'error', error: he };
        }),
        ue
      );
    }
    if (C.signal.aborted) return ue;
    for (let [he, se] of Object.entries(P))
      if (nb(se)) {
        let ye = se.result;
        ue[he] = { type: 'redirect', response: eb(ye, C, he, D, g) };
      } else ue[he] = await I1(se);
    return ue;
  }
  async function Xi(C, D, Y, Z) {
    let P = dn(Y, C, Z, null),
      ue = Promise.all(
        D.map(async ye => {
          if (ye.matches && ye.match && ye.request && ye.controller) {
            let ce = (await dn(ye.request, ye.matches, Z, ye.key))[
              ye.match.route.id
            ];
            return { [ye.key]: ce };
          } else
            return Promise.resolve({
              [ye.key]: {
                type: 'error',
                error: ya(404, { pathname: ye.path }),
              },
            });
        })
      ),
      he = await P,
      se = (await ue).reduce((ye, be) => Object.assign(ye, be), {});
    return { loaderResults: he, fetcherResults: se };
  }
  function xr() {
    ((je = !0),
      Q.forEach((C, D) => {
        (L.has(D) && Te.add(D), Ma(D));
      }));
  }
  function qt(C, D, Y = {}) {
    (M.fetchers.set(C, D),
      gt(
        { fetchers: new Map(M.fetchers) },
        { flushSync: (Y && Y.flushSync) === !0 }
      ));
  }
  function nt(C, D, Y, Z = {}) {
    let P = ml(M.matches, D);
    (Mt(C),
      gt(
        { errors: { [P.route.id]: Y }, fetchers: new Map(M.fetchers) },
        { flushSync: (Z && Z.flushSync) === !0 }
      ));
  }
  function Ea(C) {
    return (
      ae.set(C, (ae.get(C) || 0) + 1),
      ee.has(C) && ee.delete(C),
      M.fetchers.get(C) || G1
    );
  }
  function Mt(C) {
    let D = M.fetchers.get(C);
    (L.has(C) && !(D && D.state === 'loading' && Me.has(C)) && Ma(C),
      Q.delete(C),
      Me.delete(C),
      T.delete(C),
      ee.delete(C),
      Te.delete(C),
      M.fetchers.delete(C));
  }
  function Xo(C) {
    let D = (ae.get(C) || 0) - 1;
    (D <= 0 ? (ae.delete(C), ee.add(C)) : ae.set(C, D),
      gt({ fetchers: new Map(M.fetchers) }));
  }
  function Ma(C) {
    let D = L.get(C);
    D && (D.abort(), L.delete(C));
  }
  function Qi(C) {
    for (let D of C) {
      let Y = Ea(D),
        Z = Bn(Y.data);
      M.fetchers.set(D, Z);
    }
  }
  function Xn() {
    let C = [],
      D = !1;
    for (let Y of T) {
      let Z = M.fetchers.get(Y);
      (Le(Z, `Expected fetcher: ${Y}`),
        Z.state === 'loading' && (T.delete(Y), C.push(Y), (D = !0)));
    }
    return (Qi(C), D);
  }
  function Qn(C) {
    let D = [];
    for (let [Y, Z] of Me)
      if (Z < C) {
        let P = M.fetchers.get(Y);
        (Le(P, `Expected fetcher: ${Y}`),
          P.state === 'loading' && (Ma(Y), Me.delete(Y), D.push(Y)));
      }
    return (Qi(D), D.length > 0);
  }
  function $a(C, D) {
    let Y = M.blockers.get(C) || yi;
    return (de.get(C) !== D && de.set(C, D), Y);
  }
  function Kn(C) {
    (M.blockers.delete(C), de.delete(C));
  }
  function Oa(C, D) {
    let Y = M.blockers.get(C) || yi;
    Le(
      (Y.state === 'unblocked' && D.state === 'blocked') ||
        (Y.state === 'blocked' && D.state === 'blocked') ||
        (Y.state === 'blocked' && D.state === 'proceeding') ||
        (Y.state === 'blocked' && D.state === 'unblocked') ||
        (Y.state === 'proceeding' && D.state === 'unblocked'),
      `Invalid blocker state transition: ${Y.state} -> ${D.state}`
    );
    let Z = new Map(M.blockers);
    (Z.set(C, D), gt({ blockers: Z }));
  }
  function Ki({ currentLocation: C, nextLocation: D, historyAction: Y }) {
    if (de.size === 0) return;
    de.size > 1 && St(!1, 'A router only supports one blocker at a time');
    let Z = Array.from(de.entries()),
      [P, ue] = Z[Z.length - 1],
      he = M.blockers.get(P);
    if (
      !(he && he.state === 'proceeding') &&
      ue({ currentLocation: C, nextLocation: D, historyAction: Y })
    )
      return P;
  }
  function wl(C) {
    let D = ya(404, { pathname: C }),
      Y = p || h,
      { matches: Z, route: P } = I0(Y);
    return { notFoundMatches: Z, route: P, error: D };
  }
  function Zi(C, D, Y) {
    if (((j = C), (R = D), (_ = Y || null), !q && M.navigation === nf)) {
      q = !0;
      let Z = Ji(M.location, M.matches);
      Z != null && gt({ restoreScrollPosition: Z });
    }
    return () => {
      ((j = null), (R = null), (_ = null));
    };
  }
  function El(C, D) {
    return (
      (_ &&
        _(
          C,
          D.map(Z => v1(Z, M.loaderData))
        )) ||
      C.key
    );
  }
  function Zn(C, D) {
    if (j && R) {
      let Y = El(C, D);
      j[Y] = R();
    }
  }
  function Ji(C, D) {
    if (j) {
      let Y = El(C, D),
        Z = j[Y];
      if (typeof Z == 'number') return Z;
    }
    return null;
  }
  function Jn(C, D, Y) {
    if (n.patchRoutesOnNavigation)
      if (C) {
        if (Object.keys(C[0].params).length > 0)
          return { active: !0, matches: fo(D, Y, g, !0) };
      } else return { active: !0, matches: fo(D, Y, g, !0) || [] };
    return { active: !1, matches: null };
  }
  async function Pn(C, D, Y, Z) {
    if (!n.patchRoutesOnNavigation) return { type: 'success', matches: C };
    let P = C;
    for (;;) {
      let ue = p == null,
        he = p || h,
        se = f;
      try {
        await n.patchRoutesOnNavigation({
          signal: Y,
          path: D,
          matches: P,
          fetcherKey: Z,
          patch: (ce, me) => {
            Y.aborted || $0(ce, me, he, se, c, !1);
          },
        });
      } catch (ce) {
        return { type: 'error', error: ce, partialMatches: P };
      } finally {
        ue && !Y.aborted && (h = [...h]);
      }
      if (Y.aborted) return { type: 'aborted' };
      let ye = kn(he, D, g);
      if (ye) return { type: 'success', matches: ye };
      let be = fo(he, D, g, !0);
      if (
        !be ||
        (P.length === be.length &&
          P.every((ce, me) => ce.route.id === be[me].route.id))
      )
        return { type: 'success', matches: null };
      P = be;
    }
  }
  function Sr(C) {
    ((f = {}), (p = Oi(C, c, void 0, f)));
  }
  function wr(C, D, Y = !1) {
    let Z = p == null;
    ($0(C, D, p || h, f, c, Y), Z && ((h = [...h]), gt({})));
  }
  return (
    (J = {
      get basename() {
        return g;
      },
      get future() {
        return v;
      },
      get state() {
        return M;
      },
      get routes() {
        return h;
      },
      get window() {
        return r;
      },
      initialize: Bt,
      subscribe: Aa,
      enableScrollRestoration: Zi,
      navigate: xl,
      fetch: Vi,
      revalidate: br,
      createHref: C => n.history.createHref(C),
      encodeLocation: C => n.history.encodeLocation(C),
      getFetcher: Ea,
      deleteFetcher: Xo,
      dispose: Ie,
      getBlocker: $a,
      deleteBlocker: Kn,
      patchRoutes: wr,
      _internalFetchControllers: L,
      _internalSetRoutes: Sr,
      _internalSetStateDoNotUseOrYouWillBreakYourApp(C) {
        gt(C);
      },
    }),
    J
  );
}
function Q1(n) {
  return (
    n != null &&
    (('formData' in n && n.formData != null) ||
      ('body' in n && n.body !== void 0))
  );
}
function gf(n, r, u, o, c, f) {
  let h, p;
  if (c) {
    h = [];
    for (let m of r)
      if ((h.push(m), m.route.id === c)) {
        p = m;
        break;
      }
  } else ((h = r), (p = r[r.length - 1]));
  let g = Of(o || '.', Mf(h), ba(n.pathname, u) || n.pathname, f === 'path');
  if (
    (o == null && ((g.search = n.search), (g.hash = n.hash)),
    (o == null || o === '' || o === '.') && p)
  ) {
    let m = _f(g.search);
    if (p.route.index && !m)
      g.search = g.search ? g.search.replace(/^\?/, '?index&') : '?index';
    else if (!p.route.index && m) {
      let v = new URLSearchParams(g.search),
        S = v.getAll('index');
      (v.delete('index'), S.filter(j => j).forEach(j => v.append('index', j)));
      let w = v.toString();
      g.search = w ? `?${w}` : '';
    }
  }
  return (
    u !== '/' && (g.pathname = _1({ basename: u, pathname: g.pathname })),
    Yn(g)
  );
}
function G0(n, r, u) {
  if (!u || !Q1(u)) return { path: r };
  if (u.formMethod && !lb(u.formMethod))
    return { path: r, error: ya(405, { method: u.formMethod }) };
  let o = () => ({ path: r, error: ya(400, { type: 'invalid-body' }) }),
    f = (u.formMethod || 'get').toUpperCase(),
    h = Jg(r);
  if (u.body !== void 0) {
    if (u.formEncType === 'text/plain') {
      if (!Xt(f)) return o();
      let S =
        typeof u.body == 'string'
          ? u.body
          : u.body instanceof FormData || u.body instanceof URLSearchParams
            ? Array.from(u.body.entries()).reduce(
                (w, [j, _]) => `${w}${j}=${_}
`,
                ''
              )
            : String(u.body);
      return {
        path: r,
        submission: {
          formMethod: f,
          formAction: h,
          formEncType: u.formEncType,
          formData: void 0,
          json: void 0,
          text: S,
        },
      };
    } else if (u.formEncType === 'application/json') {
      if (!Xt(f)) return o();
      try {
        let S = typeof u.body == 'string' ? JSON.parse(u.body) : u.body;
        return {
          path: r,
          submission: {
            formMethod: f,
            formAction: h,
            formEncType: u.formEncType,
            formData: void 0,
            json: S,
            text: void 0,
          },
        };
      } catch {
        return o();
      }
    }
  }
  Le(
    typeof FormData == 'function',
    'FormData is not available in this environment'
  );
  let p, g;
  if (u.formData) ((p = vf(u.formData)), (g = u.formData));
  else if (u.body instanceof FormData) ((p = vf(u.body)), (g = u.body));
  else if (u.body instanceof URLSearchParams) ((p = u.body), (g = J0(p)));
  else if (u.body == null) ((p = new URLSearchParams()), (g = new FormData()));
  else
    try {
      ((p = new URLSearchParams(u.body)), (g = J0(p)));
    } catch {
      return o();
    }
  let m = {
    formMethod: f,
    formAction: h,
    formEncType: (u && u.formEncType) || 'application/x-www-form-urlencoded',
    formData: g,
    json: void 0,
    text: void 0,
  };
  if (Xt(m.formMethod)) return { path: r, submission: m };
  let v = Vn(r);
  return (
    n && v.search && _f(v.search) && p.append('index', ''),
    (v.search = `?${p}`),
    { path: Yn(v), submission: m }
  );
}
function V0(n, r, u, o, c, f, h, p, g, m, v, S, w, j, _, R, q, H, te, X) {
  let F = X ? (aa(X[1]) ? X[1].error : X[1].data) : void 0,
    J = c.createURL(f.location),
    M = c.createURL(g),
    I;
  if (v && f.errors) {
    let oe = Object.keys(f.errors)[0];
    I = h.findIndex(je => je.route.id === oe);
  } else if (X && aa(X[1])) {
    let oe = X[0];
    I = h.findIndex(je => je.route.id === oe) - 1;
  }
  let fe = X ? X[1].statusCode : void 0,
    le = fe && fe >= 400,
    x = {
      currentUrl: J,
      currentParams: f.matches[0]?.params || {},
      nextUrl: M,
      nextParams: h[0].params,
      ...p,
      actionResult: F,
      actionStatus: fe,
    },
    ne = h.map((oe, je) => {
      let { route: Te } = oe,
        L = null;
      if (
        (I != null && je > I
          ? (L = !1)
          : Te.lazy
            ? (L = !0)
            : Te.loader == null
              ? (L = !1)
              : v
                ? (L = pf(Te, f.loaderData, f.errors))
                : K1(f.loaderData, f.matches[je], oe) && (L = !0),
        L !== null)
      )
        return yf(u, o, n, oe, m, r, L);
      let W = le
          ? !1
          : S ||
            J.pathname + J.search === M.pathname + M.search ||
            J.search !== M.search ||
            Z1(f.matches[je], oe),
        re = { ...x, defaultShouldRevalidate: W },
        Me = wo(oe, re);
      return yf(u, o, n, oe, m, r, Me, re);
    }),
    ve = [];
  return (
    _.forEach((oe, je) => {
      if (v || !h.some(ae => ae.route.id === oe.routeId) || j.has(je)) return;
      let Te = f.fetchers.get(je),
        L = Te && Te.state !== 'idle' && Te.data === void 0,
        W = kn(q, oe.path, H);
      if (!W) {
        if (te && L) return;
        ve.push({
          key: je,
          routeId: oe.routeId,
          path: oe.path,
          matches: null,
          match: null,
          request: null,
          controller: null,
        });
        return;
      }
      if (R.has(je)) return;
      let re = ho(W, oe.path),
        Me = new AbortController(),
        T = cr(c, oe.path, Me.signal),
        Q = null;
      if (w.has(je)) (w.delete(je), (Q = fr(u, o, T, W, re, m, r)));
      else if (L) S && (Q = fr(u, o, T, W, re, m, r));
      else {
        let ae = { ...x, defaultShouldRevalidate: le ? !1 : S };
        wo(re, ae) && (Q = fr(u, o, T, W, re, m, r, ae));
      }
      Q &&
        ve.push({
          key: je,
          routeId: oe.routeId,
          path: oe.path,
          matches: Q,
          match: re,
          request: T,
          controller: Me,
        });
    }),
    { dsMatches: ne, revalidatingFetchers: ve }
  );
}
function pf(n, r, u) {
  if (n.lazy) return !0;
  if (!n.loader) return !1;
  let o = r != null && n.id in r,
    c = u != null && u[n.id] !== void 0;
  return !o && c
    ? !1
    : typeof n.loader == 'function' && n.loader.hydrate === !0
      ? !0
      : !o && !c;
}
function K1(n, r, u) {
  let o = !r || u.route.id !== r.route.id,
    c = !n.hasOwnProperty(u.route.id);
  return o || c;
}
function Z1(n, r) {
  let u = n.route.path;
  return (
    n.pathname !== r.pathname ||
    (u != null && u.endsWith('*') && n.params['*'] !== r.params['*'])
  );
}
function wo(n, r) {
  if (n.route.shouldRevalidate) {
    let u = n.route.shouldRevalidate(r);
    if (typeof u == 'boolean') return u;
  }
  return r.defaultShouldRevalidate;
}
function $0(n, r, u, o, c, f) {
  let h;
  if (n) {
    let m = o[n];
    (Le(m, `No route found to patch children into: routeId = ${n}`),
      m.children || (m.children = []),
      (h = m.children));
  } else h = u;
  let p = [],
    g = [];
  if (
    (r.forEach(m => {
      let v = h.find(S => $g(m, S));
      v ? g.push({ existingRoute: v, newRoute: m }) : p.push(m);
    }),
    p.length > 0)
  ) {
    let m = Oi(p, c, [n || '_', 'patch', String(h?.length || '0')], o);
    h.push(...m);
  }
  if (f && g.length > 0)
    for (let m = 0; m < g.length; m++) {
      let { existingRoute: v, newRoute: S } = g[m],
        w = v,
        [j] = Oi([S], c, [], {}, !0);
      Object.assign(w, {
        element: j.element ? j.element : w.element,
        errorElement: j.errorElement ? j.errorElement : w.errorElement,
        hydrateFallbackElement: j.hydrateFallbackElement
          ? j.hydrateFallbackElement
          : w.hydrateFallbackElement,
      });
    }
}
function $g(n, r) {
  return 'id' in n && 'id' in r && n.id === r.id
    ? !0
    : n.index === r.index &&
        n.path === r.path &&
        n.caseSensitive === r.caseSensitive
      ? (!n.children || n.children.length === 0) &&
        (!r.children || r.children.length === 0)
        ? !0
        : n.children.every((u, o) => r.children?.some(c => $g(u, c)))
      : !1;
}
var X0 = new WeakMap(),
  Xg = ({ key: n, route: r, manifest: u, mapRouteProperties: o }) => {
    let c = u[r.id];
    if (
      (Le(c, 'No route found in manifest'),
      !c.lazy || typeof c.lazy != 'object')
    )
      return;
    let f = c.lazy[n];
    if (!f) return;
    let h = X0.get(c);
    h || ((h = {}), X0.set(c, h));
    let p = h[n];
    if (p) return p;
    let g = (async () => {
      let m = m1(n),
        S = c[n] !== void 0 && n !== 'hasErrorBoundary';
      if (m)
        (St(
          !m,
          'Route property ' +
            n +
            ' is not a supported lazy route property. This property will be ignored.'
        ),
          (h[n] = Promise.resolve()));
      else if (S)
        St(
          !1,
          `Route "${c.id}" has a static property "${n}" defined. The lazy property will be ignored.`
        );
      else {
        let w = await f();
        w != null && (Object.assign(c, { [n]: w }), Object.assign(c, o(c)));
      }
      typeof c.lazy == 'object' &&
        ((c.lazy[n] = void 0),
        Object.values(c.lazy).every(w => w === void 0) && (c.lazy = void 0));
    })();
    return ((h[n] = g), g);
  },
  Q0 = new WeakMap();
function J1(n, r, u, o, c) {
  let f = u[n.id];
  if ((Le(f, 'No route found in manifest'), !n.lazy))
    return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
  if (typeof n.lazy == 'function') {
    let v = Q0.get(f);
    if (v) return { lazyRoutePromise: v, lazyHandlerPromise: v };
    let S = (async () => {
      Le(typeof n.lazy == 'function', 'No lazy route function found');
      let w = await n.lazy(),
        j = {};
      for (let _ in w) {
        let R = w[_];
        if (R === void 0) continue;
        let q = p1(_),
          te = f[_] !== void 0 && _ !== 'hasErrorBoundary';
        q
          ? St(
              !q,
              'Route property ' +
                _ +
                ' is not a supported property to be returned from a lazy route function. This property will be ignored.'
            )
          : te
            ? St(
                !te,
                `Route "${f.id}" has a static property "${_}" defined but its lazy function is also returning a value for this property. The lazy route property "${_}" will be ignored.`
              )
            : (j[_] = R);
      }
      (Object.assign(f, j), Object.assign(f, { ...o(f), lazy: void 0 }));
    })();
    return (
      Q0.set(f, S),
      S.catch(() => {}),
      { lazyRoutePromise: S, lazyHandlerPromise: S }
    );
  }
  let h = Object.keys(n.lazy),
    p = [],
    g;
  for (let v of h) {
    if (c && c.includes(v)) continue;
    let S = Xg({ key: v, route: n, manifest: u, mapRouteProperties: o });
    S && (p.push(S), v === r && (g = S));
  }
  let m = p.length > 0 ? Promise.all(p).then(() => {}) : void 0;
  return (
    m?.catch(() => {}),
    g?.catch(() => {}),
    { lazyRoutePromise: m, lazyHandlerPromise: g }
  );
}
async function K0(n) {
  let r = n.matches.filter(c => c.shouldLoad),
    u = {};
  return (
    (await Promise.all(r.map(c => c.resolve()))).forEach((c, f) => {
      u[r[f].route.id] = c;
    }),
    u
  );
}
async function P1(n) {
  return n.matches.some(r => r.route.unstable_middleware)
    ? Qg(
        n,
        !1,
        () => K0(n),
        (r, u) => ({ [u]: { type: 'error', result: r } })
      )
    : K0(n);
}
async function Qg(n, r, u, o) {
  let { matches: c, request: f, params: h, context: p } = n,
    g = { handlerResult: void 0 };
  try {
    let m = c.flatMap(S =>
        S.route.unstable_middleware
          ? S.route.unstable_middleware.map(w => [S.route.id, w])
          : []
      ),
      v = await Kg({ request: f, params: h, context: p }, m, r, g, u);
    return r ? v : g.handlerResult;
  } catch (m) {
    if (!g.middlewareError) throw m;
    let v = await o(g.middlewareError.error, g.middlewareError.routeId);
    return g.handlerResult ? Object.assign(g.handlerResult, v) : v;
  }
}
async function Kg(n, r, u, o, c, f = 0) {
  let { request: h } = n;
  if (h.signal.aborted)
    throw h.signal.reason
      ? h.signal.reason
      : new Error(
          `Request aborted without an \`AbortSignal.reason\`: ${h.method} ${h.url}`
        );
  let p = r[f];
  if (!p) return ((o.handlerResult = await c()), o.handlerResult);
  let [g, m] = p,
    v = !1,
    S,
    w = async () => {
      if (v) throw new Error('You may only call `next()` once per middleware');
      ((v = !0), await Kg(n, r, u, o, c, f + 1));
    };
  try {
    let j = await m(
      { request: n.request, params: n.params, context: n.context },
      w
    );
    return v ? (j === void 0 ? S : j) : w();
  } catch (j) {
    throw (
      o.middlewareError
        ? o.middlewareError.error !== j &&
          (o.middlewareError = { routeId: g, error: j })
        : (o.middlewareError = { routeId: g, error: j }),
      j
    );
  }
}
function Zg(n, r, u, o, c) {
  let f = Xg({
      key: 'unstable_middleware',
      route: o.route,
      manifest: r,
      mapRouteProperties: n,
    }),
    h = J1(o.route, Xt(u.method) ? 'action' : 'loader', r, n, c);
  return {
    middleware: f,
    route: h.lazyRoutePromise,
    handler: h.lazyHandlerPromise,
  };
}
function yf(n, r, u, o, c, f, h, p = null) {
  let g = !1,
    m = Zg(n, r, u, o, c);
  return {
    ...o,
    _lazyPromises: m,
    shouldLoad: h,
    unstable_shouldRevalidateArgs: p,
    unstable_shouldCallHandler(v) {
      return (
        (g = !0),
        p
          ? typeof v == 'boolean'
            ? wo(o, { ...p, defaultShouldRevalidate: v })
            : wo(o, p)
          : h
      );
    },
    resolve(v) {
      return g || h || (v && !Xt(u.method) && (o.route.lazy || o.route.loader))
        ? W1({
            request: u,
            match: o,
            lazyHandlerPromise: m?.handler,
            lazyRoutePromise: m?.route,
            handlerOverride: v,
            scopedContext: f,
          })
        : Promise.resolve({ type: 'data', result: void 0 });
    },
  };
}
function fr(n, r, u, o, c, f, h, p = null) {
  return o.map(g =>
    g.route.id !== c.route.id
      ? {
          ...g,
          shouldLoad: !1,
          unstable_shouldRevalidateArgs: p,
          unstable_shouldCallHandler: () => !1,
          _lazyPromises: Zg(n, r, u, g, f),
          resolve: () => Promise.resolve({ type: 'data', result: void 0 }),
        }
      : yf(n, r, u, g, f, h, !0, p)
  );
}
async function F1(n, r, u, o, c, f) {
  u.some(m => m._lazyPromises?.middleware) &&
    (await Promise.all(u.map(m => m._lazyPromises?.middleware)));
  let h = { request: r, params: u[0].params, context: c, matches: u },
    g = await n({
      ...h,
      fetcherKey: o,
      unstable_runClientMiddleware: m => {
        let v = h;
        return Qg(
          v,
          !1,
          () =>
            m({
              ...v,
              fetcherKey: o,
              unstable_runClientMiddleware: () => {
                throw new Error(
                  'Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler'
                );
              },
            }),
          (S, w) => ({ [w]: { type: 'error', result: S } })
        );
      },
    });
  try {
    await Promise.all(
      u.flatMap(m => [m._lazyPromises?.handler, m._lazyPromises?.route])
    );
  } catch {}
  return g;
}
async function W1({
  request: n,
  match: r,
  lazyHandlerPromise: u,
  lazyRoutePromise: o,
  handlerOverride: c,
  scopedContext: f,
}) {
  let h,
    p,
    g = Xt(n.method),
    m = g ? 'action' : 'loader',
    v = S => {
      let w,
        j = new Promise((q, H) => (w = H));
      ((p = () => w()), n.signal.addEventListener('abort', p));
      let _ = q =>
          typeof S != 'function'
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${m}" [routeId: ${r.route.id}]`
                )
              )
            : S(
                { request: n, params: r.params, context: f },
                ...(q !== void 0 ? [q] : [])
              ),
        R = (async () => {
          try {
            return { type: 'data', result: await (c ? c(H => _(H)) : _()) };
          } catch (q) {
            return { type: 'error', result: q };
          }
        })();
      return Promise.race([R, j]);
    };
  try {
    let S = g ? r.route.action : r.route.loader;
    if (u || o)
      if (S) {
        let w,
          [j] = await Promise.all([
            v(S).catch(_ => {
              w = _;
            }),
            u,
            o,
          ]);
        if (w !== void 0) throw w;
        h = j;
      } else {
        await u;
        let w = g ? r.route.action : r.route.loader;
        if (w) [h] = await Promise.all([v(w), o]);
        else if (m === 'action') {
          let j = new URL(n.url),
            _ = j.pathname + j.search;
          throw ya(405, { method: n.method, pathname: _, routeId: r.route.id });
        } else return { type: 'data', result: void 0 };
      }
    else if (S) h = await v(S);
    else {
      let w = new URL(n.url),
        j = w.pathname + w.search;
      throw ya(404, { pathname: j });
    }
  } catch (S) {
    return { type: 'error', result: S };
  } finally {
    p && n.signal.removeEventListener('abort', p);
  }
  return h;
}
async function I1(n) {
  let { result: r, type: u } = n;
  if (Pg(r)) {
    let o;
    try {
      let c = r.headers.get('Content-Type');
      c && /\bapplication\/json\b/.test(c)
        ? r.body == null
          ? (o = null)
          : (o = await r.json())
        : (o = await r.text());
    } catch (c) {
      return { type: 'error', error: c };
    }
    return u === 'error'
      ? {
          type: 'error',
          error: new So(r.status, r.statusText, o),
          statusCode: r.status,
          headers: r.headers,
        }
      : { type: 'data', data: o, statusCode: r.status, headers: r.headers };
  }
  return u === 'error'
    ? eg(r)
      ? r.data instanceof Error
        ? {
            type: 'error',
            error: r.data,
            statusCode: r.init?.status,
            headers: r.init?.headers ? new Headers(r.init.headers) : void 0,
          }
        : {
            type: 'error',
            error: new So(r.init?.status || 500, void 0, r.data),
            statusCode: ji(r) ? r.status : void 0,
            headers: r.init?.headers ? new Headers(r.init.headers) : void 0,
          }
      : { type: 'error', error: r, statusCode: ji(r) ? r.status : void 0 }
    : eg(r)
      ? {
          type: 'data',
          data: r.data,
          statusCode: r.init?.status,
          headers: r.init?.headers ? new Headers(r.init.headers) : void 0,
        }
      : { type: 'data', data: r };
}
function eb(n, r, u, o, c) {
  let f = n.headers.get('Location');
  if (
    (Le(
      f,
      'Redirects returned/thrown from loaders/actions must have a Location header'
    ),
    !jf(f))
  ) {
    let h = o.slice(0, o.findIndex(p => p.route.id === u) + 1);
    ((f = gf(new URL(r.url), h, c, f)), n.headers.set('Location', f));
  }
  return n;
}
function Z0(n, r, u) {
  if (jf(n)) {
    let o = n,
      c = o.startsWith('//') ? new URL(r.protocol + o) : new URL(o),
      f = ba(c.pathname, u) != null;
    if (c.origin === r.origin && f) return c.pathname + c.search + c.hash;
  }
  return n;
}
function cr(n, r, u, o) {
  let c = n.createURL(Jg(r)).toString(),
    f = { signal: u };
  if (o && Xt(o.formMethod)) {
    let { formMethod: h, formEncType: p } = o;
    ((f.method = h.toUpperCase()),
      p === 'application/json'
        ? ((f.headers = new Headers({ 'Content-Type': p })),
          (f.body = JSON.stringify(o.json)))
        : p === 'text/plain'
          ? (f.body = o.text)
          : p === 'application/x-www-form-urlencoded' && o.formData
            ? (f.body = vf(o.formData))
            : (f.body = o.formData));
  }
  return new Request(c, f);
}
function vf(n) {
  let r = new URLSearchParams();
  for (let [u, o] of n.entries())
    r.append(u, typeof o == 'string' ? o : o.name);
  return r;
}
function J0(n) {
  let r = new FormData();
  for (let [u, o] of n.entries()) r.append(u, o);
  return r;
}
function tb(n, r, u, o = !1, c = !1) {
  let f = {},
    h = null,
    p,
    g = !1,
    m = {},
    v = u && aa(u[1]) ? u[1].error : void 0;
  return (
    n.forEach(S => {
      if (!(S.route.id in r)) return;
      let w = S.route.id,
        j = r[w];
      if (
        (Le(!gl(j), 'Cannot handle redirect results in processLoaderData'),
        aa(j))
      ) {
        let _ = j.error;
        if ((v !== void 0 && ((_ = v), (v = void 0)), (h = h || {}), c))
          h[w] = _;
        else {
          let R = ml(n, w);
          h[R.route.id] == null && (h[R.route.id] = _);
        }
        (o || (f[w] = Vg),
          g || ((g = !0), (p = ji(j.error) ? j.error.status : 500)),
          j.headers && (m[w] = j.headers));
      } else
        ((f[w] = j.data),
          j.statusCode && j.statusCode !== 200 && !g && (p = j.statusCode),
          j.headers && (m[w] = j.headers));
    }),
    v !== void 0 && u && ((h = { [u[0]]: v }), u[2] && (f[u[2]] = void 0)),
    { loaderData: f, errors: h, statusCode: p || 200, loaderHeaders: m }
  );
}
function P0(n, r, u, o, c, f) {
  let { loaderData: h, errors: p } = tb(r, u, o);
  return (
    c
      .filter(g => !g.matches || g.matches.some(m => m.shouldLoad))
      .forEach(g => {
        let { key: m, match: v, controller: S } = g,
          w = f[m];
        if (
          (Le(w, 'Did not find corresponding fetcher result'),
          !(S && S.signal.aborted))
        )
          if (aa(w)) {
            let j = ml(n.matches, v?.route.id);
            ((p && p[j.route.id]) || (p = { ...p, [j.route.id]: w.error }),
              n.fetchers.delete(m));
          } else if (gl(w)) Le(!1, 'Unhandled fetcher revalidation redirect');
          else {
            let j = Bn(w.data);
            n.fetchers.set(m, j);
          }
      }),
    { loaderData: h, errors: p }
  );
}
function F0(n, r, u, o) {
  let c = Object.entries(r)
    .filter(([, f]) => f !== Vg)
    .reduce((f, [h, p]) => ((f[h] = p), f), {});
  for (let f of u) {
    let h = f.route.id;
    if (
      (!r.hasOwnProperty(h) &&
        n.hasOwnProperty(h) &&
        f.route.loader &&
        (c[h] = n[h]),
      o && o.hasOwnProperty(h))
    )
      break;
  }
  return c;
}
function W0(n) {
  return n
    ? aa(n[1])
      ? { actionData: {} }
      : { actionData: { [n[0]]: n[1].data } }
    : {};
}
function ml(n, r) {
  return (
    (r ? n.slice(0, n.findIndex(o => o.route.id === r) + 1) : [...n])
      .reverse()
      .find(o => o.route.hasErrorBoundary === !0) || n[0]
  );
}
function I0(n) {
  let r =
    n.length === 1
      ? n[0]
      : n.find(u => u.index || !u.path || u.path === '/') || {
          id: '__shim-error-route__',
        };
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: r }],
    route: r,
  };
}
function ya(
  n,
  { pathname: r, routeId: u, method: o, type: c, message: f } = {}
) {
  let h = 'Unknown Server Error',
    p = 'Unknown @remix-run/router error';
  return (
    n === 400
      ? ((h = 'Bad Request'),
        o && r && u
          ? (p = `You made a ${o} request to "${r}" but did not provide a \`loader\` for route "${u}", so there is no way to handle the request.`)
          : c === 'invalid-body' && (p = 'Unable to encode submission body'))
      : n === 403
        ? ((h = 'Forbidden'), (p = `Route "${u}" does not match URL "${r}"`))
        : n === 404
          ? ((h = 'Not Found'), (p = `No route matches URL "${r}"`))
          : n === 405 &&
            ((h = 'Method Not Allowed'),
            o && r && u
              ? (p = `You made a ${o.toUpperCase()} request to "${r}" but did not provide an \`action\` for route "${u}", so there is no way to handle the request.`)
              : o && (p = `Invalid request method "${o.toUpperCase()}"`)),
    new So(n || 500, h, new Error(p), !0)
  );
}
function io(n) {
  let r = Object.entries(n);
  for (let u = r.length - 1; u >= 0; u--) {
    let [o, c] = r[u];
    if (gl(c)) return { key: o, result: c };
  }
}
function Jg(n) {
  let r = typeof n == 'string' ? Vn(n) : n;
  return Yn({ ...r, hash: '' });
}
function ab(n, r) {
  return n.pathname !== r.pathname || n.search !== r.search
    ? !1
    : n.hash === ''
      ? r.hash !== ''
      : n.hash === r.hash
        ? !0
        : r.hash !== '';
}
function nb(n) {
  return Pg(n.result) && q1.has(n.result.status);
}
function aa(n) {
  return n.type === 'error';
}
function gl(n) {
  return (n && n.type) === 'redirect';
}
function eg(n) {
  return (
    typeof n == 'object' &&
    n != null &&
    'type' in n &&
    'data' in n &&
    'init' in n &&
    n.type === 'DataWithResponseInit'
  );
}
function Pg(n) {
  return (
    n != null &&
    typeof n.status == 'number' &&
    typeof n.statusText == 'string' &&
    typeof n.headers == 'object' &&
    typeof n.body < 'u'
  );
}
function lb(n) {
  return k1.has(n.toUpperCase());
}
function Xt(n) {
  return B1.has(n.toUpperCase());
}
function _f(n) {
  return new URLSearchParams(n).getAll('index').some(r => r === '');
}
function ho(n, r) {
  let u = typeof r == 'string' ? Vn(r).search : r.search;
  if (n[n.length - 1].route.index && _f(u || '')) return n[n.length - 1];
  let o = qg(n);
  return o[o.length - 1];
}
function tg(n) {
  let {
    formMethod: r,
    formAction: u,
    formEncType: o,
    text: c,
    formData: f,
    json: h,
  } = n;
  if (!(!r || !u || !o)) {
    if (c != null)
      return {
        formMethod: r,
        formAction: u,
        formEncType: o,
        formData: void 0,
        json: void 0,
        text: c,
      };
    if (f != null)
      return {
        formMethod: r,
        formAction: u,
        formEncType: o,
        formData: f,
        json: void 0,
        text: void 0,
      };
    if (h !== void 0)
      return {
        formMethod: r,
        formAction: u,
        formEncType: o,
        formData: void 0,
        json: h,
        text: void 0,
      };
  }
}
function lf(n, r) {
  return r
    ? {
        state: 'loading',
        location: n,
        formMethod: r.formMethod,
        formAction: r.formAction,
        formEncType: r.formEncType,
        formData: r.formData,
        json: r.json,
        text: r.text,
      }
    : {
        state: 'loading',
        location: n,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function rb(n, r) {
  return {
    state: 'submitting',
    location: n,
    formMethod: r.formMethod,
    formAction: r.formAction,
    formEncType: r.formEncType,
    formData: r.formData,
    json: r.json,
    text: r.text,
  };
}
function vi(n, r) {
  return n
    ? {
        state: 'loading',
        formMethod: n.formMethod,
        formAction: n.formAction,
        formEncType: n.formEncType,
        formData: n.formData,
        json: n.json,
        text: n.text,
        data: r,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: r,
      };
}
function ib(n, r) {
  return {
    state: 'submitting',
    formMethod: n.formMethod,
    formAction: n.formAction,
    formEncType: n.formEncType,
    formData: n.formData,
    json: n.json,
    text: n.text,
    data: r ? r.data : void 0,
  };
}
function Bn(n) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: n,
  };
}
function ub(n, r) {
  try {
    let u = n.sessionStorage.getItem(Gg);
    if (u) {
      let o = JSON.parse(u);
      for (let [c, f] of Object.entries(o || {}))
        f && Array.isArray(f) && r.set(c, new Set(f || []));
    }
  } catch {}
}
function ob(n, r) {
  if (r.size > 0) {
    let u = {};
    for (let [o, c] of r) u[o] = [...c];
    try {
      n.sessionStorage.setItem(Gg, JSON.stringify(u));
    } catch (o) {
      St(
        !1,
        `Failed to save applied view transitions in sessionStorage (${o}).`
      );
    }
  }
}
function sb() {
  let n,
    r,
    u = new Promise((o, c) => {
      ((n = async f => {
        o(f);
        try {
          await u;
        } catch {}
      }),
        (r = async f => {
          c(f);
          try {
            await u;
          } catch {}
        }));
    });
  return { promise: u, resolve: n, reject: r };
}
var bl = U.createContext(null);
bl.displayName = 'DataRouter';
var Li = U.createContext(null);
Li.displayName = 'DataRouterState';
U.createContext(!1);
var Df = U.createContext({ isTransitioning: !1 });
Df.displayName = 'ViewTransition';
var Fg = U.createContext(new Map());
Fg.displayName = 'Fetchers';
var cb = U.createContext(null);
cb.displayName = 'Await';
var Ya = U.createContext(null);
Ya.displayName = 'Navigation';
var Mo = U.createContext(null);
Mo.displayName = 'Location';
var Ga = U.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Ga.displayName = 'Route';
var zf = U.createContext(null);
zf.displayName = 'RouteError';
function fb(n, { relative: r } = {}) {
  Le(
    Bi(),
    'useHref() may be used only in the context of a <Router> component.'
  );
  let { basename: u, navigator: o } = U.useContext(Ya),
    { hash: c, pathname: f, search: h } = ki(n, { relative: r }),
    p = f;
  return (
    u !== '/' && (p = f === '/' ? u : ka([u, f])),
    o.createHref({ pathname: p, search: h, hash: c })
  );
}
function Bi() {
  return U.useContext(Mo) != null;
}
function $n() {
  return (
    Le(
      Bi(),
      'useLocation() may be used only in the context of a <Router> component.'
    ),
    U.useContext(Mo).location
  );
}
var Wg =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Ig(n) {
  U.useContext(Ya).static || U.useLayoutEffect(n);
}
function ep() {
  let { isDataRoute: n } = U.useContext(Ga);
  return n ? Cb() : db();
}
function db() {
  Le(
    Bi(),
    'useNavigate() may be used only in the context of a <Router> component.'
  );
  let n = U.useContext(bl),
    { basename: r, navigator: u } = U.useContext(Ya),
    { matches: o } = U.useContext(Ga),
    { pathname: c } = $n(),
    f = JSON.stringify(Mf(o)),
    h = U.useRef(!1);
  return (
    Ig(() => {
      h.current = !0;
    }),
    U.useCallback(
      (g, m = {}) => {
        if ((St(h.current, Wg), !h.current)) return;
        if (typeof g == 'number') {
          u.go(g);
          return;
        }
        let v = Of(g, JSON.parse(f), c, m.relative === 'path');
        (n == null &&
          r !== '/' &&
          (v.pathname = v.pathname === '/' ? r : ka([r, v.pathname])),
          (m.replace ? u.replace : u.push)(v, m.state, m));
      },
      [r, u, f, c, n]
    )
  );
}
var tp = U.createContext(null);
function Hi() {
  return U.useContext(tp);
}
function hb(n) {
  let r = U.useContext(Ga).outlet;
  return r && U.createElement(tp.Provider, { value: n }, r);
}
function ki(n, { relative: r } = {}) {
  let { matches: u } = U.useContext(Ga),
    { pathname: o } = $n(),
    c = JSON.stringify(Mf(u));
  return U.useMemo(() => Of(n, JSON.parse(c), o, r === 'path'), [n, c, o, r]);
}
function mb(n, r, u, o) {
  Le(
    Bi(),
    'useRoutes() may be used only in the context of a <Router> component.'
  );
  let { navigator: c } = U.useContext(Ya),
    { matches: f } = U.useContext(Ga),
    h = f[f.length - 1],
    p = h ? h.params : {},
    g = h ? h.pathname : '/',
    m = h ? h.pathnameBase : '/',
    v = h && h.route;
  {
    let H = (v && v.path) || '';
    ap(
      g,
      !v || H.endsWith('*') || H.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H === '/' ? '*' : `${H}/*`}">.`
    );
  }
  let S = $n(),
    w;
  w = S;
  let j = w.pathname || '/',
    _ = j;
  if (m !== '/') {
    let H = m.replace(/^\//, '').split('/');
    _ = '/' + j.replace(/^\//, '').split('/').slice(H.length).join('/');
  }
  let R = kn(n, { pathname: _ });
  return (
    St(
      v || R != null,
      `No routes matched location "${w.pathname}${w.search}${w.hash}" `
    ),
    St(
      R == null ||
        R[R.length - 1].route.element !== void 0 ||
        R[R.length - 1].route.Component !== void 0 ||
        R[R.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ),
    bb(
      R &&
        R.map(H =>
          Object.assign({}, H, {
            params: Object.assign({}, p, H.params),
            pathname: ka([
              m,
              c.encodeLocation
                ? c.encodeLocation(H.pathname).pathname
                : H.pathname,
            ]),
            pathnameBase:
              H.pathnameBase === '/'
                ? m
                : ka([
                    m,
                    c.encodeLocation
                      ? c.encodeLocation(H.pathnameBase).pathname
                      : H.pathnameBase,
                  ]),
          })
        ),
      f,
      u,
      o
    )
  );
}
function gb() {
  let n = Tb(),
    r = ji(n)
      ? `${n.status} ${n.statusText}`
      : n instanceof Error
        ? n.message
        : JSON.stringify(n),
    u = n instanceof Error ? n.stack : null,
    o = 'rgba(200,200,200, 0.5)',
    c = { padding: '0.5rem', backgroundColor: o },
    f = { padding: '2px 4px', backgroundColor: o },
    h = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', n),
    (h = U.createElement(
      U.Fragment,
      null,
      U.createElement('p', null, '💿 Hey developer 👋'),
      U.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        U.createElement('code', { style: f }, 'ErrorBoundary'),
        ' or',
        ' ',
        U.createElement('code', { style: f }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    U.createElement(
      U.Fragment,
      null,
      U.createElement('h2', null, 'Unexpected Application Error!'),
      U.createElement('h3', { style: { fontStyle: 'italic' } }, r),
      u ? U.createElement('pre', { style: c }, u) : null,
      h
    )
  );
}
var pb = U.createElement(gb, null),
  yb = class extends U.Component {
    constructor(n) {
      (super(n),
        (this.state = {
          location: n.location,
          revalidation: n.revalidation,
          error: n.error,
        }));
    }
    static getDerivedStateFromError(n) {
      return { error: n };
    }
    static getDerivedStateFromProps(n, r) {
      return r.location !== n.location ||
        (r.revalidation !== 'idle' && n.revalidation === 'idle')
        ? { error: n.error, location: n.location, revalidation: n.revalidation }
        : {
            error: n.error !== void 0 ? n.error : r.error,
            location: r.location,
            revalidation: n.revalidation || r.revalidation,
          };
    }
    componentDidCatch(n, r) {
      console.error(
        'React Router caught the following error during render',
        n,
        r
      );
    }
    render() {
      return this.state.error !== void 0
        ? U.createElement(
            Ga.Provider,
            { value: this.props.routeContext },
            U.createElement(zf.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function vb({ routeContext: n, match: r, children: u }) {
  let o = U.useContext(bl);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = r.route.id),
    U.createElement(Ga.Provider, { value: n }, u)
  );
}
function bb(n, r = [], u = null, o = null) {
  if (n == null) {
    if (!u) return null;
    if (u.errors) n = u.matches;
    else if (r.length === 0 && !u.initialized && u.matches.length > 0)
      n = u.matches;
    else return null;
  }
  let c = n,
    f = u?.errors;
  if (f != null) {
    let g = c.findIndex(m => m.route.id && f?.[m.route.id] !== void 0);
    (Le(
      g >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(',')}`
    ),
      (c = c.slice(0, Math.min(c.length, g + 1))));
  }
  let h = !1,
    p = -1;
  if (u)
    for (let g = 0; g < c.length; g++) {
      let m = c[g];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (p = g),
        m.route.id)
      ) {
        let { loaderData: v, errors: S } = u,
          w =
            m.route.loader &&
            !v.hasOwnProperty(m.route.id) &&
            (!S || S[m.route.id] === void 0);
        if (m.route.lazy || w) {
          ((h = !0), p >= 0 ? (c = c.slice(0, p + 1)) : (c = [c[0]]));
          break;
        }
      }
    }
  return c.reduceRight((g, m, v) => {
    let S,
      w = !1,
      j = null,
      _ = null;
    u &&
      ((S = f && m.route.id ? f[m.route.id] : void 0),
      (j = m.route.errorElement || pb),
      h &&
        (p < 0 && v === 0
          ? (ap(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (w = !0),
            (_ = null))
          : p === v &&
            ((w = !0), (_ = m.route.hydrateFallbackElement || null))));
    let R = r.concat(c.slice(0, v + 1)),
      q = () => {
        let H;
        return (
          S
            ? (H = j)
            : w
              ? (H = _)
              : m.route.Component
                ? (H = U.createElement(m.route.Component, null))
                : m.route.element
                  ? (H = m.route.element)
                  : (H = g),
          U.createElement(vb, {
            match: m,
            routeContext: { outlet: g, matches: R, isDataRoute: u != null },
            children: H,
          })
        );
      };
    return u && (m.route.ErrorBoundary || m.route.errorElement || v === 0)
      ? U.createElement(yb, {
          location: u.location,
          revalidation: u.revalidation,
          component: j,
          error: S,
          children: q(),
          routeContext: { outlet: null, matches: R, isDataRoute: !0 },
        })
      : q();
  }, null);
}
function Nf(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function xb(n) {
  let r = U.useContext(bl);
  return (Le(r, Nf(n)), r);
}
function Sb(n) {
  let r = U.useContext(Li);
  return (Le(r, Nf(n)), r);
}
function wb(n) {
  let r = U.useContext(Ga);
  return (Le(r, Nf(n)), r);
}
function Uf(n) {
  let r = wb(n),
    u = r.matches[r.matches.length - 1];
  return (
    Le(
      u.route.id,
      `${n} can only be used on routes that contain a unique "id"`
    ),
    u.route.id
  );
}
function Eb() {
  return Uf('useRouteId');
}
function Tb() {
  let n = U.useContext(zf),
    r = Sb('useRouteError'),
    u = Uf('useRouteError');
  return n !== void 0 ? n : r.errors?.[u];
}
function Cb() {
  let { router: n } = xb('useNavigate'),
    r = Uf('useNavigate'),
    u = U.useRef(!1);
  return (
    Ig(() => {
      u.current = !0;
    }),
    U.useCallback(
      async (c, f = {}) => {
        (St(u.current, Wg),
          u.current &&
            (typeof c == 'number'
              ? n.navigate(c)
              : await n.navigate(c, { fromRouteId: r, ...f })));
      },
      [n, r]
    )
  );
}
var ag = {};
function ap(n, r, u) {
  !r && !ag[n] && ((ag[n] = !0), St(!1, u));
}
var ng = {};
function lg(n, r) {
  !n && !ng[r] && ((ng[r] = !0), console.warn(r));
}
function Rb(n) {
  let r = {
    hasErrorBoundary:
      n.hasErrorBoundary || n.ErrorBoundary != null || n.errorElement != null,
  };
  return (
    n.Component &&
      (n.element &&
        St(
          !1,
          'You should not include both `Component` and `element` on your route - `Component` will be used.'
        ),
      Object.assign(r, {
        element: U.createElement(n.Component),
        Component: void 0,
      })),
    n.HydrateFallback &&
      (n.hydrateFallbackElement &&
        St(
          !1,
          'You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.'
        ),
      Object.assign(r, {
        hydrateFallbackElement: U.createElement(n.HydrateFallback),
        HydrateFallback: void 0,
      })),
    n.ErrorBoundary &&
      (n.errorElement &&
        St(
          !1,
          'You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.'
        ),
      Object.assign(r, {
        errorElement: U.createElement(n.ErrorBoundary),
        ErrorBoundary: void 0,
      })),
    r
  );
}
var Ab = ['HydrateFallback', 'hydrateFallbackElement'],
  Mb = class {
    constructor() {
      ((this.status = 'pending'),
        (this.promise = new Promise((n, r) => {
          ((this.resolve = u => {
            this.status === 'pending' && ((this.status = 'resolved'), n(u));
          }),
            (this.reject = u => {
              this.status === 'pending' && ((this.status = 'rejected'), r(u));
            }));
        })));
    }
  };
function Ob({ router: n, flushSync: r }) {
  let [u, o] = U.useState(n.state),
    [c, f] = U.useState(),
    [h, p] = U.useState({ isTransitioning: !1 }),
    [g, m] = U.useState(),
    [v, S] = U.useState(),
    [w, j] = U.useState(),
    _ = U.useRef(new Map()),
    R = U.useCallback(
      (X, { deletedFetchers: F, flushSync: J, viewTransitionOpts: M }) => {
        (X.fetchers.forEach((fe, le) => {
          fe.data !== void 0 && _.current.set(le, fe.data);
        }),
          F.forEach(fe => _.current.delete(fe)),
          lg(
            J === !1 || r != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
          ));
        let I =
          n.window != null &&
          n.window.document != null &&
          typeof n.window.document.startViewTransition == 'function';
        if (
          (lg(
            M == null || I,
            'You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.'
          ),
          !M || !I)
        ) {
          r && J ? r(() => o(X)) : U.startTransition(() => o(X));
          return;
        }
        if (r && J) {
          r(() => {
            (v && (g && g.resolve(), v.skipTransition()),
              p({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: M.currentLocation,
                nextLocation: M.nextLocation,
              }));
          });
          let fe = n.window.document.startViewTransition(() => {
            r(() => o(X));
          });
          (fe.finished.finally(() => {
            r(() => {
              (m(void 0), S(void 0), f(void 0), p({ isTransitioning: !1 }));
            });
          }),
            r(() => S(fe)));
          return;
        }
        v
          ? (g && g.resolve(),
            v.skipTransition(),
            j({
              state: X,
              currentLocation: M.currentLocation,
              nextLocation: M.nextLocation,
            }))
          : (f(X),
            p({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: M.currentLocation,
              nextLocation: M.nextLocation,
            }));
      },
      [n.window, r, v, g]
    );
  (U.useLayoutEffect(() => n.subscribe(R), [n, R]),
    U.useEffect(() => {
      h.isTransitioning && !h.flushSync && m(new Mb());
    }, [h]),
    U.useEffect(() => {
      if (g && c && n.window) {
        let X = c,
          F = g.promise,
          J = n.window.document.startViewTransition(async () => {
            (U.startTransition(() => o(X)), await F);
          });
        (J.finished.finally(() => {
          (m(void 0), S(void 0), f(void 0), p({ isTransitioning: !1 }));
        }),
          S(J));
      }
    }, [c, g, n.window]),
    U.useEffect(() => {
      g && c && u.location.key === c.location.key && g.resolve();
    }, [g, v, u.location, c]),
    U.useEffect(() => {
      !h.isTransitioning &&
        w &&
        (f(w.state),
        p({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: w.currentLocation,
          nextLocation: w.nextLocation,
        }),
        j(void 0));
    }, [h.isTransitioning, w]));
  let q = U.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: X => n.navigate(X),
        push: (X, F, J) =>
          n.navigate(X, {
            state: F,
            preventScrollReset: J?.preventScrollReset,
          }),
        replace: (X, F, J) =>
          n.navigate(X, {
            replace: !0,
            state: F,
            preventScrollReset: J?.preventScrollReset,
          }),
      }),
      [n]
    ),
    H = n.basename || '/',
    te = U.useMemo(
      () => ({ router: n, navigator: q, static: !1, basename: H }),
      [n, q, H]
    );
  return U.createElement(
    U.Fragment,
    null,
    U.createElement(
      bl.Provider,
      { value: te },
      U.createElement(
        Li.Provider,
        { value: u },
        U.createElement(
          Fg.Provider,
          { value: _.current },
          U.createElement(
            Df.Provider,
            { value: h },
            U.createElement(
              zb,
              {
                basename: H,
                location: u.location,
                navigationType: u.historyAction,
                navigator: q,
              },
              U.createElement(jb, {
                routes: n.routes,
                future: n.future,
                state: u,
              })
            )
          )
        )
      )
    ),
    null
  );
}
var jb = U.memo(_b);
function _b({ routes: n, future: r, state: u }) {
  return mb(n, void 0, u, r);
}
function Db(n) {
  return hb(n.context);
}
function zb({
  basename: n = '/',
  children: r = null,
  location: u,
  navigationType: o = 'POP',
  navigator: c,
  static: f = !1,
}) {
  Le(
    !Bi(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let h = n.replace(/^\/*/, '/'),
    p = U.useMemo(
      () => ({ basename: h, navigator: c, static: f, future: {} }),
      [h, c, f]
    );
  typeof u == 'string' && (u = Vn(u));
  let {
      pathname: g = '/',
      search: m = '',
      hash: v = '',
      state: S = null,
      key: w = 'default',
    } = u,
    j = U.useMemo(() => {
      let _ = ba(g, h);
      return _ == null
        ? null
        : {
            location: { pathname: _, search: m, hash: v, state: S, key: w },
            navigationType: o,
          };
    }, [h, g, m, v, S, w, o]);
  return (
    St(
      j != null,
      `<Router basename="${h}"> is not able to match the URL "${g}${m}${v}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    j == null
      ? null
      : U.createElement(
          Ya.Provider,
          { value: p },
          U.createElement(Mo.Provider, { children: r, value: j })
        )
  );
}
var mo = 'get',
  go = 'application/x-www-form-urlencoded';
function Oo(n) {
  return n != null && typeof n.tagName == 'string';
}
function Nb(n) {
  return Oo(n) && n.tagName.toLowerCase() === 'button';
}
function Ub(n) {
  return Oo(n) && n.tagName.toLowerCase() === 'form';
}
function Lb(n) {
  return Oo(n) && n.tagName.toLowerCase() === 'input';
}
function Bb(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function Hb(n, r) {
  return n.button === 0 && (!r || r === '_self') && !Bb(n);
}
var uo = null;
function kb() {
  if (uo === null)
    try {
      (new FormData(document.createElement('form'), 0), (uo = !1));
    } catch {
      uo = !0;
    }
  return uo;
}
var qb = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function rf(n) {
  return n != null && !qb.has(n)
    ? (St(
        !1,
        `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${go}"`
      ),
      null)
    : n;
}
function Yb(n, r) {
  let u, o, c, f, h;
  if (Ub(n)) {
    let p = n.getAttribute('action');
    ((o = p ? ba(p, r) : null),
      (u = n.getAttribute('method') || mo),
      (c = rf(n.getAttribute('enctype')) || go),
      (f = new FormData(n)));
  } else if (Nb(n) || (Lb(n) && (n.type === 'submit' || n.type === 'image'))) {
    let p = n.form;
    if (p == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let g = n.getAttribute('formaction') || p.getAttribute('action');
    if (
      ((o = g ? ba(g, r) : null),
      (u = n.getAttribute('formmethod') || p.getAttribute('method') || mo),
      (c =
        rf(n.getAttribute('formenctype')) ||
        rf(p.getAttribute('enctype')) ||
        go),
      (f = new FormData(p, n)),
      !kb())
    ) {
      let { name: m, type: v, value: S } = n;
      if (v === 'image') {
        let w = m ? `${m}.` : '';
        (f.append(`${w}x`, '0'), f.append(`${w}y`, '0'));
      } else m && f.append(m, S);
    }
  } else {
    if (Oo(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((u = mo), (o = null), (c = go), (h = n));
  }
  return (
    f && c === 'text/plain' && ((h = f), (f = void 0)),
    { action: o, method: u.toLowerCase(), encType: c, formData: f, body: h }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function Lf(n, r) {
  if (n === !1 || n === null || typeof n > 'u') throw new Error(r);
}
function Gb(n, r, u) {
  let o =
    typeof n == 'string'
      ? new URL(
          n,
          typeof window > 'u' ? 'server://singlefetch/' : window.location.origin
        )
      : n;
  return (
    o.pathname === '/'
      ? (o.pathname = `_root.${u}`)
      : r && ba(o.pathname, r) === '/'
        ? (o.pathname = `${r.replace(/\/$/, '')}/_root.${u}`)
        : (o.pathname = `${o.pathname.replace(/\/$/, '')}.${u}`),
    o
  );
}
async function Vb(n, r) {
  if (n.id in r) return r[n.id];
  try {
    let u = await import(n.module);
    return ((r[n.id] = u), u);
  } catch (u) {
    return (
      console.error(
        `Error loading route module \`${n.module}\`, reloading page...`
      ),
      console.error(u),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function $b(n) {
  return n == null
    ? !1
    : n.href == null
      ? n.rel === 'preload' &&
        typeof n.imageSrcSet == 'string' &&
        typeof n.imageSizes == 'string'
      : typeof n.rel == 'string' && typeof n.href == 'string';
}
async function Xb(n, r, u) {
  let o = await Promise.all(
    n.map(async c => {
      let f = r.routes[c.route.id];
      if (f) {
        let h = await Vb(f, u);
        return h.links ? h.links() : [];
      }
      return [];
    })
  );
  return Jb(
    o
      .flat(1)
      .filter($b)
      .filter(c => c.rel === 'stylesheet' || c.rel === 'preload')
      .map(c =>
        c.rel === 'stylesheet'
          ? { ...c, rel: 'prefetch', as: 'style' }
          : { ...c, rel: 'prefetch' }
      )
  );
}
function rg(n, r, u, o, c, f) {
  let h = (g, m) => (u[m] ? g.route.id !== u[m].route.id : !0),
    p = (g, m) =>
      u[m].pathname !== g.pathname ||
      (u[m].route.path?.endsWith('*') && u[m].params['*'] !== g.params['*']);
  return f === 'assets'
    ? r.filter((g, m) => h(g, m) || p(g, m))
    : f === 'data'
      ? r.filter((g, m) => {
          let v = o.routes[g.route.id];
          if (!v || !v.hasLoader) return !1;
          if (h(g, m) || p(g, m)) return !0;
          if (g.route.shouldRevalidate) {
            let S = g.route.shouldRevalidate({
              currentUrl: new URL(
                c.pathname + c.search + c.hash,
                window.origin
              ),
              currentParams: u[0]?.params || {},
              nextUrl: new URL(n, window.origin),
              nextParams: g.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof S == 'boolean') return S;
          }
          return !0;
        })
      : [];
}
function Qb(n, r, { includeHydrateFallback: u } = {}) {
  return Kb(
    n
      .map(o => {
        let c = r.routes[o.route.id];
        if (!c) return [];
        let f = [c.module];
        return (
          c.clientActionModule && (f = f.concat(c.clientActionModule)),
          c.clientLoaderModule && (f = f.concat(c.clientLoaderModule)),
          u &&
            c.hydrateFallbackModule &&
            (f = f.concat(c.hydrateFallbackModule)),
          c.imports && (f = f.concat(c.imports)),
          f
        );
      })
      .flat(1)
  );
}
function Kb(n) {
  return [...new Set(n)];
}
function Zb(n) {
  let r = {},
    u = Object.keys(n).sort();
  for (let o of u) r[o] = n[o];
  return r;
}
function Jb(n, r) {
  let u = new Set();
  return (
    new Set(r),
    n.reduce((o, c) => {
      let f = JSON.stringify(Zb(c));
      return (u.has(f) || (u.add(f), o.push({ key: f, link: c })), o);
    }, [])
  );
}
function np() {
  let n = U.useContext(bl);
  return (
    Lf(
      n,
      'You must render this element inside a <DataRouterContext.Provider> element'
    ),
    n
  );
}
function Pb() {
  let n = U.useContext(Li);
  return (
    Lf(
      n,
      'You must render this element inside a <DataRouterStateContext.Provider> element'
    ),
    n
  );
}
var Bf = U.createContext(void 0);
Bf.displayName = 'FrameworkContext';
function lp() {
  let n = U.useContext(Bf);
  return (
    Lf(n, 'You must render this element inside a <HydratedRouter> element'),
    n
  );
}
function Fb(n, r) {
  let u = U.useContext(Bf),
    [o, c] = U.useState(!1),
    [f, h] = U.useState(!1),
    {
      onFocus: p,
      onBlur: g,
      onMouseEnter: m,
      onMouseLeave: v,
      onTouchStart: S,
    } = r,
    w = U.useRef(null);
  (U.useEffect(() => {
    if ((n === 'render' && h(!0), n === 'viewport')) {
      let R = H => {
          H.forEach(te => {
            h(te.isIntersecting);
          });
        },
        q = new IntersectionObserver(R, { threshold: 0.5 });
      return (
        w.current && q.observe(w.current),
        () => {
          q.disconnect();
        }
      );
    }
  }, [n]),
    U.useEffect(() => {
      if (o) {
        let R = setTimeout(() => {
          h(!0);
        }, 100);
        return () => {
          clearTimeout(R);
        };
      }
    }, [o]));
  let j = () => {
      c(!0);
    },
    _ = () => {
      (c(!1), h(!1));
    };
  return u
    ? n !== 'intent'
      ? [f, w, {}]
      : [
          f,
          w,
          {
            onFocus: bi(p, j),
            onBlur: bi(g, _),
            onMouseEnter: bi(m, j),
            onMouseLeave: bi(v, _),
            onTouchStart: bi(S, j),
          },
        ]
    : [!1, w, {}];
}
function bi(n, r) {
  return u => {
    (n && n(u), u.defaultPrevented || r(u));
  };
}
function Wb({ page: n, ...r }) {
  let { router: u } = np(),
    o = U.useMemo(() => kn(u.routes, n, u.basename), [u.routes, n, u.basename]);
  return o ? U.createElement(e2, { page: n, matches: o, ...r }) : null;
}
function Ib(n) {
  let { manifest: r, routeModules: u } = lp(),
    [o, c] = U.useState([]);
  return (
    U.useEffect(() => {
      let f = !1;
      return (
        Xb(n, r, u).then(h => {
          f || c(h);
        }),
        () => {
          f = !0;
        }
      );
    }, [n, r, u]),
    o
  );
}
function e2({ page: n, matches: r, ...u }) {
  let o = $n(),
    { manifest: c, routeModules: f } = lp(),
    { basename: h } = np(),
    { loaderData: p, matches: g } = Pb(),
    m = U.useMemo(() => rg(n, r, g, c, o, 'data'), [n, r, g, c, o]),
    v = U.useMemo(() => rg(n, r, g, c, o, 'assets'), [n, r, g, c, o]),
    S = U.useMemo(() => {
      if (n === o.pathname + o.search + o.hash) return [];
      let _ = new Set(),
        R = !1;
      if (
        (r.forEach(H => {
          let te = c.routes[H.route.id];
          !te ||
            !te.hasLoader ||
            ((!m.some(X => X.route.id === H.route.id) &&
              H.route.id in p &&
              f[H.route.id]?.shouldRevalidate) ||
            te.hasClientLoader
              ? (R = !0)
              : _.add(H.route.id));
        }),
        _.size === 0)
      )
        return [];
      let q = Gb(n, h, 'data');
      return (
        R &&
          _.size > 0 &&
          q.searchParams.set(
            '_routes',
            r
              .filter(H => _.has(H.route.id))
              .map(H => H.route.id)
              .join(',')
          ),
        [q.pathname + q.search]
      );
    }, [h, p, o, c, m, r, n, f]),
    w = U.useMemo(() => Qb(v, c), [v, c]),
    j = Ib(v);
  return U.createElement(
    U.Fragment,
    null,
    S.map(_ =>
      U.createElement('link', {
        key: _,
        rel: 'prefetch',
        as: 'fetch',
        href: _,
        ...u,
      })
    ),
    w.map(_ =>
      U.createElement('link', { key: _, rel: 'modulepreload', href: _, ...u })
    ),
    j.map(({ key: _, link: R }) => U.createElement('link', { key: _, ...R }))
  );
}
function t2(...n) {
  return r => {
    n.forEach(u => {
      typeof u == 'function' ? u(r) : u != null && (u.current = r);
    });
  };
}
var rp =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  rp && (window.__reactRouterVersion = '7.7.1');
} catch {}
function a2(n, r) {
  return X1({
    basename: r?.basename,
    unstable_getContext: r?.unstable_getContext,
    future: r?.future,
    history: c1({ window: r?.window }),
    hydrationData: n2(),
    routes: n,
    mapRouteProperties: Rb,
    hydrationRouteProperties: Ab,
    dataStrategy: r?.dataStrategy,
    patchRoutesOnNavigation: r?.patchRoutesOnNavigation,
    window: r?.window,
  }).initialize();
}
function n2() {
  let n = window?.__staticRouterHydrationData;
  return (n && n.errors && (n = { ...n, errors: l2(n.errors) }), n);
}
function l2(n) {
  if (!n) return null;
  let r = Object.entries(n),
    u = {};
  for (let [o, c] of r)
    if (c && c.__type === 'RouteErrorResponse')
      u[o] = new So(c.status, c.statusText, c.data, c.internal === !0);
    else if (c && c.__type === 'Error') {
      if (c.__subType) {
        let f = window[c.__subType];
        if (typeof f == 'function')
          try {
            let h = new f(c.message);
            ((h.stack = ''), (u[o] = h));
          } catch {}
      }
      if (u[o] == null) {
        let f = new Error(c.message);
        ((f.stack = ''), (u[o] = f));
      }
    } else u[o] = c;
  return u;
}
var ip = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  qn = U.forwardRef(function (
    {
      onClick: r,
      discover: u = 'render',
      prefetch: o = 'none',
      relative: c,
      reloadDocument: f,
      replace: h,
      state: p,
      target: g,
      to: m,
      preventScrollReset: v,
      viewTransition: S,
      ...w
    },
    j
  ) {
    let { basename: _ } = U.useContext(Ya),
      R = typeof m == 'string' && ip.test(m),
      q,
      H = !1;
    if (typeof m == 'string' && R && ((q = m), rp))
      try {
        let le = new URL(window.location.href),
          x = m.startsWith('//') ? new URL(le.protocol + m) : new URL(m),
          ne = ba(x.pathname, _);
        x.origin === le.origin && ne != null
          ? (m = ne + x.search + x.hash)
          : (H = !0);
      } catch {
        St(
          !1,
          `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let te = fb(m, { relative: c }),
      [X, F, J] = Fb(o, w),
      M = o2(m, {
        replace: h,
        state: p,
        target: g,
        preventScrollReset: v,
        relative: c,
        viewTransition: S,
      });
    function I(le) {
      (r && r(le), le.defaultPrevented || M(le));
    }
    let fe = U.createElement('a', {
      ...w,
      ...J,
      href: q || te,
      onClick: H || f ? r : I,
      ref: t2(j, F),
      target: g,
      'data-discover': !R && u === 'render' ? 'true' : void 0,
    });
    return X && !R
      ? U.createElement(U.Fragment, null, fe, U.createElement(Wb, { page: te }))
      : fe;
  });
qn.displayName = 'Link';
var r2 = U.forwardRef(function (
  {
    'aria-current': r = 'page',
    caseSensitive: u = !1,
    className: o = '',
    end: c = !1,
    style: f,
    to: h,
    viewTransition: p,
    children: g,
    ...m
  },
  v
) {
  let S = ki(h, { relative: m.relative }),
    w = $n(),
    j = U.useContext(Li),
    { navigator: _, basename: R } = U.useContext(Ya),
    q = j != null && h2(S) && p === !0,
    H = _.encodeLocation ? _.encodeLocation(S).pathname : S.pathname,
    te = w.pathname,
    X =
      j && j.navigation && j.navigation.location
        ? j.navigation.location.pathname
        : null;
  (u ||
    ((te = te.toLowerCase()),
    (X = X ? X.toLowerCase() : null),
    (H = H.toLowerCase())),
    X && R && (X = ba(X, R) || X));
  const F = H !== '/' && H.endsWith('/') ? H.length - 1 : H.length;
  let J = te === H || (!c && te.startsWith(H) && te.charAt(F) === '/'),
    M =
      X != null &&
      (X === H || (!c && X.startsWith(H) && X.charAt(H.length) === '/')),
    I = { isActive: J, isPending: M, isTransitioning: q },
    fe = J ? r : void 0,
    le;
  typeof o == 'function'
    ? (le = o(I))
    : (le = [
        o,
        J ? 'active' : null,
        M ? 'pending' : null,
        q ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '));
  let x = typeof f == 'function' ? f(I) : f;
  return U.createElement(
    qn,
    {
      ...m,
      'aria-current': fe,
      className: le,
      ref: v,
      style: x,
      to: h,
      viewTransition: p,
    },
    typeof g == 'function' ? g(I) : g
  );
});
r2.displayName = 'NavLink';
var i2 = U.forwardRef(
  (
    {
      discover: n = 'render',
      fetcherKey: r,
      navigate: u,
      reloadDocument: o,
      replace: c,
      state: f,
      method: h = mo,
      action: p,
      onSubmit: g,
      relative: m,
      preventScrollReset: v,
      viewTransition: S,
      ...w
    },
    j
  ) => {
    let _ = f2(),
      R = d2(p, { relative: m }),
      q = h.toLowerCase() === 'get' ? 'get' : 'post',
      H = typeof p == 'string' && ip.test(p),
      te = X => {
        if ((g && g(X), X.defaultPrevented)) return;
        X.preventDefault();
        let F = X.nativeEvent.submitter,
          J = F?.getAttribute('formmethod') || h;
        _(F || X.currentTarget, {
          fetcherKey: r,
          method: J,
          navigate: u,
          replace: c,
          state: f,
          relative: m,
          preventScrollReset: v,
          viewTransition: S,
        });
      };
    return U.createElement('form', {
      ref: j,
      method: q,
      action: R,
      onSubmit: o ? g : te,
      ...w,
      'data-discover': !H && n === 'render' ? 'true' : void 0,
    });
  }
);
i2.displayName = 'Form';
function u2(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function up(n) {
  let r = U.useContext(bl);
  return (Le(r, u2(n)), r);
}
function o2(
  n,
  {
    target: r,
    replace: u,
    state: o,
    preventScrollReset: c,
    relative: f,
    viewTransition: h,
  } = {}
) {
  let p = ep(),
    g = $n(),
    m = ki(n, { relative: f });
  return U.useCallback(
    v => {
      if (Hb(v, r)) {
        v.preventDefault();
        let S = u !== void 0 ? u : Yn(g) === Yn(m);
        p(n, {
          replace: S,
          state: o,
          preventScrollReset: c,
          relative: f,
          viewTransition: h,
        });
      }
    },
    [g, p, m, u, o, r, n, c, f, h]
  );
}
var s2 = 0,
  c2 = () => `__${String(++s2)}__`;
function f2() {
  let { router: n } = up('useSubmit'),
    { basename: r } = U.useContext(Ya),
    u = Eb();
  return U.useCallback(
    async (o, c = {}) => {
      let { action: f, method: h, encType: p, formData: g, body: m } = Yb(o, r);
      if (c.navigate === !1) {
        let v = c.fetcherKey || c2();
        await n.fetch(v, u, c.action || f, {
          preventScrollReset: c.preventScrollReset,
          formData: g,
          body: m,
          formMethod: c.method || h,
          formEncType: c.encType || p,
          flushSync: c.flushSync,
        });
      } else
        await n.navigate(c.action || f, {
          preventScrollReset: c.preventScrollReset,
          formData: g,
          body: m,
          formMethod: c.method || h,
          formEncType: c.encType || p,
          replace: c.replace,
          state: c.state,
          fromRouteId: u,
          flushSync: c.flushSync,
          viewTransition: c.viewTransition,
        });
    },
    [n, r, u]
  );
}
function d2(n, { relative: r } = {}) {
  let { basename: u } = U.useContext(Ya),
    o = U.useContext(Ga);
  Le(o, 'useFormAction must be used inside a RouteContext');
  let [c] = o.matches.slice(-1),
    f = { ...ki(n || '.', { relative: r }) },
    h = $n();
  if (n == null) {
    f.search = h.search;
    let p = new URLSearchParams(f.search),
      g = p.getAll('index');
    if (g.some(v => v === '')) {
      (p.delete('index'), g.filter(S => S).forEach(S => p.append('index', S)));
      let v = p.toString();
      f.search = v ? `?${v}` : '';
    }
  }
  return (
    (!n || n === '.') &&
      c.route.index &&
      (f.search = f.search ? f.search.replace(/^\?/, '?index&') : '?index'),
    u !== '/' && (f.pathname = f.pathname === '/' ? u : ka([u, f.pathname])),
    Yn(f)
  );
}
function h2(n, { relative: r } = {}) {
  let u = U.useContext(Df);
  Le(
    u != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = up('useViewTransitionState'),
    c = ki(n, { relative: r });
  if (!u.isTransitioning) return !1;
  let f = ba(u.currentLocation.pathname, o) || u.currentLocation.pathname,
    h = ba(u.nextLocation.pathname, o) || u.nextLocation.pathname;
  return xo(c.pathname, h) != null || xo(c.pathname, f) != null;
}
var m2 = Ug();
function g2(n) {
  return U.createElement(Ob, { flushSync: m2.flushSync, ...n });
}
var lr = {},
  ig;
function p2() {
  if (ig) return lr;
  ig = 1;
  var n =
    (lr && lr.__assign) ||
    function () {
      return (
        (n =
          Object.assign ||
          function (o) {
            for (var c, f = 1, h = arguments.length; f < h; f++) {
              c = arguments[f];
              for (var p in c)
                Object.prototype.hasOwnProperty.call(c, p) && (o[p] = c[p]);
            }
            return o;
          }),
        n.apply(this, arguments)
      );
    };
  Object.defineProperty(lr, '__esModule', { value: !0 });
  var r = Ao();
  function u(o, c, f) {
    var h = (0, r.useMemo)(
        function () {
          return n(
            {
              serializer: JSON.stringify,
              parser: JSON.parse,
              logger: console.log,
              syncData: !0,
            },
            f
          );
        },
        [f]
      ),
      p = h.serializer,
      g = h.parser,
      m = h.logger,
      v = h.syncData,
      S = (0, r.useRef)(null),
      w = (0, r.useState)(function () {
        if (typeof window > 'u') return c;
        try {
          S.current = window.localStorage.getItem(o);
          var R = S.current ? g(S.current) : c;
          return R;
        } catch (q) {
          return (m(q), c);
        }
      }),
      j = w[0],
      _ = w[1];
    return (
      (0, r.useEffect)(
        function () {
          if (!(typeof window > 'u')) {
            var R = function () {
              if (j !== void 0) {
                var q = p(j),
                  H = S.current;
                ((S.current = q),
                  window.localStorage.setItem(o, q),
                  window.dispatchEvent(
                    new StorageEvent('storage', {
                      storageArea: window.localStorage,
                      url: window.location.href,
                      key: o,
                      newValue: q,
                      oldValue: H,
                    })
                  ));
              } else
                (window.localStorage.removeItem(o),
                  window.dispatchEvent(
                    new StorageEvent('storage', {
                      storageArea: window.localStorage,
                      url: window.location.href,
                      key: o,
                    })
                  ));
            };
            try {
              R();
            } catch (q) {
              m(q);
            }
          }
        },
        [j]
      ),
      (0, r.useEffect)(
        function () {
          if (v) {
            var R = function (q) {
              if (!(q.key !== o || q.storageArea !== window.localStorage))
                try {
                  q.newValue !== S.current &&
                    ((S.current = q.newValue),
                    _(q.newValue ? g(q.newValue) : void 0));
                } catch (H) {
                  m(H);
                }
            };
            if (!(typeof window > 'u'))
              return (
                window.addEventListener('storage', R),
                function () {
                  return window.removeEventListener('storage', R);
                }
              );
          }
        },
        [o, v]
      ),
      [j, _]
    );
  }
  return ((lr.default = u), lr);
}
var y2 = p2();
const v2 = Ro(y2),
  ug = n => n,
  b2 = () => {
    let n = ug;
    return {
      configure(r) {
        n = r;
      },
      generate(r) {
        return n(r);
      },
      reset() {
        n = ug;
      },
    };
  },
  x2 = b2();
function vl(n, ...r) {
  const u = new URL(`https://mui.com/production-error/?code=${n}`);
  return (
    r.forEach(o => u.searchParams.append('args[]', o)),
    `Minified MUI error #${n}; visit ${u} for the full message.`
  );
}
function mr(n) {
  if (typeof n != 'string') throw new Error(vl(7));
  return n.charAt(0).toUpperCase() + n.slice(1);
}
var uf = { exports: {} },
  of,
  og;
function S2() {
  if (og) return of;
  og = 1;
  var n = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  return ((of = n), of);
}
var sf, sg;
function w2() {
  if (sg) return sf;
  sg = 1;
  var n = S2();
  function r() {}
  function u() {}
  return (
    (u.resetWarningCache = r),
    (sf = function () {
      function o(h, p, g, m, v, S) {
        if (S !== n) {
          var w = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
          );
          throw ((w.name = 'Invariant Violation'), w);
        }
      }
      o.isRequired = o;
      function c() {
        return o;
      }
      var f = {
        array: o,
        bigint: o,
        bool: o,
        func: o,
        number: o,
        object: o,
        string: o,
        symbol: o,
        any: o,
        arrayOf: c,
        element: o,
        elementType: o,
        instanceOf: c,
        node: o,
        objectOf: c,
        oneOf: c,
        oneOfType: c,
        shape: c,
        exact: c,
        checkPropTypes: u,
        resetWarningCache: r,
      };
      return ((f.PropTypes = f), f);
    }),
    sf
  );
}
var cg;
function E2() {
  return (cg || ((cg = 1), (uf.exports = w2()())), uf.exports);
}
var T2 = E2();
const pe = Ro(T2);
function op(n) {
  var r,
    u,
    o = '';
  if (typeof n == 'string' || typeof n == 'number') o += n;
  else if (typeof n == 'object')
    if (Array.isArray(n)) {
      var c = n.length;
      for (r = 0; r < c; r++)
        n[r] && (u = op(n[r])) && (o && (o += ' '), (o += u));
    } else for (u in n) n[u] && (o && (o += ' '), (o += u));
  return o;
}
function sp() {
  for (var n, r, u = 0, o = '', c = arguments.length; u < c; u++)
    (n = arguments[u]) && (r = op(n)) && (o && (o += ' '), (o += r));
  return o;
}
function C2(n, r, u = void 0) {
  const o = {};
  for (const c in n) {
    const f = n[c];
    let h = '',
      p = !0;
    for (let g = 0; g < f.length; g += 1) {
      const m = f[g];
      m &&
        ((h += (p === !0 ? '' : ' ') + r(m)),
        (p = !1),
        u && u[m] && (h += ' ' + u[m]));
    }
    o[c] = h;
  }
  return o;
}
var cf = { exports: {} },
  Je = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fg;
function R2() {
  if (fg) return Je;
  fg = 1;
  var n = Symbol.for('react.transitional.element'),
    r = Symbol.for('react.portal'),
    u = Symbol.for('react.fragment'),
    o = Symbol.for('react.strict_mode'),
    c = Symbol.for('react.profiler'),
    f = Symbol.for('react.consumer'),
    h = Symbol.for('react.context'),
    p = Symbol.for('react.forward_ref'),
    g = Symbol.for('react.suspense'),
    m = Symbol.for('react.suspense_list'),
    v = Symbol.for('react.memo'),
    S = Symbol.for('react.lazy'),
    w = Symbol.for('react.view_transition'),
    j = Symbol.for('react.client.reference');
  function _(R) {
    if (typeof R == 'object' && R !== null) {
      var q = R.$$typeof;
      switch (q) {
        case n:
          switch (((R = R.type), R)) {
            case u:
            case c:
            case o:
            case g:
            case m:
            case w:
              return R;
            default:
              switch (((R = R && R.$$typeof), R)) {
                case h:
                case p:
                case S:
                case v:
                  return R;
                case f:
                  return R;
                default:
                  return q;
              }
          }
        case r:
          return q;
      }
    }
  }
  return (
    (Je.ContextConsumer = f),
    (Je.ContextProvider = h),
    (Je.Element = n),
    (Je.ForwardRef = p),
    (Je.Fragment = u),
    (Je.Lazy = S),
    (Je.Memo = v),
    (Je.Portal = r),
    (Je.Profiler = c),
    (Je.StrictMode = o),
    (Je.Suspense = g),
    (Je.SuspenseList = m),
    (Je.isContextConsumer = function (R) {
      return _(R) === f;
    }),
    (Je.isContextProvider = function (R) {
      return _(R) === h;
    }),
    (Je.isElement = function (R) {
      return typeof R == 'object' && R !== null && R.$$typeof === n;
    }),
    (Je.isForwardRef = function (R) {
      return _(R) === p;
    }),
    (Je.isFragment = function (R) {
      return _(R) === u;
    }),
    (Je.isLazy = function (R) {
      return _(R) === S;
    }),
    (Je.isMemo = function (R) {
      return _(R) === v;
    }),
    (Je.isPortal = function (R) {
      return _(R) === r;
    }),
    (Je.isProfiler = function (R) {
      return _(R) === c;
    }),
    (Je.isStrictMode = function (R) {
      return _(R) === o;
    }),
    (Je.isSuspense = function (R) {
      return _(R) === g;
    }),
    (Je.isSuspenseList = function (R) {
      return _(R) === m;
    }),
    (Je.isValidElementType = function (R) {
      return (
        typeof R == 'string' ||
        typeof R == 'function' ||
        R === u ||
        R === c ||
        R === o ||
        R === g ||
        R === m ||
        (typeof R == 'object' &&
          R !== null &&
          (R.$$typeof === S ||
            R.$$typeof === v ||
            R.$$typeof === h ||
            R.$$typeof === f ||
            R.$$typeof === p ||
            R.$$typeof === j ||
            R.getModuleId !== void 0))
      );
    }),
    (Je.typeOf = _),
    Je
  );
}
var dg;
function A2() {
  return (dg || ((dg = 1), (cf.exports = R2())), cf.exports);
}
var cp = A2();
function cn(n) {
  if (typeof n != 'object' || n === null) return !1;
  const r = Object.getPrototypeOf(n);
  return (
    (r === null ||
      r === Object.prototype ||
      Object.getPrototypeOf(r) === null) &&
    !(Symbol.toStringTag in n) &&
    !(Symbol.iterator in n)
  );
}
function fp(n) {
  if (U.isValidElement(n) || cp.isValidElementType(n) || !cn(n)) return n;
  const r = {};
  return (
    Object.keys(n).forEach(u => {
      r[u] = fp(n[u]);
    }),
    r
  );
}
function la(n, r, u = { clone: !0 }) {
  const o = u.clone ? { ...n } : n;
  return (
    cn(n) &&
      cn(r) &&
      Object.keys(r).forEach(c => {
        U.isValidElement(r[c]) || cp.isValidElementType(r[c])
          ? (o[c] = r[c])
          : cn(r[c]) && Object.prototype.hasOwnProperty.call(n, c) && cn(n[c])
            ? (o[c] = la(n[c], r[c], u))
            : u.clone
              ? (o[c] = cn(r[c]) ? fp(r[c]) : r[c])
              : (o[c] = r[c]);
      }),
    o
  );
}
function Ai(n, r) {
  return r ? la(n, r, { clone: !1 }) : n;
}
function hg(n, r) {
  if (!n.containerQueries) return r;
  const u = Object.keys(r)
    .filter(o => o.startsWith('@container'))
    .sort((o, c) => {
      const f = /min-width:\s*([0-9.]+)/;
      return +(o.match(f)?.[1] || 0) - +(c.match(f)?.[1] || 0);
    });
  return u.length
    ? u.reduce(
        (o, c) => {
          const f = r[c];
          return (delete o[c], (o[c] = f), o);
        },
        { ...r }
      )
    : r;
}
function M2(n, r) {
  return (
    r === '@' ||
    (r.startsWith('@') &&
      (n.some(u => r.startsWith(`@${u}`)) || !!r.match(/^@\d/)))
  );
}
function O2(n, r) {
  const u = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!u) return null;
  const [, o, c] = u,
    f = Number.isNaN(+o) ? o || 0 : +o;
  return n.containerQueries(c).up(f);
}
function j2(n) {
  const r = (f, h) => f.replace('@media', h ? `@container ${h}` : '@container');
  function u(f, h) {
    ((f.up = (...p) => r(n.breakpoints.up(...p), h)),
      (f.down = (...p) => r(n.breakpoints.down(...p), h)),
      (f.between = (...p) => r(n.breakpoints.between(...p), h)),
      (f.only = (...p) => r(n.breakpoints.only(...p), h)),
      (f.not = (...p) => {
        const g = r(n.breakpoints.not(...p), h);
        return g.includes('not all and')
          ? g
              .replace('not all and ', '')
              .replace('min-width:', 'width<')
              .replace('max-width:', 'width>')
              .replace('and', 'or')
          : g;
      }));
  }
  const o = {},
    c = f => (u(o, f), o);
  return (u(c), { ...n, containerQueries: c });
}
const jo = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  mg = {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: n => `@media (min-width:${jo[n]}px)`,
  },
  _2 = {
    containerQueries: n => ({
      up: r => {
        let u = typeof r == 'number' ? r : jo[r] || r;
        return (
          typeof u == 'number' && (u = `${u}px`),
          n ? `@container ${n} (min-width:${u})` : `@container (min-width:${u})`
        );
      },
    }),
  };
function fn(n, r, u) {
  const o = n.theme || {};
  if (Array.isArray(r)) {
    const f = o.breakpoints || mg;
    return r.reduce((h, p, g) => ((h[f.up(f.keys[g])] = u(r[g])), h), {});
  }
  if (typeof r == 'object') {
    const f = o.breakpoints || mg;
    return Object.keys(r).reduce((h, p) => {
      if (M2(f.keys, p)) {
        const g = O2(o.containerQueries ? o : _2, p);
        g && (h[g] = u(r[p], p));
      } else if (Object.keys(f.values || jo).includes(p)) {
        const g = f.up(p);
        h[g] = u(r[p], p);
      } else {
        const g = p;
        h[g] = r[g];
      }
      return h;
    }, {});
  }
  return u(r);
}
function D2(n = {}) {
  return (
    n.keys?.reduce((u, o) => {
      const c = n.up(o);
      return ((u[c] = {}), u);
    }, {}) || {}
  );
}
function gg(n, r) {
  return n.reduce((u, o) => {
    const c = u[o];
    return ((!c || Object.keys(c).length === 0) && delete u[o], u);
  }, r);
}
function _o(n, r, u = !0) {
  if (!r || typeof r != 'string') return null;
  if (n && n.vars && u) {
    const o = `vars.${r}`
      .split('.')
      .reduce((c, f) => (c && c[f] ? c[f] : null), n);
    if (o != null) return o;
  }
  return r.split('.').reduce((o, c) => (o && o[c] != null ? o[c] : null), n);
}
function Eo(n, r, u, o = u) {
  let c;
  return (
    typeof n == 'function'
      ? (c = n(u))
      : Array.isArray(n)
        ? (c = n[u] || o)
        : (c = _o(n, u) || o),
    r && (c = r(c, o, n)),
    c
  );
}
function mt(n) {
  const { prop: r, cssProperty: u = n.prop, themeKey: o, transform: c } = n,
    f = h => {
      if (h[r] == null) return null;
      const p = h[r],
        g = h.theme,
        m = _o(g, o) || {};
      return fn(h, p, S => {
        let w = Eo(m, c, S);
        return (
          S === w &&
            typeof S == 'string' &&
            (w = Eo(m, c, `${r}${S === 'default' ? '' : mr(S)}`, S)),
          u === !1 ? w : { [u]: w }
        );
      });
    };
  return ((f.propTypes = {}), (f.filterProps = [r]), f);
}
function z2(n) {
  const r = {};
  return u => (r[u] === void 0 && (r[u] = n(u)), r[u]);
}
const N2 = { m: 'margin', p: 'padding' },
  U2 = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom'],
  },
  pg = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  L2 = z2(n => {
    if (n.length > 2)
      if (pg[n]) n = pg[n];
      else return [n];
    const [r, u] = n.split(''),
      o = N2[r],
      c = U2[u] || '';
    return Array.isArray(c) ? c.map(f => o + f) : [o + c];
  }),
  Hf = [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'marginInline',
    'marginInlineStart',
    'marginInlineEnd',
    'marginBlock',
    'marginBlockStart',
    'marginBlockEnd',
  ],
  kf = [
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'paddingInline',
    'paddingInlineStart',
    'paddingInlineEnd',
    'paddingBlock',
    'paddingBlockStart',
    'paddingBlockEnd',
  ];
[...Hf, ...kf];
function qi(n, r, u, o) {
  const c = _o(n, r, !0) ?? u;
  return typeof c == 'number' || typeof c == 'string'
    ? f =>
        typeof f == 'string'
          ? f
          : typeof c == 'string'
            ? c.startsWith('var(') && f === 0
              ? 0
              : c.startsWith('var(') && f === 1
                ? c
                : `calc(${f} * ${c})`
            : c * f
    : Array.isArray(c)
      ? f => {
          if (typeof f == 'string') return f;
          const h = Math.abs(f),
            p = c[h];
          return f >= 0
            ? p
            : typeof p == 'number'
              ? -p
              : typeof p == 'string' && p.startsWith('var(')
                ? `calc(-1 * ${p})`
                : `-${p}`;
        }
      : typeof c == 'function'
        ? c
        : () => {};
}
function qf(n) {
  return qi(n, 'spacing', 8);
}
function Yi(n, r) {
  return typeof r == 'string' || r == null ? r : n(r);
}
function B2(n, r) {
  return u => n.reduce((o, c) => ((o[c] = Yi(r, u)), o), {});
}
function H2(n, r, u, o) {
  if (!r.includes(u)) return null;
  const c = L2(u),
    f = B2(c, o),
    h = n[u];
  return fn(n, h, f);
}
function dp(n, r) {
  const u = qf(n.theme);
  return Object.keys(n)
    .map(o => H2(n, r, o, u))
    .reduce(Ai, {});
}
function ct(n) {
  return dp(n, Hf);
}
ct.propTypes = {};
ct.filterProps = Hf;
function ft(n) {
  return dp(n, kf);
}
ft.propTypes = {};
ft.filterProps = kf;
function Do(...n) {
  const r = n.reduce(
      (o, c) => (
        c.filterProps.forEach(f => {
          o[f] = c;
        }),
        o
      ),
      {}
    ),
    u = o => Object.keys(o).reduce((c, f) => (r[f] ? Ai(c, r[f](o)) : c), {});
  return (
    (u.propTypes = {}),
    (u.filterProps = n.reduce((o, c) => o.concat(c.filterProps), [])),
    u
  );
}
function va(n) {
  return typeof n != 'number' ? n : `${n}px solid`;
}
function xa(n, r) {
  return mt({ prop: n, themeKey: 'borders', transform: r });
}
const k2 = xa('border', va),
  q2 = xa('borderTop', va),
  Y2 = xa('borderRight', va),
  G2 = xa('borderBottom', va),
  V2 = xa('borderLeft', va),
  $2 = xa('borderColor'),
  X2 = xa('borderTopColor'),
  Q2 = xa('borderRightColor'),
  K2 = xa('borderBottomColor'),
  Z2 = xa('borderLeftColor'),
  J2 = xa('outline', va),
  P2 = xa('outlineColor'),
  zo = n => {
    if (n.borderRadius !== void 0 && n.borderRadius !== null) {
      const r = qi(n.theme, 'shape.borderRadius', 4),
        u = o => ({ borderRadius: Yi(r, o) });
      return fn(n, n.borderRadius, u);
    }
    return null;
  };
zo.propTypes = {};
zo.filterProps = ['borderRadius'];
Do(k2, q2, Y2, G2, V2, $2, X2, Q2, K2, Z2, zo, J2, P2);
const No = n => {
  if (n.gap !== void 0 && n.gap !== null) {
    const r = qi(n.theme, 'spacing', 8),
      u = o => ({ gap: Yi(r, o) });
    return fn(n, n.gap, u);
  }
  return null;
};
No.propTypes = {};
No.filterProps = ['gap'];
const Uo = n => {
  if (n.columnGap !== void 0 && n.columnGap !== null) {
    const r = qi(n.theme, 'spacing', 8),
      u = o => ({ columnGap: Yi(r, o) });
    return fn(n, n.columnGap, u);
  }
  return null;
};
Uo.propTypes = {};
Uo.filterProps = ['columnGap'];
const Lo = n => {
  if (n.rowGap !== void 0 && n.rowGap !== null) {
    const r = qi(n.theme, 'spacing', 8),
      u = o => ({ rowGap: Yi(r, o) });
    return fn(n, n.rowGap, u);
  }
  return null;
};
Lo.propTypes = {};
Lo.filterProps = ['rowGap'];
const F2 = mt({ prop: 'gridColumn' }),
  W2 = mt({ prop: 'gridRow' }),
  I2 = mt({ prop: 'gridAutoFlow' }),
  ex = mt({ prop: 'gridAutoColumns' }),
  tx = mt({ prop: 'gridAutoRows' }),
  ax = mt({ prop: 'gridTemplateColumns' }),
  nx = mt({ prop: 'gridTemplateRows' }),
  lx = mt({ prop: 'gridTemplateAreas' }),
  rx = mt({ prop: 'gridArea' });
Do(No, Uo, Lo, F2, W2, I2, ex, tx, ax, nx, lx, rx);
function dr(n, r) {
  return r === 'grey' ? r : n;
}
const ix = mt({ prop: 'color', themeKey: 'palette', transform: dr }),
  ux = mt({
    prop: 'bgcolor',
    cssProperty: 'backgroundColor',
    themeKey: 'palette',
    transform: dr,
  }),
  ox = mt({ prop: 'backgroundColor', themeKey: 'palette', transform: dr });
Do(ix, ux, ox);
function na(n) {
  return n <= 1 && n !== 0 ? `${n * 100}%` : n;
}
const sx = mt({ prop: 'width', transform: na }),
  Yf = n => {
    if (n.maxWidth !== void 0 && n.maxWidth !== null) {
      const r = u => {
        const o = n.theme?.breakpoints?.values?.[u] || jo[u];
        return o
          ? n.theme?.breakpoints?.unit !== 'px'
            ? { maxWidth: `${o}${n.theme.breakpoints.unit}` }
            : { maxWidth: o }
          : { maxWidth: na(u) };
      };
      return fn(n, n.maxWidth, r);
    }
    return null;
  };
Yf.filterProps = ['maxWidth'];
const cx = mt({ prop: 'minWidth', transform: na }),
  fx = mt({ prop: 'height', transform: na }),
  dx = mt({ prop: 'maxHeight', transform: na }),
  hx = mt({ prop: 'minHeight', transform: na });
mt({ prop: 'size', cssProperty: 'width', transform: na });
mt({ prop: 'size', cssProperty: 'height', transform: na });
const mx = mt({ prop: 'boxSizing' });
Do(sx, Yf, cx, fx, dx, hx, mx);
const Bo = {
  border: { themeKey: 'borders', transform: va },
  borderTop: { themeKey: 'borders', transform: va },
  borderRight: { themeKey: 'borders', transform: va },
  borderBottom: { themeKey: 'borders', transform: va },
  borderLeft: { themeKey: 'borders', transform: va },
  borderColor: { themeKey: 'palette' },
  borderTopColor: { themeKey: 'palette' },
  borderRightColor: { themeKey: 'palette' },
  borderBottomColor: { themeKey: 'palette' },
  borderLeftColor: { themeKey: 'palette' },
  outline: { themeKey: 'borders', transform: va },
  outlineColor: { themeKey: 'palette' },
  borderRadius: { themeKey: 'shape.borderRadius', style: zo },
  color: { themeKey: 'palette', transform: dr },
  bgcolor: {
    themeKey: 'palette',
    cssProperty: 'backgroundColor',
    transform: dr,
  },
  backgroundColor: { themeKey: 'palette', transform: dr },
  p: { style: ft },
  pt: { style: ft },
  pr: { style: ft },
  pb: { style: ft },
  pl: { style: ft },
  px: { style: ft },
  py: { style: ft },
  padding: { style: ft },
  paddingTop: { style: ft },
  paddingRight: { style: ft },
  paddingBottom: { style: ft },
  paddingLeft: { style: ft },
  paddingX: { style: ft },
  paddingY: { style: ft },
  paddingInline: { style: ft },
  paddingInlineStart: { style: ft },
  paddingInlineEnd: { style: ft },
  paddingBlock: { style: ft },
  paddingBlockStart: { style: ft },
  paddingBlockEnd: { style: ft },
  m: { style: ct },
  mt: { style: ct },
  mr: { style: ct },
  mb: { style: ct },
  ml: { style: ct },
  mx: { style: ct },
  my: { style: ct },
  margin: { style: ct },
  marginTop: { style: ct },
  marginRight: { style: ct },
  marginBottom: { style: ct },
  marginLeft: { style: ct },
  marginX: { style: ct },
  marginY: { style: ct },
  marginInline: { style: ct },
  marginInlineStart: { style: ct },
  marginInlineEnd: { style: ct },
  marginBlock: { style: ct },
  marginBlockStart: { style: ct },
  marginBlockEnd: { style: ct },
  displayPrint: {
    cssProperty: !1,
    transform: n => ({ '@media print': { display: n } }),
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: No },
  rowGap: { style: Lo },
  columnGap: { style: Uo },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: 'zIndex' },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: 'shadows' },
  width: { transform: na },
  maxWidth: { style: Yf },
  minWidth: { transform: na },
  height: { transform: na },
  maxHeight: { transform: na },
  minHeight: { transform: na },
  boxSizing: {},
  font: { themeKey: 'font' },
  fontFamily: { themeKey: 'typography' },
  fontSize: { themeKey: 'typography' },
  fontStyle: { themeKey: 'typography' },
  fontWeight: { themeKey: 'typography' },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: 'typography' },
};
function gx(...n) {
  const r = n.reduce((o, c) => o.concat(Object.keys(c)), []),
    u = new Set(r);
  return n.every(o => u.size === Object.keys(o).length);
}
function px(n, r) {
  return typeof n == 'function' ? n(r) : n;
}
function yx() {
  function n(u, o, c, f) {
    const h = { [u]: o, theme: c },
      p = f[u];
    if (!p) return { [u]: o };
    const { cssProperty: g = u, themeKey: m, transform: v, style: S } = p;
    if (o == null) return null;
    if (m === 'typography' && o === 'inherit') return { [u]: o };
    const w = _o(c, m) || {};
    return S
      ? S(h)
      : fn(h, o, _ => {
          let R = Eo(w, v, _);
          return (
            _ === R &&
              typeof _ == 'string' &&
              (R = Eo(w, v, `${u}${_ === 'default' ? '' : mr(_)}`, _)),
            g === !1 ? R : { [g]: R }
          );
        });
  }
  function r(u) {
    const { sx: o, theme: c = {}, nested: f } = u || {};
    if (!o) return null;
    const h = c.unstable_sxConfig ?? Bo;
    function p(g) {
      let m = g;
      if (typeof g == 'function') m = g(c);
      else if (typeof g != 'object') return g;
      if (!m) return null;
      const v = D2(c.breakpoints),
        S = Object.keys(v);
      let w = v;
      return (
        Object.keys(m).forEach(j => {
          const _ = px(m[j], c);
          if (_ != null)
            if (typeof _ == 'object')
              if (h[j]) w = Ai(w, n(j, _, c, h));
              else {
                const R = fn({ theme: c }, _, q => ({ [j]: q }));
                gx(R, _)
                  ? (w[j] = r({ sx: _, theme: c, nested: !0 }))
                  : (w = Ai(w, R));
              }
            else w = Ai(w, n(j, _, c, h));
        }),
        !f && c.modularCssLayers
          ? { '@layer sx': hg(c, gg(S, w)) }
          : hg(c, gg(S, w))
      );
    }
    return Array.isArray(o) ? o.map(p) : p(o);
  }
  return r;
}
const gr = yx();
gr.filterProps = ['sx'];
function bf() {
  return (
    (bf = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var r = 1; r < arguments.length; r++) {
            var u = arguments[r];
            for (var o in u) ({}).hasOwnProperty.call(u, o) && (n[o] = u[o]);
          }
          return n;
        }),
    bf.apply(null, arguments)
  );
}
function vx(n) {
  if (n.sheet) return n.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === n) return document.styleSheets[r];
}
function bx(n) {
  var r = document.createElement('style');
  return (
    r.setAttribute('data-emotion', n.key),
    n.nonce !== void 0 && r.setAttribute('nonce', n.nonce),
    r.appendChild(document.createTextNode('')),
    r.setAttribute('data-s', ''),
    r
  );
}
var xx = (function () {
    function n(u) {
      var o = this;
      ((this._insertTag = function (c) {
        var f;
        (o.tags.length === 0
          ? o.insertionPoint
            ? (f = o.insertionPoint.nextSibling)
            : o.prepend
              ? (f = o.container.firstChild)
              : (f = o.before)
          : (f = o.tags[o.tags.length - 1].nextSibling),
          o.container.insertBefore(c, f),
          o.tags.push(c));
      }),
        (this.isSpeedy = u.speedy === void 0 ? !0 : u.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = u.nonce),
        (this.key = u.key),
        (this.container = u.container),
        (this.prepend = u.prepend),
        (this.insertionPoint = u.insertionPoint),
        (this.before = null));
    }
    var r = n.prototype;
    return (
      (r.hydrate = function (o) {
        o.forEach(this._insertTag);
      }),
      (r.insert = function (o) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(bx(this));
        var c = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var f = vx(c);
          try {
            f.insertRule(o, f.cssRules.length);
          } catch {}
        } else c.appendChild(document.createTextNode(o));
        this.ctr++;
      }),
      (r.flush = function () {
        (this.tags.forEach(function (o) {
          var c;
          return (c = o.parentNode) == null ? void 0 : c.removeChild(o);
        }),
          (this.tags = []),
          (this.ctr = 0));
      }),
      n
    );
  })(),
  Ut = '-ms-',
  To = '-moz-',
  qe = '-webkit-',
  hp = 'comm',
  Gf = 'rule',
  Vf = 'decl',
  Sx = '@import',
  mp = '@keyframes',
  wx = '@layer',
  Ex = Math.abs,
  Ho = String.fromCharCode,
  Tx = Object.assign;
function Cx(n, r) {
  return Dt(n, 0) ^ 45
    ? (((((((r << 2) ^ Dt(n, 0)) << 2) ^ Dt(n, 1)) << 2) ^ Dt(n, 2)) << 2) ^
        Dt(n, 3)
    : 0;
}
function gp(n) {
  return n.trim();
}
function Rx(n, r) {
  return (n = r.exec(n)) ? n[0] : n;
}
function Ye(n, r, u) {
  return n.replace(r, u);
}
function xf(n, r) {
  return n.indexOf(r);
}
function Dt(n, r) {
  return n.charCodeAt(r) | 0;
}
function _i(n, r, u) {
  return n.slice(r, u);
}
function Ba(n) {
  return n.length;
}
function $f(n) {
  return n.length;
}
function oo(n, r) {
  return (r.push(n), n);
}
function Ax(n, r) {
  return n.map(r).join('');
}
var ko = 1,
  pr = 1,
  pp = 0,
  Qt = 0,
  xt = 0,
  yr = '';
function qo(n, r, u, o, c, f, h) {
  return {
    value: n,
    root: r,
    parent: u,
    type: o,
    props: c,
    children: f,
    line: ko,
    column: pr,
    length: h,
    return: '',
  };
}
function xi(n, r) {
  return Tx(qo('', null, null, '', null, null, 0), n, { length: -n.length }, r);
}
function Mx() {
  return xt;
}
function Ox() {
  return (
    (xt = Qt > 0 ? Dt(yr, --Qt) : 0),
    pr--,
    xt === 10 && ((pr = 1), ko--),
    xt
  );
}
function ra() {
  return (
    (xt = Qt < pp ? Dt(yr, Qt++) : 0),
    pr++,
    xt === 10 && ((pr = 1), ko++),
    xt
  );
}
function qa() {
  return Dt(yr, Qt);
}
function po() {
  return Qt;
}
function Gi(n, r) {
  return _i(yr, n, r);
}
function Di(n) {
  switch (n) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function yp(n) {
  return ((ko = pr = 1), (pp = Ba((yr = n))), (Qt = 0), []);
}
function vp(n) {
  return ((yr = ''), n);
}
function yo(n) {
  return gp(Gi(Qt - 1, Sf(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function jx(n) {
  for (; (xt = qa()) && xt < 33; ) ra();
  return Di(n) > 2 || Di(xt) > 3 ? '' : ' ';
}
function _x(n, r) {
  for (
    ;
    --r &&
    ra() &&
    !(xt < 48 || xt > 102 || (xt > 57 && xt < 65) || (xt > 70 && xt < 97));

  );
  return Gi(n, po() + (r < 6 && qa() == 32 && ra() == 32));
}
function Sf(n) {
  for (; ra(); )
    switch (xt) {
      case n:
        return Qt;
      case 34:
      case 39:
        n !== 34 && n !== 39 && Sf(xt);
        break;
      case 40:
        n === 41 && Sf(n);
        break;
      case 92:
        ra();
        break;
    }
  return Qt;
}
function Dx(n, r) {
  for (; ra() && n + xt !== 57; ) if (n + xt === 84 && qa() === 47) break;
  return '/*' + Gi(r, Qt - 1) + '*' + Ho(n === 47 ? n : ra());
}
function zx(n) {
  for (; !Di(qa()); ) ra();
  return Gi(n, Qt);
}
function Nx(n) {
  return vp(vo('', null, null, null, [''], (n = yp(n)), 0, [0], n));
}
function vo(n, r, u, o, c, f, h, p, g) {
  for (
    var m = 0,
      v = 0,
      S = h,
      w = 0,
      j = 0,
      _ = 0,
      R = 1,
      q = 1,
      H = 1,
      te = 0,
      X = '',
      F = c,
      J = f,
      M = o,
      I = X;
    q;

  )
    switch (((_ = te), (te = ra()))) {
      case 40:
        if (_ != 108 && Dt(I, S - 1) == 58) {
          xf((I += Ye(yo(te), '&', '&\f')), '&\f') != -1 && (H = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        I += yo(te);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        I += jx(_);
        break;
      case 92:
        I += _x(po() - 1, 7);
        continue;
      case 47:
        switch (qa()) {
          case 42:
          case 47:
            oo(Ux(Dx(ra(), po()), r, u), g);
            break;
          default:
            I += '/';
        }
        break;
      case 123 * R:
        p[m++] = Ba(I) * H;
      case 125 * R:
      case 59:
      case 0:
        switch (te) {
          case 0:
          case 125:
            q = 0;
          case 59 + v:
            (H == -1 && (I = Ye(I, /\f/g, '')),
              j > 0 &&
                Ba(I) - S &&
                oo(
                  j > 32
                    ? vg(I + ';', o, u, S - 1)
                    : vg(Ye(I, ' ', '') + ';', o, u, S - 2),
                  g
                ));
            break;
          case 59:
            I += ';';
          default:
            if (
              (oo((M = yg(I, r, u, m, v, c, p, X, (F = []), (J = []), S)), f),
              te === 123)
            )
              if (v === 0) vo(I, r, M, M, F, f, S, p, J);
              else
                switch (w === 99 && Dt(I, 3) === 110 ? 100 : w) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    vo(
                      n,
                      M,
                      M,
                      o && oo(yg(n, M, M, 0, 0, c, p, X, c, (F = []), S), J),
                      c,
                      J,
                      S,
                      p,
                      o ? F : J
                    );
                    break;
                  default:
                    vo(I, M, M, M, [''], J, 0, p, J);
                }
        }
        ((m = v = j = 0), (R = H = 1), (X = I = ''), (S = h));
        break;
      case 58:
        ((S = 1 + Ba(I)), (j = _));
      default:
        if (R < 1) {
          if (te == 123) --R;
          else if (te == 125 && R++ == 0 && Ox() == 125) continue;
        }
        switch (((I += Ho(te)), te * R)) {
          case 38:
            H = v > 0 ? 1 : ((I += '\f'), -1);
            break;
          case 44:
            ((p[m++] = (Ba(I) - 1) * H), (H = 1));
            break;
          case 64:
            (qa() === 45 && (I += yo(ra())),
              (w = qa()),
              (v = S = Ba((X = I += zx(po())))),
              te++);
            break;
          case 45:
            _ === 45 && Ba(I) == 2 && (R = 0);
        }
    }
  return f;
}
function yg(n, r, u, o, c, f, h, p, g, m, v) {
  for (
    var S = c - 1, w = c === 0 ? f : [''], j = $f(w), _ = 0, R = 0, q = 0;
    _ < o;
    ++_
  )
    for (var H = 0, te = _i(n, S + 1, (S = Ex((R = h[_])))), X = n; H < j; ++H)
      (X = gp(R > 0 ? w[H] + ' ' + te : Ye(te, /&\f/g, w[H]))) && (g[q++] = X);
  return qo(n, r, u, c === 0 ? Gf : p, g, m, v);
}
function Ux(n, r, u) {
  return qo(n, r, u, hp, Ho(Mx()), _i(n, 2, -2), 0);
}
function vg(n, r, u, o) {
  return qo(n, r, u, Vf, _i(n, 0, o), _i(n, o + 1, -1), o);
}
function hr(n, r) {
  for (var u = '', o = $f(n), c = 0; c < o; c++) u += r(n[c], c, n, r) || '';
  return u;
}
function Lx(n, r, u, o) {
  switch (n.type) {
    case wx:
      if (n.children.length) break;
    case Sx:
    case Vf:
      return (n.return = n.return || n.value);
    case hp:
      return '';
    case mp:
      return (n.return = n.value + '{' + hr(n.children, o) + '}');
    case Gf:
      n.value = n.props.join(',');
  }
  return Ba((u = hr(n.children, o)))
    ? (n.return = n.value + '{' + u + '}')
    : '';
}
function Bx(n) {
  var r = $f(n);
  return function (u, o, c, f) {
    for (var h = '', p = 0; p < r; p++) h += n[p](u, o, c, f) || '';
    return h;
  };
}
function Hx(n) {
  return function (r) {
    r.root || ((r = r.return) && n(r));
  };
}
function bp(n) {
  var r = Object.create(null);
  return function (u) {
    return (r[u] === void 0 && (r[u] = n(u)), r[u]);
  };
}
var kx = function (r, u, o) {
    for (
      var c = 0, f = 0;
      (c = f), (f = qa()), c === 38 && f === 12 && (u[o] = 1), !Di(f);

    )
      ra();
    return Gi(r, Qt);
  },
  qx = function (r, u) {
    var o = -1,
      c = 44;
    do
      switch (Di(c)) {
        case 0:
          (c === 38 && qa() === 12 && (u[o] = 1), (r[o] += kx(Qt - 1, u, o)));
          break;
        case 2:
          r[o] += yo(c);
          break;
        case 4:
          if (c === 44) {
            ((r[++o] = qa() === 58 ? '&\f' : ''), (u[o] = r[o].length));
            break;
          }
        default:
          r[o] += Ho(c);
      }
    while ((c = ra()));
    return r;
  },
  Yx = function (r, u) {
    return vp(qx(yp(r), u));
  },
  bg = new WeakMap(),
  Gx = function (r) {
    if (!(r.type !== 'rule' || !r.parent || r.length < 1)) {
      for (
        var u = r.value,
          o = r.parent,
          c = r.column === o.column && r.line === o.line;
        o.type !== 'rule';

      )
        if (((o = o.parent), !o)) return;
      if (
        !(r.props.length === 1 && u.charCodeAt(0) !== 58 && !bg.get(o)) &&
        !c
      ) {
        bg.set(r, !0);
        for (
          var f = [], h = Yx(u, f), p = o.props, g = 0, m = 0;
          g < h.length;
          g++
        )
          for (var v = 0; v < p.length; v++, m++)
            r.props[m] = f[g] ? h[g].replace(/&\f/g, p[v]) : p[v] + ' ' + h[g];
      }
    }
  },
  Vx = function (r) {
    if (r.type === 'decl') {
      var u = r.value;
      u.charCodeAt(0) === 108 &&
        u.charCodeAt(2) === 98 &&
        ((r.return = ''), (r.value = ''));
    }
  };
function xp(n, r) {
  switch (Cx(n, r)) {
    case 5103:
      return qe + 'print-' + n + n;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return qe + n + n;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return qe + n + To + n + Ut + n + n;
    case 6828:
    case 4268:
      return qe + n + Ut + n + n;
    case 6165:
      return qe + n + Ut + 'flex-' + n + n;
    case 5187:
      return (
        qe + n + Ye(n, /(\w+).+(:[^]+)/, qe + 'box-$1$2' + Ut + 'flex-$1$2') + n
      );
    case 5443:
      return qe + n + Ut + 'flex-item-' + Ye(n, /flex-|-self/, '') + n;
    case 4675:
      return (
        qe +
        n +
        Ut +
        'flex-line-pack' +
        Ye(n, /align-content|flex-|-self/, '') +
        n
      );
    case 5548:
      return qe + n + Ut + Ye(n, 'shrink', 'negative') + n;
    case 5292:
      return qe + n + Ut + Ye(n, 'basis', 'preferred-size') + n;
    case 6060:
      return (
        qe +
        'box-' +
        Ye(n, '-grow', '') +
        qe +
        n +
        Ut +
        Ye(n, 'grow', 'positive') +
        n
      );
    case 4554:
      return qe + Ye(n, /([^-])(transform)/g, '$1' + qe + '$2') + n;
    case 6187:
      return (
        Ye(
          Ye(Ye(n, /(zoom-|grab)/, qe + '$1'), /(image-set)/, qe + '$1'),
          n,
          ''
        ) + n
      );
    case 5495:
    case 3959:
      return Ye(n, /(image-set\([^]*)/, qe + '$1$`$1');
    case 4968:
      return (
        Ye(
          Ye(n, /(.+:)(flex-)?(.*)/, qe + 'box-pack:$3' + Ut + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        qe +
        n +
        n
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ye(n, /(.+)-inline(.+)/, qe + '$1$2') + n;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ba(n) - 1 - r > 6)
        switch (Dt(n, r + 1)) {
          case 109:
            if (Dt(n, r + 4) !== 45) break;
          case 102:
            return (
              Ye(
                n,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  qe +
                  '$2-$3$1' +
                  To +
                  (Dt(n, r + 3) == 108 ? '$3' : '$2-$3')
              ) + n
            );
          case 115:
            return ~xf(n, 'stretch')
              ? xp(Ye(n, 'stretch', 'fill-available'), r) + n
              : n;
        }
      break;
    case 4949:
      if (Dt(n, r + 1) !== 115) break;
    case 6444:
      switch (Dt(n, Ba(n) - 3 - (~xf(n, '!important') && 10))) {
        case 107:
          return Ye(n, ':', ':' + qe) + n;
        case 101:
          return (
            Ye(
              n,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                qe +
                (Dt(n, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                qe +
                '$2$3$1' +
                Ut +
                '$2box$3'
            ) + n
          );
      }
      break;
    case 5936:
      switch (Dt(n, r + 11)) {
        case 114:
          return qe + n + Ut + Ye(n, /[svh]\w+-[tblr]{2}/, 'tb') + n;
        case 108:
          return qe + n + Ut + Ye(n, /[svh]\w+-[tblr]{2}/, 'tb-rl') + n;
        case 45:
          return qe + n + Ut + Ye(n, /[svh]\w+-[tblr]{2}/, 'lr') + n;
      }
      return qe + n + Ut + n + n;
  }
  return n;
}
var $x = function (r, u, o, c) {
    if (r.length > -1 && !r.return)
      switch (r.type) {
        case Vf:
          r.return = xp(r.value, r.length);
          break;
        case mp:
          return hr([xi(r, { value: Ye(r.value, '@', '@' + qe) })], c);
        case Gf:
          if (r.length)
            return Ax(r.props, function (f) {
              switch (Rx(f, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return hr(
                    [xi(r, { props: [Ye(f, /:(read-\w+)/, ':' + To + '$1')] })],
                    c
                  );
                case '::placeholder':
                  return hr(
                    [
                      xi(r, {
                        props: [Ye(f, /:(plac\w+)/, ':' + qe + 'input-$1')],
                      }),
                      xi(r, { props: [Ye(f, /:(plac\w+)/, ':' + To + '$1')] }),
                      xi(r, { props: [Ye(f, /:(plac\w+)/, Ut + 'input-$1')] }),
                    ],
                    c
                  );
              }
              return '';
            });
      }
  },
  Xx = [$x],
  Qx = function (r) {
    var u = r.key;
    if (u === 'css') {
      var o = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(o, function (R) {
        var q = R.getAttribute('data-emotion');
        q.indexOf(' ') !== -1 &&
          (document.head.appendChild(R), R.setAttribute('data-s', ''));
      });
    }
    var c = r.stylisPlugins || Xx,
      f = {},
      h,
      p = [];
    ((h = r.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + u + ' "]'),
        function (R) {
          for (
            var q = R.getAttribute('data-emotion').split(' '), H = 1;
            H < q.length;
            H++
          )
            f[q[H]] = !0;
          p.push(R);
        }
      ));
    var g,
      m = [Gx, Vx];
    {
      var v,
        S = [
          Lx,
          Hx(function (R) {
            v.insert(R);
          }),
        ],
        w = Bx(m.concat(c, S)),
        j = function (q) {
          return hr(Nx(q), w);
        };
      g = function (q, H, te, X) {
        ((v = te),
          j(q ? q + '{' + H.styles + '}' : H.styles),
          X && (_.inserted[H.name] = !0));
      };
    }
    var _ = {
      key: u,
      sheet: new xx({
        key: u,
        container: h,
        nonce: r.nonce,
        speedy: r.speedy,
        prepend: r.prepend,
        insertionPoint: r.insertionPoint,
      }),
      nonce: r.nonce,
      inserted: f,
      registered: {},
      insert: g,
    };
    return (_.sheet.hydrate(p), _);
  },
  Kx = !0;
function Zx(n, r, u) {
  var o = '';
  return (
    u.split(' ').forEach(function (c) {
      n[c] !== void 0 ? r.push(n[c] + ';') : c && (o += c + ' ');
    }),
    o
  );
}
var Sp = function (r, u, o) {
    var c = r.key + '-' + u.name;
    (o === !1 || Kx === !1) &&
      r.registered[c] === void 0 &&
      (r.registered[c] = u.styles);
  },
  Jx = function (r, u, o) {
    Sp(r, u, o);
    var c = r.key + '-' + u.name;
    if (r.inserted[u.name] === void 0) {
      var f = u;
      do (r.insert(u === f ? '.' + c : '', f, r.sheet, !0), (f = f.next));
      while (f !== void 0);
    }
  };
function Px(n) {
  for (var r = 0, u, o = 0, c = n.length; c >= 4; ++o, c -= 4)
    ((u =
      (n.charCodeAt(o) & 255) |
      ((n.charCodeAt(++o) & 255) << 8) |
      ((n.charCodeAt(++o) & 255) << 16) |
      ((n.charCodeAt(++o) & 255) << 24)),
      (u = (u & 65535) * 1540483477 + (((u >>> 16) * 59797) << 16)),
      (u ^= u >>> 24),
      (r =
        ((u & 65535) * 1540483477 + (((u >>> 16) * 59797) << 16)) ^
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16))));
  switch (c) {
    case 3:
      r ^= (n.charCodeAt(o + 2) & 255) << 16;
    case 2:
      r ^= (n.charCodeAt(o + 1) & 255) << 8;
    case 1:
      ((r ^= n.charCodeAt(o) & 255),
        (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)));
  }
  return (
    (r ^= r >>> 13),
    (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
    ((r ^ (r >>> 15)) >>> 0).toString(36)
  );
}
var Fx = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Wx = /[A-Z]|^ms/g,
  Ix = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  wp = function (r) {
    return r.charCodeAt(1) === 45;
  },
  xg = function (r) {
    return r != null && typeof r != 'boolean';
  },
  ff = bp(function (n) {
    return wp(n) ? n : n.replace(Wx, '-$&').toLowerCase();
  }),
  Sg = function (r, u) {
    switch (r) {
      case 'animation':
      case 'animationName':
        if (typeof u == 'string')
          return u.replace(Ix, function (o, c, f) {
            return ((Ha = { name: c, styles: f, next: Ha }), c);
          });
    }
    return Fx[r] !== 1 && !wp(r) && typeof u == 'number' && u !== 0
      ? u + 'px'
      : u;
  };
function zi(n, r, u) {
  if (u == null) return '';
  var o = u;
  if (o.__emotion_styles !== void 0) return o;
  switch (typeof u) {
    case 'boolean':
      return '';
    case 'object': {
      var c = u;
      if (c.anim === 1)
        return ((Ha = { name: c.name, styles: c.styles, next: Ha }), c.name);
      var f = u;
      if (f.styles !== void 0) {
        var h = f.next;
        if (h !== void 0)
          for (; h !== void 0; )
            ((Ha = { name: h.name, styles: h.styles, next: Ha }), (h = h.next));
        var p = f.styles + ';';
        return p;
      }
      return eS(n, r, u);
    }
    case 'function': {
      if (n !== void 0) {
        var g = Ha,
          m = u(n);
        return ((Ha = g), zi(n, r, m));
      }
      break;
    }
  }
  var v = u;
  if (r == null) return v;
  var S = r[v];
  return S !== void 0 ? S : v;
}
function eS(n, r, u) {
  var o = '';
  if (Array.isArray(u))
    for (var c = 0; c < u.length; c++) o += zi(n, r, u[c]) + ';';
  else
    for (var f in u) {
      var h = u[f];
      if (typeof h != 'object') {
        var p = h;
        r != null && r[p] !== void 0
          ? (o += f + '{' + r[p] + '}')
          : xg(p) && (o += ff(f) + ':' + Sg(f, p) + ';');
      } else if (
        Array.isArray(h) &&
        typeof h[0] == 'string' &&
        (r == null || r[h[0]] === void 0)
      )
        for (var g = 0; g < h.length; g++)
          xg(h[g]) && (o += ff(f) + ':' + Sg(f, h[g]) + ';');
      else {
        var m = zi(n, r, h);
        switch (f) {
          case 'animation':
          case 'animationName': {
            o += ff(f) + ':' + m + ';';
            break;
          }
          default:
            o += f + '{' + m + '}';
        }
      }
    }
  return o;
}
var wg = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Ha;
function Ep(n, r, u) {
  if (
    n.length === 1 &&
    typeof n[0] == 'object' &&
    n[0] !== null &&
    n[0].styles !== void 0
  )
    return n[0];
  var o = !0,
    c = '';
  Ha = void 0;
  var f = n[0];
  if (f == null || f.raw === void 0) ((o = !1), (c += zi(u, r, f)));
  else {
    var h = f;
    c += h[0];
  }
  for (var p = 1; p < n.length; p++)
    if (((c += zi(u, r, n[p])), o)) {
      var g = f;
      c += g[p];
    }
  wg.lastIndex = 0;
  for (var m = '', v; (v = wg.exec(c)) !== null; ) m += '-' + v[1];
  var S = Px(c) + m;
  return { name: S, styles: c, next: Ha };
}
var tS = function (r) {
    return r();
  },
  aS = B0.useInsertionEffect ? B0.useInsertionEffect : !1,
  nS = aS || tS,
  Tp = U.createContext(typeof HTMLElement < 'u' ? Qx({ key: 'css' }) : null);
Tp.Provider;
var lS = function (r) {
    return U.forwardRef(function (u, o) {
      var c = U.useContext(Tp);
      return r(u, c, o);
    });
  },
  rS = U.createContext({}),
  iS =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  uS = bp(function (n) {
    return (
      iS.test(n) ||
      (n.charCodeAt(0) === 111 &&
        n.charCodeAt(1) === 110 &&
        n.charCodeAt(2) < 91)
    );
  }),
  oS = uS,
  sS = function (r) {
    return r !== 'theme';
  },
  Eg = function (r) {
    return typeof r == 'string' && r.charCodeAt(0) > 96 ? oS : sS;
  },
  Tg = function (r, u, o) {
    var c;
    if (u) {
      var f = u.shouldForwardProp;
      c =
        r.__emotion_forwardProp && f
          ? function (h) {
              return r.__emotion_forwardProp(h) && f(h);
            }
          : f;
    }
    return (typeof c != 'function' && o && (c = r.__emotion_forwardProp), c);
  },
  cS = function (r) {
    var u = r.cache,
      o = r.serialized,
      c = r.isStringTag;
    return (
      Sp(u, o, c),
      nS(function () {
        return Jx(u, o, c);
      }),
      null
    );
  },
  fS = function n(r, u) {
    var o = r.__emotion_real === r,
      c = (o && r.__emotion_base) || r,
      f,
      h;
    u !== void 0 && ((f = u.label), (h = u.target));
    var p = Tg(r, u, o),
      g = p || Eg(c),
      m = !g('as');
    return function () {
      var v = arguments,
        S =
          o && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
      if (
        (f !== void 0 && S.push('label:' + f + ';'),
        v[0] == null || v[0].raw === void 0)
      )
        S.push.apply(S, v);
      else {
        var w = v[0];
        S.push(w[0]);
        for (var j = v.length, _ = 1; _ < j; _++) S.push(v[_], w[_]);
      }
      var R = lS(function (q, H, te) {
        var X = (m && q.as) || c,
          F = '',
          J = [],
          M = q;
        if (q.theme == null) {
          M = {};
          for (var I in q) M[I] = q[I];
          M.theme = U.useContext(rS);
        }
        typeof q.className == 'string'
          ? (F = Zx(H.registered, J, q.className))
          : q.className != null && (F = q.className + ' ');
        var fe = Ep(S.concat(J), H.registered, M);
        ((F += H.key + '-' + fe.name), h !== void 0 && (F += ' ' + h));
        var le = m && p === void 0 ? Eg(X) : g,
          x = {};
        for (var ne in q) (m && ne === 'as') || (le(ne) && (x[ne] = q[ne]));
        return (
          (x.className = F),
          te && (x.ref = te),
          U.createElement(
            U.Fragment,
            null,
            U.createElement(cS, {
              cache: H,
              serialized: fe,
              isStringTag: typeof X == 'string',
            }),
            U.createElement(X, x)
          )
        );
      });
      return (
        (R.displayName =
          f !== void 0
            ? f
            : 'Styled(' +
              (typeof c == 'string'
                ? c
                : c.displayName || c.name || 'Component') +
              ')'),
        (R.defaultProps = r.defaultProps),
        (R.__emotion_real = R),
        (R.__emotion_base = c),
        (R.__emotion_styles = S),
        (R.__emotion_forwardProp = p),
        Object.defineProperty(R, 'toString', {
          value: function () {
            return '.' + h;
          },
        }),
        (R.withComponent = function (q, H) {
          var te = n(q, bf({}, u, H, { shouldForwardProp: Tg(R, H, !0) }));
          return te.apply(void 0, S);
        }),
        R
      );
    };
  },
  dS = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ],
  wf = fS.bind(null);
dS.forEach(function (n) {
  wf[n] = wf(n);
});
function hS(n, r) {
  return wf(n, r);
}
function mS(n, r) {
  Array.isArray(n.__emotion_styles) &&
    (n.__emotion_styles = r(n.__emotion_styles));
}
const Cg = [];
function yl(n) {
  return ((Cg[0] = n), Ep(Cg));
}
const gS = n => {
  const r = Object.keys(n).map(u => ({ key: u, val: n[u] })) || [];
  return (
    r.sort((u, o) => u.val - o.val),
    r.reduce((u, o) => ({ ...u, [o.key]: o.val }), {})
  );
};
function pS(n) {
  const {
      values: r = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: u = 'px',
      step: o = 5,
      ...c
    } = n,
    f = gS(r),
    h = Object.keys(f);
  function p(w) {
    return `@media (min-width:${typeof r[w] == 'number' ? r[w] : w}${u})`;
  }
  function g(w) {
    return `@media (max-width:${(typeof r[w] == 'number' ? r[w] : w) - o / 100}${u})`;
  }
  function m(w, j) {
    const _ = h.indexOf(j);
    return `@media (min-width:${typeof r[w] == 'number' ? r[w] : w}${u}) and (max-width:${(_ !== -1 && typeof r[h[_]] == 'number' ? r[h[_]] : j) - o / 100}${u})`;
  }
  function v(w) {
    return h.indexOf(w) + 1 < h.length ? m(w, h[h.indexOf(w) + 1]) : p(w);
  }
  function S(w) {
    const j = h.indexOf(w);
    return j === 0
      ? p(h[1])
      : j === h.length - 1
        ? g(h[j])
        : m(w, h[h.indexOf(w) + 1]).replace('@media', '@media not all and');
  }
  return {
    keys: h,
    values: f,
    up: p,
    down: g,
    between: m,
    only: v,
    not: S,
    unit: u,
    ...c,
  };
}
const yS = { borderRadius: 4 };
function Cp(n = 8, r = qf({ spacing: n })) {
  if (n.mui) return n;
  const u = (...o) =>
    (o.length === 0 ? [1] : o)
      .map(f => {
        const h = r(f);
        return typeof h == 'number' ? `${h}px` : h;
      })
      .join(' ');
  return ((u.mui = !0), u);
}
function vS(n, r) {
  const u = this;
  if (u.vars) {
    if (!u.colorSchemes?.[n] || typeof u.getColorSchemeSelector != 'function')
      return {};
    let o = u.getColorSchemeSelector(n);
    return o === '&'
      ? r
      : ((o.includes('data-') || o.includes('.')) &&
          (o = `*:where(${o.replace(/\s*&$/, '')}) &`),
        { [o]: r });
  }
  return u.palette.mode === n ? r : {};
}
function Rp(n = {}, ...r) {
  const {
      breakpoints: u = {},
      palette: o = {},
      spacing: c,
      shape: f = {},
      ...h
    } = n,
    p = pS(u),
    g = Cp(c);
  let m = la(
    {
      breakpoints: p,
      direction: 'ltr',
      components: {},
      palette: { mode: 'light', ...o },
      spacing: g,
      shape: { ...yS, ...f },
    },
    h
  );
  return (
    (m = j2(m)),
    (m.applyStyles = vS),
    (m = r.reduce((v, S) => la(v, S), m)),
    (m.unstable_sxConfig = { ...Bo, ...h?.unstable_sxConfig }),
    (m.unstable_sx = function (S) {
      return gr({ sx: S, theme: this });
    }),
    m
  );
}
const bS = {
  active: 'active',
  checked: 'checked',
  completed: 'completed',
  disabled: 'disabled',
  error: 'error',
  expanded: 'expanded',
  focused: 'focused',
  focusVisible: 'focusVisible',
  open: 'open',
  readOnly: 'readOnly',
  required: 'required',
  selected: 'selected',
};
function Ap(n, r, u = 'Mui') {
  const o = bS[r];
  return o ? `${u}-${o}` : `${x2.generate(n)}-${r}`;
}
function xS(n, r, u = 'Mui') {
  const o = {};
  return (
    r.forEach(c => {
      o[c] = Ap(n, c, u);
    }),
    o
  );
}
function Mp(n) {
  const { variants: r, ...u } = n,
    o = { variants: r, style: yl(u), isProcessed: !0 };
  return (
    o.style === u ||
      (r &&
        r.forEach(c => {
          typeof c.style != 'function' && (c.style = yl(c.style));
        })),
    o
  );
}
const SS = Rp();
function df(n) {
  return n !== 'ownerState' && n !== 'theme' && n !== 'sx' && n !== 'as';
}
function pl(n, r) {
  return (
    r &&
      n &&
      typeof n == 'object' &&
      n.styles &&
      !n.styles.startsWith('@layer') &&
      (n.styles = `@layer ${r}{${String(n.styles)}}`),
    n
  );
}
function wS(n) {
  return n ? (r, u) => u[n] : null;
}
function ES(n, r, u) {
  n.theme = RS(n.theme) ? u : n.theme[r] || n.theme;
}
function bo(n, r, u) {
  const o = typeof r == 'function' ? r(n) : r;
  if (Array.isArray(o)) return o.flatMap(c => bo(n, c, u));
  if (Array.isArray(o?.variants)) {
    let c;
    if (o.isProcessed) c = u ? pl(o.style, u) : o.style;
    else {
      const { variants: f, ...h } = o;
      c = u ? pl(yl(h), u) : h;
    }
    return Op(n, o.variants, [c], u);
  }
  return o?.isProcessed
    ? u
      ? pl(yl(o.style), u)
      : o.style
    : u
      ? pl(yl(o), u)
      : o;
}
function Op(n, r, u = [], o = void 0) {
  let c;
  e: for (let f = 0; f < r.length; f += 1) {
    const h = r[f];
    if (typeof h.props == 'function') {
      if (
        ((c ??= { ...n, ...n.ownerState, ownerState: n.ownerState }),
        !h.props(c))
      )
        continue;
    } else
      for (const p in h.props)
        if (n[p] !== h.props[p] && n.ownerState?.[p] !== h.props[p]) continue e;
    typeof h.style == 'function'
      ? ((c ??= { ...n, ...n.ownerState, ownerState: n.ownerState }),
        u.push(o ? pl(yl(h.style(c)), o) : h.style(c)))
      : u.push(o ? pl(yl(h.style), o) : h.style);
  }
  return u;
}
function TS(n = {}) {
  const {
    themeId: r,
    defaultTheme: u = SS,
    rootShouldForwardProp: o = df,
    slotShouldForwardProp: c = df,
  } = n;
  function f(p) {
    ES(p, r, u);
  }
  return (p, g = {}) => {
    mS(p, M => M.filter(I => I !== gr));
    const {
        name: m,
        slot: v,
        skipVariantsResolver: S,
        skipSx: w,
        overridesResolver: j = wS(MS(v)),
        ..._
      } = g,
      R = (m && m.startsWith('Mui')) || v ? 'components' : 'custom',
      q = S !== void 0 ? S : (v && v !== 'Root' && v !== 'root') || !1,
      H = w || !1;
    let te = df;
    v === 'Root' || v === 'root'
      ? (te = o)
      : v
        ? (te = c)
        : AS(p) && (te = void 0);
    const X = hS(p, { shouldForwardProp: te, label: CS(), ..._ }),
      F = M => {
        if (M.__emotion_real === M) return M;
        if (typeof M == 'function')
          return function (fe) {
            return bo(fe, M, fe.theme.modularCssLayers ? R : void 0);
          };
        if (cn(M)) {
          const I = Mp(M);
          return function (le) {
            return I.variants
              ? bo(le, I, le.theme.modularCssLayers ? R : void 0)
              : le.theme.modularCssLayers
                ? pl(I.style, R)
                : I.style;
          };
        }
        return M;
      },
      J = (...M) => {
        const I = [],
          fe = M.map(F),
          le = [];
        if (
          (I.push(f),
          m &&
            j &&
            le.push(function (oe) {
              const Te = oe.theme.components?.[m]?.styleOverrides;
              if (!Te) return null;
              const L = {};
              for (const W in Te)
                L[W] = bo(
                  oe,
                  Te[W],
                  oe.theme.modularCssLayers ? 'theme' : void 0
                );
              return j(oe, L);
            }),
          m &&
            !q &&
            le.push(function (oe) {
              const Te = oe.theme?.components?.[m]?.variants;
              return Te
                ? Op(oe, Te, [], oe.theme.modularCssLayers ? 'theme' : void 0)
                : null;
            }),
          H || le.push(gr),
          Array.isArray(fe[0]))
        ) {
          const ve = fe.shift(),
            oe = new Array(I.length).fill(''),
            je = new Array(le.length).fill('');
          let Te;
          ((Te = [...oe, ...ve, ...je]),
            (Te.raw = [...oe, ...ve.raw, ...je]),
            I.unshift(Te));
        }
        const x = [...I, ...fe, ...le],
          ne = X(...x);
        return (p.muiName && (ne.muiName = p.muiName), ne);
      };
    return (X.withConfig && (J.withConfig = X.withConfig), J);
  };
}
function CS(n, r) {
  return void 0;
}
function RS(n) {
  for (const r in n) return !1;
  return !0;
}
function AS(n) {
  return typeof n == 'string' && n.charCodeAt(0) > 96;
}
function MS(n) {
  return n && n.charAt(0).toLowerCase() + n.slice(1);
}
function Ef(n, r, u = !1) {
  const o = { ...r };
  for (const c in n)
    if (Object.prototype.hasOwnProperty.call(n, c)) {
      const f = c;
      if (f === 'components' || f === 'slots') o[f] = { ...n[f], ...o[f] };
      else if (f === 'componentsProps' || f === 'slotProps') {
        const h = n[f],
          p = r[f];
        if (!p) o[f] = h || {};
        else if (!h) o[f] = p;
        else {
          o[f] = { ...p };
          for (const g in h)
            if (Object.prototype.hasOwnProperty.call(h, g)) {
              const m = g;
              o[f][m] = Ef(h[m], p[m], u);
            }
        }
      } else
        f === 'className' && u && r.className
          ? (o.className = sp(n?.className, r?.className))
          : f === 'style' && u && r.style
            ? (o.style = { ...n?.style, ...r?.style })
            : o[f] === void 0 && (o[f] = n[f]);
    }
  return o;
}
function OS(n, r = Number.MIN_SAFE_INTEGER, u = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(n, u));
}
function Xf(n, r = 0, u = 1) {
  return OS(n, r, u);
}
function jS(n) {
  n = n.slice(1);
  const r = new RegExp(`.{1,${n.length >= 6 ? 2 : 1}}`, 'g');
  let u = n.match(r);
  return (
    u && u[0].length === 1 && (u = u.map(o => o + o)),
    u
      ? `rgb${u.length === 4 ? 'a' : ''}(${u.map((o, c) => (c < 3 ? parseInt(o, 16) : Math.round((parseInt(o, 16) / 255) * 1e3) / 1e3)).join(', ')})`
      : ''
  );
}
function Gn(n) {
  if (n.type) return n;
  if (n.charAt(0) === '#') return Gn(jS(n));
  const r = n.indexOf('('),
    u = n.substring(0, r);
  if (!['rgb', 'rgba', 'hsl', 'hsla', 'color'].includes(u))
    throw new Error(vl(9, n));
  let o = n.substring(r + 1, n.length - 1),
    c;
  if (u === 'color') {
    if (
      ((o = o.split(' ')),
      (c = o.shift()),
      o.length === 4 && o[3].charAt(0) === '/' && (o[3] = o[3].slice(1)),
      !['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].includes(
        c
      ))
    )
      throw new Error(vl(10, c));
  } else o = o.split(',');
  return (
    (o = o.map(f => parseFloat(f))),
    { type: u, values: o, colorSpace: c }
  );
}
const _S = n => {
    const r = Gn(n);
    return r.values
      .slice(0, 3)
      .map((u, o) => (r.type.includes('hsl') && o !== 0 ? `${u}%` : u))
      .join(' ');
  },
  Ei = (n, r) => {
    try {
      return _S(n);
    } catch {
      return n;
    }
  };
function Yo(n) {
  const { type: r, colorSpace: u } = n;
  let { values: o } = n;
  return (
    r.includes('rgb')
      ? (o = o.map((c, f) => (f < 3 ? parseInt(c, 10) : c)))
      : r.includes('hsl') && ((o[1] = `${o[1]}%`), (o[2] = `${o[2]}%`)),
    r.includes('color') ? (o = `${u} ${o.join(' ')}`) : (o = `${o.join(', ')}`),
    `${r}(${o})`
  );
}
function jp(n) {
  n = Gn(n);
  const { values: r } = n,
    u = r[0],
    o = r[1] / 100,
    c = r[2] / 100,
    f = o * Math.min(c, 1 - c),
    h = (m, v = (m + u / 30) % 12) =>
      c - f * Math.max(Math.min(v - 3, 9 - v, 1), -1);
  let p = 'rgb';
  const g = [
    Math.round(h(0) * 255),
    Math.round(h(8) * 255),
    Math.round(h(4) * 255),
  ];
  return (
    n.type === 'hsla' && ((p += 'a'), g.push(r[3])),
    Yo({ type: p, values: g })
  );
}
function Tf(n) {
  n = Gn(n);
  let r = n.type === 'hsl' || n.type === 'hsla' ? Gn(jp(n)).values : n.values;
  return (
    (r = r.map(
      u => (
        n.type !== 'color' && (u /= 255),
        u <= 0.03928 ? u / 12.92 : ((u + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3))
  );
}
function DS(n, r) {
  const u = Tf(n),
    o = Tf(r);
  return (Math.max(u, o) + 0.05) / (Math.min(u, o) + 0.05);
}
function zS(n, r) {
  return (
    (n = Gn(n)),
    (r = Xf(r)),
    (n.type === 'rgb' || n.type === 'hsl') && (n.type += 'a'),
    n.type === 'color' ? (n.values[3] = `/${r}`) : (n.values[3] = r),
    Yo(n)
  );
}
function so(n, r, u) {
  try {
    return zS(n, r);
  } catch {
    return n;
  }
}
function Qf(n, r) {
  if (((n = Gn(n)), (r = Xf(r)), n.type.includes('hsl'))) n.values[2] *= 1 - r;
  else if (n.type.includes('rgb') || n.type.includes('color'))
    for (let u = 0; u < 3; u += 1) n.values[u] *= 1 - r;
  return Yo(n);
}
function Fe(n, r, u) {
  try {
    return Qf(n, r);
  } catch {
    return n;
  }
}
function Kf(n, r) {
  if (((n = Gn(n)), (r = Xf(r)), n.type.includes('hsl')))
    n.values[2] += (100 - n.values[2]) * r;
  else if (n.type.includes('rgb'))
    for (let u = 0; u < 3; u += 1) n.values[u] += (255 - n.values[u]) * r;
  else if (n.type.includes('color'))
    for (let u = 0; u < 3; u += 1) n.values[u] += (1 - n.values[u]) * r;
  return Yo(n);
}
function We(n, r, u) {
  try {
    return Kf(n, r);
  } catch {
    return n;
  }
}
function NS(n, r = 0.15) {
  return Tf(n) > 0.5 ? Qf(n, r) : Kf(n, r);
}
function co(n, r, u) {
  try {
    return NS(n, r);
  } catch {
    return n;
  }
}
const US = U.createContext(void 0);
function LS(n) {
  const { theme: r, name: u, props: o } = n;
  if (!r || !r.components || !r.components[u]) return o;
  const c = r.components[u];
  return c.defaultProps
    ? Ef(c.defaultProps, o, r.components.mergeClassNameAndStyle)
    : !c.styleOverrides && !c.variants
      ? Ef(c, o, r.components.mergeClassNameAndStyle)
      : o;
}
function BS({ props: n, name: r }) {
  const u = U.useContext(US);
  return LS({ props: n, name: r, theme: { components: u } });
}
const Rg = { theme: void 0 };
function HS(n) {
  let r, u;
  return function (c) {
    let f = r;
    return (
      (f === void 0 || c.theme !== u) &&
        ((Rg.theme = c.theme), (f = Mp(n(Rg))), (r = f), (u = c.theme)),
      f
    );
  };
}
function kS(n = '') {
  function r(...o) {
    if (!o.length) return '';
    const c = o[0];
    return typeof c == 'string' &&
      !c.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/
      )
      ? `, var(--${n ? `${n}-` : ''}${c}${r(...o.slice(1))})`
      : `, ${c}`;
  }
  return (o, ...c) => `var(--${n ? `${n}-` : ''}${o}${r(...c)})`;
}
const Ag = (n, r, u, o = []) => {
    let c = n;
    r.forEach((f, h) => {
      h === r.length - 1
        ? Array.isArray(c)
          ? (c[Number(f)] = u)
          : c && typeof c == 'object' && (c[f] = u)
        : c &&
          typeof c == 'object' &&
          (c[f] || (c[f] = o.includes(f) ? [] : {}), (c = c[f]));
    });
  },
  qS = (n, r, u) => {
    function o(c, f = [], h = []) {
      Object.entries(c).forEach(([p, g]) => {
        (!u || (u && !u([...f, p]))) &&
          g != null &&
          (typeof g == 'object' && Object.keys(g).length > 0
            ? o(g, [...f, p], Array.isArray(g) ? [...h, p] : h)
            : r([...f, p], g, h));
      });
    }
    o(n);
  },
  YS = (n, r) =>
    typeof r == 'number'
      ? ['lineHeight', 'fontWeight', 'opacity', 'zIndex'].some(o =>
          n.includes(o)
        ) || n[n.length - 1].toLowerCase().includes('opacity')
        ? r
        : `${r}px`
      : r;
function hf(n, r) {
  const { prefix: u, shouldSkipGeneratingVar: o } = r || {},
    c = {},
    f = {},
    h = {};
  return (
    qS(
      n,
      (p, g, m) => {
        if (
          (typeof g == 'string' || typeof g == 'number') &&
          (!o || !o(p, g))
        ) {
          const v = `--${u ? `${u}-` : ''}${p.join('-')}`,
            S = YS(p, g);
          (Object.assign(c, { [v]: S }),
            Ag(f, p, `var(${v})`, m),
            Ag(h, p, `var(${v}, ${S})`, m));
        }
      },
      p => p[0] === 'vars'
    ),
    { css: c, vars: f, varsWithDefaults: h }
  );
}
function GS(n, r = {}) {
  const {
      getSelector: u = q,
      disableCssColorScheme: o,
      colorSchemeSelector: c,
    } = r,
    {
      colorSchemes: f = {},
      components: h,
      defaultColorScheme: p = 'light',
      ...g
    } = n,
    { vars: m, css: v, varsWithDefaults: S } = hf(g, r);
  let w = S;
  const j = {},
    { [p]: _, ...R } = f;
  if (
    (Object.entries(R || {}).forEach(([X, F]) => {
      const { vars: J, css: M, varsWithDefaults: I } = hf(F, r);
      ((w = la(w, I)), (j[X] = { css: M, vars: J }));
    }),
    _)
  ) {
    const { css: X, vars: F, varsWithDefaults: J } = hf(_, r);
    ((w = la(w, J)), (j[p] = { css: X, vars: F }));
  }
  function q(X, F) {
    let J = c;
    if (
      (c === 'class' && (J = '.%s'),
      c === 'data' && (J = '[data-%s]'),
      c?.startsWith('data-') && !c.includes('%s') && (J = `[${c}="%s"]`),
      X)
    ) {
      if (J === 'media')
        return n.defaultColorScheme === X
          ? ':root'
          : {
              [`@media (prefers-color-scheme: ${f[X]?.palette?.mode || X})`]: {
                ':root': F,
              },
            };
      if (J)
        return n.defaultColorScheme === X
          ? `:root, ${J.replace('%s', String(X))}`
          : J.replace('%s', String(X));
    }
    return ':root';
  }
  return {
    vars: w,
    generateThemeVars: () => {
      let X = { ...m };
      return (
        Object.entries(j).forEach(([, { vars: F }]) => {
          X = la(X, F);
        }),
        X
      );
    },
    generateStyleSheets: () => {
      const X = [],
        F = n.defaultColorScheme || 'light';
      function J(fe, le) {
        Object.keys(le).length &&
          X.push(typeof fe == 'string' ? { [fe]: { ...le } } : fe);
      }
      J(u(void 0, { ...v }), v);
      const { [F]: M, ...I } = j;
      if (M) {
        const { css: fe } = M,
          le = f[F]?.palette?.mode,
          x = !o && le ? { colorScheme: le, ...fe } : { ...fe };
        J(u(F, { ...x }), x);
      }
      return (
        Object.entries(I).forEach(([fe, { css: le }]) => {
          const x = f[fe]?.palette?.mode,
            ne = !o && x ? { colorScheme: x, ...le } : { ...le };
          J(u(fe, { ...ne }), ne);
        }),
        X
      );
    },
  };
}
function VS(n) {
  return function (u) {
    return n === 'media'
      ? `@media (prefers-color-scheme: ${u})`
      : n
        ? n.startsWith('data-') && !n.includes('%s')
          ? `[${n}="${u}"] &`
          : n === 'class'
            ? `.${u} &`
            : n === 'data'
              ? `[data-${u}] &`
              : `${n.replace('%s', u)} &`
        : '&';
  };
}
const Ni = { black: '#000', white: '#fff' },
  $S = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  },
  rr = {
    50: '#f3e5f5',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    700: '#7b1fa2',
  },
  ir = {
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    700: '#d32f2f',
    800: '#c62828',
  },
  Si = {
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    700: '#f57c00',
    900: '#e65100',
  },
  ur = {
    50: '#e3f2fd',
    200: '#90caf9',
    400: '#42a5f5',
    700: '#1976d2',
    800: '#1565c0',
  },
  or = {
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    700: '#0288d1',
    900: '#01579b',
  },
  sr = {
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
  };
function _p() {
  return {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: Ni.white, default: Ni.white },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  };
}
const XS = _p();
function Dp() {
  return {
    text: {
      primary: Ni.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: '#121212', default: '#121212' },
    action: {
      active: Ni.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
}
const Mg = Dp();
function Og(n, r, u, o) {
  const c = o.light || o,
    f = o.dark || o * 1.5;
  n[r] ||
    (n.hasOwnProperty(u)
      ? (n[r] = n[u])
      : r === 'light'
        ? (n.light = Kf(n.main, c))
        : r === 'dark' && (n.dark = Qf(n.main, f)));
}
function QS(n = 'light') {
  return n === 'dark'
    ? { main: ur[200], light: ur[50], dark: ur[400] }
    : { main: ur[700], light: ur[400], dark: ur[800] };
}
function KS(n = 'light') {
  return n === 'dark'
    ? { main: rr[200], light: rr[50], dark: rr[400] }
    : { main: rr[500], light: rr[300], dark: rr[700] };
}
function ZS(n = 'light') {
  return n === 'dark'
    ? { main: ir[500], light: ir[300], dark: ir[700] }
    : { main: ir[700], light: ir[400], dark: ir[800] };
}
function JS(n = 'light') {
  return n === 'dark'
    ? { main: or[400], light: or[300], dark: or[700] }
    : { main: or[700], light: or[500], dark: or[900] };
}
function PS(n = 'light') {
  return n === 'dark'
    ? { main: sr[400], light: sr[300], dark: sr[700] }
    : { main: sr[800], light: sr[500], dark: sr[900] };
}
function FS(n = 'light') {
  return n === 'dark'
    ? { main: Si[400], light: Si[300], dark: Si[700] }
    : { main: '#ed6c02', light: Si[500], dark: Si[900] };
}
function Zf(n) {
  const {
      mode: r = 'light',
      contrastThreshold: u = 3,
      tonalOffset: o = 0.2,
      ...c
    } = n,
    f = n.primary || QS(r),
    h = n.secondary || KS(r),
    p = n.error || ZS(r),
    g = n.info || JS(r),
    m = n.success || PS(r),
    v = n.warning || FS(r);
  function S(R) {
    return DS(R, Mg.text.primary) >= u ? Mg.text.primary : XS.text.primary;
  }
  const w = ({
    color: R,
    name: q,
    mainShade: H = 500,
    lightShade: te = 300,
    darkShade: X = 700,
  }) => {
    if (
      ((R = { ...R }),
      !R.main && R[H] && (R.main = R[H]),
      !R.hasOwnProperty('main'))
    )
      throw new Error(vl(11, q ? ` (${q})` : '', H));
    if (typeof R.main != 'string')
      throw new Error(vl(12, q ? ` (${q})` : '', JSON.stringify(R.main)));
    return (
      Og(R, 'light', te, o),
      Og(R, 'dark', X, o),
      R.contrastText || (R.contrastText = S(R.main)),
      R
    );
  };
  let j;
  return (
    r === 'light' ? (j = _p()) : r === 'dark' && (j = Dp()),
    la(
      {
        common: { ...Ni },
        mode: r,
        primary: w({ color: f, name: 'primary' }),
        secondary: w({
          color: h,
          name: 'secondary',
          mainShade: 'A400',
          lightShade: 'A200',
          darkShade: 'A700',
        }),
        error: w({ color: p, name: 'error' }),
        warning: w({ color: v, name: 'warning' }),
        info: w({ color: g, name: 'info' }),
        success: w({ color: m, name: 'success' }),
        grey: $S,
        contrastThreshold: u,
        getContrastText: S,
        augmentColor: w,
        tonalOffset: o,
        ...j,
      },
      c
    )
  );
}
function WS(n) {
  const r = {};
  return (
    Object.entries(n).forEach(o => {
      const [c, f] = o;
      typeof f == 'object' &&
        (r[c] =
          `${f.fontStyle ? `${f.fontStyle} ` : ''}${f.fontVariant ? `${f.fontVariant} ` : ''}${f.fontWeight ? `${f.fontWeight} ` : ''}${f.fontStretch ? `${f.fontStretch} ` : ''}${f.fontSize || ''}${f.lineHeight ? `/${f.lineHeight} ` : ''}${f.fontFamily || ''}`);
    }),
    r
  );
}
function IS(n, r) {
  return {
    toolbar: {
      minHeight: 56,
      [n.up('xs')]: { '@media (orientation: landscape)': { minHeight: 48 } },
      [n.up('sm')]: { minHeight: 64 },
    },
    ...r,
  };
}
function e3(n) {
  return Math.round(n * 1e5) / 1e5;
}
const jg = { textTransform: 'uppercase' },
  _g = '"Roboto", "Helvetica", "Arial", sans-serif';
function t3(n, r) {
  const {
      fontFamily: u = _g,
      fontSize: o = 14,
      fontWeightLight: c = 300,
      fontWeightRegular: f = 400,
      fontWeightMedium: h = 500,
      fontWeightBold: p = 700,
      htmlFontSize: g = 16,
      allVariants: m,
      pxToRem: v,
      ...S
    } = typeof r == 'function' ? r(n) : r,
    w = o / 14,
    j = v || (q => `${(q / g) * w}rem`),
    _ = (q, H, te, X, F) => ({
      fontFamily: u,
      fontWeight: q,
      fontSize: j(H),
      lineHeight: te,
      ...(u === _g ? { letterSpacing: `${e3(X / H)}em` } : {}),
      ...F,
      ...m,
    }),
    R = {
      h1: _(c, 96, 1.167, -1.5),
      h2: _(c, 60, 1.2, -0.5),
      h3: _(f, 48, 1.167, 0),
      h4: _(f, 34, 1.235, 0.25),
      h5: _(f, 24, 1.334, 0),
      h6: _(h, 20, 1.6, 0.15),
      subtitle1: _(f, 16, 1.75, 0.15),
      subtitle2: _(h, 14, 1.57, 0.1),
      body1: _(f, 16, 1.5, 0.15),
      body2: _(f, 14, 1.43, 0.15),
      button: _(h, 14, 1.75, 0.4, jg),
      caption: _(f, 12, 1.66, 0.4),
      overline: _(f, 12, 2.66, 1, jg),
      inherit: {
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit',
      },
    };
  return la(
    {
      htmlFontSize: g,
      pxToRem: j,
      fontFamily: u,
      fontSize: o,
      fontWeightLight: c,
      fontWeightRegular: f,
      fontWeightMedium: h,
      fontWeightBold: p,
      ...R,
    },
    S,
    { clone: !1 }
  );
}
const a3 = 0.2,
  n3 = 0.14,
  l3 = 0.12;
function at(...n) {
  return [
    `${n[0]}px ${n[1]}px ${n[2]}px ${n[3]}px rgba(0,0,0,${a3})`,
    `${n[4]}px ${n[5]}px ${n[6]}px ${n[7]}px rgba(0,0,0,${n3})`,
    `${n[8]}px ${n[9]}px ${n[10]}px ${n[11]}px rgba(0,0,0,${l3})`,
  ].join(',');
}
const r3 = [
    'none',
    at(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    at(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    at(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    at(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    at(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    at(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    at(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    at(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    at(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    at(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    at(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    at(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    at(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    at(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    at(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    at(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    at(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    at(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    at(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    at(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    at(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    at(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    at(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    at(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  i3 = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  u3 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Dg(n) {
  return `${Math.round(n)}ms`;
}
function o3(n) {
  if (!n) return 0;
  const r = n / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function s3(n) {
  const r = { ...i3, ...n.easing },
    u = { ...u3, ...n.duration };
  return {
    getAutoHeightDuration: o3,
    create: (c = ['all'], f = {}) => {
      const {
        duration: h = u.standard,
        easing: p = r.easeInOut,
        delay: g = 0,
        ...m
      } = f;
      return (Array.isArray(c) ? c : [c])
        .map(
          v =>
            `${v} ${typeof h == 'string' ? h : Dg(h)} ${p} ${typeof g == 'string' ? g : Dg(g)}`
        )
        .join(',');
    },
    ...n,
    easing: r,
    duration: u,
  };
}
const c3 = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};
function f3(n) {
  return (
    cn(n) ||
    typeof n > 'u' ||
    typeof n == 'string' ||
    typeof n == 'boolean' ||
    typeof n == 'number' ||
    Array.isArray(n)
  );
}
function zp(n = {}) {
  const r = { ...n };
  function u(o) {
    const c = Object.entries(o);
    for (let f = 0; f < c.length; f++) {
      const [h, p] = c[f];
      !f3(p) || h.startsWith('unstable_')
        ? delete o[h]
        : cn(p) && ((o[h] = { ...p }), u(o[h]));
    }
  }
  return (
    u(r),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  );
}
function Cf(n = {}, ...r) {
  const {
    breakpoints: u,
    mixins: o = {},
    spacing: c,
    palette: f = {},
    transitions: h = {},
    typography: p = {},
    shape: g,
    ...m
  } = n;
  if (n.vars && n.generateThemeVars === void 0) throw new Error(vl(20));
  const v = Zf(f),
    S = Rp(n);
  let w = la(S, {
    mixins: IS(S.breakpoints, o),
    palette: v,
    shadows: r3.slice(),
    typography: t3(v, p),
    transitions: s3(h),
    zIndex: { ...c3 },
  });
  return (
    (w = la(w, m)),
    (w = r.reduce((j, _) => la(j, _), w)),
    (w.unstable_sxConfig = { ...Bo, ...m?.unstable_sxConfig }),
    (w.unstable_sx = function (_) {
      return gr({ sx: _, theme: this });
    }),
    (w.toRuntimeSource = zp),
    w
  );
}
function d3(n) {
  let r;
  return (
    n < 1 ? (r = 5.11916 * n ** 2) : (r = 4.5 * Math.log(n + 1) + 2),
    Math.round(r * 10) / 1e3
  );
}
const h3 = [...Array(25)].map((n, r) => {
  if (r === 0) return 'none';
  const u = d3(r);
  return `linear-gradient(rgba(255 255 255 / ${u}), rgba(255 255 255 / ${u}))`;
});
function Np(n) {
  return {
    inputPlaceholder: n === 'dark' ? 0.5 : 0.42,
    inputUnderline: n === 'dark' ? 0.7 : 0.42,
    switchTrackDisabled: n === 'dark' ? 0.2 : 0.12,
    switchTrack: n === 'dark' ? 0.3 : 0.38,
  };
}
function Up(n) {
  return n === 'dark' ? h3 : [];
}
function m3(n) {
  const { palette: r = { mode: 'light' }, opacity: u, overlays: o, ...c } = n,
    f = Zf(r);
  return {
    palette: f,
    opacity: { ...Np(f.mode), ...u },
    overlays: o || Up(f.mode),
    ...c,
  };
}
function g3(n) {
  return (
    !!n[0].match(
      /(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/
    ) ||
    !!n[0].match(/sxConfig$/) ||
    (n[0] === 'palette' &&
      !!n[1]?.match(/(mode|contrastThreshold|tonalOffset)/))
  );
}
const p3 = n => [
    ...[...Array(25)].map((r, u) => `--${n ? `${n}-` : ''}overlays-${u}`),
    `--${n ? `${n}-` : ''}palette-AppBar-darkBg`,
    `--${n ? `${n}-` : ''}palette-AppBar-darkColor`,
  ],
  y3 = n => (r, u) => {
    const o = n.rootSelector || ':root',
      c = n.colorSchemeSelector;
    let f = c;
    if (
      (c === 'class' && (f = '.%s'),
      c === 'data' && (f = '[data-%s]'),
      c?.startsWith('data-') && !c.includes('%s') && (f = `[${c}="%s"]`),
      n.defaultColorScheme === r)
    ) {
      if (r === 'dark') {
        const h = {};
        return (
          p3(n.cssVarPrefix).forEach(p => {
            ((h[p] = u[p]), delete u[p]);
          }),
          f === 'media'
            ? { [o]: u, '@media (prefers-color-scheme: dark)': { [o]: h } }
            : f
              ? { [f.replace('%s', r)]: h, [`${o}, ${f.replace('%s', r)}`]: u }
              : { [o]: { ...u, ...h } }
        );
      }
      if (f && f !== 'media') return `${o}, ${f.replace('%s', String(r))}`;
    } else if (r) {
      if (f === 'media')
        return { [`@media (prefers-color-scheme: ${String(r)})`]: { [o]: u } };
      if (f) return f.replace('%s', String(r));
    }
    return o;
  };
function v3(n, r) {
  r.forEach(u => {
    n[u] || (n[u] = {});
  });
}
function G(n, r, u) {
  !n[r] && u && (n[r] = u);
}
function Ti(n) {
  return typeof n != 'string' || !n.startsWith('hsl') ? n : jp(n);
}
function sn(n, r) {
  `${r}Channel` in n || (n[`${r}Channel`] = Ei(Ti(n[r])));
}
function b3(n) {
  return typeof n == 'number'
    ? `${n}px`
    : typeof n == 'string' || typeof n == 'function' || Array.isArray(n)
      ? n
      : '8px';
}
const La = n => {
    try {
      return n();
    } catch {}
  },
  x3 = (n = 'mui') => kS(n);
function mf(n, r, u, o) {
  if (!r) return;
  r = r === !0 ? {} : r;
  const c = o === 'dark' ? 'dark' : 'light';
  if (!u) {
    n[o] = m3({ ...r, palette: { mode: c, ...r?.palette } });
    return;
  }
  const { palette: f, ...h } = Cf({
    ...u,
    palette: { mode: c, ...r?.palette },
  });
  return (
    (n[o] = {
      ...r,
      palette: f,
      opacity: { ...Np(c), ...r?.opacity },
      overlays: r?.overlays || Up(c),
    }),
    h
  );
}
function S3(n = {}, ...r) {
  const {
      colorSchemes: u = { light: !0 },
      defaultColorScheme: o,
      disableCssColorScheme: c = !1,
      cssVarPrefix: f = 'mui',
      shouldSkipGeneratingVar: h = g3,
      colorSchemeSelector: p = u.light && u.dark ? 'media' : void 0,
      rootSelector: g = ':root',
      ...m
    } = n,
    v = Object.keys(u)[0],
    S = o || (u.light && v !== 'light' ? 'light' : v),
    w = x3(f),
    { [S]: j, light: _, dark: R, ...q } = u,
    H = { ...q };
  let te = j;
  if (
    (((S === 'dark' && !('dark' in u)) || (S === 'light' && !('light' in u))) &&
      (te = !0),
    !te)
  )
    throw new Error(vl(21, S));
  const X = mf(H, te, m, S);
  (_ && !H.light && mf(H, _, void 0, 'light'),
    R && !H.dark && mf(H, R, void 0, 'dark'));
  let F = {
    defaultColorScheme: S,
    ...X,
    cssVarPrefix: f,
    colorSchemeSelector: p,
    rootSelector: g,
    getCssVar: w,
    colorSchemes: H,
    font: { ...WS(X.typography), ...X.font },
    spacing: b3(m.spacing),
  };
  (Object.keys(F.colorSchemes).forEach(le => {
    const x = F.colorSchemes[le].palette,
      ne = ve => {
        const oe = ve.split('-'),
          je = oe[1],
          Te = oe[2];
        return w(ve, x[je][Te]);
      };
    if (
      (x.mode === 'light' &&
        (G(x.common, 'background', '#fff'),
        G(x.common, 'onBackground', '#000')),
      x.mode === 'dark' &&
        (G(x.common, 'background', '#000'),
        G(x.common, 'onBackground', '#fff')),
      v3(x, [
        'Alert',
        'AppBar',
        'Avatar',
        'Button',
        'Chip',
        'FilledInput',
        'LinearProgress',
        'Skeleton',
        'Slider',
        'SnackbarContent',
        'SpeedDialAction',
        'StepConnector',
        'StepContent',
        'Switch',
        'TableCell',
        'Tooltip',
      ]),
      x.mode === 'light')
    ) {
      (G(x.Alert, 'errorColor', Fe(x.error.light, 0.6)),
        G(x.Alert, 'infoColor', Fe(x.info.light, 0.6)),
        G(x.Alert, 'successColor', Fe(x.success.light, 0.6)),
        G(x.Alert, 'warningColor', Fe(x.warning.light, 0.6)),
        G(x.Alert, 'errorFilledBg', ne('palette-error-main')),
        G(x.Alert, 'infoFilledBg', ne('palette-info-main')),
        G(x.Alert, 'successFilledBg', ne('palette-success-main')),
        G(x.Alert, 'warningFilledBg', ne('palette-warning-main')),
        G(
          x.Alert,
          'errorFilledColor',
          La(() => x.getContrastText(x.error.main))
        ),
        G(
          x.Alert,
          'infoFilledColor',
          La(() => x.getContrastText(x.info.main))
        ),
        G(
          x.Alert,
          'successFilledColor',
          La(() => x.getContrastText(x.success.main))
        ),
        G(
          x.Alert,
          'warningFilledColor',
          La(() => x.getContrastText(x.warning.main))
        ),
        G(x.Alert, 'errorStandardBg', We(x.error.light, 0.9)),
        G(x.Alert, 'infoStandardBg', We(x.info.light, 0.9)),
        G(x.Alert, 'successStandardBg', We(x.success.light, 0.9)),
        G(x.Alert, 'warningStandardBg', We(x.warning.light, 0.9)),
        G(x.Alert, 'errorIconColor', ne('palette-error-main')),
        G(x.Alert, 'infoIconColor', ne('palette-info-main')),
        G(x.Alert, 'successIconColor', ne('palette-success-main')),
        G(x.Alert, 'warningIconColor', ne('palette-warning-main')),
        G(x.AppBar, 'defaultBg', ne('palette-grey-100')),
        G(x.Avatar, 'defaultBg', ne('palette-grey-400')),
        G(x.Button, 'inheritContainedBg', ne('palette-grey-300')),
        G(x.Button, 'inheritContainedHoverBg', ne('palette-grey-A100')),
        G(x.Chip, 'defaultBorder', ne('palette-grey-400')),
        G(x.Chip, 'defaultAvatarColor', ne('palette-grey-700')),
        G(x.Chip, 'defaultIconColor', ne('palette-grey-700')),
        G(x.FilledInput, 'bg', 'rgba(0, 0, 0, 0.06)'),
        G(x.FilledInput, 'hoverBg', 'rgba(0, 0, 0, 0.09)'),
        G(x.FilledInput, 'disabledBg', 'rgba(0, 0, 0, 0.12)'),
        G(x.LinearProgress, 'primaryBg', We(x.primary.main, 0.62)),
        G(x.LinearProgress, 'secondaryBg', We(x.secondary.main, 0.62)),
        G(x.LinearProgress, 'errorBg', We(x.error.main, 0.62)),
        G(x.LinearProgress, 'infoBg', We(x.info.main, 0.62)),
        G(x.LinearProgress, 'successBg', We(x.success.main, 0.62)),
        G(x.LinearProgress, 'warningBg', We(x.warning.main, 0.62)),
        G(
          x.Skeleton,
          'bg',
          `rgba(${ne('palette-text-primaryChannel')} / 0.11)`
        ),
        G(x.Slider, 'primaryTrack', We(x.primary.main, 0.62)),
        G(x.Slider, 'secondaryTrack', We(x.secondary.main, 0.62)),
        G(x.Slider, 'errorTrack', We(x.error.main, 0.62)),
        G(x.Slider, 'infoTrack', We(x.info.main, 0.62)),
        G(x.Slider, 'successTrack', We(x.success.main, 0.62)),
        G(x.Slider, 'warningTrack', We(x.warning.main, 0.62)));
      const ve = co(x.background.default, 0.8);
      (G(x.SnackbarContent, 'bg', ve),
        G(
          x.SnackbarContent,
          'color',
          La(() => x.getContrastText(ve))
        ),
        G(x.SpeedDialAction, 'fabHoverBg', co(x.background.paper, 0.15)),
        G(x.StepConnector, 'border', ne('palette-grey-400')),
        G(x.StepContent, 'border', ne('palette-grey-400')),
        G(x.Switch, 'defaultColor', ne('palette-common-white')),
        G(x.Switch, 'defaultDisabledColor', ne('palette-grey-100')),
        G(x.Switch, 'primaryDisabledColor', We(x.primary.main, 0.62)),
        G(x.Switch, 'secondaryDisabledColor', We(x.secondary.main, 0.62)),
        G(x.Switch, 'errorDisabledColor', We(x.error.main, 0.62)),
        G(x.Switch, 'infoDisabledColor', We(x.info.main, 0.62)),
        G(x.Switch, 'successDisabledColor', We(x.success.main, 0.62)),
        G(x.Switch, 'warningDisabledColor', We(x.warning.main, 0.62)),
        G(x.TableCell, 'border', We(so(x.divider, 1), 0.88)),
        G(x.Tooltip, 'bg', so(x.grey[700], 0.92)));
    }
    if (x.mode === 'dark') {
      (G(x.Alert, 'errorColor', We(x.error.light, 0.6)),
        G(x.Alert, 'infoColor', We(x.info.light, 0.6)),
        G(x.Alert, 'successColor', We(x.success.light, 0.6)),
        G(x.Alert, 'warningColor', We(x.warning.light, 0.6)),
        G(x.Alert, 'errorFilledBg', ne('palette-error-dark')),
        G(x.Alert, 'infoFilledBg', ne('palette-info-dark')),
        G(x.Alert, 'successFilledBg', ne('palette-success-dark')),
        G(x.Alert, 'warningFilledBg', ne('palette-warning-dark')),
        G(
          x.Alert,
          'errorFilledColor',
          La(() => x.getContrastText(x.error.dark))
        ),
        G(
          x.Alert,
          'infoFilledColor',
          La(() => x.getContrastText(x.info.dark))
        ),
        G(
          x.Alert,
          'successFilledColor',
          La(() => x.getContrastText(x.success.dark))
        ),
        G(
          x.Alert,
          'warningFilledColor',
          La(() => x.getContrastText(x.warning.dark))
        ),
        G(x.Alert, 'errorStandardBg', Fe(x.error.light, 0.9)),
        G(x.Alert, 'infoStandardBg', Fe(x.info.light, 0.9)),
        G(x.Alert, 'successStandardBg', Fe(x.success.light, 0.9)),
        G(x.Alert, 'warningStandardBg', Fe(x.warning.light, 0.9)),
        G(x.Alert, 'errorIconColor', ne('palette-error-main')),
        G(x.Alert, 'infoIconColor', ne('palette-info-main')),
        G(x.Alert, 'successIconColor', ne('palette-success-main')),
        G(x.Alert, 'warningIconColor', ne('palette-warning-main')),
        G(x.AppBar, 'defaultBg', ne('palette-grey-900')),
        G(x.AppBar, 'darkBg', ne('palette-background-paper')),
        G(x.AppBar, 'darkColor', ne('palette-text-primary')),
        G(x.Avatar, 'defaultBg', ne('palette-grey-600')),
        G(x.Button, 'inheritContainedBg', ne('palette-grey-800')),
        G(x.Button, 'inheritContainedHoverBg', ne('palette-grey-700')),
        G(x.Chip, 'defaultBorder', ne('palette-grey-700')),
        G(x.Chip, 'defaultAvatarColor', ne('palette-grey-300')),
        G(x.Chip, 'defaultIconColor', ne('palette-grey-300')),
        G(x.FilledInput, 'bg', 'rgba(255, 255, 255, 0.09)'),
        G(x.FilledInput, 'hoverBg', 'rgba(255, 255, 255, 0.13)'),
        G(x.FilledInput, 'disabledBg', 'rgba(255, 255, 255, 0.12)'),
        G(x.LinearProgress, 'primaryBg', Fe(x.primary.main, 0.5)),
        G(x.LinearProgress, 'secondaryBg', Fe(x.secondary.main, 0.5)),
        G(x.LinearProgress, 'errorBg', Fe(x.error.main, 0.5)),
        G(x.LinearProgress, 'infoBg', Fe(x.info.main, 0.5)),
        G(x.LinearProgress, 'successBg', Fe(x.success.main, 0.5)),
        G(x.LinearProgress, 'warningBg', Fe(x.warning.main, 0.5)),
        G(
          x.Skeleton,
          'bg',
          `rgba(${ne('palette-text-primaryChannel')} / 0.13)`
        ),
        G(x.Slider, 'primaryTrack', Fe(x.primary.main, 0.5)),
        G(x.Slider, 'secondaryTrack', Fe(x.secondary.main, 0.5)),
        G(x.Slider, 'errorTrack', Fe(x.error.main, 0.5)),
        G(x.Slider, 'infoTrack', Fe(x.info.main, 0.5)),
        G(x.Slider, 'successTrack', Fe(x.success.main, 0.5)),
        G(x.Slider, 'warningTrack', Fe(x.warning.main, 0.5)));
      const ve = co(x.background.default, 0.98);
      (G(x.SnackbarContent, 'bg', ve),
        G(
          x.SnackbarContent,
          'color',
          La(() => x.getContrastText(ve))
        ),
        G(x.SpeedDialAction, 'fabHoverBg', co(x.background.paper, 0.15)),
        G(x.StepConnector, 'border', ne('palette-grey-600')),
        G(x.StepContent, 'border', ne('palette-grey-600')),
        G(x.Switch, 'defaultColor', ne('palette-grey-300')),
        G(x.Switch, 'defaultDisabledColor', ne('palette-grey-600')),
        G(x.Switch, 'primaryDisabledColor', Fe(x.primary.main, 0.55)),
        G(x.Switch, 'secondaryDisabledColor', Fe(x.secondary.main, 0.55)),
        G(x.Switch, 'errorDisabledColor', Fe(x.error.main, 0.55)),
        G(x.Switch, 'infoDisabledColor', Fe(x.info.main, 0.55)),
        G(x.Switch, 'successDisabledColor', Fe(x.success.main, 0.55)),
        G(x.Switch, 'warningDisabledColor', Fe(x.warning.main, 0.55)),
        G(x.TableCell, 'border', Fe(so(x.divider, 1), 0.68)),
        G(x.Tooltip, 'bg', so(x.grey[700], 0.92)));
    }
    (sn(x.background, 'default'),
      sn(x.background, 'paper'),
      sn(x.common, 'background'),
      sn(x.common, 'onBackground'),
      sn(x, 'divider'),
      Object.keys(x).forEach(ve => {
        const oe = x[ve];
        ve !== 'tonalOffset' &&
          oe &&
          typeof oe == 'object' &&
          (oe.main && G(x[ve], 'mainChannel', Ei(Ti(oe.main))),
          oe.light && G(x[ve], 'lightChannel', Ei(Ti(oe.light))),
          oe.dark && G(x[ve], 'darkChannel', Ei(Ti(oe.dark))),
          oe.contrastText &&
            G(x[ve], 'contrastTextChannel', Ei(Ti(oe.contrastText))),
          ve === 'text' && (sn(x[ve], 'primary'), sn(x[ve], 'secondary')),
          ve === 'action' &&
            (oe.active && sn(x[ve], 'active'),
            oe.selected && sn(x[ve], 'selected')));
      }));
  }),
    (F = r.reduce((le, x) => la(le, x), F)));
  const J = {
      prefix: f,
      disableCssColorScheme: c,
      shouldSkipGeneratingVar: h,
      getSelector: y3(F),
    },
    { vars: M, generateThemeVars: I, generateStyleSheets: fe } = GS(F, J);
  return (
    (F.vars = M),
    Object.entries(F.colorSchemes[F.defaultColorScheme]).forEach(([le, x]) => {
      F[le] = x;
    }),
    (F.generateThemeVars = I),
    (F.generateStyleSheets = fe),
    (F.generateSpacing = function () {
      return Cp(m.spacing, qf(this));
    }),
    (F.getColorSchemeSelector = VS(p)),
    (F.spacing = F.generateSpacing()),
    (F.shouldSkipGeneratingVar = h),
    (F.unstable_sxConfig = { ...Bo, ...m?.unstable_sxConfig }),
    (F.unstable_sx = function (x) {
      return gr({ sx: x, theme: this });
    }),
    (F.toRuntimeSource = zp),
    F
  );
}
function zg(n, r, u) {
  n.colorSchemes &&
    u &&
    (n.colorSchemes[r] = {
      ...(u !== !0 && u),
      palette: Zf({ ...(u === !0 ? {} : u.palette), mode: r }),
    });
}
function w3(n = {}, ...r) {
  const {
      palette: u,
      cssVariables: o = !1,
      colorSchemes: c = u ? void 0 : { light: !0 },
      defaultColorScheme: f = u?.mode,
      ...h
    } = n,
    p = f || 'light',
    g = c?.[p],
    m = {
      ...c,
      ...(u
        ? { [p]: { ...(typeof g != 'boolean' && g), palette: u } }
        : void 0),
    };
  if (o === !1) {
    if (!('colorSchemes' in n)) return Cf(n, ...r);
    let v = u;
    'palette' in n ||
      (m[p] &&
        (m[p] !== !0
          ? (v = m[p].palette)
          : p === 'dark' && (v = { mode: 'dark' })));
    const S = Cf({ ...n, palette: v }, ...r);
    return (
      (S.defaultColorScheme = p),
      (S.colorSchemes = m),
      S.palette.mode === 'light' &&
        ((S.colorSchemes.light = {
          ...(m.light !== !0 && m.light),
          palette: S.palette,
        }),
        zg(S, 'dark', m.dark)),
      S.palette.mode === 'dark' &&
        ((S.colorSchemes.dark = {
          ...(m.dark !== !0 && m.dark),
          palette: S.palette,
        }),
        zg(S, 'light', m.light)),
      S
    );
  }
  return (
    !u && !('light' in m) && p === 'light' && (m.light = !0),
    S3(
      {
        ...h,
        colorSchemes: m,
        defaultColorScheme: p,
        ...(typeof o != 'boolean' && o),
      },
      ...r
    )
  );
}
const E3 = w3(),
  T3 = '$$material';
function C3(n) {
  return n !== 'ownerState' && n !== 'theme' && n !== 'sx' && n !== 'as';
}
const R3 = n => C3(n) && n !== 'classes',
  A3 = TS({ themeId: T3, defaultTheme: E3, rootShouldForwardProp: R3 }),
  M3 = HS;
function O3(n) {
  return BS(n);
}
function j3(n) {
  return Ap('MuiSvgIcon', n);
}
xS('MuiSvgIcon', [
  'root',
  'colorPrimary',
  'colorSecondary',
  'colorAction',
  'colorError',
  'colorDisabled',
  'fontSizeInherit',
  'fontSizeSmall',
  'fontSizeMedium',
  'fontSizeLarge',
]);
const _3 = n => {
    const { color: r, fontSize: u, classes: o } = n,
      c = {
        root: ['root', r !== 'inherit' && `color${mr(r)}`, `fontSize${mr(u)}`],
      };
    return C2(c, j3, o);
  },
  D3 = A3('svg', {
    name: 'MuiSvgIcon',
    slot: 'Root',
    overridesResolver: (n, r) => {
      const { ownerState: u } = n;
      return [
        r.root,
        u.color !== 'inherit' && r[`color${mr(u.color)}`],
        r[`fontSize${mr(u.fontSize)}`],
      ];
    },
  })(
    M3(({ theme: n }) => ({
      userSelect: 'none',
      width: '1em',
      height: '1em',
      display: 'inline-block',
      flexShrink: 0,
      transition: n.transitions?.create?.('fill', {
        duration: (n.vars ?? n).transitions?.duration?.shorter,
      }),
      variants: [
        { props: r => !r.hasSvgAsChild, style: { fill: 'currentColor' } },
        { props: { fontSize: 'inherit' }, style: { fontSize: 'inherit' } },
        {
          props: { fontSize: 'small' },
          style: { fontSize: n.typography?.pxToRem?.(20) || '1.25rem' },
        },
        {
          props: { fontSize: 'medium' },
          style: { fontSize: n.typography?.pxToRem?.(24) || '1.5rem' },
        },
        {
          props: { fontSize: 'large' },
          style: { fontSize: n.typography?.pxToRem?.(35) || '2.1875rem' },
        },
        ...Object.entries((n.vars ?? n).palette)
          .filter(([, r]) => r && r.main)
          .map(([r]) => ({
            props: { color: r },
            style: { color: (n.vars ?? n).palette?.[r]?.main },
          })),
        {
          props: { color: 'action' },
          style: { color: (n.vars ?? n).palette?.action?.active },
        },
        {
          props: { color: 'disabled' },
          style: { color: (n.vars ?? n).palette?.action?.disabled },
        },
        { props: { color: 'inherit' }, style: { color: void 0 } },
      ],
    }))
  ),
  Rf = U.forwardRef(function (r, u) {
    const o = O3({ props: r, name: 'MuiSvgIcon' }),
      {
        children: c,
        className: f,
        color: h = 'inherit',
        component: p = 'svg',
        fontSize: g = 'medium',
        htmlColor: m,
        inheritViewBox: v = !1,
        titleAccess: S,
        viewBox: w = '0 0 24 24',
        ...j
      } = o,
      _ = U.isValidElement(c) && c.type === 'svg',
      R = {
        ...o,
        color: h,
        component: p,
        fontSize: g,
        instanceFontSize: r.fontSize,
        inheritViewBox: v,
        viewBox: w,
        hasSvgAsChild: _,
      },
      q = {};
    v || (q.viewBox = w);
    const H = _3(R);
    return b.jsxs(D3, {
      as: p,
      className: sp(H.root, f),
      focusable: 'false',
      color: m,
      'aria-hidden': S ? void 0 : !0,
      role: S ? 'img' : void 0,
      ref: u,
      ...q,
      ...j,
      ...(_ && c.props),
      ownerState: R,
      children: [
        _ ? c.props.children : c,
        S ? b.jsx('title', { children: S }) : null,
      ],
    });
  });
Rf.muiName = 'SvgIcon';
function At(n, r) {
  function u(o, c) {
    return b.jsx(Rf, { 'data-testid': void 0, ref: c, ...o, children: n });
  }
  return ((u.muiName = Rf.muiName), U.memo(U.forwardRef(u)));
}
const Ng = At(
    b.jsx('path', {
      d: 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
    })
  ),
  z3 = At(b.jsx('path', { d: 'M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z' })),
  N3 = At(b.jsx('path', { d: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' })),
  U3 = At(
    b.jsx('path', {
      d: 'M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z',
    })
  ),
  Ci = At(
    b.jsx('path', {
      d: 'M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z',
    })
  ),
  L3 = At(
    b.jsx('path', {
      d: 'M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2m0 14H4V8h16zm-2-1h-6v-2h6zM7.5 17l-1.41-1.41L8.67 13l-2.59-2.59L7.5 9l4 4z',
    })
  ),
  Lp = At(
    b.jsx('path', {
      d: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z',
    })
  ),
  Bp = At(
    b.jsx('path', {
      d: 'M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27',
    })
  ),
  B3 = At(
    b.jsx('path', {
      d: 'M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z',
    })
  ),
  Hp = At(
    b.jsx('path', {
      d: 'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z',
    })
  ),
  kp = At(
    b.jsx('path', {
      d: 'M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1',
    })
  );
qp.propTypes = { isDarkMode: pe.bool, setIsDarkMode: pe.func };
function qp({ isDarkMode: n, setIsDarkMode: r }) {
  const u = o => {
    r(o);
  };
  return b.jsx('button', {
    onClick: () => u(!n),
    className:
      'relative inline-flex items-center h-8 w-20 rounded-full transition-colors duration-300 border border-gray-300 bg-gray-200',
    children: b.jsx('span', {
      className: `absolute left-1 top-1 w-8 h-6 rounded-full flex items-center justify-center text-white transition-all duration-500 ${n ? 'translate-x-10 bg-gray-900' : 'translate-x-0 bg-yellow-400'}`,
      children: n
        ? b.jsx(kp, { className: 'w-5 h-3 text-white' })
        : b.jsx(Hp, { className: 'w-5 h-3 text-white' }),
    }),
  });
}
Yp.propTypes = {
  isDarkMode: pe.bool.isRequired,
  setIsDarkMode: pe.func.isRequired,
};
function Yp({ isDarkMode: n, setIsDarkMode: r }) {
  const [u, o] = U.useState(!1),
    c = () => {
      o(!u);
    },
    f = () => {
      o(!1);
    };
  return b.jsxs(b.Fragment, {
    children: [
      b.jsx('header', {
        className: 'absolute top-0 left-0 right-0 z-40',
        children: b.jsxs('div', {
          className: 'flex items-center justify-between px-4 py-3',
          children: [
            b.jsx('button', {
              onClick: c,
              className: `p-2 rounded-md transition-colors ${n ? ' hover:bg-gray-700 ' : 'hover:bg-gray-200 '}`,
              'aria-label': 'Toggle navigation',
              children: u
                ? b.jsx(Ng, {
                    className: `h-6 w-6 ${n ? 'text-primary-dark' : 'text-primary-light'}`,
                  })
                : b.jsx(z3, {
                    className: `h-6 w-6 ${n ? 'text-primary-dark' : 'text-primary-light'}`,
                  }),
            }),
            b.jsx('div', { className: 'w-10' }),
          ],
        }),
      }),
      u &&
        b.jsx('div', {
          className:
            'fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity',
          onClick: f,
        }),
      b.jsxs('nav', {
        className: `fixed top-0 left-0 h-full w-64 ${n ? 'bg-accent-dark' : 'bg-accent-light'} shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${u ? 'translate-x-0' : '-translate-x-full'}`,
        children: [
          b.jsxs('div', {
            className: 'p-6',
            children: [
              b.jsxs('div', {
                className: 'flex items-center justify-between mb-8',
                children: [
                  b.jsx('h2', {
                    className: `text-xl font-bold ${n ? 'text-primary-dark' : 'text-primary-light'}`,
                    children: 'Menu',
                  }),
                  b.jsx(qp, { isDarkMode: n, setIsDarkMode: r }),
                  b.jsx('button', {
                    onClick: f,
                    className:
                      'p-1 rounded-md hover:bg-opacity-80 transition-colors',
                    children: b.jsx(Ng, {
                      className: `h-5 w-5 ${n ? 'text-primary-dark' : 'text-primary-light'}`,
                    }),
                  }),
                ],
              }),
              b.jsxs('ul', {
                className: 'space-y-2',
                children: [
                  b.jsx('li', {
                    children: b.jsxs(qn, {
                      to: '/',
                      className: `flex items-center space-x-3 px-3 py-2 rounded-md ${n ? 'text-primary-dark hover:bg-gray-700 ' : 'text-primary-light hover:bg-gray-200 '} transition-colors`,
                      onClick: f,
                      children: [
                        b.jsx(N3, { className: 'h-5 w-5' }),
                        b.jsx('span', { children: 'Home' }),
                      ],
                    }),
                  }),
                  b.jsx('li', {
                    children: b.jsxs(qn, {
                      to: '/work',
                      className: `flex items-center space-x-3 px-3 py-2 rounded-md ${n ? 'text-primary-dark hover:bg-gray-700 ' : 'text-primary-light hover:bg-gray-200 '} transition-colors`,
                      onClick: f,
                      children: [
                        b.jsx(U3, { className: 'h-5 w-5' }),
                        b.jsx('span', { children: 'Work' }),
                      ],
                    }),
                  }),
                  b.jsx('li', {
                    children: b.jsxs(qn, {
                      to: '/education',
                      className: `flex items-center space-x-3 px-3 py-2 rounded-md ${n ? 'text-primary-dark hover:bg-gray-700 ' : 'text-primary-light hover:bg-gray-200 '} transition-colors`,
                      onClick: f,
                      children: [
                        b.jsx(Ci, { className: 'h-5 w-5' }),
                        b.jsx('span', { children: 'Education' }),
                      ],
                    }),
                  }),
                  b.jsx('li', {
                    children: b.jsxs(qn, {
                      to: '/projects',
                      className: `flex items-center space-x-3 px-3 py-2 rounded-md ${n ? 'text-primary-dark hover:bg-gray-700 ' : 'text-primary-light hover:bg-gray-200 '} transition-colors`,
                      onClick: f,
                      children: [
                        b.jsx(L3, { className: 'h-5 w-5' }),
                        b.jsx('span', { children: 'Projects' }),
                      ],
                    }),
                  }),
                  b.jsx('li', {
                    children: b.jsxs(qn, {
                      to: '/technologies',
                      className: `flex items-center space-x-3 px-3 py-2 rounded-md ${n ? 'text-primary-dark hover:bg-gray-700 ' : 'text-primary-light hover:bg-gray-200 '} transition-colors`,
                      onClick: f,
                      children: [
                        b.jsx(B3, { className: 'h-5 w-5' }),
                        b.jsx('span', { children: 'Technologies' }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
          b.jsxs('div', {
            className: 'flex items-center px-3 ',
            children: [
              b.jsx('button', {
                className: `space-x-3 px-3 rounded-md py-2 ${n ? 'text-primary-dark hover:bg-gray-700 ' : 'text-primary-light hover:bg-gray-200 '} transition-colors`,
                onClick: () =>
                  window.open(
                    'https://www.linkedin.com/in/ben-cannon04',
                    '_blank'
                  ),
                children: b.jsx(Lp, { className: 'h-5 w-5' }),
              }),
              b.jsx('button', {
                className: `space-x-3 px-3 py-2 rounded-md ${n ? 'text-primary-dark hover:bg-gray-700 ' : 'text-primary-light hover:bg-gray-200 '} transition-colors`,
                onClick: () =>
                  window.open('https://github.com/Ben-Cannon04', '_blank'),
                children: b.jsx(Bp, { className: 'h-5 w-5' }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Gp() {
  const [n, r] = v2('isDarkMode', 'false');
  U.useEffect(() => {
    (document.body.classList.remove(
      'min-h-screen',
      'bg-gradient-to-br',
      'from-gray-900',
      'via-gray-800',
      'to-gray-900',
      'from-blue-50',
      'via-white',
      'to-purple-50'
    ),
      n
        ? document.body.classList.add(
            'min-h-screen',
            'bg-gradient-to-br',
            'from-gray-900',
            'via-gray-800',
            'to-gray-900'
          )
        : document.body.classList.add(
            'min-h-screen',
            'bg-gradient-to-br',
            'from-blue-50',
            'via-white',
            'to-purple-50'
          ));
  }, [n]);
  const u = $n(),
    o = U.useRef('');
  return (
    U.useEffect(() => {
      u.hash && (o.current = u.hash.slice(1));
      let c = 0;
      const f = 2,
        h = () => {
          const p = document.getElementById(o.current);
          o.current && p
            ? setTimeout(() => {
                (p.scrollIntoView({ behavior: 'smooth', block: 'start' }),
                  (o.current = ''));
              }, 100)
            : c < f && (c++, setTimeout(h, 100));
        };
      h();
    }, [u]),
    b.jsxs('main', {
      className: `text-center py-2 min-h-screen ${n ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`,
      children: [
        b.jsx(Yp, { isDarkMode: n, setIsDarkMode: r }),
        b.jsx(Db, { context: [n, r] }),
      ],
    })
  );
}
const H3 = At(
    b.jsx('path', { d: 'm12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z' })
  ),
  k3 = At(b.jsx('path', { d: 'M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z' })),
  q3 = At(b.jsx('path', { d: 'M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z' }));
Ui.propTypes = { text: pe.string.isRequired, to: pe.string };
function Ui({ text: n, to: r }) {
  const u = ep(),
    o = () => {
      r && u(r);
    };
  return b.jsxs('span', {
    className: `px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm transition flex items-center gap-1 
        bg-blue-50 text-blue-700 hover:scale-105 shadow-sm hover:shadow-md ${r ? 'cursor-pointer hover:bg-blue-100 active:bg-blue-200 underline underline-offset-1' : ' cursor-default'}`,
    onClick: o,
    children: [n, r && b.jsx(q3, { className: 'w-3 h-3 ml-1' })],
  });
}
Lt.propTypes = {
  id: pe.string,
  title: pe.string.isRequired,
  subtitle: pe.string,
  timePeriod: pe.string,
  description: pe.string.isRequired,
  grade: pe.string,
  skills: pe.array,
  children: pe.node,
  image: pe.string,
  link: pe.string,
  linkTitle: pe.string,
  expandedByDefault: pe.bool,
  hide: pe.bool,
  isDarkMode: pe.bool.isRequired,
};
function Lt({
  id: n,
  title: r,
  subtitle: u,
  timePeriod: o,
  description: c,
  grade: f,
  skills: h,
  children: p,
  image: g,
  link: m,
  linkTitle: v = 'Show More',
  expandedByDefault: S = !1,
  hide: w = !1,
  isDarkMode: j,
}) {
  const [_, R] = U.useState(S);
  return w
    ? null
    : b.jsx('div', {
        id: n,
        className: `relative mb-8 sm:mb-12 rounded-xl sm:rounded-2xl border ${j ? 'border-border-dark' : 'border-border-light'}`,
        children: b.jsxs('div', {
          className: `${j ? 'bg-bg-dark' : 'bg-bg-light'} rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300`,
          children: [
            b.jsxs('div', {
              className: `p-6 ${p ? 'cursor-pointer' : ''}`,
              onClick: () => p && R(!_),
              children: [
                b.jsxs('div', {
                  className:
                    'flex flex-col sm:flex-row items-center sm:justify-between mb-4',
                  children: [
                    b.jsxs('div', {
                      className: 'flex-1',
                      children: [
                        b.jsxs('div', {
                          className:
                            'flex items-center justify-center sm:justify-start gap-2 mb-2 sm:mb-0',
                          children: [
                            b.jsx('h3', {
                              className: `text-xl sm:text-2xl font-bold ${j ? 'text-primary-dark' : 'text-primary-light'}`,
                              children: r,
                            }),
                            p &&
                              b.jsx('div', {
                                children: _
                                  ? b.jsx(H3, {
                                      className:
                                        'w-4 h-4 sm:w-5 sm:h-5 text-gray-500',
                                    })
                                  : b.jsx(k3, {
                                      className:
                                        'w-4 h-4 sm:w-5 sm:h-5 text-gray-500',
                                    }),
                              }),
                          ],
                        }),
                        b.jsx('p', {
                          className: `text-base text-center sm:text-left sm:text-lg ${j ? 'text-secondary-dark' : 'text-gray-600'} mb-2`,
                          children: u,
                        }),
                      ],
                    }),
                    o &&
                      b.jsx('div', {
                        className: 'text-left sm:text-right',
                        children: b.jsx('span', {
                          className:
                            'inline-block text-center sm:text-left bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium',
                          children: o,
                        }),
                      }),
                  ],
                }),
                g &&
                  b.jsx('div', {
                    className: 'flex justify-center sm:justify-start',
                    children: b.jsx('img', {
                      src: g,
                      className:
                        'h-48 sm:h-56 object-contain rounded-lg sm:rounded-xl mb-4 ',
                    }),
                  }),
                b.jsx('p', {
                  className: `${j ? 'text-primary-dark' : 'text-primary-light'} mb-4 text-sm sm:text-base text-center sm:text-left`,
                  children: c,
                }),
                !c && b.jsx('br', {}),
                h &&
                  b.jsxs('div', {
                    className: 'mb-4',
                    children: [
                      b.jsx('h4', {
                        className: `text-sm font-semibold ${j ? 'text-primary-dark' : 'text-gray-600'} mb-2 text-center sm:text-left`,
                        children: 'Key Skills:',
                      }),
                      b.jsxs('div', {
                        className:
                          'flex flex-wrap gap-2 justify-center sm:justify-start',
                        children: [
                          h.map((q, H) => b.jsx(Ui, { text: q }, H)),
                          m && b.jsx(Ui, { text: v, to: m }, 999),
                        ],
                      }),
                    ],
                  }),
                f &&
                  b.jsx('div', {
                    className:
                      'flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 mt-8 sm:mt-2',
                    children: b.jsxs('div', {
                      className: 'flex items-center',
                      children: [
                        b.jsx('span', {
                          className: `${j ? 'text-primary-dark' : 'text-gray-600'} text-sm text-gray-600 mr-2`,
                          children: 'Grade:',
                        }),
                        b.jsx('span', {
                          className: `font-semibold px-3 py-1 rounded-lg text-sm ${f === 'In Progress' ? 'bg-bg-warning text-text-warning' : 'bg-bg-success text-text-success'}`,
                          children: f,
                        }),
                      ],
                    }),
                  }),
              ],
            }),
            _ &&
              b.jsx('div', {
                className: `border-t border-gray-200 mt-2 p-4 sm:p-6 ${j ? 'bg-accent-dark' : 'bg-accent-light'} w-full rounded-b-xl sm:rounded-b-2xl`,
                children: p,
              }),
          ],
        }),
      });
}
vr.propTypes = {
  loading: pe.bool.isRequired,
  error: pe.object,
  isDarkMode: pe.bool.isRequired,
  children: pe.node,
};
function vr({ children: n, loading: r, error: u, isDarkMode: o }) {
  const [c, f] = U.useState(!1);
  return (
    U.useEffect(() => {
      if (c) f(!1);
      else {
        const h = setTimeout(() => {
          f(!0);
        }, 50);
        return () => clearTimeout(h);
      }
    }, [c]),
    c
      ? r
        ? b.jsx('div', {
            className: `inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] ${o ? 'text-primary-dark' : 'text-primary-light'}`,
            role: 'status',
            children: b.jsx('span', {
              className:
                '!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]',
              children: 'Loading...',
            }),
          })
        : u
          ? b.jsx('div', {
              children: b.jsx('h1', {
                className: o ? 'text-primary-dark' : 'text-primary-light',
                children: 'Error!',
              }),
            })
          : n
      : b.jsx(b.Fragment, {})
  );
}
function Y3() {
  const [n] = Hi();
  return b.jsx(vr, {
    loading: !1,
    isDarkMode: n,
    children: b.jsx('div', {
      className: 'min-h-screen py-6 px-3 sm:py-12 sm:px-4',
      children: b.jsxs('div', {
        className: 'max-w-4xl mx-auto',
        children: [
          b.jsx('div', {
            className: 'text-center mb-8 sm:mb-12',
            children: b.jsx('h1', {
              className: `text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 ${n ? 'text-primary-dark' : 'text-primary-light'}`,
              children: 'Work',
            }),
          }),
          b.jsxs('div', {
            className: 'relative',
            children: [
              b.jsx(
                Lt,
                {
                  title: 'Software Intern',
                  subtitle: 'Yunex Traffic',
                  description: `Yunex Traffic is a global leader in Intelligent Transport Systems (ITS) and Smart Mobility solutions,
                 operating in over 40 countries and serving more than 600 cities worldwide. I worked in the traffic enforcement section`,
                  isDarkMode: n,
                  skills: [
                    'Java',
                    'Python',
                    'CI/CD Pipelines',
                    'FFmpeg',
                    'JavaScipt',
                  ],
                  timePeriod: 'June - September 2023',
                  expandedByDefault: !0,
                  children: b.jsx('p', {
                    className: `${n ? 'text-primary-dark' : 'text-primary-light'}`,
                    children:
                      'I worked on multiple internal tools, as well as creating a program to create different test cases. I used core Java, python and react to create the tools.',
                  }),
                },
                0
              ),
              b.jsx(
                Lt,
                {
                  id: 'Certara',
                  title: 'Juniour Software Engineer',
                  subtitle: 'Certara',
                  description: `Certara is a global leader in biosimulation and model-informed drug development, providing software, scientific expertise,
               and services to accelerate and optimize the drug development process. I worked on the The Simcyp Simulator which is used to predict how drugs behave in the human body.`,
                  isDarkMode: n,
                  skills: ['C# wpf', 'C++', 'Design Patterns', 'Git'],
                  timePeriod: 'June 2024 - July 2025',
                  expandedByDefault: !0,
                  children: b.jsx('p', {
                    className: `${n ? 'text-primary-dark' : 'text-primary-light'}`,
                    children:
                      'During my placement, I worked on multiple versions of the Simcyp Simulator using an agile-inspired development process to implement features, fix bugs, and address technical debt. I developed using C# with WPF for the frontend and C++ for the backend. I gained experience with AutoMock and Autofac for unit testing and dependency injection, and used TestComplete with JavaScript to maintain regression tests. I also worked with NuGet packages and followed a used feature-branches. This role enhanced my full-stack development skills and exposed me to enterprise-grade software engineering practices.',
                  }),
                },
                1
              ),
            ],
          }),
        ],
      }),
    }),
  });
}
Vp.propTypes = {
  isDarkMode: pe.bool.isRequired,
  setIsDarkMode: pe.func.isRequired,
};
function Vp({ isDarkMode: n, setIsDarkMode: r }) {
  const u =
      'group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl',
    o = c => {
      r(c);
    };
  return b.jsx('div', {
    className: `${u} ${n ? 'bg-bg-dark border border-border-dark' : 'bg-gradient-to-br from-yellow-400 to-orange-500 border border-border-light'} text-white cursor-pointer flex items-center justify-center min-h-32`,
    onClick: () => o(!n),
    children: b.jsxs('div', {
      children: [
        n
          ? b.jsx(kp, { className: 'w-12 h-12 mx-auto mb-2' })
          : b.jsx(Hp, { className: 'w-12 h-12 mx-auto mb-2' }),
        b.jsx('p', {
          className: 'text-sm font-medium opacity-90',
          children: n ? 'Dark Mode' : 'Light Mode',
        }),
      ],
    }),
  });
}
const G3 = At(
    b.jsx('path', {
      d: 'M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2m-5 12H9v-2h6zm5-7H4V4l16-.02z',
    })
  ),
  V3 = At(
    b.jsx('path', {
      d: 'M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4',
    })
  ),
  $3 = At(
    b.jsx('path', {
      d: 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z',
    })
  ),
  Co = {
    LinkedIn: b.jsx(Lp, {
      fontSize: 'inherit',
      className: 'w-12 h-12 mx-auto mb-2',
    }),
    GitHub: b.jsx(Bp, {
      fontSize: 'inherit',
      className: 'w-12 h-12 mx-auto mb-2',
    }),
    PersonOutlineIcon: b.jsx(V3, {
      fontSize: 'inherit',
      className: 'size-24 mb-3',
    }),
    ArrowBackIcon: b.jsx($3, {
      fontSize: 'inherit',
      className: 'size-24 mb-3',
    }),
  };
Ri.propTypes = {
  title: pe.string.isRequired,
  content: pe.string.isRequired,
  link: pe.string,
  icon: pe.node,
  isDarkMode: pe.bool.isRequired,
};
function Ri({ title: n, content: r, link: u, icon: o, isDarkMode: c }) {
  return b.jsx(qn, {
    className: `group relative overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105  hover:shadow-lg sm:hover:shadow-2xl block ${c ? 'bg-bg-dark text-primary-dark border border-border-dark' : 'bg-bg-light text-primary-light border border-border-light'} ${r ? 'min-h-28 sm:min-h-32' : 'min-h-36 sm:min-h-40'} cursor-pointer`,
    to: u,
    children: b.jsxs('div', {
      className: 'p-4 sm:p-6 h-full flex flex-col',
      children: [
        b.jsxs('div', {
          className: 'flex-1',
          children: [
            b.jsxs('div', {
              className: 'flex flex-col items-center mb-2 sm:mb-3',
              children: [
                b.jsx('div', {
                  className: 'flex items-center ml-2 flex-shrink-0',
                  children: Co[o],
                }),
                b.jsx('h3', {
                  className: `font-bold text-base sm:text-lg leading-tight text-center ${c ? 'text-primary-dark' : 'text-primary-light'}`,
                  children: n,
                }),
              ],
            }),
            r &&
              b.jsx('p', {
                className: `text-xs sm:text-sm leading-relaxed text-center ${c ? 'text-secondary-dark' : 'text-secondary-light'}`,
                children: r,
              }),
          ],
        }),
        !r &&
          b.jsx('div', {
            className: 'flex items-center justify-center h-full ',
            children: b.jsxs('div', {
              className: `flex items-center ml-2 flex-shrink-0 ${c ? 'text-primary-dark' : 'text-primary-light'}`,
              children: [
                b.jsx(G3, {}),
                b.jsx('p', {
                  className: `text-xs sm:text-sm text-center ${c ? 'text-primary-dark' : 'text-primary-light'}`,
                  children: 'Empty',
                }),
              ],
            }),
          }),
      ],
    }),
  });
}
$p.propTypes = {
  title: pe.string.isRequired,
  content: pe.string.isRequired,
  link: pe.string,
  icon: pe.node,
  gradientFrom: pe.string,
  gradientTo: pe.string,
  textColour: pe.string,
};
function $p({
  title: n,
  content: r,
  link: u,
  icon: o,
  gradientFrom: c = 'blue-600',
  gradientTo: f = 'purple-700',
  textColour: h = 'white',
}) {
  return b.jsx('div', {
    className: `bg-gradient-to-r from-${c} to-${f} group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl col-span-1 sm:col-span-2 text-${h} `,
    onClick: () => u && window.open(u, '_blank'),
    children: b.jsx('div', {
      className: 'p-4 sm:p-6 h-full flex flex-col',
      children: b.jsxs('div', {
        className: 'flex flex-col items-center',
        children: [
          b.jsxs('div', {
            className: 'flex items-center mb-2 sm:mb-3',
            children: [
              b.jsxs('div', {
                children: [
                  b.jsx('p', { children: Co[o] }),
                  b.jsx('h3', {
                    className: 'font-bold text-lg text-center',
                    children: n,
                  }),
                ],
              }),
              b.jsx('div', {
                className: 'flex items-center space-x-2',
                children:
                  u &&
                  b.jsx('a', {
                    className:
                      'w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity',
                  }),
              }),
            ],
          }),
          r &&
            b.jsx('p', {
              className: 'text-xs sm:text-sm leading-relaxed text-center',
              children: r,
            }),
        ],
      }),
    }),
  });
}
Af.propTypes = {
  icon: pe.string.isRequired,
  link: pe.string,
  isDarkMode: pe.bool,
};
function Af({ icon: n, link: r, isDarkMode: u }) {
  const o =
    'group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl';
  switch (n) {
    case 'LinkedIn':
      return b.jsx('div', {
        className: `${o} bg-gradient-to-br from-blue-500 to-blue-700 text-white cursor-pointer flex items-center justify-center min-h-32`,
        onClick: () => r && window.open(r, '_blank'),
        children: b.jsxs('div', {
          className: 'text-center',
          children: [
            Co[n],
            b.jsx('p', {
              className: 'text-sm font-medium opacity-90',
              children: n,
            }),
          ],
        }),
      });
    default:
      return b.jsx('div', {
        className: `${o} ${u ? 'bg-bg-dark text-primary-dark border border-border-dark' : 'bg-bg-light text-primary-light border border-border-light'} cursor-pointer flex items-center justify-center min-h-32`,
        onClick: () => r && window.open(r, '_blank'),
        children: b.jsxs('div', {
          className: 'text-center',
          children: [
            Co[n],
            b.jsx('p', {
              className: 'text-sm font-medium opacity-90',
              children: n,
            }),
          ],
        }),
      });
  }
}
const X3 = () => {
  const [n, r] = Hi();
  return b.jsx(vr, {
    loading: !1,
    isDarkMode: n,
    children: b.jsx('div', {
      className: `min-h-screen transition-all duration-300 ${n ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`,
      children: b.jsxs('div', {
        className: 'px-4 py-8 sm:px-6 sm:py-12 lg:px-8',
        children: [
          b.jsxs('div', {
            className: 'text-center mb-8 sm:mb-12',
            children: [
              b.jsx('h1', {
                className: `text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 ${n ? 'text-primary-dark' : 'text-primary-light'}`,
                children: 'Ben Cannon',
              }),
              b.jsx('p', {
                className: `text-base sm:text-lg md:text-xl px-2 ${n ? 'text-gray-300' : 'text-gray-600'}`,
                children: 'Computer Science Student & Software Engineer',
              }),
              b.jsx('div', {
                className:
                  'w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full',
              }),
            ],
          }),
          b.jsxs('div', {
            className:
              'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto',
            children: [
              b.jsx($p, {
                title: 'about me.',
                content:
                  "Hi my name is Ben Cannon. I'm a Computer Science student at the University of Sheffield.",
                gradientFrom: 'blue-500',
                gradientTo: 'purple-500',
              }),
              b.jsx(Af, {
                isDarkMode: n,
                link: 'https://github.com/Ben-Cannon04',
                icon: 'GitHub',
              }),
              b.jsx(Ri, {
                isDarkMode: n,
                title: 'Work Experience',
                content:
                  'I have worked as a software intern at Yunex Traffic, as well as a junior developer at Certara',
                link: '/work',
              }),
              b.jsx(Vp, { isDarkMode: n, setIsDarkMode: r }),
              b.jsx(Ri, {
                isDarkMode: n,
                title: 'Technologies',
                content:
                  "Go to this page to see the languages and frameworks I'm profficient in.",
                link: '/technologies',
              }),
              b.jsx(Af, {
                isDarkMode: n,
                link: '"https://www.linkedin.com/in/ben-cannon04',
                icon: 'LinkedIn',
              }),
              b.jsx(Ri, {
                isDarkMode: n,
                title: 'Education',
                content:
                  "I'm currently partaking in my placement year of my computer science degree at the University of Sheffield. During these two years I have learnt java, javascript, haskell and ruby as well as improving my problem solving ability.",
                link: '/education',
              }),
              b.jsx(Ri, {
                isDarkMode: n,
                title: 'Projects',
                content:
                  "I've completed projects inn different languages and frameworks for university, work and personal use. Click here for more.",
                link: '/projects',
              }),
            ],
          }),
          b.jsx('div', {
            className: 'text-center mt-16',
            children: b.jsx('p', {
              className: `text-sm ${n ? 'text-gray-400' : 'text-gray-500'}`,
              children: '© 2025 Ben Cannon. Built with React',
            }),
          }),
        ],
      }),
    }),
  });
};
bt.propTypes = {
  title: pe.string.isRequired,
  content: pe.string.isRequired,
  skills: pe.array,
  isDarkMode: pe.bool.isRequired,
};
function bt({ title: n, content: r, skills: u, isDarkMode: o }) {
  return b.jsxs('div', {
    className: `${o ? 'bg-bg-dark' : 'bg-bg-light'} text-pretty border border-border-light rounded-xl sm:rounded-2xl m-3 p-4 text-left`,
    children: [
      b.jsx('h2', {
        className: `text-sm sm:text-base font-bold font-mono pt-4 ${o ? 'text-primary-dark' : 'text-primary-light'}`,
        children: n,
      }),
      b.jsx('p', {
        className: `lg:text-sm text-xs font-mono pb-1 ${o ? 'text-secondary-dark' : 'text-primary-light'}`,
        children: r,
      }),
      b.jsx('div', {
        className: 'flex flex-wrap gap-1 sm:gap-2 ',
        children: u?.map(({ text: c, to: f, isClickable: h }, p) =>
          b.jsx(Ui, { text: c, to: f, isClickable: h }, p)
        ),
      }),
    ],
  });
}
const Q3 = At(
  b.jsx('path', {
    d: 'M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4m13.1-8.16c.01-.11.02-.22.02-.34s-.01-.23-.03-.34l.74-.58c.07-.05.08-.15.04-.22l-.7-1.21c-.04-.08-.14-.1-.21-.08l-.86.35c-.18-.14-.38-.25-.59-.34l-.13-.93c-.02-.09-.09-.15-.18-.15h-1.4c-.09 0-.16.06-.17.15l-.13.93c-.21.09-.41.21-.59.34l-.87-.35c-.08-.03-.17 0-.21.08l-.7 1.21c-.04.08-.03.17.04.22l.74.58c-.02.11-.03.23-.03.34s.01.23.03.34l-.74.58c-.07.05-.08.15-.04.22l.7 1.21c.04.08.14.1.21.08l.87-.35c.18.14.38.25.59.34l.13.93c.01.09.08.15.17.15h1.4c.09 0 .16-.06.17-.15l.13-.93c.21-.09.41-.21.59-.34l.87.35c.08.03.17 0 .21-.08l.7-1.21c.04-.08.03-.17-.04-.22zm-2.6.91c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25m.42 3.93-.5-.87c-.03-.06-.1-.08-.15-.06l-.62.25q-.195-.15-.42-.24l-.09-.66c-.02-.06-.08-.1-.14-.1h-1c-.06 0-.11.04-.12.11l-.09.66c-.15.06-.29.15-.42.24l-.62-.25c-.06-.02-.12 0-.15.06l-.5.87c-.03.06-.02.12.03.16l.53.41c-.01.08-.02.16-.02.24s.01.17.02.24l-.53.41c-.05.04-.06.11-.03.16l.5.87c.03.06.1.08.15.06l.62-.25q.195.15.42.24l.09.66c.01.07.06.11.12.11h1c.06 0 .12-.04.12-.11l.09-.66c.15-.06.29-.15.42-.24l.62.25c.06.02.12 0 .15-.06l.5-.87c.03-.06.02-.12-.03-.16l-.52-.41c.01-.08.02-.16.02-.24s-.01-.17-.02-.24l.53-.41c.05-.04.06-.11.04-.17m-2.42 1.65c-.46 0-.83-.38-.83-.83 0-.46.38-.83.83-.83s.83.38.83.83c0 .46-.37.83-.83.83M4.74 9h8.53c.27 0 .49-.22.49-.49v-.02c0-.27-.22-.49-.49-.49H13c0-1.48-.81-2.75-2-3.45v.95c0 .28-.22.5-.5.5s-.5-.22-.5-.5V4.14C9.68 4.06 9.35 4 9 4s-.68.06-1 .14V5.5c0 .28-.22.5-.5.5S7 5.78 7 5.5v-.95C5.81 5.25 5 6.52 5 8h-.26c-.27 0-.49.22-.49.49v.03c0 .26.22.48.49.48M9 13c1.86 0 3.41-1.28 3.86-3H5.14c.45 1.72 2 3 3.86 3',
  })
);
function K3() {
  const [n] = Hi();
  return b.jsx(vr, {
    loading: !1,
    isDarkMode: n,
    children: b.jsx('div', {
      className: 'min-h-screen py-6 px-3 sm:py-12 sm:px-4',
      children: b.jsxs('div', {
        className: 'max-w-4xl mx-auto',
        children: [
          b.jsx('div', {
            className: 'text-center mb-8 sm:mb-12',
            children: b.jsx('h1', {
              className: `text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 ${n ? 'text-primary-dark' : 'text-primary-light'}`,
              children: 'Education',
            }),
          }),
          b.jsxs('div', {
            className: 'relative',
            children: [
              b.jsxs(
                Lt,
                {
                  title: 'A-Levels',
                  subtitle: 'Ashby School',
                  description: `My A-Levels built a strong foundation for studying Computer Science at university. Computer Science introduced core programming and problem-solving
               concepts, while Mathematics developed my analytical thinking, logic, and precision—key for algorithms and data structures. 
              Physics strengthened my modelling skills and understanding of systems, alongside practical experience with data, experimentation, and technical reasoning.`,
                  isDarkMode: n,
                  skills: ['Computer Science', 'Mathematics', 'Physics'],
                  grade: 'A*AA',
                  timePeriod: '2020-2022',
                  icon: b.jsx(Ci, {}),
                  children: [
                    b.jsx('h4', {
                      className: `text-lg font-semibold ${n ? 'text-primary-dark' : 'text-gray-800'} mb-4`,
                      children: 'Modules',
                    }),
                    b.jsx(bt, {
                      title: 'Computer Science',
                      content: `This course laid the foundation for understanding core principles of computer science, including both theoretical concepts and practical programming. 
                It covered areas such as algorithms, computational thinking, data structures, systems architecture, networking, and the societal impact of computing. A significant 
                component involved developing a software project independently, 
                applying the full software development lifecycle—from planning and implementation to testing and evaluation.`,
                      skills: [
                        { text: 'C#' },
                        { text: 'Unity' },
                        { text: 'Algorithms and Data Structures' },
                        { text: 'Course Work', to: '/projects#ChessGame' },
                      ],
                      isDarkMode: n,
                    }),
                    b.jsx(bt, {
                      title: 'Mathematics',
                      content: `A-Level Mathematics provided a strong foundation in analytical and problem-solving skills through the study of pure mathematics, 
                statistics, and mechanics. The course developed a deep understanding of mathematical principles and their application to real-world and scientific contexts, 
                laying essential groundwork for further study in computer science, engineering, and data-focused disciplines.`,
                      skills: [
                        { text: 'Calculus' },
                        { text: 'Proof Techniques' },
                        { text: 'Statistics' },
                      ],
                      isDarkMode: n,
                    }),
                    b.jsx(bt, {
                      title: 'Physics',
                      content: `A-Level Physics developed a deep understanding of the fundamental principles governing the physical world, from classical mechanics to quantum phenomena. 
                The course combined theoretical analysis with experimental work, emphasizing both conceptual understanding and mathematical modelling. It covered key areas such as forces,
                 energy, electricity, waves, particle physics, fields, and nuclear physics.
                 A significant component involved practical investigations, honing skills in data analysis, precision measurement, and scientific communication.`,
                      skills: [
                        { text: 'Mechanics' },
                        { text: 'Scientific Methodology' },
                      ],
                      isDarkMode: n,
                    }),
                  ],
                },
                0
              ),
              b.jsxs(
                Lt,
                {
                  title: 'Year 1',
                  subtitle: 'University of Sheffield',
                  description: `My first year provided a strong foundation in core areas of computer science, including software engineering, 
              web development, algorithms, computer architecture, networks, AI, and the mathematical principles underpinning computing. 
              I gained practical experience through individual and team-based projects,
               applying theoretical knowledge to real-world challenges while building a solid technical skill set across multiple domains.`,
                  isDarkMode: n,
                  skills: [
                    'Java',
                    'Algorithms and Data Structures',
                    'Team Work',
                  ],
                  grade: 'First Class Pass',
                  timePeriod: '2022-2023',
                  icon: b.jsx(Ci, {}),
                  children: [
                    b.jsx('h4', {
                      className: `text-lg font-semibold ${n ? 'text-primary-dark' : 'text-gray-800'} mb-4`,
                      children: 'Modules',
                    }),
                    b.jsx(bt, {
                      title: 'Introduction to Software Engineering',
                      content: `I learnt the theory behind different software methodologies and I worked in a team
                using an agile methodolgy to create a web app using rub and sinatra.`,
                      skills: [
                        { text: 'Ruby' },
                        { text: 'Git' },
                        { text: 'Agile Methodology' },
                        { text: 'Communication' },
                        {
                          text: 'Team Project',
                          to: '/projects#IntroductionToSoftwareEngineeringTeamProject',
                        },
                      ],
                      isDarkMode: n,
                    }),
                    b.jsx(bt, {
                      title: 'Foundations of Computer Science',
                      content: `Introduces core mathematical concepts essential to computing, 
                laying the groundwork for future modules. Covers foundational techniques with a focus on enthusiasm and understanding rather than full depth`,
                      skills: [
                        { text: 'Discrete Maths' },
                        { text: 'Continous Maths' },
                      ],
                      isDarkMode: n,
                    }),
                    b.jsx(bt, {
                      title: 'Java Programming',
                      content: `Teaches programming concepts through Java, emphasizing structured programming and progressing to object-oriented design. 
                Focuses on writing clear, well-structured code and using testing to guide development.`,
                      skills: [
                        { text: 'Java' },
                        { text: 'Object Object Oriented Programming' },
                      ],
                      isDarkMode: n,
                    }),
                    b.jsx(bt, {
                      title: 'Machines and Intelligence',
                      content:
                        'Teaches AI techniques throughout history, aided through practical demonstrations with the Miro robots',
                      skills: [{ text: 'Miro Code' }, { text: 'AI History' }],
                      isDarkMode: n,
                    }),
                    b.jsx(bt, {
                      title: 'Devices and Networks',
                      content: `Covers computer architecture basics such as digital logic, arithmetic, and instruction sets, along with advanced topics like
                 cache and pipelining. Also introduces network principles including protocols and reliable data transmission`,
                      skills: [
                        { text: 'Computer Architecture' },
                        { text: 'Networks' },
                      ],
                      isDarkMode: n,
                    }),
                    b.jsx(bt, {
                      title: 'Web and Internet Technology',
                      content: `Focuses on front-end web development using HTML, CSS, and JavaScript. Covers responsive design, accessibility, legal considerations, 
                and an introduction to information security`,
                      skills: [
                        { text: 'HTML' },
                        { text: 'CSS' },
                        { text: 'JavaScript' },
                      ],
                      isDarkMode: n,
                    }),
                    b.jsx(bt, {
                      title: 'Introduction to Algorithms and Data Structures',
                      content: `Introduces the design and analysis of efficient algorithms and data structures. 
                Covers algorithmic efficiency, searching, sorting, graph algorithms, and combinatorial problems like shortest path`,
                      skills: [
                        { text: 'Data Structures' },
                        { text: 'Problem Solving' },
                        { text: 'Big O Notation' },
                      ],
                      isDarkMode: n,
                    }),
                    b.jsx(bt, {
                      title: 'Gloabl Engineering Challenge Week',
                      content: `Working in a multi-disiplinary engineering team, we were tasked with finding a solution to 
                and engineering problem and presenting it to people with industrial expierence.`,
                      skills: [{ text: 'Team Work' }, { text: 'Presenting' }],
                      isDarkMode: n,
                    }),
                  ],
                },
                1
              ),
              b.jsxs(
                Lt,
                {
                  title: 'Year 2',
                  subtitle: 'University of Sheffield',
                  description: `In Year 2, I built on foundational knowledge with modules in machine learning, functional programming, logic, systems design, 
              and theoretical computation. I also worked on team projects that emphasized software architecture, security, and real-world application, preparing me for
               professional software development.`,
                  isDarkMode: n,
                  skills: ['System Design', 'Big O', 'Functional Programming'],
                  grade: 'First Class Pass',
                  timePeriod: '2023-2024',
                  icon: b.jsx(Ci, {}),
                  children: [
                    b.jsx(bt, {
                      title: 'Data Driven Computing',
                      content: `This module introduced the fundamentals of machine learning with a strong focus on practical applications. 
                It explored the full data pipeline—from acquisition and preparation to analysis and learning—using Python to develop an intuitive understanding of key concepts. 
                The hands-on approach helped bridge complex mathematical ideas with real-world use cases.`,
                      skills: [
                        { text: 'Python' },
                        { text: 'Supervised & UnSupervised Learning' },
                        { text: 'NumPy' },
                      ],
                      isDarkMode: n,
                    }),
                    b.jsx(bt, {
                      title: 'System Design and Security',
                      content: `This module provided a comprehensive foundation in software systems design.
                It also covered critical aspects of software validation, testing, and secure development practices. Theoretical concepts were reinforced through a team-based project, 
                fostering collaboration and practical application in preparation for larger-scale software engineering work.`,
                      skills: [
                        { text: 'UML' },
                        { text: 'Java' },
                        { text: 'Java Swing' },
                        { text: 'Design Patterns' },
                      ],
                      isDarkMode: n,
                    }),
                    b.jsx(bt, {
                      title: 'Robotics',
                      content: `This module explored the multidisciplinary foundations of robotics, combining insights from psychology, computer science, and engineering. 
                It focused on the design and implementation of the technologies behind modern robotics systems, providing both theoretical background and practical understanding.`,
                      skills: [
                        { text: 'Python' },
                        { text: 'Human-Robot Interaction' },
                      ],
                      isDarkMode: n,
                    }),
                    b.jsx(bt, {
                      title: 'Logic in Computer Science',
                      content: `This module introduced the formal foundations of logic as applied in computer science. It covered propositional and predicate logic, natural deduction, 
                and important meta-logical concepts such as soundness, completeness, and decidability. 
                It also explored applications like automated reasoning, verification using modal and temporal logics, and type systems.`,
                      skills: [
                        { text: 'Propositional Logic' },
                        { text: 'Predicate Logic' },
                        { text: 'Temporal Logic' },
                      ],
                      isDarkMode: n,
                    }),
                    b.jsx(bt, {
                      title: 'Functional Programming',
                      content: `This module introduced functional programming principles using Haskell. It covered core concepts such as pure functions, 
                immutability, recursion, and higher-order functions, alongside advanced topics like lazy evaluation, list comprehensions, and type classes.`,
                      skills: [{ text: 'Haskell' }],
                      isDarkMode: n,
                    }),
                    b.jsx(bt, {
                      title: ' Automata, Computation and Complexity',
                      content: `This module examined the theoretical underpinnings of computation through formal models such as finite automata, pushdown automata, and Turing machines. 
                It also addressed computability and computational complexity, providing insight into what can be computed and how efficiently.`,
                      skills: [
                        { text: 'Turing Machines' },
                        { text: 'Big O' },
                        { text: 'NP-Hardness' },
                      ],
                      isDarkMode: n,
                    }),
                    b.jsx(bt, {
                      title: 'Software Hut',
                      content: `Software Hut simulated a professional software development environment, 
                where students engineered a real-world software product for an external client. 
                The module emphasized teamwork, communication, and use of industry tools and methodologies, including requirements engineering,
                 project management, modelling, testing, and client interaction.`,
                      skills: [
                        { text: 'Agile' },
                        { text: 'Client Communication' },
                        { text: 'Team Project', to: '/projects#SoftwareHut' },
                      ],
                      isDarkMode: n,
                    }),
                    b.jsx(bt, {
                      title: "Engineering You're Hired",
                      content: `This week long module focused on developing employability and professional skills essential for engineers in real-world settings, by building on the Global Engineering Challenge Module. 
                I gained experience working to client requirements, adapting to shifting goals, 
                and collaborating across disciplines. The emphasis was on demonstrating key soft skills alongside technical proficiency,
                 equipping me to better communicate, plan, and deliver under pressure—preparing me for both interviews and professional environments.`,
                      skills: [
                        { text: 'Task Priorisation' },
                        { text: 'Communication' },
                        { text: 'Presentation' },
                        { text: 'Adaptability' },
                      ],
                      isDarkMode: n,
                    }),
                  ],
                },
                2
              ),
              b.jsx(
                Lt,
                {
                  title: 'Year in Industry',
                  subtitle: 'Certara',
                  description: `I gained over a year of pratical expierience working in an agile team using C#, C++, Git and JavaScript.
              This helped me develop my communication and Technical skills.`,
                  isDarkMode: n,
                  skills: ['C#', 'C++', 'Communication'],
                  timePeriod: 'June 2024 - July 2025',
                  grade: 'Pass',
                  icon: b.jsx(Q3, {}),
                  link: '/work#Certara',
                },
                3
              ),
              b.jsx(
                Lt,
                {
                  title: 'Year 3',
                  subtitle: 'University of Sheffield',
                  description:
                    'I will start my 3rd year of University in September 2025',
                  isDarkMode: n,
                  grade: 'In Progress',
                  timePeriod: '2025-Present',
                  icon: b.jsx(Ci, {}),
                },
                4
              ),
            ],
          }),
        ],
      }),
    }),
  });
}
const Z3 = '/assets/SheffJam9-D_10oW5Z.png',
  J3 = '/assets/chess-CI3KKJSR.png';
Jf.propTypes = {
  filter: pe.string.isRequired,
  setFilter: pe.func.isRequired,
  filters: pe.arrayOf(pe.string).isRequired,
  isDarkMode: pe.bool.isRequired,
};
function Jf({ filter: n, setFilter: r, filters: u, isDarkMode: o }) {
  return b.jsx('div', {
    className: 'flex gap-4 m-5 p-4 items-center justify-center',
    children: u.map(c =>
      b.jsx(
        'button',
        {
          onClick: () => r(c),
          className: `px-2 sm:px-4 py-2 transition-all duration-200 hover:opacity-80 border-b-2 ${o ? 'text-primary-dark' : 'text-primary-light'}
                      ${n === c ? `${o ? 'border-white' : 'border-black'} hover:border-opacity-80 font-semibold scale-105` : 'border-transparent'}`,
          children: c,
        },
        c
      )
    ),
  });
}
function P3() {
  const [n] = Hi(),
    [r, u] = U.useState('all');
  return b.jsx(vr, {
    loading: !1,
    error: null,
    isDarkMode: n,
    children: b.jsx('div', {
      className: 'min-h-screen py-6 px-3 sm:py-12 sm:px-4',
      children: b.jsxs('div', {
        className: 'max-w-4xl mx-auto',
        children: [
          b.jsx('div', {
            className: 'text-center mb-8 sm:mb-12',
            children: b.jsx('h1', {
              className: `text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 ${n ? 'text-primary-dark' : 'text-primary-light'}`,
              children: 'Projects',
            }),
          }),
          b.jsx(Jf, {
            filter: r,
            setFilter: u,
            filters: ['all', 'personal', 'education', 'work'],
            isDarkMode: n,
          }),
          b.jsxs('div', {
            className: 'relative',
            children: [
              b.jsx(
                Lt,
                {
                  id: 'Portfolio',
                  title: 'Portfolio',
                  subtitle: 'Personal',
                  description: `The Portfolio You're using now, I've created in my own time to help show my software expierence. I used react js to create the website
               and GitHub Pages to host it.  I've used Tailwind CSS for the styling, as it makes it quiker to implement as well as easier to remember what the stylings mean.
              React router provided a simple way to navigate the website.
              use-local-storage was used to cache the theme.`,
                  isDarkMode: n,
                  skills: ['ReactJS', 'Tailwind Css', 'GitHub Pages'],
                  timePeriod: 'Ongoing',
                  hide: r != 'all' && r != 'personal',
                },
                0
              ),
              b.jsx(
                Lt,
                {
                  id: 'IntroductionToSoftwareEngineeringTeamProject',
                  title: 'Introduction To Software Engineering Team Project',
                  subtitle: 'University Year 1',
                  description: `I collaborated within in a team of 8, using ruby with Sinatra to create a web application.
              This project helped improve my communicaton and presenting skills.`,
                  isDarkMode: n,
                  skills: ['Ruby', 'Communication', 'Presenting'],
                  timePeriod: '2022 - 2023',
                  hide: r != 'all' && r != 'education',
                },
                10
              ),
              b.jsx(
                Lt,
                {
                  id: 'SoftwareHut',
                  title: 'Software Hut Team Project',
                  subtitle: 'University Year 2',
                  description: `I worked within a team of 6,  in order to create a website which acted as a proof of concept.
              We used ruby on rails backend, react frontend with RTK query for the middleware and Redux for the state management. 
              I acted as the front-end lead, where I was responsible for deigning the frontend architecture, frontend tasks as well as the implementation.
              I also lead the presentation of the project to the client.`,
                  isDarkMode: n,
                  skills: ['Ruby on Rails', 'React', 'Presenting'],
                  timePeriod: '2023 - 2024',
                  hide: r != 'all' && r != 'education',
                },
                11
              ),
              b.jsx(
                Lt,
                {
                  id: 'ShefJam9',
                  title: 'Rogue-like Game',
                  subtitle: 'SheffJam 9',
                  description: `My team competed in a GameJam, where we created a rougue-like game to fit the theme 'Villian'. 
              We used Unity and C# to implement this, as well as creating our own assets.
              We won the 'best interpretation of the theme'.`,
                  isDarkMode: n,
                  skills: ['Unity', 'C#'],
                  timePeriod: 'July 2023',
                  image: Z3,
                  hide: r != 'all' && r != 'personal',
                },
                1
              ),
              b.jsx(
                Lt,
                {
                  id: 'FinanceFate',
                  title: 'Finance Fate',
                  subtitle: 'HackSheffield7',
                  description: `We created a guessing game using the data provided from Capital One's API. We used C# ASP.NET for the backend and Bootstrap for the frontend to achieve this.
              This won us the prize for 'best use of Capital One's API'.`,
                  isDarkMode: n,
                  skills: ['C# ASP.NET', 'Bootstrap'],
                  timePeriod: 'July 2022',
                  hide: r != 'all' && r != 'personal',
                },
                2
              ),
              b.jsx(
                Lt,
                {
                  id: 'ChessGame',
                  title: 'Chess Game',
                  subtitle: 'A-level Computer Science Project',
                  description: `For my A-level computer Sciience project I created a chess game with Player vs Player, Player vs Ai and a Statistics page.
              I used C# with unity to implement this. This was my introduction to both C# and Unity.`,
                  image: J3,
                  isDarkMode: n,
                  skills: ['Unity', 'C#'],
                  timePeriod: 'January - May 2021',
                  hide: r != 'all' && r != 'education',
                },
                3
              ),
              b.jsx(
                Lt,
                {
                  id: 'SimcypSimulatorV24',
                  title: 'Simcyp Simulator V24',
                  subtitle: 'Certara',
                  description: `I contributed to multiple documents, as well as fixing bugs in the C# Wpf Frontend. 
              I worked in an agile-like software team to implement these features. This included communicating within my team as well as to the scientists (clients),
              implementing the feature and creating unit tests.`,
                  isDarkMode: n,
                  skills: ['C# wpf', 'Design Patterns', 'Autofac', 'Automoq'],
                  timePeriod: 'August - December 2024',
                  hide: r != 'all' && r != 'work',
                },
                4
              ),
              b.jsx(
                Lt,
                {
                  id: 'SimcypSimulatorV25',
                  title: 'Simcyp Simulator V25',
                  subtitle: 'Certara',
                  description: `I worked on many different parts of the 2025 version of the Simcyp Simulator. I also in adition to implementing features and writing units,
               I wrote regression tests uing TestComplete with JavaScript. I also contributed to the backend on the simulator, expanding my C++ knowledge.`,
                  isDarkMode: n,
                  skills: ['C# wpf', 'C++', 'JavaScript', 'Test Complete'],
                  timePeriod: 'January - July 2025',
                  hide: r != 'all' && r != 'work',
                },
                5
              ),
            ],
          }),
        ],
      }),
    }),
  });
}
Hn.propTypes = {
  title: pe.string.isRequired,
  subtitle: pe.string,
  proficiency: pe.string,
  projects: pe.array,
  children: pe.node,
  hide: pe.bool,
  isDarkMode: pe.bool.isRequired,
};
function Hn({
  title: n,
  subtitle: r,
  proficiency: u,
  projects: o,
  children: c,
  hide: f = !1,
  isDarkMode: h,
}) {
  if (f) return null;
  const p = g => {
    switch (g) {
      case 'Beginner':
        return 'bg-bg-danger text-text-danger';
      case 'In Progress':
        return 'bg-bg-warning text-text-warning';
      case 'Intermediate':
        return 'bg-bg-info text-text-info';
      case 'Advanced':
        return 'bg-bg-success text-text-success';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };
  return b.jsx('div', {
    className: `relative mb-8 sm:mb-12 rounded-xl sm:rounded-2xl border ${h ? 'border-border-dark' : 'border-border-light'}`,
    children: b.jsx('div', {
      className: `${h ? 'bg-bg-dark' : 'bg-bg-light'} rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300`,
      children: b.jsx('div', {
        className:
          'flex flex-col sm:flex-row items-center sm:justify-between p-4',
        children: b.jsxs('div', {
          className: 'flex-1',
          children: [
            b.jsx('div', {
              className:
                'flex items-center justify-center sm:justify-start gap-2 mb-2 sm:mb-0',
              children: b.jsx('h3', {
                className: `text-xl sm:text-2xl font-bold ${h ? 'text-primary-dark' : 'text-primary-light'}`,
                children: n,
              }),
            }),
            b.jsx('p', {
              className: `text-base text-center sm:text-left sm:text-lg ${h ? 'text-secondary-dark' : 'text-gray-600'} mb-2`,
              children: r,
            }),
            b.jsx('div', {
              className: `${h ? 'text-primary-dark' : 'text-primary-light'} mb-4 text-sm sm:text-base text-center sm:text-left`,
              children: c,
            }),
            !c && b.jsx('br', {}),
            o &&
              b.jsxs('div', {
                className: 'mb-4',
                children: [
                  b.jsx('h4', {
                    className: `text-sm font-semibold ${h ? 'text-primary-dark' : 'text-gray-600'} mb-2 text-center sm:text-left`,
                    children: 'Projects used in:',
                  }),
                  b.jsx('div', {
                    className:
                      'flex flex-wrap gap-2 justify-center sm:justify-start',
                    children: o.map(({ text: g, to: m, isClickable: v }, S) =>
                      b.jsx(Ui, { text: g, to: m, isClickable: v }, S)
                    ),
                  }),
                ],
              }),
            u &&
              b.jsx('div', {
                className:
                  'flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 mt-8 sm:mt-2',
                children: b.jsxs('div', {
                  className: 'flex items-center',
                  children: [
                    b.jsx('span', {
                      className: `${h ? 'text-primary-dark' : 'text-gray-600'} text-sm text-gray-600 mr-2`,
                      children: 'Proficiency:',
                    }),
                    b.jsx('span', {
                      className: `font-semibold px-3 py-1 rounded-lg text-sm ${p(u)}`,
                      children: u,
                    }),
                  ],
                }),
              }),
          ],
        }),
      }),
    }),
  });
}
function F3() {
  const [n] = Hi(),
    [r, u] = U.useState('all');
  return b.jsx(vr, {
    loading: !1,
    error: null,
    isDarkMode: n,
    children: b.jsx('div', {
      className: 'min-h-screen py-6 px-3 sm:py-12 sm:px-4',
      children: b.jsxs('div', {
        className: 'max-w-4xl mx-auto',
        children: [
          b.jsx('div', {
            className: 'text-center mb-8 sm:mb-12',
            children: b.jsx('h1', {
              className: `text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 ${n ? 'text-primary-dark' : 'text-primary-light'}`,
              children: 'Software Technologies',
            }),
          }),
          b.jsx(Jf, {
            filter: r,
            setFilter: u,
            filters: ['all', 'C#', 'JavaScript', 'C++', 'Java'],
            isDarkMode: n,
          }),
          b.jsxs('div', {
            className: 'relative',
            children: [
              b.jsx(
                Hn,
                {
                  title: 'Wpf',
                  subtitle: 'C#',
                  isDarkMode: n,
                  projects: [
                    {
                      text: 'Simcyp Simulator V24',
                      to: '/projects#SimcypSimulatorV24',
                    },
                    {
                      text: 'Simcyp Simulator V25',
                      to: '/projects/#SimcypSimulatorV25',
                    },
                  ],
                  proficiency: 'Advanced',
                  hide: r != 'all' && r != 'C#',
                  children: b.jsx('p', {
                    children:
                      "I'm expirenced in c# wpf, using it for 13 months in industry.",
                  }),
                },
                0
              ),
              b.jsx(
                Hn,
                {
                  title: 'Unity',
                  subtitle: 'C#',
                  isDarkMode: n,
                  projects: [
                    { text: 'Rogue-like Game', to: '/projects#SheffJam9' },
                    { text: 'Chess Game', to: '/projects#ChessGame' },
                  ],
                  proficiency: 'Intermediate',
                  hide: r != 'all' && r != 'C#',
                  children: b.jsx('p', {
                    children:
                      "I've used unity in personal projects, school projects as well as at GameJams and Game development Society.",
                  }),
                },
                1
              ),
              b.jsx(
                Hn,
                {
                  title: 'React',
                  subtitle: 'JavaScript',
                  isDarkMode: n,
                  projects: [
                    { text: 'Portfolio', to: '/projects#Portfolio' },
                    { text: 'University', to: '/education' },
                  ],
                  proficiency: 'Intermediate',
                  hide: r != 'all' && r != 'JavaScript',
                  children: b.jsx('p', {
                    children:
                      "I've used React in industry as well as at university and in personal projects. I'm also learning react native with Expo in my own time currently.",
                  }),
                },
                2
              ),
              b.jsx(
                Hn,
                {
                  title: 'Core Java',
                  subtitle: 'Java',
                  isDarkMode: n,
                  projects: [
                    { text: 'University', to: '/education' },
                    { text: 'Yunex Traffic', to: '/work' },
                  ],
                  proficiency: 'Intermediate',
                  hide: r != 'all' && r != 'Java',
                  children: b.jsx('p', {
                    children:
                      "I've used Java throughout university, create console application and Java Swing Applications. I've also used it in industry as a backend with FFmpeg. In the future I would be interested in learning Java Spring Boot.",
                  }),
                },
                3
              ),
              b.jsx(
                Hn,
                {
                  title: 'TypeScript',
                  isDarkMode: n,
                  projects: [{ text: 'Yunex Traffic', to: '/work' }],
                  proficiency: 'Intermediate',
                  hide: r != 'all' && r != 'JavaScript',
                  children: b.jsx('p', {
                    children:
                      "I've used TypeScript in industry. I'm also using typescript in my own time",
                  }),
                },
                22
              ),
              b.jsx(
                Hn,
                {
                  title: 'C++',
                  isDarkMode: n,
                  projects: [
                    {
                      text: 'Simcyp Simulator V24',
                      to: '/projects#SimcypSimulatorV24',
                    },
                    {
                      text: 'Simcyp Simulator V25',
                      to: '/projects#SimcypSimulatorV25',
                    },
                  ],
                  proficiency: 'Beginner',
                  hide: r != 'all' && r != 'C++',
                  children: b.jsx('p', {
                    children:
                      "I've used C++ in Industry for the backend of the Simcyp Simulator.",
                  }),
                },
                4
              ),
              b.jsx(
                Hn,
                {
                  title: 'ASP.Net',
                  subtitle: 'C#',
                  isDarkMode: n,
                  projects: [
                    { text: 'Finanace Fate', to: '/projects#FinanceFate' },
                  ],
                  proficiency: 'Beginner',
                  hide: r != 'all' && r != 'C#',
                  children: b.jsx('p', {
                    children:
                      'I have a small expierence with Asp.Net and would be intersed in furthering my knowledge.',
                  }),
                },
                6
              ),
            ],
          }),
        ],
      }),
    }),
  });
}
const W3 = a2([
    {
      path: '/',
      element: b.jsx(Gp, {}),
      children: [
        { path: '/', element: b.jsx(X3, {}) },
        { path: '/work', element: b.jsx(Y3, {}) },
        { path: '/education', element: b.jsx(K3, {}) },
        { path: '/projects', element: b.jsx(P3, {}) },
        { path: '/technologies', element: b.jsx(F3, {}) },
      ],
    },
  ]),
  I3 = i1.createRoot(document.getElementById('root'));
I3.render(b.jsx(g2, { router: W3, children: b.jsx(Gp, {}) }));
