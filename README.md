### Hexo-book-card

在hexo page内生成读书卡片(也可用于电影等等类别的卡片)

#### 使用步骤

- 使用`hexo new page ...`创建一个新的页面

  如果需要使用刀posts中可以自行修改本插件的index.js

- 在`index.md`中以如下格式使用本插件

  {% book_card book_name author_name read_time short_comment pic_path %}

  其中pic_path可以是网络上的图片或与index.md同级别目录下相对路径

#### 举例

(这里images/s5968156.jpg)来自[豆瓣](https://img9.doubanio.com/view/subject/s/public/s5968156.jpg)

```
{% book_card 神拳考 '止庵/华东师范大学出版社' '2023-2-27' 这本书还挺有意思的，讲了一些义和团相关的事和背后的深层动机。 images/神拳考.jpg %}
```

![example](example.png)

#### 安装

```
npm install git://github.com/Unparalleled-Calvin/hexo-book-card#master
```
