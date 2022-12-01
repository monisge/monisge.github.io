function setFont(e) {
    localStorage.setItem("font", e), "main" == e ? (document.body.style.fontFamily = "-apple-system, Consolas_1, BlinkMacSystemFont, 'Segoe UI' , 'Helvetica Neue' , Lato, Roboto, 'PingFang SC' , 'Microsoft JhengHei' , 'Microsoft YaHei' , sans-serif", document.documentElement.style.setProperty("--global-font", "-apple-system")) : (document.body.style.fontFamily = "var(--global-font),-apple-system, IBM Plex Mono ,monosapce,'微软雅黑', sans-serif", document.documentElement.style.setProperty("--global-font", e))
}

function setColor(e) {
    document.getElementById("themeColor").innerText = ":root{--theme-color:" + map.get(e) + " !important}", localStorage.setItem("themeColor", e), CURSOR.refresh();
    var t = map.get(e),
        o = "rgba" + t.substring(3, t.length - 1) + ", 0.7)";
    document.documentElement.style.setProperty("--text-bg-hover", o)
}

function setUniverse2(e) {
    document.getElementById("universe").style.display = e, localStorage.setItem("universe", e)
}

function setUniverse() {
    document.getElementById("universeSet").checked ? setUniverse2("block") : setUniverse2("none")
}

function fpssw() {
    document.getElementById("fpson").checked ? localStorage.setItem("fpson", "1") : localStorage.setItem("fpson", "0"), setTimeout(reload, 600)
}

function reload() {
    window.location.reload()
}

function toggleRightside() {
    document.getElementById("rightSideSet").checked ? (localStorage.setItem("rs", "block"), document.getElementById("rightSide").innerText = ":root{--rightside-display: block}") : (localStorage.setItem("rs", "none"), document.getElementById("rightSide").innerText = ":root{--rightside-display: none}")
}
null == localStorage.getItem("font") && localStorage.setItem("font", "HYTMR"), setFont(localStorage.getItem("font")), null == localStorage.getItem("themeColor") && localStorage.setItem("themeColor", "green"), setColor(localStorage.getItem("themeColor")), null == localStorage.getItem("universe") && localStorage.setItem("universe", "block"), setUniverse2(localStorage.getItem("universe")), null == localStorage.getItem("fpson") && localStorage.setItem("fpson", "0"), null == localStorage.getItem("rs") && localStorage.setItem("rs", "block"), "block" == localStorage.getItem("rs") ? document.getElementById("rightSide").innerText = ":root{--rightside-display: block}" : document.getElementById("rightSide").innerText = ":root{--rightside-display: none}", null == localStorage.getItem("trans") && localStorage.setItem("trans", "92%"), null == localStorage.getItem("newValue") && localStorage.setItem("newValue", 92);
var curValue = localStorage.getItem("newValue"),
    curTrans = localStorage.getItem("trans"),
    curMini = .95 * curValue;

function setTrans() {
    var e = document.getElementById("transSet"),
        t = e.value;
    document.querySelector(".transValue").innerHTML = "透明度 (0%-100%): " + t + "%", localStorage.setItem("trans", t + "%"), localStorage.setItem("newValue", t), curMini = .95 * (curValue = t);
    var o = e.getAttribute("max");
    curTrans = 95 / o * t + "%", document.querySelector("#rang_trans").style.width = curTrans, document.getElementById("transPercent").innerText = `:root{--trans-light: rgba(255, 255, 255, ${curTrans}) !important; --trans-dark: rgba(25, 25, 25, ${curTrans}) !important} `
}
document.getElementById("transPercent").innerText = `:root{--trans-light: rgba(255, 255, 255, ${curTrans}) !important; --trans-dark: rgba(25, 25, 25, ${curTrans}) !important} `, null == localStorage.getItem("blurRad") && localStorage.setItem("blurRad", 15);
var curBlur = localStorage.getItem("blurRad"),
    miniBlur = 2 * curBlur * .95;

