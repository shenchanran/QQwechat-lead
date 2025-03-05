<?php
$urlList = ['https://baidu.com/'];
if(!isset($_GET['k'])){
    exit('alert("参数错误，请联系客服");');
}
$k = $_GET['k'];
if(!is_numeric($k)||$k<0){
    exit('alert("参数异常，请联系客服");');
}
$k= intval($k);
if($k>=count($urlList)){
    exit('alert("链接不存在，请联系客服");');
}
$url = $urlList[$k];
$url_base64 = base64_encode($url);
$js = <<<EOF
(()=>{
    const isBrowser1 = typeof window !== "undefined" && typeof window.document !== "undefined"
    const isBrowser2 = typeof navigator !== "undefined"
    const isBrowser3 = typeof process === "undefined" || process.browser
    if(!isBrowser1){
        alert("环境校验失败：1，请联系客服")
        return
    }else if(!isBrowser2){
        alert("环境校验失败：2，请联系客服")
        return
    }else if(!isBrowser3){
        alert("环境校验失败：3，请联系客服")
        return
    }
    const url = atob('$url_base64')
    setTimeout(()=>{
        window.location.href = url
    },1)
})()
EOF;
exit($js);
?>