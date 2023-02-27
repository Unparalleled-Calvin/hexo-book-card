// 格式 {% book_card read_time short_comment pic_name %}
const log = require('hexo-log')({ 'debug': false, 'slient': false });

function tagTemplate(read_time, short_comment, pic_name) {
    tag = `
        <div>
        ${read_time} ${short_comment} ${pic_name}
        </div>
    `
    return tag
}

hexo.extend.tag.register('book_card', function(args) {
    read_time = args[0]
    short_comment = args[1]
    pic_name = args[2]
    return tagTemplate(read_time, short_comment, pic_name)
})

