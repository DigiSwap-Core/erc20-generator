(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    235: function (t, s, e) {},
    237: function (t, s, e) {
      "use strict";
      e(235);
    },
    255: function (t, s, e) {
      "use strict";
      e.r(s);
      const o = [
        "There's nothing here.",
        "How did we get here?",
        "That's a Four-Oh-Four.",
        "Looks like we've got some broken links.",
      ];
      var n = {
          methods: { getMsg: () => o[Math.floor(Math.random() * o.length)] },
        },
        i = (e(237), e(15)),
        a = Object(i.a)(
          n,
          function () {
            var t = this._self._c;
            return t(
              "div",
              { staticClass: "page-wrapper mt-4" },
              [
                t(
                  "b-container",
                  [
                    t(
                      "b-row",
                      [
                        t(
                          "b-col",
                          { attrs: { lg: "8", "offset-lg": "2" } },
                          [
                            t(
                              "transition",
                              { attrs: { name: "fade", mode: "out-in" } },
                              [
                                t(
                                  "b-card",
                                  {
                                    staticClass: "shadow-lg",
                                    attrs: { "bg-variant": "light" },
                                  },
                                  [
                                    t("h1", [this._v("404")]),
                                    this._v(" "),
                                    t("blockquote", [
                                      this._v(this._s(this.getMsg())),
                                    ]),
                                    this._v(" "),
                                    t("router-link", { attrs: { to: "/" } }, [
                                      this._v("Take me home"),
                                    ]),
                                    this._v(".\n                    "),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      s.default = a.exports;
    },
  },
]);
