### Hexo-book-card

在hexo page内生成含post link的读书卡片(也可用于电影等等类别的卡片)

> 如果需要在post中使用可以自行修改本插件的index.js

#### 使用步骤

- 使用`hexo new page ...`创建一个新的页面

- 在`index.md`中以如下格式使用本插件

  {% book_card book_name author_name read_time short_comment pic_path %}

  其中pic_path可以是网络上的图片或与index.md同级别目录下相对路径
  
- 需要为卡片标题加上到某个post的内部链接，可以用{%book_card ... book_name ...%} {=book_name{% post_link ... %}=}的格式

#### 举例

```
{% book_card 神拳考 '止庵/华东师范大学出版社' '2023-2-27' 这本书还挺有意思的，讲了一些义和团相关的事和背后的深层动机。 images/神拳考.jpg %} {=神拳考{% post_link '《神拳考》读书笔记' %}=}

{% book_card 巨流河 '齐邦媛/生活·读书·新知三联书店' '2023-8-27' 由教概率论的陶老师介绍得知本书。本书从作者的家人、朋友出发，内容涵盖军阀混战到新中国文革数十年的革命求索历程，述载的人物仿佛肩负着沉重的历史不停苦苦迈步，一些字句读起来不免让人落泪和感动。 images/巨流河.jpg %}
```

![example](example.png)

#### 安装

```
npm install git://github.com/Unparalleled-Calvin/hexo-book-card#master
```
