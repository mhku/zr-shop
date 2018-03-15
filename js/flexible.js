//高清适配
! function(e, t) {
    if (e.dpr = 1, !e.dpr) {
        e.navigator.appVersion.match(/android/gi);
        var i = e.navigator.appVersion.match(/iphone/gi),
            d = e.devicePixelRatio;
        i ? d >= 3 && (!dpr || dpr >= 3) ? e.dpr = 3 : d >= 2 && (!dpr || dpr >= 2) ? e.dpr = 2 : e.dpr = 3 : dpr = 3
    }
    var r = document.documentElement;
    t.scale = 7.5, t.options = {}, t.refreshRem = function() {
        if (t.rem) r.style.fontSize = t.rem + "px";
        else {
            var e = r.getBoundingClientRect();
            e.h = r.clientHeight, this.rem = e.width / this.scale;
            var i = e.h / 1.6;
            i < e.width && (this.rem = this.rem * (i / e.width)), r.style.fontSize = this.rem + "px"
        }
    }, e.addEventListener("resize", function() {
        clearTimeout(t.tid), t.tid = setTimeout(t.refreshRem, 300)
    }, !1), e.addEventListener("pageshow", function(e) {
        e.persisted && (clearTimeout(t.tid), t.tid = setTimeout(t.refreshRem, 300))
    }, !1), t.refreshRem(), "complete" === document.readyState ? (document.body.style.fontSize = "12px", document.body.style.width = t.scale * t.rem + "px", document.body.style.backgroundSize = t.scale * t.rem + "px") : document.addEventListener("DOMContentLoaded", function() {
        document.body.style.fontSize = "12px", document.body.style.width = t.scale * t.rem + "px", document.body.style.backgroundSize = t.scale * t.rem + "px"
    }, !1)
}(this, this.lib || (this.lib = {}));