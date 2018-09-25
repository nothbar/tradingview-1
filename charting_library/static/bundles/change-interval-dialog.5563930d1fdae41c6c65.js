webpackJsonp([23],{689:function(t,i,e){"use strict";function n(t){this._options=t||{},this._setInput(),this._caption=$('<i class="interval-caption">').html("&nbsp;"),this._helpTooltipTrigger=$('<i class="help-tooltip-trigger apply-common-tooltip common-tooltip-below">').text("?").attr("title",$.t("Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)")),this._dialogTitle=$.t("Change Interval")}function s(t){var i=/[\dhdwms]/i,e=/[\dhdwm]/i;return p.enabled("seconds_resolution")?i.test(t):e.test(t)}var o=e(80).linking,a=e(842).parseIntervalValue,r=e(842).intervalIsSupported,l=e(842).sanitizeIntervalValue,p=e(4),u=e(79);n.prototype._setInput=function(){this._input=$('<input type="text" class="change-interval-input" autocomplete="off" maxlength="5">'),this._input.on("keypress",this._handleInput.bind(this)).on("input",function(){this._validate(),this._updateCaption()}.bind(this)).on("blur",function(){setTimeout(this._submit.bind(this),0)}.bind(this))},n.prototype._validate=function(){var t,i=this._input.val();this._parsed=a(i),this._valid=!this._parsed.error,this._supported=!this._parsed.error&&r(i),t=this._parsed.unit,this._supported&&("R"===t&&this._parsed.qty>u.getMaxResolutionValue("R")?this._supported=!1:null!==t&&"H"!==t||this._parsed.qty*("H"===t?60:1)>1440&&(this._supported=!1))},n.prototype._updateCaption=function(){var t,i,e;this._valid&&this._supported?(i=this._parsed.qty||1,e=this._parsed.unit||"",t=u.getTranslatedResolutionModel(i+e).hint,this._input.add(this._caption).removeClass("error")):(t=this._parsed.error?"&nbsp;":$.t("Not applicable"),this._input.add(this._caption).addClass("error")),this._caption.html(t)},n.prototype._handleInput=function(t){if(13===t.which)return void this._submit();t.ctrlKey||t.metaKey||!t.charCode||!t.which||t.which<=32||s(String.fromCharCode(t.charCode))||t.preventDefault()},n.prototype._submit=function(){var t,i;TVDialogs.isOpen(this._dialogTitle)&&(this._valid&&this._supported&&(t=l(this._input.val()),i=o.interval.value(),t&&i!==t&&"function"==typeof this._options.callback&&this._options.callback(t)),TVDialogs.destroy(this._dialogTitle))},n.prototype._setInitialValue=function(t){var i,e;t=t||this._options.initialValue,i="",e=!1,t&&","!==t?i=l(t)||"":(t=o.interval.value(),i=t,e=!0),this._input.val(i),e&&this._input.select()},n.prototype.isValid=function(){return!!this._valid},n.prototype.show=function(t){var i=TVDialogs.createDialog(this._dialogTitle,{hideCloseCross:!0,addClass:"change-interval-dialog",ownerDocument:this._options.ownerDocument}),e=i.find("._tv-dialog-content");return i.css("min-width",0),e.css("min-width",0).mousedown(function(t){this._input.is(t.target)||t.preventDefault()}.bind(this)).append(this._input.add(this._caption).add(this._helpTooltipTrigger)),TVDialogs.applyHandlers(i),TVDialogs.positionDialog(i),this._setInitialValue(t),this._validate(),this._updateCaption(),i},t.exports.ChangeIntervalDialog=n},
842:function(t,i,e){"use strict";function n(t){var i=/^[,\s]*(\d*)\s*([hdwms]?)\s*$/i,e=i.exec(t)||[],n=~~e[1],s=e[2]&&e[2].toUpperCase()||null,o={qty:!n&&s?1:n,unit:s};return o.error=!n&&!s,o.intraday=!(o.error||o.unit&&"H"!==o.unit),o}function s(t){var i,e,s;return r.enabled("allow_supported_resolutions_set_only")?null!==(i=o(t))&&Object(l.isAvailable)(""+i):(e=n(t),!e.error&&(e.intraday?p.linking.intraday.value():!(s=p.linking.supportedResolutions.value())||null!==e.unit&&!!~s.indexOf(e.unit)))}function o(t){var i=n(t),e=i.qty,s=i.unit;return i.error?null:("H"===s&&(e*=60,s=null),e&&!s?e+"":s&&(!e||1===e&&"S"!==s)?s:e+s)}function a(){return!1}var r,l,p;Object.defineProperty(i,"__esModule",{value:!0}),i.parseIntervalValue=n,i.intervalIsSupported=s,i.sanitizeIntervalValue=o,i.canShowSpreadActions=a,r=e(4),e.n(r),l=e(79),p=e(80)}});