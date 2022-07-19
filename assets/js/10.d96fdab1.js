(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    260: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = { name: "Faq" },
        o = a(15),
        r = Object(o.a)(
          n,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass: "faq-table",
                attrs: {
                  itemscope: "",
                  itemtype: "https://schema.org/FAQPage",
                },
              },
              [
                e(
                  "b-row",
                  [
                    e(
                      "b-col",
                      [
                        e(
                          "b-card",
                          {
                            staticClass: "mb-4",
                            attrs: { "bg-variant": "light" },
                          },
                          [
                            e("h3", { staticClass: "font-weight-light" }, [
                              t._v("ERC20 Token Generator"),
                            ]),
                            t._v(" "),
                            e("p", { staticClass: "font-weight-light" }, [
                              t._v(
                                "\n                    Create an ERC20 Token in less than a minute with the most used Smart Contract Generator for\n                    ERC20 Token. No login. No setup. No coding required.\n                "
                              ),
                            ]),
                            t._v(" "),
                            e("hr", { staticClass: "my-4" }),
                            t._v(" "),
                            e("h6", { staticClass: "font-weight-light" }, [
                              t._v("The ERC20 Standard"),
                            ]),
                            t._v(" "),
                            e("p", { staticClass: "font-weight-light" }, [
                              t._v(
                                "\n                    ERC20 provides basic functionality to transfer tokens, as well as allow tokens to be approved so\n                    they can be spent by another on-chain third party.\n                "
                              ),
                            ]),
                          ]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                t._v(" "),
                e(
                  "b-row",
                  [
                    e(
                      "b-col",
                      [
                        e(
                          "h5",
                          { staticClass: "font-weight-light text-white" },
                          [
                            e(
                              "a",
                              {
                                directives: [
                                  { name: "b-toggle", rawName: "v-b-toggle" },
                                ],
                                staticClass:
                                  "btn-block text-reset text-decoration-none",
                                attrs: { href: "#about-token-features" },
                                on: {
                                  click: function (t) {
                                    t.preventDefault();
                                  },
                                },
                              },
                              [
                                e("b-icon-caret-down-fill"),
                                t._v(" Token Features\n                "),
                              ],
                              1
                            ),
                          ]
                        ),
                        t._v(" "),
                        e(
                          "b-collapse",
                          {
                            staticClass: "mt-4",
                            attrs: {
                              id: "about-token-features",
                              visible: "",
                              accordion: "main-accordion",
                            },
                          },
                          [
                            e(
                              "div",
                              {
                                staticClass: "accordion mb-3",
                                attrs: { role: "tablist" },
                              },
                              [
                                e(
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#difference-between-fixed-capped",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    What's the difference between Fixed, Capped and Unlimited Supply?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "difference-between-fixed-capped",
                                          accordion: "features-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                e("b", [t._v("Fixed Supply")]),
                                                e("br"),
                                                t._v(
                                                  "\n                                    The entire token supply will be generated during deploy and sent to Token Owner\n                                    wallet. You can't increase or reduce supply later."
                                                ),
                                                e("br"),
                                                e("br"),
                                                t._v(" "),
                                                e("b", [t._v("Capped Supply")]),
                                                e("br"),
                                                t._v(
                                                  "\n                                    You can define an initial supply to sent to Token Owner's wallet. You can\n                                    increase or reduce supply later by minting or burning tokens (if allowed).\n                                    You won't be able to generate more tokens than the defined supply cap."
                                                ),
                                                e("br"),
                                                e("br"),
                                                t._v(" "),
                                                e("b", [
                                                  t._v("Unlimited Supply"),
                                                ]),
                                                e("br"),
                                                t._v(
                                                  "\n                                    You can define an initial supply to sent to Token Owner's wallet. You can\n                                    increase or reduce supply later by minting or burning tokens (if allowed).\n                                    You will be able to generate unlimited tokens without an upper limit.\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                e(
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#difference-between-enabled-pausable",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                      What's the difference between Unstoppable or Pausable Transfer?\n                                  "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "difference-between-enabled-pausable",
                                          accordion: "features-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                e("b", [t._v("Unstoppable")]),
                                                e("br"),
                                                t._v(
                                                  "\n                                    Everyone can always transfer his own tokens. Transfer can't be stopped."
                                                ),
                                                e("br"),
                                                e("br"),
                                                t._v(" "),
                                                e("b", [t._v("Pausable")]),
                                                e("br"),
                                                t._v(
                                                  "\n                                    Token owner can stop token transfers. Useful for scenarios such as preventing\n                                    trades until the end of an evaluation period, or having an emergency switch for\n                                    freezing all token transfers in the event of a large bug.\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                e(
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#difference-between-access",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    What's the difference between None, Ownable and Role Based Access?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "difference-between-access",
                                          accordion: "features-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                e("b", [t._v("None")]),
                                                e("br"),
                                                t._v(
                                                  "\n                                    Your Token doesn't need an access type because of there are not actions that\n                                    needs privileges. "
                                                ),
                                                e("br"),
                                                e("br"),
                                                t._v(" "),
                                                e("b", [t._v("Ownable")]),
                                                e("br"),
                                                t._v(
                                                  "\n                                    Your Token will have an Owner. The account you use to deploy your Token will be\n                                    owner by default and will be able to mint new tokens or call the finish minting\n                                    function. You can transfer token ownership to addresses or Smart Contract.\n                                    "
                                                ),
                                                e("br"),
                                                e("br"),
                                                t._v(" "),
                                                e("b", [t._v("Role Based")]),
                                                e("br"),
                                                t._v(
                                                  '\n                                    Your Token will have Roles. Accounts with "MINTER" role will be able to mint new\n                                    tokens. Accounts with "ADMIN" role will be able to add or remove roles to\n                                    minters or other admins. The account you use to deploy your Token will be ADMIN\n                                    and MINTER by default. In addition your Token will have the Ownable behaviour\n                                    too.\n                                '
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                e(
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#who-can-mint-burn",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    Who can mint or burn tokens?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "who-can-mint-burn",
                                          accordion: "features-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                e("b", [t._v("Mint")]),
                                                e("br"),
                                                t._v(
                                                  "\n                                    It depends on your Token Access Type. If you choose Ownable Access only Token\n                                    Owner will be able to mint new tokens. If you choose Role Based Access only\n                                    addresses with MINTER role will be able to mint new tokens.\n                                    In both cases, if you choose a Capped supply you won't be able to mint more\n                                    tokens than the defined cap. By choosing Unlimited supply instead, you will be\n                                    able to generate unlimited tokens."
                                                ),
                                                e("br"),
                                                e("br"),
                                                t._v(" "),
                                                e("b", [t._v("Burn")]),
                                                e("br"),
                                                t._v(
                                                  "\n                                    Everyone will be able to burn tokens he held. A third party can burn tokens from\n                                    other addresses only after an approval. Nobody, not even the Token Owner, will\n                                    be able to burn tokens from other addresses without approval.\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                e(
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: { href: "#who-can-pause" },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    Who can pause transfers?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "who-can-pause",
                                          accordion: "features-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  "\n                                    If you choose a Pausable token, only token owner will be able to pause and\n                                    unpause token transfers."
                                                ),
                                                e("br"),
                                                t._v(
                                                  "\n                                    Note that Pausable is a powerful feature to add emergency stop to smart\n                                    contracts. It is a privileged role, so users need to trust the project team.\n                                    The project should clearly document what privileged roles they have and under\n                                    what circumstances they use them.\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                e(
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: { href: "#what-is-erc1363" },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    What is ERC1363 Payable Token?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "what-is-erc1363",
                                          accordion: "features-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  "\n                                    There is no way to execute code after a ERC-20 transfer or approval (i.e.\n                                    making a payment), so to make an action it is required to send another\n                                    transaction and pay GAS twice. ERC1363 makes token payments easier and working\n                                    without the use of any other listener. It allows to make a callback after a\n                                    transfer or approval in a single transaction."
                                                ),
                                                e("br"),
                                                t._v(
                                                  "\n                                    There are many proposed uses of Ethereum Smart Contracts that can accept ERC-20\n                                    payments."
                                                ),
                                                e("br"),
                                                t._v(
                                                  "\n                                    Examples could be:\n                                    "
                                                ),
                                                e("ul", [
                                                  e("li", [
                                                    t._v(
                                                      "\n                                            to create a token payable crowdsale\n                                        "
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  e("li", [
                                                    t._v(
                                                      "\n                                            selling services for tokens\n                                        "
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  e("li", [
                                                    t._v(
                                                      "\n                                            paying invoices\n                                        "
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  e("li", [
                                                    t._v(
                                                      "\n                                            making subscriptions\n                                        "
                                                    ),
                                                  ]),
                                                ]),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "b-link",
                                          {
                                            staticClass: "card-link",
                                            attrs: {
                                              href: "https://eips.ethereum.org/EIPS/eip-1363",
                                              target: "_blank",
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n                                Discover ERC1363\n                            "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                e(
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#what-is-token-recover",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    What is Token Recover?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "what-is-token-recover",
                                          accordion: "features-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  "\n                                    There are lots of tokens lost forever into Smart Contracts. Each Ethereum\n                                    contract is a potential token trap for ERC20 tokens. They can't be recovered so\n                                    it means money losses for end users."
                                                ),
                                                e("br"),
                                                t._v(
                                                  "\n                                    TokenRecover allows the contract owner to recover any ERC20 token sent into the\n                                    contract for error.\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "b-link",
                                          {
                                            staticClass: "card-link",
                                            attrs: {
                                              href: "https://digiswap-core.github.io/eth-token-recover/",
                                              target: "_blank",
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n                                Discover Token Recover\n                            "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                e(
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#will-copyright-be-an-issue",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    Will be having ERC20 Generator Copyright an issue?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "will-copyright-be-an-issue",
                                          accordion: "features-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  '\n                                    No. ERC20 Generator code is released under MIT License so, using SimpleERC20 for\n                                    FREE, you will have a view method in your Smart Contract named "generator"\n                                    showing a link to this page. You will also have a disclaimer in source code. It\n                                    is not an issue for you because of your Token will be fully compliant with ERC20\n                                    definition. You can use your Token in Exchanges, DEX, Uniswap, any ERC20\n                                    compatible wallet, etc. You can remove it by choosing a token type with remove\n                                    Copyright feature.\n                                '
                                                ),
                                              ]
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
                            ),
                          ]
                        ),
                        t._v(" "),
                        e(
                          "h5",
                          { staticClass: "font-weight-light text-white" },
                          [
                            e(
                              "a",
                              {
                                directives: [
                                  { name: "b-toggle", rawName: "v-b-toggle" },
                                ],
                                staticClass:
                                  "btn-block text-reset text-decoration-none",
                                attrs: { href: "#about-token-behaviours" },
                                on: {
                                  click: function (t) {
                                    t.preventDefault();
                                  },
                                },
                              },
                              [
                                e("b-icon-caret-down-fill"),
                                t._v(" Token Behaviours\n                "),
                              ],
                              1
                            ),
                          ]
                        ),
                        t._v(" "),
                        e(
                          "b-collapse",
                          {
                            staticClass: "mt-4",
                            attrs: {
                              id: "about-token-behaviours",
                              accordion: "main-accordion",
                            },
                          },
                          [
                            e(
                              "div",
                              {
                                staticClass: "accordion mb-3",
                                attrs: { role: "tablist" },
                              },
                              [
                                e(
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#where-is-my-token-address",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    Where is my Token address?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "where-is-my-token-address",
                                          accordion: "erc20-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  "\n                                    Once you confirm your transaction you will receive transaction hash (first) and\n                                    Token address (when transaction is confirmed). If your transaction will take\n                                    some time to be confirmed due to network status, you can monitor it and your\n                                    Token will be visible in transaction page. Watch the above video tutorial for\n                                    details.\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                e(
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#who-will-be-token-owner",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    Who will be Token Owner?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "who-will-be-token-owner",
                                          accordion: "erc20-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  "\n                                    Once your Token will be deployed you (your MetaMask address) will be the only\n                                    owner.\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                e(
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#where-token-supply-will-go",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    Where will token supply go after deploy?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "where-token-supply-will-go",
                                          accordion: "erc20-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  "\n                                    The initial token supply will be held by the address used to deploy the token\n                                    (your MetaMask address). This address will be Token Owner and will be able to\n                                    generate new tokens (in case you selected a token type with Mintable behaviour).\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                e(
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#which-wallet-support",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    Which wallet will my Token be supported by?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "which-wallet-support",
                                          accordion: "erc20-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  "\n                                    Your Token will be a fully ERC20 compatible token. Any ERC20 wallet will support\n                                    your Token.\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                e(
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#how-to-mint-new-tokens",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    How to mint new tokens?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "how-to-mint-new-tokens",
                                          accordion: "erc20-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  '\n                                    To generate new tokens you must use the "mint" function using token owner\n                                    wallet. You can doing this by using the Contract/Write tab on your Etherscan\n                                    token page. You can also import ABI from the Docs page in tools like\n                                    MyEtherWallet and calling the mint function.'
                                                ),
                                                e("br"),
                                                t._v(" "),
                                                e("small", [
                                                  t._v(
                                                    "\n                                        Note: remember that your tokens has a number of decimals (usually 18), so\n                                        you must use the entire number with decimals."
                                                  ),
                                                  e("br"),
                                                  t._v(
                                                    "I.e. if you need to\n                                        generate 500 additional tokens, call the mint function by inserting\n                                        500000000000000000000.\n                                    "
                                                  ),
                                                ]),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                e(
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#can-i-use-in-exchange",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    Can I use my token in Exchanges or with DeFi protocols?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "can-i-use-in-exchange",
                                          accordion: "erc20-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  "\n                                    Yes, you can use your Token in Exchanges, Dex, or DeFi protocols like Uniswap.\n                                    It is a ERC20 compliant so you can use for any purpose where ERC20 applies.\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                e(
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#can-i-use-for-ico",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    Can I use my Token for ICO?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "can-i-use-for-ico",
                                          accordion: "erc20-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  "\n                                    Yes, you can use Token for ICO or Crowdsales."
                                                ),
                                                e("br"),
                                                t._v(
                                                  "\n                                    Note: you need to develop an ICO or Crowdsale Smart Contract; Token address\n                                    can't receive ETH.\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                e(
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#can-token-receive-eth",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    Can my Token receive Ethereum?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "can-token-receive-eth",
                                          accordion: "erc20-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  "\n                                    No, Token address can't receive Ethereum. If you want to create ICO, you need to\n                                    develop a Smart Contract able to do that.\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                e(
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#will-my-token-be-verified",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    Will my Token Source Code be verified on Etherscan?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "will-my-token-be-verified",
                                          accordion: "erc20-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  '\n                                    Yes, your token source code will be already verified by "Similar Match".\n                                    It means that your source code is similar to other tokens deployed using this\n                                    generator.\n                                '
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                e(
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: { href: "#can-i-add-logo" },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    Can I add logo and information to my token on Etherscan?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "can-i-add-logo",
                                          accordion: "erc20-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  "\n                                    Once your token will be deployed you will be able to add information on\n                                    Etherscan using their procedure.\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "b-link",
                                          {
                                            staticClass: "card-link",
                                            attrs: {
                                              href: "https://info.etherscan.com/how-to-update-token-information-on-token-page",
                                              target: "_blank",
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n                                Update Token Information\n                            "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                e(
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#will-people-mark-as-scam",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    Will people mark my token as SCAM?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "will-people-mark-as-scam",
                                          accordion: "erc20-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  "\n                                    No, your Token is not SCAM. Code is well tested and updated regularly, token has\n                                    verified source code already used by thousands of tokens. It will be SCAM if you\n                                    use as it. ERC20 Token Generator is FREE to use and there are about 10.000\n                                    tokens built on. Maybe someone used it to SCAM but it doesn't mean you will use\n                                    for it too. "
                                                ),
                                                e("b", [t._v("YOU DON'T.")]),
                                                t._v(
                                                  "\n                                    Below the link to documentation about the project you can share to demonstrate\n                                    trustability of your token source code (not of your intentions).\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "b-link",
                                          {
                                            staticClass: "card-link",
                                            attrs: { to: "/docs/" },
                                          },
                                          [
                                            t._v(
                                              "\n                                Documentation\n                            "
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
                            ),
                          ]
                        ),
                        t._v(" "),
                        e(
                          "h5",
                          { staticClass: "font-weight-light text-white" },
                          [
                            e(
                              "a",
                              {
                                directives: [
                                  { name: "b-toggle", rawName: "v-b-toggle" },
                                ],
                                staticClass:
                                  "btn-block text-reset text-decoration-none",
                                attrs: { href: "#about-ethereum" },
                                on: {
                                  click: function (t) {
                                    t.preventDefault();
                                  },
                                },
                              },
                              [
                                e("b-icon-caret-down-fill"),
                                t._v(
                                  " Ethereum Blockchain and Ecosystem\n                "
                                ),
                              ],
                              1
                            ),
                          ]
                        ),
                        t._v(" "),
                        e(
                          "b-collapse",
                          {
                            staticClass: "mt-4",
                            attrs: {
                              id: "about-ethereum",
                              accordion: "main-accordion",
                            },
                          },
                          [
                            e(
                              "div",
                              {
                                staticClass: "accordion mb-3",
                                attrs: { role: "tablist" },
                              },
                              [
                                e(
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#what-is-ethereum",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    What is Ethereum?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "what-is-ethereum",
                                          accordion: "ethereum-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  "\n                                    Ethereum is a decentralized platform that runs Smart Contracts: applications\n                                    that run exactly as programmed without any possibility of downtime, censorship,\n                                    fraud or third-party interference."
                                                ),
                                                e("br"),
                                                t._v(
                                                  "\n                                    These apps run on a custom built blockchain, an enormously powerful shared\n                                    global infrastructure that can move value around and represent the ownership of\n                                    property."
                                                ),
                                                e("br"),
                                                t._v(
                                                  "\n                                    This enables developers to create markets, store registries of debts or\n                                    promises, move funds in accordance with instructions given long in the past\n                                    (like a will or a futures contract) and many other things that have not been\n                                    invented yet, all without a middleman or counterparty risk.\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "b-link",
                                          {
                                            staticClass: "card-link",
                                            attrs: {
                                              href: "https://www.ethereum.org",
                                              target: "_blank",
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n                                Ethereum official website\n                            "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                e(
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#explore-ethereum",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    How to explore the Ethereum blockchain?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "explore-ethereum",
                                          accordion: "ethereum-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  "\n                                    A Block Explorer is basically a search engine that allows users to easily\n                                    lookup, confirm and validate transactions that have taken place on the Ethereum\n                                    Blockchain.\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "b-link",
                                          {
                                            staticClass: "card-link",
                                            attrs: {
                                              href: "https://etherscan.io",
                                              target: "_blank",
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n                                Etherscan\n                            "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                e(
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: { href: "#what-is-a-dapp" },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    What is a DApp?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "what-is-a-dapp",
                                          accordion: "ethereum-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  "\n                                    DApp is an abbreviated form for decentralized application."
                                                ),
                                                e("br"),
                                                t._v(
                                                  "\n                                    A DApp has its backend code running on a decentralized peer-to-peer network.\n                                    Contrast this with an app where the backend code is running on centralized\n                                    servers."
                                                ),
                                                e("br"),
                                                t._v(
                                                  "\n                                    A DApp can have frontend code and user interfaces written in any language (just\n                                    like an app) that can make calls to its backend. Furthermore, its frontend can\n                                    be hosted on decentralized storage such as Swarm or IPFS."
                                                ),
                                                e("br"),
                                                t._v(
                                                  "\n                                    For an application to be considered a Dapp (pronounced Dee-app, similar to\n                                    Email) it must meet the following criteria:\n                                    "
                                                ),
                                                e("ul", [
                                                  e("li", [
                                                    t._v(
                                                      "\n                                            The application must be completely open-source, it must operate\n                                            autonomously, and with no entity controlling the majority of its tokens.\n                                            The application may adapt its protocol in response to proposed\n                                            improvements and market feedback but all changes must be decided by\n                                            consensus of its users.\n                                        "
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  e("li", [
                                                    t._v(
                                                      "\n                                            The application's data and records of operation must be\n                                            cryptographically stored in a public, decentralized blockchain in order\n                                            to avoid any central points of failure.\n                                        "
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  e("li", [
                                                    t._v(
                                                      "\n                                            The application must use a cryptographic token (bitcoin or a token\n                                            native to its system) which is necessary for access to the application\n                                            and any contribution of value from (miners / farmers) should be rewarded\n                                            in the application’s tokens.\n                                        "
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  e("li", [
                                                    t._v(
                                                      "\n                                            The application must generate tokens according to a standard\n                                            crytptographic algorithm acting as a proof of the value nodes are\n                                            contributing to the application (Bitcoin uses the Proof of Work\n                                            Algorithm).\n                                        "
                                                    ),
                                                  ]),
                                                ]),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                e(
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#what-is-an-erc20-token",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    What is an ERC20 token?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "what-is-an-erc20-token",
                                          accordion: "ethereum-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  "\n                                    The Ethereum token standard (ERC20) defines a common list of rules that an\n                                    Ethereum token has to implement. Giving developers the ability to program how\n                                    new tokens will function within the Ethereum ecosystem. This token protocol\n                                    became popular with crowdfunding companies via initial coin offering (ICO).\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "b-link",
                                          {
                                            staticClass: "card-link",
                                            attrs: {
                                              href: "https://eips.ethereum.org/EIPS/eip-20",
                                              target: "_blank",
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n                                ERC20 Technical specification\n                            "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                e(
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: { href: "#what-is-gas" },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    What is GAS and how to set Gas price?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "what-is-gas",
                                          accordion: "ethereum-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  '\n                                    "Gas" is the name for a special unit used in Ethereum. It measures how much\n                                    "work" an action or set of actions takes to perform.'
                                                ),
                                                e("br"),
                                                t._v(
                                                  "\n                                    Every operation that can be performed by a transaction or contract on the\n                                    Ethereum platform costs a certain number of gas, with operations that require\n                                    more computational resources costing more gas than operations that require few\n                                    computational resources."
                                                ),
                                                e("br"),
                                                t._v(
                                                  "\n                                    The reason gas is important is that it helps to ensure an appropriate fee is\n                                    being paid by transactions submitted to the network. By requiring that a\n                                    transaction pay for each operation it performs (or causes a contract to\n                                    perform), we ensure that network doesn't become bogged down with performing a\n                                    lot of intensive work that isn't valuable to anyone."
                                                ),
                                                e("br"),
                                                t._v(
                                                  "\n                                    Use the links below to discover more about Gas and Gas Price.\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "b-link",
                                          {
                                            staticClass: "card-link",
                                            attrs: {
                                              href: "https://ethereum.stackexchange.com/questions/3/what-is-meant-by-the-term-gas",
                                              target: "_blank",
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n                                Good explanation of Gas\n                            "
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "b-link",
                                          {
                                            staticClass: "card-link",
                                            attrs: {
                                              href: "https://etherscan.io/gastracker",
                                              target: "_blank",
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n                                Etherscan Gas tracker\n                            "
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "b-link",
                                          {
                                            staticClass: "card-link",
                                            attrs: {
                                              href: "https://ethgasstation.info",
                                              target: "_blank",
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n                                ETH Gas Station\n                            "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                e(
                                  "b-card",
                                  {
                                    attrs: {
                                      "no-body": "",
                                      "bg-variant": "light",
                                      itemscope: "",
                                      itemprop: "mainEntity",
                                      itemtype: "https://schema.org/Question",
                                    },
                                  },
                                  [
                                    e(
                                      "b-card-header",
                                      { attrs: { role: "tab" } },
                                      [
                                        e(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "b-toggle",
                                                rawName: "v-b-toggle",
                                              },
                                            ],
                                            staticClass:
                                              "btn-block text-reset text-decoration-none",
                                            attrs: {
                                              href: "#what-is-multisig",
                                            },
                                            on: {
                                              click: function (t) {
                                                t.preventDefault();
                                              },
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "name" } },
                                              [
                                                t._v(
                                                  "\n                                    What is a Multisig Wallet?\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "b-collapse",
                                      {
                                        staticClass: "p-4",
                                        attrs: {
                                          id: "what-is-multisig",
                                          accordion: "ethereum-accordion",
                                        },
                                      },
                                      [
                                        e(
                                          "b-card-text",
                                          {
                                            attrs: {
                                              itemscope: "",
                                              itemprop: "acceptedAnswer",
                                              itemtype:
                                                "https://schema.org/Answer",
                                            },
                                          },
                                          [
                                            e(
                                              "span",
                                              { attrs: { itemprop: "text" } },
                                              [
                                                t._v(
                                                  "\n                                    If such an account (wallet) with privileges is lost or were to fall in the\n                                    hands of a malicious user, they could wreak havoc in your system.\n                                    A good option for securing owner accounts is to use a special contract, such as\n                                    a multisig, instead of a regular externally owned account."
                                                ),
                                                e("br"),
                                                t._v(
                                                  "\n                                    Multisig is a smart contract wallet running on Ethereum that requires a minimum\n                                    number of people to approve a transaction before it can occur.\n                                    If for example you have 3 main stakeholders in your business, you are able to\n                                    set up the wallet to require approval from all 3 people before the transaction\n                                    is sent. This assures that no single person could compromise the funds.\n                                "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "b-link",
                                          {
                                            staticClass: "card-link",
                                            attrs: {
                                              href: "https://gnosis-safe.io/",
                                              target: "_blank",
                                            },
                                          },
                                          [
                                            t._v(
                                              "\n                                Gnosis Safe Multisig\n                            "
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
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                t._v(" "),
                e(
                  "b-row",
                  [
                    e(
                      "b-col",
                      [
                        e(
                          "b-alert",
                          {
                            staticClass: "mt-4",
                            attrs: { show: "", variant: "warning" },
                          },
                          [
                            e("h4", { staticClass: "alert-heading" }, [
                              t._v("DISCLAIMER"),
                            ]),
                            t._v(" "),
                            e("p", [
                              t._v(
                                "\n                    ERC20 Token Generator and its author are free of any liability regarding Tokens built using\n                    this App, and the use that is made of them. Tokens built on ERC20 Token Generator, their\n                    projects, their teams, their use of Token (as well as anything related to Token) are in no way\n                    connected to ERC20 Token Generator or its author.\n                "
                              ),
                            ]),
                            t._v(" "),
                            e("hr"),
                            t._v(" "),
                            e("small", [
                              t._v(
                                "\n                    ERC20 Token Generator's code is provided under MIT License. Anyone can use it as per their\n                    needs. The App's purpose is to make people able to tokenize their ideas without coding or\n                    paying large amounts for it. Source code is public and well tested and continuously updated to\n                    reduce risk of bugs and introduce language optimizations. Anyway the purchase of tokens\n                    involves a high degree of risk. Before acquiring tokens, it is recommended to carefully weighs\n                    all the information and risks detailed in Token owner's Conditions.\n                "
                              ),
                            ]),
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
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = r.exports;
    },
  },
]);