function setBlurNum() {
    var e = document.getElementById("blurSet"),
        t = e.value;
    document.querySelector(".blurValue").innerHTML = "模糊半径 (开启模糊效果才有效 0px-50px): " + t + "px", localStorage.setItem("blurRad", t), miniBlur = 2 * (curBlur = t) * .95;
    var o = 95 / e.getAttribute("max") * t + "%";
    document.querySelector("#rang_blur").style.width = o, document.getElementById("blurNum").innerText = `:root{--blur-num: blur(${curBlur}px) saturate(150%) !important`
}

function setBlur() {
    document.getElementById("blur").checked ? (localStorage.setItem("blur", 1), document.getElementById("settingStyle").innerText = ":root{--backdrop-filter: var(--blur-num)}") : (localStorage.setItem("blur", 0), document.getElementById("settingStyle").innerText = ":root{--backdrop-filter: none}")
}
document.getElementById("blurNum").innerText = `:root{--blur-num: blur(${curBlur}px) saturate(150%) !important`, null == localStorage.getItem("blur") && localStorage.setItem("blur", 0), 0 == localStorage.getItem("blur") ? document.getElementById("settingStyle").innerText = ":root{--backdrop-filter: none}" : document.getElementById("settingStyle").innerText = ":root{--backdrop-filter: var(--blur-num)}";
var clk, defineColor = localStorage.getItem("blogbg") && "#" == localStorage.getItem("blogbg").charAt(0) ? localStorage.getItem("blogbg") : "#F4D88A";

function changeBgColor() {
    changeBg(document.querySelector("#colors").value)
}

function changeBg(e) {
    let t = document.getElementById("web_bg");
    "#" == e.charAt(0) ? (t.style.backgroundColor = e, t.style.backgroundImage = "none", defineColor = e) : (t.style.backgroundImage = e, defineColor = "#F4D88A"), localStorage.setItem("blogbg", e), localStorage.setItem("bing", "false"), document.getElementById("bingSet") && (document.getElementById("bingSet").checked = !1)
}

function getPicture() {
    let e = document.getElementById("web_bg");
    checkImgExists(document.getElementById("pic-link").value).then((() => {
        var t = "url(" + document.getElementById("pic-link").value + ")";
        e.style.backgroundImage = t, localStorage.setItem("blogbg", t), localStorage.setItem("bing", "false"), document.getElementById("bingSet") && (document.getElementById("bingSet").checked = !1), new Vue({
            data: function () {
                this.$notify({
                    title: "提示",
                    message: "切换自定义背景成功！",
                    position: "top-left",
                    offset: 50,
                    showClose: !0,
                    type: "success"
                })
            }
        })
    })).catch((() => {
        new Vue({
            data: function () {
                this.$notify({
                    title: "提示",
                    message: "请输入有效的图片链接！",
                    position: "top-left",
                    offset: 50,
                    showClose: !0,
                    type: "warning"
                })
            }
        })
    }))
}

function checkImgExists(e) {
    return new Promise((function (t, o) {
        var l = new Image;
        l.src = e, l.onload = function (e) {
            t(e)
        }, l.onerror = function (e) {
            o(e)
        }
    }))
}
if (null != localStorage.getItem("blogbg") && changeBg(localStorage.getItem("blogbg")), null == localStorage.getItem("bing") && localStorage.setItem("bing", "false"), "true" == localStorage.getItem("bing")) {
    let e = document.getElementById("web_bg"),
        t = screen.width <= 768 ? "url(https://bing.img.run/m.php)" : "url(https://bing.img.run/1920x1080.php)";
    e.style.backgroundImage = t
}

function setBing() {
    if (document.getElementById("bingSet").checked) {
        let e = document.getElementById("web_bg"),
            t = screen.width <= 768 ? "url(https://bing.img.run/m.php)" : "url(https://bing.img.run/1920x1080.php)";
        e.style.backgroundImage = t, localStorage.setItem("bing", "true"), localStorage.removeItem("blogbg")
    } else localStorage.setItem("bing", "false"), setTimeout(reload, 600)
}

