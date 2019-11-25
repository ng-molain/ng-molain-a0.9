export class DomHelper {
    getElement(element: any): any {
        return "string" == typeof element ? document.querySelector(element) : element
    }

    isVisible(element: any): boolean {
        return this.getElement(element).offsetWidth > 0
    }

    outerWidth(element: any, margin?: boolean): any {
        void 0 === margin && (margin = !1); var el = this.getElement(element), width = el.offsetWidth; if (margin) { var style = getComputedStyle(el); width += (parseInt(style.getPropertyValue("margin-left")) || 0) + (parseInt(style.getPropertyValue("margin-right")) || 0) } return width
    }

    outerHeight(element: any, margin?: boolean): any {
        void 0 === margin && (margin = !1); var el = this.getElement(element), height = el.offsetHeight; if (margin) { var style = getComputedStyle(el); height += (parseInt(style.getPropertyValue("margin-top")) || 0) + (parseInt(style.getPropertyValue("margin-bottom")) || 0) } return height
    }

    isChild(element: any, parent: any): boolean {
        for (var p = this.getElement(parent), el = this.getElement(element); el && el != p;)el = el.parentNode; return el == p
    }

    offset(element: any): {
        left: any;
        top: any;

    } {
        var rect = this.getElement(element).getBoundingClientRect(), left = rect.left, top = rect.top; return { left: left + this.getScrollLeft(), top: top + this.getScrollTop() }
    }

    position(element: any): {
        left: number;
        top: number;
    } {
        for (var el = this.getElement(element), offsetParent = el.offsetParent; offsetParent && !/^body|html$/i.test(offsetParent.tagName) && "static" == getComputedStyle(offsetParent).getPropertyValue("position");)offsetParent = offsetParent.offsetParent; var offset = this.offset(element), parentOffset = /^body|html$/i.test(offsetParent.tagName) ? { top: 0, left: 0 } : this.offset(offsetParent), style = getComputedStyle(el); return offset.left -= parseInt(style.getPropertyValue("margin-left")) || 0, offset.top -= parseInt(style.getPropertyValue("margin-top")) || 0, style = getComputedStyle(offsetParent), parentOffset.left += parseInt(style.getPropertyValue("border-left-width")) || 0, parentOffset.top += parseInt(style.getPropertyValue("border-top-width")) || 0, { left: offset.left - parentOffset.left, top: offset.top - parentOffset.top }
    }

    getScrollLeft(): number {
        return Math.max(document.documentElement.scrollLeft, document.body.scrollLeft)
    }

    getScrollTop(): number {
        return Math.max(document.documentElement.scrollTop, document.body.scrollTop)
    }

    getViewport(): {
        width: number;
        height: number;
    } {
        var de = document.documentElement, body = document.getElementsByTagName("body")[0]; return { width: window.innerWidth || de.clientWidth || body.clientWidth, height: window.innerHeight || de.clientHeight || body.clientHeight }
    }

    isAutoSize(value: any): boolean {
        var v = String(value); return "auto" == v || "" == v
    }

    toStyleValue(value: any): string {
        if (null == value) return null; var v = String(value), endchar = v.substr(v.length - 1, 1); return endchar >= "0" && endchar <= "9" ? v + "px" : v
    }

    addClass(element: any, className: string): void {
        this.getElement(element).classList.add(className)
    }

    removeClass(element: any, className: string): void {
        this.getElement(element).classList.remove(className)
    }

    hasClass(element: any, className: string): any {
        return this.getElement(element).classList.contains(className)
    }

    scrollTo(container: any, item: any): void {
        var containerOffset = domHelper.offset(container), itemOffset = domHelper.offset(item), containerHeight = domHelper.outerHeight(container), itemHeight = domHelper.outerHeight(item), offsetTop = itemOffset.top - containerOffset.top; offsetTop < 0 ? container.scrollTop = container.scrollTop + offsetTop - 1 : offsetTop > containerHeight - itemHeight && (container.scrollTop = container.scrollTop - (containerHeight - itemHeight - offsetTop - 1))
    }

    slideUp(element: any): void {
        var _this = this, el = this.getElement(element); if (!this.hasClass(el, "f-hide")) { var heightStyle = el.style.height, height = this.outerHeight(el); el.style.height = height + "px"; var onEnd = function () { _this.removeClass(el, "f-animate"), _this.removeClass(el, "panel-noscroll"), _this.addClass(el, "f-hide"), el.style.height = heightStyle, el.removeEventListener("transitionend", onEnd, !1) }; el.addEventListener("transitionend", onEnd, !1), setTimeout(function () { _this.addClass(el, "f-animate"), _this.addClass(el, "panel-noscroll"), el.style.height = "0px" }, 50) }
    }

    slideDown(element: any): void {
        var _this = this, el = this.getElement(element); if (this.hasClass(el, "f-hide")) { this.addClass(el, "panel-noscroll"), this.removeClass(el, "f-hide"); var heightStyle = el.style.height, height = this.outerHeight(el); el.style.height = "0px"; var onEnd = function () { _this.removeClass(el, "f-animate"), _this.removeClass(el, "panel-noscroll"), el.style.height = heightStyle, el.removeEventListener("transitionend", onEnd, !1) }; el.addEventListener("transitionend", onEnd, !1), setTimeout(function () { _this.addClass(el, "f-animate"), el.style.height = height + "px" }, 50) }
    }

}

export const domHelper = new DomHelper();