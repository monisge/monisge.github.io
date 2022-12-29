// window.onscroll = percent;// 执行函数
// // 页面百分比
// function percent() {
//     let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
//         b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // 整个网页高度
//         result = Math.round(a / b * 100), // 计算百分比
//         up = document.querySelector("#go-up") // 获取按钮

//     if (result <= 95) {
//         up.childNodes[0].style.display = 'none'
//         up.childNodes[1].style.display = 'block'
//         up.childNodes[1].innerHTML = result;
//     } else {
//         up.childNodes[1].style.display = 'none'
//         up.childNodes[0].style.display = 'block'
//     }
// }
window.onscroll = percent;// 执行函数
// 页面百分比
function percent() {
    let a = document.documentElement.scrollTop, // 卷去高度
        b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // 整个网页高度 减去 可视高度
        result = Math.round(a / b * 100), // 计算百分比
        btn = document.querySelector("#go-up"); // 获取按钮

    if (result < 95) { // 如果阅读进度小于95% 就显示百分比
        btn.childNodes[0].style.display = 'none'
        btn.childNodes[1].style.display = 'block'
        btn.childNodes[1].innerHTML = result + '<span>%</span>';
    } else { // 如果大于95%就显示回到顶部图标
        btn.childNodes[1].style.display = 'none'
        btn.childNodes[0].style.display = 'block'
    }
}

// 分享本页
// function share() {
//     let url = window.location.origin + window.location.pathname
//     new ClipboardJS(".share", { text: function() { return '标题：' + document.title + '\n链接：' + url } });
//     btf.snackbarShow("本页链接已复制到剪切板，快去分享吧~")
// }





