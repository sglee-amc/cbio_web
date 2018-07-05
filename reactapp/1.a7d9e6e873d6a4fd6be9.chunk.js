webpackJsonp([1], {
  1057: function (e, t, n) {
    var r, i, o;
    ! function (a, l, s) {
      ! function (a) {
        "use strict";
        i = [n(90)], r = a, (o = "function" == typeof r ? r.apply(t, i) : r) !== s && (e.exports = o)
      }(function (e) {
        "use strict";

        function t(t, n, r, i) {
          this.id = r, this.target = t, this.tooltip = M, this.elements = {
            target: t
          }, this._id = G + "-" + r, this.timers = {
            img: {}
          }, this.options = n, this.plugins = {}, this.cache = {
            event: {},
            target: e(),
            disabled: S,
            attr: i,
            onTooltip: S,
            lastClass: ""
          }, this.rendered = this.destroyed = this.disabled = this.waiting = this.hiddenDuringWait = this.positioning = this.triggering = S
        }

        function n(t) {
          return t === M || "object" !== e.type(t)
        }

        function r(t) {
          return !(e.isFunction(t) || t && t.attr || t.length || "object" === e.type(t) && (t.jquery || t.then))
        }

        function i(t) {
          var i, o, a, l;
          return n(t) ? S : (n(t.metadata) && (t.metadata = {
            type: t.metadata
          }), "content" in t && (i = t.content, n(i) || i.jquery || i.done ? (o = r(i) ? S : i, i = t.content = {
            text: o
          }) : o = i.text, "ajax" in i && (a = i.ajax, l = a && a.once !== S, delete i.ajax, i.text = function (t, n) {
            var r = o || e(this).attr(n.options.content.attr) || "Loading...",
              i = e.ajax(e.extend({}, a, {
                context: n
              })).then(a.success, M, a.error).then(function (e) {
                return e && l && n.set("content.text", e), e
              }, function (e, t, r) {
                n.destroyed || 0 === e.status || n.set("content.text", t + ": " + r)
              });
            return l ? r : (n.set("content.text", r), i)
          }), "title" in i && (e.isPlainObject(i.title) && (i.button = i.title.button, i.title = i.title.text), r(i.title || S) && (i.title = S))), "position" in t && n(t.position) && (t.position = {
            my: t.position,
            at: t.position
          }), "show" in t && n(t.show) && (t.show = t.show.jquery ? {
            target: t.show
          } : t.show === x ? {
            ready: x
          } : {
            event: t.show
          }), "hide" in t && n(t.hide) && (t.hide = t.hide.jquery ? {
            target: t.hide
          } : {
            event: t.hide
          }), "style" in t && n(t.style) && (t.style = {
            classes: t.style
          }), e.each(B, function () {
            this.sanitize && this.sanitize(t)
          }), t)
        }

        function o(e, t) {
          for (var n, r = 0, i = e, o = t.split("."); i = i[o[r++]];) r < o.length && (n = i);
          return [n || e, o.pop()]
        }

        function u(e, t) {
          var n, r, i;
          for (n in this.checks)
            if (this.checks.hasOwnProperty(n))
              for (r in this.checks[n]) this.checks[n].hasOwnProperty(r) && (i = new RegExp(r, "i").exec(e)) && (t.push(i), ("builtin" === n || this.plugins[n]) && this.checks[n][r].apply(this.plugins[n] || this, t))
        }

        function c(e) {
          return q.concat("").join(e ? "-" + e + " " : " ")
        }

        function f(t, n) {
          if (n > 0) return setTimeout(e.proxy(t, this), n);
          t.call(this)
        }

        function p(e) {
          this.tooltip.hasClass(X) || (clearTimeout(this.timers.show), clearTimeout(this.timers.hide), this.timers.show = f.call(this, function () {
            this.toggle(x, e)
          }, this.options.show.delay))
        }

        function d(t) {
          if (!this.tooltip.hasClass(X) && !this.destroyed) {
            var n = e(t.relatedTarget),
              r = n.closest(W)[0] === this.tooltip[0],
              i = n[0] === this.options.show.target[0];
            if (clearTimeout(this.timers.show), clearTimeout(this.timers.hide), this !== n[0] && "mouse" === this.options.position.target && r || this.options.hide.fixed && /mouse(out|leave|move)/.test(t.type) && (r || i)) try {
              t.preventDefault(), t.stopImmediatePropagation()
            } catch (e) {} else this.timers.hide = f.call(this, function () {
              this.toggle(S, t)
            }, this.options.hide.delay, this)
          }
        }

        function h(e) {
          !this.tooltip.hasClass(X) && this.options.hide.inactive && (clearTimeout(this.timers.inactive), this.timers.inactive = f.call(this, function () {
            this.hide(e)
          }, this.options.hide.inactive))
        }

        function m(e) {
          this.rendered && this.tooltip[0].offsetWidth > 0 && this.reposition(e)
        }

        function y(t, n, r) {
          e(l.body).delegate(t, (n.split ? n : n.join("." + G + " ")) + "." + G, function () {
            var t = T.api[e.attr(this, U)];
            t && !t.disabled && r.apply(t, arguments)
          })
        }

        function v(n, r, o) {
          var a, s, u, c, f, p = e(l.body),
            d = n[0] === l ? p : n,
            h = n.metadata ? n.metadata(o.metadata) : M,
            m = "html5" === o.metadata.type && h ? h[o.metadata.name] : M,
            y = n.data(o.metadata.name || "qtipopts");
          try {
            y = "string" == typeof y ? e.parseJSON(y) : y
          } catch (e) {}
          if (c = e.extend(x, {}, T.defaults, o, "object" == typeof y ? i(y) : M, i(m || h)), s = c.position, c.id = r, "boolean" == typeof c.content.text) {
            if (u = n.attr(c.content.attr), c.content.attr === S || !u) return S;
            c.content.text = u
          }
          if (s.container.length || (s.container = p), s.target === S && (s.target = d), c.show.target === S && (c.show.target = d), c.show.solo === x && (c.show.solo = s.container.closest("body")), c.hide.target === S && (c.hide.target = d), c.position.viewport === x && (c.position.viewport = s.container), s.container = s.container.eq(0), s.at = new k(s.at, x), s.my = new k(s.my), n.data(G))
            if (c.overwrite) n.qtip("destroy", !0);
            else if (c.overwrite === S) return S;
          return n.attr(z, r), c.suppress && (f = n.attr("title")) && n.removeAttr("title").attr($, f).attr("title", ""), a = new t(n, c, r, !!u), n.data(G, a), a
        }

        function g(e) {
          return e.charAt(0).toUpperCase() + e.slice(1)
        }

        function b(e, t) {
          var n, r, i = t.charAt(0).toUpperCase() + t.slice(1),
            o = (t + " " + he.join(i + " ") + i).split(" "),
            a = 0;
          if (de[t]) return e.css(de[t]);
          for (; n = o[a++];)
            if ((r = e.css(n)) !== s) return de[t] = n, r
        }

        function w(e, t) {
          return Math.ceil(parseFloat(b(e, t)))
        }

        function E(e, t) {
          this._ns = "tip", this.options = t, this.offset = t.offset, this.size = [t.width, t.height], this.qtip = e, this.init(e)
        }

        function _(e, t) {
          this.options = t, this._ns = "-modal", this.qtip = e, this.init(e)
        }

        function C(e) {
          this._ns = "ie6", this.qtip = e, this.init(e)
        }
        var T, A, k, O, I, x = !0,
          S = !1,
          M = null,
          P = "x",
          D = "y",
          j = "width",
          N = "top",
          R = "left",
          L = "right",
          F = "center",
          V = "flipinvert",
          H = "shift",
          B = {},
          G = "qtip",
          z = "data-hasqtip",
          U = "data-qtip-id",
          q = ["ui-widget", "ui-tooltip"],
          W = "." + G,
          Q = "click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),
          K = G + "-fixed",
          Y = G + "-default",
          Z = G + "-focus",
          J = G + "-hover",
          X = G + "-disabled",
          $ = "oldtitle",
          ee = {
            ie: function () {
              var e, t;
              for (e = 4, t = l.createElement("div");
                (t.innerHTML = "\x3c!--[if gt IE " + e + "]><i></i><![endif]--\x3e") && t.getElementsByTagName("i")[0]; e += 1);
              return e > 4 ? e : NaN
            }(),
            iOS: parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) || S
          };
        A = t.prototype, A._when = function (t) {
          return e.when.apply(e, t)
        }, A.render = function (t) {
          if (this.rendered || this.destroyed) return this;
          var n = this,
            r = this.options,
            i = this.cache,
            o = this.elements,
            a = r.content.text,
            l = r.content.title,
            s = r.content.button,
            u = r.position,
            c = [];
          return e.attr(this.target[0], "aria-describedby", this._id), i.posClass = this._createPosClass((this.position = {
            my: u.my,
            at: u.at
          }).my), this.tooltip = o.tooltip = e("<div/>", {
            id: this._id,
            class: [G, Y, r.style.classes, i.posClass].join(" "),
            width: r.style.width || "",
            height: r.style.height || "",
            tracking: "mouse" === u.target && u.adjust.mouse,
            role: "alert",
            "aria-live": "polite",
            "aria-atomic": S,
            "aria-describedby": this._id + "-content",
            "aria-hidden": x
          }).toggleClass(X, this.disabled).attr(U, this.id).data(G, this).appendTo(u.container).append(o.content = e("<div />", {
            class: G + "-content",
            id: this._id + "-content",
            "aria-atomic": x
          })), this.rendered = -1, this.positioning = x, l && (this._createTitle(), e.isFunction(l) || c.push(this._updateTitle(l, S))), s && this._createButton(), e.isFunction(a) || c.push(this._updateContent(a, S)), this.rendered = x, this._setWidget(), e.each(B, function (e) {
            var t;
            "render" === this.initialize && (t = this(n)) && (n.plugins[e] = t)
          }), this._unassignEvents(), this._assignEvents(), this._when(c).then(function () {
            n._trigger("render"), n.positioning = S, n.hiddenDuringWait || !r.show.ready && !t || n.toggle(x, i.event, S), n.hiddenDuringWait = S
          }), T.api[this.id] = this, this
        }, A.destroy = function (t) {
          function n() {
            if (!this.destroyed) {
              this.destroyed = x;
              var t, n = this.target,
                r = n.attr($);
              this.rendered && this.tooltip.stop(1, 0).find("*").remove().end().remove(), e.each(this.plugins, function () {
                this.destroy && this.destroy()
              });
              for (t in this.timers) this.timers.hasOwnProperty(t) && clearTimeout(this.timers[t]);
              n.removeData(G).removeAttr(U).removeAttr(z).removeAttr("aria-describedby"), this.options.suppress && r && n.attr("title", r).removeAttr($), this._unassignEvents(), this.options = this.elements = this.cache = this.timers = this.plugins = this.mouse = M, delete T.api[this.id]
            }
          }
          return this.destroyed ? this.target : (t === x && "hide" !== this.triggering || !this.rendered ? n.call(this) : (this.tooltip.one("tooltiphidden", e.proxy(n, this)), !this.triggering && this.hide()), this.target)
        }, O = A.checks = {
          builtin: {
            "^id$": function (t, n, r, i) {
              var o = r === x ? T.nextid : r,
                a = G + "-" + o;
              o !== S && o.length > 0 && !e("#" + a).length ? (this._id = a, this.rendered && (this.tooltip[0].id = this._id, this.elements.content[0].id = this._id + "-content", this.elements.title[0].id = this._id + "-title")) : t[n] = i
            },
            "^prerender": function (e, t, n) {
              n && !this.rendered && this.render(this.options.show.ready)
            },
            "^content.text$": function (e, t, n) {
              this._updateContent(n)
            },
            "^content.attr$": function (e, t, n, r) {
              this.options.content.text === this.target.attr(r) && this._updateContent(this.target.attr(n))
            },
            "^content.title$": function (e, t, n) {
              if (!n) return this._removeTitle();
              n && !this.elements.title && this._createTitle(), this._updateTitle(n)
            },
            "^content.button$": function (e, t, n) {
              this._updateButton(n)
            },
            "^content.title.(text|button)$": function (e, t, n) {
              this.set("content." + t, n)
            },
            "^position.(my|at)$": function (e, t, n) {
              "string" == typeof n && (this.position[t] = e[t] = new k(n, "at" === t))
            },
            "^position.container$": function (e, t, n) {
              this.rendered && this.tooltip.appendTo(n)
            },
            "^show.ready$": function (e, t, n) {
              n && (!this.rendered && this.render(x) || this.toggle(x))
            },
            "^style.classes$": function (e, t, n, r) {
              this.rendered && this.tooltip.removeClass(r).addClass(n)
            },
            "^style.(width|height)": function (e, t, n) {
              this.rendered && this.tooltip.css(t, n)
            },
            "^style.widget|content.title": function () {
              this.rendered && this._setWidget()
            },
            "^style.def": function (e, t, n) {
              this.rendered && this.tooltip.toggleClass(Y, !!n)
            },
            "^events.(render|show|move|hide|focus|blur)$": function (t, n, r) {
              this.rendered && this.tooltip[(e.isFunction(r) ? "" : "un") + "bind"]("tooltip" + n, r)
            },
            "^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)": function () {
              if (this.rendered) {
                var e = this.options.position;
                this.tooltip.attr("tracking", "mouse" === e.target && e.adjust.mouse), this._unassignEvents(), this._assignEvents()
              }
            }
          }
        }, A.get = function (e) {
          if (this.destroyed) return this;
          var t = o(this.options, e.toLowerCase()),
            n = t[0][t[1]];
          return n.precedance ? n.string() : n
        };
        var te = /^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i,
          ne = /^prerender|show\.ready/i;
        A.set = function (t, n) {
          if (this.destroyed) return this;
          var r, a = this.rendered,
            l = S,
            s = this.options;
          return "string" == typeof t ? (r = t, t = {}, t[r] = n) : t = e.extend({}, t), e.each(t, function (n, r) {
            if (a && ne.test(n)) return void delete t[n];
            var i, u = o(s, n.toLowerCase());
            i = u[0][u[1]], u[0][u[1]] = r && r.nodeType ? e(r) : r, l = te.test(n) || l, t[n] = [u[0], u[1], r, i]
          }), i(s), this.positioning = x, e.each(t, e.proxy(u, this)), this.positioning = S, this.rendered && this.tooltip[0].offsetWidth > 0 && l && this.reposition("mouse" === s.position.target ? M : this.cache.event), this
        }, A._update = function (t, n) {
          var r = this,
            i = this.cache;
          return this.rendered && t ? (e.isFunction(t) && (t = t.call(this.elements.target, i.event, this) || ""), e.isFunction(t.then) ? (i.waiting = x, t.then(function (e) {
            return i.waiting = S, r._update(e, n)
          }, M, function (e) {
            return r._update(e, n)
          })) : t === S || !t && "" !== t ? S : (t.jquery && t.length > 0 ? n.empty().append(t.css({
            display: "block",
            visibility: "visible"
          })) : n.html(t), this._waitForContent(n).then(function (e) {
            r.rendered && r.tooltip[0].offsetWidth > 0 && r.reposition(i.event, !e.length)
          }))) : S
        }, A._waitForContent = function (t) {
          var n = this.cache;
          return n.waiting = x, (e.fn.imagesLoaded ? t.imagesLoaded() : (new e.Deferred).resolve([])).done(function () {
            n.waiting = S
          }).promise()
        }, A._updateContent = function (e, t) {
          this._update(e, this.elements.content, t)
        }, A._updateTitle = function (e, t) {
          this._update(e, this.elements.title, t) === S && this._removeTitle(S)
        }, A._createTitle = function () {
          var t = this.elements,
            n = this._id + "-title";
          t.titlebar && this._removeTitle(), t.titlebar = e("<div />", {
            class: G + "-titlebar " + (this.options.style.widget ? c("header") : "")
          }).append(t.title = e("<div />", {
            id: n,
            class: G + "-title",
            "aria-atomic": x
          })).insertBefore(t.content).delegate(".qtip-close", "mousedown keydown mouseup keyup mouseout", function (t) {
            e(this).toggleClass("ui-state-active ui-state-focus", "down" === t.type.substr(-4))
          }).delegate(".qtip-close", "mouseover mouseout", function (t) {
            e(this).toggleClass("ui-state-hover", "mouseover" === t.type)
          }), this.options.content.button && this._createButton()
        }, A._removeTitle = function (e) {
          var t = this.elements;
          t.title && (t.titlebar.remove(), t.titlebar = t.title = t.button = M, e !== S && this.reposition())
        }, A._createPosClass = function (e) {
          return G + "-pos-" + (e || this.options.position.my).abbrev()
        }, A.reposition = function (t, n) {
          if (!this.rendered || this.positioning || this.destroyed) return this;
          this.positioning = x;
          var r, i, o, s, u = this.cache,
            c = this.tooltip,
            f = this.options.position,
            p = f.target,
            d = f.my,
            h = f.at,
            m = f.viewport,
            y = f.container,
            v = f.adjust,
            g = v.method.split(" "),
            b = c.outerWidth(S),
            w = c.outerHeight(S),
            E = 0,
            _ = 0,
            C = c.css("position"),
            T = {
              left: 0,
              top: 0
            },
            A = c[0].offsetWidth > 0,
            k = t && "scroll" === t.type,
            O = e(a),
            I = y[0].ownerDocument,
            M = this.mouse;
          if (e.isArray(p) && 2 === p.length) h = {
            x: R,
            y: N
          }, T = {
            left: p[0],
            top: p[1]
          };
          else if ("mouse" === p) h = {
            x: R,
            y: N
          }, (!v.mouse || this.options.hide.distance) && u.origin && u.origin.pageX ? t = u.origin : !t || t && ("resize" === t.type || "scroll" === t.type) ? t = u.event : M && M.pageX && (t = M), "static" !== C && (T = y.offset()), I.body.offsetWidth !== (a.innerWidth || I.documentElement.clientWidth) && (i = e(l.body).offset()), T = {
            left: t.pageX - T.left + (i && i.left || 0),
            top: t.pageY - T.top + (i && i.top || 0)
          }, v.mouse && k && M && (T.left -= (M.scrollX || 0) - O.scrollLeft(), T.top -= (M.scrollY || 0) - O.scrollTop());
          else {
            if ("event" === p ? t && t.target && "scroll" !== t.type && "resize" !== t.type ? u.target = e(t.target) : t.target || (u.target = this.elements.target) : "event" !== p && (u.target = e(p.jquery ? p : this.elements.target)), p = u.target, p = e(p).eq(0), 0 === p.length) return this;
            p[0] === l || p[0] === a ? (E = ee.iOS ? a.innerWidth : p.width(), _ = ee.iOS ? a.innerHeight : p.height(), p[0] === a && (T = {
              top: (m || p).scrollTop(),
              left: (m || p).scrollLeft()
            })) : B.imagemap && p.is("area") ? r = B.imagemap(this, p, h, B.viewport ? g : S) : B.svg && p && p[0].ownerSVGElement ? r = B.svg(this, p, h, B.viewport ? g : S) : (E = p.outerWidth(S), _ = p.outerHeight(S), T = p.offset()), r && (E = r.width, _ = r.height, i = r.offset, T = r.position), T = this.reposition.offset(p, T, y), (ee.iOS > 3.1 && ee.iOS < 4.1 || ee.iOS >= 4.3 && ee.iOS < 4.33 || !ee.iOS && "fixed" === C) && (T.left -= O.scrollLeft(), T.top -= O.scrollTop()), (!r || r && r.adjustable !== S) && (T.left += h.x === L ? E : h.x === F ? E / 2 : 0, T.top += "bottom" === h.y ? _ : h.y === F ? _ / 2 : 0)
          }
          return T.left += v.x + (d.x === L ? -b : d.x === F ? -b / 2 : 0), T.top += v.y + ("bottom" === d.y ? -w : d.y === F ? -w / 2 : 0), B.viewport ? (o = T.adjusted = B.viewport(this, T, f, E, _, b, w), i && o.left && (T.left += i.left), i && o.top && (T.top += i.top), o.my && (this.position.my = o.my)) : T.adjusted = {
            left: 0,
            top: 0
          }, u.posClass !== (s = this._createPosClass(this.position.my)) && (u.posClass = s, c.removeClass(u.posClass).addClass(s)), this._trigger("move", [T, m.elem || m], t) ? (delete T.adjusted, n === S || !A || isNaN(T.left) || isNaN(T.top) || "mouse" === p || !e.isFunction(f.effect) ? c.css(T) : e.isFunction(f.effect) && (f.effect.call(c, this, e.extend({}, T)), c.queue(function (t) {
            e(this).css({
              opacity: "",
              height: ""
            }), ee.ie && this.style.removeAttribute("filter"), t()
          })), this.positioning = S, this) : this
        }, A.reposition.offset = function (t, n, r) {
          function i(e, t) {
            n.left += t * e.scrollLeft(), n.top += t * e.scrollTop()
          }
          if (!r[0]) return n;
          var o, a, s, u, c = e(t[0].ownerDocument),
            f = !!ee.ie && "CSS1Compat" !== l.compatMode,
            p = r[0];
          do {
            "static" !== (a = e.css(p, "position")) && ("fixed" === a ? (s = p.getBoundingClientRect(), i(c, -1)) : (s = e(p).position(), s.left += parseFloat(e.css(p, "borderLeftWidth")) || 0, s.top += parseFloat(e.css(p, "borderTopWidth")) || 0), n.left -= s.left + (parseFloat(e.css(p, "marginLeft")) || 0), n.top -= s.top + (parseFloat(e.css(p, "marginTop")) || 0), o || "hidden" === (u = e.css(p, "overflow")) || "visible" === u || (o = e(p)))
          } while (p = p.offsetParent);
          return o && (o[0] !== c[0] || f) && i(o, 1), n
        };
        var re = (k = A.reposition.Corner = function (e, t) {
          e = ("" + e).replace(/([A-Z])/, " $1").replace(/middle/gi, F).toLowerCase(), this.x = (e.match(/left|right/i) || e.match(/center/) || ["inherit"])[0].toLowerCase(), this.y = (e.match(/top|bottom|center/i) || ["inherit"])[0].toLowerCase(), this.forceY = !!t;
          var n = e.charAt(0);
          this.precedance = "t" === n || "b" === n ? D : P
        }).prototype;
        re.invert = function (e, t) {
          this[e] = this[e] === R ? L : this[e] === L ? R : t || this[e]
        }, re.string = function (e) {
          var t = this.x,
            n = this.y,
            r = t !== n ? "center" === t || "center" !== n && (this.precedance === D || this.forceY) ? [n, t] : [t, n] : [t];
          return !1 !== e ? r.join(" ") : r
        }, re.abbrev = function () {
          var e = this.string(!1);
          return e[0].charAt(0) + (e[1] && e[1].charAt(0) || "")
        }, re.clone = function () {
          return new k(this.string(), this.forceY)
        }, A.toggle = function (t, n) {
          var r = this.cache,
            i = this.options,
            o = this.tooltip;
          if (n) {
            if (/over|enter/.test(n.type) && r.event && /out|leave/.test(r.event.type) && i.show.target.add(n.target).length === i.show.target.length && o.has(n.relatedTarget).length) return this;
            r.event = e.event.fix(n)
          }
          if (this.waiting && !t && (this.hiddenDuringWait = x), !this.rendered) return t ? this.render(1) : this;
          if (this.destroyed || this.disabled) return this;
          var a, s, u, c = t ? "show" : "hide",
            f = this.options[c],
            p = this.options.position,
            d = this.options.content,
            h = this.tooltip.css("width"),
            m = this.tooltip.is(":visible"),
            y = t || 1 === f.target.length,
            v = !n || f.target.length < 2 || r.target[0] === n.target;
          return (typeof t).search("boolean|number") && (t = !m), a = !o.is(":animated") && m === t && v, s = a ? M : !!this._trigger(c, [90]), this.destroyed ? this : (s !== S && t && this.focus(n), !s || a ? this : (e.attr(o[0], "aria-hidden", !t), t ? (this.mouse && (r.origin = e.event.fix(this.mouse)), e.isFunction(d.text) && this._updateContent(d.text, S), e.isFunction(d.title) && this._updateTitle(d.title, S), !I && "mouse" === p.target && p.adjust.mouse && (e(l).bind("mousemove." + G, this._storeMouse), I = x), h || o.css("width", o.outerWidth(S)), this.reposition(n, arguments[2]), h || o.css("width", ""), f.solo && ("string" == typeof f.solo ? e(f.solo) : e(W, f.solo)).not(o).not(f.target).qtip("hide", new e.Event("tooltipsolo"))) : (clearTimeout(this.timers.show), delete r.origin, I && !e(W + '[tracking="true"]:visible', f.solo).not(o).length && (e(l).unbind("mousemove." + G), I = S), this.blur(n)), u = e.proxy(function () {
            t ? (ee.ie && o[0].style.removeAttribute("filter"), o.css("overflow", ""), "string" == typeof f.autofocus && e(this.options.show.autofocus, o).focus(), this.options.show.target.trigger("qtip-" + this.id + "-inactive")) : o.css({
              display: "",
              visibility: "",
              opacity: "",
              left: "",
              top: ""
            }), this._trigger(t ? "visible" : "hidden")
          }, this), f.effect === S || y === S ? (o[c](), u()) : e.isFunction(f.effect) ? (o.stop(1, 1), f.effect.call(o, this), o.queue("fx", function (e) {
            u(), e()
          })) : o.fadeTo(90, t ? 1 : 0, u), t && f.target.trigger("qtip-" + this.id + "-inactive"), this))
        }, A.show = function (e) {
          return this.toggle(x, e)
        }, A.hide = function (e) {
          return this.toggle(S, e)
        }, A.focus = function (t) {
          if (!this.rendered || this.destroyed) return this;
          var n = e(W),
            r = this.tooltip,
            i = parseInt(r[0].style.zIndex, 10),
            o = T.zindex + n.length;
          return r.hasClass(Z) || this._trigger("focus", [o], t) && (i !== o && (n.each(function () {
            this.style.zIndex > i && (this.style.zIndex = this.style.zIndex - 1)
          }), n.filter("." + Z).qtip("blur", t)), r.addClass(Z)[0].style.zIndex = o), this
        }, A.blur = function (e) {
          return !this.rendered || this.destroyed ? this : (this.tooltip.removeClass(Z), this._trigger("blur", [this.tooltip.css("zIndex")], e), this)
        }, A.disable = function (e) {
          return this.destroyed ? this : ("toggle" === e ? e = !(this.rendered ? this.tooltip.hasClass(X) : this.disabled) : "boolean" != typeof e && (e = x), this.rendered && this.tooltip.toggleClass(X, e).attr("aria-disabled", e), this.disabled = !!e, this)
        }, A.enable = function () {
          return this.disable(S)
        }, A._createButton = function () {
          var t = this,
            n = this.elements,
            r = n.tooltip,
            i = this.options.content.button,
            o = "string" == typeof i,
            a = o ? i : "Close tooltip";
          n.button && n.button.remove(), i.jquery ? n.button = i : n.button = e("<a />", {
            class: "qtip-close " + (this.options.style.widget ? "" : G + "-icon"),
            title: a,
            "aria-label": a
          }).prepend(e("<span />", {
            class: "ui-icon ui-icon-close",
            html: "&times;"
          })), n.button.appendTo(n.titlebar || r).attr("role", "button").click(function (e) {
            return r.hasClass(X) || t.hide(e), S
          })
        }, A._updateButton = function (e) {
          if (!this.rendered) return S;
          var t = this.elements.button;
          e ? this._createButton() : t.remove()
        }, A._setWidget = function () {
          var e = this.options.style.widget,
            t = this.elements,
            n = t.tooltip,
            r = n.hasClass(X);
          n.removeClass(X), X = e ? "ui-state-disabled" : "qtip-disabled", n.toggleClass(X, r), n.toggleClass("ui-helper-reset " + c(), e).toggleClass(Y, this.options.style.def && !e), t.content && t.content.toggleClass(c("content"), e), t.titlebar && t.titlebar.toggleClass(c("header"), e), t.button && t.button.toggleClass(G + "-icon", !e)
        }, A._storeMouse = function (t) {
          return (this.mouse = e.event.fix(t)).type = "mousemove", this
        }, A._bind = function (t, n, r, i, o) {
          if (t && r && n.length) {
            var a = "." + this._id + (i ? "-" + i : "");
            return e(t).bind((n.split ? n : n.join(a + " ")) + a, e.proxy(r, o || this)), this
          }
        }, A._unbind = function (t, n) {
          return t && e(t).unbind("." + this._id + (n ? "-" + n : "")), this
        }, A._trigger = function (t, n, r) {
          var i = new e.Event("tooltip" + t);
          return i.originalEvent = r && e.extend({}, r) || this.cache.event || M, this.triggering = t, this.tooltip.trigger(i, [this].concat(n || [])), this.triggering = S, !i.isDefaultPrevented()
        }, A._bindEvents = function (t, n, r, i, o, a) {
          var l = r.filter(i).add(i.filter(r)),
            s = [];
          l.length && (e.each(n, function (n, r) {
            var i = e.inArray(r, t);
            i > -1 && s.push(t.splice(i, 1)[0])
          }), s.length && (this._bind(l, s, function (e) {
            (!!this.rendered && this.tooltip[0].offsetWidth > 0 ? a : o).call(this, e)
          }), r = r.not(l), i = i.not(l))), this._bind(r, t, o), this._bind(i, n, a)
        }, A._assignInitialEvents = function (t) {
          function n(t) {
            if (this.disabled || this.destroyed) return S;
            this.cache.event = t && e.event.fix(t), this.cache.target = t && e(t.target), clearTimeout(this.timers.show), this.timers.show = f.call(this, function () {
              this.render("object" == typeof t || r.show.ready)
            }, r.prerender ? 0 : r.show.delay)
          }
          var r = this.options,
            i = r.show.target,
            o = r.hide.target,
            a = r.show.event ? e.trim("" + r.show.event).split(" ") : [],
            l = r.hide.event ? e.trim("" + r.hide.event).split(" ") : [];
          this._bind(this.elements.target, ["remove", "removeqtip"], function () {
            this.destroy(!0)
          }, "destroy"), /mouse(over|enter)/i.test(r.show.event) && !/mouse(out|leave)/i.test(r.hide.event) && l.push("mouseleave"), this._bind(i, "mousemove", function (e) {
            this._storeMouse(e), this.cache.onTarget = x
          }), this._bindEvents(a, l, i, o, n, function () {
            if (!this.timers) return S;
            clearTimeout(this.timers.show)
          }), (r.show.ready || r.prerender) && n.call(this, t)
        }, A._assignEvents = function () {
          var t = this,
            n = this.options,
            r = n.position,
            i = this.tooltip,
            o = n.show.target,
            s = n.hide.target,
            u = r.container,
            c = r.viewport,
            f = e(l),
            y = e(a),
            v = n.show.event ? e.trim("" + n.show.event).split(" ") : [],
            g = n.hide.event ? e.trim("" + n.hide.event).split(" ") : [];
          e.each(n.events, function (e, n) {
            t._bind(i, "toggle" === e ? ["tooltipshow", "tooltiphide"] : ["tooltip" + e], n, null, i)
          }), /mouse(out|leave)/i.test(n.hide.event) && "window" === n.hide.leave && this._bind(f, ["mouseout", "blur"], function (e) {
            /select|option/.test(e.target.nodeName) || e.relatedTarget || this.hide(e)
          }), n.hide.fixed ? s = s.add(i.addClass(K)) : /mouse(over|enter)/i.test(n.show.event) && this._bind(s, "mouseleave", function () {
            clearTimeout(this.timers.show)
          }), ("" + n.hide.event).indexOf("unfocus") > -1 && this._bind(u.closest("html"), ["mousedown", "touchstart"], function (t) {
            var n = e(t.target),
              r = this.rendered && !this.tooltip.hasClass(X) && this.tooltip[0].offsetWidth > 0,
              i = n.parents(W).filter(this.tooltip[0]).length > 0;
            n[0] === this.target[0] || n[0] === this.tooltip[0] || i || this.target.has(n[0]).length || !r || this.hide(t)
          }), "number" == typeof n.hide.inactive && (this._bind(o, "qtip-" + this.id + "-inactive", h, "inactive"), this._bind(s.add(i), T.inactiveEvents, h)), this._bindEvents(v, g, o, s, p, d), this._bind(o.add(i), "mousemove", function (e) {
            if ("number" == typeof n.hide.distance) {
              var t = this.cache.origin || {},
                r = this.options.hide.distance,
                i = Math.abs;
              (i(e.pageX - t.pageX) >= r || i(e.pageY - t.pageY) >= r) && this.hide(e)
            }
            this._storeMouse(e)
          }), "mouse" === r.target && r.adjust.mouse && (n.hide.event && this._bind(o, ["mouseenter", "mouseleave"], function (e) {
            if (!this.cache) return S;
            this.cache.onTarget = "mouseenter" === e.type
          }), this._bind(f, "mousemove", function (e) {
            this.rendered && this.cache.onTarget && !this.tooltip.hasClass(X) && this.tooltip[0].offsetWidth > 0 && this.reposition(e)
          })), (r.adjust.resize || c.length) && this._bind(e.event.special.resize ? c : y, "resize", m), r.adjust.scroll && this._bind(y.add(r.container), "scroll", m)
        }, A._unassignEvents = function () {
          var t = this.options,
            n = t.show.target,
            r = t.hide.target,
            i = e.grep([this.elements.target[0], this.rendered && this.tooltip[0], t.position.container[0], t.position.viewport[0], t.position.container.closest("html")[0], a, l], function (e) {
              return "object" == typeof e
            });
          n && n.toArray && (i = i.concat(n.toArray())), r && r.toArray && (i = i.concat(r.toArray())), this._unbind(i)._unbind(i, "destroy")._unbind(i, "inactive")
        }, e(function () {
          y(W, ["mouseenter", "mouseleave"], function (t) {
            var n = "mouseenter" === t.type,
              r = e(t.currentTarget),
              i = e(t.relatedTarget || t.target),
              o = this.options;
            n ? (this.focus(t), r.hasClass(K) && !r.hasClass(X) && clearTimeout(this.timers.hide)) : "mouse" === o.position.target && o.position.adjust.mouse && o.hide.event && o.show.target && !i.closest(o.show.target[0]).length && this.hide(t), r.toggleClass(J, n)
          }), y("[" + U + "]", Q, h)
        }), T = e.fn.qtip = function (t, n, r) {
          var o = ("" + t).toLowerCase(),
            a = M,
            l = e.makeArray(arguments).slice(1),
            u = l[l.length - 1],
            c = this[0] ? e.data(this[0], G) : M;
          return !arguments.length && c || "api" === o ? c : "string" == typeof t ? (this.each(function () {
            var t = e.data(this, G);
            if (!t) return x;
            if (u && u.timeStamp && (t.cache.event = u), !n || "option" !== o && "options" !== o) t[o] && t[o].apply(t, l);
            else {
              if (r === s && !e.isPlainObject(n)) return a = t.get(n), S;
              t.set(n, r)
            }
          }), a !== M ? a : this) : "object" != typeof t && arguments.length ? void 0 : (c = i(e.extend(x, {}, t)), this.each(function (t) {
            var n, r;
            if (r = e.isArray(c.id) ? c.id[t] : c.id, r = !r || r === S || r.length < 1 || T.api[r] ? T.nextid++ : r, (n = v(e(this), r, c)) === S) return x;
            T.api[r] = n, e.each(B, function () {
              "initialize" === this.initialize && this(n)
            }), n._assignInitialEvents(u)
          }))
        }, e.qtip = t, T.api = {}, e.each({
          attr: function (t, n) {
            if (this.length) {
              var r = this[0],
                i = e.data(r, "qtip");
              if ("title" === t && i && i.options && "object" == typeof i && "object" == typeof i.options && i.options.suppress) return arguments.length < 2 ? e.attr(r, $) : (i && "title" === i.options.content.attr && i.cache.attr && i.set("content.text", n), this.attr($, n))
            }
            return e.fn.attr_replacedByqTip.apply(this, arguments)
          },
          clone: function (t) {
            var n = e.fn.clone_replacedByqTip.apply(this, arguments);
            return t || n.filter("[" + $ + "]").attr("title", function () {
              return e.attr(this, $)
            }).removeAttr($), n
          }
        }, function (t, n) {
          if (!n || e.fn[t + "_replacedByqTip"]) return x;
          var r = e.fn[t + "_replacedByqTip"] = e.fn[t];
          e.fn[t] = function () {
            return n.apply(this, arguments) || r.apply(this, arguments)
          }
        }), e.ui || (e.cleanData_replacedByqTip = e.cleanData, e.cleanData = function (t) {
          for (var n, r = 0;
            (n = e(t[r])).length; r++)
            if (n.attr(z)) try {
              n.triggerHandler("removeqtip")
            } catch (e) {}
          e.cleanData_replacedByqTip.apply(this, arguments)
        }), T.version = "3.0.3", T.nextid = 0, T.inactiveEvents = Q, T.zindex = 15e3, T.defaults = {
          prerender: S,
          id: S,
          overwrite: x,
          suppress: x,
          content: {
            text: x,
            attr: "title",
            title: S,
            button: S
          },
          position: {
            my: "top left",
            at: "bottom right",
            target: S,
            container: S,
            viewport: S,
            adjust: {
              x: 0,
              y: 0,
              mouse: x,
              scroll: x,
              resize: x,
              method: "flipinvert flipinvert"
            },
            effect: function (t, n) {
              e(this).animate(n, {
                duration: 200,
                queue: S
              })
            }
          },
          show: {
            target: S,
            event: "mouseenter",
            effect: x,
            delay: 90,
            solo: S,
            ready: S,
            autofocus: S
          },
          hide: {
            target: S,
            event: "mouseleave",
            effect: x,
            delay: 0,
            fixed: S,
            inactive: S,
            leave: "window",
            distance: S
          },
          style: {
            classes: "",
            widget: S,
            width: S,
            height: S,
            def: x
          },
          events: {
            render: M,
            move: M,
            show: M,
            hide: M,
            toggle: M,
            visible: M,
            hidden: M,
            focus: M,
            blur: M
          }
        };
        var ie, oe, ae, le, se, ue = "margin",
          ce = "background-color",
          fe = !!l.createElement("canvas").getContext,
          pe = /rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,
          de = {},
          he = ["Webkit", "O", "Moz", "ms"];
        fe ? (le = a.devicePixelRatio || 1, se = function () {
          var e = l.createElement("canvas").getContext("2d");
          return e.backingStorePixelRatio || e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || 1
        }(), ae = le / se) : oe = function (e, t, n) {
          return "<qtipvml:" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" ' + (t || "") + ' style="behavior: url(#default#VML); ' + (n || "") + '" />'
        }, e.extend(E.prototype, {
          init: function (t) {
            var n, r;
            r = this.element = t.elements.tip = e("<div />", {
              class: G + "-tip"
            }).prependTo(t.tooltip), fe ? (n = e("<canvas />").appendTo(this.element)[0].getContext("2d"), n.lineJoin = "miter", n.miterLimit = 1e5, n.save()) : (n = oe("shape", 'coordorigin="0,0"', "position:absolute;"), this.element.html(n + n), t._bind(e("*", r).add(r), ["click", "mousedown"], function (e) {
              e.stopPropagation()
            }, this._ns)), t._bind(t.tooltip, "tooltipmove", this.reposition, this._ns, this), this.create()
          },
          _swapDimensions: function () {
            this.size[0] = this.options.height, this.size[1] = this.options.width
          },
          _resetDimensions: function () {
            this.size[0] = this.options.width, this.size[1] = this.options.height
          },
          _useTitle: function (e) {
            var t = this.qtip.elements.titlebar;
            return t && (e.y === N || e.y === F && this.element.position().top + this.size[1] / 2 + this.options.offset < t.outerHeight(x))
          },
          _parseCorner: function (e) {
            var t = this.qtip.options.position.my;
            return e === S || t === S ? e = S : e === x ? e = new k(t.string()) : e.string || (e = new k(e), e.fixed = x), e
          },
          _parseWidth: function (e, t, n) {
            var r = this.qtip.elements,
              i = "border" + g(t) + "Width";
            return (n ? w(n, i) : w(r.content, i) || w(this._useTitle(e) && r.titlebar || r.content, i) || w(r.tooltip, i)) || 0
          },
          _parseRadius: function (e) {
            var t = this.qtip.elements,
              n = "border" + g(e.y) + g(e.x) + "Radius";
            return ee.ie < 9 ? 0 : w(this._useTitle(e) && t.titlebar || t.content, n) || w(t.tooltip, n) || 0
          },
          _invalidColour: function (e, t, n) {
            var r = e.css(t);
            return !r || n && r === e.css(n) || pe.test(r) ? S : r
          },
          _parseColours: function (t) {
            var n = this.qtip.elements,
              r = this.element.css("cssText", ""),
              i = "border" + g(t[t.precedance]) + g("color"),
              o = this._useTitle(t) && n.titlebar || n.content,
              a = this._invalidColour,
              l = [];
            return l[0] = a(r, ce) || a(o, ce) || a(n.content, ce) || a(n.tooltip, ce) || r.css(ce), l[1] = a(r, i, "color") || a(o, i, "color") || a(n.content, i, "color") || a(n.tooltip, i, "color") || n.tooltip.css(i), e("*", r).add(r).css("cssText", ce + ":transparent !important;border:0 !important;"), l
          },
          _calculateSize: function (e) {
            var t, n, r, i = e.precedance === D,
              o = this.options.width,
              a = this.options.height,
              l = "c" === e.abbrev(),
              s = (i ? o : a) * (l ? .5 : 1),
              u = Math.pow,
              c = Math.round,
              f = Math.sqrt(u(s, 2) + u(a, 2)),
              p = [this.border / s * f, this.border / a * f];
            return p[2] = Math.sqrt(u(p[0], 2) - u(this.border, 2)), p[3] = Math.sqrt(u(p[1], 2) - u(this.border, 2)), t = f + p[2] + p[3] + (l ? 0 : p[0]), n = t / f, r = [c(n * o), c(n * a)], i ? r : r.reverse()
          },
          _calculateTip: function (e, t, n) {
            n = n || 1, t = t || this.size;
            var r = t[0] * n,
              i = t[1] * n,
              o = Math.ceil(r / 2),
              a = Math.ceil(i / 2),
              l = {
                br: [0, 0, r, i, r, 0],
                bl: [0, 0, r, 0, 0, i],
                tr: [0, i, r, 0, r, i],
                tl: [0, 0, 0, i, r, i],
                tc: [0, i, o, 0, r, i],
                bc: [0, 0, r, 0, o, i],
                rc: [0, 0, r, a, 0, i],
                lc: [r, 0, r, i, 0, a]
              };
            return l.lt = l.br, l.rt = l.bl, l.lb = l.tr, l.rb = l.tl, l[e.abbrev()]
          },
          _drawCoords: function (e, t) {
            e.beginPath(), e.moveTo(t[0], t[1]), e.lineTo(t[2], t[3]), e.lineTo(t[4], t[5]), e.closePath()
          },
          create: function () {
            var e = this.corner = (fe || ee.ie) && this._parseCorner(this.options.corner);
            return this.enabled = !!this.corner && "c" !== this.corner.abbrev(), this.enabled && (this.qtip.cache.corner = e.clone(), this.update()), this.element.toggle(this.enabled), this.corner
          },
          update: function (t, n) {
            if (!this.enabled) return this;
            var r, i, o, l, s, u, c, f, p = this.qtip.elements,
              d = this.element,
              h = d.children(),
              m = this.options,
              y = this.size,
              v = m.mimic,
              g = Math.round;
            t || (t = this.qtip.cache.corner || this.corner), v === S ? v = t : (v = new k(v), v.precedance = t.precedance, "inherit" === v.x ? v.x = t.x : "inherit" === v.y ? v.y = t.y : v.x === v.y && (v[t.precedance] = t[t.precedance])), i = v.precedance, t.precedance === P ? this._swapDimensions() : this._resetDimensions(), r = this.color = this._parseColours(t), "transparent" !== r[1] ? (f = this.border = this._parseWidth(t, t[t.precedance]), m.border && f < 1 && !pe.test(r[1]) && (r[0] = r[1]), this.border = f = m.border !== x ? m.border : f) : this.border = f = 0, c = this.size = this._calculateSize(t), d.css({
              width: c[0],
              height: c[1],
              lineHeight: c[1] + "px"
            }), u = t.precedance === D ? [g(v.x === R ? f : v.x === L ? c[0] - y[0] - f : (c[0] - y[0]) / 2), g(v.y === N ? c[1] - y[1] : 0)] : [g(v.x === R ? c[0] - y[0] : 0), g(v.y === N ? f : "bottom" === v.y ? c[1] - y[1] - f : (c[1] - y[1]) / 2)], fe ? (o = h[0].getContext("2d"), o.restore(), o.save(), o.clearRect(0, 0, 6e3, 6e3), l = this._calculateTip(v, y, ae), s = this._calculateTip(v, this.size, ae), h.attr(j, c[0] * ae).attr("height", c[1] * ae), h.css(j, c[0]).css("height", c[1]), this._drawCoords(o, s), o.fillStyle = r[1], o.fill(), o.translate(u[0] * ae, u[1] * ae), this._drawCoords(o, l), o.fillStyle = r[0], o.fill()) : (l = this._calculateTip(v), l = "m" + l[0] + "," + l[1] + " l" + l[2] + "," + l[3] + " " + l[4] + "," + l[5] + " xe", u[2] = f && /^(r|b)/i.test(t.string()) ? 8 === ee.ie ? 2 : 1 : 0, h.css({
              coordsize: c[0] + f + " " + c[1] + f,
              antialias: "" + (v.string().indexOf(F) > -1),
              left: u[0] - u[2] * Number(i === P),
              top: u[1] - u[2] * Number(i === D),
              width: c[0] + f,
              height: c[1] + f
            }).each(function (t) {
              var n = e(this);
              n[n.prop ? "prop" : "attr"]({
                coordsize: c[0] + f + " " + c[1] + f,
                path: l,
                fillcolor: r[0],
                filled: !!t,
                stroked: !t
              }).toggle(!(!f && !t)), !t && n.html(oe("stroke", 'weight="' + 2 * f + 'px" color="' + r[1] + '" miterlimit="1000" joinstyle="miter"'))
            })), a.opera && setTimeout(function () {
              p.tip.css({
                display: "inline-block",
                visibility: "visible"
              })
            }, 1), n !== S && this.calculate(t, c)
          },
          calculate: function (t, n) {
            if (!this.enabled) return S;
            var r, i, o = this,
              a = this.qtip.elements,
              l = this.element,
              s = this.options.offset,
              u = {};
            return t = t || this.corner, r = t.precedance, n = n || this._calculateSize(t), i = [t.x, t.y], r === P && i.reverse(), e.each(i, function (e, i) {
              var l, c, f;
              i === F ? (l = r === D ? R : N, u[l] = "50%", u[ue + "-" + l] = -Math.round(n[r === D ? 0 : 1] / 2) + s) : (l = o._parseWidth(t, i, a.tooltip), c = o._parseWidth(t, i, a.content), f = o._parseRadius(t), u[i] = Math.max(-o.border, e ? c : s + (f > l ? f : -l)))
            }), u[t[r]] -= n[r === P ? 0 : 1], l.css({
              margin: "",
              top: "",
              bottom: "",
              left: "",
              right: ""
            }).css(u), u
          },
          reposition: function (e, t, n) {
            function r(e, t, n, r, i) {
              e === H && u.precedance === t && c[r] && u[n] !== F ? u.precedance = u.precedance === P ? D : P : e !== H && c[r] && (u[t] = u[t] === F ? c[r] > 0 ? r : i : u[t] === r ? i : r)
            }

            function i(e, t, r) {
              u[e] === F ? m[ue + "-" + t] = h[e] = o[ue + "-" + t] - c[t] : (a = o[r] !== s ? [c[t], -o[t]] : [-c[t], o[t]], (h[e] = Math.max(a[0], a[1])) > a[0] && (n[t] -= c[t], h[t] = S), m[o[r] !== s ? r : t] = h[e])
            }
            if (this.enabled) {
              var o, a, l = t.cache,
                u = this.corner.clone(),
                c = n.adjusted,
                f = t.options.position.adjust.method.split(" "),
                p = f[0],
                d = f[1] || f[0],
                h = {
                  left: S,
                  top: S,
                  x: 0,
                  y: 0
                },
                m = {};
              this.corner.fixed !== x && (r(p, P, D, R, L), r(d, D, P, N, "bottom"), u.string() === l.corner.string() && l.cornerTop === c.top && l.cornerLeft === c.left || this.update(u, S)), o = this.calculate(u), o.right !== s && (o.left = -o.right), o.bottom !== s && (o.top = -o.bottom), o.user = this.offset, h.left = p === H && !!c.left, h.left && i(P, R, L), h.top = d === H && !!c.top, h.top && i(D, N, "bottom"), this.element.css(m).toggle(!(h.x && h.y || u.x === F && h.y || u.y === F && h.x)), n.left -= o.left.charAt ? o.user : p !== H || h.top || !h.left && !h.top ? o.left + this.border : 0, n.top -= o.top.charAt ? o.user : d !== H || h.left || !h.left && !h.top ? o.top + this.border : 0, l.cornerLeft = c.left, l.cornerTop = c.top, l.corner = u.clone()
            }
          },
          destroy: function () {
            this.qtip._unbind(this.qtip.tooltip, this._ns), this.qtip.elements.tip && this.qtip.elements.tip.find("*").remove().end().remove()
          }
        }), ie = B.tip = function (e) {
          return new E(e, e.options.style.tip)
        }, ie.initialize = "render", ie.sanitize = function (e) {
          if (e.style && "tip" in e.style) {
            var t = e.style.tip;
            "object" != typeof t && (t = e.style.tip = {
              corner: t
            }), /string|boolean/i.test(typeof t.corner) || (t.corner = x)
          }
        }, O.tip = {
          "^position.my|style.tip.(corner|mimic|border)$": function () {
            this.create(), this.qtip.reposition()
          },
          "^style.tip.(height|width)$": function (e) {
            this.size = [e.width, e.height], this.update(), this.qtip.reposition()
          },
          "^content.title|style.(classes|widget)$": function () {
            this.update()
          }
        }, e.extend(x, T.defaults, {
          style: {
            tip: {
              corner: x,
              mimic: S,
              width: 6,
              height: 6,
              border: x,
              offset: 0
            }
          }
        });
        var me, ye;
        ye = function () {
          function t(t) {
            if (e.expr[":"].focusable) return e.expr[":"].focusable;
            var n, r, i, o = !isNaN(e.attr(t, "tabindex")),
              a = t.nodeName && t.nodeName.toLowerCase();
            return "area" === a ? (n = t.parentNode, r = n.name, !(!t.href || !r || "map" !== n.nodeName.toLowerCase()) && (!!(i = e("img[usemap=#" + r + "]")[0]) && i.is(":visible"))) : /input|select|textarea|button|object/.test(a) ? !t.disabled : "a" === a ? t.href || o : o
          }

          function n(e) {
            u.length < 1 && e.length ? e.not("body").blur() : u.first().focus()
          }

          function r(t) {
            if (a.is(":visible")) {
              var r, o = e(t.target),
                l = i.tooltip,
                s = o.closest(W);
              r = s.length < 1 ? S : parseInt(s[0].style.zIndex, 10) > parseInt(l[0].style.zIndex, 10), r || o.closest(W)[0] === l[0] || n(o)
            }
          }
          var i, o, a, s = this,
            u = {};
          e.extend(s, {
            init: function () {
              return a = s.elem = e("<div />", {
                id: "qtip-overlay",
                html: "<div></div>",
                mousedown: function () {
                  return S
                }
              }).hide(), e(l.body).bind("focusin.qtip-modal", r), e(l).bind("keydown.qtip-modal", function (e) {
                i && i.options.show.modal.escape && 27 === e.keyCode && i.hide(e)
              }), a.bind("click.qtip-modal", function (e) {
                i && i.options.show.modal.blur && i.hide(e)
              }), s
            },
            update: function (e) {
              i = e, u = e.options.show.modal.stealfocus !== S ? e.tooltip.find("*").filter(function () {
                return t(this)
              }) : []
            },
            toggle: function (t, r, u) {
              var c = t.tooltip,
                f = t.options.show.modal,
                p = f.effect,
                d = r ? "show" : "hide",
                h = a.is(":visible"),
                m = e(".qtip-modal").filter(":visible:not(:animated)").not(c);
              return s.update(t), r && f.stealfocus !== S && n(e(":focus")), a.toggleClass("blurs", f.blur), r && a.appendTo(l.body), a.is(":animated") && h === r && o !== S || !r && m.length ? s : (a.stop(x, S), e.isFunction(p) ? p.call(a, r) : p === S ? a[d]() : a.fadeTo(parseInt(u, 10) || 90, r ? 1 : 0, function () {
                r || a.hide()
              }), r || a.queue(function (t) {
                a.css({
                  left: "",
                  top: ""
                }), e(".qtip-modal").length || a.detach(), t()
              }), o = r, i.destroyed && (i = M), s)
            }
          }), s.init()
        }, ye = new ye, e.extend(_.prototype, {
          init: function (t) {
            var n = t.tooltip;
            if (!this.options.on) return this;
            t.elements.overlay = ye.elem, n.addClass("qtip-modal").css("z-index", T.modal_zindex + e(".qtip-modal").length), t._bind(n, ["tooltipshow", "tooltiphide"], function (t, r, i) {
              var o = t.originalEvent;
              if (t.target === n[0])
                if (o && "tooltiphide" === t.type && /mouse(leave|enter)/.test(o.type) && e(o.relatedTarget).closest(ye.elem[0]).length) try {
                  t.preventDefault()
                } catch (e) {} else(!o || o && "tooltipsolo" !== o.type) && this.toggle(t, "tooltipshow" === t.type, i)
            }, this._ns, this), t._bind(n, "tooltipfocus", function (t, r) {
              if (!t.isDefaultPrevented() && t.target === n[0]) {
                var i = e(".qtip-modal"),
                  o = T.modal_zindex + i.length,
                  a = parseInt(n[0].style.zIndex, 10);
                ye.elem[0].style.zIndex = o - 1, i.each(function () {
                  this.style.zIndex > a && (this.style.zIndex -= 1)
                }), i.filter("." + Z).qtip("blur", t.originalEvent), n.addClass(Z)[0].style.zIndex = o, ye.update(r);
                try {
                  t.preventDefault()
                } catch (e) {}
              }
            }, this._ns, this), t._bind(n, "tooltiphide", function (t) {
              t.target === n[0] && e(".qtip-modal").filter(":visible").not(n).last().qtip("focus", t)
            }, this._ns, this)
          },
          toggle: function (e, t, n) {
            if (e && e.isDefaultPrevented()) return this;
            ye.toggle(this.qtip, !!t, n)
          },
          destroy: function () {
            this.qtip.tooltip.removeClass("qtip-modal"), this.qtip._unbind(this.qtip.tooltip, this._ns), ye.toggle(this.qtip, S), delete this.qtip.elements.overlay
          }
        }), me = B.modal = function (e) {
          return new _(e, e.options.show.modal)
        }, me.sanitize = function (e) {
          e.show && ("object" != typeof e.show.modal ? e.show.modal = {
            on: !!e.show.modal
          } : void 0 === e.show.modal.on && (e.show.modal.on = x))
        }, T.modal_zindex = T.zindex - 200, me.initialize = "render", O.modal = {
          "^show.modal.(on|blur)$": function () {
            this.destroy(), this.init(), this.qtip.elems.overlay.toggle(this.qtip.tooltip[0].offsetWidth > 0)
          }
        }, e.extend(x, T.defaults, {
          show: {
            modal: {
              on: S,
              effect: x,
              blur: x,
              stealfocus: x,
              escape: x
            }
          }
        }), B.viewport = function (e, t, n, r, i, o, s) {
          function u(e, n, r, i, o, a, l, s, u) {
            var c = t[o],
              g = w[e],
              b = E[e],
              _ = r === H,
              C = g === o ? u : g === a ? -u : -u / 2,
              T = b === o ? s : b === a ? -s : -s / 2,
              A = y[o] + v[o] - (d ? 0 : p[o]),
              k = A - c,
              O = c + u - (l === j ? h : m) - A,
              I = C - (w.precedance === e || g === w[n] ? T : 0) - (b === F ? s / 2 : 0);
            return _ ? (I = (g === o ? 1 : -1) * C, t[o] += k > 0 ? k : O > 0 ? -O : 0, t[o] = Math.max(-p[o] + v[o], c - I, Math.min(Math.max(-p[o] + v[o] + (l === j ? h : m), c + I), t[o], "center" === g ? c - C : 1e9))) : (i *= r === V ? 2 : 0, k > 0 && (g !== o || O > 0) ? (t[o] -= I + i, f.invert(e, o)) : O > 0 && (g !== a || k > 0) && (t[o] -= (g === F ? -I : I) + i, f.invert(e, a)), t[o] < y[o] && -t[o] > O && (t[o] = c, f = w.clone())), t[o] - c
          }
          var c, f, p, d, h, m, y, v, g = n.target,
            b = e.elements.tooltip,
            w = n.my,
            E = n.at,
            _ = n.adjust,
            C = _.method.split(" "),
            T = C[0],
            A = C[1] || C[0],
            k = n.viewport,
            O = n.container,
            I = {
              left: 0,
              top: 0
            };
          return k.jquery && g[0] !== a && g[0] !== l.body && "none" !== _.method ? (p = O.offset() || I, d = "static" === O.css("position"), c = "fixed" === b.css("position"), h = k[0] === a ? k.width() : k.outerWidth(S), m = k[0] === a ? k.height() : k.outerHeight(S), y = {
            left: c ? 0 : k.scrollLeft(),
            top: c ? 0 : k.scrollTop()
          }, v = k.offset() || I, "shift" === T && "shift" === A || (f = w.clone()), I = {
            left: "none" !== T ? u(P, D, T, _.x, R, L, j, r, o) : 0,
            top: "none" !== A ? u(D, P, A, _.y, N, "bottom", "height", i, s) : 0,
            my: f
          }) : I
        }, B.polys = {
          polygon: function (e, t) {
            var n, r, i, o = {
                width: 0,
                height: 0,
                position: {
                  top: 1e10,
                  right: 0,
                  bottom: 0,
                  left: 1e10
                },
                adjustable: S
              },
              a = 0,
              l = [],
              s = 1,
              u = 1,
              c = 0,
              f = 0;
            for (a = e.length; a--;) n = [parseInt(e[--a], 10), parseInt(e[a + 1], 10)], n[0] > o.position.right && (o.position.right = n[0]), n[0] < o.position.left && (o.position.left = n[0]), n[1] > o.position.bottom && (o.position.bottom = n[1]), n[1] < o.position.top && (o.position.top = n[1]), l.push(n);
            if (r = o.width = Math.abs(o.position.right - o.position.left), i = o.height = Math.abs(o.position.bottom - o.position.top), "c" === t.abbrev()) o.position = {
              left: o.position.left + o.width / 2,
              top: o.position.top + o.height / 2
            };
            else {
              for (; r > 0 && i > 0 && s > 0 && u > 0;)
                for (r = Math.floor(r / 2), i = Math.floor(i / 2), t.x === R ? s = r : t.x === L ? s = o.width - r : s += Math.floor(r / 2), t.y === N ? u = i : "bottom" === t.y ? u = o.height - i : u += Math.floor(i / 2), a = l.length; a-- && !(l.length < 2);) c = l[a][0] - o.position.left, f = l[a][1] - o.position.top, (t.x === R && c >= s || t.x === L && c <= s || t.x === F && (c < s || c > o.width - s) || t.y === N && f >= u || "bottom" === t.y && f <= u || t.y === F && (f < u || f > o.height - u)) && l.splice(a, 1);
              o.position = {
                left: l[0][0],
                top: l[0][1]
              }
            }
            return o
          },
          rect: function (e, t, n, r) {
            return {
              width: Math.abs(n - e),
              height: Math.abs(r - t),
              position: {
                left: Math.min(e, n),
                top: Math.min(t, r)
              }
            }
          },
          _angles: {
            tc: 1.5,
            tr: 7 / 4,
            tl: 5 / 4,
            bc: .5,
            br: .25,
            bl: .75,
            rc: 2,
            lc: 1,
            c: 0
          },
          ellipse: function (e, t, n, r, i) {
            var o = B.polys._angles[i.abbrev()],
              a = 0 === o ? 0 : n * Math.cos(o * Math.PI),
              l = r * Math.sin(o * Math.PI);
            return {
              width: 2 * n - Math.abs(a),
              height: 2 * r - Math.abs(l),
              position: {
                left: e + a,
                top: t + l
              },
              adjustable: S
            }
          },
          circle: function (e, t, n, r) {
            return B.polys.ellipse(e, t, n, n, r)
          }
        }, B.svg = function (t, n, r) {
          for (var i, o, a, s, u, c, f, p, d, h = n[0], m = e(h.ownerSVGElement), y = h.ownerDocument, v = (parseInt(n.css("stroke-width"), 10) || 0) / 2; !h.getBBox;) h = h.parentNode;
          if (!h.getBBox || !h.parentNode) return S;
          switch (h.nodeName) {
            case "ellipse":
            case "circle":
              p = B.polys.ellipse(h.cx.baseVal.value, h.cy.baseVal.value, (h.rx || h.r).baseVal.value + v, (h.ry || h.r).baseVal.value + v, r);
              break;
            case "line":
            case "polygon":
            case "polyline":
              for (f = h.points || [{
                  x: h.x1.baseVal.value,
                  y: h.y1.baseVal.value
                }, {
                  x: h.x2.baseVal.value,
                  y: h.y2.baseVal.value
                }], p = [], c = -1, s = f.numberOfItems || f.length; ++c < s;) u = f.getItem ? f.getItem(c) : f[c], p.push.apply(p, [u.x, u.y]);
              p = B.polys.polygon(p, r);
              break;
            default:
              p = h.getBBox(), p = {
                width: p.width,
                height: p.height,
                position: {
                  left: p.x,
                  top: p.y
                }
              }
          }
          return d = p.position, m = m[0], m.createSVGPoint && (o = h.getScreenCTM(), f = m.createSVGPoint(), f.x = d.left, f.y = d.top, a = f.matrixTransform(o), d.left = a.x, d.top = a.y), y !== l && "mouse" !== t.position.target && (i = e((y.defaultView || y.parentWindow).frameElement).offset()) && (d.left += i.left, d.top += i.top), y = e(y), d.left += y.scrollLeft(), d.top += y.scrollTop(), p
        }, B.imagemap = function (t, n, r) {
          n.jquery || (n = e(n));
          var i, o, a, l, s, u = (n.attr("shape") || "rect").toLowerCase().replace("poly", "polygon"),
            c = e('img[usemap="#' + n.parent("map").attr("name") + '"]'),
            f = e.trim(n.attr("coords")),
            p = f.replace(/,$/, "").split(",");
          if (!c.length) return S;
          if ("polygon" === u) l = B.polys.polygon(p, r);
          else {
            if (!B.polys[u]) return S;
            for (a = -1, s = p.length, o = []; ++a < s;) o.push(parseInt(p[a], 10));
            l = B.polys[u].apply(this, o.concat(r))
          }
          return i = c.offset(), i.left += Math.ceil((c.outerWidth(S) - c.width()) / 2), i.top += Math.ceil((c.outerHeight(S) - c.height()) / 2), l.position.left += i.left, l.position.top += i.top, l
        };
        var ve;
        e.extend(C.prototype, {
          _scroll: function () {
            var t = this.qtip.elements.overlay;
            t && (t[0].style.top = e(a).scrollTop() + "px")
          },
          init: function (t) {
            var n = t.tooltip;
            e("select, object").length < 1 && (this.bgiframe = t.elements.bgiframe = e('<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>').appendTo(n), t._bind(n, "tooltipmove", this.adjustBGIFrame, this._ns, this)), this.redrawContainer = e("<div/>", {
              id: G + "-rcontainer"
            }).appendTo(l.body), t.elements.overlay && t.elements.overlay.addClass("qtipmodal-ie6fix") && (t._bind(a, ["scroll", "resize"], this._scroll, this._ns, this), t._bind(n, ["tooltipshow"], this._scroll, this._ns, this)), this.redraw()
          },
          adjustBGIFrame: function () {
            var e, t, n = this.qtip.tooltip,
              r = {
                height: n.outerHeight(S),
                width: n.outerWidth(S)
              },
              i = this.qtip.plugins.tip,
              o = this.qtip.elements.tip;
            t = parseInt(n.css("borderLeftWidth"), 10) || 0, t = {
              left: -t,
              top: -t
            }, i && o && (e = "x" === i.corner.precedance ? [j, R] : ["height", N], t[e[1]] -= o[e[0]]()), this.bgiframe.css(t).css(r)
          },
          redraw: function () {
            if (this.qtip.rendered < 1 || this.drawing) return this;
            var e, t, n, r, i = this.qtip.tooltip,
              o = this.qtip.options.style,
              a = this.qtip.options.position.container;
            return this.qtip.drawing = 1, o.height && i.css("height", o.height), o.width ? i.css(j, o.width) : (i.css(j, "").appendTo(this.redrawContainer), t = i.width(), t % 2 < 1 && (t += 1), n = i.css("maxWidth") || "", r = i.css("minWidth") || "", e = (n + r).indexOf("%") > -1 ? a.width() / 100 : 0, n = (n.indexOf("%") > -1 ? e : 1 * parseInt(n, 10)) || t, r = (r.indexOf("%") > -1 ? e : 1 * parseInt(r, 10)) || 0, t = n + r ? Math.min(Math.max(t, r), n) : t, i.css(j, Math.round(t)).appendTo(a)), this.drawing = 0, this
          },
          destroy: function () {
            this.bgiframe && this.bgiframe.remove(), this.qtip._unbind([a, this.qtip.tooltip], this._ns)
          }
        }), ve = B.ie6 = function (e) {
          return 6 === ee.ie ? new C(e) : S
        }, ve.initialize = "render", O.ie6 = {
          "^content|style$": function () {
            this.redraw()
          }
        }
      })
    }(window, document)
  },
  1058: function (e, t) {},
  1059: function (e, t, n) {
    var r, i;
    (function () {
      function n(e) {
        function t(t, n, r, i, o, a) {
          for (; o >= 0 && o < a; o += e) {
            var l = i ? i[o] : o;
            r = n(r, t[l], l, t)
          }
          return r
        }
        return function (n, r, i, o) {
          r = C(r, o, 4);
          var a = !S(n) && _.keys(n),
            l = (a || n).length,
            s = e > 0 ? 0 : l - 1;
          return arguments.length < 3 && (i = n[a ? a[s] : s], s += e), t(n, r, i, a, s, l)
        }
      }

      function o(e) {
        return function (t, n, r) {
          n = T(n, r);
          for (var i = x(t), o = e > 0 ? 0 : i - 1; o >= 0 && o < i; o += e)
            if (n(t[o], o, t)) return o;
          return -1
        }
      }

      function a(e, t, n) {
        return function (r, i, o) {
          var a = 0,
            l = x(r);
          if ("number" == typeof o) e > 0 ? a = o >= 0 ? o : Math.max(o + l, a) : l = o >= 0 ? Math.min(o + 1, l) : o + l + 1;
          else if (n && o && l) return o = n(r, i), r[o] === i ? o : -1;
          if (i !== i) return o = t(h.call(r, a, l), _.isNaN), o >= 0 ? o + a : -1;
          for (o = e > 0 ? a : l - 1; o >= 0 && o < l; o += e)
            if (r[o] === i) return o;
          return -1
        }
      }

      function l(e, t) {
        var n = N.length,
          r = e.constructor,
          i = _.isFunction(r) && r.prototype || f,
          o = "constructor";
        for (_.has(e, o) && !_.contains(t, o) && t.push(o); n--;)(o = N[n]) in e && e[o] !== i[o] && !_.contains(t, o) && t.push(o)
      }
      var s = this,
        u = s._,
        c = Array.prototype,
        f = Object.prototype,
        p = Function.prototype,
        d = c.push,
        h = c.slice,
        m = f.toString,
        y = f.hasOwnProperty,
        v = Array.isArray,
        g = Object.keys,
        b = p.bind,
        w = Object.create,
        E = function () {},
        _ = function (e) {
          return e instanceof _ ? e : this instanceof _ ? void(this._wrapped = e) : new _(e)
        };
      void 0 !== e && e.exports && (t = e.exports = _), t._ = _, _.VERSION = "1.8.3";
      var C = function (e, t, n) {
          if (void 0 === t) return e;
          switch (null == n ? 3 : n) {
            case 1:
              return function (n) {
                return e.call(t, n)
              };
            case 2:
              return function (n, r) {
                return e.call(t, n, r)
              };
            case 3:
              return function (n, r, i) {
                return e.call(t, n, r, i)
              };
            case 4:
              return function (n, r, i, o) {
                return e.call(t, n, r, i, o)
              }
          }
          return function () {
            return e.apply(t, arguments)
          }
        },
        T = function (e, t, n) {
          return null == e ? _.identity : _.isFunction(e) ? C(e, t, n) : _.isObject(e) ? _.matcher(e) : _.property(e)
        };
      _.iteratee = function (e, t) {
        return T(e, t, 1 / 0)
      };
      var A = function (e, t) {
          return function (n) {
            var r = arguments.length;
            if (r < 2 || null == n) return n;
            for (var i = 1; i < r; i++)
              for (var o = arguments[i], a = e(o), l = a.length, s = 0; s < l; s++) {
                var u = a[s];
                t && void 0 !== n[u] || (n[u] = o[u])
              }
            return n
          }
        },
        k = function (e) {
          if (!_.isObject(e)) return {};
          if (w) return w(e);
          E.prototype = e;
          var t = new E;
          return E.prototype = null, t
        },
        O = function (e) {
          return function (t) {
            return null == t ? void 0 : t[e]
          }
        },
        I = Math.pow(2, 53) - 1,
        x = O("length"),
        S = function (e) {
          var t = x(e);
          return "number" == typeof t && t >= 0 && t <= I
        };
      _.each = _.forEach = function (e, t, n) {
        t = C(t, n);
        var r, i;
        if (S(e))
          for (r = 0, i = e.length; r < i; r++) t(e[r], r, e);
        else {
          var o = _.keys(e);
          for (r = 0, i = o.length; r < i; r++) t(e[o[r]], o[r], e)
        }
        return e
      }, _.map = _.collect = function (e, t, n) {
        t = T(t, n);
        for (var r = !S(e) && _.keys(e), i = (r || e).length, o = Array(i), a = 0; a < i; a++) {
          var l = r ? r[a] : a;
          o[a] = t(e[l], l, e)
        }
        return o
      }, _.reduce = _.foldl = _.inject = n(1), _.reduceRight = _.foldr = n(-1), _.find = _.detect = function (e, t, n) {
        var r;
        if (void 0 !== (r = S(e) ? _.findIndex(e, t, n) : _.findKey(e, t, n)) && -1 !== r) return e[r]
      }, _.filter = _.select = function (e, t, n) {
        var r = [];
        return t = T(t, n), _.each(e, function (e, n, i) {
          t(e, n, i) && r.push(e)
        }), r
      }, _.reject = function (e, t, n) {
        return _.filter(e, _.negate(T(t)), n)
      }, _.every = _.all = function (e, t, n) {
        t = T(t, n);
        for (var r = !S(e) && _.keys(e), i = (r || e).length, o = 0; o < i; o++) {
          var a = r ? r[o] : o;
          if (!t(e[a], a, e)) return !1
        }
        return !0
      }, _.some = _.any = function (e, t, n) {
        t = T(t, n);
        for (var r = !S(e) && _.keys(e), i = (r || e).length, o = 0; o < i; o++) {
          var a = r ? r[o] : o;
          if (t(e[a], a, e)) return !0
        }
        return !1
      }, _.contains = _.includes = _.include = function (e, t, n, r) {
        return S(e) || (e = _.values(e)), ("number" != typeof n || r) && (n = 0), _.indexOf(e, t, n) >= 0
      }, _.invoke = function (e, t) {
        var n = h.call(arguments, 2),
          r = _.isFunction(t);
        return _.map(e, function (e) {
          var i = r ? t : e[t];
          return null == i ? i : i.apply(e, n)
        })
      }, _.pluck = function (e, t) {
        return _.map(e, _.property(t))
      }, _.where = function (e, t) {
        return _.filter(e, _.matcher(t))
      }, _.findWhere = function (e, t) {
        return _.find(e, _.matcher(t))
      }, _.max = function (e, t, n) {
        var r, i, o = -1 / 0,
          a = -1 / 0;
        if (null == t && null != e) {
          e = S(e) ? e : _.values(e);
          for (var l = 0, s = e.length; l < s; l++)(r = e[l]) > o && (o = r)
        } else t = T(t, n), _.each(e, function (e, n, r) {
          ((i = t(e, n, r)) > a || i === -1 / 0 && o === -1 / 0) && (o = e, a = i)
        });
        return o
      }, _.min = function (e, t, n) {
        var r, i, o = 1 / 0,
          a = 1 / 0;
        if (null == t && null != e) {
          e = S(e) ? e : _.values(e);
          for (var l = 0, s = e.length; l < s; l++)(r = e[l]) < o && (o = r)
        } else t = T(t, n), _.each(e, function (e, n, r) {
          ((i = t(e, n, r)) < a || i === 1 / 0 && o === 1 / 0) && (o = e, a = i)
        });
        return o
      }, _.shuffle = function (e) {
        for (var t, n = S(e) ? e : _.values(e), r = n.length, i = Array(r), o = 0; o < r; o++) t = _.random(0, o), t !== o && (i[o] = i[t]), i[t] = n[o];
        return i
      }, _.sample = function (e, t, n) {
        return null == t || n ? (S(e) || (e = _.values(e)), e[_.random(e.length - 1)]) : _.shuffle(e).slice(0, Math.max(0, t))
      }, _.sortBy = function (e, t, n) {
        return t = T(t, n), _.pluck(_.map(e, function (e, n, r) {
          return {
            value: e,
            index: n,
            criteria: t(e, n, r)
          }
        }).sort(function (e, t) {
          var n = e.criteria,
            r = t.criteria;
          if (n !== r) {
            if (n > r || void 0 === n) return 1;
            if (n < r || void 0 === r) return -1
          }
          return e.index - t.index
        }), "value")
      };
      var M = function (e) {
        return function (t, n, r) {
          var i = {};
          return n = T(n, r), _.each(t, function (r, o) {
            var a = n(r, o, t);
            e(i, r, a)
          }), i
        }
      };
      _.groupBy = M(function (e, t, n) {
        _.has(e, n) ? e[n].push(t) : e[n] = [t]
      }), _.indexBy = M(function (e, t, n) {
        e[n] = t
      }), _.countBy = M(function (e, t, n) {
        _.has(e, n) ? e[n]++ : e[n] = 1
      }), _.toArray = function (e) {
        return e ? _.isArray(e) ? h.call(e) : S(e) ? _.map(e, _.identity) : _.values(e) : []
      }, _.size = function (e) {
        return null == e ? 0 : S(e) ? e.length : _.keys(e).length
      }, _.partition = function (e, t, n) {
        t = T(t, n);
        var r = [],
          i = [];
        return _.each(e, function (e, n, o) {
          (t(e, n, o) ? r : i).push(e)
        }), [r, i]
      }, _.first = _.head = _.take = function (e, t, n) {
        if (null != e) return null == t || n ? e[0] : _.initial(e, e.length - t)
      }, _.initial = function (e, t, n) {
        return h.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
      }, _.last = function (e, t, n) {
        if (null != e) return null == t || n ? e[e.length - 1] : _.rest(e, Math.max(0, e.length - t))
      }, _.rest = _.tail = _.drop = function (e, t, n) {
        return h.call(e, null == t || n ? 1 : t)
      }, _.compact = function (e) {
        return _.filter(e, _.identity)
      };
      var P = function (e, t, n, r) {
        for (var i = [], o = 0, a = r || 0, l = x(e); a < l; a++) {
          var s = e[a];
          if (S(s) && (_.isArray(s) || _.isArguments(s))) {
            t || (s = P(s, t, n));
            var u = 0,
              c = s.length;
            for (i.length += c; u < c;) i[o++] = s[u++]
          } else n || (i[o++] = s)
        }
        return i
      };
      _.flatten = function (e, t) {
        return P(e, t, !1)
      }, _.without = function (e) {
        return _.difference(e, h.call(arguments, 1))
      }, _.uniq = _.unique = function (e, t, n, r) {
        _.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = T(n, r));
        for (var i = [], o = [], a = 0, l = x(e); a < l; a++) {
          var s = e[a],
            u = n ? n(s, a, e) : s;
          t ? (a && o === u || i.push(s), o = u) : n ? _.contains(o, u) || (o.push(u), i.push(s)) : _.contains(i, s) || i.push(s)
        }
        return i
      }, _.union = function () {
        return _.uniq(P(arguments, !0, !0))
      }, _.intersection = function (e) {
        for (var t = [], n = arguments.length, r = 0, i = x(e); r < i; r++) {
          var o = e[r];
          if (!_.contains(t, o)) {
            for (var a = 1; a < n && _.contains(arguments[a], o); a++);
            a === n && t.push(o)
          }
        }
        return t
      }, _.difference = function (e) {
        var t = P(arguments, !0, !0, 1);
        return _.filter(e, function (e) {
          return !_.contains(t, e)
        })
      }, _.zip = function () {
        return _.unzip(arguments)
      }, _.unzip = function (e) {
        for (var t = e && _.max(e, x).length || 0, n = Array(t), r = 0; r < t; r++) n[r] = _.pluck(e, r);
        return n
      }, _.object = function (e, t) {
        for (var n = {}, r = 0, i = x(e); r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
      }, _.findIndex = o(1), _.findLastIndex = o(-1), _.sortedIndex = function (e, t, n, r) {
        n = T(n, r, 1);
        for (var i = n(t), o = 0, a = x(e); o < a;) {
          var l = Math.floor((o + a) / 2);
          n(e[l]) < i ? o = l + 1 : a = l
        }
        return o
      }, _.indexOf = a(1, _.findIndex, _.sortedIndex), _.lastIndexOf = a(-1, _.findLastIndex), _.range = function (e, t, n) {
        null == t && (t = e || 0, e = 0), n = n || 1;
        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; o < r; o++, e += n) i[o] = e;
        return i
      };
      var D = function (e, t, n, r, i) {
        if (!(r instanceof t)) return e.apply(n, i);
        var o = k(e.prototype),
          a = e.apply(o, i);
        return _.isObject(a) ? a : o
      };
      _.bind = function (e, t) {
        if (b && e.bind === b) return b.apply(e, h.call(arguments, 1));
        if (!_.isFunction(e)) throw new TypeError("Bind must be called on a function");
        var n = h.call(arguments, 2),
          r = function () {
            return D(e, r, t, this, n.concat(h.call(arguments)))
          };
        return r
      }, _.partial = function (e) {
        var t = h.call(arguments, 1),
          n = function () {
            for (var r = 0, i = t.length, o = Array(i), a = 0; a < i; a++) o[a] = t[a] === _ ? arguments[r++] : t[a];
            for (; r < arguments.length;) o.push(arguments[r++]);
            return D(e, n, this, this, o)
          };
        return n
      }, _.bindAll = function (e) {
        var t, n, r = arguments.length;
        if (r <= 1) throw new Error("bindAll must be passed function names");
        for (t = 1; t < r; t++) n = arguments[t], e[n] = _.bind(e[n], e);
        return e
      }, _.memoize = function (e, t) {
        var n = function (r) {
          var i = n.cache,
            o = "" + (t ? t.apply(this, arguments) : r);
          return _.has(i, o) || (i[o] = e.apply(this, arguments)), i[o]
        };
        return n.cache = {}, n
      }, _.delay = function (e, t) {
        var n = h.call(arguments, 2);
        return setTimeout(function () {
          return e.apply(null, n)
        }, t)
      }, _.defer = _.partial(_.delay, _, 1), _.throttle = function (e, t, n) {
        var r, i, o, a = null,
          l = 0;
        n || (n = {});
        var s = function () {
          l = !1 === n.leading ? 0 : _.now(), a = null, o = e.apply(r, i), a || (r = i = null)
        };
        return function () {
          var u = _.now();
          l || !1 !== n.leading || (l = u);
          var c = t - (u - l);
          return r = this, i = arguments, c <= 0 || c > t ? (a && (clearTimeout(a), a = null), l = u, o = e.apply(r, i), a || (r = i = null)) : a || !1 === n.trailing || (a = setTimeout(s, c)), o
        }
      }, _.debounce = function (e, t, n) {
        var r, i, o, a, l, s = function () {
          var u = _.now() - a;
          u < t && u >= 0 ? r = setTimeout(s, t - u) : (r = null, n || (l = e.apply(o, i), r || (o = i = null)))
        };
        return function () {
          o = this, i = arguments, a = _.now();
          var u = n && !r;
          return r || (r = setTimeout(s, t)), u && (l = e.apply(o, i), o = i = null), l
        }
      }, _.wrap = function (e, t) {
        return _.partial(t, e)
      }, _.negate = function (e) {
        return function () {
          return !e.apply(this, arguments)
        }
      }, _.compose = function () {
        var e = arguments,
          t = e.length - 1;
        return function () {
          for (var n = t, r = e[t].apply(this, arguments); n--;) r = e[n].call(this, r);
          return r
        }
      }, _.after = function (e, t) {
        return function () {
          if (--e < 1) return t.apply(this, arguments)
        }
      }, _.before = function (e, t) {
        var n;
        return function () {
          return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
        }
      }, _.once = _.partial(_.before, 2);
      var j = !{
          toString: null
        }.propertyIsEnumerable("toString"),
        N = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
      _.keys = function (e) {
        if (!_.isObject(e)) return [];
        if (g) return g(e);
        var t = [];
        for (var n in e) _.has(e, n) && t.push(n);
        return j && l(e, t), t
      }, _.allKeys = function (e) {
        if (!_.isObject(e)) return [];
        var t = [];
        for (var n in e) t.push(n);
        return j && l(e, t), t
      }, _.values = function (e) {
        for (var t = _.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = e[t[i]];
        return r
      }, _.mapObject = function (e, t, n) {
        t = T(t, n);
        for (var r, i = _.keys(e), o = i.length, a = {}, l = 0; l < o; l++) r = i[l], a[r] = t(e[r], r, e);
        return a
      }, _.pairs = function (e) {
        for (var t = _.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
        return r
      }, _.invert = function (e) {
        for (var t = {}, n = _.keys(e), r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
        return t
      }, _.functions = _.methods = function (e) {
        var t = [];
        for (var n in e) _.isFunction(e[n]) && t.push(n);
        return t.sort()
      }, _.extend = A(_.allKeys), _.extendOwn = _.assign = A(_.keys), _.findKey = function (e, t, n) {
        t = T(t, n);
        for (var r, i = _.keys(e), o = 0, a = i.length; o < a; o++)
          if (r = i[o], t(e[r], r, e)) return r
      }, _.pick = function (e, t, n) {
        var r, i, o = {},
          a = e;
        if (null == a) return o;
        _.isFunction(t) ? (i = _.allKeys(a), r = C(t, n)) : (i = P(arguments, !1, !1, 1), r = function (e, t, n) {
          return t in n
        }, a = Object(a));
        for (var l = 0, s = i.length; l < s; l++) {
          var u = i[l],
            c = a[u];
          r(c, u, a) && (o[u] = c)
        }
        return o
      }, _.omit = function (e, t, n) {
        if (_.isFunction(t)) t = _.negate(t);
        else {
          var r = _.map(P(arguments, !1, !1, 1), String);
          t = function (e, t) {
            return !_.contains(r, t)
          }
        }
        return _.pick(e, t, n)
      }, _.defaults = A(_.allKeys, !0), _.create = function (e, t) {
        var n = k(e);
        return t && _.extendOwn(n, t), n
      }, _.clone = function (e) {
        return _.isObject(e) ? _.isArray(e) ? e.slice() : _.extend({}, e) : e
      }, _.tap = function (e, t) {
        return t(e), e
      }, _.isMatch = function (e, t) {
        var n = _.keys(t),
          r = n.length;
        if (null == e) return !r;
        for (var i = Object(e), o = 0; o < r; o++) {
          var a = n[o];
          if (t[a] !== i[a] || !(a in i)) return !1
        }
        return !0
      };
      var R = function (e, t, n, r) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof _ && (e = e._wrapped), t instanceof _ && (t = t._wrapped);
        var i = m.call(e);
        if (i !== m.call(t)) return !1;
        switch (i) {
          case "[object RegExp]":
          case "[object String]":
            return "" + e == "" + t;
          case "[object Number]":
            return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
          case "[object Date]":
          case "[object Boolean]":
            return +e == +t
        }
        var o = "[object Array]" === i;
        if (!o) {
          if ("object" != typeof e || "object" != typeof t) return !1;
          var a = e.constructor,
            l = t.constructor;
          if (a !== l && !(_.isFunction(a) && a instanceof a && _.isFunction(l) && l instanceof l) && "constructor" in e && "constructor" in t) return !1
        }
        n = n || [], r = r || [];
        for (var s = n.length; s--;)
          if (n[s] === e) return r[s] === t;
        if (n.push(e), r.push(t), o) {
          if ((s = e.length) !== t.length) return !1;
          for (; s--;)
            if (!R(e[s], t[s], n, r)) return !1
        } else {
          var u, c = _.keys(e);
          if (s = c.length, _.keys(t).length !== s) return !1;
          for (; s--;)
            if (u = c[s], !_.has(t, u) || !R(e[u], t[u], n, r)) return !1
        }
        return n.pop(), r.pop(), !0
      };
      _.isEqual = function (e, t) {
        return R(e, t)
      }, _.isEmpty = function (e) {
        return null == e || (S(e) && (_.isArray(e) || _.isString(e) || _.isArguments(e)) ? 0 === e.length : 0 === _.keys(e).length)
      }, _.isElement = function (e) {
        return !(!e || 1 !== e.nodeType)
      }, _.isArray = v || function (e) {
        return "[object Array]" === m.call(e)
      }, _.isObject = function (e) {
        var t = typeof e;
        return "function" === t || "object" === t && !!e
      }, _.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (e) {
        _["is" + e] = function (t) {
          return m.call(t) === "[object " + e + "]"
        }
      }), _.isArguments(arguments) || (_.isArguments = function (e) {
        return _.has(e, "callee")
      }), "function" != typeof /./ && "object" != typeof Int8Array && (_.isFunction = function (e) {
        return "function" == typeof e || !1
      }), _.isFinite = function (e) {
        return isFinite(e) && !isNaN(parseFloat(e))
      }, _.isNaN = function (e) {
        return _.isNumber(e) && e !== +e
      }, _.isBoolean = function (e) {
        return !0 === e || !1 === e || "[object Boolean]" === m.call(e)
      }, _.isNull = function (e) {
        return null === e
      }, _.isUndefined = function (e) {
        return void 0 === e
      }, _.has = function (e, t) {
        return null != e && y.call(e, t)
      }, _.noConflict = function () {
        return s._ = u, this
      }, _.identity = function (e) {
        return e
      }, _.constant = function (e) {
        return function () {
          return e
        }
      }, _.noop = function () {}, _.property = O, _.propertyOf = function (e) {
        return null == e ? function () {} : function (t) {
          return e[t]
        }
      }, _.matcher = _.matches = function (e) {
        return e = _.extendOwn({}, e),
          function (t) {
            return _.isMatch(t, e)
          }
      }, _.times = function (e, t, n) {
        var r = Array(Math.max(0, e));
        t = C(t, n, 1);
        for (var i = 0; i < e; i++) r[i] = t(i);
        return r
      }, _.random = function (e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
      }, _.now = Date.now || function () {
        return (new Date).getTime()
      };
      var L = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#x27;",
          "`": "&#x60;"
        },
        F = _.invert(L),
        V = function (e) {
          var t = function (t) {
              return e[t]
            },
            n = "(?:" + _.keys(e).join("|") + ")",
            r = RegExp(n),
            i = RegExp(n, "g");
          return function (e) {
            return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e
          }
        };
      _.escape = V(L), _.unescape = V(F), _.result = function (e, t, n) {
        var r = null == e ? void 0 : e[t];
        return void 0 === r && (r = n), _.isFunction(r) ? r.call(e) : r
      };
      var H = 0;
      _.uniqueId = function (e) {
        var t = ++H + "";
        return e ? e + t : t
      }, _.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
      };
      var B = /(.)^/,
        G = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029"
        },
        z = /\\|'|\r|\n|\u2028|\u2029/g,
        U = function (e) {
          return "\\" + G[e]
        };
      _.template = function (e, t, n) {
        !t && n && (t = n), t = _.defaults({}, t, _.templateSettings);
        var r = RegExp([(t.escape || B).source, (t.interpolate || B).source, (t.evaluate || B).source].join("|") + "|$", "g"),
          i = 0,
          o = "__p+='";
        e.replace(r, function (t, n, r, a, l) {
          return o += e.slice(i, l).replace(z, U), i = l + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : a && (o += "';\n" + a + "\n__p+='"), t
        }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
          var a = new Function(t.variable || "obj", "_", o)
        } catch (e) {
          throw e.source = o, e
        }
        var l = function (e) {
          return a.call(this, e, _)
        };
        return l.source = "function(" + (t.variable || "obj") + "){\n" + o + "}", l
      }, _.chain = function (e) {
        var t = _(e);
        return t._chain = !0, t
      };
      var q = function (e, t) {
        return e._chain ? _(t).chain() : t
      };
      _.mixin = function (e) {
        _.each(_.functions(e), function (t) {
          var n = _[t] = e[t];
          _.prototype[t] = function () {
            var e = [this._wrapped];
            return d.apply(e, arguments), q(this, n.apply(_, e))
          }
        })
      }, _.mixin(_), _.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = c[e];
        _.prototype[e] = function () {
          var n = this._wrapped;
          return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], q(this, n)
        }
      }), _.each(["concat", "join", "slice"], function (e) {
        var t = c[e];
        _.prototype[e] = function () {
          return q(this, t.apply(this._wrapped, arguments))
        }
      }), _.prototype.value = function () {
        return this._wrapped
      }, _.prototype.valueOf = _.prototype.toJSON = _.prototype.value, _.prototype.toString = function () {
        return "" + this._wrapped
      }, r = [], void 0 !== (i = function () {
        return _
      }.apply(t, r)) && (e.exports = i)
    }).call(this)
  },
  1060: function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      o = n(1),
      a = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(o);
    n(288);
    var l = n(180),
      s = function () {
        function e() {
          r(this, e)
        }
        return i(e, null, [{
          key: "renderFunction",
          value: function (t, n) {
            if (!n) return a.createElement("span", null);
            var r = e.getPresentSamples(t),
              i = n.samples.map(function (e) {
                return a.createElement("li", {
                  className: e.id in r ? "" : "invisible"
                }, n.getComponentForSample(e.id, r[e.id] ? 1 : .1, r[e.id] ? "" : "Mutation has supporting reads, but wasn't called"))
              });
            return a.createElement("div", {
              style: {
                position: "relative"
              }
            }, a.createElement("ul", {
              style: {
                marginBottom: 0
              },
              className: "list-inline list-unstyled"
            }, i))
          }
        }, {
          key: "getSortValue",
          value: function (t, n) {
            if (n) {
              var r = e.getPresentSamples(t),
                i = [];
              i.push(Object.keys(r).filter(function (e) {
                return r[e]
              }).length);
              var o = !0,
                a = !1,
                l = void 0;
              try {
                for (var s, u = n.getSampleIdsInOrder()[Symbol.iterator](); !(o = (s = u.next()).done); o = !0) {
                  var c = s.value;
                  i.push(+!!r[c])
                }
              } catch (e) {
                a = !0, l = e
              } finally {
                try {
                  !o && u.return && u.return()
                } finally {
                  if (a) throw l
                }
              }
              return i
            }
            return []
          }
        }, {
          key: "getPresentSamples",
          value: function (e) {
            return e.reduce(function (e, t, n) {
              return t.molecularProfileId && (0, l.isUncalled)(t.molecularProfileId) ? t.tumorAltCount && t.tumorAltCount > 0 && (e[t.sampleId] = !1) : e[t.sampleId] = !0, e
            }, {})
          }
        }, {
          key: "getSample",
          value: function (e) {
            var t = [];
            return e && e.forEach(function (e) {
              t.push(e.sampleId)
            }), 1 == t.length ? t[0] : t
          }
        }]), e
      }();
    t.default = s
  },
  1061: function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      l = n(1),
      s = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(l),
      u = n(177),
      c = function (e) {
        function t() {
          return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
        }
        return o(t, e), a(t, [{
          key: "render",
          value: function () {
            return s.createElement("div", {
              style: {
                position: "relative"
              }
            }, s.createElement("div", {
              style: {
                position: "absolute",
                left: "50%"
              }
            }, s.createElement(u.ThreeBounce, {
              style: {
                position: "relative",
                left: "-50%"
              },
              className: "center-block text-center"
            })), s.createElement("iframe", {
              style: {
                width: "100%",
                position: "relative",
                height: this.props.height,
                border: "none"
              },
              src: this.props.url
            }))
          }
        }]), t
      }(s.Component);
    t.default = c
  },
  1090: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function l(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var s = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      u = n(1),
      c = i(u),
      f = n(3),
      p = i(f),
      d = n(90),
      h = r(d),
      m = n(176),
      y = n(1091),
      v = r(y),
      g = n(1094),
      b = function (e) {
        function t(e) {
          o(this, t);
          var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)),
            r = n.computeMutationFrequencyBySample(e.mergedMutations);
          return n.state = {
            frequencies: r
          }, n
        }
        return l(t, e), s(t, [{
          key: "shouldComponentUpdate",
          value: function () {
            return !1
          }
        }]), s(t, [{
          key: "componentDidMount",
          value: function () {
            var e = this,
              t = p.debounce(function () {
                return e.forceUpdate()
              }, 500);
            (0, h.default)(window).resize(t)
          }
        }, {
          key: "render",
          value: function () {
            var e = p.reduce(this.props.sampleManager.samples, function (e, t, n) {
              return e[t.id] = n + 1, e
            }, {});
            return c.createElement("div", {
              style: {
                display: "flex"
              }
            }, c.createElement(v.default, {
              mutations: p.flatten(this.props.mergedMutations),
              key: Math.random(),
              sampleManager: this.props.sampleManager,
              width: this.getTracksWidth(),
              cnaSegments: this.props.cnaSegments,
              samples: this.props.samples
            }), c.createElement(m.If, {
              condition: this.shouldShowVAFPlot()
            }, c.createElement(g.ThumbnailExpandVAFPlot, {
              data: this.state.frequencies,
              order: this.props.sampleManager.sampleIndex,
              colors: this.props.sampleColors,
              labels: e,
              overlayPlacement: "right",
              cssClass: "vafPlot"
            })))
          }
        }, {
          key: "shouldShowVAFPlot",
          value: function () {
            return this.props.mergedMutations.length > 0
          }
        }, {
          key: "getTracksWidth",
          value: function () {
            return this.props.getContainerWidth() - (this.shouldShowVAFPlot() ? 140 : 40)
          }
        }, {
          key: "computeMutationFrequencyBySample",
          value: function (e) {
            var t = {},
              n = void 0,
              r = void 0,
              i = !0,
              o = !1,
              a = void 0;
            try {
              for (var l, s = e[Symbol.iterator](); !(i = (l = s.next()).done); i = !0) {
                var u = l.value,
                  c = !0,
                  f = !1,
                  p = void 0;
                try {
                  for (var d, h = u[Symbol.iterator](); !(c = (d = h.next()).done); c = !0) {
                    var m = d.value;
                    m.tumorAltCount >= 0 && m.tumorRefCount >= 0 && (n = m.sampleId, r = m.tumorAltCount / (m.tumorRefCount + m.tumorAltCount), t[n] = t[n] || [], t[n].push(r))
                  }
                } catch (e) {
                  f = !0, p = e
                } finally {
                  try {
                    !c && h.return && h.return()
                  } finally {
                    if (f) throw p
                  }
                }
              }
            } catch (e) {
              o = !0, a = e
            } finally {
              try {
                !i && s.return && s.return()
              } finally {
                if (o) throw a
              }
            }
            var y = !0,
              v = !1,
              g = void 0;
            try {
              for (var b, w = Object.keys(this.props.sampleOrder)[Symbol.iterator](); !(y = (b = w.next()).done); y = !0) {
                var E = b.value;
                t[E] = t[E] || [];
                for (var _ = e.length - t[E].length, C = 0; C < _; C++) t[E].push(NaN)
              }
            } catch (e) {
              v = !0, g = e
            } finally {
              try {
                !y && w.return && w.return()
              } finally {
                if (v) throw g
              }
            }
            return t
          }
        }]), t
      }(c.Component);
    t.default = b
  },
  1091: function (e, t, n) {
    "use strict";
    (function (e) {
      function r(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }

      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
      }

      function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var l = function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        }(),
        s = n(1),
        u = r(s),
        c = n(34),
        f = r(c),
        p = n(3),
        d = r(p),
        h = n(1092),
        m = r(h),
        y = function (t) {
          function n() {
            return i(this, n), o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this))
          }
          return a(n, t), l(n, [{
            key: "componentDidMount",
            value: function () {
              var t = this,
                n = d.keyBy(this.props.samples.filter(function (e) {
                  return e.copyNumberSegmentPresent
                }), function (e) {
                  return e.sampleId
                }),
                r = d.keyBy(this.props.samples.filter(function (e) {
                  return e.sequenced
                }), function (e) {
                  return e.sampleId
                }),
                i = m.GenomicOverviewConfig(Object.keys(n).length + Object.keys(r).length, this.props.width),
                o = 0,
                a = m.createRaphaelCanvas(document.getElementsByClassName("genomicOverviewTracksContainer")[0], i),
                l = m.getChmInfo();
              m.plotChromosomes(a, i, l), d.each(this.props.sampleManager.samples, function (r) {
                if (n[r.id]) {
                  var s = [],
                    u = d.filter(t.props.cnaSegments, function (e) {
                      return e.sampleId === r.id
                    });
                  if (d.each(u, function (e) {
                      var t = [];
                      t.push(e.sampleId), t.push(e.chromosome), t.push(e.end), t.push(e.start), t.push(e.numberOfProbes), t.push(e.segmentMean), s.push(t)
                    }), m.plotCnSegs(a, i, l, o, s, 1, 3, 2, 5, r.id), o += 1, t.props.sampleManager.samples.length > 1) {
                    var c = e('[id="cnaTrack' + r.id + '"]'),
                      p = {
                        x: parseInt(c.attr("x")) - 10,
                        y: parseInt(c.attr("y")) - 5
                      },
                      h = e('<svg height="12" width="12" />').attr(p);
                    c.replaceWith(h);
                    var y = t.props.sampleManager.getComponentForSample(r.id);
                    f.render(y, h[0])
                  }
                }
              }), d.each(this.props.sampleManager.samples, function (n) {
                if (r[n.id]) {
                  var s = d.filter(t.props.mutations, function (e) {
                    return e.sampleId === n.id
                  });
                  if (m.plotMuts(a, i, l, o, s, n.id), o += 1, t.props.sampleManager.samples.length > 1) {
                    var u = "mutTrack" + n.id,
                      c = e('[id="' + u + '"]'),
                      p = {
                        x: parseInt(c.attr("x")) - 10,
                        y: parseInt(c.attr("y")) - 5
                      },
                      h = e('<svg id="' + u + '" height="12" width="12" />');
                    h.attr(p), c.replaceWith(h);
                    var y = t.props.sampleManager.getComponentForSample(n.id);
                    f.render(y, h[0])
                  }
                }
              })
            }
          }, {
            key: "render",
            value: function () {
              return u.createElement("div", {
                className: "genomicOverviewTracksContainer"
              })
            }
          }]), n
        }(u.Component);
      t.default = y
    }).call(t, n(90))
  },
  1092: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      var n = {};
      return n.nRows = e, n.canvasWidth = t, n.wideLeftText = 25, n.wideRightText = 35, n.GenomeWidth = n.canvasWidth - n.wideLeftText - n.wideRightText, n.pixelsPerBinMut = 3, n.rowHeight = 20, n.rowMargin = 5, n.ticHeight = 10, n.cnTh = [.2, 1.5], n.cnLengthTh = 5e4, n.getCnColor = function (e) {
        if (e >= n.cnTh[1]) return "#f00";
        if (e <= -n.cnTh[1]) return "#00f";
        var t = Math.round(255 * (n.cnTh[1] - Math.abs(e)) / (n.cnTh[1] - n.cnTh[0]));
        return e < 0 ? "rgb(" + t + "," + t + ",255)" : "rgb(255," + t + "," + t + ")"
      }, n.canvasHeight = function () {
        return 2 * n.rowMargin + n.ticHeight + n.nRows * (n.rowHeight + n.rowMargin)
      }, n.yRow = function (e) {
        return 2 * n.rowMargin + n.ticHeight + e * (n.rowHeight + n.rowMargin)
      }, n.xRightText = function () {
        return n.wideLeftText + n.GenomeWidth + 5
      }, n
    }

    function o(e, t) {
      return (0, g.default)(e, t.canvasWidth, t.canvasHeight())
    }

    function a(e, t) {
      for (var n = [0], r = 1; r < e.length; r++) n.push(n[r - 1] + e[r] / t);
      return n
    }

    function l() {
      var e = {};
      return e.hg19 = [0, 249250621, 243199373, 198022430, 191154276, 180915260, 171115067, 159138663, 146364022, 141213431, 135534747, 135006516, 133851895, 115169878, 107349540, 102531392, 90354753, 81195210, 78077248, 59128983, 63025520, 48129895, 51304566, 155270560, 59373566], e.total = 3095677412, e.perc = a(e.hg19, e.total), e.loc2perc = function (t, n) {
        return e.perc[t - 1] + n / e.total
      }, e.loc2xpixil = function (t, n, r) {
        return e.loc2perc(t, n) * r.GenomeWidth + r.wideLeftText
      }, e.perc2loc = function (t, n) {
        var r;
        if (n) {
          var i;
          for (i = n; i < e.hg19.length && !(t <= e.perc[i]); i++);
          r = i
        } else {
          for (var i, o = 1, a = e.hg19.length - 1; o <= a;) i = Math.floor((o + a) / 2), e.perc[i] >= t ? a = i - 1 : o = i + 1;
          r = o
        }
        return [r, Math.round(e.total * (t - e.perc[r - 1]))]
      }, e.xpixil2loc = function (t, n, r) {
        var i = (n - t.wideLeftText) / t.GenomeWidth;
        return e.perc2loc(i, r)
      }, e.middle = function (t, n) {
        var r = e.hg19[t] / 2;
        return e.loc2xpixil(t, r, n)
      }, e.chmName = function (e) {
        return 23 === e ? "X" : 24 === e ? "Y" : e
      }, e
    }

    function s(e, t, n) {
      var r = t.rowMargin + t.ticHeight;
      u(t.wideLeftText, r, t.wideLeftText + t.GenomeWidth, r, e, "#000", 1);
      for (var i = 1; i < n.hg19.length; i++) {
        var o = n.loc2xpixil(i, 0, t);
        u(o, r, o, t.rowMargin, e, "#000", 1);
        var a = n.middle(i, t);
        e.text(a, r - t.rowMargin, n.chmName(i))
      }
      u(t.wideLeftText + t.GenomeWidth, r, t.wideLeftText + t.GenomeWidth, t.rowMargin, e, "#000", 1)
    }

    function u(e, t, n, r, i, o, a) {
      var l = "M" + e + " " + t + " L" + n + " " + r,
        s = i.path(l);
      return s.attr("stroke", o), s.attr("stroke-width", a), s.attr("opacity", .5), s.translate(.5, .5), s
    }

    function c(e, t) {
      return "chr" + t.chmName(e[0]) + ":" + f(e[1])
    }

    function f(e) {
      for (var t = e.toString(), n = /(\d+)(\d{3})/; n.test(t);) t = t.replace(n, "$1,$2");
      return t
    }

    function p(e, t, n, r, i, o, a, l, s, u) {
      var f = t.yRow(r),
        p = 0,
        d = 0;
      if (_.each(i, function (r) {
          var i = y(r[o]);
          if (!(null == i || i[0] >= n.hg19.length)) {
            var u = r[a],
              m = r[l],
              v = r[s];
            if (p += m - u, !(Math.abs(v) < t.cnTh[0] || m - u < t.cnLengthTh)) {
              d += m - u;
              var g = n.loc2xpixil(i, u, t),
                b = n.loc2xpixil(i, m, t),
                w = e.rect(g, f, b - g, t.rowHeight),
                E = t.getCnColor(v);
              w.attr("fill", E), w.attr("stroke", E), w.attr("stroke-width", 1), w.attr("opacity", .5), w.translate(.5, .5);
              var _ = "Mean copy number log2 value: " + v + "<br/>from " + c([i, u], n) + "<br/>to " + c([i, m], n);
              h(w.node, _, "", "")
            }
          }
        }), null != u) {
        var v = "CNA",
          g = e.text(12, f + t.rowHeight / 2, v).attr({
            "text-anchor": "center",
            fill: "black"
          });
        g.node.setAttribute("id", "cnaTrack" + u)
      } else e.text(0, f + t.rowHeight / 2, "CNA").attr({
        "text-anchor": "start"
      });
      var v = 0 === p ? "N/A" : (100 * d / p).toFixed(1) + "%",
        b = 0 === p ? "Copy number segment data not available" : "Percentage of copy number altered chromosome regions (mean copy number log value >0.2 or <-0.2) out of measured regions.",
        g = e.text(t.xRightText(), f + t.rowHeight / 2, v).attr({
          "text-anchor": "start",
          "font-weight": "bold"
        });
      m(g, e), h(g.node, b, null, {
        my: "top right",
        at: "bottom left",
        viewport: (0, w.default)(window)
      })
    }

    function d(e, t, n, r, i, o) {
      for (var a = 0, l = _.filter(i, function (e) {
          return e.sampleId === o
        }), s = [], u = 0; u < l.length; u++) {
        var c = l[u];
        if (void 0 !== c.gene.chromosome) {
          var f = y(c.gene.chromosome);
          if (null != f && f <= n.hg19.length) {
            var p = Math.round(n.loc2xpixil(f, (c.startPosition + c.endPosition) / 2, t)),
              d = p - p % t.pixelsPerBinMut;
            null == s[d] && (s[d] = []), s[d].push(c.gene.hugoGeneSymbol + ": " + c.proteinChange), a++
          }
        }
      }
      var v = t.yRow(r) + t.rowHeight;
      if (w.default.each(s, function (n, r) {
          var i = n;
          if (r) {
            var o = r.length > 5 ? t.rowHeight : t.rowHeight * r.length / 5,
              a = e.rect(i, v - o, t.pixelsPerBinMut, o);
            a.attr("fill", "#0f0"), a.attr("stroke", "#0f0"), a.attr("stroke-width", 1), a.attr("opacity", .5), a.translate(.5, .5), h(a.node, r.join("</br>"), 100, "")
          }
        }), null !== o) {
        var g = e.text(12, v - t.rowHeight / 2, "MUT").attr({
          "text-anchor": "center",
          fill: "black"
        });
        g.node.setAttribute("id", "mutTrack" + o)
      } else e.text(0, v - t.rowHeight / 2, "MUT").attr({
        "text-anchor": "start"
      });
      var g = e.text(t.xRightText(), v - t.rowHeight / 2, i.length).attr({
        "text-anchor": "start",
        "font-weight": "bold"
      });
      m(g, e);
      h(g.node, "Number of mutation events.", null, {
        my: "top right",
        at: "bottom left"
      })
    }

    function h(e, t, n, r) {
      var i = {
        content: {
          text: t
        },
        show: {
          event: "mouseover"
        },
        hide: {
          fixed: !0,
          delay: 100,
          event: "mouseout"
        },
        style: {
          classes: "qtip-light qtip-rounded"
        },
        position: {
          my: "bottom right",
          at: "top left"
        }
      };
      (0, w.default)(e).qtip(i)
    }

    function m(e, t) {
      var n = e.getBBox();
      return t.path("M" + n.x + " " + (n.y + n.height) + "L" + (n.x + n.width) + " " + (n.y + n.height))
    }

    function y(e) {
      return 0 === e.toLowerCase().indexOf("chr") && (e = e.substring(3)), "X" !== e && "x" !== e || (e = 23), "Y" !== e && "y" !== e || (e = 24), isNaN(e) || e < 1 || e > 24 ? null : parseInt(e)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.GenomicOverviewConfig = i, t.createRaphaelCanvas = o, t.getChmInfo = l, t.plotChromosomes = s, t.plotCnSegs = p, t.plotMuts = d;
    var v = n(1093),
      g = r(v),
      b = n(90),
      w = r(b),
      E = n(3),
      _ = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(E);
    n(1057), n(1058)
  },
  1093: function (e, t, n) {
    e.exports = n(6)(1268)
  },
  1094: function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.ThumbnailExpandVAFPlot = void 0;
    var a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      l = n(1),
      s = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(l),
      u = n(173),
      c = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(u);
    n(288);
    var f = n(1095);
    (t.ThumbnailExpandVAFPlot = function (e) {
      function t() {
        return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
      }
      return o(t, e), a(t, [{
        key: "shouldComponentUpdate",
        value: function () {
          return !1
        }
      }, {
        key: "render",
        value: function () {
          var e = {
              data: this.props.data,
              colors: this.props.colors,
              order: this.props.order,
              show_controls: !1,
              nolegend: !0,
              width: 64,
              height: 64,
              label_font_size: "6.5px",
              xticks: 0,
              yticks: 0,
              margin_bottom: 15
            },
            t = {
              data: this.props.data,
              colors: this.props.colors,
              labels: this.props.labels,
              order: this.props.order,
              show_controls: !0,
              nolegend: !1,
              init_show_histogram: !0,
              init_show_curve: !0
            };
          return s.createElement(c.default, {
            placement: this.props.overlayPlacement,
            trigger: ["hover", "focus"],
            overlay: s.createElement(f.VAFPlot, t),
            arrowContent: s.createElement("div", {
              className: "rc-tooltip-arrow-inner"
            }),
            destroyTooltipOnHide: !1
          }, s.createElement("div", {
            className: this.props.cssClass || ""
          }, s.createElement(f.VAFPlot, e)))
        }
      }]), t
    }(s.Component)).defaultProps = {
      order: {},
      colors: {},
      labels: {},
      overlayPlacement: "left"
    }
  },
  1095: function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.VAFPlot = void 0;
    var a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      l = n(1),
      s = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(l),
      u = n(90),
      c = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(u),
      f = n(1096);
    (t.VAFPlot = function (e) {
      function t(e) {
        r(this, t);
        var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        n.refHandlers = {
          histogramCheckbox: function (e) {
            n.histogramCheckbox = e
          },
          curveCheckbox: function (e) {
            n.curveCheckbox = e
          },
          div: function (e) {
            n.div = e
          }
        };
        var o = 0 === n.props.xticks ? 13 : 30,
          a = {
            label_font_size: n.props.label_font_size,
            xticks: n.props.xticks,
            yticks: n.props.yticks,
            nolegend: n.props.nolegend,
            margin: {
              top: n.props.margin_top,
              left: n.props.margin_left,
              right: n.props.margin_right,
              bottom: n.props.margin_bottom
            },
            width: n.props.width,
            height: n.props.height
          };
        return void 0 === a.margin.bottom && (a.margin.bottom = 30 + o / 2), void 0 === a.height && void 0 !== a.margin.top && (a.height = (500 + o) / 2 - a.margin.top - a.margin.bottom), n.state = {
          show_histogram: !!n.props.init_show_histogram,
          show_curve: !!n.props.init_show_curve,
          options: a
        }, n.toggleShowHistogram = n.toggleShowHistogram.bind(n), n.toggleShowCurve = n.toggleShowCurve.bind(n), n
      }
      return o(t, e), a(t, [{
        key: "componentDidMount",
        value: function () {
          (0, f.AlleleFreqPlotMulti)(this, this.props.data, this.state.options, this.props.order, this.props.colors, this.props.labels)
        }
      }, {
        key: "shouldComponentUpdate",
        value: function (e, t) {
          return this.histogramCheckbox && (t.show_histogram ? (0, c.default)(this.div).find(".viz_hist").show() : (0, c.default)(this.div).find(".viz_hist").hide()), this.curveCheckbox && (t.show_curve ? (0, c.default)(this.div).find(".viz_curve").show() : (0, c.default)(this.div).find(".viz_curve").hide()), t.show_histogram !== this.state.show_histogram || t.show_curve !== this.state.show_curve
        }
      }, {
        key: "toggleShowHistogram",
        value: function () {
          var e = !this.state.show_histogram;
          this.setState({
            show_histogram: e
          })
        }
      }, {
        key: "toggleShowCurve",
        value: function () {
          var e = !this.state.show_curve;
          this.setState({
            show_curve: e
          })
        }
      }, {
        key: "render",
        value: function () {
          var e = s.createElement("label", {
              key: "histogram-toggle",
              style: {
                marginRight: 10
              }
            }, s.createElement("input", {
              ref: this.refHandlers.histogramCheckbox,
              type: "checkbox",
              checked: this.state.show_histogram,
              onChange: this.toggleShowHistogram,
              style: {
                marginRight: 3
              }
            }), "histogram"),
            t = s.createElement("label", {
              key: "curve-toggle"
            }, s.createElement("input", {
              ref: this.refHandlers.curveCheckbox,
              type: "checkbox",
              checked: this.state.show_curve,
              onChange: this.toggleShowCurve,
              style: {
                marginRight: 3
              }
            }), "density estimation"),
            n = [e, t];
          return s.createElement("div", {
            style: {
              display: "inline"
            },
            ref: this.refHandlers.div
          }, this.props.show_controls ? n : [], this.props.show_controls ? s.createElement("br", null) : [])
        }
      }]), t
    }(s.Component)).defaultProps = {
      data: {},
      order: {},
      colors: {},
      labels: {},
      width: 200,
      height: void 0,
      margin_left: 50,
      margin_top: 20,
      margin_right: 30,
      margin_bottom: void 0,
      xticks: 3,
      yticks: 8,
      label_font_size: "11.5px",
      nolegend: !1,
      init_show_histogram: !0,
      init_show_curve: !0,
      show_controls: !1
    }
  },
  1096: function (e, t, n) {
    "use strict";
    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.AlleleFreqPlotMulti = void 0;
      var r = n(937),
        i = function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return t.default = e, t
        }(r),
        o = function () {
          var e = function (e, t, n) {
              if (_.find(e, function (e) {
                  return void 0 !== e[n]
                })) return i.zip(e, t).map(function (e) {
                return void 0 === e[0][n] === e[1][n] ? 0 : e[0][n] / (e[0][n] + e[1][n])
              })
            },
            t = function (t, n) {
              var r = t.mutations.data["alt-count"],
                i = t.mutations.data["ref-count"];
              return e(r, i, n)
            },
            n = function (e) {
              return function (t) {
                return 1 / (e * Math.sqrt(2 * Math.PI)) * Math.exp(-1 * Math.pow(t - 0, 2) / (2 * Math.pow(e, 2)))
              }
            },
            r = function (e, t) {
              return function (n) {
                return t.map(function (t) {
                  return [t, i.mean(n, function (n) {
                    return e(t - n)
                  })]
                })
              }
            };
          return {
            process_data: e,
            extract_and_process: t,
            kernelDensityEstimator: r,
            gaussianKernel: n,
            calculate_bandwidth: function (e) {
              var t = i.mean(e),
                n = i.mean(e.map(function (e) {
                  return Math.pow(e - t, 2)
                }));
              return 1.06 * Math.pow(n, .5) * Math.pow(e.length, -.2)
            }
          }
        }(),
        a = (t.AlleleFreqPlotMulti = function (t, n, r, a, l, s) {
          var u = t.div,
            c = {};
          if (a || (a = {}), 0 === Object.keys(a).length) {
            var f = 0;
            for (var p in n) n.hasOwnProperty(p) && (a[p] = f, f += 1)
          }
          l = e.extend(!0, {}, l);
          for (var p in n)
            if (n.hasOwnProperty(p)) {
              for (var d = i.rgb(l[p] || "rgb(0,0,0)"); d.toString() in c && (0 !== d.r || 0 !== d.g || 0 !== d.b);) d = d.darker(.4);
              var h = d.toString();
              c[h] = !0, l[p] = {
                stroke: h,
                fill: h
              }
            }
          var r = r || {
              label_font_size: "11.5px",
              xticks: 3,
              yticks: 8,
              nolegend: !1
            },
            m = 0 === r.xticks ? 13 : 30;
          r.margin = r.margin || {};
          var y = e.extend({
              top: 20,
              right: 30,
              bottom: 30 + m / 2,
              left: 50
            }, r.margin),
            v = r.width || 200,
            g = r.height || (500 + m) / 2 - y.top - y.bottom,
            b = i.scale.linear().domain([-.1, 1]).range([0, v]),
            w = i.svg.axis().scale(b).orient("bottom").ticks(r.xticks),
            E = o,
            _ = {},
            C = {},
            T = {};
          for (var p in n) n.hasOwnProperty(p) && (_[p] = Math.max(E.calculate_bandwidth(n[p]), .01), C[p] = E.kernelDensityEstimator(E.gaussianKernel(_[p]), b.ticks(100)), T[p] = C[p](n[p]));
          var A = i.layout.histogram().frequency(!1).bins(b.ticks(30)),
            k = {};
          for (var p in n) n.hasOwnProperty(p) && (k[p] = A(n[p]));
          var O = [];
          for (var p in T) T.hasOwnProperty(p) && (O = O.concat(T[p]));
          var I = O.map(function (e) {
              return e[1]
            }),
            x = [i.min(I), i.max(I)],
            S = i.scale.linear().domain(x).range([g, 0]),
            M = i.svg.line().x(function (e) {
              return b(e[0])
            }).y(function (e) {
              return S(e[1])
            }),
            P = i.select(u).append("svg").attr("width", v + y.left + (0 === r.yticks ? 0 : y.right) + (r.nolegend ? 0 : 100)).attr("height", g + y.top + y.bottom).append("g").attr("transform", "translate(" + (0 === r.yticks ? y.left / 2 : y.left) + "," + y.top + ")"),
            D = P.append("g").attr("transform", "translate(0," + g + ")").call(w),
            j = function (e) {
              return e.attr("fill", "none").attr("stroke", "#000").attr("shape-rendering", "crispEdges")
            };
          j(D.selectAll("path")), j(D.selectAll("line")), D.append("text").attr("x", v / 2).attr("y", m).attr("font-size", r.label_font_size).style("text-anchor", "middle").style("font-style", "italic").text("variant allele frequency");
          var N = [];
          for (var p in k) k.hasOwnProperty(p) && (N = N.concat(k[p]));
          var R = N.map(function (e) {
              return e.length
            }),
            L = [0, i.max(R)],
            F = i.svg.axis().scale(S.copy().domain(L)).orient("left").ticks(r.yticks),
            V = P.append("g").call(F),
            H = m;
          H += 0 === r.yticks ? 0 : function (e) {
            var t = "" + e,
              n = t.split("").length;
            return n >= 4 && (n += 1.5), 7 * n / 3
          }(L[1]), V.append("text").attr("transform", "rotate(-90)").attr("x", -g / 2).attr("y", -H).attr("font-size", r.label_font_size).style("text-anchor", "middle").style("font-style", "italic").text("mutation count"), j(V.selectAll("path")).attr("display", 0 === r.yticks ? "" : "none"), j(V.selectAll("line"));
          var B = N.map(function (e) {
              return e.y
            }),
            G = [i.min(B), i.max(B)],
            z = S.copy();
          z.domain(G);
          for (var p in k) k.hasOwnProperty(p) && P.selectAll(".bar").data(k[p]).enter().insert("rect").attr("x", function (e) {
            return b(e.x) + 1
          }).attr("y", function (e) {
            return z(e.y)
          }).attr("class", a[p] + "_viz_hist viz_hist").attr("width", b(k[p][0].dx + k[p][0].x) - b(k[p][0].x) - 1).attr("height", function (e) {
            return g - z(e.y)
          }).attr("fill", l[p].fill).attr("opacity", Object.keys(n).length > 1 ? "0.1" : "0.3");
          for (var p in T) T.hasOwnProperty(p) && P.append("path").datum(T[p]).attr("d", M).attr("class", "curve " + a[p] + "_viz_curve viz_curve").attr("fill", "none").attr("stroke", l[p].stroke).attr("stroke-width", "1.5px").attr("opacity", "0.9").attr("data-legend", function () {
            return p
          }).attr("data-legend-pos", function () {
            return a[p]
          });
          if (!r.nolegend && Object.keys(n).length > 1) {
            var U = P.append("g").attr("class", "legend").attr("transform", "translate(" + (v + 25) + ",0)").style("font-size", "13px");
            i.legend(t, U, 13, s, a)
          }
          return u
        }, function (t, n, r, i, o) {
          e(t).find(".viz_hist").hide(), e(t).find(".viz_curve").hide(), i && (e(t).find("." + r[n] + "_viz_hist").show(), e(t).find("." + r[n] + "_viz_hist").attr("opacity", "0.5")), o && e(t).find("." + r[n] + "_viz_curve").show()
        }),
        l = function (t, n, r) {
          n && (e(t).find(".viz_hist").show(), e(t).find(".viz_hist").attr("opacity", "0.1")), r && e(t).find(".viz_curve").show()
        };
      i.legend = function (t, n, r, o, s) {
        return n.each(function () {
          var n = i.select(this),
            u = {},
            c = i.select(n.property("nearestViewportElement")),
            f = n.attr("data-style-padding") || 5,
            p = n.selectAll(".legend-box").data([!0]),
            d = n.selectAll(".legend-items").data([!0]);
          d.enter().append("g").classed("legend-items", !0), c.selectAll("[data-legend]").each(function () {
            var e = i.select(this);
            u[e.attr("data-legend")] = {
              pos: e.attr("data-legend-pos") || this.getBBox().y,
              color: void 0 != e.attr("data-legend-color") ? e.attr("data-legend-color") : "none" != e.style("fill") ? e.style("fill") : e.style("stroke")
            }
          }), u = i.entries(u).sort(function (e, t) {
            return e.value.pos - t.value.pos
          });
          d.selectAll("text").data(u, function (e) {
            return e.key
          }).call(function (e) {
            e.enter().append("text")
          }).call(function (e) {
            e.exit().remove()
          }).attr("y", function (e, t) {
            return t - .1 + .4 * t + "em"
          }).attr("x", "1em").text(function (e) {
            var t = e.key;
            return t.length > 10 ? t.substring(0, 4) + "..." + t.slice(-3) : t
          }), d.selectAll("circle").data(u, function (e) {
            return e.key
          }).call(function (e) {
            e.enter().append("circle")
          }).call(function (e) {
            e.exit().remove()
          }).attr("cy", function (e, t) {
            return t - .5 + .4 * t + "em"
          }).attr("cx", 0).attr("r", "0.5em").style("fill", function (e) {
            return e.value.color
          });
          for (var h = 0, m = Object.keys(u); h < m.length; h++) d.append("text").attr("x", 0).attr("y", (h - .5 + .4 * h) * r).attr("fill", "white").attr("font-size", "10").attr("dy", "0.34em").attr("text-anchor", "middle").text(o[u[m[h]].key]);
          d.selectAll("rect").data(u, function (e) {
            return e.key
          }).call(function (e) {
            e.enter().append("rect")
          }).call(function (e) {
            e.exit().remove()
          }).attr("id", function (e) {
            return e.key + "legend_hover_rect"
          }).attr("y", function (e, t) {
            return t - 1 + .4 * t - .2 + "em"
          }).attr("x", "-0.8em").attr("width", function (e) {
            return "110px"
          }).attr("height", "1.4em").style("fill", function (e) {
            return e.value.color
          }).attr("opacity", "0").on("mouseover", Object.keys(u).length > 1 ? function (n) {
            e(this).attr("opacity", "0.2"), a(t.div, n.key, s, t.state.show_histogram, t.state.show_curve)
          } : function (e) {}).on("mouseout", function (t) {
            e(this).attr("opacity", "0")
          });
          for (var h = 0; h < u.length; h++) {
            var y = u[h].key;
            y.length > 10 && (e("#" + y + "legend_hover_rect").attr("title", y), e("#" + y + "legend_hover_rect").qtip({
              content: {
                attr: "title"
              },
              style: {
                classes: "qtip-light qtip-rounded"
              },
              position: {
                my: "center left",
                at: "center right",
                viewport: e(window)
              }
            }))
          }
          d.on("mouseout", Object.keys(u).length > 1 ? function () {
            l(t.div, t.state.show_histogram, t.state.show_curve)
          } : function () {});
          var v = d[0][0].getBBox();
          p.attr("x", v.x - f).attr("y", v.y - f).attr("height", v.height + 2 * f).attr("width", v.width + 2 * f)
        }), n
      }
    }).call(t, n(90))
  },
  1097: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t, n) {
      var r = [];
      r = r.concat(e.map(function (e) {
        return e.id
      })).sort(g.default);
      var i = {};
      if (n) {
        i = n.filter(function (e) {
          return "SPECIMEN" === e.eventType
        }).reduce(function (e, t) {
          var n = f.find(t.attributes, function (e) {
            return ("SAMPLE_ID" === e.key || "SpecimenReferenceNumber" === e.key || "SPECIMEN_REFERENCE_NUMBER" === e.key) && -1 !== r.indexOf(e.value)
          });
          return n && (e[n.value] = t.startNumberOfDaysSinceDiagnosis), e
        }, {})
      }
      for (var o = ["Primary"], a = [], l = 0; l < e.length; l++) {
        var s = e[l].id,
          u = i[s],
          c = o.indexOf(t[s].DERIVED_NORMALIZED_CASE_TYPE); - 1 === c && (c = o.length);
        var p = r.indexOf(s);
        a = a.concat({
          id: s,
          sampleTypeIndex: c,
          naturalSortIndex: p,
          eventOrdering: u
        })
      }
      a = f.orderBy(a, ["eventOrdering", "sampleTypeIndex", "naturalSortIndex"], ["asc", "asc", "asc"]);
      var d = f.fromPairs(a.map(function (e, t) {
        return [e.id, t]
      }));
      return f.sortBy(e, function (e) {
        return d[e.id]
      })
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
    t.sortSamples = a;
    var s = n(1),
      u = i(s),
      c = n(3),
      f = i(c),
      p = n(1098),
      d = r(p),
      h = n(940),
      m = n(1101),
      y = r(m),
      v = n(920),
      g = r(v),
      b = function () {
        function e(t, n) {
          var r = this;
          o(this, e), this.samples = t, this.sampleIndex = {}, this.sampleLabels = {}, this.clinicalDataLegacyCleanAndDerived = {}, this.sampleColors = {}, this.commonClinicalDataLegacyCleanAndDerived = {}, t.forEach(function (e, t) {
            r.clinicalDataLegacyCleanAndDerived[e.id] = (0, h.cleanAndDerive)(f.fromPairs(e.clinicalData.map(function (e) {
              return [e.clinicalAttributeId, e.value]
            })));
            var n = "black";
            "Primary" === r.clinicalDataLegacyCleanAndDerived[e.id].DERIVED_NORMALIZED_CASE_TYPE ? n = y.default.sampleColorPrimary : "Recurrence" === r.clinicalDataLegacyCleanAndDerived[e.id].DERIVED_NORMALIZED_CASE_TYPE || "Progressed" === r.clinicalDataLegacyCleanAndDerived[e.id].DERIVED_NORMALIZED_CASE_TYPE ? n = y.default.sampleColorRecurrence : "Metastasis" === r.clinicalDataLegacyCleanAndDerived[e.id].DERIVED_NORMALIZED_CASE_TYPE ? n = y.default.sampleColorMetastasis : "cfDNA" === r.clinicalDataLegacyCleanAndDerived[e.id].DERIVED_NORMALIZED_CASE_TYPE ? n = y.default.sampleColorCfdna : "Xenograft" === r.clinicalDataLegacyCleanAndDerived[e.id].DERIVED_NORMALIZED_CASE_TYPE && (n = y.default.sampleColorXenograft), r.sampleColors[e.id] = n
          }), ["CANCER_TYPE", "CANCER_TYPE_DETAILED"].forEach(function (n) {
            e.isSameClinicalAttributeInAllSamples(t, n) && (r.commonClinicalDataLegacyCleanAndDerived[n] = r.clinicalDataLegacyCleanAndDerived[t[0].id][n], t.forEach(function (e) {
              delete r.clinicalDataLegacyCleanAndDerived[e.id][n]
            }))
          }), this.samples = a(t, this.clinicalDataLegacyCleanAndDerived, n), this.samples.forEach(function (e, t) {
            r.sampleIndex[e.id] = t, r.sampleLabels[e.id] = String(t + 1)
          }), this.sampleOrder = f.sortBy(Object.keys(this.sampleIndex), function (e) {
            return r.sampleIndex[e]
          })
        }
        return l(e, [{
          key: "getComponentForSample",
          value: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
              r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              i = f.find(this.samples, function (t) {
                return t.id === e
              });
            return i && u.createElement(d.default, {
              sample: i,
              sampleNumber: this.sampleIndex[i.id] + 1,
              sampleColor: this.sampleColors[i.id],
              fillOpacity: t,
              extraTooltipText: n,
              additionalContent: r
            })
          }
        }, {
          key: "getColorForSample",
          value: function (e) {
            return this.sampleColors[e]
          }
        }, {
          key: "getSampleIdsInOrder",
          value: function () {
            return this.samples.map(function (e) {
              return e.id
            })
          }
        }, {
          key: "getComponentsForSamples",
          value: function () {
            var e = this;
            this.samples.map(function (t) {
              return e.getComponentForSample(t.id)
            })
          }
        }], [{
          key: "isSameClinicalAttributeInAllSamples",
          value: function (e, t) {
            var n = f.uniq(e.map(function (e) {
              var n = e.clinicalData.find(function (e) {
                return e.clinicalAttributeId === t
              });
              return n ? n.value : n
            }));
            return 1 === n.length && n[0]
          }
        }]), e
      }();
    t.default = b
  },
  1098: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      s = n(1),
      u = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(s),
      c = n(176),
      f = n(1099),
      p = n(939),
      d = r(p),
      h = n(173),
      m = r(h),
      y = function (e) {
        function t() {
          return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return a(t, e), l(t, [{
          key: "render",
          value: function () {
            return u.createElement(c.If, {
              condition: !0 === this.props.tooltipEnabled
            }, u.createElement(c.Then, null, this.contentWithTooltip()), u.createElement(c.Else, null, this.mainContent()))
          }
        }, {
          key: "sampleLabelHTML",
          value: function () {
            var e = this.props,
              t = e.sampleNumber,
              n = e.sampleColor,
              r = e.fillOpacity;
            return u.createElement(f.SampleLabelHTML, {
              fillOpacity: r,
              color: n,
              label: t.toString()
            })
          }
        }, {
          key: "tooltipContent",
          value: function () {
            var e = this.props,
              t = e.sample,
              n = e.extraTooltipText;
            return u.createElement("div", {
              style: {
                maxHeight: 400,
                maxWidth: 600,
                overflow: "auto"
              }
            }, u.createElement("h5", {
              style: {
                marginBottom: 1
              }
            }, u.createElement("svg", {
              height: "12",
              width: "12",
              style: {
                marginRight: 5
              }
            }, this.sampleLabelHTML()), t.id), u.createElement("h5", null, n), u.createElement(d.default, {
              showFilter: !1,
              showCopyDownload: !1,
              showTitleBar: !1,
              data: t.clinicalData
            }))
          }
        }, {
          key: "mainContent",
          value: function () {
            var e = this.props.additionalContent,
              t = u.createElement("svg", {
                height: "12",
                width: "12"
              }, this.sampleLabelHTML());
            return e && (t = u.createElement("span", null, t, e)), t
          }
        }, {
          key: "contentWithTooltip",
          value: function () {
            return u.createElement(m.default, {
              placement: "bottomLeft",
              trigger: ["hover", "focus"],
              overlay: this.tooltipContent(),
              arrowContent: u.createElement("div", {
                className: "rc-tooltip-arrow-inner"
              }),
              destroyTooltipOnHide: !1,
              onPopupAlign: h.placeArrowBottomLeft
            }, this.mainContent())
          }
        }]), t
      }(u.Component);
    t.default = y, y.defaultProps = {
      tooltipEnabled: !0
    }
  },
  1099: function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.SampleLabelHTML = void 0;
    var a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      l = n(1),
      s = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(l),
      u = function (e) {
        function t(e) {
          r(this, t);
          var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return n.render = n.render.bind(n), n
        }
        return o(t, e), a(t, [{
          key: "render",
          value: function () {
            var e = this.props,
              t = e.label,
              n = e.color,
              r = e.x,
              i = e.y;
            return s.createElement("g", null, s.createElement("circle", {
              cx: r,
              cy: i,
              fill: n,
              r: 10
            }), s.createElement("text", {
              x: r,
              y: i + 5,
              fill: "white",
              fontSize: 10,
              textAnchor: "middle"
            }, t))
          }
        }]), t
      }(s.Component);
    t.default = u;
    t.SampleLabelHTML = function (e) {
      function t(e) {
        r(this, t);
        var n = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return n.render = n.render.bind(n), n
      }
      return o(t, e), a(t, [{
        key: "render",
        value: function () {
          var e = this.props,
            t = e.label,
            n = e.color,
            r = e.fillOpacity;
          return s.createElement("svg", {
            width: "12",
            height: "12",
            className: "case-label-header"
          }, s.createElement("g", {
            transform: "translate(6,6)"
          }, s.createElement("circle", {
            r: "6",
            fill: n,
            fillOpacity: r
          }), s.createElement("text", {
            y: "4",
            textAnchor: "middle",
            fontSize: "10",
            fill: "white"
          }, t)))
        }
      }]), t
    }(s.Component)
  },
  1100: function (e, t) {
    e.exports = {
      portalWidth: "patientTable-module__portalWidth__10-JD",
      patientTable: "patientTable-module__patientTable__2vI5g"
    }
  },
  1101: function (e, t) {
    e.exports = {
      sampleColorPrimary: "black",
      sampleColorRecurrence: "orange",
      sampleColorMetastasis: "red",
      sampleColorCfdna: "blue",
      sampleColorXenograft: "pink"
    }
  },
  1102: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      s = n(1),
      u = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(s),
      c = n(3),
      f = n(939),
      p = r(f),
      d = n(940),
      h = n(173),
      m = n(1103),
      y = r(m),
      v = n(173),
      g = r(v),
      b = function (e) {
        function t() {
          return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return a(t, e), l(t, [{
          key: "render",
          value: function () {
            return u.createElement("div", {
              className: y.default.patientHeader
            }, this.props.patient && this.getOverlayTriggerPatient(this.props.patient, this.props.studyId, this.props.sampleManager), this.getDarwinUrl(this.props.darwinUrl))
          }
        }, {
          key: "getDarwinUrl",
          value: function (e) {
            if (void 0 !== e && null !== e && "" !== e) {
              var t = n(1104);
              return u.createElement("a", {
                target: "_blank",
                href: e
              }, u.createElement("img", {
                style: {
                  paddingLeft: "5px"
                },
                src: t
              }))
            }
            return null
          }
        }, {
          key: "getPopoverPatient",
          value: function (e) {
            return e && u.createElement("div", {
              key: e.id,
              style: {
                maxHeight: 400,
                maxWidth: 600,
                overflow: "auto"
              }
            }, u.createElement("h5", null, e.id), u.createElement(p.default, {
              showFilter: !1,
              showCopyDownload: !1,
              showTitleBar: !1,
              data: e.clinicalData
            }))
          }
        }, {
          key: "getOverlayTriggerPatient",
          value: function (e, t, n) {
            var r = this,
              i = (0, c.fromPairs)(e.clinicalData.map(function (e) {
                return [e.clinicalAttributeId, e.value]
              }));
            return n && Object.keys(n.commonClinicalDataLegacyCleanAndDerived).forEach(function (e) {
              i[e] = n.commonClinicalDataLegacyCleanAndDerived[e]
            }), e && u.createElement(g.default, {
              placement: "bottomLeft",
              trigger: ["hover", "focus"],
              overlay: this.getPopoverPatient(e),
              arrowContent: u.createElement("div", {
                className: "rc-tooltip-arrow-inner"
              }),
              destroyTooltipOnHide: !0,
              onPopupAlign: h.placeArrowBottomLeft
            }, u.createElement("span", {
              className: "clinical-spans",
              id: "patient-attributes"
            }, u.createElement("a", {
              href: "javascript:void(0)",
              onClick: function () {
                return r.props.handlePatientClick(e.id)
              }
            }, e.id), (0, d.getSpanElements)(i, t)))
          }
        }]), t
      }(u.Component);
    t.default = b
  },
  1103: function (e, t) {
    e.exports = {
      portalWidth: "styles-module__portalWidth__1zg2N"
    }
  },
  1104: function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAPCAYAAABJGff8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODIyQUM2NUFEMzlENThGQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNTdEMDNGMDA3NjkxMUU3OUY0Njk1MDUzRjNGNjA0OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNTdEMDNFRjA3NjkxMUU3OUY0Njk1MDUzRjNGNjA0OSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDE4MDExNzQwNzIwNjgxMTgyMkFDNjVBRDM5RDU4RkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTgyMkFDNjVBRDM5RDU4RkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7l//4pAAAGnElEQVR42txWa1CTZxZ+voSE3CDhEggkkJBwsYggysUil+paLwWxKq4zXmqddddVO+66WtfdtrPtbmfbbavSdmq17dRS24qttxZULlNsV60GgkVAECGFCBEIhly+EEhC8u4HtGntzG4721mns+fneed73vOc93nO+ShCCP5fgvXvDtweb+COVz4k87fvI+ebu+85432HTpOMkq3ky5t6908mw+WwXReavsL56nrYna57SuRqyy1SWnYKjSdex6mjpzk/9ruA/3SolEeiSx0D4vPdUzKzZsRSczKUxMpfjTWb1v7zvyJzqd1I9r1/DnGxUdi+at46js8D2u6AJEg4ed5nG1tUXttQ1W0cBu10Ij1JiV8tzUkO5qB9iB7NfK1SV587TY4F6WrqlU8ayK0BE2aoZGjuMmJ+dgoKZ6upCZxzui5SW9+G6EgJNhfOkQbxuHda+yzXKus7UtPUMrDdYyh+aBne2DgMSb82/0yXilzup/HHklxZu/727dKPaljsgACsfygfC1NjqW/qp74ZAO9Wa8nv9h+Hc9QFt3MMsapoZCWrcaX5JvbvWIWS/DRq4Z53SG3NZSg10XC7PRhm5JeTokbd/i1Uk/62NX3dc+JlD8xARJgYbx4+h8RkBbZuWIZdL74PtTwUV8ueFAo5LOfi3QdJdXUDFIlKfH7g93vV0uBdW0qPk4MHK/DyC1th6B3AlVsufMI+CY/JhH1zHseLh8+i5MFMVF9uhYdxh4TPhdPtxpMbFuHx1fMov2ccrnHxs29Xwmq14OG8VFw6/CesmZ+G+qYb6DP2ocdomiT82NJZOPHyNrQd2SNpO/qUamPh/ThfewnHPmsmUdLQ4kRVGLTXOnDmYgse/WU+/rZpKbYVZbJ/MTsBN1uuQ987aHCN+zi9DF5efjoUUeEYosd+O+mT1k5AFIDpygjs3baMynB04S1jCGTPv3NELpUgVCyAtrkLvy7MREvZnveK7p8OF21FWZUORqtzuV9mrYbBYR+Li+lJCdi9sWhktkYmykmJQ495hIzUs5CgUU2SKZ6bSjV2Gkcrvmi1cgIYXxIfQlSxuGOxw+PxTOPyhAjj8nBg91rkT4/xP3/qNBUuXjegw2gO93h9dseYB394uADHahpQ8alWGBvywHIv4SA7IxXxaXEG1JaTbd1vYdesv+Jzi2R9hHAIY+PjKMqejb3bV03iblpZUHJO28qTivngsiizn4zFRrMG7ligiZAgJlS43m+iCeP7COKjwpqHHWMzNu3/uLlRdx1OBlghl2LUYgY17kawSMAIlsKwxYYA4kGUmH+XaeWhQrDZLPSZRzBoc/JMwxZEBwUgMoiH/js21Og6Tnb0mbA4IxFKQDXY1EQiM7KRJQvE0dNnoZKFwNnRAUt6nB+Tuc5rZFQjYo9DJODp/DILDg4m8WolqEAB9EP0cf904HAhEvIxZHOkvlT+afOpqgtYXTwXxjN/F375xg5q5ZI8OMYJAnlcEK8vSiDgI1ETi1CJ6LHvklmck1YVr5RD19aJz3TtKC7IxJKs+yhNTBi6TTSu6k0QMh5YtTB7qocyBQKdg7jea4aPqTBGHgHRtGTEKaK/XR0s1miCJh5SmRwWu2O5n8zcpGiWUhqEa41NOFbXOJk7caGVnKnTwjlC44ahH7cGhoCuToQIeeACToPJ/tLJWi08ThoulwcOx8jm7u4ejDMDxUt8vO+SSYoOWaIJ5+GD8kpUnm9AEHdqiIoFzBjUG1B3UYdBvR7BDKGJCFz5G1UFuQ+5w1qUbi5WhUqlDD6N9i6DH1Ms5Je5XW7QNgvTCF7dXUtzxfwMsMKkOHr2C8StfoY88WYFMjNngnD4UESEYH1hAYTp6ThwrAYLdhwk654r3ykQS0BxhfCBkTGLRXvBAT3mg89LFN/fAWnJCeBGyMHhByFjZuLUnfOynpaEhqPtKyNyCuYiNy1eNjlZKy73bOyMRrxvEIILh3oM/YwlrC4oY+V+vBt9pp399CjszH1WemTnXXtmTUEK+3bvIm/VlRZYbTb8Y8sKxGuUh/782snNirBg20y1TPKXDQ+SIxV1sNvM2L5mCXJTVO/tevWjdWFMh8Ui/t6leSmHEpQyCAI5V75PZmG6hphXFFB22oGC5JieiVx4EK+0KEvzdDvzamsLcyEKZA9O5K02Kx7JTYAqJAADPWYIVCOYt2Am8r5uwpQWvchOiGQakIQYqWT3XXvm5xpe5s3ZTOk/6d9sKsgEDvt/Vin5YewfS2Qi/iXAACcPrejS7vy6AAAAAElFTkSuQmCC"
  },
  1105: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e) {
      return Q(this, void 0, void 0, regeneratorRuntime.mark(function t() {
        var n, r;
        return regeneratorRuntime.wrap(function (t) {
          for (;;) switch (t.prev = t.next) {
            case 0:
              if (!1 !== /TCGA/.test(e)) {
                t.next = 4;
                break
              }
              return t.abrupt("return", !1);
            case 4:
              return t.next = 6, _.default.get((0, A.getTissueImageCheckUrl)(e));
            case 6:
              return n = t.sent, r = n.text.match(/<data total_count='([0-9]+)'>/), t.abrupt("return", (!!r && parseInt(r[1], 10)) > 0);
            case 9:
            case "end":
              return t.stop()
          }
        }, t, this)
      }))
    }

    function a(e, t) {
      if (t.total_count > 0) {
        var n = new RegExp("^" + e),
          r = f.filter(t.items, function (e) {
            return n.test(e.name)
          });
        return f.map(r, function (e) {
          return {
            url: e.url,
            name: e.name
          }
        })
      }
      return []
    }

    function l(e, t, n, r, i) {
      return {
        patient: {
          id: e,
          clinicalData: r
        },
        samples: (0, G.groupBySampleId)(n, i)
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.PatientViewPageStore = void 0;
    var s = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      };
    t.checkForTissueImage = o, t.handlePathologyReportCheckResponse = a;
    var c = n(3),
      f = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(c),
      p = n(17),
      d = r(p),
      h = n(65),
      m = r(h),
      y = n(13),
      v = n(91),
      g = n(66),
      b = n(1106),
      w = r(b),
      E = n(18),
      _ = r(E),
      C = n(301),
      T = r(C),
      A = n(25),
      k = n(298),
      O = r(k),
      I = n(185),
      x = r(I),
      S = n(299),
      M = r(S),
      P = n(1108),
      D = r(P),
      j = n(1109),
      N = r(j),
      R = n(300),
      L = r(R),
      F = n(184),
      V = r(F),
      H = n(64),
      B = r(H),
      G = n(82),
      z = n(187),
      U = n(123),
      q = n(305),
      W = function (e, t, n, r) {
        var i, o = arguments.length,
          a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : u(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
        else
          for (var l = e.length - 1; l >= 0; l--)(i = e[l]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return o > 3 && a && Object.defineProperty(t, n, a), a
      },
      Q = function (e, t, n, r) {
        return new(n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              s(r.next(e))
            } catch (e) {
              o(e)
            }
          }

          function l(e) {
            try {
              s(r.throw(e))
            } catch (e) {
              o(e)
            }
          }

          function s(e) {
            e.done ? i(e.value) : new n(function (t) {
              t(e.value)
            }).then(a, l)
          }
          s((r = r.apply(e, t || [])).next())
        })
      },
      K = t.PatientViewPageStore = function () {
        function e() {
          var t = this;
          i(this, e), this.activeTabId = "", this._patientId = "", this.urlValidationError = null, this.ajaxErrors = [], this.studyId = "", this._sampleId = "", this.mutationMolecularProfileId = (0, v.remoteData)({
            await: function () {
              return [t.molecularProfilesInStudy]
            },
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.abrupt("return", (0, G.findMutationMolecularProfileId)(this.molecularProfilesInStudy, this.studyId));
                    case 1:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }))
            }
          }), this.uncalledMutationMolecularProfileId = (0, v.remoteData)({
            await: function () {
              return [t.molecularProfilesInStudy]
            },
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.abrupt("return", (0, G.findUncalledMutationMolecularProfileId)(this.molecularProfilesInStudy, this.studyId));
                    case 1:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }))
            }
          }), this.patientIdsInCohort = [], this.derivedPatientId = (0, v.remoteData)({
            await: function () {
              return [t.samples]
            },
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                var t, n, r, i, o, a;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      t = !0, n = !1, r = void 0, e.prev = 3, i = this.samples.result[Symbol.iterator]();
                    case 5:
                      if (t = (o = i.next()).done) {
                        e.next = 11;
                        break
                      }
                      return a = o.value, e.abrupt("return", a.patientId);
                    case 8:
                      t = !0, e.next = 5;
                      break;
                    case 11:
                      e.next = 17;
                      break;
                    case 13:
                      e.prev = 13, e.t0 = e.catch(3), n = !0, r = e.t0;
                    case 17:
                      e.prev = 17, e.prev = 18, !t && i.return && i.return();
                    case 20:
                      if (e.prev = 20, !n) {
                        e.next = 23;
                        break
                      }
                      throw r;
                    case 23:
                      return e.finish(20);
                    case 24:
                      return e.finish(17);
                    case 25:
                      return e.abrupt("return", "");
                    case 26:
                    case "end":
                      return e.stop()
                  }
                }, e, this, [
                  [3, 13, 17, 25],
                  [18, , 20, 24]
                ])
              }))
            },
            default: ""
          }), this.clinicalDataPatient = (0, v.remoteData)({
            await: function () {
              return "patient" === t.pageMode ? [] : [t.derivedPatientId]
            },
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.abrupt("return", (0, G.fetchClinicalDataForPatient)(this.studyId, this.patientId));
                    case 1:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }))
            },
            default: []
          }), this.samples = (0, v.remoteData)(function () {
            return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return e.abrupt("return", (0, G.fetchSamplesForPatient)(this.studyId, this._patientId, this.sampleId));
                  case 1:
                  case "end":
                    return e.stop()
                }
              }, e, this)
            }))
          }, []), this.samplesWithoutCancerTypeClinicalData = (0, v.remoteData)({
            await: function () {
              return [t.samples, t.clinicalDataForSamples]
            },
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.abrupt("return", (0, G.findSamplesWithoutCancerTypeClinicalData)(this.samples, this.clinicalDataForSamples));
                    case 1:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }))
            }
          }, []), this.studiesForSamplesWithoutCancerTypeClinicalData = (0, v.remoteData)({
            await: function () {
              return [t.samplesWithoutCancerTypeClinicalData]
            },
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.abrupt("return", (0, G.fetchStudiesForSamplesWithoutCancerTypeClinicalData)(this.samplesWithoutCancerTypeClinicalData));
                    case 1:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }))
            }
          }, []), this.studies = (0, v.remoteData)({
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.next = 2, d.default.getStudyUsingGET({
                        studyId: this.studyId
                      });
                    case 2:
                      return e.t0 = e.sent, e.abrupt("return", [e.t0]);
                    case 4:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }))
            }
          }, []), this.cnaSegments = (0, v.remoteData)({
            await: function () {
              return [t.samples]
            },
            invoke: function () {
              return (0, G.fetchCopyNumberSegments)(t.studyId, t.sampleIds)
            }
          }, []), this.pathologyReport = (0, v.remoteData)({
            await: function () {
              return [t.derivedPatientId]
            },
            invoke: function () {
              if (t.studyId.toLowerCase().indexOf("tcga") > -1) {
                var e = [];
                return function t(n, r) {
                  return _.default.get("https://raw.githubusercontent.com/inodb/datahub/a0d36d77b242e32cda3175127de73805b028f595/tcga/pathology_reports/symlink_by_patient" + "/" + n + "." + r).then(function (i) {
                    var o = i.text.split("/")[1];
                    return e.push({
                      name: "" + o,
                      url: "https://github.com/inodb/datahub/raw/a0d36d77b242e32cda3175127de73805b028f595/tcga/pathology_reports" + "/" + o
                    }), t(n, r + 1)
                  }, function () {
                    return e
                  })
                }(t.patientId, 0)
              }
              return []
            },
            onError: function (e) {}
          }, []), this.cosmicData = (0, v.remoteData)({
            await: function () {
              return [t.mutationData, t.uncalledMutationData]
            },
            invoke: function () {
              return (0, G.fetchCosmicData)(t.mutationData, t.uncalledMutationData)
            }
          }), this.mutSigData = (0, v.remoteData)({
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.abrupt("return", (0, G.fetchMutSigData)(this.studyId));
                    case 1:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }))
            }
          }), this.hotspotData = (0, v.remoteData)({
            await: function () {
              return [t.mutationData, t.uncalledMutationData]
            },
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.abrupt("return", (0, z.fetchHotspotsData)(this.mutationData, this.uncalledMutationData));
                    case 1:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }))
            },
            onError: function () {}
          }), this.MDAndersonHeatMapAvailable = (0, v.remoteData)({
            await: function () {
              return [t.derivedPatientId]
            },
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                var t, n, r;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.next = 2, _.default.get("//bioinformatics.mdanderson.org/dyce?app=chmdb&command=participant2maps&participant=" + this.patientId);
                    case 2:
                      return t = e.sent, n = JSON.parse(t.text), r = JSON.parse(n.fileContent), e.abrupt("return", r.length > 0);
                    case 6:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }))
            },
            onError: function () {}
          }, !1), this.clinicalDataForSamples = (0, v.remoteData)({
            await: function () {
              return [t.samples]
            },
            invoke: function () {
              var e = t.sampleIds.map(function (e) {
                  return {
                    entityId: e,
                    studyId: t.studyId
                  }
                }),
                n = {
                  identifiers: e
                };
              return (0, G.fetchClinicalData)(n)
            }
          }, []), this.clinicalDataGroupedBySample = (0, v.remoteData)({
            await: function () {
              return [t.clinicalDataForSamples]
            },
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.abrupt("return", (0, G.groupBySampleId)(this.sampleIds, this.clinicalDataForSamples.result));
                    case 1:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }))
            }
          }, []), this.studyMetaData = (0, v.remoteData)({
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.abrupt("return", d.default.getStudyUsingGET({
                        studyId: this.studyId
                      }));
                    case 1:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }))
            }
          }), this.patientViewData = (0, v.remoteData)({
            await: function () {
              return [t.clinicalDataPatient, t.clinicalDataForSamples]
            },
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.abrupt("return", l(this.patientId, this.studyId, this.sampleIds, this.clinicalDataPatient.result, this.clinicalDataForSamples.result));
                    case 1:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }))
            }
          }, {}), this.sequencedSampleIdsInStudy = (0, v.remoteData)({
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.t0 = U.stringListToSet, e.next = 3, d.default.getAllSampleIdsInSampleListUsingGET({
                        sampleListId: this.studyId + "_sequenced"
                      });
                    case 3:
                      return e.t1 = e.sent, e.abrupt("return", (0, e.t0)(e.t1));
                    case 5:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }))
            },
            onError: function (e) {}
          }, {}), this.molecularProfilesInStudy = (0, v.remoteData)(function () {
            return d.default.getAllMolecularProfilesInStudyUsingGET({
              studyId: t.studyId
            })
          }, []), this.molecularProfileIdToMolecularProfile = (0, v.remoteData)({
            await: function () {
              return [t.molecularProfilesInStudy]
            },
            invoke: function () {
              return Promise.resolve(t.molecularProfilesInStudy.result.reduce(function (e, t) {
                return e[t.molecularProfileId] = t, e
              }, {}))
            }
          }, {}), this.mrnaRankMolecularProfileId = (0, v.remoteData)({
            await: function () {
              return [t.molecularProfilesInStudy]
            },
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.abrupt("return", (0, G.findMrnaRankMolecularProfileId)(this.molecularProfilesInStudy));
                    case 1:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }))
            }
          }, null), this.discreteCNAData = (0, v.remoteData)({
            await: function () {
              return [t.molecularProfileIdDiscrete, t.samples]
            },
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return t = {
                        sampleIds: this.sampleIds
                      }, e.abrupt("return", (0, G.fetchDiscreteCNAData)(t, this.molecularProfileIdDiscrete));
                    case 2:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }))
            },
            onResult: function (e) {
              t.discreteCNACache.addData(e)
            }
          }, []), this.gisticData = (0, v.remoteData)({
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.abrupt("return", (0, G.fetchGisticData)(this.studyId));
                    case 1:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }))
            }
          }, {}), this.clinicalEvents = (0, v.remoteData)({
            await: function () {
              return [t.patientViewData]
            },
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.next = 2, d.default.getAllClinicalEventsOfPatientInStudyUsingGET({
                        studyId: this.studyId,
                        patientId: this.patientId,
                        projection: "DETAILED"
                      });
                    case 2:
                      return e.abrupt("return", e.sent);
                    case 3:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }))
            }
          }, []), this.molecularProfileIdDiscrete = (0, v.remoteData)({
            await: function () {
              return [t.molecularProfilesInStudy]
            },
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.abrupt("return", (0, G.findMolecularProfileIdDiscrete)(this.molecularProfilesInStudy));
                    case 1:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }))
            }
          }), this.studyToMolecularProfileDiscrete = (0, v.remoteData)({
            await: function () {
              return [t.molecularProfileIdDiscrete]
            },
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (t = {}, !this.molecularProfileIdDiscrete.result) {
                        e.next = 5;
                        break
                      }
                      return e.next = 4, d.default.getMolecularProfileUsingGET({
                        molecularProfileId: this.molecularProfileIdDiscrete.result
                      });
                    case 4:
                      t[this.studyId] = e.sent;
                    case 5:
                      return e.abrupt("return", t);
                    case 6:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }))
            }
          }, {}), this.darwinUrl = (0, v.remoteData)({
            await: function () {
              return [t.derivedPatientId]
            },
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                var t, n;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (!0 !== (t = B.default.enableDarwin)) {
                        e.next = 8;
                        break
                      }
                      return e.next = 4, _.default.get((0, A.getDarwinUrl)(this.sampleIds, this.patientId));
                    case 4:
                      return n = e.sent, e.abrupt("return", n.text);
                    case 8:
                      return e.abrupt("return", "");
                    case 9:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }))
            },
            onError: function () {}
          }), this.hasTissueImageIFrameUrl = (0, v.remoteData)({
            await: function () {
              return [t.derivedPatientId]
            },
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.abrupt("return", o(this.patientId));
                    case 1:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }))
            },
            onError: function () {}
          }, !1), this.uncalledMutationData = (0, v.remoteData)({
            await: function () {
              return [t.samples, t.uncalledMutationMolecularProfileId]
            },
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return t = {
                        sampleIds: this.samples.result.map(function (e) {
                          return e.sampleId
                        })
                      }, e.abrupt("return", (0, G.fetchMutationData)(t, this.uncalledMutationMolecularProfileId.result));
                    case 2:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }))
            }
          }, []), this.mutationData = (0, v.remoteData)({
            await: function () {
              return [t.samples, t.mutationMolecularProfileId]
            },
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                var t;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return t = {
                        sampleIds: this.sampleIds
                      }, e.abrupt("return", (0, G.fetchMutationData)(t, this.mutationMolecularProfileId.result));
                    case 2:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }))
            }
          }, []), this.oncoKbAnnotatedGenes = (0, v.remoteData)({
            invoke: function () {
              return (0, G.fetchOncoKbAnnotatedGenesSuppressErrors)()
            }
          }, {}), this.oncoKbData = (0, v.remoteData)({
            await: function () {
              return [t.oncoKbAnnotatedGenes, t.mutationData, t.uncalledMutationData, t.clinicalDataForSamples, t.studiesForSamplesWithoutCancerTypeClinicalData, t.studies]
            },
            invoke: function () {
              return (0, G.fetchOncoKbData)(t.uniqueSampleKeyToTumorType, t.oncoKbAnnotatedGenes.result || {}, t.mutationData, t.uncalledMutationData)
            },
            onError: function (e) {}
          }, G.ONCOKB_DEFAULT), this.civicGenes = (0, v.remoteData)({
            await: function () {
              return [t.mutationData, t.uncalledMutationData, t.clinicalDataForSamples]
            },
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.abrupt("return", B.default.showCivic ? (0, G.fetchCivicGenes)(this.mutationData, this.uncalledMutationData) : {});
                    case 1:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }))
            },
            onError: function (e) {}
          }, void 0), this.civicVariants = (0, v.remoteData)({
            await: function () {
              return [t.civicGenes, t.mutationData, t.uncalledMutationData]
            },
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (!B.default.showCivic || !this.civicGenes.result) {
                        e.next = 4;
                        break
                      }
                      return e.abrupt("return", (0, G.fetchCivicVariants)(this.civicGenes.result, this.mutationData, this.uncalledMutationData));
                    case 4:
                      return e.abrupt("return", {});
                    case 5:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }))
            },
            onError: function (e) {}
          }, void 0), this.cnaOncoKbData = (0, v.remoteData)({
            await: function () {
              return [t.oncoKbAnnotatedGenes, t.discreteCNAData, t.clinicalDataForSamples, t.studies]
            },
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.abrupt("return", (0, G.fetchCnaOncoKbData)(this.uniqueSampleKeyToTumorType, this.oncoKbAnnotatedGenes.result || {}, this.discreteCNAData));
                    case 1:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }))
            },
            onError: function (e) {}
          }, G.ONCOKB_DEFAULT), this.cnaCivicGenes = (0, v.remoteData)({
            await: function () {
              return [t.discreteCNAData, t.clinicalDataForSamples]
            },
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.abrupt("return", B.default.showCivic ? (0, G.fetchCnaCivicGenes)(this.discreteCNAData) : {});
                    case 1:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }))
            },
            onError: function (e) {}
          }, void 0), this.cnaCivicVariants = (0, v.remoteData)({
            await: function () {
              return [t.civicGenes, t.mutationData]
            },
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if ("complete" != this.cnaCivicGenes.status) {
                        e.next = 2;
                        break
                      }
                      return e.abrupt("return", (0, G.fetchCivicVariants)(this.cnaCivicGenes.result));
                    case 2:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }))
            },
            onError: function (e) {}
          }, void 0), this.copyNumberCountData = (0, v.remoteData)({
            await: function () {
              return [t.discreteCNAData]
            },
            invoke: function () {
              return Q(t, void 0, void 0, regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.abrupt("return", (0, G.fetchCopyNumberData)(this.discreteCNAData, this.molecularProfileIdDiscrete));
                    case 1:
                    case "end":
                      return e.stop()
                  }
                }, e, this)
              }))
            }
          }, []), this.indexedHotspotData = (0, v.remoteData)({
            await: function () {
              return [t.hotspotData]
            },
            invoke: function () {
              return Promise.resolve((0, z.indexHotspotsData)(t.hotspotData))
            }
          }), (0, g.labelMobxPromises)(this), this.internalClient = m.default, (0, v.addErrorHandler)(function (e) {
            t.ajaxErrors.push(e)
          })
        }
        return s(e, [{
          key: "setSampleId",
          value: function (e) {
            e && (this._patientId = ""), this._sampleId = e
          }
        }, {
          key: "setPatientId",
          value: function (e) {
            e && (this._sampleId = ""), this._patientId = e
          }
        }, {
          key: "setActiveTabId",
          value: function (e) {
            this.activeTabId = e
          }
        }, {
          key: "clearErrors",
          value: function () {
            this.ajaxErrors = []
          }
        }, {
          key: "patientId",
          get: function () {
            return this._patientId ? this._patientId : this.derivedPatientId.result
          }
        }, {
          key: "sampleId",
          get: function () {
            return this._sampleId
          }
        }, {
          key: "pageTitle",
          get: function () {
            return "patient" === this.pageMode ? "Patient: " + this.patientId : "Sample: " + this.sampleId
          }
        }, {
          key: "pageMode",
          get: function () {
            return this._sampleId ? "sample" : "patient"
          }
        }, {
          key: "caseId",
          get: function () {
            return "sample" === this.pageMode ? this.sampleId : this.patientId
          }
        }, {
          key: "myCancerGenomeData",
          get: function () {
            return (0, G.fetchMyCancerGenomeData)()
          }
        }, {
          key: "studyToCancerType",
          get: function () {
            return (0, G.makeStudyToCancerTypeMap)(this.studies.result)
          }
        }, {
          key: "mergedDiscreteCNAData",
          get: function () {
            return (0, G.mergeDiscreteCNAData)(this.discreteCNAData)
          }
        }, {
          key: "sampleIds",
          get: function () {
            return this.samples.result ? this.samples.result.map(function (e) {
              return e.sampleId
            }) : []
          }
        }, {
          key: "mergedMutationData",
          get: function () {
            return (0, G.mergeMutations)(this.mutationData)
          }
        }, {
          key: "mergedMutationDataIncludingUncalled",
          get: function () {
            return (0, G.mergeMutationsIncludingUncalled)(this.mutationData, this.uncalledMutationData)
          }
        }, {
          key: "uniqueSampleKeyToTumorType",
          get: function () {
            return (0, G.generateUniqueSampleKeyToTumorTypeMap)(this.clinicalDataForSamples, this.studiesForSamplesWithoutCancerTypeClinicalData, this.samplesWithoutCancerTypeClinicalData)
          }
        }, {
          key: "mrnaExprRankCache",
          get: function () {
            return new w.default(this.mrnaRankMolecularProfileId.result)
          }
        }, {
          key: "variantCountCache",
          get: function () {
            return new D.default(this.mutationMolecularProfileId.result)
          }
        }, {
          key: "discreteCNACache",
          get: function () {
            return new T.default(this.studyToMolecularProfileDiscrete.result)
          }
        }, {
          key: "oncoKbEvidenceCache",
          get: function () {
            return new O.default
          }
        }, {
          key: "genomeNexusEnrichmentCache",
          get: function () {
            return new x.default
          }
        }, {
          key: "pubMedCache",
          get: function () {
            return new M.default
          }
        }, {
          key: "copyNumberCountCache",
          get: function () {
            return new N.default(this.molecularProfileIdDiscrete.result)
          }
        }, {
          key: "cancerTypeCache",
          get: function () {
            return new L.default
          }
        }, {
          key: "mutationCountCache",
          get: function () {
            return new V.default
          }
        }, {
          key: "downloadDataFetcher",
          get: function () {
            var e = this;
            return new q.MutationTableDownloadDataFetcher(this.mutationData, function () {
              return e.genomeNexusEnrichmentCache
            })
          }
        }]), e
      }();
    W([y.observable], K.prototype, "activeTabId", void 0), W([y.observable], K.prototype, "_patientId", void 0), W([y.computed], K.prototype, "patientId", null), W([y.observable], K.prototype, "urlValidationError", void 0), W([y.observable], K.prototype, "ajaxErrors", void 0), W([y.observable], K.prototype, "studyId", void 0), W([y.observable], K.prototype, "_sampleId", void 0), W([y.computed], K.prototype, "sampleId", null), W([y.computed], K.prototype, "pageTitle", null), W([y.computed], K.prototype, "pageMode", null), W([y.computed], K.prototype, "caseId", null), W([y.observable], K.prototype, "patientIdsInCohort", void 0), W([y.computed], K.prototype, "myCancerGenomeData", null), W([y.computed], K.prototype, "studyToCancerType", null), W([y.computed], K.prototype, "mergedDiscreteCNAData", null), W([y.computed], K.prototype, "sampleIds", null), W([y.computed], K.prototype, "mergedMutationData", null), W([y.computed], K.prototype, "mergedMutationDataIncludingUncalled", null), W([y.computed], K.prototype, "uniqueSampleKeyToTumorType", null), W([(0, y.action)("SetSampleId")], K.prototype, "setSampleId", null), W([(0, y.action)("SetPatientId")], K.prototype, "setPatientId", null), W([g.cached], K.prototype, "mrnaExprRankCache", null), W([g.cached], K.prototype, "variantCountCache", null), W([g.cached], K.prototype, "discreteCNACache", null), W([g.cached], K.prototype, "oncoKbEvidenceCache", null), W([g.cached], K.prototype, "genomeNexusEnrichmentCache", null), W([g.cached], K.prototype, "pubMedCache", null), W([g.cached], K.prototype, "copyNumberCountCache", null), W([g.cached], K.prototype, "cancerTypeCache", null), W([g.cached], K.prototype, "mutationCountCache", null), W([g.cached], K.prototype, "downloadDataFetcher", null), W([y.action], K.prototype, "setActiveTabId", null), W([y.action], K.prototype, "clearErrors", null)
  },
  1106: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function l(e, t) {
      return h(this, void 0, void 0, regeneratorRuntime.mark(function n() {
        var r, i, o, a, l, s, c, f;
        return regeneratorRuntime.wrap(function (n) {
          for (;;) switch (n.prev = n.next) {
            case 0:
              for (n.prev = 0, r = {}, i = !0, o = !1, a = void 0, n.prev = 5, l = e[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) c = s.value, r[c.sampleId] = r[c.sampleId] || [], r[c.sampleId].push(c.entrezGeneId);
              n.next = 13;
              break;
            case 9:
              n.prev = 9, n.t0 = n.catch(5), o = !0, a = n.t0;
            case 13:
              n.prev = 13, n.prev = 14, !i && l.return && l.return();
            case 16:
              if (n.prev = 16, !o) {
                n.next = 19;
                break
              }
              throw a;
            case 19:
              return n.finish(16);
            case 20:
              return n.finish(13);
            case 21:
              return n.next = 23, Promise.all(Object.keys(r).map(function (e) {
                return null === t ? Promise.reject("No molecular profile id given.") : d.default.fetchMrnaPercentileUsingPOST({
                  molecularProfileId: t,
                  sampleId: e,
                  entrezGeneIds: r[e]
                })
              }));
            case 23:
              return f = n.sent, n.abrupt("return", u.flatten(f));
            case 27:
              throw n.prev = 27, n.t1 = n.catch(0), n.t1;
            case 30:
            case "end":
              return n.stop()
          }
        }, n, this, [
          [0, 27],
          [5, 9, 13, 21],
          [14, , 16, 20]
        ])
      }))
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var s = n(3),
      u = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(s),
      c = n(1107),
      f = r(c),
      p = n(65),
      d = r(p),
      h = function (e, t, n, r) {
        return new(n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              s(r.next(e))
            } catch (e) {
              o(e)
            }
          }

          function l(e) {
            try {
              s(r.throw(e))
            } catch (e) {
              o(e)
            }
          }

          function s(e) {
            e.done ? i(e.value) : new n(function (t) {
              t(e.value)
            }).then(a, l)
          }
          s((r = r.apply(e, t || [])).next())
        })
      },
      m = function (e) {
        function t(e) {
          return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, l, e))
        }
        return a(t, e), t
      }(f.default);
    t.default = m
  },
  1107: function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var a = n(28),
      l = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(a),
      s = function (e) {
        function t(e) {
          var n;
          r(this, t);
          for (var o = arguments.length, a = Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++) a[l - 1] = arguments[l];
          return i(this, (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(n, [this, function (e) {
            return e.sampleId + "," + e.entrezGeneId
          }, function (e) {
            return e.sampleId + "," + e.entrezGeneId
          }, e].concat(a)))
        }
        return o(t, e), t
      }(l.default);
    t.default = s
  },
  1108: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function l(e) {
      return e.keyword ? e.entrezGeneId + "~" + e.keyword : e.entrezGeneId + ""
    }

    function s(e, t) {
      return t ? e.length > 0 ? p.default.fetchVariantCountsUsingPOST({
        molecularProfileId: t,
        variantCountIdentifiers: e
      }) : Promise.resolve([]) : Promise.reject("No mutation molecular profile id given")
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var u = n(28),
      c = r(u),
      f = n(65),
      p = r(f),
      d = function (e) {
        function t(e) {
          return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, l, l, s, e))
        }
        return a(t, e), t
      }(c.default);
    t.default = d
  },
  1109: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function l(e) {
      return e.entrezGeneId + "~" + e.alteration
    }

    function s(e, t) {
      return t ? e.length ? p.default.fetchCopyNumberCountsUsingPOST({
        molecularProfileId: t,
        copyNumberCountIdentifiers: e
      }) : Promise.resolve([]) : Promise.reject("No discrete CNA molecular profile id given")
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var u = n(28),
      c = r(u),
      f = n(17),
      p = r(f),
      d = function (e) {
        function t(e) {
          return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, l, l, s, e))
        }
        return a(t, e), t
      }(c.default);
    t.default = d
  },
  1110: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
      return Array.from(e)
    }

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function l(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var s = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      u = n(1),
      c = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(u),
      f = n(1111),
      p = r(f),
      d = n(178),
      h = r(d),
      m = n(1112),
      y = r(m),
      v = n(181),
      g = function (e) {
        function t() {
          return o(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return l(t, e), t
      }(h.default),
      b = function (e) {
        function t() {
          return o(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return l(t, e), s(t, [{
          key: "render",
          value: function () {
            var e = (0, p.default)(this.props.samples),
              t = this.prepareData(e),
              n = [{
                id: "attribute"
              }].concat(i(e.columns)).map(function (e) {
                return {
                  name: e.id,
                  render: function (t) {
                    return c.createElement("span", null, t[e.id])
                  },
                  download: function (t) {
                    return "" + t[e.id]
                  },
                  filter: function (t, n, r) {
                    return t[e.id].toString().toUpperCase().indexOf(r) > -1
                  }
                }
              });
            return n[0].sortBy = function (e) {
              return e.attribute
            }, c.createElement(g, {
              columns: n,
              data: t,
              className: y.default.sampleTable,
              showPagination: !1,
              initialItemsPerPage: v.SHOW_ALL_PAGE_SIZE,
              showColumnVisibility: !1,
              initialSortColumn: "attribute",
              initialSortDirection: "asc"
            })
          }
        }, {
          key: "prepareData",
          value: function (e) {
            var t = [];
            for (var n in e.items) ! function (n) {
              var r = e.items[n],
                i = {
                  attribute: r.clinicalAttribute.displayName
                };
              e.columns.map(function (e) {
                e.id in r ? i[e.id] = r[e.id] : i[e.id] = "n/a"
              }), t.push(i)
            }(n);
            return t
          }
        }]), t
      }(c.Component);
    t.default = b
  },
  1111: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = function (e) {
      var t = {
        columns: [],
        items: {}
      };
      return e && e.forEach(function (e) {
        var n = e.id;
        t.columns.push({
          id: n
        }), e.clinicalData.forEach(function (e) {
          t.items[e.clinicalAttributeId] = t.items[e.clinicalAttributeId] || {}, t.items[e.clinicalAttributeId][n] = e.value.toString(), t.items[e.clinicalAttributeId].clinicalAttribute = e.clinicalAttribute, t.items[e.clinicalAttributeId].id = e.clinicalAttributeId
        })
      }), t
    }
  },
  1112: function (e, t) {
    e.exports = {
      portalWidth: "sampleTable-module__portalWidth__2sn4E",
      sampleTable: "sampleTable-module__sampleTable__37lEE"
    }
  },
  1113: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function l(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var s = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      c = n(1),
      f = i(c),
      p = n(33),
      d = n(3),
      h = i(d),
      m = n(178),
      y = r(m),
      v = n(921),
      g = r(v),
      b = n(1114),
      w = r(b),
      E = n(1115),
      _ = r(E),
      C = n(1116),
      T = r(C),
      A = n(1060),
      k = r(A),
      O = function (e, t, n, r) {
        var i, o = arguments.length,
          a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : u(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
        else
          for (var l = e.length - 1; l >= 0; l--)(i = e[l]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return o > 3 && a && Object.defineProperty(t, n, a), a
      },
      I = function (e) {
        function t() {
          return o(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return l(t, e), t
      }(y.default),
      x = function (e) {
        function t() {
          return o(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return l(t, e), s(t, [{
          key: "render",
          value: function () {
            var e = this,
              t = [],
              n = this.props.sampleIds.length;
            n >= 2 && t.push({
              name: "Tumors",
              render: function (t) {
                return k.default.renderFunction(t, e.props.sampleManager)
              },
              sortBy: function (t) {
                return k.default.getSortValue(t, e.props.sampleManager)
              },
              download: function (e) {
                return k.default.getSample(e)
              },
              order: 20
            }), t.push({
              name: "Gene",
              render: function (e) {
                return f.createElement("span", null, e[0].gene.hugoGeneSymbol)
              },
              filter: function (e, t, n) {
                return e[0].gene.hugoGeneSymbol.indexOf(n) > -1
              },
              download: function (e) {
                return e[0].gene.hugoGeneSymbol
              },
              sortBy: function (e) {
                return e[0].gene.hugoGeneSymbol
              },
              visible: !0,
              order: 30
            }), t.push({
              name: "CNA",
              render: _.default.renderFunction,
              filter: function (e, t, n) {
                return _.default.displayText(e).toUpperCase().indexOf(n) > -1
              },
              download: _.default.download,
              sortBy: _.default.sortValue,
              visible: !0,
              order: 40
            }), t.push({
              name: "Annotation",
              render: function (t) {
                return T.default.renderFunction(t, {
                  oncoKbData: e.props.cnaOncoKbData,
                  oncoKbEvidenceCache: e.props.oncoKbEvidenceCache,
                  oncoKbAnnotatedGenes: e.props.oncoKbAnnotatedGenes,
                  enableOncoKb: e.props.enableOncoKb,
                  pubMedCache: e.props.pubMedCache,
                  civicGenes: e.props.cnaCivicGenes,
                  civicVariants: e.props.cnaCivicVariants,
                  enableCivic: e.props.enableCivic,
                  enableMyCancerGenome: !1,
                  enableHotspot: !1,
                  userEmailAddress: e.props.userEmailAddress
                })
              },
              sortBy: function (t) {
                return T.default.sortValue(t, e.props.oncoKbAnnotatedGenes, e.props.cnaOncoKbData, e.props.cnaCivicGenes, e.props.cnaCivicVariants)
              },
              order: 50
            }), t.push({
              name: "Cytoband",
              render: function (e) {
                return f.createElement("span", null, e[0].gene.cytoband)
              },
              download: function (e) {
                return e[0].gene.cytoband
              },
              sortBy: function (e) {
                return e[0].gene.cytoband
              },
              visible: !0,
              order: 60
            }), t.push({
              name: "Cohort",
              render: function (t) {
                return e.props.copyNumberCountCache ? w.default.renderFunction(t, e.props.copyNumberCountCache, e.props.gisticData) : f.createElement("span", null)
              },
              sortBy: function (t) {
                return e.props.copyNumberCountCache ? w.default.getSortValue(t, e.props.copyNumberCountCache) : 0
              },
              tooltip: f.createElement("span", null, "Alteration frequency in cohort"),
              defaultSortDirection: "desc",
              order: 80
            }), 1 === n && this.props.mrnaExprRankMolecularProfileId && t.push({
              name: "mRNA Expr.",
              render: function (t) {
                return e.props.mrnaExprRankCache ? g.default.cnaRenderFunction(t, e.props.mrnaExprRankCache) : f.createElement("span", null)
              },
              order: 70
            });
            var r = h.sortBy(t, function (e) {
              return e.order
            });
            return f.createElement("div", null, "unavailable" === this.props.status && f.createElement("div", {
              className: "alert alert-info",
              role: "alert"
            }, "Copy Number Alterations are not available."), "available" === this.props.status && f.createElement(I, {
              columns: r,
              data: this.props.data,
              initialSortColumn: "Annotation",
              initialSortDirection: "desc",
              initialItemsPerPage: 10,
              itemsLabel: "Copy Number Alteration",
              itemsLabelPlural: "Copy Number Alterations",
              showCountHeader: !0,
              columnVisibility: this.props.columnVisibility,
              columnVisibilityProps: this.props.columnVisibilityProps
            }))
          }
        }]), t
      }(f.Component);
    x.defaultProps = {
      enableOncoKb: !0,
      enableCivic: !1
    }, x = O([p.observer], x), t.default = x
  },
  1114: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      a = n(1),
      l = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(a),
      s = n(891),
      u = r(s),
      c = n(922),
      f = r(c),
      p = n(860),
      d = n(173),
      h = r(d),
      m = function () {
        function e() {
          i(this, e)
        }
        return o(e, null, [{
          key: "renderFunction",
          value: function (t, n, r) {
            var i = e.getCopyNumberCount(t, n),
              o = e.makeCohortFrequencyViz(t, i),
              a = e.getGisticValue(t, r),
              s = null;
            if (null !== a) {
              var u = function () {
                return e.getGisticTooltip(a.qValue, a.peakGeneCount)
              };
              s = l.createElement(f.default, {
                text: "G",
                tooltip: u
              })
            }
            return l.createElement("div", null, null !== o && o, s)
          }
        }, {
          key: "makeCohortFrequencyViz",
          value: function (t, n) {
            if (null !== n) {
              var r = n.data;
              if ("complete" === n.status && r) {
                var i = [r.numberOfSamplesWithAlterationInGene],
                  o = t[0].alteration > 0 ? ["red"] : ["blue"];
                return l.createElement(u.default, {
                  counts: i,
                  freqColors: o,
                  totalCount: r.numberOfSamples,
                  tooltip: e.tooltipContent(t, r)
                })
              }
              return "complete" === n.status ? l.createElement(h.default, {
                placement: "left",
                overlay: l.createElement("span", null, "Data not available for this gene and alteration.")
              }, l.createElement("span", {
                style: {
                  color: "gray",
                  fontSize: "xx-small",
                  textAlign: "center"
                }
              }, "NA")) : l.createElement(h.default, {
                placement: "left",
                overlay: l.createElement("span", null, "Error retrieving data.")
              }, l.createElement("span", {
                style: {
                  color: "gray",
                  fontSize: "xx-small",
                  textAlign: "center"
                }
              }, "ERROR"))
            }
            return l.createElement(h.default, {
              placement: "left",
              overlay: l.createElement("span", null, "Querying server for data.")
            }, l.createElement("span", {
              style: {
                color: "gray",
                fontSize: "xx-small",
                textAlign: "center"
              }
            }, "LOADING"))
          }
        }, {
          key: "tooltipContent",
          value: function (e, t) {
            var n = t.numberOfSamplesWithAlterationInGene,
              r = t.numberOfSamplesWithAlterationInGene / t.numberOfSamples,
              i = l.createElement("b", null, (0, p.getPercentage)(r)),
              o = e[0].gene.hugoGeneSymbol,
              a = -2 === e[0].alteration ? "deleted" : "amplified",
              s = 1 === n ? "sample" : "samples",
              u = 1 === n ? "has" : "have";
            return l.createElement("span", null, n, " ", s, " (", i, ") in this study ", u, " ", a, " ", o)
          }
        }, {
          key: "getSortValue",
          value: function (t, n) {
            var r = e.getCopyNumberCount(t, n);
            return r && r.data ? r.data.numberOfSamplesWithAlterationInGene : null
          }
        }, {
          key: "getCopyNumberCount",
          value: function (e, t) {
            return t.get({
              entrezGeneId: e[0].entrezGeneId,
              alteration: e[0].alteration
            })
          }
        }, {
          key: "getGisticValue",
          value: function (e, t) {
            var n = t[e[0].entrezGeneId],
              r = void 0;
            if (n) {
              var i = 2 === e[0].alteration;
              r = n.find(function (e) {
                return e.amp === i
              })
            }
            return void 0 === r ? null : r
          }
        }, {
          key: "getGisticTooltip",
          value: function (e, t) {
            return l.createElement("div", null, l.createElement("b", null, "Gistic"), l.createElement("br", null), l.createElement("span", null, " Q-value: ", (e || 0).toExponential(3)), l.createElement("br", null), l.createElement("span", null, " Number of genes in the peak: ", t))
          }
        }]), e
      }();
    t.default = m
  },
  1115: function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.AlterationTypes = void 0;
    var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      o = n(1),
      a = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(o),
      l = t.AlterationTypes = void 0;
    ! function (e) {
      e[e.DeepDel = -2] = "DeepDel", e[e.AMP = 2] = "AMP"
    }(l || (t.AlterationTypes = l = {}));
    var s = function () {
      function e() {
        r(this, e)
      }
      return i(e, null, [{
        key: "displayText",
        value: function (e) {
          return l[e[0].alteration]
        }
      }, {
        key: "renderFunction",
        value: function (t) {
          var n = null;
          switch (t[0].alteration) {
            case -2:
              n = "#0000FF";
              break;
            case 2:
              n = "#FF0000"
          }
          return n ? a.createElement("span", {
            style: {
              color: n
            }
          }, e.displayText(t)) : a.createElement("span", null)
        }
      }, {
        key: "download",
        value: function (e) {
          return l[e[0].alteration]
        }
      }, {
        key: "sortValue",
        value: function (e) {
          return e[0].alteration
        }
      }]), e
    }();
    t.default = s
  },
  1116: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      a = n(3),
      l = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(a),
      s = n(923),
      u = r(s),
      c = n(924),
      f = r(c),
      p = n(925),
      d = r(p),
      h = n(121),
      m = n(186),
      y = n(289),
      v = function () {
        function e() {
          i(this, e)
        }
        return o(e, null, [{
          key: "getData",
          value: function (t, n, r, i, o) {
            var a = void 0;
            if (t) {
              var l = void 0,
                s = "complete",
                c = t[0].gene.hugoGeneSymbol,
                f = !(n instanceof Error || !n[t[0].entrezGeneId]);
              r && r.result instanceof Error ? s = "error" : f && (!r || !r.result || r.result instanceof Error || "complete" !== r.status || (l = e.getIndicatorData(t, r.result)), s = r ? r.status : "pending"), a = {
                hugoGeneSymbol: c,
                oncoKbStatus: s,
                oncoKbIndicator: l,
                oncoKbGeneExist: f,
                civicEntry: i && i.result && o && o.result ? e.getCivicEntry(t, i.result, o.result) : void 0,
                civicStatus: i && i.status && o && o.status ? e.getCivicStatus(i.status, o.status) : "pending",
                hasCivicVariants: !(i && i.result && o && o.result) || e.hasCivicVariants(t, i.result, o.result),
                myCancerGenomeLinks: [],
                hotspotStatus: "complete",
                isHotspot: !1,
                is3dHotspot: !1
              }
            } else a = u.default.DEFAULT_ANNOTATION_DATA;
            return a
          }
        }, {
          key: "getCivicEntry",
          value: function (e, t, n) {
            var r = null,
              i = e[0].gene.hugoGeneSymbol,
              o = (0, y.getCivicCNAVariants)(e, i, n),
              a = t[i];
            return (!l.isEmpty(o) || a && "" !== a.description) && (r = (0, y.buildCivicEntry)(a, o)), r
          }
        }, {
          key: "getCivicStatus",
          value: function (e, t) {
            return "error" === e || "error" === t ? "error" : "complete" === e && "complete" === t ? "complete" : "pending"
          }
        }, {
          key: "hasCivicVariants",
          value: function (e, t, n) {
            var r = e[0].gene.hugoGeneSymbol,
              i = (0, y.getCivicCNAVariants)(e, r, n);
            return !t[r] || !l.isEmpty(i)
          }
        }, {
          key: "getIndicatorData",
          value: function (e, t) {
            if (null !== t.uniqueSampleKeyToTumorType && null !== t.indicatorMap) {
              var n = (0, h.generateQueryVariantId)(e[0].gene.entrezGeneId, t.uniqueSampleKeyToTumorType[e[0].uniqueSampleKey], (0, m.getAlterationString)(e[0].alteration));
              return t.indicatorMap[n]
            }
          }
        }, {
          key: "getEvidenceQuery",
          value: function (e, t) {
            return t.uniqueSampleKeyToTumorType ? (0, h.generateQueryVariant)(e[0].gene.entrezGeneId, t.uniqueSampleKeyToTumorType[e[0].uniqueSampleKey], (0, m.getAlterationString)(e[0].alteration)) : void 0
          }
        }, {
          key: "sortValue",
          value: function (t, n, r, i, o) {
            var a = e.getData(t, n, r, i, o);
            return l.flatten([f.default.sortValue(a.oncoKbIndicator), d.default.sortValue(a.civicEntry)])
          }
        }, {
          key: "renderFunction",
          value: function (t, n) {
            var r = e.getData(t, n.oncoKbAnnotatedGenes, n.oncoKbData, n.civicGenes, n.civicVariants),
              i = void 0;
            return !n.oncoKbData || !n.oncoKbData.result || n.oncoKbData.result instanceof Error || (i = this.getEvidenceQuery(t, n.oncoKbData.result)), u.default.mainContent(r, n, n.oncoKbEvidenceCache, i, n.pubMedCache)
          }
        }]), e
      }();
    t.default = v
  },
  1117: function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      s = n(1),
      u = r(s),
      c = n(3),
      f = r(c),
      p = n(90),
      d = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(p);
    n(1118);
    var h = n(1119);
    n(1057), n(1058), n(1122), n(1123);
    var m = function (e) {
      function t() {
        return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
      }
      return a(t, e), l(t, [{
        key: "shouldComponentUpdate",
        value: function () {
          return !1
        }
      }, {
        key: "componentDidMount",
        value: function () {
          var e = this;
          this.drawTimeline();
          var t = f.debounce(function () {
            return e.drawTimeline()
          }, 500);
          (0, d.default)(window).resize(t)
        }
      }, {
        key: "drawTimeline",
        value: function () {
          var e = this.props.store.patientViewData.result.samples.reduce(function (e, t) {
              return e[t.id] = t.clinicalData.reduce(function (e, t) {
                return e[t.clinicalAttributeId] = t.value, e
              }, {}), e
            }, {}),
            t = this.props.sampleManager.getSampleIdsInOrder(),
            n = {
              cancer_study_id: this.props.store.studyId,
              patient_id: this.props.store.patientId
            },
            r = this.props.store.patientViewData.result.patient.clinicalData.reduce(function (e, t) {
              return e[t.clinicalAttributeId] = t.value, e
            }, {}),
            i = {
              color: this.props.sampleManager.sampleColors,
              label: this.props.sampleManager.sampleLabels,
              index: this.props.sampleManager.sampleIndex
            },
            o = this.props.store.clinicalEvents.result.map(function (e) {
              return {
                eventType: e.eventType,
                patientId: e.patientId,
                startDate: f.isUndefined(e.startNumberOfDaysSinceDiagnosis) ? null : e.startNumberOfDaysSinceDiagnosis,
                stopDate: f.isUndefined(e.endNumberOfDaysSinceDiagnosis) ? null : e.endNumberOfDaysSinceDiagnosis,
                eventData: e.attributes.reduce(function (e, t) {
                  return e[t.key] = t.value, e
                }, {})
              }
            });
          (0, h.buildTimeline)(n, t, r, e, i, o, this.props.getWidth())
        }
      }, {
        key: "render",
        value: function () {
          return u.createElement("div", {
            id: "timeline-container"
          }, u.createElement("div", {
            id: "timeline_btn",
            style:{
                display: "flex",
                marginBottom: "1px",
                justifyContent: "flex-end"
              }
            }, u.createElement("input", {
                type: "button",
                value: "Grid on", 
                className: "btn btn-sm btn-success",
                onClick:function(e){
                  var grid = document.querySelector('#timeline-container input');
                  if(grid.value=="Grid on"){
                    grid.value="Grid off";
                    grid.className="btn btn-sm btn-default";
                    document.querySelectorAll('.horizonal-line').forEach(function(e){e.style.cssText="stroke: rgb(235,235,235)"});
                  }else if(grid.value=="Grid off"){
                    grid.value="Grid on";
                    grid.className="btn btn-sm btn-success";
                    document.querySelectorAll('.horizonal-line').forEach(function(e){e.style.cssText="stroke: rgb(255,255,255)"});
                  }
                }
            })
          ), u.createElement("div", {
            id: "timeline"
          }))
        }
      }]), t
    }(u.Component);
    t.default = m
  },
  1118: function (e, t, n) {
    (function (e) {
      ! function (e, t) {
        "use strict";

        function n(n) {
          var r = t.console;
          i[n] || (i[n] = !0, e.migrateWarnings.push(n), r && r.warn && !e.migrateMute && (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()))
        }

        function r(e, t, r, i) {
          Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return n(i), r
            }
          })
        }
        e.migrateVersion = "3.0.0",
          function () {
            var n = t.console && t.console.log && function () {
                t.console.log.apply(t.console, arguments)
              },
              r = /^[12]\./;
            n && (e && !r.test(e.fn.jquery) || n("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), e.migrateWarnings && n("JQMIGRATE: Migrate plugin loaded multiple times"), n("JQMIGRATE: Migrate is installed" + (e.migrateMute ? "" : " with logging active") + ", version " + e.migrateVersion))
          }();
        var i = {};
        e.migrateWarnings = [], void 0 === e.migrateTrace && (e.migrateTrace = !0), e.migrateReset = function () {
          i = {}, e.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && n("jQuery is not compatible with Quirks Mode");
        var o = e.fn.init,
          a = e.isNumeric,
          l = e.find,
          s = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
          u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;
        e.fn.init = function (e) {
          var t = Array.prototype.slice.call(arguments);
          return "string" == typeof e && "#" === e && (n("jQuery( '#' ) is not a valid selector"), t[0] = []), o.apply(this, t)
        }, e.fn.init.prototype = e.fn, e.find = function (e) {
          var t = Array.prototype.slice.call(arguments);
          if ("string" == typeof e && s.test(e)) try {
            document.querySelector(e)
          } catch (r) {
            e = e.replace(u, function (e, t, n, r) {
              return "[" + t + n + '"' + r + '"]'
            });
            try {
              document.querySelector(e), n("Attribute selector with '#' must be quoted: " + t[0]), t[0] = e
            } catch (e) {
              n("Attribute selector with '#' was not fixed: " + t[0])
            }
          }
          return l.apply(this, t)
        };
        var c;
        for (c in l) Object.prototype.hasOwnProperty.call(l, c) && (e.find[c] = l[c]);
        e.fn.size = function () {
          return n("jQuery.fn.size() is deprecated; use the .length property"), this.length
        }, e.parseJSON = function () {
          return n("jQuery.parseJSON is deprecated; use JSON.parse"), JSON.parse.apply(null, arguments)
        }, e.isNumeric = function (t) {
          var r = a(t),
            i = function (t) {
              var n = t && t.toString();
              return !e.isArray(t) && n - parseFloat(n) + 1 >= 0
            }(t);
          return r !== i && n("jQuery.isNumeric() should not be called on constructed objects"), i
        }, r(e, "unique", e.uniqueSort, "jQuery.unique is deprecated, use jQuery.uniqueSort"), r(e.expr, "filters", e.expr.pseudos, "jQuery.expr.filters is now jQuery.expr.pseudos"), r(e.expr, ":", e.expr.pseudos, 'jQuery.expr[":"] is now jQuery.expr.pseudos');
        var f = e.ajax;
        e.ajax = function () {
          var e = f.apply(this, arguments);
          return e.promise && (r(e, "success", e.done, "jQXHR.success is deprecated and removed"), r(e, "error", e.fail, "jQXHR.error is deprecated and removed"), r(e, "complete", e.always, "jQXHR.complete is deprecated and removed")), e
        };
        var p = e.fn.removeAttr,
          d = e.fn.toggleClass,
          h = /\S+/g;
        e.fn.removeAttr = function (t) {
          var r = this;
          return e.each(t.match(h), function (t, i) {
            e.expr.match.bool.test(i) && (n("jQuery.fn.removeAttr no longer sets boolean properties: " + i), r.prop(i, !1))
          }), p.apply(this, arguments)
        }, e.fn.toggleClass = function (t) {
          return void 0 !== t && "boolean" != typeof t ? d.apply(this, arguments) : (n("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function () {
            var n = this.getAttribute && this.getAttribute("class") || "";
            n && e.data(this, "__className__", n), this.setAttribute && this.setAttribute("class", n || !1 === t ? "" : e.data(this, "__className__") || "")
          }))
        };
        var m = !1;
        e.swap && e.each(["height", "width", "reliableMarginRight"], function (t, n) {
          var r = e.cssHooks[n] && e.cssHooks[n].get;
          r && (e.cssHooks[n].get = function () {
            var e;
            return m = !0, e = r.apply(this, arguments), m = !1, e
          })
        }), e.swap = function (e, t, r, i) {
          var o, a, l = {};
          m || n("jQuery.swap() is undocumented and deprecated");
          for (a in t) l[a] = e.style[a], e.style[a] = t[a];
          o = r.apply(e, i || []);
          for (a in t) e.style[a] = l[a];
          return o
        };
        var y = e.data;
        e.data = function (t, r, i) {
          var o;
          return r && r !== e.camelCase(r) && (o = e.hasData(t) && y.call(this, t)) && r in o ? (n("jQuery.data() always sets/gets camelCased names: " + r), arguments.length > 2 && (o[r] = i), o[r]) : y.apply(this, arguments)
        };
        var v = e.Tween.prototype.run;
        e.Tween.prototype.run = function (t) {
          e.easing[this.easing].length > 1 && (n('easing function "jQuery.easing.' + this.easing.toString() + '" should use only first argument'), e.easing[this.easing] = e.easing[this.easing].bind(e.easing, t, this.options.duration * t, 0, 1, this.options.duration)), v.apply(this, arguments)
        };
        var g = e.fn.load,
          b = e.event.fix;
        e.event.props = [], e.event.fixHooks = {}, e.event.fix = function (t) {
          var r, i = t.type,
            o = this.fixHooks[i],
            a = e.event.props;
          if (a.length)
            for (n("jQuery.event.props are deprecated and removed: " + a.join()); a.length;) e.event.addProp(a.pop());
          if (o && !o._migrated_ && (o._migrated_ = !0, n("jQuery.event.fixHooks are deprecated and removed: " + i), (a = o.props) && a.length))
            for (; a.length;) e.event.addProp(a.pop());
          return r = b.call(this, t), o && o.filter ? o.filter(r, t) : r
        }, e.each(["load", "unload", "error"], function (t, r) {
          e.fn[r] = function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return "load" === r && "string" == typeof e[0] ? g.apply(this, e) : (n("jQuery.fn." + r + "() is deprecated"), e.splice(0, 0, r), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this))
          }
        }), e(function () {
          e(document).triggerHandler("ready")
        }), e.event.special.ready = {
          setup: function () {
            this === document && n("'ready' event is deprecated")
          }
        }, e.fn.extend({
          bind: function (e, t, r) {
            return n("jQuery.fn.bind() is deprecated"), this.on(e, null, t, r)
          },
          unbind: function (e, t) {
            return n("jQuery.fn.unbind() is deprecated"), this.off(e, null, t)
          },
          delegate: function (e, t, r, i) {
            return n("jQuery.fn.delegate() is deprecated"), this.on(t, e, r, i)
          },
          undelegate: function (e, t, r) {
            return n("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
          }
        });
        var w = e.fn.offset;
        e.fn.offset = function () {
          var t, r = this[0],
            i = {
              top: 0,
              left: 0
            };
          return r && r.nodeType ? (t = (r.ownerDocument || document).documentElement, e.contains(t, r) ? w.apply(this, arguments) : (n("jQuery.fn.offset() requires an element connected to a document"), i)) : (n("jQuery.fn.offset() requires a valid DOM element"), i)
        };
        var E = e.param;
        e.param = function (t, r) {
          var i = e.ajaxSettings && e.ajaxSettings.traditional;
          return void 0 === r && i && (n("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), r = i), E.call(this, t, r)
        };
        var _ = e.fn.andSelf || e.fn.addBack;
        e.fn.andSelf = function () {
          return n("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), _.apply(this, arguments)
        };
        var C = e.Deferred,
          T = [
            ["resolve", "done", e.Callbacks("once memory"), e.Callbacks("once memory"), "resolved"],
            ["reject", "fail", e.Callbacks("once memory"), e.Callbacks("once memory"), "rejected"],
            ["notify", "progress", e.Callbacks("memory"), e.Callbacks("memory")]
          ];
        e.Deferred = function (t) {
          var r = C(),
            i = r.promise();
          return r.pipe = i.pipe = function () {
            var t = arguments;
            return n("deferred.pipe() is deprecated"), e.Deferred(function (n) {
              e.each(T, function (o, a) {
                var l = e.isFunction(t[o]) && t[o];
                r[a[1]](function () {
                  var t = l && l.apply(this, arguments);
                  t && e.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a[0] + "With"](this === i ? n.promise() : this, l ? [t] : arguments)
                })
              }), t = null
            }).promise()
          }, t && t.call(r, r), r
        }
      }(e, window)
    }).call(t, n(90))
  },
  1119: function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function o(e, t, n) {
      for (var r = 0; r < e.length; r++) {
        var i = e[r],
          o = t[i],
          a = [i],
          l = o.OTHER_SAMPLE_ID;
        l && (a = a.concat(l));
        var u = p.selectAll(".timelineSeries_0").filter(function (e) {
          if (1 === e.tooltip_tables.length) {
            var t = e.tooltip_tables[0].filter(function (e) {
              return "SpecimenReferenceNumber" === e[0] || "SPECIMEN_REFERENCE_NUMBER" === e[0] || "SAMPLE_ID" === e[0]
            })[0];
            if (t) return -1 !== a.indexOf(t[1])
          }
        });
        if (u[0][0]) {
          var c = document.createElementNS("http://www.w3.org/2000/svg", "g");
          (0, s.default)(c).attr("transform", "translate(" + u.attr("cx") + "," + u.attr("cy") + ")"), (0, s.default)(u[0]).removeAttr("cx"), (0, s.default)(u[0]).removeAttr("cy"), (0, s.default)(u[0]).removeAttr("style"), (0, s.default)(u[0]).qtip("destroy"), (0, s.default)(u[0]).unbind("mouseover mouseout"), (0, s.default)(u[0]).wrap(c), c = (0, s.default)(u[0]).parent(), c.prop("__data__", (0, s.default)(u[0]).prop("__data__")),
            function (e, t) {
              var r = n.label[t],
                i = n.color[t];
              e.select("circle").attr("fill", i), e.append("text").attr("y", 4).attr("text-anchor", "middle").attr("font-size", 10).attr("fill", "white").text(r)
            }(p.select(c.get(0)), i), window.pvTimeline.addDataPointTooltip(c)
        }
      }
    }

    function a(e, t, n, r, i, a, l) {
      if (0 !== a.length) {
        var u = h.default.clinicalTimelineParser(a);
        if (0 !== u.length) {
          var f = c.find(u, function (e) {
            return "Specimen" === e.label
          });
          f && (f.times = c.sortBy(f.times, function (e) {
            var n = 1 / 0,
              r = c.filter(e.tooltip_tables[0], function (e) {
                return "SPECIMEN_REFERENCE_NUMBER" === e[0] || "SpecimenReferenceNumber" === e[0] || "SAMPLE_ID" === e[0]
              });
            return r && (r.length > 1 ? console.warn("More than 1 specimen reference number found in tooltip table") : 1 === r.length && -1 === (n = t.indexOf(r[0][1])) && (n = 1 / 0)), n
          }));
          var p, d;
          for (d = Object.keys(n).filter(function (e) {
              return /OS_STATUS$/.test(e)
            }).map(function (e) {
              return e.substr(0, e.length - "OS_STATUS".length)
            }), p = 0; p < d.length; p++) {
            var m = d[p];
            if ("DECEASED" === n[m + "OS_STATUS"] && m + "OS_MONTHS" in n) {
              var y = Math.round(30.4 * parseFloat(n[m + "OS_MONTHS"])),
                v = {
                  starting_time: y,
                  ending_time: y,
                  display: "circle",
                  color: "#000",
                  tooltip_tables: [
                    [
                      ["START_DATE", y],
                      ["STATUS", "DECEASED"]
                    ]
                  ]
                },
                g = u.filter(function (e) {
                  return "Status" === e.label
                })[0];
              g ? g.times = g.times.concat(v) : u = u.concat({
                label: "Status",
                times: [v]
              });
              break
            }
          }
          window.pvTimeline = h.default.clinicalTimeline().width(l).data(u).divId("#timeline").setTimepointsDisplay("Imaging", "square").orderTracks(["Specimen", "Surgery", "Status", "Diagnostics", "Diagnostic", "Imaging", "Lab_test", "Treatment"]).splitByClinicalAttributes("Lab_test", "TEST");
          window.pvTimeline.data().filter(function (e) {
            return "Lab_test" === e.parent_track && c.every(e.times.map(function (e) {
              return 1 === e.tooltip_tables.length && e.tooltip_tables[0].filter(function (e) {
                return "RESULT" === e[0]
              }).length > 0
            }))
          }).map(function (e) {
            return e.label
          }).forEach(function (e) {
            window.pvTimeline = window.pvTimeline.sizeByClinicalAttribute(e, "RESULT")
          }), window.pvTimeline = window.pvTimeline.splitByClinicalAttributes("Treatment", ["SUBTYPE", "AGENT"]).splitByClinicalAttributes("Treatment", ["TREATMENT_TYPE", "AGENT"]).collapseAll().toggleTrackCollapse("Specimen").enableTrackTooltips(!1).plugins([{
            obj: new h.default.trimClinicalTimeline("Trim Timeline"),
            enabled: !0
          }]).addPostTimelineHook(o.bind(this, t, r, i)), window.pvTimeline(), (0, s.default)("#timeline-container").show()
        }
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.buildTimeline = a;
    var l = n(90),
      s = i(l),
      u = n(3),
      c = r(u),
      f = n(937),
      p = r(f),
      d = n(1120),
      h = i(d)
  },
  1120: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(1121);
    t.default = r
  },
  1121: function (e, t, n) {
    function r(e, t) {
      l.call(this, e, t)
    }

    function i(e, t) {
      l.call(this, e, t), this.id = "exportTimeline"
    }

    function o(e, t) {
      l.call(this, e, t), this.id = "helperLines"
    }

    function a(e, t) {
      l.call(this, e, t), this.id = "overviewAxis"
    }

    function l(e, t) {
      this.name = e, this.spec = t || null
    }

    function s(e, t) {
      l.call(this, e, t), this.id = "trimClinicalTimeline"
    }

    function u() {
      return 100 !== Math.round(100 * window.devicePixelRatio)
    }

    function c(e, t) {
      l.call(this, e, t), this.id = "verticalLine"
    }

    function f(e, t) {
      l.call(this, e, t), this.id = "zoom"
    }
    var p = n(90),
      d = n(937),
      h = n(1059);
    ! function () {
      d.timeline = function () {
        var lineSpacing = 1.5, timelineMargin = 11;
        function e(e) {
          function t(e, t) {
            for (var n = -1 / 0, r = [], i = [], o = e.sort(function (e, t) {
                return parseInt(e.starting_time) - parseInt(t.starting_time)
              }), a = 0; a < o.length; a++) parseInt(o[a].starting_time) === parseInt(o[a].ending_time) && parseInt(o[a].starting_time) <= parseInt(n) + t || parseInt(o[a].starting_time) !== parseInt(o[a].ending_time) && parseInt(o[a].starting_time) < parseInt(n) ? (i.push(o[a]), parseInt(o[a].ending_time) > n && (n = parseInt(o[a].ending_time))) : (i.length > 0 && r.push(i), i = [o[a]], n = parseInt(o[a].ending_time));
            return r.push(i), r
          }

          function R(e, t) {
            var n;
            return "display" in e ? "rect" === e.display || "circle" === e.display ? n = e.display : "square" === e.display ? n = "rect" : -1 !== e.display.split(" ").indexOf("circle") ? n = "circle" : console.warn("d3Timeline Warning: unrecognized display attribute: " + e.display) : n = v, document.createElementNS(d.ns.prefix.svg, n)
          }

          function L(e, t) {
            return parseInt(e.size) || A
          }

          function F(e, t) {
            if ("display" in e && "rect" !== e.display) return A;
            var n = (e.ending_time - e.starting_time) * Y;
            return n < k && (n = k), n
          }

          function V(e, t) {
            return "display" in e && "square" === e.display ? w.left + (e.starting_time - g) * Y - A / 2 : w.left + (e.starting_time - g) * Y
          }

          function H(e, t) {
            return w.left + (e.starting_time - g) * Y + 5
          }

          function B(t, n) {
            e.append("svg:line").attr("x1", t).attr("y1", n.marginTop).attr("x2", t).attr("y2", u - n.marginBottom).style("stroke", n.color).style("stroke-width", n.width)
          }
          var G = e.append("g"),
            z = e[0][0].getBoundingClientRect(),
            U = d.select(e[0][0]),
            q = {},
            W = 1,
            Q = 0,
            K = 0;
          ! function () {
            if (s || z.width) {
              if (!s || !z.width) try {
                s = U.attr("width")
              } catch (e) {
                console.log(e)
              }
            } else try {
              if (!(s = U.attr("width"))) throw "width of the timeline is not set. As of Firefox 27, timeline().with(x) needs to be explicitly set in order to render"
            } catch (e) {
              console.log(e)
            }
          }(), T && G.each(function (e, t) {
            e.forEach(function (e, t) {
              e.times.forEach(function (e, n) {
                0 === t && 0 === n ? (originTime = e.starting_time, e.starting_time = 0, e.ending_time = e.ending_time - originTime) : (e.starting_time = e.starting_time - originTime, e.ending_time = e.ending_time - originTime)
              })
            })
          }), (E || 0 === b || 0 === g) && (G.each(function (e, n) {
            e.forEach(function (e, n) {
              var r = 0;
              if (e.collapse) e.times.forEach(function (e) {
                e.stack = W
              });
              else {
                t(e.times, _).forEach(function (e, t) {
                  var n = 0;
                  e.forEach(function (e, t) {
                    e.stack = W + n, n > r && (r = n), n++
                  })
                })
              }
              E && -1 == Object.keys(q).indexOf(n) && (q[n] = W, W++), W += r, e.times.forEach(function (e, t) {
                0 === g && (e.starting_time < Q || 0 === Q && !1 === T) && (Q = e.starting_time), 0 === b && e.ending_time > K && (K = e.ending_time)
              })
            })
          }), 0 === b && (b = K), 0 === g && (g = Q));
          var Y = 1 / (b - g) * (s - w.left - w.right),
            Z = d.time.scale().domain([g, b]).range([w.left, s - w.right]),
            J = d.svg.axis().scale(Z).orient(l).tickFormat(h.format).tickSize(h.tickSize);
          if (null !== h.tickValues ? J.tickValues(h.tickValues) : J.ticks(h.numTicks || h.tickTime, h.tickInterval), I && G.append("g").attr("class", "axis").attr("transform", "translate(0," + (w.top + (A + O) * W) + ")").call(J), S && G.append("g").attr("class", "axis").attr("transform", "translate(0," + (w.top + (A + O) * W) + ")").attr(M.stroke, M.spacing).call(J.tickFormat("").tickSize(-(w.top + (A + O) * (W - 1) + 3), 0, 0)), G.each(function (x, a) {
              x.forEach(function (t, a) {
                function l(e, t) {
                  return E ? w.top + (A + O) * e.stack : w.top
                }

                function u(e, t) {
                  return E ? w.top + (A + O) * q[a] + .75 * A : w.top + .75 * A
                }
                var p = t.times,
                  d = void 0 !== t.label;
                if (void 0 !== t.id && console.warn("d3Timeline Warning: Ids per dataset is deprecated in favor of a 'class' key. Ids are now per data element."), f) {
                  var h = (A + O) * q[a];
                  G.selectAll("svg").data(p).enter().insert("rect").attr("class", "row-green-bar").attr("x", 0 + w.left).attr("width", s - w.right - w.left).attr("y", h).attr("height", A).attr("fill", f)
                }
                var gParent = ""; // assume the depth of item is 3
                // for loop, find latest parent and save it as gParent
                for (var i = a - 1; i >= 0; i--) { 
                  if ((x[i].label.lastIndexOf('    ') < t.label.lastIndexOf('    ')) && x[i].label.lastIndexOf('    ') == -1) {
                    gParent = " sub" + x[i].label;
                    break;
                  }
                }
                G.selectAll("svg").data(p).enter().append(R).attr("x", V).attr("y", function (e, t) {
                  return (l(e, t) + A / 2) * lineSpacing - timelineMargin
                }).attr("width", F).attr("cy", function (e, t) {
                  return (l(e, t) + A / 2) * lineSpacing - timelineMargin
                }).attr("cx", V).attr("r", L).attr("height", L).style("fill", function (e, n) {
                  var r;
                  return "display" in e && -1 !== e.display.split(" ").indexOf("unfilled") ? "rgb(255, 255, 255)" : e.color ? e.color : y ? (r = e[y], m(r ? r : t[y])) : m(d ? t.label : a)
                }).style("fill-opacity", 0.7).style("stroke", function (e, n) {
                  if ("display" in e && -1 !== e.display.split(" ").indexOf("unfilled")) return e.color ? e.color : m(d ? t.label : a)
                }).attr("filter", function (e, t) {
                  return "display" in e && -1 !== e.display.split(" ").indexOf("dropshadow") ? "url(#dropshadow)" : ""
                }).on("mousemove", function (e, r) {
                  n(e, a, t)
                }).on("mouseover", function (e, n) {
                  r(e, n, t)
                }).on("mouseout", function (e, n) {
                  i(e, n, t)
                }).on("click", function (e, n) {
                  o(e, a, t)
                }).attr("class", function (e, n) {
                  return t.class ? "timelineSeries_" + t.class + gParent + (t.parent_track ? ' sub' + (t.parent_track.trim().replace(" ", "-")) : "") : "timelineSeries_" + a + gParent + (t.parent_track ? " sub" + t.parent_track.trim().replace(" ", "-") : "")
                }).attr("id", function (e, n) {
                  return t.id && !e.id ? "timelineItem_" + t.id : e.id ? e.id : "timelineItem_" + a + "_" + n
                });
                if (G.selectAll("svg").data(p).enter().append("text").attr("x", H).attr("y", u).text(function (e) {
                    return e.label
                  }), c) {
                  var v = A + O / 2 + w.top + (A + O) * q[a];
                  e.append("svg:line").attr("class", "row-seperator").attr("x1", 0 + w.left).attr("x2", s - w.right).attr("y1", v).attr("y2", v).attr("stroke-width", 1).attr("stroke", c)
                }
                if (q[a] > 1) 
                  G.append("path").style("stroke", "rgb(255,255,255)").style("fill", "none").attr("class", "horizonal-line").attr("d", "M200," + ((A + O) * q[a] * lineSpacing + timelineMargin-5) + "H" + (U.attr("width") - 30))
                // if item doesn't exist
                if (t.times.length == 0) {
                  d && e.append("text").attr("class", "timeline-label / " + gParent + (t.parent_track ? " sub" + (t.label.trim().replace(' ', '-')) : "")).attr("transform", "translate(0," + (.75 * A + w.top + (A + O) * q[a] * lineSpacing) + ")").text("▼" + (d ? t.label : t.id)).attr("name", t.parent_track ? "sub" + t.parent_track.trim().replace(" ", "_") : "").on("click", function (e, n) { //▷▶▼
                    var txtDisplay = "",
                      selectedClass = document.querySelectorAll('.sub' + (t.label.trim().replace(' ', '-'))), // all of label, circle, rect
                      showSubLevel = "▼",
                      numException = 0,
                      subExcepion = "",
                      numSubLabel = document.getElementsByName('sub' + (t.label.trim().replace(' ', '_'))).length,
                      allTimelineLabel = document.querySelectorAll('.timeline-label');

                    if (this.innerHTML.substr(0, 1) == '▼') {
                      txtDisplay = 'none';
                      itemDisplay = 'none';
                      showSubLevel = "▷";
                      numSubLabel = -numSubLabel;
                    }
                    if (numSubLabel == 0) {
                      if (this.innerHTML.substr(0, 1) == '▼') {
                        for (var i = 0; i < selectedClass.length; i++) {
                          if (selectedClass[i].localName == 'text' && selectedClass[i].style.display == '') {
                            numSubLabel--;  //count text
                          }
                          selectedClass[i].style.display = txtDisplay;
                        }
                      } else if (this.innerHTML.substr(0, 1) == '▷') {
                        // timelineitems -> labels
                        for (var i = 0; i < selectedClass.length; i++) {
                          txtDisplay = '';
                          if (selectedClass[i].localName == 'text' && selectedClass[i].style.display == 'none') {
                            if (selectedClass[i].innerHTML.substr(0, 1) == '▷') { // 하위 레벨 숨긴 항목 찾아서 클래스명 변수에 저장
                              subExcepion = selectedClass[i].innerHTML.substr(1).trim().replace(' ', '-');
                              numSubLabel++;
                              // item display: none, after labeling
                              for (var j = 0; j < selectedClass.length; j++) {
                                if (selectedClass[j].localName != 'text' && selectedClass[j].classList.value.indexOf(subExcepion) > 0) { //subExcepion
                                  itemDisplay = 'none';
                                  selectedClass[j].style.display = itemDisplay;
                                }
                              }
                            } else {
                              if (selectedClass[i].classList.value.indexOf(subExcepion) > 0) { //subExcepion
                                txtDisplay = 'none';
                                numException++;
                              } else {
                                numSubLabel++;
                              }
                            }
                          }
                          selectedClass[i].style.display = txtDisplay;
                        }
                      }
                      this.innerHTML = showSubLevel + (d ? t.label : t.id);

                      // relocate items
                      for (var i = q[a] + Math.abs(numSubLabel) - 1; i < allTimelineLabel.length - 1; i++) {
                        var allTimelineSeries = document.querySelectorAll('.timelineSeries_' + i);
                        allTimelineLabel[i].transform.baseVal[0].matrix.f = allTimelineLabel[i].transform.baseVal[0].matrix.f + ((A + O) * (numSubLabel) * lineSpacing);
                        for (var j = 0; j < allTimelineSeries.length; j++) {
                          if (allTimelineSeries[j].localName == 'rect') {
                            allTimelineSeries[j].y.baseVal.value = allTimelineSeries[j].y.baseVal.value + ((A + O) * (numSubLabel) * lineSpacing);
                          } else if (allTimelineSeries[j].localName == "circle") {
                            allTimelineSeries[j].cy.baseVal.value = allTimelineSeries[j].cy.baseVal.value + ((A + O) * (numSubLabel) * lineSpacing);
                          }
                        }
                      }
                      // pannel height ; .scrollable .timeline
                      (document.querySelector(".scrollable")) ? document.querySelector(".scrollable").height.baseVal.value = document.querySelector(".scrollable").height.baseVal.value + ((A + O) * (numSubLabel) * lineSpacing): (document.querySelector(".timeline")) ? document.querySelector(".timeline").height.baseVal.value = document.querySelector(".timeline").height.baseVal.value + ((A + O) * (numSubLabel) * lineSpacing) : "";
                    } else {
                      this.innerHTML = showSubLevel + (d ? t.label : t.id);
                      for (var i = 0; i < selectedClass.length; i++) {
                        selectedClass[i].style.display = txtDisplay;
                      }
                      // relocate items
                      for (var i = q[a] + Math.abs(numSubLabel) - 1; i < allTimelineLabel.length - 1; i++) {
                        var allTimelineSeries = document.querySelectorAll('.timelineSeries_' + i);
                        allTimelineLabel[i].transform.baseVal[0].matrix.f = allTimelineLabel[i].transform.baseVal[0].matrix.f + ((A + O) * (numSubLabel) * lineSpacing);
                        for (var j = 0; j < allTimelineSeries.length; j++) {
                          if (allTimelineSeries[j].localName == 'rect') {
                            allTimelineSeries[j].y.baseVal.value = allTimelineSeries[j].y.baseVal.value + ((A + O) * (numSubLabel) * lineSpacing);
                          } else if (allTimelineSeries[j].localName == "circle") {
                            allTimelineSeries[j].cy.baseVal.value = allTimelineSeries[j].cy.baseVal.value + ((A + O) * (numSubLabel) * lineSpacing);
                          }
                        }
                      }
                      // pannel height ; .scrollable .timeline
                      document.querySelector(".scrollable") ? document.querySelector(".scrollable").height.baseVal.value = document.querySelector(".scrollable").height.baseVal.value + ((A + O) * (numSubLabel) * lineSpacing) : document.querySelector(".timeline") ? document.querySelector(".timeline").height.baseVal.value = document.querySelector(".timeline").height.baseVal.value + ((A + O) * (numSubLabel) * lineSpacing) : ""
                    }
                    // o(e, a, t)
                  }), void 0 !== t.icon && e.append("image").attr("class", "timeline-label").attr("transform", "translate(0," + (w.top + (A + O) * q[a]) + ")").attr("xlink:href", t.icon).attr("width", w.left).attr("height", A)
                } else {
                  d && e.append("text").attr("class", "timeline-label" + gParent + (t.parent_track ? ' sub' + (t.parent_track.trim().replace(' ', '-')) : "")).attr("transform", "translate(0," + (.75 * A + w.top + (A + O) * q[a] * lineSpacing) + ")").text("　" + (d ? t.label : t.id)).attr("name", t.parent_track ? "sub" + t.parent_track.trim().replace(" ", "_") : "").on("click", function (e, n) {
                    o(e, a, t)
                  }), void 0 !== t.icon && e.append("image").attr("class", "timeline-label").attr("transform", "translate(0," + (w.top + (A + O) * q[a] * lineSpacing) + ")").attr("xlink:href", t.icon).attr("width", w.left).attr("height", A)
                }
                if (a=== x.length-1) {
                    G.append("path").style("stroke", "rgb(255,255,255)").style("fill", "none").attr("class", "horizonal-base-line").attr("d", "M200," + (28 + (A + O) * q[a] * lineSpacing) + "H" + (U.attr("width") - 30))
                }
              })
            }), s > z.width) {
            var X = function () {
                var e = Math.min(0, Math.max(z.width - s, d.event.translate[0]));
                $.translate([e, 0]), G.attr("transform", "translate(" + e + ",0)"), a(e * Y, Z), N = e
              },
              $ = d.behavior.zoom().x(Z).on("zoom", X);
            e.attr("class", "scrollable").call($), $.translate([p, 0]), $.event(e)
          }
          C && G.selectAll(".tick text").attr("transform", function (e) {
            return "rotate(" + C + ")translate(" + (this.getBBox().width / 2 + 10) + "," + this.getBBox().height / 2 + ")"
          });
          var ee = G[0][0].getBoundingClientRect();
          if (function () {
              if (u || U.attr("height")) u ? U.attr("height", u) : u = U.attr("height");
              else {
                if (!A) throw "height of the timeline is not set";
                u = ee.height + ee.top - z.top, d.select(e[0][0]).attr("height", u)
              }
            }(), D && G.each(function (e, t) {
              e.forEach(function (e) {
                e.times.forEach(function (e) {
                  B(Z(e.starting_time), j), B(Z(e.ending_time), j)
                })
              })
            }), x) {
            B(Z(new Date), P)
          }
          (document.querySelector(".scrollable")) ? document.querySelector(".scrollable").height.baseVal.value = (timelineMargin + document.querySelector(".scrollable").height.baseVal.value) : (document.querySelector(".timeline")) ? document.querySelector(".timeline").height.baseVal.value = (timelineMargin + document.querySelector(".timeline").height.baseVal.value) : "";
        }
        var t = ["circle", "rect"],
          n = function () {},
          r = function () {},
          i = function () {},
          o = function () {},
          a = function () {},
          l = "bottom",
          s = null,
          u = null,
          c = null,
          f = null,
          p = 0,
          h = {
            format: function (e) {
              return d.time.format("%I %p")(e)
            },
            tickTime: d.time.hours,
            tickInterval: 1,
            tickSize: 6,
            tickValues: null
          },
          m = d.scale.category20(),
          y = null,
          v = "rect",
          g = 0,
          b = 0,
          w = {
            left: 30,
            right: 30,
            top: 30,
            bottom: 30
          },
          E = !1,
          _ = 0,
          C = !1,
          T = !1,
          A = 20,
          k = 5,
          O = 5,
          I = !0,
          x = !1,
          S = !1,
          M = {
            stroke: "stroke-dasharray",
            spacing: "4 10"
          },
          P = {
            marginTop: 25,
            marginBottom: 0,
            width: 1,
            color: m
          },
          D = !1,
          j = {
            marginTop: 25,
            marginBottom: 0,
            width: 1,
            color: m
          },
          N = null;
        return e.margin = function (t) {
          return arguments.length ? (w = t, e) : w
        }, e.orient = function (t) {
          return arguments.length ? (l = t, e) : l
        }, e.itemHeight = function (t) {
          return arguments.length ? (A = t, e) : A
        }, e.itemMinWidth = function (t) {
          return arguments.length ? (k = t, e) : k
        }, e.itemMargin = function (t) {
          return arguments.length ? (O = t, e) : O
        }, e.height = function (t) {
          return arguments.length ? (u = t, e) : u
        }, e.width = function (t) {
          return arguments.length ? (s = t, e) : s
        }, e.display = function (n) {
          return arguments.length && -1 != t.indexOf(n) ? (v = n, e) : v
        }, e.tickFormat = function (t) {
          return arguments.length ? (h = t, e) : h
        }, e.hover = function (t) {
          return arguments.length ? (n = t, e) : n
        }, e.mouseover = function (t) {
          return arguments.length ? (r = t, e) : t
        }, e.mouseout = function (t) {
          return arguments.length ? (i = t, e) : t
        }, e.click = function (t) {
          return arguments.length ? (o = t, e) : o
        }, e.scroll = function (t) {
          return arguments.length ? (a = t, e) : a
        }, e.colors = function (t) {
          return arguments.length ? (m = t, e) : m
        }, e.beginning = function (t) {
          return arguments.length ? (g = t, e) : g
        }, e.ending = function (t) {
          return arguments.length ? (b = t, e) : b
        }, e.rotateTicks = function (t) {
          return C = t, e
        }, e.stack = function () {
          return E = !E, e
        }, e.stackSlack = function () {
          return arguments.length ? e : _
        }, e.relativeTime = function () {
          return T = !T, e
        }, e.showBorderLine = function () {
          return D = !D, e
        }, e.showBorderFormat = function (t) {
          return arguments.length ? (j = t, e) : j
        }, e.showToday = function () {
          return x = !x, e
        }, e.showTodayFormat = function (t) {
          return arguments.length ? (P = t, e) : P
        }, e.colorProperty = function (t) {
          return arguments.length ? (y = t, e) : y
        }, e.rowSeperators = function (t) {
          return arguments.length ? (c = t, e) : c
        }, e.background = function (t) {
          return arguments.length ? (f = t, e) : f
        }, e.showTimeAxis = function () {
          return I = !I, e
        }, e.showTimeAxisTick = function () {
          return S = !S, e
        }, e.showTimeAxisTickFormat = function (t) {
          return arguments.length ? (M = t, e) : M
        }, e.translate = function (t) {
          return arguments.length ? (p = t, e) : p
        }, e.scrolledX = function (t) {
          return arguments.length ? (N = t, e) : N
        }, e
      }
    }(), r.prototype.run = function (e, t) {
      p(t.configUlId).html(""), e.plugins().forEach(function (e) {
        if (e.obj.name) {
          var n = p('<input type="checkbox" id="' + e.obj.id + '">').attr("checked", e.enabled);
          p(t.configUlId).append(n).append("<li>" + e.obj.name + "</li>")
        }
      }), p(t.configUlId + " input").on("change", function () {
        n(this.id, this.checked)
      });
      var n = function (t, n) {
        e.plugins().forEach(function (e) {
          t === e.obj.id && (e.enabled = n)
        }), e()
      }
    }, r.prototype.remove = function (e, t) {
      p(this.spec.configUlId).remove()
    }, Object.setPrototypeOf(r.prototype, l.prototype), i.prototype.run = function (e, t) {
      return p(t.exportDivId).css("visibility", "visible"), {
        generateSVG: function () {
          p("#addtrack").css("visibility", "hidden");
          var e = document.getElementsByTagName("path")[0];
          e.setAttribute("stroke", "black"), e.setAttribute("fill", "none"), e = document.getElementsByTagName("line");
          for (var n = 0; n < e.length; n++) e[n].setAttribute("stroke", "black"), e[n].setAttribute("fill", "none");
          var r = document.querySelector(t.timelineDiv + " svg"),
            i = new XMLSerializer,
            o = i.serializeToString(r),
            a = document.createElement("a");
          o.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/) || (o = o.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"')), o.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/) || (o = o.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"')), o = '<?xml version="1.0" standalone="no"?>\r\n' + o;
          var l = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(o);
          a.download = "clinical-timeline.svg", a.href = l, a.click(), p("#addtrack").css("visibility", "visible")
        },
        generatePNG: function (e) {
          p("#addtrack").css("visibility", "hidden");
          var n = document.getElementsByTagName("path")[0];
          n.setAttribute("stroke", "black"), n.setAttribute("fill", "none"), n = document.getElementsByTagName("line");
          for (var r = 0; r < n.length; r++) n[r].setAttribute("stroke", "black"), n[r].setAttribute("fill", "none");
          var i = (new XMLSerializer).serializeToString(document.querySelector(t.timelineDiv + " svg")),
            o = document.getElementById("canvas"),
            a = o.getContext("2d"),
            l = self.URL || self.webkitURL || self,
            s = new Image,
            u = new Blob([i], {
              type: "image/svg+xml;charset=utf-8"
            }),
            c = l.createObjectURL(u);
          s.onload = function () {
            a.drawImage(s, 0, 0);
            var t = o.toDataURL("image/png");
            document.querySelector("#png-container").innerHTML = '<img src="' + t + '"/>';
            var n = document.createElement("a");
            n.download = "clinical-timeline.png", e && (n.href = o.toDataURL("image/png").replace("image/png", "image/octet-stream")), n.click(), l.revokeObjectURL(t), n.remove()
          }, s.src = c, p("#addtrack").css("visibility", "visible")
        },
        generatePDF: function () {
          this.generatePNG(!1), setTimeout(function () {
            html2canvas(p("#canvas"), {
              onrendered: function (e) {
                var e = document.getElementById("canvas"),
                  t = e.toDataURL("image/png"),
                  n = new jsPDF("p", "mm");
                n.addImage(t, "PNG", 0, 0), n.save("clinical-timeline.pdf")
              }
            })
          }, 50)
        }
      }
    }, i.prototype.remove = function (e, t) {
      p(t.exportDivId).css("visibility", "hidden")
    }, Object.setPrototypeOf(i.prototype, l.prototype), o.prototype.run = function (e, t) {
      d.selectAll(e.divId() + " [id^='timelineItem']").on("click", function (t) {
        if (1 === e.zoomFactor()) {
          var n = d.select(e.divId() + " svg").append("g").attr("class", "helper-line-group"),
            r = parseInt(this.getAttribute("x")),
            i = parseInt(this.getAttribute("y")),
            o = parseInt(this.getAttribute("width")),
            a = parseInt(this.getAttribute("height"));
          n.append("line").attr("x1", r - ("circle" === t.display ? o : 0)).attr("y1", i + a / 2).attr("x2", 120).attr("y2", i + a / 2).attr("stroke-width", 1).attr("stroke", "#aaa").attr("class", "helper-line x"), n.append("line").attr("x1", r).attr("y1", i).attr("x2", r).attr("y2", 40).attr("stroke-width", 1).attr("stroke", "#aaa").attr("class", "helper-line y"), n.append("rect").attr("width", 120).attr("height", 14).attr("x", 0).attr("y", i - 7).attr("stroke-width", 2).attr("stroke", "rgb(57, 106, 177)").style("fill", "none"), n.append("path").style("stroke", "rgb(146, 36, 40)").style("fill", "none").attr("d", "M " + (r - 5) + " 30 L " + r + " 20 L " + (r + 5) + " 30 Z"), n.append("text").attr("x", this.getAttribute("x")).attr("y", 40).text(e.formatTime(e.daysToTimeObject(t.starting_time), "days")).style("text-anchor", "middle").style("font-size", "10px"), p(this).qtip("hide"), setTimeout(function () {
            n.remove()
          }, 1e3)
        }
      })
    }, Object.setPrototypeOf(o.prototype, l.prototype), a.prototype.run = function (e, t) {
      var n = e.getReadOnlyVars(),
        r = n.margin,
        i = e.overviewAxisWidth(),
        o = n.chart,
        a = e.zoomFactor(),
        l = e.divId(),
        s = d.select(l + " .overview"),
        u = e.computeZoomLevel(n.minDays, n.maxDays, e.width()),
        c = e.getTickValues(n.minDays, n.maxDays, u),
        f = c[0],
        p = c[c.length - 1],
        h = d.time.scale().domain([m.roundDown(n.minDays, m.getDifferenceTicksDays(u)), m.roundUp(n.maxDays, m.getDifferenceTicksDays(u))]).range([0 + r.overviewAxis.left, i - r.overviewAxis.right]),
        y = e.computeZoomLevel(n.minDays, n.maxDays, e.width() * a),
        v = h(m.roundDown(n.minDays, m.getDifferenceTicksDays(y))) - h(m.roundDown(n.minDays, m.getDifferenceTicksDays(u))),
        g = h(m.roundUp(n.maxDays, m.getDifferenceTicksDays(u))) - h(m.roundUp(n.maxDays, m.getDifferenceTicksDays(y))),
        b = [{
          height: 2,
          width: i,
          x: 0,
          y: 24,
          fill: "#ccc"
        }, {
          height: 2,
          width: i,
          x: 0,
          y: 44,
          fill: "#ccc"
        }, {
          height: 18,
          width: 2,
          x: 0,
          y: 26,
          fill: "#ccc"
        }, {
          height: 18,
          width: 2,
          x: i - 2,
          y: 26,
          fill: "#ccc"
        }],
        w = d.time.scale().domain([f, p]).range([0 + r.overviewAxis.left, i - r.overviewAxis.right]),
        E = d.svg.axis().scale(w).orient("bottom").tickFormat(function (t) {
          return e.formatTime(e.daysToTimeObject(t.valueOf()), u)
        }).ticks(c.length).tickValues(c).tickSize(3).tickPadding(4),
        _ = d.svg.axis().scale(w).orient("top").tickFormat(function (t) {
          return e.formatTime(e.daysToTimeObject(t.valueOf()), u)
        }).ticks(c.length).tickValues(c).tickSize(3).tickPadding(0);
      s.style("display", "initial"), s.append("g").attr("class", "x axis overview-axis").attr("transform", "translate(0,25)").call(E), s.append("g").attr("class", "x axis overview-axis overview-axis-mirror").attr("transform", "translate(0,44)").call(_), s.selectAll(l + " rect.overview-border").data(b).enter().append("rect").attr("height", function (e) {
        return e.height
      }).attr("width", function (e) {
        return e.width
      }).attr("x", function (e) {
        return e.x
      }).attr("y", function (e) {
        return e.y
      }).attr("fill", function (e) {
        return e.fill
      }).attr("class", "overview-border");
      var C = o.width(),
        T = (i - r.overviewAxis.left - r.overviewAxis.right) / a,
        A = d.time.scale().domain([0, -C]).range([0 + v, i - g]),
        k = d.time.scale().domain([0 + v, i - g]).range([0, -C]),
        O = d.behavior.drag().on("drag", function (t, n) {
          if (o.scrolledX()) {
            var r = A(o.scrolledX());
            d.select(l + " .overview-rectangle").attr("x", r), e.overviewX(r)
          }
        }),
        I = d.behavior.drag().on("drag", function (t, n) {
          var r = parseInt(d.select(l + " .overview-rectangle").attr("x")) + d.event.dx;
          r > v && r < i - T - g && a > 1 && (d.select(l + " svg g").attr("transform", "translate(" + k(r) + ",0)"), d.select(l + " .overview-rectangle").attr("x", r), e.overviewX(r))
        });
      s.append("rect").attr("height", 16).attr("width", T).attr("x", e.overviewX()).attr("y", 27).attr("fill", "rgba(25,116,255, 0.4)").attr("class", "overview-rectangle").style("cursor", "move").call(I);
      d.select(l + " svg").call(O)
    }, Object.setPrototypeOf(a.prototype, l.prototype), l.prototype.run = function (e, t) {
      console.log("A plugin must have a run function to be functional")
    }, l.prototype.remove = function (e, t) {}, s.prototype.run = function (e, t) {
      function n(e) {
        var t = m.getLowerBoundIndex(T, e),
          n = t + 1;
        return n > T.length - 1 ? l[t] : l[t] + (e - T[t]) * (l[n] - l[t]) / (T[n] - T[t])
      }

      function r() {
        e.pluginSetOrGetState("trimClinicalTimeline", !1), xAxisBBox = d.select(e.divId() + " > svg > g > g.axis")[0][0].getBBox(), d.select(e.divId() + "> svg > g").insert("rect").attr("x", xAxisBBox.x).attr("y", 4).attr("width", xAxisBBox.width).attr("height", xAxisBBox.height).attr("fill", "rgba(0,0,0,0)").style("cursor", "pointer").on("click", function () {
          e.pluginSetOrGetState("trimClinicalTimeline", !0)
        }).append("svg:title").text("Click to trim the timeline")
      }
      if (!u()) {
        var i = [],
          o = [],
          a = [],
          l = [],
          s = e.divId(),
          c = d.select(e.divId() + " .timeline"),
          f = e.getReadOnlyVars().maxDays,
          h = e.getReadOnlyVars().minDays,
          y = e.width(),
          v = e.getReadOnlyVars().margin,
          g = e.computeZoomLevel(h, f, y),
          b = e.getTickValues(h, f, g),
          w = [{
            x: 75,
            y: 0
          }, {
            x: 80,
            y: 5
          }, {
            x: 85,
            y: -5
          }, {
            x: 90,
            y: 5
          }, {
            x: 95,
            y: -5
          }, {
            x: 100,
            y: 5
          }, {
            x: 105,
            y: -5
          }, {
            x: 110,
            y: 0
          }],
          E = Math.max(.2 * (f - h), m.getDifferenceTicksDays(g)),
          _ = d.svg.line().x(function (e) {
            return e.x
          }).y(function (e) {
            return e.y
          }).interpolate("linear"),
          C = b.map(function (e) {
            return Math.round(e)
          }),
          T = [C[0], C[C.length - 1]];
        d.select(e.divId() + " > svg > g > g.axis").style("visibility", "hidden"), d.selectAll(s + " .timeline g rect," + s + " .timeline g circle").each(function (e, t) {
          for (var n = parseInt(e.starting_time); n <= parseInt(e.ending_time) + parseInt(m.getDifferenceTicksDays(g)); n += m.getDifferenceTicksDays(g)) - 1 === i.indexOf(n) && i.push(parseInt(n))
        }), i.sort(function (e, t) {
          return e - t
        }), i.forEach(function (e, t) {
          if (e > C[0] && e < C[C.length - 1]) {
            for (var n = 0; n < C.length - 1 && !(e >= C[n] && e <= C[n + 1]); n++); - 1 === T.indexOf(C[n]) && n !== C.length - 1 && T.push(C[n]), -1 === T.indexOf(C[n + 1]) && n !== C.length - 1 && T.push(C[n + 1])
          }
        }), T.sort(function (e, t) {
          return e - t
        });
        var A = 0;
        T.forEach(function (e, t) {
          if (t < T.length - 1) {
            var n = T[t],
              r = T[t + 1],
              i = t + 1,
              l = parseInt((T[t + 1] - T[t]) / m.getDifferenceTicksDays(g)) - 1;
            if (1 === l) T.push(Math.round((n + r) / 2));
            else if (r - n > E)(i - A > 1 || 0 === A && r - n > m.getDifferenceTicksDays(g)) && (o.push(i), a.push(r)), A = i;
            else if (l > 1)
              for (var s = 0; s < l; s++) T.push(n + (s + 1) * m.getDifferenceTicksDays(g))
          }
        }), T.sort(function (e, t) {
          return e - t
        }), o = [];
        for (var k = 0; k < a.length; k++) o.push(T.indexOf(a[k]));
        for (var O = d.time.scale().domain([v.left, y - v.right]).range([v.left, y - v.right]), I = 0, x = 0; x < T.length; x++) {
          o.indexOf(x) > -1 && (I += 30);
          var S = 30 * o.length;
          l.push(v.left + I + x * ((y - v.right - v.left - S) / (T.length - 1)))
        }
        var M = d.svg.axis().scale(O).orient("top").tickValues(l).tickFormat(function (t, n) {
            return e.formatTime(e.daysToTimeObject(T[n]), g)
          }),
          P = (c.append("g").attr("class", "x axis").attr("transform", "translate(0,20)").call(M), c.append("g").attr("class", "kink"));
        for (k = 0; k < T.length; k++)
          if (o.indexOf(k) > -1) {
            var D = (l[k - 1] + l[k]) / 2;
            P.append("rect").attr("height", 10).attr("width", 35).attr("class", "kink-bg").attr("x", D - 17.5).attr("y", 15).attr("fill", "white"), P.append("path").attr("d", _(w)).attr("stroke", "black").attr("stroke-width", 1).attr("fill", "none").attr("class", "kink-line").attr("transform", "translate(" + (D - 92.5) + ",20)")
          }
        d.selectAll(s + " .kink-bg, " + s + " .kink-line").style("cursor", "pointer").on("click", r).append("svg:title").text("Click to expand the timeline");
        var j = l[1] - l[0],
          N = d.transform(d.select(p(s + " .axis .tick")[1]).attr("transform")).translate[0] - d.transform(d.select(p(s + " .axis .tick")[0]).attr("transform")).translate[0],
          R = j / N;
        d.selectAll(s + " [id^=timelineItem]").each(function (e) {
          "circle" === this.tagName ? d.select(this).attr("cx", n(e.starting_time)).attr("r", d.select(this).attr("r")) : "rect" === this.tagName ? (d.select(this).attr("x", n(e.starting_time)), e.hasOwnProperty("display") && "square" === e.display || d.select(this).attr("width", d.select(this).attr("width") * R)) : console.log("No such element as " + this)
        })
      }
    }, Object.setPrototypeOf(s.prototype, l.prototype);
    var m = {
      timelineConstants: {
        ALLOWED_ZOOM_LEVELS: ["days", "3days", "10days", "months", "years"],
        DAYS_PER_YEAR: 365,
        DAYS_PER_MONTH: 30
      },
      getDifferenceTicksDays: function (e) {
        var t;
        switch (e) {
          case "days":
            t = 1;
            break;
          case "3days":
            t = 3;
            break;
          case "10days":
            t = 10;
            break;
          case "months":
            t = 30;
            break;
          case "years":
            t = 365
        }
        return t
      },
      getLowerBoundIndex: function (e, t) {
        for (var n = 0, r = e.length - 1; n < r;) {
          var i = Math.round((n + r) / 2);
          e[i] > t ? r = i - 1 : n = i
        }
        return n
      },
      roundUp: function (e, t) {
        var n = e % t;
        return 0 === t || 0 === n ? e : e < 0 ? -1 * m.roundDown(-1 * e, t) : Math.round(e + t - n)
      },
      roundDown: function (e, t) {
        var n = e % t;
        return 0 === t || 0 === n ? e : e < 0 ? -1 * m.roundUp(-1 * e, t) : Math.round(e - n)
      }
    };
    c.prototype.run = function (e, t) {
      var n = e.divId(),
        r = d.select(n + " svg").append("g").attr("class", "hover-line"),
        i = r.append("line").attr("x1", 0).attr("x2", 0).attr("y1", 20).attr("y2", 268).style("stroke", "#ccc"),
        o = d.select(n + " svg")[0][0].getBoundingClientRect().height,
        a = r.append("text").attr("class", "hover-text").attr("y", o - 10).attr("font-size", 12).attr("fill", "#888"),
        l = t.hoverBegin,
        s = t.hoverEnd,
        u = d.time.scale().domain([l, s]).range([e.getReadOnlyVars().beginning, e.getReadOnlyVars().ending]),
        c = !0;
      r.style("opacity", 0), d.select(n + " svg").on("mousemove", function () {
        var e = d.mouse(this)[0];
        e > l && e < s && (a.text(parseInt(u(e)) + "d"), a.attr("x", e + 4), i.attr("x1", e).attr("x2", e), r.style("opacity", 1), c && p(n + " .timeline g rect, " + n + " .timeline g circle").each(function (t) {
          var r = p(n + " .timeline g rect, " + n + " .timeline g circle")[t],
            i = parseInt(r.getBBox().x),
            o = parseInt(r.getBBox().width);
          e > i + o / 2 - 2 && e < i + o / 2 + 2 ? (p(r).qtip("disable", !1), p(r).qtip("show")) : (p(r).qtip("hide"), p(r).qtip("disable", !0))
        }))
      }).on("mouseout", function () {
        r.style("opacity", 0)
      });
      var f = t.tooltipControllerId;
      p(f).css("visibility", "visible"), p(f + " a").on("click", function () {
        c ? (p(f + " a").text("Show tooltips on vertical-line"), c = !1) : (p(f + " a").text("Hide tooltips on vertical-line"), c = !0)
      })
    }, c.prototype.remove = function (e, t) {
      p(t.tooltipControllerId).css("visibility", "hidden")
    }, Object.setPrototypeOf(c.prototype, l.prototype), f.prototype.run = function (e, t) {
      function n(e, t, n, r, i) {
        d.select(e + " svg").insert("text").attr("transform", "translate(" + (parseInt(t.attr("width")) - i) + ", " + parseInt(t.attr("height") - 5) + ")").attr("class", "timeline-label").text("").attr("id", "timelineZoomExplanation").text(n).style("visibility", r)
      }
      var r = e.getReadOnlyVars(),
        i = r.maxDays,
        o = r.minDays,
        a = r.beginning,
        l = r.ending,
        s = r.margin,
        u = e.divId(),
        c = e.width(),
        f = m.roundDown,
        h = m.roundUp,
        y = e.overviewAxisWidth(),
        v = r.chart,
        g = d.select(u + " svg"),
        b = d.select(u + " svg g"),
        w = b[0][0].getBoundingClientRect();
      if (1 === e.zoomFactor()) {
        var E = function () {
          var t = e.computeZoomLevel(o, i, c),
            n = d.time.scale().domain([f(o, m.getDifferenceTicksDays(t)), h(i, m.getDifferenceTicksDays(t))]).range([0 + s.overviewAxis.left, y - s.overviewAxis.right]);
          e.overviewX(n(C.extent()[0].valueOf()));
          var a = C.extent()[0].valueOf();
          e.zoomFactor((parseInt(c) - parseInt(s.left) - parseInt(s.right)) / parseInt(d.select(e.divId() + " .extent").attr("width"))), e.zoomFactor() > 0 ? e.zoomFactor(Math.min(e.zoomFactor(), e.computeZoomFactor("days", o, i, c))) : e.zoomFactor(e.computeZoomFactor("days", o, i, c));
          var l = e.computeZoomLevel(r.minDays, r.maxDays, e.width() * e.zoomFactor()),
            b = e.getTickValues(r.minDays, r.maxDays, l);
          if (a > o) {
            var w = d.time.scale().domain([b[0], b[b.length - 1]]).range([s.left, c * e.zoomFactor() - s.right]);
            e.translateX(-w(a))
          } else e.translateX(0);
          p("." + u.substr(1) + "-qtip").qtip("hide"), d.select(u).style("visibility", "hidden"), e(), d.select(u).style("visibility", "visible"), d.select(u + " svg").insert("text").attr("transform", "translate(" + (parseInt(g.attr("width")) - 70) + ", " + parseInt(g.attr("height") - 5) + ")").attr("class", "timeline-label").text("Zoom out").style("cursor", "zoom-out").attr("id", "timelineZoomOut").on("click", function () {
            e.zoomFactor(1), e.overviewX(s.overviewAxis.left), p("." + u.substr(1) + "-qtip").qtip("hide"), d.select(u).style("visibility", "hidden"), e(), d.select(u).style("visibility", "visible"), v.scrolledX(null), this.remove()
          })
        };
        if ("days" !== e.computeZoomLevel(o, i, c * e.zoomFactor())) {
          var _ = d.time.scale().domain([a, l]).range([s.left - 10, c - s.right + 10]),
            C = d.svg.brush().x(_).on("brush", function () {
              d.event.target.extent()
            }).on("brushend", E);
          b.insert("g", ".axis").attr("id", "overlayBrush").attr("class", "brush").call(C).selectAll(u + " .extent," + u + " .background," + u + " .resize rect").attr("height", w.height).attr("y", 20).style("cursor", "zoom-in"), n(u, g, "Click + drag to zoom", "hidden", 120), d.select(u + " .background").on("mouseover", function () {
            d.select(u + " #timelineZoomExplanation").style("visibility", "visible")
          }).on("mouseout", function () {
            d.select(u + " #timelineZoomExplanation").style("visibility", "hidden")
          })
        }
      } else n(u, g, "Scroll/drag to move", "visible", 180), d.select(u + " svg").style("cursor", "move")
    }, Object.setPrototypeOf(f.prototype, l.prototype);
    var y = function () {
        "use strict";

        function e(e, t) {
          return e.filter(function (e) {
            return e.label.trim() === t.trim()
          })[0]
        }

        function t() {
          var e = I.filter(function (e) {
            return e.visible
          });
          q = Math.max(A(I), 1), null === H && (q > 300 && (H = 5), q > 600 && (H = 10), q > 900 && (H = 20)), U = Math.min(k(I), 0);
          var r = t.computeZoomLevel(U, q, L * F),
            i = t.getTickValues(U, q, r);
          G = i[0], z = i[i.length - 1], W = L - 200;
          var o = d.timeline().stack().margin(D).tickFormat({
            format: function (e) {
              return t.formatTime(t.daysToTimeObject(e.valueOf()), r)
            },
            tickValues: t.getTickValues(U, q, r),
            tickSize: 6
          }).translate(B).width(L * F).beginning(String(G)).ending(z).stackSlack(H).orient("top").itemHeight(j).itemMargin(N).colors(P);
          p(R).html("");
          var l = d.select(R).append("svg").attr("width", L).attr("class", "timeline");
          l.append("rect").attr("width", "100%").attr("height", "100%").attr("fill", "white"), l.append("defs").html('<filter id="dropshadow" x="0" y="0" width="200%" height="200%">  <feOffset result="offOut" in="SourceAlpha" dx="1.5" dy="1.5" />  <feGaussianBlur result="blurOut" in="offOut" stdDeviation="1" />  <feBlend in="SourceGraphic" in2="blurOut" mode="normal" /></filter>'), l.datum(a(e)).call(o), p(R + " [id^='timelineItem']").each(function () {
            t.addDataPointTooltip(p(this))
          }), p(R + " [id^='timelineItem']").each(function () {
            p(this).on({
              mouseover: function () {
                n(this, 2)
              },
              mouseout: function () {
                n(this, -2)
              }
            })
          }), x && (p(R + " .timeline-label").each(function (e) {
            p(this).prop("__data__")[e].split && !p(this).prop("__data__")[e].parent_track ? C(p(this), I) : T(p(this), I)
          }), l.attr("height", parseInt(l.attr("height")) + 15), l.insert("text").attr("transform", "translate(0," + l.attr("height") + ")").attr("class", "timeline-label").text("Add track").attr("id", "addtrack"), E(p("#addtrack"))), l.insert("text").attr("transform", "translate(0, 15)").attr("class", "timeline-label").text("Time since diagnosis"), d.select(R + " .axis").attr("transform", "translate(0,20)"), p(R + " .timeline-label").each(function (e, t) {
            t.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
          }), d.select(R + " svg").insert("rect", ".timeline-label").attr("width", 130).attr("height", l.attr("height")).attr("x", 0).attr("y", 0).style("fill", "rgb(255, 255, 255)"), p(R + " [id^='timelineItem']").css("cursor", "pointer");
          d.select(R).append("svg").attr("height", 75).attr("width", W).attr("class", "overview").style("display", "none");
          M = {
            beginning: G,
            ending: z,
            minDays: U,
            maxDays: q,
            margin: D,
            chart: o
          }, S.forEach(function (e) {
            var n = e.obj;
            n.run instanceof Function && e.enabled ? n.run(t, e.obj.spec) : n.enabled || n.remove(t, e.obj.spec)
          }), V.forEach(function (e) {
            e.call()
          })
        }

        function n(e, t) {
          p(e).attr("r", parseInt(p(e).attr("r")) + t), p(e).attr("height", parseInt(p(e).attr("height")) + t)
        }

        function r(e) {
          var t = !1;
          return e.times.forEach(function (e) {
            parseInt(e.starting_time) !== parseInt(e.ending_time) && (t = !0)
          }), t
        }

        function i(e) {
          for (var t = [], n = 0; n < e.times.length; n++) {
            var r = e.times[n];
            if (r.tooltip_tables.length > 1)
              for (var i = 0; i < r.tooltip_tables.length; i++) t = t.concat({
                starting_time: r.starting_time,
                ending_time: r.ending_time,
                display: "circle",
                tooltip_tables: [r.tooltip_tables[i]]
              });
            else t = t.concat(r)
          }
          e.times = t
        }

        function o(e) {
          if (e && 0 !== e.times.length) {
            for (var t, n = [], r = [], i = e.times.sort(function (e, t) {
                return parseInt(e.starting_time) - parseInt(t.starting_time)
              }), o = function (e, t) {
                return 1 === t.length ? t[0] : {
                  starting_time: e,
                  ending_time: e,
                  display: "dropshadow circle",
                  tooltip_tables: h.reduce(t.map(function (e) {
                    return e.tooltip_tables
                  }), function (e, t) {
                    return e.concat(t)
                  }, [])
                }
              }, a = 0; a < i.length; a++) {
              var l = i[a];
              parseInt(l.starting_time) === t ? r = r.concat(l) : (r.length > 0 && (n = n.concat(o(t, r))), r = [l], t = parseInt(l.starting_time))
            }
            n = n.concat(o(t, r)), e.times = n
          }
        }

        function a(e) {
          return e.filter(function (e) {
            return e.collapse && !r(e)
          }).forEach(o), e
        }

        function l(t, n) {
          return h.union.apply(h, e(t, n).times.map(function (e) {
            return h.union.apply(h, e.tooltip_tables.map(function (e) {
              return e.map(function (e) {
                return e[0]
              })
            }))
          }))
        }

        function s(t, n) {
          return h.groupBy(e(I, t).times, function (e) {
            return 1 === e.tooltip_tables.length ? h.reduce(e.tooltip_tables[0], function (e, t) {
              return e[t[0]] = t[1], e
            }, {})[n] : void 0
          })
        }

        function u(e, t) {
          "string" == typeof t && (t = [t]);
          for (var n, r = [e], i = 0; i < t.length; i++) {
            var o = t[i];
            n = [];
            for (var a = 0; a < r.length; a++) n = n.concat(c(r[a], o));
            r = n
          }
        }

        function c(t, n) {
          i(e(I, t));
          var r = s(t, n);
          if ("undefined" in r) return [];
          var o = h.findIndex(I, function (e) {
              return e.label === t
            }),
            a = I[o].split ? t.match(new RegExp("^ *"))[0] : "";
          a += "    ", I = I.filter(function (e) {
            return e.label !== t
          }), I.splice(o, 0, {
            label: t,
            times: [],
            visible: !0,
            split: !0
          });
          for (var l = h.sortBy(Object.keys(r), function (e) {
              return h.min(h.pluck(r[e], "starting_time"))
            }), u = 0; u < l.length; u++) I.splice(o + u + 1, 0, {
            label: a + l[u],
            times: r[l[u]],
            visible: !0,
            split: !0,
            parent_track: t
          });
          return l.map(function (e) {
            return a + e
          })
        }

        function f(e) {
          var n = I.filter(function (t) {
              return p.trim(t.label) === p.trim(e) && t.split
            })[0],
            r = I.filter(function (t) {
              return t.split && t.parent_track === e
            }).reduce(function (e, t) {
              return e.concat(t.times)
            }, []);
          n.times = r, n.visible = !0, n.label = e, delete n.split, I = I.filter(function (t) {
            return !(t.split && t.parent_track === e)
          }), t()
        }

        function y(t, n, r, i) {
          var o = e(I, t).times.map(function (e) {
              return 1 === e.tooltip_tables.length ? parseFloat(String(e.tooltip_tables[0].filter(function (e) {
                return e[0] === n
              })[0][1]).replace(/[^\d.-]/g, "")) : void 0
            }),
            a = d.scale.linear().domain([d.min(o), d.max(o)]).range([r, i]);
          e(I, t).times.forEach(function (e) {
            1 === e.tooltip_tables.length && (e.size = a(parseFloat(String(e.tooltip_tables[0].filter(function (e) {
              return e[0] === n
            })[0][1]).replace(/[^\d.-]/g, ""))) || r)
          })
        }

        function v(e, t) {
          var n = s(e, t);
          Object.keys(n).forEach(function (e) {
            n[e].forEach(function (t) {
              t.color = P(e)
            })
          })
        }

        function g(t) {
          for (var n = e(I, t).times, r = 0; r < n.length; r++) "color" in n[r] && delete n[r].color
        }

        function b(t) {
          var n = e(I, t);
          n.visible = !n.visible
        }

        function w(t) {
          var n = e(I, t);
          n.collapse ? (n.collapse = !1, i(n)) : r(n) || (n.collapse = !0)
        }

        function E(e) {
          e.qtip({
            content: {
              text: "addtrack"
            },
            events: {
              render: function (e, n) {
                if (invisibleTracks = I.filter(function (e) {
                    return !e.visible
                  }), 0 === invisibleTracks.length) p(this).html("All tracks shown");
                else {
                  for (var r = "", i = 0; i < invisibleTracks.length; i++) r += "<a href='#' onClick='return false' class='show-track'>" + invisibleTracks[i].label + "</a><br />";
                  p(this).html(r), p(".show-track").each(function () {
                    p(this).on("click", function () {
                      b(p(this).prop("innerHTML")), p(this).remove(), t()
                    })
                  })
                }
              }
            },
            show: {
              event: "mouseover"
            },
            hide: {
              fixed: !0,
              delay: 0,
              event: "mouseout"
            },
            style: {
              classes: "qtip-light qtip-rounded qtip-wide"
            },
            position: {
              my: "top middle",
              at: "top middle",
              viewport: p(window)
            }
          })
        }

        function _(e, n, r) {
          function i() {
            v(n, p(this).prop("innerHTML")), t()
          }

          function o() {
            u(n, p(this).prop("innerHTML")), t()
          }

          function a() {
            y(n, p(this).prop("innerHTML"), 2, j), t()
          }
          e.qtip({
            content: {
              text: ""
            },
            events: {
              render: function (e, t) {
                "color" === r ? clickHandler = i : "split" === r ? clickHandler = o : "size" === r ? clickHandler = a : console.log("Unknown clickHandler for clinical attributes tooltip.");
                for (var s = p.parseHTML("<div class='color-by-attr-tooltip'></div>"), u = l(I, n), c = 0; c < u.length; c++) {
                  var f = p.parseHTML("<a href='#' onClick='return false'>" + u[c] + "</a>");
                  p(f).on("click", clickHandler), p(s).append(f), p(s).append("<br />")
                }
                p(this).html(s)
              }
            },
            show: {
              event: "click"
            },
            hide: {
              fixed: !0,
              delay: 0,
              event: "mouseout"
            },
            style: {
              classes: "qtip-light qtip-rounded qtip-wide"
            },
            position: {
              my: "left middle",
              at: "top middle",
              viewport: p(window)
            }
          })
        }

        function C(e, t) {
          function n(e) {
            return function () {
              f(e)
            }
          }
          e.qtip({
            content: {
              text: "track"
            },
            events: {
              render: function (t, r) {
                var i = p.parseHTML("<div class='track-toolip'></div>"),
                  o = p.parseHTML("<a href='#' onClick='return false' class='hide-track'>Unsplit</a>");
                p(o).on("click", n(e.prop("innerHTML").split(".")[0])), p(i).append(o), p(this).html(i)
              }
            },
            show: {
              event: "mouseover"
            },
            hide: {
              fixed: !0,
              delay: 0,
              event: "mouseout"
            },
            style: {
              classes: "qtip-light qtip-rounded qtip-wide"
            },
            position: {
              my: "top middle",
              at: "top middle",
              viewport: p(window)
            }
          })
        }

        function T(n, i) {
          function o(e) {
            return function () {
              b(e), t()
            }
          }

          function a(e) {
            return function () {
              w(e), t()
            }
          }
          n.qtip({
            content: {
              text: "track"
            },
            events: {
              render: function (i, l) {
                var s = p.parseHTML("<div class='track-toolip'></div>"),
                  u = p.parseHTML("<a href='#' onClick='return false' class='hide-track'>Hide " + n.prop("innerHTML") + "</a>");
                p(u).on("click", o(n.prop("innerHTML"))), p(s).append(u), p(s).append("<br />"), r(e(I, n.prop("innerHTML"))) || (u = p.parseHTML("<a href='#' onClick='return false' class='hide-track'>Collapse/Stack</a>"), p(u).on("click", a(n.prop("innerHTML"))), p(s).append(u), p(s).append("<br />"));
                var c = p.parseHTML("<a href='#' onClick='return false' class='color-by-attr'>Color by</a>");
                p(s).append(c);
                var f = p.parseHTML("&nbsp;<a href='#' onClick='return false'>Clear</a>");
                p(f).on("click", function () {
                  g(n.prop("innerHTML")), t()
                }), p(s).append(f), p(s).append("<br />");
                var d = p.parseHTML("<a href='#' onClick='return false' class='split-by-attr'>Split by</a>");
                p(s).append(d), p(s).append("<br />");
                var h = p.parseHTML("<a href='#' onClick='return false' class='split-by-attr'>Size by</a>");
                p(s).append(h), p(this).html(s), _(p(c), n.prop("innerHTML"), "color"), _(p(d), n.prop("innerHTML"), "split"), _(p(h), n.prop("innerHTML"), "size")
              }
            },
            show: {
              event: "mouseover"
            },
            hide: {
              fixed: !0,
              delay: 0,
              event: "mouseout"
            },
            style: {
              classes: "qtip-light qtip-rounded qtip-wide"
            },
            position: {
              my: "top middle",
              at: "top middle",
              viewport: p(window)
            }
          })
        }

        function A(e) {
          return Math.max.apply(Math, e.map(function (e) {
            return Math.max.apply(Math, e.times.map(function (e) {
              return e.ending_time || 0
            }))
          }))
        }

        function k(e) {
          return Math.min.apply(Math, e.map(function (e) {
            return Math.min.apply(Math, e.times.map(function (e) {
              return e.starting_time
            }))
          }))
        }

        function O(e, t) {
          return Math.max(e, t) - Math.min(e, t)
        }
        var I, x, S, M, P = d.scale.category20(),
          D = {
            left: 200,
            right: 30,
            top: 15,
            bottom: 0,
            overviewAxis: {
              left: 15,
              right: 15
            }
          },
          j = 6,
          N = 8,
          R = null,
          L = null,
          F = 1,
          V = [],
          H = null,
          B = 0,
          G = 0,
          z = 0,
          U = 0,
          q = 0,
          W = 0,
          Q = D.overviewAxis.left;
        return t.addDataPointTooltip = function (e) {
          function t(e) {
            return {
              sDom: "t",
              bJQueryUI: !0,
              bDestroy: !0,
              aaData: e,
              aoColumnDefs: [{
                aTargets: [0],
                sClass: "left-align-td",
                mRender: function (e, t, n) {
                  return "<b>" + e + "</b>"
                }
              }, {
                aTargets: [1],
                sClass: "left-align-td",
                bSortable: !1
              }],
              fnDrawCallback: function (e) {
                p(e.nTHead).hide()
              },
              aaSorting: []
            }
          }
          e.qtip({
            content: {
              text: "table"
            },
            events: {
              render: function (n, r) {
                var i, o = p.parseHTML("<div></div>"),
                  a = e.prop("__data__");
                if ("tooltip_tables" in a)
                  for (var l = 0; l < a.tooltip_tables.length; l++) 0 !== l && p(o).append("<hr />"), i = p.parseHTML("<table style='text-align:left; background-color: white;'></table>"), p(i).dataTable(t(a.tooltip_tables[l])), p(o).append(i);
                else "tooltip" in a && (i = p.parseHTML("<table style='text-align:left; background-color: white;'></table>"), p(i).dataTable(t(a.tooltip)), p(o).append(i));
                p(this).html(o), p(this).addClass(R.substr(1) + "-qtip"), r.elements.target.click(function (e) {
                  r.wasClicked ? (r.hide(), r.wasClicked = !1) : r.wasClicked = !r.wasClicked
                })
              },
              hide: function (e, t) {
                if (t.wasClicked && "mouseleave" === e.originalEvent.type || !t.wasClicked && "click" === e.originalEvent.type) try {
                  e.preventDefault()
                } catch (e) {
                  console.log(e.message)
                }
              }
            },
            show: {
              event: "mouseover"
            },
            hide: {
              event: "mouseleave"
            },
            style: {
              classes: "qtip-light qtip-rounded qtip-wide"
            },
            position: {
              my: "top middle",
              at: "bottom middle",
              viewport: p(window)
            }
          })
        }, t.daysToTimeObject = function (e) {
          var t = {},
            n = m.timelineConstants.DAYS_PER_YEAR,
            r = m.timelineConstants.DAYS_PER_MONTH;
          return t.daysPerYear = n, t.daysPerMonth = r, t.y = e > 0 ? Math.floor(e / n) : Math.ceil(e / n), t.m = e > 0 ? Math.floor(e % n / r) : Math.ceil(e % n / r), t.d = Math.floor(e % n % r), t.toDays = function () {
            return t.y * t.daysPerYear + t.m * t.daysPerMonth + t.d
          }, t.toMonths = function () {
            return 12 * t.y + t.m + t.d / r
          }, t.toYears = function () {
            return t.y + t.m / 12 + t.d / n
          }, t
        }, t.formatTime = function (e, t) {
          var n, r, i, o = [];
          if (m.timelineConstants.ALLOWED_ZOOM_LEVELS.indexOf(t) > -1)
            if (0 === e.y && 0 === e.m && 0 === e.d) o = "0";
            else switch (t) {
              case "days":
              case "3days":
              case "10days":
                n = e.toDays(), o = n + "d";
                break;
              case "months":
                r = e.m + 12 * e.y, o = r + "m";
                break;
              case "years":
                i = e.y, o = i + "y"
            } else console.log("Undefined zoomLevel");
          return o
        }, t.computeZoomLevel = function (e, t, n) {
          var r = parseFloat(parseInt(n) / O(parseInt(e), parseInt(t)));
          return r < 1 ? "years" : r < 10 ? "months" : r < 25 ? "10days" : r < 50 ? "3days" : "days"
        }, t.computeZoomFactor = function (e, t, n, r) {
          switch (e) {
            case "years":
              return .9 * O(parseInt(t), parseInt(n)) / parseInt(r);
            case "months":
              return 19 * O(parseInt(t), parseInt(n)) / parseInt(r);
            case "10days":
              return 34 * O(parseInt(t), parseInt(n)) / parseInt(r);
            case "3days":
              return 49 * O(parseInt(t), parseInt(n)) / parseInt(r);
            case "days":
              return 51 * O(parseInt(t), parseInt(n)) / parseInt(r);
            default:
              throw "Undefined zoomLevel: " + e
          }
        }, t.getTickValues = function (e, n, r) {
          var i, o = [],
            a = t.daysToTimeObject(parseInt(n)),
            l = t.daysToTimeObject(parseInt(e)),
            s = m.roundDown,
            u = m.roundUp;
          if ("years" === r)
            for (i = s(l.toYears(), 1); i <= u(a.toYears(), 1); i++) o.push(i * a.daysPerYear);
          else if ("months" === r)
            for (i = s(l.toMonths(), 1); i <= u(a.toMonths(), 1); i++) o.push(i * a.daysPerMonth + 5 * parseInt(i / 12));
          else if ("10days" === r)
            for (i = s(l.toDays(), 10); i <= u(a.toDays(), 10); i += 10) o.push(i);
          else if ("3days" === r)
            for (i = s(l.toDays(), 3); i <= u(a.toDays(), 3); i += 3) o.push(i);
          else
            for (i = l.toDays(); i <= a.toDays(); i++) o.push(i);
          return o
        }, t.enableTrackTooltips = function (e) {
          return arguments.length ? (x = e, t) : x
        }, t.width = function (e) {
          return arguments.length ? (L = e, t) : L
        }, t.overviewAxisWidth = function (e) {
          return arguments.length ? (W = e, t) : W
        }, t.stackSlack = function () {
          return arguments.length ? t : H
        }, t.data = function (e) {
          return arguments.length ? (I = e, t) : I
        }, t.divId = function (e) {
          return arguments.length ? (R = e, t) : R
        }, t.plugins = function (e) {
          return arguments.length ? (S = e, t) : S
        }, t.pluginSetOrGetState = function (e, n) {
          S.forEach(function (r, i) {
            if (r.obj.id === e) {
              if ("boolean" != typeof n) return r.enabled;
              r.enabled = n, t()
            }
          })
        }, t.zoomFactor = function (e) {
          if (!arguments.length) return F;
          F = e
        }, t.overviewX = function (e) {
          if (!arguments.length) return Q;
          Q = e
        }, t.translateX = function (e) {
          if (!arguments.length) return B;
          B = e
        }, t.getReadOnlyVars = function () {
          return M
        }, t.collapseAll = function () {
          var e = I.filter(function (e) {
            return !r(e)
          });
          return e.forEach(o), e.forEach(function (e) {
            e.collapse = !0
          }), t
        }, t.orderTracks = function (n) {
          if (!arguments.length) return I = h.sortBy(I, "label"), t;
          for (var r, i = [], o = 0; o < n.length; o++)(r = e(I, n[o])) && (i = i.concat(r));
          return i = i.concat(h.sortBy(I.filter(function (e) {
            return -1 === n.indexOf(e.label)
          }), "label")), I = i, t
        }, t.orderTrackTooltipTables = function (n, r) {
          var i = e(I, n);
          if (0 === i.times.length) return t;
          var o, a = h.uniq(i.times.map(function (e) {
            return e.tooltip_tables.map(function (e) {
              return e.map(function (e) {
                if (-1 === r.indexOf(e[0])) return e[0]
              })
            })
          }).reduce(function (e, t) {
            return e.concat(t)
          }, []).reduce(function (e, t) {
            return e.concat(t)
          }, [])).sort();
          return o = a && a[0] ? r.concat(a) : r, i.times.forEach(function (e) {
            for (var t = 0; t < e.tooltip_tables.length; t++) {
              for (var n = e.tooltip_tables[t], r = [], i = 0; i < o.length; i++) {
                var a = n.filter(function (e) {
                  return e[0] === o[i]
                })[0];
                a && (r = r.concat([a]))
              }
              e.tooltip_tables[t] = r
            }
          }), t
        }, t.orderAllTooltipTables = function (e) {
          return I.forEach(function (n) {
            t.orderTrackTooltipTables(n.label, e)
          }), t
        }, t.splitByClinicalAttributes = function (n, r) {
          return e(I, n) && u(n, r), t
        }, t.sizeByClinicalAttribute = function (n, r) {
          var i = e(I, n);
          if (i) {
            1 === i.times[0].tooltip_tables[0].filter(function (e) {
              return e[0] === r
            }).length && y(n, r, 2, j)
          }
          return t
        }, t.toggleTrackCollapse = function (n) {
          return e(I, n) && w(n), t
        }, t.setTimepointsDisplay = function (n, r) {
          var i = e(I, n);
          return i && i.times.forEach(function (e) {
            1 === e.tooltip_tables.length && (e.display = r)
          }), t
        }, t.addPostTimelineHook = function (e) {
          return V = V.concat(e), t
        }, t
      },
      v = function () {
        function e(e) {
          var n = function (e) {
              var n = {
                label: t(e[0].eventType),
                visible: !0,
                times: []
              };
              return e.forEach(function (e) {
                var t = {
                  starting_time: e.startDate,
                  ending_time: null !== e.stopDate ? e.stopDate : e.startDate,
                  display: null !== e.stopDate ? "rect" : "circle",
                  tooltip_tables: [Object.keys(e.eventData).map(function (t) {
                    return [t, e.eventData[t]]
                  })]
                };
                t.tooltip_tables[0].push(["START_DATE", e.startDate]), null !== e.stopDate && t.tooltip_tables[0].push(["STOP_DATE", e.stopDate]), n.times.push(t)
              }), n
            },
            r = h.groupBy(e, "eventType"),
            i = [];
          return h.each(r, function (e) {
            i.push(n(e))
          }), i
        }

        function t(e) {
          return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()
        }
        return e
      }();
    ! function () {
      function e(e) {
        for (var n = 0; n < e.length; n++) t(e[n])
      }

      function t(e) {
        required_track_attrs = ["label", "times", "visible"];
        for (var t = 0; t < required_track_attrs.length; t++)
          if (!(required_track_attrs[t] in e)) throw required_track_attrs[t] + " not in track";
        n(e.times)
      }

      function n(e) {
        for (var t = 0; t < e.length; t++) r(e[t])
      }

      function r(e) {
        return i(e.tooltip_tables)
      }

      function i(e) {
        for (var t = 0; t < e.length; t++) o(e[t])
      }

      function o(e) {
        if (!e) throw "tooltip_table err no table: " + e;
        for (var t = 0; t < e.length; t++) {
          if (!e[t]) throw "tooltip_table err missing array: " + e[t];
          if (2 !== e[t].length) throw "tooltip_table err expected array of key and value pair: " + e[t]
        }
      }
    }();
    t.clinicalTimeline = y, t.trimClinicalTimeline = s, t.clinicalTimelineParser = v
  },
  1122: function (e, t) {},
  1123: function (e, t, n) {
    e.exports = n(6)(1267)
  },
  1124: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      s = function e(t, n, r) {
        null === t && (t = Function.prototype);
        var i = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === i) {
          var o = Object.getPrototypeOf(t);
          return null === o ? void 0 : e(o, n, r)
        }
        if ("value" in i) return i.value;
        var a = i.get;
        if (void 0 !== a) return a.call(r)
      },
      u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      c = n(1),
      f = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(c),
      p = n(13),
      d = n(33),
      h = n(974),
      m = r(h),
      y = n(926),
      v = r(y),
      g = n(1125),
      b = r(g),
      w = n(1060),
      E = r(w),
      _ = n(180),
      C = function (e, t, n, r) {
        var i, o = arguments.length,
          a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : u(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
        else
          for (var l = e.length - 1; l >= 0; l--)(i = e[l]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return o > 3 && a && Object.defineProperty(t, n, a), a
      },
      T = function (e) {
        function t(e) {
          return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        }
        return a(t, e), l(t, [{
          key: "getSamples",
          value: function () {
            return this.props.sampleIds ? this.props.sampleIds : []
          }
        }, {
          key: "generateColumns",
          value: function () {
            var e = this;
            s(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "generateColumns", this).call(this), this._columns[h.MutationTableColumnType.TUMOR_ALLELE_FREQ] = {
              name: "Allele Freq",
              render: function (t) {
                return b.default.renderFunction(t, e.props.sampleManager)
              },
              sortBy: function (t) {
                return b.default.getSortValue(t, e.props.sampleManager)
              },
              download: function (e) {
                return b.default.getFrequency(e)
              },
              tooltip: f.createElement("span", null, "Variant allele frequency in the tumor sample"),
              visible: b.default.isVisible(this.props.sampleManager, this.props.dataStore ? this.props.dataStore.allData : this.props.data)
            }, this._columns[h.MutationTableColumnType.TUMORS] = {
              name: "Tumors",
              render: function (t) {
                return E.default.renderFunction(t, e.props.sampleManager)
              },
              sortBy: function (t) {
                return E.default.getSortValue(t, e.props.sampleManager)
              },
              download: function (e) {
                return E.default.getSample(e)
              }
            }, this._columns[h.MutationTableColumnType.REF_READS_N].render = function (t) {
              return v.default.renderFunction(t, e.getSamples(), "normalRefCount")
            }, this._columns[h.MutationTableColumnType.REF_READS_N].download = function (e) {
              return v.default.getReads(e, "normalRefCount")
            }, this._columns[h.MutationTableColumnType.VAR_READS_N].render = function (t) {
              return v.default.renderFunction(t, e.getSamples(), "normalAltCount")
            }, this._columns[h.MutationTableColumnType.VAR_READS_N].download = function (e) {
              return v.default.getReads(e, "normalAltCount")
            }, this._columns[h.MutationTableColumnType.REF_READS].render = function (t) {
              return v.default.renderFunction(t, e.getSamples(), "tumorRefCount")
            }, this._columns[h.MutationTableColumnType.REF_READS].download = function (e) {
              return v.default.getReads(e, "tumorRefCount")
            }, this._columns[h.MutationTableColumnType.VAR_READS].render = function (t) {
              return v.default.renderFunction(t, e.getSamples(), "tumorAltCount")
            }, this._columns[h.MutationTableColumnType.VAR_READS].download = function (e) {
              return v.default.getReads(e, "tumorAltCount")
            }, this._columns[h.MutationTableColumnType.TUMORS].order = 5, this._columns[h.MutationTableColumnType.GENE].order = 20, this._columns[h.MutationTableColumnType.PROTEIN_CHANGE].order = 30, this._columns[h.MutationTableColumnType.ANNOTATION].order = 35, this._columns[h.MutationTableColumnType.FUNCTIONAL_IMPACT].order = 38, this._columns[h.MutationTableColumnType.CHROMOSOME].order = 40, this._columns[h.MutationTableColumnType.START_POS].order = 50, this._columns[h.MutationTableColumnType.END_POS].order = 60, this._columns[h.MutationTableColumnType.REF_ALLELE].order = 70, this._columns[h.MutationTableColumnType.VAR_ALLELE].order = 80, this._columns[h.MutationTableColumnType.MUTATION_STATUS].order = 90, this._columns[h.MutationTableColumnType.VALIDATION_STATUS].order = 100, this._columns[h.MutationTableColumnType.MUTATION_TYPE].order = 110, this._columns[h.MutationTableColumnType.CENTER].order = 120, this._columns[h.MutationTableColumnType.TUMOR_ALLELE_FREQ].order = 130, this._columns[h.MutationTableColumnType.VAR_READS].order = 140, this._columns[h.MutationTableColumnType.REF_READS].order = 150, this._columns[h.MutationTableColumnType.VAR_READS_N].order = 170, this._columns[h.MutationTableColumnType.REF_READS_N].order = 180, this._columns[h.MutationTableColumnType.COPY_NUM].order = 181, this._columns[h.MutationTableColumnType.MRNA_EXPR].order = 182, this._columns[h.MutationTableColumnType.COHORT].order = 183, this._columns[h.MutationTableColumnType.COSMIC].order = 184, this._columns[h.MutationTableColumnType.MRNA_EXPR].shouldExclude = function () {
              return !e.props.mrnaExprRankMolecularProfileId || e.getSamples().length > 1
            }, this._columns[h.MutationTableColumnType.TUMORS].shouldExclude = function () {
              return e.getSamples().length < 2 && !e.hasUncalledMutations
            }, this._columns[h.MutationTableColumnType.COPY_NUM].shouldExclude = function () {
              return !e.props.discreteCNAMolecularProfileId || e.getSamples().length > 1
            }
          }
        }, {
          key: "hasUncalledMutations",
          get: function () {
            var e = [];
            return this.props.data ? e = this.props.data : this.props.dataStore && (e = this.props.dataStore.allData), e.some(function (e) {
              return e.some(function (e) {
                return (0, _.isUncalled)(e.molecularProfileId)
              })
            })
          }
        }]), t
      }(m.default);
    T.defaultProps = Object.assign({}, m.default.defaultProps, {
      initialItemsPerPage: 10,
      paginationProps: {
        itemsPerPageOptions: [10, 25, 50, 100]
      },
      columns: [h.MutationTableColumnType.COHORT, h.MutationTableColumnType.MRNA_EXPR, h.MutationTableColumnType.COPY_NUM, h.MutationTableColumnType.ANNOTATION, h.MutationTableColumnType.REF_READS_N, h.MutationTableColumnType.VAR_READS_N, h.MutationTableColumnType.REF_READS, h.MutationTableColumnType.VAR_READS, h.MutationTableColumnType.START_POS, h.MutationTableColumnType.END_POS, h.MutationTableColumnType.REF_ALLELE, h.MutationTableColumnType.VAR_ALLELE, h.MutationTableColumnType.MUTATION_STATUS, h.MutationTableColumnType.VALIDATION_STATUS, h.MutationTableColumnType.CENTER, h.MutationTableColumnType.GENE, h.MutationTableColumnType.CHROMOSOME, h.MutationTableColumnType.PROTEIN_CHANGE, h.MutationTableColumnType.MUTATION_TYPE, h.MutationTableColumnType.FUNCTIONAL_IMPACT, h.MutationTableColumnType.COSMIC, h.MutationTableColumnType.TUMOR_ALLELE_FREQ, h.MutationTableColumnType.TUMORS]
    }), C([p.computed], T.prototype, "hasUncalledMutations", null), T = C([d.observer], T), t.default = T
  },
  1125: function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      a = n(1),
      l = r(a),
      s = n(3),
      u = r(s),
      c = n(173),
      f = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(c);
    n(288);
    var p = n(180),
      d = function () {
        function e() {
          i(this, e)
        }
        return o(e, null, [{
          key: "getComponentForSampleArgs",
          value: function (e) {
            var t = e.tumorAltCount,
              n = 1,
              r = "";
            return (0, p.isUncalled)(e.molecularProfileId) && (t > 0 ? (n = .1, r = "Mutation has supporting reads, but wasn't called") : (n = 0, r = "Mutation has 0 supporting reads and wasn't called")), {
              opacity: n,
              extraTooltipText: r
            }
          }
        }, {
          key: "convertMutationToSampleElement",
          value: function (t, n, r, i) {
            var o = t.tumorAltCount,
              a = t.tumorRefCount;
            if (o < 0 || a < 0) return null;
            var s = o / (o + a),
              u = (isNaN(s) ? 0 : s) * e.maxBarHeight,
              c = e.maxBarHeight - u,
              f = l.createElement("rect", {
                x: r,
                y: c,
                width: e.barWidth,
                height: u,
                fill: n
              }),
              d = ((0, p.isUncalled)(t.molecularProfileId) ? "(uncalled) " : "") + "(" + o + " variant reads out of " + (o + a) + " total)",
              h = l.createElement("span", null, l.createElement("strong", null, s.toFixed(2)), " ", d);
            return {
              sampleId: t.sampleId,
              bar: f,
              component: i,
              text: h,
              freq: s
            }
          }
        }, {
          key: "renderFunction",
          value: function (t, n) {
            if (!n) return l.createElement("span", null);
            var r = n.getSampleIdsInOrder(),
              i = r.reduce(function (t, n, r) {
                return t[n] = e.indexToBarLeft(r), t
              }, {}),
              o = t.map(function (t) {
                var r = e.getComponentForSampleArgs(t);
                return e.convertMutationToSampleElement(t, n.getColorForSample(t.sampleId), i[t.sampleId], n.getComponentForSample(t.sampleId, r.opacity, r.extraTooltipText))
              }),
              a = o.reduce(function (e, t) {
                return t && (e[t.sampleId] = t), e
              }, {}),
              s = r.map(function (e) {
                return a[e]
              }).filter(function (e) {
                return !!e
              }),
              u = s.map(function (e) {
                return l.createElement("span", {
                  key: e.sampleId
                }, e.component, "  ", e.text, l.createElement("br", null))
              }),
              c = r.map(function (e) {
                return a[e] && a[e].freq || void 0
              }),
              p = s.map(function (e) {
                return e.bar
              }),
              d = l.createElement("span", null);
            if (1 === n.samples.length ? d = l.createElement("span", null, isNaN(c[0]) ? "" : c[0].toFixed(2)) : u.length > 0 && (d = l.createElement("svg", {
                width: e.getSVGWidth(r.length),
                height: e.maxBarHeight
              }, p)), u.length > 0) {
              var h = function () {
                return l.createElement("span", null, u)
              };
              d = l.createElement(f.default, {
                placement: "left",
                overlay: h,
                arrowContent: l.createElement("div", {
                  className: "rc-tooltip-arrow-inner"
                }),
                destroyTooltipOnHide: !0
              }, d)
            }
            return d
          }
        }, {
          key: "getSVGWidth",
          value: function (t) {
            return t * e.barWidth + (t - 1) * e.barSpacing
          }
        }, {
          key: "getSortValue",
          value: function (t, n) {
            if (!n) return [null];
            var r = t.reduce(function (e, t) {
              return e[t.sampleId] = t, e
            }, {});
            return n.getSampleIdsInOrder().map(function (e) {
              return r[e]
            }).map(function (t) {
              return e.calcFrequency(t)
            })
          }
        }, {
          key: "isVisible",
          value: function (e, t) {
            if (t) {
              var n = !0,
                r = !1,
                i = void 0;
              try {
                for (var o, a = t[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                  var l = o.value,
                    s = this.getSortValue(l, e);
                  if (u.compact(s).length > 0) return !0
                }
              } catch (e) {
                r = !0, i = e
              } finally {
                try {
                  !n && a.return && a.return()
                } finally {
                  if (r) throw i
                }
              }
            }
            return !1
          }
        }, {
          key: "getFrequency",
          value: function (t) {
            var n = [];
            if (t) {
              var r = !0,
                i = !1,
                o = void 0;
              try {
                for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done); r = !0) {
                  var s = a.value,
                    u = e.calcFrequency(s),
                    c = null === u ? "" : String(u);
                  n.push(c)
                }
              } catch (e) {
                i = !0, o = e
              } finally {
                try {
                  !r && l.return && l.return()
                } finally {
                  if (i) throw o
                }
              }
            }
            return 1 === n.length ? n[0] : n
          }
        }, {
          key: "calcFrequency",
          value: function (e) {
            if (!e) return null;
            var t = e.tumorAltCount,
              n = e.tumorRefCount;
            return t < 0 || n < 0 ? null : t / (t + n)
          }
        }]), e
      }();
    t.default = d, d.barWidth = 6, d.barSpacing = 3, d.maxBarHeight = 12, d.indexToBarLeft = function (e) {
      return e * (d.barWidth + d.barSpacing)
    }
  },
  1126: function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      u = n(1),
      c = r(u),
      f = n(176),
      p = n(3),
      d = r(p),
      h = n(1061),
      m = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(h),
      y = n(33),
      v = function (e, t, n, r) {
        var i, o = arguments.length,
          a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : s(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
        else
          for (var l = e.length - 1; l >= 0; l--)(i = e[l]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return o > 3 && a && Object.defineProperty(t, n, a), a
      },
      g = function (e) {
        function t(e) {
          i(this, t);
          var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return n.state = {
            pdfUrl: n.buildPDFUrl(e.pdfs[0].url)
          }, n.handleSelection = n.handleSelection.bind(n), n
        }
        return a(t, e), l(t, [{
          key: "buildPDFUrl",
          value: function (e) {
            return "https://docs.google.com/viewerng/viewer?url=" + e + "?pid=explorer&efh=false&a=v&chrome=false&embedded=true"
          }
        }, {
          key: "shouldComponentUpdate",
          value: function (e) {
            return e === this.props
          }
        }, {
          key: "handleSelection",
          value: function () {
            this.setState({
              pdfUrl: this.buildPDFUrl(this.pdfSelectList.options[this.pdfSelectList.selectedIndex].value)
            })
          }
        }, {
          key: "render",
          value: function () {
            var e = this;
            return c.createElement("div", null, c.createElement(f.If, {
              condition: this.props.pdfs.length > 1
            }, c.createElement("select", {
              ref: function (t) {
                return e.pdfSelectList = t
              },
              style: {
                marginBottom: 15
              },
              onChange: this.handleSelection
            }, d.map(this.props.pdfs, function (e) {
              return c.createElement("option", {
                value: e.url
              }, e.name)
            }))), c.createElement(m.default, {
              height: 700,
              url: this.state.pdfUrl
            }))
          }
        }]), t
      }(c.Component);
    g = v([y.observer], g), t.default = g
  },
  1127: function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      l = n(1),
      s = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(l),
      u = function (e) {
        function t() {
          return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return o(t, e), a(t, [{
          key: "render",
          value: function () {
            return s.createElement("div", {
              className: "alert alert-danger urlError",
              role: "alert"
            }, s.createElement("i", {
              className: "fa fa-warning",
              "aria-hidden": "true"
            }), s.createElement("h3", null, "The URL is invalid"), s.createElement("ul", null, this.props.urlValidationError.split(".").map(function (e) {
              return e.length > 0 ? s.createElement("li", null, e) : null
            })))
          }
        }]), t
      }(s.Component);
    t.default = u
  },
  1128: function (e, t, n) {
    "use strict";

    function r() {
      return o.createElement("svg", {
        id: "Layer_2",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        width: "15px",
        height: "15px",
        viewBox: "7.015 20 388.209 342.605",
        "enable-background": "new 7.015 47.906 388.209 342.605"
      }, o.createElement("path", {
        fill: "none",
        stroke: "#000000",
        strokeWidth: "20",
        strokeLinejoin: "bevel",
        strokeMiterlimit: "10",
        d: "M377.5,250.5 c-2.896,138.241-177.896,163.241-280.896,89.241"
      }), o.createElement("g", null, o.createElement("g", null, o.createElement("path", {
        fill: "#0C0202",
        stroke: "#000000",
        strokeMiterlimit: "10",
        d: "M10.5,251.5h377c0,0,66-275-201-185 C186.5,66.5-19.5,159.5,10.5,251.5z"
      })), o.createElement("path", {
        fill: "#0C0202",
        stroke: "#000000",
        strokeLinejoin: "bevel",
        strokeMiterlimit: "10",
        d: "M50.5,159.5 C-65.396,141.741,82.604,2.741,88.604,128.741"
      })), o.createElement("circle", {
        fill: "#FFFFFF",
        stroke: "#000000",
        strokeMiterlimit: "10",
        cx: "50.854",
        cy: "210.991",
        r: "21.25"
      }))
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.getMouseIcon = r;
    var i = n(1),
      o = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(i)
  },
  1129: function (e, t) {},
  836: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" !== (void 0 === t ? "undefined" : s(t)) && "function" != typeof t ? e : t
    }

    function l(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : s(t)));
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var u = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      c = "function" == typeof Symbol && "symbol" === s(Symbol.iterator) ? function (e) {
        return void 0 === e ? "undefined" : s(e)
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : s(e)
      },
      f = n(1),
      p = i(f),
      d = n(3),
      h = i(d),
      m = n(90),
      y = r(m),
      v = n(1090),
      g = r(v),
      b = n(938),
      w = r(b),
      E = n(176),
      _ = n(1097),
      C = r(_),
      T = n(177),
      A = n(1102),
      k = r(A),
      O = n(181),
      I = n(303),
      x = n(1105),
      S = n(939),
      M = r(S),
      P = n(1110),
      D = r(P),
      j = n(33),
      N = n(940),
      R = n(1113),
      L = r(R),
      F = n(13),
      V = n(1117),
      H = r(V),
      B = n(1124),
      G = r(B),
      z = n(1126),
      U = r(z),
      q = n(873),
      W = n(311),
      Q = n(854),
      K = r(Q),
      Y = n(1127),
      Z = r(Y),
      J = n(998),
      X = r(J),
      $ = n(64),
      ee = r($),
      te = n(1128);
    n(1129);
    var ne = n(1061),
      re = r(ne),
      ie = function (e, t, n, r) {
        var i, o = arguments.length,
          a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : c(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
        else
          for (var l = e.length - 1; l >= 0; l--)(i = e[l]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return o > 3 && a && Object.defineProperty(t, n, a), a
      },
      oe = new x.PatientViewPageStore;
    window.patientViewPageStore = oe;
    var ae = function (e) {
      function t(e) {
        o(this, t);
        var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        (0, F.reaction)(function () {
          return e.routing.location.query
        }, function (e) {
          var t = (0, W.validateParametersPatientView)(e);
          if (t.isValid) {
            oe.urlValidationError = null, "studyId" in e && (oe.studyId = e.studyId), "caseId" in e ? oe.setPatientId(e.caseId) : "sampleId" in e && oe.setSampleId(e.sampleId);
            var n = "navCaseIds" in e ? e.navCaseIds.split(",") : [];
            oe.patientIdsInCohort = n.map(function (e) {
              return e.includes(":") ? e : oe.studyId + ":" + e
            })
          } else oe.urlValidationError = t.message
        }, {
          fireImmediately: !0
        });
        return n.updatePageTitleReaction = (0, F.reaction)(function () {
          return oe.pageTitle
        }, function (e) {
          return window.document.title = e
        }, {
          fireImmediately: !0
        }), n.onMutationTableColumnVisibilityToggled = n.onMutationTableColumnVisibilityToggled.bind(n), n.onCnaTableColumnVisibilityToggled = n.onCnaTableColumnVisibilityToggled.bind(n), n
      }
      return l(t, e), u(t, [{
        key: "componentDidMount",
        value: function () {
          this.exposeComponentRenderersToParentScript()
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          this.updatePageTitleReaction()
        }
      }, {
        key: "exposeComponentRenderersToParentScript",
        value: function () {}
      }, {
        key: "handleSampleClick",
        value: function (e, t) {
          t.shiftKey || t.altKey || t.metaKey || (t.preventDefault(), this.props.routing.updateRoute({
            caseId: void 0,
            sampleId: e
          }))
        }
      }, {
        key: "handleTabChange",
        value: function (e) {
          this.props.routing.updateRoute({
            tab: e
          })
        }
      }, {
        key: "handlePatientClick",
        value: function (e) {
          var t = e.split(":");
          2 == t.length ? this.props.routing.updateRoute({
            studyId: t[0],
            caseId: t[1],
            sampleId: void 0
          }) : this.props.routing.updateRoute({
            caseId: e,
            sampleId: void 0
          })
        }
      }, {
        key: "onCnaTableColumnVisibilityToggled",
        value: function (e, t) {
          this.cnaTableColumnVisibility = (0, I.toggleColumnVisibility)(this.cnaTableColumnVisibility, e, t)
        }
      }, {
        key: "onMutationTableColumnVisibilityToggled",
        value: function (e, t) {
          this.mutationTableColumnVisibility = (0, I.toggleColumnVisibility)(this.mutationTableColumnVisibility, e, t)
        }
      }, {
        key: "shouldShowPathologyReport",
        value: function (e) {
          return e.pathologyReport.isComplete && e.pathologyReport.result.length > 0
        }
      }, {
        key: "render",
        value: function () {
          var e = this,
            t = null,
            n = null,
            r = null,
            i = null;
          if (oe.urlValidationError) return p.createElement(Z.default, {
            urlValidationError: oe.urlValidationError
          });
          if (oe.studyMetaData.isComplete) {
            var o = oe.studyMetaData.result;
            i = p.createElement("a", {
              href: "study?id=" + o.studyId,
              className: "studyMetaBar_studyName"
            }, o.name)
          }
          if (oe.patientViewData.isComplete && oe.studyMetaData.isComplete) {
            var a = oe.patientViewData.result;
            t = oe.clinicalEvents.isComplete && oe.clinicalEvents.result.length > 0 ? new C.default(a.samples, oe.clinicalEvents.result) : new C.default(a.samples), n = h.map(t.samples, function (n) {
              var r = t && t.clinicalDataLegacyCleanAndDerived && t.clinicalDataLegacyCleanAndDerived[n.id] && "Xenograft" === t.clinicalDataLegacyCleanAndDerived[n.id].DERIVED_NORMALIZED_CASE_TYPE;
              return p.createElement("div", {
                className: "patientSample"
              }, p.createElement("span", {
                className: "clinical-spans"
              }, t.getComponentForSample(n.id, 1, "", p.createElement("span", {
                style: {
                  display: "inline-flex"
                }
              }, " ", r && (0, te.getMouseIcon)(), r && " ", p.createElement("a", {
                href: "case.do?#/patient?sampleId=" + n.id + "&studyId=" + oe.studyMetaData.result.studyId,
                target: "_blank",
                onClick: function (t) {
                  return e.handleSampleClick(n.id, t)
                }
              }, n.id), t && t.clinicalDataLegacyCleanAndDerived[n.id] && (0, N.getSpanElementsFromCleanData)(t.clinicalDataLegacyCleanAndDerived[n.id], oe.studyId)))))
            }), n && n.length > 0 && "sample" === oe.pageMode && oe.patientId && n.push(p.createElement("button", {
              className: "btn btn-default btn-xs",
              onClick: function () {
                return e.handlePatientClick(oe.patientId)
              }
            }, "Show all samples"))
          }
          if (oe.patientIdsInCohort && oe.patientIdsInCohort.length > 0) {
            var l = oe.patientIdsInCohort.indexOf(oe.studyId + ":" + oe.patientId);
            r = p.createElement(O.PaginationControls, {
              currentPage: l + 1,
              showMoreButton: !1,
              showItemsPerPageSelector: !1,
              showFirstPage: !0,
              showLastPage: !0,
              textBetweenButtons: " of " + oe.patientIdsInCohort.length + " patients",
              firstPageDisabled: 0 === l,
              previousPageDisabled: 0 === l,
              nextPageDisabled: l === oe.patientIdsInCohort.length - 1,
              lastPageDisabled: l === oe.patientIdsInCohort.length - 1,
              onFirstPageClick: function () {
                return e.handlePatientClick(oe.patientIdsInCohort[0])
              },
              onPreviousPageClick: function () {
                return e.handlePatientClick(oe.patientIdsInCohort[l - 1])
              },
              onNextPageClick: function () {
                return e.handlePatientClick(oe.patientIdsInCohort[l + 1])
              },
              onLastPageClick: function () {
                return e.handlePatientClick(oe.patientIdsInCohort[oe.patientIdsInCohort.length - 1])
              },
              onChangeCurrentPage: function (t) {
                t > 0 && t <= oe.patientIdsInCohort.length && e.handlePatientClick(oe.patientIdsInCohort[t - 1])
              },
              pageNumberEditable: !0,
              className: "cohortNav"
            })
          }
          return p.createElement("div", {
            className: "patientViewPage"
          }, p.createElement(X.default, {
            show: oe.ajaxErrors.length > 0,
            onHide: function () {
              oe.clearErrors()
            },
            title: "Can't find " + oe.pageMode + " " + oe.caseId + " in study " + oe.studyId + ".",
            troubleshooting: ["Check that your URL parameters are valid.", "Try refreshing the page.", "Make sure you are connected to the internet."]
          }), p.createElement("div", {
            className: "topBanner"
          }, oe.patientViewData.isComplete && p.createElement("div", {
            className: "patientPageHeader"
          }, p.createElement("i", {
            className: "fa fa-user-circle-o patientIcon",
            "aria-hidden": "true"
          }), p.createElement("div", {
            className: "patientDataTable"
          }, p.createElement("table", null, p.createElement("tr", null, p.createElement("td", null, "Patient:"), p.createElement("td", null, p.createElement(k.default, {
            handlePatientClick: function (t) {
              return e.handlePatientClick(t)
            },
            patient: oe.patientViewData.result.patient,
            studyId: oe.studyId,
            darwinUrl: oe.darwinUrl.result,
            sampleManager: t
          }))), p.createElement("tr", null, p.createElement("td", null, "Samples:"), p.createElement("td", null, p.createElement("div", {
            className: "patientSamples"
          }, n))))), p.createElement("div", {
            className: "studyMetaBar"
          }, i, " ", p.createElement(E.If, {
            condition: null != r
          }, r)))), p.createElement(E.If, {
            condition: oe.patientViewData.isComplete
          }, p.createElement(E.Then, null, p.createElement(q.MSKTabs, {
            id: "patientViewPageTabs",
            activeTabId: this.props.routing.location.query.tab,
            onTabClick: function (t) {
              return e.handleTabChange(t)
            },
            className: "mainTabs"
          }, p.createElement(q.MSKTab, {
            key: 0,
            id: "summaryTab",
            linkText: "Summary"
          }, p.createElement(K.default, {
            isLoading: oe.clinicalEvents.isPending
          }), !!t && oe.clinicalEvents.isComplete && oe.clinicalEvents.result.length > 0 && p.createElement("div", null, p.createElement(H.default, {
            store: oe,
            getWidth: function () {
              return (0, y.default)(window).width() - 40
            },
            sampleManager: t
          }), p.createElement("hr", null)), p.createElement(K.default, {
            isLoading: oe.mutationData.isPending || oe.cnaSegments.isPending
          }), oe.mutationData.isComplete && oe.cnaSegments.isComplete && oe.sequencedSampleIdsInStudy.isComplete && t && (oe.mutationData.result.length > 0 || oe.cnaSegments.result.length > 0) && p.createElement("div", null, p.createElement(g.default, {
            mergedMutations: oe.mergedMutationData,
            samples: oe.samples.result,
            cnaSegments: oe.cnaSegments.result,
            sampleOrder: t.sampleIndex,
            sampleLabels: t.sampleLabels,
            sampleColors: t.sampleColors,
            sampleManager: t,
            getContainerWidth: function () {
              return (0, y.default)(window).width()
            }
          }), p.createElement("hr", null)), p.createElement(K.default, {
            isLoading: oe.mutationData.isPending || oe.uncalledMutationData.isPending || oe.oncoKbAnnotatedGenes.isPending
          }), oe.oncoKbAnnotatedGenes.isComplete && oe.mutationData.isComplete && oe.uncalledMutationData.isComplete && !!t && p.createElement(G.default, {
            sampleManager: t,
            sampleIds: t ? t.getSampleIdsInOrder() : [],
            uniqueSampleKeyToTumorType: oe.uniqueSampleKeyToTumorType,
            molecularProfileIdToMolecularProfile: oe.molecularProfileIdToMolecularProfile.result,
            variantCountCache: oe.variantCountCache,
            genomeNexusEnrichmentCache: oe.genomeNexusEnrichmentCache,
            discreteCNACache: oe.discreteCNACache,
            mrnaExprRankCache: oe.mrnaExprRankCache,
            oncoKbEvidenceCache: oe.oncoKbEvidenceCache,
            pubMedCache: oe.pubMedCache,
            mrnaExprRankMolecularProfileId: oe.mrnaRankMolecularProfileId.result || void 0,
            discreteCNAMolecularProfileId: oe.molecularProfileIdDiscrete.result,
            data: oe.mergedMutationDataIncludingUncalled,
            downloadDataFetcher: oe.downloadDataFetcher,
            mutSigData: oe.mutSigData.result,
            myCancerGenomeData: oe.myCancerGenomeData,
            hotspotData: oe.indexedHotspotData,
            cosmicData: oe.cosmicData.result,
            oncoKbData: oe.oncoKbData,
            oncoKbAnnotatedGenes: oe.oncoKbAnnotatedGenes.result,
            civicGenes: oe.civicGenes,
            civicVariants: oe.civicVariants,
            userEmailAddress: ee.default.userEmailAddress,
            enableOncoKb: ee.default.showOncoKB,
            enableFunctionalImpact: ee.default.showGenomeNexus,
            enableHotspot: ee.default.showHotspot,
            enableMyCancerGenome: ee.default.showMyCancerGenome,
            enableCivic: ee.default.showCivic,
            columnVisibility: this.mutationTableColumnVisibility,
            columnVisibilityProps: {
              onColumnToggled: this.onMutationTableColumnVisibilityToggled
            }
          }), p.createElement("hr", null), p.createElement(K.default, {
            isLoading: "loading" === this.cnaTableStatus
          }), p.createElement(L.default, {
            sampleIds: t ? t.getSampleIdsInOrder() : [],
            sampleManager: t,
            cnaOncoKbData: oe.cnaOncoKbData,
            cnaCivicGenes: oe.cnaCivicGenes,
            cnaCivicVariants: oe.cnaCivicVariants,
            oncoKbEvidenceCache: oe.oncoKbEvidenceCache,
            oncoKbAnnotatedGenes: oe.oncoKbAnnotatedGenes.result,
            enableOncoKb: ee.default.showOncoKB,
            enableCivic: ee.default.showCivic,
            userEmailAddress: ee.default.userEmailAddress,
            pubMedCache: oe.pubMedCache,
            data: oe.mergedDiscreteCNAData,
            copyNumberCountCache: oe.copyNumberCountCache,
            mrnaExprRankCache: oe.mrnaExprRankCache,
            gisticData: oe.gisticData.result,
            mrnaExprRankMolecularProfileId: oe.mrnaRankMolecularProfileId.result || void 0,
            status: this.cnaTableStatus,
            columnVisibility: this.cnaTableColumnVisibility,
            columnVisibilityProps: {
              onColumnToggled: this.onCnaTableColumnVisibilityToggled
            }
          })), "patient" === oe.pageMode && p.createElement(q.MSKTab, {
            key: 2,
            id: "clinicalDataTab",
            linkText: "Clinical Data"
          }, p.createElement("div", {
            className: "clearfix"
          }, p.createElement(w.default, {
            title: "Patient",
            isLoading: oe.clinicalDataPatient.isPending,
            className: "pull-left"
          }), oe.clinicalDataPatient.isComplete && p.createElement(M.default, {
            showTitleBar: !0,
            data: oe.clinicalDataPatient.result
          })), p.createElement("br", null), p.createElement("div", {
            className: "clearfix"
          }, p.createElement(w.default, {
            title: "Samples",
            isLoading: oe.clinicalDataGroupedBySample.isPending,
            className: "pull-left"
          }), oe.clinicalDataGroupedBySample.isComplete && p.createElement(D.default, {
            samples: oe.clinicalDataGroupedBySample.result
          }))), p.createElement(q.MSKTab, {
            key: 3,
            id: "pathologyReportTab",
            linkText: "Pathology Report",
            hide: !this.shouldShowPathologyReport(oe),
            loading: oe.pathologyReport.isPending
          }, p.createElement("div", null, p.createElement(U.default, {
            iframeStyle: {
              position: "absolute",
              top: 0
            },
            pdfs: oe.pathologyReport.result
          }))), p.createElement(q.MSKTab, {
            key: 4,
            id: "heatMapReportTab",
            linkText: "Heatmap",
            hide: oe.MDAndersonHeatMapAvailable.isComplete && !oe.MDAndersonHeatMapAvailable.result,
            loading: oe.MDAndersonHeatMapAvailable.isPending
          }, p.createElement(re.default, {
            height: 700,
            url: "//bioinformatics.mdanderson.org/TCGA/NGCHMPortal/?participant=" + oe.patientId
          })), p.createElement(q.MSKTab, {
            key: 5,
            id: "tissueImageTab",
            linkText: "Tissue Image",
            hide: /https/.test(window.location.protocol) || oe.hasTissueImageIFrameUrl.isComplete && !oe.hasTissueImageIFrameUrl.result,
            loading: oe.hasTissueImageIFrameUrl.isPending
          }, p.createElement("div", {
            style: {
              position: "relative"
            }
          }, p.createElement(re.default, {
            height: 700,
            url: "http://cancer.digitalslidearchive.net/index_mskcc.php?slide_name=" + oe.patientId
          }))))), p.createElement(E.Else, null, p.createElement(T.ThreeBounce, {
            size: 20,
            className: "center-block text-center"
          }))))
        }
      }, {
        key: "cnaTableStatus",
        get: function () {
          return oe.molecularProfileIdDiscrete.isComplete ? void 0 === oe.molecularProfileIdDiscrete.result ? "unavailable" : oe.discreteCNAData.isComplete ? "available" : "loading" : "loading"
        }
      }]), t
    }(p.Component);
    ie([F.observable], ae.prototype, "mutationTableColumnVisibility", void 0), ie([F.observable], ae.prototype, "cnaTableColumnVisibility", void 0), ie([F.computed], ae.prototype, "cnaTableStatus", null), ie([F.action], ae.prototype, "onCnaTableColumnVisibilityToggled", null), ie([F.action], ae.prototype, "onMutationTableColumnVisibilityToggled", null), ae = ie([(0, j.inject)("routing"), j.observer], ae), t.default = ae
  },
  854: function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      l = n(1),
      s = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(l),
      u = n(177),
      c = n(176),
      f = function (e) {
        function t() {
          return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return o(t, e), a(t, [{
          key: "render",
          value: function () {
            return s.createElement(c.If, {
              condition: this.props.isLoading
            }, s.createElement(c.Then, null, s.createElement("div", null, s.createElement(u.ThreeBounce, {
              style: this.props.style || {
                display: "inline-block",
                marginLeft: 10
              }
            }))))
          }
        }]), t
      }(s.Component);
    t.default = f
  },
  856: function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.TableCellStatus = void 0;
    var a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      l = n(1),
      s = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(l),
      u = n(173),
      c = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(u),
      f = t.TableCellStatus = void 0;
    ! function (e) {
      e[e.LOADING = 0] = "LOADING", e[e.ERROR = 1] = "ERROR", e[e.NA = 2] = "NA"
    }(f || (t.TableCellStatus = f = {}));
    var p = function (e) {
      function t() {
        return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
      }
      return o(t, e), a(t, [{
        key: "render",
        value: function () {
          var e = "",
            t = "";
          switch (this.props.status) {
            case f.LOADING:
              e = this.props.loadingAlt || "Querying server for data.", t = "LOADING";
              break;
            case f.ERROR:
              e = this.props.errorAlt || "Error retrieving data.", t = "ERROR";
              break;
            case f.NA:
              e = this.props.naAlt || "Data not available.", t = ""
          }
          return s.createElement(c.default, {
            placement: "left",
            overlay: s.createElement("span", null, e)
          }, s.createElement("span", {
            style: {
              color: "gray",
              fontSize: "xx-small",
              textAlign: "center"
            }
          }, t))
        }
      }]), t
    }(s.Component);
    t.default = p
  },
  857: function (e, t) {
    e.exports = {
      portalWidth: "annotation-module__portalWidth__1ONSd",
      "annotation-item": "annotation-module__annotation-item__1YzCz",
      "annotation-item-text": "annotation-module__annotation-item-text__2FRXN",
      "annotation-item-error": "annotation-module__annotation-item-error__1XUY_"
    }
  },
  860: function (e, t, n) {
    "use strict";

    function r(e, t, n) {
      return 1e-6 <= e && e < n ? e.toExponential(t) : e.toPrecision(t)
    }

    function i(e, t) {
      var n = e.toFixed(t);
      if (0 !== e && 0 === parseFloat(n)) {
        var r = t > 1 ? l.fill(Array(t - 1), "0") : [];
        n = (e > 0 ? "<" : ">-") + "0." + r.join("") + "1"
      }
      return n
    }

    function o(e) {
      return i(100 * e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1) + "%"
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.toPrecision = r, t.toFixedWithThreshold = i, t.getPercentage = o;
    var a = n(3),
      l = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(a)
  },
  868: function (e, t, n) {
    e.exports = n(6)(276)
  },
  869: function (e, t, n) {
    "use strict";

    function r(e) {
      var t = {};
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = "number" == typeof e[n] ? e[n] : e[n].val);
      return t
    }
    t.__esModule = !0, t.default = r, e.exports = t.default
  },
  870: function (e, t, n) {
    (function (t) {
      (function () {
        var n, r, i;
        "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function () {
          return performance.now()
        } : void 0 !== t && null !== t && t.hrtime ? (e.exports = function () {
          return (n() - i) / 1e6
        }, r = t.hrtime, n = function () {
          var e;
          return e = r(), 1e9 * e[0] + e[1]
        }, i = n()) : Date.now ? (e.exports = function () {
          return Date.now() - i
        }, i = Date.now()) : (e.exports = function () {
          return (new Date).getTime() - i
        }, i = (new Date).getTime())
      }).call(this)
    }).call(t, n(954))
  },
  871: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function l(e, t, n) {
      return null != e && e.length > t + (n || 0)
    }

    function s(e, t, n, r) {
      return l(e, n, r) ? e.substring(0, n) + t : e
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var u = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      };
    t.isTooLong = l, t.truncateText = s;
    var f = n(1),
      p = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(f),
      d = n(174),
      h = r(d),
      m = n(33),
      y = n(13),
      v = n(173),
      g = r(v),
      b = function (e, t, n, r) {
        var i, o = arguments.length,
          a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : c(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
        else
          for (var l = e.length - 1; l >= 0; l--)(i = e[l]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return o > 3 && a && Object.defineProperty(t, n, a), a
      },
      w = E = function (e) {
        function t() {
          return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return a(t, e), u(t, [{
          key: "render",
          value: function () {
            var e = this,
              t = p.createElement("span", {
                style: {
                  whiteSpace: "nowrap"
                },
                className: (0, h.default)(this.props.className)
              }, this.truncatedText);
            return this.needsTooltip && (t = p.createElement(g.default, {
              overlay: function () {
                return e.props.tooltip || p.createElement("span", null)
              },
              placement: "right",
              destroyTooltipOnHide: !0
            }, t)), t
          }
        }, {
          key: "needsTooltip",
          get: function () {
            return void 0 !== this.props.tooltip && ("always" === this.props.addTooltip || "truncated" === this.props.addTooltip && this.isTooLong)
          }
        }, {
          key: "isTooLong",
          get: function () {
            return l(this.props.text, this.props.maxLength || E.defaultProps.maxLength, this.props.buffer)
          }
        }, {
          key: "truncatedText",
          get: function () {
            return s(this.props.text, this.props.suffix || E.defaultProps.suffix, this.props.maxLength || E.defaultProps.maxLength, this.props.buffer)
          }
        }]), t
      }(p.Component);
    w.defaultProps = {
      maxLength: 50,
      buffer: 2,
      suffix: "...",
      addTooltip: "truncated"
    }, b([y.computed], w.prototype, "needsTooltip", null), b([y.computed], w.prototype, "isTooLong", null), b([y.computed], w.prototype, "truncatedText", null), w = E = b([m.observer], w), t.default = w;
    var E
  },
  872: function (e, t) {
    e.exports = {
      portalWidth: "styles-module__portalWidth__1w8-Y",
      "integer-data": "styles-module__integer-data__1Bn0H"
    }
  },
  873: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function l(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.MSKTabs = t.MSKTab = void 0;
    var s = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      u = n(1),
      c = i(u),
      f = n(3),
      p = i(f),
      d = n(174),
      h = r(d),
      m = n(177),
      y = n(901),
      v = r(y);
    n(904);
    t.MSKTab = function (e) {
      function t(e) {
        return o(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
      }
      return l(t, e), s(t, [{
        key: "render",
        value: function () {
          return c.createElement("div", {
            className: (0, h.default)({
              "msk-tab": !0,
              hiddenByPosition: !!this.props.inactive
            }, this.props.className)
          }, this.props.children)
        }
      }]), t
    }(c.Component), t.MSKTabs = function (e) {
      function t() {
        o(this, t);
        var e = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return e.shownTabs = [], e.tabRefs = [], e.state = {
          currentPage: 1,
          pageBreaks: []
        }, e
      }
      return l(t, e), s(t, [{
        key: "cloneTab",
        value: function (e, t, n) {
          return n ? c.cloneElement(e, {
            inactive: t
          }, c.createElement(m.ThreeBounce, {
            className: "default-spinner center-block text-center"
          })) : c.cloneElement(e, {
            inactive: t
          })
        }
      }, {
        key: "setActiveTab",
        value: function (e) {
          this.props.onTabClick && this.props.onTabClick(e)
        }
      }, {
        key: "navTabsRefHandler",
        value: function (e) {
          this.navTabsRef = e
        }
      }, {
        key: "tabRefHandler",
        value: function (e, t) {
          e && t && this.tabRefs.push({
            id: e,
            element: t
          })
        }
      }, {
        key: "nextPage",
        value: function () {
          this.setState({
            currentPage: this.state.currentPage + 1
          })
        }
      }, {
        key: "prevPage",
        value: function () {
          this.setState({
            currentPage: this.state.currentPage - 1
          })
        }
      }, {
        key: "initOnResize",
        value: function (e, t) {
          var n = this,
            r = null;
          return function (e) {
            null !== r && (window.clearTimeout(r), r = null), r = window.setTimeout(function () {
              n.setState({
                currentPage: 1,
                pageBreaks: []
              })
            }, 600)
          }
        }
      }, {
        key: "render",
        value: function () {
          var e = this;
          if (this.props.children && c.Children.count(this.props.children)) {
            var t = this.props.children,
              n = !1,
              r = "",
              i = c.Children.toArray(t),
              o = p.reduce(i, function (t, i) {
                return i.props.hide || (i.props.id === e.props.activeTabId ? (n = !0, r = e.props.activeTabId, e.shownTabs.push(i.props.id), t.push(e.cloneTab(i, !1, !!i.props.loading))) : e.props.unmountOnHide || !p.includes(e.shownTabs, i.props.id) || i.props.loading || t.push(e.cloneTab(i, !0, !!i.props.loading))), t
              }, []);
            if (!1 === n) {
              var a = i[0];
              this.shownTabs.push(a.props.id), o[0] = this.cloneTab(a, !1, !!a.props.loading), r = a.props.id
            }
            return c.createElement("div", {
              id: this.props.id ? this.props.id : "",
              className: (0, h.default)("msk-tabs", this.props.className)
            }, this.navTabs(t, r), c.createElement("div", {
              className: "tab-content"
            }, o))
          }
          return null
        }
      }, {
        key: "navTabs",
        value: function (e, t) {
          this.tabRefs = [];
          var n = this.tabPages(e, t),
            r = this.state.pageBreaks.length + 1,
            i = this.props.enablePagination ? {
              border: 0,
              overflow: "hidden"
            } : {},
            o = this.state.currentPage > 1 ? c.createElement("li", {
              key: "prevPage",
              style: {
                cursor: "pointer"
              }
            }, c.createElement("a", {
              onClick: this.prevPage.bind(this)
            }, c.createElement("i", {
              className: "fa fa-chevron-left",
              style: this.props.arrowStyle
            }))) : null,
            a = this.state.currentPage < r ? c.createElement("li", {
              key: "nextPage",
              style: {
                cursor: "pointer"
              }
            }, c.createElement("a", {
              onClick: this.nextPage.bind(this)
            }, c.createElement("i", {
              className: "fa fa-chevron-right",
              style: this.props.arrowStyle
            }))) : null,
            l = this.props.tabButtonStyle || "tabs";
          return c.createElement("ul", {
            ref: this.navTabsRefHandler.bind(this),
            className: (0, h.default)("nav", "nav-" + l),
            style: i
          }, o, n[this.state.currentPage - 1], a, this.props.enablePagination && c.createElement(v.default, {
            handleWidth: !0,
            onResize: this.initOnResize.bind(this)()
          }))
        }
      }, {
        key: "tabPages",
        value: function (e, t) {
          var n = this,
            r = [
              []
            ],
            i = 1;
          return c.Children.forEach(e, function (e) {
            if (!(!e || e.props.hide || e.props.loading && t !== e.props.id)) {
              var o = t === e.props.id ? "active" : "";
              n.props.enablePagination && n.state.pageBreaks.length > 0 && n.state.pageBreaks[i - 1] === e.props.id && (i++, r[i - 1] = []), r[i - 1].push(c.createElement("li", {
                key: e.props.id,
                style: {
                  cursor: "pointer"
                },
                ref: n.tabRefHandler.bind(n, e.props.id),
                className: o
              }, c.createElement("a", {
                onClick: n.setActiveTab.bind(n, e.props.id),
                style: e.props.anchorStyle
              }, e.props.linkText)))
            }
          }), r
        }
      }, {
        key: "componentDidMount",
        value: function () {
          var e = this;
          setTimeout(function () {
            if (e.props.enablePagination && 0 === e.state.pageBreaks.length) {
              var t = e.findPageBreaks(),
                n = e.findCurrentPage(t);
              e.setState({
                currentPage: n,
                pageBreaks: t
              })
            }
          }, 1)
        }
      }, {
        key: "findCurrentPage",
        value: function (e) {
          var t = this,
            n = 1,
            r = !1;
          return this.props.activeTabId && e.length > 0 && p.each(this.tabRefs, function (i) {
            if (i.id === e[n - 1] && n++, i.id === t.props.activeTabId) return r = !0, !1
          }), r ? n : 1
        }
      }, {
        key: "findPageBreaks",
        value: function () {
          var e = [],
            t = this.navTabsRef && this.navTabsRef.offsetWidth || 0;
          if (t > 0) {
            var n = 0;
            p.each(this.tabRefs, function (r) {
              n += r.element.offsetWidth;
              var i = e.length > 0 ? 160 : 100;
              n > t - i && (e.push(r.id), n = r.element.offsetWidth)
            })
          }
          return e
        }
      }]), t
    }(c.Component)
  },
  879: function (e, t, n) {
    "use strict";

    function r(e) {
      var t = {};
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = 0);
      return t
    }
    t.__esModule = !0, t.default = r, e.exports = t.default
  },
  880: function (e, t, n) {
    "use strict";

    function r(e, t, n, r, o, a, l) {
      var s = -o * (t - r),
        u = -a * n,
        c = s + u,
        f = n + c * e,
        p = t + f * e;
      return Math.abs(f) < l && Math.abs(p - r) < l ? (i[0] = r, i[1] = 0, i) : (i[0] = p, i[1] = f, i)
    }
    t.__esModule = !0, t.default = r;
    var i = [0, 0];
    e.exports = t.default
  },
  881: function (e, t, n) {
    (function (t) {
      for (var r = n(870), i = "undefined" == typeof window ? t : window, o = ["moz", "webkit"], a = "AnimationFrame", l = i["request" + a], s = i["cancel" + a] || i["cancelRequest" + a], u = 0; !l && u < o.length; u++) l = i[o[u] + "Request" + a], s = i[o[u] + "Cancel" + a] || i[o[u] + "CancelRequest" + a];
      if (!l || !s) {
        var c = 0,
          f = 0,
          p = [];
        l = function (e) {
          if (0 === p.length) {
            var t = r(),
              n = Math.max(0, 1e3 / 60 - (t - c));
            c = n + t, setTimeout(function () {
              var e = p.slice(0);
              p.length = 0;
              for (var t = 0; t < e.length; t++)
                if (!e[t].cancelled) try {
                  e[t].callback(c)
                } catch (e) {
                  setTimeout(function () {
                    throw e
                  }, 0)
                }
            }, Math.round(n))
          }
          return p.push({
            handle: ++f,
            callback: e,
            cancelled: !1
          }), f
        }, s = function (e) {
          for (var t = 0; t < p.length; t++) p[t].handle === e && (p[t].cancelled = !0)
        }
      }
      e.exports = function (e) {
        return l.call(i, e)
      }, e.exports.cancel = function () {
        s.apply(i, arguments)
      }, e.exports.polyfill = function () {
        i.requestAnimationFrame = l, i.cancelAnimationFrame = s
      }
    }).call(t, n(124))
  },
  882: function (e, t, n) {
    "use strict";

    function r(e, t, n) {
      for (var r in t)
        if (Object.prototype.hasOwnProperty.call(t, r)) {
          if (0 !== n[r]) return !1;
          var i = "number" == typeof t[r] ? t[r] : t[r].val;
          if (e[r] !== i) return !1
        }
      return !0
    }
    t.__esModule = !0, t.default = r, e.exports = t.default
  },
  888: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      a = n(1),
      l = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(a),
      s = n(173),
      u = r(s),
      c = n(856),
      f = r(c),
      p = function () {
        function e() {
          i(this, e)
        }
        return o(e, null, [{
          key: "mainContent",
          value: function (e, t, n) {
            var r = l.createElement("span", null, l.createElement("b", null, t), " variant reads out of ", l.createElement("b", null, t + n), " total");
            return l.createElement(u.default, {
              placement: "left",
              overlay: r,
              arrowContent: l.createElement("div", {
                className: "rc-tooltip-arrow-inner"
              }),
              destroyTooltipOnHide: !0
            }, l.createElement("span", null, e.toFixed(2)))
          }
        }, {
          key: "renderFunction",
          value: function (t) {
            var n = e.getSortValue(t);
            if (n) {
              var r = t[0].tumorAltCount,
                i = t[0].tumorRefCount;
              return e.mainContent(n, r, i)
            }
            return l.createElement(f.default, {
              status: c.TableCellStatus.NA
            })
          }
        }, {
          key: "getSortValue",
          value: function (e) {
            var t = e[0];
            if (!t) return null;
            var n = t.tumorAltCount,
              r = t.tumorRefCount;
            return n < 0 || r < 0 ? null : n / (n + r)
          }
        }, {
          key: "isVisible",
          value: function (e) {
            if (e) {
              var t = !0,
                n = !1,
                r = void 0;
              try {
                for (var i, o = e[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                  var a = i.value;
                  if (this.getSortValue(a)) return !0
                }
              } catch (e) {
                n = !0, r = e
              } finally {
                try {
                  !t && o.return && o.return()
                } finally {
                  if (n) throw r
                }
              }
            }
            return !1
          }
        }]), e
      }();
    t.default = p
  },
  891: function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      l = n(1),
      s = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(l),
      u = n(173),
      c = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(u),
      f = n(860),
      p = function (e) {
        function t(e) {
          return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
        }
        return o(t, e), a(t, [{
          key: "mainContent",
          value: function () {
            var e = this,
              n = this.props,
              r = n.barWidth,
              i = n.barHeight,
              o = n.barColor,
              a = n.totalCount,
              l = n.counts,
              u = n.textMargin,
              c = n.textWidth,
              p = this.props.freqColors || t.defaultProps.freqColors,
              d = this.props.mainCountIndex && this.props.mainCountIndex >= 0 && this.props.mainCountIndex < l.length ? this.props.mainCountIndex : 0,
              h = l[d] / a,
              m = (r || 0) + (u || 0),
              y = m + (c || 0),
              v = [];
            return l.forEach(function (t, n) {
              var r = n % p.length,
                i = r >= 0 ? p[r] : p[0];
              v.push(e.frequencyRectangle(t, a, i))
            }), s.createElement("svg", {
              width: y,
              height: "12"
            }, s.createElement("text", {
              x: m,
              y: "9.5",
              textAnchor: "start",
              fontSize: "10"
            }, (0, f.getPercentage)(h)), s.createElement("rect", {
              y: "2",
              width: r,
              height: i,
              fill: o
            }), v)
          }
        }, {
          key: "frequencyRectangle",
          value: function (e, t, n) {
            var r = e / t,
              i = this.props,
              o = i.barWidth,
              a = i.barHeight;
            return s.createElement("rect", {
              y: "2",
              width: r * (o || 0),
              height: a,
              fill: n
            })
          }
        }, {
          key: "render",
          value: function () {
            var e = this.mainContent();
            return this.props.tooltip && (e = s.createElement(c.default, {
              placement: "left",
              overlay: this.props.tooltip,
              arrowContent: s.createElement("div", {
                className: "rc-tooltip-arrow-inner"
              })
            }, e)), e
          }
        }]), t
      }(s.Component);
    t.default = p, p.defaultProps = {
      freqColors: ["lightgreen", "green"],
      barColor: "#ccc",
      textMargin: 6,
      textWidth: 35,
      barWidth: 30,
      barHeight: 8
    }
  },
  892: function (e, t, n) {
    "use strict";
    var r = n(951).default;
    e.exports = r
  },
  893: function (e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = {
      noWobble: {
        stiffness: 170,
        damping: 26
      },
      gentle: {
        stiffness: 120,
        damping: 14
      },
      wobbly: {
        stiffness: 180,
        damping: 12
      },
      stiff: {
        stiffness: 210,
        damping: 20
      }
    }, e.exports = t.default
  },
  894: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      a = n(1),
      l = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(a),
      s = n(871),
      u = r(s),
      c = n(895),
      f = r(c),
      p = n(982),
      d = r(p),
      h = function () {
        function e() {
          i(this, e)
        }
        return o(e, null, [{
          key: "getSortValue",
          value: function (t) {
            return e.extractSortValue(e.getTextValue(t))
          }
        }, {
          key: "extractNonNumerical",
          value: function (e) {
            var t = /[^0-9]+/g,
              n = e[0].match(t),
              r = [];
            if (n && n.length > 0)
              for (var i = n.join(""), o = 0; o < i.length; o++) r.push(i.charCodeAt(o));
            return r
          }
        }, {
          key: "extractSortValue",
          value: function (t) {
            var n = /[A-Za-z][0-9]+./g,
              r = /[0-9]+/g,
              i = t.match(n),
              o = [];
            if (i && 0 !== i.length ? (o = e.extractNonNumerical(i), i = i[0].match(r)) : i = t.match(r), i && i.length > 0) {
              var a = i[0];
              return o && o.length > 0 && (a += "." + o.join("")), parseFloat(a)
            }
            return null
          }
        }, {
          key: "getTextValue",
          value: function (t) {
            var n = "",
              r = e.getData(t);
            return r && (n = r.toString()), n
          }
        }, {
          key: "getFilterValue",
          value: function (t, n, r) {
            var i = e.getDisplayValue(t),
              o = f.default.getData(t);
            return o && o.toLowerCase().includes("germline") && (i = "" + i + o), i.toUpperCase().indexOf(r) > -1
          }
        }, {
          key: "getDisplayValue",
          value: function (t) {
            return e.getTextValue(t)
          }
        }, {
          key: "getData",
          value: function (e) {
            return e.length > 0 ? e[0].proteinChange : null
          }
        }, {
          key: "renderPlainText",
          value: function (t) {
            var n = e.getDisplayValue(t);
            return l.createElement("span", null, n)
          }
        }, {
          key: "renderWithMutationStatus",
          value: function (t) {
            var n = e.getDisplayValue(t),
              r = f.default.getData(t),
              i = l.createElement(u.default, {
                text: n,
                tooltip: l.createElement("span", null, n),
                className: d.default.proteinChange,
                maxLength: 20
              });
            return r && r.toLowerCase().indexOf("germline") > -1 && (i = l.createElement("span", null, i, l.createElement("span", {
              className: d.default.germline
            }, "Germline"))), i
          }
        }]), e
      }();
    t.default = h
  },
  895: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      a = n(1),
      l = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(a),
      s = n(981),
      u = r(s),
      c = n(173),
      f = r(c),
      p = function () {
        function e() {
          i(this, e)
        }
        return o(e, null, [{
          key: "getData",
          value: function (e) {
            var t = null;
            return e.length > 0 && (t = e[0].mutationStatus), t
          }
        }, {
          key: "sortValue",
          value: function (t) {
            return e.getData(t)
          }
        }, {
          key: "download",
          value: function (t) {
            return e.getData(t) || ""
          }
        }, {
          key: "renderFunction",
          value: function (t) {
            var n = e.getData(t),
              r = void 0,
              i = !1;
            return n ? n.toLowerCase().indexOf("somatic") > -1 ? (r = l.createElement("span", {
              className: u.default.somatic
            }, "S"), i = !0) : n.toLowerCase().indexOf("germline") > -1 ? (r = l.createElement("span", {
              className: u.default.germline
            }, "G"), i = !0) : r = l.createElement("span", {
              className: u.default.unknown
            }, n) : r = l.createElement("span", null), i && (r = l.createElement(f.default, {
              overlay: l.createElement("span", null, n),
              placement: "right"
            }, r)), r
          }
        }]), e
      }();
    t.default = p
  },
  896: function (e, t) {
    e.exports = {
      portalWidth: "mutationAssessorColumn-module__portalWidth__3YkFm",
      "ma-high": "mutationAssessorColumn-module__ma-high__gHJA0",
      "ma-medium": "mutationAssessorColumn-module__ma-medium__3fKlP",
      "ma-low": "mutationAssessorColumn-module__ma-low__VwQXC",
      "ma-neutral": "mutationAssessorColumn-module__ma-neutral__2oq-W"
    }
  },
  897: function (e, t) {
    e.exports = {
      portalWidth: "siftTooltip-module__portalWidth__24Oa2",
      "sift-deleterious": "siftTooltip-module__sift-deleterious__1aA2Z",
      "sift-deleterious_low_confidence": "siftTooltip-module__sift-deleterious_low_confidence__2fL6l",
      "sift-tolerated_low_confidence": "siftTooltip-module__sift-tolerated_low_confidence__1u4Hk",
      "sift-tolerated": "siftTooltip-module__sift-tolerated__xqt6g",
      "sift-tooltip-table": "siftTooltip-module__sift-tooltip-table__2KTtP"
    }
  },
  898: function (e, t) {
    e.exports = {
      portalWidth: "polyPhen2Tooltip-module__portalWidth__CFsKD",
      "polyPhen2-probably_damaging": "polyPhen2Tooltip-module__polyPhen2-probably_damaging__EBbPS",
      "polyPhen2-possibly_damaging": "polyPhen2Tooltip-module__polyPhen2-possibly_damaging__1fyF8",
      "polyPhen2-benign": "polyPhen2Tooltip-module__polyPhen2-benign__36nqJ",
      "polyPhen2-unknown": "polyPhen2Tooltip-module__polyPhen2-unknown__3KRAw",
      "polyPhen2-tooltip-table": "polyPhen2Tooltip-module__polyPhen2-tooltip-table__2WGNf"
    }
  },
  899: function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAT5QTFRF/Pz8/////P396urqzMzMxsbGxsbGxsbGxsbGxsbGycnJ19fX9vb2/v7+2NjYwsLC+Pr69Pf38PT18fT19ff4+fr79PT0p7GzZ4CGXnuCYX+GZIWNaYqSbo+XZYWNZIKJYXyDbYWLs7m7SHiEAERVcpag+vv7gqavFFhpIWJytsvQgKeyLW5/IWd4Qn2Mv9PYfLTDKoOZKoWbTJqt9/r79Pj5c7zOM5u2MZq0WrDE5/H00+zyodfkVrjPRbHMRbHLULXOm9TjyOfv1OzypNjlndXkz+rx+vz8rdzopNjl7Pb56vX45/T36/b45vT36/b45/T36vX45PP3AENUAEBQAD1MADtKADpIDVJjCU5fB0xdBktcCExdDlJjIWd4KH6TJ3yRJ3qPJ3uQKHyRKYCVMJixMJawMJavMJex////SLEDvgAAAFN0Uk5TAAAAEzVMYW51e0l7fn57Z4OHi4qHggdcu9zu+Pr8+OvXtFC1/YwDhfjrS47u/ddHmv391gcKq/z9yxozdeX9/e19Q0KUo0oGqr0kPEc6SjhGPk2mXRMZAAAAAWJLR0QB/wIt3gAAAAlwSFlzAAAASAAAAEgARslrPgAAALpJREFUGNNjYGBmYWVj5+Dk5GBnY2VhZmDg4ubhhQMePi4GfhBfQFBIWEQUJMLPICYuISklLSMrKyMnr6CoJMbAoKwSHBIaFh4eFhoSrKLKyMCopq4RERkVHR0TGaupxQAUYNTWiYMAXT19RpAAg4FhfEJiUnKKkbEJWIDR1Mw8NS09w8LSihEiwGhtY2tn7+DoxAQTYGRydnF1YwIzIQKM7h6eXozIAozePoyoAr5+aAL+AWgCgUFQBgBUGxvs9K2IRwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wOS0xNFQwMDoxMTowNSswMzowMPy1TyEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDktMTRUMDA6MTE6MDQrMDM6MDArn/wpAAAAAElFTkSuQmCC"
  },
  900: function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAklQTFRF+/z+////dJ7j///+9Pv/a5TdqL7k4+v6eKDjsMnvtM75X5Hkp77ou9H33+j4vtT4wdf7cp/p3u3/ja/oaaP2ytjsZ47V/f//0N71wc3jKnft0OH8GmbeO3fcQHTSMW7VkbbyuNX/FWDcc5TS///6////2+X4z9zs1NviPoLihbT4/f7+bJ/umLLWyNTnNHzt/P3+1OP7wM7o0dznVoPMob3sY4zVR4jukLb0/v7+SILhz9vr//z0pb7gM3rlzeD9E17aWY/q/f3+R4Lhztnq///2jrfxG2rozd35RYHlgaHX0Nzw///+4+39cZrgtMXjqsn1GGjnf6nwkbTvd53iwtDjXIbOq8Pt/v39obrkN3PXLXnvfaju/v//8/j+gajrk7Hl//72sMTiPnrdt9D5+/z+qcz7AE/dcZzn8ff+iari9vf0+vnxTIfjZprvSo71QHradZjT4en2YIrV+fn03+jxOH/qeqnzKG7eY4rNVH/PiLPzxd37mbHe///3x9ToMWfIpL3roLjiT33PNnzrjLX1ibX04er1+vj18/PvXorWU4be9fj+8/X5NnfiGmjn5/D9+fv+WJTv3OLo5eru7e/vhazoL3Pk2ub6s8/6K3buPnTSm7Tja5zpQnDH7fH1/Pz6///4ga/xM3np4Or6SIboYJPmvszjRnXLp8LvlLvzLmnRydjs///8+Pr6UIjkSYTmwNX3LnLhrcXtjKnZS33V2eb70+P8gaLW///5pMj4CmHqnr31Lm7dztvu9/fy4unwQHTSe6HnW+6dZAAAACF0Uk5T+/7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+EjK2AQAAAAFiS0dEAf8CLd4AAAAJcEhZcwAAAEgAAABIAEbJaz4AAAEOSURBVBjTDcyDQkRRFAXQc7Nta6fJtt3Ltm3brsl2k227vqzWBywiZmhkbAKYCpmZW1iCR8IiVqLWYgziEjaStlLMjmAv7eDo5AzIuLi6Ae4EWQ9PL28fX8j5+QMBIMgHBgWHhIZBITwiEhyPEBUdExsXzyEhMSk5BRylIi09IzML2Tm5efkFhaAiVlxSCqBMsbyisqoaxCnV1NbVg4NyQ2NTcwuIqbSqtqmpg2m0a3ZoaYM6dbq6e3r7wLH+gcGh/3RYd2R0bHyCDzY5NT2DWZrTm19YXFpeAVtdW98AaHNre0ewu7eP7IPDo+MT0OnZ+cXl1TUfN7d3gvuHR3rSf355fXsHDD4+v75/fv8AgKdToRrTqZIAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDktMTRUMDA6MjI6NDErMDM6MDD+ZbjKAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA5LTE0VDAwOjIyOjI2KzAzOjAwjPA3fwAAAABJRU5ErkJggg=="
  },
  901: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(902),
      i = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(r);
    t.default = i.default
  },
  902: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      },
      s = function () {
        function e(e, t) {
          var n = [],
            r = !0,
            i = !1,
            o = void 0;
          try {
            for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
          } catch (e) {
            i = !0, o = e
          } finally {
            try {
              !r && l.return && l.return()
            } finally {
              if (i) throw o
            }
          }
          return n
        }
        return function (t, n) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return e(t, n);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
      }(),
      u = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      c = n(1),
      f = r(c),
      p = n(2),
      d = r(p),
      h = n(903),
      m = function (e) {
        function t() {
          i(this, t);
          var e = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return e.state = {
            expandChildHeight: 0,
            expandChildWidth: 0,
            expandScrollLeft: 0,
            expandScrollTop: 0,
            shrinkScrollTop: 0,
            shrinkScrollLeft: 0,
            lastWidth: 0,
            lastHeight: 0
          }, e.reset = e.reset.bind(e), e.handleScroll = e.handleScroll.bind(e), e
        }
        return a(t, e), u(t, [{
          key: "componentWillMount",
          value: function () {
            this.forceUpdate()
          }
        }, {
          key: "componentDidMount",
          value: function () {
            var e = this.containerSize(),
              t = s(e, 2),
              n = t[0],
              r = t[1];
            this.reset(n, r)
          }
        }, {
          key: "shouldComponentUpdate",
          value: function (e, t) {
            return this.props !== e || this.state !== t
          }
        }, {
          key: "componentDidUpdate",
          value: function () {
            this.expand.scrollLeft = this.expand.scrollWidth, this.expand.scrollTop = this.expand.scrollHeight, this.shrink.scrollLeft = this.shrink.scrollWidth, this.shrink.scrollTop = this.shrink.scrollHeight
          }
        }, {
          key: "containerSize",
          value: function () {
            return [this.props.handleWidth && this.container.parentElement.offsetWidth, this.props.handleHeight && this.container.parentElement.offsetHeight]
          }
        }, {
          key: "reset",
          value: function (e, t) {
            if ("undefined" != typeof window) {
              var n = this.container.parentElement,
                r = "static";
              n.currentStyle ? r = n.currentStyle.position : window.getComputedStyle && (r = window.getComputedStyle(n).position), "static" === r && (n.style.position = "relative"), this.setState({
                expandChildHeight: this.expand.offsetHeight + 10,
                expandChildWidth: this.expand.offsetWidth + 10,
                lastWidth: e,
                lastHeight: t
              })
            }
          }
        }, {
          key: "handleScroll",
          value: function () {
            if ("undefined" != typeof window) {
              var e = this.state,
                t = this.containerSize(),
                n = s(t, 2),
                r = n[0],
                i = n[1];
              r === e.lastWidth && i === e.lastHeight || this.props.onResize(r, i), this.reset(r, i)
            }
          }
        }, {
          key: "render",
          value: function () {
            var e = this,
              t = this.state,
              n = l({}, h.expandChildStyle, {
                width: t.expandChildWidth,
                height: t.expandChildHeight
              });
            return f.default.createElement("div", {
              style: h.parentStyle,
              ref: function (t) {
                e.container = t
              }
            }, f.default.createElement("div", {
              style: h.parentStyle,
              onScroll: this.handleScroll,
              ref: function (t) {
                e.expand = t
              }
            }, f.default.createElement("div", {
              style: n
            })), f.default.createElement("div", {
              style: h.parentStyle,
              onScroll: this.handleScroll,
              ref: function (t) {
                e.shrink = t
              }
            }, f.default.createElement("div", {
              style: h.shrinkChildStyle
            })))
          }
        }]), t
      }(c.Component);
    t.default = m, m.propTypes = {
      handleWidth: d.default.bool,
      handleHeight: d.default.bool,
      onResize: d.default.func
    }, m.defaultProps = {
      handleWidth: !1,
      handleHeight: !1,
      onResize: function (e) {
        return e
      }
    }
  },
  903: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t.parentStyle = {
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      overflow: "scroll",
      zIndex: -1,
      visibility: "hidden"
    }, t.shrinkChildStyle = {
      position: "absolute",
      left: 0,
      top: 0,
      width: "200%",
      height: "200%"
    }, t.expandChildStyle = {
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%"
    }
  },
  904: function (e, t) {},
  920: function (e, t) {
    e.exports = function e(t, n) {
      "use strict";
      var r, i, o = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
        a = /(^[ ]*|[ ]*$)/g,
        l = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
        s = /^0x[0-9a-f]+$/i,
        u = /^0/,
        c = function (t) {
          return e.insensitive && ("" + t).toLowerCase() || "" + t
        },
        f = c(t).replace(a, "") || "",
        p = c(n).replace(a, "") || "",
        d = f.replace(o, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
        h = p.replace(o, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
        m = parseInt(f.match(s), 16) || 1 !== d.length && f.match(l) && Date.parse(f),
        y = parseInt(p.match(s), 16) || m && p.match(l) && Date.parse(p) || null;
      if (y) {
        if (m < y) return -1;
        if (m > y) return 1
      }
      for (var v = 0, g = Math.max(d.length, h.length); v < g; v++) {
        if (r = !(d[v] || "").match(u) && parseFloat(d[v]) || d[v] || 0, i = !(h[v] || "").match(u) && parseFloat(h[v]) || h[v] || 0, isNaN(r) !== isNaN(i)) return isNaN(r) ? 1 : -1;
        if (typeof r != typeof i && (r += "", i += ""), r < i) return -1;
        if (r > i) return 1
      }
      return 0
    }
  },
  921: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      a = n(1),
      l = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(a),
      s = n(173),
      u = r(s);
    n(288);
    var c = n(856),
      f = r(c),
      p = function () {
        function e() {
          i(this, e)
        }
        return o(e, null, [{
          key: "getCircleX",
          value: function (e, t, n) {
            var r = e / 100;
            return t * (1 - r) + n * r
          }
        }, {
          key: "getCircleFill",
          value: function (e) {
            return e < 25 ? "blue" : e > 75 ? "red" : "gray"
          }
        }, {
          key: "getTooltipContents",
          value: function (e) {
            return e && "complete" === e.status && null !== e.data ? l.createElement("div", null, l.createElement("span", null, "mRNA level of the gene in this tumor"), l.createElement("br", null), l.createElement("span", null, l.createElement("b", null, "mRNA z-score: "), e.data.zScore), l.createElement("br", null), l.createElement("span", null, l.createElement("b", null, "Percentile: "), e.data.percentile), l.createElement("br", null)) : e && "complete" === e.status && null === e.data ? l.createElement("span", null, "mRNA data is not available for this gene.") : e && "error" === e.status ? l.createElement("span", null, "Error retrieving data.") : l.createElement("span", null, "Querying server for data.")
          }
        }, {
          key: "getTdContents",
          value: function (t) {
            var n = null;
            return t && "complete" === t.status && null !== t.data ? l.createElement("svg", {
              width: 63,
              height: 12
            }, l.createElement("text", {
              x: 33,
              y: 11,
              textAnchor: "start",
              fontSize: 10
            }, Math.round(t.data.percentile) + "%"), l.createElement("g", null, l.createElement("line", {
              x1: 0,
              y1: 8,
              x2: 30,
              y2: 8,
              style: {
                stroke: "gray",
                strokeWidth: 2
              }
            }), l.createElement("circle", {
              cx: e.getCircleX(t.data.percentile, 3, 27),
              cy: 8,
              r: 3,
              fill: e.getCircleFill(t.data.percentile)
            }))) : (n = t && "complete" === t.status && null === t.data ? c.TableCellStatus.NA : t && "error" === t.status ? c.TableCellStatus.ERROR : c.TableCellStatus.LOADING, null !== n ? l.createElement(f.default, {
              status: n,
              naAlt: "mRNA data is not available for this gene."
            }) : void 0)
          }
        }, {
          key: "getData",
          value: function (e, t) {
            if (0 === e.length) return null;
            var n = e[0].sampleId,
              r = e[0].entrezGeneId;
            return t.get({
              sampleId: n,
              entrezGeneId: r
            })
          }
        }, {
          key: "getDataFromCNA",
          value: function (e, t) {
            var n = e[0].sampleId,
              r = e[0].entrezGeneId;
            return t.get({
              sampleId: n,
              entrezGeneId: r
            })
          }
        }, {
          key: "renderFromCacheDatum",
          value: function (t) {
            return l.createElement(u.default, {
              placement: "left",
              overlay: e.getTooltipContents(t),
              arrowContent: l.createElement("div", {
                className: "rc-tooltip-arrow-inner"
              })
            }, e.getTdContents(t))
          }
        }, {
          key: "renderFunction",
          value: function (t, n) {
            var r = e.getData(t, n);
            return e.renderFromCacheDatum(r)
          }
        }, {
          key: "cnaRenderFunction",
          value: function (t, n) {
            var r = e.getDataFromCNA(t, n);
            return e.renderFromCacheDatum(r)
          }
        }]), e
      }();
    t.default = p
  },
  922: function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      l = n(1),
      s = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(l),
      u = n(173),
      c = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(u),
      f = function (e) {
        function t() {
          return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return o(t, e), a(t, [{
          key: "render",
          value: function () {
            var e = s.createElement("svg", {
              width: "12",
              height: "12"
            }, s.createElement("circle", {
              r: "5",
              cx: "6",
              cy: "6",
              stroke: this.props.stroke,
              fill: this.props.circleFill
            }), s.createElement("text", {
              x: "3",
              y: "8.5",
              fontSize: this.props.fontSize,
              fill: this.props.textFill
            }, this.props.text.slice(0, 1)));
            return this.props.tooltip && (e = s.createElement(c.default, {
              placement: "right",
              overlay: this.props.tooltip,
              arrowContent: s.createElement("div", {
                className: "rc-tooltip-arrow-inner"
              })
            }, e)), e
          }
        }]), t
      }(s.Component);
    t.default = f, f.defaultProps = {
      stroke: "#55C",
      circleFill: "none",
      fontSize: 7,
      textFill: "#66C"
    }
  },
  923: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }

    function o(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }

    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      s = n(1),
      u = i(s),
      c = n(176),
      f = n(3),
      p = i(f),
      d = n(941),
      h = r(d),
      m = n(945),
      y = r(m),
      v = n(924),
      g = r(v),
      b = n(925),
      w = r(b),
      E = n(121),
      _ = n(294),
      C = n(289),
      T = function () {
        function e() {
          a(this, e)
        }
        return l(e, null, [{
          key: "getData",
          value: function (t, n, r, i, o, a, l) {
            var s = void 0;
            if (t) {
              var u = t[0],
                c = void 0,
                f = u.gene.hugoGeneSymbol,
                p = !(n instanceof Error || !n[u.entrezGeneId]);
              s = {
                hugoGeneSymbol: f,
                oncoKbGeneExist: p,
                civicEntry: a && a.result && l && l.result ? e.getCivicEntry(u, a.result, l.result) : void 0,
                civicStatus: a && a.status && l && l.status ? e.getCivicStatus(a.status, l.status) : "pending",
                hasCivicVariants: !0,
                myCancerGenomeLinks: i ? e.getMyCancerGenomeLinks(u, i) : [],
                isHotspot: !(!r || !r.result || "complete" !== r.status) && (0, _.isRecurrentHotspot)(u, r.result),
                is3dHotspot: !(!r || !r.result || "complete" !== r.status) && (0, _.is3dHotspot)(u, r.result),
                hotspotStatus: r ? r.status : "pending"
              }, o && o.result instanceof Error ? s = Object.assign({}, s, {
                oncoKbStatus: "error",
                oncoKbIndicator: void 0
              }) : p ? (!o || !o.result || o.result instanceof Error || "complete" !== o.status || (c = e.getIndicatorData(u, o.result)), s = Object.assign({}, s, {
                oncoKbStatus: o ? o.status : "pending",
                oncoKbIndicator: c
              })) : s = Object.assign({}, s, {
                oncoKbStatus: "complete",
                oncoKbIndicator: void 0
              })
            } else s = e.DEFAULT_ANNOTATION_DATA;
            return s
          }
        }, {
          key: "getCivicEntry",
          value: function (e, t, n) {
            var r = e.gene.hugoGeneSymbol,
              i = null;
            if (n[r] && n[r][e.proteinChange]) {
              var a = o({}, e.proteinChange, n[r][e.proteinChange]),
                l = t[r];
              i = (0, C.buildCivicEntry)(l, a)
            }
            return i
          }
        }, {
          key: "getCivicStatus",
          value: function (e, t) {
            return "error" === e || "error" === t ? "error" : "complete" === e && "complete" === t ? "complete" : "pending"
          }
        }, {
          key: "getIndicatorData",
          value: function (e, t) {
            if (null !== t.uniqueSampleKeyToTumorType && null !== t.indicatorMap) {
              var n = (0, E.generateQueryVariantId)(e.gene.entrezGeneId, t.uniqueSampleKeyToTumorType[e.uniqueSampleKey], e.proteinChange, e.mutationType);
              return t.indicatorMap[n]
            }
          }
        }, {
          key: "getEvidenceQuery",
          value: function (e, t) {
            return t.uniqueSampleKeyToTumorType ? (0, E.generateQueryVariant)(e.gene.entrezGeneId, t.uniqueSampleKeyToTumorType[e.uniqueSampleKey], e.proteinChange, e.mutationType, e.proteinPosStart, e.proteinPosEnd) : void 0
          }
        }, {
          key: "getMyCancerGenomeLinks",
          value: function (t, n) {
            var r = n[t.gene.hugoGeneSymbol],
              i = [];
            return r && (i = e.filterByAlteration(t, r).map(function (e) {
              return e.linkHTML
            })), i
          }
        }, {
          key: "filterByAlteration",
          value: function (e, t) {
            return t.filter(function (t) {
              var n = /^[A-Za-z][0-9]+[A-Za-z]/,
                r = /[0-9]+/;
              if (t.alteration.trim().match(n) && e.proteinChange) {
                var i = e.proteinChange.match(r),
                  o = t.alteration.match(r);
                return i && o && i[0] === o[0]
              }
              return !1
            })
          }
        }, {
          key: "sortValue",
          value: function (t, n, r, i, o, a, l) {
            var s = e.getData(t, n, r, i, o, a, l);
            return p.flatten([g.default.sortValue(s.oncoKbIndicator), w.default.sortValue(s.civicEntry), y.default.sortValue(s.myCancerGenomeLinks), h.default.sortValue(s.isHotspot, s.is3dHotspot)])
          }
        }, {
          key: "download",
          value: function (t, n, r, i, o, a, l) {
            var s = e.getData(t, n, r, i, o, a, l);
            return ["OncoKB: " + g.default.download(s.oncoKbIndicator), "CIViC: " + w.default.download(s.civicEntry), "MyCancerGenome: " + y.default.download(s.myCancerGenomeLinks), "CancerHotspot: " + (s.isHotspot ? "yes" : "no"), "3DHotspot: " + (s.is3dHotspot ? "yes" : "no")].join(";")
          }
        }, {
          key: "renderFunction",
          value: function (t, n) {
            var r = e.getData(t, n.oncoKbAnnotatedGenes, n.hotspotData, n.myCancerGenomeData, n.oncoKbData, n.civicGenes, n.civicVariants),
              i = void 0;
            return !n.oncoKbData || !n.oncoKbData.result || n.oncoKbData.result instanceof Error || (i = this.getEvidenceQuery(t[0], n.oncoKbData.result)), e.mainContent(r, n, n.oncoKbEvidenceCache, i, n.pubMedCache)
          }
        }, {
          key: "mainContent",
          value: function (e, t, n, r, i) {
            return u.createElement("span", {
              style: {
                display: "inline-block",
                minWidth: 100
              }
            }, u.createElement(c.If, {
              condition: t.enableOncoKb || !1
            }, u.createElement(g.default, {
              hugoGeneSymbol: e.hugoGeneSymbol,
              geneNotExist: !e.oncoKbGeneExist,
              status: e.oncoKbStatus,
              indicator: e.oncoKbIndicator,
              evidenceCache: n,
              evidenceQuery: r,
              pubMedCache: i,
              userEmailAddress: t.userEmailAddress
            })), u.createElement(c.If, {
              condition: t.enableCivic || !1
            }, u.createElement(w.default, {
              civicEntry: e.civicEntry,
              civicStatus: e.civicStatus,
              hasCivicVariants: e.hasCivicVariants
            })), u.createElement(c.If, {
              condition: t.enableMyCancerGenome || !1
            }, u.createElement(y.default, {
              linksHTML: e.myCancerGenomeLinks
            })), u.createElement(c.If, {
              condition: t.enableHotspot || !1
            }, u.createElement(h.default, {
              isHotspot: e.isHotspot,
              is3dHotspot: e.is3dHotspot,
              status: e.hotspotStatus
            })))
          }
        }, {
          key: "DEFAULT_ANNOTATION_DATA",
          get: function () {
            return {
              oncoKbStatus: "complete",
              oncoKbGeneExist: !1,
              myCancerGenomeLinks: [],
              isHotspot: !1,
              is3dHotspot: !1,
              hotspotStatus: "complete",
              hasCivicVariants: !0,
              hugoGeneSymbol: "",
              civicStatus: "complete"
            }
          }
        }]), e
      }();
    t.default = T
  },
  924: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function l(e) {
      e.querySelector(".rc-tooltip-arrow").style.display = "none"
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var s = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      };
    t.hideArrow = l;
    var c = n(1),
      f = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(c),
      p = n(63),
      d = n(33),
      h = n(177),
      m = n(173),
      y = r(m),
      v = n(857),
      g = r(v),
      b = n(948),
      w = r(b),
      E = n(121),
      _ = n(13),
      C = n(949),
      T = r(C),
      A = n(856),
      k = r(A),
      O = function (e, t, n, r) {
        var i, o = arguments.length,
          a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : u(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
        else
          for (var l = e.length - 1; l >= 0; l--)(i = e[l]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return o > 3 && a && Object.defineProperty(t, n, a), a
      },
      I = x = function (e) {
        function t(e) {
          i(this, t);
          var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return n.showFeedback = !1, n.tooltipDataLoadComplete = !1, n.handleFeedbackOpen = n.handleFeedbackOpen.bind(n), n.handleFeedbackClose = n.handleFeedbackClose.bind(n), n.handleLoadComplete = n.handleLoadComplete.bind(n), n.tooltipContent = n.tooltipContent.bind(n), n
        }
        return a(t, e), s(t, [{
          key: "render",
          value: function () {
            var e = f.createElement("span", {
              className: "" + g.default["annotation-item"]
            });
            return "error" === this.props.status ? e = this.errorIcon() : "pending" === this.props.status ? e = this.loaderIcon() : (e = f.createElement("span", {
              className: "" + g.default["annotation-item"]
            }, f.createElement("i", {
              className: w.default["oncogenic-icon-image"] + " " + this.oncogenicImageClassNames(this.props.indicator),
              style: x.ONCOGENIC_ICON_STYLE,
              "data-test": "oncogenic-icon-image"
            })), this.showFeedback ? e = f.createElement("span", null, e, this.feedbackModal(this.props.hugoGeneSymbol, this.props.evidenceQuery && this.props.evidenceQuery.alteration)) : (this.tooltipDataLoadComplete || this.props.evidenceCache && this.props.evidenceQuery) && (e = f.createElement(y.default, {
              overlay: this.tooltipContent,
              placement: "right",
              trigger: ["hover", "focus"],
              onPopupAlign: l,
              destroyTooltipOnHide: !1
            }, e))), e
          }
        }, {
          key: "loaderIcon",
          value: function () {
            return f.createElement(h.Circle, {
              size: 18,
              scaleEnd: .5,
              scaleStart: .2,
              color: "#aaa",
              className: "pull-left"
            })
          }
        }, {
          key: "errorIcon",
          value: function () {
            return f.createElement(y.default, {
              overlay: f.createElement("span", null, "Error fetching OncoKB data"),
              placement: "right",
              trigger: ["hover", "focus"],
              destroyTooltipOnHide: !0
            }, f.createElement("span", {
              className: "" + g.default["annotation-item-error"]
            }, f.createElement("i", {
              className: "fa fa-exclamation-triangle text-danger"
            })))
          }
        }, {
          key: "feedbackModal",
          value: function (e, t) {
            var n = "entry.1744186665=" + (e || ""),
              r = "entry.1671960263=" + (t || ""),
              i = "entry.1381123986=" + (this.props.userEmailAddress || ""),
              o = "entry.1083850662=" + encodeURIComponent(window.location.href);
            return f.createElement(p.Modal, {
              show: this.showFeedback,
              onHide: this.handleFeedbackClose
            }, f.createElement(p.Modal.Header, {
              closeButton: !0
            }, f.createElement(p.Modal.Title, null, "OncoKB Annotation Feedback")), f.createElement(p.Modal.Body, null, f.createElement("iframe", {
              src: "https://docs.google.com/forms/d/1lt6TtecxHrhIE06gAKVF_JW4zKFoowNFzxn6PJv4g7A/viewform?" + n + "&" + r + "&entry.118699694&entry.1568641202&" + i + "&" + o + "&embedded=true",
              style: {
                width: 550,
                height: 500,
                border: "none",
                marginLeft: "10px"
              },
              marginHeight: 0,
              marginWidth: 0
            }, f.createElement(k.default, {
              status: A.TableCellStatus.LOADING
            }))))
          }
        }, {
          key: "tooltipContent",
          value: function () {
            return f.createElement(T.default, {
              geneNotExist: this.props.geneNotExist,
              indicator: this.props.indicator || void 0,
              evidenceCache: this.props.evidenceCache,
              evidenceQuery: this.props.evidenceQuery,
              pubMedCache: this.props.pubMedCache,
              handleFeedbackOpen: this.handleFeedbackOpen,
              onLoadComplete: this.handleLoadComplete
            })
          }
        }, {
          key: "handleLoadComplete",
          value: function () {
            this.tooltipDataLoadComplete || (this.tooltipDataLoadComplete = !0)
          }
        }, {
          key: "handleFeedbackOpen",
          value: function () {
            this.showFeedback = !0
          }
        }, {
          key: "handleFeedbackClose",
          value: function () {
            this.showFeedback = !1
          }
        }, {
          key: "oncogenicImageClassNames",
          value: function (e) {
            var t = void 0;
            return t = e && null != e.oncogenic ? (0, E.oncogenicImageClassNames)(e.oncogenic, e.vus, e.highestSensitiveLevel, e.highestResistanceLevel) : (0, E.oncogenicImageClassNames)("N/A", !1, "", ""), t = t.map(function (e) {
              return w.default[e]
            }), t.join(" ")
          }
        }], [{
          key: "sortValue",
          value: function (e) {
            if (!e) return [];
            var t = [];
            return t[0] = (0, E.calcOncogenicScore)(e.oncogenic, e.vus), t[1] = (0, E.calcSensitivityLevelScore)(e.highestSensitiveLevel), t[2] = (0, E.calcResistanceLevelScore)(e.highestResistanceLevel), t[3] = e.geneExist ? 1 : 0, t
          }
        }, {
          key: "download",
          value: function (e) {
            return e ? (e.oncogenic ? e.oncogenic : "Unknown") + ", " + (e.highestSensitiveLevel ? e.highestSensitiveLevel.toLowerCase() : "level NA") : "NA"
          }
        }, {
          key: "ONCOGENIC_ICON_STYLE",
          get: function () {
            return {
              backgroundImage: "url(" + n(968) + ")"
            }
          }
        }]), t
      }(f.Component);
    O([_.observable], I.prototype, "showFeedback", void 0), O([_.observable], I.prototype, "tooltipDataLoadComplete", void 0), I = x = O([d.observer], I), t.default = I;
    var x
  },
  925: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function l(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function s(e) {
      e.querySelector(".rc-tooltip-arrow").style.display = "none"
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var u = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      };
    t.hideArrow = s;
    var f = n(1),
      p = i(f),
      d = n(3),
      h = i(d),
      m = n(33),
      y = n(177),
      v = n(173),
      g = r(v),
      b = n(857),
      w = r(b),
      E = n(13),
      _ = n(969),
      C = r(_),
      T = function (e, t, n, r) {
        var i, o = arguments.length,
          a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : c(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
        else
          for (var l = e.length - 1; l >= 0; l--)(i = e[l]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return o > 3 && a && Object.defineProperty(t, n, a), a
      },
      A = function (e) {
        function t(e) {
          o(this, t);
          var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return n.tooltipDataLoadComplete = !1, n.cardContent = n.cardContent.bind(n), n
        }
        return l(t, e), u(t, [{
          key: "render",
          value: function () {
            var e = p.createElement("span", {
                className: "" + w.default["annotation-item"]
              }),
              t = n(972);
            if (this.props.hasCivicVariants || (t = n(973)), "error" == this.props.civicStatus) e = this.errorIcon();
            else if (void 0 !== this.props.civicEntry) {
              if (null !== this.props.civicEntry && "complete" == this.props.civicStatus) {
                e = p.createElement("span", {
                  className: "" + w.default["annotation-item"]
                }, p.createElement("img", {
                  width: 14,
                  height: 14,
                  src: t,
                  alt: "Civic Variant Entry"
                }));
                var r = p.createElement("div", {
                  className: "rc-tooltip-arrow-inner"
                });
                e = p.createElement(g.default, {
                  overlay: this.cardContent.bind(this, this.props.civicEntry),
                  placement: "right",
                  trigger: ["hover", "focus"],
                  arrowContent: r,
                  onPopupAlign: s,
                  destroyTooltipOnHide: !1
                }, e)
              }
            } else e = this.loaderIcon();
            return e
          }
        }, {
          key: "loaderIcon",
          value: function () {
            return p.createElement(y.Circle, {
              size: 18,
              scaleEnd: .5,
              scaleStart: .2,
              color: "#aaa",
              className: "pull-left"
            })
          }
        }, {
          key: "errorIcon",
          value: function () {
            return p.createElement(g.default, {
              overlay: p.createElement("span", null, "Error fetching Civic data"),
              placement: "right",
              trigger: ["hover", "focus"],
              destroyTooltipOnHide: !0
            }, p.createElement("span", {
              className: "" + w.default["annotation-item-error"]
            }, p.createElement("i", {
              className: "fa fa-exclamation-triangle text-danger"
            })))
          }
        }, {
          key: "cardContent",
          value: function (e) {
            return p.createElement(C.default, {
              title: "CIViC Variants",
              geneName: e.name,
              geneDescription: e.description,
              geneUrl: e.url,
              variants: e.variants
            })
          }
        }], [{
          key: "sortValue",
          value: function (e) {
            var t = 0;
            return e && (t = 1), t
          }
        }, {
          key: "download",
          value: function (e) {
            if (!e) return "NA";
            var t = h.values(e.variants),
              n = [];
            return t && t.length > 0 && t[0].evidence && h.toPairs(t[0].evidence).forEach(function (e) {
              n.push(e[0] + ": " + e[1])
            }), 0 === n.length ? "NA" : n.join(", ")
          }
        }]), t
      }(p.Component);
    T([E.observable], A.prototype, "tooltipDataLoadComplete", void 0), A = T([m.observer], A), t.default = A
  },
  926: function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      o = n(1),
      a = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(o),
      l = n(872),
      s = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(l),
      u = function () {
        function e() {
          r(this, e)
        }
        return i(e, null, [{
          key: "getValues",
          value: function (e, t, n) {
            var r = {},
              i = !0,
              o = !1,
              a = void 0;
            try {
              for (var l, s = e[Symbol.iterator](); !(i = (l = s.next()).done); i = !0) {
                var u = l.value;
                r[u.sampleId] = u[n]
              }
            } catch (e) {
              o = !0, a = e
            } finally {
              try {
                !i && s.return && s.return()
              } finally {
                if (o) throw a
              }
            }
            var c = t.filter(function (e) {
              return r[e] && r[e] > 0 && r[e].toString().length > 0
            });
            return 1 === c.length ? [r[c[0]].toString()] : c.map(function (e) {
              return e + ": " + r[e]
            })
          }
        }, {
          key: "getTextValue",
          value: function (t, n, r) {
            return e.getValues(t, n, r).join(";")
          }
        }, {
          key: "getDisplayValue",
          value: function (t, n, r) {
            return e.getValues(t, n, r).join("\n")
          }
        }, {
          key: "renderFunction",
          value: function (t, n, r) {
            return a.createElement("div", {
              className: s.default["integer-data"]
            }, e.getDisplayValue(t, n, r))
          }
        }, {
          key: "getReads",
          value: function (e, t) {
            var n = [];
            if (e) {
              var r = !0,
                i = !1,
                o = void 0;
              try {
                for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done); r = !0) {
                  var s = a.value;
                  n.push(s[t])
                }
              } catch (e) {
                i = !0, o = e
              } finally {
                try {
                  !r && l.return && l.return()
                } finally {
                  if (i) throw o
                }
              }
            }
            return 1 == n.length ? n[0] : n
          }
        }]), e
      }();
    t.default = u
  },
  927: function (e, t, n) {
    "use strict";

    function r(e, t, n) {
      return function (r) {
        var i = e(r);
        return null === i ? o.createElement(l.default, {
          status: a.TableCellStatus.LOADING
        }) : "error" === i.status ? o.createElement(l.default, {
          status: a.TableCellStatus.ERROR
        }) : null === i.data ? o.createElement(l.default, {
          status: a.TableCellStatus.NA,
          naAlt: n
        }) : t(i.data, r)
      }
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = r;
    var i = n(1),
      o = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(i),
      a = n(856),
      l = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(a)
  },
  928: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      l = n(1),
      s = i(l),
      u = n(3),
      c = i(u),
      f = n(856),
      p = r(f),
      d = n(871),
      h = r(d),
      m = function () {
        function e() {
          o(this, e)
        }
        return a(e, null, [{
          key: "getData",
          value: function (e, t) {
            var n = null;
            return t && (n = t[e[0].uniqueSampleKey] || null), n
          }
        }, {
          key: "sortBy",
          value: function (t, n) {
            var r = e.getData(t, n);
            return r || null
          }
        }, {
          key: "filter",
          value: function (t, n, r) {
            var i = e.getData(t, r);
            return null !== i && i.toUpperCase().indexOf(n) > -1
          }
        }, {
          key: "isVisible",
          value: function (t, n) {
            if (!t || !n) return !1;
            var r = {};
            return t.forEach(function (t) {
              var i = e.getData(t, n);
              i && (r[i] = t[0].sampleId)
            }), c.keys(r).length > 1
          }
        }, {
          key: "download",
          value: function (t, n) {
            return e.getData(t, n) || ""
          }
        }, {
          key: "render",
          value: function (t, n) {
            var r = e.getData(t, n);
            return r ? s.createElement(h.default, {
              maxLength: 30,
              text: r || "",
              tooltip: s.createElement("div", {
                style: {
                  maxWidth: 300
                }
              }, r)
            }) : s.createElement(p.default, {
              status: f.TableCellStatus.NA,
              naAlt: "Cancer type not available for this sample."
            })
          }
        }]), e
      }();
    t.default = m
  },
  937: function (e, t, n) {
    e.exports = n(6)(1265)
  },
  938: function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      l = n(1),
      s = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(l),
      u = n(177),
      c = n(176),
      f = function (e) {
        function t() {
          return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return o(t, e), a(t, [{
          key: "render",
          value: function () {
            return s.createElement(c.If, {
              condition: this.props.isHidden
            }, s.createElement(c.Else, null, s.createElement("h4", {
              style: this.props.style || {},
              className: this.props.className || ""
            }, this.props.title, s.createElement(c.If, {
              condition: this.props.isLoading
            }, s.createElement(u.ThreeBounce, {
              style: {
                display: "inline-block",
                marginLeft: 10
              }
            })))))
          }
        }]), t
      }(s.Component);
    t.default = f
  },
  939: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      s = n(1),
      u = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(s),
      c = n(178),
      f = r(c),
      p = n(1100),
      d = r(p),
      h = n(181),
      m = function (e) {
        function t() {
          return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return a(t, e), t
      }(f.default),
      y = function (e) {
        function t() {
          return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return a(t, e), l(t, [{
          key: "getDisplayValue",
          value: function (e) {
            var t = void 0;
            switch (e.attribute) {
              case "Overall Survival (Months)":
                t = parseInt(e.value, 10).toFixed(0);
                break;
              default:
                t = e.value
            }
            return t
          }
        }, {
          key: "render",
          value: function () {
            var e = this,
              t = this.props.data && this.props.data.map(function (e) {
                return {
                  attribute: e.clinicalAttribute.displayName || "",
                  value: e.value
                }
              });
            return u.createElement(m, {
              data: t,
              columns: [{
                name: "Attribute",
                render: function (e) {
                  return u.createElement("span", null, e.attribute)
                },
                download: function (e) {
                  return e.attribute
                },
                filter: function (e, t, n) {
                  return e.attribute.toString().toUpperCase().indexOf(n) > -1
                },
                sortBy: function (e) {
                  return e.attribute
                }
              }, {
                name: "Value",
                render: function (t) {
                  return u.createElement("span", null, e.getDisplayValue(t))
                },
                download: function (t) {
                  return e.getDisplayValue(t)
                },
                filter: function (e, t, n) {
                  return e.value.toString().toUpperCase().indexOf(n) > -1
                }
              }],
              showPagination: !1,
              showColumnVisibility: !1,
              className: d.default.patientTable,
              initialItemsPerPage: h.SHOW_ALL_PAGE_SIZE,
              initialSortColumn: "Attribute",
              initialSortDirection: "asc",
              showFilter: !1 !== this.props.showFilter,
              showCopyDownload: !1 !== this.props.showCopyDownload
            })
          }
        }]), t
      }(u.Component);
    t.default = y
  },
  940: function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }

    function i(e) {
      for (var t = p.extend({}, e), n = ["not applicable", "not available", "pending", "discrepancy", "completed", "", "null", "unknown", "na", "n/a", "[unkown]", "[not submitted]", "[not evaluated]", "[not applicable]", "[not available]", "[undefined]"], r = Object.keys(e), i = 0; i < r.length; i += 1) {
        var o = void 0,
          a = r[i];
        if (o = e[a], n.indexOf(o.toLowerCase()) > -1) delete t[a];
        else switch (a) {
          case "OS_MONTHS":
          case "DFS_MONTHS":
          case "AGE":
            p.isNumeric(o) && (o = Math.floor(o)), t[a] = o
        }
      }
      return t
    }

    function o(e, t) {
      if (!e) return null;
      for (var n = 0; n < t.length; n += 1) {
        var r = e[t[n]];
        if (void 0 !== r && null !== r) return r
      }
      return null
    }

    function a(e) {
      var t = p.extend({}, e),
        n = function (e, t) {
          var n = null,
            r = void 0,
            i = void 0,
            o = void 0;
          for (o = 0; o < t.length && (null === (r = e[t[o]]) || void 0 === r || (i = r.toLowerCase(), i.indexOf("metasta") >= 0 ? n = "Metastasis" : i.indexOf("recurr") >= 0 ? n = "Recurrence" : i.indexOf("progr") >= 0 ? n = "Progressed" : i.indexOf("xeno") >= 0 || i.indexOf("pdx") >= 0 ? n = "Xenograft" : i.indexOf("cfdna") >= 0 ? n = "cfDNA" : i.indexOf("prim") >= 0 && (n = "Primary"), null === n || void 0 === n)); o += 1);
          return n
        }(e, ["SAMPLE_CLASS", "SAMPLE_TYPE", "TUMOR_TISSUE_SITE", "TUMOR_TYPE"]);
      if (null !== n) {
        var r = void 0;
        t.DERIVED_NORMALIZED_CASE_TYPE = n, r = "Metastasis" === t.DERIVED_NORMALIZED_CASE_TYPE ? o(e, ["METASTATIC_SITE", "TUMOR_SITE"]) : "Primary" === t.DERIVED_NORMALIZED_CASE_TYPE ? o(e, ["PRIMARY_SITE", "TUMOR_SITE"]) : o(e, ["TUMOR_SITE"]), null !== r && (t.DERIVED_SAMPLE_LOCATION = r)
      }
      return t
    }

    function l(e) {
      return a(i(e))
    }

    function s(e, t) {
      return u(l(e), t)
    }

    function u(e, t) {
      return Object.keys(e).map(function (n) {
        var r = e[n];
        return y.createElement("span", {
          is: !0,
          class: "clinical-attribute",
          "attr-id": n,
          "attr-value": r,
          study: t
        }, r)
      })
    }

    function c() {
      var e = this;
      p(".sample-record-inline, #more-patient-info").each(function () {
        var t = h.default.sortBy(p(e).find("a > .clinical-attribute"), function (e) {
          var t = parseInt(p(e).css("order"), 10);
          return isNaN(t) && console.log("Warning: No order attribute found in .clinical-attribute."), t
        });
        p(t[0]).addClass("first-order")
      })
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.addFirstOrderClass = t.getSpanElementsFromCleanData = t.getSpanElements = t.cleanAndDerive = void 0;
    var f = n(90),
      p = r(f),
      d = n(1059),
      h = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(d),
      m = n(1),
      y = r(m);
    t.cleanAndDerive = l, t.getSpanElements = s, t.getSpanElementsFromCleanData = u, t.addFirstOrderClass = c
  },
  941: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function l(e) {
      e.querySelector(".rc-tooltip-arrow").style.left = "10px"
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
    t.placeArrow = l;
    var u = n(1),
      c = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(u),
      f = n(177),
      p = n(173),
      d = r(p),
      h = n(857),
      m = r(h),
      y = n(942),
      v = r(y),
      g = function (e) {
        function t(e) {
          i(this, t);
          var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return n.state = {}, n
        }
        return a(t, e), s(t, null, [{
          key: "sortValue",
          value: function (e, t) {
            var n = 0;
            return e && (n += 1), t && (n += .5), n
          }
        }, {
          key: "hotspotInfo",
          value: function (e, n) {
            return c.createElement("span", {
              className: v.default["hotspot-info"]
            }, t.title(e, n), c.createElement("br", null), t.publication(e, n), c.createElement("br", null), c.createElement("br", null), t.link(e, n))
          }
        }, {
          key: "title",
          value: function (e, t) {
            var n = e ? c.createElement("b", null, "Recurrent Hotspot") : "",
              r = e && t ? "and" : "",
              i = t ? c.createElement("b", null, "3D Clustered Hotspot") : "";
            return c.createElement("span", null, n, " ", r, " ", i)
          }
        }, {
          key: "publication",
          value: function (e, t) {
            var n = e ? "a recurrent hotspot (statistically significant)" : "",
              r = e && t ? "and" : "",
              i = t ? "a 3D clustered hotspot" : "",
              o = e ? c.createElement("a", {
                href: "http://www.ncbi.nlm.nih.gov/pubmed/26619011",
                target: "_blank"
              }, "Chang et al., Nat Biotechnol, 2016") : "",
              a = t ? c.createElement("a", {
                href: "http://genomemedicine.biomedcentral.com/articles/10.1186/s13073-016-0393-x",
                target: "_blank"
              }, "Gao et al., Genome Medicine, 2017") : "";
            return c.createElement("span", null, "This mutated amino acid was identified as ", n, " ", r, " ", i, " in a population-scale cohort of tumor samples of various cancer types using methodology based in part on ", o, " ", r, " ", a, ".")
          }
        }, {
          key: "link",
          value: function (e, t) {
            var n = e ? c.createElement("a", {
                href: "http://www.cancerhotspots.org/",
                target: "_blank"
              }, "http://cancerhotspots.org/") : "",
              r = e && t ? "and" : "",
              i = t ? c.createElement("a", {
                href: "http://www.3dhotspots.org/",
                target: "_blank"
              }, "http://3dhotspots.org/") : "";
            return c.createElement("span", null, "Explore all mutations at ", n, " ", r, " ", i, ".")
          }
        }]), s(t, [{
          key: "loaderIcon",
          value: function () {
            return c.createElement(f.Circle, {
              size: 18,
              scaleEnd: .5,
              scaleStart: .2,
              color: "#aaa",
              className: "pull-left"
            })
          }
        }, {
          key: "render",
          value: function () {
            var e = this.props,
              r = e.isHotspot,
              i = e.is3dHotspot,
              o = c.createElement("span", {
                className: "" + m.default["annotation-item"]
              });
            if ("pending" === this.props.status) o = this.loaderIcon();
            else if (r || i) {
              var a = 14,
                s = n(943);
              r || (s = n(944), a = 18);
              var u = c.createElement("div", {
                  className: "rc-tooltip-arrow-inner"
                }),
                f = t.hotspotInfo(r, i);
              o = c.createElement(d.default, {
                overlay: f,
                placement: "topLeft",
                trigger: ["hover", "focus"],
                arrowContent: u,
                onPopupAlign: l
              }, c.createElement("span", {
                className: m.default["annotation-item"] + " chang_hotspot"
              }, c.createElement("img", {
                width: 14,
                height: a,
                src: s,
                alt: "Recurrent Hotspot Symbol"
              })))
            }
            return o
          }
        }]), t
      }(c.Component);
    t.default = g
  },
  942: function (e, t) {
    e.exports = {
      portalWidth: "cancerHotspots-module__portalWidth__2IjLk",
      "hotspot-info": "cancerHotspots-module__hotspot-info__1GI2v"
    }
  },
  943: function (e, t) {
    e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjEwMjQiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPgogICAgPGcgaWQ9Imljb21vb24taWdub3JlIj4KICAgIDwvZz4KICAgIDxwYXRoIGZpbGw9IiNmZjk5MDAiIGQ9Ik0zMjEuMDA4IDEwNDUuMzMzYy02OC4yNDUtMTQyLjAwOC0zMS45MDEtMjIzLjM3OSAyMC41NTEtMzAwLjA0NCA1Ny40NC04My45NTYgNzIuMjQ0LTE2Ny4wNjUgNzIuMjQ0LTE2Ny4wNjVzNDUuMTUzIDU4LjcgMjcuMDkyIDE1MC41MDhjNzkuNzcyLTg4LjggOTQuODI0LTIzMC4yOCA4Mi43ODMtMjg0LjQ2NCAxODAuMzE1IDEyNi4wMTIgMjU3LjM3NiAzOTguODU2IDE1My41MjMgNjAxLjA2NSA1NTIuMzcyLTMxMi41MzIgMTM3LjM5OS03ODAuMTcyIDY1LjE1NS04MzIuODUxIDI0LjA4MSA1Mi42NzYgMjguNjQ4IDE0MS44NTEtMjAgMTg1LjEyNy04Mi4zNTItMzEyLjI3Ni0yODUuOTcyLTM3Ni4yNzYtMjg1Ljk3Mi0zNzYuMjc2IDI0LjA4MyAxNjEuMDQ0LTg3LjI5NiAzMzcuMTQ0LTE5NC42OTYgNDY4LjczMS0zLjc3NS02NC4yMTYtNy43ODMtMTA4LjUyOC00MS41NDktMTY5Ljk4LTcuNTggMTE2LjY1Ni05Ni43MzIgMjExLjc0OC0xMjAuODczIDMyOC42MjgtMzIuNzAxIDE1OC4yODcgMjQuNDk2IDI3NC4xOCAyNDEuNzQ4IDM5Ni42MjN6Ij48L3BhdGg+Cjwvc3ZnPgo="
  },
  944: function (e, t) {
    e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuNCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyNC4yNjNweCIgaGVpZ2h0PSIzNi4zNjZweCIgdmlld0JveD0iMCAwIDI0LjI2MyAzNi4zNjYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0LjI2MyAzNi4zNjYiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGZpbGw9IiNGRjk5MDAiIGQ9Ik02LjgyOCwyNy45NDdjLTEuODU5LTMuODcyLTAuODY5LTYuMDk0LDAuNTY0LTguMTg0YzEuNTY1LTIuMjk2LDEuOTY4LTQuNTU4LDEuOTY4LTQuNTU4CgkJczEuMjMxLDEuNiwwLjc0Miw0LjEwNGMyLjE4MS0yLjQyMywyLjU5MS02LjI4NiwyLjI1Ni03Ljc2NGM0LjkyMSwzLjQzNiw3LjAyNywxMC44ODksNC4xOSwxNi40MDEKCQlDMzEuNjI3LDE5LjQxOSwyMC4zLDYuNjYsMTguMzI2LDUuMjIxYzAuNjU2LDEuNDM5LDAuNzgzLDMuODczLTAuNTQ2LDUuMDUzQzE1LjUzNiwxLjc1LDkuOTgsMCw5Ljk4LDAKCQljMC42NTcsNC4zOTctMi4zODgsOS4yMDgtNS4zMTYsMTIuOEM0LjU2LDExLjA0Niw0LjQ1MSw5LjgzMSwzLjUzLDguMTU1Yy0wLjIwMSwzLjE4My0yLjYzNiw1Ljc4NS0zLjI5OCw4Ljk3NAoJCUMtMC42NTksMjEuNDQ1LDAuOSwyNC42MSw2LjgyOCwyNy45NDdMNi44MjgsMjcuOTQ3eiIvPgoJPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMC41ODMgMCAwIDAuNTgzIDMuNzMyNCAzNi4xOTYzKSIgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9IidBcmlhbC1Cb2xkSXRhbGljTVQnIiBmb250LXNpemU9IjIwLjY4MDIiPjNEPC90ZXh0Pgo8L2c+Cjwvc3ZnPgo="
  },
  945: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function l(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function s(e) {
      e.querySelector(".rc-tooltip-arrow").style.left = "10px"
    }

    function u(e) {
      var t = e.indexOf('"') + 1,
        n = t + e.slice(t).indexOf('"'),
        r = e.indexOf(">") + 1,
        i = e.indexOf("</a>"),
        o = e.slice(t, n).trim(),
        a = e.slice(r, i).trim();
      return o.length > 0 && a.length > 0 ? {
        url: o,
        text: a
      } : void 0
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var c = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
    t.placeArrow = s, t.parseMyCancerGenomeLink = u;
    var f = n(1),
      p = i(f),
      d = n(3),
      h = i(d),
      m = n(173),
      y = r(m),
      v = n(857),
      g = r(v),
      b = n(946),
      w = r(b),
      E = function (e) {
        function t(e) {
          o(this, t);
          var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return n.state = {}, n
        }
        return l(t, e), c(t, null, [{
          key: "sortValue",
          value: function (e) {
            return e.length > 0 ? 1 : 0
          }
        }, {
          key: "download",
          value: function (e) {
            return e.length > 0 ? "present" : "not present"
          }
        }, {
          key: "myCancerGenomeLinks",
          value: function (e) {
            var t = [];
            return h.each(e, function (e, n) {
              var r = u(e);
              r && t.push(p.createElement("li", {
                key: n
              }, p.createElement("a", {
                href: r.url,
                target: "_blank"
              }, r.text)))
            }), p.createElement("span", null, p.createElement("b", null, "My Cancer Genome links:"), p.createElement("br", null), p.createElement("ul", {
              className: w.default["link-list"]
            }, t))
          }
        }]), c(t, [{
          key: "render",
          value: function () {
            var e = p.createElement("span", {
              className: "" + g.default["annotation-item"]
            });
            if (this.props.linksHTML.length > 0) {
              var r = p.createElement("div", {
                  className: "rc-tooltip-arrow-inner"
                }),
                i = t.myCancerGenomeLinks(this.props.linksHTML);
              e = p.createElement(y.default, {
                overlay: i,
                placement: "topLeft",
                trigger: ["hover", "focus"],
                arrowContent: r,
                onPopupAlign: s
              }, p.createElement("span", {
                className: g.default["annotation-item"] + " mcg"
              }, p.createElement("img", {
                width: "14",
                height: "14",
                src: n(947),
                alt: "My Cancer Genome Symbol"
              })))
            }
            return e
          }
        }]), t
      }(p.Component);
    t.default = E
  },
  946: function (e, t) {
    e.exports = {
      portalWidth: "myCancerGenome-module__portalWidth__m3pyZ",
      "link-list": "myCancerGenome-module__link-list__2ZNFI"
    }
  },
  947: function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAACACAYAAAA73po8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAADvNJREFUeNrsXT1y4koXPaacj94KPnkFIwfEI0eEg1dgWIFNkVJFu4qUwrMCMyswExIZxwTWrMB6Kxi9FfAFuhq3Zf20Wt2tFuJWuZ7rDZaa1tG95/722eFwQCJnZ2fogvSn2yEAj/tfm/1yEGi4jwvAB+AC+EL3fKF/3gEI9stB1IY9OxwOOOsSWPrTrQfgiR5eWnYAJipA059uRwBuU4DMkzWAn/vlYHcCi13a5Engo+P9crCWuL4D4I5A4kgscU1gjU5gaV6jPFd4iMKAIVMzBzBSsNQQwLUOk3gCizhYnok7iEoE4KroofWnW59A4itebum9T2DRBxSftIrMW37JmwUyNUMCiatx2RGAC5tM0uFwwHkHnJ+55N+5AFb96XZCAPmmyNSIiEP86sqmjbRCsxD5/M65mem3LKCff8nd3Ale1wXwJrmsgDykkSRhVSHX++Vgc9Is8cNMvAe35C3zeW7Qn24TMxFS3CIEEGaA6FbQ3IR5YOxPty+CXpQurbjptGYh7+RRMA4ha/MTbfRfKpbyFyT75SAUXO+K3OIm5NIGstsIwZVwY6UBs18O/lG47leN4C6Mv+yXg7ENYOlZHu+otcmq+QNpLNMytMUM9QwCJWH4psjiD5UXI5M1aeAZOeQAdAcsBmITvGxE+UhFwKw1aCwRuekMWMiFNUkQf2q89oSIs1FTRJq5E5rl1uB3CnXGJiiqOm6Avwy7AhaTX/SH7huQK2vaQ7k9erCQB+Qa/E5GOAVpL5OA8cicH7VmMQoUk8k3IrxXBk3S7bGDxTP4fe5NbyClBi4Nkd5RV1xnE1olbOLG++Ug3C8HlwRWnVrGoZLNowXLNwP3iNBMwCwNGkZaRidvmjf1/bTnhiSq1GTEmlQ+971d4hgjqI9aj/fLwZoKu5Da3x0qJElFxUgisT/dvmkmuQ/75WACi4VMxzcKIcgAJyJOFCIuo/gqEI7YQVG3gkmwHDTzlDFaJBRKSMIJXzPA88KBI8p72BVeQqluBeNgoRD1nxNQtIDOh3htce2aGBMlCt4JKFpddlGepoQUt9F1vu86UHgTI+iqD9sAFpVeUIi4n4bZ9sQYW3iMLTzT9+WSmqJcqROa5YHs7s7S9b0CeGVs8dgAYDa0P2Xi2A6WugG5HeJmK2t7gBlb8A9hxNhi1IRpRnm6obYLrdsb+iOB6IiI231T4XsJwKS/5yVjs8DkGkrqm2sXr2vtG6LFO4LgCOjnxbZIrKBs8DHJ94g47G/SHAX96XaM7B4nJXt6rgkoLsfAd5wa/A/vTV1hWzSHgPxKgcVjbHHH2OzBMGA2BJg0d1JSZlrbDJEGuUEcU+G1SadiIRmmKGRsdtHEWvrT7SMH3nC/HNReR62gXH+69Snk/Iq4GNtPbdZLx2Ie6XJOl7GF28RC6CVdc+RXifQkgTIiMuWW2PEuyQM+B8jcphZDgNngY8uuWbBQw1NZPGHTlsF66szQLEJcYrkh0EQw3zKSFg/Ak6o2ksqcRTDbqSTTeZJavMXHe6IxQBz9ln6BK7vOgpX60TGbIOIhiacXMDbbWbrU25SGeetPt7XGj1U1QyLq7NhN0Ir7eWZs8cbYYmiZVuEBzT+7V5qJY47gVvQKjk1+Z5DYJ8YWzFKt8gns/en2WYbHVAVLmcYIbBzLqcHryfqO86Zc5ZRWcVDeMuKTWfK1gYWAEHVYq6S9nipvtCkZCdIFB8AzTbXSZobyABF2xQNibBYxNrtGXEsSpoikzSYoS+760+2rSGusDFgecrTLPTomjM3WiBOGY9DBDQ2boCHkAoEekd9C8yWVG8qYg68k/3CS2mB5Qv0SysycnnRuiMoI1l3WKhYCxYGaWtsRJSLVuc6EvgDA7hSttUJ8hdcaZcVj6sZZ7nHE2eW4JsV8IbakqF7nKk1664JlDuBWReW4pXKDuBD7tQWg+arhmh/MkXSlXH+6ZRyaHynvELVQe3jkbvrkSQQA7hmbbRDPvk2GJa9g2cELKXF0mLb+dOsmFY3nkkDx8LHLzSMUXtd8cAzAF8ZmE4HPOogDUN9oo14Ym7EK93JozcMMdf4E4IyxWcjY4oKA8m/HzFAit6BxJjIlCg69bVn+/GS/HDzUAEsynmPN2Gxc8Lm8Wfr/UIRVBCjPRRvM2KxVhy9pHEAQ7JeDS1nXuahCblWTvyQPelTSsHVX8+3ySj67OTlXn/e0VxG9Iid5PNeozOJTCTINW6rcxx+MLVzyhpyuoyXxinoV/uAOYgPwHEiez0OFRAGvqSpmcv+XY3ZcxhZ+6j4h95Ed4iDjGMAF/XtEfMhvyTMNNV7bFSa4FN5fVXnD+9Mtk2xin+C9HNDhCVZqY9y8L5UhrwAcxhaTpJenrE2DuM91ixRACM0F4j0BoHgoL9DOjMHI8Bd6q3clPOSnYY+gDaItbJEMJOgJeD51jn1ZSf7dhPvyLxmAYsjO8Oat8xLAlekOQcPyWzcIyzRLWW+QiDmqbPOpqfwCcToh7wFnHhbFcxPueqHFhdXKXFxN1/27b+c1PR8RuYFEoxNxBlbw7yFji2vIndl8jKLrZfiV/JIZlMuoV6kr/+hKBZB7/ciB6KyraNFwjuPfUR1FQbmV4u8x1LVBVK2WzFZ7QLdF9aFcH+qUPmkWKq1TPe5qs18OrnES3ZrFhfyh5584EJ1HgCLN8l3D9/Db/BAYW6wYWzzb1kyW4eKGirhLhIwYU5Zm0ZWQurSxp4ixRdK7vcP7uPOIfvfwOYp7JeNZccnPCHGidKJJu/gKSP9VetjjJ80i4+ZWENdyBeIjTmfMibM90e/pPbmVAIqH9+SnA+BO12RLesh1tMs4bypo2gw5Gh+GZylIqpJCGVOU5QmOsmJCBC6HsQWrkcSU1VrronrqXkseqE55QLWAloQJmoU595gXvFhz2fAFmfuqgNmVjXUzOTT5m41Ioe7CpFEsrGpOqYzhQATYr6jB/JKsul9yzSLAPEC8LieAQNL0POOtmXdQuyTxmjU9nHmBB+cytrijvRpyHManh7sBMM6o2NsgO341RHF86LYGBxkTuL0SEzkWCZr2BGxr10CzY2x2hbg4O888rRCXPcwzeN4wi9eQKcqSm6w11ORIiXaJUH4YhPCAn16Gres8YLgHJmL3A8QFU2fcTx5JzAKMl0NkN5yp82sApoi/VDrprFe0SMUSthAz3wWAclWgNUTJcZaZ+KXQnV7j8yGfm6rF9ec5RGykYeP/tV+bfHiD+dhIEVCqaOJ70b1lbLZmbDGHovjUfjkYc0fuJeapkvQ0BHVaqVkolP/M/awUAyXhLQ8518uSawA7hbU411UIrajrLHpCVhUJLFcsnsBnItIOlYHCAWbCmYQwx3NKPhsQ2VZljkK8pzUqS26TmeLsc+0jTAxolqLzpzcAfhUQ11YIlzcKUHEubuEcXDpkGooAs2vBXkap3zeI6383slrEQplzWrRyu/F5GYsmwKxQL2/0swUbOUFc9BwhzgofVQiBLAWvOYf96fauikck1OvMtYN4Euu0YoQYNy3h9zGCQQAsWWP0I8THCpbuhXCv8345SKqmHiTWacu40yG5rSsAb5YNOTbBVbJccKdKmKTqHNwJclowCniALaQwTG3SnJJ/TgfwUpTvu9ECFgLMBnHTlghptWmOf9Z6fajtYrBRq3goLmv1tIEl8df3y8EVyqdUWjPFkgJimYChksdjFWVTv2vVs1Dj+1WOWdpZeGBmnld2VydZZ7FWcaCwDad28ROlBy7wOUJr3WxcCqrlAfjxCPnLUCDkERoDCwEmIg2z5tzlnaUbmJdAc1GcOGyjiJBX4RiY8hPjqUf6xeZBylTptsrx3i6OIQYj2HD2oZGsSGod1VsgL4hn4zr2gmX2kOPSOzieovUyDrZBxVGtOsBySxv+bDlgxnjPrgcEnqsjGs3xvSCEcL1fDq6rhjWUmqGMbrhOnRpvielxSUPO6UV44UASyMa9Kp++KkGoRv3pNqLIbxPcxCHSGra9vIB7GXlTmbTXeBlej/IxJ6o1y58cV62Rc55TRLZwELPFmmJIJsWv8KfCxLWKZulpQH1mDKOhwyD4GMKIwNMKDUIHTb0R2P2Klwh0rEslwXVL/v2pAcK7w8fo8nfbNUl/uk1qgIc1LvW77WBxoX5IUJnHE+Fja4trMVAYaRJfweWs1ywiCxzSvDqTYvWRfKRNku5GVRIdA1gS/mLMHFG2eZ3BYWzxblQPDYSuoUk9hQsMIVbj4pg2R3gfwhxYBJQRcRMHLRHVrrNXYQOuRJONpImSty+UKX2ID3uYhRYBRdcLs6NaI6VyOBy0JBI9xNVnZWTyQyF3KuD0Be+BJq/ALgeII5QBVfC1wS0eQm91XnvAwmmCEbKDSSH340BdcU7i+fyyFTgVNa+saEmxaAOLBeo4BHBvW5mEhgnYmd6f5NE9pWDpNbl59DB18AiXvK63Blz1ojiKZ+BWka4L9yzYR51xEBdx5Pg5faC16VgKzI1fC44ZLBvonzblA3htUMscxZy+RjkL9+Y9Qs8AoSwxmgEnsv/HoGnX8hAb5yycmGxxfSRibUpM3ivQeXErwELh6fBIAXNr8Hvtjh4sJKbHcmivsSGOZJJY/+gKWNYN3FN3jc2Nyf3T3QFqDVjoiwaGb+tCU46GK4k0IREMlGLYpFlME91Ehv3p9q7lxHZioq/cNrBsGrrvSgN/MUVs16ZCAVaBhVoX1g3dXllRFnlajoE135vsyzqHffLLsApPxENcST8uAIFPvyb//ZoDijDFIb5BbWtsiIITx3SJFRHcjIfyhuaKq8c0pdMnUHylh1xlPRd5HILMnUvXrHrtEA1l0xsvUSiJTzQxvisk3lSH8EoVH3FDAt2Uxnohb2fX5IGk1oKFNu/JkOuZAORn8jD60+2qBmDGNo8bOVawOIiryjxNt9gRQNY595cpVLJi5q8usPRsXRw3TUq16l0jLha/KtEAVUa4/tUqOGKxVrOkNMwT6nXqJS75jyrBq4o1sw9NTYvovBnKiV1UPawpcWGl5/EKdisc/RyaVoElBZqkayAvxrGDwip/0m53iBODPGgCcmU3OHJpJVgyHiJPQgPdE7256UqBRdPDzYPlJCcpkv8PAHSv/QtFBkyYAAAAAElFTkSuQmCC"
  },
  948: function (e, t) {
    e.exports = {
      portalWidth: "oncogenicIcon-module__portalWidth__3lDXV",
      "oncogenic-icon-image": "oncogenicIcon-module__oncogenic-icon-image__3ptbU",
      level1: "oncogenicIcon-module__level1__2I59M",
      oncogenic: "oncogenicIcon-module__oncogenic__1PXxv",
      level2A: "oncogenicIcon-module__level2A__2fiNZ",
      level2B: "oncogenicIcon-module__level2B__2Q7_L",
      level3A: "oncogenicIcon-module__level3A__1you4",
      level3B: "oncogenicIcon-module__level3B__2B8Jp",
      level4: "oncogenicIcon-module__level4__2XZHD",
      levelR1: "oncogenicIcon-module__levelR1__3_5T8",
      levelR2: "oncogenicIcon-module__levelR2__3Qirw",
      levelR3: "oncogenicIcon-module__levelR3__2H4x5",
      level1R: "oncogenicIcon-module__level1R__30RSu",
      level2AR: "oncogenicIcon-module__level2AR__2oYQp",
      level2BR: "oncogenicIcon-module__level2BR__2yX9i",
      level3AR: "oncogenicIcon-module__level3AR__3KUvC",
      level3BR: "oncogenicIcon-module__level3BR__3Gitf",
      level4R: "oncogenicIcon-module__level4R__CLk5P",
      "likely-neutral": "oncogenicIcon-module__likely-neutral__32Yau",
      "unknown-oncogenic": "oncogenicIcon-module__unknown-oncogenic__Fb5Ww",
      "no-info-oncogenic": "oncogenicIcon-module__no-info-oncogenic__3eAEd",
      vus: "oncogenicIcon-module__vus__3nQPW"
    }
  },
  949: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      u = n(1),
      c = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(u),
      f = n(950),
      p = r(f),
      d = n(33),
      h = n(121),
      m = n(856),
      y = r(m),
      v = function (e, t, n, r) {
        var i, o = arguments.length,
          a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : s(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
        else
          for (var l = e.length - 1; l >= 0; l--)(i = e[l]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return o > 3 && a && Object.defineProperty(t, n, a), a
      },
      g = function (e) {
        function t() {
          return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return a(t, e), l(t, [{
          key: "render",
          value: function () {
            var e = c.createElement("span", null),
              t = this.evidenceCacheData;
            if (this.props.geneNotExist && (e = c.createElement(p.default, {
                geneNotExist: !0,
                pmidData: {},
                handleFeedbackOpen: this.props.handleFeedbackOpen
              })), !t || !this.props.indicator) return e;
            if ("complete" === t.status && t.data && !this.props.geneNotExist) {
              var n = t.data,
                r = this.pmidData;
              e = c.createElement(p.default, {
                geneNotExist: this.props.geneNotExist,
                title: this.props.indicator.query.hugoSymbol + " " + this.props.indicator.query.alteration + " in " + this.props.indicator.query.tumorType,
                gene: this.props.indicator.geneExist ? this.props.indicator.query.hugoSymbol : "",
                oncogenicity: this.props.indicator.oncogenic,
                oncogenicityPmids: (0, h.generateOncogenicCitations)(n.oncogenicRefs),
                mutationEffect: n.mutationEffect.knownEffect,
                mutationEffectPmids: (0, h.generateMutationEffectCitations)(n.mutationEffect.refs),
                geneSummary: this.props.indicator.geneSummary,
                variantSummary: this.props.indicator.variantSummary,
                tumorTypeSummary: this.props.indicator.tumorTypeSummary,
                biologicalSummary: n.mutationEffect.description,
                treatments: (0, h.generateTreatments)(n.treatments),
                pmidData: r,
                handleFeedbackOpen: this.props.handleFeedbackOpen
              })
            } else "pending" === t.status ? e = c.createElement(y.default, {
              status: m.TableCellStatus.LOADING
            }) : "error" === t.status && (e = c.createElement(y.default, {
              status: m.TableCellStatus.ERROR
            }));
            return e
          }
        }, {
          key: "componentDidUpdate",
          value: function () {
            this.evidenceCacheData && "complete" === this.evidenceCacheData.status && this.evidenceCacheData.data && this.props.onLoadComplete && this.props.onLoadComplete()
          }
        }, {
          key: "evidenceCacheData",
          get: function () {
            var e = void 0;
            if (!this.props.geneNotExist && this.props.evidenceCache && this.props.evidenceQuery) {
              var t = this.props.evidenceCache.getData([this.props.evidenceQuery.id], [this.props.evidenceQuery]);
              t && (e = t[this.props.evidenceQuery.id])
            }
            return e
          }
        }, {
          key: "pmidData",
          get: function () {
            if (this.props.pubMedCache && this.evidenceCacheData) {
              var e = (0, h.extractPmids)(this.evidenceCacheData.data),
                t = !0,
                n = !1,
                r = void 0;
              try {
                for (var i, o = e[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                  var a = i.value;
                  this.props.pubMedCache.get(a)
                }
              } catch (e) {
                n = !0, r = e
              } finally {
                try {
                  !t && o.return && o.return()
                } finally {
                  if (n) throw r
                }
              }
            }
            return this.props.pubMedCache && this.props.pubMedCache.cache || {}
          }
        }]), t
      }(c.Component);
    g = v([d.observer], g), t.default = g
  },
  950: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function l(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var s = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      u = n(1),
      c = i(u),
      f = n(3),
      p = i(f),
      d = n(892),
      h = r(d),
      m = n(176),
      y = n(173),
      v = r(y),
      g = n(121);
    n(964), n(965);
    var b = function (e) {
      function t() {
        o(this, t);
        var e = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return e.state = {
          activeTab: "oncogenicity",
          levelsCollapsed: !0
        }, e.handleOncogenicityTabSelect = e.handleOncogenicityTabSelect.bind(e), e.handleMutationEffectTabSelect = e.handleMutationEffectTabSelect.bind(e), e.handleLevelCollapse = e.handleLevelCollapse.bind(e), e
      }
      return l(t, e), s(t, null, [{
        key: "LEVELS",
        get: function () {
          return ["1", "2A", "2B", "3A", "3B", "4", "R1"]
        }
      }, {
        key: "LEVEL_ICON_STYLE",
        get: function () {
          return {
            backgroundImage: "url(" + n(966) + ")"
          }
        }
      }, {
        key: "LEVEL_DESC",
        get: function () {
          return {
            1: c.createElement("span", null, c.createElement("b", null, "FDA-recognized"), " biomarker predictive of response to an ", c.createElement("b", null, "FDA-approved"), " drug ", c.createElement("b", null, "in this indication")),
            "2A": c.createElement("span", null, c.createElement("b", null, "Standard care"), " biomarker predictive of response to an ", c.createElement("b", null, "FDA-approved"), " drug ", c.createElement("b", null, "in this indication")),
            "2B": c.createElement("span", null, c.createElement("b", null, "Standard care"), " biomarker predictive of response to an ", c.createElement("b", null, "FDA-approved"), " drug ", c.createElement("b", null, "in another indication"), ", but not standard care for this indication"),
            "3A": c.createElement("span", null, c.createElement("b", null, "Compelling clinical evidence"), " supports the biomarker as being predictive of response to a drug ", c.createElement("b", null, "in this indication"), ", but neither biomarker and drug are standard care"),
            "3B": c.createElement("span", null, c.createElement("b", null, "Compelling clinical evidence"), " supports the biomarker as being predictive of response to a drug ", c.createElement("b", null, "in another indication"), ", but neither biomarker and drug are standard care"),
            4: c.createElement("span", null, c.createElement("b", null, "Compelling biological evidence"), " supports the biomarker as being predictive of response to a drug, but neither biomarker and drug are standard care"),
            R1: c.createElement("span", null, c.createElement("b", null, "Standard care"), " biomarker predictive of ", c.createElement("b", null, "resistance"), " to an ", c.createElement("b", null, "FDA-approved"), " drug ", c.createElement("b", null, "in this indication"))
          }
        }
      }]), s(t, [{
        key: "treatmentRow",
        value: function (e, n, r, i, o, a, l, s, u) {
          var f = this,
            p = function () {
              return c.createElement("div", {
                style: {
                  maxWidth: "200px"
                }
              }, r)
            },
            d = u.length > 0 || s.length > 0 ? function () {
              return c.createElement("div", {
                style: {
                  maxWidth: "400px",
                  maxHeight: "200px",
                  overflowY: "auto"
                }
              }, c.createElement("ul", {
                className: "list-group",
                style: {
                  marginBottom: 0
                }
              }, f.abstractList(u), f.pmidList(s, l)))
            } : c.createElement("span", null);
          return c.createElement("tr", {
            key: e
          }, c.createElement("td", {
            key: "level"
          }, c.createElement(v.default, {
            overlay: p,
            placement: "left",
            trigger: ["hover", "focus"],
            destroyTooltipOnHide: !0
          }, c.createElement("i", {
            className: "level-icon level-" + n,
            style: t.LEVEL_ICON_STYLE
          }))), c.createElement("td", {
            key: "alterations"
          }, (0, g.mergeAlterations)(i)), c.createElement("td", {
            key: "treatment"
          }, o), c.createElement("td", {
            key: "cancerType"
          }, a), c.createElement("td", {
            key: "citations"
          }, c.createElement(m.If, {
            condition: u.length > 0 || s.length > 0
          }, c.createElement(v.default, {
            overlay: d,
            placement: "right",
            trigger: ["hover", "focus"],
            destroyTooltipOnHide: !0
          }, c.createElement("i", {
            className: "fa fa-book"
          })))))
        }
      }, {
        key: "levelListItem",
        value: function (e, n) {
          return c.createElement("li", {
            key: e
          }, c.createElement("i", {
            className: "level-icon level-" + e,
            style: t.LEVEL_ICON_STYLE
          }), n)
        }
      }, {
        key: "pmidList",
        value: function (e, t) {
          var n = this,
            r = [];
          return t && e.forEach(function (e) {
            var i = t[e.toString()],
              o = i ? i.data : null;
            o && r.push(n.pmidItem(o.title, p.isArray(o.authors) && o.authors.length > 0 ? o.authors[0].name + " et al." : "Unknown", o.source, new Date(o.pubdate).getFullYear().toString(), o.uid))
          }), r
        }
      }, {
        key: "pmidItem",
        value: function (e, t, n, r, i) {
          return c.createElement("li", {
            key: i,
            className: "list-group-item",
            style: {
              width: "100%"
            }
          }, c.createElement("a", {
            href: "http://www.ncbi.nlm.nih.gov/pubmed/" + i,
            target: "_blank"
          }, c.createElement("b", null, e)), c.createElement("br", null), c.createElement("div", {
            style: {
              width: "100%"
            }
          }, t, " ", n, ". ", r, " ", c.createElement("span", {
            style: {
              float: "right"
            }
          }, "PMID: ", i)))
        }
      }, {
        key: "abstractList",
        value: function (e) {
          var t = this,
            n = [];
          return e.forEach(function (e, r) {
            n.push(t.abstractItem(r, e.abstract, e.link))
          }), n
        }
      }, {
        key: "abstractItem",
        value: function (e, t, n) {
          var r = c.createElement("b", null, t);
          return n && (r = c.createElement("a", {
            href: n,
            target: "_blank"
          }, r)), c.createElement("li", {
            key: "abstract_" + e,
            className: "list-group-item",
            style: {
              width: "100%"
            }
          }, r)
        }
      }, {
        key: "generateLevelRows",
        value: function (e, t) {
          var n = this,
            r = [];
          return e.forEach(function (e) {
            r.push(n.levelListItem(e, t[e]))
          }), r
        }
      }, {
        key: "generateTreatmentRows",
        value: function (e, t, n) {
          var r = this,
            i = [];
          return e.forEach(function (e, o) {
            i.push(r.treatmentRow(o, e.level, t[e.level], e.variant, e.treatment, e.cancerType, n, e.pmids, e.abstracts))
          }), i
        }
      }, {
        key: "render",
        value: function () {
          return c.createElement("div", {
            className: "oncokb-card",
            "data-test": "oncokb-card"
          }, c.createElement("div", {
            className: "z-depth-2"
          }, !this.props.geneNotExist && c.createElement("span", null, c.createElement("div", {
            className: "item tabs-wrapper"
          }, c.createElement("div", {
            className: "col s12 tip-header"
          }, this.props.title), c.createElement("div", {
            className: "col s12"
          }, c.createElement("ul", {
            className: "tabs"
          }, c.createElement("li", {
            key: "oncogenicity",
            className: "tab col s6 enable-hover"
          }, c.createElement("a", {
            className: "oncogenicity",
            onClick: this.handleOncogenicityTabSelect
          }, c.createElement("span", {
            className: "title"
          }, "clinical implications"), c.createElement("span", {
            className: "title-content"
          }, this.props.oncogenicity || "Unknown"))), c.createElement("li", {
            key: "mutationEffect",
            className: "tab col s6 enable-hover"
          }, c.createElement("a", {
            className: "mutation-effect",
            onClick: this.handleMutationEffectTabSelect
          }, c.createElement("span", {
            className: "title"
          }, "Biological Effect"), c.createElement("span", {
            className: "title-content"
          }, this.props.mutationEffect || "Unknown"))), c.createElement("div", {
            className: "indicator"
          }))), c.createElement(m.If, {
            condition: "oncogenicity" === this.state.activeTab
          }, c.createElement("div", {
            className: "col s12 oncogenicity"
          }, c.createElement("div", {
            className: "summary",
            style: {
              padding: "10px 0"
            }
          }, c.createElement("p", null, this.props.geneSummary), c.createElement("p", null, this.insertLink(this.props.variantSummary, {
            keyword: "Chang et al. 2016",
            link: "https://www.ncbi.nlm.nih.gov/pubmed/26619011"
          })), c.createElement("p", null, this.props.tumorTypeSummary)), c.createElement(m.If, {
            condition: this.props.treatments.length > 0
          }, c.createElement("div", {
            className: "treatments-wrapper"
          }, c.createElement("table", {
            className: "table",
            style: {
              marginTop: 6
            }
          }, c.createElement("thead", null, c.createElement("tr", null, c.createElement("th", {
            key: "level",
            scope: "col"
          }, "Level"), c.createElement("th", {
            key: "alterations",
            scope: "col"
          }, "Alteration(s)"), c.createElement("th", {
            key: "drugs",
            scope: "col"
          }, "Drug(s)"), c.createElement("th", {
            key: "cancerTypes",
            scope: "col"
          }, "Level-associated", c.createElement("br", null), "cancer type(s)"), c.createElement("th", {
            key: "citations",
            scope: "col"
          }, "Citation(s)"))), c.createElement("tbody", null, this.generateTreatmentRows(this.props.treatments, t.LEVEL_DESC, this.props.pmidData))))))), c.createElement(m.If, {
            condition: "mutationEffect" === this.state.activeTab
          }, c.createElement("div", {
            className: "col s12 tab-pane mutation-effect"
          }, c.createElement(m.If, {
            condition: void 0 !== this.props.biologicalSummary && this.props.biologicalSummary.length > 0
          }, c.createElement(m.Then, null, c.createElement("div", null, this.summaryWithRefs(this.props.biologicalSummary, "tooltip"))), c.createElement(m.Else, null, c.createElement(m.If, {
            condition: this.props.mutationEffectPmids.length > 0
          }, c.createElement(m.Then, null, c.createElement("div", {
            className: "refs"
          }, c.createElement("ul", {
            className: "list-group",
            style: {
              marginBottom: 0
            }
          }, this.pmidList(this.props.mutationEffectPmids, this.props.pmidData)))), c.createElement(m.Else, null, c.createElement("span", null, "Mutation effect information is not available.")))))))), c.createElement("div", {
            className: "item disclaimer"
          }, c.createElement("span", null, "The information above is intended for research purposes only and should not be used as a substitute for professional diagnosis and treatment.")), c.createElement("div", {
            className: "item-list levels-wrapper"
          }, c.createElement("div", {
            className: "collapsible-header",
            onClick: this.handleLevelCollapse
          }, "Levels", c.createElement("span", {
            className: "secondary-content"
          }, c.createElement(m.If, {
            condition: this.state.levelsCollapsed
          }, c.createElement("i", {
            className: "fa fa-chevron-down"
          })), c.createElement(m.If, {
            condition: !this.state.levelsCollapsed
          }, c.createElement("i", {
            className: "fa fa-chevron-up"
          })))), c.createElement(h.default, {
            isOpened: !this.state.levelsCollapsed
          }, c.createElement("div", {
            className: "levels oncokb-card-levels-collapse"
          }, c.createElement("ul", null, this.generateLevelRows(t.LEVELS, t.LEVEL_DESC)))))), this.props.geneNotExist && c.createElement("div", {
            className: "additional-info"
          }, "There is currently no information about this gene in OncoKB."), c.createElement("div", {
            className: "item footer"
          }, c.createElement("a", {
            href: "http://oncokb.org/#/gene/" + this.props.gene,
            target: "_blank"
          }, c.createElement("img", {
            src: n(967),
            className: "oncokb-logo",
            alt: "OncoKB"
          })), c.createElement("span", {
            className: "pull-right feedback"
          }, c.createElement("button", {
            className: "btn btn-default btn-sm",
            onClick: this.props.handleFeedbackOpen
          }, "Feedback")))))
        }
      }, {
        key: "handleOncogenicityTabSelect",
        value: function () {
          this.handleTabSelect("oncogenicity")
        }
      }, {
        key: "handleMutationEffectTabSelect",
        value: function () {
          this.handleTabSelect("mutationEffect")
        }
      }, {
        key: "handleTabSelect",
        value: function (e) {
          this.setState({
            activeTab: e
          })
        }
      }, {
        key: "handleLevelCollapse",
        value: function () {
          this.setState({
            levelsCollapsed: !this.state.levelsCollapsed
          })
        }
      }, {
        key: "insertLink",
        value: function (e, t) {
          if (!e) return e;
          var n = [],
            r = e.split(t.keyword);
          n.push(r[0]);
          for (var i = c.createElement("a", {
              href: t.link,
              target: t.target || "_blank"
            }, t.keyword), o = 1; o < r.length; o++) n.push(i), n.push(r[o]);
          return n
        }
      }, {
        key: "refComponent",
        value: function (e, t) {
          var n = this,
            r = e.split(/pmid|nct/i);
          if (r.length < 2) return null;
          var i = r[1].match(/[0-9]+/g);
          if (!i) return null;
          var o = void 0,
            a = void 0;
          e.toLowerCase().indexOf("pmid") >= 0 ? (o = "http://www.ncbi.nlm.nih.gov/pubmed/", a = "PMID: ") : e.toLowerCase().indexOf("nct") >= 0 && (o = "http://www.ncbi.nlm.nih.gov/pubmed/", a = "NCT");
          var l = void 0;
          if (o && a && (l = c.createElement("a", {
              target: "_blank",
              href: "" + o + i.join(",")
            }, "" + a + i.join(","))), "tooltip" === t) {
            var s = function () {
              return c.createElement("div", {
                style: {
                  maxWidth: "400px",
                  maxHeight: "200px",
                  overflowY: "auto"
                }
              }, c.createElement("ul", {
                className: "list-group",
                style: {
                  marginBottom: 0
                }
              }, n.pmidList(i.map(function (e) {
                return parseInt(e)
              }), n.props.pmidData)))
            };
            return c.createElement("span", null, r[0], c.createElement(v.default, {
              overlay: s,
              placement: "right",
              trigger: ["hover", "focus"],
              destroyTooltipOnHide: !0
            }, c.createElement("i", {
              className: "fa fa-book",
              style: {
                color: "black"
              }
            })), ")")
          }
          return l ? c.createElement("span", null, r[0], l, ")") : null
        }
      }, {
        key: "summaryWithRefs",
        value: function (e, t) {
          var n = this;
          if (!e) return e;
          var r = [],
            i = /(\(.*?[PMID|NCT].*?\))/i;
          return e.split(i).forEach(function (e) {
            if (e.match(i)) {
              var o = n.refComponent(e, t);
              o && r.push(o)
            } else r.push(e)
          }), r
        }
      }]), t
    }(c.Component);
    t.default = b
  },
  951: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      var n = {};
      for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
      return n
    }

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function l(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var s = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      },
      u = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      c = n(1),
      f = r(c),
      p = n(952),
      d = n(960),
      h = r(d),
      m = function (e) {
        return Math.max(0, parseFloat(e)).toFixed(1)
      },
      y = function (e) {
        function t(e) {
          o(this, t);
          var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return n.onHeightReady = function (e) {
            var t = n.props,
              r = t.isOpened,
              i = t.onHeightReady;
            n.renderStatic && r && (n.height = m(e)), n.setState({
              height: r || !n.renderStatic ? e : 0
            });
            var o = r ? e : 0;
            n.state.height !== o && i(o)
          }, n.state = {
            height: -1,
            isOpenedChanged: !1
          }, n
        }
        return l(t, e), u(t, [{
          key: "componentWillMount",
          value: function () {
            this.height = m(0), this.renderStatic = !0
          }
        }, {
          key: "componentWillReceiveProps",
          value: function (e) {
            var t = e.isOpened;
            this.setState({
              isOpenedChanged: t !== this.props.isOpened
            })
          }
        }, {
          key: "componentDidUpdate",
          value: function (e) {
            if (e.isOpened !== this.props.isOpened) {
              var t = this.props.isOpened ? this.state.height : 0;
              this.props.onHeightReady(t)
            }
          }
        }, {
          key: "getMotionHeight",
          value: function (e) {
            var t = this.props,
              n = t.isOpened,
              r = t.springConfig,
              i = t.fixedHeight,
              o = this.state.isOpenedChanged,
              a = n ? Math.max(0, parseFloat(e)).toFixed(1) : m(0),
              l = !o && !n || this.height === a && -1 === i,
              u = (0, p.spring)(n ? Math.max(0, e) : 0, s({
                precision: .5
              }, r)),
              c = n ? Math.max(0, e) : 0;
            return l ? c : u
          }
        }, {
          key: "renderFixed",
          value: function () {
            var e = this,
              t = this.props,
              n = (t.springConfig, t.onHeightReady, t.onRest, t.isOpened),
              r = t.style,
              o = t.children,
              a = t.fixedHeight,
              l = t.keepCollapsedContent,
              u = i(t, ["springConfig", "onHeightReady", "onRest", "isOpened", "style", "children", "fixedHeight", "keepCollapsedContent"]);
            if (this.renderStatic) {
              this.renderStatic = !1;
              var c = {
                overflow: "hidden",
                height: n ? a : 0
              };
              return l || n ? (this.height = m(a), f.default.createElement("div", s({
                style: s({}, c, r)
              }, u), o)) : null
            }
            return f.default.createElement(p.Motion, {
              defaultStyle: {
                height: n ? 0 : a
              },
              style: {
                height: this.getMotionHeight(a)
              }
            }, function (t) {
              var i = t.height;
              if (e.height = m(i), !l && !n && e.height === m(0)) return null;
              var a = {
                overflow: "hidden",
                height: i
              };
              return f.default.createElement("div", s({
                style: s({}, a, r)
              }, u), o)
            })
          }
        }, {
          key: "render",
          value: function () {
            var e = this,
              t = this.props,
              n = (t.springConfig, t.onHeightReady, t.isOpened),
              r = t.style,
              o = t.children,
              a = t.fixedHeight,
              l = t.keepCollapsedContent,
              u = t.onRest,
              c = i(t, ["springConfig", "onHeightReady", "isOpened", "style", "children", "fixedHeight", "keepCollapsedContent", "onRest"]);
            if (a > -1) return this.renderFixed();
            var d = this.renderStatic,
              y = this.state.height,
              v = parseFloat(y).toFixed(1);
            y > -1 && d && (this.renderStatic = !1);
            var g = f.default.createElement(h.default, {
              onHeightReady: this.onHeightReady
            }, o);
            if (d) {
              var b = n ? {
                height: "auto"
              } : {
                overflow: "hidden",
                height: 0
              };
              return !n && y > -1 ? l ? f.default.createElement("div", s({
                style: s({
                  height: 0,
                  overflow: "hidden"
                }, r)
              }, c), g) : null : f.default.createElement(p.Motion, {
                defaultStyle: {
                  height: Math.max(0, y)
                },
                style: {
                  height: Math.max(0, y)
                },
                onRest: u
              }, function () {
                return f.default.createElement("div", s({
                  style: s({}, b, r)
                }, c), g)
              })
            }
            return f.default.createElement(p.Motion, {
              defaultStyle: {
                height: Math.max(0, y)
              },
              onRest: u,
              style: {
                height: this.getMotionHeight(y)
              }
            }, function (t) {
              if (e.height = m(t.height), !n && "0.0" === e.height) return l ? f.default.createElement("div", s({
                style: s({
                  height: 0,
                  overflow: "hidden"
                }, r)
              }, c), g) : null;
              var i = n && e.height === v ? {
                height: "auto"
              } : {
                height: t.height,
                overflow: "hidden"
              };
              return f.default.createElement("div", s({
                style: s({}, i, r)
              }, c), g)
            })
          }
        }]), t
      }(f.default.Component);
    y.defaultProps = {
      fixedHeight: -1,
      style: {},
      keepCollapsedContent: !1,
      onHeightReady: function () {}
    }, t.default = y
  },
  952: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e.default : e
    }
    t.__esModule = !0;
    var i = n(953);
    t.Motion = r(i);
    var o = n(955);
    t.StaggeredMotion = r(o);
    var a = n(956);
    t.TransitionMotion = r(a);
    var l = n(958);
    t.spring = r(l);
    var s = n(893);
    t.presets = r(s);
    var u = n(869);
    t.stripStyle = r(u);
    var c = n(959);
    t.reorderKeys = r(c)
  },
  953: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    t.__esModule = !0;
    var i = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      },
      o = n(879),
      a = r(o),
      l = n(869),
      s = r(l),
      u = n(880),
      c = r(u),
      f = n(870),
      p = r(f),
      d = n(881),
      h = r(d),
      m = n(882),
      y = r(m),
      v = n(1),
      g = r(v),
      b = n(2),
      w = r(b),
      E = n(35),
      _ = r(E),
      C = _.default({
        propTypes: {
          defaultStyle: w.default.objectOf(w.default.number),
          style: w.default.objectOf(w.default.oneOfType([w.default.number, w.default.object])).isRequired,
          children: w.default.func.isRequired,
          onRest: w.default.func
        },
        getInitialState: function () {
          var e = this.props,
            t = e.defaultStyle,
            n = e.style,
            r = t || s.default(n),
            i = a.default(r);
          return {
            currentStyle: r,
            currentVelocity: i,
            lastIdealStyle: r,
            lastIdealVelocity: i
          }
        },
        wasAnimating: !1,
        animationID: null,
        prevTime: 0,
        accumulatedTime: 0,
        unreadPropStyle: null,
        clearUnreadPropStyle: function (e) {
          var t = !1,
            n = this.state,
            r = n.currentStyle,
            o = n.currentVelocity,
            a = n.lastIdealStyle,
            l = n.lastIdealVelocity;
          for (var s in e)
            if (Object.prototype.hasOwnProperty.call(e, s)) {
              var u = e[s];
              "number" == typeof u && (t || (t = !0, r = i({}, r), o = i({}, o), a = i({}, a), l = i({}, l)), r[s] = u, o[s] = 0, a[s] = u, l[s] = 0)
            }
          t && this.setState({
            currentStyle: r,
            currentVelocity: o,
            lastIdealStyle: a,
            lastIdealVelocity: l
          })
        },
        startAnimationIfNecessary: function () {
          var e = this;
          this.animationID = h.default(function (t) {
            var n = e.props.style;
            if (y.default(e.state.currentStyle, n, e.state.currentVelocity)) return e.wasAnimating && e.props.onRest && e.props.onRest(), e.animationID = null, e.wasAnimating = !1, void(e.accumulatedTime = 0);
            e.wasAnimating = !0;
            var r = t || p.default(),
              i = r - e.prevTime;
            if (e.prevTime = r, e.accumulatedTime = e.accumulatedTime + i, e.accumulatedTime > 1e3 / 60 * 10 && (e.accumulatedTime = 0), 0 === e.accumulatedTime) return e.animationID = null, void e.startAnimationIfNecessary();
            var o = (e.accumulatedTime - Math.floor(e.accumulatedTime / (1e3 / 60)) * (1e3 / 60)) / (1e3 / 60),
              a = Math.floor(e.accumulatedTime / (1e3 / 60)),
              l = {},
              s = {},
              u = {},
              f = {};
            for (var d in n)
              if (Object.prototype.hasOwnProperty.call(n, d)) {
                var h = n[d];
                if ("number" == typeof h) u[d] = h, f[d] = 0, l[d] = h, s[d] = 0;
                else {
                  for (var m = e.state.lastIdealStyle[d], v = e.state.lastIdealVelocity[d], g = 0; g < a; g++) {
                    var b = c.default(1e3 / 60 / 1e3, m, v, h.val, h.stiffness, h.damping, h.precision);
                    m = b[0], v = b[1]
                  }
                  var w = c.default(1e3 / 60 / 1e3, m, v, h.val, h.stiffness, h.damping, h.precision),
                    E = w[0],
                    _ = w[1];
                  u[d] = m + (E - m) * o, f[d] = v + (_ - v) * o, l[d] = m, s[d] = v
                }
              }
            e.animationID = null, e.accumulatedTime -= a * (1e3 / 60), e.setState({
              currentStyle: u,
              currentVelocity: f,
              lastIdealStyle: l,
              lastIdealVelocity: s
            }), e.unreadPropStyle = null, e.startAnimationIfNecessary()
          })
        },
        componentDidMount: function () {
          this.prevTime = p.default(), this.startAnimationIfNecessary()
        },
        componentWillReceiveProps: function (e) {
          null != this.unreadPropStyle && this.clearUnreadPropStyle(this.unreadPropStyle), this.unreadPropStyle = e.style, null == this.animationID && (this.prevTime = p.default(), this.startAnimationIfNecessary())
        },
        componentWillUnmount: function () {
          null != this.animationID && (h.default.cancel(this.animationID), this.animationID = null)
        },
        render: function () {
          var e = this.props.children(this.state.currentStyle);
          return e && g.default.Children.only(e)
        }
      });
    t.default = C, e.exports = t.default
  },
  954: function (e, t, n) {
    e.exports = n(6)(596)
  },
  955: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t, n) {
      for (var r = 0; r < e.length; r++)
        if (!v.default(e[r], t[r], n[r])) return !1;
      return !0
    }
    t.__esModule = !0;
    var o = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      },
      a = n(879),
      l = r(a),
      s = n(869),
      u = r(s),
      c = n(880),
      f = r(c),
      p = n(870),
      d = r(p),
      h = n(881),
      m = r(h),
      y = n(882),
      v = r(y),
      g = n(1),
      b = r(g),
      w = n(2),
      E = r(w),
      _ = n(35),
      C = r(_),
      T = C.default({
        propTypes: {
          defaultStyles: E.default.arrayOf(E.default.objectOf(E.default.number)),
          styles: E.default.func.isRequired,
          children: E.default.func.isRequired
        },
        getInitialState: function () {
          var e = this.props,
            t = e.defaultStyles,
            n = e.styles,
            r = t || n().map(u.default),
            i = r.map(function (e) {
              return l.default(e)
            });
          return {
            currentStyles: r,
            currentVelocities: i,
            lastIdealStyles: r,
            lastIdealVelocities: i
          }
        },
        animationID: null,
        prevTime: 0,
        accumulatedTime: 0,
        unreadPropStyles: null,
        clearUnreadPropStyle: function (e) {
          for (var t = this.state, n = t.currentStyles, r = t.currentVelocities, i = t.lastIdealStyles, a = t.lastIdealVelocities, l = !1, s = 0; s < e.length; s++) {
            var u = e[s],
              c = !1;
            for (var f in u)
              if (Object.prototype.hasOwnProperty.call(u, f)) {
                var p = u[f];
                "number" == typeof p && (c || (c = !0, l = !0, n[s] = o({}, n[s]), r[s] = o({}, r[s]), i[s] = o({}, i[s]), a[s] = o({}, a[s])), n[s][f] = p, r[s][f] = 0, i[s][f] = p, a[s][f] = 0)
              }
          }
          l && this.setState({
            currentStyles: n,
            currentVelocities: r,
            lastIdealStyles: i,
            lastIdealVelocities: a
          })
        },
        startAnimationIfNecessary: function () {
          var e = this;
          this.animationID = m.default(function (t) {
            var n = e.props.styles(e.state.lastIdealStyles);
            if (i(e.state.currentStyles, n, e.state.currentVelocities)) return e.animationID = null, void(e.accumulatedTime = 0);
            var r = t || d.default(),
              o = r - e.prevTime;
            if (e.prevTime = r, e.accumulatedTime = e.accumulatedTime + o, e.accumulatedTime > 1e3 / 60 * 10 && (e.accumulatedTime = 0), 0 === e.accumulatedTime) return e.animationID = null, void e.startAnimationIfNecessary();
            for (var a = (e.accumulatedTime - Math.floor(e.accumulatedTime / (1e3 / 60)) * (1e3 / 60)) / (1e3 / 60), l = Math.floor(e.accumulatedTime / (1e3 / 60)), s = [], u = [], c = [], p = [], h = 0; h < n.length; h++) {
              var m = n[h],
                y = {},
                v = {},
                g = {},
                b = {};
              for (var w in m)
                if (Object.prototype.hasOwnProperty.call(m, w)) {
                  var E = m[w];
                  if ("number" == typeof E) y[w] = E, v[w] = 0, g[w] = E, b[w] = 0;
                  else {
                    for (var _ = e.state.lastIdealStyles[h][w], C = e.state.lastIdealVelocities[h][w], T = 0; T < l; T++) {
                      var A = f.default(1e3 / 60 / 1e3, _, C, E.val, E.stiffness, E.damping, E.precision);
                      _ = A[0], C = A[1]
                    }
                    var k = f.default(1e3 / 60 / 1e3, _, C, E.val, E.stiffness, E.damping, E.precision),
                      O = k[0],
                      I = k[1];
                    y[w] = _ + (O - _) * a, v[w] = C + (I - C) * a, g[w] = _, b[w] = C
                  }
                }
              c[h] = y, p[h] = v, s[h] = g, u[h] = b
            }
            e.animationID = null, e.accumulatedTime -= l * (1e3 / 60), e.setState({
              currentStyles: c,
              currentVelocities: p,
              lastIdealStyles: s,
              lastIdealVelocities: u
            }), e.unreadPropStyles = null, e.startAnimationIfNecessary()
          })
        },
        componentDidMount: function () {
          this.prevTime = d.default(), this.startAnimationIfNecessary()
        },
        componentWillReceiveProps: function (e) {
          null != this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles), this.unreadPropStyles = e.styles(this.state.lastIdealStyles), null == this.animationID && (this.prevTime = d.default(), this.startAnimationIfNecessary())
        },
        componentWillUnmount: function () {
          null != this.animationID && (m.default.cancel(this.animationID), this.animationID = null)
        },
        render: function () {
          var e = this.props.children(this.state.currentStyles);
          return e && b.default.Children.only(e)
        }
      });
    t.default = T, e.exports = t.default
  },
  956: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t, n) {
      var r = t;
      return null == r ? e.map(function (e, t) {
        return {
          key: e.key,
          data: e.data,
          style: n[t]
        }
      }) : e.map(function (e, t) {
        for (var i = 0; i < r.length; i++)
          if (r[i].key === e.key) return {
            key: r[i].key,
            data: r[i].data,
            style: n[t]
          };
        return {
          key: e.key,
          data: e.data,
          style: n[t]
        }
      })
    }

    function o(e, t, n, r) {
      if (r.length !== t.length) return !1;
      for (var i = 0; i < r.length; i++)
        if (r[i].key !== t[i].key) return !1;
      for (var i = 0; i < r.length; i++)
        if (!E.default(e[i], t[i].style, n[i])) return !1;
      return !0
    }

    function a(e, t, n, r, i, o, a, l, s) {
      for (var c = m.default(r, i, function (e, r) {
          var i = t(r);
          return null == i ? (n({
            key: r.key,
            data: r.data
          }), null) : E.default(o[e], i, a[e]) ? (n({
            key: r.key,
            data: r.data
          }), null) : {
            key: r.key,
            data: r.data,
            style: i
          }
        }), f = [], p = [], d = [], h = [], y = 0; y < c.length; y++) {
        for (var v = c[y], g = null, b = 0; b < r.length; b++)
          if (r[b].key === v.key) {
            g = b;
            break
          }
        if (null == g) {
          var w = e(v);
          f[y] = w, d[y] = w;
          var _ = u.default(v.style);
          p[y] = _, h[y] = _
        } else f[y] = o[g], d[y] = l[g], p[y] = a[g], h[y] = s[g]
      }
      return [c, f, p, d, h]
    }
    t.__esModule = !0;
    var l = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      },
      s = n(879),
      u = r(s),
      c = n(869),
      f = r(c),
      p = n(880),
      d = r(p),
      h = n(957),
      m = r(h),
      y = n(870),
      v = r(y),
      g = n(881),
      b = r(g),
      w = n(882),
      E = r(w),
      _ = n(1),
      C = r(_),
      T = n(2),
      A = r(T),
      k = n(35),
      O = r(k),
      I = O.default({
        propTypes: {
          defaultStyles: A.default.arrayOf(A.default.shape({
            key: A.default.string.isRequired,
            data: A.default.any,
            style: A.default.objectOf(A.default.number).isRequired
          })),
          styles: A.default.oneOfType([A.default.func, A.default.arrayOf(A.default.shape({
            key: A.default.string.isRequired,
            data: A.default.any,
            style: A.default.objectOf(A.default.oneOfType([A.default.number, A.default.object])).isRequired
          }))]).isRequired,
          children: A.default.func.isRequired,
          willEnter: A.default.func,
          willLeave: A.default.func,
          didLeave: A.default.func
        },
        getDefaultProps: function () {
          return {
            willEnter: function (e) {
              return f.default(e.style)
            },
            willLeave: function () {
              return null
            },
            didLeave: function () {}
          }
        },
        getInitialState: function () {
          var e = this.props,
            t = e.defaultStyles,
            n = e.styles,
            r = e.willEnter,
            i = e.willLeave,
            o = e.didLeave,
            l = "function" == typeof n ? n(t) : n,
            s = void 0;
          s = null == t ? l : t.map(function (e) {
            for (var t = 0; t < l.length; t++)
              if (l[t].key === e.key) return l[t];
            return e
          });
          var c = null == t ? l.map(function (e) {
              return f.default(e.style)
            }) : t.map(function (e) {
              return f.default(e.style)
            }),
            p = null == t ? l.map(function (e) {
              return u.default(e.style)
            }) : t.map(function (e) {
              return u.default(e.style)
            }),
            d = a(r, i, o, s, l, c, p, c, p),
            h = d[0];
          return {
            currentStyles: d[1],
            currentVelocities: d[2],
            lastIdealStyles: d[3],
            lastIdealVelocities: d[4],
            mergedPropsStyles: h
          }
        },
        unmounting: !1,
        animationID: null,
        prevTime: 0,
        accumulatedTime: 0,
        unreadPropStyles: null,
        clearUnreadPropStyle: function (e) {
          for (var t = a(this.props.willEnter, this.props.willLeave, this.props.didLeave, this.state.mergedPropsStyles, e, this.state.currentStyles, this.state.currentVelocities, this.state.lastIdealStyles, this.state.lastIdealVelocities), n = t[0], r = t[1], i = t[2], o = t[3], s = t[4], u = 0; u < e.length; u++) {
            var c = e[u].style,
              f = !1;
            for (var p in c)
              if (Object.prototype.hasOwnProperty.call(c, p)) {
                var d = c[p];
                "number" == typeof d && (f || (f = !0, r[u] = l({}, r[u]), i[u] = l({}, i[u]), o[u] = l({}, o[u]), s[u] = l({}, s[u]), n[u] = {
                  key: n[u].key,
                  data: n[u].data,
                  style: l({}, n[u].style)
                }), r[u][p] = d, i[u][p] = 0, o[u][p] = d, s[u][p] = 0, n[u].style[p] = d)
              }
          }
          this.setState({
            currentStyles: r,
            currentVelocities: i,
            mergedPropsStyles: n,
            lastIdealStyles: o,
            lastIdealVelocities: s
          })
        },
        startAnimationIfNecessary: function () {
          var e = this;
          this.unmounting || (this.animationID = b.default(function (t) {
            if (!e.unmounting) {
              var n = e.props.styles,
                r = "function" == typeof n ? n(i(e.state.mergedPropsStyles, e.unreadPropStyles, e.state.lastIdealStyles)) : n;
              if (o(e.state.currentStyles, r, e.state.currentVelocities, e.state.mergedPropsStyles)) return e.animationID = null, void(e.accumulatedTime = 0);
              var l = t || v.default(),
                s = l - e.prevTime;
              if (e.prevTime = l, e.accumulatedTime = e.accumulatedTime + s, e.accumulatedTime > 1e3 / 60 * 10 && (e.accumulatedTime = 0), 0 === e.accumulatedTime) return e.animationID = null, void e.startAnimationIfNecessary();
              for (var u = (e.accumulatedTime - Math.floor(e.accumulatedTime / (1e3 / 60)) * (1e3 / 60)) / (1e3 / 60), c = Math.floor(e.accumulatedTime / (1e3 / 60)), f = a(e.props.willEnter, e.props.willLeave, e.props.didLeave, e.state.mergedPropsStyles, r, e.state.currentStyles, e.state.currentVelocities, e.state.lastIdealStyles, e.state.lastIdealVelocities), p = f[0], h = f[1], m = f[2], y = f[3], g = f[4], b = 0; b < p.length; b++) {
                var w = p[b].style,
                  E = {},
                  _ = {},
                  C = {},
                  T = {};
                for (var A in w)
                  if (Object.prototype.hasOwnProperty.call(w, A)) {
                    var k = w[A];
                    if ("number" == typeof k) E[A] = k, _[A] = 0, C[A] = k, T[A] = 0;
                    else {
                      for (var O = y[b][A], I = g[b][A], x = 0; x < c; x++) {
                        var S = d.default(1e3 / 60 / 1e3, O, I, k.val, k.stiffness, k.damping, k.precision);
                        O = S[0], I = S[1]
                      }
                      var M = d.default(1e3 / 60 / 1e3, O, I, k.val, k.stiffness, k.damping, k.precision),
                        P = M[0],
                        D = M[1];
                      E[A] = O + (P - O) * u, _[A] = I + (D - I) * u, C[A] = O, T[A] = I
                    }
                  }
                y[b] = C, g[b] = T, h[b] = E, m[b] = _
              }
              e.animationID = null, e.accumulatedTime -= c * (1e3 / 60), e.setState({
                currentStyles: h,
                currentVelocities: m,
                lastIdealStyles: y,
                lastIdealVelocities: g,
                mergedPropsStyles: p
              }), e.unreadPropStyles = null, e.startAnimationIfNecessary()
            }
          }))
        },
        componentDidMount: function () {
          this.prevTime = v.default(), this.startAnimationIfNecessary()
        },
        componentWillReceiveProps: function (e) {
          this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles);
          var t = e.styles;
          this.unreadPropStyles = "function" == typeof t ? t(i(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles)) : t, null == this.animationID && (this.prevTime = v.default(), this.startAnimationIfNecessary())
        },
        componentWillUnmount: function () {
          this.unmounting = !0, null != this.animationID && (b.default.cancel(this.animationID), this.animationID = null)
        },
        render: function () {
          var e = i(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles),
            t = this.props.children(e);
          return t && C.default.Children.only(t)
        }
      });
    t.default = I, e.exports = t.default
  },
  957: function (e, t, n) {
    "use strict";

    function r(e, t, n) {
      for (var r = {}, i = 0; i < e.length; i++) r[e[i].key] = i;
      for (var o = {}, i = 0; i < t.length; i++) o[t[i].key] = i;
      for (var a = [], i = 0; i < t.length; i++) a[i] = t[i];
      for (var i = 0; i < e.length; i++)
        if (!Object.prototype.hasOwnProperty.call(o, e[i].key)) {
          var l = n(i, e[i]);
          null != l && a.push(l)
        }
      return a.sort(function (e, n) {
        var i = o[e.key],
          a = o[n.key],
          l = r[e.key],
          s = r[n.key];
        if (null != i && null != a) return o[e.key] - o[n.key];
        if (null != l && null != s) return r[e.key] - r[n.key];
        if (null != i) {
          for (var u = 0; u < t.length; u++) {
            var c = t[u].key;
            if (Object.prototype.hasOwnProperty.call(r, c)) {
              if (i < o[c] && s > r[c]) return -1;
              if (i > o[c] && s < r[c]) return 1
            }
          }
          return 1
        }
        for (var u = 0; u < t.length; u++) {
          var c = t[u].key;
          if (Object.prototype.hasOwnProperty.call(r, c)) {
            if (a < o[c] && l > r[c]) return 1;
            if (a > o[c] && l < r[c]) return -1
          }
        }
        return -1
      })
    }
    t.__esModule = !0, t.default = r, e.exports = t.default
  },
  958: function (e, t, n) {
    "use strict";

    function r(e, t) {
      return i({}, l, t, {
        val: e
      })
    }
    t.__esModule = !0;
    var i = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    };
    t.default = r;
    var o = n(893),
      a = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(o),
      l = i({}, a.default.noWobble, {
        precision: .01
      });
    e.exports = t.default
  },
  959: function (e, t, n) {
    "use strict";

    function r() {}
    t.__esModule = !0, t.default = r;
    e.exports = t.default
  },
  960: function (e, t, n) {
    "use strict";
    var r = n(961).default;
    e.exports = r
  },
  961: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      var n = {};
      for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
      return n
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      },
      a = n(1),
      l = r(a),
      s = n(2),
      u = r(s),
      c = n(35),
      f = r(c),
      p = n(962),
      d = function (e) {
        return e.clientHeight
      },
      h = (0, f.default)({
        propTypes: {
          children: u.default.node.isRequired,
          onHeightReady: u.default.func.isRequired,
          hidden: u.default.bool,
          dirty: u.default.bool,
          getElementHeight: u.default.func
        },
        getDefaultProps: function () {
          return {
            hidden: !1,
            dirty: !0,
            getElementHeight: d
          }
        },
        getInitialState: function () {
          return {
            height: 0,
            dirty: this.props.dirty
          }
        },
        componentDidMount: function () {
          var e = this,
            t = this.props.getElementHeight(this.wrapper);
          this.setState({
            height: t,
            dirty: !1
          }, function () {
            return e.props.onHeightReady(e.state.height)
          })
        },
        componentWillReceiveProps: function (e) {
          var t = e.children,
            n = e.dirty;
          (t !== this.props.children || n) && this.setState({
            dirty: !0
          })
        },
        shouldComponentUpdate: p.shouldComponentUpdate,
        componentDidUpdate: function () {
          var e = this,
            t = this.props.getElementHeight(this.wrapper);
          t === this.state.height ? this.setState({
            dirty: !1
          }) : this.setState({
            height: t,
            dirty: !1
          }, function () {
            return e.props.onHeightReady(e.state.height)
          })
        },
        setWrapperRef: function (e) {
          this.wrapper = e
        },
        render: function () {
          var e = this.props,
            t = (e.onHeightReady, e.getElementHeight, e.dirty, e.hidden),
            n = e.children,
            r = i(e, ["onHeightReady", "getElementHeight", "dirty", "hidden", "children"]),
            a = this.state.dirty;
          return t && !a ? null : t ? l.default.createElement("div", {
            style: {
              height: 0,
              overflow: "hidden"
            }
          }, l.default.createElement("div", o({
            ref: this.setWrapperRef
          }, r), n)) : l.default.createElement("div", o({
            ref: this.setWrapperRef
          }, r), n)
        }
      });
    t.default = h
  },
  962: function (e, t, n) {
    "use strict";
    var r = n(963),
      i = {
        shouldComponentUpdate: function (e, t) {
          return r(this, e, t)
        }
      };
    e.exports = i
  },
  963: function (e, t, n) {
    "use strict";

    function r(e, t, n) {
      return !i(e.props, t) || !i(e.state, n)
    }
    var i = n(868);
    e.exports = r
  },
  964: function (e, t) {},
  965: function (e, t) {},
  966: function (e, t, n) {
    e.exports = n.p + "reactapp/images/34306b402bf488d807a92babe7055d39.png"
  },
  967: function (e, t, n) {
    e.exports = n.p + "reactapp/images/ac30afc0653ff15c1ea9fd9cbae0414a.png"
  },
  968: function (e, t, n) {
    e.exports = n.p + "reactapp/images/069a019b10e7aa07f55618e44ea3e787.png"
  },
  969: function (e, t, n) {
    "use strict";

    function r(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      s = n(1),
      u = r(s);
    n(970);
    var c = n(3),
      f = r(c),
      p = function (e) {
        function t() {
          return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
        }
        return a(t, e), l(t, [{
          key: "generateVariants",
          value: function (e) {
            var t = [];
            if (e)
              if (f.isEmpty(e)) t.push(this.variantItem());
              else
                for (var n in e) {
                  var r = e[n],
                    i = "";
                  for (var o in r.evidence) i += o.toLowerCase() + ": " + r.evidence[o] + ", ";
                  i = i.slice(0, -2) + ".", t.push(this.variantItem(r.url, r.name, i, r.description))
                } else t.push(this.variantItem());
            return t
          }
        }, {
          key: "variantItem",
          value: function (e, t, n, r) {
            return e || t || n || r ? u.createElement("div", {
              className: "civic-card-variant"
            }, u.createElement("div", {
              className: "civic-card-variant-header"
            }, u.createElement("span", {
              className: "civic-card-variant-name"
            }, u.createElement("a", {
              href: e,
              target: "_blank"
            }, t)), u.createElement("span", {
              className: "civic-card-variant-entry-types"
            }, " Entries: ", n)), u.createElement("div", {
              className: "civic-card-variant-description summary"
            }, r)) : u.createElement("div", {
              className: "civic-card-variant"
            }, u.createElement("div", {
              className: "civic-card-variant-description summary"
            }, "Information about the oncogenic activity of this alteration is not yet available in CIViC."))
          }
        }, {
          key: "render",
          value: function () {
            return u.createElement("div", {
              className: "civic-card"
            }, u.createElement("span", null, u.createElement("div", {
              className: "col s12 tip-header"
            }, this.props.title), u.createElement("div", {
              className: "col s12 civic-card-content"
            }, u.createElement("div", {
              className: "col s12 civic-card-gene"
            }, u.createElement("p", null, u.createElement("span", {
              className: "civic-card-gene-name"
            }, u.createElement("a", {
              href: this.props.geneUrl,
              target: "_blank"
            }, u.createElement("b", null, this.props.geneName))), " - ", this.props.geneDescription)), u.createElement("div", {
              className: "col s12"
            }, u.createElement("ul", null, this.generateVariants(this.props.variants))), u.createElement("div", {
              className: "item disclaimer"
            }, u.createElement("span", null, "Disclaimer: This resource is intended for purely research purposes. It should not be used for emergencies or medical or professional advice.")))), u.createElement("div", {
              className: "item footer"
            }, u.createElement("a", {
              href: this.props.geneUrl,
              target: "_blank"
            }, u.createElement("img", {
              src: n(971),
              className: "civic-logo",
              alt: "CIViC"
            }))))
          }
        }]), t
      }(u.Component);
    t.default = p
  },
  970: function (e, t) {},
  971: function (e, t, n) {
    e.exports = n.p + "reactapp/images/71fb7f0a5b1cf694468e7ba7e69bd939.png"
  },
  972: function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QETDRgRjnOYvgAAFfVJREFUeNrlW3mUVNWd/u6979XSCxRNA9INCIgii0TBqAi4EKISxTVRnKgxLkedyGQkxiTujkYxaswomkSdxETjIUhYXVDMSNTYqElABQZbAQVBoOnq7lreu/udP97romibpRUyMVN93qk6VW+53/fbf7/bwP/zF/l7P7Ai0QvDMsf7dXTM4Opkv68CJFOQmxZvlx+sagxfDrcHH/zzEnBC7bQeI2unLqtO1B/i0RScE3BwcA6QJoe8asL67JIRr7Q9tJqr/D8PASk/g7Pqf3HRoO7jf+MRCus0aPxwBwfrNIxTsM5CO4NNheXzl4a3nLNl23r7T0HA+Qc+ceOQmpNvhw3BiIcE9eGBwcFBOQPtFIxV0I5DmRAGwJZgDRY2XUmLxZzbn2tj+xv8xD7TDxrV66L5sAE86qOCplFdU4HKnikwyuAkYCM9AAA4Z2EcR9LLoEp342uD117bn+uj+/Pm1RUZMqLmvA/gOAihSBAfqe5JpHsmkaxMwEt6oKCgICCEgYCAEg8UDMRJ9K4ac1f/nod6X1gCDqs6s3eFXwtnFSgIKKGgDrChhSpqWGlBABCQki0SAIRQAA4JVonB9oSLv7AE9EuOuxNuhx8zzkLkJYpNHLKoQD2HZA+KJCPwYhIcykzeKXRL9n80XVFNvnAEeF6CpL3upzqn0G7l2mlwq6CkAjyDRA1BZZ2HinoPHmuHb+CcBpyFcwaUpFCVzLAvGgGkMlVNCPH7GCtgnYF1CtYpaKdgnQZJOiSqAL8C8CocSFLDxb9Zp6GdhLUClHio9DLJ/RWx9oeDIQAghIYwOVhnYJwCdTu41hbQikAIgHmAkhJaRaHQWAXjFLSVcDCwToNrbsru7f5RCdhJQly1uaLKNmonDiHWgIDAIw4gDpJoBNsNDBQoA3ieg4ccyikYJ6JcwHI4Z2GdRFE0606e4/6RCOhUPbeJ5Tf31sNngSWjFRMDRj1YR+G4gtxEAWYhlYKwHMpySBNCOwEHCw2HQDU1FsIWs4tnuv9rH0B2Z5tr7dKFObkFykpoK2L7bk97HJxzgGtPh22ZrzCwVkFajo30jdOcc/stk6X7WurlxDS1bBCbcw1PKmdLmV4U81mUElf68KujtDiK/YiLIw0NICc+xtrssnV7IJp8HiLoPgb/qcUsV09c1srXw4HCwZTOIiBgSQaW8naAd7akJYHJYY2Z09cY47pA+t+FALKX3xMApFgsmlXy90cHlsO58jSHgPkeEkkvMmbnYGITkHD4JGy4f0Pz/2zvhFTShTXscwL25sHlCyQAsGbb0uWb2l593RIG50xEAiGgCQovFRXGFu3SB3J8I1YU51zf4d6dEfG5SaD7AXz5YkuLbhAPntrCP4ID4BxgHcAoA/MZLByM09BOoGjyWGWeGsU5N53dZ1+TQPcT+I7vNNfWGq7MPfUNDbuzqlDEpFhY57At/7f565vebtwF6H1Owi4JqKmpIYMGDSGZTKYrar+rAwBIs/zwbWclCCGx0wPgdlSCIAwB3b50T/fZlyTslAil02l86/xLK8/9xjcvPGjg4O8kU+mRhWKh8b3GNQ8+9vjPn1j03Lyc1nqPNt/JdwQAGE1Wguy8po6OkRDrlV2zu0THdTin9Ll//4Hs9K+d0XP8+ImTajM9Dm7NtXz8zqoVLy5ZsnjTsrcaTKcEHD7qy+SXMx+776gJo64p/WqBPqg+5KChfR885aQTH3ztzw2/uvDyqf+6YcMGtZfgafl3johI6u1r/hQ8C+OMjq9znYDd1ecSCVdfeU2/a797/Ud9etWCCwVjNRgBJk08GZd+60o8/YdZR19/y7VvKqV2LLCurg6LF7yUPWrCqGsigyxbPgWgAauB48aNveT5+X/kvXr18vcAnsRXlr8TDU3b5e0ifqNMMM4OnZWwhprd3WM3Wob77p456bYbZ3yU8Hx8sm0rcoUWFIM8coUctjc3QSmJC86/8I1fP/LEd3fyAT+b8fPz+gzsloHdRZRNAZ4HFAoSQwYPwZ23333PXnj+jmRQy2QpCrSz4DqoggHnZdR3Br7TcHjB1IsPPf+cC1/IZrdDaoGE78NnPnzPA6UUHqOw2mBb01Yce8z4n93wgxuPAQA6btxx9KwzTp8FtYeYwADP99CWa8GEY4+bduToI2t3A552BA+AEo2oF0DipNe5WPo7tMASIcuv2RsHW1lZ6V1/3a2rtNVIp1NIpdJI+D48j4FSBsaid8KiqLM9ux0nTTq5YcSIEYyee9b5o71KAGYv+sfOwliDZMLHlNOmXLUb8OgEBFXap87JMsu2sfBdqRlmqDSdELhLAlKpFPuvmU9e07dPX6QSSaTTaSQTCXgJD8zzQBkBoQAh8QHAaAXqUUyaOOkIOqBf/TgT7l1haZ2DsxYhDzBw4MArd6OaHdWXRe+8NAlqD4NRFIirQwDWKV12ze40ARNPOLnvG0vf/cs5Z595F2UE6XQKCT8Bz6PwWQSelkKuLXuehRAcNTU1x9NiEBSdBbQCoHaD3gBKKyglUAyKqKmp6TN69Oghu7F/2uHwLLW0vbR1kfeLzWDHYxQNTRydOvqBEgmDBg2umPnTx65+fv7iD0eNGjJSKhfZfILB86IDsdQjR2OB9gmU0dBaQkkJP+HXe9uy2z4QSgEOIPDBSCdtEgdIbhGKAgpBAUpJCCFw3rlT/7x69er+HdJWugsfQJxTsZzdDg2Iw180EFEwZkf2uFN8BEh1dSZ56YWXjb/t5rvnd6ulMMVIcKlkJGVro6u0Lo+T8b2thtEaykgIKQAAUshNtHHN6lW5XCuKQR6hkNBFB/AykzCAzlm05VuRL+QgJYcUEm25NtT17Zu54Uc3PrULSdFPHyoOg2SHxbU7QVgYE8IJis7uccHUi49Y3rDmg/tn3jO/W3cKcIAlAC8BUA+gLDocQUnDrDWw1kJbDa01lJYQIoRWCsxnyG7PrqCz587evn7DOnARIlfIoq2YR6EtBM9K8GaJtqY8tjVvRWsuCy5CGGvRmm+NxlrWYfiwYVNuv/Wu73fiAzraL7MwcGUOoH2BUeNUwzqFUBdQZv9kyuQzhr/8fMPCJ37365cPGt4nAxH/mgLglxlL/GTiEHWUjInU3WgorSCVABcBlI7snHOOt5a/tYxms1n3h7mzTwx5Ea1tLWhpbcL21m3Ylt2CLds/QVN2K/LFHLRW0FqjOdsMKSQqKyuRSqaglcIxRx91y803/sePO5E8KXdoBlEYdDAl1VRGQlsJayUCU0RWbmoCQI4bd9yBT/92wSMLn5m/9IRTjjkWJtbKduBsZ+CxS4GJCdVWQRsFrQSE4BF4pWCMQSKZwOZPNvOGhobAA4DHn3z8T2OPHYu6vnVI+AkkE0kwFnsRR2C0QsBD5PI5cMGRTqdj5+VgjAHnASZ/dfK0XjU9e99w2w3X5dpawzIySku1gsE5EfX/oKG1AnES2nFsFJuxvtjIRx9x9GHnXTD5xOnTpt8Cvz1djEHvqiKw0WGMiyUuoZSElBKhCGPwEkZHGqiUwmO/eqzPTkXNlClTBlx95dUfWWORTqfgeT4IIXDOQcY3gwMooyXwzkbNTEIokokUevaoxdamJj79e/82btV7Kz/pGMoqk736fL3uoddr00PACEG3mgTa8nm827wG1TbXevYNIzD1qomZve5Q2Dh/0YCWDjJW9UjdBcKwgJCHkDJaPxccjDHMXTD3nJkPzZy303i8sbGxbeTIkT3r6+uPLhaD2GlEah+Nujwwj0UDTkrBKAOl8WfmwfcSMEajZ02td8bpZ12Ry7WtWrn63fVlWsASLFFxaPXXLq3wMgitwtZ8K2iyjZ80ta7ww8dPSY05bmhVl/pTJnbSChF4zSGkgAhDBLwIISW0VhEBKirDG95ouGvGT2Y81Gm9nMlk6KO/eNRkumeglILv+2CUgVBSquHbO7ulIGMdCAh8PwGP+SCUIuGnUFFRiSUvLV508x033drc3NQGgKUrqnuf2euhV6XXG8QJfvzJtfzs7x+cqhvUK9XlzqQFIAEtAaEkpOLgPEDIQwjJoZWCVAqccxhjYKzBC0temHbf/fc9rLV2u2xkDh06NHnn7XeG1VXVsNZGkmc7JF86sZRhORBCwKgHz/NBiQcQgBKKyspqZFuymHHvHZfPXzj3VQBsTO87Vp02+ESceltd65hJA1KU0q6DdwAEoIUFVxxcROCFFJCx1IWMchUQIJvNYvac2WOefOrJFR1z3o5TV9Lc3Gw+2vDRz8YdO+6HyUQSWuuSuhNCSmpPCS2RQgkFZV5EConST0IIhBSoqqzCSZMmn96nb22vte9v3HzVhReO/cGsSZn6gzIpQoj3WcELrhGIIgIegPMiuIgdn9Lggkfx32i8s/Kd12fcM2PkH//7jxv2tpUNABg7dmyP6d+d3lzTowbGGPieD8ZYSRsIjTY8uLimJaSdIAYS56GUeDBWIygG6F7dGwcPGQivm+Ge53Vd6rHNWw6EnCPkAbgIIaWI/JVUEFLAxLnFho83YNbTs8Y899xz73DObQcK90wAADJixIiqW2+6ta1nTc+IBOaD+WwnjQAAZxxACShhMQlRr18qCaOA2p59MXhAPbwen2MOpQAZaARhgFAUoaSEVCoGL6GtgTEGW7ZuweIli6fOfnr2wqamJrmLQarbKwIAoL6+Pvm9a77368NHHX5eexj0PA+MsLIqMapgGfNBCYGzgJQCyWQV+vcdiAPqu0UJzGd5WcCEFmHAUeQFSCmgYuBSSjhrYZzF5i2b8eJLL14+b/68ORs2bCiWauzPSwAA4vs+vfyyy88/47QzfpNOpWGMAWNRdEB7iekcPM+HMRpKGfTsUY8hAw9CZU/6mfeiOQ6IIkchCMBVAK0VlNZQUkfps7HY1rQVC55ZMG3hooW/37hxY64sddp3BLQf48ePH3jFZVe82a++X8a0l22ElG7HRQhGExg8YAQGH1gHVoXPBl4CPBAIggChCGC0hlQKSqtS9vnxpo8xd/7cq5557pl5W7ZsyZUB3mcEoLNGR01NTeLbF3/72q+c8JVbEokEpJSglCKfb0XCr8IRh41F//qaSOW7Cl4DsqhQDIoIRQCtYolrBUY9cBFi3fp1fNbTs6YtWbLk2eZsc2FHIlwCbjsB/rkJQMcW1ejRowdfdMG3fnvIkIPHbG/ehky3Pjh6zAT07lMZAfe7CDxQCIph5OC0hNYGSikEYRFCCrzX+F7jH+bN/fHSPy19OZ/PF8oS4bJqoCR114kWdDkK7LHd7XmeN2bMEaOnX/3Dead8dUqmWzc/+mVvtzRpQBc1imGAgAdQWsIYA60NWnNZtLRkobTFI489cvnCRQuejUHqMsCfmwD2GQgoaYW1Fs6geN9PHvhOJpNKlao2uhsCXBzSChqFXAG5YhsCXizF89a2LD7cuB651gIq0z3Qp3YAYPHJ2g/XNmazzfkyoHYPQPfqxT7jtJcAIHUH1Hd7f+XGzd0yiZQRUWdm51lQh9xdRLG8kC8gHwMXUkAKCZpWaAubsWH9FtR0OwBDBh+GA2rr4HkMXzrsiCMv+uYlV1hrtvzlb2+udM7prkp6XxLQ7v3ZijdWL+/dr3uG54GE30kXz+7I3mSoUCwUPwXcMgGRaMHrL67k8x95ozDu+PE46stjPI8moI0GpYCxGh5lmDRx8kkTjp1w4lt/XfZ8NpstdqLye5NI75s9Qr984Fc3DB5af2CxxcDzYhdsdtTnkIDmDrwokSvk0JJrQVuhFUEYgIdRE0Slt2PN++/x3928onXmTW/jb681pyq6JVAIC5BaIplKIpVKI5WsAGVRFBg39vgxixcsbTxp0inD98Uusc9kAl85buKB/3n//bNzLTLqHFEC4kjkkbSDMgZSaoQiQDEoIORFCMEhpYy2yVbnsWHzh/zl335cePXhQK9b52UYoV6vSqLHTD4QFam0RxxAKQMlBJQRMBbtK9dKoaqyGlNOPfOyllz2zeUr/rq2KxLvKgGd2v+cp55t7NG9Z0oZBUoJiLOwsDDaQJm4AcmLcQjjkFJDCAlCHFSyBX9auKp14Q+yesP7mVR3UltVRX0oK+ERoUd/rR/SFRWec5GTjRqdBISSqBijBNoaJPwETpo4eaqy+t2GZa+9txfO0O1xf8DeMPn1M88bPHTo0Ey+mIPneTAmjkXEwBoLrSWEElBKQhsNraLeH2UUK9et+GjBI2+t+3jFoLE9Uv1TByYzSPbw0NYEeDQFDz6MVVBKwmnA6KjASfoJMOdHGsEIPEqhjQYIwU3X3jxr3foPJsxfMOfNfbVLbHdqQy675Mo5RmtYY2GNhTIKSnMIwRGEBRSCIkIeRD04HrWouBB49oVFi/7l3EumLH7prRf7pPqnerMq+DQJn6Tg0xQ86oNSCm1kpDVKwlgNIQVCySFkCG0UjLawACilUevbOcy89xevHjzk4B5djQBd0QAAwMgRI9PDDhk2si3XAs+jUMYAJsrNjZIQRsb9eAchOZx1UFrh7p/efe28efPmA6C90rV1FTQFSn34rAI+88CIBIEH5rMU1wUUCwVUpCicAxil8VQnCeuAhGcBRINPxjxIFXWpH3348Q9PPHl8d+dcZ+mv2yfb5IYPO6xvIulDGwmlIlWVQiDkAQIRQsV9uCAsRklNrhXX/ei6C+bNmzenPXnxkjqgxIukDx8M0UZJn3pozm1ZuWLlX1bmii0IwjwKhRxCzsF5lCKHYQghZdT7Nw6ERM3aMAwxbOjI1NlTzhm1X/cJjvnSkRNKHRgTdWACHkRNSKOhlAbnkbcvBkVMv276ma+89sorOxcpzjKaAG0fGMdjrBRJYFuwbcUdN9979v0P33fVhxvXQhmBQiGHfD4PzkU81tJwsXOkQMkvWGtw3vkX/K6rkYB2wQG6nr16jZJKQhsJKSPJKCVgTVS4CMERhiGkknjg4Qeuffvtt9/skKxYUC3Lg0+7xhJCkKTJ7gDUyy++8vz066Z/6bkXFy0q8jy4ECgUCuChhHEmnk8QEMbA4n+0klJiyKDBhwwbNqxqX2hAp6wZIyqdM5AymrBGxYuFUro0eDDW4PVlr/913rx5T3bI2R0AZwzhDro0ddpp74FTQft52eZs9t777r3ioV8+cHlzy1YUgzyEEqCEgcYdKUYJiMdAWaRgyUQKIw4dMaArTrBLJqCNUUJGkxelos6rsSbeN6AgYkk1LGt4rJPqLNoJI6HgdNQ4bd8m176bnGjVobHhXnjhhUX33D9jStP2bWCMIZVKIZlIgHkeCGVgZOeZRV3/+sO6EA1clwhobm5a2d6JNdZGBBgTl7CRFuQLefi+n+nQmWkvW53ylSCgKB+zuPjPwMiO5wOwK1asaHh+ybPTBg4YhMqKCvi+Dz9BwWj5ZNRG/5BBaI+9NGvXFQ1wALBq9eolUgloo+GsKyUqxsRaIBWstRg+bPi/x/e2HSVK3Y7tC9F2GRvvFrdw3k4asFMY+/Lhx/TrWdMDqXQaySQFo4h6kvG12hpwHiJfyDV2pSD6X4wYFk47H4gBAAAAAElFTkSuQmCC"
  },
  973: function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfhAgILACGBOQbTAAAKjklEQVRo3sWYe4xV1RXGf3ufcx/zwJnh6eBUFOyAKFDFB9WSlooaRZIi9RlrrUpQW6Ik1KTW1CaNmtjal7F/1KYWpYrGlFcMojGiVsRRi1ixcXyL4oPXMHPn3nvO2Y/+cfY999zLzDBjir0398zjnrO+b6+19lrf2vB/fokv+2CeqzK5ybmzaQ2eCHY8VOr9agnc0DZ2a7bTwwAWQ8j+E+57M/xqCGS56cqWlRLjHjaAwdK/dvfi+81XQODmW9t+ZZBIACwWg8FgKbJTPmxHZs0bKfxPpoxba/CQNNGMRCffWDxEueufh9UDl4lOkwU8GhmFoEwfGus+hpDPM/erkViUIyPQOj6DRSCAiBBVtxZJ7qqRWRwhgcY7rHN3QIEQSQNejSNz910qDhuB74vMggoBjULSyBG0IF0yWiyCrHeYCCwSWcGESsZbLB45smTwscl+EPi5ReIwEFgkQFHZ5gaLQROhUChHKi5LWsd3D+/lDxccILJRt+mME84gKGCRlIkcndgzoao8s8b+TzyQXk3xF8qVHYMhpIceCmgHDhB1B3qgJ79kHag3MSo/vphHujooAQ+FduvXaA507n0n/cShvCBHAC8QfUHfKlP9kxxZVxXAAiE97yX/cDaG9oMcJnxitPfaIOU8n0zSESyKQru2B3t2KApymPAJjbLuPV1jk1aSSdWA/t/17Emo1vlhhDkwAHz1Kjo2jzlDIPFoJcPnKCI0JT5rCJWLRe11iGyQI4AX7s3+BWVnXeK5qqDomxnq6j01tIfwghwBfOUj+0v7LrI1Biz9a/d3p6CHTaGmEF0pGinQfzB8vVlR3m4RLvquMG2uCadFuA/u6ijUB8IRaODupjN+MP7HmROD7l33PP3gq716IPjkKpuqSIklkYZK0XAUxnqzx0yff+vXix9/9OT2T+7SKQLLxdK7py535jrb7/nGPf/567037I4GgJeV32xi3b0UMkk8UXO1gDiv44IPW4gwCGbyXeacfklXFBucyC37pi63jqrAoDn+6p+VWzJ18ALpPqI+dwxG192R9hk/nH/Rhx49lAicipr70pM3uhxafcnYVpvatj4eZY7k8l8flP8VGgOkri0ja+Cr9YC5087Y1IfGR+IhkGgO0Pn7B+eAvEWetlpTX3M9ikxbNmVsDbxM4KVJgmwriRi6FiHq3uT9C3cYcmTwHHxspsCsF2/05JyTs9iDqpPF4HPK9TXwJBDSOAq2+qxOLNcQyHpLl7eSIYuPj5eKj0Yy4yQ55sxogPJgsYSMv67GnRUHe1WHVcudVQi8Oi8wo/32V+bcKdzq469IvBYx6tt+0G/RiJoBIZYXAc0TJh/33rt10RdJN06EGIDV+G5IkvG4NKFhwVXzf+MT4LutYFK+NmgU3lF+3zvK5b9M4CNCAhQRZ77w8ddCnQIXyTJqtqHBVk0YRENu3rcuXjuKEO3aFckIU1FPClCfyE92lAidxrdOcJcoo1CUGN26+KFk1ZW1SyTSplQAsbnkjrkn3fXONWsbUYnjZSq0sXAJUfj0via37vmCkBJlihTpp49eikQYSggMHQsv/WmSA5UIe4njnUmLJs6w2dNvW3/TMxNbNSJJuurKY3BNhAFC3tsqH7Bb50UU6XfgfQRoNH1E5Mig6Lzt4tuT1Ys41WySAdpJkWA34vhJy/98y+ZZZxhXTaodySY6WhMRoTBk2F9+q+jDs89OpQ2fjHOUJqSEIpvM/rOWNY9/5Ob+ErEIkAhdkeBYDCX6ysfOmDtvwW0etm7itcn8rNGoBN5ieHqCI3jH0ed+aMjiIdzMY11hj3d7hmYOlP925sefVkKam3DMljySJkrsg57zOauVAbdzrBU0Ck1ESIgiQiF5afHGNY7s0wfOHTPm9MDJa1IVK972HoZm/9SlpR0730fi4XmNrddk0BTxyqcVrs5Pax5YWVmsi7oiIiRyVARv37nm3pRcuEJep5tQrqfWNnbwkQh8sry+4dFf9h3Ay40/+nmJLc8on5Mflx9M71kHXQE3KEIMlu3L1v8plq+iIhSOyl1eymOTTKt8aV3g44TK0c/aJV3P47XvmMT5PSfkxZDwykU9jntEhKDAltnPvVYpIaIqljpbFu/PYNzWkSk1JZO+aski2frIUw/P/8PFk4bS+9blewweU7Eodm7ZdN5HhaqSEWm1NrXtgr3NjoKsCUa1vRsCGmgnV/byQ8Erghpwg2UvL8z+1+uhSUupGk34Vk+p5aIDozA1qtIkAYnz+QjG0QBDwGsiAgeuHfgBtl+6Zf2BsKbl1nsAAWNyC+8/5hKbxJ1kZ1sUGUbTNuRIbZPNptyGtuxn+5Kux3b3u85l0630IAIIX86/7JSVWQzS0bR4GDTNTKBpyHlWERCgMG5kNfTyyrKXH9nT6yrXcAggEMcfc3bX6FaTeEohGcd4skPAawK30zUKMOyl6/pX1+zvdcVwGASoio9R2XkrTrzNRyEp4TOJMfiDwhtC10E1GknE5+Uty7Y/3ldwRwkVMTAsAlSk1eTJ33ngyNl9NDGFljrRUgseuJVrAhS7urfevuOZUgHjmoVJRJCthR+IQI0E9/wpJy9YM6u1EdJKrAY8JHTHE0UKGJ5a8vLjGHdwdEgCQx/RWK13d8+kcYAbLZoyBQqUCFEU+JR9+LQx/ZT29vqxaRhHNPVpGFeitpY/fppHJcJCpIpsvHKNJkOJz2hmNBkUGSzrV2xapYPk8Myk9HudB5KwHl9PABDeXdtGt5Zd8lVsaEICt26FQPBGeXPhBI7zJYb4GH/GOdPmvbux0F8dGw5y4HDOiJb8fOKkfleE4p2kCChRpERIiEWyq7yu5x+8nc8ToMmQIYtEMW32Ld2zph86CIN7QJww6epH+xMlb1xPr1b4DHvLLxaeV1+0Cr9BzSDrk5rcFHlOubbY9f67A698MAKpOXBFd1PeIFKSKnJujxBItvWsU7vzfrOHQagZ5HzrRuKYhsFj5qXm391v1Y5QtTT8weIzZ/LE1jKeE2XGFddYMwl2ffjse7u+mc/naaTPTSIKicHgJ/LZIFi0+ou5L3UN45Ss7uRCnPWYdkUszvggUXMh2zb8duHrTzbkM6mRwbimq5z4MIDEYPnR8+1tg2/KQZLw6IajTixBEvcQ5apcxLoVDy5X5exEz+lFAfh5lS878MgdYWtAosmy9AMhBj45G5RAR7vv5GNsUKMI0BRZdcXWx7AYr0giWiT9b3z0Rnz4ECaDXXx4LwnpyJ86c4QHlcfOrYiJipINUQSs/N6bz1VO62VSliTF11ZfuPH6PRjKlNz6jQOQGOb+fbB9IAdMQXvETOU0rE7qnuKJFR90VUqCCKu3C7wWou0bV87atiEkokSAdeCxSpjQ2dF8SA+k09A02WQd8cazdL+6dZWbNCzWlElNfbaIxfbtW7d005ICAbrmQAV8Oo4eURLqSDkdWylAZd76S6qmWx2lDicgqkyp2zasX9iLJOOmw4qwHTNjoACssYMQKLxRgTeuBpTwW1MDoRVBTXMOkznVvP/i9mXjyLnZuFLdZFs9xhq7xg7sAQs7n4qSKmCcuOy4yW3sysCXWpCIUm3HHtvRTJZMUsY1IaXuevj4538BBXB1HeF6wqkAAAAASUVORK5CYII="
  },
  974: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function l(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function s(e, t, n) {
      var r = u(e, t);
      return h.createElement("div", {
        className: (0, se.default)(n ? ae.default["integer-data"] : void 0)
      }, r)
    }

    function u(e, t) {
      var n = "";
      return e.length > 0 && e[0].hasOwnProperty(t) && (n = e[0][t]), n
    }

    function c(e, t, n) {
      return e.length > 0 && e.reduce(function (e, r) {
        var i = r[t];
        return i ? e || i.toUpperCase().indexOf(n) > -1 : e
      }, !1)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.MutationTableComponent = t.MutationTableColumnType = void 0;
    var f = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      };
    t.getDivForDataField = s, t.getTextForDataField = u, t.defaultFilter = c;
    var d = n(1),
      h = i(d),
      m = n(33),
      y = n(13),
      v = n(3),
      g = i(v),
      b = n(178),
      w = r(b),
      E = n(975),
      _ = r(E),
      C = n(888),
      T = r(C),
      A = n(976),
      k = r(A),
      O = n(921),
      I = r(O),
      x = n(977),
      S = r(x),
      M = n(978),
      P = r(M),
      D = n(926),
      j = r(D),
      N = n(979),
      R = r(N),
      L = n(980),
      F = r(L),
      V = n(894),
      H = r(V),
      B = n(983),
      G = r(B),
      z = n(985),
      U = r(z),
      q = n(991),
      W = r(q),
      Q = n(994),
      K = r(Q),
      Y = n(928),
      Z = r(Y),
      J = n(895),
      X = r(J),
      $ = n(995),
      ee = r($),
      te = n(997),
      ne = r(te),
      re = n(923),
      ie = r(re),
      oe = n(872),
      ae = r(oe),
      le = n(174),
      se = r(le),
      ue = function (e, t, n, r) {
        var i, o = arguments.length,
          a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : p(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
        else
          for (var l = e.length - 1; l >= 0; l--)(i = e[l]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return o > 3 && a && Object.defineProperty(t, n, a), a
      },
      ce = t.MutationTableColumnType = void 0;
    ! function (e) {
      e[e.STUDY = 0] = "STUDY", e[e.SAMPLE_ID = 1] = "SAMPLE_ID", e[e.TUMORS = 2] = "TUMORS", e[e.GENE = 3] = "GENE", e[e.PROTEIN_CHANGE = 4] = "PROTEIN_CHANGE", e[e.CHROMOSOME = 5] = "CHROMOSOME", e[e.START_POS = 6] = "START_POS", e[e.END_POS = 7] = "END_POS", e[e.REF_ALLELE = 8] = "REF_ALLELE", e[e.VAR_ALLELE = 9] = "VAR_ALLELE", e[e.MUTATION_STATUS = 10] = "MUTATION_STATUS", e[e.VALIDATION_STATUS = 11] = "VALIDATION_STATUS", e[e.MUTATION_TYPE = 12] = "MUTATION_TYPE", e[e.CENTER = 13] = "CENTER", e[e.TUMOR_ALLELE_FREQ = 14] = "TUMOR_ALLELE_FREQ", e[e.NORMAL_ALLELE_FREQ = 15] = "NORMAL_ALLELE_FREQ", e[e.FUNCTIONAL_IMPACT = 16] = "FUNCTIONAL_IMPACT", e[e.ANNOTATION = 17] = "ANNOTATION", e[e.COSMIC = 18] = "COSMIC", e[e.COPY_NUM = 19] = "COPY_NUM", e[e.MRNA_EXPR = 20] = "MRNA_EXPR", e[e.COHORT = 21] = "COHORT", e[e.REF_READS_N = 22] = "REF_READS_N", e[e.VAR_READS_N = 23] = "VAR_READS_N", e[e.REF_READS = 24] = "REF_READS", e[e.VAR_READS = 25] = "VAR_READS", e[e.CANCER_TYPE = 26] = "CANCER_TYPE", e[e.NUM_MUTATIONS = 27] = "NUM_MUTATIONS"
    }(ce || (t.MutationTableColumnType = ce = {}));
    var fe = t.MutationTableComponent = function (e) {
        function t() {
          return o(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return l(t, e), t
      }(w.default),
      pe = function (e) {
        function t(e) {
          o(this, t);
          var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return n._columns = {}, n.generateColumns(), n
        }
        return l(t, e), f(t, [{
          key: "generateColumns",
          value: function () {
            var e = this;
            this._columns = {}, this._columns[ce.STUDY] = {
              name: "Study",
              render: function (t) {
                return ne.default.renderFunction(t, e.props.molecularProfileIdToMolecularProfile, e.props.studyIdToStudy)
              },
              download: function (t) {
                return ne.default.getTextValue(t, e.props.molecularProfileIdToMolecularProfile, e.props.studyIdToStudy)
              },
              sortBy: function (t) {
                return ne.default.getTextValue(t, e.props.molecularProfileIdToMolecularProfile, e.props.studyIdToStudy)
              },
              filter: function (t, n, r) {
                return ne.default.filter(t, r, e.props.molecularProfileIdToMolecularProfile, e.props.studyIdToStudy)
              },
              visible: !1
            }, this._columns[ce.SAMPLE_ID] = {
              name: "Sample ID",
              render: function (t) {
                return _.default.renderFunction(t, e.props.molecularProfileIdToMolecularProfile)
              },
              download: _.default.getTextValue,
              sortBy: _.default.getTextValue,
              filter: function (e, t, n) {
                return c(e, "sampleId", n)
              },
              visible: !0
            }, this._columns[ce.TUMOR_ALLELE_FREQ] = {
              name: "Allele Freq (T)",
              render: T.default.renderFunction,
              headerRender: function (e) {
                return h.createElement("span", {
                  style: {
                    display: "inline-block",
                    maxWidth: 55
                  }
                }, e)
              },
              sortBy: T.default.getSortValue,
              tooltip: h.createElement("span", null, "Variant allele frequency in the tumor sample"),
              visible: !0
            }, this._columns[ce.NORMAL_ALLELE_FREQ] = {
              name: "Allele Freq (N)",
              render: k.default.renderFunction,
              headerRender: function (e) {
                return h.createElement("span", {
                  style: {
                    display: "inline-block",
                    maxWidth: 55
                  }
                }, e)
              },
              sortBy: k.default.getSortValue,
              tooltip: h.createElement("span", null, "Variant allele frequency in the normal sample"),
              visible: !1
            }, this._columns[ce.MRNA_EXPR] = {
              name: "mRNA Expr.",
              render: function (t) {
                return e.props.mrnaExprRankCache ? I.default.renderFunction(t, e.props.mrnaExprRankCache) : h.createElement("span", null)
              }
            }, this._columns[ce.COHORT] = {
              name: "Cohort",
              render: function (t) {
                return e.props.variantCountCache ? S.default.renderFunction(t, e.props.mutSigData, e.props.variantCountCache) : h.createElement("span", null)
              },
              sortBy: function (t) {
                var n = e.props.variantCountCache;
                return n ? S.default.getSortValue(t, n) : 0
              },
              tooltip: h.createElement("span", null, "Mutation frequency in cohort"),
              defaultSortDirection: "desc"
            }, this._columns[ce.COPY_NUM] = {
              name: "Copy #",
              render: function (t) {
                return e.props.discreteCNACache && e.props.molecularProfileIdToMolecularProfile ? P.default.renderFunction(t, e.props.molecularProfileIdToMolecularProfile, e.props.discreteCNACache) : h.createElement("span", null)
              },
              sortBy: function (t) {
                return e.props.discreteCNACache && e.props.molecularProfileIdToMolecularProfile ? P.default.getSortValue(t, e.props.molecularProfileIdToMolecularProfile, e.props.discreteCNACache) : 0
              },
              filter: function (t, n) {
                return !(!e.props.discreteCNACache || !e.props.molecularProfileIdToMolecularProfile) && P.default.filter(t, e.props.molecularProfileIdToMolecularProfile, e.props.discreteCNACache, n)
              },
              visible: P.default.isVisible(this.props.discreteCNACache)
            }, this._columns[ce.REF_READS_N] = {
              name: "Ref Reads (N)",
              render: function (e) {
                return j.default.renderFunction(e, [e[0].sampleId], "normalRefCount")
              },
              download: function (e) {
                return j.default.getTextValue(e, [e[0].sampleId], "normalRefCount")
              },
              sortBy: function (e) {
                return e.map(function (e) {
                  return e.normalRefCount
                })
              },
              visible: !1,
              align: "right"
            }, this._columns[ce.VAR_READS_N] = {
              name: "Variant Reads (N)",
              render: function (e) {
                return j.default.renderFunction(e, [e[0].sampleId], "normalAltCount")
              },
              download: function (e) {
                return j.default.getTextValue(e, [e[0].sampleId], "normalAltCount")
              },
              sortBy: function (e) {
                return e.map(function (e) {
                  return e.normalAltCount
                })
              },
              visible: !1,
              align: "right"
            }, this._columns[ce.REF_READS] = {
              name: "Ref Reads",
              render: function (e) {
                return j.default.renderFunction(e, [e[0].sampleId], "tumorRefCount")
              },
              download: function (e) {
                return j.default.getTextValue(e, [e[0].sampleId], "tumorRefCount")
              },
              sortBy: function (e) {
                return e.map(function (e) {
                  return e.tumorRefCount
                })
              },
              visible: !1,
              align: "right"
            }, this._columns[ce.VAR_READS] = {
              name: "Variant Reads",
              render: function (e) {
                return j.default.renderFunction(e, [e[0].sampleId], "tumorAltCount")
              },
              download: function (e) {
                return j.default.getTextValue(e, [e[0].sampleId], "tumorAltCount")
              },
              sortBy: function (e) {
                return e.map(function (e) {
                  return e.tumorAltCount
                })
              },
              visible: !1,
              align: "right"
            }, this._columns[ce.START_POS] = {
              name: "Start Pos",
              render: function (e) {
                return s(e, "startPosition", !0)
              },
              download: function (e) {
                return u(e, "startPosition")
              },
              sortBy: function (e) {
                return e.map(function (e) {
                  return e.startPosition
                })
              },
              visible: !1,
              align: "right"
            }, this._columns[ce.END_POS] = {
              name: "End Pos",
              render: function (e) {
                return s(e, "endPosition", !0)
              },
              download: function (e) {
                return u(e, "endPosition")
              },
              sortBy: function (e) {
                return e.map(function (e) {
                  return e.endPosition
                })
              },
              visible: !1,
              align: "right"
            }, this._columns[ce.REF_ALLELE] = {
              name: "Ref",
              render: function (e) {
                return s(e, "referenceAllele")
              },
              download: function (e) {
                return u(e, "referenceAllele")
              },
              sortBy: function (e) {
                return e.map(function (e) {
                  return e.referenceAllele
                })
              },
              visible: !1
            }, this._columns[ce.VAR_ALLELE] = {
              name: "Var",
              render: function (e) {
                return s(e, "variantAllele")
              },
              download: function (e) {
                return u(e, "variantAllele")
              },
              sortBy: function (e) {
                return e.map(function (e) {
                  return e.variantAllele
                })
              },
              visible: !1
            }, this._columns[ce.MUTATION_STATUS] = {
              name: "MS",
              tooltip: h.createElement("span", null, "Mutation Status"),
              render: X.default.renderFunction,
              download: X.default.download,
              sortBy: X.default.sortValue,
              filter: function (e, t, n) {
                return c(e, "mutationStatus", n)
              },
              visible: !1
            }, this._columns[ce.VALIDATION_STATUS] = {
              name: "VS",
              tooltip: h.createElement("span", null, "Validation Status"),
              render: ee.default.renderFunction,
              download: ee.default.download,
              sortBy: ee.default.sortValue,
              filter: function (e, t, n) {
                return c(e, "validationStatus", n)
              },
              visible: !1
            }, this._columns[ce.CENTER] = {
              name: "Center",
              render: function (e) {
                return s(e, "center")
              },
              download: function (e) {
                return u(e, "center")
              },
              sortBy: function (e) {
                return e.map(function (e) {
                  return e.center
                })
              },
              filter: function (e, t, n) {
                return c(e, "center", n)
              },
              visible: !1
            }, this._columns[ce.GENE] = {
              name: "Gene",
              render: function (e) {
                return R.default.renderFunction(e)
              },
              download: function (e) {
                return R.default.getTextValue(e)
              },
              sortBy: function (e) {
                return R.default.getSortValue(e)
              },
              filter: function (e, t, n) {
                return R.default.getTextValue(e).toUpperCase().indexOf(n) > -1
              }
            }, this._columns[ce.CHROMOSOME] = {
              name: "Chromosome",
              render: function (e) {
                return h.createElement("div", {
                  className: ae.default["integer-data"]
                }, F.default.getData(e))
              },
              download: function (e) {
                return F.default.getData(e) || ""
              },
              sortBy: function (e) {
                return F.default.getSortValue(e)
              },
              filter: function (e, t, n) {
                return (F.default.getData(e) + "").toUpperCase().indexOf(n) > -1
              },
              visible: !1,
              align: "right"
            }, this._columns[ce.PROTEIN_CHANGE] = {
              name: "Protein Change",
              render: H.default.renderWithMutationStatus,
              download: H.default.getTextValue,
              sortBy: function (e) {
                return H.default.getSortValue(e)
              },
              filter: H.default.getFilterValue
            }, this._columns[ce.MUTATION_TYPE] = {
              name: "Mutation Type",
              render: G.default.renderFunction,
              download: G.default.getTextValue,
              sortBy: function (e) {
                return G.default.getDisplayValue(e)
              },
              filter: function (e, t, n) {
                return G.default.getDisplayValue(e).toUpperCase().indexOf(n) > -1
              }
            }, this._columns[ce.FUNCTIONAL_IMPACT] = {
              name: "Functional Impact",
              render: function (t) {
                return e.props.genomeNexusEnrichmentCache ? U.default.renderFunction(t, e.props.genomeNexusEnrichmentCache) : h.createElement("span", null)
              },
              download: function (t) {
                return U.default.download(t, e.props.genomeNexusEnrichmentCache)
              },
              headerRender: U.default.headerRender,
              visible: !1,
              shouldExclude: function () {
                return !e.props.enableFunctionalImpact
              }
            }, this._columns[ce.COSMIC] = {
              name: "COSMIC",
              render: function (t) {
                return W.default.renderFunction(t, e.props.cosmicData)
              },
              sortBy: function (t) {
                return W.default.getSortValue(t, e.props.cosmicData)
              },
              download: function (t) {
                return W.default.getDownloadValue(t, e.props.cosmicData)
              },
              tooltip: h.createElement("span", null, "COSMIC occurrences"),
              defaultSortDirection: "desc",
              align: "right"
            }, this._columns[ce.ANNOTATION] = {
              name: "Annotation",
              render: function (t) {
                return ie.default.renderFunction(t, {
                  hotspotData: e.props.hotspotData,
                  myCancerGenomeData: e.props.myCancerGenomeData,
                  oncoKbData: e.props.oncoKbData,
                  oncoKbEvidenceCache: e.props.oncoKbEvidenceCache,
                  oncoKbAnnotatedGenes: e.props.oncoKbAnnotatedGenes,
                  pubMedCache: e.props.pubMedCache,
                  civicGenes: e.props.civicGenes,
                  civicVariants: e.props.civicVariants,
                  enableCivic: e.props.enableCivic,
                  enableOncoKb: e.props.enableOncoKb,
                  enableMyCancerGenome: e.props.enableMyCancerGenome,
                  enableHotspot: e.props.enableHotspot,
                  userEmailAddress: e.props.userEmailAddress
                })
              },
              download: function (t) {
                return ie.default.download(t, e.props.oncoKbAnnotatedGenes, e.props.hotspotData, e.props.myCancerGenomeData, e.props.oncoKbData, e.props.civicGenes, e.props.civicVariants)
              },
              sortBy: function (t) {
                return ie.default.sortValue(t, e.props.oncoKbAnnotatedGenes, e.props.hotspotData, e.props.myCancerGenomeData, e.props.oncoKbData, e.props.civicGenes, e.props.civicVariants)
              }
            }, this._columns[ce.CANCER_TYPE] = {
              name: "Cancer Type",
              render: function (t) {
                return Z.default.render(t, e.props.uniqueSampleKeyToTumorType)
              },
              download: function (t) {
                return Z.default.download(t, e.props.uniqueSampleKeyToTumorType)
              },
              sortBy: function (t) {
                return Z.default.sortBy(t, e.props.uniqueSampleKeyToTumorType)
              },
              filter: function (t, n, r) {
                return Z.default.filter(t, r, e.props.uniqueSampleKeyToTumorType)
              },
              tooltip: h.createElement("span", null, "Cancer Type")
            }, this._columns[ce.NUM_MUTATIONS] = {
              name: "# Mut in Sample",
              render: K.default.makeRenderFunction(this),
              headerRender: function (e) {
                return h.createElement("span", {
                  style: {
                    display: "inline-block",
                    maxWidth: 55
                  }
                }, e)
              },
              sortBy: function (t) {
                return K.default.sortBy(t, e.props.mutationCountCache)
              },
              download: function (t) {
                return K.default.download(t, e.props.mutationCountCache)
              },
              tooltip: h.createElement("span", null, "Total number of nonsynonymous mutations in the sample"),
              align: "right"
            }
          }
        }, {
          key: "render",
          value: function () {
            return h.createElement(fe, {
              columns: this.columns,
              data: this.props.data,
              dataStore: this.props.dataStore,
              downloadDataFetcher: this.props.downloadDataFetcher,
              initialItemsPerPage: this.props.initialItemsPerPage,
              initialSortColumn: this.props.initialSortColumn,
              initialSortDirection: this.props.initialSortDirection,
              itemsLabel: this.props.itemsLabel,
              itemsLabelPlural: this.props.itemsLabelPlural,
              paginationProps: this.props.paginationProps,
              showCountHeader: this.props.showCountHeader,
              columnVisibility: this.props.columnVisibility,
              columnVisibilityProps: this.props.columnVisibilityProps
            })
          }
        }, {
          key: "orderedColumns",
          get: function () {
            var e = this,
              t = this.props.columns || [];
            return g.sortBy(t, function (t) {
              var n = -1;
              return e._columns[t] && e._columns[t].order && (n = e._columns[t].order), n
            })
          }
        }, {
          key: "columns",
          get: function () {
            var e = this;
            return this.orderedColumns.reduce(function (t, n) {
              var r = e._columns[n];
              return !r || r.shouldExclude && r.shouldExclude() || t.push(r), t
            }, [])
          }
        }]), t
      }(h.Component);
    pe.defaultProps = {
      initialItemsPerPage: 25,
      showCountHeader: !0,
      paginationProps: {
        itemsPerPageOptions: [25, 50, 100]
      },
      initialSortColumn: "Annotation",
      initialSortDirection: "desc",
      itemsLabel: "Mutation",
      itemsLabelPlural: "Mutations",
      enableOncoKb: !0,
      enableMyCancerGenome: !0,
      enableHotspot: !0,
      enableCivic: !1
    }, ue([y.observable], pe.prototype, "_columns", void 0), ue([y.computed], pe.prototype, "orderedColumns", null), ue([y.computed], pe.prototype, "columns", null), pe = ue([m.observer], pe), t.default = pe
  },
  975: function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      o = n(1),
      a = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(o),
      l = n(871),
      s = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(l),
      u = function () {
        function e() {
          r(this, e)
        }
        return i(e, null, [{
          key: "getTextValue",
          value: function (t) {
            return e.getData(t) || ""
          }
        }, {
          key: "getData",
          value: function (e) {
            return e.length > 0 ? e[0].sampleId : null
          }
        }, {
          key: "renderFunction",
          value: function (t, n) {
            var r = e.getTextValue(t),
              i = a.createElement(s.default, {
                text: r,
                tooltip: a.createElement("div", {
                  style: {
                    maxWidth: 300
                  }
                }, r),
                maxLength: 16
              });
            if (n) {
              var o = n[t[0].molecularProfileId],
                l = o && o.studyId;
              if (l) {
                var u = "#/patient?sampleId=" + r + "&studyId=" + l,
                  c = window.location.href.search("index.do");
                c > -1 && (u = window.location.href.substring(0, c) + "case.do" + u), i = a.createElement("a", {
                  href: u,
                  target: "_blank"
                }, i)
              }
            }
            return i
          }
        }]), e
      }();
    t.default = u
  },
  976: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      a = n(1),
      l = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(a),
      s = n(856),
      u = r(s),
      c = n(888),
      f = r(c),
      p = function () {
        function e() {
          i(this, e)
        }
        return o(e, null, [{
          key: "renderFunction",
          value: function (t) {
            var n = e.getSortValue(t);
            if (n) {
              var r = t[0].normalAltCount,
                i = t[0].normalRefCount;
              return f.default.mainContent(n, r, i)
            }
            return l.createElement(u.default, {
              status: s.TableCellStatus.NA
            })
          }
        }, {
          key: "getSortValue",
          value: function (e) {
            var t = e[0];
            if (!t) return null;
            var n = t.normalAltCount,
              r = t.normalRefCount;
            return n < 0 || r < 0 ? null : n / (n + r)
          }
        }]), e
      }();
    t.default = p
  },
  977: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      a = n(1),
      l = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(a);
    n(288);
    var s = n(891),
      u = r(s),
      c = n(922),
      f = r(c),
      p = n(860),
      d = n(856),
      h = r(d),
      m = function () {
        function e() {
          i(this, e)
        }
        return o(e, null, [{
          key: "renderFunction",
          value: function (t, n, r) {
            var i = e.getMutSigQValue(t, n),
              o = e.getVariantCountData(t, r),
              a = e.makeCohortFrequencyViz(o);
            return l.createElement("div", null, null !== a && a, null !== i && e.makeMutSigIcon(i))
          }
        }, {
          key: "getSortValue",
          value: function (t, n) {
            var r = e.getVariantCountData(t, n);
            return r && r.data ? r.data.numberOfSamplesWithMutationInGene : null
          }
        }, {
          key: "getVariantCountData",
          value: function (e, t) {
            if (0 === e.length) return null;
            var n = e[0].entrezGeneId,
              r = e[0].keyword,
              i = t.get({
                entrezGeneId: n,
                keyword: r
              });
            return i ? Object.assign({
              hugoGeneSymbol: e[0].gene.hugoGeneSymbol
            }, i) : null
          }
        }, {
          key: "getMutSigQValue",
          value: function (e, t) {
            if (!t || 0 === e.length) return null;
            var n = t[e[0].entrezGeneId];
            return n ? n.qValue : null
          }
        }, {
          key: "makeCohortFrequencyViz",
          value: function (t) {
            var n = null;
            if (null === t) n = d.TableCellStatus.LOADING;
            else if ("error" === t.status) n = d.TableCellStatus.ERROR;
            else {
              if (null !== t.data) {
                var r = [t.data.numberOfSamplesWithMutationInGene];
                return t.data.keyword && r.push(t.data.numberOfSamplesWithKeyword), l.createElement(u.default, {
                  counts: r,
                  totalCount: t.data.numberOfSamples,
                  tooltip: e.getCohortFrequencyTooltip(t)
                })
              }
              n = d.TableCellStatus.NA
            }
            if (null !== n) return l.createElement(h.default, {
              status: n
            })
          }
        }, {
          key: "makeMutSigIcon",
          value: function (t) {
            var n = function () {
              return e.getMutSigTooltip(t)
            };
            return l.createElement(f.default, {
              text: "M",
              tooltip: n
            })
          }
        }, {
          key: "getBoldPercentage",
          value: function (e) {
            return l.createElement("b", null, (0, p.getPercentage)(e))
          }
        }, {
          key: "getCohortFrequencyTooltip",
          value: function (t) {
            return null === t ? l.createElement("span", null, "Querying server for data.") : "error" === t.status ? l.createElement("span", null, "Error retrieving data.") : null === t.data ? l.createElement("span", null, "Count data is not available for this gene.") : l.createElement("div", null, l.createElement("span", null, t.data.numberOfSamplesWithMutationInGene, " samples (", e.getBoldPercentage(t.data.numberOfSamplesWithMutationInGene / t.data.numberOfSamples), ") in this study have mutated ", t.hugoGeneSymbol, void 0 !== t.data.keyword && l.createElement("span", null, ", out of which ", t.data.numberOfSamplesWithKeyword, " (", e.getBoldPercentage(t.data.numberOfSamplesWithKeyword / t.data.numberOfSamples), ") have ", t.data.keyword, " mutations"), "."))
          }
        }, {
          key: "getMutSigTooltip",
          value: function (e) {
            return l.createElement("div", null, l.createElement("b", null, "MutSig"), l.createElement("br", null), l.createElement("span", null, " Q-value: ", (e || 0).toExponential(3)))
          }
        }]), e
      }();
    t.default = m
  },
  978: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      a = n(1),
      l = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(a),
      s = n(173),
      u = r(s);
    n(288);
    var c = n(856),
      f = r(c),
      p = function () {
        function e() {
          i(this, e)
        }
        return o(e, null, [{
          key: "renderFunction",
          value: function (t, n, r) {
            var i = e.getData(t, n, r);
            return l.createElement(u.default, {
              placement: "left",
              overlay: e.getTooltipContents(i),
              arrowContent: l.createElement("div", {
                className: "rc-tooltip-arrow-inner"
              })
            }, e.getTdContents(i))
          }
        }, {
          key: "getSortValue",
          value: function (t, n, r) {
            return e.getTdValue(e.getData(t, n, r))
          }
        }, {
          key: "filter",
          value: function (t, n, r, i) {
            var o = e.getData(t, n, r);
            return !(!o || !o.data) && (!!e.altToFilterString[o.data.alteration] && e.altToFilterString[o.data.alteration].indexOf(i.toLowerCase()) > -1)
          }
        }, {
          key: "getData",
          value: function (e, t, n) {
            if (!e || 0 === e.length || !n.isActive) return null;
            var r = e[0].sampleId,
              i = e[0].entrezGeneId,
              o = t[e[0].molecularProfileId];
            return o ? n.get({
              sampleId: r,
              entrezGeneId: i,
              studyId: o.studyId
            }) : null
          }
        }, {
          key: "getTdValue",
          value: function (e) {
            return null !== e && "complete" === e.status && null !== e.data ? e.data.alteration : null
          }
        }, {
          key: "getTdContents",
          value: function (e) {
            var t = null;
            if (null !== e && "complete" === e.status && null !== e.data) {
              var n = e.data.alteration;
              return 2 === n ? l.createElement("span", {
                style: {
                  color: "red",
                  textAlign: "center",
                  fontSize: "12px"
                }
              }, l.createElement("b", null, "Amp")) : 1 === n ? l.createElement("span", {
                style: {
                  color: "red",
                  textAlign: "center",
                  fontSize: "smaller"
                }
              }, l.createElement("b", null, "Gain")) : 0 === n ? l.createElement("span", {
                style: {
                  color: "black",
                  textAlign: "center",
                  fontSize: "xx-small"
                }
              }, "Diploid") : -1 === n ? l.createElement("span", {
                style: {
                  color: "blue",
                  textAlign: "center",
                  fontSize: "smaller"
                }
              }, l.createElement("b", null, "ShallowDel")) : l.createElement("span", {
                style: {
                  color: "blue",
                  textAlign: "center",
                  fontSize: "12px"
                }
              }, l.createElement("b", null, "DeepDel"))
            }
            if (null !== (t = e && "complete" === e.status && null === e.data ? c.TableCellStatus.NA : e && "error" === e.status ? c.TableCellStatus.ERROR : c.TableCellStatus.NA)) return l.createElement(f.default, {
              status: t,
              naAlt: "CNA data is not available for this gene."
            })
          }
        }, {
          key: "getTooltipContents",
          value: function (e) {
            var t = {
              "-2": "Deep deletion",
              "-1": "Shallow deletion",
              0: "Diploid / normal",
              1: "Low-level gain",
              2: "High-level amplification"
            };
            return e && "complete" === e.status && null !== e.data ? l.createElement("div", null, l.createElement("span", null, t[e.data.alteration])) : e && "complete" === e.status && null === e.data ? l.createElement("span", null, "CNA data is not available for this gene.") : e && "error" === e.status ? l.createElement("span", null, "Error retrieving data.") : l.createElement("span", null, "Querying server for data.")
          }
        }, {
          key: "isVisible",
          value: function (e) {
            return e && e.isActive
          }
        }]), e
      }();
    t.default = p, p.altToFilterString = {
      2: "amp",
      1: "gain",
      0: "diploid",
      "-1": "shallowdel",
      "-2": "deepdel"
    }
  },
  979: function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      o = n(1),
      a = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(o),
      l = function () {
        function e() {
          r(this, e)
        }
        return i(e, null, [{
          key: "getTextValue",
          value: function (t) {
            return e.getData(t) || ""
          }
        }, {
          key: "getDisplayValue",
          value: function (t) {
            return e.getTextValue(t)
          }
        }, {
          key: "getData",
          value: function (e) {
            return e.length > 0 ? e[0].gene.hugoGeneSymbol : null
          }
        }, {
          key: "getSortValue",
          value: function (t) {
            return e.getTextValue(t)
          }
        }, {
          key: "renderFunction",
          value: function (t) {
            var n = e.getDisplayValue(t);
            return a.createElement("span", null, n)
          }
        }]), e
      }();
    t.default = l
  },
  980: function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      o = function () {
        function e() {
          r(this, e)
        }
        return i(e, null, [{
          key: "getSortValue",
          value: function (t) {
            var n = e.getData(t);
            return n ? e.extractSortValue(n) : null
          }
        }, {
          key: "extractSortValue",
          value: function (e) {
            var t = /[0-9]+/g,
              n = e.match(t),
              r = -1;
            return n ? r = parseInt(n[0]) : e.toLowerCase().indexOf("x") > -1 ? r = 23 : e.toLowerCase().indexOf("y") > -1 && (r = 24), r
          }
        }, {
          key: "getData",
          value: function (e) {
            return e.length > 0 ? e[0].gene.chromosome : null
          }
        }]), e
      }();
    t.default = o
  },
  981: function (e, t) {
    e.exports = {
      portalWidth: "mutationStatus-module__portalWidth__2s2Qx",
      germline: "mutationStatus-module__germline__3PooJ",
      somatic: "mutationStatus-module__somatic__1ieJL",
      unknown: "mutationStatus-module__unknown__mbYor"
    }
  },
  982: function (e, t) {
    e.exports = {
      portalWidth: "proteinChange-module__portalWidth__1U76x",
      proteinChange: "proteinChange-module__proteinChange__2xJ_V",
      germline: "proteinChange-module__germline__1c0ww"
    }
  },
  983: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      a = n(1),
      l = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(a),
      s = n(173),
      u = r(s),
      c = n(984),
      f = r(c),
      p = n(290),
      d = r(p),
      h = function () {
        function e() {
          i(this, e)
        }
        return o(e, null, [{
          key: "getDisplayValue",
          value: function (t) {
            var n = e.getMapEntry(t);
            return n && n.label ? n.label : e.getTextValue(t)
          }
        }, {
          key: "getTextValue",
          value: function (t) {
            var n = "",
              r = e.getData(t);
            return r && (n = r.toString()), n
          }
        }, {
          key: "getClassName",
          value: function (t) {
            var n = e.getMapEntry(t);
            return n && n.className ? n.className : e.MAIN_MUTATION_TYPE_MAP.other.className
          }
        }, {
          key: "getMapEntry",
          value: function (t) {
            var n = e.getData(t);
            return n ? e.MAIN_MUTATION_TYPE_MAP[(0, d.default)(n)] : void 0
          }
        }, {
          key: "getData",
          value: function (e) {
            return e.length > 0 ? e[0].mutationType : null
          }
        }, {
          key: "renderFunction",
          value: function (t) {
            var n = e.getDisplayValue(t),
              r = e.getClassName(t),
              i = e.getTextValue(t),
              o = l.createElement("span", {
                className: f.default[r]
              }, n);
            if (i.toLowerCase() !== n.toLowerCase()) {
              var a = l.createElement("div", {
                className: "rc-tooltip-arrow-inner"
              });
              o = l.createElement(u.default, {
                overlay: l.createElement("span", null, i),
                placement: "left",
                arrowContent: a
              }, o)
            }
            return o
          }
        }, {
          key: "MAIN_MUTATION_TYPE_MAP",
          get: function () {
            return {
              missense: {
                label: "Missense",
                longName: "Missense",
                className: "missense-mutation",
                mainType: "missense",
                priority: 1
              },
              inframe: {
                label: "IF",
                longName: "In-frame",
                className: "inframe-mutation",
                mainType: "inframe",
                priority: 2
              },
              truncating: {
                label: "Truncating",
                longName: "Truncating",
                className: "trunc-mutation",
                mainType: "truncating",
                priority: 4
              },
              nonsense: {
                label: "Nonsense",
                longName: "Nonsense",
                className: "trunc-mutation",
                mainType: "truncating",
                priority: 6
              },
              nonstop: {
                label: "Nonstop",
                longName: "Nonstop",
                className: "trunc-mutation",
                mainType: "truncating",
                priority: 7
              },
              nonstart: {
                label: "Nonstart",
                longName: "Nonstart",
                className: "trunc-mutation",
                mainType: "truncating",
                priority: 8
              },
              frameshift: {
                label: "FS",
                longName: "Frame Shift",
                className: "trunc-mutation",
                mainType: "truncating",
                priority: 4
              },
              frame_shift_del: {
                label: "FS del",
                longName: "Frame Shift Deletion",
                className: "trunc-mutation",
                mainType: "truncating",
                priority: 4
              },
              frame_shift_ins: {
                label: "FS ins",
                longName: "Frame Shift Insertion",
                className: "trunc-mutation",
                mainType: "truncating",
                priority: 5
              },
              in_frame_ins: {
                label: "IF ins",
                longName: "In-frame Insertion",
                className: "inframe-mutation",
                mainType: "inframe",
                priority: 3
              },
              in_frame_del: {
                label: "IF del",
                longName: "In-frame Deletion",
                className: "inframe-mutation",
                mainType: "inframe",
                priority: 2
              },
              splice_site: {
                label: "Splice",
                longName: "Splice site",
                className: "trunc-mutation",
                mainType: "truncating",
                priority: 9
              },
              fusion: {
                label: "Fusion",
                longName: "Fusion",
                className: "fusion",
                mainType: "other",
                priority: 10
              },
              silent: {
                label: "Silent",
                longName: "Silent",
                className: "other-mutation",
                mainType: "other",
                priority: 11
              },
              other: {
                label: "Other",
                longName: "Other",
                className: "other-mutation",
                mainType: "other",
                priority: 11
              }
            }
          }
        }]), e
      }();
    t.default = h
  },
  984: function (e, t) {
    e.exports = {
      portalWidth: "mutationType-module__portalWidth__2MF0M",
      "missense-mutation": "mutationType-module__missense-mutation__2vEO9",
      "trunc-mutation": "mutationType-module__trunc-mutation__1fMqq",
      "inframe-mutation": "mutationType-module__inframe-mutation__3PeGf",
      "other-mutation": "mutationType-module__other-mutation__3NGsA",
      "default-mutation": "mutationType-module__default-mutation__27MBJ"
    }
  },
  985: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function l(e) {
      e.querySelector(".rc-tooltip-arrow").style.left = "10px"
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
    t.placeArrow = l;
    var u = n(1),
      c = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(u),
      f = n(177),
      p = n(174),
      d = r(p),
      h = n(173),
      m = r(h);
    n(288);
    var y = n(856),
      v = r(y),
      g = n(986),
      b = r(g),
      w = n(989),
      E = r(w),
      _ = n(990),
      C = r(_),
      T = n(897),
      A = r(T),
      k = n(898),
      O = r(k),
      I = n(896),
      x = r(I),
      S = n(857),
      M = r(S),
      P = function (e) {
        function t(e) {
          i(this, t);
          var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return n.state = {
            active: n.props.active
          }, n
        }
        return a(t, e), s(t, [{
          key: "legend",
          value: function () {
            var e = this;
            return c.createElement("div", null, c.createElement("table", {
              className: "table table-striped table-border-top"
            }, c.createElement("thead", null, c.createElement("tr", null, c.createElement("th", null, "Legend"), c.createElement("th", null, c.createElement("span", {
              style: {
                display: "inline-block",
                width: 22
              },
              title: "SIFT",
              onMouseOver: function () {
                return e.setState({
                  active: "sift"
                })
              }
            }, c.createElement("img", {
              height: 14,
              width: 14,
              src: n(899),
              alt: "SIFT"
            }))), c.createElement("th", null, c.createElement("span", {
              style: {
                display: "inline-block",
                width: 22
              },
              title: "PolyPhen-2",
              onMouseOver: function () {
                return e.setState({
                  active: "polyPhen2"
                })
              }
            }, c.createElement("img", {
              height: 14,
              width: 14,
              src: n(900),
              alt: "PolyPhen-2"
            }))))), c.createElement("tbody", null, c.createElement("tr", null, c.createElement("td", null, c.createElement("span", {
              className: (0, d.default)(M.default["annotation-item-text"], x.default["ma-high"])
            }, c.createElement("i", {
              className: "fa fa-circle",
              "aria-hidden": "true"
            }))), c.createElement("td", {
              className: A.default["sift-deleterious"]
            }, "deleterious"), c.createElement("td", {
              className: O.default["polyPhen2-probably_damaging"]
            }, "probably_damaging")), c.createElement("tr", null, c.createElement("td", null, c.createElement("span", {
              className: (0, d.default)(M.default["annotation-item-text"], x.default["ma-low"])
            }, c.createElement("i", {
              className: "fa fa-circle",
              "aria-hidden": "true"
            }))), c.createElement("td", {
              className: A.default["sift-deleterious_low_confidence"]
            }, "deleterious_low_confidence"), c.createElement("td", {
              className: O.default["polyPhen2-possibly_damaging"]
            }, "possibly_damaging")), c.createElement("tr", null, c.createElement("td", null, c.createElement("span", {
              className: (0, d.default)(M.default["annotation-item-text"], x.default["ma-neutral"])
            }, c.createElement("i", {
              className: "fa fa-circle",
              "aria-hidden": "true"
            }))), c.createElement("td", {
              className: A.default["sift-tolerated_low_confidence"]
            }, "tolerated_low_confidence"), c.createElement("td", {
              className: O.default["polyPhen2-benign"]
            }, "benign")), c.createElement("tr", null, c.createElement("td", null), c.createElement("td", {
              className: A.default["sift-tolerated"]
            }, "tolerated"), c.createElement("td", null, "-")))))
          }
        }, {
          key: "render",
          value: function () {
            return c.createElement("div", null, "mutationAssessor" === this.state.active && t.mutationAssessorText(), "sift" === this.state.active && t.siftText(), "polyPhen2" === this.state.active && t.polyPhen2Text(), this.legend())
          }
        }], [{
          key: "mutationAssessorText",
          value: function () {
            return c.createElement("div", {
              style: {
                width: 450,
                height: 100
              }
            }, c.createElement("a", {
              href: b.default.MUTATION_ASSESSOR_URL,
              target: "_blank"
            }, "Mutation Assessor"), " predicts the functional impact of amino-acid substitutions in proteins, such as mutations discovered in cancer or missense polymorphisms. The functional impact is assessed based on evolutionary conservation of the affected amino acid in protein homologs. The method has been validated on a large set (60k) of disease associated (OMIM) and polymorphic variants.")
          }
        }, {
          key: "siftText",
          value: function () {
            return c.createElement("div", {
              style: {
                width: 450,
                height: 100
              }
            }, c.createElement("a", {
              href: E.default.SIFT_URL,
              target: "_blank"
            }, "SIFT"), " predicts whether an amino acid substitution affects protein function based on sequence homology and the physical properties of amino acids. SIFT can be applied to naturally occurring nonsynonymous polymorphisms and laboratory-induced missense mutations.")
          }
        }, {
          key: "polyPhen2Text",
          value: function () {
            return c.createElement("div", {
              style: {
                width: 450,
                height: 100
              }
            }, c.createElement("a", {
              href: C.default.POLYPHEN2_URL,
              target: "_blank"
            }, "PolyPhen-2"), " (Polymorphism Phenotyping v2) is a tool which predicts possible impact of an amino acid substitution on the structure and function of a human protein using straightforward physical and comparative considerations.")
          }
        }]), t
      }(c.Component),
      D = function () {
        function e() {
          i(this, e)
        }
        return s(e, null, [{
          key: "headerRender",
          value: function (e) {
            var t = c.createElement("div", {
              className: "rc-tooltip-arrow-inner"
            });
            return c.createElement("div", null, e, c.createElement("br", null), c.createElement("div", {
              style: {
                height: 14
              }
            }, c.createElement(m.default, {
              overlay: c.createElement(P, {
                active: "sift"
              }),
              placement: "topLeft",
              trigger: ["hover", "focus"],
              arrowContent: t,
              destroyTooltipOnHide: !0,
              onPopupAlign: l
            }, c.createElement("span", {
              style: {
                display: "inline-block",
                width: 22
              }
            }, c.createElement("img", {
              height: 14,
              width: 14,
              src: n(899),
              alt: "SIFT"
            }))), c.createElement(m.default, {
              overlay: c.createElement(P, {
                active: "polyPhen2"
              }),
              placement: "topLeft",
              trigger: ["hover", "focus"],
              arrowContent: t,
              destroyTooltipOnHide: !0,
              onPopupAlign: l
            }, c.createElement("span", {
              style: {
                display: "inline-block",
                width: 22
              }
            }, c.createElement("img", {
              height: 14,
              width: 14,
              src: n(900),
              alt: "PolyPhen-2"
            })))))
          }
        }, {
          key: "getData",
          value: function (e) {
            return null === e || "error" === e.status || null === e.data ? null : {
              mutationAssessor: e.data.mutation_assessor && e.data.mutation_assessor.annotation,
              siftScore: e.data.transcript_consequences[0].sift_score,
              siftPrediction: e.data.transcript_consequences[0].sift_prediction,
              polyPhenScore: e.data.transcript_consequences[0].polyphen_score,
              polyPhenPrediction: e.data.transcript_consequences[0].polyphen_prediction
            }
          }
        }, {
          key: "renderFunction",
          value: function (t, n) {
            var r = e.getGenomeNexusData(t, n);
            return c.createElement("div", null, e.makeFuncionalImpactViz(r))
          }
        }, {
          key: "download",
          value: function (t, n) {
            var r = e.getGenomeNexusData(t, n),
              i = e.getData(r);
            return i ? ["MutationAssessor: " + b.default.download(i.mutationAssessor), "SIFT: " + E.default.download(i.siftScore, i.siftPrediction), "Polyphen-2: " + C.default.download(i.polyPhenScore, i.polyPhenPrediction)].join(";") : ""
          }
        }, {
          key: "getGenomeNexusData",
          value: function (e, t) {
            return 0 === e.length ? null : t.get(e[0])
          }
        }, {
          key: "makeFuncionalImpactViz",
          value: function (t) {
            var n = null;
            if (null === t) n = y.TableCellStatus.LOADING;
            else if ("error" === t.status) n = y.TableCellStatus.ERROR;
            else {
              if (null !== t.data) {
                var r = e.getData(t);
                return r && c.createElement("div", null, c.createElement(E.default, {
                  siftScore: r.siftScore,
                  siftPrediction: r.siftPrediction
                }), c.createElement(C.default, {
                  polyPhenScore: r.polyPhenScore,
                  polyPhenPrediction: r.polyPhenPrediction
                }))
              }
              n = y.TableCellStatus.NA
            }
            if (null !== n) return n === y.TableCellStatus.LOADING ? c.createElement(f.Circle, {
              size: 18,
              scaleEnd: .5,
              scaleStart: .2,
              color: "#aaa",
              className: "pull-left"
            }) : c.createElement(v.default, {
              status: n
            })
          }
        }]), e
      }();
    t.default = D
  },
  986: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function l(e) {
      e.querySelector(".rc-tooltip-arrow").style.display = "none"
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
    t.hideArrow = l;
    var u = n(1),
      c = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(u),
      f = n(173),
      p = r(f),
      d = n(857),
      h = r(d),
      m = n(174),
      y = r(m),
      v = n(987),
      g = r(v),
      b = n(896),
      w = r(b),
      E = function (e) {
        function t(e) {
          i(this, t);
          var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return n.tooltipContent = n.tooltipContent.bind(n), n
        }
        return a(t, e), s(t, [{
          key: "render",
          value: function () {
            var e = c.createElement("span", {
              className: "" + h.default["annotation-item-text"]
            });
            if (this.props.mutationAssessor && null !== this.props.mutationAssessor.functionalImpact) {
              var t = this.props.mutationAssessor;
              e = c.createElement("span", {
                className: (0, y.default)(h.default["annotation-item-text"], w.default["ma-" + t.functionalImpact])
              }, c.createElement("i", {
                className: "fa fa-circle",
                "aria-hidden": "true"
              }));
              var n = c.createElement("div", {
                className: "rc-tooltip-arrow-inner"
              });
              e = c.createElement(p.default, {
                overlay: this.tooltipContent,
                placement: "right",
                trigger: ["hover", "focus"],
                arrowContent: n,
                onPopupAlign: l,
                destroyTooltipOnHide: !1
              }, e)
            }
            return e
          }
        }, {
          key: "tooltipContent",
          value: function () {
            var e = this.props.mutationAssessor,
              r = t.maLink("http://mutationassessor.org/r3/?cm=var&p=" + e.uniprotId + "&var=" + e.variant),
              i = t.maLink(e.msaLink),
              o = t.maLink(e.pdbLink),
              a = e.functionalImpact ? c.createElement("div", null, c.createElement("table", {
                className: g.default["ma-tooltip-table"]
              }, c.createElement("tr", null, c.createElement("td", null, "Source"), c.createElement("td", null, c.createElement("a", {
                href: "http://mutationassessor.org/r3"
              }, "MutationAssessor"))), c.createElement("tr", null, c.createElement("td", null, "Impact"), c.createElement("td", null, c.createElement("span", {
                className: w.default["ma-" + e.functionalImpact]
              }, e.functionalImpact))), (e.functionalImpactScore || 0 === e.functionalImpactScore) && c.createElement("tr", null, c.createElement("td", null, "Score"), c.createElement("td", null, c.createElement("b", null, e.functionalImpactScore.toFixed(2)))))) : null,
              l = r ? c.createElement("div", {
                className: g.default["mutation-assessor-link"]
              }, c.createElement("a", {
                href: r,
                target: "_blank"
              }, c.createElement("img", {
                height: "15",
                width: "19",
                src: n(988),
                className: g.default["mutation-assessor-main-img"],
                alt: "Mutation Assessor"
              }), "Go to Mutation Assessor")) : null,
              s = i ? c.createElement("div", {
                className: g.default["mutation-assessor-link"]
              }, c.createElement("a", {
                href: i,
                target: "_blank"
              }, c.createElement("span", {
                className: g.default["ma-icon"] + " " + g.default["ma-msa-icon"]
              }, "msa"), "Multiple Sequence Alignment")) : null,
              u = o ? c.createElement("div", {
                className: g.default["mutation-assessor-link"]
              }, c.createElement("a", {
                href: o,
                target: "_blank"
              }, c.createElement("span", {
                className: g.default["ma-icon"] + " " + g.default["ma-3d-icon"]
              }, "3D"), "Mutation Assessor 3D View")) : null;
            return c.createElement("span", null, a, s, u, l)
          }
        }], [{
          key: "download",
          value: function (e) {
            return e ? "impact: " + e.functionalImpact + ", score: " + e.functionalImpactScore : "Error"
          }
        }, {
          key: "maLink",
          value: function (e) {
            var t = null;
            return e && (t = e.replace("getma.org", "mutationassessor.org/r3"), 0 !== t.indexOf("http://") && (t = "http://" + t)), t
          }
        }]), t
      }(c.Component);
    t.default = E, E.MUTATION_ASSESSOR_URL = "http://mutationassessor.org/r3/"
  },
  987: function (e, t) {
    e.exports = {
      portalWidth: "mutationAssessorTooltip-module__portalWidth__15gd3",
      "ma-link": "mutationAssessorTooltip-module__ma-link__3QpML",
      "mutation-assessor-link": "mutationAssessorTooltip-module__mutation-assessor-link__3XLsB",
      "ma-icon": "mutationAssessorTooltip-module__ma-icon__GqjUA",
      "ma-msa-icon": "mutationAssessorTooltip-module__ma-msa-icon__2yT6h",
      "ma-3d-icon": "mutationAssessorTooltip-module__ma-3d-icon__166M3",
      "mutation-assessor-main-img": "mutationAssessorTooltip-module__mutation-assessor-main-img__2QlLP",
      "ma-tooltip-table": "mutationAssessorTooltip-module__ma-tooltip-table__3tyG8"
    }
  },
  988: function (e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABJCAIAAADdSs1eAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAdMSURBVHhe7VpdTFdlGA/jS5AARUTDkC/RIlfQ5mbkFisuaH2MNusit6Zrulbroq1uWhdetNVNX5vTNb2xC7rQlW2skcMiZrilFTKQDwEVFJAiFRAFpR97Dw8P53/+5z3nPe/5/4/bOTsXcM778by/9/k9v+d9zj9hbm7ugfBiCCwL0TAhECJidokQkRARWZgIfcSMUEIctab90uS+oxfJoj3PrX2qOCMzLTHaLp7pu3ni3PiZvgnRYOf2NS9WrrJsPHBt+oNv++jVhy+vryzKkDmH8T6ePsLhgDkHT1xt7rweze6xGzOf/nCZ4ECzI80j16dmLdu39tzgz4GjQzjQLJ6IRFqJRU7dvmtpfdfVqcjnM7MWyRRGOHZ6jDcGjvAah6AEApHnt2STuX0j1qZ/2TAk2tRtzbFfW+eQgV1l0QpqeWH41v2ESF5WMoKCsPj3pQ4vHtIOY5Hl+en2azvbbwSaqk2ZBB8o6RARr5F19L/pr453tg84Iur3H1dzs3Z83iH+BRyPP5JOsfCbPRtN8bX+1Kggwnu1D2cuT6QAtH93ac5DSXxMRJa3DnaLJ1+8WTwxffej+gHx72dvFG1YnSrFxStrDjR0OYTD3hRua+9SD+dxoWxtmv041BfetC47JX9lilvieEJkfOKOFjiE0VBf8YdJGiguINyYPCISHU4ZvE1LeZATJ1rY5uN4QqSlfeTO7D0MV74hG4yQ3vbbW5y3XDSANFwZv02NaZEVhYuR0nIo9Pq5zeBvYa5BEN5r8N/FYaMZ4wmRprZhMW71ljwpP6UNOHH6Rw3F4YssWYAs2lDUS1BGNOPEIXBtjFFHpH/4Jm4MnZy4bOum1dIFO2lAxCGt7Rw0pBTOb5POisFbzhsJHlSGpuPEQXiWEkcdEXIQwJGeGjX1dgIEtSHi4IlQXFJNJ5ShjBZ6hByX7vWrFuOrlDiKiCB8IIiIlTyrgzJiKBCH0qpzlya7WZ7Knd8SZaIM3kKe3z7UQzd5HF5JiaOIyJ+9/0BoMEH2iuSKEuvjlivvoMbk8Mjof+0wWICEBc5vPyBRxr4ZiBPtNCQ6KiLS0jEq+lc/YUim2voje5FG4BUJB/I3+/FBMaIMIg4QNN38oGDKd0wjqyAyOT17+vy1BcpoRgQawc8jxCZ7RPix5fVtuagSmO4XKlbSCPbEUUHkt4U0pCw/Mz9HkkQq+A5XCnQnAbIZigIwnY9MjTnQcD0b4qggcnIhDdEYU/kCOHHwfHO+BHR+0i9bZ6R5kfBxoG2I4xqRwbGprsH5gIc05Jly48Cq4AjoQuxIS15iBvaTaM9zLTFLclICTZeUOP/3xC2jpILGNpLEz0RXxudlwfJyffY90nThaMt8KRBwvF/3mBoWQe7l2kea/jIKDVWP5gZ5Ycq2uUPkLEtDntSahigvQHtHd4hQGlJVvgZxRLs1QRjQxap45q7lsBuE9Ufa4AIRqoYU5mXgDuZ6vFvlAhG91RDvpvs0glNEUGEWBUSEDwQRn6wJwrBOEWn62xBdSAzOu0Ew3ScbXCMSwJgK/31lXxPuHZ/8ImoUXi5HiIAvmBXTwDsCmIbkZqWi9A3zuBoqg+IIEV5ADGYaQgk0ZUw+IgLgWTVEQ81d2Vabjjhkia3CKRRnUS9TyH0EcKBEhDlQCkFBxMtk/vVF6Zu+B5xsc/qJ19IeOSKsGqK5XKYXICrW0FlUbXwJIgjdON2JobWXVNUsjtYLBXCRFnCbFaaQIEJ403wKc8SsC+0Z+bXC1BJEeOgW0eS+uEgKFKyVIELpKbjzzv5WLzMpGOe8CyQG5oniHq4sD1m1pKoIvzjU2MNjFejz7kubg5PIw8L65v4fWy8TfLBwb20Z0jbngPKWjuqscJDDjT2k85C6um0Fr1YVqE2psRcM+/p4J2XuMGx3TalHBXCECNaAPO275n5ySzxBbrK3dmO8CiVAAViQDgop3Fld7N15nSIiNhY/jzjQ0C2+TogLnvLa9sIYp/Y//TGETwIU6YECiKzr87M7RAQK8BT4i/h1ES7ksrtqSnUZZM8pMBeu4euWqCACoy2dFhzW9UOSSFwEbRFBaSdAWNBW+8FCERFhMT4AI+LqDWyWPoJyBH4USaEdJAVVfQrtnhCB9Zby7EX8TIhYjg+S+vEFXkztFRExik97GDMf5NugBxGMGCnPXnjun7jaR25tPkLTWGoB0jlXEdekZcg+QcPYaJl+REiej526qJAvQFYPN/b6Kq6x9hGaL9LtUfhDRIyWU1rmxLtqSrSLa9wQcSXPSMYhrqLcj8tXcY0zIpbyjG1H0i3kE66EfNx0ttYo3tL1RzbQpjX2cyM0IPvmKVbd0wVZ6cn8eKLl5KoAgalLjBAheeZpODcFJ1dfDwHOkYodIsKmSHmOsbhKoYk1IsIgeAoKX5DnuBQT7EGJDyKCRDOz91xlbtLt1dIgbohosd6PQeTf9PyYNchjhoiYdydEJERExtjQR0IfCX1EhkDoIzKE/gco765KHggW0QAAAABJRU5ErkJggg=="
  },
  989: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function l(e) {
      e.querySelector(".rc-tooltip-arrow").style.display = "none"
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
    t.hideArrow = l;
    var u = n(1),
      c = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(u),
      f = n(173),
      p = r(f),
      d = n(857),
      h = r(d),
      m = n(174),
      y = r(m),
      v = n(897),
      g = r(v),
      b = function (e) {
        function t(e) {
          i(this, t);
          var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return n.tooltipContent = n.tooltipContent.bind(n), n
        }
        return a(t, e), s(t, [{
          key: "render",
          value: function () {
            var e = c.createElement("span", {
              className: "" + h.default["annotation-item-text"]
            });
            if (this.props.siftPrediction && this.props.siftPrediction.length > 0) {
              e = c.createElement("span", {
                className: (0, y.default)(h.default["annotation-item-text"], g.default["sift-" + this.props.siftPrediction])
              }, c.createElement("i", {
                className: "fa fa-circle",
                "aria-hidden": "true"
              }));
              var t = c.createElement("div", {
                className: "rc-tooltip-arrow-inner"
              });
              e = c.createElement(p.default, {
                overlay: this.tooltipContent,
                placement: "right",
                trigger: ["hover", "focus"],
                arrowContent: t,
                onPopupAlign: l,
                destroyTooltipOnHide: !1
              }, e)
            }
            return e
          }
        }, {
          key: "tooltipContent",
          value: function () {
            var e = this.props.siftPrediction ? c.createElement("div", null, c.createElement("table", {
              className: g.default["sift-tooltip-table"]
            }, c.createElement("tr", null, c.createElement("td", null, "Source"), c.createElement("td", null, c.createElement("a", {
              href: "http://sift.bii.a-star.edu.sg/"
            }, "SIFT"))), c.createElement("tr", null, c.createElement("td", null, "Impact"), c.createElement("td", null, c.createElement("span", {
              className: g.default["sift-" + this.props.siftPrediction]
            }, this.props.siftPrediction))), (this.props.siftScore || 0 === this.props.siftScore) && c.createElement("tr", null, c.createElement("td", null, "Score"), c.createElement("td", null, c.createElement("b", null, this.props.siftScore.toFixed(2)))))) : null;
            return c.createElement("span", null, e)
          }
        }], [{
          key: "download",
          value: function (e, t) {
            return "impact: " + t + ", score: " + e
          }
        }]), t
      }(c.Component);
    t.default = b, b.SIFT_URL = "http://sift.bii.a-star.edu.sg/"
  },
  990: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function l(e) {
      e.querySelector(".rc-tooltip-arrow").style.display = "none"
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
    t.hideArrow = l;
    var u = n(1),
      c = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(u),
      f = n(173),
      p = r(f),
      d = n(857),
      h = r(d),
      m = n(174),
      y = r(m),
      v = n(898),
      g = r(v),
      b = function (e) {
        function t(e) {
          i(this, t);
          var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return n.tooltipContent = n.tooltipContent.bind(n), n
        }
        return a(t, e), s(t, [{
          key: "render",
          value: function () {
            var e = c.createElement("span", {
              className: "" + h.default["annotation-item-text"]
            });
            if (this.props.polyPhenPrediction && this.props.polyPhenPrediction.length > 0) {
              e = c.createElement("span", {
                className: (0, y.default)(h.default["annotation-item-text"], g.default["polyPhen2-" + this.props.polyPhenPrediction])
              }, c.createElement("i", {
                className: "fa fa-circle",
                "aria-hidden": "true"
              }));
              var t = c.createElement("div", {
                className: "rc-tooltip-arrow-inner"
              });
              e = c.createElement(p.default, {
                overlay: this.tooltipContent,
                placement: "right",
                trigger: ["hover", "focus"],
                arrowContent: t,
                onPopupAlign: l,
                destroyTooltipOnHide: !1
              }, e)
            }
            return e
          }
        }, {
          key: "tooltipContent",
          value: function () {
            var e = this.props.polyPhenPrediction ? c.createElement("div", null, c.createElement("table", {
              className: g.default["polyPhen2-tooltip-table"]
            }, c.createElement("tr", null, c.createElement("td", null, "Source"), c.createElement("td", null, c.createElement("a", {
              href: "http://genetics.bwh.harvard.edu/pph2/"
            }, "PolyPhen-2"))), c.createElement("tr", null, c.createElement("td", null, "Impact"), c.createElement("td", null, c.createElement("span", {
              className: g.default["polyPhen2-" + this.props.polyPhenPrediction]
            }, this.props.polyPhenPrediction))), (this.props.polyPhenScore || 0 === this.props.polyPhenScore) && c.createElement("tr", null, c.createElement("td", null, "Score"), c.createElement("td", null, c.createElement("b", null, this.props.polyPhenScore.toFixed(2)))))) : null;
            return c.createElement("span", null, e)
          }
        }], [{
          key: "download",
          value: function (e, t) {
            return "impact: " + t + ", score: " + e
          }
        }]), t
      }(c.Component);
    t.default = b, b.POLYPHEN2_URL = "http://genetics.bwh.harvard.edu/pph2/"
  },
  991: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t.default = e, t
    }

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e) {
      e.querySelector(".rc-tooltip-arrow").style.left = "10px"
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }();
    t.placeArrow = a;
    var s = n(1),
      u = i(s),
      c = n(173),
      f = r(c),
      p = n(3),
      d = i(p),
      h = n(992),
      m = r(h),
      y = n(993),
      v = r(y),
      g = n(872),
      b = r(g),
      w = function () {
        function e() {
          o(this, e)
        }
        return l(e, null, [{
          key: "getData",
          value: function (t, n) {
            var r = null;
            if (t && n) {
              var i = t[0],
                o = n[i.keyword];
              if (o) {
                var a = e.extractPosition(i.proteinChange);
                r = o.filter(function (t) {
                  var n = e.extractPosition(t.proteinChange);
                  return a && n && a === n
                })
              }
            }
            return r
          }
        }, {
          key: "extractPosition",
          value: function (e) {
            var t = /[0-9]+/g,
              n = e.match(t);
            return n ? n[0] : null
          }
        }, {
          key: "getSortValue",
          value: function (t, n) {
            var r = e.getData(t, n),
              i = null;
            return r && (i = r.length > 0 ? d.reduce(d.map(r, "count"), function (e, t) {
              return e + t
            }, 0) : 0), 0 === i && (i = null), i
          }
        }, {
          key: "getDownloadValue",
          value: function (t, n) {
            var r = e.getSortValue(t, n);
            return r ? "" + r : ""
          }
        }, {
          key: "renderFunction",
          value: function (t, n) {
            var r = e.getData(t, n),
              i = -1,
              o = "",
              l = null,
              s = void 0;
            return r && r.length > 0 && (i = d.reduce(d.map(r, "count"), function (e, t) {
              return e + t
            }, 0), l = function () {
              return u.createElement("span", {
                className: v.default["cosmic-table"]
              }, u.createElement("b", null, i), " occurrences of ", u.createElement("b", null, r[0].keyword), " mutations in COSMIC", u.createElement(m.default, {
                data: r
              }))
            }, o = i.toString()), s = u.createElement("div", {
              className: b.default["integer-data"]
            }, o), l && (s = u.createElement(f.default, {
              overlay: l,
              placement: "topLeft",
              onPopupAlign: a,
              trigger: ["hover", "focus"],
              destroyTooltipOnHide: !0
            }, s)), s
          }
        }]), e
      }();
    t.default = w
  },
  992: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var l = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      s = n(1),
      u = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(s),
      c = n(894),
      f = r(c),
      p = n(178),
      d = r(p),
      h = function (e) {
        function t() {
          return i(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return a(t, e), t
      }(d.default),
      m = function (e) {
        function t(e) {
          i(this, t);
          var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return n.state = {}, n
        }
        return a(t, e), l(t, [{
          key: "render",
          value: function () {
            var e = this.props,
              n = e.data,
              r = e.columns,
              i = e.initialSortColumn,
              o = e.initialSortDirection,
              a = e.initialItemsPerPage,
              l = n.length > (this.props.initialItemsPerPage || t.defaultProps.initialItemsPerPage);
            return u.createElement("div", {
              className: "cbioportal-frontend"
            }, u.createElement(h, {
              data: n,
              columns: r || t.defaultProps.columns,
              initialSortColumn: i,
              initialSortDirection: o,
              initialItemsPerPage: a,
              showCopyDownload: !1,
              showColumnVisibility: !1,
              showFilter: !1,
              showPagination: l,
              showPaginationAtTop: !0,
              paginationProps: {
                showMoreButton: !1
              }
            }))
          }
        }]), t
      }(u.Component);
    t.default = m, m.defaultProps = {
      data: [],
      columns: [{
        name: "COSMIC ID",
        order: 1,
        render: function (e) {
          return u.createElement("span", null, u.createElement("a", {
            href: "http://cancer.sanger.ac.uk/cosmic/mutation/overview?id=" + e.cosmicMutationId,
            target: "_blank"
          }, e.cosmicMutationId))
        },
        sortBy: function (e) {
          return e.cosmicMutationId
        }
      }, {
        name: "Protein Change",
        order: 2,
        render: function (e) {
          return u.createElement("span", null, e.proteinChange)
        },
        sortBy: function (e) {
          return f.default.extractSortValue(e.proteinChange)
        }
      }, {
        name: "Occurrence",
        order: 3,
        render: function (e) {
          return u.createElement("span", null, e.count)
        },
        sortBy: function (e) {
          return e.count
        }
      }],
      initialSortColumn: "Occurrence",
      initialSortDirection: "desc",
      initialItemsPerPage: 10
    }
  },
  993: function (e, t) {
    e.exports = {
      portalWidth: "cosmic-module__portalWidth__3eF_t",
      "cosmic-table": "cosmic-module__cosmic-table__2ms15"
    }
  },
  994: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      a = n(1),
      l = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(a),
      s = n(927),
      u = r(s),
      c = n(872),
      f = r(c),
      p = function () {
        function e() {
          i(this, e)
        }
        return o(e, null, [{
          key: "makeRenderFunction",
          value: function (e) {
            return (0, u.default)(function (t) {
              var n = e.props.mutationCountCache;
              return n ? n.get({
                sampleId: t[0].sampleId,
                molecularProfileId: t[0].molecularProfileId
              }) : {
                status: "error",
                data: null
              }
            }, function (e) {
              return l.createElement("div", {
                className: f.default["integer-data"]
              }, e.mutationCount)
            }, "Mutation count not available for this sample.")
          }
        }, {
          key: "sortBy",
          value: function (e, t) {
            var n = void 0;
            if (t) {
              var r = t.get({
                sampleId: e[0].sampleId,
                molecularProfileId: e[0].molecularProfileId
              });
              n = r && r.data ? r.data.mutationCount : null
            } else n = null;
            return n
          }
        }, {
          key: "download",
          value: function (t, n) {
            var r = e.sortBy(t, n);
            return r ? "" + r : ""
          }
        }]), e
      }();
    t.default = p
  },
  995: function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      a = n(1),
      l = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(a),
      s = n(996),
      u = r(s),
      c = n(173),
      f = r(c),
      p = function () {
        function e() {
          i(this, e)
        }
        return o(e, null, [{
          key: "getData",
          value: function (e) {
            var t = null;
            return e.length > 0 && (t = e[0].validationStatus), t
          }
        }, {
          key: "sortValue",
          value: function (t) {
            return e.getData(t)
          }
        }, {
          key: "download",
          value: function (t) {
            return e.getData(t) || ""
          }
        }, {
          key: "renderFunction",
          value: function (t) {
            var n = e.getData(t),
              r = void 0,
              i = !1;
            if (n) {
              var o = e.VALIDATION_STATUS_FORMAT[n.toLowerCase()];
              o ? (r = l.createElement("span", {
                className: u.default[o.className]
              }, o.text), i = !0) : r = l.createElement("span", {
                className: u.default.other
              }, n)
            } else r = l.createElement("span", null);
            return i && (r = l.createElement(f.default, {
              overlay: l.createElement("span", null, n),
              placement: "right"
            }, r)), r
          }
        }, {
          key: "VALIDATION_STATUS_FORMAT",
          get: function () {
            var e = {
                text: "U",
                className: "unknown",
                tooltip: "Unknown"
              },
              t = {
                text: "V",
                className: "valid",
                tooltip: "Valid"
              };
            return {
              valid: t,
              validated: t,
              wildtype: {
                text: "W",
                className: "wildtype",
                tooltip: "Wildtype"
              },
              unknown: e,
              not_tested: e,
              "not tested": e,
              none: e,
              na: e,
              "n/a": e
            }
          }
        }]), e
      }();
    t.default = p
  },
  996: function (e, t) {
    e.exports = {
      portalWidth: "validationStatus-module__portalWidth__yrVHU",
      unknown: "validationStatus-module__unknown__1XsWI",
      valid: "validationStatus-module__valid__Ziu-a",
      wildtype: "validationStatus-module__wildtype__14GJI",
      other: "validationStatus-module__other__3oLt_"
    }
  },
  997: function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      o = n(1),
      a = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(o),
      l = n(871),
      s = function (e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }(l),
      u = n(25),
      c = function () {
        function e() {
          r(this, e)
        }
        return i(e, null, [{
          key: "getStudy",
          value: function (e, t, n) {
            if (!t || !n) return null;
            var r = e[0].molecularProfileId,
              i = t[r];
            return i ? n[i.studyId] || null : null
          }
        }, {
          key: "renderFunction",
          value: function (t, n, r) {
            var i = e.getStudy(t, n, r);
            return i ? a.createElement("a", {
              href: (0, u.getStudySummaryUrl)(i.studyId),
              target: "_blank"
            }, a.createElement(s.default, {
              text: i.name,
              tooltip: a.createElement("div", {
                style: {
                  maxWidth: 300
                },
                dangerouslySetInnerHTML: {
                  __html: i.name + ": " + i.description
                }
              }),
              maxLength: 16
            })) : a.createElement("span", null)
          }
        }, {
          key: "getTextValue",
          value: function (t, n, r) {
            var i = e.getStudy(t, n, r);
            return i ? i.name : ""
          }
        }, {
          key: "filter",
          value: function (t, n, r, i) {
            var o = e.getStudy(t, r, i);
            return !!o && o.name.toUpperCase().indexOf(n) > -1
          }
        }]), e
      }();
    t.default = c
  },
  998: function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var a = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      l = n(1),
      s = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
      }(l),
      u = n(63),
      c = function (e) {
        function t() {
          r(this, t);
          var e = i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
          return e.defaultTitle = "Sorry, something went wrong!", e.defaultTroubleshooting = ["Check that your URL parameters are valid.", "Make sure you are connected to the internet."], e
        }
        return o(t, e), a(t, [{
          key: "render",
          value: function () {
            return s.createElement(u.Modal, {
              show: this.props.show,
              onHide: this.props.onHide
            }, s.createElement(u.Modal.Header, {
              closeButton: !0
            }, s.createElement(u.Modal.Title, null, void 0 === this.props.title ? this.defaultTitle : this.props.title)), s.createElement(u.Modal.Body, null, s.createElement("p", null, "Troubleshooting:"), s.createElement("ul", null, (this.props.troubleshooting || this.defaultTroubleshooting).map(function (e) {
              return s.createElement("li", null, e)
            }))))
          }
        }]), t
      }(s.Component);
    t.default = c
  }
});
//# sourceMappingURL=1.a7d9e6e873d6a4fd6be9.chunk.js.map