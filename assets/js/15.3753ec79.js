(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    239: function (a, t, e) {
      "use strict";
      e.r(t);
      var n = {
          name: "Header",
          props: { page: { type: String, default: null } },
        },
        r = e(15),
        s = Object(r.a)(
          n,
          function () {
            var a = this,
              t = a._self._c;
            return t(
              "b-navbar",
              { attrs: { toggleable: "md", type: "dark", variant: "dark" } },
              [
                t("b-navbar-toggle", { attrs: { target: "nav_collapse" } }),
                a._v(" "),
                t(
                  "b-navbar-brand",
                  { attrs: { to: "/" } },
                  [t("b-icon-house")],
                  1
                ),
                a._v(" "),
                t(
                  "b-collapse",
                  { attrs: { "is-nav": "", id: "nav_collapse" } },
                  [
                    t(
                      "b-navbar-nav",
                      [
                        t(
                          "b-nav-item",
                          {
                            attrs: {
                              to: "/create-token/",
                              active: "Generator" === a.page,
                            },
                          },
                          [a._v("Create ERC20 Token")]
                        ),
                      ],
                      1
                    ),
                    a._v(" "),
                    t(
                      "b-navbar-nav",
                      { staticClass: "ml-auto" },
                      [
                        t(
                          "b-nav-item",
                          { attrs: { to: "/", active: "Home" === a.page } },
                          [a._v("Home")]
                        ),
                        a._v(" "),
                        t(
                          "b-nav-item",
                          {
                            attrs: { to: "/docs/", active: "Docs" === a.page },
                          },
                          [a._v("Docs")]
                        ),
                        a._v(" "),
                        t(
                          "b-nav-item",
                          {
                            attrs: {
                              target: "_blank",
                              href: "https://digiswap.finance",
                            },
                          },
                          [t("small", [a._v("Web")])]
                        ),
                        a._v(" "),
                        t(
                          "b-nav-item",
                          {
                            attrs: {
                              target: "_blank",
                              href: "https://dex.digiswap.finance/",
                            },
                          },
                          [t("small", [a._v("DEX")])]
                        ),
                        a._v(" "),
                        t(
                          "b-nav-item",
                          {
                            attrs: {
                              target: "_blank",
                              href: "https://cex.digiswap.finance/",
                            },
                          },
                          [t("small", [a._v("CEX")])]
                        ),
                        a._v(" "),
                        t(
                          "b-nav-item",
                          {
                            attrs: {
                              target: "_blank",
                              href: "https://marketplace.digiswap.finance/",
                            },
                          },
                          [t("small", [a._v("MarketPlace")])]
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
      t.default = s.exports;
    },
  },
]);
