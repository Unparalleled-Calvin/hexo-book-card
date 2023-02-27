// 格式 {% book_card author_name read_time short_comment pic_path %}
const log = require('hexo-log')({ 'debug': false, 'slient': false });
const fs = require('hexo-fs');
const path = require('path');
const css = hexo.extend.helper.get('css').bind(hexo);

hexo.extend.generator.register('card_asset', () => [{
    path: 'css/card.css',
    data: () => fs.createReadStream(path.resolve(__dirname, "./css", "card.css"))
}]);

function tagTemplate(book_name, author_name, read_time, short_comment, pic_path) {
    tag = `
    <div class="container">
        <div class="card">
            <div class="pic-container">
                <img class="pic" src="${pic_path}">
            </div>
            <div class="content-container">
                <div class="book-name">${book_name}</div>
                <div class="author-name">作者：${author_name}</div>
                <div class="read-time">${read_time}</div>
                <div class="short-comment">${short_comment}</div>
            </div>
        </div>
    </div>
    `
    return tag
}

hexo.extend.tag.register('book_card', function (args) {
    let [book_name, author_name, read_time, short_comment, pic_path] = args
    return tagTemplate(book_name, author_name, read_time, short_comment, pic_path)
})

hexo.extend.injector.register('head_begin', () => {
    return css('/css/card.css');
}, 'page')

hexo.extend.injector.register('head_begin', () => {
    return '<meta name="referrer" content="no-referrer"/>'
}, 'page')

