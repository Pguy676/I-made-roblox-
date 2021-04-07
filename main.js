! function (e, t) {
    var n = e.amplitude || {
            _q: [],
            _iq: {}
        },
        r = t.createElement("script");
    r.type = "text/javascript", r.integrity = "sha384-a+mq7tiLwde/00Oc7avFHLn/ttGfdAq1rtZc7u97SEzIiyYoT2IsOKWCkAThwdEu", r.crossOrigin = "anonymous", r.async = !0, r.src = "https://cdn.amplitude.com/libs/amplitude-5.3.0-min.gz.js", r.onload = function () {
        e.amplitude.runQueuedFunctions || console.log("[Amplitude] Error: could not load SDK")
    };
    var i = t.getElementsByTagName("script")[0];

    function s(e, t) {
        e.prototype[t] = function () {
            return this._q.push([t].concat(Array.prototype.slice.call(arguments, 0))), this
        }
    }
    i.parentNode.insertBefore(r, i);
    for (var o = function () {
            return this._q = [], this
        }, a = ["add", "append", "clearAll", "prepend", "set", "setOnce", "unset"], c = 0; c < a.length; c++) s(o, a[c]);
    n.Identify = o;
    for (var u = function () {
            return this._q = [], this
        }, l = ["setProductId", "setQuantity", "setPrice", "setRevenueType", "setEventProperties"], p = 0; p < l.length; p++) s(u, l[p]);
    n.Revenue = u;
    var d = ["init", "logEvent", "logRevenue", "setUserId", "setUserProperties", "setOptOut", "setVersionName", "setDomain", "setDeviceId", "setGlobalUserProperties", "identify", "clearUserProperties", "setGroup", "logRevenueV2", "regenerateDeviceId", "groupIdentify", "onInit", "logEventWithTimestamp", "logEventWithGroups", "setSessionId", "resetSessionId"];

    function m(e) {
        function t(t) {
            e[t] = function () {
                e._q.push([t].concat(Array.prototype.slice.call(arguments, 0)))
            }
        }
        for (var n = 0; n < d.length; n++) t(d[n])
    }
    m(n), n.getInstance = function (e) {
        return e = (e && 0 !== e.length ? e : "$default_instance").toLowerCase(), n._iq.hasOwnProperty(e) || (n._iq[e] = {
            _q: []
        }, m(n._iq[e])), n._iq[e]
    }, e.amplitude = n
}(window, document);
const urlParams = new URLSearchParams(window.location.search),
    webAppId = urlParams && urlParams.get("webAppId");
amplitude.getInstance().init("a46acdaf1fcc731842b7a32fc43389a5")
