(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    236: function (e, t, a) {
      "use strict";
      t.a = {
        data: () => ({
          tokenDetails: [
            {
              name: "SimpleERC20",
              version: "4.0.0",
              standard: !0,
              verified: !0,
              detailed: !0,
              customizeDecimals: !1,
              supplyType: "Fixed",
              accessType: "None",
              transferType: "Unstoppable",
              mintable: !1,
              burnable: !1,
              erc1363: !1,
              tokenRecover: !1,
              removeCopyright: !1,
              originalPrice: 0,
              price: 0,
              gas: 1163434,
            },
            {
              name: "StandardERC20",
              version: "5.0.0",
              standard: !0,
              verified: !0,
              detailed: !0,
              customizeDecimals: !0,
              supplyType: "Fixed",
              accessType: "None",
              transferType: "Unstoppable",
              mintable: !1,
              burnable: !1,
              erc1363: !1,
              tokenRecover: !1,
              removeCopyright: !0,
              originalPrice: 0.08,
              price: 0.04,
              gas: 879208,
            },
            {
              name: "BurnableERC20",
              version: "5.0.0",
              standard: !0,
              verified: !0,
              detailed: !0,
              customizeDecimals: !0,
              supplyType: "Fixed",
              accessType: "None",
              transferType: "Unstoppable",
              mintable: !1,
              burnable: !0,
              erc1363: !1,
              tokenRecover: !1,
              removeCopyright: !0,
              originalPrice: 1.25,
              price: 0.6,
              gas: 1044170,
            },
            {
              name: "MintableERC20",
              version: "4.5.0",
              standard: !0,
              verified: !0,
              detailed: !0,
              customizeDecimals: !0,
              supplyType: "Capped",
              accessType: "Ownable",
              transferType: "Unstoppable",
              mintable: !0,
              burnable: !1,
              erc1363: !1,
              tokenRecover: !1,
              removeCopyright: !0,
              originalPrice: 1.5,
              price: 0.08,
              gas: 1502638,
            },
            {
              name: "PausableERC20",
              version: "5.0.1",
              standard: !0,
              verified: !0,
              detailed: !0,
              customizeDecimals: !0,
              supplyType: "Fixed",
              accessType: "Ownable",
              transferType: "Pausable",
              mintable: !1,
              burnable: !0,
              erc1363: !1,
              tokenRecover: !1,
              removeCopyright: !0,
              originalPrice: 0.2,
              price: 0.1,
              gas: 1398744,
            },
            {
              name: "CommonERC20",
              version: "4.0.1",
              standard: !0,
              verified: !0,
              detailed: !0,
              customizeDecimals: !0,
              supplyType: "Capped",
              accessType: "Ownable",
              transferType: "Unstoppable",
              mintable: !0,
              burnable: !0,
              erc1363: !1,
              tokenRecover: !1,
              removeCopyright: !0,
              originalPrice: 0.25,
              price: 0.13,
              gas: 1919665,
            },
            {
              name: "UnlimitedERC20",
              version: "4.4.0",
              standard: !0,
              verified: !0,
              detailed: !0,
              customizeDecimals: !0,
              supplyType: "Unlimited",
              accessType: "Role Based",
              transferType: "Unstoppable",
              mintable: !0,
              burnable: !0,
              erc1363: !1,
              tokenRecover: !1,
              removeCopyright: !0,
              originalPrice: 0.3,
              price: 0.16,
              gas: 2615887,
            },
            {
              name: "AmazingERC20",
              version: "4.4.0",
              standard: !0,
              verified: !0,
              detailed: !0,
              customizeDecimals: !0,
              supplyType: "Unlimited",
              accessType: "Ownable",
              transferType: "Unstoppable",
              mintable: !0,
              burnable: !0,
              erc1363: !0,
              tokenRecover: !0,
              removeCopyright: !0,
              originalPrice: 0.4,
              price: 0.2,
              gas: 2665131,
            },
            {
              name: "PowerfulERC20",
              version: "5.0.0",
              standard: !0,
              verified: !0,
              detailed: !0,
              customizeDecimals: !0,
              supplyType: "Capped",
              accessType: "Role Based",
              transferType: "Unstoppable",
              mintable: !0,
              burnable: !0,
              erc1363: !0,
              tokenRecover: !0,
              removeCopyright: !0,
              originalPrice: 0.6,
              price: 0.3,
              gas: 2530489,
            },
          ],
        }),
      };
    },
    264: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = {
          name: "PricingTable",
          mixins: [a(236).a],
          data: () => ({ carousel: null, slide: null }),
          mounted() {
            a.e(19)
              .then(a.t.bind(null, 253, 7))
              .then((e) => {
                (this.carousel = e.Carousel), (this.slide = e.Slide);
              })
              .catch((e) => {
                console.log(e);
              });
          },
        },
        s = a(15),
        n = Object(s.a)(
          i,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              { staticClass: "pricing-table" },
              [
                t(
                  "b-row",
                  { staticClass: "mb-5" },
                  [
                    t("b-col", { attrs: { lg: "10", "offset-lg": "1" } }, [
                      t(
                        "h4",
                        {
                          staticClass:
                            "text-center font-weight-light text-light",
                        },
                        [
                          e._v(
                            "\n                Choose between " +
                              e._s(e.tokenDetails.length) +
                              " different Token types.\n            "
                          ),
                        ]
                      ),
                      e._v(" "),
                      t(
                        "p",
                        {
                          staticClass:
                            "text-center font-weight-light text-light",
                        },
                        [
                          e._v(
                            "\n                What are your Token requirements?\n            "
                          ),
                        ]
                      ),
                    ]),
                  ],
                  1
                ),
                e._v(" "),
                e.carousel
                  ? t(
                      e.carousel,
                      {
                        tag: "component",
                        attrs: {
                          perPageCustom: [
                            [0, 1],
                            [576, 2],
                            [992, 3],
                            [1536, 4],
                          ],
                          paginationColor: "#343a40",
                          paginationActiveColor: "#f8f9fa",
                        },
                      },
                      e._l(e.tokenDetails, function (a, i) {
                        return e.slide
                          ? t(
                              e.slide,
                              { tag: "component" },
                              [
                                t(
                                  "b-card",
                                  {
                                    staticClass: "mb-3 mx-3",
                                    attrs: {
                                      "no-body": "",
                                      itemscope: "",
                                      itemtype: "http://schema.org/Product",
                                    },
                                  },
                                  [
                                    t(
                                      "b-card-title",
                                      {
                                        staticClass:
                                          "pt-5 font-weight-light text-center",
                                        attrs: { itemprop: "name" },
                                      },
                                      [
                                        e._v(
                                          "\n                    " +
                                            e._s(a.name) +
                                            "\n                "
                                        ),
                                      ]
                                    ),
                                    e._v(" "),
                                    t("meta", {
                                      attrs: {
                                        itemprop: "sku",
                                        content: a.name,
                                      },
                                    }),
                                    e._v(" "),
                                    t(
                                      "div",
                                      {
                                        attrs: {
                                          itemprop: "brand",
                                          itemtype: "http://schema.org/Brand",
                                          itemscope: "",
                                        },
                                      },
                                      [
                                        t("meta", {
                                          attrs: {
                                            itemprop: "name",
                                            content: "ERC20 Token Generator",
                                          },
                                        }),
                                      ]
                                    ),
                                    e._v(" "),
                                    t(
                                      "p",
                                      { staticClass: "card-price text-center" },
                                      [
                                        a.originalPrice !== a.price
                                          ? t(
                                              "b-badge",
                                              { attrs: { variant: "danger" } },
                                              [
                                                t("s", [
                                                  e._v(
                                                    e._s(a.originalPrice) + " "
                                                  ),
                                                  t("small", [e._v("ETH")]),
                                                ]),
                                              ]
                                            )
                                          : e._e(),
                                        e._v(" "),
                                        t(
                                          "span",
                                          {
                                            staticClass: "align-middle",
                                            attrs: {
                                              itemprop: "offers",
                                              itemscope: "",
                                              itemtype:
                                                "http://schema.org/Offer",
                                            },
                                          },
                                          [
                                            t(
                                              "span",
                                              { attrs: { itemprop: "price" } },
                                              [e._v(e._s(a.price))]
                                            ),
                                            e._v(" "),
                                            t(
                                              "small",
                                              {
                                                staticClass: "term",
                                                attrs: {
                                                  itemprop: "priceCurrency",
                                                },
                                              },
                                              [e._v("ETH")]
                                            ),
                                            e._v(" "),
                                            t("link", {
                                              attrs: {
                                                itemprop: "url",
                                                href: e.$withBase(
                                                  "/create-token/?tokenType=" +
                                                    a.name
                                                ),
                                              },
                                            }),
                                            e._v(" "),
                                            t("meta", {
                                              attrs: {
                                                itemprop: "availability",
                                                content: "InStock",
                                              },
                                            }),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    t(
                                      "b-list-group",
                                      { attrs: { flush: "" } },
                                      [
                                        t(
                                          "b-list-group-item",
                                          {
                                            staticClass:
                                              "d-flex justify-content-between align-items-center",
                                          },
                                          [
                                            e._v(
                                              "\n                        ERC20 Compliant "
                                            ),
                                            t("ui--checkmark", {
                                              attrs: { value: a.standard },
                                            }),
                                          ],
                                          1
                                        ),
                                        e._v(" "),
                                        t(
                                          "b-list-group-item",
                                          {
                                            staticClass:
                                              "d-flex justify-content-between align-items-center",
                                          },
                                          [
                                            e._v(
                                              "\n                        Verified Source Code "
                                            ),
                                            t("ui--checkmark", {
                                              attrs: { value: a.verified },
                                            }),
                                          ],
                                          1
                                        ),
                                        e._v(" "),
                                        t(
                                          "b-list-group-item",
                                          {
                                            staticClass:
                                              "d-flex justify-content-between align-items-center",
                                          },
                                          [
                                            e._v(
                                              "\n                        Detailed "
                                            ),
                                            t("ui--checkmark", {
                                              attrs: { value: a.detailed },
                                            }),
                                          ],
                                          1
                                        ),
                                        e._v(" "),
                                        t(
                                          "b-list-group-item",
                                          {
                                            staticClass:
                                              "d-flex justify-content-between align-items-center",
                                          },
                                          [
                                            e._v(
                                              "\n                        Customizable Decimals "
                                            ),
                                            t("ui--checkmark", {
                                              attrs: {
                                                value: a.customizeDecimals,
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        e._v(" "),
                                        t(
                                          "b-list-group-item",
                                          {
                                            staticClass:
                                              "d-flex justify-content-between align-items-center",
                                          },
                                          [
                                            e._v(
                                              "\n                        Remove Copyright "
                                            ),
                                            t("ui--checkmark", {
                                              attrs: {
                                                value: a.removeCopyright,
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        e._v(" "),
                                        t(
                                          "b-list-group-item",
                                          {
                                            staticClass:
                                              "d-flex justify-content-between align-items-center",
                                          },
                                          [
                                            e._v(
                                              "\n                        Supply Type\n                        "
                                            ),
                                            t(
                                              "b-badge",
                                              {
                                                attrs: {
                                                  variant:
                                                    "Capped" === a.supplyType
                                                      ? "success"
                                                      : "Unlimited" ===
                                                        a.supplyType
                                                      ? "info"
                                                      : "warning",
                                                },
                                              },
                                              [
                                                e._v(
                                                  "\n                            " +
                                                    e._s(a.supplyType) +
                                                    "\n                        "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        e._v(" "),
                                        t(
                                          "b-list-group-item",
                                          {
                                            staticClass:
                                              "d-flex justify-content-between align-items-center",
                                          },
                                          [
                                            e._v(
                                              "\n                        Access Type\n                        "
                                            ),
                                            t(
                                              "b-badge",
                                              {
                                                attrs: {
                                                  variant:
                                                    "Role Based" ===
                                                    a.accessType
                                                      ? "success"
                                                      : "Ownable" ===
                                                        a.accessType
                                                      ? "info"
                                                      : "warning",
                                                },
                                              },
                                              [
                                                e._v(
                                                  "\n                            " +
                                                    e._s(a.accessType) +
                                                    "\n                        "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        e._v(" "),
                                        t(
                                          "b-list-group-item",
                                          {
                                            staticClass:
                                              "d-flex justify-content-between align-items-center",
                                          },
                                          [
                                            e._v(
                                              "\n                        Transfer Type\n                        "
                                            ),
                                            t(
                                              "b-badge",
                                              {
                                                attrs: {
                                                  variant:
                                                    "Unstoppable" ===
                                                    a.transferType
                                                      ? "success"
                                                      : "warning",
                                                },
                                              },
                                              [
                                                e._v(
                                                  "\n                            " +
                                                    e._s(a.transferType) +
                                                    "\n                        "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        e._v(" "),
                                        t(
                                          "b-list-group-item",
                                          {
                                            staticClass:
                                              "d-flex justify-content-between align-items-center",
                                          },
                                          [
                                            e._v(
                                              "\n                        Burnable "
                                            ),
                                            t("ui--checkmark", {
                                              attrs: { value: a.burnable },
                                            }),
                                          ],
                                          1
                                        ),
                                        e._v(" "),
                                        t(
                                          "b-list-group-item",
                                          {
                                            staticClass:
                                              "d-flex justify-content-between align-items-center",
                                          },
                                          [
                                            e._v(
                                              "\n                        Mintable "
                                            ),
                                            t("ui--checkmark", {
                                              attrs: { value: a.mintable },
                                            }),
                                          ],
                                          1
                                        ),
                                        e._v(" "),
                                        t(
                                          "b-list-group-item",
                                          {
                                            staticClass:
                                              "d-flex justify-content-between align-items-center",
                                          },
                                          [
                                            e._v(
                                              "\n                        ERC1363 "
                                            ),
                                            t("ui--checkmark", {
                                              attrs: { value: a.erc1363 },
                                            }),
                                          ],
                                          1
                                        ),
                                        e._v(" "),
                                        t(
                                          "b-list-group-item",
                                          {
                                            staticClass:
                                              "d-flex justify-content-between align-items-center",
                                          },
                                          [
                                            e._v(
                                              "\n                        Token Recover "
                                            ),
                                            t("ui--checkmark", {
                                              attrs: { value: a.tokenRecover },
                                            }),
                                          ],
                                          1
                                        ),
                                        e._v(" "),
                                        t(
                                          "b-list-group-item",
                                          {
                                            staticClass:
                                              "justify-content-between align-items-center text-center py-3",
                                            attrs: {
                                              variant: "warning",
                                              to: {
                                                path: "/create-token/",
                                                query: { tokenType: a.name },
                                              },
                                              itemprop: "url",
                                            },
                                          },
                                          [
                                            e._v(
                                              "\n                        Create\n                    "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            )
                          : e._e();
                      }),
                      1
                    )
                  : e._e(),
                e._v(" "),
                t(
                  "b-row",
                  [
                    t(
                      "b-col",
                      {
                        staticClass: "mt-4",
                        attrs: { lg: "6", "offset-lg": "3" },
                      },
                      [
                        t("p", { staticClass: "text-center text-light" }, [
                          e._v(
                            "\n                * GAS fee will be added to final amount\n            "
                          ),
                        ]),
                      ]
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
      t.default = n.exports;
    },
  },
]);
