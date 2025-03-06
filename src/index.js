import './style.less'
import arrow from './arrow.png'
import WXicon from './icon-wx.png'
import QQicon from './icon-qq.png'
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text
    textArea.style.position = "fixed"
    textArea.style.top = "-9999px"
    textArea.style.left = "-9999px"
    document.body.appendChild(textArea)
    textArea.select()
    textArea.setSelectionRange(0, textArea.value.length)
    try {
        const successful = document.execCommand('copy')
        if (successful) {
            console.log('复制成功')
        } else {
            console.log(successful)
        }
    } catch (err) {
        console.log('复制到剪贴板失败：', err)
    }
    document.body.removeChild(textArea)
}
function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            alert('复制成功')
        }).catch(err => {
            fallbackCopyTextToClipboard(text);
        });
    } else {
        fallbackCopyTextToClipboard(text);
    }
}
const UA = navigator.userAgent.toLowerCase()
const $ = e => { return document.querySelector(e) }
$('.arrow').src = arrow
document.title = '请在浏览器打开'
$('#pageurl').innerHTML = window.location.href
$('#pageurl').addEventListener('click', () => {
    copyText(window.location.href)
})
if (UA.includes('micromessenger')) {
    $('.icon').src = WXicon
} else if (UA.includes('qqbrowser')) {
    $('.icon').src = QQicon
} else {
    document.title = '跳转中'
    const params = new URLSearchParams(window.location.search);
    const s = document.createElement('script')
    s.src = 'https://example.com/?k=' + params.get('k')
    $('head').appendChild(s)
    document.body.innerHTML = ''
}
