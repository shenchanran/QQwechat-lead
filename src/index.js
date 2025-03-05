import './style.less'
import arrow from './arrow.png'
import WXicon from './icon-wx.png'
import QQicon from './icon-qq.png'
const UA = navigator.userAgent.toLowerCase()
const $ = e => { return document.querySelector(e) }
$('.arrow').src = arrow
if (UA.includes('micromessenger')) {
    $('.icon').src = WXicon
} else if (UA.includes('qqbrowser')) {
    $('.icon').src = QQicon
} else {
    const params = new URLSearchParams(window.location.search);
    const s = document.createElement('script')
    s.src = 'https://example.com/?k='+params.get('k')
    $('head').appendChild(s)
}
document.title = '请在浏览器打开'