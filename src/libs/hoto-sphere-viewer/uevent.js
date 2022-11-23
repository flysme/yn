/**
 * Minified by jsDelivr using Terser v5.13.1.
 * Original file: /npm/uevent@2.2.0/browser.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*!
 * uevent (v2.2.0)
 * @copyright 2015-2022 Damien "Mistic" Sorel <contact@git.strangeplanet.fr>
 * @licence MIT
 */
!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], t)
    : t(
        ((e =
          'undefined' != typeof globalThis
            ? globalThis
            : e || self).uEvent = {}),
      )
})(this, function (e) {
  'use strict'
  var t = function () {
      return !0
    },
    n = function () {
      return !1
    },
    i = (function () {
      function e(e, t, i) {
        Object.defineProperties(this, {
          target: {
            get: function () {
              return e
            },
            set: function () {},
            enumerable: !0,
          },
          type: {
            get: function () {
              return t
            },
            set: function () {},
            enumerable: !0,
          },
          args: {
            get: function () {
              return i
            },
            set: function () {},
            enumerable: !0,
          },
        }),
          (this.isDefaultPrevented = n),
          (this.isPropagationStopped = n)
      }
      var i = e.prototype
      return (
        (i.preventDefault = function () {
          this.isDefaultPrevented = t
        }),
        (i.stopPropagation = function () {
          this.isPropagationStopped = t
        }),
        e
      )
    })(),
    o = (function () {
      function e() {}
      var t = e.prototype
      return (
        (t.on = function (e, t) {
          var n = this
          if (((this.__events = this.__events || {}), 'object' == typeof e))
            for (var i in e)
              e.hasOwnProperty(i) &&
                ((this.__events[i] = this.__events[i] || []),
                this.__events[i].push(e[i]))
          else
            e.split(' ').forEach(function (e) {
              ;(n.__events[e] = n.__events[e] || []), n.__events[e].push(t)
            })
          return this
        }),
        (t.off = function (e, t) {
          var n = this
          if ('object' == typeof e) {
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                if (this.__events && i in this.__events) {
                  var o = this.__events[i].indexOf(e[i])
                  ;-1 !== o && this.__events[i].splice(o, 1)
                }
                if (this.__once && i in this.__once) {
                  var s = this.__once[i].indexOf(e[i])
                  ;-1 !== s && this.__once[i].splice(s, 1)
                }
              }
          } else
            e
              ? e.split(' ').forEach(function (e) {
                  if (n.__events && e in n.__events)
                    if (t) {
                      var i = n.__events[e].indexOf(t)
                      ;-1 !== i && n.__events[e].splice(i, 1)
                    } else n.__events[e].length = 0
                  if (n.__once && e in n.__once)
                    if (t) {
                      var o = n.__once[e].indexOf(t)
                      ;-1 !== o && n.__once[e].splice(o, 1)
                    } else n.__once[e].length = 0
                })
              : ((this.__events = {}), (this.__once = {}))
          return this
        }),
        (t.once = function (e, t) {
          var n = this
          if (((this.__once = this.__once || {}), 'object' == typeof e))
            for (var i in e)
              e.hasOwnProperty(i) &&
                ((this.__once[i] = this.__once[i] || []),
                this.__once[i].push(e[i]))
          else
            e.split(' ').forEach(function (e) {
              ;(n.__once[e] = n.__once[e] || []), n.__once[e].push(t)
            })
          return this
        }),
        (t.trigger = function (e) {
          var t = Array.prototype.slice.call(arguments, 1),
            n = new i(this, e, t)
          if (this.__events && e in this.__events)
            for (var o = 0, s = this.__events[e].length; o < s; o++) {
              var r = this.__events[e][o]
              if (
                ('object' == typeof r
                  ? r.handleEvent(n)
                  : r.call.apply(r, [this, n].concat(t)),
                n.isPropagationStopped())
              )
                break
            }
          if (this.__once && e in this.__once) {
            for (var _ = 0, c = this.__once[e].length; _ < c; _++) {
              var f = this.__once[e][_]
              if (
                ('object' == typeof f
                  ? f.handleEvent(n)
                  : f.call.apply(f, [this, n].concat(t)),
                n.isPropagationStopped())
              )
                break
            }
            delete this.__once[e]
          }
          return n
        }),
        (t.change = function (e, t) {
          var n = Array.prototype.slice.call(arguments, 2),
            o = new i(this, e, n)
          if (((o.value = t), this.__events && e in this.__events))
            for (var s = 0, r = this.__events[e].length; s < r; s++) {
              var _ = this.__events[e][s]
              if (
                ((o.value =
                  'object' == typeof _
                    ? _.handleEvent(o)
                    : _.call.apply(_, [this, o, o.value].concat(n))),
                o.isPropagationStopped())
              )
                break
            }
          return o.value
        }),
        e
      )
    })(),
    s = o
  var r = {
      EventEmitter: s,
      Event: i,
      mixin: function (e) {
        return (
          (e = 'function' == typeof e ? e.prototype : e),
          ['on', 'off', 'once', 'trigger', 'change'].forEach(function (t) {
            e[t] = s.prototype[t]
          }),
          e
        )
      },
    },
    _ = r.EventEmitter,
    c = r.Event,
    f = r.mixin
  ;(e.Event = c),
    (e.EventEmitter = _),
    (e.default = r),
    (e.mixin = f),
    Object.defineProperty(e, '__esModule', { value: !0 })
})
//# sourceMappingURL=/sm/6e1cf618058ab48868e5db5dfff14558719776929185eb69b3789d1452b3a600.map
