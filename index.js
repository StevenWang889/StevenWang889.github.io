


var li = document.getElementsByClassName('artLi')


for (var i = 0; i < 7; i++) {
    li[i].addEventListener('click', function (e) {
        // 获取索引
        window.open('./exhibition/' + this.dataset.index + '/index.html', parent)
    })
}


