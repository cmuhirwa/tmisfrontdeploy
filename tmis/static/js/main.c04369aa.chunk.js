(this["webpackJsonpreact-redux-typescript-advance"] =
  this["webpackJsonpreact-redux-typescript-advance"] || []).push([
  [7],
  {
    101: function (e, t, a) {},
    103: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(2),
        r = a.n(n),
        c = a(41),
        s = a.n(c),
        i = a(34),
        o = a(16),
        l = a(69),
        d = a(26),
        u = a(27),
        h = a(28),
        b = a(29),
        p = a(12),
        j = a(10),
        m = a(15),
        x = a(4),
        f = a(64),
        O = a(1),
        _ = ["isAuthenticated", "authenticationPath", "loading"];
      function v(e) {
        var t = e.isAuthenticated,
          a = e.authenticationPath,
          n = e.loading,
          r = Object(f.a)(e, _);
        return !0 === n
          ? Object(O.jsx)("div", { className: "p-5", children: "Hello guys" })
          : t
          ? Object(O.jsx)(m.b, Object(x.a)({}, r))
          : Object(O.jsx)(m.a, { to: { pathname: a } });
      }
      var g = a.p + "static/media/hero-image.9cc9dda8.jpg",
        N = a(11),
        T = a(18),
        S = Object(o.b)(function (e) {
          return { auth: e.auth, basic: e.basic };
        }, {})(function (e) {
          e.auth;
          var t = e.basic,
            a = e.headerSm,
            n = void 0 !== a && a;
          return Object(O.jsx)(O.Fragment, {
            children:
              null !== t.academic_calender &&
              Object(O.jsx)("div", {
                className:
                  "w-full py-8 lg:py-10 bg-white dark:bg-black dark:bg-opacity-60 dark:text-white ",
                children: Object(O.jsx)("div", {
                  className: "container mx-auto",
                  children: Object(O.jsxs)("div", {
                    className: "max-w-6xl mx-auto",
                    children: [
                      Object(O.jsxs)("h2", {
                        className: "".concat(
                          !1 === n ? "text-2xl" : "text-4xl",
                          "  text-center font-light text-primary-dark"
                        ),
                        children: [
                          "Academic calendar",
                          " ",
                          Object(O.jsx)("b", {
                            children: t.academic_calender.academic_year_name,
                          }),
                        ],
                      }),
                      Object(O.jsx)("div", {
                        className: "mt-3 w-full px-6",
                        children: Object(O.jsxs)("table", {
                          className: "table-auto w-full",
                          children: [
                            Object(O.jsx)("thead", {
                              className: "text-left ",
                              children: Object(O.jsxs)("tr", {
                                children: [
                                  Object(O.jsx)("th", { children: "Title" }),
                                  Object(O.jsx)("th", {
                                    children: "Start date",
                                  }),
                                  Object(O.jsx)("th", { children: "End date" }),
                                ],
                              }),
                            }),
                            Object(O.jsx)("tbody", {
                              children: [
                                {
                                  title: "ACADEMIC YEAR",
                                  startdate: Object(T.a)(
                                    t.academic_calender.academic_year_start + ""
                                  ),
                                  enddate: Object(T.a)(
                                    t.academic_calender.academic_year_end
                                  ),
                                },
                                {
                                  title: "POST REQUEST",
                                  startdate: Object(T.a)(
                                    t.academic_calender.post_request_start
                                  ),
                                  enddate: Object(T.a)(
                                    t.academic_calender.post_request_end
                                  ),
                                },
                                {
                                  title: "TRANSFER REQUEST",
                                  startdate: Object(T.a)(
                                    t.academic_calender.transfer_request_start
                                  ),
                                  enddate: Object(T.a)(
                                    t.academic_calender.transfer_request_end
                                  ),
                                },
                                {
                                  title: "INTERNAL TRANSFER ASSESSMENTS",
                                  startdate: Object(T.a)(
                                    t.academic_calender
                                      .internal_transfer_assessment_start
                                  ),
                                  enddate: Object(T.a)(
                                    t.academic_calender
                                      .internal_transfer_assessment_end
                                  ),
                                },
                                {
                                  title: "EXTERNAL TRANSFER ASSESSMENTS",
                                  startdate: Object(T.a)(
                                    t.academic_calender
                                      .external_transfer_assessment_start
                                  ),
                                  enddate: Object(T.a)(
                                    t.academic_calender
                                      .external_transfer_assessment_end
                                  ),
                                },
                                {
                                  title: "TEACHER RECRUITMENT",
                                  startdate: Object(T.a)(
                                    t.academic_calender
                                      .teacher_recruitment_start
                                  ),
                                  enddate: Object(T.a)(
                                    t.academic_calender.teacher_recruitment_end
                                  ),
                                },
                              ].map(function (e, t) {
                                return Object(O.jsxs)(
                                  "tr",
                                  {
                                    className:
                                      "border-t border-blue-500 border-opacity-30 hover:bg-accent-800 hover:bg-opacity-10",
                                    children: [
                                      Object(O.jsx)("td", {
                                        className: "p-2",
                                        children: Object(O.jsx)("b", {
                                          children: e.title,
                                        }),
                                      }),
                                      Object(O.jsxs)("td", {
                                        className: "p-2",
                                        children: [
                                          Object(O.jsx)(N.t, {
                                            className: "inline-block mr-1",
                                          }),
                                          " ",
                                          e.startdate,
                                        ],
                                      }),
                                      Object(O.jsxs)("td", {
                                        className: "p-2 ",
                                        children: [
                                          Object(O.jsx)(N.t, {
                                            className: "inline-block mr-1",
                                          }),
                                          e.enddate,
                                        ],
                                      }),
                                    ],
                                  },
                                  t
                                );
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
          });
        }),
        E = Object(o.b)(function (e) {
          return { auth: e.auth, basic: e.basic };
        }, {})(function (e) {
          var t = e.auth;
          e.basic;
          return Object(O.jsxs)(O.Fragment, {
            children: [
              Object(O.jsxs)("div", {
                className: "flex flex-col md:flex-row",
                children: [
                  Object(O.jsxs)("div", {
                    className:
                      "flex-1 text-white pl-10 p-16 lg:py-36 bg-primary-800 dark:bg-primary-900",
                    children: [
                      Object(O.jsxs)("h1", {
                        className: "text-5xl text-center lg:text-left",
                        children: [
                          "Welcome to ",
                          Object(O.jsx)("b", {
                            title: "Teacher Management Information System",
                            children: "TMIS",
                          }),
                          " ",
                        ],
                      }),
                      Object(O.jsx)("p", {
                        className: "text-xl text-center lg:text-left",
                        children: "Teacher Management Information System",
                      }),
                      !1 === t.isAuthenticated &&
                        Object(O.jsx)("div", {
                          className: "text-center lg:text-left",
                          children: Object(O.jsx)(j.b, {
                            to: "/login",
                            children: Object(O.jsx)("button", {
                              className:
                                "mt-3 bg-accent-800 text-black px-6 py-2 rounded",
                              children: "Login",
                            }),
                          }),
                        }),
                    ],
                  }),
                  Object(O.jsx)("div", {
                    className: "flex-1 hidden lg:block bg-cover",
                    style: { backgroundImage: "url(".concat(g, ")") },
                  }),
                ],
              }),
              Object(O.jsx)("div", {
                className: "w-full",
                children: Object(O.jsx)("div", {
                  className: "container mx-auto lg:px-20 ",
                  children: Object(O.jsx)("div", {
                    className: "flex py-8 lg:py-10 flex-col md:flex-row",
                    children: [
                      {
                        title: "Post Request",
                        icon: N.x,
                        description:
                          "Head Teachers have the options to request a number of posts based on the positions they have at their schools. The DDEs have the interface that shows all the requested posts from schools before they are sent to REB. Then REB get the total number of post requested from all districts grouped by qualifications.",
                      },
                      {
                        title: "Post distribution",
                        icon: N.y,
                        description:
                          "Posts are distributed to districts by REB based on the guidelines of MINECOFIN. Then DDEs also distribute the received post limits to their schools based on their analysis and need by type of position and by school.",
                      },
                      {
                        title: "Teacher placement",
                        icon: N.p,
                        description:
                          "Teachers are placed to the vacant posts. No teacher can be placed if there are no vacant posts. The teacher placement list are generated on monthly basis and be kept in the system for future references.",
                      },
                    ].map(function (e, t) {
                      var a = e.icon;
                      return Object(O.jsxs)(
                        "div",
                        {
                          className:
                            "mb-3 text-center md:text-left md:mb-0 p-4 border shadow border-accent-800 rounded-md flex-1 mx-2 border-opacity-60 dark:text-white bg-white dark:bg-primary-900 flex flex-col",
                          children: [
                            Object(O.jsx)("div", {
                              className: "flex ",
                              children: Object(O.jsx)("div", {
                                className:
                                  "bg-accent-800 mx-auto md:mx-0  bg-opacity-30 rounded p-2",
                                children: Object(O.jsx)(a, {
                                  className:
                                    "text-5xl text-accent-900 dark:text-accent-800 ",
                                }),
                              }),
                            }),
                            Object(O.jsx)("h1", {
                              className:
                                "text-accent-900 dark:text-accent-800 text-xl mt-3 mb-2 font-bold",
                              children: e.title,
                            }),
                            Object(O.jsx)("p", {
                              className: "font-normal opacity-80",
                              children: e.description,
                            }),
                          ],
                        },
                        t
                      );
                    }),
                  }),
                }),
              }),
              Object(O.jsx)(S, {}),
              Object(O.jsx)("div", { className: "py-20 bg-black text-center" }),
            ],
          });
        }),
        A = a(20),
        y = function (e) {
          var t = e.to,
            a = e.title,
            n = e.border,
            r = void 0 !== n && n,
            c = e.exact,
            s = void 0 !== c && c;
          return r
            ? Object(O.jsx)("li", {
                className: "mr-2",
                children: Object(O.jsx)(j.c, {
                  className:
                    "top-navigation action-button py-3 px-4 border-primary-800 dark:border-accent-900 border text-primary-800 dark:text-accent-800 font-bold rounded",
                  to: t,
                  children: a,
                }),
              })
            : Object(O.jsx)("li", {
                className: "mr-2",
                children: Object(O.jsx)(j.c, {
                  exact: s,
                  className:
                    "top-navigation text-primary-800 dark:text-white dark:hover:text-white dark:hover:border-dark-800 dark:hover:border p-3 rounded hover:bg-accent-800 hover:text-black",
                  to: t,
                  children: a,
                }),
              });
        },
        I = a.p + "static/media/logo.4521bd65.jpg",
        w = a(25),
        k = void 0,
        R = function (e) {
          var t = e.title,
            a = e.value;
          return Object(O.jsxs)("div", {
            className:
              "p-2 border-t border-blue-600 border-opacity-20 flex items-center",
            children: [
              Object(O.jsxs)("label", {
                className: "text-md opacity-60 pr-2",
                children: [t, ":"],
              }),
              Object(O.jsx)("h6", { className: "text-md flex-1", children: a }),
            ],
          });
        },
        L = function (e) {
          var t,
            a,
            n,
            r = e.auth,
            c = e.setAccount,
            s = e.Logout,
            i = r.district,
            o = r.school,
            l = r.sector,
            d = r.stakeholder,
            u = r.user;
          return Object(O.jsxs)(O.Fragment, {
            children: [
              Object(O.jsx)("div", {
                className:
                  "fixed top-0 right-0 left-0 bottom-0 z-40 bg-dark-800 opacity-10",
                onClick: c.bind(k, !1),
              }),
              Object(O.jsxs)("div", {
                className:
                  " rounded w-80 bg-white border-blue-500 border mt-1 border-opacity-60 z-50 dark:bg-dark-800 fixed top-29 right-3",
                children: [
                  Object(O.jsxs)("div", {
                    className: "text-center p-2 bg-primary-900 bg-opacity-60",
                    children: [
                      Object(O.jsx)(N.a, {
                        className: "text-8xl text-white mx-auto",
                      }),
                      Object(O.jsx)("h6", {
                        className: "text-center mt-1 text-white",
                        children:
                          null === u || void 0 === u ? void 0 : u.username,
                      }),
                      Object(O.jsxs)("p", {
                        className: "pt-1 font-bold text-lg text-white ",
                        children: [
                          null === r ||
                          void 0 === r ||
                          null === (t = r.user) ||
                          void 0 === t
                            ? void 0
                            : t.first_name,
                          " ",
                          null === r ||
                          void 0 === r ||
                          null === (a = r.user) ||
                          void 0 === a
                            ? void 0
                            : a.first_name,
                        ],
                      }),
                      Object(O.jsx)("label", {
                        className: "text-white bg-blue-600 px-2 py-1 rounded",
                        children:
                          null === (n = r.role) || void 0 === n
                            ? void 0
                            : n.role,
                      }),
                    ],
                  }),
                  Object(O.jsxs)("div", {
                    className: "flex-1",
                    children: [
                      null !== o &&
                        Object(O.jsx)("div", {
                          className:
                            " border rounded border-blue-600 border-opacity-50 m-1 mt-2",
                          children: Object(O.jsx)(R, {
                            title: "School",
                            value:
                              null === o || void 0 === o
                                ? void 0
                                : o.school_name,
                          }),
                        }),
                      i &&
                        Object(O.jsx)("div", {
                          className:
                            " border rounded border-blue-600 border-opacity-50 m-1 mt-2",
                          children: Object(O.jsx)(R, {
                            title: "District",
                            value: i.district_name,
                          }),
                        }),
                      l &&
                        Object(O.jsx)("div", {
                          className:
                            " border rounded border-blue-600 border-opacity-50 m-1 mt-2",
                          children: Object(O.jsx)(R, {
                            title: "Sector",
                            value: l.sector_name,
                          }),
                        }),
                      d &&
                        Object(O.jsx)("div", {
                          className:
                            " border rounded border-blue-600 border-opacity-50 m-1 mt-2",
                          children: Object(O.jsx)(R, {
                            title: "School",
                            value: d.sector_name,
                          }),
                        }),
                    ],
                  }),
                  Object(O.jsxs)("div", {
                    className: "p-2",
                    children: [
                      Object(O.jsx)(j.c, {
                        to: "/profile",
                        className: "mb-2 block",
                        exact: !0,
                        children: Object(O.jsx)(w.a, {
                          theme: "primary",
                          full: !0,
                          children: "Profile",
                        }),
                      }),
                      Object(O.jsx)(w.a, {
                        theme: "danger-light",
                        full: !0,
                        onClick: s,
                        children: "Logout",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        P = Object(o.b)(
          function (e) {
            return { app: e.app, auth: e.auth };
          },
          { FC_SideNav: p.S, FC_Logout: p.L }
        )(function (e) {
          var t,
            a,
            r,
            c = e.app,
            s = e.auth,
            i = e.FC_SideNav,
            o = e.FC_Logout,
            l = Object(n.useState)(!1),
            d = Object(A.a)(l, 2),
            u = d[0],
            h = d[1];
          return Object(O.jsxs)(O.Fragment, {
            children: [
              Object(O.jsxs)("nav", {
                className:
                  "bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-gray-700 dark:text-white px-3 py-1  flex items-center sticky top-0 z-50",
                children: [
                  Object(O.jsxs)("div", {
                    className: "flex flex-1 items-center",
                    children: [
                      !0 === s.isAuthenticated &&
                        Object(O.jsx)("div", {
                          className: "mr-2 lg:hidden",
                          children: Object(O.jsx)("button", {
                            onClick: i.bind(k, !c.side_menu),
                            className:
                              " border-primary-900 text-primary-900 dark:border-primary-100 border-2 p-0.5 rounded dark:text-white",
                            children: c.side_menu
                              ? Object(O.jsx)(N.u, { className: "text-3xl" })
                              : Object(O.jsx)(N.q, { className: "text-3xl" }),
                          }),
                        }),
                      Object(O.jsx)("div", {
                        className: "h-14 flex items-center",
                        children: s.isAuthenticated
                          ? Object(O.jsx)("h1", {
                              title: "Teacher Management Information System",
                              className:
                                "text-4xl text-primary-800 font-bold dark:text-primary-dark",
                              children: "TMIS",
                            })
                          : Object(O.jsx)("img", {
                              alt: "TMIS",
                              className: "h-14",
                              src: I,
                            }),
                      }),
                    ],
                  }),
                  Object(O.jsx)("div", {
                    className: "",
                    children:
                      !0 === s.isAuthenticated && null !== s.user
                        ? Object(O.jsxs)("div", {
                            onClick: h.bind(k, !u),
                            className:
                              "flex items-center hover:bg-blue-100 dark:hover:bg-blue-100 pl-0.5 cursor-pointer dark:hover:bg-opacity-10 pr-3 rounded",
                            children: [
                              Object(O.jsx)(N.a, {
                                className: "text-5xl text-accent-900",
                              }),
                              Object(O.jsxs)("div", {
                                className: "dark:text-white",
                                children: [
                                  Object(O.jsx)("h3", {
                                    className: "text-lg",
                                    children:
                                      null === (t = s.user) || void 0 === t
                                        ? void 0
                                        : t.last_name,
                                  }),
                                  null !== s.role &&
                                    Object(O.jsxs)("h3", {
                                      className:
                                        "text-primary-dark -mt-1 text-sm",
                                      children: [
                                        null === (a = s.role) || void 0 === a
                                          ? void 0
                                          : a.role,
                                        " ",
                                        s.school &&
                                          Object(O.jsxs)("b", {
                                            children: [
                                              ":",
                                              null === (r = s.school) ||
                                              void 0 === r
                                                ? void 0
                                                : r.school_name,
                                            ],
                                          }),
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          })
                        : Object(O.jsxs)("ul", {
                            className: "flex",
                            children: [
                              Object(O.jsx)(y, {
                                title: "Home",
                                to: "/",
                                exact: !0,
                              }),
                              Object(O.jsx)(y, {
                                title: "Login",
                                border: !0,
                                to: "/login",
                              }),
                            ],
                          }),
                  }),
                ],
              }),
              s.isAuthenticated &&
                u &&
                null !== s.user &&
                null !== s.role &&
                Object(O.jsx)(O.Fragment, {
                  children: Object(O.jsx)(L, {
                    auth: s,
                    setAccount: h,
                    Logout: function () {
                      o(), h(!1);
                    },
                  }),
                }),
            ],
          });
        }),
        C = a(7),
        D = a(61),
        q = a(67),
        M = a(66),
        F = a(36),
        U = Object(o.b)(
          function (e) {
            return { app: e.app, auth: e.auth };
          },
          { FC_SideNav: p.S }
        )(function (e) {
          var t,
            a = e.app,
            n = e.auth,
            r = e.FC_SideNav,
            c = null === (t = n.role) || void 0 === t ? void 0 : t.access;
          return !1 === n.isAuthenticated
            ? null
            : Object(O.jsxs)("nav", {
                className:
                  "overflow-auto\n        bg-white dark:bg-dark-800 dark:text-white \n        pr-3 pl-0 py-1 border-gray-200 dark:border-gray-700 \n        border-r p-2 pt-20 fixed bottom-0 ".concat(
                    !0 === a.side_menu
                      ? "lg:left-0 left-0"
                      : "-left-80 lg:left-0",
                    "  top-0 z-40 w-60\n    "
                  ),
                children: [
                  Object(O.jsx)("img", {
                    src: I,
                    alt: "Janvier",
                    className: "w-5/6 block mx-auto rounded",
                  }),
                  Object(O.jsxs)("div", {
                    className: "mt-8 mb-1 side-navigation-container",
                    onClick: r.bind(undefined, !1),
                    children: [
                      Object(O.jsxs)(j.c, {
                        to: "/dashboard",
                        className: "navigation-item ",
                        exact: !0,
                        children: [
                          Object(O.jsx)("div", {
                            className: "mr-1",
                            children: Object(O.jsx)(N.i, {
                              className: "text-2xl",
                            }),
                          }),
                          Object(O.jsx)("span", {
                            className: "flex-1",
                            children: "Dashboard",
                          }),
                        ],
                      }),
                      Object(C.c)(c, C.b.ASSIGN_SCHOOL_POSITION) &&
                        Object(O.jsxs)(j.c, {
                          to: "/assign-school-position",
                          className: "navigation-item",
                          exact: !0,
                          children: [
                            Object(O.jsx)("div", {
                              className: "mr-1",
                              children: Object(O.jsx)(N.r, {
                                className: "text-2xl",
                              }),
                            }),
                            Object(O.jsx)("span", {
                              className: "flex-1",
                              children: "Assign school position",
                            }),
                          ],
                        }),
                      Object(C.c)(c, C.b.STUDY_HIERARCHY) &&
                        Object(O.jsxs)(j.c, {
                          to: "/study-hierarchy",
                          className: "navigation-item",
                          exact: !0,
                          children: [
                            Object(O.jsx)("div", {
                              className: "mr-1",
                              children: Object(O.jsx)(M.a, {
                                className: "text-2xl",
                              }),
                            }),
                            Object(O.jsx)("span", {
                              className: "flex-1",
                              children: "Assign school subjects",
                            }),
                          ],
                        }),
                      Object(C.c)(c, C.b.VIEW_STAFF_LIST) &&
                        Object(O.jsxs)(j.c, {
                          to: "/staff-list",
                          className: "navigation-item ",
                          exact: !0,
                          children: [
                            Object(O.jsx)("div", {
                              className: "mr-1",
                              children: Object(O.jsx)(N.E, {
                                className: "text-2xl",
                              }),
                            }),
                            Object(O.jsx)("span", {
                              className: "flex-1",
                              children: "Staff list",
                            }),
                          ],
                        }),
                      Object(C.c)(c, C.b.HEADTEACHER_VIEW_PLACEMENT_LIST) &&
                        Object(O.jsxs)(j.c, {
                          to: "/placement-list-ht",
                          className: "navigation-item ",
                          exact: !0,
                          children: [
                            Object(O.jsx)("div", {
                              className: "mr-1",
                              children: Object(O.jsx)(N.C, {
                                className: "text-2xl",
                              }),
                            }),
                            Object(O.jsx)("span", {
                              className: "flex-1",
                              children: "Placement List",
                            }),
                          ],
                        }),
                      Object(C.c)(c, C.b.VIEW_REPORTS) &&
                        Object(O.jsxs)(j.c, {
                          to: "/report-placement",
                          className: "navigation-item",
                          exact: !0,
                          children: [
                            Object(O.jsx)("div", {
                              className: "mr-1",
                              children: Object(O.jsx)(N.E, {
                                className: "text-2xl",
                              }),
                            }),
                            Object(O.jsx)("span", {
                              className: "flex-1",
                              children: "Placement report",
                            }),
                          ],
                        }),
                      Object(C.c)(c, C.b.STAFF_SUSPENSION) &&
                        Object(O.jsxs)(j.c, {
                          to: "/hr-suspension",
                          className: "navigation-item",
                          exact: !0,
                          children: [
                            Object(O.jsx)("div", {
                              className: "mr-1",
                              children: Object(O.jsx)(N.E, {
                                className: "text-2xl",
                              }),
                            }),
                            Object(O.jsx)("span", {
                              className: "flex-1",
                              children: "Staff Suspensions",
                            }),
                          ],
                        }),
                      Object(C.c)(c, C.b.STAFF_HT_TERMINATION) &&
                        Object(O.jsxs)(j.c, {
                          to: "/ht-termination",
                          className: "navigation-item",
                          exact: !0,
                          children: [
                            Object(O.jsx)("div", {
                              className: "mr-1",
                              children: Object(O.jsx)(N.E, {
                                className: "text-2xl",
                              }),
                            }),
                            Object(O.jsx)("span", {
                              className: "flex-1",
                              children: "Staff Terminations",
                            }),
                          ],
                        }),
                      Object(C.c)(c, C.b.DDE_REQUEST) &&
                        Object(O.jsxs)(j.c, {
                          to: "/district/request",
                          className: "navigation-item",
                          exact: !0,
                          children: [
                            Object(O.jsx)("div", {
                              className: "mr-1",
                              children: Object(O.jsx)(N.m, {
                                className: "text-2xl",
                              }),
                            }),
                            Object(O.jsx)("span", {
                              className: "flex-1",
                              children: "School post requests",
                            }),
                          ],
                        }),
                      Object(O.jsxs)(j.c, {
                        to: "/change-password",
                        className: "navigation-item",
                        exact: !0,
                        children: [
                          Object(O.jsx)("div", {
                            className: "mr-1",
                            children: Object(O.jsx)(F.e, {
                              className: "text-2xl",
                            }),
                          }),
                          Object(O.jsx)("span", {
                            className: "flex-1",
                            children: "Change password",
                          }),
                        ],
                      }),
                      Object(C.c)(c, C.b.DISABLED_USERS) &&
                        Object(O.jsxs)(j.c, {
                          to: "/disabled-users",
                          className: "navigation-item",
                          exact: !0,
                          children: [
                            Object(O.jsx)("div", {
                              className: "mr-1",
                              children: Object(O.jsx)(N.s, {
                                className: "text-2xl",
                              }),
                            }),
                            Object(O.jsx)("span", {
                              className: "flex-1",
                              children: "Disabled users",
                            }),
                          ],
                        }),
                      Object(C.c)(c, C.b.REB_DISTRIBUTION) &&
                        Object(O.jsxs)(j.c, {
                          to: "/country-distribution",
                          className: "navigation-item ",
                          exact: !0,
                          children: [
                            Object(O.jsx)("div", {
                              className: "mr-1",
                              children: Object(O.jsx)(N.l, {
                                className: "text-2xl",
                              }),
                            }),
                            Object(O.jsx)("span", {
                              className: "flex-1",
                              children: "REB Distribution",
                            }),
                          ],
                        }),
                      Object(C.c)(c, C.b.DDE_DISTRIBUTION) &&
                        Object(O.jsxs)(j.c, {
                          to: "/district-distribution",
                          className: "navigation-item ",
                          exact: !0,
                          children: [
                            Object(O.jsx)("div", {
                              className: "mr-1",
                              children: Object(O.jsx)(N.l, {
                                className: "text-2xl",
                              }),
                            }),
                            Object(O.jsx)("span", {
                              className: "flex-1",
                              children: "Posts Distribution",
                            }),
                          ],
                        }),
                      Object(C.c)(c, C.b.ADD_COUNTRY_POST_LIMITATION) &&
                        Object(O.jsxs)(j.c, {
                          to: "/post-limits",
                          className: "navigation-item ",
                          exact: !0,
                          children: [
                            Object(O.jsx)("div", {
                              className: "mr-1",
                              children: Object(O.jsx)(N.z, {
                                className: "text-2xl",
                              }),
                            }),
                            Object(O.jsx)("span", {
                              className: "flex-1",
                              children: "Posts Limits",
                            }),
                          ],
                        }),
                      Object(C.c)(c, C.b.VIEW_SCHOOLS_LIST) &&
                        Object(O.jsxs)(j.c, {
                          to: "/schools-list",
                          className: "navigation-item ",
                          exact: !0,
                          children: [
                            Object(O.jsx)("div", {
                              className: "mr-1",
                              children: Object(O.jsx)(N.C, {
                                className: "text-2xl",
                              }),
                            }),
                            Object(O.jsx)("span", {
                              className: "flex-1",
                              children: "District schools",
                            }),
                          ],
                        }),
                      Object(C.c)(c, C.b.HEAD_TEACHER_REQUEST) &&
                        Object(O.jsxs)(j.c, {
                          to: "/headteacher/request",
                          className: "navigation-item ",
                          exact: !0,
                          children: [
                            Object(O.jsx)("div", {
                              className: "mr-1",
                              children: Object(O.jsx)(N.l, {
                                className: "text-2xl",
                              }),
                            }),
                            Object(O.jsx)("span", {
                              className: "flex-1",
                              children: "Head Teacher request",
                            }),
                          ],
                        }),
                      Object(C.c)(c, C.b.REQUEST_TRANSFER) &&
                        Object(O.jsxs)(j.c, {
                          to: "/teacher/transfer",
                          className: "navigation-item",
                          exact: !0,
                          children: [
                            Object(O.jsx)("div", {
                              className: "mr-1",
                              children: Object(O.jsx)(N.B, {
                                className: "text-2xl",
                              }),
                            }),
                            Object(O.jsx)("span", {
                              className: "flex-1",
                              children: "Request Transfer",
                            }),
                          ],
                        }),
                      Object(C.c)(c, C.b.HT_REQUEST_POSTS) &&
                        Object(O.jsxs)(j.c, {
                          to: "/headteacher/request",
                          className: "navigation-item",
                          exact: !0,
                          children: [
                            Object(O.jsx)("div", {
                              className: "mr-1",
                              children: Object(O.jsx)(D.a, {
                                className: "text-2xl",
                              }),
                            }),
                            Object(O.jsx)("span", {
                              className: "flex-1",
                              children: "Posts requests",
                            }),
                          ],
                        }),
                      Object(C.c)(c, C.b.DDE_DISTRIBUTION) &&
                        Object(O.jsxs)(j.c, {
                          to: "/dde/transfer",
                          className: "navigation-item",
                          exact: !0,
                          children: [
                            Object(O.jsx)("div", {
                              className: "mr-1",
                              children: Object(O.jsx)(q.a, {
                                className: "text-2xl",
                              }),
                            }),
                            Object(O.jsx)("span", {
                              className: "flex-1",
                              children: "Transfers requests",
                            }),
                          ],
                        }),
                      Object(C.c)(c, C.b.LIST_OF_TAMINATE) &&
                        Object(O.jsxs)(j.c, {
                          to: "/suspended",
                          className: "navigation-item",
                          exact: !0,
                          children: [
                            Object(O.jsx)("div", {
                              className: "mr-1",
                              children: Object(O.jsx)(N.l, {
                                className: "text-2xl",
                              }),
                            }),
                            Object(O.jsx)("span", {
                              className: "flex-1",
                              children: "Suspended/Terminated",
                            }),
                          ],
                        }),
                      Object(C.c)(c, C.b.SET_ACADEMIC_CALENDAR) &&
                        Object(O.jsxs)(j.c, {
                          to: "/academic",
                          className: "navigation-item ",
                          exact: !0,
                          children: [
                            Object(O.jsx)("div", {
                              className: "mr-1",
                              children: Object(O.jsx)(N.l, {
                                className: "text-2xl",
                              }),
                            }),
                            Object(O.jsx)("span", {
                              className: "flex-1",
                              children: "Academic",
                            }),
                          ],
                        }),
                      Object(C.c)(c, C.b.DDE_VIEW_PLACEMENT_LIST) &&
                        Object(O.jsxs)(j.c, {
                          to: "/placement-list-dde",
                          className: "navigation-item ",
                          exact: !0,
                          children: [
                            Object(O.jsx)("div", {
                              className: "mr-1",
                              children: Object(O.jsx)(N.C, {
                                className: "text-2xl",
                              }),
                            }),
                            Object(O.jsx)("span", {
                              className: "flex-1",
                              children: "Placement List",
                            }),
                          ],
                        }),
                      Object(C.c)(c, C.b.TEACHER_PRINT_LETTERS) &&
                        Object(O.jsxs)(j.c, {
                          to: "/school-print-letters",
                          className: "navigation-item ",
                          exact: !0,
                          children: [
                            Object(O.jsx)("div", {
                              className: "mr-1",
                              children: Object(O.jsx)(N.C, {
                                className: "text-2xl",
                              }),
                            }),
                            Object(O.jsx)("span", {
                              className: "flex-1",
                              children: "Teacher Print letters",
                            }),
                          ],
                        }),
                      Object(C.c)(c, C.b.STAFF_TERMINATION) &&
                        Object(O.jsxs)(j.c, {
                          to: "/hr-termination",
                          className: "navigation-item",
                          exact: !0,
                          children: [
                            Object(O.jsx)("div", {
                              className: "mr-1",
                              children: Object(O.jsx)(N.E, {
                                className: "text-2xl",
                              }),
                            }),
                            Object(O.jsx)("span", {
                              className: "flex-1",
                              children: "Staff Terminations",
                            }),
                          ],
                        }),
                      Object(C.c)(c, C.b.STAFF_HT_SUSPENSION) &&
                        Object(O.jsxs)(j.c, {
                          to: "/ht-suspension",
                          className: "navigation-item",
                          exact: !0,
                          children: [
                            Object(O.jsx)("div", {
                              className: "mr-1",
                              children: Object(O.jsx)(N.E, {
                                className: "text-2xl",
                              }),
                            }),
                            Object(O.jsx)("span", {
                              className: "flex-1",
                              children: "Staff Suspension",
                            }),
                          ],
                        }),
                      Object(C.c)(c, C.b.SYSTEM_USERS_LIST) &&
                        Object(O.jsxs)(j.c, {
                          to: "/admin-system-users-list",
                          className: "navigation-item",
                          exact: !0,
                          children: [
                            Object(O.jsx)("div", {
                              className: "mr-1",
                              children: Object(O.jsx)(N.o, {
                                className: "text-2xl",
                              }),
                            }),
                            Object(O.jsx)("span", {
                              className: "flex-1",
                              children: "System users",
                            }),
                          ],
                        }),
                      Object(C.c)(c, C.b.REGISTER_SYSTEM_USER) &&
                        Object(O.jsxs)(j.c, {
                          to: "/register-administration-staff",
                          className: "navigation-item",
                          exact: !0,
                          children: [
                            Object(O.jsx)("div", {
                              className: "mr-1",
                              children: Object(O.jsx)(N.b, {
                                className: "text-2xl",
                              }),
                            }),
                            Object(O.jsx)("span", {
                              className: "flex-1",
                              children: "Register administration staff",
                            }),
                          ],
                        }),
                      Object(O.jsxs)(j.c, {
                        to: "/register-for-validation",
                        className: "navigation-item",
                        exact: !0,
                        children: [
                          Object(O.jsx)("div", {
                            className: "mr-1",
                            children: Object(O.jsx)(N.b, {
                              className: "text-2xl",
                            }),
                          }),
                          Object(O.jsx)("span", {
                            className: "flex-1",
                            children: "Create a new staff",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
        }),
        H = a(30),
        G = a(39),
        Y = [
          {
            icon: N.k,
            title: "Post limits",
            description: "Post limits",
            to: "/post-limits",
            access: C.b.ADD_COUNTRY_POST_LIMITATION,
          },
          {
            icon: N.k,
            to: "",
            title: "School staff",
            description: "Post limits",
            access: C.b.ADD_COUNTRY_POST_LIMITATION,
          },
          {
            to: "",
            icon: N.k,
            title: "Schools",
            description: "Post limits",
            access: C.b.ADD_COUNTRY_POST_LIMITATION,
          },
          {
            to: "",
            icon: N.k,
            title: "School staff",
            description: "Post limits",
            access: C.b.ADD_COUNTRY_POST_LIMITATION,
          },
          {
            to: "",
            icon: N.k,
            title: "Schools",
            description: "Post limits",
            access: C.b.ADD_COUNTRY_POST_LIMITATION,
          },
          {
            to: "",
            icon: N.k,
            title: "School staff",
            description: "Post limits",
            access: C.b.ADD_COUNTRY_POST_LIMITATION,
          },
          {
            to: "",
            icon: N.k,
            title: "Schools",
            description: "Post limits",
            access: C.b.ADD_COUNTRY_POST_LIMITATION,
          },
        ],
        z = Object(o.b)(function (e) {
          return { auth: e.auth };
        }, {})(function (e) {
          var t,
            a = e.auth;
          if (!a.user)
            return Object(O.jsx)("div", {
              className: "p-4 text-center",
              children: "No profile found!",
            });
          var n = null === (t = a.role) || void 0 === t ? void 0 : t.access;
          return Object(O.jsxs)(H.a, {
            className: "animate__animated animate__zoomIn ",
            children: [
              Object(O.jsx)("div", {
                className: "pt-2",
                children: Object(O.jsxs)(G.a, {
                  className: "text-center font-light p-3",
                  children: [
                    "Welcome ",
                    Object(O.jsx)("b", { children: a.user.full_name }),
                  ],
                }),
              }),
              Object(O.jsx)("div", {
                className:
                  "animate__animated animate__fadeIn border mb-2 rounded",
                children: Object(O.jsx)(S, { headerSm: !1 }),
              }),
              Object(O.jsx)("div", {
                className: "mt-2  flex-wrap hidden ",
                children: Y.map(function (e, t) {
                  var a = e.icon;
                  return Object(C.c)(n, e.access)
                    ? Object(O.jsx)(
                        "div",
                        {
                          className: "w-1/3 lg:w-1/5  animate__faster ",
                          children: Object(O.jsx)(j.b, {
                            to: e.to,
                            children: Object(O.jsxs)(
                              "div",
                              {
                                className:
                                  "rounded dark:bg-accent-900 bg-accent-900 bg-opacity-50 dark:text-accent-800 m-2 text-black hover:bg-opacity-70 py-4 text-center dark:bg-opacity-20 p-2",
                                children: [
                                  Object(O.jsx)(a, {
                                    className: "text-6xl inline-block",
                                  }),
                                  Object(O.jsx)("h4", {
                                    className: "font-bold text-lg",
                                    children: e.title,
                                  }),
                                  e.description &&
                                    Object(O.jsx)("h5", {
                                      className: "font-bold text-xs mt-1",
                                      children: e.description,
                                    }),
                                ],
                              },
                              t
                            ),
                          }),
                        },
                        t
                      )
                    : null;
                }),
              }),
            ],
          });
        }),
        B = function () {
          return Object(O.jsxs)("div", {
            className:
              "grid grid-cols-6 gap-4 animate-pulse container mx-auto p-8 text-center",
            children: [
              Object(O.jsxs)("div", {
                className: "col-span-4  flex-1",
                children: [
                  Object(O.jsx)("div", {
                    className:
                      "bg-gray-300 dark:bg-dark-800 rounded h-64 flex items-center justify-center",
                    children: Object(O.jsx)("h1", {
                      className: "text-5xl text-gray-500 font-bold",
                      children: "Loading...",
                    }),
                  }),
                  Object(O.jsx)("div", {
                    className:
                      "bg-gray-300 dark:bg-dark-800 h-10 mt-3 w-2/3 rounded",
                  }),
                  Object(O.jsx)("div", {
                    className: "bg-gray-300 dark:bg-dark-800 h-4 mt-3 rounded",
                  }),
                  Object(O.jsx)("div", {
                    className: "bg-gray-300 dark:bg-dark-800 h-4 mt-3 rounded",
                  }),
                  Object(O.jsx)("div", {
                    className: "bg-gray-300 dark:bg-dark-800 h-4 mt-3 rounded",
                  }),
                  Object(O.jsx)("div", {
                    className: "bg-gray-300 dark:bg-dark-800 h-4 mt-3 rounded",
                  }),
                  Object(O.jsx)("div", {
                    className: "bg-gray-300 dark:bg-dark-800 h-4 mt-3 rounded",
                  }),
                  Object(O.jsx)("div", {
                    className: "bg-gray-300 dark:bg-dark-800 h-4 mt-9 rounded",
                  }),
                  Object(O.jsx)("div", {
                    className: "bg-gray-300 dark:bg-dark-800 h-4 mt-3 rounded",
                  }),
                  Object(O.jsx)("div", {
                    className: "bg-gray-300 dark:bg-dark-800 h-4 mt-3 rounded",
                  }),
                  Object(O.jsx)("div", {
                    className: "bg-gray-300 dark:bg-dark-800 h-4 mt-3 rounded",
                  }),
                ],
              }),
              Object(O.jsxs)("div", {
                className: "col-span-2 flex-1",
                children: [
                  Object(O.jsx)("div", {
                    className: "bg-gray-300 dark:bg-dark-800 h-80 rounded",
                  }),
                  Object(O.jsx)("div", {
                    className: "bg-gray-300 dark:bg-dark-800 h-80 rounded mt-4",
                  }),
                ],
              }),
            ],
          });
        },
        V = a(13),
        W = a(48),
        Q = a(5),
        J = a.n(Q),
        X = a(51),
        K = a(8),
        $ = Object(o.b)(function (e) {
          return { auth: e.auth };
        }, {})(function () {
          var e = new Date().getTime(),
            t = Object(n.useState)([]),
            a = Object(A.a)(t, 2),
            r = a[0],
            c = a[1];
          return (
            Object(n.useEffect)(function () {
              Object(K.a)(),
                J.a
                  .get("".concat(V.c, "/academiccalendars"))
                  .then(function (e) {
                    return e.data;
                  })
                  .then(function (e) {
                    return c(e);
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
            }, []),
            Object(O.jsx)(X.a, {
              title: "ACADEMI YEAR CALENDAR",
              subTitle: "Calendar",
              children: Object(O.jsxs)("div", {
                className: "bg-white shadow-lg rounded-md p-5",
                children: [
                  Object(O.jsx)(j.b, {
                    to: "/academic/new",
                    children: Object(O.jsx)("button", {
                      className:
                        " text-center bg-accent-800 hover:bg-accent-900 rounded-md p-2 m-2",
                      children: "Add New Calendar",
                    }),
                  }),
                  Object(O.jsxs)("table", {
                    className: "w-full text-left",
                    children: [
                      Object(O.jsx)("thead", {
                        children: Object(O.jsxs)("tr", {
                          children: [
                            Object(O.jsx)("th", { children: "Name" }),
                            Object(O.jsx)("th", { children: "Start Date" }),
                            Object(O.jsx)("th", { children: "End Date" }),
                            Object(O.jsx)("th", { children: "Status" }),
                          ],
                        }),
                      }),
                      Object(O.jsx)("tbody", {
                        children: r.map(function (t, a) {
                          var r = new Date(t.academic_year_end).getTime(),
                            c = new Date(t.transfer_request_end).getTime(),
                            s = new Date(
                              t.internal_transfer_assessment_end
                            ).getTime(),
                            i = new Date(
                              t.external_transfer_assessment_end
                            ).getTime(),
                            o = new Date(t.post_request_end).getTime(),
                            l = new Date(t.teacher_recruitment_end).getTime();
                          return Object(O.jsxs)(
                            n.Fragment,
                            {
                              children: [
                                Object(O.jsx)("tr", {
                                  children: Object(O.jsx)("td", {
                                    className: "p-4",
                                    colSpan: 4,
                                  }),
                                }),
                                Object(O.jsx)(
                                  "tr",
                                  {
                                    children: Object(O.jsx)("th", {
                                      className:
                                        "p-2 border text-center bg-blue-200",
                                      colSpan: 4,
                                      children: t.academic_year_name,
                                    }),
                                  },
                                  t.academic_year_name
                                ),
                                Object(O.jsxs)(
                                  "tr",
                                  {
                                    className:
                                      "border rounded hover:bg-blue-100",
                                    children: [
                                      Object(O.jsx)("th", {
                                        className: "p-2 border capitalize",
                                        children: "Acadmic",
                                      }),
                                      Object(O.jsx)("td", {
                                        className: "p-2 border",
                                        children: t.academic_year_start,
                                      }),
                                      Object(O.jsx)("td", {
                                        className: "p-2 border",
                                        children: t.academic_year_end,
                                      }),
                                      Object(O.jsx)("td", {
                                        className: "p-2 border",
                                        children: r > e ? "Active" : "Ended",
                                      }),
                                    ],
                                  },
                                  "Acadmic"
                                ),
                                Object(O.jsxs)(
                                  "tr",
                                  {
                                    className:
                                      "border rounded hover:bg-blue-100",
                                    children: [
                                      Object(O.jsx)("th", {
                                        className: "p-2 border capitalize",
                                        children: "Request Post",
                                      }),
                                      Object(O.jsx)("td", {
                                        className: "p-2 border",
                                        children: t.post_request_start,
                                      }),
                                      Object(O.jsx)("td", {
                                        className: "p-2 border",
                                        children: t.post_request_end,
                                      }),
                                      Object(O.jsx)("td", {
                                        className: "p-2 border",
                                        children: o > e ? "Active" : "Ended",
                                      }),
                                    ],
                                  },
                                  "Request"
                                ),
                                Object(O.jsxs)(
                                  "tr",
                                  {
                                    className:
                                      "border rounded hover:bg-blue-100",
                                    children: [
                                      Object(O.jsx)("th", {
                                        className: "p-2 border capitalize",
                                        children: "transfer request",
                                      }),
                                      Object(O.jsx)("td", {
                                        className: "p-2 border",
                                        children: t.transfer_request_start,
                                      }),
                                      Object(O.jsx)("td", {
                                        className: "p-2 border",
                                        children: t.transfer_request_end,
                                      }),
                                      Object(O.jsx)("td", {
                                        className: "p-2 border",
                                        children: c > e ? "Active" : "Ended",
                                      }),
                                    ],
                                  },
                                  "transfer_request"
                                ),
                                Object(O.jsxs)(
                                  "tr",
                                  {
                                    className:
                                      "border rounded hover:bg-blue-100",
                                    children: [
                                      Object(O.jsx)("th", {
                                        className: "p-2 border capitalize",
                                        children: "internal assessment",
                                      }),
                                      Object(O.jsx)("td", {
                                        className: "p-2 border",
                                        children:
                                          t.internal_transfer_assessment_start,
                                      }),
                                      Object(O.jsx)("td", {
                                        className: "p-2 border",
                                        children:
                                          t.internal_transfer_assessment_end,
                                      }),
                                      Object(O.jsx)("td", {
                                        className: "p-2 border",
                                        children: s > e ? "Active" : "Ended",
                                      }),
                                    ],
                                  },
                                  "internal_assessment"
                                ),
                                Object(O.jsxs)(
                                  "tr",
                                  {
                                    className:
                                      "border rounded hover:bg-blue-100",
                                    children: [
                                      Object(O.jsx)("th", {
                                        className: "p-2 border capitalize",
                                        children: "external assessment",
                                      }),
                                      Object(O.jsx)("td", {
                                        className: "p-2 border",
                                        children:
                                          t.external_transfer_assessment_start,
                                      }),
                                      Object(O.jsx)("td", {
                                        className: "p-2 border",
                                        children:
                                          t.external_transfer_assessment_end,
                                      }),
                                      Object(O.jsx)("td", {
                                        className: "p-2 border",
                                        children: i > e ? "Active" : "Ended",
                                      }),
                                    ],
                                  },
                                  "external_assessment"
                                ),
                                Object(O.jsxs)(
                                  "tr",
                                  {
                                    className:
                                      "border rounded hover:bg-blue-100",
                                    children: [
                                      Object(O.jsx)("th", {
                                        className: "p-2 border capitalize",
                                        children: "teacher recruitment",
                                      }),
                                      Object(O.jsx)("td", {
                                        className: "p-2 border",
                                        children: t.teacher_recruitment_start,
                                      }),
                                      Object(O.jsx)("td", {
                                        className: "p-2 border",
                                        children: t.teacher_recruitment_end,
                                      }),
                                      Object(O.jsx)("td", {
                                        className: "p-2 border",
                                        children: l > e ? "Active" : "Ended",
                                      }),
                                    ],
                                  },
                                  "teacher_recruitment_start"
                                ),
                              ],
                            },
                            a
                          );
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        }),
        Z = a(6),
        ee = a(40),
        te = a(3),
        ae = a.n(te),
        ne = a(24),
        re = Object(o.b)(function (e) {
          return { auth: e.auth, basic: e.basic };
        }, {})(function (e) {
          var t = e.auth,
            a = e.basic,
            r = Object(n.useState)(""),
            c = Object(A.a)(r, 2),
            s = c[0],
            i = c[1],
            o = Object(n.useState)(""),
            l = Object(A.a)(o, 2),
            d = l[0],
            u = l[1],
            h = Object(n.useState)(!1),
            b = Object(A.a)(h, 2),
            p = b[0],
            j = b[1],
            m = Object(n.useState)({ target: null, msg: "" }),
            f = Object(A.a)(m, 2),
            _ = f[0],
            v = f[1],
            g = Object(n.useState)(null),
            N = Object(A.a)(g, 2),
            S = N[0],
            E = N[1],
            y = Object(n.useState)({
              post_request_id: "",
              district_code: "",
              dde_post_request: "",
              dde_post_request_comment: "",
            }),
            I = Object(A.a)(y, 2),
            w = I[0],
            k = I[1],
            R = function () {
              if (S) {
                var e = S.academic_distributed;
                return Object(T.f)(e, d);
              }
              return [];
            },
            L = function (e) {
              var t = [];
              if (null !== S && void 0 !== S) {
                var a,
                  n = Object(ee.a)(S.academic_distributed);
                try {
                  for (n.s(); !(a = n.n()).done; ) {
                    var r = a.value;
                    r.post_request_id === e.post_request_id
                      ? t.push({
                          academic_year_id: r.academic_year_id,
                          archive: r.archive,
                          archived_by: r.archived_by,
                          archived_date: r.archived_date,
                          created_by: r.created_by,
                          created_date: r.created_date,
                          dde_distribution_comment: r.dde_distribution_comment,
                          dde_id_distribution: r.dde_id_distribution,
                          dde_id_request: r.dde_id_request,
                          dde_post_distribution: r.dde_post_distribution,
                          dde_post_request: e.dde_post_request,
                          dde_post_request_comment: e.dde_post_request_comment,
                          district_code: r.district_code,
                          existing_post: r.existing_post,
                          head_teacher_id: r.head_teacher_id,
                          head_teacher_post_request:
                            r.head_teacher_post_request,
                          head_teacher_reason_id: r.head_teacher_reason_id,
                          position_code: r.position_code,
                          position_name: r.position_name,
                          post_request_id: r.post_request_id,
                          qualification_id: r.qualification_id,
                          qualification_name: r.qualification_name,
                          school_code: r.school_code,
                          school_name: r.school_name,
                          updated_by: r.updated_by,
                          updated_date: r.updated_date,
                          reason_name: r.reason_name,
                        })
                      : t.push(r);
                  }
                } catch (c) {
                  n.e(c);
                } finally {
                  n.f();
                }
              }
              null !== S &&
                void 0 !== S &&
                S.academic_distributed.map(function (t) {
                  return (
                    t.post_request_id === e.post_request_id &&
                      ((t.dde_post_request = e.dde_post_request),
                      (t.dde_post_request_comment =
                        e.dde_post_request_comment)),
                    t
                  );
                }),
                null !== t && E({ academic_distributed: t });
            },
            P = (function () {
              var e = Object(Z.a)(
                ae.a.mark(function e(t) {
                  var a, n;
                  return ae.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              "" !== w.dde_post_request &&
                              "0" !== w.dde_post_request
                            ) {
                              e.next = 4;
                              break;
                            }
                            return e.abrupt(
                              "return",
                              v({
                                target: "main-error",
                                msg: "Please fill number of requests",
                              })
                            );
                          case 4:
                            if (!(t < parseInt(w.dde_post_request))) {
                              e.next = 8;
                              break;
                            }
                            return e.abrupt(
                              "return",
                              v({
                                target: "main-error",
                                msg: "Number of request should not greater than ".concat(
                                  t
                                ),
                              })
                            );
                          case 8:
                            if ("" !== w.post_request_id) {
                              e.next = 10;
                              break;
                            }
                            return e.abrupt(
                              "return",
                              v({
                                target: "main-error",
                                msg: "Please choose a post request",
                              })
                            );
                          case 10:
                            return (
                              v({ target: null, msg: "" }),
                              j(!0),
                              (e.prev = 12),
                              Object(K.a)(),
                              (a = {
                                post_request_id: w.post_request_id,
                                dde_post_request: parseInt(w.dde_post_request),
                                dde_post_request_comment:
                                  w.dde_post_request_comment,
                              }),
                              (e.next = 17),
                              J.a.post(
                                "".concat(V.c, "/districtdistribution/request"),
                                a
                              )
                            );
                          case 17:
                            (n = e.sent),
                              L(w),
                              console.log("sub: ", n),
                              k({
                                post_request_id: "",
                                district_code: "",
                                dde_post_request: "",
                                dde_post_request_comment: "",
                              }),
                              i(""),
                              C(),
                              v({
                                target: "main-success",
                                msg: "Request Submitted Successfully!",
                              }),
                              (e.next = 31);
                            break;
                          case 26:
                            (e.prev = 26),
                              (e.t0 = e.catch(12)),
                              console.log("Err: ", Object(x.a)({}, e.t0)),
                              C(),
                              v({
                                target: "main-error",
                                msg: "Something went Wrong, Sending Request, Please try Again Later?",
                              });
                          case 31:
                            j(!1);
                          case 32:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[12, 26]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            C = function () {
              setTimeout(function () {
                v({ target: null, msg: "" });
              }, 2e3);
            },
            D = (function () {
              var e = Object(Z.a)(
                ae.a.mark(function e() {
                  var n, r, c;
                  return ae.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (j(!0),
                              (e.prev = 1),
                              null === (n = t.district) ||
                                void 0 === n ||
                                !n.district_code ||
                                null === (r = a.academic_calender) ||
                                void 0 === r ||
                                !r.academic_year_id)
                            ) {
                              e.next = 9;
                              break;
                            }
                            return (
                              Object(K.a)(),
                              (e.next = 6),
                              J.a.get(
                                ""
                                  .concat(
                                    V.c,
                                    "/districtdistribution/peracademic/"
                                  )
                                  .concat(t.district.district_code, "/")
                                  .concat(a.academic_calender.academic_year_id)
                              )
                            );
                          case 6:
                            (c = e.sent),
                              console.log("Data: ", c.data),
                              E(c.data);
                          case 9:
                            e.next = 17;
                            break;
                          case 11:
                            (e.prev = 11),
                              (e.t0 = e.catch(1)),
                              console.log("bb err: ", Object(x.a)({}, e.t0)),
                              E(void 0),
                              C(),
                              v({
                                target: "main-error",
                                msg: "You Have Not Been Assigned to District",
                              });
                          case 17:
                            j(!1);
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 11]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(n.useEffect)(function () {
              null === S && D();
            }),
            Object(O.jsxs)("div", {
              className: "bg-white rounded p-3 m-2 mt-4 border min-h-full",
              children: [
                Object(O.jsxs)("div", {
                  className: "flex flex-col mb-3",
                  children: [
                    Object(O.jsx)("span", {
                      className: "text-3xl font-bold",
                      children: "Schools posts requests approval",
                    }),
                    Object(O.jsx)("span", {
                      className: "text-accent-900 -mt-1 font-bold",
                      children: "List of all head teacher schools requests",
                    }),
                  ],
                }),
                "main-success" === _.target &&
                  Object(O.jsx)(ne.a, { theme: "success", children: _.msg }),
                "main-error" === _.target &&
                  Object(O.jsx)(ne.a, { theme: "danger", children: _.msg }),
                Object(O.jsxs)("div", {
                  className: "mt-3 h-full",
                  children: [
                    Object(O.jsx)("div", {
                      className: "mb-3",
                      children: Object(O.jsx)("input", {
                        value: d,
                        onChange: function (e) {
                          return u(e.target.value);
                        },
                        type: "text",
                        className:
                          "px-4 py-2 rounded border-2 border-primary-900 w-full",
                        placeholder: "Search...",
                      }),
                    }),
                    Object(O.jsxs)("table", {
                      className: "text-left min-w-full",
                      children: [
                        Object(O.jsx)("thead", {
                          children: Object(O.jsxs)("tr", {
                            className: "border border-b-2 text-sm",
                            children: [
                              Object(O.jsx)("th", {
                                className: "border px-1 text-center",
                                children: "#",
                              }),
                              Object(O.jsx)("th", {
                                className: "border px-1",
                                children: "School",
                              }),
                              Object(O.jsx)("th", {
                                className: "border px-1",
                                children: "Position Name",
                              }),
                              Object(O.jsx)("th", {
                                className: "border px-1 text-center",
                                children: "Qualification Name",
                              }),
                              Object(O.jsx)("th", {
                                className: "border px-1",
                                children: "Request Reason",
                              }),
                              Object(O.jsx)("th", {
                                className: "border px-1 text-center",
                                children: "Existing teachers",
                              }),
                              Object(O.jsx)("th", {
                                className: "border px-1 text-center",
                                children: "HT New Requests",
                              }),
                              Object(O.jsx)("th", {
                                className: "border px-1 text-center",
                                children: "DDE Requests",
                              }),
                              Object(O.jsx)("th", {
                                className: "border px-1",
                                children: "Comment",
                              }),
                            ],
                          }),
                        }),
                        Object(O.jsx)("tbody", {
                          children:
                            null === S || void 0 === S || !0 === p
                              ? Object(O.jsx)("tr", {
                                  children: Object(O.jsx)("td", {
                                    colSpan: 11,
                                    className:
                                      "font-bold text-center p-2 text-yellow-900",
                                    children: "Loading, please wait...",
                                  }),
                                })
                              : 0 === R().length
                              ? Object(O.jsx)("tr", {
                                  children: Object(O.jsx)("td", {
                                    colSpan: 11,
                                    className: "font-bold text-center p-2",
                                    children: "No Data Found",
                                  }),
                                })
                              : R().map(function (e, t) {
                                  return Object(O.jsx)(
                                    n.Fragment,
                                    {
                                      children: Object(O.jsxs)("tr", {
                                        className:
                                          "border rounded hover:bg-blue-100 group text-sm",
                                        children: [
                                          Object(O.jsx)("td", {
                                            className: "p-2 border text-center",
                                            children: e.post_request_id,
                                          }),
                                          Object(O.jsx)("td", {
                                            className: "p-2 border",
                                            children: e.school_name,
                                          }),
                                          Object(O.jsx)("td", {
                                            className: "p-2 border",
                                            children: e.position_name,
                                          }),
                                          Object(O.jsx)("td", {
                                            className: "p-2 border text-center",
                                            children: e.qualification_name,
                                          }),
                                          Object(O.jsx)("td", {
                                            className: "p-2 border",
                                            children: e.reason_name,
                                          }),
                                          Object(O.jsx)("td", {
                                            className: "p-2 border text-center",
                                            children: e.existing_post,
                                          }),
                                          Object(O.jsx)("td", {
                                            className: "p-2 border text-center",
                                            children:
                                              e.head_teacher_post_request,
                                          }),
                                          s === e.post_request_id
                                            ? Object(O.jsxs)("td", {
                                                className:
                                                  " border z-50 w-12 relative text-center",
                                                children: [
                                                  Object(O.jsx)("input", {
                                                    type: "number",
                                                    className:
                                                      "w-full p-1 text-center border-4 rounded-t border-primary-800 font-bold",
                                                    value:
                                                      0 !==
                                                      w.dde_post_request.length
                                                        ? w.dde_post_request
                                                        : void 0 ===
                                                            S.academic_distributed.find(
                                                              function (e) {
                                                                return (
                                                                  e.post_request_id ===
                                                                  s
                                                                );
                                                              }
                                                            ) ||
                                                          null ===
                                                            S.academic_distributed.find(
                                                              function (e) {
                                                                return (
                                                                  e.post_request_id ===
                                                                  s
                                                                );
                                                              }
                                                            )
                                                        ? ""
                                                        : S.academic_distributed.find(
                                                            function (e) {
                                                              return (
                                                                e.post_request_id ===
                                                                s
                                                              );
                                                            }
                                                          ).dde_post_request,
                                                    name: "dde_post_request",
                                                    onChange: function (e) {
                                                      return (function (e) {
                                                        var t = {
                                                          post_request_id:
                                                            w.post_request_id,
                                                          district_code:
                                                            w.district_code,
                                                          dde_post_request: e,
                                                          dde_post_request_comment:
                                                            w.dde_post_request_comment,
                                                        };
                                                        k(t);
                                                      })(e.target.value);
                                                    },
                                                  }),
                                                  Object(O.jsxs)("div", {
                                                    className:
                                                      "animate__animated animate__zoomIn animate__faster absolute p-1 bg-primary-800 rounded-b -mt-0.5 rounded-tl  z-40 w-80 right-0 text-left",
                                                    children: [
                                                      Object(O.jsx)("label", {
                                                        className:
                                                          "px-2 text-sm text-gray-300",
                                                        htmlFor:
                                                          "selected_comment",
                                                        children:
                                                          "Comment (optional)",
                                                      }),
                                                      Object(O.jsx)("div", {
                                                        className: "px-2",
                                                        children: Object(O.jsx)(
                                                          "textarea",
                                                          {
                                                            id: "selected_comment",
                                                            name: "dde_post_request_comment",
                                                            className:
                                                              "w-full p-1 rounded",
                                                            value:
                                                              0 !==
                                                              w
                                                                .dde_post_request_comment
                                                                .length
                                                                ? w.dde_post_request_comment
                                                                : void 0 ===
                                                                    S.academic_distributed.find(
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        return (
                                                                          e.post_request_id ===
                                                                          s
                                                                        );
                                                                      }
                                                                    ) ||
                                                                  null ===
                                                                    S.academic_distributed.find(
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        return (
                                                                          e.post_request_id ===
                                                                          s
                                                                        );
                                                                      }
                                                                    )
                                                                ? ""
                                                                : S.academic_distributed.find(
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      return (
                                                                        e.post_request_id ===
                                                                        s
                                                                      );
                                                                    }
                                                                  )
                                                                    .dde_post_request_comment,
                                                            onChange: function (
                                                              e
                                                            ) {
                                                              return (function (
                                                                e
                                                              ) {
                                                                var t = {
                                                                  post_request_id:
                                                                    w.post_request_id,
                                                                  district_code:
                                                                    w.district_code,
                                                                  dde_post_request:
                                                                    w.dde_post_request,
                                                                  dde_post_request_comment:
                                                                    e,
                                                                };
                                                                k(t);
                                                              })(
                                                                e.target.value
                                                              );
                                                            },
                                                          }
                                                        ),
                                                      }),
                                                      Object(O.jsxs)("div", {
                                                        className: "flex",
                                                        children: [
                                                          Object(O.jsx)(
                                                            "button",
                                                            {
                                                              onClick:
                                                                function (t) {
                                                                  return P(
                                                                    parseInt(
                                                                      e.head_teacher_post_request
                                                                    )
                                                                  );
                                                                },
                                                              className:
                                                                "p-1 px-4 rounded text-white bg-green-400 hover:bg-green-500 mx-2 my-1",
                                                              children:
                                                                "Send request",
                                                            }
                                                          ),
                                                          Object(O.jsx)(
                                                            "button",
                                                            {
                                                              onClick:
                                                                function () {
                                                                  i(""),
                                                                    k({
                                                                      post_request_id:
                                                                        "",
                                                                      district_code:
                                                                        "",
                                                                      dde_post_request:
                                                                        "",
                                                                      dde_post_request_comment:
                                                                        "",
                                                                    });
                                                                },
                                                              className:
                                                                "p-1 px-2 rounded text-white bg-red-600 hover:bg-red-600  my-1",
                                                              children:
                                                                "Cancel",
                                                            }
                                                          ),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              })
                                            : Object(O.jsx)("td", {
                                                className:
                                                  "p-2 text-center border ".concat(
                                                    null === e.dde_post_request
                                                      ? "border-yellow-400 bg-yellow-100 hover:bg-yellow-300"
                                                      : "border-blue-400 group-hover:border-primary-800 bg-blue-100 hover:bg-blue-300 group-hover:bg-primary-800 group-hover:text-white",
                                                    "  w-12 font-bold cursor-pointer"
                                                  ),
                                                onClick: function () {
                                                  k({
                                                    post_request_id:
                                                      e.post_request_id,
                                                    district_code:
                                                      e.district_code,
                                                    dde_post_request:
                                                      null ===
                                                      e.dde_post_request
                                                        ? ""
                                                        : e.dde_post_request,
                                                    dde_post_request_comment:
                                                      null ===
                                                      e.dde_post_request_comment
                                                        ? ""
                                                        : e.dde_post_request_comment,
                                                  }),
                                                    i(e.post_request_id);
                                                },
                                                children:
                                                  null === e.dde_post_request
                                                    ? Object(O.jsx)("span", {
                                                        children: "Add",
                                                      })
                                                    : e.dde_post_request,
                                              }),
                                          Object(O.jsx)("td", {
                                            className: "p-2 border",
                                            children: Object(O.jsx)("div", {
                                              className: "truncate",
                                              style: { maxWidth: "100px" },
                                              children:
                                                e.dde_post_request_comment,
                                            }),
                                          }),
                                        ],
                                      }),
                                    },
                                    t
                                  );
                                }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        ce = re,
        se = function () {
          return Object(O.jsx)(m.a, { to: "/register-staff" });
        },
        ie = a(31),
        oe = a(9),
        le = (function (e) {
          Object(h.a)(a, e);
          var t = Object(b.a)(a);
          function a(e) {
            var n;
            return (
              Object(d.a)(this, a),
              ((n = t.call(this, e)).receiveCode = (function () {
                var e = Object(Z.a)(
                  ae.a.mark(function e(t) {
                    var a;
                    return ae.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                (t.preventDefault(),
                                "" !== n.state.received_code)
                              ) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt(
                                "return",
                                n.setState({
                                  error: {
                                    target: "received_code",
                                    msg: "Please fill verification code",
                                  },
                                })
                              );
                            case 3:
                              if (!(n.state.new_password.length <= 4)) {
                                e.next = 5;
                                break;
                              }
                              return e.abrupt(
                                "return",
                                n.setState({
                                  error: {
                                    target: "new_password",
                                    msg: "Password must not be lass than 4 character",
                                  },
                                })
                              );
                            case 5:
                              if ("" !== n.state.confirm_password) {
                                e.next = 7;
                                break;
                              }
                              return e.abrupt(
                                "return",
                                n.setState({
                                  error: {
                                    target: "confirm_password",
                                    msg: "Please confirm password",
                                  },
                                })
                              );
                            case 7:
                              if (
                                n.state.new_password ===
                                n.state.confirm_password
                              ) {
                                e.next = 9;
                                break;
                              }
                              return e.abrupt(
                                "return",
                                n.setState({
                                  error: {
                                    target: "confirm_password",
                                    msg: "Password does not match",
                                  },
                                })
                              );
                            case 9:
                              return (
                                n.setState({ loading: !0 }),
                                (e.prev = 10),
                                (e.next = 13),
                                J.a.post(
                                  "".concat(V.c, "/changepassword/verify"),
                                  {
                                    phone_number: n.props.phone_number,
                                    verification_code: n.state.received_code,
                                    new_password: n.state.new_password,
                                  }
                                )
                              );
                            case 13:
                              200 === (a = e.sent).status &&
                                (n.setState({
                                  success: "Password reset done successfully!",
                                }),
                                console.log("Response: ", a.data)),
                                (e.next = 21);
                              break;
                            case 17:
                              (e.prev = 17),
                                (e.t0 = e.catch(10)),
                                n.setState({
                                  error: {
                                    target: "main",
                                    msg: Object(oe.a)(e.t0),
                                  },
                                }),
                                console.log("Error:", Object(x.a)({}, e.t0));
                            case 21:
                              n.setState({ loading: !1 });
                            case 22:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[10, 17]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.state = {
                success: "",
                received_code: "",
                new_password: "",
                confirm_password: "",
                loading: !1,
                error: { target: null, msg: "" },
              }),
              n
            );
          }
          return (
            Object(u.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return Object(O.jsxs)(O.Fragment, {
                    children: [
                      "main" === this.state.error.target &&
                        Object(O.jsx)(ne.a, {
                          theme: "danger",
                          fixed: !0,
                          children: this.state.error.msg,
                        }),
                      Object(O.jsx)("div", {
                        className:
                          "min-h-screen bg-gray-100 dark:bg-dark-900 flex items-center",
                        children: Object(O.jsx)("div", {
                          className:
                            "bg-white py-10 rounded border mt-5  dark:bg-dark-800 w-full max-w-md mx-auto px-5",
                          children: Object(O.jsxs)("form", {
                            onSubmit: this.receiveCode,
                            children: [
                              Object(O.jsx)("h1", {
                                className:
                                  "text-center text-3xl mb-6 text-primary-800 dark:text-primary-dark  font-extrabold",
                                children: "TMIS | Reset password",
                              }),
                              "" === this.state.success &&
                                Object(O.jsx)(ie.a, {
                                  error:
                                    "received_code" === this.state.error.target
                                      ? this.state.error.msg
                                      : "",
                                  label: "Verification code",
                                  name: "received_code",
                                  onChange: function (t) {
                                    return e.setState({
                                      received_code: t.target.value,
                                      error: { target: null, msg: "" },
                                    });
                                  },
                                  placeholder: "",
                                  value: this.state.received_code,
                                  disabled: this.state.loading,
                                  type: "text",
                                }),
                              "" === this.state.success &&
                                Object(O.jsx)(ie.a, {
                                  error:
                                    "new_password" === this.state.error.target
                                      ? this.state.error.msg
                                      : "",
                                  label: "Create new password",
                                  name: "new_password",
                                  onChange: function (t) {
                                    return e.setState({
                                      new_password: t.target.value,
                                      error: { target: null, msg: "" },
                                    });
                                  },
                                  placeholder: "",
                                  value: this.state.new_password,
                                  disabled: this.state.loading,
                                  type: "password",
                                }),
                              "" === this.state.success &&
                                Object(O.jsx)(ie.a, {
                                  error:
                                    "confirm_password" ===
                                    this.state.error.target
                                      ? this.state.error.msg
                                      : "",
                                  label: "Confirm password",
                                  name: "confirm_password",
                                  onChange: function (t) {
                                    return e.setState({
                                      confirm_password: t.target.value,
                                      error: { target: null, msg: "" },
                                    });
                                  },
                                  placeholder: "",
                                  value: this.state.confirm_password,
                                  disabled: this.state.loading,
                                  type: "password",
                                }),
                              Object(O.jsx)("div", {
                                className:
                                  "mt-5 flex items-center justify-center",
                                children:
                                  "" !== this.state.success
                                    ? Object(O.jsx)(j.b, {
                                        to: "/login",
                                        className:
                                          "bg-green-700 text-white cursor-pointer px-3 py-2 rounded text-center w-max",
                                        children:
                                          "Reset done, Click here to login",
                                      })
                                    : Object(O.jsx)(w.a, {
                                        full: !0,
                                        loading: this.state.loading,
                                        children: "Reset password",
                                      }),
                              }),
                              Object(O.jsx)("div", {
                                className: "mt-4 text-center",
                                children: Object(O.jsx)(j.b, {
                                  to: "/login",
                                  className: " cursor-pointer",
                                  children: "Cancel process",
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        de = (function (e) {
          Object(h.a)(a, e);
          var t = Object(b.a)(a);
          function a(e) {
            var n;
            return (
              Object(d.a)(this, a),
              ((n = t.call(this, e)).receiveCode = (function () {
                var e = Object(Z.a)(
                  ae.a.mark(function e(t) {
                    var a;
                    return ae.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                (t.preventDefault(),
                                !(n.state.username.length <= 4))
                              ) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt(
                                "return",
                                n.setState({
                                  error: {
                                    target: "username",
                                    msg: "Phone must not be lass than 4 character",
                                  },
                                })
                              );
                            case 3:
                              return (
                                n.setState({ loading: !0 }),
                                (e.prev = 4),
                                (e.next = 7),
                                J.a.post(
                                  "".concat(V.c, "/changepassword/forget"),
                                  { phone_number: n.state.username }
                                )
                              );
                            case 7:
                              200 === (a = e.sent).status &&
                                (n.setState({ success: a.data }),
                                console.log("Response: ", a.data)),
                                (e.next = 15);
                              break;
                            case 11:
                              (e.prev = 11),
                                (e.t0 = e.catch(4)),
                                n.setState({
                                  error: {
                                    target: "main",
                                    msg: Object(oe.a)(e.t0),
                                  },
                                }),
                                console.log("Error:", Object(x.a)({}, e.t0));
                            case 15:
                              n.setState({ loading: !1 });
                            case 16:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[4, 11]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.state = {
                success: null,
                username: "",
                loading: !1,
                error: { target: null, msg: "" },
              }),
              n
            );
          }
          return (
            Object(u.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return null !== this.state.success
                    ? Object(O.jsx)(le, { phone_number: this.state.username })
                    : Object(O.jsxs)(O.Fragment, {
                        children: [
                          "main" === this.state.error.target &&
                            Object(O.jsx)(ne.a, {
                              theme: "danger",
                              fixed: !0,
                              children: this.state.error.msg,
                            }),
                          Object(O.jsx)("div", {
                            className:
                              "min-h-screen bg-gray-100 dark:bg-dark-900 flex items-center",
                            children: Object(O.jsx)("div", {
                              className:
                                "bg-white py-10 rounded border mt-5  dark:bg-dark-800 w-full max-w-md mx-auto px-5",
                              children: Object(O.jsxs)("form", {
                                onSubmit: this.receiveCode,
                                children: [
                                  Object(O.jsx)("h1", {
                                    className:
                                      "text-center text-3xl mb-6 text-primary-800 dark:text-primary-dark  font-extrabold",
                                    children: "TMIS | Password recovery",
                                  }),
                                  Object(O.jsx)("div", {
                                    className:
                                      "bg-blue-100 text-primary-800 px-3 py-2 rounded",
                                    children:
                                      "You receive verification code on your phone number",
                                  }),
                                  Object(O.jsx)(ie.a, {
                                    error:
                                      "username" === this.state.error.target
                                        ? this.state.error.msg
                                        : "",
                                    label: "Phone",
                                    name: "phone",
                                    onChange: function (t) {
                                      return e.setState({
                                        username: t.target.value,
                                        error: { target: null, msg: "" },
                                      });
                                    },
                                    placeholder: "25070000000",
                                    value: this.state.username,
                                    disabled: this.state.loading,
                                    type: "number",
                                  }),
                                  Object(O.jsx)("div", {
                                    className: "mt-5",
                                    children: Object(O.jsx)(w.a, {
                                      full: !0,
                                      loading: this.state.loading,
                                      children: "Send code",
                                    }),
                                  }),
                                  Object(O.jsx)("div", {
                                    className: "mt-4 text-center",
                                    children: Object(O.jsx)(j.b, {
                                      to: "/login",
                                      className: " cursor-pointer",
                                      children: "Login my account",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      });
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        ue = Object(n.lazy)(function () {
          return a
            .e(36)
            .then(a.bind(null, 135))
            .then(function (e) {
              return { default: e.Login };
            });
        }),
        he = Object(n.lazy)(function () {
          return a
            .e(17)
            .then(a.bind(null, 136))
            .then(function (e) {
              return { default: e.CountryPostDistribution };
            });
        }),
        be = Object(n.lazy)(function () {
          return a
            .e(18)
            .then(a.bind(null, 137))
            .then(function (e) {
              return { default: e.DistrictPostDistribution };
            });
        }),
        pe = Object(n.lazy)(function () {
          return a
            .e(37)
            .then(a.bind(null, 138))
            .then(function (e) {
              return { default: e.PostLimitsNational };
            });
        }),
        je = Object(n.lazy)(function () {
          return Promise.all([a.e(2), a.e(3), a.e(4), a.e(0), a.e(11)])
            .then(a.bind(null, 139))
            .then(function (e) {
              return { default: e.TeachersList };
            });
        }),
        me = Object(n.lazy)(function () {
          return Promise.all([a.e(2), a.e(3), a.e(4), a.e(6), a.e(10)])
            .then(a.bind(null, 140))
            .then(function (e) {
              return { default: e.SchoolsList };
            });
        }),
        xe = Object(n.lazy)(function () {
          return Promise.all([a.e(0), a.e(38)])
            .then(a.bind(null, 160))
            .then(function (e) {
              return { default: e.RegisterStaff };
            });
        }),
        fe = Object(n.lazy)(function () {
          return Promise.all([a.e(1), a.e(2), a.e(25), a.e(16)])
            .then(a.bind(null, 161))
            .then(function (e) {
              return { default: e.PlacementReport };
            });
        }),
        Oe = Object(n.lazy)(function () {
          return Promise.all([a.e(0), a.e(40)])
            .then(a.bind(null, 141))
            .then(function (e) {
              return { default: e.RegisterTeacher_HeadTeacher };
            });
        }),
        _e = Object(n.lazy)(function () {
          return Promise.all([a.e(0), a.e(22)])
            .then(a.bind(null, 142))
            .then(function (e) {
              return { default: e.DisabledUsers };
            });
        }),
        ve = Object(n.lazy)(function () {
          return a
            .e(19)
            .then(a.bind(null, 143))
            .then(function (e) {
              return { default: e.CreatePlacementList };
            });
        }),
        ge = Object(n.lazy)(function () {
          return a
            .e(27)
            .then(a.bind(null, 144))
            .then(function (e) {
              return { default: e.PlacementListHT };
            });
        }),
        Ne = Object(n.lazy)(function () {
          return a
            .e(21)
            .then(a.bind(null, 162))
            .then(function (e) {
              return { default: e.UpdatePlacementList };
            });
        }),
        Te = Object(n.lazy)(function () {
          return a
            .e(20)
            .then(a.bind(null, 145))
            .then(function (e) {
              return { default: e.PlacementListDDE };
            });
        }),
        Se = Object(n.lazy)(function () {
          return Promise.all([a.e(1), a.e(5), a.e(35)])
            .then(a.bind(null, 146))
            .then(function (e) {
              return { default: e.Termination };
            });
        }),
        Ee = Object(n.lazy)(function () {
          return Promise.all([a.e(1), a.e(5), a.e(34)])
            .then(a.bind(null, 147))
            .then(function (e) {
              return { default: e.Suspension };
            });
        }),
        Ae = Object(n.lazy)(function () {
          return Promise.all([a.e(1), a.e(5), a.e(31)])
            .then(a.bind(null, 148))
            .then(function (e) {
              return { default: e.Termination };
            });
        }),
        ye = Object(n.lazy)(function () {
          return Promise.all([a.e(1), a.e(5), a.e(30)])
            .then(a.bind(null, 149))
            .then(function (e) {
              return { default: e.HTSuspension };
            });
        }),
        Ie = Object(n.lazy)(function () {
          return Promise.all([a.e(1), a.e(14)])
            .then(a.bind(null, 158))
            .then(function (e) {
              return { default: e.RequestTransfer };
            });
        }),
        we = Object(n.lazy)(function () {
          return Promise.all([a.e(2), a.e(3), a.e(4), a.e(0), a.e(15)])
            .then(a.bind(null, 120))
            .then(function (e) {
              return { default: e.UserProfile };
            });
        }),
        ke = Object(n.lazy)(function () {
          return Promise.all([a.e(3), a.e(6), a.e(29)])
            .then(a.bind(null, 163))
            .then(function (e) {
              return { default: e.HdRequestToDee };
            });
        }),
        Re = Object(n.lazy)(function () {
          return a
            .e(32)
            .then(a.bind(null, 150))
            .then(function (e) {
              return { default: e.AddNewAcademicForm };
            });
        }),
        Le = Object(n.lazy)(function () {
          return Promise.all([a.e(2), a.e(4), a.e(24)])
            .then(a.bind(null, 151))
            .then(function (e) {
              return { default: e.StudyHierarchyPage };
            });
        }),
        Pe = Object(n.lazy)(function () {
          return a
            .e(26)
            .then(a.bind(null, 159))
            .then(function (e) {
              return { default: e.SuspendedTeacherListClass };
            });
        }),
        Ce = Object(n.lazy)(function () {
          return Promise.all([a.e(2), a.e(3), a.e(4), a.e(0), a.e(12)])
            .then(a.bind(null, 152))
            .then(function (e) {
              return { default: e.SystemUsersList };
            });
        }),
        De = Object(n.lazy)(function () {
          return a
            .e(39)
            .then(a.bind(null, 153))
            .then(function (e) {
              return { default: e.RegisterSystemUsersList };
            });
        }),
        qe = Object(n.lazy)(function () {
          return Promise.all([a.e(1), a.e(13)])
            .then(a.bind(null, 157))
            .then(function (e) {
              return { default: e.RequestApprovalDde };
            });
        }),
        Me = Object(n.lazy)(function () {
          return a
            .e(33)
            .then(a.bind(null, 154))
            .then(function (e) {
              return { default: e.ChangePassword };
            });
        }),
        Fe = Object(n.lazy)(function () {
          return Promise.all([a.e(6), a.e(28)])
            .then(a.bind(null, 155))
            .then(function (e) {
              return { default: e.AssignSchoolPosition };
            });
        }),
        Ue = Object(n.lazy)(function () {
          return Promise.all([a.e(0), a.e(23)])
            .then(a.bind(null, 156))
            .then(function (e) {
              return { default: e.RegisterForDataValidation };
            });
        }),
        He = (function (e) {
          Object(h.a)(a, e);
          var t = Object(b.a)(a);
          function a(e) {
            var n;
            return (
              Object(d.a)(this, a),
              ((n = t.call(this, e)).authenticationPath = "/login"),
              (n.state = { loading: !0, error: "" }),
              n
            );
          }
          return (
            Object(u.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  localStorage[V.b] || this.setState({ loading: !1 }),
                    localStorage[V.b] &&
                      (this.setState({ loading: !0 }),
                      this.props.FC_CheckUserIsAuthenticated(function (t, a) {
                        e.setState({ loading: !1 }),
                          t
                            ? e.props.FC_AddBasicInfo(function (t, a) {
                                !0 === t
                                  ? e.setState({ loading: !1 })
                                  : (e.setState({
                                      loading: !1,
                                      error:
                                        "Failed to load qualification data",
                                    }),
                                    delete J.a.defaults.headers.common[
                                      "Tmis-Token"
                                    ],
                                    localStorage.removeItem(V.b),
                                    localStorage.clear());
                              })
                            : (console.log("Failed to login"),
                              e.setState({ loading: !1, error: "" }),
                              delete J.a.defaults.headers.common["Tmis-Token"],
                              localStorage.removeItem(V.b),
                              localStorage.clear());
                      }));
                },
              },
              {
                key: "render",
                value: function () {
                  return !0 === this.state.loading
                    ? Object(O.jsx)("div", {
                        className: "h-screen w-full flex items-center",
                        children: Object(O.jsxs)("div", {
                          className:
                            "text-center mx-auto animate__animated animate__zoomIn animate__faster",
                          children: [
                            Object(O.jsx)("img", {
                              alt: "Reb logo",
                              src: I,
                              className: "w-40 rounded mx-auto",
                            }),
                            Object(O.jsx)("div", {
                              className: "mt-14",
                              children: Object(O.jsx)(W.a, {}),
                            }),
                          ],
                        }),
                      })
                    : "" !== this.state.error
                    ? Object(O.jsx)(H.a, {
                        children: Object(O.jsx)(ne.a, {
                          theme: "danger",
                          children: this.state.error,
                        }),
                      })
                    : Object(O.jsxs)(j.a, {
                        basename: V.a,
                        children: [
                          Object(O.jsx)(P, {}),
                          Object(O.jsx)(U, {}),
                          Object(O.jsxs)("div", {
                            className: "dark:bg-dark-900 min-h-screen lg:flex",
                            children: [
                              !0 === this.props.auth.isAuthenticated &&
                                Object(O.jsx)("div", {
                                  className: "main-side-spacer",
                                }),
                              Object(O.jsx)("div", {
                                className:
                                  "flex-1 min-h-screen bg-primary-100 dark:bg-dark-900",
                                children: Object(O.jsxs)(m.d, {
                                  children: [
                                    Object(O.jsx)(m.b, {
                                      exact: !0,
                                      path: "/",
                                      component: E,
                                    }),
                                    Object(O.jsx)(m.b, {
                                      path: "/forget-password",
                                      component: de,
                                      exact: !0,
                                    }),
                                    Object(O.jsxs)(n.Suspense, {
                                      fallback: Object(O.jsx)(B, {}),
                                      children: [
                                        Object(O.jsx)(m.b, {
                                          exact: !0,
                                          path: this.authenticationPath,
                                          component: ue,
                                        }),
                                        Object(O.jsx)(v, {
                                          path: "/dashboard",
                                          component: z,
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath:
                                            this.authenticationPath,
                                          loading: this.state.loading,
                                          exact: !0,
                                        }),
                                        Object(O.jsx)(v, {
                                          path: "/country-distribution",
                                          component: he,
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath:
                                            this.authenticationPath,
                                          loading: this.state.loading,
                                          exact: !0,
                                        }),
                                        Object(O.jsx)(v, {
                                          path: "/district-distribution",
                                          component: be,
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath:
                                            this.authenticationPath,
                                          loading: this.state.loading,
                                          exact: !0,
                                        }),
                                        Object(O.jsx)(v, {
                                          path: "/post-limits",
                                          component: pe,
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath:
                                            this.authenticationPath,
                                          loading: this.state.loading,
                                          exact: !0,
                                        }),
                                        Object(O.jsx)(v, {
                                          path: "/staff-list",
                                          component: je,
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath:
                                            this.authenticationPath,
                                          loading: this.state.loading,
                                          exact: !0,
                                        }),
                                        Object(O.jsx)(v, {
                                          path: "/schools-list",
                                          component: me,
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath:
                                            this.authenticationPath,
                                          loading: this.state.loading,
                                          exact: !0,
                                        }),
                                        Object(O.jsx)(v, {
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath: "/login",
                                          exact: !0,
                                          path: "/headteacher/request",
                                          component: ke,
                                          loading: this.state.loading,
                                        }),
                                        Object(O.jsx)(v, {
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath: "/login",
                                          exact: !0,
                                          path: "/academic",
                                          component: $,
                                          loading: this.state.loading,
                                        }),
                                        Object(O.jsx)(v, {
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath: "/login",
                                          exact: !0,
                                          path: "/academic/new",
                                          component: Re,
                                          loading: this.state.loading,
                                        }),
                                        Object(O.jsx)(v, {
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath: "/login",
                                          exact: !0,
                                          path: "/district/request",
                                          component: ce,
                                          loading: this.state.loading,
                                        }),
                                        Object(O.jsx)(v, {
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath: "/login",
                                          exact: !0,
                                          path: "/teacher/transfer",
                                          component: Ie,
                                          loading: this.state.loading,
                                        }),
                                        Object(O.jsx)(v, {
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath: "/login",
                                          exact: !0,
                                          path: "/dde/transfer",
                                          component: qe,
                                          loading: this.state.loading,
                                        }),
                                        Object(O.jsx)(v, {
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath: "/login",
                                          exact: !0,
                                          path: "/profile",
                                          component: we,
                                          loading: this.state.loading,
                                        }),
                                        Object(O.jsx)(v, {
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath: "/login",
                                          exact: !0,
                                          path: "/suspended",
                                          component: Pe,
                                          loading: this.state.loading,
                                        }),
                                        Object(O.jsx)(v, {
                                          path: "/register-staff",
                                          component: xe,
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath:
                                            this.authenticationPath,
                                          loading: this.state.loading,
                                          exact: !0,
                                        }),
                                        Object(O.jsx)(v, {
                                          path: "/register-administration-staff",
                                          component: Oe,
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath:
                                            this.authenticationPath,
                                          loading: this.state.loading,
                                          exact: !0,
                                        }),
                                        Object(O.jsx)(v, {
                                          path: "/placement-list-ht",
                                          component: ge,
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath:
                                            this.authenticationPath,
                                          loading: this.state.loading,
                                          exact: !0,
                                        }),
                                        Object(O.jsx)(v, {
                                          path: "/create-placement-list",
                                          component: ve,
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath:
                                            this.authenticationPath,
                                          loading: this.state.loading,
                                          exact: !0,
                                        }),
                                        Object(O.jsx)(v, {
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath:
                                            this.authenticationPath,
                                          loading: this.state.loading,
                                          exact: !0,
                                          path: "/update-placement-list/:placement_id",
                                          component: Ne,
                                        }),
                                        Object(O.jsx)(v, {
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath:
                                            this.authenticationPath,
                                          loading: this.state.loading,
                                          exact: !0,
                                          path: "/placement-list-dde",
                                          component: Te,
                                        }),
                                        Object(O.jsx)(v, {
                                          path: "/hr-termination",
                                          component: Se,
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath:
                                            this.authenticationPath,
                                          loading: this.state.loading,
                                          exact: !0,
                                        }),
                                        Object(O.jsx)(v, {
                                          path: "/hr-suspension",
                                          component: Ee,
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath:
                                            this.authenticationPath,
                                          loading: this.state.loading,
                                          exact: !0,
                                        }),
                                        Object(O.jsx)(v, {
                                          path: "/ht-termination",
                                          component: Ae,
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath:
                                            this.authenticationPath,
                                          loading: this.state.loading,
                                          exact: !0,
                                        }),
                                        Object(O.jsx)(v, {
                                          path: "/ht-suspension",
                                          component: ye,
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath:
                                            this.authenticationPath,
                                          loading: this.state.loading,
                                          exact: !0,
                                        }),
                                        Object(O.jsx)(v, {
                                          path: "/report-placement",
                                          component: fe,
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath:
                                            this.authenticationPath,
                                          loading: this.state.loading,
                                          exact: !0,
                                        }),
                                        Object(O.jsx)(v, {
                                          path: "/redirect-register",
                                          component: se,
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath:
                                            this.authenticationPath,
                                          loading: this.state.loading,
                                          exact: !0,
                                        }),
                                        Object(O.jsx)(v, {
                                          path: "/study-hierarchy",
                                          component: Le,
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath:
                                            this.authenticationPath,
                                          loading: this.state.loading,
                                          exact: !0,
                                        }),
                                        Object(O.jsx)(v, {
                                          path: "/admin-register-user",
                                          component: De,
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath:
                                            this.authenticationPath,
                                          loading: this.state.loading,
                                          exact: !0,
                                        }),
                                        Object(O.jsx)(v, {
                                          path: "/admin-system-users-list",
                                          component: Ce,
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath:
                                            this.authenticationPath,
                                          loading: this.state.loading,
                                          exact: !0,
                                        }),
                                        Object(O.jsx)(v, {
                                          path: "/change-password",
                                          component: Me,
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath:
                                            this.authenticationPath,
                                          loading: this.state.loading,
                                          exact: !0,
                                        }),
                                        Object(O.jsx)(v, {
                                          path: "/disabled-users",
                                          component: _e,
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath:
                                            this.authenticationPath,
                                          loading: this.state.loading,
                                          exact: !0,
                                        }),
                                        Object(O.jsx)(v, {
                                          path: "/assign-school-position",
                                          component: Fe,
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath:
                                            this.authenticationPath,
                                          loading: this.state.loading,
                                          exact: !0,
                                        }),
                                        Object(O.jsx)(v, {
                                          path: "/register-for-validation",
                                          component: Ue,
                                          isAuthenticated:
                                            this.props.auth.isAuthenticated,
                                          authenticationPath:
                                            this.authenticationPath,
                                          loading: this.state.loading,
                                          exact: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      });
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        Ge = Object(o.b)(
          function (e) {
            return {
              auth: e.auth,
              schoolHierarchyStore: e.schoolHierarchyStore,
            };
          },
          {
            FC_CheckUserIsAuthenticated: p.f,
            FC_AddBasicInfo: p.b,
            FC_AllSchoolHierarchyDetails: p.c,
          }
        )(He),
        Ye = {
          isAuthenticated: !1,
          user: null,
          jwt: "",
          role: null,
          country: null,
          school: null,
          sector: null,
          stakeholder: null,
        },
        ze = { side_menu: !1 },
        Be = {
          loading: !0,
          academic_calender: null,
          qualifications: [],
          register_assets: { error: !1, loading: !0, data: null },
          assign_teacher_assets: { error: !1, loading: !0, data: null },
          positions: null,
          roles: null,
        },
        Ve = { allTermination: null },
        We = { loading: !0, placements: [], academics: null },
        Qe = { hierarchy: null, selected_hierarchy: null },
        Je = a(35),
        Xe = {
          allTransfers: null,
          myTransfers: null,
          transferReasons: null,
          qualifications: null,
        },
        Ke = { users: null, selected_page: 1 },
        $e = Object(i.combineReducers)({
          auth: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Ye,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case p.a.LOGOUT:
                return Ye;
              case p.a.LOGIN_DETAILS:
                return Object(x.a)(
                  Object(x.a)({}, e),
                  {},
                  {
                    isAuthenticated: !0,
                    user: t.payload.user_info,
                    role: t.payload.role,
                    jwt: t.payload.jwt,
                    school: t.payload.school,
                    sector: t.payload.sector,
                    country: t.payload.country,
                    stakeholder: t.payload.stakeholder,
                    district: t.payload.district,
                  }
                );
              default:
                return e;
            }
          },
          app: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : ze,
              t = arguments.length > 1 ? arguments[1] : void 0;
            return t.type === p.a.TOGGLE_MENU
              ? Object(x.a)(Object(x.a)({}, e), {}, { side_menu: t.payload })
              : e;
          },
          basic: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Be,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case p.a.LOGOUT:
                return Be;
              case p.a.ADD_BASIC_INFO:
                return Object(x.a)(
                  Object(x.a)(Object(x.a)({}, e), t.payload),
                  {},
                  { loading: !1 }
                );
              case p.a.REGISTER_STAFF_ASSETS:
                return Object(x.a)(
                  Object(x.a)({}, e),
                  {},
                  {
                    register_assets: {
                      data: Object(x.a)({}, t.payload),
                      loading: !1,
                    },
                  }
                );
              case p.a.ASSIGN_STAFF_ASSETS:
                return Object(x.a)(
                  Object(x.a)({}, e),
                  {},
                  {
                    assign_teacher_assets: {
                      data: Object(x.a)({}, t.payload),
                      loading: !1,
                    },
                  }
                );
              case p.a.GET_ALL_POSITIONS:
                return Object(x.a)(
                  Object(x.a)({}, e),
                  {},
                  { positions: t.payload }
                );
              case p.a.GET_ALL_SYSTEM_ROLES:
                return Object(x.a)(
                  Object(x.a)({}, e),
                  {},
                  { roles: t.payload }
                );
              case p.a.LOAD_SCHOOLS_BY_DISTRICT:
                return Object(x.a)(
                  Object(x.a)({}, e),
                  {},
                  {
                    assign_teacher_assets: Object(x.a)(
                      Object(x.a)({}, e.assign_teacher_assets),
                      {},
                      {
                        data:
                          null === e.assign_teacher_assets.data
                            ? null
                            : Object(x.a)(
                                Object(x.a)({}, e.assign_teacher_assets.data),
                                {},
                                { schools: t.payload }
                              ),
                      }
                    ),
                  }
                );
              default:
                return e;
            }
          },
          terminations: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Ve,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case p.a.LOGOUT:
                return Ve;
              case p.a.GET_ALL_TERMINATION:
              case p.a.UPDATE_TERMINATION:
                return Object(x.a)(
                  Object(x.a)({}, e),
                  {},
                  { allTermination: t.payload }
                );
              default:
                return e;
            }
          },
          placement: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : We,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case p.a.LOGOUT:
                return We;
              case p.a.SET_PLACEMENT_LIST:
                return Object(x.a)(
                  Object(x.a)({}, e),
                  {},
                  { placements: t.payload, loading: !1 }
                );
              case p.a.UPDATE_PLACEMENT_DATA:
                return Object(x.a)(
                  Object(x.a)({}, e),
                  {},
                  {
                    placements: e.placements.map(function (e) {
                      return e.placement_list_approval_id ===
                        t.payload.placement_id
                        ? Object(x.a)(
                            Object(x.a)({}, e),
                            {},
                            {
                              list: t.payload.list,
                              ht_comment: t.payload.comment,
                            }
                          )
                        : e;
                    }),
                  }
                );
              case p.a.CHANGE_PLACEMENT_STATUS:
                return Object(x.a)(
                  Object(x.a)({}, e),
                  {},
                  {
                    placements: e.placements.map(function (e) {
                      return e.placement_list_approval_id === t.payload.id
                        ? Object(x.a)(
                            Object(x.a)({}, e),
                            {},
                            {
                              dde_approval_status: "1",
                              dde_comment: t.payload.dde_comment,
                            }
                          )
                        : e;
                    }),
                  }
                );
              case p.a.GET_ACADEMICS:
                return Object(x.a)(
                  Object(x.a)({}, e),
                  {},
                  { academics: t.payload }
                );
              default:
                return e;
            }
          },
          schoolHierarchyStore: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Qe,
              t = arguments.length > 1 ? arguments[1] : void 0;
            return t.type === p.a.GET_ALL_HIERARCHY
              ? Object(x.a)(Object(x.a)({}, e), {}, { hierarchy: t.payload })
              : e;
          },
          transfer: function () {
            var e,
              t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Xe,
              a = arguments.length > 1 ? arguments[1] : void 0,
              n = -1;
            switch (a.type) {
              case p.a.LOGOUT:
                return Xe;
              case p.a.GET_ALL_TRANSFER:
                return Object(x.a)(
                  Object(x.a)({}, t),
                  {},
                  { allTransfers: a.payload }
                );
              case p.a.GET_MY_TRANSFER:
                return Object(x.a)(
                  Object(x.a)({}, t),
                  {},
                  { myTransfers: a.payload }
                );
              case p.a.GET_TRANSFER_REASON:
                return Object(x.a)(
                  Object(x.a)({}, t),
                  {},
                  { transferReasons: a.payload }
                );
              case p.a.GET_QUALIFICATION:
                return Object(x.a)(
                  Object(x.a)({}, t),
                  {},
                  { qualifications: a.payload }
                );
              case p.a.RESPOND_TO_LEAVE:
                return (n = t.allTransfers
                  ? t.allTransfers.findIndex(function (e) {
                      return (
                        e.teacher_transfer_id.toString() ===
                        a.payload.teacher_transfer_id
                      );
                    })
                  : -1) >= 0
                  ? (((e = Object(Je.a)(t.allTransfers))[
                      n
                    ].outgoing_dde_comment = a.payload.outgoing_dde_comment),
                    (e[n].mayor_letter = a.payload.mayor_letter),
                    (e[n].outgoing_status = a.payload.outgoing_status),
                    Object(x.a)(Object(x.a)({}, t), {}, { allTransfers: e }))
                  : t;
              case p.a.RESPOND_TO_TRANSFER:
                return (n = t.allTransfers
                  ? t.allTransfers.findIndex(function (e) {
                      return (
                        e.teacher_transfer_id.toString() ===
                        a.payload.teacher_transfer_id
                      );
                    })
                  : -1) >= 0
                  ? (((e = Object(Je.a)(t.allTransfers))[n].requested_comment =
                      a.payload.requested_comment),
                    (e[n].requested_status = a.payload.requested_status),
                    (e[n].approved_school_id = a.payload.approved_school_id),
                    Object(x.a)(Object(x.a)({}, t), {}, { allTransfers: e }))
                  : t;
              default:
                return t;
            }
          },
          systemUsers: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Ke,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case p.a.GET_ALL_SYSTEM_USERS:
                return Object(x.a)(
                  Object(x.a)({}, e),
                  {},
                  {
                    users:
                      null === e.users || !0 === t.payload.clean
                        ? [
                            {
                              total_users: t.payload.users.total_users,
                              page_number: t.payload.page_number,
                              users: t.payload.users.users,
                            },
                          ]
                        : [].concat(Object(Je.a)(e.users), [
                            {
                              total_users: t.payload.users.total_users,
                              page_number: t.payload.page_number,
                              users: t.payload.users.users,
                            },
                          ]),
                  }
                );
              case p.a.CLEAN_SYSTEM_USERS_LIST:
                return Object(x.a)(Object(x.a)({}, e), {}, { users: null });
              default:
                return e;
            }
          },
        }),
        Ze = a(68),
        et =
          (a(101),
          a(102),
          Object(i.createStore)(
            $e,
            Object(Ze.composeWithDevTools)(Object(i.applyMiddleware)(l.a))
          ));
      s.a.render(
        Object(O.jsx)(r.a.StrictMode, {
          children: Object(O.jsx)(o.a, {
            store: et,
            children: Object(O.jsx)(Ge, {}),
          }),
        }),
        document.querySelector("#root")
      );
    },
    12: function (e, t, a) {
      "use strict";
      a.d(t, "K", function () {
        return p;
      }),
        a.d(t, "f", function () {
          return j;
        }),
        a.d(t, "L", function () {
          return m;
        }),
        a.d(t, "S", function () {
          return x;
        }),
        a.d(t, "b", function () {
          return O;
        }),
        a.d(t, "D", function () {
          return _;
        }),
        a.d(t, "t", function () {
          return v;
        }),
        a.d(t, "Q", function () {
          return g;
        }),
        a.d(t, "u", function () {
          return N;
        }),
        a.d(t, "G", function () {
          return T;
        }),
        a.d(t, "m", function () {
          return S;
        }),
        a.d(t, "h", function () {
          return E;
        }),
        a.d(t, "j", function () {
          return A;
        }),
        a.d(t, "q", function () {
          return y;
        }),
        a.d(t, "k", function () {
          return I;
        }),
        a.d(t, "o", function () {
          return k;
        }),
        a.d(t, "O", function () {
          return R;
        }),
        a.d(t, "p", function () {
          return L;
        }),
        a.d(t, "P", function () {
          return P;
        }),
        a.d(t, "C", function () {
          return q;
        }),
        a.d(t, "B", function () {
          return M;
        }),
        a.d(t, "F", function () {
          return U;
        }),
        a.d(t, "e", function () {
          return H;
        }),
        a.d(t, "U", function () {
          return G;
        }),
        a.d(t, "y", function () {
          return Y;
        }),
        a.d(t, "I", function () {
          return z;
        }),
        a.d(t, "N", function () {
          return B;
        }),
        a.d(t, "R", function () {
          return V;
        }),
        a.d(t, "n", function () {
          return W;
        }),
        a.d(t, "H", function () {
          return Q;
        }),
        a.d(t, "T", function () {
          return X;
        }),
        a.d(t, "s", function () {
          return K;
        }),
        a.d(t, "r", function () {
          return $;
        }),
        a.d(t, "V", function () {
          return Z;
        }),
        a.d(t, "d", function () {
          return ee;
        }),
        a.d(t, "M", function () {
          return te;
        }),
        a.d(t, "v", function () {
          return ae;
        }),
        a.d(t, "x", function () {
          return ne;
        }),
        a.d(t, "w", function () {
          return re;
        }),
        a.d(t, "i", function () {
          return ce;
        }),
        a.d(t, "l", function () {
          return se;
        }),
        a.d(t, "W", function () {
          return ie;
        }),
        a.d(t, "X", function () {
          return h;
        }),
        a.d(t, "c", function () {
          return de;
        }),
        a.d(t, "z", function () {
          return ue;
        }),
        a.d(t, "E", function () {
          return he;
        }),
        a.d(t, "A", function () {
          return be;
        }),
        a.d(t, "J", function () {
          return je;
        }),
        a.d(t, "g", function () {
          return me;
        }),
        a.d(t, "a", function () {
          return n;
        });
      var n,
        r = a(6),
        c = a(3),
        s = a.n(c),
        i = a(5),
        o = a.n(i),
        l = a(13),
        d = a(8),
        u = a(9);
      !(function (e) {
        (e.LOGIN_DETAILS = "LOGIN_DETAILS"),
          (e.LOGOUT = "LOGOUT"),
          (e.TOGGLE_MENU = "TOGGLE_MENU"),
          (e.ADD_BASIC_INFO = "ADD_BASIC_INFO"),
          (e.REGISTER_STAFF_ASSETS = "REGISTER_STAFF_ASSETS"),
          (e.ASSIGN_STAFF_ASSETS = "ASSIGN_STAFF_ASSETS"),
          (e.SET_PLACEMENT_LIST = "SET_PLACEMENT_LIST"),
          (e.UPDATE_PLACEMENT_DATA = "UPDATE_PLACEMENT_DATA"),
          (e.CHANGE_PLACEMENT_STATUS = "CHANGE_PLACEMENT_STATUS"),
          (e.GET_ALL_POSITIONS = "GET_ALL_POSITIONS"),
          (e.GET_ALL_TERMINATION = "GET_ALL_TERMINATION"),
          (e.UPDATE_TERMINATION = "UPDATE_TERMINATION"),
          (e.GET_ALL_HIERARCHY = "GET_ALL_HIERARCHY"),
          (e.GET_ALL_TRANSFER = "GET_ALL_TRANSFER"),
          (e.GET_TRANSFER_REASON = "GET_TRANSFER_REASON"),
          (e.GET_ALL_SYSTEM_ROLES = "GET_ALL_SYSTEM_ROLES"),
          (e.GET_ALL_SYSTEM_USERS = "GET_ALL_SYSTEM_USERS"),
          (e.CLEAN_SYSTEM_USERS_LIST = "CLEAN_SYSTEM_USERS_LIST"),
          (e.GET_MY_TRANSFER = "GET_MY_TRANSFER"),
          (e.GET_QUALIFICATION = "GET_QUALIFICATION"),
          (e.RESPOND_TO_LEAVE = "RESPOND_TO_LEAVE"),
          (e.RESPOND_TO_TRANSFER = "RESPOND_TO_TRANSFER"),
          (e.GET_ACADEMICS = "GET_ACADEMICS"),
          (e.LOAD_SCHOOLS_BY_DISTRICT = "LOAD_SCHOOLS_BY_DISTRICT");
      })(n || (n = {}));
      var h,
        b = "".concat(l.c, "/user"),
        p = function (e, t) {
          return (function () {
            var a = Object(r.a)(
              s.a.mark(function a(r) {
                var c;
                return s.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            (a.next = 3),
                            o.a.post("".concat(b, "/account/login"), e)
                          );
                        case 3:
                          (c = a.sent),
                            console.log({ LOGIN_INFO: c.data }),
                            localStorage.setItem(l.b, c.data.jwt),
                            r({ type: n.LOGIN_DETAILS, payload: c.data }),
                            Object(d.a)(),
                            t(!0, ""),
                            (a.next = 15);
                          break;
                        case 11:
                          (a.prev = 11),
                            (a.t0 = a.catch(0)),
                            console.log({ error: a.t0 }),
                            t(!1, Object(u.a)(a.t0));
                        case 15:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
        },
        j = function (e) {
          return (function () {
            var t = Object(r.a)(
              s.a.mark(function t(a) {
                var r;
                return s.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            Object(d.a)(),
                            (t.prev = 1),
                            (t.next = 4),
                            o.a.get("".concat(b, "/current/info"))
                          );
                        case 4:
                          (r = t.sent),
                            console.log({ LOGIN_CURRENT_USER_INFO: r.data }),
                            a({ type: n.LOGIN_DETAILS, payload: r.data }),
                            e(!0, ""),
                            (t.next = 14);
                          break;
                        case 10:
                          (t.prev = 10),
                            (t.t0 = t.catch(1)),
                            console.log({ error: t.t0 }),
                            e(!1, Object(u.a)(t.t0));
                        case 14:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 10]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        m = function () {
          return (
            delete o.a.defaults.headers.common["Tmis-Token"],
            localStorage.removeItem(l.b),
            localStorage.clear(),
            { type: n.LOGOUT }
          );
        },
        x = function (e) {
          return { type: n.TOGGLE_MENU, payload: e };
        },
        f = l.c,
        O = function (e) {
          return (function () {
            var t = Object(r.a)(
              s.a.mark(function t(a) {
                var r;
                return s.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            Object(d.a)(),
                            (t.next = 4),
                            o.a.get("".concat(f, "/basicinfos/acalqual"))
                          );
                        case 4:
                          (r = t.sent),
                            a({ type: n.ADD_BASIC_INFO, payload: r.data }),
                            e(!0, ""),
                            (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t.catch(0)),
                            e(
                              !1,
                              Object(u.a)(t.t0, function () {})
                            );
                        case 12:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        _ = function (e, t) {
          return (function () {
            var a = Object(r.a)(
              s.a.mark(function a(r) {
                var c;
                return s.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            Object(d.a)(),
                            (a.next = 4),
                            o.a.get(
                              ""
                                .concat(f, "/report/district/schools/")
                                .concat(e)
                            )
                          );
                        case 4:
                          (c = a.sent),
                            r({
                              type: n.LOAD_SCHOOLS_BY_DISTRICT,
                              payload: c.data,
                            }),
                            t(!0, ""),
                            (a.next = 12);
                          break;
                        case 9:
                          (a.prev = 9),
                            (a.t0 = a.catch(0)),
                            t(
                              !1,
                              Object(u.a)(a.t0, function () {})
                            );
                        case 12:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
        },
        v = function (e, t) {
          return (function () {
            var a = Object(r.a)(
              s.a.mark(function a(n) {
                var r;
                return s.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            Object(d.a)(),
                            (a.next = 4),
                            o.a.get(
                              ""
                                .concat(f, "/minicofinlimit/academic/")
                                .concat(e)
                            )
                          );
                        case 4:
                          (r = a.sent), t(!0, r.data, ""), (a.next = 11);
                          break;
                        case 8:
                          (a.prev = 8),
                            (a.t0 = a.catch(0)),
                            t(!1, null, Object(u.a)(a.t0));
                        case 11:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[0, 8]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
        },
        g = function (e, t) {
          return (function () {
            var a = Object(r.a)(
              s.a.mark(function a(n) {
                var r;
                return s.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            Object(d.a)(),
                            (a.next = 4),
                            o.a.post("".concat(f, "/minicofinlimit/create"), e)
                          );
                        case 4:
                          (r = a.sent), t(!0, r.data.message), (a.next = 11);
                          break;
                        case 8:
                          (a.prev = 8),
                            (a.t0 = a.catch(0)),
                            t(!1, Object(u.a)(a.t0));
                        case 11:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[0, 8]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
        },
        N = function (e) {
          return (function () {
            var t = Object(r.a)(
              s.a.mark(function t(a) {
                var r;
                return s.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            Object(d.a)(),
                            (t.next = 4),
                            o.a.get("".concat(f, "/basicinfos/userpreregister"))
                          );
                        case 4:
                          (r = t.sent),
                            console.log({ res: r.data }),
                            a({
                              type: n.REGISTER_STAFF_ASSETS,
                              payload: r.data,
                            }),
                            e(!0, ""),
                            (t.next = 13);
                          break;
                        case 10:
                          (t.prev = 10),
                            (t.t0 = t.catch(0)),
                            e(
                              !1,
                              Object(u.a)(t.t0, function () {})
                            );
                        case 13:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        T = function (e, t) {
          return (function () {
            var a = Object(r.a)(
              s.a.mark(function a(n) {
                var r;
                return s.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            Object(d.a)(),
                            (a.next = 4),
                            o.a.get("".concat(f, "/user/").concat(e))
                          );
                        case 4:
                          (r = a.sent),
                            console.log({ get_details_res: r.data }),
                            t(!0, r.data, ""),
                            (a.next = 12);
                          break;
                        case 9:
                          (a.prev = 9),
                            (a.t0 = a.catch(0)),
                            t(
                              !1,
                              null,
                              Object(u.a)(a.t0, function () {})
                            );
                        case 12:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
        },
        S = function (e, t) {
          return (function () {
            var a = Object(r.a)(
              s.a.mark(function a(r) {
                var c;
                return s.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            Object(d.a)(),
                            (a.next = 4),
                            o.a.get(
                              ""
                                .concat(f, "/basicinfos/userderegister/")
                                .concat(e || "1")
                            )
                          );
                        case 4:
                          (c = a.sent),
                            console.log({ res: c.data }),
                            r({ type: n.ASSIGN_STAFF_ASSETS, payload: c.data }),
                            t(!0, ""),
                            (a.next = 13);
                          break;
                        case 10:
                          (a.prev = 10),
                            (a.t0 = a.catch(0)),
                            t(
                              !1,
                              Object(u.a)(a.t0, function () {})
                            );
                        case 13:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
        },
        E = function (e, t) {
          return (function () {
            var a = Object(r.a)(
              s.a.mark(function a(n) {
                var r;
                return s.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            Object(d.a)(),
                            (a.next = 4),
                            o.a.post("".concat(f, "/staff/disable/").concat(e))
                          );
                        case 4:
                          (r = a.sent), t(!0, r.data.message), (a.next = 11);
                          break;
                        case 8:
                          (a.prev = 8),
                            (a.t0 = a.catch(0)),
                            t(!1, Object(u.a)(a.t0));
                        case 11:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[0, 8]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
        },
        A = function (e) {
          return (function () {
            var t = Object(r.a)(
              s.a.mark(function t(a) {
                var r;
                return s.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            Object(d.a)(),
                            (t.next = 4),
                            o.a.get("".concat(f, "/positions"))
                          );
                        case 4:
                          (r = t.sent),
                            console.log({ res: r.data }),
                            a({ type: n.GET_ALL_POSITIONS, payload: r.data }),
                            e(!0, ""),
                            (t.next = 13);
                          break;
                        case 10:
                          (t.prev = 10),
                            (t.t0 = t.catch(0)),
                            e(
                              !1,
                              Object(u.a)(t.t0, function () {})
                            );
                        case 13:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        y = (function () {
          var e = Object(r.a)(
            s.a.mark(function e(t) {
              var a;
              return s.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          Object(d.a)(),
                          (e.next = 4),
                          o.a.get("".concat(f, "/district"))
                        );
                      case 4:
                        (a = e.sent), t(!0, a.data, ""), (e.next = 11);
                        break;
                      case 8:
                        (e.prev = 8),
                          (e.t0 = e.catch(0)),
                          t(!1, [], Object(u.a)(e.t0));
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 8]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        I = function (e) {
          return (function () {
            var t = Object(r.a)(
              s.a.mark(function t(a) {
                var r;
                return s.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            Object(d.a)(),
                            (t.next = 4),
                            o.a.get("".concat(f, "/role"))
                          );
                        case 4:
                          (r = t.sent),
                            console.log({ roles: r.data }),
                            a({
                              type: n.GET_ALL_SYSTEM_ROLES,
                              payload: r.data,
                            }),
                            e(!0, ""),
                            (t.next = 13);
                          break;
                        case 10:
                          (t.prev = 10),
                            (t.t0 = t.catch(0)),
                            e(
                              !1,
                              Object(u.a)(t.t0, function () {})
                            );
                        case 13:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        w = l.c,
        k = (function () {
          var e = Object(r.a)(
            s.a.mark(function e(t, a) {
              var n;
              return s.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          Object(d.a)(),
                          (e.next = 4),
                          o.a.get(
                            "".concat(w, "/rebdistribution/academic/").concat(t)
                          )
                        );
                      case 4:
                        (n = e.sent),
                          console.log({ red_distribution_data: n.data }),
                          a(!0, n.data, ""),
                          (e.next = 12);
                        break;
                      case 9:
                        (e.prev = 9),
                          (e.t0 = e.catch(0)),
                          a(!1, null, Object(u.a)(e.t0));
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 9]]
              );
            })
          );
          return function (t, a) {
            return e.apply(this, arguments);
          };
        })(),
        R = (function () {
          var e = Object(r.a)(
            s.a.mark(function e(t, a) {
              var n;
              return s.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          Object(d.a)(),
                          (e.next = 4),
                          o.a.post("".concat(w, "/rebdistribution"), t)
                        );
                      case 4:
                        (n = e.sent), a(!0, n.data, ""), (e.next = 11);
                        break;
                      case 8:
                        (e.prev = 8),
                          (e.t0 = e.catch(0)),
                          a(!1, null, Object(u.a)(e.t0));
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 8]]
              );
            })
          );
          return function (t, a) {
            return e.apply(this, arguments);
          };
        })(),
        L = (function () {
          var e = Object(r.a)(
            s.a.mark(function e(t, a) {
              var n, r, c;
              return s.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = t.academic_id),
                          (r = t.district_id),
                          (e.prev = 1),
                          Object(d.a)(),
                          (e.next = 5),
                          o.a.get(
                            ""
                              .concat(w, "/districtdistribution/peracademic/")
                              .concat(r, "/")
                              .concat(n)
                          )
                        );
                      case 5:
                        (c = e.sent),
                          console.log({ distribution_data: c.data }),
                          a(!0, c.data, ""),
                          (e.next = 14);
                        break;
                      case 10:
                        (e.prev = 10),
                          (e.t0 = e.catch(1)),
                          console.log(e.t0),
                          a(!1, null, Object(u.a)(e.t0));
                      case 14:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 10]]
              );
            })
          );
          return function (t, a) {
            return e.apply(this, arguments);
          };
        })(),
        P = (function () {
          var e = Object(r.a)(
            s.a.mark(function e(t, a) {
              var n;
              return s.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          Object(d.a)(),
                          (e.next = 4),
                          o.a.post(
                            "".concat(w, "/districtdistribution/distribution"),
                            t
                          )
                        );
                      case 4:
                        (n = e.sent), a(!0, n.data, ""), (e.next = 11);
                        break;
                      case 8:
                        (e.prev = 8),
                          (e.t0 = e.catch(0)),
                          a(!1, null, Object(u.a)(e.t0));
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 8]]
              );
            })
          );
          return function (t, a) {
            return e.apply(this, arguments);
          };
        })(),
        C = a(4),
        D = l.c,
        q = (function () {
          var e = Object(r.a)(
            s.a.mark(function e(t, a) {
              var n;
              return s.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          Object(d.a)(),
                          (e.next = 4),
                          o.a.get(
                            "".concat(D, "/report/district/schools/").concat(t)
                          )
                        );
                      case 4:
                        (n = e.sent), a(!0, n.data, ""), (e.next = 12);
                        break;
                      case 8:
                        (e.prev = 8),
                          (e.t0 = e.catch(0)),
                          console.log(e.t0),
                          a(!1, null, Object(u.a)(e.t0));
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 8]]
              );
            })
          );
          return function (t, a) {
            return e.apply(this, arguments);
          };
        })(),
        M = (function () {
          var e = Object(r.a)(
            s.a.mark(function e(t, a, n) {
              var r;
              return s.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          Object(d.a)(),
                          (e.prev = 1),
                          (e.next = 4),
                          o.a.get(
                            ""
                              .concat(l.c, "/schoolpostrequest/request/")
                              .concat(t, "/")
                              .concat(a)
                          )
                        );
                      case 4:
                        (r = e.sent), n(!0, r.data, ""), (e.next = 12);
                        break;
                      case 8:
                        (e.prev = 8),
                          (e.t0 = e.catch(1)),
                          console.log("Err: ", Object(C.a)({}, e.t0)),
                          n(!1, null, Object(u.a)(e.t0));
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 8]]
              );
            })
          );
          return function (t, a, n) {
            return e.apply(this, arguments);
          };
        })(),
        F = l.c,
        U = (function () {
          var e = Object(r.a)(
            s.a.mark(function e(t, a) {
              var n;
              return s.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          Object(d.a)(),
                          (e.next = 4),
                          o.a.get(
                            "".concat(F, "/report/school/teachers/").concat(t)
                          )
                        );
                      case 4:
                        (n = e.sent),
                          console.log(n),
                          a(!0, n.data, ""),
                          (e.next = 13);
                        break;
                      case 9:
                        (e.prev = 9),
                          (e.t0 = e.catch(0)),
                          console.log(e.t0),
                          a(!1, null, Object(u.a)(e.t0));
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 9]]
              );
            })
          );
          return function (t, a) {
            return e.apply(this, arguments);
          };
        })(),
        H = (function () {
          var e = Object(r.a)(
            s.a.mark(function e(t, a) {
              return s.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          Object(d.a)(),
                          (e.next = 4),
                          o.a.post("".concat(F, "/user/assign/role"), t)
                        );
                      case 4:
                        a(!0, ""), (e.next = 11);
                        break;
                      case 7:
                        (e.prev = 7),
                          (e.t0 = e.catch(0)),
                          console.log(e.t0),
                          a(!1, Object(u.a)(e.t0));
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 7]]
              );
            })
          );
          return function (t, a) {
            return e.apply(this, arguments);
          };
        })(),
        G = (function () {
          var e = Object(r.a)(
            s.a.mark(function e(t, a, n) {
              var r;
              return s.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          Object(d.a)(),
                          (e.next = 4),
                          o.a.post(
                            "".concat(F, "/user/updateinfo/profile/").concat(t),
                            a
                          )
                        );
                      case 4:
                        (r = e.sent), n(!0, r.data.message), (e.next = 12);
                        break;
                      case 8:
                        (e.prev = 8),
                          (e.t0 = e.catch(0)),
                          console.log(e.t0),
                          n(!1, Object(u.a)(e.t0));
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 8]]
              );
            })
          );
          return function (t, a, n) {
            return e.apply(this, arguments);
          };
        })(),
        Y = (function () {
          var e = Object(r.a)(
            s.a.mark(function e(t, a, n) {
              var r;
              return s.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          Object(d.a)(),
                          (e.next = 4),
                          o.a.get(
                            ""
                              .concat(F, "/school/occupation/")
                              .concat(t, "/")
                              .concat(a)
                          )
                        );
                      case 4:
                        (r = e.sent), n(!0, r.data, ""), (e.next = 12);
                        break;
                      case 8:
                        (e.prev = 8),
                          (e.t0 = e.catch(0)),
                          console.log(e.t0),
                          n(!1, null, Object(u.a)(e.t0));
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 8]]
              );
            })
          );
          return function (t, a, n) {
            return e.apply(this, arguments);
          };
        })(),
        z = (function () {
          var e = Object(r.a)(
            s.a.mark(function e(t) {
              var a;
              return s.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), (e.next = 3), o.a.get(l.e);
                      case 3:
                        (a = e.sent),
                          console.log({ count: a.data }),
                          t(!0, a.data, ""),
                          (e.next = 12);
                        break;
                      case 8:
                        (e.prev = 8),
                          (e.t0 = e.catch(0)),
                          console.log(e.t0),
                          t(!1, null, Object(u.a)(e.t0));
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 8]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        B = (function () {
          var e = Object(r.a)(
            s.a.mark(function e(t, a, n) {
              var r;
              return s.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (e.next = 3),
                          o.a.post(l.f + "/".concat(t), [a])
                        );
                      case 3:
                        (r = e.sent),
                          console.log({ sent_data: r.data }),
                          n(!0, r.data, ""),
                          (e.next = 12);
                        break;
                      case 8:
                        (e.prev = 8),
                          (e.t0 = e.catch(0)),
                          console.log(e.t0),
                          n(!1, null, Object(u.a)(e.t0));
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 8]]
              );
            })
          );
          return function (t, a, n) {
            return e.apply(this, arguments);
          };
        })(),
        V = (function () {
          var e = Object(r.a)(
            s.a.mark(function e(t, a) {
              var n;
              return s.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          Object(d.a)(),
                          (e.next = 4),
                          o.a.post(l.c + "/user/add/retrieved", t)
                        );
                      case 4:
                        (n = e.sent),
                          console.log({ sent_data: n.data }),
                          a(!0, n.data, ""),
                          (e.next = 13);
                        break;
                      case 9:
                        (e.prev = 9),
                          (e.t0 = e.catch(0)),
                          console.log(e.t0),
                          a(!1, null, Object(u.a)(e.t0));
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 9]]
              );
            })
          );
          return function (t, a) {
            return e.apply(this, arguments);
          };
        })(),
        W = (function () {
          var e = Object(r.a)(
            s.a.mark(function e(t) {
              var a;
              return s.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          Object(d.a)(),
                          (e.next = 4),
                          o.a.get("".concat(F, "/user/status/Disabled"))
                        );
                      case 4:
                        (a = e.sent), t(!0, a.data, ""), (e.next = 12);
                        break;
                      case 8:
                        (e.prev = 8),
                          (e.t0 = e.catch(0)),
                          console.log(e.t0),
                          t(!1, [], Object(u.a)(e.t0));
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 8]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Q = (function () {
          var e = Object(r.a)(
            s.a.mark(function e(t, a) {
              var n;
              return s.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          Object(d.a)(),
                          (e.next = 4),
                          o.a.get("".concat(F, "/user/status/nid/").concat(t))
                        );
                      case 4:
                        (n = e.sent), a(!0, n.data, ""), (e.next = 12);
                        break;
                      case 8:
                        (e.prev = 8),
                          (e.t0 = e.catch(0)),
                          console.log(e.t0),
                          a(!1, null, Object(u.a)(e.t0));
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 8]]
              );
            })
          );
          return function (t, a) {
            return e.apply(this, arguments);
          };
        })(),
        J = l.c,
        X = (function () {
          var e = Object(r.a)(
            s.a.mark(function e(t, a) {
              var n;
              return s.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          Object(d.a)(),
                          (e.next = 4),
                          o.a.post("".concat(J, "/placementapproval/save"), t)
                        );
                      case 4:
                        (n = e.sent), a(!0, n.data, ""), (e.next = 12);
                        break;
                      case 8:
                        (e.prev = 8),
                          (e.t0 = e.catch(0)),
                          console.log(e.t0),
                          a(!1, null, Object(u.a)(e.t0));
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 8]]
              );
            })
          );
          return function (t, a) {
            return e.apply(this, arguments);
          };
        })(),
        K = function (e, t) {
          var a = e.school_code,
            c = e.academic_id;
          return (function () {
            var e = Object(r.a)(
              s.a.mark(function e(r) {
                var i;
                return s.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            Object(d.a)(),
                            (e.prev = 1),
                            (e.next = 4),
                            o.a.get(
                              ""
                                .concat(J, "/placementapproval/slist/school/")
                                .concat(a, "/")
                                .concat(c)
                            )
                          );
                        case 4:
                          (i = e.sent),
                            r({ type: n.SET_PLACEMENT_LIST, payload: i.data }),
                            t(!0, ""),
                            (e.next = 13);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(1)),
                            console.log({ error: e.t0 }),
                            t(!1, Object(u.a)(e.t0));
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 9]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        },
        $ = function (e, t) {
          var a = e.district_code,
            c = e.academic_id;
          return (function () {
            var e = Object(r.a)(
              s.a.mark(function e(r) {
                var i;
                return s.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            Object(d.a)(),
                            (e.prev = 1),
                            (e.next = 4),
                            o.a.get(
                              ""
                                .concat(J, "/placementapproval/dlist/district/")
                                .concat(a, "/")
                                .concat(c)
                            )
                          );
                        case 4:
                          (i = e.sent),
                            r({ type: n.SET_PLACEMENT_LIST, payload: i.data }),
                            t(!0, ""),
                            (e.next = 13);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(1)),
                            console.log({ error: e.t0 }),
                            t(!1, Object(u.a)(e.t0));
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 9]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        },
        Z = function (e, t, a) {
          return (function () {
            var c = Object(r.a)(
              s.a.mark(function r(c) {
                return s.a.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            Object(d.a)(),
                            (r.prev = 1),
                            (r.next = 4),
                            o.a.post(
                              ""
                                .concat(J, "/placementapproval/update/")
                                .concat(e),
                              t
                            )
                          );
                        case 4:
                          c({
                            type: n.UPDATE_PLACEMENT_DATA,
                            payload: {
                              comment: t.ht_comment,
                              list: t.list,
                              placement_id: e,
                            },
                          }),
                            a(!0, ""),
                            (r.next = 12);
                          break;
                        case 8:
                          (r.prev = 8),
                            (r.t0 = r.catch(1)),
                            console.log({ error: r.t0 }),
                            a(!1, Object(u.a)(r.t0));
                        case 12:
                        case "end":
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[1, 8]]
                );
              })
            );
            return function (e) {
              return c.apply(this, arguments);
            };
          })();
        },
        ee = function (e, t) {
          var a = e.placement_id,
            c = e.dde_comment;
          return (function () {
            var e = Object(r.a)(
              s.a.mark(function e(r) {
                var i;
                return s.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            Object(d.a)(),
                            (e.prev = 1),
                            (e.next = 4),
                            o.a.post(
                              ""
                                .concat(J, "/placementapproval/approve/")
                                .concat(a),
                              { dde_comment: c }
                            )
                          );
                        case 4:
                          (i = e.sent),
                            r({
                              type: n.CHANGE_PLACEMENT_STATUS,
                              payload: { dde_comment: c, id: a },
                            }),
                            t(!0, i.data.message),
                            (e.next = 13);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(1)),
                            console.log({ error: e.t0 }),
                            t(!1, Object(u.a)(e.t0));
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 9]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        },
        te = function (e, t) {
          var a = e.placement_id,
            c = e.dde_comment;
          return (function () {
            var e = Object(r.a)(
              s.a.mark(function e(r) {
                var i;
                return s.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            Object(d.a)(),
                            (e.prev = 1),
                            (e.next = 4),
                            o.a.post(
                              ""
                                .concat(J, "/placementapproval/reject/")
                                .concat(a),
                              { dde_comment: c }
                            )
                          );
                        case 4:
                          (i = e.sent),
                            r({
                              type: n.CHANGE_PLACEMENT_STATUS,
                              payload: { dde_comment: c, id: a },
                            }),
                            t(!0, i.data.message),
                            (e.next = 13);
                          break;
                        case 9:
                          (e.prev = 9),
                            (e.t0 = e.catch(1)),
                            console.log({ error: e.t0 }),
                            t(!1, Object(u.a)(e.t0));
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 9]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        },
        ae = (function () {
          var e = Object(r.a)(
            s.a.mark(function e(t, a, n, r) {
              var c, i;
              return s.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          r(!0, "", null),
                          (e.prev = 1),
                          Object(d.a)(),
                          (e.next = 5),
                          o.a.get(
                            ""
                              .concat(
                                J,
                                "/placementapproval/monthlylist/district/"
                              )
                              .concat(t, "/")
                              .concat(a, "/")
                              .concat(n.toLocaleLowerCase())
                          )
                        );
                      case 5:
                        (c = e.sent),
                          (i = c.data.filter(function (e) {
                            return null !== e.approved_date;
                          })),
                          r(!1, "", i),
                          (e.next = 13);
                        break;
                      case 10:
                        (e.prev = 10),
                          (e.t0 = e.catch(1)),
                          r(
                            !1,
                            Object(u.a)(e.t0, function () {}),
                            null
                          );
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 10]]
              );
            })
          );
          return function (t, a, n, r) {
            return e.apply(this, arguments);
          };
        })(),
        ne = (function () {
          var e = Object(r.a)(
            s.a.mark(function e(t, a, n) {
              var r, c;
              return s.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          n(!0, "", null),
                          (e.prev = 1),
                          Object(d.a)(),
                          (e.next = 5),
                          o.a.get(
                            ""
                              .concat(J, "/placementapproval/slist/school/")
                              .concat(t, "/")
                              .concat(a)
                          )
                        );
                      case 5:
                        (r = e.sent),
                          (c = r.data.filter(function (e) {
                            return null !== e.approved_date;
                          })),
                          n(!1, "", c),
                          (e.next = 13);
                        break;
                      case 10:
                        (e.prev = 10),
                          (e.t0 = e.catch(1)),
                          n(
                            !1,
                            Object(u.a)(e.t0, function () {}),
                            null
                          );
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 10]]
              );
            })
          );
          return function (t, a, n) {
            return e.apply(this, arguments);
          };
        })(),
        re = (function () {
          var e = Object(r.a)(
            s.a.mark(function e(t, a, n) {
              var r, c;
              return s.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          n(!0, "", null),
                          (e.prev = 1),
                          Object(d.a)(),
                          (e.next = 5),
                          o.a.get(
                            ""
                              .concat(
                                J,
                                "/placementapproval/monthlylist/national/"
                              )
                              .concat(t, "/")
                              .concat(a)
                          )
                        );
                      case 5:
                        (r = e.sent),
                          (c = r.data.filter(function (e) {
                            return null !== e.approved_date;
                          })),
                          n(!1, "", c),
                          (e.next = 13);
                        break;
                      case 10:
                        (e.prev = 10),
                          (e.t0 = e.catch(1)),
                          n(
                            !1,
                            Object(u.a)(e.t0, function () {}),
                            null
                          );
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 10]]
              );
            })
          );
          return function (t, a, n) {
            return e.apply(this, arguments);
          };
        })(),
        ce = function (e) {
          return (function () {
            var t = Object(r.a)(
              s.a.mark(function t(a) {
                var r;
                return s.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            Object(d.a)(),
                            (t.prev = 1),
                            (t.next = 4),
                            o.a.get("".concat(J, "/academiccalendars"))
                          );
                        case 4:
                          (r = t.sent),
                            a({ type: n.GET_ACADEMICS, payload: r.data }),
                            e(!1, r.data, ""),
                            (t.next = 13);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t.catch(1)),
                            console.log({ error: t.t0 }),
                            e(!1, null, Object(u.a)(t.t0));
                        case 13:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 9]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        se = function (e, t) {
          return (
            t(!0, null, ""),
            (function () {
              var a = Object(r.a)(
                s.a.mark(function a(r) {
                  var c;
                  return s.a.wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (a.prev = 0),
                              Object(d.a)(),
                              (a.next = 4),
                              o.a.get(
                                ""
                                  .concat(l.c, "/changeteacherstatus/")
                                  .concat(e)
                              )
                            );
                          case 4:
                            (c = a.sent),
                              console.log(
                                "===================================="
                              ),
                              console.log({ getAllTermination: c }),
                              console.log(
                                "===================================="
                              ),
                              r({
                                type: n.GET_ALL_TERMINATION,
                                payload: c.data,
                              }),
                              t(!1, c.data, ""),
                              (a.next = 16);
                            break;
                          case 12:
                            (a.prev = 12),
                              (a.t0 = a.catch(0)),
                              console.log(a.t0),
                              t(!1, null, Object(u.a)(a.t0));
                          case 16:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [[0, 12]]
                  );
                })
              );
              return function (e) {
                return a.apply(this, arguments);
              };
            })()
          );
        },
        ie = function (e, t) {
          return (function () {
            var a = Object(r.a)(
              s.a.mark(function a(r) {
                var c, i;
                return s.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            Object(d.a)(),
                            (a.next = 4),
                            o.a.post(
                              "".concat(
                                l.c,
                                "/changeteacherstatus/hrchangeteacherstatus"
                              ),
                              e
                            )
                          );
                        case 4:
                          return (
                            (c = a.sent),
                            console.log("===================================="),
                            console.log({
                              FC_UpdateThisTermination: c,
                              thisTermination: e,
                            }),
                            console.log("===================================="),
                            (a.next = 10),
                            o.a.get("".concat(l.c, "/changeteacherstatus/hr"))
                          );
                        case 10:
                          (i = a.sent),
                            console.log("===================================="),
                            console.log({ getAllTermination: i }),
                            console.log("===================================="),
                            r({ type: n.UPDATE_TERMINATION, payload: i.data }),
                            t(!0, ""),
                            (a.next = 22);
                          break;
                        case 18:
                          (a.prev = 18),
                            (a.t0 = a.catch(0)),
                            console.log(a.t0),
                            t(!1, Object(u.a)(a.t0));
                        case 22:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[0, 18]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
        },
        oe = a(40);
      !(function (e) {
        (e.SCHOOL_LEVELS = "SCHOOL_LEVELS"), (e.COMBINATIONS = "COMBINATIONS");
      })(h || (h = {}));
      var le = l.c,
        de = function (e) {
          return (function () {
            var t = Object(r.a)(
              s.a.mark(function t(a) {
                var r;
                return s.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            Object(d.a)(),
                            (t.next = 4),
                            o.a.get("".concat(le, "/hierarch"))
                          );
                        case 4:
                          (r = t.sent),
                            console.log({ res_schools_hierarchy: r.data }),
                            a({ type: n.GET_ALL_HIERARCHY, payload: r.data }),
                            e(!0, ""),
                            (t.next = 14);
                          break;
                        case 10:
                          (t.prev = 10),
                            (t.t0 = t.catch(0)),
                            console.log(
                              "Error on Hierarchy: ",
                              Object(C.a)({}, t.t0)
                            ),
                            e(
                              !1,
                              Object(u.a)(t.t0, function () {})
                            );
                        case 14:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        ue = (function () {
          var e = Object(r.a)(
            s.a.mark(function e(t, a) {
              var n;
              return s.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          Object(d.a)(),
                          (e.next = 4),
                          o.a.get(
                            "".concat(le, "/schoolhierarch/school/").concat(t)
                          )
                        );
                      case 4:
                        (n = e.sent),
                          console.log({ res_schools_hierarchy: n.data }),
                          a(!0, n.data),
                          (e.next = 13);
                        break;
                      case 9:
                        (e.prev = 9),
                          (e.t0 = e.catch(0)),
                          console.log(
                            "Error on Hierarchy: ",
                            Object(C.a)({}, e.t0)
                          ),
                          a(!1, []);
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 9]]
              );
            })
          );
          return function (t, a) {
            return e.apply(this, arguments);
          };
        })(),
        he = (function () {
          var e = Object(r.a)(
            s.a.mark(function e(t, a) {
              var n;
              return s.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          Object(d.a)(),
                          (e.next = 4),
                          o.a.get(
                            "".concat(le, "/teacherhierarch/teacher/").concat(t)
                          )
                        );
                      case 4:
                        (n = e.sent),
                          console.log({ res_teacher_hierarchy: n.data }),
                          a(!0, n.data),
                          (e.next = 13);
                        break;
                      case 9:
                        (e.prev = 9),
                          (e.t0 = e.catch(0)),
                          console.log(
                            "Error on Teacher Hierarchy: ",
                            Object(C.a)({}, e.t0)
                          ),
                          a(!1, []);
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 9]]
              );
            })
          );
          return function (t, a) {
            return e.apply(this, arguments);
          };
        })(),
        be = function (e, t) {
          var a,
            n = [],
            r = [],
            c = Object(oe.a)(e);
          try {
            var s = function () {
              var e = a.value;
              !0 === t.status &&
                t.type === h.SCHOOL_LEVELS &&
                void 0 ===
                  n.find(function (t) {
                    return t.level_code === e.level_code;
                  }) &&
                n.push({ level_code: e.level_code, level_name: e.level_name }),
                !0 === t.status &&
                  t.type === h.COMBINATIONS &&
                  void 0 ===
                    r.find(function (t) {
                      return t.combination_code === e.combination_code;
                    }) &&
                  r.push({
                    combination_code: e.combination_code,
                    combination_name: e.combination_name,
                  });
            };
            for (c.s(); !(a = c.n()).done; ) s();
          } catch (i) {
            c.e(i);
          } finally {
            c.f();
          }
          return { levels: n, combinations: r };
        },
        pe = l.c,
        je = function (e, t, a, c, i) {
          return (function () {
            var l = Object(r.a)(
              s.a.mark(function r(l) {
                var u;
                return s.a.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            i(!0),
                            (r.prev = 1),
                            Object(d.a)(),
                            (r.next = 5),
                            o.a.get(
                              ""
                                .concat(pe, "/admin/role/")
                                .concat(e, "/")
                                .concat(a, "/")
                                .concat(t)
                            )
                          );
                        case 5:
                          (u = r.sent),
                            console.log({ system_users: u.data }),
                            l({
                              type: n.GET_ALL_SYSTEM_USERS,
                              payload: {
                                page_number: a,
                                users: u.data,
                                clean: c,
                              },
                            }),
                            i(!1),
                            (r.next = 15);
                          break;
                        case 11:
                          (r.prev = 11),
                            (r.t0 = r.catch(1)),
                            i(!1),
                            console.log(
                              "Error on system users: ",
                              Object(C.a)({}, r.t0)
                            );
                        case 15:
                        case "end":
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[1, 11]]
                );
              })
            );
            return function (e) {
              return l.apply(this, arguments);
            };
          })();
        },
        me = function () {
          return (function () {
            var e = Object(r.a)(
              s.a.mark(function e(t) {
                return s.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        t({ type: n.CLEAN_SYSTEM_USERS_LIST });
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        };
    },
    13: function (e, t, a) {
      "use strict";
      a.d(t, "c", function () {
        return n;
      }),
        a.d(t, "d", function () {
          return r;
        }),
        a.d(t, "a", function () {
          return c;
        }),
        a.d(t, "b", function () {
          return s;
        }),
        a.d(t, "e", function () {
          return i;
        }),
        a.d(t, "f", function () {
          return o;
        });
      var n = "http://10.10.68.201/api",
        r = "http://10.10.68.201/api/public/documents",
        c = "/tmis",
        s = "26e491ac08824ecfbdfd19abfcf5200a",
        i = "https://paragraph.rw/api/placement/waitingcandidatotal",
        o = "https://paragraph.rw/api/placement/retrieveteacher";
    },
    18: function (e, t, a) {
      "use strict";
      a.d(t, "f", function () {
        return n;
      }),
        a.d(t, "a", function () {
          return r;
        }),
        a.d(t, "g", function () {
          return c;
        }),
        a.d(t, "c", function () {
          return s;
        }),
        a.d(t, "b", function () {
          return i;
        }),
        a.d(t, "d", function () {
          return o;
        }),
        a.d(t, "h", function () {
          return d;
        }),
        a.d(t, "e", function () {
          return u;
        });
      var n = function (e, t) {
          var a =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          return void 0 === t || "" === t
            ? e
            : e.filter(function (e) {
                var n,
                  r = null === a ? e : a;
                for (var c in r)
                  if (
                    ((n = !1),
                    null !== e[c] &&
                      void 0 !== e[c] &&
                      (n =
                        e[c].toString().toLowerCase().indexOf(t.toLowerCase()) >
                        -1))
                  )
                    break;
                return n;
              });
        },
        r = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "DD/MM/YYYY";
          if (null === e) return "";
          var a = new Date(e);
          return "YYYY/MM/DD" === t
            ? a.getFullYear() +
                "-" +
                ("0" + (a.getMonth() + 1)).slice(-2) +
                "-" +
                a.getDate()
            : "MM/DD/YYYY" === t
            ? ("0" + (a.getMonth() + 1)).slice(-2) +
              "/" +
              a.getDate() +
              "/" +
              a.getFullYear()
            : a.getDate() +
              "/" +
              ("0" + (a.getMonth() + 1)).slice(-2) +
              "/" +
              a.getFullYear();
        };
      function c(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20;
        return (null === e || void 0 === e ? void 0 : e.length) > t
          ? e.substring(0, t - 2) + "..."
          : e;
      }
      function s(e) {
        return e.reduce(function (e, t) {
          return (e += t);
        });
      }
      var i = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        o = function (e) {
          return e.charAt(0).toUpperCase() + e.slice(1);
        },
        l = function (e, t) {
          return function (a, n) {
            return (a[e] < n[e] ? -1 : a[e] > n[e] ? 1 : 0) * t;
          };
        },
        d = function (e, t, a) {
          var n =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : "ASC";
          if (e && a.length > 0) {
            var r = "ASC" === n ? 1 : -1;
            return t.sort(l(a, r));
          }
          return t;
        },
        u = function (e) {
          return null === e || null !== e.match(/^ *$/);
        };
    },
    24: function (e, t, a) {
      "use strict";
      a(2);
      var n = function (e) {
          switch (e) {
            case "danger":
              return "text-white bg-red-500";
            case "info":
              return "text-white bg-blue-300";
            case "success":
              return "text-white bg-green-500";
            default:
              return "";
          }
        },
        r = a(1);
      t.a = function (e) {
        var t = e.onClick,
          a = void 0 === t ? function () {} : t,
          c = e.children,
          s = e.theme,
          i = void 0 === s ? "info" : s,
          o = e.className,
          l = void 0 === o ? "" : o,
          d = e.fixed,
          u = void 0 !== d && d;
        return Object(r.jsx)("div", {
          onClick: function () {
            return a();
          },
          className:
            "\n      text-center px-3 py-2 rounded \n      animate__animated \n      animate__fadeIn \n      animate__faster \n      my-1 \n      "
              .concat(n(i), " \n      ")
              .concat(l, "\n      ")
              .concat(
                !0 === u
                  ? " fixed top-16 mt-2 z-100 right-2 animate__animated animate__slideInDown animate__faster"
                  : "",
                "\n      "
              ),
          children: c,
        });
      };
    },
    25: function (e, t, a) {
      "use strict";
      a(2);
      var n = function (e) {
          switch (e) {
            case "sm":
              return "py-1 px-2 text-sm";
            case "md":
              return "py-2 px-4 text-md";
            case "lg":
              return "py-3 px-5 text-lg";
            default:
              return "";
          }
        },
        r = function (e) {
          switch (e) {
            case "accent":
              return "bg-accent-800 text-black hover:bg-opacity-90";
            case "accent-light":
              return "bg-yellow-100 border border-yellow-300 text-yellow-900 hover:bg-accent-800 hover:text-black";
            case "danger":
              return "bg-red-500 hover:bg-red-600  text-white";
            case "danger-light":
              return "bg-red-100 hover:bg-red-600 text-red-800 hover:text-white";
            case "primary":
              return "bg-primary-800 hover:bg-opacity-90  text-white";
            case "primary-light":
              return "bg-blue-100 text-primary-800 hover:bg-primary-800  hover:text-white";
            case "success":
              return "bg-green-500 hover:bg-green-600  text-white";
            case "success-light":
              return "bg-green-100 text-green-800 hover:text-white hover:bg-green-600  text-white";
            case "default":
              return "bg-gray-100 hover:bg-gray-200  text-black";
            default:
              return "";
          }
        },
        c = a(42),
        s = a(1),
        i = function () {};
      t.a = function (e) {
        var t = e.onClick,
          a = void 0 === t ? i : t,
          o = e.children,
          l = e.theme,
          d = void 0 === l ? "accent" : l,
          u = e.type,
          h = void 0 === u ? "submit" : u,
          b = e.full,
          p = void 0 !== b && b,
          j = e.disabled,
          m = void 0 !== j && j,
          x = e.className,
          f = void 0 === x ? "" : x,
          O = e.size,
          _ = void 0 === O ? "md" : O,
          v = e.loading,
          g = void 0 !== v && v;
        return Object(s.jsx)("button", {
          className: "\n      "
            .concat(n(_), " \n      ")
            .concat(p ? "w-full" : "", " \n      font-bold rounded \n      ")
            .concat(r(d), " \n      ")
            .concat(f),
          disabled: m,
          type: h,
          onClick: a,
          children: g
            ? Object(s.jsx)(c.c, {
                className: "loading-animate text-2xl inline",
              })
            : o,
        });
      };
    },
    30: function (e, t, a) {
      "use strict";
      a(2);
      var n = a(1);
      t.a = function (e) {
        var t = e.children,
          a = e.className,
          r = void 0 === a ? "" : a,
          c = e.container,
          s = void 0 === c || c;
        return Object(n.jsx)("div", {
          className: s ? "container mx-auto p-2 lg:p-2" : "p-2 lg:p-3",
          children: Object(n.jsx)("div", {
            className:
              "bg-white dark:bg-dark-800 dark:text-white rounded border border-gray-200 dark:border-gray-600 p-2 px-3 ".concat(
                r
              ),
            children: t,
          }),
        });
      };
    },
    31: function (e, t, a) {
      "use strict";
      var n = a(20),
        r = a(2),
        c = a(36),
        s = a(49),
        i = a(1);
      t.a = function (e) {
        var t = e.onChange,
          a = e.value,
          o = e.error,
          l = e.label,
          d = e.placeholder,
          u = e.type,
          h = void 0 === u ? "text" : u,
          b = e.disabled,
          p = void 0 !== b && b,
          j = e.name,
          m = e.Input_className,
          x = void 0 === m ? "" : m,
          f = e.Label_className,
          O = void 0 === f ? "" : f,
          _ = e.InputContainer_className,
          v = void 0 === _ ? "" : _,
          g = e.MainContainer_className,
          N = void 0 === g ? "" : g,
          T = e.size,
          S = void 0 === T ? "md" : T,
          E = e.max,
          A = Object(r.useState)(!1),
          y = Object(n.a)(A, 2),
          I = y[0],
          w = y[1];
        return Object(i.jsx)(i.Fragment, {
          children: Object(i.jsxs)("div", {
            className: "w-full my-2 ".concat(N),
            children: [
              "" !== l &&
                Object(i.jsx)("label", {
                  htmlFor: "login-form-email",
                  className: "text-primary-900 dark:text-primary-100 ".concat(
                    O
                  ),
                  children: l,
                }),
              Object(i.jsxs)("div", {
                className: "rounded relative ".concat(v),
                children: [
                  Object(i.jsx)("input", {
                    type: I ? "text" : h,
                    name: j,
                    placeholder: d,
                    onChange: t,
                    className:
                      "\n                w-full text-lg rounded border-2 \n                "
                        .concat(Object(s.a)(S), "\n                ")
                        .concat(
                          "" !== o
                            ? "border-red-500 dark:text-white bg-red-100 dark:bg-red-900 dark:bg-opacity-30"
                            : "border-primary-800 dark:text-white bg-white dark:bg-primary-900 ",
                          "\n                px-3 "
                        )
                        .concat(x),
                    value: a,
                    disabled: p,
                    maxLength: E,
                  }),
                  "password" === h &&
                    Object(i.jsx)("button", {
                      className: "absolute -ml-11 p-1 mt-0.5 text-accent-800",
                      type: "button",
                      onClick: w.bind(undefined, !I),
                      children: I
                        ? Object(i.jsx)(c.c, { className: "text-4xl" })
                        : Object(i.jsx)(c.d, { className: "text-4xl" }),
                    }),
                  "" !== o &&
                    Object(i.jsx)("p", {
                      className: "text-sm text-red-600 dark:text-red-500",
                      children: o,
                    }),
                ],
              }),
            ],
          }),
        });
      };
    },
    39: function (e, t, a) {
      "use strict";
      a(2);
      var n = function (e) {
          switch (e) {
            case "sm":
              return "text-lg";
            case "md":
              return "text-xl";
            case "lg":
              return "text-2xl";
            case "xl":
              return "text-3xl";
            default:
              return "";
          }
        },
        r = function (e) {
          switch (e) {
            case "accent":
              return "text-accent-800";
            case "danger":
              return "text-red-500 dark:text-red-400";
            case "primary":
              return "text-primary-800 dark:text-blue-400";
            case "success":
              return "text-green-500 dark:text-green-400";
            case "auto":
              return "text-black dark:text-white";
            default:
              return "";
          }
        },
        c = a(1);
      t.a = function (e) {
        var t = e.children,
          a = e.theme,
          s = void 0 === a ? "default" : a,
          i = e.type,
          o = void 0 === i ? "h3" : i,
          l = e.className,
          d = void 0 === l ? "" : l,
          u = e.size,
          h = void 0 === u ? "xl" : u;
        return "h1" === o
          ? Object(c.jsx)("h1", {
              className: "\n      "
                .concat(n(h), " w-full font-bold rounded \n      ")
                .concat(r(s), " \n      ")
                .concat(d),
              children: t,
            })
          : "h2" === o || "h3" === o || "h3" === o
          ? Object(c.jsx)("h3", {
              className: "\n      "
                .concat(n(h), " w-full font-bold rounded \n      ")
                .concat(r(s), " \n      ")
                .concat(d),
              children: t,
            })
          : null;
      };
    },
    48: function (e, t, a) {
      "use strict";
      a(2);
      var n = a(42),
        r = a(1);
      t.a = function (e) {
        var t = e.className,
          a = void 0 === t ? "" : t;
        return Object(r.jsx)(r.Fragment, {
          children: Object(r.jsx)(n.c, {
            className: "loading-animate ".concat(
              "" === a ? "text-6xl text-black dark:text-white" : "",
              " inline"
            ),
          }),
        });
      };
    },
    49: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return n;
      });
      var n = function (e) {
        switch (e) {
          case "sm":
            return "p-1 text-sm";
          case "md":
            return "p-2 px-4 text-md";
          case "lg":
            return "p-3 px-5 text-lg";
          default:
            return "";
        }
      };
    },
    51: function (e, t, a) {
      "use strict";
      a(2);
      var n = a(30),
        r = a(39),
        c = a(1);
      t.a = function (e) {
        var t = e.title,
          a = e.subTitle,
          s = e.children;
        e.className;
        return Object(c.jsxs)(n.a, {
          children: [
            Object(c.jsx)(r.a, { children: t }),
            Object(c.jsx)("h3", {
              className:
                "opacity-60 -mt-1 font-bold text-accent-900 dark:text-accent-800",
              children: a,
            }),
            s,
          ],
        });
      };
    },
    7: function (e, t, a) {
      "use strict";
      var n;
      a.d(t, "b", function () {
        return n;
      }),
        a.d(t, "c", function () {
          return r;
        }),
        a.d(t, "a", function () {
          return c;
        }),
        (function (e) {
          (e.ADD_COUNTRY_POST_LIMITATION = "ADD_COUNTRY_POST_LIMITATION"),
            (e.REQUEST_TRANSFER = "REQUEST_TRANSFER"),
            (e.DDE_DISTRIBUTION = "DDE_DISTRIBUTION"),
            (e.REB_DISTRIBUTION = "REB_DISTRIBUTION"),
            (e.DISTRICT_REGISTER_TEACHER = "DISTRICT_REGISTER_TEACHER"),
            (e.HEAD_TEACHER_REQUEST = "HEAD_TEACHER_REQUEST"),
            (e.DDE_REQUEST = "DDE_REQUEST"),
            (e.VIEW_SCHOOLS_LIST = "VIEW_SCHOOLS_LIST"),
            (e.VIEW_STAFF_LIST = "VIEW_STAFF_LIST"),
            (e.REGISTER_STAFF = "REGISTER_STAFF"),
            (e.SET_ACADEMIC_CALENDAR = "SET_ACADEMIC_CALENDAR"),
            (e.VIEW_TEACHER_DETAILS = "VIEW_TEACHER_DETAILS"),
            (e.LIST_OF_TAMINATE = "LIST_OF_TAMINATE"),
            (e.HEADTEACHER_CREATE_TEACHER = "HEADTEACHER_CREATE_TEACHER"),
            (e.HEADTEACHER_CREATE_PLACEMENT_LIST =
              "HEADTEACHER_CREATE_PLACEMENT_LIST"),
            (e.HEADTEACHER_VIEW_PLACEMENT_LIST =
              "HEADTEACHER_VIEW_PLACEMENT_LIST"),
            (e.HEADTEACHER_UPDATE_PLACEMENT_LIST =
              "HEADTEACHER_UPDATE_PLACEMENT_LIST"),
            (e.DDE_VIEW_PLACEMENT_LIST = "DDE_VIEW_PLACEMENT_LIST"),
            (e.DDE_APPROVE_PLACEMENT_LIST = "DDE_APPROVE_PLACEMENT_LIST"),
            (e.USER_PROFILE = "USER_PROFILE"),
            (e.TEACHER_PRINT_LETTERS = "TEACHER_PRINT_LETTERS"),
            (e.HT_REQUEST_POSTS = "HT_REQUEST_POSTS"),
            (e.HT_SUSPENSION_TERMINATION = "HT_SUSPENSION_TERMINATION"),
            (e.STAFF_TERMINATION = "STAFF_TERMINATION"),
            (e.STAFF_SUSPENSION = "STAFF_SUSPENSION"),
            (e.VIEW_REPORTS = "VIEW_REPORTS"),
            (e.STUDY_HIERARCHY = "STUDY_HIERARCHY"),
            (e.STAFF_HT_TERMINATION = "STAFF_HT_TERMINATION"),
            (e.STAFF_HT_SUSPENSION = "STAFF_HT_SUSPENSION"),
            (e.REGISTER_SYSTEM_USER = "REGISTER_SYSTEM_USER"),
            (e.SYSTEM_USERS_LIST = "SYSTEM_USERS_LIST"),
            (e.ASSIGN_SCHOOL_POSITION = "ASSIGN_SCHOOL_POSITION"),
            (e.DISABLED_USERS = "DISABLED_USERS");
        })(n || (n = {}));
      var r = function (e, t) {
          return void 0 !== e && null !== e && e.indexOf(t) >= 0;
        },
        c = function (e, t, a) {
          r(e, t) ? a() : (window.location.href = "/dashboard");
        };
    },
    8: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return s;
      });
      var n = a(5),
        r = a.n(n),
        c = a(13),
        s = function () {
          console.log("API-Request"),
            localStorage[c.b]
              ? (r.a.defaults.headers.common["Tmis-Token"] = localStorage[c.b])
              : delete r.a.defaults.headers.common["Tmis-Token"];
        };
    },
    9: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return r;
      });
      var n = a(4),
        r = function (e, t) {
          var a, r, c, s;
          return (
            console.error(Object(n.a)({}, e)),
            void 0 !== (null === e || void 0 === e ? void 0 : e.response)
              ? void 0 !==
                (null === e ||
                void 0 === e ||
                null === (a = e.response) ||
                void 0 === a ||
                null === (r = a.data) ||
                void 0 === r
                  ? void 0
                  : r.message)
                ? null === e ||
                  void 0 === e ||
                  null === (c = e.response) ||
                  void 0 === c ||
                  null === (s = c.data) ||
                  void 0 === s
                  ? void 0
                  : s.message
                : "Something went wrong, please try again later"
              : void 0 === e.request || void 0 === e.request.status
              ? "Something went wrong, please try again later"
              : 0 !== (null === e || void 0 === e ? void 0 : e.request.status)
              ? null === e || void 0 === e
                ? void 0
                : e.request.statusText
              : (t && t(), "Please check your internet connection")
          );
        };
    },
  },
  [[103, 8, 9]],
]);
//# sourceMappingURL=main.c04369aa.chunk.js.map