function setLight() {
    if (document.getElementById("lightSet").checked) clk = setInterval(changeLightColor, 1200), localStorage.setItem("light", "true");
    else {
        clearInterval(clk), localStorage.setItem("light", "false"), document.getElementById("site-name") && (document.getElementById("site-name").style.textShadow = "#1e1e1ee0 1px 1px 1px"), document.getElementById("site-title") && (document.getElementById("site-title").style.textShadow = "#1e1e1ee0 1px 1px 1px"), document.getElementById("site-subtitle") && (document.getElementById("site-subtitle").style.textShadow = "#1e1e1ee0 1px 1px 1px"), document.getElementById("post-info") && (document.getElementById("post-info").style.textShadow = "#1e1e1ee0 1px 1px 1px");
        try {
            document.getElementsByClassName("author-info__name")[0].style.textShadow = "", document.getElementsByClassName("author-info__description")[0].style.textShadow = ""
        } catch {}
    }
}
null == localStorage.getItem("light") && localStorage.setItem("light", !0), "true" == localStorage.getItem("light") && (clk = setInterval(changeLightColor, 1200));
var winbox = "";

function createWinbox() {
    let e = document.createElement("div");
    document.body.appendChild(e), winbox = WinBox({
        id: "meihuaBox",
        index: 99,
        title: "美化设置",
        x: "left",
        y: "center",
        minwidth: "300px",
        height: "60%",
        background: "var(--theme-color)",
        onmaximize: () => {
            e.innerHTML = "<style>body::-webkit-scrollbar {display: none;} div#meihuaBox {width: 100% !important;}</style>"
        },
        onrestore: () => {
            e.innerHTML = ""
        }
    }), winResize(), window.addEventListener("resize", winResize), winbox.body.innerHTML = `\n<div class="settings" style="display: block;">\n<div id="article-container" style="padding:12px;">\n<br>\n<center><p><button onclick="reset()" style="background:linear-gradient(to right, #114357, #f29492);display:block;width:40%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i>点这里恢复默认设置</button></p></center>\n\n<h2>一、显示偏好</h2>\n\n<div class="transValue" style="font-weight:bold;padding-left:10px">透明度 (0%-100%): ${curValue}%</div>\n<div class="range">\n  <input id="transSet" type="range" min="0" max="100" step="1" value="${curValue}" oninput="setTrans()">\n  <p class="rang_width" id="rang_trans" style="width:${curMini}%"></p>\n</div>\n\n<div class="blurValue" style="font-weight:bold;padding-left:10px">模糊半径 (开启模糊效果才有效 0px-50px): ${curBlur} px</div>\n<div class="range">\n  <input id="blurSet" type="range" min="0" max="50" step="1" value="${curBlur}" oninput="setBlurNum()">\n  <p class="rang_width" id="rang_blur" style="width:${miniBlur}%"></p>\n</div>\n\n\n<div class="content" style="display:flex">\n  <div class="content-text" style="font-weight:bold; padding-left:10px">星空特效 (夜间模式) </div><input type="checkbox" id="universeSet" onclick="setUniverse()">\n  <div class="content-text" style="font-weight:bold; padding-left:20px">霓虹灯 (夜间模式) </div><input type="checkbox" id="lightSet" onclick="setLight()">\n</div>\n\n<div class="content" style="display:flex">\n  <div class="content-text" style="font-weight:bold; padding-left:10px">模糊效果 (可能会卡) </div><input type="checkbox" id="blur" onclick="setBlur()">\n  <div class="content-text" style="font-weight:bold; padding-left:20px">侧边栏 (默认开) </div><input type="checkbox" id="rightSideSet" onclick="toggleRightside()">\n</div>\n\n<div class="content" style="display:flex">\n  <div class="content-text" style="font-weight:bold; padding-left:10px">帧率监测 (自动刷新) </div><input type="checkbox" id="fpson" onclick="fpssw()">\n  <div class="content-text" style="font-weight:bold; padding-left:20px"> 必应每日壁纸 (关闭须刷新) </div><input type="checkbox" id="bingSet" onclick="setBing()">\n</div>\n\n<h2>二、字体设置</h2>\n<div class="note warning simple"><p>注意：非商免字体未经授权只能个人使用。本站为完全非商业、非盈利性质的网站，平时用于个人学习交流，站长不会由此获利一分钱，如涉及侵权请联系站长删除，谢谢！ —— 致版权方</p>\n</div>\n<p id="swfs">\n<a class="swf" href="javascript:;" rel="noopener external nofollow" style="font-family:'ZhuZiAWan'!important;color:black" onclick="setFont('ZhuZiAWan_light')">筑紫A丸ゴシック</a>\n<a class="swf" href="javascript:;" rel="noopener external nofollow" style="font-family:'HYTMR'!important;color:black" onclick="setFont('HYTMR')">汉仪唐美人</a>\n<a class="swf" href="javascript:;" rel="noopener external nofollow" style="font-family:'LXGW'!important;color:black" onclick="setFont('LXGW')">霞鹜文楷</a>\n<a class="swf" href="javascript:;" rel="noopener external nofollow" style="font-family:'TTQHB'!important;color:black" onclick="setFont('TTQHB')">甜甜圈海报</a>\n<a class="swf" href="javascript:;" rel="noopener external nofollow" style="font-family:'YSHST'!important;color:black" onclick="setFont('YSHST')">优设好身体</a>\n<a class="swf" href="javascript:;" rel="noopener external nofollow" style="font-family:'MiSans'!important;color:black" onclick="setFont('MiSans')">MiSans</a>\n<a class="swf" href="javascript:;" rel="noopener external nofollow" style="font-family:-apple-system, IBM Plex Mono ,monosapce,'微软雅黑', sans-serif;!important;color:black" onclick="setFont('main')">系统默认</a>\n</p>\n\n<h2>三、主题色设置</h2>\n<div class="content" style="display:flex"><input type="radio" id="red" name="colors" value=" "\n        onclick="setColor('red')"><input type="radio" id="orange" name="colors" value=" "\n        onclick="setColor('orange')"><input type="radio" id="yellow" name="colors" value=" "\n        onclick="setColor('yellow')"><input type="radio" id="green" name="colors" value=" "\n        onclick="setColor('green')"><input type="radio" id="blue" name="colors" value=" "\n        onclick="setColor('blue')"><input type="radio" id="heoblue" name="colors" value=" "\n        onclick="setColor('heoblue')"><input type="radio" id="darkblue" name="colors" value=" "\n        onclick="setColor('darkblue')"><input type="radio" id="purple" name="colors" value=" "\n        onclick="setColor('purple')"><input type="radio" id="pink" name="colors" value=" "\n        onclick="setColor('pink')" checked="checked"><input type="radio" id="black" name="colors" value=" "\n        onclick="setColor('black')"><input type="radio" id="blackgray" name="colors" value=" "\n        onclick="setColor('blackgray')"></div>\n\n<h2>四、背景设置</h2>\n<center><button onclick="resetBg()" style="background:var(--theme-color);display:block;width:20%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i>点这里恢复默认背景</button></center>\n\n<h3>1.二次元</h3>\n<details class="folding-tag" blue><summary> 查看二次元背景 </summary>\n              <div class='content'>\n              <div class="bgbox"><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/home_bg.webp)" class="imgbox" onclick="changeBg('url(https://source.fomal.cc/img/home_bg.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/dark_mode.webp)" class="imgbox" onclick="changeBg('url(https://source.fomal.cc/img/dark_mode.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/dm2.webp)" class="imgbox" onclick="changeBg('url(https://source.fomal.cc/img/dm2.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/dm14.webp)" class="imgbox" onclick="changeBg('url(https://source.fomal.cc/img/dm14.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/dm8.webp)" class="imgbox" onclick="changeBg('url(https://source.fomal.cc/img/dm8.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/dm9.webp)" class="imgbox" onclick="changeBg('url(https://source.fomal.cc/img/dm9.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/dm11.webp)" class="imgbox" onclick="changeBg('url(https://source.fomal.cc/img/dm11.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/dm12.webp)" class="imgbox" onclick="changeBg('url(https://source.fomal.cc/img/dm12.webp)')"></a></div>\n              </div>\n            </details>\n\n\n<h3>2.风景</h3>\n\n<details class="folding-tag" blue><summary> 查看风景背景 </summary>\n              <div class='content'>\n              <div class="bgbox"><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/fj1.webp)" class="imgbox" onclick="changeBg('url(https://source.fomal.cc/img/fj1.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/fj2.webp)" class="imgbox" onclick="changeBg('url(https://source.fomal.cc/img/fj2.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/fj3.webp)" class="imgbox" onclick="changeBg('url(https://source.fomal.cc/img/fj3.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/fj4.webp)" class="imgbox" onclick="changeBg('url(https://source.fomal.cc/img/fj4.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/fj5.webp)" class="imgbox" onclick="changeBg('url(https://source.fomal.cc/img/fj5.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/fj6.webp)" class="imgbox" onclick="changeBg('url(https://source.fomal.cc/img/fj6.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/fj7.webp)" class="imgbox" onclick="changeBg('url(https://source.fomal.cc/img/fj7.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/fj8.webp)" class="imgbox" onclick="changeBg('url(https://source.fomal.cc/img/fj8.webp)')"></a></div>\n              </div>\n            </details>\n\n<h3>3.萌宠</h3>\n\n<details class="folding-tag" blue><summary> 查看萌宠背景 </summary>\n              <div class='content'>\n              <div class="bgbox"><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/mc1.webp)" class="imgbox" onclick="changeBg('url(https://source.fomal.cc/img/mc1.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/mc2.webp)" class="imgbox" onclick="changeBg('url(https://source.fomal.cc/img/mc2.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/mc3.webp)" class="imgbox" onclick="changeBg('url(https://source.fomal.cc/img/mc3.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/mc4.webp)" class="imgbox" onclick="changeBg('url(https://source.fomal.cc/img/mc4.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/mc5.webp)" class="imgbox" onclick="changeBg('url(https://source.fomal.cc/img/mc5.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/mc6.webp)" class="imgbox" onclick="changeBg('url(https://source.fomal.cc/img/mc6.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/mc7.webp)" class="imgbox" onclick="changeBg('url(https://source.fomal.cc/img/mc7.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/mc8.webp)" class="imgbox" onclick="changeBg('url(https://source.fomal.cc/img/mc8.webp)')"></a></div>\n              </div>\n            </details>\n\n<h3>4.渐变色</h3>\n<details class="folding-tag" blue><summary> 查看渐变色背景 </summary>\n              <div class='content'>\n              <div class="bgbox"><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #544a7d, #ffd452)" onclick="changeBg('linear-gradient(to right, #544a7d, #ffd452)')"></a><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4)" onclick="changeBg('linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4)')"></a><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to left, #654ea3, #eaafc8)" onclick="changeBg('linear-gradient(to left, #654ea3, #eaafc8)')"></a><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #feac5e, #c779d0, #4bc0c8)" onclick="changeBg('linear-gradient(to top, #feac5e, #c779d0, #4bc0c8)')"></a><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #d3959b, #bfe6ba)" onclick="changeBg('linear-gradient(to top, #d3959b, #bfe6ba)')"></a><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #8360c3, #2ebf91)" onclick="changeBg('linear-gradient(to top, #8360c3, #2ebf91)')"></a><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #108dc7, #ef8e38)" onclick="changeBg('linear-gradient(to top, #108dc7, #ef8e38)')"></a><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #355c7d, #6c5b7b, #c06c84)" onclick="changeBg('linear-gradient(to top, #355c7d, #6c5b7b, #c06c84)')"></a></div>\n              </div>\n            </details>\n\n\n<h3>5.纯色</h3>\n<details class="folding-tag" blue><summary> 查看纯色背景 </summary>\n              <div class='content'>\n              <div class="bgbox"><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #ecb1b1" onclick="changeBg('#ecb1b1')"></a> <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #d3ebac" onclick="changeBg('#d3ebac')"></a> <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #ace9ce" onclick="changeBg('#ace9ce')"></a><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #c1ebea" onclick="changeBg('#c1ebea')"></a> <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #dee7f1" onclick="changeBg('#dee7f1')"></a> <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #e9e3f2" onclick="changeBg('#e9e3f2')"></a> <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #f7eff5" onclick="changeBg('#f7eff5')"></a>  <input type="color" id="colors" href="javascript:;" rel="noopener external nofollow" class="box" autocomplete="on" value="${defineColor}" oninput="changeBgColor()"></input></div>\n              </div>\n            </details>\n\n\n\n<h3>6.适配手机</h3>\n<details class="folding-tag" blue><summary> 查看适配手机的背景 </summary>\n              <div class='content'>\n              <div class="bgbox"><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/mb4.webp)" class="pimgbox" onclick="changeBg('url(https://source.fomal.cc/img/mb4.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/mb5.webp)" class="pimgbox" onclick="changeBg('url(https://source.fomal.cc/img/mb5.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/mb6.webp)" class="pimgbox" onclick="changeBg('url(https://source.fomal.cc/img/mb6.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/mb7.webp)" class="pimgbox" onclick="changeBg('url(https://source.fomal.cc/img/mb7.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/mb8.webp)" class="pimgbox" onclick="changeBg('url(https://source.fomal.cc/img/mb8.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/mb9.webp)" class="pimgbox" onclick="changeBg('url(https://source.fomal.cc/img/mb9.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/mb16.webp)" class="pimgbox" onclick="changeBg('url(https://source.fomal.cc/img/mb16.webp)')"></a><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://source.fomal.cc/img/mb19.webp)" class="pimgbox" onclick="changeBg('url(https://source.fomal.cc/img/mb19.webp)')"></a></div>\n              </div>\n            </details>\n\n\n<h3>7.自定义背景</h3>\n<details class="folding-tag" blue><summary> 设置自定义背景 </summary>\n              <div class='content'>\n              <p><center><input type="text" id="pic-link" size="70%" maxlength="1000" style="padding: 5px 5px 5px 5px;border-radius:6px;line-height:2;" placeholder="请输入有效的图片链接，如 https://source.fomal.cc/img/home_bg.webp"></center></p><p><center><button type="button" onclick="getPicture()" style="background:var(--theme-color);width:20%;padding: 5px 0px 5px 0px;border-radius:6px;color:white;line-height:2.5;">🌈切换链接背景</button></center></p>\n              </div>\n            </details>\n\n<br>\n\n</div>\n\n</div>\n\n`, $("#" + localStorage.getItem("themeColor")).attr("checked", !0), 1 == localStorage.getItem("blur") ? document.getElementById("blur").checked = !0 : document.getElementById("blur").checked = !1, "block" == localStorage.getItem("universe") ? document.getElementById("universeSet").checked = !0 : "none" == localStorage.getItem("universe") && (document.getElementById("universeSet").checked = !1), "1" == localStorage.getItem("fpson") ? document.getElementById("fpson").checked = !0 : document.getElementById("fpson").checked = !1, "block" == localStorage.getItem("rs") ? document.getElementById("rightSideSet").checked = !0 : "none" == localStorage.getItem("rs") && (document.getElementById("rightSideSet").checked = !1), "true" == localStorage.getItem("bing") ? document.getElementById("bingSet").checked = !0 : document.getElementById("bingSet").checked = !1, "true" == localStorage.getItem("light") ? document.getElementById("lightSet").checked = !0 : document.getElementById("lightSet").checked = !1
}

function resetBg() {
    localStorage.removeItem("blogbg"), window.location.reload()
}

function reset() {
    localStorage.clear(), window.location.reload()
}

function winResize() {
    var e = document.documentElement.clientWidth;
    e <= 768 ? winbox.resize(.95 * e + "px", "90%").move("center", "center") : winbox.resize(.6 * e + "px", "70%").move("center", "center")
}

function toggleWinbox() {
    document.querySelector("#meihuaBox") ? winbox.toggleClass("hide") : createWinbox()
}