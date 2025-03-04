var cookieconsent = (function (e) {
    var t = {};
    function i(n) {
        if (t[n]) return t[n].exports;
        var o = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(o.exports, o, o.exports, i), (o.l = !0), o.exports;
    }
    return (
        (i.m = e),
        (i.c = t),
        (i.d = function (e, t, n) {
            i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (i.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (i.t = function (e, t) {
            if ((1 & t && (e = i(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if ((i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var o in e)
                    i.d(
                        n,
                        o,
                        function (t) {
                            return e[t];
                        }.bind(null, o)
                    );
            return n;
        }),
        (i.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return i.d(t, "a", t), t;
        }),
        (i.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (i.p = ""),
        i((i.s = 52))
    );
})([
    function (e, t, i) {
        "use strict";
        e.exports = function (e) {
            var t = [];
            return (
                (t.toString = function () {
                    return this.map(function (t) {
                        var i = (function (e, t) {
                            var i = e[1] || "",
                                n = e[3];
                            if (!n) return i;
                            if (t && "function" == typeof btoa) {
                                var o = ((r = n), "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"),
                                    a = n.sources.map(function (e) {
                                        return "/*# sourceURL=" + n.sourceRoot + e + " */";
                                    });
                                return [i].concat(a).concat([o]).join("\n");
                            }
                            var r;
                            return [i].join("\n");
                        })(t, e);
                        return t[2] ? "@media " + t[2] + "{" + i + "}" : i;
                    }).join("");
                }),
                (t.i = function (e, i) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    for (var n = {}, o = 0; o < this.length; o++) {
                        var a = this[o][0];
                        null != a && (n[a] = !0);
                    }
                    for (o = 0; o < e.length; o++) {
                        var r = e[o];
                        (null != r[0] && n[r[0]]) || (i && !r[2] ? (r[2] = i) : i && (r[2] = "(" + r[2] + ") and (" + i + ")"), t.push(r));
                    }
                }),
                t
            );
        };
    },
    function (e, t, i) {
        var n,
            o,
            a = {},
            r =
                ((n = function () {
                    return window && document && document.all && !window.atob;
                }),
                function () {
                    return void 0 === o && (o = n.apply(this, arguments)), o;
                }),
            s = function (e, t) {
                return t ? t.querySelector(e) : document.querySelector(e);
            },
            c = (function (e) {
                var t = {};
                return function (e, i) {
                    if ("function" == typeof e) return e();
                    if (void 0 === t[e]) {
                        var n = s.call(this, e, i);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                            try {
                                n = n.contentDocument.head;
                            } catch (e) {
                                n = null;
                            }
                        t[e] = n;
                    }
                    return t[e];
                };
            })(),
            l = null,
            p = 0,
            u = [],
            d = i(39);
        function _(e, t) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i],
                    o = a[n.id];
                if (o) {
                    o.refs++;
                    for (var r = 0; r < o.parts.length; r++) o.parts[r](n.parts[r]);
                    for (; r < n.parts.length; r++) o.parts.push(b(n.parts[r], t));
                } else {
                    var s = [];
                    for (r = 0; r < n.parts.length; r++) s.push(b(n.parts[r], t));
                    a[n.id] = { id: n.id, refs: 1, parts: s };
                }
            }
        }
        function k(e, t) {
            for (var i = [], n = {}, o = 0; o < e.length; o++) {
                var a = e[o],
                    r = t.base ? a[0] + t.base : a[0],
                    s = { css: a[1], media: a[2], sourceMap: a[3] };
                n[r] ? n[r].parts.push(s) : i.push((n[r] = { id: r, parts: [s] }));
            }
            return i;
        }
        function m(e, t) {
            var i = c(e.insertInto);
            if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var n = u[u.length - 1];
            if ("top" === e.insertAt) n ? (n.nextSibling ? i.insertBefore(t, n.nextSibling) : i.appendChild(t)) : i.insertBefore(t, i.firstChild), u.push(t);
            else if ("bottom" === e.insertAt) i.appendChild(t);
            else {
                if ("object" != typeof e.insertAt || !e.insertAt.before)
                    throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var o = c(e.insertAt.before, i);
                i.insertBefore(t, o);
            }
        }
        function v(e) {
            if (null === e.parentNode) return !1;
            e.parentNode.removeChild(e);
            var t = u.indexOf(e);
            t >= 0 && u.splice(t, 1);
        }
        function f(e) {
            var t = document.createElement("style");
            if ((void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce)) {
                var n = (function () {
                    0;
                    return i.nc;
                })();
                n && (e.attrs.nonce = n);
            }
            return y(t, e.attrs), m(e, t), t;
        }
        function y(e, t) {
            Object.keys(t).forEach(function (i) {
                e.setAttribute(i, t[i]);
            });
        }
        function b(e, t) {
            var i, n, o, a;
            if (t.transform && e.css) {
                if (!(a = "function" == typeof t.transform ? t.transform(e.css) : t.transform.default(e.css))) return function () {};
                e.css = a;
            }
            if (t.singleton) {
                var r = p++;
                (i = l || (l = f(t))), (n = x.bind(null, i, r, !1)), (o = x.bind(null, i, r, !0));
            } else
                e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa
                    ? ((i = (function (e) {
                          var t = document.createElement("link");
                          return void 0 === e.attrs.type && (e.attrs.type = "text/css"), (e.attrs.rel = "stylesheet"), y(t, e.attrs), m(e, t), t;
                      })(t)),
                      (n = z.bind(null, i, t)),
                      (o = function () {
                          v(i), i.href && URL.revokeObjectURL(i.href);
                      }))
                    : ((i = f(t)),
                      (n = w.bind(null, i)),
                      (o = function () {
                          v(i);
                      }));
            return (
                n(e),
                function (t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        n((e = t));
                    } else o();
                }
            );
        }
        e.exports = function (e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            ((t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}), t.singleton || "boolean" == typeof t.singleton || (t.singleton = r()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
            var i = k(e, t);
            return (
                _(i, t),
                function (e) {
                    for (var n = [], o = 0; o < i.length; o++) {
                        var r = i[o];
                        (s = a[r.id]).refs--, n.push(s);
                    }
                    e && _(k(e, t), t);
                    for (o = 0; o < n.length; o++) {
                        var s;
                        if (0 === (s = n[o]).refs) {
                            for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                            delete a[s.id];
                        }
                    }
                }
            );
        };
        var g,
            h =
                ((g = []),
                function (e, t) {
                    return (g[e] = t), g.filter(Boolean).join("\n");
                });
        function x(e, t, i, n) {
            var o = i ? "" : n.css;
            if (e.styleSheet) e.styleSheet.cssText = h(t, o);
            else {
                var a = document.createTextNode(o),
                    r = e.childNodes;
                r[t] && e.removeChild(r[t]), r.length ? e.insertBefore(a, r[t]) : e.appendChild(a);
            }
        }
        function w(e, t) {
            var i = t.css,
                n = t.media;
            if ((n && e.setAttribute("media", n), e.styleSheet)) e.styleSheet.cssText = i;
            else {
                for (; e.firstChild; ) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(i));
            }
        }
        function z(e, t, i) {
            var n = i.css,
                o = i.sourceMap,
                a = void 0 === t.convertToAbsoluteUrls && o;
            (t.convertToAbsoluteUrls || a) && (n = d(n)), o && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
            var r = new Blob([n], { type: "text/css" }),
                s = e.href;
            (e.href = URL.createObjectURL(r)), s && URL.revokeObjectURL(s);
        }
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"Active","always_active":"Always active","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Inactive","nb_agree":"I agree","nb_changep":"Change my preferences","nb_ok":"OK","nb_reject":"I decline","nb_text":"We use cookies and other tracking technologies to improve your browsing experience on our website, to show you personalized content and targeted ads, to analyze our website traffic, and to understand where our visitors are coming from.","nb_title":"We use cookies","pc_fnct_text_1":"Functionality cookies","pc_fnct_text_2":"These cookies are used to provide you with a more personalized experience on our website and to remember choices you make when you use our website.","pc_fnct_text_3":"For example, we may use functionality cookies to remember your language preferences or remember your login details.","pc_minfo_text_1":"More information","pc_minfo_text_2":"For any queries in relation to our policy on cookies and your choices, please contact us.","pc_minfo_text_3":"To find out more, please visit our <a href=\'%s\' target=\'_blank\'>Privacy Policy</a>.","pc_save":"Save my preferences","pc_sncssr_text_1":"Strictly necessary cookies","pc_sncssr_text_2":"These cookies are essential to provide you with services available through our website and to enable you to use certain features of our website.","pc_sncssr_text_3":"Without these cookies, we cannot provide you certain services on our website.","pc_title":"Cookies Preferences Center","pc_trck_text_1":"Tracking cookies","pc_trck_text_2":"These cookies are used to collect information to analyze the traffic to our website and how visitors are using our website.","pc_trck_text_3":"For example, these cookies may track things such as how long you spend on the website or the pages you visit which helps us to understand how we can improve our website for you.","pc_trck_text_4":"The information collected through these tracking and performance cookies do not identify any individual visitor.","pc_trgt_text_1":"Targeting and advertising cookies","pc_trgt_text_2":"These cookies are used to show advertising that is likely to be of interest to you based on your browsing habits.","pc_trgt_text_3":"These cookies, as served by our content and/or advertising providers, may combine information they collected from our website with other information they have independently collected relating to your web browser\'s activities across their network of websites.","pc_trgt_text_4":"If you choose to remove or disable these targeting or advertising cookies, you will still see adverts but they may not be relevant to you.","pc_yprivacy_text_1":"Your privacy is important to us","pc_yprivacy_text_2":"Cookies are very small text files that are stored on your computer when you visit a website. We use cookies for a variety of purposes and to enhance your online experience on our website (for example, to remember your account login details).","pc_yprivacy_text_3":"You can change your preferences and decline certain types of cookies to be stored on your computer while browsing our website. You can also remove any cookies already stored on your computer, but keep in mind that deleting cookies may prevent you from using parts of our website.","pc_yprivacy_title":"Your privacy","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Privacy Policy</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"Active","always_active":"Always active","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Inactive","nb_agree":"I agree","nb_changep":"Change my preferences","nb_ok":"OK","nb_reject":"I decline","nb_text":"We use cookies and other tracking technologies to improve your browsing experience on our website, to show you personalised content and targeted ads, to analyse our website traffic, and to understand where our visitors are coming from.","nb_title":"We use cookies","pc_fnct_text_1":"Functionality cookies","pc_fnct_text_2":"These cookies are used to provide you with a more personalised experience on our website and to remember choices you make when you use our website.","pc_fnct_text_3":"For example, we may use functionality cookies to remember your language preferences or remember your login details.","pc_minfo_text_1":"More information","pc_minfo_text_2":"For any queries in relation to our policy on cookies and your choices, please contact us.","pc_minfo_text_3":"To find out more, please visit our <a href=\'%s\' target=\'_blank\'>Privacy Policy</a>.","pc_save":"Save my preferences","pc_sncssr_text_1":"Strictly necessary cookies","pc_sncssr_text_2":"These cookies are essential to provide you with services available through our website and to enable you to use certain features of our website.","pc_sncssr_text_3":"Without these cookies, we cannot provide you certain services on our website.","pc_title":"Cookies Preferences Centre","pc_trck_text_1":"Tracking cookies","pc_trck_text_2":"These cookies are used to collect information to analyse the traffic to our website and how visitors are using our website.","pc_trck_text_3":"For example, these cookies may track things such as how long you spend on the website or the pages you visit which helps us to understand how we can improve our website for you.","pc_trck_text_4":"The information collected through these tracking and performance cookies do not identify any individual visitor.","pc_trgt_text_1":"Targeting and advertising cookies","pc_trgt_text_2":"These cookies are used to show advertising that is likely to be of interest to you based on your browsing habits.","pc_trgt_text_3":"These cookies, as served by our content and/or advertising providers, may combine information they collected from our website with other information they have independently collected relating to your web browser\'s activities across their network of websites.","pc_trgt_text_4":"If you choose to remove or disable these targeting or advertising cookies, you will still see adverts but they may not be relevant to you.","pc_yprivacy_text_1":"Your privacy is important to us","pc_yprivacy_text_2":"Cookies are very small text files that are stored on your computer when you visit a website. We use cookies for a variety of purposes and to enhance your online experience on our website (for example, to remember your account login details).","pc_yprivacy_text_3":"You can change your preferences and decline certain types of cookies to be stored on your computer while browsing our website. You can also remove any cookies already stored on your computer, but keep in mind that deleting cookies may prevent you from using parts of our website.","pc_yprivacy_title":"Your privacy","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Privacy Policy</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"Aktiv","always_active":"Immer aktiv","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Inaktiv","nb_agree":"Alle akzeptieren","nb_changep":"Einstellungen Ã¤ndern","nb_ok":"OK","nb_reject":"Ich lehne ab","nb_text":"Diese Website verwendet Cookies und Targeting Technologien, um Ihnen ein besseres Internet-Erlebnis zu ermÃ¶glichen und die Werbung, die Sie sehen, besser an Ihre BedÃ¼rfnisse anzupassen. Diese Technologien nutzen wir auÃŸerdem, um Ergebnisse zu messen, um zu verstehen, woher unsere Besucher kommen oder um unsere Website weiter zu entwickeln.","nb_title":"Ihre PrivatsphÃ¤re ist uns wichtig","pc_fnct_text_1":"Funktions Cookies","pc_fnct_text_2":"Diese Cookies werden verwendet, um Ihnen ein persÃ¶nlicheres Erlebnis auf unserer Website zu ermÃ¶glichen und um sich an Ihre Entscheidungen zu erinnern, die Sie bei der Nutzung unserer Website getroffen haben.","pc_fnct_text_3":"Beispielsweise kÃ¶nnen wir Funktions-Cookies verwenden, um Ihre Spracheinstellungen oder Ihre Anmeldedaten zu speichern.","pc_minfo_text_1":"Mehr Informationen","pc_minfo_text_2":"Bei Fragen in Bezug auf unseren Umgang mit Cookies und Ihrer PrivatsphÃ¤re kontaktieren Sie uns bitte.","pc_minfo_text_3":"Details finden Sie in unserer <a href=\'%s\' target=\'_blank\'>Datenschutzrichtlinie</a>.","pc_save":"Einstellungen speichern","pc_sncssr_text_1":"Technisch notwendige Cookies","pc_sncssr_text_2":"Diese Cookies sind fÃ¼r die Bereitstellung von Diensten, die Ã¼ber unsere Website verfÃ¼gbar sind, und fÃ¼r die Verwendung bestimmter Funktionen unserer Website von wesentlicher Bedeutung.","pc_sncssr_text_3":"Ohne diese Cookies kÃ¶nnen wir Ihnen bestimmte Dienste auf unserer Website nicht zur VerfÃ¼gung stellen.","pc_title":"Cookie Einstellungen","pc_trck_text_1":"Tracking und Performance Cookies","pc_trck_text_2":"Diese Cookies werden zum Sammeln von Informationen verwendet, um den Verkehr auf unserer Website und die Nutzung unserer Website durch Besucher zu analysieren.","pc_trck_text_3":"Diese Cookies kÃ¶nnen beispielsweise nachverfolgen, wie lange Sie auf der Website verweilen oder welche Seiten Sie besuchen. So kÃ¶nnen wir verstehen, wie wir unsere Website fÃ¼r Sie verbessern kÃ¶nnen.","pc_trck_text_4":"Die durch diese Tracking- und Performance-Cookies gesammelten Informationen identifizieren keinen einzelnen Besucher.","pc_trgt_text_1":"Targeting und Werbung Cookies","pc_trgt_text_2":"Diese Cookies werden genutzt, um Werbung anzuzeigen, die Sie aufgrund Ihrer Surfgewohnheiten wahrscheinlich interessieren wird.","pc_trgt_text_3":"Diese Cookies, die von unseren Inhalten und / oder Werbeanbietern bereitgestellt werden, kÃ¶nnen Informationen, die sie von unserer Website gesammelt haben, mit anderen Informationen kombinieren, welche sie durch AktivitÃ¤ten Ihres Webbrowsers in Ihrem Netzwerk von Websites gesammelt haben.","pc_trgt_text_4":"Wenn Sie diese Targeting- oder Werbe-Cookies entfernen oder deaktivieren, werden weiterhin Anzeigen angezeigt. Diese sind fÃ¼r Sie jedoch mÃ¶glicherweise nicht relevant.","pc_yprivacy_text_1":"Ihre PrivatsphÃ¤re ist uns wichtig","pc_yprivacy_text_2":"Cookies sind sehr kleine Textdateien, die auf Ihrem Rechner gespeichert werden, wenn Sie eine Website besuchen. Wir verwenden Cookies fÃ¼r eine Reihe von Auswertungen, um damit Ihren Besuch auf unserer Website kontinuierlich verbessern zu kÃ¶nnen (z. B. damit Ihnen Ihre Login-Daten erhalten bleiben).","pc_yprivacy_text_3":"Sie kÃ¶nnen Ihre Einstellungen Ã¤ndern und verschiedenen Arten von Cookies erlauben, auf Ihrem Rechner gespeichert zu werden, wÃ¤hrend Sie unsere Webseite besuchen. Sie kÃ¶nnen auf Ihrem Rechner gespeicherte Cookies ebenso weitgehend wieder entfernen. Bitte bedenken Sie aber, dass dadurch Teile unserer Website mÃ¶glicherweise nicht mehr in der gedachten Art und Weise nutzbar sind.","pc_yprivacy_title":"Ihre PrivatsphÃ¤re","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Datenschutzrichtlinie</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"Actif","always_active":"Toujours activÃ©","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Inactif","nb_agree":"J\'accepte","nb_changep":"Changer mes prÃ©fÃ©rences","nb_ok":"OK","nb_reject":"Je refuse","nb_text":"Nous utilisons des cookies et d\'autres technologies de suivi pour amÃ©liorer votre expÃ©rience de navigation sur notre site, pour vous montrer un contenu personnalisÃ© et des publicitÃ©s ciblÃ©es, pour analyser le trafic de notre site et pour comprendre la provenance de nos visiteurs.","nb_title":"Nous utilisons des cookies","pc_fnct_text_1":"Cookies de FonctionnalitÃ©","pc_fnct_text_2":"Ces cookies servent Ã  vous offrir une expÃ©rience plus personnalisÃ©e sur notre site Web et Ã  mÃ©moriser les choix que vous faites lorsque vous utilisez notre site Web.","pc_fnct_text_3":"Par exemple, nous pouvons utiliser des cookies de fonctionnalitÃ© pour mÃ©moriser vos prÃ©fÃ©rences de langue ou vos identifiants de connexion.","pc_minfo_text_1":"Plus d\'information","pc_minfo_text_2":"Pour toute question relative Ã  notre politique en matiÃ¨re de cookies et Ã  vos choix, veuillez nous contacter.","pc_minfo_text_3":"Pour en savoir plus, merci de consulter notre <a href=\'%s\' target=\'_blank\'>Politique de confidentialitÃ©</a>.","pc_save":"Sauvegarder mes prÃ©fÃ©rences","pc_sncssr_text_1":"Cookies strictement nÃ©cessaires","pc_sncssr_text_2":"Ces cookies sont essentiels pour vous fournir les services disponibles sur notre site Web et vous permettre dâ€™utiliser certaines fonctionnalitÃ©s de notre site Web.","pc_sncssr_text_3":"Sans ces cookies, nous ne pouvons pas vous fournir certains services sur notre site Web.","pc_title":"Espace de PrÃ©fÃ©rences des Cookies","pc_trck_text_1":"Cookies de suivi et de performance","pc_trck_text_2":"Ces cookies sont utilisÃ©s pour collecter des informations permettant d\'analyser le trafic sur notre site et la maniÃ¨re dont les visiteurs utilisent notre site.","pc_trck_text_3":"Par exemple, ces cookies peuvent suivre des choses telles que le temps que vous passez sur le site Web ou les pages que vous visitez, ce qui nous aide Ã  comprendre comment nous pouvons amÃ©liorer notre site Web pour vous.","pc_trck_text_4":"Les informations collectÃ©es via ces cookies de suivi et de performance n\' identifient aucun visiteur en particulier.","pc_trgt_text_1":"Cookies de ciblage et de publicitÃ©","pc_trgt_text_2":"Ces cookies sont utilisÃ©s pour afficher des publicitÃ©s susceptibles de vous intÃ©resser en fonction de vos habitudes de navigation.","pc_trgt_text_3":"Ces cookies, tels que servis par nos fournisseurs de contenu et / ou de publicitÃ©, peuvent associer des informations qu\'ils ont collectÃ©es sur notre site Web Ã  d\'autres informations qu\'ils ont collectÃ©es de maniÃ¨re indÃ©pendante et concernant les activitÃ©s du votre navigateur Web sur son rÃ©seau de sites Web.","pc_trgt_text_4":"Si vous choisissez de supprimer ou de dÃ©sactiver ces cookies de ciblage ou de publicitÃ©, vous verrez toujours des annonces, mais elles risquent de ne pas Ãªtre pertinentes.","pc_yprivacy_text_1":"Votre confidentialitÃ© est importante pour nous","pc_yprivacy_text_2":"Les cookies sont de trÃ¨s petits fichiers texte qui sont stockÃ©s sur votre ordinateur lorsque vous visitez un site Web. Nous utilisons des cookies Ã  diverses fins et pour amÃ©liorer votre expÃ©rience en ligne sur notre site Web (par exemple, pour mÃ©moriser les informations de connexion de votre compte).","pc_yprivacy_text_3":"Vous pouvez modifier vos prÃ©fÃ©rences et refuser l\'enregistrement de certains types de cookies sur votre ordinateur lors de la navigation sur notre site. Vous pouvez Ã©galement supprimer les cookies dÃ©jÃ  stockÃ©s sur votre ordinateur, mais gardez Ã  l\'esprit que leur suppression peut vous empÃªcher d\'utiliser des Ã©lÃ©ments de notre site Web.","pc_yprivacy_title":"Votre confidentialitÃ©","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Politique de confidentialitÃ©</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"Activo","always_active":"Siempre activo","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Inactivo","nb_agree":"Aceptar","nb_changep":"Configurar","nb_ok":"OK","nb_reject":"Rechazar","nb_text":"Usamos cookies y otras tÃ©cnicas de rastreo para mejorar tu experiencia de navegaciÃ³n en nuestra web, para mostrarte contenidos personalizados y anuncios adecuados, para analizar el trÃ¡fico en nuestra web y para comprender de donde llegan nuestros visitantes.","nb_title":"Utilizamos cookies","pc_fnct_text_1":"Cookies de funcionalidad","pc_fnct_text_2":"Estas cookies son utilizadas para proveerte una experiencia mÃ¡s personalizada y recordar tus elecciones en nuestra web.","pc_fnct_text_3":"Por ejemplo, podemos utilizar cookies de funcionalidad para recordar tus preferencias de idioma o tus detalles de acceso.","pc_minfo_text_1":"MÃ¡s informaciÃ³n","pc_minfo_text_2":"Para cualquier pregunta en relaciÃ³n con nuestra polÃ­tica de cookies y tus preferencias, contacta con nosotros, por favor.","pc_minfo_text_3":"Para saber mÃ¡s, visita nuestra pÃ¡gina sobre la <a href=\'%s\' target=\'_blank\'>PolÃ­tica de privacidad</a>.","pc_save":"Guardar mis preferencias","pc_sncssr_text_1":"Cookies estrictamente necesarias","pc_sncssr_text_2":"Estos cookies son esenciales para proveerte los servicios disponibles en nuestra web y para permitirte utilizar algunas caracterÃ­sticas de nuestra web.","pc_sncssr_text_3":"Sin estas cookies, no podemos proveer algunos servicios de nuestro sitio web.","pc_title":"Centro de Preferencias de Cookies","pc_trck_text_1":"Cookies de rastreo y rendimiento","pc_trck_text_2":"Estas cookies son utilizadas para recopilar informaciÃ³n, para analizar el trÃ¡fico y la forma en que los usuarios utilizan nuestra web.","pc_trck_text_3":"Por ejemplo, estas cookies pueden recopilar datos como cuÃ¡nto tiempo llevas navegado en nuestro sitio web o quÃ© pÃ¡ginas visitas, cosa que nos ayuda a comprender cÃ³mo podemos mejorar nuestra web para ti.","pc_trck_text_4":"La informaciÃ³n recopilada con estas cookies de rastreo y rendimiento no identifican a ningÃºn visitante individual.","pc_trgt_text_1":"Cookies de seguimiento y publicidad","pc_trgt_text_2":"Estas cookies son utilizadas para enseÃ±arte anuncios que pueden ser interesantes basados en tus costumbres de navegaciÃ³n.","pc_trgt_text_3":"Estas cookies, servidas por nuestros proveedores de contenido y/o de publicidad, pueden combinar la informaciÃ³n que ellos recogieron de nuestro sitio web con otra informaciÃ³n recopilada por ellos en relaciÃ³n con las actividades de su navegador a travÃ©s de su red de sitios web.","pc_trgt_text_4":"Si eliges cancelar o inhabilitar las cookies de seguimiento y publicidad, seguirÃ¡s viendo anuncios pero estos podrÃ­an no ser de tu interÃ©s.","pc_yprivacy_text_1":"Tu privacidad es importante para nosotros","pc_yprivacy_text_2":"Las cookies son pequeÃ±os archivos de texto que se almacenan en tu navegador cuando visitas nuestra web. Utilizamos cookies para diferentes objetivos y para mejorar tu experiencia en nuestro sitio web (por ejemplo, para recordar tus detalles de acceso).","pc_yprivacy_text_3":"Puedes cambiar tus preferencias y rechazar que algunos tipos de cookies sean almacenados mientras estÃ¡s navegando en nuestra web. TambiÃ©n puedes cancelar cualquier cookie ya almacenada en tu navegador, pero recuerda que cancelar las cookies puede impedirte utilizar algunas partes de nuestra web.","pc_yprivacy_title":"Tu privacidad","privacy_policy":"<a href=\'%s\' target=\'_blank\'>PolÃ­tica de privacidad</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"Actiu","always_active":"Sempre actiu","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Inactiu","nb_agree":"Estic dâ€™acord","nb_changep":"Canviar preferÃ¨ncies","nb_ok":"OK","nb_reject":"Declino","nb_text":"Fem servir cookies i altres tecnologies de seguiment per millorar la teva experiÃ¨ncia de navegaciÃ³ al nostre lloc web, per mostrar-te contingut personalitzat i anuncis interessants per a tu, per analitzar el nostre trÃ fic i entendre dâ€™on venen els nostres visitants.","nb_title":"Fem servir cookies","pc_fnct_text_1":"Cookies de funcionalitat","pc_fnct_text_2":"Aquestes cookies ens permeten oferir-vos una experiÃ¨ncia personalitzada i recordar la vostra configuraciÃ³ quan feu servir el nostre lloc web.","pc_fnct_text_3":"Per exemple, podem fer servir funcionalitat per recordar el vostre idioma o les vostres credencials.","pc_minfo_text_1":"MÃ©s informaciÃ³","pc_minfo_text_2":"Per qualsevol pregunta relacionada amb la nostra polÃ­tica de cookies i les vostres opcions, si us plau contactiâ€™ns.","pc_minfo_text_3":"Per saber mÃ©s, si us plau visiti la nostra <a href=\'%s\' target=\'_blank\'>PolÃ­tica de privacitat</a>.","pc_save":"Guarda les meves preferÃ¨ncies","pc_sncssr_text_1":"Cookies estrictament necessÃ ries","pc_sncssr_text_2":"Aquestes cookies sÃ³n essencials per oferir-vos el nostres serveis i funcionalitats al nostre lloc web.","pc_sncssr_text_3":"Sense aquestes cookies, no us podem oferir alguns serveis.","pc_title":"Centre de PreferÃ¨ncies de Cookies","pc_trck_text_1":"Cookies de seguiment i rendiment","pc_trck_text_2":"Aquestes cookies es fan servir per recollir informaciÃ³, analitzar el trÃ fic i veure com es fa servir el nostre lloc web.","pc_trck_text_3":"Per exemple, aquestes cookies podrien fer el seguiment de quant de temps visiteu el nostre web o quines pÃ gines visiteu les quals ens poden ajudar a entendre com millorar el lloc web per vosaltres.","pc_trck_text_4":"La informaciÃ³ recollida grÃ cies a aquestes cookies de seguiment i rendiment no us identifiquen de forma individual.","pc_trgt_text_1":"Cookies de publicitat i focalitzaciÃ³","pc_trgt_text_2":"Aquestes cookies es fan servir per mostrar anuncis que poden ser del vostre interÃ¨s basats en els vostres hÃ bits dâ€™us.","pc_trgt_text_3":"Aquestes cookies, servides tal i com ho fan els nostres proveÃ¯dors de publicitat i contingut, poden combinar informaciÃ³ recollida al nostre lloc web amb altra informaciÃ³ que hagin recollit independentment relacionada amb activitat a la seva xarxa de llocs web.","pc_trgt_text_4":"Si vostÃ¨ decideix eliminar o deshabilitat aquestes cookies, encara veurÃ  publicitat perÃ² aquesta pot no ser rellevant per vostÃ¨.","pc_yprivacy_text_1":"La vostra privacitat Ã©s important per nosaltres","pc_yprivacy_text_2":"Les cookies sÃ³n uns arxius de text molt petits que es guarden al vostre  ordinador quan visiteu un lloc web. Fem servir cookies per una varietat de finalitats i millorar la vostra experiÃ¨ncia al nostre lloc web (per exemple, per recordar les vostres credencials).","pc_yprivacy_text_3":"Pot canviar les vostres preferÃ¨ncies i rebutjar lâ€™emmagatzematge al vostre ordinador de certs tipus de cookies mentres navega pel nostre. Pot eliminar qualsevol cookie ja emmagatzemada al vostre ordinador, perÃ² tingui en compte que eliminar cookies pot impedir que faci servir parts del nostre lloc web.","pc_yprivacy_title":"La vostra privacitat","privacy_policy":"<a href=\'%s\' target=\'_blank\'>PolÃ­tica de privacitat</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"Attivo","always_active":"Sempre attivo","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Inattivo","nb_agree":"Accetto","nb_changep":"Cambia le mie impostazioni","nb_ok":"OK","nb_reject":"Rifiuto","nb_text":"Noi usiamo i cookies e altre tecniche di tracciamento per migliorare la tua esperienza di navigazione nel nostro sito, per mostrarti contenuti personalizzati e annunci mirati, per analizzare il traffico sul nostro sito, e per capire da dove arrivano i nostri visitatori.","nb_title":"Noi usiamo i cookies","pc_fnct_text_1":"Cookies funzionali","pc_fnct_text_2":"Questi cookies sono utilizzati per offrirti unâ€™esperienza piÃ¹ personalizzata nel nostro sito e per ricordare le scelte che hai fatto mentre usavi il nostro sito.","pc_fnct_text_3":"Per esempio, possiamo usare cookies funzionali per memorizzare le tue preferenze sulla lingua o i tuoi dettagli di accesso.","pc_minfo_text_1":"PiÃ¹ informazioni","pc_minfo_text_2":"Per qualsiasi domanda relativa alla nostra politica sui cookies e le tue scelte, per favore contattaci.","pc_minfo_text_3":"Per saperne di piÃ¹, visita per favore la nostra pagina sulla <a href=\'%s\' target=\'_blank\'>Politica sulla riservatezza</a>.","pc_save":"Salva le mie impostazioni","pc_sncssr_text_1":"Cookies strettamente necessari","pc_sncssr_text_2":"Questi cookies sono essenziali per fornirti i servizi disponibili nel nostro sito e per renderti disponibili alcune funzionalitÃ  del nostro sito web.","pc_sncssr_text_3":"Senza questi cookies, non possiamo fornirti alcuni servizi del nostro sito.","pc_title":"Centro Preferenze sui Cookies","pc_trck_text_1":"Cookies di tracciamento e prestazione","pc_trck_text_2":"Questi cookies sono utilizzati per raccogliere informazioni per analizzare il traffico verso il nostro sito e il modo in cui i visitatori utilizzano il nostro sito.","pc_trck_text_3":"Per esempio, questi cookies possono tracciare cose come quanto a lungo ti fermi nel nostro sito o le pagine che visiti, cosa che ci aiuta a capire come possiamo migliorare il nostro sito per te.","pc_trck_text_4":"Le informazioni raccolte attraverso questi cookies di tracciamento e performance non identificano alcun visitatore individuale.","pc_trgt_text_1":"Cookies di targeting e pubblicitÃ ","pc_trgt_text_2":"Questi cookies sono usati per mostrare annunci pubblicitari che possano verosimilmente essere di tuo interesse in base alle tue abitudini di navigazione.","pc_trgt_text_3":"Questi cookies, cosÃ­ come forniti dai nostri fornitori di  contenuti o annunci pubblicitari, possono combinare le informazioni che raccolgono dal nostro sito web con quelle che hanno indipendentemente raccolto in relazione allâ€™attivitÃ  del tuo browser attraverso la loro rete di siti web.","pc_trgt_text_4":"Se scegli di rimuovere o disabilitare questo tipo di cookies di targeting e pubblicitÃ , vedrai ancora annunci pubblicitari ma potrebbero essere irrilevanti per te.","pc_yprivacy_text_1":"La tua privacy Ã¨ importante per noi","pc_yprivacy_text_2":"I cookies sono dei piccolissimi file di testo che vengono memorizzati nel tuo computer quando visiti un sito web. Noi usiamo i cookies per una varietÃ  di scopi e per migliorare la tua esperienza online nel nostro sito web (per esempio, per ricordare i tuoi dettagli di accesso).","pc_yprivacy_text_3":"Tu puoi cambiare le tue impostazioni e rifiutare che alcuni tipi di cookies vengano memorizzati sul tuo computer mentre stai navigando nel nostro sito web. Puoi anche rimuovere qualsiasi cookie giÃ  memorizzato nel tuo computer, ma ricorda che cancellare i cookies puÃ² impedirti di utilizzare alcune parti del nostro sito.","pc_yprivacy_title":"La tua privacy","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Politica sulla riservatezza</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"Aktiv","always_active":"Alltid aktiv","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Inaktiv","nb_agree":"Jag accepterar","nb_changep":"Ã„ndra mina instÃ¤llningar","nb_ok":"OK","nb_reject":"Jag avbÃ¶jer","nb_text":"Vi anvÃ¤nder cookies och andra spÃ¥rningsteknologier fÃ¶r att fÃ¶rbÃ¤ttra din surfupplevelse pÃ¥ vÃ¥r webbplats, fÃ¶r att visa dig personligt innehÃ¥ll och riktade annonser, fÃ¶r att analysera vÃ¥r webbplatstrafik och fÃ¶r att fÃ¶rstÃ¥ var vÃ¥ra besÃ¶kare kommer ifrÃ¥n.","nb_title":"Vi anvÃ¤nder oss av cookies","pc_fnct_text_1":"Funktionella cookies","pc_fnct_text_2":"Dessa cookies anvÃ¤nds fÃ¶r att ge dig en mer personlig upplevelse pÃ¥ vÃ¥r webbplats och fÃ¶r att komma ihÃ¥g val du gÃ¶r nÃ¤r du anvÃ¤nder vÃ¥r webbplats.","pc_fnct_text_3":"Vi kan till exempel anvÃ¤nda funktions cookies fÃ¶r att komma ihÃ¥g dina sprÃ¥kinstÃ¤llningar eller dina inloggningsuppgifter.","pc_minfo_text_1":"Mer information","pc_minfo_text_2":"Kontakta oss om du har frÃ¥gor angÃ¥ende vÃ¥r policy om cookies och dina val.","pc_minfo_text_3":"FÃ¶r att ta reda pÃ¥ mer, lÃ¤s vÃ¥r <a href=\'%s\' target=\'_blank\'>integritetspolicy</a>.","pc_save":"Spara mina instÃ¤llningar","pc_sncssr_text_1":"Absolut nÃ¶dvÃ¤ndiga cookies","pc_sncssr_text_2":"Dessa cookies Ã¤r viktiga fÃ¶r att fÃ¶rse dig med tjÃ¤nster som Ã¤r tillgÃ¤ngliga via vÃ¥r webbplats och fÃ¶r att du ska kunna anvÃ¤nda vissa funktioner pÃ¥ vÃ¥r webbplats.","pc_sncssr_text_3":"Utan dessa cookies kan vi inte tillhandahÃ¥lla vissa tjÃ¤nster pÃ¥ vÃ¥r webbplats.","pc_title":"Cookies InstÃ¤llningar","pc_trck_text_1":"SpÃ¥rnings- och prestanda cookies","pc_trck_text_2":"Dessa cookies anvÃ¤nds fÃ¶r att samla in information fÃ¶r att analysera trafiken pÃ¥ vÃ¥r webbplats och hur vÃ¥ra besÃ¶kare anvÃ¤nder den.","pc_trck_text_3":"Dessa cookies kan till exempel spÃ¥ra hur lÃ¤nge du spenderar pÃ¥ webbplatsen eller vilka sidor du besÃ¶ker vilket hjÃ¤lper oss att fÃ¶rstÃ¥ hur vi kan fÃ¶rbÃ¤ttra vÃ¥r webbplats fÃ¶r dig.","pc_trck_text_4":"Informationen som samlas in genom dessa spÃ¥rnings- och prestanda cookies identifierar ingen enskild besÃ¶kare.","pc_trgt_text_1":"Inriktnings- och reklamcookies","pc_trgt_text_2":"Dessa cookies anvÃ¤nds fÃ¶r att visa reklam som sannolikt kommer att vara av intresse fÃ¶r dig baserat pÃ¥ dina surfvanor.","pc_trgt_text_3":"Dessa kakor, som betjÃ¤nas av vÃ¥rt innehÃ¥ll och / eller reklamleverantÃ¶rer, kan kombinera information som de samlat in frÃ¥n vÃ¥r webbplats med annan information som de har samlat in oberoende om din webblÃ¤sares aktiviteter i deras nÃ¤tverk av webbplatser.","pc_trgt_text_4":"Om du vÃ¤ljer att ta bort eller inaktivera dessa inriktnings- och reklamcookies kommer du fortfarande att se annonser men de kanske inte Ã¤r relevanta fÃ¶r dig.","pc_yprivacy_text_1":"Din integritet Ã¤r viktig fÃ¶r oss","pc_yprivacy_text_2":"Cookies Ã¤r mycket smÃ¥ textfiler som lagras pÃ¥ din dator nÃ¤r du besÃ¶ker en webbplats. Vi anvÃ¤nder cookies till olika Ã¤ndamÃ¥l och fÃ¶r att kunna fÃ¶rbÃ¤ttra din onlineupplevelse pÃ¥ vÃ¥r webbplats (till exempel som att komma ihÃ¥g dina inloggningsuppgifter).","pc_yprivacy_text_3":"Du kan Ã¤ndra dina instÃ¤llningar och avaktivera vissa typer av cookies som ska lagras pÃ¥ din dator nÃ¤r du surfar pÃ¥ vÃ¥r webbplats. Du kan ocksÃ¥ ta bort alla cookies som redan Ã¤r lagrade pÃ¥ din dator, men kom ihÃ¥g att radering av cookies kan hindra dig frÃ¥n att anvÃ¤nda delar av vÃ¥r webbplats.","pc_yprivacy_title":"Din integritet","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Integritetspolicy</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"Actief","always_active":"Altijd actief","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Inactief","nb_agree":"Ik ga akkoord","nb_changep":"Wijzig mijn voorkeuren","nb_ok":"OK","nb_reject":"Ik weiger","nb_text":"Wij maken gebruik van cookies en andere tracking-technologieÃ«n om uw surfervaring op onze website te verbeteren, om gepersonaliseerde inhoud en advertenties te tonen, om ons websiteverkeer te analyseren en om te begrijpen waar onze bezoekers vandaan komen.","nb_title":"Wij gebruiken cookies","pc_fnct_text_1":"Functionele cookies","pc_fnct_text_2":"Deze cookies worden gebruikt om u een persoonlijkere ervaring op onze website te bieden en om keuzes te onthouden die u maakt wanneer u onze website gebruikt.","pc_fnct_text_3":"Functionele cookies worden bijvoorbeeld gebruikt om uw taalvoorkeuren of inloggegevens te onthouden.","pc_minfo_text_1":"Meer informatie","pc_minfo_text_2":"Voor vragen in verband met ons cookiebeleid en uw keuzes kan u ons contacteren.","pc_minfo_text_3":"Voor meer informatie, bezoek ons <a href=\'%s\' target=\'_blank\'>Privacybeleid</a>.","pc_save":"Sla mijn voorkeuren op","pc_sncssr_text_1":"Strikt noodzakelijke cookies","pc_sncssr_text_2":"Deze cookies zijn essentieel om u de diensten aan te bieden die beschikbaar zijn via onze website en om u in staat te stellen bepaalde functies van onze website te gebruiken.","pc_sncssr_text_3":"Zonder deze cookies kunnen we u bepaalde diensten op onze website niet aanbieden.","pc_title":"Cookie instellingen","pc_trck_text_1":"Tracking- en prestatie cookies","pc_trck_text_2":"Deze cookies worden gebruikt om informatie te verzamelen om het verkeer naar onze website te analyseren en hoe bezoekers onze website gebruiken.","pc_trck_text_3":"Deze cookies kunnen gegevens zoals hoe lang u op de website doorbrengt of de pagina\'s die u bezoekt, bijhouden. Dit helpt ons te begrijpen hoe we onze website voor u kunnen verbeteren.","pc_trck_text_4":"Individuele bezoekers kunnen niet geÃ¯dentificeerd worden aan hand van de informatie in deze cookies.","pc_trgt_text_1":"Targeting- en advertentie cookies","pc_trgt_text_2":"Deze cookies worden gebruikt om advertenties weer te geven die u waarschijnlijk interesseren op basis van uw surfgedrag.","pc_trgt_text_3":"Deze cookies, zoals aangeboden op basis van de inhoud van onze site en/of reclame aanbieders, kunnen informatie die ze van onze website hebben verzameld combineren met andere informatie die ze onafhankelijk hebben verzameld met betrekking tot de activiteiten van uw webbrowser via hun netwerk van websites.","pc_trgt_text_4":"Als u ervoor kiest deze targeting- of advertentiecookies te verwijderen of uit te schakelen, ziet u nog steeds advertenties, maar deze zijn mogelijk niet relevant voor u.","pc_yprivacy_text_1":"Uw privacy is belangrijk voor ons","pc_yprivacy_text_2":"Cookies zijn kleine tekstbestanden die bij het bezoeken van een website op uw computer worden opgeslagen. We gebruiken cookies voor verschillende doeleinden en om uw online ervaring op onze website te verbeteren (bijvoorbeeld om de inloggegevens voor uw account te onthouden).","pc_yprivacy_text_3":"U kunt uw voorkeuren wijzigen en bepaalde soorten cookies weigeren die op uw computer worden opgeslagen tijdens het browsen op onze website. U kunt ook alle cookies verwijderen die al op uw computer zijn opgeslagen, maar houd er rekening mee dat het verwijderen van cookies ertoe kan leiden dat u delen van onze website niet kunt gebruiken.","pc_yprivacy_title":"Jouw privacy","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Privacybeleid</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"Ativo","always_active":"Sempre ativo","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Inativo","nb_agree":"Concordo","nb_changep":"Alterar as minhas preferÃªncias","nb_ok":"OK","nb_reject":"Eu recuso","nb_text":"Utilizamos cookies e outras tecnologias de mediÃ§Ã£o para melhorar a sua experiÃªncia de navegaÃ§Ã£o no nosso site, de forma a mostrar conteÃºdo personalizado, anÃºncios direcionados, analisar o trÃ¡fego do site e entender de onde vÃªm os visitantes.","nb_title":"O nosso site usa cookies","pc_fnct_text_1":"Cookies de funcionalidade","pc_fnct_text_2":"Estes cookies sÃ£o usados â€‹â€‹para fornecer uma experiÃªncia mais personalizada no nosso site e para lembrar as escolhas que faz ao usar o nosso site.","pc_fnct_text_3":"Por exemplo, podemos usar cookies de funcionalidade para se lembrar das suas preferÃªncias de idioma e/ ou os seus detalhes de login.","pc_minfo_text_1":"Mais InformaÃ§Ãµes","pc_minfo_text_2":"Para qualquer dÃºvida sobre a nossa polÃ­tica de cookies e as suas opÃ§Ãµes, entre em contato connosco.","pc_minfo_text_3":"Para obter mais detalhes, por favor consulte a nossa <a href=\'%s\' target=\'_blank\'>PolÃ­tica de Privacidade</a>.","pc_save":"Guardar as minhas preferÃªncias","pc_sncssr_text_1":"Cookies estritamente necessÃ¡rios","pc_sncssr_text_2":"Estes cookies sÃ£o essenciais para fornecer serviÃ§os disponÃ­veis no nosso site e permitir que possa usar determinados recursos no nosso site.","pc_sncssr_text_3":"Sem estes cookies, nÃ£o podemos fornecer certos serviÃ§os no nosso site.","pc_title":"Centro de preferÃªncias de cookies","pc_trck_text_1":"Cookies de mediÃ§Ã£o e desempenho","pc_trck_text_2":"Estes cookies sÃ£o usados â€‹â€‹para coletar informaÃ§Ãµes para analisar o trÃ¡fego no nosso site e entender como Ã© que os visitantes estÃ£o a usar o nosso site.","pc_trck_text_3":"Por exemplo, estes cookies podem medir fatores como o tempo despendido no site ou as pÃ¡ginas visitadas, isto vai permitir entender como podemos melhorar o nosso site para os utilizadores.","pc_trck_text_4":"As informaÃ§Ãµes coletadas por meio destes cookies de mediÃ§Ã£o e desempenho nÃ£o identificam nenhum visitante individual.","pc_trgt_text_1":"Cookies de segmentaÃ§Ã£o e publicidade","pc_trgt_text_2":"Estes cookies sÃ£o usados â€‹â€‹para mostrar publicidade que provavelmente lhe pode interessar com base nos seus hÃ¡bitos e comportamentos de navegaÃ§Ã£o.","pc_trgt_text_3":"Estes cookies, servidos pelo nosso conteÃºdo e/ ou fornecedores de publicidade, podem combinar as informaÃ§Ãµes coletadas no nosso site com outras informaÃ§Ãµes coletadas independentemente relacionadas com as atividades na rede de sites do seu navegador.","pc_trgt_text_4":"Se optar por remover ou desativar estes cookies de segmentaÃ§Ã£o ou publicidade, ainda verÃ¡ anÃºncios, mas estes poderÃ£o nÃ£o ser relevantes para si.","pc_yprivacy_text_1":"A sua privacidade Ã© importante para nÃ³s","pc_yprivacy_text_2":"Cookies sÃ£o pequenos arquivos de texto que sÃ£o armazenados no seu computador quando visita um site. Utilizamos cookies para diversos fins e para aprimorar sua experiÃªncia no nosso site (por exemplo, para se lembrar dos detalhes de login da sua conta).","pc_yprivacy_text_3":"Pode alterar as suas preferÃªncias e recusar o armazenamento de certos tipos de cookies no seu computador enquanto navega no nosso site. Pode tambÃ©m remover todos os cookies jÃ¡ armazenados no seu computador, mas lembre-se de que a exclusÃ£o de cookies pode impedir o uso de determinadas Ã¡reas no nosso site.","pc_yprivacy_title":"A sua privacidade","privacy_policy":"<a href=\'%s\' target=\'_blank\'>PolÃ­tica de Privacidade</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"PÃ¤Ã¤llÃ¤","always_active":"Aina pÃ¤Ã¤llÃ¤","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Pois pÃ¤Ã¤ltÃ¤","nb_agree":"HyvÃ¤ksyn","nb_changep":"Muuta asetuksiani","nb_ok":"OK","nb_reject":"KieltÃ¤ydyn","nb_text":"KÃ¤ytÃ¤mme evÃ¤steitÃ¤ ja muita seurantateknologioita parantaaksemme kÃ¤yttÃ¤jÃ¤kokemusta verkkosivustollamme, nÃ¤yttÃ¤Ã¤ksemme sinulle personoituja sisÃ¤ltÃ¶jÃ¤ ja mainoksia, analysoidaksemme verkkoliikennettÃ¤ sekÃ¤ lisÃ¤tÃ¤ksemme ymmÃ¤rrystÃ¤mme kÃ¤yttÃ¤jiemme sijainnista.","nb_title":"KÃ¤ytÃ¤mme evÃ¤steitÃ¤","pc_fnct_text_1":"ToiminnallisuusevÃ¤steet","pc_fnct_text_2":"NÃ¤itÃ¤ evÃ¤steitÃ¤ kÃ¤ytetÃ¤Ã¤n personoidumman kÃ¤yttÃ¤jÃ¤kokemuksen luomiseksi sekÃ¤ valintojesi tallentamiseksi sivustollamme.","pc_fnct_text_3":"Esim. voimme kÃ¤yttÃ¤Ã¤ toiminnallisuusevÃ¤steitÃ¤ muistaaksemme kielivalintasi sekÃ¤ kirjautumistietosi.","pc_minfo_text_1":"LisÃ¤tietoa","pc_minfo_text_2":"EvÃ¤steisiin liittyvissÃ¤ kysymyksissÃ¤ ole hyvÃ¤ ja ota meihin yhteyttÃ¤.","pc_minfo_text_3":"Lue lisÃ¤Ã¤ <a href=\'%s\' target=\'_blank\'>TietosuojakÃ¤ytÃ¤ntÃ¶</a>.","pc_save":"Tallenna asetukseni","pc_sncssr_text_1":"TÃ¤rkeÃ¤t evÃ¤steet","pc_sncssr_text_2":"NÃ¤mÃ¤ evÃ¤steet mahdollistavat verkkosivustomme palveluiden sekÃ¤ tiettyjen ominaisuuksien kÃ¤yttÃ¤misen.","pc_sncssr_text_3":"Ilman nÃ¤itÃ¤ evÃ¤steitÃ¤ emme voi tarjota sinulle tiettyjÃ¤ palveluita sivustollamme.","pc_title":"EvÃ¤steasetukset","pc_trck_text_1":"Seuranta- ja tehokkuusevÃ¤steet","pc_trck_text_2":"NÃ¤iden evÃ¤steiden avulla kerÃ¤tÃ¤Ã¤n tietoa sivustomme liikenteestÃ¤ sekÃ¤ kÃ¤yttÃ¶tavoista.","pc_trck_text_3":"Esim. nÃ¤mÃ¤ evÃ¤steet voivat seurata sitÃ¤, paljonko aikaa vietÃ¤t sivustollamme, mikÃ¤ auttaa meitÃ¤ parantamaan sivustomme kÃ¤yttÃ¶kokemusta jatkossa.","pc_trck_text_4":"NÃ¤iden evÃ¤steiden avulla kerÃ¤tty tietoa ei voida yhdistÃ¤Ã¤ yksittÃ¤iseen kÃ¤yttÃ¤jÃ¤Ã¤n.","pc_trgt_text_1":"Kohdennus- ja mainosevÃ¤steet","pc_trgt_text_2":"NÃ¤itÃ¤ evÃ¤steitÃ¤ kÃ¤ytetÃ¤Ã¤n nÃ¤yttÃ¤mÃ¤Ã¤n mainoksia, jotka selauskÃ¤ytÃ¶ksesi perusteella todennÃ¤kÃ¶isesti kiinnostavat sinua.","pc_trgt_text_3":"NÃ¤mÃ¤ sisÃ¤ltÃ¶- ja/tai mainoskumppanimme tarjoamat evÃ¤steet voivat yhdistÃ¤Ã¤ sivustoltamme kerÃ¤ttyÃ¤ tietoa muilta heidÃ¤n verkostoonsa kuuluvilta sivustoilta kerÃ¤ttyihin tietoihin.","pc_trgt_text_4":"Jos pÃ¤Ã¤tÃ¤t poistaa tai kytkeÃ¤ pois pÃ¤Ã¤ltÃ¤ nÃ¤mÃ¤ kohdennus- ja mainosevÃ¤steet, nÃ¤et yhÃ¤ mainoksia, mutta ne eivÃ¤t vÃ¤lttÃ¤mÃ¤ttÃ¤ ole sinulle oleellisia.","pc_yprivacy_text_1":"Yksityisyytesi on meille tÃ¤rkeÃ¤Ã¤","pc_yprivacy_text_2":"EvÃ¤steet ovat pieniÃ¤ tekstitiedostoja, jotka tallennetaan laitteeseesi verkkosivulla vieraillessasi. KÃ¤ytÃ¤mme evÃ¤steitÃ¤ useaan tarkoitukseen ja parantaaksesi kÃ¤yttÃ¶kokemustasi verkkosivustollamme (esim. muistaaksemme kirjautumistietosi).","pc_yprivacy_text_3":"Voit muuttaa asetuksiasi ja kieltÃ¤Ã¤ sivustoltamme tiettyjen evÃ¤stetyyppien tallentamisen laitteellesi. Voit myÃ¶s poistaa minkÃ¤ tahansa jo tallennetun evÃ¤steen laitteeltasi, mutta huomaathan, ettÃ¤ evÃ¤steiden poistaminen saattaa estÃ¤Ã¤ sinua kÃ¤yttÃ¤mÃ¤stÃ¤ osaa sivustomme sisÃ¤llÃ¶stÃ¤.","pc_yprivacy_title":"Yksityisyytesi","privacy_policy":"<a href=\'%s\' target=\'_blank\'>TietosuojakÃ¤ytÃ¤ntÃ¶</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"AktÃ­v","always_active":"Mindig aktÃ­v","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"InaktÃ­v","nb_agree":"Elfogadom","nb_changep":"BeÃ¡llÃ­tÃ¡sok megvÃ¡ltoztatÃ¡sa","nb_ok":"OK","nb_reject":"ElutasÃ­tom","nb_text":"Az oldal sÃ¼tiket Ã©s egyÃ©b nyomkÃ¶vetÅ‘ technolÃ³giÃ¡kat alkalmaz, hogy javÃ­tsa a bÃ¶ngÃ©szÃ©si Ã©lmÃ©nyÃ©t, azzal hogy szemÃ©lyre szabott tartalmakat Ã©s cÃ©lzott hirdetÃ©seket jelenÃ­t meg, Ã©s elemzi a weboldalunk forgalmÃ¡t, hogy megtudjuk honnan Ã©rkeztek a lÃ¡togatÃ³ink.","nb_title":"Az oldal sÃ¼tiket hasznÃ¡l","pc_fnct_text_1":"FunkcionÃ¡lis sÃ¼tik","pc_fnct_text_2":"Ezeket a sÃ¼tiket arra hasznÃ¡ljuk, hogy szemÃ©lyre szabottabb Ã©lmÃ©nyt nyÃºjtsunk weboldalunkon, Ã©s hogy az oldal rÃ¶gzÃ­tse a webhelyÃ¼nk hasznÃ¡lata sorÃ¡n tett dÃ¶ntÃ©seket.","pc_fnct_text_3":"PÃ©ldÃ¡ul arra hasznÃ¡lhatunk funkcionÃ¡lis sÃ¼tiket, hogy emlÃ©kezzÃ¼nk a nyelvi beÃ¡llÃ­tÃ¡sokra, vagy a bejelentkezÃ©si adataira.","pc_minfo_text_1":"EgyÃ©b informÃ¡ciÃ³k","pc_minfo_text_2":"A sÃ¼tikre vonatkozÃ³ irÃ¡nyelveinkkel Ã©s az Ã–n vÃ¡lasztÃ¡sÃ¡val kapcsolatosan felmerÃ¼lÅ‘ bÃ¡rmilyen kÃ©rdÃ©sÃ©vel keressen meg bennÃ¼nket.","pc_minfo_text_3":"Ha tÃ¶bbet szeretne megtudni, kÃ©rjÃ¼k, keresse fel a <a href=\'%s\' target=\'_blank\'>AdatvÃ©delmi irÃ¡nyelvek</a>.","pc_save":"BeÃ¡llÃ­tÃ¡sok mentÃ©se","pc_sncssr_text_1":"FeltÃ©tlenÃ¼l szÃ¼ksÃ©ges sÃ¼tik","pc_sncssr_text_2":"Ezek a sÃ¼tik elengedhetetlenek a weboldalunkon elÃ©rhetÅ‘ szolgÃ¡ltatÃ¡sok nyÃºjtÃ¡sÃ¡hoz, valamint weboldalunk bizonyos funkciÃ³inak hasznÃ¡latÃ¡hoz.","pc_sncssr_text_3":"A feltÃ©tlenÃ¼l szÃ¼ksÃ©ges sÃ¼tik hasznÃ¡lata nÃ©lkÃ¼l weboldalunkon nem tudunk bizonyos szolgÃ¡ltatÃ¡sokat nyÃºjtani Ã–nnek.","pc_title":"SÃ¼tikre beÃ¡llÃ­tÃ¡si kÃ¶zpont","pc_trck_text_1":"KÃ¶vetÃ©si Ã©s teljesÃ­tmÃ©nnyel kapcsolatos sÃ¼tik","pc_trck_text_2":"Ezeket a sÃ¼tiket arra hasznÃ¡ljuk, hogy informÃ¡ciÃ³kat gyÅ±jtsÃ¼nk weboldalunk forgalmÃ¡rÃ³l Ã©s lÃ¡togatÃ³irÃ³l, webhelyÃ¼nk hasznÃ¡latÃ¡nak elemzÃ©sÃ©hez.","pc_trck_text_3":"PÃ©ldÃ¡ul ezek a sÃ¼tik nyomon kÃ¶vethetik a webhelyen tÃ¶ltÃ¶tt idÅ‘t vagy a meglÃ¡togatott oldalakat, amely segÃ­t megÃ©rteni, hogyan javÃ­thatjuk webhelyÃ¼nket az Ã–n nagyobb megelÃ©gedettsÃ©gÃ©re.","pc_trck_text_4":"Ezekkel a nyomkÃ¶vetÅ‘ Ã©s teljesÃ­tmÃ©nnyel kapcsolatos sÃ¼tikkel Ã¶sszegyÅ±jtÃ¶tt informÃ¡ciÃ³k egyetlen szemÃ©lyt sem azonosÃ­tanak.","pc_trgt_text_1":"CÃ©lirÃ¡nyos Ã©s hirdetÃ©si sÃ¼tik","pc_trgt_text_2":"Ezeket a sÃ¼tiket olyan hirdetÃ©sek megjelenÃ­tÃ©sÃ©re hasznÃ¡ljuk, amelyek valÃ³szÃ­nÅ±leg Ã©rdekli Ã–nt a bÃ¶ngÃ©szÃ©si szokÃ¡sai alapjÃ¡n.","pc_trgt_text_3":"Ezek a sÃ¼tik, amelyeket a tartalom Ã©s / vagy a reklÃ¡mszolgÃ¡ltatÃ³k szolgÃ¡ltatnak, egyesÃ­thetik a weboldalunktÃ³l gyÅ±jtÃ¶tt informÃ¡ciÃ³kat mÃ¡s informÃ¡ciÃ³kkal, amelyeket Ã¶nÃ¡llÃ³an Ã¶sszegyÅ±jtÃ¶ttek az Ã–n bÃ¶ngÃ©szÅ‘jÃ©nek tevÃ©kenysÃ©geivel kapcsolatban a webhely-hÃ¡lÃ³zaton keresztÃ¼l.","pc_trgt_text_4":"Ha Ã–n Ãºgy dÃ¶nt, hogy eltÃ¡volÃ­tja vagy letiltja ezeket a cÃ©lirÃ¡nyos vagy hirdetÃ©si sÃ¼tiket, akkor is lÃ¡tni fogja a hirdetÃ©seket, de lehet, hogy nem lesznek relevÃ¡nsak az Ã–n szÃ¡mÃ¡ra.","pc_yprivacy_text_1":"Az Ã¶n adatainak vÃ©delem fontos szÃ¡munkra","pc_yprivacy_text_2":"A sÃ¼tik egÃ©szen kicsi szÃ¶veges fÃ¡jlok, amelyeket a szÃ¡mÃ­tÃ³gÃ©pÃ©n tÃ¡rolnak, amikor meglÃ¡togat egy weboldalt. SÃ¼tiket hasznÃ¡lunk kÃ¼lÃ¶nfÃ©le cÃ©lokra, Ã©s weboldalunkon az online Ã©lmÃ©ny fokozÃ¡sa Ã©rdekÃ©ben (pÃ©ldÃ¡ul a fiÃ³kjÃ¡nak bejelentkezÃ©si adatainak megjegyzÃ©sÃ©re).","pc_yprivacy_text_3":"WebhelyÃ¼nk bÃ¶ngÃ©szÃ©se kÃ¶zben megvÃ¡ltoztathatja a beÃ¡llÃ­tÃ¡sait, Ã©s elutasÃ­thatja a szÃ¡mÃ­tÃ³gÃ©pÃ©n tÃ¡rolni kÃ­vÃ¡nt bizonyos tÃ­pusÃº sÃ¼tik hasznÃ¡latÃ¡t. A szÃ¡mÃ­tÃ³gÃ©pen mÃ¡r tÃ¡rolt sÃ¼tiket eltÃ¡volÃ­thatja, de ne feledje, hogy a sÃ¼tik tÃ¶rlÃ©se megakadÃ¡lyozhatja weboldalunk egyes rÃ©szeinek hasznÃ¡latÃ¡t.","pc_yprivacy_title":"Az Ã¶n adatai vÃ©delme","privacy_policy":"<a href=\'%s\' target=\'_blank\'>AdatvÃ©delmi irÃ¡nyelvek</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"Aktivno","always_active":"Uvijek aktivno","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Neaktivno","nb_agree":"SlaÅ¾em se","nb_changep":"Promjeni moje postavke","nb_ok":"OK","nb_reject":"Odbijam","nb_text":"Koristimo kolaÄiÄ‡e i druge tehnologije praÄ‡enja da bismo poboljÅ¡ali vaÅ¡e korisniÄko iskustvo na naÅ¡oj web stranici, kako bismo vam prikazali personalizirani sadrÅ¾aj i ciljane oglase, analizirali promet na naÅ¡oj web stranici i razumjeli odakle dolaze naÅ¡i posjetitelji.","nb_title":"Mi koristimo kolaÄiÄ‡e","pc_fnct_text_1":"KolaÄiÄ‡i funkcionalnosti","pc_fnct_text_2":"Ovi se kolaÄiÄ‡i koriste kako bi vam pruÅ¾ili personalizirano korisniÄko iskustvo na naÅ¡oj web stranici i za pamÄ‡enje izbora koje napravite kada koristite naÅ¡u web stranicu.","pc_fnct_text_3":"Na primjer, moÅ¾emo koristiti kolaÄiÄ‡e funkcionalnosti da bismo zapamtili vaÅ¡e jeziÄne postavke ili upamtili vaÅ¡e podatke za prijavu.","pc_minfo_text_1":"ViÅ¡e informacija","pc_minfo_text_2":"Za sve upite vezane uz naÅ¡a pravila o kolaÄiÄ‡ima i vaÅ¡im izborima, molimo da nas kontaktirate.","pc_minfo_text_3":"Da bi saznali viÅ¡e, posjetite naÅ¡a <a href=\'%s\' target=\'_blank\'>Pravila o privatnosti</a>.","pc_save":"Spremi moje postavke","pc_sncssr_text_1":"Strogo potrebni kolaÄiÄ‡i","pc_sncssr_text_2":"Ovi su kolaÄiÄ‡i neophodni za pruÅ¾anje usluga dostupnih putem naÅ¡e web stranice i omoguÄ‡avanje koriÅ¡tenja odreÄ‘enih znaÄajki naÅ¡e web stranice.","pc_sncssr_text_3":"Bez ovih kolaÄiÄ‡a ne moÅ¾emo vam pruÅ¾iti odreÄ‘ene usluge na naÅ¡oj web stranici.","pc_title":"Centar za postavke kolaÄiÄ‡a","pc_trck_text_1":"KolaÄiÄ‡i za praÄ‡enje i performanse","pc_trck_text_2":"Ovi se kolaÄiÄ‡i koriste za prikupljanje podataka za analizu prometa na naÅ¡oj web stranici i za informaciju kako posjetitelji koriste naÅ¡u web stranicu.","pc_trck_text_3":"Na primjer, ti kolaÄiÄ‡i mogu pratiti stvari poput dugovanja na web stranici ili stranicama koje posjetite Å¡to nam pomaÅ¾e da shvatimo kako moÅ¾emo poboljÅ¡ati vaÅ¡e korisniÄko iskustvo na naÅ¡oj web stranici.","pc_trck_text_4":"Informacije prikupljene ovim praÄ‡enjem i kolaÄiÄ‡i izvedbe ne identificiraju nijednog pojedinaÄnog posjetitelja.","pc_trgt_text_1":"KolaÄiÄ‡i za ciljano oglaÅ¡avanje","pc_trgt_text_2":"Ovi se kolaÄiÄ‡i koriste za prikazivanje oglasa koji bi vas mogli zanimati na temelju vaÅ¡ih navika pregledavanja web stranica.","pc_trgt_text_3":"Ovi kolaÄiÄ‡i, posluÅ¾eni od naÅ¡ih pruÅ¾atelja sadrÅ¾aja i / ili oglaÅ¡avanja, mogu kombinirati podatke koje su prikupili s naÅ¡e web stranice s drugim podacima koje su neovisno prikupili, a odnose se na aktivnosti vaÅ¡eg web preglednika kroz njihovu mreÅ¾u web stranica.","pc_trgt_text_4":"Ako odluÄite ukloniti ili onemoguÄ‡iti ove kolaÄiÄ‡e za ciljano oglaÅ¡avanje, i dalje Ä‡ete vidjeti oglase, ali oni moÅ¾da nisu relevantni za vas.","pc_yprivacy_text_1":"VaÅ¡a privatnost nam je vaÅ¾na","pc_yprivacy_text_2":"KolaÄiÄ‡i su vrlo male tekstualne datoteke koje se pohranjuju na vaÅ¡em raÄunalu kada posjetite web stranicu. Mi koristimo kolaÄiÄ‡e za razliÄite svrhe i za poboljÅ¡anje vaÅ¡eg mreÅ¾nog iskustva na naÅ¡oj web stranici (na primjer, za pamÄ‡enje podataka za prijavu na vaÅ¡ korisniÄki raÄun).","pc_yprivacy_text_3":"MoÅ¾ete promijeniti svoje postavke i odbiti odreÄ‘ene vrste kolaÄiÄ‡a koji Ä‡e se pohraniti na vaÅ¡em raÄunalu tijekom pregledavanja naÅ¡e web stranice. TakoÄ‘er moÅ¾ete ukloniti sve kolaÄiÄ‡e koji su veÄ‡ pohranjeni na vaÅ¡em raÄunalu, ali imajte na umu da vas brisanje kolaÄiÄ‡a moÅ¾e sprijeÄiti da koristite dijelove naÅ¡e web stranice.","pc_yprivacy_title":"VaÅ¡a privatnost","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Pravila o privatnosti</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"AktivnÃ­","always_active":"VÅ¾dy aktivnÃ­","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"NeaktivnÃ­","nb_agree":"SouhlasÃ­m","nb_changep":"Upravit mÃ© pÅ™edvolby","nb_ok":"OK","nb_reject":"OdmÃ­tÃ¡m","nb_text":"Tyto webovÃ© strÃ¡nky pouÅ¾Ã­vajÃ­ soubory cookies a dalÅ¡Ã­ sledovacÃ­ nÃ¡stroje s cÃ­lem vylepÅ¡enÃ­ uÅ¾ivatelskÃ©ho prostÅ™edÃ­, zobrazenÃ­ pÅ™izpÅ¯sobenÃ©ho obsahu a  reklam, analÃ½zy nÃ¡vÅ¡tÄ›vnosti webovÃ½ch strÃ¡nek a zjiÅ¡tÄ›nÃ­ zdroje nÃ¡vÅ¡tÄ›vnosti.","nb_title":"PouÅ¾Ã­vÃ¡me soubory cookies","pc_fnct_text_1":"Cookies pro funkcionality","pc_fnct_text_2":"Tyto soubory cookie se pouÅ¾Ã­vajÃ­ k tomu, aby vÃ¡m na naÅ¡ich webovÃ½ch strÃ¡nkÃ¡ch poskytovaly personalizovanÃ½ uÅ¾ivatelskÃ½ zÃ¡Å¾itek a aby si pamatovaly vaÅ¡e volby, kterÃ© jste pouÅ¾ili pÅ™i pouÅ¾Ã­vÃ¡nÃ­ naÅ¡ich webovÃ½ch strÃ¡nek.","pc_fnct_text_3":"MÅ¯Å¾eme napÅ™Ã­klad pouÅ¾Ã­vat soubory cookie k zapamatovÃ¡nÃ­ vaÅ¡eho jazyka nebo k zapamatovÃ¡nÃ­ vaÅ¡ich pÅ™ihlaÅ¡ovacÃ­ch ÃºdajÅ¯.","pc_minfo_text_1":"DalÅ¡Ã­ informace","pc_minfo_text_2":"V pÅ™Ã­padÄ› jakÃ½chkoliv dotazÅ¯  ohlednÄ› naÅ¡ich zÃ¡sad tÃ½kajÃ­cÃ­ch se souborÅ¯ cookie a vaÅ¡ich moÅ¾nostÃ­ nÃ¡s prosÃ­m kontaktujte.","pc_minfo_text_3":"Pro vÃ­ce informacÃ­ navÅ¡tivte naÅ¡i strÃ¡nku <a href=\'%s\' target=\'_blank\'>ZÃ¡sady ochrany osobnÃ­ch ÃºdajÅ¯</a>.","pc_save":"UloÅ¾it mÃ© pÅ™edvolby","pc_sncssr_text_1":"BezpodmÃ­neÄnÄ› nutnÃ© soubory cookies","pc_sncssr_text_2":"Tyto soubory cookies jsou nezbytnÃ© k tomu, abychom vÃ¡m mohli poskytovat sluÅ¾by dostupnÃ© prostÅ™ednictvÃ­m naÅ¡eho webu a abychom vÃ¡m umoÅ¾nili pouÅ¾Ã­vat urÄitÃ© funkce naÅ¡eho webu.","pc_sncssr_text_3":"Bez tÄ›chto cookies vÃ¡m nemÅ¯Å¾eme na naÅ¡Ã­ webovÃ© strÃ¡nce poskytovat urÄitÃ© sluÅ¾by.","pc_title":"Centrum pÅ™edvoleb souborÅ¯ Cookies","pc_trck_text_1":"SledovacÃ­ a vÃ½konnostnÃ­ soubory cookies","pc_trck_text_2":"Tyto soubory cookies se pouÅ¾Ã­vajÃ­ ke shromaÅ¾ÄovÃ¡nÃ­ informacÃ­ pro analÃ½zu provozu na naÅ¡ich webovÃ½ch strÃ¡nkÃ¡ch a sledovÃ¡nÃ­ pouÅ¾Ã­vÃ¡nÃ­ naÅ¡ich webovÃ½ch strÃ¡nek uÅ¾ivateli.","pc_trck_text_3":"Tyto soubory cookies mohou napÅ™Ã­klad sledovat vÄ›ci jako je doba kterou na webu trÃ¡vÃ­te, nebo strÃ¡nky, kterÃ© navÅ¡tÄ›vujete, coÅ¾ nÃ¡m pomÃ¡hÃ¡ pochopit, jak pro vÃ¡s mÅ¯Å¾eme vylepÅ¡it nÃ¡Å¡ web.","pc_trck_text_4":"Informace shromÃ¡Å¾dÄ›nÃ© prostÅ™ednictvÃ­m tÄ›chto sledovacÃ­ch a vÃ½konnostnÃ­ch cookies neidentifikujÃ­ Å¾Ã¡dnÃ© osoby.","pc_trgt_text_1":"Cookies pro cÃ­lenÃ­ a reklamu","pc_trgt_text_2":"Tyto soubory cookie se pouÅ¾Ã­vajÃ­ k zobrazovÃ¡nÃ­ reklamy, kterÃ¡ vÃ¡s pravdÄ›podobnÄ› bude zajÃ­mat na zÃ¡kladÄ› vaÅ¡ich zvykÅ¯ pÅ™i prochÃ¡zenÃ­.","pc_trgt_text_3":"Tyto soubory cookie, jsou poÅ¾adovÃ¡ny nÃ¡mi/nebo poskytovateli reklam, mohou kombinovat informace shromÃ¡Å¾dÄ›nÃ© z naÅ¡ich webovÃ½ch strÃ¡nek s dalÅ¡Ã­mi informacemi, kterÃ© nezÃ¡visle shromÃ¡Å¾dily z jinÃ½ch webovÃ½ch strÃ¡nek, tÃ½kajÃ­cÃ­ se ÄinnostÃ­ vaÅ¡eho internetovÃ©ho prohlÃ­Å¾eÄe v rÃ¡mci jejich reklamnÃ­ sÃ­tÄ› webovÃ½ch strÃ¡nek.","pc_trgt_text_4":"Pokud se rozhodnete tyto soubory cookies pro cÃ­lenÃ­ nebo reklamu odstranit nebo deaktivovat, budou se vÃ¡m reklamy stÃ¡le zobrazovat, ale nemusÃ­ pro vÃ¡s bÃ½t nadÃ¡le personalizovanÃ© a relevantnÃ­.","pc_yprivacy_text_1":"VaÅ¡e soukromÃ­ je pro nÃ¡s dÅ¯leÅ¾itÃ©","pc_yprivacy_text_2":"Soubory cookies jsou velmi malÃ© textovÃ© soubory, kterÃ© se uklÃ¡dajÃ­ do vaÅ¡eho zaÅ™Ã­zenÃ­ pÅ™i navÅ¡tÄ›vovÃ¡nÃ­ webovÃ½ch strÃ¡nek. Soubory Cookies pouÅ¾Ã­vÃ¡me pro rÅ¯znÃ© ÃºÄely a pro vylepÅ¡enÃ­ vaÅ¡eho online zÃ¡Å¾itku na webovÃ© strÃ¡nce (napÅ™Ã­klad pro zapamatovÃ¡nÃ­ pÅ™ihlaÅ¡ovacÃ­ch ÃºdajÅ¯ k vaÅ¡emu ÃºÄtu).","pc_yprivacy_text_3":"PÅ™i prochÃ¡zenÃ­ naÅ¡ich webovÃ½ch strÃ¡nek mÅ¯Å¾ete zmÄ›nit svÃ© pÅ™edvolby a odmÃ­tnout urÄitÃ© typy cookies, kterÃ© se majÃ­ uklÃ¡dat do vaÅ¡eho poÄÃ­taÄe. MÅ¯Å¾ete takÃ© odstranit vÅ¡echny soubory cookie, kterÃ© jsou jiÅ¾ uloÅ¾eny ve vaÅ¡em poÄÃ­taÄi, ale mÄ›jte na pamÄ›ti, Å¾e odstranÄ›nÃ­ souborÅ¯ cookie vÃ¡m mÅ¯Å¾e zabrÃ¡nit v pouÅ¾Ã­vÃ¡nÃ­ ÄÃ¡stÃ­ naÅ¡eho webu.","pc_yprivacy_title":"VaÅ¡e soukromÃ­","privacy_policy":"<a href=\'%s\' target=\'_blank\'>ZÃ¡sady ochrany osobnÃ­ch ÃºdajÅ¯</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"Aktiv","always_active":"Altid aktiv","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Inaktiv","nb_agree":"Jeg accepterer","nb_changep":"Skift indstillinger","nb_ok":"OK","nb_reject":"Jeg nÃ¦gter","nb_text":"Vi bruger cookies og andre tracking teknologier for at forbedre din oplevelse pÃ¥ vores website, til at vise personaliseret indhold, mÃ¥lrettede annoncer og til at forstÃ¥ hvor vores besÃ¸gende kommer fra.","nb_title":"Vi bruger cookies","pc_fnct_text_1":"Funktions cookies","pc_fnct_text_2":"Disse cookies anvendes for at kunne give dig en personaliseret oplevelse af vores hjemmeside, og for at kunne huske valg du har truffet.","pc_fnct_text_3":"Eksempelvis kan vi bruge funktions cookies til at huske sprog-indstillinger eller dine login informationer.","pc_minfo_text_1":"Mere information","pc_minfo_text_2":"Har du spÃ¸rgsmÃ¥l vedr. vores cookiepolitik og dine valgmuligheder, sÃ¥ kontakt os venligst.","pc_minfo_text_3":"For at finde ud af mere, sÃ¥ lÃ¦s venligst vores <a href=\'%s\' target=\'_blank\'>Fortrolighedspolitik</a>.","pc_save":"Gem mine indstillinger","pc_sncssr_text_1":"NÃ¸dvendige cookies","pc_sncssr_text_2":"Disse Cookies er essentielle for at du kan bruge vores hjemmeside.","pc_sncssr_text_3":"Uden disse cookies kan vi ikke garantere vores hjemmeside virker ordentligt.","pc_title":"Cookie indstillinger","pc_trck_text_1":"Tracking og performance cookies","pc_trck_text_2":"Disse cookies anvendes til at analysere besÃ¸g pÃ¥ vores hjemmeside, og hvordan du bruger vores hjemmeside.","pc_trck_text_3":"Eksempelvis kan vi tracke hvor lang tid du bruger hjemmesiden, eller hvilke sider du kigger pÃ¥. Det hjÃ¦lper os til at forstÃ¥ hvordan vi kan forbedre hjemmesiden.","pc_trck_text_4":"Informationerne kan ikke identificere dig som individ og er derfor anonyme.","pc_trgt_text_1":"MÃ¥lretning og annoncecookies","pc_trgt_text_2":"Disse cookies anvendes for at kunne vise annoncer, som sandsynligvis er interessante for dig, baseret pÃ¥ dine browser profil.","pc_trgt_text_3":"Disse cookies, som sÃ¦ttes af vores indhold og/eller annoncepartnere, kan kombinere information fra flere hjemmesider i hele det netvÃ¦rk som partnerne styrer.","pc_trgt_text_4":"Hvis du deaktiverer denne indstilling vil du fortsat se reklamer, men de vil ikke lÃ¦ngere vÃ¦re mÃ¥lrettet til dig.","pc_yprivacy_text_1":"Dit privatliv er vigtigt for os","pc_yprivacy_text_2":"Cookies er en lille tekstfil, som gemmes pÃ¥ din computer, nÃ¥r du besÃ¸ger et website. Vi bruger cookies til en rÃ¦kke formÃ¥l, og for at forbedre din oplevelse pÃ¥ vores website (eksempelvis for at huske dine login oplysninger).","pc_yprivacy_text_3":"Du kan Ã¦ndre dine indstillinger og afvise forskellige typer cookies, som gemmes pÃ¥ din computer, nÃ¥r du besÃ¸ger vores website. Du kan ogsÃ¥ fjerne cookies som allerede er gemt pÃ¥ din computer, men bemÃ¦rk venligst at sletning af cookies kan betyde der er dele af hjemmesiden som ikke virker.","pc_yprivacy_title":"Dit privatliv","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Fortrolighedspolitik</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"Active","always_active":"ÃŽntotdeauna active","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Inactive","nb_agree":"Sunt de acord","nb_changep":"Vreau sÄƒ schimb setÄƒrile","nb_ok":"OK","nb_reject":"Refuz","nb_text":"Folosim cookie-uri È™i alte tehnologii de urmÄƒrire pentru a Ã®mbunÄƒtÄƒÈ›i experienÈ›a ta de navigare pe website-ul nostru, pentru afiÈ™a conÈ›inut È™i reclame personalizate, pentru a analiza traficul de pe website-ul nostru È™i pentru a Ã®nÈ›elege de unde vin vizitatorii noÈ™tri.","nb_title":"Folosim cookie-uri","pc_fnct_text_1":"Cookie-uri funcÈ›ionale","pc_fnct_text_2":"Aceste cookie-uri sunt folosite pentru a-È›i asigura o experienÈ›Äƒ personalizatÄƒ pe website-ul nostru È™i pentru salvarea alegerilor pe care le faci cÃ¢nd foloseÈ™ti website-ul nostru.","pc_fnct_text_3":"De exemplu, putem folosi cookie-uri funcÈ›ionale pentru a salva preferinÈ›ele tale legate de limba website-ului nostru sau datele de logare.","pc_minfo_text_1":"Mai multe informaÈ›ii","pc_minfo_text_2":"Pentru mai multe informaÈ›ii cu privire la politica noastrÄƒ de cookie-uri È™i preferinÈ›ele tale, te rugÄƒm sÄƒ ne contactezi.","pc_minfo_text_3":"Pentru a afla mai multe, te rugÄƒm sÄƒ citeÈ™ti <a href=\'%s\' target=\'_blank\'>Politica noastrÄƒ de confidenÈ›ialitate</a>.","pc_save":"SalveazÄƒ","pc_sncssr_text_1":"Cookie-uri strict necesare","pc_sncssr_text_2":"Aceste cookie-uri sunt esenÈ›iale pentru a putea beneficia de serviciile disponibile pe website-ul nostru.","pc_sncssr_text_3":"FÄƒrÄƒ aceste cookie-uri nu poÈ›i folosi anumite funcÈ›ionalitÄƒÈ›i ale website-ului nostru.","pc_title":"PreferinÈ›e pentru Cookie-uri","pc_trck_text_1":"Cookie-uri de analizÄƒ È™i performanÈ›Äƒ","pc_trck_text_2":"Acest tip de cookie-uri sunt folosite pentru a colecta informaÈ›ii Ã®n vederea analizÄƒrii traficului pe website-ul nostru È™i modul Ã®n care vizitatorii noÈ™tri folosesc website-ul.","pc_trck_text_3":"De exemplu, aceste cookie-uri pot urmÄƒri cÃ¢t timp petreci pe website sau paginile pe care le vizitezi, ceea ce ne ajutÄƒ sÄƒ Ã®nÈ›elegem cum putem Ã®mbunÄƒtÄƒÈ›i website-ul pentru tine.","pc_trck_text_4":"InformaÈ›iile astfel colectate nu identificÄƒ individual vizitatorii.","pc_trgt_text_1":"Cookie-uri pentru marketing È™i publicitate","pc_trgt_text_2":"Aceste cookie-uri sunt folosite pentru a-È›i afiÈ™a reclame cÃ¢t mai pe interesul tÄƒu, Ã®n funcÈ›ie de obiceiurile tale de navigare.","pc_trgt_text_3":"Aceste cookie-uri, aÈ™a cum sunt afiÈ™ate de furnizori noÈ™tri de conÈ›inut È™i/sau publicitate, pot combina informaÈ›ii de pe website-ul nostru cu alte informaÈ›ii pe care furnizori noÈ™tri le-au colectat Ã®n mod independent cu privire la activitatea ta Ã®n reÈ›eaua lor de website-uri.","pc_trgt_text_4":"DacÄƒ alegi sÄƒ È™tergi sau sÄƒ dezactivezi aceste cookie-uri tot vei vedea reclame, dar se poate ca aceste reclame sÄƒ nu fie relevante pentru tine.","pc_yprivacy_text_1":"ConfidenÈ›ialitatea ta este importantÄƒ pentru noi","pc_yprivacy_text_2":"Cookie-urile sunt fiÈ™iere text foarte mici ce sunt salvate Ã®n browser-ul tÄƒu atunci cÃ¢nd vizitezi un website. Folosim cookie-uri pentru mai multe scopuri, dar È™i pentru a Ã®È›i oferi cea mai bunÄƒ experienÈ›Äƒ de utilizare posibilÄƒ (de exemplu, sÄƒ reÈ›inem datele tale de logare Ã®n cont).","pc_yprivacy_text_3":"ÃŽÈ›i poÈ›i modifica preferinÈ›ele È™i poÈ›i refuza ca anumite tipuri de cookie-uri sÄƒ nu fie salvate Ã®n browser Ã®n timp ce navigezi pe website-ul nostru. Deasemenea poÈ›i È™terge cookie-urile salvate deja Ã®n browser, dar reÈ›ine cÄƒ este posibil sÄƒ nu poÈ›i folosi anumite pÄƒrÈ›i ale website-ul nostru Ã®n acest caz.","pc_yprivacy_title":"ConfidenÈ›ialitatea ta","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Politica noastrÄƒ de confidenÈ›ialitate</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"AktÃ­vne","always_active":"VÅ¾dy aktÃ­vne","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"NeaktÃ­vne","nb_agree":"SÃºhlasÃ­m","nb_changep":"ZmeniÅ¥ moje nastavenia","nb_ok":"OK","nb_reject":"Odmietam","nb_text":"SÃºbory cookie a ÄalÅ¡ie technolÃ³gie sledovania pouÅ¾Ã­vame na zlepÅ¡enie vÃ¡Å¡ho zÃ¡Å¾itku z prehliadania naÅ¡ich webovÃ½ch strÃ¡nok, na to, aby sme vÃ¡m zobrazovali prispÃ´sobenÃ½ obsah a cielenÃ© reklamy, na analÃ½zu nÃ¡vÅ¡tevnosti naÅ¡ich webovÃ½ch strÃ¡nok a na pochopenie toho, odkiaÄ¾ naÅ¡i nÃ¡vÅ¡tevnÃ­ci prichÃ¡dzajÃº.","nb_title":"PouÅ¾Ã­vame cookies","pc_fnct_text_1":"FunkÄnÃ© cookies","pc_fnct_text_2":"Tieto sÃºbory cookie sa pouÅ¾Ã­vajÃº na to, aby vÃ¡m poskytli osobnejÅ¡ie prostredie na naÅ¡ej webovej strÃ¡nke, a na zapamÃ¤tanie si rozhodnutÃ­, ktorÃ© urobÃ­te pri pouÅ¾Ã­vanÃ­ naÅ¡ej webovej strÃ¡nky.","pc_fnct_text_3":"NaprÃ­klad mÃ´Å¾eme pouÅ¾iÅ¥ funkÄnÃ© cookies na zapamÃ¤tanie vaÅ¡ich jazykovÃ½ch preferenciÃ­ alebo na zapamÃ¤tanie vaÅ¡ich prihlasovacÃ­ch Ãºdajov.","pc_minfo_text_1":"Viac informÃ¡ciÃ­","pc_minfo_text_2":"Ak mÃ¡te akÃ©koÄ¾vek otÃ¡zky tÃ½kajÃºce sa naÅ¡ich zÃ¡sad tÃ½kajÃºcich sa sÃºborov cookie a vaÅ¡ich moÅ¾nostÃ­, kontaktujte nÃ¡s.","pc_minfo_text_3":"Ak sa chcete dozvedieÅ¥ viac, navÅ¡tÃ­vte <a href=\'%s\' target=\'_blank\'>ZÃ¡sady ochrany osobnÃ½ch Ãºdajov</a>.","pc_save":"UloÅ¾ moje predvoÄ¾by","pc_sncssr_text_1":"Nevyhnutne potrebnÃ© cookies","pc_sncssr_text_2":"Tieto sÃºbory cookie sÃº nevyhnutnÃ© na to, aby sme vÃ¡m mohli poskytovaÅ¥ sluÅ¾by dostupnÃ© prostrednÃ­ctvom naÅ¡ej webovej strÃ¡nky a aby ste mohli pouÅ¾Ã­vaÅ¥ urÄitÃ© funkcie naÅ¡ej webovej strÃ¡nky.","pc_sncssr_text_3":"Bez tÃ½chto sÃºborov cookie vÃ¡m nemÃ´Å¾eme poskytnÃºÅ¥ urÄitÃ© sluÅ¾by na naÅ¡om webe.","pc_title":"Centrum predvolieb cookies","pc_trck_text_1":"Sledovacie a vÃ½konnostnÃ© cookies","pc_trck_text_2":"Tieto sÃºbory cookie sa pouÅ¾Ã­vajÃº na zhromaÅ¾Äovanie informÃ¡ciÃ­ na analÃ½zu prenosu na naÅ¡om webe a toho, ako nÃ¡vÅ¡tevnÃ­ci pouÅ¾Ã­vajÃº nÃ¡Å¡ web.","pc_trck_text_3":"Tieto sÃºbory cookie mÃ´Å¾u naprÃ­klad sledovaÅ¥ naprÃ­klad to, koÄ¾ko Äasu strÃ¡vite na webovÃ½ch strÃ¡nkach alebo navÅ¡tÃ­venÃ½ch strÃ¡nkach, Äo nÃ¡m pomÃ¡ha pochopiÅ¥, ako mÃ´Å¾eme pre vÃ¡s vylepÅ¡iÅ¥ naÅ¡e webovÃ© strÃ¡nky.","pc_trck_text_4":"InformÃ¡cie zhromaÅ¾denÃ© prostrednÃ­ctvom tÃ½chto sÃºborov cookie na sledovanie a vÃ½konnosÅ¥ neidentifikujÃº Å¾iadneho jednotlivÃ©ho nÃ¡vÅ¡tevnÃ­ka.","pc_trgt_text_1":"Zacielenie a reklamnÃ© cookies","pc_trgt_text_2":"Tieto sÃºbory cookie sa pouÅ¾Ã­vajÃº na zobrazovanie reklÃ¡m, ktorÃ© by vÃ¡s mohli pravdepodobne zaujÃ­maÅ¥ na zÃ¡klade vaÅ¡ich zvykov pri prehliadanÃ­.","pc_trgt_text_3":"Tieto sÃºbory cookie, ktorÃ© slÃºÅ¾ia pre nÃ¡Å¡ obsah a/alebo poskytovateÄ¾ov reklÃ¡m, mÃ´Å¾u kombinovaÅ¥ informÃ¡cie zhromaÅ¾denÃ© z naÅ¡ej webovej strÃ¡nky s ÄalÅ¡Ã­mi informÃ¡ciami, ktorÃ© nezÃ¡visle zhromaÅ¾dili, tÃ½kajÃºce sa aktivÃ­t vÃ¡Å¡ho webovÃ©ho prehliadaÄa v rÃ¡mci ich siete webovÃ½ch strÃ¡nok.","pc_trgt_text_4":"Ak sa rozhodnete odstrÃ¡niÅ¥ alebo zakÃ¡zaÅ¥ tieto sÃºbory cookie pre zacielenie alebo reklamu, stÃ¡le sa vÃ¡m budÃº zobrazovaÅ¥ reklamy, ktorÃ© vÅ¡ak pre vÃ¡s nemusia byÅ¥ relevantnÃ©.","pc_yprivacy_text_1":"VaÅ¡e sÃºkromie je pre nÃ¡s dÃ´leÅ¾itÃ©","pc_yprivacy_text_2":"SÃºbory cookie sÃº veÄ¾mi malÃ© textovÃ© sÃºbory, ktorÃ© sa ukladajÃº do vÃ¡Å¡ho poÄÃ­taÄa pri nÃ¡vÅ¡teve webovej strÃ¡nky. SÃºbory cookie pouÅ¾Ã­vame na rÃ´zne ÃºÄely a na zlepÅ¡enie vÃ¡Å¡ho online zÃ¡Å¾itku z naÅ¡ej webovej strÃ¡nky (naprÃ­klad na zapamÃ¤tanie prihlasovacÃ­ch Ãºdajov vÃ¡Å¡ho ÃºÄtu).","pc_yprivacy_text_3":"MÃ´Å¾ete zmeniÅ¥ svoje predvoÄ¾by a odmietnuÅ¥ urÄitÃ© typy sÃºborov cookie, ktorÃ© sa majÃº ukladaÅ¥ vo vaÅ¡om poÄÃ­taÄi pri prehliadanÃ­ naÅ¡ich webovÃ½ch strÃ¡nok. MÃ´Å¾ete tieÅ¾ odstrÃ¡niÅ¥ vÅ¡etky sÃºbory cookie, ktorÃ© sÃº uÅ¾ uloÅ¾enÃ© vo vaÅ¡om poÄÃ­taÄi, ale nezabudnite, Å¾e vymazanie sÃºborov cookie vÃ¡m mÃ´Å¾e zabrÃ¡niÅ¥ v pouÅ¾Ã­vanÃ­ ÄastÃ­ naÅ¡ej webovej strÃ¡nky.","pc_yprivacy_title":"VaÅ¡e sÃºkromie","privacy_policy":"<a href=\'%s\' target=\'_blank\'>ZÃ¡sady ochrany osobnÃ½ch Ãºdajov</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"Aktivni","always_active":"Vedno aktivni","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Neaktivni","nb_agree":"Se strinjam","nb_changep":"Spremeni moje nastavitve","nb_ok":"V redu","nb_reject":"ZavraÄam","nb_text":"PiÅ¡kotke in druge sledilne tehnologije uporabljamo za izboljÅ¡anje vaÅ¡e uporabniÅ¡ke izkuÅ¡nje med brskanjem po naÅ¡i spletni strani, za  prikazovanje personaliziranih vsebin oz. targetiranih oglasov, za analizo obiskov naÅ¡e spletne strani in za vpogled v to, iz kje prihajajo naÅ¡i gostje.","nb_title":"Uporabljamo piÅ¡kotke","pc_fnct_text_1":"Funkcionalni piÅ¡kotki (ang. functionality cookies)","pc_fnct_text_2":"Ti piÅ¡kotki se uporabljajo za zagotavljanje bolj personalizirane izkuÅ¡nje na naÅ¡i spletni strani in za shranjevanje vaÅ¡ih odloÄitev ob uporabi naÅ¡e spletne strani.","pc_fnct_text_3":"Funkcionalne piÅ¡kotke lahko, na primer, uporabljamo za to, da si zapomnimo vaÅ¡e jezikovne nastavitve oz. podatke za vpis v vaÅ¡ raÄun.","pc_minfo_text_1":"VeÄ informacij","pc_minfo_text_2":"ÄŒe imate kakrÅ¡nakoli vpraÅ¡anja v zvezi z naÅ¡im pravilnikom o piÅ¡kotkih in vaÅ¡ih izbirah, nas prosim kontaktirajte.","pc_minfo_text_3":"Za veÄ informacij si prosim oglejte naÅ¡ <a href=\'%s\' target=\'_blank\'>Politika zasebnosti</a>.","pc_save":"Shrani moje nastavitve","pc_sncssr_text_1":"Nujno potrebni piÅ¡kotki (ang. strictly necessary cookies)","pc_sncssr_text_2":"Ti piÅ¡kotki so kljuÄnega pomena pri zagotavljanju storitev, ki so na voljo na naÅ¡i spletni strani, in pri omogoÄanju doloÄenih funkcionalnosti naÅ¡e spletne strani.","pc_sncssr_text_3":"Brez teh piÅ¡kotkov vam ne moremo zagotoviti doloÄenih storitev na naÅ¡i spletni strani.","pc_title":"Nastavitve piÅ¡kotkov","pc_trck_text_1":"Sledilni in izvedbeni piÅ¡kotki (ang. tracking and performance cookies)","pc_trck_text_2":"Ti piÅ¡kotki se uporabljajo za zbiranje podatkov za analizo obiskov naÅ¡e spletne strani in vpogled v to, kako gostje uporabljajo naÅ¡o spletno stran.","pc_trck_text_3":"Ti piÅ¡kotki lahko, na primer, spremljajo stvari kot so to, koliko Äasa preÅ¾ivite na naÅ¡i spletni strani oz. katere strani obiÅ¡Äete, kar nam pomaga pri razumevanju, kako lahko za vas izboljÅ¡amo spletno stran.","pc_trck_text_4":"Podatki, ki jih zbirajo ti piÅ¡kotki, ne identificirajo nobenega posameznega uporabnika.","pc_trgt_text_1":"Ciljni in oglaÅ¡evalski piÅ¡kotki (ang. targeting and advertising cookies)","pc_trgt_text_2":"Ti piÅ¡kotki se uporabljajo za prikazovanje spletnih oglasov, ki vas bodo na podlagi vaÅ¡ih navad pri brskanju verjetno zanimali.","pc_trgt_text_3":"Ti piÅ¡kotki, ki jih uporabljajo naÅ¡i oglaÅ¡evalski ponudniki oz. ponudniki vsebine, lahko zdruÅ¾ujejo podatke, ki so jih zbrali na naÅ¡i spletni strani, z drugimi podatki, ki so jih zbrali neodvisno v povezavi z dejavnostmi vaÅ¡ega spletnega brskalnika na njihovi mreÅ¾i spletnih mest.","pc_trgt_text_4":"ÄŒe se odloÄite izbrisati oz. onemogoÄiti te ciljne in oglaÅ¡evalske piÅ¡kotke, boste Å¡e vedno videvali oglase, vendar ti morda ne bodo relevantni za vas.","pc_yprivacy_text_1":"Cenimo vaÅ¡o zasebnost","pc_yprivacy_text_2":"PiÅ¡kotki so majhne besedilne datoteke, ki se shranijo na vaÅ¡o napravo ob obisku spletne strani. PiÅ¡kotke uporabljamo v veÄ namenov, predvsem pa za izboljÅ¡anje vaÅ¡e spletne izkuÅ¡nje na naÅ¡i strani (na primer za shranjevanje podatkov ob vpisu v vaÅ¡ raÄun).","pc_yprivacy_text_3":"VaÅ¡e nastavitve lahko spremenite in onemogoÄite doloÄenim vrstam piÅ¡kotkov, da bi se shranili na vaÅ¡o napravo med brskanjem po naÅ¡i spletni strani. Poleg tega lahko odstranite katerekoli piÅ¡kotke, ki so Å¾e shranjeni v vaÅ¡i napravi, a upoÅ¡tevajte, da vam bo po izbrisu piÅ¡kotkov morda onemogoÄeno uporabljati dele naÅ¡e spletne strani.","pc_yprivacy_title":"VaÅ¡a zasebnost","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Politika zasebnosti</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"Aktywne","always_active":"Zawsze aktywne","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Nieaktywne","nb_agree":"Zgoda","nb_changep":"Zmiana ustawieÅ„","nb_ok":"OK","nb_reject":"Odmawiam","nb_text":"UÅ¼ywamy plikÃ³w cookie i innych technologii Å›ledzenia, aby poprawiÄ‡ jakoÅ›Ä‡ przeglÄ…dania naszej witryny, wyÅ›wietlaÄ‡ spersonalizowane treÅ›ci i reklamy, analizowaÄ‡ ruch w naszej witrynie i wiedzieÄ‡, skÄ…d pochodzÄ… nasi uÅ¼ytkownicy.","nb_title":"UÅ¼ywamy plikÃ³w cookie","pc_fnct_text_1":"Funkcjonalne","pc_fnct_text_2":"Te pliki cookie sÅ‚uÅ¼Ä… do bardziej spersonalizowanego korzystania z naszej strony internetowej i do zapamiÄ™tywania wyborÃ³w dokonywanych podczas korzystania z naszej strony internetowej.","pc_fnct_text_3":"Na przykÅ‚ad moÅ¼emy uÅ¼ywaÄ‡ funkcjonalnych plikÃ³w cookie do zapamiÄ™tywania preferencji jÄ™zykowych lub zapamiÄ™tywania danych logowania.","pc_minfo_text_1":"WiÄ™cej informacji","pc_minfo_text_2":"W przypadku jakichkolwiek pytaÅ„ dotyczÄ…cych naszej polityki dotyczÄ…cej plikÃ³w cookie i Twoich wyborÃ³w, skontaktuj siÄ™ z nami.","pc_minfo_text_3":"Aby dowiedzieÄ‡ siÄ™ wiÄ™cej, odwiedÅº naszÄ… <a href=\'%s\' target=\'_blank\'>Polityka prywatnoÅ›ci</a>.","pc_save":"Zapisz ustawienia","pc_sncssr_text_1":"NiezbÄ™dne","pc_sncssr_text_2":"Te pliki cookie sÄ… niezbÄ™dne do Å›wiadczenia usÅ‚ug dostÄ™pnych za poÅ›rednictwem naszej strony internetowej i umoÅ¼liwienia korzystania z niektÃ³rych funkcji naszej strony internetowej.","pc_sncssr_text_3":"Bez tych plikÃ³w cookie nie moÅ¼emy zapewniÄ‡ usÅ‚ug na naszej stronie internetowej.","pc_title":"Centrum ustawieÅ„ cookie","pc_trck_text_1":"Åšledzenie i wydajnoÅ›Ä‡","pc_trck_text_2":"Te pliki cookie sÅ‚uÅ¼Ä… do zbierania informacji w celu analizy ruchu na naszej stronie internetowej i sposobu, w jaki uÅ¼ytkownicy korzystajÄ… z naszej strony internetowej.","pc_trck_text_3":"Na przykÅ‚ad te pliki cookie mogÄ… Å›ledziÄ‡ takie rzeczy, jak czas spÄ™dzony na stronie lub odwiedzane strony, co pomaga nam zrozumieÄ‡, w jaki sposÃ³b moÅ¼emy ulepszyÄ‡ naszÄ… witrynÄ™ internetowÄ….","pc_trck_text_4":"Informacje zebrane przez te pliki nie identyfikujÄ… Å¼adnego konkretnego uÅ¼ytkownika.","pc_trgt_text_1":"Targeting i reklama","pc_trgt_text_2":"Te pliki cookie sÅ‚uÅ¼Ä… do wyÅ›wietlania reklam, ktÃ³re mogÄ… CiÄ™ zainteresowaÄ‡ na podstawie Twoich zwyczajÃ³w przeglÄ…dania.","pc_trgt_text_3":"Pliki te tworzone przez naszych dostawcÃ³w treÅ›ci i/lub reklam, mogÄ… Å‚Ä…czyÄ‡ informacje zebrane z naszej strony z innymi informacjami, ktÃ³re gromadzili niezaleÅ¼nie w zwiÄ…zku z dziaÅ‚aniami przeglÄ…darki internetowej w ich sieci witryn.","pc_trgt_text_4":"JeÅ›li zdecydujesz siÄ™ usunÄ…Ä‡ lub wyÅ‚Ä…czyÄ‡ te pliki cookie, reklamy nadal bÄ™dÄ… wyÅ›wietlane, ale mogÄ… one nie byÄ‡ odpowiednie dla Ciebie.","pc_yprivacy_text_1":"Twoja prywatnoÅ›Ä‡ jest dla nas waÅ¼na","pc_yprivacy_text_2":"Pliki cookie to bardzo maÅ‚e pliki tekstowe, ktÃ³re sÄ… tworzone i przechowywane na komputerze uÅ¼ytkownika podczas odwiedzania strony internetowej. UÅ¼ywamy plikÃ³w cookie do rÃ³Å¼nych celÃ³w, w tym do ulepszania obsÅ‚ugi online na naszej stronie internetowej (na przykÅ‚ad, aby zapamiÄ™taÄ‡ dane logowania do konta).","pc_yprivacy_text_3":"MoÅ¼esz zmieniÄ‡ swoje ustawienia i odrzuciÄ‡ niektÃ³re rodzaje plikÃ³w cookie, ktÃ³re majÄ… byÄ‡ przechowywane na twoim komputerze podczas przeglÄ…dania naszej strony. MoÅ¼esz rÃ³wnieÅ¼ usunÄ…Ä‡ wszystkie pliki cookie juÅ¼ zapisane na komputerze, ale pamiÄ™taj, Å¼e usuniÄ™cie plikÃ³w cookie moÅ¼e uniemoÅ¼liwiÄ‡ korzystanie z czÄ™Å›ci naszej strony internetowej.","pc_yprivacy_title":"Twoja prywatnoÅ›Ä‡","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Polityka prywatnoÅ›ci</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"Aktivno","always_active":"Uvek aktivno","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Neaktivno","nb_agree":"SlaÅ¾em se","nb_changep":"Promeni moja podeÅ¡avanja","nb_ok":"OK","nb_reject":"Odbijam","nb_text":"Mi koristimo kolaÄiÄ‡e i ostale tehnologije za praÄ‡enje kako bismo unapredili vaÅ¡u pretragu na naÅ¡em veb sajtu, prikazali personalizovani sadrÅ¾aj i ciljane reklame, analizirali posete na naÅ¡em sajtu i razumeli odakle dolaze naÅ¡i posetioci sajta.","nb_title":"Mi koristimo kolaÄiÄ‡e","pc_fnct_text_1":"Funkcionalni kolaÄiÄ‡i","pc_fnct_text_2":"Ovi kolaÄiÄ‡i koriste se za pruÅ¾anje personalizovanijeg iskustva na naÅ¡em veb sajtu i za pamÄ‡enje izbora koje pravite kada koristite naÅ¡ veb sajt.","pc_fnct_text_3":"Na primer, moÅ¾emo da koristimo funkcionalne kolaÄiÄ‡e da bismo zapamtili vaÅ¡e jeziÄke postavke ili vaÅ¡e podatke za prijavu.","pc_minfo_text_1":"ViÅ¡e informacija","pc_minfo_text_2":"Za bilo koja pitanja vezana za naÅ¡u politiku o kolaÄiÄ‡ma i vaÅ¡im izborima, molimo vas kontaktirajte nas.","pc_minfo_text_3":"Da saznate viÅ¡e, pogledajte naÅ¡u <a href=\'%s\' target=\'_blank\'>Pravila o privatnosti</a>.","pc_save":"SaÄuvaj moja podeÅ¡avanja","pc_sncssr_text_1":"Obavezni kolaÄiÄ‡i","pc_sncssr_text_2":"Ovi kolaÄiÄ‡i su neophodni za pruÅ¾anje usluga dostupnih putem naÅ¡eg veb sajta i za omoguÄ‡avanje koriÅ¡Ä‡enja odreÄ‘enih funkcija naÅ¡eg veb sajta.","pc_sncssr_text_3":"Bez ovih kolaÄiÄ‡a ne moÅ¾emo vam pruÅ¾iti odreÄ‘ene usluge na naÅ¡em veb sajtu.","pc_title":"Centar za podeÅ¡avanje kolaÄiÄ‡a","pc_trck_text_1":"KolaÄiÄ‡i za praÄ‡enje i performanse","pc_trck_text_2":"Ovi kolaÄiÄ‡i koriste se za prikupljanje informacija za analizu saobraÄ‡aja na naÅ¡em veb sajtu i kako posetioci koriste naÅ¡ veb sajt.","pc_trck_text_3":"Na primer, ovi kolaÄiÄ‡i mogu pratiti stvari poput vremena koliko provodite na veb stranici ili stranicama koje poseÄ‡ujete Å¡to nam pomaÅ¾e da shvatimo kako moÅ¾emo da poboljÅ¡amo naÅ¡ veb sajt.","pc_trck_text_4":"Informacije prikupljene ovim kolaÄiÄ‡ima za praÄ‡enje i performanse ne identifikuju nijednog pojedinaÄnog posetioca.","pc_trgt_text_1":"KolaÄiÄ‡i za ciljanje i oglaÅ¡avanje","pc_trgt_text_2":"Ovi kolaÄiÄ‡i koriste se za prikazivanje reklama koje Ä‡e vas verovatno zanimati na osnovu vaÅ¡ih navika pregledanja.","pc_trgt_text_3":"Ovi kolaÄiÄ‡i, opsluÅ¾eni od strane naÅ¡ih dobavljaÄa sadrÅ¾aja i / ili oglaÅ¡avanja, mogu kombinovati informacije koje su sakupili sa naÅ¡eg veb sajta sa drugim informacijama koje su nezavisno prikupili u vezi sa aktivnostima vaÅ¡eg veb pretraÅ¾ivaÄa kroz mreÅ¾u njihovih veb sajtova.","pc_trgt_text_4":"Ako odluÄite da uklonite ili onemoguÄ‡ite ove ciljane ili reklamne kolaÄiÄ‡e i dalje Ä‡ete videti reklame, ali one moÅ¾da neÄ‡e biti relevantne za vas.","pc_yprivacy_text_1":"VaÅ¡a privatnost je vaÅ¾na za nas","pc_yprivacy_text_2":"KolaÄiÄ‡i su veoma mali tekstualni fajlovi koji su saÄuvani na vaÅ¡em raÄunaru kada posetite veb sajt. Mi koristimo kolaÄiÄ‡e za razliÄite svrhe i kako bi unapredili vaÅ¡e onlajn iskustvo na naÅ¡em veb sajtu (na primer, kako bi zapamtili vaÅ¡e pristupne podatke).","pc_yprivacy_text_3":"Vi moÅ¾ete promeniti vaÅ¡a podeÅ¡avanja i odbiti odreÄ‘enu vrstu kolaÄiÄ‡a koji Ä‡e biti saÄuvani na vaÅ¡em raÄunaru dok pregledate naÅ¡ veb sajt. TakoÄ‘e moÅ¾ete izbrisati bilo koje kolaÄiÄ‡e koji su veÄ‡ saÄuvani u vaÅ¡em raÄunaru, ali imajte na umu da brisanjem kolaÄiÄ‡a moÅ¾ete onemoguÄ‡iti pristup nekim delovima naÅ¡eg veb sajta.","pc_yprivacy_title":"VaÅ¡a privatnost","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Pravila o privatnosti</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"Aktiivne","always_active":"Alati aktiivne","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Mitteaktiivne","nb_agree":"NÃµustun","nb_changep":"Muuda minu eelistusi","nb_ok":"OK","nb_reject":"Keeldun","nb_text":"Me kasutame kÃ¼psiseid ja muid jÃ¤lgimistehnoloogiaid, et parandada teie sirvimiskogemust meie veebisaidil, nÃ¤idata teile isikupÃ¤rastatud sisu ja sihitud reklaame, analÃ¼Ã¼sida meie veebisaidi liiklust ning mÃµista, kust meie kÃ¼lastajad tulevad.","nb_title":"Me kasutame kÃ¼psiseid","pc_fnct_text_1":"FunktsionaalsuskÃ¼psised","pc_fnct_text_2":"Neid kÃ¼psiseid kasutatakse selleks, et pakkuda teile isikupÃ¤rastatumat kogemust meie veebisaidil ja jÃ¤tta meelde valikuid, mida teete meie veebisaiti kasutades.","pc_fnct_text_3":"NÃ¤iteks vÃµime kasutada funktsionaalsuskÃ¼psiseid, et meelde jÃ¤tta teie keele-eelistused vÃµi meelde tuletada teie sisselogimisandmed.","pc_minfo_text_1":"Rohkem infot","pc_minfo_text_2":"KÃ¼simuste korral meie kÃ¼psistepoliitika ja teie valikute kohta vÃµtke palun meiega Ã¼hendust.","pc_minfo_text_3":"Lisainfo saamiseks, kÃ¼lastage palun meie <a href=\'%s\' target=\'_blank\'>Privaatsuspoliitikat</a>.","pc_save":"Salvesta minu eelistused","pc_sncssr_text_1":"Ainult hÃ¤davajalikud kÃ¼psised","pc_sncssr_text_2":"Need kÃ¼psised on vajalikud selleks, et pakkuda teile meie veebisaidi kaudu kÃ¤ttesaadavaid teenuseid ja vÃµimaldada teil kasutada meie veebisaidi teatavaid funktsioone.","pc_sncssr_text_3":"Ilma nende kÃ¼psisteta ei saa me pakkuda teatud teenuseid meie veebisaidil.","pc_title":"KÃ¼psiste eelistuste haldus","pc_trck_text_1":"JÃ¤lgimiskÃ¼psised","pc_trck_text_2":"Neid kÃ¼psiseid kasutatakse teabe kogumiseks, et analÃ¼Ã¼sida meie veebisaidi kÃ¼lastatavust ja seda, kuidas kÃ¼lastajad meie veebisaiti kasutavad.","pc_trck_text_3":"NÃ¤iteks vÃµivad need kÃ¼psised jÃ¤lgida seda, kui kaua te veebisaidil viibite vÃµi milliseid lehekÃ¼lgi kÃ¼lastate, mis aitab meil mÃµista, kuidas me saame teie jaoks meie veebisaiti paremaks muuta.","pc_trck_text_4":"Nende jÃ¤lgimis- ja toimivuskÃ¼psiste abil kogutud teave ei tuvasta Ã¼htegi kÃ¼lastajat.","pc_trgt_text_1":"Sihtimis- ja reklaamikÃ¼psised","pc_trgt_text_2":"Neid kÃ¼psiseid kasutatakse reklaamide nÃ¤itamiseks, mis teie sirvimisharjumuste pÃµhjal teile tÃµenÃ¤oliselt rohkem huvi pakuvad.","pc_trgt_text_3":"Need kÃ¼psised, mida meie sisu ja/vÃµi reklaami pakkujad pakuvad, vÃµivad kombineerida meie veebisaidilt kogutud teavet muu teabega, mida nad on iseseisvalt kogunud seoses teie veebibrauseri tegevustega nende veebisaitide vÃµrgustikus.","pc_trgt_text_4":"Kui otsustate eemaldada vÃµi keelata need sihtimis- vÃµi reklaamikÃ¼psised, nÃ¤ete ikka reklaame, kuid need ei pruugi teile asjakohased olla.","pc_yprivacy_text_1":"Teie privaatsus on meile tÃ¤htis","pc_yprivacy_text_2":"KÃ¼psised on vÃ¤ga vÃ¤ikesed tekstifailid, mis salvestatakse teie arvutisse, kui kÃ¼lastate veebisaiti. Me kasutame kÃ¼psiseid mitmesugustel eesmÃ¤rkidel ja et parandada teie veebikogemust meie veebisaidil (nÃ¤iteks, et meelde jÃ¤tta teie konto sisselogimisandmed).","pc_yprivacy_text_3":"Te saate muuta oma eelistusi ja keelduda teatud tÃ¼Ã¼pi kÃ¼psiste salvestamisest teie arvutisse meie veebisaiti sirvides. Samuti vÃµite eemaldada kÃµik kÃ¼psised, mis on juba teie arvutisse salvestatud, kuid pidage meeles, et kÃ¼psiste kustutamine vÃµib takistada teid kasutamast meie veebisaidi teatud osi.","pc_yprivacy_title":"Teie privaatsus","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Privaatsuspoliitika</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"Ä®jungta","always_active":"Visada Ä¯jungta","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"IÅ¡jungta","nb_agree":"Sutinku","nb_changep":"Keisti mano pasirinkimus","nb_ok":"Gerai","nb_reject":"AÅ¡ atsisakau","nb_text":"Mes naudojame slapukus ir kitas stebÄ—jimo technologijas, siekdami pagerinti jÅ«sÅ³ narÅ¡ymo mÅ«sÅ³ svetainÄ—je patirtÄ¯, parodyti jums pritaikytÄ… turinÄ¯ ir tikslinius skelbimus, iÅ¡analizuoti mÅ«sÅ³ svetainÄ—s srautÄ… ir suprasti, iÅ¡ kur ateina mÅ«sÅ³ lankytojai.","nb_title":"Mes naudojame slapukus","pc_fnct_text_1":"Funkcionalumo slapukai","pc_fnct_text_2":"Å ie slapukai naudojami siekiant suteikti jums asmeniÅ¡kesnÄ™ patirtÄ¯ mÅ«sÅ³ svetainÄ—je ir prisiminti pasirinkimus, kuriuos atlikote, kai naudojatÄ—s mÅ«sÅ³ svetaine.","pc_fnct_text_3":"Pvz., Mes galime naudoti funkcinius slapukus, kad prisimintume jÅ«sÅ³ kalbos nustatymus arba prisimintume jÅ«sÅ³ prisijungimo duomenis.","pc_minfo_text_1":"Daugiau informacijos","pc_minfo_text_2":"DÄ—l bet kokiÅ³ klausimÅ³, susijusiÅ³ su mÅ«sÅ³ slapukÅ³ politika ir jÅ«sÅ³ pasirinkimais, susisiekite su mumis.","pc_minfo_text_3":"NorÄ—dami suÅ¾inoti daugiau, susipaÅ¾inkite su mÅ«sÅ³ <a href=\'%s\' target=\'_blank\'>Privatumo politika</a>.","pc_save":"IÅ¡saugoti mano pasirinkimus","pc_sncssr_text_1":"Privalomi slapukai","pc_sncssr_text_2":"Å ie slapukai yra bÅ«tini norint suteikti jums paslaugas, pasiekiamas mÅ«sÅ³ svetainÄ—je, ir leisti naudotis tam tikromis mÅ«sÅ³ svetainÄ—s funkcijomis.","pc_sncssr_text_3":"Be Å¡iÅ³ slapukÅ³ mes negalime jums suteikti tam tikrÅ³ paslaugÅ³ mÅ«sÅ³ svetainÄ—je.","pc_title":"SlapukÅ³ Pasirinkimo Centras","pc_trck_text_1":"StebÄ—jimo ir naÅ¡umo slapukai","pc_trck_text_2":"Å ie slapukai naudojami rinkti informacijÄ…, siekiant analizuoti srautÄ… Ä¯ mÅ«sÅ³ svetainÄ™ ir tai, kaip lankytojai naudojasi mÅ«sÅ³ svetaine.","pc_trck_text_3":"PavyzdÅ¾iui, Å¡ie slapukai gali sekti kiek laiko praleidÅ¾iate svetainÄ—je ar lankomuose puslapiuose, o tai padeda mums suprasti, kaip galime patobulinti savo svetainÄ™.","pc_trck_text_4":"Informacija, surinkta naudojant Å¡iuos stebÄ—jimo ir naÅ¡umo slapukus, neatpaÅ¾Ä¯sta konkretaus lankytojo.","pc_trgt_text_1":"Tiksliniai ir reklaminiai slapukai","pc_trgt_text_2":"Å ie slapukai naudojami rodyti reklamÄ…, kuri greiÄiausiai jus domina, atsiÅ¾velgiant Ä¯ jÅ«sÅ³ narÅ¡ymo Ä¯proÄius.","pc_trgt_text_3":"Å ie slapukai, kuriuos teikia mÅ«sÅ³ turinio ir (arba) reklamos teikÄ—jai, gali apjungti informacijÄ…, kuriÄ… jie surinko iÅ¡ mÅ«sÅ³ svetainÄ—s, su kita informacija, kuriÄ… jie rinko nepriklausomai, apie jÅ«sÅ³ interneto narÅ¡yklÄ—s veiklÄ… jÅ³ svetainiÅ³ tinkle.","pc_trgt_text_4":"Jei nusprÄ™site paÅ¡alinti arba iÅ¡jungti Å¡iuos tikslinius ar reklamavimo slapukus, vis tiek pamatysite skelbimus, taÄiau jie gali bÅ«ti jums neaktualÅ«s.","pc_yprivacy_text_1":"Mums rÅ«pi jÅ«sÅ³ privatumas","pc_yprivacy_text_2":"Slapukai yra labai maÅ¾i tekstiniai failai, kurie saugomi jÅ«sÅ³ kompiuteryje, kai apsilankote svetainÄ—je. Mes naudojame slapukus Ä¯vairiais tikslais ir siekdami pagerinti jÅ«sÅ³ internetinÄ™ patirtÄ¯ mÅ«sÅ³ svetainÄ—je (pavyzdÅ¾iui, jei norite, kad bÅ«tu Ä¯simenami jÅ«sÅ³ prisijungimo duomenys).","pc_yprivacy_text_3":"NarÅ¡ydami mÅ«sÅ³ svetainÄ—je galite pakeisti savo nustatymus ir atsisakyti tam tikrÅ³ tipÅ³ slapukÅ³, kurie bus saugomi jÅ«sÅ³ kompiuteryje. Taip pat galite paÅ¡alinti visus slapukus, jau saugomus jÅ«sÅ³ kompiuteryje, taÄiau nepamirÅ¡kite, kad iÅ¡trynÄ™ slapukus galite nepilnai naudotis mÅ«sÅ³ svetaine.","pc_yprivacy_title":"JÅ«sÅ³ privatumas","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Privatumo politika</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"AktÄ«vs","always_active":"VienmÄ“r aktÄ«vs","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"NeaktÄ«vs","nb_agree":"Es piekrÄ«tu","nb_changep":"MainÄ«t manas preferences","nb_ok":"OK","nb_reject":"Es noraidu","nb_text":"MÄ“s izmantojam sÄ«kdatnes un citas izsekoÅ¡anas tehnoloÄ£ijas, lai uzlabotu JÅ«su pÄrlÅ«koÅ¡anas pieredzi mÅ«su vietnÄ“, parÄdÄ«tu Jums personalizÄ“tu saturu un mÄ“rÄ·Ä“tas reklÄmas, analizÄ“tu mÅ«su vietnes datplÅ«smu un saprastu, no kurienes nÄk mÅ«su apmeklÄ“tÄji.","nb_title":"MÄ“s izmantojam sÄ«kdatnes","pc_fnct_text_1":"FunkcionalitÄtes sÄ«kdatnes","pc_fnct_text_2":"Å Ä«s sÄ«kdatnes tiek izmantotas, lai JÅ«s nodroÅ¡inÄtu ar personalizÄ“tu pieredzi mÅ«su mÄjaslapÄ un lai atcerÄ“tos izvÄ“les, kuras veicat izmantojot mÅ«su mÄjaslapu.","pc_fnct_text_3":"PiemÄ“ram, mÄ“s varam izmantot funkcionalitÄtes sÄ«kdatnes, lai atcerÄ“tos JÅ«su valodas preferences vai konta pieteikÅ¡anÄs datus.","pc_minfo_text_1":"VairÄk informÄcijas","pc_minfo_text_2":"Par jautÄjumiem saistÄ«tiem ar mÅ«su sÄ«kdatÅ†u politiku un JÅ«su izvÄ“lÄ“m, lÅ«dzu, sazinieties ar mums.","pc_minfo_text_3":"Lai uzzinÄtu vairÄk, lÅ«dzu apmeklÄ“jiet mÅ«su <a href=\'%s\' target=\'_blank\'>Privacy Policy</a>.","pc_save":"SaglabÄt manas preferences","pc_sncssr_text_1":"Strikti nepiecieÅ¡amÄs sÄ«kdatnes","pc_sncssr_text_2":"Å Ä«s sÄ«kdatnes ir nepiecieÅ¡amas, lai nodroÅ¡inÄtu Jums pakalpojumus, kas pieejami caur mÅ«su mÄjaslapu un Ä¼autu Jums izmantot noteiktas mÅ«su vietnes funkcijas.","pc_sncssr_text_3":"Bez Å¡Ä«m sÄ«kdatnÄ“m, mÄ“s nevaram Jums nodroÅ¡inÄt noteiktus pakalpojumus mÅ«su mÄjaslapÄ.","pc_title":"SÄ«kdatÅ†u PreferenÄu Centrs","pc_trck_text_1":"IzsekoÅ¡anas sÄ«kdatnes","pc_trck_text_2":"Å Ä«s sÄ«kdatnes tiek izmantotas informÄcijas apkopoÅ¡anai, lai analizÄ“tu mÅ«su mÄjaslapas datplÅ«smu, un kÄ apmeklÄ“tÄji izmanto mÅ«su mÄjaslapu.","pc_trck_text_3":"PiemÄ“ram, Å¡Ä«s sÄ«kdatnes var izsekot cik daudz laika JÅ«s pavadÄt mÄjaslapÄ vai JÅ«su apmeklÄ“tÄs lapas, kas mums palÄ«dz saprast, kÄ mÄ“s Jums varam uzlabot mÅ«su mÄjaslapu.","pc_trck_text_4":"InformÄcija, kas savÄkta, izmantojot Å¡Ä«s izsekoÅ¡anas un veiktspÄ“jas sÄ«kdatnes, neidentificÄ“ nevienu atseviÅ¡Ä·u apmeklÄ“tÄju.","pc_trgt_text_1":"MÄ“rÄ·auditorijas atlases un reklÄmas sÄ«kdatnes","pc_trgt_text_2":"Å Ä«s sÄ«kdatnes tiek izmantotas, lai rÄdÄ«tu reklÄmas, kas iespÄ“jams, JÅ«s interesÄ“s, pamatojoties uz JÅ«su pÄrlÅ«koÅ¡anas paradumiem.","pc_trgt_text_3":"Å Ä«s sÄ«kdatnes, ko apkalpo mÅ«su satura un/vai reklÄmas nodroÅ¡inÄtÄji, var apvienot informÄciju , kas savÄkta no mÅ«su mÄjaslapas ar citu viÅ†u rÄ«cÄ«bÄ esoÅ¡o informÄciju, ko viÅ†i ir neatkarÄ«gi apkopojuÅ¡i, kas saistÄ«ta ar JÅ«su tÄ«mekÄ¼a pÄrlÅ«kprogrammas darbÄ«bu viÅ†u vietÅ†u tÄ«klÄ.","pc_trgt_text_4":"Ja JÅ«s izvÄ“laties noÅ†emt vai atspÄ“jot Å¡Ä«s mÄ“rÄ·auditorijas atlases vai reklÄmas sÄ«kdatnes, JÅ«s joprojÄm redzÄ“siet reklÄmas, bet tÄs var nebÅ«t Jums aktuÄlas.","pc_yprivacy_text_1":"Mums ir svarÄ«gs JÅ«su privÄtums","pc_yprivacy_text_2":"SÄ«kdatnes ir Ä¼oti mazi teksta faili, kas tiek saglabÄti JÅ«su datorÄ, kad apmeklÄ“jat mÄjaslapu. MÄ“s izmantojam sÄ«kdatnes daÅ¾Ädiem mÄ“rÄ·iem, un lai uzlabotu JÅ«su tieÅ¡saistes pieredzi mÅ«su mÄjaslapÄ (piemÄ“ram, lai atcerÄ“tos JÅ«su konta pieteikÅ¡anÄs datus).","pc_yprivacy_text_3":"JÅ«s varat mainÄ«t savas preferences un noraidÄ«t noteiktus sÄ«kfailu veidus, kas saglabÄtos JÅ«su datorÄ, pÄrlÅ«kojot mÅ«su mÄjaslapu. JÅ«s varat arÄ« noÅ†emt sÄ«kfailus, kas jau ir saglabÄti JÅ«su datorÄ, taÄu paturiet prÄtÄ, ka sÄ«kdatÅ†u dzÄ“Å¡ana var liegt Jums izmantot atseviÅ¡Ä·as daÄ¼as no mÅ«su mÄjaslapas.","pc_yprivacy_title":"JÅ«su privÄtums","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Privacy Policy</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"ÐÐºÑ‚Ð¸Ð²Ð½Ð¾","always_active":"Ð’ÑÐµÐ³Ð´Ð° Ð°ÐºÑ‚Ð¸Ð²Ð½Ð¾","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"ÐÐµÐ°ÐºÑ‚Ð¸Ð²Ð½Ð¾","nb_agree":"Ð¯ ÑÐ¾Ð³Ð»Ð°ÑÐµÐ½","nb_changep":"Ð˜Ð·Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ Ð¼Ð¾Ð¸ Ð¿Ñ€ÐµÐ´Ð¿Ð¾Ñ‡Ñ‚ÐµÐ½Ð¸Ñ","nb_ok":"ÐžÐº","nb_reject":"Ð¯ Ð¾Ñ‚ÐºÐ°Ð·Ñ‹Ð²Ð°ÑŽÑÑŒ","nb_text":"ÐœÑ‹ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÐ¼ Ñ„Ð°Ð¹Ð»Ñ‹ ÐºÑƒÐºÐ¸ Ð¸ Ð´Ñ€ÑƒÐ³Ð¸Ðµ Ñ‚ÐµÑ…Ð½Ð¾Ð»Ð¾Ð³Ð¸Ð¸ Ð¾Ñ‚ÑÐ»ÐµÐ¶Ð¸Ð²Ð°Ð½Ð¸Ñ Ð´Ð»Ñ ÑƒÐ»ÑƒÑ‡ÑˆÐµÐ½Ð¸Ñ Ð²Ð°ÑˆÐµÐ³Ð¾ Ð¿Ñ€Ð¾ÑÐ¼Ð¾Ñ‚Ñ€Ð° Ð½Ð° Ð½Ð°ÑˆÐµÐ¼ Ð²ÐµÐ±-ÑÐ°Ð¹Ñ‚Ðµ, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð¿Ð¾ÐºÐ°Ð·Ñ‹Ð²Ð°Ñ‚ÑŒ Ð²Ð°Ð¼ Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»Ð¸Ð·Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð½Ñ‹Ð¹ ÐºÐ¾Ð½Ñ‚ÐµÐ½Ñ‚ Ð¸ Ñ‚Ð°Ñ€Ð³ÐµÑ‚Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð½ÑƒÑŽ Ñ€ÐµÐºÐ»Ð°Ð¼Ñƒ, Ð°Ð½Ð°Ð»Ð¸Ð·Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ñ‚Ñ€Ð°Ñ„Ð¸Ðº Ð½Ð°ÑˆÐµÐ³Ð¾ Ð²ÐµÐ±-ÑÐ°Ð¹Ñ‚Ð° Ð¸ Ð¿Ð¾Ð½Ð¸Ð¼Ð°Ñ‚ÑŒ, Ð¾Ñ‚ÐºÑƒÐ´Ð° Ð¿Ñ€Ð¸Ñ…Ð¾Ð´ÑÑ‚ Ð½Ð°ÑˆÐ¸ Ð¿Ð¾ÑÐµÑ‚Ð¸Ñ‚ÐµÐ»Ð¸.","nb_title":"ÐœÑ‹ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÐ¼ ÐºÑƒÐºÐ¸","pc_fnct_text_1":"Ð¤ÑƒÐ½ÐºÑ†Ð¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ðµ ÐºÑƒÐºÐ¸","pc_fnct_text_2":"Ð¤Ð°Ð¹Ð»Ñ‹ ÐºÑƒÐºÐ¸ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÑŽÑ‚ÑÑ, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²Ð¸Ñ‚ÑŒ Ð²Ð°Ð¼ Ð±Ð¾Ð»ÐµÐµ Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»Ð¸Ð·Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð½Ñ‹Ð¹ Ð¾Ð¿Ñ‹Ñ‚ Ð½Ð° Ð½Ð°ÑˆÐµÐ¼ Ð²ÐµÐ±-ÑÐ°Ð¹Ñ‚Ðµ Ð¸ Ð·Ð°Ð¿Ð¾Ð¼Ð½Ð¸Ñ‚ÑŒ Ð²Ñ‹Ð±Ð¾Ñ€, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ð¹ Ð²Ñ‹ Ð´ÐµÐ»Ð°ÐµÑ‚Ðµ Ð¿Ñ€Ð¸ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ð¸ Ð½Ð°ÑˆÐµÐ³Ð¾ Ð²ÐµÐ±-ÑÐ°Ð¹Ñ‚Ð°.","pc_fnct_text_3":"ÐÐ°Ð¿Ñ€Ð¸Ð¼ÐµÑ€, Ð¼Ñ‹ Ð¼Ð¾Ð¶ÐµÐ¼ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ðµ Ñ„Ð°Ð¹Ð»Ñ‹ ÐºÑƒÐºÐ¸, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð·Ð°Ð¿Ð¾Ð¼Ð½Ð¸Ñ‚ÑŒ Ð²Ð°ÑˆÐ¸ ÑÐ·Ñ‹ÐºÐ¾Ð²Ñ‹Ðµ Ð¿Ñ€ÐµÐ´Ð¿Ð¾Ñ‡Ñ‚ÐµÐ½Ð¸Ñ Ð¸Ð»Ð¸ Ð´Ð°Ð½Ð½Ñ‹Ðµ Ð´Ð»Ñ Ð²Ñ…Ð¾Ð´Ð°.","pc_minfo_text_1":"Ð‘Ð¾Ð»ÑŒÑˆÐµ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ð¸.","pc_minfo_text_2":"ÐŸÐ¾ Ð»ÑŽÐ±Ñ‹Ð¼ Ð²Ð¾Ð¿Ñ€Ð¾ÑÐ°Ð¼, ÐºÐ°ÑÐ°ÑŽÑ‰Ð¸Ð¼ÑÑ Ð½Ð°ÑˆÐµÐ¹ Ð¿Ð¾Ð»Ð¸Ñ‚Ð¸ÐºÐ¸ Ð² Ð¾Ñ‚Ð½Ð¾ÑˆÐµÐ½Ð¸Ð¸ Ñ„Ð°Ð¹Ð»Ð¾Ð² ÐºÑƒÐºÐ¸ Ð¸ Ð²Ð°ÑˆÐµÐ³Ð¾ Ð²Ñ‹Ð±Ð¾Ñ€Ð°, ÑÐ²ÑÐ¶Ð¸Ñ‚ÐµÑÑŒ Ñ Ð½Ð°Ð¼Ð¸.","pc_minfo_text_3":"Ð§Ñ‚Ð¾Ð±Ñ‹ ÑƒÐ·Ð½Ð°Ñ‚ÑŒ Ð±Ð¾Ð»ÑŒÑˆÐµ, Ð¿Ð¾ÑÐµÑ‚Ð¸Ñ‚Ðµ Ð½Ð°Ñˆ ÑÐ°Ð¹Ñ‚ <a href=\'%s\' target=\'_blank\'>Privacy Policy</a>.","pc_save":"Ð¡Ð¾Ñ…Ñ€Ð°Ð½Ð¸Ñ‚ÑŒ Ð¼Ð¾Ð¸ Ð¿Ñ€ÐµÐ´Ð¿Ð¾Ñ‡Ñ‚ÐµÐ½Ð¸Ñ","pc_sncssr_text_1":"ÐÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ñ‹Ðµ ÐºÑƒÐºÐ¸","pc_sncssr_text_2":"Ð¤Ð°Ð¹Ð»Ñ‹ ÐºÑƒÐºÐ¸ Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ñ‹ Ð´Ð»Ñ Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²Ð»ÐµÐ½Ð¸Ñ Ð²Ð°Ð¼ ÑƒÑÐ»ÑƒÐ³, Ð´Ð¾ÑÑ‚ÑƒÐ¿Ð½Ñ‹Ñ… Ñ‡ÐµÑ€ÐµÐ· Ð½Ð°Ñˆ Ð²ÐµÐ±-ÑÐ°Ð¹Ñ‚, Ð¸ Ð´Ð»Ñ Ñ‚Ð¾Ð³Ð¾, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð²Ñ‹ Ð¼Ð¾Ð³Ð»Ð¸ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒ Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÐµÐ½Ð½Ñ‹Ðµ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¸ Ð½Ð°ÑˆÐµÐ³Ð¾ Ð²ÐµÐ±-ÑÐ°Ð¹Ñ‚Ð°.","pc_sncssr_text_3":"Ð‘ÐµÐ· ÑÑ‚Ð¸Ñ… Ñ„Ð°Ð¹Ð»Ð¾Ð² ÐºÑƒÐºÐ¸ Ð¼Ñ‹ Ð½Ðµ Ð¼Ð¾Ð¶ÐµÐ¼ Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²Ð»ÑÑ‚ÑŒ Ð²Ð°Ð¼ Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÐµÐ½Ð½Ñ‹Ðµ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¸ Ð½Ð° Ð½Ð°ÑˆÐµÐ¼ Ð²ÐµÐ±-ÑÐ°Ð¹Ñ‚Ðµ.","pc_title":"Ð¦ÐµÐ½Ñ‚Ñ€ Ð½Ð°ÑÑ‚Ñ€Ð¾ÐµÐº Ñ„Ð°Ð¹Ð»Ð¾Ð² ÐºÑƒÐºÐ¸","pc_trck_text_1":"ÐžÑ‚ÑÐ»ÐµÐ¶Ð¸Ð²Ð°Ð½Ð¸Ðµ ÐºÑƒÐºÐ¸","pc_trck_text_2":"Ð¤Ð°Ð¹Ð»Ñ‹ ÐºÑƒÐºÐ¸ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÑŽÑ‚ÑÑ Ð´Ð»Ñ ÑÐ±Ð¾Ñ€Ð° Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ð¸ Ð´Ð»Ñ Ð°Ð½Ð°Ð»Ð¸Ð·Ð° Ñ‚Ñ€Ð°Ñ„Ð¸ÐºÐ° Ð½Ð° Ð½Ð°Ñˆ Ð²ÐµÐ±-ÑÐ°Ð¹Ñ‚ Ð¸ Ñ‚Ð¾Ð³Ð¾, ÐºÐ°Ðº Ð¿Ð¾ÑÐµÑ‚Ð¸Ñ‚ÐµÐ»Ð¸ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÑŽÑ‚ Ð½Ð°Ñˆ Ð²ÐµÐ±-ÑÐ°Ð¹Ñ‚.","pc_trck_text_3":"ÐÐ°Ð¿Ñ€Ð¸Ð¼ÐµÑ€, ÑÑ‚Ð¸ Ñ„Ð°Ð¹Ð»Ñ‹ ÐºÑƒÐºÐ¸ Ð¼Ð¾Ð³ÑƒÑ‚ Ð¾Ñ‚ÑÐ»ÐµÐ¶Ð¸Ð²Ð°Ñ‚ÑŒ Ñ‚Ð°ÐºÐ¸Ðµ Ð²ÐµÑ‰Ð¸, ÐºÐ°Ðº Ð²Ñ€ÐµÐ¼Ñ, ÐºÐ¾Ñ‚Ð¾Ñ€Ð¾Ðµ Ð²Ñ‹ Ð¿Ñ€Ð¾Ð²Ð¾Ð´Ð¸Ñ‚Ðµ Ð½Ð° Ð²ÐµÐ±-ÑÐ°Ð¹Ñ‚Ðµ Ð¸Ð»Ð¸ Ð¿Ð¾ÑÐµÑ‰Ð°ÐµÐ¼Ñ‹Ðµ Ð²Ð°Ð¼Ð¸ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñ‹, Ñ‡Ñ‚Ð¾ Ð¿Ð¾Ð¼Ð¾Ð³Ð°ÐµÑ‚ Ð½Ð°Ð¼ Ð¿Ð¾Ð½ÑÑ‚ÑŒ, ÐºÐ°Ðº Ð¼Ñ‹ Ð¼Ð¾Ð¶ÐµÐ¼ ÑƒÐ»ÑƒÑ‡ÑˆÐ¸Ñ‚ÑŒ Ð½Ð°Ñˆ Ð²ÐµÐ±-ÑÐ°Ð¹Ñ‚ Ð´Ð»Ñ Ð²Ð°Ñ.","pc_trck_text_4":"Ð˜Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ñ, ÑÐ¾Ð±Ñ€Ð°Ð½Ð½Ð°Ñ Ñ Ð¿Ð¾Ð¼Ð¾Ñ‰ÑŒÑŽ Ñ„Ð°Ð¹Ð»Ð¾Ð² ÐºÑƒÐºÐ¸ Ð´Ð»Ñ Ð¾Ñ‚ÑÐ»ÐµÐ¶Ð¸Ð²Ð°Ð½Ð¸Ñ Ð¸ Ð¿Ñ€Ð¾Ð¸Ð·Ð²Ð¾Ð´Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾ÑÑ‚Ð¸, Ð½Ðµ Ð¸Ð´ÐµÐ½Ñ‚Ð¸Ñ„Ð¸Ñ†Ð¸Ñ€ÑƒÐµÑ‚ Ð¾Ñ‚Ð´ÐµÐ»ÑŒÐ½Ð¾Ð³Ð¾ Ð¿Ð¾ÑÐµÑ‚Ð¸Ñ‚ÐµÐ»Ñ.","pc_trgt_text_1":"Ð¦ÐµÐ»ÐµÐ²Ñ‹Ðµ Ð¸ Ñ€ÐµÐºÐ»Ð°Ð¼Ð½Ñ‹Ðµ Ñ„Ð°Ð¹Ð»Ñ‹ ÐºÑƒÐºÐ¸","pc_trgt_text_2":"Ð­Ñ‚Ð¸ Ñ„Ð°Ð¹Ð»Ñ‹ ÐºÑƒÐºÐ¸ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÑŽÑ‚ÑÑ Ð´Ð»Ñ Ð¿Ð¾ÐºÐ°Ð·Ð° Ñ€ÐµÐºÐ»Ð°Ð¼Ñ‹, ÐºÐ¾Ñ‚Ð¾Ñ€Ð°Ñ Ð¼Ð¾Ð¶ÐµÑ‚ Ð±Ñ‹Ñ‚ÑŒ Ð²Ð°Ð¼ Ð¸Ð½Ñ‚ÐµÑ€ÐµÑÐ½Ð° Ð² Ð·Ð°Ð²Ð¸ÑÐ¸Ð¼Ð¾ÑÑ‚Ð¸ Ð¾Ñ‚ Ð²Ð°ÑˆÐ¸Ñ… Ð¿Ñ€Ð¸Ð²Ñ‹Ñ‡ÐµÐº Ð¿Ñ€Ð¾ÑÐ¼Ð¾Ñ‚Ñ€Ð°.","pc_trgt_text_3":"Ð­Ñ‚Ð¸ Ñ„Ð°Ð¹Ð»Ñ‹ ÐºÑƒÐºÐ¸, Ð¾Ð±ÑÐ»ÑƒÐ¶Ð¸Ð²Ð°ÐµÐ¼Ñ‹Ðµ Ð½Ð°ÑˆÐ¸Ð¼Ð¸ Ð¿Ð¾ÑÑ‚Ð°Ð²Ñ‰Ð¸ÐºÐ°Ð¼Ð¸ ÐºÐ¾Ð½Ñ‚ÐµÐ½Ñ‚Ð° Ð¸ / Ð¸Ð»Ð¸ Ñ€ÐµÐºÐ»Ð°Ð¼Ñ‹, Ð¼Ð¾Ð³ÑƒÑ‚ Ð¾Ð±ÑŠÐµÐ´Ð¸Ð½ÑÑ‚ÑŒ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸ÑŽ, ÑÐ¾Ð±Ñ€Ð°Ð½Ð½ÑƒÑŽ Ð¸Ð¼Ð¸ Ñ Ð½Ð°ÑˆÐµÐ³Ð¾ Ð²ÐµÐ±-ÑÐ°Ð¹Ñ‚Ð°, Ñ Ð´Ñ€ÑƒÐ³Ð¾Ð¹ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸ÐµÐ¹, ÐºÐ¾Ñ‚Ð¾Ñ€ÑƒÑŽ Ð¾Ð½Ð¸ Ð½ÐµÐ·Ð°Ð²Ð¸ÑÐ¸Ð¼Ð¾ ÑÐ¾Ð±Ð¸Ñ€Ð°Ð»Ð¸ Ð¾Ñ‚Ð½Ð¾ÑÐ¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾ Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ð¹ Ð²Ð°ÑˆÐµÐ³Ð¾ Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€Ð° Ð² Ð¸Ñ… ÑÐµÑ‚Ð¸ Ð²ÐµÐ±-ÑÐ°Ð¹Ñ‚Ð¾Ð².","pc_trgt_text_4":"Ð•ÑÐ»Ð¸ Ð²Ñ‹ Ñ€ÐµÑˆÐ¸Ñ‚Ðµ ÑƒÐ´Ð°Ð»Ð¸Ñ‚ÑŒ Ð¸Ð»Ð¸ Ð¾Ñ‚ÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÑŒ ÑÑ‚Ð¸ Ñ†ÐµÐ»ÐµÐ²Ñ‹Ðµ Ð¸Ð»Ð¸ Ñ€ÐµÐºÐ»Ð°Ð¼Ð½Ñ‹Ðµ Ñ„Ð°Ð¹Ð»Ñ‹ ÐºÑƒÐºÐ¸, Ð²Ñ‹ Ð²ÑÐµ Ñ€Ð°Ð²Ð½Ð¾ Ð±ÑƒÐ´ÐµÑ‚Ðµ Ð²Ð¸Ð´ÐµÑ‚ÑŒ Ñ€ÐµÐºÐ»Ð°Ð¼Ñƒ, Ð½Ð¾ Ð¾Ð½Ð° Ð¼Ð¾Ð¶ÐµÑ‚ Ð½Ðµ Ð¸Ð¼ÐµÑ‚ÑŒ Ð¾Ñ‚Ð½Ð¾ÑˆÐµÐ½Ð¸Ñ Ðº Ð²Ð°Ð¼.","pc_yprivacy_text_1":"Ð’Ð°ÑˆÐ° ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚ÑŒ Ð²Ð°Ð¶Ð½Ð° Ð´Ð»Ñ Ð½Ð°Ñ","pc_yprivacy_text_2":"ÐšÑƒÐºÐ¸ - ÑÑ‚Ð¾ Ð½ÐµÐ±Ð¾Ð»ÑŒÑˆÐ¸Ðµ Ñ‚ÐµÐºÑÑ‚Ð¾Ð²Ñ‹Ðµ Ñ„Ð°Ð¹Ð»Ñ‹, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ðµ ÑÐ¾Ñ…Ñ€Ð°Ð½ÑÑŽÑ‚ÑÑ Ð½Ð° Ð²Ð°ÑˆÐµÐ¼ ÐºÐ¾Ð¼Ð¿ÑŒÑŽÑ‚ÐµÑ€Ðµ, ÐºÐ¾Ð³Ð´Ð° Ð’Ñ‹ Ð¿Ð¾ÑÐµÑ‰Ð°ÐµÑ‚Ðµ Ð²ÐµÐ±-ÑÐ°Ð¹Ñ‚. ÐœÑ‹ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÐ¼ ÐºÑƒÐºÐ¸ Ð´Ð»Ñ Ñ€Ð°Ð·Ð»Ð¸Ñ‡Ð½Ñ‹Ñ… Ñ†ÐµÐ»ÐµÐ¹, Ð² Ñ‚Ð¾Ð¼ Ñ‡Ð¸ÑÐ»Ðµ Ð´Ð»Ñ Ñ‚Ð¾Ð³Ð¾, Ñ‡Ñ‚Ð¾Ð±Ñ‹ ÑƒÐ»ÑƒÑ‡ÑˆÐ¸Ñ‚ÑŒ Ð²Ð°ÑˆÐµ Ð¿Ñ€ÐµÐ±Ñ‹Ð²Ð°Ð½Ð¸Ðµ Ð½Ð° Ð½Ð°ÑˆÐµÐ¼ Ð²ÐµÐ±-ÑÐ°Ð¹Ñ‚Ðµ (Ð½Ð°Ð¿Ñ€Ð¸Ð¼ÐµÑ€, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð·Ð°Ð¿Ð¾Ð¼Ð½Ð¸Ñ‚ÑŒ Ð´Ð°Ð½Ð½Ñ‹Ðµ Ð´Ð»Ñ Ð²Ñ…Ð¾Ð´Ð° Ð² Ð²Ð°ÑˆÑƒ ÑƒÑ‡ÐµÑ‚Ð½ÑƒÑŽ Ð·Ð°Ð¿Ð¸ÑÑŒ).","pc_yprivacy_text_3":"Ð’Ñ‹ Ð¼Ð¾Ð¶ÐµÑ‚Ðµ Ð¸Ð·Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ ÑÐ²Ð¾Ð¸ Ð¿Ñ€ÐµÐ´Ð¿Ð¾Ñ‡Ñ‚ÐµÐ½Ð¸Ñ Ð¸ Ð¾Ñ‚ÐºÐ°Ð·Ð°Ñ‚ÑŒÑÑ Ð¾Ñ‚ ÑÐ¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¸Ñ Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÐµÐ½Ð½Ñ‹Ñ… Ñ‚Ð¸Ð¿Ð¾Ð² Ñ„Ð°Ð¹Ð»Ð¾Ð² cookie Ð½Ð° Ð²Ð°ÑˆÐµÐ¼ ÐºÐ¾Ð¼Ð¿ÑŒÑŽÑ‚ÐµÑ€Ðµ Ð²Ð¾ Ð²Ñ€ÐµÐ¼Ñ Ð¿Ñ€Ð¾ÑÐ¼Ð¾Ñ‚Ñ€Ð° Ð½Ð°ÑˆÐµÐ³Ð¾ Ð²ÐµÐ±-ÑÐ°Ð¹Ñ‚Ð°. Ð’Ñ‹ Ñ‚Ð°ÐºÐ¶Ðµ Ð¼Ð¾Ð¶ÐµÑ‚Ðµ ÑƒÐ´Ð°Ð»Ð¸Ñ‚ÑŒ Ð»ÑŽÐ±Ñ‹Ðµ Ñ„Ð°Ð¹Ð»Ñ‹ ÐºÑƒÐºÐ¸, ÑƒÐ¶Ðµ Ñ…Ñ€Ð°Ð½ÑÑ‰Ð¸ÐµÑÑ Ð½Ð° Ð²Ð°ÑˆÐµÐ¼ ÐºÐ¾Ð¼Ð¿ÑŒÑŽÑ‚ÐµÑ€Ðµ, Ð½Ð¾ Ð¸Ð¼ÐµÐ¹Ñ‚Ðµ Ð² Ð²Ð¸Ð´Ñƒ, Ñ‡Ñ‚Ð¾ ÑƒÐ´Ð°Ð»ÐµÐ½Ð¸Ðµ Ñ„Ð°Ð¹Ð»Ð¾Ð² cookie Ð¼Ð¾Ð¶ÐµÑ‚ Ð¿Ð¾Ð¼ÐµÑˆÐ°Ñ‚ÑŒ Ð²Ð°Ð¼ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒ Ð½ÐµÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ðµ Ñ‡Ð°ÑÑ‚Ð¸ Ð½Ð°ÑˆÐµÐ³Ð¾ Ð²ÐµÐ±-ÑÐ°Ð¹Ñ‚Ð°.","pc_yprivacy_title":"Ð’Ð°ÑˆÐ° ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚ÑŒ","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Privacy Policy</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"Aktiv","always_active":"Alltid aktiv","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Inaktiv","nb_agree":"Godta alle","nb_changep":"Endre innstillinger","nb_ok":"OK","nb_reject":"Avvis alle","nb_text":"Vi bruker informasjonskapsler og andre sporingsteknologier for Ã¥ forbedre din nettleseropplevelse pÃ¥ nettstedet vÃ¥rt, for Ã¥ vise deg personlig tilpasset innhold og mÃ¥lrettede annonser, for Ã¥ analysere nettstedstrafikken vÃ¥r og for Ã¥ forstÃ¥ hvor vÃ¥re besÃ¸kende kommer fra.","nb_title":"Vi bruker informasjonskapsler","pc_fnct_text_1":"Funksjonalitetscookies","pc_fnct_text_2":"Disse informasjonskapslene brukes til Ã¥ gi deg en mer personlig opplevelse pÃ¥ nettstedet vÃ¥rt og til Ã¥ huske valg du tar nÃ¥r du bruker nettstedet vÃ¥rt.","pc_fnct_text_3":"For eksempel kan vi bruke funksjonalitetscookies for Ã¥ huske sprÃ¥kinnstillingene dine eller huske pÃ¥loggingsinformasjonen din.","pc_minfo_text_1":"Mer informasjon","pc_minfo_text_2":"For spÃ¸rsmÃ¥l angÃ¥ende vÃ¥re retningslinjer for informasjonskapsler og dine valg, vennligst kontakt oss.","pc_minfo_text_3":"For Ã¥ finne ut mer, besÃ¸k vÃ¥r <a href=\'%s\' target=\'_blank\'>personvernpolicy</a>.","pc_save":"Lagre mine preferanser","pc_sncssr_text_1":"Strengt nÃ¸dvendige informasjonskapsler","pc_sncssr_text_2":"Disse informasjonskapslene er viktige for Ã¥ gi deg tjenester tilgjengelig via nettstedet vÃ¥rt og for Ã¥ gjÃ¸re det mulig for deg Ã¥ bruke visse funksjoner pÃ¥ nettstedet vÃ¥rt.","pc_sncssr_text_3":"Uten disse informasjonskapslene kan vi ikke tilby deg visse tjenester pÃ¥ nettstedet vÃ¥rt.","pc_title":"Informasjonssenter for informasjonskapsler","pc_trck_text_1":"Sporings- og ytelses-informasjonskapsler","pc_trck_text_2":"Disse informasjonskapslene brukes til Ã¥ samle inn informasjon for Ã¥ analysere trafikken til nettstedet vÃ¥rt og hvordan besÃ¸kende bruker nettstedet vÃ¥rt","pc_trck_text_3":"Disse informasjonskapslene kan for eksempel spore ting som hvor lang tid du bruker pÃ¥ nettstedet eller sidene du besÃ¸ker, noe som hjelper oss Ã¥ forstÃ¥ hvordan vi kan forbedre nettstedet vÃ¥rt for deg.","pc_trck_text_4":"Informasjonen som samles inn gjennom disse sporings- og ytelseskapslene, identifiserer ikke noen individuell besÃ¸kende.","pc_trgt_text_1":"MÃ¥lretting og annonsering av informasjonskapsler","pc_trgt_text_2":"Disse informasjonskapslene brukes til Ã¥ vise reklame som sannsynligvis vil vÃ¦re av interesse for deg basert pÃ¥ nettleservaner.","pc_trgt_text_3":"Disse informasjonskapslene, som serveres av innholds- og / eller reklameleverandÃ¸rer, kan kombinere informasjon de har samlet inn fra nettstedet vÃ¥rt med annen informasjon de har samlet uavhengig av nettleserens aktiviteter pÃ¥ tvers av nettverket av nettsteder.","pc_trgt_text_4":"Hvis du velger Ã¥ fjerne eller deaktivere disse mÃ¥lrettings- eller annonseringskapslene, vil du fremdeles se annonser, men de er kanskje ikke relevante for deg.","pc_yprivacy_text_1":"Ditt personvern er viktig for oss","pc_yprivacy_text_2":"Informasjonskapsler er veldig smÃ¥ tekstfiler som lagres pÃ¥ datamaskinen din nÃ¥r du besÃ¸ker et nettsted. Vi bruker informasjonskapsler for en rekke formÃ¥l og for Ã¥ forbedre din online opplevelse pÃ¥ nettstedet vÃ¥rt (for eksempel for Ã¥ huske pÃ¥loggingsinformasjonen din).","pc_yprivacy_text_3":"Du kan endre innstillingene dine og avvise visse typer informasjonskapsler som skal lagres pÃ¥ datamaskinen din mens du surfer pÃ¥ nettstedet vÃ¥rt. Du kan ogsÃ¥ fjerne alle informasjonskapsler som allerede er lagret pÃ¥ datamaskinen din, men husk at sletting av informasjonskapsler kan forhindre deg i Ã¥ bruke deler av nettstedet vÃ¥rt.","pc_yprivacy_title":"Ditt personvern","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Personvernpolicy</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"Ð’ Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ðµ ÑÐ° Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸Ñ‚Ðµ","always_active":"Ð’Ð¸Ð½Ð°Ð³Ð¸ Ð² Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ðµ ÑÐ° Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸Ñ‚Ðµ","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"ÐÐµÐ°ÐºÑ‚Ð¸Ð²Ð½Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸","nb_agree":"Ð¡ÑŠÐ³Ð»Ð°ÑÐµÐ½ ÑÑŠÐ¼","nb_changep":"ÐŸÑ€Ð¾Ð¼ÑÐ½Ð° Ð½Ð° Ð¿Ñ€ÐµÐ´Ð¿Ð¾Ñ‡Ð¸Ñ‚Ð°Ð½Ð¸ÑÑ‚Ð° Ð¼Ð¸","nb_ok":"Ð”Ð¾Ð±Ñ€Ðµ","nb_reject":"ÐÐ· Ð¾Ñ‚ÐºÐ°Ð·Ð²Ð°Ð¼","nb_text":"ÐÐ¸Ðµ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð¼Ðµ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ Ð¸ Ð´Ñ€ÑƒÐ³Ð¸, Ð¿Ñ€Ð¾ÑÐ»ÐµÐ´ÑÐ²Ð°Ñ‰Ð¸, Ñ‚ÐµÑ…Ð½Ð¾Ð»Ð¾Ð³Ð¸Ð¸, Ð·Ð° Ð´Ð° Ð¿Ð¾Ð´Ð¾Ð±Ñ€Ð¸Ð¼ ÑÑŠÑ€Ñ„Ð¸Ñ€Ð°Ð½ÐµÑ‚Ð¾ Ð²Ð¸ Ð² Ð½Ð°ÑˆÐ¸Ñ ÑÐ°Ð¹Ñ‚, ÐºÐ°Ñ‚Ð¾ Ð²Ð¸ Ð¿Ð¾ÐºÐ°Ð¶ÐµÐ¼ Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»Ð¸Ð·Ð¸Ñ€Ð°Ð½Ð¾ ÑÑŠÐ´ÑŠÑ€Ð¶Ð°Ð½Ð¸Ðµ Ð¸ Ñ€ÐµÐºÐ»Ð°Ð¼Ð¸, Ð´Ð° Ð°Ð½Ð°Ð»Ð¸Ð·Ð¸Ñ€Ð°Ð¼Ðµ Ñ‚Ñ€Ð°Ñ„Ð¸ÐºÐ° Ð½Ð° Ð½Ð°ÑˆÐ¸Ñ ÑÐ°Ð¹Ñ‚ Ð¸ Ð´Ð° Ñ€Ð°Ð·Ð±ÐµÑ€ÐµÐ¼ Ð¾Ñ‚ÐºÑŠÐ´Ðµ Ð¸Ð´Ð²Ð°Ñ‚ Ð½Ð°ÑˆÐ¸Ñ‚Ðµ Ð¿Ð¾ÑÐµÑ‚Ð¸Ñ‚ÐµÐ»Ð¸.","nb_title":"ÐÐ¸Ðµ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð¼Ðµ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸","pc_fnct_text_1":"Ð¤ÑƒÐ½ÐºÑ†Ð¸Ð¾Ð½Ð°Ð»Ð½Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸","pc_fnct_text_2":"Ð¢ÐµÐ·Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ ÑÐµ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ñ‚, Ð·Ð° Ð´Ð° Ð²Ð¸ Ð¾ÑÐ¸Ð³ÑƒÑ€ÑÑ‚ Ð¾Ñ‰Ðµ Ð¿Ð¾-Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»Ð¸Ð·Ð¸Ñ€Ð°Ð½Ð¾ Ð¸Ð·Ð¶Ð¸Ð²ÑÐ²Ð°Ð½Ðµ Ð½Ð° Ð½Ð°ÑˆÐ¸Ñ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚ Ð¸ Ð´Ð° Ð±ÑŠÐ´Ð°Ñ‚ Ð·Ð°Ð¿Ð¾Ð¼Ð½ÐµÐ½Ð¸ Ð¸Ð·Ð±Ð¾Ñ€Ð¸Ñ‚Ðµ, ÐºÐ¾Ð¸Ñ‚Ð¾ ÑÑ‚Ðµ Ð½Ð°Ð¿Ñ€Ð°Ð²Ð¸Ð»Ð¸, ÐºÐ¾Ð³Ð°Ñ‚Ð¾ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ñ…Ñ‚Ðµ Ð½Ð°ÑˆÐ¸Ñ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚.","pc_fnct_text_3":"ÐÐ°Ð¿Ñ€Ð¸Ð¼ÐµÑ€: Ð¼Ð¾Ð¶Ðµ Ð´Ð° Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð¼Ðµ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¾Ð½Ð°Ð»Ð½Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸, Ð·Ð° Ð´Ð° Ð·Ð°Ð¿Ð¾Ð¼Ð½Ð¸Ð¼ Ð¿Ñ€ÐµÐ´Ð¿Ð¾Ñ‡Ð¸Ñ‚Ð°Ð½Ð¸Ñ Ð²Ð¸ ÐµÐ·Ð¸Ðº Ð¸Ð»Ð¸ Ð´Ð° Ð·Ð°Ð¿Ð¾Ð¼Ð½Ð¸Ð¼ Ð´ÐµÑ‚Ð°Ð¹Ð»Ð¸ Ð¿Ð¾ Ð²Ð»Ð¸Ð·Ð°Ð½ÐµÑ‚Ð¾ Ð²Ð¸ Ð² ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚Ð°.","pc_minfo_text_1":"ÐžÑ‰Ðµ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ñ","pc_minfo_text_2":"Ð—Ð° Ð²ÑÑÐºÐ°ÐºÐ²Ð¸ Ð²ÑŠÐ¿Ñ€Ð¾ÑÐ¸ Ð²ÑŠÐ² Ð²Ñ€ÑŠÐ·ÐºÐ° Ñ Ð½Ð°ÑˆÐ°Ñ‚Ð° Ð¿Ð¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° Ð·Ð° Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸Ñ‚Ðµ Ð¸ Ð²Ð°ÑˆÐ¸Ñ‚Ðµ Ð¸Ð·Ð±Ð¾Ñ€Ð¸, Ð¼Ð¾Ð»Ñ, ÑÐ²ÑŠÑ€Ð¶ÐµÑ‚Ðµ ÑÐµ Ñ Ð½Ð°Ñ.","pc_minfo_text_3":"Ð—Ð° Ð´Ð° Ð½Ð°ÑƒÑ‡Ð¸Ñ‚Ðµ Ð¿Ð¾Ð²ÐµÑ‡Ðµ, Ð¼Ð¾Ð»Ñ, Ð¿Ð¾ÑÐµÑ‚ÐµÑ‚Ðµ Ð½Ð°ÑˆÐ°Ñ‚Ð° <a href=\'%s\' target=\'_blank\'>Ð¡Ñ‚Ñ€Ð°Ð½Ð¸Ñ†Ð° Ð·Ð° Ð¿Ð¾Ð²ÐµÑ€Ð¸Ñ‚ÐµÐ»Ð½Ð¾ÑÑ‚</a>.","pc_save":"Ð—Ð°Ð¿Ð°Ð·Ð¸ Ð¿Ñ€ÐµÐ´Ð¿Ð¾Ñ‡Ð¸Ñ‚Ð°Ð½Ð¸ÑÑ‚Ð° Ð¼Ð¸","pc_sncssr_text_1":"Ð¡Ñ‚Ñ€Ð¾Ð³Ð¾ Ð·Ð°Ð´ÑŠÐ»Ð¶Ð¸Ñ‚ÐµÐ»Ð½Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸","pc_sncssr_text_2":"Ð¢ÐµÐ·Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ ÑÐ° ÑÑŠÑ‰ÐµÑÑ‚Ð²ÐµÐ½ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚, ÐºÐ¾Ð¹Ñ‚Ð¾ Ð¾ÑÐ¸Ð³ÑƒÑ€ÑÐ²Ð° ÑƒÑÐ»ÑƒÐ³Ð¸, Ð´Ð¾ÑÑ‚ÑŠÐ¿Ð½Ð¸ Ñ‡Ñ€ÐµÐ· Ð½Ð°ÑˆÐ¸Ñ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚ Ð¸ Ð´Ð°Ð²Ð°Ñ‚ Ð²ÑŠÐ·Ð¼Ð¾Ð¶Ð½Ð¾ÑÑ‚ Ð·Ð° Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð½Ðµ Ð½Ð° Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÐµÐ½Ð¸ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¸ Ð½Ð° Ð½Ð°ÑˆÐ¸Ñ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚.","pc_sncssr_text_3":"Ð‘ÐµÐ· Ñ‚ÐµÐ·Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ Ð½Ðµ Ð¼Ð¾Ð¶ÐµÐ¼ Ð´Ð° Ð²Ð¸ Ð´Ð¾ÑÑ‚Ð°Ð²Ð¸Ð¼ Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÐµÐ½Ð¸ ÑƒÑÐ»ÑƒÐ³Ð¸ Ð½Ð° Ð½Ð°ÑˆÐ¸Ñ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚.","pc_title":"Ð¦ÐµÐ½Ñ‚ÑŠÑ€ Ð·Ð° Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ° Ð½Ð° Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸","pc_trck_text_1":"Ð‘Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ Ð·Ð° Ð¿Ñ€Ð¾ÑÐ»ÐµÐ´ÑÐ²Ð°Ð½Ðµ Ð¸ Ð·Ð° Ð¿Ñ€Ð¾Ð¸Ð·Ð²Ð¾Ð´Ð¸Ñ‚ÐµÐ»Ð½Ð¾ÑÑ‚","pc_trck_text_2":"Ð¢ÐµÐ·Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ ÑÐµ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ñ‚ Ð·Ð° ÑÑŠÐ±Ð¸Ñ€Ð°Ð½Ðµ Ð½Ð° Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ñ Ð·Ð° Ð°Ð½Ð°Ð»Ð¸Ð· Ð½Ð° Ñ‚Ñ€Ð°Ñ„Ð¸ÐºÐ° ÐºÑŠÐ¼ Ð½Ð°ÑˆÐ¸Ñ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚ Ð¸ ÐºÐ°Ðº Ð¿Ð¾ÑÐµÑ‚Ð¸Ñ‚ÐµÐ»Ð¸Ñ‚Ðµ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ñ‚ Ð½Ð°ÑˆÐ¸Ñ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚.","pc_trck_text_3":"ÐÐ°Ð¿Ñ€Ð¸Ð¼ÐµÑ€, Ñ‚ÐµÐ·Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ Ð¼Ð¾Ð³Ð°Ñ‚ Ð´Ð° Ð¿Ñ€Ð¾ÑÐ»ÐµÐ´ÑÐ²Ð°Ñ‚ Ð½ÐµÑ‰Ð° ÐºÐ°Ñ‚Ð¾ ÐºÐ¾Ð»ÐºÐ¾ Ð²Ñ€ÐµÐ¼Ðµ Ð¿Ñ€ÐµÐºÐ°Ñ€Ð²Ð°Ñ‚Ðµ Ð½Ð° ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚Ð° Ð¸Ð»Ð¸ Ð½Ð° Ð¿Ð¾ÑÐµÑ‰Ð°Ð²Ð°Ð½Ð¸Ñ‚Ðµ Ð¾Ñ‚ Ð²Ð°Ñ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð¸, ÐºÐ¾ÐµÑ‚Ð¾ Ð½Ð¸ Ð¿Ð¾Ð¼Ð°Ð³Ð° Ð´Ð° Ñ€Ð°Ð·Ð±ÐµÑ€ÐµÐ¼ ÐºÐ°Ðº Ð¼Ð¾Ð¶ÐµÐ¼ Ð´Ð° Ð¿Ð¾Ð´Ð¾Ð±Ñ€Ð¸Ð¼ Ð½Ð°ÑˆÐ¸Ñ ÑÐ°Ð¹Ñ‚ Ð·Ð° Ð²Ð°Ñ.","pc_trck_text_4":"Ð˜Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸ÑÑ‚Ð°, ÑÑŠÐ±Ñ€Ð°Ð½Ð° Ñ‡Ñ€ÐµÐ· Ñ‚ÐµÐ·Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ Ð·Ð° Ð¿Ñ€Ð¾ÑÐ»ÐµÐ´ÑÐ²Ð°Ð½Ðµ Ð¸ Ð¿Ñ€Ð¾Ð¸Ð·Ð²Ð¾Ð´Ð¸Ñ‚ÐµÐ»Ð½Ð¾ÑÑ‚, Ð½Ðµ Ð¸Ð´ÐµÐ½Ñ‚Ð¸Ñ„Ð¸Ñ†Ð¸Ñ€Ð° Ð²ÑÐµÐºÐ¸ Ð¾Ñ‚Ð´ÐµÐ»ÐµÐ½ Ð¿Ð¾ÑÐµÑ‚Ð¸Ñ‚ÐµÐ».","pc_trgt_text_1":"ÐÐ°ÑÐ¾Ñ‡Ð²Ð°Ð½Ðµ Ð¸ Ñ€ÐµÐºÐ»Ð°Ð¼Ð½Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸","pc_trgt_text_2":"Ð¢ÐµÐ·Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ ÑÐµ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ñ‚ Ð·Ð° Ð¿Ð¾ÐºÐ°Ð·Ð²Ð°Ð½Ðµ Ð½Ð° Ñ€ÐµÐºÐ»Ð°Ð¼Ð°, ÐºÐ¾ÑÑ‚Ð¾ Ð²ÐµÑ€Ð¾ÑÑ‚Ð½Ð¾ Ñ‰Ðµ Ð²Ð¸ Ð·Ð°Ð¸Ð½Ñ‚ÐµÑ€ÐµÑÐ¾Ð²Ð° Ð²ÑŠÐ· Ð¾ÑÐ½Ð¾Ð²Ð° Ð½Ð° Ð½Ð°Ð²Ð¸Ñ†Ð¸Ñ‚Ðµ Ð²Ð¸ Ð·Ð° ÑÑŠÑ€Ñ„Ð¸Ñ€Ð°Ð½Ðµ.","pc_trgt_text_3":"Ð¢ÐµÐ·Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸, Ð¾Ð±ÑÐ»ÑƒÐ¶Ð²Ð°Ð½Ð¸ Ð¾Ñ‚ Ð½Ð°ÑˆÐ¸Ñ‚Ðµ Ð´Ð¾ÑÑ‚Ð°Ð²Ñ‡Ð¸Ñ†Ð¸ Ð½Ð° ÑÑŠÐ´ÑŠÑ€Ð¶Ð°Ð½Ð¸Ðµ Ð¸ / Ð¸Ð»Ð¸ Ñ€ÐµÐºÐ»Ð°Ð¼Ð°, Ð¼Ð¾Ð³Ð°Ñ‚ Ð´Ð° ÐºÐ¾Ð¼Ð±Ð¸Ð½Ð¸Ñ€Ð°Ñ‚ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸ÑÑ‚Ð°, ÐºÐ¾ÑÑ‚Ð¾ ÑÐ° ÑÑŠÐ±Ñ€Ð°Ð»Ð¸ Ð¾Ñ‚ Ð½Ð°ÑˆÐ¸Ñ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚, Ñ Ð´Ñ€ÑƒÐ³Ð° Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ñ, ÐºÐ¾ÑÑ‚Ð¾ ÑÐ° ÑÑŠÐ±Ñ€Ð°Ð»Ð¸ Ð½ÐµÐ·Ð°Ð²Ð¸ÑÐ¸Ð¼Ð¾, ÑÐ²ÑŠÑ€Ð·Ð°Ð½Ð° Ñ Ð´ÐµÐ¹Ð½Ð¾ÑÑ‚Ð¸Ñ‚Ðµ Ð½Ð° Ð²Ð°ÑˆÐ¸Ñ ÑƒÐµÐ± Ð±Ñ€Ð°ÑƒÐ·ÑŠÑ€ Ð² Ñ‚ÑÑ…Ð½Ð°Ñ‚Ð° Ð¼Ñ€ÐµÐ¶Ð° Ð¾Ñ‚ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚Ð¾Ð²Ðµ.","pc_trgt_text_4":"ÐÐºÐ¾ Ñ€ÐµÑˆÐ¸Ñ‚Ðµ Ð´Ð° Ð¿Ñ€ÐµÐ¼Ð°Ñ…Ð½ÐµÑ‚Ðµ Ð¸Ð»Ð¸ Ð´ÐµÐ°ÐºÑ‚Ð¸Ð²Ð¸Ñ€Ð°Ñ‚Ðµ Ñ‚ÐµÐ·Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ Ð·Ð° Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÐµÐ½Ð¸ Ð¿Ð¾Ñ‚Ñ€ÐµÐ±Ð¸Ñ‚ÐµÐ»ÑÐºÐ¸ Ð³Ñ€ÑƒÐ¿Ð¸ Ð¸Ð»Ð¸ Ñ€ÐµÐºÐ»Ð°Ð¼Ð°, Ð¿Ð°Ðº Ñ‰Ðµ Ð²Ð¸Ð´Ð¸Ñ‚Ðµ Ñ€ÐµÐºÐ»Ð°Ð¼Ð¸, Ð½Ð¾ Ñ‚Ðµ Ð¼Ð¾Ð¶Ðµ Ð´Ð° Ð½Ðµ ÑÐ° Ð¾Ñ‚ Ð¿Ð¾Ð´Ñ…Ð¾Ð´ÑÑ‰Ð¸ Ð·Ð° Ð²Ð°Ñ.","pc_yprivacy_text_1":"Ð’Ð°ÑˆÐ°Ñ‚Ð° Ð¿Ð¾Ð²ÐµÑ€Ð¸Ñ‚ÐµÐ»Ð½Ð¾ÑÑ‚ Ðµ Ð²Ð°Ð¶Ð½Ð° Ð·Ð° Ð½Ð°Ñ","pc_yprivacy_text_2":"Ð‘Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸Ñ‚Ðµ ÑÐ° Ð¼Ð½Ð¾Ð³Ð¾ Ð¼Ð°Ð»ÐºÐ¸ Ñ‚ÐµÐºÑÑ‚Ð¾Ð²Ð¸ Ñ„Ð°Ð¹Ð»Ð¾Ð²Ðµ, ÐºÐ¾Ð¸Ñ‚Ð¾ ÑÐµ ÑÑŠÑ…Ñ€Ð°Ð½ÑÐ²Ð°Ñ‚ Ð½Ð° Ð²Ð°ÑˆÐ¸Ñ ÐºÐ¾Ð¼Ð¿ÑŽÑ‚ÑŠÑ€, ÐºÐ¾Ð³Ð°Ñ‚Ð¾ Ð¿Ð¾ÑÐµÑ‚Ð¸Ñ‚Ðµ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚. ÐÐ¸Ðµ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð¼Ðµ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ Ð·Ð° Ð¼Ð½Ð¾Ð¶ÐµÑÑ‚Ð²Ð¾ Ð¾Ñ‚ Ñ†ÐµÐ»Ð¸ Ð¸ Ð´Ð° Ð¿Ð¾Ð´Ð¾Ð±Ñ€Ð¸Ð¼ ÑÑŠÑ€Ñ„Ð¸Ñ€Ð°Ð½ÐµÑ‚Ð¾ Ð²Ð¸ Ð¸Ð· Ð½Ð°ÑˆÐ¸Ñ ÑÐ°Ð¹Ñ‚ (Ð½Ð°Ð¿Ñ€Ð¸Ð¼ÐµÑ€: Ð·Ð° Ð´Ð° Ð·Ð°Ð¿Ð¾Ð¼Ð½Ð¸Ð¼ Ð´ÐµÑ‚Ð°Ð¹Ð»Ð¸Ñ‚Ðµ Ð½Ð° Ð²Ð°ÑˆÐ¸Ñ Ð°ÐºÐ°ÑƒÐ½Ñ‚ Ð·Ð° Ð²Ð»Ð¸Ð·Ð°Ð½Ðµ).","pc_yprivacy_text_3":"ÐœÐ¾Ð¶ÐµÑ‚Ðµ Ð´Ð° Ð¿Ñ€Ð¾Ð¼ÐµÐ½Ð¸Ñ‚Ðµ Ð¿Ñ€ÐµÐ´Ð¿Ð¾Ñ‡Ð¸Ñ‚Ð°Ð½Ð¸ÑÑ‚Ð° ÑÐ¸ Ð¸ Ð´Ð° Ð¾Ñ‚ÐºÐ°Ð¶ÐµÑ‚Ðµ Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÐµÐ½Ð¸ Ð²Ð¸Ð´Ð¾Ð²Ðµ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸, ÐºÐ¾Ð¸Ñ‚Ð¾ Ð´Ð° ÑÐµ ÑÑŠÑ…Ñ€Ð°Ð½ÑÐ²Ð°Ñ‚ Ð½Ð° Ð²Ð°ÑˆÐ¸Ñ ÐºÐ¾Ð¼Ð¿ÑŽÑ‚ÑŠÑ€, Ð´Ð¾ÐºÐ°Ñ‚Ð¾ ÑÑŠÑ€Ñ„Ð¸Ñ€Ð°Ñ‚Ðµ Ð² Ð½Ð°ÑˆÐ¸Ñ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚. ÐœÐ¾Ð¶ÐµÑ‚Ðµ ÑÑŠÑ‰Ð¾ Ð´Ð° Ð¿Ñ€ÐµÐ¼Ð°Ñ…Ð½ÐµÑ‚Ðµ Ð½ÑÐºÐ¾Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸, ÐºÐ¾Ð¸Ñ‚Ð¾ Ð²ÐµÑ‡Ðµ ÑÐ° Ð·Ð°Ð¿Ð°Ð·ÐµÐ½Ð¸ Ð½Ð° Ð²Ð°ÑˆÐ¸Ñ ÐºÐ¾Ð¼Ð¿ÑŽÑ‚ÑŠÑ€, Ð½Ð¾ Ð¸Ð¼Ð°Ð¹Ñ‚Ðµ Ð¿Ñ€ÐµÐ´Ð²Ð¸Ð´, Ñ‡Ðµ Ð¸Ð·Ñ‚Ñ€Ð¸Ð²Ð°Ð½ÐµÑ‚Ð¾ Ð½Ð° Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ Ð¼Ð¾Ð¶Ðµ Ð´Ð° Ð²Ð¸ Ð¿Ð¾Ð¿Ñ€ÐµÑ‡Ð¸ Ð´Ð° Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ñ‚Ðµ Ñ‡Ð°ÑÑ‚Ð¸ Ð¾Ñ‚ Ð½Ð°ÑˆÐ¸Ñ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚.","pc_yprivacy_title":"Ð’Ð°ÑˆÐ°Ñ‚Ð° Ð¿Ð¾Ð²ÐµÑ€Ð¸Ñ‚ÐµÐ»Ð½Ð¾ÑÑ‚","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Ð¡Ñ‚Ñ€Ð°Ð½Ð¸Ñ†Ð° Ð·Ð° Ð¿Ð¾Ð²ÐµÑ€Ð¸Ñ‚ÐµÐ»Ð½Ð¾ÑÑ‚</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"Î•Î½ÎµÏÎ³ÏŒ","always_active":"Î Î¬Î½Ï„Î± ÎµÎ½ÎµÏÎ³ÏŒ","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Î‘Î½ÎµÎ½ÎµÏÎ³ÏŒ","nb_agree":"Î£Ï…Î¼Ï†Ï‰Î½ÏŽ","nb_changep":"Î‘Î»Î»Î±Î³Î® Ï„Ï‰Î½ Ï€ÏÎ¿Ï„Î¹Î¼Î®ÏƒÎµÏŽÎ½ Î¼Î¿Ï…","nb_ok":"OK","nb_reject":"Î‘ÏÎ½Î¿ÏÎ¼Î±Î¹","nb_text":"Î§ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î¿ÏÎ¼Îµ cookies ÎºÎ±Î¹ Î¬Î»Î»ÎµÏ‚ Ï„ÎµÏ‡Î½Î¿Î»Î¿Î³Î¯ÎµÏ‚ ÎµÎ½Ï„Î¿Ï€Î¹ÏƒÎ¼Î¿Ï Î³Î¹Î± Ï„Î·Î½ Î²ÎµÎ»Ï„Î¯Ï‰ÏƒÎ· Ï„Î·Ï‚ ÎµÎ¼Ï€ÎµÎ¹ÏÎ¯Î±Ï‚ Ï€ÎµÏÎ¹Î®Î³Î·ÏƒÎ·Ï‚ ÏƒÏ„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î¼Î±Ï‚, Î³Î¹Î± Ï„Î·Î½ ÎµÎ¾Î±Ï„Î¿Î¼Î¯ÎºÎµÏ…ÏƒÎ· Ï€ÎµÏÎ¹ÎµÏ‡Î¿Î¼Î­Î½Î¿Ï… ÎºÎ±Î¹ Î´Î¹Î±Ï†Î·Î¼Î¯ÏƒÎµÏ‰Î½, Ï„Î·Î½ Ï€Î±ÏÎ¿Ï‡Î® Î»ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î¹ÏŽÎ½ ÎºÎ¿Î¹Î½Ï‰Î½Î¹ÎºÏŽÎ½ Î¼Î­ÏƒÏ‰Î½ ÎºÎ±Î¹ Ï„Î·Î½ Î±Î½Î¬Î»Ï…ÏƒÎ· Ï„Î·Ï‚ ÎµÏ€Î¹ÏƒÎºÎµÏˆÎ¹Î¼ÏŒÏ„Î·Ï„Î¬Ï‚ Î¼Î±Ï‚.","nb_title":"Î‘Ï…Ï„Î® Î· Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹ÎµÎ¯ cookies","pc_fnct_text_1":"Cookies Î›ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î¹ÎºÏŒÏ„Î·Ï„Î±Ï‚","pc_fnct_text_2":"Î‘Ï…Ï„Î¬ Ï„Î± cookies Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î¿ÏÎ½Ï„Î±Î¹ Î³Î¹Î± Î½Î± ÏƒÎ±Ï‚ Ï€Î±ÏÎ­Ï‡Î¿Ï…Î½ Î¼Î¯Î± Ï€Î¹Î¿ Ï€ÏÎ¿ÏƒÏ‰Ï€Î¿Ï€Î¿Î¹Î·Î¼Î­Î½Î· ÎµÎ¼Ï€ÎµÎ¹ÏÎ¯Î± ÏƒÏ„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î¼Î±Ï‚ ÎºÎ±Î¹ Î³Î¹Î± Î½Î± Î¸Ï…Î¼Î¿ÏÎ½Ï„Î±Î¹ ÎµÏ€Î¹Î»Î¿Î³Î­Ï‚ Ï€Î¿Ï… ÎºÎ¬Î½ÎµÏ„Îµ ÏŒÏ„Î±Î½ Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹ÎµÎ¯Ï„Îµ Ï„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î¼Î±Ï‚.","pc_fnct_text_3":"Î“Î¹Î± Ï€Î±ÏÎ¬Î´ÎµÎ¹Î³Î¼Î±, Î¼Ï€Î¿ÏÎµÎ¯ Î½Î± Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î®ÏƒÎ¿Ï…Î¼Îµ cookies Î»ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î¹ÎºÏŒÏ„Î·Ï„Î±Ï‚ Î³Î¹Î± Î½Î± Î¸Ï…Î¼ÏŒÎ¼Î±ÏƒÏ„Îµ Ï„Î·Î½ ÎµÏ€Î¹Î»Î¿Î³Î® Î³Î»ÏŽÏƒÏƒÎ±Ï‚ Î® Ï„Î± ÏƒÏ„Î¿Î¹Ï‡ÎµÎ¯Î± ÎµÎ¹ÏƒÏŒÎ´Î¿Ï… ÏƒÎ±Ï‚.","pc_minfo_text_1":"Î ÎµÏÎ¹ÏƒÏƒÏŒÏ„ÎµÏÎµÏ‚ Ï€Î»Î·ÏÎ¿Ï†Î¿ÏÎ¯ÎµÏ‚","pc_minfo_text_2":"Î“Î¹Î± Î¿Ï€Î¿Î¹Î±Î´Î®Ï€Î¿Ï„Îµ Î±Ï€Î¿ÏÎ¯Î± ÏƒÎµ ÏƒÏ‡Î­ÏƒÎ· Î¼Îµ Ï„Î·Î½ Ï€Î¿Î»Î¹Ï„Î¹ÎºÎ® Î¼Î±Ï‚ ÏƒÏ‡ÎµÏ„Î¹ÎºÎ¬ Î¼Îµ Ï„Î± cookies ÎºÎ±Î¹ Ï„Î¹Ï‚ ÎµÏ€Î¹Î»Î¿Î³Î­Ï‚ ÏƒÎ±Ï‚, Ï€Î±ÏÎ±ÎºÎ±Î»Î¿ÏÎ¼Îµ Î½Î± Î­ÏÎ¸ÎµÏ„Îµ ÏƒÎµ ÎµÏ€Î±Ï†Î® Î¼Î±Î¶Î¯ Î¼Î±Ï‚.","pc_minfo_text_3":"Î“Î¹Î± Î½Î± Î¼Î¬Î¸ÎµÏ„Îµ Ï€ÎµÏÎ¹ÏƒÏƒÏŒÏ„ÎµÏÎ±, Ï€Î±ÏÎ±ÎºÎ±Î»Î¿ÏÎ¼Îµ ÎµÏ€Î¹ÏƒÎºÎµÏ†Î¸ÎµÎ¯Ï„Îµ Ï„Î·Î½ ÏƒÎµÎ»Î¯Î´Î± Ï€ÎµÏÎ¯ <a href=\'%s\' target=\'_blank\'>Î Î¿Î»Î¹Ï„Î¹ÎºÎ® Î±Ï€Î¿ÏÏÎ®Ï„Î¿Ï…</a>.","pc_save":"Î‘Ï€Î¿Î¸Î®ÎºÎµÏ…ÏƒÎ· Ï„Ï‰Î½ Ï€ÏÎ¿Ï„Î¹Î¼Î®ÏƒÎµÏŽÎ½ Î¼Î¿Ï…","pc_sncssr_text_1":"Î†ÎºÏÏ‰Ï‚ Î±Ï€Î±ÏÎ±Î¯Ï„Î·Ï„Î± cookies","pc_sncssr_text_2":"Î¤Î± Î±Ï€Î±ÏÎ±Î¯Ï„Î·Ï„Î± cookies Î²Î¿Î·Î¸Î¿ÏÎ½ ÏƒÏ„Î¿ Î½Î± Î³Î¯Î½ÎµÎ¹ Ï‡ÏÎ·ÏƒÏ„Î¹ÎºÎ® Î¼Î¯Î± Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î±, ÎµÏ€Î¹Ï„ÏÎ­Ï€Î¿Î½Ï„Î±Ï‚ Î²Î±ÏƒÎ¹ÎºÎ­Ï‚ Î»ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î¯ÎµÏ‚ ÏŒÏ€Ï‰Ï‚ Ï„Î·Î½ Ï€Î»Î¿Î®Î³Î·ÏƒÎ· ÎºÎ±Î¹ Ï„Î·Î½ Ï€ÏÏŒÏƒÎ²Î±ÏƒÎ· ÏƒÎµ Î±ÏƒÏ†Î±Î»ÎµÎ¯Ï‚ Ï€ÎµÏÎ¹Î¿Ï‡Î­Ï‚ Ï„Î·Ï‚ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î±Ï‚.","pc_sncssr_text_3":"Î— Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î´ÎµÎ½ Î¼Ï€Î¿ÏÎµÎ¯ Î½Î± Î»ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î®ÏƒÎµÎ¹ ÏƒÏ‰ÏƒÏ„Î¬ Ï‡Ï‰ÏÎ¯Ï‚ Î±Ï…Ï„Î¬ Ï„Î± cookies.","pc_title":"ÎšÎ­Î½Ï„ÏÎ¿ Î ÏÎ¿Ï„Î¹Î¼Î®ÏƒÎµÏ‰Î½ Cookies","pc_trck_text_1":"Cookies ÎµÎ½Ï„Î¿Ï€Î¹ÏƒÎ¼Î¿Ï ÎºÎ±Î¹ Î±Ï€Î¿Î´Î¿Ï„Î¹ÎºÏŒÏ„Î·Ï„Î±Ï‚","pc_trck_text_2":"Î‘Ï…Ï„Î¬ Ï„Î± cookies Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î¿ÏÎ½Ï„Î±Î¹ Î³Î¹Î± Î½Î± ÏƒÏ…Î»Î»Î­Î³Î¿Ï…Î½ Ï€Î»Î·ÏÎ¿Ï†Î¿ÏÎ¯ÎµÏ‚ ÏƒÏ‡ÎµÏ„Î¹ÎºÎ­Ï‚ Î¼Îµ Ï„Î·Î½ Î±Î½Î¬Î»Ï…ÏƒÎ· Ï„Î·Ï‚ ÎµÏ€Î¹ÏƒÎºÎµÏˆÎ¹Î¼ÏŒÏ„Î·Ï„Î±Ï‚ Ï„Î·Ï‚ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î±Ï‚ Î¼Î±Ï‚ ÎºÎ±Î¹ Î¼Îµ Ï„Î¿ Ï€ÏŽÏ‚ Î¿Î¹ Ï‡ÏÎ®ÏƒÏ„ÎµÏ‚ Ï„Î·Î½ Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î¿ÏÎ½.","pc_trck_text_3":"Î“Î¹Î± Ï€Î±ÏÎ¬Î´ÎµÎ¹Î³Î¼Î±, Î±Ï…Ï„Î¬ Ï„Î± cookies Î¼Ï€Î¿ÏÎµÎ¯ Î½Î± ÎµÎ½Ï„Î¿Ï€Î¯ÏƒÎ¿Ï…Î½ Ï€ÏŒÏƒÎ¿ Ï‡ÏÏŒÎ½Î¿ Î±Ï†Î¹ÎµÏÏŽÎ½ÎµÏ„Îµ ÏƒÏ„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î¼Î±Ï‚ Î® Ï€Î¿Î¹ÎµÏ‚ ÏƒÎµÎ»Î¯Î´ÎµÏ‚ Ï„Î·Ï‚ ÎµÏ€Î¹ÏƒÎºÎ­Ï€Ï„ÎµÏƒÏ„Îµ, Ï€ÏÎ¬Î³Î¼Î± Ï€Î¿Ï… Î¼Î±Ï‚ Î²Î¿Î·Î¸Î¬ÎµÎ¹ Î½Î± ÎºÎ±Ï„Î±Î»Î¬Î²Î¿Ï…Î¼Îµ Ï€ÏŽÏ‚ Î½Î± Î²ÎµÎ»Ï„Î¹ÏŽÏƒÎ¿Ï…Î¼Îµ Ï„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î¼Î±Ï‚.","pc_trck_text_4":"ÎŸÎ¹ Ï€Î»Î·ÏÎ¿Ï†Î¿ÏÎ¯ÎµÏ‚ Ï€Î¿Ï… ÏƒÏ…Î»Î»Î­Î³Î¿Î½Ï„Î±Î¹ Î¼Î­ÏƒÏ‰ Î±Ï…Ï„ÏŽÎ½ Ï„Ï‰Î½ cookies Î´ÎµÎ½ Î±Î½Î±Î³Î½Ï‰ÏÎ¯Î¶Î¿Ï…Î½ Î¼ÎµÎ¼Î¿Î½Ï‰Î¼Î­Î½Î¿Ï…Ï‚ Ï‡ÏÎ®ÏƒÏ„ÎµÏ‚.","pc_trgt_text_1":"Cookies ÎµÎ¾Î±Ï„Î¿Î¼Î¹ÎºÎµÏ…Î¼Î­Î½Î¿Ï… Ï€ÎµÏÎ¹ÎµÏ‡Î¿Î¼Î­Î½Î¿Ï… ÎºÎ±Î¹ Î´Î¹Î±Ï†Î·Î¼Î¯ÏƒÎµÏ‰Î½","pc_trgt_text_2":"Î‘Ï…Ï„Î¬ Ï„Î± cookies Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î¿ÏÎ½Ï„Î±Î¹ Î³Î¹Î± Î½Î± Î´ÎµÎ¯Ï‡Î½Î¿Ï…Î½ Î´Î¹Î±Ï†Î·Î¼Î¯ÏƒÎµÎ¹Ï‚ Ï€Î¿Ï… Î¼Ï€Î¿ÏÎµÎ¯ Î½Î± ÏƒÎ±Ï‚ ÎµÎ½Î´Î¹Î±Ï†Î­ÏÎ¿Ï…Î½ Î¼Îµ Î²Î¬ÏƒÎ· Ï„Î¹Ï‚ ÏƒÏ…Î½Î®Î¸ÎµÎ¹ÎµÏ‚ Ï€ÎµÏÎ¹Î®Î³Î·ÏƒÎ®Ï‚ ÏƒÎ±Ï‚ ÏƒÏ„Î¿ Î”Î¹Î±Î´Î¯ÎºÏ„Ï…Î¿.","pc_trgt_text_3":"Î‘Ï…Ï„Î¬ Ï„Î± cookies, Ï€Î±ÏÎ­Ï‡Î¿Î½Ï„Î±Î¹ Î±Ï€ÏŒ Ï„Î¿Ï…Ï‚ Ï€Î±ÏÏŒÏ‡Î¿Ï…Ï‚ Ï€ÎµÏÎ¹ÎµÏ‡Î¿Î¼Î­Î½Î¿Ï… Î®/ÎºÎ±Î¹ Î´Î¹Î±Ï†Î·Î¼Î¯ÏƒÎµÏ‰Î½, Î¼Ï€Î¿ÏÎµÎ¯ Î½Î± ÏƒÏ…Î½Î´Ï…Î¬Î¶Î¿Ï…Î½ Ï€Î»Î·ÏÎ¿Ï†Î¿ÏÎ¯ÎµÏ‚ Ï€Î¿Ï… ÏƒÏ…Î»Î»Î­Î³Î¿Ï…Î½ Î±Ï€ÏŒ Ï„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î¼Î±Ï‚ Î¼Îµ Î¬Î»Î»ÎµÏ‚ Ï€Î¿Ï… Î­Ï‡Î¿Ï…Î½ Î±Î½ÎµÎ¾Î¬ÏÏ„Î·Ï„Î± ÏƒÏ…Î»Î»Î­Î¾ÎµÎ¹ Î±Ï€ÏŒ Î¬Î»Î»Î± Î´Î¯ÎºÏ„Ï…Î± Î® Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´ÎµÏ‚ ÏƒÏ‡ÎµÏ„Î¹ÎºÎ¬ Î¼Îµ Ï„Î¹Ï‚ Î´ÏÎ±ÏƒÏ„Î·ÏÎ¹ÏŒÏ„Î·Ï„Î­Ï‚ ÏƒÎ±Ï‚ ÏƒÏ„Î¿Î½ Ï†Ï…Î»Î»Î¿Î¼ÎµÏ„ÏÎ·Ï„Î® ÏƒÎ±Ï‚.","pc_trgt_text_4":"Î•Î¬Î½ ÎµÏ€Î¹Î»Î­Î¾ÎµÏ„Îµ Î½Î± Î±Ï†Î±Î¹ÏÎ­ÏƒÎµÏ„Îµ Î® Î½Î± Î±Ï€ÎµÎ½ÎµÏÎ³Î¿Ï€Î¿Î¹Î®ÏƒÎµÏ„Îµ Î±Ï…Ï„Î¬ Ï„Î± cookies, Î¸Î± ÏƒÏ…Î½ÎµÏ‡Î¯ÏƒÎµÏ„Îµ Î½Î± Î²Î»Î­Ï€ÎµÏ„Îµ Î´Î¹Î±Ï†Î·Î¼Î¯ÏƒÎµÎ¹Ï‚, Î±Î»Î»Î¬ Î±Ï…Ï„Î­Ï‚ Î¼Ï€Î¿ÏÎµÎ¯ Î½Î± Î¼Î·Î½ ÎµÎ¯Î½Î±Î¹ Ï€Î»Î­Î¿Î½ ÏƒÏ‡ÎµÏ„Î¹ÎºÎ­Ï‚ Î¼Îµ Ï„Î± ÎµÎ½Î´Î¹Î±Ï†Î­ÏÎ¿Î½Ï„Î¬ ÏƒÎ±Ï‚.","pc_yprivacy_text_1":"Î— Î¹Î´Î¹Ï‰Ï„Î¹ÎºÏŒÏ„Î·Ï„Î¬ ÏƒÎ±Ï‚ ÎµÎ¯Î½Î±Î¹ ÏƒÎ·Î¼Î±Î½Ï„Î¹ÎºÎ® Î³Î¹Î± ÎµÎ¼Î¬Ï‚","pc_yprivacy_text_2":"Î¤Î± cookies ÎµÎ¯Î½Î±Î¹ Ï€Î¿Î»Ï Î¼Î¹ÎºÏÎ¬ Î±ÏÏ‡ÎµÎ¯Î± ÎºÎµÎ¹Î¼Î­Î½Î¿Ï… Ï€Î¿Ï… Î±Ï€Î¿Î¸Î·ÎºÎµÏÎ¿Î½Ï„Î±Î¹ ÏƒÏ„Î¿Î½ Ï…Ï€Î¿Î»Î¿Î³Î¹ÏƒÏ„Î® ÏƒÎ±Ï‚ ÏŒÏ„Î±Î½ ÎµÏ€Î¹ÏƒÎºÎ­Ï€Ï„ÎµÏƒÏ„Îµ Î¼Î¹Î± Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î±. Î§ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î¿ÏÎ¼Îµ cookies Î³Î¹Î± Î´Î¹Î¬Ï†Î¿ÏÎ¿Ï…Ï‚ Î»ÏŒÎ³Î¿Ï…Ï‚ ÎºÎ±Î¹ Î³Î¹Î± Î½Î± Î²ÎµÎ»Ï„Î¹ÏŽÏƒÎ¿Ï…Î¼Îµ Ï„Î·Î½ Î´Î¹Î±Î´Î¹ÎºÏ„Ï…Î±ÎºÎ® ÏƒÎ±Ï‚ ÎµÎ¼Ï€ÎµÎ¹ÏÎ¯Î± ÏƒÏ„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î¼Î±Ï‚ (Ï€.Ï‡., Î³Î¹Î± Ï…Ï€ÎµÎ½Î¸ÏÎ¼Î¹ÏƒÎ· Ï„Ï‰Î½ ÏƒÏ„Î¿Î¹Ï‡ÎµÎ¯Ï‰Î½ Ï€ÏÏŒÏƒÎ²Î±ÏƒÎ®Ï‚ ÏƒÎ±Ï‚ ÏƒÏ„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î±).","pc_yprivacy_text_3":"ÎœÏ€Î¿ÏÎµÎ¯Ï„Îµ Î½Î± Î±Î»Î»Î¬Î¾ÎµÏ„Îµ Ï„Î¹Ï‚ Ï€ÏÎ¿Ï„Î¹Î¼Î®ÏƒÎµÎ¹Ï‚ ÏƒÎ±Ï‚ ÎºÎ±Î¹ Î½Î± Î¼Î·Î½ ÎµÏ€Î¹Ï„ÏÎ­ÏˆÎµÏ„Îµ ÏƒÎµ ÎºÎ¬Ï€Î¿Î¹Î¿Ï…Ï‚ Ï„ÏÏ€Î¿Ï…Ï‚ cookies Î½Î± Î±Ï€Î¿Î¸Î·ÎºÎµÏ…Ï„Î¿ÏÎ½ ÏƒÏ„Î¿Î½ Ï…Ï€Î¿Î»Î¿Î³Î¹ÏƒÏ„Î® ÏƒÎ±Ï‚ ÏŒÏƒÎ¿ Ï€ÎµÏÎ¹Î·Î³ÎµÎ¯ÏƒÏ„Îµ ÏƒÏ„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î¼Î±Ï‚. ÎœÏ€Î¿ÏÎµÎ¯Ï„Îµ ÎµÏ€Î¯ÏƒÎ·Ï‚ Î½Î± Î´Î¹Î±Î³ÏÎ¬ÏˆÎµÏ„Îµ Î¿Ï€Î¿Î¹Î±Î´Î®Ï€Î¿Ï„Îµ cookies ÎµÎ¯Î½Î±Î¹ Î®Î´Î· Î±Ï€Î¿Î¸Î·ÎºÎµÏ…Î¼Î­Î½Î± ÏƒÏ„Î¿Î½ Ï…Ï€Î¿Î»Î¿Î³Î¹ÏƒÏ„Î® ÏƒÎ±Ï‚, Î±Î»Î»Î¬ Î½Î± Î­Ï‡ÎµÏ„Îµ Ï…Ï€ÏŒÏˆÎ¹Î½ ÏŒÏ„Î¹ Î´Î¹Î±Î³ÏÎ¬Ï†Î¿Î½Ï„Î±Ï‚ cookies Î¼Ï€Î¿ÏÎµÎ¯ Î½Î± ÏƒÎ±Ï‚ Î±Ï€Î¿Ï„ÏÎ­ÏˆÎµÎ¹ Î±Ï€ÏŒ Ï„Î¿ Î½Î± Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î®ÏƒÎµÏ„Îµ Î¼Î­ÏÎ· Ï„Î·Ï‚ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î±Ï‚ Î¼Î±Ï‚.","pc_yprivacy_title":"Î— Î¹Î´Î¹Ï‰Ï„Î¹ÎºÏŒÏ„Î·Ï„Î¬ ÏƒÎ±Ï‚","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Î Î¿Î»Î¹Ï„Î¹ÎºÎ® Î±Ï€Î¿ÏÏÎ®Ï„Î¿Ï…</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"×¤×¢×™×œ","always_active":"×ª×ž×™×“ ×¤×¢×™×œ","impressum":"<a href=\'%s\' target=\'_blank\'>×¨×•×©×</a>","inactive":"×œ× ×¤×¢×™×œ","nb_agree":"×× ×™ ×ž×¡×›×™×/×”","nb_changep":"×©× ×” ××ª ×”×”×’×“×¨×•×ª ×©×œ×™","nb_ok":"××•×§×™×™","nb_reject":"×× ×™ ×ž×¡×¨×‘/×ª","nb_text":"×× ×• ×ž×©×ª×ž×©×™× ×‘×¢×•×’×™×•×ª ×•×‘×˜×›× ×•×œ×•×’×™×•×ª ×ž×¢×§×‘ ××—×¨×•×ª ×›×“×™ ×œ×©×¤×¨ ××ª ×—×•×•×™×ª ×”×’×œ×™×©×” ×©×œ×š ×‘××ª×¨ ×”××™× ×˜×¨× ×˜ ×©×œ× ×•, ×›×“×™ ×œ×”×¦×™×’ ×œ×š ×ª×•×›×Ÿ ×ž×•×ª×× ××™×©×™×ª ×•×ž×•×“×¢×•×ª ×ž×ž×•×§×“×•×ª, ×œ× ×ª×— ××ª ×”×ª× ×•×¢×” ×‘××ª×¨ ×©×œ× ×• ×•×œ×”×‘×™×Ÿ ×ž×”×™×›×Ÿ ×ž×’×™×¢×™× ×”×ž×‘×§×¨×™× ×©×œ× ×•.","nb_title":"×× ×• ×ž×©×ª×ž×©×™× ×‘×¢×•×’×™×•×ª","pc_fnct_text_1":"×¢×•×’×™×•×ª ×¤×•× ×§×¦×™×•× ×œ×™×•×ª","pc_fnct_text_2":"×¢×•×’×™×•×ª ××œ×” ×ž×©×ž×©×•×ª ×›×“×™ ×œ×¡×¤×§ ×œ×š ×—×•×•×™×” ×ž×•×ª××ž×ª ××™×©×™×ª ×™×•×ª×¨ ×‘××ª×¨ ×”××™× ×˜×¨× ×˜ ×©×œ× ×• ×•×›×“×™ ×œ×–×›×•×¨ ×‘×—×™×¨×•×ª ×©××ª×” ×¢×•×©×” ×›×©××ª×” ×ž×©×ª×ž×© ×‘××ª×¨ ×©×œ× ×•.","pc_fnct_text_3":"×œ×“×•×’×ž×”, ×× ×• ×¢×©×•×™×™× ×œ×”×©×ª×ž×© ×‘×¢×•×’×™×•×ª ×¤×•× ×§×¦×™×•× ×œ×™×•×ª ×›×“×™ ×œ×–×›×•×¨ ××ª ×”×¢×“×¤×•×ª ×”×©×¤×” ×©×œ×š ××• ×œ×–×›×•×¨ ××ª ×¤×¨×˜×™ ×”×”×ª×—×‘×¨×•×ª ×©×œ×š.","pc_minfo_text_1":"×ž×™×“×¢ × ×•×¡×£","pc_minfo_text_2":"×œ×›×œ ×©××œ×” ×‘× ×•×’×¢ ×œ×ž×“×™× ×™×•×ª ×©×œ× ×• ×‘× ×•×©× ×§×•×‘×¦×™ ×¢×•×’×™×•×ª ×•×”×‘×—×™×¨×•×ª ×©×œ×š, ×× × ×¦×•×¨ ××™×ª× ×• ×§×©×¨.","pc_minfo_text_3":"×œ×ž×™×“×¢ × ×•×¡×£, ×‘×§×¨ ×‘<a href=\'%s\' target=\'_blank\'>×ž×“×™× ×™×•×ª ×”×¤×¨×˜×™×•×ª</a> ×©×œ× ×•.","pc_save":"×©×ž×•×¨ ××ª ×”×”×¢×“×¤×•×ª ×©×œ×™","pc_sncssr_text_1":"×¢×•×’×™×•×ª × ×—×•×¦×•×ª ×‘×œ×‘×“","pc_sncssr_text_2":"×¢×•×’×™×•×ª ××œ×• ×—×™×•× ×™×•×ª ×›×“×™ ×œ×¡×¤×§ ×œ×š ×©×™×¨×•×ª×™× ×”×–×ž×™× ×™× ×“×¨×š ×”××ª×¨ ×©×œ× ×• ×•×›×“×™ ×œ××¤×©×¨ ×œ×š ×œ×”×©×ª×ž×© ×‘×ª×›×•× ×•×ª ×ž×¡×•×™×ž×•×ª ×©×œ ×”××ª×¨ ×©×œ× ×•.","pc_sncssr_text_3":"×œ×œ× ×¢×•×’×™×•×ª ××œ×”, ××™× × ×• ×™×›×•×œ×™× ×œ×¡×¤×§ ×œ×š ×©×™×¨×•×ª×™× ×ž×¡×•×™×ž×™× ×‘××ª×¨ ×©×œ× ×•.","pc_title":"×ž×¨×›×– ×”×¢×“×¤×•×ª ×¢×•×’×™×•×ª","pc_trck_text_1":"×¢×•×’×™×•×ª ×ž×¢×§×‘","pc_trck_text_2":"×¢×•×’×™×•×ª ××œ×• ×ž×©×ž×©×•×ª ×œ××™×¡×•×£ ×ž×™×“×¢ ×›×“×™ ×œ× ×ª×— ××ª ×”×ª× ×•×¢×” ×œ××ª×¨ ×©×œ× ×• ×•×›×™×¦×“ ×”×ž×‘×§×¨×™× ×ž×©×ª×ž×©×™× ×‘××ª×¨ ×©×œ× ×•.","pc_trck_text_3":"×œ×“×•×’×ž×”, ×§×•×‘×¦×™ ×¢×•×’×™×•×ª ××œ×” ×¢×©×•×™×™× ×œ×¢×§×•×‘ ××—×¨ ×“×‘×¨×™× ×›×’×•×Ÿ ×ž×©×š ×”×–×ž×Ÿ ×©××ª×” ×ž×‘×œ×” ×‘××ª×¨ ××• ×”×“×¤×™× ×©×‘×”× ××ª×” ×ž×‘×§×¨, ×ž×” ×©×¢×•×–×¨ ×œ× ×• ×œ×”×‘×™×Ÿ ×›×™×¦×“ ×× ×• ×™×›×•×œ×™× ×œ×©×¤×¨ ×¢×‘×•×¨×š ××ª ××ª×¨ ×”××™× ×˜×¨× ×˜ ×©×œ× ×•.","pc_trck_text_4":"×”×ž×™×“×¢ ×©× ××¡×£ ×‘××ž×¦×¢×•×ª ×¢×•×’×™×•×ª ×ž×¢×§×‘ ×•×‘×™×¦×•×¢×™× ××œ×” ××™× ×• ×ž×–×”×” ××£ ×ž×‘×§×¨ ×‘×•×“×“.","pc_trgt_text_1":"×¢×•×’×™×•×ª ×ž×™×§×•×“ ×•×¤×¨×¡×•×","pc_trgt_text_2":"×¢×•×’×™×•×ª ××œ×• ×ž×©×ž×©×•×ª ×œ×”×¦×’×ª ×¤×¨×¡×•×ž×•×ª ×©×¡×‘×™×¨ ×œ×”× ×™×— ×©×™×¢× ×™×™× ×• ××•×ª×š ×‘×”×ª×‘×¡×¡ ×¢×œ ×”×¨×’×œ×™ ×”×’×œ×™×©×” ×©×œ×š.","pc_trgt_text_3":"×§×•×‘×¦×™ ×¢×•×’×™×•×ª ××œ×”, ×›×¤×™ ×©×ž×•×¦×’×™× ×¢×œ ×™×“×™ ×¡×¤×§×™ ×”×ª×•×›×Ÿ ×•/××• ×”×¤×¨×¡×•× ×©×œ× ×•, ×¢×©×•×™×™× ×œ×©×œ×‘ ×ž×™×“×¢ ×©×”× ××¡×¤×• ×ž×”××ª×¨ ×©×œ× ×• ×¢× ×ž×™×“×¢ ××—×¨ ×©×”× ××¡×¤×• ×‘××•×¤×Ÿ ×¢×¦×ž××™ ×”×§×©×•×¨ ×œ×¤×¢×™×œ×•×™×•×ª ×©×œ ×“×¤×“×¤×Ÿ ×”××™× ×˜×¨× ×˜ ×©×œ×š ×‘×¨×—×‘×™ ×¨×©×ª ×”××ª×¨×™× ×©×œ×”×.","pc_trgt_text_4":"×× ×ª×‘×—×¨ ×œ×”×¡×™×¨ ××• ×œ×”×©×‘×™×ª ××ª ×§×•×‘×¦×™ ×”×ž×™×§×•×“ ××• ×§×•×‘×¦×™ ×”×¤×¨×¡×•× ×”×œ×œ×•, ×¢×“×™×™×Ÿ ×ª×¨××” ×¤×¨×¡×•×ž×•×ª ××š ×™×™×ª×›×Ÿ ×©×”×Ÿ ×œ× ×™×”×™×• ×¨×œ×•×•× ×˜×™×•×ª ×¢×‘×•×¨×š.","pc_yprivacy_text_1":"×”×¤×¨×˜×™×•×ª ×©×œ×š ×—×©×•×‘×” ×œ× ×•","pc_yprivacy_text_2":"×§×•×‘×¦×™ ×¢×•×’×™×•×ª ×”× ×§×‘×¦×™ ×˜×§×¡×˜ ×§×˜× ×™× ×ž××•×“ ×”×ž××•×—×¡× ×™× ×‘×ž×—×©×‘ ×©×œ×š ×›××©×¨ ××ª×” ×ž×‘×§×¨ ×‘××ª×¨. ×× ×• ×ž×©×ª×ž×©×™× ×‘×§×•×‘×¦×™ ×¢×•×’×™×•×ª ×œ×ž×’×•×•×Ÿ ×ž×˜×¨×•×ª ×•×›×“×™ ×œ×©×¤×¨ ××ª ×”×—×•×•×™×” ×”×ž×§×•×•× ×ª ×©×œ×š ×‘××ª×¨ ×”××™× ×˜×¨× ×˜ ×©×œ× ×• (×œ×“×•×’×ž×”, ×›×“×™ ×œ×–×›×•×¨ ××ª ×¤×¨×˜×™ ×”×›× ×™×¡×” ×œ×—×©×‘×•×Ÿ ×©×œ×š).","pc_yprivacy_text_3":"××ª×” ×™×›×•×œ ×œ×©× ×•×ª ××ª ×”×”×¢×“×¤×•×ª ×©×œ×š ×•×œ×“×—×•×ª ×¡×•×’×™× ×ž×¡×•×™×ž×™× ×©×œ ×¢×•×’×™×•×ª ×©×™×©×ž×¨×• ×‘×ž×—×©×‘ ×©×œ×š ×‘×–×ž×Ÿ ×”×’×œ×™×©×” ×‘××ª×¨ ×©×œ× ×•. ××ª×” ×™×›×•×œ ×’× ×œ×”×¡×™×¨ ×§×•×‘×¦×™ ×¢×•×’×™×•×ª ×©×›×‘×¨ ×ž××•×—×¡× ×™× ×‘×ž×—×©×‘ ×©×œ×š, ××š ×–×›×•×¨ ×©×ž×—×™×§×ª ×§×•×‘×¦×™ ×¢×•×’×™×•×ª ×¢×œ×•×œ×” ×œ×ž× ×•×¢ ×ž×ž×š ×œ×”×©×ª×ž×© ×‘×—×œ×§×™× ×ž×”××ª×¨ ×©×œ× ×•.","pc_yprivacy_title":"×”×¤×¨×˜×™×•×ª ×©×œ×š","privacy_policy":"<a href=\'%s\' target=\'_blank\'>×ž×“×™× ×™×•×ª ×¤×¨×˜×™×•×ª</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"ÐÐºÑ‚Ð¸Ð²Ð½Ð¾","always_active":"Ð¡ÐµÐºÐ¾Ð³Ð°Ñˆ Ð°ÐºÑ‚Ð¸Ð²Ð½Ð¾","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"ÐÐµÐ°ÐºÑ‚Ð¸Ð²Ð½Ð¾","nb_agree":"Ð¡Ðµ ÑÐ¾Ð³Ð»Ð°ÑÑƒÐ²Ð°Ð¼","nb_changep":"ÐŸÑ€Ð¾Ð¼ÐµÐ½Ð¸ Ð³Ð¸ Ð¼Ð¾Ð¸Ñ‚Ðµ Ð¿Ñ€ÐµÑ„ÐµÑ€ÐµÐ½Ñ†Ð¸Ð¸","nb_ok":"Ð¡Ðµ ÑÐ¾Ð³Ð»Ð°ÑÑƒÐ²Ð°Ð¼","nb_reject":"ÐžÐ´Ð±Ð¸Ð²Ð°Ð¼","nb_text":"ÐÐ¸Ðµ ÐºÐ¾Ñ€Ð¸ÑÑ‚Ð¸Ð¼Ðµ ÐºÐ¾Ð»Ð°Ñ‡Ð¸ÑšÐ° Ð¸ Ð´Ñ€ÑƒÐ³Ð¸ Ñ‚ÐµÑ…Ð½Ð¾Ð»Ð¾Ð³Ð¸Ð¸ Ð·Ð° ÑÐ»ÐµÐ´ÐµÑšÐµ Ð·Ð° Ð´Ð° Ð³Ð¾ Ð¿Ð¾Ð´Ð¾Ð±Ñ€Ð¸Ð¼Ðµ Ð²Ð°ÑˆÐµÑ‚Ð¾ Ð¸ÑÐºÑƒÑÑ‚Ð²Ð¾ ÑÐ¾ Ð¿Ñ€ÐµÐ»Ð¸ÑÑ‚ÑƒÐ²Ð°ÑšÐµÑ‚Ð¾ Ð½Ð° Ð½Ð°ÑˆÐ°Ñ‚Ð° Ð²ÐµÐ± ÑÑ‚Ñ€Ð°Ð½Ð°, Ð·Ð° Ð´Ð° Ð²Ð¸ Ð¿Ñ€Ð¸ÐºÐ°Ð¶ÐµÐ¼Ðµ Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»Ð¸Ð·Ð¸Ñ€Ð°Ð½Ð° ÑÐ¾Ð´Ñ€Ð¶Ð¸Ð½Ð° Ð¸ Ñ‚Ð°Ñ€Ð³ÐµÑ‚Ð¸Ñ€Ð°Ð½Ð¸ Ñ€ÐµÐºÐ»Ð°Ð¼Ð¸, Ð´Ð° Ð³Ð¾ Ð°Ð½Ð°Ð»Ð¸Ð·Ð¸Ñ€Ð°Ð¼Ðµ ÑÐ¾Ð¾Ð±Ñ€Ð°ÑœÐ°Ñ˜Ð¾Ñ‚ Ð½Ð° Ð½Ð°ÑˆÐ°Ñ‚Ð° Ð²ÐµÐ± ÑÑ‚Ñ€Ð°Ð½Ð° Ð¸ Ð´Ð° Ñ€Ð°Ð·Ð±ÐµÑ€ÐµÐ¼Ðµ Ð¾Ð´ ÐºÐ°Ð´Ðµ Ð´Ð¾Ð°Ñ“Ð°Ð°Ñ‚ Ð½Ð°ÑˆÐ¸Ñ‚Ðµ Ð¿Ð¾ÑÐµÑ‚Ð¸Ñ‚ÐµÐ»Ð¸.","nb_title":"ÐÐ¸Ðµ ÐºÐ¾Ñ€Ð¸ÑÑ‚Ð¸Ð¼Ðµ ÐºÐ¾Ð»Ð°Ñ‡Ð¸ÑšÐ°","pc_fnct_text_1":"ÐšÐ¾Ð»Ð°Ñ‡Ð¸ÑšÐ° Ð·Ð° Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¾Ð½Ð°Ð»Ð½Ð¾ÑÑ‚","pc_fnct_text_2":"ÐžÐ²Ð¸Ðµ ÐºÐ¾Ð»Ð°Ñ‡Ð¸ÑšÐ° ÑÐµ ÐºÐ¾Ñ€Ð¸ÑÑ‚Ð°Ñ‚ Ð·Ð° Ð´Ð° Ð²Ð¸ Ð¾Ð²Ð¾Ð·Ð¼Ð¾Ð¶Ð°Ñ‚ Ð¿Ð¾Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»Ð¸Ð·Ð¸Ñ€Ð°Ð½Ð¾ Ð¸ÑÐºÑƒÑÑ‚Ð²Ð¾ Ð½Ð° Ð½Ð°ÑˆÐ°Ñ‚Ð° Ð²ÐµÐ± ÑÑ‚Ñ€Ð°Ð½Ð° Ð¸ Ð´Ð° Ð³Ð¸ Ð·Ð°Ð¿Ð¾Ð¼Ð½Ð°Ñ‚ Ð¸Ð·Ð±Ð¾Ñ€Ð¸Ñ‚Ðµ ÑˆÑ‚Ð¾ Ð³Ð¸ Ð¿Ñ€Ð°Ð²Ð¸Ñ‚Ðµ ÐºÐ¾Ð³Ð° Ñ˜Ð° ÐºÐ¾Ñ€Ð¸ÑÑ‚Ð¸Ñ‚Ðµ Ð½Ð°ÑˆÐ°Ñ‚Ð° Ð²ÐµÐ± ÑÑ‚Ñ€Ð°Ð½Ð°.","pc_fnct_text_3":"ÐÐ° Ð¿Ñ€Ð¸Ð¼ÐµÑ€, Ð¼Ð¾Ð¶Ðµ Ð´Ð° ÐºÐ¾Ñ€Ð¸ÑÑ‚Ð¸Ð¼Ðµ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¾Ð½Ð°Ð»Ð½Ð¸ ÐºÐ¾Ð»Ð°Ñ‡Ð¸ÑšÐ° Ð·Ð° Ð´Ð° Ð³Ð¸ Ð·Ð°Ð¿Ð¾Ð¼Ð½Ð¸Ð¼Ðµ Ð²Ð°ÑˆÐ¸Ñ‚Ðµ Ñ˜Ð°Ð·Ð¸Ñ‡Ð½Ð¸ Ð¿Ñ€ÐµÑ„ÐµÑ€ÐµÐ½Ñ†Ð¸Ð¸ Ð¸Ð»Ð¸ Ð´Ð° Ð³Ð¸ Ð·Ð°Ð¿Ð¾Ð¼Ð½Ð¸Ð¼Ðµ Ð²Ð°ÑˆÐ¸Ñ‚Ðµ Ð´ÐµÑ‚Ð°Ð»Ð¸ Ð·Ð° Ð½Ð°Ñ˜Ð°Ð²ÑƒÐ²Ð°ÑšÐµ.","pc_minfo_text_1":"ÐŸÐ¾Ð²ÐµÑœÐµ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ð¸","pc_minfo_text_2":"Ð—Ð° Ð±Ð¸Ð»Ð¾ ÐºÐ°ÐºÐ²Ð¸ Ð¿Ñ€Ð°ÑˆÐ°ÑšÐ° Ð²Ð¾ Ð²Ñ€ÑÐºÐ° ÑÐ¾ Ð½Ð°ÑˆÐ°Ñ‚Ð° Ð¿Ð¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° Ð·Ð° ÐºÐ¾Ð»Ð°Ñ‡Ð¸ÑšÐ° Ð¸ Ð²Ð°ÑˆÐ¸Ð¾Ñ‚ Ð¸Ð·Ð±Ð¾Ñ€, Ð²Ðµ Ð¼Ð¾Ð»Ð¸Ð¼Ðµ ÐºÐ¾Ð½Ñ‚Ð°ÐºÑ‚Ð¸Ñ€Ð°Ñ˜Ñ‚Ðµ Ð½Ðµ.","pc_minfo_text_3":"Ð—Ð° Ð´Ð° Ð´Ð¾Ð·Ð½Ð°ÐµÑ‚Ðµ Ð¿Ð¾Ð²ÐµÑœÐµ, Ð²Ðµ Ð¼Ð¾Ð»Ð¸Ð¼Ðµ Ð¿Ð¾ÑÐµÑ‚ÐµÑ‚Ðµ Ñ˜Ð° Ð½Ð°ÑˆÐ°Ñ‚Ð° <a href=\'%s\' target=\'_blank\'>ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° Ð·Ð° ÐŸÑ€Ð¸Ð²Ð°Ñ‚Ð½Ð¾ÑÑ‚</a>.","pc_save":"Ð—Ð°Ñ‡ÑƒÐ²Ð°Ñ˜ Ð³Ð¸ Ð¼Ð¾Ð¸Ñ‚Ðµ Ð¿Ñ€ÐµÑ„ÐµÑ€ÐµÐ½Ñ†Ð¸Ð¸","pc_sncssr_text_1":"Ð¡Ñ‚Ñ€Ð¾Ð³Ð¾ Ð½ÐµÐ¾Ð¿Ñ…Ð¾Ð´Ð½Ð¸ ÐºÐ¾Ð»Ð°Ñ‡Ð¸ÑšÐ°","pc_sncssr_text_2":"ÐžÐ²Ð¸Ðµ ÐºÐ¾Ð»Ð°Ñ‡Ð¸ÑšÐ° ÑÐµ Ð¾Ð´ ÑÑƒÑˆÑ‚Ð¸Ð½ÑÐºÐ¾ Ð·Ð½Ð°Ñ‡ÐµÑšÐµ Ð·Ð° Ð´Ð° Ð²Ð¸ Ð¾Ð²Ð¾Ð·Ð¼Ð¾Ð¶Ð°Ñ‚ ÑƒÑÐ»ÑƒÐ³Ð¸ Ð´Ð¾ÑÑ‚Ð°Ð¿Ð½Ð¸ Ð¿Ñ€ÐµÐºÑƒ Ð½Ð°ÑˆÐ°Ñ‚Ð° Ð²ÐµÐ± ÑÑ‚Ñ€Ð°Ð½Ð°, Ð¸ Ð´Ð° Ð²Ð¸ Ð¾Ð²Ð¾Ð·Ð¼Ð¾Ð¶Ð°Ñ‚ Ð´Ð° ÐºÐ¾Ñ€Ð¸ÑÑ‚Ð¸Ñ‚Ðµ Ð¾Ð´Ñ€ÐµÐ´ÐµÐ½Ð¸ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¸ Ð½Ð° Ð½Ð°ÑˆÐ°Ñ‚Ð° Ð²ÐµÐ± ÑÑ‚Ñ€Ð°Ð½Ð°.","pc_sncssr_text_3":"Ð‘ÐµÐ· Ð¾Ð²Ð¸Ðµ ÐºÐ¾Ð»Ð°Ñ‡Ð¸ÑšÐ°, Ð½Ð¸Ðµ Ð½Ðµ Ð¼Ð¾Ð¶ÐµÐ¼Ðµ Ð´Ð° Ð²Ð¸ Ð¾Ð±ÐµÐ·Ð±ÐµÐ´Ð¸Ð¼Ðµ Ð¾Ð´Ñ€ÐµÐ´ÐµÐ½Ð¸ ÑƒÑÐ»ÑƒÐ³Ð¸ Ð½Ð° Ð½Ð°ÑˆÐ°Ñ‚Ð° Ð²ÐµÐ± ÑÑ‚Ñ€Ð°Ð½Ð°.","pc_title":"Ð¦ÐµÐ½Ñ‚Ð°Ñ€ Ð·Ð° Ð¿Ñ€ÐµÑ„ÐµÑ€ÐµÐ½Ñ†Ð¸ Ð·Ð° ÐºÐ¾Ð»Ð°Ñ‡Ð¸ÑšÐ°","pc_trck_text_1":"ÐšÐ¾Ð»Ð°Ñ‡Ð¸ÑšÐ° Ð·Ð° ÑÐ»ÐµÐ´ÐµÑšÐµ","pc_trck_text_2":"ÐžÐ²Ð¸Ðµ ÐºÐ¾Ð»Ð°Ñ‡Ð¸ÑšÐ° ÑÐµ ÐºÐ¾Ñ€Ð¸ÑÑ‚Ð°Ñ‚ Ð·Ð° ÑÐ¾Ð±Ð¸Ñ€Ð°ÑšÐµ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ð¸ Ð·Ð° Ð°Ð½Ð°Ð»Ð¸Ð·Ð° Ð½Ð° ÑÐ¾Ð¾Ð±Ñ€Ð°ÑœÐ°Ñ˜Ð¾Ñ‚ ÐºÐ¾Ð½ Ð½Ð°ÑˆÐ°Ñ‚Ð° Ð²ÐµÐ± ÑÑ‚Ñ€Ð°Ð½Ð°, Ð¸ Ð·Ð° Ñ‚Ð¾Ð° ÐºÐ°ÐºÐ¾ Ð¿Ð¾ÑÐµÑ‚Ð¸Ñ‚ÐµÐ»Ð¸Ñ‚Ðµ Ñ˜Ð° ÐºÐ¾Ñ€Ð¸ÑÑ‚Ð°Ñ‚ Ð½Ð°ÑˆÐ°Ñ‚Ð° Ð²ÐµÐ± ÑÑ‚Ñ€Ð°Ð½Ð°.","pc_trck_text_3":"ÐžÐ²Ð¸Ðµ ÐºÐ¾Ð»Ð°Ñ‡Ð¸ÑšÐ° Ð¼Ð¾Ð¶Ðµ Ð´Ð° ÑÐ»ÐµÐ´Ð°Ñ‚ Ñ€Ð°Ð±Ð¾Ñ‚Ð¸ ÐºÐ°ÐºÐ¾ Ð½Ð° Ð¿Ñ€Ð¸Ð¼ÐµÑ€, ÐºÐ¾Ð»ÐºÑƒ Ð²Ñ€ÐµÐ¼Ðµ Ð¿Ð¾Ð¼Ð¸Ð½ÑƒÐ²Ð°Ñ‚Ðµ Ð½Ð° Ð²ÐµÐ± ÑÑ‚Ñ€Ð°Ð½Ð°Ñ‚Ð°, Ð¸Ð»Ð¸ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð¸Ñ‚Ðµ ÑˆÑ‚Ð¾ Ð³Ð¸ Ð¿Ð¾ÑÐµÑ‚ÑƒÐ²Ð°Ñ‚Ðµ ÑˆÑ‚Ð¾ Ð½Ð¸ Ð¿Ð¾Ð¼Ð°Ð³Ð° Ð´Ð° Ñ€Ð°Ð·Ð±ÐµÑ€ÐµÐ¼Ðµ ÐºÐ°ÐºÐ¾ Ð¼Ð¾Ð¶ÐµÐ¼Ðµ Ð´Ð° Ñ˜Ð° Ð¿Ð¾Ð´Ð¾Ð±Ñ€Ð¸Ð¼Ðµ Ð½Ð°ÑˆÐ°Ñ‚Ð° Ð²ÐµÐ± ÑÑ‚Ñ€Ð°Ð½Ð° Ð·Ð° Ð²Ð°Ñ.","pc_trck_text_4":"Ð˜Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ð¸Ñ‚Ðµ ÑÐ¾Ð±Ñ€Ð°Ð½Ð¸ Ð¿Ñ€ÐµÐºÑƒ Ð¾Ð²Ð¸Ðµ ÐºÐ¾Ð»Ð°Ñ‡Ð¸ÑšÐ° Ð·Ð° ÑÐ»ÐµÐ´ÐµÑšÐµ Ð¸ Ð¿ÐµÑ€Ñ„Ð¾Ñ€Ð¼Ð°Ð½ÑÐ¸ Ð½Ðµ Ð¸Ð´ÐµÐ½Ñ‚Ð¸Ñ„Ð¸ÐºÑƒÐ²Ð°Ð°Ñ‚ Ð¿Ð¾ÐµÐ´Ð¸Ð½ÐµÑ‡Ð½Ð¸ Ð¿Ð¾ÑÐµÑ‚Ð¸Ñ‚ÐµÐ»Ð¸.","pc_trgt_text_1":"ÐšÐ¾Ð»Ð°Ñ‡Ð¸ÑšÐ° Ð·Ð° Ñ‚Ð°Ñ€Ð³ÐµÑ‚Ð¸Ñ€Ð°ÑšÐµ Ð¸ Ñ€ÐµÐºÐ»Ð°Ð¼Ð¸Ñ€Ð°ÑšÐµ","pc_trgt_text_2":"ÐžÐ²Ð¸Ðµ ÐºÐ¾Ð»Ð°Ñ‡Ð¸ÑšÐ° ÑÐµ ÐºÐ¾Ñ€Ð¸ÑÑ‚Ð°Ñ‚ Ð·Ð° Ð¿Ñ€Ð¸ÐºÐ°Ð¶ÑƒÐ²Ð°ÑšÐµ Ñ€ÐµÐºÐ»Ð°Ð¼Ð¸ ÑˆÑ‚Ð¾ Ð½Ð°Ñ˜Ð²ÐµÑ€Ð¾Ñ˜Ð°Ñ‚Ð½Ð¾ ÑœÐµ Ð²Ðµ Ð¸Ð½Ñ‚ÐµÑ€ÐµÑÐ¸Ñ€Ð°Ð°Ñ‚ Ð²Ñ€Ð· Ð¾ÑÐ½Ð¾Ð²Ð° Ð½Ð° Ð²Ð°ÑˆÐ¸Ñ‚Ðµ Ð½Ð°Ð²Ð¸ÐºÐ¸ Ð½Ð° Ð¿Ñ€ÐµÐ»Ð¸ÑÑ‚ÑƒÐ²Ð°ÑšÐµ.","pc_trgt_text_3":"ÐžÐ²Ð¸Ðµ ÐºÐ¾Ð»Ð°Ñ‡Ð¸ÑšÐ°, ÑÐµÑ€Ð²Ð¸Ñ€Ð°Ð½Ð¸ Ð¾Ð´ Ð½Ð°ÑˆÐ°Ñ‚Ð° ÑÐ¾Ð´Ñ€Ð¶Ð¸Ð½Ð° Ð¸/Ð¸Ð»Ð¸ Ð¿Ñ€Ð¾Ð²Ð°Ñ˜Ð´ÐµÑ€Ð¸ Ð·Ð° Ñ€ÐµÐºÐ»Ð°Ð¼Ð¸Ñ€Ð°ÑšÐµ, Ð¼Ð¾Ð¶Ðµ Ð´Ð° Ð³Ð¸ ÐºÐ¾Ð¼Ð±Ð¸Ð½Ð¸Ñ€Ð°Ð°Ñ‚ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ð¸Ñ‚Ðµ ÑˆÑ‚Ð¾ Ð³Ð¸ ÑÐ¾Ð±Ñ€Ð°Ð»Ðµ Ð¾Ð´ Ð½Ð°ÑˆÐ°Ñ‚Ð° Ð²ÐµÐ± ÑÑ‚Ñ€Ð°Ð½Ð° ÑÐ¾ Ð´Ñ€ÑƒÐ³Ð¸ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ð¸ ÑˆÑ‚Ð¾ Ð½ÐµÐ·Ð°Ð²Ð¸ÑÐ½Ð¾ Ð³Ð¸ ÑÐ¾Ð±Ñ€Ð°Ð»Ðµ Ð²Ð¾ Ð²Ñ€ÑÐºÐ° ÑÐ¾ Ð°ÐºÑ‚Ð¸Ð²Ð½Ð¾ÑÑ‚Ð¸Ñ‚Ðµ Ð½Ð° Ð²Ð°ÑˆÐ¸Ð¾Ñ‚ Ð²ÐµÐ±-Ð¿Ñ€ÐµÐ»Ð¸ÑÑ‚ÑƒÐ²Ð°Ñ‡ Ð½Ð¸Ð· Ð½Ð¸Ð²Ð½Ð°Ñ‚Ð° Ð¼Ñ€ÐµÐ¶Ð° Ð½Ð° Ð²ÐµÐ± ÑÑ‚Ñ€Ð°Ð½Ð¸.","pc_trgt_text_4":"ÐÐºÐ¾ Ð¸Ð·Ð±ÐµÑ€ÐµÑ‚Ðµ Ð´Ð° Ð³Ð¸ Ð¾Ñ‚ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ‚Ðµ Ð¸Ð»Ð¸ Ð¾Ð½ÐµÐ²Ð¾Ð·Ð¼Ð¾Ð¶Ð¸Ñ‚Ðµ Ð¾Ð²Ð¸Ðµ ÐºÐ¾Ð»Ð°Ñ‡Ð¸ÑšÐ° Ð·Ð° Ñ‚Ð°Ñ€Ð³ÐµÑ‚Ð¸Ñ€Ð°ÑšÐµ Ð¸Ð»Ð¸ Ñ€ÐµÐºÐ»Ð°Ð¼Ð¸Ñ€Ð°ÑšÐµ, ÑÃ¨ ÑƒÑˆÑ‚Ðµ ÑœÐµ Ð³Ð»ÐµÐ´Ð°Ñ‚Ðµ Ñ€ÐµÐºÐ»Ð°Ð¼Ð¸, Ð½Ð¾ Ñ‚Ð¸Ðµ Ð¼Ð¾Ð¶ÐµÐ±Ð¸ Ð½ÐµÐ¼Ð° Ð´Ð° Ð±Ð¸Ð´Ð°Ñ‚ Ñ€ÐµÐ»ÐµÐ²Ð°Ð½Ñ‚Ð½Ð¸ Ð·Ð° Ð²Ð°Ñ.","pc_yprivacy_text_1":"Ð’Ð°ÑˆÐ°Ñ‚Ð° Ð¿Ñ€Ð¸Ð²Ð°Ñ‚Ð½Ð¾ÑÑ‚ Ðµ Ð²Ð°Ð¶Ð½Ð° Ð·Ð° Ð½Ð°Ñ","pc_yprivacy_text_2":"ÐšÐ¾Ð»Ð°Ñ‡Ð¸ÑšÐ°Ñ‚Ð° ÑÐµ Ð¼Ð½Ð¾Ð³Ñƒ Ð¼Ð°Ð»Ð¸ Ñ‚ÐµÐºÑÑ‚ÑƒÐ°Ð»Ð½Ð¸ Ð´Ð°Ñ‚Ð¾Ñ‚ÐµÐºÐ¸ ÑˆÑ‚Ð¾ ÑÐµ ÑÐºÐ»Ð°Ð´Ð¸Ñ€Ð°Ð°Ñ‚ Ð½Ð° Ð²Ð°ÑˆÐ¸Ð¾Ñ‚ ÐºÐ¾Ð¼Ð¿Ñ˜ÑƒÑ‚ÐµÑ€ ÐºÐ¾Ð³Ð° Ð¿Ð¾ÑÐµÑ‚ÑƒÐ²Ð°Ñ‚Ðµ Ð²ÐµÐ± ÑÑ‚Ñ€Ð°Ð½Ð°. ÐÐ¸Ðµ ÐºÐ¾Ñ€Ð¸ÑÑ‚Ð¸Ð¼Ðµ ÐºÐ¾Ð»Ð°Ñ‡Ð¸ÑšÐ° Ð·Ð° Ñ€Ð°Ð·Ð»Ð¸Ñ‡Ð½Ð¸ Ñ†ÐµÐ»Ð¸ Ð¸ Ð·Ð° Ð´Ð° Ð³Ð¾ Ð¿Ð¾Ð´Ð¾Ð±Ñ€Ð¸Ð¼Ðµ Ð²Ð°ÑˆÐµÑ‚Ð¾ Ð¾Ð½Ð»Ð°Ñ˜Ð½ Ð¸ÑÐºÑƒÑÑ‚Ð²Ð¾ Ð½Ð° Ð½Ð°ÑˆÐ°Ñ‚Ð° Ð²ÐµÐ± ÑÑ‚Ñ€Ð°Ð½Ð° (Ð½Ð° Ð¿Ñ€Ð¸Ð¼ÐµÑ€, Ð·Ð° Ð´Ð° Ð³Ð¸ Ð·Ð°Ð¿Ð¾Ð¼Ð½Ð¸Ð¼Ðµ Ð´ÐµÑ‚Ð°Ð»Ð¸Ñ‚Ðµ Ð·Ð° Ð½Ð°Ñ˜Ð°Ð²ÑƒÐ²Ð°ÑšÐµ Ð½Ð° Ð²Ð°ÑˆÐ°Ñ‚Ð° ÑÐ¼ÐµÑ‚ÐºÐ°).","pc_yprivacy_text_3":"ÐœÐ¾Ð¶ÐµÑ‚Ðµ Ð´Ð° Ð³Ð¸ Ð¿Ñ€Ð¾Ð¼ÐµÐ½Ð¸Ñ‚Ðµ Ð²Ð°ÑˆÐ¸Ñ‚Ðµ Ð¿Ð°Ñ€Ð°Ð¼ÐµÑ‚Ñ€Ð¸ Ð¸ Ð´Ð° Ð¾Ð´Ð±Ð¸ÐµÑ‚Ðµ Ð¾Ð´Ñ€ÐµÐ´ÐµÐ½Ð¸ Ð²Ð¸Ð´Ð¾Ð²Ð¸ ÐºÐ¾Ð»Ð°Ñ‡Ð¸ÑšÐ° Ð´Ð° ÑÐµ ÑÐºÐ»Ð°Ð´Ð¸Ñ€Ð°Ð°Ñ‚ Ð½Ð° Ð²Ð°ÑˆÐ¸Ð¾Ñ‚ ÐºÐ¾Ð¼Ð¿Ñ˜ÑƒÑ‚ÐµÑ€ Ð´Ð¾Ð´ÐµÐºÐ° Ñ˜Ð° Ð¿Ñ€ÐµÐ»Ð¸ÑÑ‚ÑƒÐ²Ð°Ñ‚Ðµ Ð½Ð°ÑˆÐ°Ñ‚Ð° Ð²ÐµÐ± ÑÑ‚Ñ€Ð°Ð½Ð°. ÐœÐ¾Ð¶ÐµÑ‚Ðµ Ð¸ÑÑ‚Ð¾ Ñ‚Ð°ÐºÐ° Ð´Ð° Ð³Ð¸ Ð¾Ñ‚ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ‚Ðµ ÑÐ¸Ñ‚Ðµ ÐºÐ¾Ð»Ð°Ñ‡Ð¸ÑšÐ° ÑˆÑ‚Ð¾ ÑÐµ Ð²ÐµÑœÐµ Ð·Ð°Ñ‡ÑƒÐ²Ð°Ð½Ð¸ Ð½Ð° Ð²Ð°ÑˆÐ¸Ð¾Ñ‚ ÐºÐ¾Ð¼Ð¿Ñ˜ÑƒÑ‚ÐµÑ€, Ð½Ð¾ Ð¸Ð¼Ð°Ñ˜Ñ‚Ðµ Ð²Ð¾ Ð¿Ñ€ÐµÐ´Ð²Ð¸Ð´ Ð´ÐµÐºÐ° Ð±Ñ€Ð¸ÑˆÐµÑšÐµÑ‚Ð¾ ÐºÐ¾Ð»Ð°Ñ‡Ð¸ÑšÐ° Ð¼Ð¾Ð¶Ðµ Ð´Ð° Ð²Ðµ ÑÐ¿Ñ€ÐµÑ‡Ð¸ Ð´Ð° ÐºÐ¾Ñ€Ð¸ÑÑ‚Ð¸Ñ‚Ðµ Ð´ÐµÐ»Ð¾Ð²Ð¸ Ð¾Ð´ Ð½Ð°ÑˆÐ°Ñ‚Ð° Ð²ÐµÐ± ÑÑ‚Ñ€Ð°Ð½Ð°.","pc_yprivacy_title":"Ð’Ð°ÑˆÐ°Ñ‚Ð° Ð¿Ñ€Ð¸Ð²Ð°Ñ‚Ð½Ð¾ÑÑ‚","privacy_policy":"<a href=\'%s\' target=\'_blank\'>ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° Ð·Ð° ÐŸÑ€Ð¸Ð²Ð°Ñ‚Ð½Ð¾ÑÑ‚</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"Gweithredol","always_active":"Yn weithredol bob tro","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Anweithredol","nb_agree":"Rwy\'n cytuno","nb_changep":"Newid fy newisiadau","nb_ok":"Iawn","nb_reject":"Rwy\'n gwrthod","nb_text":"Rydym yn defnyddio cwcis a thechnolegau tracio eraill i wella eich profiad o bori ar ein gwefan, i ddangos cynnwys wedi ei bersonoli a hysbysebion wedi\'u targedu, i ddadansoddi traffig ar ein gwefan ac i ddeall o ble daw ein hymwelwyr.","nb_title":"Rydym yn defnyddio cwcis","pc_fnct_text_1":"Cwcis swyddogaeth","pc_fnct_text_2":"Mae\'r cwcis yma yn cael eu defnyddio i ddarparu profiad mwy personol ichi ar ein gwefan, ac i gofio dewisiadau a wnewch wrth ddefnyddio ein gwefan.","pc_fnct_text_3":"Er enghraifft, gallem ddefnyddio cwcis swyddogaeth i gofio\'ch dewis iaith neu gofio\'ch manylion mewngofnodi.","pc_minfo_text_1":"Rhagor o wybodaeth","pc_minfo_text_2":"Os oes gennych chi unrhyw ymholiadau yn ymwneud Ã¢\'n polisi cwcis a\'ch dewisiadau, a wnewch chi gysylltu Ã¢ ni.","pc_minfo_text_3":"I ganfod mwy, ewch at ein <a href=\'%s\' target=\'_blank\'>PolasaÃ­ PrÃ­obhÃ¡ideachta</a>.","pc_save":"Cadw fy newisiadau","pc_sncssr_text_1":"Cwcis hollol hanfodol","pc_sncssr_text_2":"Mae\'r cwcis yma yn hanfodol er mwyn ichi dderbyn gwasanaethau drwy ein gwefan a\'ch galluogi i ddefnyddio nodweddion penodol ar ein gwefan.","pc_sncssr_text_3":"Heb y cwcis yma, ni fedrwn ddarparu rhai gwasanaethau penodol ichi ar ein gwefan.","pc_title":"Canolfan Dewisiadau Cwcis","pc_trck_text_1":"Cwcis tracio a pherfformiad","pc_trck_text_2":"Mae\'r cwcis yma yn cael eu defnyddio i gasglu gwybodaeth a dadansoddi traffig i\'n gwefan a sut mae ymwelwyr yn defnyddio\'n gwefan.","pc_trck_text_3":"Er enghraifft, gall y cwcis yma dracio faint o amser rydych yn ei dreulio ar y wefan neu\'r tudalennau rydych yn ymweld Ã¢ hwy a\'n cynorthwyo i ddeall sut y gallwn wella ein gwefan ar eich cyfer.","pc_trck_text_4":"Nid yw\'r wybodaeth a gesglir drwy\'r cwcis tracio a pherfformiad yn adnabod unrhyw ymwelydd unigol.","pc_trgt_text_1":"Cwcis targedu a hysbysebu","pc_trgt_text_2":"Mae\'r cwcis yma yn cael eu defnyddio i ddangos hysbysebion sydd yn debygol o fod o ddiddordeb i chi yn seiliedig ar eich arferion pori.","pc_trgt_text_3":"Gall y cwcis yma, fel y\'u gweinyddir gan ein darparwyr cynnwys a/neu hysbysebion, gyfuno gwybodaeth a gasglwyd ganddynt o\'n gwefan gyda gwybodaeth arall maent wedi ei chasglu\'n annibynnol yn seiliedig ar eich gweithgareddau pori ar y rhyngrwyd ar draws eu rhwydweithiau o wefannau.","pc_trgt_text_4":"Os byddwch yn dewis tynnu neu atal y cwcis targedu neu hysbysebu yma, byddwch yn parhau i weld hysbysebion ond mae\'n bosib na fyddant yn berthnasol i chi.","pc_yprivacy_text_1":"Mae eich preifatrwydd yn bwysig i ni","pc_yprivacy_text_2":"Ffeiliau testun bach eu maint yw cwcis sydd yn cael eu storio ar eich cyfrifiadur wrth ichi ymweld Ã¢ gwefan. Rydym yn defnyddio cwcis i sawl diben ac i wella eich profiad ar-lein ar ein gwefan (er enghraifft, cofio eich manylion mewngofnodi i\'ch cyfrif).","pc_yprivacy_text_3":"Gallwch newid eich dewisiadau ac atal rhai mathau o gwcis rhag cael eu storio ar eich cyfrifiadur. Gallwch hefyd dynnu unrhyw gwcis sydd eisoes wedi eu storio ar eich cyfrifiadur, ond cofiwch y gall.","pc_yprivacy_title":"Eich preifatrwydd","privacy_policy":"<a href=\'%s\' target=\'_blank\'>PolasaÃ­ PrÃ­obhÃ¡ideachta</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"ã‚¢ã‚¯ãƒ†ã‚£ãƒ–","always_active":"å¸¸ã«ã‚¢ã‚¯ãƒ†ã‚£ãƒ–","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"åœæ­¢ä¸­","nb_agree":"åŒæ„","nb_changep":"è¨­å®šå¤‰æ›´","nb_ok":"æ‰¿è«¾","nb_reject":"æ‹’å¦","nb_text":"è¨ªå•è€…ã®å½“ã‚¦ã‚§ãƒ–ã‚µã‚¤ãƒˆã®é–²è¦§ä½“é¨“ã‚’å‘ä¸Šã•ã›ã‚‹ãŸã‚ã€ãƒ‘ãƒ¼ã‚½ãƒŠãƒ©ã‚¤ã‚ºã•ã‚ŒãŸã‚³ãƒ³ãƒ†ãƒ³ãƒ„ã‚„ã‚¿ãƒ¼ã‚²ãƒƒãƒˆåºƒå‘Šã‚’è¡¨ç¤ºã™ã‚‹ãŸã‚ã€å½“ã‚¦ã‚§ãƒ–ã‚µã‚¤ãƒˆã®ãƒˆãƒ©ãƒ•ã‚£ãƒƒã‚¯ã‚’åˆ†æžã™ã‚‹ãŸã‚ã€ãŠã‚ˆã³å½“ã‚¦ã‚§ãƒ–ã‚µã‚¤ãƒˆã¸ã®è¨ªå•è€…ãŒã©ã“ã‹ã‚‰æ¥ã¦ã„ã‚‹ã‹ã‚’ç†è§£ã™ã‚‹ãŸã‚ã«ã€CookieãŠã‚ˆã³ãã®ä»–ã®è¿½è·¡æŠ€è¡“ã‚’ä½¿ç”¨ã—ã¦ã„ã¾ã™ã€‚","nb_title":"ã‚¯ãƒƒã‚­ãƒ¼ã®ä½¿ç”¨","pc_fnct_text_1":"æ©Ÿèƒ½æ€§ã‚¯ãƒƒã‚­ãƒ¼","pc_fnct_text_2":"ã“ã‚Œã‚‰ã®ã‚¯ãƒƒã‚­ãƒ¼ã¯ã€å½“ã‚¦ã‚§ãƒ–ã‚µã‚¤ãƒˆã§ã‚ˆã‚Šã‚«ã‚¹ã‚¿ãƒžã‚¤ã‚ºã•ã‚ŒãŸä½“é¨“ã‚’æä¾›ã™ã‚‹ãŸã‚ã€ãŠã‚ˆã³å½“ã‚¦ã‚§ãƒ–ã‚µã‚¤ãƒˆã‚’åˆ©ç”¨ã™ã‚‹éš›ã«è¡Œã£ãŸé¸æŠžã‚’è¨˜æ†¶ã™ã‚‹ãŸã‚ã«ä½¿ç”¨ã•ã‚Œã¾ã™ã€‚","pc_fnct_text_3":"ä¾‹ãˆã°ã€è¨ªå•è€…ã®è¨€èªžè¨­å®šã‚’è¨˜æ†¶ã—ãŸã‚Šã€ãƒ­ã‚°ã‚¤ãƒ³æƒ…å ±ã‚’è¨˜æ†¶ã™ã‚‹ãŸã‚ã«ã€æ©Ÿèƒ½æ€§ã‚¯ãƒƒã‚­ãƒ¼ã‚’ä½¿ç”¨ã™ã‚‹ã“ã¨ãŒã‚ã‚Šã¾ã™ã€‚","pc_minfo_text_1":"è©³ç´°æƒ…å ±","pc_minfo_text_2":"ã‚¯ãƒƒã‚­ãƒ¼ã«é–¢ã™ã‚‹æ–¹é‡ã‚„è¨ªå•è€…ã®é¸æŠžã«é–¢é€£ã—ãŸã”è³ªå•ã«ã¤ã„ã¦ã¯ã€å½“æ–¹ã¾ã§ãŠå•ã„åˆã‚ã›ãã ã•ã„ã€‚","pc_minfo_text_3":"è©³ã—ãã¯ã€<a href=\'%s\' target=\'_blank\'>ãƒ—ãƒ©ã‚¤ãƒã‚·ãƒ¼ãƒãƒªã‚·ãƒ¼</a> ã‚’ã”è¦§ãã ã•ã„ã€‚","pc_save":"è¨­å®šã‚’ä¿å­˜","pc_sncssr_text_1":"ã‚¦ã‚§ãƒ–ã‚µã‚¤ãƒˆã®å‹•ä½œã«å¿…è¦ä¸å¯æ¬ ãªã‚¯ãƒƒã‚­ãƒ¼","pc_sncssr_text_2":"ã“ã‚Œã‚‰ã®ã‚¯ãƒƒã‚­ãƒ¼ã¯ã€è¨ªå•è€…ãŒå½“ã‚¦ã‚§ãƒ–ã‚µã‚¤ãƒˆã‚’é€šã˜ã¦åˆ©ç”¨å¯èƒ½ãªã‚µãƒ¼ãƒ“ã‚¹ã‚’æä¾›ã—ãŸã‚Šã€å½“ã‚¦ã‚§ãƒ–ã‚µã‚¤ãƒˆã®ç‰¹å®šã®æ©Ÿèƒ½ã‚’åˆ©ç”¨ã—ãŸã‚Šã™ã‚‹ãŸã‚ã«ä¸å¯æ¬ ãªã‚‚ã®ã§ã™ã€‚","pc_sncssr_text_3":"ã“ã‚Œã‚‰ã®ã‚¯ãƒƒã‚­ãƒ¼ã‚’ãƒ–ãƒ­ãƒƒã‚¯ã—ãŸå ´åˆã€å½“ã‚¦ã‚§ãƒ–ã‚µã‚¤ãƒˆã§ã®ç‰¹å®šã®ã‚µãƒ¼ãƒ“ã‚¹ã‚’æä¾›ã§ãã¾ã›ã‚“ã€‚","pc_title":"ã‚¯ãƒƒã‚­ãƒ¼è¨­å®šã‚»ãƒ³ã‚¿ãƒ¼","pc_trck_text_1":"ãƒˆãƒ©ãƒƒã‚­ãƒ³ã‚°ã‚¯ãƒƒã‚­ãƒ¼","pc_trck_text_2":"ã“ã‚Œã‚‰ã®ã‚¯ãƒƒã‚­ãƒ¼ã¯ã€å½“ã‚¦ã‚§ãƒ–ã‚µã‚¤ãƒˆã¸ã®ãƒˆãƒ©ãƒ•ã‚£ãƒƒã‚¯ã‚„è¨ªå•è€…ãŒã©ã®ã‚ˆã†ã«å½“ã‚¦ã‚§ãƒ–ã‚µã‚¤ãƒˆã‚’åˆ©ç”¨ã—ã¦ã„ã‚‹ã‹ã‚’åˆ†æžã™ã‚‹ãŸã‚ã®æƒ…å ±ã‚’åŽé›†ã™ã‚‹ãŸã‚ã«ä½¿ç”¨ã•ã‚Œã¾ã™ã€‚","pc_trck_text_3":"ä¾‹ãˆã°ã€ã“ã‚Œã‚‰ã®ã‚¯ãƒƒã‚­ãƒ¼ã¯ã€è¨ªå•è€…ãŒå½“ã‚¦ã‚§ãƒ–ã‚µã‚¤ãƒˆã«æ»žåœ¨ã—ãŸæ™‚é–“ã‚„è¨ªå•ã—ãŸãƒšãƒ¼ã‚¸ãªã©ã‚’è¿½è·¡ã™ã‚‹ã“ã¨ãŒã‚ã‚Šã€ã“ã‚Œã¯ã€è¨ªå•è€…ã®ãŸã‚ã«å½“ã‚¦ã‚§ãƒ–ã‚µã‚¤ãƒˆã®åˆ©ä¾¿æ€§å‘ä¸Šã«å½¹ç«‹ã¦ã¾ã™ã€‚","pc_trck_text_4":"ã“ã‚Œã‚‰ã®ãƒˆãƒ©ãƒƒã‚­ãƒ³ã‚°ãŠã‚ˆã³ãƒ‘ãƒ•ã‚©ãƒ¼ãƒžãƒ³ã‚¹ã‚¯ãƒƒã‚­ãƒ¼ã«ã‚ˆã£ã¦åŽé›†ã•ã‚ŒãŸæƒ…å ±ã¯ã€ç‰¹å®šã®å€‹äººã‚’ç‰¹å®šã™ã‚‹ã“ã¨ã¯ã‚ã‚Šã¾ã›ã‚“ã€‚","pc_trgt_text_1":"ã‚¿ãƒ¼ã‚²ãƒ†ã‚£ãƒ³ã‚°ãŠã‚ˆã³åºƒå‘Šç”¨ã‚¯ãƒƒã‚­ãƒ¼","pc_trgt_text_2":"ã“ã‚Œã‚‰ã®ã‚¯ãƒƒã‚­ãƒ¼ã¯ã€è¨ªå•è€…ã®é–²è¦§ç¿’æ…£ã«åŸºã¥ã„ã¦ã€è¨ªå•è€…ãŒèˆˆå‘³ã‚’æŒã¡ãã†ãªåºƒå‘Šã‚’è¡¨ç¤ºã™ã‚‹ãŸã‚ã«ä½¿ç”¨ã•ã‚Œã¾ã™ã€‚","pc_trgt_text_3":"ã“ã‚Œã‚‰ã®ã‚¯ãƒƒã‚­ãƒ¼ã¯ã€ã‚³ãƒ³ãƒ†ãƒ³ãƒ„ãƒ—ãƒ­ãƒã‚¤ãƒ€ãƒ¼ãŠã‚ˆã³/ã¾ãŸã¯åºƒå‘Šãƒ—ãƒ­ãƒã‚¤ãƒ€ãƒ¼ã«ã‚ˆã£ã¦æä¾›ã•ã‚Œã€å½“ã‚¦ã‚§ãƒ–ã‚µã‚¤ãƒˆã‹ã‚‰åŽé›†ã—ãŸæƒ…å ±ã¨ã€ãã®ãƒãƒƒãƒˆãƒ¯ãƒ¼ã‚¯ä¸Šã§ã®è¨ªå•è€…ã®ã‚¦ã‚§ãƒ–ãƒ–ãƒ©ã‚¦ã‚¶ã®æ´»å‹•ã«é–¢é€£ã—ã¦ç‹¬è‡ªã«åŽé›†ã—ãŸä»–ã®æƒ…å ±ã¨ã‚’çµ„ã¿åˆã‚ã›ã‚‹ã“ã¨ãŒã‚ã‚Šã¾ã™ã€‚","pc_trgt_text_4":"è¨ªå•è€…ãŒã“ã‚Œã‚‰ã®ã‚¿ãƒ¼ã‚²ãƒ†ã‚£ãƒ³ã‚°ã‚¯ãƒƒã‚­ãƒ¼ã‚„åºƒå‘Šç”¨ã‚¯ãƒƒã‚­ãƒ¼ã‚’å‰Šé™¤ã¾ãŸã¯ç„¡åŠ¹ã‚’é¸æŠžã—ãŸå ´åˆã§ã‚‚ã€åºƒå‘Šã¯è¡¨ç¤ºã•ã‚Œã¾ã™ãŒã€è¨ªå•è€…ã«é–¢é€£ã—ãŸã‚‚ã®ã§ã¯ãªã„å¯èƒ½æ€§ãŒã‚ã‚Šã¾ã™ã€‚","pc_yprivacy_text_1":"ãŠå®¢æ§˜ã®ãƒ—ãƒ©ã‚¤ãƒã‚·ãƒ¼ã‚’å°Šé‡ã—ã¾ã™","pc_yprivacy_text_2":"ã‚¯ãƒƒã‚­ãƒ¼ã¨ã¯ã€è¨ªå•è€…ãŒã‚¦ã‚§ãƒ–ã‚µã‚¤ãƒˆã«ã‚¢ã‚¯ã‚»ã‚¹ã—ãŸéš›ã«è¨ªå•è€…ã®ã‚³ãƒ³ãƒ”ãƒ¥ãƒ¼ã‚¿ã«ä¿å­˜ã•ã‚Œã‚‹éžå¸¸ã«å°ã•ãªãƒ†ã‚­ã‚¹ãƒˆãƒ•ã‚¡ã‚¤ãƒ«ã§ã™ã€‚å½“ã‚¦ã‚§ãƒ–ã‚µã‚¤ãƒˆã¯ã€ã•ã¾ã–ã¾ãªç›®çš„ã§ã‚¯ãƒƒã‚­ãƒ¼ã‚’ä½¿ç”¨ã—ã€å½“ã‚¦ã‚§ãƒ–ã‚µã‚¤ãƒˆã§ã®è¨ªå•è€…ã®ã‚ªãƒ³ãƒ©ã‚¤ãƒ³åˆ©ä¾¿æ€§ã‚’å‘ä¸Šã•ã›ã¦ã„ã¾ã™ã€‚ï¼ˆä¾‹ãˆã°ã€è¨ªå•è€…ã®ã‚¢ã‚«ã‚¦ãƒ³ãƒˆã®ãƒ­ã‚°ã‚¤ãƒ³æƒ…å ±ã‚’è¨˜æ†¶ã™ã‚‹ãŸã‚ãªã©ã€‚ï¼‰","pc_yprivacy_text_3":"è¨ªå•è€…ã¯ã€è¨­å®šã‚’å¤‰æ›´ã—ã¦ã€å½“ã‚¦ã‚§ãƒ–ã‚µã‚¤ãƒˆã‚’é–²è¦§ä¸­ã®ã‚³ãƒ³ãƒ”ãƒ¥ãƒ¼ã‚¿ã«ä¿å­˜ã•ã‚Œã‚‹ç‰¹å®šã®ç¨®é¡žã®ã‚¯ãƒƒã‚­ãƒ¼ã‚’æ‹’å¦ã™ã‚‹ã“ã¨ãŒã§ãã¾ã™ã€‚ã¾ãŸã€ã™ã§ã«è¨ªå•è€…ã®ã‚³ãƒ³ãƒ”ãƒ¥ãƒ¼ã‚¿ã«ä¿å­˜ã•ã‚Œã¦ã„ã‚‹ã‚¯ãƒƒã‚­ãƒ¼ã‚’å‰Šé™¤ã™ã‚‹ã“ã¨ã‚‚ã§ãã¾ã™ãŒã€ã‚¯ãƒƒã‚­ãƒ¼ã‚’å‰Šé™¤ã™ã‚‹ã¨ã€å½“ã‚¦ã‚§ãƒ–ã‚µã‚¤ãƒˆæ©Ÿèƒ½ã®ä¸€éƒ¨ãŒåˆ©ç”¨ã§ããªããªã‚‹å¯èƒ½æ€§ãŒã‚ã‚Šã¾ã™ã®ã§ã€ã”æ³¨æ„ãã ã•ã„ã€‚","pc_yprivacy_title":"ãƒ—ãƒ©ã‚¤ãƒã‚·ãƒ¼","privacy_policy":"<a href=\'%s\' target=\'_blank\'>ãƒ—ãƒ©ã‚¤ãƒã‚·ãƒ¼ãƒãƒªã‚·ãƒ¼</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"ØªØºÙŠÙŠØ± ØªÙØ¶ÙŠÙ„Ø§ØªÙŠ","always_active":"Ù…ÙØ¹Ù„ Ø¯Ø§Ø¦Ù…Ù‹Ø§","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"ØºÙŠØ± Ù…ÙØ¹Ù„","nb_agree":"Ù…ÙˆØ§ÙÙ‚","nb_changep":"ØªØºÙŠÙŠØ± ØªÙØ¶ÙŠÙ„Ø§ØªÙŠ","nb_ok":"ÙÙ‡Ù…Øª","nb_reject":"Ø£Ø±ÙØ¶","nb_text":"Ù†Ø­Ù† Ù†Ø³ØªØ®Ø¯Ù… Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· ÙˆØªÙ‚Ù†ÙŠØ§Øª Ø§Ù„ØªØªØ¨Ø¹ Ø§Ù„Ø£Ø®Ø±Ù‰ Ù„ØªØ­Ø³ÙŠÙ† ØªØ¬Ø±Ø¨Ø© Ø§Ù„ØªØµÙØ­ Ø§Ù„Ø®Ø§ØµØ© Ø¨Ùƒ Ø¹Ù„Ù‰ Ù…ÙˆÙ‚Ø¹Ù†Ø§ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ ØŒ ÙˆÙ„Ø¥Ø¸Ù‡Ø§Ø± Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ø§Ù„Ù…Ø®ØµØµ ÙˆØ§Ù„Ø¥Ø¹Ù„Ø§Ù†Ø§Øª Ø§Ù„Ù…Ø³ØªÙ‡Ø¯ÙØ© Ù„Ùƒ ØŒ ÙˆØªØ­Ù„ÙŠÙ„ Ø­Ø±ÙƒØ© Ø§Ù„Ù…Ø±ÙˆØ± Ø¹Ù„Ù‰ Ù…ÙˆÙ‚Ø¹Ù†Ø§ ØŒ ÙˆÙÙ‡Ù… Ù…Ù† Ø£ÙŠÙ† ÙŠØ£ØªÙŠ Ø²ÙˆØ§Ø±Ù†Ø§.","nb_title":"Ù†Ø­Ù†Ù Ù†Ø³ØªØ®Ø¯Ù… Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø·","pc_fnct_text_1":"Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ø§Ù„ÙˆØ¸ÙŠÙÙŠØ©","pc_fnct_text_2":"ØªÙØ³ØªØ®Ø¯Ù… Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ù‡Ø°Ù‡ Ù„ØªØ²ÙˆÙŠØ¯Ùƒ Ø¨ØªØ¬Ø±Ø¨Ø© Ø£ÙƒØ«Ø± ØªØ®ØµÙŠØµÙ‹Ø§ Ø¹Ù„Ù‰ Ù…ÙˆÙ‚Ø¹Ù†Ø§ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ ÙˆÙ„ØªØ°ÙƒØ± Ø§Ù„Ø®ÙŠØ§Ø±Ø§Øª Ø§Ù„ØªÙŠ ØªØªØ®Ø°Ù‡Ø§ Ø¹Ù†Ø¯ Ø§Ø³ØªØ®Ø¯Ø§Ù…Ùƒ Ù„Ù…ÙˆÙ‚Ø¹Ù†Ø§.","pc_fnct_text_3":"Ø¹Ù„Ù‰ Ø³Ø¨ÙŠÙ„ Ø§Ù„Ù…Ø«Ø§Ù„ ØŒ Ù‚Ø¯ Ù†Ø³ØªØ®Ø¯Ù… Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ø§Ù„ÙˆØ¸ÙŠÙÙŠØ© Ù„ØªØ°ÙƒØ± ØªÙØ¶ÙŠÙ„Ø§Øª Ø§Ù„Ù„ØºØ© Ø§Ù„Ø®Ø§ØµØ© Ø¨Ùƒ Ø£Ùˆ ØªØ°ÙƒØ± ØªÙØ§ØµÙŠÙ„ ØªØ³Ø¬ÙŠÙ„ Ø§Ù„Ø¯Ø®ÙˆÙ„ Ø§Ù„Ø®Ø§ØµØ© Ø¨Ùƒ.","pc_minfo_text_1":"Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø£ÙƒØ«Ø±.","pc_minfo_text_2":"Ù„Ø£ÙŠ Ø§Ø³ØªÙØ³Ø§Ø±Ø§Øª ØªØªØ¹Ù„Ù‚ Ø¨Ø³ÙŠØ§Ø³ØªÙ†Ø§ Ø§Ù„Ø®Ø§ØµØ© Ø¨Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· ØŒ ÙˆØ®ÙŠØ§Ø±Ø§ØªÙƒØŒ  ÙŠØ±Ø¬Ù‰ Ø§Ù„ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§.","pc_minfo_text_3":"<a href=\'%s\' target=\'_blank\'>\\nØ§Ù„Ø®Ø§ØµØ© Ø¨Ù†Ø§ Ù„Ù…Ø¹Ø±ÙØ© Ø§Ù„Ù…Ø²ÙŠØ¯ ØŒ ÙŠØ±Ø¬Ù‰ Ø²ÙŠØ§Ø±Ø©Ø³ÙŠØ§Ø³Ø© Ø§Ù„Ø®ØµÙˆØµÙŠØ© .\\n</a>","pc_save":"Ø­ÙØ¸ ØªÙØ¶ÙŠÙ„Ø§ØªÙŠ","pc_sncssr_text_1":"Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ø§Ù„Ø¶Ø±ÙˆØ±ÙŠØ© Ù„Ù„ØºØ§ÙŠØ©","pc_sncssr_text_2":"ØªØ¹Ø¯ Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ù‡Ø°Ù‡ Ø¶Ø±ÙˆØ±ÙŠØ© Ù„ØªØ²ÙˆÙŠØ¯Ùƒ Ø¨Ø§Ù„Ø®Ø¯Ù…Ø§Øª Ø§Ù„Ù…ØªØ§Ø­Ø© Ø¹Ø¨Ø± Ù…ÙˆÙ‚Ø¹Ù†Ø§ Ø¹Ù„Ù‰ Ø§Ù„ÙˆÙŠØ¨ ÙˆÙ„ØªÙ…ÙƒÙŠÙ†Ùƒ Ù…Ù† Ø§Ø³ØªØ®Ø¯Ø§Ù… Ù…ÙŠØ²Ø§Øª Ù…Ø¹ÙŠÙ†Ø© ÙÙŠ Ù…ÙˆÙ‚Ø¹Ù†Ø§ .","pc_sncssr_text_3":"Ø¨Ø¯ÙˆÙ† Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ù‡Ø°Ù‡ ØŒ Ù„Ø§ ÙŠÙ…ÙƒÙ†Ù†Ø§ ØªÙ‚Ø¯ÙŠÙ… Ø®Ø¯Ù…Ø§Øª Ù…Ø¹ÙŠÙ†Ø© Ù„Ùƒ Ø¹Ù„Ù‰ Ù…ÙˆÙ‚Ø¹Ù†Ø§.","pc_title":"Ù…Ø±ÙƒØ² ØªÙØ¶ÙŠÙ„Ø§Øª Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø·","pc_trck_text_1":"Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ù„Ù„ØªØªØ¨Ø¹ ÙˆØ§Ù„Ø£Ø¯Ø§Ø¡","pc_trck_text_2":"\\nØªÙØ³ØªØ®Ø¯Ù… Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ù‡Ø°Ù‡ Ù„Ø¬Ù…Ø¹ Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ù„ØªØ­Ù„ÙŠÙ„ Ø­Ø±ÙƒØ© Ø§Ù„Ù…Ø±ÙˆØ± Ø¥Ù„Ù‰ Ù…ÙˆÙ‚Ø¹Ù†Ø§ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ ÙˆÙƒÙŠÙÙŠØ© Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„Ø²ÙˆØ§Ø± Ù„Ù…ÙˆÙ‚Ø¹Ù†Ø§.","pc_trck_text_3":"\\nØ¹Ù„Ù‰ Ø³Ø¨ÙŠÙ„ Ø§Ù„Ù…Ø«Ø§Ù„ ØŒ Ù‚Ø¯ ØªØªØ¹Ù‚Ø¨ Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ù‡Ø°Ù‡ Ø£Ø´ÙŠØ§Ø¡ Ù…Ø«Ù„ Ø§Ù„Ù…Ø¯Ø© Ø§Ù„ØªÙŠ ØªÙ‚Ø¶ÙŠÙ‡Ø§ Ø¹Ù„Ù‰ Ù…ÙˆÙ‚Ø¹ Ø§Ù„ÙˆÙŠØ¨ Ø£Ùˆ Ø§Ù„ØµÙØ­Ø§Øª Ø§Ù„ØªÙŠ ØªØ²ÙˆØ±Ù‡Ø§ Ù…Ù…Ø§ ÙŠØ³Ø§Ø¹Ø¯Ù†Ø§ Ø¹Ù„Ù‰ ÙÙ‡Ù… ÙƒÙŠÙ ÙŠÙ…ÙƒÙ†Ù†Ø§ ØªØ­Ø³ÙŠÙ† Ù…ÙˆÙ‚Ø¹Ù†Ø§ Ø¹Ù„Ù‰ Ø§Ù„ÙˆÙŠØ¨ Ù…Ù† Ø£Ø¬Ù„Ùƒ.","pc_trck_text_4":"\\nØ§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„ØªÙŠ ÙŠØªÙ… Ø¬Ù…Ø¹Ù‡Ø§ Ù…Ù† Ø®Ù„Ø§Ù„ Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ø§Ù„Ø®Ø§ØµØ© Ø¨Ø§Ù„ØªØªØ¨Ø¹ ÙˆØ§Ù„Ø£Ø¯Ø§Ø¡ Ù‡Ø°Ù‡ Ù„Ø§ ØªØ­Ø¯Ø¯ Ø£ÙŠ Ø²Ø§Ø¦Ø± ÙØ±Ø¯ÙŠ.\\n","pc_trgt_text_1":"Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ø§Ù„Ø®Ø§ØµØ© Ø¨Ø§Ù„Ø§Ø³ØªÙ‡Ø¯Ø§Ù ÙˆØ§Ù„Ø¥Ø¹Ù„Ø§Ù†","pc_trgt_text_2":"ØªÙØ³ØªØ®Ø¯Ù… Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ù‡Ø°Ù‡ Ù„Ø¥Ø¸Ù‡Ø§Ø± Ø§Ù„Ø¥Ø¹Ù„Ø§Ù†Ø§Øª Ø§Ù„ØªÙŠ Ù…Ù† Ø§Ù„Ù…Ø­ØªÙ…Ù„ Ø£Ù† ØªÙ‡Ù…Ùƒ Ø¨Ù†Ø§Ø¡Ù‹ Ø¹Ù„Ù‰ Ø¹Ø§Ø¯Ø§ØªÙƒ ÙÙŠ Ø§Ù„ØªØµÙØ­.","pc_trgt_text_3":"\\nÙ‚Ø¯ ØªØ¯Ù…Ø¬ Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ù‡Ø°Ù‡ ØŒ ÙƒÙ…Ø§ ÙŠÙ‚Ø¯Ù…Ù‡Ø§ Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ùˆ / Ø£Ùˆ Ù…ÙˆÙØ±Ùˆ Ø§Ù„Ø¥Ø¹Ù„Ø§Ù†Ø§Øª Ù„Ø¯ÙŠÙ†Ø§ ØŒ Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„ØªÙŠ Ø¬Ù…Ø¹ÙˆÙ‡Ø§ Ù…Ù† Ù…ÙˆÙ‚Ø¹Ù†Ø§ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ Ù…Ø¹ Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„Ø£Ø®Ø±Ù‰ Ø§Ù„ØªÙŠ Ø¬Ù…Ø¹ÙˆÙ‡Ø§ Ø¨Ø´ÙƒÙ„ Ù…Ø³ØªÙ‚Ù„ ÙÙŠÙ…Ø§ ÙŠØªØ¹Ù„Ù‚ Ø¨Ø£Ù†Ø´Ø·Ø© Ù…ØªØµÙØ­ Ø§Ù„ÙˆÙŠØ¨ Ø§Ù„Ø®Ø§Øµ Ø¨Ùƒ Ø¹Ø¨Ø± Ø´Ø¨ÙƒØ© Ù…ÙˆØ§Ù‚Ø¹Ù‡Ù… Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ©.\\n","pc_trgt_text_4":"Ø¥Ø°Ø§ Ø§Ø®ØªØ±Øª Ø¥Ø²Ø§Ù„Ø© Ø£Ùˆ ØªØ¹Ø·ÙŠÙ„ Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ø§Ù„Ø®Ø§ØµØ© Ø¨Ø§Ù„Ø§Ø³ØªÙ‡Ø¯Ø§Ù Ø£Ùˆ Ø§Ù„Ø¥Ø¹Ù„Ø§Ù†Ø§Øª ØŒ ÙØ³ØªØ¸Ù„ ØªØ´Ø§Ù‡Ø¯ Ø¥Ø¹Ù„Ø§Ù†Ø§Øª ÙˆÙ„ÙƒÙ†Ù‡Ø§ Ù‚Ø¯ Ù„Ø§ ØªÙƒÙˆÙ† Ø°Ø§Øª ØµÙ„Ø© Ø¨Ùƒ.","pc_yprivacy_text_1":"Ø®ØµÙˆØµÙŠØªÙƒ Ù…Ù‡Ù…Ø© Ø¨Ø§Ù„Ù†Ø³Ø¨Ø© Ù„Ù†Ø§","pc_yprivacy_text_2":"Ù…Ù† Ø§Ù„Ø£ØºØ±Ø§Ø¶ ÙˆÙ„ØªØ¹Ø²ÙŠØ² ØªØ¬Ø±Ø¨ØªÙƒ Ø¹Ø¨Ø± Ø§Ù„Ø¥Ù†ØªØ±Ù†Øª Ø¹Ù„Ù‰ Ù…ÙˆÙ‚Ø¹Ù†Ø§ (Ø¹Ù„Ù‰ Ø³Ø¨ÙŠÙ„ Ø§Ù„Ù…Ø«Ø§Ù„ ØŒ Ù„ØªØ°ÙƒØ± ØªÙØ§ØµÙŠÙ„ ØªØ³Ø¬ÙŠÙ„ Ø§Ù„Ø¯Ø®ÙˆÙ„ Ø¥Ù„Ù‰ Ø­Ø³Ø§Ø¨Ùƒ).","pc_yprivacy_text_3":"ÙŠÙ…ÙƒÙ†Ùƒ ØªØºÙŠÙŠØ± ØªÙØ¶ÙŠÙ„Ø§ØªÙƒ ÙˆØ±ÙØ¶ Ø£Ù†ÙˆØ§Ø¹ Ù…Ø¹ÙŠÙ†Ø© Ù…Ù† Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ù„ÙŠØªÙ… ØªØ®Ø²ÙŠÙ†Ù‡Ø§ Ø¹Ù„Ù‰ Ø¬Ù‡Ø§Ø² Ø§Ù„ÙƒÙ…Ø¨ÙŠÙˆØªØ± Ø§Ù„Ø®Ø§Øµ Ø¨Ùƒ Ø£Ø«Ù†Ø§Ø¡ ØªØµÙØ­ Ù…ÙˆÙ‚Ø¹Ù†Ø§ Ø¹Ù„Ù‰ Ø§Ù„ÙˆÙŠØ¨.  ÙŠÙ…ÙƒÙ†Ùƒ Ø£ÙŠØ¶Ù‹Ø§ Ø¥Ø²Ø§Ù„Ø© Ø£ÙŠ Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ø±ØªØ¨Ø§Ø· Ù…Ø®Ø²Ù†Ø© Ø¨Ø§Ù„ÙØ¹Ù„ Ø¹Ù„Ù‰ Ø¬Ù‡Ø§Ø² Ø§Ù„ÙƒÙ…Ø¨ÙŠÙˆØªØ± Ø§Ù„Ø®Ø§Øµ Ø¨Ùƒ ØŒ ÙˆÙ„ÙƒÙ† Ø¶Ø¹ ÙÙŠ Ø§Ø¹ØªØ¨Ø§Ø±Ùƒ Ø£Ù† Ø­Ø°Ù Ù…Ù„ÙØ§Øª ØªØ¹Ø±ÙŠÙ Ø§Ù„Ø§Ø±ØªØ¨Ø§Ø· Ù‚Ø¯ ÙŠÙ…Ù†Ø¹Ùƒ Ù…Ù† Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø£Ø¬Ø²Ø§Ø¡ Ù…Ù† Ù…ÙˆÙ‚Ø¹Ù†Ø§.","pc_yprivacy_title":"Ø®ØµÙˆØµÙŠØªÙƒ","privacy_policy":"<a href=\'%s\' target=\'_blank\'>\\nØ©Ø³ÙŠØ§Ø³Ø© Ø§Ù„Ø®ØµÙˆØµÙŠØ©\\n</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"Etkin","always_active":"Her zaman etkin","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"Etkin değil","nb_agree":"ÇEREZLERİ KABUL EDİN","nb_changep":"ÇEREZ TERCİHLERİ","nb_ok":"Tamam","nb_reject":"ÇEREZLERİ REDDEDİN","nb_text":"İnternet sitemizi ziyaret etmenizle birlikte, mevzuata uygun olarak kişisel verileriniz işlenmektedir. <a href=\'kvkk-aydinlatma-metni\'>Aydınlatma metnini okumak için tıklayınız.</a><br><br>TAB Gıda tarafından internet üzerindeki hareketlerinize özelleştirilmiş pazarlama ve reklamcılık faaliyetleri yürütülmesi ve analizler yapılması adına çerezlerle kişisel verilerinizin işlenmesi açık rızanıza tabiidir, açık rızanızı Çerezleri Kabul Edin ile sunabilir ya da Çerez Tercihlerinden seçeneklerinizi kaydedebilirsiniz. Çerezlerle işlenecek olan kişisel verilerinize yönelik <a href=\'cerez-aydinlatma-metni\'>aydınlatma metnini okumak için tıklayınız.</a>","nb_title":"Çerez Tercihinizi Bize Bildirin","pc_fnct_text_1":"İşlevsellik çerezleri","pc_fnct_text_2":"Bu çerezler, web sitemizde size daha kişiselleştirilmiş bir deneyim sağlamak ve web sitemizi kullanırken yaptığınız seçimleri hatırlamak için kullanılır.","pc_fnct_text_3":"Öneğin, dil tercihlerinizi veya oturum açma bilgilerinizi hatırlamak için işlevsellik tanımlama bilgilerini kullanabiliriz.","pc_minfo_text_1":"Daha fazla bilgi","pc_minfo_text_2":"Çerezlere ilişkin politikamız ve seçimlerinizle ilgili herhangi bir sorunuz için lütfen bizimle iletişime geçin","pc_minfo_text_3":"Daha fazlasını öğrenmek için lütfen <a href=\'%s\' target=\'_blank\'>Gizlilik Politikası</a> ziyaret edin.","pc_save":"Tercihleri Kaydet","pc_sncssr_text_1":"Kesinlikle gerekli çerezler","pc_sncssr_text_2":"Bu çerezler, size web sitemiz aracılığıyla sunulan hizmetleri sağlamak ve web sitemizin belirli özelliklerini kullanmanızı sağlamak için gereklidir.","pc_sncssr_text_3":"Bu çerezler olmadan, web sitemizde size belirli hizmetleri sağlayamayız.","pc_title":"Çerez Tercihleri Merkezi","pc_trck_text_1":"İşleme ve performans çerezleri","pc_trck_text_2":"Bu çerezler, web sitemize gelen trafiği ve ziyaretçilerin web sitemizi nasıl kullandığını analiz etmek için bilgi toplamak amacıyla kullanılır.","pc_trck_text_3":"Öneğin, çerezler, web sitesinde ne kadar zaman geçirdiğiniz veya ziyaret ettiğiniz sayfalar gibi şeyleri izleyebilir ve bu da web sitemizi sizin için nasıl iyileştirebileceğimizi anlamamıza yardımcı olur.","pc_trck_text_4":"Bu izleme ve performans çerezleri aracılığıyla toplanan bilgiler anonim olup herhangi bir bireysel ziyaretçiyi tanımlamaz.","pc_trgt_text_1":"Hedefleme ve reklam çerezleri","pc_trgt_text_2":"Bu çerezler, arama/gezinme alışkanlıklarınıza göre ilginizi çekebilecek reklamları göstermek için kullanılır.","pc_trgt_text_3":"Bu çerezler, içerik ve/veya reklam sağlayıcılarımız tarafından, web sitemizden topladıkları bilgileri, web tarayıcınızın kendi web siteleri ağlarındaki faaliyetleriyle ilgili olarak bağımsız olarak topladıkları diğer bilgilerle birleştirilebilir.","pc_trgt_text_4":"Bu hedefleme veya reklam çerezlerini kaldırmayı veya devre dışı bırakmayı seçerseniz, reklamları görmeye devam edersiniz, ancak bunlar sizinle alakalı olmayabilir.","pc_yprivacy_text_1":"Gizliliğiniz bizim için önemlidir","pc_yprivacy_text_2":"Çerezler, bir web sitesini ziyaret ettiğinizde bilgisayarınızda depolanan çok küçük metin dosyalarıdır. Çerezleri çeşitli amaçlarla ve web sitemizdeki çevrimiçi deneyiminizi geliştirmek için (örneğin, hesap giriş bilgilerinizi hatırlamak için) kullanıyoruz.","pc_yprivacy_text_3":"Web sitemizde gezinirken tercihlerinizi değiştirebilir ve bilgisayarınızda saklanacak belirli çerez türlerini reddedebilirsiniz. Ayrıca, bilgisayarınızda depolanmış olan çerezleri de kaldırabilirsiniz, ancak çerezleri silmenin web sitemizin bölümlerini kullanmanızı engelleyebileceğini unutmayın.","pc_yprivacy_title":"Gizliliğiniz","privacy_policy":"<a href=\'%s\' target=\'_blank\'>Gizlilik Politikası</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"å•Ÿç”¨","always_active":"æ°¸é å•Ÿç”¨","impressum":"<a href=\'%s\' target=\'_blank\'>Impressum</a>","inactive":"åœç”¨","nb_agree":"æˆ‘åŒæ„","nb_changep":"æ›´æ”¹æˆ‘çš„åå¥½","nb_ok":"ç¢ºå®š","nb_reject":"æˆ‘æ‹’çµ•","nb_text":"æˆ‘å€‘ä½¿ç”¨cookieså’Œå…¶ä»–è¿½è¹¤æŠ€è¡“ä¾†æ”¹å–„æ‚¨åœ¨æˆ‘å€‘ç¶²ç«™ä¸Šçš„ç€è¦½é«”é©—ï¼Œå°æ‚¨é¡¯ç¤ºå€‹æ€§åŒ–çš„å…§å®¹å’Œæœ‰é‡å°æ€§çš„å»£å‘Šï¼Œåˆ†æžæˆ‘å€‘çš„ç¶²ç«™æµé‡ï¼Œä¸¦äº†è§£æˆ‘å€‘çš„è¨ªå®¢ä¾†è‡ªå“ªè£¡ã€‚","nb_title":"æˆ‘å€‘ä½¿ç”¨cookies","pc_fnct_text_1":"åŠŸèƒ½æ€§cookies","pc_fnct_text_2":"é€™äº›cookiesç”¨æ–¼åœ¨æˆ‘å€‘çš„ç¶²ç«™ä¸Šç‚ºæ‚¨æä¾›æ›´åŠ å€‹äººåŒ–çš„é«”é©—ï¼Œä¸¦è¨˜ä½æ‚¨åœ¨ä½¿ç”¨æˆ‘å€‘ç¶²ç«™æ™‚åšå‡ºçš„é¸æ“‡ã€‚","pc_fnct_text_3":"ä¾‹å¦‚ï¼Œæˆ‘å€‘å¯èƒ½ä½¿ç”¨åŠŸèƒ½æ€§cookiesä¾†è¨˜ä½æ‚¨çš„èªžè¨€åå¥½æˆ–è¨˜ä½æ‚¨çš„ç™»å…¥è³‡è¨Šã€‚","pc_minfo_text_1":"æ›´å¤šè³‡è¨Š","pc_minfo_text_2":"å¦‚æžœå°æˆ‘å€‘çš„cookiesæ”¿ç­–æˆ–æ‚¨çš„é¸æ“‡æœ‰ä»»ä½•ç–‘å•ï¼Œè«‹è¯ç¹«æˆ‘å€‘ã€‚","pc_minfo_text_3":"æƒ³äº†è§£æ›´å¤šè³‡è¨Šï¼Œè«‹å‰å¾€æˆ‘å€‘çš„<a href=\'%s\' target=\'_blank\'>éš±ç§æ¬Šæ”¿ç­–</a>.","pc_save":"å„²å­˜æˆ‘çš„åå¥½","pc_sncssr_text_1":"å¿…è¦çš„cookies","pc_sncssr_text_2":"é€™äº›cookieså°æ–¼å‘æ‚¨æä¾›é€éŽæˆ‘å€‘ç¶²ç«™çš„æœå‹™ä»¥åŠä½¿æ‚¨èƒ½å¤ ä½¿ç”¨æˆ‘å€‘ç¶²ç«™çš„æŸäº›åŠŸèƒ½æ˜¯ä¸å¯æˆ–ç¼ºçš„ã€‚","pc_sncssr_text_3":"æ²’æœ‰é€™äº›cookiesï¼Œæˆ‘å€‘å°±ä¸èƒ½åœ¨æˆ‘å€‘çš„ç¶²ç«™ä¸Šç‚ºæ‚¨æä¾›æŸäº›æœå‹™ã€‚","pc_title":"Cookiesåå¥½ä¸­å¿ƒ","pc_trck_text_1":"è¿½è¹¤cookies","pc_trck_text_2":"é€™äº›cookiesç”¨æ–¼æ”¶é›†è³‡è¨Šï¼Œä»¥åˆ†æžæˆ‘å€‘ç¶²ç«™çš„æµé‡ä»¥åŠè¨ªå®¢å¦‚ä½•ä½¿ç”¨æˆ‘å€‘çš„ç¶²ç«™ã€‚","pc_trck_text_3":"ä¾‹å¦‚ï¼Œé€™äº›cookieså¯èƒ½æœƒè·Ÿè¿½è¹¤å¦‚æ‚¨åœ¨ç¶²ç«™ä¸ŠèŠ±è²»çš„æ™‚é–“æˆ–æ‚¨é€ è¨ªçš„é é¢ï¼Œé€™æœ‰åŠ©æ–¼æˆ‘å€‘äº†è§£å¦‚ä½•ç‚ºæ‚¨æ”¹é€²æˆ‘å€‘çš„ç¶²ç«™ã€‚","pc_trck_text_4":"é€éŽé€™äº›è¿½è¹¤å’Œæ€§èƒ½cookiesæ”¶é›†çš„è³‡è¨Šä¸æœƒè­˜åˆ¥ä»»ä½•å€‹äººè¨ªå®¢ã€‚","pc_trgt_text_1":"å®šä½å’Œå»£å‘Šcookies","pc_trgt_text_2":"é€™äº›cookiesè¢«ç”¨ä¾†æ ¹æ“šæ‚¨çš„ç€è¦½ç¿’æ…£é¡¯ç¤ºæ‚¨å¯èƒ½æ„Ÿèˆˆè¶£çš„å»£å‘Šã€‚","pc_trgt_text_3":"ç”±æˆ‘å€‘çš„å…§å®¹æˆ–å»£å‘Šä¾›æ‡‰å•†æä¾›çš„é€™äº›cookiesï¼Œå¯èƒ½æœƒå°‡ä»–å€‘å¾žæˆ‘å€‘çš„ç¶²ç«™ä¸Šæ”¶é›†çš„è³‡è¨Šå’Œä»–å€‘ç¨ç«‹æ”¶é›†çš„èˆ‡æ‚¨çš„ç€è¦½å™¨åœ¨å…¶ç¶²ç«™ä¸­çš„æ´»å‹•æœ‰é—œçš„å…¶ä»–è³‡è¨Šçµåˆèµ·ä¾†ã€‚","pc_trgt_text_4":"å¦‚æžœæ‚¨é¸æ“‡åˆªé™¤æˆ–ç¦ç”¨é€™äº›å®šä½æˆ–å»£å‘Šcookiesï¼Œæ‚¨ä»ç„¶æœƒçœ‹åˆ°å»£å‘Šï¼Œä½†å®ƒå€‘å¯èƒ½èˆ‡æ‚¨ç„¡é—œã€‚","pc_yprivacy_text_1":"æ‚¨çš„éš±ç§å°æˆ‘å€‘å¾ˆé‡è¦","pc_yprivacy_text_2":"Cookiesæ˜¯éžå¸¸å°çš„æ–‡æœ¬æ–‡ä»¶ï¼Œç•¶æ‚¨é€ è¨ªç¶²ç«™æ™‚å­˜å„²åœ¨æ‚¨çš„è£ç½®ä¸Šã€‚æˆ‘å€‘å°‡cookiesç”¨æ–¼å„ç¨®ç›®çš„ï¼Œä¸¦æé«˜æ‚¨åœ¨æˆ‘å€‘ç¶²ç«™çš„ä½¿ç”¨é«”é©—ï¼ˆä¾‹å¦‚ï¼Œè¨˜ä½æ‚¨å¸³è™Ÿçš„ç™»å…¥è³‡è¨Šï¼‰ã€‚","pc_yprivacy_text_3":"åœ¨ç€è¦½æˆ‘å€‘çš„ç¶²ç«™æ™‚ï¼Œæ‚¨å¯ä»¥æ”¹è®Šæ‚¨çš„åå¥½ï¼Œæ‹’çµ•æŸäº›é¡žåž‹çš„cookieså„²å­˜åœ¨æ‚¨çš„è£ç½®ä¸Šã€‚æ‚¨ä¹Ÿå¯ä»¥åˆªé™¤å·²ç¶“å„²å­˜åœ¨æ‚¨è£ç½®ä¸Šçš„ä»»ä½•cookiesï¼Œä½†è«‹è¨˜ä½ï¼Œåˆªé™¤cookieså¯èƒ½æœƒå°Žè‡´æ‚¨ç„¡æ³•ä½¿ç”¨æˆ‘å€‘ç¶²ç«™çš„éƒ¨åˆ†å…§å®¹ã€‚","pc_yprivacy_title":"æ‚¨çš„éš±ç§","privacy_policy":"<a href=\'%s\' target=\'_blank\'>éš±ç§æ¬Šæ”¿ç­–</a>"}}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"i18n":{"active":"Activats","always_active":"Totjorn activats","inactive":"Desactivats","nb_agree":"AccÃ¨pti","nb_changep":"Cambiar mas preferÃ©ncias","nb_ok":"D\'acÃ²rdi","nb_reject":"RegÃ¨ti","nb_text":"Utilizam de cookies e dâ€™autras tecnologias de seguiment per melhorar vÃ²stra experiÃ©ncia de navegacion sus nÃ²stre site web, per vos afichar de contenguts personalizats, de publicitats cibladas, per analisar nÃ²stra audiÃ©ncia e per comprendre dâ€™ont venon nÃ²stres visitaires.","nb_title":"Utilizam de cookies","pc_fnct_text_1":"Cookies foncionals","pc_fnct_text_2":"Aquestes cookies servisson per vos fornir una experiÃ©ncia mai personalizada sus nÃ²stre site web e per memorizar vÃ²stras causidas quand navegatz sus nÃ²stre site web.","pc_fnct_text_3":"Per exemple, podÃ¨m utilizar de cookies foncionals per memorizar vÃ²stras preferÃ©ncias lingÃ¼isticas o nos remembrar de vÃ²stre identificant de connexion.","pc_minfo_text_1":"Mai d\'informacions","pc_minfo_text_2":"Per quina question que siÃ¡ tocant nÃ²stra politica de cookies e vÃ²stras causidas, contactat-nos.","pc_minfo_text_3":"Per ne saber mai, consultatz nÃ²stra <a href=\'%s\' target=\'_blank\'>Politica de confidencialitat</a>.","pc_save":"Enregistrar mas preferÃ©ncias","pc_sncssr_text_1":"Cookies formalament necessaris","pc_sncssr_text_2":"Aquestes cookies son essencials per vos fornir los servicis disponibles via nÃ²stre site web e per vos permetre dâ€™utilizar dâ€™unas foncionalitats de nÃ²stre site web.","pc_sncssr_text_3":"Sens aquestes cookies podÃ¨m pas vos provesir certans servicis sus nÃ²stre site web.","pc_title":"Centre de preferÃ©ncias dels cookies","pc_trck_text_1":"Cookies de seguiment","pc_trck_text_2":"Aquestes cookies sâ€™emplegan per collectar dâ€™informacions per analisar lo trafic de nÃ²stre site web e coma los visitaires lâ€™utilizan.","pc_trck_text_3":"Per exemple, aquestes cookies poiriÃ¡n pistar las causas coma quant de temps passatz sus un site web o las paginas que consultatz, Ã§Ã² que nos permet de comprendre coma podÃ¨m melhorar nÃ²stre site web per vos.","pc_trck_text_4":"Las informacions collectadas via aqueles cookies de seguiment e de performÃ ncia identifican pas individualament cap de visitaire.","pc_trgt_text_1":"Cookies de ciblatge e publicitat","pc_trgt_text_2":"Aquestes cookies servisson per afichar de publicitats que vos interessarÃ n probablament basadas sus vÃ²stras costumas de navegacion.","pc_trgt_text_3":"Aquestes cookies, servits per nÃ²stres provesidors de contenguts e/o publicitats, pÃ²don combinar dâ€™informacions que collÃ¨ctan de nÃ²stre site web amb dâ€™autras informacions quâ€™an collectadas independentament en relacion amb las activitats de vÃ²stre navegador a travÃ¨rs lor malhum de sites web.","pc_trgt_text_4":"Se causissÃ¨tz de suprimir o desactivar aquestes cookies  publicitaris o de ciblatge, veiretz totjorn de reclamas mas serÃ n pas pertinentas per vos.","pc_yprivacy_text_1":"VÃ²stra vida privada nos impÃ²rta","pc_yprivacy_text_2":"Los cookies son de plan pichons fichiÃ¨rs tÃ¨xt que son gardas dins vÃ²stre ordenador quand visitatz un site. Utilizam los cookies per mantuna tÃ²ca e per melhorar vÃ²stra experiÃ©ncia en linha sus nÃ²stre site web (per exemple, per memorizar vÃ²stre identificant de connexion).","pc_yprivacy_text_3":"PodÃ¨tz modificar vÃ²stras preferÃ©ncias e regetar certans tipes de cookies de gardar dins vÃ²stre ordenador en navegant sus nÃ²stre site web. PodÃ¨tz tanben suprimir quin cookie que siÃ¡ ja gardat dins vÃ²stre ordenador, mas tenÃ¨tz a l\'esperit que la supression de cookies pÃ²t empachar dâ€™utilizar nÃ²stre site web.","pc_yprivacy_title":"VÃ²stra confidencialitat"}}'
        );
    },
    function (e, t, i) {
        var n = i(38);
        "string" == typeof n && (n = [[e.i, n, ""]]);
        var o = { hmr: !0, transform: void 0, insertInto: void 0 };
        i(1)(n, o);
        n.locals && (e.exports = n.locals);
    },
    function (e, t, i) {
        (e.exports = i(0)(!1)).push([e.i, "", ""]);
    },
    function (e, t) {
        e.exports = function (e) {
            var t = "undefined" != typeof window && window.location;
            if (!t) throw new Error("fixUrls requires window.location");
            if (!e || "string" != typeof e) return e;
            var i = t.protocol + "//" + t.host,
                n = i + t.pathname.replace(/\/[^\/]*$/, "/");
            return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
                var o,
                    a = t
                        .trim()
                        .replace(/^"(.*)"$/, function (e, t) {
                            return t;
                        })
                        .replace(/^'(.*)'$/, function (e, t) {
                            return t;
                        });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a) ? e : ((o = 0 === a.indexOf("//") ? a : 0 === a.indexOf("/") ? i + a : n + a.replace(/^\.\//, "")), "url(" + JSON.stringify(o) + ")");
            });
        };
    },
    function (e, t, i) {
        var n = i(41);
        "string" == typeof n && (n = [[e.i, n, ""]]);
        var o = { hmr: !0, transform: void 0, insertInto: void 0 };
        i(1)(n, o);
        n.locals && (e.exports = n.locals);
    },
    function (e, t, i) {
        (e.exports = i(0)(!1)).push([
            e.i,
            '.freeprivacypolicy-com---reset{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:rgba(0,0,0,0);margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}.freeprivacypolicy-com---reset *,.freeprivacypolicy-com---reset *::before,.freeprivacypolicy-com---reset *::after{box-sizing:border-box}.freeprivacypolicy-com---reset a,.freeprivacypolicy-com---reset li,.freeprivacypolicy-com---reset p,.freeprivacypolicy-com---reset h1,.freeprivacypolicy-com---reset h2,.freeprivacypolicy-com---reset input,.freeprivacypolicy-com---reset button,.freeprivacypolicy-com---reset select{border-style:none;box-shadow:none;margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;outline:none}@-ms-viewport{.freeprivacypolicy-com---reset{width:device-width}}.freeprivacypolicy-com---reset [tabindex="-1"]:focus{outline:0 !important}.freeprivacypolicy-com---reset h1,.freeprivacypolicy-com---reset h2,.freeprivacypolicy-com---reset h3,.freeprivacypolicy-com---reset h4,.freeprivacypolicy-com---reset h5,.freeprivacypolicy-com---reset h6{margin-top:0;margin-bottom:0;color:#000}.freeprivacypolicy-com---reset p{margin-top:0;margin-bottom:1rem}.freeprivacypolicy-com---reset div{display:block}.freeprivacypolicy-com---reset ol,.freeprivacypolicy-com---reset ul,.freeprivacypolicy-com---reset dl{margin-top:0;margin-bottom:1rem}.freeprivacypolicy-com---reset ol ol,.freeprivacypolicy-com---reset ul ul,.freeprivacypolicy-com---reset ol ul,.freeprivacypolicy-com---reset ul ol{margin-bottom:0}.freeprivacypolicy-com---reset b,.freeprivacypolicy-com---reset strong{font-weight:bolder}.freeprivacypolicy-com---reset small{font-size:80%}.freeprivacypolicy-com---reset a{color:#007bff;text-decoration:none;background-color:rgba(0,0,0,0);-webkit-text-decoration-skip:objects}.freeprivacypolicy-com---reset a:hover{color:#0056b3;text-decoration:underline}.freeprivacypolicy-com---reset a:not([href]):not([tabindex]){color:inherit;text-decoration:none}.freeprivacypolicy-com---reset a:not([href]):not([tabindex]):hover,.freeprivacypolicy-com---reset a:not([href]):not([tabindex]):focus{color:inherit;text-decoration:none}.freeprivacypolicy-com---reset a:not([href]):not([tabindex]):focus{outline:0}.freeprivacypolicy-com---reset label{display:inline-block;margin-bottom:.5rem}.freeprivacypolicy-com---reset button{border-radius:2px;padding:.5rem 1rem;outline:none;background:#dcdae5;color:#111;cursor:pointer;border:none}.freeprivacypolicy-com---reset button:focus{outline:none}.freeprivacypolicy-com---reset select{border-style:none;padding:.5rem 1rem}.freeprivacypolicy-com---reset input,.freeprivacypolicy-com---reset button,.freeprivacypolicy-com---reset select,.freeprivacypolicy-com---reset optgroup,.freeprivacypolicy-com---reset textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}.freeprivacypolicy-com---reset button,.freeprivacypolicy-com---reset input{overflow:visible}.freeprivacypolicy-com---reset button,.freeprivacypolicy-com---reset select{text-transform:none}.freeprivacypolicy-com---reset button,.freeprivacypolicy-com---reset html [type=button],.freeprivacypolicy-com---reset [type=reset],.freeprivacypolicy-com---reset [type=submit]{-webkit-appearance:button}.freeprivacypolicy-com---reset button::-moz-focus-inner,.freeprivacypolicy-com---reset [type=button]::-moz-focus-inner,.freeprivacypolicy-com---reset [type=reset]::-moz-focus-inner,.freeprivacypolicy-com---reset [type=submit]::-moz-focus-inner{padding:0;border-style:none}.freeprivacypolicy-com---reset input[type=radio],.freeprivacypolicy-com---reset input[type=checkbox]{box-sizing:border-box;padding:0}.freeprivacypolicy-com---reset [hidden]{display:none !important}',
            "",
        ]);
    },
    function (e, t, i) {
        var n = i(43);
        "string" == typeof n && (n = [[e.i, n, ""]]);
        var o = { hmr: !0, transform: void 0, insertInto: void 0 };
        i(1)(n, o);
        n.locals && (e.exports = n.locals);
    },
    function (e, t, i) {
        (e.exports = i(0)(!1)).push([
            e.i,
            '.freeprivacypolicy-com---nb{overflow:auto;z-index:99999999999;font-size:16px}.freeprivacypolicy-com---nb .cc-nb-main-container{padding:1rem; background-color:#FFF; position:absolute; bottom:0}.freeprivacypolicy-com---nb .cc-nb-title{font-size:24px;font-weight:600}.freeprivacypolicy-com---nb .cc-nb-text{font-size:16px;margin:0 0 1.25rem 0}.freeprivacypolicy-com---nb .cc-nb-okagree,.freeprivacypolicy-com---nb .cc-nb-reject,.freeprivacypolicy-com---nb .cc-nb-changep{font-weight:bold;font-size:14px;margin-right:.25rem !important;margin-bottom:.25rem !important}@media(max-width: 480px){.freeprivacypolicy-com---nb .cc-nb-okagree,.freeprivacypolicy-com---nb .cc-nb-reject,.freeprivacypolicy-com---nb .cc-nb-changep{display:block;width:100%}}.freeprivacypolicy-com---nb-headline{right:0;top:auto;bottom:0;left:0;max-width:100%;position:relative}@media(max-width: 320px),(max-height: 480px){.freeprivacypolicy-com---nb-headline{overflow:auto;height:200px;max-width:100%;right:0;top:auto;bottom:0;left:auto;position:fixed}}.freeprivacypolicy-com---nb-simple{right:0;top:auto;bottom:0;left:auto;max-width:50%;position:fixed}@media screen and (max-width: 600px){.freeprivacypolicy-com---nb-simple{max-width:80%}}@media(max-width: 320px),(max-height: 480px){.freeprivacypolicy-com---nb-simple{overflow:auto;height:200px;max-width:100%}}.freeprivacypolicy-com---nb-interstitial-overlay{position:fixed;top:0;left:0;height:100%;width:100%;background:rgba(0,0,0,.8);z-index:9999999999}.freeprivacypolicy-com---nb-interstitial{right:3vw;top:3vh;left:3vw;max-width:100%;position:fixed}@media(max-width: 320px),(max-height: 480px){.freeprivacypolicy-com---nb-interstitial{overflow:auto;height:200px;right:0;top:auto;bottom:0;left:auto;position:fixed}}.freeprivacypolicy-com---nb-standalone{position:fixed;top:0;left:0;height:100%;width:100%}@media(max-width: 320px),(max-height: 480px){.freeprivacypolicy-com---nb-standalone{overflow:auto;height:200px;max-width:100%;right:0;top:auto;bottom:0;left:auto;position:fixed}}.freeprivacypolicy-com---pc-overlay{width:100%;height:100%;position:fixed;background:rgba(0,0,0,.5);z-index:999999999999;top:0;left:0;display:none}@media screen and (max-width: 600px){.freeprivacypolicy-com---pc-overlay{overflow-y:scroll}}.freeprivacypolicy-com---pc-dialog{position:absolute;margin:30px auto;width:750px;max-width:90%;height:auto;left:0;right:0}.freeprivacypolicy-com---pc-dialog>div{width:100%}.freeprivacypolicy-com---pc-dialog .cc-pc-container{width:100%;display:flex;background:#fff;flex-direction:column}.freeprivacypolicy-com---pc-dialog .cc-pc-head{background:#fff;color:#111;display:flex;flex-direction:row;justify-content:space-between}@media screen and (max-width: 600px){.freeprivacypolicy-com---pc-dialog .cc-pc-head{flex-direction:column}}.freeprivacypolicy-com---pc-dialog .cc-pc-head-title{display:flex;padding-left:15px;flex-direction:column;justify-content:center;align-items:baseline}@media screen and (max-width: 600px){.freeprivacypolicy-com---pc-dialog .cc-pc-head-title{align-items:center;padding:15px 0 0 0}}.freeprivacypolicy-com---pc-dialog .cc-pc-head-title-text{font-size:16px;line-height:1.5;margin:0}.freeprivacypolicy-com---pc-dialog .cc-pc-head-title-headline{font-size:20px;font-weight:600;margin:0}.freeprivacypolicy-com---pc-dialog .cc-pc-head-lang{display:flex;align-items:center;padding-right:15px;min-height:80px;justify-content:center;flex-direction:row-reverse}@media screen and (max-width: 600px){.freeprivacypolicy-com---pc-dialog .cc-pc-head-lang{padding:15px 0;min-height:20px}}.freeprivacypolicy-com---pc-dialog .cc-pc-head-close{display:flex;align-items:center;justify-content:center;margin-left:15px}.freeprivacypolicy-com---pc-dialog .cc-cp-body{display:flex;flex-direction:row;align-items:stretch;background:#292929;color:#f5f5f5;border-bottom:none}@media screen and (max-width: 600px){.freeprivacypolicy-com---pc-dialog .cc-cp-body{flex-direction:column}}.freeprivacypolicy-com---pc-dialog .cc-cp-body-tabs{font-family:Arial,sans-serif !important;width:150px;margin:0;padding:0;background:#e6e6e6;min-width:150px}@media screen and (max-width: 600px){.freeprivacypolicy-com---pc-dialog .cc-cp-body-tabs{width:100%}}.freeprivacypolicy-com---pc-dialog .cc-cp-body-tabs-item{margin:0;padding:0;float:left;display:block;width:100%;color:#666;background:#e6e6e6;border-bottom:1px solid #ccc;border-right:1px solid #ccc;transition:all ease .1s;box-sizing:content-box}@media screen and (max-width: 600px){.freeprivacypolicy-com---pc-dialog .cc-cp-body-tabs-item{border-right:0}}.freeprivacypolicy-com---pc-dialog .cc-cp-body-tabs-item[active=true]{background:#292929;color:#f5f5f5}.freeprivacypolicy-com---pc-dialog .cc-cp-body-tabs-item-link{text-decoration:none;color:#666;display:block;padding:10px 5px 10px 10px;font-weight:700;font-size:12px;line-height:19px;position:relative;cursor:pointer;width:100%;text-align:left;background:none;word-wrap:break-word;white-space:break-spaces}.freeprivacypolicy-com---pc-dialog .cc-cp-body-content{background:#292929;color:#f5f5f5}.freeprivacypolicy-com---pc-dialog .cc-cp-body-content-entry{width:100%;display:none;padding:25px;box-sizing:border-box}.freeprivacypolicy-com---pc-dialog .cc-cp-body-content-entry[active=true]{display:block}.freeprivacypolicy-com---pc-dialog .cc-cp-body-content-entry-title{font-size:24px;font-weight:600}.freeprivacypolicy-com---pc-dialog .cc-cp-body-content-entry-text{font-size:16px;line-height:1.5}.freeprivacypolicy-com---pc-dialog .cc-cp-foot{background:#f2f2f2;display:flex;flex-direction:row;align-items:center;border-top:1px solid #ccc;justify-content:space-between}.freeprivacypolicy-com---pc-dialog .cc-cp-foot-byline{padding:20px 10px;font-size:14px;color:#333;display:block !important}.freeprivacypolicy-com---pc-dialog .cc-cp-foot-byline a{color:#999}.freeprivacypolicy-com---pc-dialog .cc-cp-foot-save{margin-right:10px;opacity:.9;transition:all ease .3s;font-size:14px;font-weight:bold;height:auto}.freeprivacypolicy-com---pc-dialog .cc-cp-foot-save:hover{opacity:1}.freeprivacypolicy-com---pc-dialog input[type=checkbox].cc-custom-checkbox{position:absolute;margin:2px 0 0 16px;cursor:pointer;appearance:none;border:0}.freeprivacypolicy-com---pc-dialog input[type=checkbox].cc-custom-checkbox+label{position:relative;padding:4px 0 0 50px;line-height:2em;cursor:pointer;display:inline;font-size:14px}.freeprivacypolicy-com---pc-dialog input[type=checkbox].cc-custom-checkbox+label:before{content:"";position:absolute;display:block;left:0;top:0;width:40px;height:24px;border-radius:16px;background:#fff;border:1px solid #d9d9d9;-webkit-transition:all .3s;transition:all .3s}.freeprivacypolicy-com---pc-dialog input[type=checkbox].cc-custom-checkbox+label:after{content:"";position:absolute;display:block;left:0px;top:0px;width:24px;height:24px;border-radius:16px;background:#fff;border:1px solid #d9d9d9;-webkit-transition:all .3s;transition:all .3s}.freeprivacypolicy-com---pc-dialog input[type=checkbox].cc-custom-checkbox+label:hover:after{box-shadow:0 0 5px rgba(0,0,0,.3)}.freeprivacypolicy-com---pc-dialog input[type=checkbox].cc-custom-checkbox:checked+label:after{margin-left:16px}.freeprivacypolicy-com---pc-dialog input[type=checkbox].cc-custom-checkbox:checked+label:before{background:#0c479d}',
            "",
        ]);
    },
    function (e, t, i) {
        var n = i(45);
        "string" == typeof n && (n = [[e.i, n, ""]]);
        var o = { hmr: !0, transform: void 0, insertInto: void 0 };
        i(1)(n, o);
        n.locals && (e.exports = n.locals);
    },
    function (e, t, i) {
        (e.exports = i(0)(!1)).push([
            e.i,
            ".freeprivacypolicy-com---palette-dark.freeprivacypolicy-com---nb{background-color:#111;color:#fff}.freeprivacypolicy-com---palette-dark .cc-nb-title{color:#fff}.freeprivacypolicy-com---palette-dark .cc-nb-text{color:#fff}.freeprivacypolicy-com---palette-dark .cc-nb-text a{color:#fff;text-decoration:underline}.freeprivacypolicy-com---palette-dark .cc-nb-text a:hover{text-decoration:none}.freeprivacypolicy-com---palette-dark .cc-nb-text a:focus{box-shadow:0 0 0 2px #3dd000}.freeprivacypolicy-com---palette-dark .cc-nb-okagree{color:#000;background-color:#ff0}.freeprivacypolicy-com---palette-dark .cc-nb-okagree:focus{box-shadow:0 0 0 2px #3dd000}.freeprivacypolicy-com---palette-dark .cc-nb-reject{color:#000;background-color:#ff0}.freeprivacypolicy-com---palette-dark .cc-nb-reject:focus{box-shadow:0 0 0 2px #3dd000}.freeprivacypolicy-com---palette-dark .cc-nb-changep{background-color:#eaeaea;color:#111}.freeprivacypolicy-com---palette-dark .cc-nb-changep:focus{box-shadow:0 0 0 2px #3dd000}.freeprivacypolicy-com---palette-dark .cc-pc-container{background:#212121}.freeprivacypolicy-com---palette-dark .cc-pc-head{background:#212121;color:#fff;border-bottom:1px solid #111}.freeprivacypolicy-com---palette-dark .cc-pc-head-title-headline{color:#fff}.freeprivacypolicy-com---palette-dark .cc-pc-head-title-text{color:#fff}.freeprivacypolicy-com---palette-dark .cc-pc-head-lang select{color:#212121}.freeprivacypolicy-com---palette-dark .cc-pc-head-lang select:focus{box-shadow:0 0 0 2px #ff0}.freeprivacypolicy-com---palette-dark .cc-pc-head-close{background:none;color:#e6e6e6}.freeprivacypolicy-com---palette-dark .cc-pc-head-close:active,.freeprivacypolicy-com---palette-dark .cc-pc-head-close:focus{border:2px solid #ff0}.freeprivacypolicy-com---palette-dark .cc-cp-body{background:#292929 !important;color:#f5f5f5}.freeprivacypolicy-com---palette-dark .cc-cp-body-tabs{color:#666;background:#e6e6e6}.freeprivacypolicy-com---palette-dark .cc-cp-body-tabs-item{border-right-color:#ccc;border-bottom-color:#ccc}.freeprivacypolicy-com---palette-dark .cc-cp-body-tabs-item-link{color:#666}.freeprivacypolicy-com---palette-dark .cc-cp-body-tabs-item-link:hover{color:#666}.freeprivacypolicy-com---palette-dark .cc-cp-body-tabs-item-link:focus{box-shadow:0 0 0 2px #292929}.freeprivacypolicy-com---palette-dark .cc-cp-body-tabs-item[active=true]{background:#292929 !important}.freeprivacypolicy-com---palette-dark .cc-cp-body-tabs-item[active=true] button{color:#f5f5f5}.freeprivacypolicy-com---palette-dark .cc-cp-body-content{background:#292929 !important;color:#f5f5f5}.freeprivacypolicy-com---palette-dark .cc-cp-body-content-entry-title{color:#fff}.freeprivacypolicy-com---palette-dark .cc-cp-body-content-entry-text{color:#fff}.freeprivacypolicy-com---palette-dark .cc-cp-body-content-entry a{color:#fff;text-decoration:underline}.freeprivacypolicy-com---palette-dark .cc-cp-body-content-entry a:hover{text-decoration:none}.freeprivacypolicy-com---palette-dark .cc-cp-body-content-entry a:focus{box-shadow:0 0 0 2px #ff0}.freeprivacypolicy-com---palette-dark .cc-cp-foot{background:#212121;border-top-color:#111}.freeprivacypolicy-com---palette-dark .cc-cp-foot-byline{color:#fff}.freeprivacypolicy-com---palette-dark .cc-cp-foot-byline a:focus{box-shadow:0 0 0 2px #ff0}.freeprivacypolicy-com---palette-dark .cc-cp-foot-save{background:#ff0;color:#000}.freeprivacypolicy-com---palette-dark .cc-cp-foot-save:focus{box-shadow:0 0 0 2px #3dd000}",
            "",
        ]);
    },
    function (e, t, i) {
        var n = i(47);
        "string" == typeof n && (n = [[e.i, n, ""]]);
        var o = { hmr: !0, transform: void 0, insertInto: void 0 };
        i(1)(n, o);
        n.locals && (e.exports = n.locals);
    },
    function (e, t, i) {
        (e.exports = i(0)(!1)).push([
            e.i,
            ".freeprivacypolicy-com---palette-light.freeprivacypolicy-com---nb{background-color:rgba(0,0,0,.8);color:#111}.freeprivacypolicy-com---palette-light .cc-nb-title{color:#111}.freeprivacypolicy-com---palette-light .cc-nb-text{color:#111}.freeprivacypolicy-com---palette-light .cc-nb-text a{color:#0c479d;text-decoration:underline}.freeprivacypolicy-com---palette-light .cc-nb-text a:hover{text-decoration:none}.freeprivacypolicy-com---palette-light .cc-nb-okagree{color:#fff;background-color:#0c479d}.freeprivacypolicy-com---palette-light .cc-nb-okagree:focus{box-shadow:0 0 0 2px #0c479d}.freeprivacypolicy-com---palette-light .cc-nb-reject{color:#fff;background-color:#0c479d}.freeprivacypolicy-com---palette-light .cc-nb-reject:focus{box-shadow:0 0 0 2px #0c479d}.freeprivacypolicy-com---palette-light .cc-nb-changep{background-color:#eaeaea;color:#111}.freeprivacypolicy-com---palette-light .cc-nb-changep:focus{box-shadow:0 0 0 2px #eaeaea}.freeprivacypolicy-com---palette-light .cc-pc-container{background:#fff}.freeprivacypolicy-com---palette-light .cc-pc-head{background:#fff;color:#111;border-bottom:1px solid #ccc}.freeprivacypolicy-com---palette-light .cc-pc-head-title-headline{color:#111}.freeprivacypolicy-com---palette-light .cc-pc-head-title-text{color:#111}.freeprivacypolicy-com---palette-light .cc-pc-head-lang select{color:#111}.freeprivacypolicy-com---palette-light .cc-pc-head-close{background:none;color:#666}.freeprivacypolicy-com---palette-light .cc-pc-head-close:active,.freeprivacypolicy-com---palette-light .cc-cp-body{background:#fbfbfb !important;color:#111}.freeprivacypolicy-com---palette-light .cc-cp-body-tabs{color:#666;background:#e6e6e6}.freeprivacypolicy-com---palette-light .cc-cp-body-tabs-item{border-right-color:#ccc;border-bottom-color:#ccc}.freeprivacypolicy-com---palette-light .cc-cp-body-tabs-item-link{color:#666}.freeprivacypolicy-com---palette-light .cc-cp-body-tabs-item-link:hover{color:#666}.freeprivacypolicy-com---palette-light .cc-cp-body-tabs-item-link:focus{box-shadow:0 0 0 2px #fbfbfb}.freeprivacypolicy-com---palette-light .cc-cp-body-tabs-item[active=true]{background:#fbfbfb !important}.freeprivacypolicy-com---palette-light .cc-cp-body-tabs-item[active=true] button{color:#111}.freeprivacypolicy-com---palette-light .cc-cp-body-content{background:#fbfbfb !important;color:#111}.freeprivacypolicy-com---palette-light .cc-cp-body-content-entry-title{color:#111}.freeprivacypolicy-com---palette-light .cc-cp-body-content-entry-text{color:#111}.freeprivacypolicy-com---palette-light .cc-cp-body-content-entry a{color:#111;text-decoration:underline}.freeprivacypolicy-com---palette-light .cc-cp-body-content-entry a:hover{text-decoration:none}.freeprivacypolicy-com---palette-light .cc-cp-body-content-entry a:focus{box-shadow:0 0 0 2px green}.freeprivacypolicy-com---palette-light .cc-cp-foot{background:#f2f2f2;border-top-color:#ccc}.freeprivacypolicy-com---palette-light .cc-cp-foot-byline{color:#111}.freeprivacypolicy-com---palette-light .cc-cp-foot-byline a:focus{box-shadow:0 0 0 2px green}.freeprivacypolicy-com---palette-light .cc-cp-foot-save{background:#0c479d;color:#fff}.freeprivacypolicy-com---palette-light .cc-cp-foot-save:focus{box-shadow:0 0 0 2px #0c479d}",
            "",
        ]);
    },
    function (e, t, i) {
        var n = i(49);
        "string" == typeof n && (n = [[e.i, n, ""]]);
        var o = { hmr: !0, transform: void 0, insertInto: void 0 };
        i(1)(n, o);
        n.locals && (e.exports = n.locals);
    },
    function (e, t, i) {
        (e.exports = i(0)(!1)).push([e.i, ".freeprivacypolicy-com---is-hidden{display:none}.freeprivacypolicy-com---is-visible{display:block}", ""]);
    },
    function (e, t, i) {
        var n = i(51);
        "string" == typeof n && (n = [[e.i, n, ""]]);
        var o = { hmr: !0, transform: void 0, insertInto: void 0 };
        i(1)(n, o);
        n.locals && (e.exports = n.locals);
    },
    function (e, t, i) {
        (e.exports = i(0)(!1)).push([e.i, ".freeprivacypolicy-com---nb.freeprivacypolicy-com---lang-ar,.freeprivacypolicy-com---pc-overlay.freeprivacypolicy-com---lang-ar{text-align:right}", ""]);
    },
    function (e, t, i) {
        "use strict";
        i.r(t),
            i.d(t, "run", function () {
                return _e;
            }),
            i.d(t, "cookieConsentObject", function () {
                return o;
            });
        i(37), i(40), i(42), i(44), i(46), i(48), i(50);
        var n,
            o,
            a = (function () {
                function e() {}
                return (
                    (e.appendChild = function (e, t, i) {
                        var n, o;
                        return (
                            void 0 === i && (i = null),
                            (n = "string" == typeof e ? document.querySelector(e) : e),
                            (o = "string" == typeof t ? document.querySelector(t) : t),
                            "afterbegin" === i ? n.insertAdjacentElement("afterbegin", o) : n.insertAdjacentElement("beforeend", o),
                            !0
                        );
                    }),
                    (e.setCookie = function (e, t, i, n, o) {
                        void 0 === o && (o = 62);
                        var a = new Date();
                        a.setTime(a.getTime() + 24 * o * 60 * 60 * 1e3);
                        var r = "; expires=" + a.toUTCString(),
                            s = "; domain=" + i,
                            c = "";
                        return n && (c = "; Secure"), (document.cookie = i ? e + "=" + (t || "") + s + r + ";path=/; samesite=strict" + c : e + "=" + (t || "") + r + ";path=/; samesite=strict" + c), !0;
                    }),
                    (e.getCookie = function (e) {
                        for (var t = e + "=", i = document.cookie.split(";"), n = 0; n < i.length; n++) {
                            for (var o = i[n]; " " === o.charAt(0); ) o = o.substring(1, o.length);
                            if (0 === o.indexOf(t)) return o.substring(t.length, o.length);
                        }
                        return null;
                    }),
                    (e.removeCookie = function (e) {
                        document.cookie = e + "=; Max-Age=-99999999;";
                    }),
                    (e.registerEvent = function (e) {
                        var t = document.createEvent("Event");
                        return t.initEvent(e, !0, !0), t;
                    }),
                    (e.searchObjectsArray = function (e, t, i) {
                        for (var n in e) {
                            if (e[n][t] === i) return !0;
                        }
                        return !1;
                    }),
                    (e.magicTransform = function (e) {
                        return decodeURIComponent(
                            atob(e)
                                .split("")
                                .map(function (e) {
                                    return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
                                })
                                .join("")
                        );
                    }),
                    (e.isValidUrl = function (e) {
                        return new RegExp("^(https?:\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(e);
                    }),
                    (e.isBoolean = function (e) {
                        return !1 === e || !0 === e;
                    }),
                    (e.getNonceFromScriptTag = function () {
                        try {
                            var e = document.querySelectorAll('script[type="text/javascript"]'),
                                t = /\/cookie-consent\.js$/,
                                i = null;
                            return (
                                e.forEach(function (e) {
                                    t.test(e.src) && (i = e.getAttribute("data-nonce"));
                                }),
                                i
                            );
                        } catch (e) {
                            return null;
                        }
                    }),
                    e
                );
            })(),
            r = i(2),
            s = i(3),
            c = i(4),
            l = i(5),
            p = i(6),
            u = i(7),
            d = i(8),
            _ = i(9),
            k = i(10),
            m = i(11),
            v = i(12),
            f = i(13),
            y = i(14),
            b = i(15),
            g = i(16),
            h = i(17),
            x = i(18),
            w = i(19),
            z = i(20),
            j = i(21),
            C = i(22),
            L = i(23),
            A = i(24),
            P = i(25),
            S = i(26),
            E = i(27),
            I = i(28),
            O = i(29),
            T = i(30),
            B = i(31),
            N = i(32),
            U = i(33),
            q = i(34),
            D = i(35),
            M = i(36),
            J = (function () {
                function e(e) {
                    (this.cookieConsent = e), (this.userLang = "en"), this.initAvailableLanguages(), this.initDefaultTranslations(), this.detectUserLanguage();
                }
                return (
                    (e.prototype.detectUserLanguage = function () {
                        var e = "en";
                        if (void 0 !== (e = void 0 !== navigator.languages ? navigator.languages[0] : navigator.language)) {
                            if (e.indexOf("-") > 0) {
                                var t = e.split("-");
                                e = t[0];
                            }
                            this.cookieConsent.log("[i18n] Detected owner website language set as: " + e, "info");
                        } else e = this.cookieConsent.ownerSiteLanguage;
                        var i = e.toLowerCase.toString();
                        this.availableTranslations[i] ? (this.userLang = i) : this.availableTranslations[this.cookieConsent.ownerSiteLanguage] ? (this.userLang = this.cookieConsent.ownerSiteLanguage) : (this.userLang = "en");
                    }),
                    (e.prototype.initDefaultTranslations = function () {
                        (this.availableTranslations = {
                            en: r,
                            en_gb: s,
                            de: c,
                            fr: l,
                            es: p,
                            ca_es: u,
                            it: d,
                            sv: _,
                            nl: k,
                            pt: m,
                            fi: v,
                            hu: f,
                            hr: y,
                            cs: b,
                            da: g,
                            ro: h,
                            sk: x,
                            sl: w,
                            pl: z,
                            sr: j,
                            et: C,
                            lt: L,
                            lv: A,
                            ru: P,
                            no: S,
                            bg: E,
                            el: I,
                            he: O,
                            mk: T,
                            cy: B,
                            ja: N,
                            ar: U,
                            tr: q,
                            zh_tw: D,
                            oc: M,
                        }),
                            this.cookieConsent.log("[i18n] Default translations initialized", "info");
                    }),
                    (e.prototype.initAvailableLanguages = function () {
                        (this.availableLanguages = [
                            { value: "en", title: "English" },
                            { value: "en_gb", title: "English (UK)" },
                            { value: "de", title: "German" },
                            { value: "fr", title: "French" },
                            { value: "es", title: "Spanish" },
                            { value: "ca_es", title: "Catalan" },
                            { value: "it", title: "Italian" },
                            { value: "sv", title: "Swedish" },
                            { value: "nl", title: "Dutch" },
                            { value: "pt", title: "Portuguese" },
                            { value: "fi", title: "Finnish" },
                            { value: "hu", title: "Hungarian" },
                            { value: "hr", title: "Croatian" },
                            { value: "cs", title: "Czech" },
                            { value: "da", title: "Danish" },
                            { value: "ro", title: "Romanian" },
                            { value: "sk", title: "Slovak" },
                            { value: "sl", title: "Slovenian" },
                            { value: "pl", title: "Polish" },
                            { value: "sr", title: "Serbian" },
                            { value: "et", title: "Estonian" },
                            { value: "lt", title: "Lithuanian" },
                            { value: "lv", title: "Latvian" },
                            { value: "ru", title: "Russian" },
                            { value: "no", title: "Norwegian" },
                            { value: "bg", title: "Bulgarian" },
                            { value: "el", title: "Greek" },
                            { value: "he", title: "Hebrew" },
                            { value: "mk", title: "Macedonian" },
                            { value: "cy", title: "Welsh" },
                            { value: "ja", title: "Japanese" },
                            { value: "ar", title: "Arabic" },
                            { value: "tr", title: "Turkish" },
                            { value: "zh_tw", title: "Traditional Chinese (zh-TW)" },
                            { value: "oc", title: "Occitan" },
                        ]),
                            this.cookieConsent.log("[i18n] Default languages initialized", "info");
                    }),
                    (e.prototype.$t = function (e, t, i) {
                        void 0 === i && (i = null);
                        var n = this.availableTranslations[this.userLang][e][t];
                        return (
                            "string" == typeof i
                                ? (n = n.replace("%s", i))
                                : Array.isArray(i) &&
                                  i.map(function (e, t) {
                                      var o = i[t];
                                      n = n.replace("%s", o);
                                  }),
                            n || ""
                        );
                    }),
                    e
                );
            })(),
            W = "freeprivacypolicy-com",
            F =
                ((n = function (e, t) {
                    return (n =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (e, t) {
                                e.__proto__ = t;
                            }) ||
                        function (e, t) {
                            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                        })(e, t);
                }),
                function (e, t) {
                    function i() {
                        this.constructor = e;
                    }
                    n(e, t), (e.prototype = null === t ? Object.create(t) : ((i.prototype = t.prototype), new i()));
                }),
            R = function (e, t) {
                var i = "function" == typeof Symbol && e[Symbol.iterator];
                if (!i) return e;
                var n,
                    o,
                    a = i.call(e),
                    r = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; ) r.push(n.value);
                } catch (e) {
                    o = { error: e };
                } finally {
                    try {
                        n && !n.done && (i = a.return) && i.call(a);
                    } finally {
                        if (o) throw o.error;
                    }
                }
                return r;
            },
            K = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(R(arguments[t]));
                return e;
            },
            V = function (e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    i = t && e[t],
                    n = 0;
                if (i) return i.call(e);
                if (e && "number" == typeof e.length)
                    return {
                        next: function () {
                            return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
                        },
                    };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
            },
            $ = (function () {
                function e(e) {
                    (this.acceptedLevels = {}),
                        (this.userAccepted = !1),
                        (this.consentLevelCookieName = "cookie_consent_level"),
                        (this.consentAcceptedCookieName = "cookie_consent_user_accepted"),
                        (this.cookieConsent = e),
                        this.cookieConsent.log("CookieConsent initialized", "info"),
                        this.checkIfUserAccepted(),
                        this.getUserLevels();
                }
                return (
                    (e.prototype.checkIfUserAccepted = function () {
                        "true" === a.getCookie(this.consentAcceptedCookieName) && (this.userAccepted = !0);
                    }),
                    (e.prototype.markUserAccepted = function () {
                        (this.userAccepted = !0), !1 === this.cookieConsent.isDemo && a.setCookie(this.consentAcceptedCookieName, "true", this.cookieConsent.ownerDomain, this.cookieConsent.cookieSecure, this.cookieConsent.cookieDuration);
                    }),
                    (e.prototype.getUserLevels = function () {
                        var e = a.getCookie(this.consentLevelCookieName),
                            t = {};
                        try {
                            t = JSON.parse(decodeURIComponent(e));
                        } catch (e) {
                            t = null;
                        }
                        if (null === t)
                            document.dispatchEvent(this.cookieConsent.events.cc_freshUser),
                                (this.acceptedLevels["strictly-necessary"] = !0),
                                "implied" === this.cookieConsent.ownerConsentType
                                    ? ((this.acceptedLevels.functionality = !0), (this.acceptedLevels.tracking = !0), (this.acceptedLevels.targeting = !0))
                                    : "express" === this.cookieConsent.ownerConsentType && ((this.acceptedLevels.functionality = !1), (this.acceptedLevels.tracking = !1), (this.acceptedLevels.targeting = !1));
                        else
                            for (var i in this.cookieConsent.cookieLevels.cookieLevels) {
                                var n = this.cookieConsent.cookieLevels.cookieLevels[i].id;
                                !0 === t[n] ? (this.acceptedLevels[n] = !0) : (this.acceptedLevels[n] = !1);
                            }
                        this.cookieConsent.log("Proposed accepted levels based on consent type are:", "info"), this.cookieConsent.log(this.acceptedLevels, "info", "table");
                    }),
                    (e.prototype.acceptAllCookieLevels = function () {
                        var e = this;
                        new Promise(function (t, i) {
                            for (var n in e.cookieConsent.cookieLevels.cookieLevels) {
                                var o = e.cookieConsent.cookieLevels.cookieLevels[n].id;
                                e.acceptLevel(o, !1);
                            }
                            t(!0);
                        }).then(function () {
                            document.dispatchEvent(e.cookieConsent.events.cc_scriptsAllLoaded), e.saveCookie();
                        });
                    }),
                    (e.prototype.rejectAllCookieLevels = function () {
                        var e = this;
                        new Promise(function (t, i) {
                            for (var n in e.cookieConsent.cookieLevels.cookieLevels) {
                                var o = e.cookieConsent.cookieLevels.cookieLevels[n].id;
                                "strictly-necessary" != o ? e.rejectLevel(o, !1) : "strictly-necessary" == o && e.acceptLevel(o, !1);
                            }
                            t(!0);
                        }).then(function () {
                            e.saveCookie();
                        });
                    }),
                    (e.prototype.loadAcceptedCookies = function () {
                        for (var e in this.cookieConsent.cookieLevels.cookieLevels) {
                            var t = this.cookieConsent.cookieLevels.cookieLevels[e].id;
                            !1 !== this.acceptedLevels[t] && this.cookieConsent.javascriptItems.enableScriptsByLevel(t);
                        }
                    }),
                    (e.prototype.acceptLevel = function (e, t) {
                        void 0 === t && (t = !0);
                        this.cookieConsent.log("Accepted cookie level: " + e, "info"), (this.acceptedLevels[e] = !0), t && this.saveCookie();
                    }),
                    (e.prototype.rejectLevel = function (e, t) {
                        void 0 === t && (t = !0);
                        this.cookieConsent.log("Rejected cookie level: " + e, "info"), (this.acceptedLevels[e] = !1), t && this.saveCookie();
                    }),
                    (e.prototype.saveCookie = function () {
                        var e = encodeURIComponent(JSON.stringify(this.acceptedLevels));
                        a.setCookie(this.consentLevelCookieName, e, this.cookieConsent.ownerDomain, this.cookieConsent.cookieSecure, this.cookieConsent.cookieDuration), this.cookieConsent.log("Saved cookie with user consent level", "info");
                        var t = this.cookieConsent.events.cc_userConsentSaved;
                        return (t.details = this.acceptedLevels), document.dispatchEvent(t), !0;
                    }),
                    e
                );
            })(),
            H = function () {
                (this.cc_noticeBannerShown = a.registerEvent("cc_noticeBannerShown")),
                    (this.cc_noticeBannerOkOrAgreePressed = a.registerEvent("cc_noticeBannerOkOrAgreePressed")),
                    (this.cc_noticeBannerRejectPressed = a.registerEvent("cc_noticeBannerRejectPressed")),
                    (this.cc_noticeBannerChangePreferencesPressed = a.registerEvent("cc_noticeBannerChangePreferencesPressed")),
                    (this.cc_preferencesCenterClosePressed = a.registerEvent("cc_preferencesCenterClosePressed")),
                    (this.cc_preferencesCenterSavePressed = a.registerEvent("cc_preferencesCenterSavePressed")),
                    (this.cc_userLanguageChanged = a.registerEvent("cc_userLanguageChanged")),
                    (this.cc_freshUser = a.registerEvent("cc_freshUser")),
                    (this.cc_userChangedConsent = a.registerEvent("cc_userChangedConsent")),
                    (this.cc_userConsentSaved = a.registerEvent("cc_userConsentSaved")),
                    (this.cc_scriptsAllLoaded = a.registerEvent("cc_scriptsAllLoaded")),
                    (this.cc_scriptsSpecificLoaded = a.registerEvent("cc_scriptsSpecificLoaded"));
            },
            Z = (function () {
                function e(e) {
                    (this.scripts = {}), (this.cookieConsent = e), this.cookieConsent.log("Cookie Consent initialized", "info"), this.readScripts();
                }
                return (
                    (e.prototype.readScripts = function () {
                        var e = document.querySelectorAll('script[type="text/plain"]');
                        for (var t in e) {
                            var i = e[t];
                            "object" == typeof i && this._noticeScriptIfValid(i);
                        }
                    }),
                    (e.prototype._noticeScriptIfValid = function (e) {
                        var t = e.getAttribute("data-cookie-consent");
                        !0 === a.searchObjectsArray(this.cookieConsent.cookieLevels.cookieLevels, "id", t)
                            ? (this.cookieConsent.log("JavaScript script with valid data-cookie-consent tag found, but not loaded yet:", "info"),
                              this.cookieConsent.log(e, "info"),
                              void 0 === this.scripts[t] && (this.scripts[t] = []),
                              this.scripts[t].push(e))
                            : this.cookieConsent.log("Invalid cookie-consent tag level for JavaScript script: " + t, "warning");
                    }),
                    (e.prototype.enableScriptsByLevel = function (e) {
                        var t = this;
                        new Promise(function (i, n) {
                            var o = !1;
                            if (!t.scripts[e]) return i(o);
                            o = t.scripts[e].length > 0;
                            var r = function (i) {
                                try {
                                    var n = t.scripts[e][i],
                                        o = K(n.attributes),
                                        r = document.createElement("script");
                                    r.setAttribute("type", "text/javascript"),
                                        r.setAttribute("initial-data-cookie-consent", n.getAttribute("data-cookie-consent")),
                                        null !== n.getAttribute("src") && r.setAttribute("src", n.getAttribute("src")),
                                        o.reduce(function (e, t) {
                                            switch (t.name) {
                                                case "data-cookie-consent":
                                                case "type":
                                                    break;
                                                case "nonce":
                                                case "data-nonce":
                                                    r.setAttribute("nonce", t.value);
                                                    break;
                                                default:
                                                    r.setAttribute(t.name, t.value);
                                            }
                                        }, {}),
                                        (r.text = n.innerHTML),
                                        a.appendChild("head", r),
                                        n.parentNode.removeChild(n);
                                } catch (e) {
                                    t.cookieConsent.log("Error while trying to enable a JavaScript script: " + e.message.toString(), "log");
                                }
                                delete t.scripts[e][i];
                            };
                            for (var s in t.scripts[e]) r(s);
                            i(o);
                        }).then(function (i) {
                            if ((!0 === t.cookieConsent.forceCallbacksDispatching && t.cookieConsent.log("forceCallbacksDispatching is enabled", "log"), i || !0 === t.cookieConsent.forceCallbacksDispatching)) {
                                var n = t.cookieConsent.events.cc_scriptsSpecificLoaded;
                                (n.level = e), document.dispatchEvent(n);
                            }
                        });
                    }),
                    e
                );
            })(),
            G = (function () {
                function e(e) {
                    (this.cookieConsent = e),
                        this.cc_noticeBannerShown(),
                        this.cc_noticeBannerOkOrAgreePressed(),
                        this.cc_preferencesCenterClosePressed(),
                        this.cc_noticeBannerRejectPressed(),
                        this.cc_noticeBannerChangePreferencesPressed(),
                        this.cc_userLanguageChanged(),
                        this.cc_preferencesCenterSavePressed(),
                        this.cc_freshUser(),
                        this.cc_userChangedConsent(),
                        this.cc_scriptsAllLoaded(),
                        this.cc_userConsentSaved(),
                        this.cc_scriptsSpecificLoaded();
                }
                return (
                    (e.prototype.cc_noticeBannerShown = function () {
                        var e = this;
                        window.addEventListener("cc_noticeBannerShown", function () {
                            e.cookieConsent.log("cc_noticeBannerShown triggered", "event"), e.cookieConsent.customerCallbacks.callCustomerCallbackByEvent("cc_noticeBannerShown");
                        });
                    }),
                    (e.prototype.cc_noticeBannerOkOrAgreePressed = function () {
                        var e = this;
                        document.addEventListener("cc_noticeBannerOkOrAgreePressed", function () {
                            (this.userConsentTokenClass = new ue(e.cookieConsent)),
                                e.cookieConsent.log("cc_noticeBannerOkOrAgreePressed triggered", "event"),
                                e.cookieConsent.userConsent.acceptAllCookieLevels(),
                                e.cookieConsent.userConsent.markUserAccepted(),
                                e.cookieConsent.pageRefreshConfirmationButtons ? window.location.reload() : e.cookieConsent.userConsent.loadAcceptedCookies(),
                                e.cookieConsent.noticeBannerContainer.hideNoticeBanner(),
                                e.cookieConsent.customerCallbacks.callCustomerCallbackByEvent("cc_noticeBannerOkOrAgreePressed");
                        });
                    }),
                    (e.prototype.cc_noticeBannerRejectPressed = function () {
                        var e = this;
                        window.addEventListener("cc_noticeBannerRejectPressed", function () {
                            (this.userTokenClass = new ue(e.cookieConsent)),
                                e.cookieConsent.log("cc_noticeBannerRejectPressed triggered", "event"),
                                e.cookieConsent.userConsent.rejectAllCookieLevels(),
                                e.cookieConsent.userConsent.markUserAccepted(),
                                e.cookieConsent.noticeBannerContainer.hideNoticeBanner(),
                                e.cookieConsent.customerCallbacks.callCustomerCallbackByEvent("cc_noticeBannerRejectPressed"),
                                e.cookieConsent.pageRefreshConfirmationButtons && window.location.reload();
                        });
                    }),
                    (e.prototype.cc_noticeBannerChangePreferencesPressed = function () {
                        var e = this;
                        window.addEventListener("cc_noticeBannerChangePreferencesPressed", function () {
                            e.cookieConsent.log("cc_noticeBannerChangePreferencesPressed triggered", "event"),
                                e.cookieConsent.preferencesCenterContainer.showPreferencesCenter(),
                                e.cookieConsent.customerCallbacks.callCustomerCallbackByEvent("cc_noticeBannerChangePreferencesPressed");
                        });
                    }),
                    (e.prototype.cc_userLanguageChanged = function () {
                        var e = this;
                        window.addEventListener("cc_userLanguageChanged", function () {
                            e.cookieConsent.log("cc_userLanguageChanged triggered", "event"), e.cookieConsent.customerCallbacks.callCustomerCallbackByEvent("cc_userLanguageChanged");
                        });
                    }),
                    (e.prototype.cc_preferencesCenterClosePressed = function () {
                        var e = this;
                        document.addEventListener("cc_preferencesCenterClosePressed", function () {
                            e.cookieConsent.log("cc_preferencesCenterClosePressed triggered", "event"),
                                e.cookieConsent.preferencesCenterContainer.hidePreferencesCenter(),
                                e.cookieConsent.customerCallbacks.callCustomerCallbackByEvent("cc_preferencesCenterClosePressed");
                        });
                    }),
                    (e.prototype.cc_preferencesCenterSavePressed = function () {
                        var e = this;
                        window.addEventListener("cc_preferencesCenterSavePressed", function () {
                            (e.userConsentTokenClass = new ue(e.cookieConsent)),
                                e.cookieConsent.log("cc_preferencesCenterSavePressed triggered", "event"),
                                e.cookieConsent.userConsent.markUserAccepted(),
                                e.cookieConsent.userConsent.saveCookie(),
                                e.cookieConsent.userConsent.loadAcceptedCookies(),
                                e.cookieConsent.preferencesCenterContainer.hidePreferencesCenter(),
                                e.cookieConsent.noticeBannerContainer.hideNoticeBanner(),
                                e.cookieConsent.customerCallbacks.callCustomerCallbackByEvent("cc_preferencesCenterSavePressed"),
                                e.cookieConsent.pageRefreshConfirmationButtons && window.location.reload();
                        });
                    }),
                    (e.prototype.cc_freshUser = function () {
                        var e = this;
                        window.addEventListener("cc_freshUser", function () {
                            e.cookieConsent.log("cc_freshUser triggered", "event"), e.cookieConsent.customerCallbacks.callCustomerCallbackByEvent("cc_freshUser");
                        });
                    }),
                    (e.prototype.cc_userChangedConsent = function () {
                        var e = this;
                        window.addEventListener("cc_userChangedConsent", function () {
                            e.cookieConsent.log("cc_userChangedConsent triggered", "event"), e.cookieConsent.customerCallbacks.callCustomerCallbackByEvent("cc_userChangedConsent");
                        });
                    }),
                    (e.prototype.cc_userConsentSaved = function () {
                        var e = this;
                        window.addEventListener("cc_userConsentSaved", function (t) {
                            e.cookieConsent.log("cc_userConsentSaved triggered", "event"), e.cookieConsent.customerCallbacks.callCustomerCallbackByEvent("cc_userConsentSaved", t.details);
                        });
                    }),
                    (e.prototype.cc_scriptsAllLoaded = function () {
                        var e = this;
                        window.addEventListener("cc_scriptsAllLoaded", function () {
                            e.cookieConsent.log("cc_scriptsAllLoaded triggered", "event"), e.cookieConsent.customerCallbacks.callCustomerCallbackByEvent("cc_scriptsAllLoaded");
                        });
                    }),
                    (e.prototype.cc_scriptsSpecificLoaded = function () {
                        var e = this;
                        window.addEventListener("cc_scriptsSpecificLoaded", function (t) {
                            e.cookieConsent.log("cc_scriptsSpecificLoaded triggered", "event"), e.cookieConsent.customerCallbacks.callCustomerCallbackByEvent("cc_scriptsSpecificLoaded", t.level);
                        });
                    }),
                    e
                );
            })(),
            Y = (function () {
                function e(e, t) {
                    (this.cookieConsent = e), this.cookieConsent.log("CustomerCallbacks initialized", "info"), this.cookieConsent.log(t, "info"), (this.customerCallbacksObject = t);
                }
                return (
                    (e.prototype.callCustomerCallbackByEvent = function (e, t) {
                        void 0 === t && (t = null);
                        try {
                            var i = {
                                cc_noticeBannerShown: "notice_banner_loaded",
                                cc_noticeBannerOkOrAgreePressed: "i_agree_button_clicked",
                                cc_noticeBannerRejectPressed: "i_decline_button_clicked",
                                cc_noticeBannerChangePreferencesPressed: "change_my_preferences_button_clicked",
                                cc_scriptsAllLoaded: "scripts_all_loaded",
                                cc_scriptsSpecificLoaded: "scripts_specific_loaded",
                                cc_userConsentSaved: "user_consent_saved",
                            }[e];
                            if ((this.cookieConsent.log("Calling Customer Callback: " + i, "info"), "function" == typeof this.customerCallbacksObject[i])) this.customerCallbacksObject[i](t);
                            else {
                                var n = window[this.customerCallbacksObject[i]];
                                "function" == typeof n && n(t);
                            }
                        } catch (e) {}
                    }),
                    e
                );
            })(),
            Q = (function () {
                function e(e) {
                    (this.cookieConsent = e), this.initPreferenceItems();
                }
                return (
                    (e.prototype.languageChanged = function () {
                        this.initPreferenceItems();
                    }),
                    (e.prototype.initPreferenceItems = function () {
                        var e, t;
                        (this.preferenceItems = [
                            {
                                title: this.cookieConsent.i18n.$t("i18n", "pc_yprivacy_title"),
                                title_container: "title_your_privacy",
                                content_container: "content_your_privacy",
                                content:
                                    "<p class='cc-cp-body-content-entry-title'>" +
                                    this.cookieConsent.i18n.$t("i18n", "pc_yprivacy_text_1") +
                                    "</p><p class='cc-cp-body-content-entry-text'>" +
                                    this.cookieConsent.i18n.$t("i18n", "pc_yprivacy_text_2") +
                                    "</p><p class='cc-cp-body-content-entry-text'>" +
                                    this.cookieConsent.i18n.$t("i18n", "pc_yprivacy_text_3") +
                                    "</p>",
                            },
                        ]),
                            (this.cookieLevels = [
                                {
                                    id: "strictly-necessary",
                                    title: this.cookieConsent.i18n.$t("i18n", "pc_sncssr_text_1"),
                                    content:
                                        "<p class='cc-cp-body-content-entry-title'>" +
                                        this.cookieConsent.i18n.$t("i18n", "pc_sncssr_text_1") +
                                        "</p><p class='cc-cp-body-content-entry-text'>" +
                                        this.cookieConsent.i18n.$t("i18n", "pc_sncssr_text_2") +
                                        "</p><p class='cc-cp-body-content-entry-text'>" +
                                        this.cookieConsent.i18n.$t("i18n", "pc_sncssr_text_3") +
                                        "</p>",
                                },
                                {
                                    id: "functionality",
                                    title: this.cookieConsent.i18n.$t("i18n", "pc_fnct_text_1"),
                                    content:
                                        "<p class='cc-cp-body-content-entry-title'>" +
                                        this.cookieConsent.i18n.$t("i18n", "pc_fnct_text_1") +
                                        "</p><p class='cc-cp-body-content-entry-text'>" +
                                        this.cookieConsent.i18n.$t("i18n", "pc_fnct_text_2") +
                                        "</p><p class='cc-cp-body-content-entry-text'>" +
                                        this.cookieConsent.i18n.$t("i18n", "pc_fnct_text_3") +
                                        "</p>",
                                },
                                {
                                    id: "tracking",
                                    title: this.cookieConsent.i18n.$t("i18n", "pc_trck_text_1"),
                                    content:
                                        "<p class='cc-cp-body-content-entry-title'>" +
                                        this.cookieConsent.i18n.$t("i18n", "pc_trck_text_1") +
                                        "</p><p class='cc-cp-body-content-entry-text'>" +
                                        this.cookieConsent.i18n.$t("i18n", "pc_trck_text_2") +
                                        "</p><p class='cc-cp-body-content-entry-text'>" +
                                        this.cookieConsent.i18n.$t("i18n", "pc_trck_text_3") +
                                        "</p><p class='cc-cp-body-content-entry-text'>" +
                                        this.cookieConsent.i18n.$t("i18n", "pc_trck_text_4") +
                                        "</p>",
                                },
                                {
                                    id: "targeting",
                                    title: this.cookieConsent.i18n.$t("i18n", "pc_trgt_text_1"),
                                    content:
                                        "<p class='cc-cp-body-content-entry-title'>" +
                                        this.cookieConsent.i18n.$t("i18n", "pc_trgt_text_1") +
                                        "</p><p class='cc-cp-body-content-entry-text'>" +
                                        this.cookieConsent.i18n.$t("i18n", "pc_trgt_text_2") +
                                        "</p><p class='cc-cp-body-content-entry-text'>" +
                                        this.cookieConsent.i18n.$t("i18n", "pc_trgt_text_3") +
                                        "</p><p class='cc-cp-body-content-entry-text'>" +
                                        this.cookieConsent.i18n.$t("i18n", "pc_trgt_text_4") +
                                        "</p>",
                                },
                            ]);
                        try {
                            for (var i = V(this.cookieLevels), n = i.next(); !n.done; n = i.next()) {
                                var o = n.value;
                                this.preferenceItems.push({ id: o.id, title: o.title, title_container: "title_" + o.id, content_container: "content_" + o.id, content: o.content });
                            }
                        } catch (t) {
                            e = { error: t };
                        } finally {
                            try {
                                n && !n.done && (t = i.return) && t.call(i);
                            } finally {
                                if (e) throw e.error;
                            }
                        }
                        this.preferenceItems.push({
                            title: this.cookieConsent.i18n.$t("i18n", "pc_minfo_text_1"),
                            title_container: "title_more_information",
                            content_container: "content_more_information",
                            content:
                                "<p class='cc-cp-body-content-entry-title'>" +
                                this.cookieConsent.i18n.$t("i18n", "pc_minfo_text_1") +
                                "</p><p class='cc-cp-body-content-entry-text'>" +
                                this.cookieConsent.i18n.$t("i18n", "pc_minfo_text_2") +
                                "</p>",
                        }),
                            null !== this.cookieConsent.ownerWebsitePrivacyPolicyUrl &&
                                a.isValidUrl(this.cookieConsent.ownerWebsitePrivacyPolicyUrl) &&
                                (this.preferenceItems[this.preferenceItems.length - 1].content =
                                    this.preferenceItems[this.preferenceItems.length - 1].content +
                                    "<p class='cc-cp-body-content-entry-text'>" +
                                    this.cookieConsent.i18n.$t("i18n", "pc_minfo_text_3", this.cookieConsent.ownerWebsitePrivacyPolicyUrl) +
                                    "</p>");
                    }),
                    e
                );
            })(),
            X = (function () {
                function e(e) {
                    (this.preferencesCenterOverlay = null), (this.cookieConsent = e);
                }
                return (
                    (e.prototype.listenToUserButtonToOpenPreferences = function (e) {
                        var t = this,
                            i = document.querySelectorAll(e);
                        t.cookieConsent.log("userButton detected:", "info"),
                            t.cookieConsent.log(i, "info", "table"),
                            i &&
                                i.forEach(function (e) {
                                    e.addEventListener("click", function () {
                                        document.dispatchEvent(t.cookieConsent.events.cc_noticeBannerChangePreferencesPressed), t.showPreferencesCenter();
                                    });
                                });
                    }),
                    (e.prototype.showPreferencesCenter = function () {
                        var e,
                            t = this;
                        null === this.preferencesCenterOverlay && ((this.preferencesCenterOverlay = this.createPreferencesCenterOverlayAndDialog()), a.appendChild("body", this.preferencesCenterOverlay)),
                            this.preferencesCenterOverlay.classList.add(W + "---is-visible"),
                            t.cookieConsent.log("Preferences Center shown", "info"),
                            this.preferencesCenterOverlay.setAttribute("role", "dialog"),
                            this.preferencesCenterOverlay.setAttribute("aria-labelledby", "cc-pc-head-title-headline"),
                            this.preferencesCenterOverlay.setAttribute("tabindex", "-1"),
                            this.preferencesCenterOverlay.focus();
                        var i = document.querySelector("#" + W + "---preferences-center"),
                            n = i.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')[0],
                            o = i.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),
                            r = o[o.length - 1];
                        t.cookieConsent.log("preferencesCenterOverlayModal_firstFocusableElement: " + n, "info"),
                            t.cookieConsent.log("preferencesCenterOverlayModal_focusableContent: " + o, "info"),
                            t.cookieConsent.log("preferencesCenterOverlayModal_lastFocusableElement: " + r, "info"),
                            document.addEventListener("keydown", function (e) {
                                var i, o;
                                ("Tab" === e.key || 9 === e.keyCode) &&
                                    (e.shiftKey
                                        ? document.activeElement === n &&
                                          (t.cookieConsent.log("preferencesCenterOverlayModal_lastFocusableElement before focus: " + r, "info"), null === (i = r) || void 0 === i || i.focus(), e.preventDefault())
                                        : document.activeElement === r &&
                                          (t.cookieConsent.log("preferencesCenterOverlayModal_firstFocusableElement before focus: " + n, "info"), null === (o = n) || void 0 === o || o.focus(), e.preventDefault()));
                            }),
                            t.cookieConsent.log("preferencesCenterOverlayModal_firstFocusableElement before focus: " + n, "info"),
                            null === (e = n) || void 0 === e || e.focus(),
                            this.preferencesCenterOverlay.classList.add(W + "---lang-" + t.cookieConsent.i18n.userLang);
                    }),
                    (e.prototype.hidePreferencesCenter = function () {
                        this.preferencesCenterOverlay.classList.remove(W + "---is-visible"), this.cookieConsent.log("Preferences Center hidden", "info");
                    }),
                    (e.prototype.refreshPreferencesCenter = function () {
                        if (null !== this.preferencesCenterOverlay) return this.preferencesCenterOverlay.parentNode.removeChild(this.preferencesCenterOverlay), (this.preferencesCenterOverlay = null), this.showPreferencesCenter();
                    }),
                    (e.prototype.createPreferencesCenterOverlayAndDialog = function () {
                        var e = this,
                            t = document.createElement("div");
                        t.classList.add(W + "---pc-overlay"),
                            t.classList.add(e.cookieConsent.colorPalette.getClass()),
                            t.classList.add(W + "---reset"),
                            (t.id = W + "---preferences-center"),
                            t.setAttribute("id", W + "---preferences-center");
                        var i = document.createElement("div");
                        i.classList.add(W + "---pc-dialog");
                        var n = document.createElement("div");
                        n.classList.add("cc-pc-container");
                        var o = document.createElement("div");
                        o.classList.add("cc-pc-head");
                        var r = document.createElement("div");
                        if ((r.classList.add("cc-pc-head-title"), e.cookieConsent.ownerWebsiteName.length > 2)) {
                            var s = document.createElement("p");
                            s.classList.add("cc-pc-head-title-text"), (s.innerText = e.cookieConsent.ownerWebsiteName), a.appendChild(r, s);
                        }
                        var c = document.createElement("p");
                        c.classList.add("cc-pc-head-title-headline"), c.setAttribute("id", "cc-pc-head-title-headline"), (c.innerHTML = e.cookieConsent.i18n.$t("i18n", "pc_title")), a.appendChild(r, c);
                        var l = document.createElement("div");
                        l.classList.add("cc-pc-head-lang");
                        var p = this.obtainLanguageSelector();
                        a.appendChild(l, p);
                        var u = document.createElement("button");
                        u.classList.add("cc-pc-head-close"),
                            (u.innerHTML = "&#x2715;"),
                            u.addEventListener("click", function () {
                                document.dispatchEvent(e.cookieConsent.events.cc_preferencesCenterClosePressed);
                            }),
                            a.appendChild(o, r),
                            a.appendChild(o, l),
                            !1 === e.cookieConsent.ownerPreferencesCenterCloseButtonHide && a.appendChild(l, u, "afterbegin");
                        var d = document.createElement("div");
                        d.classList.add("cc-cp-body");
                        var _ = this.getMenuContainer(),
                            k = this.getContentContainer();
                        a.appendChild(d, _), a.appendChild(d, k);
                        var m = this.getFooterContainer();
                        return a.appendChild(n, o), a.appendChild(n, d), a.appendChild(n, m), a.appendChild(i, n), a.appendChild(t, i), t;
                    }),
                    (e.prototype.obtainLanguageSelector = function () {
                        var e = this,
                            t = document.createElement("select");
                        return (
                            t.classList.add("cc-pc-head-lang-select"),
                            [].forEach.call(e.cookieConsent.i18n.availableLanguages, function (i) {
                                var n = document.createElement("option");
                                (n.text = i.title), (n.value = i.value), e.cookieConsent.i18n.userLang === n.value && n.setAttribute("selected", "selected"), t.add(n);
                            }),
                            t.addEventListener("change", function () {
                                (e.cookieConsent.i18n.userLang = t.value), e.cookieConsent.cookieLevels.languageChanged(), e.refreshPreferencesCenter(), document.dispatchEvent(e.cookieConsent.events.cc_userLanguageChanged);
                            }),
                            t
                        );
                    }),
                    (e.prototype.getContentContainer = function () {
                        var e = this,
                            t = document.createElement("div");
                        t.classList.add("cc-cp-body-content");
                        var i = 0;
                        return (
                            e.cookieConsent.cookieLevels.preferenceItems.forEach(function (n) {
                                var o = document.createElement("div");
                                if (
                                    (o.classList.add("cc-cp-body-content-entry"),
                                    o.setAttribute("id", n.content_container),
                                    o.setAttribute("role", "tabpanel"),
                                    o.setAttribute("aria-labelledby", n.title_container),
                                    o.setAttribute("hidden", ""),
                                    o.setAttribute("tabindex", "0"),
                                    o.setAttribute("content_layout", n.content_container),
                                    o.setAttribute("active", "false"),
                                    (o.innerHTML = n.content),
                                    0 === i && (o.setAttribute("active", "true"), o.removeAttribute("hidden")),
                                    i++,
                                    n.id)
                                ) {
                                    var r = e._getLevelCheckbox(n);
                                    a.appendChild(o, r);
                                }
                                a.appendChild(t, o);
                            }),
                            t
                        );
                    }),
                    (e.prototype.getMenuContainer = function () {
                        var e = this,
                            t = document.createElement("ul");
                        t.classList.add("cc-cp-body-tabs"), t.setAttribute("role", "tablist"), t.setAttribute("aria-label", "Menu");
                        var i = 0;
                        return (
                            e.cookieConsent.cookieLevels.preferenceItems.forEach(function (n) {
                                var o = document.createElement("li");
                                o.classList.add("cc-cp-body-tabs-item");
                                var r = document.createElement("button");
                                r.classList.add("cc-cp-body-tabs-item-link"),
                                    r.setAttribute("id", n.title_container),
                                    r.setAttribute("role", "tab"),
                                    r.setAttribute("aria-selected", "false"),
                                    r.setAttribute("aria-controls", n.content_container),
                                    r.setAttribute("tabindex", "-1"),
                                    r.setAttribute("t", n.content_container),
                                    (r.innerHTML = n.title),
                                    0 === i && (o.setAttribute("active", "true"), r.setAttribute("aria-selected", "true"), r.setAttribute("tabindex", "0")),
                                    i++,
                                    r.addEventListener("click", function (t) {
                                        t.preventDefault(), e.cookieConsent.log("Preferences Center tab item clicked: " + n.title, "info");
                                        var i = document.querySelectorAll('li[active="true"]');
                                        [].forEach.call(i, function (e) {
                                            e.setAttribute("active", "false"), e.firstElementChild.setAttribute("aria-selected", "false"), e.firstElementChild.setAttribute("tabindex", "-1");
                                        }),
                                            o.setAttribute("active", "true"),
                                            o.firstElementChild.setAttribute("aria-selected", "true"),
                                            o.firstElementChild.setAttribute("tabindex", "0");
                                        try {
                                            var a = document.querySelectorAll("div[content_layout]");
                                            [].forEach.call(a, function (e) {
                                                e.setAttribute("active", "false"), e.setAttribute("hidden", "");
                                            });
                                            var r = document.querySelector('div[content_layout="' + n.content_container + '"]');
                                            r.setAttribute("active", "true"), r.removeAttribute("hidden");
                                        } catch (t) {}
                                    });
                                var s = 0,
                                    c = document.getElementsByClassName("cc-cp-body-tabs-item-link");
                                t.addEventListener("keydown", function (e) {
                                    ("ArrowDown" !== e.key && "ArrowUp" !== e.key && "ArrowLeft" !== e.key && "ArrowRight" !== e.key) ||
                                        (c[s].setAttribute("tabindex", "-1"),
                                        "ArrowDown" === e.key || "ArrowRight" === e.key ? ++s >= c.length && (s = 0) : ("ArrowUp" !== e.key && "ArrowLeft" !== e.key) || (--s < 0 && (s = c.length - 1)),
                                        c[s].setAttribute("tabindex", "0"),
                                        c[s].focus());
                                }),
                                    a.appendChild(o, r),
                                    a.appendChild(t, o);
                            }),
                            t
                        );
                    }),
                    (e.prototype.getFooterContainer = function () {
                        var e = this,
                            t = document.createElement("div");
                        t.classList.add("cc-cp-foot");
                        var i = document.createElement("div");
                        i.classList.add("cc-cp-foot-byline"),
                            (i.innerHTML = '&nbsp;');
                        var n = document.createElement("div");
                        n.classList.add("cc-cp-foot-button");
                        var o = document.createElement("button");
                        return (
                            o.classList.add("cc-cp-foot-save"),
                            (o.innerHTML = e.cookieConsent.i18n.$t("i18n", "pc_save")),
                            o.addEventListener("click", function () {
                                document.dispatchEvent(e.cookieConsent.events.cc_preferencesCenterSavePressed);
                            }),
                            a.appendChild(n, o),
                            a.appendChild(t, i),
                            a.appendChild(t, n),
                            t
                        );
                    }),
                    (e.prototype._getLevelCheckbox = function (e) {
                        var t = this,
                            i = document.createElement("div");
                        if ((i.classList.add("cc-custom-checkbox"), "strictly-necessary" !== e.id)) {
                            var n = t.cookieConsent.userConsent.acceptedLevels,
                                o = document.createElement("input");
                            o.setAttribute("cookie_consent_toggler", "true"),
                                o.setAttribute("type", "checkbox"),
                                o.setAttribute("class", "cc-custom-checkbox"),
                                o.setAttribute("id", e.id),
                                o.setAttribute("name", e.id),
                                o.setAttribute("aria-labelledby", e.id + "_label"),
                                (r = document.createElement("label")).setAttribute("for", e.id),
                                r.setAttribute("id", e.id + "_label"),
                                n[e.id]
                                    ? (o.setAttribute("checked", "checked"), o.setAttribute("aria-checked", "true"), r.setAttribute("class", "is-active"), (r.innerHTML = t.cookieConsent.i18n.$t("i18n", "active")))
                                    : (o.setAttribute("aria-checked", "false"), r.setAttribute("class", "is-inactive"), (r.innerHTML = t.cookieConsent.i18n.$t("i18n", "inactive"))),
                                o.addEventListener("change", function () {
                                    var i = o.checked,
                                        n = e.id,
                                        a = document.querySelector('label[for="' + n + '"]');
                                    t.cookieConsent.log("User changed cookie level [" + n + "], new status: " + i, "info"),
                                        document.dispatchEvent(t.cookieConsent.events.cc_userChangedConsent),
                                        !0 === i
                                            ? (t.cookieConsent.userConsent.acceptLevel(n, !1), (a.innerHTML = t.cookieConsent.i18n.$t("i18n", "active")))
                                            : (t.cookieConsent.userConsent.rejectLevel(n, !1), (a.innerHTML = t.cookieConsent.i18n.$t("i18n", "inactive")));
                                }),
                                o.addEventListener("keypress", function (e) {
                                    if (" " === e.key || "Spacebar" === e.key)
                                        switch (o.getAttribute("aria-checked")) {
                                            case "true":
                                                o.setAttribute("aria-checked", "false");
                                                break;
                                            case "false":
                                                o.setAttribute("aria-checked", "true");
                                        }
                                }),
                                a.appendChild(i, o),
                                a.appendChild(i, r);
                        } else {
                            var r,
                                s = document.createElement("input");
                            s.setAttribute("cookie_consent_toggler", "true"),
                                s.setAttribute("type", "checkbox"),
                                s.setAttribute("checked", "checked"),
                                s.setAttribute("aria-checked", "true"),
                                s.setAttribute("disabled", "disabled"),
                                s.setAttribute("class", "cc-custom-checkbox"),
                                s.setAttribute("id", e.id),
                                s.setAttribute("name", e.id),
                                s.setAttribute("aria-labelledby", e.id + "_label"),
                                s.setAttribute("tabindex", "0"),
                                (r = document.createElement("label")).setAttribute("for", e.id),
                                r.setAttribute("id", e.id + "_label"),
                                (r.innerHTML = t.cookieConsent.i18n.$t("i18n", "always_active")),
                                a.appendChild(i, s),
                                a.appendChild(i, r);
                        }
                        return i;
                    }),
                    e
                );
            })(),
            ee = (function () {
                function e(e) {
                    (this.noticeBanner = null), (this.noticeBannerOverlay = null), (this.noticeBannerExtraCss = []), (this.cookieConsent = e), this.noticeBannerExtraCss.push(e.colorPalette.getClass());
                }
                return (
                    (e.prototype.initNoticeBanner = function () {
                        var e, t;
                        if (
                            (null === this.noticeBanner && (this.noticeBanner = this.createNoticeBanner()),
                            (t =
                                "afterbegin" === this.cookieConsent.ownerNoticeBannerAppendContentPosition || "beforeend" === this.cookieConsent.ownerNoticeBannerAppendContentPosition
                                    ? this.cookieConsent.ownerNoticeBannerAppendContentPosition
                                    : "afterbegin"),
                            a.appendChild("body", this.noticeBanner, t),
                            this.cookieConsent.log("Notice Banner shown " + t, "info"),
                            document.dispatchEvent(this.cookieConsent.events.cc_noticeBannerShown),
                            "interstitial" === this.cookieConsent.ownerNoticeBannerType || "standalone" === this.cookieConsent.ownerNoticeBannerType)
                        ) {
                            var i = document.querySelector("#" + W + "---nb"),
                                n = i.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')[0],
                                o = i.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),
                                r = o[o.length - 1];
                            document.addEventListener("keydown", function (e) {
                                var t, i;
                                ("Tab" === e.key || 9 === e.keyCode) &&
                                    (e.shiftKey
                                        ? document.activeElement === n && (null === (t = r) || void 0 === t || t.focus(), e.preventDefault())
                                        : document.activeElement === r && (null === (i = n) || void 0 === i || i.focus(), e.preventDefault()));
                            }),
                                null === (e = n) || void 0 === e || e.focus();
                        }
                        return !0;
                    }),
                    (e.prototype.hideNoticeBanner = function () {
                        try {
                            this.noticeBanner.classList.add(W + "---is-hidden"), this.cookieConsent.log("Notice Banner hidden", "info");
                        } catch (e) {}
                    }),
                    (e.prototype.createNoticeBanner = function () {
                        var e,
                            t,
                            i = document.createElement("div");
                        if (
                            (i.classList.add(W + "---reset"),
                            i.classList.add(W + "---nb"),
                            i.setAttribute("id", W + "---nb"),
                            i.setAttribute("role", "dialog"),
                            i.setAttribute("aria-modal", "true"),
                            i.setAttribute("aria-labelledby", "cc-nb-title"),
                            i.setAttribute("aria-describedby", "cc-nb-text"),
                            this.noticeBannerExtraCss.length)
                        )
                            try {
                                for (var n = V(this.noticeBannerExtraCss), o = n.next(); !o.done; o = n.next()) {
                                    var r = o.value;
                                    i.classList.add(r);
                                }
                            } catch (t) {
                                e = { error: t };
                            } finally {
                                try {
                                    o && !o.done && (t = n.return) && t.call(n);
                                } finally {
                                    if (e) throw e.error;
                                }
                            }
                        if ((i.classList.add(W + "---lang-" + this.cookieConsent.i18n.userLang), a.appendChild(i, this.createNoticeBannerContent()), "interstitial" === this.cookieConsent.ownerNoticeBannerType)) {
                            var s = document.createElement("div");
                            return s.classList.add(W + "---nb-interstitial-overlay"), a.appendChild(s, i), s;
                        }
                        return i;
                    }),
                    (e.prototype.createNoticeBannerContent = function () {
                        var e = this,
                            t = document.createElement("div");
                        t.classList.add("cc-nb-main-container");
                        var i = document.createElement("div");
                        i.classList.add("cc-nb-title-container");
                        var n = document.createElement("p");
                        n.classList.add("cc-nb-title"), n.setAttribute("id", "cc-nb-title"), (n.innerText = e.cookieConsent.i18n.$t("i18n", "nb_title")), a.appendChild(i, n);
                        var o = document.createElement("div");
                        o.classList.add("cc-nb-text-container");
                        var r = document.createElement("p");
                        r.classList.add("cc-nb-text"), r.setAttribute("id", "cc-nb-text"), (r.innerHTML = e.cookieConsent.i18n.$t("i18n", "nb_text"));
                        var s = document.createElement("span");
                        s.classList.add("cc-nb-text-urls"), (s.innerHTML = " ");
                        var c = document.createElement("span");
                        c.classList.add("cc-nb-text-urls-privacy"), c.setAttribute("role", "link");
                        var l = document.createElement("span");
                        l.classList.add("cc-nb-text-urls-impressum"), l.setAttribute("role", "link");
                        var p = document.createElement("span");
                        p.classList.add("cc-nb-text-urls-separator"),
                            (p.innerHTML = " | "),
                            e.cookieConsent.noticeBannerInsertLegalUrls &&
                                (e.cookieConsent.ownerWebsitePrivacyPolicyUrl && e.cookieConsent.ownerWebsiteImpressumUrl
                                    ? a.isValidUrl(e.cookieConsent.ownerWebsitePrivacyPolicyUrl) &&
                                      a.isValidUrl(e.cookieConsent.ownerWebsiteImpressumUrl) &&
                                      ((c.innerHTML = e.cookieConsent.i18n.$t("i18n", "privacy_policy", e.cookieConsent.ownerWebsitePrivacyPolicyUrl)),
                                      (l.innerHTML = e.cookieConsent.i18n.$t("i18n", "impressum", e.cookieConsent.ownerWebsiteImpressumUrl)),
                                      a.appendChild(s, c),
                                      a.appendChild(c, p),
                                      a.appendChild(s, l))
                                    : e.cookieConsent.ownerWebsitePrivacyPolicyUrl && a.isValidUrl(e.cookieConsent.ownerWebsitePrivacyPolicyUrl)
                                    ? ((c.innerHTML = e.cookieConsent.i18n.$t("i18n", "privacy_policy", e.cookieConsent.ownerWebsitePrivacyPolicyUrl)), a.appendChild(s, c))
                                    : e.cookieConsent.ownerWebsiteImpressumUrl &&
                                      a.isValidUrl(e.cookieConsent.ownerWebsiteImpressumUrl) &&
                                      ((l.innerHTML = e.cookieConsent.i18n.$t("i18n", "impressum", e.cookieConsent.ownerWebsiteImpressumUrl)), a.appendChild(s, l)),
                                a.appendChild(r, s)),
                            a.appendChild(o, r);
                        var u = document.createElement("div");
                        u.classList.add("cc-nb-buttons-container");
                        var d = document.createElement("button");
                        d.classList.add("cc-nb-okagree"),
                            d.setAttribute("role", "button"),
                            "express" == e.cookieConsent.ownerConsentType ? (d.innerHTML = e.cookieConsent.i18n.$t("i18n", "nb_agree")) : (d.innerHTML = e.cookieConsent.i18n.$t("i18n", "nb_ok")),
                            d.addEventListener("click", function () {
                                document.dispatchEvent(e.cookieConsent.events.cc_noticeBannerOkOrAgreePressed);
                            }),
                            a.appendChild(u, d);
                        var _ = document.createElement("button");
                        _.classList.add("cc-nb-reject"),
                            _.setAttribute("role", "button"),
                            (_.innerHTML = e.cookieConsent.i18n.$t("i18n", "nb_reject")),
                            _.addEventListener("click", function () {
                                document.dispatchEvent(e.cookieConsent.events.cc_noticeBannerRejectPressed);
                            }),
                            "express" == e.cookieConsent.ownerConsentType && !1 === e.cookieConsent.ownerNoticeBannerRejectButtonHide && a.appendChild(u, _);
                        var k = document.createElement("button");
                        return (
                            k.classList.add("cc-nb-changep"),
                            k.setAttribute("role", "button"),
                            (k.innerHTML = e.cookieConsent.i18n.$t("i18n", "nb_changep")),
                            k.addEventListener("click", function () {
                                document.dispatchEvent(e.cookieConsent.events.cc_noticeBannerChangePreferencesPressed);
                            }),
                            a.appendChild(u, k),
                            a.appendChild(t, i),
                            a.appendChild(t, o),
                            a.appendChild(t, u),
                            t
                        );
                    }),
                    e
                );
            })(),
            te = (function (e) {
                function t(t) {
                    var i = e.call(this, t) || this;
                    return i.noticeBannerExtraCss.push(W + "---nb-simple"), i;
                }
                return F(t, e), t;
            })(ee),
            ie = (function (e) {
                function t(t) {
                    var i = e.call(this, t) || this;
                    return i.noticeBannerExtraCss.push(W + "---nb-headline"), i;
                }
                return F(t, e), t;
            })(ee),
            ne = (function (e) {
                function t(t) {
                    var i = e.call(this, t) || this;
                    return i.noticeBannerExtraCss.push(W + "---nb-interstitial"), i;
                }
                return F(t, e), t;
            })(ee),
            oe = (function (e) {
                function t(t) {
                    var i = e.call(this, t) || this;
                    return i.noticeBannerExtraCss.push(W + "---nb-standalone"), i;
                }
                return F(t, e), t;
            })(ee),
            ae = (function () {
                function e(e) {
                    e.log("ConsentType main class initialized", "info");
                }
                return (e.prototype.loadInitialCookiesForNewUser = function () {}), e;
            })(),
            re = (function (e) {
                function t(t) {
                    var i = e.call(this, t) || this;
                    return (i.cookieConsent = t), i;
                }
                return (
                    F(t, e),
                    (t.prototype.loadInitialCookiesForNewUser = function () {
                        var e = this;
                        e.cookieConsent.log("consentImplied loadInitialCookiesForNewUser triggered", "info");
                        var t = !1,
                            i = !1,
                            n = !1;
                        if (null !== e.cookieConsent.ownerPageLoadConsentLevels)
                            for (var o in e.cookieConsent.ownerPageLoadConsentLevels) {
                                var a = e.cookieConsent.ownerPageLoadConsentLevels[o];
                                "functionality" == a && (t = !0), "tracking" == a && (i = !0), "targeting" == a && (n = !0);
                            }
                        else (t = !0), (i = !0), (n = !0);
                        new Promise(function (o, a) {
                            e.cookieConsent.javascriptItems.enableScriptsByLevel("strictly-necessary"),
                                t ? (e.cookieConsent.userConsent.acceptLevel("functionality", !1), e.cookieConsent.javascriptItems.enableScriptsByLevel("functionality")) : e.cookieConsent.userConsent.rejectLevel("functionality", !1),
                                i ? (e.cookieConsent.userConsent.acceptLevel("tracking", !1), e.cookieConsent.javascriptItems.enableScriptsByLevel("tracking")) : e.cookieConsent.userConsent.rejectLevel("tracking", !1),
                                n ? (e.cookieConsent.userConsent.acceptLevel("targeting", !1), e.cookieConsent.javascriptItems.enableScriptsByLevel("targeting")) : e.cookieConsent.userConsent.rejectLevel("targeting", !1),
                                o(!0);
                        }).then(function () {
                            e.cookieConsent.userConsent.saveCookie(),
                                e.cookieConsent.log("consentImplied loadInitialCookiesForNewUser: strictly-necessary (true), functionality (" + t + "), tracking (" + i + "), targeting (" + n + ")", "info");
                        });
                    }),
                    t
                );
            })(ae),
            se = (function (e) {
                function t(t) {
                    var i = e.call(this, t) || this;
                    return (i.cookieConsent = t), i;
                }
                return (
                    F(t, e),
                    (t.prototype.loadInitialCookiesForNewUser = function () {
                        var e = this;
                        e.cookieConsent.log("consentExpress loadInitialCookiesForNewUser triggered", "info");
                        var t = !1,
                            i = !1,
                            n = !1;
                        if (null !== e.cookieConsent.ownerPageLoadConsentLevels)
                            for (var o in e.cookieConsent.ownerPageLoadConsentLevels) {
                                var a = e.cookieConsent.ownerPageLoadConsentLevels[o];
                                "functionality" == a && (t = !0), "tracking" == a && (i = !0), "targeting" == a && (n = !0);
                            }
                        else (t = !1), (i = !1), (n = !1);
                        new Promise(function (o, a) {
                            e.cookieConsent.javascriptItems.enableScriptsByLevel("strictly-necessary"),
                                t ? (e.cookieConsent.userConsent.acceptLevel("functionality", !1), e.cookieConsent.javascriptItems.enableScriptsByLevel("functionality")) : e.cookieConsent.userConsent.rejectLevel("functionality", !1),
                                i ? (e.cookieConsent.userConsent.acceptLevel("tracking", !1), e.cookieConsent.javascriptItems.enableScriptsByLevel("tracking")) : e.cookieConsent.userConsent.rejectLevel("tracking", !1),
                                n ? (e.cookieConsent.userConsent.acceptLevel("targeting", !1), e.cookieConsent.javascriptItems.enableScriptsByLevel("targeting")) : e.cookieConsent.userConsent.rejectLevel("targeting", !1),
                                o(!0);
                        }).then(function () {
                            e.cookieConsent.userConsent.saveCookie(),
                                e.cookieConsent.log("consentExpress loadInitialCookiesForNewUser: strictly-necessary (true), functionality (" + t + "), tracking (" + i + "), targeting (" + n + ")", "info");
                        });
                    }),
                    t
                );
            })(ae),
            ce = (function () {
                function e(e) {
                    this.cookieConsent = e;
                }
                return (
                    (e.prototype.getClass = function () {
                        return W + "---palette-light";
                    }),
                    e
                );
            })(),
            le = (function (e) {
                function t(t) {
                    var i = e.call(this, t) || this;
                    return (i.cookieConsent = t), i;
                }
                return (
                    F(t, e),
                    (t.prototype.getClass = function () {
                        return W + "---palette-dark";
                    }),
                    t
                );
            })(ce),
            pe = (function (e) {
                function t(t) {
                    var i = e.call(this, t) || this;
                    return (i.cookieConsent = t), i;
                }
                return (
                    F(t, e),
                    (t.prototype.getClass = function () {
                        return W + "---palette-light";
                    }),
                    t
                );
            })(ce),
            ue = (function () {
                function e(e) {
                    (this.USER_TOKEN_COOKIE_NAME = "cookie_consent_user_consent_token"), (this.cookieConsent = e), this.initUserConsentToken();
                }
                return (
                    (e.prototype.initUserConsentToken = function () {
                        var e = K("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
                            t = K("abcdefghijklmnopqrstuvwxyz"),
                            i = K("0123456789"),
                            n = K(e, i, t);
                        (this.cookieConsent.userConsentToken =
                            a.getCookie(this.USER_TOKEN_COOKIE_NAME) ||
                            this.cookieConsent.configUserConsentToken ||
                            (function (e, t) {
                                return K(Array(t))
                                    .map(function (t) {
                                        return e[(Math.random() * e.length) | 0];
                                    })
                                    .join("");
                            })(n, 12)),
                            a.setCookie(this.USER_TOKEN_COOKIE_NAME, this.cookieConsent.userConsentToken, this.cookieConsent.ownerDomain, this.cookieConsent.cookieSecure, this.cookieConsent.cookieDuration);
                    }),
                    e
                );
            })(),
            de = (function () {
                function e(e) {
                    switch (
                        ((this.forceCallbacksDispatching = !0),
                        (this.configUserConsentToken = void 0),
                        (this.userConsentToken = void 0),
                        (this.debug = !1),
                        (this.ownerConsentType = e.consent_type || "express"),
                        (this.ownerWebsiteName = e.website_name || ""),
                        (this.ownerWebsitePrivacyPolicyUrl = e.website_privacy_policy_url || null),
                        (this.ownerColorPalette = e.palette || "light"),
                        (this.ownerSiteLanguage = e.language || "en"),
                        (this.ownerDomain = e.cookie_domain || ""),
                        (this.ownerWebsiteImpressumUrl = e.website_impressum_url || null),
                        (this.noticeBannerInsertLegalUrls = e.notice_banner_insert_legal_urls || !1),
                        (this.cookieSecure = e.cookie_secure || !1),
                        (this.ownerPageLoadConsentLevels = e.page_load_consent_levels || null),
                        (this.ownerNoticeBannerType = e.notice_banner_type || "headline"),
                        (this.ownerNoticeBannerRejectButtonHide = e.notice_banner_reject_button_hide || !1),
                        (this.ownerNoticeBannerAppendContentPosition = e.notice_banner_append || "afterbegin"),
                        (this.ownerOpenPreferencesCenterSelector = e.open_preferences_center_selector || "#open_preferences_center"),
                        (this.ownerPreferencesCenterCloseButtonHide = e.preferences_center_close_button_hide || !1),
                        (this.pageRefreshConfirmationButtons = e.page_refresh_confirmation_buttons || !1),
                        (this.configUserConsentToken = e.user_consent_token || null),
                        (this.cookieDuration = parseInt(e.cookie_duration || 3650)),
                        (this.userDefinedNonce = a.getNonceFromScriptTag()),
                        (this.isDemo = "true" == e.demo),
                        (this.debug = "true" == e.debug),
                        this.ownerConsentType)
                    ) {
                        default:
                        case "express":
                            this.consentType = new se(this);
                            break;
                        case "implied":
                            (this.consentType = new re(this)), (this.userConsentTokenClass = new ue(this));
                    }
                    switch (this.ownerColorPalette) {
                        default:
                        case "dark":
                            this.colorPalette = new le(this);
                            break;
                        case "light":
                            this.colorPalette = new pe(this);
                    }
                    switch (this.ownerNoticeBannerType) {
                        default:
                        case "simple":
                            this.noticeBannerContainer = new te(this);
                            break;
                        case "headline":
                            this.noticeBannerContainer = new ie(this);
                            break;
                        case "interstitial":
                            this.noticeBannerContainer = new ne(this);
                            break;
                        case "standalone":
                            this.noticeBannerContainer = new oe(this);
                    }
                    (this.events = new H()),
                        (this.eventsListeners = new G(this)),
                        (this.customerCallbacks = new Y(this, e.callbacks)),
                        (this.forceCallbacksDispatching = e.callbacks_force || !1),
                        (this.i18n = new J(this)),
                        (this.cookieLevels = new Q(this)),
                        (this.userConsent = new $(this)),
                        (this.javascriptItems = new Z(this)),
                        (this.preferencesCenterContainer = new X(this)),
                        null !== this.ownerOpenPreferencesCenterSelector && this.preferencesCenterContainer.listenToUserButtonToOpenPreferences(this.ownerOpenPreferencesCenterSelector),
                        !0 === this.userConsent.userAccepted
                            ? (this.userConsent.loadAcceptedCookies(), !0 === this.isDemo && this.noticeBannerContainer.initNoticeBanner())
                            : (this.noticeBannerContainer.initNoticeBanner(), this.consentType.loadInitialCookiesForNewUser());
                }
                return (
                    (e.prototype.log = function (e, t, i) {
                        if ((void 0 === i && (i = "log"), !0 === this.debug)) {
                            var n = new Date().toISOString();
                            console.log("[" + n + "][" + t + "] " + e);
                        }
                    }),
                    (e.prototype.openPreferencesCenter = function () {
                        this.preferencesCenterContainer.showPreferencesCenter();
                    }),
                    e
                );
            })(),
            _e = function (e) {
                return (
                    (o = new de(e)),
                    (window.cookieconsent.openPreferencesCenter = function () {
                        o.openPreferencesCenter();
                    }),
                    o
                );
            };
    },
]);
